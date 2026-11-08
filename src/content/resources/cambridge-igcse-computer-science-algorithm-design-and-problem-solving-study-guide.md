---
title: "Cambridge IGCSE Computer Science (0478): Algorithm design and problem-solving -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 7: Algorithm design and problem-solving"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 7
syllabusTopics:
  - qualification: "igcse"
    topic: "algorithm-design-and-problem-solving-0478"
description: "Computational thinking, flowcharts and pseudocode, linear search, bubble sort, trace tables, validation, verification and test data for Cambridge IGCSE 0478."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

An algorithm is a set of clear, ordered steps that solves a problem. This topic is about how you plan a solution before you write any code, how you describe it so that someone else can follow it, and how you prove that it works. It is a heavily examined topic in the algorithm and programming paper because you are asked to trace, correct, complete and write algorithms rather than just describe them.

## Where this fits in the specification

In Cambridge IGCSE Computer Science 0478 this is the first topic in the "Algorithms, programming and logic" half of the syllabus. It comes before the programming topic, which turns algorithms into code, and before the databases and Boolean logic topics. Everything you learn here is written in the Cambridge pseudocode style, so it is worth learning the exact keywords: INPUT, OUTPUT, IF...THEN...ELSE...ENDIF, FOR...NEXT, WHILE...DO...ENDWHILE, REPEAT...UNTIL and the assignment arrow, written as ←.

## Computational thinking

Three techniques help you break down a problem before you design the solution.

- **Abstraction** means keeping only the details that matter and ignoring the rest. A route map of a rail network leaves out the real distances and the shape of the track, because a passenger only needs the order of the stations.
- **Decomposition** means splitting a large problem into smaller sub-problems that are easier to solve and test separately. A library system might be split into searching, borrowing, returning and fines.
- **Pattern recognition** means spotting similarities between problems or within a problem, so that an existing solution can be reused or a repeated task can be put into a loop.

When asked to "describe" one of these in a scenario, always apply it. Saying "decomposition is breaking a problem down" earns a mark; naming the actual sub-tasks in the scenario earns the rest.

## Representing algorithms

An algorithm can be shown in words, as a **flowchart** or as **pseudocode**. In a flowchart, a rounded terminator marks start and end, a parallelogram is input or output, a rectangle is a process (such as an assignment), and a diamond is a decision with labelled exits for yes and no. Arrows show the order. Flowcharts are easy to read but long to draw. Pseudocode is closer to a real program and is what you will mostly write.

A good algorithm has clear inputs, a finite number of steps, a definite output and no ambiguity. Use meaningful names such as `Total` and `Count`, and indent loop and selection bodies.

## Standard methods of solution

You need to recognise and write these standard algorithms.

- **Totalling** adds values to a running total that starts at 0.
- **Counting** adds 1 to a counter each time a condition is met.
- **Finding the maximum, minimum and average**: set the maximum to the first item, compare each other item, replace when a larger one is found; average is the total divided by the count.
- **Linear search** checks each item in turn from the start until it finds the target or reaches the end.
- **Bubble sort** repeatedly compares adjacent items and swaps them if they are in the wrong order, so that the largest unsorted item moves to the end on each pass.

### Linear search in pseudocode

```
Found ← FALSE
Index ← 1
WHILE Index <= 5 AND Found = FALSE DO
    IF List[Index] = Target THEN
        Found ← TRUE
    ELSE
        Index ← Index + 1
    ENDIF
ENDWHILE
```

Linear search works on unsorted data and is simple, but it can be slow because in the worst case every item must be checked.

### Bubble sort in pseudocode

```
FOR Pass ← 1 TO 4
    FOR Index ← 1 TO 5 - Pass
        IF List[Index] > List[Index + 1] THEN
            Temp ← List[Index]
            List[Index] ← List[Index + 1]
            List[Index + 1] ← Temp
        ENDIF
    NEXT Index
NEXT Pass
```

The three-line swap needs a temporary variable. Without `Temp`, one of the values would be overwritten and lost.

## Trace tables

A **trace table** records the value of each variable (and any output) as an algorithm runs, one row per step or per change. It is how you find what an algorithm does and where a logic error is. Rules: list every variable as a column; update only the cell that changes on that step; copy outputs into an output column in the row where they happen; and do the trace line by line, never by guessing what the algorithm is "meant" to do.

## Validation, verification and test data

**Validation** is an automatic check that data is reasonable and allowed. It cannot prove the data is correct. Common checks are range, length, type, presence, format and check digit. **Verification** checks that data has been entered or copied accurately, for example by double entry (typing it twice and comparing) or by visual check against the source. A value can pass validation and still be wrong: an age of 17 entered as 71 would pass a range check of 0 to 120.

**Test data** should be chosen to show that an algorithm works in all situations. For a rule that accepts whole numbers from 1 to 10 the types are:

| Type | Purpose | Example |
|---|---|---|
| Normal | Valid data that should be accepted | 5 |
| Boundary (extreme) | Values at the edge of the valid range, and the first value outside it | 1 and 10 accepted; 0 and 11 rejected |
| Abnormal (erroneous) | Data of the wrong type that should be rejected | "ten" |

## Worked example 1: tracing a bubble sort

Sort the list 14, 9, 21, 3, 17 into ascending order using the bubble sort above. After each pass the list is:

| Pass | List after the pass | Swaps in the pass |
|---|---|---|
| Start | 14, 9, 21, 3, 17 | - |
| 1 | 9, 14, 3, 17, 21 | 3 |
| 2 | 9, 3, 14, 17, 21 | 1 |
| 3 | 3, 9, 14, 17, 21 | 1 |
| 4 | 3, 9, 14, 17, 21 | 0 |

Pass 1 working: compare 14 and 9, swap (9, 14, 21, 3, 17); compare 14 and 21, no swap; compare 21 and 3, swap (9, 14, 3, 21, 17); compare 21 and 17, swap (9, 14, 3, 17, 21). The largest value, 21, is now in its final place. The list was already sorted after pass 3, so pass 4 makes no swaps. An improved version uses a flag to stop as soon as a whole pass makes no swaps, which saves work on nearly sorted data.

## Worked example 2: linear search trace

Search the same original list, 14, 9, 21, 3, 17, for the target 21.

| Index | List[Index] | Equals 21? | Found |
|---|---|---|---|
| 1 | 14 | No | FALSE |
| 2 | 9 | No | FALSE |
| 3 | 21 | Yes | TRUE |

The loop stops at index 3 because Found is TRUE, so only three comparisons were made. Searching for 50 would make five comparisons and end with Found still FALSE, so the algorithm should then output a "not found" message after the loop.

## Worked example 3: finding a fault

An algorithm should output the highest of five marks but starts with `Highest ← 0` and uses `IF Mark < Highest THEN Highest ← Mark`. The comparison is the wrong way round, so no mark is ever below 0, Highest never changes, and the program always outputs 0. To fix it, change the condition to `Mark > Highest`. Trace the marks 62, 48, 75, 50, 39 through the corrected version: Highest becomes 62, stays 62, becomes 75, and stays 75, giving the correct output of 75.

## Common mistakes

- Starting a total or a counter without setting it to 0 first.
- Writing `FOR` loops that run one time too many or too few, for example `FOR Pass ← 1 TO 5` for a five-item bubble sort.
- Using `=` for assignment. In Cambridge pseudocode assignment uses ←, and `=` is a comparison.
- Mixing up validation and verification, or saying that validation makes sure data is correct.
- Choosing test data without a purpose. Always say what each value tests.

## Exam technique

**State** needs one fact. **Describe** needs the steps or features. **Explain** needs a reason. **Complete** means fill the gaps in a given algorithm: read the whole algorithm first so you can see what each gap needs to do. **Trace** and **dry-run** mean use a trace table. When you write an algorithm, check three things: variables are initialised, loops end, and the output is placed so that it happens at the right time (inside or after the loop). If a question allows either pseudocode or a flowchart, use whichever you can complete accurately.

## Check your understanding

1. Define abstraction and give an example. *Removing unnecessary detail to focus on what matters, such as a tube map that shows station order but not real distances.*
2. What is the difference between decomposition and pattern recognition? *Decomposition splits a problem into smaller parts; pattern recognition finds similarities or repeats that can be reused.*
3. Which flowchart symbol is used for a decision? *A diamond.*
4. A rule accepts ages from 11 to 16 inclusive. Give one normal, two boundary and one abnormal test value. *Normal: 13. Boundary: 11 and 16 (and 10 and 17 as the first values outside). Abnormal: "abc".*
5. Explain why double entry is verification rather than validation. *It checks that the data was copied accurately by comparing two entries, not that the value is reasonable or allowed.*
6. After pass 2 of a bubble sort on 14, 9, 21, 3, 17, what is the list? *9, 3, 14, 17, 21.*
7. Why does bubble sort need a temporary variable? *To hold one value during the swap so it is not overwritten.*
8. Why must the average be calculated after the loop in a totalling algorithm? *The total is only complete once every value has been added; calculating inside the loop would give a wrong value for most iterations.*

## Frequently asked questions

**What is the difference between validation and verification in IGCSE Computer Science?**
Validation is an automatic check that data is reasonable and allowed, such as a range check, but it cannot prove the data is correct. Verification checks that data was entered or copied accurately, for example by double entry.

**What are abstraction, decomposition and pattern recognition?**
Abstraction keeps only the details that matter, decomposition splits a problem into smaller sub-problems, and pattern recognition spots similarities so solutions can be reused. In a scenario question, apply the technique to the scenario to earn full marks.

**What flowchart symbols are used in Cambridge IGCSE 0478?**
A rounded terminator marks start and end, a parallelogram shows input or output, a rectangle shows a process, and a diamond shows a decision with labelled yes and no exits.

**Why does a bubble sort need a temporary variable?**
The temporary variable holds one value during the swap. Without it, one of the values would be overwritten and lost.
