---
resourceId: "mb-ap-calcab-5.11-revision-notes"
title: "Solving Optimization Problems: Revision Notes (Calculus AB 5.11)"
description: "One-page recap of solving optimization problems: the ways to justify an absolute extremum, answering the exact question asked and writing a clear interpretation in context."
course: "calculus-ab"
unit: 5
topics: ["5.11"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-5.11-study-guide"]
learningObjectives:
  - "Recall the valid ways to justify an absolute maximum or minimum on closed and open domains"
  - "Write a complete context sentence for an extreme value"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
related: ["mb-ap-calcab-5.11-study-guide", "mb-ap-calcab-5.11-practice", "mb-ap-calcab-5.11-checklist"]
next: "mb-ap-calcab-5.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "A critical point is a candidate, not an answer. Justify that it is the absolute extremum."
  - "Answer with the quantity, the value and units, and when or where it happens."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the graphs and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/5-11-solving-optimization-problems-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- Start from the model built in Topic 5.10: one function of one variable, with its domain.
- Find the critical points: where the derivative is 0 or does not exist, **inside the domain**.
- **Justify** that your answer is the absolute maximum or minimum. The method depends on the domain (table below).
- Give **exactly what is asked**: the location (an input), the extreme value (an output) or a quantity that follows from them.
- **Interpret**: name the quantity, give the value with units, and say when or where it happens.

## Key relationships

| Situation | Valid justification |
|---|---|
| Closed domain [a, b] | Candidates Test: compare f at every critical point and at a and b |
| Open domain, only one critical point c | f′ changes sign at c: − to + gives the absolute minimum, + to − the absolute maximum |
| Open domain, only one critical point c | f″(c) > 0 gives the absolute minimum; f″(c) < 0 the absolute maximum |
| Any domain | f″ > 0 on the whole domain: a critical point is the absolute minimum (f″ < 0: absolute maximum) |

| The function measures… | Its maximum value means… |
|---|---|
| An amount (profit, area, volume) | the most of that amount the model allows |
| A rate (litres per minute, cars per minute) | the fastest rate, not the largest total |
| A cost, length or time to be minimised (its minimum) | the least possible cost, length or time |

## Assumptions behind the method

- The function is differentiable (or at least continuous) on the domain, so its extreme values occur at critical points or endpoints.
- The domain matches the situation: lengths positive, times within the stated period, capacities respected.
- The model is only a model. The answer is the best value **under the model**.

## Mistakes to avoid

1. **Stopping at f′(x) = 0** without a justification.
2. **Forgetting endpoints** on a closed interval.
3. **Using f″(c) < 0 alone** for an absolute maximum.
4. **Answering "where" when the question asks "what"**, or the reverse.
5. **Keeping solutions outside the domain**, such as a negative length.
6. **No units, or "it"** instead of the function's name.
7. **Rounding too early** on calculator questions. Give final answers to three decimal places.

## Quick self-check

1. On [0, 10], f has one critical point at x = 4 with f(4) = 7, and f(0) = 2, f(10) = 9. What is the absolute maximum value? *(9, at x = 10: the endpoint wins)*
2. On x > 0, g has only one critical point, at x = 5, and g″(5) > 0. What can you conclude? *(g(5) is the absolute minimum of g on x > 0)*
3. R(t) is a rate in litres per minute, and R has its maximum at t = 12. What happens at t = 12? *(The liquid flows fastest: the greatest number of litres per minute. It is not when the most liquid has flowed in total.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/5-11-solving-optimization-problems-practice/).
