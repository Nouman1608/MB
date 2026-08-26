/**
 * Worker entry point for marlbridge.com.
 *
 * WHY THIS FILE EXISTS
 *
 * The site began life as a Cloudflare Pages project (see README), where
 * `functions/api/enquiry.ts` was picked up automatically by Pages' file-based
 * Functions routing. The project is now deployed as a Worker with static
 * assets, and Workers do NOT read the `functions/` directory — so without an
 * explicit entry point, POST /api/enquiry simply would not exist and the
 * contact form would post into a 404.
 *
 * Rather than move or rewrite the handler, this file adapts it: the Pages
 * Function keeps its exact shape, its unit tests
 * (functions/api/__tests__/) keep passing unchanged, and reverting to Pages
 * later remains possible by deleting this file and wrangler.jsonc.
 *
 * ROUTING
 *
 * v1.x CLOSURE WS3 update: `wrangler.jsonc` now sets `run_worker_first:
 * true`, so this fetch() handler runs for EVERY request, not just paths
 * with no corresponding file in dist/ (that was the previous, and still
 * the Workers Assets platform default, behaviour) -- needed so the
 * www -> apex host redirect below can see real page requests, not only
 * true 404s. /api/enquiry is handled here; the www check runs before it;
 * everything else is delegated to the asset binding so that
 * `not_found_handling: "404-page"` serves dist/404.html properly.
 */
import { onRequestPost, onRequestGet } from '../../functions/api/enquiry.ts';

/**
 * Minimal local binding types. Deliberately hand-written rather than adding
 * @cloudflare/workers-types, matching the convention already established in
 * functions/api/enquiry.ts of not pulling a dependency in for one file.
 */
interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  TURNSTILE_SECRET_KEY?: string;
  RESEND_API_KEY?: string;
  ENQUIRY_RATE_LIMIT?: {
    get(key: string): Promise<string | null>;
    put(key: string, value: string, opts?: { expirationTtl?: number }): Promise<void>;
  };
}

const ENQUIRY_PATH = '/api/enquiry';

/**
 * v1.x CLOSURE WS3 -- www.marlbridge.com -> marlbridge.com, 301, single hop.
 *
 * Both hostnames have been observed serving byte-identical content at the
 * same Worker deployment (the Workers Assets binding resolves purely by
 * path, not host), which means www.marlbridge.com is already routed to
 * this exact Worker -- so a host check at the top of fetch() is a real,
 * sufficient, repository-only fix; no Cloudflare dashboard change or
 * wrangler.jsonc route is needed IF that routing assumption holds. This is
 * verified empirically after deploy (docs/decision-log.md, v1.x Closure
 * WS3) rather than assumed -- if www still returns 200 after this ships,
 * the fallback is a Cloudflare Bulk Redirect (dashboard-only, documented
 * in the decision log and the final report), not a further code change.
 *
 * Preserves the full path and query string via URL.hostname reassignment
 * (nothing else on the URL is touched); single 301; cannot loop since the
 * check only fires for the literal www host, never for the apex it
 * redirects to.
 */
const WWW_HOST = 'www.marlbridge.com';
const APEX_HOST = 'marlbridge.com';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === WWW_HOST) {
      url.hostname = APEX_HOST;
      return Response.redirect(url.toString(), 301);
    }

    const { pathname } = url;

    // Accept the trailing-slash variant too: the site is built with
    // `trailingSlash: 'always'`, so a form action can legitimately arrive
    // either way depending on how it was authored.
    if (pathname === ENQUIRY_PATH || pathname === `${ENQUIRY_PATH}/`) {
      if (request.method === 'POST') return onRequestPost({ request, env });
      if (request.method === 'GET') return onRequestGet();
      return new Response(
        JSON.stringify({ ok: false, message: 'Method not allowed.' }),
        { status: 405, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } },
      );
    }

    return env.ASSETS.fetch(request);
  },
};
