---
resourceId: "mb-ap-csa-2.11-revision-notes"
title: "Nested Iteration: Revision Notes (Computer Science A 2.11)"
description: "One-page recap of nested loops, their order of execution and how often they run: the rules, a key-relationships table, mistakes to avoid and a short self-check with answers."
course: "computer-science-a"
unit: 2
topics: ["2.11"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-2.11-study-guide"]
learningObjectives:
  - "Explain that an inner loop completes all its iterations before the outer loop moves on"
  - "Trace nested loops and predict the output of patterns, tables and pair-counting code"
skills: ["2", "3", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.11-study-guide", "mb-ap-csa-2.11-practice", "mb-ap-csa-2.11-checklist"]
next: "mb-ap-csa-2.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "Nested iteration is a loop inside the body of another loop. The inner loop runs through all its iterations each time the outer loop runs once."
  - "If the inner bounds do not depend on the outer variable, the body runs (outer iterations) x (inner iterations) times."
  - "If the inner bound depends on the outer variable, add the inner counts row by row: 1 + 2 + 3 + 4 = 10 for a triangle of four rows."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Recap

**Nested iteration** is a loop inside the body of another loop. The inner loop completes all its iterations each time the outer loop runs once.

```
for (outer) {
    for (inner) {
        innermost statement
    }
    statement that runs once per outer pass (such as println)
}
```

## Key relationships

| Idea | Rule |
|---|---|
| Order | Outer pass 1: inner runs fully; outer pass 2: inner runs fully again; and so on |
| Independent bounds | innermost body runs (outer count) x (inner count) times |
| Inner bound uses the outer variable | add the inner count for each outer value |
| Triangle `j <= i` for `i` = 1 to n | 1 + 2 + ... + n = n(n + 1) / 2 |
| Strict upper triangle `j = i + 1` | (n - 1) + ... + 1 + 0 = n(n - 1) / 2 |
| Row ending | `System.out.println()` after the inner loop, in the outer body |
| Inner while variable | set it (declare it) inside the outer loop before the inner loop |

## Assumptions

- Bounds are integers and the loops terminate.
- The inner loop is entirely inside the outer loop's body.
- `print` keeps the cursor on the line; `println` ends the line.

## Mistakes to avoid

- Putting `println` inside the inner loop (a column of single items) or after the outer loop (one long line).
- Multiplying the bounds when the inner bound depends on the outer variable.
- Forgetting to reset an inner `while` loop variable.
- Starting the inner loop at the wrong place (`j = i` versus `j = i + 1`) and changing the count.
- Counting the inner statement as if it ran once per outer iteration.
- Mixing up which loop variable controls rows and which controls columns.

## Worked mini-example

```java
int total = 0;
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= i; j++) {
        total = total + j;
    }
}
```

| `i` | inner values of `j` | added this pass | `total` after |
|---|---|---|---|
| 1 | 1 | 1 | 1 |
| 2 | 1, 2 | 3 | 4 |
| 3 | 1, 2, 3 | 6 | 10 |

`total` is 10. The innermost statement ran 1 + 2 + 3 = 6 times. The inner loop restarted from `j = 1` on every outer pass because `j` is declared in the inner for header.

## Quick self-check

1. How many stars does `for (i < 5) { for (j < 6) { print("*"); } }` print? *Answer: 30.*
2. For `for (int i = 0; i < 4; i++) { for (int j = 0; j < i; j++) { ... } }`, how many times does the inner body run? *Answer: 0 + 1 + 2 + 3 = 6.*
3. Where must `System.out.println();` go to end each row of a rectangle? *Answer: after the inner loop, inside the outer loop.*
4. Why might an inner `while` loop run only once? *Answer: its variable is not reset for later outer passes.*

Full explanations and diagrams are in the [Topic 2.11 study guide](/advanced-course-resources/computer-science-a/2-11-nested-iteration-study-guide/).
