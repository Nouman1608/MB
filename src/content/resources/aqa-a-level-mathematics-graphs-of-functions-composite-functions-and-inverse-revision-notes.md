---
title: "AQA A-level Mathematics: Graphs of Functions, Composite Functions and Inverse Functions (7357) -- Revision Notes"
seoTitle: "AQA A-level Maths B7-B8 Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Graphs of Functions, Composite Functions and Inverse Functions"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 12
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b7-graphs-of-functions-aqa-alevel-maths"
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b8-composite-and-inverse-functions-aqa-alevel-maths"
description: "Condensed revision notes for AQA A-level Maths 7357 B7 and B8: curve sketching, modulus graphs, asymptotes, proportion, composite and inverse functions."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense AQA A-level Mathematics 7357 content B7 (graphs of functions) and B8 (composite and inverse functions), from the specification version 1.3 dated 31 January 2018. Longer explanations are in the [study guide](/resources/aqa-a-level-mathematics-graphs-of-functions-composite-functions-and-inverse/) first.

Quick links: [course hub](/boards/aqa/a-level/mathematics/) | [checklist](/checklists/aqa/a-level/mathematics/) | [practice questions](/resources/aqa-a-level-mathematics-graphs-of-functions-composite-functions-and-inverse-practice/) | [free 10-minute diagnostics](/diagnostics/)

## Key definitions

| Term | Meaning |
|---|---|
| Root | A value of x where the curve meets the x-axis (y = 0) |
| Repeated root | A factor (x − a)² gives a touch at a. A factor (x − a)³ gives a flat crossing at a |
| Asymptote | A line the curve approaches but never reaches |
| Modulus | |u| is the non-negative size of u. |u| = u if u ≥ 0 and |u| = −u if u < 0 |
| Proportional | y ∝ x means y = kx for a constant k. The constant k is found from one pair of values |
| Composite function | gf(x) = g(f(x)). Apply f first |
| One-one function | Each output comes from only one input. Only these have inverses |
| Inverse function | f⁻¹ undoes f: f⁻¹f(x) = x and ff⁻¹(x) = x |

## B7: sketching in steps

**Polynomial (B7)**

1. Factorise and mark the roots. Note which are repeated.
2. Find the y-intercept by putting x = 0.
3. Use the highest power and its sign for the ends. A positive x³ goes from bottom left to top right. A negative x³ goes from top left to bottom right. An even power with a positive coefficient has both ends up.
4. Join up: cross at single roots, touch at double roots.

**Worked reminder.** y = x(x − 4)(x + 1) has roots −1, 0 and 4, a positive cubic shape, and passes through the origin. At x = −2, y = (−2)(−6)(−1) = −12, which is below the axis, as expected for the far left.

**Modulus of a linear function (B7)**

1. Sketch the line y = ax + b.
2. Reflect any part below the x-axis into the upper half-plane.
3. The vertex is at x = −b/a on the x-axis. The y-intercept is |b|.

**Worked reminder.** y = |2x − 1| has its vertex at (1/2, 0), meets the y-axis at (0, 1), and has arm gradients +2 and −2.

**Solving a modulus equation.** Solve u = v and −u = v separately, then check both roots in the original. Reject any root that makes the right-hand side negative.

**Reciprocal curves (B7)**

| Curve | a > 0 | a < 0 | Asymptotes |
|---|---|---|---|
| y = a/x | Quadrants 1 and 3 | Quadrants 2 and 4 | x = 0 and y = 0 |
| y = a/x² | Both branches above the x-axis | Both branches below the x-axis | x = 0 and y = 0 |

Neither curve meets either axis. y = a/x is unchanged by a half-turn about the origin. y = a/x² is symmetric about the y-axis.

## B7: graphs and equations

- The real solutions of f(x) = g(x) are the x-coordinates of the intersections of y = f(x) and y = g(x).
- To count roots of a hard equation, rearrange into two curves you can sketch, for example x³ + 2x − 6 = 0 as x² + 2 = 6/x.
- Algebraic and graphical methods must agree. Use the sketch to check you have not lost a solution (for example by dividing by x).
- A line is tangent to a quadratic curve when the combined equation has a repeated root, so its discriminant is zero.
- For an inequality, read off the x-values where one graph is above (or below) the other.

## B7: proportion

| Relationship | Equation | Graph |
|---|---|---|
| y ∝ x | y = kx | A line through the origin |
| y ∝ xⁿ | y = kxⁿ | Curve through the origin |
| y ∝ 1/x | y = k/x | Hyperbola |
| y ∝ 1/xⁿ | y = k/xⁿ | Curve with both axes as asymptotes |

- Test y = kxⁿ by plotting y against xⁿ. A straight line through the origin confirms it, and the gradient is k.
- Percentage effects: if y ∝ x² and x rises by 10 per cent, y is multiplied by 1.1² = 1.21, a 21 per cent rise.
- If y ∝ 1/√x and x is multiplied by 4, y is multiplied by 1/2.

## B8: composite functions

- gf(x) = g(f(x)). In general gf ≠ fg.
- Domain of gf: x must be in the domain of f, and f(x) must be in the domain of g.
- Range of gf: the output of g applied to the range of f.
- ff means apply f twice. For f(x) = 1/(x − 1), ff(x) = 1/(1/(x − 1) − 1) = (x − 1)/(2 − x), for x ≠ 1 and x ≠ 2.

**Method for a composite equation.** Build gf(x) in full, simplify, then solve. Do not substitute numbers until the composite is a single expression, unless the question asks for a value.

**Worked reminder.** f(x) = 2x + 1 and g(x) = x³. gf(x) = (2x + 1)³ and fg(x) = 2x³ + 1. At x = 1, gf(1) = 27 and fg(1) = 3.

## B8: inverse functions

**Method in steps**

1. Check f is one-one on its domain, restricting the domain if not.
2. Write y = f(x) and rearrange to make x the subject.
3. Replace y by x to write f⁻¹(x).
4. The domain of f⁻¹ is the range of f.

**Must-know facts**

- Graph: mirror the curve in the line y = x. A point (a, b) on f becomes (b, a) on f⁻¹.
- If f(a) = b then f⁻¹(b) = a.
- Inputs of f⁻¹ are outputs of f, and the other way round.
- (fg)⁻¹ = g⁻¹f⁻¹: the order reverses. For f(x) = 2x + 1 and g(x) = x³, fg(x) = 2x³ + 1 and (fg)⁻¹(x) = ∛((x − 1)/2).
- Self-inverse: f⁻¹ = f, so ff(x) = x. Example: f(x) = (x + 3)/(x − 1) for x ≠ 1.
- Where f meets f⁻¹: if f is increasing, solve f(x) = x.

**Worked reminder (domain restriction).** f(x) = (x − 1)² + 2 for x ≥ 1 has range f(x) ≥ 2. Then y − 2 = (x − 1)², and x ≥ 1 gives x = 1 + √(y − 2). So f⁻¹(x) = 1 + √(x − 2) with domain x ≥ 2.

## Must-know distinctions

| Compare | Rule |
|---|---|
| gf and fg | gf applies f first. They usually differ |
| f⁻¹(x) and 1/f(x) | The inverse function is not the reciprocal |
| Touching and crossing | Even power of a factor: touch. Odd power: cross |
| Vertical and horizontal asymptote | x = 0 comes from division by zero. y = 0 is the limit of the curve for large |x| |
| Domain of f and of f⁻¹ | Domain of f⁻¹ is the range of f |

## Quick self-test

1. For y = (x + 1)(x − 3)², state where the curve meets each axis and say whether it crosses or touches the x-axis at each root.
2. Solve |x + 2| = 3 − x.
3. State the asymptotes of y = −5/x² and say which side of the x-axis the curve lies on.
4. y varies inversely with x, and y = 8 when x = 4. Find y when x = 16.
5. f(x) = 2x + 1 and g(x) = x³. Find gf(1) and fg(1).
6. Find the inverse of f(x) = (x + 3)/(x − 1) for x ≠ 1.
7. f(x) = (x − 1)² + 2 for x ≥ 1. State the domain of f⁻¹.
8. If f(x) = 2x + 1 and g(x) = x³, find (fg)⁻¹(55).
9. The point (3, 7) lies on y = f(x). Write down a point on y = f⁻¹(x) and the value of f⁻¹(7).
10. y = kx². By what percentage does y change when x increases by 10 per cent?

### Answers

1. y-intercept (0, 9), since (1)(9) = 9. Crosses the x-axis at (−1, 0), touches it at (3, 0).
2. Right arm: x + 2 = 3 − x gives x = 1/2. Left arm: −x − 2 = 3 − x gives −2 = 3, impossible. So x = 1/2. Check: |5/2| = 5/2.
3. Asymptotes x = 0 and y = 0. Both branches lie below the x-axis.
4. y = k/x, so k = 32, and y = 32/16 = 2.
5. gf(1) = g(3) = 27. fg(1) = f(1) = 3.
6. y(x − 1) = x + 3, so x(y − 1) = y + 3 and x = (y + 3)/(y − 1). So f⁻¹(x) = (x + 3)/(x − 1), x ≠ 1. The function is self-inverse.
7. The range of f is f(x) ≥ 2, so the domain of f⁻¹ is x ≥ 2.
8. fg(x) = 2x³ + 1, so (fg)⁻¹(55) = ∛((55 − 1)/2) = ∛27 = 3. Check: fg(3) = 55.
9. (7, 3) lies on f⁻¹, and f⁻¹(7) = 3.
10. y is multiplied by 1.21, a 21 per cent increase.

## Where marks are usually lost

- Writing gf when the working is fg, or applying the functions in the wrong order.
- Giving f⁻¹(x) with no domain, when the question asks for the inverse function as a function.
- Drawing a double root as a crossing, or leaving out the y-intercept.
- Leaving out the asymptotes on a sketch of y = a/x or y = a/x², or drawing a curve that touches them.
- Keeping a modulus root without checking the original equation.
- Cancelling a factor of x and so dropping the root x = 0.
- Choosing the wrong square root when inverting a restricted quadratic. Use the sign that matches the domain.
- Calling a relationship proportional when the graph does not pass through the origin.
- Reflecting the inverse in the x-axis or y-axis instead of the line y = x.

## Official syllabus

AQA, A-level Mathematics (7357) specification, version 1.3, 31 January 2018, content B7 and B8 and Appendix A notation for functions.
