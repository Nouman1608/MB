---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 3 -- Revision Notes"
seoTitle: "Cambridge 9709 Pure Mathematics 3 Revision Notes (Paper 3)"
resourceType: "revision-notes"
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
description: "Condensed revision notes for Cambridge 9709 Pure Mathematics 3: key formulae, method steps, must-know distinctions and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

These notes condense **Pure Mathematics 3**, topic 3 of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4), sections 3.1 to 3.9. The content is examined only on **Paper 3** (1 hour 50 minutes, 75 marks), which is A Level only. Paper 1 knowledge is assumed. For full explanations and worked examples, read the [Pure Mathematics 3 study guide](/resources/a-level-maths-9709-pure-mathematics-3/) first.

Practise with [Pure 3 algebra and calculus questions](/resources/a-level-mathematics-pure-3-algebra-calculus-practice/) and [Pure 3 trigonometry, vectors and complex numbers questions](/resources/a-level-mathematics-pure-3-trig-vectors-complex-practice/). Course hub: [Cambridge A Level Mathematics](/boards/cambridge/a-level/mathematics/). Checklist: [9709 printable checklist](/checklists/cambridge/a-level/mathematics/). Quick check: [A Level 10-minute diagnostic](/practice/9709/diagnostic/a-level/).

## Formula table

"MF19" means the result is printed in the list of formulae you get in the exam. Everything else you must recall.

| Result | In MF19? |
|---|---|
| (1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + …, \|x\| < 1, n rational | Yes |
| 1 + tan²θ ≡ sec²θ; cot²θ + 1 ≡ cosec²θ | Yes |
| sin(A ± B), cos(A ± B), tan(A ± B); sin 2A, cos 2A, tan 2A | Yes |
| a sin θ + b cos θ = R sin(θ + α), R = √(a² + b²) | No |
| d/dx tan⁻¹ x = 1/(1 + x²); product and quotient rules; dy/dx = (dy/dt) ÷ (dx/dt) | Yes |
| ∫1/(x² + a²) dx = (1/a) tan⁻¹(x/a) | Yes |
| ∫u dv/dx dx = uv − ∫v du/dx dx; ∫f′(x)/f(x) dx = ln\|f(x)\| | Yes |
| ∫e^(ax + b) dx = (1/a)e^(ax + b); ∫1/(ax + b) dx = (1/a) ln\|ax + b\|; ∫cos(ax + b) dx = (1/a) sin(ax + b); ∫sin(ax + b) dx = −(1/a) cos(ax + b) | No |
| a.b = a₁b₁ + a₂b₂ + a₃b₃ = \|a\|\|b\| cos θ | Yes |
| \|z₁z₂\| = \|z₁\|\|z₂\|; arg(z₁z₂) = arg z₁ + arg z₂ | No |

## 3.1 Algebra

- |a| = |b| ⇔ a² = b². |x − a| < b ⇔ a − b < x < a + b.
- Remainder on dividing p(x) by (ax + b) is p(−b/a).
- Polynomial division (degree up to 4) by a linear or quadratic: p(x) = (divisor)(quotient) + remainder.
- Partial fractions: numerator degree less than denominator degree. Repeated factor (cx + d)² needs B/(cx + d) + C/(cx + d)². Quadratic factor cx² + d needs (Bx + C)/(cx² + d).
- Binomial for (a + bx)ⁿ: write aⁿ(1 + bx/a)ⁿ; valid for |bx/a| < 1.

**Method: modulus inequality with a non-modulus side**
1. Sketch y = |ax + b| and the other graph.
2. Solve the two linear cases separately.
3. Keep only the solutions that fit the sketch.
4. Read the inequality region from the sketch.

## 3.2 Logarithms and exponentials

- ln and e are inverses: e^(ln x) = x (x > 0), ln(eˣ) = x.
- Unknown in an index: take ln of both sides, then collect the x terms.
- A disguised quadratic: 3^(2x) − 5 × 3ˣ + 6 = 0 becomes u² − 5u + 6 = 0 with u = 3ˣ, so 3ˣ = 2 or 3, giving x = 0.631 or x = 1.
- Linear form: y = kxⁿ → ln y against ln x; y = k(aˣ) → ln y against x.

## 3.3 Trigonometry

**Method: R-form**
1. Expand R sin(θ + α) (or whichever form is asked).
2. Match: R cos α = a, R sin α = b.
3. R = √(a² + b²); tan α = b/a. Give α in the unit and accuracy asked.
4. To solve, set the new angle range first, then find every solution.

- Graphs: y = sec θ and y = cosec θ have |y| ≥ 1, period 360°, with asymptotes where cos θ = 0 and sin θ = 0 respectively. y = cot θ has period 180° and asymptotes where sin θ = 0.
- Maximum of R sin(θ + α) is R; minimum is −R.
- Exact values come from the compound-angle formulae, for example tan 75° = tan(45° + 30°) = 2 + √3.

## 3.4 Differentiation

- Chain rule for composites: d/dx ln(f(x)) = f′(x)/f(x); d/dx e^(f(x)) = f′(x)e^(f(x)).
- Implicit: each y term gains dy/dx. Then collect dy/dx terms on one side.
- Tangent gradient m; normal gradient −1/m.
- Parametric: dy/dx = (dy/dt)/(dx/dt), and it is usually left in terms of t.
- Composite with tan⁻¹: d/dx tan⁻¹(2x) = 2/(1 + 4x²). Do not forget the inner derivative 2.

## 3.5 Integration

**Which technique?**

| Integrand looks like | Use |
|---|---|
| sin²x, cos²(ax) | Double-angle identity |
| numerator = k × derivative of denominator | ln\|f(x)\| |
| rational function with factorised denominator | Partial fractions |
| product such as x eˣ, x sin 2x; also ln x alone | By parts (u = the part that simplifies) |
| substitution given in the question | Substitute, change dx and the limits |

- For ∫ln x dx, use parts with u = ln x and dv/dx = 1.

## 3.6 Numerical solutions

**Method: show a root lies in an interval**
1. Rearrange to f(x) = 0.
2. Evaluate f at both ends, with values shown.
3. State: sign change and f continuous, so a root lies in the interval.

**Method: iteration to a given accuracy**
1. Use the full calculator value each time (Ans key).
2. Write each iterate to at least one more decimal place than asked.
3. Stop when two successive iterates round to the same value.
4. To show that the limit α satisfies an equation, put α = F(α) and rearrange.

## 3.7 Vectors

- Unit vector: â = a/|a|. Midpoint of AB: ½(a + b).
- Line: r = a + tb. Direction b; any point on the line is a + tb for some t.
- Angle between lines: use the direction vectors only.
- Perpendicular: a.b = 0.

**Worked reminder: foot of the perpendicular.** From C(4, 1, 0) to r = (i + 2j + 3k) + t(i − j + 2k). A general point is P(1 + t, 2 − t, 3 + 2t). CP = (t − 3, 1 − t, 3 + 2t). CP.(1, −1, 2) = 6t + 2 = 0, so t = −1/3. The foot is P(2/3, 7/3, 7/3) and the distance CP is √165/3.

## 3.8 Differential equations

**Method**
1. Write the rate statement as an equation, with constant k if the question uses "proportional".
2. Separate: all y terms with dy, all x terms with dx.
3. Integrate both sides; one constant c.
4. Use the conditions to find c (and k).
5. Rearrange if asked, then interpret in context.

## 3.9 Complex numbers

- z = x + iy; z\* = x − iy; zz\* = x² + y² = |z|².
- Divide by multiplying top and bottom by the conjugate of the bottom.
- Polar form r(cos θ + i sin θ) = re^(iθ).
- Square roots: set (a + ib)² = z, compare real and imaginary parts, solve the quartic.
- Multiply in polar form: multiply the moduli and add the arguments. Divide: divide the moduli and subtract the arguments. Adjust the final argument into −π < θ ≤ π if needed.
- On an Argand diagram, z + w is the diagonal of the parallelogram with sides z and w, and z − w is the vector from w to z.

## Must-know distinctions

- **|z − a| = k vs |z − a| = |z − b|**: a circle vs a perpendicular bisector.
- **arg(z − a) = α**: a half-line from a, not a full line.
- **Parallel vs skew**: parallel lines have direction vectors that are multiples of each other; skew lines are not parallel and do not meet.
- **ln|x| vs ln x**: the modulus is needed when x may be negative.
- **sec x vs cos⁻¹ x**: sec x = 1/cos x; cos⁻¹ x is the inverse function.

## Quick self-test

1. Solve |x + 2| = |3x − 4|.
2. Find the remainder when 2x³ − x² + 3x − 5 is divided by (2x − 1).
3. Solve 3^(x + 1) = 7, giving x to 3 s.f.
4. Express (x + 5)/(x² − 1) in partial fractions.
5. Expand (1 − 2x)⁻² up to x², and state the range of validity.
6. Differentiate e^(2x) sin x.
7. Find the exact value of ∫₀^(π/8) sec²2x dx.
8. Find the exact value of cos 75°.
9. The iteration xₙ₊₁ = ½(xₙ + 5/xₙ), starting from x₁ = 2, converges. Find the exact limit.
10. Find the angle between i + 2j + 2k and 2i − j + 2k, to 1 d.p.
11. Find (2 + i)(3 − 4i). Find the modulus and argument of 1 − √3 i.
12. Find the general solution of dy/dx = 2xy, for y > 0.

### Answers

1. Square: 8x² − 28x + 12 = 0, so 2x² − 7x + 3 = 0: **x = ½ or x = 3**.
2. p(½) = ¼ − ¼ + 3/2 − 5 = **−7/2**.
3. (x + 1) ln 3 = ln 7, so **x = 0.771**.
4. **3/(x − 1) − 2/(x + 1)**.
5. **1 + 4x + 12x²**, valid for **|x| < ½**.
6. **e^(2x)(2 sin x + cos x)**.
7. [½ tan 2x] from 0 to π/8 = **½**.
8. cos 45° cos 30° − sin 45° sin 30° = **(√6 − √2)/4**.
9. α = ½(α + 5/α) gives α² = 5; the iterates are positive, so **α = √5**.
10. a.b = 4, |a| = |b| = 3, cos θ = 4/9, **θ = 63.6°**.
11. **10 − 5i**. For 1 − √3 i: **modulus 2, argument −π/3**.
12. ∫1/y dy = ∫2x dx gives ln y = x² + c, so **y = Ae^(x²)**.

## Where marks are usually lost

- Squaring an inequality whose non-modulus side can be negative, creating extra "solutions".
- Writing a single fraction for a repeated factor, or a constant numerator over a quadratic factor.
- Not taking out aⁿ before a binomial expansion of (a + bx)ⁿ, so the validity range is wrong.
- Giving α in degrees when radians were asked for, or to the wrong number of decimal places.
- Solving for 2θ or (θ + α) without first changing the range, so solutions are missing.
- Losing the constant of integration, or adding it only after taking exponentials.
- Leaving substitution limits in terms of x.
- Iterates rounded before being fed back in, so the final value drifts.
- In vectors, checking only two of three components before claiming an intersection.
- Taking arg z from a calculator's tan⁻¹ without placing z in the correct quadrant.

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027, Version 4, Cambridge Assessment International Education (part of Cambridge University Press & Assessment). Topic 3, Pure Mathematics 3 (for Paper 3).
