# Content template (copy for each new topic)

Create four files in `src/content/ap-resources/<course>/` named `<n-n>-<topic-slug>-{study-guide,revision-notes,practice,checklist}.md`. The Chemistry 1.1 pack is the reference implementation. Run `npm run validate:ap-library` after writing.

```markdown
---
resourceId: "mb-ap-<code>-<n.n>-study-guide"
title: "<Topic title>: Study Guide (<Course> <n.n>)"
description: "<70–220 characters, neutral wording>"
course: "<course-slug>"
unit: <n>
topics: ["<n.n>"]
resourceType: "study-guide"
prerequisites: ["<prior knowledge>"]
learningObjectives: ["<can do 1>", "<can do 2>"]
skills: ["<practice no.>"]
studyMinutes: 35
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "<constants, rounding>"
related: ["mb-ap-<code>-<n.n>-revision-notes", "mb-ap-<code>-<n.n>-practice", "mb-ap-<code>-<n.n>-checklist"]
next: "mb-ap-<code>-<n.n>-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-<course>", "page-<course>"]
keyPoints: ["<answer-first point>", "<point>"]
faqs: [{ question: "<?>", answer: "<short answer>" }]
version: "1.0"
publishedDate: <YYYY-MM-DD>
updatedDate: <YYYY-MM-DD>
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---
## <Idea from first principles>
## <Representations> (inline SVG <figure> with <title>, <desc>, role="img", <figcaption>; never colour alone)
## Worked example 1: <...>   (every step, units, check/interpretation)
## Worked example 2: <...>
## Common misconceptions
## Where this leads   (links to the other three files and the next topic)
```

**Practice file body:** opening line "These are **original Marlbridge practice questions**, not past exam questions … mark points are a suggested Marlbridge rubric, not an official scoring guideline" plus all data/constants; then `## Question N (multiple choice · core)` with options `- (A) …` and a `<details><summary>Answer and explanation</summary> **Answer: (X).** … why each distractor is wrong </details>`; constructed-response questions with a rubric table (one distinct piece of reasoning per point; alternative methods noted); finish with "How did you do?".

**Revision notes:** Recap · Key relationships table · Assumptions · Mistakes to avoid · Quick self-check with answers · link back to the study guide.

**Checklist:** `- I can …` statements grouped Understanding / Calculation (or Skills) / Reasoning, each naming the guide section or practice question that tests it.

**Quality gate before publishing a batch:** recompute every number (Python), check units, signs, coordinate systems, notation and theorem conditions, check graphs against the stated relationship, confirm one defensible MCQ answer and correct distractor explanations, rubric totals, run the validator, the preview build and `audit:all`; record what still needs AP-teacher review.
