---
title: "OxfordAQA International AS and A-level Mathematics: Transformations and rational functions (9660) -- Revision Notes"
seoTitle: "OxfordAQA A-level Maths Partial Fractions Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on combined transformations, the Remainder Theorem, algebraic division and partial fractions for OxfordAQA A-level Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These revision notes condense the second half of section P2.1 (Algebra and functions) in the OxfordAQA International AS and A-level Mathematics specification, Version 5.2. The specification places this content in International A-level (A2) Unit P2 (Pure Maths); it is not examined at International AS. For full explanations and worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-transformations-rational-functions-algebraic-division/).

Related pages: the [OxfordAQA Mathematics hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/), the [practice questions](/resources/oxfordaqa-a-level-mathematics-transformations-rational-functions-algebraic-division-practice/) and the earlier [Unit P1 polynomials notes](/resources/oxfordaqa-a-level-mathematics-polynomials-factor-theorem-graph-sketching-and-revision-notes/). Find gaps with the [free 10-minute diagnostics](/diagnostics/).

## Transformations at a glance

| Equation | Description |
|---|---|
| y = af(x) | stretch, scale factor a, parallel to y-axis |
| y = f(x) + a | translation (0, a) |
| y = f(x + a) | translation (−a, 0) |
| y = f(ax) | stretch, scale factor 1/a, parallel to x-axis |
| y = −f(x) | reflection in the x-axis |
| y = f(−x) | reflection in the y-axis |

**Method in steps for a combined equation**

1. Write the new equation as a function of the old one, for example 3f(2x + 1) − 4.
2. Treat the **inside** (x-direction) changes as the opposite of what they look like: add 1 means move left, multiply by 2 means halve the x-distances.
3. Treat the **outside** (y-direction) changes as they look: multiply by 3, subtract 4.
4. For an inside expression such as 2x − 1, you can either translate by 1 first and then halve the x-distances, or write 2(x − 1/2), halve first and then translate by 1/2.
5. On the y side, stretch first and then translate for 3f(x) + 2. Translate first only if the equation is 3(f(x) + 2).

**Tracking a point.** To find the image of (h, k) under y = a f(bx + c) + d, solve bx + c = h for x, then compute a k + d.

**Spec examples worked as reminders**

| Start | Finish | Description |
|---|---|---|
| e^x | e^(2x − 1) | translate (1, 0), then stretch factor 1/2 in x. Asymptote y = 0. |
| ln x | 2 ln(x − 1) | translate (1, 0), then stretch factor 2 in y. Asymptote x = 1, x-intercept (2, 0). |
| sec x | 3 sec 2x | stretch factor 1/2 in x, stretch factor 3 in y. Period π. No values with −3 < y < 3. |

## Factor Theorem and Remainder Theorem

| Result | Statement |
|---|---|
| Remainder Theorem | Remainder on dividing f(x) by (ax + b) is f(−b/a) |
| Factor Theorem | (ax + b) is a factor of f(x) if and only if f(−b/a) = 0 |
| Rational function | p(x)/q(x), undefined where q(x) = 0 |

**Method in steps for finding constants**

1. Turn each condition into an equation: factor means f(−b/a) = 0, remainder r means f(−b/a) = r.
2. Solve the simultaneous equations.
3. Divide out the known factor to factorise the rest.
4. Check the discriminant of any remaining quadratic.

**Small reminder.** Is (3x + 1) a factor of 3x³ + 4x² − 17x − 6? f(−1/3) = −1/9 + 4/9 + 51/9 − 54/9 = 0, so yes, and f(x) = (3x + 1)(x − 2)(x + 3).

## Simplifying rational expressions

1. Factorise numerator and denominator fully, using the Factor Theorem for cubics.
2. Cancel common **factors**, never common terms.
3. State excluded values if the question asks.
4. To add or subtract, use the lowest common denominator, then simplify the numerator.

Example: (x² − 9)/(x² + x − 6) = (x − 3)(x + 3)/((x − 2)(x + 3)) = (x − 3)/(x − 2).

## Algebraic division

| Method | Best used when |
|---|---|
| Inspection | divisor is linear and the numerator is linear or a simple quadratic |
| Equating coefficients | you want a quick, tidy quotient: write f(x) = (divisor)(quotient) + remainder and match powers |
| Formal division | cubic or quartic over a linear or quadratic divisor |
| Given identity A + (Bx + C)/(...) | same-degree fractions, found by matching coefficients |

Always finish with a check: expand (divisor)(quotient) + remainder and compare.

Example by inspection: (7x − 2)/(x + 1) = 7 − 9/(x + 1), because 7x − 2 = 7(x + 1) − 9.

## Partial fractions

| Denominator | Form |
|---|---|
| (ax + b)(cx + d) | A/(ax + b) + B/(cx + d) |
| (ax + b)(cx + d)² | A/(ax + b) + B/(cx + d) + C/(cx + d)² |
| Numerator degree ≥ denominator degree | quotient + remainder form, then split |

**Method in steps**

1. Compare degrees. If the numerator is not smaller, divide first.
2. Write the form with unknown constants.
3. Multiply both sides by the full denominator.
4. Substitute x-values that make each bracket zero, which gives the single-factor constants.
5. Equate a coefficient (usually x²) or use a spare value for the rest.
6. Check with a value of x not used before.

Irreducible quadratic factors are not tested.

Example: (4x + 1)/((x − 2)(x + 1)) = 3/(x − 2) + 1/(x + 1).

## Worked reminders

**Tracking a point.** (3, 4) lies on y = f(x). On y = 2f(x − 1) + 5, solve x − 1 = 3 to get x = 4. Then y = 2 × 4 + 5 = 13. The image is (4, 13).

**Dividing a cubic by a linear divisor.** Divide 5x³ − 3x² + x + 6 by (x + 2). Write 5x³ − 3x² + x + 6 = (x + 2)(ax² + bx + c) + d. Matching x³: a = 5. Matching x²: b + 2a = −3, so b = −13. Matching x: c + 2b = 1, so c = 27. Matching constants: 2c + d = 6, so d = −48. The result is 5x² − 13x + 27 − 48/(x + 2). Check with the Remainder Theorem: the cubic at x = −2 is −40 − 12 − 2 + 6 = −48.

**Repeated factor.** Express (3x² − 14x − 1)/((x + 1)(x − 3)²) in partial fractions. Write the form A/(x + 1) + B/(x − 3) + C/(x − 3)². Then 3x² − 14x − 1 ≡ A(x − 3)² + B(x + 1)(x − 3) + C(x + 1). Put x = −1: 16 = 16A, so A = 1. Put x = 3: −16 = 4C, so C = −4. Compare x²: 3 = A + B, so B = 2. The result is 1/(x + 1) + 2/(x − 3) − 4/(x − 3)².

## Must-know distinctions

- f(x + 2) moves the graph **left** 2; f(x) + 2 moves it **up** 2.
- f(2x) halves x-distances; 2f(x) doubles y-distances.
- Remainder uses f(−b/a); the divisor's sign flips.
- Remainder (a number) is different from the quotient (a polynomial).
- A repeated factor needs one fraction for each power up to the repeat.

## Wording to recognise

- "Describe" a transformation: name it (translation, stretch, reflection), give the vector or scale factor, and state the axis or direction.
- "Show that": write every step, including the substitution and a final statement such as "so (3x − 2) is a factor".
- "Hence": use the result you have just found, such as a factor from the Factor Theorem, rather than starting again.
- "Exact": leave surds, fractions and logarithms unevaluated.
- "Express in partial fractions": give the final sum, not only the constants A, B and C.

## Quick self-test

1. Find the remainder when 2x³ − x + 5 is divided by (2x + 1).
2. Show that (2x + 3) is not a factor of 2x³ + 3x² − 4x + 6 and give the remainder.
3. Describe the transformation from y = f(x) to y = f(x + 3) − 4.
4. The curve y = f(x) passes through (4, −3). Where is this point on y = 3f(x/2) + 1?
5. Describe, in order, how to obtain y = 3 − f(x) from y = f(x).
6. Simplify (x² − 9)/(x² + x − 6).
7. Write (7x − 2)/(x + 1) in the form A + B/(x + 1).
8. Divide x³ − 2x² + 3x + 4 by (x − 1), giving quotient and remainder.
9. Express (4x + 1)/((x − 2)(x + 1)) in partial fractions.
10. State, without evaluating any constants, the form for (x² + 1)/((x − 1)²(x + 3)).

### Answers

1. f(−1/2) = −1/4 + 1/2 + 5 = **21/4**.
2. f(−3/2) = −27/4 + 27/4 + 6 + 6 = 12, not 0, so it is not a factor. The remainder is **12**.
3. **Translation by (−3, −4).**
4. Solve x/2 = 4 to get x = 8, and 3(−3) + 1 = −8. Image: **(8, −8)**.
5. **Reflect in the x-axis, then translate by (0, 3).**
6. **(x − 3)/(x − 2)**.
7. **7 − 9/(x + 1)**.
8. Quotient **x² − x + 2**, remainder **6**.
9. **3/(x − 2) + 1/(x + 1)**.
10. The degree is below 3, so no division. The form is **A/(x − 1) + B/(x − 1)² + C/(x + 3)**.

## Where marks are usually lost

- Describing f(x + a) as a move to the right.
- Giving a stretch factor of 2 for f(2x), when the factor is 1/2.
- Applying transformations in the wrong order when two act on the same axis.
- Using f(b/a) in the Factor Theorem, and so missing a sign change.
- Cancelling a term instead of a factor in a rational expression.
- Leaving out the remainder when dividing, or writing the quotient only.
- Starting partial fractions on an improper fraction without dividing first.
- Writing a repeated factor as a single fraction.
- Not checking the final partial fractions by substituting a value of x.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA. For International AS exams from May/June 2018 and International A-level exams from May/June 2019. Section P2.1: Algebra and functions.
