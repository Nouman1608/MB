/**
 * D-286 -- /tools-data/catalogue.json: every published course with its
 * syllabus code and the free-tool links that exist for it. Read by the
 * revision planner and the trial form (the homepage finder inlines the same
 * data). Built from src/utils/tools/catalogue.ts; see that file.
 */
import type { APIRoute } from 'astro';
import { getResources } from '../../utils/content/collections';
import { catalogueIndex } from '../../utils/tools/catalogue';

export const GET: APIRoute = async () =>
  new Response(JSON.stringify(catalogueIndex(await getResources())), {
    status: 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
