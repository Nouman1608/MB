/**
 * D-286 -- VideoObject structured data, only for a published video with a
 * real YouTube id and upload date (Google requires name, thumbnailUrl and
 * uploadDate). Never emitted for drafts or for a video without those facts.
 */
import type { CollectionEntry } from 'astro:content';
import { isoDuration } from '../content/media';

export function videoNodes(videos: CollectionEntry<'videos'>[]): object[] {
  return videos
    .filter((v) => v.data.publicationState === 'published' && v.data.youtubeId && v.data.uploadDate)
    .map((v) => ({
      '@type': 'VideoObject',
      name: v.data.title,
      description: v.data.summary,
      thumbnailUrl: `https://i.ytimg.com/vi/${v.data.youtubeId}/hqdefault.jpg`,
      uploadDate: v.data.uploadDate!.toISOString().slice(0, 10),
      ...(v.data.durationSeconds ? { duration: isoDuration(v.data.durationSeconds) } : {}),
      embedUrl: `https://www.youtube-nocookie.com/embed/${v.data.youtubeId}`,
      ...((v.body ?? '').trim() ? { transcript: (v.body ?? '').trim().slice(0, 5000) } : {}),
    }));
}
