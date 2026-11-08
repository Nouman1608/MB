---
resourceId: "mb-ap-csa-2.4-revision-notes"
title: "Nested if Statements: Revision Notes (Computer Science A 2.4)"
description: "One-page recap of nested if statements and multiway if-else-if chains: the rules, a key-relationships table, mistakes to avoid and a short self-check with answers."
course: "computer-science-a"
unit: 2
topics: ["2.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-2.4-study-guide"]
learningObjectives:
  - "Write nested if statements and explain when the inner condition is evaluated"
  - "Write a multiway if-else-if chain with a trailing else and explain why at most one body runs"
skills: ["2", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.4-study-guide", "mb-ap-csa-2.4-practice", "mb-ap-csa-2.4-checklist"]
next: "mb-ap-csa-2.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "A nested if is an if, if-else or if-else-if inside another one. The inner condition is evaluated only if the outer condition is true (or, for an else body, only if it is false)."
  - "In an if-else-if chain, no more than one body runs: the first true condition wins and all later conditions are skipped."
  - "If no condition is true and the chain ends with an else, the else body runs. Without a trailing else, nothing runs."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Recap

A **nested if** is an `if`, `if-else` or `if-else-if` inside another. A **multiway selection** (if-else-if) chooses one of several options.

| Structure | How it runs |
|---|---|
| Nested if | Inner condition evaluated only if the outer condition lets execution reach it |
| if-else-if chain | Conditions tested top to bottom; the first true one runs; the rest are skipped |
| Trailing else | Runs only if every earlier condition was false; optional |
| Separate ifs | Every condition tested; several bodies can run |

## Key relationships

| Idea | Rule |
|---|---|
| Bodies that can run in a chain | At most one |
| Reaching a later condition | All earlier conditions were false |
| Order of overlapping conditions | Most demanding (most specific) first |
| Dangling else | Pairs with the nearest unmatched if; braces fix it |
| Boundary values | Test the exact boundary of each band (`<=` versus `<`) |
| Chain versus nest | Same quantity in bands: chain. Dependent second question: nest |

## Assumptions

- Conditions in a chain are Boolean expressions evaluated in written order.
- Every path assigns a value to any variable used after the structure, or the code will not compile.
- Braces are used around every body unless stated.

## Mistakes to avoid

- Writing the bands in the wrong order, so a low band catches high values.
- Replacing `else if` by `if`, so later bodies overwrite earlier ones.
- Reading an `else` as belonging to the outer `if` because of indentation.
- Forgetting that a nested condition may never be evaluated.
- Using `<` when the boundary belongs in the band (or the reverse).
- Leaving off the final `else` and leaving a variable unassigned.

## Worked mini-example

```java
int t = 18;
String s;
if (t < 0) {
    s = "freezing";
} else if (t < 15) {
    s = "cold";
} else if (t < 25) {
    s = "mild";
} else {
    s = "hot";
}
```

Trace for `t = 18`: `18 < 0` false; `18 < 15` false; `18 < 25` true, so `s = "mild"`. The `hot` branch is never reached. For `t = 15` the answer is also "mild", because `15 < 15` is false. For `t = -4` the first test is true, so the later tests are never evaluated.

## Quick self-check

1. In an if-else-if chain of four conditions, how many bodies can run? *Answer: at most one.*
2. If `x = 10`, what does `if (x > 5) { r = 1; } else if (x > 8) { r = 2; }` set `r` to? *Answer: 1; the second condition is never tested.*
3. When is the inner condition of a nested if evaluated? *Answer: only when the outer condition allows execution to reach it.*
4. In `if (a) if (b) X; else Y;` which `if` does the `else` belong to? *Answer: the nearer one, `if (b)`.*

Full explanations and diagrams are in the [Topic 2.4 study guide](/advanced-course-resources/computer-science-a/2-4-nested-if-statements-study-guide/).
