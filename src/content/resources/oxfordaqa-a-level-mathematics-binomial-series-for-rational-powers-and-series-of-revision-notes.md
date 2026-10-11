---
title: "OxfordAQA International AS and A-level Mathematics: Binomial series for rational powers and series of rational functions (9660) -- Revision Notes"
seoTitle: "OxfordAQA A-level Maths Binomial Series Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Binomial series for rational powers and series of rational functions"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 189
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-sequences-and-series-oxfordaqa-alevel-maths"
description: "Condensed revision notes on the binomial series for rational powers and on series of rational functions via partial fractions, for OxfordAQA 9660 Unit P2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These revision notes condense specification section P2.2 of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2: the binomial series for any rational power and series of rational functions. The specification places this content in International A-level (A2) Unit P2 (Pure Maths); it is not examined at International AS. For full explanations, read the [study guide](/resources/oxfordaqa-a-level-mathematics-binomial-series-for-rational-powers-and-series-of/). Then test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-binomial-series-for-rational-powers-and-series-of-practice/).

Related pages: [sequences, series and binomial expansion](/resources/oxfordaqa-a-level-mathematics-sequences-arithmetic-and-geometric-series-and-binomial/) (integer powers), the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [checklist](/checklists/oxfordaqa/a-level/mathematics/) and the free [10-minute diagnostics](/diagnostics/).

## The key result

```
(1 + x)ⁿ = 1 + nx + n(n − 1)/2! x² + n(n − 1)(n − 2)/3! x³ + …     |x| < 1
```

| Case | What happens |
|---|---|
| n a positive integer | Series stops after n + 1 terms. True for all x. |
| n negative or a fraction | Series is infinite. True only for |x| < 1. |
| (1 + kx)ⁿ | Replace x by kx. Valid for |kx| < 1, so |x| < 1/|k|. |
| (a + bx)ⁿ | Take out aⁿ(1 + (b/a)x)ⁿ. Valid for |x| < |a/b|. |

## Handy coefficient patterns

| Power | Series |
|---|---|
| (1 + u)⁻¹ | 1 − u + u² − u³ + … |
| (1 + u)⁻² | 1 − 2u + 3u² − 4u³ + … |
| (1 + u)⁻³ | 1 − 3u + 6u² − 10u³ + … |
| (1 + u)^(1/2) | 1 + u/2 − u²/8 + u³/16 − … |
| (1 + u)^(−1/2) | 1 − u/2 + 3u²/8 − 5u³/16 + … |

Use these as a check on your own working. Then substitute u. For example, with u = 4x in the last row you get 1 − 2x + 6x² − 20x³.

## Method: expand (a + bx)ⁿ

1. Take out the constant: aⁿ(1 + (b/a)x)ⁿ. Raise a to the power n.
2. Set u = (b/a)x and write down the series in u with brackets.
3. Substitute u, keeping every sign. Simplify each term.
4. Multiply through by aⁿ.
5. Write the validity as |u| < 1, then solve for x.

Worked reminder: (8 − x)^(1/3) = 2(1 − x/8)^(1/3) = 2 − x/12 − x²/288 − 5x³/20736 + …, valid for |x| < 8.

## Method: series of a rational function

1. Check the numerator has lower degree than the denominator.
2. Write the partial-fraction form. A repeated factor (px + q)² needs two terms: B/(px + q) and C/(px + q)².
3. Find the constants: substitute convenient x values, then compare a coefficient.
4. Rewrite each part with the constant first, as k(1 + u)ⁿ.
5. Expand each part and add the series.
6. Take the narrowest range of validity.

| Denominator factor | Partial fraction form |
|---|---|
| (1 + 2x)(3 − x) | A/(1 + 2x) + B/(3 − x) |
| (1 + 2x)(3 − x)² | A/(1 + 2x) + B/(3 − x) + C/(3 − x)² |

Worked reminder: (7 − x)/((1 − x)(1 + 2x)) = 2/(1 − x) + 5/(1 + 2x). Check at x = 0: the left side is 7 and 2 + 5 = 7. The series is 7 − 8x + 22x² − 38x³ + …, valid for |x| < 1/2.

### Finding the constants quickly

1. Multiply both sides by the full denominator to clear the fractions.
2. Substitute the value of x that makes one bracket zero. That removes two of the three unknowns at once.
3. For a repeated factor, substituting its zero gives the squared-term constant C directly.
4. Compare the coefficient of x² (or of the highest power) to get the last constant.
5. Check with x = 0 on both sides before you expand anything.

### Validity for partial fractions

| Part | Valid for |
|---|---|
| 1/(1 + 2x) | |x| < 1/2 |
| 1/(3 − x) or 1/(3 − x)² | |x| < 3 |
| Whole function | |x| < 1/2 (the narrowest) |

## Products and quotients

Write a quotient as a product with a negative power. For example, (1 + x)/(1 − 2x)^(1/2) = (1 + x)(1 − 2x)^(−1/2).

Worked reminder: find the coefficient of x³ in (1 + x)(1 − 2x)^(−1/2).

```
(1 − 2x)^(−1/2) = 1 + x + 3x²/2 + 5x³/2 + …
x³ terms: 1 × (5x³/2) + x × (3x²/2) = 5/2 + 3/2 = 4
```

Pick out only the pairs of terms whose powers add to 3. This saves time and keeps the working short. Use a full expansion only if the question asks for all the terms.

## Checks you can do

- **Constant term.** The constant term of the series is the value of the function at x = 0. For a partial-fraction answer, put x = 0 into both sides.
- **First-order term.** For (1 + kx)ⁿ the x term is always nkx. For (a + bx)ⁿ it is n·aⁿ⁻¹·b·x.
- **Small x.** Put x = 0.01 into the function and into your series. The two values should agree to about four decimal places.
- **Signs.** For (1 + kx)ⁿ with n negative, the signs alternate if k is positive and are all the same if k is negative.
- **Range.** If the denominator is zero at some x, the series cannot be valid at that x. The nearest such value to zero gives the edge of the range.

## Validity at a glance

| Expression | Rewrite | Valid for |
|---|---|---|
| (1 + 5x)⁻¹ | u = 5x | |x| < 1/5 |
| (2 + x)^(1/2) | √2 (1 + x/2)^(1/2) | |x| < 2 |
| (3 − 2x)⁻² | (1/9)(1 − 2x/3)⁻² | |x| < 3/2 |
| (1 − x²)^(1/2) | u = −x² | |x| < 1 |

In the last row, |x²| < 1 is the same as |x| < 1. If u is a power of x, solve the inequality for x itself.

## Must-know distinctions

- **Finite vs infinite.** A positive integer power terminates, so no validity condition applies. A negative or fractional power does not terminate.
- **|x| < 1 vs |u| < 1.** The condition is on the thing inside the bracket after the 1.
- **Constant outside vs inside.** In (3 + 2x)⁻² the 3 must come out as 3⁻² = 1/9, not 3.
- **(x − 3) vs (3 − x).** Rewrite so the constant comes first, and track the sign: 1/(x − 3) = −1/(3 − x).
- **Approximation vs exact.** A truncated series is an approximation. Say "approximately" and use x only inside the range.

## Quick self-test

1. Write down the first three terms of (1 + x)^(−3).
2. Expand (1 + 2x)^(−1/2) up to x².
3. Write 1/(5 + x) as a constant times (1 + u)⁻¹. State the validity.
4. State the range of validity for (2 − 5x)^(−2).
5. Find the coefficient of x² in (1 − 3x)^(−1/3).
6. Write the partial-fraction form for (x + 4)/((1 − x)(2 + x)²).
7. Expand 1/((1 + x)(1 − 2x)) up to x², using partial fractions.
8. Expand (1 − x²)^(1/2) up to x⁴ and state the validity.
9. Why can you not use the binomial series for (1 + x)⁻¹ at x = 3?
10. Rewrite 1/(x − 4)² as a constant times (1 + u)⁻².
11. Expand (9 − x)^(−1/2) up to x², and state the validity.
12. Find the coefficient of x³ in (1 + x)(1 − 2x)^(−1/2).

### Answers

1. 1 − 3x + 6x² + …
2. (1 + 2x)^(−1/2) = 1 − x + (3/8)(4x²) = **1 − x + 3x²/2 + …**
3. 1/(5 + x) = (1/5)(1 + x/5)⁻¹ = **1/5 − x/25 + x²/125 …**, valid for **|x| < 5**.
4. (2 − 5x)⁻² = (1/4)(1 − 5x/2)⁻², so |5x/2| < 1, giving **|x| < 2/5**.
5. n = −1/3, u = −3x. The x² coefficient is [(−1/3)(−4/3)/2](9) = (2/9)(9) = **2**.
6. **A/(1 − x) + B/(2 + x) + C/(2 + x)²**.
7. 1/((1 + x)(1 − 2x)) = (1/3)/(1 + x) + (2/3)/(1 − 2x). The series is (1/3)(1 − x + x²) + (2/3)(1 + 2x + 4x²) = **1 + x + 3x² + …**, valid for |x| < 1/2.
8. (1 − x²)^(1/2) with u = −x²: 1 + u/2 − u²/8 = **1 − x²/2 − x⁴/8 + …**, valid for |x| < 1.
9. The series only equals the function for |x| < 1. At x = 3 the terms 1, −3, 9, −27 grow without bound.
10. 1/(x − 4)² = 1/(16(1 − x/4)²) = **(1/16)(1 − x/4)⁻²**, valid for |x| < 4.

11. (9 − x)^(−1/2) = (1/3)(1 − x/9)^(−1/2) = **1/3 + x/54 + x²/648 + …**, valid for **|x| < 9**.
12. **4** (see the worked reminder above).

## Where marks are usually lost

- Leaving out the constant factor aⁿ after taking a out of the bracket.
- Squaring (−3x) as −9x² instead of +9x².
- Forgetting the (−1)ᵏ pattern and getting alternating signs wrong in (1 − kx)⁻ⁿ.
- Writing |x| < 1 instead of the true range for the expression given.
- Using only one fraction for a squared factor.
- Adding series with different validity ranges and quoting the wrong one.
- Substituting a value of x outside the range when estimating.
- Rounding too early. Keep exact fractions until the last line.
- Stopping one term short. Check which power the question asks you to go up to.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section P2.2 (International AS exams from May/June 2018, A-level from May/June 2019), published by OxfordAQA.
