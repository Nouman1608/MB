---
title: "IB DP Mathematics: Applications and Interpretation -- Further differentiation and integration, volumes of revolution and kinematics (HL) Study Guide"
seoTitle: "IB Maths AI HL Further Calculus and Kinematics Study Guide"
resourceType: "study-guides"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Further differentiation and integration, volumes of revolution and kinematics (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 5.9
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-9"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-10"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-11"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-12"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-13"
description: "IB Maths AI HL study guide to chain, product and quotient rules, second derivatives, substitution, volumes of revolution and kinematics."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the HL further calculus unit of IB Diploma Programme Mathematics: Applications and Interpretation. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 5.9–5.13, and all of it is HL only (AHL). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 HL sessions.

When you have worked through it, condense it with the [revision notes](/resources/ib-dp-mathematics-ai-hl-further-calculus-kinematics-revision-notes/) and test yourself on the [practice questions](/resources/ib-dp-mathematics-ai-hl-further-calculus-kinematics-practice/). The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) show where this unit sits in the course.

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 5.9 | Differentiate sin x, cos x, tan x, eˣ, ln x and xⁿ (n ∈ ℚ); use the chain, product and quotient rules; solve related rates of change problems | HL only |
| 5.10 | Find the second derivative (d²y/dx² or f′′(x)); use the second derivative test; identify points of inflexion and concavity | HL only |
| 5.11 | Integrate xⁿ (n ∈ ℚ, including n = −1), sin x, cos x, 1/cos²x and eˣ; integrate by inspection or by substitution of the form ∫ f(g(x))g′(x) dx | HL only |
| 5.12 | Find areas between a curve and the x- or y-axis, including negative integrals; find volumes of revolution about the x- or y-axis | HL only |
| 5.13 | Solve kinematics problems with displacement s, velocity v and acceleration a; find displacement and total distance; use ẋ and ẍ | HL only |

All three HL papers require technology, so you always have a GDC. You still need the analytic methods: questions often say "show that" or "find an expression", and a GDC value alone does not earn those marks.

## 5.9 Derivatives and the chain, product and quotient rules

### Standard derivatives

| f(x) | f′(x) |
|---|---|
| xⁿ (n ∈ ℚ) | nxⁿ⁻¹ |
| sin x | cos x |
| cos x | −sin x |
| tan x | 1/cos²x |
| eˣ | eˣ |
| ln x | 1/x |

Angles are in radians whenever you differentiate or integrate trigonometric functions.

### The three rules

- **Chain rule:** if y = f(u) and u = g(x), then dy/dx = (dy/du) × (du/dx).
- **Product rule:** if y = uv, then dy/dx = u(dv/dx) + v(du/dx).
- **Quotient rule:** if y = u/v, then dy/dx = (v(du/dx) − u(dv/dx))/v².

**Worked example 1.** Differentiate y = x² sin 3x.

```
u = x²       du/dx = 2x
v = sin 3x   dv/dx = 3 cos 3x   (chain rule)
dy/dx = x²(3 cos 3x) + (sin 3x)(2x)
      = 3x² cos 3x + 2x sin 3x
```

**Worked example 2.** Differentiate y = e²ˣ/(x + 1).

```
u = e²ˣ     du/dx = 2e²ˣ
v = x + 1   dv/dx = 1
dy/dx = ((x + 1)(2e²ˣ) − e²ˣ(1))/(x + 1)²
      = e²ˣ(2x + 1)/(x + 1)²
```

### Related rates of change

Two quantities change with time and are linked by an equation. Differentiate the equation with respect to t (using the chain rule), then substitute the values at the instant you are asked about. Substitute only **after** differentiating.

**Worked example 3.** A spherical snowball melts so that its volume decreases at 12 cm³ per minute. Find the rate of change of the radius, and of the surface area, when r = 5 cm.

```
V = (4/3)πr³          dV/dt = 4πr² (dr/dt)
−12 = 4π(25)(dr/dt)   dr/dt = −3/(25π) ≈ −0.0382 cm min⁻¹
S = 4πr²              dS/dt = 8πr (dr/dt)
dS/dt = 8π(5)(−3/(25π)) = −4.8 cm² min⁻¹
```

The negative signs show both quantities are decreasing.

## 5.10 The second derivative

Differentiate f′(x) again to get f′′(x), also written d²y/dx². It measures how the gradient is changing.

- **Concave-up:** f′′(x) > 0 (gradient increasing).
- **Concave-down:** f′′(x) < 0 (gradient decreasing).
- **Second derivative test:** at a point where f′(x) = 0, if f′′(x) < 0 it is a local maximum; if f′′(x) > 0 it is a local minimum.
- **Point of inflexion:** a point where the concavity changes. f′′(x) = 0 there, but f′′(x) = 0 on its own is not enough: you must check the sign of f′′ changes. For y = x⁴, f′′(0) = 0 but the curve is concave-up on both sides, so (0, 0) is not a point of inflexion.

**Worked example 4.** f(x) = x³ − 6x² + 9x + 2. Find and classify the stationary points and find the point of inflexion.

```
f′(x) = 3x² − 12x + 9 = 3(x − 1)(x − 3) = 0  →  x = 1 or x = 3
f′′(x) = 6x − 12
f′′(1) = −6 < 0  →  local maximum at (1, 6)
f′′(3) =  6 > 0  →  local minimum at (3, 2)
f′′(x) = 0 at x = 2; f′′ < 0 for x < 2 and f′′ > 0 for x > 2
Concavity changes, so (2, 4) is a point of inflexion.
```

**Interpreting in context.** If N(t) is the number of people who have heard a rumour, a point of inflexion where the curve changes from concave-up to concave-down is the moment the rumour is spreading fastest: dN/dt is at its greatest there.

## 5.11 Further integration

### Standard integrals

| f(x) | ∫ f(x) dx |
|---|---|
| xⁿ (n ≠ −1) | xⁿ⁺¹/(n + 1) + C |
| x⁻¹ = 1/x | ln\|x\| + C |
| sin x | −cos x + C |
| cos x | sin x + C |
| 1/cos²x | tan x + C |
| eˣ | eˣ + C |

**Worked example 5.** Find ∫ (3√x − 2/x + 4/cos²x) dx.

```
3x^(1/2) → 3 × x^(3/2)/(3/2) = 2x^(3/2)
∫ = 2x^(3/2) − 2 ln|x| + 4 tan x + C
```

### Integration by inspection

If the inside of a standard function is linear, ax + b, integrate as normal and divide by a:

- ∫ cos(4x − 1) dx = (1/4) sin(4x − 1) + C
- ∫ 1/(2x + 3) dx = (1/2) ln|2x + 3| + C

Always check by differentiating your answer.

### Substitution of the form ∫ f(g(x))g′(x) dx

Look for a function g(x) whose derivative (or a multiple of it) also appears. Let u = g(x), so du = g′(x) dx.

**Worked example 6.** Find ∫ 6x(x² + 1)⁴ dx.

```
u = x² + 1,  du = 2x dx,  so 6x dx = 3 du
∫ 3u⁴ du = (3/5)u⁵ + C = (3/5)(x² + 1)⁵ + C
```

**Worked example 7.** Find ∫ sin x cos³x dx, then the exact value of ∫₀¹ 3x²e^(x³) dx.

```
u = cos x,  du = −sin x dx
∫ sin x cos³x dx = ∫ −u³ du = −u⁴/4 + C = −(1/4)cos⁴x + C

u = x³,  du = 3x² dx;  x = 0 → u = 0,  x = 1 → u = 1
∫₀¹ eᵘ du = [eᵘ]₀¹ = e − 1 ≈ 1.72
```

Change the limits to u-values, or substitute back to x before using the original limits. Never mix the two.

## 5.12 Areas and volumes of revolution

### Area and negative integrals

A definite integral counts area below the x-axis as negative. To find a **total area**, split the interval at the roots and add the absolute values, or use your GDC on ∫ |f(x)| dx.

**Worked example 8.** Find the area enclosed by y = x² − 4x + 3 and the x-axis for 0 ≤ x ≤ 3.

```
Roots: (x − 1)(x − 3) = 0 → x = 1, x = 3
∫₀¹ (x² − 4x + 3) dx = 4/3      (above the axis)
∫₁³ (x² − 4x + 3) dx = −4/3     (below the axis)
Area = 4/3 + 4/3 = 8/3
```

Note that ∫₀³ (x² − 4x + 3) dx = 0, which is not the area.

### Area between a curve and the y-axis

Write x as a function of y and integrate with respect to y: area = ∫ₐᵇ |x| dy.

**Worked example 9.** Find the area between x = y² + 1, the y-axis, y = 0 and y = 2.

```
∫₀² (y² + 1) dy = [y³/3 + y]₀² = 8/3 + 2 = 14/3
```

### Volumes of revolution

Rotating a region through 2π about an axis gives a solid.

- About the x-axis: V = ∫ₐᵇ πy² dx
- About the y-axis: V = ∫ₐᵇ πx² dy

For the y-axis, the limits are y-values and you need x² in terms of y.

**Worked example 10.** The region under y = e^(x/2) for 0 ≤ x ≤ 2 is rotated about the x-axis. Find the volume.

```
y² = eˣ
V = π ∫₀² eˣ dx = π(e² − 1) ≈ 20.1 units³
```

**Worked example 11.** A bowl is formed by rotating y = x², 0 ≤ y ≤ 9 (units in cm), about the y-axis. Find its volume.

```
x² = y
V = π ∫₀⁹ y dy = π[y²/2]₀⁹ = 81π/2 ≈ 127 cm³
```

## 5.13 Kinematics

For motion in a straight line:

- v = ds/dt, a = dv/dt = d²s/dt² = v(dv/ds)
- Displacement between t₁ and t₂ = ∫ v(t) dt from t₁ to t₂
- Total distance travelled = ∫ |v(t)| dt from t₁ to t₂
- Speed is the magnitude of velocity, |v|
- Dot notation: ẋ = dx/dt and ẍ = d²x/dt²

A particle is **at rest** when v = 0. It is **speeding up** when v and a have the same sign and **slowing down** when they have opposite signs.

**Worked example 12.** s = t³ − 6t² + 9t metres, 0 ≤ t ≤ 5 seconds.

```
v = 3t² − 12t + 9 = 3(t − 1)(t − 3)   at rest at t = 1 and t = 3
a = 6t − 12
s(0) = 0, s(1) = 4, s(3) = 0, s(5) = 20
Displacement = s(5) − s(0) = 20 m
Distance = 4 + 4 + 20 = 28 m
At t = 2.5: v = −2.25, a = 3 (opposite signs) → slowing down
```

**Worked example 13 (GDC).** v(t) = e^(0.5t) − 3 m s⁻¹ for 0 ≤ t ≤ 4.

```
v = 0 when t = 2 ln 3 ≈ 2.20 s
Displacement = ∫₀⁴ (e^(0.5t) − 3) dt = 2e² − 14 ≈ 0.778 m
Distance = ∫₀⁴ |e^(0.5t) − 3| dt ≈ 5.96 m   (GDC)
```

The displacement is small because the particle goes back about 2.59 m and then forward about 3.37 m.

**Worked example 14 (using v dv/ds).** A particle's velocity depends on its displacement: v = s² + 1. Find a when s = 2.

```
dv/ds = 2s
a = v(dv/ds) = (s² + 1)(2s) = 5 × 4 = 20 m s⁻²
```

## Common errors

- Writing d/dx(sin 3x) = cos 3x: the chain rule gives 3 cos 3x.
- Reversing the numerator of the quotient rule; v(du/dx) comes first.
- Substituting the instant's values before differentiating in a related-rates problem, which turns a variable into a constant.
- Claiming a point of inflexion only because f′′(x) = 0, without checking the change of concavity.
- Forgetting the modulus in ∫ 1/x dx = ln|x| + C, or omitting + C.
- Integrating straight across a root and reporting the net integral as an area.
- Using x-limits when rotating about the y-axis.
- Giving displacement when the question asks for total distance, or a negative value for speed.

## Next steps

Condense this unit with the [revision notes](/resources/ib-dp-mathematics-ai-hl-further-calculus-kinematics-revision-notes/), then work the [practice set](/resources/ib-dp-mathematics-ai-hl-further-calculus-kinematics-practice/). For paper formats and planning, see the [AI syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/), the [AI subject guide](/resources/ib-dp-mathematics-applications-and-interpretation-subject-guide/) and [AI exam preparation](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/). Volumes of solids also appear in the [geometry and trigonometry unit](/resources/ib-dp-mathematics-ai-geometry-trigonometry/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021.
