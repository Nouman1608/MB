---
title: "Cambridge O Level Statistics (4040): Effect of adding or multiplying by a constant on the mean and standard deviation"
resourceType: "study-guides"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 6 – Transformations involving mean and standard deviation"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 6.1
syllabusTopics:
  - qualification: "o-level"
    topic: "transformations-involving-mean-and-standard-deviation-4040"
    subtopic: "effect-of-adding-or-multiplying-by-a-constant-4040"
description: "Why adding a constant moves the mean but not the standard deviation, why multiplying scales both, and how to use these rules to simplify 4040 calculations."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 6.1 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: the "effect on mean and standard deviation of adding a constant to each observation and of multiplying each observation by a constant". It sits in topic 6, "Transformations involving mean and standard deviation", and prepares you for section 6.2, transforming data to a given mean and standard deviation.

The rules themselves, with simple examples, temperature conversion and coded data, are in the guide to [adding or multiplying by a constant and linear transformation](/resources/cambridge-o-level-statistics-effects-of-adding-or-multiplying-by-a-constant-and/). This page explains **why** the rules hold using Σ notation, shows how to use a shift to simplify awkward calculations, handles percentage increases combined with fixed amounts, reversed scales, and transformed Σx and Σx². Afterwards, use the [revision notes on adding or multiplying by a constant](/resources/cambridge-o-level-statistics-4040-effect-of-adding-or-multiplying-by-a-constant-revision-notes/) and the [practice questions on adding or multiplying by a constant](/resources/cambridge-o-level-statistics-4040-effect-of-adding-or-multiplying-by-a-constant-practice/).

## What this unit covers

| Part of 6.1 | What you must be able to do |
|---|---|
| Adding a constant a | State and use: mean increases by a; standard deviation unchanged |
| Multiplying by a constant b | State and use: mean and standard deviation multiplied by b (by the size of b for the standard deviation) |
| Both together | Apply the rules in the correct order for y = bx + a or y = b(x + a) |
| Use | Simplify calculations, change units, and explain results in context |

## The rules

| Change to every value | New mean | New standard deviation | New variance |
|---|---|---|---|
| y = x + a | x̄ + a | σ | σ² |
| y = bx | b x̄ | \|b\| σ | b² σ² |
| y = bx + a | b x̄ + a | \|b\| σ | b² σ² |

Here σ is the standard deviation of x, found by dividing by n.

## Why the rules hold

**Adding a.** Each y value is x + a, so

```
Σy = Σ(x + a) = Σx + na
ȳ  = Σy / n = Σx / n + a = x̄ + a
```

Each deviation is y − ȳ = (x + a) − (x̄ + a) = x − x̄. The deviations are identical, so the variance Σ(y − ȳ)²/n and the standard deviation are unchanged. A shift moves the whole data set along the number line without stretching it.

**Multiplying by b.**

```
Σy = Σbx = bΣx,  so ȳ = b x̄
y − ȳ = bx − b x̄ = b(x − x̄)
(y − ȳ)² = b²(x − x̄)²,  so the variance is multiplied by b²
standard deviation = √(b² σ²) = |b| σ
```

A scale change stretches every distance from the mean by the factor b, so the spread grows by the same factor.

The same reasoning shows that the median and quartiles follow the mean's rule, while the range and interquartile range follow the standard deviation's rule. This is a useful check on any answer.

## Using a shift to simplify calculation

When values are large and close together, subtract a convenient constant first.

**Worked example 1.** Masses of five bags, in grams: 1003, 1007, 998, 1012, 1005. Find the mean and standard deviation.

Let u = x − 1000: the values become 3, 7, −2, 12, 5.

```
Σu = 25,     ū = 5
Σu² = 9 + 49 + 4 + 144 + 25 = 231
variance of u = 231/5 − 5² = 46.2 − 25 = 21.2
σ of u = 4.60 (3 s.f.)

x = u + 1000, so x̄ = 5 + 1000 = 1005 g
σ of x = σ of u = 4.60 g
```

The shift does not change the standard deviation, and squaring 3 or 12 is far easier than squaring 1003 or 1012. It also avoids rounding trouble when Σx²/n and x̄² are both very large and nearly equal.

## Percentage changes and fixed amounts

A percentage increase is multiplication; a fixed bonus is addition. The order matters for the mean.

**Worked example 2.** Weekly wages in a firm have mean 420 and standard deviation 35 (units of currency).

(a) Every wage rises by 4%. Then b = 1.04.

```
mean = 1.04 × 420 = 436.8
σ    = 1.04 × 35  = 36.4
```

(b) After the 4% rise, every worker also gets a bonus of 15.

```
mean = 436.8 + 15 = 451.8
σ    = 36.4 (unchanged by the bonus)
```

(c) If instead the bonus of 15 were added first and then the 4% rise applied, y = 1.04(x + 15) = 1.04x + 15.6.

```
mean = 1.04 × (420 + 15) = 452.4
σ    = 36.4
```

The standard deviation is the same either way; the mean differs by 0.6 because in (c) the bonus is also increased by 4%.

## Changing units

Changing units is multiplication by a conversion factor. Masses with mean 2350 g and standard deviation 180 g become, in kilograms (b = 1/1000), mean 2.35 kg and standard deviation 0.18 kg. Times with mean 150 minutes and standard deviation 24 minutes become, in hours (b = 1/60), mean 2.5 hours and standard deviation 0.4 hours. The variance changes by b²: from 576 square minutes to 0.16 square hours.

## Reversed scales

On a rating scale from 1 to 10, a researcher reverses the scores so that 10 becomes 1, using y = 11 − x. This is y = −1 × x + 11.

**Worked example 3.** Ratings have mean 6.3 and standard deviation 1.8.

```
new mean = 11 − 6.3 = 4.7
new σ    = |−1| × 1.8 = 1.8
```

The spread is unchanged because reversing the order does not change the distances between scores.

## Transforming the totals

**Worked example 4.** For ten values, Σx = 50 and Σx² = 310. Each value is transformed by y = 3x − 2. Find the mean and standard deviation of y.

```
x̄ = 50/10 = 5
variance of x = 310/10 − 5² = 31 − 25 = 6
ȳ = 3 × 5 − 2 = 13
variance of y = 3² × 6 = 54
σ of y = √54 = 7.35 (3 s.f.)
```

Find the mean and variance of x first; then apply the rules. Transforming Σx² directly is possible but slower and more error-prone.

## Common errors

- Adding the constant to the standard deviation.
- Multiplying the variance by b instead of b².
- Giving a negative standard deviation when b is negative.
- Applying "add then multiply" when the question says "multiply then add", or the reverse.
- Forgetting to undo a shift at the end (quoting ū = 5 instead of x̄ = 1005).
- Thinking that a percentage increase leaves the standard deviation unchanged; it is multiplication, so the spread changes.

## Exam technique

- **State the effect**: give both the mean and the standard deviation, with the reason (shift or scale).
- **Explain why**: say that adding a constant moves every value and the mean by the same amount, so the deviations do not change.
- **Calculate**: write the transformation as y = bx + a before using the rules.
- Keep units with every answer, and change them when the transformation changes units.

## More on this topic

Revise the rules with the [revision notes on adding or multiplying by a constant](/resources/cambridge-o-level-statistics-4040-effect-of-adding-or-multiplying-by-a-constant-revision-notes/), then practise with the [practice questions on adding or multiplying by a constant](/resources/cambridge-o-level-statistics-4040-effect-of-adding-or-multiplying-by-a-constant-practice/). Choosing a and b to reach a given mean and standard deviation is section 6.2, in the [linear transformation guide](/resources/cambridge-o-level-statistics-effects-of-adding-or-multiplying-by-a-constant-and/).

## Frequently asked questions

**Does adding a constant change the variance?**
No. The deviations from the mean are unchanged, so the variance and standard deviation stay the same.

**What happens to the standard deviation when every value is halved?**
It is halved, and the variance is divided by 4.

**Why is the standard deviation multiplied by |b| rather than b?**
A standard deviation cannot be negative. Multiplying by a negative number reflects the data but stretches distances by the size of b.

## Official syllabus

Cambridge O Level Statistics (4040), syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment. Topic 6, section 6.1: Effect on mean and standard deviation of adding a constant to each observation and of multiplying each observation by a constant.
