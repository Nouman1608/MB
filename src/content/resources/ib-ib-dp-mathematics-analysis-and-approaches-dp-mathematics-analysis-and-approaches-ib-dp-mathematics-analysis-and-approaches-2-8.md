---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.8 The reciprocal function and rational functions"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.08
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-8"
description: "Study guide to IB Maths AA 2.8: the reciprocal function 1/x and rational functions (ax + b)/(cx + d), with asymptotes, intercepts, branches and inverses."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide covers section 2.8 of IB Diploma Programme Mathematics: Analysis and Approaches, common to SL and HL. The IB *Mathematics: analysis and approaches guide* (first assessment 2021) lists the reciprocal function f(x) = 1/x, x ≠ 0, its graph and its self-inverse nature, and rational functions of the form f(x) = (ax + b)/(cx + d), their graphs, and the equations of their vertical and horizontal asymptotes. Sketches should include all asymptotes and any intercepts with the axes.

The [rational, exponential and logarithmic functions guide](/resources/ib-dp-mathematics-aa-sl-rational-exponential-log-functions-transformations/) gives the asymptote and intercept rules with one sketch. This page goes further: why the rules work, how to place each branch reliably, how to find a rational function from its graph, how to intersect a rational graph with a line, and how inverses of rational functions behave. Afterwards, use the [2.8 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-8-revision-notes/) and the [2.8 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-8-practice/).

## The reciprocal function y = 1/x

- Domain x ≠ 0; range y ≠ 0.
- Asymptotes x = 0 (vertical) and y = 0 (horizontal); no intercepts.
- Two branches, in the first and third quadrants.
- Symmetric about the lines y = x and y = −x, and unchanged by a half-turn about the origin.
- **Self-inverse:** f(f(x)) = 1/(1/x) = x, so f⁻¹(x) = f(x). This is why the graph is its own reflection in y = x.

The graph of y = k/x (k > 0) has the same shape and asymptotes, stretched vertically by scale factor k. For k < 0 the branches lie in the second and fourth quadrants. Such functions model **inverse proportion**: for a 150 km journey, the time in hours at a constant speed v km/h is t = 150/v.

## Rational functions (ax + b)/(cx + d)

### Why the asymptotes are where they are

- **Vertical asymptote x = −d/c.** The denominator is zero there, and near that value the fraction becomes very large in size.
- **Horizontal asymptote y = a/c.** Divide the numerator and denominator by x: (a + b/x)/(c + d/x). As x → ±∞, b/x and d/x → 0, leaving a/c.

So the domain is x ≠ −d/c and the range is y ≠ a/c.

### Intercepts

- y-intercept: f(0) = b/d.
- x-intercept: numerator zero, x = −b/a.

### Writing it as a transformed 1/x

Dividing gives (ax + b)/(cx + d) = a/c + r/(cx + d) for a constant r. This shows the graph is y = 1/x stretched and translated, so it is always a two-branch hyperbola.

## Worked example 1: a full sketch

Sketch f(x) = (3x − 6)/(2x + 1).

```
Vertical asymptote:    2x + 1 = 0  →  x = −1/2
Horizontal asymptote:  y = 3/2
y-intercept:           f(0) = −6   →  (0, −6)
x-intercept:           3x − 6 = 0  →  (2, 0)
Division:  f(x) = 3/2 − (15/2)/(2x + 1)
```

**Placing the branches.** The asymptotes split the plane into four regions; the graph occupies two opposite ones. The points (0, −6) and (2, 0) are right of x = −1/2 and below y = 3/2, so the right-hand branch lies in the bottom-right region, rising towards y = 3/2. The other branch is in the top-left region: a test point confirms it, since f(−1) = (−9)/(−1) = 9, which is above 3/2.

The negative sign in −(15/2)/(2x + 1) is what puts the branches in the top-left and bottom-right; with a positive term they would be bottom-left and top-right, like 1/x.

### Behaviour near the asymptotes

For a branch next to x = −1/2, test a value just to each side. f(−0.4) = (−7.2)/(0.2) = −36, so just right of the asymptote the graph plunges downwards; f(−0.6) = (−7.8)/(−0.2) = 39, so just left of it the graph shoots upwards. Signs of the numerator and denominator are enough: you do not need the exact values.

## Worked example 2: finding the function from its features

A graph has asymptotes x = 2 and y = −1 and passes through (0, 1). Find its equation in the form f(x) = (ax + b)/(x + d).

```
Vertical asymptote x = 2:      d = −2
Horizontal asymptote y = −1:   a/1 = −1, so a = −1
f(0) = b/(−2) = 1, so b = −2
f(x) = (−x − 2)/(x − 2)
Check: the x-intercept is x = −2, consistent with the branch through (0, 1)
```

When c is not 1 in the form given, remember that the horizontal asymptote is a/c, not a.

## Worked example 3: intersection with a line

Find where y = 4/(x − 1) meets y = x + 2.

```
4/(x − 1) = x + 2
4 = (x − 1)(x + 2) = x² + x − 2     (x ≠ 1)
x² + x − 6 = 0
(x + 3)(x − 2) = 0
Points: (2, 4) and (−3, −1)
```

Multiplying by the denominator is safe as long as you remember x ≠ 1; any root equal to the excluded value would have to be rejected.

## Inverses of rational functions

The inverse of a rational function of this type is again a rational function of this type, and its asymptotes are those of f reflected in y = x: they **swap**.

For f(x) = (3x − 6)/(2x + 1), from worked example 1:

```
y(2x + 1) = 3x − 6
2xy + y = 3x − 6
x(2y − 3) = −6 − y
f⁻¹(x) = (x + 6)/(3 − 2x)
Asymptotes of f⁻¹:  x = 3/2 and y = −1/2
```

The vertical asymptote of f⁻¹ is the horizontal asymptote of f, and vice versa, exactly as reflection predicts. This is a fast check on any rational inverse.

## Context: interpreting asymptotes

In the journey model t = 150/v, the vertical asymptote v = 0 says the time grows without limit as the speed approaches 0, and the horizontal asymptote t = 0 says faster speeds give shorter times but never zero time. Only the branch v > 0 has meaning. If the driver also takes a 30-minute stop, the model becomes t = 150/v + 0.5 and the horizontal asymptote moves to t = 0.5: however fast the driving, the trip takes at least half an hour.

## Common mistakes

- Taking the horizontal asymptote as b/d (that is the y-intercept) or as a instead of a/c.
- Writing asymptotes as numbers rather than equations.
- Drawing a branch that crosses the vertical asymptote, or that touches the horizontal one at the ends.
- Putting the branches in the wrong pair of regions; a single test point avoids this.
- Forgetting the excluded value after multiplying through by the denominator.
- Stating the range of (ax + b)/(cx + d) as all real numbers.

## Exam technique

- **Sketch:** dashed asymptotes labelled with equations, both intercepts labelled, two branches approaching the asymptotes.
- **Write down the equations of the asymptotes:** one mark each; no working needed.
- **Find the inverse:** collect the x terms and factorise, then check that the asymptotes have swapped.
- Rational sketches are Paper 1 skills; on Paper 2 use the GDC to confirm branch positions.

## Where to go next

Condense this with the [2.8 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-8-revision-notes/) and practise with the [2.8 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-8-practice/). Rational functions with quadratic parts are AHL content, covered in the [HL polynomials, rational and modulus functions guide](/resources/ib-dp-mathematics-aa-hl-further-functions/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.8.
