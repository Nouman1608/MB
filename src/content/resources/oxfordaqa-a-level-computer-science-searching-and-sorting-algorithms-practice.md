---
title: "OxfordAQA A-Level Computer Science: Searching and sorting algorithms (9645) -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Searching and Sorting Practice"
resourceType: "practice-questions"
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
description: "Original practice questions with worked answers on tracing and coding searches and sorts, for OxfordAQA International AS and A-level Computer Science."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover section **3.4 Searching and sorting algorithms** (3.4.1 and 3.4.2) of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. It is AS content, assessed in Unit 1: Programming; question 10(c) uses Big O from section 3.13.5 and is International A-level only. Code answers are in Python (the exam is available in C#, Python or VB.Net). Lists start at index 0, and `mid` uses integer division (rounding down).

Links: [study guide](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms/) · [revision notes](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms-revision-notes/) · [course hub](/boards/oxfordaqa/a-level/computer-science/) · [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) · [free 10-minute diagnostics](/diagnostics/)

## Questions

**1.** State the condition a list must meet before a binary search can be used on it, and give **one** reason a programmer might still choose a linear search. **[2]**

**2.** A list holds these city names in this order:

`Osaka, Lima, Cairo, Perth, Oslo, Quito, Dhaka, Riga`

**(a)** State how many comparisons an early-stopping linear search makes to find `Quito`. **[1]**
**(b)** State how many comparisons the inefficient version makes to find `Quito`. **[1]**
**(c)** Explain why the early-stopping version saves no comparisons when searching for `Rome`. **[1]**

**3.** Write a function `user_exists(usernames, name)` that returns `True` if `name` is in the list `usernames` and `False` otherwise. It must use a linear search that stops as soon as the name is found, and must use a `while` loop. **[4]**

**4.** An ordered list holds 15 integers at indexes 0 to 14:

`2, 6, 11, 17, 20, 26, 31, 38, 42, 49, 53, 61, 66, 72, 80`

Trace a binary search for 20. Give `low`, `high`, `mid` and `items[mid]` on every row, and state the index returned and the number of comparisons. **[5]**

**5.** Using the same list as question 4:

**(a)** Trace a binary search for 45. **[3]**
**(b)** State `low` and `high` when the loop ends and explain how they show 45 is absent. **[1]**

**6.** The efficient bubble sort (range reduced by one each pass, stopping after a pass with no swaps) sorts this list into ascending order:

`64, 25, 12, 47, 90, 33`

**(a)** Show the list after each pass. **[3]**
**(b)** State the total number of passes and the total number of comparisons. **[2]**

**7.** Write a subroutine that sorts a list of surnames into alphabetical order using a bubble sort. It must use indefinite iteration so that it stops after a pass with no swaps, and it must check one fewer pair after each pass. **[6]**

**8.** The list `3, 5, 9, 2, 11, 14, 17` is nearly sorted.

**(a)** Calculate the number of comparisons the efficient bubble sort (both improvements) makes to sort it. **[2]**
**(b)** State the number of comparisons the basic version, with two `FOR` loops of fixed length, makes. **[1]**
**(c)** Explain why the efficient version needs far fewer comparisons on this list. **[2]**

**9.** Demonstrate how a merge sort puts this list into ascending order:

`71, 23, 58, 14, 96, 35, 42, 8`

Show every split and every merge. **[6]**

**10.** A college library keeps 50,000 book records in a list ordered by ISBN. Staff search it many times a day. Each week about 40 new records are added to the end, and the list is re-sorted on a small device with very little spare memory.

**(a)** Explain which search algorithm the system should use for staff searches, and why. **[3]**
**(b)** Evaluate whether bubble sort or merge sort is better for the weekly re-sort. Refer to time and memory. **[4]**
**(c)** *(International A-level only.)* State the worst-case time complexity of binary search and of merge sort in Big O notation. **[2]**

**11.** A student's binary search contains this line in the branch for `items[mid] > target`:

```
high ← mid
```

The search is run on the ordered list `4, 10, 15, 21, 28, 36, 43` (indexes 0 to 6) with target 12.

**(a)** Trace the first four iterations and describe what goes wrong. **[3]**
**(b)** Correct the line and state the result of the corrected search. **[2]**

## Answers

**1.** The list must be **ordered (sorted)** [1]. Any one reason: the data is unsorted and sorting it first would take longer than one search; the list is very short; linear search is simpler to code [1].
*Examiner insight:* For the reason, name a specific situation (unsorted data, a very short list) rather than a vague "it is easier", which does not explain when linear search is the better choice.

**2. (a)** **6** comparisons (Osaka, Lima, Cairo, Perth, Oslo, Quito) [1]
**(b)** **8** comparisons, because it always checks every item [1]
**(c)** `Rome` is absent, so every item must be checked before "not found" can be reported [1].
*Examiner insight:* Count the comparison that finds the item; an answer of 5 for part (a) is a common off-by-one slip.

**3.**
```python
def user_exists(usernames, name):
    index = 0
    while index < len(usernames):
        if usernames[index] == name:
            return True
        index += 1
    return False
```
`while` loop with index starting at 0 and kept within the list bounds [1]; compares the current item with `name` [1]; returns `True` (or exits the loop) as soon as a match is found [1]; returns `False` only after the whole list has been checked [1].
*Examiner insight:* Putting `return False` inside an `else` branch in the loop stops the search after the first item, so place it after the loop ends.

**4.**

| low | high | mid | items[mid] | action |
|---|---|---|---|---|
| 0 | 14 | 7 | 38 | 38 > 20, high ← 6 |
| 0 | 6 | 3 | 17 | 17 < 20, low ← 4 |
| 4 | 6 | 5 | 26 | 26 > 20, high ← 4 |
| 4 | 4 | 4 | 20 | found |

First row correct [1]; second row correct [1]; third row correct [1]; fourth row correct, item found [1]. Returns **index 4** after **4 comparisons** [1].
*Examiner insight:* Check each `mid` against its own row's `low` and `high`; one early error spoils every later row.

**5. (a)**

| low | high | mid | items[mid] | action |
|---|---|---|---|---|
| 0 | 14 | 7 | 38 | 38 < 45, low ← 8 |
| 8 | 14 | 11 | 61 | 61 > 45, high ← 10 |
| 8 | 10 | 9 | 49 | 49 > 45, high ← 8 |
| 8 | 8 | 8 | 42 | 42 < 45, low ← 9 |

Rows 1 and 2 correct [1]; row 3 correct [1]; row 4 correct [1].
**(b)** **low = 9, high = 8**. Because low > high, there is no part of the list left to search, so 45 is not present [1].
*Examiner insight:* Don't stop early because "45 is between 42 and 49": show the algorithm reaching `low > high`.

**6. (a)**

| After pass | List |
|---|---|
| 1 | 25, 12, 47, 64, 33, 90 |
| 2 | 12, 25, 47, 33, 64, 90 |
| 3 | 12, 25, 33, 47, 64, 90 |
| 4 | 12, 25, 33, 47, 64, 90 (no swaps) |

Pass 1 correct [1]; pass 2 correct [1]; pass 3 correct and pass 4 shown with no swaps [1].
**(b)** **4 passes** [1]; 5 + 4 + 3 + 2 = **14 comparisons** [1].
*Examiner insight:* The list is sorted after pass 3, but the algorithm only knows when pass 4 makes no swaps.

**7.**
```python
def bubble_sort(names):
    swapped = True
    end = len(names) - 1
    while swapped:
        swapped = False
        for i in range(end):
            if names[i] > names[i + 1]:
                temp = names[i]
                names[i] = names[i + 1]
                names[i + 1] = temp
                swapped = True
        end -= 1
    return names
```
Outer `while` loop controlled by a flag [1]; flag set to `False` at the start of each pass [1]; inner loop compares each adjacent pair up to `end` [1]; correct comparison for alphabetical order [1]; correct swap of the two items and flag set to `True` [1]; `end` reduced by one after each pass [1].
*Examiner insight:* Test with an empty and a one-item list; an inner loop running to `len(names)` goes out of range.

**8. (a)** Passes make 6, 5, 4 and 3 comparisons; the fourth pass makes no swaps [1]. Total **18 comparisons** [1].
**(b)** 6 passes × 6 comparisons = **36 comparisons** [1].
**(c)** The 2 moves left one place per pass, so the list is sorted after three passes [1]. Pass four makes no swaps, so the flag stays false and the loop stops instead of running all six passes [1].
*Examiner insight:* "It is already sorted" is not enough for part (c); link the early finish to the pass with no swaps.

**9.**
```
Split:  [71, 23, 58, 14]          [96, 35, 42, 8]
        [71, 23]  [58, 14]        [96, 35]  [42, 8]
        71 | 23 | 58 | 14         96 | 35 | 42 | 8     (single items)

Merge:  [23, 71]  [14, 58]        [35, 96]  [8, 42]
        [14, 23, 58, 71]          [8, 35, 42, 96]
        [8, 14, 23, 35, 42, 58, 71, 96]
```
Split into halves [1]; split down to single items [1]; first merge into sorted pairs [1]; merge into two sorted lists of four [1]; final merge [1]; correct final sorted list **8, 14, 23, 35, 42, 58, 71, 96** [1].
*Examiner insight:* Every merged list must be in order; writing 71, 23 back unchanged shows a split, not a merge.

**10. (a)** Binary search [1]. The list is ordered by ISBN, which binary search requires [1]. With 50,000 records, halving the search space each comparison needs far fewer comparisons than checking records one by one, which matters because staff search many times a day [1].
**(b)** After the weekly additions only about 40 records are out of place at the end, so the list is nearly sorted [1]. Merge sort would still do all its splitting and merging and needs extra memory for the sub-lists, which this device lacks [1]. Efficient bubble sort sorts in place with one temporary variable [1]. But a new record that belongs near the start moves left only one place per pass, so bubble sort could need very many passes. Justified conclusion, for example bubble sort because memory is the limiting factor [1].
**(c)** Binary search **O(log n)** [1]; merge sort **O(n log n)** [1].
*Examiner insight:* "Evaluate" needs points on both sorts and a conclusion tied to the scenario, including the device's memory.

**11. (a)**

| iteration | low | high | mid | items[mid] | action |
|---|---|---|---|---|---|
| 1 | 0 | 6 | 3 | 21 | high ← 3 |
| 2 | 0 | 3 | 1 | 10 | low ← 2 |
| 3 | 2 | 3 | 2 | 15 | high ← 2 |
| 4 | 2 | 2 | 2 | 15 | high ← 2 |

Iterations 1 and 2 correct [1]; iterations 3 and 4 correct [1]. From iteration 3 on, `high` stays at 2 and `low` stays at 2, so `low ≤ high` never becomes false and the loop never ends [1].
**(b)** `high ← mid - 1` [1]. After iteration 3 high becomes 1, so low (2) > high (1) and the search ends reporting **12 not found** [1].
*Examiner insight:* Say why the loop cannot end (the range stops shrinking); "it crashes" does not describe the fault.

## Where marks are usually lost

- Not stating that binary search requires an ordered list.
- Miscounting comparisons in a linear search by leaving out the one that finds the item.
- Recalculating `mid` with the wrong `low` or `high`, then carrying the error through the trace.
- Ending a bubble sort trace when the list looks sorted, before the pass with no swaps.
- Merge sort answers that show the splits but not each sorted merge.
- Comparing sorts on speed only when the question asks about time **and** memory.

## Next steps

- [Revision notes](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms-revision-notes/) for a fast recap
- [Study guide](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms/) for full explanations and traces
- [Procedural programming practice](/resources/a-computer-science-procedural-practice/)
- [Course hub](/boards/oxfordaqa/a-level/computer-science/)
- [Printable checklist](/checklists/oxfordaqa/a-level/computer-science/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.4 Searching and sorting algorithms, with Big O from section 3.13.5.
