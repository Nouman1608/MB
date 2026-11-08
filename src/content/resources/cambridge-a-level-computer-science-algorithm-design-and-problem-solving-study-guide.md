---
title: "Cambridge A Level Computer Science (9618): Algorithm Design and Problem-solving -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 9: Algorithm Design and Problem-solving"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 9
syllabusTopics:
  - qualification: "a-level"
    topic: "algorithm-design-and-problem-solving"
  - qualification: "a-level"
    topic: "algorithm-design-and-problem-solving"
    subtopic: "computational-thinking-skills"
  - qualification: "a-level"
    topic: "algorithm-design-and-problem-solving"
    subtopic: "algorithms-9-2"
description: "AS study guide to abstraction, decomposition, structure charts, flowcharts, pseudocode, trace tables, searching and sorting for Cambridge Computer Science 9618."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Before you can write a program you must be able to describe, precisely and in order, how a problem will be solved. This topic covers the thinking skills that let you do that, and the standard algorithms that appear again and again in Paper 2: totalling and counting, finding the largest value, linear search and bubble sort. Examiners also expect you to read an algorithm written by someone else, trace it and find where it goes wrong.

## Where this fits in the specification

Topic 9 is AS Level and underpins the programming topic (11) and the software development topic (12). It is tested in Paper 2 (Fundamental Problem-solving and Programming Skills), where you write and trace pseudocode, and in Paper 1 where you may be asked to define a term such as abstraction. The A Level extension of searching, sorting and recursion appears separately in Topic 19.

## Computational thinking skills

**Abstraction** means keeping only the details needed to solve a problem and ignoring the rest. A route-planning program models a rail network as stations and the times between them; the colour of the trains is left out. Abstraction reduces complexity and makes a general solution possible.

**Decomposition** means breaking a large problem into smaller sub-problems, each easier to solve, test and reuse. Different people can work on different parts, and each part can become a procedure or function.

**Pattern recognition** helps you spot a familiar problem inside a new one, so a known algorithm can be reused. **Algorithmic thinking** is expressing the steps clearly enough for a computer to follow them.

### Representing an algorithm

You can show an algorithm in several forms, and each has strengths.

- **Structure charts** show a program as a hierarchy of modules, with the top module calling lower ones. They show decomposition, the order of calls and the data passed between modules, but not the detail of the logic.
- **Flowcharts** use standard symbols: a rounded terminator for start and stop, a parallelogram for input and output, a rectangle for a process, a diamond for a decision. They show the flow of control clearly but become untidy for long programs.
- **Pseudocode** is a structured, language-independent description. Cambridge pseudocode uses the assignment arrow, upper-case keywords and indentation.
- **Structured English** and **trace tables** are used to describe and to check logic.

Good pseudocode uses meaningful identifier names, declares variables, indents the body of loops and selections, and uses the standard constructs rather than clever tricks.

```
DECLARE Total, Count, Mark : INTEGER
DECLARE Average : REAL
Total ← 0
Count ← 0
INPUT Mark
WHILE Mark <> -1
  Total ← Total + Mark
  Count ← Count + 1
  INPUT Mark
ENDWHILE
IF Count > 0 THEN
  Average ← Total / Count
  OUTPUT "Average: ", Average
ELSE
  OUTPUT "No marks entered"
ENDIF
```

This algorithm uses -1 as a **rogue value** to end input. It totals and counts. The check on Count prevents a division by zero if no marks are entered, which is exactly the kind of boundary condition examiners like to test.

## Standard algorithms

### Totalling, counting, maximum and minimum

Totalling adds each value to a running total initialised to 0. Counting adds 1 each time a condition is true. To find a maximum, set Max to the first element (not to 0, which fails if every value is negative), then update it whenever a larger value is met. A minimum works the same way with the opposite comparison.

### Linear search

A linear search checks each element in turn until it finds the target or reaches the end. It works on unsorted data. In the worst case it checks every element.

```
Found ← FALSE
Index ← 1
WHILE Index <= 10 AND Found = FALSE
  IF List[Index] = Target THEN
    Found ← TRUE
  ELSE
    Index ← Index + 1
  ENDIF
ENDWHILE
```

### Bubble sort

A bubble sort compares neighbouring items and swaps them if they are in the wrong order. After each pass the largest unsorted value has moved to its final place at the end. A flag that records whether any swap happened lets the algorithm stop early once a pass makes no swaps.

```
n ← 5
REPEAT
  Swapped ← FALSE
  FOR i ← 1 TO n - 1
    IF Data[i] > Data[i + 1] THEN
      Temp ← Data[i]
      Data[i] ← Data[i + 1]
      Data[i + 1] ← Temp
      Swapped ← TRUE
    ENDIF
  NEXT i
  n ← n - 1
UNTIL Swapped = FALSE
```

## Worked example 1: tracing a bubble sort

Sort the list 29, 14, 35, 8, 21 into ascending order and count the swaps.

**Pass 1** (compare four pairs): 29 and 14 swap giving 14, 29, 35, 8, 21; 29 and 35 stay; 35 and 8 swap giving 14, 29, 8, 35, 21; 35 and 21 swap giving 14, 29, 8, 21, 35. That is 3 swaps and 35 is fixed.

**Pass 2** (compare three pairs): 14 and 29 stay; 29 and 8 swap giving 14, 8, 29, 21, 35; 29 and 21 swap giving 14, 8, 21, 29, 35. That is 2 swaps.

**Pass 3** (compare two pairs): 14 and 8 swap giving 8, 14, 21, 29, 35; 14 and 21 stay. That is 1 swap.

**Pass 4** (compare one pair): 8 and 14 stay; no swap occurs, so Swapped stays FALSE and the loop ends. The sorted list is 8, 14, 21, 29, 35 after 3 + 2 + 1 = 6 swaps in 4 passes. A trace table for this would have columns i, Data[i], Data[i+1], Swapped and one row per comparison; do this on paper when asked, as marks are given for each correct column entry.

## Worked example 2: designing from a problem

A shop wants a program that reads the prices of up to 50 items, stopping when 0 is entered, and reports the highest price and how many items cost more than 20.00.

1. **Decompose**: input loop, maximum update, counting of expensive items, output.
2. **Identify data**: Price (REAL), Highest (REAL), ExpensiveCount (INTEGER), Items (INTEGER).
3. **Design**: read the first price. Set Highest to it unless it is 0. Loop while Price is not 0 and Items is less than 50, update Highest if Price > Highest, add 1 to ExpensiveCount if Price > 20.00, read the next price.
4. **Test mentally** with the prices 12.50, 25.00, 20.00, 31.75, 0. The highest is 31.75. Items above 20.00 are 25.00 and 31.75, so ExpensiveCount is 2; 20.00 itself is not more than 20.00, so a careless use of >= would give the wrong answer, 3.

Note how the design treats the boundary 20.00 as a test case. That is a habit worth building.

## Common mistakes

- Initialising a maximum to 0 or a minimum to 0 instead of the first value.
- Forgetting to read the next input inside a loop, which makes it run forever.
- Off-by-one errors, such as looping one time too many in a bubble sort and comparing an element with one beyond the array.
- Writing pseudocode that cannot be followed because variables are not initialised.
- Describing abstraction as "hiding things" instead of "removing unnecessary detail".

## Exam technique

**Trace** means complete the trace table step by step, writing only the changes. **Explain** why a flag is used needs the purpose, such as stopping early. **Write an algorithm** questions are marked on correct constructs, initialisation, a correct loop condition and output, so lay out your answer neatly with indentation. If you cannot see the full solution, produce the structure of the loop first because partial credit is common.

## Check your understanding

1. Define abstraction and give an example. *Removing unnecessary detail to focus on what is needed, such as a map showing roads and junctions but not buildings.*
2. State two benefits of decomposition. *Smaller parts are easier to understand, write and test; parts can be shared among programmers or reused.*
3. State two differences between a structure chart and a flowchart. *A structure chart shows the module hierarchy and data passed between modules; a flowchart shows the order and decisions within an algorithm.*
4. Why must a maximum be initialised from the first element? *If every value is below the starting value (for example all negative with a start of 0), the wrong result would be returned.*
5. Trace one pass of a bubble sort on 6, 3, 9, 2. *3, 6, 2, 9 after 2 swaps.*
6. Explain the purpose of the Swapped flag. *It records whether a swap occurred; if a pass has none the list is sorted and the algorithm can stop early.*
7. Explain why linear search suits unsorted data. *It needs no ordering because it checks each item in turn.*
8. In the shop example, which prices are counted if the prices are 20.00, 20.01 and 19.99? *Only 20.01 is greater than 20.00, so the count is 1.*
