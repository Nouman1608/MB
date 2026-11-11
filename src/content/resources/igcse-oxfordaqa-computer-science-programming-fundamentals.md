---
title: "OxfordAQA IGCSE Computer Science: Programming Fundamentals (9210)"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "data-types-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "programming-concepts-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "arithmetic-operations-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "relational-operations-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "boolean-operations-9210"
description: "Guide to OxfordAQA International GCSE Computer Science 9210 sections 3.2.1 to 3.2.5: data types, the three constructs, and arithmetic and logic operators."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by harris-khan on 2026-09-29; 2026-11-08: reviewed by harris-khan."
publishedDate: 2026-09-02
featured: false
---

This guide covers the **core language constructs** within Topic 2
Programming, one of the eight topics of OxfordAQA International GCSE
Computer Science (9210), version 3.5. Topic 2 is
larger than most other topics in 9210 and runs to thirteen sub-sections
(3.2.1–3.2.13): data types, programming concepts (built on the three
combining principles of imperative programming), arithmetic, relational
and Boolean operations, data structures, input/output and file handling,
string handling, random number generation, subroutines, structured
programming, robust and secure programming, and the classification of
programming languages and translators. This guide focuses specifically
on data types, programming concepts and operators (sections 3.2.1–3.2.5
of the official specification) — the foundational constructs every later
part of the topic builds on; sections 3.2.6–3.2.13 are separate,
substantial areas of Topic 2 not covered here.

## Where this fits in 9210

Written exams for 9210 always present algorithms and code in OxfordAQA's
own pseudocode, regardless of which language a candidate has actually
been taught in the classroom (Python, C# and Visual Basic are all common
choices). This makes the constructs in this guide genuinely
language-independent knowledge: a candidate who understands them in
pseudocode terms can apply them to code segments in any language the
exam presents.

## Syllabus coverage

**OXFORDAQA INTERNATIONAL GCSE COMPUTER SCIENCE (9210) — PROGRAMMING FUNDAMENTALS**

- 3.2.1 Data types — understanding the concept of a data type, and using
integer, real, Boolean, character and string types appropriately (noting
that some languages use different names, such as `float` for real
numbers; the specification's general names are used in exams)
- 3.2.2 Programming concepts — variable declaration, constant
declaration, assignment, iteration, selection and subroutine
(procedure/function) statement types, and how they combine; definite and
indefinite iteration, including indefinite iteration with the condition
at the start (`WHILE`) or the end (`REPEAT...UNTIL`) of the structure;
nested selection and nested iteration; using meaningful identifier names
and understanding why this matters
- 3.2.3 Arithmetic operations — addition, subtraction, multiplication,
real division, and integer division including remainders (modular
arithmetic, e.g. 11 DIV 2 = 5, 11 MOD 2 = 1)
- 3.2.4 Relational operations — equal to, not equal to, less than,
greater than, less than or equal to, greater than or equal to, using the
symbols =, ≠, <, >, ≤, ≥ in assessment material
- 3.2.5 Boolean operations — NOT, AND and OR, and combinations of these
operators used within conditions for iterative and selection structures

## How to approach it

The three "combining principles" named in 3.2.2 — sequence, iteration
and selection — are basic to every imperative programming language, and
nearly every algorithm question in the exam is really asking you to
identify or write some combination of the three. When reading an
unfamiliar pseudocode segment, first identify which of the three each
block represents before trying to trace what it does.

Integer division is a common source of careless errors: `DIV` returns
only the whole-number quotient (11 DIV 2 = 5) and `MOD` returns only the
remainder (11 MOD 2 = 1) — treating them as a single combined operation,
or mixing up which one gives which value, is one of the most frequent
mistakes in this section. Practise both operations with several examples
until the distinction is automatic.

Boolean operators are also often used *within* the condition of an
iterative or selection structure rather than as a topic on their own —
for example, `WHILE score < 100 AND livesLeft > 0`. Practise reading and
writing compound conditions that combine a relational operator (3.2.4)
with a Boolean operator (3.2.5), since this combination, rather than
either in isolation, is what most exam questions actually test.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-programming-fundamentals--08-three-constructs.webp" width="900" height="810" alt="Three small flow diagrams: sequence runs steps in order, selection branches to path A or path B, iteration loops a step back to a test. FOR is for a known count and WHILE for an unknown count." loading="lazy">
  <figcaption>Sequence, selection and iteration are the building blocks of every algorithm.</figcaption>
</figure>


## Worked example: nested iteration and selection

```
HighScore ← 0
Again ← "Y"
WHILE Again = "Y"
  FOR i ← 1 TO 5
    INPUT Score
    IF Score > HighScore THEN
      HighScore ← Score
    ENDIF
  ENDFOR
  OUTPUT HighScore
  INPUT Again
ENDWHILE
```

This short segment combines all three constructs at once: an indefinite
loop with its condition at the start (`WHILE`), a nested definite loop
(`FOR`), and a nested selection (`IF`) inside that. Reading it from the
outside in — first the WHILE, then what's inside it, then what's inside
that — is a more reliable technique than trying to trace execution line
by line on a first read. Notice what makes it traceable: `HighScore` is
initialised before the loops, `Score` is input inside the `FOR` loop, and
`Again` is updated inside the `WHILE` loop, so the outer loop can end.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-programming-fundamentals--10-nested-while-for-if.webp" width="900" height="920" alt="The worked example is drawn as nested coloured boxes: a WHILE loop box containing a FOR loop box containing an IF box. Example inputs 3, 9, 4, 7, 2 give a HighScore of 9." loading="lazy">
  <figcaption>Read nested code from the outside in: WHILE, then FOR, then IF.</figcaption>
</figure>


## Common mistakes

Confusing `DIV` and `MOD`, or omitting one of them when a question asks
for both the quotient and the remainder. Writing a definite loop
(`FOR`) where the number of repetitions is not actually known in
advance, when an indefinite loop (`WHILE` or `REPEAT...UNTIL`) is
required. Using vague identifier names (`x`, `temp1`) in written
algorithm answers, which the specification explicitly asks candidates to
avoid and explain the reasoning for. Treating AND/OR as interchangeable
— a condition using AND requires every part to be true, while OR
requires only one part to be true, and confusing the two silently
changes what the algorithm actually does.

## Quick revision checklist

- Know all five data types and the specification's naming convention for
each.
- Be fluent identifying sequence, iteration and selection inside nested
pseudocode.
- Practise DIV and MOD calculations until the distinction is automatic.
- Write and read compound conditions combining relational and Boolean
operators.

## Frequently asked questions

**What is the difference between DIV and MOD in OxfordAQA pseudocode?**
DIV returns only the whole-number quotient and MOD returns only the remainder, so 11 DIV 2 = 5 and 11 MOD 2 = 1. Mixing them up is one of the most frequent mistakes.

**What language are code questions written in for OxfordAQA 9210 exams?**
Written exams present algorithms and code in OxfordAQA's own pseudocode, whichever language a candidate has been taught, such as Python, C# or Visual Basic.

**What are the three combining principles of imperative programming?**
Sequence, iteration and selection. Nearly every algorithm question asks you to identify or write some combination of the three.

**What is the difference between AND and OR in a condition?**
A condition using AND needs every part to be true, while OR needs only one part to be true. Treating them as interchangeable changes what the algorithm does.

## Where the wider topic goes next

Once data types, control structures and operators are secure, the
remaining parts of Topic 2 Programming build on them directly: data
structures (3.2.6) use these same constructs to work with arrays and
records; input/output and file handling (3.2.7) uses assignment and
selection to validate what a user types in; string handling (3.2.8)
applies the same operator logic to text rather than numbers; random
number generation (3.2.9); subroutines (3.2.10), including procedures
and functions with parameters; structured programming (3.2.11); robust
and secure programming (3.2.12), including validation, authentication
and defensive design; and the classification of programming languages
and translators (3.2.13). Treat this guide's content as the
prerequisite layer, and revise it to fluency before moving on to those
later sections.

## Official syllabus

OxfordAQA International GCSE Computer Science (9210) specification —
[oxfordaqa.com](https://www.oxfordaqa.com/wp-content/uploads/2025/02/oxfordaqa-international-gcse-computerscience-specification.pdf).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-programming-fundamentals--07-five-data-types.webp" width="900" height="880" alt="Five cards show the data types integer, real, Boolean, character and string, each with an example value and a small picture. A note says some languages call real float." loading="lazy">
  <figcaption>The five data types and their general names used in the exam.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-programming-fundamentals--09-div-mod-groups.webp" width="900" height="680" alt="Eleven counters form five pairs and one single counter. DIV counts the five whole groups, MOD gives the one left over, so 11 = 2 x 5 + 1." loading="lazy">
  <figcaption>DIV gives the whole-number quotient and MOD gives the remainder.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-programming-fundamentals--11-and-or-truth.webp" width="900" height="800" alt="A table evaluates the condition score &lt; 100 AND livesLeft &gt; 0 for four example cases, showing each part and the AND and OR results. AND is True only when both parts are True; OR is True when at least one is." loading="lazy">
  <figcaption>AND requires every part true; OR requires only one.</figcaption>
</figure>

