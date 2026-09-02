/**
 * GET /api/admin/gsc-verify — Cloudflare Pages Function.
 *
 * TEMPORARY, verification-only endpoint. Its only job is to prove that the
 * `GSC_SERVICE_ACCOUNT_JSON` Worker secret (a Google service-account key,
 * added as a Restricted user on the `sc-domain:marlbridge.com` Search
 * Console property) actually works end-to-end: sign a JWT, exchange it for
 * an OAuth access token, and run the smallest possible read-only
 * `searchAnalytics.query` request against the live property. It does not
 * store anything, does not run on a schedule, and is not the demand-engine
 * dashboard.
 *
 * IMPORTANT — read before building on this: a real, reusable Search Console
 * demand engine already exists in this repo, built by the Search
 * Intelligence & Demand-Led Growth Programme:
 *   - scripts/growth/gsc-opportunity-report.mjs (deterministic opportunity
 *     scoring — QUICK_WIN / CTR_OPPORTUNITY / EMERGING_DEMAND / etc.)
 *   - scripts/growth/types.mjs (the normalized SearchPerformanceRecord
 *     shape analysis code consumes)
 *   - docs/growth/README.md, which explicitly anticipates this exact next
 *     step: "A future GSC API path ... should normalize into the same
 *     records and reuse the same scoring function — not fork the analysis
 *     logic."
 * That engine is CSV-import-first today (see docs/growth/README.md, "Why
 * CSV-first, not connector-first") and deliberately runs as a standalone
 * Node script/CI job, never as a production-site dependency (Section 44 of
 * that programme's brief: no direct production dependency on a Google
 * account). This endpoint exists only because the credential happened to
 * be provisioned as a Cloudflare Worker secret first, and a live check
 * needed somewhere to run it from. Building the actual live-API import
 * path as a Worker+D1+dashboard system, rather than extending
 * scripts/growth/ with an API-based SearchPerformanceRecord source, would
 * duplicate that programme's work and contradict its own stated
 * architecture — see docs/programme-register.md's governance rule before
 * doing that. Flagged here, not decided here; see the decision-log entry
 * this endpoint shipped with.
 *
 * Gating: unlisted only (not linked anywhere, no auth), matching this
 * site's established "gated = unlisted" convention for internal pages
 * (see src/pages/admin/practice-gaps.astro's header comment). Unlike a
 * static admin page, every hit to this endpoint makes one real call to
 * Google's API — acceptable for a short-lived verification check, not
 * acceptable as the permanent shape of anything reachable at scale. Remove
 * or properly gate this route once its one-time job (proving the
 * credential works) is done.
 *
 * Required Cloudflare Pages configuration:
 *   - `GSC_SERVICE_ACCOUNT_JSON` — Pages secret, the full JSON key file
 *     downloaded when the service account's key was created. Owner-
 *     configured directly; never handled by any session.
 */

interface Env {
  GSC_SERVICE_ACCOUNT_JSON?: string;
}

interface ServiceAccountKey {
  client_email: string;
  private_key: string;
}

interface SearchAnalyticsRow {
  keys?: string[];
  clicks?: number;
  impressions?: number;
  ctr?: number;
  position?: number;
}

interface SearchAnalyticsResponse {
  rows?: SearchAnalyticsRow[];
}

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
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
 * Uses the Workers runtime's native WebCrypto (crypto.subtle) rather than a
 * JWT library, matching this project's established pattern of hand-writing
 * a single Cloudflare Function's crypto/HTTP needs instead of adding a new
 * dependency for it (see functions/api/enquiry.ts's Resend call).
 */
async function getAccessToken(key: ServiceAccountKey): Promise<string> {
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

export const onRequestGet = async (context: { env: Env }): Promise<Response> => {
  const { env } = context;

  if (!env.GSC_SERVICE_ACCOUNT_JSON) {
    return jsonResponse(503, {
      ok: false,
      message: 'GSC_SERVICE_ACCOUNT_JSON is not configured.',
    });
  }

  let key: ServiceAccountKey;
  try {
    const parsed = JSON.parse(env.GSC_SERVICE_ACCOUNT_JSON) as Partial<ServiceAccountKey>;
    if (!parsed.client_email || !parsed.private_key) {
      throw new Error('parsed JSON is missing client_email or private_key');
    }
    key = { client_email: parsed.client_email, private_key: parsed.private_key };
  } catch (err) {
    return jsonResponse(500, {
      ok: false,
      message: 'GSC_SERVICE_ACCOUNT_JSON could not be parsed as a service account key.',
      detail: err instanceof Error ? err.message : String(err),
    });
  }

  // Smallest possible read-only request: 1 dimension, 1 row, 7-day window.
  const property = 'sc-domain:marlbridge.com';
  const end = new Date();
  const start = new Date(end.getTime() - 7 * 24 * 60 * 60 * 1000);
  const startDate = start.toISOString().slice(0, 10);
  const endDate = end.toISOString().slice(0, 10);
  const dimensions = ['query'];
  const rowLimit = 1;

  try {
    const accessToken = await getAccessToken(key);
    const queryRes = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(property)}/searchAnalytics/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ startDate, endDate, dimensions, rowLimit }),
      },
    );

    const bodyText = await queryRes.text();
    if (!queryRes.ok) {
      return jsonResponse(502, {
        ok: false,
        message: `Search Console API responded HTTP ${queryRes.status}`,
        property,
        requestedDateRange: { startDate, endDate },
        requestedDimensions: dimensions,
        detail: bodyText.slice(0, 2000),
      });
    }

    const parsed = JSON.parse(bodyText) as SearchAnalyticsResponse;
    const rows = parsed.rows ?? [];

    return jsonResponse(200, {
      ok: true,
      property,
      requestedDateRange: { startDate, endDate },
      requestedDimensions: dimensions,
      requestedRowLimit: rowLimit,
      rowCount: rows.length,
      sampleRow: rows[0] ?? null,
    });
  } catch (err) {
    return jsonResponse(500, {
      ok: false,
      message: 'Verification request failed.',
      detail: err instanceof Error ? err.message : String(err),
    });
  }
};

export const onRequestPost = async (): Promise<Response> =>
  jsonResponse(405, { ok: false, message: 'Method not allowed.' });
