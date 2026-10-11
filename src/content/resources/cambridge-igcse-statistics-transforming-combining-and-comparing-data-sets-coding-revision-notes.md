---
title: "Cambridge IGCSE Statistics: Transforming, combining and comparing data sets: coding, combined means and standardising (0479) -- Revision Notes"
seoTitle: "IGCSE Statistics 0479 Transforming Data Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes for Topic 6 of Cambridge IGCSE Statistics (0479): coding rules, combined mean and SD, z-scores and comparing distributions."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes summarise **Topic 6, Transformations of data sets**, from the Cambridge IGCSE Statistics (0479) syllabus for examination in 2027, outcomes 6.1 to 6.6. For full explanations and longer worked examples, read the [study guide](/resources/cambridge-igcse-statistics-transforming-combining-and-comparing-data-sets-coding/). Test yourself with the [practice set](/resources/cambridge-igcse-statistics-transforming-combining-and-comparing-data-sets-coding-practice/), tick off topics on the [printable checklist](/checklists/cambridge/igcse/statistics/), and see the [Statistics hub](/boards/cambridge/igcse/statistics/). Not sure where to start? Take a [free 10-minute diagnostic](/diagnostics/).

## Coding rules (6.1 and 6.2)

Each value x becomes y = ax + b.

| Measure | New value |
|---|---|
| Mean | a × mean + b |
| Median | a × median + b |
| Standard deviation | |a| × standard deviation |
| Interquartile range (IQR) | |a| × IQR |

Spread measures ignore b and ignore the sign of a. Centre measures follow the whole rule.

**Method in steps**

1. Write down the old mean, median, standard deviation and IQR.
2. Apply a and b to the centre measures.
3. Apply only |a| to the spread measures.
4. Check the answer makes sense: a spread can never be negative.

**Worked reminder.** Data 20, 24, 28, 32, 36 has mean 28 and σ = √32 = 5.66. Coded with y = x/4 + 3: mean 28/4 + 3 = 10, σ = 5.66/4 = 1.41. Check: the coded values are 8, 9, 10, 11, 12, with mean 10 and σ = √2 = 1.41.

**Negative multiplier.** Data with median 55 and IQR 14, coded with y = 100 − x, gives median 45 and IQR 14. The order of the data reverses, so the old upper quartile becomes the new lower quartile.

## Adding or removing values (6.3)

| Measure | Add a value above the measure | Add a value below | Add a value equal to it |
|---|---|---|---|
| Mean | increases | decreases | stays the same |
| Median | increases or stays the same | decreases or stays the same | stays the same |
| Range | increases if above the old maximum, otherwise stays the same | increases if below the old minimum, otherwise stays the same | stays the same if within the old range |
| Standard deviation | usually increases if far from the mean | usually increases if far from the mean | decreases (if added at the mean) |

Removing a value reverses the argument. Removing a value above the mean lowers the mean.

**Worked reminder.** Data 5, 7, 9, 12, 17, 20 has median 10.5. Adding 25 gives seven values, and the median is the fourth value, 12. It increased. Adding 10.5 would leave the median at 10.5.

**Say why.** Write the comparison: "25 is above the old median, so the median increases or stays the same. Here it moves to 12."

## Combined data sets (6.4)

| Quantity | Formula |
|---|---|
| Total of a group | n × mean |
| Σx² of a group | n × (σ² + mean²) |
| Combined mean | (n₁x̄₁ + n₂x̄₂)/(n₁ + n₂) |
| Combined variance | (Σx² of both)/(n₁ + n₂) − (combined mean)² |
| Combined σ | square root of the combined variance |

**Method in steps**

1. Find each group's total and Σx².
2. Add the totals and the Σx² values, and add the group sizes.
3. Divide to get the combined mean.
4. Find the combined variance, then square root it.

**Worked reminder.** Group 1: n = 10, mean 14, σ = 2. Group 2: n = 15, mean 20, σ = 3.

```
Combined mean = (140 + 300)/25 = 17.6
Σx² group 1 = 10 × (4 + 196) = 2 000
Σx² group 2 = 15 × (9 + 400) = 6 135
Variance = 8 135/25 − 17.6² = 325.4 − 309.76 = 15.64
σ = 3.95 (3 s.f.)
```

**Missing mean.** If the combined mean and one group are known, find the missing total by subtraction, then divide by the missing group size.

## Standardising and scaling (6.5)

| Task | Rule |
|---|---|
| Standardise (z-score) | z = (x − mean)/σ |
| Standardised data | mean 0, σ = 1 |
| Scale to new mean M and new σ = S | new value = M + S × z |
| Reverse a scaling | z = (new − M)/S, then x = mean + σ × z |

**Worked reminder.** A mark of 70 from a test with mean 58 and σ = 8 has z = 12/8 = 1.5. Scaled to mean 50 and σ = 10, it becomes 50 + 10 × 1.5 = 65.

**Why z-scores compare.** A z-score of 2 means "two standard deviations above the mean" in any data set. A mark is better relative to its group if its z-score is higher.

## Comparing distributions (6.6)

| Question wording | Use | Larger or smaller? |
|---|---|---|
| "Larger values generally" | mean or median | larger |
| "More consistent" | standard deviation or IQR | smaller |

Always give one comparison for centre and one for spread, with the figures and the context. Pair mean with standard deviation, and median with IQR.

## Extra worked reminders

**Coding from sums.** Often you are given the sums for coded values y = x − 80 rather than the raw data. For 25 values, Σy = 50 and Σy² = 300.

```
Mean of y = 50/25 = 2
Variance of y = 300/25 − 2² = 12 − 4 = 8
σ of y = √8 = 2.83 (3 s.f.)
Mean of x = 80 + 2 = 82
σ of x = 2.83 (unchanged by subtracting 80)
```

**Missing group mean.** Group R has 16 values with mean 30. Group S has 24 values. All 40 values have mean 36.

```
Total of all = 40 × 36 = 1 440
Total of R = 16 × 30 = 480
Total of S = 960, so mean of S = 960/24 = 40
```

**Comparing with z-scores.** Priya jumps 5.10 m in a group with mean 4.80 m and σ = 0.20 m. She also runs a time with a z-score of −1.4 on a race where lower is better. A positive jump z-score of (5.10 − 4.80)/0.20 = 1.5 is an above-average result. Take care with direction: for times, a negative z-score is the better result.

**Model comparison sentence.** "Club X has larger values generally, because its mean (24.5) is higher than Club Y's (21.0). Club X is also more consistent, because its standard deviation (2.1) is smaller than Club Y's (5.6)."

## Exam wording checklist

- "Describe the effect" asks for a measure and a direction or factor.
- "Show that" needs every step written down, including the formula.
- "Without calculating" means use the coding rules, not the data.
- "Give a reason" needs a comparison, such as "the new value is above the mean".
- "Compare" needs figures from both distributions, not just one.

## Must-know distinctions

- Centre measures move with b. Spread measures do not.
- A standard deviation is never negative, even when a is negative.
- The combined mean needs group sizes. The combined standard deviation needs Σx² as well.
- Standardising is a special case of coding.
- "Larger" and "more consistent" are different judgements and need different measures.

## Quick self-test

1. A data set has mean 30 and σ = 4. Every value is increased by 12. Find the new mean and σ.
2. The same data set is multiplied by 2.5. Find the new mean and σ.
3. A set has median 55 and IQR 14. Find the median and IQR after y = 3x − 5.
4. For the same set, find the median and IQR after y = 100 − x.
5. A data set of 5 values has mean 12. A sixth value of 12 is added. What happens to the mean and to σ?
6. A set of 8 values has median 20. A value of 35 is added. What can you say about the median?
7. A group of 20 values has mean 5 and a group of 30 values has mean 10. Find the combined mean.
8. A group of 25 values has mean 40. Together with a second group of 15 values the combined mean is 46. Find the mean of the second group.
9. A value of 70 is from a distribution with mean 58 and σ = 8. Find its z-score.
10. A z-score of −0.5 is scaled to mean 50 and σ = 10. Find the scaled value.
11. Set A has mean 72 and σ = 3. Set B has mean 65 and σ = 9. Compare them.

### Answers

1. Mean **42**, σ **4**.
2. Mean 30 × 2.5 = **75**, σ 4 × 2.5 = **10**.
3. Median 3 × 55 − 5 = **160**, IQR 3 × 14 = **42**.
4. Median 100 − 55 = **45**, IQR **14**.
5. The mean stays at **12** and σ **decreases** (the new value is at the mean).
6. 35 is above the median, so the median **increases or stays the same**. It cannot decrease.
7. (20 × 5 + 30 × 10)/50 = 400/50 = **8**.
8. Total 46 × 40 = 1 840. First group total 25 × 40 = 1 000. Second total 840. Mean 840/15 = **56**.
9. z = (70 − 58)/8 = **1.5**.
10. 50 + 10 × (−0.5) = **45**.
11. Set A has larger values generally (mean 72 compared with 65) and is more consistent (σ = 3 compared with 9).

## Where marks are usually lost

- Adding the constant to the standard deviation or IQR.
- Using a negative multiplier as the spread multiplier instead of its positive size.
- Averaging two group means without weighting by group size.
- Averaging two standard deviations instead of working with Σx².
- Forgetting to take the square root at the end of a variance calculation.
- Describing a comparison with only one measure, or with no figures.
- Saying a measure "must change" when adding a value, when it may stay the same.
- Comparing raw marks from different distributions instead of z-scores.

## Official syllabus

Cambridge IGCSE Statistics 0479 syllabus for examination in 2027, version 1, Cambridge University Press & Assessment (Cambridge International Education), Topic 6, outcomes 6.1 to 6.6.
