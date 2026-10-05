---
resourceId: "mb-ap-calcab-8.3-revision-notes"
title: "Accumulation Functions and Definite Integrals in Applied Contexts: Revision Notes (Calculus AB 8.3)"
description: "One-page recap of net change from a rate: the amount-function formula, rates in and out, finding the greatest amount, units and how to word an interpretation."
course: "calculus-ab"
unit: 8
topics: ["8.3"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-8.3-study-guide"]
learningObjectives:
  - "Recall the net-change and amount-function formulas and when to use each"
  - "Spot the common errors in applied integral questions before making them"
skills: ["3"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
related: ["mb-ap-calcab-8.3-study-guide", "mb-ap-calcab-8.3-practice", "mb-ap-calcab-8.3-checklist"]
next: "mb-ap-calcab-8.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "∫ (a to b) rate dt = net change in the amount from a to b."
  - "Amount at x = starting amount + ∫ (a to x) rate dt; its derivative is the rate."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the rate graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/8-3-accumulation-functions-definite-integrals-applied-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **∫ (a to b) r(t) dt** means the definite integral of r(t) from t = a to t = b.

## Recap

- A rate times a short time is a small change. Adding the small changes gives an integral, so **the integral of a rate is the net change** in the amount.
- **Net** means gains and losses cancel. For the total of all rises and falls, integrate |rate|.
- The amount at time x is the **starting value plus the accumulated change**. Without the starting value you only have the change.
- The derivative of the amount function is the rate (Fundamental Theorem).
- With a rate in and a rate out, the net rate is **in − out**. The amount increases exactly when in > out.

## Key relationships

| Idea | Formula | Units |
|---|---|---|
| Net change | ∫ (a to b) Q′(t) dt = Q(b) − Q(a) | rate units × time units |
| Amount function | Q(x) = Q(a) + ∫ (a to x) Q′(t) dt | units of Q |
| Rate of the amount | Q′(x) = rate at time x | units of Q per unit time |
| In and out | Q(x) = Q(a) + ∫ (a to x) [I(t) − O(t)] dt | units of Q |
| Total change | ∫ (a to b) \|Q′(t)\| dt | units of Q |
| Greatest/least amount | Compare Q at endpoints and where Q′ changes sign | units of Q |

## Assumptions behind the method

- The rate is continuous on the interval, so the Fundamental Theorem applies.
- The rate and the input use matching units (do not mix minutes and hours).
- The starting value belongs to the same time as the lower limit of the integral.

## Mistakes to avoid

1. **Leaving out the starting amount.**
2. **Using rate(b) − rate(a)** as the change in the amount.
3. **Saying the amount peaks when the rate peaks.** It peaks where the net rate changes from + to −.
4. **Skipping the endpoints** in the candidates test.
5. **Writing out − in** instead of in − out.
6. **Rounding a critical value** before using it in a later integral.
7. **Interpretations with no units or no time interval.**

## Quick self-check

1. A tank holds 30 litres at t = 0. Water flows in at 4 + 2t litres per minute. How much is in the tank at t = 5? *(30 + ∫ (0 to 5) (4 + 2t) dt = 30 + 45 = 75 litres)*
2. r(t) is in litres per minute and t in minutes. What are the units of ∫ (0 to 10) r(t) dt? *(litres)*
3. Rate in > rate out at t = 2. Is the amount increasing or decreasing at t = 2? *(Increasing, because the amount's derivative is in − out > 0.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/8-3-accumulation-functions-definite-integrals-applied-practice/).
