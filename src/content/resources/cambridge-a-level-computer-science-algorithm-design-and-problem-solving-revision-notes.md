---
title: "Cambridge A Level Computer Science (9618): Algorithm Design and Problem-solving -- Revision Notes"
seoTitle: "Cambridge 9618 Algorithm Design Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes on abstraction, decomposition, identifier tables, structured English, flowcharts, pseudocode and stepwise refinement for Cambridge AS 9618."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Topic 9 Algorithm Design and Problem-solving is about turning a problem into a precise sequence of steps: using abstraction and decomposition, naming the data in an identifier table, and expressing the algorithm in structured English, a flowchart or Cambridge pseudocode, refined until it can be programmed. In Cambridge International AS & A Level Computer Science 9618 it is examined in Paper 2, where you write, convert and refine algorithms using the Cambridge pseudocode guide.

Related: [Algorithm Design and Problem-solving study guide](/resources/cambridge-a-level-computer-science-algorithm-design-and-problem-solving-study-guide/) · [practice questions](/resources/cambridge-a-level-computer-science-algorithm-design-and-problem-solving-practice/) · [Computer Science course hub](/boards/cambridge/a-level/computer-science/)

## Syllabus coverage

| Section | Candidates should be able to |
|---|---|
| 9.1 | Show an understanding of abstraction: the need for it, its benefits and purpose; produce an abstract model containing only essential details |
| 9.1 | Describe and use decomposition: break problems into sub-problems, leading to program modules (procedures and functions) |
| 9.2 | Show understanding that an algorithm is a solution expressed as a sequence of defined steps |
| 9.2 | Use suitable identifier names and represent them in an identifier table |
| 9.2 | Write pseudocode containing input, process and output, using sequence, selection and iteration |
| 9.2 | Document an algorithm using structured English, a flowchart or pseudocode; write pseudocode from structured English or a flowchart; draw a flowchart from structured English or pseudocode |
| 9.2 | Describe and use stepwise refinement; use logic statements to define parts of an algorithm |

Bubble sort and linear search are in 10.2; structure charts are in 12.2.

## Key definitions

| Term | Definition |
|---|---|
| Abstraction | Removing details that are not needed, so only the essential features of a problem are modelled |
| Decomposition | Breaking a problem into smaller sub-problems, each of which can be solved (and coded as a module) separately |
| Algorithm | A solution to a problem expressed as a sequence of defined steps |
| Identifier table | A table listing each identifier with its data type and a description of what it holds |
| Structured English | A restricted form of English, in numbered steps with keywords, used to describe an algorithm |
| Flowchart | A diagram of an algorithm using standard symbols joined by flow lines |
| Pseudocode | A language-independent, structured notation for an algorithm, using keywords and assignment |
| Stepwise refinement | Repeatedly breaking each step of an algorithm into more detailed steps until each can be programmed directly |

## Why use abstraction?

- It reduces complexity, so the problem is easier to understand and solve.
- The program is smaller and quicker to design, write and run, as it handles only what is needed.
- The model focuses on what the user needs; the same abstract model can be reused for similar problems.

**Example**: a model of a school bus route keeps the stops, their order and the times between them, and leaves out the colour of the bus and the driver's name.

## Why use decomposition?

- Each sub-problem is smaller and easier to solve, test and debug.
- Sub-problems become **modules** (procedures and functions) that can be written by different programmers at the same time and reused in other programs.

## The three basic constructs

| Construct | Meaning | Pseudocode |
|---|---|---|
| Sequence | Steps carried out one after another | Statements in order |
| Selection | A choice of path depending on a condition | `IF ... THEN ... ELSE ... ENDIF`, `CASE OF ... ENDCASE` |
| Iteration | Repeating steps | `FOR ... NEXT`, `REPEAT ... UNTIL`, `WHILE ... ENDWHILE` |

## Flowchart symbols

| Symbol | Use |
|---|---|
| Terminator (rounded rectangle) | START and STOP |
| Parallelogram | INPUT or OUTPUT |
| Rectangle | A process, such as an assignment |
| Diamond | A decision with Yes/No (or True/False) exits |
| Rectangle with double vertical sides | A call to a pre-defined process (procedure) |
| Arrowed lines | Flow of control |

A loop on a flowchart is a decision whose one exit leads back to an earlier point.

## Pseudocode essentials (Cambridge guide)

- Assignment uses `←`; constants are declared `CONSTANT MaxScore = 100`; variables `DECLARE Total : INTEGER`.
- Keywords are upper case; identifiers are mixed case, start with a letter and contain only letters, digits and underscores.
- `WHILE <condition>` ... `ENDWHILE` (no DO); `REPEAT` ... `UNTIL <condition>`; `FOR Count ← 1 TO 10` ... `NEXT Count`.
- Strings join with `&`, not `+`. String functions are supplied in the exam Insert.

## Identifier table example

| Identifier | Data type | Description |
|---|---|---|
| Temperature | REAL | The reading input by the user |
| Count | INTEGER | Number of readings entered |
| Total | REAL | Running total of the readings |
| AverageTemp | REAL | Mean of the readings |

## Worked example: structured English to pseudocode

Structured English:

1. Set the total and count to zero.
2. Input a temperature.
3. Repeat while the temperature is not 999: add it to the total, add 1 to the count, input the next temperature.
4. If the count is more than zero, output the average; otherwise output "No data".

Pseudocode:

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

The rogue value 999 ends input; the check on Count prevents dividing by zero. As a flowchart: START → set Total, Count → INPUT Temperature → decision "Temperature <> 999?" → Yes: process box (update Total and Count) → INPUT → back to the decision; No: decision "Count > 0?" → OUTPUT → STOP.

## Worked example: stepwise refinement

Top level: *Process the exam marks for a class.*

1. Input the marks → 1.1 For each of 30 students, input a mark; 1.2 Reject marks outside 0 to 100 and ask again.
2. Calculate the results → 2.1 Total the marks; 2.2 Find the highest mark; 2.3 Count marks of 50 or more.
3. Output the results → 3.1 Output the average to 1 decimal place; 3.2 Output the highest mark and the pass count.

Each step at the lowest level is small enough to translate directly into one or a few pseudocode statements.

## Logic statements

A logic statement defines a condition precisely, for example: *a customer gets free delivery if the order total is at least 50.00, or if they are a member and the order total is at least 30.00*.

```
IF OrderTotal >= 50.00 OR (IsMember = TRUE AND OrderTotal >= 30.00) THEN
   Delivery ← 0.00
ENDIF
```

Brackets make the order of evaluation explicit.

## Common mistakes and exam traps

- Defining abstraction as "hiding information"; it is **removing** unnecessary detail.
- Forgetting to read the next input inside a loop, so it never ends.
- Using `+` to join strings, or OUTPUT where a function should RETURN a value (June 2024 to June 2025 examiner reports).
- Using reserved words or built-in function names as identifiers (November 2024, June 2025).
- Writing language-specific code (e.g. Python `print`) instead of Cambridge pseudocode, or using functions not in the Insert.
- Leaving flowchart decisions without labelled Yes/No exits.

## Frequently asked questions

**Do I need to know a specific flowchart notation?**
Use the standard symbols above. Every decision must have two labelled exits, and every path must reach STOP.

**What is the difference between structured English and pseudocode?**
Structured English is a restricted form of English with numbered steps; pseudocode uses formal keywords, assignment arrows and data types and is closer to program code.

**How detailed should stepwise refinement be?**
Keep refining until each step corresponds to a single programming statement or construct.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 9 (9.1 Computational Thinking Skills, 9.2 Algorithms), and the Cambridge 9618 Pseudocode Guide for Teachers. Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
