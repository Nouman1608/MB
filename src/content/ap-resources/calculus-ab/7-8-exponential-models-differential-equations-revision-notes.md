---
resourceId: "mb-ap-calcab-7.8-revision-notes"
title: "Exponential Models with Differential Equations: Revision Notes (Calculus AB 7.8)"
description: "One-page recap of dy/dt = ky: translating the sentence, the solution y = y₀e^(kt), finding k from data or a half-life, checking answers and the common slips."
course: "calculus-ab"
unit: 7
topics: ["7.8"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-7.8-study-guide"]
learningObjectives:
  - "Recall the exponential model, its solution and the meaning of each constant"
  - "Spot the common errors in exponential growth and decay questions before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
related: ["mb-ap-calcab-7.8-study-guide", "mb-ap-calcab-7.8-practice", "mb-ap-calcab-7.8-checklist"]
next: "mb-ap-calcab-7.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Rate proportional to amount: dy/dt = ky, so y = y₀e^(kt)."
  - "Doubling time ln 2 / k; half-life ln 2 / |k|."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivation, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/7-8-exponential-models-differential-equations-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **e^(kt)** means e to the power kt; **y₀** is the value of y at t = 0.

## Recap

- "The rate of change of y is proportional to y" translates to **dy/dt = ky**.
- k > 0: growth. k < 0: decay. Units of k: **per unit of time**.
- Separating variables gives ln|y| = kt + C, so **y = y₀e^(kt)**. The constant multiplies; it is not added.
- k is the **relative rate**: (dy/dt)/y = k. The rate dy/dt itself changes as y changes.
- Over any time step Δt, y is multiplied by e^(kΔt), whatever its current value.
- Motion: dv/dt = kv (k < 0) gives v = v₀e^(kt); integrate v to get position.

## Key relationships

| Situation | Result |
|---|---|
| dy/dt = ky, y(0) = y₀ | y = y₀e^(kt) |
| Two values y(0) = y₀, y(T) = y₁ | k = ln(y₁/y₀)/T |
| Doubling time D | k = ln 2 / D |
| Half-life H | k = −ln 2 / H; y = y₀ · 2^(−t/H) |
| Rate at a given moment | dy/dt = ky (use the equation, no need to differentiate) |
| Time to reach a value Y | t = ln(Y/y₀)/k |
| dy/dt = k(y − M) | y − M = (y₀ − M)e^(kt) |

## How to confirm a solution

1. Differentiate your y and check that dy/dt equals k times your y.
2. Substitute t = 0 and check that you get y₀.
3. Check reasonableness: sign of k, units, growth or decay in the right direction, and no negative amounts.

## Mistakes to avoid

1. **Writing y = e^(kt) + C** instead of y = Ce^(kt).
2. **Treating k as a fixed amount per unit time.** It is a fraction of the current amount.
3. **Using rate × time** for a non-constant rate.
4. **Double minus signs:** if you write dy/dt = −ky with k > 0, the solution is y₀e^(−kt).
5. **Confusing "proportional to t" with "proportional to y".**
6. **Rounding k early.** Store it at full accuracy.

## Quick self-check

1. y = 3e^(kt) with k = (ln 2)/2. Find y(4) without a calculator. *(12: the doubling time is 2, so 3 → 6 → 12)*
2. dQ/dt = −0.1Q, t in days. Find the half-life. *(ln 2 / 0.1 ≈ 6.931 days)*
3. A quantity triples every 5 years. Find k. *(ln 3 / 5 ≈ 0.220 per year)*

Next: [practice questions](/advanced-course-resources/calculus-ab/7-8-exponential-models-differential-equations-practice/).
