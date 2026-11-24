---
title: "OxfordAQA A-Level Computer Science (9645): Searching algorithms -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Searching Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 4 – Searching and sorting algorithms"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 4.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "searching-and-sorting-algorithms"
  - qualification: "a-level"
    topic: "searching-and-sorting-algorithms"
    subtopic: "searching-algorithms-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.4.1: linear and binary search, code, traces, comparison of efficiency and conditions, and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.4.1 Searching algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.4 Searching and sorting algorithms). For full traces, see the [searching algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-searching-algorithms/); then practise with the [searching algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-searching-algorithms-practice/).

## What the specification requires

- Know the **linear search** algorithm and **trace** it. You may be asked to **write code** for it.
- Know that an inefficient linear search **always looks at every item**, while a more advanced version **stops as soon as the item is found**.
- Know the **binary search** algorithm, understand how it operates, **trace** it, and possibly **write code** for it.
- **Compare** them on **time efficiency** and on the **conditions** for use (does the list have to be ordered?).
- Formal Big O comparisons are not required at AS but may be required at A-level.

## Key terms

| Term | Meaning |
|---|---|
| Target | The value being searched for |
| Linear search | Checks items one by one from the start |
| Binary search | Compares the middle item and discards half the range each time |
| low, high, mid | The ends of the remaining range and its middle position |
| Ordered list | A list sorted in ascending (or descending) order |
| Comparison | One test of an item against the target |
| Not found | Normally signalled by returning -1 |

## Linear search

```python
def linear_search(items, target):
    for index in range(len(items)):
        if items[index] == target:
            return index
    return -1
```

- Works on **any** list, ordered or not.
- Best case: 1 comparison. Worst case: *n* comparisons.
- Absent target: always *n* comparisons.

Recomputed on `["Ola", "Maya", "Ravi", "Sam", "Ines", "Tom", "Zoe", "Kai"]`:

| Target | Index returned | Comparisons |
|---|---|---|
| "Ines" | 4 | 5 |
| "Ola" | 0 | 1 |
| "Kai" | 7 | 8 |
| "Bea" | -1 | 8 |

## Binary search

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

Rules:

- The list **must be ordered**.
- `mid = (low + high) DIV 2`.
- Middle too small: `low = mid + 1`. Middle too large: `high = mid - 1`.
- Stop when found, or when `low > high` (not present).

### Trace reminder

List `[5, 12, 18, 23, 31, 39, 46, 52, 58, 67, 73, 88]` (12 items, indexes 0 to 11). Search for 46.

| Pass | low | high | mid | items[mid] | Action |
|---|---|---|---|---|---|
| 1 | 0 | 11 | 5 | 39 | 39 < 46: low = 6 |
| 2 | 6 | 11 | 8 | 58 | 58 > 46: high = 7 |
| 3 | 6 | 7 | 6 | 46 | found, return 6 |

Search for 40 on the same list: mid values are 5 (39), 8 (58) and 6 (46); after pass 3, high becomes 5 and low is 6, so the result is -1.

## Comparison

| | Linear | Binary |
|---|---|---|
| Ordered list needed? | No | Yes |
| Worst case comparisons | *n* | whole part of log base 2 of *n*, plus 1 |
| Best for | Small or unsorted lists; one-off searches | Large sorted lists; repeated searches |
| Code | Simple | More complex |

| Items | Linear worst | Binary worst |
|---|---|---|
| 12 | 12 | 4 |
| 100 | 100 | 7 |
| 2,000 | 2,000 | 11 |
| 4,000 | 4,000 | 12 |

Doubling the list adds one comparison to the binary worst case. Big O (A-level only): linear O(*n*), binary O(log *n*).

## Choosing between them

1. Is the list ordered? If not, and it will be searched once, use linear.
2. Is it small? Linear is simpler and fast enough.
3. Is it large, ordered and searched often? Use binary.
4. Is sorting needed first? Count the cost of sorting.

## Exam traps

- **Binary search needs an ordered list.** Always state this.
- **`low <= high`** is the loop condition. With `low < high`, the last item can be missed. For `[2, 4, 6, 8, 10]` that version returns -1 when searching for 10.
- **`mid + 1` and `mid - 1`.** Using `mid` alone can loop forever.
- **Absent items.** Linear checks every item; binary checks only about log base 2 of *n*.
- **Index versus value.** The function returns the index.
- **Early stopping** helps linear search only when the target is present.

## Quick self-test

1. What does a linear search return when the target is absent?
2. How many comparisons does a linear search of 50 items make when the target is absent?
3. What is the difference between the inefficient and advanced linear searches?
4. State the condition that must hold for a binary search to be used.
5. In a list of 12 items (indexes 0 to 11), what is the first `mid`?
6. What does `low` become if `items[mid]` is smaller than the target?
7. State the loop condition for binary search.
8. How does the loop end when the target is absent?
9. What is the most comparisons binary search makes on 100 items?
10. Why might linear search be chosen for an unsorted list of 20 items searched once?
11. Which search does the code `low = mid + 1` belong to?
12. For the list in the trace reminder, search for 5. Which passes occur?

### Answers

1. -1 (or another agreed "not found" value).
2. 50.
3. The inefficient version always checks every item; the advanced version stops when the item is found.
4. The list must be in order.
5. (0 + 11) DIV 2 = 5.
6. `mid + 1`.
7. `low <= high`.
8. `low` becomes greater than `high`.
9. 7.
10. No sorting is needed, and the list is small.
11. Binary search.
12. mid 5 (39, too large), mid 2 (18, too large), mid 0 (5, found): index 0 after three passes.

## More on this topic

- [Searching algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-searching-algorithms/)
- [Searching algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-searching-algorithms-practice/)
- [Searching and sorting algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.4.1 Searching algorithms.
