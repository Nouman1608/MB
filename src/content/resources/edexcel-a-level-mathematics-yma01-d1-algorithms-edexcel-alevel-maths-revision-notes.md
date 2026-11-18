---
title: "Edexcel International A Level Mathematics (YMA01): Algorithms -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Edexcel IAL Maths D1 algorithms: trace tables, the middle-item rule, bubble sort, quick sort, binary search, bin packing and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed recall for Unit D1, section 1: the general ideas of algorithms, implementing an algorithm given by a flow chart or text, and bin packing, bubble sort, quick sort and binary search. For full worked traces, use the [algorithms study guide](/resources/edexcel-a-level-mathematics-yma01-d1-algorithms-edexcel-alevel-maths/).

## Rules the specification fixes

- The **middle item** of N items is at position (N + 1)/2 if N is odd and (N + 2)/2 if N is even. For positions f to l: round (f + l)/2 **up**.
- In **quick sort**, the pivot is the middle item of each list or sublist.
- The **order** of an algorithm is not expected.
- Show clearly how an algorithm has been applied.

## Key terms

| Term | Meaning |
|---|---|
| Algorithm | A finite set of precise instructions that solves a problem and stops |
| Flow chart | Diagram of an algorithm: rounded boxes for start/stop, rectangles for instructions, diamonds for decisions |
| Trace table | Record of every variable's value as the algorithm runs |
| Pass | One run through a list in a sorting algorithm |
| Pivot | The item a quick sort pass splits the list around |
| Lower bound (bin packing) | Total size ÷ bin capacity, rounded up |
| Optimal | Uses the fewest bins possible; certain if it equals the lower bound |

## Tracing an algorithm

1. Make a column for every variable, plus one for each decision.
2. Write a new value only when it changes.
3. Follow "go to" instructions exactly.
4. Stop when the stopping condition is met; write the output.
5. If asked, state the **purpose** in general terms ("finds the highest common factor", "multiplies A by B").

## Bubble sort

- Compare adjacent pairs from the left; swap if out of order.
- Ascending: largest item reaches the end in pass 1.
- Descending: swap when the left item is smaller; smallest item reaches the end.
- Shortened passes: pass k makes n − k comparisons.
- Stop after a pass with no swaps.
- At most n − 1 passes; at most n(n − 1)/2 comparisons with shortened passes.

## Quick sort

```
1  pivot = middle item
2  write items before the pivot (smaller for ascending, larger for descending) in original order
3  write the pivot, then the remaining items in original order
4  repeat on every sublist with 2 or more items
5  stop when every item has been a pivot or is alone
```

Mark pivots clearly on each line (box, bracket or underline).

## Binary search

```
1  list must be in order
2  middle position m = (f + l)/2 rounded up
3  target = item m: found
4  target after item m: f = m + 1
5  target before item m: l = m − 1
6  if f > l: not in list; otherwise go to 2
```

Each iteration at least halves the list: 2 to 3 items need at most 2 iterations, 4 to 7 at most 3, 8 to 15 at most 4.

## Bin packing

| Method | Rule | Notes |
|---|---|---|
| First-fit | Items in given order; each into the first bin with room | Quick; often uses extra bins |
| First-fit decreasing | Sort largest first, then first-fit | Usually good; not always optimal |
| Full-bin | Find combinations that fill bins exactly, then first-fit the rest | Needs inspection; can be slow for many items |

Always compare with the lower bound.

## Mini example

Capacity 10; items 8, 5, 9, 4, 7, 3, 6, 2, 5, 1 (total 50, lower bound 5).

```
first-fit:            (8, 2) (5, 4, 1) (9) (7, 3) (6) (5)        6 bins
first-fit decreasing: (9, 1) (8, 2) (7, 3) (6, 4) (5, 5)         5 bins, optimal
```

## Exam traps

- Rounding a middle position down.
- Pivot taken as the first item of a sublist.
- Items rearranged within a quick sort sublist instead of kept in their original order.
- A bubble sort stopped without a final pass showing no swaps.
- Keeping the middle item in a binary search's next sublist.
- Calling a packing optimal without the lower bound.
- A trace table missing the final output.

## Self-test

1. State the position of the middle item of a list of 15 items, and of 20 items.
2. In a binary search, the remaining items are in positions 12 to 25. Which position is the middle?
3. Items total 57 and each bin holds 15. Find the lower bound.
4. Why must a list be in order before a binary search?
5. How many comparisons does pass 3 of a shortened bubble sort of 9 items make?
6. When does a bubble sort stop?
7. In a quick sort into descending order, which items go before the pivot?
8. What is the pivot of a sublist of 6 items?
9. What is the difference between first-fit and first-fit decreasing?
10. A packing uses the same number of bins as the lower bound. What can you conclude?
11. Give two properties every algorithm must have.
12. What is the greatest number of iterations a binary search of 12 items can need?

**Answers:** 1. 8th; 11th. 2. (12 + 25)/2 = 18.5, rounded up to 19. 3. 57/15 = 3.8, so 4 bins. 4. Each step discards half the list on the assumption that the target can only be on one side of the middle item. 5. 9 − 3 = 6. 6. After a pass with no swaps (or when only one item remains to compare). 7. Items greater than the pivot. 8. The 4th item. 9. First-fit decreasing sorts the items into decreasing order before applying first-fit. 10. The packing is optimal. 11. Any two: finite (it stops); each step precise and unambiguous; it produces an output that solves the problem. 12. 4.
