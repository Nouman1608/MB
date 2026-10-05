---
resourceId: "mb-ap-calcab-5.4-revision-notes"
title: "Using the First Derivative Test to Determine Relative (Local) Extrema: Revision Notes (Calculus AB 5.4)"
description: "One-page recap of the First Derivative Test: the three outcomes, the conditions it needs, reading a graph of f′, and how to word a justification."
course: "calculus-ab"
unit: 5
topics: ["5.4"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-5.4-study-guide"]
learningObjectives:
  - "Recall the First Derivative Test and its conditions"
  - "Recall the correct wording for a justification"
  - "Spot the common errors before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-5.4-study-guide", "mb-ap-calcab-5.4-practice", "mb-ap-calcab-5.4-checklist"]
next: "mb-ap-calcab-5.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "f′ changes + to − at a critical point: relative maximum. − to +: relative minimum. No change: neither."
  - "The reason is the change of sign, never f′(c) = 0 on its own."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the reasoning, the diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/5-4-first-derivative-test-determine-relative-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- Relative extrema can only happen at **critical points**: x in the domain of f with f′(x) = 0 or f′(x) undefined.
- Not every critical point is an extremum. The First Derivative Test sorts them.
- The test uses the sign chart from Topic 5.3: increasing then decreasing gives a peak; decreasing then increasing gives a valley.
- **Location** is the x-value c. **Value** is f(c).

## Key relationships

| Sign of f′ left of c | Sign of f′ right of c | f at c (f continuous at c) |
|---|---|---|
| + | − | Relative maximum |
| − | + | Relative minimum |
| + | + | Neither |
| − | − | Neither |

| On a graph of f′ at x = c | Meaning for f |
|---|---|
| Crosses the axis downwards | Relative maximum |
| Crosses the axis upwards | Relative minimum |
| Touches the axis and turns back | Neither |
| Peak or valley away from the axis | Not an extremum of f |

## Assumptions behind the test

- c must be in the domain of f, and f must be **continuous at c**.
- f′ must keep one sign on an interval just left of c and one sign just right of c.
- The test is for interior points. Endpoints are compared in Topic 5.5.

## Mistakes to avoid

1. **Justifying with "f′(c) = 0".** Say how the sign of f′ changes.
2. **Missing critical points where f′ is undefined** (cusps such as 3x^(2/3) − 2x at x = 0).
3. **Giving the x-value when the question asks for the value**, or the reverse.
4. **Substituting into f′ instead of f** to get the extremum value.
5. **Treating a peak of the f′ graph as a maximum of f.**
6. **Applying the test at a jump or a hole**, where f is not continuous.

## Quick self-check

1. m(x) = x³ − 3x. Classify the critical points. *(m′(x) = 3(x − 1)(x + 1). m′ changes + to − at x = −1: relative maximum, value m(−1) = 2. m′ changes − to + at x = 1: relative minimum, value m(1) = −2.)*
2. f′(x) = (x − 2)³. Does f have a relative extremum at x = 2? *(Yes, a relative minimum: f′ < 0 for x < 2 and f′ > 0 for x > 2.)*
3. The graph of g′ has a peak at x = 5 where g′(5) = 4. Does g have a maximum at x = 5? *(No. g′(5) ≠ 0, so x = 5 is not a critical point; g is increasing there.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/5-4-first-derivative-test-determine-relative-practice/).
