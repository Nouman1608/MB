---
title: "Edexcel International GCSE Mathematics A (4MA1): Calculus -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Sequences, functions and graphs"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 3.4
syllabusTopics:
  - qualification: "igcse"
    topic: "sequences-functions-and-graphs-edexcel-igcse-maths"
    subtopic: "calculus-edexcel-igcse-maths"
description: "Condensed Higher tier 4MA1 section 3.4 notes: the power rule, preparing expressions, gradients, tangents, turning points, kinematics and maximum problems."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for section 3.4, Calculus, in Pearson Edexcel International GCSE Mathematics A (4MA1). The whole section is **Higher tier only**, and it covers differentiation only. For explanations and worked examples, read the [calculus study guide](/resources/edexcel-igcse-mathematics-4ma1-calculus-edexcel-igcse-maths/); for exam-style questions, use the [calculus practice questions](/resources/edexcel-igcse-mathematics-4ma1-calculus-edexcel-igcse-maths-practice/).

## The five statements

- **A:** a curve's gradient, and so its rate of change, varies from point to point.
- **B:** differentiate integer powers of x, positive and negative.
- **C:** use dy/dx for gradients, rates of change, stationary and turning points.
- **D:** tell maxima from minima by the general shape of the graph only.
- **E:** apply calculus to straight-line motion and simple practical problems.

## Key terms

| Term | Meaning |
|---|---|
| Derivative, dy/dx | The gradient function of y with respect to x |
| Differentiate | Find the derivative |
| Rate of change | How fast one quantity changes as another changes |
| Tangent | Line touching a curve, with the curve's gradient at that point |
| Stationary point | A point where dy/dx = 0 |
| Turning point | A stationary point that is a maximum or a minimum |
| Displacement, s | Position measured from a fixed point O |
| Velocity, v | ds/dt |
| Acceleration, a | dv/dt |

## The rule

```
axⁿ  →  naxⁿ⁻¹
ax   →  a
c    →  0
```

| y | dy/dx |
|---|---|
| 6x⁴ | 24x³ |
| −5x² | −10x |
| 7x | 7 |
| 9 | 0 |
| 12/x = 12x⁻¹ | −12x⁻² = −12/x² |
| 3/x² = 3x⁻² | −6x⁻³ = −6/x³ |

## Prepare, then differentiate

| Start | Prepare | dy/dx |
|---|---|---|
| (x + 2)(x − 5) | x² − 3x − 10 | 2x − 3 |
| (x³ − 4x)/x | x² − 4 | 2x |
| 3x − 12/x | 3x − 12x⁻¹ | 3 + 12/x² |
| x(x² + 1) | x³ + x | 3x² + 1 |

## Using dy/dx

```
gradient at a point     substitute x into dy/dx
tangent at a point      m from dy/dx, point from y, then y = mx + c
point with gradient k   solve dy/dx = k, then find y
turning points          solve dy/dx = 0, then find y for each x
```

### Maximum or minimum by shape

| Curve | Rule |
|---|---|
| positive quadratic (x² coefficient > 0) | minimum |
| negative quadratic | maximum |
| positive cubic with two turning points | left is maximum, right is minimum |
| negative cubic with two turning points | left is minimum, right is maximum |
| x + k/x, k > 0, x > 0 | minimum |

Example: y = x³ − 3x² − 9x + 5 has dy/dx = 3(x − 3)(x + 1); turning points (−1, 10), a maximum, and (3, −22), a minimum.

## Kinematics

```
s  --d/dt-->  v  --d/dt-->  a
at rest:   v = 0
initial:   t = 0
```

s = 30t − 5t²: v = 30 − 10t, a = −10; at rest when t = 3, where s = 45.

## Rates of change in context

The derivative keeps the units of "output per input". If V cm³ is the volume of water in a tank after t seconds, dV/dt is in cm³ per second; if C is a cost in dollars for x items, dC/dx is in dollars per item.

```
V = 4t² + 10t      dV/dt = 8t + 10
at t = 5:          dV/dt = 50, so the volume is increasing at 50 cm³ per second
```

A positive rate means the quantity is increasing at that moment; a negative rate means it is decreasing; zero means it is momentarily stationary.

## Maximum and minimum problems

1. Write the quantity in one variable (use the given constraint to remove the other).
2. Differentiate and set the derivative equal to 0.
3. Solve, then substitute back to find the maximum or minimum value.
4. Justify maximum or minimum from the shape.

Example: A = x(60 − 2x) = 60x − 2x², dA/dx = 60 − 4x = 0 at x = 15, A = 450, a maximum because the graph of A is a negative quadratic.

## Exam traps

- **Products and fractions.** Expand or divide first.
- **Negative powers.** −1 − 1 = −2: the derivative of x⁻¹ is −x⁻².
- **Constants vanish.** The derivative of −2 is 0, not −2.
- **Both coordinates.** A turning point needs x and y.
- **Justify.** "It is a maximum" needs a reason from the shape.
- **At rest is v = 0,** not s = 0. "Returns to O" is s = 0.
- **Units.** m/s for v, m/s² for a.

## Self-test

1. Differentiate 4x³ − 5x² + 7x − 2.
2. Differentiate 3x − 12/x.
3. Differentiate (x + 2)(x − 5).
4. Differentiate 3/x².
5. Find the gradient of y = x³ − 3x² − 9x + 5 at x = 2.
6. Find the tangent to that curve at x = 2.
7. Find the turning points of y = x³ − 3x² − 9x + 5.
8. Which of those turning points is the maximum, and why?
9. s = 30t − 5t². Find v and a.
10. When is that particle at rest?
11. A = 60x − 2x². Find the value of x that maximises A and the maximum A.
12. Which statement in 3.4 says how maxima and minima must be distinguished?

### Answers

1. **12x² − 10x + 7**.
2. **3 + 12/x²**.
3. **2x − 3**.
4. **−6/x³** (−6x⁻³).
5. 12 − 12 − 9 = **−9**.
6. **y = −9x + 1**.
7. **(−1, 10)** and **(3, −22)**.
8. **(−1, 10)**: a positive cubic rises, falls, then rises, so the left turning point is the maximum.
9. **v = 30 − 10t**, **a = −10**.
10. **t = 3** seconds.
11. **x = 15**, **A = 450**.
12. **3.4 D**: by the general shape of the graph only.
