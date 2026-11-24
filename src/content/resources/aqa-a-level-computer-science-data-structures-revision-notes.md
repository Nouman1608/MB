---
title: "AQA A-Level Computer Science: Data Structures and Arrays — Revision Notes"
seoTitle: "AQA A-Level Computer Science Data Structures & Arrays Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "data-structures-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "single-and-multi-dimensional-arrays-7517"
description: "Recall notes for AQA A-Level Computer Science 7517 sections 4.2.1.1 and 4.2.1.2: the definition of a data structure, vectors, matrices and n-dimensional arrays."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by harris-khan on 2026-09-29; 2026-11-08: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-09-02
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Data Structures and Arrays study guide](/resources/a-level-aqa-computer-science-data-structures-and-arrays/).

## What is a data structure? (4.2.1.1)

**Data structure** — a way of **organising, storing and accessing data** so it can be used efficiently for a given task. Learn this precise definition, not a looser one, since exam answers are marked against it. The specification expects you to demonstrate data structures **in a practical context**, not just define the term abstractly.

## Arrays: vectors, matrices and the general case (4.2.1.2)

| Dimensions | Represents | Indexing |
|---|---|---|
| **1-D array** | A **vector** — a single ordered list | One index |
| **2-D array** | A **matrix** — values in rows and columns | Two indices (row, column) |
| **n-D array** | A set of elements indexed by a **tuple of n integers** | n indices |

Arrays hold elements of the **same data type**. AQA sets no pseudocode convention of its own at AS or A-level, so check whether the language or convention your course uses indexes arrays from 0 or from 1.

**Vector vs. matrix, precisely:**

- A 1-D array is useful for representing a **vector**.
- A 2-D array is useful for representing a **matrix**.
- More generally, an n-dimensional array is a set of elements with the same data type, indexed by a **tuple** of n integers — an ordered list of index values, one per dimension.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-computer-science-data-structures-and-arrays--01-ds-vector.webp" width="900" height="700" alt="A row of seven array cells numbered 0 to 6, each holding one value of the same type. One index, 3, points at one cell, which holds 23 (illustrative value)." loading="lazy">
  <figcaption>A one-dimensional array is a vector: an ordered list of same-type values, each reached with a single index.</figcaption>
</figure>

## Worked example: choosing the right dimensionality

A program must store the temperature at 7am, 1pm and 7pm for each of 7 days.

```
Data needed:   3 readings x 7 days = 21 values, naturally organised
               by day AND time of day
Structure:     a 2-D array, e.g. temperatures[7][3]
Justification: index 1 = day (0-6); index 2 = time slot (0-2);
               this lets the program access, update, or loop
               through any single reading, a whole day, or one
               time slot across all days, using index logic --
               rather than declaring 21 separate variables
```

**Justify the choice by how the data will actually be accessed**, not just that "it fits" — this is what the sub-topic is really testing. Stating the number of dimensions needed, and naming what each index represents, is a stronger answer than simply writing "use an array."

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-computer-science-data-structures-and-arrays--02-ds-matrix.webp" width="900" height="810" alt="A grid with 7 rows for days 0 to 6 and 3 columns for the 7am, 1pm and 7pm readings, giving 21 cells. The cell at row 4, column 1 is highlighted and labelled temperatures[4][1]." loading="lazy">
  <figcaption>temperatures[7][3] stores 3 readings x 7 days = 21 values; the first index is the day and the second is the time slot.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-computer-science-data-structures-and-arrays--03-ds-access.webp" width="900" height="690" alt="Three copies of the 7 by 3 temperature grid. In the first, one cell is highlighted: a single reading. In the second, one row of 3 cells: all readings for one day. In the third, one column of 7 cells: one time slot across all days." loading="lazy">
  <figcaption>Two indices let a program reach one reading, a whole day, or one time slot across all days, instead of 21 separate variables.</figcaption>
</figure>

## Distinguishing dimensionality from size

Two different ideas that are easy to blur:

- **Dimensionality** — how many indices are needed to locate one element (1-D, 2-D, n-D).
- **Size** — how many elements the array holds in total (e.g. a 7×3 array holds 21 elements).

An array can be large in size but still one-dimensional (a 1-D array of 100 values), or small in size but two-dimensional (a 2×2 array of 4 values) — keep these independent when describing or declaring an array in an answer.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-computer-science-data-structures-and-arrays--04-ds-dimensions.webp" width="900" height="1060" alt="Three arrays. A 1D array of 5 cells needs 1 index. A 2D array of 3 rows by 4 columns has 12 elements and needs 2 indices. A 3D array of 2 by 3 by 4 has 24 elements and needs 3 indices. Dimensions count the indices; size counts the elements." loading="lazy">
  <figcaption>Dimensionality is how many indices locate an element; size is how many elements the array holds.</figcaption>
</figure>

## Why this content underpins the rest of the specification

Data structures and arrays are the foundation the rest of Topic 2 builds on: fields, records and files (4.2.1.3) group array-like data with named fields; and the named abstract data types (4.2.1.4 onward — queues, stacks, graphs, trees, hash tables, dictionaries, vectors) are frequently implemented internally using arrays or the same indexing logic covered here. Being genuinely fluent with array declaration, indexing and iteration now — rather than treating it as a quick topic to memorise and move past — pays off directly when those later, more complex structures are introduced, since exam questions on them regularly assume this array fluency as a prerequisite rather than re-teaching it.

## Key terms

**Data structure** — a way of organising, storing and accessing data efficiently for a task. **Vector** — a 1-D, ordered collection of same-type values, each accessed by one index. **Matrix** — a 2-D arrangement of values in rows and columns, each accessed by a pair of indices. **Tuple** — an ordered list of elements; used to describe how one element in an n-D array is located (n integers, one per dimension). **Index** — the position used to access a specific array element; AQA sets no pseudocode convention of its own at this level, so check whether your course indexes from 0 or from 1.

## Practising array operations directly

Beyond defining and justifying array structures, be comfortable writing and tracing short pseudocode that declares an array, loops through it, and reads or updates a specific element -- for example, a FOR loop that sums every value in a one-dimensional array, or nested FOR loops that visit every element of a two-dimensional array row by row. Exam questions frequently combine the conceptual justification (why this structure) with a short practical task (write or complete the code that uses it), so revising the two together, rather than treating theory and practical coding as separate revision activities, better matches how this sub-topic is actually assessed.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-aqa-computer-science-data-structures-and-arrays--05-ds-index-origin.webp" width="900" height="740" alt="The same four-cell array A, B, C, D drawn twice. Indexed from 0 the cells are numbered 0 to 3, so the third element C is at index 2. Indexed from 1 they are numbered 1 to 4, so C is at index 3." loading="lazy">
  <figcaption>The same element has a different index depending on the origin your course uses, so check it before relying on either.</figcaption>
</figure>

## Common mistakes

- Describing an array only as "a list of values" without reference to indexing or dimensionality.
- Confusing a 1-D array (vector) with a 2-D array (matrix) when justifying a structure choice.
- Reaching for 21 separate variables instead of a structured array when the data is clearly indexable.
- Miscounting indices when describing how to access an element in a multi-dimensional array.
- Assuming a fixed index origin instead of checking whether your course's language or convention indexes **from 0** or **from 1**.

## A note on "(or equivalent)"

AQA's specification says arrays "(or equivalent)" because different languages implement the same underlying concept differently — Python's lists, for example, serve a similar role. Know how arrays are declared, indexed and iterated over in **whichever language your course actually uses** for practical work, since the underlying concept (organising same-type data for indexed access) is what's assessed, not one specific language's syntax.

## Quick self-test

- Give the specification's precise definition of a data structure.
- State what a 1-D array represents, and what a 2-D array represents.
- For a program storing 5 students' scores across 3 tests, state the array dimensions needed and what each index represents.
- Explain the difference between an array's dimensionality and its size, with an example of each.
- State why you should check your own course's index origin rather than assume one, since AQA sets no pseudocode convention of its own at this level.

## Frequently asked questions

**What is an n-dimensional array in AQA A-Level Computer Science?**
An n-dimensional array is a set of elements of the same data type, indexed by a tuple of n integers, where a tuple is an ordered list with one index value per dimension.

**Can an array be large but still one-dimensional?**
Yes. Dimensionality and size are independent: a 1-D array can hold 100 values, while a 2×2 array is two-dimensional but holds only 4 values.

**Why do arrays matter for the rest of AQA 7517 data structures?**
Records, files and abstract data types such as queues, stacks, graphs and hash tables are often implemented using arrays or the same indexing logic, so later questions assume array fluency.

**Do all elements of an array have to be the same data type?**
Yes. In the AQA 7517 definition, an array holds elements of the same data type.

## More resources on this topic

[Data Structures and Arrays study guide](/resources/a-level-aqa-computer-science-data-structures-and-arrays/) |
[Data Structures and Arrays practice questions](/resources/aqa-a-level-computer-science-data-structures-practice/)

## Official syllabus

AQA A-Level Computer Science (7517) specification, first teaching 2015
—
[aqa.org.uk/7517](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
