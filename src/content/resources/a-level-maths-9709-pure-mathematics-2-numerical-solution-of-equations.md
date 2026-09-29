---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 2 Numerical Solution of Equations -- Study Guide"
seoTitle: "9709 P2 Numerical Solution of Equations Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 2: Numerical solution of equations"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 42
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
    subtopic: "numerical-solution-of-equations-cambridge-2"
description: "Study guide for Cambridge 9709 Pure Mathematics 2 section 2.6: locating roots by sign change and using iterative formulae, with worked examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-28
featured: false
---

This study guide teaches section 2.6, Numerical solution of equations, of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). Section 2.6 is part of Pure Mathematics 2 and is examined on Paper 2 (1 hour 15 minutes, 50 marks), which is taken only in the AS Level Pure Mathematics route of Paper 1 plus Paper 2. The same three learning outcomes appear word for word as section 3.6 of Pure Mathematics 3, so everything here also applies if you take Paper 3.

A scientific calculator is allowed in every 9709 examination, and this topic depends on it. The syllabus also says that no marks are given for unsupported answers from a calculator, so every value you substitute and every iterate you use must be written down.

Use this page with the [revision notes](/resources/a-level-maths-9709-pure-mathematics-2-numerical-solution-of-equations-revision-notes/) and the [practice questions](/resources/a-level-maths-9709-pure-mathematics-2-numerical-solution-of-equations-practice/). For the whole paper, see the [Pure Mathematics 2 guide](/resources/a-level-mathematics-pure-mathematics-2/). Course links: the [A Level Mathematics hub](/boards/cambridge/a-level/mathematics/) and the [printable 9709 checklist](/checklists/cambridge/a-level/mathematics/).

## What this unit covers

| Syllabus 2.6 | What you must be able to do | Paper |
|---|---|---|
| Locating a root | Find roughly where a root lies, by sketching graphs and/or by searching for a sign change, e.g. a pair of consecutive integers either side of it | Paper 2 |
| Sequences of approximations | Understand and use the notation x₁, x₂, x₃, … for approximations that converge to a root | Paper 2 |
| Iterative formulae | Understand how xₙ₊₁ = F(xₙ) relates to the equation being solved; use a given iteration, or one built from a given rearrangement, to find a root to a stated accuracy | Paper 2 |

The syllabus notes that **knowledge of the condition for convergence is not included**, but you are expected to understand that an iteration may fail to converge. The trapezium rule is a separate numerical method; it belongs to section 2.5 (Integration).

## Why numerical methods?

Equations such as eˣ + x² = 6 or ln x = 1 + 2/x cannot be rearranged to give x exactly. You can still find x to any accuracy you want, in two stages:

1. **Locate** the root: show it lies in a small interval.
2. **Refine** it: use an iterative formula to home in on it.

Paper 2 questions on this topic usually come from other sections first. You differentiate (2.4) to find a stationary point, or integrate (2.5) to set up an area, and the equation that comes out has no exact solution. Section 2.6 then finishes the job.

## Locating a root

### Graphical considerations

Write the equation as "one function = another" and sketch both graphs on the same axes. Each point where the graphs cross gives one root. This tells you **how many** roots there are and roughly **where** they are.

### Searching for a sign change

Write the equation as f(x) = 0. If f is continuous on an interval from a to b, and f(a) and f(b) have opposite signs, then the graph must cross the x-axis between a and b, so f(x) = 0 has a root in that interval.

A full answer has three parts: the two values of f (with their signs), the fact that there is a sign change, and the conclusion.

### Worked example 1: graph, then sign change

Show that the equation eˣ + x² = 6 has exactly two real roots, and find the pair of consecutive integers between which each root lies.

Sketch y = eˣ and y = 6 − x². The exponential curve is always positive and increasing; the parabola has maximum point (0, 6) and crosses the x-axis at ±√6. At x = 0 the parabola (6) is above the exponential (1). Moving right, eˣ rises and 6 − x² falls, so they cross once. Moving left from 0, 6 − x² falls from 6 to large negative values while eˣ stays between 0 and 1, so they cross once. **Exactly two roots.**

Now let f(x) = eˣ + x² − 6 and search integer values:

```
f(1)  = e + 1 - 6       = -2.282   (negative)
f(2)  = e^2 + 4 - 6     =  5.389   (positive)
f(-2) = e^-2 + 4 - 6    = -1.865   (negative)
f(-3) = e^-3 + 9 - 6    =  3.050   (positive)
```

f is continuous and changes sign between 1 and 2, and between −3 and −2. So one root lies **between 1 and 2** and the other **between −3 and −2**.

### Worked example 2: when a sign change misleads

A sign change is only a proof when f is continuous on the whole interval.

- f(x) = 1/(x − 2) gives f(1) = −1 and f(3) = 1, but f(x) = 0 has **no** root. The graph jumps across the vertical asymptote x = 2 instead of crossing the axis.
- f(x) = (2x − 3)² gives f(1) = 1 and f(2) = 1, with no sign change, but there **is** a root at x = 1.5. The graph touches the axis there without crossing it.
- If an interval contains two roots, the signs at its ends can match, so a search with steps that are too wide can miss both.

This is why a sketch first is useful: it shows how many roots to look for and whether there is a break in the graph.

## Sequences of approximations

An iterative method produces a sequence of values x₁, x₂, x₃, …. The starting value is x₁ (sometimes x₀ if the question says so), and each new value is found from the one before. If the values get closer and closer to a root α, we say the sequence **converges** to α and write xₙ → α as n → ∞.

Two conventions you must follow:

- Give each iterate to the accuracy the question asks for, usually **4 decimal places**, but keep the full calculator value in memory and use it for the next step.
- Stop when **two successive iterates** agree to the accuracy required for the answer, then state the root to that accuracy.

## Iterative formulae xₙ₊₁ = F(xₙ)

### How the formula relates to the equation

If the sequence converges to α, then xₙ and xₙ₊₁ both tend to α. So the limit satisfies

```
alpha = F(alpha)
```

This means α is a root of the equation x = F(x). An iterative formula is therefore just the equation x = F(x) turned into a rule: rearrange the equation you want to solve into the form x = F(x), put n + 1 on the left and n on the right.

To show which equation a given formula solves, replace both xₙ₊₁ and xₙ by α (or x) and rearrange back.

### Worked example 3: one equation, two rearrangements

The equation 2x = 3 + ln x has a root α between 1 and 2.

(a) Verify by calculation that α lies between 1 and 2. Let g(x) = 2x − 3 − ln x.

```
g(1) = 2 - 3 - 0      = -1       (negative)
g(2) = 4 - 3 - ln 2   =  0.3069  (positive)
```

g is continuous for x > 0 and changes sign, so 1 < α < 2.

(b) Use the iterative formula xₙ₊₁ = ½(3 + ln xₙ) with x₁ = 1.5 to find α correct to 2 decimal places. Give each iterate to 4 decimal places.

```
x1 = 1.5
x2 = 1.7027
x3 = 1.7661
x4 = 1.7844
x5 = 1.7895
x6 = 1.7910
```

x₅ and x₆ both round to 1.79, so **α = 1.79** (2 d.p.). As an extra check, g(1.785) = −0.0094 and g(1.795) = 0.0050: a sign change on this interval confirms that α rounds to 1.79.

(c) Solving 2x = 3 + ln x for x inside the log gives a different rearrangement: ln x = 2x − 3, so x = e^(2x − 3). Try xₙ₊₁ = e^(2xₙ − 3) with x₁ = 1.8:

```
1.8  ->  1.8221  ->  1.9045  ->  2.2458  ->  4.4443  -> ...
```

The iterates move **away** from α and grow without limit. Starting at 1.75 instead, they fall to 0.0559 and settle near the other root of the equation, about 0.0556. Both formulae come from the same equation, but only the first one finds α. This is the "iteration may fail to converge" idea in the syllabus. You are not asked to predict this in advance, only to recognise it from the numbers.

### Worked example 4: from calculus to an iteration

The curve y = (ln x)/(x + 2) has one stationary point, with x-coordinate α.

(a) Show that α satisfies α = e^(1 + 2/α).

Quotient rule:

```
dy/dx = [ (x + 2)(1/x) - ln x ] / (x + 2)^2
```

At a stationary point the numerator is zero:

```
(x + 2)/x - ln x = 0
ln x = 1 + 2/x
x = e^(1 + 2/x)
```

(b) Show by calculation that α lies between 4 and 5. Let h(x) = ln x − 1 − 2/x.

```
h(4) = 1.3863 - 1 - 0.5    = -0.1137   (negative)
h(5) = 1.6094 - 1 - 0.4    =  0.2094   (positive)
```

Sign change, and h is continuous for x > 0, so 4 < α < 5.

(c) Use xₙ₊₁ = e^(1 + 2/xₙ) with x₁ = 4.5 to find α correct to 2 decimal places.

```
x1 = 4.5
x2 = 4.2395
x3 = 4.3569
x4 = 4.3018
x5 = 4.3272
x6 = 4.3154
x7 = 4.3209
```

x₆ and x₇ both round to 4.32, so **α = 4.32** (2 d.p.). The iterates jump above and below α on alternate steps, which is common and does not matter.

### Worked example 5: finding the limit exactly

The sequence defined by xₙ₊₁ = (2xₙ³ + 20)/(3xₙ²), x₁ = 3, converges to α. Find the exact value of α.

```
alpha = (2 alpha^3 + 20)/(3 alpha^2)
3 alpha^3 = 2 alpha^3 + 20
alpha^3 = 20,   so alpha = cube root of 20
```

**α = ∛20**. The iterates 3, 2.7407, 2.7147, 2.7144, 2.7144 agree with ∛20 = 2.7144 (4 d.p.). When a question says "find the exact value", replace xₙ and xₙ₊₁ by α and solve algebraically. Do not quote a rounded iterate.

## Using your calculator

- Type x₁, press =, then type the formula using the Ans key in place of xₙ. Each further press of = gives the next iterate, and the full value is carried forward automatically.
- Check the angle mode. Calculus and iterations involving sin, cos or tan use **radians** unless the question says otherwise.
- Write every iterate down. A final value with no iterates shown earns little or nothing.

## Common errors

- Stating "there is a root" without mentioning the sign change, or without giving the values of f.
- Using a sign change across a discontinuity, such as either side of x = 2 for 1/(x − 2).
- Retyping each rounded iterate instead of using the stored value, so the answer drifts.
- Stopping after one iterate that rounds correctly; you need two successive iterates that agree.
- Giving the root to 4 d.p. when 2 d.p. was asked, or giving iterates to fewer places than instructed.
- Working in degrees when F(x) contains a trigonometric function.
- Answering an "exact value" question with a decimal from the calculator.

## Next steps

Condense this unit with the [revision notes](/resources/a-level-maths-9709-pure-mathematics-2-numerical-solution-of-equations-revision-notes/), then work through the [practice questions](/resources/a-level-maths-9709-pure-mathematics-2-numerical-solution-of-equations-practice/). The [Pure Mathematics 2 practice set](/resources/a-level-mathematics-pure-mathematics-2-practice/) mixes this topic with the rest of Paper 2, and the [logarithms and exponentials study guide](/resources/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials/) covers the eˣ and ln x work that many of these equations need. On the A Level route, the [Pure Mathematics 3 study guide](/resources/a-level-maths-9709-pure-mathematics-3/) covers the same outcomes as section 3.6. Check your readiness with the free [AS diagnostic](/practice/9709/diagnostic/as/) or the [9709 self-check bank](/practice/9709/).

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 2, Pure Mathematics 2 (for Paper 2): section 2.6 Numerical solution of equations.
