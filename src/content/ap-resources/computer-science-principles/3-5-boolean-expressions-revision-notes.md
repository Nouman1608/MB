---
resourceId: "mb-ap-csp-3.5-revision-notes"
title: "Boolean Expressions: Revision Notes (Computer Science Principles 3.5)"
description: "One-page recap of Boolean values, relational and logical operators, truth tables and the equivalences students are tested on, with common boundary mistakes."
course: "computer-science-principles"
unit: 3
topics: ["3.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.5-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["2", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.5-study-guide", "mb-ap-csp-3.5-practice", "mb-ap-csp-3.5-checklist"]
next: "mb-ap-csp-3.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A Boolean value is true or false; relational operators compare values and produce Booleans."
  - "NOT flips a value, AND needs both true, OR needs at least one true (inclusive)."
  - "A range such as 13 to 19 inclusive is age ≥ 13 AND age ≤ 19; OR would accept every age."
  - "NOT(p AND q) is equivalent to (NOT p) OR (NOT q); NOT(p OR q) is equivalent to (NOT p) AND (NOT q)."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Recap

- **Boolean value:** `true` or `false`.
- **Relational operators** (`=`, `≠`, `>`, `<`, `≥`, `≤`) compare and produce a Boolean.
- **Logical operators:** `NOT p` flips; `p AND q` needs both; `p OR q` needs at least one (inclusive).
- Use **brackets**; evaluate small comparisons first, then combine.
- `=` tests equality; `←` assigns.

## Key relationships

| Idea | Expression | Notes |
|---|---|---|
| Range, ends included | `x ≥ lo AND x ≤ hi` | OR would accept every value |
| Outside a range | `x < lo OR x > hi` | Equivalent to `NOT(x ≥ lo AND x ≤ hi)` |
| De Morgan 1 | `NOT(p AND q)` = `(NOT p) OR (NOT q)` | Negating swaps AND and OR |
| De Morgan 2 | `NOT(p OR q)` = `(NOT p) AND (NOT q)` |  |
| Opposite of ≥ | `NOT(a ≥ b)` = `a < b` | Boundary flips: ≥ becomes < |
| Divisible by 3 and 5 | `n MOD 3 = 0 AND n MOD 5 = 0` | True for 15, 30, ... |

## Assumptions

- Each operand of AND/OR/NOT is a Boolean expression or a single Boolean value.
- Comparisons are evaluated before the logical operators that use them.
- Brackets in a question show the intended grouping.

## Method

1. Substitute the variable values.
2. Evaluate each comparison and write `true` or `false` beside it.
3. Evaluate `NOT`, then combine with `AND`, then `OR` (brackets decide).
4. For "which expression" questions, test each option at the boundary values.

## Mistakes to avoid

- Using OR where AND is needed for a range.
- Using `>` where `≥` is needed (or the reverse).
- Writing `x = 5 OR 6`.
- Forgetting that `NOT` of an AND becomes an OR of NOTs.
- Stating that OR is false when both sides are true.

## Worked mini-example

```text
p ← true
q ← false
DISPLAY(p AND NOT q)
DISPLAY(NOT(p OR q))
DISPLAY((NOT p) OR (NOT q))
```

Output: `true false true`

`NOT q` is true, so `p AND true` is true. `p OR q` is true, so `NOT(true)` is false. `(NOT p)` is false and `(NOT q)` is true, so false OR true is true. The last line equals `NOT(p AND q)`, as De Morgan says.

## Quick self-check

1. What is `5 ≥ 5`?
2. Write "x is not between 3 and 8 inclusive" using OR.
3. Is `NOT(a OR b)` equal to `NOT a OR NOT b`?

<details>
<summary>Answers</summary>

1. true.
2. `x < 3 OR x > 8`.
3. No. It equals `NOT a AND NOT b`.

</details>

## Where marks are won and lost

Evaluation questions give values for variables and ask whether a compound expression is true or false; write each comparison's value before combining. Requirement questions ask which of four expressions matches a sentence, and the traps are OR instead of AND, and > instead of ≥ at the boundaries. Equivalence questions give a condition and ask for an equivalent one, so know both De Morgan forms. Test boundary values, not just typical ones.


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-5-boolean-expressions-study-guide/) for worked examples and explanations.
