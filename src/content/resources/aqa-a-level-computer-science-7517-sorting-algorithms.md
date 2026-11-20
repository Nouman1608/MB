---
title: "AQA A-Level Computer Science (7517): Sorting algorithms"
seoTitle: "AQA A-Level Computer Science Sorting Algorithms Guide"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.3.5 Sorting algorithms: tracing and analysing bubble sort and merge sort, with their O(n squared) and O(n log n) time complexity."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.3.5 Sorting algorithms** in AQA A-Level Computer Science (7517). There are two algorithms:

- **4.3.5.1 Bubble sort**: know it, trace it and analyse its time complexity. The specification includes it as an example of a *particularly inefficient* sorting algorithm, time-wise, with time complexity **O(n²)**.
- **4.3.5.2 Merge sort**: trace it and analyse its time complexity. It is an example of the **divide and conquer** approach to problem solving, with time complexity **O(n log n)**.

The wider [fundamentals of algorithms study guide](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms/) summarises section 4.3. This page gives each algorithm in pseudocode, works through a complete trace, shows where each complexity comes from, and compares the two. Condensed notes are in the [sorting algorithms revision notes](/resources/aqa-a-level-computer-science-7517-sorting-algorithms-revision-notes/), and exam-style questions are in the [sorting algorithms practice questions](/resources/aqa-a-level-computer-science-7517-sorting-algorithms-practice/).

Throughout, "sort" means arrange in **ascending** order unless told otherwise, and **n** is the number of items.

## Bubble sort

A **bubble sort** repeatedly passes through the list, comparing each pair of **adjacent** items and swapping them if they are in the wrong order. After the first pass the largest item has "bubbled" to the end. After the second pass the second largest is in place, and so on. The sort stops when a whole pass makes **no swaps**.

```
SUBROUTINE BubbleSort(list)
    n ← LENGTH(list)
    REPEAT
        swapped ← False
        FOR i ← 0 TO n - 2
            IF list[i] > list[i + 1] THEN
                temp ← list[i]
                list[i] ← list[i + 1]
                list[i + 1] ← temp
                swapped ← True
            ENDIF
        NEXT i
        n ← n - 1
    UNTIL swapped = False
ENDSUBROUTINE
```

Two features make the algorithm efficient enough to be worth tracing carefully:

- the `swapped` flag lets it **stop early** when the list is already in order;
- the line `n ← n - 1` shortens each pass, because the largest items are already in place at the end.

Different textbooks and papers write bubble sort with or without these refinements. A question will give you the algorithm to trace, or accept any correct version. State which one you are using.

### Worked example 1

Sort `4, 9, 2, 7, 5` into ascending order. Each pass is shown comparison by comparison.

**Pass 1** (4 comparisons)

| Compare | Result | List after |
|---|---|---|
| 4 and 9 | in order | 4, 9, 2, 7, 5 |
| 9 and 2 | swap | 4, 2, 9, 7, 5 |
| 9 and 7 | swap | 4, 2, 7, 9, 5 |
| 9 and 5 | swap | 4, 2, 7, 5, 9 |

The largest value, 9, is now in its final place.

**Pass 2** (3 comparisons, since the last item is in place)

| Compare | Result | List after |
|---|---|---|
| 4 and 2 | swap | 2, 4, 7, 5, 9 |
| 4 and 7 | in order | 2, 4, 7, 5, 9 |
| 7 and 5 | swap | 2, 4, 5, 7, 9 |

**Pass 3** (2 comparisons)

| Compare | Result | List after |
|---|---|---|
| 2 and 4 | in order | 2, 4, 5, 7, 9 |
| 4 and 5 | in order | 2, 4, 5, 7, 9 |

No swaps were made in pass 3, so the algorithm stops. The total is **9 comparisons and 5 swaps**. The final pass with no swaps is how the algorithm discovers that the list is sorted.

### Analysing bubble sort

In the worst case (a list in reverse order) the passes make (n − 1), (n − 2), … , 1 comparisons. That is

n(n − 1) / 2 comparisons in total.

| n | Comparisons (worst case) |
|---|---|
| 10 | 45 |
| 100 | 4,950 |
| 1,000 | 499,500 |

Multiplying n by 10 multiplies the work by about **100**. The dominant term of n(n − 1)/2 is n²/2; Big-O ignores the constant factor and lower terms, so bubble sort is **O(n²)**, which is **polynomial** (quadratic) time.

For a list that is already sorted, the early-exit version makes one pass of n − 1 comparisons and stops, so its best case is O(n). The specification's point, though, is that for typical and worst-case input bubble sort is slow, and for large lists it is far slower than the alternatives. Its advantages are simplicity, and that it needs no extra memory because it sorts in place.

## Merge sort

**Merge sort** uses **divide and conquer**: split a problem into smaller problems of the same kind, solve those, and combine the answers. For sorting:

1. **Divide** the list into two halves.
2. **Conquer** by sorting each half using merge sort (recursively). A list of one item (or none) is already sorted, which is the base case.
3. **Combine** by **merging** the two sorted halves into one sorted list.

```
SUBROUTINE MergeSort(list)
    IF LENGTH(list) <= 1 THEN
        RETURN list
    ENDIF
    mid ← LENGTH(list) DIV 2
    left ← MergeSort(first mid items of list)
    right ← MergeSort(remaining items of list)
    RETURN Merge(left, right)
ENDSUBROUTINE

SUBROUTINE Merge(left, right)
    result ← empty list
    i ← 0
    j ← 0
    WHILE i < LENGTH(left) AND j < LENGTH(right)
        IF left[i] <= right[j] THEN
            append left[i] to result
            i ← i + 1
        ELSE
            append right[j] to result
            j ← j + 1
        ENDIF
    ENDWHILE
    append any items remaining in left to result
    append any items remaining in right to result
    RETURN result
ENDSUBROUTINE
```

The merge step is the heart of the algorithm. Because both halves are already sorted, the smallest remaining item must be at the front of one of them. Compare the two front items, move the smaller to the result, and repeat. Once one half is used up, the rest of the other is simply copied across.

### Worked example 2

Sort `14, 6, 21, 3, 17, 9, 25, 1`.

**Divide** (the list is halved until every part has one item):

```
14 6 21 3 17 9 25 1
14 6 21 3 | 17 9 25 1
14 6 | 21 3 | 17 9 | 25 1
14 | 6 | 21 | 3 | 17 | 9 | 25 | 1
```

**Merge** (back up the tree):

| Merge | Result | Comparisons |
|---|---|---|
| 14 with 6 | 6, 14 | 1 |
| 21 with 3 | 3, 21 | 1 |
| 17 with 9 | 9, 17 | 1 |
| 25 with 1 | 1, 25 | 1 |
| 6, 14 with 3, 21 | 3, 6, 14, 21 | 3 |
| 9, 17 with 1, 25 | 1, 9, 17, 25 | 3 |
| 3, 6, 14, 21 with 1, 9, 17, 25 | 1, 3, 6, 9, 14, 17, 21, 25 | 7 |

Here is the last merge in detail. Compare 3 and 1: take 1. Compare 3 and 9: take 3. Compare 6 and 9: take 6. Compare 14 and 9: take 9. Compare 14 and 17: take 14. Compare 21 and 17: take 17. Compare 21 and 25: take 21. The left half is now empty, so copy the remaining 25. That is 7 comparisons.

The total is 17 comparisons for 8 items. Bubble sort could need up to 28 for the same number of items. The gap grows quickly as n increases.

### Analysing merge sort

- Halving a list of n items down to single items takes about **log₂ n** levels. For 8 items there are 3 levels of splitting.
- At each level, the merging of all the parts together handles at most n items, and a merge does at most one comparison per item moved, so each level costs about **n** steps.
- Total: about n × log₂ n steps, so merge sort is **O(n log n)**.

| n | n²/2 (bubble sort scale) | n log₂ n (merge sort scale) |
|---|---|---|
| 10 | 50 | 33 |
| 100 | 5,000 | 664 |
| 1,000 | 500,000 | 9,966 |
| 1,000,000 | 500,000,000,000 | about 20,000,000 |

For a million items merge sort does tens of thousands of times less work.

The cost of merge sort is **memory**: merging needs somewhere to put the result, so it uses extra space of the order of n, whereas bubble sort works in place. Merge sort is also more complicated to write.

## Comparing the two

| | Bubble sort | Merge sort |
|---|---|---|
| Approach | Repeated adjacent swaps | Divide and conquer, then merge |
| Time complexity | O(n²) | O(n log n) |
| Extra memory | None (in place) | Yes, about n items |
| Best for | Very short lists, teaching | Large lists |
| Early exit | Yes, when a pass has no swaps | Always does the splitting and merging |

## Common mistakes

- Swapping non-adjacent items in bubble sort.
- Showing only the list at the end of each pass with no record of the comparisons when asked to trace in detail.
- Forgetting that the last pass of a bubble sort (with no swaps) still happens.
- Splitting an odd-length list wrongly in merge sort. Follow the rule given (usually the first half gets `LENGTH DIV 2` items).
- Merging by simply joining the halves end to end. The merge must compare front items.
- Saying merge sort is O(n²) or that bubble sort is O(n log n).
- Quoting O(n log n) without saying where the log n (halving) and the n (merge at each level) come from.

## Exam technique

- **Trace bubble sort**: write the list after each pass, or each swap if asked, and state the pass in which the algorithm stops.
- **Trace merge sort**: draw the splitting, then show each merge from the bottom up.
- **Compare**: refer to time complexity for large n and to memory use.
- **Explain O(n log n)**: halving gives log n levels, and each level does about n work.

## Related resources

- [Sorting algorithms revision notes](/resources/aqa-a-level-computer-science-7517-sorting-algorithms-revision-notes/)
- [Sorting algorithms practice questions](/resources/aqa-a-level-computer-science-7517-sorting-algorithms-practice/)
- [Searching algorithms study guide](/resources/aqa-a-level-computer-science-7517-searching-algorithms/)
- [Classification of algorithms study guide](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms/)

*Written against the AQA A-level Computer Science (7517) specification, 4.3.5 Sorting algorithms. Always check the current specification on the AQA website.*
