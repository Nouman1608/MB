---
title: "Cambridge A Level Computer Science (9618): Computational Thinking Skills -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 9: Algorithm Design and Problem-solving"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 9.1
syllabusTopics:
  - qualification: "a-level"
    topic: "algorithm-design-and-problem-solving"
    subtopic: "computational-thinking-skills"
description: "Condensed notes on abstraction, abstract models, decomposition, procedures and functions for Cambridge AS Computer Science 9618 9.1, with a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **9.1 Computational Thinking Skills** (AS content, mainly Paper 2). The [Computational Thinking Skills study guide](/resources/cambridge-a-level-computer-science-9618-computational-thinking-skills/) works through a full abstract model and decomposition; the [Computational Thinking Skills practice questions](/resources/cambridge-a-level-computer-science-9618-computational-thinking-skills-practice/) give exam-style practice. Section 9.2 is in the [Algorithms revision notes](/resources/cambridge-a-level-computer-science-9618-algorithms-9-2-revision-notes/).

## What the syllabus wants

- **Abstraction**: its need, benefits and purpose; produce an abstract model containing **only essential details**.
- **Decomposition**: describe and use it; break a problem into sub-problems that become **program modules** (procedures and functions).

## Abstraction in four lines

- **Definition**: removing or hiding details that are not needed to solve the problem, keeping only the essential ones.
- **Abstract model**: the simplified representation that results.
- **Purpose**: to make the problem manageable and representable in a program.
- **Key idea**: what is "essential" depends on the **purpose** of the program.

## Benefits of abstraction

| Benefit | Because |
|---|---|
| Problem easier to understand | Fewer details to consider at once |
| Faster design and development | Less to plan and write |
| Smaller program, less memory and processing | Unneeded data is not stored or processed |
| Easier testing and maintenance | Fewer parts that can go wrong |
| Solution fits user needs | Design focuses on what the user requires |

## Producing an abstract model: routine

1. State the purpose of the program in a sentence.
2. List the real-world details.
3. For each, include or exclude, with a reason linked to the purpose.
4. Write the model: the data items (often as a record type) and any rules.
5. Leave out values that can be **calculated** from others.

Example: a school bus app that shows arrival times needs stop names, stop order and timetable times; it does not need the driver's name, the bus colour or the exact road layout.

## Decomposition in four lines

- **Definition**: breaking a problem into smaller sub-problems, each easier to solve.
- Repeat until each part can be solved directly.
- Each part becomes a **module**.
- Modules are **procedures** (do a task) or **functions** (do a task and return one value).

## Procedure or function?

| Clue in the task | Module |
|---|---|
| "Calculate", "find", "check whether", "return" a single answer | Function |
| "Output", "display", "save", "update", "print" with no answer needed back | Procedure |

```
FUNCTION Fine(DaysLate : INTEGER) RETURNS REAL
   RETURN DaysLate * 0.20
ENDFUNCTION

PROCEDURE ShowFine(Name : STRING, Amount : REAL)
   OUTPUT Name, " owes ", Amount
ENDPROCEDURE

CALL ShowFine("Lee", Fine(6))
```

A function is used inside an expression; a procedure is used with CALL.

## Benefits of decomposition

| Benefit | Explanation to give |
|---|---|
| Simpler sub-problems | Each can be understood and solved on its own |
| Separate testing | An error can be traced to one module |
| Teamwork | Modules can be written by different programmers at the same time |
| Reuse | A module can be called many times, or used in other programs |
| Maintenance | A change affects one module, not the whole program |

## Key terms

| Term | Meaning |
|---|---|
| Abstraction | Removing unnecessary detail, keeping what is essential for the purpose |
| Abstract model | Simplified representation of a system that keeps only essential details |
| Decomposition | Breaking a problem into sub-problems |
| Module | Self-contained part of a program that performs one task |
| Procedure | Module that performs a task; called with CALL |
| Function | Module that performs a task and returns a single value |
| Parameter | Value passed into a module |

## Exam traps

- Abstraction **removes detail**; decomposition **splits** the problem. Do not swap them.
- Exclusions need a reason linked to the purpose, not "it is not needed".
- A function **returns** a value; a procedure does not.
- Benefits need the "because": "easier to test, because each module is tested separately".
- Do not store values that can be calculated from stored ones (e.g. age from date of birth).
- Name sub-problems as actions: "calculate fine", not "fine".

## Self-test

1. Define abstraction.
2. State the purpose of abstraction.
3. Give two benefits of abstraction.
4. A cinema booking program shows free seats. Give one detail to include and one to exclude, with reasons.
5. Why might two programs about the same object have different abstract models?
6. Define decomposition.
7. Give two benefits of decomposition.
8. What is the difference between a procedure and a function?
9. A module must decide whether a password is strong enough. Procedure or function? Why?
10. A module must print a receipt. Procedure or function?
11. Why should "age" not be stored if "date of birth" is stored?
12. How does decomposition help a team of programmers?

**Answers**

1. Removing or hiding details that are not needed for the solution, leaving only the essential details.
2. To make the problem manageable / reduce it to what is needed so it can be modelled in a program.
3. Any two: easier to understand; quicker to design and write; less data to store and process; easier to test and maintain; focuses on user needs.
4. Include seat number and whether it is booked (needed to show free seats); exclude seat colour (does not affect whether it is free).
5. Each program has a different purpose, so different details are essential.
6. Breaking a problem down into smaller sub-problems that are easier to solve.
7. Any two: each part is simpler; modules tested separately; work shared; modules reused; easier maintenance.
8. A function returns a single value and is used in an expression; a procedure does not return a value and is called as a statement.
9. Function: it returns one answer (TRUE or FALSE).
10. Procedure: it performs an action and returns nothing.
11. Age can be calculated from date of birth, and a stored age would become out of date.
12. Different programmers can write and test different modules at the same time.
