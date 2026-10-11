---
title: "Pearson Edexcel International Advanced Level Mathematics: Volumes of revolution, separable differential equations and areas from parametric equations (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths Volumes, Separable DEs Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Volumes of revolution, separable differential equations and areas from parametric equations"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 153
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-integration-edexcel-alevel-maths"
description: "Condensed revision notes on volumes of revolution, separable differential equations and parametric areas for Pearson Edexcel IAL Mathematics P4."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense Pearson Edexcel International Advanced Level Mathematics (Specification Issue 3, April 2019), Pure Mathematics 4 sections 6.1, 6.4 and 6.5. P4 is compulsory for IAL Mathematics and Pure Mathematics and has no IAS weighting. For full explanations read the [study guide](/resources/edexcel-ial-mathematics-volumes-of-revolution-separable-differential-equations/), then test yourself with the [practice questions](/resources/edexcel-ial-mathematics-volumes-of-revolution-separable-differential-equations-practice/). See also the [Edexcel A-level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/).

## Key results

| Spec | Result | Notes |
|---|---|---|
| 6.1 | V = π ∫ y² dx | Rotation through 360° about the x-axis; limits x = a to x = b |
| 6.1 | V = π ∫ y² (dx/dt) dt | Parametric form; limits are values of t |
| 6.1 | Not required: π ∫ x² dy | The specification asks for y² dx only |
| 6.4 | ∫ 1/g(y) dy = ∫ f(x) dx | For dy/dx = f(x) g(y) |
| 6.4 | General solution has a constant; particular solution has it found | Use the given pair of values |
| 6.5 | Area = ∫ y dx = ∫ y (dx/dt) dt | Limits are values of t |

You are not expected to sketch a curve from its parametric equations.

## Method boxes

### Volume of revolution, cartesian

1. Write y² in full. Expand brackets before integrating.
2. Integrate with respect to x between the given limits.
3. Keep π outside, and give the answer as a multiple of π unless a decimal is asked for.

### Volume between a curve and a line

1. Find where the curve meets the line to get the limits.
2. Work out V for the outer boundary, then subtract V for the inner boundary.
3. For a horizontal line y = k the inner volume is the cylinder π k² × length.

### Volume or area, parametric

1. Find dx/dt.
2. Convert limits: solve x(t) = a and x(t) = b, or y(t) = 0 when the curve meets the axis.
3. Substitute into π ∫ y² (dx/dt) dt or ∫ y (dx/dt) dt, then integrate in t.
4. If x decreases as t increases, take the limits so that x goes from smaller to larger.

### Separable differential equation

1. Check the equation factorises as f(x) × g(y).
2. Separate: g-terms with dy, f-terms with dx.
3. Integrate both sides and add one constant c.
4. Use the given values to find c, then rearrange to y = ... if asked.

## Small worked reminders

### Squaring a bracket

y = x + 1 for 0 ≤ x ≤ 2:

```
V = π ∫ (0 to 2) (x + 1)² dx = π [ (x + 1)³/3 ] (0 to 2) = π (27/3 − 1/3)
```

V = 26π/3

### Exponential equation

dy/dx = 3y, y = 2 when x = 0:

```
ln y = 3x + c, so y = A e^(3x); A = 2
```

y = 2e^(3x)

### Square-root equation

dy/dx = x/y, y = 3 when x = 0:

```
y dy = x dx
y²/2 = x²/2 + c
9/2 = c
```

y² = x² + 9, and y = √(x² + 9) because y = 3 is positive at x = 0.

### Parametric area, limits from x

x = t², y = 2t + 1, t > 0, between x = 1 and x = 9:

```
t = 1 to t = 3,  dx/dt = 2t
Area = ∫ (1 to 3) (2t + 1) 2t dt = ∫ (4t² + 2t) dt = [4t³/3 + t²] (1 to 3) = 45 − 7/3
```

Area = 128/3

### Parametric volume with logarithms

x = ln t, y = t, from x = 0 to x = ln 3:

```
t = 1 to t = 3,  dx/dt = 1/t
V = π ∫ (1 to 3) t² × (1/t) dt = π ∫ (1 to 3) t dt = π [t²/2] (1 to 3) = π (9/2 − 1/2)
```

V = 4π

### A model with a constant to find

A hot drink cools so that dθ/dt = −k(θ − 20), with θ = 80 at t = 0 and θ = 50 at t = 6.

```
∫ 1/(θ − 20) dθ = ∫ −k dt
ln(θ − 20) = −kt + c;  θ − 20 = 60 e^(−kt)
t = 6:  30 = 60 e^(−6k), so e^(−6k) = ½ and k = (ln 2)/6
```

k = (ln 2)/6, about 0.116

### Checking a solution

Differentiate your answer and put it back in. For y = 6/(x + 1): dy/dx = −6/(x + 1)², and −y/(x + 1) = −6/(x + 1)². The two sides agree, and y = 6 at x = 0.

## Must-know distinctions

- Volume uses y², area uses y. Both need dx/dt in the parametric form.
- General solution: contains a constant. Particular solution: constant found from given values.
- ln y = x + c gives y = A e^x with A = e^c. It does not give y = e^x + c.
- π ∫ y² dx needs y as a function of x. π ∫ x² dy is not required.
- A limit on x and a limit on t are different things. Convert before you substitute.
- For a region between a curve and a line, subtract volumes. Do not square the difference of the two y values.

## Which method?

| You are given | Do this |
|---|---|
| y in terms of x, region rotated about the x-axis | V = π ∫ y² dx |
| x and y in terms of t, region rotated | V = π ∫ y² (dx/dt) dt |
| x and y in terms of t, area under the curve | A = ∫ y (dx/dt) dt |
| dy/dx written as a product or quotient of x and y terms | Separate the variables and integrate both sides |
| A rate of change proportional to a quantity | Use the equation given, then separate |
| Two values of the variable that fix the constant | Substitute after integrating |

## Typical question set-ups

- A region under a curve rotated about the x-axis, exact answer asked.
- A region between a curve and a line, with the intersection to find.
- Parametric curve with a range of t, volume or area wanted.
- Differential equation given, particular solution wanted.
- A model for a quantity changing with time, find the constant, then predict a value.

## Quick self-test

Work each out by hand before checking.

1. Find V when the region under y = x², for 0 ≤ x ≤ 1, makes a full revolution about the x-axis.
2. Write the integral for V when x = t², y = 3t, 1 ≤ t ≤ 2, then evaluate it.
3. A curve has x = 2t, y = t² for 0 ≤ t ≤ 3. Find the area between it and the x-axis.
4. Write down the general solution of dy/dx = 2y, y > 0.
5. Solve dy/dx = x/y given y = 3 when x = 0.
6. Solve dy/dx = e^(2x)/y given y = 1 when x = 0 (y > 0).
7. For x = t², t > 0, state the t-limits that match x = 4 to x = 9.
8. Find the area when x = 5 − t, y = t², 0 ≤ t ≤ 2.
9. Why must dx/dt appear when you integrate y² with respect to t?
10. Solve dy/dx = −y/(x + 1) given y = 6 when x = 0, for x > −1.
11. Find V when the region under y = 2/√x, for 1 ≤ x ≤ e, makes a full revolution about the x-axis.
12. Solve dy/dx = y² given y = 1 when x = 0, and state the value of x where y becomes undefined.

### Answers

1. V = π ∫ (0 to 1) x⁴ dx = **π/5**.
2. V = π ∫ (1 to 2) 9t² × 2t dt = 18π [t⁴/4] (1 to 2) = 18π × 15/4 = **135π/2**.
3. Area = ∫ (0 to 3) t² × 2 dt = 2 [t³/3] (0 to 3) = **18**.
4. ln y = 2x + c, so **y = A e^(2x)**, A > 0.
5. y dy = x dx, y²/2 = x²/2 + c, c = 9/2, so **y = √(x² + 9)**.
6. y dy = e^(2x) dx, y²/2 = e^(2x)/2 + c, c = 0, so **y = e^x**.
7. **t = 2 to t = 3**.
8. x runs from 5 down to 3, so take t = 2 to t = 0: ∫ (2 to 0) t² × (−1) dt = **8/3**.
9. Because dx = (dx/dt) dt. Changing the variable from x to t changes the integrand as well as the limits.
10. ln y = −ln(x + 1) + c, so y = A/(x + 1), A = 6, giving **y = 6/(x + 1)**.
11. V = π ∫ (1 to e) 4/x dx = 4π [ln x] (1 to e) = **4π**.
12. ∫ y⁻² dy = ∫ dx gives −1/y = x + c; c = −1, so y = 1/(1 − x). It is undefined at **x = 1**.

## Quick checks before you move on

- Can you recall V = π ∫ y² dx and the parametric version without looking?
- Can you separate and integrate dy/dx = f(x) g(y) and then find the constant?
- Can you convert x-limits to t-limits for x = t² and for x = t² + 2t?
- Can you say why x decreasing as t increases needs care with limits?

## Where marks are usually lost

- Squaring y wrongly: (t + 2)² written as t² + 4.
- Integrating y² dt instead of y² (dx/dt) dt.
- Keeping x-limits in a t integral.
- A negative volume or area from reversed limits when x decreases.
- Subtracting y values before squaring, not after, for a region between curve and line.
- Writing the constant on both sides, or adding it after substituting values.
- Taking the exponential of ln y = x + c as y = e^x + c.
- Stopping at e^y = ... when the question asks for y in terms of x.
- Answers given as decimals when the question asks for an exact value.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, Pearson Education Limited. Unit P4, section 6: 6.1, 6.4 and 6.5.
