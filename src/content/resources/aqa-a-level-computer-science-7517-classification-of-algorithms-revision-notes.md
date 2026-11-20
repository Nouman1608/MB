---
title: "AQA A-Level Computer Science (7517): Classification of algorithms -- Revision Notes"
seoTitle: "AQA A-Level Computer Science Big-O and Halting Problem Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.4.4 recall: Big-O notation, orders of complexity, tractable and intractable problems, computability and the halting problem."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.4.4 Classification of algorithms**, AQA A-Level Computer Science (7517): comparing algorithms, Big-O notation and orders of complexity, limits of computation, tractable and intractable problems, computable and non-computable problems, and the halting problem. Fuller explanations are in the [classification of algorithms study guide](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms/); exam-style questions are in the [classification of algorithms practice questions](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms-practice/).

## Comparing algorithms (4.4.4.1)

- Express complexity as a **function of the size of the problem**, n. The size of the problem is the key issue.
- Algorithms can differ in **time** (steps) and **space** (memory).
- Counting steps against n is fairer than timing a program, because it does not depend on the machine.

## Maths for Big-O (4.4.4.2)

- A **function** maps a **domain** to a **co-domain**, for example ℕ → ℕ.
- **Linear:** y = 2x. **Polynomial:** y = 2x². **Exponential:** y = 2ˣ. **Logarithmic:** y = log₁₀ x.
- A **permutation** is an ordering of objects. n distinct objects have **n!** permutations, where n! is the product of the positive integers up to n.
- 3! = 6, 5! = 120, 10! = 3,628,800.

## Big-O and orders of complexity (4.4.4.3)

**Big-O notation** gives the way the time requirement **grows** with n.

**Two rules:** keep the **fastest-growing term**, and drop **constant multipliers**. So 3n² + 5n + 20 is O(n²).

| Big-O | Name | Typical example |
|---|---|---|
| O(1) | Constant | Reading an array element |
| O(log n) | Logarithmic | Binary search; binary tree search (balanced) |
| O(n) | Linear | Linear search |
| O(n log n) | Quasi-linear | Merge sort |
| O(n²) | Polynomial | Bubble sort; nested loops |
| O(2ⁿ) | Exponential | Trying every subset |
| O(n!) | Factorial | Trying every ordering |

Order from slowest-growing to fastest: constant, logarithmic, linear, polynomial, exponential (then factorial).

### Deriving complexity

| Code pattern | Steps | Big-O |
|---|---|---|
| One loop of n | n | O(n) |
| Loop inside a loop, both n | n × n | O(n²) |
| Inner loop up to i | n(n − 1)/2 | O(n²) |
| Halve n each pass | about log₂ n | O(log n) |
| Fixed number of statements | constant | O(1) |
| Recursion with two calls per step | roughly doubles per extra n | O(2ⁿ) |

**Worked check.** Nested loops with n = 100: the inner statement runs 100 × 100 = 10,000 times. With the inner loop running to i, it runs 4,950 times. Both are O(n²).

**Growth check.** Doubling n: O(n) doubles the work, O(n²) quadruples it, O(2ⁿ) squares it, O(log n) adds one step.

## Limits of computation (4.4.4.4)

- **Algorithmic complexity** and **hardware** limit what can be computed.
- Exponential growth defeats faster hardware: a machine 1,000 times faster handles only about 10 more items.
- At a billion steps a second, 2ⁿ steps takes about a second for n = 30, about 13 days for n = 50 and about 36 years for n = 60.

## Tractable and intractable (4.4.4.5)

| | Tractable | Intractable |
|---|---|---|
| Time | **Polynomial or better** | **No polynomial-time** solution |
| In practice | Can be solved for large n | Solvable only for small n |
| Approach | Use the algorithm | Often use a **heuristic** |

A **heuristic** is a rule of thumb that finds a good solution quickly, with no guarantee that it is the best.

**Example.** Travelling salesman: (n − 1)! routes to check. 10 towns give 362,880 routes. 20 towns give about 1.2 × 10¹⁷.

## Computable and non-computable (4.4.4.6)

- **Computable:** an algorithm exists that solves it.
- **Non-computable:** **no algorithm** can solve it, however much time and memory.
- Not the same as intractable: an intractable problem has an algorithm but it takes too long.

## The halting problem (4.4.4.7)

**Statement.** Given any program and an input, determine whether the program will eventually **stop** or run for ever.

- It is **unsolvable**: no algorithm can decide it for every program and input.
- You must **describe** it but need not prove it.
- **Significance:** it shows there are problems that **cannot be solved by a computer**, so computation has fundamental limits. No tool can detect all infinite loops in all programs.

## Exam traps

- **Constants left in** the Big-O form.
- **Intractable and non-computable confused.**
- **O(log n) called slow.** It is a fast-growing-slowly function.
- **Faster hardware** offered as a cure for exponential time.
- **Halting problem** described as "programs that crash".
- **Missing n:** say what n is (the size of the input).

## Key terms

| Term | Definition |
|---|---|
| Time complexity | How the number of steps grows with n |
| Space complexity | How the memory needed grows with n |
| Big-O notation | A way of expressing the growth rate of an algorithm's cost |
| Polynomial time | Cost bounded by a power of n, such as n² |
| Exponential time | Cost growing as a constant raised to the power n, such as 2ⁿ |
| Tractable | Solvable in polynomial time or better |
| Intractable | No polynomial-time solution exists |
| Heuristic | A rule of thumb giving a good but not guaranteed best answer |
| Non-computable | Cannot be solved by any algorithm |
| Halting problem | Deciding whether any given program will stop for a given input |

## Self-test

1. What is meant by the "size of the problem"?
2. Give the Big-O of 4n² + 10n + 7.
3. Give the Big-O of a loop that runs 1 to n and contains a nested loop 1 to n.
4. Give the Big-O of binary search.
5. State the value of 5!.
6. What happens to the work of an O(n²) algorithm if n doubles?
7. Define a tractable problem.
8. Why are heuristics used for intractable problems?
9. How does a non-computable problem differ from an intractable one?
10. State the significance of the halting problem.

**Answers**

1. The quantity that determines how much work there is, such as the number of items to sort.
2. O(n²).
3. O(n²).
4. O(log n).
5. 120.
6. It increases by a factor of four.
7. A problem with a solution that runs in polynomial time or better.
8. An exact solution takes too long, so a heuristic finds a good solution in reasonable time.
9. A non-computable problem has no algorithm at all; an intractable problem has an algorithm but it takes too long for all but small inputs.
10. It shows that there are problems that cannot be solved by a computer.

## Related resources

- [Classification of algorithms study guide](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms/)
- [Classification of algorithms practice questions](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms-practice/)
- [Sorting algorithms revision notes](/resources/aqa-a-level-computer-science-7517-sorting-algorithms-revision-notes/)
- [A model of computation revision notes](/resources/aqa-a-level-computer-science-7517-a-model-of-computation-revision-notes/)
