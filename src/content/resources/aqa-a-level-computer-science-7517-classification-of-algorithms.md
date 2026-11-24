---
title: "AQA A-Level Computer Science (7517): Classification of algorithms"
seoTitle: "AQA A-Level Computer Science Big-O and Halting Problem Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Theory of computation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 4.4
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
    subtopic: "classification-of-algorithms-7517"
description: "Deeper guide to AQA 7517 section 4.4.4 Classification of algorithms: Big-O notation, orders of complexity, tractable and intractable problems, and the halting problem."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.4.4 Classification of algorithms** in AQA A-Level Computer Science (7517). It has seven content blocks:

- **4.4.4.1** comparing algorithms by time and space;
- **4.4.4.2** the maths needed for Big-O notation: functions, the main families of function, and permutations;
- **4.4.4.3** orders of complexity and deriving the time complexity of an algorithm;
- **4.4.4.4** limits of computation;
- **4.4.4.5** tractable and intractable problems;
- **4.4.4.6** computable and non-computable problems;
- **4.4.4.7** the halting problem.

The wider [theory of computation study guide](/resources/aqa-a-level-computer-science-theory-of-computation-study-guide/) gives an overview of section 4.4. Condensed notes are in the [classification of algorithms revision notes](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms-revision-notes/), and exam-style questions are in the [classification of algorithms practice questions](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms-practice/).

## 4.4.4.1 Comparing algorithms

Algorithms can be compared by expressing their **complexity as a function relative to the size of the problem**. The **size of the problem**, usually written **n**, is the key issue: the number of items to sort, the number of vertices in a graph, or the number of digits in a number. A fast machine does not change how an algorithm's cost grows with n, so counting steps against n is a fairer comparison than timing a program.

Some algorithms are more efficient **time-wise** (fewer steps) or **space-wise** (less memory). Efficient automated abstractions mean data models and algorithms that run quickly while taking up the minimum of resources such as memory. There are often trade-offs: merge sort is quicker than bubble sort for large lists but uses extra memory.

## 4.4.4.2 Maths for Big-O notation

### Functions

A **function** is a mapping from one set of values, the **domain**, to another, the **co-domain**. The notation ℕ → ℕ means the function takes natural numbers and gives natural numbers. The number of steps an algorithm needs is a function of n, mapping a problem size to a count.

### Families of function

| Family | Example | Behaviour as x grows |
|---|---|---|
| Linear | y = 2x | Doubling x doubles y |
| Polynomial | y = 2x² | Doubling x multiplies y by 4 |
| Exponential | y = 2ˣ | Adding 1 to x doubles y |
| Logarithmic | y = log₁₀ x | Grows very slowly; multiplying x by 10 adds 1 |

### Permutations and factorials

A **permutation** is an ordering of a set of objects. The letters A, B, C can be ordered in 6 ways (ABC, ACB, BAC, BCA, CAB, CBA). The number of permutations of n distinct objects is **n factorial**, written **n!**, the product of all positive integers up to n:

n! = n × (n − 1) × … × 2 × 1.

So 5! = 120, 6! = 720 and 10! = 3,628,800. Factorial growth is even faster than exponential growth.

## 4.4.4.3 Order of complexity

**Big-O notation** describes how the **time requirement of an algorithm grows** as n grows. Two rules produce the Big-O form of a step count:

1. Keep only the term that grows fastest (the **dominant term**).
2. Drop constant multipliers.

So 3n² + 5n + 20 is **O(n²)**, and n(n − 1)/2 is also O(n²).

| Big-O | Name | Example |
|---|---|---|
| O(1) | Constant | Reading `list[i]` |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Linear search |
| O(n log n) | Between linear and polynomial | Merge sort |
| O(n²) | Polynomial | Bubble sort |
| O(2ⁿ) | Exponential | Trying every subset; naive recursive Fibonacci |
| O(n!) | Factorial | Trying every ordering, as in a brute-force travelling salesman |

The specification names constant, logarithmic, linear, polynomial and exponential. Growth for some sample n:

| n | log₂ n | n | n log₂ n | n² | 2ⁿ | n! |
|---|---|---|---|---|---|---|
| 4 | 2 | 4 | 8 | 16 | 16 | 24 |
| 8 | 3 | 8 | 24 | 64 | 256 | 40,320 |
| 10 | 3.3 | 10 | 33 | 100 | 1,024 | 3,628,800 |
| 20 | 4.3 | 20 | 86 | 400 | 1,048,576 | about 2.4 × 10¹⁸ |

### Deriving time complexity

To derive the complexity of an algorithm, count how many times the basic step runs as a function of n, then apply the two rules.

**Example 1: a single loop.**
```
FOR i ← 1 TO n
    total ← total + i
NEXT i
```
The addition runs n times: **O(n)**.

**Example 2: nested loops.**
```
FOR i ← 1 TO n
    FOR j ← 1 TO n
        count ← count + 1
    NEXT j
NEXT i
```
The inner loop runs n times for each of n passes of the outer loop: n × n = n². **O(n²)**.

**Example 3: a loop whose inner count depends on the outer.** If j runs from 1 to i − 1, the total is 0 + 1 + … + (n − 1) = n(n − 1)/2, which is still **O(n²)** after dropping the constant and the lower term. For n = 100 the count is 4,950.

**Example 4: halving.**
```
WHILE n > 1
    n ← n DIV 2
ENDWHILE
```
Each pass halves n, so it ends after about log₂ n passes: **O(log n)**. For n = 1,000 there are 9 passes.

**Example 5: a fixed number of steps.** An algorithm that does three assignments whatever n is has **O(1)**.

**Example 6: recursion with two calls.** A naive recursive Fibonacci that calls itself twice per step makes 15 calls for n = 5, 177 for n = 10 and 21,891 for n = 20. The count roughly multiplies by a constant for each increase in n, which is **exponential**.

Comparing two algorithms by Big-O compares how they behave as n gets **large**. An O(n) algorithm with a large constant factor can still beat an O(n²) one for small n, but not for large n.

## 4.4.4.4 Limits of computation

**Algorithmic complexity** and **hardware** place limits on what can be computed. An algorithm with exponential or factorial growth may be impossible to finish in a useful time even on the fastest computer, because the number of steps becomes enormous for modest n. Memory is finite too. Faster hardware helps only a little with exponential growth: a computer 1,000 times faster can handle an exponential problem only about 10 items larger, because 2¹⁰ is about 1,000.

Example of the scale: at one billion steps a second, an algorithm needing 2ⁿ steps takes about a second for n = 30, about 13 days for n = 50 and about 36 years for n = 60.

## 4.4.4.5 Tractable and intractable problems

- A **tractable** problem has a solution that runs in **polynomial time or better** (for example O(n), O(n²), O(n³) or O(n log n)). Such problems can be solved for realistically large inputs.
- An **intractable** problem has **no polynomial-time solution**. It may be solvable in theory, but the time needed grows too fast (exponential or worse) for all but small inputs.

**Example.** The travelling salesman problem: find the shortest route that visits n towns once and returns to the start. Trying every route means checking (n − 1)! orders. For 10 towns that is 362,880 routes. For 20 towns it is about 1.2 × 10¹⁷ routes, which at a billion routes a second would take almost 4 years.

For intractable problems, **heuristic methods** are often used. A heuristic is a rule of thumb that finds a good, but not guaranteed best, solution quickly. For the travelling salesman, a heuristic might always travel to the nearest unvisited town.

## 4.4.4.6 Computable and non-computable problems

A problem is **computable** if an algorithm exists that solves it. Some problems **cannot be solved algorithmically**, however powerful the computer and however much time is available. These are **non-computable** problems. This is different from intractable: an intractable problem has an algorithm, but it takes too long, whereas a non-computable problem has no algorithm at all.

## 4.4.4.7 The halting problem

The **halting problem** asks: given any program and an input for it, can we determine whether the program will **eventually stop**, or whether it will run for ever?

Alan Turing showed that **no algorithm can answer this for every program and input**. You do not need to prove this, but you must describe it. It is the standard example of an **unsolvable (non-computable) problem**.

Its significance is that it **demonstrates that there are problems that cannot be solved by a computer**. In practice it means that no tool can be written that finds all infinite loops in all programs. Testing tools can find some, but there will always be programs which they cannot decide. It also shows that computer science has fundamental limits, not just engineering ones.

## Common mistakes

- Giving the Big-O of the **formula** instead of its dominant term, such as "O(3n² + n)".
- Confusing intractable with non-computable. Intractable: solvable but too slowly. Non-computable: no algorithm exists.
- Saying a faster computer makes an intractable problem tractable.
- Reading O(log n) as "slower than O(n)". It is faster.
- Treating Big-O as an exact running time in seconds.
- Saying the halting problem is that programs sometimes crash or loop. It is about the impossibility of a general decision procedure.

## Exam technique

- **Derive complexity**: count the basic steps as a function of n, then keep the dominant term and drop constants.
- **Order the growth rates** from slowest to fastest: constant, logarithmic, linear, polynomial, exponential (then factorial).
- **Explain tractable**: polynomial time or better. **Explain intractable**: no polynomial-time solution; use a heuristic.
- **Halting problem**: define it in one sentence, then give its significance.

## More resources on this topic

- [Classification of algorithms revision notes](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms-revision-notes/)
- [Classification of algorithms practice questions](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms-practice/)
- [Sorting algorithms study guide](/resources/aqa-a-level-computer-science-7517-sorting-algorithms/)
- [A model of computation study guide](/resources/aqa-a-level-computer-science-7517-a-model-of-computation/)

*Written against the AQA A-level Computer Science (7517) specification, 4.4.4 Classification of algorithms. Always check the current specification on the AQA website.*
