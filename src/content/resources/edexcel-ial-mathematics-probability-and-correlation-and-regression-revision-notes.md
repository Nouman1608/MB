---
title: "Pearson Edexcel International Advanced Level Mathematics: Probability, and correlation and regression (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths Probability, Regression Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed notes on probability laws, tree and Venn diagrams, regression lines and correlation for Edexcel IAL Mathematics Unit S1, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense Unit S1 sections 3 and 4 (topics 3.1 to 3.4 and 4.1 to 4.3) from Pearson's International Advanced Subsidiary/Advanced Level specification (YMA01), Issue 3, April 2019, for Mathematics, Further Mathematics and Pure Mathematics. Per the specification, Unit S1 is optional, both for IAS and for IAL, in Mathematics and in Further Mathematics.

For full explanations and longer examples, read the [study guide](/resources/edexcel-ial-mathematics-probability-and-correlation-and-regression/). Test yourself with the [practice questions](/resources/edexcel-ial-mathematics-probability-and-correlation-and-regression-practice/), tick off topics on the [checklist](/checklists/edexcel/a-level/mathematics/), and return to the [course hub](/boards/edexcel/a-level/mathematics/). Use the [diagnostics](/diagnostics/) to decide what to revise first.

## Probability: results to know (3.1 to 3.3)

| Result | Notes |
|---|---|
| P(A) = favourable / total | Equally likely outcomes only |
| P(A′) = 1 − P(A) | "At least one" is often 1 − P(none) |
| P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | Sum law |
| P(A ∩ B) = P(A) P(B \| A) | Product law |
| P(B \| A) = P(A ∩ B) / P(A) | Conditional probability |
| Exclusive | P(A ∩ B) = 0 |
| Independent | P(B \| A) = P(B), or P(A \| B) = P(A), or P(A ∩ B) = P(A) P(B) |

### Must-know distinctions

| Exclusive | Independent |
|---|---|
| Cannot both happen | One happening does not change the chance of the other |
| P(A ∩ B) = 0 | P(A ∩ B) = P(A) P(B) |
| Add to get P(A ∪ B) | Multiply to get P(A ∩ B) |

If two events each have non-zero probability, they cannot be both exclusive and independent.

| With replacement | Without replacement |
|---|---|
| Probabilities are the same each draw | Total and number of the chosen kind both change |
| Draws are independent | Draws are dependent |

## Method boxes

**Venn diagram method**

1. Draw a rectangle for the whole sample space and a circle for each event.
2. Fill in the overlap (A ∩ B) first.
3. Subtract the overlap from each circle total to get the "only" regions.
4. Put what is left in the outside region. Check that all regions sum to the total.

**Worked reminder (two-set Venn).** If P(A) = 0.45, P(B) = 0.3 and P(neither) = 0.4, then P(A ∪ B) = 0.6 and P(A ∩ B) = 0.45 + 0.3 − 0.6 = 0.15. The regions are only A 0.30, both 0.15, only B 0.15, neither 0.40, and they sum to 1.

**Tree diagram method**

1. Put the first stage on the left. Label each branch with its probability.
2. Put second-stage branches on every first-stage branch, using conditional probabilities.
3. Multiply along each route. Add the routes that fit the event.
4. For a conditional probability, divide the right route(s) by the total for the condition.

**Worked reminder.** Bag A (chosen with probability 0.5) gives a red counter with probability 0.2. Bag B (0.5) gives red with probability 0.6. Then P(red) = 0.5 × 0.2 + 0.5 × 0.6 = 0.4, and P(bag A | red) = 0.1 / 0.4 = 0.25.

**Independence check by test.** Compute P(A) P(B) and compare it with P(A ∩ B). Equal means independent. For P(A) = 0.5, P(B) = 0.4, P(A ∪ B) = 0.8: P(A ∩ B) = 0.5 + 0.4 − 0.8 = 0.1, but P(A) P(B) = 0.2. Not independent.

## Regression (4.1, 4.2)

| Quantity | Formula |
|---|---|
| Sxx | Σx² − (Σx)²/n |
| Sxy | Σxy − (Σx)(Σy)/n |
| Syy | Σy² − (Σy)²/n |
| Gradient b | Sxy / Sxx |
| Intercept a | ȳ − b x̄ |
| Line | y = a + bx, always through (x̄, ȳ) |

The line is the least-squares line of y on x. Derivations are not required.

**Drawing it on a scatter diagram.** Plot the points with sensible scales. Mark (x̄, ȳ). Work out the line's value at two x-values near the ends of your data, plot them, and join them with a ruler. The line should pass through (x̄, ȳ). If a plotted point is far from the others, say so, because it can pull the line and r.

**Method in steps**

1. Find n, Σx, Σy, Σx², Σxy (and Σy² if you need r).
2. Work out Sxx and Sxy.
3. b = Sxy / Sxx, then a = ȳ − b x̄.
4. Write the equation using the variable letters in the question.
5. Interpret b in context (change in y per unit of x).

**Worked reminder.** n = 10, Σx = 82, Σy = 355, Σx² = 718, Σy² = 13 240, Σxy = 3057 give Sxx = 718 − 82²/10 = 45.6, Sxy = 3057 − (82)(355)/10 = 146, Syy = 13 240 − 355²/10 = 637.5. Then b = 146/45.6 ≈ 3.20, a = 35.5 − 3.2018(8.2) ≈ 9.25, so y = 9.25 + 3.20x. At x = 9 the line predicts about 38.1, and r = 146 / √(45.6 × 637.5) ≈ 0.856.

### Using the line

| Prediction | Verdict |
|---|---|
| x inside the data range | Interpolation: reasonable |
| x outside the data range | Extrapolation: unreliable, the pattern may change |
| Predicting the explanatory variable from the response | Not what the line is for |

- Explanatory (independent) variable: the one you vary or use. Response (dependent) variable: the one you predict.
- The constant a is the prediction at x = 0, which may be outside the data and meaningless.
- Letters other than x and y can appear. Match each letter to its role.

### Linear change of variable

Substitute the coding back into the line, then simplify. For q = a + bp with p = (x − h)/k and q = y − m: y = m + a + b(x − h)/k. Always check by choosing one point on the coded line and converting both coordinates.

## Correlation (4.3)

r = Sxy / √(Sxx Syy), with −1 ≤ r ≤ 1.

| r | Reading |
|---|---|
| Close to 1 | Points close to a line with positive gradient |
| Close to −1 | Points close to a line with negative gradient |
| Near 0 | No linear relationship (a curve is still possible) |

- Positive coding (multiplying by a positive number, adding a constant) leaves r unchanged. A negative multiplier on one variable flips its sign.
- Limits: correlation is not causation; r detects only linear patterns; outliers distort r; extrapolation stays risky.
- Tests of significance and derivations are not required.

## Quick self-test

1. A and B are independent, P(A) = 0.35, P(B) = 0.5. Find P(A ∩ B) and P(A ∪ B).
2. A and B are exclusive, P(A) = 0.6, P(B) = 0.3. Find P(A ∪ B) and P(A′ ∩ B′).
3. P(A ∩ B) = 0.12 and P(A) = 0.4. Find P(B | A).
4. A bag has 4 white and 6 black counters. Two are drawn without replacement. Find P(both black).
5. Sxx = 20, Sxy = 45, x̄ = 3, ȳ = 10. Find the regression line of y on x.
6. Use your line from question 5 at x = 4. The data had x from 1 to 6. Comment on predicting at x = 15.
7. With Sxx = 20, Sxy = 45 and Syy = 125, find r and describe the correlation.
8. A regression line of q on p is q = 4 + 3p, where p = (x − 5)/2 and q = y − 20. Find y in terms of x.
9. For (x, y), r = −0.8. Write r for (x, 7 − y) and say why.
10. In a group of 30, 14 like art, 11 like music and 5 like both. How many like neither, and what is P(art | music)?

### Answers

1. P(A ∩ B) = 0.35 × 0.5 = **0.175**. P(A ∪ B) = 0.35 + 0.5 − 0.175 = **0.675**.
2. P(A ∪ B) = **0.9**. P(A′ ∩ B′) = 1 − 0.9 = **0.1**.
3. 0.12 / 0.4 = **0.3**.
4. (6/10)(5/9) = **1/3**.
5. b = 45/20 = 2.25. a = 10 − 2.25 × 3 = 3.25. **y = 3.25 + 2.25x**.
6. y = 3.25 + 9 = **12.25**. x = 15 is well outside 1 to 6, so this is extrapolation and cannot be trusted.
7. r = 45 / √(20 × 125) = 45/50 = **0.9**: strong positive linear correlation.
8. y = 20 + 4 + 3(x − 5)/2 = **16.5 + 1.5x**.
9. **r = 0.8**: multiplying y by −1 reverses the direction of the association but keeps its strength.
10. Art or music: 14 + 11 − 5 = 20, so neither = **10**. P(art | music) = **5/11**.

## Where marks are usually lost

- Using P(late | rain) when the question asks for P(rain | late), and the other way round.
- Giving a conditional probability without dividing by the probability of the condition.
- Showing "independent" with a decimal comparison but not stating the conclusion.
- Writing "not independent" for exclusive events without checking P(A ∩ B).
- Forgetting that without replacement the denominator falls with each draw.
- Rounding a and b early, so that the predicted value is off in the third significant figure.
- Predicting far outside the data without a comment, or giving the comment without naming the range.
- Interpreting b as "y increases by b" and omitting units or the per-unit-of-x idea.
- Claiming a strong r proves cause, or that r = 0 means there is no relationship at all.
- Writing the final line in x and y when the question uses other letters.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification, Issue 3, April 2019, published by Pearson Education Limited. Unit S1: Statistics 1, sections 3 and 4.
