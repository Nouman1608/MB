---
resourceId: "mb-ap-csa-2.3-revision-notes"
title: "if Statements: Revision Notes (Computer Science A 2.3)"
description: "One-page recap of one-way and two-way if statements: the rules, a key-relationships table, mistakes to avoid and a short self-check with answers."
course: "computer-science-a"
unit: 2
topics: ["2.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-2.3-study-guide"]
learningObjectives:
  - "Write one-way (if) and two-way (if-else) selection statements with correct syntax"
  - "Trace an if or if-else statement and state exactly which statements run for given values"
skills: ["2", "3", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.3-study-guide", "mb-ap-csa-2.3-practice", "mb-ap-csa-2.3-checklist"]
next: "mb-ap-csa-2.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "An if statement runs its body only when its Boolean expression is true; a one-way selection does nothing at all when it is false."
  - "An if-else runs the if body when the expression is true and the else body when it is false: exactly one of the two bodies runs."
  - "Two separate if statements are not an if-else: both can run, because the second condition is tested afterwards, using any values the first changed."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Recap

An **if statement** is a selection statement: it changes the normal top-to-bottom flow by running a segment of code only when a Boolean expression is true.

| Form | Syntax | What runs |
|---|---|---|
| One-way (`if`) | `if (cond) { A }` | A runs only if `cond` is true; otherwise nothing |
| Two-way (`if-else`) | `if (cond) { A } else { B }` | A if `cond` is true, B if it is false: exactly one |
| Two separate `if`s | `if (c1) { A } if (c2) { B }` | A, B, both or neither, tested one after the other |

## Key relationships

| Idea | Rule |
|---|---|
| Condition | A Boolean expression inside parentheses; no semicolon after it |
| Else | No condition; runs when the matching `if` condition was false |
| Braces | Body is the block; without braces only one statement belongs to the `if` |
| Trace | Write variable values, evaluate the condition, follow one path |
| Rejoin | After the chosen body, execution continues with the next statement |
| Boolean variable | `if (isReady)` is the same as `if (isReady == true)` |

## Assumptions

- The condition is exactly true or false.
- Variables used in the condition have been assigned before the `if`.
- For `if-else`, the two bodies cover the two possible outcomes of one decision.

## Mistakes to avoid

- Putting a semicolon straight after `if (...)`.
- Leaving off braces and trusting the indentation.
- Using two `if`s when you need an `if-else` (or the reverse).
- Writing `=` instead of `==` in the condition.
- Forgetting that the second of two `if`s sees the values changed by the first.
- Printing or returning inside only one branch and expecting a value in the other.

## Worked mini-example

```java
int stock = 3;
int order = 5;
if (order > stock) {
    order = stock;
}
stock = stock - order;
```

Trace: `order > stock` is 5 > 3, true, so the body runs and `order` becomes 3. Then `stock = 3 - 3 = 0`. After the code, `stock` is 0 and `order` is 3. With `order = 2` instead, the condition is false, the body is skipped and `stock` becomes 1. The `if` here adjusts a value before the next statement uses it, which is the most common job for a one-way selection.

## Quick self-check

1. How many bodies run in an if-else? *Answer: exactly one.*
2. With `x = 8`, what does this print? `if (x > 5) { System.out.print("A"); } if (x > 7) { System.out.print("B"); }` *Answer: AB, because both conditions are true and the ifs are independent.*
3. What does `int k = 1; if (k > 3); { k = 9; }` leave `k` as? *Answer: 9. The semicolon is the whole body, so the block always runs.*
4. Rewrite `if (n < 0) { s = "neg"; } if (n >= 0) { s = "pos"; }` as one statement. *Answer: `if (n < 0) { s = "neg"; } else { s = "pos"; }`.*

Full explanations and diagrams are in the [Topic 2.3 study guide](/advanced-course-resources/computer-science-a/2-3-if-statements-study-guide/).
