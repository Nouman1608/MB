---
title: "IB DP Mathematics: Applications and Interpretation -- Laws of logarithms, rational exponents, infinite series and complex numbers (HL) Study Guide"
seoTitle: "IB Maths AI HL Logarithms and Complex Numbers Study Guide"
resourceType: "study-guides"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Laws of logarithms, rational exponents, infinite series and complex numbers (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 1.9
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-number-and-algebra"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-1-9"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-number-and-algebra"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-1-10"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-number-and-algebra"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-1-11"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-number-and-algebra"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-1-12"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-number-and-algebra"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-1-13"
description: "Study guide for IB DP Maths AI HL sections 1.9-1.13: laws of logs, rational exponents, infinite geometric series and complex numbers, with worked examples."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the HL number and algebra unit of IB Diploma Programme Mathematics: Applications and Interpretation from scratch. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 1.9–1.13, and all of it is HL only (AHL). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 HL sessions.

When you have worked through it, condense it with the [revision notes](/resources/ib-dp-mathematics-ai-hl-logarithms-complex-numbers-revision-notes/) and test yourself with the [practice questions](/resources/ib-dp-mathematics-ai-hl-logarithms-complex-numbers-practice/). The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) show where the unit sits in the course.

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 1.9 | Use the three laws of logarithms, with base 10 or e | HL only |
| 1.10 | Simplify numerical and algebraic expressions with rational exponents | HL only |
| 1.11 | Find the sum of an infinite geometric sequence | HL only |
| 1.12 | Work with complex numbers in Cartesian form, draw Argand diagrams, solve quadratics with b² − 4ac < 0 | HL only |
| 1.13 | Use polar and exponential forms; products, quotients and integer powers; add sinusoids; interpret operations geometrically | HL only |

All three HL papers require technology, so you will always have your GDC. The guide still says some skills are done "by hand and with technology", so you must be able to show the algebra as well as press the buttons.

## 1.9 Laws of logarithms

For a, x, y > 0:

- log_a xy = log_a x + log_a y
- log_a (x/y) = log_a x − log_a y
- log_a xᵐ = m log_a x

The guide says that in examinations a will be 10 or e. So you will see log x (base 10) and ln x (base e). The laws only work when x and y are positive, which matters when you solve equations.

**Worked example 1.** Write ln 12 + ln 5 − ln 15 as a single logarithm.

```
ln 12 + ln 5 − ln 15 = ln (12 × 5 ÷ 15)
                     = ln 4
                     = 2 ln 2     (since 4 = 2²)
```

**Worked example 2.** Solve log x + log (x − 15) = 2.

```
log [x(x − 15)] = 2
x(x − 15) = 10² = 100
x² − 15x − 100 = 0
(x − 20)(x + 5) = 0
x = 20 or x = −5
```

Check each root in the original equation. With x = −5, log x is undefined, so reject it. The only solution is **x = 20**.

Logarithms scale very large and very small numbers (the guide links this to AHL 2.10). The chemistry link is pH = −log [H⁺]. Because log (100c) = log 100 + log c = 2 + log c, multiplying the hydrogen ion concentration by 100 lowers the pH by exactly 2.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-logarithms-complex-numbers--01-logs-are-lengths.webp" width="900" height="1030" alt="Three rows of bars whose lengths are base 10 logarithms. log 4 plus log 5 has the same length as log 20; log 20 minus log 4 leaves log 5; three bars of log 2 equal log 8. This shows the product, quotient and power laws, valid only for positive numbers." loading="lazy">
  <figcaption>The three laws of logarithms shown as lengths: log 4 + log 5 = log 20, log 20 - log 4 = log 5, 3 log 2 = log 8.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-logarithms-complex-numbers--02-log-equation-domain.webp" width="900" height="940" alt="Graph of y = log x + log (x - 15), defined only for x greater than 15, meeting y = 2 at x = 20. The region x up to 15 is shaded as undefined. The other root of the quadratic, x = -5, lies in that region and is crossed out." loading="lazy">
  <figcaption>Graph of log x + log (x - 15) showing the valid root x = 20 and the rejected root x = -5.</figcaption>
</figure>


## 1.10 Rational exponents

A rational exponent combines a root and a power:

- a^(1/n) = ⁿ√a
- a^(m/n) = (ⁿ√a)ᵐ
- a^(−p) = 1/aᵖ

The usual index laws still hold: aᵖ × a^q = a^(p+q), aᵖ ÷ a^q = a^(p−q), (aᵖ)^q = a^(pq).

**Worked example 3 (numerical).**

```
27^(2/3)  = (cube root of 27)² = 3² = 9
16^(−3/4) = 1 / 16^(3/4) = 1 / (fourth root of 16)³ = 1 / 2³ = 1/8
```

Take the root first. It keeps the numbers small.

**Worked example 4 (algebraic).** Simplify (8x⁶)^(2/3), and x^(2/3) × x^(1/2) ÷ x^(1/6).

```
(8x⁶)^(2/3) = 8^(2/3) × x^(6 × 2/3) = 4x⁴

x^(2/3) × x^(1/2) ÷ x^(1/6) = x^(4/6 + 3/6 − 1/6) = x^(6/6) = x
```

Use a common denominator when you add fractional powers.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-logarithms-complex-numbers--03-rational-exponents.webp" width="900" height="940" alt="Graph of y = x^(2/3) through (8, 4) and (27, 9). Below, two flow chains: 27 to cube root 3 to square 9; and 16 to fourth root 2 to cube 8 to reciprocal 1/8." loading="lazy">
  <figcaption>27^(2/3) = 9 and 16^(-3/4) = 1/8 by taking the root first.</figcaption>
</figure>


## 1.11 Infinite geometric series

A geometric sequence has first term u₁ and common ratio r. From SL you know S_n = u₁(1 − rⁿ)/(1 − r). If |r| < 1, then rⁿ → 0 as n → ∞, so the sum approaches a limit:

**S_∞ = u₁ / (1 − r), valid only for |r| < 1.**

If |r| ≥ 1 the terms do not shrink to zero and there is no sum to infinity. Always state the condition when you use the formula.

**Worked example 5.** A geometric series has u₁ = 10 and S_∞ = 40. Find r.

```
10 / (1 − r) = 40
1 − r = 0.25
r = 0.75      (|r| < 1, so the sum exists)
```

**Worked example 6 (bouncing ball).** A ball is dropped from 8 m. After each bounce it rises to 75% of its previous height. Find the total vertical distance it travels.

The first fall is 8 m. After that the ball goes up and then down the same distance each time. The rises form a geometric series with u₁ = 8 × 0.75 = 6 and r = 0.75.

```
Total = 8 + 2 × S_∞(rises)
      = 8 + 2 × 6 / (1 − 0.75)
      = 8 + 2 × 24
      = 56 m
```

The factor 2 counts each rise and its matching fall. Forgetting it, or doubling the first drop too, are the two usual errors.

**Worked example 7.** Write 0.272727… as a fraction.

0.272727… = 0.27 + 0.0027 + … with u₁ = 0.27 and r = 0.01, so S_∞ = 0.27 / 0.99 = 27/99 = **3/11**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-logarithms-complex-numbers--04-infinite-sum-partial.webp" width="900" height="870" alt="Bar chart of partial sums of a geometric series with first term 10 and ratio 0.75. The bars approach the dashed line at 40, the sum to infinity, reaching 38.7 at n = 12." loading="lazy">
  <figcaption>Partial sums of 10 + 7.5 + ... approach S_inf = 40.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-logarithms-complex-numbers--05-bouncing-ball.webp" width="900" height="940" alt="A ball dropped from 8 m then bouncing to 6 m, 4.5 m, 3.375 m and so on. The rises form a geometric series with sum 24; with matching falls the total distance is 8 + 2 x 24 = 56 m." loading="lazy">
  <figcaption>Total distance of the bouncing ball: 8 + 2 x 24 = 56 m.</figcaption>
</figure>


## 1.12 Complex numbers in Cartesian form

The number i satisfies i² = −1. A complex number in Cartesian form is z = a + bi, where a, b are real.

- **Real part**: Re(z) = a. **Imaginary part**: Im(z) = b (a real number, not bi).
- **Conjugate**: z* = a − bi.
- **Modulus**: |z| = √(a² + b²), the distance from the origin on an Argand diagram.
- **Argument**: arg z = θ, the angle from the positive real axis to the point. On this page arguments are in radians with −π < θ ≤ π.

**Worked example 8.** Let z = 3 + 2i and w = 1 − 4i. Find z + w, z − w, zw and z/w by hand.

```
z + w = 4 − 2i
z − w = 2 + 6i
zw    = 3 − 12i + 2i − 8i² = 3 − 10i + 8 = 11 − 10i

z/w = (3 + 2i)(1 + 4i) / [(1 − 4i)(1 + 4i)]
    = (3 + 12i + 2i + 8i²) / (1 + 16)
    = (−5 + 14i) / 17
    = −5/17 + (14/17)i
```

To divide, multiply top and bottom by the conjugate of the denominator. The denominator becomes a real number.

The guide expects you to calculate powers of complex numbers in Cartesian form with technology. Put your GDC into complex (a + bi) mode and type the expression directly.

### The complex plane

On an Argand diagram the horizontal axis is real and the vertical axis is imaginary. The point (a, b) represents a + bi. The conjugate z* is the reflection of z in the real axis.

### Quadratics with complex roots

For ax² + bx + c = 0 with real coefficients and b² − 4ac < 0, the quadratic formula gives two complex roots. They are always a conjugate pair.

**Worked example 9.** Solve x² − 4x + 13 = 0.

```
b² − 4ac = 16 − 52 = −36
x = (4 ± √(−36)) / 2 = (4 ± 6i) / 2 = 2 ± 3i
```

The graph of f(x) = x² − 4x + 13 never meets the x-axis, because the discriminant is negative. Its vertex is at (2, 9), and the real part of the roots, 2, is the x-coordinate of the vertex.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-logarithms-complex-numbers--06-complex-roots.webp" width="900" height="1080" alt="Top: parabola y = x^2 - 4x + 13 with vertex (2, 9) that never meets the x-axis (discriminant -36). Bottom: Argand diagram with the roots 2 + 3i and 2 - 3i, a conjugate pair with real part 2, the same as the vertex x-coordinate." loading="lazy">
  <figcaption>The parabola misses the x-axis, so the roots 2 +/- 3i are complex and appear as a conjugate pair.</figcaption>
</figure>


## 1.13 Polar and exponential forms

A complex number with modulus r and argument θ can be written as

- **polar form**: z = r(cos θ + i sin θ) = r cis θ
- **exponential (Euler) form**: z = re^(iθ)

To convert from Cartesian form, find r = √(a² + b²), then find θ. Sketch the point first so you pick the right quadrant. To convert back, use a = r cos θ and b = r sin θ.

**Worked example 10.** Write z = −3 + 3i in polar and exponential forms.

```
r = √(9 + 9) = √18 = 3√2
The point (−3, 3) is in the second quadrant.
Reference angle = arctan(3/3) = π/4, so θ = π − π/4 = 3π/4
z = 3√2 cis(3π/4) = 3√2 e^(i3π/4)
```

### Products, quotients and powers

For z₁ = r₁e^(iθ₁) and z₂ = r₂e^(iθ₂):

- z₁z₂ = r₁r₂ e^(i(θ₁ + θ₂)) — multiply moduli, add arguments
- z₁/z₂ = (r₁/r₂) e^(i(θ₁ − θ₂)) — divide moduli, subtract arguments
- zⁿ = rⁿ e^(inθ) for integer n

**Worked example 11.** Find (−3 + 3i)⁴.

```
(3√2 e^(i3π/4))⁴ = (3√2)⁴ e^(i3π) = 324 e^(i3π)
3π is the same direction as π, and e^(iπ) = −1
So (−3 + 3i)⁴ = −324
```

The guide states that in examinations you will not be asked to find roots of complex numbers, so this unit stops at integer powers.

### Adding sinusoids with the same frequency

Two waves with the same frequency but different phase add to give one wave of that frequency. Represent each as a complex number: A cos(ωt + α) corresponds to Ae^(iα). Add the complex numbers, then read off the modulus (amplitude) and argument (phase).

**Worked example 12.** Two AC voltages are V₁ = 12 cos(50t) and V₂ = 5 cos(50t + π/2). Write the total as V = A cos(50t + B).

```
V₁ ↔ 12e^(i0)   = 12
V₂ ↔ 5e^(iπ/2)  = 5i
Sum = 12 + 5i
A = √(144 + 25) = 13
B = arctan(5/12) = 0.395 (3 s.f.)
V = 13 cos(50t + 0.395)
```

Your GDC can do the addition and the conversion in one step in polar mode. Write down the complex number you entered so your method is visible.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-logarithms-complex-numbers--09-adding-sinusoids.webp" width="900" height="1010" alt="Graphs of V1 = 12 cos 50t, V2 = 5 cos(50t + pi/2) and their sum 13 cos(50t + 0.395), with the same addition shown as complex numbers: 12 + 5i has modulus 13 and argument 0.395 rad." loading="lazy">
  <figcaption>Adding sinusoids of equal frequency by adding complex numbers: amplitude 13, phase 0.395.</figcaption>
</figure>


### Geometric interpretation

- Adding or subtracting complex numbers is vector addition or subtraction on the Argand diagram.
- Multiplying by re^(iθ) rotates a point anticlockwise by θ about the origin and stretches its distance from the origin by the factor r.

For example, multiplying by i = e^(iπ/2) is a rotation of π/2 anticlockwise: (2 + i) × i = −1 + 2i. Multiplying by 2e^(iπ/6) = √3 + i rotates by π/6 and doubles the modulus.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-logarithms-complex-numbers--07-polar-quadrant.webp" width="900" height="1040" alt="Argand diagram with -3 + 3i in the second quadrant, modulus 3 root 2 and argument 3 pi over 4 (pi minus the reference angle pi over 4). The calculator value -pi over 4 points into the wrong quadrant and is crossed out." loading="lazy">
  <figcaption>Finding the argument of -3 + 3i: sketch the quadrant, do not trust arctan alone.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-logarithms-complex-numbers--08-multiply-turn-stretch.webp" width="900" height="960" alt="Argand diagram with z = 2 + i. Multiplying by i turns it by pi over 2 to -1 + 2i. Multiplying by 2e^(i pi/6) = root 3 + i turns it by pi over 6 and doubles its length, giving about 2.46 + 3.73i." loading="lazy">
  <figcaption>Multiplying by e^(i theta) turns a point by theta; the modulus scales the length.</figcaption>
</figure>


## Common errors

- Writing log (x + y) = log x + log y. The law is for a product, not a sum.
- Keeping a root that makes a log argument zero or negative.
- Using S_∞ when |r| ≥ 1, or not stating that |r| < 1.
- In bouncing-ball problems, counting the first drop twice or each rebound only once.
- Giving Im(3 − 5i) as −5i. The imaginary part is −5.
- Taking arctan(b/a) as the argument without checking the quadrant (a calculator gives −π/4 for −3 + 3i, which is wrong).
- Mixing degrees and radians in exponential form. e^(iθ) needs θ in radians.
- Adding amplitudes of sinusoids directly (12 + 5 = 17) instead of adding complex numbers.

## Where to go next

Condense this into the [revision notes](/resources/ib-dp-mathematics-ai-hl-logarithms-complex-numbers-revision-notes/), then try the [practice set](/resources/ib-dp-mathematics-ai-hl-logarithms-complex-numbers-practice/). For the rest of the course, see the [AI syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/), the [AI subject guide](/resources/ib-dp-mathematics-applications-and-interpretation-subject-guide/) and [exam preparation for AI](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021. Sections AHL 1.9, 1.10, 1.11, 1.12 and 1.13.
