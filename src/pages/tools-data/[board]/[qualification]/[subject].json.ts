/**
 * D-286 -- /tools-data/{board}/{qualification}/{subject}.json: one course's
 * syllabus topics, each with the resources mapped to it. Fetched by the
 * revision planner and the diagnostics only for the course a student picks,
 * so no page has to carry the whole library. See src/utils/tools/catalogue.ts.
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { activeOnly, type Combination } from '../../../../utils/academic';
import { getResources } from '../../../../utils/content/collections';
import { courseDetail } from '../../../../utils/tools/catalogue';

export const getStaticPaths: GetStaticPaths = () =>
  activeOnly().map((c) => ({
    params: { board: c.boardSlug, qualification: c.qualificationSlug, subject: c.subjectSlug },
    props: { combination: c },
  }));

export const GET: APIRoute = async ({ props }) => {
  const { combination } = props as { combination: Combination };
  return new Response(JSON.stringify(courseDetail(combination, await getResources())), {
    status: 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
