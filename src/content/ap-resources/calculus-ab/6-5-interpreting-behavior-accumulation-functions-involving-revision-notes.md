---
resourceId: "mb-ap-calcab-6.5-revision-notes"
title: "Interpreting the Behavior of Accumulation Functions Involving Area: Revision Notes (Calculus AB 6.5)"
description: "One-page recap of how the sign, slope and area of f describe g(x) = ∫ (a to x) f(t) dt: increasing intervals, extrema, concavity, inflection points and absolute values."
course: "calculus-ab"
unit: 6
topics: ["6.5"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-6.5-study-guide"]
learningObjectives:
  - "Recall how each feature of f translates into a feature of its accumulation function g"
  - "Spot the common errors in reading g from a graph or table of f"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-6.5-study-guide", "mb-ap-calcab-6.5-practice", "mb-ap-calcab-6.5-checklist"]
next: "mb-ap-calcab-6.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "g′ = f and g″ = f′: the graph of f is the graph of g′."
  - "Values of g come from signed areas, starting from g(a) = 0."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, graphs and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/6-5-interpreting-behavior-accumulation-functions-involving-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: g(x) = ∫ (a to x) f(t) dt, with f continuous.

## Recap

- **The graph you are given is g′.** Heights of f are slopes of g. Areas under f are changes in g. Slopes of f are the concavity of g.
- **g(a) = 0.** Every other value of g is a running total of signed area from a. Area to the left of a counts with the opposite sign.
- **Behaviour comes from signs; values come from areas.** You rarely need a formula for g.
- The reasoning is the same whether f is a graph, a table, a formula or a verbal rate. With a table, use the Intermediate Value Theorem to locate zeros and a Riemann or trapezoidal sum to estimate values of g.

## Key relationships

| Feature of f | Feature of g |
|---|---|
| f > 0 | g increasing |
| f < 0 | g decreasing |
| f changes + to − at c | relative maximum of g at c |
| f changes − to + at c | relative minimum of g at c |
| f = 0 but no sign change | no extremum of g |
| f increasing | g concave up |
| f decreasing | g concave down |
| f has a relative max or min (including at a corner) | point of inflection of g |
| ∫ (p to q) f(t) dt | g(q) − g(p) |

**Absolute extrema of g on [p, q]:** list the endpoints and the zeros of f with a sign change, find g at each with areas, and compare.

## Assumptions behind the method

- f is continuous, so g′ = f holds everywhere on the interval.
- A table alone shows signs only at the listed points. You need extra facts (for example, "f is increasing") to rule out extra zeros.

## Mistakes to avoid

1. **"f is largest, so g is largest."** f largest means g rises fastest.
2. **Calling every zero of f an extremum.** Check for a sign change.
3. **Using f(c) as g(c).** One is a slope, the other an area.
4. **Forgetting endpoints** in an absolute extremum question.
5. **Losing the sign** of areas to the left of a.
6. **Giving reasons about g itself** ("g is positive") instead of about g′ = f.

## Quick self-check

1. f changes from negative to positive at t = 4. What does g have at x = 4? *(A relative minimum, since g′ = f changes from − to +.)*
2. f has a relative maximum at t = 2. What does g have at x = 2? *(A point of inflection: g″ = f′ changes from + to −.)*
3. g(x) = ∫ (2 to x) f(t) dt and ∫ (0 to 2) f(t) dt = 5. Find g(0). *(−5)*

Next: [practice questions](/advanced-course-resources/calculus-ab/6-5-interpreting-behavior-accumulation-functions-involving-practice/).
