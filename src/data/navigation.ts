export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export const primaryNav: readonly NavItem[] = [
  { label: 'Programs', href: '/programs/' },
  { label: 'Subjects', href: '/subjects/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'Tutoring', href: '/tutoring/' },
  { label: 'For Schools', href: '/schools/' },
  { label: 'About', href: '/about/' },
];

export const footerNav = {
  explore: [
    { label: 'Programs', href: '/programs/' },
    { label: 'Subjects', href: '/subjects/' },
    { label: 'Resources', href: '/resources/' },
    { label: 'Tutoring', href: '/tutoring/' },
    { label: 'For Schools', href: '/schools/' },
  ],
  resources: [
    { label: 'Study Guides', href: '/resources/study-guides/' },
    { label: 'Revision Notes', href: '/resources/revision-notes/' },
    { label: 'Past Papers', href: '/resources/past-papers/' },
    { label: 'Exam Preparation', href: '/resources/exam-preparation/' },
    { label: 'Learning Journal', href: '/learning/' },
  ],
  company: [
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Privacy', href: '/legal/privacy/' },
    { label: 'Terms', href: '/legal/terms/' },
    { label: 'Accessibility', href: '/legal/accessibility/' },
  ],
} satisfies Record<string, readonly NavItem[]>;

/** Locale registry — only 'en' is enabled until real translations exist. */
export const locales = [
  { code: 'en', label: 'English', dir: 'ltr', enabled: true },
  { code: 'ar', label: 'العربية', dir: 'rtl', enabled: false },
  { code: 'ur', label: 'اردو', dir: 'rtl', enabled: false },
] as const;
