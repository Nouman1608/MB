---
title: "OxfordAQA A-Level Computer Science (9645): Sorting algorithms -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Sorting Algorithms Practice"
resourceType: "practice-questions"
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
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.4.2: tracing and coding bubble sort, demonstrating merge sort and comparing the two, with answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.4.2 Sorting algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: bubble sort, merge sort and a comparison of their efficiency. Lists are sorted into ascending order. Code is Python.

Related pages: [sorting algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-sorting-algorithms/) · [sorting algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-sorting-algorithms-revision-notes/)

## Section A

**1.** After the first pass of a bubble sort into ascending order, state which item is guaranteed to be in its final position. **[1]**

**2.** State the two ways in which the basic bubble sort algorithm can be made more efficient. **[2]**

**3.** State the type of iteration needed so that a bubble sort can stop as soon as a pass makes no swaps. **[1]**

## Section B

**4.** A basic bubble sort, which uses definite iteration and makes every pass over the whole list, is applied to `[9, 4, 7, 1, 6]`.

**(a)** State the number of comparisons the basic version makes in total. **[1]**
**(b)** Show the list at the end of each pass of the improved version (which checks one fewer pair each pass and stops after a pass with no swaps). **[4]**
**(c)** State the total number of comparisons the improved version makes. **[1]**

**5.** The list `[2, 3, 5, 4, 6, 7]` is sorted using the improved version of bubble sort.

**(a)** State the number of swaps made. **[1]**
**(b)** State the number of passes made and the number of comparisons in each pass. **[2]**
**(c)** Explain why the improved version needs fewer comparisons for this list than for the list `[9, 4, 7, 1, 6]`, even though they have a similar number of items. **[2]**

**6.** Write a Python procedure `bubble_sort(items)` that sorts a list into ascending order in place, uses indefinite iteration and stops when a pass makes no swaps. **[6]**

**7.** Merge the two sorted lists `[1, 4, 9]` and `[2, 3, 10]`.

**(a)** Give the merged list. **[1]**
**(b)** State the number of comparisons made. **[1]**
**(c)** Describe how the merge works. **[2]**

**8.** Demonstrate a merge sort on `[20, 5, 12, 8, 31, 2, 16]`. Show how the list is split into single items, then each merge and its result. **[6]**

**9.** Compare bubble sort and merge sort for a list of 1,000 items that is in random order. In your answer refer to time and memory. **[4]**

**10.** A programmer must keep a list of 50 high scores in order after each new score is added. The list is already almost sorted before each new score is added.

**(a)** Explain why the improved bubble sort may be a sensible choice. **[2]**
**(b)** State **one** reason why merge sort might still be preferred if the list grew to 500,000 items in random order. **[1]**

## Answers

**1.** The **largest** item (it has moved to the end) [1]. **[1]**

**2.** Reduce the number of items checked by one after each pass [1]; use indefinite iteration so that the sort stops when a pass is made without any swaps [1]. **[2]**

**3.** **Indefinite** iteration (for example a `while` or repeat-until loop) [1]. **[1]**

**4. (a)** 4 passes of 4 comparisons = **16** [1]. **[1]**
**(b)**

| Pass | List at the end |
|---|---|
| 1 | 4, 7, 1, 6, 9 |
| 2 | 4, 1, 6, 7, 9 |
| 3 | 1, 4, 6, 7, 9 |
| 4 | 1, 4, 6, 7, 9 (no swaps) |

Each correct pass [1 each]. **[4]**
**(c)** 4 + 3 + 2 + 1 = **10** [1]. **[1]**

**5. (a)** **1** swap (5 and 4) [1]. **[1]**
**(b)** **2** passes [1]; 5 comparisons in pass 1 and 4 in pass 2 [1]. **[2]**
**(c)** The list `[2, 3, 5, 4, 6, 7]` is **nearly sorted** [1]; the second pass makes no swaps, so the improved version stops after two passes, whereas `[9, 4, 7, 1, 6]` is far from sorted and needs all four passes [1]. **[2]**

**6.** Example answer:

```python
def bubble_sort(items):
    end = len(items) - 1                      # [1] number of pairs to check
    swapped = True                            # [1] flag set so the loop starts
    while swapped:                            # [1] indefinite iteration
        swapped = False
        for i in range(end):
            if items[i] > items[i + 1]:       # [1] compare neighbours
                items[i], items[i + 1] = items[i + 1], items[i]   # [1] swap
                swapped = True                # [1] record that a swap happened
        end = end - 1
```

Reducing `end` is an optional improvement that does not carry a mark of its own; accept an answer that checks every pair on every pass. **[6]**

**7. (a)** **[1, 2, 3, 4, 9, 10]** [1]. **[1]**
**(b)** **5** comparisons (1 v 2, 4 v 2, 4 v 3, 4 v 10, 9 v 10), then the remaining 10 is copied [1]. **[1]**
**(c)** Compare the **front items** of the two lists [1], move the smaller to the output and repeat; when one list is empty, add the rest of the other list [1]. **[2]**

**8.** Split: [20, 5, 12] and [8, 31, 2, 16]; then [20] and [5, 12]; [5] and [12]; [8, 31] and [2, 16]; down to single items [1 for a correct splitting to single items]. Merges, in this order:
- [5] and [12] gives [5, 12]; [8] and [31] gives [8, 31]; [2] and [16] gives [2, 16] [2: all three correct [2]; two correct [1]]
- [20] and [5, 12] gives [5, 12, 20] [1]
- [8, 31] and [2, 16] gives [2, 8, 16, 31] [1]
- [5, 12, 20] and [2, 8, 16, 31] gives **[2, 5, 8, 12, 16, 20, 31]** [1]

The merges make 14 comparisons in total. **[6]**

**9.** Any four points [1 each]: bubble sort needs a number of comparisons roughly proportional to **n squared** (about 499,500 for 1,000 items), merge sort roughly **n × log n** (under 9,000), so merge sort is much **faster** on a large list; bubble sort sorts **in place** and needs almost no extra memory; merge sort needs **extra memory** for the sub-lists, roughly as much as the list; so merge sort trades **more memory for speed**; with random order bubble sort gets no benefit from early stopping. **[4]**

**10. (a)** The improved version **stops after a pass with no swaps** [1], so on an almost sorted list it needs very few passes and is efficient [1]. **[2]**
**(b)** Any one [1]: bubble sort's time grows quickly with the number of items, so for a very large random list merge sort is far **faster**; the saving in time outweighs the extra memory. **[1]**

## Frequently asked questions

**Do I need to write merge sort code?**
No. The specification says students will not be asked to write code for merge sort, but may be asked to explain or demonstrate how it works on a set of data.

**Does bubble sort have more than one version?**
Yes. Students should know the basic version using definite iteration and the two improvements that make it more efficient.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.4.2 Sorting algorithms.
