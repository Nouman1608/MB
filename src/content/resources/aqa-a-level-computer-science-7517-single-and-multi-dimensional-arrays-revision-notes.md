---
title: "AQA A-Level Computer Science (7517): Single- and Multi-Dimensional Arrays -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.2.1.2 recall: vectors, matrices, tuples, the standard array algorithms, nested-loop rules, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed recall for **4.2.1.2 Single- and multi-dimensional arrays (or equivalent)**, AQA A-Level Computer Science (7517). Traced examples are in the [arrays study guide](/resources/aqa-a-level-computer-science-7517-single-and-multi-dimensional-arrays/); exam-style questions are in the [arrays practice questions](/resources/aqa-a-level-computer-science-7517-single-and-multi-dimensional-arrays-practice/).

## The specification in four lines

- Use arrays (or equivalent) in the design of solutions to simple problems.
- A **one-dimensional array** is a useful way of representing a **vector**.
- A **two-dimensional array** is a useful way of representing a **matrix**.
- An **n-dimensional array** is a set of elements of the **same data type**, indexed by a **tuple of n integers**; a tuple is an **ordered list of elements**.

"Or equivalent" covers language features such as Python lists and lists of lists.

## Dimensions and size

```
declaration          dimensions   elements
a[10]                1            10
grid[6][8]           2            48
seats[3][10][12]     3            360
```

Dimensions = length of the index tuple. Size = product of the lengths.

## Index origin

- 0-based: indices 0 to LEN − 1. Loop `FOR i ← 0 TO LEN(a) - 1`.
- 1-based: indices 1 to LEN. Loop `FOR i ← 1 TO LEN(a)`.
- Mixing them causes an out-of-range error or a skipped element.

## Standard 1-D algorithms

| Task | Key idea |
|---|---|
| Total / mean | Accumulator set to 0 before the loop; divide by LEN after it |
| Maximum and position | Start from element 0, not from a fixed number; `>` keeps the first tie, `>=` the last |
| Count matching items | Counter set to 0; increment inside an IF |
| Linear search | WHILE loop with a found flag and an index bound |
| Reverse in place | Swap a[i] with a[n − 1 − i] for i from 0 to (n DIV 2) − 1, using a temporary variable |
| Rotate left by one | Save a[0]; shift each a[i] ← a[i + 1]; put saved value at the end |
| Vector addition | w[i] ← u[i] + v[i] for every i |

## Standard 2-D algorithms

| Task | Loop structure |
|---|---|
| Visit every element | Outer loop rows, inner loop columns |
| Row totals | Reset total **inside** the outer loop, before the inner loop |
| Column totals | Outer loop columns, inner loop rows |
| Main diagonal | One loop, `m[i][i]` |
| Matrix addition | `result[r][c] ← a[r][c] + b[r][c]` in nested loops |
| Transpose | `t[c][r] ← m[r][c]` in nested loops |
| Search with early exit | Nested WHILE loops sharing a found flag |

**Quick check.** For `p = [[4, 1, 6], [2, 5, 3]]` (2 rows, 3 columns): row totals are 11 and 10; column totals are 6, 6 and 9; `p[1][2]` is 3; `p[2][1]` is out of range because the last row index is 1. Recompute every total yourself in a trace question rather than trusting a pattern.

## Higher dimensions

- Fix the indices you are not looping over: mean of subject 2 for class 1 in `results[class][student][subject]` loops only over students, with `results[1][s][2]`.
- Visiting every element needs one loop per dimension.

## Designing with arrays: checklist

- Number of dimensions and what each index means.
- Lengths of each dimension.
- Initial values, if needed.
- Loop bounds consistent with the index origin.
- Accumulators reset at the correct nesting level.
- Result output or returned in the form asked for.

## Key terms

| Term | Definition |
|---|---|
| Array | Set of elements of one data type, each accessed by index |
| Index | Integer position used to access an element |
| Vector | Ordered list of values from one set; represented by a 1-D array |
| Matrix | Rectangular arrangement of values in rows and columns; represented by a 2-D array |
| Tuple | Ordered list of elements; n integers index an element of an n-D array |
| Dimension | Number of indices needed to locate an element |
| Out-of-range error | Run-time error from using an index outside the array's bounds |
| Nested loop | A loop inside another loop, used to traverse multi-dimensional arrays |

## Exam traps

- `FOR i ← 0 TO LEN(a)` reads one element too many.
- Dimensions are not the number of elements.
- Row and column indices swapped: wrong value, or out of range in a non-square array.
- A total reset outside the outer loop becomes a running total.
- A maximum initialised to 0 fails for all-negative data.
- Reversing with a loop that runs the full length swaps every pair twice and undoes itself.

## Self-test

1. What does a two-dimensional array usefully represent?
2. How many elements does `cube[5][5][4]` hold, and how many indices locate one?
3. What is the last valid index of a 0-based array of 25 elements?
4. In a row-totals algorithm, where must the total be reset?
5. Write the assignment that transposes element (r, c) of m into t.
6. Which comparison, `>` or `>=`, makes a maximum-finding loop keep the first position of a tied maximum?
7. Which elements form the main diagonal of a square matrix?
8. a = [2, 7, 3, 5]. What is a after it is reversed in place?
9. How many swaps does reversing an array of 9 elements need?
10. Why initialise a maximum from the first element?
11. Give the algorithm line that adds vectors u and v element by element into w.
12. In `marks[class][student]`, which index is fixed to process one class?

**Answers**

1. A matrix.
2. 5 × 5 × 4 = 100 elements; three indices.
3. 24.
4. Inside the outer (row) loop, before the inner (column) loop starts.
5. `t[c][r] ← m[r][c]`.
6. `>`.
7. The elements whose row and column indices are equal, m[i][i].
8. [5, 3, 7, 2].
9. 9 DIV 2 = 4 swaps; the middle element stays put.
10. A fixed starting value such as 0 could be larger than every element, for example if all are negative.
11. `w[i] ← u[i] + v[i]` inside a loop over every index.
12. The class index.

## Related resources

- [Arrays study guide](/resources/aqa-a-level-computer-science-7517-single-and-multi-dimensional-arrays/)
- [Arrays practice questions](/resources/aqa-a-level-computer-science-7517-single-and-multi-dimensional-arrays-practice/)
- [Data Structures and Arrays revision notes](/resources/aqa-a-level-computer-science-data-structures-revision-notes/)
