---
title: "IGCSE Computer Science: Algorithms — Practice Questions"
resourceType: "practice-questions"
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
description: "Original exam-style practice questions with full worked answers on pseudocode, trace tables, searching and sorting for International GCSE Computer Science."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

Related: [Algorithms revision notes](/resources/igcse-oxfordaqa-computer-science-algorithms-revision-notes/)

---

## Section A

**1.** Define an algorithm, stating three properties it must have. **[3]**

**2.** Distinguish between decomposition and abstraction. **[2]**

**3.** State the difference between a WHILE loop and a REPEAT UNTIL loop. **[2]**

---

## Section B

**4.** Study this algorithm.

```
total <- 0
count <- 0
FOR i <- 1 TO 5
    INPUT num
    IF num > 10 THEN
        total <- total + num
        count <- count + 1
    ENDIF
NEXT i
IF count > 0 THEN
    OUTPUT total / count
ELSE
    OUTPUT "none"
ENDIF
```

**(a)** Complete a trace table for the inputs 4, 15, 8, 22, 30. **[5]**

**(b)** State the output. **[1]**

**(c)** Explain the purpose of the final IF statement. **[2]**

**5.** A list contains: 3, 7, 12, 18, 25, 31, 44.

**(a)** Describe how a binary search would find the value 31, stating each comparison. **[4]**

**(b)** State the condition that must be met before a binary search can be used, and explain why. **[2]**

**(c)** State one advantage of a linear search over a binary search. **[1]**

**6.** A programmer must sort a large list.

**(a)** Describe how a bubble sort works. **[3]**

**(b)** State one advantage and one disadvantage of bubble sort compared with merge sort. **[2]**

---

## Answers

**4. (a)**

| i | num | num > 10? | total | count |
|---|---|---|---|---|
| — | — | — | 0 | 0 |
| 1 | 4 | No | 0 | 0 |
| 2 | 15 | Yes | 15 | 1 |
| 3 | 8 | No | 15 | 1 |
| 4 | 22 | Yes | 37 | 2 |
| 5 | 30 | Yes | 67 | 3 |

[1 per correct row after initialisation]

**(b)** 67 ÷ 3 = **22.33** (accept 22.3) [1].

**(c)** It prevents **division by zero** [1], which would occur if no input exceeded 10 and count remained 0 [1].

**5. (a)** Middle item is **18** — 31 > 18, so discard the lower half [1].
Remaining: 25, 31, 44. Middle is **31** [1] — match found [1].
**Two comparisons** in total [1].

**(b)** The list must be **sorted** [1], because the algorithm discards half the data based on whether the target is above or below the middle item, which is only valid if the data is in order [1].

**(c)** It works on **unsorted** data [1].
*(Also acceptable: simpler to implement; faster on very short lists.)*

**6. (a)** Compare **each adjacent pair** of items [1] and **swap them if they are in the wrong order** [1]. Repeat passes through the list until **no swaps are made** in a complete pass [1].

**(b)** Advantage: **simpler to write and understand** [1]. Disadvantage: **much slower on large lists** — O(n²) compared with O(n log n) [1].

---

## Answers to Section A

**1.** A **sequence of steps that solves a problem** [1]. It must be **unambiguous** [1], **finite**, and **produce a result** [1].

**2. Decomposition** — breaking a problem into **smaller sub-problems** [1]. **Abstraction** — removing **unnecessary detail** to focus on what matters [1].

**3.** A **WHILE** loop tests the condition **before** the body, so it may run **zero times** [1]; **REPEAT UNTIL** tests **after**, so it always runs **at least once** [1].

---

## Where marks are usually lost

- Completing a trace table mentally and writing only the final answer.
- Saying WHILE always runs at least once.
- Recommending binary search on unsorted data.
- Describing bubble sort without mentioning repeated passes.
- Not closing pseudocode blocks (IF…ENDIF, FOR…NEXT).
