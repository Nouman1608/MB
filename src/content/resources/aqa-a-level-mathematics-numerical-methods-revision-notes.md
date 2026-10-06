---
title: "AQA A-Level Mathematics: I: Numerical methods (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths 7357 Numerical Methods Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "I: Numerical methods"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 10
syllabusTopics:
  - qualification: "a-level"
    topic: "i-numerical-methods-aqa-alevel-maths"
description: "AQA A-Level Maths revision notes on numerical methods: sign change, iteration diagrams, Newton-Raphson, trapezium rule and bounds, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense **Section I: Numerical methods** (I1 to I4) of the **AQA A-level
Mathematics (7357) specification**, version 1.3, for A-level exams from June 2018 onwards.
Section I is Paper 1 content in the specification, and Papers 2 and 3 can also assess any
Paper 1 content. A calculator is required in every 7357 paper. For full explanations and
longer worked examples, read the [Numerical methods study guide](/resources/aqa-a-level-mathematics-numerical-methods/)
first.

Then test yourself with the [Numerical methods practice questions](/resources/aqa-a-level-mathematics-numerical-methods-practice/).
The [7357 course hub](/boards/aqa/a-level/mathematics/), the
[printable checklist](/checklists/aqa/a-level/mathematics/) and the free
[10-minute diagnostics](/diagnostics/) help you plan what to revise next.

## The four outcomes at a glance

| Ref | In one line |
|---|---|
| I1 | A change of sign of a continuous f on [a, b] shows a root of f(x) = 0 in (a, b); know how this fails |
| I2 | Iterate x_(n+1) = g(x_n), draw staircase and cobweb diagrams, use Newton-Raphson; know how these fail |
| I3 | Trapezium rule; area estimates and the limits the area must lie between |
| I4 | Apply all of the above to problems in context |

## Key formulas

| Method | Formula or rule |
|---|---|
| Change of sign | f continuous on [a, b] and f(a) × f(b) < 0 ⇒ a root in (a, b) |
| Fixed-point iteration | x_(n+1) = g(x_n), where f(x) = 0 has been rearranged to x = g(x) |
| Newton-Raphson | x_(n+1) = x_n − f(x_n) / f′(x_n) |
| Trapezium rule | ∫ from a to b of y dx ≈ (h/2)[y₀ + y_n + 2(y₁ + ... + y_(n−1))], h = (b − a)/n |
| Convergence guide | from a start close to α, iteration converges when −1 < g′(x) < 1 near α |

## I1: Change of sign

**Method in steps: show a root lies in an interval**

1. Evaluate f(a) and f(b). Write the values, not just the signs.
2. State that f is continuous on [a, b] (for example, "f is a polynomial").
3. State: "change of sign, so there is a root between a and b".

**Method in steps: show α = 1.52 to 2 d.p.**

1. Evaluate f(1.515) and f(1.525), the rounding bounds.
2. Show the change of sign.
3. Conclude: 1.515 < α < 1.525, so α = 1.52 to 2 d.p.

**When it fails**

- A vertical asymptote: f(x) = 1/(x − a) changes sign across x = a with no root.
- A repeated root: (x − k)² touches the axis with no sign change.
- An even number of roots in the interval: f(a) and f(b) have the same sign.
- No sign change does not prove there is no root.

## I2: Iteration

**Method in steps**

1. Rearrange f(x) = 0 to x = g(x), showing every algebraic step if asked to "show that".
2. Enter x₁, press =, type g(Ans), press = repeatedly.
3. Write each requested iterate to the required accuracy. Keep full values in the calculator.

**Must-know distinction: staircase vs cobweb**

| Diagram | Path of iterates | g′ near the root |
|---|---|---|
| Staircase (converging) | from one side only | 0 < g′ < 1 |
| Cobweb (converging) | alternately above and below | −1 < g′ < 0 |
| Diverging staircase or cobweb | moves away from the root | g′ > 1 or g′ < −1 |

To draw either: sketch y = x and y = g(x). From x₁ go up (or down) to the curve, across to
y = x, then to the curve again. Label x₁, x₂, x₃ on the x-axis.

**When it fails:** |g′| > 1 near the root, so the iterates move away. The sequence may then
diverge, or converge to a different root from the one you need. A different rearrangement of
the same equation may work.

## I2: Newton-Raphson

**Method in steps**

1. Differentiate: write f′(x) clearly.
2. Substitute into x_(n+1) = x_n − f(x_n)/f′(x_n).
3. Iterate until two values agree to the required accuracy.
4. If asked, confirm with a change of sign.

Small reminder: for f(x) = x² − 7 and x₁ = 3, x₂ = 3 − 2/6 = 2.6667. Since √7 = 2.6458, one
step has already moved most of the way.

**When it fails**

- f′(x_n) = 0: a horizontal tangent, so division by zero.
- x_n near a stationary point: f′ is small, the step is huge, and the next value may be far
  away or near a different root.
- A poor start can cause oscillation or divergence.

## I3: Trapezium rule and bounds

**Method in steps**

1. Find h = (b − a)/n. Strips n, ordinates n + 1.
2. Make a table of x and y values (4 d.p. or more).
3. Ends once, middle ordinates twice, multiply by h/2.

**Must-know distinction: over or under**

- Convex curve (f″ > 0, bends upwards): chords sit above the curve, so **overestimate**.
- Concave curve (f″ < 0, bends downwards): chords sit below, so **underestimate**.
- If f″ changes sign on the interval, you cannot say in general.

**Limits the area lies between.** For an increasing function, rectangles of height taken at
the left of each strip give a lower bound; heights taken at the right give an upper bound. For
a decreasing function, swap them. A trapezium estimate known to be an over- or underestimate
can replace one of these bounds and give a narrower interval.

Small reminder: ∫ from 0 to 1 of √(1 + x) dx with 2 strips. h = 0.5, y = 1, 1.2247, 1.4142.
T = 0.25 × (1 + 1.4142 + 2.4495) = 1.2159. The curve is concave, so this is an underestimate
(the exact value is 1.2190).

## I4: In context

- Say what the variable means and give units in the final answer.
- Give a sensible accuracy for the context, not every decimal place.
- Comment on limitations of the model or method, for example "the model may not hold for large
  t", or "more strips would give a better estimate".

## Quick self-test

1. Show that x³ + x − 5 = 0 has a root between 1.5 and 1.6.
2. f(x) = (x − 2)² has a root at x = 2. Why does a change of sign test on [1, 3] miss it?
3. Use x_(n+1) = ∛(x_n + 5) with x₁ = 2 to find x₂, x₃ and x₄ to 4 d.p.
4. Near a root, g′(x) ≈ −0.6. Describe the diagram and whether the iteration converges.
5. Use one step of Newton-Raphson on f(x) = x² − 7 from x₁ = 3.
6. Use one step of Newton-Raphson on f(x) = cos x − x from x₁ = 1 (radians), to 4 d.p.
7. How wide is each strip when ∫ from 0 to 3 uses 6 strips, and how many ordinates are needed?
8. A trapezium rule estimate is made for a curve with f″(x) < 0 throughout. Over or under?
9. f is increasing on [a, b]. Which rectangles give a lower bound for the area?
10. Why can Newton-Raphson not start at x₁ = 1 for f(x) = x³ − 3x + 1?
11. Show that the root in question 1 is 1.52 to 2 d.p.

### Answers

1. f(1.5) = −0.125 < 0, f(1.6) = 0.696 > 0. f is continuous (a polynomial), so there is a root
   between 1.5 and 1.6.
2. f(x) ≥ 0 everywhere, so f(1) and f(3) are both positive: the graph touches the axis without
   crossing it.
3. x₂ = 1.9129, x₃ = 1.9050, x₄ = 1.9042.
4. A cobweb: iterates alternate either side of the root. |g′| < 1, so it converges.
5. f(3) = 2, f′(3) = 6, so x₂ = 3 − 2/6 = 2.6667 (4 d.p.).
6. f′(x) = −sin x − 1. x₂ = 1 − (cos 1 − 1)/(−sin 1 − 1) = 0.7504.
7. h = 3/6 = 0.5, with 7 ordinates.
8. An underestimate, because the curve is concave and the chords lie below it.
9. Rectangles with heights taken at the left-hand end of each strip.
10. f′(x) = 3x² − 3, so f′(1) = 0. The tangent is horizontal and the formula divides by zero.
11. f(1.515) = −0.0077 < 0, f(1.525) = 0.0716 > 0. Change of sign, so 1.515 < α < 1.525 and
    α = 1.52 to 2 d.p.

## Where marks are usually lost

- Stating "change of sign so root" with no values, or no word about continuity.
- Testing the wrong interval to confirm a rounded root (1.52 and 1.53 instead of 1.515 and
  1.525).
- Leaving the calculator in degrees for trigonometric equations.
- In a "show that" rearrangement, skipping a line of algebra or not reaching the exact printed
  form.
- Copying only the last iterate when x₂, x₃ and x₄ were each asked for.
- Cobweb or staircase diagrams with no labels on the x-axis, or lines drawn to the wrong graph.
- Confusing n strips with n ordinates, so h is wrong.
- Saying "overestimate" with no reason based on the shape of the curve.
- Giving a context answer to six decimal places with no units.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams
June 2018 onwards, published by AQA. Section 3.10, I: Numerical methods.
