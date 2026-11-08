---
resourceId: "mb-ap-csp-3.15-revision-notes"
title: "Random Values: Revision Notes (Computer Science Principles 3.15)"
description: "One-page recap of random values: inclusive range, counting possible values, results of expressions, equal likelihood of a single call, probabilities for events, and random list indices."
course: "computer-science-principles"
unit: 3
topics: ["3.15"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.15-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["2", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.15-study-guide", "mb-ap-csp-3.15-practice", "mb-ap-csp-3.15-checklist"]
next: "mb-ap-csp-3.15-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "RANDOM(a, b) returns a random integer from a to b inclusive; each result is equally likely."
  - "There are b − a + 1 possible values."
  - "Each execution may give a different result, so random code must be tested more than once."
  - "Results of expressions can be found by listing each possible RANDOM value; a single call is uniform but a sum of two calls is not."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## Recap

- `RANDOM(a, b)` returns a random **integer from a to b inclusive**. Each value is **equally likely**.
- Number of possible values: **b − a + 1**.
- **Each execution may give a different result.**
- To find the **possible results** of an expression, list each possible `RANDOM` value and apply the expression.
- A sum or other combination of **two** calls is **not** uniform.
- Probability of an event: **favourable values ÷ number of possible values**.
- Random list element: `aList[RANDOM(1, LENGTH(aList))]`.

## Key relationships

| Goal | Expression | Possible values |
|---|---|---|
| Die roll | `RANDOM(1, 6)` | 1 to 6 |
| Coin flip | `RANDOM(1, 2)` (1 = heads) | 1 or 2 |
| Multiple of 5 from 10 to 50 | `RANDOM(2, 10) * 5` | 10, 15, ..., 50 (9 values) |
| Odd numbers 1, 3, 5 | `2 * RANDOM(1, 3) - 1` | 1, 3, 5 |
| 30% chance | `RANDOM(1, 10) ≤ 3` | true 3 times in 10 |
| Random list item | `aList[RANDOM(1, LENGTH(aList))]` | Every element, no error |

## Assumptions

- Each `RANDOM` call is independent of the others.
- Every integer in the range is equally likely for a **single** call.
- Indices start at 1.

## Method for possible-results questions

1. Write the list of values each `RANDOM` call can return (count them: b − a + 1).
2. Substitute each value into the rest of the expression.
3. Collect the **set** of results. Remove repeats.
4. If asked about likelihood, count how many ways each result can happen.

## Mistakes to avoid

- Forgetting the end values are included.
- Counting `b − a` possible values.
- Treating the sum of two calls as uniform.
- Using `LENGTH(aList) + 1` or 0 as an index limit.
- Judging a random program after one run.

## Worked mini-example

Possible results of `RANDOM(1, 4) * 3`: the values 1, 2, 3, 4 become 3, 6, 9, 12. So the set is {3, 6, 9, 12}. Four values, each with probability 1/4. The result is **never** 4 or 5 or 10.

## Quick self-check

1. How many values can `RANDOM(5, 12)` return?
2. What are the possible results of `RANDOM(1, 3) + 10`?
3. What is the probability that `RANDOM(1, 5) > 3`?

<details>
<summary>Answers</summary>

1. 12 − 5 + 1 = 8.
2. 11, 12 or 13.
3. Values 4 and 5 qualify: 2 out of 5, which is 2/5 or 40%.

</details>

## Where marks are won and lost

Typical questions ask which values an expression could produce, or which code could display a particular value. List the possible RANDOM values, apply the expression to each and read off the set. Another kind gives a conditional using RANDOM and asks the probability of a branch or the possible outputs. Look for off-by-one slips in ranges (inclusive ends) and in list indices. You may also be asked why a random program should be tested more than once.


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-15-random-values-study-guide/) for worked examples and explanations.
