/**
 * Source register for the advanced-course (AP) library. Every official fact used in
 * src/data/ap/frameworks.ts and in the library pages traces to one of these entries.
 * `checkedOn` is the date the source was opened and read; re-check before each school year.
 * Resources cite these ids in their `sources` frontmatter (validated at build time).
 */
export interface ApSource { id: string; title: string; url: string; verifies: string; schoolYear: string; checkedOn: string }
export const AP_SOURCES: readonly ApSource[] = [
  {
    "id": "cb-courses-index",
    "title": "AP Courses and Exams (AP Central)",
    "url": "https://apcentral.collegeboard.org/courses",
    "verifies": "Starting point; list of current AP courses.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "cb-trademark-guidelines",
    "title": "College Board copyright and trademark guidelines",
    "url": "https://privacy.collegeboard.org/copyright-trademark/guidelines",
    "verifies": "Permission requirement, ® use, attribution wording, no marks in domains/web addresses/meta tags, no implied endorsement.",
    "schoolYear": "n/a",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "cb-reference-information",
    "title": "Reference information for specific AP Exams",
    "url": "https://apcentral.collegeboard.org/exam-administration-ordering-scores/administering-exams/subject-specific/reference-information",
    "verifies": "Which exams provide formula/equation sheets and tables.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "cb-statistics-revisions",
    "title": "AP Statistics Revisions",
    "url": "https://apcentral.collegeboard.org/courses/ap-statistics/future-revisions",
    "verifies": "2026-27 revision: 9 units consolidated to 5; topics removed/added; May 2027 exam fully digital, 42 MCQs with 4 options, 4 ten-point FRQs.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "ced-chemistry",
    "title": "AP Chemistry Course and Exam Description",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-chemistry-course-and-exam-description.pdf",
    "verifies": "Unit and topic numbers/titles (from the PDF bookmarks), prerequisites, laboratory requirement, practices.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "clar-chemistry",
    "title": "AP Chemistry CED clarifications and corrections",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-chemistry-course-and-exam-description-clarifications.pdf",
    "verifies": "June 2026 clarifications are editorial (front matter, resource locations, Progress Check wording). No content change was listed.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "page-chemistry",
    "title": "AP Chemistry course page",
    "url": "https://apcentral.collegeboard.org/courses/ap-chemistry",
    "verifies": "Current unit titles and multiple-choice unit weightings; practice/skill weightings.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "exam-chemistry",
    "title": "AP Chemistry exam page",
    "url": "https://apcentral.collegeboard.org/courses/ap-chemistry/exam",
    "verifies": "May 2027 exam date (2027-05-06), exam mode, section question counts, timing and weights.",
    "schoolYear": "2026-27 (May 2027 exam)",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "ced-biology",
    "title": "AP Biology Course and Exam Description",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-biology-course-and-exam-description.pdf",
    "verifies": "Unit and topic numbers/titles (from the PDF bookmarks), prerequisites, laboratory requirement, practices.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "clar-biology",
    "title": "AP Biology CED clarifications and corrections",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-biology-ced-clarifications-and-corrections.pdf",
    "verifies": "June 2025: FRQ 5 retitled \"Analyze Model or Visual Representation of a Biological Concept or Process\"; sample FRQ 2 added and FRQ 5 replaced. June 2026: editorial updates only.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "page-biology",
    "title": "AP Biology course page",
    "url": "https://apcentral.collegeboard.org/courses/ap-biology",
    "verifies": "Current unit titles and multiple-choice unit weightings; practice/skill weightings.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "exam-biology",
    "title": "AP Biology exam page",
    "url": "https://apcentral.collegeboard.org/courses/ap-biology/exam",
    "verifies": "May 2027 exam date (2027-05-03), exam mode, section question counts, timing and weights.",
    "schoolYear": "2026-27 (May 2027 exam)",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "ced-calculus-ab-bc",
    "title": "AP Calculus AB and BC Course and Exam Description",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-calculus-ab-and-bc-course-and-exam-description.pdf",
    "verifies": "Unit and topic numbers/titles (from the PDF bookmarks), prerequisites, laboratory requirement, practices.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "clar-calculus-ab-bc",
    "title": "AP Calculus AB and BC CED clarifications and corrections",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-calculus-ab-bc-course-and-exam-description-clarifications.pdf",
    "verifies": "Fall 2026: EK FUN-1.C.1 (Extreme Value Theorem) and EK FUN-7.B.2 reworded; \"course content has not changed\". Multiple choice Part A changed from 30 questions in 60 minutes to 29 in 62 minutes; Part B from 15 in 45 minutes to 13 in 38 minutes (effective May 2027).",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "page-calculus-ab",
    "title": "AP Calculus AB course page",
    "url": "https://apcentral.collegeboard.org/courses/ap-calculus-ab",
    "verifies": "Current unit titles and multiple-choice unit weightings; practice/skill weightings.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "exam-calculus-ab",
    "title": "AP Calculus AB exam page",
    "url": "https://apcentral.collegeboard.org/courses/ap-calculus-ab/exam",
    "verifies": "May 2027 exam date (2027-05-10), exam mode, section question counts, timing and weights.",
    "schoolYear": "2026-27 (May 2027 exam)",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "page-calculus-bc",
    "title": "AP Calculus BC course page",
    "url": "https://apcentral.collegeboard.org/courses/ap-calculus-bc",
    "verifies": "Current unit titles and multiple-choice unit weightings; practice/skill weightings.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "exam-calculus-bc",
    "title": "AP Calculus BC exam page",
    "url": "https://apcentral.collegeboard.org/courses/ap-calculus-bc/exam",
    "verifies": "May 2027 exam date (2027-05-10), exam mode, section question counts, timing and weights.",
    "schoolYear": "2026-27 (May 2027 exam)",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "ced-statistics",
    "title": "AP Statistics Course and Exam Description",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description.pdf",
    "verifies": "Unit and topic numbers/titles (from the PDF bookmarks), prerequisites, laboratory requirement, practices.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "page-statistics",
    "title": "AP Statistics course page",
    "url": "https://apcentral.collegeboard.org/courses/ap-statistics",
    "verifies": "Current unit titles and multiple-choice unit weightings; practice/skill weightings.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "exam-statistics",
    "title": "AP Statistics exam page",
    "url": "https://apcentral.collegeboard.org/courses/ap-statistics/exam",
    "verifies": "May 2027 exam date (2027-05-11), exam mode, section question counts, timing and weights.",
    "schoolYear": "2026-27 (May 2027 exam)",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "ced-physics-1",
    "title": "AP Physics 1: Algebra-Based Course and Exam Description",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-physics-1-course-and-exam-description.pdf",
    "verifies": "Unit and topic numbers/titles (from the PDF bookmarks), prerequisites, laboratory requirement, practices.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "clar-physics-1",
    "title": "AP Physics 1: Algebra-Based CED clarifications and corrections",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-physics-1-course-and-exam-description-clarifications.pdf",
    "verifies": "Fall 2026: resource-location updates; exam timing change only. Multiple choice changed from 40 questions in 80 minutes to 42 questions in 85 minutes; free response changed from 100 to 95 minutes (effective May 2027).",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "page-physics-1",
    "title": "AP Physics 1: Algebra-Based course page",
    "url": "https://apcentral.collegeboard.org/courses/ap-physics-1",
    "verifies": "Current unit titles and multiple-choice unit weightings; practice/skill weightings.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "exam-physics-1",
    "title": "AP Physics 1: Algebra-Based exam page",
    "url": "https://apcentral.collegeboard.org/courses/ap-physics-1/exam",
    "verifies": "May 2027 exam date (2027-05-05), exam mode, section question counts, timing and weights.",
    "schoolYear": "2026-27 (May 2027 exam)",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "ced-physics-2",
    "title": "AP Physics 2: Algebra-Based Course and Exam Description",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-physics-2-course-and-exam-description.pdf",
    "verifies": "Unit and topic numbers/titles (from the PDF bookmarks), prerequisites, laboratory requirement, practices.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "clar-physics-2",
    "title": "AP Physics 2: Algebra-Based CED clarifications and corrections",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-physics-2-course-and-exam-description-clarifications.pdf",
    "verifies": "Fall 2026: EK 15.7.B.1 (radioactive decay) clarified; some exam conventions in the equations table updated. Multiple choice changed from 40 questions in 80 minutes to 42 questions in 85 minutes; free response changed from 100 to 95 minutes (effective May 2027).",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "page-physics-2",
    "title": "AP Physics 2: Algebra-Based course page",
    "url": "https://apcentral.collegeboard.org/courses/ap-physics-2",
    "verifies": "Current unit titles and multiple-choice unit weightings; practice/skill weightings.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "exam-physics-2",
    "title": "AP Physics 2: Algebra-Based exam page",
    "url": "https://apcentral.collegeboard.org/courses/ap-physics-2/exam",
    "verifies": "May 2027 exam date (2027-05-06), exam mode, section question counts, timing and weights.",
    "schoolYear": "2026-27 (May 2027 exam)",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "ced-physics-c-mechanics",
    "title": "AP Physics C: Mechanics Course and Exam Description",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-physics-c-mechanics-course-and-exam-description.pdf",
    "verifies": "Unit and topic numbers/titles (from the PDF bookmarks), prerequisites, laboratory requirement, practices.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "clar-physics-c-mechanics",
    "title": "AP Physics C: Mechanics CED clarifications and corrections",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-physics-c-mechanics-course-and-exam-description-clarifications.pdf",
    "verifies": "Fall 2026: resource-location updates; exam timing change only. Multiple choice changed from 40 questions in 80 minutes to 42 questions in 85 minutes; free response changed from 100 to 95 minutes (effective May 2027).",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "page-physics-c-mechanics",
    "title": "AP Physics C: Mechanics course page",
    "url": "https://apcentral.collegeboard.org/courses/ap-physics-c-mechanics",
    "verifies": "Current unit titles and multiple-choice unit weightings; practice/skill weightings.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "exam-physics-c-mechanics",
    "title": "AP Physics C: Mechanics exam page",
    "url": "https://apcentral.collegeboard.org/courses/ap-physics-c-mechanics/exam",
    "verifies": "May 2027 exam date (2027-05-03), exam mode, section question counts, timing and weights.",
    "schoolYear": "2026-27 (May 2027 exam)",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "ced-physics-c-electricity-and-magnetism",
    "title": "AP Physics C: Electricity and Magnetism Course and Exam Description",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-physics-c-electricity-and-magnetism-course-and-exam-description.pdf",
    "verifies": "Unit and topic numbers/titles (from the PDF bookmarks), prerequisites, laboratory requirement, practices.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "clar-physics-c-electricity-and-magnetism",
    "title": "AP Physics C: Electricity and Magnetism CED clarifications and corrections",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-physics-c-electricity-and-magnetism-course-and-exam-description-clarifications.pdf",
    "verifies": "Fall 2026: some exam conventions in the equations table updated; exam timing change. Multiple choice changed from 40 questions in 80 minutes to 42 questions in 85 minutes; free response changed from 100 to 95 minutes (effective May 2027).",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "page-physics-c-electricity-and-magnetism",
    "title": "AP Physics C: Electricity and Magnetism course page",
    "url": "https://apcentral.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism",
    "verifies": "Current unit titles and multiple-choice unit weightings; practice/skill weightings.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "exam-physics-c-electricity-and-magnetism",
    "title": "AP Physics C: Electricity and Magnetism exam page",
    "url": "https://apcentral.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism/exam",
    "verifies": "May 2027 exam date (2027-05-05), exam mode, section question counts, timing and weights.",
    "schoolYear": "2026-27 (May 2027 exam)",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "ced-microeconomics",
    "title": "AP Microeconomics Course and Exam Description",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-microeconomics-course-and-exam-description.pdf",
    "verifies": "Unit and topic numbers/titles (from the PDF bookmarks), prerequisites, laboratory requirement, practices.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "clar-microeconomics",
    "title": "AP Microeconomics CED clarifications and corrections",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-microeconomics-course-and-exam-description-clarifications.pdf",
    "verifies": "June 2026 clarifications are editorial only.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "page-microeconomics",
    "title": "AP Microeconomics course page",
    "url": "https://apcentral.collegeboard.org/courses/ap-microeconomics",
    "verifies": "Current unit titles and multiple-choice unit weightings; practice/skill weightings.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "exam-microeconomics",
    "title": "AP Microeconomics exam page",
    "url": "https://apcentral.collegeboard.org/courses/ap-microeconomics/exam",
    "verifies": "May 2027 exam date (2027-05-04), exam mode, section question counts, timing and weights.",
    "schoolYear": "2026-27 (May 2027 exam)",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "ced-macroeconomics",
    "title": "AP Macroeconomics Course and Exam Description",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-macroeconomics-course-and-exam-description.pdf",
    "verifies": "Unit and topic numbers/titles (from the PDF bookmarks), prerequisites, laboratory requirement, practices.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "clar-macroeconomics",
    "title": "AP Macroeconomics CED clarifications and corrections",
    "url": "https://apcentral.collegeboard.org/media/pdf/ap-macroeconomics-course-and-exam-description-clarifications.pdf",
    "verifies": "June 2026 clarifications are editorial only.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "page-macroeconomics",
    "title": "AP Macroeconomics course page",
    "url": "https://apcentral.collegeboard.org/courses/ap-macroeconomics",
    "verifies": "Current unit titles and multiple-choice unit weightings; practice/skill weightings.",
    "schoolYear": "2026-27",
    "checkedOn": "2026-10-05"
  },
  {
    "id": "exam-macroeconomics",
    "title": "AP Macroeconomics exam page",
    "url": "https://apcentral.collegeboard.org/courses/ap-macroeconomics/exam",
    "verifies": "May 2027 exam date (2027-05-07), exam mode, section question counts, timing and weights.",
    "schoolYear": "2026-27 (May 2027 exam)",
    "checkedOn": "2026-10-05"
  }
] as const;
export const apSourceById = (id: string): ApSource | undefined => AP_SOURCES.find((s) => s.id === id);
