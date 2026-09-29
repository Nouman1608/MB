---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 2 Algebra -- Study Guide"
seoTitle: "Cambridge 9709 Pure Maths 2 Algebra Study Guide (P2)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 2: Algebra"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 37
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
    subtopic: "algebra-cambridge-alevel-maths-2"
description: "Study guide to Cambridge 9709 Paper 2 section 2.1 Algebra: the modulus function, polynomial division, and the factor and remainder theorems, fully worked."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-28
featured: false
---

This guide teaches section **2.1 Algebra** of topic 2, Pure Mathematics 2, in the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). Pure Mathematics 2 is examined on **Paper 2** (1 hour 15 minutes, 50 marks, 6 to 8 structured questions, 40% of the AS Level). Paper 2 is offered only as part of AS Level, on the Pure Mathematics only route (Paper 1 and Paper 2). Paper 1 content is assumed and can be tested inside a Paper 2 question.

Course hub: [Cambridge A Level Mathematics](/boards/cambridge/a-level/mathematics/). Printable list: [9709 checklist](/checklists/cambridge/a-level/mathematics/). To find your gaps first, take the [AS Level 10-minute diagnostic](/practice/9709/diagnostic/as/), or try the [9709 self-check bank](/practice/9709/).

When you have worked through this guide, condense it with the [2.1 Algebra revision notes](/resources/a-level-maths-9709-pure-mathematics-2-algebra-revision-notes/) and test yourself on the [2.1 Algebra practice questions](/resources/a-level-maths-9709-pure-mathematics-2-algebra-practice/).

## What this unit covers

| Syllabus 2.1 | What you must be able to do |
|---|---|
| Modulus | Understand the meaning of \|x\|; sketch the graph of y = \|ax + b\| |
| Modulus equations and inequalities | Use \|a\| = \|b\| ⇔ a² = b² and \|x − a\| < b ⇔ a − b < x < a + b |
| Polynomial division | Divide a polynomial of degree up to 4 by a linear or quadratic polynomial; identify the quotient and remainder (which may be zero) |
| Factor and remainder theorems | Find factors and remainders, solve polynomial equations, find unknown coefficients, including factors (ax + b) where a ≠ 1 |

The syllabus notes that graphs of y = |f(x)| and y = f(|x|) for non-linear f are **not** included. Only straight-line graphs inside the modulus are needed.

The same three outcomes also open section 3.1 of Pure Mathematics 3. The [Pure Mathematics 2 overview](/resources/a-level-mathematics-pure-mathematics-2/) shows how 2.1 sits beside the other five Paper 2 sections.

**Calculator.** A scientific calculator is allowed in every 9709 paper, but no marks are given for unsupported answers from a calculator. Algebra questions are about the working: show every case, every substitution and every division step. The list of formulae (MF19) gives the quadratic formula but none of the results in this unit, so you must recall them.

## The modulus function

The modulus |x| is the size of x, ignoring its sign:

```
|x| = x    when x ≥ 0
|x| = −x   when x < 0
```

So |7| = 7, |−7| = 7 and |0| = 0. The modulus is never negative. |x − a| is the distance between x and a on the number line. That idea explains the inequality rule later.

### Sketching y = |ax + b|

Draw the straight line y = ax + b. Any part below the x-axis is reflected in the x-axis. The result is a V shape with its vertex on the x-axis where ax + b = 0.

*Worked example 1.* Sketch y = |2x − 5|.

```
Vertex: 2x − 5 = 0  →  x = 5/2, so vertex (5/2, 0)
y-intercept: x = 0  →  y = |−5| = 5, so (0, 5)
Right arm: y = 2x − 5 (gradient 2) for x ≥ 5/2
Left arm:  y = 5 − 2x (gradient −2) for x < 5/2
```

Label the vertex and the y-intercept. Both arms are straight and symmetrical about x = 5/2.

### Equations with a modulus on both sides

Both sides are non-negative, so squaring cannot create a false solution:

```
|a| = |b|  ⇔  a² = b²
```

*Worked example 2.* Solve |2x + 1| = |x − 4|.

```
(2x + 1)² = (x − 4)²
4x² + 4x + 1 = x² − 8x + 16
3x² + 12x − 15 = 0
x² + 4x − 5 = 0
(x + 5)(x − 1) = 0   →   x = −5 or x = 1
```

Check: x = 1 gives |3| = |−3|, and x = −5 gives |−9| = |−9|. Both work.

Two linear cases (2x + 1 = x − 4 and 2x + 1 = −(x − 4)) give the same answers. Squaring is safer when you might forget a case.

### Equations with a modulus on one side only

When the other side is an expression in x, it could be negative, and a modulus can never equal a negative number. Do **not** square blindly. Solve both linear cases and check each answer in the original equation.

*Worked example 3.* Solve |x − 1| = 2x + 4.

```
Case 1:  x − 1 = 2x + 4      →  x = −5
         Check: |−6| = 6 but 2(−5) + 4 = −6.  Reject.
Case 2:  −(x − 1) = 2x + 4   →  −x + 1 = 2x + 4  →  x = −1
         Check: |−2| = 2 and 2(−1) + 4 = 2.  Accept.
```

The only solution is **x = −1**. A quick sketch of the V and the line y = 2x + 4 shows one intersection, which confirms it.

### Inequalities with a modulus

Because |x − a| is a distance, |x − a| < b says "x is less than b away from a":

```
|x − a| < b   ⇔   a − b < x < a + b
|x − a| > b   ⇔   x < a − b  or  x > a + b
```

*Worked example 4.* Solve (a) |3x − 4| ≤ 5 and (b) |x + 2| > 3.

```
(a)  −5 ≤ 3x − 4 ≤ 5
     −1 ≤ 3x ≤ 9
     −1/3 ≤ x ≤ 3

(b)  x + 2 < −3  or  x + 2 > 3
     x < −5      or  x > 1
```

In (a) the answer is one interval. In (b) it is two pieces joined by "or". Writing "−5 > x > 1" is wrong: no number is both less than −5 and greater than 1.

*Worked example 5.* Solve |x + 3| > 2x.

Here the right-hand side is not a modulus, so work from a sketch. Draw the V of y = |x + 3| (vertex (−3, 0)) and the line y = 2x.

```
Boundary, case 1:  x + 3 = 2x        →  x = 3
                   Check: |6| = 6 = 2(3).  Valid.
Boundary, case 2:  −(x + 3) = 2x     →  x = −1
                   Check: |2| = 2 but 2(−1) = −2.  Not a meeting point.
```

The graphs meet only once, at x = 3. To the left of x = 3 the V is above the line (test x = 0: 3 > 0). To the right the line is above the V (test x = 5: 8 > 10 is false). So **x < 3**.

If you had squared both sides here you would get two boundary values, −1 and 3, and very likely a wrong answer. Square only when both sides are moduli, or when you know both sides are non-negative.

## Polynomial division

Division of polynomials works like long division of numbers. When p(x) is divided by a divisor d(x):

```
p(x) ≡ d(x) × q(x) + r(x)
```

q(x) is the quotient and r(x) the remainder. The remainder always has a lower degree than the divisor: a constant when you divide by a linear polynomial, and of the form Ax + B (possibly just a constant, or zero) when you divide by a quadratic.

*Worked example 6.* Find the quotient and remainder when 2x³ − 5x² + 4x + 6 is divided by (x − 3).

```
                2x² +  x  +  7
         ┌──────────────────────
 x − 3   │ 2x³ − 5x² + 4x + 6
           2x³ − 6x²
           ─────────
                  x² + 4x
                  x² − 3x
                  ───────
                        7x + 6
                        7x − 21
                        ───────
                             27
```

Quotient **2x² + x + 7**, remainder **27**. Each line divides the leading term by x, multiplies back, and subtracts.

*Worked example 7.* Find the quotient and remainder when 2x⁴ − 3x³ + x² + 5x − 4 is divided by x² − x + 2.

Divide the leading term by x² each time.

```
Step 1:  2x⁴ ÷ x² = 2x²
         2x⁴ − 3x³ + x² + 5x − 4 − 2x²(x² − x + 2)  =  −x³ − 3x² + 5x − 4
Step 2:  −x³ ÷ x² = −x
         −x³ − 3x² + 5x − 4 − (−x)(x² − x + 2)     =  −4x² + 7x − 4
Step 3:  −4x² ÷ x² = −4
         −4x² + 7x − 4 − (−4)(x² − x + 2)          =  3x + 4
```

Degree of 3x + 4 is less than 2, so stop. Quotient **2x² − x − 4**, remainder **3x + 4**.

Keep every power of x in its own column. If a power is missing from p(x), write it with a zero coefficient (for example 0x²) so the subtraction lines up.

## The remainder theorem and the factor theorem

**Remainder theorem.** When p(x) is divided by (x − a), the remainder is p(a). When p(x) is divided by (ax + b), the remainder is p(−b/a).

**Factor theorem.** (x − a) is a factor of p(x) exactly when p(a) = 0. (ax + b) is a factor exactly when p(−b/a) = 0.

Both come from p(x) ≡ (x − a)q(x) + R: substitute x = a and the first term vanishes. Worked example 6 checks out: p(3) = 54 − 45 + 12 + 6 = 27, the same remainder.

### Finding unknown coefficients

Each condition gives one equation. Two unknowns need two conditions.

*Worked example 8.* p(x) = 2x³ + ax² + bx − 3. (2x + 1) is a factor of p(x), and the remainder when p(x) is divided by (x − 2) is 15. Find a and b, then solve p(x) = 0.

```
(2x + 1) is a factor, so p(−1/2) = 0:
   2(−1/8) + a(1/4) + b(−1/2) − 3 = 0
   multiply by 4:  −1 + a − 2b − 12 = 0   →   a − 2b = 13

Remainder 15 on dividing by (x − 2), so p(2) = 15:
   16 + 4a + 2b − 3 = 15   →   4a + 2b = 2   →   2a + b = 1

From the second equation b = 1 − 2a. Substitute:
   a − 2(1 − 2a) = 13  →  5a = 15  →  a = 3,  b = −5
```

So p(x) = 2x³ + 3x² − 5x − 3. Divide by (2x + 1) to get the quadratic factor: 2x³ + 3x² − 5x − 3 = (2x + 1)(x² + x − 3). The quadratic does not factorise, so use the quadratic formula:

```
x = (−1 ± √(1 + 12)) / 2 = (−1 ± √13) / 2
```

Solutions: **x = −1/2, x = (−1 + √13)/2, x = (−1 − √13)/2**. Leave the surds exact unless the question asks for decimals.

### Solving a cubic from scratch

When no factor is given, try small values that divide the constant term (and fractions ±c/d where d divides the leading coefficient) until one gives zero.

*Worked example 9.* Solve 2x³ − x² − 13x − 6 = 0.

```
q(1)  = 2 − 1 − 13 − 6 = −18    not zero
q(−1) = −2 − 1 + 13 − 6 = 4     not zero
q(−2) = −16 − 4 + 26 − 6 = 0    so (x + 2) is a factor

2x³ − x² − 13x − 6 = (x + 2)(2x² − 5x − 3)
                   = (x + 2)(2x + 1)(x − 3)
```

**x = −2, x = −1/2 or x = 3.** State the factor theorem result in words ("q(−2) = 0, so (x + 2) is a factor") before you divide.

The quadratic factor can also be found by comparing coefficients instead of long division: write 2x³ − x² − 13x − 6 ≡ (x + 2)(2x² + kx − 3), expand the x² terms, and get 4 + k = −1, so k = −5.

## Common errors

- Squaring an equation such as |x − 1| = 2x + 4, where one side can be negative, then keeping both roots without checking.
- Solving |x + 2| > 3 as −3 < x + 2 < 3. That interval is the answer to "< 3", not "> 3".
- Writing two separate intervals as one chain, such as −5 > x > 1.
- Sketching y = |ax + b| with a curved or rounded vertex, or putting the vertex at x = b/a instead of x = −b/a.
- Using p(1/2) instead of p(−1/2) for the factor (2x + 1), or p(2) instead of p(1/2) for (2x − 1).
- Dropping a missing power in long division, so the columns slip and every later line is wrong.
- Stopping the division too early or too late: the remainder must have lower degree than the divisor.
- Finding one factor of a cubic and then not factorising the quadratic quotient, so roots are missed.

## Where to go next

- Condense this unit: [Pure Mathematics 2 Algebra revision notes](/resources/a-level-maths-9709-pure-mathematics-2-algebra-revision-notes/)
- Test yourself: [Pure Mathematics 2 Algebra practice questions](/resources/a-level-maths-9709-pure-mathematics-2-algebra-practice/)
- Paper 2 as a whole: [Pure Mathematics 2 overview](/resources/a-level-mathematics-pure-mathematics-2/), [revision notes](/resources/a-level-mathematics-pure-mathematics-2-revision-notes/) and [mixed practice](/resources/a-level-mathematics-pure-mathematics-2-practice/)
- Paper 1 skills this unit relies on: [quadratics](/resources/a-level-mathematics-pure-mathematics-1-quadratics/) (factorising, the discriminant and the quadratic formula) and [coordinate geometry](/resources/a-level-mathematics-pure-mathematics-1-coordinate-geometry/) (straight lines for modulus sketches)
- If you continue to A Level: [Pure Mathematics 3 study guide](/resources/a-level-maths-9709-pure-mathematics-3/), where section 3.1 repeats these outcomes and adds partial fractions and the binomial expansion

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 2, Pure Mathematics 2 (for Paper 2): section 2.1 Algebra.
