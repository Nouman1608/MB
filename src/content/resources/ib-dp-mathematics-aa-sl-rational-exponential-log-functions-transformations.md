---
title: "IB DP Mathematics: Analysis and Approaches -- Rational, exponential and logarithmic functions, solving equations and transformations Study Guide"
seoTitle: "IB Maths AA Rational, Exp and Log Functions Study Guide"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Rational, exponential and logarithmic functions, solving equations and transformations"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.8
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-8"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-9"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-10"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-11"
description: "IB DP Maths AA study guide to rational, exponential and log functions, solving equations and graph transformations, with worked examples."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the rational, exponential and logarithmic functions, solving equations and transformations unit of IB Diploma Programme Mathematics: Analysis and Approaches. It is aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 2.8, 2.9, 2.10 and 2.11. All of this content is common to SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

The [Functions strand overview](/resources/ib-dp-mathematics-aa-functions/) gives the big picture in a few paragraphs. This page goes section by section, with the detail you need to answer exam questions. When you have worked through it, use the [revision notes](/resources/ib-dp-mathematics-aa-sl-rational-exponential-log-functions-transformations-revision-notes/) for final-week recall and the [practice questions](/resources/ib-dp-mathematics-aa-sl-rational-exponential-log-functions-transformations-practice/) to test yourself. The [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/) show where the unit sits in the course.

## What this unit covers

| Section | What you must be able to do | SL/HL |
|---|---|---|
| 2.8 | Sketch y = 1/x and use its self-inverse nature; sketch f(x) = (ax + b)/(cx + d) with all asymptotes and axis intercepts | SL and HL |
| 2.9 | Sketch y = aˣ, y = eˣ, y = logₐ x and y = ln x; use aˣ = e^(x ln a) and logₐ aˣ = x = a^(logₐ x); treat exponential and log functions as inverses | SL and HL |
| 2.10 | Solve equations analytically and graphically; use technology where no analytic method exists; apply this to real-life models | SL and HL |
| 2.11 | Apply translations, reflections and stretches, alone and in sequence, and know that order matters | SL and HL |

The guide states that transformations of the form f(ax + b) are not required at SL. HL students meet them later, in the AHL functions content.

## 2.8 The reciprocal function and rational functions

### The reciprocal function y = 1/x

f(x) = 1/x is defined for x ≠ 0. Its graph has two branches: one in the first quadrant and one in the third. The vertical asymptote is x = 0 and the horizontal asymptote is y = 0. There are no intercepts with the axes.

The function is **self-inverse**: f⁻¹(x) = f(x). You can show this in one line:

```
f(f(x)) = 1/(1/x) = x
```

Graphically, a function and its inverse are reflections of each other in y = x. Because 1/x is its own inverse, its graph is symmetric about the line y = x.

### Rational functions f(x) = (ax + b)/(cx + d)

For c ≠ 0, the graph is a hyperbola with two asymptotes:

- **Vertical asymptote:** x = −d/c (where the denominator is zero).
- **Horizontal asymptote:** y = a/c (divide top and bottom by x and let x → ±∞).

The intercepts come straight from the formula:

- **y-intercept:** put x = 0, giving y = b/d (if d ≠ 0).
- **x-intercept:** put the numerator equal to zero, giving x = −b/a (if a ≠ 0).

The guide says sketches should include all horizontal and vertical asymptotes and any intercepts with the axes. Draw the asymptotes as dashed lines and label each one with its equation.

### Worked example 1

Sketch f(x) = (2x + 5)/(x + 1), x ≠ −1.

```
Vertical asymptote:   x + 1 = 0  →  x = −1
Horizontal asymptote: y = 2/1    →  y = 2
y-intercept:          f(0) = 5/1 = 5          →  (0, 5)
x-intercept:          2x + 5 = 0 → x = −5/2    →  (−2.5, 0)
```

Use the intercepts to place the branches. (−2.5, 0) is left of x = −1 and below y = 2, so the left branch sits in the bottom-left region formed by the asymptotes. (0, 5) is right of x = −1 and above y = 2, so the right branch sits in the top-right region.

You can also see this as a transformation of 1/x. Dividing out gives

```
(2x + 5)/(x + 1) = 2 + 3/(x + 1)
```

so the graph is y = 1/x stretched vertically by scale factor 3, then translated 1 left and 2 up. This link to section 2.11 is named in the guide.

## 2.9 Exponential and logarithmic functions

### Exponential graphs

For f(x) = aˣ with a > 0:

- Domain: all real x. Range: y > 0.
- y-intercept (0, 1). Horizontal asymptote y = 0.
- If a > 1 the graph increases (growth). If 0 < a < 1 it decreases (decay).

f(x) = eˣ is the special case a = e ≈ 2.718. It is the base used for continuous growth and for calculus.

### Logarithmic graphs

For f(x) = logₐ x with x > 0 (and a > 0, a ≠ 1):

- Domain: x > 0. Range: all real y.
- x-intercept (1, 0). Vertical asymptote x = 0.
- f(x) = ln x is the case a = e.

### Relationships you must use

```
aˣ = e^(x ln a)
logₐ aˣ = x        and        a^(logₐ x) = x      (a, x > 0, a ≠ 1)
```

The second line says that y = aˣ and y = logₐ x **undo each other**. They are inverse functions. So the graph of y = logₐ x is the reflection of y = aˣ in y = x. The domain of one is the range of the other, and the horizontal asymptote y = 0 becomes the vertical asymptote x = 0.

### Worked example 2

Let f(x) = 2ˣ.

(a) Write f(x) in the form e^(kx).

```
2ˣ = e^(x ln 2), so k = ln 2 ≈ 0.693
```

(b) Find f⁻¹(x) and state its domain.

```
f⁻¹(x) = log₂ x, domain x > 0 (the range of f)
```

(c) Evaluate f⁻¹(8), log₂ 2⁷ and 2^(log₂ 5).

```
f⁻¹(8) = log₂ 8 = 3      log₂ 2⁷ = 7      2^(log₂ 5) = 5
```

Writing aˣ as e^(x ln a) is how you compare growth models with different bases, and it is the form you will differentiate in the [calculus unit](/resources/ib-dp-mathematics-aa-calculus/).

## 2.10 Solving equations analytically and graphically

The guide expects both routes. On Paper 1 (no technology) you must solve by algebra. On Paper 2 (technology required) you can also use your GDC, and some equations can only be solved that way.

### Analytic method: disguised quadratics

An equation with e^(2x) and eˣ is a quadratic in u = eˣ, because e^(2x) = (eˣ)².

### Worked example 3 (by hand)

Solve e^(2x) + eˣ − 6 = 0.

```
Let u = eˣ:           u² + u − 6 = 0
Factorise:            (u + 3)(u − 2) = 0
So                    u = −3  or  u = 2
eˣ > 0 for all x, so eˣ = −3 has no solution.
eˣ = 2                x = ln 2
```

Give the exact answer ln 2 unless the question asks for a decimal. The rejection line earns credit: say *why* you reject −3.

### Graphical method with technology

Some equations mix function types, such as ln(x + 3) = x − 1. No algebraic rearrangement isolates x. Instead:

1. Enter y₁ = ln(x + 3) and y₂ = x − 1.
2. Use the intersect tool, or graph y = ln(x + 3) − x + 1 and find its zeros.
3. Check the window. The log graph only exists for x > −3, so look close to that asymptote as well as further right.

### Worked example 4 (GDC)

Solve ln(x + 3) = x − 1.

```
Intersections at x = −2.98 and x = 2.75 (3 s.f.)
```

The first root is very close to the asymptote x = −3. A default window can hide it, so state that you checked for a second intersection.

### Real-life models

Exponential models often lead to an equation you solve with logs.

### Worked example 5

The concentration of a drug in the blood is C = 12e^(−0.2t) mg per litre, t hours after a dose. Find when C = 3.

```
12e^(−0.2t) = 3
e^(−0.2t) = 0.25
−0.2t = ln 0.25
t = 5 ln 4 = 6.93 hours (3 s.f.)
```

Check the answer makes sense: the concentration has halved twice, and it halves roughly every 3.47 hours.

## 2.11 Transformations of graphs

### The six basic transformations

| Equation | Transformation of y = f(x) | Point (x, y) maps to |
|---|---|---|
| y = f(x) + b | Translation b units vertically | (x, y + b) |
| y = f(x − a) | Translation a units horizontally | (x + a, y) |
| y = −f(x) | Reflection in the x-axis | (x, −y) |
| y = f(−x) | Reflection in the y-axis | (−x, y) |
| y = p f(x) | Vertical stretch, scale factor p | (x, py) |
| y = f(qx) | Horizontal stretch, scale factor 1/q | (x/q, y) |

Changes *inside* the bracket act on x and work "the opposite way": f(x − 3) moves the graph 3 **right**, and f(2x) **halves** every x-coordinate.

### Order matters

Start from y = x². Stretch vertically by factor 2, then translate 5 down: y = 2x² − 5. Do it the other way round (translate 5 down, then stretch by 2) and you get y = 2(x² − 5) = 2x² − 10. For vertical changes, do stretches and reflections before translations if you want y = p f(x) + b.

### Worked example 6

The graph of y = f(x) has a maximum at (2, 5), an x-intercept at (−1, 0) and a horizontal asymptote y = 1.

For y = 2f(x − 3) + 1: translate 3 right, stretch vertically by 2, then translate 1 up.

```
(2, 5)  →  (5, 5)  →  (5, 10)  →  (5, 11)
(−1, 0) →  (2, 0)  →  (2, 0)   →  (2, 1)
y = 1   →  y = 1   →  y = 2    →  y = 3
```

For y = f(2x): halve the x-coordinates. The maximum moves to (1, 5) and the intercept to (−0.5, 0). The asymptote y = 1 does not change.

For y = −f(x): the maximum becomes a minimum at (2, −5), and the asymptote becomes y = −1.

### Worked example 7: transforming eˣ and ln x

(a) Describe how y = eˣ maps to y = 4 − 2eˣ, and find the asymptote and intercepts.

```
Vertical stretch, scale factor 2:   y = 2eˣ
Reflection in the x-axis:           y = −2eˣ
Translation 4 units up:             y = 4 − 2eˣ
Asymptote: y = 0 → y = 4
y-intercept: 4 − 2 = 2        x-intercept: eˣ = 2, x = ln 2
```

(b) For y = ln(x − 2) + 1, the asymptote x = 0 moves to x = 2, so the domain is x > 2. The x-intercept solves ln(x − 2) = −1, giving x = 2 + e⁻¹ ≈ 2.37.

## Common errors

- Giving the horizontal asymptote of (ax + b)/(cx + d) as y = b/d. That is the y-intercept. The asymptote is y = a/c.
- Leaving asymptotes off a sketch, or drawing a branch that crosses a vertical asymptote.
- Keeping u = −3 (or any negative value) as a solution of eˣ = u.
- Writing ln(x + 3) and forgetting that x > −3, so you miss or invent solutions.
- Moving f(x − 3) left instead of right, or doubling rather than halving x-coordinates for f(2x).
- Applying a vertical translation before a stretch when the equation is y = p f(x) + b.
- Using transformations of the form f(ax + b) at SL. The guide lists them as not required at SL.
- Giving only a GDC answer on a "show that" or "find the exact value" part.

## Next steps

Condense this into the [revision notes](/resources/ib-dp-mathematics-aa-sl-rational-exponential-log-functions-transformations-revision-notes/), then try the [practice set](/resources/ib-dp-mathematics-aa-sl-rational-exponential-log-functions-transformations-practice/). For paper structure and timing, read the [exam preparation guide](/resources/ib-dp-mathematics-analysis-and-approaches-exam-preparation/). The [syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/) and [subject guide](/resources/ib-dp-mathematics-analysis-and-approaches-subject-guide/) cover the whole course.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), sections SL 2.8, 2.9, 2.10 and 2.11.
