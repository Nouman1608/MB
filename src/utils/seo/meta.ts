import { site } from '../../data/site';

export interface Crumb { readonly label: string; readonly href: string }

export interface SeoProps {
  title: string;
  description: string;
  /** Route path, always with leading and trailing slash. */
  path: string;
  type?: 'website' | 'article';
  image?: string;
  publishedDate?: Date;
  updatedDate?: Date;
  author?: string;
  noindex?: boolean;
  breadcrumbs?: readonly Crumb[];
  jsonLd?: readonly object[];
}

export const absoluteUrl = (path: string): string =>
  new URL(path, site.url).toString();

export const pageTitle = (title: string, isHome = false): string =>
  isHome ? `${site.name} — ${title}` : `${title} — ${site.name}`;
