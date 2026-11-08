---
resourceId: "mb-ap-csa-4.13-study-guide"
title: "Implementing 2D Array Algorithms: Study Guide (Computer Science A 4.13)"
description: "How to implement the standard 2D array algorithms in Java: maximum, sum, counting, any and all tests, duplicates, rotating and reversing rows and columns, neighbour checks and bounds, with traces."
course: "computer-science-a"
unit: 4
topics: ["4.13"]
resourceType: "study-guide"
prerequisites:
  - "Traversing 2D arrays in row-major and column-major order (Topic 4.12)"
  - "The 1D array and ArrayList algorithms (Topics 4.5 and 4.10)"
  - "Boolean expressions with && and || (Topic 2.5)"
learningObjectives:
  - "Adapt the standard algorithms (maximum or minimum, sum or average, count, any, all, duplicates, consecutive pairs) to a whole 2D array, one row, one column or a subsection"
  - "Write algorithms that shift, rotate or reverse a row or a column in place"
  - "Write a neighbour count that stays inside the array, using a bounds check"
  - "Trace each algorithm on a given table and choose correct loop bounds"
skills: ["2", "3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.13-revision-notes", "mb-ap-csa-4.13-practice", "mb-ap-csa-4.13-checklist"]
next: "mb-ap-csa-4.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "A 2D algorithm is a 1D algorithm whose loops are fixed on a row (loop over c), a column (loop over r) or both (nested loops for a whole table)."
  - "Start a maximum or minimum from an element that exists (such as m[0][0]); keep separate accumulators per row when you need a result for each row."
  - "To rotate or reverse a row or column in place, save the element that would be overwritten first, or swap pairs for half the length."
  - "Check bounds before reading a neighbour: test the row and column are inside the array, then read the cell."
faqs:
  - question: "How is a row algorithm different from a table algorithm?"
    answer: "A row algorithm fixes the row index and loops only over the columns of that row. A table algorithm uses nested loops to cover every row and column. The pattern inside the loop (maximum, sum, count and so on) is the same."
  - question: "Why do I save the first element before rotating a row?"
    answer: "Shifting overwrites elements. If the first element is overwritten before you copy it, its value is lost. Save it in a variable, shift the rest, then put it at the other end."
  - question: "How do I avoid going out of bounds when checking neighbours?"
    answer: "Test that the neighbour's row is at least 0 and less than the number of rows, and that its column is at least 0 and less than the number of columns, before reading the cell. Put the bounds test before the read in an && expression."
  - question: "Which index goes first when I search a column?"
    answer: "The row index is always first: m[r][c]. When you search a column, c stays fixed and r changes in the loop."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## One idea, three shapes

You already know the standard list algorithms from Topics 4.5 and 4.10. For a 2D array the course lists the same family, applied to **the whole array or to a designated row, column or other subsection**:

- find a minimum or maximum value;
- compute a sum or average;
- decide whether **at least one** element has a property;
- decide whether **all** elements have a property;
- **count** the elements that have a property;
- access **consecutive pairs** of elements;
- detect **duplicates**;
- **shift or rotate** the elements of a row (left or right) or a column (up or down);
- **reverse** the elements of a row or a column.

The only new skill is deciding which loops to write. There are three shapes.

| Region | Loops | Fixed index |
|---|---|---|
| One row `r` | one loop over `c` from 0 to `m[r].length - 1` | `r` |
| One column `c` | one loop over `r` from 0 to `m.length - 1` | `c` |
| Whole table | nested loops over `r` and `c` | none |

If you want one answer **per row** (a list of row sums, say), put the accumulator inside the outer loop so it restarts for each row, or store results in an array indexed by row.

## Maximum, minimum and where it sits

```java
public static int maxAll(int[][] m)
{
    int max = m[0][0];
    for (int r = 0; r < m.length; r++)
    {
        for (int c = 0; c < m[r].length; c++)
        {
            if (m[r][c] > max)
            {
                max = m[r][c];
            }
        }
    }
    return max;
}

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

The starting value is an element that really exists (`m[0][0]`, or `m[0][c]` for a column), for the same reason as in a list: starting at 0 fails when all values are negative. For `data = { {3, 1, 4, 1}, {5, 9, 2, 6}, {5, 3, 5, 8} }`: `maxAll(data)` is 9, `maxInCol(data, 1)` is 9, and the maximum of row 2 (a row version loops over `c`) is 8. All three were run.

## Counting, any, all, pairs and duplicates

**Count in a region.** Counting the values greater than 4 in the whole of `data` gives 6 (5, 9, 6, 5, 5 and 8). The method is a table traversal with `if (v > 4) count++`.

**All.** `return false` as soon as one element fails; `return true` after both loops. In a nested loop the `return` inside the inner loop leaves the whole method, which is exactly what you want:

```java
public static boolean allPositive(int[][] m)
{
    for (int[] row : m)
    {
        for (int v : row)
        {
            if (v <= 0)
            {
                return false;
            }
        }
    }
    return true;
}
```

It returned `true` for `data` and `false` for `{ {1, 2}, {0, 3} }`. A mistake is to put `return true` after the first row instead of after the loops.

**Consecutive pairs.** Pairs within a row use `c < m[r].length - 1` so that `c + 1` is valid. Counting increases along every row of `data` (a pair counts when the left value is smaller):

| Row | Pairs | Increases |
|---|---|---|
| 0: 3, 1, 4, 1 | 3<1 no, 1<4 yes, 4<1 no | 1 |
| 1: 5, 9, 2, 6 | 5<9 yes, 9<2 no, 2<6 yes | 2 |
| 2: 5, 3, 5, 8 | 5<3 no, 3<5 yes, 5<8 yes | 2 |

The total is 5, matching the run.

**Duplicates in a row.** Use the nested-loop idea of Topic 4.10 on a single row: `for i`, `for j = i + 1`, compare `m[r][i]` with `m[r][j]`. For `data`, row 0 (3, 1, 4, 1) has a duplicate, row 1 (5, 9, 2, 6) does not, and row 2 (5, 3, 5, 8) does.

## Worked example 1: which row has the largest sum?

**Task.** Return the index of the row of `data` with the largest sum. If two rows tie, return the first.

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

**Trace.**

| `r` | `sum` (reset to 0 at the start of each row) | `sum > bestSum`? | `best` | `bestSum` |
|---|---|---|---|---|
| (start) | | | 0 | -1 |
| 0 | 3 + 1 + 4 + 1 = 9 | 9 > -1, yes | 0 | 9 |
| 1 | 5 + 9 + 2 + 6 = 22 | 22 > 9, yes | 1 | 22 |
| 2 | 5 + 3 + 5 + 8 = 21 | 21 > 22, no | 1 | 22 |

The method returns 1 (run and confirmed). Two details matter. `int sum = 0;` is **declared inside** the outer loop, so each row starts again from zero; if it were declared before the loop, the sums would run on (9, 31, 52) and the last row would always win. And the strict `>` keeps the first row on a tie.

## Worked example 2: rotate a row, reverse a column

**Rotate row `r` left.** Figure 1 shows the idea for one row.

<figure>
<svg viewBox="0 0 340 120" role="img" aria-labelledby="rot413-t rot413-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rot413-t">Rotating row 2 left by one place</title>
<desc id="rot413-d">A row of four boxes holding 5, 3, 5, 8 at column indices 0 to 3. The box at column 0 is marked saved first. The text in the caption says its value is saved in a variable, the other values are copied one place left, and the saved value is placed in the last column, giving 3, 5, 8, 5.</desc>
<rect width="340" height="120" fill="#ffffff"/>
<text x="30" y="18" font-size="13" fill="#1d2b44" font-weight="bold">Row 2 before the rotation</text>
<rect x="30" y="34" width="70" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="65.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">5</text>
<text x="65.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">col 0</text>
<rect x="100" y="34" width="70" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="135.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">3</text>
<text x="135.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">col 1</text>
<rect x="170" y="34" width="70" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="205.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">5</text>
<text x="205.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">col 2</text>
<rect x="240" y="34" width="70" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="275.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">8</text>
<text x="275.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">col 3</text>
<text x="65.0" y="112" text-anchor="middle" font-size="12" fill="#1d2b44" font-weight="bold">save 5</text>
</svg>
<figcaption>Figure 1. Rotating a row left: save the first element, copy each later element one place to the left (column c gets the value from column c + 1, for c from 0 to length - 2), then put the saved value in the last column. The row 5, 3, 5, 8 becomes 3, 5, 8, 5.</figcaption>
</figure>

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

Trace for row 2 of `data`, which is `5, 3, 5, 8`: `first` = 5. `c` = 0 gives `3, 3, 5, 8`; `c` = 1 gives `3, 5, 5, 8`; `c` = 2 gives `3, 5, 8, 8`; the last statement puts 5 at the end: `3, 5, 8, 5`. The run printed `3 5 8 5` for that row.

**Why save `first`.** Without the saved variable, the loop overwrites column 0 with column 1 and the original value is gone. Running that bug on the row `{1, 2, 3}` prints `2 3 3`, losing the 1.

**Reverse column `c`.** Swap the top and bottom elements of the column working inwards, for the first half of the rows:

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

After the rotation above, `data` is `3 1 4 1 | 5 9 2 6 | 3 5 8 5 |` (only row 2 changed). Column 1 therefore reads `1, 9, 5` from top to bottom. Reversing it gives `5, 9, 1`, and the table becomes `3 5 4 1 | 5 9 2 6 | 3 1 8 5 |`, which is exactly what the run printed.

For three rows `m.length / 2` is 1, so only one swap (top with bottom) happens and the middle row stays where it is.

## Neighbours and bounds

Many tasks examine the cells around a given cell: counting mines, live cells or matching colours. Walk through the offsets -1, 0 and 1 for the row and the column, skip the cell itself and **check the bounds before reading**:

```java
public static boolean inBounds(int[][] m, int r, int c)
{
    return r >= 0 && r < m.length && c >= 0 && c < m[0].length;
}

public static int countNeighbours(int[][] m, int r, int c)
{
    int n = 0;
    for (int dr = -1; dr <= 1; dr++)
    {
        for (int dc = -1; dc <= 1; dc++)
        {
            if (!(dr == 0 && dc == 0) && inBounds(m, r + dr, c + dc) && m[r + dr][c + dc] == 1)
            {
                n++;
            }
        }
    }
    return n;
}
```

<figure>
<svg viewBox="0 0 270 190" role="img" aria-labelledby="nb413-t nb413-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="nb413-t">A 3 by 3 board with the cell at row 1, column 1 highlighted</title>
<desc id="nb413-d">A grid of three rows and three columns holding 0, 1, 0 in row 0; 1, 1, 0 in row 1; and 0, 0, 1 in row 2. The centre cell, row 1 column 1, holding 1, has a thick border. Its eight neighbours are the other eight cells. Three of them hold 1: row 0 column 1, row 1 column 0 and row 2 column 2.</desc>
<rect width="270" height="190" fill="#ffffff"/>
<text x="90.0" y="30" text-anchor="middle" font-size="12" fill="#1d2b44">col 0</text>
<text x="150.0" y="30" text-anchor="middle" font-size="12" fill="#1d2b44">col 1</text>
<text x="210.0" y="30" text-anchor="middle" font-size="12" fill="#1d2b44">col 2</text>
<text x="52" y="64.0" text-anchor="end" font-size="12" fill="#1d2b44">row 0</text>
<rect x="60" y="40" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="90.0" y="65.0" text-anchor="middle" font-size="15" fill="#1d2b44">0</text>
<rect x="120" y="40" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="150.0" y="65.0" text-anchor="middle" font-size="15" fill="#1d2b44">1</text>
<rect x="180" y="40" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="210.0" y="65.0" text-anchor="middle" font-size="15" fill="#1d2b44">0</text>
<text x="52" y="104.0" text-anchor="end" font-size="12" fill="#1d2b44">row 1</text>
<rect x="60" y="80" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="90.0" y="105.0" text-anchor="middle" font-size="15" fill="#1d2b44">1</text>
<rect x="120" y="80" width="60" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="150.0" y="105.0" text-anchor="middle" font-size="15" fill="#1d2b44">1</text>
<rect x="180" y="80" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="210.0" y="105.0" text-anchor="middle" font-size="15" fill="#1d2b44">0</text>
<text x="52" y="144.0" text-anchor="end" font-size="12" fill="#1d2b44">row 2</text>
<rect x="60" y="120" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="90.0" y="145.0" text-anchor="middle" font-size="15" fill="#1d2b44">0</text>
<rect x="120" y="120" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="150.0" y="145.0" text-anchor="middle" font-size="15" fill="#1d2b44">0</text>
<rect x="180" y="120" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="210.0" y="145.0" text-anchor="middle" font-size="15" fill="#1d2b44">1</text>
</svg>
<figcaption>Figure 2. The board used in the neighbour-count example. The thick cell is the one being examined (row 1, column 1). Its 8 neighbours are the cells one step away in any direction; three of them hold 1, so the count is 3.</figcaption>
</figure>

For the board in Figure 2, the neighbours of (1, 1) that hold 1 are (0, 1), (1, 0) and (2, 2), so the count is 3. For the corner (0, 0) only three neighbours exist ((0, 1), (1, 0), (1, 1)) and all hold 1, so the count is 3. For the corner (2, 2) the existing neighbours are (1, 1), (1, 2) and (2, 1), and only (1, 1) holds 1, so the count is 1. The run printed `3 3 1`.

The order inside the `if` matters: `inBounds(...)` must come **before** `m[r + dr][c + dc]`. With `&&`, if the bounds test is false the read is skipped, so no `ArrayIndexOutOfBoundsException` can occur.

## Common misconceptions

- **"A 2D algorithm needs a new idea."** It is a 1D pattern with the loops fixed on a row, a column or both.
- **"Declare the row accumulator once, before the outer loop."** Then it keeps adding across rows. Declare it inside the outer loop for a per-row result.
- **"Rotating a row is just a shifting loop."** Save the first element or it is lost.
- **"Reversing visits the whole row or column."** Visit half of it, or the reversal undoes itself.
- **"Neighbour checks can read first and test later."** The read throws before the test can help; put the bounds check first.
- **"`return true` after the first row means the table passed."** An all test returns `true` only after every row is checked.
- **"The column count is `m.length`."** It is `m[0].length`.

## Where this leads

These patterns are the heart of the 2D array free-response question, so write them from memory. Searching a 2D array (Topic 4.14) applies a linear search to each row, and the grid-neighbour idea reappears whenever a problem involves adjacent cells. Practise with the [Topic 4.13 practice questions](/advanced-course-resources/computer-science-a/4-13-implementing-2d-array-algorithms-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/4-13-implementing-2d-array-algorithms-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/4-13-implementing-2d-array-algorithms-checklist/). Next: the [Topic 4.14 study guide on searching algorithms](/advanced-course-resources/computer-science-a/4-14-searching-algorithms-study-guide/).
