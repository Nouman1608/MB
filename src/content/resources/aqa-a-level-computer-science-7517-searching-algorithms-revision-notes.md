---
title: "AQA A-Level Computer Science (7517): Searching algorithms -- Revision Notes"
seoTitle: "AQA A-Level CS Searching Algorithms Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.3.4 recall: linear, binary and binary tree search, how to trace them, their time complexity and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.3.4 Searching algorithms**, AQA A-Level Computer Science (7517): **linear search** (O(n)), **binary search** (O(log n)) and **binary tree search** (O(log n)). Know the first two, and be able to trace and analyse all three. Full traces are in the [searching algorithms study guide](/resources/aqa-a-level-computer-science-7517-searching-algorithms/); exam-style questions are in the [searching algorithms practice questions](/resources/aqa-a-level-computer-science-7517-searching-algorithms-practice/).

## At a glance

| | Linear search | Binary search | Binary tree search |
|---|---|---|---|
| Idea | Check items one by one | Compare with the middle, discard half | Go left or right at each node |
| Data | Any order | **Sorted**, direct access | Binary search tree |
| Worst case | n comparisons | about log₂ n + 1 | tree height |
| Complexity | **O(n)** | **O(log n)** | **O(log n)** if balanced |

## Linear search

```
FOR i ← 0 TO LENGTH(list) - 1
    IF list[i] = target THEN RETURN i
NEXT i
RETURN -1
```

- **Best case:** target first, 1 comparison.
- **Worst case:** target last or absent, n comparisons.
- Doubling the list roughly doubles the work, so **linear**.
- Works on unsorted data. Good for short lists or one-off searches.

## Binary search

```
low ← 0;  high ← LENGTH(list) - 1
WHILE low <= high
    mid ← (low + high) DIV 2
    IF list[mid] = target THEN RETURN mid
    ELSEIF list[mid] < target THEN low ← mid + 1
    ELSE high ← mid - 1
ENDWHILE
RETURN -1
```

- Needs **sorted** data and direct access (an array).
- Each comparison **halves** the items left, so doubling the list adds one comparison: **logarithmic**.
- Absent target: `low` passes `high` and the loop ends.
- Follow the rounding rule for the middle given in the question.

**Worked check** on `3, 8, 12, 17, 21, 26, 34, 41, 55, 62, 78`, target 41:

| low | high | mid | list[mid] | Action |
|---|---|---|---|---|
| 0 | 10 | 5 | 26 | 26 < 41, low ← 6 |
| 6 | 10 | 8 | 55 | 55 > 41, high ← 7 |
| 6 | 7 | 6 | 34 | 34 < 41, low ← 7 |
| 7 | 7 | 7 | 41 | found at index 7 |

Four comparisons. Linear search needs eight.

## Binary tree search

```
IF node = NULL THEN RETURN False
ELSEIF node.value = target THEN RETURN True
ELSEIF target < node.value THEN search left subtree
ELSE search right subtree
```

- Smaller than the node: go **left**. Larger: go **right**.
- An empty subtree means not found.
- In a balanced tree the height is about log₂ n, so **O(log n)**.
- If data was inserted in sorted order the tree is a **chain** and a search is **O(n)**.

**Worked check:** tree from inserting 40, 25, 60, 15, 30, 50, 70, 10, 28. Searching for 28 compares 40, 25, 30, 28. Searching for 45 compares 40, 60, 50, then reaches an empty subtree: not found.

## Where O(log n) comes from

Start with n items. After one comparison about n/2 remain, then n/4, n/8 and so on. The halving stops when one item is left, which takes about log₂ n steps.

| n | Worst-case binary search comparisons |
|---|---|
| 7 | 3 |
| 15 | 4 |
| 1,000 | 10 |
| about 1 million | 20 |

## Choosing an algorithm

- **Unsorted data, searched once:** linear search.
- **Sorted array, searched many times:** binary search.
- **Data that changes often and must stay searchable:** binary search tree, because insertion adds a leaf rather than shifting items.
- **Sorting first costs time.** It is worth it only if there will be many searches.

## Exam traps

- **Binary search on unsorted data** gives wrong answers.
- **Pointer updates**: use `mid + 1` and `mid - 1`.
- **Wrong middle** for lists with an even number of items.
- **Average case** given when worst case was asked.
- **Giving O(log n) for any tree**. It needs a balanced tree.
- **No reason for the complexity**: say "halves the search area each time".

## Key terms

| Term | Definition |
|---|---|
| Target | The value being searched for |
| Comparison | Checking whether an item equals, is smaller than or is larger than the target |
| Linear search | Checking each item in turn until the target is found or the list ends |
| Binary search | Repeatedly comparing with the middle of a sorted list and discarding half |
| Binary search tree | A binary tree with smaller values in the left subtree and larger in the right |
| Time complexity | How the number of steps grows as the number of items n grows |
| Worst case | The input that makes the algorithm do the most work |
| Balanced tree | A tree whose height is close to log₂ n |

## Self-test

1. State the time complexity of linear search.
2. State the time complexity of binary search.
3. What must be true of the data before a binary search?
4. How many comparisons might a linear search need in the worst case on 500 items?
5. In the list `2, 5, 9, 14, 20, 27, 33`, using mid = (low + high) DIV 2 from index 0, which index is compared first?
6. What happens when the target is smaller than the middle item?
7. When does a binary search conclude the target is absent?
8. In a binary search tree, which way do you go for a target smaller than the node?
9. Why can a binary tree search be as slow as a linear search?
10. Why does doubling the list add only one comparison to a binary search?

**Answers**

1. O(n).
2. O(log n).
3. It must be sorted (and accessible by position).
4. 500.
5. Index 3 (value 14), since (0 + 6) DIV 2 = 3.
6. `high` is set to `mid - 1`, discarding the upper half.
7. When `low` becomes greater than `high`.
8. Left.
9. If values were inserted in sorted order the tree is a chain, so the search passes through every node.
10. The first comparison removes half of the doubled list, leaving the original size.

## Related resources

- [Searching algorithms study guide](/resources/aqa-a-level-computer-science-7517-searching-algorithms/)
- [Searching algorithms practice questions](/resources/aqa-a-level-computer-science-7517-searching-algorithms-practice/)
- [Sorting algorithms revision notes](/resources/aqa-a-level-computer-science-7517-sorting-algorithms-revision-notes/)
- [Trees revision notes for 4.2.5](/resources/aqa-a-level-computer-science-7517-trees-revision-notes/)
