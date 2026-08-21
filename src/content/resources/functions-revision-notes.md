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

Reading which of these is being asked is half the topic.

## Domain and range

- **Domain** — the set of inputs (x values) allowed.
- **Range** — the set of outputs (y values) produced.

Restrictions arise where a function would be undefined:
- Denominator cannot be zero → exclude that x.
- Square root cannot be negative → the expression inside must be ≥ 0.

## Composite functions

`fg(x)` means **do g first, then f**. Work from the **inside out** — the order catches nearly everyone.

```
f(x) = 2x + 1        g(x) = x^2

fg(x) = f(g(x)) = f(x^2)   = 2x^2 + 1
gf(x) = g(f(x)) = g(2x+1)  = (2x+1)^2
```

**fg(x) ≠ gf(x)** in general. If asked to show they differ, compute both.

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

A function has an inverse only if it is **one-to-one** over its domain.

## Exam traps

- `f⁻¹(x)` is the **inverse**, not 1/f(x). This is the most common error.
- In fg(x), apply **g first**.
- Don't forget to swap x and y when finding an inverse.
- State restrictions on the domain when a denominator or square root demands them.
- `f(4)` and `f(x) = 4` ask opposite things.

## Self-test

1. f(x) = 5x − 2. Find f(3) and solve f(x) = 18.
2. f(x) = x + 4, g(x) = 3x. Find fg(2) and gf(2).
3. Find the inverse of f(x) = (x − 1)/2.
4. Why can f(x) = 1/(x − 3) not take x = 3?
5. What is the geometric relationship between f and f⁻¹?

**Answers:** 1. f(3) = 13; 5x − 2 = 18 → x = **4**. 2. fg(2) = f(6) = **10**; gf(2) = g(6) = **18**. 3. y = (x−1)/2 → swap: x = (y−1)/2 → y = 2x + 1, so f⁻¹(x) = **2x + 1**. 4. It would make the denominator zero, and division by zero is undefined. 5. Their graphs are reflections of each other in the line y = x.
