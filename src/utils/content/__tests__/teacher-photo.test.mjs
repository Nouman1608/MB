import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { teacherPhotoSrcset, teacherPhotoWebpPath, TEACHER_PHOTO_WIDTHS } from '../teacher-photo.ts';

// D-TBD: teacher photographs are served as small WebP copies of the JPEG.
const all = () => true;
const none = () => false;

test('the WebP copy sits beside the JPEG, named by width', () => {
  assert.equal(teacherPhotoWebpPath('/images/faculty/nouman-ahmed.jpg', 128), '/images/faculty/nouman-ahmed-128.webp');
  assert.equal(teacherPhotoWebpPath('/images/faculty/a.JPEG', 224), '/images/faculty/a-224.webp');
});

test('srcset lists every copy that exists, with width descriptors', () => {
  assert.equal(
    teacherPhotoSrcset('/images/faculty/nouman-ahmed.jpg', all),
    '/images/faculty/nouman-ahmed-128.webp 128w, /images/faculty/nouman-ahmed-224.webp 224w',
  );
});

test('a copy that does not exist is never listed', () => {
  assert.equal(teacherPhotoSrcset('/images/faculty/a.jpg', (p) => p.endsWith('-128.webp')), '/images/faculty/a-128.webp 128w');
  assert.equal(teacherPhotoSrcset('/images/faculty/a.jpg', none), undefined);
});

test('anything that is not a faculty JPEG is left alone', () => {
  assert.equal(teacherPhotoSrcset(undefined, all), undefined);
  assert.equal(teacherPhotoSrcset('', all), undefined);
  assert.equal(teacherPhotoSrcset('/images/brand/marlbridge-og.png', all), undefined);
  assert.equal(teacherPhotoSrcset('https://example.com/images/faculty/a.jpg', all), undefined);
  assert.equal(teacherPhotoSrcset('/images/faculty/nested/a.jpg', all), undefined);
});

// Reads the real files (run from the repository root, as test:tools does).
test('every published profile photograph has its JPEG and both WebP copies', () => {
  const dir = 'src/content/authors';
  let photos = 0;
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const m = readFileSync(join(dir, file), 'utf8').match(/^image:\s*"?([^"\n]+)"?\s*$/m);
    if (!m) continue;
    photos++;
    const image = m[1];
    assert.ok(existsSync(join('public', image)), `${file}: ${image} is missing from public/`);
    for (const width of TEACHER_PHOTO_WIDTHS) {
      const copy = teacherPhotoWebpPath(image, width);
      assert.ok(existsSync(join('public', copy)), `${file}: ${copy} is missing (run node scripts/generate-faculty-webp.mjs)`);
    }
    assert.equal(teacherPhotoSrcset(image), TEACHER_PHOTO_WIDTHS.map((w) => `${teacherPhotoWebpPath(image, w)} ${w}w`).join(', '));
  }
  assert.ok(photos > 0, 'no profile photographs found');
});
