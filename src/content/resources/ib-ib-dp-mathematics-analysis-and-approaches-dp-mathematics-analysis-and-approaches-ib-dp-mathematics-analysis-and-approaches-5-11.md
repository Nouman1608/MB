---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.11 Definite integrals and areas between curves"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.11
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-11"
description: "IB DP Maths AA section 5.11 study guide: evaluating definite integrals by hand, areas where f(x) is negative, and areas between curves that cross."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on one syllabus section of IB Diploma Programme Mathematics: Analysis and Approaches: **section 5.11, definite integrals, including the analytical approach; areas of a region enclosed by a curve y = f(x) and the x-axis, where f(x) can be positive or negative, without the use of technology; and areas between curves**. It is SL content, examined at SL and HL, and it follows the IB *Mathematics: analysis and approaches guide* for first assessment 2021.

It relies on the anti-derivatives from section 5.10, covered in the [section 5.10 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-10/). The [AA integration and kinematics study guide](/resources/ib-dp-mathematics-aa-sl-integration-kinematics/) gives one example of each area type; this page adds the properties of definite integrals, unknown-limit problems and curves that swap over.

## What section 5.11 asks of you

- Evaluate definite integrals by hand using ∫ₐᵇ g′(x) dx = g(b) − g(a).
- Find the area enclosed by a curve and the x-axis when part of the curve lies below the axis, without a calculator.
- Find the area enclosed between two curves, by hand or with technology.
- Write a correct integral expression for an area before evaluating it.

## Evaluating a definite integral

Find any anti-derivative F, then subtract: ∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) − F(a). No + C is needed, because it cancels.

### Worked example 1 (calculator-free)

```
(a) ∫₀^(π/6) cos 3x dx = [(1/3) sin 3x]₀^(π/6) = (1/3) sin(π/2) − 0 = 1/3

(b) ∫₁^e (2/x) dx = [2 ln x]₁^e = 2 ln e − 2 ln 1 = 2

(c) ∫₀^(ln 2) e^(2x) dx = [(1/2)e^(2x)]₀^(ln 2) = (1/2)(4) − (1/2)(1) = 3/2

(d) ∫₀¹ x e^(x²) dx = [(1/2)e^(x²)]₀¹ = (1/2)e − 1/2 = (e − 1)/2
```

In (c), e^(2 ln 2) = e^(ln 4) = 4: simplify exponentials and logarithms exactly, because Paper 1 answers are expected in exact form. In (d) the reverse chain rule from section 5.10 supplies the anti-derivative.

## Properties of definite integrals

These follow directly from F(b) − F(a) and are often tested with an unknown function f.

```
∫ₐᵃ f(x) dx = 0
∫ᵇₐ f(x) dx = −∫ₐᵇ f(x) dx
∫ₐᵇ f(x) dx + ∫ᵇᶜ f(x) dx = ∫ₐᶜ f(x) dx
∫ₐᵇ [p f(x) + q g(x)] dx = p∫ₐᵇ f(x) dx + q∫ₐᵇ g(x) dx
```

### Worked example 2: an unknown function

Given ∫₁⁵ f(x) dx = 7, find ∫₁⁵ (3f(x) − 2) dx.

```
∫₁⁵ (3f(x) − 2) dx = 3∫₁⁵ f(x) dx − ∫₁⁵ 2 dx
                   = 3(7) − [2x]₁⁵ = 21 − 8 = 13
```

The common slip is to write 21 − 2 = 19: the constant 2 must be integrated over an interval of length 4.

### Worked example 3: an unknown limit

Find k > 1 such that ∫₁ᵏ (2x − 1) dx = 12.

```
[x² − x]₁ᵏ = (k² − k) − (1 − 1) = k² − k
k² − k − 12 = 0  →  (k − 4)(k + 3) = 0  →  k = 4  (since k > 1)
```

## Area when the curve goes below the x-axis

A definite integral is a **signed** area: regions below the x-axis count negatively. To find a geometric area, find where the curve crosses the axis, integrate each piece separately, and add the sizes.

### Worked example 4 (calculator-free)

Find the area enclosed by y = sin x and the x-axis for 0 ≤ x ≤ 3π/2.

```
sin x = 0 at x = π (inside the interval)
∫₀^π sin x dx      = [−cos x]₀^π      = 1 − (−1) = 2
∫_π^(3π/2) sin x dx = [−cos x]_π^(3π/2) = 0 − 1 = −1
Area = 2 + |−1| = 3
```

The single integral ∫₀^(3π/2) sin x dx = 1 is the signed value, not the area. A quick sketch, or knowledge of the graph, shows where to split.

## Area between two curves

If f(x) ≥ g(x) for a ≤ x ≤ b, the area between them is ∫ₐᵇ (f(x) − g(x)) dx, top minus bottom. It does not matter whether the curves are above or below the x-axis: the difference f − g is what counts.

### Worked example 5 (calculator-free): curves that cross three times

Find the total area enclosed by y = x³ and y = 4x.

```
x³ = 4x → x(x² − 4) = 0 → x = −2, 0, 2
On (−2, 0): test x = −1: x³ = −1, 4x = −4, so x³ is on top
On (0, 2):  test x = 1:  x³ = 1,  4x = 4,  so 4x is on top

Area = ∫₋₂⁰ (x³ − 4x) dx + ∫₀² (4x − x³) dx
     = [x⁴/4 − 2x²]₋₂⁰ + [2x² − x⁴/4]₀²
     = (0 − (4 − 8)) + (8 − 4) = 4 + 4 = 8
```

Integrating (4x − x³) straight from −2 to 2 gives 0, because the two regions cancel. Whenever the curves meet at more than two points, check which is on top in each interval.

### Worked example 6 (calculator-free): curves that swap over

Find the area enclosed between y = sin x and y = cos x for 0 ≤ x ≤ π.

```
sin x = cos x → tan x = 1 → x = π/4
On (0, π/4) cos x is on top; on (π/4, π) sin x is on top

∫₀^(π/4) (cos x − sin x) dx = [sin x + cos x]₀^(π/4) = √2 − 1
∫_(π/4)^π (sin x − cos x) dx = [−cos x − sin x]_(π/4)^π = 1 + √2
Area = (√2 − 1) + (1 + √2) = 2√2
```

## With technology on Paper 2

When the intersections cannot be found by hand, use the GDC to find them, store the values, and integrate the difference. For y = ln(x + 2) and y = x² − 1, one intersection is x = −1 exactly (both are 0), and the GDC gives the other as x = 1.5010…. The log curve is on top between them, so

```
Area = ∫ from −1 to 1.5010… of (ln(x + 2) − x² + 1) dx = 2.93 (3 s.f.)
```

The written integral with its limits earns the method marks; the GDC value earns the answer mark.

## Common mistakes

- Adding + C to a definite integral, or reversing F(b) − F(a).
- Not simplifying e^(ln 4) or ln e on Paper 1.
- Giving a signed integral as an area when the curve crosses the axis.
- Using bottom minus top, giving a negative "area".
- Integrating across an intersection where the curves swap over.
- Forgetting to integrate the constant in ∫ (3f(x) − 2) dx.
- Rounding intersection points before using them as limits.

## Exam technique: the command words

- **Write down an expression for the area**: give the integral with correct limits and integrand; do not evaluate unless asked.
- **Show that the area is …**: every integral, anti-derivative and substitution of limits must appear.
- **Find the exact value**: no decimals; keep surds, π, e and logarithms.
- **Hence**: use the anti-derivative or intersection found in the previous part.

## Where next

Condense the section with the [section 5.11 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-11-revision-notes/) and practise with the [section 5.11 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-11-practice/). HL students extend these ideas to areas with the y-axis and volumes of revolution in the [section 5.17 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-17/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section SL 5.11.
