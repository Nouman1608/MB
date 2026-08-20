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
 * Static assets are matched first by the runtime, so this fetch handler is
 * only reached for paths with no corresponding file in dist/. /api/enquiry is
 * handled here; anything else is delegated to the asset binding so that
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

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);

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
