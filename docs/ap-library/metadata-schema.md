# Resource metadata schema

Enforced by Zod (`apResources` in `src/content.config.ts`) and by `scripts/validate-ap-library.mjs`. One Markdown file per resource in `src/content/ap-resources/<course-slug>/`; the file name (without `.md`) is the URL segment.

| Field | Required | Meaning / rule |
|---|---|---|
| `resourceId` | yes | Permanent unique id, `mb-ap-<course code>-<topic>-<type>`, e.g. `mb-ap-chem-1.1-study-guide`. Never reused. Uniqueness checked. |
| `title` | yes | ≤110 chars. Neutral wording: no "AP", "Advanced Placement" or "College Board" while `AP_MARK_IN_METADATA` is false. Pattern: `<Topic>: <Type> (<Course> <topic no.>)`. |
| `description` | yes | 70–220 chars; used as meta description and visible summary. Same neutral-wording rule. |
| `course` | yes | One of the 11 course slugs in `frameworks.ts`; must match the folder. |
| `unit` | yes | Official unit number (Physics 2 is 9–15; Physics C: E&M is 8–13). Must exist in the course. |
| `topics` | yes* | Official topic numbers, e.g. `["1.1"]`; must belong to `unit`. Empty only for unit-level resources (diagnostics, reviews). |
| `resourceType` | yes | `study-guide`, `revision-notes`, `practice-questions`, `worked-solutions`, `topic-checklist`, `unit-diagnostic`, `unit-review`, `exam-skills`. |
| `prerequisites` | no | Plain statements of prior knowledge. |
| `prerequisiteResources` | no | `resourceId`s to read first (must exist). |
| `learningObjectives` | yes | What the student will be able to do (own words, not CED text). |
| `skills` | no | Course practice/skill numbers from `frameworks.ts` (validated). |
| `studyMinutes` | yes | Estimated study time, 5–240. |
| `difficulty` | yes | `foundation`, `core`, `stretch`, `mixed`. |
| `calculator`, `calculatorNote` | where relevant | `none-needed`, `not-permitted`, `four-function`, `scientific`, `graphing`, `mixed`; note states constants/rounding. |
| `calculusScope` | calculus only | `ab-and-bc` (shared canonical material, listed on both hubs) or `bc-only`. BC-only topics must be `bc-only`; a Calculus AB resource can never be `bc-only`. |
| `related`, `next` | no | `resourceId`s (must exist). |
| `framework` | yes | `{ schoolYear: "2026-27", examSeries: "May 2027" }`. |
| `sources` | yes | Ids from the source register (validated). |
| `keyPoints` | yes | 2–6 answer-first takeaways shown at the top ("In short"). |
| `faqs` | no | Short Q&A shown on the page. |
| `version` | yes | `major.minor`. Bump on any content change. |
| `publishedDate`, `updatedDate` | yes | ISO dates; updated ≥ published; not in the future. |
| `editorialStatus` | yes | `planned`, `drafted`, `in-review`, `reviewed`, `published`. |
| `reviewer`, `reviewedDate` | only with real review | Allowed **only** when status is `reviewed`/`published`, and then required. Fill in only with a real AP teacher's name and the date they actually reviewed. |
| `author` | yes | Author profile id (`marlbridge-academic-team`). |

Body rules checked by the validator: study guides ≥700 words with two `## Worked example` sections and a misconceptions section; practice sets ≥6 `## Question` headings, each with a `<details>` answer, MCQs with ≥4 options and an `**Answer: (X)` that is one of them, and the "original Marlbridge practice" label; checklists ≥6 "I can" statements; revision notes link back to the guide; every `/advanced-course-resources/` link resolves; no teacher-review claims in the body.
