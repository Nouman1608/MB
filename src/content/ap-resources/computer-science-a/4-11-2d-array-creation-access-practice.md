---
resourceId: "mb-ap-csa-4.11-practice"
title: "2D Array Creation and Access: Practice Questions (Computer Science A 4.11)"
description: "Ten original questions on 2D arrays: sizes and defaults, reading and writing cells, rows as arrays, aliasing, swapping rows, index exceptions, plus two code-writing tasks."
course: "computer-science-a"
unit: 4
topics: ["4.11"]
resourceType: "practice-questions"
prerequisites:
  - "One-dimensional arrays: creation, indexing and length (Topic 4.3)"
  - "Default values of int, double, boolean and reference types (Topic 4.3)"
  - "Reference variables and aliases (Topics 1.12 and 1.13)"
learningObjectives:
  - "Predict values and sizes"
  - "Trace reads, writes and row aliasing"
  - "Write short methods over a 2D array"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.11-study-guide", "mb-ap-csa-4.11-revision-notes", "mb-ap-csa-4.11-checklist"]
next: "mb-ap-csa-4.11-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Ten questions: eight multiple choice, two constructed response."
  - "Every fragment was compiled and run; printed values and exception names come from those runs."
  - "Rubrics are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Every code fragment was compiled and run, and the values and exception names quoted come from those runs.

## Question 1 (multiple choice · foundation)

Which statement about `int[][] grid = new int[3][4];` is true?

- (A) `grid` has 4 rows and 3 columns, all `null`
- (B) `grid` has 3 rows and 4 columns, all 0
- (C) `grid` has 12 rows and 1 column
- (D) `grid` has 3 rows and 4 columns, none yet created

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The first size is the number of rows and the second is the number of columns. Every `int` element starts as 0.

- (A) swaps the sizes and uses the default of a reference type.
- (C) confuses the total number of elements with the number of rows.
- (D) The elements are created with default values immediately.
</details>

## Question 2 (multiple choice · core)

Given `int[][] m = { {1, 2, 3}, {4, 5, 6} };`, what is `m[1][2] + m[0][1]`?

- (A) 7
- (B) 8
- (C) 6
- (D) 9

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `m[1][2]` is row 1, column 2: 6. `m[0][1]` is row 0, column 1: 2. 6 + 2 = 8 (run and confirmed).

- (A) is 3 + 4: it reads `m[0][2]` and `m[1][0]`, which are the wrong cells.
- (C) forgets to add the second term.
- (D) uses 3 + 6, which is `m[0][2] + m[1][2]`.
</details>

## Question 3 (multiple choice · core)

For `int[][] m = new int[5][2];` which expressions are the number of rows and the number of columns?

- (A) rows `m[0].length`; columns `m.length`
- (B) rows `m.length`; columns `m[0].length`
- (C) rows `m.length`; columns `m.length`
- (D) rows `m.length()`; columns `m[0].length()`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `m.length` is the length of the outer array (rows, 5). `m[0].length` is the length of a row array (columns, 2).

- (A) swaps them.
- (C) counts rows twice.
- (D) arrays use the attribute `length`, not a method `length()`; this does not compile.
</details>

## Question 4 (multiple choice · core)

`m` is the 2-by-3 array `{ {1, 2, 3}, {4, 5, 6} }`. Which expression throws an `ArrayIndexOutOfBoundsException`?

- (A) `m[1][2]`
- (B) `m[0][0]`
- (C) `m[2][0]`
- (D) `m[1][0]`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** There are only rows 0 and 1, so row 2 does not exist (run and confirmed).

- (A) is the last element, row 1, column 2.
- (B) and (D) are valid cells.
</details>

## Question 5 (multiple choice · core)

What is printed?

```java
int[][] m = { {1, 2, 3}, {4, 5, 6} };
int[] row = m[1];
row[0] = 40;
System.out.println(m[1][0]);
```

- (A) 4
- (B) 40
- (C) 1
- (D) The code does not compile

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `m[1]` is a reference to the second row array, so `row` and `m[1]` are two names for one array. Changing `row[0]` changes `m[1][0]` (run and confirmed: `40`).

- (A) assumes `row` is a copy.
- (C) reads a cell from the wrong row.
- (D) The code compiles; `m[1]` is an `int[]`.
</details>

## Question 6 (multiple choice · core)

What does this code do?

```java
String[][] names = new String[2][2];
System.out.println(names[0][0].length());
```

- (A) Prints 0
- (B) Prints `null`
- (C) Throws a `NullPointerException`
- (D) Throws an `ArrayIndexOutOfBoundsException`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A new array of Strings holds `null` in every cell. Calling `length()` on `null` throws `NullPointerException` (run and confirmed). (Printing `names[0][0]` alone would print `null`.)

- (A) would be correct for the empty String, which is not what the cell holds.
- (B) is printed only by the cell itself, not by calling a method on it.
- (D) The indices 0 and 0 are valid.
</details>

## Question 7 (multiple choice · core)

Which declaration creates a 2D array of `double` values with 2 rows and 5 columns?

- (A) `double[][] a = new double[2][5];`
- (B) `double[2][5] a = new double[][];`
- (C) `double[][] a = new double[5][2];`
- (D) `double a[2,5];`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The first size is the row count, the second is the column count.

- (B) puts sizes in the declaration and omits them from `new`; this does not compile.
- (C) creates 5 rows and 2 columns.
- (D) is not Java syntax.
</details>

## Question 8 (multiple choice · stretch)

What is printed?

```java
int[][] n = { {1, 2, 3}, {4, 5, 6} };
int[] tmp = n[0];
n[0] = n[1];
n[1] = tmp;
System.out.println(n[0][0] + " " + n[1][2]);
```

- (A) `1 6`
- (B) `4 3`
- (C) `4 6`
- (D) `1 3`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The statements swap the two row references, so `n` becomes `{ {4, 5, 6}, {1, 2, 3} }`. Then `n[0][0]` is 4 and `n[1][2]` is 3 (run and confirmed: `4 5 6 | 1 2 3 |`).

- (A) is the original array's values.
- (C) reads two elements of the same original row.
- (D) mixes the original `n[0][0]` with the swapped `n[1][2]`.
</details>

## Question 9 (constructed response · core)

Write `getColumn(int[][] m, int c)`, which returns a new one-dimensional array holding the elements of column `c`, from the top row to the bottom. Assume `m` is rectangular and `c` is valid.

<details>
<summary>Answer and explanation</summary>

```java
public static int[] getColumn(int[][] m, int c)
{
    int[] col = new int[m.length];
    for (int r = 0; r < m.length; r++)
    {
        col[r] = m[r][c];
    }
    return col;
}
```

For `{ {1, 2, 3}, {4, 5, 6} }` and `c` = 2 the method returns an array of length 2 holding 3 and 6 (run and confirmed).

**Suggested Marlbridge rubric (4 points)**

| Point | Award for |
|---|---|
| 1 | Creates a result array whose length is the number of rows, `m.length` |
| 2 | Loops over every row index |
| 3 | Reads the element with row index first and `c` second: `m[r][c]` |
| 4 | Stores into the matching position and returns the array |

Do not award point 3 for `m[c][r]`.
</details>

## Question 10 (constructed response · stretch)

(a) Write `inBounds(int[][] m, int r, int c)`, which returns `true` only if `m[r][c]` is a valid element of the rectangular array `m`.

(b) State the value of `inBounds` for `m` = `{ {1, 2, 3}, {4, 5, 6} }` with `(1, 2)`, `(2, 0)`, `(0, 3)` and `(-1, 0)`.

<details>
<summary>Answer and explanation</summary>

(a)

```java
public static boolean inBounds(int[][] m, int r, int c)
{
    return r >= 0 && r < m.length && c >= 0 && c < m[r].length;
}
```

(b) `true`, `false`, `false`, `false` (run and confirmed). `(1, 2)` is the last cell; `(2, 0)` has row 2 of 2 rows; `(0, 3)` has column 3 of 3 columns; `(-1, 0)` has a negative row.

**Suggested Marlbridge rubric (5 points)**

| Point | Award for |
|---|---|
| 1 | Tests the row against 0 and `m.length` (strictly less than) |
| 2 | Tests the column against 0 and a column length (strictly less than) |
| 3 | The column bound uses `m[r].length` or `m[0].length`, not `m.length` |
| 4 | Row test comes before the column test so `m[r]` is never evaluated for a bad row |
| 5 | Part (b): all four results correct |

Writing `r <= m.length` is a common error and costs point 1.
</details>

## How did you do?

Questions 1 to 8 are one mark each. If you slipped on rows versus columns, re-read the creation and measuring sections of the [Topic 4.11 study guide](/advanced-course-resources/computer-science-a/4-11-2d-array-creation-access-study-guide/); then tick off the [checklist](/advanced-course-resources/computer-science-a/4-11-2d-array-creation-access-checklist/).
