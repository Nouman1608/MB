---
title: "Cambridge A Level Computer Science (9618): Arrays -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 10: Data Types and Structures"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 10.2
syllabusTopics:
  - qualification: "a-level"
    topic: "data-types-and-structures"
    subtopic: "arrays"
description: "Condensed notes on array terms, 1D and 2D arrays, nested loops, bubble sort and linear search for Cambridge AS Computer Science 9618 10.2."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **10.2 Arrays** (AS content, mainly Paper 2). The [Arrays study guide](/resources/cambridge-a-level-computer-science-9618-arrays/) has traced examples; the [Arrays practice questions](/resources/cambridge-a-level-computer-science-9618-arrays-practice/) give exam-style practice. Records, which arrays often hold, are in the [Data Types and Records revision notes](/resources/cambridge-a-level-computer-science-9618-data-types-and-records-revision-notes/).

## Key terms

| Term | Meaning |
|---|---|
| Array | Fixed number of elements of the same data type under one identifier |
| Element | One item in an array |
| Index | Position number used to access an element |
| Lower bound | Smallest valid index |
| Upper bound | Largest valid index |
| 1D array | A list; one index per element |
| 2D array | A table; two indexes (row, column) per element |

Number of elements = upper bound − lower bound + 1. `ARRAY[0:9]` has 10; `ARRAY[1:4, 1:6]` has 4 × 6 = 24.

## Choosing 1D or 2D

- One piece of information identifies a value → **1D** (score for each of 30 students).
- Two pieces identify a value → **2D** (score for each of 30 students in each of 5 tests).
- Justify a 2D choice by saying what the rows and columns represent.
- Different data types per item → array of **records**, not a 2D array.

## Declaration and access

```
DECLARE Heights : ARRAY[1:25] OF REAL
DECLARE Board : ARRAY[1:3, 1:3] OF CHAR
Heights[4] ← 1.62
Board[2, 3] ← 'X'
```

## Standard patterns

**Total and mean of a 1D array**

```
Total ← 0
FOR Index ← 1 TO 25
   Total ← Total + Heights[Index]
NEXT Index
Mean ← Total / 25
```

**Every element of a 2D array (row by row)**

```
FOR Row ← 1 TO 3
   FOR Col ← 1 TO 3
      Board[Row, Col] ← ' '
   NEXT Col
NEXT Row
```

**Row totals**: reset the total **inside** the outer loop, before the inner loop; output it **after** the inner loop.

**Largest value**: start `Max ← Heights[1]`, then compare from index 2 to the upper bound.

## Linear search

- Check elements in order from the lower bound.
- Stop when found or when the upper bound has been checked.
- Works on **unsorted** data.
- n elements: best case 1 comparison, worst case n.

```
Found ← FALSE
Index ← 1
WHILE Found = FALSE AND Index <= 25
   IF Heights[Index] = Target THEN
      Found ← TRUE
   ELSE
      Index ← Index + 1
   ENDIF
ENDWHILE
```

## Bubble sort

- Compare neighbours; swap if in the wrong order; repeat passes.
- After pass k, the k largest values are in their final places at the end.
- **Swapped flag**: stop as soon as a pass makes no swaps.
- **Shrinking pass**: each pass can check one fewer pair.
- Swap with a temporary variable:

```
Temp ← Nums[Index]
Nums[Index] ← Nums[Index + 1]
Nums[Index + 1] ← Temp
```

- Ascending uses `>`; descending uses `<`.

| n elements | Passes (worst case) | Comparisons with shrinking pass |
|---|---|---|
| 5 | 4 | 4 + 3 + 2 + 1 = 10 |
| 6 | 5 | 5 + 4 + 3 + 2 + 1 = 15 |
| 10 | 9 | 45 |

## One pass, comparison by comparison

`Nums[1:4]` holds 5, 1, 4, 2 (ascending sort).

| Pass | Compare | Swap? | Array after |
|---|---|---|---|
| 1 | 5 and 1 | Yes | 1, 5, 4, 2 |
| 1 | 5 and 4 | Yes | 1, 4, 5, 2 |
| 1 | 5 and 2 | Yes | 1, 4, 2, 5 |
| 2 | 1 and 4 | No | 1, 4, 2, 5 |
| 2 | 4 and 2 | Yes | 1, 2, 4, 5 |
| 3 | 1 and 2 | No | 1, 2, 4, 5 |

Pass 3 makes no swaps, so Swapped stays FALSE and the sort stops after 3 + 2 + 1 = 6 comparisons. Notice that 5, the largest value, reached the end in pass 1.

## Smallest value and its position

```
MinPos ← 1
FOR Index ← 2 TO 25
   IF Heights[Index] < Heights[MinPos] THEN
      MinPos ← Index
   ENDIF
NEXT Index
OUTPUT Heights[MinPos], " at position ", MinPos
```

Storing the **position** gives both the value and where it is.

## Exam traps

- Inner loop of a bubble sort goes to `Last - 1`, because it compares `Index` with `Index + 1`.
- A declaration does not set elements to zero; initialise with a loop.
- Row and column order: `Seats[Row, Col]`, not the other way round, unless the question defines it differently.
- An index outside the bounds is an error; check loop limits.
- A bubble sort pass moves the **largest** remaining value to the end (for ascending order).
- Show the whole array after each pass in trace answers.

## Self-test

1. For `DECLARE Codes : ARRAY[0:49] OF STRING`, give the lower bound, upper bound and number of elements.
2. How many elements in `ARRAY[1:5, 1:8]`?
3. A school records each student's mark in each of 6 subjects. 1D or 2D? Why?
4. Write a statement that stores 'O' in row 1, column 3 of Board.
5. Why must a row total be reset inside the outer loop?
6. Does a linear search need the data to be sorted?
7. What is the maximum number of comparisons a linear search makes on 80 elements?
8. Why is a temporary variable needed in a swap?
9. What is the purpose of the Swapped flag?
10. After the first pass of an ascending bubble sort, where is the largest value?
11. Sort 9, 4, 7 into ascending order with a bubble sort; show each pass.
12. What change makes the bubble sort sort into descending order?

**Answers**

1. 0, 49, 50.
2. 40.
3. 2D: one index for the student, one for the subject.
4. `Board[1, 3] ← 'O'`
5. So each row's total starts from 0 rather than carrying on from the previous row.
6. No: it checks every element in turn, so it works on unsorted data.
7. 80.
8. The first assignment would overwrite one value before it is copied.
9. To stop the sort when a pass makes no swaps, because the array is then sorted.
10. In the last position.
11. Pass 1: 4, 7, 9 (two swaps). Pass 2: 4, 7, 9 (no swaps), so stop.
12. Change the comparison from `>` to `<`.
