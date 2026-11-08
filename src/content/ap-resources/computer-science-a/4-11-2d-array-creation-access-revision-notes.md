---
resourceId: "mb-ap-csa-4.11-revision-notes"
title: "2D Array Creation and Access: Revision Notes (Computer Science A 4.11)"
description: "A short recap of 2D array creation and access: declaration forms, default values, the [row][col] convention, length rules, row aliases and exceptions."
course: "computer-science-a"
unit: 4
topics: ["4.11"]
resourceType: "revision-notes"
prerequisites:
  - "One-dimensional arrays: creation, indexing and length (Topic 4.3)"
  - "Default values of int, double, boolean and reference types (Topic 4.3)"
  - "Reference variables and aliases (Topics 1.12 and 1.13)"
learningObjectives:
  - "Recall creation forms and defaults"
  - "Recall the length rules"
  - "Avoid common traps"
skills: ["2", "3"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.11-study-guide", "mb-ap-csa-4.11-practice", "mb-ap-csa-4.11-checklist"]
next: "mb-ap-csa-4.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "int[][] g = new int[3][4]; has 3 rows and 4 columns, all 0."
  - "Valid row indices 0 to arr.length - 1; valid column indices 0 to arr[0].length - 1."
  - "A row can be read as arr[r]; it is the same array, not a copy."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

Full explanation, figures and traced examples: [Topic 4.11 study guide](/advanced-course-resources/computer-science-a/4-11-2d-array-creation-access-study-guide/).

## Recap

A 2D array is an **array of arrays**: the outer array holds one reference per row and each reference leads to a 1D row array. For the exam `arr[row][col]`: first index row, second index column. Only rectangular arrays are in scope. The size is fixed when the array is created.

```java
int[][] grid = new int[3][4];            // 3 rows, 4 columns, all 0
int[][] m = { {1, 2, 3}, {4, 5, 6} };    // 2 rows, 3 columns
int rows = m.length;                     // 2
int cols = m[0].length;                  // 3
int x = m[1][2];                         // 6
m[0][1] = 20;                            // change one element
int[] row1 = m[1];                       // alias of the second row
```

## Key relationships

| Item | Rule |
|---|---|
| Number of rows | `arr.length` |
| Number of columns | `arr[0].length` (or `arr[r].length`) |
| Total elements | `arr.length * arr[0].length` |
| Valid row index | 0 to `arr.length - 1` |
| Valid column index | 0 to `arr[0].length - 1` |
| Defaults after `new` | `0`, `0.0`, `false`, `null` by element type |
| Row | `arr[r]` is a 1D array and a reference (alias, not copy) |
| Bad index | `ArrayIndexOutOfBoundsException` |
| `null` element | calling a method on it throws `NullPointerException` |

## Assumptions

- The array is rectangular (all rows the same length).
- The array variable is not `null`.
- Indices are checked against the correct dimension: rows against `arr.length`, columns against `arr[0].length`.

## A mini-example to rehearse

`int[][] grid = new int[3][4]; grid[1][2] = 7; grid[2][0] = grid[1][2] + 1;` leaves row 1 as `0 0 7 0` and row 2 as `8 0 0 0`; `grid.length` is 3 and `grid[0].length` is 4. With `int[][] m = { {1, 2, 3}, {4, 5, 6} }`, `m[1][2] + m[0][1]` is 6 + 2 = 8. `int[] row = m[1]; row[0] = 40;` changes `m[1][0]` to 40, because the row is shared. `m[2][0]` and `m[0][3]` both throw `ArrayIndexOutOfBoundsException`.

## Mistakes to avoid

1. Reversing row and column.
2. Using `arr.length` for the number of columns.
3. Expecting `""` in a new `String[][]` (it is `null`).
4. Treating `arr[r]` as a copy of the row.
5. Using `<=` with `length` in an index check.
6. Forgetting that the size cannot change after creation.

## How this topic is usually tested

- Give the value of an element, the number of rows or columns, or the total size.
- Trace assignments and write the final table.
- Spot the out-of-range index or the null element that causes an exception.
- Write short statements or methods that read or fill a cell or a row.

## Quick self-check

1. `new int[3][4]`: how many rows and columns? **3 rows and 4 columns**, 12 elements, all 0.
2. For `{ {1, 2, 3}, {4, 5, 6} }`, what is `m[0][2]`? **3**
3. What is `m[1].length`? **3**
4. A new `String[2][2]` holds what in each cell? **`null`**
5. Which of `m[2][0]` and `m[1][2]` throws for the 2-by-3 array `m`? **`m[2][0]`** (row 2 does not exist).
