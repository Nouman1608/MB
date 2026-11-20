---
title: "AQA A-Level Computer Science (7517): Sorting algorithms -- Revision Notes"
seoTitle: "AQA A-Level Computer Science Sorting Algorithms Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of algorithms"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 3.5
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
    subtopic: "sorting-algorithms-7517"
description: "Condensed AQA 7517 section 4.3.5 recall: bubble sort and merge sort, how to trace them, why they are O(n squared) and O(n log n), and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.3.5 Sorting algorithms**, AQA A-Level Computer Science (7517): **bubble sort** (O(n²), an example of a particularly inefficient algorithm) and **merge sort** (O(n log n), an example of divide and conquer). Know and be able to trace both, and analyse their time complexity. Full traces are in the [sorting algorithms study guide](/resources/aqa-a-level-computer-science-7517-sorting-algorithms/); exam-style questions are in the [sorting algorithms practice questions](/resources/aqa-a-level-computer-science-7517-sorting-algorithms-practice/).

## At a glance

| | Bubble sort | Merge sort |
|---|---|---|
| Idea | Swap adjacent items that are out of order, pass after pass | Split in halves, sort each half, merge |
| Approach | Repeated passes | **Divide and conquer** (recursive) |
| Time complexity | **O(n²)** | **O(n log n)** |
| Extra memory | None | About n items |
| Stops when | A pass makes no swaps | Parts of one item are merged back up |

## Bubble sort

```
REPEAT
    swapped ← False
    FOR i ← 0 TO n - 2
        IF list[i] > list[i + 1] THEN
            swap list[i] and list[i + 1]
            swapped ← True
        ENDIF
    NEXT i
    n ← n - 1
UNTIL swapped = False
```

- Compare **adjacent** pairs only.
- After pass 1 the largest item is at the end; after pass 2 the next largest is in place.
- The final pass has **no swaps**, and that pass is how the sort knows it is finished.
- Worst case (reverse order): (n − 1) + (n − 2) + … + 1 = **n(n − 1)/2** comparisons.

**Worked check:** sort `4, 9, 2, 7, 5`.

| Pass | List at end | Swaps in pass |
|---|---|---|
| 1 | 4, 2, 7, 5, 9 | 3 |
| 2 | 2, 4, 5, 7, 9 | 2 |
| 3 | 2, 4, 5, 7, 9 | 0, so stop |

Comparisons: 4 + 3 + 2 = 9. Swaps: 5.

**Growth:** 10 items need up to 45 comparisons, 100 items need 4,950 and 1,000 items need 499,500. Ten times the items means about a hundred times the work.

## Merge sort

```
MergeSort(list):
    IF LENGTH(list) <= 1 THEN RETURN list
    mid ← LENGTH(list) DIV 2
    RETURN Merge(MergeSort(first mid items), MergeSort(the rest))
```

```
Merge(left, right):
    WHILE both have items left
        move the smaller front item to the result
    copy whatever remains of either list
```

- **Base case:** a list of one item is already sorted.
- **Merge** needs both halves to be sorted. Only the **front** items are compared.
- Splitting is by position, not by value.

**Worked check:** sort `14, 6, 21, 3, 17, 9, 25, 1`.

- Split: 14 6 21 3 | 17 9 25 1, then 14 6 | 21 3 | 17 9 | 25 1, then single items.
- Merge pairs: 6 14 | 3 21 | 9 17 | 1 25.
- Merge fours: 3 6 14 21 | 1 9 17 25.
- Final merge: 1 3 6 9 14 17 21 25.
- Comparisons: 4 (pairs) + 3 + 3 (fours) + 7 (final) = 17.

## Where O(n log n) comes from

- Halving n items down to single items gives about **log₂ n** levels.
- Merging at one level handles about **n** items.
- Total about **n log₂ n** steps.

| n | n²/2 | n log₂ n |
|---|---|---|
| 10 | 50 | 33 |
| 100 | 5,000 | 664 |
| 1,000 | 500,000 | 9,966 |

## Which to use

- **Bubble sort:** very short lists, nearly sorted lists (with the early exit), and teaching. It sorts in place and is simple.
- **Merge sort:** large lists. It is far faster, but uses extra memory and is harder to write.

## Divide and conquer

Break a problem into smaller problems of the same kind, solve those (usually by recursion), and combine the results. Merge sort follows the three steps **divide, conquer, combine**. Binary search also halves the problem each time but needs no combine step.

## Exam traps

- **Swapping non-adjacent items** in bubble sort.
- **Skipping the final pass** that has no swaps.
- **Joining the halves** instead of merging by comparing front items.
- **Wrong split** of odd-length lists: check the rule given.
- **Wrong complexities**: bubble O(n²), merge O(n log n).
- **No reason for the complexity**: explain halving and per-level work.

## Key terms

| Term | Definition |
|---|---|
| Sorting algorithm | An algorithm that puts items into order |
| Pass | One run through the list in bubble sort |
| Swap | Exchanging two items' positions |
| Divide and conquer | Solving a problem by splitting it into smaller problems, solving each, and combining the results |
| Merge | Combining two sorted lists into one sorted list |
| Base case | The smallest case of a recursive algorithm, solved directly |
| In place | Sorting using no significant extra memory |
| Time complexity | How the number of steps grows with n |

## Self-test

1. Give the time complexity of bubble sort.
2. Give the time complexity of merge sort.
3. After one pass of bubble sort on `3, 8, 1, 6`, what is the list?
4. What tells a bubble sort with a flag that it can stop?
5. What is the maximum number of comparisons for a bubble sort of 8 items, if each pass compares one fewer pair?
6. What is the base case of merge sort?
7. Merge `2, 9` with `4, 5`. How many comparisons are needed?
8. Why does merge sort need extra memory?
9. What does "divide and conquer" mean?
10. Why does a million-item merge sort take far less work than a bubble sort?

**Answers**

1. O(n²).
2. O(n log n).
3. `3, 1, 6, 8`. (3 and 8 stay; 8 and 1 swap; 8 and 6 swap.)
4. A complete pass in which no swaps were made.
5. 7 + 6 + 5 + 4 + 3 + 2 + 1 = 28.
6. A list with one item (or none), already sorted.
7. Result 2, 4, 5, 9. Compare 2 and 4 (take 2), 9 and 4 (take 4), 9 and 5 (take 5); the right list is empty, so copy 9. Three comparisons.
8. The merge builds a new list to hold the result, so it needs space of the order of n.
9. Split a problem into smaller problems of the same kind, solve those, and combine the answers.
10. Bubble sort needs about n²/2 steps, while merge sort needs about n log₂ n; for a million items that is about 500 billion against about 20 million.

## Related resources

- [Sorting algorithms study guide](/resources/aqa-a-level-computer-science-7517-sorting-algorithms/)
- [Sorting algorithms practice questions](/resources/aqa-a-level-computer-science-7517-sorting-algorithms-practice/)
- [Searching algorithms revision notes](/resources/aqa-a-level-computer-science-7517-searching-algorithms-revision-notes/)
- [Classification of algorithms revision notes](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms-revision-notes/)
