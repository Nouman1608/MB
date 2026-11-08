---
resourceId: "mb-ap-csp-3.6-revision-notes"
title: "Conditionals: Revision Notes (Computer Science Principles 3.6)"
description: "One-page recap of selection: IF versus IF/ELSE, flow of control, testing each branch and boundary values, with the classic two-IF trap and quick checks."
course: "computer-science-principles"
unit: 3
topics: ["3.6"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.6-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["2", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.6-study-guide", "mb-ap-csp-3.6-practice", "mb-ap-csp-3.6-checklist"]
next: "mb-ap-csp-3.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "Selection chooses which statements run, based on a Boolean condition."
  - "IF runs its block only when the condition is true; IF/ELSE runs exactly one of two blocks."
  - "Two separate IF statements are independent; both, one or neither block may run."
  - "Test every branch and the boundary values."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Recap

- **Selection** decides which statements run based on a Boolean condition.
- `IF(condition) { ... }` runs the block **only if** the condition is true.
- `IF(condition) { ... } ELSE { ... }` runs **exactly one** block.
- Flow of control normally goes top to bottom; a conditional skips blocks.
- Every algorithm can be built with **sequencing, selection and iteration**.

## Key relationships

| Pattern | What runs | Example |
|---|---|---|
| IF only | Block if true; nothing if false | Apply a discount only on big orders |
| IF/ELSE | Exactly one of two blocks | Child price or adult price |
| Two separate IFs | Zero, one or both blocks | Two independent checks |
| Boolean variable as condition | `IF(isOpen)` | No need to write `isOpen = true` |
| Default then override | Set value, IF changes it | `discount ← 0` then IF raises it |

## Assumptions

- The condition is a Boolean expression evaluated when the IF is reached.
- Statements after the conditional run whichever block was chosen.
- Blocks are marked by braces in the Text notation.

## Method for tracing

1. Write the values of all variables.
2. Evaluate the condition and write `true` or `false`.
3. Run only the matching block; cross out the other.
4. Continue from the first statement after the conditional.

## Mistakes to avoid

- Running both the IF block and the ELSE block.
- Treating two IFs as IF/ELSE.
- Using `>` instead of `≥` at the boundary.
- Testing only one branch.
- Forgetting to give a variable a default value before an IF without ELSE.

## Worked mini-example

```text
n ← 14
IF(n MOD 2 = 0)
{
  DISPLAY("even")
}
ELSE
{
  DISPLAY("odd")
}
```

Output: `even`

`14 MOD 2` is 0, so the condition is true and the first block runs. With `n` equal to 15 the remainder is 1, the condition is false and the ELSE block runs.

## Quick self-check

1. In an IF/ELSE, how many blocks run?
2. After `x ← 7`, `IF(x > 5) {DISPLAY("a")}`, `IF(x > 6) {DISPLAY("b")}`, what is displayed?
3. Which test value checks the boundary of `score ≥ 500`?

<details>
<summary>Answers</summary>

1. Exactly one.
2. `a b`: both conditions are true and the IFs are independent.
3. 500 itself (and 499 to confirm it fails).

</details>

## Where marks are won and lost

Tracing questions give values and ask what a segment displays or what variable holds at the end. The classic trap is independent IF statements versus IF/ELSE. Writing questions ask which condition matches a description, or which segment is correct, so test boundaries. On the exam you may also be asked to say which test values would reach every block. In the Create task you must include selection in your own procedure and explain what it does. Before you commit to an answer, ask two questions: what happens exactly at the boundary value, and should exactly one block run or possibly several?


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-6-conditionals-study-guide/) for worked examples and explanations.
