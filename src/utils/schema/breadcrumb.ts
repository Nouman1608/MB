import { absoluteUrl } from '../seo/meta';
import type { Crumb } from '../seo/meta';

export function breadcrumbNode(crumbs: readonly Crumb[]) {
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
