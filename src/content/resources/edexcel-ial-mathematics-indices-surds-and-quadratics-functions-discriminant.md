---
title: "Pearson Edexcel International Advanced Level Mathematics: Indices, surds and quadratics (YMA01)"
seoTitle: "Edexcel IAL Maths P1 Indices, Surds, Quadratics Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Indices, surds and quadratics: functions, discriminant and completing the square"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 137
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-mathematics-1-edexcel-alevel-maths"
    subtopic: "p1-algebra-and-functions-edexcel-alevel-maths"
description: "Study guide to P1 indices, surds, quadratic graphs, the discriminant and completing the square for Edexcel International A Level Maths, fully worked."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide follows the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification (YMA01), Issue 3, April 2019. It covers the first five statements of Unit P1, topic 1 (Algebra and functions): topics 1.1 to 1.5. The specification lists P1 as a compulsory unit for IAS Mathematics, IAL Mathematics and Pure Mathematics, so every candidate meets this material. Simultaneous equations and inequalities (1.6 onwards) are taught elsewhere and are not repeated here.

Work through the guide in order, then use the [revision notes](/resources/edexcel-ial-mathematics-indices-surds-and-quadratics-functions-discriminant-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-indices-surds-and-quadratics-functions-discriminant-practice/). Tick off the topic on the [printable checklist](/checklists/edexcel/a-level/mathematics/), see the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/), or find weak spots with the [free 10-minute diagnostics](/diagnostics/).

## What this guide covers

| Spec reference | What you must be able to do |
|---|---|
| P1 1.1 | Use the laws of indices for all rational exponents, including the equivalence of a^(m/n) and (ⁿ√a)^m |
| P1 1.2 | Use and manipulate surds, including rationalising denominators |
| P1 1.3 | Work with quadratic functions and their graphs |
| P1 1.4 | Use the discriminant b² − 4ac (> 0, = 0, < 0) |
| P1 1.5 | Complete the square; solve quadratics by factorisation, formula, calculator and completing the square |

## 1.1 Laws of indices

The specification states three laws, which hold for every rational exponent:

```
a^m × a^n = a^(m+n)
a^m ÷ a^n = a^(m−n)
(a^m)^n   = a^(mn)
```

Three consequences follow. a⁰ = 1. a^(−n) = 1/aⁿ. And a^(1/n) is the nth root of a. The specification asks you to know that a^(m/n) equals (ⁿ√a)^m, which is also ⁿ√(a^m).

Take the root first. It keeps the numbers small and is much easier by hand.

**Example 1.** Evaluate (343/27)^(−2/3).

```
(343/27)^(−2/3) = (27/343)^(2/3)      negative power: flip the fraction
                = (∛(27/343))²        root first
                = (3/7)²
                = 9/49
```

**Example 2.** Write (8x⁹)^(2/3) ÷ (2x^(−1/2))³ in the form kx^n.

```
(8x⁹)^(2/3) = 8^(2/3) × x⁶ = 4x⁶
(2x^(−1/2))³ = 8x^(−3/2)
4x⁶ ÷ 8x^(−3/2) = (1/2) x^(6 − (−3/2)) = (1/2) x^(15/2)
```

Apply the power to the number and to every letter inside the bracket.

**Example 3.** Solve 2x^(3/2) = 432.

```
x^(3/2) = 216
x = 216^(2/3)        raise both sides to the power 2/3
  = (∛216)²
  = 6² = 36
```

To undo the power m/n, raise both sides to the power n/m. Check: 2 × 36^(3/2) = 2 × 216 = 432.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--01-root-then-power.webp" width="900" height="880" alt="Three step-by-step pipelines. 64 to the 2/3: cube root gives 4, square gives 16. 1296 to the 3/4: fourth root gives 6, cube gives 216. (27/8) to the minus 2/3: flip to 8/27, cube root gives 2/3, square gives 4/9. A note reminds that 2 to the minus 3 is 1/8, not minus 8." loading="lazy">
  <figcaption>For a fractional index take the root first, then the power; a negative index flips the fraction.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--02-same-base-indices.webp" width="900" height="920" alt="Two straight lines show the indices of 3 on each side of 9^(x+1) = 27^(2x-1): 2x+2 and 6x-3. They cross at x = 5/4 where both equal 4.5, which is the solution." loading="lazy">
  <figcaption>When both sides are powers of the same base, equate the indices.</figcaption>
</figure>


## 1.2 Surds

A surd is an irrational root, such as √2 or ∛5, which has no exact form as a fraction of integers. Keep it in exact form unless a question asks for a decimal. The rules are:

```
√a × √b = √(ab)        √a ÷ √b = √(a/b)        (√a)² = a
```

Note that √(a + b) is not √a + √b.

**Simplifying.** Pull out the largest square factor: √72 = √(36 × 2) = 6√2.

**Adding and subtracting.** Simplify first, then collect like surds.

**Example 4.** Simplify √200 + 3√18 − √50.

```
√200 = 10√2      3√18 = 3 × 3√2 = 9√2      √50 = 5√2
Total = 10√2 + 9√2 − 5√2 = 14√2
```

**Multiplying brackets.** Expand as normal, then use (√a)² = a.

**Example 5.** Expand and simplify (3 + 2√5)(4 − √5).

```
= 12 − 3√5 + 8√5 − 2(√5)²
= 12 − 3√5 + 8√5 − 10
= 2 + 5√5
```

### Rationalising the denominator

The specification says you should be able to rationalise denominators. There are two cases.

**One surd on the bottom.** Multiply top and bottom by that surd.

**Example 6.** Write 21/√6 with a rational denominator.

```
21/√6 = (21 × √6)/(√6 × √6) = 21√6/6 = 7√6/2
```

**Two terms on the bottom.** Multiply top and bottom by the conjugate, which is the same expression with the sign between the terms changed. This uses (p + q)(p − q) = p² − q², so the surds vanish from the denominator.

**Example 7.** Write (4 + √7)/(5 − 2√7) in the form (a + b√7)/c with integers a, b, c.

```
Multiply by (5 + 2√7)/(5 + 2√7):
Numerator:   (4 + √7)(5 + 2√7) = 20 + 8√7 + 5√7 + 14 = 34 + 13√7
Denominator: (5 − 2√7)(5 + 2√7) = 25 − 28 = −3
Result:      (34 + 13√7)/(−3) = −(34 + 13√7)/3
```

Take care with the sign: the denominator is negative, so the whole fraction is negative. If you want c positive, write a = −34 and b = −13.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--04-like-surds.webp" width="900" height="760" alt="Bars built from blocks each of length root 2: root 50 is 5 blocks, root 98 is 7 blocks and 3 root 8 is 6 blocks taken away. 5 + 7 - 6 leaves 6 blocks, so the sum is 6 root 2." loading="lazy">
  <figcaption>Surds with the same root combine like algebraic terms.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--05-conjugate-area.webp" width="900" height="890" alt="A square of side 5 loses a corner square of side 2 root 3 (area 12), leaving an L-shape of area 13. Moving the lower rectangle turns the L into a rectangle of width 5 minus 2 root 3 and height 5 plus 2 root 3, so the conjugate product is rational: 13." loading="lazy">
  <figcaption>The conjugate pair multiplies to a rational number because (p - q)(p + q) = p squared minus q squared.</figcaption>
</figure>


## 1.3 Quadratic functions and their graphs

The function f(x) = ax² + bx + c, where a is not zero, is a quadratic function. Plotting it gives a parabola.

- If a > 0, the parabola is U-shaped and has a minimum point.
- If a < 0, it is ∩-shaped and has a maximum point.
- It meets the y-axis at (0, c).
- It meets the x-axis where f(x) = 0. These are the roots.
- It is symmetrical about the vertical line through its turning point, x = −b/(2a).

To sketch a quadratic, find the y-intercept, the roots (if any), and the turning point. Label each with coordinates.

**Example 8.** Sketch y = 4x² − 8x − 21.

```
Factorise:  4x² − 8x − 21 = (2x + 3)(2x − 7)
Roots:      x = −3/2 and x = 7/2
y-intercept: (0, −21)
Axis:       x = −b/(2a) = 8/8 = 1
At x = 1:   y = 4 − 8 − 21 = −25
Turning point: (1, −25), a minimum since a = 4 > 0
```

Sketch a U-shape through (−3/2, 0), (0, −21) and (7/2, 0), with its lowest point at (1, −25). The turning point sits exactly halfway between the roots: (−3/2 + 7/2)/2 = 1.

## 1.5 Completing the square

Every quadratic can be written as a(x + p)² + q. The specification gives the general result:

```
ax² + bx + c = a(x + b/(2a))² + (c − b²/(4a))
```

In practice, do not memorise it. Use the method.

```
1. Take out a from the x² and x terms only.
2. Halve the coefficient of x inside the bracket and square it.
3. Subtract that square inside the bracket, then multiply out by a.
4. Collect the constants.
```

The form a(x + p)² + q shows the turning point directly. It is (−p, q). It is a minimum if a > 0 and a maximum if a < 0.

**Example 9.** Express 5x² + 20x + 12 as a(x + p)² + q. State the turning point and solve 5x² + 20x + 12 = 0.

```
5x² + 20x + 12 = 5(x² + 4x) + 12
               = 5[(x + 2)² − 4] + 12
               = 5(x + 2)² − 20 + 12
               = 5(x + 2)² − 8
Turning point: (−2, −8), a minimum.

Solve: 5(x + 2)² = 8
       (x + 2)² = 8/5
       x + 2 = ±√(8/5) = ±2√10/5
       x = −2 ± 2√10/5
```

**Example 10.** Express −2x² + 8x + 1 in completed-square form and state its maximum value.

```
−2x² + 8x + 1 = −2(x² − 4x) + 1
              = −2[(x − 2)² − 4] + 1
              = −2(x − 2)² + 8 + 1
              = −2(x − 2)² + 9
```

The maximum value is 9, at x = 2. The sign matters: removing −2 and then the −4 inside the square bracket gives +8.

### Four ways to solve a quadratic equation

The specification lists factorisation, the formula, a calculator and completing the square. Which one you use depends on what the question asks.

| Method | Use it when |
|---|---|
| Factorisation | The roots are rational and the quadratic factorises easily |
| Formula | The roots are irrational, or the question gives no hint |
| Completing the square | The question says "by completing the square", or you also need the turning point |
| Calculator | You only need the answer and no working is requested |

The specification lists the quadratic formula among the formulae you are expected to know. For ax² + bx + c = 0:

```
x = (−b ± √(b² − 4ac)) / (2a)
```

If a question asks for exact values or a method, show your working. A bare decimal from a calculator may not answer "give your answer in the form p ± q√r".

**Example 11.** Use the formula to solve −2x² + 8x + 1 = 0, giving exact roots.

```
x = (−8 ± √(64 − 4(−2)(1))) / (2 × −2)
  = (−8 ± √72) / (−4)
  = (−8 ± 6√2) / (−4)
  = 2 ∓ (3√2)/2
```

The two roots are 2 + 3√2/2 and 2 − 3√2/2. They sit either side of the axis x = 2 found in Example 10.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--03-hidden-quadratic.webp" width="900" height="1030" alt="Graph of 3^(2x) - 12 times 3^x + 27 crossing the x-axis at x = 1 and x = 2, with its lowest point -9. Below it, the substitution y = 3^x gives y = 3 or 9, and converting back gives x = 1 or 2." loading="lazy">
  <figcaption>Substitute y = 3^x, solve the quadratic, then convert back to x.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--08-complete-square-vertex.webp" width="900" height="890" alt="Graph of y = 4x squared + 8x - 3, equal to 4(x+1) squared - 7, with vertex (-1,-7) on the line x = -1, y-intercept (0,-3) and roots about 0.32 and -2.32. A grey dashed y = 4x squared shows the shift of 1 left and 7 down." loading="lazy">
  <figcaption>Completed-square form a(x + p)^2 + q gives the vertex (-p, q) and the line of symmetry x = -p.</figcaption>
</figure>


## 1.4 The discriminant

In the quadratic formula, the part under the root, b² − 4ac, is the discriminant. Its sign decides how many real roots there are.

- If b² − 4ac > 0, there are two different real roots, and the graph cuts the x-axis at two points.
- If b² − 4ac = 0, there is one real root, repeated, and the turning point of the graph lies on the x-axis.
- If b² − 4ac < 0, there are no real roots, and the whole graph stays on one side of the x-axis.

When the problem contains an unknown such as k, write the discriminant in terms of k, then apply the condition.

**Example 12.** The equation 2x² − kx + (k + 6) = 0 has equal roots. Find the possible values of k, and solve the equation for each.

```
Equal roots: b² − 4ac = 0
(−k)² − 4(2)(k + 6) = 0
k² − 8k − 48 = 0
(k − 12)(k + 4) = 0
k = 12 or k = −4

k = 12:  2x² − 12x + 18 = 2(x − 3)² = 0,   x = 3
k = −4:  2x² + 4x + 2  = 2(x + 1)² = 0,   x = −1
```

For no real roots you need k² − 8k − 48 < 0. The quadratic k² − 8k − 48 is U-shaped with roots −4 and 12, so it is negative between them: −4 < k < 12. For two distinct roots, k < −4 or k > 12.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--06-discriminant-graphs.webp" width="900" height="1150" alt="Three upward parabolas y = x squared - 6x + c. With c = 5 the discriminant is 16 and the curve crosses the x-axis at x = 1 and 5; with c = 9 it is 0 and the curve touches at x = 3; with c = 13 it is -16 and the curve stays above the axis." loading="lazy">
  <figcaption>The sign of b squared minus 4ac says whether the parabola crosses, touches or misses the x-axis.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--07-discriminant-in-k.webp" width="900" height="980" alt="Graph of D = 4(k-5)(k+2) against k. It is zero at k = -2 and k = 5, negative between them (no real roots) and positive outside (two distinct real roots)." loading="lazy">
  <figcaption>With an unknown k, write the discriminant in k and read the ranges from its graph.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--09-line-meets-curve.webp" width="900" height="980" alt="Parabola y = x squared - 4x + 10 with three parallel lines y = 2x + k. k = 3 cuts it twice (x = 3 plus or minus root 2), k = 1 touches it at (3, 7) and k = -1 misses it. The discriminant 4k - 4 is positive, zero or negative." loading="lazy">
  <figcaption>The discriminant of the equation formed by equating a line and a curve tells you whether they cross, touch or miss.</figcaption>
</figure>


## Common errors

- Applying a negative power to the number but forgetting to flip the fraction: (2/3)^(−2) is 9/4, not −4/9.
- Writing (a + b)^(1/2) as a^(1/2) + b^(1/2).
- Leaving a surd in the denominator, or rationalising with the wrong conjugate. For 5 − 2√7, the conjugate is 5 + 2√7.
- Losing the minus sign when the denominator becomes negative.
- Completing the square for a ≠ 1 without taking the factor a out first.
- Using the sign of q, not of a, to decide between a maximum and a minimum.
- Mixing up b and −b in the formula, or dropping brackets when b is negative.
- Writing "b² − 4ac < 0, so the roots are negative". Negative discriminant means no real roots, nothing about sign.

## Next steps

Try the [practice questions](/resources/edexcel-ial-mathematics-indices-surds-and-quadratics-functions-discriminant-practice/), then use the [revision notes](/resources/edexcel-ial-mathematics-indices-surds-and-quadratics-functions-discriminant-revision-notes/) before a test. Related material for the wider unit is in [Pure Mathematics 1](/resources/a-level-edexcel-mathematics-pure-mathematics-1/), the [Pure 1 revision notes](/resources/edexcel-a-level-mathematics-pure1-revision-notes/) and the [Pure 1 practice questions](/resources/edexcel-a-level-mathematics-pure1-practice/).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019 (first teaching September 2018), published by Pearson Education Limited: Unit P1, topics 1.1 to 1.5.
