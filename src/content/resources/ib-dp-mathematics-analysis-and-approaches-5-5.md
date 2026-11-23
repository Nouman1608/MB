---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.5 Introduction to integration as anti-differentiation"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.05
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-5"
description: "Study guide to IB DP Maths AA section 5.5: anti-differentiating integer powers, finding the constant from a boundary condition, and areas with technology."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 5.5 of IB DP Mathematics: Analysis and Approaches (first assessment 2021) introduces
**integration as anti-differentiation** of functions of the form f(x) = axⁿ + bxⁿ⁻¹ + …, where
n ∈ ℤ and n ≠ −1. It also covers **definite integrals using technology**, the **area of a region
enclosed by a curve y = f(x) and the x-axis where f(x) > 0**, and **anti-differentiation with a
boundary condition** to determine the constant term. The guide asks you to be aware of the link
between anti-derivatives, definite integrals and area. It is SL content, examined at SL and HL.

The [integration and kinematics study guide](/resources/ib-dp-mathematics-aa-sl-integration-kinematics/)
covers 5.5 together with 5.9 to 5.11. This page stays with 5.5 and goes further into the meaning of
the constant, rearranging before integrating, rate-of-change contexts and the technology route to
area. Afterwards, use the
[5.5 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-5-5-revision-notes/)
and the
[5.5 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-5-5-practice/).

## Anti-differentiation reverses differentiation

If F′(x) = f(x), then F is an **anti-derivative** of f. Differentiation turns axⁿ⁺¹/(n + 1) into
axⁿ, so reversing it gives

```
∫ axⁿ dx = a xⁿ⁺¹/(n + 1) + C,     n ∈ ℤ, n ≠ −1
```

Add one to the power, then divide by the new power. The integral sign ∫ and the dx together mean
"anti-differentiate with respect to x".

**Why +C?** Every constant differentiates to 0, so x³, x³ + 5 and x³ − 2 all have derivative 3x².
The anti-derivative is therefore a whole family of functions, written with an arbitrary constant C.
Graphically, the family is a set of curves that are vertical translations of each other, all with
the same gradient at any given x.

**Why n ≠ −1?** The formula would divide by n + 1 = 0. The anti-derivative of x⁻¹ is a logarithm,
which belongs to section 5.10.

## Rewrite before integrating

As with differentiation in 5.3, each term must be a power of x before the rule applies.

| Integrand | Rewrite as | Anti-derivative |
|---|---|---|
| 6x² − 4x + 7 | (already in form) | 2x³ − 2x² + 7x + C |
| 3/x⁴ | 3x⁻⁴ | −x⁻³ + C = −1/x³ + C |
| (x³ + 2)/x² | x + 2x⁻² | x²/2 − 2x⁻¹ + C |
| (2x + 1)² | 4x² + 4x + 1 | 4x³/3 + 2x² + x + C |
| x(x − 3)(x + 3) | x³ − 9x | x⁴/4 − 9x²/2 + C |

You cannot integrate a product or quotient factor by factor. Expand or divide first.

### Worked example 1

Find ∫ (8x³ − 5/x² + 2) dx.

```
8x³ − 5x⁻² + 2
∫ 8x³ dx   = 8x⁴/4  = 2x⁴
∫ −5x⁻² dx = −5x⁻¹/(−1) = 5x⁻¹
∫ 2 dx     = 2x
Answer: 2x⁴ + 5/x + 2x + C
```

**Check by differentiating:** 8x³ − 5x⁻² + 2. Differentiating your answer is a quick, reliable test,
and it takes seconds.

## Boundary conditions: finding C

A boundary condition is a known value of the function, such as f(1) = 4. It picks one curve out of
the family.

### Worked example 2

f′(x) = 3x² − 2/x² and f(1) = 4. Find f(x).

```
f(x) = ∫ (3x² − 2x⁻²) dx = x³ + 2x⁻¹ + C
f(1) = 1 + 2 + C = 4,  so C = 1
f(x) = x³ + 2/x + 1
```

### Worked example 3: a rate of change in context

Water flows into an empty tank at a rate dV/dt = 30 − 2t litres per minute for 0 ≤ t ≤ 15, where t is
in minutes. (Model invented.) Find V in terms of t and the volume after 5 minutes.

```
V = ∫ (30 − 2t) dt = 30t − t² + C
The tank is empty at t = 0: V(0) = 0, so C = 0
V = 30t − t²
V(5) = 150 − 25 = 125 litres
```

Here "empty at the start" is the boundary condition. Spotting such hidden conditions in the wording
is part of the skill.

## Definite integrals and area with technology

A **definite integral** has limits:

```
∫ₐᵇ f(x) dx
```

It is a number, not a function, so there is no +C. At 5.5 you evaluate it with technology.

When f(x) > 0 for a ≤ x ≤ b, the definite integral equals the **area** of the region bounded by the
curve, the x-axis and the lines x = a and x = b. This is the link the guide refers to: an
anti-derivative recovers a function from its rate of change, and the same process, applied between
limits, measures the area under a curve.

### Worked example 4

Find the area enclosed by y = 12/x² + 1, the x-axis and the lines x = 1 and x = 3.

```
12/x² + 1 > 0 for all x ≠ 0, so the region is above the axis
Area = ∫₁³ (12/x² + 1) dx = 10   (GDC)
```

You can confirm this by hand: the anti-derivative is −12/x + x, and (−4 + 3) − (−12 + 1) = 10. Hand
evaluation of definite integrals is formally section 5.11, but it is a useful check.

### Worked example 5

Show that y = x³ − 6x² + 9x + 1 is positive on 0 ≤ x ≤ 4, and find the area under it on that
interval.

```
Using the GDC graph (or 5.2 methods): the minimum value on [0, 4] is 1, at x = 0 and at x = 3
So f(x) > 0 on the interval
Area = ∫₀⁴ (x³ − 6x² + 9x + 1) dx = 12   (GDC)
```

Checking the sign first matters: if part of the curve were below the axis, the definite integral
would not equal the area. That case is section 5.11.

## Common mistakes

- Forgetting +C on an indefinite integral, or adding +C to a definite one.
- Multiplying by the new power instead of dividing: ∫x³ dx is x⁴/4, not 4x⁴.
- Mishandling negative powers: ∫x⁻³ dx = x⁻²/(−2) = −1/(2x²).
- Integrating a product of brackets bracket by bracket.
- Substituting the boundary condition into f′ instead of f.
- Writing only the GDC value for an area, without the integral and its limits.

## Exam technique and command words

- **Find** the integral: show the rewritten integrand and include +C.
- **Find f(x)** given f′(x) and a point: integrate, substitute, state C, and write f(x) in full.
- **Write down** the value of a definite integral: a GDC answer, but write the integral first if the
  question says "find".
- **Hence**: use the anti-derivative you found in the previous part.

## Where to go next

Condense the section with the
[5.5 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-5-5-revision-notes/),
then try the
[5.5 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-5-5-practice/).
For areas found by hand and areas between curves, continue with the
[integration and kinematics revision notes](/resources/ib-dp-mathematics-aa-sl-integration-kinematics-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 5.5: introduction to integration as anti-differentiation of
functions of the form f(x) = axⁿ + bxⁿ⁻¹ + …, where n ∈ ℤ, n ≠ −1; definite integrals using
technology; area of a region enclosed by a curve y = f(x) and the x-axis, where f(x) > 0;
anti-differentiation with a boundary condition to determine the constant term.
