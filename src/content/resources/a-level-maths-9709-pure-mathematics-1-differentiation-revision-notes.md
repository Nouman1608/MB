---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 1 Differentiation -- Revision Notes"
seoTitle: "Cambridge 9709 P1 Differentiation Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Differentiation (Pure Mathematics 1)"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 35
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
    subtopic: "differentiation-cambridge-alevel-maths-1"
description: "Condensed revision notes for Cambridge 9709 Paper 1 differentiation: power and chain rules, tangents, connected rates, stationary points and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-28
featured: false
---

For full explanations and longer worked examples, use the [Paper 1 differentiation study guide](/resources/a-level-maths-9709-pure-mathematics-1-differentiation/). These notes condense section **1.7 Differentiation** of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). It sits in topic 1, Pure Mathematics 1, and is examined on **Paper 1**, which is compulsory for AS and A Level. Papers 2 and 3 assume it.

Course hub: [Cambridge A Level Mathematics](/boards/cambridge/a-level/mathematics/). Printable list: [9709 checklist](/checklists/cambridge/a-level/mathematics/). Check your gaps with the free [AS Level 10-minute diagnostic](/practice/9709/diagnostic/as/) or the [9709 self-check bank](/practice/9709/). Then test yourself with the [Paper 1 differentiation practice questions](/resources/a-level-maths-9709-pure-mathematics-1-differentiation-practice/).

## 1.7 at a glance

| Outcome | Key idea |
|---|---|
| Gradient as a limit | Chord gradients approach the tangent gradient as the second point moves in. Informal only; formal first principles not required |
| Notation | dy/dx = f′(x) (gradient); d²y/dx² = f″(x) (rate of change of gradient) |
| Rules | xⁿ for rational n; multiples, sums, differences; chain rule for composites |
| Applications | Tangents, normals, increasing/decreasing, rates of change, connected rates |
| Stationary points | dy/dx = 0; nature by d²y/dx² or gradient either side; used in sketching. Points of inflexion not included |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--01-chord-to-tangent.webp" width="900" height="880" alt="Graph of y = 2x squared. Point P is at x = 3, y = 18. Three chords from P to points a distance h to the right (h = 1, 0.5, 0.25) get closer to the gold tangent line as h shrinks. The chord gradient is 12 + 2h: 14, 13, 12.2 and 12.02 for h = 1, 0.5, 0.1 and 0.01. As h tends to 0 the gradient tends to 12, the gradient of the curve at x = 3, which agrees with dy/dx = 4x." loading="lazy">
  <figcaption>How chord gradients 12 + 2h approach the tangent gradient 12 at x = 3 on y = 2x².</figcaption>
</figure>


## Formulas

| Result | In MF19? |
|---|---|
| d/dx (xⁿ) = nxⁿ⁻¹, n rational | Yes |
| d/dx (k) = 0; d/dx (kf(x)) = kf′(x) | No (learn) |
| Chain rule: dy/dx = (dy/du) × (du/dx) | No (learn) |
| d/dx (ax + b)ⁿ = an(ax + b)ⁿ⁻¹ | No (a chain-rule case) |
| Tangent at (x₁, y₁): y − y₁ = m(x − x₁) | No |
| Normal gradient = −1/m | No |
| Connected rates: dA/dt = (dA/dx) × (dx/dt) | No |
| Volume of sphere (4/3)πr³, surface area 4πr² | Yes |

A scientific calculator is allowed on Paper 1, but not one that differentiates symbolically. Show the working: unsupported calculator answers score nothing.

## Rewrite first

Every term must be a single power of x before you use nxⁿ⁻¹.

| Given | Rewrite |
|---|---|
| ∛x | x^(1/3) |
| 6/x⁴ | 6x⁻⁴ |
| 3/(2√x) | (3/2)x^(−1/2) |
| (x³ − 2)/x² | x − 2x⁻² |

Brackets such as (x + 2)² can be expanded or done by the chain rule. Quotients with a sum on the bottom, such as 1/(x² + 1), need the chain rule: write them as (x² + 1)⁻¹.

## Method in steps

**Chain rule**

1. Spot the inside: u = the bracket.
2. Differentiate the outside power, leaving the inside unchanged.
3. Multiply by du/dx.

Example: d/dx (x² + 1)⁴ = 4(x² + 1)³ × 2x = 8x(x² + 1)³. At x = 1 this is 8 × 8 = 64.

**Tangent or normal at x = a**

1. Find y at x = a, if not given.
2. Differentiate and substitute x = a to get m.
3. Tangent uses m; normal uses −1/m.
4. Use y − y₁ = m(x − x₁). Rearrange only if the form is asked for.

Example: y = x² − 2x at x = 3. y = 3, dy/dx = 2x − 2 = 4. Tangent: y = 4x − 9. Normal: y − 3 = −¼(x − 3), which gives x + 4y = 15.

**Increasing or decreasing**

1. Find f′(x).
2. Increasing: solve f′(x) > 0. Decreasing: solve f′(x) < 0.
3. "Show that f is increasing": prove f′(x) > 0 for **all** x in the domain, usually by completing the square, and say why.

**Connected rates of change**

1. Identify the rate you know and the rate you want.
2. Write the formula linking the two variables.
3. Differentiate it.
4. Chain the rates: wanted rate = (derivative) × (known rate), or divide as needed.
5. Substitute the given value only now.

**Stationary points**

1. Solve dy/dx = 0 for x.
2. Find each y.
3. Find d²y/dx² at each point: negative → maximum, positive → minimum.
4. If d²y/dx² = 0, test the sign of dy/dx just either side.

Example: y = x³ − 3x + 1. dy/dx = 3x² − 3 = 0 gives x = ±1. d²y/dx² = 6x. At (−1, 3): −6, so maximum. At (1, −1): 6, so minimum.

**Maximum and minimum problems**

1. Use the constraint to write the quantity in one variable.
2. Differentiate and set equal to 0.
3. Justify max or min (second derivative).
4. Answer the question asked, with units.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--05-chain-rule-gradients.webp" width="900" height="1250" alt="Three graphs show y = square root of (4x squared + 9) built in two steps. Top: u = 4x squared + 9 has gradient 16 at x = 2 where u = 25. Middle: y = square root of u has gradient 0.1 at u = 25 where y = 5. Bottom: the combined curve y = square root of (4x squared + 9) has gradient 1.6 at x = 2, and 16 times 0.1 equals 1.6, so dy/dx = dy/du times du/dx." loading="lazy">
  <figcaption>The gradient of the composite is the product of the two gradients: 16 × 0.1 = 1.6.</figcaption>
</figure>


## Two more worked reminders

**Connected rates.** A cube of edge x cm is shrinking so that its volume decreases at 12 cm³ per second. Find the rate of change of x when x = 2.

```
V = x³,  dV/dx = 3x² = 12 when x = 2
dV/dt = −12 (decreasing, so negative)
dx/dt = (dV/dt) ÷ (dV/dx) = −12 ÷ 12 = −1
the edge decreases at 1 cm per second
```

**Sketching from stationary points.** Sketch y = 3x² − x³.

```
dy/dx = 6x − 3x² = 3x(2 − x) = 0  →  x = 0 or x = 2
d²y/dx² = 6 − 6x:  x = 0 gives 6 > 0, minimum (0, 0)
                   x = 2 gives −6 < 0, maximum (2, 4)
y = x²(3 − x) = 0  →  touches the x-axis at 0, crosses at x = 3
```

The x³ coefficient is negative, so the curve comes down from the top left, touches the origin, rises to (2, 4), then falls through (3, 0) to the bottom right. Label every stationary point and intercept with its coordinates.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--07-exp-and-ln-slopes.webp" width="900" height="1200" alt="Top: the graph of y = e to the x with gold tangents at x = 0, 1 and 2. The slope at each point equals its height: 1, e and e squared, so the derivative of e to the x is e to the x. Bottom: the graph of y = ln x with tangents at x = 1, 2 and 4 having slopes 1, one half and one quarter, so the derivative of ln x is 1 over x." loading="lazy">
  <figcaption>The slope of eˣ equals its height and the slope of ln x at x is 1/x.</figcaption>
</figure>


## Must-know distinctions

- **dy/dx vs d²y/dx².** The first is the gradient; the second tells you how the gradient changes. Nature of a stationary point comes from the second.
- **Tangent vs normal.** Same point, gradients m and −1/m.
- **Stationary vs turning.** A stationary point has zero gradient. Only a maximum or minimum is a turning point. A stationary point where the gradient keeps the same sign either side is neither.
- **Rate of change vs value.** dV/dt = 20 is how fast V changes, not V itself.
- **Increasing vs positive.** f′(x) > 0 means f is increasing. It says nothing about whether f(x) itself is positive.
- **Chord vs tangent.** A chord joins two points on the curve; the tangent touches at one. The chord gradient tends to the tangent gradient.

## Quick self-test

1. Differentiate 7x⁻².
2. Differentiate 1/√x.
3. Differentiate (5 − 2x)⁴.
4. Find the gradient of y = x³ − 2x at x = −1.
5. A tangent has gradient −4. State the gradient of the normal at the same point.
6. Find d²y/dx² for y = x⁴ − 3x².
7. For which values of x is y = x² − 10x + 3 decreasing?
8. The side of a square, x cm, increases at 0.2 cm per second. Find the rate at which the area increases when x = 6.
9. Find the stationary point of y = 4x + 1/x for x > 0 and state its nature.
10. On y = x², P has x = 1 and Q has x = 1 + h. Find the gradient of PQ and its limit as h → 0.
11. Differentiate (x³ − 2)/x².

### Answers

1. −14x⁻³
2. y = x^(−1/2), so dy/dx = −½x^(−3/2)
3. 4(5 − 2x)³ × (−2) = −8(5 − 2x)³
4. dy/dx = 3x² − 2 = 1
5. 1/4
6. dy/dx = 4x³ − 6x, so d²y/dx² = 12x² − 6
7. dy/dx = 2x − 10 < 0, so x < 5
8. dA/dt = 2x × 0.2 = 2.4 cm² per second
9. 4 − x⁻² = 0 gives x = ½ (x > 0), y = 4. d²y/dx² = 2x⁻³ = 16 > 0, so (½, 4) is a minimum
10. ((1 + h)² − 1)/h = 2 + h, which tends to 2
11. x − 2x⁻², so dy/dx = 1 + 4x⁻³

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--02-gradient-function.webp" width="900" height="1110" alt="Two graphs aligned on the same x values. Top: the cubic f(x) = x cubed minus 3x squared minus 9x plus 4, rising to a maximum (minus 1, 9), falling to a minimum (3, minus 23), then rising. Bottom: its gradient function f dash = 3(x + 1)(x minus 3), a U-shaped parabola crossing zero at x = minus 1 and x = 3. Where f dash is positive f is rising, where negative f is falling, and f dash = 0 at the maximum and minimum." loading="lazy">
  <figcaption>The sign of f′ tells you where f rises or falls, and f′ = 0 at turning points.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--03-convex-concave-inflection.webp" width="900" height="970" alt="A quartic curve f(x) = x to the 4 minus 8x cubed plus 18x squared plus 5. It is convex (bends upwards, teal) for x less than 1, concave (bends downwards, copper) between x = 1 and x = 3, and convex again for x greater than 3. The points of inflection (1, 16) and (3, 32) are ringed; dashed tangents there cross the curve, and at (3, 32) the tangent is horizontal. The second derivative 12(x minus 1)(x minus 3) is zero and changes sign at each." loading="lazy">
  <figcaption>Convex and concave sections of a curve and the inflection points where f″ changes sign.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--06-product-rule-area.webp" width="900" height="650" alt="A rectangle of width u and height v has area uv. When x increases a little, u grows by du and v by dv, adding a strip of area v du on the right, a strip u dv on the top, and a tiny corner du dv which vanishes in the limit. So the change in uv is v du + u dv, giving (uv)′ = u′v + uv′. Example: y = x cubed times e to the 2x at x = 1 has gradient 3e squared + 2e squared = 5e squared, about 36.9." loading="lazy">
  <figcaption>Why the product rule has two terms: the rectangle area uv grows by v du + u dv.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--08-parametric-gradient.webp" width="900" height="967" alt="The curve x = t squared + 2t, y = t cubed minus 3t, drawn with equal scales. At t = 2 the point is (8, 2). Its horizontal rate dx/dt = 6 and vertical rate dy/dt = 9 form a right triangle whose slope is the gradient dy/dx = 9 over 6 = 3 over 2. The gold tangent has that gradient and the teal normal has gradient minus two thirds. Grey dots mark t = minus 1, 0 and 1." loading="lazy">
  <figcaption>At t = 2 the gradient is dy/dt ÷ dx/dt = 9/6, with the normal gradient −2/3.</figcaption>
</figure>


## Where marks are usually lost

- Differentiating a fraction top and bottom separately, e.g. treating (x³ − 2)/x² as 3x²/2x. Split it into powers first.
- Leaving out the × du/dx factor of the chain rule, especially a negative one such as the −2 in (5 − 2x)⁴.
- Losing the minus sign on a negative power: d/dx (8x⁻¹) = −8x⁻², not 8x⁻².
- Using m instead of −1/m for the normal, or writing the normal gradient as −m.
- In connected rates, substituting the numerical value before differentiating, which turns the variable into a constant.
- Rates with the wrong sign: a decreasing quantity has a negative rate. Say "decreasing at 3 cm s⁻¹" or give −3.
- Stating the nature of a stationary point without the evidence (the value or sign of d²y/dx²).
- Forgetting the y-coordinate when the question asks for the coordinates of the stationary point.
- On "show that f is increasing", completing the square correctly but not concluding that f′(x) > 0 for all x.
- Giving the answer to a max/min problem as the x-value when the question asked for the maximum area or volume.

## Related pages

- [Paper 1 differentiation study guide](/resources/a-level-maths-9709-pure-mathematics-1-differentiation/)
- [Paper 1 differentiation practice questions](/resources/a-level-maths-9709-pure-mathematics-1-differentiation-practice/)
- [Quadratics revision notes](/resources/a-level-mathematics-quadratics-revision-notes/) (completing the square, used for "increasing" proofs)
- [Pure Mathematics 1 mixed practice](/resources/a-level-mathematics-pure-1-mixed-practice/)
- [Pure Mathematics 2 revision notes](/resources/a-level-mathematics-pure-mathematics-2-revision-notes/) and [Pure Mathematics 3 revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/) for the later differentiation rules

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--04-tangent-and-normal.webp" width="900" height="942" alt="Graph of y = square root of (2x + 5) with equal scales on both axes. At P(2, 3) the gradient is one third, so the gold tangent is 3y = x + 7. The teal normal is perpendicular, with gradient minus 3, y = 9 minus 3x, and crosses the x-axis at (3, 0). A right-angle mark at P shows the lines are perpendicular because one third times minus 3 equals minus 1." loading="lazy">
  <figcaption>The tangent and normal at P(2, 3) are perpendicular because their gradients multiply to −1.</figcaption>
</figure>


## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 1, Pure Mathematics 1 (for Paper 1): section 1.7 Differentiation.
