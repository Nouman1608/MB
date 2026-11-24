#!/usr/bin/env node
/**
 * Audit round 3 (A6), items 47 and 48 -- repeatable checks, Node only, no dependencies.
 *
 * 47  Head SEO of six sample page types: JSON-LD blocks and their @type values,
 *     hreflang links, and the article:published_time / article:modified_time meta tags.
 *     Works against a live base URL or a built dist/ folder.
 * 48  Resource slug redirects: a seeded random sample of old slugs from
 *     src/worker/slug-redirects.json must answer 301 -> /resources/<new>/ and the
 *     new URL must answer 200. Live base URL only (dist/ has no Worker).
 *
 * Usage (from the repo root):
 *   node reports/audit3/check-47-48.mjs                         # both, against https://marlbridge.com
 *   node reports/audit3/check-47-48.mjs --base http://localhost:8787
 *   node reports/audit3/check-47-48.mjs --dist dist --only 47   # 47 on a local build
 *   node reports/audit3/check-47-48.mjs --only 48 --seed 20261125 --count 30
 *
 * Exit code 0 when every expectation holds, 1 otherwise.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const args = process.argv.slice(2);
const opt = (name, dflt) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : dflt;
};
const BASE = opt('base', 'https://marlbridge.com').replace(/\/$/, '');
const DIST = opt('dist', null);
const ONLY = opt('only', null);
const SEED = Number(opt('seed', '20261125'));
const COUNT = Number(opt('count', '30'));
const FIXED_SLUG = 'ib-ib-dp-biology-dp-biology-ib-dp-biology-1-a1-1';

let failures = 0;
const fail = (msg) => { failures++; console.log(`  FAIL ${msg}`); };
const ok = (msg) => console.log(`  ok   ${msg}`);

// ---------------------------------------------------------------- 47
// hreflang: only pages with real ar/ur/bn translations (src/i18n/routes.ts).
// published_time: only article-type pages (articles, resources, AP resources).
const PAGES = [
  { kind: 'homepage', path: '/', hreflang: true, published: false },
  { kind: 'course page', path: '/boards/cambridge/a-level/biology/', hreflang: false, published: false },
  { kind: 'resource page', path: '/resources/a-accounting-role-practice/', hreflang: false, published: true },
  { kind: 'article', path: '/articles/choosing-subjects-at-igcse-and-a-level/', hreflang: false, published: true },
  { kind: 'teacher profile', path: '/authors/ameer-hamza/', hreflang: false, published: false },
  { kind: '/ar/ page', path: '/ar/', hreflang: true, published: false },
  { kind: 'translated English page', path: '/about/', hreflang: true, published: false },
  { kind: '/ar/ inner page', path: '/ar/about/', hreflang: true, published: false },
];

async function getHtml(path) {
  if (DIST) {
    const file = join(resolve(DIST), path, 'index.html');
    if (!existsSync(file)) return { status: 'missing', html: '' };
    return { status: 'file', html: readFileSync(file, 'utf8') };
  }
  const res = await fetch(BASE + path, { redirect: 'manual' });
  return { status: res.status, html: await res.text() };
}

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return m ? (m[2] ?? m[3] ?? m[4]) : null;
};
const decode = (s) => s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

function collectTypes(node, out) {
  if (Array.isArray(node)) { node.forEach((n) => collectTypes(n, out)); return; }
  if (node && typeof node === 'object') {
    if (node['@type']) out.push([].concat(node['@type']).join('+'));
    for (const [k, v] of Object.entries(node)) if (k !== '@type') collectTypes(v, out);
  }
}

async function check47() {
  console.log(`\n== 47: head SEO (${DIST ? `dist ${DIST}` : BASE}) ==`);
  for (const p of PAGES) {
    const { status, html } = await getHtml(p.path);
    console.log(`\n${p.kind}  ${p.path}  [${status}]`);
    if (!html) { fail(`no HTML for ${p.path}`); continue; }
    const head = html.split(/<\/head>/i)[0];

    const blocks = [...html.matchAll(/<script\b[^>]*type\s*=\s*["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script>/gi)];
    console.log(`  JSON-LD blocks: ${blocks.length}`);
    blocks.forEach((b, i) => {
      try {
        const data = JSON.parse(b[1]);
        const top = data['@graph'] ?? [data];
        const topTypes = top.map((n) => [].concat(n['@type']).join('+'));
        const all = []; collectTypes(data, all);
        console.log(`    block ${i + 1}: @graph top-level @type = ${topTypes.join(', ')}`);
        console.log(`             all nested @type = ${[...new Set(all)].join(', ')}`);
      } catch (e) { fail(`block ${i + 1} is not valid JSON: ${e.message}`); }
    });
    if (blocks.length >= 1) ok('has JSON-LD'); else fail('no JSON-LD block');

    const alts = [...head.matchAll(/<link\b[^>]*>/gi)].map((m) => m[0])
      .filter((t) => /rel\s*=\s*["']?alternate/i.test(t) && /hreflang/i.test(t));
    console.log(`  hreflang links: ${alts.length}`);
    alts.forEach((t) => console.log(`    ${attr(t, 'hreflang')} -> ${decode(attr(t, 'href') ?? '')}`));
    if (p.hreflang) {
      const codes = new Set(alts.map((t) => attr(t, 'hreflang')));
      const want = ['en', 'ar', 'ur', 'bn', 'x-default'];
      const missing = want.filter((c) => !codes.has(c));
      if (missing.length) fail(`hreflang missing: ${missing.join(', ')}`); else ok('hreflang en/ar/ur/bn/x-default present');
    } else if (alts.length) fail('hreflang present on a page with no translation');
    else ok('no hreflang (no translation exists; correct)');

    const metas = [...head.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0]);
    const pub = metas.filter((t) => /published_time/i.test(t));
    const mod = metas.filter((t) => /modified_time/i.test(t));
    pub.forEach((t) => console.log(`  ${t}`));
    mod.forEach((t) => console.log(`  ${t}`));
    const misnamed = pub.filter((t) => attr(t, 'property') !== 'article:published_time');
    if (misnamed.length) fail(`published_time tag misnamed: ${misnamed.join(' ')}`);
    if (p.published) {
      if (pub.length === 1 && !misnamed.length) ok('one <meta property="article:published_time">'); else fail(`expected one article:published_time, found ${pub.length}`);
    } else if (pub.length) fail('article:published_time on a non-article page');
    else ok('no published_time (not an article; correct)');
  }
}

// ---------------------------------------------------------------- 48
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

async function head(url, hostHeader) {
  if (hostHeader) {
    // fetch() cannot set Host. Used only when the www host itself cannot be reached
    // (e.g. a sandbox proxy that allows only the apex): ask the apex with Host: www.
    const out = execFileSync('curl', ['-sI', '-H', `Host: ${hostHeader}`, url], { encoding: 'utf8' });
    const blocks = out.split(/\r?\n\r?\n/).filter((b) => /^HTTP\/\S+ \d{3}/m.test(b));
    const last = blocks.filter((b) => !/Connection Established/i.test(b)).pop() ?? '';
    const status = Number((last.match(/^HTTP\/\S+ (\d{3})/m) ?? [])[1]);
    const location = (last.match(/^location:\s*(\S+)/im) ?? [])[1] ?? null;
    return { status, location };
  }
  const res = await fetch(url, { method: 'HEAD', redirect: 'manual' });
  return { status: res.status, location: res.headers.get('location') };
}

async function headWww(url) {
  try { return { ...(await head(url)), via: 'direct' }; } catch {
    const apex = url.replace('://www.', '://');
    return { ...(await head(apex, new URL(url).host)), via: 'Host header' };
  }
}

async function check48() {
  console.log(`\n== 48: slug redirects (${BASE}, seed ${SEED}, ${COUNT} slugs) ==`);
  if (DIST && !args.includes('--base')) { console.log('  skipped: a dist folder has no Worker; add --base <url> to test redirects'); return; }
  const map = JSON.parse(readFileSync(join(REPO, 'src/worker/slug-redirects.json'), 'utf8'));
  const keys = Object.keys(map).sort();
  const rand = mulberry32(SEED);
  const pick = new Set([FIXED_SLUG]);
  while (pick.size < Math.min(COUNT, keys.length)) pick.add(keys[Math.floor(rand() * keys.length)]);
  const sample = [...pick];
  const host = new URL(BASE).host;

  const cases = [];
  sample.forEach((old, i) => {
    cases.push({ old, url: `${BASE}/resources/${old}/` });
    if (i < 4) cases.push({ old, url: `${BASE}/resources/${old}` }); // no trailing slash
  });
  if (host === 'marlbridge.com') {
    // www first goes to the apex (same path), then the apex 301s to the new slug.
    cases.push({ old: sample[1], url: `https://www.marlbridge.com/resources/${sample[1]}/`, www: true });
  }

  for (const c of cases) {
    const want = `${BASE}/resources/${map[c.old]}/`;
    const r1 = c.www ? await headWww(c.url) : await head(c.url);
    let line = `${c.url}${r1.via ? ` (${r1.via})` : ''}  ${r1.status} -> ${r1.location}`;
    let final = r1.location ? new URL(r1.location, c.url).toString() : null;
    if (c.www && r1.status === 301 && final && final !== want) {
      // Before the audit-3 Worker fix, www took two hops: www -> apex old slug -> new slug.
      const r2 = await head(final);
      line += `  | ${r2.status} -> ${r2.location}  [2 hops: Worker without the audit-3 single-hop fix]`;
      final = r2.location ? new URL(r2.location, final).toString() : null;
      if (r2.status !== 301) { fail(`${line} (second hop not 301)`); continue; }
      c.twoHops = true;
    }
    if (r1.status !== 301 || final !== want) { fail(`${line} (want 301 -> ${want})`); continue; }
    const r3 = await head(want);
    line += `  | new ${r3.status}`;
    if (r3.status !== 200 || c.twoHops) fail(line); else ok(line);
  }
}

if (!ONLY || ONLY === '47') await check47();
if (!ONLY || ONLY === '48') await check48();
console.log(`\n${failures ? `${failures} FAILURE(S)` : 'ALL CHECKS PASSED'}`);
process.exit(failures ? 1 : 0);
