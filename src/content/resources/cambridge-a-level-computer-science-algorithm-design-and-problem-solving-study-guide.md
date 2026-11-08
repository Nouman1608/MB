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
description: "Cambridge 9618 Topic 9 study guide: abstraction, decomposition, identifier tables, structured English, flowcharts, pseudocode and stepwise refinement."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08 recheck: realigned to 9.1-9.2; bubble sort and linear search (10.2) and structure charts (12.2) moved to cross-references; added identifier tables, structured English/flowchart conversion, stepwise refinement and logic statements; please re-review; 2026-11-08: reviewed by harris-khan."
publishedDate: 2026-11-08
featured: false
---

Topic 9 of Cambridge International AS & A Level Computer Science (9618) is about describing how a problem will be solved before any code is written. **9.1 Computational Thinking Skills** covers abstraction and decomposition. **9.2 Algorithms** covers what an algorithm is, identifier tables, the three basic constructs, documenting an algorithm in structured English, a flowchart or pseudocode, converting between those forms, stepwise refinement and logic statements. The syllabus tells candidates to use the Cambridge Pseudocode Guide, and Paper 2 expects pseudocode in that style.

## What does the 9618 syllabus list for Topic 9?

| Ref | Candidates should be able to |
|---|---|
| 9.1 | Show an understanding of abstraction: the need for and benefits of it, its purpose, and produce an abstract model including only essential details |
| 9.1 | Describe and use decomposition: break problems into sub-problems, leading to the idea of a program module (procedure or function) |
| 9.2 | Show understanding that an algorithm is a solution to a problem expressed as a sequence of defined steps |
| 9.2 | Use suitable identifier names and represent them in an identifier table |
| 9.2 | Write pseudocode containing input, process and output, using sequence, selection and iteration |
| 9.2 | Document a simple algorithm using structured English, a flowchart or pseudocode |
| 9.2 | Write pseudocode from structured English or a flowchart; draw a flowchart from structured English or pseudocode |
| 9.2 | Describe and use stepwise refinement; use logic statements to define parts of an algorithm |

Sorting with a bubble sort and searching with a linear search are in **10.2 Arrays** (see the [Data Types and Structures study guide](/resources/cambridge-a-level-computer-science-data-types-and-structures-study-guide/)). Structure charts are in **12.2 Program Design** (see the [Software Development study guide](/resources/cambridge-a-level-computer-science-software-development-study-guide/)).

## 9.1 What is abstraction and why is it used?

**Abstraction** means producing a model of a problem or system that includes only the essential details and leaves out the rest. A route-planning program models a rail network as stations and journey times; the colour of the trains is left out.

Benefits: the problem becomes simpler to understand and solve; the solution needs less time to design and program, and less memory; the model focuses on what the user actually needs; and a general solution can be reused for similar problems.

## 9.1 What is decomposition?

**Decomposition** means breaking a problem down into smaller sub-problems, each of which is easier to understand, solve and test. Repeating the process until each part is a single, well-defined task leads to the idea of a **program module**: each sub-problem can become a **procedure** or a **function**. Modules can be written and tested separately, shared between programmers and reused.

## 9.2 What is an algorithm and an identifier table?

An **algorithm** is a solution to a problem expressed as a **sequence of defined steps**.

An **identifier table** lists the identifiers (names) used for the data in a problem, with their data types and what each represents. Names should be meaningful.

| Identifier | Data type | Description |
|---|---|---|
| Temperature | REAL | A reading input by the user |
| Count | INTEGER | Number of readings entered |
| Total | REAL | Running total of the readings |
| AverageTemp | REAL | Mean of the readings |

## 9.2 What are the three basic constructs?

| Construct | Meaning | Cambridge pseudocode |
|---|---|---|
| Sequence | Steps carried out one after another | Statements in order |
| Selection | A choice of path depending on a condition | `IF ... THEN ... ELSE ... ENDIF`, `CASE OF ... OTHERWISE ... ENDCASE` |
| Iteration (repetition) | Repeating steps | `FOR ... TO ... NEXT`, `REPEAT ... UNTIL`, `WHILE ... ENDWHILE` |

Key points from the Cambridge Pseudocode Guide: keywords are upper case; assignment uses `←`; variables are declared `DECLARE Total : INTEGER` and constants `CONSTANT MaxMark = 100`; a `WHILE` loop is written `WHILE <condition>` with no `DO`; values are read with `INPUT` and displayed with `OUTPUT`; strings are joined with `&`.

## 9.2 How do you document an algorithm in structured English, a flowchart and pseudocode?

**Structured English** describes the steps in short, numbered English sentences using a restricted set of words such as SET, INPUT, REPEAT, IF and OUTPUT.

**Flowchart** symbols:

| Symbol | Use |
|---|---|
| Terminator (rounded rectangle) | START and STOP |
| Parallelogram | INPUT or OUTPUT |
| Rectangle | A process, such as an assignment |
| Diamond | A decision with two labelled exits (Yes/No) |
| Rectangle with double vertical sides | A call to a pre-defined process (procedure) |
| Arrowed lines | The flow of control |

A loop on a flowchart is a decision with one exit leading back to an earlier point.

**Pseudocode** follows the Cambridge Pseudocode Guide, as in the examples below.

## Worked example 1: structured English to pseudocode and flowchart

Structured English:

1. Set the total and count to zero.
2. Input a temperature.
3. Repeat while the temperature is not 999: add it to the total, add 1 to the count, input the next temperature.
4. If the count is more than zero, output the average; otherwise output "No data".

Pseudocode (input, process and output, using all three constructs):

```
DECLARE Temperature, Total, AverageTemp : REAL
DECLARE Count : INTEGER
Total ← 0.0
Count ← 0
INPUT Temperature
WHILE Temperature <> 999
   Total ← Total + Temperature
   Count ← Count + 1
   INPUT Temperature
ENDWHILE
IF Count > 0 THEN
   AverageTemp ← Total / Count
   OUTPUT "Average: ", AverageTemp
ELSE
   OUTPUT "No data"
ENDIF
```

The **rogue value** 999 ends input, and the check on Count prevents a division by zero. As a flowchart: START, a process box setting Total and Count to 0, an INPUT box for Temperature, a decision "Temperature <> 999?"; the Yes exit leads to a process box updating Total and Count, then an INPUT box, then back to the decision; the No exit leads to a decision "Count > 0?" with an OUTPUT box on each exit, then STOP.

## 9.2 What is stepwise refinement?

**Stepwise refinement** breaks each step of an algorithm into smaller, more detailed steps, repeatedly, until every step is detailed enough to be programmed directly.

Top level: *Process the exam marks for a class of 30.*

1. Input the marks: 1.1 for each of 30 students, input a mark; 1.2 if a mark is outside 0 to 100, ask again.
2. Calculate the results: 2.1 total the marks; 2.2 find the highest mark; 2.3 count marks of 50 or more.
3. Output the results: 3.1 output the average; 3.2 output the highest mark and the pass count.

Each step at the lowest level becomes one or a few pseudocode statements. Refining step 2.2:

```
DECLARE Mark, Highest, Count : INTEGER
INPUT Mark
Highest ← Mark
FOR Count ← 2 TO 30
   INPUT Mark
   IF Mark > Highest THEN
      Highest ← Mark
   ENDIF
NEXT Count
OUTPUT "Highest mark: ", Highest
```

Highest is set from the first mark, not from 0, so the algorithm still works if every value were negative.

## 9.2 How are logic statements used in an algorithm?

A **logic statement** defines a condition precisely using AND, OR and NOT, for example: *a customer gets free delivery if the order total is at least 50.00, or if they are a member and the order total is at least 30.00*.

```
IF OrderTotal >= 50.00 OR (IsMember = TRUE AND OrderTotal >= 30.00) THEN
   Delivery ← 0.00
ENDIF
```

Brackets make the order of evaluation explicit. Test boundary values: an order of exactly 30.00 from a member qualifies; 29.99 does not.

## Worked example 2: designing from a problem

A shop wants an algorithm that reads prices, stopping when 0 is entered, and outputs the highest price and how many items cost more than 20.00.

1. **Decompose**: input loop, highest-price update, count of expensive items, output.
2. **Identifier table**: Price (REAL), Highest (REAL), ExpensiveCount (INTEGER).
3. **Design** in structured English: input the first price and set Highest to it; while Price is not 0, update Highest if Price is larger, add 1 to ExpensiveCount if Price > 20.00, input the next price; output Highest and ExpensiveCount.
4. **Test** with 12.50, 25.00, 20.00, 31.75, 0: Highest is 31.75 and ExpensiveCount is 2. 20.00 is not more than 20.00, so using >= would wrongly give 3.

## Common mistakes

- Describing abstraction as "hiding things" instead of "including only the essential details".
- Using non-Cambridge syntax, such as `WHILE ... DO`, `ENDFOR`, `PRINT` or `=` for assignment.
- Forgetting to input the next value inside a loop, so it never ends.
- Initialising a maximum to 0 instead of the first value.
- Flowcharts with unlabelled decision exits or missing arrows.
- Variables used before they are given a value.

## Exam technique

**Write an algorithm** questions are marked on correct constructs, initialisation, a correct loop condition and output, so indent your pseudocode and declare variables. When converting a flowchart to pseudocode, identify each loop first (a decision with an arrow back) and choose `WHILE` (test before) or `REPEAT` (test after) to match. If you cannot see the whole solution, write the loop structure first, because partial credit is common.

## Frequently asked questions

**Is bubble sort part of 9618 Topic 9?**
No. Bubble sort and linear search are in 10.2 Arrays, and the A Level versions with insertion and binary search are in 19.1. Topic 9 is about designing and documenting algorithms.

**Where are structure charts in the 9618 syllabus?**
In 12.2 Program Design, alongside state-transition diagrams.

**Which pseudocode style should I use?**
The Cambridge International 9618 Pseudocode Guide for Teachers, which the syllabus refers to in Topic 9: upper-case keywords, `←` for assignment, `ENDIF`, `ENDWHILE`, `NEXT`, `UNTIL`.

**What is the difference between decomposition and stepwise refinement?**
Both break a problem down. Decomposition splits a problem into sub-problems that can become modules; stepwise refinement adds detail to each step of an algorithm until it can be programmed.

## Check your understanding

1. Define abstraction and give an example. *Including only the essential details in a model, such as a rail map showing stations and connections but not buildings.*
2. State two benefits of decomposition. *Smaller parts are easier to solve and test; parts can become reusable procedures or functions written by different people.*
3. What is an algorithm? *A solution to a problem expressed as a sequence of defined steps.*
4. Which flowchart symbol is used for input and output? *A parallelogram.*
5. Name the three basic constructs. *Sequence, selection and iteration.*
6. Write the Cambridge pseudocode for a loop that outputs the numbers 1 to 5. *FOR Count ← 1 TO 5, OUTPUT Count, NEXT Count.*
7. What is stepwise refinement? *Breaking each step into more detailed steps until each can be programmed directly.*
8. In the shop example, how many items are counted for prices 20.00, 20.01 and 19.99? *1 (only 20.01).*

## Related pages

- [Algorithm Design and Problem-solving revision notes](/resources/cambridge-a-level-computer-science-algorithm-design-and-problem-solving-revision-notes/)
- [Algorithm Design and Problem-solving practice questions](/resources/cambridge-a-level-computer-science-algorithm-design-and-problem-solving-practice/)

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Computer Science 9618*, syllabus for 2026 and syllabus for 2027, 2028 and 2029, section 9 "Algorithm Design and Problem-solving"; *Pseudocode Guide for Teachers* (9618).
