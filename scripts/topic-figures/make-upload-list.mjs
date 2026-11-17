// Write docs/reports/topic-images/upload-list.txt: the topic-figure images that are NOT yet live on
// img.marlbridge.com, one "<folder>/<file>.webp" per line. upload-figures.mjs (run on the owner's PC)
// reads this list from GitHub and uploads only these, instead of checking every image itself.
// Run before asking for an upload:  node scripts/topic-figures/make-upload-list.mjs
import fs from 'node:fs';
import path from 'node:path';

const GEN = 'docs/reports/topic-images/generated';
const OUT = 'docs/reports/topic-images/upload-list.txt';
const HOST = 'https://img.marlbridge.com/';

const items = [];
for (const dir of fs.readdirSync(GEN).sort()) {
  const j = path.join(GEN, dir, 'figures.json');
  if (!fs.existsSync(j)) continue;
  for (const f of JSON.parse(fs.readFileSync(j, 'utf8'))) items.push(`${dir}/${f.file}`);
}

// HEAD each image; anything that is not a clean 200 after retries counts as missing.
const live = async (name) => {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(HOST + name, { method: 'HEAD', headers: { 'User-Agent': 'curl/8.5.0' }, signal: AbortSignal.timeout(20000) });
      if (r.status === 200) return true;
      if (r.status === 404) return false;
    } catch {}
    await new Promise((r) => setTimeout(r, 1500 * (i + 1)));
  }
  return false;
};
const missing = [];
const queue = [...items];
let done = 0;
await Promise.all(Array.from({ length: 32 }, async () => {
  while (queue.length) {
    const it = queue.shift();
    if (!(await live(path.basename(it)))) missing.push(it);
    if (++done % 500 === 0) process.stdout.write(`\r  checked ${done}/${items.length}`);
  }
}));
missing.sort();
fs.writeFileSync(OUT, `# Topic-figure images not yet on img.marlbridge.com (${new Date().toISOString().slice(0, 10)}): ${missing.length} of ${items.length}\n` + missing.map((m) => m + '\n').join(''));
console.log(`\n${missing.length} of ${items.length} images need uploading -> ${OUT}`);
