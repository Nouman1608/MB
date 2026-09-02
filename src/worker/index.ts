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
import {
  onRequestGet as onSearchDemandGet,
  onRequestPost as onSearchDemandPost,
} from '../../functions/api/admin/search-demand.ts';
import { runGscRefresh, type D1Database } from '../../functions/_lib/gsc-refresh.ts';

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
  GSC_SERVICE_ACCOUNT_JSON?: string;
  /**
   * D-125 -- D1 binding for the live Search Console demand-engine
   * snapshot store (mb-search-demand). See wrangler.jsonc's
   * d1_databases entry and functions/_lib/gsc-refresh.ts.
   */
  DB?: D1Database;
}

/**
 * Minimal local Cron Trigger types, same rationale as Env above: this repo
 * doesn't depend on @cloudflare/workers-types, so the two ambient types
 * scheduled() needs are hand-written here rather than pulled in wholesale.
 */
interface ScheduledController {
  cron: string;
  scheduledTime: number;
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const ENQUIRY_PATH = '/api/enquiry';

/**
 * D-123/D-124 -- this site is deployed as a Worker with static assets, not
 * classic Cloudflare Pages (see this file's own header comment above): the
 * `functions/` directory is NOT auto-routed the way it would be on Pages.
 * functions/api/admin/gsc-verify.ts existed as dead code for one deploy
 * cycle (D-123) before this was caught -- every route under functions/
 * needs an explicit dispatch entry here, exactly like ENQUIRY_PATH below,
 * or it is unreachable in production regardless of how correct the
 * function file itself is. See D-124 for the full account. gsc-verify.ts
 * itself is retired as of D-125 (its one job -- proving the credential
 * worked -- is done; the live dashboard below supersedes it), so this
 * lesson is applied to SEARCH_DEMAND_PATH instead, not repeated.
 */
const SEARCH_DEMAND_PATH = '/api/admin/search-demand';

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

    if (pathname === SEARCH_DEMAND_PATH || pathname === `${SEARCH_DEMAND_PATH}/`) {
      if (request.method === 'GET') return onSearchDemandGet({ env, request });
      if (request.method === 'POST') return onSearchDemandPost({ env });
      return new Response(
        JSON.stringify({ ok: false, message: 'Method not allowed.' }),
        { status: 405, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } },
      );
    }

    return env.ASSETS.fetch(request);
  },

  /**
   * D-125 -- Cron Trigger (see wrangler.jsonc's `triggers.crons`). Runs the
   * same refresh logic as the dashboard's manual "Refresh now" button
   * (functions/api/admin/search-demand.ts's onRequestPost) so there is one
   * implementation of "how a refresh happens," not two -- see
   * functions/_lib/gsc-refresh.ts's header comment for the full design
   * rationale (window size, row caps, subrequest budget).
   */
  async scheduled(_controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(
      runGscRefresh(env).then((result) => {
        if (!result.ok) {
          console.error('gsc scheduled refresh reported errors', JSON.stringify(result));
        }
      }),
    );
  },
};
