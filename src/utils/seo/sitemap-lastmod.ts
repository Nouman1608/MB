/**
 * Audit round 3 (item 49) -- <lastmod> for the two sitemap groups that had none:
 * sitemap-practice-0.xml and sitemap-localized-0.xml. The sitemap integration
 * writes a child's index <lastmod> as the newest <lastmod> among its URLs, so a
 * group whose URLs carry none gets none in /sitemap-index.xml.
 *
 * Same rule as every other group (astro.config.mjs buildLastmodMap /
 * buildIndexLastmods): a page's lastmod is a real date from the content it
 * shows, never the build date. Pages with no real date stay without one.
 *
 *  Practice (question banks and diagnostics). The questions are parsed out of
 *  practice-questions resources (src/utils/practice/bank.ts), so:
 *   - /practice/{code}/ -- the newest updatedDate/publishedDate among the
 *     resources its questions come from;
 *   - /practice/{code}/diagnostic/{set}/ -- the newest date among the resources
 *     of the set's questions, or the set's own review date (setReview.reviewedOn,
 *     shown on the page) if later;
 *   - /practice/ -- the newest of the above.
 *
 *  Localized (/ar/, /ur/, /bn/):
 *   - translated legal pages -- the page's own "last updated" date
 *     (LEGAL_COPY[...][locale].lastUpdated, the date the page displays);
 *   - a translated directory that lists the same English content as its English
 *     counterpart (/ar/articles/, /ar/resources/, ...) -- the English page's
 *     lastmod, which is the newest date among what it lists. Applied to every
 *     translated page whose English counterpart has a lastmod, EXCEPT the home
 *     page: the English home's date comes from the resources it lists, and the
 *     translated home pages do not list them.
 *   - everything else (about, pricing, contact, ...) has no real date, exactly
 *     like its English counterpart, and is left without one.
 */
import { flagshipSpecs } from '../academic/index.ts';
import { practiceQuestionsForCode } from '../practice/bank.ts';
import { DIAGNOSTIC_SETS, diagnosticPath } from '../../data/diagnostics.ts';
import { LEGAL_COPY } from '../../i18n/pages/legal.ts';
import { EN_PATH, TRANSLATED_LOCALES, localePath, type TranslationKey, type TranslatedLocale } from '../../i18n/routes.ts';

type Lookup = (path: string) => string | undefined;

function bump(map: Map<string, string>, path: string, iso: string | undefined): void {
  if (!iso) return;
  const prev = map.get(path);
  if (!prev || iso > prev) map.set(path, iso);
}

const isoDay = (d: string): string | undefined => (Number.isNaN(Date.parse(d)) ? undefined : new Date(d).toISOString());

/** lastmod for /practice/ pages. `resourceLastmod('/resources/<slug>/')` is the resource's real date. */
export function practiceLastmods(resourceLastmod: Lookup): Map<string, string> {
  const out = new Map<string, string>();
  const idToResource = new Map<string, string>();
  for (const spec of flagshipSpecs()) {
    const questions = practiceQuestionsForCode(spec.code);
    if (questions.length === 0) continue; // no /practice/{code}/ page is built
    for (const q of questions) {
      idToResource.set(q.id, q.resourceSlug);
      const iso = resourceLastmod(`/resources/${q.resourceSlug}/`);
      bump(out, `/practice/${spec.code}/`, iso);
      bump(out, '/practice/', iso);
    }
  }
  for (const set of DIAGNOSTIC_SETS) {
    const path = diagnosticPath(set);
    for (const id of set.questionIds) {
      const slug = idToResource.get(id);
      if (slug) bump(out, path, resourceLastmod(`/resources/${slug}/`));
    }
    if (set.setReview) bump(out, path, isoDay(set.setReview.reviewedOn));
    const iso = out.get(path);
    bump(out, '/practice/', iso);
  }
  return out;
}

/** Month names exactly as the translated legal pages write them (src/i18n/pages/legal.ts). */
const MONTHS: Record<TranslatedLocale, readonly string[]> = {
  ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  ur: ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
  bn: ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'],
};

/** Eastern Arabic, Persian/Urdu and Bengali digits -> ASCII. */
const asciiDigits = (s: string): string =>
  s.replace(/[٠-٩۰-۹০-৯]/g, (ch) => {
    const c = ch.charCodeAt(0);
    return String(c - (c >= 0x09e6 ? 0x09e6 : c >= 0x06f0 ? 0x06f0 : 0x0660));
  });

/** '17 نوفمبر 2026' (ar), '১৭ নভেম্বর ২০২৬' (bn) ... -> '2026-11-17T00:00:00.000Z', or undefined if unreadable. */
export function parseLocalizedDate(text: string, locale: TranslatedLocale): string | undefined {
  const m = asciiDigits(text.normalize('NFC')).trim().match(/^(\d{1,2})\s+(\S+)\s+(\d{4})$/);
  if (!m) return undefined;
  const month = MONTHS[locale].findIndex((name) => name.normalize('NFC') === m[2]);
  if (month < 0) return undefined;
  const day = Number(m[1]);
  const date = new Date(Date.UTC(Number(m[3]), month, day));
  return date.getUTCDate() === day ? date.toISOString() : undefined;
}

/** lastmod for /ar/, /ur/, /bn/ pages. `englishLastmod(path)` is the English page's lastmod, if it has one. */
export function localizedLastmods(englishLastmod: Lookup): Map<string, string> {
  const out = new Map<string, string>();
  for (const key of Object.keys(EN_PATH) as TranslationKey[]) {
    if (key === 'home' || key === 'search') continue; // home: see header; search is not in the sitemap
    const iso = englishLastmod(EN_PATH[key]);
    if (!iso) continue;
    for (const locale of TRANSLATED_LOCALES) out.set(localePath(locale, key), iso);
  }
  for (const [legalKey, byLocale] of Object.entries(LEGAL_COPY)) {
    for (const locale of TRANSLATED_LOCALES) {
      const iso = parseLocalizedDate(byLocale[locale].lastUpdated, locale);
      if (iso) out.set(localePath(locale, `legal-${legalKey}` as TranslationKey), iso);
    }
  }
  return out;
}
