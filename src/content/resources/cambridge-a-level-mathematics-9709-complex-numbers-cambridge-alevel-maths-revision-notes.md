---
title: "Cambridge A Level Mathematics (9709): Complex numbers (Pure Mathematics 3) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.9
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "complex-numbers-cambridge-alevel-maths"
description: "Revision notes for Cambridge 9709 Paper 3 section 3.9 Complex numbers: arithmetic, modulus and argument, conjugate roots, square roots, loci and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section **3.9 Complex numbers** of Pure Mathematics 3 (Paper 3) in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. For worked examples see the [3.9 study guide](/resources/cambridge-a-level-mathematics-9709-complex-numbers-cambridge-alevel-maths/); for marked questions use the [3.9 practice questions](/resources/cambridge-a-level-mathematics-9709-complex-numbers-cambridge-alevel-maths-practice/).

## Definitions and notation

- i² = −1. z = x + iy with Re z = x and Im z = y.
- Conjugate z\* = x − iy. zz\* = x² + y² = |z|², which is real.
- |z| = √(x² + y²). arg z = θ with −π < θ ≤ π (or 0 ≤ θ < 2π if more convenient).
- z = r(cos θ + i sin θ) = re^(iθ).
- a + ib = c + id ⇔ a = c and b = d.

## Arithmetic

```text
(a + ib)(c + id) = (ac − bd) + i(ad + bc)
(a + ib)/(c + id) = (a + ib)(c − id)/(c² + d²)
|z₁z₂| = |z₁||z₂|       arg(z₁z₂) = arg z₁ + arg z₂
|z₁/z₂| = |z₁|/|z₂|     arg(z₁/z₂) = arg z₁ − arg z₂
```

After adding arguments, adjust by ±2π to bring the answer into the range required.

## Argument by quadrant

| Point (x, y) | arg z, with α = tan⁻¹\|y/x\| |
|---|---|
| x > 0, y ≥ 0 | α |
| x < 0, y ≥ 0 | π − α |
| x < 0, y < 0 | −(π − α) |
| x > 0, y < 0 | −α |
| x = 0, y > 0 | π/2 |

## Polynomials with real coefficients

- Non-real roots come in conjugate pairs.
- A pair a ± bi gives the factor z² − 2az + (a² + b²).
- Cubic with one complex root given: one more complex root, plus one real root.
- Quartic with one complex root given: one quadratic factor known, divide for the other.
- For a quadratic z² + pz + q with root a + bi: p = −(sum of roots) = −2a and q = product = a² + b².

## Square roots routine

(x + iy)² = a + ib gives x² − y² = a and 2xy = b. Substitute y = b/(2x), get a quadratic in x², take the positive value (x is real), find y. There are always two roots, negatives of each other. A quick check: x² + y² must equal √(a² + b²).

## Geometry on the Argand diagram

| Operation | Effect |
|---|---|
| z → z\* | Reflection in the real axis |
| z → z + w | Translation by w |
| z → iz | Rotation π/2 anticlockwise about O |
| z → re^(iα)z | Rotation α about O and enlargement scale factor r |

| Locus | Shape |
|---|---|
| \|z − a\| = k | Circle, centre a, radius k |
| \|z − a\| ≤ k | Disc, boundary included (solid) |
| \|z − a\| = \|z − b\| | Perpendicular bisector of a and b |
| \|z − a\| < \|z − b\| | Half-plane on the side of a |
| arg(z − a) = α | Half-line from a, a excluded |

Greatest or least |z| on a circle: |OC| ± k, along the line through O and the centre C. Greatest or least arg z on a circle: from the tangents through O.

## Key terms

| Term | Meaning |
|---|---|
| Real part, imaginary part | x and y in z = x + iy |
| Modulus | Distance of z from O on the Argand diagram |
| Argument | Angle from the positive real axis to z |
| Conjugate | z\* = x − iy, the reflection of z in the real axis |
| Argand diagram | Plane with real horizontal and imaginary vertical axes |
| Polar form | r(cos θ + i sin θ) or re^(iθ) |
| Locus | The set of points satisfying a condition |

## Exam traps

- tan⁻¹(y/x) alone gives the wrong argument in the second and third quadrants.
- The conjugate-pair rule needs real coefficients.
- arg z must be in the stated range; 5π/3 is −π/3 in −π < θ ≤ π.
- Full working is required for multiplication, division and square roots.
- x² = negative is impossible for real x: reject it in words.
- arg(z − a) = α is a half-line, not a line, and starts at a, not at O.
- Use broken lines for strict inequalities on a sketch.

## Self-test

1. Find (2 + 3i)(4 − i).
2. Find (5 + i)/(1 + i) in the form x + iy.
3. Find |−5 + 12i|.
4. Find arg(−1 + i√3).
5. Write z\* for z = −3 + 7i and find zz\*.
6. Solve z² − 6z + 10 = 0.
7. 3 − i is a root of a real cubic with real root 2. Write the cubic in expanded form with leading coefficient 1.
8. Find the square roots of 3 + 4i.
9. |z₁| = 3, arg z₁ = π/3, |z₂| = 2, arg z₂ = 5π/6. Find |z₁z₂| and arg(z₁z₂) in −π < θ ≤ π.
10. Describe the locus |z + 2 − i| = 3.
11. Describe the locus |z − 4| = |z + 2i|.
12. What is the least value of |z| when |z − 3 − 4i| = 2?

**Answers**

1. 8 − 2i + 12i − 3i² = **11 + 10i**.
2. (5 + i)(1 − i)/2 = (5 − 5i + i + 1)/2 = **3 − 2i**.
3. √(25 + 144) = **13**.
4. Second quadrant, α = π/3: **2π/3**.
5. z\* = −3 − 7i; zz\* = 9 + 49 = **58**.
6. z = (6 ± √(36 − 40))/2 = **3 ± i**.
7. (z² − 6z + 10)(z − 2) = **z³ − 8z² + 22z − 20**.
8. x² − y² = 3, xy = 2: x² = 4, so **2 + i and −2 − i**.
9. |z₁z₂| = **6**; arg = π/3 + 5π/6 = 7π/6, which is **−5π/6** in range.
10. Circle, centre **−2 + i**, radius **3**.
11. Perpendicular bisector of the points 4 and −2i.
12. |OC| = 5, so the least value is 5 − 2 = **3**.

## Links

- Full explanations: [3.9 study guide](/resources/cambridge-a-level-mathematics-9709-complex-numbers-cambridge-alevel-maths/)
- Marked questions: [3.9 practice questions](/resources/cambridge-a-level-mathematics-9709-complex-numbers-cambridge-alevel-maths-practice/)
- Paper 3 summary: [Pure Mathematics 3 revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/)
