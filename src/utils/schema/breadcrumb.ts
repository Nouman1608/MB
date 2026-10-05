import { absoluteUrl } from '../seo/meta';
import type { Crumb } from '../seo/meta';

export function breadcrumbNode(allCrumbs: readonly Crumb[]) {
  // Navigation round (6 Oct 2026): a visible crumb that points into a page
  // (e.g. /levels/igcse/#cambridge, a course page's #topic- anchor) is the
  // same URL as its parent for search engines, so it is left out of the
  // structured data; the visible breadcrumb keeps it.
  const crumbs = allCrumbs.filter((c, i) => i === allCrumbs.length - 1 || !c.href.includes('#'));
  if (crumbs.length < 2) return null;
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.href),
    })),
  };
}
