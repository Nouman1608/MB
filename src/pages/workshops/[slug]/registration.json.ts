/**
 * D-286 -- the public facts the registration endpoint re-checks for one
 * workshop (functions/api/workshop-register.ts reads this through the ASSETS
 * binding, so the page and the server share one source). Only published
 * workshops get one, and it carries nothing private: no joining link, no
 * registrant data.
 */
import type { APIRoute } from 'astro';
import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

export async function getStaticPaths() {
  return (await getCollection('workshops'))
    .filter((w) => w.data.publicationState === 'published')
    .map((w) => ({ params: { slug: w.id }, props: { w } }));
}

export const GET: APIRoute = async ({ props }) => {
  const { w } = props as { w: CollectionEntry<'workshops'> };
  const teacher = await getEntry(w.data.teacher);
  return new Response(JSON.stringify({
    slug: w.id,
    title: w.data.title,
    startsAt: w.data.startsAt,
    durationMinutes: w.data.durationMinutes,
    status: w.data.status,
    registration: w.data.registration,
    teacher: teacher?.data.name ?? null,
    format: w.data.format,
  }), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
