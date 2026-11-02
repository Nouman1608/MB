---
title: "IB DP Mathematics: Analysis and Approaches -- Integration, areas and kinematics Revision Notes"
seoTitle: "IB Maths AA Integration and Kinematics Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed IB DP Maths AA revision notes on integration, definite integrals, areas between curves and kinematics, with a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

For full explanations and longer worked examples, start with the [integration and kinematics study guide](/resources/ib-dp-mathematics-aa-sl-integration-kinematics/). These notes are for the final weeks.

They cover the integration unit of IB Diploma Programme Mathematics: Analysis and Approaches, aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 5.5, 5.9, 5.10 and 5.11. This is SL content, so it is examined at both SL and HL. The notes follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 SL and HL sessions.

For a short overview of the whole strand, see the [AA calculus strand page](/resources/ib-dp-mathematics-aa-calculus/). Test yourself afterwards with the [integration practice questions](/resources/ib-dp-mathematics-aa-sl-integration-kinematics-practice/). The [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/) show the rest of the course.

## Definitions

- **Anti-derivative:** F is an anti-derivative of f if F′(x) = f(x).
- **Indefinite integral:** ∫ f(x) dx = F(x) + C. A family of functions. Needs +C.
- **Boundary condition:** one known point (x, y) used to fix C.
- **Definite integral:** ∫ₐᵇ f(x) dx = F(b) − F(a). A number. No +C.
- **Displacement s:** position relative to a fixed origin. Can be negative.
- **Velocity v = ds/dt.** Has a sign (direction).
- **Acceleration a = dv/dt = d²s/dt².**
- **Speed = |v|.** Never negative.
- **Total distance travelled:** ∫ |v(t)| dt between the two times.

## Formulas

| Integral | Result | Section |
|---|---|---|
| ∫ xⁿ dx | xⁿ⁺¹/(n + 1) + C, n ≠ −1 (5.5: n ∈ ℤ; 5.10: n ∈ ℚ) | 5.5, 5.10 |
| ∫ (1/x) dx | ln x + C | 5.10 |
| ∫ sin x dx | −cos x + C | 5.10 |
| ∫ cos x dx | sin x + C | 5.10 |
| ∫ eˣ dx | eˣ + C | 5.10 |
| ∫ f(ax + b) dx | (1/a) F(ax + b) + C | 5.10 |
| ∫ k g′(x) f(g(x)) dx | k F(g(x)) + C | 5.10 |
| ∫ₐᵇ g′(x) dx | g(b) − g(a) | 5.11 |
| Area between curves | ∫ₐᵇ (top − bottom) dx | 5.11 |
| Displacement t₁ → t₂ | ∫ v(t) dt | 5.9 |
| Distance t₁ → t₂ | ∫ \|v(t)\| dt | 5.9 |

Linear composites, ready to use:

```
∫ sin(ax + b) dx = −(1/a) cos(ax + b) + C
∫ cos(ax + b) dx =  (1/a) sin(ax + b) + C
∫ e^(ax + b) dx  =  (1/a) e^(ax + b) + C
∫ 1/(ax + b) dx  =  (1/a) ln(ax + b) + C
∫ (ax + b)ⁿ dx   = (ax + b)ⁿ⁺¹ / (a(n + 1)) + C,  n ≠ −1
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-sl-integration-kinematics--02-linear-composite.webp" width="900" height="710" alt="The copper curve sin(3x − 1) has gradient 3 at its root x = 1/3, while one third of it has gradient 1 there. Differentiating (1/3)sin(3x − 1) gives cos(3x − 1), so integrating cos(3x − 1) needs the factor 1/3." loading="lazy">
  <figcaption>Integrating a function of ax + b divides by a, because differentiating multiplies by a.</figcaption>
</figure>


## Method in steps

**Boundary condition (5.5)**

```
1. Integrate, including + C.
2. Substitute the given x and y.
3. Solve for C.
4. Write the full function with the value of C.
```

**Reverse chain rule (5.10)**

```
1. Find the inner function g(x).
2. Check that g′(x), up to a constant, is a factor.
3. Guess the answer: the "outer" integrated, with g(x) inside.
4. Differentiate the guess and adjust the constant.
5. Add + C.
```

**Area with sign changes, no GDC (5.11)**

```
1. Find the roots of f(x) = 0 in the interval.
2. Split the integral at each root.
3. Evaluate each part by hand.
4. Add the absolute values.
```

**Area between two curves (5.11)**

```
1. Solve f(x) = g(x) for the limits.
2. Test one x-value to see which curve is on top.
3. Integrate (top − bottom) between the limits.
4. If the curves cross inside the region, split there.
```

**Kinematics (5.9)**

```
s  --differentiate-->  v  --differentiate-->  a
a  --integrate + C-->  v  --integrate + C-->  s
```

Use v(0) or s(0) (or another known value) to fix each constant.

## Small worked reminders

- ∫ (2x − 5/x²) dx = x² + 5/x + C, since ∫ −5x⁻² dx = 5x⁻¹.
- ∫ 3 sin(2x) dx = −(3/2) cos(2x) + C.
- ∫ x² e^(x³) dx = (1/3) e^(x³) + C. Inner x³, derivative 3x².
- ∫₀^(ln 2) e^(2x) dx = (1/2)(e^(2 ln 2) − 1) = (1/2)(4 − 1) = 3/2.
- y = x² − 4x + 3 on [0, 3]: the integral is 0, but the area is 8/3.
- dy/dx = 3x² + 2 and y = 1 when x = 1: y = x³ + 2x + C, 1 = 3 + C, so y = x³ + 2x − 2.
- ∫ cos x · e^(sin x) dx = e^(sin x) + C. Inner sin x, derivative cos x, already present.
- ∫₀^(π/4) cos(2x) dx = [(1/2) sin(2x)]₀^(π/4) = 1/2 − 0 = 1/2.

## Kinematics in one example

A particle has a(t) = 6 − 2t m s⁻², with v(0) = −8 m s⁻¹ and s(0) = 0. Find the displacement and the distance for 0 ≤ t ≤ 3.

```
v = 6t − t² + C, v(0) = −8 → C = −8
v = −t² + 6t − 8 = −(t − 2)(t − 4)
v changes sign at t = 2 (inside the interval)
∫₀² v dt = −20/3        ∫₂³ v dt = 2/3
Displacement = −20/3 + 2/3 = −6 m   (so s(3) = −6 m)
Distance     = 20/3 + 2/3 = 22/3 m
```

The particle moves backwards until t = 2, then forwards. The negative displacement means it ends 6 m on the negative side of its start.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-sl-integration-kinematics--01-boundary-condition.webp" width="900" height="770" alt="Three vertical shifts of y = 2x³ − 2x² + x + c are drawn, for c = 3, −5 and −13. Only c = −5 passes through (2, 5), since 2x³ − 2x² + x equals 10 at x = 2. This is the lesson's boundary-condition example." loading="lazy">
  <figcaption>A known point on the curve picks out the one value of c.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-sl-integration-kinematics--06-displacement-distance.webp" width="900" height="770" alt="The velocity graph v = t² − 6t + 8 is above the axis from 0 to 2 (area 20/3), below from 2 to 4 (signed area −4/3) and above from 4 to 5 (area 4/3). Displacement is the signed sum, 20/3 m. Distance adds the sizes, 28/3 m. The particle turns at t = 2 and t = 4." loading="lazy">
  <figcaption>Displacement is the signed area under v; distance is the area under |v|.</figcaption>
</figure>


## Paper 1 or Paper 2?

The guide splits this unit between hand methods and technology.

- **By hand (Paper 1):** all the standard integrals in 5.10, linear composites, the reverse chain rule and substitution; definite integrals by F(b) − F(a) (5.11); areas where f(x) is positive or negative, which the guide says are found "without the use of technology"; areas between curves with easy intersections; kinematics with polynomial velocity.
- **With a GDC (Paper 2):** definite integrals and areas using technology (5.5); integrals that can only be found with technology (5.11); intersections you cannot solve by hand; total distance as ∫|v(t)|dt for awkward velocity functions.

### GDC routine for an area or distance

```
1. Sketch or graph the functions and look at the region.
2. Find intersections or roots on the GDC; store them.
3. Write the integral with limits and integrand on your page.
4. Evaluate with the stored values.
5. Round the final answer only, to 3 s.f., with units.
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-sl-integration-kinematics--03-gdc-area.webp" width="900" height="768" alt="The curve y = √(x³ + 1) is above the x-axis from 0 to 2. The shaded area equals the definite integral from 0 to 2, 3.2413… on a GDC, or 3.24 to 3 s.f., and the integral with limits must be written." loading="lazy">
  <figcaption>Write the definite integral with its limits, then let the GDC evaluate it.</figcaption>
</figure>


## Must-know distinctions

| This | Not this |
|---|---|
| Indefinite: a function + C | Definite: a number, no C |
| Signed integral: parts below the axis count as negative | Area: every part counts as positive |
| Displacement: ∫ v dt, can be negative | Distance: ∫ \|v\| dt, never negative |
| Velocity: has a sign | Speed: \|v\| |
| 5.5 powers: n ∈ ℤ, n ≠ −1 | 5.10 powers: n ∈ ℚ, n ≠ −1, plus 1/x → ln x |
| Paper 1: find F, then F(b) − F(a), by hand | Paper 2: write the integral, then evaluate on the GDC |
| Divide by a for f(ax + b) | Never multiply by a when integrating |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-sl-integration-kinematics--04-area-split-at-roots.webp" width="900" height="790" alt="The parabola y = x² − 4x + 3 has roots at x = 1 and 3. The part from 0 to 1 is above the axis with integral 4/3, and from 1 to 3 it is below with integral −4/3. The area is 4/3 + 4/3 = 8/3, while the single integral from 0 to 3 is 0." loading="lazy">
  <figcaption>Split at each root and add the sizes to get area; a single integral gives the signed value.</figcaption>
</figure>


## Quick self-test

1. Find ∫ (5x⁴ − 2x + 7) dx.
2. Find ∫ 2/x³ dx.
3. Find ∫ sin(4x) dx.
4. Find ∫ e^(−3x) dx.
5. Find ∫ 1/(5x + 2) dx.
6. Find ∫ x(x² − 1)³ dx.
7. Evaluate ∫₀^π sin x dx.
8. dy/dx = 4x − 1 and y = 3 when x = 1. Find y.
9. Evaluate ∫₁^e (2/x) dx.
10. Find the area enclosed by y = x² and y = 2x.
11. v(t) = 4 − 2t for 0 ≤ t ≤ 3. Find the displacement and the total distance.
12. Find ∫₋₁¹ x³ dx and the area between y = x³, the x-axis, x = −1 and x = 1.

### Answers

1. x⁵ − x² + 7x + C
2. −1/x² + C (from 2x⁻² ÷ (−2))
3. −(1/4) cos(4x) + C
4. −(1/3) e^(−3x) + C
5. (1/5) ln(5x + 2) + C
6. (1/8)(x² − 1)⁴ + C
7. [−cos x]₀^π = 1 − (−1) = 2
8. y = 2x² − x + C; 3 = 2 − 1 + C, C = 2; y = 2x² − x + 2
9. [2 ln x]₁^e = 2 − 0 = 2
10. Intersect at x = 0 and x = 2; 2x is on top; ∫₀² (2x − x²) dx = 4 − 8/3 = 4/3
11. Displacement = [4t − t²]₀³ = 3 m. v = 0 at t = 2; ∫₀² v dt = 4, ∫₂³ v dt = −1; distance = 5 m
12. The integral is 0. The area is 1/4 + 1/4 = 1/2.

## Where marks are usually lost

- No integral expression written before a GDC value. The guide expects the correct expression first.
- +C missing on an indefinite integral, or left in a definite answer.
- In a boundary-condition question, C found correctly but the final function never written out.
- ∫ 1/(ax + b) dx written as ln(ax + b) with the 1/a missing.
- ∫ sin x dx given as cos x.
- A "find the area" answer that integrates straight across a root, so parts cancel.
- Top and bottom curves swapped, giving a negative area. Area is never negative.
- Total distance given as the displacement when the particle turns round.
- Intersection points rounded to 3 s.f. and then used as limits, so the final area is wrong in the third figure.
- Missing units (m, m s⁻¹, m s⁻²) in a context question.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-sl-integration-kinematics--05-area-between-curves.webp" width="900" height="778" alt="The parabolas y = 5 − x² and y = x² − 3 meet at (−2, 1) and (2, 1), with the first on top between them. Strips have height 8 − 2x², for example 7.5 at x = 0.5, and the integral from −2 to 2 is 64/3." loading="lazy">
  <figcaption>Area between curves is the integral of top minus bottom between the intersection points.</figcaption>
</figure>


## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020). Sections SL 5.5, 5.9, 5.10 and 5.11.
