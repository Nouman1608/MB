---
resourceId: "mb-ap-calcab-5.9-revision-notes"
title: "Connecting a Function, Its First Derivative, and Its Second Derivative: Revision Notes (Calculus AB 5.9)"
description: "One-page recap of how features of f, f′ and f″ line up: sign versus direction, extrema versus inflection points, matching graphs and the reasons that earn marks."
course: "calculus-ab"
unit: 5
topics: ["5.9"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-5.9-study-guide"]
learningObjectives:
  - "Recall which feature of f′ or f″ matches each feature of f"
  - "Spot the level-mixing errors that cost marks before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-5.9-study-guide", "mb-ap-calcab-5.9-practice", "mb-ap-calcab-5.9-checklist"]
next: "mb-ap-calcab-5.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "The sign of f′ gives the direction of f; the direction of f′, or the sign of f″, gives the concavity of f."
  - "Zeros of f′ with a sign change are extrema of f; turning points of f′ are inflection points of f."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the graphs and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/5-9-connecting-function-its-first-derivative-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- **f″ is the slope of f′, and f′ is the slope of f.** Every connection comes from this chain.
- On a graph of f′, look at two things: its **sign** (above or below the axis) and its **direction** (rising or falling).
- Sign of f′ → f increasing or decreasing. Direction of f′ → f concave up or down.
- Sign of f″ → f concave up or down **and** f′ increasing or decreasing. It does **not** tell you whether f rises or falls.
- The graph of f′ never gives values of f, only how f changes.

## Key relationships

| On f | On f′ | On f″ |
|---|---|---|
| Increasing | Above axis | No information |
| Decreasing | Below axis | No information |
| Relative max | Crosses from above to below | Often negative (not required) |
| Relative min | Crosses from below to above | Often positive (not required) |
| Horizontal tangent, no extremum | Touches axis, no sign change | No information alone |
| Concave up | Rising | Above axis |
| Concave down | Falling | Below axis |
| Inflection point | Peak or valley | Changes sign |

**Matching three graphs:** zeros of one curve line up with turning points of the curve one level up. Check signs too, then build the chain f → f′ → f″.

## Assumptions behind the rules

- f is continuous at any point you call an extremum or inflection point.
- "Concave up because f′ is increasing" needs f′ to be increasing on an **open interval**, not just at a point.
- An inflection point can occur where f″ does not exist (a corner on the graph of f′), as long as concavity changes.

## Mistakes to avoid

1. **"f′ decreasing, so f decreasing."** That is concavity. Direction of f needs the **sign** of f′.
2. **Using zeros of f′ as inflection points.** Inflection points come from turning points of f′.
3. **"f″(c) = 0, so inflection point."** f″ must change sign.
4. **Concluding "f is increasing" from a graph of f″.**
5. **Reasons with no function named**, such as "the graph turns". Write "f′ changes from positive to negative at x = c".
6. **Reading f(c) from the height of f′.**

## Quick self-check

1. On an interval, f′ is negative and increasing. Describe f. *(Decreasing and concave up.)*
2. f′(x) = x³ − 6x² = x²(x − 6). Where does f have a relative extremum? *(Only at x = 6, a minimum: f′ changes from negative to positive there. At x = 0, f′ touches zero without changing sign.)*
3. For the same f′, where are the inflection points of f? *(f″(x) = 3x(x − 4), which changes sign at x = 0 and x = 4.)*
4. A graph of f″ is positive on (2, 7). Can you say f is increasing on (2, 7)? *(No. You only know f is concave up and f′ is increasing there.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/5-9-connecting-function-its-first-derivative-practice/).
