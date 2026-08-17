/**
 * Canonical academic subject registry.
 *
 * One entity per genuine academic subject. Boards naming the same subject
 * differently does NOT create a second entity (Mathematics is one subject).
 * A genuine academic distinction DOES (English Language vs English Literature;
 * Urdu Language vs Urdu Literature; Business vs Commerce).
 *
 * `hubId` links to an existing Marlbridge subject page in the `subjects`
 * content collection where one exists. Subjects without a hub are registry
 * entries only — no page is implied.
 *
 * Board and qualification relationships are DERIVED from the matrix, never
 * authored here, so they cannot drift.
 */
export interface CanonicalSubject {
  slug: string;
  name: string;
  aliases: readonly string[];
  /** id in the existing `subjects` content collection, when a hub exists. */
  hubId?: string;
  source: string;
  notes?: string;
}

export const SUBJECTS: readonly CanonicalSubject[] = [
  { slug: 'mathematics', name: 'Mathematics', aliases: ['Maths', 'Math'], hubId: 'mathematics', source: 'LA nav + /subjects/' },
  { slug: 'physics', name: 'Physics', aliases: [], hubId: 'physics', source: 'LA nav + /subjects/' },
  { slug: 'chemistry', name: 'Chemistry', aliases: [], hubId: 'chemistry', source: 'LA nav + /subjects/' },
  { slug: 'biology', name: 'Biology', aliases: [], hubId: 'biology', source: 'LA nav + /subjects/' },
  { slug: 'computer-science', name: 'Computer Science', aliases: ['CS'], hubId: 'computer-science', source: 'LA nav + /subjects/' },
  { slug: 'economics', name: 'Economics', aliases: [], hubId: 'economics', source: 'LA nav + /subjects/' },
  { slug: 'accounting', name: 'Accounting', aliases: ['Accounts'], hubId: 'accounting', source: 'LA nav + /subjects/' },
  { slug: 'business', name: 'Business', aliases: ['Business Studies'], hubId: 'business', source: 'LA nav + /subjects/' },
  { slug: 'english-language', name: 'English Language', aliases: ['English'], hubId: 'english', source: 'LA nav + /subjects/', notes: 'Marlbridge hub is currently the broader "English" (id: english). Confirm whether the hub should be renamed to English Language.' },
  { slug: 'statistics', name: 'Statistics', aliases: [], source: 'LA nav (O Level Cambridge) + /subjects/' },
  { slug: 'commerce', name: 'Commerce', aliases: [], source: 'LA nav (O Level Cambridge) + /subjects/' },
  { slug: 'sociology', name: 'Sociology', aliases: [], source: 'LA nav + /subjects/' },
  { slug: 'psychology', name: 'Psychology', aliases: [], source: 'LA nav + /subjects/' },
  { slug: 'law', name: 'Law', aliases: [], source: 'LA nav + /subjects/' },
  { slug: 'world-history', name: 'World History', aliases: ['History'], source: 'LA nav (labelled "History", slug world-history) + /subjects/', notes: 'Label/slug mismatch on the source site. Canonical name kept as World History to match the slug.' },
  { slug: 'ict', name: 'ICT', aliases: ['Information and Communication Technology'], source: 'LA nav (Cambridge IGCSE + A Level)', notes: 'CONFLICT-03: present in nav with live course pages, but absent from the /subjects/ index of 23.' },
  { slug: 'urdu-language', name: 'Urdu Language', aliases: ['Urdu'], source: 'LA nav (Edexcel A Level, labelled "Urdu") + /subjects/' },
  { slug: 'english-literature', name: 'English Literature', aliases: [], source: '/subjects/english-literature/ only — no course pages' },
  { slug: 'geography', name: 'Geography', aliases: [], source: '/subjects/ index only — no course pages' },
  { slug: 'global-perspectives', name: 'Global Perspectives', aliases: [], source: '/subjects/ index only — no course pages' },
  { slug: 'pakistan-studies', name: 'Pakistan Studies', aliases: [], source: '/subjects/pakistan-studies/ only — no course pages' },
  { slug: 'islamiyat', name: 'Islamiyat', aliases: ['Islamic Studies'], source: '/subjects/ index only — no course pages' },
  { slug: 'environmental-management', name: 'Environmental Management', aliases: [], source: '/subjects/ index only — no course pages' },
  { slug: 'urdu-literature', name: 'Urdu Literature', aliases: [], source: '/subjects/ index only — no course pages' },
] as const;

export const subjectBySlug = (slug: string): CanonicalSubject | undefined =>
  SUBJECTS.find((s) => s.slug === slug);
