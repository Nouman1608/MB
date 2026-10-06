---
title: "OxfordAQA A-Level Computer Science: Searching and sorting algorithms (9645)"
seoTitle: "OxfordAQA A-Level CS 9645 Searching and Sorting Guide"
resourceType: "study-guides"
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
description: "Study guide to linear and binary search, bubble sort and merge sort with full traces, for OxfordAQA International AS and A-level Computer Science."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches section **3.4 Searching and sorting algorithms** of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1 (International AS exams May/June 2025 onwards, International A-level exams May/June 2026 onwards). It covers 3.4.1 Searching algorithms and 3.4.2 Sorting algorithms. This is AS content, assessed in Unit 1: Programming, an on-screen exam available in C#, Python or VB.Net.

Course links: [OxfordAQA A-level Computer Science hub](/boards/oxfordaqa/a-level/computer-science/) · [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) · [revision notes for this topic](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms-revision-notes/) · [practice questions for this topic](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms-practice/) · [free 10-minute diagnostics](/diagnostics/)

## What this topic covers

| Spec ref | What you must be able to do |
|---|---|
| 3.4.1 | Know and trace linear search; know the inefficient (checks every item) and early-stopping versions; code it |
| 3.4.1 | Know and trace binary search; understand how it operates; code it |
| 3.4.1 | Compare the two searches: time efficiency, and whether the list must be ordered |
| 3.4.2 | Know and trace bubble sort; know two ways to make the basic version more efficient; code it |
| 3.4.2 | Know merge sort and demonstrate it on a set of data (no coding required) |
| 3.4.2 | Compare bubble sort and merge sort on their use of time and memory |
| 3.4.2 | Understand that bubble sort's time depends on how sorted the list is at the start |

Formal Big O comparisons are not required at AS but may be required at A-level. Big O sits in section 3.13.5 (**International A-level only**); see the note near the end.

**Notation.** The specification text does not set out its own pseudo-code conventions, so the pseudo-code here is language-neutral and the code is Python. Lists are indexed from 0. Section 3.3.3 says you must understand pseudocode and convert it into program code, but will not be expected to write pseudocode in the exam.

For how lists and arrays are stored and indexed, see the [arrays and lists study guide](/resources/a-level-oxfordaqa-computer-science-arrays-and-lists/).

## 3.4.1 Linear search

A linear search compares each item in turn with the target, starting at the first. It works on **any** list, sorted or not.

The specification separates two versions:

- **Inefficient version:** always looks at every item in the list, even after the target has been found.
- **More advanced version:** stops as soon as the item is found.

```
FUNCTION LinearSearch(items, target)
    index ← 0
    WHILE index < LENGTH(items)
        IF items[index] = target THEN
            RETURN index
        ENDIF
        index ← index + 1
    ENDWHILE
    RETURN -1
ENDFUNCTION
```

`RETURN -1` is a common way to signal "not found", because -1 can never be a valid index.

### Worked example 1: tracing a linear search

List: `[37, 12, 58, 4, 91, 26, 73]` (7 items). Search for 4.

| index | items[index] | equal to 4? |
|---|---|---|
| 0 | 37 | No |
| 1 | 12 | No |
| 2 | 58 | No |
| 3 | 4 | Yes, return 3 |

The advanced version makes **4 comparisons** and returns index 3. The inefficient version would carry on through indexes 4, 5 and 6, making **7 comparisons** for the same answer.

Search for 50, which is absent, and both versions make **7 comparisons**: on an unsorted list, proving an item is missing means checking every position.

## 3.4.1 Binary search

A binary search works only on a list that is **already in order**. It looks at the middle item (`mid`, found by integer division) of the range still being searched. If that item is too small, the target can only be to the right, so `low` moves to `mid + 1`. If it is too large, `high` moves to `mid - 1`. When `low > high`, the target is not there. Each comparison throws away about half of what is left.

```python
def binary_search(items, target):
    low = 0
    high = len(items) - 1
    while low <= high:
        mid = (low + high) // 2
        if items[mid] == target:
            return mid
        elif items[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

### Worked example 2: tracing a binary search

List (indexes 0 to 10): `[3, 9, 14, 22, 31, 40, 47, 55, 68, 76, 89]`

**Search for 68.**

| low | high | mid | items[mid] | action |
|---|---|---|---|---|
| 0 | 10 | 5 | 40 | 40 < 68, so low ← 6 |
| 6 | 10 | 8 | 68 | found at index 8 |

Two comparisons; a linear search would have needed nine.

**Search for 25.**

| low | high | mid | items[mid] | action |
|---|---|---|---|---|
| 0 | 10 | 5 | 40 | 40 > 25, so high ← 4 |
| 0 | 4 | 2 | 14 | 14 < 25, so low ← 3 |
| 3 | 4 | 3 | 22 | 22 < 25, so low ← 4 |
| 4 | 4 | 4 | 31 | 31 > 25, so high ← 3 |

Now low = 4 and high = 3, so `low ≤ high` is false and the loop stops: 25 is not in the list. Four comparisons were enough to prove it.

## 3.4.1 Comparing linear and binary search

| | Linear search | Binary search |
|---|---|---|
| Does the list need to be ordered? | No | Yes |
| How it moves through the list | One item at a time from the start | Jumps to the middle, discards half each time |
| Worst-case comparisons, 1,000 items | 1,000 | 10 |
| Worst-case comparisons, 1,000,000 items | 1,000,000 | 20 |

- Binary search is much more **time-efficient** on large lists, because each comparison halves the remaining search space. Linear search time grows in direct proportion to the length of the list.
- Binary search can only be used if the list is **ordered**. If the data is unsorted and is searched only once, sorting it first may cost more time than a single linear search.
- Linear search is simple and fine for short lists.

## 3.4.2 Bubble sort

Bubble sort compares each pair of **adjacent** items and swaps them if they are in the wrong order. One sweep from the start to the end is a **pass**. After the first pass, the largest item has "bubbled" to the end. The specification includes it as an example of a particularly inefficient sorting algorithm.

### Three versions

The specification says several versions exist. The most basic uses **definite iteration** (fixed `FOR` loops). It can be made more efficient in two ways:

1. **Reduce the items checked by one after each pass.** After pass *k*, the last *k* items are already in their final places, so there is no need to compare them again.
2. **Use indefinite iteration.** Keep a flag that records whether any swap happened. Stop as soon as a whole pass makes **no** swaps, because the list must already be sorted.

The version below uses both improvements:

```
end ← LENGTH(items) - 1
swapped ← TRUE
WHILE swapped = TRUE
    swapped ← FALSE
    FOR i ← 0 TO end - 1
        IF items[i] > items[i + 1] THEN
            temp ← items[i]
            items[i] ← items[i + 1]
            items[i + 1] ← temp
            swapped ← TRUE
        ENDIF
    ENDFOR
    end ← end - 1
ENDWHILE
```

### Worked example 3: tracing bubble sort

Sort `[29, 7, 41, 15, 3, 22]` into ascending order.

**Pass 1, comparison by comparison:**

| Compare | Swap? | List afterwards |
|---|---|---|
| 29, 7 | Yes | 7, 29, 41, 15, 3, 22 |
| 29, 41 | No | 7, 29, 41, 15, 3, 22 |
| 41, 15 | Yes | 7, 29, 15, 41, 3, 22 |
| 41, 3 | Yes | 7, 29, 15, 3, 41, 22 |
| 41, 22 | Yes | 7, 29, 15, 3, 22, 41 |

**State after each pass:**

| After pass | List | Swaps |
|---|---|---|
| 1 | 7, 29, 15, 3, 22, 41 | 4 |
| 2 | 7, 15, 3, 22, 29, 41 | 3 |
| 3 | 7, 3, 15, 22, 29, 41 | 1 |
| 4 | 3, 7, 15, 22, 29, 41 | 1 |
| 5 | 3, 7, 15, 22, 29, 41 | 0 |

Counting comparisons for this list:

- **Basic version:** 5 passes × 5 comparisons = **25**.
- **Reducing by one each pass:** 5 + 4 + 3 + 2 + 1 = **15**.
- **Both improvements:** also **15**. Pass 4 still made a swap, so pass 5 had to run to confirm the list was sorted.

The flag saves nothing here: the small value 3 started near the end and moved left only one place per pass.

## 3.4.2 How the starting order affects bubble sort

The efficient version terminates more quickly if the list is already partially sorted. Take `[10, 20, 30, 50, 40, 60]`, where only one pair is out of place.

- Pass 1 (5 comparisons) swaps 50 and 40, giving `[10, 20, 30, 40, 50, 60]`.
- Pass 2 (4 comparisons) makes no swaps, so the loop stops.

Total: **9 comparisons**, against 25 for the basic version and 15 if you only reduce the range. On a list that is already fully sorted, the efficient version makes one pass with no swaps and stops: 5 comparisons for six items. On a list in reverse order, every pass makes swaps, so the flag never saves anything.

## 3.4.2 Merge sort

You must be able to explain merge sort and demonstrate it on a set of data. You will not be asked to write code for it.

Merge sort is a **divide and conquer** algorithm:

1. **Split** the list in half, then split each half again, until every sub-list holds one item. A list of one item is already sorted.
2. **Merge** pairs of sub-lists back together. To merge two sorted lists, compare the front item of each, move the smaller into the new list, and repeat. When one list runs out, copy the rest of the other across.
3. Keep merging until one sorted list remains.

### Worked example 4: demonstrating merge sort

Sort `[38, 16, 52, 9, 27, 44, 11, 30]`.

```
Split:   [38, 16, 52, 9]           [27, 44, 11, 30]
         [38, 16]   [52, 9]        [27, 44]   [11, 30]
         [38] [16]  [52] [9]       [27] [44]  [11] [30]

Merge:   [16, 38]   [9, 52]        [27, 44]   [11, 30]
         [9, 16, 38, 52]           [11, 27, 30, 44]
         [9, 11, 16, 27, 30, 38, 44, 52]
```

In the final merge the fronts compared are 9/11, 16/11, 16/27, 38/27, 38/30, 38/44 and 52/44, each time moving the smaller. The right list is then empty, so 52 is copied across. Showing every merge level is what "demonstrate" asks for.

## 3.4.2 Comparing bubble sort and merge sort

| | Bubble sort | Merge sort |
|---|---|---|
| Time on large, unsorted lists | Slow: 1,000 items in reverse order needs 499,500 comparisons, even with both improvements | Fast: 1,000 items needs fewer than 10,000 comparisons |
| Time on nearly sorted lists | Efficient version can stop after very few passes | Still does all the splitting and merging |
| Memory | Sorts in place: needs only one temporary variable for swaps | Needs extra memory to hold the sub-lists while merging |

Merge sort is more **time-efficient** on large data sets; bubble sort is more **memory-efficient**.

## Big O note (International A-level only)

Section 3.13.5 asks you to know best and worst-case time complexities, including these four:

| Algorithm | Best case | Worst case |
|---|---|---|
| Linear search | O(1) | O(n) |
| Binary search | O(1) | O(log n) |
| Bubble sort | O(n) | O(n²) |
| Merge sort | O(n log n) | O(n log n) |

The bubble sort values are the specification's own example; the O(n) best case is the efficient version on a sorted list.

## Common errors

- Using binary search on an unsorted list, or forgetting to state that the list must be ordered.
- Writing `high ← mid` instead of `high ← mid - 1`. With some targets the range never shrinks and the loop runs forever.
- Rounding `mid` up in one row and down in another. Pick integer division and keep to it.
- Stopping a bubble sort trace when the list *looks* sorted. The flag version must still run one pass with no swaps.
- Saying merge sort "sorts while splitting". The ordering happens during the merges.

## Next steps

Condense the key points with the [revision notes](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms-revision-notes/), then test yourself with the [practice questions](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms-practice/). See also the [procedural programming study guide](/resources/a-level-oxfordaqa-computer-science-procedural-programming/) and the [exam preparation guide](/resources/oxfordaqa-a-level-computer-science-exam-preparation/). Check gaps with the [free 10-minute diagnostics](/diagnostics/).

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.4 Searching and sorting algorithms.
