---
title: "AQA A-level Mathematics: Polynomial Manipulation, Algebraic Division and the Factor Theorem (7357) -- Revision Notes"
seoTitle: "AQA A-level Maths B6 Factor Theorem Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Polynomial Manipulation, Algebraic Division and the Factor Theorem"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 11
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b6-manipulating-polynomials-aqa-alevel-maths"
description: "Condensed AQA A-level Maths B6 revision notes: expanding, factorising, algebraic division, factor theorem, remainders and rational expressions."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

These notes condense content statement B6 of the AQA A-level Mathematics 7357 specification (version 1.3, 31 January 2018): polynomial manipulation, algebraic division by linear expressions, the factor theorem and rational expressions. For full explanations and longer worked examples, read the [study guide](/resources/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the/). When you are ready to test yourself, use the [practice questions](/resources/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the-practice/), the [course hub](/boards/aqa/a-level/mathematics/), the [checklist](/checklists/aqa/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/).

## Key ideas at a glance

| Skill | Core idea | Spec |
|---|---|---|
| Expand and collect | Multiply every term by every term, then group like powers | B6 |
| Factorise | Common factor first, then pattern, grouping or the factor theorem | B6 |
| Algebraic division | f(x) = (divisor)(quotient) + remainder; linear divisors only | B6 |
| Factor theorem | f(a) = 0 exactly when (x − a) is a factor | B6 |
| Remainder | Dividing by (x − a) leaves f(a) | B6 |
| Rational expressions | Factorise, cancel whole factors, state excluded values | B6 |

## Definitions

- **Polynomial:** a sum of terms axⁿ with n a non-negative integer.
- **Degree:** the highest power of x present.
- **Root (or zero) of f:** a value a with f(a) = 0.
- **Quotient:** the polynomial you get from dividing. Its degree is one less than f when the divisor is linear.
- **Rational expression:** one polynomial over another.

## Expanding

Method in steps:

1. Expand two brackets first, then multiply by the third.
2. Write every product, including signs.
3. Collect like terms by power of x, highest first.

Reminder: (x + 2)(x − 4)(3x + 1). First (x + 2)(x − 4) = x² − 2x − 8. Then (x² − 2x − 8)(3x + 1) = 3x³ + x² − 6x² − 2x − 24x − 8 = 3x³ − 5x² − 26x − 8.

Check an expansion by substituting a simple value. At x = 1 the original gives 3 × (−3) × 4 = −36, and 3 − 5 − 26 − 8 = −36. The values agree.

## Factorising

| Type | Rule | Example |
|---|---|---|
| Common factor | Take out the largest factor | 2x³ − 8x = 2x(x² − 4) |
| Difference of two squares | a² − b² = (a − b)(a + b) | 4x² − 9 = (2x − 3)(2x + 3) |
| Quadratic, leading coefficient above 1 | Find two numbers with product ac and sum b, split and group | 12x² − 5x − 2 = (3x − 2)(4x + 1) |
| Four terms | Group in pairs | x³ − 5x² − 4x + 20 = x²(x − 5) − 4(x − 5) = (x − 5)(x − 2)(x + 2) |
| Cubic with no obvious pattern | Find a root by trial, divide, factorise the quotient | see below |

For 12x² − 5x − 2: ac = −24, and the pair with sum −5 is −8 and 3. So 12x² − 8x + 3x − 2 = 4x(3x − 2) + (3x − 2) = (3x − 2)(4x + 1).

## Algebraic division

Method in steps:

1. Write the polynomial in descending powers, inserting 0xⁿ for any missing power.
2. Divide the leading term of what remains by the leading term of the divisor.
3. Multiply the divisor by that result and subtract.
4. Repeat until the remainder has lower degree than the divisor.
5. State f(x) = (divisor)(quotient) + remainder.

Reminder: divide 2x³ + 5x² − 14x − 8 by (x − 2).

```
2x² × (x − 2) = 2x³ − 4x²      → remainder 9x² − 14x
9x  × (x − 2) = 9x² − 18x      → remainder 4x − 8
4   × (x − 2) = 4x − 8         → remainder 0
```

The quotient is 2x² + 9x + 4 = (2x + 1)(x + 4). So 2x³ + 5x² − 14x − 8 = (x − 2)(2x + 1)(x + 4).

Checking by multiplying back is a quick way to catch a sign slip.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the--03-division-columns.webp" width="900" height="938" alt="Long division of 6x^3 + x^2 - 7x + 6 by (3x - 1) laid out in columns. The quotient 2x^2 + x - 2 is built one term at a time and the leftover 4 equals f(1/3)." loading="lazy">
  <figcaption>Each quotient term is multiplied by the divisor and subtracted until only the remainder is left.</figcaption>
</figure>


## Factor theorem and remainder

| Divisor | Substitute | Meaning |
|---|---|---|
| x − a | x = a | f(a) is the remainder; zero means a factor |
| x + a | x = −a | f(−a) is the remainder |
| px + q | x = −q/p | f(−q/p) is the remainder |

Method for unknown constants:

1. Substitute the value that matches each divisor.
2. Set the result equal to 0 for a factor, or to the stated remainder.
3. Solve the simultaneous equations.
4. Substitute back and check with one more evaluation.

Reminder: the remainder of 5x³ − 2x² + x − 7 on division by (x − 1) is f(1) = 5 − 2 + 1 − 7 = −3. On division by (2x − 1) it is f(1/2) = 5/8 − 1/2 + 1/2 − 7 = −51/8.

Candidate roots for integer coefficients: numerators dividing the constant term, denominators dividing the leading coefficient. Test the small ones first.

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


## Rational expressions

Method in steps:

1. Factorise the numerator and the denominator fully.
2. Cancel factors that appear in both.
3. State any excluded values from the original denominator.
4. For a division, multiply by the reciprocal first, then cancel.
5. If the numerator has degree equal to or above the denominator, divide to get a polynomial plus a proper fraction.

Reminders:

```
(x² − 16)/(x² + x − 12) = (x − 4)(x + 4) / [(x − 3)(x + 4)] = (x − 4)/(x − 3),  x ≠ −4, 3
(3x² − x − 4)/(x² − 1)  = (3x − 4)(x + 1) / [(x − 1)(x + 1)] = (3x − 4)/(x − 1), x ≠ ±1
(x² + x − 3)/(x − 1) = x + 2 − 1/(x − 1)
```

For the last one, (x − 1)(x + 2) = x² + x − 2, so x² + x − 3 is one less, giving remainder −1.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the--07-rational-divide-first.webp" width="900" height="940" alt="Graph of (x^3 - 2x^2 - 5x + 7)/(x - 3) with a vertical asymptote at x = 3 and the dashed parabola y = x^2 + x - 2. The function equals this quotient plus 1/(x - 3), so it follows the parabola far from the asymptote." loading="lazy">
  <figcaption>After division, the polynomial part shows the long-run shape and the fraction part gives the asymptote.</figcaption>
</figure>


## Putting it together: a full cubic

Method in steps for "factorise f(x) completely and solve f(x) = 0":

1. List candidate roots from the factors of the constant term and the leading coefficient.
2. Evaluate f at the smallest candidates until one gives 0.
3. Turn that root into a factor, using the table above.
4. Divide to find the quadratic quotient.
5. Factorise the quotient, or use the quadratic formula if it does not factorise.
6. List every root, then write the answer in the form the question asks for.

Reminder: f(x) = 2x³ − 5x² − x + 6.

```
f(1)  = 2 − 5 − 1 + 6 = 2     not a root
f(−1) = −2 − 5 + 1 + 6 = 0    so (x + 1) is a factor
```

Dividing by (x + 1) gives 2x² − 7x + 6 with remainder 0, and 2x² − 7x + 6 = (2x − 3)(x − 2). So f(x) = (x + 1)(2x − 3)(x − 2) and the roots are x = −1, 3/2 and 2.

Check using a different route: f(2) = 16 − 20 − 2 + 6 = 0, and f(3/2) = 27/4 − 45/4 − 3/2 + 6 = 0.

## Deciding which tool to use

| Question wording | Likely tool |
|---|---|
| "Show that (x − k) is a factor" | Evaluate f(k) and state it equals 0 |
| "Find the remainder when ... is divided by ..." | Evaluate f at the root of the divisor |
| "Find the quotient" or "divide" | Long division or matching coefficients |
| "Factorise completely" | Factor theorem, division, then factorise the quotient |
| "Find the values of a and b" | Two substitutions and simultaneous equations |
| "Simplify the fraction" | Factorise, cancel, state exclusions |
| "Write in the form ... + A/(x + k)" | Divide, then write quotient plus remainder over the divisor |

Writing the tool you are using in a few words, such as "by the factor theorem", makes your working easier to follow and shows the method clearly.

## Must-know distinctions

- **Factor versus term:** (x + 3)/(x + 3y) cannot be cancelled to 1/y, but (x + 3)(x − 1)/(x + 3) can be cancelled.
- **Root versus factor:** a root of 2 gives the factor (x − 2). A root of −1/2 gives the factor (2x + 1).
- **Remainder zero versus non-zero:** only a zero remainder means a factor.
- **Quotient versus remainder:** the quotient is a polynomial in x. The remainder, for a linear divisor, is a constant.
- **Simplify versus solve:** simplifying a rational expression leaves an expression. Solving needs an equals sign.

## Quick self-test

1. Expand (x − 3)(x + 3)(x + 1).
2. Factorise 12x² − 5x − 2.
3. Factorise 2x³ − 8x completely.
4. Find the remainder when 5x³ − 2x² + x − 7 is divided by (x − 1).
5. Show that (x + 1) is a factor of x³ + 3x² − x − 3 and factorise it completely.
6. Divide 2x³ + 5x² − 14x − 8 by (x − 2) and state the quotient.
7. Simplify (x² − 16)/(x² + x − 12).
8. Simplify (3x² − x − 4)/(x² − 1).
9. Write (x² + x − 3)/(x − 1) as a polynomial plus a fraction.
10. State the value of x you substitute to test whether (2x + 5) is a factor of a polynomial.

### Answers

1. x³ + x² − 9x − 9
2. (3x − 2)(4x + 1)
3. 2x(x − 2)(x + 2)
4. −3
5. f(−1) = −1 + 3 + 1 − 3 = 0, so (x + 1) is a factor. Then x³ + 3x² − x − 3 = (x + 1)(x² + 2x − 3) = (x − 1)(x + 1)(x + 3)
6. 2x² + 9x + 4, with remainder 0
7. (x − 4)/(x − 3)
8. (3x − 4)/(x − 1)
9. x + 2 − 1/(x − 1)
10. x = −5/2

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the--06-transform-track-points.webp" width="900" height="960" alt="A downward parabola y = f(x) with maximum (2, 5) and its image y = 4 - 2f(3x - 6), an upward parabola. Three marked points move: (2, 5) to (8/3, -6), (-1, 0) to (5/3, 4) and (5, 0) to (11/3, 4). The maximum becomes a minimum." loading="lazy">
  <figcaption>Solve the bracket for the new x-value, then apply the outside changes to y.</figcaption>
</figure>


## Where marks are usually lost

- Dropping or flipping a sign when subtracting a bracketed product.
- Leaving out the 0x² term and misaligning the long division.
- Testing the wrong value for a factor such as (x + 4), using 4 instead of −4.
- Substituting x = −1 for the divisor (2x + 1) rather than x = −1/2.
- Cancelling terms across a fraction instead of factors.
- Forgetting to state excluded values when the question asks for them.
- Finding one root and stopping when the question asks for all solutions.
- Giving a quadratic factor that can still be split, or splitting one that cannot (such as x² + 9).
- Not showing the substitution when the question says "show that".

## Frequently asked questions

**What is the remainder theorem?**
When a polynomial f(x) is divided by (x − a), the remainder is f(a). For a divisor (px + q), the remainder is f(−q/p).

**How do you find a root of a cubic to start factorising?**
For integer coefficients, test candidate roots whose numerator divides the constant term and whose denominator divides the leading coefficient, starting with the small ones, until f equals 0.

**What is the difference between a quotient and a remainder?**
The quotient is the polynomial you get from dividing, one degree lower than f for a linear divisor. The remainder after dividing by a linear expression is a constant.

**How can you check an expansion quickly?**
Substitute a simple value such as x = 1 into both the original brackets and your expanded answer. If the values agree, a slip is unlikely.

**What is the difference between a root and a factor?**
A root is a value a where f(a) = 0; it gives the factor (x − a). A root of −1/2, for example, gives the factor (2x + 1).

## Official syllabus

AQA A-level Mathematics (7357) specification, for teaching from September 2017, version 1.3 dated 31 January 2018, published by AQA. These notes cover content statement B6.
