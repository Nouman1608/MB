import type { CollectionEntry } from 'astro:content';

/** Canonical URL paths. Every internal link goes through these. */
export const routes = {
  home: '/',
  programs: '/programs/',
  program: (id: string) => `/programs/${id}/`,
  subjects: '/subjects/',
  subject: (id: string) => `/subjects/${id}/`,
  resources: '/resources/',
  resourceCategory: (category: string) => `/resources/${category}/`,
  resource: (category: string, id: string) => `/resources/${category}/${id}/`,
  learning: '/learning/',
  article: (id: string) => `/learning/${id}/`,
  tutoring: '/tutoring/',
  schools: '/schools/',
  about: '/about/',
  contact: '/contact/',
} as const;

export const resourceUrl = (entry: CollectionEntry<'resources'>) =>
  routes.resource(entry.data.category, entry.id);
