---
title: "OxfordAQA International AS and A-level Mathematics: Transformations and rational functions (9660)"
seoTitle: "OxfordAQA A-level Maths Rational Functions Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Transformations, rational functions, algebraic division and partial fractions"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 188
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-algebra-and-functions-oxfordaqa-alevel-maths"
description: "Study guide to combined transformations, the Factor Theorem, algebraic division and partial fractions for OxfordAQA International A-level Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide follows the OxfordAQA International AS and A-level Mathematics specification, Version 5.2. It covers the second half of section P2.1 (Algebra and functions): combinations of transformations of y = f(x), rational functions with the Factor and Remainder Theorems for divisors (ax + b), simplifying rational expressions, algebraic division, and partial fractions. The specification places this content in International A-level (A2) Unit P2 (Pure Maths). It is not examined at International AS.

Related pages: the [OxfordAQA Mathematics hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/), the [revision notes](/resources/oxfordaqa-a-level-mathematics-transformations-rational-functions-algebraic-division-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-mathematics-transformations-rational-functions-algebraic-division-practice/) for this unit. The single transformations and division by (x − a) that you meet first are in the [Unit P1 polynomials guide](/resources/oxfordaqa-a-level-mathematics-polynomials-factor-theorem-graph-sketching-and/). To find your weak spots first, take the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Spec area | What you must be able to do |
|---|---|
| P2.1 | Combine the transformations y = af(x), y = f(x) + a, y = f(x + a) and y = f(ax), for example e^x to e^(2x − 1), ln x to 2 ln(x − 1), sec x to 3 sec 2x |
| P2.1 | Work with rational functions, using the Factor Theorem and Remainder Theorem for divisors of the form (ax + b) |
| P2.1 | Simplify rational expressions by factorising and cancelling |
| P2.1 | Divide algebraically by any method: inspection, equating coefficients, formal division, or a given identity |
| P2.1 | Write fractions in partial fractions, with denominators no more complicated than repeated linear terms |

Irreducible quadratic factors are not tested. Domain, range, composite and inverse functions and the modulus function are separate parts of P2.1 and are not taught here.

## Combining transformations

Each single transformation changes the equation in one place.

| Change to y = f(x) | Effect on the graph |
|---|---|
| y = af(x) | stretch, scale factor a, parallel to the y-axis |
| y = f(x) + a | translation by a in the y direction |
| y = f(x + a) | translation by −a in the x direction |
| y = f(ax) | stretch, scale factor 1/a, parallel to the x-axis |

For a negative multiplier the same stretch is followed by a reflection: in the x-axis for −f(x), in the y-axis for f(−x).

**Order matters when two transformations act on the same axis.** Build the new equation by applying each change to the equation you already have. Starting with y = f(x):

```
stretch y by 3, then translate up 2:   y = 3f(x) + 2
translate up 2, then stretch y by 3:   y = 3(f(x) + 2) = 3f(x) + 6
```

A y-direction change and an x-direction change never interfere with each other.

**Example 1.** Describe transformations taking y = e^x to y = e^(2x − 1).

Replace x by x − 1 first, which gives e^(x − 1), a translation by 1 in the positive x direction. Then replace x by 2x in that equation: e^(2x − 1). That is a stretch with scale factor 1/2 parallel to the x-axis. So the answer is a translation of (1, 0), then a stretch, scale factor 1/2, parallel to the x-axis.

Check by writing 2x − 1 = 2(x − 1/2). This gives the other order: stretch first, then translate by 1/2. Both descriptions are correct. The graph has asymptote y = 0 and meets the y-axis at (0, e^(−1)).

**Example 2.** Describe transformations taking y = ln x to y = 2 ln(x − 1), and sketch the result.

Translate by 1 in the positive x direction (y = ln(x − 1)), then stretch with scale factor 2 parallel to the y-axis. The asymptote x = 0 moves to x = 1. The point (1, 0) moves to (2, 0), which is the x-intercept. When x = e + 1, y = 2 ln e = 2. The curve exists only for x > 1.

**Example 3.** Describe the graph of y = 3 sec 2x.

y = sec x is 1/cos x, so it has vertical asymptotes wherever cos x = 0 and never takes values between −1 and 1. Replacing x by 2x gives a stretch, scale factor 1/2, parallel to the x-axis. The period becomes π and the asymptotes are at x = π/4, 3π/4, and so on. The factor 3 is a stretch, scale factor 3, parallel to the y-axis. The turning points are now at y = 3 and y = −3, and the graph has no points with −3 < y < 3. At x = 0, y = 3.

**Example 4 (tracking a point).** The curve y = f(x) has a maximum at (2, 5) and passes through (−1, 0). Find the images of these points on y = 4 − 2f(3x − 6).

Write 3x − 6 = 3(x − 2). Solve the inside for the old x-value: 3x − 6 = 2 gives x = 8/3, and 3x − 6 = −1 gives x = 5/3. Now apply the outside: 4 − 2 × 5 = −6 and 4 − 2 × 0 = 4. The images are (8/3, −6) and (5/3, 4). The −2 includes a reflection in the x-axis, so the maximum becomes a **minimum** at (8/3, −6).

## Factor Theorem and Remainder Theorem with (ax + b)

For a polynomial f(x) and a divisor (ax + b):

- Remainder Theorem: the remainder on dividing f(x) by (ax + b) is f(−b/a).
- Factor Theorem: (ax + b) is a factor of f(x) if and only if f(−b/a) = 0.

A **rational function** is a polynomial divided by a polynomial, p(x)/q(x). It is not defined where q(x) = 0.

**Example 5.** Show that (3x + 1) is a factor of g(x) = 3x³ + 4x² − 17x − 6, then solve g(x) = 0.

```
g(−1/3) = 3(−1/27) + 4(1/9) + 17/3 − 6
        = −1/9 + 4/9 + 51/9 − 54/9 = 0
```

So (3x + 1) is a factor. Dividing gives g(x) = (3x + 1)(x² + x − 6) = (3x + 1)(x − 2)(x + 3). The roots are x = −1/3, 2 and −3.

**Example 6 (finding constants).** f(x) = 2x³ + px² + qx − 6. Given that (2x − 3) is a factor and that the remainder on division by (x + 1) is −5, find p and q.

```
f(3/2) = 0:  27/4 + 9p/4 + 3q/2 − 6 = 0   →   3p + 2q = −1
f(−1) = −5:  −2 + p − q − 6 = −5          →   p − q = 3
```

Adding 2 × (second) to the first gives 5p = 5, so p = 1 and q = −2. Then f(x) = (2x − 3)(x² + 2x + 2). The quadratic has discriminant 4 − 8 = −4, so there are no more real linear factors.

## Simplifying rational expressions

Factorise the numerator and the denominator completely, then cancel common factors. Never cancel terms that are added.

**Example 7.** Simplify (3x³ + 4x² − 17x − 6)/(x² − 9).

The numerator is (3x + 1)(x − 2)(x + 3) from Example 5, and x² − 9 = (x − 3)(x + 3). Cancelling (x + 3):

```
(3x + 1)(x − 2)/(x − 3)      (x ≠ 3, x ≠ −3)
```

**Example 8.** Simplify (2x² + 5x − 3)/(4x² − 1). This is (2x − 1)(x + 3)/((2x − 1)(2x + 1)) = (x + 3)/(2x + 1).

**Example 9.** Write 3/(x − 2) − 4/(x² − 4) as one fraction. Use the common denominator (x − 2)(x + 2):

```
[3(x + 2) − 4]/((x − 2)(x + 2)) = (3x + 2)/(x² − 4)
```

## Algebraic division

Any correct method is accepted. Whichever you use, the aim is the identity

```
f(x) = (divisor) × (quotient) + (remainder)
```

**By inspection** (linear over linear). Make the numerator contain the divisor: 5x + 9 = 5(x + 2) − 1, so (5x + 9)/(x + 2) = 5 − 1/(x + 2).

**By equating coefficients.** Divide 4x³ − 7x² + 2x − 9 by (x − 2). The quotient is quadratic, so write 4x³ − 7x² + 2x − 9 = (x − 2)(ax² + bx + c) + d. Matching x³: a = 4. Matching x²: b − 2a = −7, so b = 1. Matching x: c − 2b = 2, so c = 4. Matching constants: −2c + d = −9, so d = −1. The result is 4x² + x + 4 with remainder −1.

**By formal division.** Divide 6x³ − 5x² − 14x + 9 by (2x − 3).

```
            3x² + 2x − 4
         ┌───────────────────────
2x − 3   │ 6x³ − 5x² − 14x + 9
           6x³ − 9x²
           ─────────────
                 4x² − 14x
                 4x² −  6x
                 ─────────
                       −8x + 9
                       −8x + 12
                       ────────
                            −3
```

So (6x³ − 5x² − 14x + 9)/(2x − 3) = 3x² + 2x − 4 − 3/(2x − 3). The remainder agrees with the Remainder Theorem: the polynomial at x = 3/2 is −3.

**Using a given identity.** The specification shows this form for a fraction whose numerator and denominator have the same degree. Show that 5x²/((x + 2)(x − 3)) ≡ A + (Bx + C)/((x + 2)(x − 3)) and find A, B and C.

Multiply through: 5x² ≡ A(x + 2)(x − 3) + Bx + C = A(x² − x − 6) + Bx + C. Matching x²: A = 5. Matching x: 0 = −A + B, so B = 5. Matching constants: 0 = −6A + C, so C = 30. The remainder part is (5x + 30)/((x + 2)(x − 3)).

## Partial fractions

A fraction with a factorised denominator can be written as a sum of simpler fractions. The setup depends on the denominator.

| Denominator contains | Partial fraction form |
|---|---|
| distinct linear factors (ax + b)(cx + d) | A/(ax + b) + B/(cx + d) |
| a repeated factor (ax + b)² | A/(ax + b) + B/(ax + b)² |
| numerator degree ≥ denominator degree | divide first, then split the remainder |

**Method:** (1) check the degree, (2) write the form with unknowns, (3) multiply through by the denominator, (4) substitute values that make factors zero, then equate coefficients for what is left, (5) check with a spare value of x.

**Example 10 (distinct factors).** Express (17x − 1)/((3x − 1)(x + 2)) in partial fractions.

Write 17x − 1 ≡ A(x + 2) + B(3x − 1). Put x = 1/3: 14/3 = 7A/3, so A = 2. Put x = −2: −35 = −7B, so B = 5. The result is 2/(3x − 1) + 5/(x + 2).

**Example 11 (repeated factor).** Express (5x² − 22x + 3)/((3x + 1)(x − 2)²) in partial fractions.

Write 5x² − 22x + 3 ≡ A(x − 2)² + B(3x + 1)(x − 2) + C(3x + 1). Put x = 2: 20 − 44 + 3 = −21 = 7C, so C = −3. Put x = −1/3: 5/9 + 22/3 + 3 = 98/9 = A(49/9), so A = 2. Compare x²: 5 = A + 3B, so B = 1. The result is 2/(3x + 1) + 1/(x − 2) − 3/(x − 2)².

**Example 12 (improper fraction).** Express (x³ + 2x² − 4x + 7)/((x − 2)(x + 3)) in partial fractions.

The numerator has degree 3 and the denominator degree 2, so divide first. The denominator expands to x² + x − 6, and the division gives x + 1 with remainder x + 13. So the fraction is x + 1 + (x + 13)/((x − 2)(x + 3)). Splitting the remainder: put x = 2, 15 = 5A, so A = 3. Put x = −3, 10 = −5B, so B = −2. The result is x + 1 + 3/(x − 2) − 2/(x + 3).

Irreducible quadratic factors will not be tested, so you will not need a Bx + C numerator over a quadratic denominator.

## Common errors

- Writing y = f(2x − 1) as "translate by 1, stretch by 2". The stretch factor on x is 1/2, and the translation is 1 or 1/2 depending on the order you describe.
- Reading f(x + a) as a move to the right.
- Using f(b/a) instead of f(−b/a) in the Factor Theorem.
- Cancelling the x² in (x² + 3)/x² or any term that is not a common factor.
- Starting partial fractions on an improper fraction instead of dividing first.
- Using only A/(x − 2) for a repeated factor. The squared term B/(x − 2)² is required.
- Dropping a sign when the divisor is (ax − b).

For the full question set go to the [practice questions](/resources/oxfordaqa-a-level-mathematics-transformations-rational-functions-algebraic-division-practice/), and use the [revision notes](/resources/oxfordaqa-a-level-mathematics-transformations-rational-functions-algebraic-division-revision-notes/) for quick recall.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA. For International AS exams from May/June 2018 and International A-level exams from May/June 2019. Section P2.1: Algebra and functions.
