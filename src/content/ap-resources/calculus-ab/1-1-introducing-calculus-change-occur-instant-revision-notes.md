---
resourceId: "mb-ap-calcab-1.1-revision-notes"
title: "Introducing Calculus: Can Change Occur at an Instant? Revision Notes (Calculus AB 1.1)"
description: "One-page recap of average rates of change, why a single instant gives 0/0, and how shrinking intervals lead to the rate of change at an instant."
course: "calculus-ab"
unit: 1
topics: ["1.1"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-1.1-study-guide"]
learningObjectives:
  - "Recall the average-rate formula and what it means on a graph"
  - "Explain in one sentence how a rate at an instant is obtained from average rates"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
related: ["mb-ap-calcab-1.1-study-guide", "mb-ap-calcab-1.1-practice", "mb-ap-calcab-1.1-checklist"]
next: "mb-ap-calcab-1.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Average rate = change in output ÷ change in input."
  - "Over an interval of length zero the average rate is 0/0: undefined."
  - "The rate at an instant is what average rates approach as intervals containing the instant shrink."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the graph, the tables and the worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/1-1-introducing-calculus-change-occur-instant-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (h → 0) g(h)** means "the limit as h approaches 0 of g(h)". Topic 1.2 defines it properly.

## Recap

- The **average rate of change** of f over [a, b] is (f(b) − f(a))/(b − a). Its units are output units per input unit.
- On a graph it is the slope of the **secant line** through (a, f(a)) and (b, f(b)).
- At a single instant the change in input is 0, so the formula gives **0/0, which is undefined**. One division can never give the rate at an instant.
- Instead, use intervals that **contain** the instant and make them shorter. If the averages from both sides approach one value, that value is the **instantaneous rate of change**.
- On a graph, the secant slopes approach the slope of the **tangent line**.
- From a table you can only **estimate**: use the shortest interval containing the instant, ideally with data on both sides.

## Key relationships

| Idea | Formula or rule | Meaning |
|---|---|---|
| Average rate over [a, b] | (f(b) − f(a))/(b − a) | Slope of a secant line |
| Average rate over [a, a + h] | (f(a + h) − f(a))/h, h ≠ 0 | h > 0: right of a; h < 0: left of a |
| Interval of length zero | (f(a) − f(a))/0 = 0/0 | Undefined, not 0 |
| Rate at the instant a | lim (h → 0) (f(a + h) − f(a))/h | Slope of the tangent line |
| Sign of a rate | positive / negative | quantity increasing / decreasing |

## Assumptions

- The interval must contain the instant (inside it or at one end).
- h is never 0 in any quotient you calculate; you only look at what happens as h gets close to 0.
- A single rate exists only if the averages from the left and from the right approach the same value.

## Mistakes to avoid

1. **Putting h = 0** into (f(a + h) − f(a))/h. That gives 0/0.
2. **Dividing an output by an input**, such as s(3)/3. That is not the rate at t = 3.
3. **Using a long interval** when a shorter one containing the instant is available.
4. **Averaging the outputs** instead of dividing the change in output by the change in input.
5. **Dropping units or the sign** when you interpret a rate.

## Quick self-check

1. Find the average rate of change of f(x) = x² over [1, 4]. *(5: (16 − 1)/3 = 15/3)*
2. For f(x) = x², the average rate over [5, 5 + h] simplifies to 10 + h for h ≠ 0. What is the rate of change at x = 5? *(10, because 10 + h approaches 10 as h approaches 0)*
3. A bakery has sold L(t) loaves t hours after opening, with L(1) = 40 and L(3) = 52. Find the average rate over [1, 3] and give its units. *(6 loaves per hour)*

Next: [practice questions](/advanced-course-resources/calculus-ab/1-1-introducing-calculus-change-occur-instant-practice/).
