---
title: "OxfordAQA A-Level Computer Science (9645): Classification of algorithms"
seoTitle: "OxfordAQA 9645 Classification of Algorithms Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 13 – Theory of computation"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 13.5
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-9645"
  - qualification: "a-level"
    topic: "theory-of-computation-9645"
    subtopic: "classification-of-algorithms-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.13.5 in depth: comparing algorithms, Big O and best and worst cases, tractable and intractable problems, heuristics and the Halting problem."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.13.5 Classification of algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.13 Theory of computation. It is International A-level content, examined in Unit 4, the written paper. It has four parts in the specification: comparing algorithms (3.13.5.1), order of complexity (3.13.5.2), classification of algorithmic problems (3.13.5.3) and computable and non-computable problems (3.13.5.4). The specification sets no pseudo-code standard for this section, so the code below is language-neutral pseudo-code in the style used on the other pages in this course.

The topic-level [theory of computation study guide](/resources/oxfordaqa-a-level-computer-science-theory-of-computation/) covers all of topic 3.13 in one pass. This page goes deeper on classification, with worked derivations and calculations. Afterwards use the [classification of algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-classification-of-algorithms-revision-notes/) and the [classification of algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-classification-of-algorithms-practice/).

## 3.13.5.1 Comparing algorithms

An algorithm's cost is described as a **function of the size of the problem**, usually written n. The size is usually the amount of data to be processed, such as the number of items in a list. This is the key issue because a small problem is quick for almost any algorithm; differences show up as n grows.

Algorithms can be compared in two ways:

- **Time-wise:** how many steps (and so how long) the algorithm takes.
- **Space-wise:** how much memory it uses, beyond the input.

Efficient implementation means designing data models and algorithms to run quickly while using the minimum of resources such as memory. Often there is a trade-off: an algorithm may be faster but use more memory.

## 3.13.5.2 Order of complexity

**Big O notation** describes how the running time grows as n grows. It keeps the fastest-growing term and drops constants and slower terms.

| Class | Big O | Growth | Example |
|---|---|---|---|
| Constant | O(1) | does not depend on n | reading one array element by index |
| Logarithmic | O(log n) | grows slowly; doubling n adds a fixed amount | binary search |
| Linear | O(n) | proportional to n | linear search |
| Polynomial | O(nᵃ) | a power of n, such as n² or n³ | bubble sort worst case |
| Exponential | O(aⁿ) | n is in the exponent, such as 2ⁿ | trying every subset |

### Growth in numbers

| n | log₂ n (rounded) | n | n² | 2ⁿ |
|---|---|---|---|---|
| 10 | 3.3 | 10 | 100 | 1,024 |
| 100 | 6.6 | 100 | 10,000 | about 1.3 × 10³⁰ |
| 1,000 | 10.0 | 1,000 | 1,000,000 | astronomically large |

Binary search on a list of 1,000,000 items needs at most 20 comparisons, whereas a linear search could need 1,000,000. If a computer performs one billion steps per second, an algorithm that needs 2ⁿ steps takes about 1 second when n = 30, about 18 minutes when n = 40, and about 13 days when n = 50. Each extra item doubles the time.

### Deriving the time complexity of a simple algorithm

Count the basic steps in terms of n, keep the fastest-growing term, and drop constants.

**Example A: a single loop with extra work.**

```
total ← 0
FOR i ← 0 TO n - 1
    total ← total + items[i]
OUTPUT total
```

The loop body runs n times and the other lines run once each. If each pass costs 3 steps, the cost is 3n + 5, which is 35 when n = 10 and 305 when n = 100. The term 3n dominates, so this is **O(n)**.

**Example B: nested loops.**

```
FOR i ← 0 TO n - 1
    FOR j ← 0 TO n - 1
        IF items[i] = items[j] AND i <> j THEN count ← count + 1
```

The inner body runs n times for each of n passes of the outer loop: n × n = n² times. This is **O(n²)**, a polynomial class.

**Example C: halving.**

```
WHILE n > 1
    n ← n DIV 2
```

Each pass halves n. Starting from 64 it takes 6 passes; starting from 1000 it takes 9. Doubling n adds one pass. This is **O(log n)**.

### Best and worst cases

For an input of a given size, the number of steps can depend on the contents of the data. The **best case** is the least work and the **worst case** the most. They may be different.

| Algorithm | Best case | Worst case | Why |
|---|---|---|---|
| Linear search | O(1) | O(n) | target is first, or last or absent |
| Binary search | O(1) | O(log n) | target in the middle, or found last after halving |
| Bubble sort | O(n) | O(n²) | already sorted with an early-stop flag, or reverse order |
| Merge sort | O(n log n) | O(n log n) | the same splitting and merging whatever the order |
| Dijkstra's shortest path | O(V²) | O(V²) | array version: V vertices, scan all distances each time |
| Searching a binary search tree | O(1) | O(n) | target at the root, or a chain-shaped tree |

**Bubble sort numbers.** For 8 items a plain bubble sort makes 8 × 7 / 2 = 28 comparisons, which is the n² behaviour. With a flag that stops when a pass makes no swap, a list already in order needs just one pass of 7 comparisons, which is the best case, O(n).

**Searching a tree.** On a balanced binary search tree of 1,000 items a search needs at most about 10 comparisons, O(log n). If the same items are inserted in ascending order, the tree becomes one long chain and a search may visit all 1,000 items, O(n).

## 3.13.5.3 Classification of algorithmic problems

Problems are classified by whether a **polynomial-time solution** exists.

- **Tractable:** a problem that has a polynomial (or less) time solution. Examples: searching, sorting, finding a shortest path.
- **Intractable:** a problem that has no polynomial (or less) time solution. The best known methods take exponential or worse time.

Take the problem of finding the shortest route that visits every one of k shops once. Checking every order means k! routes: 10! = 3,628,800 for 10 shops, 12! = 479,001,600 for 12, and 20! = about 2.4 × 10¹⁸ for 20. A computer checking one million routes per second needs about 479 seconds for 12 shops, but for 20 shops it would take tens of thousands of years. Exact methods become unusable for even modest k.

### Heuristics

When a problem is intractable, **heuristic methods** are often used. A **heuristic** is a set of rules or knowledge about the problem domain. A heuristic method might:

- find an **approximate but non-optimal** solution, or
- **change some of the problem constraints**.

For the shop route, a heuristic is "always drive to the nearest shop not yet visited". It runs quickly but may not give the shortest route. Changing the constraints could mean "find any route shorter than 40 km" instead of "find the shortest route". You need to explain what a heuristic is; you do not need to know specific techniques.

## 3.13.5.4 Computable and non-computable problems

Some problems **cannot be solved algorithmically** at all, however much time or memory is available. The standard example is the **Halting problem**: the unsolvable problem of determining whether a program will eventually stop when given particular input, **without executing the program**.

Why not just run it and see? If the program does halt, you eventually find out. But if it is still running after an hour, a day or a year, you cannot tell whether it is about to stop or will run for ever. No algorithm can decide this for every program and input. You are not required to prove this.

The **significance** is that the Halting problem demonstrates that there are some problems that cannot be solved by a computer. Non-computable is a different idea from intractable: an intractable problem has a solution that takes too long, whereas a non-computable problem has no algorithm that always gives the answer at all. This links to [Turing machines](/resources/oxfordaqa-a-level-computer-science-9645-turing-machines/), which define what is computable.

## Exam technique

- **Show your count.** For a derivation, state how many times the inner statement runs in terms of n, then keep the fastest-growing term.
- **State the case.** Say whether a complexity is the best case or the worst case.
- **Use the right word.** O(n²) is polynomial, O(2ⁿ) is exponential.
- **Heuristics:** give the idea (approximate answer or relaxed constraints) and a reason it is used (speed on an intractable problem).
- **Halting problem:** include "without executing the program" and "unsolvable".

## Common mistakes

- Calling O(n²) exponential.
- Keeping constants and lower terms: 3n + 5 is O(n), not O(3n + 5).
- Giving one complexity for bubble sort without mentioning that best and worst cases differ.
- Saying the Halting problem is too slow to solve. It cannot be solved.
- Saying a heuristic always finds the best answer.

## Next steps

- [Classification of algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-classification-of-algorithms-revision-notes/)
- [Classification of algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-classification-of-algorithms-practice/)
- [Searching and sorting algorithms study guide](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.13.5 Classification of algorithms.
