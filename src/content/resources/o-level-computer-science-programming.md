---
title: "O Level Computer Science: Programming (Cambridge 2210)"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Programming"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 8
syllabusTopics:
  - qualification: "o-level"
    topic: "programming-2210"
description: "Topic 8 guide for Cambridge O Level Computer Science 2210, built around one step-tracker program: data types, loops, strings, subroutines, 2D arrays and files."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Topic 8 of Cambridge O Level Computer Science (2210) is the practical heart of Paper 2: declaring variables and constants, choosing data types, using sequence, selection and iteration, handling strings, writing procedures and functions, storing data in arrays, and reading and writing files. This guide teaches each concept through one running example — a program for a fitness step tracker — so you can see how the pieces fit into a real solution.

## Where Topic 8 sits in 2210

Topic 8 is part of "Algorithms, programming and logic" and is examined on Paper 2 (1 hour 45 minutes, 75 marks). The syllabus says Paper 2 questions require practical programming experience, but knowledge of a particular language's syntax is not examined — the logic matters most. Answers are written in the Cambridge pseudocode set out in section 4 of the syllabus, except in the final 15-mark scenario question, which also accepts Python, Visual Basic or Java. The content is the same as Topic 8 of Cambridge IGCSE Computer Science (0478). It has three sub-topics: 8.1 Programming concepts, 8.2 Arrays and 8.3 File handling.

## 8.1 Variables, constants and data types

A tracker needs to store a daily goal that never changes while the program runs, and values that do change:

```
CONSTANT DailyGoal ← 10000
DECLARE StepsToday : INTEGER
DECLARE DistanceKm : REAL
DECLARE Initial : CHAR
DECLARE UserName : STRING
DECLARE GoalMet : BOOLEAN
```

The five data types in the syllabus are **integer** (whole numbers such as a step count), **real** (numbers with decimals such as 7.4 km), **char** (one character), **string** (text) and **Boolean** (TRUE or FALSE). Using a **constant** for the goal means the value is set in one place; if the goal changes to 12 000, one line is edited, and the name `DailyGoal` explains what the number means.

## Input, output and sequence

```
OUTPUT "Enter today's steps"
INPUT StepsToday
DistanceKm ← StepsToday * 0.0007
OUTPUT "You walked about ", DistanceKm, " km"
```

**Sequence** means statements run in the order written, one after another.

## Selection: IF and CASE

```
IF StepsToday >= DailyGoal
  THEN
    GoalMet ← TRUE
    OUTPUT "Goal reached!"
  ELSE
    GoalMet ← FALSE
    OUTPUT "Steps still needed: ", DailyGoal - StepsToday
ENDIF
```

A **CASE** statement is neater when one variable is compared with several values:

```
CASE OF BadgeLevel
    1 : OUTPUT "Bronze"
    2 : OUTPUT "Silver"
    3 : OUTPUT "Gold"
    OTHERWISE OUTPUT "No badge yet"
ENDCASE
```

## Iteration: three kinds of loop

| Loop | Pseudocode | Tracker example |
|---|---|---|
| Count-controlled | `FOR Day ← 1 TO 7 ... NEXT Day` | Input seven days of steps |
| Pre-condition | `WHILE StepsToday < 0 DO ... ENDWHILE` | Keep asking while the input is invalid; may not run at all |
| Post-condition | `REPEAT ... UNTIL Answer = 'N'` | Show the menu at least once, then repeat until the user quits |

A FOR loop can count in steps: `FOR Countdown ← 10 TO 0 STEP -2` gives 10, 8, 6, 4, 2, 0.

## Totalling and counting

```
WeekTotal ← 0
DaysMet ← 0
FOR Day ← 1 TO 7
    INPUT Steps
    WeekTotal ← WeekTotal + Steps
    IF Steps >= DailyGoal
      THEN
        DaysMet ← DaysMet + 1
    ENDIF
NEXT Day
```

## String handling

The syllabus lists four operations: length, substring, upper and lower. With `UserName ← "Ayesha_07"`:

| Expression | Result |
|---|---|
| `LENGTH(UserName)` | 9 |
| `SUBSTRING(UserName, 1, 3)` | "Aye" |
| `SUBSTRING(UserName, 8, 2)` | "07" |
| `UCASE(UserName)` | "AYESHA_07" |
| `LCASE(UserName)` | "ayesha_07" |

`SUBSTRING(string, start, length)` — the third value is the **number of characters**, not the end position. Cambridge pseudocode generally counts the first character as position 1.

## Operators and library routines

Arithmetic: `+ - * /`, `^` (power), `MOD` (remainder), `DIV` (whole-number quotient). Relational: `= < <= > >= <>`. Logical: `AND OR NOT`.

Library routines: `MOD`, `DIV`, `ROUND` and `RANDOM`. For the tracker, `DIV(StepsToday, 1000)` gives the number of complete thousands (useful for awarding one point per thousand steps), `MOD(StepsToday, 1000)` gives the steps left over, and `ROUND(DistanceKm, 1)` gives the distance to one decimal place. `RANDOM()` returns a number from 0 to 1 inclusive — the tracker could use it to pick a random motivational message.

## Nested statements

Statements can be placed inside each other — an IF inside a loop, or a loop inside a loop. The syllabus says you will not be asked to write more than three levels of nesting.

## Procedures, functions and parameters

```
FUNCTION Points(Steps : INTEGER) RETURNS INTEGER
    RETURN DIV(Steps, 1000)
ENDFUNCTION

PROCEDURE ShowBanner(Name : STRING, Total : INTEGER)
    OUTPUT "Well done ", Name
    OUTPUT "Points earned this week: ", Points(Total)
ENDPROCEDURE

CALL ShowBanner(UserName, WeekTotal)
```

A **function** returns a value, so it is used inside an expression. A **procedure** carries out a task and is started with `CALL`. **Parameters** pass values in — up to three in the exam. Variables declared inside a subroutine are **local** (they exist only while it runs); variables declared in the main program and available everywhere are **global**.

## Writing a maintainable program

The syllabus lists meaningful identifiers (for variables, constants, arrays, procedures and functions), the commenting feature of the language, procedures and functions, and relevant comments. In pseudocode a comment starts with `//`:

```
// Award one point for every complete 1000 steps
```

## 8.2 Arrays

A 1D array stores one week of steps; a 2D array stores four weeks:

```
DECLARE Week : ARRAY[1:7] OF INTEGER
DECLARE Month : ARRAY[1:4, 1:7] OF INTEGER
```

A variable such as `Day` can be used as the index, which is what makes arrays work with loops.

### Worked example: best day in four weeks

```
Best ← Month[1, 1]
BestWeek ← 1
BestDay ← 1
FOR W ← 1 TO 4
    FOR D ← 1 TO 7
        IF Month[W, D] > Best
          THEN
            Best ← Month[W, D]
            BestWeek ← W
            BestDay ← D
        ENDIF
    NEXT D
NEXT W
OUTPUT "Best day: week ", BestWeek, " day ", BestDay, " with ", Best, " steps"
```

The outer loop chooses the week, the inner loop the day, so every one of the 28 values is checked. Starting `Best` at the first element guarantees it is a real value.

## 8.3 File handling

Variables are lost when the program closes, so data that must be kept — such as a personal best — is stored in a file.

```
OPENFILE "Best.txt" FOR WRITE
WRITEFILE "Best.txt", Best
CLOSEFILE "Best.txt"
```

Next time the program runs it can read the value back:

```
OPENFILE "Best.txt" FOR READ
READFILE "Best.txt", OldBest
CLOSEFILE "Best.txt"
```

Opening a file FOR WRITE creates a new file, and any existing data in it is lost.

## How to approach it

Write pseudocode by hand regularly, because Paper 2 marks the logic line by line. Learn the exact library routine and string function names from section 4 of the syllabus, and practise nested loops with 2D arrays until you can write one without hesitating.

## Frequently asked questions

**What is the difference between a constant and a variable?**
A variable's value can change while the program runs; a constant's value is fixed once it is set. Constants make programs easier to read and update.

**When should I use a function instead of a procedure?**
Use a function when the subroutine needs to send one value back to the code that called it, such as a calculated score. Use a procedure when it only performs a task, such as displaying a message.

**Do I need to know a programming language for 2210?**
You need practical programming experience, but the exam does not test the syntax of a particular language. Most answers are in pseudocode.

## Official syllabus

Cambridge International, *Cambridge O Level Computer Science (2210) syllabus for examination in 2026, 2027 and 2028*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf), Subject content, section 8 "Programming" (8.1–8.3), and section 4 for the pseudocode format. Checked 2026-11-08.

Next steps: revise from the [Programming revision notes](/resources/o-level-computer-science-programming-revision-notes/), then try the [Programming practice questions](/resources/o-level-computer-science-programming-practice/).
