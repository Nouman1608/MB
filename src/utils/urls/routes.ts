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
  /** D-349 (audit R-07) -- one resource type for one subject; /resources/ links here instead of listing every card. */
  resourceBrowse: (resourceType: string, subjectId: string) => `/resources/${resourceType}/${subjectId}/`,
  /** Anchor into the resource-type section on the flat /resources/ index — not a separate URL. */
  resourceTypeAnchor: (resourceType: string) => `/resources/#${resourceType}`,
  articles: '/articles/',
  article: (id: string) => `/articles/${id}/`,
  authors: '/authors/',
  author: (id: string) => `/authors/${id}/`,
  /** D-349 (audit R-07) -- paginated full list of an author's resources. */
  authorResources: (id: string, page = 1) => (page > 1 ? `/authors/${id}/resources/${page}/` : `/authors/${id}/resources/`),
  tutoring: '/tutoring/',
  pricing: '/pricing/',
  checklists: '/checklists/',
  schools: '/schools/',
  about: '/about/',
  contact: '/contact/',
  trial: '/trial/',
  pakistan: '/pakistan/',
  gulf: '/gulf/',
  uk: '/uk/',
  reportCorrection: '/report-a-correction/',
} as const;

export const resourceUrl = (entry: CollectionEntry<'resources'>) =>
  routes.resource(entry.id);
