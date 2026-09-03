---
title: "IB DP Mathematics: Analysis and Approaches -- Functions Strand Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4
description: "Condensed revision notes on the Functions strand of IB Diploma Programme Mathematics: Analysis and Approaches -- the toolkit the Calculus strand depends on -- with worked reminders and self-test questions."
author: "marlbridge-academic-team"
publishedDate: 2026-09-03
featured: false
---

Functions carries 21 hours at SL and 32 at HL, as the
[full syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/) sets
out, and is deliberately positioned before Calculus (28 hours SL / 55 hours HL) in the course
structure: nearly every calculus technique assumes fluent, confident work with functions first. These
notes work through the strand's recurring exam skills, alongside the
[Calculus strand revision notes](/resources/ib-dp-mathematics-aa-calculus-revision-notes/) and the
[subject overview](/resources/ib-dp-mathematics-analysis-and-approaches-subject-guide/) already on
the site.

## Why Functions comes before Calculus

Differentiation and integration are, in essence, operations performed *on* functions. A student who
is shaky on transforming, graphing or solving equations involving a function will find that weakness
resurfaces every time a Calculus question wraps a function in a derivative or integral. Treating
Functions purely as a stand-alone topic, rather than as the toolkit the rest of the SL/HL course
depends on, is the single most common structural mistake in how students sequence their own revision.

## Core skills to hold securely

- **The concept of a function** -- domain, range, and function notation $f(x)$, including composite
  functions $f \circ g(x)$ and the conditions needed for an inverse function $f^{-1}(x)$ to exist.
- **Graphing and transforming functions** -- translations, stretches and reflections applied to a
  base graph, and reading key features (intercepts, turning points, asymptotes) directly from a graph
  or its equation.
- **Solving equations involving functions** -- both algebraically and graphically (using technology to
  find intersections), since Analysis and Approaches expects fluency in both routes.
- **Types of function** most commonly assessed: linear, quadratic, exponential, logarithmic, and
  rational functions, each with a recognisable graph shape and characteristic transformations.

## Worked example: composite and inverse functions

Given $f(x) = 2x + 3$ and $g(x) = x^2$, find $f \circ g(x)$ and explain why $f^{-1}(x)$ exists but a
general inverse of $g(x)$ over all real $x$ does not.

```
f(g(x)):        substitute g(x) into f: f(x^2) = 2x^2 + 3
Why f has
an inverse:     f is a strictly increasing linear function (one-to-
                one over its whole domain), so each output corresponds
                to exactly one input -- the condition an inverse
                function requires
Why g does
not (in
general):       g(x) = x^2 is not one-to-one over all real numbers --
                both x = 2 and x = -2 give g(x) = 4, so no single
                inverse function can recover the original input
                without restricting the domain first
```

This one-to-one reasoning -- not just mechanically "swapping x and y" -- is what Analysis and
Approaches mark schemes reward when a question asks *why* an inverse does or does not exist.

## Transformations at a glance

| Transformation | Effect on $y = f(x)$ |
|---|---|
| $y = f(x) + k$ | Vertical translation by $k$ |
| $y = f(x - a)$ | Horizontal translation by $a$ |
| $y = k f(x)$ | Vertical stretch, scale factor $k$ |
| $y = f(kx)$ | Horizontal stretch, scale factor $1/k$ |
| $y = -f(x)$ | Reflection in the $x$-axis |
| $y = f(-x)$ | Reflection in the $y$-axis |

Apply transformations to the **key features** of the base graph (intercepts, turning points,
asymptotes) directly, rather than replotting the whole curve from scratch every time -- this is far
faster under exam time pressure and less error-prone for multi-step transformations.

## Logarithmic and exponential pairs

Exponential and logarithmic functions are inverses of each other, and this strand expects fluent
movement between the two forms: $y = a^x$ rewritten as $x = \log_a y$, and the graph of a logarithmic
function recognised as the reflection of the corresponding exponential graph in the line $y = x$ —
the general graphical signature of any function and its inverse. Questions combining exponential
growth/decay models with logarithms to solve for an unknown exponent are common, and rely on this
inverse relationship rather than a separate memorised technique.

## Exam traps

- Swapping $x$ and $y$ mechanically to find an inverse without first checking the function is
  one-to-one over the domain given.
- Applying a horizontal transformation ($f(x-a)$ or $f(kx)$) in the wrong direction relative to the
  sign given.
- Reading off asymptotes from a transformed graph without checking how the transformation moved them.
- Treating a graphical solution (technology) and an algebraic solution as interchangeable without
  checking both give a consistent answer, since Paper 2 explicitly allows technology for exactly this
  cross-check.

## Quick revision checklist

- Confirm a function is one-to-one before finding its inverse, rather than swapping variables by
  default.
- Practise sketching each transformation from the table above onto a simple base graph such as
  $y = x^2$.
- Convert confidently between exponential and logarithmic forms of the same relationship.
- Cross-check an algebraic solution to an equation involving functions against a graphical solution
  using technology, since Paper 2 allows this directly.

## Self-test

1. State the condition a function must satisfy for its inverse to exist.
2. What is the effect of $y = f(x - a)$ on the graph of $y = f(x)$?
3. Why does $g(x) = x^2$ not have an inverse over all real $x$?
4. Why is Functions positioned before Calculus in the course structure?
5. Name two types of function most commonly assessed in this strand.

**Answers:** 1. The function must be one-to-one (each output corresponds to exactly one input) over
the domain considered. 2. A horizontal translation by $a$ units. 3. Because it is not one-to-one over
all real numbers -- two different inputs (e.g. $2$ and $-2$) can give the same output, so no single
inverse function can recover the original input without restricting the domain. 4. Because
differentiation and integration operate on functions, so fluency with function notation, graphing and
equation-solving underpins nearly every Calculus technique. 5. Any two of: linear, quadratic,
exponential, logarithmic, rational.
