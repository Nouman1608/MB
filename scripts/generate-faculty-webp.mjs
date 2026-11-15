#!/usr/bin/env node
/**
 * Small WebP copies of the teacher photographs (D-TBD).
 *
 * The originals in public/images/faculty/ are 640x640 JPEGs (see
 * docs/image-source-manifest.md), but the site shows them at 40 to 112 CSS
 * px. This script writes two resized WebP copies beside each original:
 *
 *   <name>-128.webp   for the 40-64 px avatars at up to 2x density
 *   <name>-224.webp   for the 112 px profile photo at 2x, and 3x avatars
 *
 * Resize and re-encode only: no crop, no retouching, no colour change. A
 * copy is never larger than its original (a width the original cannot fill
 * is skipped). The JPEG originals are kept and stay the <img> fallback, the
 * Person schema image and the file the manifest records.
 * src/utils/content/teacher-photo.ts decides at build time which copies
 * exist; a photograph with no copies simply renders as the JPEG.
 *
 * Usage:
 *   node scripts/generate-faculty-webp.mjs           write missing or changed copies
 *   node scripts/generate-faculty-webp.mjs --check   write nothing; exit 1 if a copy
 *                                                    is missing or has the wrong size
 *
 * Run it after adding or replacing a JPEG in public/images/faculty/.
 * Keep WIDTHS in step with TEACHER_PHOTO_WIDTHS in teacher-photo.ts.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const DIR = 'public/images/faculty';
const WIDTHS = [128, 224];
const QUALITY = 80;
const check = process.argv.includes('--check');

const originals = (await readdir(DIR)).filter((f) => /\.jpe?g$/i.test(f)).sort();
const problems = [];
let written = 0;
let unchanged = 0;
let originalBytes = 0;
const copyBytes = Object.fromEntries(WIDTHS.map((w) => [w, 0]));

for (const file of originals) {
  const src = join(DIR, file);
  const input = await readFile(src);
  originalBytes += input.length;
  const meta = await sharp(input).metadata();
  for (const width of WIDTHS) {
    const out = join(DIR, file.replace(/\.jpe?g$/i, `-${width}.webp`));
    if (meta.width < width) {
      // Never upscale. The helper lists only the copies that exist.
      if (existsSync(out)) problems.push(`${out}: exists, but ${file} is only ${meta.width}px wide (would be an upscale)`);
      continue;
    }
    if (check) {
      if (!existsSync(out)) { problems.push(`${out}: missing (run node scripts/generate-faculty-webp.mjs)`); continue; }
      const m = await sharp(out).metadata();
      const expectedHeight = Math.round((meta.height * width) / meta.width);
      if (m.format !== 'webp' || m.width !== width || m.height !== expectedHeight) {
        problems.push(`${out}: is ${m.format} ${m.width}x${m.height}, expected webp ${width}x${expectedHeight}`);
      }
      copyBytes[width] += (await readFile(out)).length;
      continue;
    }
    const buffer = await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toBuffer();
    copyBytes[width] += buffer.length;
    if (existsSync(out) && (await readFile(out)).equals(buffer)) { unchanged++; continue; }
    await writeFile(out, buffer);
    written++;
  }
}

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
console.log(`Faculty WebP copies -- ${originals.length} JPEG originals, ${kb(originalBytes)}.`);
for (const width of WIDTHS) console.log(`  ${width}px copies: ${kb(copyBytes[width])}`);
if (!check) console.log(`  ${written} written, ${unchanged} already up to date.`);

if (problems.length > 0) {
  console.error(`FAIL: ${problems.length} problem(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(check ? 'PASS: every original has its WebP copies at the expected size.' : 'Done.');
