---
title: "Cambridge O Level Statistics: Effects of a constant and linear transformation to a given mean and SD (4040)"
seoTitle: "O Level Statistics 4040 Linear Transformation Guide"
resourceType: "study-guides"
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
description: "Study guide to how adding or multiplying by a constant changes mean and standard deviation, and fitting y = a + bx to a target, for O Level Statistics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers topic 6 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: section 6.1, the effect on the mean and standard deviation of adding a constant to each observation and of multiplying each observation by a constant, and section 6.2, the linear transformation of data to a given mean and standard deviation. The syllabus does not split content into tiers, so everything here applies to every candidate. Test yourself afterwards with the [revision notes](/resources/cambridge-o-level-statistics-effects-of-adding-or-multiplying-by-a-constant-and-revision-notes/) and the [practice questions](/resources/cambridge-o-level-statistics-effects-of-adding-or-multiplying-by-a-constant-and-practice/). The [Cambridge O Level Statistics hub](/boards/cambridge/o-level/statistics/) and the [printable checklist](/checklists/cambridge/o-level/statistics/) show where this topic sits in the course. If you are unsure which topics need work first, take a [free 10-minute diagnostic](/diagnostics/).

## What this topic covers

| Section | What you must be able to do |
|---|---|
| 6.1 | State and use the effect on the mean and standard deviation of adding a constant to every observation |
| 6.1 | State and use the effect on the mean and standard deviation of multiplying every observation by a constant |
| 6.2 | Find a and b in y = a + bx so that the new data have a stated mean and standard deviation |

You need the mean and standard deviation first. Both are in section 5 of the syllabus. See the guide on [averages](/resources/cambridge-o-level-statistics-averages-mean-median-mode-and-modal-class/) for the mean. This page uses the population form of the standard deviation, where you divide by n:

```
mean = x̄ = Σx / n
variance = Σ(x − x̄)² / n
standard deviation = √variance
```

The rules below give the same pattern whichever divisor you use, because the divisor is not changed by a transformation of the data.

## 6.1 Adding a constant

Suppose every observation has the same number added to it. Write the new values as y = x + a. This happens when a shift of origin is applied: every score gets a bonus, every length is measured from a different starting point, or every price rises by a fixed charge.

**The mean goes up by a. The standard deviation does not change.**

Why? The mean is the balancing point of the data. If every value moves up by a, the balancing point moves up by a. Each value and the mean move together, so the distance from each value to the mean stays the same. The standard deviation is built only from those distances, so it is unchanged. The variance is unchanged too.

```
y = x + a
ȳ = x̄ + a
sd of y = sd of x
```

Subtracting a constant is the same rule with a negative a.

### Worked example 1

Five rope lengths, in centimetres, are 17, 19, 20, 21 and 23.

Mean = (17 + 19 + 20 + 21 + 23) / 5 = 100 / 5 = 20.

Deviations from the mean: −3, −1, 0, 1, 3.

Squared deviations: 9, 1, 0, 1, 9, which add up to 20.

Variance = 20 / 5 = 4, so the standard deviation is 2 cm.

Now each rope is lengthened by 5 cm. The new lengths are 22, 24, 25, 26 and 28.

New mean = 125 / 5 = 25 cm. This is 20 + 5.

The new deviations are −3, −1, 0, 1, 3 again, so the standard deviation is still **2 cm**.

## 6.1 Multiplying by a constant

Now suppose every observation is multiplied by the same number b, so y = bx. This happens when a scale changes: kilograms to grams, hours to minutes, a test marked out of 50 doubled to be out of 100.

**The mean is multiplied by b. The standard deviation is multiplied by b (for positive b).**

Every value is b times as far from zero, and so is the mean. Every deviation from the mean is also b times as big, so the typical deviation is b times as big. The variance is built from squared deviations, so it is multiplied by b², not b.

```
y = bx
ȳ = b × x̄
sd of y = |b| × (sd of x)
variance of y = b² × (variance of x)
```

The bars around b mean the positive size of b. If b is negative, the data are reflected and the mean changes sign, but spread cannot be negative, so the standard deviation uses the positive size of b. For example, b = −2 multiplies the standard deviation by 2.

### Worked example 2

Using the rope lengths from example 1 (mean 20, standard deviation 2), each length is multiplied by 3. The new lengths are 51, 57, 60, 63 and 69.

```
new mean = 3 × 20 = 60
new standard deviation = 3 × 2 = 6
new variance = 3² × 4 = 36
```

Direct check: the new deviations from 60 are −9, −3, 0, 3, 9. The squares add up to 81 + 9 + 0 + 9 + 81 = 180. Then 180 / 5 = 36 and √36 = **6**.

## Combining both: y = a + bx

A linear transformation does both steps: multiply by b, then add a. The order matters. In y = a + bx the multiplication comes first.

| Quantity | Rule for y = a + bx |
|---|---|
| Mean | ȳ = a + b x̄ |
| Standard deviation | |b| × (sd of x) |
| Variance | b² × (variance of x) |

The constant a appears in the mean rule only. It never touches the standard deviation.

### Worked example 3 (summary figures)

The daily maximum temperatures, in °C, for 20 days give Σx = 360 and Σx² = 6800. Find the mean and standard deviation in °C, and then in °F using F = 1.8C + 32.

Mean = 360 / 20 = 18 °C.

Variance = 6800 / 20 − 18² = 340 − 324 = 16, so the standard deviation is 4 °C.

Here b = 1.8 and a = 32.

```
mean in °F = 1.8 × 18 + 32 = 32.4 + 32 = 64.4 °F
sd in °F = 1.8 × 4 = 7.2 °F
```

The 32 raises the mean but plays no part in the standard deviation.

## Working backwards from coded data

Coded data are sometimes given so that the numbers are small, for example y = (x − 50) / 5. To recover the original data, undo the coding in reverse: multiply by 5, then add 50, so x = 50 + 5y.

### Worked example 4

Coded values y = (x − 50) / 5 have mean 3.2 and standard deviation 1.5. Find the mean and standard deviation of x.

Since x = 50 + 5y, the rules give:

```
mean of x = 50 + 5 × 3.2 = 50 + 16 = 66
sd of x = 5 × 1.5 = 7.5
```

## 6.2 Transforming to a given mean and standard deviation

Here you are told the mean and standard deviation of the original data, and the mean and standard deviation you want. You must find the numbers a and b in y = a + bx.

Work in two steps, always in this order, because the standard deviation involves only b.

1. Match the spread. Find b from: target sd = b × original sd, so b = target sd ÷ original sd.
2. Match the mean. Find a from: target mean = a + b × original mean, so a = target mean − b × original mean.

Finish with a check by substituting the original mean into y = a + bx.

### Worked example 5

A set of marks has mean 45 and standard deviation 12.5. They are to be rescaled to have mean 60 and standard deviation 10. Find y = a + bx.

Step 1: b = 10 / 12.5 = 0.8.

Step 2: a = 60 − 0.8 × 45 = 60 − 36 = 24.

So **y = 24 + 0.8x**.

Check: 24 + 0.8 × 45 = 24 + 36 = 60. ✓.

### Worked example 6 (with a data set)

Five scores are 30, 40, 45, 50 and 60. They are to be changed so that the mean is 60 and the standard deviation is 15.

First find the original mean and standard deviation.

```
mean = (30 + 40 + 45 + 50 + 60) / 5 = 225 / 5 = 45
deviations: −15, −5, 0, 5, 15
squares: 225, 25, 0, 25, 225   (total 500)
variance = 500 / 5 = 100,  sd = 10
```

Then b = 15 / 10 = 1.5 and a = 60 − 1.5 × 45 = 60 − 67.5 = −7.5.

So **y = −7.5 + 1.5x**. The new scores are:

| x | 30 | 40 | 45 | 50 | 60 |
|---|---|---|---|---|---|
| y = 1.5x − 7.5 | 37.5 | 52.5 | 60 | 67.5 | 82.5 |

Check: the mean of the new scores is 300 / 5 = 60. The deviations from 60 are −22.5, −7.5, 0, 7.5, 22.5, whose squares add up to 1125 and 1125 / 5 = 225, so the standard deviation is √225 = 15. ✓

### A reversed scale

If you want the order of the data to flip, so that a high score becomes a low score, use a negative b. Take marks with mean 62 and standard deviation 5, and let y = 100 − 2x. Then ȳ = 100 − 2 × 62 = −24 and the standard deviation of y is |−2| × 5 = 10. The standard deviation stays positive. When you are told a target standard deviation in 6.2, b = target sd ÷ original sd gives a positive b. A negative b would give the same standard deviation with the order of the data reversed.

## Common errors

- Multiplying the standard deviation by b² instead of b. Only the variance gets b².
- Adding the constant a to the standard deviation. The standard deviation ignores a.
- Applying a to the mean before b, such as writing the new mean as b(x̄ + a) when the rule is y = a + bx.
- Finding a first in 6.2. You need b before you can find a.
- Writing a negative standard deviation when b is negative.
- Forgetting units. After a conversion such as °C to °F, the new mean and standard deviation are in the new unit.

## Next steps

Read the [revision notes](/resources/cambridge-o-level-statistics-effects-of-adding-or-multiplying-by-a-constant-and-revision-notes/) for a short version, then work through the [practice questions](/resources/cambridge-o-level-statistics-effects-of-adding-or-multiplying-by-a-constant-and-practice/). Show every line of working. Essential working must be shown for full marks to be awarded, according to the instructions printed in the syllabus for each paper.

## Official syllabus

Cambridge International, Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, sections 6.1 and 6.2.
