---
title: "OxfordAQA IGCSE Computer Science (9210): Sorting algorithms -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Sorting Algorithms Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.1.4: bubble sort with a swap flag, recursive merge sort in prose, a comparison and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.1.4 Sorting algorithms** of OxfordAQA International GCSE Computer Science (9210).
Full traces are in the [Sorting algorithms study
guide](/resources/oxfordaqa-igcse-computer-science-9210-sorting-algorithms/).

## What the specification asks

- Explain how **merge sort** works (the **recursive** version). Prose is enough; no pseudocode is required.
  **Demonstrate** it on given data.
- Explain how **bubble sort** works. **Follow and write pseudocode.** Use the version with **two nested loops**: the
  outer loop is **indefinite** (tests whether any swaps were made) and the inner loop is **definite**.
- **Compare and contrast** the two, with advantages and disadvantages.

## Bubble sort

Compare **adjacent** pairs from the start of the list and swap any pair that is in the wrong order. Repeat passes
until a whole pass makes **no swaps**.

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

- Outer loop: **indefinite**, controlled by the `swapped` flag, which is reset to False at the start of every pass.
- Inner loop: **definite**, a `FOR` loop over the adjacent pairs.
- After each pass the largest unplaced item has "bubbled" to the end.
- The last pass, with no swaps, is needed to confirm the list is sorted.

### Trace of `[5, 8, 3, 1, 9, 2]`

| Pass | List at the end | Swaps |
|---|---|---|
| 1 | 5, 3, 1, 8, 2, 9 | 3 |
| 2 | 3, 1, 5, 2, 8, 9 | 3 |
| 3 | 1, 3, 2, 5, 8, 9 | 2 |
| 4 | 1, 2, 3, 5, 8, 9 | 1 |
| 5 | 1, 2, 3, 5, 8, 9 | 0 |

Five passes of 5 comparisons each make 25 comparisons.

## Merge sort

A **divide and conquer** method, using recursion.

1. A list of **one item** is already sorted. Stop.
2. **Split** the list into two halves.
3. **Merge sort each half** (the algorithm calls itself).
4. **Merge** the two sorted halves.

**Merging:** compare the first item of each list, take the smaller, repeat. When one list runs out, add the rest of
the other.

### Demonstration on `[7, 3, 9, 1, 5, 2]`

| Stage | Lists |
|---|---|
| Split | `[7, 3, 9]` and `[1, 5, 2]` |
| Split | `[7]` `[3, 9]` and `[1]` `[5, 2]` |
| Split | `[7]` `[3]` `[9]` and `[1]` `[5]` `[2]` |
| Merge | `[3, 9]` and `[2, 5]` |
| Merge | `[3, 7, 9]` and `[1, 2, 5]` |
| Merge | `[1, 2, 3, 5, 7, 9]` |

Final merge: 3 against 1 takes 1; 3 against 2 takes 2; 3 against 5 takes 3; 7 against 5 takes 5; the right list is
empty, so 7 and 9 follow. That took 4 comparisons in the last merge and 9 comparisons in all.

## Comparison

| | Bubble sort | Merge sort |
|---|---|---|
| Idea | Swap adjacent items that are out of order | Split into single items, merge in order |
| Code | Simple, two loops | Harder, recursive |
| Large lists | Slow | Much faster |
| Extra storage | Almost none | Extra lists needed |
| Nearly sorted list | Fast with the flag | No special advantage |

Comparisons for a reverse-ordered list: 100 items need 9,900 for bubble sort and 356 for merge sort; 1,000 items need
999,000 and 5,044. A **short** list can be bubble sorted without trouble.

## Advantages and disadvantages

- **Bubble, advantages:** simple to write and trace; needs no extra lists; stops early if the data is sorted.
- **Bubble, disadvantages:** many comparisons on long lists; worst for reverse order.
- **Merge, advantages:** far fewer comparisons on long lists; similar speed whatever the starting order.
- **Merge, disadvantages:** more complicated; uses extra memory for the sub-lists.

## Exam traps

- **"Compares every item with every other."** Bubble sort compares **adjacent** items only.
- **Missing the final pass** with zero swaps in a trace.
- **Swapping without `temp`.** Writing `data[i] ← data[i + 1]` then `data[i + 1] ← data[i]` loses the original value.
- **Flag not reset.** If `swapped ← False` is outside the loop, the sort never ends.
- **Merge sort halves sorted too early.** Halves are only sorted once they have been **merged**.
- **Joining lists instead of merging.** Merging compares the front items.
- **`FOR` for the outer loop.** The specification version has an indefinite outer loop.

## Key terms

| Term | Meaning |
|---|---|
| Pass | One run through the list in a bubble sort |
| Flag | A Boolean variable, here `swapped`, recording whether a swap happened |
| Recursive | An algorithm that calls itself on a smaller version of the problem |
| Merge | Combine two sorted lists into one sorted list |

## Self-test

1. State what bubble sort compares at each step.
2. State why a bubble sort needs a final pass that makes no swaps.
3. Name the type of loop used for the outer loop of the specification's bubble sort.
4. Give the list after the first pass of a bubble sort on `[4, 3, 2, 1]`.
5. Give the number of swaps made in the second pass on `[4, 3, 2, 1]`.
6. State the stopping condition of the recursion in a merge sort.
7. Merge `[2, 8]` and `[3, 4, 12]`.
8. State one advantage of merge sort over bubble sort.
9. State one advantage of bubble sort over merge sort.
10. Explain what is wrong with `data[i] ← data[i + 1]` followed by `data[i + 1] ← data[i]` as a swap.

**Answers:**
1. Two adjacent items.
2. It is the only way to know that the list is in order.
3. An indefinite (condition-controlled) loop, such as `REPEAT ... UNTIL NOT swapped`.
4. `[3, 2, 1, 4]`.
5. 2 (giving `[2, 1, 3, 4]`).
6. A list with one item is already sorted.
7. `[2, 3, 4, 8, 12]`.
8. It needs far fewer comparisons on long lists.
9. It is simpler, or needs no extra lists.
10. The first line overwrites `data[i]`, so both positions end up holding the same value; a temporary variable is
    needed.

## Related resources

- [Sorting algorithms study guide](/resources/oxfordaqa-igcse-computer-science-9210-sorting-algorithms/)
- [Sorting algorithms practice questions](/resources/oxfordaqa-igcse-computer-science-9210-sorting-algorithms-practice/)
- [Searching algorithms revision notes](/resources/oxfordaqa-igcse-computer-science-9210-searching-algorithms-revision-notes/)
