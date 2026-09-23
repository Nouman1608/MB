/**
 * D-286 -- read helpers for the `videos` and `workshops` collections.
 *
 * Only published entries are ever returned for the public site. Drafts are
 * returned only when the build runs with MB_PREVIEW_DRAFTS=1, which exists so
 * a reviewer can see an unpublished workshop or video locally (every such
 * page is noindexed and carries a DRAFT banner). Production builds never set
 * it; the Cloudflare build command is `npm run build` with no such variable.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export const previewDrafts = (): boolean => process.env.MB_PREVIEW_DRAFTS === '1';

export async function getVideos(): Promise<CollectionEntry<'videos'>[]> {
  return (await getCollection('videos')).filter((v) =>
    (v.data.publicationState === 'published' && !!v.data.youtubeId) || previewDrafts());
}

export async function getWorkshops(): Promise<CollectionEntry<'workshops'>[]> {
  return (await getCollection('workshops'))
    .filter((w) => w.data.publicationState === 'published' || previewDrafts())
    .sort((a, b) => Date.parse(a.data.startsAt) - Date.parse(b.data.startsAt));
}

export const isDraft = (e: { data: { publicationState: string } }): boolean => e.data.publicationState !== 'published';

/** ISO 8601 duration for VideoObject, e.g. 425 -> PT7M5S. */
export const isoDuration = (seconds: number): string =>
  `PT${Math.floor(seconds / 60) ? `${Math.floor(seconds / 60)}M` : ''}${seconds % 60 ? `${seconds % 60}S` : ''}` || 'PT0S';

export const videosForResource = async (resourceId: string) =>
  (await getVideos()).filter((v) => v.data.relatedResources.some((r) => r.id === resourceId));

export const videosForTeacher = async (authorId: string) =>
  (await getVideos()).filter((v) => v.data.teacher.id === authorId);

export const videosForCourse = async (subjectId: string, boardSlug: string, qualificationSlug: string) =>
  (await getVideos()).filter((v) =>
    v.data.subject.id === subjectId &&
    (v.data.boards.length === 0 || v.data.boards.includes(boardSlug as never)) &&
    (v.data.qualifications.length === 0 || v.data.qualifications.includes(qualificationSlug as never)));
