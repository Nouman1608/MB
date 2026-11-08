---
title: "O Level Computer Science: Algorithm Design and Problem-Solving (Cambridge 2210)"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Algorithm design and problem-solving"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 7
syllabusTopics:
  - qualification: "o-level"
    topic: "algorithm-design-and-problem-solving-2210"
description: "Topic 7 guide for Cambridge O Level Computer Science 2210: the life cycle, decomposition, standard algorithms, validation, test data and trace tables."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Topic 7 of Cambridge O Level Computer Science (2210) is about designing algorithms that work and proving that they do. You need to follow the program development life cycle, break a problem into parts, write solutions as structure diagrams, flowcharts and pseudocode, use the standard methods (linear search, bubble sort, totalling, counting, maximum, minimum and average), protect input with validation and verification, choose test data, dry-run with trace tables, and find and fix errors.

## Where Topic 7 sits in 2210

Topic 7 opens the "Algorithms, programming and logic" half of 2210 and is examined on Paper 2 (1 hour 45 minutes, 75 marks). Its learning outcomes are the same as Topic 7 of Cambridge IGCSE Computer Science (0478). Where an answer involves code, the syllabus requires pseudocode, except in the final 15-mark scenario question, where pseudocode, Python, Visual Basic or Java may be used. Precision matters: the syllabus itself says `x > y` is acceptable in an algorithm but "x is greater than y" is not.

## The program development life cycle

| Stage | What happens (as listed in the syllabus) |
|---|---|
| Analysis | Abstraction; decomposition of the problem; identification of the problem and requirements |
| Design | Decomposition; structure diagrams, flowcharts, pseudocode |
| Coding | Writing program code and iterative testing |
| Testing | Testing program code with the use of test data |

**Abstraction** keeps the details that matter and discards the rest. For a parking-meter program, the length of stay and the hourly charge matter; the colour of the meter does not.

## Decomposition into sub-systems

Every computer system is made of sub-systems, which are themselves made of further sub-systems. For a parking meter:

- **Inputs:** coins or card payment; the time the driver wants
- **Processes:** calculating the fee; checking the payment covers it; calculating the expiry time
- **Outputs:** the ticket showing the expiry time; any change
- **Storage:** the hourly charge; a record of today's takings

A **structure diagram** shows this as a hierarchy, with "Parking meter" at the top and boxes underneath for "Take payment", "Calculate fee" and "Print ticket", each of which can be split again.

A **flowchart** shows the order of steps using the standard symbols: terminator (start/stop), input/output, process, decision (with yes/no exits), subroutine and flow lines.

## Explaining the purpose of an algorithm

Learning outcome 7.3 asks you to state the purpose of a given algorithm and describe its processes. Start with one sentence on what it achieves, then explain how. Look at this:

```
Count ← 0
FOR Turn ← 1 TO 4
    INPUT Number
    IF MOD(Number, 3) = 0
      THEN
        Count ← Count + 1
    ENDIF
NEXT Turn
OUTPUT Count
```

**Purpose:** it counts how many of four numbers entered are multiples of 3. **Processes:** a counter is set to zero; a loop runs four times, inputting a number each time; if the number divides exactly by 3 the counter is increased; after the loop the count is output.

## The standard methods of solution

**Totalling and counting** use variables that start at 0 and are increased inside a loop: `Total ← Total + Value`, `Count ← Count + 1`.

**Maximum and minimum** compare each value with the current best, and replace it if the new value is larger (or smaller). Set the starting value carefully — either to the first value in the list, or to a value that every real value will beat.

**Average** is the total divided by the number of values, calculated **after** the loop.

**Linear search** checks each item in order from the first until it finds a match or reaches the end:

```
INPUT Wanted
Index ← 1
Found ← FALSE
WHILE Found = FALSE AND Index <= 20 DO
    IF Codes[Index] = Wanted
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
    OUTPUT "Not in the list"
ENDIF
```

**Bubble sort** passes through a list comparing neighbouring pairs and swapping any that are out of order, using a temporary variable so no value is lost. A flag records whether a swap happened; when a full pass makes no swaps, the list is sorted. To sort into **descending** order, change the comparison from `>` to `<`.

## Validation and verification

**Validation** is an automatic check that input is reasonable. The syllabus names six:

- **Range check** — between set limits (an employee's age from 18 to 65).
- **Length check** — the right number of characters (a PIN of exactly 4 digits).
- **Type check** — the right data type (a quantity is an integer).
- **Presence check** — the field is not empty.
- **Format check** — matches a pattern (a staff code like ST-0412).
- **Check digit** — an extra digit calculated from the others and recalculated on entry to catch typing errors.

**Verification** checks data has been entered or copied accurately: a **visual check** (the user reads the entry against the source) and a **double entry check** (the data is typed twice and the two compared).

## Choosing test data

For an employee age that must be a whole number from 18 to 65 inclusive:

| Type | Value(s) | Expected result |
|---|---|---|
| Normal | 40 | Accepted |
| Abnormal | 70, −3, "forty" | Rejected |
| Extreme | 18 and 65 | Accepted |
| Boundary | 17 and 18; 65 and 66 | 18 and 65 accepted; 17 and 66 rejected |

## Worked example 1: a descending bubble sort

Sort 4, 9, 2, 7 into descending order.

| Pass | Steps | List after pass | Swap made? |
|---|---|---|---|
| 1 | 4<9 swap; 4, 2 keep; 2<7 swap | 9, 4, 7, 2 | Yes |
| 2 | 9, 4 keep; 4<7 swap | 9, 7, 4, 2 | Yes |
| 3 | 9, 7 keep | 9, 7, 4, 2 | No → stop |

## Worked example 2: a trace table

Trace the "multiples of 3" algorithm above with inputs 4, 9, 12, 7.

| Turn | Number | Count | OUTPUT |
|---|---|---|---|
| | | 0 | |
| 1 | 4 | 0 | |
| 2 | 9 | 1 | |
| 3 | 12 | 2 | |
| 4 | 7 | 2 | |
| | | | 2 |

## Worked example 3: finding errors

This should output the average of 10 marks, but has two errors:

```
Total ← 1
FOR Student ← 1 TO 10
    INPUT Mark
    Total ← Total + Mark
    Average ← Total / 10
    OUTPUT Average
NEXT Student
```

- `Total ← 1` should be `Total ← 0`, otherwise the total is one too high.
- The average is calculated and output inside the loop, so it is printed ten times; move `Average ← Total / 10` and `OUTPUT Average` after `NEXT Student`.

## How to approach it

Write algorithms in the Cambridge pseudocode format and practise tracing them by hand, one row per change. When a question asks for test data, always state the value **and** whether it should be accepted or rejected. When fixing errors, quote the line number and write the corrected line in full.

## Frequently asked questions

**What is the difference between validation and verification in 2210?**
Validation checks that data is reasonable and follows rules, such as a range check. Verification checks that data was entered accurately, using a visual check or double entry.

**Can boundary data be outside the allowed range?**
Yes, half of it is. Boundary data is the largest or smallest accepted value together with the matching smallest or largest rejected value.

**How do I decide between a FOR loop and a WHILE loop in a search?**
A linear search should stop as soon as the item is found, so a condition-controlled loop (WHILE or REPEAT) is the better choice.

**Do I need to know any sort other than bubble sort?**
No. Bubble sort is the only sorting method listed in the 2210 syllabus.

## Official syllabus

Cambridge International, *Cambridge O Level Computer Science (2210) syllabus for examination in 2026, 2027 and 2028*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf), Subject content, section 7 "Algorithm design and problem-solving", and section 4 for the flowchart symbols and pseudocode format. Checked 2026-11-08.

Next steps: revise from the [algorithm design revision notes](/resources/o-level-computer-science-algorithm-design-revision-notes/), then work through the [algorithm design practice questions](/resources/o-level-computer-science-algorithm-design-practice/).
