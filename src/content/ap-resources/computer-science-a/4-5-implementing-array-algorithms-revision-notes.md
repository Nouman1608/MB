---
resourceId: "mb-ap-csa-4.5-revision-notes"
title: "Implementing Array Algorithms: Revision Notes (Computer Science A 4.5)"
description: "One-page recap of the standard array algorithms: patterns for max, min, sum, average, any, all, count, pairs, duplicates, rotate and reverse, with typical mistakes and quick checks."
course: "computer-science-a"
unit: 4
topics: ["4.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-4.5-study-guide"]
learningObjectives:
  - "Write traversal code that finds a minimum or maximum, a sum or an average, and a count of elements with a property"
  - "Write code that decides whether at least one element, or every element, has a property"
  - "Access all consecutive pairs of elements and detect the presence or absence of duplicates"
  - "Shift or rotate elements left or right, and reverse the order of the elements"
  - "Trace an array algorithm on a small array and find faults such as a wrong starting value or a returning-too-early loop"
skills: ["2", "3", "4"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-4.5-study-guide", "mb-ap-csa-4.5-practice", "mb-ap-csa-4.5-checklist"]
next: "mb-ap-csa-4.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a"]
keyPoints:
  - "The standard array algorithms are traversals with a small amount of extra state: a best value, a total, a count, or a flag."
  - "For a maximum or minimum, start with the first element, not with 0."
  - "At least one has a property: return true as soon as one is found, otherwise false after the loop; all have a property: return false as soon as one fails, otherwise true after the loop."
  - "Consecutive pairs use a[i] and a[i + 1] with the loop test i < a.length - 1; duplicates need a second loop starting at i + 1."
  - "Rotating needs a saved element and a loop in the right direction; reversing swaps elements from the two ends and stops at the middle."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These notes recap Topic 4.5. Full explanations and worked examples are in the [study guide](/advanced-course-resources/computer-science-a/4-5-implementing-array-algorithms-study-guide/).

## Recap

The standard array algorithms are traversals with a little extra state:

- **Minimum or maximum**: keep a best so far, started at the **first element**.
- **Sum or average**: running total from 0; for an average divide as a `double`.
- **At least one** has a property: `return true` inside the loop on the first match; `return false` after the loop.
- **All** have a property: `return false` inside the loop on the first failure; `return true` after the loop.
- **Count**: a counter from 0, incremented when the property holds.
- **Consecutive pairs**: `a[i]` and `a[i + 1]` with `i < a.length - 1`.
- **Duplicates**: an inner loop starting at `i + 1`.
- **Shift or rotate**: save one element, move the others, write the saved one back.
- **Reverse**: swap from both ends towards the middle.

## Key patterns

| Algorithm | Before the loop | In the loop | After the loop |
|---|---|---|---|
| Maximum | `best = a[0]` | if `a[i] > best`, `best = a[i]` | `return best` |
| Sum | `total = 0` | `total += a[i]` | `return total` |
| Count | `count = 0` | if property, `count++` | `return count` |
| Any | nothing | if property, `return true` | `return false` |
| All | nothing | if not property, `return false` | `return true` |
| Rotate left | `first = a[0]` | `a[i] = a[i + 1]` for i up to length - 2 | `a[length - 1] = first` |
| Reverse | nothing | swap `a[i]` and `a[length - 1 - i]` for i < length / 2 | nothing |

## Results to remember

For `t = {4, 9, 2, 7, 9}`: maximum 9, minimum 2, sum 31, average 6.2, count above 5 is 3, rising pairs 3, duplicates present. Rotating `{1, 2, 3, 4, 5}` left gives `2 3 4 5 1`; rotating right gives `5 1 2 3 4`. Reversing `{4, 8, 15, 16, 23}` gives `23 16 15 8 4`.

## Assumptions

- The array has at least one element for min, max and average.
- Rotate, shift and reverse change the array that was passed, because the parameter holds a reference to it.
- The average needs a cast or a `double` somewhere in the division.

## Mistakes to avoid

- Starting a maximum at 0.
- `return true` too early in an "all" loop.
- Integer division in an average.
- `i < a.length` when comparing `a[i]` with `a[i + 1]`.
- Rotating right from the front, or reversing all the way to the end.

## Quick self-check

1. For `{-4, -9, -2}`, what does a maximum that starts at 0 return? *Answer: 0, which is wrong; the maximum is -2.*
2. How many rising pairs in `{1, 5, 3, 8, 9}`? *Answer: 3.*
3. After `rotateLeft` on `{1, 2, 3, 4, 5}`, what is the last element? *Answer: 1.*
4. Why does the duplicates inner loop start at `i + 1`? *Answer: so an element is not compared with itself.*
