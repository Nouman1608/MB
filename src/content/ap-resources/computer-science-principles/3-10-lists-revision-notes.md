---
resourceId: "mb-ap-csp-3.10-revision-notes"
title: "Lists: Revision Notes (Computer Science Principles 3.10)"
description: "One-page recap of list operations and traversals, with the standard algorithms (sum, average, max/min, count, linear search), index-shifting rules and common mistakes."
course: "computer-science-principles"
unit: 3
topics: ["3.10"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.10-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["2", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.10-study-guide", "mb-ap-csp-3.10-practice", "mb-ap-csp-3.10-checklist"]
next: "mb-ap-csp-3.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "List indices run from 1 to LENGTH(aList); an index outside that range gives an error and ends the program."
  - "INSERT shifts elements right and adds one to the length; REMOVE shifts elements left and subtracts one; APPEND adds at the end."
  - "FOR EACH item IN aList gives item a copy of each element in turn; changing item does not change the list."
  - "Traversal is the basis of sum, average, max/min, counting and linear search."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## Recap

- Indices run **1 to `LENGTH(aList)`**. Outside that range: error, program ends.
- `aList[i]` reads; `aList[i] ← x` writes; `aList[i] ← aList[j]` copies one element to another.
- `INSERT(aList, i, value)` shifts right, **length + 1**. `APPEND` adds at the end, **length + 1**. `REMOVE(aList, i)` shifts left, **length − 1**.
- **FOR EACH item IN aList**: `item` is a **copy** of each element in order.
- **Complete traversal:** every element. **Partial traversal:** only some.
- **Linear search:** check in order until found or all checked; works on unsorted lists.

## Key relationships

| Task | Pattern |
|---|---|
| Sum | `total ← 0`; FOR EACH: `total ← total + item` |
| Average | Sum / `LENGTH(aList)` |
| Maximum | `best ← aList[1]`; replace when `item > best` |
| Minimum | Same with `<` |
| Count matches | `count ← 0`; FOR EACH: IF test, `count ← count + 1` |
| Linear search | Loop until `found` or index > `LENGTH` |
| Swap two elements | `temp ← aList[i]`; `aList[i] ← aList[j]`; `aList[j] ← temp` |

## Assumptions

- Lists are not empty unless stated (the maximum of an empty list is undefined).
- Operations run in the order written; indices are those at the moment of the operation.
- Questions use the reference notation for list operations.

## Method for list questions

1. Rewrite the list with its indices.
2. After **every** INSERT or REMOVE, redraw the whole list and renumber.
3. For a loop, track the loop variable and any totals in a table.
4. Use the updated `LENGTH` whenever the list has changed.

## Mistakes to avoid

- Starting at index 0.
- Using the old index after an INSERT or REMOVE.
- Writing to `item` and expecting the list to change.
- Using `LENGTH(aList)` as the starting index for a loop that should start at 1 (or the reverse).
- Starting a maximum at 0 when all values could be negative; start at the first element.

## Worked mini-example

```text
nums ← [5, 6, 7]
INSERT(nums, 1, 4)
REMOVE(nums, 3)
APPEND(nums, 9)
DISPLAY(nums[3])
DISPLAY(LENGTH(nums))
```

Output: `7 4`

`[5, 6, 7]` becomes `[4, 5, 6, 7]`, then removing index 3 (the 6) gives `[4, 5, 7]`, then appending 9 gives `[4, 5, 7, 9]`. The third element is 7 and the length is 4.

## Quick self-check

1. `[8, 9, 10]`: what is the list after `REMOVE(aList, 1)`?
2. What does `INSERT(aList, 2, 5)` do to `[8, 9, 10]`?
3. Does `FOR EACH item IN aList { item ← 0 }` set the list elements to 0?

<details>
<summary>Answers</summary>

1. `[9, 10]`.
2. It gives `[8, 5, 9, 10]`: 9 and 10 shift right.
3. No. `item` is a copy of each element, so the list is unchanged.

</details>

## Where marks are won and lost

List questions are everywhere on the exam. Expect a sequence of INSERT, APPEND and REMOVE steps and a question about the final list, an index loop with a conditional, or a FOR EACH loop that computes a result. Draw the list after every operation. A common item asks which code correctly finds the maximum or counts matches, and the wrong options differ by a boundary or an initial value. In the Create task your list is central: you must show how it is used and explain what it contributes.


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-10-lists-study-guide/) for worked examples and explanations.
