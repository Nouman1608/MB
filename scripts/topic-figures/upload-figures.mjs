// Uploads topic-figure .webp images to the R2 bucket behind img.marlbridge.com.
// Run via UPLOAD-ALL-FIGURES.bat. Normally reads upload-list.txt from GitHub (the images not yet online,
// worked out in advance) and uploads only those. "UPLOAD-ALL-FIGURES.bat all" checks every image instead.
// Safe to re-run: images already live on img.marlbridge.com are skipped.
import { execSync, spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const BUCKET = 'marlbridge-figures';
const HOST = 'https://img.marlbridge.com/';
const WRANGLER = 'npx --yes wrangler@4';
const CONCURRENCY = 6;
const root = path.dirname(fileURLToPath(import.meta.url));
// Logging must never stop the upload: if OneDrive has the log file locked, switch to a new log file.
let logPath = path.join(root, 'upload-log.txt');
const writeLog = (s) => {
  try { fs.appendFileSync(logPath, s + '\n'); return; } catch {}
  try { logPath = path.join(root, `upload-log-${Date.now()}.txt`); fs.appendFileSync(logPath, s + '\n'); return; } catch {}
  try { logPath = path.join(os.tmpdir(), 'mbfig-upload-log.txt'); fs.appendFileSync(logPath, s + '\n'); } catch {}
};
const log = (s) => { console.log(s); writeLog(s); };

function run(cmd, env = process.env) {
  try { return execSync(cmd, { encoding: 'utf8', env, stdio: ['ignore', 'pipe', 'pipe'] }); }
  catch (e) { return (e.stdout || '') + (e.stderr || ''); }
}

process.on('uncaughtException', (e) => { log(`\nSTOPPED with an error: ${e && e.message}`); process.exit(1); });
log(`\n${new Date().toISOString()}  Starting. Node ${process.version}. Folder: ${root}`);

// 1. Sign in (opens the browser once) and find the account that owns the bucket.
log('Step 1: checking Cloudflare sign-in (first run downloads the Cloudflare tool)...');
let who = run(`${WRANGLER} whoami`);
if (!/[0-9a-f]{32}/.test(who)) {
  log('Not signed in yet. A browser window will open: you are already logged in to Cloudflare, so click Allow.');
  try { execSync(`${WRANGLER} login`, { stdio: 'inherit' }); }
  catch (e) { log(`Sign-in did not complete: ${e.message}`); process.exit(1); }
  who = run(`${WRANGLER} whoami`);
}
log(`whoami said:\n${who.trim().split('\n').slice(-8).join('\n')}`);
const ids = [...new Set(who.match(/\b[0-9a-f]{32}\b/g) || [])];
let accountId = null;
for (const id of ids) {
  const out = run(`${WRANGLER} r2 bucket list`, { ...process.env, CLOUDFLARE_ACCOUNT_ID: id });
  if (out.includes(BUCKET)) { accountId = id; break; }
}
if (!accountId) {
  log(`Could not find the bucket "${BUCKET}" in your Cloudflare account(s). Output was:\n${who}`);
  process.exit(1);
}
log(`Step 2: found bucket ${BUCKET} in account ${accountId.slice(0, 6)}...`);
const env = { ...process.env, CLOUDFLARE_ACCOUNT_ID: accountId };

// 2. Collect images.
const RAW = 'https://raw.githubusercontent.com/Nouman1608/MB/claude/festive-mendel-avo9ej/docs/reports/topic-images/generated/';
const LIST_URL = 'https://raw.githubusercontent.com/Nouman1608/MB/claude/festive-mendel-avo9ej/docs/reports/topic-images/upload-list.txt';
const files = [];
let expected = 0, fetched = 0;
const fetchFailed = [];
const listFailed = [];
// Every request gets a time limit and retries, so one stalled connection cannot hang the run.
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const getWithTimeout = async (url, tries = 6) => {
  for (let i = 0; i < tries; i++) {
    try { const r = await fetch(url, { signal: AbortSignal.timeout(30000) }); if (r.ok || r.status === 404) return r; } catch {}
    await sleep(1000 * 2 ** i); // 1s, 2s, 4s, 8s... GitHub briefly refuses bursts of requests
  }
  return null;
};
const pool = async (items, n, fn) => { const q = [...items]; await Promise.all(Array.from({ length: n }, async () => { while (q.length) await fn(q.shift()); })); };
const download = async (folder, f) => {
  const dir = path.join(root, folder);
  fs.mkdirSync(dir, { recursive: true });
  const p = path.join(dir, f);
  if (fs.existsSync(p) && fs.statSync(p).size >= 1000) return p;
  const g = await getWithTimeout(RAW + encodeURIComponent(folder) + '/' + encodeURIComponent(f));
  if (g && g.ok) { const buf = Buffer.from(await g.arrayBuffer()); if (buf.subarray(0, 4).toString() === 'RIFF') { fs.writeFileSync(p, buf); fetched++; return p; } }
  fetchFailed.push(f);
  return null;
};

// Quick mode (the normal case): GitHub holds upload-list.txt, the images not yet online, worked out
// in advance. Only those are fetched and uploaded. Run with "all" (UPLOAD-ALL-FIGURES.bat all) to
// check every image instead.
let quick = null;
if (!process.argv.includes('--all')) {
  const r = await getWithTimeout(LIST_URL, 4);
  if (r && r.ok) quick = (await r.text()).split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
}
if (quick) {
  log(`Quick mode: ${quick.length} new images listed on GitHub.`);
  expected = quick.length;
  await pool(quick, 4, async (item) => {
    const [folder, f] = item.split('/');
    const p = await download(folder, f);
    if (p) files.push(p);
  });
} else {
log(process.argv.includes('--all') ? 'Full check of every image (all).' : 'No upload list on GitHub; checking every image.');
// Every lesson folder's figures.json lists its images; any image missing from this folder is
// downloaded from the (public) GitHub branch first.
// Create a local folder for any lesson that exists on GitHub but not here yet (new lessons).
try {
  const r = await fetch('https://api.github.com/repos/Nouman1608/MB/contents/docs/reports/topic-images/generated?ref=claude/festive-mendel-avo9ej', { headers: { 'User-Agent': 'marlbridge-figure-uploader', Accept: 'application/vnd.github+json' }, signal: AbortSignal.timeout(30000) });
  if (r.ok) {
    let added = 0;
    for (const e of await r.json()) {
      if (e.type === 'dir' && !fs.existsSync(path.join(root, e.name))) { fs.mkdirSync(path.join(root, e.name)); added++; }
    }
    if (added) log(`Found ${added} new lesson folders on GitHub.`);
  } else log(`Could not list lesson folders on GitHub (HTTP ${r.status}); using local folders only.`);
} catch (e) { log(`Could not list lesson folders on GitHub (${e.message}); using local folders only.`); }

const dirs = fs.readdirSync(root, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
let seen = 0;
await pool(dirs, 4, async (name) => {
  const dir = path.join(root, name);
  // Refresh this lesson's figure list from GitHub, so new or corrected figures are picked up.
  const r = await getWithTimeout(RAW + encodeURIComponent(name) + '/figures.json');
  if (r && r.ok) { try { const txt = await r.text(); JSON.parse(txt); fs.writeFileSync(path.join(dir, 'figures.json'), txt); } catch {} }
  else if (!r) listFailed.push(name);
  const listed = fs.existsSync(path.join(dir, 'figures.json'))
    ? JSON.parse(fs.readFileSync(path.join(dir, 'figures.json'), 'utf8')).map((x) => x.file) : [];
  expected += listed.length;
  for (const f of listed) await download(name, f);
  for (const f of fs.readdirSync(dir)) if (f.endsWith('.webp')) files.push(path.join(dir, f));
  seen++;
  if (seen % 20 === 0 || seen === dirs.length) process.stdout.write(`\r  Checking lessons: ${seen}/${dirs.length}  |  images downloaded ${fetched}   `);
});
console.log('');
}
if (fetched) log(`Downloaded ${fetched} images that were missing from this folder.`);
if (fetchFailed.length) log(`Could not download ${fetchFailed.length} images (run again to retry):\n  ${fetchFailed.join('\n  ')}`);
if (listFailed.length) log(`Could not get the figure list for ${listFailed.length} lessons (run again to retry): ${listFailed.slice(0, 5).join(', ')}${listFailed.length > 5 ? ' ...' : ''}`);
log(`Step 3: ${files.length} images in this folder (${expected} expected). Uploading the ones not yet online...`);

// 3. Upload the ones that are not live yet.
const isLive = async (name) => {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(HOST + name, { method: 'HEAD', headers: { 'User-Agent': 'curl/8.5.0' }, signal: AbortSignal.timeout(30000) });
      if (r.status === 200) return true;
      if (r.status === 404) return false;
    } catch {}
    await sleep(2000 * (i + 1));
  }
  return false;
};
// Windows tools fail on paths longer than ~250 characters, and some lesson paths are longer.
// So each image is copied to a short temporary path before upload; the online name is unchanged.
const tmpDir = path.join(os.tmpdir(), 'mbfig');
fs.mkdirSync(tmpDir, { recursive: true });
let tmpCount = 0;
const put = (file) => new Promise((resolve) => {
  const name = path.basename(file);
  const short = path.join(tmpDir, `${process.pid}-${++tmpCount}.webp`);
  try { fs.writeFileSync(short, fs.readFileSync(file)); } // reading also downloads OneDrive online-only files
  catch (e) { resolve({ ok: false, out: `could not read the local file: ${e.message}` }); return; }
  const cmd = `${WRANGLER} r2 object put "${BUCKET}/${name}" --file "${short}" --remote --content-type image/webp --cache-control "public, max-age=31536000, immutable"`;
  const p = spawn(cmd, { shell: true, env, stdio: ['ignore', 'pipe', 'pipe'] });
  let out = '';
  p.stdout.on('data', (b) => (out += b));
  p.stderr.on('data', (b) => (out += b));
  p.on('close', (code) => { try { fs.unlinkSync(short); } catch {} resolve({ ok: code === 0, out }); });
});

let done = 0, skipped = 0, uploaded = 0;
const failed = [];
const queue = [...files];
async function worker() {
  while (queue.length) {
    const file = queue.shift();
    const name = path.basename(file);
    if (await isLive(name)) { skipped++; }
    else {
      let r = await put(file);
      if (!r.ok) r = await put(file); // one retry
      if (r.ok) uploaded++; else { failed.push(name); writeLog(`FAILED ${name}\n${r.out}`); }
    }
    done++;
    if (done % 25 === 0 || done === files.length) {
      process.stdout.write(`\r  ${done}/${files.length} checked  |  uploaded ${uploaded}  |  already online ${skipped}  |  failed ${failed.length}   `);
    }
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));
if (!logPath.endsWith('upload-log.txt')) console.log(`(The log was saved to ${logPath} because upload-log.txt was locked.)`);
log(`\n\nFinished: uploaded ${uploaded}, already online ${skipped}, failed ${failed.length}.`);
if (failed.length) log(`Failed images (run the file again to retry):\n  ${failed.join('\n  ')}`);
