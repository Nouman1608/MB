---
title: "Cambridge A Level Computer Science (9618): Arrays"
resourceType: "study-guides"
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
description: "Array terms, choosing 1D or 2D arrays, pseudocode processing, and bubble sort and linear search traced, for Cambridge AS Computer Science 9618 10.2."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **10.2 Arrays** in the Cambridge International AS & A Level Computer Science 9618 syllabus. It is AS content, assessed mainly on Paper 2, and all pseudocode follows the Cambridge Pseudocode Guide. The [Data Types and Structures study guide](/resources/cambridge-a-level-computer-science-data-types-and-structures-study-guide/) introduces the whole of Topic 10; this page stays with arrays and works through new examples of two-dimensional processing, a traced bubble sort and a linear search. Condensed notes are in the [Arrays revision notes](/resources/cambridge-a-level-computer-science-9618-arrays-revision-notes/), and the [Arrays practice questions](/resources/cambridge-a-level-computer-science-9618-arrays-practice/) let you test yourself.

## What 10.2 asks you to do

- use the technical terms associated with arrays, including **index**, **upper bound** and **lower bound**
- **select** a suitable data structure (a 1D or 2D array) for a given task
- write pseudocode for **1D and 2D arrays**
- write pseudocode to process array data, including a **bubble sort** and a **linear search**.

Arrays of records combine this section with 10.1; see the [Data Types and Records guide](/resources/cambridge-a-level-computer-science-9618-data-types-and-records/). Binary search and insertion sort are A Level content, not needed here.

## The terms

An **array** is a data structure holding a fixed number of elements, all of the **same data type**, under one identifier.

| Term | Meaning | In `DECLARE Scores : ARRAY[1:30] OF INTEGER` |
|---|---|---|
| Element | One item in the array | Scores[7] is one element |
| Index | The position used to access an element | 7 in Scores[7] |
| Lower bound | The smallest valid index | 1 |
| Upper bound | The largest valid index | 30 |

The number of elements is upper bound − lower bound + 1, so `ARRAY[0:9]` has 10 elements. Using an index outside the bounds is an error, which is why loops over an array must start and stop exactly at the bounds.

## 1D or 2D?

| Choose | When the data is | Example |
|---|---|---|
| 1D array | A single list, one value per item | The daily step count for each day of a year: `ARRAY[1:365] OF INTEGER` |
| 2D array | A table, where each value is identified by **two** things | Sales for each of 4 shops in each of 12 months: `ARRAY[1:4, 1:12] OF REAL` |

The test is: how many pieces of information do you need to pick out one value? One means 1D; two means 2D. When justifying a 2D array, say what the rows and columns represent.

## Declaring and using arrays

```
DECLARE Temps : ARRAY[1:7] OF REAL
DECLARE Seats : ARRAY[1:8, 1:12] OF BOOLEAN

Temps[3] ← 18.5
Seats[2, 10] ← TRUE
OUTPUT Temps[3]
```

For a 2D array the first index is conventionally the **row** and the second the **column**: `Seats[2, 10]` is row 2, seat 10.

### Initialising

A loop sets every element, because a declaration does not give the elements a known starting value.

```
FOR Row ← 1 TO 8
   FOR Col ← 1 TO 12
      Seats[Row, Col] ← FALSE
   NEXT Col
NEXT Row
```

### Worked example 1: processing a 2D array

A small theatre stores bookings in `Seats : ARRAY[1:8, 1:12] OF BOOLEAN`, where TRUE means booked. The box office wants the number of free seats in each row, and the row with the most free seats.

```
DECLARE Free : INTEGER
DECLARE MostFree : INTEGER
DECLARE BestRow : INTEGER
MostFree ← -1
FOR Row ← 1 TO 8
   Free ← 0
   FOR Col ← 1 TO 12
      IF Seats[Row, Col] = FALSE THEN
         Free ← Free + 1
      ENDIF
   NEXT Col
   OUTPUT "Row ", Row, ": ", Free, " free"
   IF Free > MostFree THEN
      MostFree ← Free
      BestRow ← Row
   ENDIF
NEXT Row
OUTPUT "Most free seats in row ", BestRow
```

Three details carry the marks: `Free` is reset to 0 **inside** the outer loop, so each row starts its own count; the inner loop runs over **columns**; and the comparison with `MostFree` happens **after** the inner loop has finished counting the row. Starting `MostFree` at −1 guarantees row 1 is recorded even if it has no free seats.

## Linear search

A **linear search** checks each element in turn, from the lower bound, until the item is found or the end is reached. It works on unsorted data.

```
FUNCTION FindName(Target : STRING) RETURNS INTEGER
   DECLARE Index : INTEGER
   DECLARE Found : BOOLEAN
   Found ← FALSE
   Index ← 1
   WHILE Found = FALSE AND Index <= 50
      IF Names[Index] = Target THEN
         Found ← TRUE
      ELSE
         Index ← Index + 1
      ENDIF
   ENDWHILE
   IF Found = TRUE THEN
      RETURN Index
   ELSE
      RETURN -1
   ENDIF
ENDFUNCTION
```

Here `Names[1:50]` is a global array of STRING. The loop stops at the first match, so the function returns the position of the first occurrence, or −1 if there is none. With 50 elements, the search makes between 1 comparison (target first) and 50 (target last or absent).

The flag matters. A shorter condition such as `WHILE Index <= 50 AND Names[Index] <> Target` looks neater, but when Index reaches 51 it may still try to read `Names[51]`, which is outside the bounds. Testing the element inside the loop body avoids that.

## Bubble sort

A **bubble sort** repeatedly passes through the array, comparing each pair of neighbouring elements and **swapping** them if they are in the wrong order. After each pass the largest remaining value has "bubbled" to its final place at the end, so each pass can stop one element earlier. If a pass makes no swaps, the array is sorted and the algorithm can stop.

```
DECLARE Last : INTEGER
DECLARE Index : INTEGER
DECLARE Temp : INTEGER
DECLARE Swapped : BOOLEAN
Last ← 6
REPEAT
   Swapped ← FALSE
   FOR Index ← 1 TO Last - 1
      IF Nums[Index] > Nums[Index + 1] THEN
         Temp ← Nums[Index]
         Nums[Index] ← Nums[Index + 1]
         Nums[Index + 1] ← Temp
         Swapped ← TRUE
      ENDIF
   NEXT Index
   Last ← Last - 1
UNTIL Swapped = FALSE OR Last = 1
```

The swap needs the temporary variable `Temp`: writing `Nums[Index] ← Nums[Index + 1]` first would overwrite the value before it was saved.

### Worked example 2: tracing the bubble sort

`Nums[1:6]` holds 12, 19, 7, 30, 22, 41.

| Pass | Comparisons | Swaps | Array after the pass | Swapped |
|---|---|---|---|---|
| 1 | 5 | 19↔7, 30↔22 | 12, 7, 19, 22, 30, 41 | TRUE |
| 2 | 4 | 12↔7 | 7, 12, 19, 22, 30, 41 | TRUE |
| 3 | 3 | none | 7, 12, 19, 22, 30, 41 | FALSE |

The sort stops after pass 3 with 5 + 4 + 3 = **12** comparisons. Without the `Swapped` flag it would run all 5 passes, making 5 + 4 + 3 + 2 + 1 = **15** comparisons, and without the shrinking `Last` every pass would make 5 comparisons, 25 in total. Both improvements matter most when the data is nearly sorted already.

To sort into **descending** order, change `>` to `<` in the comparison. The same algorithm sorts strings alphabetically, because strings can be compared with `>`.

## Common mistakes

- Looping from 0 when the lower bound is 1, or to the upper bound in a bubble sort's inner loop, which compares beyond the end.
- Resetting a row total outside the outer loop, so totals accumulate across rows.
- Swapping without a temporary variable.
- Writing a linear search whose loop condition can read an element beyond the upper bound.
- Describing a bubble sort as "swapping the smallest to the front each time"; that describes a different algorithm.
- Mixing up row and column indexes in a 2D array.

## Exam technique

When asked to **write pseudocode** for array processing, declare loop variables, use the bounds given in the question, and indent nested loops. When asked to **select** a structure, name it (1D or 2D array) and justify with what the indexes represent. In **trace** questions on a bubble sort, show the array after each pass and state when and why the sort stops.
