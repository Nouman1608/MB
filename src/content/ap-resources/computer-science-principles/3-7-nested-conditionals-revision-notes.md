---
resourceId: "mb-ap-csp-3.7-revision-notes"
title: "Nested Conditionals: Revision Notes (Computer Science Principles 3.7)"
description: "One-page recap of nested conditionals: structure, ELSE pairing, chains of ranges, order of tests, flattening with AND, and testing every path."
course: "computer-science-principles"
unit: 3
topics: ["3.7"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.7-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["2", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.7-study-guide", "mb-ap-csp-3.7-practice", "mb-ap-csp-3.7-checklist"]
next: "mb-ap-csp-3.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A nested conditional puts one conditional inside the block of another; the inner one runs only when the outer condition sends control there."
  - "An ELSE belongs to the IF whose block closes just before it; read the braces."
  - "In a chain of ranges the order of tests decides the result."
  - "Two conditions can create up to three paths: test each one."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Recap

- A **nested conditional** is a conditional inside the block of another.
- The **outer** condition is evaluated first. The **inner** one is evaluated only when control enters its block.
- An **ELSE** pairs with the IF whose block closes just before it (follow the braces).
- In a **chain of ranges** each test is inside the previous ELSE, so conditions can be simple, but **order matters**.
- `IF(a) { IF(b) { X } }` with no ELSE blocks is equivalent to `IF(a AND b) { X }`.

## Key relationships

| Structure | Paths | Test values needed |
|---|---|---|
| IF(a) { IF(b) {X} } | X runs, or nothing | a true and b true; a true and b false; a false |
| IF(a) { IF(b) {X} ELSE {Y} } ELSE {Z} | 3 outcomes | One test for each of X, Y and Z |
| Chain: IF(≥ 80) ELSE { IF(≥ 60) ELSE } | 3 outcomes | 90, 70, 50 plus boundaries 80, 60 and 59 |
| Leap year | 4 paths | 2023, 2024, 1900, 2000 |
| Flattened leap year | `(year MOD 4 = 0 AND year MOD 100 ≠ 0) OR year MOD 400 = 0` | Agrees with the nested version |

## Assumptions

- Conditions are evaluated top to bottom, outside in.
- Only blocks selected by the conditions run.
- Braces (not layout) show structure.

## Method for tracing

1. Substitute the input values.
2. Evaluate the outer condition and record true or false.
3. Enter the correct block. If it holds another IF, evaluate that condition next.
4. Continue until a block with no further IF runs. Write the result.
5. Repeat for each input you were given.

## Mistakes to avoid

- Evaluating the inner IF when the outer test failed.
- Pairing an ELSE with the wrong IF.
- Putting overlapping range tests in the wrong order.
- Testing only one or two of the three outcomes.
- Flattening nesting that has distinct ELSE results.

## Worked mini-example

```text
x ← 8
y ← 3
IF(x > 5)
{
  IF(y > 5)
  {
    DISPLAY("P")
  }
  ELSE
  {
    DISPLAY("Q")
  }
}
ELSE
{
  DISPLAY("R")
}
```

Output: `Q`

`x > 5` is true, so the first block is entered. Then `y > 5` is false, so the inner ELSE runs and `Q` is displayed. `R` is displayed only when `x` is not greater than 5.

## Quick self-check

1. In the example above, what is displayed if `x` is 2 and `y` is 9?
2. Why does `IF(score ≥ 60)` before `IF(score ≥ 80)` give the wrong grade to 90?
3. Rewrite `IF(a) { IF(b) { DISPLAY("ok") } }` as one IF.

<details>
<summary>Answers</summary>

1. `R`: the outer condition is false, so the inner IF is never evaluated.
2. 90 satisfies `≥ 60` first and gets the lower grade; the `≥ 80` test is never reached.
3. `IF(a AND b) { DISPLAY("ok") }`.

</details>

## Where marks are won and lost

Expect tracing questions with two inputs, where the code asks a second question depending on the first. Another favourite is a chain of ranges with the tests in a different order, asking what a given input receives. Questions about equivalent code ask whether a nested conditional and a Boolean expression always agree. Choose test inputs for each path and check each boundary value. Draw the braces if the layout confuses you.


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-7-nested-conditionals-study-guide/) for worked examples and explanations.
