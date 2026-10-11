---
title: "OCR A Level Mathematics A: Numerical methods: locating roots, iteration, Newton-Raphson and numerical integration (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths A Numerical Methods Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Numerical methods: locating roots, iteration, Newton-Raphson and numerical integration"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 122
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "numerical-methods-ocr-alevel-maths"
description: "Condensed revision notes on sign change, iteration, convergence, Newton-Raphson and the trapezium rule for OCR A Level Mathematics A, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense section 1.09, Numerical Methods, of the OCR A Level Mathematics A specification (H240, Version 3.1, August 2026, for first assessment in 2018). All of 1.09 is Stage 2, so it is **A Level only**. Longer explanations and extra worked examples are in the [study guide](/resources/ocr-a-level-mathematics-numerical-methods-locating-roots-iteration-newton/). To test yourself afterwards, try the [practice questions](/resources/ocr-a-level-mathematics-numerical-methods-locating-roots-iteration-newton-practice/). The course page is [OCR A Level Mathematics](/boards/ocr/a-level/mathematics/), the printable list is the [checklist](/checklists/ocr/a-level/mathematics/), and the [free diagnostics](/diagnostics/) help you pick what to revise first.

## Key results at a glance

| Ref | Idea | Result |
|---|---|---|
| 1.09a | Sign change | Continuous f with f(a) and f(b) of opposite sign has a root in (a, b) |
| 1.09a | Accuracy check | Root to k decimal places: show a sign change between the two numbers half a unit either side |
| 1.09b | Failure | Touching the axis, an even number of roots, a vertical asymptote |
| 1.09c | Iteration | Rearrange f(x) = 0 to x = g(x); xₙ₊₁ = g(xₙ) |
| 1.09e | Convergence | Converges to α if \|g′(α)\| < 1 and x₁ is close enough to α |
| 1.09d | Newton-Raphson | xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ) |
| 1.09e | Newton failure | f′(xₙ) = 0 breaks the method; a start near a stationary point can throw the value far away |
| 1.09f | Trapezium rule | (h/2)[y₀ + yₙ + 2(y₁ + ... + yₙ₋₁)], with h = (b − a)/n |
| 1.09f | Over or under | f″ < 0 (concave): underestimate. f″ > 0 (convex): overestimate |
| 1.09f | Rectangles | Increasing f: left ends give a lower bound, right ends an upper bound. Decreasing f: swapped |
| 1.09g | Context | Form the equation, locate the root, refine it, interpret it with units |

## Method boxes

### Show a root lies in an interval (1.09a)

1. Write f(x) = (left side) − (right side), so the equation is f(x) = 0.
2. Evaluate f at both ends and quote the values.
3. State that f is continuous and that the sign changes.
4. Conclude that a root lies in the interval.

For "show that α = 1.76 to 2 decimal places", the two end points are 1.755 and 1.765.

### Iterate and draw (1.09c)

1. Rearrange to x = g(x) and write the iteration xₙ₊₁ = g(xₙ).
2. Substitute x₁ and keep every value in your working.
3. Stop when the values agree to the required accuracy.
4. For the diagram: draw y = x and y = g(x), then go vertical to the curve and horizontal to the line, repeatedly.

### Newton-Raphson (1.09d)

1. Differentiate f.
2. Write xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ) with the actual functions.
3. Substitute x₁, then x₂.
4. Check the last two values agree to the accuracy asked.

### Trapezium rule (1.09f)

1. Find h = (b − a)/n.
2. List the n + 1 ordinates.
3. First and last once, the rest doubled, all multiplied by h/2.
4. For over or under: find the sign of f″ or describe the shape of the curve.

## Convergence and diagrams

| g′(α) | Result | Picture |
|---|---|---|
| between 0 and 1 | Converges from one side | Staircase inwards |
| between −1 and 0 | Converges, alternating | Cobweb inwards |
| greater than 1 | Diverges | Staircase outwards |
| less than −1 | Diverges, alternating | Cobweb outwards |

A rearrangement can converge to one root and diverge from another. For x = (x² + 6)/5, the roots of x² − 5x + 6 = 0 are 2 and 3. Here g′(x) = 2x/5, which is 0.8 at x = 2 (converges) and 1.2 at x = 3 (diverges).

## Worked reminders

**Sign change that misleads.** f(x) = (3x − 4)/(x − 2) has f(1) = 1 and f(3) = 5. Both are positive, yet f(4/3) = 0. The interval also contains the asymptote x = 2, so there are two sign changes and a simple end-point test sees neither.

**Newton-Raphson by hand.** f(x) = x² − 10, x₁ = 3.

```
f′(x) = 2x
x₂ = 3 − (−1)/6 = 19/6 = 3.1667
x₃ = 19/6 − (361/36 − 10)/(19/3) = 3.16228
```

This is converging to √10 = 3.16228.

**Newton-Raphson fails.** f(x) = x³ − 3x + 3 has f′(x) = 3x² − 3, which is zero at x = ±1. Starting at x₁ = 1 gives division by zero. Starting at x₁ = 0 gives x₂ = 0 − 3/(−3) = 1, and then x₃ is undefined.

**Trapezium over or under.** ∫ x² dx from 0 to 2, 4 strips. y values: 0, 0.25, 1, 2.25, 4.

```
T = 0.25 × [0 + 4 + 2(0.25 + 1 + 2.25)] = 2.75
```

The exact value is 8/3 = 2.667. The curve is convex (f″ = 2 > 0), so 2.75 is an overestimate.

**Rectangle bounds for a decreasing curve.** y = 1/x from 1 to 3 with 2 strips of width 1. The y values are 1, 0.5, 0.3333. Left ends give an upper bound: 1 + 0.5 = 1.5. Right ends give a lower bound: 0.5 + 0.3333 = 0.8333. So 0.8333 < I < 1.5.

**Modelling (1.09g).** A floating sphere gives h³ − 3h² + 2.4 = 0 with 0 < h < 2. Locate the root with f(1.1) = 0.101 and f(1.2) = −0.192. Then iterate h = √[2.4/(3 − h)], where g′ is about 0.30 at the root, to reach h = 1.134. State the answer in words with its unit.

**Accuracy by bounds (1.09a).** To confirm a root of x³ + 2x − 9 = 0 is 1.762 to 3 decimal places, test 1.7615 and 1.7625 and show opposite signs. Quote both function values.

## Must-know distinctions

- **A sign change** proves a root only if f is continuous. **No sign change** proves nothing.
- **Convergence** is about |g′(α)| at the root, not about how large g(x₁) happens to be.
- **Staircase** means g′ is positive at the root. **Cobweb** means g′ is negative at the root.
- **Newton-Raphson** is itself an iteration xₙ₊₁ = g(xₙ), with g(x) = x − f(x)/f′(x).
- **Strips versus ordinates.** n strips use n + 1 ordinates.
- **Upper bound by rectangles** and **overestimate by trapezium** are different statements. The first comes from the monotonic shape of the curve, the second from its curvature.
- **Concave** (f″ < 0) means the trapezium rule underestimates. **Convex** (f″ > 0) means it overestimates.

## Quick self-test

1. For f(x) = 2ˣ − 5x, show that f(x) = 0 has a root between 4 and 5.
2. Why does g(x) = 1/x change sign on [−1, 1] without having a root there?
3. An iteration has g′(α) = −0.6. Describe how it behaves.
4. An iteration has g′(α) = 1.3. Describe how it behaves.
5. Use Newton-Raphson on f(x) = x³ − 7 with x₁ = 2 to find x₂. Give it as a fraction.
6. State when Newton-Raphson fails at the first step.
7. How many ordinates does the trapezium rule use for 6 strips?
8. A curve is convex between a and b. Does the trapezium rule over- or underestimate the area?
9. Find h and write down the x-values for the trapezium rule on ∫ f(x) dx from 2 to 3 with 5 strips.
10. For x = (x² + 6)/5, which of the two roots can be found by the iteration?

### Answers

1. f(4) = 16 − 20 = −4 and f(5) = 32 − 25 = 7. f is continuous and the sign changes, so a root lies between 4 and 5.
2. 1/x has a vertical asymptote at x = 0 and is not continuous on [−1, 1]. The sign change comes from the jump, not a root.
3. Converges, because |−0.6| < 1. The values alternate either side of α, giving an inward cobweb.
4. Diverges, because g′(α) > 1. The values move away from α, giving an outward staircase.
5. f′(x) = 3x², so x₂ = 2 − (8 − 7)/12 = 2 − 1/12 = 23/12.
6. When f′(x₁) = 0, which means x₁ is a stationary point of f.
7. Seven ordinates, y₀ to y₆.
8. Overestimate.
9. h = 1/5 = 0.2. The x-values are 2, 2.2, 2.4, 2.6, 2.8, 3.
10. Only x = 2. At x = 2, g′ = 0.8, so it converges. At x = 3, g′ = 1.2, so it diverges.

## Where marks are usually lost

- Not stating that the function is continuous when claiming a root from a sign change.
- Quoting a sign change between 1.7 and 1.8 to justify a root "to 2 decimal places", instead of testing the two numbers either side of the rounded value.
- Using the iteration formula without writing down x₁, x₂, x₃ in turn, so a slip cannot be traced.
- Deciding convergence from a few lucky terms instead of calculating g′ at the root.
- Forgetting f′ in the Newton-Raphson denominator, or differentiating wrongly.
- Giving "overestimate" or "underestimate" with no reason attached.
- Doubling the wrong ordinates in the trapezium rule, or doubling the first and last.
- Swapping the lower and upper rectangle bounds for a decreasing function.
- In context questions, leaving the root as a bare number with no units and no sentence answering the question.

Return to the [study guide](/resources/ocr-a-level-mathematics-numerical-methods-locating-roots-iteration-newton/) for any section that felt shaky.

## Official syllabus

OCR, *A Level Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018. Section 1.09 Numerical Methods, 1.09a to 1.09g.
