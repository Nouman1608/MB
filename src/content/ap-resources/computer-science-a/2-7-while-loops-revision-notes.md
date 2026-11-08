---
resourceId: "mb-ap-csa-2.7-revision-notes"
title: "while Loops: Revision Notes (Computer Science A 2.7)"
description: "One-page recap of while loops, their condition, and how to trace them: the rules, a key-relationships table, mistakes to avoid and a short self-check with answers."
course: "computer-science-a"
unit: 2
topics: ["2.7"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-2.7-study-guide"]
learningObjectives:
  - "Write a while loop with correct initialisation, condition and update"
  - "Trace a while loop with a table and say how many times its body runs, including zero"
skills: ["2", "3", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.7-study-guide", "mb-ap-csa-2.7-practice", "mb-ap-csa-2.7-checklist"]
next: "mb-ap-csa-2.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "A while loop repeats its body zero or more times, as long as its Boolean expression is true."
  - "The condition is tested before every iteration, including the first. If it is false at the start, the body never runs."
  - "Something in the body must move the loop toward making the condition false; otherwise the loop is infinite."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Recap

A **while loop** repeats its body zero or more times while its Boolean expression is true.

```
initialise the loop variable
while (condition) {
    body
    update the loop variable
}
```

The condition is tested before every iteration, including the first, so if it is false at the start the body never runs. When the loop ends, the condition has just been tested and found false.

## Key relationships

| Idea | Rule |
|---|---|
| Tests versus iterations | The condition is tested one more time than the body runs |
| Zero iterations | Condition false before the first test |
| Infinite loop | Condition always true: no update, or update in the wrong direction |
| Off-by-one | `<` versus `<=`, or the wrong start value: one pass too many or too few |
| Variable after the loop | Holds the first value that failed the test |
| Accumulator | Set before the loop, changed inside, used after |

## Assumptions

- The Boolean expression uses variables that have been assigned before the loop.
- The loop variable is updated inside the body.
- The initial values must make the loop do what the question intends (for example, starting above the limit gives zero iterations).

## Mistakes to avoid

- Forgetting to update the variable the condition depends on.
- Updating it in the wrong direction.
- Using `<` when the last value must be included, or `<=` when it must not.
- Reading the final value of the loop variable as the last value processed.
- Printing inside the loop when the question asks for a single result after it.
- Starting the accumulator at the wrong value (0 for a sum, 1 for a product).

## Worked mini-example

```java
int x = 3;
int product = 1;
while (x > 0) {
    product = product * x;
    x--;
}
```

| Test | `x` | `x > 0`? | `product` after the body | `x` after the body |
|---|---|---|---|---|
| 1 | 3 | true | 3 | 2 |
| 2 | 2 | true | 6 | 1 |
| 3 | 1 | true | 6 | 0 |
| 4 | 0 | false | loop ends | |

The loop computes 3 x 2 x 1 = 6, so `product` is 6 and `x` is 0 afterwards. The condition was tested four times and the body ran three times.

## Quick self-check

1. How many times does the body of `int i = 0; while (i < 4) { i++; }` run? *Answer: 4.*
2. What is `i` afterwards? *Answer: 4.*
3. `int j = 9; while (j < 3) { j--; }` runs how many times? *Answer: zero.*
4. Why does `int m = 1; while (m > 0) { m = m + 1; }` never end? *Answer: `m` grows, so `m > 0` stays true.*

Full explanations and diagrams are in the [Topic 2.7 study guide](/advanced-course-resources/computer-science-a/2-7-while-loops-study-guide/).
