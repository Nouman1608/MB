---
title: "Cambridge O Level Statistics: Effects of a constant and linear transformation to a given mean and SD (4040) -- Revision Notes"
seoTitle: "O Level Statistics 4040 Linear Transformation Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Effects of adding or multiplying by a constant, and linear transformation to a given mean and SD"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 23
syllabusTopics:
  - qualification: "o-level"
    topic: "transformations-involving-mean-and-standard-deviation-4040"
    subtopic: "effect-of-adding-or-multiplying-by-a-constant-4040"
  - qualification: "o-level"
    topic: "transformations-involving-mean-and-standard-deviation-4040"
    subtopic: "linear-transformation-to-given-mean-and-sd-4040"
description: "Condensed revision notes with rules, method steps, a self-test and common slips on transforming mean and standard deviation, for O Level Statistics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These revision notes cover topic 6 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: section 6.1 (adding a constant to, and multiplying by a constant, every observation) and section 6.2 (linear transformation to a given mean and standard deviation). For full explanations and worked examples, read the [study guide](/resources/cambridge-o-level-statistics-effects-of-adding-or-multiplying-by-a-constant-and/) first. When you are ready to test yourself, use the [practice questions](/resources/cambridge-o-level-statistics-effects-of-adding-or-multiplying-by-a-constant-and-practice/). The [Cambridge O Level Statistics hub](/boards/cambridge/o-level/statistics/) and the [printable checklist](/checklists/cambridge/o-level/statistics/) show the whole course, and the [free 10-minute diagnostics](/diagnostics/) help you decide what to revise next.

## The core rules

Write the new data as y = a + bx, where a and b are constants. Multiply by b first, then add a.

| Change to every observation | New mean | New standard deviation | New variance |
|---|---|---|---|
| Add a (y = x + a) | x̄ + a | unchanged | unchanged |
| Multiply by b (y = bx) | b × x̄ | \|b\| × sd | b² × variance |
| Both (y = a + bx) | a + b × x̄ | \|b\| × sd | b² × variance |

Remember the logic in one line each:

- Adding shifts every value and the mean together, so the gaps between values and the mean do not change.
- Multiplying stretches every gap by b, so the standard deviation is multiplied by b and the variance by b².
- Spread cannot be negative, so a negative b still gives a positive standard deviation, equal to |b| times the original.

## Definitions to have ready

- Mean: x̄ = Σx / n.
- Variance (dividing by n): Σ(x − x̄)² / n, or equivalently Σx² / n − x̄².
- Standard deviation: the square root of the variance.
- Linear transformation: a change of the form y = a + bx.
- Coding: a linear transformation chosen to make numbers smaller, such as y = (x − 200) / 10. To go back, rearrange: x = 200 + 10y.

## Method: effect of a transformation (6.1)

1. Write the transformation as y = a + bx. Identify a and b, including any negative sign.
2. New mean = a + b × (old mean). Substitute the old mean into the whole rule.
3. New standard deviation = |b| × old standard deviation. Ignore a.
4. If the variance is wanted, square the new standard deviation, or multiply the old variance by b².
5. Give units. If the data are converted from one unit to another, the new mean and standard deviation are in the new unit.

### Worked reminder 1

Parcel masses have mean 4.5 kg and standard deviation 0.6 kg. A courier adds a packaging allowance of 0.25 kg to each parcel. The mean becomes 4.75 kg. The standard deviation stays 0.6 kg.

### Worked reminder 2

Delivery times have mean 25 minutes and standard deviation 6 minutes. A charge is 4 per minute plus a fixed fee of 10, so y = 10 + 4x.

```
mean = 10 + 4 × 25 = 110
sd = 4 × 6 = 24
```

## Method: transform to a given mean and sd (6.2)

1. Write: target mean = a + b × old mean, and target sd = b × old sd.
2. Find b first: b = target sd ÷ old sd.
3. Then find a: a = target mean − b × old mean.
4. State the result as y = a + bx.
5. Check: substitute the old mean into y. It must give the target mean.

If the old mean and standard deviation are not given, calculate them from the data or from totals first. With totals, use mean = Σx / n and variance = Σx² / n − (mean)².

### Worked reminder 3

Old mean 55, old sd 8. Target mean 100, target sd 20.

```
b = 20 / 8 = 2.5
a = 100 − 2.5 × 55 = 100 − 137.5 = −37.5
y = −37.5 + 2.5x
check: −37.5 + 2.5 × 55 = 100
```

### Worked reminder 4

Σx = 200, Σx² = 2200 and n = 20. Find the mean and standard deviation of y = 2x + 1.

```
mean of x = 200 / 20 = 10
variance of x = 2200 / 20 − 10² = 110 − 100 = 10
sd of x = √10 ≈ 3.16
mean of y = 2 × 10 + 1 = 21
sd of y = 2 × √10 = 2√10 ≈ 6.32
```

## Method: finding the original from the new (working backwards)

Sometimes the new mean and standard deviation are given and the original ones are wanted. Use the same rule, then rearrange.

1. Write the rule y = a + bx and the known values for y.
2. Standard deviation first: sd of x = (sd of y) ÷ |b|.
3. Mean next: mean of x = (mean of y − a) ÷ b.
4. Check by substituting the mean of x back into the rule.

### Worked reminder 5

Scaled scores y = 5 + 0.5x have mean 41 and standard deviation 6.

```
sd of x = 6 / 0.5 = 12
mean of x = (41 − 5) / 0.5 = 72
check: 5 + 0.5 × 72 = 41
```

### Worked reminder 6

A company pays each worker a base amount plus a bonus of 20% of their sales, so y = 300 + 0.2x. The sales figures have mean 4000 and standard deviation 900. Then:

```
mean pay = 300 + 0.2 × 4000 = 1100
sd of pay = 0.2 × 900 = 180
```

The base amount of 300 raises the average pay but has no effect on how spread out the pay is.

## Reading the question

- "Each value is increased by" or "a fixed amount is added" means a shift: only the mean changes.
- "Each value is doubled", "converted to" or "scaled by" means a multiplication: both mean and standard deviation change.
- "Find a and b" or "find the transformation" is a 6.2 question. Start with b.
- "Variance" needs b² in the rule. "Standard deviation" needs b.

## Must-know distinctions

| Often confused | Difference |
|---|---|
| Effect of a on the mean and on the sd | a moves the mean; it never changes the sd |
| Effect of b on sd and on variance | the sd is multiplied by \|b\|; the variance by b² |
| Finding b and finding a | b comes from the spreads; a comes from the means, after b is known |
| Coding and decoding | y = (x − 50) / 5 is coded; x = 50 + 5y undoes it |
| Positive and negative b | the sd uses \|b\|; the mean uses b itself, sign included |

## Quick self-test

1. Data have mean 30 and standard deviation 4. Each value is increased by 7. Find the new mean and standard deviation.
2. The same data are each multiplied by 5. Find the new mean and standard deviation.
3. The variance of a data set is 9. Every value is multiplied by 4. Find the new variance.
4. x has mean 10 and standard deviation 2. Find the mean and standard deviation of y = 2 + 3x.
5. Data with mean 20 and standard deviation 5 are to be changed to mean 50 and standard deviation 10. Find y = a + bx.
6. Data with mean 12 and standard deviation 3 are to be changed to mean 0 and standard deviation 1. Find a and b.
7. Coded values y = (x − 80) / 4 have mean 2.5 and standard deviation 0.5. Find the mean and standard deviation of x.
8. x has mean 8 and standard deviation 1.5. Find the mean and standard deviation of y = 50 − 3x.
9. True or false: adding 10 to every observation increases the range by 10.
10. n = 20, Σx = 200 and Σx² = 2200. Find the mean and standard deviation of x (to 3 significant figures).

### Answers

1. Mean 37, standard deviation 4.
2. Mean 150, standard deviation 20.
3. 9 × 4² = 144.
4. Mean 2 + 3 × 10 = 32; standard deviation 3 × 2 = 6.
5. b = 10 / 5 = 2; a = 50 − 2 × 20 = 10; y = 10 + 2x.
6. b = 1/3; a = 0 − (1/3) × 12 = −4; y = −4 + x/3.
7. x = 80 + 4y, so the mean is 80 + 4 × 2.5 = 90 and the standard deviation is 4 × 0.5 = 2.
8. Mean 50 − 3 × 8 = 26; standard deviation |−3| × 1.5 = 4.5.
9. False. Every value rises by 10, so the largest and smallest rise together and the range is unchanged.
10. Mean 10; variance 2200/20 − 100 = 10; standard deviation √10 = 3.16 (3 s.f.).

## Where marks are usually lost

- Multiplying the standard deviation by b² instead of b, or the variance by b instead of b².
- Adding a to the standard deviation, or including a in the spread calculation.
- Finding a before b in 6.2, so that the mean equation cannot be solved.
- Using the rule backwards when decoding, for example writing x = 4y − 80 instead of x = 80 + 4y.
- Giving a negative standard deviation when b is negative.
- Dropping units after a conversion such as °C to °F.
- Quoting a variance when the standard deviation is asked for, or the reverse.
- Showing only a final answer with no substitution. Essential working must be shown for full marks, as the syllabus instructions for each paper state.
- Leaving out the check that the old mean maps to the target mean.

## Official syllabus

Cambridge International, Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, sections 6.1 and 6.2.
