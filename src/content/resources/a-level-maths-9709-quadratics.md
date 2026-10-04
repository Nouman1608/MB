---
title: "Cambridge International AS & A Level Mathematics 9709: Quadratics -- Study Guide"
seoTitle: "Cambridge 9709 Quadratics Study Guide (Pure Maths 1)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Quadratics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
    subtopic: "quadratics-cambridge-alevel-maths"
description: "Every 9709 section 1.1 Quadratics outcome taught with worked examples: completed square, discriminant, inequalities, simultaneous and disguised quadratics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

This study guide teaches section 1.1 Quadratics of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (June and November series, plus March in India). Section 1.1 is part of Pure Mathematics 1, which is examined on Paper 1 (1 hour 50 minutes, 75 marks) and is compulsory for both AS Level and A Level. Each 1.1 outcome has its own section below. You may use a scientific calculator in every 9709 paper, but you must show your working.

Course hub: [Cambridge A Level Mathematics](/boards/cambridge/a-level/mathematics/) · Printable checklist: [9709 checklist](/checklists/cambridge/a-level/mathematics/) · Recall: [Quadratics revision notes](/resources/a-level-mathematics-quadratics-revision-notes/) · Practise: [Quadratics practice questions](/resources/a-level-mathematics-quadratics-practice/)

## What this subtopic covers

| Syllabus 1.1 outcome | What you must be able to do | Paper |
|---|---|---|
| Completing the square | Write ax² + bx + c in completed square form and use it, e.g. to find the vertex or sketch the graph | Paper 1 |
| The discriminant | Find b² − 4ac and use it, e.g. to find the number of real roots; know the term "repeated root" | Paper 1 |
| Equations and inequalities | Solve quadratic equations and inequalities in one unknown by factorising, completing the square and the formula | Paper 1 |
| Simultaneous equations | Solve by substitution a pair of equations, one linear and one quadratic | Paper 1 |
| Disguised quadratics | Recognise and solve equations in x that are quadratic in some function of x | Paper 1 |

This guide uses different examples from the revision notes and goes further on negative leading coefficients, k in the x² coefficient, simultaneous equations and trigonometric quadratics. For all eight Pure Mathematics 1 sections, see the [Pure Mathematics 1 guide](/resources/a-level-mathematics-pure-mathematics-1-quadratics/).

## 1. Completing the square

### The idea

Any quadratic ax² + bx + c can be written as a(x + p)² + q. The squared bracket is never negative, so the form tells you at once:

- the vertex is (−p, q)
- the line of symmetry is x = −p
- if a > 0, q is the least value of the expression; if a < 0, q is the greatest value

### Method when a is negative

1. Take a out of the x² and x terms only. Leave c outside.
2. Inside the bracket, halve the coefficient of x and complete the square.
3. Multiply back out, remembering the subtracted square is multiplied by a.

### Worked example 1: vertex and sketch

Express −2x² + 8x + 3 in the form a(x + p)² + q. Hence sketch y = −2x² + 8x + 3.

```
-2x^2 + 8x + 3 = -2(x^2 - 4x) + 3
               = -2[(x - 2)^2 - 4] + 3
               = -2(x - 2)^2 + 8 + 3
               = -2(x - 2)^2 + 11
```

So a = −2, p = −2, q = 11.

- a < 0, so the graph is an upside-down parabola with a **maximum** at the vertex **(2, 11)**.
- The y-intercept is 3 (put x = 0).
- For the x-intercepts, set the completed form to zero: (x − 2)² = 11/2, so x = 2 ± √(11/2) = 2 ± (√22)/2. That is about −0.345 and 4.35.

Sketch a ∩ shape and label the vertex and all three intercepts. Note that −2 × −4 = +8: this sign change is where most slips happen.

### Worked example 2: using a completed square form

Find the greatest value of 5/(x² − 4x + 7).

```
x^2 - 4x + 7 = (x - 2)^2 + 3
```

The denominator is never less than 3, and equals 3 when x = 2. A fraction with a positive numerator is largest when its positive denominator is smallest, so the greatest value is **5/3**, at x = 2.

## 2. The discriminant

For ax² + bx + c = 0 the discriminant is b² − 4ac.

| Discriminant | Roots of ax² + bx + c = 0 | Graph of y = ax² + bx + c |
|---|---|---|
| b² − 4ac > 0 | two distinct real roots | crosses the x-axis twice |
| b² − 4ac = 0 | one **repeated root** (two equal roots) | touches the x-axis once |
| b² − 4ac < 0 | no real roots | does not meet the x-axis |

"Real roots" with no other word (for example "the equation has real roots") means b² − 4ac ≥ 0.

### Worked example 3: a repeated root

The equation kx² − 4x + (k − 3) = 0 has a repeated root. Find the possible values of k and the repeated root in each case.

```
b^2 - 4ac = (-4)^2 - 4(k)(k - 3)
          = 16 - 4k^2 + 12k
          = -4(k^2 - 3k - 4)
          = -4(k - 4)(k + 1)
```

Set it equal to zero: **k = 4 or k = −1**.

- k = 4: 4x² − 4x + 1 = (2x − 1)² = 0, so the repeated root is **x = 1/2**.
- k = −1: −x² − 4x − 4 = −(x + 2)² = 0, so the repeated root is **x = −2**.

### Worked example 4: two distinct real roots

For the same equation, find the set of values of k for which there are two distinct real roots.

You need −4(k − 4)(k + 1) > 0. Divide by −4 and reverse the sign: (k − 4)(k + 1) < 0, so −1 < k < 4.

There is one more check. When k = 0 the x² term disappears and the equation becomes −4x − 3 = 0, which is linear with only one root. So the answer is **−1 < k < 4, k ≠ 0**. Whenever k appears in the coefficient of x², ask what happens when that coefficient is zero.

### Always negative

The same thinking gives conditions for a quadratic to have one sign for every x. For example, −x² + kx − 9 is negative for all x when the curve is ∩-shaped (a = −1 < 0, true) and never meets the x-axis: k² − 36 < 0, giving **−6 < k < 6**.

## 3. Solving quadratic equations and inequalities

### Choosing a method

- **Factorise** when the factors are easy to see.
- **Complete the square** when the question has just asked for the completed form, or when you want exact roots from it.
- **Use the formula** x = (−b ± √(b² − 4ac))/(2a) when it will not factorise. The formula is printed in the Algebra section of the list of formulae (MF19) you are given in the exam.

Give exact answers (fractions or surds) unless the question asks for decimals.

### Worked example 5: same answer, two methods

Solve 4x² − 12x + 7 = 0, giving exact answers.

By completing the square:

```
4x^2 - 12x + 7 = 4(x - 3/2)^2 - 9 + 7 = 4(x - 3/2)^2 - 2
4(x - 3/2)^2 = 2
(x - 3/2)^2 = 1/2
x = 3/2 ± 1/√2 = 3/2 ± (√2)/2
```

By the formula, with a = 4, b = −12, c = 7:

```
x = (12 ± √(144 - 112)) / 8 = (12 ± √32) / 8 = (12 ± 4√2) / 8
```

Both give **x = (3 ± √2)/2**, about 0.793 and 2.21.

### Inequalities: the method

1. Rearrange so one side is zero.
2. Find the critical values by solving the equation.
3. Sketch the parabola, or think about its shape.
4. Read off the region you need and write it with the correct inequality signs.

### Worked example 6: three types

**(a)** Solve x(2x − 3) ≥ 5.

Expand and rearrange: 2x² − 3x − 5 ≥ 0, which factorises to (2x − 5)(x + 1) ≥ 0. Critical values −1 and 5/2. The ∪-shaped curve is on or above the axis outside the roots: **x ≤ −1 or x ≥ 5/2**. The inequality is "≥", so the end points are included.

**(b)** Solve 4 + 3x − x² > 0.

Multiply by −1 and reverse the sign: x² − 3x − 4 < 0, so (x − 4)(x + 1) < 0. The curve is below the axis between the roots: **−1 < x < 4**.

**(c)** Solve x² − 4x − 1 < 0.

It does not factorise. The formula gives the critical values x = 2 ± √5. The region is between them: **2 − √5 < x < 2 + √5**.

A warning: never divide both sides of an inequality by x. From x² > 3x, dividing by x gives x > 3 and loses the other half of the answer. Instead write x² − 3x > 0, so x(x − 3) > 0, giving **x < 0 or x > 3**.

## 4. Simultaneous equations: one linear, one quadratic

### Method

1. Make one variable the subject of the linear equation. Choose the one that avoids fractions.
2. Substitute into the quadratic equation and expand carefully.
3. Solve the resulting quadratic.
4. Substitute each value back into the **linear** equation to find the partner value.
5. Give the answers as pairs.

### Worked example 7

Solve the simultaneous equations x + 2y = 5 and x² + xy + y² = 7.

From the linear equation, x = 5 − 2y. Substitute:

```
(5 - 2y)^2 + (5 - 2y)y + y^2 = 7
25 - 20y + 4y^2 + 5y - 2y^2 + y^2 = 7
3y^2 - 15y + 18 = 0
y^2 - 5y + 6 = 0
(y - 2)(y - 3) = 0
```

So y = 2 or y = 3. Back into x = 5 − 2y: y = 2 gives x = 1, and y = 3 gives x = −1.

**Solutions: x = 1, y = 2 and x = −1, y = 3.** Check both pairs in the quadratic equation: 1 + 2 + 4 = 7 and 1 − 3 + 9 = 7.

### What the number of solutions tells you

The discriminant of the step-3 quadratic tells you how many times the line meets the curve. For example, y = 4 − x and xy = 4 give x² − 4x + 4 = 0, which is (x − 2)² = 0. The repeated root means the line **touches** the curve at the single point (2, 2). Problems with an unknown k in the line belong to section 1.3; see the [coordinate geometry guide](/resources/a-level-mathematics-pure-mathematics-1-coordinate-geometry/).

## 5. Equations quadratic in a function of x

### Recognising them

Look for an equation made of a constant, some expression f(x), and the square of that expression. Common pairs:

| Equation contains | Substitute |
|---|---|
| x⁴ and x² | u = x² |
| x and √x | u = √x |
| sin²x and sin x (or cos, tan) | u = sin x |

Solve the quadratic in u, then go back to x. Before you go back, reject any value of u that the function cannot take: x² and √x cannot be negative, and sin x and cos x must lie between −1 and 1.

### Worked example 8: a quartic

Solve 2x⁴ + 7x² − 4 = 0.

Let u = x²: 2u² + 7u − 4 = 0, so (2u − 1)(u + 4) = 0, giving u = 1/2 or u = −4.

x² = −4 has no real solutions, so reject it. From x² = 1/2, **x = ±1/√2 = ±(√2)/2**. Both signs are needed.

### Worked example 9: a square root

Solve 3x − 5√x − 2 = 0.

Let u = √x, so x = u²: 3u² − 5u − 2 = 0, giving (3u + 1)(u − 2) = 0, so u = 2 or u = −1/3.

√x cannot be negative, so reject u = −1/3. From √x = 2, **x = 4**. Check: 12 − 10 − 2 = 0.

### Worked example 10: a trigonometric quadratic

Solve 2cos²x − cos x − 1 = 0 for 0° ≤ x ≤ 360°.

Let u = cos x: 2u² − u − 1 = 0, so (2u + 1)(u − 1) = 0, giving cos x = 1 or cos x = −1/2.

- cos x = 1 gives x = 0° and x = 360°.
- cos x = −1/2 gives x = 120° and x = 240°.

**x = 0°, 120°, 240°, 360°.** Finding every angle in the range uses the graphs and symmetry from 1.5; see the [trigonometry guide](/resources/a-level-maths-9709-pure-mathematics-1-trigonometry/).

## Using your calculator

The syllabus states that no marks are given for unsupported answers from a calculator. If you check roots with an equation-solving mode, still write the factorisation, completed square or substituted formula.

## Common errors

- Not multiplying the subtracted square by a, especially when a is negative.
- Writing the vertex of a(x − 2)² + q as (−2, q).
- Leaving out k ≠ 0 when k is in the coefficient of x².
- Using "> 0" for "real roots", which needs "≥ 0".
- Not reversing the inequality after multiplying by a negative number, or dividing by x.
- Substituting back into the quadratic instead of the linear equation, which can create wrong pairs.
- Stopping at u, keeping an impossible u, or dropping the negative root of x² = c.

## Where to go next

- [Quadratics revision notes](/resources/a-level-mathematics-quadratics-revision-notes/) and [practice questions](/resources/a-level-mathematics-quadratics-practice/)
- [Pure Mathematics 1 mixed practice](/resources/a-level-mathematics-pure-1-mixed-practice/)
- [Functions revision notes](/resources/a-level-maths-9709-pure-mathematics-1-functions-revision-notes/), where completed squares give ranges and inverses
- The free [AS Level diagnostic](/practice/9709/diagnostic/as/) and the [9709 self-check bank](/practice/9709/)

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4), published by Cambridge Assessment International Education. Section 1 Pure Mathematics 1, 1.1 Quadratics.
