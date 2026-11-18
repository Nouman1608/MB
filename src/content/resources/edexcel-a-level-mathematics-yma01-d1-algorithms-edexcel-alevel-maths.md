---
title: "Edexcel International A Level Mathematics (YMA01): Algorithms"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit D1: Decision Mathematics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 9.1
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-d1-decision-mathematics-1-edexcel-alevel-maths"
    subtopic: "d1-algorithms-edexcel-alevel-maths"
description: "Edexcel IAL Maths D1 algorithms guide: tracing text and flow chart algorithms, bubble sort, quick sort, binary search and bin packing, with full worked traces."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 1 of **Unit D1: Decision Mathematics 1** in Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics (YMA01), Specification Issue 3: "The general ideas of algorithms and the implementation of an algorithm given by a flow chart or text" (1.1), and "Students should be familiar with bin packing, bubble sort, quick sort, binary search" (1.2). The guidance adds three rules that examiners apply strictly: "The order of an algorithm is not expected"; "Whenever finding the middle item of any list, the method defined in the glossary must be used"; and "When using the quick sort algorithm, the pivot should be chosen as the middle item of the list". The unit preamble also says students "should show clearly how an algorithm has been applied".

The broader D1 page on [sorting, packing, spanning trees and Dijkstra](/resources/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum/) shows one run of each algorithm. This page adds the variations that appear in exam questions: tracing an unfamiliar algorithm and saying what it does, sorting into descending order, shortened bubble sort passes, binary search by position numbers, and full-bin packing. The [algorithms revision notes](/resources/edexcel-a-level-mathematics-yma01-d1-algorithms-edexcel-alevel-maths-revision-notes/) condense the rules, and the [algorithms practice set](/resources/edexcel-a-level-mathematics-yma01-d1-algorithms-edexcel-alevel-maths-practice/) has twelve questions with full traces.

## What an algorithm is

An algorithm is a finite sequence of precise instructions for solving a problem, which always stops and gives an output. In D1 it is given either as numbered steps of text or as a flow chart. Flow charts use a rounded box for start and stop, a rectangle for an instruction, and a diamond for a decision with "yes" and "no" exits.

To **implement** an algorithm, keep a **trace table**: one column for each variable (and for the decision, if useful), with a new entry each time a value changes. Follow the steps literally. A question then often asks what the algorithm does, which you answer by looking at the relationship between input and output.

## Worked example 1: tracing and interpreting

```
1  Input A and B
2  Let C = 0
3  If A is odd, replace C by C + B
4  Replace A by INT(A/2) and B by 2B
5  If A > 0, go to step 3
6  Output C
```

INT(x) is the integer part of x. Trace with A = 13, B = 11:

| A | B | A odd? | C |
|---|---|---|---|
| 13 | 11 | yes | 11 |
| 6 | 22 | no | 11 |
| 3 | 44 | yes | 55 |
| 1 | 88 | yes | 143 |
| 0 | 176 | stop | 143 |

The output is 143, which is 13 × 11. Trying another input (A = 6, B = 5 gives 30) confirms that **the algorithm multiplies A by B**. A good answer to "state what the algorithm achieves" names the purpose, not just the final number.

## The glossary's middle item

For a list of N items, the middle item is in position (N + 1)/2 if N is odd and (N + 2)/2 if N is even. When working with positions f to l of a longer list, this is the same as **rounding (f + l)/2 up**. For positions 8 to 13, (8 + 13)/2 = 10.5, so the middle is position 11. Using "round down" loses accuracy marks in every following step.

## Bubble sort

In each pass, compare adjacent items from left to right and swap any pair in the wrong order. After pass 1 the largest item is at the end; after pass 2 the second largest is in place, and so on. So pass k need only make n − k comparisons. Stop after a pass with no swaps, or when only one item is left to compare.

## Worked example 2: counting comparisons and swaps

Sort 31, 18, 42, 7, 25, 16 into ascending order, shortening each pass.

```
start:   31 18 42  7 25 16
pass 1:  18 31  7 25 16 42     5 comparisons, 4 swaps
pass 2:  18  7 25 16 31 42     4 comparisons, 3 swaps
pass 3:   7 18 16 25 31 42     3 comparisons, 2 swaps
pass 4:   7 16 18 25 31 42     2 comparisons, 1 swap
pass 5:   7 16 18 25 31 42     1 comparison,  0 swaps -> stop
```

Total: 15 comparisons and 10 swaps. For a list of n items, the most passes needed is n − 1, and the most comparisons with shortened passes is n(n − 1)/2.

If the question asks for descending order, swap when the left item is **smaller**; the smallest item then moves to the end on each pass. Read the question for whether passes are shortened.

## Quick sort

Choose the middle item as the pivot. Write the items that belong before it (smaller, for ascending order) in their original order, then the pivot, then the rest in their original order. The pivot is now fixed. Repeat on every sublist of two or more items, choosing each sublist's own middle item. Show each pass as a new line, with the pivots marked.

## Worked example 3: quick sort into descending order

Sort 23, 41, 8, 36, 15, 52, 29, 11, 47 into descending order. For descending order, items **greater** than the pivot go before it.

```
23 41  8 36 15 52 29 11 47          9 items: pivot 5th = 15
23 41 36 52 29 47 [15] 8 11         pivots: 4th of 6 = 52; 2nd of 2 = 11
[52] 23 41 36 29 47 [15] [11] 8     pivot: 3rd of 5 = 36
[52] 41 47 [36] 23 29 [15] [11] [8] pivots: 2nd of 2 = 47; 2nd of 2 = 29
[52] [47] 41 [36] [29] 23 [15] [11] [8]
sorted: 52 47 41 36 29 23 15 11 8
```

When a sublist has an even number of items, the glossary rule takes the item just right of centre: the 4th of 6, the 2nd of 2.

## Binary search

The list must already be in order. Compare the target with the middle item of the remaining list. If they match, stop. If the target comes later, discard the middle item and everything before it; if earlier, discard it and everything after. Repeat. If the list becomes empty, the target is not present.

## Worked example 4: searching by position

Search the ordered list below for 43, then for 20.

```
position: 1  2  3  4  5  6  7  8  9  10 11 12 13
value:    4  9 12 17 21 26 30 34 38 43 47 52 58
```

**Search for 43:**

```
positions 1–13: middle ⌈14/2⌉ = 7,   value 30; 43 > 30, keep 8–13
positions 8–13: middle ⌈21/2⌉ = 11,  value 47; 43 < 47, keep 8–10
positions 8–10: middle ⌈18/2⌉ = 9,   value 38; 43 > 38, keep 10
position 10:    value 43, found after 4 iterations
```

**Search for 20:** middle 7 (30), keep 1–6; middle 4 (17), keep 5–6; middle 6 (26), keep 5; middle 5 (21), 20 < 21, nothing left. **20 is not in the list.**

Each iteration at least halves the list, so 13 items need at most 4 iterations.

## Bin packing

- **Lower bound:** total of the items ÷ bin capacity, rounded up. No packing can use fewer bins.
- **First-fit:** take items in the order given; put each in the first bin with room.
- **First-fit decreasing:** sort into decreasing order first (a question may ask you to use a named sort), then apply first-fit.
- **Full-bin packing:** use inspection to find combinations that fill bins exactly, then first-fit the rest.

## Worked example 5: when first-fit decreasing is not optimal

Pieces of length 3, 7, 5, 3, 6, 4, 5, 3 metres are cut from 12-metre lengths.

```
total 36, so lower bound = 36/12 = 3 lengths
first-fit:            (3, 7) (5, 3, 4) (6, 5) (3)        4 lengths
first-fit decreasing: (7, 5) (6, 5) (4, 3, 3) (3)        4 lengths
full-bin:             (7, 5) (6, 3, 3) (5, 4, 3)         3 lengths
```

The full-bin packing meets the lower bound, so it is **optimal**. First-fit decreasing usually does well but is not guaranteed to be optimal, which is a standard "explain" question.

## Common mistakes

- Rounding the middle position down instead of up.
- In quick sort, reordering the items within a sublist instead of keeping their original order.
- Choosing the first item of a sublist as the pivot.
- Continuing a bubble sort after a pass with no swaps, or stopping before such a pass.
- In binary search, keeping the middle item in the new list.
- Giving the lower bound for bin packing without rounding up.
- Stating that a packing is optimal without comparing it with the lower bound.

## Exam technique

- **"Use the algorithm"** or **"Implement"**: write a trace table with every change shown.
- **"State what the algorithm achieves"**: give its purpose in general terms.
- **"Show the result of each pass"**: one line per pass, pivots clearly marked in quick sort.
- **"Explain why"** a packing is optimal: it uses the lower-bound number of bins.
- **"Show clearly"**: the preamble expects working that lets an examiner follow every step.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, Unit D1, section 1 and the D1 glossary —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
