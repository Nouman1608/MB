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

/**
 * Adds the opt-out marker to HTML responses for visitors outside the
 * UK/Europe, and gives every HTML page an ETag with If-None-Match support.
 *
 * D-349 (audit R-06) -- live HTML carried no ETag, so every repeat visit
 * downloaded the whole page. After the first D-349 deploy it was clear the
 * asset store sends no ETag for HTML at all (checked 27 Sep 2026: the new
 * code was live and /trial/ still had none), so the tag is computed here:
 * the asset's own ETag when there is one, otherwise a SHA-1 of the page as
 * built. Pages rewritten for the opt-out region get their own weak tag,
 * since their bytes differ. A matching If-None-Match gets a 304.
 */
export async function applyConsentRegion(request: Request, response: Response): Promise<Response> {
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.toLowerCase().includes('text/html')) return response;
  const country = (request as unknown as { cf?: { country?: string } }).cf?.country;
  const Rewriter = (globalThis as unknown as { HTMLRewriter?: new () => HtmlRewriterLike }).HTMLRewriter;
  const optout = consentRegionFor(country) === 'optout' && typeof Rewriter === 'function';
  const rewrite = (r: Response) => new Rewriter!()
    .on('html', { element(el) { el.setAttribute('data-mb-consent-region', 'optout'); } })
    .transform(r);
  if (response.status !== 200) return optout ? rewrite(response) : response;

  let base = response;
  let assetTag = response.headers.get('etag');
  if (!assetTag) {
    const body = await response.arrayBuffer();
    assetTag = `"${await sha1Hex(body)}"`;
    base = new Response(body, response);
  }
  const tag = optout ? optoutEtag(assetTag) : assetTag;
  if (ifNoneMatchHits(request.headers.get('if-none-match'), tag)) {
    const headers = new Headers(base.headers);
    headers.delete('content-length');
    headers.delete('content-type');
    headers.set('etag', tag);
    return new Response(null, { status: 304, headers });
  }
  const served = optout ? rewrite(base) : base;
  const out = new Response(served.body, served);
  out.headers.set('etag', tag);
  return out;
}

async function sha1Hex(body: ArrayBuffer): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-1', body);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** W/"<asset tag>-optout": weak, because the bytes differ from the asset's. */
export function optoutEtag(assetTag: string): string {
  const opaque = assetTag.replace(/^W\//, '').replace(/^"|"$/g, '');
  return `W/"${opaque}-optout"`;
}

/** RFC 9110 weak comparison against an If-None-Match list (or "*"). */
export function ifNoneMatchHits(header: string | null, tag: string): boolean {
  if (!header) return false;
  const strip = (t: string) => t.trim().replace(/^W\//, '');
  if (header.trim() === '*') return true;
  return header.split(',').some((t) => strip(t) === strip(tag));
}
