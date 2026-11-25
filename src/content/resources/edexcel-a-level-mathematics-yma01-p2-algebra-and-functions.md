---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Algebra and functions (P2.2)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P2: Pure Mathematics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 2.2
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-algebra-and-functions-edexcel-alevel-maths"
description: "Algebraic division by (ax + b), the remainder theorem and the factor theorem for Edexcel IAL Maths Unit P2, with worked examples on factorising cubics."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 2 of Unit P2 (WMA12) in the Pearson Edexcel International Advanced Level Mathematics specification (YMA01, Issue 3). The content statement is a single line: "Simple algebraic division; use of the Factor Theorem and the Remainder Theorem." The guidance adds that "only division by (ax + b) or (ax − b) will be required", that students should know "if f(x) = 0 when x = b/a, then (ax − b) is a factor of f(x)", that cubics may need to be factorised, and that students should be familiar with the terms "quotient" and "remainder".

The [Unit P2 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-2/) shows where this sits in the unit, and the [guide to proof, the factor theorem and circles](/resources/edexcel-ial-mathematics-proof-the-factor-and-remainder-theorems-and-the/) gives a first set of examples. This page goes deeper into the mechanics: setting out a division with missing terms, dividing by a linear expression whose leading coefficient is not 1, and solving for unknown coefficients. Afterwards, use the [P2 algebra and functions revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-algebra-and-functions-revision-notes/) and the [P2 algebra and functions practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-algebra-and-functions-practice/).

## The language of division

When a polynomial f(x) (the **dividend**) is divided by a linear expression (ax − b) (the **divisor**), the result is a **quotient** q(x), one degree lower than f(x), and a **remainder** R, which is a constant:

f(x) ≡ (ax − b) q(x) + R

This identity is the key to the whole section. Every method below either finds q(x) and R directly, or uses the identity to find R without finding q(x).

## Long division by a linear expression

### Worked example 1: dividing by (x − 2)

**Divide 3x³ − 5x² + 4x − 7 by (x − 2).**

```
              3x² +  x  +  6
         ________________________
 x − 2  |  3x³ − 5x² + 4x − 7
           3x³ − 6x²
           ---------
                  x² + 4x
                  x² − 2x
                  -------
                        6x − 7
                        6x − 12
                        -------
                              5
```

At each stage divide the leading term (3x³ ÷ x = 3x²), multiply back, subtract, and bring down the next term. The quotient is **3x² + x + 6** and the remainder is **5**, so

3x³ − 5x² + 4x − 7 ≡ (x − 2)(3x² + x + 6) + 5.

**Check with the remainder theorem:** f(2) = 24 − 20 + 8 − 7 = 5.

**Missing terms.** If a power is absent, write it with a zero coefficient before dividing. To divide x³ − 7x − 6 by (x + 1), set it out as x³ + 0x² − 7x − 6. The quotient is x² − x − 6 with remainder 0. Leaving out the 0x² column is the most common reason long division goes wrong.

### Worked example 2: dividing by (2x + 1)

**Divide f(x) = 4x³ + 4x² − 5x + 3 by (2x + 1), giving the quotient and remainder.**

The method is the same, but each leading-term division is by 2x:

- 4x³ ÷ 2x = 2x². Subtract 2x²(2x + 1) = 4x³ + 2x², leaving 2x² − 5x.
- 2x² ÷ 2x = x. Subtract x(2x + 1) = 2x² + x, leaving −6x + 3.
- −6x ÷ 2x = −3. Subtract −3(2x + 1) = −6x − 3, leaving 6.

Quotient **2x² + x − 3**, remainder **6**:

4x³ + 4x² − 5x + 3 ≡ (2x + 1)(2x² + x − 3) + 6.

**Check:** f(−½) = 4(−⅛) + 4(¼) + 5/2 + 3 = −½ + 1 + 5/2 + 3 = 6.

### Comparing coefficients instead

You can also find the quotient by writing f(x) ≡ (2x + 1)(Ax² + Bx + C) + R and matching coefficients: x³ gives 2A = 4, so A = 2; x² gives A + 2B = 4, so B = 1; x gives B + 2C = −5, so C = −3; the constant gives C + R = 3, so R = 6. This is quick when the question asks for the result "in the form (2x + 1)(Ax² + Bx + C) + R".

## Why the remainder theorem works

Put x = b/a into the identity f(x) ≡ (ax − b) q(x) + R. The bracket (ax − b) becomes zero, so

f(b/a) = R.

So the remainder on dividing by (ax − b) is f(b/a), and on dividing by (ax + b) it is f(−b/a). The **factor theorem** is the special case R = 0: if f(b/a) = 0, then (ax − b) is a factor of f(x), and conversely.

## Factorising a cubic

Finding the first factor is the hard step. For a cubic with integer coefficients, sensible values to try are factors of the constant term, and fractions whose numerator divides the constant term and whose denominator divides the leading coefficient.

### Worked example 3: factorise and solve

**f(x) = 2x³ − 3x² − 11x + 6. Factorise f(x) fully and hence solve f(x) = 0.**

The constant term is 6, so try ±1, ±2, ±3, ...

- f(1) = 2 − 3 − 11 + 6 = −6, not zero
- f(3) = 54 − 27 − 33 + 6 = 0, so (x − 3) is a factor

Divide (or compare coefficients): 2x³ − 3x² − 11x + 6 ≡ (x − 3)(2x² + 3x − 2). The quadratic factorises: 2x² + 3x − 2 = (2x − 1)(x + 2). So

f(x) = (x − 3)(2x − 1)(x + 2)

and f(x) = 0 when **x = 3, x = ½ or x = −2**.

"Factorise fully" means every factor is linear, or a quadratic that cannot be factorised further. If the quadratic factor has a negative discriminant, say so: that shows the cubic has only one real root.

## Unknown coefficients

When a question gives a factor and a remainder, each piece of information becomes one equation.

### Worked example 4: two conditions, two unknowns

**f(x) = 2x³ + px² + qx − 6, where p and q are constants. (x + 3) is a factor of f(x), and when f(x) is divided by (x − 1) the remainder is 12. Find p and q, and factorise f(x) fully.**

Factor theorem: f(−3) = 0, so −54 + 9p − 3q − 6 = 0, giving 9p − 3q = 60, or **3p − q = 20**.

Remainder theorem: f(1) = 12, so 2 + p + q − 6 = 12, giving **p + q = 16**.

Adding the two equations: 4p = 36, so **p = 9** and **q = 7**.

Then f(x) = 2x³ + 9x² + 7x − 6 = (x + 3)(2x² + 3x − 2) = (x + 3)(2x − 1)(x + 2).

**Check** the remainder: f(1) = 2 + 9 + 7 − 6 = 12, as required.

## Linking factors to graphs

Each linear factor (ax − b) gives a point where the graph of y = f(x) meets the x-axis, at x = b/a. A repeated factor such as (x − 1)² means the curve touches the axis at x = 1 without crossing. The constant term gives the y-intercept. These facts let you sketch a factorised cubic using the Unit P1 graph skills, and they are often the final part of a factor theorem question.

## Common mistakes

- **Wrong sign in the substitution.** For the factor (2x + 1), substitute x = −½, not x = ½.
- **Dropping zero coefficients** in long division, as in x³ − 7x − 6.
- **Stopping too early.** Finding one factor and the quadratic quotient is not "factorise fully" if the quadratic itself factorises.
- **Confusing the quotient with the remainder.** The quotient is a polynomial; the remainder is a single number when dividing by a linear expression.
- **Arithmetic with fractions.** f(−½) for a cubic involves eighths and quarters; write each term separately before adding.
- **Forgetting the check.** After finding unknown coefficients, substituting back takes seconds and catches sign errors.

## Exam technique

- **"Use the factor theorem to show that (x − 3) is a factor"** needs the substitution f(3) = 0 written out, followed by a conclusion: "so (x − 3) is a factor". Long division alone does not use the factor theorem.
- **"Find the remainder"** without "divide" means the remainder theorem is enough: one substitution, one answer.
- **"Hence factorise fully"** means build on the factor just found. Show the quadratic quotient, then factorise it.
- **"Hence solve"** usually follows a factorisation: give every root, including fractions.
- **"Show that"** questions give the answer; your working must reach it without skipping steps.

## More resources on this topic

- [P2 algebra and functions revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-algebra-and-functions-revision-notes/)
- [P2 algebra and functions practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-algebra-and-functions-practice/)
- [Proof, the factor and remainder theorems and circles](/resources/edexcel-ial-mathematics-proof-the-factor-and-remainder-theorems-and-the/)
- [Simultaneous equations, inequalities, polynomials and graphs (Unit P1)](/resources/edexcel-ial-mathematics-simultaneous-equations-inequalities-polynomials-graph/)
- [Partial fractions in Unit P4](/resources/edexcel-a-level-mathematics-yma01-p4-algebra-and-functions/)
