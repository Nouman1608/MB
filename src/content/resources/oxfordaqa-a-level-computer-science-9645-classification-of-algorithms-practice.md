---
title: "OxfordAQA A-Level Computer Science (9645): Classification of algorithms -- Practice Questions"
seoTitle: "OxfordAQA 9645 Classification of Algorithms Practice"
resourceType: "practice-questions"
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
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.13.5 Classification of algorithms: Big O, best and worst cases, tractability, heuristics and the Halting problem."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.13.5 Classification of algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: comparing algorithms, Big O notation and best and worst cases, tractable and intractable problems, heuristics, and computable and non-computable problems. Pseudo-code uses `←` for assignment.

Related pages: [classification of algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-classification-of-algorithms/) ·
[classification of algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-classification-of-algorithms-revision-notes/)

## Section A

**1.** State what is meant by a **tractable** problem. **[1]**

**2.** State the Big O time complexity class of each of the following.

**(a)** Reading one item from an array using its index **[1]**
**(b)** Binary search, in the worst case **[1]**
**(c)** Merge sort, in the best case **[1]**

**3.** An algorithm takes 4n + 7 steps for a problem of size n. State the number of steps when n = 50 and the Big O class of the algorithm. **[2]**

## Section B

**4.** For each fragment of pseudo-code, state the number of times the statement in the body is executed, in terms of n, and give the Big O class.

**(a)**

```
FOR i ← 1 TO n
    OUTPUT i * i
```

**[2]**

**(b)**

```
FOR i ← 1 TO n
    FOR j ← 1 TO i
        count ← count + 1
```

Also state the value of `count` at the end when n = 10. **[3]**

**(c)**

```
i ← 1
WHILE i < n
    i ← i * 2
```

Also state how many times the loop body runs when n = 1024. **[3]**

**5.** A bubble sort sorts a list of n items. It makes a comparison for each pair in a pass, and a pass is only repeated if a swap occurred in the previous pass.

**(a)** For n = 12, calculate the number of comparisons if the algorithm performs all n − 1 passes, with pass k making n − k comparisons. **[2]**
**(b)** State the best-case input and the number of comparisons for n = 12. **[2]**
**(c)** State the best-case and worst-case time complexity of bubble sort in Big O notation. **[2]**

**6.** A balanced binary search tree holds 1,023 items.

**(a)** Using the fact that its height is 10 levels, state the largest number of comparisons needed to find an item. **[1]**
**(b)** The same 1,023 items were instead inserted in ascending order. State the largest number of comparisons and the Big O class of this worst case. **[2]**

**7.** The table shows the number of steps for three algorithms at two problem sizes. Complete the table.

| Class | n = 20 | n = 40 |
|---|---|---|
| O(n) | 20 | |
| O(n²) | 400 | |
| O(2ⁿ) | 1,048,576 | |

**(a)** Give the values for n = 40. **[3]**
**(b)** A computer performs one billion steps per second. Calculate the time for the O(2ⁿ) algorithm at n = 40, in seconds and in minutes (to the nearest minute). **[3]**

**8.** A delivery firm must visit 9 towns exactly once each, in any order, and wants the shortest route. A program checks every possible order.

**(a)** Calculate the number of orders to check. **[1]**
**(b)** The program checks 1,000 orders per second. For 15 towns the number of orders is 1,307,674,368,000. Calculate the time in years, to the nearest year (use 365.25 days per year). **[2]**
**(c)** Explain why this problem is described as intractable. **[2]**

**9.** Explain what a **heuristic** is and describe **two** ways in which a heuristic method might be used to tackle an intractable problem. **[4]**

**10.** The Halting problem is a famous unsolvable problem.

**(a)** Describe the Halting problem. **[2]**
**(b)** State why running the program and waiting is not a solution. **[1]**
**(c)** Explain the significance of the Halting problem for computation. **[1]**

## Answers

**1.** A problem that has a solution whose running time is polynomial (or less) in the size of the problem **[1]**.

**2. (a)** O(1) **[1]**
**(b)** O(log n) **[1]**
**(c)** O(n log n) **[1]**

**3.** 4 × 50 + 7 = **207** steps **[1]**; O(n) (linear), because the constants are dropped **[1]**. **[2]**

**4. (a)** The body runs **n** times **[1]**; O(n) **[1]**. **[2]**
**(b)** The inner loop runs 1 time, then 2, and so on up to n: n(n + 1)/2 times in total **[1]**; O(n²) **[1]**; for n = 10, count = 10 × 11 / 2 = **55** **[1]**. **[3]**
**(c)** The loop doubles i each time, so it runs about log₂ n times **[1]**; O(log n) **[1]**; for n = 1024 it runs **10** times (i = 1, 2, 4, ..., 512 give 10 passes) **[1]**. **[3]**

**5. (a)** 11 + 10 + 9 + ... + 1 = 12 × 11 / 2 = **66** **[2]** (award **[1]** for the method)
**(b)** The list is already in order **[1]**; one pass of 11 comparisons finds no swap, so the algorithm stops after **11** comparisons **[1]**. **[2]**
**(c)** Best case O(n) **[1]**; worst case O(n²) **[1]**. **[2]**

**6. (a)** **10** comparisons **[1]**
**(b)** The tree becomes a chain, so up to **1,023** comparisons are needed **[1]**; O(n) **[1]**. **[2]**

**7. (a)** O(n): 40 **[1]**; O(n²): 1,600 **[1]**; O(2ⁿ): 1,099,511,627,776 **[1]**. **[3]**
**(b)** Time = 1,099,511,627,776 / 1,000,000,000 = about **1,099.5 seconds** (award **[1]** for the method and **[1]** for the value in seconds), which is about **18 minutes** **[1]**. **[3]**

**8. (a)** 9! = **362,880** orders **[1]**
**(b)** 1,307,674,368,000 / 1,000 = 1,307,674,368 seconds **[1]**; divided by 31,557,600 seconds per year (365.25 × 86,400) = about **41 years** **[1]**. **[2]**
**(c)** The number of orders to check grows as n! (faster than any polynomial) **[1]**, so no polynomial-time solution is known and the time becomes impossibly large even for modest n **[1]**. **[2]**

**9.** A heuristic is a set of rules or knowledge about the problem domain **[1]**. Two ways a heuristic method might be used (award **[1]** each, **[1]** for the explanation): find an **approximate but non-optimal** solution quickly, for example always going to the nearest unvisited town **[1]**; **change some of the problem constraints**, for example accepting any route under a time or distance limit instead of the best one **[1]**. **[4]**

**10. (a)** It is the problem of determining whether a program will eventually stop **[1]** when given particular input, without executing the program **[1]**. **[2]**
**(b)** If the program has not stopped after any amount of time, you cannot tell whether it will stop later or run for ever **[1]**.
**(c)** It shows that there are problems that cannot be solved by a computer **[1]**.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.13.5 Classification of algorithms.
