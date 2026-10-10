/**
 * D-414 (owner, 9 Oct 2026) -- parent articles listed on each country page.
 * The country articles (D-404/D-405/D-413) were reachable only from
 * /articles/, the homepage and each other; the country pages they were
 * written for did not link to them. Order is the order shown. Every slug
 * must be a published article; CountryGuides.astro fails the build if not.
 */
export const COUNTRY_GUIDES: Readonly<Record<string, readonly string[]>> = {
  pakistan: [
    'o-level-tuition-in-lahore-online-or-in-person',
    'igcse-or-o-level-which-should-my-child-take',
    'o-level-june-or-november-exam-series',
    'group-classes-or-one-to-one-tuition',
  ],
  uae: [
    'how-online-igcse-and-a-level-tuition-works-from-the-uae',
    'a-level-tuition-in-dubai-cambridge-or-edexcel',
    'group-classes-or-one-to-one-tuition',
  ],
  qatar: [
    'edexcel-igcse-tutoring-in-qatar',
    'when-to-start-a-level-tuition-before-the-summer-exams',
    'group-classes-or-one-to-one-tuition',
  ],
  malaysia: [
    'igcse-tuition-in-malaysia-online',
    'when-to-start-a-level-tuition-before-the-summer-exams',
    'group-classes-or-one-to-one-tuition',
  ],
  singapore: [
    'ib-tuition-in-singapore-online',
    'when-to-start-a-level-tuition-before-the-summer-exams',
    'group-classes-or-one-to-one-tuition',
  ],
  gulf: [
    'how-online-igcse-and-a-level-tuition-works-from-the-uae',
    'edexcel-igcse-tutoring-in-qatar',
    'a-level-tuition-in-dubai-cambridge-or-edexcel',
  ],
  uk: [
    'when-to-start-a-level-tuition-before-the-summer-exams',
    'sociology-tuition-online-gcse-igcse-o-level-and-a-level',
    'group-classes-or-one-to-one-tuition',
  ],
};
