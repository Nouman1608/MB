---
title: "Pearson Edexcel International Advanced Level Mathematics: Proof, factor theorem and circles (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths P2 Proof, Factor, Circles Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes on proof, the factor and remainder theorems and circles for Pearson Edexcel International Advanced Level Mathematics, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense P2 sections 1.1 to 1.3 (proof), 2.1 (factor and remainder theorems) and 3.1 (the circle) from the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, April 2019. Read the [study guide](/resources/edexcel-ial-mathematics-proof-the-factor-and-remainder-theorems-and-the/) for the full explanations, then test yourself with the [practice set](/resources/edexcel-ial-mathematics-proof-the-factor-and-remainder-theorems-and-the-practice/).

Related pages: the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [checklist to print](/checklists/edexcel/a-level/mathematics/), the [free diagnostics](/diagnostics/), the [Pure Mathematics 2 revision notes](/resources/edexcel-a-level-mathematics-pure2-revision-notes/) and [exam preparation advice](/resources/edexcel-ial-mathematics-exam-preparation/).

## Key results

| Topic | Result |
|---|---|
| Even integer | 2n |
| Odd integer | 2n + 1 |
| Three consecutive integers | n, n + 1, n + 2 |
| Remainder theorem | The remainder on dividing f(x) by (ax + b) equals f(−b/a) |
| Factor theorem | f(−b/a) = 0 exactly when (ax + b) divides f(x) exactly |
| Division | f(x) = (divisor) × (quotient) + remainder |
| Circle | Centre (a, b) and radius r give (x − a)² + (y − b)² = r² |
| Semicircle | A diameter subtends 90° at any other point on the circle |
| Chord | A line drawn from the centre perpendicular to a chord halves it |
| Tangent | Tangent and radius meet at 90° at the point of contact |

## Proof: method in steps

1. State what the letters stand for, for example "let n be an integer".
2. Write each step so it follows from the one before.
3. Finish with a sentence that links back to the claim, such as "so the expression is a multiple of 4".

**Exhaustion.** List cases that cover every possibility, with no gaps. Check each case. Say that the cases are complete.

**Counter example.** Pick one value that meets the stated conditions, work out both sides, and say clearly why the statement fails.

**Quick reminder.** Prove that n² + n is always even.

```
n(n + 1) is the product of consecutive integers.
Case 1: n even, so n(n + 1) is even × odd = even.
Case 2: n odd, so n + 1 is even, and n(n + 1) is odd × even = even.
Both cases give an even number. ∎
```

## Factor and remainder: method in steps

1. Write down f(x).
2. Choose the value from the divisor: for (ax + b) use x = −b/a.
3. Substitute. A zero is a factor. A non-zero value is the remainder.
4. For a full factorisation, divide by the factor found and factorise the quadratic.
5. For unknown coefficients, form one equation for each piece of information and solve them together.

**Choosing trial values.** If the leading coefficient is 1, try the factors of the constant term, positive and negative. If it is not 1, try fractions with a numerator dividing the constant and a denominator dividing the leading coefficient.

**Reminder 1.** Factorise f(x) = x³ − 4x² + x + 6.

f(−1) = −1 − 4 − 1 + 6 = 0, which means (x + 1) divides f(x). Dividing gives x² − 5x + 6 = (x − 2)(x − 3).

**f(x) = (x + 1)(x − 2)(x − 3)**

**Reminder 2.** Factorise f(x) = 2x³ + 3x² − 17x + 12.

Try x = 3/2: f(3/2) = 27/4 + 27/4 − 51/2 + 12 = 0. So (2x − 3) is a factor.

f(x) = (2x − 3)(x² + 3x − 4) = **(2x − 3)(x − 1)(x + 4)**

**Reminder 3.** Find the remainder when x³ − 5x + 2 is divided by (x + 3).

f(−3) = −27 + 15 + 2 = **−10**

**Reminder 4 (quotient).** Divide x³ + 2x² − 5x − 6 by (x + 1).

f(−1) = −1 + 2 + 5 − 6 = 0, so nothing is left over. The quotient is **x² + x − 6**, and the full factorisation is (x + 1)(x − 2)(x + 3).

**Reminder 5 (unknown coefficient).** The polynomial f(x) = x³ + kx² − x − 10 has a factor (x − 2). Find k.

f(2) = 8 + 4k − 2 − 10 = 4k − 4 = 0, so **k = 1**.

If a question gives two conditions, such as a factor and a remainder, you get two equations in two unknowns. Solve them simultaneously, then check by substituting back.

## Circle: method in steps

**From centre and radius to equation.** Put the centre into the brackets with the opposite signs and write r² on the right.

Centre (−2, 4), radius 3: **(x + 2)² + (y − 4)² = 9**

**From expanded form to centre and radius.** Complete the square separately for x and y, then move the constants to the right.

x² + y² − 2x + 6y − 6 = 0
→ (x − 1)² − 1 + (y + 3)² − 9 − 6 = 0
→ (x − 1)² + (y + 3)² = 16

Centre (1, −3), radius 4.

**From a diameter.** The centre is the midpoint of the diameter and the radius is half its length. Endpoints (1, 2) and (7, 10) give centre (4, 6) and radius ½√(36 + 64) = 5.

**Is a point on the circle?** Substitute. If the left side equals r², the point is on the circle. If it is smaller, the point is inside. If it is larger, the point is outside.

### Properties in action

| You are given | Use | Method |
|---|---|---|
| A diameter AB and a point P on the circle | Angle in a semicircle | Gradient PA × gradient PB = −1 |
| A chord and the centre | Perpendicular bisects the chord | Midpoint of chord joined to centre has gradient perpendicular to the chord |
| A point on the circle and a tangent wanted | Radius perpendicular to tangent | Find the radius gradient, flip and negate, use y − y₁ = m(x − x₁) |
| A line and a circle | Intersection | Substitute the line into the circle, solve the quadratic |

For the circle with centre (0, 0) and radius 5, the tangent at (3, 4) has gradient −3/4, because the radius gradient is 4/3.

### Worked reminder: tangent

The circle (x + 1)² + (y − 2)² = 20 passes through P(3, 4). Find the tangent at P.

```
Check: (3 + 1)² + (4 − 2)² = 16 + 4 = 20, so P is on the circle.
Centre (−1, 2). Radius gradient = (4 − 2)/(3 + 1) = 1/2.
Tangent gradient = −2.
y − 4 = −2(x − 3)  →  2x + y = 10
```

The tangent is **2x + y = 10**. Always check the point is on the circle before you use it.

### Worked reminder: where a line meets a circle

If the line meets the circle at two points, substituting gives a quadratic with two roots. One repeated root means the line is a tangent. No real roots means the line misses the circle. Find the coordinates by substituting each x back into the line, not into the circle, so you do not create extra points.

### Must-know distinctions

- **Factor and remainder.** A zero remainder means a factor. A non-zero remainder means no factor.
- **Quotient and remainder.** The quotient is the polynomial part of the division. The remainder is the constant left over.
- **Disproof and proof.** A single counter example kills a claim. A pile of confirming cases never establishes it.
- **r and r².** The right side of the circle equation is r², so take a square root for the radius.
- **Radius gradient and tangent gradient.** Multiply them and the answer is −1.

## Quick self-test

1. Find the remainder when 2x³ − 3x² + x − 4 is divided by (x − 3).
2. Find the remainder when the same polynomial is divided by (2x − 1).
3. Is (x + 2) a factor of x³ + 4x² + x − 6? Factorise it fully.
4. Write down the centre and radius of x² + y² − 2x + 6y − 6 = 0.
5. Write the equation of the circle with centre (−2, 4) and radius 3.
6. Give a counter example to "2n + 1 is prime for all positive integers n".
7. Find the gradient of the tangent at (3, 4) to the circle x² + y² = 25.
8. A chord has ends (−2, 1) and (6, 5). Find the gradient of the perpendicular bisector.
9. Find the centre and radius of the circle with diameter ends (1, 2) and (7, 10).
10. Write down the quotient when x³ + 2x² − 5x − 6 is divided by (x + 1).

### Answers

1. f(3) = 54 − 27 + 3 − 4 = **26**
2. f(1/2) = 1/4 − 3/4 + 1/2 − 4 = **−4**
3. f(−2) = −8 + 16 − 2 − 6 = 0, so yes. **(x − 1)(x + 2)(x + 3)**
4. **Centre (1, −3), radius 4**
5. **(x + 2)² + (y − 4)² = 9**
6. n = 4 gives 9 = 3 × 3, so **n = 4** (n = 1 gives 3, n = 2 gives 5 and n = 3 gives 7, all prime)
7. Radius gradient 4/3, so the tangent gradient is **−3/4**
8. Chord gradient = 4/8 = 1/2, so the perpendicular has gradient **−2** and passes through the midpoint (2, 3)
9. **Centre (4, 6), radius 5**
10. **x² + x − 6**

## Where marks are usually lost

- Using the wrong sign for the centre, for example reading (x + 2)² as a centre at x = 2.
- Giving the radius as the right-hand number without taking the square root.
- Substituting x = b/a instead of x = −b/a for a divisor (ax + b).
- Stopping at one linear factor and leaving the quadratic unfactorised when the question says "factorise fully".
- Starting a proof with the result you are trying to reach and working backwards without justifying each move.
- Giving cases for an exhaustion proof that miss one possibility, or skipping the conclusion.
- Picking a counter example that does not satisfy the stated condition, or not showing the arithmetic.
- Using the radius gradient for the tangent, or forgetting to rearrange the tangent into the form asked for.
- Not completing the square on both variables when the circle equation is in expanded form.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics: Specification, Issue 3, April 2019, first teaching September 2018, published by Pearson Education Limited. These notes cover P2 sections 1.1, 1.2, 1.3, 2.1 and 3.1.
