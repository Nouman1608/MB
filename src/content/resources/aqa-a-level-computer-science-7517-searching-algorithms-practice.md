---
title: "AQA A-Level Computer Science (7517): Searching algorithms -- Practice Questions"
seoTitle: "AQA A-Level CS Searching Algorithms Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of algorithms"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 3.4
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
    subtopic: "searching-algorithms-7517"
description: "Original AQA 7517 section 4.3.4 questions with answers: tracing and analysing linear search, binary search and binary tree search."
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
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Searching algorithms study guide](/resources/aqa-a-level-computer-science-7517-searching-algorithms/) | [Searching algorithms revision notes](/resources/aqa-a-level-computer-science-7517-searching-algorithms-revision-notes/)

Unless a question says otherwise, lists are indexed from 0 and a binary search uses `mid = (low + high) DIV 2`, where `DIV` is integer division.

---

## Section A

**1.** State the time complexity of a linear search, in Big-O notation. **[1]**

**2.** State the time complexity of a binary search, in Big-O notation. **[1]**

**3.** State one condition that the data must meet before a binary search can be used. **[1]**

**4.** State the number of comparisons a linear search makes, in the worst case, on a list of 250 items. **[1]**

**5.** Describe what a binary tree search does when the target is smaller than the value in the current node. **[1]**

## Section B

**6.** The list L is: `5, 9, 14, 20, 27, 33, 38, 46, 52, 60, 71, 85`. It is indexed from 0.

**(a)** State the index of the first item compared when a binary search for 46 is carried out. **[1]**
**(b)** Complete a trace of a binary search for 46, showing `low`, `high`, `mid` and `L[mid]` for each comparison. **[4]**
**(c)** State the number of comparisons a linear search would need to find 46. **[1]**

**7.** Trace a binary search of the list L in Question 6 for the value 50. State how the algorithm decides that 50 is not present. **[4]**

**8.** Trace a binary search of the list L for the value 9. State the number of comparisons made. **[3]**

**9.** Write a binary search subroutine that takes a sorted array and a target and returns the index of the target, or -1 if it is not present. **[5]**

**10.** A student has a list of 2,000 items sorted in ascending order. They say that a binary search will need about 1,000 comparisons in the worst case because it is "half of 2,000". Explain why this is wrong, and state the largest number of comparisons a binary search could need. **[3]**

**11.** The values 50, 30, 70, 20, 40, 60, 80 and 35 are inserted, in that order, into an empty binary search tree.

**(a)** State the values compared, in order, when searching for 35. **[2]**
**(b)** State the values compared, in order, when searching for 65, and the result. **[2]**

**12.** The values 10, 20, 30, 40, 50 and 60 are inserted in that order into an empty binary search tree.

**(a)** Describe the shape of the tree. **[1]**
**(b)** State the number of comparisons needed to find 60. **[1]**
**(c)** State the time complexity of a search in this tree, and explain why it differs from the usual figure for binary tree search. **[2]**

**13.** A programmer has an unsorted list of 40 names that will be searched once. A colleague suggests sorting the list first and then using a binary search. Evaluate this suggestion. **[4]**

---

## Answers

**1.** O(n) [1].

**2.** O(log n) [1].

**3.** The data must be sorted (in order) [1].

**4.** 250 [1].

**5.** It moves to the left child (left subtree) [1].

**6. (a)** Index 5 [1]. (0 + 11) DIV 2 = 5.
**(b)**

| low | high | mid | L[mid] | Action |
|---|---|---|---|---|
| 0 | 11 | 5 | 33 | 33 < 46, so low ← 6 |
| 6 | 11 | 8 | 52 | 52 > 46, so high ← 7 |
| 6 | 7 | 6 | 38 | 38 < 46, so low ← 7 |
| 7 | 7 | 7 | 46 | found at index 7 |

One mark for each correct row [4].
**(c)** 8 comparisons (46 is the eighth item) [1].

**7.** The first four rows are the same as in Question 6 (mid = 5, 8, 6, 7 with values 33, 52, 38, 46) [2]; after comparing 46 < 50, `low` becomes 8 [1]; now `low` (8) is greater than `high` (7), so the loop ends and the algorithm reports that 50 is not present [1].

**8.**

| low | high | mid | L[mid] | Action |
|---|---|---|---|---|
| 0 | 11 | 5 | 33 | 33 > 9, so high ← 4 |
| 0 | 4 | 2 | 14 | 14 > 9, so high ← 1 |
| 0 | 1 | 0 | 5 | 5 < 9, so low ← 1 |
| 1 | 1 | 1 | 9 | found at index 1 |

First three rows correct [2]; found after 4 comparisons [1].

**9.**
```
SUBROUTINE BinarySearch(list, target)
    low ← 0
    high ← LENGTH(list) - 1
    WHILE low <= high
        mid ← (low + high) DIV 2
        IF list[mid] = target THEN
            RETURN mid
        ELSEIF list[mid] < target THEN
            low ← mid + 1
        ELSE
            high ← mid - 1
        ENDIF
    ENDWHILE
    RETURN -1
ENDSUBROUTINE
```
Initial pointers [1]; loop condition `low <= high` [1]; middle calculated and compared with the target, returning it if equal [1]; correct adjustment of `low` and `high` using `mid + 1` and `mid - 1` [1]; -1 returned after the loop [1].

**10.** A binary search discards half of the remaining items at every comparison, not half of the list once [1]; so the number of comparisons grows with log₂ n [1]; since 2^10 = 1,024 and 2^11 = 2,048, a list of 2,000 items can be reduced to one item in at most 11 halvings, so at most 11 comparisons are needed [1].

**11. (a)** 50, 30, 40, 35 [2]. (One mark for starting 50, 30, 40; one mark for ending at 35.)
**(b)** 50, 70, 60 [1]; the right subtree of 60 is empty, so 65 is not found [1].

**12. (a)** Every node has only a right child, so the tree is a single chain (like a linked list) [1].
**(b)** 6 [1].
**(c)** O(n) [1]; the usual O(log n) figure assumes a balanced tree, but here there is no halving, because each comparison removes only one node [1].

**13.** Any four from: the list is searched only once; a binary search on 40 items needs at most 6 comparisons, whereas a linear search needs at most 40, a small saving; sorting the list costs more steps than searching it linearly; so the total work is greater with the suggestion; sorting would only be worthwhile if the list was going to be searched many times; a linear search should be used instead [4].

---

## Where marks are usually lost

- Recalculating the middle with the wrong rounding.
- Moving to `mid` rather than `mid + 1` or `mid - 1`.
- Stopping a trace as soon as the value is found without showing the earlier rows.
- Saying binary search is "faster" without mentioning that it halves the search area each time.
- Quoting O(log n) for a tree that has become a chain.
