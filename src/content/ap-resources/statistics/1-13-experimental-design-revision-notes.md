---
resourceId: "mb-ap-stats-1.13-revision-notes"
title: "Experimental Design: Revision Notes (Statistics 1.13)"
description: "One-page recap of the four principles of experimental design, placebos, blinding, confounding, block and matched pairs designs, and the scope of conclusions, with the mistakes that cost marks."
course: "statistics"
unit: 1
topics: ["1.13"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-1.13-study-guide"]
learningObjectives:
  - "Recall the elements of a well-designed experiment and the three main designs"
  - "Spot the common errors in experimental design questions before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "foundation"
calculator: "graphing"
calculatorNote: "Only simple subtraction is needed. Use a random integer function to carry out random assignment."
related: ["mb-ap-stats-1.13-study-guide", "mb-ap-stats-1.13-practice", "mb-ap-stats-1.13-checklist"]
next: "mb-ap-stats-1.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Four principles: comparison, random assignment, replication, direct control."
  - "Random assignment gives cause and effect; random selection gives generalisation."
  - "Block on a variable that affects the response, then randomise within each block."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/1-13-experimental-design-study-guide/).

## Recap

- An **experiment** imposes treatments on experimental units; an observational study does not.
- A well-designed experiment has **comparison** (at least two treatments), **random assignment**, **replication** (more than one unit per treatment) and **direct control** (fixed conditions for known extraneous variables).
- A **control group** gives a baseline: no treatment, a **placebo** or the standard treatment.
- **Single-blind:** participants or the researchers who meet them do not know the treatments. **Double-blind:** neither knows.
- **Random assignment** spreads extraneous variables roughly evenly across groups, which reduces confounding.

## Key relationships

| Idea | What to remember |
|---|---|
| Placebo effect | mean response to placebo − mean response to no treatment |
| Extraneous variable | affects the response but is not the explanatory variable studied |
| Confounding variable | linked to the explanatory variable, so you cannot tell which one changed the response |
| Completely randomized design | all units assigned to treatments at random; groups need not be equal |
| Randomized block design | group similar units into blocks, then randomise every treatment within each block |
| Matched pairs design | block design with two treatments: similar pairs, or each unit gets both in random order |
| Purpose of blocking | removes the blocking variable's variation, so treatment comparisons are more precise |
| Scope of conclusions | random assignment → cause and effect; random selection → whole population; volunteers → units like them |

## Assumptions and conventions

- Describe random assignment so someone else could repeat it: label units, say how labels are chosen, how repeats are handled and which labels go to which treatment.
- "Replication" here means more than one unit per treatment, not repeating the whole study.
- Every treatment must appear in every block.

## Mistakes to avoid

1. **Mixing up random assignment and random sampling.**
2. **Calling direct control a "control group".**
3. **Placebo effect = treatment − placebo.** It is placebo − no treatment.
4. **Blocking without randomising** inside the blocks.
5. **Blocking on a variable unrelated to the response.** It adds work but no precision.
6. **Claiming the results apply to everyone** when the units were volunteers.
7. **Vague random assignment**, such as "randomly split them", with no method.

## Quick self-check

1. Mean reduction in pain score: placebo 4.5, no treatment 3.0. What is the placebo effect? *(4.5 − 3.0 = 1.5 points)*
2. Forty plants, four treatments, completely randomized and equal groups. How many plants per treatment? *(10)*
3. Volunteers are randomly assigned to two diets. Can you conclude cause and effect? For whom? *(Yes, for people similar to the volunteers)*

Next: [practice questions](/advanced-course-resources/statistics/1-13-experimental-design-practice/).
