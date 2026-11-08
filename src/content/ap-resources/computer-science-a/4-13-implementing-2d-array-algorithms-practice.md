---
resourceId: "mb-ap-csa-4.13-practice"
title: "Implementing 2D Array Algorithms: Practice Questions (Computer Science A 4.13)"
description: "Ten original questions on 2D array algorithms: row and column maximums, counting along rows, rotating and reversing, neighbour counts, bounds checks, plus two coding tasks."
course: "computer-science-a"
unit: 4
topics: ["4.13"]
resourceType: "practice-questions"
prerequisites:
  - "Traversing 2D arrays in row-major and column-major order (Topic 4.12)"
  - "The 1D array and ArrayList algorithms (Topics 4.5 and 4.10)"
  - "Boolean expressions with && and || (Topic 2.5)"
learningObjectives:
  - "Trace algorithms on given tables"
  - "Find bounds and logic errors"
  - "Write complete algorithms"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.13-study-guide", "mb-ap-csa-4.13-revision-notes", "mb-ap-csa-4.13-checklist"]
next: "mb-ap-csa-4.13-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Ten questions: eight multiple choice, two constructed response."
  - "Every method was compiled and run on the tables shown; results quoted come from those runs."
  - "Rubrics are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Every method was compiled and run on the tables shown, and the results quoted come from those runs.

Tables used in several questions: `data = { {3, 1, 4, 1}, {5, 9, 2, 6}, {5, 3, 5, 8} }`.

## Question 1 (multiple choice · foundation)

What does `maxInCol(data, 1)` return?

```java
public static int maxInCol(int[][] m, int c)
{
    int max = m[0][c];
    for (int r = 1; r < m.length; r++)
    {
        if (m[r][c] > max)
        {
            max = m[r][c];
        }
    }
    return max;
}
```

- (A) 1
- (B) 5
- (C) 9
- (D) 3

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Column 1 holds 1, 9 and 3, so the maximum is 9.

- (A) is the first element, the starting value.
- (B) is the largest value of column 0.
- (D) is the last element of column 1, not the largest.
</details>

## Question 2 (multiple choice · core)

What does `bestRow(data)` return?

```java
public static int bestRow(int[][] m)
{
    int best = 0;
    int bestSum = -1;
    for (int r = 0; r < m.length; r++)
    {
        int sum = 0;
        for (int c = 0; c < m[r].length; c++)
        {
            sum += m[r][c];
        }
        if (sum > bestSum)
        {
            bestSum = sum;
            best = r;
        }
    }
    return best;
}
```

- (A) 0
- (B) 1
- (C) 2
- (D) 22

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The row sums are 9, 22 and 21. The largest is 22, in row 1. The method returns the **index**, not the sum.

- (A) is the initial value of `best`.
- (C) is the last row; its sum, 21, is not the largest.
- (D) is the largest sum, but the method returns the row index.
</details>

## Question 3 (multiple choice · core)

A student moves `int sum = 0;` to just before the outer loop in `bestRow`. What does `bestRow(data)` now return?

- (A) 0
- (B) 1
- (C) 2
- (D) It throws an exception

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The sum no longer resets, so it runs on: 9, 31, 52. Each is larger than the previous best, so the last row always wins and the method returns 2.

- (A) and (B) would need the sums to be compared row by row.
- (D) The code compiles and runs normally.
</details>

## Question 4 (multiple choice · core)

How many pairs of horizontally adjacent elements satisfy `m[r][c] < m[r][c + 1]` in `data`?

- (A) 3
- (B) 4
- (C) 5
- (D) 9

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Row 0 (3, 1, 4, 1) has one increase (1 to 4); row 1 (5, 9, 2, 6) has two (5 to 9 and 2 to 6); row 2 (5, 3, 5, 8) has two (3 to 5 and 5 to 8). 1 + 2 + 2 = 5 (run and confirmed).

- (A) and (B) miss pairs.
- (D) is the total number of adjacent pairs in the table (3 per row, 3 rows), not the increasing ones.
</details>

## Question 5 (multiple choice · core)

What does row 2 of `data` hold after this method is called with `r` = 2?

```java
public static void rotateRowLeft(int[][] m, int r)
{
    int first = m[r][0];
    for (int c = 0; c < m[r].length - 1; c++)
    {
        m[r][c] = m[r][c + 1];
    }
    m[r][m[r].length - 1] = first;
}
```

- (A) `5 3 5 8`
- (B) `3 5 8 5`
- (C) `8 5 3 5`
- (D) `3 5 8 8`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The shift gives `3, 5, 8, 8`, and the saved first element 5 goes in the last place: `3, 5, 8, 5`.

- (A) is the row before rotation.
- (C) would be a rotation to the right.
- (D) is the row before the last statement runs.
</details>

## Question 6 (multiple choice · core)

For the 2-by-3 array `w = { {1, 2, 3}, {4, 5, 6} }`, a student writes the shifting loop of Question 5 for row 0 but **omits** the save and the final assignment. What does row 0 hold afterwards?

- (A) `1 2 3`
- (B) `2 3 1`
- (C) `2 3 3`
- (D) `3 2 1`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The loop copies `2` into column 0 and `3` into column 1 and leaves column 2 unchanged: `2 3 3`. The original 1 is lost (run and confirmed).

- (A) assumes nothing changes.
- (B) is a correct rotation, which needs the saved element.
- (D) reverses the row, which is a different algorithm.
</details>

## Question 7 (multiple choice · core)

For `board = { {0, 1, 0}, {1, 1, 0}, {0, 0, 1} }`, what does `countNeighbours(board, 0, 0)` return? The method counts the cells holding 1 among the (up to 8) neighbours of the given cell, ignoring cells outside the array.

- (A) 0
- (B) 1
- (C) 3
- (D) 8

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The corner (0, 0) has three neighbours: (0, 1), (1, 0) and (1, 1). All three hold 1 (run and confirmed: 3).

- (A) and (B) miss neighbours that hold 1.
- (D) counts all eight neighbours of an interior cell, but a corner has only three.
</details>

## Question 8 (multiple choice · stretch)

Which condition is the safest way to test a neighbour at (`r + dr`, `c + dc`) in the neighbour method?

- (A) `m[r + dr][c + dc] == 1 && inBounds(m, r + dr, c + dc)`
- (B) `inBounds(m, r + dr, c + dc) && m[r + dr][c + dc] == 1`
- (C) `inBounds(m, r + dr, c + dc) || m[r + dr][c + dc] == 1`
- (D) `m[r + dr][c + dc] == 1`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** With `&&`, a false bounds test stops the evaluation, so the read is never attempted on an invalid cell.

- (A) reads the cell first and throws `ArrayIndexOutOfBoundsException` at an edge.
- (C) uses `||`, which evaluates the second part exactly when the bounds test is false, the unsafe case.
- (D) has no bounds check at all.
</details>

## Question 9 (constructed response · core)

Write `countInRow(int[][] m, int r, int target)`, which returns the number of elements in row `r` equal to `target`, and `allSame(int[][] m)`, which returns `true` if every element of `m` equals `m[0][0]`.

<details>
<summary>Answer and explanation</summary>

```java
public static int countInRow(int[][] m, int r, int target)
{
    int count = 0;
    for (int c = 0; c < m[r].length; c++)
    {
        if (m[r][c] == target)
        {
            count++;
        }
    }
    return count;
}

public static boolean allSame(int[][] m)
{
    for (int r = 0; r < m.length; r++)
    {
        for (int c = 0; c < m[r].length; c++)
        {
            if (m[r][c] != m[0][0])
            {
                return false;
            }
        }
    }
    return true;
}
```

For example `countInRow(data, 0, 1)` is 2 (row 0 holds 3, 1, 4, 1), and `allSame` on `{ {2, 2, 2}, {2, 2, 2} }` is `true`; on `data` it is `false`. Running both methods gives 2, `true` and `false` for those three calls.

**Suggested Marlbridge rubric (6 points)**

| Point | Award for |
|---|---|
| 1 | `countInRow`: one loop over the columns of row `r` |
| 2 | `countInRow`: counts matches with `==` and returns the count |
| 3 | `allSame`: nested loops visiting every element with correct bounds |
| 4 | `allSame`: compares each element with `m[0][0]` |
| 5 | `allSame`: returns `false` inside the loop on the first difference |
| 6 | `allSame`: returns `true` only after all loops finish |

Do not award point 6 for `return true` inside the loop.
</details>

## Question 10 (constructed response · stretch)

(a) Write `reverseColumn(int[][] m, int c)`, which reverses the order of the elements of column `c` in place.

(b) Column 1 of a 3-row table is `1, 9, 5` from top to bottom. Give the column after the call and the number of swaps performed, and explain why only that many swaps are needed.

<details>
<summary>Answer and explanation</summary>

(a)

```java
public static void reverseColumn(int[][] m, int c)
{
    for (int r = 0; r < m.length / 2; r++)
    {
        int other = m.length - 1 - r;
        int tmp = m[r][c];
        m[r][c] = m[other][c];
        m[other][c] = tmp;
    }
}
```

(b) The column becomes `5, 9, 1`, and there is one swap, since `3 / 2` is 1 (run and confirmed). Each swap fixes two elements (one at each end), so only half the elements need to be the first element of a swap; the middle element of an odd-length column stays in place. Swapping for the whole length would reverse the column twice and restore it.

**Suggested Marlbridge rubric (5 points)**

| Point | Award for |
|---|---|
| 1 | Loop over rows runs only up to `m.length / 2` |
| 2 | Computes the mirror row as `m.length - 1 - r` |
| 3 | Swaps using a temporary variable (or equivalent) so no value is lost |
| 4 | Only column `c` is changed; other columns untouched |
| 5 | Part (b): `5, 9, 1`, one swap, and the half-length explanation |
</details>

## How did you do?

Questions 1 to 8 are one mark each. If you slipped on a region or a bound, re-read the matching section of the [Topic 4.13 study guide](/advanced-course-resources/computer-science-a/4-13-implementing-2d-array-algorithms-study-guide/); then tick off the [checklist](/advanced-course-resources/computer-science-a/4-13-implementing-2d-array-algorithms-checklist/).
