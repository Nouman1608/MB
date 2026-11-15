/**
 * D-TBD -- WebP copies of the teacher photographs.
 *
 * Author profiles record one photograph each, a 640x640 JPEG under
 * /images/faculty/ (`image:` in src/content/authors/*.md). The pages show it
 * at 40 to 112 CSS px, so scripts/generate-faculty-webp.mjs writes two small
 * WebP copies beside each original: `<name>-128.webp` and `<name>-224.webp`.
 *
 * The profile's `image` field is NOT changed: the JPEG stays the <img>
 * fallback, the Person schema image and the file the image manifest
 * records. This helper only derives the copies' paths from it, and lists a
 * copy only if the file is really in public/. A photograph added without
 * running the script therefore renders as the plain JPEG, never as a broken
 * image.
 *
 * Keep TEACHER_PHOTO_WIDTHS in step with WIDTHS in the generator script.
 */
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

export const TEACHER_PHOTO_WIDTHS = [128, 224];

const FACULTY_JPEG = /^\/images\/faculty\/[^/]+\.jpe?g$/i;

/** `/images/faculty/a.jpg`, 128 -> `/images/faculty/a-128.webp`. */
export const teacherPhotoWebpPath = (image: string, width: number): string =>
  image.replace(/\.jpe?g$/i, `-${width}.webp`);

const publicFileExists = (urlPath: string): boolean =>
  existsSync(resolve(process.cwd(), 'public', `.${urlPath}`));

const cache = new Map<string, string | undefined>();

/**
 * The `srcset` for a teacher photograph's WebP copies, with width
 * descriptors ("… 128w, … 224w"), or undefined when the path is not a
 * faculty JPEG or no copy exists. `exists` is injectable for the unit test.
 */
export function teacherPhotoSrcset(
  image: string | undefined,
  exists: (urlPath: string) => boolean = publicFileExists,
): string | undefined {
  if (!image || !FACULTY_JPEG.test(image)) return undefined;
  const useCache = exists === publicFileExists;
  if (useCache && cache.has(image)) return cache.get(image);
  const candidates = TEACHER_PHOTO_WIDTHS
    .map((width) => ({ width, path: teacherPhotoWebpPath(image, width) }))
    .filter((c) => exists(c.path))
    .map((c) => `${c.path} ${c.width}w`);
  const srcset = candidates.length > 0 ? candidates.join(', ') : undefined;
  if (useCache) cache.set(image, srcset);
  return srcset;
}
