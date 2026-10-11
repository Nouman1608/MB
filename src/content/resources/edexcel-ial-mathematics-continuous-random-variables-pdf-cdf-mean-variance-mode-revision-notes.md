---
title: "Pearson Edexcel International Advanced Level Mathematics: Continuous random variables: pdf, cdf, mean, variance, mode, median and quartiles (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths S2 Continuous Random Variables Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Continuous random variables: pdf, cdf, mean, variance, mode, median and quartiles"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 166
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-2-edexcel-alevel-maths"
    subtopic: "s2-continuous-random-variables-edexcel-alevel-maths"
description: "Condensed revision notes for Edexcel IAL Mathematics S2 continuous random variables: formulae, methods, a self-test and the places marks are lost."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These are condensed notes for section 2 (topics 2.1 to 2.5) of Unit S2 in the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Specification Issue 3, April 2019. S2 is optional for IAS Further Mathematics and for IAL Mathematics and Further Mathematics. For full explanations and longer worked examples, read the [study guide](/resources/edexcel-ial-mathematics-continuous-random-variables-pdf-cdf-mean-variance-mode/). Test yourself with the [practice questions](/resources/edexcel-ial-mathematics-continuous-random-variables-pdf-cdf-mean-variance-mode-practice/), check coverage on the [printable checklist](/checklists/edexcel/a-level/mathematics/), and see the [course hub](/boards/edexcel/a-level/mathematics/). The [free diagnostics](/diagnostics/) show which unit to revise next.

## Key ideas (2.1)

- A continuous random variable takes any value in an interval. Probability is area under the pdf.
- P(X = a) = 0 for every a, so P(X < a) = P(X ≤ a) and the inequality signs do not change a probability.
- Outside the stated interval f(x) = 0. Write that in your answer.

## Definitions and formulae

| Item | Result | Spec |
|---|---|---|
| Valid pdf | f(x) ≥ 0 everywhere and total area = 1 | 2.2 |
| Probability | P(a < X ≤ b) = ∫ f(x) dx from a to b | 2.2 |
| cdf | F(x0) = P(X ≤ x0) = ∫ f(x) dx from −∞ to x0 | 2.2 |
| Interval probability | P(a < X ≤ b) = F(b) − F(a) | 2.2 |
| Upper tail | P(X > a) = 1 − F(a) | 2.2 |
| Link | f(x) = dF(x)/dx | 2.3 |
| Mean | E(X) = ∫ x f(x) dx | 2.4 |
| Variance | Var(X) = ∫ x² f(x) dx − [E(X)]² | 2.4 |
| Mode | x where f(x) is greatest | 2.5 |
| Median | m with F(m) = 1/2 | 2.5 |
| Quartiles | F(x) = 1/4 (lower) and F(x) = 3/4 (upper) | 2.5 |

The specification lists P(a < X ≤ b) = ∫ f(x) dx and f(x) = dF(x)/dx among the formulae you are expected to remember. Learn the others in the table too.

## Method boxes

**Find an unknown constant in a pdf**

1. Integrate f over its whole interval (every piece, if piecewise).
2. Set the total equal to 1.
3. Solve. Check that f(x) ≥ 0 with your value.

**Build the cdf from a pdf**

1. Integrate f from the lower end of the interval up to x for the first piece.
2. For each later piece, add F at the previous boundary, then integrate from that boundary to x.
3. State F = 0 below the interval and F = 1 above it.
4. Check F = 1 at the top and that the pieces join.

**Find f from F**

1. Differentiate each piece of F.
2. State f = 0 outside the interval.

**Find the mode**

1. Sketch f or look at its shape.
2. Turning point: solve f′(x) = 0, then check it is a maximum.
3. Always rising or falling: the mode is an end of the interval.
4. Piecewise: compare the greatest value in each piece.
5. Constant top: there is no single mode.

**Find the median or a quartile**

1. Work out F at each boundary.
2. Compare 1/2 (or 1/4, 3/4) with those values to choose the piece.
3. Solve F(x) = the target in that piece.
4. Reject any root outside the piece.

## Worked reminder

f(x) = k x³ for 0 ≤ x ≤ 2, and 0 otherwise.

```
∫ k x³ dx (0 to 2) = k[x⁴/4] = 4k, so k = 1/4
F(x) = x⁴/16 for 0 ≤ x ≤ 2
Median: m⁴/16 = 1/2, m⁴ = 8, m = 8^(1/4) ≈ 1.68
Lower quartile: x⁴ = 4, x = √2 ≈ 1.41
Upper quartile: x⁴ = 12, x = 12^(1/4) ≈ 1.86
Mode: f increases throughout, so the mode is x = 2
E(X) = ∫ x⁴/4 dx = [x⁵/20] = 32/20 = 8/5
E(X²) = ∫ x⁵/4 dx = [x⁶/24] = 64/24 = 8/3
Var(X) = 8/3 − 64/25 = (200 − 192)/75 = 8/75
```

## Worked reminder: piecewise

```
f(x) = 1/4          for 0 ≤ x < 2
f(x) = (4 − x)/4    for 2 ≤ x ≤ 4
f(x) = 0            otherwise
```

Area: (1/4) × 2 = 1/2, and ∫ (4 − x)/4 dx from 2 to 4 = (1/4)[4x − x²/2] = (1/4)(8 − 6) = 1/2. The total is 1.

```
First piece:  F(x) = x/4, so F(2) = 1/2
Second piece: F(x) = 1/2 + (1/4)[4t − t²/2] from 2 to x
            = 1/2 + (1/4)(4x − x²/2 − 6)
            = x − x²/8 − 1          (check: F(4) = 1)
Median: F(2) = 1/2 exactly, so the median is 2
Lower quartile: x/4 = 1/4, so x = 1
Upper quartile: x − x²/8 − 1 = 3/4, so x² − 8x + 14 = 0
   x = 4 − √2 ≈ 2.59   (reject 4 + √2, which is above 4)
Mode: the larger piece value is f(2) = 1/2 from the second piece, so x = 2
E(X) = ∫ x/4 dx (0 to 2) + ∫ x(4 − x)/4 dx (2 to 4) = 1/2 + 4/3 = 11/6
```

Notice that f jumps at x = 2 but F does not. Probabilities are areas, so F is continuous even when f is not.

## Before you hand in an answer

- Does your cdf equal 0 at the bottom and 1 at the top?
- Is every value of f non-negative?
- Does your median lie between the quartiles, and all three inside the interval?
- Is your mean inside the interval? A mean outside the interval means an arithmetic slip.
- Is your variance positive? A negative variance means you subtracted the wrong quantity.

## Must-know distinctions

- **pdf and cdf.** The pdf f gives density, and is not a probability. The cdf F is a probability, between 0 and 1, and never decreases. A pdf can exceed 1 on a short interval. A cdf cannot.
- **Mean, median, mode.** The mean uses integration of x f(x). The median uses F = 1/2. The mode uses the peak of f. They are generally different numbers.
- **Differentiate or integrate.** From f to F you integrate. From F to f you differentiate.
- **Mode and median.** The mode is found from f, so you do not use the cdf for it. The median and quartiles are found from F.
- **Symmetry.** If f is symmetric about a, then E(X) = a and the median is also a.

## Quick self-test

1. f(x) = kx for 0 ≤ x ≤ 5, and 0 otherwise. Find k.
2. X is continuous. What is P(X = 3)?
3. F(x) = x²/16 for 0 ≤ x ≤ 4. Find P(X > 3).
4. For the cdf in question 3, find f(x), then the median.
5. For f(x) = x/8 on 0 ≤ x ≤ 4, find E(X).
6. For the same pdf, find Var(X).
7. What is the mode of f(x) = x/8 on 0 ≤ x ≤ 4?
8. For the cdf in question 3, find the lower and upper quartiles.
9. F(x) = (x − 2)³/8 for 2 ≤ x ≤ 4. Find f(x).
10. F(x) = x²/16 for 0 ≤ x < 2 and F(x) = (3x − 4)/8 for 2 ≤ x ≤ 4. Find the median.

### Answers

1. 25k/2 = 1, so **k = 2/25**.
2. **0**, because a single value has no width.
3. 1 − F(3) = 1 − 9/16 = **7/16**.
4. f(x) = dF/dx = **x/8** for 0 ≤ x ≤ 4. For the median, m²/16 = 1/2 gives m² = 8, so **m = 2√2 ≈ 2.83**.
5. ∫ x²/8 dx = [x³/24] from 0 to 4 = 64/24 = **8/3**.
6. E(X²) = ∫ x³/8 dx = [x⁴/32] = 8. Var(X) = 8 − 64/9 = **8/9**.
7. f is increasing, so the mode is at the right end, **x = 4**.
8. x²/16 = 1/4 gives **x = 2**. x²/16 = 3/4 gives x² = 12, so **x = 2√3 ≈ 3.46**.
9. **f(x) = 3(x − 2)²/8** for 2 ≤ x ≤ 4, and 0 otherwise.
10. F(2) = 4/16 = 1/4, which is below 1/2, so use the second piece. (3m − 4)/8 = 1/2 gives 3m = 8, so **m = 8/3**.

## Where marks are usually lost

- Integrating a piecewise pdf over one formula for the whole range instead of splitting at the boundary.
- Solving for k without using the total area of 1, or using f(x) = 1.
- Writing the second piece of F as an integral from 0 instead of adding the value of F at the boundary.
- Solving F(m) = 1/2 in the wrong piece, or keeping a root that lies outside the interval.
- Leaving the answer as E(X²) − E(X) or forgetting to square the mean.
- Stating f′(x) = 0 as the mode with no check that it is a maximum, or missing an endpoint mode.
- Dropping the "0 otherwise" or the limits when defining f(x) or F(x).
- Giving a rounded answer where the question asks for an exact value, or the other way round.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, Unit S2, section 2 (topics 2.1 to 2.5), published by Pearson Education Limited.
