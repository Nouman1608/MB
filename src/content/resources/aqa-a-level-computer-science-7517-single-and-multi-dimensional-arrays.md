---
title: "AQA A-Level Computer Science (7517): Single- and Multi-Dimensional Arrays"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.12
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "single-and-multi-dimensional-arrays-7517"
description: "Deeper guide to AQA 7517 section 4.2.1.2: designing solutions with 1-D, 2-D and n-dimensional arrays, with traced algorithms for vectors and matrices."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **4.2.1.2 Single- and multi-dimensional arrays (or equivalent)** in AQA A-Level Computer Science (7517). The specification asks you to **use arrays in the design of solutions to simple problems**. Its additional information says that a one-dimensional array is a useful way of representing a **vector**, a two-dimensional array a useful way of representing a **matrix**, and that, more generally, an **n-dimensional array is a set of elements with the same data type that are indexed by a tuple of n integers**, where a tuple is an ordered list of elements.

The [Data Structures and Arrays study guide](/resources/a-level-aqa-computer-science-data-structures-and-arrays/) explains those definitions and how to choose a dimension. This page is about **using** arrays: the standard algorithms you are expected to write and trace, with worked traces, and the errors that cost marks.

Condensed notes are in the [arrays revision notes](/resources/aqa-a-level-computer-science-7517-single-and-multi-dimensional-arrays-revision-notes/); exam-style questions are in the [arrays practice questions](/resources/aqa-a-level-computer-science-7517-single-and-multi-dimensional-arrays-practice/).

## Conventions on this page

AQA does not fix a pseudocode standard at A-level. Here arrays are **indexed from 0**, `LEN(a)` gives the number of elements, and a two-dimensional element is written `grid[row][col]`. Some languages and some exam pseudocode write `grid[row, col]` or index from 1; adapt the loop bounds to match.

"Or equivalent" in the specification means a language feature that behaves like an array, such as a Python list (or a list of lists for two dimensions), counts.

## One-dimensional arrays: the core patterns

A 1-D array holds a sequence of same-type values, each reached by one index. Almost every 1-D question uses one of four patterns.

**1. Accumulate** (total, count, average):

```
total ← 0
FOR i ← 0 TO LEN(marks) - 1
    total ← total + marks[i]
ENDFOR
average ← total / LEN(marks)
```

**2. Find the largest and its position:**

```
maxPos ← 0
FOR i ← 1 TO LEN(a) - 1
    IF a[i] > a[maxPos] THEN
        maxPos ← i
    ENDIF
ENDFOR
```

Starting from element 0, not from a value such as 0, means the algorithm works when every value is negative.

**3. Linear search with early exit:**

```
found ← FALSE
i ← 0
WHILE i < LEN(a) AND NOT found
    IF a[i] = target THEN
        found ← TRUE
    ELSE
        i ← i + 1
    ENDIF
ENDWHILE
```

If `found` is true, `i` holds the position. The condition `i < LEN(a)` ends the loop when every element has been checked, so the body never reads beyond the last element.

**4. Reverse in place by swapping:**

```
n ← LEN(a)
FOR i ← 0 TO (n DIV 2) - 1
    temp ← a[i]
    a[i] ← a[n - 1 - i]
    a[n - 1 - i] ← temp
ENDFOR
```

**Worked trace 1.** a = [4, 9, 2, 7, 5], so n = 5 and the loop runs for i = 0 and i = 1.

| i | n − 1 − i | Swap | Array after |
|---|---|---|---|
| 0 | 4 | 4 ↔ 5 | [5, 9, 2, 7, 4] |
| 1 | 3 | 9 ↔ 7 | [5, 7, 2, 9, 4] |

The middle element (2, at index 2) stays where it is. Running the loop to n − 1 instead of (n DIV 2) − 1 would swap every pair twice and leave the array unchanged, a classic logic error.

## Arrays as vectors

A 1-D array of reals is a natural representation of a vector. Adding two vectors of the same length element by element:

```
FOR i ← 0 TO LEN(u) - 1
    w[i] ← u[i] + v[i]
ENDFOR
```

The operations on vectors themselves (scaling, convex combination, dot product) belong to section 4.2.8; here the point is that a vector's entries all come from the same set, which is why an array, with its single element type, fits.

## Two-dimensional arrays: matrices

A 2-D array arranges values in rows and columns, and every element is reached by a pair of indices. The standard tool is a **nested loop**: the outer loop chooses a row, the inner loop runs along it.

**Worked example 2: row and column totals.** An invented table of sales for 3 shops (rows) over 4 quarters (columns):

| | Quarter 1 | Quarter 2 | Quarter 3 | Quarter 4 |
|---|---|---|---|---|
| Shop 0 | 12 | 15 | 9 | 20 |
| Shop 1 | 8 | 11 | 14 | 10 |
| Shop 2 | 16 | 13 | 18 | 21 |

```
FOR r ← 0 TO 2
    rowTotal ← 0
    FOR c ← 0 TO 3
        rowTotal ← rowTotal + sales[r][c]
    ENDFOR
    OUTPUT "Shop ", r, ": ", rowTotal
ENDFOR
```

Output: Shop 0: 56, Shop 1: 43, Shop 2: 68. The total is reset **inside** the outer loop, before the inner loop; resetting it outside would give running totals of 56, 99 and 167 instead.

For **column** totals, swap the roles of the loops: the outer loop runs over columns and the inner loop over rows. The column totals are 36, 39, 41 and 51, and either method gives a grand total of 167.

**Worked example 3: adding two matrices.** Matrices of the same size are added element by element, which needs both indices:

```
FOR r ← 0 TO rows - 1
    FOR c ← 0 TO cols - 1
        result[r][c] ← a[r][c] + b[r][c]
    ENDFOR
ENDFOR
```

**Searching a 2-D array.** To find whether any shop sold more than 20 in a quarter, use nested loops with a flag, and stop both loops when it becomes true (use WHILE loops, or test the flag in both conditions).

## n-dimensional arrays and tuples

Extend the idea: a 3-D array needs a tuple of three integers. A cinema chain could store seat status as `seats[screen][row][seat]`. With 3 screens, 10 rows and 12 seats per row, the array holds 3 × 10 × 12 = 360 elements. The tuple (2, 4, 7) identifies one element: screen 2, row 4, seat 7. Processing every element needs three nested loops; processing one screen needs only two, with the screen index fixed.

Keep the distinction clear: **dimensions** = how many integers in the index tuple; **size** = how many elements in total (the product of the lengths).

## Designing a solution: what examiners look for

When a question says "design a solution using an array":

1. **Declare** the array with the right number of dimensions and lengths, and say what each index means.
2. **Initialise** it if needed (for example, set every seat to "free").
3. **Use loop bounds that match** the declared lengths and the index origin.
4. **Place accumulators** where they reset at the right level of nesting.
5. **Output or return** the result in the form asked for.

## Common mistakes

- Looping to `LEN(a)` instead of `LEN(a) - 1` with 0-based indexing, reading past the end (an out-of-range error).
- Swapping the row and column indices, which reads the wrong element or goes out of range in a non-square array.
- Resetting a total in the wrong loop.
- Initialising a maximum to 0 instead of the first element.
- Confusing the number of dimensions with the number of elements.
- In Python, creating a 2-D "equivalent" by repeating one inner list, so every row is the same object.

## Exam technique

- **Write an algorithm**: state the index origin you are using and keep to it.
- **Complete a trace table**: one row per change of a variable, including the loop counters.
- **Explain why an array is suitable**: refer to direct access by index, a single type and a fixed, known size.
- **State the number of elements**: multiply the lengths of every dimension.

## More resources on this topic

- [Arrays revision notes](/resources/aqa-a-level-computer-science-7517-single-and-multi-dimensional-arrays-revision-notes/)
- [Arrays practice questions](/resources/aqa-a-level-computer-science-7517-single-and-multi-dimensional-arrays-practice/)
- [Data structures study guide for 4.2.1.1](/resources/aqa-a-level-computer-science-7517-data-structures/)
- [Data Structures and Arrays study guide](/resources/a-level-aqa-computer-science-data-structures-and-arrays/)

*Written against the AQA A-level Computer Science (7517) specification, 4.2.1.2 Single- and multi-dimensional arrays (or equivalent). Always check the current specification on the AQA website.*
