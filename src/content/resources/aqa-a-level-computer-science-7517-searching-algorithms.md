---
title: "AQA A-Level Computer Science (7517): Searching algorithms"
seoTitle: "AQA A-Level Computer Science Searching Algorithms Guide"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.3.4 Searching algorithms: tracing and analysing linear search, binary search and binary tree search with their time complexity."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.3.4 Searching algorithms** in AQA A-Level Computer Science (7517). The specification names three algorithms and, for each, asks you to **trace** it and **analyse its time complexity**:

- **4.3.4.1 Linear search**, with time complexity O(n);
- **4.3.4.2 Binary search**, with time complexity O(log n);
- **4.3.4.3 Binary tree search**, with time complexity O(log n).

For linear and binary search the specification says you must *know* the algorithm as well as trace it. The wider [fundamentals of algorithms study guide](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms/) summarises section 4.3; this page goes through each search with a worked trace, explains where each complexity comes from, and compares them. Condensed notes are in the [searching algorithms revision notes](/resources/aqa-a-level-computer-science-7517-searching-algorithms-revision-notes/), and exam-style questions are in the [searching algorithms practice questions](/resources/aqa-a-level-computer-science-7517-searching-algorithms-practice/).

## What a search does

A search algorithm takes a collection of items and a **target**, and reports whether the target is present, usually with its position. The number of items is written **n**. To compare algorithms we count how many **comparisons** (or steps) are needed as n grows, because that does not depend on the speed of a particular computer. The result is written in **Big-O notation**; see the [classification of algorithms study guide](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms/).

## Linear search

A **linear search** checks the items one at a time from the first, in order, until it finds the target or reaches the end. It needs no particular ordering of the data.

```
SUBROUTINE LinearSearch(list, target)
    FOR i ← 0 TO LENGTH(list) - 1
        IF list[i] = target THEN
            RETURN i
        ENDIF
    NEXT i
    RETURN -1
ENDSUBROUTINE
```

Returning -1 for "not found" is a convention. State whichever you use.

### Worked example 1

List (indexed from 0): `3, 8, 12, 17, 21, 26, 34, 41, 55, 62, 78`. Search for 41.

| i | list[i] | Equal to 41? |
|---|---|---|
| 0 | 3 | no |
| 1 | 8 | no |
| 2 | 12 | no |
| 3 | 17 | no |
| 4 | 21 | no |
| 5 | 26 | no |
| 6 | 34 | no |
| 7 | 41 | yes, return 7 |

Eight comparisons were needed. A search for 50 would compare against all eleven items and return -1.

### Analysing linear search

- **Best case**: the target is first, one comparison.
- **Worst case**: the target is last or absent, n comparisons.
- **Average case** for a target that is present: about n/2 comparisons.

The number of comparisons grows in direct proportion to n. Doubling the list roughly doubles the work, so linear search has **linear time complexity, O(n)**. Big-O describes the growth of the worst case and ignores constant factors such as the one half in n/2.

Linear search is simple and works on unsorted data, so it is the right choice for short lists or lists that are searched only once.

## Binary search

A **binary search** needs the data to be **sorted** and held in a structure with direct access by position, such as an array. It repeatedly compares the target with the **middle** item of the part of the list still under consideration and throws away the half that cannot contain the target.

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

`DIV` is integer division, so `(0 + 10) DIV 2 = 5`. With an even number of items, the middle is rounded down by this rule. A question may use a different convention, such as rounding up, and will say so. Always follow the question.

### Worked example 2: target present

Search the same list for 41.

| low | high | mid | list[mid] | Comparison | Action |
|---|---|---|---|---|---|
| 0 | 10 | 5 | 26 | 26 < 41 | low ← 6 |
| 6 | 10 | 8 | 55 | 55 > 41 | high ← 7 |
| 6 | 7 | 6 | 34 | 34 < 41 | low ← 7 |
| 7 | 7 | 7 | 41 | equal | return 7 |

Four comparisons, compared with eight for the linear search.

### Worked example 3: target absent

Search for 50.

| low | high | mid | list[mid] | Comparison | Action |
|---|---|---|---|---|---|
| 0 | 10 | 5 | 26 | 26 < 50 | low ← 6 |
| 6 | 10 | 8 | 55 | 55 > 50 | high ← 7 |
| 6 | 7 | 6 | 34 | 34 < 50 | low ← 7 |
| 7 | 7 | 7 | 41 | 41 < 50 | low ← 8 |

Now low = 8 and high = 7, so `low <= high` is false. The loop ends and the search returns -1. Reaching the point where the pointers cross is how the algorithm knows the target is absent.

### Analysing binary search

Each comparison halves the number of items still under consideration. Starting from n items, the sizes are roughly n, n/2, n/4, n/8, and so on, until one item is left. The number of halvings needed is about log₂ n, so the worst case is about log₂ n + 1 comparisons.

| n | Worst-case comparisons |
|---|---|
| 11 | 4 |
| 1,000 | 10 |
| 1,048,576 (2²⁰) | 21 |

Doubling the list adds only **one** more comparison. This is **logarithmic time complexity, O(log n)**. A linear search of a million items could take a million comparisons; a binary search takes at most 20 or so.

The cost is that the data must be sorted first, and the sorting itself takes time. Binary search pays off when a list is searched many times. For a small list, or one that is searched once, sorting first is not worth it.

### Recursive binary search

The same idea can be written recursively: if the part of the list is empty, return not found; otherwise compare with the middle item and call the subroutine on the lower or upper half. The comparisons are the same. A recursive version uses extra memory for its calls.

## Binary tree search

A **binary search tree** stores values so that for every node, all values in its **left subtree are smaller** and all values in its **right subtree are larger**. (Trees are covered in the [trees study guide](/resources/aqa-a-level-computer-science-7517-trees/).) A **binary tree search** uses this property in the same way as a binary search.

```
SUBROUTINE TreeSearch(node, target)
    IF node = NULL THEN
        RETURN False
    ELSEIF node.value = target THEN
        RETURN True
    ELSEIF target < node.value THEN
        RETURN TreeSearch(node.left, target)
    ELSE
        RETURN TreeSearch(node.right, target)
    ENDIF
ENDSUBROUTINE
```

Start at the root. If the target is smaller than the current node, go left; if larger, go right; if equal, stop. Reaching an empty subtree means the target is not in the tree.

### Worked example 4

The binary search tree built by inserting 40, 25, 60, 15, 30, 50, 70, 10, 28 has root 40, with left child 25 and right child 60; 25 has children 15 and 30; 60 has children 50 and 70; 15 has left child 10; 30 has left child 28.

| Target | Path of nodes compared | Result |
|---|---|---|
| 28 | 40, 25, 30, 28 | found after 4 comparisons |
| 50 | 40, 60, 50 | found after 3 comparisons |
| 45 | 40, 60, 50, then the empty left subtree of 50 | not found after 3 comparisons |

For 28: 28 < 40 so go left; 28 > 25 so go right; 28 < 30 so go left; 28 equals 28.

### Analysing binary tree search

Each comparison moves down one level and discards a whole subtree. In a **balanced** tree with n nodes the height is about log₂ n, so a search takes O(log n) steps, the figure given in the specification.

There is a caveat that is worth knowing. If values are inserted in sorted order (10, 20, 30, 40, 50, 60) every node has only a right child and the tree is a chain. A search then compares with every node in turn, so it takes n steps, **O(n)**, just like a linear search. The O(log n) result applies to a tree that is reasonably balanced.

## Comparing the three

| | Linear search | Binary search | Binary tree search |
|---|---|---|---|
| Data must be sorted? | No | Yes | Held as a search tree |
| Data structure | Any list | Array (direct access) | Binary search tree |
| Time complexity | O(n) | O(log n) | O(log n) if balanced |
| Insertion | Add anywhere | Must keep order | Add as a leaf |

Binary tree search has an advantage over binary search when items are added and removed often. Inserting into a sorted array means shifting items along, while inserting into a tree means adding a new leaf.

## Common mistakes

- Using binary search on unsorted data. It can miss the target.
- Updating `low` and `high` incorrectly: use `mid + 1` and `mid - 1`, not `mid`.
- Giving the wrong middle position. Check the convention for rounding.
- Saying binary search is O(n log n) or O(log n) "because of the loop" without mentioning halving.
- Stating the average case when the question asks for the worst case.
- Forgetting that binary tree search is O(log n) only for a balanced tree.

## Exam technique

- **Trace**: give a row for each comparison, with the pointers, the middle index and the value found there.
- **Explain O(log n)**: say that each step halves the number of items left to search.
- **Explain O(n)**: say that in the worst case every item is examined.
- **Choose an algorithm**: link the choice to whether the data is sorted and how often it will be searched.

## More resources on this topic

- [Searching algorithms revision notes](/resources/aqa-a-level-computer-science-7517-searching-algorithms-revision-notes/)
- [Searching algorithms practice questions](/resources/aqa-a-level-computer-science-7517-searching-algorithms-practice/)
- [Sorting algorithms study guide](/resources/aqa-a-level-computer-science-7517-sorting-algorithms/)
- [Trees study guide for 4.2.5](/resources/aqa-a-level-computer-science-7517-trees/)

*Written against the AQA A-level Computer Science (7517) specification, 4.3.4 Searching algorithms. Always check the current specification on the AQA website.*
