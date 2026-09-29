---
title: "IB DP Mathematics: Analysis and Approaches -- Integration, areas and kinematics Study Guide"
seoTitle: "IB Maths AA Integration and Kinematics Study Guide"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Integration, areas and kinematics"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.5
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-5"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-9"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-10"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-11"
description: "Learn IB DP Maths AA integration from scratch: anti-differentiation, reverse chain rule, definite integrals, areas and kinematics, with worked examples."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the integration unit of IB Diploma Programme Mathematics: Analysis and Approaches from scratch. It is aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, and covers syllabus sections 5.5, 5.9, 5.10 and 5.11. All of it is SL content, so it is examined at both SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 SL and HL sessions.

The [AA calculus strand overview](/resources/ib-dp-mathematics-aa-calculus/) shows where integration sits in the course. This guide goes section by section in more depth. It assumes the differentiation rules and the function work in the [AA functions study guide](/resources/ib-dp-mathematics-aa-functions/). When you have worked through it, use the [integration revision notes](/resources/ib-dp-mathematics-aa-sl-integration-kinematics-revision-notes/) and the [integration practice questions](/resources/ib-dp-mathematics-aa-sl-integration-kinematics-practice/). For the whole course, see the [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/).

## What this unit covers

| Section | What you must be able to do | SL/HL |
|---|---|---|
| 5.5 | Anti-differentiate ax^n + bx^(n−1) + … (n ∈ ℤ, n ≠ −1); find the constant from a boundary condition; find definite integrals and areas (f(x) > 0) with technology | SL and HL |
| 5.9 | Solve kinematics problems with displacement s, velocity v, acceleration a and total distance travelled | SL and HL |
| 5.10 | Integrate xⁿ (n ∈ ℚ), sin x, cos x, 1/x and eˣ, and their composites with ax + b; integrate by inspection or substitution for ∫kg′(x)f(g(x))dx | SL and HL |
| 5.11 | Evaluate definite integrals analytically; find areas where f(x) can be negative without technology; find areas between curves | SL and HL |

SL Paper 1 (and HL Paper 1) allows no technology. SL Paper 2 (and HL Papers 2 and 3) requires it. Sections 5.10 and 5.11 are mainly by-hand skills, and 5.11 says areas where f(x) can be negative are found without technology. Section 5.5 includes definite integrals with technology.

## 5.5 Anti-differentiation and the constant

Integration reverses differentiation. If F′(x) = f(x), then

```
∫ f(x) dx = F(x) + C
```

C is the constant of integration. It is there because differentiating any constant gives 0, so many functions share the same derivative.

For powers, add one to the power and divide by the new power:

```
∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C,   n ≠ −1
```

At 5.5 the powers are integers, which includes negative ones. Rewrite fractions as negative powers first.

**Worked example.** Find ∫(4x³ − 3/x²) dx.

```
4x³ − 3/x² = 4x³ − 3x⁻²
∫ 4x³ dx  = 4 · x⁴/4  = x⁴
∫ −3x⁻² dx = −3 · x⁻¹/(−1) = 3x⁻¹
Answer: x⁴ + 3/x + C
```

### Boundary conditions

A boundary condition is one known point on the curve. Use it to find C.

**Worked example.** dy/dx = 6x² − 4x + 1 and y = 5 when x = 2. Find y.

```
y = 2x³ − 2x² + x + C
5 = 2(8) − 2(4) + 2 + C
5 = 10 + C,  so C = −5
y = 2x³ − 2x² + x − 5
```

### Definite integrals and area with technology

The definite integral ∫ₐᵇ f(x) dx is a number, not a function. When f(x) > 0 on a ≤ x ≤ b, it equals the area between the curve, the x-axis and the lines x = a and x = b. This is the link the guide asks you to know: anti-derivatives, definite integrals and area.

The guide expects you to write a correct integral expression first, then evaluate it. On Paper 2 the GDC does the evaluation.

**Worked example (GDC).** Find the area between y = √(x³ + 1), the x-axis, x = 0 and x = 2.

```
The curve is above the x-axis on [0, 2].
Area = ∫₀² √(x³ + 1) dx
     = 3.2413…  (GDC)
     = 3.24 (3 s.f.)
```

Writing only "3.24" risks losing the method mark. Always show the integral with its limits.

## 5.10 Standard integrals and the reverse chain rule

| f(x) | ∫ f(x) dx |
|---|---|
| xⁿ, n ∈ ℚ, n ≠ −1 | xⁿ⁺¹/(n + 1) + C |
| 1/x | ln x + C |
| sin x | −cos x + C |
| cos x | sin x + C |
| eˣ | eˣ + C |

Now n can be any rational number, so roots are included: √x = x^(1/2).

### Composites with ax + b

If the inside is linear, integrate as normal and divide by a, the coefficient of x:

```
∫ cos(3x − 1) dx  = (1/3) sin(3x − 1) + C
∫ e^(2x + 5) dx   = (1/2) e^(2x + 5) + C
∫ 4/(2x + 1) dx   = 4 · (1/2) ln(2x + 1) + C = 2 ln(2x + 1) + C
∫ √(4x + 1) dx    = (4x + 1)^(3/2) / ((3/2) · 4) + C = (1/6)(4x + 1)^(3/2) + C
```

Check any of these by differentiating. The chain rule multiplies by a, which cancels the 1/a.

### Integration by inspection (reverse chain rule)

The guide covers integrals of the form ∫ k g′(x) f(g(x)) dx. Spot an inner function g(x) whose derivative (up to a constant) is also present.

**Worked example.** Find ∫ 6x(x² + 3)⁴ dx.

```
Inner function g(x) = x² + 3, g′(x) = 2x. 6x = 3 · 2x.
Guess (x² + 3)⁵. Its derivative is 5(x² + 3)⁴ · 2x = 10x(x² + 3)⁴.
We need 6x(x² + 3)⁴, so multiply the guess by 6/10 = 3/5.
Answer: (3/5)(x² + 3)⁵ + C
```

### Substitution

Substitution does the same job more formally. Let u = g(x).

**Worked example.** Find ∫ x/(x² + 4) dx.

```
Let u = x² + 4, so du/dx = 2x, and x dx = (1/2) du.
∫ x/(x² + 4) dx = ∫ (1/2)(1/u) du = (1/2) ln u + C
               = (1/2) ln(x² + 4) + C
```

Always write the answer in terms of x.

## 5.11 Definite integrals by hand and areas

The analytical rule is

```
∫ₐᵇ g′(x) dx = g(b) − g(a)
```

Find an anti-derivative, substitute the upper limit, then subtract the value at the lower limit. No +C is needed.

**Worked example.** Find ∫₁⁴ (3√x − 2) dx.

```
∫ (3x^(1/2) − 2) dx = 2x^(3/2) − 2x
[2x^(3/2) − 2x]₁⁴ = (2 · 8 − 8) − (2 − 2) = 8 − 0 = 8
```

The guide also notes that some definite integrals can only be found with technology. Expect those on Paper 2.

### Areas where the curve goes below the axis

If f(x) < 0 on part of the interval, the integral over that part is negative. To find the total area, split at each root and add the sizes.

**Worked example.** Find the area enclosed by y = x² − 4x + 3, the x-axis, x = 0 and x = 3, without a calculator.

```
Roots: (x − 1)(x − 3) = 0, x = 1 or x = 3.
F(x) = x³/3 − 2x² + 3x
∫₀¹ f(x) dx = F(1) − F(0) = 4/3 − 0 = 4/3
∫₁³ f(x) dx = F(3) − F(1) = 0 − 4/3 = −4/3
Area = 4/3 + |−4/3| = 8/3
```

Note that ∫₀³ f(x) dx = 0. That is the signed value, not the area.

### Area between two curves

If f(x) ≥ g(x) on [a, b], the area between them is

```
Area = ∫ₐᵇ (f(x) − g(x)) dx     (top minus bottom)
```

The limits are usually the x-coordinates of the intersection points.

**Worked example (calculator-free).** Find the area enclosed by y = 5 − x² and y = x² − 3.

```
Intersect: 5 − x² = x² − 3 → 2x² = 8 → x = ±2
Top curve on (−2, 2): 5 − x² (at x = 0 it is 5, the other is −3)
Area = ∫₋₂² (8 − 2x²) dx = [8x − 2x³/3]₋₂²
     = (16 − 16/3) − (−16 + 16/3) = 64/3
```

**Worked example (GDC).** Find the area enclosed by y = e^(x/2) and y = 5 − x².

```
Intersections (GDC): x = −2.1587… and x = 1.6490…
Area = ∫ from −2.1587… to 1.6490… of (5 − x² − e^(x/2)) dx
     = 10.3 (3 s.f.)
```

Store the intersection values in the GDC. Typing 3 s.f. limits into the integral can shift the answer.

## 5.9 Kinematics

For motion along a line:

```
v = ds/dt        a = dv/dt = d²s/dt²
Displacement from t₁ to t₂ = ∫ v(t) dt  (limits t₁ to t₂)
Distance from t₁ to t₂     = ∫ |v(t)| dt (limits t₁ to t₂)
Speed = |v|
```

Going down the chain (s → v → a) you differentiate. Going up (a → v → s) you integrate and need a boundary condition such as s(0) or v(0).

Displacement is the change in position and can be negative. Distance counts every metre moved in either direction, so it is never negative. They differ only when the particle changes direction, which happens where v changes sign.

**Worked example (calculator-free).** A particle moves in a line with v(t) = t² − 6t + 8 m s⁻¹, for 0 ≤ t ≤ 5. When t = 0, s = 1 m.

```
(a) a(t) = 2t − 6.
(b) At rest: (t − 2)(t − 4) = 0, so t = 2 and t = 4.
(c) Let F(t) = t³/3 − 3t² + 8t.
    Displacement = F(5) − F(0) = 20/3 m
    Position at t = 5: s = 1 + 20/3 = 23/3 m
(d) Split at t = 2 and t = 4:
    ∫₀² v dt = 20/3,  ∫₂⁴ v dt = −4/3,  ∫₄⁵ v dt = 4/3
    Distance = 20/3 + 4/3 + 4/3 = 28/3 m
(e) At t = 3, v = −1, so speed = 1 m s⁻¹.
```

### Using your GDC for kinematics

On Paper 2, find total distance by integrating |v(t)| directly. You do not need to find where v = 0 first, though writing ∫|v(t)|dt with limits is still required for the method mark. Use the graph of v to check for sign changes.

## Common errors

- Leaving out +C on an indefinite integral, or adding it to a definite one.
- Integrating 3/x² as 3 ln(x²). Rewrite as 3x⁻² first. Only x⁻¹ gives ln.
- Multiplying by a instead of dividing: ∫ e^(2x + 5) dx is not 2e^(2x + 5).
- Sign errors with trig: ∫ sin x dx = −cos x, not cos x.
- Reversing the order in F(b) − F(a).
- Integrating straight across a root when the question asks for area.
- Using "bottom minus top" between curves, giving a negative area.
- Giving displacement when the question asks for total distance.
- In a boundary-condition problem, substituting x and y the wrong way round.
- Rounding intersection points before using them as limits on the GDC.

## Next

Test yourself with the [integration and kinematics revision notes](/resources/ib-dp-mathematics-aa-sl-integration-kinematics-revision-notes/), then work through the [practice questions with marked answers](/resources/ib-dp-mathematics-aa-sl-integration-kinematics-practice/). For exam technique across the course, see the [AA exam preparation guide](/resources/ib-dp-mathematics-analysis-and-approaches-exam-preparation/) and the [AA subject guide](/resources/ib-dp-mathematics-analysis-and-approaches-subject-guide/). The [AA syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/) lists every section.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020). Sections SL 5.5, 5.9, 5.10 and 5.11.
