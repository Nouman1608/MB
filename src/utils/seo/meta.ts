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
 */
const BRAND_SUFFIX_MAX_TITLE_LENGTH = 50;

export const pageTitle = (title: string, isHome = false): string => {
  if (isHome) return `${site.name} — ${title}`;
  if (title.length > BRAND_SUFFIX_MAX_TITLE_LENGTH) return title;
  return `${title} — ${site.name}`;
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
const META_DESCRIPTION_MAX_LENGTH = 165;

export const metaDescription = (description: string, maxLength = META_DESCRIPTION_MAX_LENGTH): string => {
  if (description.length <= maxLength) return description;
  const truncated = description.slice(0, maxLength - 1);
  const lastSpace = truncated.lastIndexOf(' ');
  const safe = (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated).trimEnd();
  return `${safe}…`;
};
