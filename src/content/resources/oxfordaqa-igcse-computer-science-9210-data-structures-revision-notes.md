---
title: "OxfordAQA IGCSE Computer Science (9210): Data structures -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.06
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "data-structures-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.2.6: arrays, two-dimensional arrays, records, arrays of records, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-17
featured: false
---

Condensed notes for section **3.2.6 Data structures** of OxfordAQA International GCSE Computer Science (9210).
Full worked examples are in the [data structures study
guide](/resources/oxfordaqa-igcse-computer-science-9210-data-structures/).

## What the specification asks

- Understand the **concept** of data structures.
- Use **arrays** (or equivalent) in the design of solutions to simple problems: **one- and two-dimensional only**;
  a Python list is acceptable.
- Use **records** (or equivalent): C# structs, Visual Basic structures, Python classes used in a non-object-oriented
  way.

## Concept

A data structure stores **several related items under one name**, organised so they can be processed together
(usually with a loop).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-data-structures--01-why-data-structures.webp" width="900" height="470" alt="Left: storing 30 marks without a data structure needs variables mark1 to mark30 and 30 separate additions. Right: an array called marks holds them all under one name with numbered indexes, and a single loop can total them whatever the number of marks." loading="lazy">
  <figcaption>A data structure stores related items under one name so one loop can process them all.</figcaption>
</figure>

## Arrays at a glance

| Feature | One-dimensional | Two-dimensional |
|---|---|---|
| Shape | A list | A table (rows and columns) |
| Indexes needed | 1: `a[i]` | 2: `t[row][col]` |
| Data types | All elements the same type | All elements the same type |
| Typical loop | One `FOR` loop | Nested `FOR` loops |
| Example | 7 daily step counts | Seats in a 10 × 20 theatre |

- Indexes start at **0** in the specification's pseudocode: an array of length `n` has indexes `0` to `n - 1`.
- `LEN(a)` gives the number of elements.
- Assignment to an element: `a[2] ← 50`.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-data-structures--02-one-dimensional-array.webp" width="900" height="553" alt="The array temps holds 14, 17, 21, 19 and 16 at indexes 0 to 4. temps[0] is 14 and temps[3] is 19; temps[1] ← 18 replaces 17; LEN(temps) is 5, so the last index is 4 and temps[5] does not exist." loading="lazy">
  <figcaption>Indexes start at 0, so the last index is always one less than the length.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-data-structures--04-two-dimensional-array.webp" width="900" height="595" alt="The sales array as a grid of 3 shops (rows 0 to 2) by 4 days (columns 0 to 3). The first index selects the row and the second the column, so sales[1][2] is 4 (shop 1, day 2) and sales[2][0] is 9 (shop 2, day 0)." loading="lazy">
  <figcaption>Two indexes: the first picks the row, the second picks the column.</figcaption>
</figure>

## Standard array algorithms

```
total ← 0                          -- total and average
FOR i ← 0 TO LEN(a) - 1
  total ← total + a[i]
ENDFOR
average ← total / LEN(a)

count ← 0                          -- count matching items
FOR i ← 0 TO LEN(a) - 1
  IF a[i] > 50 THEN
    count ← count + 1
  ENDIF
ENDFOR
```

For a 2D array, nest the loops: outer for rows, inner for columns. Reset a row total **inside** the outer loop.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-data-structures--03-find-highest-trace.webp" width="900" height="747" alt="Pseudocode that sets highest to temps[0] and loops from index 1 to LEN(temps) - 1. With temps holding 14, 18, 21, 19 and 16, highest starts at 14, becomes 18 at i = 1 and 21 at i = 2, and stays 21 for i = 3 and i = 4, so 21 is output." loading="lazy">
  <figcaption>Start from the first element, then compare the rest one index at a time.</figcaption>
</figure>

## Records at a glance

```
RECORD Car
  reg : String
  year : Integer
  price : Real
  electric : Boolean
ENDRECORD
c ← Car("KP19 XLM", 2019, 12500.0, False)
OUTPUT c.reg
```

- A record holds **fields** of **different** types about **one** item.
- Fields are reached by **name** with dot notation: `c.year`.
- An **array of records** stores many items: `garage[i].price`.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-data-structures--06-record-fields.webp" width="900" height="672" alt="A Pupil record p with four fields: name (String, &quot;Farah&quot;), yearGroup (Integer, 10), average (Real, 68.5) and hasLocker (Boolean, True). p.name gives Farah and p.average ← 70.0 changes one field; fields are reached by name, so p[1] is wrong. Equivalents: struct in C#, structure in Visual Basic, a class used without OOP in Python." loading="lazy">
  <figcaption>A record’s fields can have different data types and are reached by name, not by index.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-data-structures--07-array-of-records.webp" width="900" height="768" alt="The array form shown as a row of Pupil records, form[0], form[1], form[2] and so on, each with the fields name, yearGroup, average and hasLocker. The expression form[i].hasLocker is read left to right: form[i] selects a record, then .hasLocker selects a field inside it. A loop outputs the name of each pupil without a locker." loading="lazy">
  <figcaption>Read left to right: the index picks the record, the dot picks the field.</figcaption>
</figure>

## Array or record?

| Question to ask | If yes |
|---|---|
| Many values, all the same type? | Array |
| Values arranged as a grid or table of one type? | 2D array |
| One item with several properties of different types? | Record |
| Many items, each with several properties? | Array of records |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-data-structures--08-choosing-a-structure.webp" width="900" height="644" alt="A decision tree. One item with several fields of mixed types: a record, such as one customer’s details. Many items each with mixed fields: an array of records, such as every customer. Many items of one type: a 1D array for a list, such as 12 monthly rainfall totals, or a 2D array for a grid, such as a chessboard or marks for 25 pupils in 6 tests." loading="lazy">
  <figcaption>Same type in a list or grid: an array. Mixed types: a record. Many mixed items: an array of records.</figcaption>
</figure>

## Mini trace: a column total

```
grid ← [[3, 1, 4],
        [1, 5, 9],
        [2, 6, 5]]
colTotal ← 0
FOR row ← 0 TO 2
  colTotal ← colTotal + grid[row][2]
ENDFOR
OUTPUT colTotal
```

The column index is fixed at 2 and the row index changes, so the loop adds `4`, `9` and `5`: the output is **18**.
Fixing the row index and changing the column index instead would add along a row. In a trace, write the array out
as a grid and tick each element as it is used.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-data-structures--05-row-and-column-totals.webp" width="900" height="750" alt="The sales grid with row totals 21, 15 and 23 for shops 0 to 2 and column totals 21, 18, 6 and 14 for days 0 to 3; both add up to a grand total of 59. Below, nested FOR loops reset shopTotal to 0 inside the outer loop and add sales[shop][day] along each row." loading="lazy">
  <figcaption>Outer loop picks the row, inner loop walks along it; both directions give the same grand total, 59.</figcaption>
</figure>

## Key terms

| Term | Meaning |
|---|---|
| Data structure | An organised collection of related data stored under one name |
| Array | A fixed-size, ordered collection of elements of the same data type |
| Element | One item in an array |
| Index | The position number used to reach an element (starting at 0) |
| Two-dimensional array | An array arranged in rows and columns, reached with two indexes |
| Record | A structure of named fields that can be of different data types |
| Field | One named item of data within a record |

## Exam traps

- **Last index** is `LEN(a) - 1`, not `LEN(a)`.
- **Arrays hold one type**; mixed types need a record.
- **Row/column order**: check how the question defines `[row][col]`.
- **Highest/lowest**: start with the first element, not 0, in case all values are negative (or all above 0 for a
  lowest).
- **Totals reset** in the wrong loop give running totals instead of separate ones.
- **Field access**: `p.name`, not `p[name]` or `name.p`.
- **Dimensions**: give both, such as "8 rows by 3 columns".

## Self-test

1. Define the term data structure.
2. State one difference between an array and a record.
3. `nums ← [4, 9, 2, 7]`. State the value of `nums[2]`.
4. State the last valid index of an array with 12 elements.
5. Give the most suitable structure for the noughts and crosses board in a game.
6. Give the most suitable structure for one film's title, year, length in minutes and whether it has subtitles.
7. `grid ← [[1, 2, 3], [4, 5, 6]]`. State the value of `grid[1][0]`, using `[row][col]`.
8. How many elements does the array in question 7 hold?
9. Write code to output every element of an array `names`.
10. State the name used for the equivalent of a record in C#.
11. An array of records `team` stores players with a field `goals`. Write an expression for the goals of the
player at index `i`.
12. Explain why the code below may give the wrong lowest value: `lowest ← 0`, then a loop that sets
`lowest ← a[i]` when `a[i] < lowest`.

**Answers:**
1. An organised way of storing a collection of related data items under one name.
2. An array holds elements of the same data type reached by index; a record holds fields that can be different
types, reached by name.
3. 2.
4. 11.
5. A 3 × 3 two-dimensional array (of characters or strings).
6. A record.
7. 4.
8. 6.
9. `FOR i ← 0 TO LEN(names) - 1`, `OUTPUT names[i]`, `ENDFOR`.
10. A struct.
11. `team[i].goals`.
12. If every value is above 0, no element is less than `lowest`, so 0 is output even though it is not in the
array; start with `lowest ← a[0]`.

## Related resources

- [Data structures study guide](/resources/oxfordaqa-igcse-computer-science-9210-data-structures/)
- [Data structures practice questions](/resources/oxfordaqa-igcse-computer-science-9210-data-structures-practice/)
- [Data structures, subroutines and translators revision notes](/resources/oxfordaqa-igcse-computer-science-programming-structures-and-translators-revision-notes/)
