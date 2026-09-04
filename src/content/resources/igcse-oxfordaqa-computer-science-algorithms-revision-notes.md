---
title: "OxfordAQA IGCSE Computer Science: Algorithms — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1 – Algorithms"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "2022-onwards"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "algorithms-9210"
description: "Condensed recall notes on pseudocode, flowcharts, searching, sorting, trace tables and computational thinking for OxfordAQA International GCSE Computer Science 9210."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Algorithms study guide](/resources/igcse-oxfordaqa-computer-science-algorithms/).

## What an algorithm is

A **sequence of steps** that solves a problem or completes a task. It must be **unambiguous**, **finite**, and produce a **result**.

An algorithm is not a program. The algorithm is the method; the program is one implementation of it in a particular language.

## Computational thinking

| Term | Meaning |
|---|---|
| **Decomposition** | Breaking a problem into smaller, manageable sub-problems |
| **Abstraction** | Removing unnecessary detail to focus on what matters |
| **Algorithmic thinking** | Devising the sequence of steps that solves the problem |

A map of the London Underground is the standard abstraction example: distances and geography are removed, but the connections — the thing that matters — are kept.

## Representing algorithms

**Flowchart symbols:**

| Symbol | Use |
|---|---|
| Oval / rounded | Start and stop |
| Parallelogram | Input and output |
| Rectangle | Process |
| Diamond | **Decision** — two labelled outputs, Yes and No |

**Pseudocode** — structured English, indented to show blocks:

```
total <- 0
FOR i <- 1 TO 10
    INPUT number
    total <- total + number
ENDFOR
OUTPUT total
```

Every construct must be **closed**: `IF … ENDIF`, `FOR … ENDFOR`, `WHILE … ENDWHILE`. Unclosed blocks and missing indentation are the commonest lost marks.

## The three programming constructs

- **Sequence** — instructions in order.
- **Selection** — `IF … THEN … ELSE`.
- **Iteration** — repetition:
  - `FOR` — **count-controlled**, when the number of repetitions is known in advance.
  - `WHILE` — **condition-controlled**, tested **before** the loop body, so it may run zero times.
  - `REPEAT … UNTIL` — tested **after**, so it always runs **at least once**.

The difference between WHILE and REPEAT is a guaranteed question, and the answer is where the condition is tested.

## Searching

| | Linear search | Binary search |
|---|---|---|
| Method | Check each item in turn | Halve the search space each time |
| Data must be | Any order | **Sorted** |
| Speed | Slow on large sets | Much faster |
| Worst case | n comparisons | log₂n comparisons |

**Binary search requires sorted data.** If the data is unsorted, either sort it first or use a linear search. Recommending binary search on unsorted data is the standard trap.

Binary search: compare the middle item; if the target is smaller, discard the upper half; if larger, discard the lower half; repeat until found or the list is empty.

## Sorting

**Bubble sort** — repeatedly compare adjacent pairs and swap if out of order; after each pass the largest remaining item has "bubbled" to the end. Simple to code, but slow.

**Merge sort** — divide the list in half repeatedly until each part holds one item, then merge the parts back together in order. More complex but much faster on large lists.

## Trace tables

The single most reliable way to answer "what does this algorithm output".

One **column per variable**, one **row per change**. Work through line by line, writing each new value. Do not skip steps or work it out in your head — the marks are for the completed table, and mental arithmetic is where errors creep in.

Tracing is also how **logic errors** are found — cases where the algorithm runs without crashing but produces the **wrong output**.

**Worked example.** Trace this algorithm with input n = 5:

```
INPUT n
total <- 0
FOR i <- 1 TO n
    total <- total + i
ENDFOR
OUTPUT total
```

| i | total |
|---|---|
| 1 | 1 |
| 2 | 3 |
| 3 | 6 |
| 4 | 10 |
| 5 | 15 |

Output: **15**. The algorithm sums the integers from 1 to n — writing every row, never skipping one, is what earns the marks.

## Efficiency

Compare algorithms by the **number of steps or comparisons** needed, not by how long they take on a particular computer — that depends on the hardware. An algorithm that takes fewer comparisons as the data grows is more efficient.

**Evaluation questions reward precise criticism, not vague description.** "It is inefficient" earns nothing; "the loop continues checking after the target has already been found, so it performs unnecessary comparisons" earns the mark — always identify the *specific* wasted step.

## Exam traps

- Confusing decomposition with abstraction.
- Using a rectangle where a diamond is needed, or leaving decision outputs unlabelled.
- Not closing pseudocode blocks.
- Suggesting binary search on unsorted data.
- Saying WHILE always runs at least once — that is REPEAT.
- Completing a trace table mentally and recording only the final answer.

## Self-test

1. Give three properties an algorithm must have.
2. Distinguish decomposition from abstraction.
3. What is the difference between WHILE and REPEAT UNTIL?
4. What must be true of data before a binary search, and why?
5. How should the efficiency of two algorithms be compared?
6. What is a logic error, and how is it typically found?
7. Why does "it is inefficient" earn no marks in an evaluation question?

**Answers:** 1. Unambiguous, finite, and it produces a result. 2. Decomposition breaks a problem into smaller sub-problems; abstraction removes unnecessary detail to focus on what matters. 3. WHILE tests the condition before the loop body, so it may run zero times; REPEAT UNTIL tests afterwards, so it always runs at least once. 4. It must be sorted, because the algorithm discards half the data based on whether the target is above or below the middle item — which is only valid if the data is in order. 5. By the number of steps or comparisons required as the data set grows, not by execution time, which depends on the hardware. 6. A logic error is a fault where the algorithm runs and produces an output, but the output is wrong; it is typically found by tracing the algorithm through a trace table and comparing the recorded values against what is expected. 7. Because it does not identify the specific cause — a precise answer names the actual wasted step, such as a loop continuing to check after the target has already been found.
