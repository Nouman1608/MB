import { site } from '../../data/site';

export interface Crumb { readonly label: string; readonly href: string }

export interface SeoProps {
  title: string;
  description: string;
  /** Route path, always with leading and trailing slash. */
  path: string;
  type?: 'website' | 'article';
  image?: string;
  publishedDate?: Date;
  updatedDate?: Date;
  author?: string;
  noindex?: boolean;
  breadcrumbs?: readonly Crumb[];
  jsonLd?: readonly object[];
  /**
   * v1.x CLOSURE WS2 -- set on any English page that has a real ar/ur/bn
   * translated counterpart (see src/i18n/routes.ts). Meta.astro uses this
   * to emit correct, reciprocal hreflang alternates for that specific
   * page, not just the homepage.
   */
  translationKey?: import('../../i18n/routes').TranslationKey;
}

export const absoluteUrl = (path: string): string =>
  new URL(path, site.url).toString();

/**
 * Technical SEO re-audit (Sections 37-39, 2026-09-01) -- previously this
 * unconditionally appended " — Marlbridge" (13 characters incl. the spaces
 * and em-dash) to every non-home title. That's fine for short titles, but a
 * large share of this site's titles are already long because they carry an
 * official board/qualification/subject name (frequently sourced from
 * syllabus.officialTitle, for accuracy) -- appending the brand suffix
 * pushed hundreds of those past Google's practical ~60-65 character
 * truncation point, so it was routinely the brand name itself that got cut
 * off in search results, sometimes mid-word.
 *
 * The fix is deliberately narrow: it only decides whether to append the
 * suffix, and never touches the title text itself, so it cannot alter or
 * shorten an official qualification/board name. Short titles still get the
 * brand suffix exactly as before; a title already long enough that adding
 * the suffix would push it over the limit is left exactly as authored.
 *
 * D-462 (15 Nov 2026) -- the cut-off was a fixed "title over 50 characters",
 * so a 48-50 character title still got the suffix and came out at 61-63.
 * The content schema caps `seoTitle` at 60 (src/content.config.ts), so an
 * authored seoTitle of 48-50 characters was pushed past the limit it was
 * written to fit: 1,594 of 13,980 built pages on 15 Nov 2026 (1,286 of them
 * resources). The suffix is now added only when the whole title still fits
 * in TITLE_MAX_LENGTH, the same 60 the schema uses. Still suffix-only: the
 * title text is never shortened.
 */
const TITLE_MAX_LENGTH = 60;
const BRAND_SUFFIX = ` — ${site.name}`;

export const pageTitle = (title: string, isHome = false): string => {
  if (isHome) return `${site.name} — ${title}`;
  if (title.length + BRAND_SUFFIX.length > TITLE_MAX_LENGTH) return title;
  return `${title}${BRAND_SUFFIX}`;
};

/**
 * Technical SEO re-audit (Sections 37-39, 2026-09-01) -- meta
 * name="description", og:description and twitter:description are all
 * fixed-width snippets: Google, Twitter/X and Facebook each truncate them
 * for display (Google's practical limit is roughly 155-165 characters).
 * 409 of this site's built pages carried a description over that length --
 * mostly templated strings (e.g. checklist pages interpolating board +
 * qualification + subject + syllabus code) that are accurate and fine as
 * full sentences, just too long for a search-result snippet.
 *
 * This truncates only for that fixed-width-snippet use, at a word
 * boundary, so an over-length description gets a clean single "…" ending
 * here rather than being cut off mid-word by the platform itself. It is
 * deliberately NOT applied to the same description text where it is used
 * as JSON-LD structured data (webPageNode) or as on-page visible copy
 * (e.g. LocaleLayout's `lead` prop) -- those aren't rendered as a
 * fixed-width snippet, so shortening them there would only lose meaning
 * for no benefit.
 */
const META_DESCRIPTION_MAX_LENGTH = 155;

/** Shortest cut we accept at a sentence or clause boundary; shorter than this
 *  and a word-boundary cut keeps more of the sentence. */
const MIN_CUT_LENGTH = 70;
const DANGLING = /\s+(?:a|an|the|of|and|or|to|for|with|in|on|at|by|from|as|that|which|is|are|can|could|will|would|should|may|might|must|be|really|also|only|just|very|not|each|every|their|its|your|our)$/i;

/**
 * Nov 2026 SEO audit -- the previous version cut at 165 characters and ended
 * with an ellipsis, so a long description showed as a sentence trailing off.
 * It now returns a complete sentence of at most 155 characters: the longest
 * run of whole sentences that fits, else the longest whole clause (cut at a
 * ; : , or dash), else the longest run of whole words with any dangling
 * connective removed and a full stop added. Never mid-word, never an ellipsis.
 */
export const metaDescription = (description: string, maxLength = META_DESCRIPTION_MAX_LENGTH): string => {
  const text = description.replace(/\s+/g, ' ').trim();
  if (text.length <= maxLength) return text;
  const window = text.slice(0, maxLength + 1);

  // 1. Whole sentences: last ". " / "! " / "? " inside the window. A full stop
  //    after a digit or a single capital (e.g. "Sir A. Khan", "1.") is not a stop.
  let cut = -1;
  for (const m of window.matchAll(/[.!?](?=\s)/g)) {
    const i = m.index ?? 0;
    if (/[A-Z]$|\d$|(?:Mr|Mrs|Ms|Dr|Prof|St|vs|e\.g|i\.e)$/.test(window.slice(0, i))) continue;
    if (i + 1 <= maxLength) cut = i + 1;
  }
  if (cut >= MIN_CUT_LENGTH) return window.slice(0, cut);

  // 2. Whole clause: last ; : , or spaced dash, dropped, and closed with a stop.
  let clause = -1;
  for (const m of window.matchAll(/[;:,]\s|\s[–—-]\s/g)) {
    const i = m.index ?? 0;
    if (i <= maxLength - 1) clause = i;
  }
  if (clause >= MIN_CUT_LENGTH) return `${window.slice(0, clause).replace(DANGLING, '').trimEnd()}.`;

  // 3. Whole words, never mid-word.
  const head = window.slice(0, maxLength - 1);
  const lastSpace = head.lastIndexOf(' ');
  let words = (lastSpace > 0 ? head.slice(0, lastSpace) : head).replace(/[\s,;:–—-]+$/, '');
  while (DANGLING.test(words)) words = words.replace(DANGLING, '');
  return `${words.replace(/[.!?]$/, '')}.`;
};
