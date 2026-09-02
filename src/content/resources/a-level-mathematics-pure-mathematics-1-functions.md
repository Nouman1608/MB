---
title: "A Level Mathematics: Pure Mathematics 1 - Functions (Cambridge 9709)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 1"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 2
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
    subtopic: "functions-cambridge-alevel-maths"
description: "Domain, range, one-one functions, inverse functions, composition, and the five standard graph transformations -- a deep dive into subtopic 1.2 Functions for Cambridge International AS & A Level Mathematics 9709, Pure Mathematics 1."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

Subtopic 1.2 Functions follows [1.1
Quadratics](/resources/a-level-mathematics-quadratics-revision-notes/)
in Pure Mathematics 1 (Paper 1) of Cambridge International AS & A
Level Mathematics 9709. Where the [Pure Mathematics 1
overview](/resources/a-level-mathematics-pure-mathematics-1-quadratics/)
summarises all eight sub-topics briefly, this guide goes deep into 1.2
specifically -- the vocabulary and techniques of functions that recur
throughout the rest of the Pure Mathematics content, from Paper 2's
logarithmic and exponential functions to Paper 3's more advanced
function work.

## The core vocabulary

You need to understand five terms precisely: **function**, **domain**,
**range**, **one-one function**, and **inverse function**, plus
**composition of functions**. A function maps every value in its
domain to exactly one value in its range. A **one-one** function is
one where no two different domain values map to the same range value
-- this matters because only a one-one function has a genuine inverse
function.

## Finding range and composing functions

You need to identify the range of a given function in simple cases,
and find the composition of two given functions. The syllabus gives a
worked style of example: for f: x ↦ 1/x for x ≥ 1 and g: x ↦ x + 1,
you should be able to find the range of the composite function gf.

**The critical rule for composition**: a composite function *gf* can
only be formed when the range of *f* lies within the domain of *g*.
This condition is easy to overlook -- always check it explicitly before
attempting to build a composite function, since a question may be
testing precisely whether you notice the composition is invalid as
stated.

## Determining one-one and finding inverses

You need to be able to determine whether a given function is one-one,
and find the inverse of a one-one function in simple cases. A common
technique for checking one-one-ness is considering whether a
horizontal line could cross the graph of the function more than once
(if it can, the function is not one-one over that domain).

To find an inverse function algebraically: write y = f(x), rearrange
to make x the subject, then swap x and y (or relabel) to express the
inverse in terms of x.

## The graphical relationship between a function and its inverse

You need to be able to illustrate, in graphical terms, the relation
between a one-one function and its inverse. The key fact to sketch
correctly: **the graph of the inverse function is the reflection of
the graph of the original function in the line y = x**. Any sketch
answering this kind of question should explicitly show this mirror
line, since the syllabus notes that sketches should include an
indication of it.

## Graph transformations

The final part of 1.2 covers five standard transformations of the
graph of y = f(x), which you need to understand and use, including
simple combinations of them:

| Transformation | Effect |
|---|---|
| y = f(x) + a | Vertical translation by a |
| y = f(x + a) | Horizontal translation by −a |
| y = a·f(x) | Vertical stretch, scale factor a |
| y = f(ax) | Horizontal stretch, scale factor 1/a |

You need to use the terms **translation**, **reflection** and
**stretch** correctly when describing these transformations, and be
ready to apply them to algebraic functions, trigonometric functions,
or other graphs described only by their general features rather than
a specific equation.

## Worked-style examples to practise

Two example patterns are worth drilling until they are automatic,
because they cover most of what a 1.2 Functions question asks.

**Composition and its condition.** Suppose f: x ↦ 1/x for x ≥ 1 and
g: x ↦ x + 1 for x ∈ ℝ. The range of f (for x ≥ 1) is 0 < f(x) ≤ 1.
Since g accepts all real numbers as its domain, the range of f lies
entirely within the domain of g, so gf exists and gf(x) = 1/x + 1.
Before writing this down in an exam, state the domain-and-range check
explicitly as a line of working -- it is often worth a mark on its own,
independent of the final expression.

**Inverse of a restricted function.** Suppose f: x ↦ (x − 2)² + 3 for
x ≥ 2. Because the domain is restricted to x ≥ 2, f is one-one (the
horizontal-line test only fails for the full parabola, not the
restricted right-hand branch), so an inverse exists. Write y =
(x − 2)² + 3, rearrange to x = 2 + √(y − 3), then swap variables to
give f⁻¹(x) = 2 + √(x − 3) for x ≥ 3. Note how the domain restriction
on f becomes the range restriction on f⁻¹, and vice versa -- this
domain/range swap between a function and its inverse is a detail
examiners check for specifically.

## How 1.2 connects to the rest of the syllabus

Functions is genuinely foundational, not a self-contained topic you
revise once and set aside. The domain/range/composition vocabulary
recurs whenever a later Pure Mathematics topic introduces a new family
of functions (logarithmic and exponential in Paper 2, further
algebraic and trigonometric functions in Paper 3), and the
translation/stretch/reflection transformations apply directly to
sketching trigonometric graphs in 1.5 and any curve-sketching question
across the whole qualification.

## How to approach it

Practise the composition condition (range of the inner function within
the domain of the outer function) as a habit, not an afterthought --
write it down explicitly before combining two functions, since exam
questions specifically probe whether candidates check it. For
inverses, practise the full algebraic method (isolate x, then swap
variables) until it is automatic, and always sketch the y = x mirror
line when a question asks for a graphical relationship between a
function and its inverse, since marks are frequently allocated
specifically for showing this line. For transformations, build a
mental habit of applying them one at a time when a question combines
two or more (for example, y = 2f(x − 1) is a horizontal translation
followed by a vertical stretch), rather than trying to visualise the
combined effect in a single step.

## Official syllabus

Cambridge International, *Cambridge International AS & A Level
Mathematics (9709) syllabus for examination in 2026 and 2027*:
[official syllabus
PDF](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf),
Subject content, section 1.2 "Functions" (Pure Mathematics 1, Paper
1). Verified 2026-09-02.
