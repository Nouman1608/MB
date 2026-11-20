---
title: "OxfordAQA A-Level Computer Science (9645): Sorting algorithms -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Sorting Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.4.2: bubble sort and its improvements, merge sort, comparing efficiency and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.4.2 Sorting algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.4 Searching and sorting algorithms). For full worked traces, see the [sorting algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-sorting-algorithms/); then practise with the [sorting algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-sorting-algorithms-practice/).

## What the specification requires

- Know **bubble sort** and **trace** it. It is an example of a particularly inefficient sorting algorithm. You may be asked to **write code** for it.
- Know that the basic version (definite iteration) can be made more efficient by **reducing the number of items checked by one after each pass** and by **using indefinite iteration so that the sort stops when a pass makes no swaps**.
- Know **merge sort** and **demonstrate** how it operates. You will not be asked to code it.
- **Compare** bubble sort and merge sort for **time and memory**. Big O is not required at AS but may be at A-level.
- Understand that bubble sort's time efficiency **depends on how sorted the list is at the start**.

## Key terms

| Term | Meaning |
|---|---|
| Pass | One run along the list in bubble sort |
| Swap | Exchange of two neighbouring items |
| Definite iteration | A loop with a fixed number of repeats |
| Indefinite iteration | A loop that repeats until a condition is met |
| Flag | A Boolean variable, such as `swapped`, that records an event |
| Divide and conquer | Split a problem into smaller ones, solve them, combine the results |
| Merge | Combine two sorted lists into one sorted list |
| In place | Sorting using the original list, with almost no extra memory |

## Bubble sort

1. Compare each neighbouring pair from the start of the list.
2. Swap the pair if it is in the wrong order.
3. After a full pass the largest unsorted item is in its final place.
4. Repeat.

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

### Trace reminder

Sort `[6, 3, 9, 2, 7]` with the improved version. Recomputed.

| Pass | Comparisons | Swaps | List after |
|---|---|---|---|
| 1 | 4 | 6/3, 9/2, 9/7 | 3, 6, 2, 7, 9 |
| 2 | 3 | 6/2 | 3, 2, 6, 7, 9 |
| 3 | 2 | 3/2 | 2, 3, 6, 7, 9 |
| 4 | 1 | none | 2, 3, 6, 7, 9 |

Total: 10 comparisons and 5 swaps; the final pass makes no swaps, so the sort stops. The basic version makes 4 × 4 = 16 comparisons.

### Effect of starting order (six items)

| Start | Basic comparisons | Improved comparisons |
|---|---|---|
| Already sorted | 25 | 5 |
| One pair out of order at the end | 25 | 9 |
| Random | 25 | 14 (for 29, 13, 41, 7, 22, 35) |
| Reverse order | 25 | 15 |

## Merge sort

1. **Split** the list in half again and again until each part has one item.
2. **Merge** pairs of sorted parts: repeatedly compare the front items, output the smaller, and when one part runs out add the rest of the other.

### Trace reminder

Sort `[14, 6, 21, 3, 17, 9]`.

Split: [14, 6, 21] and [3, 17, 9]; then [14] and [6, 21]; [3] and [17, 9]; then single items.

| Merge | Result | Comparisons |
|---|---|---|
| [6] and [21] | [6, 21] | 1 |
| [14] and [6, 21] | [6, 14, 21] | 2 |
| [17] and [9] | [9, 17] | 1 |
| [3] and [9, 17] | [3, 9, 17] | 1 |
| [6, 14, 21] and [3, 9, 17] | [3, 6, 9, 14, 17, 21] | 5 |

Total: 10 comparisons.

## Comparing the algorithms

| | Bubble sort | Merge sort |
|---|---|---|
| Time on large lists | Slow (roughly *n* squared) | Fast (roughly *n* log *n*) |
| Depends on starting order? | Yes (improved version is quick on nearly sorted data) | Hardly |
| Memory | In place; one temporary variable | Extra memory for sub-lists |
| Simplicity | Simple | More complex, often recursive |

Worst-case comparisons: 100 items, 4,950 (bubble) against 573 (merge); 1,000 items, 499,500 against 8,977. Big O (A-level only): O(*n*²) and O(*n* log *n*).

## Exam traps

- **Neighbours only.** Bubble sort swaps adjacent items.
- **Largest first.** After pass 1, the largest item is at the end.
- **Name the improvements precisely.** One is fewer items per pass; the other is stopping when no swaps occur.
- **Indefinite iteration** is needed for the stop-on-no-swaps version.
- **Merge compares fronts.** Do not just join two lists.
- **Memory.** Merge sort needs more, not less, than bubble sort.
- **"Always faster" is false.** On an already sorted list, improved bubble sort makes one pass.

## Quick self-test

1. Which item is in its final place after pass 1 of a bubble sort into ascending order?
2. What kind of iteration does the basic bubble sort use?
3. State the two ways to make bubble sort more efficient.
4. Why does the second improvement need indefinite iteration?
5. How many comparisons does the basic bubble sort make on 5 items?
6. What is a flag, and which one does bubble sort use?
7. Describe the two stages of merge sort.
8. How are two sorted lists merged?
9. Which of the two sorts uses more memory?
10. Which is faster on a large random list?
11. Why is bubble sort quick on a nearly sorted list in the improved version?
12. Trace one pass of bubble sort on [5, 1, 4, 2, 8].

### Answers

1. The largest item.
2. Definite iteration.
3. Reduce the number of items checked by one after each pass; stop when a pass makes no swaps.
4. The number of passes is not known in advance.
5. 4 × 4 = 16.
6. A Boolean that records an event; `swapped`.
7. Split into single items; merge pairs of sorted lists.
8. Compare front items, output the smaller, and repeat; add the rest of the other list when one is empty.
9. Merge sort.
10. Merge sort.
11. It finds a pass with no swaps early and stops.
12. Swaps 5/1, 5/4, 5/2, giving [1, 4, 2, 5, 8] (8 stays at the end).

## Next steps

- [Sorting algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-sorting-algorithms/)
- [Sorting algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-sorting-algorithms-practice/)
- [Searching algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-searching-algorithms-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.4.2 Sorting algorithms.
