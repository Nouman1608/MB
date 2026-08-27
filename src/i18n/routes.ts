/**
 * v1.x CLOSURE WS2 -- canonical registry of every page that has (or will
 * have) a translated ar/ur/bn counterpart, and the path-derivation rule
 * between an English page and its locale counterpart.
 *
 * Every translated route is simply `/{locale}` + the English path (e.g.
 * '/about/' -> '/ar/about/'), including home ('/' -> '/ar/'). Keeping this
 * as one small, exhaustive map -- rather than deriving it ad hoc per page --
 * is what lets Meta.astro and LocaleLayout.astro emit *correct* reciprocal
 * hreflang for every translated page (not just the homepage, which is all
 * the previous single-landing-page design needed) without each page
 * hand-rolling the other locales' URLs and risking drift.
 *
 * Scope note (D-051): only these 20 pages (19 static/informational pages +
 * home) are translated in this release. The two 160-row academic hub
 * matrices (/boards/[board]/[qualification]/[subject]/,
 * /checklists/[board]/[qualification]/[subject]/) and the collection-item
 * detail pages (programs/[slug], subjects/[slug], authors/[slug],
 * resources/[slug], articles/[slug], levels/[qualification]/) are NOT in
 * this map and are not translated -- their English pages are linked to
 * directly from translated directory pages instead. Adding one of them
 * later means adding one entry here.
 */

export type TranslationKey =
  | 'home' | 'about' | 'contact' | 'pricing' | 'schools' | 'trial' | 'tutoring' | 'search'
  | 'legal-accessibility' | 'legal-cookies' | 'legal-editorial-policy' | 'legal-privacy' | 'legal-terms'
  | 'boards' | 'checklists' | 'levels' | 'programs' | 'resources' | 'subjects' | 'articles';

export const EN_PATH: Record<TranslationKey, string> = {
  home: '/',
  about: '/about/',
  contact: '/contact/',
  pricing: '/pricing/',
  schools: '/schools/',
  trial: '/trial/',
  tutoring: '/tutoring/',
  search: '/search/',
  'legal-accessibility': '/legal/accessibility/',
  'legal-cookies': '/legal/cookies/',
  'legal-editorial-policy': '/legal/editorial-policy/',
  'legal-privacy': '/legal/privacy/',
  'legal-terms': '/legal/terms/',
  boards: '/boards/',
  checklists: '/checklists/',
  levels: '/levels/',
  programs: '/programs/',
  resources: '/resources/',
  subjects: '/subjects/',
  articles: '/articles/',
};

export type TranslatedLocale = 'ar' | 'ur' | 'bn';

export const TRANSLATED_LOCALES: readonly TranslatedLocale[] = ['ar', 'ur', 'bn'];

/** '/about/' + 'ar' -> '/ar/about/'. '/' + 'ar' -> '/ar/'. */
export function localePath(locale: TranslatedLocale, key: TranslationKey): string {
  return `/${locale}${EN_PATH[key]}`;
}
