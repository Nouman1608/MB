---
title: "Pearson Edexcel International Advanced Level Mathematics: Discrete random variables (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths S1 Discrete Random Variables Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Discrete random variables: probability functions, expectation, variance and the discrete uniform distribution"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 163
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-discrete-random-variables-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-discrete-distributions-edexcel-alevel-maths"
description: "Condensed revision notes for Edexcel IAL Maths S1 section 5: formulas, method steps, a self-test with answers and the usual ways marks are lost."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These revision notes are aligned to the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics (YMA01) specification, Issue 3, April 2019, unit S1 section 5 (topics 5.1 to 5.4). The specification states that S1 is an optional unit for IAS Mathematics and Further Mathematics and for IAL Mathematics and Further Mathematics. Read the [study guide](/resources/edexcel-ial-mathematics-discrete-random-variables-probability-functions/) for the full explanations and examples, then test yourself with the [practice questions](/resources/edexcel-ial-mathematics-discrete-random-variables-probability-functions-practice/).

Related pages: the [Edexcel A Level Mathematics course page](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/).

## Key ideas by topic

| Topic | Remember |
|---|---|
| 5.1 | X is the random variable, x is a value it takes. Discrete means separate, listable values |
| 5.2 | p(x) = P(X = x). F(x₀) = P(X ≤ x₀). Σ p(x) = 1 |
| 5.3 | E(X) = Σ x p(x). Var(X) = E(X²) − (E(X))². Linear rules for aX + b |
| 5.4 | Uniform on 1 to n: p(x) = 1/n, mean (n + 1)/2, variance (n² − 1)/12 |

## 5.1 and 5.2: distributions and the CDF

A valid probability function has every p(x) between 0 and 1 and a total of exactly 1.

### Formulas for whole-number values

| Want | Write |
|---|---|
| P(X ≤ a) | F(a) |
| P(X < a) | F(a − 1) |
| P(X > a) | 1 − F(a) |
| P(X ≥ a) | 1 − F(a − 1) |
| P(a ≤ X ≤ b) | F(b) − F(a − 1) |
| P(a < X ≤ b) | F(b) − F(a) |
| p(x) | F(x) − F(x − 1) |

### Method: finding an unknown constant

1. Write Σ p(x) = 1 using every value in the table or formula.
2. Solve for the constant.
3. Check each probability lies between 0 and 1.

### Method: building F from p

1. Keep a running total down the table.
2. The final total must be 1.
3. Write F as a table or state the value for each x.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--01-pmf-to-cdf.webp" width="900" height="1076" alt="Two bar charts for a variable with p(x) = (6 minus x)/14 for x = 1 to 4. The top chart shows p(x) as 5/14, 4/14, 3/14, 2/14 with x = 3 and 4 highlighted as P(X &gt; 2). The lower chart shows F(x) = 5/14, 9/14, 12/14, 1, and the gap from F(2) up to 1 equals 5/14, so P(X &gt; 2) = 1 - F(2)." loading="lazy">
  <figcaption>How p(x) builds F(x), and why P(X &gt; 2) = 1 - F(2) = 5/14.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--07-bernoulli-to-binomial.webp" width="900" height="980" alt="Three trials each succeed with probability 0.4. The 8 outcomes are grouped by successes x: 1 way for x = 0 (0.216), 3 ways for x = 1 (0.432 in total), 3 ways for x = 2 (0.288), 1 way for x = 3 (0.064). One trial has mean 0.4 and variance 0.24; three have np = 1.2 and npq = 0.72." loading="lazy">
  <figcaption>Why the binomial has coefficients nCx: it counts the arrangements of successes.</figcaption>
</figure>


## 5.3: expectation and variance

### Formulas

| Result | Formula |
|---|---|
| Mean | E(X) = Σ x p(x) |
| Expected value of g(X) | E(g(X)) = Σ g(x) p(x) |
| Second moment | E(X²) = Σ x² p(x) |
| Variance | Var(X) = E(X²) − (E(X))² |
| Linear mean | E(aX + b) = aE(X) + b |
| Linear variance | Var(aX + b) = a² Var(X) |

### Method: variance from a table

1. Add a row for x p(x) and total it to get E(X).
2. Add a row for x² p(x) and total it to get E(X²).
3. Subtract the square of the mean.
4. If asked, take the positive square root for the standard deviation.

### Small worked reminder

x = 0, 1, 2, 3 with p(x) = 0.1, 0.2, 0.4, 0.3.

```
E(X)   = 0 + 0.2 + 0.8 + 0.9        = 1.9
E(X²)  = 0 + 0.2 + 1.6 + 2.7        = 4.5
Var(X) = 4.5 − 1.9² = 4.5 − 3.61    = 0.89
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--02-mean-balance-point.webp" width="900" height="820" alt="A bar chart of X = 0 to 4 with probabilities 0.10, 0.30, 0.35, 0.20, 0.05 balanced on a plank with the pivot at 1.8 = E(X). A gold band shows the mean plus and minus one standard deviation, 1.03. E(X^2) = 4.3 so Var(X) = 4.3 - 3.24 = 1.06." loading="lazy">
  <figcaption>E(X) is where the distribution balances; Var(X) measures spread about it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--03-linear-change-ax-b.webp" width="900" height="920" alt="Two bar charts on one scale. X takes 0 to 4 with mean 1.8 and variance 1.06. Y = 4X - 3 takes -3, 1, 5, 9, 13 with the same bar heights: the mean moves to 4.2 and the variance is 16 times larger, 16.96. Adding b shifts, multiplying by a stretches." loading="lazy">
  <figcaption>Shifting moves the mean only; scaling by a multiplies the variance by a squared.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--05-variance-adds.webp" width="900" height="930" alt="Two bar charts on the same scale for two independent fair dice. X + Y runs from 2 to 12 with mean 7. X - Y runs from -5 to 5 with mean 0. Both have the same spread, variance 35/6 = 5.83, because Var(X +/- Y) = Var(X) + Var(Y)." loading="lazy">
  <figcaption>Means follow the sign; variances always add, so X + Y and X - Y have the same spread.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--09-binomial-mean-variance.webp" width="900" height="1170" alt="Three bar charts of B(20, p). For p = 0.2 the mean is 4 and the variance 3.2; for p = 0.5 the mean is 10 and the variance 5, the widest; for p = 0.8 the mean is 16 and the variance 3.2. A dashed line marks each mean and a gold band one standard deviation either side." loading="lazy">
  <figcaption>Mean np and variance npq, and why the spread is greatest at p = 0.5.</figcaption>
</figure>


## 5.4: the discrete uniform distribution

| Quantity | Value for x = 1, 2, …, n |
|---|---|
| P(X = x) | 1/n |
| E(X) | (n + 1)/2 |
| Var(X) | (n² − 1)/12 |

For consecutive whole numbers that start somewhere else, subtract to get back to 1, n and use the linear rules. For values 3 to 8, let Y = X − 2. Then Y is uniform on 1 to 6, E(X) = 3.5 + 2 = 5.5 and Var(X) = 35/12.

### Method: a uniform variable

1. Count the values. This count is n.
2. If the values do not start at 1, subtract a constant to make them run from 1 to n.
3. Write the mean and variance for the shifted variable.
4. Undo the shift: add the constant to the mean and leave the variance unchanged.
5. Probabilities are each 1/n, so a probability for a range is the number of values in that range divided by n.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--04-discrete-uniform.webp" width="900" height="770" alt="Ten equal bars of height 0.1 for X = 1 to 10. The mean 5.5 is at the centre and a gold band marks one standard deviation either side. For n = 10, E(X) = 5.5 and Var(X) = 99/12 = 8.25; a fair die (n = 6) has mean 3.5 and variance 35/12." loading="lazy">
  <figcaption>Equal bars: the mean sits at the centre, (n + 1)/2.</figcaption>
</figure>


## Worked reminders

### A constant and the CDF

p(x) = k(x + 1) for x = 0, 1, 2, 3. Find k, then P(X ≥ 2).

```
k(1 + 2 + 3 + 4) = 10k = 1      so k = 1/10
F(1) = (1 + 2)/10 = 3/10
P(X ≥ 2) = 1 − F(1) = 7/10
```

### Two unknowns from the mean

X takes 2, 4, 6 with probabilities a, b, 0.2 and E(X) = 4.2.

```
a + b + 0.2 = 1           so a + b = 0.8
2a + 4b + 1.2 = 4.2       so a + 2b = 1.5
Subtract: b = 0.7, then a = 0.1
Check: 0.2 + 2.8 + 1.2 = 4.2
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--08-binomial-probabilities.webp" width="900" height="1040" alt="Two bar charts of B(12, 0.35). The bar at x = 4 is highlighted: P(X = 4) = 495 x 0.35^4 x 0.65^8 = 0.2367. In the second chart the bars up to 4 sum to 0.5833 and those from 5 upward sum to 1 - 0.5833 = 0.4167, so P(X &gt;= 5) = 1 - P(X &lt;= 4)." loading="lazy">
  <figcaption>A single probability, and why &quot;at least 5&quot; is one minus the cumulative probability up to 4.</figcaption>
</figure>


### A linear change of a uniform variable

X is uniform on 1 to 6 and Y = 3X + 1.

```
E(X) = 3.5, Var(X) = 35/12
E(Y)   = 3(3.5) + 1 = 11.5
Var(Y) = 9 × 35/12  = 105/4 = 26.25
```

### Working out n from the variance

X is uniform on 1 to n and Var(X) = 4.

```
(n² − 1)/12 = 4  gives  n² = 49, so n = 7
E(X) = (7 + 1)/2 = 4
```

## Command words and what to show

| Phrase in the question | What to write |
|---|---|
| Show that ... | Every line of working, ending on the stated result |
| Find the value of k | The equation Σ p(x) = 1, then the solution |
| Find the cumulative distribution function | A table or list of F(x) for each x, ending at 1 |
| Find E(X) and Var(X) | Both totals, then the subtraction for the variance |
| Write down | The result only, usually from a stated formula |

Examiners cannot reward an answer they cannot follow, so set out the sum for E(X) and E(X²) in full. Keep fractions exact until the last line unless the question asks for a decimal.

## Must-know distinctions

1. E(X²) is not (E(X))². Their difference is the variance.
2. P(X ≥ a) uses F(a − 1). P(X > a) uses F(a).
3. Adding a constant moves the mean but leaves the variance alone. Multiplying by a constant changes both, and the variance changes by a².
4. p(x) is the probability at one value. F(x) is the running total up to and including it.
5. Var(X) is on a squared scale. The standard deviation is back on the scale of X.

## Quick self-test

1. State whether each variable is discrete: (a) the number of siblings a person has, (b) a person's height.
2. p(x) = kx for x = 1, 2, 3, 4. Find k.
3. X takes values 1, 2, 3, 4 with F(1) = 0.2, F(2) = 0.5, F(3) = 0.8 and F(4) = 1. Find P(X ≥ 3) and p(3).
4. X takes the values 1, 2, 3 with probabilities 0.4, 0.4, 0.2. Find E(X) and Var(X).
5. E(X) = 3 and Var(X) = 2. Find E(5 − 2X) and Var(5 − 2X).
6. E(X) = 3 and E(X²) = 13. Find Var(X).
7. X is uniform on 1, 2, …, 20. Find E(X) and Var(X).
8. X is uniform on 1, 2, …, n with E(X) = 8. Find n and Var(X).
9. X is chosen at random from the whole numbers 3 to 8. Find E(X) and Var(X).
10. True or false: Var(2X) = 2 Var(X). Give the correct statement.
11. A fair spinner has 8 equal sectors numbered 1 to 8. Find P(X ≥ 6) and F(5).

### Answers

1. (a) Discrete. (b) Not discrete, because height can take any value in an interval.
2. 10k = 1, so k = 1/10.
3. P(X ≥ 3) = 1 − F(2) = 0.5. p(3) = F(3) − F(2) = 0.3.
4. E(X) = 0.4 + 0.8 + 0.6 = 1.8. E(X²) = 0.4 + 1.6 + 1.8 = 3.8. Var(X) = 3.8 − 3.24 = 0.56.
5. E = 5 − 2(3) = −1. Var = (−2)² × 2 = 8.
6. Var(X) = 13 − 9 = 4.
7. E(X) = 21/2 = 10.5. Var(X) = 399/12 = 33.25.
8. (n + 1)/2 = 8 gives n = 15. Var(X) = (225 − 1)/12 = 56/3.
9. E(X) = 5.5. Var(X) = 35/12.
10. False. Var(2X) = 4 Var(X).
11. P(X ≥ 6) = 3/8. F(5) = 5/8.

## Where marks are usually lost

- Using 1 − F(a) when the question says "at least a".
- Not showing the equation Σ p(x) = 1 before solving for a constant.
- Dropping the squares in E(X²) and just reusing E(X).
- Subtracting E(X) instead of (E(X))² when finding the variance.
- Multiplying the variance by a instead of a² in Var(aX + b).
- Adding b to the variance in Var(aX + b).
- Applying (n² − 1)/12 to values such as 3 to 8 without shifting them first.
- Rounding E(X) early and carrying the error into the variance.
- Leaving a final answer as an unsimplified fraction when a decimal or simplified fraction is clearly expected.
- Not stating the final line in terms of the question, such as the probability or the mean asked for.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, first teaching September 2018, published by Pearson. These notes follow S1 section 5, topics 5.1 to 5.4.
