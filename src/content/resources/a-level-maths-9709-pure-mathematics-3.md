---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 3 -- Study Guide"
seoTitle: "Cambridge 9709 Pure Mathematics 3 Study Guide (Paper 3)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "algebra-cambridge-alevel-maths-3"
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "logarithmic-and-exponential-functions-cambridge-3"
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "trigonometry-cambridge-alevel-maths-3"
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "differentiation-cambridge-alevel-maths-3"
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "integration-cambridge-alevel-maths-3"
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "numerical-solution-of-equations-cambridge-3"
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "vectors-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "differential-equations-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "complex-numbers-cambridge-alevel-maths"
description: "Study guide to Cambridge 9709 Pure Mathematics 3 (Paper 3): sections 3.1 to 3.9 taught step by step with a fully worked example for each topic."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

This guide teaches **Pure Mathematics 3**, topic 3 of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). It covers syllabus sections 3.1 to 3.9. It is examined only on **Paper 3** (1 hour 50 minutes, 75 marks, 9 to 11 structured questions, 30% of the A Level), which is A Level only and on every A Level route. Paper 1 content is assumed and can be tested.

Course hub: [Cambridge A Level Mathematics](/boards/cambridge/a-level/mathematics/). Printable list: [9709 checklist](/checklists/cambridge/a-level/mathematics/). To find your gaps first, take the [A Level 10-minute diagnostic](/practice/9709/diagnostic/a-level/).

## What this topic covers

| Section | What you must be able to do |
|---|---|
| 3.1 Algebra | Modulus; polynomial division; factor and remainder theorems; partial fractions; (1 + x)ⁿ for rational n |
| 3.2 Logarithmic and exponential functions | Laws of logarithms; eˣ and ln x; unknowns in indices; linear form |
| 3.3 Trigonometry | sec, cosec, cot; identities; R sin(θ ± α) and R cos(θ ± α) |
| 3.4 Differentiation | Products, quotients, composites; parametric and implicit |
| 3.5 Integration | Standard integrals; identities; partial fractions; kf′(x)/f(x); parts; substitution |
| 3.6 Numerical solution of equations | Sign change; iteration xₙ₊₁ = F(xₙ) |
| 3.7 Vectors | Lines r = a + tb; parallel, intersecting or skew; scalar product |
| 3.8 Differential equations | Form, separate, solve, interpret |
| 3.9 Complex numbers | Cartesian and polar forms; conjugate pairs; square roots; loci |

No marks are given for unsupported calculator answers. Give non-exact answers to 3 significant figures (1 d.p. for angles in degrees) unless told otherwise.

## 3.1 Algebra

**Modulus.** |x| ≥ 0 always. Two rules do most of the work:

- |a| = |b| ⇔ a² = b²
- |x − a| < b ⇔ a − b < x < a + b

When both sides are moduli, square. Otherwise sketch the graphs, because squaring could create a false solution.

*Worked example.* Solve |x − 3| = |2x + 1|.

```
(x − 3)² = (2x + 1)²
x² − 6x + 9 = 4x² + 4x + 1
3x² + 10x − 8 = 0
(3x − 2)(x + 4) = 0      →  x = 2/3 or x = −4
```

**Factor and remainder theorems.** The remainder when p(x) is divided by (ax + b) is p(−b/a). If p(−b/a) = 0, then (ax + b) is a factor.

*Worked example.* p(x) = 2x³ + ax² − 7x + 6 has a factor (2x − 3). Find a and factorise p(x).

p(3/2) = 27/4 + 9a/4 − 21/2 + 6 = 0, so a = −1. Division by (2x − 3) gives x² + x − 2, so p(x) = (2x − 3)(x − 1)(x + 2).

**Partial fractions.** The syllabus uses three denominators. Recall the form for each:

| Denominator | Form |
|---|---|
| (ax + b)(cx + d)(ex + f) | A/(ax + b) + B/(cx + d) + C/(ex + f) |
| (ax + b)(cx + d)² | A/(ax + b) + B/(cx + d) + C/(cx + d)² |
| (ax + b)(cx² + d) | A/(ax + b) + (Bx + C)/(cx² + d) |

*Worked example.* Express (3x² + 5)/((x + 1)(x² + 3)) in partial fractions.

Write 3x² + 5 ≡ A(x² + 3) + (Bx + C)(x + 1). Put x = −1: 8 = 4A, so A = 2. Compare x² terms: 3 = A + B, so B = 1. Compare constants: 5 = 3A + C, so C = −1. The answer is 2/(x + 1) + (x − 1)/(x² + 3).

**Binomial expansion for rational n.** (1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + …, valid for |x| < 1, is in the formula list (MF19). For (a + bx)ⁿ, take out aⁿ first.

*Worked example.* Expand √(4 − x) up to x².

√(4 − x) = 2(1 − x/4)^½ = 2[1 + ½(−x/4) + (½)(−½)/2 × (−x/4)²] = 2 − x/4 − x²/64. Valid for |x/4| < 1, that is |x| < 4.

## 3.2 Logarithmic and exponential functions

y = eˣ and y = ln x are inverse functions, so their graphs are reflections in y = x. y = e^(kx) rises for k > 0, falls for k < 0, and passes through (0, 1). Use log(ab) = log a + log b, log(a/b) = log a − log b and log(aⁿ) = n log a. Change of base is not in this syllabus.

*Worked example (inequality).* Solve 5ˣ < 2 × 3ˣ.

Take ln: x ln 5 < ln 2 + x ln 3, so x(ln 5 − ln 3) < ln 2. As ln 5 − ln 3 > 0, the sign stays: x < ln 2/ln(5/3), so x < 1.36 (3 s.f.). Dividing by a negative logarithm reverses the sign.

**Linear form.** y = kxⁿ gives ln y = ln k + n ln x: plot ln y against ln x (gradient n, intercept ln k). y = k(aˣ) gives ln y = ln k + x ln a: plot ln y against x (gradient ln a).

*Worked example.* A graph of ln y against ln x is a straight line through (1, 0.8) and (4, 2.3). Gradient n = 1.5/3 = 0.5. Intercept: 0.8 = ln k + 0.5, so ln k = 0.3 and k = e^0.3 = 1.35 (3 s.f.). So y = 1.35x^0.5.

## 3.3 Trigonometry

sec θ = 1/cos θ, cosec θ = 1/sin θ, cot θ = 1/tan θ. MF19 gives 1 + tan²θ ≡ sec²θ, cot²θ + 1 ≡ cosec²θ and the compound- and double-angle formulae. The R-form is not given.

*Worked example.* Solve 3 cosec²θ − 5 cot θ = 5 for 0° < θ < 360°.

```
3(1 + cot²θ) − 5 cot θ − 5 = 0
3cot²θ − 5 cot θ − 2 = 0
(3 cot θ + 1)(cot θ − 2) = 0
cot θ = 2      →  tan θ = 0.5  →  θ = 26.6°, 206.6°
cot θ = −1/3   →  tan θ = −3   →  θ = 108.4°, 288.4°
```

**R-form.** Expand R sin(θ ± α), compare coefficients, then R = √(a² + b²) and tan α comes from the ratio.

*Worked example.* Solve 3 sin θ − 4 cos θ = 2 for 0° < θ < 360°.

R sin(θ − α) = R sin θ cos α − R cos θ sin α, so R cos α = 3 and R sin α = 4. R = 5 and tan α = 4/3, so α = 53.13°. Then sin(θ − 53.13°) = 0.4, giving θ − 53.13° = 23.58° or 156.42°. So θ = 76.7° or 209.6°.

## 3.4 Differentiation

MF19 lists the derivatives of eˣ, ln x, the six trig functions and tan⁻¹ x, with the product and quotient rules and dy/dx = (dy/dt) ÷ (dx/dt). sin⁻¹ x and cos⁻¹ x are not required.

*Worked example (quotient).* Find the stationary point of y = (ln x)/x.

dy/dx = (x × 1/x − ln x × 1)/x² = (1 − ln x)/x². This is zero when ln x = 1, so x = e and y = 1/e.

**Implicit differentiation.** Differentiate every term with respect to x. Each term in y picks up a factor dy/dx; a product such as xy needs the product rule.

*Worked example.* The curve x² + xy + y² = 7 passes through (1, 2). Find the equation of the normal there.

2x + (y + x dy/dx) + 2y dy/dx = 0. At (1, 2): 4 + 5 dy/dx = 0, so dy/dx = −4/5. The normal has gradient 5/4: y − 2 = (5/4)(x − 1), so 4y = 5x + 3.

## 3.5 Integration

Learn ∫e^(ax + b) dx = (1/a)e^(ax + b), ∫1/(ax + b) dx = (1/a)ln|ax + b| and ∫sec²(ax + b) dx = (1/a)tan(ax + b). ∫1/(x² + a²) dx = (1/a)tan⁻¹(x/a) is in MF19.

*Worked example (identity).* ∫₀^(π/12) cos²3x dx. Use cos²3x = ½(1 + cos 6x):

[x/2 + (sin 6x)/12] from 0 to π/12 = π/24 + 1/12.

*Worked example (partial fractions and kf′/f).* Using the split from 3.1:

```
∫₀¹ (3x² + 5)/((x + 1)(x² + 3)) dx
= ∫₀¹ [2/(x + 1) + x/(x² + 3) − 1/(x² + 3)] dx
= [2 ln(x + 1) + ½ ln(x² + 3) − (1/√3) tan⁻¹(x/√3)]₀¹
= 2 ln 2 + ½ ln(4/3) − π/(6√3)
```

The middle term is kf′(x)/f(x) with k = ½.

**By parts.** ∫u (dv/dx) dx = uv − ∫v (du/dx) dx (in MF19). Choose u to be the factor that gets simpler when you differentiate it.

*Worked example.* ∫₀^(π/2) x cos x dx. Take u = x and dv/dx = cos x: [x sin x]₀^(π/2) − ∫₀^(π/2) sin x dx = π/2 − 1.

**Substitution.** The substitution is always given. Replace dx and change the limits: with u = √x, ∫₁⁴ 1/(x + √x) dx becomes ∫₁² 2/(u + 1) du = 2 ln(3/2).

## 3.6 Numerical solution of equations

If f is continuous and f(a), f(b) differ in sign, f(x) = 0 has a root between a and b. For x³ + 2x − 7 = 0, f(1) = −4 and f(2) = 5.

**Iteration.** Rearrange to x = F(x) and use xₙ₊₁ = F(xₙ). If it converges to α, then α = F(α), so α solves the original equation. An iteration may fail to converge.

*Worked example.* Use xₙ₊₁ = ∛(7 − 2xₙ) with x₁ = 1.5: 1.5, 1.5874, 1.5639, 1.5703, 1.5686, 1.5690, 1.5689, 1.5690. The root is 1.569 to 3 d.p.

## 3.7 Vectors

In r = a + tb, a is the position vector of a point on the line and b is its direction. Lines are parallel if their directions are multiples. Otherwise solve for an intersection; if no values satisfy all three equations, the lines are skew. The foot of the perpendicular P from C satisfies CP.b = 0. The scalar product a.b = a₁b₁ + a₂b₂ + a₃b₃ = |a||b| cos θ is in MF19. The vector product is not required.

*Worked example.* l₁: r = (i + 2j + 3k) + s(i − j + 2k) and l₂: r = (i + j + 6k) + t(2i − j + k). Show that they intersect and find the acute angle between them.

```
x: 1 + s = 1 + 2t
y: 2 − s = 1 − t
```

From x, s = 2t. Then y gives 2 − 2t = 1 − t, so t = 1 and s = 2. Check z: 3 + 2(2) = 7 and 6 + 1 = 7. The lines meet at (3, 0, 7). Angle: cos θ = |1×2 + (−1)(−1) + 2×1|/(√6 × √6) = 5/6, so θ = 33.6°.

## 3.8 Differential equations

"The rate of decrease of h is proportional to √h" becomes dh/dt = −k√h, k > 0. Separate, integrate, add one constant, then use the conditions.

*Worked example.* A tank drains so that dh/dt = −k√h. When t = 0, h = 16; when t = 5, h = 9. Find when the tank is empty.

```
∫ h^(−½) dh = ∫ −k dt   →   2√h = −kt + c
t = 0, h = 16:  c = 8
t = 5, h = 9:   6 = −5k + 8   →   k = 0.4
empty when h = 0:  0.4t = 8   →   t = 20
```

The model predicts the tank is empty at t = 20; it does not apply after that.

## 3.9 Complex numbers

Know Re z, Im z, |z|, arg z and z\*. The syllabus usually takes arg z in −π < θ ≤ π. For multiplication and division, show full working.

*Division.* (3 + 4i)/(1 − 2i) = (3 + 4i)(1 + 2i)/((1 − 2i)(1 + 2i)) = (−5 + 10i)/5 = −1 + 2i.

*Conjugate pairs.* With real coefficients, non-real roots come in conjugate pairs. If 1 + 2i is a root of z³ − 5z² + 11z − 15 = 0, so is 1 − 2i. Their factor is z² − 2z + 5; dividing gives z − 3, so the third root is 3.

*Polar form.* For z₁ = 2e^(iπ/3) and z₂ = 4e^(iπ/4): z₁z₂ has modulus 8 and argument 7π/12; z₁/z₂ has modulus ½ and argument π/12. Multiplying scales and rotates; conjugating reflects in the real axis.

*Loci.* |z − a| = k is a circle, centre a, radius k. |z − a| = |z − b| is the perpendicular bisector of a and b. arg(z − a) = α is a half-line from a, excluding a. For |z − 2| = |z − 4i|, the bisector is y = ½x + 3/2, through (1, 2).

## Common errors

- Squaring |2x − 5| > x + 1: the right side can be negative, so sketch instead.
- Using (Bx + C) over a linear factor, or a single constant over cx² + d.
- Forgetting the (1/a) factor with e^(ax + b), sin(ax + b) or 1/(ax + b).
- Doing trig calculus in degrees instead of radians.
- Claiming lines intersect after checking only two components.
- Taking arg z from tan⁻¹(y/x) without checking the quadrant.

## Next steps

Use the [revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/) for formula tables and a self-test, then the practice sets on [algebra and calculus](/resources/a-level-mathematics-pure-3-algebra-calculus-practice/) and [trigonometry, vectors and complex numbers](/resources/a-level-mathematics-pure-3-trig-vectors-complex-practice/). Their questions differ from the examples here.

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027, Version 4, Cambridge Assessment International Education (part of Cambridge University Press & Assessment). Topic 3, Pure Mathematics 3 (for Paper 3).
