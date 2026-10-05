---
resourceId: "mb-ap-stats-1.5-practice"
title: "Graphical Representations for One Quantitative Variable: Practice Questions (Statistics 1.5)"
description: "Seven original Marlbridge practice questions on constructing and reading dotplots, stem-and-leaf plots and histograms, with worked solutions and suggested rubrics."
course: "statistics"
unit: 1
topics: ["1.5"]
resourceType: "practice-questions"
prerequisites:
  - "Ordering data and calculating a relative frequency"
prerequisiteResources: ["mb-ap-stats-1.5-study-guide"]
learningObjectives:
  - "Construct dotplots, stem-and-leaf plots and frequency or relative frequency histograms correctly"
  - "Place boundary values in the right bin and check that frequencies add to n"
  - "Explain how bin width affects what a histogram shows"
  - "Read counts and proportions from each display, and say what a display cannot tell you"
skills: ["3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "A calculator can check your histogram counts. Draw dotplots and stem-and-leaf plots by hand. Give relative frequencies to 2 or 3 decimal places."
related: ["mb-ap-stats-1.5-study-guide", "mb-ap-stats-1.5-revision-notes", "mb-ap-stats-1.5-checklist"]
next: "mb-ap-stats-1.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need a constructed graph or written reasoning."
  - "Label every axis with the variable and units, and give a key for every stem-and-leaf plot."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data sets are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: histogram bins include their left edge and not their right edge (a ≤ x < b); a stem-and-leaf plot uses one-digit leaves; relative frequency = frequency ÷ n. Draw graphs on paper, then compare with the solution.

## Question 1 (multiple choice · foundation)

A biologist measured the lengths of 15 lizards of a fictional species. The stem-and-leaf plot shows the lengths.

| Stem | Leaves |
|---|---|
| 3 | 5 8 |
| 4 | 0 2 2 6 9 |
| 5 | 1 3 3 7 8 |
| 6 | 0 4 8 |

Key: 4 | 2 means 4.2 cm.

What percentage of the lizards were longer than 5.0 cm?

- (A) 8%
- (B) 20%
- (C) 33.3%
- (D) 53.3%

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Using the key, the lengths above 5.0 cm are 5.1, 5.3, 5.3, 5.7, 5.8, 6.0, 6.4 and 6.8 cm. That is 8 of the 15 lizards, and 8 ÷ 15 = 0.533, or 53.3%.

- (A) gives the count, 8, as if it were a percentage. Divide by n = 15.
- (B) counts only stem 6 (3 lizards, 3 ÷ 15 = 20%). The lizards on stem 5 are also longer than 5.0 cm.
- (C) counts only stem 5 (5 lizards, 5 ÷ 15 = 33.3%) and misses stem 6.
</details>

## Question 2 (multiple choice · core)

A school surveyed 40 students about the distance from home to school. A relative frequency histogram of the distances has these bars:

| Distance (km) | 0 ≤ x < 5 | 5 ≤ x < 10 | 10 ≤ x < 15 | 15 ≤ x < 20 | 20 ≤ x < 25 |
|---|---|---|---|---|---|
| Relative frequency | 0.10 | 0.25 | 0.35 | 0.20 | 0.10 |

How many of the 40 students live less than 10 km from school?

- (A) 10
- (B) 14
- (C) 35
- (D) It cannot be found from a histogram.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** "Less than 10 km" covers the first two bins exactly. Their relative frequencies add to 0.10 + 0.25 = 0.35, and 0.35 × 40 = 14 students.

- (A) uses only the 5 to under 10 km bar: 0.25 × 40 = 10. The 0 to under 5 km bin is also less than 10 km.
- (C) reads the proportion 0.35 as a count of 35. A relative frequency must be multiplied by n.
- (D) is wrong here because 10 km is a bin edge. A histogram cannot answer questions about values *inside* a bin, but this question lines up with the bins.
</details>

## Question 3 (multiple choice · core)

A student draws two frequency histograms of the same 50 reaction times, in milliseconds. One uses bins of width 20 ms and the other uses bins of width 50 ms. The two histograms look quite different. Which statement is correct?

- (A) One histogram must contain an error, because the same data always give the same shape.
- (B) The histogram with narrower bins is always the more accurate one.
- (C) Both can be correct. Changing the bin width can change how a histogram looks.
- (D) The bar heights in the width-20 histogram add to more than 50, because it has more bars.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A histogram depends on the data **and** on the bins chosen. Wider bins merge values and can hide detail; narrower bins show more detail but can look jagged. Both graphs can be drawn correctly from the same data.

- (A) assumes a histogram's shape is fixed by the data alone. The bin width is a choice.
- (B) is too strong. Very narrow bins can leave many bars of height 0 or 1, which hides the overall pattern.
- (D) is wrong because every value falls in exactly one bin, so the frequencies add to 50 in both histograms.
</details>

## Question 4 (constructed response · core)

The ages, in years, of the 18 members of a fictional chess club are:

14, 23, 17, 35, 41, 28, 19, 22, 16, 33, 25, 61, 29, 18, 24, 37, 15, 21

(a) Construct a stem-and-leaf plot of the ages, with a key.
(b) What percentage of the members are under 30 years old?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Ordered: 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 28, 29, 33, 35, 37, 41, 61.

| Stem | Leaves |
|---|---|
| 1 | 4 5 6 7 8 9 |
| 2 | 1 2 3 4 5 8 9 |
| 3 | 3 5 7 |
| 4 | 1 |
| 5 | |
| 6 | 1 |

Key: 2 | 8 means 28 years.

Check: 6 + 7 + 3 + 1 + 0 + 1 = 18 leaves. The empty stem 5 must stay in, so the gap between 41 and 61 is visible.

**(b)** The members under 30 are the leaves on stems 1 and 2: 6 + 7 = 13 of 18. 13 ÷ 18 = 0.722, so **72.2%** of the members are under 30.

| Point | What earns it |
|---|---|
| 1 | Stems 1 to 6 in order, **including the empty stem 5** |
| 1 | All 18 leaves on the correct stems, one digit each, in increasing order on each stem |
| 1 | A key with units (for example 2 \| 8 = 28 years) |
| 1 | 13 of 18 shown, and 72.2% (accept 72%) |

Do not award the first point if stem 5 is missing. Leaves in the order of the original list (for example 4 7 9 6 8 5 on stem 1) do not earn the second point.
</details>

## Question 5 (constructed response · core)

A fictional website timed 20 file downloads, in seconds:

2.1, 3.4, 4.0, 4.8, 5.5, 6.0, 6.2, 6.9, 7.3, 7.8, 8.0, 8.0, 8.4, 9.1, 9.6, 10.0, 11.2, 12.5, 14.0, 15.7

(a) Using bins of width 2 seconds starting at 2, make a table of frequencies and relative frequencies.
(b) Draw a relative frequency histogram from your table.
(c) A classmate puts both values of 8.0 seconds in the 6 to under 8 bin. Explain the mistake and its effect on the histogram.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Values on a boundary (4.0, 6.0, 8.0, 8.0, 10.0 and 14.0) go in the bin that starts at that value.

| Download time (s) | Frequency | Relative frequency |
|---|---|---|
| 2 ≤ x < 4 | 2 | 0.10 |
| 4 ≤ x < 6 | 3 | 0.15 |
| 6 ≤ x < 8 | 5 | 0.25 |
| 8 ≤ x < 10 | 5 | 0.25 |
| 10 ≤ x < 12 | 2 | 0.10 |
| 12 ≤ x < 14 | 1 | 0.05 |
| 14 ≤ x < 16 | 2 | 0.10 |
| Total | 20 | 1.00 |

**(b)**

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="dl-title dl-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="dl-title">Relative frequency histogram of 20 download times</title>
<desc id="dl-desc">Horizontal axis: download time in seconds from 2 to 16 in bins of width 2. Vertical axis: relative frequency from 0 to 0.25. Bar heights: 2 to under 4 seconds, 0.10; 4 to under 6, 0.15; 6 to under 8, 0.25; 8 to under 10, 0.25; 10 to under 12, 0.10; 12 to under 14, 0.05; 14 to under 16, 0.10. Adjacent bars touch.</desc>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<rect x="80.0" y="154.0" width="72.9" height="76.0" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="152.9" y="116.0" width="72.9" height="114.0" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="225.7" y="40.0" width="72.9" height="190.0" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="298.6" y="40.0" width="72.9" height="190.0" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="371.4" y="154.0" width="72.9" height="76.0" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="444.3" y="192.0" width="72.9" height="38.0" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="517.1" y="154.0" width="72.9" height="76.0" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="80" y1="230" x2="590" y2="230" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="230" x2="80" y2="34" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44"><line x1="80.0" y1="230" x2="80.0" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="80.0" y="250" text-anchor="middle">2</text><line x1="152.9" y1="230" x2="152.9" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="152.9" y="250" text-anchor="middle">4</text><line x1="225.7" y1="230" x2="225.7" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="225.7" y="250" text-anchor="middle">6</text><line x1="298.6" y1="230" x2="298.6" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="298.6" y="250" text-anchor="middle">8</text><line x1="371.4" y1="230" x2="371.4" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="371.4" y="250" text-anchor="middle">10</text><line x1="444.3" y1="230" x2="444.3" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="444.3" y="250" text-anchor="middle">12</text><line x1="517.1" y1="230" x2="517.1" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="517.1" y="250" text-anchor="middle">14</text><line x1="590.0" y1="230" x2="590.0" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="590.0" y="250" text-anchor="middle">16</text><line x1="74" y1="230.0" x2="80" y2="230.0" stroke="#1d2b44" stroke-width="1.5"/><text x="70" y="234.0" text-anchor="end">0.00</text><line x1="74" y1="192.0" x2="80" y2="192.0" stroke="#1d2b44" stroke-width="1.5"/><text x="70" y="196.0" text-anchor="end">0.05</text><line x1="74" y1="154.0" x2="80" y2="154.0" stroke="#1d2b44" stroke-width="1.5"/><text x="70" y="158.0" text-anchor="end">0.10</text><line x1="74" y1="116.0" x2="80" y2="116.0" stroke="#1d2b44" stroke-width="1.5"/><text x="70" y="120.0" text-anchor="end">0.15</text><line x1="74" y1="78.0" x2="80" y2="78.0" stroke="#1d2b44" stroke-width="1.5"/><text x="70" y="82.0" text-anchor="end">0.20</text><line x1="74" y1="40.0" x2="80" y2="40.0" stroke="#1d2b44" stroke-width="1.5"/><text x="70" y="44.0" text-anchor="end">0.25</text></g>
<text x="335" y="280" text-anchor="middle" font-size="14" fill="#1d2b44">Download time (seconds)</text>
<text x="22" y="135" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 22 135)">Relative frequency</text>
</svg>
<figcaption>Model answer for Question 5(b). Bars touch, the horizontal axis is labelled with the variable and units, and the vertical axis shows relative frequency from 0.</figcaption>
</figure>

**(c)** With bins of the form a ≤ x < b, a value of 8.0 belongs in 8 ≤ x < 10, not 6 ≤ x < 8. The classmate's 6 to under 8 bar would have height 7 ÷ 20 = 0.35 instead of 0.25, and the 8 to under 10 bar would drop to 3 ÷ 20 = 0.15. The histogram would show a single tall bar at 6 to 8 seconds instead of two equal bars, which misrepresents the data. The total would still be 20, so adding up the frequencies would not catch this error.

| Point | What earns it |
|---|---|
| 1 | All seven frequencies correct, with boundary values in the right bins |
| 1 | Relative frequencies correct and adding to 1 |
| 1 | Histogram with touching bars at the correct heights and both axes labelled (with units on the horizontal axis) |
| 1 | Explains that 8.0 belongs in 8 ≤ x < 10 **and** describes the effect on the bars (0.35 and 0.15, or "one bar too tall, the next too short") |

A frequency histogram (counts on the vertical axis) has the right shape but does not earn the third point, because the question asks for relative frequency.
</details>

## Question 6 (constructed response · core)

A fictional football team scored these numbers of goals in 18 matches:

0, 1, 1, 2, 0, 3, 1, 2, 2, 1, 4, 0, 1, 2, 7, 1, 3, 2

(a) Construct a dotplot of the data.
(b) Another student draws a dotplot whose axis shows only 0, 1, 2, 3, 4 and 7, equally spaced. Explain why this graph is misleading.
(c) In what proportion of matches did the team score at least 3 goals?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Counts: 0 goals in 3 matches, 1 in 6, 2 in 5, 3 in 2, 4 in 1, 7 in 1 (total 18).

<figure>
<svg viewBox="0 0 640 190" role="img" aria-labelledby="goals-title goals-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="goals-title">Dotplot of goals scored in 18 matches</title>
<desc id="goals-desc">A horizontal axis from 0 to 8 goals with equal spacing for every whole number, including 5, 6 and 8 where there are no matches. Stacks of dots: 3 matches with 0 goals, 6 with 1, 5 with 2, 2 with 3, 1 with 4, none with 5 or 6, 1 with 7 and none with 8.</desc>
<rect x="0" y="0" width="640" height="190" fill="#ffffff"/>
<line x1="50" y1="130" x2="590" y2="130" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="50.0" y1="130" x2="50.0" y2="137"/><line x1="117.5" y1="130" x2="117.5" y2="137"/><line x1="185.0" y1="130" x2="185.0" y2="137"/><line x1="252.5" y1="130" x2="252.5" y2="137"/><line x1="320.0" y1="130" x2="320.0" y2="137"/><line x1="387.5" y1="130" x2="387.5" y2="137"/><line x1="455.0" y1="130" x2="455.0" y2="137"/><line x1="522.5" y1="130" x2="522.5" y2="137"/><line x1="590.0" y1="130" x2="590.0" y2="137"/></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="50.0" y="152">0</text><text x="117.5" y="152">1</text><text x="185.0" y="152">2</text><text x="252.5" y="152">3</text><text x="320.0" y="152">4</text><text x="387.5" y="152">5</text><text x="455.0" y="152">6</text><text x="522.5" y="152">7</text><text x="590.0" y="152">8</text></g>
<text x="320.0" y="178" text-anchor="middle" font-size="14" fill="#1d2b44">Goals scored in a match</text>
<g fill="#1d2b44"><circle cx="50.0" cy="118" r="6"/><circle cx="50.0" cy="104" r="6"/><circle cx="50.0" cy="90" r="6"/><circle cx="117.5" cy="118" r="6"/><circle cx="117.5" cy="104" r="6"/><circle cx="117.5" cy="90" r="6"/><circle cx="117.5" cy="76" r="6"/><circle cx="117.5" cy="62" r="6"/><circle cx="117.5" cy="48" r="6"/><circle cx="185.0" cy="118" r="6"/><circle cx="185.0" cy="104" r="6"/><circle cx="185.0" cy="90" r="6"/><circle cx="185.0" cy="76" r="6"/><circle cx="185.0" cy="62" r="6"/><circle cx="252.5" cy="118" r="6"/><circle cx="252.5" cy="104" r="6"/><circle cx="320.0" cy="118" r="6"/><circle cx="522.5" cy="118" r="6"/></g>
</svg>
<figcaption>Model answer for Question 6(a). Each dot is one match. The axis has equal steps from 0 to 8, so the gap between 4 and 7 goals is visible.</figcaption>
</figure>

**(b)** A dotplot's axis is a number line. If 7 is placed straight after 4, the distance from 4 to 7 looks the same as the distance from 3 to 4. The graph hides the gap at 5 and 6 goals and makes the 7-goal match look much less unusual than it was.

**(c)** At least 3 goals: 2 + 1 + 1 = 4 matches. 4 ÷ 18 = **0.222**.

| Point | What earns it |
|---|---|
| 1 | Evenly scaled, labelled axis including 5 and 6, with the correct number of stacked dots at each value (18 dots) |
| 1 | Explains that equal spacing for unequal steps hides the gap or misplaces 7 |
| 1 | 4 of 18 shown, and 0.222 (accept 0.22 or 2/9) |
</details>

## Question 7 (explanation · stretch)

A consumer group measured the battery life, in hours, of 40 phones of a fictional model. Two frequency tables of the same data are shown.

| Width 2 h | 10 ≤ x < 12 | 12 ≤ x < 14 | 14 ≤ x < 16 | 16 ≤ x < 18 | 18 ≤ x < 20 | 20 ≤ x < 22 | 22 ≤ x < 24 |
|---|---|---|---|---|---|---|---|
| Frequency | 2 | 5 | 12 | 3 | 9 | 7 | 2 |

| Width 6 h | 10 ≤ x < 16 | 16 ≤ x < 22 | 22 ≤ x < 28 |
|---|---|---|---|
| Frequency | 19 | 19 | 2 |

(a) Describe a feature that a histogram with width 2 h shows and a histogram with width 6 h hides.
(b) What proportion of the phones lasted at least 18 hours? Explain why the width-6 table cannot answer this.
(c) Can you find the exact battery life of the longest-lasting phone from either table? Explain.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** With width 2 h there are **two separate peaks**: 12 phones in 14 to under 16 h and 9 phones in 18 to under 20 h, with only 3 phones in between (16 to under 18 h). With width 6 h, the low bar at 16 to 18 h is merged with the 18 to 22 h phones, so the histogram shows two equal bars of 19 and the dip between the peaks disappears.

**(b)** From the width-2 table: 9 + 7 + 2 = 18 phones, and 18 ÷ 40 = **0.45**. The width-6 table cannot give this, because 18 h lies **inside** the bin 16 to under 22 h. We cannot tell how many of those 19 phones lasted at least 18 h.

**(c)** No. Both tables show only how many values fall in each bin. The longest battery life is somewhere from 22 h up to (but not including) 24 h; the exact value is lost when data are grouped.

| Point | What earns it |
|---|---|
| 1 | Identifies the two peaks (or the dip at 16 to 18 h) visible at width 2 and explains that wide bins merge them |
| 1 | 18 of 40 shown and 0.45 |
| 1 | Explains that 18 h is inside a width-6 bin, so the count above 18 h is unknown |
| 1 | States that grouped data do not give exact values, and gives the range 22 to under 24 h |
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "Stem-and-leaf plots" in the [study guide](/advanced-course-resources/statistics/1-5-graphical-representations-one-quantitative-variable-study-guide/). Use the key and keep empty stems.
- **Q2 or Q7(b) wrong:** practise converting relative frequency to counts (× n), and check whether a question lines up with bin edges.
- **Q3 or Q7(a) wrong:** revisit "How bin width changes a histogram".
- **Q5 wrong:** work through Worked example 2 again, especially the boundary rule.
- **Q6 wrong:** revisit "Dotplots": equal spacing, including values with no dots.

Then tick off the [topic checklist](/advanced-course-resources/statistics/1-5-graphical-representations-one-quantitative-variable-checklist/).
