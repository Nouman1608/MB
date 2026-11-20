---
title: "Cambridge O Level Computer Science (2210): Arrays -- Revision Notes"
seoTitle: "Cambridge O Level CS 2210 Arrays Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 8 – Programming"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 8.2
syllabusTopics:
  - qualification: "o-level"
    topic: "programming-2210"
  - qualification: "o-level"
    topic: "programming-2210"
    subtopic: "arrays-2210"
description: "Revision notes for Cambridge O Level Computer Science 2210 section 8.2: declaring 1D and 2D arrays, indexes, loops and nested loops, common patterns and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed notes for syllabus section 8.2, Arrays. For the full explanations and a model answer, use the [Arrays study guide](/resources/cambridge-o-level-computer-science-2210-arrays/).

## Syllabus checklist

- Declare and use one-dimensional (1D) and two-dimensional (2D) arrays.
- Understand the use of arrays, including variables as indexes.
- Write values into, and read values from, an array using iteration, including nested iteration.
- The first index can be zero or one.

## Key terms

| Term | Definition |
|---|---|
| Array | A fixed-length structure holding elements of the same data type under one name |
| Element | One value stored in an array |
| Index | The position number used to find an element |
| Lower bound | The index of the first element |
| Upper bound | The index of the last element |
| 1D array | A single list of elements |
| 2D array | A table of elements with rows and columns |
| Nested iteration | A loop inside another loop |

## Declaring arrays

```
DECLARE Marks : ARRAY[1:30] OF INTEGER
DECLARE Names : ARRAY[1:30] OF STRING
DECLARE Board : ARRAY[1:3, 1:3] OF CHAR
```

- Square brackets hold the bounds as `lower:upper`.
- In a 2D array the first range is the **rows** and the second is the **columns**.
- Number of elements = (upper − lower + 1) for each dimension, multiplied together.

| Declaration | Elements |
|---|---|
| `ARRAY[1:10]` | 10 |
| `ARRAY[0:9]` | 10 |
| `ARRAY[1:3, 1:4]` | 12 |
| `ARRAY[0:4, 0:4]` | 25 |

## Using elements

```
Marks[1] ← 62
Names[3] ← "Aisha"
Board[2, 3] ← 'X'
OUTPUT Marks[Position + 1]
```

- One index value per dimension.
- The index can be a number, a variable or an expression.
- An index outside the bounds is an error.

## Loop patterns for 1D arrays

### Input into an array

```
FOR Index ← 1 TO 10
   INPUT Marks[Index]
NEXT Index
```

### Total and average

```
Total ← 0
FOR Index ← 1 TO 10
   Total ← Total + Marks[Index]
NEXT Index
OUTPUT Total / 10
```

### Highest value

```
Highest ← Marks[1]
FOR Index ← 2 TO 10
   IF Marks[Index] > Highest
      THEN
         Highest ← Marks[Index]
   ENDIF
NEXT Index
```

### Count items meeting a test

```
Count ← 0
FOR Index ← 1 TO 10
   IF Marks[Index] >= 50
      THEN
         Count ← Count + 1
   ENDIF
NEXT Index
```

### Reverse order

```
FOR Index ← 10 TO 1 STEP -1
   OUTPUT Marks[Index]
NEXT Index
```

## Loop patterns for 2D arrays

Outer loop = rows, inner loop = columns. The inner loop completes for every pass of the outer loop.

### Visit every element

```
FOR Row ← 1 TO 3
   FOR Column ← 1 TO 4
      OUTPUT Sales[Row, Column]
   NEXT Column
NEXT Row
```

This runs the body 3 × 4 = 12 times.

### Row totals

```
FOR Row ← 1 TO 3
   RowTotal ← 0
   FOR Column ← 1 TO 4
      RowTotal ← RowTotal + Sales[Row, Column]
   NEXT Column
   OUTPUT RowTotal
NEXT Row
```

### Column totals

Swap the loops: outer = column, inner = row, and reset the total inside the outer loop.

### Setting all elements

```
FOR Row ← 1 TO 3
   FOR Column ← 1 TO 3
      Board[Row, Column] ← ' '
   NEXT Column
NEXT Row
```

## Worked trace

Array `Data[1:4]` holds 6, 2, 9, 4.

```
Result ← 0
FOR Index ← 1 TO 4
   IF Data[Index] > 3
      THEN
         Result ← Result + Data[Index]
   ENDIF
NEXT Index
OUTPUT Result
```

| Index | Data[Index] | Condition | Result |
|---|---|---|---|
| 1 | 6 | true | 6 |
| 2 | 2 | false | 6 |
| 3 | 9 | true | 15 |
| 4 | 4 | true | 19 |

The output is 19.

## Why use an array

- One name for a whole list, so the program has fewer variables.
- A loop can process every element with the same code.
- The program is shorter and easier to change.
- The index can be calculated, so any element can be reached.

## Answer templates

**Why an array is better than separate variables (2 marks):** one identifier stores many values of the same type; loops can be used to process them, so less code is needed.

**Write pseudocode for an array task (5 marks):** declare the array [1]; initialise any total, count or highest [1]; loop with the right bounds [1]; the array element with the loop variable as the index [1]; correct test or calculation and output after the loop [1].

**Trace nested loops (3 marks):** show the order of Row and Column; show the value used each time; give the final output.

## Exam traps

- **Wrong bounds.** `ARRAY[1:10]` has 10 elements, so the loop is 1 to 10.
- **No index.** `Marks` alone is not an element.
- **Swapped row and column.** `Sales[Row, Column]`, in that order.
- **Total not reset.** Reset row totals inside the outer loop.
- **Highest initialised to 0.** Start with the first element.
- **Mixing data types.** All elements in an array have the same type.

## Self-test

1. What is an array?
2. Declare an array called Prices that holds 12 real numbers, with indexes 1 to 12.
3. How many elements are in `ARRAY[1:5, 1:5]`?
4. What does `Grid[2, 4]` refer to?
5. Write a loop header that visits every element of `ARRAY[1:20]`.
6. Why is a FOR loop used with an array?
7. What is the output of `OUTPUT Data[2]` if Data holds 6, 2, 9, 4?
8. Why must the total be set to 0 before the loop?
9. In nested loops, which loop completes first?
10. What is wrong with `FOR Index ← 1 TO 11` for `ARRAY[1:10]`?
11. How many times does the inner body run for `FOR Row ← 1 TO 4` containing `FOR Column ← 1 TO 6`?
12. Why use a variable as an index?

**Answers**

1. A fixed-length structure that holds several values of the same data type under one name.
2. `DECLARE Prices : ARRAY[1:12] OF REAL`
3. 25.
4. The element in row 2, column 4.
5. `FOR Index ← 1 TO 20`
6. The number of elements is known, and the loop variable can be the index.
7. 2.
8. Otherwise the first addition starts from an unknown value and the total is wrong.
9. The inner loop.
10. Index 11 is outside the bounds of the array, which causes an error.
11. 24 times (4 × 6).
12. So that a loop (or a calculation) can choose which element to use, instead of writing a separate statement for each.
