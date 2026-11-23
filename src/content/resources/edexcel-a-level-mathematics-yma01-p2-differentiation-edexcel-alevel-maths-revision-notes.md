---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Differentiation (P2.7) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P2: Pure Mathematics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 2.7
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-differentiation-edexcel-alevel-maths"
description: "Condensed notes on stationary points, their nature, increasing and decreasing functions and optimisation for Edexcel IAL Maths Unit P2, with a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 7 of Unit P2 (Pearson Edexcel International Advanced Level Mathematics, YMA01, Issue 3): "applications of differentiation to maxima and minima and stationary points, increasing and decreasing functions", including curve sketching and practical problems. For full worked examples, use the [P2 differentiation study guide](/resources/edexcel-a-level-mathematics-yma01-p2-differentiation-edexcel-alevel-maths/), then try the [P2 differentiation practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-differentiation-edexcel-alevel-maths-practice/).

## Toolkit carried over from Unit P1

- d/dx(xⁿ) = nxⁿ⁻¹ for any rational n.
- Rewrite first: √x = x^½, 1/x = x⁻¹, k/x² = kx⁻², (x + 2)/√x = x^½ + 2x^(−½).
- Expand brackets before differentiating: there is no chain or product rule in this unit.
- Second derivative: differentiate dy/dx again; notation d²y/dx² or f″(x).

## Increasing and decreasing

| Condition | Meaning |
|---|---|
| f′(x) > 0 on an interval | f increasing there |
| f′(x) < 0 on an interval | f decreasing there |
| f′(x) > 0 for all x | f is an increasing function |

To show a quadratic derivative is always positive: complete the square, or show the discriminant is negative with a positive leading coefficient.

For f′(x) = k(x − a)(x − b) with k > 0 and a < b: decreasing for a < x < b; increasing for x < a and x > b.

## Stationary points: the routine

1. Find dy/dx and solve dy/dx = 0.
2. Substitute each x into y (the original equation) to get coordinates.
3. Find d²y/dx² and evaluate at each x.
4. Conclude:
   - d²y/dx² < 0: maximum
   - d²y/dx² > 0: minimum
   - d²y/dx² = 0: test the sign of dy/dx just either side

| Sign of dy/dx: left, right | Nature |
|---|---|
| +, − | maximum |
| −, + | minimum |
| +, + or −, − | neither (stationary point of inflection) |

A local maximum can be lower than a local minimum: for y = 8x + 2/x, the maximum (−½, −8) lies below the minimum (½, 8).

## Curve sketching checklist

- Stationary points, with coordinates and nature.
- y-intercept (x = 0) and any x-intercepts you can find (factorise).
- Behaviour for large positive and negative x (the leading term decides).
- Asymptotes if there are negative powers (for example x = 0 for terms in 1/x).

## Optimisation: the routine

1. Label a diagram and name the variables.
2. Write the constraint as an equation (fixed volume, fixed perimeter, fixed amount of material).
3. Use it to write the target quantity in one variable.
4. Differentiate, set to zero, solve; reject values that make lengths negative or zero.
5. Justify max or min with the second derivative.
6. Answer the question: often the maximum value itself, with units.

Standard results worth recognising: a rectangle with fixed perimeter has maximum area when it is a square; a closed cylinder with fixed volume has least surface area when its height equals its diameter.

## Key terms

| Term | Meaning |
|---|---|
| Stationary point | A point where dy/dx = 0 |
| Turning point | A stationary point where the gradient changes sign (a maximum or minimum) |
| Local maximum | A point higher than all nearby points on the curve |
| Local minimum | A point lower than all nearby points on the curve |
| Stationary point of inflection | A stationary point where the gradient does not change sign |
| Increasing function | f′(x) > 0 (or ≥ 0, zero only at isolated points) throughout |
| Constraint | A fixed condition used to eliminate a variable in optimisation |

## Exam traps

- Substituting the x-value into dy/dx instead of y when finding the y-coordinate.
- No justification of the nature: a number for d²y/dx² and a conclusion are both needed.
- Concluding "point of inflection" from d²y/dx² = 0 alone.
- Not rewriting roots and fractions as powers.
- Leaving two variables in the area or volume expression.
- Giving a non-physical root (negative length) as an answer.
- Answering with the x-value when the question asks for the maximum area or volume.

## Self-test

**1.** Differentiate y = 4√x − 2/x.

**2.** Find the x-coordinate of the stationary point of y = x² − 10x + 7.

**3.** At a stationary point d²y/dx² = −4. What is its nature?

**4.** f′(x) = (x − 2)(x − 5). For which values of x is f decreasing?

**5.** Show that f(x) = x³ + x is an increasing function.

**6.** Find and classify the stationary points of y = x³ − 12x.

**7.** Describe the stationary point of y = x³ at the origin.

**8.** Find and classify the stationary points of y = 8x + 2/x.

**9.** A rectangle has perimeter 20 cm. Find its maximum area.

**10.** dy/dx changes from positive to negative at x = a. What is at x = a?

**11.** In an optimisation problem, why is the constraint needed before differentiating?

### Answers

**1.** y = 4x^½ − 2x⁻¹, so dy/dx = 2x^(−½) + 2x⁻² = 2/√x + 2/x².

**2.** dy/dx = 2x − 10 = 0, so x = 5.

**3.** A maximum.

**4.** 2 < x < 5.

**5.** f′(x) = 3x² + 1 ≥ 1 > 0 for all x.

**6.** dy/dx = 3x² − 12 = 0 at x = ±2. d²y/dx² = 6x: (2, −16) is a minimum; (−2, 16) is a maximum.

**7.** dy/dx = 3x² is zero at x = 0 but positive on both sides, so it is a stationary point of inflection, neither maximum nor minimum.

**8.** dy/dx = 8 − 2x⁻² = 0 gives x² = ¼, x = ±½. d²y/dx² = 4x⁻³: at x = ½ it is 32 > 0, so (½, 8) is a minimum; at x = −½ it is −32 < 0, so (−½, −8) is a maximum.

**9.** Sides x and 10 − x: A = 10x − x², dA/dx = 10 − 2x = 0 at x = 5; d²A/dx² = −2 < 0, so the maximum area is 25 cm².

**10.** A maximum.

**11.** The quantity must be written in terms of a single variable before it can be differentiated with respect to that variable.

## Related resources

- [P2 differentiation study guide](/resources/edexcel-a-level-mathematics-yma01-p2-differentiation-edexcel-alevel-maths/)
- [P2 differentiation practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-differentiation-edexcel-alevel-maths-practice/)
- [Stationary points, definite integrals, areas and the trapezium rule revision notes](/resources/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the-revision-notes/)
- [Unit P2 revision notes](/resources/edexcel-a-level-mathematics-pure2-revision-notes/)
