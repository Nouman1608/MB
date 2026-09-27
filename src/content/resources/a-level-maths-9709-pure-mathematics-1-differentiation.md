---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 1 Differentiation -- Study Guide"
seoTitle: "Cambridge 9709 P1 Differentiation Study Guide (Paper 1)"
resourceType: "study-guides"
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
description: "Study guide to Cambridge 9709 Paper 1 differentiation (section 1.7): chords and limits, the chain rule, tangents, rates of change and stationary points."
author: "marlbridge-academic-team"
publishedDate: 2026-09-28
featured: false
---

This guide teaches section **1.7 Differentiation** of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). Section 1.7 is part of topic 1, Pure Mathematics 1, which is examined on **Paper 1** (1 hour 50 minutes, 75 marks, 10 to 12 structured questions). Paper 1 is compulsory for both AS Level and A Level, and the syllabus says Paper 1 content is assumed knowledge for Papers 2 and 3.

Course hub: [Cambridge A Level Mathematics](/boards/cambridge/a-level/mathematics/). Printable list: [9709 checklist](/checklists/cambridge/a-level/mathematics/). To find your gaps first, take the free [AS Level 10-minute diagnostic](/practice/9709/diagnostic/as/), or try the [9709 self-check bank](/practice/9709/).

## What this unit covers

| Syllabus 1.7 outcome | What you must be able to do |
|---|---|
| Gradient as a limit | See the gradient at a point as the limit of chord gradients (informal idea only); use f′(x), f″(x), dy/dx and d²y/dx² |
| Rules | Differentiate xⁿ for any rational n, with constant multiples, sums, differences, and composite functions by the chain rule |
| Applications | Gradients, tangents and normals, increasing and decreasing functions, rates of change, including connected rates of change |
| Stationary points | Locate them, decide their nature (including with the second derivative), and use them to sketch graphs |

Two limits from the syllabus notes. Formal differentiation from first principles is **not** required. Knowledge of points of inflexion is **not** included.

A scientific calculator is allowed on every 9709 paper, but graphical calculators and calculators that differentiate symbolically are not. No marks are given for unsupported calculator answers, so show the calculus by hand. Give non-exact answers to 3 significant figures unless the question says otherwise.

## 1. The gradient of a curve

The gradient of a straight line is the same everywhere. A curve's gradient changes. The gradient of a curve **at a point** is the gradient of the tangent there.

To reach it, take a chord from the point to a nearby point on the curve, and let the second point slide closer. The chord gradients approach a limit. That limit is the gradient of the curve.

*Worked example.* On y = 2x², P has x-coordinate 3 and Q has x-coordinate 3 + h.

```
P = (3, 18),  Q = (3 + h, 2(3 + h)²) = (3 + h, 18 + 12h + 2h²)
gradient of PQ = (12h + 2h²) / h = 12 + 2h
```

| h | 0.1 | 0.01 | 0.001 |
|---|---|---|---|
| gradient of PQ | 12.2 | 12.02 | 12.002 |

As h → 0 the chord gradient → 12. So the gradient of the curve at x = 3 is 12. The rule below gives dy/dx = 4x, and 4 × 3 = 12.

**Notation.** For y = f(x):

- the first derivative is **dy/dx** or **f′(x)**: the gradient function;
- the second derivative is **d²y/dx²** or **f″(x)**: the rate of change of the gradient.

## 2. Differentiating xⁿ and the chain rule

**The power rule.** If y = xⁿ, then dy/dx = nxⁿ⁻¹, for any rational n. This result is printed in the list of formulae (MF19). Constants multiply through, and you differentiate sums and differences term by term. A constant term differentiates to 0.

Before you differentiate, write every term as a power of x:

| Written as | Rewrite as |
|---|---|
| √x | x^(1/2) |
| 1/x³ | x⁻³ |
| 5/√x | 5x^(−1/2) |
| (x² + 3)/√x | x^(3/2) + 3x^(−1/2) (divide each term) |

*Worked example.* f(x) = 3x^(5/3) − 8/x + 5.

```
f(x)  = 3x^(5/3) − 8x⁻¹ + 5
f′(x) = 5x^(2/3) + 8x⁻²
f″(x) = (10/3)x^(−1/3) − 16x⁻³
f′(8) = 5 × 4 + 8/64 = 161/8
```

Note that −8x⁻¹ gives (−1)(−8)x⁻² = +8x⁻². Sign slips on negative powers are common.

**The chain rule.** For a function of a function, y = g(u) where u is a function of x:

dy/dx = (dy/du) × (du/dx)

In practice: differentiate the outside, keep the inside unchanged, then multiply by the derivative of the inside. The chain rule is **not** printed in MF19, so learn it.

```
y = (3x − 1)⁵      →  dy/dx = 5(3x − 1)⁴ × 3  = 15(3x − 1)⁴
y = 8/(2x + 1)³    =  8(2x + 1)⁻³
                   →  dy/dx = −24(2x + 1)⁻⁴ × 2 = −48/(2x + 1)⁴
```

*Worked example.* Find the gradient of y = √(4x² + 9) at x = 2.

```
y = (4x² + 9)^(1/2),  u = 4x² + 9,  du/dx = 8x
dy/dx = ½(4x² + 9)^(−1/2) × 8x = 4x / √(4x² + 9)
at x = 2: 8/√25 = 8/5
```

The chain rule also links composite functions to the [Pure Mathematics 1 functions page](/resources/a-level-mathematics-pure-mathematics-1-functions/): fg(x) is exactly the "function of a function" shape.

## 3. Tangents and normals

At the point (x₁, y₁) on a curve, find m = dy/dx at x₁.

- **Tangent:** gradient m, so y − y₁ = m(x − x₁).
- **Normal:** perpendicular to the tangent, so gradient −1/m: y − y₁ = (−1/m)(x − x₁).

The perpendicular-gradient rule comes from [coordinate geometry](/resources/a-level-mathematics-pure-mathematics-1-coordinate-geometry/).

*Worked example.* The curve y = √(2x + 5) passes through P(2, 3). Find the equations of the tangent and normal at P, and where the normal crosses the x-axis.

```
dy/dx = ½(2x + 5)^(−1/2) × 2 = 1/√(2x + 5)
at x = 2: m = 1/3
tangent:  y − 3 = (1/3)(x − 2)   →  3y = x + 7
normal:   gradient −3,  y − 3 = −3(x − 2)  →  y = 9 − 3x
x-axis:   0 = 9 − 3x  →  (3, 0)
```

## 4. Increasing and decreasing functions

- f is **increasing** where f′(x) > 0.
- f is **decreasing** where f′(x) < 0.

To find the interval, solve the inequality for f′(x). To prove a function is increasing for all x, show f′(x) is always positive, often by completing the square.

*Worked example 1.* f(x) = x³ − 3x² − 9x + 4. Find the set of values of x for which f is decreasing.

```
f′(x) = 3x² − 6x − 9 = 3(x − 3)(x + 1)
f′(x) < 0 between the roots:  −1 < x < 3
```

*Worked example 2.* Show that f(x) = x³ − 6x² + 15x − 2 is an increasing function.

```
f′(x) = 3x² − 12x + 15 = 3(x² − 4x + 5) = 3[(x − 2)² + 1] = 3(x − 2)² + 3
(x − 2)² ≥ 0, so f′(x) ≥ 3 > 0 for all x.  Hence f is increasing.
```

The last line, with the reason, is what earns the final mark. See the [quadratics guide](/resources/a-level-mathematics-pure-mathematics-1-quadratics/) for completing the square.

## 5. Rates of change and connected rates

dy/dx is the rate of change of y with respect to x. With time t, dV/dt is the rate of change of V. When two quantities are linked, the chain rule connects their rates:

dV/dt = (dV/dr) × (dr/dt)

Method: write the formula linking the variables, differentiate it, then substitute into the chain rule. Put numbers in **after** differentiating.

*Worked example.* A spherical balloon is inflated so that its volume increases at 50 cm³ per second. Find the rate at which the radius is increasing when r = 5 cm. (MF19 gives the volume of a sphere, V = (4/3)πr³.)

```
dV/dr = 4πr² = 100π  when r = 5
dV/dt = (dV/dr) × (dr/dt):   50 = 100π × dr/dt
dr/dt = 1/(2π) = 0.159 cm per second (3 s.f.)
```

## 6. Stationary points

A **stationary point** is where dy/dx = 0. To find its **nature**:

- **Second derivative test:** d²y/dx² < 0 gives a maximum; d²y/dx² > 0 gives a minimum.
- **Gradient either side:** + then − is a maximum; − then + is a minimum; the same sign on both sides is neither.

The syllabus allows either method when the question does not specify one. If d²y/dx² = 0, the second derivative test tells you nothing, so use the gradient either side.

*Worked example.* Find the stationary points of y = 2x³ + 3x² − 36x + 10 and determine their nature.

```
dy/dx = 6x² + 6x − 36 = 6(x + 3)(x − 2) = 0  →  x = −3 or x = 2
x = −3:  y = −54 + 27 + 108 + 10 = 91
x = 2:   y = 16 + 12 − 72 + 10 = −34
d²y/dx² = 12x + 6
x = −3:  −30 < 0  →  (−3, 91) is a maximum
x = 2:   30 > 0   →  (2, −34) is a minimum
```

**Sketching.** Plot the stationary points and the y-intercept (0, 10). A positive x³ cubic rises from bottom left to top right, so the curve rises to (−3, 91), falls to (2, −34), then rises again.

*When the second derivative is zero.* For y = x⁴ − 4x³, dy/dx = 4x²(x − 3), so x = 0 or x = 3. At x = 3, d²y/dx² = 12x² − 24x = 36 > 0, so (3, −27) is a minimum. At x = 0, d²y/dx² = 0. Check either side: dy/dx = −16 at x = −1 and −8 at x = 1. The gradient is negative on both sides, so (0, 0) is **neither** a maximum nor a minimum. You don't need to name it further for 9709.

**Maximum and minimum problems.** Form an expression in one variable, differentiate, set it to zero, then confirm the nature.

*Worked example.* An open box has a square base of side x cm and a volume of 500 cm³. Its outer surface area is A = x² + 2000/x. Find the least value of A.

```
dA/dx = 2x − 2000x⁻² = 0  →  x³ = 1000  →  x = 10
A = 100 + 200 = 300
d²A/dx² = 2 + 4000x⁻³ = 6 > 0 at x = 10, so this is a minimum
least surface area = 300 cm²
```

## Common errors

- Differentiating 5/x³ as 5/(3x²). Rewrite as 5x⁻³ first: the answer is −15x⁻⁴.
- Forgetting to multiply by the derivative of the inside in the chain rule: d/dx (1 − 4x)³ is −12(1 − 4x)², not 3(1 − 4x)².
- Using the tangent gradient for the normal, or writing −m instead of −1/m.
- Substituting a numerical value **before** differentiating in a rates question.
- Finding x at a stationary point but not the y-coordinate when coordinates are asked for.
- Stating "maximum" without showing the sign of d²y/dx² or the gradient either side.
- Giving the whole domain where f′(x) > 0 is asked, instead of solving the inequality.

## Next steps

- Condensed recall: [Paper 1 differentiation revision notes](/resources/a-level-maths-9709-pure-mathematics-1-differentiation-revision-notes/)
- Exam-style questions with mark schemes: [Paper 1 differentiation practice questions](/resources/a-level-maths-9709-pure-mathematics-1-differentiation-practice/)
- Mixed topics: [Pure Mathematics 1 mixed practice](/resources/a-level-mathematics-pure-1-mixed-practice/)
- Next in the calculus sequence: [Pure Mathematics 2](/resources/a-level-mathematics-pure-mathematics-2/) (AS route) or [Pure Mathematics 3](/resources/a-level-maths-9709-pure-mathematics-3/) (A Level), which add products, quotients, exponentials, logarithms and trigonometric functions.

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 1, Pure Mathematics 1 (for Paper 1): section 1.7 Differentiation.
