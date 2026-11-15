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
description: "Condensed exam recall notes on function notation, domain and range, composite and inverse functions for Cambridge O Level Mathematics 4024 subtopic 2.12."
author: "muhammad-ghazali-siddiqui"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-08-22
featured: false
reviewNote: "2026-11-08 recheck: added a 4024 syllabus-coverage table (2.12.1 to 2.12.3 and notes), a direct opening naming the syllabus, and an FAQ section. Please re-review; previously reviewed by sajawal-zahid on 2026-09-29; 2026-11-08: credited to sajawal-zahid (accountable teacher, D-379)."
---

Functions are subtopic 2.12 of Cambridge O Level Mathematics (Syllabus D) 4024: use function notation, understand domain and range, find inverse functions and form composite functions. These notes are condensed for the final weeks. For worked examples, use the
[Functions study guide](/resources/functions/).

## What does the 4024 syllabus require?

| 4024 outcome | What you must do |
|---|---|
| 2.12.1 | Understand functions, domain and range, and use function notation, e.g. f(x) = 3x − 5, h(x) = 2x² + 3 |
| 2.12.2 | Understand and find inverse functions f⁻¹(x) |
| 2.12.3 | Form composite functions as defined by gf(x) = g(f(x)), giving answers as a fraction in its simplest form where needed |
| Notes | Mapping diagrams may be used; you are not expected to find the domains and ranges of composite functions |

## Notation

`f(x) = 2x + 3` means "the function f applied to x".

`f(4)` means **substitute 4 for x**: f(4) = 2(4) + 3 = 11.

`f(x) = 11` means **solve** 2x + 3 = 11 → x = 4.

Reading which of these is being asked is half the topic — the letter x
appears in all three, so it's the position of the equals sign and what's
already known that tells you which task is being asked for.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/functions--01-fn-machine.webp" width="900" height="920" alt="A function machine for f(x) = 3x minus 5. Inputs 0, 2 and 4 give outputs minus 5, 1 and 7, one output for each input. The highlighted case is f(4) = 7." loading="lazy">
  <figcaption>A function gives exactly one output for each input, such as f(4) = 7 when f(x) = 3x − 5.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/functions--02-fn-mapping.webp" width="900" height="1230" alt="Two mapping diagrams. For f(x) = 3x minus 5 each output has one arrow arriving (one-to-one). For h(x) = 2x squared plus 3, the inputs minus 1 and 1 both give 5 and minus 2 and 2 both give 11 (many-to-one)." loading="lazy">
  <figcaption>In a one-to-one function one arrow arrives at each output; in a many-to-one function two or more can.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/functions--03-fn-domain.webp" width="900" height="1210" alt="g(x) = 1 over (x minus 2) has a gap at x = 2 where the denominator is zero. h(x) = square root of (x minus 3) only exists for x at least 3, so there is no graph to the left of 3." loading="lazy">
  <figcaption>Exclude any x that makes a denominator zero or the number under a square root negative.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/functions--05-fn-composite.webp" width="900" height="890" alt="With f(x) = 3x minus 5 and h(x) = 2x squared plus 3, fh(2) applies h first (2 to 11) then f (11 to 28). hf(2) applies f first (2 to 1) then h (1 to 5). The results 28 and 5 differ, so the order matters." loading="lazy">
  <figcaption>In fh(x) the function nearest x, h, acts first, so fh(2) = 28 but hf(2) = 5.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/functions--04-fn-inverse.webp" width="900" height="860" alt="Top row: f multiplies 4 by 3 to get 12 then subtracts 5 to get 7. Bottom row: the inverse adds 5 to get 12 then divides by 3 to get 4, undoing each step in reverse order. f inverse of x = (x plus 5) over 3, and f inverse of 7 = 4." loading="lazy">
  <figcaption>The inverse f⁻¹ undoes f: f⁻¹(7) = 4 because f(4) = 7.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/functions--06-fn-not-reciprocal.webp" width="900" height="860" alt="For f(x) = 3x minus 5 at 7: the inverse gives 4, because f(4) = 7, while the reciprocal 1 over f(7) gives 1 over 16. They are different numbers." loading="lazy">
  <figcaption>f⁻¹(x) is the inverse function, not the reciprocal 1/f(x).</figcaption>
</figure>


## Frequently asked questions

**What is the difference between domain and range?**
The domain is the set of inputs a function is allowed to take; the range is the set of outputs it produces. A denominator that would be zero or a negative number under a square root restricts the domain.

**Which function acts first in fg(x)?**
g acts first, then f. Work from the inside out: fg(x) = f(g(x)).

**How do I check an inverse function?**
Substitute a number into f, then put the answer into f⁻¹: you should get the number back. Algebraically, f(f⁻¹(x)) = x.

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
