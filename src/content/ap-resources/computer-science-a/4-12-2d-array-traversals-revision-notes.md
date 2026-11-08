---
resourceId: "mb-ap-csa-4.12-revision-notes"
title: "2D Array Traversals: Revision Notes (Computer Science A 4.12)"
description: "A short recap of 2D array traversals: row-major and column-major loops, nested enhanced for loops and their limits, bounds, and a worked mini-example."
course: "computer-science-a"
unit: 4
topics: ["4.12"]
resourceType: "revision-notes"
prerequisites:
  - "Creating and indexing 2D arrays (Topic 4.11)"
  - "Nested for loops (Topic 2.11) and enhanced for loops over a 1D array (Topic 4.4)"
  - "Accumulating a total or count in a loop (Topic 4.5)"
learningObjectives:
  - "Recall the loop shapes"
  - "Recall the types for enhanced loops"
  - "Avoid common bound errors"
skills: ["2", "3", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.12-study-guide", "mb-ap-csa-4.12-practice", "mb-ap-csa-4.12-checklist"]
next: "mb-ap-csa-4.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Row-major: for r ... for c ... ; column-major: for c ... for r ..."
  - "Enhanced: for (int[] row : arr) for (int v : row)"
  - "Bounds: r < arr.length and c < arr[0].length."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Full explanation, figures and traced examples: [Topic 4.12 study guide](/advanced-course-resources/computer-science-a/4-12-2d-array-traversals-study-guide/).

## Recap

Traversing a 2D array needs nested loops. **Row-major**: outer loop over rows, inner over columns. **Column-major**: outer over columns, inner over rows. In both, `r` is the row index and `c` the column index, and access is `m[r][c]`.

```java
for (int r = 0; r < m.length; r++)            // row-major
    for (int c = 0; c < m[r].length; c++)
        { /* m[r][c] */ }

for (int c = 0; c < m[0].length; c++)         // column-major
    for (int r = 0; r < m.length; r++)
        { /* m[r][c] */ }

for (int[] row : m)                           // enhanced (row-major)
    for (int v : row)
        { /* v */ }
```

## Key relationships

| Item | Rule |
|---|---|
| Row bound | `m.length` |
| Column bound | `m[0].length` or `m[r].length` |
| Outer enhanced variable | type `int[]` (a row); inner is `int` |
| Assign to inner enhanced variable | no effect on the array |
| `row[0] = x` via outer variable | changes the array (row is a reference) |
| Row sums array | length `m.length` |
| Column sums array | length `m[0].length` |
| Main diagonal (square) | `m[i][i]` |
| Other diagonal (square) | `m[i][m.length - 1 - i]` |
| Transpose | new array of size `m[0].length` by `m.length`; `t[c][r] = m[r][c]` |

## Assumptions

- The array is rectangular and not `null`.
- For diagonals the array is square.
- Index loops are used whenever the code needs to change elements or know positions.

## A mini-example to rehearse

For `{ {1, 2, 3}, {4, 5, 6} }`: row-major prints `1 2 3 4 5 6`; column-major prints `1 4 2 5 3 6`. For `{ {3, 1, 4, 1}, {5, 9, 2, 6}, {5, 3, 5, 8} }` the row sums are 9, 22, 21 and the column sums 13, 13, 11, 15, and both groups total 52. Snake order on a 3-by-3 grid `1..9` reads `1 2 3 6 5 4 7 8 9`. Using `r < m[0].length` as the row bound on the 2-by-3 grid throws `ArrayIndexOutOfBoundsException` at row 2.

## Mistakes to avoid

1. Swapping the row and column bounds on a non-square array.
2. Using an `int` as the outer enhanced for variable.
3. Expecting `v = 0` in an enhanced loop to clear the array.
4. Reversing the indices (`m[c][r]`).
5. Making a column-sums array of length `m.length`.
6. Forgetting that the nesting order changes the output order.

## How this topic is usually tested

- Give the output of a traversal in a given order.
- Identify the type needed in a nested enhanced for header.
- Spot the loop bound that goes out of range.
- Write a method that sums, counts or copies along rows or columns.

## Quick self-check

1. Column-major output of `{ {1, 2, 3}, {4, 5, 6} }`? **`1 4 2 5 3 6`**
2. What type is the outer variable in `for (___ row : m)` for an `int[][]` `m`? **`int[]`**
3. Length of the array of column sums for a 3-row, 4-column table? **4**
4. Does `v = 0;` inside `for (int v : row)` change the array? **No.**
5. Snake-order output for 3-by-3 `1..9`? **`1 2 3 6 5 4 7 8 9`**
