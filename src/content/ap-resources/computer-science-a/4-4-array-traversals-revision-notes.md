---
resourceId: "mb-ap-csa-4.4-revision-notes"
title: "Array Traversals: Revision Notes (Computer Science A 4.4)"
description: "One-page recap of array traversals: indexed for and while loops, partial and backward traversals, the enhanced for loop and its copy of each element, and off-by-one errors."
course: "computer-science-a"
unit: 4
topics: ["4.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-4.4-study-guide"]
learningObjectives:
  - "Write an indexed for loop and a while loop that traverse all or part of an array"
  - "Traverse an array forwards, backwards and with a step greater than one"
  - "Explain that the enhanced for loop variable holds a copy of each element and that assigning to it does not change the array"
  - "Explain how calling a method on the enhanced for variable can change an object stored in the array without changing the stored reference"
  - "Rewrite an enhanced for loop as an indexed for loop and a while loop, and find off-by-one errors"
skills: ["2", "3", "4"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-4.4-study-guide", "mb-ap-csa-4.4-practice", "mb-ap-csa-4.4-checklist"]
next: "mb-ap-csa-4.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a"]
keyPoints:
  - "Traversing an array means using repetition to access all, or an ordered sequence, of its elements."
  - "An indexed for loop or while loop reaches elements through their indices: for (int i = 0; i < a.length; i++) visits every element once."
  - "In an enhanced for loop the variable is assigned a copy of each element, without using its index."
  - "Assigning a new value to the enhanced for variable does not change the array; calling a mutator on an object element does change that object, but not the reference stored in the array."
  - "Any enhanced for loop can be rewritten with an indexed for loop or a while loop; the reverse is not always possible."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These notes recap Topic 4.4. Full explanations and worked examples are in the [study guide](/advanced-course-resources/computer-science-a/4-4-array-traversals-study-guide/).

## Recap

- **Traversing** an array uses repetition to access **all, or an ordered sequence of, elements**.
- An **indexed `for` loop** or a **`while` loop** accesses elements by **index**. The standard forward loop is `for (int i = 0; i < a.length; i++)`.
- An **enhanced `for` loop** (`for (int v : a)`) assigns the loop variable a **copy of each element**, with no index.
- **Assigning a new value to the enhanced for variable does not change the array.**
- For an array of **objects**, calling a **method** on the loop variable can change the object's state; it does **not** change the references stored in the array.
- An enhanced for loop can always be rewritten as an indexed for loop or a while loop.

## Key relationships

| Goal | Loop |
|---|---|
| Every element, first to last | `for (int i = 0; i < a.length; i++)` |
| Every other element | `for (int i = 0; i < a.length; i += 2)` |
| Last to first | `for (int i = a.length - 1; i >= 0; i--)` |
| Read each element, no index needed | `for (int v : a)` |
| Change stored primitive values | indexed loop with `a[i] = ...` |
| Stop early on a condition | `while` loop with `k < a.length && ...` |

## Results to remember

With `a = {3, 8, 1, 6}`: the full sum is 18; the sum of every other element is 4; printing backward gives `6 1 8 3`; the number of elements above 5 is 2; doubling inside an enhanced for leaves `3 8 1 6`; doubling with `a[i] = a[i] * 2` gives `6 16 2 12`.

## Off-by-one checklist

1. Does the first iteration use the first index you want (usually 0)?
2. Does the last iteration use the last index you want (usually `a.length - 1`)?
3. Is the test `<` with `length`, not `<=`?
4. Does a `while` loop change its index inside the body?
5. For a `while` loop with two conditions, is the index test written first?

## Mistakes to avoid

- Using `<=` with `a.length`.
- Starting at 1 when the first element must be included.
- Believing the enhanced for variable is the array element itself.
- Forgetting `i++` in a `while` loop.
- Using an enhanced for loop when the position is needed.

## Quick self-check

1. How many times does `for (int i = 0; i < a.length - 1; i++)` run for an array of length 4? *Answer: 3.*
2. After `for (int x : a) { x = 0; }` what is in `a`? *Answer: unchanged.*
3. An array of `Counter` objects is traversed with `for (Counter c : cs) c.bump();`. Do the counters change? *Answer: Yes, each object's state changes.*
4. Which loop style gives the index of each element? *Answer: the indexed for loop (or a while loop with an index).*
