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
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-08-18
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29; 2026-11-08: reviewed by sajawal-zahid."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/functions--01-fn-machine.webp" width="900" height="920" alt="A function machine for f(x) = 3x minus 5. Inputs 0, 2 and 4 give outputs minus 5, 1 and 7, one output for each input. The highlighted case is f(4) = 7." loading="lazy">
  <figcaption>A function gives exactly one output for each input, such as f(4) = 7 when f(x) = 3x − 5.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/functions--02-fn-mapping.webp" width="900" height="1230" alt="Two mapping diagrams. For f(x) = 3x minus 5 each output has one arrow arriving (one-to-one). For h(x) = 2x squared plus 3, the inputs minus 1 and 1 both give 5 and minus 2 and 2 both give 11 (many-to-one)." loading="lazy">
  <figcaption>In a one-to-one function one arrow arrives at each output; in a many-to-one function two or more can.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/functions--03-fn-domain.webp" width="900" height="1210" alt="g(x) = 1 over (x minus 2) has a gap at x = 2 where the denominator is zero. h(x) = square root of (x minus 3) only exists for x at least 3, so there is no graph to the left of 3." loading="lazy">
  <figcaption>Exclude any x that makes a denominator zero or the number under a square root negative.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/functions--04-fn-inverse.webp" width="900" height="860" alt="Top row: f multiplies 4 by 3 to get 12 then subtracts 5 to get 7. Bottom row: the inverse adds 5 to get 12 then divides by 3 to get 4, undoing each step in reverse order. f inverse of x = (x plus 5) over 3, and f inverse of 7 = 4." loading="lazy">
  <figcaption>The inverse f⁻¹ undoes f: f⁻¹(7) = 4 because f(4) = 7.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/functions--05-fn-composite.webp" width="900" height="890" alt="With f(x) = 3x minus 5 and h(x) = 2x squared plus 3, fh(2) applies h first (2 to 11) then f (11 to 28). hf(2) applies f first (2 to 1) then h (1 to 5). The results 28 and 5 differ, so the order matters." loading="lazy">
  <figcaption>In fh(x) the function nearest x, h, acts first, so fh(2) = 28 but hf(2) = 5.</figcaption>
</figure>


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

<!-- marlbridge-diagram:math-b48-functions-workflow-quick-check -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/math-b48-functions-workflow-quick-check.svg" aria-label="Open full-size diagram: math-b48-functions-workflow-quick-check"><img src="/images/learning/mathematics/math-b48-functions-workflow-quick-check.svg" width="1600" height="1050" alt="A function maps an allowed input to an output. In gf(x), apply f first, then g; an inverse rearranges input and output and is not the reciprocal. Domain restrictions exclude inputs that make a denominator zero or a square-root argument negative." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>A function maps an allowed input to an output. In gf(x), apply f first, then g; an inverse rearranges input and output and is not the reciprocal. Domain restrictions exclude inputs that make a denominator zero or a square-root argument negative. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:math-b48-functions-workflow-quick-check -->


- Function notation f(x), and evaluating a function for a given input
- Domain and range, and mapping diagrams, including one-to-one versus
many-to-one
- Excluding a zero denominator or a negative value under a square root
from the domain
- Finding an inverse function: rearrange for x, then relabel
- Composite functions: gf(x) = g(f(x)), applied innermost-function-first
- Domain/range of composite functions is not required

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/functions--06-fn-not-reciprocal.webp" width="900" height="860" alt="For f(x) = 3x minus 5 at 7: the inverse gives 4, because f(4) = 7, while the reciprocal 1 over f(7) gives 1 over 16. They are different numbers." loading="lazy">
  <figcaption>f⁻¹(x) is the inverse function, not the reciprocal 1/f(x).</figcaption>
</figure>


## Frequently asked questions

**What is a function in Cambridge O Level Maths 4024?**
A function takes an input and produces exactly one output, written in function notation as f(x), read "f of x". Functions are subtopic 2.12 of Cambridge O Level Mathematics (Syllabus D) 4024, which is not tiered, so every candidate studies them.

**What is the difference between the domain and the range of a function?**
The domain is the set of allowed inputs and the range is the resulting set of outputs. A mapping diagram shows this with arrows from each domain value to its range value.

**Which values must be excluded from the domain?**
Exclude any value of x that makes a denominator zero, and any value that makes the expression inside a square root negative. For g(x) = 1/(x − 2), x = 2 must be excluded.

**Is f⁻¹(x) the same as 1/f(x)?**
No. f⁻¹(x) is the inverse function, which reverses what f does, while 1/f(x) is the reciprocal of the function's output; the two are entirely different.

**Do you need to find the domain and range of composite functions for 4024?**
No. Candidates are not expected to find the domain and range of composite functions, only to form and evaluate them, such as fh(x) = f(h(x)).

## Related resources

- [Graphs of Functions and Sketching Curves](/resources/graphs-of-functions-and-sketching-curves/) — the previous subtopics
- [Algebraic Manipulation](/resources/algebraic-manipulation/) — subtopics
2.1–2.3, the foundation for algebraic notation used throughout this topic
- [Cambridge O Level Mathematics subject hub](/subjects/mathematics/)

*Written against Cambridge O Level Mathematics (Syllabus D) 4024,
2025–2027 series. Always check the current syllabus for your examination
year.*
