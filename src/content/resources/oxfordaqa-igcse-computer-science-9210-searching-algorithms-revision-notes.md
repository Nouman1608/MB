---
title: "OxfordAQA IGCSE Computer Science (9210): Searching algorithms -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Searching Algorithms Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1 – Algorithms"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 1.03
syllabusTopics:
  - qualification: "igcse"
    topic: "algorithms-9210"
  - qualification: "igcse"
    topic: "algorithms-9210"
    subtopic: "searching-algorithms-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.1.3: linear and iterative binary search, pseudocode, a trace and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.1.3 Searching algorithms** of OxfordAQA International GCSE Computer Science
(9210). Full explanations and traces are in the [Searching algorithms study
guide](/resources/oxfordaqa-igcse-computer-science-9210-searching-algorithms/).

## What the specification asks

- Understand and explain how **linear search** works; follow and write its pseudocode.
- Understand and explain how **binary search** works, the **iterative** version; follow and write its pseudocode.
- **Compare and contrast** the two, with the advantages and disadvantages of both.

## Linear search

Check each item in turn, from the first, until the target is found or the list ends.

```
position ← -1
i ← 0
WHILE i < LEN(data) AND position = -1
  IF data[i] = target THEN
    position ← i
  ENDIF
  i ← i + 1
ENDWHILE
```

- Works on **unsorted** and sorted lists.
- Best case 1 comparison; worst case `n` comparisons (target last or absent).
- Simple to write and to check.

## Binary search (iterative)

Needs a **sorted** list. Compare the target with the **middle** item and discard the half that cannot contain it.

```
low ← 0
high ← LEN(data) - 1
found ← False
WHILE low ≤ high AND NOT found
  mid ← (low + high) DIV 2
  IF data[mid] = target THEN
    found ← True
  ELSE IF data[mid] < target THEN
    low ← mid + 1
  ELSE
    high ← mid - 1
  ENDIF
ENDWHILE
```

| Situation | Action |
|---|---|
| `data[mid]` equals target | Found; stop |
| `data[mid]` less than target | Target is on the right; `low ← mid + 1` |
| `data[mid]` greater than target | Target is on the left; `high ← mid - 1` |
| `low` greater than `high` | Range empty; not present |

The loop ends when the item is found or the range is empty.

## Worked trace

`data = [4, 9, 15, 22, 31, 38, 44, 57, 63]`, target **38**.

| Pass | low | high | mid | data[mid] | Decision |
|---|---|---|---|---|---|
| 1 | 0 | 8 | 4 | 31 | 31 < 38, low ← 5 |
| 2 | 5 | 8 | 6 | 44 | 44 > 38, high ← 5 |
| 3 | 5 | 5 | 5 | 38 | Found at index 5 |

A target that is **not** in the list ends with `low` greater than `high`. For the target 50 in the same list the
passes use mid values of 4, 6 and 7, so it takes 3 comparisons to show that 50 is absent.

## Comparison

| | Linear | Binary |
|---|---|---|
| Sorted data needed | No | **Yes** |
| 1,000 items, worst case | 1,000 comparisons | 10 comparisons |
| Ease of writing | Easy | Harder |
| Good for | Short or unsorted lists | Long, sorted lists |

Maximum comparisons for binary search: 15 items need 4, 1,000 items need 10, 1,000,000 items need 20. Each
comparison halves the remaining list.

## Advantages and disadvantages

- **Linear, advantages:** no need to sort; simple; works on any list.
- **Linear, disadvantages:** slow for large lists, as it may check every item.
- **Binary, advantages:** very few comparisons, even for large lists.
- **Binary, disadvantages:** data must be sorted first; more complex code.

## Exam traps

- **Binary search on an unsorted list.** It can miss an item that is present. For `[9, 2, 7, 4, 1]` and target 2 it
  checks 7, then 9, and wrongly reports "not found".
- **`low ← mid` or `high ← mid`.** The checked item must be removed from the range, or the loop can repeat forever.
- **Wrong half discarded.** If `data[mid]` is too **small**, throw away the lower half.
- **Not showing `mid`.** Include `low`, `high`, `mid` and `data[mid]` on each row of a trace table.
- **"Binary is always better".** For short or unsorted lists, linear search is a sensible choice.
- **Mid on an even range.** `DIV` gives the lower of the two middle items.

## Key terms

| Term | Meaning |
|---|---|
| Target | The value being searched for |
| Index | The position of an item, starting from 0 |
| `low`, `high` | The first and last positions still being considered |
| `mid` | The middle position, `(low + high) DIV 2` |
| Iterative | Uses a loop rather than calling itself |

## Self-test

1. State what must be true of a list before a binary search can be used.
2. State the worst number of comparisons for a linear search on 250 items.
3. Give the first `mid` for a list of 9 items (indexes 0 to 8).
4. In a binary search, `data[mid]` is 20 and the target is 35. State the next line that runs.
5. State the number of comparisons a binary search needs at most for 1,000 items.
6. State one advantage of a linear search over a binary search.
7. State why `position` is set to -1 in the linear search.
8. For `[4, 9, 15, 22, 31, 38, 44, 57, 63]` and target 63, give the mid values in order.
9. Describe what happens if `low ← mid` is written instead of `low ← mid + 1`.
10. A list of 6 names is unsorted and is searched once. Name the better algorithm and say why.

**Answers:**
1. It must be sorted.
2. 250.
3. 4 (`(0 + 8) DIV 2`).
4. `low ← mid + 1`.
5. 10.
6. It works on unsorted data (or is simpler).
7. -1 is not a valid index, so it can mean "not found yet".
8. 4, 6, 7, 8.
9. The checked item stays in the range, so the loop can repeat the same values endlessly.
10. Linear search, because the list is short and unsorted, so sorting it for a binary search is not worthwhile.

## Related resources

- [Searching algorithms study guide](/resources/oxfordaqa-igcse-computer-science-9210-searching-algorithms/)
- [Searching algorithms practice questions](/resources/oxfordaqa-igcse-computer-science-9210-searching-algorithms-practice/)
- [Sorting algorithms revision notes](/resources/oxfordaqa-igcse-computer-science-9210-sorting-algorithms-revision-notes/)
