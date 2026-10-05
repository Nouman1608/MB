export interface NavItem {
  readonly label: string;
  readonly href: string;
}

/**
 * Navigation round (6 Oct 2026) -- five overlapping starting points
 * (Programs, Subjects, Resources, Tutoring, Search) became two plain ones:
 *   - "Study resources": free material, found by qualification > exam board
 *     > subject > topic (/resources/). Subject pages are reached from there.
 *   - "Tuition": paid classes (/tutoring/), which links to the programme
 *     pages by qualification (/programs/, still in the footer too).
 * /resources/ explains the difference in plain words. No URL changed.
 */
export const primaryNav: readonly NavItem[] = [
  { label: 'Study resources', href: '/resources/' },
  { label: 'Tuition', href: '/tutoring/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'For Schools', href: '/schools/' },
  { label: 'About', href: '/about/' },
  { label: 'Search', href: '/search/' },
];

/** Navigation round (6 Oct 2026): which primary item a page belongs to. */
const SECTION_PREFIXES: Record<string, readonly string[]> = {
  '/resources/': ['/resources/', '/boards/', '/levels/', '/subjects/', '/practice/', '/diagnostics/', '/checklists/', '/revision-planner/'],
  '/tutoring/': ['/tutoring/', '/programs/', '/trial/'],
};
export const isCurrentSection = (href: string, pathname: string): boolean =>
  (SECTION_PREFIXES[href] ?? [href]).some((p) => pathname.startsWith(p));

export const footerNav = {
  explore: [
    { label: 'Study resources', href: '/resources/' },
    { label: 'Subjects', href: '/subjects/' },
    { label: 'Exam boards', href: '/boards/' },
    { label: 'Qualifications', href: '/levels/' },
    { label: 'Tuition', href: '/tutoring/' },
    { label: 'Tuition programmes', href: '/programs/' },
    { label: 'Pricing', href: '/pricing/' },
    { label: 'For Schools', href: '/schools/' },
    // D-302: one sitewide entry for the international hub, which links to
    // every country page (Pakistan, UK, UAE, Qatar, Malaysia, Gulf).
    { label: 'International tutoring', href: '/international-tutoring/' },
  ],
  // QIGT programme (Aug 2026) -- "Past Papers" and "Exam Preparation" removed
  // from this sitewide footer: both resourceTypes have 0 published resources
  // (verified against src/content/resources/), so linking to them from every
  // page on the site repeatedly promoted an empty section. The categories
  // themselves are NOT deleted or hidden -- /resources/ still lists both
  // honestly, with a "No ... published yet -- in development" state (see
  // src/pages/resources/index.astro) -- this only removes them from
  // prominent, repeated, sitewide navigation until real material exists,
  // per the brief's own "no filler" instruction. Re-add here once either
  // category has published resources.
  resources: [
    // Navigation round (6 Oct 2026): the three type links (Study Guides,
    // Revision Notes, Practice Questions) are gone: "Study resources" (left
    // column) starts the course-first journey. The /resources/#<type>
    // anchors still resolve, to the subject x type table.
    { label: '10-Minute Diagnostics', href: '/diagnostics/' },
    { label: 'Practice (Self-Check)', href: '/practice/' },
    { label: 'Syllabus Changes', href: '/syllabus-updates/' },
    { label: 'Command Words Guide', href: '/command-words/' },
    { label: 'Exam Calendar', href: '/exam-calendar/' },
    { label: 'Grade Thresholds', href: '/grade-thresholds/' },
    { label: 'Learning Journal', href: '/articles/' },
    { label: 'Printable Checklists', href: '/checklists/' },
  ],
  company: [
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Editorial & Trust Policy', href: '/legal/editorial-policy/' },
    { label: 'Privacy', href: '/legal/privacy/' },
    { label: 'Terms', href: '/legal/terms/' },
    { label: 'Cookie Policy', href: '/legal/cookies/' },
    { label: 'Accessibility', href: '/legal/accessibility/' },
  ],
} satisfies Record<string, readonly NavItem[]>;

/**
 * Locale registry.
 *
 * v1.x CLOSURE WS5 -- ar/ur/bn now have a real, published landing page at
 * /ar/, /ur/, /bn/ (see src/pages/{ar,ur,bn}/index.astro), so they are
 * enabled here. This is a translated commercial landing page covering the
 * homepage value proposition, published pricing and a link through to the
 * (English-only) enquiry form -- it is NOT a full parallel copy of every
 * page on the site. Translations are AI-assisted and flagged for owner
 * review on the page itself (see src/i18n/copy.ts), per the approved
 * v1.x CLOSURE decision on translation method.
 */
export const locales = [
  { code: 'en', label: 'English', dir: 'ltr', enabled: true, href: '/' },
  { code: 'ar', label: 'العربية', dir: 'rtl', enabled: true, href: '/ar/' },
  { code: 'ur', label: 'اردو', dir: 'rtl', enabled: true, href: '/ur/' },
  { code: 'bn', label: 'বাংলা', dir: 'ltr', enabled: true, href: '/bn/' },
] as const;
