---
resourceId: "mb-ap-csa-4.17-revision-notes"
title: "Recursive Searching and Sorting: Revision Notes (Computer Science A 4.17)"
description: "A short recap of recursive traversal, binary search and merge sort: conditions, the low-high-mid trace, the split and merge steps, efficiency and common errors."
course: "computer-science-a"
unit: 4
topics: ["4.17"]
resourceType: "revision-notes"
prerequisites:
  - "Recursion and tracing recursive methods (Topic 4.16)"
  - "Linear search and sorting by selection and insertion (Topics 4.14 and 4.15)"
  - "Arrays and ArrayLists, and integer division (Topics 4.3 and 1.3)"
learningObjectives:
  - "Recall binary search and merge sort"
  - "Recall how to trace each"
  - "Avoid the common errors"
skills: ["3", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.17-study-guide", "mb-ap-csa-4.17-practice", "mb-ap-csa-4.17-checklist"]
next: "mb-ap-csa-4.17-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Binary search: sorted data only; low, high, mid; stop when low is greater than high."
  - "Merge sort: split down to single elements, merge back up."
  - "Search algorithms other than linear and binary, and sorts other than selection, insertion and merge, are outside the course."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Full explanation, figures and traced examples: [Topic 4.17 study guide](/advanced-course-resources/computer-science-a/4-17-recursive-searching-sorting-study-guide/).

## Recap

Recursion can traverse a String, array or `ArrayList`: the parameter (an index, or a shorter String or range) shows the progress and a base case stops it. **Binary search** finds a target in **sorted** data by examining the middle element and discarding half of the range each time; it may be written iteratively or recursively and is typically more efficient than linear search. **Merge sort** is recursive: divide the array until each piece has one element, then merge the sorted pieces back together in order.

```java
int mid = (low + high) / 2;
if (a[mid] == target) { return mid; }
else if (a[mid] < target) { low = mid + 1; }     // search the right half
else { high = mid - 1; }                         // search the left half
// stop with -1 when low > high
```

## Key relationships

| Idea | Rule |
|---|---|
| Binary search precondition | the data must be sorted |
| Middle index | `(low + high) / 2`, integer division (rounds down) |
| Move right | `a[mid] < target`: `low = mid + 1` |
| Move left | `a[mid] > target`: `high = mid - 1` |
| Not found | `low > high`: return -1 |
| Steps | at most about log base 2 of n, plus one |
| Merge sort base case | a range of one element |
| Merge sort order | left half sorted, then right half, then merge |
| Merge step | compare the fronts of two sorted lists, copy the smaller |
| Scope | linear and binary search; selection, insertion and merge sort |

## Assumptions

- The array or list used by binary search is sorted in the same order the comparison assumes (ascending here).
- Integer division is used for `mid`.
- Writing recursive code is outside the exam scope; you trace it.

## A mini-example to rehearse

On `{2, 5, 8, 11, 14, 17, 20, 23}`: searching 17 gives mid 3 (11), then mid 5 (17): found at index 5 in 2 steps. Searching 6 gives mids 3 (11), 1 (5), 2 (8) and then `low > high`: -1 in 3 steps. Merge sort on `{8, 3, 5, 1, 9, 2}` splits into `[8, 3, 5]` and `[1, 9, 2]`, sorts the left half first (`[3, 5, 8]`), then the right (`[1, 2, 9]`) and the final merge gives `[1, 2, 3, 5, 8, 9]`.

## Mistakes to avoid

1. Running binary search on unsorted data.
2. Setting `low = mid` or `high = mid` instead of `mid + 1` or `mid - 1`.
3. Computing `mid` with a decimal fraction in your head; Java rounds down.
4. Merging before both halves are sorted.
5. Doing a merge step on a one-element piece.
6. Saying merge sort reorders elements while it splits.

## How this topic is usually tested

- Give the sequence of `mid` values or the number of comparisons for a binary search.
- Say what happens if binary search is run on unsorted data.
- Give the array or subarrays after a stated number of splits or merges of merge sort.
- Trace a short recursive method on a String, array or `ArrayList`.
- Compare the efficiency of linear and binary search.

## Quick self-check

1. Sorted `{2, 5, 8, 11, 14, 17, 20, 23}`, search 20: which `mid` values? **3, 5, 6**, found at index 6.
2. What is `mid` when `low` is 4 and `high` is 7? **5**
3. What must be true of the data for binary search? **Sorted.**
4. What is the base case of merge sort? **A piece with one element.**
5. Merge `[3, 5, 8]` and `[1, 2, 9]`: result? **`[1, 2, 3, 5, 8, 9]`**
