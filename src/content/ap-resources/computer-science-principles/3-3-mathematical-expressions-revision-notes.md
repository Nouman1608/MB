---
resourceId: "mb-ap-csp-3.3-revision-notes"
title: "Mathematical Expressions: Revision Notes (Computer Science Principles 3.3)"
description: "One-page recap of arithmetic operators, order of operations and MOD, with a table of everyday MOD patterns and the slips that cost marks."
course: "computer-science-principles"
unit: 3
topics: ["3.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.3-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["2", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.3-study-guide", "mb-ap-csp-3.3-practice", "mb-ap-csp-3.3-checklist"]
next: "mb-ap-csp-3.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "An expression is evaluated to a single value; operators follow the usual order of operations."
  - "MOD has the same precedence as * and /, and equal-precedence operators go left to right."
  - "a MOD b is the remainder after dividing a by b; the result is always between 0 and b − 1."
  - "n MOD 2 = 0 tests for even; n MOD d = 0 tests for divisibility; n MOD 10 gives the last digit."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Recap

- An **expression** (value, variable, operator, or procedure call that returns a value) is evaluated to a **single value**.
- Operators in the notation: `+`, `-`, `*`, `/`, `MOD`. Assume `a ≥ 0` and `b > 0` for `a MOD b`.
- **Order:** brackets, then `*`, `/`, `MOD` (same level, left to right), then `+`, `-` (same level, left to right).
- `a MOD b` is the **remainder** when `a` is divided by `b`: `17 MOD 5 = 2`.
- `17 / 5` is **3.4**, not 3.

## Key relationships

| Task | Expression | Example |
|---|---|---|
| Even test | `n MOD 2 = 0` | `10 MOD 2 = 0` is true |
| Divisible by `d` | `n MOD d = 0` | `21 MOD 7 = 0` is true |
| Last digit | `n MOD 10` | `4826 MOD 10 = 6` |
| Wrap on 24-hour clock | `(h + k) MOD 24` | `(21 + 8) MOD 24 = 5` |
| Whole hours from minutes | `(m - m MOD 60) / 60` | `(135 - 15) / 60 = 2` |
| Smaller than divisor | `a MOD b = a` when `a < b` | `3 MOD 7 = 3` |

## Assumptions

- `a MOD b` is only used with an integer `a ≥ 0` and an integer `b > 0`.
- `/` gives a real-number result (`7 / 2` is 3.5).
- Statements run top to bottom and variables hold their most recent values.

## Method for evaluating an expression

1. Replace each variable with its current value.
2. Scan for brackets and evaluate inside them first.
3. Evaluate every `*`, `/` and `MOD` from **left to right**.
4. Evaluate every `+` and `-` from **left to right**.
5. Check the result is sensible: a remainder must be smaller than the divisor.

## Mistakes to avoid

- Treating MOD as lower precedence than `*`.
- Giving the quotient instead of the remainder.
- Rounding `17 / 5` to 3.
- Doing `+` before `*`, or going right to left on equal precedence.
- Expecting `a MOD b` to reach `b`.

## Worked mini-example

```text
x ← 14
y ← x MOD 5 + x / 2 * 3
DISPLAY(y)
```

Output: `25`

`14 MOD 5 = 4`; `14 / 2 = 7`, `7 * 3 = 21`; `4 + 21 = 25`.

## Quick self-check

1. Evaluate `8 + 6 MOD 4 * 3`.
2. Which expression tests whether `n` is a multiple of 5?
3. A clock shows hour `h` on a 12-hour dial numbered 0 to 11. Write the hour after `k` more hours.

<details>
<summary>Answers</summary>

1. `6 MOD 4 = 2`, `2 * 3 = 6`, `8 + 6 = 14`.
2. `n MOD 5 = 0`.
3. `(h + k) MOD 12`.

</details>

## Where marks are won and lost

Expect short evaluation tasks: work out the value of an expression or the value left in a variable after a few assignments. Marks go to candidates who respect precedence (MOD with * and /) and the left-to-right rule. Another favourite is a "which expression" question: choose the expression that gives the last digit, tests divisibility, or wraps a value to a clock. Practise the patterns in the key-relationships table until you can write them without looking.


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-3-mathematical-expressions-study-guide/) for worked examples and explanations.
