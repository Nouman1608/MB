---
resourceId: "mb-ap-csp-3.17-study-guide"
title: "Algorithmic Efficiency: Study Guide (Computer Science Principles 3.17)"
description: "How to measure efficiency by counting statement executions, why polynomial algorithms run in reasonable time and exponential ones do not, and why heuristics give approximate answers. Two worked examples."
course: "computer-science-principles"
unit: 3
topics: ["3.17"]
resourceType: "study-guide"
prerequisites:
  - "Iteration (Topic 3.8)"
  - "Binary search (Topic 3.11)"
prerequisiteResources: ["mb-ap-csp-3.11-study-guide"]
learningObjectives:
  - "Distinguish a problem from an instance, and decision from optimization problems"
  - "Compare algorithms by counting how many times statements execute"
  - "Explain the difference between reasonable and unreasonable running time"
  - "Explain when a heuristic is appropriate and what it does not guarantee"
skills: ["1"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.17-revision-notes", "mb-ap-csp-3.17-practice", "mb-ap-csp-3.17-checklist"]
next: "mb-ap-csp-3.17-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "Efficiency estimates the resources an algorithm uses as a function of the input size; it can be measured informally by counting how many times statements execute."
  - "Different correct algorithms for the same problem can have different efficiencies."
  - "Polynomial or slower growth (constant, linear, square, cube) is reasonable time; exponential and factorial growth is unreasonable."
  - "A decision problem has a yes/no answer; an optimization problem asks for the best solution."
  - "A heuristic gives a solution that is not guaranteed optimal and is used when exact methods are impractical."
faqs:
  - question: "What does the efficiency of an algorithm mean?"
    answer: "An estimate of the computational resources, such as time, an algorithm uses, usually expressed as a function of the size of the input. You can estimate it informally by counting how many times statements execute."
  - question: "What is the difference between reasonable and unreasonable time?"
    answer: "Algorithms with polynomial or slower growth (constant, linear, square, cube) run in reasonable time. Exponential and factorial growth are unreasonable for all but small inputs."
  - question: "What is a heuristic?"
    answer: "An approach that finds a solution that is not guaranteed to be optimal, used when a method that always finds the best answer would take too long."
  - question: "Do I need to know Big-O notation?"
    answer: "No. Formal analysis of algorithms is outside the course. You only need to count executions informally and recognise reasonable and unreasonable growth."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

A correct algorithm is not always a useful one. Imagine a program that is guaranteed to find the best route through 30 towns but needs longer than the age of the universe to finish. This topic asks a question beyond "does it work?": **how much work does it need as the problem gets bigger?** You will learn to measure the efficiency of an algorithm informally by counting how many times statements run, to tell algorithms that run in a **reasonable time** from those that do not, and to see why, for some problems, programmers accept **approximate** answers found by heuristics.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

## Problems, instances and kinds of problem

A **problem** is a general description of a task that can (or cannot) be solved algorithmically. An **instance** of a problem also includes **specific input**. *Sorting a list* is a problem; sorting the list (2, 3, 1, 7) is one instance of it.

Problems come in two common forms:

- A **decision problem** has a yes/no answer: "Is there a path from A to B?"
- An **optimization problem** asks for the *best* solution among many: "What is the shortest path from A to B?"

## What efficiency means

**Efficiency** is an estimate of the amount of computational resources (such as time) an algorithm uses. It is typically expressed as a **function of the size of the input**, written here as *n*. Two correct algorithms for the same problem can have very different efficiencies.

You can measure efficiency **informally** by **counting how many times a statement or group of statements executes**. (Formal analysis such as Big-O notation is outside the course; you only need to count and compare.)

Take two segments that each use a variable `n` for the input size:

*Segment 1: one loop*

```text
n ← 10
count ← 0
REPEAT n TIMES
{
  count ← count + 1
}
DISPLAY(count)
```

Output: `10`

*Segment 2: a loop inside a loop*

```text
n ← 10
count ← 0
REPEAT n TIMES
{
  REPEAT n TIMES
  {
    count ← count + 1
  }
}
DISPLAY(count)
```

Output: `100`

The statement `count ← count + 1` runs **n** times in the first and **n × n** times in the second. For *n* = 10 that is 10 versus 100. Now see what happens as the input grows:

| Input size *n* | Segment 1 runs | Segment 2 runs | Ratio |
|---|---|---|---|
| 10 | 10 | 100 | 10 times more |
| 20 | 20 | 400 | 20 times more |
| 1,000 | 1,000 | 1,000,000 | 1,000 times more |
| 1,000,000 | 1,000,000 | 1,000,000,000,000 | a million times more |

Doubling *n* doubles Segment 1's work but **quadruples** Segment 2's. The values for 3, 10 and 20 were confirmed by running both segments; the larger rows follow from the pattern.

## Reasonable and unreasonable time

Algorithms are grouped by how their number of steps grows with *n*:

- **Constant, linear, square, cube** and other **polynomial** growth (steps like 1, *n*, *n*², *n*³): these run in a **reasonable amount of time**. They get slower as the input grows, but they stay manageable.
- **Exponential** and **factorial** growth (steps like 2<sup>*n*</sup> or *n*!): these run in an **unreasonable amount of time** for all but small inputs.

The difference is dramatic. Compare how many steps each needs:

| *n* | *n* (linear) | *n*² (square) | *n*³ (cube) | 2<sup>*n*</sup> (exponential) | *n*! (factorial) |
|---|---|---|---|---|---|
| 10 | 10 | 100 | 1,000 | 1,024 | 3,628,800 |
| 20 | 20 | 400 | 8,000 | 1,048,576 | 2,432,902,008,176,640,000 |
| 30 | 30 | 900 | 27,000 | 1,073,741,824 | 265,252,859,812,191,058,636,308,480,000,000 |

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="f317-t f317-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f317-t">Steps needed as the input size grows</title>
<desc id="f317-d">A line graph with n from 0 to 10 across the bottom and number of steps up the side. The straight line for n rises slowly to 10. The curve for n squared rises to 100 at n equals 10. The curve for 2 to the n rises slowly at first and then very steeply, reaching 128 at n equals 7 and leaving the top of the chart. The three lines are drawn with different dash patterns.</desc>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<defs><marker id="f317-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="60" y1="250" x2="530" y2="250" stroke="#1d2b44" stroke-width="2"/><line x1="60" y1="250" x2="60" y2="40" stroke="#1d2b44" stroke-width="2"/><text x="295.0" y="285" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">input size n</text><text x="14" y="145.0" font-size="12" transform="rotate(-90 14 145.0)" text-anchor="middle" fill="#1d2b44">steps</text><polyline points="60.0,250.0 107.0,248.4 154.0,246.8 201.0,245.2 248.0,243.5 295.0,241.9 342.0,240.3 389.0,238.7 436.0,237.1 483.0,235.5 530.0,233.8" fill="none" stroke="#1d2b44" stroke-width="2.5"/><text x="526.0" y="227.84615384615384" text-anchor="end" font-size="12" font-weight="bold" fill="#1d2b44">n</text><polyline points="60.0,250.0 107.0,248.4 154.0,243.5 201.0,235.5 248.0,224.2 295.0,209.6 342.0,191.8 389.0,170.8 436.0,146.6 483.0,119.2 530.0,88.5" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 4"/><text x="526.0" y="82.46153846153845" text-anchor="end" font-size="12" font-weight="bold" fill="#1d2b44">n squared</text><polyline points="60.0,248.4 107.0,246.8 154.0,243.5 201.0,237.1 248.0,224.2 295.0,198.3 342.0,146.6 389.0,43.2" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="2 3"/><text x="385.0" y="37.230769230769226" text-anchor="end" font-size="12" font-weight="bold" fill="#1d2b44">2 to the n</text>
</svg>
<figcaption>Figure 1. Steps against input size. The solid line is <i>n</i>, the dashed line is <i>n</i>², and the dotted line is 2<sup><i>n</i></sup>, which leaves the chart at <i>n</i> = 7 and keeps climbing far faster.</figcaption>
</figure>

**How slow is slow?** Suppose a computer performs one billion (10<sup>9</sup>) steps per second. An algorithm needing 2<sup>*n*</sup> steps takes:

| *n* | Steps (2<sup>*n*</sup>) | Time at 10<sup>9</sup> steps per second |
|---|---|---|
| 30 | 1,073,741,824 | about 1.1 seconds |
| 40 | 1,099,511,627,776 | about 18 minutes |
| 50 | 1,125,899,906,842,624 | about 13 days |
| 60 | 1,152,921,504,606,846,976 | about 36.6 years |

Adding just **one** to *n* doubles the time. Buying a computer ten times faster barely helps: it gives only a few more values of *n*. This is why exponential and factorial algorithms are considered unreasonable.

## Worked example 1: comparing two correct algorithms

A teacher wants to know whether any two students in a class gave exactly the same answer to a question. Algorithm A compares every student with every other student. Algorithm B sorts the answers first, which puts equal answers next to each other, and then compares only neighbouring pairs. Both are correct.

**Step 1. Count comparisons for Algorithm A.** Each of the *n* students is compared with the other *n* − 1, and each pair is counted once, so there are *n*(*n* − 1) ÷ 2 comparisons. For *n* = 30 that is 30 × 29 ÷ 2 = 435. For *n* = 300 it is 300 × 299 ÷ 2 = 44,850: ten times the students, about **a hundred times** the comparisons.

**Step 2. Count comparisons for Algorithm B's checking step.** After sorting, there are only *n* − 1 neighbouring pairs: 29 for *n* = 30 and 299 for *n* = 300. Ten times the students gives about **ten times** the comparisons. (Sorting itself needs work too. With a good sorting method it grows more slowly than *n*², and the course does not require you to analyse it.)

**Step 3. Conclude.** Both algorithms are correct and both run in reasonable (polynomial) time, but B scales better for a large school. This is the lesson: different correct algorithms for the same problem can have different efficiencies, and the difference matters more as the input grows.

## Worked example 2: heuristics and the shortest tour

**The problem.** A delivery driver starts in town A and must visit towns B, C, D and E once each, then return to A, travelling the shortest total distance. The distances (km) are:

|  | A | B | C | D | E |
|---|---|---|---|---|---|
| A | – | 7 | 4 | 8 | 2 |
| B | 7 | – | 3 | 3 | 7 |
| C | 4 | 3 | – | 2 | 5 |
| D | 8 | 3 | 2 | – | 2 |
| E | 2 | 7 | 5 | 2 | – |

This is an **optimization problem**.

**Step 1. Exact method (try everything).** With the start fixed there are 4 × 3 × 2 × 1 = 24 possible orders for the other four towns. Checking all of them is easy for a computer, and the shortest tour is **A → C → B → D → E → A** with length 4 + 3 + 3 + 2 + 2 = **14 km**. We confirmed this by checking all 24 orders in a program. But for *n* towns the number of orders is (*n* − 1)!. For 20 towns that is about 1.2 × 10<sup>17</sup> orders (19!), far too many: at a billion tours a second it would take about 3.9 years, and for 25 towns (24! is about 6.2 × 10<sup>23</sup>) it would take about twenty million years.

**Step 2. A heuristic (a quick rule of thumb).** *Always go to the nearest town not yet visited.* From A the nearest is E (2). From E the nearest unvisited is D (2). From D, C (2). From C, B (3). Then return from B to A (7). The route is **A → E → D → C → B → A**, length 2 + 2 + 2 + 3 + 7 = **16 km**.

**Step 3. Compare.** The heuristic found a good route quickly (it makes at most a few comparisons per step, a polynomial amount of work) but **not the best one**: 16 km instead of 14 km. A **heuristic** is an approach that produces a solution that is **not guaranteed to be optimal** but may be used when techniques guaranteed to find an optimal solution are **impractical**. For problems with no known efficient exact algorithm, approximate solutions are sought.

**Check.** The two lengths were computed from the table: 2 + 2 + 2 + 3 + 7 = 16, and 4 + 3 + 3 + 2 + 2 = 14. The heuristic's answer is 2 km longer, which is the price of speed.

## Common misconceptions

- **"A faster computer fixes an inefficient algorithm."** For exponential growth, a computer ten times faster only adds a few more input sizes. A better algorithm is needed.
- **"Efficiency means the number of lines of code."** It is about how many times statements run as the input grows.
- **"Polynomial means fast."** Polynomial time is *reasonable*, not instant: n³ for a million items is still enormous.
- **"A heuristic gives the best answer."** It is not guaranteed to be optimal; it is used when exact methods are impractical.
- **"Exponential algorithms are just slightly slower than polynomial ones."** For large inputs they are astronomically slower.
- **"Efficiency is a property of the computer."** It is a property of the algorithm, measured by the work it does for input of a given size.


## Where this leads

Efficiency tells you how fast an algorithm can be. The final topic asks the deeper question of whether an algorithm can exist at all: Topic 3.18 shows that some problems are undecidable, which is a different thing from being slow.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-17-algorithmic-efficiency-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-17-algorithmic-efficiency-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-17-algorithmic-efficiency-checklist/). The next topic is [Topic 3.18, Undecidable Problems](/advanced-course-resources/computer-science-principles/3-18-undecidable-problems-study-guide/).
