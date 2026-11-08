---
resourceId: "mb-ap-csp-3.11-revision-notes"
title: "Binary Search: Revision Notes (Computer Science Principles 3.11)"
description: "One-page recap of binary search: the halving process, the sorted-data requirement, the greatest number of checks for a given list size, and when to prefer linear search."
course: "computer-science-principles"
unit: 3
topics: ["3.11"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.11-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["1"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.11-study-guide", "mb-ap-csp-3.11-practice", "mb-ap-csp-3.11-checklist"]
next: "mb-ap-csp-3.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "Binary search starts at the middle of a sorted list and eliminates half of the remaining data with each check."
  - "The data must be in sorted order; on unsorted data it can wrongly report not found."
  - "The greatest number of checks is how many times the size can be halved, plus one: 10 for 1,000 items, 20 for a million."
  - "Doubling the list adds only one check for binary search."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## Recap

- Binary search finds a target in a **sorted** list by starting at the **middle** and **eliminating half** of the remaining data at each check.
- Repeat until the target is found or **no elements remain**.
- **Sortedness is required.** On unsorted data it can give a wrong "not found".
- **Greatest number of checks** for *n* items: halve *n* repeatedly until 1 is left, then add the final check. Equivalent: the smallest *k* with 2<sup>k</sup> − 1 ≥ *n*.
- Doubling the list adds **one** more check. Linear search would need twice as many.
- Binary search is **often** more efficient on sorted data; specific code is **not** examined.

## Key relationships

| List size *n* | Greatest checks (binary) | Greatest checks (linear) |
|---|---|---|
| 7 | 3 | 7 |
| 15 | 4 | 15 |
| 100 | 7 | 100 |
| 1,000 | 10 | 1,000 |
| 1,000,000 | 20 | 1,000,000 |

| Situation | Search to use |
|---|---|
| Unsorted data | Linear search (binary search is not valid) |
| Large, sorted, searched often | Binary search |
| Target likely at the very front | Linear search may be quicker |
| Need to know the position | Either, after confirming the data is sorted for binary |

## Assumptions

- The list is sorted in ascending order unless stated.
- "Check" means one comparison of the target with the middle element.
- When the number of live items is even, the middle can be either of the two central items; the greatest number of checks stays the same.

## Method for counting the greatest number of checks

1. Write the doubling sequence 1, 2, 4, 8, 16, 32, ...
2. Find the first power of two that is **greater than** *n*.
3. The exponent of that power is the greatest number of checks.
4. Sanity check: 2<sup>(checks − 1)</sup> is at most *n*.

## Mistakes to avoid

- Using binary search on unsorted data.
- Reporting *n* ÷ 2 as the number of checks.
- Starting at the first element.
- Forgetting that the middle element is also eliminated after it has been compared.
- Thinking it is always faster than linear search.

## Worked mini-example

A sorted list holds 100 values. Doubling: 1, 2, 4, 8, 16, 32, 64, **128**. The first power of two greater than 100 is 128 = 2<sup>7</sup>, so the greatest number of checks is **7**. Check: 2<sup>6</sup> = 64 is at most 100 ✓.

## Quick self-check

1. What must be true of a list before binary search can be used?
2. What is the greatest number of checks for 500 items?
3. A search compares the target 20 with a middle value of 35 in a sorted list. Which part is eliminated?

<details>
<summary>Answers</summary>

1. It must be in sorted order.
2. 9, because 2<sup>9</sup> = 512 is the first power of two greater than 500.
3. The middle value and everything above it (values of 35 or more).

</details>

## Where marks are won and lost

Questions give a sorted list and a target and ask which value is checked first, which half is eliminated, or how many checks are needed. Another type asks for the greatest number of iterations for a list of a stated size: find the first power of two greater than n. A third type asks whether binary search can be used on a given list (check if it is sorted) or which search is better in a scenario. Always check sortedness before anything else.


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-11-binary-search-study-guide/) for worked examples and explanations.
