---
title: "OxfordAQA International AS and A-level Mathematics: Discrete random variables: expectation and variance (9660) -- Revision Notes"
seoTitle: "OxfordAQA Maths S1.2 Discrete Random Variables Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Discrete random variables: expectation, variance and combinations"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 184
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-s1-statistics-oxfordaqa-alevel-maths"
    subtopic: "s1-discrete-random-variables-oxfordaqa-alevel-maths"
description: "Condensed revision notes for OxfordAQA International AS and A-level Maths S1.2: formulae, method steps, key distinctions and a short self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These revision notes condense section S1.2 (Discrete random variables) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. This content is part of International AS, Unit PSM1 (section 3.2, S1). For full explanations and longer worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-discrete-random-variables-expectation-variance-and/). Then use the [practice questions](/resources/oxfordaqa-a-level-mathematics-discrete-random-variables-expectation-variance-and-practice/), the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the free [10-minute diagnostics](/diagnostics/).

## Key definitions

- A discrete random variable X takes a finite set of values x, each with probability P(X = x).
- A valid distribution has 0 ≤ P(X = x) ≤ 1 and Σ P(X = x) = 1.
- The mean E(X) = μ is the probability-weighted average of the values.
- The variance Var(X) = σ² measures spread about the mean. The standard deviation is σ = √Var(X).
- Independent variables: knowing the value of one tells you nothing about the other.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--02-mean-balance-point.webp" width="900" height="820" alt="A bar chart of X = 0 to 4 with probabilities 0.10, 0.30, 0.35, 0.20, 0.05 balanced on a plank with the pivot at 1.8 = E(X). A gold band shows the mean plus and minus one standard deviation, 1.03. E(X^2) = 4.3 so Var(X) = 4.3 - 3.24 = 1.06." loading="lazy">
  <figcaption>E(X) is where the distribution balances; Var(X) measures spread about it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--03-linear-change-ax-b.webp" width="900" height="920" alt="Two bar charts on one scale. X takes 0 to 4 with mean 1.8 and variance 1.06. Y = 4X - 3 takes -3, 1, 5, 9, 13 with the same bar heights: the mean moves to 4.2 and the variance is 16 times larger, 16.96. Adding b shifts, multiplying by a stretches." loading="lazy">
  <figcaption>Shifting moves the mean only; scaling by a multiplies the variance by a squared.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--04-discrete-uniform.webp" width="900" height="770" alt="Ten equal bars of height 0.1 for X = 1 to 10. The mean 5.5 is at the centre and a gold band marks one standard deviation either side. For n = 10, E(X) = 5.5 and Var(X) = 99/12 = 8.25; a fair die (n = 6) has mean 3.5 and variance 35/12." loading="lazy">
  <figcaption>Equal bars: the mean sits at the centre, (n + 1)/2.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--09-binomial-mean-variance.webp" width="900" height="1170" alt="Three bar charts of B(20, p). For p = 0.2 the mean is 4 and the variance 3.2; for p = 0.5 the mean is 10 and the variance 5, the widest; for p = 0.8 the mean is 16 and the variance 3.2. A dashed line marks each mean and a gold band one standard deviation either side." loading="lazy">
  <figcaption>Mean np and variance npq, and why the spread is greatest at p = 0.5.</figcaption>
</figure>


## Formulae to learn

The specification states that knowledge of these is expected.

| Result | Formula |
|---|---|
| Mean | E(X) = μ = Σ x p |
| Mean of a function | E(g(X)) = Σ g(x) p |
| Variance | Var(X) = E((X − μ)²) = E(X²) − μ² |
| Second moment | E(X²) = Σ x² p |
| Linear function | E(aX + b) = a E(X) + b |
| Linear function | Var(aX + b) = a² Var(X) |
| Two independent variables | E(aX ± bY) = a E(X) ± b E(Y) |
| Two independent variables | Var(aX ± bY) = a² Var(X) + b² Var(Y) |
| Sums | E(ΣXᵢ) = ΣE(Xᵢ) and Var(ΣXᵢ) = ΣVar(Xᵢ) for independent Xᵢ |

Examples of functions named in the specification: E(2X + 3), E(5X²), E(10X⁻¹), E(100X⁻²), Var(3X), Var(4X − 5), Var(6X⁻¹).

## Method boxes

**Mean and variance from a table**
1. Check or find the unknown so that Σ p = 1.
2. Add a row for x p and a row for x² p.
3. E(X) = Σ x p and E(X²) = Σ x² p.
4. Var(X) = E(X²) − (E(X))². Check it is not negative.
5. Square-root for the standard deviation.

**E(g(X)) for a non-linear g**
1. Apply g to each x in the table, keeping the same probabilities.
2. Multiply each g(x) by its probability and add.
3. Never put E(X) into g.

**Var(g(X)) for a non-linear g**
1. Find E(g(X)) as above.
2. Find E(g(X)²) as above.
3. Var(g(X)) = E(g(X)²) − (E(g(X)))².

**Combining independent variables**
1. Write down E and Var of each variable.
2. Means follow the signs and coefficients. Variances use the squared coefficients and are always added.
3. Take the square root last if a standard deviation is wanted.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--05-variance-adds.webp" width="900" height="930" alt="Two bar charts on the same scale for two independent fair dice. X + Y runs from 2 to 12 with mean 7. X - Y runs from -5 to 5 with mean 0. Both have the same spread, variance 35/6 = 5.83, because Var(X +/- Y) = Var(X) + Var(Y)." loading="lazy">
  <figcaption>Means follow the sign; variances always add, so X + Y and X - Y have the same spread.</figcaption>
</figure>


## Worked reminder

W takes the values 10, 20, 30 with probabilities 0.2, 0.5, 0.3.

```
E(W)   = 2 + 10 + 9 = 21
E(W²)  = 100(0.2) + 400(0.5) + 900(0.3) = 20 + 200 + 270 = 490
Var(W) = 490 − 21² = 490 − 441 = 49, so σ = 7
E(W/10) = 2.1, Var(W/10) = 49/100 = 0.49
```

## Distributions given by a function

Write the table out first. For P(X = x) = kx for x = 1, 2, 3, the probabilities are k, 2k, 3k, so 6k = 1 and k = 1/6. Then E(X) = (1 + 4 + 9)/6 = 7/3 and E(X²) = (1 + 8 + 27)/6 = 6, so Var(X) = 6 − 49/9 = 5/9. The same steps work for any rule on a finite list of values.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--01-pmf-to-cdf.webp" width="900" height="1076" alt="Two bar charts for a variable with p(x) = (6 minus x)/14 for x = 1 to 4. The top chart shows p(x) as 5/14, 4/14, 3/14, 2/14 with x = 3 and 4 highlighted as P(X &gt; 2). The lower chart shows F(x) = 5/14, 9/14, 12/14, 1, and the gap from F(2) up to 1 equals 5/14, so P(X &gt; 2) = 1 - F(2)." loading="lazy">
  <figcaption>How p(x) builds F(x), and why P(X &gt; 2) = 1 - F(2) = 5/14.</figcaption>
</figure>


## Worked reminder: combining variables

A and B are independent. E(A) = 8, Var(A) = 2.5, E(B) = 5 and Var(B) = 1.5.

```
E(2A − B)    = 16 − 5 = 11
Var(2A − B)  = 4(2.5) + 1(1.5) = 11.5
E(A + B)     = 13
Var(A + B)   = 2.5 + 1.5 = 4, so sd = 2
```

Now let T be the total of 6 independent copies of A.

```
E(T)   = 6 × 8   = 48
Var(T) = 6 × 2.5 = 15
```

For comparison, 6A has mean 48 and variance 36 × 2.5 = 90.

## Choosing the right result

| The question says | Use |
|---|---|
| "each value is increased by 4" or "converted to new units" | E(aX + b), Var(aX + b) |
| "the average of the reciprocal", "the mean of the square" | E(g(X)) = Σ g(x) p |
| "the variance of the reciprocal" | E(g²) − (E(g))² |
| "X and Y are independent" and a combination is asked | E(aX ± bY), Var(aX ± bY) |
| "n independent plays/readings, total" | nE(X) and n Var(X) |
| "the same reading multiplied by n" | nE(X) and n² Var(X) |

## Must-know distinctions

- E(X²) is Σ x² p. It is not (E(X))². The gap between them is the variance.
- Var(aX + b) ignores b and squares a. Var(−X) = Var(X).
- Var(X − Y) = Var(X) + Var(Y) for independent X and Y. The variance never subtracts.
- nX is one observation scaled: Var(nX) = n² Var(X). X₁ + … + Xₙ is n independent observations added: variance n Var(X). The means are both nE(X).
- E(10/X) is not 10/E(X). Work from the table.
- The mean formula for aX ± bY holds always. The variance formula needs independence.
- Variance is in squared units. Standard deviation is in the original units.

## Quick self-test

1. X takes the values 0, 1, 2 with probabilities 0.5, k, 0.2. Find k.
2. Find E(X) for the variable in question 1.
3. Find Var(X) for the variable in question 1.
4. E(X) = 5 and Var(X) = 4. Find E(3X − 1) and Var(3X − 1).
5. Var(X) = 4. Find Var(−2X).
6. Y takes the values 1, 2, 4 with probabilities 0.5, 0.25, 0.25. Find E(8/Y) and compare it with 8/E(Y).
7. For Y in question 6, find E(3Y²).
8. X and Y are independent with E(X) = 6, E(Y) = 2, Var(X) = 3 and Var(Y) = 5. Find E(X − Y) and Var(X − Y).
9. For X and Y in question 8, find Var(2X + 3Y).
10. Each of 10 independent readings has mean 2.5 and variance 0.5. Find the mean and variance of the total of the 10 readings, and the variance of 10 times a single reading.
11. P(X = x) = k(x + 1) for x = 0, 1, 2. Find k and E(X).
12. For a random variable X, E(X²) = 13 and E(X) = 3. Find Var(X), the standard deviation, and Var(5 − X).

### Answers

1. 0.5 + k + 0.2 = 1, so **k = 0.3**.
2. 0(0.5) + 1(0.3) + 2(0.2) = **0.7**.
3. E(X²) = 0.3 + 4(0.2) = 1.1, so Var(X) = 1.1 − 0.7² = **0.61**.
4. E = 3(5) − 1 = **14**; Var = 9 × 4 = **36**.
5. (−2)² × 4 = **16**.
6. E(Y) = 0.5 + 0.5 + 1 = 2, so 8/E(Y) = 4. The values of 8/Y are 8, 4 and 2, so E(8/Y) = 8(0.5) + 4(0.25) + 2(0.25) = 4 + 1 + 0.5. **E(8/Y) = 5.5, which differs from 8/E(Y) = 4.**
7. E(Y²) = 0.5 + 1 + 4 = 5.5, so E(3Y²) = **16.5**.
8. E(X − Y) = 6 − 2 = **4**; Var(X − Y) = 3 + 5 = **8**.
9. 4(3) + 9(5) = 12 + 45 = **57**.
10. Mean 10 × 2.5 = **25**; variance 10 × 0.5 = **5**; variance of 10 times one reading = 100 × 0.5 = **50**.
11. The probabilities are k, 2k, 3k, so 6k = 1 and **k = 1/6**. E(X) = (0 + 2 + 6)/6 = **4/3**.
12. Var(X) = 13 − 9 = **4**; σ = **2**; Var(5 − X) = (−1)² × 4 = **4**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--08-binomial-probabilities.webp" width="900" height="1040" alt="Two bar charts of B(12, 0.35). The bar at x = 4 is highlighted: P(X = 4) = 495 x 0.35^4 x 0.65^8 = 0.2367. In the second chart the bars up to 4 sum to 0.5833 and those from 5 upward sum to 1 - 0.5833 = 0.4167, so P(X &gt;= 5) = 1 - P(X &lt;= 4)." loading="lazy">
  <figcaption>A single probability, and why &quot;at least 5&quot; is one minus the cumulative probability up to 4.</figcaption>
</figure>


## How to present working

Examiners can only reward what they can see, so set the working out in the order of the method boxes.

- Draw the table with extra rows for x p and x² p. Errors are easy to spot in a table and hard to spot in a long line of arithmetic.
- Write the formula you are using before substituting. A correct formula with an arithmetic slip is easier to follow than a bare number.
- Show E(X²) separately before subtracting μ². State the answer as a fraction or exact decimal where you can.
- For combinations, list E and Var of each variable first, then substitute into the formula with the coefficients visible.
- Finish with a sentence naming what you found, such as "the variance of the total is 15".

## Where marks are usually lost

- Squaring E(X) instead of summing x² p, giving a wrong or negative variance.
- Writing Var(aX + b) = a Var(X) + b, or forgetting to square a.
- Subtracting variances for a difference of independent variables.
- Replacing E(10/X) by 10/E(X), or E(5X²) by 5(E(X))².
- Confusing 2X with X₁ + X₂ when the question describes separate observations.
- Rounding E(X) early and carrying an inexact value into the variance. Keep fractions or full decimals until the end.
- Giving the variance when the standard deviation is asked for, or the reverse.
- Not stating independence when you add variances; say it in your working.
- Not checking that probabilities add to 1 before finding E(X).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--06-binomial-conditions.webp" width="900" height="1000" alt="Four cards show the conditions for B(n, p): a fixed number of trials, two outcomes, independent trials and the same probability p each time. Three failures are listed: cards dealt without replacement, throws until the first six, and rain on following days." loading="lazy">
  <figcaption>The four conditions, and three situations where the model fails.</figcaption>
</figure>


## Frequently asked questions

**What are the formulae for E(aX + b) and Var(aX + b)?**
E(aX + b) = a E(X) + b and Var(aX + b) = a² Var(X). Adding b does not change the spread, and a is squared, so Var(−X) = Var(X).

**What is the difference between nX and the sum of n independent copies of X?**
Both have mean nE(X), but Var(nX) = n² Var(X), while the sum of n independent copies has variance n Var(X). Choose the formula from the wording of the question.

**How do you find the variance of a non-linear function such as 6/X?**
Find E(g(X)) and E(g(X)²) from the table, then use Var(g(X)) = E(g(X)²) − (E(g(X)))². The linear shortcut does not apply.

**What makes a probability distribution valid?**
Every probability must be between 0 and 1 inclusive, and all the probabilities must add up to 1. Use the total of 1 to find any unknown constant before calculating the mean.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section S1.2 Discrete random variables. Published by OxfordAQA; International AS exams from May/June 2018 and International A-level exams from May/June 2019.
