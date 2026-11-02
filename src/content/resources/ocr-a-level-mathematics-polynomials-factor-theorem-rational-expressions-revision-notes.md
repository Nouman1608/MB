---
title: "OCR A Level Mathematics A: Polynomials, factor theorem, rational expressions, partial fractions and modelling with functions (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Polynomials Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Polynomials, factor theorem, rational expressions, partial fractions and modelling with functions"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 105
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "algebra-and-functions-ocr-alevel-maths"
description: "Condensed OCR A Level Maths A revision notes on polynomials, the factor theorem, rational expressions, partial fractions and modelling, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense the [full study guide](/resources/ocr-a-level-mathematics-polynomials-factor-theorem-rational-expressions/) for the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), content references 1.02j, 1.02k, 1.02y and 1.02z. Use them in the final weeks, then test yourself with the [practice questions](/resources/ocr-a-level-mathematics-polynomials-factor-theorem-rational-expressions-practice/). Other links: [course hub](/boards/ocr/a-level/mathematics/), [printable checklist](/checklists/ocr/a-level/mathematics/), [free 10-minute diagnostics](/diagnostics/) and the [Pure Mathematics revision notes](/resources/ocr-a-level-mathematics-pure-revision-notes/).

## What is Stage 1 and what is A Level only

| Reference | Content | Label |
|---|---|---|
| 1.02j | Expanding, collecting, factorising, simple algebraic division, factor theorem | Stage 1 (AS and A Level) |
| 1.02k | Simplifying rational expressions; dividing by (ax − b) with quotient and remainder; equations of degree 4 or less | A Level only |
| 1.02y | Partial fractions; use with the binomial expansion and in integration | A Level only |
| 1.02z | Using functions in modelling | A Level only |

## Key vocabulary

- Polynomial: a sum of terms axⁿ, n a whole number. Degree is the highest power.
- Quadratic (degree 2), cubic (degree 3), parabola (graph of a quadratic).
- Quotient and remainder: f(x) = (divisor) × quotient + remainder.
- Rational expression: polynomial over polynomial.
- Improper fraction: numerator degree not less than the denominator degree.

## Factor theorem and remainder

| Statement | Use |
|---|---|
| f(a) = 0 if and only if (x − a) is a factor | Test and find linear factors |
| f(b/a) = 0 if and only if (ax − b) is a factor | Test brackets such as (2x + 1) with x = −1/2 |
| Remainder on division by (ax − b) is f(b/a) | Find unknown constants quickly |

**Method: factorise a cubic**

1. Try x = ±1, ±2, ±3 and other factors of the constant term (and fractions b/a for a leading coefficient a).
2. When f(r) = 0, write (x − r) as a factor.
3. Divide, by long division or by matching coefficients, to get a quadratic.
4. Factorise the quadratic. State all roots.

**Method: unknown constants.** Substitute the root of each divisor, write an equation for each condition, solve simultaneously.

**Reminder.** If (x − 1) is a factor of x³ + 2x² + 3x − 6, then 1 + 2 + 3 − 6 = 0. If the remainder on dividing by (x + 2) is −12, then f(−2) = −12.

**Quartics.** Test a root, divide, test again on the cubic, and test the same root a second time in case it repeats. A quartic has at most four real roots, and fewer when roots repeat or are not real, so state exactly what you find.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the--01-factor-theorem-graph.webp" width="900" height="1020" alt="Graph of f(x) = x cubed minus 4x squared minus 7x + 10 crossing the x-axis at minus 2, 1 and 5. Each root is marked and labelled with its linear factor (x + 2), (x - 1), (x - 5). A zero of the function corresponds to a linear factor." loading="lazy">
  <figcaption>A root of f is where the graph meets the x-axis, and it gives a linear factor.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the--02-remainder-is-fa.webp" width="900" height="990" alt="Two cubics are drawn: f(x) = 3x^3 + 2x^2 - 7x + 4 and (x - 2)(3x^2 + 8x + 9), which always sit 22 apart. At x = 2 the gap is marked as 22, equal to f(2), the remainder when f is divided by (x - 2)." loading="lazy">
  <figcaption>Dividing by (x - 2) leaves a remainder equal to the height f(2); the quotient part is the same curve lowered by that amount.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the--04-cubic-factor-shapes.webp" width="900" height="1160" alt="Three cubic graphs with positive x^3 term. Three distinct factors cross the axis three times, a repeated factor touches the axis, and a quadratic factor with negative discriminant gives only one crossing." loading="lazy">
  <figcaption>Distinct, repeated and irreducible quadratic factors give crossing three times, touching, or crossing once.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the--05-quartic-repeated-root.webp" width="900" height="985" alt="Graph of x^4 - 3x^3 - 6x^2 + 28x - 24. It crosses the axis at x = -3 and flattens as it crosses at x = 2, which is a root three times, so f(x) = (x - 2)^3 (x + 3)." loading="lazy">
  <figcaption>A repeated root makes the curve flatten at the axis; the factor theorem is applied again to each quotient.</figcaption>
</figure>


## Algebraic division layout

Divide the leading term of the remainder by the leading term of the divisor, subtract, bring down the next term, repeat.

```
(3x³ − 2x + 1) ÷ (x + 2)
3x³ ÷ x = 3x²     subtract 3x³ + 6x²      leaves −6x² − 2x
−6x² ÷ x = −6x    subtract −6x² − 12x     leaves 10x + 1
10x ÷ x = 10      subtract 10x + 20       leaves −19
```

Quotient 3x² − 6x + 10, remainder −19. Check: f(−2) = −24 + 4 + 1 = −19.

Write a missing power with a zero coefficient (here 0x²) so the columns line up.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the--03-division-columns.webp" width="900" height="938" alt="Long division of 6x^3 + x^2 - 7x + 6 by (3x - 1) laid out in columns. The quotient 2x^2 + x - 2 is built one term at a time and the leftover 4 equals f(1/3)." loading="lazy">
  <figcaption>Each quotient term is multiplied by the divisor and subtracted until only the remainder is left.</figcaption>
</figure>


## Rational expressions

| Task | Method |
|---|---|
| Simplify | Factorise top and bottom, cancel common factors only |
| Multiply | Factorise first, cancel across, multiply what is left |
| Divide | Multiply by the reciprocal of the second fraction |
| Add or subtract | Common denominator, then simplify the numerator |
| Top degree not less than bottom | Divide first: quotient + remainder/divisor |

Cancelling can hide values where the original expression is undefined, so keep the excluded values in mind.

**Worked reminder (adding).** 2/(x + 1) + 3/(x − 2) = [2(x − 2) + 3(x + 1)] / [(x + 1)(x − 2)] = (5x − 1)/[(x + 1)(x − 2)]. Reading this backwards is exactly what partial fractions do.

**Worked reminder (top degree not less than bottom degree).** (x² + 1)/(x − 1) = x + 1 + 2/(x − 1), because (x − 1)(x + 1) = x² − 1 and x² + 1 leaves a remainder of 2. Check with x = 3: left side 10/2 = 5, right side 3 + 1 + 1 = 5.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the--07-rational-divide-first.webp" width="900" height="940" alt="Graph of (x^3 - 2x^2 - 5x + 7)/(x - 3) with a vertical asymptote at x = 3 and the dashed parabola y = x^2 + x - 2. The function equals this quotient plus 1/(x - 3), so it follows the parabola far from the asymptote." loading="lazy">
  <figcaption>After division, the polynomial part shows the long-run shape and the fraction part gives the asymptote.</figcaption>
</figure>


## Partial fractions

| Denominator | Form | Find constants by |
|---|---|---|
| (x + p)(x + q) | A/(x + p) + B/(x + q) | Substituting x = −p and x = −q |
| (x + p)² | A/(x + p) + B/(x + p)² | Substituting x = −p, then another value |
| (x + p)(x + q)(x + r) | A/(·) + B/(·) + C/(·) | Three substitutions |
| (x + p)(x + q)² | A/(x + p) + B/(x + q) + C/(x + q)² | Two substitutions plus one coefficient |
| Top degree not less than bottom | Constant or polynomial + fractions | Divide first |

**Method in steps**

1. Factorise the denominator completely.
2. Choose the form from the table.
3. Multiply through by the whole denominator to get an identity in x.
4. Substitute roots of the factors, then compare coefficients for what is left.
5. Check by substituting a value you have not used.

**Worked reminder.** 5/[(x − 1)(x + 4)]: 5 ≡ A(x + 4) + B(x − 1). Put x = 1 to get A = 1. Put x = −4 to get B = −1. So 1/(x − 1) − 1/(x + 4).

**Repeated factor reminder.** (3x + 7)/(x + 2)² = A/(x + 2) + B/(x + 2)². Then 3x + 7 ≡ A(x + 2) + B. Put x = −2 to get B = 1. Compare the x terms to get A = 3.

**Uses**

- Integration: each partial fraction integrates separately. A/(ax + b) gives (A/a) ln|ax + b|.
- Binomial series: expand each partial fraction and add. The result is valid only where every expansion is valid, so take the narrowest range.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the--08-partial-fractions-sum.webp" width="900" height="880" alt="Three curves: (10x - 5)/((x + 1)(2x - 3)), 3/(x + 1) and 4/(2x - 3). Each part has one vertical asymptote, and adding the two parts point by point gives the combined curve." loading="lazy">
  <figcaption>A fraction with two linear factors is the sum of two simpler fractions, one per asymptote.</figcaption>
</figure>


## Modelling with functions (1.02z)

| Idea | What to write |
|---|---|
| Assumption | A simplification made to build the model, such as ignoring thickness |
| Limitation | Where the model fails, such as a domain or an impossible value |
| Refinement | A change that makes the model closer to reality |
| Comparing models | Check each against data and against the situation, then say which is better and why |

Always give the domain, interpret a root in context, and reject values that make no sense.

## Must-know distinctions

- Factor theorem tests whether the remainder is zero. The remainder theorem gives the value when it is not.
- (x − a) uses root a. (ax − b) uses root b/a.
- Cancelling factors is allowed. Cancelling terms is not.
- Partial fractions split one fraction into several. Combining fractions does the opposite.
- A numerator of the same degree as the denominator needs division before decomposition.

## Quick self-test

1. Expand and simplify (x − 3)(x + 4)(x − 1).
2. Find the remainder when 2x³ − 3x² + x + 5 is divided by (x + 1).
3. Show that (2x + 1) is a factor of 4x³ + 4x² − x − 1 and factorise it completely.
4. Simplify (x² + x − 12)/(x² − 16).
5. Express 5/[(x − 1)(x + 4)] in partial fractions, then find its integral.
6. Express (3x + 7)/(x + 2)² in partial fractions.
7. Divide 3x³ − 2x + 1 by (x + 2) and give the quotient and remainder.
8. Solve x³ − 7x + 6 = 0.
9. Find the first three terms of the series for 1/[(1 + x)(1 − 2x)], with the range of validity.
10. A quadratic model for the height of a plant says it will become negative. Give one limitation of the model and one possible refinement.

### Answers

1. x³ − 13x + 12.
2. Substitute x = −1: −2 − 3 − 1 + 5 = −1, so the remainder is −1.
3. f(−1/2) = −1/2 + 1 + 1/2 − 1 = 0, so (2x + 1) is a factor. The full factorisation is (x + 1)(2x − 1)(2x + 1).
4. (x + 4)(x − 3)/[(x − 4)(x + 4)] = (x − 3)/(x − 4), for x ≠ 4 and x ≠ −4.
5. 1/(x − 1) − 1/(x + 4). The integral is ln|x − 1| − ln|x + 4| + c, which is ln|(x − 1)/(x + 4)| + c.
6. 3/(x + 2) + 1/(x + 2)².
7. Quotient 3x² − 6x + 10, remainder −19.
8. f(1) = 0, so (x − 1) is a factor and x³ − 7x + 6 = (x − 1)(x² + x − 6) = (x − 1)(x − 2)(x + 3). The solutions are x = 1, 2, −3.
9. 1/[(1 + x)(1 − 2x)] = (1/3)/(1 + x) + (2/3)/(1 − 2x), which gives 1 + x + 3x² + … for |x| < 1/2.
10. A negative height is impossible, so the model only holds on a limited domain. A refinement is to use the model only up to the time when the height reaches zero, or to choose a function that stays positive.

## Where marks are usually lost

- Testing (2x − 1) with x = 2 instead of x = 1/2.
- Omitting a zero-coefficient term in long division, which shifts the columns.
- Dropping a negative sign when subtracting a bracket in a division.
- Stopping at one root of a quartic and not checking whether it repeats.
- Cancelling terms in a rational expression instead of factors.
- Forgetting the extra B/(x + p) term for a repeated factor.
- Applying partial fractions to an improper fraction without dividing first.
- Quoting a series without its range of validity.
- Giving a root of a model's equation that lies outside the domain.
- Writing a final answer with no reference to the context.

## Official syllabus

OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR. These notes cover content references 1.02j, 1.02k, 1.02y and 1.02z.
