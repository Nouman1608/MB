---
resourceId: "mb-ap-csa-2.12-revision-notes"
title: "Informal Run-Time Analysis: Revision Notes (Computer Science A 2.12)"
description: "One-page recap of statement execution counts and informal run-time comparison: the rules, a key-relationships table, mistakes to avoid and a short self-check with answers."
course: "computer-science-a"
unit: 2
topics: ["2.12"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-2.12-study-guide"]
learningObjectives:
  - "Define a statement execution count and calculate it for single loops, nested loops and loops with early exits"
  - "Count the initialization, tests and updates of a for loop, and the body executions"
skills: ["4", "3"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.12-study-guide", "mb-ap-csa-2.12-practice", "mb-ap-csa-2.12-checklist"]
next: "mb-ap-csa-2.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "A statement execution count is the number of times a statement is executed. It is found by tracing and analysing the loops, usually without running the program."
  - "For for (int i = 0; i < n; i++): the initialization runs once, the test n + 1 times, and the body and update n times each."
  - "A loop that runs n times, a nested pair that runs n x n times, and a loop that halves its variable each time (about log2 n times) grow at very different rates."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Recap

A **statement execution count** is the number of times a statement runs. It is found by tracing and analysing the loops, and it is used to compare the work done by different code.

For `for (int i = 0; i < n; i++) { body }`:

| Part | Count |
|---|---|
| Initialization | 1 |
| Boolean expression | n + 1 |
| Body | n |
| Update | n |

## Key relationships

| Code shape | Innermost statement runs |
|---|---|
| Single loop, i from 0 to n - 1 | n |
| Step 2 (`i += 2`) | about n / 2 |
| Doubling (`i *= 2`) or halving (`n = n / 2`) | about log2 n (for n = 1000, 9 halvings) |
| Nested, independent bounds | n x m |
| Nested, inner `j < i` | n(n - 1) / 2 |
| Nested, inner `j <= i` for i from 1 to n | n(n + 1) / 2 |
| Early exit (a `return` inside the loop) | between a best case and a worst case |

When n doubles: a single loop does 2 times the work, an n x n nested loop about 4 times, a halving loop one more pass.

## Assumptions

- Only the named statement is counted unless the question says otherwise.
- Each iteration of the body counts as one execution of each statement in it.
- Counts assume the loop reaches its natural end unless an exit is described.

## Mistakes to avoid

- Counting tests as equal to body runs (it is one more).
- Multiplying the bounds when the inner bound depends on the outer variable.
- Forgetting an early return that reduces the count.
- Reading `i *= 2` as if it added 2.
- Using the formula for a triangle (n(n + 1) / 2) when the inner loop starts at `i + 1`.
- Comparing two algorithms using a single input, instead of seeing how counts grow.

## Worked mini-example

```java
int count = 0;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < 4; j++) {
        count++;
    }
}
```

The inner loop always runs 4 times, whatever `i` is, so `count++` runs 4n times. For n = 10 that is 40; for n = 20 it is 80, so doubling n doubles the work. If the inner bound were `j < n`, the count would be n x n: 100 for n = 10 and 400 for n = 20, so doubling n would quadruple the work. The only difference between the two segments is the inner bound: whether it is a fixed number or uses `n`.

## Quick self-check

1. How many times does the body of `for (int i = 5; i <= 50; i += 5)` run? *Answer: 10 (5, 10, ..., 50).*
2. How many times is the condition of `for (int i = 0; i < 8; i++)` evaluated? *Answer: 9.*
3. An algorithm finds the first multiple of 7 in a sequence and stops. When is its work smallest? *Answer: when the first value is already a multiple of 7.*
4. If n doubles, by what factor does an n x n loop's work change? *Answer: 4.*

Full explanations and diagrams are in the [Topic 2.12 study guide](/advanced-course-resources/computer-science-a/2-12-informal-run-time-analysis-study-guide/).
