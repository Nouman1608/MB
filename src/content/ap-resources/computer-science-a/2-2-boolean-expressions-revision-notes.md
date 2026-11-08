---
resourceId: "mb-ap-csa-2.2-revision-notes"
title: "Boolean Expressions: Revision Notes (Computer Science A 2.2)"
description: "One-page recap of Boolean expressions built with the relational operators: the rules, a key-relationships table, mistakes to avoid and a short self-check with answers."
course: "computer-science-a"
unit: 2
topics: ["2.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-2.2-study-guide"]
learningObjectives:
  - "Write Boolean expressions with ==, !=, <, >, <= and >= and say what value each evaluates to"
  - "Evaluate an expression that mixes arithmetic and relational operators using precedence"
skills: ["2", "3"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.2-study-guide", "mb-ap-csa-2.2-practice", "mb-ap-csa-2.2-checklist"]
next: "mb-ap-csa-2.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "A relational operator compares two values and produces a boolean: true or false."
  - "== and != test whether values are the same or different; <, >, <= and >= compare the size of numeric values."
  - "== is a comparison; = is an assignment. Writing = where == is meant is a compile-time error for int values."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Recap

A **Boolean expression** evaluates to `true` or `false`. The simplest ones use a **relational operator** to compare two values.

| Operator | Meaning | Works on |
|---|---|---|
| `==` | equal to | primitives (values) and references (references) |
| `!=` | not equal to | primitives and references |
| `<` `>` | less than, greater than | numeric values |
| `<=` `>=` | less than or equal to, greater than or equal to | numeric values |

The expression `5 > 3` is a complete Boolean expression whose value is `true`. Its type is `boolean`.

## Key relationships

| Idea | Rule |
|---|---|
| Result type | A relational expression is always `boolean` |
| Precedence | Arithmetic first (`* / %` then `+ -`), then the relational operator |
| Words to operators | at least `>=`; at most `<=`; more than `>`; fewer than `<`; exactly `==`; different `!=` |
| Multiple of k | `n % k == 0` |
| Storing the result | `boolean isEven = n % 2 == 0;` |
| Close enough (doubles) | `Math.abs(x - y) < tolerance` |

## Assumptions

- `<`, `>`, `<=`, `>=` are used only with numeric values.
- A condition must be of type `boolean`: `x = 5` is not a condition.
- int / int is integer division; if either operand is a double the quotient is a double.

## Mistakes to avoid

- Writing `=` where `==` is meant.
- Chaining comparisons such as `3 < x < 9`.
- Using `>` when the question says "at least", or `>=` when it says "more than".
- Forgetting that `7 / 2` is 3 when both are `int`.
- Testing computed doubles with `==`.
- Evaluating the relational operator before the arithmetic.

## Worked mini-example

Let `m = 14` and `k = 4`. Evaluate each expression on its own.

1. `m / k >= 3`: `m / k` is int division, 14 / 4 = 3, and 3 >= 3 is **true**.
2. `m % k == 2`: 14 % 4 = 2, and 2 == 2 is **true**.
3. `m / (double) k > 3.5`: 14 / 4.0 = 3.5, and 3.5 > 3.5 is **false**.
4. `m - k * 2 != 6`: 14 - 8 = 6, and 6 != 6 is **false**.

Method: replace each variable by its value, finish the arithmetic on both sides (watching for int division), then apply the relational operator last. If the question uses a boundary word such as "at least", test the boundary value itself.

## Quick self-check

1. Evaluate `8 % 3 == 2`. *Answer: 8 % 3 is 2, so 2 == 2 is true.*
2. Evaluate `9 / 2 > 4`. *Answer: 9 / 2 is the int 4, so 4 > 4 is false.*
3. Write "n is at most 100" as a Boolean expression. *Answer: `n <= 100`.*
4. Why does `1 < y < 5` fail to compile? *Answer: `1 < y` is a boolean, and a boolean cannot be compared to 5 with `<`.*
5. Which value does `3 + 4 * 2 >= 11` give? *Answer: 3 + 8 = 11, and 11 >= 11 is true.*

Full explanations and diagrams are in the [Topic 2.2 study guide](/advanced-course-resources/computer-science-a/2-2-boolean-expressions-study-guide/).
