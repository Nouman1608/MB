/**
 * Shared loaders for the Academic QA framework (D-457): the validator
 * (validate-academic-qa.mjs), the scorecard (academic-qa-scorecard.mjs) and
 * the review-pack generator read the repository through these, so they
 * agree on what a resource, a reviewer and a content hash are.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

export const RES_DIR = 'src/content/resources';
export const AUTH_DIR = 'src/content/authors';
export const QA_DIR = 'docs/reports/academic-qa';
export const ASSESSMENTS_FILE = `${QA_DIR}/assessments.json`;
export const TEACHER_VERIFICATIONS_FILE = 'docs/reports/academic-review/teacher-verifications.json';
export const LEDGER_CSV = 'docs/reports/academic-review/ledger.csv';

/** Kept in step with scripts/academic-review-ledger.mjs BOARD_DOMAINS. */
export const BOARD_DOMAINS = {
  cambridge: ['cambridgeinternational.org'], aqa: ['aqa.org.uk'], ocr: ['ocr.org.uk'],
  oxfordaqa: ['oxfordaqa.com'], edexcel: ['qualifications.pearson.com', 'pearson.com'], ib: ['ibo.org'],
};

/**
 * Frontmatter keys that never reach a student and carry no academic claim:
 * the internal review note and two display-ordering fields. Changing them
 * does not change what was assessed, so they are left out of the hash.
 * (Learned on 15 Nov 2026: D-453 reworded 7,636 reviewNote lines in one
 * commit, which would otherwise have made every assessment stale.)
 * Every other key, and the whole body, is hashed: an unknown or new field
 * counts as content until someone decides otherwise.
 */
export const HASH_EXCLUDED_KEYS = ['reviewNote', 'featured', 'order'];
const EXCLUDED_LINE = new RegExp(`^(?:${HASH_EXCLUDED_KEYS.join('|')}):.*$\\n?`, 'gm');

/**
 * sha256 of a resource's academic content: the file with LF line endings
 * (a Windows checkout and CI agree), minus the HASH_EXCLUDED_KEYS lines of
 * the frontmatter.
 */
export function contentSha256(text) {
  const lf = text.replace(/\r\n/g, '\n');
  const m = lf.match(/^---\n([\s\S]*?\n)---\n/);
  const normalised = m ? `---\n${m[1].replace(EXCLUDED_LINE, '')}---\n${lf.slice(m[0].length)}` : lf;
  return createHash('sha256').update(normalised, 'utf8').digest('hex');
}
export const fileSha256 = (path) => contentSha256(readFileSync(path, 'utf8'));

const scalar = (fm, key) => (fm.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'))?.[1] ?? '').trim().replace(/^["']|["']$/g, '');
const list = (fm, key) => {
  const m = fm.match(new RegExp(`^${key}:\\s*\\[(.*)\\]`, 'm'));
  return m ? m[1].split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean) : [];
};
const topicsBlock = (fm) => {
  const block = fm.match(/^syllabusTopics:\s*\n([\s\S]*?)(?=^\S|(?![\s\S]))/m);
  if (!block) return [];
  return block[1].split(/^\s*-\s+/m).slice(1).map((e) => ({
    qualification: (e.match(/qualification:\s*"?([a-z-]+)"?/) || [])[1],
    topic: (e.match(/topic:\s*"?([a-z0-9-]+)"?/) || [])[1],
    subtopic: (e.match(/subtopic:\s*"?([a-z0-9-]+)"?/) || [])[1],
    coverage: (e.match(/coverage:\s*"?([a-z-]+)"?/) || [])[1],
  }));
};

/** Every resource, sorted by slug, with the fields the QA tools need. */
export function loadResources() {
  return readdirSync(RES_DIR).filter((f) => f.endsWith('.md')).sort().map((f) => {
    const path = join(RES_DIR, f);
    const raw = readFileSync(path, 'utf8');
    const fm = raw.replace(/\r\n/g, '\n').split(/^---$/m)[1] ?? '';
    return {
      slug: f.replace(/\.md$/, ''),
      path: `${RES_DIR}/${f}`,
      sha256: contentSha256(raw),
      title: scalar(fm, 'title'),
      seoTitle: scalar(fm, 'seoTitle'),
      description: scalar(fm, 'description'),
      resourceType: scalar(fm, 'resourceType'),
      subject: scalar(fm, 'subject'),
      boards: list(fm, 'boards'),
      qualifications: list(fm, 'qualifications'),
      syllabusCodes: list(fm, 'syllabusCodes'),
      syllabusSeries: scalar(fm, 'syllabusSeries'),
      publishedDate: scalar(fm, 'publishedDate'),
      reviewStatus: scalar(fm, 'reviewStatus') || 'review-pending',
      draft: /^draft:\s*true/m.test(fm),
      syllabusTopics: topicsBlock(fm),
    };
  });
}

/** Author profiles: id -> { name, isReviewer, boards, subjects }. Same rule as validate-review-integrity.mjs. */
export function loadAuthors() {
  const out = new Map();
  for (const f of readdirSync(AUTH_DIR).filter((x) => x.endsWith('.md'))) {
    const fm = readFileSync(join(AUTH_DIR, f), 'utf8').split('---')[1] ?? '';
    const arr = (k) => { try { return JSON.parse(fm.match(new RegExp(`^${k}:\\s*(\\[.*\\])`, 'm'))?.[1] ?? '[]'); } catch { return []; } };
    out.set(f.replace(/\.md$/, ''), {
      name: (fm.match(/^name:\s*"?([^"\n]+)"?/m) || [])[1] ?? f,
      isReviewer: /^isReviewer:\s*true/m.test(fm),
      boards: arr('boardsTaught'),
      subjects: [...arr('subjectsTaught'), ...arr('subjectsReviewed')],
    });
  }
  return out;
}

export const loadJson = (path, fallback) => (existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : fallback);

/** Minimal RFC-4180 CSV reader for the ledger (quoted cells, "" escapes, newlines in quotes). */
export function readCsv(path) {
  const text = readFileSync(path, 'utf8').replace(/\r\n/g, '\n');
  const rows = [];
  let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (q) {
      if (ch === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; }
      else cell += ch;
    } else if (ch === '"') q = true;
    else if (ch === ',') { row.push(cell); cell = ''; }
    else if (ch === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
    else cell += ch;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [head, ...body] = rows;
  return body.filter((r) => r.length > 1).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])));
}

export const todayUtc = () => new Date().toISOString().slice(0, 10);
