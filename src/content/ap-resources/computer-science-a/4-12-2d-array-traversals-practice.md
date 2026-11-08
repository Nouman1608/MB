---
resourceId: "mb-ap-csa-4.12-practice"
title: "2D Array Traversals: Practice Questions (Computer Science A 4.12)"
description: "Ten original questions on 2D array traversals: visiting orders, enhanced for limits, bound errors, formula-filled grids, snake order, plus row-sum and transpose coding tasks."
course: "computer-science-a"
unit: 4
topics: ["4.12"]
resourceType: "practice-questions"
prerequisites:
  - "Creating and indexing 2D arrays (Topic 4.11)"
  - "Nested for loops (Topic 2.11) and enhanced for loops over a 1D array (Topic 4.4)"
  - "Accumulating a total or count in a loop (Topic 4.5)"
learningObjectives:
  - "Predict the output of traversals"
  - "Find bound errors"
  - "Write traversals that build sums and new arrays"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.12-study-guide", "mb-ap-csa-4.12-revision-notes", "mb-ap-csa-4.12-checklist"]
next: "mb-ap-csa-4.12-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Ten questions: eight multiple choice, two constructed response."
  - "Every fragment was compiled and run; the printed output quoted comes from those runs."
  - "Rubrics are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Every code fragment was compiled and run, and the printed output quoted comes from those runs.

## Question 1 (multiple choice · foundation)

`int[][] m = { {1, 2, 3}, {4, 5, 6} };` What does this print?

```java
for (int r = 0; r < m.length; r++)
{
    for (int c = 0; c < m[r].length; c++)
    {
        System.out.print(m[r][c] + " ");
    }
}
```

- (A) `1 4 2 5 3 6`
- (B) `1 2 3 4 5 6`
- (C) `3 2 1 6 5 4`
- (D) `1 2 3`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The outer loop is over rows, the inner over columns, so each row is printed left to right in turn: row-major order.

- (A) is column-major order, which needs the loops nested the other way.
- (C) would need the column loop to count down.
- (D) prints one row only.
</details>

## Question 2 (multiple choice · core)

For the same `m`, what does this print?

```java
for (int c = 0; c < m[0].length; c++)
{
    for (int r = 0; r < m.length; r++)
    {
        System.out.print(m[r][c] + " ");
    }
}
```

- (A) `1 2 3 4 5 6`
- (B) `1 4 2 5 3 6`
- (C) `1 4 2 5`
- (D) `4 1 5 2 6 3`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The outer loop picks a column and the inner loop goes down it: column 0 gives 1, 4; column 1 gives 2, 5; column 2 gives 3, 6.

- (A) is row-major.
- (C) stops after two columns; the outer bound is `m[0].length` which is 3.
- (D) goes up each column.
</details>

## Question 3 (multiple choice · core)

`int[][] m2 = { {1, 2, 3}, {4, 5, 6} };` What happens when this loop runs?

```java
for (int r = 0; r < m2[0].length; r++)
{
    for (int c = 0; c < m2.length; c++)
    {
        System.out.print(m2[r][c] + " ");
    }
}
```

- (A) It prints `1 2 3 4 5 6`
- (B) It prints `1 2 4 5` and then throws an `ArrayIndexOutOfBoundsException`
- (C) It prints nothing
- (D) It does not compile

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The row bound `m2[0].length` is 3 although there are only 2 rows. Rows 0 and 1 print their first two columns (the column bound is `m2.length`, 2), then `r` = 2 asks for a row that does not exist (run and confirmed).

- (A) needs correct bounds.
- (C) The loops do execute.
- (D) The code compiles; the error occurs at run time.
</details>

## Question 4 (multiple choice · core)

Which header correctly begins a nested enhanced for loop over `int[][] m`?

- (A) `for (int row : m) for (int v : row)`
- (B) `for (int[] row : m) for (int v : row)`
- (C) `for (int[] row : m) for (int[] v : row)`
- (D) `for (int r : m.length) for (int c : m[0].length)`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Each element of `m` is a whole row, an `int[]`; each element of a row is an `int`.

- (A) The outer variable cannot be an `int`; the elements of `m` are arrays.
- (C) The inner variable must be the element type, `int`.
- (D) `m.length` is a number, not something you can iterate over.
</details>

## Question 5 (multiple choice · core)

What is printed?

```java
int[][] m = { {1, 2, 3}, {4, 5, 6} };
for (int[] row : m)
{
    for (int v : row)
    {
        v = 0;
    }
}
System.out.println(m[0][0] + m[1][2]);
```

- (A) 0
- (B) 7
- (C) 6
- (D) 1

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `v` is a copy of each element, so setting it to 0 does not change `m`. `m[0][0]` is still 1 and `m[1][2]` is still 6: 1 + 6 = 7 (run and confirmed: `1 2 3 | 4 5 6 |`).

- (A) would be the result if the array had been cleared.
- (C) and (D) are single elements, not their sum.
</details>

## Question 6 (multiple choice · core)

`m` is `{ {1, 2, 3}, {4, 5, 6} }`. After the loop, what is the sum of all elements of `m`?

```java
for (int[] row : m)
{
    row[0] = 0;
}
```

- (A) 21
- (B) 16
- (C) 0
- (D) 12

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `row` refers to the real row array, so `row[0] = 0` changes the array: it becomes `{ {0, 2, 3}, {0, 5, 6} }`, which sums to 5 + 11 = 16 (run and confirmed: `0 2 3 | 0 5 6 |`).

- (A) is the sum before the loop.
- (C) clears all elements, which the loop does not.
- (D) clears one row only.
</details>

## Question 7 (multiple choice · core)

For `sq = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} }`, what does this print?

```java
for (int r = 0; r < sq.length; r++)
{
    if (r % 2 == 0)
    {
        for (int c = 0; c < sq[r].length; c++) { System.out.print(sq[r][c] + " "); }
    }
    else
    {
        for (int c = sq[r].length - 1; c >= 0; c--) { System.out.print(sq[r][c] + " "); }
    }
}
```

- (A) `1 2 3 4 5 6 7 8 9`
- (B) `1 2 3 6 5 4 7 8 9`
- (C) `3 2 1 4 5 6 9 8 7`
- (D) `1 4 7 2 5 8 3 6 9`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Rows 0 and 2 (even) go left to right; row 1 (odd) goes right to left (run and confirmed).

- (A) is plain row-major order.
- (C) reverses the even rows and not the odd ones.
- (D) is column-major order.
</details>

## Question 8 (multiple choice · stretch)

What is the value of `g[1][2]`, and what does the table look like?

```java
int[][] g = new int[2][3];
for (int r = 0; r < g.length; r++)
{
    for (int c = 0; c < g[0].length; c++)
    {
        g[r][c] = r * 3 + c;
    }
}
```

- (A) 5; rows `0 1 2` and `3 4 5`
- (B) 3; rows `0 1 2` and `1 2 3`
- (C) 7; rows `0 3 6` and `1 4 7`
- (D) 2; rows `0 1 2` and `0 1 2`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** For row 1, column 2: 1 * 3 + 2 = 5. Row 0 is 0, 1, 2 and row 1 is 3, 4, 5 (run and confirmed).

- (B) would result from `r + c`.
- (C) would result from `r + c * 3`.
- (D) ignores `r` in the formula.
</details>

## Question 9 (constructed response · core)

Write `rowSums(int[][] m)`, which returns a one-dimensional array in which element `r` is the sum of row `r` of the rectangular array `m`.

<details>
<summary>Answer and explanation</summary>

```java
public static int[] rowSums(int[][] m)
{
    int[] sums = new int[m.length];
    for (int r = 0; r < m.length; r++)
    {
        for (int c = 0; c < m[r].length; c++)
        {
            sums[r] += m[r][c];
        }
    }
    return sums;
}
```

For `{ {3, 1, 4, 1}, {5, 9, 2, 6}, {5, 3, 5, 8} }` it returns `{9, 22, 21}` (run and confirmed).

**Suggested Marlbridge rubric (4 points)**

| Point | Award for |
|---|---|
| 1 | Creates a result array of length `m.length` |
| 2 | Nested loops visiting every row and every column with correct bounds |
| 3 | Adds `m[r][c]` into `sums[r]` (row index first) |
| 4 | Returns the array |

Alternatives: a nested enhanced for loop with a separate row counter, or a local total stored after each row, are acceptable.
</details>

## Question 10 (constructed response · stretch)

(a) Write `transpose(int[][] m)`, which returns a new 2D array whose rows are the columns of `m`.

(b) For `m` = `{ {1, 2, 3}, {4, 5, 6} }`, state the dimensions and contents of the result.

<details>
<summary>Answer and explanation</summary>

(a)

```java
public static int[][] transpose(int[][] m)
{
    int[][] t = new int[m[0].length][m.length];
    for (int r = 0; r < m.length; r++)
    {
        for (int c = 0; c < m[0].length; c++)
        {
            t[c][r] = m[r][c];
        }
    }
    return t;
}
```

(b) The result has 3 rows and 2 columns: `{ {1, 4}, {2, 5}, {3, 6} }` (run and confirmed: `3x2 1 4 | 2 5 | 3 6 |`).

**Suggested Marlbridge rubric (5 points)**

| Point | Award for |
|---|---|
| 1 | New array created with dimensions swapped: `m[0].length` rows and `m.length` columns |
| 2 | Visits every element of `m` with correct bounds |
| 3 | Copies with swapped indices: `t[c][r] = m[r][c]` |
| 4 | Returns the new array and does not alter `m` |
| 5 | Part (b): 3 by 2 with the correct contents |

Do not award point 1 for `new int[m.length][m[0].length]`: that size is wrong unless the array is square.
</details>

## How did you do?

Questions 1 to 8 are one mark each. If you slipped on bounds or on enhanced loop types, re-read the matching sections of the [Topic 4.12 study guide](/advanced-course-resources/computer-science-a/4-12-2d-array-traversals-study-guide/); then tick off the [checklist](/advanced-course-resources/computer-science-a/4-12-2d-array-traversals-checklist/).
