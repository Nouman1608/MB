---
title: "OxfordAQA IGCSE Computer Science (9210): Sorting algorithms -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Sorting Algorithms Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1 – Algorithms"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 1.04
syllabusTopics:
  - qualification: "igcse"
    topic: "algorithms-9210"
  - qualification: "igcse"
    topic: "algorithms-9210"
    subtopic: "sorting-algorithms-9210"
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.1.4: bubble sort with a swap flag, recursive merge sort, worked traces and a comparison."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.1.4 Sorting algorithms** of OxfordAQA International GCSE Computer Science (9210).
You must "understand and explain how the merge sort algorithm works" and how the **bubble sort** algorithm works,
and "compare and contrast" them. The additional information sets the detail needed:

- **Merge sort:** know the mechanics of the **recursive version**. It is enough to explain it in **prose**; you
  are not expected to write pseudocode for it. You must be able to **demonstrate** a merge sort on a given set of
  data.
- **Bubble sort:** know the mechanics, and be able to **follow and write pseudocode**. You must know the version
  that uses **two nested loops**, with the outer loop **indefinitely controlled** by a condition that tests whether
  any swaps were made, and the inner loop controlled **definitely** (a count-controlled `FOR` loop).
- Know the **advantages and disadvantages** of each.

The idea of comparing the work done by algorithms is covered in the [efficiency of algorithms study
guide](/resources/oxfordaqa-igcse-computer-science-9210-efficiency-of-algorithms/).

## What does sorting mean?

To **sort** a list is to put its items into order, here ascending (smallest first). Sorted data is easier to use,
for instance because a sorted list can be searched with a binary search (see the [searching algorithms
guide](/resources/oxfordaqa-igcse-computer-science-9210-searching-algorithms/)).

## Bubble sort

**Bubble sort** repeatedly steps through the list, comparing each **adjacent pair** of items and swapping them if
they are in the wrong order. After each complete pass, the largest item that has not yet been placed has moved to
its correct position at the end of the list, like a bubble rising to the top. This is repeated until a complete
pass makes **no swaps**, which means the list is in order.

### Pseudocode

```
REPEAT
  swapped ← False
  FOR i ← 0 TO LEN(data) - 2
    IF data[i] > data[i + 1] THEN
      temp ← data[i]
      data[i] ← data[i + 1]
      data[i + 1] ← temp
      swapped ← True
    ENDIF
  ENDFOR
UNTIL NOT swapped
```

Read it like this.

- The **outer loop** (`REPEAT ... UNTIL NOT swapped`) is **indefinite**: nobody knows in advance how many passes
  will be needed. The flag `swapped` is set to False at the start of each pass and set to True whenever a swap
  happens.
- The **inner loop** (`FOR i ...`) is **definite**: it makes exactly `LEN(data) - 1` comparisons, from index 0
  (comparing items 0 and 1) up to the last pair.
- The three lines that use `temp` perform the swap. Two items cannot be swapped by writing `data[i] ← data[i + 1]`
  followed by `data[i + 1] ← data[i]`, because the first line destroys the original `data[i]`. The temporary
  variable keeps it safe.
- `UNTIL NOT swapped` means "stop when nothing was swapped". A `WHILE swapped` loop is also correct if `swapped` is
  set to True before the loop starts.

### Trace

Sort `[6, 2, 9, 4, 1]` into ascending order.

| Pass | List at the end of the pass | Swaps made |
|---|---|---|
| 1 | 2, 6, 4, 1, 9 | 3 |
| 2 | 2, 4, 1, 6, 9 | 2 |
| 3 | 2, 1, 4, 6, 9 | 1 |
| 4 | 1, 2, 4, 6, 9 | 1 |
| 5 | 1, 2, 4, 6, 9 | 0 |

Pass 5 makes no swaps, so `swapped` stays False and the outer loop ends. This pass is needed, because the
algorithm cannot know the list is sorted until it has checked every pair. Notice that after pass 1 the 9 is in its
final place, and after pass 2 the 6 is, and so on. Each pass here makes 4 comparisons, so the whole sort needs
5 × 4 = **20 comparisons**.

### Strengths and weaknesses

- **Advantages:** it is simple to understand and short to write; it works in the list itself without needing a second
  list; and with the swap flag it stops early if the list is already sorted.
- **Disadvantages:** it is slow for long lists, because every pass compares nearly every pair and many passes may be
  needed. A list in reverse order is the worst case.

## Merge sort

**Merge sort** works by splitting the list into halves again and again, until each part holds just one item, and
then **merging** the parts back together in order. It is a **divide and conquer** method. The recursive version
can be explained in prose as follows.

1. If the list has **one item** (or none), it is already sorted. Stop.
2. Otherwise, **split** the list into two halves.
3. Apply merge sort to the **left half**, and apply merge sort to the **right half**. (This is the recursive step:
   the algorithm calls itself on a smaller list.)
4. **Merge** the two sorted halves into one sorted list.

To merge two sorted lists, look at the **first item of each list**, take whichever is smaller, put it on the end of
the new list, and repeat. When one list is empty, add all of the remaining items from the other list.

### Trace

Sort `[38, 27, 43, 3, 9, 82, 10]`. With seven items, the left half takes the first three and the right half takes
the last four.

**Splitting**

| Step | Split |
|---|---|
| 1 | `[38, 27, 43, 3, 9, 82, 10]` becomes `[38, 27, 43]` and `[3, 9, 82, 10]` |
| 2 | `[38, 27, 43]` becomes `[38]` and `[27, 43]` |
| 3 | `[27, 43]` becomes `[27]` and `[43]` |
| 4 | `[3, 9, 82, 10]` becomes `[3, 9]` and `[82, 10]` |
| 5 | `[3, 9]` becomes `[3]` and `[9]`; `[82, 10]` becomes `[82]` and `[10]` |

Every part now has one item, so every part is sorted.

**Merging**

| Step | Merge | Result |
|---|---|---|
| 6 | `[27]` with `[43]` | `[27, 43]` |
| 7 | `[38]` with `[27, 43]` | `[27, 38, 43]` |
| 8 | `[3]` with `[9]` | `[3, 9]` |
| 9 | `[82]` with `[10]` | `[10, 82]` |
| 10 | `[3, 9]` with `[10, 82]` | `[3, 9, 10, 82]` |
| 11 | `[27, 38, 43]` with `[3, 9, 10, 82]` | `[3, 9, 10, 27, 38, 43, 82]` |

Step 7 in detail: compare 38 with 27, take 27; compare 38 with 43, take 38; the first list is now empty, so add 43.
Step 11 in detail: compare 27 with 3, take 3; 27 with 9, take 9; 27 with 10, take 10; 27 with 82, take 27; 38 with
82, take 38; 43 with 82, take 43; the left list is empty, so add 82. The final list is
**3, 9, 10, 27, 38, 43, 82**.

An exam question that says "demonstrate a merge sort" is best answered by drawing the splitting down to single
items and then the merging back up, as in the tables above, writing out each list.

### Strengths and weaknesses

- **Advantages:** it needs far fewer comparisons than bubble sort on long lists, and it takes about the same
  number of steps whatever the starting order of the data.
- **Disadvantages:** it is harder to understand and to code, particularly in its recursive form, and it needs
  extra space for the lists that are created while splitting and merging.

## Comparing bubble sort and merge sort

The number of comparisons needed to sort a list that starts in reverse order (the worst case for bubble sort):

| Items | Bubble sort (with a swap flag) | Merge sort |
|---|---|---|
| 8 | 56 | 12 |
| 16 | 240 | 32 |
| 100 | 9,900 | 356 |
| 1,000 | 999,000 | 5,044 |

For a handful of items, either algorithm is quick. For 1,000 items, bubble sort makes about 200 times as many
comparisons. This is why merge sort is preferred for large lists. A bubble sort can still be a good choice for a
short list, a list that is nearly in order (where an early stop saves a lot of work), or whenever simplicity
matters more than speed.

| | Bubble sort | Merge sort |
|---|---|---|
| Method | Swaps adjacent items that are out of order | Splits to single items, then merges |
| Complexity to write | Simple, two loops | More complex, recursive |
| Speed on a large list | Slow | Much faster |
| Extra memory | Very little | Needs extra lists |
| Already-sorted list | Fast, with the flag (one pass) | Still splits and merges |

## Common mistakes

- Saying that bubble sort **compares every item with every other item**. It only compares **adjacent** pairs.
- Forgetting the **final pass** with no swaps in a bubble sort trace.
- Swapping items with two assignments and no `temp` variable.
- Writing the outer loop as a `FOR` loop, when the specification's version uses a condition that tests for swaps.
- In a merge sort demonstration, **sorting the halves as they are split**. The halves are only sorted when they are
  merged.
- Merging by simply joining two lists together. The merge must **compare the front items**.
- Claiming merge sort is "always" better. Bubble sort is simpler and has no need for extra storage.
- Not stating that a list of one item counts as already sorted, which is the stopping condition of the recursion.

## Exam technique

- **Trace** a bubble sort by writing the **whole list after each pass**, and the number of swaps for that pass.
- **Demonstrate** a merge sort by showing **every split** and **every merge** in order.
- **Write pseudocode** for a bubble sort with the flag, the definite inner loop and the swap using a temporary
  variable. Remember to reset the flag at the start of each pass.
- **Compare** with a point for each algorithm: speed on large lists, simplicity, and memory.
- **Explain** merge sort in prose using the four steps: stop at one item, split, sort each half, merge.

## Next steps

For a condensed summary and a self-test, use the [Sorting algorithms revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-sorting-algorithms-revision-notes/), and practise with the
[Sorting algorithms practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-sorting-algorithms-practice/).
