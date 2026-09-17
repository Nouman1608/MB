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

export const rtlBlocksPlugin = {
  name: 'marlbridge-rtl-blocks',
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
