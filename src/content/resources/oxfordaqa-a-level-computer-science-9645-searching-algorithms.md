---
title: "OxfordAQA A-Level Computer Science (9645): Searching algorithms"
seoTitle: "OxfordAQA A-Level CS 9645 Searching Algorithms Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.4.1 in depth: linear and binary search, full traces, writing the code and comparing the two algorithms."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.4.1 Searching algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.4 Searching and sorting algorithms (AS). The specification asks you to **know the linear search algorithm and trace it**, to **know the binary search algorithm and trace it**, and to **compare** the two in terms of **time efficiency** and **the conditions under which they can be used** (whether the list has to be ordered). You may be asked to write code for both in the exam.

For quick recall use the [searching algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-searching-algorithms-revision-notes/), then try the [searching algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-searching-algorithms-practice/). The topic-level [searching and sorting study guide](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms/) covers all of 3.4; this page goes deeper on searching alone and uses different worked data. Code is Python and language-neutral pseudocode; lists are indexed from 0.

## The search problem

A search takes a **list** and a **target** and reports where the target is, or that it is absent. The usual convention is to return the **index** of the target and `-1` for "not found", because −1 can never be a valid index.

## Linear search

A **linear search** looks at each item in turn, from the first, and compares it with the target. It needs **no particular order** in the list.

The specification separates two versions.

- **Inefficient version:** always looks at every item in the list, even after finding the target.
- **More advanced version:** stops as soon as the item is found.

```
FUNCTION LinearSearch(items, target)
    FOR index ← 0 TO LENGTH(items) - 1
        IF items[index] = target THEN
            RETURN index
        ENDIF
    ENDFOR
    RETURN -1
ENDFUNCTION
```

```python
def linear_search(items, target):
    for index in range(len(items)):
        if items[index] == target:
            return index
    return -1
```

### Worked example 1: tracing a linear search

List `names = ["Ola", "Maya", "Ravi", "Sam", "Ines", "Tom", "Zoe", "Kai"]` (8 items). Count the comparisons made by the early-stopping version.

| Target | Result | Comparisons | Why |
|---|---|---|---|
| `"Ines"` | index 4 | 5 | Indexes 0 to 4 are checked; the fifth comparison succeeds |
| `"Ola"` | index 0 | 1 | Best case: first item |
| `"Kai"` | index 7 | 8 | Worst case when present: last item |
| `"Bea"` | −1 | 8 | Absent: every item must be checked |

The inefficient version would make 8 comparisons every time. Early stopping helps only when the target is present. Proving an item is **absent** from an unordered list always costs a full pass.

Detailed trace for `"Ines"`:

| index | items[index] | equal to "Ines"? |
|---|---|---|
| 0 | Ola | No |
| 1 | Maya | No |
| 2 | Ravi | No |
| 3 | Sam | No |
| 4 | Ines | Yes, return 4 |

### When linear search is the right choice

- The list is **unordered** and sorting it would cost more than the search.
- The list is **short**.
- You search only **once** for each list.

## Binary search

A **binary search** needs the list to be **in order**. It keeps two markers, `low` and `high`, around the part of the list still to be searched. It compares the **middle** item with the target.

- If they are equal, return the middle index.
- If the middle item is **smaller** than the target, the target can only be to the right, so set `low` to `mid + 1`.
- If the middle item is **larger**, the target can only be to the left, so set `high` to `mid - 1`.
- If `low` becomes greater than `high`, the range is empty and the target is not present.

Each comparison throws away about half of the remaining items.

```
FUNCTION BinarySearch(items, target)
    low ← 0
    high ← LENGTH(items) - 1
    WHILE low <= high
        mid ← (low + high) DIV 2
        IF items[mid] = target THEN
            RETURN mid
        ELSE IF items[mid] < target THEN
            low ← mid + 1
        ELSE
            high ← mid - 1
        ENDIF
    ENDWHILE
    RETURN -1
ENDFUNCTION
```

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

### Worked example 2: a successful binary search

List (15 items, indexes 0 to 14): `[4, 9, 13, 17, 22, 28, 35, 41, 47, 53, 60, 68, 74, 81, 90]`. Search for **60**.

| Pass | low | high | mid | items[mid] | Comparison | Action |
|---|---|---|---|---|---|---|
| 1 | 0 | 14 | 7 | 41 | 41 < 60 | low becomes 8 |
| 2 | 8 | 14 | 11 | 68 | 68 > 60 | high becomes 10 |
| 3 | 8 | 10 | 9 | 53 | 53 < 60 | low becomes 10 |
| 4 | 10 | 10 | 10 | 60 | equal | return 10 |

Four passes find the item. A linear search would need 11 comparisons.

### Worked example 3: an unsuccessful binary search

Search the same list for **50**.

| Pass | low | high | mid | items[mid] | Action |
|---|---|---|---|---|---|
| 1 | 0 | 14 | 7 | 41 | 41 < 50: low becomes 8 |
| 2 | 8 | 14 | 11 | 68 | 68 > 50: high becomes 10 |
| 3 | 8 | 10 | 9 | 53 | 53 > 50: high becomes 8 |
| 4 | 8 | 8 | 8 | 47 | 47 < 50: low becomes 9 |

Now `low` (9) is greater than `high` (8), so the loop ends and the function returns **−1**. Only 4 comparisons were needed to show that 50 is absent, compared with 15 for a linear search of the whole list.

### Worked example 4: a list with an even number of items

For `[3, 8, 12, 20, 25, 31, 44, 50]` (8 items), the first `mid` is (0 + 7) DIV 2 = 3, which is the **lower** of the two middle positions because DIV discards the fraction. Searching for 31: pass 1 has mid 3 (value 20, so low becomes 4); pass 2 has mid 5 (value 31), and the function returns 5 after 2 comparisons. Searching for 26: pass 1 mid 3 (20, low 4), pass 2 mid 5 (31, high 4), pass 3 mid 4 (25, low 5); now low is greater than high, and the result is −1.

Questions often tell you to use `(low + high) DIV 2`. Use the rule given, because a different rounding rule changes the trace.

## Comparing the two algorithms

| | Linear search | Binary search |
|---|---|---|
| List must be ordered? | No | **Yes** |
| Method | Check each item in turn | Halve the search range each time |
| Best case | 1 comparison | 1 comparison (middle item) |
| Worst case | *n* comparisons | About log base 2 of *n*, rounded up and plus 1 |
| Suits | Small or unsorted lists | Large, sorted lists |
| Code | Simple | Slightly more complex |

For a list of *n* items, binary search needs at most the whole-number part of log base 2 of *n*, plus 1, comparisons. Recomputed:

| Items (*n*) | Linear worst case | Binary worst case |
|---|---|---|
| 7 | 7 | 3 |
| 15 | 15 | 4 |
| 100 | 100 | 7 |
| 1,000 | 1,000 | 10 |
| 1,000,000 | 1,000,000 | 20 |

Doubling the list adds only **one** extra comparison to the binary search worst case. Formal comparisons with Big O notation (linear search O(*n*), binary search O(log *n*)) are not required at AS but may be required at A-level.

**The trade-off:** if the data is not ordered, binary search cannot be used until it has been sorted, and sorting costs time. For a list searched many times, sorting once and using binary search each time is usually worth it. For a single search of a small unsorted list, linear search wins.

## Exam technique

- **Trace with a table:** low, high, mid, the value at mid and the action. Do not skip passes.
- **State the condition for ending** in an unsuccessful search: low greater than high.
- **In comparison questions,** give both the time point (binary needs fewer comparisons on large lists) and the condition (binary needs ordered data).
- **When writing code,** check the loop condition is `low <= high`, not `low < high`.

## Common mistakes

- Using binary search on an unordered list.
- Setting `low = mid` or `high = mid` instead of `mid + 1` and `mid - 1`, which can loop forever.
- Using `low < high` and missing the last remaining item.
- Saying binary search is "always faster". For a one-item or very small list there is little difference.
- Forgetting that linear search of an absent item checks everything.
- Confusing the index (position) with the value found there.

## More on this topic

- [Searching algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-searching-algorithms-revision-notes/)
- [Searching algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-searching-algorithms-practice/)
- [Searching and sorting algorithms study guide](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.4.1 Searching algorithms.
