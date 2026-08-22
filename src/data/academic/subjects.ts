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
  { slug: 'statistics', name: 'Statistics', aliases: [], hubId: 'statistics', source: 'LA nav (O Level Cambridge) + /subjects/' },
  { slug: 'commerce', name: 'Commerce', aliases: [], hubId: 'commerce', source: 'LA nav (O Level Cambridge) + /subjects/' },
  { slug: 'sociology', name: 'Sociology', aliases: [], hubId: 'sociology', source: 'LA nav + /subjects/' },
  { slug: 'psychology', name: 'Psychology', aliases: [], hubId: 'psychology', source: 'LA nav + /subjects/' },
  { slug: 'law', name: 'Law', aliases: [], hubId: 'law', source: 'LA nav + /subjects/' },
  { slug: 'world-history', name: 'World History', aliases: ['History'], hubId: 'world-history', source: 'LA nav (labelled "History", slug world-history) + /subjects/', notes: 'Label/slug mismatch on the source site. Canonical name kept as World History to match the slug.' },
  { slug: 'ict', name: 'ICT', aliases: ['Information and Communication Technology'], hubId: 'ict', source: 'LA nav (Cambridge IGCSE + A Level)', notes: 'CONFLICT-03: present in nav with live course pages, but absent from the /subjects/ index of 23.' },
  { slug: 'urdu-language', name: 'Urdu Language', aliases: ['Urdu'], hubId: 'urdu-language', source: 'LA nav (Edexcel A Level, labelled "Urdu") + /subjects/' },
  { slug: 'english-literature', name: 'English Literature', aliases: [], hubId: 'english-literature', source: '/subjects/english-literature/ only — no course pages' },
  { slug: 'geography', name: 'Geography', aliases: [], source: '/subjects/ index only — no course pages' },
  { slug: 'global-perspectives', name: 'Global Perspectives', aliases: [], source: '/subjects/ index only — no course pages' },
  { slug: 'pakistan-studies', name: 'Pakistan Studies', aliases: [], source: '/subjects/pakistan-studies/ only — no course pages' },
  { slug: 'islamiyat', name: 'Islamiyat', aliases: ['Islamic Studies'], source: '/subjects/ index only — no course pages' },
  { slug: 'environmental-management', name: 'Environmental Management', aliases: [], source: '/subjects/ index only — no course pages' },
  { slug: 'urdu-literature', name: 'Urdu Literature', aliases: [], source: '/subjects/ index only — no course pages' },

  // -- IB (2026-08-22): new canonical subjects with no Cambridge/Edexcel/AQA/OCR/OxfordAQA
  // equivalent already in this registry, sourced from the IB's own public DP/MYP subject
  // briefs (see docs/decision-log.md D-008). No hubId — no dedicated /subjects/<slug>/ page
  // exists yet, so these render on the academic hub page without the "All X at Marlbridge"
  // description block (see [subject].astro's `{subjectEntry && (...)}` guard).
  { slug: 'language-a-language-and-literature', name: 'Language A: Language and Literature', aliases: ['Lang A: Lang & Lit'], source: 'ibo.org DP subject brief, curriculum.brief-languagea.language.and.literature-eng.pdf' },
  { slug: 'language-a-literature', name: 'Language A: Literature', aliases: ['Lang A: Literature'], source: 'ibo.org DP subject brief, curriculum.brief-languagea.literature-eng.pdf' },
  { slug: 'environmental-systems-and-societies', name: 'Environmental Systems and Societies', aliases: ['ESS'], source: 'ibo.org DP subject brief, environmental-systems-and-societies-subject-brief-en.pdf' },
  { slug: 'global-politics', name: 'Global Politics', aliases: [], source: 'ibo.org DP subject brief, global-politics-sl-hl-subject-brief-en.pdf' },
  { slug: 'language-b', name: 'Language B', aliases: [], source: 'ibo.org DP subject brief, lang-b-2018-en.pdf' },
  { slug: 'mathematics-analysis-and-approaches', name: 'Mathematics: Analysis and Approaches', aliases: ['Math AA', 'Maths AA'], source: 'ibo.org DP subject brief, subject-brief-dp-math-analysis-and-approaches-en.pdf' },
  { slug: 'mathematics-applications-and-interpretation', name: 'Mathematics: Applications and Interpretation', aliases: ['Math AI', 'Maths AI'], source: 'ibo.org DP subject brief, subject-brief-dp-math-applications-and-interpretations-en.pdf' },
  { slug: 'myp-language-acquisition', name: 'Language Acquisition (MYP)', aliases: [], source: 'ibo.org MYP subject brief, myp-brief-language-acquisition-2020-en.pdf' },
  { slug: 'myp-sciences', name: 'Sciences (MYP)', aliases: ['Integrated Sciences'], source: 'ibo.org MYP subject brief, myp-brief-sciences-en.pdf', notes: 'MYP teaches an integrated single Sciences subject rather than separate Biology/Chemistry/Physics, so this is kept distinct from those DP/Cambridge-style canonical subjects rather than reusing one of them.' },
  { slug: 'myp-design', name: 'Design (MYP)', aliases: [], source: 'ibo.org MYP subject brief, myp-brief_design_2015.pdf' },
  { slug: 'myp-individuals-and-societies', name: 'Individuals and Societies (MYP)', aliases: [], source: 'ibo.org MYP subject brief, myp-brief_individuals-societies_2015.pdf' },
] as const;

export const subjectBySlug = (slug: string): CanonicalSubject | undefined =>
  SUBJECTS.find((s) => s.slug === slug);
