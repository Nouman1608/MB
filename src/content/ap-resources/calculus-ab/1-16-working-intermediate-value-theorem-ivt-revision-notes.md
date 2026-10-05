---
resourceId: "mb-ap-calcab-1.16-revision-notes"
title: "Working with the Intermediate Value Theorem: Revision Notes (Calculus AB 1.16)"
description: "One-page recap of the Intermediate Value Theorem: its two conditions, what it does and does not promise, the three-part justification and the mistakes that cost marks."
course: "calculus-ab"
unit: 1
topics: ["1.16"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-1.16-study-guide"]
learningObjectives:
  - "Recall the conditions and conclusion of the Intermediate Value Theorem"
  - "Write the three-part justification quickly and completely"
skills: ["3"]
studyMinutes: 10
difficulty: "core"
calculator: "none-needed"
related: ["mb-ap-calcab-1.16-study-guide", "mb-ap-calcab-1.16-practice", "mb-ap-calcab-1.16-checklist"]
next: "mb-ap-calcab-1.16-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Continuous on [a, b] and d between f(a) and f(b) means f(c) = d for at least one c between a and b."
  - "The theorem proves existence only: not where, not how many."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the graphs and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/1-16-working-intermediate-value-theorem-ivt-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- **Theorem.** If f is continuous on the closed interval [a, b] and d is between f(a) and f(b), then there is at least one c between a and b with f(c) = d.
- It is an **existence theorem**: it does not say where.
- **"At least one"**: there may be several values of c.
- If a condition fails, the theorem makes **no promise**. The value may still occur, or it may be skipped.
- To show g(x) = h(x) has a solution, apply the theorem to g(x) − h(x) with target 0.

## Key relationships

| Situation | What you can conclude |
|---|---|
| f continuous on [a, b], f(a) and f(b) of opposite signs | At least one zero in (a, b) |
| f continuous on [a, b], d strictly between f(a) and f(b) | At least one c in (a, b) with f(c) = d |
| f continuous, table values trap d in k separate sub-intervals | At least k solutions of f(x) = d |
| f(a) and f(b) on the same side of d | Nothing: the theorem is silent |
| f not continuous somewhere in [a, b] | Nothing: the theorem may not be used |

Continuity reasons you can quote: polynomial; sum, product or composition of continuous functions; quotient where the denominator is never 0 on [a, b]; "given in the question"; differentiable on the interval (Unit 2). For a piecewise function, check every join.

## The three-part justification

1. f is continuous on [a, b] because …
2. f(a) = …, f(b) = …, and d is between them (write the inequality).
3. Therefore, by the Intermediate Value Theorem, there is a c in (a, b) with f(c) = d.

## Assumptions behind the method

- Continuity must hold on the whole closed interval, not only at the endpoints.
- The target must be between the end values f(a) and f(b), not merely between a and b.
- Different solutions counted from a table must come from sub-intervals that do not overlap.

## Mistakes to avoid

1. **No continuity statement**, or "continuous" with no reason.
2. **No numbers**: "by IVT, yes" without f(a), f(b) and the inequality.
3. **Claiming exactly one c**, or claiming to know where c is.
4. **Saying "no solution"** when a condition fails. The right phrase is "not guaranteed".
5. **Using the theorem across a jump** in a piecewise function.
6. **Treating a table as a full count**: it gives a minimum number only.

## Quick self-check

1. q(x) = x³ + 2x − 5. Show q has a zero in (1, 2). *(q is a polynomial, so continuous on [1, 2]. q(1) = −2 < 0 < 7 = q(2). By the Intermediate Value Theorem, q(c) = 0 for some c in (1, 2).)*
2. g is continuous on [0, 4] with g(0) = 7 and g(4) = 2. Is g(c) = 3 guaranteed for some c in (0, 4)? Is g(c) = 8? *(Yes for 3, because 2 < 3 < 7. Not guaranteed for 8, because 8 is not between 2 and 7.)*
3. f(x) = 1/x, f(−1) = −1, f(1) = 1. But 1/x is never 0. Does this contradict the theorem? *(No: f is not continuous at x = 0, so the theorem does not apply to [−1, 1].)*

Next: [practice questions](/advanced-course-resources/calculus-ab/1-16-working-intermediate-value-theorem-ivt-practice/).
