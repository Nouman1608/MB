---
title: "OxfordAQA A-Level Computer Science (9645): Searching algorithms -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Searching Algorithms Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 4 – Searching and sorting algorithms"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 4.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "searching-and-sorting-algorithms"
  - qualification: "a-level"
    topic: "searching-and-sorting-algorithms"
    subtopic: "searching-algorithms-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.4.1: tracing and writing linear and binary search and comparing their efficiency, with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.4.1 Searching algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: linear search, binary search and a comparison of the two. Code is Python. Lists are indexed from 0 and `mid` is `(low + high) // 2`.

Related pages: [searching algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-searching-algorithms/) · [searching algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-searching-algorithms-revision-notes/)

## Section A

**1.** State the difference between the inefficient and the more advanced versions of linear search. **[2]**

**2.** State **one** condition that must be true of a list before a binary search can be used. **[1]**

**3.** A linear search is made of a list of 50 items for a target that is not in the list. State the number of comparisons the more advanced version makes. **[1]**

## Section B

**4.** The list `scores = [27, 14, 40, 9, 33, 21]` is searched for 33 using a linear search that stops when the item is found.

**(a)** State the index returned. **[1]**
**(b)** State the number of comparisons made. **[1]**
**(c)** Explain whether a binary search could be used on this list. **[2]**

**5.** The list `data = [5, 12, 18, 23, 31, 39, 46, 52, 58, 67, 73, 88]` has 12 items. A binary search is carried out for 73.

Complete a trace table with the columns low, high, mid and `data[mid]`, and state the value returned. **[5]**

**6.** Using the same list as Question 5, a binary search is carried out for 40.

**(a)** Show the values of low, high and mid on each pass. **[3]**
**(b)** State the value returned and explain how the algorithm decides that 40 is absent. **[2]**

**7.** Write a Python function `linear_search(items, target)` that returns the index of the first occurrence of `target`, or -1 if it is absent, and stops as soon as the target is found. **[4]**

**8.** Write a Python function `binary_search(items, target)` that searches an ordered list and returns the index of `target`, or -1 if it is absent. **[6]**

**9.** A student writes the following binary search.

```python
def bsearch(items, target):
    low = 0
    high = len(items) - 1
    while low < high:
        mid = (low + high) // 2
        if items[mid] == target:
            return mid
        elif items[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

**(a)** State the value returned by `bsearch([2, 4, 6, 8, 10], 10)`. **[1]**
**(b)** Explain why the function gives this result although 10 is in the list. **[2]**
**(c)** Give the correction needed. **[1]**

**10.** A school database holds 4,000 student numbers in ascending order. A programmer is choosing between a linear search and a binary search.

**(a)** State the maximum number of comparisons that a binary search needs for 4,000 items. **[1]**
**(b)** Compare the two algorithms for this database in terms of time efficiency. **[2]**
**(c)** A different list of 4,000 items is not in order and will be searched once. Explain which algorithm is more suitable. **[2]**

## Answers

**1.** The inefficient version **always looks at every item** in the list, even after finding the target [1]; the advanced version **stops as soon as the item is found** [1]. **[2]**

**2.** The list must be **in order** (sorted) [1]. **[1]**

**3.** **50** [1] (every item is checked). **[1]**

**4. (a)** **4** [1]: 33 is at index 4 (27 at 0, 14 at 1, 40 at 2, 9 at 3).
**(b)** **5** comparisons [1].
**(c)** No, binary search could not be used [1], because the list is **not in order**, so the algorithm could not decide which half to discard [1]. **[2]**

**5.**

| Pass | low | high | mid | data[mid] |
|---|---|---|---|---|
| 1 | 0 | 11 | 5 | 39 |
| 2 | 6 | 11 | 8 | 58 |
| 3 | 9 | 11 | 10 | 73 |

Pass 1 row correct [1]; pass 2 row correct [1]; pass 3 row correct [1]; stops because `data[10]` equals 73 [1]; returns **10** [1]. **[5]**

**6. (a)**

| Pass | low | high | mid |
|---|---|---|---|
| 1 | 0 | 11 | 5 |
| 2 | 6 | 11 | 8 |
| 3 | 6 | 7 | 6 |

All three rows correct [3; two rows [2]; one row [1]]. **[3]**
**(b)** Returns **-1** [1]. After pass 3, `data[6]` is 46, which is greater than 40, so high becomes 5; now low (6) is greater than high (5), so the range is empty and 40 is absent [1]. **[2]**

**7.** Example answer:

```python
def linear_search(items, target):
    for index in range(len(items)):      # [1] loops over every index
        if items[index] == target:       # [1] compares item with target
            return index                 # [1] returns as soon as found
    return -1                            # [1] after the loop: not found
```

**[4]**

**8.** Example answer:

```python
def binary_search(items, target):
    low = 0                              # [1] initial low
    high = len(items) - 1                # [1] initial high
    while low <= high:                   # [1] correct loop condition
        mid = (low + high) // 2          # [1] integer division for mid
        if items[mid] == target:
            return mid                   # [1] found
        elif items[mid] < target:
            low = mid + 1                # [1] both updates correct
        else:
            high = mid - 1
    return -1
```

Award the last mark only when both `low = mid + 1` and `high = mid - 1` are correct, and `-1` is returned when not found. **[6]**

**9. (a)** **-1** [1]. **[1]**
**(b)** The loop condition is `low < high`, so the loop **ends when low equals high** [1], before the last remaining item (index 4, the value 10) is ever compared with the target [1]. **[2]**
**(c)** Change the condition to `low <= high` [1]. **[1]**

**10. (a)** 12 [1]. (2^11 is 2,048 and 2^12 is 4,096, so 12 comparisons are enough.) **[1]**
**(b)** A linear search could need up to **4,000** comparisons, but binary search needs at most **12** [1], because each comparison halves the remaining range, so binary search is far faster on a large ordered list [1]. **[2]**
**(c)** **Linear search** [1], because it works on an unordered list, whereas binary search would first need the whole list sorting, which is more work than one search [1]. **[2]**

## Frequently asked questions

**What if mid is not a whole number?**
Use integer division (DIV) so that mid is a whole number. This takes the lower of the two middle positions in a list with an even number of items.

**Does binary search always find the first match if there are duplicates?**
No. It returns whichever matching item it reaches first, which need not be the first in the list.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.4.1 Searching algorithms.
