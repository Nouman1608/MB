---
title: "Pearson Edexcel International Advanced Level Mathematics: Indices, surds and quadratics (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths P1 Indices, Surds, Quadratics Notes"
resourceType: "revision-notes"
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
description: "Condensed P1 revision notes on indices, surds, quadratic graphs, the discriminant and completing the square for Edexcel International A Level Maths."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

These notes condense the [full study guide](/resources/edexcel-ial-mathematics-indices-surds-and-quadratics-functions-discriminant/), so read that first if a step looks unfamiliar. They follow the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, April 2019, Unit P1 topics 1.1 to 1.5. P1 is a compulsory unit for IAS and IAL Mathematics and Pure Mathematics. Test yourself with the [practice questions](/resources/edexcel-ial-mathematics-indices-surds-and-quadratics-functions-discriminant-practice/), tick the topic on the [checklist](/checklists/edexcel/a-level/mathematics/), see the [course hub](/boards/edexcel/a-level/mathematics/), and use the [free 10-minute diagnostics](/diagnostics/) to find gaps.

## 1.1 Indices: key results

| Result | Notes |
|---|---|
| a^m × a^n = a^(m+n) | Same base only |
| a^m ÷ a^n = a^(m−n) | Subtract exponents |
| (a^m)^n = a^(mn) | Multiply exponents |
| a⁰ = 1 | For a ≠ 0 |
| a^(−n) = 1/aⁿ | Negative means reciprocal, not negative number |
| a^(1/n) = ⁿ√a | Root |
| a^(m/n) = (ⁿ√a)^m = ⁿ√(a^m) | Root first, then power |
| (a/b)^(−n) = (b/a)^n | Flip the fraction |

**Method: evaluate a fractional power.**

```
1. Make the power positive (flip the fraction if needed).
2. Take the root.
3. Apply the numerator power.
Example: 1024^(3/10) = (¹⁰√1024)³ = 2³ = 8
```

**Method: solve x^(p/q) = k.** Raise both sides to the power q/p. Example: x^(−1/2) = 1/6 gives x^(1/2) = 6, so x = 36.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--01-root-then-power.webp" width="900" height="880" alt="Three step-by-step pipelines. 64 to the 2/3: cube root gives 4, square gives 16. 1296 to the 3/4: fourth root gives 6, cube gives 216. (27/8) to the minus 2/3: flip to 8/27, cube root gives 2/3, square gives 4/9. A note reminds that 2 to the minus 3 is 1/8, not minus 8." loading="lazy">
  <figcaption>For a fractional index take the root first, then the power; a negative index flips the fraction.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--02-same-base-indices.webp" width="900" height="920" alt="Two straight lines show the indices of 3 on each side of 9^(x+1) = 27^(2x-1): 2x+2 and 6x-3. They cross at x = 5/4 where both equal 4.5, which is the solution." loading="lazy">
  <figcaption>When both sides are powers of the same base, equate the indices.</figcaption>
</figure>


## 1.2 Surds: key results

| Rule | Example |
|---|---|
| √a × √b = √(ab) | √3 × √12 = 6 |
| √a ÷ √b = √(a/b) | √90 ÷ √10 = 3 |
| (√a)² = a | (2√5)² = 20 |
| √(a + b) is not √a + √b | √(36 + 64) = 10, but 6 + 8 = 14 |
| (p + q)(p − q) = p² − q² | (2 + √3)(2 − √3) = 1 |

**Method: simplify.** Find the largest square factor. √75 = √(25 × 3) = 5√3. Collect like surds only after simplifying every term.

**Method: rationalise the denominator.**

```
One surd:   k/√a   →  multiply top and bottom by √a
Two terms:  k/(p + q√r)  →  multiply top and bottom by (p − q√r)
            denominator becomes p² − q²r, a rational number
```

**Worked reminder.** Show that 1/(√11 − 3) − 1/(√11 + 3) = 3.

```
Common denominator: (√11 − 3)(√11 + 3) = 11 − 9 = 2
Numerator: (√11 + 3) − (√11 − 3) = 6
Result: 6/2 = 3
```

**Worked reminder.** Rationalise 10/(√7 − √2).

```
10(√7 + √2) / (7 − 2) = 10(√7 + √2)/5 = 2√7 + 2√2
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--04-like-surds.webp" width="900" height="760" alt="Bars built from blocks each of length root 2: root 50 is 5 blocks, root 98 is 7 blocks and 3 root 8 is 6 blocks taken away. 5 + 7 - 6 leaves 6 blocks, so the sum is 6 root 2." loading="lazy">
  <figcaption>Surds with the same root combine like algebraic terms.</figcaption>
</figure>


## 1.3 Quadratic graphs

| Feature | Rule |
|---|---|
| Shape | a > 0: U-shaped, minimum. a < 0: ∩-shaped, maximum |
| y-intercept | (0, c) |
| Roots | Solve f(x) = 0 |
| Axis of symmetry | x = −b/(2a), halfway between the roots |
| Turning point | Substitute x = −b/(2a), or read it from completed-square form |

**Sketch checklist.** Shape, y-intercept, roots (or note there are none), turning point. Put coordinates on every point you label.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--03-hidden-quadratic.webp" width="900" height="1030" alt="Graph of 3^(2x) - 12 times 3^x + 27 crossing the x-axis at x = 1 and x = 2, with its lowest point -9. Below it, the substitution y = 3^x gives y = 3 or 9, and converting back gives x = 1 or 2." loading="lazy">
  <figcaption>Substitute y = 3^x, solve the quadratic, then convert back to x.</figcaption>
</figure>


## 1.5 Completing the square

For a(x + p)² + q:

```
ax² + bx + c = a(x + b/(2a))² + (c − b²/(4a))
```

| Form | Turning point | Nature |
|---|---|---|
| a(x + p)² + q | (−p, q) | Minimum if a > 0, maximum if a < 0 |

**Method in steps.**

```
1. Take the factor a out of the x² and x terms only.
2. Halve the coefficient of x and put it in the bracket.
3. Subtract the square of that half inside the bracket.
4. Multiply the subtracted term by a and add the constant.
Example: x² − 12x + 29 = (x − 6)² − 36 + 29 = (x − 6)² − 7
```

**Solving by completing the square.** Set equal to zero, rearrange to (x + p)² = number, take ±√. Example: x² − 12x + 29 = 0 gives (x − 6)² = 7, so x = 6 ± √7.

**Quadratic formula.** The specification lists it among the formulae you are expected to know.

```
x = (−b ± √(b² − 4ac)) / (2a)
```

**Which method?** Factorise when the roots look rational. Use the formula for irrational roots. Complete the square when asked, or when you need the turning point. The specification also lists a calculator as a method, but show working whenever a question asks for exact values or an explicit method.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-rational-indices-and-surds--08-complete-square-vertex.webp" width="900" height="890" alt="Graph of y = 4x squared + 8x - 3, equal to 4(x+1) squared - 7, with vertex (-1,-7) on the line x = -1, y-intercept (0,-3) and roots about 0.32 and -2.32. A grey dashed y = 4x squared shows the shift of 1 left and 7 down." loading="lazy">
  <figcaption>Completed-square form a(x + p)^2 + q gives the vertex (-p, q) and the line of symmetry x = -p.</figcaption>
</figure>


## 1.4 Discriminant

- b² − 4ac > 0: two different real roots; the graph cuts the x-axis twice.
- b² − 4ac = 0: one real root, repeated; the turning point sits on the x-axis.
- b² − 4ac < 0: no real roots; the graph never meets the x-axis.

**Method: find an unknown from a root condition.**

```
1. Write a, b, c (they may contain k).
2. Form b² − 4ac in terms of k.
3. Set it = 0 (equal roots), > 0 (two roots) or < 0 (no real roots).
4. Solve the equation or inequality for k.
```

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


## Worked reminders for 1.3 to 1.5

**Indices with letters.** Simplify (16x⁻⁸)^(3/4) × x⁵.

```
16^(3/4) = 8,   (x⁻⁸)^(3/4) = x⁻⁶
8x⁻⁶ × x⁵ = 8x⁻¹ = 8/x
```

**Completing the square when a ≠ 1.** Write 4x² − 8x + 9 in completed-square form.

```
4x² − 8x + 9 = 4(x² − 2x) + 9
             = 4[(x − 1)² − 1] + 9
             = 4(x − 1)² + 5
```

The turning point is (1, 5), a minimum. Because the lowest y-value is 5, the graph never reaches the x-axis. The discriminant agrees: (−8)² − 4(4)(9) = 64 − 144 = −80, which is negative.

**Discriminant with an unknown.** Find the values of k for which x² + 6x + k = 0 has two distinct real roots.

```
b² − 4ac = 36 − 4k
Two distinct real roots: 36 − 4k > 0
k < 9
```

**Graph without roots.** For y = x² + 8x + 19, the discriminant is 64 − 76 = −12, so there are no real roots. Completing the square gives (x + 4)² + 3, so the turning point is (−4, 3) and the y-intercept is (0, 19). Sketch a U-shape above the x-axis.

## Must-know distinctions

- Root of an equation versus intercept of a graph: the real roots of f(x) = 0 are the x-coordinates where the graph meets the x-axis.
- Repeated root versus two roots: a repeated root means the graph touches, not crosses.
- Turning point (p, q) versus completed-square form (x − p)² + q: the x-coordinate flips sign, the y-coordinate does not.
- a^(−n) is a reciprocal. It is not a negative number.
- Rational denominator means no surd on the bottom. It does not mean no surd anywhere.

## Wording to recognise

| Wording in the question | What to do |
|---|---|
| "Give your answer in exact form" | Leave surds and fractions, no decimals |
| "Show that" | Write every step to the stated result, with no jumps |
| "Write in the form a(x + p)² + q" | Complete the square, then state a, p and q |
| "Hence" | Use your previous result in the next part |
| "Real roots" | Think discriminant: b² − 4ac ≥ 0 |
| "Rational denominator" | Multiply by the surd or conjugate |

## Numbers worth knowing

Squares up to 15² and cubes up to 5³ make roots and fractional powers fast. Useful square factors to look for inside surds are 4, 9, 16, 25, 36, 49 and 100. Recognise 27, 32, 64, 81, 125, 216 and 243 as perfect powers, because they appear in fractional-index questions.

## Quick self-test

Do these without notes, by hand where you can.

1. Evaluate 1024^(3/10).
2. Evaluate 8^(−2/3).
3. Simplify √75 − √12.
4. Rationalise 10/(√7 − √2).
5. Expand (2 + √3)(2 − √3).
6. Write x² − 12x + 41 in the form (x + p)² + q and state the turning point.
7. Find the discriminant of 5x² − 2x + 3 and say what it tells you.
8. Find the values of k for which x² + kx + 25 = 0 has equal roots.
9. Solve x² + 5x − 36 = 0.
10. Solve x² − 12x + 29 = 0 by completing the square.
11. Solve x^(−1/2) = 1/6.
12. State the equation of the axis of symmetry and the maximum value of y = −x² + 4x + 9.

### Answers

1. 8
2. 1/4
3. 5√3 − 2√3 = **3√3**
4. **2√7 + 2√2**
5. 4 − 3 = **1**
6. (x − 6)² + 5, turning point **(6, 5)**, a minimum
7. 4 − 60 = **−56**; negative, so no real roots
8. k² − 100 = 0, so **k = 10 or k = −10**
9. (x + 9)(x − 4) = 0, so **x = −9 or x = 4**
10. (x − 6)² = 7, so **x = 6 ± √7**
11. x^(1/2) = 6, so **x = 36**
12. Axis **x = 2**; y = −(x − 2)² + 13, so the maximum value is **13**

## Where marks are usually lost

- Taking the power before the root with large numbers, then making an arithmetic slip. Root first.
- Forgetting that a negative power flips a fraction.
- Splitting a root over a sum, such as √(a + b) = √a + √b.
- Using the wrong conjugate, or multiplying the top by the conjugate but not the bottom.
- Giving a sign error when the rationalised denominator is negative.
- Factorising x² and x terms together without taking out a when a ≠ 1.
- Reading the turning point of (x − 3)² + 7 as (−3, 7).
- Writing a decimal when an exact answer in surd form is requested.
- Setting the discriminant greater than zero when the question says "no real roots", or stopping before solving for k.
- Sketching a parabola with no coordinates labelled, or with a turning point not on the axis of symmetry.

## Frequently asked questions

**What does the discriminant tell you about a quadratic?**
If b² − 4ac > 0 there are two different real roots and the graph cuts the x-axis twice. If it equals 0 there is one repeated root and the turning point is on the x-axis, and if it is negative there are no real roots.

**How do you find the turning point from completed-square form?**
For a(x + p)² + q the turning point is (−p, q): the x-coordinate changes sign and the y-coordinate does not. It is a minimum if a > 0 and a maximum if a < 0.

**Is √(a + b) equal to √a + √b?**
No. A square root cannot be split over a sum, although √a × √b = √(ab) and √a ÷ √b = √(a/b) are both true.

**Do you need to memorise the quadratic formula for Edexcel IAL Maths?**
Yes. The Edexcel IAL Mathematics specification (YMA01) lists the quadratic formula among the formulae students are expected to know for Unit P1.

**When should you factorise, use the formula or complete the square?**
Factorise when the roots look rational, use the formula for irrational roots, and complete the square when the question asks for it or when you need the turning point.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019 (first teaching September 2018), published by Pearson Education Limited: Unit P1, topics 1.1 to 1.5.
