---
title: "Pearson Edexcel International Advanced Level Mathematics: Proof, factor theorem and circles (YMA01)"
seoTitle: "Edexcel IAL Maths P2: Proof, Factor Theorem, Circles"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Proof, the factor and remainder theorems, and the equation of a circle"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 141
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-proof-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-algebra-and-functions-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-coordinate-geometry-edexcel-alevel-maths"
description: "Study guide to proof, the factor and remainder theorems and circles for Pearson Edexcel International Advanced Level Mathematics, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide is aligned to the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, April 2019. It covers the P2 content in sections 1 to 3: proof (1.1 to 1.3), the factor and remainder theorems (2.1) and the coordinate geometry of the circle (3.1). Pearson makes P2 a compulsory unit in IAS Mathematics, IAL Mathematics and Pure Mathematics, as it does P1, so everyone on these qualifications meets this material.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-proof-the-factor-and-remainder-theorems-and-the-revision-notes/) and the [practice set](/resources/edexcel-ial-mathematics-proof-the-factor-and-remainder-theorems-and-the-practice/). Keep the [course hub](/boards/edexcel/a-level/mathematics/) and the [printable checklist](/checklists/edexcel/a-level/mathematics/) open to track your progress, and take the [free diagnostics](/diagnostics/) to locate gaps. For the whole unit, see the [Pure Mathematics 2 guide](/resources/a-level-edexcel-mathematics-pure-mathematics-2/).

## What this unit covers

| Spec ref | Outcome |
|---|---|
| 1.1 | Use the structure of mathematical proof: start from given assumptions, make a series of logical steps, reach a conclusion |
| 1.2 | Proof by exhaustion: try all the options |
| 1.3 | Disproof by counter example |
| 2.1 | Simple algebraic division by (ax + b) or (ax − b); the factor theorem and the remainder theorem; the terms quotient and remainder; factorise cubics such as x³ + 3x² − 4 and 6x³ + 11x² − x − 6 |
| 3.1 | Use (x − a)² + (y − b)² = r²; find centre and radius from the equation and the equation from centre and radius; use three circle properties |

## Proof (1.1 to 1.3)

A proof starts from assumptions, moves by valid steps and ends with the statement you were asked to show. Every line must follow from an earlier line. Writing a few examples that work is not a proof.

**Algebraic proof.** Represent general cases with letters. An even integer is 2n and an odd integer is 2n + 1, where n is an integer. Three consecutive integers are n, n + 1 and n + 2.

**Worked example 1.** Prove that the sum of seven consecutive integers is divisible by 7.

```
Let the integers be n, n + 1, ..., n + 6, where n is an integer.
Sum = 7n + (1 + 2 + 3 + 4 + 5 + 6) = 7n + 21 = 7(n + 3)
The bracket n + 3 is a whole number, so the total is 7 times a whole number.
```

The last sentence is the conclusion. Always write it.

**Proof by exhaustion** means splitting the problem into a finite list of cases that cover every possibility, then checking each one. The cases must leave nothing out.

**Worked example 2.** Prove that the square of an integer leaves remainder 0 or 1 when divided by 3.

Every integer has the form 3m, 3m + 1 or 3m + 2, where m is an integer. These three cases cover all integers.

```
Case 1: (3m)² = 9m² = 3(3m²), remainder 0.
Case 2: (3m + 1)² = 9m² + 6m + 1 = 3(3m² + 2m) + 1, remainder 1.
Case 3: (3m + 2)² = 9m² + 12m + 4 = 3(3m² + 4m + 1) + 1, remainder 1.
```

No case gives any other remainder, so the claim holds for every integer. ∎

Exhaustion can also mean checking a small set of values directly, for example every integer from 1 to 5.

For example, suppose p and q are odd integers less than 9 and greater than 0. Then each is 1, 3, 5 or 7, and all sixteen sums are even: the sums of 1 with each value are 2, 4, 6, 8 and the other rows follow the same pattern. Listing every possibility in this way proves that p + q is even, because no pair has been left out.

**Disproof by counter example.** To show a statement is false for all values, you need only one value that breaks it. Check that your value meets the conditions of the statement, then show clearly that the claim fails.

**Worked example 3.** Show that "n² + n + 11 is prime for all positive integers n" is untrue.

For n = 1 to 9 the values are 13, 17, 23, 31, 41, 53, 67, 83 and 101, all prime. These do not prove the claim. Try n = 10:

```
n² + n + 11 = 100 + 10 + 11 = 121 = 11 × 11
```

121 is not prime, so n = 10 is a counter example. The statement is false.

## Algebraic division (2.1)

You divide a polynomial f(x) by a linear factor. The specification asks only for division by (ax + b) or (ax − b). The result is written

f(x) = (divisor) × (quotient) + remainder

where the remainder is a constant.

**Worked example 4.** Divide f(x) = 2x³ + 3x² − 8x + 5 by (2x − 1).

Work term by term, matching the highest power each time.

```
2x³ ÷ 2x = x²      x²(2x − 1) = 2x³ − x²       subtract: 4x² − 8x + 5
4x² ÷ 2x = 2x      2x(2x − 1) = 4x² − 2x       subtract: −6x + 5
−6x ÷ 2x = −3      −3(2x − 1) = −6x + 3        subtract: 2
```

The quotient is x² + 2x − 3 and the remainder is 2.

Check: (2x − 1)(x² + 2x − 3) + 2 = 2x³ + 3x² − 8x + 3 + 2 = 2x³ + 3x² − 8x + 5.

## The remainder theorem

If a polynomial f(x) is divided by (ax + b), the remainder is f(−b/a).

For (x − 3) put x = 3. For (2x + 1) put x = −1/2. In worked example 4 the divisor is (2x − 1), so the remainder is f(1/2).

f(1/2) = 2(1/8) + 3(1/4) − 8(1/2) + 5 = 0.25 + 0.75 − 4 + 5 = 2.

This matches the long division, and it takes much less work.

## The factor theorem

When f(−b/a) = 0, the expression (ax + b) divides f(x) exactly. It also works the other way: if (ax + b) divides f(x) exactly, then f(−b/a) = 0. In the specification's wording, if f(x) = 0 when x = b/a, then (ax − b) is a factor.

**Worked example 5.** Factorise f(x) = x³ + 2x² − 11x − 12 fully.

Try factors of the constant term, 12.

```
f(1) = 1 + 2 − 11 − 12 = −20     not zero
f(−1) = −1 + 2 + 11 − 12 = 0     which gives the factor (x + 1)
```

Dividing by (x + 1) leaves x² + x − 12, which factorises as (x + 4)(x − 3).

**f(x) = (x + 1)(x + 4)(x − 3)**

**Worked example 6 (leading coefficient not 1).** Factorise g(x) = 3x³ − x² − 12x + 4.

A root of the form b/a has b dividing 4 and a dividing 3. Try x = 1/3:

g(1/3) = 3(1/27) − 1/9 − 4 + 4 = 1/9 − 1/9 = 0.

So (3x − 1) is a factor. Divide: g(x) = (3x − 1)(x² − 4).

**g(x) = (3x − 1)(x − 2)(x + 2)**

If you need to solve f(x) = 0, factorise first, then set each factor to zero. For example 5 the solutions are x = −1, −4 and 3.

**Worked example 7 (finding unknowns).** The polynomial f(x) = x³ + ax² + bx + 8 has a factor (x + 2) and leaves remainder −6 when divided by (x − 1). Find a and b.

```
Factor (x + 2):       f(−2) = −8 + 4a − 2b + 8 = 0    so  2a = b
Remainder on (x − 1): f(1) = 1 + a + b + 8 = −6       so  a + b = −15
Substitute b = 2a: 3a = −15, so a = −5, then b = −10.
```

**a = −5, b = −10**

Check with f(x) = x³ − 5x² − 10x + 8: f(−2) = −8 − 20 + 20 + 8 = 0 and f(1) = 1 − 5 − 10 + 8 = −6.

## The equation of a circle (3.1)

A circle of radius r whose centre is the point (a, b) satisfies

(x − a)² + (y − b)² = r²

Note the minus signs. For centre (3, −5) the brackets are (x − 3) and (y + 5).

**Worked example 8.** The circle has equation x² + y² + 6x − 8y + 9 = 0. State its centre and radius.

Complete the square in x and in y.

```
(x + 3)² − 9 + (y − 4)² − 16 + 9 = 0
(x + 3)² + (y − 4)² = 16
```

**Centre (−3, 4), radius 4.**

**Worked example 9.** The points A(−1, 2) and B(5, 10) are the ends of a diameter. Find the equation of the circle.

```
Centre = midpoint of AB = ((−1 + 5)/2, (2 + 10)/2) = (2, 6)
Radius = half of AB = √(6² + 8²) / 2 = 10/2 = 5
```

**(x − 2)² + (y − 6)² = 25**

## Circle properties

You may use these three properties.

1. **A diameter subtends a right angle at any other point of the circle.** If AB is a diameter and P is on the circle, angle APB = 90°. To test this with coordinates, show the gradients of PA and PB multiply to −1.
2. **A line drawn from the centre perpendicular to a chord cuts the chord in half.** The foot of the perpendicular is the midpoint of the chord.
3. **A radius is perpendicular to the tangent at the point of contact.** Flip the radius gradient and change its sign to get the tangent gradient.

**Worked example 10 (semicircle).** In example 9, show that P(5, 2) lies on the circle and angle APB = 90°.

(5 − 2)² + (2 − 6)² = 9 + 16 = 25, so P is on the circle. The gradient of PA is (2 − 2)/(−1 − 5) = 0, so PA is horizontal. The line PB is x = 5, so it is vertical. The lines are perpendicular, as the property predicts.

**Worked example 11 (chord).** The circle (x − 1)² + (y + 2)² = 40 meets the line y = x + 1 at A and B. Find the midpoint of AB and the length AB.

Substitute y = x + 1: (x − 1)² + (x + 3)² = 40, so 2x² + 4x + 10 = 40, so x² + 2x − 15 = 0, giving x = 3 or x = −5. So A(3, 4) and B(−5, −4).

Midpoint = (−1, 0). The centre is (1, −2), and the gradient from the centre to (−1, 0) is (0 + 2)/(−1 − 1) = −1. The chord has gradient 1, so the two lines are perpendicular, as the property says.

AB = √(8² + 8²) = √128 = **8√2**

**Worked example 12 (tangent).** Find the tangent to the same circle at A(3, 4).

```
Gradient of radius from (1, −2) to (3, 4) = 6/2 = 3
Gradient of tangent = −1/3
y − 4 = −(1/3)(x − 3)  →  x + 3y = 15
```

**x + 3y = 15**

## Common errors

- Writing (x + 3)² for a centre at x = 3. The signs inside the brackets are the opposite of the centre coordinates.
- Reading r² as the radius. In (x − 2)² + (y − 6)² = 25 the radius is 5, not 25.
- Forgetting to complete the square on both x and y when the equation is in expanded form.
- Using f(b/a) for a divisor (ax + b). Use f(−b/a).
- Stopping once one factor is found. Factorise the quadratic that remains.
- Proving a statement with examples, or finishing a proof without a concluding sentence.
- Offering a counter example that does not satisfy the stated conditions.
- Taking the tangent gradient equal to the radius gradient instead of its negative reciprocal.

Examiner insight: show every line of algebra in a proof and say what each step uses. Answers that rely on a gap, such as "clearly", tend to lose credit.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics: Specification, Issue 3, April 2019, first teaching September 2018, published by Pearson Education Limited. This guide covers P2 sections 1.1, 1.2, 1.3, 2.1 and 3.1.
