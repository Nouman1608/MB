---
resourceId: "mb-ap-csp-4.3-revision-notes"
title: "Parallel and Distributed Computing: Revision Notes (Computer Science Principles 4.3)"
description: "One-page recap of sequential, parallel and distributed computing, run-time and speedup calculations, the limit set by the sequential portion and the benefits and challenges."
course: "computer-science-principles"
unit: 4
topics: ["4.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-4.3-study-guide"]
learningObjectives: 
  - "Recall the key ideas of parallel and distributed computing without notes"
  - "Spot the common errors before making them"
skills: ["1", "4", "5"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-4.3-study-guide", "mb-ap-csp-4.3-practice", "mb-ap-csp-4.3-checklist"]
next: "mb-ap-csp-4.3-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Sequential computing performs operations in order, one at a time; parallel computing breaks a program into parts, some of which run at the same time; distributed computing uses multiple devices to run a program."
  - "A sequential solution takes as long as the sum of its steps; a parallel solution takes as long as its sequential tasks plus the longest of its parallel tasks."
  - "Speedup is the time taken sequentially divided by the time taken in parallel."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "drafted"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-principles/4-3-parallel-distributed-computing-study-guide/).

## Recap

- **Sequential**: operations in order, one at a time. Time = sum of all steps.
- **Parallel**: the program is split so some parts run at the same time. Time = sequential tasks + the **longest** task in each parallel group.
- **Distributed**: multiple devices (linked by a network) run a program.
- **Speedup** = sequential time ÷ parallel time.
- The **sequential portion limits** the efficiency; at some point more parallel parts no longer help meaningfully.
- **Benefits**: scale well, solve problems too large for one computer (processing time or storage), much larger problems faster.
- **Challenges**: sequential limit, coordination, communication and failures.

## Key relationships

| Idea | How to calculate it |
|---|---|
| Sequential time | Add every task |
| Parallel time | Add the sequential tasks, plus the longest of each parallel group |
| Speedup | Sequential ÷ parallel |
| Time with p equal processors for a divisible portion | Sequential portion + (parallel portion ÷ p) |
| Best possible speedup | Total time ÷ sequential portion |

## Assumptions and conventions

- Assume parallel tasks really are independent and have enough processors.
- Ignore communication overhead unless a question gives it.
- Keep the same unit (seconds) throughout, and state the speedup as a number (for example 1.75), not a time.

## Mistakes to avoid

1. Adding all the parallel tasks instead of taking the longest.
2. Inverting the speedup (parallel ÷ sequential).
3. Dividing the whole sequential time by the number of processors.
4. Forgetting the sequential portion when finding the best possible speedup.
5. Mixing up parallel and distributed.
6. Writing that parallel computing "always" gives a large speedup.

## Two quick worked examples

**1.** Tasks: 15 s first, then 25 s and 40 s together, then 10 s last. Sequential: 15 + 25 + 40 + 10 = 90 s. Parallel: 15 + 40 + 10 = 65 s. Speedup: 90 ÷ 65 is about 1.38.

**2.** A program takes 60 s: 12 s must run alone and 48 s can be shared equally. With 4 processors: 12 + 48 ÷ 4 = 24 s. The best possible time is 12 s, so the speedup can never exceed 60 ÷ 12 = 5.

## A revision routine

Write four tasks with times, then calculate the sequential time and the parallel time when two of them run together. Compute the speedup. Next take a program with a 10 second sequential portion and a 90 second shareable portion, find the time for 1, 3, 9 and 90 processors, and state the best possible speedup. Say in one sentence why it stops improving.

## Quick self-check

1. Tasks of 10, 20 and 30 seconds run one after another. How long? *(60 s.)*
2. A 20 s sequential task is followed by a parallel group of 15 s, 25 s and 10 s. How long? *(20 + 25 = 45 s.)*
3. Sequential time 90 s, parallel time 30 s. Speedup? *(90 ÷ 30 = 3.)*

Next: [practice questions](/advanced-course-resources/computer-science-principles/4-3-parallel-distributed-computing-practice/).
