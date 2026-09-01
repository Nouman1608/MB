---
title: "OxfordAQA A-Level Computer Science: Static vs Dynamic Data Structures and Arrays (9645)"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamental data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamental-data-structures"
    subtopic: "arrays-and-lists-oxfordaqa-alevel-cs"
description: "Static vs dynamic data structures, and using one- and two-dimensional arrays and lists to solve problems -- the introduction and 3.2.1 of OxfordAQA International AS and A-Level Computer Science (9645)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

This guide covers the introduction to **3.2 Fundamental Data
Structures** and its first sub-topic, **3.2.1 Arrays and Lists**, from
OxfordAQA International AS and A-level Computer Science (9645), Version
1.1, International AS exams May/June 2025 onwards, International
A-level exams May/June 2026 onwards.

## Syllabus coverage

**OXFORDAQA INTERNATIONAL AS AND A-LEVEL COMPUTER SCIENCE (9645) — 3.2 FUNDAMENTAL DATA STRUCTURES (INTRODUCTION)**

Students should be familiar with the concept of data structures, and be
able to distinguish between static and dynamic data structures,
compare their uses, and explain the advantages and disadvantages of
each.

**3.2.1 ARRAYS AND LISTS**

Students should be able to use arrays and lists when solving problems,
including the use of two-dimensional arrays and lists of lists. The
specification notes that Python does not contain built-in support for
arrays, but students can use arrays by importing the array module
(which currently does not support string elements or multi-dimensional
arrays) or the numpy module; in programming exams, it is acceptable to
use either lists or arrays to solve a problem unless the question
states that one specifically must be used, and students will not be
required to use arrays of more than two dimensions in exam questions
(though they may do so if they wish).

## How to approach it

Start with the static-versus-dynamic distinction, since it frames
everything else in 3.2. A static data structure has a fixed size set
at creation, which cannot change during a program's execution — the
classic example is a traditional array. A dynamic data structure can
grow or shrink while the program runs, adjusting its size to fit the
data it holds — Python's built-in list is the working example students
meet immediately in this specification. Be ready to give one advantage
and one disadvantage of each: a static structure typically offers
faster, more predictable access because its memory layout doesn't
change, but wastes memory if oversized or fails if undersized; a
dynamic structure adapts flexibly to varying amounts of data, but that
flexibility can bring extra overhead when the structure needs to
resize.

For arrays and lists specifically, this specification is explicit about
language reality: Python does not have a built-in array type in the way
languages like C# or Java do, so students working in Python typically
use lists (which behave dynamically) even when a question is
conceptually about arrays (which are static). Know which behaviour your
own course's practical language actually gives you, and be ready to
explain a two-dimensional array or list-of-lists as a structure indexed
by two coordinates — commonly row and column — used to represent
tabular or grid-based data.

## Worked example: static vs dynamic, applied to a scenario

A question asks candidates to justify whether a static or dynamic data
structure is more appropriate for storing daily temperature readings
throughout a calendar year (365 or 366 known values), versus storing
an unknown, growing list of high scores submitted by players in a game.

```
Temperature readings:
  Choice:        static (array)
  Justification: the exact number of readings (365 or 366) is known in
                 advance and fixed once the year is defined, so a
                 static structure avoids the overhead of resizing and
                 gives fast, predictable indexed access to any day's
                 reading

High scores:
  Choice:        dynamic (list)
  Justification: the number of scores is not known in advance and
                 grows as players submit new scores, so a dynamic
                 structure that can expand as needed is more
                 appropriate than a fixed-size structure that would
                 need to be resized or risk running out of space
```

Justifying the choice against the specific nature of the data — known
and fixed, versus unknown and growing — is exactly what this sub-topic
is assessing, more than simply naming "array" or "list" correctly.

## Key terms to define precisely

**Data structure** — an organised way of storing and accessing data
suited to a particular task. **Static data structure** — a data
structure whose size is fixed at the point of creation and does not
change during program execution. **Dynamic data structure** — a data
structure that can grow or shrink in size while a program is running,
allocating or releasing memory as needed. **Array** — a static,
fixed-size, indexed collection of elements of the same data type.
**List** — in Python, a dynamic, indexed collection that can hold
elements and change size during execution; distinct from the more
restrictive, static array concept even though both are indexed
sequences. **Two-dimensional array/list of lists** — a structure
indexed by two coordinates, typically row and column, used to model
tabular or grid-based data such as a spreadsheet or a game board.
Keeping the words "array" and "list" mapped correctly to "static" and
"dynamic" respectively — rather than treating all indexed collections
as one interchangeable category — is the specific vocabulary precision
this sub-topic rewards.

## Common mistakes

Describing arrays and lists as interchangeable terms without
acknowledging the static/dynamic distinction the specification
explicitly draws between them. Choosing a data structure for a
scenario without justifying the choice against whether the data size is
known and fixed, or unknown and changing. Assuming exam questions will
require arrays of more than two dimensions, when the specification
caps required exam content at two dimensions. Forgetting that Python's
own built-in list behaves dynamically even in contexts where the
underlying concept being tested is a static array.

## Quick revision checklist

- Be able to define static and dynamic data structures and give one
advantage and one disadvantage of each.
- Know that Python's built-in list is dynamic, and that true
fixed-size arrays require the array or numpy module.
- Practise justifying a data-structure choice against whether the
number of elements is known in advance.
- Be comfortable using two-dimensional arrays or lists of lists, indexed
by row and column.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645)
specification, Version 1.1 —
[oxfordaqa.com/9645](https://www.oxfordaqa.com/wp-content/uploads/2024/04/oxfordaqa-a-level-computer-science-specification.pdf).
