---
title: "Cambridge IGCSE Statistics: Transforming, combining and comparing data sets: coding, combined means and standardising (0479)"
seoTitle: "IGCSE Statistics 0479 Transforming Data Sets Guide"
resourceType: "study-guides"
subject: "statistics"
level: ["igcse"]
topic: "Transforming, combining and comparing data sets: coding, combined means and standardising"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0479"]
syllabusSeries: "2027"
order: 31
syllabusTopics:
  - qualification: "igcse"
    topic: "transformations-of-data-sets-0479"
description: "Study guide to Topic 6 of Cambridge IGCSE Statistics (0479): coding, adding or removing values, combined means and SDs, standardising and comparing."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers **Topic 6, Transformations of data sets**, in the Cambridge IGCSE Statistics (0479) syllabus for examination in 2027. It teaches outcomes 6.1 to 6.6: the effect of adding or multiplying by a constant, the effect of adding or removing values, combining two data sets, scaling and standardising, and comparing distributions. It builds on the averages and measures of spread from Topics 4 and 5.

Keep these pages open together: the [revision notes](/resources/cambridge-igcse-statistics-transforming-combining-and-comparing-data-sets-coding-revision-notes/), the [practice set](/resources/cambridge-igcse-statistics-transforming-combining-and-comparing-data-sets-coding-practice/), the [Statistics hub](/boards/cambridge/igcse/statistics/) and the [printable checklist](/checklists/cambridge/igcse/statistics/). To find your weak spots first, try the [free 10-minute diagnostics](/diagnostics/). For calculating means and standard deviations from tables, see [Frequency Distributions](/resources/igcse-cambridge-statistics-frequency-distributions/).

## What this topic covers

| Outcome | What you must be able to do |
|---|---|
| 6.1 | Say what happens to the mean and standard deviation when a constant is added to every value or every value is multiplied by a constant |
| 6.2 | Say the same for the median and the interquartile range (IQR) |
| 6.3 | Say whether a measure increases, decreases or stays the same when values are added or removed |
| 6.4 | Find the mean and standard deviation of two combined data sets, including finding the second mean from the combined mean |
| 6.5 | Scale data to a given mean and standard deviation, and standardise to mean 0 and standard deviation 1 |
| 6.6 | Compare distributions using a measure of centre and a measure of spread |

The standard deviation in this syllabus is the version that divides by n:

```
standard deviation = √( Σ(x − x̄)² / n ) = √( Σx²/n − (Σx/n)² )
```

I write x̄ for the mean and σ for the standard deviation.

## 6.1 Adding a constant and multiplying by a constant

Suppose every value x is changed to y = ax + b. This is called **coding**.

- Adding b shifts every value along by b. The data moves, but the gaps between values do not change.
- Multiplying by a stretches the data from zero, so the gaps are multiplied by a.

| Change | New mean | New standard deviation |
|---|---|---|
| Add b | x̄ + b | σ (unchanged) |
| Multiply by a | a × x̄ | |a| × σ |
| Both: y = ax + b | a × x̄ + b | |a| × σ |

The standard deviation never takes b into account, and it is never negative. If a = −2, the spread is multiplied by 2, not −2.

**Worked example 1.** The data 8, 11, 14, 9, 13 is coded using y = 3x − 5. Find the mean and standard deviation of y.

```
Mean of x = (8 + 11 + 14 + 9 + 13)/5 = 55/5 = 11
Deviations: −3, 0, 3, −2, 2
Squares:     9, 0, 9, 4, 4   → sum 26
σx = √(26/5) = √5.2 = 2.28 (3 s.f.)
Mean of y = 3 × 11 − 5 = 28
σy = 3 × 2.28 = 6.84 (3 s.f.)
```

Check by coding each value: 19, 28, 37, 22, 34. Their mean is 140/5 = 28, which agrees.

**Why this matters.** Coding lets you work with small numbers. If the raw values are 1 203, 1 207 and 1 212, subtract 1 200 first, work with 3, 7, 12, then add 1 200 back to the mean only.

## 6.2 Median and interquartile range

The median is one value in the ordered list, so it is changed in exactly the same way as a single data value. The IQR is a difference between two values, so the added constant cancels out.

| Change | New median | New IQR |
|---|---|---|
| Add b | median + b | IQR (unchanged) |
| Multiply by a (a > 0) | a × median | a × IQR |
| y = ax + b | a × median + b | |a| × IQR |

**Negative multipliers need care.** If a is negative, the order of the data reverses. The old upper quartile becomes the new lower quartile. The median still follows y = ax + b, but the IQR is multiplied by |a|.

**Worked example 2.** The ordered data is 2, 5, 6, 8, 11, 12, 15, 19. Find the median and IQR, then the median and IQR after (a) y = 0.5x + 10 and (b) y = 20 − 2x.

```
Median = (8 + 11)/2 = 9.5
Lower half: 2, 5, 6, 8      → Q1 = (5 + 6)/2 = 5.5
Upper half: 11, 12, 15, 19  → Q3 = (12 + 15)/2 = 13.5
IQR = 13.5 − 5.5 = 8

(a) median = 0.5 × 9.5 + 10 = 14.75,  IQR = 0.5 × 8 = 4
(b) median = 20 − 2 × 9.5 = 1,         IQR = 2 × 8 = 16
```

For (b), the new quartiles are 20 − 2(13.5) = −7 and 20 − 2(5.5) = 9. The new lower quartile is −7 and the new upper quartile is 9, so IQR = 9 − (−7) = 16.

## 6.3 Adding or removing values

Here you decide whether a measure goes **up, down or stays the same**. Compare the new value with the current measure.

- **Mean:** adding a value above the mean raises it. Adding a value below the mean lowers it. Adding a value equal to the mean leaves it unchanged.
- **Median:** adding a value above the median raises it or leaves it the same. Adding a value below the median lowers it or leaves it the same. It cannot move the wrong way.
- **Range:** adding a value can only keep the range the same or increase it. Removing a value can only keep it the same or decrease it.
- **Standard deviation:** adding a value far from the mean increases the spread. Adding a value equal to the mean decreases the standard deviation, because the sum of squares is the same but is shared over more values.

**Worked example 3.** The data 10, 12, 14, 16 has mean 13 and σ = √5 = 2.24. A fifth value, 13, is added.

```
New mean = (10 + 12 + 14 + 16 + 13)/5 = 65/5 = 13   → stays the same
Sum of squared deviations is still 9 + 1 + 1 + 9 = 20 (the new value adds 0)
New σ = √(20/5) = 2                                    → decreases
```

For the median, take the data 3, 5, 8, 12, 20 with median 8. Adding 2 gives a median of 6.5 (decreases). Adding 8 leaves it at 8 (same). Adding 30 gives a median of 10 (increases).

When a question asks for a reason, give the comparison in words: "The new value is greater than the mean, so the mean increases."

## 6.4 Combining two data sets

Two groups have sizes n₁ and n₂, means x̄₁ and x̄₂, and standard deviations σ₁ and σ₂.

**Combined mean.** Add the totals and divide by the total number:

```
combined mean = (n₁x̄₁ + n₂x̄₂)/(n₁ + n₂)
```

You cannot just average the two means unless n₁ = n₂.

**Combined standard deviation.** Use Σx² for each group. From the formula σ² = Σx²/n − x̄², you get Σx² = n(σ² + x̄²). Then:

```
combined variance = (Σx² for both groups)/(n₁ + n₂) − (combined mean)²
combined σ = √(combined variance)
```

Do not average the two standard deviations.

**Worked example 4.** Group A has n = 20, mean 62, σ = 8. Group B has n = 30, mean 70, σ = 6. Find the mean and standard deviation of all 50 values.

```
Total A = 20 × 62 = 1 240        Total B = 30 × 70 = 2 100
Combined mean = 3 340/50 = 66.8

Σx² for A = 20 × (8² + 62²) = 20 × 3 908 = 78 160
Σx² for B = 30 × (6² + 70²) = 30 × 4 936 = 148 080
Combined variance = (78 160 + 148 080)/50 − 66.8²
                  = 4 524.8 − 4 462.24 = 62.56
Combined σ = √62.56 = 7.91 (3 s.f.)
```

The combined variance (62.56) is more than the weighted average of the two variances, (20 × 64 + 30 × 36)/50 = 47.2. The extra comes from the gap between the two group means.

**Finding the second mean.** If you know the combined mean, work with totals backwards.

**Worked example 5.** Group P has 12 values with mean 45. Group Q has 18 values. The 30 values together have mean 51. Find the mean of Q.

```
Total of all 30 = 30 × 51 = 1 530
Total of P = 12 × 45 = 540
Total of Q = 1 530 − 540 = 990
Mean of Q = 990/18 = 55
```

## 6.5 Scaling and standardising

**Standardising** converts a value x from a distribution with mean μ and standard deviation σ into a z-score:

```
z = (x − μ)/σ
```

The z-score says how many standard deviations a value is above (positive) or below (negative) the mean. Standardised data has **mean 0 and standard deviation 1**. It is just a coded set with a = 1/σ and b = −μ/σ.

**Scaling to a given mean and standard deviation.** To move data to a new mean M and new standard deviation S, standardise first and then rebuild:

```
new value = M + S × (x − μ)/σ
```

**Worked example 6.** A test has mean 54 and σ = 12. The marks are rescaled to mean 60 and σ = 10. Find the new value of a mark of 66.

```
z = (66 − 54)/12 = 1
new mark = 60 + 10 × 1 = 70
```

To go backwards, undo each step: a scaled mark of 55 has z = (55 − 60)/10 = −0.5, so the original was 54 + 12 × (−0.5) = 48.

**Using z-scores to compare.** Raw marks from different tests cannot be compared directly.

**Worked example 7.** Amir scores 72 in maths (mean 60, σ = 8) and 68 in English (mean 55, σ = 6.5). In which subject did he do better relative to the class?

```
Maths:   z = (72 − 60)/8   = 1.5
English: z = (68 − 55)/6.5 = 2.0
```

His English result is 2.0 standard deviations above the mean, compared with 1.5 for maths, so he did relatively better in English even though his raw mark is lower.

## 6.6 Comparing distributions

Always make **two** comparisons, each in context: one for centre and one for spread.

- **Larger values generally:** the distribution with the larger mean (or median).
- **More consistent:** the distribution with the smaller standard deviation (or smaller IQR).

**Worked example 8.** Two machines fill bags of rice. Machine A: mean 502 g, σ = 1.8 g. Machine B: mean 498 g, σ = 4.6 g. Compare them.

> Machine A fills bags with more rice on average (502 g compared with 498 g). Machine A is also more consistent, because its standard deviation (1.8 g) is smaller than machine B's (4.6 g).

Pair the measures properly: the mean goes with the standard deviation, and the median goes with the IQR. If the data has outliers, say that the median and IQR are less affected by them.

## Common errors

- Adding b to the standard deviation or the IQR. Neither changes.
- Writing a negative standard deviation after multiplying by a negative number.
- Averaging two means or two standard deviations without using group sizes.
- Taking the "combined standard deviation" as the mean of the two standard deviations.
- Comparing the raw marks from different tests instead of z-scores.
- Writing "A is better" without saying whether you mean larger values or more consistent values.
- Forgetting that the median can stay the same when a value is added.

## Where to go next

Work through the [practice set](/resources/cambridge-igcse-statistics-transforming-combining-and-comparing-data-sets-coding-practice/), then use the [revision notes](/resources/cambridge-igcse-statistics-transforming-combining-and-comparing-data-sets-coding-revision-notes/) for a short summary.

## Official syllabus

Cambridge IGCSE Statistics 0479 syllabus for examination in 2027, version 1, Cambridge University Press & Assessment (Cambridge International Education), Topic 6, outcomes 6.1 to 6.6.
