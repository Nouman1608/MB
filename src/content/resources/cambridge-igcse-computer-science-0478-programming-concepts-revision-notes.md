---
title: "Cambridge IGCSE Computer Science (0478): Programming concepts -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 8: Programming"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 8.1
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-0478"
  - qualification: "igcse"
    topic: "programming-0478"
    subtopic: "programming-concepts-0478"
description: "Revision notes for Cambridge IGCSE Computer Science 0478 section 8.1: pseudocode keywords, data types, selection, loops, operators, procedures, functions and library routines."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
Condensed notes for syllabus section 8.1, Programming concepts, with the pseudocode forms used in the examination.

## Four facts to start with

1. A **variable** can change; a **constant** is fixed.
2. The five data types are INTEGER, REAL, CHAR, STRING and BOOLEAN.
3. Programs use **sequence, selection and iteration**.
4. A **function** returns a value; a **procedure** does not.

## Key terms

| Term | Definition |
|---|---|
| Variable | Named memory location whose value can change |
| Constant | Named value that does not change |
| Iteration | Repeating a set of statements |
| Counting | Adding 1 each time an event happens |
| Totalling | Adding values to a running total |
| Procedure | Named block of code that performs a task |
| Function | Named block of code that returns a value |
| Parameter | Value passed to a subroutine |
| Local variable | Only usable in the subroutine where it is declared |
| Global variable | Usable anywhere in the program |

## Pseudocode cheat sheet

| Task | Form |
|---|---|
| Declare | `DECLARE Count : INTEGER` |
| Constant | `CONSTANT Rate ← 6.50` |
| Assign | `Count ← Count + 1` |
| Input / output | `INPUT Name`, `OUTPUT "Total ", Total` |
| Selection | `IF ... THEN ... ELSE ... ENDIF` |
| Multi-way | `CASE OF ... ENDCASE` |
| Count-controlled loop | `FOR Index ← 1 TO 10 ... NEXT Index` |
| Pre-condition loop | `WHILE ... DO ... ENDWHILE` |
| Post-condition loop | `REPEAT ... UNTIL ...` |
| Procedure | `PROCEDURE Name(P : INTEGER) ... ENDPROCEDURE`, `CALL Name(5)` |
| Function | `FUNCTION Name(P : INTEGER) RETURNS INTEGER ... RETURN ... ENDFUNCTION` |

## Data types

| Type | Example |
|---|---|
| INTEGER | `7` |
| REAL | `7.0` |
| CHAR | `'a'` |
| STRING | `"abc"` |
| BOOLEAN | `TRUE` |

## Operators

| Group | Operators |
|---|---|
| Arithmetic | `+ - * / ^ MOD DIV` |
| Relational | `= < <= > >= <>` |
| Logical | `AND OR NOT` |

`DIV(17, 5)` is 3, `MOD(17, 5)` is 2.

## Loops compared

| | FOR | WHILE | REPEAT |
|---|---|---|---|
| Test position | Counter | Start | End |
| Minimum runs | 0 if start > end | 0 | 1 |
| Use | Known number | Unknown, may be none | Unknown, at least once |

## String handling

`LENGTH("Hello")` is 5. `SUBSTRING("Hello", 2, 3)` is `"ell"`. `UCASE("hello")` is `"HELLO"`.

## Library routines

`ROUND(3.14159, 2)` is 3.14. `RANDOM()` gives a number from 0 to 1. `ROUND(RANDOM() * 10, 0)` gives a whole number from 0 to 10.

## Worked example: trace table

```
Number ← 1
Count ← 0
REPEAT
    Number ← Number * 2
    Count ← Count + 1
UNTIL Number > 50
```

| Number | Count |
|---|---|
| 2 | 1 |
| 4 | 2 |
| 8 | 3 |
| 16 | 4 |
| 32 | 5 |
| 64 | 6 |

The loop stops when Number is 64 (greater than 50), with Count = 6.

## Maintainability checklist

- Meaningful identifiers.
- Comments starting `//`.
- Procedures and functions for repeated tasks.
- Constants for fixed values.
- Indentation for loops and selections.

## Choosing the right loop

| Situation | Loop |
|---|---|
| Ask for exactly 10 numbers | `FOR` |
| Keep reading until the user types 0 | `REPEAT ... UNTIL` or `WHILE` |
| Check input is valid, asking again if not | `REPEAT ... UNTIL` |
| Process a list only if it is not empty | `WHILE` |

## Worked example: validation loop

```
REPEAT
    INPUT Age
UNTIL Age >= 0 AND Age <= 120
```

The question is asked at least once. It repeats while the age is below 0 or above 120. With inputs -5, 150, 14 the loop runs three times and finishes with Age = 14.

## How to dry-run code in the exam

1. Draw a table with one column for every variable and one for any output.
2. Write the starting values on the first row.
3. Work through the code line by line. Add a new row each time a variable changes.
4. For a loop, check the condition each time and write down the value that makes it stop.
5. Read the final values and the output from the table, not from memory.

## Exam traps

- **No initialisation.** Set totals and counters to 0.
- **Wrong loop.** WHILE may never run; REPEAT always runs once.
- **`=` for assignment.** Use `←`.
- **CALL on a function.** Not used.
- **Phone number as INTEGER.** Use STRING.
- **Off by one.** Check start and end values.

## Self-test

1. What is the difference between a variable and a constant?
2. Which data type should hold a telephone number?
3. Name the three loop types.
4. What does `MOD(23, 5)` return?
5. What does `DIV(23, 5)` return?
6. What does `LENGTH("Cambridge")` return?
7. Which loop always runs at least once?
8. What does a function do that a procedure does not?
9. What is a local variable?
10. Why use meaningful identifiers?

**Answers**

1. A variable's value can change; a constant's value is fixed.
2. STRING.
3. Count-controlled (FOR), pre-condition (WHILE), post-condition (REPEAT).
4. 3.
5. 4.
6. 9.
7. REPEAT ... UNTIL.
8. It returns a value.
9. A variable that can only be used in the subroutine where it is declared.
10. They make the program easier to read, understand and maintain.

## Command words to expect

| Command word | What to write |
|---|---|
| State, Give, Identify | A short answer with no explanation |
| Define | A precise meaning |
| Describe | The main points or characteristics, or the steps in order |
| Explain | A reason or "how and why", supported with evidence from the question |
| Compare | Similarities and differences, naming both sides every time |
| Suggest | A sensible proposal that applies your knowledge to the situation given |
| Evaluate | A judgement based on advantages and disadvantages, ending with a conclusion |

## Next steps

Read the full explanations in the [Programming concepts study guide](/resources/cambridge-igcse-computer-science-0478-programming-concepts/), then try the [Programming concepts practice questions](/resources/cambridge-igcse-computer-science-0478-programming-concepts-practice/).

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 8.1:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
