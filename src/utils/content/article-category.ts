/**
 * Audit P20 -- one display style for article categories: sentence case
 * ("Curriculum guides", "Exam preparation"). Cards and the article eyebrow
 * used to print the raw slug with hyphens turned into spaces, all lower case.
 */
const CATEGORY_LABELS: Record<string, string> = {
  'exam-preparation': 'Exam preparation',
  'study-skills': 'Study skills',
  'curriculum-guides': 'Curriculum guides',
  'higher-education': 'Higher education',
  teaching: 'Teaching',
  'marlbridge-news': 'Marlbridge news',
};

export function articleCategoryLabel(category: string): string {
  const known = CATEGORY_LABELS[category];
  if (known) return known;
  const words = category.replace(/-/g, ' ');
  return words.charAt(0).toUpperCase() + words.slice(1);
}
