---
title: "IB DP Mathematics: Analysis and Approaches -- Complex numbers (HL) Revision Notes"
seoTitle: "IB Maths AA HL Complex Numbers Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Complex numbers (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.12
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-12"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-13"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-14"
description: "Condensed IB DP Maths AA HL complex numbers notes: forms, conversions, De Moivre, roots and conjugate pairs, with a quick self-test and common mark losses."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "review-pending"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
---

For full explanations and longer worked examples, start with the [complex numbers study guide](/resources/ib-dp-mathematics-aa-hl-complex-numbers/). These notes are for the final weeks.

They cover the complex numbers unit of IB Diploma Programme Mathematics: Analysis and Approaches, aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 1.12–1.14. Everything here is HL only (AHL). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 HL sessions.

When you are ready, test yourself with the [complex numbers practice questions](/resources/ib-dp-mathematics-aa-hl-complex-numbers-practice/). Tick the unit off on the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/), and find the other units on the [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/).

## Definitions (1.12)

- **i**: the number with i² = −1. Powers cycle: i, −1, −i, 1.
- **Cartesian form**: z = a + bi, a, b ∈ ℝ.
- **Re z = a**, **Im z = b**. Both are real numbers.
- **Conjugate**: z* = a − bi. Reflection of z in the real axis.
- **Modulus**: |z| = √(a² + b²). Distance from the origin.
- **Argument**: arg z, the angle from the positive real axis. These notes use −π < arg z ≤ π unless a question states another range.
- **Complex plane** (Argand diagram): z = a + bi is plotted at (a, b).
- **Equality**: a + bi = c + di means a = c **and** b = d.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-complex-numbers--01-complex-plane.webp" width="900" height="1033" alt="Argand diagram with the point z = 3 - 4i, showing Re z = 3, Im z = -4 with dashed lines, the modulus |z| = 5 as the arrow length and the argument about -0.93 radians. The conjugate 3 + 4i is the mirror image in the real axis." loading="lazy">
  <figcaption>Re, Im, modulus, argument and conjugate of z = 3 - 4i on the complex plane.</figcaption>
</figure>


## Formulas

| Result | Form |
|---|---|
| Polar form | z = r(cos θ + i sin θ) = r cis θ |
| Euler form | z = re^(iθ) |
| Polar to Cartesian | a = r cos θ, b = r sin θ |
| Modulus times conjugate | z z* = \|z\|² |
| Product | r₁ cis θ₁ × r₂ cis θ₂ = r₁r₂ cis(θ₁ + θ₂) |
| Quotient | r₁ cis θ₁ ÷ r₂ cis θ₂ = (r₁/r₂) cis(θ₁ − θ₂) |
| De Moivre | (r cis θ)ⁿ = rⁿ cis nθ |
| n-th roots | r^(1/n) cis((θ + 2kπ)/n), k = 0, 1, …, n − 1 |
| Conjugate-pair factor | (z − (a + bi))(z − (a − bi)) = z² − 2az + a² + b² |
| Equal-modulus sum | 1 + e^(iθ) = 2cos(θ/2) e^(iθ/2) |

## Method in steps

**Dividing in Cartesian form**
1. Multiply top and bottom by the conjugate of the denominator.
2. The denominator becomes c² + d², a real number.
3. Split into real and imaginary parts.

**Finding the argument**
1. Sketch the point on the Argand diagram.
2. Find the reference angle α from tan α = |b|/|a|.
3. First quadrant θ = α; second θ = π − α; third θ = −(π − α); fourth θ = −α.

**Square roots of a + bi without polar form**
1. Let (x + iy)² = a + bi.
2. Equate parts: x² − y² = a and 2xy = b.
3. Substitute y = b/(2x), solve the quadratic in x², keep x² > 0.

**Solving zⁿ = w**
1. Write w = R cis(φ + 2kπ).
2. z = R^(1/n) cis((φ + 2kπ)/n).
3. Use n consecutive values of k. Adjust each argument into the required range.
4. Convert to Cartesian only if asked.

**Proving De Moivre by induction (n ∈ ℤ⁺)**
1. Check n = 1.
2. Assume true for n = k.
3. Multiply (cos kθ + i sin kθ) by (cos θ + i sin θ).
4. Group real and imaginary parts and use the compound angle identities.
5. Write the conclusion: true for n = 1, and true for k implies true for k + 1, so true for all n ∈ ℤ⁺.

**Multiple-angle identities**
1. Write cos nθ + i sin nθ = (c + is)ⁿ by De Moivre.
2. Expand with the binomial theorem, using i² = −1.
3. Equate real parts (for cos nθ) or imaginary parts (for sin nθ).
4. Replace s² with 1 − c², or c² with 1 − s², as needed.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-complex-numbers--03-argument-quadrant.webp" width="900" height="912" alt="Argand diagram with z = -2 + 2i in the second quadrant. The reference angle is pi/4 and the argument is 3pi/4. A dashed ray shows that arctan(b/a) gives -pi/4, which points into the wrong quadrant." loading="lazy">
  <figcaption>Sketch the point first: arctan(b/a) alone gives the wrong quadrant when a is negative.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-complex-numbers--07-de-moivre-spiral.webp" width="900" height="1066" alt="Argand diagram with a spiral through (1 - i)^k for k = 0 to 10. Each step multiplies the modulus by root 2 and turns clockwise by pi/4. After 10 steps the point is -32i." loading="lazy">
  <figcaption>De Moivre: each power multiplies the modulus by r and adds theta to the argument.</figcaption>
</figure>


## Small worked reminders

**Product in polar form.** 4 cis(π/3) × 2 cis(π/12) = 8 cis(5π/12).

**Quotient.** 4 cis(π/3) ÷ 2 cis(π/12) = 2 cis(π/4) = √2 + √2 i.

**Power.** (1 + √3 i)⁶ = (2 cis(π/3))⁶ = 64 cis 2π = 64.

**Conjugate pair.** A real cubic has roots 3 and 1 + 2i. Then 1 − 2i is also a root, the pair gives z² − 2z + 5, and the cubic is (z² − 2z + 5)(z − 3) = z³ − 5z² + 11z − 15.

**Roots.** z³ = 8i gives z = 2 cis(π/6), 2 cis(5π/6), 2 cis(−π/2), that is √3 + i, −√3 + i, −2i.

**Rational exponent.** The values of 8^(2/3) are 4 cis(2kπ/3) for k = 0, 1, 2: 4 and −2 ± 2√3 i.

**Multiple angle.** Real part of (c + is)³ gives cos 3θ = 4cos³θ − 3cos θ.

**Equation with a conjugate.** To solve z + 3z* = 8 + 4i, let z = a + bi. Then a + bi + 3a − 3bi = 4a − 2bi. Equate parts: 4a = 8 and −2b = 4, so z = 2 − 2i. Always substitute a + bi when z and z* appear together.

**Square root by equating parts.** (x + iy)² = −5 + 12i gives x² − y² = −5 and xy = 6. Then x⁴ + 5x² − 36 = 0, so x² = 4 and the roots are ±(2 + 3i).

**Exact value from a product.** (1 + i)(√3 + i) = (√3 − 1) + (√3 + 1)i in Cartesian form, and 2√2 cis(5π/12) in polar form. Equating real parts gives cos(5π/12) = (√6 − √2)/4.

**Sum of equal-modulus numbers.** 1 + cis(2π/3) = 2cos(π/3) cis(π/3) = cis(π/3) = 1/2 + (√3/2)i. Check in Cartesian form: 1 + (−1/2 + (√3/2)i) gives the same.

## Geometry on the Argand diagram

- The roots of zⁿ = w are the vertices of a regular n-gon centred at the origin. Area questions use n × ½r² sin(2π/n).
- Points z and iz, with the origin, form a right-angled isosceles triangle. Adding z + iz completes a square.
- |z − w| is the distance between the points z and w.
- Conjugate pairs are symmetric about the real axis, so the roots of a real polynomial have a mirror-image pattern.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-complex-numbers--02-adding-parallelogram.webp" width="900" height="960" alt="Argand diagram with z = 3 - 4i and w = 1 + 2i as arrows from the origin. Dashed copies complete a parallelogram whose fourth corner is z + w = 4 - 2i." loading="lazy">
  <figcaption>The sum of two complex numbers is the fourth corner of a parallelogram, like vector addition.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-complex-numbers--05-conjugate-roots.webp" width="900" height="1018" alt="Argand diagram with the roots of z^3 - 5z^2 + 11z - 15. The roots 1 + 2i and 1 - 2i are mirror images in the real axis and 3 lies on the real axis. The pair has sum 2 and product 5, giving the factor z^2 - 2z + 5." loading="lazy">
  <figcaption>Roots of a real polynomial come in mirror-image pairs, each pair giving a real quadratic factor.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-complex-numbers--06-cube-roots-8i.webp" width="900" height="940" alt="Argand diagram with a circle of radius 2. The three roots of z^3 = 8i, root3 + i, -root3 + i and -2i, are 2pi/3 apart and form an equilateral triangle centred on the origin." loading="lazy">
  <figcaption>The n-th roots of a complex number are equally spaced on a circle and form a regular n-gon.</figcaption>
</figure>


## Must-know distinctions

- **Modulus vs argument.** The modulus is a length and is never negative. The argument is an angle and has a range.
- **Im z vs bi.** Im(2 − 7i) = −7, not −7i.
- **Conjugate vs negative.** For z = a + bi, z* = a − bi but −z = −a − bi.
- **Product vs sum in polar form.** Products and quotients are easy in polar or Euler form. Sums are easy in Cartesian form. Convert to suit the operation.
- **Multiply vs divide geometrically.** Multiplying by r cis θ scales by r and rotates anticlockwise by θ. Dividing scales by 1/r and rotates clockwise by θ. Multiplying by i is a rotation of π/2 anticlockwise.
- **Adding geometrically.** z₁ + z₂ is the fourth vertex of the parallelogram on the origin, z₁ and z₂.
- **Real coefficients vs complex coefficients.** Conjugate pairs are guaranteed only when every coefficient is real.
- **n-th roots vs a single root.** zⁿ = w has exactly n roots (w ≠ 0), equally spaced by 2π/n on a circle of radius |w|^(1/n).
- **Exact vs 3 s.f.** Calculator-free answers are exact (surds, multiples of π). Calculator-allowed answers are exact or given to 3 significant figures.

## Quick self-test

1. Simplify i²³.
2. Find |3 + 4i| and arg(3 + 4i), giving the argument to 3 s.f.
3. Find (1 + 2i)* × (1 + 2i).
4. Write 6 cis(2π/3) in Cartesian form.
5. Write 1 − i in Euler form.
6. Given z = 4 cis(π/3) and w = 2 cis(π/12), find z/w in Cartesian form.
7. Solve z² − 6z + 13 = 0.
8. Find (1 + i)⁶ in Cartesian form.
9. Find the three cube roots of 1 in Cartesian form.
10. A cubic with real coefficients and leading coefficient 1 has roots 1 and 2i. Write it in expanded form.
11. Find |(2 + i)⁴| without expanding.
12. Describe the geometric effect of multiplying a complex number by i.

### Answers

1. i²³ = i²⁰ × i³ = **−i**.
2. **|3 + 4i| = 5**, **arg = 0.927** (radians).
3. (1 − 2i)(1 + 2i) = 1 + 4 = **5**.
4. 6 cos(2π/3) = −3 and 6 sin(2π/3) = 3√3, so **−3 + 3√3 i**.
5. |1 − i| = √2 and arg(1 − i) = −π/4, so **√2 e^(−iπ/4)**.
6. z/w = 2 cis(π/4) = **√2 + √2 i**.
7. z = (6 ± √(36 − 52))/2 = **3 ± 2i**.
8. (√2 cis(π/4))⁶ = 8 cis(3π/2) = **−8i**.
9. cis(2kπ/3) for k = 0, 1, 2: **1, −1/2 + (√3/2)i, −1/2 − (√3/2)i**.
10. −2i is also a root, so (z − 1)(z² + 4) = **z³ − z² + 4z − 4**.
11. |2 + i|⁴ = (√5)⁴ = **25**.
12. **A rotation of π/2 anticlockwise about the origin** (the modulus is unchanged).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-complex-numbers--04-multiply-scale-turn.webp" width="900" height="877" alt="Argand diagram with z1 = 6 cis(5pi/6) and z2 = 2 cis(pi/3). The product 12 cis(7pi/6) is z1 enlarged by factor 2 and turned anticlockwise by pi/3. It equals 12 cis(-5pi/6) in the range -pi &lt; theta &lt;= pi." loading="lazy">
  <figcaption>Multiplying by r cis theta scales by r and turns anticlockwise by theta.</figcaption>
</figure>


## Where marks are usually lost

- Finding the argument with arctan(b/a) and not checking the quadrant, especially for points in the second and third quadrants.
- Giving an argument outside the range the question asks for, such as 7π/6 when −π < θ ≤ π is required.
- On a calculator-free question, giving a decimal such as 1.73 instead of √3, which loses the accuracy mark.
- When solving zⁿ = w, writing only the principal root, or not dividing 2kπ by n.
- Taking the n-th root of the argument but leaving the modulus as R instead of R^(1/n).
- Using the conjugate-root rule when a coefficient of the polynomial is complex.
- In the induction proof, writing "assume true for n" instead of "for n = k", or leaving out the concluding sentence. Both cost reasoning marks.
- In a "show that" multiple-angle identity, skipping the binomial expansion or the substitution s² = 1 − c². Every step must be visible.
- Leaving a quotient with i in the denominator, which is not the requested form a + bi.

## Frequently asked questions

**What is the imaginary part of a complex number?**
For z = a + bi, Im z = b, which is a real number. So Im(2 − 7i) = −7, not −7i.

**How do you divide complex numbers in Cartesian form?**
Multiply the top and bottom by the conjugate of the denominator. The denominator becomes c² + d², a real number, and you can split the result into real and imaginary parts.

**How do you solve an equation with z and z* in it?**
Substitute z = a + bi and z* = a − bi, collect terms, then equate the real parts and the imaginary parts to get two equations for a and b.

**What shape do the roots of zⁿ = w make on an Argand diagram?**
They are the vertices of a regular n-gon centred at the origin, all with the same modulus and spaced 2π/n apart. Area questions can use n × ½r² sin(2π/n).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
