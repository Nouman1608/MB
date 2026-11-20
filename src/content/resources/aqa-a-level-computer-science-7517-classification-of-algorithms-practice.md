---
title: "AQA A-Level Computer Science (7517): Classification of algorithms -- Practice Questions"
seoTitle: "AQA A-Level Computer Science Big-O and Halting Problem Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA 7517 section 4.4.4 questions with answers: Big-O notation, orders of complexity, tractable and intractable problems and the halting problem."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Classification of algorithms study guide](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms/) | [Classification of algorithms revision notes](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms-revision-notes/)

---

## Section A

**1.** State what is meant by the size of the problem when comparing the complexity of algorithms. **[1]**

**2.** State the Big-O time complexity of a linear search. **[1]**

**3.** State what is meant by an intractable problem. **[1]**

**4.** State what is meant by a heuristic. **[1]**

**5.** Calculate 6!. **[1]**

## Section B

**6.** Give the Big-O time complexity of each of these, in its simplest form.

**(a)** An algorithm that takes 5n² + 8n + 3 steps. **[1]**
**(b)** An algorithm that always takes 12 steps whatever the value of n. **[1]**
**(c)** An algorithm that takes 3 × 2ⁿ steps. **[1]**

**7.** Write these time complexities in order from the one that grows most slowly to the one that grows most quickly: O(n²), O(2ⁿ), O(1), O(n), O(log n). **[2]**

**8.** Consider this algorithm.

```
count ← 0
FOR i ← 1 TO n
    FOR j ← 1 TO n
        count ← count + 1
    NEXT j
NEXT i
```

**(a)** State the final value of `count` when n = 40. **[1]**
**(b)** State the time complexity and explain how you derived it. **[2]**
**(c)** State what happens to the number of steps when n is doubled. **[1]**

**9.** Consider this algorithm.

```
WHILE n > 1
    n ← n DIV 2
ENDWHILE
```

**(a)** Calculate how many times the loop body runs if n starts at 1,000. **[2]**
**(b)** State the time complexity. **[1]**

**10.** An algorithm takes 2ⁿ steps for an input of size n, and a computer can carry out one billion (10⁹) steps each second.

**(a)** Calculate approximately how long the algorithm takes when n = 30. **[2]**
**(b)** A new computer is 1,000 times faster. Explain why this has little effect on the size of problem which can be solved in a given time. **[2]**

**11.** A delivery firm wants to find the shortest route visiting 20 customers and returning to the depot. Trying every possible order of visits is one approach.

**(a)** State the number of possible routes, in terms of factorial, if the starting point is fixed. **[1]**
**(b)** Explain why this approach is not practical for the firm. **[2]**
**(c)** Describe what the firm could do instead. **[2]**

**12.** State whether each problem is best described as tractable, intractable or non-computable, and justify each answer in a sentence.

**(a)** Sorting a list of one million items using merge sort. **[2]**
**(b)** Deciding, for any program and input, whether the program will stop. **[2]**

**13.** Describe the halting problem. **[2]**

**14.** Explain the significance of the halting problem for computer science. **[3]**

**15.** Algorithm A takes 100n steps. Algorithm B takes n² steps. Calculate the value of n at which both take the same number of steps, and state which is quicker for larger values of n. **[3]**

---

## Answers

**1.** The quantity that determines how much work there is, such as the number of items to be searched, sorted or processed [1].

**2.** O(n) [1].

**3.** A problem that has no solution that runs in polynomial time (the time needed grows too fast for all but small inputs) [1].

**4.** A rule of thumb (method) that finds a good, but not necessarily the best, solution in a reasonable time [1].

**5.** 6 × 5 × 4 × 3 × 2 × 1 = 720 [1].

**6. (a)** O(n²) [1].
**(b)** O(1) [1].
**(c)** O(2ⁿ) [1].

**7.** O(1), O(log n), O(n), O(n²), O(2ⁿ) [2]. (One mark if exactly one pair is the wrong way round.)

**8. (a)** 40 × 40 = 1,600 [1].
**(b)** O(n²) [1]; the inner loop runs n times for each of the n passes of the outer loop, so there are n × n steps [1].
**(c)** It increases by a factor of four [1].

**9. (a)** n becomes 500, 250, 125, 62, 31, 15, 7, 3, 1 [1]; the loop body runs 9 times [1].
**(b)** O(log n) [1].

**10. (a)** 2³⁰ = 1,073,741,824 steps [1]; at 10⁹ steps a second this takes just over 1 second [1].
**(b)** Each increase of n by 1 doubles the number of steps [1]; a computer 1,000 times faster can therefore solve a problem only about 10 larger (since 2¹⁰ is about 1,000) [1].

**11. (a)** 19! (nineteen factorial) [1]; this is about 1.2 × 10¹⁷.
**(b)** The number of routes grows factorially with the number of customers [1]; at a billion routes a second, 19! routes would take about 4 years, so the problem is intractable for this approach [1].
**(c)** Use a heuristic [1], for example always travel to the nearest unvisited customer, which gives a good route quickly but with no guarantee that it is the shortest [1].

**12. (a)** Tractable [1]; merge sort runs in O(n log n), which is better than polynomial time [1].
**(b)** Non-computable [1]; this is the halting problem, which no algorithm can solve for every program and input [1].

**13.** The problem of determining, for any program and input, whether the program will eventually stop (halt) [1]; or whether it will continue running for ever [1].

**14.** It is a problem that has been shown to have no algorithm that solves it for every program and input [1]; so it demonstrates that there are problems that cannot be solved by a computer [1]; in practice, no program can be written that detects every infinite loop in every program [1].

**15.** 100n = n² gives n = 100 [1]; for n below 100, B is quicker (n² is smaller than 100n) [1]; for n above 100, A is quicker, because n² grows faster than 100n, so the O(n) algorithm is better for large n [1].

---

## Where marks are usually lost

- Leaving constants or lower terms in a Big-O answer.
- Confusing intractable problems (an algorithm exists but is too slow) with non-computable problems (no algorithm exists).
- Suggesting faster hardware as the solution to exponential growth.
- Describing the halting problem as programs that crash rather than as an undecidable question about all programs.
- Giving a complexity without explaining where it comes from.
