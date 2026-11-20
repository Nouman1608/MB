---
title: "OxfordAQA A-Level Computer Science (9645): Sorting algorithms"
seoTitle: "OxfordAQA A-Level CS 9645 Sorting Algorithms Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 4 – Searching and sorting algorithms"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 4.2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "searching-and-sorting-algorithms"
  - qualification: "a-level"
    topic: "searching-and-sorting-algorithms"
    subtopic: "sorting-algorithms-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.4.2 in depth: bubble sort and its two improvements, merge sort step by step, and comparing their time and memory use."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.4.2 Sorting algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.4 Searching and sorting algorithms (AS). The specification asks you to **know the bubble sort algorithm and trace it**, to **know the merge sort algorithm and demonstrate how it operates**, to **compare their efficiency** (time and memory) and to **understand that the time efficiency of bubble sort depends on how sorted the list is at the start**. You may be asked to write code for bubble sort. You will not be asked to write code for merge sort, but you may be asked to explain or demonstrate it on a set of data.

For quick recall use the [sorting algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-sorting-algorithms-revision-notes/), then try the [sorting algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-sorting-algorithms-practice/). The topic-level [searching and sorting study guide](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms/) covers all of 3.4; this page goes deeper on sorting and uses different data. Lists are indexed from 0; sorting is into ascending order. The code is Python.

## Bubble sort

A **bubble sort** works along the list comparing each pair of **neighbouring** items. If a pair is in the wrong order it **swaps** them. One run along the list is a **pass**. After the first pass, the largest item has "bubbled" to the end. After the second pass the second largest is in place, and so on. The specification describes it as an example of a particularly inefficient sorting algorithm.

### Version 1: the basic algorithm (definite iteration)

The most basic version uses **definite iteration**: it makes a fixed number of passes, each checking every pair.

```
FOR pass ← 1 TO n - 1
    FOR i ← 0 TO n - 2
        IF items[i] > items[i + 1] THEN
            swap items[i] and items[i + 1]
        ENDIF
    ENDFOR
ENDFOR
```

```python
def bubble_basic(items):
    n = len(items)
    for p in range(n - 1):
        for i in range(n - 1):
            if items[i] > items[i + 1]:
                items[i], items[i + 1] = items[i + 1], items[i]
```

For a list of *n* items this always makes (*n* − 1) × (*n* − 1) comparisons, whatever the starting order. For *n* = 6 that is 25 comparisons.

### Worked example 1: tracing bubble sort

Sort `[29, 13, 41, 7, 22, 35]`.

| Pass | Swaps made in this pass | List at the end of the pass |
|---|---|---|
| 1 | 29/13, 41/7, 41/22, 41/35 | 13, 29, 7, 22, 35, **41** |
| 2 | 29/7, 29/22 | 13, 7, 22, 29, **35, 41** |
| 3 | 13/7 | 7, 13, 22, 29, 35, 41 |
| 4 | none | 7, 13, 22, 29, 35, 41 |
| 5 | none | 7, 13, 22, 29, 35, 41 |

In pass 1: compare 29 and 13 (swap), 29 and 41 (no swap), 41 and 7 (swap), 41 and 22 (swap), 41 and 35 (swap). The 41 has moved to the end. There are 7 swaps in total. The list is fully sorted after pass 3, but the basic version still performs passes 4 and 5.

### Improvement 1: check fewer items after each pass

After pass *p*, the last *p* items are in their final place, so later passes need not compare them. Each pass can stop one pair earlier. For *n* = 6 the passes make 5, 4, 3, 2 and 1 comparisons, a total of 15.

### Improvement 2: stop when a pass makes no swaps

If a whole pass makes **no swaps**, the list is in order and the algorithm can stop. This needs **indefinite iteration**, because the number of passes is not known in advance. A Boolean flag records whether a swap happened.

```
end ← n - 1
REPEAT
    swapped ← False
    FOR i ← 0 TO end - 1
        IF items[i] > items[i + 1] THEN
            swap items[i] and items[i + 1]
            swapped ← True
        ENDIF
    ENDFOR
    end ← end - 1
UNTIL swapped = False
```

```python
def bubble_improved(items):
    end = len(items) - 1
    swapped = True
    while swapped:
        swapped = False
        for i in range(end):
            if items[i] > items[i + 1]:
                items[i], items[i + 1] = items[i + 1], items[i]
                swapped = True
        end = end - 1
```

Using both improvements on `[29, 13, 41, 7, 22, 35]` gives passes with 5, 4, 3 and 2 comparisons. The fourth pass makes no swaps, so the algorithm stops after 14 comparisons instead of 25. The number of swaps (7) is the same in all versions, because swaps depend only on the order of the data.

## How the starting order affects bubble sort

The specification says the time efficiency of bubble sort depends on **how sorted the list is at the start**. An efficient version stops early when the list is already, or nearly, in order. Here are the results for lists of six items, recomputed.

| Starting list | Basic comparisons | Improved comparisons | Swaps |
|---|---|---|---|
| 1, 2, 3, 4, 5, 6 (already sorted) | 25 | 5 | 0 |
| 2, 4, 6, 9, 8, 10 (one pair out of order) | 25 | 9 | 1 |
| 29, 13, 41, 7, 22, 35 (random) | 25 | 14 | 7 |
| 10, 8, 6, 4, 2, 1 (reverse order) | 25 | 15 | 15 |

An already-sorted list needs only one pass of the improved version (5 comparisons, no swaps). The reverse-ordered list is the worst case, with every pair swapped. The basic version cannot take advantage of any of this: it always makes 25 comparisons.

## Merge sort

**Merge sort** uses a **divide and conquer** idea. It has two stages.

1. **Split:** keep halving the list until every sub-list has one item. A list of one item is already sorted.
2. **Merge:** join pairs of sorted sub-lists into larger sorted lists. To merge two sorted lists, compare their **front items**, move the smaller to the output, and repeat. When one list is empty, add the rest of the other.

You are not asked to code merge sort, but you must be able to demonstrate how it works on data.

### Worked example 2: merge sort on eight items

Sort `[38, 27, 43, 3, 9, 82, 10, 15]`.

**Split:**

| Level | Sub-lists |
|---|---|
| 0 | [38, 27, 43, 3, 9, 82, 10, 15] |
| 1 | [38, 27, 43, 3] and [9, 82, 10, 15] |
| 2 | [38, 27], [43, 3], [9, 82], [10, 15] |
| 3 | [38], [27], [43], [3], [9], [82], [10], [15] |

**Merge:**

| Merge | Inputs | Result | Comparisons |
|---|---|---|---|
| a | [38] and [27] | [27, 38] | 1 |
| b | [43] and [3] | [3, 43] | 1 |
| c | [27, 38] and [3, 43] | [3, 27, 38, 43] | 3 |
| d | [9] and [82] | [9, 82] | 1 |
| e | [10] and [15] | [10, 15] | 1 |
| f | [9, 82] and [10, 15] | [9, 10, 15, 82] | 3 |
| g | [3, 27, 38, 43] and [9, 10, 15, 82] | [3, 9, 10, 15, 27, 38, 43, 82] | 7 |

Merge c step by step: compare 27 and 3, output 3; compare 27 and 43, output 27; compare 38 and 43, output 38; the first list is now empty, so output the remaining 43. That is 3 comparisons. Merge g: compare 3 and 9 (3), 27 and 9 (9), 27 and 10 (10), 27 and 15 (15), 27 and 82 (27), 38 and 82 (38), 43 and 82 (43); the left list is empty, so output the 82. That is 7 comparisons. The total is **17 comparisons**. Because merge sort always splits the same way, the number of comparisons depends only weakly on the starting order.

## Comparing bubble sort and merge sort

| | Bubble sort | Merge sort |
|---|---|---|
| Idea | Swap neighbouring items repeatedly | Split, then merge sorted halves |
| Time on large lists | Slow: roughly proportional to *n* squared | Much faster: roughly proportional to *n* × log *n* |
| Effect of starting order | Large: improved version is quick on nearly sorted lists | Small |
| Memory | Sorts **in place**; needs only a temporary variable for a swap | Needs **extra memory** for the sub-lists (about as much as the list) |
| Code | Short and simple | Longer; usually recursive |
| Best used for | Very small or nearly sorted lists; teaching | Large lists |

Worst-case comparison counts (improved bubble sort against merge sort), recomputed:

| Items (*n*) | Bubble sort worst case | Merge sort worst case |
|---|---|---|
| 8 | 28 | 17 |
| 100 | 4,950 | 573 |
| 1,000 | 499,500 | 8,977 |
| 10,000 | 49,995,000 | 123,617 |

The gap grows quickly. Formal comparison in Big O notation (bubble sort O(*n*²), merge sort O(*n* log *n*)) is not required at AS but may be required at A-level. The memory point is the trade-off: merge sort is faster but needs additional storage, while bubble sort uses almost none.

## Exam technique

- **Tracing bubble sort:** write the whole list after every pass and mark where swaps occurred. Count passes carefully.
- **Marks for improvements:** name them precisely: reduce the number of items checked after each pass; stop when a pass has no swaps.
- **Merge sort questions:** show the split stage and then each merge, keeping merged lists in order.
- **Comparison questions:** mention both time and memory, and link the answer to list size or starting order.

## Common mistakes

- Swapping non-neighbouring items.
- Stopping a bubble sort pass early in the basic version, or not stopping early in the improved version.
- Forgetting that the largest item reaches the end after the first pass, not the smallest.
- Merging by simply joining two lists instead of comparing their front items.
- Claiming that merge sort uses less memory than bubble sort.
- Saying bubble sort is always slower, when on a sorted list the improved version needs a single pass.

## Next steps

- [Sorting algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-sorting-algorithms-revision-notes/)
- [Sorting algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-sorting-algorithms-practice/)
- [Searching algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-searching-algorithms/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.4.2 Sorting algorithms.
