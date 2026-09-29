---
title: "IB DP Mathematics: Applications and Interpretation -- Laws of logarithms, rational exponents, infinite series and complex numbers (HL) Revision Notes"
seoTitle: "IB Maths AI HL Logarithms and Complex Numbers Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed IB Maths AI HL revision notes on logarithm laws, rational exponents, sums to infinity and complex numbers, with a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

These are condensed notes for the final weeks. For full explanations and longer worked examples, use the [study guide for this unit](/resources/ib-dp-mathematics-ai-hl-logarithms-complex-numbers/).

The notes cover IB Diploma Programme Mathematics: Applications and Interpretation, aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 1.9–1.13. Everything here is HL only (AHL). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 HL sessions.

Test yourself afterwards with the [practice questions](/resources/ib-dp-mathematics-ai-hl-logarithms-complex-numbers-practice/). The [course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) list every AI syllabus section.

## Definitions

- **log_a x** is the power you raise a to in order to get x. In IB exams for this unit, a is 10 (written log) or e (written ln).
- **Rational exponent**: a^(m/n) = (ⁿ√a)ᵐ, and a^(−p) = 1/aᵖ.
- **Sum to infinity** S_∞: the limit of S_n as n → ∞. It exists for a geometric series only when |r| < 1.
- **i**: the number with i² = −1.
- **Cartesian form**: z = a + bi. Re(z) = a, Im(z) = b.
- **Conjugate**: z* = a − bi (reflection in the real axis).
- **Modulus**: |z| = √(a² + b²).
- **Argument**: arg z = θ, the angle from the positive real axis. These notes use radians, −π < θ ≤ π.
- **Polar form**: z = r(cos θ + i sin θ) = r cis θ.
- **Exponential (Euler) form**: z = re^(iθ).

## Formulas

| Result | Formula | Condition |
|---|---|---|
| Product law | log_a xy = log_a x + log_a y | a, x, y > 0 |
| Quotient law | log_a (x/y) = log_a x − log_a y | a, x, y > 0 |
| Power law | log_a xᵐ = m log_a x | a, x > 0 |
| Index laws | aᵖa^q = a^(p+q), aᵖ ÷ a^q = a^(p−q), (aᵖ)^q = a^(pq) | p, q rational |
| Sum to infinity | S_∞ = u₁ / (1 − r) | \|r\| < 1 |
| Modulus | \|z\| = √(a² + b²) | |
| Cartesian from polar | a = r cos θ, b = r sin θ | |
| Product | r₁e^(iθ₁) × r₂e^(iθ₂) = r₁r₂e^(i(θ₁+θ₂)) | |
| Quotient | r₁e^(iθ₁) ÷ r₂e^(iθ₂) = (r₁/r₂)e^(i(θ₁−θ₂)) | r₂ ≠ 0 |
| Integer power | (re^(iθ))ⁿ = rⁿe^(inθ) | n an integer |
| Quadratic roots | x = (−b ± √(b² − 4ac)) / 2a | complex when b² − 4ac < 0 |

## Method in steps

**Solving a log equation**

1. Use the laws to collect each side into a single log.
2. Remove the log: log A = k gives A = 10ᵏ; ln A = k gives A = eᵏ; log A = log B gives A = B.
3. Solve the resulting equation.
4. Substitute every root back. Reject any root that makes a log argument zero or negative.

**Sum to infinity**

1. Find u₁ and r = u₂ / u₁.
2. State |r| < 1 (or say there is no sum if |r| ≥ 1).
3. Apply S_∞ = u₁ / (1 − r).

**Bouncing ball** (dropped from h, rebounds to fraction r)

Total distance = h + 2 × (hr) / (1 − r). The 2 counts each rise and its fall.

**Dividing complex numbers by hand**

1. Multiply top and bottom by the conjugate of the denominator.
2. Expand, replacing i² with −1.
3. Split into a + bi.

**Cartesian to polar or exponential**

1. Plot the point, note the quadrant.
2. r = √(a² + b²).
3. Reference angle α = arctan |b/a|.
4. Adjust: quadrant 1 θ = α; quadrant 2 θ = π − α; quadrant 3 θ = −(π − α); quadrant 4 θ = −α.

**Adding sinusoids of the same frequency**

1. Write A cos(ωt + α) as the complex number Ae^(iα).
2. Add the complex numbers (GDC or by hand in Cartesian form).
3. The modulus is the new amplitude and the argument is the new phase.
4. Answer in the form V = R cos(ωt + β).

## Small worked reminders

- 243^(2/5) → fifth root of 243 is 3, then 3² = 9.
- 2 log 5 + log 8 − log 2 = log (25 × 8 ÷ 2) = log 100 = 2.
- (4x^(1/2))³ ÷ 2x = 64x^(3/2) ÷ 2x = 32x^(1/2).
- 0.272727… = 0.27 / (1 − 0.01) = 3/11.
- 2e^(iπ/6) = 2(cos π/6 + i sin π/6) = √3 + i.
- 2 cis(π/3) × 3 cis(π/6) = 6 cis(π/2) = 6i; 2 cis(π/3) ÷ 3 cis(π/6) = (2/3) cis(π/6).
- (2 + i) × i = −1 + 2i: a rotation of π/2 anticlockwise about the origin.

## Using your GDC

- All three HL papers require technology, but the guide says sums, differences, products and quotients of complex numbers are done "by hand and with technology". Practise both, and show the algebra when a question says "show" or "by hand".
- The guide says powers of complex numbers in Cartesian form are calculated with technology. Switch to complex mode (a + bi) and type the power directly, but write down the expression you entered.
- For conversions, set the GDC to radians before you ask for an argument. Check the answer against a quick sketch of the point.
- For sums to infinity, the GDC can confirm S_n for a large n is close to your S_∞. Treat this as a check, not the method.
- For log equations, a graph of each side and the intersection gives a check on your algebraic root. It also shows you whether a rejected root was genuinely outside the domain.

## How the subtopics connect

- **Logs and series.** Questions such as "after how many bounces is the height below 1 cm?" need rⁿ < k, then logs to solve for n. Dividing by log r (negative when 0 < r < 1) reverses the inequality.
- **Rational exponents and logs.** log √x = log x^(1/2) = ½ log x. Rewrite roots as powers before using the power law.
- **Quadratics and the complex plane.** A negative discriminant means the parabola misses the x-axis, and the roots are a conjugate pair. On the Argand diagram they sit directly above and below the real axis at the vertex's x-coordinate.
- **Exponential form and sinusoids.** A cos(ωt + α) matches Ae^(iα). Adding waves of the same frequency becomes adding complex numbers.
- **Multiplication and geometry.** Multiplying by re^(iθ) rotates by θ anticlockwise about the origin and stretches by r. Multiplying by i is a quarter-turn.

## Must-know distinctions

- **log (xy) vs log x × log y.** Only the first splits into a sum.
- **Imaginary part vs imaginary term.** Im(4 − 7i) = −7, not −7i.
- **Modulus vs argument.** Modulus is a length (never negative). Argument is an angle (check the quadrant).
- **Polar vs exponential.** Same r and θ, different notation: r cis θ = re^(iθ).
- **Cartesian vs polar for arithmetic.** Add and subtract in Cartesian form. Multiply, divide and raise to powers in polar or exponential form.
- **Geometric meaning.** Addition is vector addition. Multiplying by re^(iθ) is a rotation by θ with a stretch of factor r.
- **Powers vs roots.** You must find integer powers. The guide says you will not be asked to find roots of complex numbers in examinations.
- **Converges vs diverges.** A geometric series with r = −0.9 has a sum to infinity; one with r = 1.1 or r = −1 does not.

## Quick self-test

1. Evaluate 64^(−2/3).
2. Simplify x^(3/4) ÷ x^(1/4).
3. Evaluate log 50 + log 2.
4. Simplify ln (e³ / √e).
5. Find the sum to infinity of 12 + 4 + 4/3 + …
6. For which values of x does 1 + 2x + 4x² + … have a sum to infinity?
7. Expand (2 − i)².
8. Write (3 + i)/(1 − i) in the form a + bi.
9. Solve x² + 2x + 10 = 0.
10. Find the modulus and argument of 1 − i.
11. Write 2e^(iπ/4) × 3e^(iπ/12) in the form a + bi.
12. Find (√2 e^(iπ/8))⁸.

### Answers

1. 1 / (cube root of 64)² = 1/4² = **1/16**.
2. x^(3/4 − 1/4) = x^(1/2) = **√x**.
3. log 100 = **2**.
4. ln e^(3 − 1/2) = **5/2**.
5. r = 1/3, so S_∞ = 12 / (2/3) = **18**.
6. r = 2x, need |2x| < 1, so **−1/2 < x < 1/2**.
7. 4 − 4i + i² = **3 − 4i**.
8. (3 + i)(1 + i)/2 = (3 + 4i − 1)/2 = **1 + 2i**.
9. x = (−2 ± √(−36))/2 = **−1 ± 3i**.
10. |z| = **√2**, arg z = **−π/4** (fourth quadrant).
11. 6e^(iπ/3) = 6(1/2 + (√3/2)i) = **3 + 3√3 i**.
12. (√2)⁸ e^(iπ) = 16 × (−1) = **−16**.

## Where marks are usually lost

- Splitting log (x + 3) as log x + log 3.
- Solving a log equation correctly but leaving in a root that makes a log argument negative.
- Evaluating 81^(3/4) by cubing first, then losing accuracy or making an arithmetic slip, instead of taking the fourth root first.
- Quoting S_∞ = u₁/(1 − r) without stating |r| < 1 when a question asks you to justify that the sum exists.
- Bouncing-ball totals that leave out the factor 2 for the rebounds, or include the first drop twice.
- Giving an argument in the wrong quadrant by reading arctan(b/a) straight off the calculator.
- Leaving a quotient as a fraction with i in the denominator when the question asks for a + bi.
- Writing an exponential form with the angle in degrees.
- Adding sinusoid amplitudes directly instead of adding the complex numbers.
- Giving only a GDC answer with no complex number written down, so no method mark can be awarded if the answer is wrong.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021. Sections AHL 1.9 to 1.13.
