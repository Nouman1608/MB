---
title: "Edexcel International GCSE Mathematics A (4MA1): Function notation"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Sequences, functions and graphs"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 3.2
syllabusTopics:
  - qualification: "igcse"
    topic: "sequences-functions-and-graphs-edexcel-igcse-maths"
    subtopic: "function-notation-edexcel-igcse-maths"
description: "Study guide to Higher tier 4MA1 section 3.2: functions as mappings, f(x) and f : x ↦ notation, domain and range, composite functions and inverse functions."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 3.2, Function notation, in topic 3 (Sequences, functions and graphs) of the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2. The whole section is **Higher tier only**: the Foundation Tier content lists 3.2 as "Higher Tier only", so Foundation candidates are not tested on it.

The topic-level [Sequences, functions and graphs study guide](/resources/edexcel-igcse-maths-4ma1-sequences-functions-and-graphs/) gives a short summary of functions. This page goes through each statement in 3.2 with new examples, including the less-practised parts: the idea of a mapping, range, and inverses of fractional functions. Afterwards, use the [function notation revision notes](/resources/edexcel-igcse-mathematics-4ma1-function-notation-revision-notes/) and the [function notation practice questions](/resources/edexcel-igcse-mathematics-4ma1-function-notation-practice/).

## What the specification says

| Statement | Students should be taught to |
|---|---|
| Higher 3.2 A | understand the concept that a function is a mapping between elements of two sets |
| Higher 3.2 B | use function notations of the form f(x) = ... and f : x ↦ ... |
| Higher 3.2 C | understand the terms "domain" and "range" and which values may need to be excluded from a domain |
| Higher 3.2 D | understand and find the composite function fg and the inverse function f⁻¹ |

The specification notes that "fg" means "do g first, then f", and gives f(x) = 1/(x − 2), with x = 2 excluded, as its domain example.

## A function is a mapping

A function takes each input from one set and maps it to **exactly one** output in another set. The inputs form the **domain**; the outputs that actually occur form the **range**.

- "Multiply by 3, then subtract 2" is a function: every input gives one output.
- "Map x to a number whose square is x" is not a function on the positive numbers, because 9 would map to both 3 and −3.

A mapping diagram shows this: an arrow from each input to its output. Two inputs may share an output (x² maps 2 and −2 both to 4), but one input may not have two outputs.

## The notation

Both of these define the same function:

```
f(x) = 4x − 7          f : x ↦ 4x − 7
```

f(3) means "the output when the input is 3". Replace every x with the input, in brackets.

**Worked example 1.** f(x) = 4x − 7. Find (a) f(3) (b) f(−2) (c) f(a + 1) (d) the value of x for which f(x) = 13.

```
(a) f(3)     = 4(3) − 7  = 5
(b) f(−2)    = 4(−2) − 7 = −15
(c) f(a + 1) = 4(a + 1) − 7 = 4a − 3
(d) 4x − 7 = 13  →  4x = 20  →  x = 5
```

Part (d) reverses the process: the output is given, and you solve for the input. Do not confuse it with f(13), which is 45.

## Domain, range and excluded values

Two situations force you to exclude values from the domain at this level:

- **Division by zero.** For h(x) = 1/(x + 4), x = −4 makes the denominator zero, so x ≠ −4.
- **Square root of a negative number.** For g(x) = √(x − 5), x − 5 must be at least 0, so the domain is x ≥ 5.

The range is the set of outputs. Think about the smallest and largest values the output can take.

**Worked example 2.** Find the range of (a) p(x) = x² + 3 (b) g(x) = √(x − 5), x ≥ 5 (c) q(x) = x² − 6x + 11.

```
(a) x² ≥ 0 for every x, so p(x) ≥ 3
(b) a square root is never negative, so g(x) ≥ 0
(c) complete the square: (x − 3)² + 2, and (x − 3)² ≥ 0, so q(x) ≥ 2
```

Write a range using the function, for example "p(x) ≥ 3" or "f(x) ≥ 3"; "x ≥ 3" describes inputs, not outputs.

## Composite functions

fg(x) means f(g(x)): apply g first, then apply f to the result. The order matters, and fg is usually different from gf.

**Worked example 3.** f(x) = (x + 5)/3 and g(x) = 2x². Find (a) fg(2) (b) gf(1) (c) fg(x) (d) gf(x).

```
(a) g(2) = 2 × 4 = 8;      f(8) = 13/3
(b) f(1) = 6/3 = 2;        g(2) = 8
(c) fg(x) = f(2x²) = (2x² + 5)/3
(d) gf(x) = g((x + 5)/3) = 2((x + 5)/3)² = 2(x + 5)²/9
```

For (c) and (d), write the inner function inside the outer one first, then simplify. A common slip in (d) is to square only the numerator: ((x + 5)/3)² = (x + 5)²/9.

### Repeated functions and equations

ff(x) means apply f twice.

**Worked example 4.** f(x) = 3 − 2x. Solve ff(x) = x.

```
ff(x) = f(3 − 2x) = 3 − 2(3 − 2x) = 4x − 3
4x − 3 = x  →  3x = 3  →  x = 1
```

## Inverse functions

The inverse f⁻¹ undoes f: if f(2) = 7, then f⁻¹(7) = 2. To find it:

1. Write y = f(x).
2. Rearrange to make x the subject.
3. Swap the letters: replace y with x and write f⁻¹(x) = ...

**Worked example 5.** Find the inverse of (a) f(x) = (x + 5)/3 (b) g(x) = 4/(x + 1), x ≠ −1.

```
(a) y = (x + 5)/3
    3y = x + 5
    x = 3y − 5
    f⁻¹(x) = 3x − 5

(b) y = 4/(x + 1)
    y(x + 1) = 4
    x + 1 = 4/y
    x = 4/y − 1
    g⁻¹(x) = 4/x − 1   (or (4 − x)/x),  x ≠ 0
```

Check (b): g(1) = 4/2 = 2, and g⁻¹(2) = 4/2 − 1 = 1. ✓ Note that g⁻¹ needs its own excluded value, x = 0.

When x appears twice after clearing a fraction, collect the x terms and factorise, exactly as in changing the subject of a formula.

**Worked example 6.** h(x) = (x + 4)/(2x − 3). Find h⁻¹(x).

```
y(2x − 3) = x + 4
2xy − 3y = x + 4
2xy − x = 3y + 4
x(2y − 1) = 3y + 4
h⁻¹(x) = (3x + 4)/(2x − 1)
```

Check: h(2) = 6/1 = 6, and h⁻¹(6) = 22/11 = 2. ✓

A useful property: ff⁻¹(x) = f⁻¹f(x) = x. Applying a function and then its inverse returns the input.

## Common mistakes

- Working out fg as "f first, then g". The function nearest x is applied first.
- Writing fg(x) as f(x) × g(x). A composite is not a product.
- Confusing f⁻¹(x) with 1/f(x). The inverse undoes f; it is not the reciprocal.
- Solving f(x) = 13 when the question asks for f(13), or the reverse.
- Forgetting to swap letters at the end of finding an inverse, leaving "x = 3y − 5".
- Stating a range in terms of x instead of f(x).

## Exam technique

- **"Find fg(2)"**: work from the inside out and show the intermediate value, g(2) = 8.
- **"Express the inverse function f⁻¹ in the form f⁻¹(x) = ..."**: the final line must start "f⁻¹(x) =" and contain x only.
- **"State which value(s) of x must be excluded from the domain"**: give the value and say why (it makes a denominator zero).
- **"Solve fg(x) = ..."**: form the composite first, then solve the equation.
- Check an inverse with a number: pick an input, apply f, then apply your f⁻¹.

## More on this topic

Revise from the [function notation revision notes](/resources/edexcel-igcse-mathematics-4ma1-function-notation-revision-notes/), then try the [function notation practice questions](/resources/edexcel-igcse-mathematics-4ma1-function-notation-practice/). Transformations such as y = f(x + a) use the same notation and are covered in the [graphs study guide](/resources/edexcel-igcse-mathematics-4ma1-graphs/).

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017. Topic 3, Sequences, functions and graphs: 3.2 Function notation, Higher Tier statements A to D (the Foundation Tier lists 3.2 as Higher Tier only).
