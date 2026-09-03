---
title: "AQA A-Level Computer Science: Data Structures and Arrays — Revision Notes"
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
description: "Condensed recall notes on the definition of a data structure and using single- and multi-dimensional arrays, for AQA A-Level Computer Science (7517), 3.2.1.1 and 3.2.1.2."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Data Structures and Arrays study guide](/resources/a-level-aqa-computer-science-data-structures-and-arrays/).

## What is a data structure? (3.2.1.1)

**Data structure** — a way of **organising, storing and accessing data** so it can be used efficiently for a given task. Learn this precise definition, not a looser one, since exam answers are marked against it. The specification expects you to demonstrate data structures **in a practical context**, not just define the term abstractly.

## Arrays: vectors, matrices and the general case (3.2.1.2)

| Dimensions | Represents | Indexing |
|---|---|---|
| **1-D array** | A **vector** — a single ordered list | One index |
| **2-D array** | A **matrix** — values in rows and columns | Two indices (row, column) |
| **n-D array** | A set of elements indexed by a **tuple of n integers** | n indices |

Arrays hold elements of the **same data type**. AQA's pseudocode (and most languages used for practical work) indexes arrays **from 0**.

**Vector vs. matrix, precisely:**

- A 1-D array is useful for representing a **vector**.
- A 2-D array is useful for representing a **matrix**.
- More generally, an n-dimensional array is a set of elements with the same data type, indexed by a **tuple** of n integers — an ordered list of index values, one per dimension.

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

## Distinguishing dimensionality from size

Two different ideas that are easy to blur:

- **Dimensionality** — how many indices are needed to locate one element (1-D, 2-D, n-D).
- **Size** — how many elements the array holds in total (e.g. a 7×3 array holds 21 elements).

An array can be large in size but still one-dimensional (a 1-D array of 100 values), or small in size but two-dimensional (a 2×2 array of 4 values) — keep these independent when describing or declaring an array in an answer.

## Why this content underpins the rest of the specification

Data structures and arrays are the foundation the rest of Topic 2 builds on: fields, records and files (3.2.1.3) group array-like data with named fields; more advanced structures later in the course (stacks, queues, trees, linked lists) are frequently implemented internally using arrays or the same indexing logic covered here. Being genuinely fluent with array declaration, indexing and iteration now — rather than treating it as a quick topic to memorise and move past — pays off directly when those later, more complex structures are introduced, since exam questions on them regularly assume this array fluency as a prerequisite rather than re-teaching it.

## Key terms

**Data structure** — a way of organising, storing and accessing data efficiently for a task. **Vector** — a 1-D, ordered collection of same-type values, each accessed by one index. **Matrix** — a 2-D arrangement of values in rows and columns, each accessed by a pair of indices. **Tuple** — an ordered list of elements; used to describe how one element in an n-D array is located (n integers, one per dimension). **Index** — the position used to access a specific array element; AQA pseudocode indexes from 0.

## Practising array operations directly

Beyond defining and justifying array structures, be comfortable writing and tracing short pseudocode that declares an array, loops through it, and reads or updates a specific element -- for example, a FOR loop that sums every value in a one-dimensional array, or nested FOR loops that visit every element of a two-dimensional array row by row. Exam questions frequently combine the conceptual justification (why this structure) with a short practical task (write or complete the code that uses it), so revising the two together, rather than treating theory and practical coding as separate revision activities, better matches how this sub-topic is actually assessed.

## Common mistakes

- Describing an array only as "a list of values" without reference to indexing or dimensionality.
- Confusing a 1-D array (vector) with a 2-D array (matrix) when justifying a structure choice.
- Reaching for 21 separate variables instead of a structured array when the data is clearly indexable.
- Miscounting indices when describing how to access an element in a multi-dimensional array.
- Forgetting that AQA's pseudocode indexes **from 0**, not 1, when writing or tracing code.

## A note on "(or equivalent)"

AQA's specification says arrays "(or equivalent)" because different languages implement the same underlying concept differently — Python's lists, for example, serve a similar role. Know how arrays are declared, indexed and iterated over in **whichever language your course actually uses** for practical work, since the underlying concept (organising same-type data for indexed access) is what's assessed, not one specific language's syntax.

## Quick self-test

- Give the specification's precise definition of a data structure.
- State what a 1-D array represents, and what a 2-D array represents.
- For a program storing 5 students' scores across 3 tests, state the array dimensions needed and what each index represents.
- Explain the difference between an array's dimensionality and its size, with an example of each.
- State what index number AQA's pseudocode conventions start from.

## Related resources

[Data Structures and Arrays study guide](/resources/a-level-aqa-computer-science-data-structures-and-arrays/) |
[Data Structures and Arrays practice questions](/resources/aqa-a-level-computer-science-data-structures-practice/)

## Official syllabus

AQA A-Level Computer Science (7517) specification, first teaching 2015
—
[aqa.org.uk/7517](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
