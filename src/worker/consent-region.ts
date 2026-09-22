/**
 * D-280 -- region-aware analytics consent.
 *
 * WHY
 * Every visitor, in every country, got the opt-in banner and GA4 defaulted to
 * "denied". BigQuery (14-20 Sep 2026) showed ~87% of session_start events
 * arriving cookieless, with no visitor or traffic source -- mostly from
 * Pakistan, India, Malaysia, Kenya and the Gulf.
 *
 * WHAT (owner decision, 22 Sep 2026 -- not legal advice)
 * The banner is shown only in the UK and Europe (EEA + UK + Switzerland and
 * related territories). Everywhere else, including Pakistan and the Gulf,
 * analytics runs by default and "Cookie Settings" in the footer switches it
 * off. The Worker marks HTML served to those visitors with
 * <html data-mb-consent-region="optout">; ConsentAnalytics.astro reads it.
 * Absent attribute == banner, so an unknown country, a failed rewrite or
 * local dev all fall back to the banner. Same rule as learnersacademy.com.pk
 * (LA PR #12).
 */
export const OPT_IN_COUNTRIES: ReadonlySet<string> = new Set([
  // EU member states
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE',
  'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  // Rest of the EEA, UK, Switzerland
  'IS', 'LI', 'NO', 'GB', 'CH',
  // UK Crown dependencies and EU territories Cloudflare may report separately
  'GG', 'JE', 'IM', 'GI', 'GF', 'GP', 'MQ', 'RE', 'YT', 'MF', 'AX',
]);

export type ConsentRegion = 'optin' | 'optout';

/** Unknown, missing, Tor ("T1") or "XX" country codes get the banner. */
export function consentRegionFor(country: string | null | undefined): ConsentRegion {
  if (!country || typeof country !== 'string') return 'optin';
  const cc = country.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(cc) || cc === 'XX' || cc === 'T1') return 'optin';
  return OPT_IN_COUNTRIES.has(cc) ? 'optin' : 'optout';
}

interface HtmlRewriterLike {
  on(selector: string, handlers: { element(el: { setAttribute(name: string, value: string): void }): void }): HtmlRewriterLike;
  transform(response: Response): Response;
}

/** Adds the opt-out marker to HTML responses for visitors outside the UK/Europe. */
export function applyConsentRegion(request: Request, response: Response): Response {
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.toLowerCase().includes('text/html')) return response;
  const country = (request as unknown as { cf?: { country?: string } }).cf?.country;
  if (consentRegionFor(country) !== 'optout') return response;
  const Rewriter = (globalThis as unknown as { HTMLRewriter?: new () => HtmlRewriterLike }).HTMLRewriter;
  if (typeof Rewriter !== 'function') return response;
  return new Rewriter()
    .on('html', { element(el) { el.setAttribute('data-mb-consent-region', 'optout'); } })
    .transform(response);
}
