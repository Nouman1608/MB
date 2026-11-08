---
resourceId: "mb-ap-csp-3.17-revision-notes"
title: "Algorithmic Efficiency: Revision Notes (Computer Science Principles 3.17)"
description: "One-page recap of algorithmic efficiency: problems and instances, decision versus optimization, counting executions, reasonable versus unreasonable time, and heuristics."
course: "computer-science-principles"
unit: 3
topics: ["3.17"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.17-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["1"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.17-study-guide", "mb-ap-csp-3.17-practice", "mb-ap-csp-3.17-checklist"]
next: "mb-ap-csp-3.17-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "Efficiency estimates the resources an algorithm uses as a function of the input size; it can be measured informally by counting how many times statements execute."
  - "Different correct algorithms for the same problem can have different efficiencies."
  - "Polynomial or slower growth (constant, linear, square, cube) is reasonable time; exponential and factorial growth is unreasonable."
  - "A decision problem has a yes/no answer; an optimization problem asks for the best solution."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Recap

- A **problem** is a general task; an **instance** has specific input.
- A **decision problem** has a yes/no answer; an **optimization problem** seeks the best solution.
- **Efficiency**: an estimate of resources used, as a function of **input size**; measure informally by **counting how many times statements execute**.
- **Different correct algorithms** for one problem can differ greatly in efficiency.
- **Reasonable time**: polynomial or slower growth (constant, linear, square, cube).
- **Unreasonable time**: exponential and factorial growth.
- A **heuristic** gives a solution that is **not guaranteed optimal**; used when exact methods are impractical.
- Formal analysis (Big-O) is **not** required.

## Key relationships

| Growth | Steps for *n* = 20 | Reasonable? |
|---|---|---|
| Constant | 1 | Yes |
| Linear *n* | 20 | Yes |
| Square *n*² | 400 | Yes |
| Cube *n*³ | 8,000 | Yes |
| Exponential 2<sup>*n*</sup> | 1,048,576 | No (for large *n*) |
| Factorial *n*! | 2,432,902,008,176,640,000 | No |

| Change | Effect |
|---|---|
| Double *n*, single loop | Work doubles |
| Double *n*, loop inside loop | Work quadruples |
| Add 1 to *n*, 2<sup>*n*</sup> algorithm | Work doubles |
| Faster computer | Does not change the growth pattern |

## Assumptions

- Each simple statement counts as one step.
- Input size *n* is the number of items processed.
- "Reasonable" and "unreasonable" refer to growth with *n*, not to one particular run.

## Method for comparing two algorithms

1. Choose an input size, say *n* = 10, and count how many times the key statement runs for each algorithm.
2. Double *n* and count again.
3. See how the counts grow: doubling, quadrupling, or much faster?
4. State which grows more slowly, and whether either is exponential or factorial.

## Mistakes to avoid

- Counting lines of code instead of executions.
- Forgetting that nested loops multiply.
- Thinking a faster computer solves exponential growth.
- Calling a heuristic answer "optimal".
- Confusing unreasonable time with impossible (undecidable).

## Worked mini-example

A loop runs *n* times, and inside it an inner loop also runs *n* times. For *n* = 8 the inner statement runs 8 × 8 = 64 times. For *n* = 16 it runs 16 × 16 = 256 times: doubling *n* made the work **four times** bigger.

## Quick self-check

1. Is "What is the cheapest route through all these towns?" a decision or optimization problem?
2. An algorithm needs 2<sup>*n*</sup> steps. What happens to the steps when *n* goes from 40 to 41?
3. Name one situation where a heuristic is appropriate.

<details>
<summary>Answers</summary>

1. Optimization: it asks for the best (cheapest) solution.
2. They double.
3. When an exact algorithm would take an unreasonable time, such as finding the best tour of many towns, and an approximate answer is acceptable.

</details>

## Where marks are won and lost

Typical questions give two or three code segments and ask which runs the most statements, or how the number of steps changes when the input doubles. Others ask whether a described algorithm runs in reasonable time, or when a heuristic is appropriate. Count executions carefully: a loop inside a loop multiplies the work. Remember that unreasonable time and impossibility (Topic 3.18) are different ideas.


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-17-algorithmic-efficiency-study-guide/) for worked examples and explanations.
