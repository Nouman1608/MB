---
title: "OxfordAQA IGCSE Computer Science (9210): Searching algorithms -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Searching Algorithms Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.1.3: linear search and iterative binary search, pseudocode, traces and a comparison."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.1.3 Searching algorithms** of OxfordAQA International GCSE Computer Science (9210).
You must "understand and explain how the linear search algorithm works" and "how the binary search algorithm
works", and "compare and contrast" the two. The additional information is specific. For linear search you must
"know the mechanics of the algorithm and be able to follow and write pseudo-code for it". For binary search you
must know the mechanics of **the iterative version** and be able to follow and write pseudocode for it. You also
need the **advantages and disadvantages** of both. The wider ideas of efficiency are in the [efficiency of
algorithms study guide](/resources/oxfordaqa-igcse-computer-science-9210-efficiency-of-algorithms/).

## What is a searching algorithm?

A searching algorithm finds out whether a particular value, the **target**, is in a collection of data, and often
where. In both algorithms below the data is held in a one-dimensional array called `data`, whose indexes start at 0
and finish at `LEN(data) - 1`. The result is either the **position** of the target, or a statement that it is
**not present**.

## Linear search

**Linear search** looks at each item in turn, starting from the first, and compares it with the target. It stops
when the item is found, or when it has been through the whole list.

```
position ← -1
i ← 0
WHILE i < LEN(data) AND position = -1
  IF data[i] = target THEN
    position ← i
  ENDIF
  i ← i + 1
ENDWHILE
IF position = -1 THEN
  OUTPUT "Not found"
ELSE
  OUTPUT "Found at " + INT_TO_STRING(position)
ENDIF
```

The value -1 is used because it can never be a valid array index, so it can mean "not found yet". The loop stops
for one of two reasons: the target was found (so `position` is no longer -1), or `i` has reached the end of the
list.

### Tracing a linear search

Use the sorted list of 15 numbers that is also used for the binary search later:

`data = [3, 8, 12, 17, 21, 26, 30, 35, 41, 47, 52, 58, 63, 70, 76]`

Searching for the target **47** examines the items from index 0 upwards, and finds it at index 9 after **10
comparisons**. Searching for **28**, which is not in the list, compares every item, which is **15 comparisons**.

The key points about linear search are these:

- It works on **unsorted** data as well as sorted data.
- It is easy to write and easy to check.
- On a list of `n` items, the **best case** is 1 comparison (the target is first) and the **worst case** is `n`
  comparisons (the target is last, or not there at all).

## Binary search

**Binary search** is much faster on a large list, but it only works if the list is **already sorted**. It repeatedly
compares the target with the **middle** item and throws away the half that cannot contain the target.

The iterative version uses three index variables:

- `low`, the index of the first item still being considered;
- `high`, the index of the last item still being considered;
- `mid`, the index of the middle of the range.

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
IF found THEN
  OUTPUT "Found at " + INT_TO_STRING(mid)
ELSE
  OUTPUT "Not found"
ENDIF
```

How each step works:

1. Work out the middle index using integer division. If the range has an even number of items, `DIV` picks the
   lower of the two middle items.
2. If `data[mid]` is the target, stop: it has been found.
3. If `data[mid]` is **smaller** than the target, the target must be to the right, so every item up to and
   including `mid` can be discarded: `low ← mid + 1`.
4. If `data[mid]` is **larger**, the target must be to the left, so `high ← mid - 1`.
5. Repeat while there is something left in the range (`low ≤ high`). When `low` becomes greater than `high`, the
   range is empty and the target is not present.

The `+ 1` and `- 1` matter: `mid` has just been checked, so it must not stay in the range. Writing `low ← mid`
could make the loop repeat forever.

### Trace 1: the target is present

`data = [3, 8, 12, 17, 21, 26, 30, 35, 41, 47, 52, 58, 63, 70, 76]`, target **47**.

| Pass | low | high | mid | data[mid] | Decision |
|---|---|---|---|---|---|
| 1 | 0 | 14 | 7 | 35 | 35 < 47, so low ← 8 |
| 2 | 8 | 14 | 11 | 58 | 58 > 47, so high ← 10 |
| 3 | 8 | 10 | 9 | 47 | Found at index 9 |

Three comparisons found the item, compared with 10 for the linear search of the same list.

### Trace 2: the target is absent

Target **28** in the same list.

| Pass | low | high | mid | data[mid] | Decision |
|---|---|---|---|---|---|
| 1 | 0 | 14 | 7 | 35 | 35 > 28, so high ← 6 |
| 2 | 0 | 6 | 3 | 17 | 17 < 28, so low ← 4 |
| 3 | 4 | 6 | 5 | 26 | 26 < 28, so low ← 6 |
| 4 | 6 | 6 | 6 | 30 | 30 > 28, so high ← 5 |

Now `low` is 6 and `high` is 5, so `low ≤ high` is False and the loop ends. The output is "Not found" after 4
comparisons, where the linear search needed 15.

### Why the list is halved

After one comparison, about half of the items are gone. After two, about a quarter are left, and so on. For a list
of 15 items, at most 4 comparisons are needed. For 1,000 items the maximum is 10, and for 1,000,000 items it is
20. The value is the number of times the list can be halved before nothing is left.

## Comparing linear and binary search

| | Linear search | Binary search |
|---|---|---|
| Data must be sorted? | **No** | **Yes** |
| Method | Checks items one by one | Compares with the middle, discards half |
| Worst case for 1,000 items | 1,000 comparisons | 10 comparisons |
| Simplicity | Very simple to write | More complex (three indexes, careful updates) |
| Best used when | The list is short, or unsorted, or searched only once | The list is long and already sorted, or searched many times |

**Advantages of linear search:** it works on unsorted data, it is easy to code and to test, and it needs no
preparation. **Disadvantages:** it is slow on large lists, because the number of comparisons grows in step with the
size of the list.

**Advantages of binary search:** it needs very few comparisons, even for huge lists. **Disadvantages:** the data
must be sorted first; if it is not, the data must be sorted (which takes work), or the search will give wrong
answers. It is also harder to write correctly.

A good conclusion is a conditional one: "Binary search is the better choice for a large sorted list. If the list is
unsorted, linear search is the right choice unless it will be searched many times, when sorting it once and using
binary search may be worth it."

## Worked example: choosing the algorithm

A school keeps a list of 2,000 student numbers in ascending order. The system looks up one student at a time.

*Which is better?* Binary search, because the data is already sorted and 2,000 items need at most 11
comparisons (2 to the power 11 is 2,048), against up to 2,000 for a linear search.

A teacher types in names of five pupils in the order they arrive, then searches for one of them. *Which is
better?* Linear search, because five items is a very small list, the data is not sorted, and sorting would be
more work than simply checking five items.

## Writing the pseudocode in an exam

When a question asks you to write a linear or binary search, the marking normally rewards the same features, so
check that your answer has them:

- a loop that stops when the item is found or the end is reached (linear), or when found or `low > high` (binary);
- correct indexing, starting at 0 and finishing at `LEN(data) - 1`;
- `mid` calculated **inside** the loop, using integer division;
- the correct updates `low ← mid + 1` and `high ← mid - 1`;
- an output or return that distinguishes "found" from "not found".

Pseudocode may be in any clear form. If you use a language such as Python in your own lessons, you can still write
the pseudocode with `←` and `ENDWHILE` as shown here.

## Common mistakes

- Saying binary search works on any list. It requires the list to be **sorted**.
- Describing the middle item wrongly, or discarding the wrong half. If the middle item is too small, discard the
  **lower** part.
- Forgetting `+ 1` or `- 1`, which can create an endless loop.
- Stopping the linear search loop only at the end of the list, so that it carries on after the target is found.
- Claiming that linear search is always worse. It is better for short lists and for unsorted data.
- In a trace table, not recording `mid` and `data[mid]` for each pass. Marks are lost when the working is not shown.
- Giving the number of comparisons for the wrong case (best, worst or average) without saying which.

## Exam technique

- **Trace** questions are marked on the **sequence of mid values**, so show `low`, `high` and `mid` on each pass.
- **Explain how** questions need the key idea: compare with the **middle**, then **discard half**.
- **Compare** questions need an advantage and a disadvantage of **each** algorithm, with the sorted condition
  stated clearly.
- **Suggest** questions about which search to use need a reason tied to the data (sorted or unsorted, long or short).

## Next steps

For a condensed summary and a self-test, use the [Searching algorithms revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-searching-algorithms-revision-notes/), and test yourself
with the [Searching algorithms practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-searching-algorithms-practice/).
