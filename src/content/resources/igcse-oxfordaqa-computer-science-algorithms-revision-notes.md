---
title: "OxfordAQA IGCSE Computer Science: Algorithms — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1 – Algorithms"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "algorithms-9210"
description: "Recall notes for OxfordAQA International GCSE Computer Science 9210 Topic 1: computational thinking, flowcharts, pseudocode, searching, sorting, trace tables."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by harris-khan on 2026-09-29; 2026-11-08: reviewed by harris-khan."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Algorithms study guide](/resources/igcse-oxfordaqa-computer-science-algorithms/).

## What an algorithm is

A **sequence of steps** that solves a problem or completes a task. It must be **unambiguous**, **finite**, and produce a **result**.

An algorithm is not a program. The algorithm is the method; the program is one implementation of it in a particular language.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-algorithms--01-decomposition-abstraction.webp" width="900" height="870" alt="A big problem splits into three sub-problems. Below, a winding real route with stations A to E becomes a straight line map of the same stations, keeping only their connections." loading="lazy">
  <figcaption>Decomposition splits a problem into parts; abstraction keeps only what matters, as an Underground map does.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-algorithms--02-flowchart-pseudocode.webp" width="900" height="1240" alt="A legend names the four flowchart symbols. A flowchart reads a number and branches on number &gt; 0 to output positive or not positive. The same algorithm is written below in pseudocode." loading="lazy">
  <figcaption>A flowchart and pseudocode can express exactly the same algorithm.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-algorithms--04-binary-vs-linear-search.webp" width="900" height="900" alt="Three rows show a sorted list of 15 numbers; each step marks the middle item and greys out the discarded half until 47 is found on step 3. A bar chart compares about 10 comparisons for binary search with up to 1,000 for linear search on 1,000 items." loading="lazy">
  <figcaption>Binary search halves a sorted list each step, so it needs far fewer comparisons than linear search.</figcaption>
</figure>


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

**Bubble sort** — repeatedly compare adjacent pairs and swap if out of order; after each pass the largest remaining item has "bubbled" to the end. Simple to code, but slow. **Know the form the specification requires:** two nested loops, the inner loop **definite** (one pass through the list) and the outer loop **indefinite**, repeating only while the last pass **made at least one swap** — so the sort stops after the first pass with no swaps. You must be able to follow and write pseudocode for this version.

**Merge sort** — divide the list in half repeatedly until each part holds one item, then merge the parts back together in order. More complex but much faster on large lists.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-algorithms--05-bubble-sort-flag.webp" width="900" height="860" alt="A list of five numbers is shown after each pass of bubble sort with the number of swaps: 4, 2, 1 and finally 0. The pass with no swaps ends the sort." loading="lazy">
  <figcaption>The improved bubble sort stops as soon as a complete pass makes no swaps.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-algorithms--06-merge-sort-split-merge.webp" width="900" height="960" alt="Eight numbers are halved repeatedly until single items, then merged back in order through sorted pairs and fours to a fully sorted list." loading="lazy">
  <figcaption>Merge sort splits the list down to single items and merges the parts back in the correct order.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-algorithms--03-trace-table-sum.webp" width="900" height="960" alt="The pseudocode for summing 1 to n is shown beside its trace table for n = 5. Bars show total after each pass: 1, 3, 6, 10, 15. The output is 15." loading="lazy">
  <figcaption>A trace table records each variable after every iteration; the output here is 15.</figcaption>
</figure>


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

## Frequently asked questions

**What is the difference between decomposition and abstraction?**
Decomposition breaks a problem into smaller, manageable sub-problems. Abstraction removes unnecessary detail to focus on what matters, as a London Underground map keeps the connections but not the real distances.

**Which form of bubble sort does OxfordAQA 9210 require?**
The specification requires two nested loops: a definite inner loop for one pass through the list and an indefinite outer loop that repeats only while the last pass made at least one swap.

**How should you compare the efficiency of two algorithms?**
Compare the number of steps or comparisons needed as the data grows, not how long the algorithm takes on a particular computer, which depends on the hardware.

**What is the difference between WHILE and REPEAT UNTIL?**
WHILE tests its condition before the loop body, so it may run zero times. REPEAT UNTIL tests afterwards, so it always runs at least once.
