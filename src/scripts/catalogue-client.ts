/**
 * D-286 -- browser-side access to /tools-data/, shared by the homepage
 * syllabus finder, the revision planner, the diagnostics and the trial form.
 * Memoised, so a page that uses two of these fetches the catalogue once.
 * Every function degrades to an empty result on failure: a tool must show
 * its own honest error state rather than throw.
 */
import type { CatalogueEntry, CourseDetail } from '../utils/tools/catalogue';

export type { CatalogueEntry, CourseDetail };

let cataloguePromise: Promise<CatalogueEntry[]> | null = null;
const detailPromises = new Map<string, Promise<CourseDetail | null>>();

export function loadCatalogue(): Promise<CatalogueEntry[]> {
  cataloguePromise ??= fetch('/tools-data/catalogue.json')
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
    .catch(() => {
      cataloguePromise = null; // allow a retry on the next call
      return [];
    });
  return cataloguePromise;
}

/** `id` is 'board/qualification/subject' -- only ever a value from the catalogue itself. */
export function loadCourse(id: string): Promise<CourseDetail | null> {
  if (!/^[a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+$/.test(id)) return Promise.resolve(null);
  let p = detailPromises.get(id);
  if (!p) {
    p = fetch(`/tools-data/${id}.json`)
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null);
    detailPromises.set(id, p);
  }
  return p;
}

/** Display label, e.g. "Cambridge IGCSE Chemistry (0620)". IB names already carry the board. */
export function courseLabel(e: Pick<CatalogueEntry, 'b' | 'bs' | 'q' | 's' | 'code'>): string {
  const bq = e.bs === 'ib' ? e.q : `${e.b} ${e.q}`;
  return `${bq} ${e.s}${e.code ? ` (${e.code})` : ''}`;
}

/** Consent-safe analytics call; never throws, never blocks the tool. */
export function track(name: string, params: Record<string, string | number | boolean>): void {
  try {
    const w = window as unknown as { mbTrack?: (n: string, p: Record<string, unknown>) => void };
    if (typeof w.mbTrack === 'function') w.mbTrack(name, params);
  } catch {
    /* analytics must never break a tool */
  }
}
