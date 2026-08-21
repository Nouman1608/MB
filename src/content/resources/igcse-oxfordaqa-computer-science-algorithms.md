---
title: "OxfordAQA IGCSE Computer Science: Algorithms (9210)"
resourceType: "study-guides"
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
description: "Representing and analysing algorithms -- the opening topic of OxfordAQA International GCSE Computer Science (9210), updated November 2022."
author: "marlbridge-academic-team"
publishedDate: 2026-08-21
featured: false
---

This guide covers **Topic 1 Algorithms**, the first of eight topics in
OxfordAQA International GCSE Computer Science (9210), version updated
November 2022.

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

Topic 1 covers how to represent algorithms using flowcharts and
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

Two algorithms can produce identical output with very different efficiency. Efficiency is judged by the number of steps or comparisons performed, and by memory used.

A **linear search** checks each item in turn and works on unordered data, but on a list of 1,000 items may take 1,000 comparisons. A **binary search** repeatedly halves an ordered list, reaching the same item in about 10 comparisons — but requires the data to be sorted first.

Evaluation questions reward precise criticism. "It is inefficient" earns nothing; "the loop continues checking after the item has been found, so unnecessary comparisons are performed" earns the mark.

## Worked example

Trace this algorithm with input 5.

```
INPUT n
total = 0
FOR i = 1 TO n
    total = total + i
NEXT i
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

Using the wrong flowchart symbol — a diamond is for decisions only. Writing pseudocode that omits ENDIF or NEXT, so the block structure is unclear. Choosing FOR when the number of repetitions is unknown, where WHILE is required. Filling in a trace table only at the end instead of after each iteration. Giving vague evaluation comments rather than identifying a specific inefficiency.

## Quick revision checklist

- Draw a flowchart with the correct symbols and convert it to pseudocode, and back.
- Identify and use sequence, selection and iteration, choosing FOR or WHILE correctly.
- Complete a trace table row by row to determine an output.
- Compare linear and binary search on efficiency, and state the precondition for binary search.
- Justify a criticism of an algorithm with a specific reason.
