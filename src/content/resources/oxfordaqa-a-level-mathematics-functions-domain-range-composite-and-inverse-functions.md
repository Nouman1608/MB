---
title: "OxfordAQA International AS and A-level Mathematics: Functions, composites, inverses and modulus (9660)"
seoTitle: "OxfordAQA A-level Maths P2 Functions and Modulus Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Functions: domain, range, composite and inverse functions, modulus"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 187
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-algebra-and-functions-oxfordaqa-alevel-maths"
description: "Study guide to functions, domain and range, composite and inverse functions and the modulus for OxfordAQA International A-level Mathematics Unit P2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers the first part of content area P2.1 (Algebra and functions) in the OxfordAQA *International AS and A-level Mathematics* specification, Version 5.2. The specification places this content in International A-level (A2) Unit P2 (Pure Maths). It is not examined at International AS. The other parts of P2.1 (graph transformations, rational functions, algebraic division and partial fractions) have their own pages and are not repeated here.

Go to the [course hub](/boards/oxfordaqa/a-level/mathematics/) for all Mathematics resources and the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) to tick off each outcome. The other two pages for this unit are the [revision notes](/resources/oxfordaqa-a-level-mathematics-functions-domain-range-composite-and-inverse-functions-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-mathematics-functions-domain-range-composite-and-inverse-functions-practice/). To find out which parts need work first, take one of the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Spec reference | What you must be able to do |
|---|---|
| P2.1 | Define a function; state its domain and range |
| P2.1 | Form and use composite functions fg(x) = f(g(x)) |
| P2.1 | Find inverse functions f⁻¹ and relate their graphs by reflection in y = x |
| P2.1 | Use the modulus function and related graphs, and solve modulus inequalities from the solutions of the matching equation |

The specification's example of the last type is |x + 2| < 3|x|, solved using the solutions of |x + 2| = 3|x|.

The International A-level includes the International AS units as well as Unit P2, so completing the square and sketching straight lines and parabolas from the AS pure content should already be comfortable. The specification states that calculators may be used in this unit. Even so, every skill below is shown by hand, because the working is what you write down.

## 1. Functions, domain and range

A **function** is a rule that gives exactly one output for each allowed input. The set of allowed inputs is the **domain**. The set of outputs actually produced is the **range**.

The specification says notation such as f(x) = x² − 4 may be used, and that a domain may be written as x > 1 or a range as f(x) > −3. Follow that style.

Two types matter for later work:

* **One-one**: each output comes from exactly one input. Lines such as f(x) = 3x − 2 are one-one.
* **Many-one**: some outputs come from two or more inputs. f(x) = x² on all real x is many-one, because f(2) = f(−2) = 4.

Only one-one functions have an inverse. This is why exam questions often restrict a domain.

**Finding a range.** Sketch or complete the square, then read off the lowest and highest outputs over the stated domain. Check whether the turning point lies inside the domain.

**Worked example 1.** f(x) = x² − 10x + 29, domain x ≥ 6. Find the range.

```
f(x) = (x − 5)² + 4
Turning point at x = 5, which is outside x ≥ 6.
For x ≥ 6 the function is increasing.
f(6) = 36 − 60 + 29 = 5
Range: f(x) ≥ 5
```

If the domain were all real x, the range would be f(x) ≥ 4. The restriction changes the range.

## 2. Composite functions

fg(x) means "do g first, then f": fg(x) = f(g(x)). Read from the inside outwards.

**Worked example 2.** f(x) = 3x − 5 and g(x) = x² + 2. Find fg(x) and gf(x), then solve fg(x) = gf(x).

```
fg(x) = f(x² + 2) = 3(x² + 2) − 5 = 3x² + 1
gf(x) = g(3x − 5) = (3x − 5)² + 2 = 9x² − 30x + 27
Set equal:  3x² + 1 = 9x² − 30x + 27
            6x² − 30x + 26 = 0
            3x² − 15x + 13 = 0
x = (15 ± √(225 − 156)) / 6 = (15 ± √69) / 6
```

So x = (15 − √69)/6 or x = (15 + √69)/6. Note fg and gf are generally different. Order matters.

**Domain of a composite.** For fg(x), the output of g must be an allowed input for f. This can cut down the domain of fg.

**Worked example 3.** f(x) = √(x − 1) for x ≥ 1, and g(x) = x² − 10 for all real x. Find fg(x) and its domain.

```
fg(x) = f(x² − 10) = √(x² − 10 − 1) = √(x² − 11)
Need x² − 11 ≥ 0, so x ≤ −√11 or x ≥ √11.
```

The function g is defined for every real x, but fg is only defined where g(x) ≥ 1.

## 3. Inverse functions

If f is one-one, its **inverse** f⁻¹ undoes f. The notation f⁻¹ is the one the specification uses. Three facts follow:

* f⁻¹f(x) = x and ff⁻¹(x) = x.
* The domain of f⁻¹ is the range of f.
* The range of f⁻¹ is the domain of f.

**Method for finding f⁻¹:**

1. Write y = f(x).
2. Rearrange to make x the subject.
3. Swap x and y (or just rename y as x).
4. State the domain of f⁻¹, taken from the range of f.

**Worked example 4.** f(x) = (4x + 1)/(x − 2) for x ≠ 2. Find f⁻¹.

```
y = (4x + 1)/(x − 2)
y(x − 2) = 4x + 1
xy − 2y = 4x + 1
xy − 4x = 2y + 1
x(y − 4) = 2y + 1
x = (2y + 1)/(y − 4)
```

So f⁻¹(x) = (2x + 1)/(x − 4), x ≠ 4. The value 4 is excluded because it is not in the range of f. Check: f(5) = 7, and f⁻¹(7) = 15/3 = 5. Good.

**Worked example 5 (restricted domain).** f(x) = x² − 10x + 29, x ≥ 6. Find f⁻¹ and its domain.

```
y = (x − 5)² + 4
y − 4 = (x − 5)²
x − 5 = +√(y − 4)    (positive root, since x ≥ 6 means x − 5 ≥ 1)
x = 5 + √(y − 4)
```

So f⁻¹(x) = 5 + √(x − 4), with domain x ≥ 5 (the range of f from example 1). Check: f⁻¹(5) = 5 + 1 = 6, which is the start of the original domain.

### Graphs of inverse functions

The graph of y = f⁻¹(x) is the reflection of y = f(x) in the line y = x. Each point (a, b) on f gives the point (b, a) on f⁻¹.

Two consequences:

* If f is increasing, any point where y = f(x) meets y = f⁻¹(x) lies on y = x, so solving f(x) = x finds it. If f is decreasing, the curves can also meet off that line, so solve f(x) = f⁻¹(x) directly.
* A function that equals its own inverse is **self-inverse**, for example f(x) = (x + 1)/(x − 1) with x ≠ 1, since ff(x) = x.

**Worked example 6.** Find where y = f(x) in example 5 meets y = f⁻¹(x).

```
f(x) = x:   x² − 10x + 29 = x
            x² − 11x + 29 = 0
x = (11 ± √5)/2
```

Here f is increasing for x ≥ 6, so the meeting points lie on y = x. The domain is x ≥ 6, and (11 − √5)/2 ≈ 4.38 is below 6. So the only meeting point is x = (11 + √5)/2 ≈ 6.62, at the point ((11 + √5)/2, (11 + √5)/2).

## 4. The modulus function

|x| is the size of x, ignoring the sign. The definition is |x| = x for x ≥ 0 and |x| = −x for x < 0. So |x| ≥ 0 always.

For any function, y = |f(x)| keeps the parts of the graph where f(x) ≥ 0 and **reflects the parts below the x-axis** into the upper half-plane.

**Worked example 7.** Sketch y = |2x − 5| and state the range.

```
2x − 5 = 0 at x = 2.5
For x ≥ 2.5:  y = 2x − 5
For x < 2.5:  y = 5 − 2x
y-intercept: |−5| = 5
```

The graph is a V with vertex (2.5, 0). The range is y ≥ 0.

### Solving modulus equations

Square both sides when both sides are moduli, or split into cases. Case-splitting needs a check: the right side must be non-negative when the left is a modulus.

**Worked example 8.** Solve |x − 4| = 2x + 1.

```
Case 1: x − 4 = 2x + 1  →  x = −5.  Check: 2(−5) + 1 = −9 < 0.  Reject.
Case 2: −(x − 4) = 2x + 1  →  4 − x = 2x + 1  →  x = 1.  Check: |−3| = 3 and 2 + 1 = 3.  Accept.
```

The only solution is x = 1.

### Solving modulus inequalities

The specification's method is to solve the matching equation, then use a sketch. The equation gives the crossing points. The sketch tells you which side to shade.

**Worked example 9.** Solve |x + 5| < 2|x − 1|.

```
Equation: |x + 5| = 2|x − 1|
x + 5 = 2(x − 1)    →  x = 7
x + 5 = −2(x − 1)   →  3x = −3  →  x = −1
```

Sketch y = |x + 5| (V at x = −5, slope 1) and y = 2|x − 1| (V at x = 1, slope 2). They cross at x = −1 and x = 7. At x = 0, the left side is 5 and the right side is 2, so the V for 2|x − 1| is below. We want the left curve **below** the right curve, which happens outside the crossings.

**Answer: x < −1 or x > 7.**

Test: x = 10 gives 15 < 18, true. x = 3 gives 8 < 4, false.

### Related graphs and quadratics

**Worked example 10.** Solve |x² + 4x − 5| < 7.

The quadratic x² + 4x − 5 = (x + 5)(x − 1) is negative between −5 and 1, so |x² + 4x − 5| reflects that part upwards. Solve the two boundary equations:

```
x² + 4x − 5 = 7    →  x² + 4x − 12 = 0  →  x = −6 or x = 2
x² + 4x − 5 = −7   →  x² + 4x + 2 = 0   →  x = −2 ± √2
```

The curve y = |x² + 4x − 5| lies below y = 7 where −6 < x < −2 − √2 and where −2 + √2 < x < 2.

## Common errors

* Writing fg(x) as g first. The function nearest x acts first.
* Forgetting that restricting the domain changes the range, and so changes the domain of the inverse.
* Giving f⁻¹(x) = 1/f(x). The inverse is not the reciprocal.
* Taking both roots when finding the inverse of a restricted quadratic. Choose the root that matches the original domain.
* Accepting a modulus-equation solution without testing it.
* Joining modulus inequality answers wrongly. A "between" answer is one interval, a, b with a < x < b. An "outside" answer needs the word "or": x < a or x > b.

## Next steps

Work through the [practice questions](/resources/oxfordaqa-a-level-mathematics-functions-domain-range-composite-and-inverse-functions-practice/), then use the [revision notes](/resources/oxfordaqa-a-level-mathematics-functions-domain-range-composite-and-inverse-functions-revision-notes/) as a final check. For earlier pure content, see the [Unit P1 revision notes](/resources/oxfordaqa-a-level-mathematics-p1-revision-notes/).

## Official syllabus

OxfordAQA, *International AS and A-level Mathematics (9660)* specification, Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019), content area P2.1.
