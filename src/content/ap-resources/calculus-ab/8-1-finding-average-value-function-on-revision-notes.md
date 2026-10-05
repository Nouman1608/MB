---
resourceId: "mb-ap-calcab-8.1-revision-notes"
title: "Finding the Average Value of a Function on an Interval: Revision Notes (Calculus AB 8.1)"
description: "One-page recap of the average value of a function: the integral formula, the equal-area rectangle, tables and graphs, units, and how it differs from average rate of change."
course: "calculus-ab"
unit: 8
topics: ["8.1"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-8.1-study-guide"]
learningObjectives:
  - "Recall the average value formula and the picture behind it"
  - "Spot the common errors in average value questions before making them"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
related: ["mb-ap-calcab-8.1-study-guide", "mb-ap-calcab-8.1-practice", "mb-ap-calcab-8.1-checklist"]
next: "mb-ap-calcab-8.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "f_avg on [a, b] = (1/(b − a)) ∫ (a to b) f(x) dx, for continuous f."
  - "Average value has the units of f; average rate of change has units of f per unit of x."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, figures and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/8-1-finding-average-value-function-on-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **∫ (a to b) f(x) dx** means the definite integral of f(x) from x = a to x = b.

## Recap

- The average value of a continuous function f on [a, b] is the integral divided by the length of the interval.
- It comes from averaging many equally spaced samples of f: the sample average is a Riemann sum divided by b − a.
- **Picture:** the average value is the height of the rectangle on [a, b] with the same signed area as the region under f.
- If f is continuous, f reaches its average value at least once in [a, b] (Intermediate Value Theorem). That c need not be the midpoint, and need not be unique.
- The average value can be negative. It is usually **not** the middle of the range, (f(a) + f(b))/2, unless f is linear.

## Key relationships

| Quantity | Formula | Units |
|---|---|---|
| Average value of f | (1/(b − a)) ∫ (a to b) f(x) dx | units of f |
| Total (net) accumulation | ∫ (a to b) f(x) dx = f_avg × (b − a) | units of f × units of x |
| Average rate of change of f | (f(b) − f(a))/(b − a) | units of f per unit of x |
| Average value of f′ | equals the average rate of change of f | units of f per unit of x |

From a **table**: estimate the integral with a Riemann or trapezoidal sum (weight each value by its width), then divide by b − a. From a **graph**: add signed areas, then divide by b − a.

## Assumptions behind the method

- f is continuous on [a, b] (or at least integrable, for the formula; continuity is needed for "f reaches its average").
- The interval is the one in the question, not the whole table or graph.
- A table estimate is only as good as the sum you use; say which one.

## Mistakes to avoid

1. **Forgetting 1/(b − a).** The integral alone is a total.
2. **Confusing average value with average rate of change.**
3. **Averaging table entries** with unequal gaps.
4. **Wrong units**, such as °C·hours for an average temperature.
5. **Ignoring signs:** area below the axis counts as negative.
6. **Assuming c is the midpoint** of the interval.

## Quick self-check

1. Find the average value of 6x² on [0, 2]. *(8: the integral is 16, divided by 2)*
2. The average value of f on [3, 8] is 7. Find ∫ (3 to 8) f(x) dx. *(35 = 7 × 5)*
3. Find the average value of 2x + 1 on [0, 4], and say why it equals (f(0) + f(4))/2 here. *(5. The function is linear, so the region under it is a trapezoid, whose area is width × average of the two end heights.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/8-1-finding-average-value-function-on-practice/).
