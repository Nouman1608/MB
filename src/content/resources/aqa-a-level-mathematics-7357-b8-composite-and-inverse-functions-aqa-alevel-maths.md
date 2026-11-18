---
title: "AQA A-Level Mathematics (7357): Composite and inverse functions"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "B: Algebra and functions"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 3.08
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b8-composite-and-inverse-functions-aqa-alevel-maths"
description: "AQA A-level Maths 7357 B8 in depth: unknown functions in composites, ff(x), self-inverse functions, inverses of composites and where f meets its inverse."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers content statement **B8** of AQA A-level Mathematics (7357), Section B: Algebra and functions: **"Understand and use composite functions; inverse functions and their graphs."** Function notation follows the specification: gf(x) means g(f(x)), so f is applied first, and f⁻¹ is the inverse of f.

The [graphs, composite and inverse functions study guide](/resources/aqa-a-level-mathematics-graphs-of-functions-composite-functions-and-inverse/) teaches the core methods: forming gf and fg, the domain of a composite, finding f⁻¹ by rearranging, and restricting the domain of a quadratic. This page adds the question types that test real understanding: finding an unknown function inside a composite, repeated composition ff(x), self-inverse functions, the inverse of a composite, and deciding where a graph meets its inverse. Use the [B8 revision notes](/resources/aqa-a-level-mathematics-7357-b8-composite-and-inverse-functions-aqa-alevel-maths-revision-notes/) to recall the results and the [B8 practice questions](/resources/aqa-a-level-mathematics-7357-b8-composite-and-inverse-functions-aqa-alevel-maths-practice/) to test them.

## The language you need

| Term | Meaning |
|---|---|
| Function | A rule giving exactly one output for each input in its domain |
| Domain | The set of allowed inputs |
| Range | The set of outputs the function actually produces |
| One-one | Different inputs always give different outputs |
| Many-one | At least two inputs share an output, such as x² at x = 3 and x = −3 |
| Composite gf | Apply f, then apply g to the result |
| Inverse f⁻¹ | The function that undoes f, so f⁻¹(f(x)) = x |
| Self-inverse | A function equal to its own inverse, so ff(x) = x |

An inverse exists only for a one-one function. On a graph, a horizontal line that meets the curve more than once shows the function is many-one.

## Finding an unknown function in a composite

Sometimes you are given a composite and one of its parts, and you must find the other. Which method to use depends on which function is missing.

**Worked example 1 (missing the inner function).** f(x) = 2x + 1. Find g such that fg(x) = 6x² − 3.

fg(x) = f(g(x)) = 2g(x) + 1, so 2g(x) + 1 = 6x² − 3. This gives **g(x) = 3x² − 2**.

**Worked example 2 (missing the outer function).** f(x) = 2x + 1. Find h such that hf(x) = 4x² + 4x.

Now h acts on 2x + 1. Let u = 2x + 1, so x = (u − 1)/2.

```
h(u) = 4x² + 4x = 4x(x + 1)
     = 4 × (u − 1)/2 × (u + 1)/2
     = (u − 1)(u + 1) = u² − 1
```

So **h(x) = x² − 1**. Check: h(2x + 1) = 4x² + 4x + 1 − 1 = 4x² + 4x. A neat alternative is to notice 4x² + 4x = (2x + 1)² − 1 straight away.

## Repeated composition and its domain

ff(x) means f(f(x)). Its domain can be smaller than the domain of f, because the first output must also be a valid input.

**Worked example 3.** f(x) = 1/(x + 1), x ≠ −1. Find ff(x) and its domain.

```
ff(x) = 1/(f(x) + 1) = 1/(1/(x + 1) + 1)
      = 1/((1 + x + 1)/(x + 1))
      = (x + 1)/(x + 2)
```

The simplified form looks as if only x = −2 is excluded, but x = −1 is still excluded, because f(−1) is undefined. Also x = −2 is excluded, because f(−2) = −1, which f cannot accept. So the domain of ff is **x ≠ −1, x ≠ −2**. Always find the domain from the steps, not from the final simplified expression.

## Self-inverse functions

A function is self-inverse when f⁻¹ = f. Its graph is symmetric in the line y = x, and ff(x) = x for every x in the domain.

**Worked example 4.** Show that f(x) = (2x + 3)/(x − 2), x ≠ 2, is self-inverse.

```
y = (2x + 3)/(x − 2)
y(x − 2) = 2x + 3
xy − 2y = 2x + 3
x(y − 2) = 2y + 3
x = (2y + 3)/(y − 2)
```

So f⁻¹(x) = (2x + 3)/(x − 2) = f(x). The asymptotes of f are x = 2 and y = 2, and these swap into each other under reflection in y = x, which is consistent. Other examples to recognise: f(x) = k/x, f(x) = c − x, and f(x) = (ax + b)/(cx − a).

Use it: if f is self-inverse, ff(x) = x immediately, which saves a long simplification. For example, ff(5) = 5 here, which you can confirm: f(5) = 13/3, and f(13/3) = (26/3 + 3)/(13/3 − 2) = (35/3)/(7/3) = 5.

## The inverse of a composite

To undo "do f, then do g", undo g first, then undo f. So

```
(gf)⁻¹(x) = f⁻¹(g⁻¹(x))
```

The order reverses, just as you take off shoes before socks.

**Worked example 5.** f(x) = 2x + 1 and g(x) = x³, for all real x. Find (gf)⁻¹(x).

f⁻¹(x) = (x − 1)/2 and g⁻¹(x) = ∛x. So (gf)⁻¹(x) = f⁻¹(∛x) = **(∛x − 1)/2**.

Check: gf(x) = (2x + 1)³. Setting y = (2x + 1)³ gives ∛y = 2x + 1 and x = (∛y − 1)/2, the same result.

## Inverse graphs: where f meets f⁻¹

The graph of y = f⁻¹(x) is the reflection of y = f(x) in y = x. For an **increasing** function, the two graphs can only meet on the line y = x, so you can find their meeting points by solving f(x) = x instead of the harder f(x) = f⁻¹(x).

**Worked example 6.** f(x) = x² − 6x + 11, x ≥ k.

(a) Find the smallest value of k for which f has an inverse.

Completing the square: f(x) = (x − 3)² + 2. The turning point is at x = 3, so the smallest k is **3**. On x ≥ 3 the function is increasing and its range is f(x) ≥ 2.

(b) Find f⁻¹(x) and its domain.

```
y = (x − 3)² + 2
x − 3 = √(y − 2)            positive root, since x ≥ 3
f⁻¹(x) = 3 + √(x − 2),   x ≥ 2
```

(c) Find where the graphs of f and f⁻¹ meet.

f is increasing, so solve f(x) = x:

```
x² − 6x + 11 = x
x² − 7x + 11 = 0
x = (7 ± √5)/2
```

Only values with x ≥ 3 lie in the domain: (7 − √5)/2 ≈ 2.38 is rejected and (7 + √5)/2 ≈ 4.62 is kept. The graphs meet once, at **((7 + √5)/2, (7 + √5)/2)**.

Not every function meets its inverse. If f(x) = x² + 2 for x ≥ 0, then x² − x + 2 = 0 has discriminant 1 − 8 < 0, so the two graphs never meet.

## Asymptotes and key points under inversion

Reflection in y = x swaps the coordinates of every point and swaps vertical and horizontal lines.

- A point (a, b) on f becomes (b, a) on f⁻¹.
- An asymptote x = p on f becomes y = p on f⁻¹, and y = q becomes x = q.
- For f(x) = 2 + 1/(x − 1), the asymptotes are x = 1 and y = 2, so f⁻¹ has asymptotes x = 2 and y = 1. Indeed f⁻¹(x) = 1 + 1/(x − 2).
- The domain of f becomes the range of f⁻¹, and the range of f becomes the domain of f⁻¹.

## Common mistakes

- Reading gf(x) as "g first". It is f first.
- Finding the domain of a composite from its simplified formula and missing an excluded value.
- Reversing the order wrongly: (gf)⁻¹ is f⁻¹g⁻¹, not g⁻¹f⁻¹.
- Writing f⁻¹(x) = 1/f(x). The inverse function is not the reciprocal.
- Taking ± when inverting a restricted quadratic instead of choosing the sign that matches the domain.
- Solving f(x) = x for a decreasing function and assuming that finds every meeting point.
- Leaving out the domain of f⁻¹.

## Exam technique for AQA command words

- **"Find gf(x)"**: substitute the whole of f(x) into g, then simplify.
- **"State the domain"**: give it in inequality or set notation; for f⁻¹ it is the range of f.
- **"Show that f is self-inverse"**: find f⁻¹ in full and state that it equals f.
- **"Explain why f has no inverse"**: name two inputs with the same output, or say f is many-one on that domain.
- **"Find the exact coordinates"**: keep surds such as (7 + √5)/2; do not round.

## Where to go next

Use the [B8 revision notes](/resources/aqa-a-level-mathematics-7357-b8-composite-and-inverse-functions-aqa-alevel-maths-revision-notes/) and then the [B8 practice questions](/resources/aqa-a-level-mathematics-7357-b8-composite-and-inverse-functions-aqa-alevel-maths-practice/). Sketching the curves involved is covered in the [B7 graphs of functions guide](/resources/aqa-a-level-mathematics-7357-b7-graphs-of-functions-aqa-alevel-maths/).

## Official syllabus

AQA A-level Mathematics (7357) specification, first teaching 2017, Section B: Algebra and functions, content statement B8.
