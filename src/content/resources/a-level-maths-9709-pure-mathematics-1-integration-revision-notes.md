---
title: "Cambridge International AS & A Level Mathematics 9709: Integration (Pure Mathematics 1) -- Revision Notes"
seoTitle: "A Level Maths 9709 P1 Integration Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Integration (Pure Mathematics 1)"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 36
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
    subtopic: "integration-cambridge-alevel-maths-1"
description: "Condensed revision notes for Cambridge 9709 Paper 1 section 1.8 Integration: key formulae, method steps, area and volume checks and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-09-28
featured: false
---

These notes cover section **1.8 Integration** of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). The content is Pure Mathematics 1 and is examined on **Paper 1**, which every AS and A Level candidate sits; Papers 2 and 3 assume it. For full explanations and worked examples, use the [Integration study guide](/resources/a-level-maths-9709-pure-mathematics-1-integration/).

Course hub: [Cambridge A Level Mathematics](/boards/cambridge/a-level/mathematics/). Printable list: [9709 checklist](/checklists/cambridge/a-level/mathematics/). Free check-up: [AS 10-minute diagnostic](/practice/9709/diagnostic/as/). When you are ready, try the [practice questions](/resources/a-level-maths-9709-pure-mathematics-1-integration-practice/).

## What 1.8 asks of you

- Understand integration as the reverse of differentiation.
- Integrate (ax + b)ⁿ for any rational n except −1, with constant multiples, sums and differences.
- Find a constant of integration from given information.
- Evaluate definite integrals, including simple improper ones.
- Find areas: a curve with lines parallel to the axes, a curve and a line, two curves.
- Find a volume of revolution about the x-axis or the y-axis, including a region not bounded by that axis.

Calculator: a scientific calculator is allowed on Paper 1, but no marks are given for unsupported calculator answers. Show every integration and every substitution of limits.

## Key formulae

| Result | In MF19? |
|---|---|
| ∫ xⁿ dx = xⁿ⁺¹/(n + 1) + c, n ≠ −1 | Yes |
| ∫ (ax + b)ⁿ dx = (ax + b)ⁿ⁺¹/(a(n + 1)) + c, n ≠ −1 | No |
| ∫ₐᵇ f(x) dx = F(b) − F(a) | No |
| Area against the x-axis = ∫ y dx (curve above the axis) | No |
| Area against the y-axis = ∫ x dy (curve to the right of the axis) | No |
| Area between graphs = ∫ (upper − lower) dx | No |
| Volume about the x-axis = π ∫ y² dx | No |
| Volume about the y-axis = π ∫ x² dy | No |
| Volume with a hole = π ∫ (outer² − inner²) dx | No |

## Method in steps

**Indefinite integral**
1. Rewrite each term as a power: √x = x^(1/2), 5/x² = 5x⁻².
2. Expand brackets or divide through if the integrand is a product or a quotient.
3. Add 1 to each power and divide by the new power.
4. Add + c.
5. Check by differentiating.

**Curve from its gradient**
1. Integrate dy/dx, including + c.
2. Substitute the given point.
3. Solve for c and write y = … in full.

**Definite integral**
1. Integrate (no c).
2. Write [F(x)] with the limits.
3. Substitute the upper limit, then the lower, in separate brackets.
4. Subtract.

**Area**
1. Sketch. Mark roots and intersection points.
2. Split at every root where the curve crosses the axis you are integrating against.
3. Integrate each part; take the size of any negative part.
4. Add.

**Volume**
1. Decide which axis. About x: use y² and dx. About y: use x² and dy.
2. Make y (or x) the subject and square it before integrating.
3. If the region has a hole, find both radii and use outer² − inner².
4. Integrate between the correct limits, then multiply by π.

## Small worked reminders

(ax + b)ⁿ: divide by a **and** by the new power.

```
∫ (5x + 2)³ dx = (5x + 2)⁴/20 + c
∫ 1/(1 − x)² dx = ∫ (1 − x)⁻² dx = (1 − x)⁻¹/((−1)(−1)) = 1/(1 − x) + c
```

Definite integral with a root:

```
∫₁⁴ 3√x dx = [2x^(3/2)]₁⁴ = 2(8) − 2(1) = 14
```

Improper integral: write the limit in words.

```
∫₁^∞ 2/x² dx = [−2/x]₁^∞.  As x → ∞, −2/x → 0.  Value = 0 − (−2) = 2
```

Two constants from a second derivative: d²y/dx² = 6x, and the curve has a stationary point at (1, 0).

```
dy/dx = 3x² + c₁;  dy/dx = 0 at x = 1, so c₁ = −3
y = x³ − 3x + c₂;  y = 0 at x = 1, so c₂ = 2
y = x³ − 3x + 2
```

Area between a curve and a line: y = x² and y = x + 2.

```
x² = x + 2 gives x = −1 and x = 2; the line is on top.
∫₋₁² (x + 2 − x²) dx = [x²/2 + 2x − x³/3]₋₁² = 10/3 − (−7/6) = 9/2
```

Volume about the y-axis: the region between y = x² (x ≥ 0), the y-axis and y = 4.

```
x² = y, so V = π ∫₀⁴ y dy = π[y²/2]₀⁴ = 8π
```

## Spot the question type

| Wording in the question | What to do |
|---|---|
| "Find ∫ … dx" | Indefinite integral: rewrite as powers, integrate, + c |
| "The curve passes through …" with dy/dx given | Integrate with + c, substitute the point, write y = … |
| "Find the exact value of ∫ₐᵇ …" | Definite integral; keep fractions, surds and π |
| An upper limit of ∞ | Integrate, then say the term tends to 0 as x → ∞ |
| "Area of the region enclosed by …" | Sketch, find intersections, integrate upper − lower |
| "By integrating with respect to y" | Make x the subject; use y-limits and dy |
| "Rotated through 360° about the x-axis" | π ∫ y² dx, or π ∫ (outer² − inner²) dx if there is a gap |
| "Rotated through 360° about the y-axis" | π ∫ x² dy with y-limits |
| "Show that …" | Every line of working written out; the given answer earns nothing on its own |

## Must-know distinctions

- **Indefinite vs definite.** An indefinite integral is a function and needs + c. A definite integral is a number and has no c.
- **Value of an integral vs area.** ∫ y dx counts regions below the x-axis as negative. An area is never negative. Split at the roots.
- **∫ y dx vs ∫ x dy.** Use dx for a region against the x-axis (limits are x-values). Use dy for a region against the y-axis (limits are y-values).
- **Area between graphs vs volume between graphs.** For area, subtract first: ∫ (y₁ − y₂) dx. For volume, square first: π ∫ (y₁² − y₂²) dx. Never π ∫ (y₁ − y₂)² dx.
- **Linear bracket vs non-linear bracket.** (3x − 1)⁴ can be integrated directly with the (ax + b)ⁿ rule. (x² − 1)⁴ cannot; expand it first.
- **n = −1.** ∫ x⁻¹ dx is not xᵒ/0. It gives ln x, which is Paper 2 and Paper 3 work ([Pure Mathematics 2 revision notes](/resources/a-level-mathematics-pure-mathematics-2-revision-notes/)).
- **Exact vs 3 s.f.** "Exact" means keep π, surds and fractions. Otherwise give 3 significant figures, and don't round until the end.

## Quick self-test

1. Find ∫ (x² + 1/x²) dx.
2. Find ∫ (1 − 3x)⁴ dx.
3. Find ∫ 10/(2x + 1)⁶ dx.
4. Evaluate ∫₀¹ (3x² − 2x) dx. What does your answer tell you about the area between y = 3x² − 2x and the x-axis for 0 ≤ x ≤ 1?
5. Evaluate ∫₁⁸ x^(−1/3) dx.
6. A curve has dy/dx = 4x − 3 and passes through (2, 1). Find its equation.
7. Evaluate ∫₃^∞ 18/x³ dx.
8. Evaluate ∫₀⁴ 1/√x dx.
9. Find the area enclosed by y = 4 − x² and the x-axis.
10. The region under y = √x from x = 0 to x = 4 is rotated about the x-axis. Find the exact volume.
11. The region between y = x (x ≥ 0), the y-axis and the line y = 3 is rotated about the y-axis. Find the exact volume.

### Answers

1. x³/3 − 1/x + c (write 1/x² as x⁻², which integrates to −x⁻¹).
2. −(1 − 3x)⁵/15 + c (here a = −3, so divide by −3 × 5).
3. −(2x + 1)⁻⁵ + c, or −1/(2x + 1)⁵ + c (10 ÷ (2 × (−5)) = −1).
4. [x³ − x²]₀¹ = 0. The curve crosses the axis at x = 2/3, so equal areas lie below and above the axis. The area is **not** zero.
5. [3x^(2/3)/2]₁⁸ = (3/2)(4 − 1) = 9/2.
6. y = 2x² − 3x + c; 1 = 8 − 6 + c, so c = −1 and y = 2x² − 3x − 1.
7. [−9/x²]₃^∞; as x → ∞, −9/x² → 0, so the value is 0 − (−1) = 1.
8. [2√x]₀⁴ = 4 − 0 = 4 (the integrand is undefined at 0, but the integral has a value).
9. Roots x = ±2. ∫₋₂² (4 − x²) dx = 32/3.
10. π ∫₀⁴ x dx = π[x²/2]₀⁴ = 8π.
11. x = y, so π ∫₀³ y² dy = π[y³/3]₀³ = 9π. (Check: this is a cone of radius 3 and height 3, and ⅓π(3²)(3) = 9π.)

## Where marks are usually lost

- Integrating before rewriting: 3/√x must become 3x^(−1/2) before you add 1 to the power.
- Integrating a product such as (2x + 1)(x − 3) as a product of two separate integrals.
- In (ax + b)ⁿ, dividing only by the new power and forgetting a, which loses the accuracy mark.
- No "+ c" on an indefinite integral, or c found but the final equation of the curve never written out.
- Substituting only the upper limit, or not showing the substitution at all, when the working is needed for the method mark.
- Writing ∞ into an expression as if it were a number, instead of stating that the term tends to 0.
- Reporting a negative area, or integrating in one go across a root of the curve.
- Mixing up dx and dy: using x-limits in a ∫ x dy integral.
- Squaring the difference of radii for a solid with a hole, instead of taking the difference of the squared radii.
- Dropping π in a volume, or giving a decimal when the question says "exact".

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027 (Version 4, published December 2025), Cambridge Assessment International Education. Section 1.8 Integration, Pure Mathematics 1 (Paper 1).
