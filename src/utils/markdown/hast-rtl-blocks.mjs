/**
 * Right-to-left block direction for Arabic-script text in Markdown content.
 *
 * Resource pages are English (`<html dir="ltr">`), but several resources print
 * Qur'an passages, Hadiths and Urdu exam text. Without a `dir` attribute the
 * browser lays those blocks out left-to-right: the text is left-aligned and
 * sentence-final punctuation is drawn beside the first word. This Sätteri
 * hast plugin marks each text block whose letters are mostly Arabic-script as
 * `dir="rtl"`, with `lang="ur"` when it contains Urdu-only letters and
 * `lang="ar"` otherwise. Blocks that are mostly Latin are left alone; the
 * Unicode bidi algorithm already places short Arabic-script phrases correctly
 * inside an English sentence. (D-257.)
 */

const ARABIC_SCRIPT = /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/gu;
const ARABIC_LETTER = /[ؠ-يٮ-ۓەۮ-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/gu;
const LATIN_LETTER = /[A-Za-zÀ-ɏ]/gu;
// Letters used in Urdu but not in Arabic: ٹ ڈ ڑ ں ھ ہ ۂ ے ۓ
const URDU_ONLY = /[ٹڈڑںھہۂےۓ]/u;

const BLOCK_TAGS = ['p', 'li', 'td', 'th', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'dt', 'dd', 'figcaption'];

/** Classify a block's text: returns 'ar', 'ur' or null (leave as is). */
export function rtlLangFor(text) {
  if (!ARABIC_SCRIPT.test(text)) return null;
  ARABIC_SCRIPT.lastIndex = 0;
  const arabic = (text.match(ARABIC_LETTER) ?? []).length;
  const latin = (text.match(LATIN_LETTER) ?? []).length;
  if (arabic === 0 || arabic <= latin) return null;
  return URDU_ONLY.test(text) ? 'ur' : 'ar';
}

// A run of Latin-script text (English words with their spaces, digits and
// punctuation), starting at an optional opening bracket or quote and a Latin
// letter. Inside a right-to-left block such a run is wrapped in
// <span dir="ltr"> so its punctuation and word order stay as written (I397 (6)).
const LATIN_RUN = /[(\[“"‘']*[A-Za-z\u00C0-\u024F][A-Za-z\u00C0-\u024F0-9 \t\r\n'’"“”‘,.;:!?()\[\]\/&%+=…–—-]*/gu;

const blockAncestor = (node, ctx) => {
  let p = ctx.parent(node);
  while (p && !(p.type === 'element' && BLOCK_TAGS.includes(p.tagName))) p = ctx.parent(p);
  return p;
};

export const rtlBlocksPlugin = {
  name: 'marlbridge-rtl-blocks',
  text(node, ctx) {
    const value = node.value ?? '';
    if (!/[A-Za-z]/.test(value)) return;
    const block = blockAncestor(node, ctx);
    if (!block || !rtlLangFor(ctx.textContent(block))) return;
    const parts = [];
    let last = 0;
    for (const m of value.matchAll(LATIN_RUN)) {
      let run = m[0];
      const trimmed = run.replace(/[\s(\[“‘]+$/u, '');
      if (!/[A-Za-z\u00C0-\u024F]{2,}/u.test(trimmed)) continue;
      const start = m.index;
      if (start > last) parts.push({ type: 'text', value: value.slice(last, start) });
      parts.push({ type: 'element', tagName: 'span', properties: { dir: 'ltr' }, children: [{ type: 'text', value: trimmed }] });
      last = start + trimmed.length;
    }
    if (parts.length === 0) return;
    if (last < value.length) parts.push({ type: 'text', value: value.slice(last) });
    ctx.replaceNode(node, parts);
  },
  element: {
    filter: BLOCK_TAGS,
    visit(node, ctx) {
      const lang = rtlLangFor(ctx.textContent(node));
      if (!lang) return;
      const props = node.properties ?? {};
      if (props.dir || props.lang) return;
      ctx.setProperty(node, 'dir', 'rtl');
      ctx.setProperty(node, 'lang', lang);
    },
  },
};
