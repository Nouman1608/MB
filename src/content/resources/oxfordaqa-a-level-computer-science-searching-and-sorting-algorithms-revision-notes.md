---
title: "OxfordAQA A-Level Computer Science: Searching and sorting algorithms (9645) -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Searching and Sorting Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Searching and sorting algorithms"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 4
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "searching-and-sorting-algorithms"
description: "Condensed notes on linear search, binary search, bubble sort and merge sort, with a quick self-test, for OxfordAQA AS and A-level Computer Science."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These revision notes condense section **3.4 Searching and sorting algorithms** (3.4.1 Searching algorithms and 3.4.2 Sorting algorithms) of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. It is AS content, assessed in Unit 1: Programming. For full explanations and longer traces, use the [study guide](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms/).

Links: [course hub](/boards/oxfordaqa/a-level/computer-science/) · [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) · [practice questions](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms-practice/) · [free 10-minute diagnostics](/diagnostics/)

Pseudo-code below is language-neutral (the specification text does not define its own conventions). Lists start at index 0, and `DIV` is integer division.

## What the specification asks for

| Algorithm | Trace it? | Code it? | Other requirement |
|---|---|---|---|
| Linear search (3.4.1) | Yes | May be asked | Know the inefficient version (looks at every item) and the version that stops when the item is found |
| Binary search (3.4.1) | Yes | May be asked | Understand how it operates |
| Bubble sort (3.4.2) | Yes | May be asked | Know the two improvements to the basic version |
| Merge sort (3.4.2) | Demonstrate on data | Not asked | Explain how it works |

You must also **compare** linear with binary search (time efficiency; whether the list must be ordered) and bubble with merge sort (time and memory), and explain why bubble sort's time depends on the starting order. Formal Big O comparisons are not required at AS.

## Key definitions

- **Linear search:** check each item in turn from the start until the target is found or the list ends.
- **Binary search:** repeatedly check the middle item of an **ordered** list and discard the half that cannot hold the target.
- **Bubble sort:** repeatedly compare **adjacent** pairs and swap any in the wrong order.
- **Pass:** one sweep through the list making those comparisons.
- **Merge sort:** split the list into single-item lists, then merge sorted lists in pairs until one remains.
- **Definite iteration:** a loop that runs a fixed number of times (`FOR`).
- **Indefinite iteration:** a loop that runs until a condition is met (`WHILE`).

## 3.4.1 Searching

### Method in steps: binary search

```
low ← 0
high ← LENGTH(items) - 1
found ← FALSE
WHILE low ≤ high AND found = FALSE
    mid ← (low + high) DIV 2
    IF items[mid] = target THEN
        found ← TRUE
    ELSE IF items[mid] < target THEN
        low ← mid + 1
    ELSE
        high ← mid - 1
    ENDIF
ENDWHILE
```

This version uses a `found` flag rather than returning from inside the loop. Both styles are correct.

### Worked reminder

Ordered list `[5, 12, 18, 24, 33, 47, 59]`, target 47.

| low | high | mid | items[mid] | action |
|---|---|---|---|---|
| 0 | 6 | 3 | 24 | 24 < 47, low ← 4 |
| 4 | 6 | 5 | 47 | found |

Two comparisons. If the search fails, the loop ends with `low` one greater than `high`.

### Must-know distinctions: linear vs binary

| | Linear | Binary |
|---|---|---|
| Ordered list needed? | No | **Yes** |
| Comparisons in the worst case grow… | in step with list length | by one each time the list length doubles |
| Best for | Short or unsorted lists | Long, ordered lists searched many times |

Inefficient linear search makes the same number of comparisons whether or not the item is found. The early-stopping version saves time only when the target is present.

## 3.4.2 Sorting

### Method in steps: efficient bubble sort

1. Set `swapped` to TRUE and `end` to the last index.
2. While `swapped` is TRUE: set `swapped` to FALSE.
3. Compare each adjacent pair from index 0 up to `end`. If the left item is larger, swap using a temporary variable and set `swapped` to TRUE.
4. Reduce `end` by one (improvement 1: the last item is now fixed).
5. The loop stops after a pass with no swaps (improvement 2: indefinite iteration).

The **basic** version uses two `FOR` loops: n − 1 passes, each of n − 1 comparisons, whatever the data.

### Worked reminder

Sort `[8, 3, 6, 1]` ascending with the efficient version.

| After pass | List | Swaps | Comparisons |
|---|---|---|---|
| 1 | 3, 6, 1, 8 | 3 | 3 |
| 2 | 3, 1, 6, 8 | 1 | 2 |
| 3 | 1, 3, 6, 8 | 1 | 1 |
| 4 | 1, 3, 6, 8 | 0 | 0 |

Pass 3 still made a swap, so the loop runs once more. With `end` now at index 0 there is nothing left to compare; the pass makes no swaps and the loop stops. Total: 6 comparisons, against 9 for the basic version.

### Method in steps: merging two sorted lists

1. Compare the front items of the two lists.
2. Move the smaller to the output list.
3. Repeat until one list is empty.
4. Copy the rest of the other list across in order.

### Worked reminder

Merge `[4, 19, 25]` and `[7, 12, 30]`.

- 4 vs 7 → 4
- 19 vs 7 → 7
- 19 vs 12 → 12
- 19 vs 30 → 19
- 25 vs 30 → 25
- left empty → copy 30

Result `[4, 7, 12, 19, 25, 30]` after 5 comparisons.

### Must-know distinctions: bubble vs merge

| | Bubble sort | Merge sort |
|---|---|---|
| Time, large unsorted list | Slow: comparisons grow roughly with the square of the list length | Much faster |
| Time, nearly sorted list | Efficient version stops early | No early finish |
| Memory | In place; one temporary variable | Extra space for the sub-lists |
| Exam coding | May be asked | Not asked; demonstrate only |

### Starting order and bubble sort

| Starting order | Efficient bubble sort |
|---|---|
| Already sorted | One pass, no swaps, stops |
| Nearly sorted | Few passes, then a clean pass and stop |
| Reverse order | Every pass swaps; the flag saves nothing |

## Big O (International A-level only)

From section 3.13.5, which also covers other algorithms:

| Algorithm | Best | Worst |
|---|---|---|
| Linear search | O(1) | O(n) |
| Binary search | O(1) | O(log n) |
| Bubble sort | O(n) | O(n²) |
| Merge sort | O(n log n) | O(n log n) |

## Quick self-test

1. Which search can be used on an unsorted list?
2. An early-stopping linear search looks for 42 in `[15, 8, 23, 42, 4, 16]`. How many comparisons does it make? How many would the inefficient version make?
3. A binary search runs on an ordered list with indexes 0 to 8. Which index is checked first?
4. What is the largest number of comparisons a binary search needs on an ordered list of 31 items?
5. How many comparisons does the basic bubble sort make on a list of 5 items? How many if the items checked fall by one each pass (no flag)?
6. Write `[9, 2, 7, 4, 5]` as it stands after the first pass of an ascending bubble sort.
7. The efficient bubble sort runs on an 8-item list that is already sorted. How many comparisons does it make?
8. Merge `[3, 14]` and `[6, 9]`. How many comparisons are needed?
9. Which of bubble sort and merge sort uses more memory, and why?
10. Explain why the efficient bubble sort finishes quickly on a nearly sorted list.
11. (International A-level only) State the worst-case time complexity of binary search.

### Answers

1. Linear search.
2. 4 comparisons (15, 8, 23, 42). The inefficient version makes 6.
3. Index (0 + 8) DIV 2 = 4.
4. 5.
5. 4 passes × 4 = 16 comparisons; 4 + 3 + 2 + 1 = 10 comparisons.
6. `[2, 7, 4, 5, 9]`.
7. 7: one pass with no swaps, then it stops.
8. `[3, 6, 9, 14]`, 3 comparisons (3 vs 6, 14 vs 6, 14 vs 9; then 14 is copied).
9. Merge sort, because it needs extra memory to hold the sub-lists while merging. Bubble sort swaps in place.
10. Each pass moves out-of-place items into position. Once a full pass makes no swaps, the flag stays FALSE and the loop ends, so few passes are needed.
11. O(log n).

## Where marks are usually lost

- Not stating that binary search needs an **ordered** list when comparing the two searches.
- Calculating `mid` inconsistently: rounding up on one row and down on another.
- Updating `high` to `mid` instead of `mid - 1`, which can loop forever.
- Leaving out the final row of a trace, where `low` passes `high` or the target is found.
- Stopping a bubble sort trace one pass early: the efficient version needs a pass with **no** swaps before it stops.
- Swapping without a temporary variable in code that needs one, which overwrites a value.
- Describing merge sort as sorting during the split; the ordering happens in the merges.
- Giving "merge sort is faster" without the memory trade-off when a question asks about time **and** memory.
- Claiming the early-stopping linear search is faster when the item is absent: it makes the same number of comparisons.

## Related pages

- [Searching and sorting practice questions](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms-practice/): traces, code and comparison questions with worked answers.
- [Procedural programming revision notes](/resources/a-computer-science-procedural-revision-notes/): the loops, selection and subroutines these algorithms are built from.
- [Arrays and lists revision notes](/resources/oxfordaqa-a-level-computer-science-arrays-lists-revision-notes/): indexing and list handling used in every trace above.
- [Exam preparation guide](/resources/oxfordaqa-a-level-computer-science-exam-preparation/): how the on-screen programming paper works.
- [Free 10-minute diagnostics](/diagnostics/): find your weakest topics before you revise.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.4 Searching and sorting algorithms.
