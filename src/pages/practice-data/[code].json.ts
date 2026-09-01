/**
 * Flagship Dominance/Trust Programme, D-104 follow-up.
 *
 * Static JSON endpoint serving one flagship code's practice-question bank
 * as its own cacheable resource, replacing the inline
 * <script type="application/json"> block that used to embed the same data
 * directly into src/pages/practice/[code]/index.astro's HTML (see
 * docs/decision-log.md D-104 for the measurements that motivated this: on
 * the two largest flagship codes -- 254 and ~190 questions -- that inline
 * block added 180-280KB raw to the page's own HTML, with no independent
 * cache lifetime, so every repeat visit re-downloaded the full bank).
 *
 * Built with Astro's static JSON-endpoint pattern (getStaticPaths + GET),
 * so this becomes a real prerendered file in `dist/practice-data/{code}.json`
 * at build time -- no server/edge function involved, same static-hosting
 * model as the rest of the site. Long, immutable caching is safe here
 * specifically because the page that fetches it appends a content hash as
 * a query param (`?v={hash}`, from dataHashFor in client-questions.ts) --
 * a content change produces a new hash and therefore a new URL at the next
 * build, so there's no risk of a stale cached response surviving a real
 * content update.
 *
 * The `Cache-Control` header below is kept for local `astro preview`
 * parity and as documented intent, but is NOT what actually reaches
 * production: this repo's static deploy serves every path with Cloudflare
 * Pages' own default (`max-age=0, must-revalidate`) unless overridden in
 * `public/_headers` -- see that file's own `/practice-data/*` entry, which
 * is the actual, authoritative source of this header in production. Keep
 * both in sync if either changes.
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { flagshipSpecs, } from '../../utils/academic/index.ts';
import { practiceQuestionsForCode } from '../../utils/practice/bank.ts';
import { buildClientQuestions } from '../../utils/practice/client-questions.ts';

export const getStaticPaths: GetStaticPaths = () => {
  return flagshipSpecs()
    .filter((f) => practiceQuestionsForCode(f.code).length > 0)
    .map((f) => ({ params: { code: f.code }, props: { spec: f } }));
};

export const GET: APIRoute = ({ props }) => {
  const { spec } = props as { spec: ReturnType<typeof flagshipSpecs>[number] };
  const clientQuestions = buildClientQuestions(spec);
  return new Response(JSON.stringify(clientQuestions), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
