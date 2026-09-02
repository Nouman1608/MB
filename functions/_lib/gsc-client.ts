/**
 * functions/_lib/gsc-client.ts
 *
 * Shared Google Search Console API client for the live-API demand-engine
 * path (D-125). Extracted from the original functions/api/admin/gsc-verify.ts
 * verification endpoint (D-123/D-124) so the JWT-signing/OAuth-exchange code
 * has exactly one implementation, reused by both the manual/scheduled
 * refresh (functions/_lib/gsc-refresh.ts) and any future diagnostic route.
 *
 * Uses the Workers runtime's native WebCrypto (crypto.subtle) rather than a
 * JWT library, matching this project's established pattern of hand-writing
 * a single Cloudflare Function's crypto/HTTP needs instead of adding a new
 * dependency for it (see functions/api/enquiry.ts's Resend call, and
 * gsc-verify.ts before this extraction).
 */

export interface ServiceAccountKey {
  client_email: string;
  private_key: string;
}

export interface SearchAnalyticsRow {
  keys?: string[];
  clicks?: number;
  impressions?: number;
  ctr?: number;
  position?: number;
}

export interface SearchAnalyticsResponse {
  rows?: SearchAnalyticsRow[];
}

export interface SearchAnalyticsQueryBody {
  startDate: string;
  endDate: string;
  dimensions: string[];
  rowLimit: number;
}

export function parseServiceAccountKey(json: string): ServiceAccountKey {
  const parsed = JSON.parse(json) as Partial<ServiceAccountKey>;
  if (!parsed.client_email || !parsed.private_key) {
    throw new Error('parsed JSON is missing client_email or private_key');
  }
  return { client_email: parsed.client_email, private_key: parsed.private_key };
}

function base64UrlFromBytes(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlFromString(input: string): string {
  return base64UrlFromBytes(new TextEncoder().encode(input));
}

function pemToArrayBuffer(pem: string): ArrayBuffer {
  const stripped = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, '')
    .replace(/-----END PRIVATE KEY-----/, '')
    .replace(/\s+/g, '');
  const binary = atob(stripped);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

/**
 * Signs a Google service-account JWT and exchanges it for a short-lived
 * OAuth access token, per Google's server-to-server OAuth flow
 * (https://developers.google.com/identity/protocols/oauth2/service-account).
 * Callers should get one token per invocation (scheduled run or request)
 * and reuse it across every searchAnalytics.query call in that invocation
 * -- the token is valid for an hour, far longer than one refresh run takes,
 * and reusing it keeps subrequest counts down (relevant on Workers Free).
 */
export async function getAccessToken(key: ServiceAccountKey): Promise<string> {
  const nowSeconds = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claims = {
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: nowSeconds,
    exp: nowSeconds + 3600,
  };
  const signingInput = `${base64UrlFromString(JSON.stringify(header))}.${base64UrlFromString(JSON.stringify(claims))}`;

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    pemToArrayBuffer(key.private_key),
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(signingInput),
  );
  const jwt = `${signingInput}.${base64UrlFromBytes(new Uint8Array(signature))}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  if (!tokenRes.ok) {
    throw new Error(`Token exchange failed: HTTP ${tokenRes.status}`);
  }
  const tokenBody = (await tokenRes.json()) as { access_token?: string };
  if (!tokenBody.access_token) {
    throw new Error('Token exchange response had no access_token');
  }
  return tokenBody.access_token;
}

/**
 * One searchAnalytics.query call. Throws on a non-2xx response (with the
 * response body, truncated, in the error message) rather than returning a
 * partial/ambiguous result -- callers decide how to handle/log a failure
 * for their specific date+dimension.
 */
export async function querySearchAnalytics(
  accessToken: string,
  property: string,
  body: SearchAnalyticsQueryBody,
): Promise<SearchAnalyticsResponse> {
  const res = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(property)}/searchAnalytics/query`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  );
  const bodyText = await res.text();
  if (!res.ok) {
    throw new Error(`Search Console API responded HTTP ${res.status}: ${bodyText.slice(0, 500)}`);
  }
  return JSON.parse(bodyText) as SearchAnalyticsResponse;
}
