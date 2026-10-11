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
publishedDate: 2026-10-11
featured: false
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

## 1.3 Quadratic graphs

| Feature | Rule |
|---|---|
| Shape | a > 0: U-shaped, minimum. a < 0: ∩-shaped, maximum |
| y-intercept | (0, c) |
| Roots | Solve f(x) = 0 |
| Axis of symmetry | x = −b/(2a), halfway between the roots |
| Turning point | Substitute x = −b/(2a), or read it from completed-square form |

**Sketch checklist.** Shape, y-intercept, roots (or note there are none), turning point. Put coordinates on every point you label.

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

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019 (first teaching September 2018), published by Pearson Education Limited: Unit P1, topics 1.1 to 1.5.
