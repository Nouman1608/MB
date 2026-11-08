---
resourceId: "mb-ap-csa-4.15-revision-notes"
title: "Sorting Algorithms: Revision Notes (Computer Science A 4.15)"
description: "A short recap of selection sort and insertion sort: the loops, what each pass guarantees, comparison and shift counts, and the usual errors."
course: "computer-science-a"
unit: 4
topics: ["4.15"]
resourceType: "revision-notes"
prerequisites:
  - "Traversing arrays and ArrayLists (Topics 4.4 and 4.9)"
  - "Swapping two elements with a temporary variable (Topic 4.5)"
  - "Nested loops and informal counting of loop iterations (Topics 2.11 and 2.12)"
learningObjectives:
  - "Recall the two algorithms"
  - "Recall what each pass guarantees"
  - "Avoid the common errors"
skills: ["3", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.15-study-guide", "mb-ap-csa-4.15-practice", "mb-ap-csa-4.15-checklist"]
next: "mb-ap-csa-4.15-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Selection: find min, swap to the front, repeat for the rest."
  - "Insertion: pick the next element, shift larger ones right, drop it in."
  - "Swap needs a temporary variable."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Full explanation, figures and traced examples: [Topic 4.15 study guide](/advanced-course-resources/computer-science-a/4-15-sorting-algorithms-study-guide/).

## Recap

**Selection sort** repeatedly selects the smallest element of the unsorted portion and swaps it into its correct and **final** position. **Insertion sort** takes the next element of the unsorted portion and inserts it into its correct, but not necessarily final, position among the sorted elements by **shifting** larger ones right. Both are iterative and both can sort an array or an `ArrayList`.

```java
for (int i = 0; i < a.length - 1; i++)            // selection
{
    int min = i;
    for (int j = i + 1; j < a.length; j++) { if (a[j] < a[min]) { min = j; } }
    int tmp = a[i]; a[i] = a[min]; a[min] = tmp;
}
for (int i = 1; i < a.length; i++)                // insertion
{
    int key = a[i]; int j = i - 1;
    while (j >= 0 && a[j] > key) { a[j + 1] = a[j]; j--; }
    a[j + 1] = key;
}
```

## Key relationships

| Feature | Selection sort | Insertion sort |
|---|---|---|
| Passes | n - 1 | n - 1 (outer loop from index 1) |
| After k passes | first k elements are final | first k + 1 elements are in order, not final |
| Moves elements by | one swap per pass | shifting, then one placement |
| Comparisons | always n(n - 1)/2 | n - 1 if already sorted; up to n(n - 1)/2 if reversed |
| Best input | none (same work) | already sorted |
| Needs temp variable | yes, for the swap | yes, for the key |

## Assumptions

- Sorting is ascending and uses `<` or `>` on comparable primitives (for objects, a comparison method).
- The array is not `null`; an array of 0 or 1 elements needs no passes.
- The `while` test checks `j >= 0` before using `a[j]`.

## A mini-example to rehearse

On `{5, 2, 9, 1, 7}` selection sort gives `1 2 9 5 7`, `1 2 9 5 7`, `1 2 5 9 7`, `1 2 5 7 9` after passes 1 to 4 (10 comparisons). Insertion sort gives `2 5 9 1 7`, `2 5 9 1 7`, `1 2 5 9 7`, `1 2 5 7 9` (7 comparisons, 5 shifts). On `{8, 3, 5, 1, 9, 2}` after two passes: selection `1 2 5 8 9 3`, insertion `3 5 8 1 9 2`.

## Mistakes to avoid

1. Writing a swap with no temporary variable.
2. Claiming that insertion sort's front part is final.
3. Starting the inner search at 0 instead of `i + 1`.
4. Comparing against the index `min` instead of `a[min]`.
5. Testing `a[j] > key` before `j >= 0`.
6. Counting the pass numbers from the wrong starting point (insertion sort's first pass inserts the element at index 1).

## How this topic is usually tested

- Give the array after a stated number of passes of each sort.
- Say how many comparisons, swaps or shifts a sort makes on given data.
- Choose which sort does less work for a given input.
- Identify an error in sort code, such as a faulty swap.

## Quick self-check

1. Selection sort on `{5, 2, 9, 1, 7}`: array after pass 1? **`1 2 9 5 7`**
2. Insertion sort on `{5, 2, 9, 1, 7}`: array after pass 3? **`1 2 5 9 7`**
3. Insertion sort on `{1, 2, 3, 4, 5}`: how many shifts? **0**
4. How many comparisons does selection sort make for n = 5? **10**
5. After k passes of selection sort, what is true of the first k elements? **They are the k smallest, in final positions.**
