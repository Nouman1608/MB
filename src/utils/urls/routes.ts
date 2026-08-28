import type { CollectionEntry } from 'astro:content';

/** Canonical URL paths. Every internal link goes through these. */
export const routes = {
  home: '/',
  programs: '/programs/',
  program: (id: string) => `/programs/${id}/`,
  subjects: '/subjects/',
  subject: (id: string) => `/subjects/${id}/`,
  resources: '/resources/',
  resource: (id: string) => `/resources/${id}/`,
  /** Anchor into the resource-type section on the flat /resources/ index — not a separate URL. */
  resourceTypeAnchor: (resourceType: string) => `/resources/#${resourceType}`,
  articles: '/articles/',
  article: (id: string) => `/articles/${id}/`,
  authors: '/authors/',
  author: (id: string) => `/authors/${id}/`,
  tutoring: '/tutoring/',
  pricing: '/pricing/',
  checklists: '/checklists/',
  schools: '/schools/',
  about: '/about/',
  contact: '/contact/',
  trial: '/trial/',
  pakistan: '/pakistan/',
  gulf: '/gulf/',
} as const;

export const resourceUrl = (entry: CollectionEntry<'resources'>) =>
  routes.resource(entry.id);
