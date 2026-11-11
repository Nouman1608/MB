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
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-statistics-mean-median-and-mode-calculation-estimation-from--01-three-averages.webp" width="900" height="730" alt="Eight texts sent in a day, in order: 7, 7, 7, 9, 12, 14, 15, 20. The median is the mean of the 4th and 5th values, 9 and 12, which is 10.5. On a dot plot the three 7s make the mode, the mean 91 divided by 8 is 11.375 and acts as the balance point, and the median 10.5 sits between the 9 and 12. The median and the mean are not data values, but the mode always is." loading="lazy">
  <figcaption>The mean is the balance point, the median the middle of the ordered values and the mode the most frequent value.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-statistics-mean-median-and-mode-calculation-estimation-from--02-mean-fixes-total.webp" width="900" height="780" alt="Two bars drawn to the same scale show that mean times number of values gives the total. In part (a) six numbers with mean 8.5 have total 6 times 8.5, which is 51. The five known numbers 4, 9, 12, 7 and 10 add to 42, so the missing sixth number is 51 minus 42, which is 9. In part (b) 12 readings with mean 15.5 total 186. After a 13th reading the mean is 16, so the total is 13 times 16, which is 208, and the new reading is 208 minus 186, which is 22." loading="lazy">
  <figcaption>A given mean fixes the total, so a missing value is the total minus the known values.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-statistics-mean-median-and-mode-calculation-estimation-from--04-grouped-mean-midpoints.webp" width="900" height="830" alt="A histogram of 60 puzzle times in classes of width 10 from 20 to 80, with frequencies 5, 12, 21, 14, 6 and 2. Each class is represented by its midpoint: 25, 35, 45, 55, 65 and 75. Frequency times midpoint gives 125, 420, 945, 770, 390 and 150, which add to 2800. Dividing by the 60 people gives a mean of about 46.7 seconds. This is an estimate because the individual times are not known." loading="lazy">
  <figcaption>Use each class midpoint as the typical value, then sum fx divided by sum f gives an estimate of the mean.</figcaption>
</figure>


## 4.2 Grouped frequency distributions

### Estimated mean

```
Mean ≈ Σfx ÷ Σf    where x = class midpoint
```

Midpoint of a continuous class = (lower boundary + upper boundary) ÷ 2. Midpoint of a discrete class such as 6–10 = (6 + 10) ÷ 2 = 8.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-statistics-mean-median-and-mode-calculation-estimation-from--03-frequency-table-averages.webp" width="900" height="840" alt="Bar chart of the number of faulty parts in 50 bulbs: 0 faults 6 bulbs, 1 fault 11, 2 faults 14, 3 faults 9, 4 faults 6 and 5 faults 4. The tallest bar is at 2 faults, so the mode is 2, not the frequency 14. The total of frequency times faults is 110, so the mean is 110 divided by 50, which is 2.2. Below, the 50 ordered bulbs are grouped by faults with running totals 6, 17, 31, 40, 46 and 50. The 25th and 26th values both fall in the group with 2 faults, so the median is 2." loading="lazy">
  <figcaption>The mode is the value with the highest frequency, the median comes from cumulative frequency and the mean from sum of fx divided by sum of f.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-statistics-mean-median-and-mode-calculation-estimation-from--05-grouped-median-polygon.webp" width="900" height="750" alt="Cumulative frequency polygon for 60 puzzle times, plotted against upper class boundaries 30 to 80 with cumulative frequencies 5, 17, 38, 52, 58 and 60, starting at 0 at 20 seconds. Half of 60 is 30. Reading across from 30 meets the polygon in the 40 to 50 class, between cumulative frequencies 17 and 38. Linear interpolation gives 40 plus 13 over 21 times 10, about 46.2 seconds, which is where the line down to the axis lands." loading="lazy">
  <figcaption>Half of n read across a cumulative frequency polygon gives the median, matching linear interpolation.</figcaption>
</figure>


## 4.3 Modal class

- Equal class widths: the class with the highest frequency.
- Unequal class widths: the class with the highest frequency density, where frequency density = frequency ÷ class width.

Small reminder: classes 0 ≤ x < 10, 10 ≤ x < 20, 20 ≤ x < 40 with frequencies 8, 12, 20 have densities 0.8, 1.2 and 1.0. The modal class is 10 ≤ x < 20, even though 20 is the largest frequency.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-statistics-mean-median-and-mode-calculation-estimation-from--06-modal-class-density.webp" width="900" height="810" alt="Histogram of 80 journey times with classes 0 to 10, 10 to 15, 15 to 20, 20 to 30 and 30 to 50 minutes. Frequencies are 20, 18, 12, 16 and 14, class widths 10, 5, 5, 10 and 20, so the frequency densities are 2, 3.6, 2.4, 1.6 and 0.7. The highest frequency, 20, is in the wide 0 to 10 class, but the tallest bar is the 10 to 15 class with density 3.6, so that is the modal class." loading="lazy">
  <figcaption>With unequal widths the modal class has the highest frequency density, not the highest frequency.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-statistics-mean-median-and-mode-calculation-estimation-from--07-choose-average-pay.webp" width="900" height="800" alt="Nine annual pay values in thousands of dollars: 21, 23, 24, 24, 26, 27, 29, 31 and 240, the owner. On a number line from 0 to 250 eight values bunch between 21 and 31 while the owner sits far away at 240. The mean, 445 divided by 9, is 49.4 and describes nobody. A zoomed view of the eight shows the mode, 24, which occurs twice, and the median, 26, which is the fifth of nine values. Without the owner the mean of the other eight is 205 divided by 8, 25.6. The median does not change however large the owner pay is." loading="lazy">
  <figcaption>One very large value drags the mean away from everyone, while the median and mode stay with the typical values.</figcaption>
</figure>


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

## Frequently asked questions

**How do you combine the means of two groups?**
Add the two group totals and divide by the total number of values. Never average the two means directly unless the groups are the same size.

**When should you use n/2 and when (n + 1)/2 for the median?**
Use (n + 1)/2 for a list or an ungrouped frequency table. Use n/2 for a grouped distribution, a cumulative frequency graph and interpolation.

**How do you find the modal class when class widths are unequal?**
Choose the class with the highest frequency density, where frequency density = frequency ÷ class width, rather than the highest frequency.

**What boundaries do you use for discrete grouped data?**
For classes such as 1–5, 6–10 and 11–15, use the boundaries 0.5, 5.5, 10.5 and 15.5 when you interpolate, not the class limits.

## Official syllabus

These notes follow Topic 4, Measures of central tendency (outcomes 4.1 to 4.4), of the Cambridge IGCSE Statistics 0479 syllabus for examination in 2027, published by Cambridge University Press & Assessment (Cambridge International Education).
