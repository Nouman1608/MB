---
resourceId: "mb-ap-csa-4.12-study-guide"
title: "2D Array Traversals: Study Guide (Computer Science A 4.12)"
description: "How to traverse a Java 2D array with nested loops: row-major and column-major order, nested enhanced for loops, custom orders such as snake and diagonals, and the bugs that cause index errors."
course: "computer-science-a"
unit: 4
topics: ["4.12"]
resourceType: "study-guide"
prerequisites:
  - "Creating and indexing 2D arrays (Topic 4.11)"
  - "Nested for loops (Topic 2.11) and enhanced for loops over a 1D array (Topic 4.4)"
  - "Accumulating a total or count in a loop (Topic 4.5)"
learningObjectives:
  - "Write nested loops that traverse a 2D array in row-major order and in column-major order"
  - "Write nested enhanced for loops and state the type of each loop variable and what assigning to it does"
  - "Use the correct bounds for rows and columns and avoid out-of-range errors on non-square arrays"
  - "Trace traversals in unusual orders (snake, diagonal) and fill an array from a formula"
skills: ["2", "3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.12-revision-notes", "mb-ap-csa-4.12-practice", "mb-ap-csa-4.12-checklist"]
next: "mb-ap-csa-4.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Row-major order uses rows in the outer loop and columns in the inner loop; column-major swaps them. The outer loop bound is arr.length for rows, and the column bound is arr[0].length (or arr[r].length)."
  - "In a nested enhanced for loop the outer variable has type int[] (a whole row) and the inner variable has type int (an element)."
  - "Assigning to the enhanced for variable does not change the array, but changing row[0] through the outer variable does, because the row is a reference."
  - "A traversal can have any defined order, such as snake or diagonal; trace it by writing each (row, column) visited."
faqs:
  - question: "What is the difference between row-major and column-major order?"
    answer: "Row-major order visits every element across a row before moving to the next row. Column-major order visits every element down a column before moving to the next column. Which one you need depends on the question, such as a row sum or a column sum."
  - question: "What type is the outer variable of a nested enhanced for loop over an int[][]?"
    answer: "It is int[], because each element of the 2D array is a whole row. The inner loop variable is int, the type of the elements in a row."
  - question: "Can I change array elements with an enhanced for loop?"
    answer: "Assigning a new value to the loop variable of an element does not change the array. You can change the contents of a row through the outer variable, such as row[0] = 0, because the row is a reference to the real array. To replace elements reliably use indexed loops."
  - question: "Why did my loop throw ArrayIndexOutOfBoundsException on a non-square array?"
    answer: "Rows and columns have different counts, and the loop bounds were probably swapped. Use arr.length for the row index and arr[0].length for the column index."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Why traversal needs two loops

A 1D array has one index, so one loop visits every element. A 2D array has two indices, so you need two loops: one to choose a row and one to choose a column. A loop inside a loop is a **nested iteration**. Because a 2D array is an array of arrays, the loops are the 1D loops you already know, one nested in the other.

Which loop goes outside decides the **order** in which elements are visited.

- **Row-major order**: the outer loop chooses a row; the inner loop runs across all columns of that row. Every element of row 0 is visited, then every element of row 1, and so on. This is the usual reading order.
- **Column-major order**: the outer loop chooses a column; the inner loop runs down all rows of that column.
- A **uniquely defined order**: any other pattern, such as every other row, a diagonal or a snake.

## Row-major and column-major with index loops

Take `int[][] m = { {1, 2, 3}, {4, 5, 6} };`, 2 rows and 3 columns.

```java
// row-major
for (int r = 0; r < m.length; r++)
{
    for (int c = 0; c < m[r].length; c++)
    {
        System.out.print(m[r][c] + " ");
    }
}
```

This prints `1 2 3 4 5 6`. Figure 1 numbers the cells in visiting order.

<figure>
<svg viewBox="0 0 270 150" role="img" aria-labelledby="rm412-t rm412-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rm412-t">Row-major visiting order on a 2 by 3 grid</title>
<desc id="rm412-d">A grid with two rows and three columns. Each cell shows the step number at which it is visited. Row 0 reads 1, 2, 3 and row 1 reads 4, 5, 6: the traversal goes across the whole of row 0, then across row 1.</desc>
<rect width="270" height="150" fill="#ffffff"/>
<text x="90.0" y="30" text-anchor="middle" font-size="12" fill="#1d2b44">col 0</text>
<text x="150.0" y="30" text-anchor="middle" font-size="12" fill="#1d2b44">col 1</text>
<text x="210.0" y="30" text-anchor="middle" font-size="12" fill="#1d2b44">col 2</text>
<text x="52" y="64.0" text-anchor="end" font-size="12" fill="#1d2b44">row 0</text>
<rect x="60" y="40" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="90.0" y="65.0" text-anchor="middle" font-size="15" fill="#1d2b44">1</text>
<rect x="120" y="40" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="150.0" y="65.0" text-anchor="middle" font-size="15" fill="#1d2b44">2</text>
<rect x="180" y="40" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="210.0" y="65.0" text-anchor="middle" font-size="15" fill="#1d2b44">3</text>
<text x="52" y="104.0" text-anchor="end" font-size="12" fill="#1d2b44">row 1</text>
<rect x="60" y="80" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="90.0" y="105.0" text-anchor="middle" font-size="15" fill="#1d2b44">4</text>
<rect x="120" y="80" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="150.0" y="105.0" text-anchor="middle" font-size="15" fill="#1d2b44">5</text>
<rect x="180" y="80" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="210.0" y="105.0" text-anchor="middle" font-size="15" fill="#1d2b44">6</text>
</svg>
<figcaption>Figure 1. Row-major order: the outer loop is over rows, the inner loop over columns. The numbers show the order in which cells are visited.</figcaption>
</figure>

```java
// column-major
for (int c = 0; c < m[0].length; c++)
{
    for (int r = 0; r < m.length; r++)
    {
        System.out.print(m[r][c] + " ");
    }
}
```

This prints `1 4 2 5 3 6` (Figure 2).

<figure>
<svg viewBox="0 0 270 150" role="img" aria-labelledby="cm412-t cm412-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cm412-t">Column-major visiting order on a 2 by 3 grid</title>
<desc id="cm412-d">A grid with two rows and three columns. Each cell shows the step number at which it is visited. Row 0 reads 1, 3, 5 and row 1 reads 2, 4, 6: the traversal goes down the whole of column 0, then column 1, then column 2.</desc>
<rect width="270" height="150" fill="#ffffff"/>
<text x="90.0" y="30" text-anchor="middle" font-size="12" fill="#1d2b44">col 0</text>
<text x="150.0" y="30" text-anchor="middle" font-size="12" fill="#1d2b44">col 1</text>
<text x="210.0" y="30" text-anchor="middle" font-size="12" fill="#1d2b44">col 2</text>
<text x="52" y="64.0" text-anchor="end" font-size="12" fill="#1d2b44">row 0</text>
<rect x="60" y="40" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="90.0" y="65.0" text-anchor="middle" font-size="15" fill="#1d2b44">1</text>
<rect x="120" y="40" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="150.0" y="65.0" text-anchor="middle" font-size="15" fill="#1d2b44">3</text>
<rect x="180" y="40" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="210.0" y="65.0" text-anchor="middle" font-size="15" fill="#1d2b44">5</text>
<text x="52" y="104.0" text-anchor="end" font-size="12" fill="#1d2b44">row 1</text>
<rect x="60" y="80" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="90.0" y="105.0" text-anchor="middle" font-size="15" fill="#1d2b44">2</text>
<rect x="120" y="80" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="150.0" y="105.0" text-anchor="middle" font-size="15" fill="#1d2b44">4</text>
<rect x="180" y="80" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="210.0" y="105.0" text-anchor="middle" font-size="15" fill="#1d2b44">6</text>
</svg>
<figcaption>Figure 2. Column-major order: the outer loop is over columns, the inner loop over rows. The same six cells are visited in a different order.</figcaption>
</figure>

Look at the two header lines. Whichever way you nest the loops, **`r` always indexes rows and `c` always indexes columns**, and in the element access the row index always comes first: `m[r][c]`. What changes is which loop is outside. The bound for `r` is the number of rows, `m.length`. The bound for `c` is the number of columns, `m[0].length` (or `m[r].length` inside a row-major loop).

**The bound error.** On a non-square array it matters which bound goes with which variable. Running a loop that used `r < m2[0].length` (3) for the rows of a 2-by-3 array prints `1 2 4 5` and then threw `java.lang.ArrayIndexOutOfBoundsException` when `r` reached 2, since there is no row 2.

## Nested enhanced for loops

```java
int sum = 0;
for (int[] row : m)
{
    for (int v : row)
    {
        sum += v;
    }
}
```

This traverses in **row-major order**. The rules:

- The **outer** loop goes through the rows, so its variable must have the type of a row, which is **`int[]`**.
- The **inner** loop goes through one row, so its variable has the type of the elements in the row, **`int`**.
- For a `String[][]` the types would be `String[]` and `String`.

The sum of `m` is 21 (run and confirmed). The enhanced loop cannot go in column-major order and gives you no row or column numbers. If you need either, use index loops.

**What can and cannot be changed.** The inner variable `v` is a copy of the element, so `v = 0;` has no effect. In the run `for (int[] row : m) for (int v : row) v = 0;` left `m` as `1 2 3 | 4 5 6 |`. The outer variable `row` is a reference to the real row, so `row[0] = 0;` **does** change the array: after `for (int[] row : m) row[0] = 0;` the array was `0 2 3 | 0 5 6 |`. To assign to every element in a reliable, readable way, use index loops: `m[r][c] = 0;`.

## Worked example 1: row sums and column sums

**Task.** For the 3-row, 4-column array `data`, compute an array of row sums and an array of column sums.

```java
int[][] data = { {3, 1, 4, 1}, {5, 9, 2, 6}, {5, 3, 5, 8} };
```

**Row sums (row-major).**

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

The result array has one slot per row, and the new `int[]` starts at zeros, so `+=` works from the first element.

| Row | Elements | Row sum |
|---|---|---|
| 0 | 3, 1, 4, 1 | 9 |
| 1 | 5, 9, 2, 6 | 22 |
| 2 | 5, 3, 5, 8 | 21 |

**Column sums (column-major).** The sums array needs one slot per column, so its length is `m[0].length`.

```java
public static int[] colSums(int[][] m)
{
    int[] sums = new int[m[0].length];
    for (int c = 0; c < m[0].length; c++)
    {
        for (int r = 0; r < m.length; r++)
        {
            sums[c] += m[r][c];
        }
    }
    return sums;
}
```

| Column | Elements | Column sum |
|---|---|---|
| 0 | 3, 5, 5 | 13 |
| 1 | 1, 9, 3 | 13 |
| 2 | 4, 2, 5 | 11 |
| 3 | 1, 6, 8 | 15 |

**Check.** The row sums add to 9 + 22 + 21 = 52 and the column sums add to 13 + 13 + 11 + 15 = 52. Both must equal the sum of the whole table. The run printed `9 22 21 / 13 13 11 15`.

## Worked example 2: filling from a formula, snake order and diagonals

**Filling.** Build a 2-row, 3-column table whose element in row `r`, column `c` is `r * 3 + c`.

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

Trace: row 0 gets 0, 1, 2; row 1 gets 3, 4, 5. The program printed `0 1 2 | 3 4 5 |` and `g[1][2]` is 5. The formula numbers the cells 0 to 5 in row-major order.

**Snake order.** Visit even rows left to right and odd rows right to left, for `int[][] sq = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };`.

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

| Row | Direction | Visited |
|---|---|---|
| 0 | left to right | 1 2 3 |
| 1 | right to left | 6 5 4 |
| 2 | left to right | 7 8 9 |

The output was `1 2 3 6 5 4 7 8 9`.

**Diagonals of a square array.** The main diagonal has equal row and column: `sq[i][i]`, giving 1 + 5 + 9 = 15. The other diagonal has `sq[i][sq.length - 1 - i]`, giving 3 + 5 + 7 = 15. These need only **one** loop, because the column is computed from the row. (Both totals matched the run.)

## Building a new 2D array

A traversal can read one array and write another. To **transpose** a table (swap rows and columns), make the new array with the sizes swapped and copy each element to the mirrored position:

```java
int[][] t = new int[m[0].length][m.length];
for (int r = 0; r < m.length; r++)
{
    for (int c = 0; c < m[0].length; c++)
    {
        t[c][r] = m[r][c];
    }
}
```

For `{ {1, 2, 3}, {4, 5, 6} }` this produced a 3-row, 2-column array `1 4 | 2 5 | 3 6 |`.

## Common misconceptions

- **"The loops can be nested either way for the same output."** The order of nesting changes the visiting order, which changes any printed output and any algorithm that depends on order.
- **"The inner bound is always `m.length`."** It is `m[r].length` or `m[0].length`, the number of columns.
- **"The outer enhanced for variable is an `int`."** It is an `int[]`, a whole row.
- **"Assigning to the enhanced for variable updates the array."** It only changes the copy.
- **"`row[0] = 0` inside the outer enhanced loop is also a copy."** It changes the real array; `row` refers to the real row.
- **"`m[c][r]` is the same as `m[r][c]`."** Reversing the indices reads a different cell, and fails on non-square arrays.
- **"A diagonal needs nested loops."** One loop with a computed column is enough.

## Where this leads

Topic 4.13 builds the standard algorithms (maximum, sum, count, any, all, duplicates, shift, reverse) on row, column and whole-table traversals. The sort and search topics that follow work on 1D collections, and a 2D linear search simply searches each row in turn. 2D traversal is also directly tested as a free-response question. Practise with the [Topic 4.12 practice questions](/advanced-course-resources/computer-science-a/4-12-2d-array-traversals-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/4-12-2d-array-traversals-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/4-12-2d-array-traversals-checklist/). Next: the [Topic 4.13 study guide on 2D array algorithms](/advanced-course-resources/computer-science-a/4-13-implementing-2d-array-algorithms-study-guide/).
