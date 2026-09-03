---
title: "AQA A-Level Computer Science: Data Structures and Arrays (7517)"
resourceType: "study-guides"
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
description: "The concept of a data structure, and the use of single- and multi-dimensional arrays to solve simple problems -- 3.2.1.1 and 3.2.1.2 of AQA A-Level Computer Science (7517)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

This guide covers **3.2.1.1 Data structures** and **3.2.1.2 Single- and
multi-dimensional arrays (or equivalent)**, from AQA A-Level Computer
Science (7517), first teaching 2015. These sub-topics open 3.2.1 Data
Structures and Abstract Data Types, within Topic 2 Fundamentals of Data
Structures.

## Scope of this guide

3.2.1 has three sub-topics: 3.2.1.1 and 3.2.1.2 (covered here), and
3.2.1.3 Fields, Records and Files, which covers reading and writing
text and binary files. This resource focuses on the conceptual and
array-based content that underpins the rest of the data structures
section; file handling is left for a separate resource.

## Syllabus coverage

**AQA A-LEVEL COMPUTER SCIENCE (7517) — 3.2.1.1 DATA STRUCTURES**

Students should be familiar with the concept of a data structure. The
specification's own guidance suggests setting this concept in contexts
students may already be familiar with, and demonstrating how data
structures can be used in a practical setting.

**3.2.1.2 SINGLE- AND MULTI-DIMENSIONAL ARRAYS (OR EQUIVALENT)**

Students should be able to use arrays (or equivalent) in the design of
solutions to simple problems. A one-dimensional array is a useful way
of representing a vector. A two-dimensional array is a useful way of
representing a matrix. More generally, an n-dimensional array is a set
of elements with the same data type, indexed by a tuple of n integers,
where a tuple is an ordered list of elements.

## How to approach it

Start from the specification's own definition rather than a looser,
informal one: a data structure is a way of organising and storing data
so that it can be accessed and used efficiently for a given task. Being
able to define this precisely, and then justify why a particular
structure suits a particular problem, is what separates description
from application in exam answers.

For arrays, the specification's language is precise and worth
mirroring exactly. A one-dimensional array represents a vector — a
single ordered list of values, each accessed by one index. A
two-dimensional array represents a matrix — values arranged in rows and
columns, each accessed by two indices (row, column). The general
n-dimensional case extends this: an element is located by a tuple of n
integers, one per dimension. When asked to choose or justify a data
structure for a scenario, explicitly naming the number of dimensions
needed and why is a stronger answer than simply saying "use an array."

Since AQA's specification says "(or equivalent)" for arrays, be aware
that different exam boards' pseudocode and different programming
languages (Python lists, for example) implement the same underlying
concept slightly differently — know how arrays are declared, indexed
(from 0, per AQA's pseudocode conventions) and iterated over in
whichever language your course uses for practical work.

## Worked example: choosing an array dimension for a problem

A question describes a program that needs to store the temperature
recorded at 7am, 1pm and 7pm for each of the 7 days in a week, and asks
which data structure is most appropriate.

```
Data needed:     3 readings x 7 days = 21 values, naturally organised
                 by day and by time of day
Structure:       a two-dimensional array, e.g. temperatures[7][3]
Justification:   the first index represents the day (0-6), the second
                 represents the time slot (0-2 for 7am/1pm/7pm); this
                 lets the program access, update or loop through any
                 single reading, an entire day's readings, or a single
                 time slot across all days, using clear index logic
                 rather than 21 separate variables
```

Justifying the choice in terms of how the data will actually be
accessed — not just that "it fits" — is what this sub-topic is really
assessing.

## Key terms to define precisely

**Data structure** — a way of organising, storing and accessing data
so it can be used efficiently for a particular task. **Vector** — a
one-dimensional, ordered collection of values of the same data type,
each accessed by a single index. **Matrix** — a two-dimensional
arrangement of values organised into rows and columns, each accessed
by a pair of indices. **Tuple** — an ordered list of elements, used in
the specification's definition to describe how an element in an
n-dimensional array is located (by a tuple of n integers, one per
dimension). **Index** — the position used to identify and access a
specific element within an array; AQA's pseudocode conventions index
arrays starting from 0. Being precise about the difference between an
array's *dimensionality* (how many indices are needed to locate an
element) and its *size* (how many elements it holds in total) avoids a
common source of confusion when describing or declaring arrays in exam
answers.

## Common mistakes

Describing an array only as "a list of values" without reference to
indexing or dimensionality, missing the specification's more precise
definition. Confusing a one-dimensional array (vector) with a
two-dimensional array (matrix) when justifying a choice of structure.
Using 21 separate variables instead of a structured array when a
problem clearly calls for one, missing the point of the sub-topic
entirely. Miscounting indices when describing how to access a specific
element in a multi-dimensional array.

## Quick revision checklist

- Be able to give a precise definition of what a data structure is.
- Know that a one-dimensional array represents a vector and a
two-dimensional array represents a matrix.
- Practise justifying a choice of array dimensionality against a
described problem, not just naming "array" as the answer.
- Be comfortable with zero-based indexing and looping through
one- and two-dimensional arrays in your course's chosen language.

## Related resources

[Data Structures and Arrays revision notes](/resources/aqa-a-level-computer-science-data-structures-revision-notes/) |
[Data Structures and Arrays practice questions](/resources/aqa-a-level-computer-science-data-structures-practice/)

## Official syllabus

AQA A-Level Computer Science (7517) specification, first teaching 2015
—
[aqa.org.uk/7517](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
