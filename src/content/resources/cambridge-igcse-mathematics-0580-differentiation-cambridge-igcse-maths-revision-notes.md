---
title: "Cambridge IGCSE Mathematics (0580): Differentiation -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 2 – Algebra and graphs"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 2.12
syllabusTopics:
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "differentiation-cambridge-igcse-maths"
description: "Revision notes for 0580 subtopic 2.12 Differentiation (Extended): the rule for ax^n, gradients, stationary points, maxima and minima, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense subtopic **2.12 Differentiation** of the Cambridge IGCSE Mathematics 0580 syllabus (examination in 2025, 2026 and 2027). The whole subtopic is **Extended only** (E2.12). It covers estimating gradients by drawing tangents, differentiating axⁿ (a rational, n a positive integer or zero) and simple sums of up to three such terms, finding gradients and stationary points, and telling maxima from minima by any method. Points of inflection are not required. For worked examples, read the [differentiation study guide](/resources/cambridge-igcse-mathematics-0580-differentiation-cambridge-igcse-maths/); for marked questions, use the [differentiation practice questions](/resources/cambridge-igcse-mathematics-0580-differentiation-cambridge-igcse-maths-practice/).

## Key terms

| Term | Meaning |
|---|---|
| Tangent | A straight line touching a curve at one point, with the curve's gradient there |
| Gradient of a curve | The gradient of the tangent at a point; it changes along the curve |
| Derivative, dy/dx | A formula for the gradient of y = f(x) at any x |
| Second derivative, d²y/dx² | The derivative of dy/dx |
| Stationary point (turning point) | A point where dy/dx = 0 |
| Maximum / minimum | A turning point at the top of a hill / bottom of a valley |

## Condensed recall

### Estimating a gradient by drawing

Rule a long tangent touching the curve at the point. Pick two points **on the tangent**, far apart. Gradient = (change in y) ÷ (change in x). It is an estimate.

### The rule

```
y = ax^n      ->   dy/dx = n a x^(n-1)
y = kx        ->   dy/dx = k
y = c         ->   dy/dx = 0
```

| y | dy/dx |
|---|---|
| 6x⁵ | 30x⁴ |
| (1/3)x³ | x² |
| −4x² | −8x |
| 3x | 3 |
| 11 | 0 |

**Expand brackets before differentiating**: y = 2x(x² − 5) = 2x³ − 10x, so dy/dx = 6x² − 10.

### Gradient at a point

Substitute the x-value into **dy/dx**. To find the point with a given gradient, set dy/dx equal to it, solve for x, then use **y** for the y-coordinate.

### Stationary points

```
1. dy/dx = 0, solve for x (usually a quadratic for a cubic curve)
2. y-coordinate from the ORIGINAL equation
3. Nature:
   d^2y/dx^2 > 0  ->  minimum
   d^2y/dx^2 < 0  ->  maximum
   or the sign of dy/dx either side:
   + 0 -  ->  maximum        - 0 +  ->  minimum
```

The syllabus accepts any method: an accurate sketch, the second derivative, or the gradient either side.

### Choosing a method for maximum or minimum

| Method | Best when | Watch out for |
|---|---|---|
| Second derivative | dy/dx is easy to differentiate again | the sign rule: positive is a minimum |
| Gradient either side | you want to avoid a second derivative | test values must stay close to the point |
| Sketch | the shape of the curve is obvious | a calculation is safer if working must be shown |

### Quick shape facts

- A quadratic ax² + bx + c has one turning point: a minimum if a > 0, a maximum if a < 0.
- A cubic with a positive x³ coefficient and two turning points has its maximum on the left and its minimum on the right.

## Worked recall

Find and classify the stationary points of y = 2x³ + 3x² − 12x.

```
dy/dx = 6x^2 + 6x - 12 = 6(x^2 + x - 2) = 6(x + 2)(x - 1)
x = -2:  y = -16 + 12 + 24 = 20   ->  (-2, 20)
x = 1:   y = 2 + 3 - 12 = -7      ->  (1, -7)
d^2y/dx^2 = 12x + 6
x = -2:  -18 < 0  ->  maximum
x = 1:    18 > 0  ->  minimum
```

## Exam traps

- **Constant left in.** d/dx(x² + 5) = 2x.
- **Power reduced but not multiplied.** d/dx(4x³) = 12x², not 4x².
- **Brackets not expanded.** (x + 3)² must become x² + 6x + 9 first.
- **Wrong equation for y.** The y-coordinate of a stationary point comes from y, not from dy/dx (which is 0 there).
- **Second derivative signs reversed.** Positive means minimum.
- **One point missing.** A quadratic dy/dx usually gives two stationary points; find both.
- **Tangent points from the curve.** For a drawn estimate, read points off your ruled tangent.

## Self-test

1. Differentiate 6x⁵.
2. Find dy/dx for y = 3x² − 4x + 9.
3. Find dy/dx for y = (1/3)x³.
4. Find dy/dx for y = 2x(x² − 5).
5. Find dy/dx for y = (x + 3)².
6. Find the gradient of y = x² + 2x at x = −3.
7. Find dy/dx for y = 5.
8. Find the coordinates of the stationary points of y = x³ − 12x.
9. Determine the nature of the stationary point of y = x³ − 12x at x = 2.
10. Find the point on y = 3x² − 4x where the gradient is 8.
11. Find and classify the stationary points of y = 2x³ + 3x² − 12x.
12. A tangent drawn to a curve passes through (0, −3) and (4, 9). Estimate the gradient of the curve at the point of contact.

### Answers

1. **30x⁴**.
2. **6x − 4**.
3. **x²**.
4. 2x³ − 10x, so **6x² − 10**.
5. x² + 6x + 9, so **2x + 6**.
6. dy/dx = 2x + 2; at x = −3: **−4**.
7. **0**.
8. 3x² − 12 = 0, x = ±2: **(2, −16) and (−2, 16)**.
9. d²y/dx² = 6x = 12 > 0: **minimum**.
10. 6x − 4 = 8, x = 2, y = 12 − 8 = 4: **(2, 4)**.
11. **Maximum (−2, 20)** and **minimum (1, −7)** (see the worked recall above).
12. (9 − (−3)) ÷ (4 − 0) = 12 ÷ 4 = **3**.

## Where to go next

- [Differentiation study guide](/resources/cambridge-igcse-mathematics-0580-differentiation-cambridge-igcse-maths/) for full worked examples, including a maximum in context.
- [Differentiation practice questions](/resources/cambridge-igcse-mathematics-0580-differentiation-cambridge-igcse-maths-practice/) with marked answers.
- [Sketching curves revision notes](/resources/cambridge-igcse-mathematics-0580-sketching-curves-cambridge-igcse-maths-revision-notes/) to use turning points in sketches.
- [Algebra and graphs revision notes](/resources/igcse-mathematics-algebra-and-graphs-revision-notes/) for the whole topic.

## Official syllabus

Cambridge International: *Cambridge IGCSE Mathematics 0580 syllabus* for examination in 2025, 2026 and 2027, Topic 2 Algebra and graphs, E2.12 Differentiation (Extended content only).
