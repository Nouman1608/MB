---
resourceId: "mb-ap-csa-4.13-revision-notes"
title: "Implementing 2D Array Algorithms: Revision Notes (Computer Science A 4.13)"
description: "A short recap of 2D array algorithms: how each 1D pattern becomes a row, column or whole-table pattern, with the bounds rules and a mini-example."
course: "computer-science-a"
unit: 4
topics: ["4.13"]
resourceType: "revision-notes"
prerequisites:
  - "Traversing 2D arrays in row-major and column-major order (Topic 4.12)"
  - "The 1D array and ArrayList algorithms (Topics 4.5 and 4.10)"
  - "Boolean expressions with && and || (Topic 2.5)"
learningObjectives:
  - "Recall how each pattern changes for a row, column or table"
  - "Recall the bounds rules"
  - "Rehearse a trace"
skills: ["2", "3", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.13-study-guide", "mb-ap-csa-4.13-practice", "mb-ap-csa-4.13-checklist"]
next: "mb-ap-csa-4.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Whole table: nested loops. Row: loop over columns with r fixed. Column: loop over rows with c fixed."
  - "Rotate: save first, shift, place last. Reverse: swap for the first half."
  - "Neighbours: use dr and dc offsets and a bounds test."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

Full explanation, figures and traced examples: [Topic 4.13 study guide](/advanced-course-resources/computer-science-a/4-13-implementing-2d-array-algorithms-study-guide/).

## Recap

Every 2D algorithm is a 1D pattern applied to a region. A **row** `r` is a loop over `c` with `r` fixed. A **column** `c` is a loop over `r` with `c` fixed. The **whole table** uses nested loops. Choose the pattern (maximum, sum, count, any, all, duplicates, shift, reverse), then the region, then write the loops.

```java
int max = m[0][0];                                // maximum of the table
for (int r = 0; r < m.length; r++)
    for (int c = 0; c < m[r].length; c++)
        if (m[r][c] > max) { max = m[r][c]; }

int first = m[r][0];                              // rotate row r left
for (int c = 0; c < m[r].length - 1; c++) { m[r][c] = m[r][c + 1]; }
m[r][m[r].length - 1] = first;
```

## Key relationships

| Task | Shape | Detail |
|---|---|---|
| Maximum or minimum | start at an existing element | `m[0][0]` or `m[0][c]` |
| Sum per row | accumulator declared inside the outer loop | resets for each row |
| Sum per column | outer loop over columns, inner over rows | result array length `m[0].length` |
| Count in a region | `count++` when the test holds | any region |
| All | `return false` inside, `return true` after the loops | |
| At least one | `return true` inside, `return false` after the loops | |
| Pairs along a row | `c < m[r].length - 1` | compare `m[r][c]` with `m[r][c + 1]` |
| Duplicates in a row | `j` starts at `i + 1` | same as the list version |
| Rotate row left | save first, shift, place last | save before overwriting |
| Reverse column | swap `r` and `m.length - 1 - r` for `r < m.length / 2` | |
| Neighbours | offsets -1 to 1, skip (0, 0), bounds check first | `&&` order matters |

## Assumptions

- The table is rectangular and not empty (`m[0]` exists).
- A row or column index passed in is valid.
- For neighbour algorithms the cell values and the target value are comparable with `==` (primitives) or `equals` (objects).

## A mini-example to rehearse

For `{ {3, 1, 4, 1}, {5, 9, 2, 6}, {5, 3, 5, 8} }`: the maximum is 9; the row sums are 9, 22 and 21, so the best row is index 1; counting increases along the rows gives 5; rotating row 2 left gives `3 5 8 5`. On the 3-by-3 board `0 1 0 / 1 1 0 / 0 0 1` the centre cell has 3 neighbours holding 1, and the corner (2, 2) has 1.

## Mistakes to avoid

1. Declaring a per-row accumulator outside the outer loop.
2. Overwriting the first element in a rotation before saving it.
3. Looping a reversal over the whole row or column.
4. Reading a neighbour before checking the bounds.
5. Using the wrong dimension for the bound (`m.length` against columns).
6. Starting a maximum at 0.
7. Returning `true` too early in an all test.

## How this topic is usually tested

- Trace a method on a small table and give its result.
- Write a method that finds, counts or tests along a row, a column or the whole table.
- Fill in a missing line, such as the bounds test or the saved variable.
- Describe in words what a given method returns.

## Quick self-check

1. Maximum of column 1 of `{ {3, 1, 4, 1}, {5, 9, 2, 6}, {5, 3, 5, 8} }`? **9**
2. Which row has the largest sum there? **Row 1** (sum 22).
3. Rotate `5, 3, 5, 8` left: result? **`3, 5, 8, 5`**
4. Where must a neighbour bounds test appear in an `&&` expression? **Before** the read of the cell.
5. How many swaps does a reversal of a column of 5 elements need? **2** (`5 / 2` is 2).
