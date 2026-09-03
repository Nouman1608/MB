---
title: "Functions: Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed recall notes on function notation, domain and range, composite and inverse functions for Cambridge O Level Mathematics 4024."
author: "muhammad-ghazali-siddiqui"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For worked examples, use the
[Functions study guide](/resources/functions/).

## Notation

`f(x) = 2x + 3` means "the function f applied to x".

`f(4)` means **substitute 4 for x**: f(4) = 2(4) + 3 = 11.

`f(x) = 11` means **solve** 2x + 3 = 11 → x = 4.

Reading which of these is being asked is half the topic — the letter x
appears in all three, so it's the position of the equals sign and what's
already known that tells you which task is being asked for.

## Domain and range

- **Domain** — the set of inputs (x values) allowed.
- **Range** — the set of outputs (y values) produced.

Restrictions arise where a function would be undefined:
- Denominator cannot be zero → exclude that x.
- Square root cannot be negative → the expression inside must be ≥ 0.

**Worked example.** g(x) = 1/(x − 2). State the value excluded from the domain.
```
x - 2 = 0  ->  x = 2 must be excluded
```
The denominator is zero at x = 2, so g(2) is undefined — every other real
number is a valid input.

A **mapping diagram** shows the same relationship visually: arrows run
from each domain value on the left to its corresponding range value on
the right. A one-to-one function has exactly one arrow arriving at each
range value; a many-to-one function can have two or more arrows arriving
at the same value.

## Composite functions

`fg(x)` means **do g first, then f**. Work from the **inside out** — the order catches nearly everyone.

```
f(x) = 2x + 1        g(x) = x^2

fg(x) = f(g(x)) = f(x^2)   = 2x^2 + 1
gf(x) = g(f(x)) = g(2x+1)  = (2x+1)^2
```

**fg(x) ≠ gf(x)** in general. If asked to show they differ, compute both.

**Worked example.** f(x) = 3/(x + 2) and g(x) = (3x + 5)². Find fg(x).
```
fg(x) = f(g(x)) = f((3x+5)^2) = 3 / ((3x+5)^2 + 2)
```
(3x + 5)² + 2 does not factorise or cancel with the 3 on top, so this is
already in its simplest form — don't force a cancellation that isn't
there.

## Inverse functions

`f⁻¹(x)` undoes f. Method:

```
1. Write  y = f(x)
2. SWAP x and y
3. Rearrange to make y the subject
4. Replace y with f^-1(x)
```

**Worked:** f(x) = 3x − 5

```
y = 3x - 5
x = 3y - 5          (swap)
x + 5 = 3y
y = (x + 5) / 3     ->  f^-1(x) = (x + 5)/3
```

**Check:** f(f⁻¹(x)) should give x. Here f((x+5)/3) = 3·(x+5)/3 − 5 = x ✓

Graphically, y = f⁻¹(x) is the **reflection of y = f(x) in the line y = x**.

A function has an inverse only if it is **one-to-one** over its domain —
each output must come from exactly one input.

**Worked example.** f(x) = (x - 3)^2 + 2 for x >= 3. Why must the domain be
restricted for an inverse to exist?
Without the restriction, f is **not one-to-one** — for instance f(2) = 3
and f(4) = 3, so two different inputs give the same output, and there is
no single input to send 3 back to. Restricting to x >= 3 keeps only the
right-hand half of the parabola, from the vertex onwards, which rises
strictly and so is one-to-one — an inverse can then be defined.

## Exam traps

- `f⁻¹(x)` is the **inverse**, not 1/f(x). This is the most common error.
- In fg(x), apply **g first**.
- Don't forget to swap x and y when finding an inverse.
- State restrictions on the domain when a denominator or square root demands them.
- `f(4)` and `f(x) = 4` ask opposite things.
- Forgetting that a composite function fraction must be checked for
simplification before it's left as a final answer.
- Claiming a function always has an inverse — it only does if it is
one-to-one over the given domain; a full parabola is not, but half of
one (with a domain restriction) can be.
- Stating the range when a question asks for the domain, or vice versa —
read the question twice if the two get mixed up under time pressure.

For fuller worked examples of every case above, see the
[Functions study guide](/resources/functions/); for exam-style questions
with full mark schemes, see the
[Functions practice questions](/resources/functions-practice/).

## Self-test

1. f(x) = 5x − 2. Find f(3) and solve f(x) = 18.
2. f(x) = x + 4, g(x) = 3x. Find fg(2) and gf(2).
3. Find the inverse of f(x) = (x − 1)/2.
4. Why can f(x) = 1/(x − 3) not take x = 3?
5. What is the geometric relationship between f and f⁻¹?
6. h(x) = 2x² + 3 and f(x) = 3x − 5. Find fh(x).
7. g(x) = (x + 4)/3. Verify that gg⁻¹(2) = 2.

**Answers:** 1. f(3) = 13; 5x − 2 = 18 → x = **4**. 2. fg(2) = f(6) = **10**; gf(2) = g(6) = **18**. 3. y = (x−1)/2 → swap: x = (y−1)/2 → y = 2x + 1, so f⁻¹(x) = **2x + 1**. 4. It would make the denominator zero, and division by zero is undefined. 5. Their graphs are reflections of each other in the line y = x. 6. fh(x) = f(2x² + 3) = 3(2x² + 3) − 5 = **6x² + 4**. 7. g⁻¹(x) = 3x − 4, so g⁻¹(2) = 2; g(2) = 6/3 = **2** ✓.
