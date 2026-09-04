---
title: "Functions"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2.12
syllabusTopics:
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "functions"
description: "Function notation, domain and range, inverse functions and composite functions, for Cambridge O Level Mathematics (Syllabus D) 4024."
author: "muhammad-ghazali-siddiqui"
reviewer: "muhammad-ghazali-siddiqui"
publishedDate: 2026-08-18
featured: false
---

This guide covers subtopic **2.12 Functions**, from Topic 2, Algebra and
graphs, for Cambridge O Level Mathematics (Syllabus D) 4024, 2025–2027
series — the final subtopic of Topic 2.

## Where this fits in 4024

Functions formalise the input–output relationships used informally
throughout Topic 2 — every equation y = ... graphed in
[Graphs of Functions and Sketching Curves](/resources/graphs-of-functions-and-sketching-curves/) is a function — and introduces
notation and operations (inverse, composite) that are new to this
subtopic specifically.

## Syllabus coverage

**CAMBRIDGE O LEVEL MATHEMATICS (SYLLABUS D) 4024**

- Understand functions, domain and range, and use function notation
(2.12)
- Understand and find inverse functions, f⁻¹(x) (2.12)
- Form composite functions as defined by gf(x) = g(f(x)) (2.12)

4024 is **not tiered** — every candidate covers all of the above.
Candidates are **not** expected to find the domain and range of composite
functions. This topic may include mapping diagrams.

## Function notation, domain and range

A **function** takes an input and produces exactly one output, written in
**function notation** as f(x) — read "f of x" — where x is the input.

**Worked example.** If f(x) = 3x − 5, find f(4).

```
f(4) = 3(4) − 5 = 7
```

The **domain** of a function is the set of allowed inputs; the **range** is
the resulting set of outputs. A **mapping diagram** shows this
input-to-output relationship visually, with arrows connecting each domain
value to its corresponding range value. A **one-to-one** function has
exactly one arrow arriving at each range value; a **many-to-one**
function can have two or more arrows arriving at the same range value.

## Restrictions on the domain

Some values must be **excluded** from the domain because they would make
the function undefined:

- If the function has a **denominator**, exclude any x that makes it
zero.
- If the function involves a **square root**, the expression inside must
be **greater than or equal to zero**.

**Worked example.** g(x) = 1/(x − 2). State the value excluded from the
domain.

```
x − 2 = 0
x = 2 must be excluded
```

The denominator is zero at x = 2, so g(2) is undefined — every other real
number is a valid input.

**Worked example.** h(x) = √(x − 3). State the restriction on the domain.

```
x − 3 >= 0
x >= 3
```

The expression under the square root cannot be negative, so only inputs
of 3 or more are valid — h(2) would require the square root of a
negative number, which is not defined.

## Inverse functions

The **inverse function**, f⁻¹(x), reverses what f does — if f(x) = y, then
f⁻¹(y) = x. To find an inverse function algebraically: write y = f(x),
rearrange to make x the subject, then swap x and y (or simply replace the
now-isolated x with f⁻¹(x)).

**Worked example.** Find the inverse of f(x) = 3x − 5.

```
y = 3x − 5
y + 5 = 3x
x = (y + 5) / 3
so f⁻¹(x) = (x + 5) / 3
```

**Check:** f⁻¹(f(4)) should return 4. f(4) = 7, and f⁻¹(7) = (7+5)/3 = 4. ✓

## Composite functions

A **composite function** applies one function to the result of another.
gf(x) means "apply f first, then apply g to the result" — formally,
gf(x) = g(f(x)).

**Worked example.** f(x) = 3/(x + 2) and g(x) = (3x + 5)². Find fg(x) as a
fraction in its simplest form.

```
fg(x) = f(g(x)) = f((3x + 5)²)
      = 3 / ((3x + 5)² + 2)
```

Since (3x + 5)² + 2 does not factorise or cancel with the numerator, this
is already in its simplest form.

**Worked example.** h(x) = 2x² + 3 and f(x) = 3x − 5. Find fh(x).

```
fh(x) = f(h(x)) = f(2x² + 3) = 3(2x² + 3) − 5 = 6x² + 9 − 5 = 6x² + 4
```

Note the order: gf(x) means f acts first (innermost), then g — reading the
notation from right to left in terms of the order of operation, even
though it's written left to right.

Candidates are **not** expected to find the domain and range of composite
functions — only to form and evaluate them.

## Common mistakes

- **Applying functions in the wrong order.** gf(x) means f first, then g —
not the reverse. Reversing the order gives fg(x), a generally different
function.
- **Forgetting to swap x and y (or equivalent) when finding an inverse.**
Rearranging y = f(x) for x gives an expression in terms of y — this
becomes f⁻¹(x) only once relabelled.
- **Not simplifying a composite function fraction fully**, when the
question specifically asks for the simplest form.
- **Confusing f⁻¹(x) with 1/f(x).** The inverse function and the
reciprocal of a function are entirely different things, despite the
similar-looking notation.
- **Attempting to find the domain/range of a composite function** — not
required by this syllabus.
- **Forgetting to exclude the value that makes a denominator zero**, or
allowing a negative value under a square root, when stating a domain
restriction.

## Quick revision checklist

- Function notation f(x), and evaluating a function for a given input
- Domain and range, and mapping diagrams, including one-to-one versus
many-to-one
- Excluding a zero denominator or a negative value under a square root
from the domain
- Finding an inverse function: rearrange for x, then relabel
- Composite functions: gf(x) = g(f(x)), applied innermost-function-first
- Domain/range of composite functions is not required

## Related resources

- [Graphs of Functions and Sketching Curves](/resources/graphs-of-functions-and-sketching-curves/) — the previous subtopics
- [Algebraic Manipulation](/resources/algebraic-manipulation/) — subtopics
2.1–2.3, the foundation for algebraic notation used throughout this topic
- [Cambridge O Level Mathematics subject hub](/subjects/mathematics/)

*Written against Cambridge O Level Mathematics (Syllabus D) 4024,
2025–2027 series. Always check the current syllabus for your examination
year.*
