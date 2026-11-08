---
resourceId: "mb-ap-csa-2.5-revision-notes"
title: "Compound Boolean Expressions: Revision Notes (Computer Science A 2.5)"
description: "One-page recap of compound Boolean expressions with !, && and ||: the rules, a key-relationships table, mistakes to avoid and a short self-check with answers."
course: "computer-science-a"
unit: 2
topics: ["2.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-2.5-study-guide"]
learningObjectives:
  - "Evaluate expressions that use the logical operators !, && and || with the correct precedence"
  - "Write a compound Boolean expression for a range, an exclusion or a combination of conditions"
skills: ["2", "3"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.5-study-guide", "mb-ap-csa-2.5-practice", "mb-ap-csa-2.5-checklist"]
next: "mb-ap-csa-2.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "!a is true when a is false; a && b is true only when both are true; a || b is true when at least one is true."
  - "Precedence from highest to lowest is ! then && then ||. Brackets override it and make intent clear."
  - "For a range write two comparisons joined with &&; for 'outside a range' join two comparisons with ||."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Recap

A **compound Boolean expression** joins Boolean expressions with the logical operators `!`, `&&` and `||`. It always evaluates to `true` or `false`.

| Expression | True when |
|---|---|
| `!a` | `a` is false |
| `a && b` | both `a` and `b` are true |
| `a \|\| b` | at least one of `a`, `b` is true (including both) |

## Key relationships

| Idea | Rule |
|---|---|
| Precedence | Relational and arithmetic first, then `!`, then `&&`, then `\|\|` |
| In a range | `x >= lo && x <= hi` |
| Outside a range | `x < lo \|\| x > hi` |
| Either of two values | `x == 1 \|\| x == 2` |
| Short-circuit `&&` | If the left side is false, the right side is skipped |
| Short-circuit `\|\|` | If the left side is true, the right side is skipped |
| Guarding | `d != 0 && n / d > 2` is safe; the reverse order is not |

## Truth table summary

| `a` | `b` | `!a` | `a && b` | `a \|\| b` |
|---|---|---|---|---|
| true | true | false | true | true |
| true | false | false | false | true |
| false | true | true | false | true |
| false | false | true | false | false |

## Assumptions

- Operands of `!`, `&&` and `||` are Boolean expressions.
- Short-circuit evaluation applies to `&&` and `||`.
- Brackets are used wherever grouping might be misread.

## Mistakes to avoid

- Writing `x == 1 || 2` or `x > 5 || < 3`.
- Using `||` for a range, which gives an always-true condition.
- Using `&&` for "outside the range", which gives an always-false condition.
- Forgetting that `&&` is evaluated before `||`.
- Placing the risky test (division, method call) before its guard.
- Writing `!x > 5` instead of `!(x > 5)`.

## Worked mini-example

For `m = 4` and `n = 9`, evaluate `m > 5 || n > 5 && m + n < 14`. Precedence: `&&` before `||`. `n > 5` is true; `m + n` is 13, so `13 < 14` is true; `true && true` is true. `m > 5` is false, so the whole expression is `false || true`, which is **true**. With brackets `(m > 5 || n > 5) && m + n < 14` the answer is the same here (`true && true`), but for `m = 4, n = 12` the first form gives `false || (true && 16 < 14)`, which is false, and the second gives `true && false`, which is also false. For `m = 8, n = 12` the first is true (the left side is true and short-circuits) while the second is `true && (20 < 14)`, which is false. Grouping changes results.

## Quick self-check

1. Evaluate `true || false && false`. *Answer: `&&` first gives false; then `true || false` is true.*
2. Write "n is outside 10 to 20 inclusive". *Answer: `n < 10 || n > 20`.*
3. What does `false && (5 / 0 > 1)` evaluate to without error? *Answer: false; the right side is never evaluated.*
4. Why is `x > 0 || x < 100` a poor range test? *Answer: it is true for every x. Use `&&`.*

Full explanations and diagrams are in the [Topic 2.5 study guide](/advanced-course-resources/computer-science-a/2-5-compound-boolean-expressions-study-guide/).
