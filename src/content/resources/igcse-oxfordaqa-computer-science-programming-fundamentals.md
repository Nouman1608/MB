---
title: "OxfordAQA IGCSE Computer Science: Programming Fundamentals (9210)"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "2022-onwards"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
description: "Data types, sequence/iteration/selection, and arithmetic, relational and Boolean operators -- the core imperative-programming constructs within Topic 2 Programming of OxfordAQA International GCSE Computer Science (9210)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

This guide covers the **core language constructs** within Topic 2
Programming, one of the eight topics of OxfordAQA International GCSE
Computer Science (9210), version updated November 2022. Topic 2 is
larger than most other topics in 9210 and spans data types, the three
combining principles of imperative programming, arithmetic, relational
and Boolean operators, data structures, input/output and string
handling. This guide focuses specifically on data types, programming
concepts and operators (sections 3.2.1–3.2.5 of the official
specification) — the foundational constructs every later part of the
topic builds on; data structures, input/output/file handling and string
handling are separate, substantial areas of Topic 2 not covered here.

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

## Worked example: nested iteration and selection

```
WHILE NotSolved
  FOR i ← 1 TO 5
    IF Score > HighScore THEN
      HighScore ← Score
    ENDIF
  ENDFOR
ENDWHILE
```

This short segment combines all three constructs at once: an indefinite
loop with its condition at the start (`WHILE`), a nested definite loop
(`FOR`), and a nested selection (`IF`) inside that. Reading it from the
outside in — first the WHILE, then what's inside it, then what's inside
that — is a more reliable technique than trying to trace execution line
by line on a first read.

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

## Where the wider topic goes next

Once data types, control structures and operators are secure, the
remaining parts of Topic 2 Programming build on them directly: data
structures (3.2.6) use these same constructs to work with arrays and
records; input/output and file handling (3.2.7) uses assignment and
selection to validate what a user types in; and string handling (3.2.8)
applies the same operator logic to text rather than numbers. Treat this
guide's content as the prerequisite layer, and revise it to fluency
before moving on to those later sections.

## Official syllabus

OxfordAQA International GCSE Computer Science (9210) specification —
[oxfordaqa.com](https://www.oxfordaqa.com/wp-content/uploads/2025/02/oxfordaqa-international-gcse-computerscience-specification.pdf).
