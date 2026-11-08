---
resourceId: "mb-ap-csp-3.8-revision-notes"
title: "Iteration: Revision Notes (Computer Science Principles 3.8)"
description: "One-page recap of iteration: REPEAT n TIMES versus REPEAT UNTIL, zero passes, infinite loops, counters and accumulators, and a method for tracing loops."
course: "computer-science-principles"
unit: 3
topics: ["3.8"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.8-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["2", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.8-study-guide", "mb-ap-csp-3.8-practice", "mb-ap-csp-3.8-checklist"]
next: "mb-ap-csp-3.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "Iteration repeats a block zero or more times; every algorithm can be built from sequencing, selection and iteration."
  - "REPEAT n TIMES runs the block exactly n times."
  - "REPEAT UNTIL(condition) checks before each pass and stops when the condition becomes true; it may run zero times."
  - "A loop whose condition can never become true is an infinite loop."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## Recap

- **Iteration** repeats a block **zero or more times** until a stopping condition is met.
- `REPEAT n TIMES { ... }` runs the block exactly `n` times.
- `REPEAT UNTIL(condition) { ... }` checks the condition **before** each pass, runs the block while it is **false**, and stops when it becomes **true**.
- If the condition is true at the start, the block runs **zero times**.
- A condition that can never become true makes an **infinite loop**.
- A **counter** adds a fixed amount each pass; an **accumulator** builds a running total.

## Key relationships

| Pattern | Code | Result |
|---|---|---|
| Fixed repeat | `REPEAT 5 TIMES { x ← x + 2 }` | x increases by 10 |
| Counter | `i ← i + 1` | i counts the passes |
| Accumulator | `total ← total + n` | total builds a sum |
| Loop until goal | `REPEAT UNTIL(balance ≥ 150)` | Stops once the goal is reached |
| Zero passes | Condition already true | Block never runs |
| Infinite loop | `REPEAT UNTIL(n = 0)` with n stepping by 3 from 10 | Never ends |

## Assumptions

- The condition is evaluated before every pass.
- Variables change only through assignments in the block.
- `DISPLAY` outputs are listed in the order they happen.

## Method for tracing a loop

1. Draw columns for every variable and for the condition.
2. Write the starting values in the first row.
3. Check the condition (REPEAT UNTIL) or count the pass (REPEAT n TIMES).
4. Run the block statements one by one, updating the row.
5. Repeat until the stop; note how many times the block ran.

## Mistakes to avoid

- Reading REPEAT UNTIL as "while true".
- Forgetting that the block can run zero times.
- Using `=` as a stopping test where the variable can jump past the value.
- Putting the counter update inside an IF that may not be true.
- Off-by-one slips: `n ≥ 150` versus `n > 150`.

## Worked mini-example

```text
n ← 1
count ← 0
REPEAT UNTIL(n ≥ 100)
{
  n ← n * 2
  count ← count + 1
}
DISPLAY(count)
DISPLAY(n)
```

Output: `7 128`

`n` goes 2, 4, 8, 16, 32, 64, 128. After the 7th pass `n` is 128, which is at least 100, so the loop stops. `count` is 7.

## Quick self-check

1. How many times does `REPEAT UNTIL(x > 5)` run its block when `x` starts at 8?
2. What does `x` hold after `x ← 1` and `REPEAT 3 TIMES { x ← x * 3 }`?
3. Why is `REPEAT UNTIL(n = 0)` risky when `n` decreases by 3 from 10?

<details>
<summary>Answers</summary>

1. Zero times: the condition is already true.
2. 27 (1 × 3 × 3 × 3).
3. `n` steps over 0 (10, 7, 4, 1, −2, ...), so the condition never becomes true and the loop never ends.

</details>

## Where marks are won and lost

Typical items give a loop with a counter and ask for the final value or the number of passes. Trace it row by row and watch the exact stopping condition (`≥` versus `>`). Another item asks which segment never ends, or which condition replaces a broken one. Robot questions ask for the final square or which loop reaches a goal. In the Create task your program must contain iteration, and you must explain what the loop does and why it ends.


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-8-iteration-study-guide/) for worked examples and explanations.
