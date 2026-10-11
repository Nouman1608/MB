---
title: "Cambridge IGCSE Statistics: Mean, median and mode: estimation and choosing an average (0479) -- Revision Notes"
seoTitle: "IGCSE Statistics 0479 Mean Median Mode Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["igcse"]
topic: "Mean, median and mode: calculation, estimation from grouped data and choosing the right average"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0479"]
syllabusSeries: "2027"
order: 28
syllabusTopics:
  - qualification: "igcse"
    topic: "measures-of-central-tendency-0479"
description: "Condensed revision notes on mean, median, mode, modal class, grouped estimates and choosing an average, with a self-test, for IGCSE Statistics 0479."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense Topic 4, Measures of central tendency (outcomes 4.1 to 4.4), of the Cambridge IGCSE Statistics (0479) syllabus for examination in 2027. For full explanations and worked examples, read the [study guide](/resources/cambridge-igcse-statistics-mean-median-and-mode-calculation-estimation-from/). When you are ready to test yourself, use the [practice questions](/resources/cambridge-igcse-statistics-mean-median-and-mode-calculation-estimation-from-practice/).

Related pages: the [Cambridge IGCSE Statistics hub](/boards/cambridge/igcse/statistics/), the [printable checklist](/checklists/cambridge/igcse/statistics/), [frequency distributions](/resources/igcse-cambridge-statistics-frequency-distributions/) and the [free 10-minute diagnostics](/diagnostics/).

## The three averages at a glance

| Average | Method | Best used when |
|---|---|---|
| Mean | Σx ÷ n, or Σfx ÷ Σf from a table | Data is fairly symmetrical and every value matters |
| Median | Middle value of ordered data; position (n + 1)/2 for a list | Data is skewed or has extreme values |
| Mode | Most frequent value (modal class for grouped data) | You need the most common item or category |

## 4.1 Small data sets and ungrouped frequency tables

### Method for a list

1. Add the values and divide by how many there are for the mean.
2. Put the values in order. For an odd n take the middle one. For an even n average the two middle ones.
3. For the mode, count repeats. Write "no mode" if nothing repeats, or give every value tied for first.

### Method for an ungrouped frequency table

1. Add an f × x row. Mean = Σfx ÷ Σf.
2. Add a cumulative frequency row. The median is the value covering position (Σf + 1)/2. If Σf is even, check both middle positions. If they fall in different columns, average the two values.
3. The mode is the x with the largest f. Quote x, not f.

Small reminder: for x = 0, 1, 2, 3 with frequencies 6, 9, 3, 2, the cumulative frequencies are 6, 15, 18, 20. Positions 10 and 11 both lie in the x = 1 column, so the median is 1. The mode is 1 and the mean is 21 ÷ 20 = 1.05.

### Mean given: work with totals

```
total = mean × number of values
```

- Five values with mean 12 have total 60. If four add up to 47, the fifth is 13.
- Adding a value to n values: new total = old total + new value; new mean = new total ÷ (n + 1).
- Two groups: combined mean = (total of group A + total of group B) ÷ (number in A + number in B). Never average the two means directly unless the groups are the same size.
- In a table with an unknown frequency k, write Σf and Σfx with k in them, set Σfx ÷ Σf equal to the given mean, multiply through, and solve for k.

## 4.2 Grouped frequency distributions

### Estimated mean

```
Mean ≈ Σfx ÷ Σf    where x = class midpoint
```

Midpoint of a continuous class = (lower boundary + upper boundary) ÷ 2. Midpoint of a discrete class such as 6–10 = (6 + 10) ÷ 2 = 8.

### Estimated median

The median is the value at position n/2.

1. Build the cumulative frequency column against upper class boundaries.
2. Find the class that contains position n/2.
3. Interpolate:

```
median ≈ lower boundary + (n/2 − cf before the class) ÷ f(class) × width
```

Or plot the cumulative frequency polygon or curve, read across from n/2 and down to the axis. Show the reading lines on your graph.

Worked reminder: n = 40, class 30 ≤ x < 40 has frequency 12 and 12 values lie below 30. Position 20 gives median ≈ 30 + (20 − 12) ÷ 12 × 10 = 36.7.

Why these are estimates: the individual values inside each class are unknown, so you assume they sit at the midpoint (for the mean) or are spread evenly (for the median).

## 4.3 Modal class

- Equal class widths: the class with the highest frequency.
- Unequal class widths: the class with the highest frequency density, where frequency density = frequency ÷ class width.

Small reminder: classes 0 ≤ x < 10, 10 ≤ x < 20, 20 ≤ x < 40 with frequencies 8, 12, 20 have densities 0.8, 1.2 and 1.0. The modal class is 10 ≤ x < 20, even though 20 is the largest frequency.

## 4.4 Choosing an average

| | Advantage | Disadvantage |
|---|---|---|
| Mean | Uses all the data; supports further calculation | Pulled by extreme values; may be impossible as an actual value; estimate only when grouped |
| Median | Ignores extreme values; simple from a graph | Ignores most of the values; harder to combine groups |
| Mode | Works for categories; is an actual data value | May not exist or may be shared; ignores most data |

Method for a justification question:

1. Say what the data looks like (skewed, has an extreme value, categorical, symmetrical).
2. Choose the average that suits it and give the reason, using the figures or context in the question.
3. Say why one other average is weaker for this purpose.

Short examples:

- Canteen deciding which dish to prepare most of: mode, because it shows the choice made most often.
- Weekly pay at a firm where the owner takes 240 against 21 to 31 for everyone else: median, because the mean is inflated by one value.
- Marks that are close together with no extreme values: the mean uses every mark.
- Grouped data with a last class "60 and over": no midpoint for that class, so avoid the mean estimate.

### Extra points on grouped medians

- For a discrete grouped table such as 1–5, 6–10, 11–15, the boundaries are 0.5, 5.5, 10.5 and 15.5. Use these when you interpolate, not the limits 1, 6 and 11.
- If the median class is the last class in a table, check that n/2 really lies inside it before you interpolate.
- A cumulative frequency graph is plotted at upper boundaries, so the first point sits at the lower boundary of the first class with cumulative frequency 0.
- A straight-line polygon and linear interpolation give the same median. A smooth curve may differ slightly.

## Must-know distinctions

| Mixing up | Remember |
|---|---|
| Mode and its frequency | The mode is the value, not how often it occurs |
| Midpoint and class width | Midpoint is the centre of the class; width is upper minus lower boundary |
| n/2 and (n + 1)/2 | Use (n + 1)/2 for a list or ungrouped table; use n/2 for the grouped graph and interpolation |
| Modal class and modal frequency | Name the class, with its boundaries |
| Estimate and exact | State that grouped means and medians are estimates |

## Quick self-test

1. Find the mean of 6, 10, 13, 17, 19.
2. Find the median of 3, 9, 4, 12, 6, 8.
3. The mean of 10 numbers is 7. An 11th number, 18, is added. Find the new mean.
4. Find the mode, median and mean for x = 0, 1, 2, 3 with frequencies 6, 9, 3, 2.
5. What is the midpoint of the class 15 ≤ h < 25?
6. Classes 0 ≤ x < 10, 10 ≤ x < 20 and 20 ≤ x < 40 have frequencies 8, 12 and 20. Which is the modal class?
7. For 60 values, 22 lie below 40 and the class 40 ≤ x < 50 holds 20 values. Estimate the median.
8. Estimate the mean for classes 0 ≤ x < 10, 10 ≤ x < 20 and 20 ≤ x < 30 with frequencies 3, 5 and 2.
9. A company has one director paid far more than all other staff. Which average should a newsletter use for "typical pay", and why?
10. Give one disadvantage of the mode.

### Answers

1. 65 ÷ 5 = 13.
2. Ordered: 3, 4, 6, 8, 9, 12. Median = (6 + 8) ÷ 2 = 7.
3. Total = 70 + 18 = 88; mean = 88 ÷ 11 = 8.
4. Mode 1, median 1, mean 21 ÷ 20 = 1.05.
5. (15 + 25) ÷ 2 = 20.
6. Densities are 0.8, 1.2 and 1.0, so the modal class is 10 ≤ x < 20.
7. n/2 = 30, so median ≈ 40 + (30 − 22) ÷ 20 × 10 = 44.
8. Midpoints 5, 15, 25: (15 + 75 + 50) ÷ 10 = 14.
9. The median, because the director's pay would inflate the mean and make typical pay look higher than most staff receive.
10. It may not exist, may not be unique, or ignores most of the data. Any one of these.

## Where marks are usually lost

- Writing the frequency instead of the value as the mode.
- Leaving out the working for Σfx and Σf, so an arithmetic slip leaves nothing to credit.
- Using class limits (such as 10 and 19) as midpoints, or dividing by the number of classes.
- Quoting the median of a grouped table as the middle class instead of interpolating.
- Using the wrong boundary when interpolating, for instance the upper boundary instead of the lower.
- Choosing the modal class by frequency when class widths are unequal.
- Saying "mean is affected by outliers" with no reference to the data in the question.
- Giving a grouped mean or median without the word "estimate".
- Forgetting that a given mean means a given total, and trying to guess the missing value.

## Official syllabus

These notes follow Topic 4, Measures of central tendency (outcomes 4.1 to 4.4), of the Cambridge IGCSE Statistics 0479 syllabus for examination in 2027, published by Cambridge University Press & Assessment (Cambridge International Education).
