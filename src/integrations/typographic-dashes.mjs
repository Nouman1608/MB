/**
 * D-349 (audit R-01, whole family) -- a spaced double hyphen (" -- ") is
 * how this codebase's source text writes a dash, and it reached visitors
 * as a literal "--" in 8,066 places on 1,512 built pages (27 Sep 2026
 * count). After the build, this rewrites " -- " to a spaced en dash
 * (" – ") in visible text only: never inside <script>, <style>, <pre>,
 * <code>, <textarea> or any tag or attribute, so code samples and data
 * keep their exact characters. It runs in astro:build:done, before the
 * postbuild Pagefind step, so the search index sees the same text.
 *
 * D-359 (audit S-01) -- the same dash also reached search results and
 * shared-link previews: 437 meta descriptions and the JSON-LD of 49 pages
 * still carried " -- ". Two narrow additions, and nothing else: the
 * content="" of description / og:description / twitter:description and
 * og:title / twitter:title meta tags, and the text inside
 * <script type="application/ld+json"> (in JSON, " -- " can only occur
 * inside a string). All other scripts, attributes, code and pre are left
 * exactly as built.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAW = new Set(['script', 'style', 'pre', 'code', 'textarea']);
const DASH = /(^|\s)--(?=\s|$)/g;
const META_KEYS = new Set(['description', 'og:description', 'twitter:description', 'og:title', 'twitter:title']);
const dash = (t) => t.replace(DASH, '$1\u2013');

/** D-359 -- rewrite content="" on the listed meta tags only. */
function fixMeta(tag) {
  if (!/^<meta\b/i.test(tag)) return tag;
  const key = (tag.match(/\b(?:name|property)\s*=\s*"([^"]*)"/i) || [])[1];
  if (!key || !META_KEYS.has(key.toLowerCase())) return tag;
  return tag.replace(/(\bcontent\s*=\s*")([^"]*)(")/i, (_, a, v, b) => a + dash(v) + b);
}

/** D-359 -- JSON-LD blocks: " -- " can only sit inside a JSON string. */
function fixJsonLd(html) {
  return html.replace(/(<script\b[^>]*type\s*=\s*"application\/ld\+json"[^>]*>)([\s\S]*?)(<\/script>)/gi, (_, open, body, close) => open + dash(body) + close);
}

/** Returns the HTML with " -- " replaced in text nodes outside RAW elements. */
export function fixDashes(html) {
  let out = '';
  let depth = 0; // how many RAW elements we are inside
  const re = /<!--[\s\S]*?-->|<\/?([a-zA-Z][\w-]*)\b[^>]*>/g;
  let last = 0;
  let m;
  while ((m = re.exec(html))) {
    const text = html.slice(last, m.index);
    out += depth === 0 ? dash(text) : text;
    const tag = fixMeta(m[0]);
    const name = (m[1] || '').toLowerCase();
    if (name && RAW.has(name)) {
      if (tag.startsWith('</')) depth = Math.max(0, depth - 1);
      else if (!tag.endsWith('/>')) depth += 1;
    }
    out += tag;
    last = re.lastIndex;
  }
  const tail = html.slice(last);
  out += depth === 0 ? dash(tail) : tail;
  return fixJsonLd(out);
}

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(p);
    else if (entry.name.endsWith('.html')) yield p;
  }
}

export default function typographicDashes() {
  return {
    name: 'marlbridge-typographic-dashes',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        let files = 0;
        for await (const file of htmlFiles(root)) {
          const html = await readFile(file, 'utf8');
          const fixed = fixDashes(html);
          if (fixed !== html) {
            await writeFile(file, fixed, 'utf8');
            files += 1;
          }
        }
        logger.info(`D-349: spaced "--" set as an en dash in ${files} HTML files`);
      },
    },
  };
}
