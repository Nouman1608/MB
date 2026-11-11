---
title: "Cambridge O Level Statistics: Averages: mean, median, mode and modal class (4040) -- Revision Notes"
seoTitle: "O Level Statistics 4040 Averages Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Averages: mean, median, mode and modal class"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 20
syllabusTopics:
  - qualification: "o-level"
    topic: "statistical-measures-interpretation-and-use-4040"
    subtopic: "measures-of-central-tendency-4040"
description: "Condensed revision notes on the mean, median, mode and modal class from lists and frequency tables, with a self-test, for Cambridge O Level Statistics."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

These notes condense section 5.1 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: the mean, median, mode and modal class, calculated or estimated from a set of numbers, an ungrouped frequency distribution or a grouped frequency distribution, and the choice of the appropriate average. Full explanations and longer worked examples are in the [study guide](/resources/cambridge-o-level-statistics-averages-mean-median-mode-and-modal-class/). For exam-style questions, use the [practice questions](/resources/cambridge-o-level-statistics-averages-mean-median-mode-and-modal-class-practice/).

Other links: the [Cambridge O Level Statistics hub](/boards/cambridge/o-level/statistics/), the [printable checklist](/checklists/cambridge/o-level/statistics/), [formation of frequency distributions](/resources/cambridge-o-level-statistics-frequency-distributions/) for class limits and boundaries, and the [free 10-minute diagnostics](/diagnostics/).

## Definitions

| Term | Meaning |
|---|---|
| Mean | Sum of values ÷ number of values |
| Median | Middle value of the ordered data; halfway between the two middle values if n is even |
| Mode | Most frequent value; there may be none, one or several |
| Modal class | Class with the highest frequency (equal widths) or frequency density (unequal widths) |
| Midpoint | Halfway between a class's lower and upper boundaries |
| Frequency density | Frequency ÷ class width |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-averages-mean-median-mode-and-modal-class--14-median-position.webp" width="900" height="740" alt="Two rows of ordered tiles. Nine values 18, 22, 24, 27, 29, 31, 31, 31, 45: position (9 + 1) ÷ 2 is 5, so the median is the 5th value, 29, with four values either side. Ten values 9, 9, 9, 12, 14, 15, 17, 20, 22, 31: the 5th and 6th values are 14 and 15, so the median is halfway between them, 14.5." loading="lazy">
  <figcaption>Order the data, then count in from both ends: an odd number of values has one middle value, an even number has two and the median is halfway between them.</figcaption>
</figure>


## Formulas

| Case | Mean | Median position |
|---|---|---|
| List of n values | (Σx) / n | (n + 1)/2 th value |
| Ungrouped table | (Σfx) / (Σf) | (Σf + 1)/2 th value, found from cumulative frequency |
| Grouped table | (Σfx) / (Σf), x = midpoint, an estimate | n/2 th value, then interpolate |
| Grouped median | L + ((n/2 − F) / f) × w | L lower boundary of the median class, F cumulative frequency before it, f its frequency, w its width |

## Method in steps

### From a list

1. Mean: add, then divide by how many values there are.
2. Median: put the values in order first. Count to the middle.
3. Mode: count repeats. Say "no mode" if nothing repeats.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-averages-mean-median-mode-and-modal-class--13-three-averages.webp" width="900" height="560" alt="A dot plot of nine journey times: 18, 22, 24, 27, 29, 31, 31, 31 and 45 minutes, with the three 31s stacked. The mean, 258 divided by 9 which is 28.67, is shown as the balance point. The median is the 5th value, 29, ringed. The mode is 31, the stack of three." loading="lazy">
  <figcaption>The same nine journey times give three different averages: the mean balances the data, the median is the middle value, and the mode is the most frequent.</figcaption>
</figure>


### From an ungrouped table

1. Add a column f × x and find Σf and Σfx.
2. Mean = Σfx ÷ Σf.
3. Median: build cumulative frequencies, find which value covers the middle position.
4. Mode: the value (the x entry) with the largest f.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-averages-mean-median-mode-and-modal-class--15-frequency-table-averages.webp" width="900" height="860" alt="A strip of 40 members in order, grouped by books borrowed: 5 borrowed 0, 9 borrowed 1, 12 borrowed 2, 8 borrowed 3, 4 borrowed 4 and 2 borrowed 5. The 20th and 21st members both fall in the group that borrowed 2 books, so the median is 2. A bar chart of the frequencies shows the tallest bar, 12, at x = 2, so the mode is 2 books, not 12. The mean is 83 divided by 40, which is 2.075." loading="lazy">
  <figcaption>With 40 members in order the median lies between the 20th and 21st values; the mode is the value 2, not the frequency 12.</figcaption>
</figure>


### From a grouped table

1. Write the midpoint of each class, then f × midpoint.
2. Estimated mean = Σfx ÷ Σf. Label it as an estimate.
3. Modal class: highest frequency, or highest frequency density if widths differ.
4. Median class: the class containing the n/2 th value. Interpolate inside it from its lower boundary.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-averages-mean-median-mode-and-modal-class--16-grouped-mean-median.webp" width="900" height="970" alt="A histogram of the waiting times of 52 patients in classes of width 5 minutes with frequencies 4, 11, 17, 12, 6 and 2. The tallest bar, 10 to 15 minutes, is the modal class. Midpoints 2.5 to 27.5 are marked below the axis. The estimated mean is 705 divided by 52, which is 13.56, and the estimated median is 10 plus 11 over 17 times 5, which is 13.24; the first 11 of the 17 values in the median class are shaded. The mean is above the median because a few long waits pull it up." loading="lazy">
  <figcaption>For grouped data every answer is an estimate: the modal class is the tallest bar, the mean uses class midpoints, and the median is found by interpolating inside its class.</figcaption>
</figure>


## Small worked reminders

### List with a repeated value

Marks: 34, 41, 29, 41, 38, 50, 41, 36.

```
Ordered: 29 34 36 38 41 41 41 50
Mean   = 310 ÷ 8 = 38.75
Median = (38 + 41) ÷ 2 = 39.5
Mode   = 41
```

### Grouped estimate

Lengths of 20 leaves in centimetres: 0 ≤ l < 10 has 3, 10 ≤ l < 20 has 9, 20 ≤ l < 30 has 6, 30 ≤ l < 40 has 2.

```
Midpoints 5, 15, 25, 35
Σfx = 3×5 + 9×15 + 6×25 + 2×35 = 15 + 135 + 150 + 70 = 370
Estimated mean = 370 ÷ 20 = 18.5 cm
Modal class: 10 ≤ l < 20
Median: 10th value; 3 below 10 → 10 + (7/9) × 10 = 17.8 cm (to 3 s.f.)
```

### Ungrouped table with an odd total

Shoe sizes 10, 11, 12, 13, 14 with frequencies 4, 9, 13, 8, 3.

```
Σf = 37,  Σfx = 40 + 99 + 156 + 104 + 42 = 441
Mean = 441 ÷ 37 = 11.9 (to 3 s.f.)
Cumulative frequencies: 4, 13, 26, 34, 37
Median position: (37 + 1)/2 = 19th value, which lies in the 12 group (14th to 26th)
Median = 12      Mode = 12 (frequency 13)
```

### Effect of an extreme value

Take 6, 7, 7, 8, 9: mean 7.4, median 7, mode 7. Add the value 40. The total becomes 77 and the mean 12.83. The median becomes 7.5 and the mode stays 7. One extreme value changed the mean by more than 5 and the median by half a unit. This is the standard reason for preferring the median when data has outliers.

### Class midpoints for whole-number classes

For classes written as 1-5 and 6-10, the midpoint of the first is (1 + 5)/2 = 3, and of the second is (6 + 10)/2 = 8. Using the boundaries 0.5 and 5.5 gives the same midpoint, 3. Either route works.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-averages-mean-median-mode-and-modal-class--17-unequal-class-density.webp" width="900" height="1080" alt="Two charts of 56 fruit crates in classes 0 to 2, 2 to 4, 4 to 8, 8 to 12 and 12 to 20 kg with frequencies 6, 14, 20, 10 and 6. In the first, bar height is frequency and the tallest bar is 4 to 8 kg, which is twice as wide as the class before it. In the second, bar height is frequency density, 3, 7, 5, 2.5 and 0.75, and the tallest bar is 2 to 4 kg. The estimated mean is 364 divided by 56, which is 6.5 kg." loading="lazy">
  <figcaption>When classes are not equally wide the tallest frequency bar can mislead; compare frequency density (frequency ÷ class width), where area shows frequency.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-averages-mean-median-mode-and-modal-class--19-discrete-class-boundaries.webp" width="900" height="910" alt="A histogram of the ages of 50 club members in classes 10 to 19, 20 to 29, 30 to 39, 40 to 49 and 50 to 59 with frequencies 7, 13, 18, 9 and 3. The bars run between the boundaries 9.5, 19.5, 29.5, 39.5, 49.5 and 59.5, and the midpoints are 14.5, 24.5, 34.5, 44.5 and 54.5. 20 members lie in the first two classes, so the median needs 5 of the 18 in the 30 to 39 class: 29.5 plus 5 over 18 times 10, which is about 32.3. The estimated mean is 1605 divided by 50, which is 32.1." loading="lazy">
  <figcaption>Classes written as 10–19, 20–29 leave gaps; the boundaries 9.5, 19.5 and so on close them, give the midpoints, and start the median interpolation.</figcaption>
</figure>


### Working backwards from a mean

The mean of 12 numbers is 6.5, so their total is 12 × 6.5 = 78. If one value of 10 is removed, the total is 68 and the mean of the remaining 11 is 68 ÷ 11 = 6.18 (to 3 s.f.).

## Reading the question

- "Calculate" means show the working and give a number, usually to 3 significant figures unless told otherwise.
- "Estimate" signals grouped data and midpoints, so a word such as "approximately" belongs in your answer.
- "State" the mode or modal class needs no working, but a quick underline of the highest frequency is safe.
- "Which average" or "justify" needs a named average and a reason, so one sentence is not enough without the reason.
- Units matter: write minutes, kg or years after the answer when the question gives them.

## Must-know distinctions

- Mode is a value, not a frequency. In a table the mode is the entry in the x column.
- Mean uses every value, so one extreme value shifts it. Median and mode barely move.
- Grouped answers are estimates because the midpoint stands in for every value in the class.
- Median needs ordered data. A frequency table is already ordered, so use cumulative frequency.
- Modal class is for grouped data. Mode is for a list or an ungrouped table.
- Choose by the data:
  - categories → mode
  - skewed data or outliers → median
  - symmetrical numerical data, or when totals matter → mean

## Choosing and justifying an average

A strong answer has three parts: the average, the figure, and the reason tied to the data. For example: "The median is better here, because one very high value raises the mean above most of the values."

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-averages-mean-median-mode-and-modal-class--18-which-average.webp" width="900" height="960" alt="A bar chart of seven weekly wages in hundreds of rupees: 18, 19, 19, 20, 21, 22 and 95. The mean, 30.57, is drawn as a line above six of the seven bars. The median, 20, is the fourth bar and the mode, 19, is the two equal bars. Below, four rows give the best average: categories use the mode, extreme values or skew use the median, roughly symmetrical numerical data uses the mean, and grouped data for a quick description uses the modal class." loading="lazy">
  <figcaption>One extreme wage drags the mean above six of the seven values; the median describes the typical wage. Choose the average to suit the data.</figcaption>
</figure>


## Sense checks before you move on

- The mean must lie between the smallest and largest values. For grouped data it must lie between the lowest and highest class boundaries.
- The estimated median must lie inside the median class. If it does not, the position or the cumulative frequency is wrong.
- Σf must equal the total number of observations given in the question. If it does not, a frequency was misread.
- If the mean is much higher than the median, expect a few large values. Say so when asked to comment.
- A mean of a whole-number count (people, books, goals) can be a decimal. Do not round it to a whole number unless asked.

## Quick self-test

1. Find the mean of 4, 8, 9 and 15.
2. Find the median of 12, 7, 15, 9, 20, 7.
3. Find the mode of 3, 5, 5, 6, 3, 7, 5, 3.
4. A table gives x = 1, 2, 3, 4 with frequencies 5, 8, 4, 3. Find the mean and the median.
5. What is the midpoint of the class 20 ≤ x < 30?
6. Classes 0 ≤ x < 10, 10 ≤ x < 20, 20 ≤ x < 30 have frequencies 5, 10 and 5. Estimate the mean.
7. Six numbers have a mean of 7.5. A seventh number, 12, is added. Find the new mean.
8. A shop wants to know which shoe size to stock most of. Which average should it use?
9. A class 5 ≤ x < 10 has frequency 15 and a class 10 ≤ x < 20 has frequency 24. Which is the modal class?
10. Which position holds the median in 51 ordered values?
11. A data set has an extreme high value. Which average does it affect most?
12. Why is a mean from grouped data called an estimate?

### Answers

1. 36 ÷ 4 = 9.
2. Ordered: 7, 7, 9, 12, 15, 20. The middle two are 9 and 12, so the median is 10.5.
3. 3 and 5 each occur three times, so the data is bimodal: 3 and 5.
4. Σf = 20, Σfx = 5 + 16 + 12 + 12 = 45, mean = 2.25. Cumulative frequencies are 5, 13, 17, 20. The 10th and 11th values are both 2, so the median is 2.
5. 25.
6. Midpoints 5, 15, 25: (25 + 150 + 125) ÷ 20 = 15.
7. Total 6 × 7.5 = 45, new total 57, new mean 57 ÷ 7 = 8.14 (to 3 s.f.).
8. The mode.
9. Frequency densities are 15 ÷ 5 = 3 and 24 ÷ 10 = 2.4, so the modal class is 5 ≤ x < 10.
10. The 26th value.
11. The mean.
12. Individual values are not known, so the midpoint is assumed for every value in a class.

## Where marks are usually lost

- Finding the median from unordered data.
- Quoting the frequency as the mode.
- Dividing Σfx by the number of classes rather than Σf.
- Using the class limit instead of the midpoint.
- Leaving out the f × x column, so a slip cannot be traced.
- Writing "mean" instead of "estimated mean" for grouped data.
- Using the stated limit instead of the boundary when interpolating for the median.
- Choosing the average without a reason linked to the data.
- Rounding too early. Keep full figures until the last line, then give 3 significant figures unless told otherwise.

## Frequently asked questions

**What does "estimate" signal in an O Level Statistics question?**
It signals grouped data and midpoints, so your answer should say it is approximate.

**How do you find the median from a frequency table?**
A frequency table is already in order, so use cumulative frequency to find the position of the middle value rather than taking the middle of the values row.

**How can you check that a mean is sensible?**
The mean must lie between the smallest and largest values, or for grouped data between the lowest and highest class boundaries. Also check that Σf equals the total number of observations.

**How accurate should an O Level Statistics answer be?**
Unless the question says otherwise, give a calculated answer to 3 significant figures and show the working.

## Official syllabus

Cambridge O Level Statistics (4040), syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment (Cambridge International). Section 5.1: measures of central tendency, mean, median, mode and modal class.
