---
title: "AQA A-level Mathematics: Linear, Quadratic and Rational Inequalities and Regions (7357) -- Revision Notes"
seoTitle: "AQA A-level Maths B5 Inequalities Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Linear and Quadratic Inequalities, Rational Inequalities and Regions"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 10
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b5-inequalities-aqa-alevel-maths"
description: "Condensed AQA A-level Maths 7357 B5 revision notes: inequality methods, fraction inequalities, set notation, region shading and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense content B5 of the AQA A-level Mathematics 7357 specification (version 1.3, 31 January 2018): solving inequalities, writing solutions, and showing regions on a graph. For full explanations and longer worked examples, read the [study guide](/resources/aqa-a-level-mathematics-linear-and-quadratic-inequalities-rational/) first.

Quick links: [course hub](/boards/aqa/a-level/mathematics/) | [checklist](/checklists/aqa/a-level/mathematics/) | [practice questions](/resources/aqa-a-level-mathematics-linear-and-quadratic-inequalities-rational-practice/) | [free 10-minute diagnostics](/diagnostics/)

## Key rules

| Situation | Rule |
|---|---|
| Add or subtract on both sides | Sign unchanged |
| Multiply or divide by a positive | Sign unchanged |
| Multiply or divide by a negative | **Turn the sign round** |
| Multiply by an expression containing x | Not allowed unless you know its sign; use its square or a single fraction |
| Solution outside two roots (∪-curve above axis) | "or" |
| Solution between two roots | "and", or a double inequality |
| Strict inequality (< or >) | Open bracket, dashed boundary |
| Non-strict (≤ or ≥) | Square bracket, solid boundary |

## Writing the answer

| Form | Example |
|---|---|
| Inequality | x ≤ −2 or x ≥ 5 |
| Set notation | {x: x ≤ −2} ∪ {x: x ≥ 5} |
| Interval | (−∞, −2] ∪ [5, ∞) |
| Between | {x ∈ ℝ: −3 < x ≤ 4} or (−3, 4] |
| All but one value | {x ∈ ℝ: x ≠ 3} |

∪ means "or" and ∩ means "and". Infinity always takes a round bracket.

## Method boxes

**Linear.** Expand brackets, clear fractions by multiplying by the lowest common multiple of the denominators (a positive number), collect x terms, then divide, reversing the sign only if the divisor is negative.

**Quadratic.**
1. Get 0 on one side.
2. Solve the equation for the roots (factorise or use the formula).
3. Sketch: ∪-shape if the x² coefficient is positive, ∩-shape if negative.
4. Read the required part above (> 0) or below (< 0) the axis.
5. State the answer with "and" or "or", or in set notation.

**Fraction inequality, Method A.** Note the excluded values. Multiply both sides by the square of each denominator. Collect on one side and factorise. Sketch the resulting polynomial, then remove excluded values.

**Fraction inequality, Method B.** Collect on one side as a single fraction. Find where the top and bottom change sign. Decide where the fraction is positive or negative. Exclude values that make the bottom zero.

**Region.** Draw the boundary (dashed or solid). Test a point not on it, usually (0, 0). Shade or leave clear the side as the question instructs, and label R.

## Worked reminders

**Quadratic.** Solve x² + 3x − 18 ≥ 0.

```
(x + 6)(x − 3) ≥ 0         roots −6 and 3, ∪-shape
x ≤ −6 or x ≥ 3
```

**Quadratic with brackets.** Solve (x + 4)(x − 1) ≤ 6.

```
x² + 3x − 4 ≤ 6
x² + 3x − 10 ≤ 0
(x + 5)(x − 2) ≤ 0
−5 ≤ x ≤ 2
```

**Fraction, Method B.** Solve (x + 1)/(x − 3) ≤ 2, with x ≠ 3.

```
(x + 1)/(x − 3) − 2 ≤ 0
(x + 1 − 2(x − 3))/(x − 3) ≤ 0
(7 − x)/(x − 3) ≤ 0
```

The top is zero at x = 7 and the bottom at x = 3. The fraction is negative when the top and bottom have opposite signs and zero at x = 7.

| Range | 7 − x | x − 3 | Fraction |
|---|---|---|---|
| x < 3 | + | − | − |
| 3 < x < 7 | + | + | + |
| x > 7 | − | + | − |

Solution: **x < 3 or x ≥ 7**. Check x = 0: −1/3 ≤ 2, true. Check x = 5: 3 ≤ 2, false.

**Fraction, Method A.** Solve 6/x > 2, with x ≠ 0.

```
6x > 2x²           (multiply by x², positive)
2x(3 − x) > 0
0 < x < 3
```

**Combining conditions with "and".** Find the values of x for which both x² − 9 < 0 and 2x + 1 ≥ 0.

```
x² − 9 < 0      gives −3 < x < 3
2x + 1 ≥ 0      gives x ≥ −1/2
both:           −1/2 ≤ x < 3
```

In set notation this is {x: −3 < x < 3} ∩ {x: x ≥ −1/2} = [−1/2, 3).

**Cubic sign diagram.** After clearing fractions you often reach a product of three factors. Solve (x + 3)(x − 1)(x − 4) < 0. The cubic has a positive x³ term, so it starts below the axis on the left and crosses at −3, 1 and 4. It is below the axis for x < −3 and for 1 < x < 4. The answer is **x < −3 or 1 < x < 4**.

**Graph reading.** The curve y = x² − 3x and the line y = 2x − 6 meet where x² − 5x + 6 = 0, so at x = 2 and x = 3. The curve is above the line when x < 2 or x > 3, and below it when 2 < x < 3.

**Impossible or always true.** If the discriminant is negative, the curve never meets the axis. Then x² + x + 3 > 0 is true for all real x, while x² + x + 3 < 0 has no solution.

## Region reminders

| Inequality | Boundary | Test (0, 0) | Shade |
|---|---|---|---|
| y > x + 1 | dashed line | 0 > 1 false | above the line |
| y ≤ 3 − 2x | solid line | 0 ≤ 3 true | the side containing the origin |
| y ≥ x² − 4 | solid parabola | 0 ≥ −4 true | inside the bowl, above the curve |
| x < 2 | dashed vertical line | 0 < 2 true | left of the line |
| y ≥ 1 | solid horizontal line | 0 ≥ 1 false | above the line |

Several inequalities together give the **overlap** of their regions. A vertex of the region is where two boundaries meet: solve the two equations simultaneously. A vertex on a dashed boundary is not in the region. Example: the lines y = x and x + 2y = 12 meet where x + 2x = 12, so at (4, 4); the line x + 2y = 12 also meets the y-axis at (0, 6). To write inequalities for a drawn region, find the equation of each boundary, read solid or dashed, then test a point inside R to choose the sign.

## Must-know distinctions

- **Equation vs inequality:** x² = 9 gives two values, x = ±3; x² < 9 gives an interval, −3 < x < 3.
- **"And" vs "or":** between the roots uses "and", outside the roots uses "or".
- **Strict vs non-strict:** x = 11 is included in the fraction example in the guide because both sides are equal there. A value that makes a denominator zero is always excluded, even with ≥ or ≤.
- **Region vs line:** a line is a set of points satisfying an equation. A region is a set of points satisfying an inequality.

## Checking an answer

Pick one value inside each interval you found, and one in each gap between them. Substitute into the original inequality, not into your rearranged version. Inside values must make it true and the others false. For a fraction, also confirm the excluded values really make a denominator zero. This takes under a minute and catches reversed signs and swapped "and" and "or" answers.

## Quick self-test

1. Solve 5 − 2x ≤ 11.
2. Solve x² − 4x − 21 < 0.
3. Write "x ≤ −2 or x ≥ 5" in set notation.
4. Solve x² ≥ 5x.
5. Solve 16 − x² ≥ 0.
6. Solve 6/x > 2 without multiplying by x. Give one reason why multiplying by x is unsafe.
7. Does x² + x + 3 > 0 hold for all real x? Justify using the discriminant.
8. Should the boundary of y ≥ 3x − 2 be solid or dashed?
9. Does the point (1, 4) satisfy y > x² + 2?
10. Solve (x + 4)(x − 1) ≤ 6 and write the answer in interval notation.
11. A region R is defined by y ≥ 1 and x + y < 6. Which boundary is dashed, and is (3, 3) in R?
12. Which values of x must be excluded from any solution of 4/(x + 1) ≥ 3/(x − 2)?

### Answers

1. −2x ≤ 6, so **x ≥ −3** (the sign reverses when dividing by −2).
2. (x − 7)(x + 3) < 0, so **−3 < x < 7**.
3. **{x: x ≤ −2} ∪ {x: x ≥ 5}**.
4. x² − 5x ≥ 0, so x(x − 5) ≥ 0, giving **x ≤ 0 or x ≥ 5**. Do not divide by x.
5. (4 − x)(4 + x) ≥ 0, so **−4 ≤ x ≤ 4**.
6. Multiply by x²: 6x > 2x², so 2x(3 − x) > 0, giving **0 < x < 3**. Multiplying by x is unsafe because x may be negative, which would reverse the sign.
7. The discriminant is 1 − 12 = −11, which is negative. The ∪-shaped curve never touches the axis, and it is above the axis at every point, so **yes**.
8. **Solid**, because the inequality includes equality.
9. When x = 1, x² + 2 = 3, and 4 > 3, so **yes**.
10. x² + 3x − 10 ≤ 0, so (x + 5)(x − 2) ≤ 0, giving **[−5, 2]**.
11. The line x + y = 6 is dashed because the inequality is strict. At (3, 3), x + y = 6, which is not less than 6, so **(3, 3) is not in R**.
12. **x = −1 and x = 2**, because each makes a denominator zero.

## Where marks are usually lost

- Not reversing the sign after dividing or multiplying by a negative number.
- Giving the interval between the roots when the curve is needed above the axis for a ∪-shape.
- Writing an "or" answer as a single chain of inequalities.
- Dividing by x, or multiplying by (x − a), and losing a branch of the solution.
- Leaving excluded values in a fraction inequality answer.
- Showing no sketch or sign table, so a wrong interval has no working to support it.
- Using a solid line for a strict inequality, or the reverse.
- Testing a point that lies on the boundary line, or skipping the test and guessing the side.
- Rounding surd roots too early. Keep 3 ± √5 exact until a decimal is requested.

Use the [practice questions](/resources/aqa-a-level-mathematics-linear-and-quadratic-inequalities-rational-practice/) to test yourself, and the [diagnostics](/diagnostics/) to check readiness.

## Official syllabus

AQA, *A-level Mathematics 7357 specification*, for first teaching in 2017 (version 1.3, 31 January 2018), content B5. Published by AQA.
