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

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 1, Pure Mathematics 1 (for Paper 1): section 1.7 Differentiation.
