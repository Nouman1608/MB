---
resourceId: "mb-ap-csa-2.8-revision-notes"
title: "for Loops: Revision Notes (Computer Science A 2.8)"
description: "One-page recap of for loops, the header's three parts and equivalent while loops: the rules, a key-relationships table, mistakes to avoid and a short self-check with answers."
course: "computer-science-a"
unit: 2
topics: ["2.8"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-2.8-study-guide"]
learningObjectives:
  - "Write a for loop whose header has the correct initialisation, Boolean expression and update"
  - "State the exact order in which the header and the body of a for loop execute"
skills: ["2", "3"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.8-study-guide", "mb-ap-csa-2.8-practice", "mb-ap-csa-2.8-checklist"]
next: "mb-ap-csa-2.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "A for loop header has three parts separated by semicolons: initialisation, Boolean expression, update."
  - "Order of execution: initialisation once; then test, body, update, test, body, update ... until the test is false."
  - "The update runs after the whole body and before the next test."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Recap

A **for loop** gathers the three parts of a counting loop into one header.

```
for (initialization; Boolean expression; update) {
    body
}
```

| Part | Runs | Example |
|---|---|---|
| Initialization | once, before the first test | `int i = 0` |
| Boolean expression | before every iteration | `i < 5` |
| Update | after the whole body, before the next test | `i++` |

Order: initialization once, then (test, body, update) repeated, then a final test that is false.

## Key relationships

| Idea | Rule |
|---|---|
| Iterations of `for (int i = 0; i < n; i++)` | exactly `n` (values 0 to n - 1) |
| Iterations of `for (int i = 1; i <= n; i++)` | exactly `n` (values 1 to n) |
| Step by `s` from `a` while `i <= b` | the number of values `a, a + s, ...` that do not exceed `b` |
| Zero iterations | test false on the first evaluation |
| Equivalent `while` | initialization before; test in brackets; update last in body |
| Scope | variable declared in the header is out of scope after the loop |

## Assumptions

- The loop control variable is an `int` and the update moves it toward making the test false.
- Nothing in the body changes the loop control variable unless the question says so.
- The body is in braces.

## Mistakes to avoid

- A semicolon after the header.
- Using the header variable after the loop.
- Writing `<=` when `<` is needed (or the reverse): an off-by-one error.
- Assuming the update runs before the first iteration.
- Counting down with `i++`, or counting up with `i--`.
- Forgetting to change the accumulator inside the loop.

## Worked mini-example

```java
int result = 0;
for (int k = 5; k > 0; k -= 2) {
    result = result * 10 + k;
}
```

| Iteration | `k` | `k > 0`? | `result` after the body |
|---|---|---|---|
| 1 | 5 | true | 0 * 10 + 5 = 5 |
| 2 | 3 | true | 5 * 10 + 3 = 53 |
| 3 | 1 | true | 53 * 10 + 1 = 531 |
| (test) | -1 | false | loop ends |

`result` is 531. The loop control variable `k` is out of scope afterwards, so the code after the loop cannot refer to it. As a while loop: `int k = 5; while (k > 0) { result = result * 10 + k; k -= 2; }`.

## Quick self-check

1. How many times does `for (int i = 3; i < 12; i += 3)` run? *Answer: 3 times (i = 3, 6, 9).*
2. What does `for (int i = 0; i < 4; i++)` print if the body is `System.out.print(i)`? *Answer: 0123.*
3. Why does `for (int i = 0; i < 3; i++);` followed by a block print the block's message only once? *Answer: the semicolon is an empty body; the block runs once after the loop.*
4. Write `for (int j = 1; j <= 5; j++)` as a while loop. *Answer: `int j = 1; while (j <= 5) { ... j++; }`.*

Full explanations and diagrams are in the [Topic 2.8 study guide](/advanced-course-resources/computer-science-a/2-8-for-loops-study-guide/).
