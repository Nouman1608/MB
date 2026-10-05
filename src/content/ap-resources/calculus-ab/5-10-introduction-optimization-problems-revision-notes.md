---
resourceId: "mb-ap-calcab-5.10-revision-notes"
title: "Introduction to Optimization Problems: Revision Notes (Calculus AB 5.10)"
description: "One-page recap of optimization: the shared skeleton of quantity, constraint and interval, the eight-step method, how to prove an extreme value and the mistakes that cost marks."
course: "calculus-ab"
unit: 5
topics: ["5.10"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-5.10-study-guide"]
learningObjectives:
  - "Recall the steps for setting up and solving an optimization problem"
  - "Choose the right way to prove that a critical point gives the extreme value"
skills: ["1", "2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-5.10-study-guide", "mb-ap-calcab-5.10-practice", "mb-ap-calcab-5.10-checklist"]
next: "mb-ap-calcab-5.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "One quantity, one variable, one interval: then differentiate."
  - "A critical point is only a candidate until you prove it is the maximum or minimum."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, diagrams and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/5-10-introduction-optimization-problems-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- An optimization problem asks for the **largest or smallest value** of one quantity on an interval.
- Every problem has the same skeleton: **quantity to optimise**, **constraint**, **interval**.
- The constraint lets you write the quantity as a function of **one** variable. Only then differentiate.
- At an interior maximum or minimum of a differentiable function, the derivative is 0. So the search starts with critical points.
- Then **prove** which critical point gives the extreme value, and answer exactly what was asked (value, location or both).

## Key relationships

| Situation | How to prove the extreme value |
|---|---|
| Continuous function on a closed interval [a, b] | Candidates test: evaluate at every critical point and both endpoints; largest is the maximum, smallest is the minimum |
| Open interval, exactly one critical point c | First derivative test (sign change of f′ at c) or second derivative test (sign of f″(c)), then "only critical point, so absolute" |
| Open interval, several critical points | Compare values, and check behaviour near the ends of the interval |

The method in eight steps: name the quantity → diagram and letters → formula → use constraint → interval → critical points → prove → answer.

## Assumptions behind the method

- The function is continuous on the interval (true for polynomials and for rational functions away from zeros of the denominator).
- The interval comes from the situation: lengths positive, times within the model's range.
- The single-critical-point argument needs the function to be continuous on an interval with **only one** critical point.

## Mistakes to avoid

1. **Differentiating a formula that still has two variables.**
2. **Stopping at f′(x) = 0** without showing it is a maximum (or minimum).
3. **Forgetting endpoints** on a closed interval.
4. **Calling a relative extremum absolute** without the single-critical-point reason or a comparison.
5. **Answering with the location** when the question asks for the value.
6. **Keeping a critical point outside the interval**, such as a negative length.

## Quick self-check

1. Find the maximum and minimum values of f(x) = x³ − 12x on [0, 3]. *(f′ = 3x² − 12 = 0 at x = 2 in the interval. f(0) = 0, f(2) = −16, f(3) = −9. Maximum 0 at x = 0; minimum −16 at x = 2.)*
2. Two numbers add to 20. What is the largest possible product? *(P = x(20 − x), P′ = 20 − 2x = 0 at x = 10, P″ = −2 < 0, only critical point: maximum product 100.)*
3. On an open interval, g′(c) = 0 and g″(c) < 0. Why is that not yet enough to say g has its absolute maximum at c? *(It only shows a relative maximum. You also need c to be the only critical point in the interval, or a comparison of values.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/5-10-introduction-optimization-problems-practice/).
