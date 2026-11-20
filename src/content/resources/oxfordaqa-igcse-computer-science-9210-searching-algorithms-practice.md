---
title: "OxfordAQA IGCSE Computer Science (9210): Searching algorithms -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 Searching Algorithms Practice"
resourceType: "practice-questions"
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
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on linear search, iterative binary search, traces and comparing the two."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Searching algorithms study guide](/resources/oxfordaqa-igcse-computer-science-9210-searching-algorithms/) | [Searching algorithms revision notes](/resources/oxfordaqa-igcse-computer-science-9210-searching-algorithms-revision-notes/)

These questions cover section 3.1.3 Searching algorithms of the OxfordAQA International GCSE Computer Science
(9210) specification.

---

## Section A

**1.** State one condition that must be met before a binary search can be used. **[1]**

**2.** Describe how a linear search finds a value in a list. **[2]**

**3.** A sorted list contains 500 items.

**(a)** State the greatest number of items a linear search might have to look at. **[1]**

**(b)** State the greatest number of comparisons a binary search needs. **[1]**

**4.** In the binary search below, `low` is 5 and `high` is 8.

```
mid ← (low + high) DIV 2
```

State the value of `mid`. **[1]**

## Section B

**5.** The array `data` holds `[7, 3, 9, 3, 5]`. This linear search looks for the target 3.

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

**(a)** Complete the trace table for `target ← 3`. **[3]**

| i | data[i] | position |
|---|---|---|
| 0 | 7 | |
| 1 | 3 | |

**(b)** State why the second 3 in the list is never examined. **[1]**

**6.** The array `data` holds the sorted values `[4, 9, 15, 22, 31, 38, 44, 57, 63]`. A binary search looks for the
target 38.

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

**(a)** Complete the trace table. **[4]**

| Pass | low | high | mid | data[mid] |
|---|---|---|---|---|
| 1 | 0 | 8 | | |

**(b)** State the index at which 38 is found. **[1]**

**7.** The same binary search is used with the target 50 on the same array.

**(a)** State the `mid` value on each pass. **[2]**

**(b)** State the values of `low` and `high` when the loop ends and explain why the loop ends. **[2]**

**8.** A programmer changes the line `low ← mid + 1` to `low ← mid`, and runs the search with the target 63.

**(a)** Explain what happens when `low` is 7 and `high` is 8 and `data[7]` is smaller than the target. **[2]**

**(b)** State what the programmer should do to correct the code. **[1]**

**9.** Write pseudocode for a linear search of the array `names` for the value held in `target`. The algorithm
should output the index at which it is found, or the text `"Not found"`. **[4]**

**10.** For each situation, name the more suitable search algorithm and justify your choice.

**(a)** An unsorted list of 12 names is searched once. **[2]**

**(b)** A sorted list of 100,000 account numbers is searched many times each day. **[2]**

**11.** A programmer uses a binary search on the unsorted array `[9, 2, 7, 4, 1]` with the target 2. Show what
happens and explain the problem. **[3]**

**12.** Compare linear search and binary search. Give one advantage and one disadvantage of each. **[4]**

---

## Answers

**1.** The list (data) must be sorted [1].

**2.** It compares the target with each item in turn starting from the first [1]; it stops when the target is found
or when the end of the list is reached [1].

**3.** **(a)** 500 [1]. **(b)** 9 [1] (2 to the power 9, less 1, is 511, which is at least 500, whereas 255 is not).

**4.** 6 [1].

**5.** **(a)**

| i | data[i] | position |
|---|---|---|
| 0 | 7 | -1 |
| 1 | 3 | 1 |

`position` stays -1 at i = 0 [1]; position becomes 1 at i = 1 [1]; the table stops after i = 1 because the loop
condition is then False [1].
**(b)** Once `position` is no longer -1 the loop condition is False, so the loop stops [1].

**6.** **(a)**

| Pass | low | high | mid | data[mid] |
|---|---|---|---|---|
| 1 | 0 | 8 | 4 | 31 |
| 2 | 5 | 8 | 6 | 44 |
| 3 | 5 | 5 | 5 | 38 |

Pass 1 mid and data[mid] [1]; pass 2 low and high [1]; pass 2 mid and data[mid] [1]; pass 3 all correct [1].
**(b)** Index 5 [1].

**7.** **(a)** 4, 6 and 7 [2] (1 mark for the first two values, 1 for the third).
**(b)** `low` is 7 and `high` is 6 [1]; `low` is greater than `high`, so the range is empty and the target is not
present [1].

**8.** **(a)** `mid` is 7 and `data[7]` is 57, which is smaller than 63, so `low` stays at 7 [1]; the same values are
repeated on every pass, so the loop never ends [1].
**(b)** Change it back to `low ← mid + 1` [1].

**9.** One possible answer:

```
position ← -1
i ← 0
WHILE i < LEN(names) AND position = -1
  IF names[i] = target THEN
    position ← i
  ENDIF
  i ← i + 1
ENDWHILE
IF position = -1 THEN
  OUTPUT "Not found"
ELSE
  OUTPUT position
ENDIF
```

Loop through the indexes from 0 to `LEN(names) - 1` [1]; comparison of each item with the target [1]; stops or
records the position when found [1]; correct final output for found and not found [1].

**10.** **(a)** Linear search [1], because the list is unsorted and short, so sorting it would be more work than
searching it once [1].
**(b)** Binary search [1], because the list is already sorted and long, and it needs only a few comparisons
(at most 17) per search [1].

**11.** The middle item is 7, which is greater than 2, so the search discards the right half [1]; the next middle
item is 9, which is greater than 2, so the left side is discarded and the range becomes empty [1]; it reports "not
found" even though 2 is in the list, because the data is not sorted [1].

**12.** Linear advantage: works on unsorted data, or is simple to write [1]. Linear disadvantage: slow on large lists
because it may check every item [1]. Binary advantage: needs very few comparisons, even for large lists [1].
Binary disadvantage: the data must be sorted first, or the code is more complex [1].

---

## Where marks are usually lost

- Forgetting that binary search needs a sorted list, as in Question 11.
- Not showing `mid` and `data[mid]` in the trace table for Question 6.
- Stating the wrong number of comparisons for the best, worst or average case without saying which.
- Writing `low ← mid` or `high ← mid` instead of moving past the item just checked.
- Not showing what the loop condition does at the end of the trace.
