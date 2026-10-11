---
title: "OxfordAQA International AS and A-level Mathematics: Probability density and cumulative distribution functions (9660) -- Revision Notes"
seoTitle: "OxfordAQA A-level Maths pdf and cdf Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Probability density and cumulative distribution functions"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 202
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-oxfordaqa-alevel-maths"
    subtopic: "s2-continuous-random-variables-oxfordaqa-alevel-maths"
description: "Condensed revision notes on pdf and cdf for OxfordAQA International A-level Maths: formulae, method steps, medians and quartiles, and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These are condensed notes for the first part of section S2.2 (Continuous random variables) of the OxfordAQA International AS and A-level Mathematics specification (9660), Version 5.2. The content belongs to International A-level Unit S2 (Statistics) and is not examined at International AS. For full explanations and longer worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-probability-density-and-cumulative-distribution/). Test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-probability-density-and-cumulative-distribution-practice/), tick topics off on the [checklist](/checklists/oxfordaqa/a-level/mathematics/), and see the [course hub](/boards/oxfordaqa/a-level/mathematics/). For a quick check of where you stand, try the [free diagnostics](/diagnostics/).

## Discrete or continuous

| | Discrete | Continuous |
|---|---|---|
| Values | Separate, countable | Any value in an interval |
| P(X = a) | Can be positive | Exactly 0 |
| Described by | P(X = x) | pdf f(x) |
| Probability from | Adding | Area under f |

Because P(X = a) = 0, the signs ≤ and < give the same probability for a continuous variable:
P(X < a) = P(X ≤ a) and P(a < X < b) = P(a ≤ X ≤ b).

## Key results

| Result | Statement |
|---|---|
| Valid pdf | f(x) ≥ 0 everywhere, and total area = 1 |
| Interval probability | P(a < X < b) = ∫ f(x) dx from a to b |
| Single value | P(X = a) = 0 |
| cdf from pdf | F(x) = ∫ f(t) dt from −∞ to x = P(X ≤ x) |
| pdf from cdf | f(x) = dF/dx |
| Interval from cdf | P(a < X < b) = F(b) − F(a) |
| Upper tail | P(X > a) = 1 − F(a) |
| Ends of the cdf | F = 0 below the range, F = 1 above it |

f(x) is a height, not a probability. It can exceed 1. Example: f(x) = 2 for 0 ≤ x ≤ 1/2 has area 1.

## Method boxes

### Finding an unknown constant in a pdf

1. Integrate f over its range, keeping the constant.
2. Set the result equal to 1.
3. Solve. Check that f stays non-negative with that constant.

### Building a cdf from a piecewise pdf

1. Take the first piece: F(x) = ∫ f(t) dt from the lower end to x.
2. Find F at the end of that piece.
3. Next piece: F(x) = (F at the start of the piece) + ∫ f(t) dt from the start of the piece to x.
4. Check the last piece reaches 1 at the top of the range.
5. Write out F(x) = 0 below and F(x) = 1 above.

### Finding a median or quartile

1. Median: F(m) = 1/2. Lower quartile: F = 1/4. Upper quartile: F = 3/4.
2. Compare the target with F at each break point to pick the piece.
3. Solve in that piece and reject any root outside its range.

### Using a conditional probability

P(X > b | X > a) = P(X > b)/P(X > a) = (1 − F(b))/(1 − F(a)), for b > a.

## Worked reminders

**Constant.** f(x) = k(x + 1) for 1 ≤ x ≤ 3. The area is k[x²/2 + x] from 1 to 3 = k(15/2 − 3/2) = 6k, so k = 1/6.

**cdf to pdf.** F(x) = x²/25 for 0 ≤ x ≤ 5. Then f(x) = 2x/25 on that range, and P(X > 3) = 1 − 9/25 = 16/25.

**Median from a pdf.** f(x) = 2(1 − x) for 0 ≤ x ≤ 1. F(x) = 2x − x². Solve 2m − m² = 1/2, i.e. m² − 2m + 1/2 = 0, so m = 1 ± 1/√2. Only m = 1 − 1/√2 ≈ 0.293 lies in the range.

**Upper quartile.** f(x) = 3x²/8 for 0 ≤ x ≤ 2. F(x) = x³/8. Solve x³/8 = 3/4, so x³ = 6 and Q₃ = ∛6 ≈ 1.817.

## A full two-piece reminder

```
f(x) = 1/6        for 0 ≤ x < 3
f(x) = (5 − x)/4  for 3 ≤ x ≤ 5
f(x) = 0          otherwise
```

Areas: 3 × 1/6 = 1/2, and (1/4)[5x − x²/2] from 3 to 5 = (1/4)(25/2 − 21/2) = 1/2. The total is 1, so f is a valid pdf.

```
0 ≤ x < 3:   F(x) = x/6, so F(3) = 1/2
3 ≤ x ≤ 5:   F(x) = 1/2 + (1/4)(5x − x²/2 − 21/2) = −x²/8 + 5x/4 − 17/8
F(5) = −25/8 + 25/4 − 17/8 = 1  (check)
```

Median: F(3) = 1/2 exactly, so the median is **3**, the break point itself. Upper quartile: F(x) = 3/4 lies in the second piece, giving x² − 10x + 23 = 0, so x = 5 ± √2. Only **5 − √2 ≈ 3.59** is in 3 ≤ x ≤ 5. Interval: P(2 < X < 4) = F(4) − F(2) = 7/8 − 1/3 = **13/24**.

## Reading the question

Command words point to a method. Check each part of the question against this table before you start, and write the probability statement (for example F(m) = 1/2) before substituting.

| The question says | You do |
|---|---|
| "Show that f is a probability density function" | Show f ≥ 0 and that the area equals 1 |
| "Find the cumulative distribution function" | Integrate piece by piece, then state 0 below and 1 above |
| "Find P(a < X < b)" | Integrate f from a to b, or use F(b) − F(a) |
| "Given the cdf, find the pdf" | Differentiate each piece |
| "Find the median" or "quartile" | Solve F = 1/2, or 1/4, or 3/4 |
| "Find the value c such that P(X > c) = 0.2" | Solve F(c) = 0.8 |
| "Given that P(X < c) = 0.35, find the constant" | Write F(c) = 0.35 and solve for the unknown |
| "Find the probability that X > a, given that X > b" | Use 1 − F on top and bottom, as in the method box above |

## Sketching the shapes

A pdf that rises then falls has its highest point where the probability density is greatest. A cdf always starts at 0, never decreases, and ends at 1. Where the pdf is large, the cdf is steep; where the pdf is zero, the cdf is flat. Use these facts to check a sketch.

## Must-know distinctions

- Density versus probability: f(x) is a height; probability is area.
- pdf versus cdf: the pdf is the derivative of the cdf, and the cdf is the running area under the pdf.
- P(X ≤ a) versus P(X = a): the second is 0 for a continuous variable.
- Piece boundaries: F must be continuous, so the two expressions agree at each break point.
- A quantile equation F(x) = p has p on the right-hand side as a probability, not as a percentage.

## Quick self-test

1. f(x) = kx for 0 ≤ x ≤ 4, and 0 otherwise. Find k.
2. F(x) = x²/25 for 0 ≤ x ≤ 5 (0 below, 1 above). Find P(X > 3).
3. f(x) = 2(1 − x) for 0 ≤ x ≤ 1. Find the median.
4. State why f(x) = 2 on 0 ≤ x ≤ 1/2 can be a pdf even though 2 > 1.
5. X is continuous. Write down P(X = 0.3), and say whether P(X < 0.3) and P(X ≤ 0.3) differ.
6. f(x) = 3x²/8 for 0 ≤ x ≤ 2. Find the upper quartile to 3 significant figures.
7. Explain why f(x) = x − 1 for 0 ≤ x ≤ 2 is not a pdf.
8. f(x) = k(x + 1) for 1 ≤ x ≤ 3. Find k.
9. F(x) = x²/9 for 0 ≤ x ≤ 3. Find the value a with P(X < a) = 0.9, to 3 significant figures.
10. f(x) = x/18 for 0 ≤ x ≤ 6. Find P(X > 4 | X > 2).

### Answers

1. ∫ kx dx = 8k = 1, so **k = 1/8**.
2. 1 − F(3) = 1 − 9/25 = **16/25**.
3. F(x) = 2x − x²; 2m − m² = 1/2 gives **m = 1 − 1/√2 ≈ 0.293**.
4. The area is 2 × 1/2 = 1 and f ≥ 0. f is a height, not a probability, so it can exceed 1.
5. **P(X = 0.3) = 0**, and the two probabilities are equal.
6. x³/8 = 3/4 gives x³ = 6, so **Q₃ ≈ 1.82**.
7. f(x) < 0 for 0 ≤ x < 1, and a density cannot be negative. (Its integral over 0 ≤ x ≤ 2 is also 0, not 1.)
8. **k = 1/6**.
9. a²/9 = 0.9 gives a² = 8.1, so **a ≈ 2.85**.
10. F(x) = x²/36. P(X > 4 | X > 2) = (1 − 16/36)/(1 − 4/36) = (20/36)/(32/36) = **5/8**.

## Where marks are usually lost

- Writing f(x) = 1 or "total probability = 1" instead of showing that the integral equals 1.
- Integrating a piecewise pdf over the whole range with a single expression.
- Omitting the probability already accumulated when building a later piece of F.
- Not stating F(x) = 0 and F(x) = 1 outside the range in a full cdf.
- Accepting a root of the quantile equation that lies outside the piece being solved.
- Using a percentage (50) instead of a probability (0.5) in F(m) = ...
- Differentiating F and forgetting to state the range, or that f = 0 elsewhere.
- Rounding an exact answer early and then giving an inaccurate final value.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), specification Version 5.2, published by OxfordAQA: section 3.4 International A-level Unit S2 (Statistics), S2.2 Continuous random variables.
