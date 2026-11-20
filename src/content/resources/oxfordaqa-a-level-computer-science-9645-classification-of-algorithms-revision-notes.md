---
title: "OxfordAQA A-Level Computer Science (9645): Classification of algorithms -- Revision Notes"
seoTitle: "OxfordAQA 9645 Classification of Algorithms Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.13.5: Big O classes, best and worst cases, tractable and intractable problems, heuristics, the Halting problem."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.13.5 Classification of algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.13, examined in Unit 4). For worked derivations, see the [classification of algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-classification-of-algorithms/), then practise with the [classification of algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-classification-of-algorithms-practice/).

## What the specification requires

- **3.13.5.1** Compare algorithms by their complexity as a function of the **size of the problem**; understand that some are more efficient **time-wise** or **space-wise**.
- **3.13.5.2** Use **Big O** for O(1), O(log n), O(n), O(nᵃ) and O(aⁿ); derive the time complexity of a simple algorithm; know best and worst cases of linear search, binary search, bubble sort, merge sort, Dijkstra's shortest path algorithm and searching a binary search tree.
- **3.13.5.3** Classify problems as **tractable** or **intractable**; know that **heuristics** are used for intractable problems and what a heuristic does.
- **3.13.5.4** Be aware some problems cannot be solved algorithmically; describe the **Halting problem** and its significance.

## Key terms

| Term | Meaning |
|---|---|
| Problem size (n) | Usually the amount of data to process, such as the number of items in a list |
| Time complexity | How the number of steps grows with n |
| Space complexity | How the memory used grows with n |
| Big O | Notation that keeps the fastest-growing term and drops constants |
| Tractable | Has a polynomial (or less) time solution |
| Intractable | Has no polynomial (or less) time solution |
| Heuristic | A set of rules or knowledge about the problem domain |
| Halting problem | The unsolvable problem of deciding whether a program will stop, without running it |

## The five classes

| Class | Notation | Doubling n does what? | Example |
|---|---|---|---|
| Constant | O(1) | nothing | array access by index |
| Logarithmic | O(log n) | adds one step | binary search |
| Linear | O(n) | doubles the time | linear search |
| Polynomial | O(nᵃ) | multiplies by 2ᵃ (n² gives 4 times) | bubble sort worst case |
| Exponential | O(aⁿ) | squares the time for a = 2 | all subsets of n items |

| n | log₂ n | n² | 2ⁿ |
|---|---|---|---|
| 10 | 3.3 | 100 | 1,024 |
| 100 | 6.6 | 10,000 | about 1.3 × 10³⁰ |
| 1,000 | 10.0 | 1,000,000 | astronomically large |

## Deriving complexity

1. Count how many times the busiest statement runs, in terms of n.
2. Keep the fastest-growing term.
3. Drop constant factors.

| Code shape | Count | Class |
|---|---|---|
| One loop of n passes, 3 steps each plus 5 | 3n + 5 | O(n) |
| Loop inside a loop, both n passes | n × n = n² | O(n²) |
| `WHILE n > 1: n ← n DIV 2` | log₂ n passes (64 gives 6, 1000 gives 9) | O(log n) |
| One statement, no loop | 1 | O(1) |

## Best and worst cases

| Algorithm | Best | Worst |
|---|---|---|
| Linear search | O(1) | O(n) |
| Binary search | O(1) | O(log n) |
| Bubble sort | O(n) | O(n²) |
| Merge sort | O(n log n) | O(n log n) |
| Dijkstra (array version, V vertices) | O(V²) | O(V²) |
| Searching a binary search tree | O(1) | O(n) |

- Bubble sort best case needs a stop-early flag and a list already in order: one pass of n − 1 comparisons. Worst case: n(n − 1)/2 comparisons (28 for n = 8).
- Binary search on 1,000,000 items needs at most 20 comparisons.
- A binary search tree search is O(log n) when balanced but O(n) when the tree is a chain, for example after inserting sorted data.

## Tractable, intractable and heuristics

- **Tractable:** polynomial time or better. **Intractable:** no polynomial-time solution.
- Visiting k shops and checking every order is k! routes: 10! = 3,628,800 and 12! = 479,001,600. Time grows faster than any polynomial, so the problem is treated as intractable.
- A **heuristic method** might find an **approximate, non-optimal** solution, or **change some of the problem constraints**.
- Example heuristic: "go to the nearest unvisited shop". It is quick but may not give the shortest route.

## Halting problem

- It is the problem of deciding whether a program will **eventually stop** for a given input, **without executing it**.
- It **cannot be solved** by any algorithm. Proof is not required.
- **Significance:** there are problems that cannot be solved by a computer.
- Do not confuse **non-computable** (no algorithm exists) with **intractable** (an algorithm exists but takes too long).

## Exam traps

- **Constants dropped.** 3n + 5 is O(n).
- **Polynomial versus exponential.** n² is polynomial; 2ⁿ is exponential.
- **Best and worst.** Always say which case you are quoting.
- **Merge sort.** Its best and worst cases are both O(n log n).
- **Binary search tree.** Worst case O(n) is for an unbalanced tree.
- **Heuristic.** It does not promise the best answer.
- **Halting problem.** Include "without running the program".

## Quick self-test

1. What does n usually represent?
2. Name two ways one algorithm can be more efficient than another.
3. Which class is O(2ⁿ)?
4. State the Big O of a loop of n passes inside another loop of n passes.
5. State the best-case complexity of bubble sort.
6. State the worst-case complexity of searching a binary search tree.
7. A search takes 3n + 5 steps. State its Big O.
8. How many comparisons does binary search need at most for 1,000,000 items?
9. What is a tractable problem?
10. What is a heuristic?
11. Give one thing a heuristic method might do.
12. Why can the Halting problem not be solved by running the program?

### Answers

1. The size of the problem, usually the amount of data (for example number of items).
2. Time-wise (fewer steps) and space-wise (less memory).
3. Exponential.
4. O(n²).
5. O(n).
6. O(n).
7. O(n).
8. 20.
9. A problem with a polynomial (or less) time solution.
10. A set of rules or knowledge about the problem domain.
11. Find an approximate, non-optimal solution, or change some of the problem constraints.
12. If the program has not stopped yet, you cannot tell whether it will stop later or run for ever.

## Next steps

- [Classification of algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-classification-of-algorithms/)
- [Classification of algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-classification-of-algorithms-practice/)
- [Turing machines revision notes](/resources/oxfordaqa-a-level-computer-science-9645-turing-machines-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.13.5 Classification of algorithms.
