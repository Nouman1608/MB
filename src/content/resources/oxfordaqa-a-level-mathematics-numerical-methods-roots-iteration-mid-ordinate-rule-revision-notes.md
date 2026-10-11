---
title: "OxfordAQA International AS and A-level Mathematics: Numerical methods: roots, iteration, mid-ordinate rule and Simpson's rule (9660) -- Revision Notes"
seoTitle: "OxfordAQA 9660 Numerical Methods Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Numerical methods: roots, iteration, mid-ordinate rule and Simpson's rule"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 198
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-numerical-methods-oxfordaqa-alevel-maths"
description: "Condensed revision notes on P2.9 numerical methods for OxfordAQA International A-level Maths 9660, with formulas, method steps and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense section P2.9 (Numerical methods) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification lists this content under International A-level (A2) Unit P2 (Pure Maths); it is not examined at International AS. For full explanations and worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-numerical-methods-roots-iteration-mid-ordinate-rule/), then test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-numerical-methods-roots-iteration-mid-ordinate-rule-practice/). Course pages: [hub](/boards/oxfordaqa/a-level/mathematics/) and [checklist](/checklists/oxfordaqa/a-level/mathematics/). Not sure what to revise first? Take a [free diagnostic](/diagnostics/).

## Key facts at a glance

| Idea | Rule |
|---|---|
| Sign change | f continuous on [a, b], with f(a) and f(b) differing in sign → at least one root in (a, b) |
| Iteration | Rearrange f(x) = 0 to x = g(x); use xₙ₊₁ = g(xₙ) from a starting value x₁ |
| Convergence | Converges near α when |g′(α)| < 1 and x₁ is close enough |
| Staircase | 0 < g′(α) < 1: one-sided approach |
| Cobweb | −1 < g′(α) < 0: alternates either side of α |
| Strip width | h = (b − a)/n for n strips |
| Mid-ordinate | ∫ₐᵇ y dx ≈ h × (sum of the n midpoint heights) |
| Simpson | (h/3)[first + last + 4(odd ordinates) + 2(even interior ordinates)], n even |

## Locating roots

**Method.**

1. Write f(x) = 0 in the form "expression = 0".
2. Evaluate f at both ends of the interval and record the signs.
3. State that f is continuous (name the type, for example "polynomial" or "exponential").
4. Conclude: opposite signs, so a root lies in the interval.

**To show a root is correct to a given number of decimal places**, evaluate f at the two values that bracket it. For a root of 1.24 to 2 d.p., test 1.235 and 1.245.

**Where a sign change misleads**

- A jump or asymptote inside the interval, for example tan x between 1 and 2, can change sign without a root.
- A root where the graph touches the axis, for example f(x) = (2x − 5)², gives no sign change.
- Two roots in one interval can leave the end signs equal.

## Iteration

**Method.**

1. Rearrange to x = g(x) (several rearrangements usually exist).
2. Substitute x₁ to get x₂, and repeat.
3. Carry extra decimal places, stop when successive values agree to the accuracy asked, and state the result.

**Example.** From x³ + 2x² − 5 = 0, the rearrangement xₙ₊₁ = √(5/(xₙ + 2)) from x₁ = 1 gives 1.2910, 1.2326, 1.2437, 1.2416, 1.2420, 1.2419. The root is about 1.2419.

**Must-know distinctions**

| Staircase | Cobweb |
|---|---|
| g′(α) positive | g′(α) negative |
| Values move steadily in one direction | Values alternate above and below α |
| Converges if g′(α) < 1 | Converges if g′(α) > −1 |

**Drawing a diagram.** Plot y = x and y = g(x). From x₁ go up or down to the curve, across to y = x, and repeat. In an exam sketch, mark α where the curves cross, label x₁, x₂, x₃ on the axis, and use arrows. If the arrows head towards α, the iteration converges; if away, it diverges.

**A rearrangement that fails.** For the same equation, xₙ₊₁ = 5/xₙ² − 2 has g′(α) ≈ −5.22, so the cobweb spirals outwards. From 1.3 it gives 0.9586, 3.4414, −1.5778, 0.0084, then 70 754.76.

## Mid-ordinate rule

**Method.**

1. Find h = (b − a)/n.
2. List the midpoints: a + h/2, a + 3h/2, and so on.
3. Evaluate y at each midpoint.
4. Add the heights and multiply by h.

**Geometry.** Each rectangle matches the trapezium under the tangent at the midpoint. Convex curve: tangent below the curve, estimate **too low**. Concave curve: estimate **too high**.

**Reminder.** ∫₁³ (1/x) dx with 4 strips: h = 0.5, midpoints 1.25, 1.75, 2.25, 2.75, heights 0.8, 0.5714, 0.4444, 0.3636. Estimate = 0.5 × 2.2194 = 1.0898, below the exact value ln 3 = 1.0986 because 1/x is convex.

## Simpson's rule

**Method.**

1. Check the number of strips is even (odd number of ordinates).
2. Find h and list ordinates y₀ to yₙ.
3. Ends: weight 1. Odd positions: weight 4. Even interior positions: weight 2.
4. Multiply the weighted total by h/3.

**Reminder.** ∫₀² x/(1 + x²) dx with 4 strips: ordinates 0, 0.4, 0.5, 0.46154, 0.4. Estimate = (0.5/3)[0 + 0.4 + 4(0.4 + 0.46154) + 2(0.5)] = 0.8077.

Simpson's rule is exact for polynomials up to cubic, so a quadratic or cubic is a good way to check your set-up.

## Improving estimates

- Double the number of strips and recompute. Stop when two successive estimates agree to the accuracy you want.
- For ∫₁³ (1/x) dx the mid-ordinate estimates for 2, 4, 8 strips are 1.0667, 1.0898, 1.0963; the error roughly quarters each time.
- The same integral with Simpson's rule gives 1.1111, 1.1000, 1.0987, so it settles faster.
- You can reuse earlier function values: doubling the strips for Simpson's rule keeps all the old ordinates.

## Choosing and presenting

| Task says | Do this |
|---|---|
| "Show that f(x) = 0 has a root in [a, b]" | Evaluate f(a) and f(b), state signs, continuity, conclusion |
| "Show that the root is 1.24 to 2 d.p." | Evaluate f at 1.235 and 1.245 and state the sign change |
| "Use the iteration to find x₂, x₃ ..." | Show each substitution, give 4 or more decimal places |
| "Sketch a diagram to illustrate" | Both curves, the root, and arrows from x₁ through x₂, x₃ |
| "Estimate using n strips" | Write h first, then the table of heights, then the sum |
| "Comment on your estimate" | Refer to convex or concave, or to a further estimate with more strips |

Write the table of y-values every time. It makes your working easy to follow, and it lets you spot a wrong weighting before the final answer.

## Quick self-test

1. For f(x) = 2x³ − x − 9, find f(1) and f(2) and state what they show.
2. Show that f(x) = 2x³ − x − 9 has a root between 1.7 and 1.8.
3. Show that 2x³ − x − 9 = 0 can be written x = ∛((x + 9)/2). With x₁ = 2, find x₂ and x₃ to 4 d.p.
4. xₙ₊₁ = √(2xₙ + 3) with x₁ = 1. Find x₂ and x₃ to 3 d.p., then find the limit α exactly.
5. Is the iteration in question 4 a staircase or a cobweb? Justify with g′(α).
6. An iteration has g′(α) = −1.3. Does it converge? Describe the diagram.
7. Use the mid-ordinate rule with 2 strips to estimate ∫₀⁴ √x dx to 3 d.p. Is it an over- or underestimate?
8. Use Simpson's rule with 2 strips for ∫₀⁴ √x dx, to 3 d.p.
9. Use Simpson's rule on ∫₀³ x² dx with 2 strips. What do you notice?
10. Ordinates 2.0, 3.1, 3.6, 3.0, 2.2 are taken at x = 0, 0.5, 1, 1.5, 2. Estimate the area using Simpson's rule.

### Answers

1. f(1) = −8, f(2) = 5. The sign changes and f is continuous (polynomial), so a root lies between 1 and 2.
2. f(1.7) = −0.874 and f(1.8) = 0.864. Opposite signs, f continuous, so a root lies in (1.7, 1.8).
3. 2x³ = x + 9, so x³ = (x + 9)/2. Then x₂ = ∛5.5 = 1.7652 and x₃ = ∛5.3826 = 1.7525.
4. x₂ = √5 = 2.236 and x₃ = 2.734. At the limit α = √(2α + 3), so α² − 2α − 3 = 0, (α − 3)(α + 1) = 0. Since the iterates are positive, α = 3.
5. g(x) = √(2x + 3), g′(x) = 1/√(2x + 3), so g′(3) = 1/3. It is positive and less than 1: a staircase, converging.
6. −1.3 is below −1, so it diverges: the cobweb spirals outwards away from α.
7. h = 2, midpoints 1 and 3: 2(1 + 1.732) = 5.464. √x is concave, so this is an overestimate (exact value 16/3 = 5.333).
8. h = 2, ordinates 0, 1.414, 2: (2/3)(0 + 2 + 4 × 1.41421) = 5.105.
9. h = 1.5, ordinates 0, 2.25, 9: (1.5/3)(0 + 9 + 9) = 9, which is exact, as expected for a quadratic.
10. (0.5/3)[2.0 + 2.2 + 4(3.1 + 3.0) + 2(3.6)] = (1/6)(35.8) = 5.967.

## Where marks are usually lost

- A "show that" root argument with the numbers but no mention of continuity or the sign change.
- Accepting a sign change over an asymptote.
- Rounding each iterate to 2 or 3 decimal places and letting the error build up.
- Naming a convergent iteration "staircase" or "cobweb" without checking the sign of g′(α).
- Using strip edges in the mid-ordinate rule instead of midpoints.
- Applying Simpson's rule to an odd number of strips.
- Weighting 4 and 2 the wrong way round, or forgetting to multiply by h/3.
- Saying "over-estimate" with no reference to convexity or concavity.
- Giving more or fewer decimal places than the question asks.

Examiner insights on how answers gain or lose credit are in the practice set's answers.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, published by OxfordAQA. This content is listed under P2.9 in International A-level Unit P2 (Pure Maths).
