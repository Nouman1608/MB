---
title: "Pearson Edexcel International Advanced Level Mathematics: Probability, and correlation and regression (YMA01)"
seoTitle: "Edexcel IAL Maths Probability and Regression Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Probability, and correlation and regression"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 162
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-probability-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-correlation-and-regression-edexcel-alevel-maths"
description: "Study guide to probability, Venn and tree diagrams, least-squares regression and correlation for Edexcel IAL Mathematics Unit S1, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide is written against Pearson's International Advanced Subsidiary/Advanced Level specification for Mathematics, Further Mathematics and Pure Mathematics (YMA01), Issue 3, April 2019. It covers Unit S1 section 3 (Probability, topics 3.1 to 3.4) and section 4 (Correlation and regression, topics 4.1 to 4.3). Per the specification, Unit S1 is optional, both for IAS and for IAL, in Mathematics and in Further Mathematics.

Pair it with the [revision notes](/resources/edexcel-ial-mathematics-probability-and-correlation-and-regression-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-probability-and-correlation-and-regression-practice/). The [course hub](/boards/edexcel/a-level/mathematics/) and the [printable checklist](/checklists/edexcel/a-level/mathematics/) show where this unit sits. If you are unsure where to start, the [diagnostics](/diagnostics/) will point you to gaps.

## What this unit covers

| Topic | You must be able to |
|---|---|
| 3.1 | Use elementary probability |
| 3.2 | Use a sample space; exclusive and complementary events; conditional probability; P(A′) = 1 − P(A), P(A ∪ B) = P(A) + P(B) − P(A ∩ B), P(A ∩ B) = P(A) P(B \| A) |
| 3.3 | Decide whether two events are independent and use the results |
| 3.4 | Apply the sum and product laws with tree and Venn diagrams, with and without replacement |
| 4.1 | Draw scatter diagrams; find a least-squares regression line and draw it |
| 4.2 | Name explanatory and response variables; predict inside the data range; explain the danger of extrapolation; use a linear change of variable |
| 4.3 | Calculate and interpret the product moment correlation coefficient, and state its limitations |

The specification says derivations are not required for topic 4.2, and that derivations and tests of significance are not required for topic 4.3.

## Probability: sample space and the basic laws (3.1, 3.2)

For equally likely outcomes, P(A) = (outcomes in A) / (all outcomes). A sample space lists every outcome once. A table or a grid is the safest way to avoid missing any.

| Result | Meaning |
|---|---|
| P(A′) = 1 − P(A) | A′ is "A does not happen" (the complement) |
| P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | "A or B or both" |
| Exclusive events | They cannot happen together, so P(A ∩ B) = 0 and P(A ∪ B) = P(A) + P(B) |
| P(A ∩ B) = P(A) P(B \| A) | The product law |
| P(B \| A) = P(A ∩ B) / P(A) | Rearranged product law, for conditional probability |

The specification lists P(A′) = 1 − P(A) and the independence results among the formulae you are expected to know. Learn all of the table above.

**Example 1.** Spinner X shows 1, 2, 3 and spinner Y shows 1, 2, 3, 4. Each is fair. Both are spun and the two scores are recorded as (x, y). Find (a) P(sum ≥ 6), (b) P(product is even), (c) P(sum ≥ 6 given product is even).

The sample space has 3 × 4 = 12 equally likely outcomes.

(a) The sum is at least 6 for (2, 4), (3, 3) and (3, 4). P = 3/12 = 1/4.

(b) The product is odd only when both scores are odd: x ∈ {1, 3} and y ∈ {1, 3}, which is 4 outcomes. P(even) = 1 − 4/12 = 2/3.

(c) Product even and sum ≥ 6 gives (2, 4) and (3, 4), so 2 outcomes. P = 2/8 = 1/4.

Part (c) equals the answer to (a), which is what independence looks like (see below).

## Venn diagrams (3.4)

A Venn diagram splits the sample space into regions that do not overlap. Fill in the overlap first, then work outwards.

**Example 2.** In a club of 60 members, 35 play chess, 28 play bridge and 12 play neither. Find P(a bridge player also plays chess) and decide whether "plays chess" and "plays bridge" are independent.

Members who play at least one game: 60 − 12 = 48. Both games: 35 + 28 − 48 = 15.

```
Only chess 20 | Both 15 | Only bridge 13 | Neither 12   (total 60)
```

P(chess | bridge) = 15/28.

Independence test: P(C) P(B) = (35/60)(28/60) = 49/180, but P(C ∩ B) = 15/60 = 45/180. These differ, so the events are not independent.

## Tree diagrams and the product law (3.2, 3.4)

On a tree, multiply along branches (product law) and add the ends of different routes (sum law). Branches from one node sum to 1. After the first stage, the second-stage probabilities are conditional.

**Example 3.** P(rain) = 0.3. If it rains, the bus is late with probability 0.4. If it is dry, the bus is late with probability 0.1. Find P(late), then P(it rained given the bus was late).

```
Rain (0.3) -> Late (0.4)      0.3 x 0.4 = 0.12
Rain (0.3) -> On time (0.6)   0.3 x 0.6 = 0.18
Dry  (0.7) -> Late (0.1)      0.7 x 0.1 = 0.07
Dry  (0.7) -> On time (0.9)   0.7 x 0.9 = 0.63
```

P(late) = 0.12 + 0.07 = 0.19.

P(rain | late) = P(rain ∩ late) / P(late) = 0.12 / 0.19 = 12/19 ≈ 0.632.

Notice that P(rain | late) is not 0.4. The branch value 0.4 is P(late | rain), the other way round.

## Independence (3.3)

Events A and B are independent when knowing one happened tells you nothing about the other:

P(B | A) = P(B), P(A | B) = P(A), P(A ∩ B) = P(A) P(B).

Any one of these three can be used as the test. Independent and exclusive are different ideas. If A and B are exclusive and both can happen, then P(A ∩ B) = 0 but P(A) P(B) > 0, so they are not independent.

**Example 4.** P(A) = 2/5 and P(A ∪ B) = 7/10. Find P(B) if (a) A and B are independent, (b) A and B are exclusive.

(a) Let P(B) = p. Then P(A ∪ B) = 2/5 + p − (2/5)p = 7/10, so (3/5)p = 3/10 and p = 1/2.

(b) Here P(A ∩ B) = 0, so 2/5 + p = 7/10 and p = 3/10.

## Sampling with and without replacement (3.4)

With replacement, the probabilities stay the same at each draw, so the draws are independent. Without replacement, both the number of items and the number of the chosen kind change, so each draw depends on the earlier ones.

**Example 5.** A bag holds 5 red, 3 blue and 2 green counters. Three are taken one at a time, without replacement. Find P(one of each colour). Compare with replacement.

One order, red then blue then green: (5/10)(3/9)(2/8) = 1/24.

There are 3! = 6 orders, each with the same probability (the numerators 5, 3, 2 are just rearranged). P = 6 × 1/24 = 1/4.

With replacement every denominator is 10: 6 × (5/10)(3/10)(2/10) = 9/50 = 0.18.

## Scatter diagrams and the regression line (4.1)

A scatter diagram plots pairs (x, y). The least-squares regression line of y on x is the line y = a + bx that makes the sum of the squared vertical distances from the points as small as possible. You do not need to derive it. Use the summary quantities

Sxx = Σx² − (Σx)²/n, Sxy = Σxy − (Σx)(Σy)/n, Syy = Σy² − (Σy)²/n,

then b = Sxy / Sxx and a = ȳ − b x̄. The line always passes through (x̄, ȳ), which gives you a check and a second point for drawing it.

**Example 6.** A company records the age x (years) of eight machines and each machine's monthly repair cost y (£).

| x | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| y | 42 | 55 | 51 | 68 | 74 | 70 | 89 | 95 |

Σx = 36, Σy = 544, Σx² = 204, Σy² = 39 336, Σxy = 2750.

Sxx = 204 − 36²/8 = 42. Sxy = 2750 − (36)(544)/8 = 302. Syy = 39 336 − 544²/8 = 2344.

b = 302/42 = 151/21 ≈ 7.19. x̄ = 4.5 and ȳ = 68, so a = 68 − (151/21)(4.5) ≈ 35.6.

**y = 35.6 + 7.19x** (3 s.f.). Check: at x = 4.5 the line gives 68. To draw it, plot (1, 42.8) and (8, 93.2), or use (x̄, ȳ) as one point.

## Using the line: explanatory and response variables (4.2)

The explanatory (independent) variable is the one you choose or use to explain the other. The response (dependent) variable is the one you predict. In Example 6, age is explanatory and cost is the response. The specification allows letters other than x and y, so read the question to see which variable is which.

- The gradient b is the change in predicted y for each one-unit rise in x. Here, each extra year adds about £7.19 to the predicted monthly cost.
- The constant a is the predicted y when x = 0. It means something only if x = 0 makes sense and is near the data.
- Predicting inside the range of x in the data (interpolation) is reasonable. At x = 6.5 the line gives 35.6 + 7.19(6.5) ≈ £82.4.
- Predicting outside the range (extrapolation) is risky because the pattern may not continue. At x = 12 the line gives about £122, but no machine older than 8 years was observed, so you cannot trust it.

## Linear change of variable (4.2)

Data are sometimes coded, for example p = (T − 1990)/10 and q = (C − 20)/5. A regression line found for the coded values can be converted back by substituting.

**Example 7.** Prices C (£) were recorded for years T from 1990 to 2010. With p = (T − 1990)/10 and q = (C − 20)/5, the regression line is q = 2.4 + 0.8p. Find C in terms of T and estimate C for T = 2004.

C = 20 + 5q = 20 + 5(2.4 + 0.8p) = 32 + 4p = 32 + 4(T − 1990)/10 = 32 + 0.4T − 796.

**C = 0.4T − 764.** At T = 2004: C = 801.6 − 764 = 37.6. This is interpolation (2004 is inside 1990 to 2010).

## Product moment correlation coefficient (4.3)

r = Sxy / √(Sxx Syy), and −1 ≤ r ≤ 1. A value of 1 means all points lie exactly on a line with positive gradient, −1 means a line with negative gradient, and a value near 0 means no linear relationship. The sign of r is always the sign of b.

For Example 6: r = 302 / √(42 × 2344) = 302 / 313.76 ≈ 0.963. This is strong positive linear correlation: older machines tend to cost more to repair.

Coding does not change r when both scale factors are positive. If one variable is multiplied by a negative number, r changes sign but keeps its size.

Limitations to state in your own words:

- Correlation is not causation. Both variables may depend on a third one. Machine usage might drive both age-related wear and repair cost.
- r measures only linear association. If y = (x − 5)² for x = 1, 2, …, 9, the points fit a curve perfectly, yet r = 0.
- A single outlier can change r a lot.
- A high r does not make extrapolation safe.

## Common errors

- Using P(late | rain) = 0.4 as if it were P(rain | late).
- Adding along tree branches or multiplying between routes: it is the other way round.
- Keeping the same denominators when sampling without replacement.
- Treating exclusive events as independent.
- Writing b = Sxx / Sxy, or forgetting the (Σx)(Σy)/n term in Sxy.
- Quoting a regression line to many more significant figures than the data justify, or rounding a and b early and then predicting.
- Saying "a high r proves that x causes y".

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification, Issue 3, April 2019, published by Pearson Education Limited. Unit S1: Statistics 1, sections 3 and 4.
