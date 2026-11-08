---
resourceId: "mb-ap-csa-4.11-study-guide"
title: "2D Array Creation and Access: Study Guide (Computer Science A 4.11)"
description: "How to create and access a Java 2D array: new with two sizes, initializer lists, default values, [row][col] indexing, length of rows and columns, rows as 1D arrays, and index errors."
course: "computer-science-a"
unit: 4
topics: ["4.11"]
resourceType: "study-guide"
prerequisites:
  - "One-dimensional arrays: creation, indexing and length (Topic 4.3)"
  - "Default values of int, double, boolean and reference types (Topic 4.3)"
  - "Reference variables and aliases (Topics 1.12 and 1.13)"
learningObjectives:
  - "Create a 2D array with new and with an initializer list, and state the default values of its elements"
  - "Read and change elements with [row][col] and use length correctly for the number of rows and columns"
  - "Explain that a 2D array is an array of 1D arrays and that arr[r] is a row"
  - "Predict ArrayIndexOutOfBoundsException and NullPointerException on 2D arrays"
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.11-revision-notes", "mb-ap-csa-4.11-practice", "mb-ap-csa-4.11-checklist"]
next: "mb-ap-csa-4.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "A 2D array is an array of arrays: arr[r][c] means the element at column c of the row array arr[r]. For the exam, the first index is the row and the second is the column."
  - "new int[rows][cols] creates every element with the default value (0, 0.0, false or null); an initializer list such as { {1, 2, 3}, {4, 5, 6} } lists the rows."
  - "Rows are arr.length and columns are arr[0].length; the size is fixed at creation and cannot change."
  - "arr[r] is a single row (a 1D array) and is a reference, so assigning it to another variable creates an alias; a bad index throws ArrayIndexOutOfBoundsException."
faqs:
  - question: "Is the first index the row or the column?"
    answer: "For the exam the first index is the row and the second is the column: arr[row][col]. Picture rows going across the page and columns going down."
  - question: "How do I find the number of rows and columns?"
    answer: "The number of rows is arr.length. The number of columns is arr[0].length, the length of any one row. Rows and columns are written the same way for every rectangular 2D array."
  - question: "What are the default values of a new 2D array?"
    answer: "Every element gets the default for its type: 0 for int, 0.0 for double, false for boolean and null for reference types such as String."
  - question: "Can the size of a 2D array change after it is created?"
    answer: "No. The numbers of rows and columns are fixed when the array is created. To get a different size you must create a new array."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## From a list to a table

A one-dimensional array holds a list of values. Many real data sets are tables: the seats in a cinema (rows and seat numbers), the pixels of an image (rows and columns), a game board, a week-by-week timetable. A **two-dimensional (2D) array** holds a table. Every element is found with **two** numbers: which row, then which column.

The key idea from Java's point of view is that a 2D array is stored as an **array of arrays**. The outer array has one slot for each row. Each slot holds a reference to an ordinary one-dimensional array: the row itself. Because of this, almost everything you know about 1D arrays carries over: zero-based indexes, a fixed size set at creation, and the exception when an index is out of range.

For the exam, `arr[first][second]` means: `first` is the **row** index and `second` is the **column** index. The course covers rectangular arrays, in which every row has the same length; non-rectangular ("jagged") arrays are outside the scope of the course and exam.

## Picturing it

Figure 1 shows `int[][] m = { {1, 2, 3}, {4, 5, 6} };` as a grid. Figure 2 shows how Java stores it.

<figure>
<svg viewBox="0 0 270 150" role="img" aria-labelledby="grid411-t grid411-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="grid411-t">The 2D array m with two rows and three columns</title>
<desc id="grid411-d">A table of two rows and three columns. Row 0 holds 1, 2, 3 and row 1 holds 4, 5, 6. Columns are labelled col 0, col 1 and col 2 and rows row 0 and row 1. The cell in row 1, column 2, holding 6, has a thick border: it is m[1][2].</desc>
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
<rect x="180" y="80" width="60" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="210.0" y="105.0" text-anchor="middle" font-size="15" fill="#1d2b44">6</text>
</svg>
<figcaption>Figure 1. int[][] m = { {1, 2, 3}, {4, 5, 6} } drawn as a grid. The first index picks the row and the second picks the column, so the highlighted cell is m[1][2], which holds 6. m.length is 2 (rows) and m[0].length is 3 (columns).</figcaption>
</figure>

<figure>
<svg viewBox="0 0 520 220" role="img" aria-labelledby="mem411-t mem411-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mem411-t">A 2D array stored as an array of arrays</title>
<desc id="mem411-d">On the left, a variable m holds a reference drawn as an arrow to an outer array with two slots, index 0 and index 1. The slot at index 0 has an arrow to a row array holding 1, 2, 3. The slot at index 1 has an arrow to a second row array holding 4, 5, 6. A note says each row is its own one-dimensional array, so m[1] is the array 4, 5, 6 and m[1][2] is the 6 in it.</desc>
<rect width="520" height="220" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="10" y="80" width="50" height="34"/>
<rect x="130" y="50" width="70" height="34"/><rect x="130" y="84" width="70" height="34"/>
<rect x="300" y="40" width="48" height="34"/><rect x="348" y="40" width="48" height="34"/><rect x="396" y="40" width="48" height="34"/>
<rect x="300" y="110" width="48" height="34"/><rect x="348" y="110" width="48" height="34"/><rect x="396" y="110" width="48" height="34"/>
<line x1="60" y1="97" x2="124" y2="97"/><path d="M116 91 L126 97 L116 103"/>
<line x1="200" y1="67" x2="294" y2="57"/><path d="M286 52 L296 57 L286 62"/>
<line x1="200" y1="101" x2="294" y2="127"/><path d="M286 119 L296 127 L286 133"/>
</g>
<g fill="#1d2b44" font-size="14" text-anchor="middle">
<text x="35" y="102">m</text>
<text x="165" y="72">ref</text><text x="165" y="106">ref</text>
<text x="324" y="62">1</text><text x="372" y="62">2</text><text x="420" y="62">3</text>
<text x="324" y="132">4</text><text x="372" y="132">5</text><text x="420" y="132">6</text>
<text x="165" y="136" font-size="12">outer array (rows)</text>
<text x="165" y="42" font-size="12">index 0 / index 1 below</text>
<text x="372" y="165" font-size="12">row arrays: m[0] and m[1]</text>
<text x="260" y="205" font-size="12">m[1][2] means: take the array m[1], then its element 2 (the 6).</text>
</g>
</svg>
<figcaption>Figure 2. A 2D array is an array of arrays. The outer array holds one reference per row; each reference leads to a one-dimensional array holding that row's values.</figcaption>
</figure>

Notice three facts that the pictures make clear.

- The grid has **2 rows** and **3 columns**.
- `m[1]` is the second row, the array `{4, 5, 6}`.
- `m[1][2]` is the element at index 2 of that row array, which is 6.

## Creating a 2D array

There are two ways.

**With `new` and two sizes.**

```java
int[][] grid = new int[3][4];     // 3 rows, 4 columns
```

All 12 elements are created with the **default value** for the element type: 0 for `int`, 0.0 for `double`, `false` for `boolean` and `null` for any reference type such as `String`. Printing a new `int[3][4]` gives twelve 0s; a new `boolean[2][3]` gives `false` and a new `double[2][2]` gives `0.0`.

**With an initializer list.** A list of lists, one inner list per row:

```java
int[][] m = { {1, 2, 3}, {4, 5, 6} };
```

The size comes from the lists. Here that is 2 rows of 3.

The size of the array is **fixed when it is created** and cannot change. A 2D array can hold primitive values or object references.

## Reading, writing and measuring

| Expression | Meaning | For `m` above |
|---|---|---|
| `m[r][c]` | element at row `r`, column `c` | `m[1][2]` is 6 |
| `m[r][c] = v;` | change that element | |
| `m.length` | number of rows | 2 |
| `m[0].length` | number of columns (the length of a row) | 3 |
| `m[r]` | the whole row `r`, as a 1D array | `m[1]` is `{4, 5, 6}` |
| `m[r].length` | length of row `r` | 3 |

The valid row indices run from 0 to `m.length - 1`. The valid column indices run from 0 to `m[0].length - 1`. Any other index throws an **`ArrayIndexOutOfBoundsException`**. In the runs `m[2][0]`, `m[0][3]` and `m[0][-1]` each threw `java.lang.ArrayIndexOutOfBoundsException`.

An easy mistake is to swap the two sizes. If you remember "rows first", then `grid.length` is the first number in `new int[3][4]`, and `grid[0].length` is the second. For `grid` the program printed `3 4 4`: three rows, and each of rows 0 and 2 has length 4.

## Rows are references

Because `m[1]` is a reference to a 1D array, assigning it to another variable creates an **alias**, not a copy.

```java
int[] row = m[1];
row[0] = 40;
// m[1][0] is now 40
```

Running this prints `m` as `1 2 3 | 40 5 6 |`. The same fact lets you swap two rows by swapping their references:

```java
int[] tmp = n[0];
n[0] = n[1];
n[1] = tmp;
```

On `{ {1, 2, 3}, {4, 5, 6} }` this gave `4 5 6 | 1 2 3 |`. Likewise, `int[][] alias = nn;` makes both variables refer to the same 2D array, so a change through one is seen through the other (changing `alias[0][0]` to 100 made `nn[0][0]` print 100).

## Worked example 1: creating and filling a grid

**Task.** Trace the code and show `grid` at the end.

```java
int[][] grid = new int[3][4];
grid[1][2] = 7;
grid[2][0] = grid[1][2] + 1;
```

**Step 1.** `new int[3][4]` creates 3 rows of 4 zeros.

| | col 0 | col 1 | col 2 | col 3 |
|---|---|---|---|---|
| row 0 | 0 | 0 | 0 | 0 |
| row 1 | 0 | 0 | 0 | 0 |
| row 2 | 0 | 0 | 0 | 0 |

**Step 2.** `grid[1][2] = 7;` sets row 1, column 2 to 7.

**Step 3.** `grid[2][0] = grid[1][2] + 1;` reads the 7, adds 1 and stores 8 in row 2, column 0.

| | col 0 | col 1 | col 2 | col 3 |
|---|---|---|---|---|
| row 0 | 0 | 0 | 0 | 0 |
| row 1 | 0 | 0 | **7** | 0 |
| row 2 | **8** | 0 | 0 | 0 |

**Check.** `grid.length` is 3, `grid[0].length` is 4. The run printed `3 4 4` and the grid `0 0 0 0 | 0 0 7 0 | 8 0 0 0 |`, which matches the table.

## Worked example 2: a seating chart of Strings

**Task.** A hall has 3 rows of 4 seats. Create the chart, seat "Ana" in row 0, seat 1 and "Raj" in row 2, seat 3, and report how many seats are taken out of how many.

```java
String[][] seats = new String[3][4];
seats[0][1] = "Ana";
seats[2][3] = "Raj";
int taken = 0;
for (int r = 0; r < seats.length; r++)
{
    for (int c = 0; c < seats[r].length; c++)
    {
        if (seats[r][c] != null)
        {
            taken++;
        }
    }
}
System.out.println(taken + " of " + seats.length * seats[0].length);
```

**Reasoning.**

1. A `String[][]` holds references, so every element starts as **`null`**, meaning "no object". An empty seat is `null`, not `""`.
2. The nested loop visits every seat. The outer loop uses `seats.length` (rows); the inner loop uses `seats[r].length` (columns of row `r`). Topic 4.12 studies these loops in detail.
3. Only two seats are non-null, so `taken` is 2.
4. The total is `seats.length * seats[0].length` = 3 * 4 = 12.

The output was `2 of 12`.

**Why `!= null` and not `.equals`.** Calling a method on a `null` element throws a `NullPointerException`. Running `names[0][0].length()` on a new `String[2][2]` threw `java.lang.NullPointerException`. Test for `null` with `==` or `!=` before calling methods on an element.

## Common misconceptions

- **"The first index is the column."** For the exam it is the row: `arr[row][col]`.
- **"`arr.length` is the total number of elements."** It is the number of rows only. The total is `arr.length * arr[0].length`.
- **"`arr[0].length` is the number of rows."** It is the number of columns.
- **"A new `String[][]` contains empty Strings."** It contains `null`.
- **"`arr[r]` copies the row."** It is a reference to the same row array.
- **"A 2D array can be resized."** The size is fixed when it is created.
- **"A valid column index is `arr.length - 1`."** That is the last valid row index, unless the table happens to be square.

## Where this leads

Next, Topic 4.12 traverses 2D arrays with nested loops in row-major and column-major order; Topic 4.13 applies the standard algorithms (sum, maximum, count, shift) to rows, columns and whole tables; and 2D arrays also appear in the free-response section of the exam. Practise with the [Topic 4.11 practice questions](/advanced-course-resources/computer-science-a/4-11-2d-array-creation-access-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/4-11-2d-array-creation-access-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/4-11-2d-array-creation-access-checklist/). Next: the [Topic 4.12 study guide on 2D array traversals](/advanced-course-resources/computer-science-a/4-12-2d-array-traversals-study-guide/).
