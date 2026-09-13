---
title: "OxfordAQA IGCSE Computer Science: Algorithms (9210)"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1 – Algorithms"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "Teaching from September 2017, exams from May/June 2019"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "algorithms-9210"
description: "Representing and analysing algorithms -- the opening topic of OxfordAQA International GCSE Computer Science (9210), version 3.5."
author: "marlbridge-academic-team"
publishedDate: 2026-08-21
featured: false
---

This guide covers **Topic 1 Algorithms**, the first of eight topics in
OxfordAQA International GCSE Computer Science (9210), version 3.5,
teaching from September 2017, exams from May/June 2019.

## Where this fits in 9210

Topic 1 opens the syllabus, establishing algorithmic thinking before
Topic 2 (Programming) puts it into practice in code. The remaining
topics -- Data representation, Computer systems, Computer networks,
Cyber security, Relational databases and SQL, and Web page design --
draw on algorithmic thinking throughout, particularly in
problem-solving and programming-style exam questions.

## Syllabus coverage

**OXFORDAQA INTERNATIONAL GCSE COMPUTER SCIENCE (9210) — TOPIC 1
ALGORITHMS**

Topic 1 covers decomposition and abstraction as tools for solving a
problem, how to represent algorithms using flowcharts and
pseudocode, how to trace algorithms to determine their outputs, and
how to analyse and evaluate algorithms for efficiency and correctness
in solving a given problem.

## How to approach it

Because Topic 1 is foundational to Topic 2's programming content,
practising algorithm tracing (working through pseudocode or a
flowchart step by step to predict output) is one of the most
transferable skills you can build early, since it recurs in exam
questions throughout the qualification. Get comfortable moving between
flowchart and pseudocode representations of the same algorithm, since
exam questions can present either format. When evaluating algorithms,
practise identifying specific inefficiencies (unnecessary repetition,
unclear logic) rather than giving vague comments, since evaluation
questions reward precise, justified criticism.

## Official syllabus

OxfordAQA International GCSE Computer Science (9210) qualification
page —
[oxfordaqa.com](https://www.oxfordaqa.com/qualifications/international-gcse-computer-science/).

## Decomposition and abstraction

**Decomposition** breaks a large problem down into smaller, more manageable sub-problems that can be tackled separately. **Abstraction** removes the detail that is not relevant to solving the problem, keeping only what matters — a London Underground map is the standard example: it abstracts away real geography and distance, keeping only the connections between stations. Both are tools for getting from a problem statement to an algorithm that solves it, and exam questions can ask you to decompose a described problem or to identify what a given abstraction has deliberately left out.

## Representing algorithms

An **algorithm** is a sequence of steps that solves a problem or performs a task. Two representations are examined, and you must be able to move between them.

**Flowcharts** use standard symbols: a rounded box for start and stop, a parallelogram for input and output, a rectangle for a process, and a diamond for a decision with two labelled exits.

**Pseudocode** expresses the same logic in structured text, close to a programming language but without its punctuation rules:

```
INPUT number
IF number > 0 THEN
    OUTPUT "positive"
ELSE
    OUTPUT "not positive"
ENDIF
```

Every algorithm is built from three constructs, and naming them earns marks: **sequence** (steps in order), **selection** (IF, CASE), and **iteration** (FOR for a known number of repetitions, WHILE when the count is not known in advance).

## Tracing an algorithm

Tracing means working through step by step, recording the value of every variable after each line, to determine the output. A **trace table** with one column per variable and one row per iteration is the reliable method — attempting it mentally is where marks are lost.

Tracing is also how logic errors are found: the algorithm runs, but produces the wrong answer.

## Analysing and evaluating algorithms

Two algorithms can produce identical output with very different efficiency. For this qualification, efficiency is judged only by the number of steps or comparisons performed — formal comparisons of memory use are not required here (this differs from the board's A-level qualification, which does require weighing memory use).

A **linear search** checks each item in turn and works on unordered data, but on a list of 1,000 items may take 1,000 comparisons. A **binary search** repeatedly halves an ordered list, reaching the same item in about 10 comparisons — but requires the data to be sorted first. Binary search works by comparing the **middle** item to the target: if the target is smaller, the upper half is discarded; if larger, the lower half is discarded; this repeats until the item is found or the remaining list is empty. Recommending binary search on unsorted data — without sorting it first — is a standard error.

Evaluation questions reward precise criticism. "It is inefficient" earns nothing; "the loop continues checking after the item has been found, so unnecessary comparisons are performed" earns the mark.

## Sorting algorithms

**Bubble sort** repeatedly compares adjacent pairs of items and swaps them if they are out of order; after each full pass through the list, the largest remaining item has "bubbled" to its correct position at the end. The specification requires this specific improved form: the outer loop is indefinite, controlled by whether any swaps were made during the last pass — a flag is set at the start of each pass and cleared whenever a swap happens, and the sort stops as soon as a complete pass makes no swaps, since that means the list is already sorted. It is simple to code and trace, but slow on large lists.

**Merge sort** works differently: it divides the list in half repeatedly until each part holds a single item, then merges the parts back together in the correct order. It is more complex to describe and trace than bubble sort, but performs far fewer comparisons on large lists, making it much faster.

## Worked example

Trace this algorithm with input 5.

```
INPUT n
total = 0
FOR i = 1 TO n
    total = total + i
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

Output: **15**. The algorithm sums the integers from 1 to n.

## Common mistakes

Using the wrong flowchart symbol — a diamond is for decisions only. Writing pseudocode that omits ENDIF or NEXT, so the block structure is unclear. Choosing FOR when the number of repetitions is unknown, where WHILE is required. Filling in a trace table only at the end instead of after each iteration. Giving vague evaluation comments rather than identifying a specific inefficiency. Recommending a binary search on data that has not been sorted first — the syllabus expects the sorting step to be stated, not assumed. Confusing bubble sort (simple, slow, compares adjacent pairs) with merge sort (more complex, faster, splits and merges the list) when asked to name or describe a sorting method.

## Quick revision checklist

- Draw a flowchart with the correct symbols and convert it to pseudocode, and back.
- Identify and use sequence, selection and iteration, choosing FOR or WHILE correctly.
- Complete a trace table row by row to determine an output.
- Compare linear and binary search on efficiency, and state the precondition for binary search.
- Justify a criticism of an algorithm with a specific reason.
