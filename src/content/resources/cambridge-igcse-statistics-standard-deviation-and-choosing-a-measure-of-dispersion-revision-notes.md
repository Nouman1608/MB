---
title: "Cambridge IGCSE Statistics: Standard deviation and choosing a measure of dispersion (0479) -- Revision Notes"
seoTitle: "Cambridge IGCSE Statistics: Standard Deviation Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["igcse"]
topic: "Standard deviation and choosing a measure of dispersion"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0479"]
syllabusSeries: "2027"
order: 30
syllabusTopics:
  - qualification: "igcse"
    topic: "quartiles-percentiles-and-measures-of-dispersion-0479"
description: "Condensed revision notes on standard deviation formulae, grouped estimates and choosing range, IQR or standard deviation -- Cambridge IGCSE Statistics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense outcomes 5.6 and 5.7 of Topic 5 in the Cambridge IGCSE Statistics (0479) syllabus for examination in 2027. They assume you have met the ideas; the [study guide](/resources/cambridge-igcse-statistics-standard-deviation-and-choosing-a-measure-of-dispersion/) has the full explanations and longer worked examples. Then test yourself with the [practice questions](/resources/cambridge-igcse-statistics-standard-deviation-and-choosing-a-measure-of-dispersion-practice/).

Related links: [Cambridge IGCSE Statistics course page](/boards/cambridge/igcse/statistics/), [syllabus checklist](/checklists/cambridge/igcse/statistics/), [free diagnostics](/diagnostics/) and [Frequency distributions](/resources/igcse-cambridge-statistics-frequency-distributions/) for midpoints.

## Key facts

- Standard deviation (SD) measures the typical distance of the values from the mean. It uses every value.
- It has the same units as the data. It is never negative. It is zero only if all values are equal.
- Grouped data gives an estimate of the SD, because the midpoint stands in for every value in its class.
- Essential working must be shown for full marks, so write down the sums you use.

## The two formulae (outcome 5.6)

| Data | Form 1 | Form 2 |
|---|---|---|
| Small data set | √[ Σ(x − x̄)² / n ] | √[ Σx² / n − (Σx / n)² ] |
| Frequency table | √[ Σf(x − x̄)² / Σf ] | √[ Σfx² / Σf − (Σfx / Σf)² ] |

Form 2 reads: mean of the squares, minus the square of the mean. Whatever is under the root is the variance, so the SD is the square root of the variance.

## Method in steps

Small data set or ungrouped table, Form 2:

1. Write the values (and frequencies, if any) in columns.
2. Add columns fx and fx² (for a small data set, x and x²).
3. Find Σf, Σfx and Σfx².
4. Mean = Σfx / Σf.
5. Variance = Σfx² / Σf − mean².
6. Square root. Round at the end, to 3 significant figures unless told otherwise.

Grouped table:

1. Find the midpoint of each class.
2. Treat the midpoint as x and carry on as above.
3. State that your answer is an estimate.

## Worked reminders

### Small data set

Values 7, 3, 9, 5, 6. Σx = 30, so x̄ = 6.

```
x − 6:     1   −3    3   −1    0
squared:   1    9    9    1    0     Σ = 20
SD = √(20/5) = √4 = 2
```

Check with Form 2: Σx² = 49 + 9 + 81 + 25 + 36 = 200, and 200/5 − 36 = 4, so SD = 2.

### Ungrouped table

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| f | 6 | 10 | 3 | 1 |
| fx | 6 | 20 | 9 | 4 |
| fx² | 6 | 40 | 27 | 16 |

Σf = 20, Σfx = 39, Σfx² = 89.

```
Mean = 39/20 = 1.95
SD = √(89/20 − 1.95²) = √(4.45 − 3.8025) = √0.6475 = 0.805
```

### Grouped table

| Class | 0 ≤ x < 5 | 5 ≤ x < 10 | 10 ≤ x < 15 | 15 ≤ x < 20 |
|---|---|---|---|---|
| f | 3 | 9 | 6 | 2 |
| Midpoint | 2.5 | 7.5 | 12.5 | 17.5 |

Σf = 20, Σfx = 185, Σfx² = 2075.

```
Estimated mean = 185/20 = 9.25
Estimated SD = √(2075/20 − 9.25²) = √(103.75 − 85.5625) = √18.1875 = 4.26
```

### Working backwards from the SD

If the mean and SD are known, the sum of squares follows from Form 2. For 10 values with mean 6 and SD 2:

```
SD² = Σx²/n − mean²
4 = Σx²/10 − 36
Σx² = 400
```

The same idea finds a missing value or a missing frequency: write Σfx and Σfx² in terms of the unknown, then use the mean or SD you are given.

## Range and IQR: quick reminder

The range is largest minus smallest. The IQR is the upper quartile minus the lower quartile. Take the seven values 14, 16, 19, 21, 23, 28, 30 (already in order).

```
Range = 30 − 14 = 16
Lower quartile = 16 (2nd value)
Upper quartile = 28 (6th value)
IQR = 28 − 16 = 12
```

The range uses two values. The IQR uses the two quartiles. Neither uses all seven values, which is the main reason the standard deviation can be preferred when no extreme value is present.

## Comparing the three measures (outcome 5.7)

| Measure | Uses | Strength | Weakness |
|---|---|---|---|
| Range | Largest and smallest value only | Quick and simple | One extreme value changes it a lot |
| IQR | Upper quartile minus lower quartile: the middle half | Resists extreme values | Ignores the top and bottom quarters |
| Standard deviation | Every value | Full use of the data, pairs with the mean | Pulled by extremes; longer to find; not possible with an open-ended class |

### Choosing a measure: what to write

1. Name the measure.
2. Give a property of that measure.
3. Link it to the data in the question.

### Choosing a measure: scenarios

| Situation | Better measure | Reason to write |
|---|---|---|
| Prices of houses on a street, with one very large house | IQR | The large house would inflate the range and the SD, but not the middle half |
| Marks of a class where there are no unusual scores and the mean is reported | Standard deviation | It uses every mark and goes naturally with the mean |
| Waiting times grouped with a final class "60 and over" | IQR | The range and SD need an upper limit that the table does not give |
| Two machines with the same mean output, asking which is more consistent | Standard deviation | A smaller SD means values closer to the mean |
| A fast check of two short lists of temperatures | Range | Simple and quick, but note the limitation |
| A skewed distribution with a long tail | IQR | The middle half describes the typical spread without the tail pulling it |

### A model sentence

"The standard deviation of Machine A (2 ml) is smaller than that of Machine B (5 ml), so Machine A fills bottles more consistently, because its volumes are closer to the mean."

It has a conclusion, a comparison of the figures, and a reason. Copy the pattern.

### Must-know distinctions

- Range and SD change a lot when an extreme value is added. The IQR may not change at all.
- Open-ended class in a grouped table: range and SD cannot be calculated. The IQR may still be estimated if both quartiles lie outside that class.
- Comparing two sets with the same mean: the set with the smaller SD is the more consistent.
- Comparing two sets with different units or very different sizes of values: compare with care and say what you are comparing.
- A grouped SD is an estimate. A SD from a small data set is exact.

## Quick self-test

1. Write down Form 1 for the standard deviation of n values.
2. Write down Form 2.
3. Find the standard deviation of 4, 8 and 12.
4. For 5 values, Σx = 60 and Σx² = 800. Find the standard deviation.
5. For a frequency table, Σf = 25, Σfx = 75 and Σfx² = 290. Find the mean and the standard deviation.
6. Write down the midpoint of the class 20 ≤ x < 30 when estimating a mean or standard deviation.
7. Which of range, IQR and standard deviation is least affected by one extreme value?
8. What is the standard deviation of five identical values?
9. Which measures cannot be calculated if a table has an open-ended top class?
10. Two machines fill bottles with the same mean volume. Machine A has SD 2 ml and machine B has SD 5 ml. Which is more consistent?
11. Find the range and the IQR of 14, 16, 19, 21, 23, 28 and 30.
12. The variance of a set of values is 9.61. Find the standard deviation.

### Answers

1. √[ Σ(x − x̄)² / n ].
2. √[ Σx² / n − (Σx / n)² ].
3. Mean 8; squared deviations 16, 0 and 16 sum to 32; variance 32/3; SD = **3.27**.
4. Mean 12; variance 800/5 − 144 = 16; SD = **4**.
5. Mean = 75/25 = **3**; variance 290/25 − 9 = 2.6; SD = **1.61**.
6. **25**.
7. The **IQR**.
8. **Zero**, because there is no spread at all.
9. The **range** and the **standard deviation**.
10. **Machine A**, because its smaller standard deviation means the volumes are closer to the mean.
11. Range = 30 − 14 = **16**; IQR = 28 − 16 = **12**.
12. √9.61 = **3.1**.

## Command words

- **Calculate**: show the sums and the substitution into the formula.
- **Estimate**: use midpoints for a grouped table, and say the result is an estimate.
- **Compare**: refer to both sets of figures and use comparative words such as "larger" and "more consistent".
- **Justify** or **Explain**: give a reason that refers to the data or the context, not only the name of a measure.

## Where marks are usually lost

- Giving the variance and forgetting the square root.
- Dividing by the number of classes or rows instead of Σf.
- Squaring Σx instead of finding (Σx / n)². These are different numbers.
- Using class boundaries or class widths instead of midpoints.
- Rounding the mean or the variance early, and so losing accuracy in the final answer.
- Showing only a final answer. Method that is written down is more likely to be credited if a slip occurs.
- Calling a grouped result exact. Say "estimate".
- Naming a measure without linking it to the context, for example saying "IQR is better" without mentioning the extreme value.
- Judging consistency from the mean rather than from the spread.

## Official syllabus

Cambridge IGCSE Statistics (0479) syllabus for examination in 2027, Cambridge University Press and Assessment (Cambridge International Education), Topic 5, outcomes 5.6 and 5.7.
