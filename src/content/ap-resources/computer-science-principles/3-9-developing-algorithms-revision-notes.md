---
resourceId: "mb-ap-csp-3.9-revision-notes"
title: "Developing Algorithms: Revision Notes (Computer Science Principles 3.9)"
description: "One-page recap of developing algorithms: ways to express them, the standard algorithms to know, combining and modifying, and checking whether two algorithms are equivalent."
course: "computer-science-principles"
unit: 3
topics: ["3.9"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.9-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["1", "2"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.9-study-guide", "mb-ap-csp-3.9-practice", "mb-ap-csp-3.9-checklist"]
next: "mb-ap-csp-3.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "An algorithm is a finite set of instructions that accomplish a specific task; it can be written as natural language, a diagram, pseudocode or code."
  - "Every algorithm can be built from sequencing, selection and iteration."
  - "Algorithms can be created from an idea, by combining, or by modifying existing ones; reusing correct algorithms reduces development time and testing."
  - "Algorithms that look alike can behave differently: test ties and boundary cases."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## Recap

- An **algorithm** is a finite set of instructions that accomplish a specific task. It can be written as **natural language, a diagram, pseudocode or code**.
- Every algorithm is built from **sequencing, selection and iteration**.
- Algorithms are made **from an idea**, by **combining** known algorithms, or by **modifying** a known one.
- Standard algorithms to know: **max/min** of numbers, **sum/average**, **divisibility** (`n MOD d = 0`), a robot **path through a maze**.
- Reusing correct algorithms **reduces development time and testing** and **simplifies finding errors**.
- Algorithms can look alike and differ, or look different and agree.

## Key relationships

| Task | Algorithm idea | Check |
|---|---|---|
| Largest of three | Start with `a`; replace if `b` is bigger; replace if `c` is bigger | Test ties and first-is-largest |
| Smallest | Same, with `<` | Change one operator |
| Range | largest − smallest | Combine two algorithms |
| Average | sum of values / count | Needs a sum first |
| Divisible | `n MOD d = 0` | Remainder zero |
| Conditional ↔ Boolean | `IF(c) {r ← true} ELSE {r ← false}` equals `r ← c` | Equivalent for every input |

## Assumptions

- Inputs are valid numbers unless stated.
- Variables that a segment never assigns keep their earlier values.
- Two algorithms are equivalent only if they give the same result for **every** input.

## Method for comparing two algorithms

1. List the inputs that matter: typical, boundary and **equal/tie** cases.
2. Trace both algorithms on each input and record the results.
3. If any input gives different results, the algorithms are **not** equivalent.
4. If they always agree, explain *why* using the structure of the code, not just the tests.

## Mistakes to avoid

- Calling algorithms equivalent after one or two tests.
- Forgetting the equal case in max/min code.
- Rewriting an algorithm from scratch when a modification would do.
- Describing an algorithm only as "it works" without listing the steps.
- Treating two IFs as an IF/ELSE.

## Worked mini-example

```text
x ← 4
y ← 4
big ← 0
IF(x > y)
{
  big ← x
}
IF(y > x)
{
  big ← y
}
DISPLAY(big)
```

Output: `0`

Neither condition is true when `x` equals `y`, so `big` keeps its starting value 0, which is wrong. Replacing the second IF with an ELSE (or using `≥` in one of them) fixes it.

## Quick self-check

1. Name two standard algorithms you could combine to compute a range.
2. Is `IF(c) {r ← true} ELSE {r ← false}` equivalent to `r ← c`?
3. Give an input that separates `total > 100` from `total ≥ 100`.

<details>
<summary>Answers</summary>

1. Find the maximum and find the minimum, then subtract.
2. Yes: both store the value of `c` in `r`.
3. `total` equal to 100.

</details>

## Where marks are won and lost

Expect questions that show two segments and ask whether they produce the same result for all inputs, or for which input they differ. Others ask which existing algorithm helps to build a new one (for instance, an average needs a sum). Some ask you to express an algorithm in words or a diagram. When comparing, test the equal case and the boundaries first; these are where look-alikes diverge.


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-9-developing-algorithms-study-guide/) for worked examples and explanations.
