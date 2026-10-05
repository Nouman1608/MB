---
resourceId: "mb-ap-calcab-7.1-revision-notes"
title: "Modeling Situations with Differential Equations: Revision Notes (Calculus AB 7.1)"
description: "One-page recap of writing differential equations from words: the phrase-to-symbol table, choosing the sign of k, its units and the mistakes that cost marks."
course: "calculus-ab"
unit: 7
topics: ["7.1"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-7.1-study-guide"]
learningObjectives:
  - "Recall how each common phrase translates into a differential equation"
  - "Spot sign and units errors in a model before making them"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
related: ["mb-ap-calcab-7.1-study-guide", "mb-ap-calcab-7.1-practice", "mb-ap-calcab-7.1-checklist"]
next: "mb-ap-calcab-7.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "A differential equation links a function, its input variable and its derivatives."
  - "Rate on the left, what it depends on on the right, sign from the story."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the cooling graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/7-1-modeling-situations-differential-equations-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- A **differential equation** links a function, its independent variable and one or more of its derivatives, for example dP/dt = 0.03P.
- Its **solution is a function**, not a number. In Topic 7.1 you only write and read equations; you do not solve them.
- "The rate of change of A" is a derivative, dA/dt. It goes on the left.
- Whatever the rate depends on goes on the right, with a **constant of proportionality k**.
- Decide the **sign** from the story: decreasing quantity, negative rate.
- One given fact (a value of the quantity and its rate) lets you find k. Then you can find the rate at any other value.

## Key relationships

| Words | Equation |
|---|---|
| A changes at a rate proportional to A | dA/dt = kA |
| … proportional to the square root of A | dA/dt = k√A |
| … inversely proportional to A | dA/dt = k/A |
| … jointly proportional to A and (M − A) | dA/dt = kA(M − A) |
| … proportional to the difference between A and a fixed value R | dA/dt = k(A − R) |
| rate in minus rate out | dA/dt = (in) − (out) |
| acceleration is proportional to velocity | d²s/dt² = k·ds/dt |

Units: both sides match, so units of k = (units of dA/dt) ÷ (units of what k multiplies). For dA/dt = kA with t in hours, k is per hour.

## Assumptions

- k is a constant: it does not change with time or with the quantity.
- Say which sign k has. With dQ/dt = −kQ, take k > 0.
- The variables and their units must be stated (for example, t in minutes).

## Mistakes to avoid

1. **Writing the quantity, not its rate**: P = kP instead of dP/dt = kP.
2. **Double negative**: dQ/dt = −kQ with k < 0.
3. **Wrong input**: "proportional to time" (kt) versus "proportional to the amount" (kA).
4. **"Inversely" read as "negative"**: inverse means k/A.
5. **Rate given in words as positive**: "cooling at 3 °C per minute" means dT/dt = −3.
6. **Dropping the variable**: dC/dt = 30 − 0.25 instead of 30 − 0.25C.

## Quick self-check

1. The mass m of a snowball shrinks at a rate proportional to its surface area S. Write the equation. *(dm/dt = −kS, k > 0)*
2. dy/dt = −k(y − 15), k > 0, and y = 35 when dy/dt = −4. Find k. *(k = 4/20 = 0.2)*
3. Using question 2, find dy/dt when y = 25. *(−0.2 × 10 = −2)*
4. Put dW/dt = 2/W, with W > 0, into words. *(W increases at a rate inversely proportional to W, constant 2.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/7-1-modeling-situations-differential-equations-practice/).
