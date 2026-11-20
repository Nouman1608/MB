---
title: "Cambridge IGCSE Computer Science (0478): Arrays"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 8: Programming"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 8.2
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-0478"
  - qualification: "igcse"
    topic: "programming-0478"
    subtopic: "arrays-0478"
description: "Study guide to Cambridge IGCSE Computer Science 0478 section 8.2: declaring and using one-dimensional and two-dimensional arrays, using variables as indexes, and reading and writing arrays with iteration and nested iteration."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
Section 8.2 of the Cambridge IGCSE Computer Science 0478 syllabus has three content statements. You must **declare and use one-dimensional (1D) and two-dimensional (2D) arrays**, **understand the use of arrays**, including the use of variables as indexes, and **write values into, and read values from, an array using iteration**, including nested iteration. The syllabus notes that the first index can be zero or one. The examination pseudocode generally uses a lower bound of 1 and states it explicitly.

## What is an array?

An **array** is a data structure that stores a fixed number of elements of the **same data type** under one name. Each element is found using an **index**, a number that gives its position.

Without arrays, a program that stores five marks would need five variables: `Mark1`, `Mark2`, `Mark3`, `Mark4`, `Mark5`. With 500 students that is not sensible. An array uses one name and lets a loop visit every element.

| Without arrays | With an array |
|---|---|
| Many separate variables | One name, many elements |
| A separate line of code for each | One loop handles all elements |
| Hard to add more values | Change the size in the declaration |

## One-dimensional arrays

A 1D array is like a list. It is declared with a lower bound, an upper bound and a data type:

```
DECLARE Marks : ARRAY[1:5] OF INTEGER
DECLARE Names : ARRAY[1:30] OF STRING
```

`ARRAY[1:5]` has five elements with indexes 1, 2, 3, 4 and 5. An element is written with the index in square brackets:

```
Marks[1] ← 12
Marks[2] ← 18
OUTPUT Marks[2]
```

Suppose the array holds these values.

| Index | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Marks | 12 | 18 | 9 | 20 | 15 |

`Marks[3]` is 9. `Marks[6]` would be an error because the upper bound is 5.

### Variables as indexes

The index can be a variable or an expression, which is what makes arrays powerful:

```
Position ← 4
OUTPUT Marks[Position]       // outputs 20
OUTPUT Marks[Position - 1]   // outputs 9
```

### Writing values with a loop

```
FOR Index ← 1 TO 5
    OUTPUT "Enter mark ", Index
    INPUT Marks[Index]
NEXT Index
```

The loop variable `Index` takes each value from 1 to 5, so each input goes into the next element.

### Reading values with a loop

```
Total ← 0
FOR Index ← 1 TO 5
    Total ← Total + Marks[Index]
NEXT Index
OUTPUT "Average ", Total / 5
```

For the marks above, the total is 12 + 18 + 9 + 20 + 15 = 74 and the average is 74 / 5 = 14.8.

### Finding the highest value

```
Highest ← Marks[1]
Position ← 1
FOR Index ← 2 TO 5
    IF Marks[Index] > Highest
       THEN
         Highest ← Marks[Index]
         Position ← Index
    ENDIF
NEXT Index
OUTPUT Highest, Position
```

Start with the first element, then compare every other element. The trace for the data above:

| Index | Marks[Index] | Highest | Position |
|---|---|---|---|
| start | | 12 | 1 |
| 2 | 18 | 18 | 2 |
| 3 | 9 | 18 | 2 |
| 4 | 20 | 20 | 4 |
| 5 | 15 | 20 | 4 |

The output is 20 and 4.

### Linear search

To find out whether a value is in the array, look at each element in turn:

```
INPUT SearchValue
Found ← FALSE
Index ← 1
WHILE Index <= 5 AND Found = FALSE DO
    IF Marks[Index] = SearchValue
       THEN
         Found ← TRUE
       ELSE
         Index ← Index + 1
    ENDIF
ENDWHILE
IF Found = TRUE
   THEN
     OUTPUT "Found at position ", Index
   ELSE
     OUTPUT "Not found"
ENDIF
```

Searching for 9 finds it at position 3, after checking positions 1, 2 and 3. Searching for 7 checks all five positions and outputs "Not found". The loop stops early when the value is found, which saves time.

## Two-dimensional arrays

A 2D array is like a table with rows and columns. It needs two indexes. It is declared with two ranges:

```
DECLARE Sales : ARRAY[1:3, 1:4] OF INTEGER
```

This has 3 rows (for example, 3 shops) and 4 columns (4 quarters), so 3 × 4 = 12 elements. `Sales[2, 3]` is the element in row 2, column 3. Say which index means row and which means column.

| | Quarter 1 | Quarter 2 | Quarter 3 | Quarter 4 |
|---|---|---|---|---|
| Shop 1 | 5 | 8 | 6 | 9 |
| Shop 2 | 7 | 4 | 10 | 3 |
| Shop 3 | 2 | 6 | 5 | 8 |

Here `Sales[2, 3]` is 10 and `Sales[3, 1]` is 2.

### Nested iteration

To visit every element of a 2D array, put one loop inside another. The outer loop moves through the rows and the inner loop moves through the columns.

```
GrandTotal ← 0
FOR Shop ← 1 TO 3
    ShopTotal ← 0
    FOR Quarter ← 1 TO 4
        ShopTotal ← ShopTotal + Sales[Shop, Quarter]
    NEXT Quarter
    OUTPUT "Shop ", Shop, " total ", ShopTotal
    GrandTotal ← GrandTotal + ShopTotal
NEXT Shop
OUTPUT "All shops ", GrandTotal
```

Shop totals: Shop 1 is 5 + 8 + 6 + 9 = 28; Shop 2 is 7 + 4 + 10 + 3 = 24; Shop 3 is 2 + 6 + 5 + 8 = 21. The grand total is 28 + 24 + 21 = 73.

Note that `ShopTotal` is reset to 0 inside the outer loop, before the inner loop, so each shop starts from zero. Putting that line before the outer loop is a common mistake that makes each total include the shops before it.

To write values into a 2D array, the same pattern is used with `INPUT Sales[Shop, Quarter]` in the inner loop. To set every element to the same starting value, assign inside the nested loops.

## Two arrays used together

Two 1D arrays with the same bounds can be used together, with the same index in both holding related data. This is sometimes called using **parallel arrays**.

```
DECLARE Names : ARRAY[1:4] OF STRING
DECLARE Scores : ARRAY[1:4] OF INTEGER
```

If `Names[3]` is "Mei", then `Scores[3]` is Mei's score. To output the name of the player with the highest score:

```
BestPosition ← 1
FOR Index ← 2 TO 4
    IF Scores[Index] > Scores[BestPosition]
       THEN
         BestPosition ← Index
    ENDIF
NEXT Index
OUTPUT Names[BestPosition], " scored ", Scores[BestPosition]
```

With names Ali, Bea, Mei, Raj and scores 31, 45, 52, 40, the position of the best score moves from 1 (31) to 2 (45) to 3 (52) and stays at 3, so the output is "Mei scored 52". Storing the position instead of the score means you can look up the matching name.

## A 2D array as a game board

A 3 by 3 noughts and crosses board is a 2D array of CHAR:

```
DECLARE Board : ARRAY[1:3, 1:3] OF CHAR
FOR Row ← 1 TO 3
    FOR Column ← 1 TO 3
        Board[Row, Column] ← '-'
    NEXT Column
NEXT Row
Board[2, 2] ← 'X'
```

The nested loops set all nine squares to '-' (empty) and the last line puts an X in the centre. To check whether the top row is a win for X:

```
IF Board[1, 1] = 'X' AND Board[1, 2] = 'X' AND Board[1, 3] = 'X'
   THEN
     OUTPUT "X wins"
ENDIF
```

## Zero-based indexes

Some languages start the first index at 0. For `ARRAY[0:4]` there are still five elements, but their indexes are 0, 1, 2, 3 and 4. Whichever you use, state it in the declaration and make the loop limits match. The number of elements is upper bound − lower bound + 1.

## Common mistakes

- Using an index outside the declared range.
- Putting the reset of a total (such as `ShopTotal`) outside the loop it belongs in.
- Mixing up row and column.
- Writing `Marks` instead of `Marks[Index]` when you want one element.
- Using a loop that runs one time too many or too few. For `ARRAY[1:5]` the loop is `1 TO 5`.
- Storing different data types in one array.

## Exam technique

- **Declare** with the correct bounds and type.
- **Dry-run** using a trace table with a column for the index and each variable.
- **Use a variable as index** inside the loop rather than writing separate lines.
- **For 2D arrays**, use nested loops and state which index is row and which is column.

## Practise this sub-topic

Use the [Arrays revision notes](/resources/cambridge-igcse-computer-science-0478-arrays-revision-notes/) for quick recall and the [Arrays practice questions](/resources/cambridge-igcse-computer-science-0478-arrays-practice/) to test yourself.

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 8.2 Arrays:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
