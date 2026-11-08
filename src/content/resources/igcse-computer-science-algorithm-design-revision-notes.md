---
title: "IGCSE Computer Science: Algorithm Design and Problem-Solving — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Algorithm design and problem-solving"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 7
syllabusTopics:
  - qualification: "igcse"
    topic: "algorithm-design-and-problem-solving-0478"
description: "Revision notes on the development life cycle, linear search, bubble sort, validation, verification, test data and trace tables for Cambridge IGCSE 0478."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Topic 7 is about planning a solution before and while you code: breaking a problem down, representing an algorithm as a structure diagram, flowchart or pseudocode, using the standard methods of solution, and checking an algorithm with validation, test data and trace tables. In Cambridge IGCSE Computer Science (0478) it is examined on Paper 2, where answers that involve code must be written in pseudocode (except the 15-mark scenario question, which also accepts Python, Visual Basic or Java).

Condensed for the final weeks. For the full explanation, use the
[Algorithm design and problem-solving study guide](/resources/cambridge-igcse-computer-science-algorithm-design-and-problem-solving-study-guide/); then test yourself with the
[algorithm design practice questions](/resources/igcse-computer-science-algorithm-design-practice/).

## Syllabus coverage

Learning outcomes from the Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028:

| Ref | Learning outcome (summarised) |
|---|---|
| 7.1 | The program development life cycle: analysis, design, coding, testing |
| 7.2 | Sub-systems; decomposing a problem into inputs, processes, outputs and storage; structure diagrams, flowcharts and pseudocode |
| 7.3 | Explaining the purpose of a given algorithm |
| 7.4 | Standard methods: linear search, bubble sort, totalling, counting, finding maximum, minimum and average |
| 7.5 | Validation checks (range, length, type, presence, format, check digit) and verification checks (visual, double entry) |
| 7.6 | Suggesting test data: normal, abnormal, extreme, boundary |
| 7.7 | Completing a trace table |
| 7.8 | Identifying and correcting errors in algorithms |
| 7.9 | Writing and amending algorithms in pseudocode, program code and flowcharts |

## 7.1 The program development life cycle

| Stage | Tasks named in the syllabus |
|---|---|
| Analysis | Abstraction, decomposition of the problem, identification of the problem and requirements |
| Design | Decomposition, structure diagrams, flowcharts, pseudocode |
| Coding | Writing program code and iterative testing |
| Testing | Testing program code with the use of test data |

**Abstraction** = removing unnecessary detail so you focus on what matters. **Decomposition** = breaking the problem into smaller parts.

## 7.2 Decomposition and design methods

Every computer system is made of **sub-systems**, which are made of further sub-systems. Decompose a problem into:

- **inputs** — data entered into the system
- **processes** — calculations and decisions
- **outputs** — results shown or produced
- **storage** — data kept for later use

A **structure diagram** shows the hierarchy: the whole system at the top, sub-systems underneath. A **flowchart** uses the standard symbols: terminator (start/stop), process, input/output, decision, subroutine and flow lines. **Pseudocode** uses the Cambridge format, for example `Total ← Total + Mark`.

## 7.4 The standard methods of solution

### Totalling, counting, maximum, minimum and average

```
Total ← 0
Count ← 0
Highest ← -9999
Lowest ← 9999
FOR Index ← 1 TO 30
    Total ← Total + Score[Index]
    IF Score[Index] >= 50
      THEN
        Count ← Count + 1
    ENDIF
    IF Score[Index] > Highest
      THEN
        Highest ← Score[Index]
    ENDIF
    IF Score[Index] < Lowest
      THEN
        Lowest ← Score[Index]
    ENDIF
NEXT Index
Average ← Total / 30
```

Key rules: totals and counts start at **0**; the starting maximum must be lower than any possible value, the starting minimum higher (or set both to the first item).

### Linear search

```
INPUT SearchItem
Found ← FALSE
Index ← 1
REPEAT
    IF Names[Index] = SearchItem
      THEN
        Found ← TRUE
      ELSE
        Index ← Index + 1
    ENDIF
UNTIL Found = TRUE OR Index > 50
IF Found = TRUE
  THEN
    OUTPUT SearchItem, " found at position ", Index
  ELSE
    OUTPUT SearchItem, " not found"
ENDIF
```

Checks each item in turn from the start until the item is found or the end of the list is reached.

### Bubble sort

```
Last ← 10
REPEAT
    Swapped ← FALSE
    FOR Index ← 1 TO Last - 1
        IF List[Index] > List[Index + 1]
          THEN
            Temp ← List[Index]
            List[Index] ← List[Index + 1]
            List[Index + 1] ← Temp
            Swapped ← TRUE
        ENDIF
    NEXT Index
    Last ← Last - 1
UNTIL Swapped = FALSE OR Last <= 1
```

Compares each pair of neighbouring items and swaps them if they are in the wrong order. After each pass the largest remaining value is in its final place. It stops when a pass makes no swaps.

## 7.5 Validation and verification

**Validation** = an automatic check that data is reasonable and sensible. **Verification** = a check that data has been copied or entered accurately. Validation cannot prove data is correct: a valid age of 41 typed instead of 14 passes a range check.

| Check | What it does | Example |
|---|---|---|
| Range | Value lies between limits | Month from 1 to 12 |
| Length | Number of characters is correct or within limits | Password at least 8 characters |
| Type | Data is the correct data type | Quantity is a whole number |
| Presence | Something has been entered | Email address not left blank |
| Format | Data follows a pattern | Product code is two letters then four digits |
| Check digit | Extra digit calculated from the others is re-calculated and compared | Barcodes, ISBNs |
| Visual check (verification) | User compares the entry with the original on screen | Reading back a delivery address |
| Double entry (verification) | Data is entered twice and the two entries are compared | Setting a new password |

## 7.6 Test data

For "a whole number from 1 to 20 inclusive":

| Type | Meaning | Example |
|---|---|---|
| Normal | Within range, should be accepted | 7 |
| Abnormal | Should be rejected (out of range or wrong type) | 35, "seven" |
| Extreme | The largest or smallest acceptable value | 1 or 20 |
| Boundary | The largest/smallest acceptable value **and** the matching value just rejected | 0 and 1; 20 and 21 |

## 7.7 Worked example: tracing a bubble sort

Sort 7, 3, 9, 1, 5 into ascending order with the bubble sort above (Last starts at 5).

| Pass | Comparisons and swaps | List after pass | Swapped |
|---|---|---|---|
| 1 | 7↔3 swap; 7,9 no; 9↔1 swap; 9↔5 swap | 3, 7, 1, 5, 9 | TRUE |
| 2 | 3,7 no; 7↔1 swap; 7↔5 swap | 3, 1, 5, 7, 9 | TRUE |
| 3 | 3↔1 swap; 3,5 no | 1, 3, 5, 7, 9 | TRUE |
| 4 | 1,3 no | 1, 3, 5, 7, 9 | FALSE → stop |

In a trace table, add a new row each time a variable changes, and record every output and user prompt in the order it happens.

## Common mistakes / exam traps

- Writing English instead of pseudocode: `x > y` is acceptable, "x is greater than y" is not.
- Initialising `Highest` to 0 when values could be negative, or `Lowest` to 0 when all values are positive.
- Giving the same value for extreme and boundary data without the rejected partner value.
- Describing validation as "checking data is correct". It checks data is reasonable.
- Calling double entry a validation check. It is verification.
- Explaining the purpose of an algorithm by translating each line. State what it achieves overall, then describe the processes.
- In a linear search, stopping the loop with `AND` instead of `OR`.
- Forgetting the temporary variable in a swap, which overwrites one value.

## Frequently asked questions

**What is the difference between extreme and boundary test data in 0478?**
Extreme data is the largest or smallest acceptable value. Boundary data is that acceptable value together with the value just outside it that should be rejected.

**Do I have to write in pseudocode on Paper 2?**
Yes, for algorithm answers. Program code is only accepted in the 15-mark scenario question, in Python, Visual Basic or Java.

**Is bubble sort the only sort I need?**
Yes. The 0478 syllabus limits standard methods to linear search, bubble sort, totalling, counting, and finding maximum, minimum and average values.

**How do I explain the purpose of an algorithm?**
Start with one sentence on what it achieves, such as "it finds the highest temperature entered", then describe the main processes: the inputs, the loop, the decisions and the outputs.

## Self-test

1. Name the four stages of the program development life cycle.
2. Give the four parts a problem is decomposed into.
3. State the validation check that would reject a phone number with 9 digits instead of 11.
4. Give boundary test data for a mark from 0 to 100 inclusive.
5. Why does a bubble sort use a variable such as `Swapped`?

**Answers:** 1. Analysis, design, coding, testing. 2. Inputs, processes, outputs, storage. 3. Length check. 4. 0 and -1 (lower boundary), 100 and 101 (upper boundary). 5. To record whether any swap was made in a pass; if none was made the list is sorted and the algorithm can stop early.
