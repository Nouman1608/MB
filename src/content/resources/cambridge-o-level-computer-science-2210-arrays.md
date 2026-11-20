---
title: "Cambridge O Level Computer Science (2210): Arrays"
seoTitle: "Cambridge O Level CS 2210 Arrays Guide"
resourceType: "study-guides"
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
description: "Study guide to Cambridge O Level Computer Science 2210 section 8.2: declaring one-dimensional and two-dimensional arrays, using indexes and variables as indexes, and reading and writing arrays with loops."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Section 8.2 of Cambridge O Level Computer Science 2210 has three learning statements. Candidates should **declare and use one-dimensional (1D) and two-dimensional (2D) arrays**, understand the **use of arrays**, including the use of variables as indexes, and **write values into, and read values from, an array using iteration**, including nested iteration. The guidance adds that the first index can be zero or one. All code in this guide is Cambridge pseudocode, with the first index set to 1, which is the style the syllabus normally uses.

## Part 1: why arrays are needed

Suppose a program must store the marks of 30 students. Without arrays, it needs 30 separate variables with 30 separate names, and 30 separate lines to input, add up and output them. An **array** solves this problem.

An array is a fixed-length structure that holds several values **of the same data type** under **one name**. Each value is an **element**, and each element is found by its **index** (its position number).

Arrays make a program shorter and let loops process every element with one block of code.

## Part 2: one-dimensional arrays

A 1D array is a single list of values, like a column in a table.

### Declaring a 1D array

```
DECLARE <identifier> : ARRAY[<lower>:<upper>] OF <data type>
```

```
DECLARE Marks : ARRAY[1:5] OF INTEGER
DECLARE StudentNames : ARRAY[1:30] OF STRING
```

`Marks` has five elements with indexes 1, 2, 3, 4 and 5. It is good practice to state the lower bound, because systems differ on whether the first index is 0 or 1.

### Using an element

An element is written as the array name followed by its index in square brackets.

```
Marks[1] ← 62
Marks[2] ← 45
OUTPUT Marks[2]
```

After these statements, `Marks[1]` holds 62 and `Marks[2]` holds 45. The output is 45.

The same array after all five marks have been stored:

| Index | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Marks | 62 | 45 | 50 | 78 | 39 |

`Marks[4]` is 78. There is no `Marks[6]`: using an index outside the declared range is an error.

### Variables as indexes

The index does not have to be a number. It can be a variable or an expression. This is what makes loops useful with arrays.

```
Position ← 3
OUTPUT Marks[Position]       // outputs 50
OUTPUT Marks[Position + 1]   // outputs 78
```

## Part 3: using iteration with a 1D array

A FOR loop is the natural choice, because the number of elements is known. The loop variable is used as the index.

### Writing values into an array

```
FOR Index ← 1 TO 5
   OUTPUT "Enter mark ", Index
   INPUT Marks[Index]
NEXT Index
```

On pass 1 the value is stored in `Marks[1]`, on pass 2 in `Marks[2]`, and so on.

### Reading values from an array: totalling

```
Total ← 0
FOR Index ← 1 TO 5
   Total ← Total + Marks[Index]
NEXT Index
OUTPUT "Average mark: ", Total / 5
```

For the marks 62, 45, 50, 78 and 39 the total is 274 and the average is 54.8.

### Finding the highest value

```
Highest ← Marks[1]
FOR Index ← 2 TO 5
   IF Marks[Index] > Highest
      THEN
         Highest ← Marks[Index]
   ENDIF
NEXT Index
OUTPUT Highest
```

The algorithm starts by assuming the first value is the highest, then replaces it whenever a bigger one appears. For the marks above, the result is 78 (found at index 4).

### Setting every element to a starting value

```
FOR Index ← 1 TO 30
   StudentNames[Index] ← ""
NEXT Index
```

### Outputting in reverse order

```
FOR Index ← 5 TO 1 STEP -1
   OUTPUT Marks[Index]
NEXT Index
```

This outputs 39, 78, 50, 45, 62.

### Searching an array

```
Found ← FALSE
Index ← 1
WHILE Index <= 5 AND Found = FALSE DO
   IF Marks[Index] = 78
      THEN
         Found ← TRUE
   ELSE
      Index ← Index + 1
   ENDIF
ENDWHILE
```

This keeps checking elements until 78 is found or the end of the array is reached.

## Part 4: two-dimensional arrays

A 2D array is like a table with **rows and columns**. Each element needs two indexes: the row, then the column.

### Declaring a 2D array

```
DECLARE <identifier> : ARRAY[<l1>:<u1>, <l2>:<u2>] OF <data type>
```

```
DECLARE Sales : ARRAY[1:3, 1:4] OF INTEGER
DECLARE Board : ARRAY[1:3, 1:3] OF CHAR
```

`Sales` has three rows and four columns, so 3 × 4 = 12 elements. Suppose it holds the number of items sold by three shops (rows) in four weeks (columns):

| | Week 1 | Week 2 | Week 3 | Week 4 |
|---|---|---|---|---|
| Shop 1 | 5 | 8 | 2 | 7 |
| Shop 2 | 3 | 6 | 9 | 4 |
| Shop 3 | 1 | 0 | 8 | 6 |

`Sales[2, 3]` is the element in row 2, column 3, which is 9. In a statement, only one index value is used for each dimension.

```
Board[2, 3] ← 'X'
Sales[1, 4] ← Sales[1, 4] + 1
```

### Nested iteration

To visit every element of a 2D array, use a loop inside a loop. The outer loop usually counts through the rows and the inner loop counts through the columns.

```
Grand ← 0
FOR Row ← 1 TO 3
   RowTotal ← 0
   FOR Column ← 1 TO 4
      RowTotal ← RowTotal + Sales[Row, Column]
   NEXT Column
   OUTPUT "Shop ", Row, " sold ", RowTotal
   Grand ← Grand + RowTotal
NEXT Row
OUTPUT "All shops sold ", Grand
```

For each row, the inner loop runs through all four columns before the outer loop moves on. The outputs are:

- Shop 1 sold 22 (5 + 8 + 2 + 7)
- Shop 2 sold 22 (3 + 6 + 9 + 4)
- Shop 3 sold 15 (1 + 0 + 8 + 6)
- All shops sold 59

### Totals by column

To total each week instead, swap the loops so that the outer loop is the column.

```
FOR Column ← 1 TO 4
   ColTotal ← 0
   FOR Row ← 1 TO 3
      ColTotal ← ColTotal + Sales[Row, Column]
   NEXT Row
   OUTPUT "Week ", Column, ": ", ColTotal
NEXT Column
```

The weekly totals are 9, 14, 19 and 17. Their sum is 59, which agrees with the grand total above.

## Part 5: array bounds and the first index

The syllabus allows the first index to be 0 or 1. For an array declared `ARRAY[0:4]` there are still five elements, but the indexes are 0 to 4. Always check the lower bound in the question. A FOR loop that starts at 1 will miss element 0, and one that ends at 5 will go beyond the end.

Number of elements = upper bound − lower bound + 1.

## Worked example

**Question:** Write pseudocode that stores ten whole numbers in an array called Readings and outputs how many of them are greater than 20. [5]

```
DECLARE Readings : ARRAY[1:10] OF INTEGER
Count ← 0
FOR Index ← 1 TO 10
   INPUT Readings[Index]
   IF Readings[Index] > 20
      THEN
         Count ← Count + 1
   ENDIF
NEXT Index
OUTPUT Count
```

> Array declared with the correct bounds and type [1]; Count set to 0 before the loop [1]; loop from 1 to 10 [1]; input stored in the array element using the loop variable as the index [1]; correct comparison, count increased and count output after the loop [1].

## Common mistakes

- **Going outside the bounds.** `FOR Index ← 1 TO 6` on a five-element array causes an error.
- **Mixing up row and column indexes.** The first index is the row, the second is the column.
- **Forgetting to declare the array** or declaring the wrong data type.
- **Using the loop variable without an index.** `Total ← Total + Marks` is wrong; `Marks[Index]` is correct.
- **Resetting a total in the wrong place.** In a 2D loop, set the row total to 0 inside the outer loop, before the inner one.
- **Swapping the loops** and getting column totals when row totals were asked for.
- **Starting the highest value at 0.** Start with the first element, in case all values are negative.

## Exam technique

- **Declare the array** with bounds and a data type.
- **Use a FOR loop** with the loop variable as the index.
- **Trace nested loops** with a table of Row, Column and the value used.
- **State the lower bound** if you are using zero.

## Quick check

1. How many elements are in `ARRAY[1:8] OF INTEGER`? *8.*
2. What does `Sales[3, 2]` mean? *The element in row 3, column 2.*
3. How many elements are in `ARRAY[1:4, 1:5] OF REAL`? *20.*
4. Why is a FOR loop suitable for processing an array? *The number of elements is known.*
5. What is a variable used as an index? *A variable inside the square brackets whose value selects the element.*

## Continue with

Revise with the [Arrays revision notes](/resources/cambridge-o-level-computer-science-2210-arrays-revision-notes/) and practise with the [Arrays practice questions](/resources/cambridge-o-level-computer-science-2210-arrays-practice/).
