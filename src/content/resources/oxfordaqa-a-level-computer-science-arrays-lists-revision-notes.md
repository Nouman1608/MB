---
title: "OxfordAQA A Level Computer Science: Arrays and Lists — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamental data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamental-data-structures"
    subtopic: "arrays-and-lists-oxfordaqa-alevel-cs"
description: "Condensed recall notes on static vs dynamic data structures, and one/two-dimensional arrays and lists, for OxfordAQA International A-Level Computer Science (9645), sub-topic 3.2.1."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Arrays and Lists study guide](/resources/a-level-oxfordaqa-computer-science-arrays-and-lists/).

## Static vs dynamic

| | Static | Dynamic |
|---|---|---|
| Size | Fixed at creation | Grows/shrinks during execution |
| Example | Traditional array | Python's built-in list |
| Advantage | Fast, predictable access | Adapts flexibly to varying data |
| Disadvantage | Wastes memory if oversized, fails if undersized | Extra overhead when resizing |

**Python has no built-in array type** — students typically use lists (dynamic) even for conceptually static-array questions, unless using the `array` module (no strings, no multi-dimensional) or `numpy`.

## Worked example: choosing a structure

Storing daily temperature readings for a year (365/366 known values) vs an unknown, growing list of game high scores.

```
Temperatures: STATIC (array) -- exact count known and fixed in
              advance, so a static structure avoids resizing
              overhead and gives fast, predictable indexed access
High scores:  DYNAMIC (list) -- count unknown and growing, so a
              structure that expands as needed is appropriate
```

Justifying the choice against **whether the data size is known and fixed, or unknown and growing** is what this sub-topic assesses — more than naming "array" or "list" correctly.

## Two-dimensional structures

A 2D array/list of lists is indexed by **two coordinates** (typically row, column) — used for tabular or grid-based data (a spreadsheet, a game board). Exam questions **will not require more than two dimensions**.

## Worked example: describing a 2D structure

A program needs to store the seating arrangement of a small cinema with 6 rows and 10 seats per row, where each seat is either booked or free.

```
Structure:  a two-dimensional array/list of lists, 6 rows x 10
            columns
Indexing:   seating[row][seat] -- e.g. seating[2][5] accesses row
            index 2, seat index 5 (using zero-based indexing, this
            is the 3rd row, 6th seat)
Content:    each element holds a boolean or simple value representing
            booked/free status for that specific seat
```

Being explicit about how the two coordinates map onto the real-world scenario (row = physical row, column = seat number within the row) is what distinguishes a strong answer from one that only states "use a 2D array" without describing the indexing scheme.

## Why the static/dynamic distinction frames the rest of 3.2

This sub-topic's static-versus-dynamic framing recurs across every later data structure in Fundamental Data Structures (stacks, queues, trees, hash tables) covered elsewhere in 3.2 -- each later structure is itself built as either a static or dynamic implementation, and being able to say which, and why that choice suits the structure's typical use case, is a skill introduced here and reused throughout the rest of the topic. Treat the advantages and disadvantages named in this sub-topic (predictable access vs resizing overhead) as a template applied again to every subsequent data structure, not content specific to arrays and lists alone.

## Key terms

**Data structure** — an organised way of storing and accessing data suited to a task. **Static data structure** — fixed size at creation, unchanged during execution. **Dynamic data structure** — can grow/shrink while the program runs. **Array** — a static, fixed-size, indexed collection of same-type elements. **List** (Python) — a dynamic, indexed collection.

## Programming-exam flexibility

In programming exam questions, it is acceptable to use either lists or arrays to solve a problem unless the question specifically states which must be used -- so don't assume a question phrased around "array" requires the array/numpy module in Python specifically if lists would solve the problem equally well and no data type is mandated.

## Common mistakes

- Describing arrays and lists as interchangeable without acknowledging the static/dynamic distinction.
- Choosing a data structure without justifying the choice against whether the size is known/fixed or unknown/changing.
- Assuming exam questions require more than two dimensions.
- Forgetting Python's list behaves dynamically even when the underlying concept tested is a static array.

## Quick self-test

1. Give one advantage and one disadvantage of a static data structure.
2. Why does Python typically use lists even for conceptually "array" problems?
3. A scenario has a known, fixed number of elements. Which structure type is more appropriate?
4. What are the two coordinates typically used to index a 2D array?
5. What is the maximum number of dimensions required in this specification's exam questions?
6. Describe how you would index a specific seat in a 6-row, 10-seats-per-row cinema layout stored as a 2D structure.

**Answers:** 1. Advantage: fast, predictable access since memory layout doesn't change. Disadvantage: wastes memory if oversized, or fails if undersized. 2. Because Python has no built-in fixed-size array type; its built-in list behaves dynamically, so it is used even when a question is conceptually about a static array. 3. A static structure (array), since the fixed size avoids resizing overhead and gives fast indexed access. 4. Row and column. 5. Two dimensions. 6. seating[row][seat], e.g. seating[2][5] for row index 2, seat index 5, using zero-based indexing so this is physically the 3rd row and 6th seat.

## Vocabulary precision matters

Keeping the words "array" and "list" mapped correctly to "static" and "dynamic" respectively -- rather than treating all indexed collections as one interchangeable category -- is the specific vocabulary precision this sub-topic rewards in written exam answers, even when your practical programming work uses Python lists throughout.

## Related resources

- [Arrays and Lists study guide](/resources/a-level-oxfordaqa-computer-science-arrays-and-lists/)
- [Arrays and Lists practice questions](/resources/oxfordaqa-a-level-computer-science-arrays-lists-practice/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1 —
[oxfordaqa.com/9645](https://www.oxfordaqa.com/wp-content/uploads/2024/04/oxfordaqa-a-level-computer-science-specification.pdf).
