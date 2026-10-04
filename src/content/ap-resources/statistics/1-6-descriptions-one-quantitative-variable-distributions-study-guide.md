---
resourceId: "mb-ap-stats-1.6-study-guide"
title: "Descriptions for One Quantitative Variable Distributions: Study Guide (Statistics 1.6)"
description: "Learn to describe a quantitative distribution by its shape, centre, variability and unusual features (outliers, gaps, clusters) in context, and to use a graph to support or reject a claim."
course: "statistics"
unit: 1
topics: ["1.6"]
resourceType: "study-guide"
prerequisites:
  - "Reading dot plots, stem-and-leaf plots and histograms (Topic 1.5)"
  - "Counting values and turning a count into a proportion or percentage"
prerequisiteResources: ["mb-ap-stats-1.5-study-guide"]
learningObjectives:
  - "Describe the shape of a distribution as skewed right, skewed left or approximately symmetric, and as unimodal, bimodal or approximately uniform"
  - "Identify outliers, gaps and clusters on a dot plot, stem-and-leaf plot or histogram"
  - "Estimate the centre and variability of a distribution from its graph"
  - "Write a complete description of a distribution in context, naming the variable, the individuals and the units"
  - "Use a graph of one quantitative variable to support or reject a claim, quoting evidence from the graph"
skills: ["4"]
studyMinutes: 35
difficulty: "foundation"
calculator: "four-function"
calculatorNote: "Only counts and simple percentages are needed. A graphing calculator is allowed but not required. Round percentages to 1 decimal place."
related: ["mb-ap-stats-1.6-revision-notes", "mb-ap-stats-1.6-practice", "mb-ap-stats-1.6-checklist"]
next: "mb-ap-stats-1.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "A full description covers shape, centre, variability and any unusual features, always in context."
  - "Skew is named after the longer tail, not the peak: a long tail towards larger values means skewed right."
  - "Count the clear peaks: one is unimodal, two is bimodal; bars of about equal height with no clear peak is approximately uniform."
  - "Unusual features are outliers (values far from the rest), gaps (empty stretches) and clusters (groups of values separated by gaps)."
  - "To use a graph as evidence for a claim, quote specific counts or values from it and link them to the claim."
faqs:
  - question: "How do I decide if a distribution is skewed or approximately symmetric?"
    answer: "Find the main peak and compare the two sides. If one tail stretches much further than the other, the distribution is skewed towards the longer tail. If the two halves are roughly mirror images, call it approximately symmetric. Real data are never perfectly symmetric, so use the word 'approximately'."
  - question: "Do I need a formula to call a value an outlier in this topic?"
    answer: "Not yet. In this topic you judge by eye whether a value is unusually far from the rest and call it a possible outlier. Topic 1.7 adds two numerical rules (the 1.5 × IQR rule and the 2-standard-deviation rule)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What "describe the distribution" means

In [Topic 1.5](/advanced-course-resources/statistics/1-5-graphical-representations-one-quantitative-variable-study-guide/) you drew dot plots, stem-and-leaf plots and histograms. Now you learn to put what the graph shows into words. The **distribution** of a variable tells you which values the variable takes and how often it takes them.

A complete description of one quantitative distribution has four parts:

1. **Shape:** skewed or symmetric, and how many peaks.
2. **Centre:** a typical value.
3. **Variability (spread):** how far the values stretch, and where most of them lie.
4. **Unusual features:** outliers, gaps and clusters, or a statement that there are none.

All four parts must be **in context**. Name the variable, the individuals and the units. "The distribution is skewed right" earns little. "The distribution of the number of books read by these 20 students is skewed right" is a full statement.

Some students remember the four parts as **SOCS**: Shape, Outliers (and other unusual features), Centre, Spread. Use the memory aid if it helps, but the order does not matter. Leaving a part out does.

## Shape, part 1: symmetric or skewed?

Find the main peak of the graph. Then compare the two sides.

- **Approximately symmetric:** the left half is roughly a mirror image of the right half.
- **Skewed right (positively skewed):** the right tail, towards the **larger** values, is longer than the left tail.
- **Skewed left (negatively skewed):** the left tail, towards the **smaller** values, is longer than the right tail.

The key word is **tail**. Skew is named after the side with the long, thin stretch of values, not after the side with the peak. A right-skewed distribution has its peak on the left and its tail on the right.

Real data are never perfectly symmetric, so say "approximately symmetric". Small bumps do not change the overall shape; describe the overall pattern.

Context often suggests a shape before you see the graph. A variable with a lower limit that most values sit close to, such as waiting times or the number of times something happens, is often skewed right. Scores on a very easy test, where many students score close to the maximum, are often skewed left. Always check the actual graph, though.

## Shape, part 2: how many peaks?

A **peak** (or mode) is a clear high point in the graph.

- **Unimodal:** one main peak.
- **Bimodal:** two clear peaks. This often means the data come from two different groups mixed together.
- **Approximately uniform:** every bar or value has about the same frequency, with no clear peak.

A complete shape description can use one word from each list, for example "unimodal and skewed right" or "approximately symmetric and unimodal". For a bimodal or uniform distribution, the number of peaks is usually the more useful description.

<figure>
<svg viewBox="0 0 660 360" role="img" aria-labelledby="shapes-title shapes-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="shapes-title">Six histogram shapes</title>
<desc id="shapes-desc">Six small histograms with eight touching bars each, in two rows of three. Top row: skewed right, with the tallest bars on the left and bars that shrink slowly towards the right; approximately symmetric, with the tallest bars in the middle and matching heights on each side; skewed left, with the tallest bars on the right and bars that shrink slowly towards the left. Bottom row: bimodal, with two separate tall peaks; approximately uniform, with all bars about the same height; and a histogram with most bars on the left, two empty bins, then one short bar far to the right, labelled gap and possible outlier.</desc>
<rect x="0" y="0" width="660" height="360" fill="#ffffff"/>
<g aria-hidden="true">
<rect x="30" y="100" width="22" height="30" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="52" y="40" width="22" height="90" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="74" y="30" width="22" height="100" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="96" y="60" width="22" height="70" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="118" y="80" width="22" height="50" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="140" y="100" width="22" height="30" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="162" y="110" width="22" height="20" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="184" y="120" width="22" height="10" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="26" y1="130" x2="210" y2="130" stroke="#1d2b44" stroke-width="2"/>
</g>
<text x="118" y="150" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Skewed right</text>
<text x="118" y="167" text-anchor="middle" font-size="12" fill="#1d2b44">longer tail to the right</text>
<g aria-hidden="true">
<rect x="240" y="120" width="22" height="10" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="262" y="100" width="22" height="30" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="284" y="70" width="22" height="60" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="306" y="30" width="22" height="100" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="328" y="30" width="22" height="100" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="350" y="70" width="22" height="60" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="372" y="100" width="22" height="30" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="394" y="120" width="22" height="10" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="236" y1="130" x2="420" y2="130" stroke="#1d2b44" stroke-width="2"/>
</g>
<text x="328" y="150" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Approximately symmetric</text>
<text x="328" y="167" text-anchor="middle" font-size="12" fill="#1d2b44">halves mirror each other</text>
<g aria-hidden="true">
<rect x="450" y="120" width="22" height="10" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="472" y="110" width="22" height="20" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="494" y="100" width="22" height="30" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="516" y="80" width="22" height="50" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="538" y="60" width="22" height="70" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="560" y="30" width="22" height="100" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="582" y="40" width="22" height="90" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="604" y="100" width="22" height="30" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="446" y1="130" x2="630" y2="130" stroke="#1d2b44" stroke-width="2"/>
</g>
<text x="538" y="150" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Skewed left</text>
<text x="538" y="167" text-anchor="middle" font-size="12" fill="#1d2b44">longer tail to the left</text>
<g aria-hidden="true">
<rect x="30" y="285" width="22" height="20" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="52" y="235" width="22" height="70" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="74" y="215" width="22" height="90" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="96" y="265" width="22" height="40" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="118" y="275" width="22" height="30" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="140" y="225" width="22" height="80" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="162" y="215" width="22" height="90" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="184" y="275" width="22" height="30" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="26" y1="305" x2="210" y2="305" stroke="#1d2b44" stroke-width="2"/>
</g>
<text x="118" y="325" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Bimodal</text>
<text x="118" y="342" text-anchor="middle" font-size="12" fill="#1d2b44">two clear peaks</text>
<g aria-hidden="true">
<rect x="240" y="245" width="22" height="60" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="262" y="235" width="22" height="70" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="284" y="245" width="22" height="60" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="306" y="245" width="22" height="60" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="328" y="235" width="22" height="70" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="350" y="245" width="22" height="60" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="372" y="235" width="22" height="70" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="394" y="245" width="22" height="60" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="236" y1="305" x2="420" y2="305" stroke="#1d2b44" stroke-width="2"/>
</g>
<text x="328" y="325" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Approximately uniform</text>
<text x="328" y="342" text-anchor="middle" font-size="12" fill="#1d2b44">bars about equal, no clear peak</text>
<g aria-hidden="true">
<rect x="450" y="255" width="22" height="50" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="472" y="215" width="22" height="90" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="494" y="245" width="22" height="60" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="516" y="275" width="22" height="30" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="538" y="295" width="22" height="10" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="604" y="295" width="22" height="10" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="446" y1="305" x2="630" y2="305" stroke="#1d2b44" stroke-width="2"/>
</g>
<text x="538" y="325" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Gap and possible outlier</text>
<text x="538" y="342" text-anchor="middle" font-size="12" fill="#1d2b44">empty bins, then one far value</text>
</svg>
<figcaption>Figure 1. Common shapes of a quantitative distribution. Skew is named after the side with the longer tail. Each panel is labelled in words, so you do not need to tell bars apart by colour.</figcaption>
</figure>

## Unusual features: outliers, gaps and clusters

Look for anything that does not follow the overall pattern.

- An **outlier** is a value that is unusually small or unusually large compared with the rest of the data. In this topic you judge this by eye and call it a **possible outlier**. Topic 1.7 gives two numerical rules for checking.
- A **gap** is a stretch of the scale between two values where no data were observed. On a histogram, a gap is one or more empty bins between bars.
- A **cluster** is a group of values that sit close together, usually separated from other groups by a gap.

A gap and an outlier often appear together: an outlier is usually separated from the rest by a gap. But a gap by itself does not make a value an outlier. Two large clusters separated by a gap are two clusters, not one cluster and a set of outliers.

If you see no unusual features, say so: "There are no obvious outliers or gaps." This shows you looked.

## Centre and variability from a graph

In this topic you **estimate** centre and variability from the graph. Topic 1.7 gives the exact calculations.

**Centre.** Use the **median**, the middle value when the data are in order. On a dot plot or stem-and-leaf plot you can count to the middle value. On a histogram you cannot see individual values, so find the **bin that contains the middle value** by adding up the frequencies.

**Variability.** Give the smallest and largest values (or the range, largest minus smallest). Then say where **most** of the values lie, for example "most students read between 1 and 5 books". On a histogram, use the bin edges, because you do not know the exact smallest and largest values.

Always give units, and always link the number to the context.

## Worked example 1: describing a dot plot

**Question.** A teacher at the fictional Ashcombe School asked 20 students how many books they read over the summer holiday. The results are shown in Figure 2. The values are 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 7, 8, 8 and 15 books. Describe the distribution.

<figure>
<svg viewBox="0 0 660 250" role="img" aria-labelledby="books-title books-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="books-title">Dot plot of books read over the summer by 20 students</title>
<desc id="books-desc">A horizontal axis from 0 to 16 books, with one dot per student. The dots are stacked: one at 0, two at 1, three at 2, four at 3, three at 4, two at 5, one at 6, one at 7 and two at 8. There are no dots from 9 to 14; a dashed bracket labels this gap. One dot sits alone at 15 and is labelled possible outlier. The tallest stack, at 3, is labelled peak, and a note says the longer tail is to the right.</desc>
<rect x="0" y="0" width="660" height="250" fill="#ffffff"/>
<line x1="40" y1="190" x2="620" y2="190" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="50" y1="190" x2="50" y2="197"/><line x1="85" y1="190" x2="85" y2="197"/><line x1="120" y1="190" x2="120" y2="197"/><line x1="155" y1="190" x2="155" y2="197"/><line x1="190" y1="190" x2="190" y2="197"/><line x1="225" y1="190" x2="225" y2="197"/><line x1="260" y1="190" x2="260" y2="197"/><line x1="295" y1="190" x2="295" y2="197"/><line x1="330" y1="190" x2="330" y2="197"/><line x1="365" y1="190" x2="365" y2="197"/><line x1="400" y1="190" x2="400" y2="197"/><line x1="435" y1="190" x2="435" y2="197"/><line x1="470" y1="190" x2="470" y2="197"/><line x1="505" y1="190" x2="505" y2="197"/><line x1="540" y1="190" x2="540" y2="197"/><line x1="575" y1="190" x2="575" y2="197"/><line x1="610" y1="190" x2="610" y2="197"/></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="50" y="214">0</text><text x="85" y="214">1</text><text x="120" y="214">2</text><text x="155" y="214">3</text><text x="190" y="214">4</text><text x="225" y="214">5</text><text x="260" y="214">6</text><text x="295" y="214">7</text><text x="330" y="214">8</text><text x="365" y="214">9</text><text x="400" y="214">10</text><text x="435" y="214">11</text><text x="470" y="214">12</text><text x="505" y="214">13</text><text x="540" y="214">14</text><text x="575" y="214">15</text><text x="610" y="214">16</text></g>
<text x="330" y="240" text-anchor="middle" font-size="14" fill="#1d2b44">Number of books read over the summer</text>
<g fill="#1d2b44"><circle cx="50" cy="178" r="7"/><circle cx="85" cy="178" r="7"/><circle cx="85" cy="161" r="7"/><circle cx="120" cy="178" r="7"/><circle cx="120" cy="161" r="7"/><circle cx="120" cy="144" r="7"/><circle cx="155" cy="178" r="7"/><circle cx="155" cy="161" r="7"/><circle cx="155" cy="144" r="7"/><circle cx="155" cy="127" r="7"/><circle cx="190" cy="178" r="7"/><circle cx="190" cy="161" r="7"/><circle cx="190" cy="144" r="7"/><circle cx="225" cy="178" r="7"/><circle cx="225" cy="161" r="7"/><circle cx="260" cy="178" r="7"/><circle cx="295" cy="178" r="7"/><circle cx="330" cy="178" r="7"/><circle cx="330" cy="161" r="7"/><circle cx="575" cy="178" r="7"/></g>
<text x="155" y="109" text-anchor="middle" font-size="12" fill="#1d2b44">peak at 3</text>
<path d="M347.5 160 V150 H557.5 V160" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 3"/>
<text x="452.5" y="143" text-anchor="middle" font-size="12" fill="#1d2b44">gap: no values from 9 to 14</text>
<text x="575" y="120" text-anchor="middle" font-size="12" fill="#1d2b44">15: possible</text>
<text x="575" y="135" text-anchor="middle" font-size="12" fill="#1d2b44">outlier</text>
<text x="470" y="90" text-anchor="middle" font-size="12" fill="#1d2b44">longer tail to the right →</text>
</svg>
<figcaption>Figure 2. Number of books read over the summer by 20 students at the fictional Ashcombe School. Each dot is one student.</figcaption>
</figure>

1. **Shape.** There is one peak, at 3 books. The values stretch further above the peak (up to 15) than below it (down to 0). So the distribution is **unimodal and skewed right**.
2. **Centre.** With 20 values, the median is the mean of the 10th and 11th values in order. Counting dots from the left, the 10th value is 3 and the 11th is 4. The median is (3 + 4) ÷ 2 = **3.5 books**.
3. **Variability.** The values run from 0 to 15 books, a range of 15 books. But 19 of the 20 students read between 0 and 8 books.
4. **Unusual features.** There is a **gap** from 9 to 14 books, and one student who read **15 books** is a possible outlier. That value is 7 books above the next largest value.

**Full description in context.** The distribution of the number of books read over the summer by these 20 Ashcombe students is unimodal and skewed right. The median is about 3.5 books. The number of books ranges from 0 to 15, but 19 students read 8 or fewer. One student read 15 books, which is a possible outlier, separated from the rest by a gap from 9 to 14 books.

**Check.** Each sentence names the variable (books read), the individuals (these 20 students) and gives numbers with units. The skew is named after the long right tail, not after the peak on the left.

## Worked example 2: using a histogram to judge a claim

**Question.** The owner of a fictional café recorded how long each of 80 customers stayed, in minutes. Figure 3 shows the results. Each bin includes its left edge, so a stay of exactly 5 minutes is in the 5–10 bin.

(a) Describe the distribution.
(b) The owner claims that "most customers stay less than 15 minutes". Does the histogram support this claim?
(c) A manager says that "a typical customer stays about 20 minutes". Explain why this is a poor summary.

<figure>
<svg viewBox="0 0 660 280" role="img" aria-labelledby="cafe-title cafe-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cafe-title">Histogram of time spent in a café by 80 customers</title>
<desc id="cafe-desc">A histogram with time spent in the café in minutes on the horizontal axis, in bins of width 5 from 0 to 50, and number of customers on the vertical axis from 0 to 20. The frequencies are: 0 to 5 minutes, 14; 5 to 10, 18; 10 to 15, 6; 15 to 20, 2; 20 to 25, 0; 25 to 30, 5; 30 to 35, 11; 35 to 40, 13; 40 to 45, 7; 45 to 50, 4. The bars from 0 to 20 minutes are labelled cluster 1, short visits. The bars from 25 to 50 minutes are labelled cluster 2, long visits. The empty bin from 20 to 25 minutes is labelled gap.</desc>
<rect x="0" y="0" width="660" height="280" fill="#ffffff"/>
<rect x="70" y="108" width="55" height="112" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="97.5" y="102" text-anchor="middle" font-size="12" fill="#1d2b44">14</text>
<rect x="125" y="76" width="55" height="144" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="152.5" y="70" text-anchor="middle" font-size="12" fill="#1d2b44">18</text>
<rect x="180" y="172" width="55" height="48" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="207.5" y="166" text-anchor="middle" font-size="12" fill="#1d2b44">6</text>
<rect x="235" y="204" width="55" height="16" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="262.5" y="198" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<text x="317.5" y="214" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<rect x="345" y="180" width="55" height="40" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="372.5" y="174" text-anchor="middle" font-size="12" fill="#1d2b44">5</text>
<rect x="400" y="132" width="55" height="88" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="427.5" y="126" text-anchor="middle" font-size="12" fill="#1d2b44">11</text>
<rect x="455" y="116" width="55" height="104" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="482.5" y="110" text-anchor="middle" font-size="12" fill="#1d2b44">13</text>
<rect x="510" y="164" width="55" height="56" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="537.5" y="158" text-anchor="middle" font-size="12" fill="#1d2b44">7</text>
<rect x="565" y="188" width="55" height="32" fill="#dfe6f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="592.5" y="182" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<line x1="70" y1="220" x2="630" y2="220" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="220" x2="70" y2="50" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="70" y1="220" x2="70" y2="227"/><line x1="125" y1="220" x2="125" y2="227"/><line x1="180" y1="220" x2="180" y2="227"/><line x1="235" y1="220" x2="235" y2="227"/><line x1="290" y1="220" x2="290" y2="227"/><line x1="345" y1="220" x2="345" y2="227"/><line x1="400" y1="220" x2="400" y2="227"/><line x1="455" y1="220" x2="455" y2="227"/><line x1="510" y1="220" x2="510" y2="227"/><line x1="565" y1="220" x2="565" y2="227"/><line x1="620" y1="220" x2="620" y2="227"/><line x1="63" y1="220" x2="70" y2="220"/><line x1="63" y1="180" x2="70" y2="180"/><line x1="63" y1="140" x2="70" y2="140"/><line x1="63" y1="100" x2="70" y2="100"/><line x1="63" y1="60" x2="70" y2="60"/></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="70" y="243">0</text><text x="125" y="243">5</text><text x="180" y="243">10</text><text x="235" y="243">15</text><text x="290" y="243">20</text><text x="345" y="243">25</text><text x="400" y="243">30</text><text x="455" y="243">35</text><text x="510" y="243">40</text><text x="565" y="243">45</text><text x="620" y="243">50</text></g>
<g font-size="13" fill="#1d2b44" text-anchor="end"><text x="58" y="224">0</text><text x="58" y="184">5</text><text x="58" y="144">10</text><text x="58" y="104">15</text><text x="58" y="64">20</text></g>
<text x="345" y="268" text-anchor="middle" font-size="14" fill="#1d2b44">Time spent in the café (minutes)</text>
<text x="22" y="140" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 22 140)">Number of customers</text>
<text x="180" y="30" text-anchor="middle" font-size="12" fill="#1d2b44">cluster 1: short visits</text>
<text x="482.5" y="30" text-anchor="middle" font-size="12" fill="#1d2b44">cluster 2: long visits</text>
<text x="317.5" y="180" text-anchor="middle" font-size="12" fill="#1d2b44">gap</text>
<text x="317.5" y="195" text-anchor="middle" font-size="12" fill="#1d2b44">20–25</text>
</svg>
<figcaption>Figure 3. Time spent in a fictional café by 80 customers on one day. The number above each bar is its frequency.</figcaption>
</figure>

**(a)** Work through the four parts.

1. **Shape.** There are two clear peaks, in the 5–10 minute bin (18 customers) and the 35–40 minute bin (13 customers). The distribution is **bimodal**.
2. **Unusual features.** There are **two clusters**: 40 customers stayed less than 20 minutes and 40 stayed 25 minutes or more. They are separated by a **gap**: no customer stayed between 20 and 25 minutes. No single value stands far apart from the rest, so there is no obvious outlier.
3. **Centre.** The median is the mean of the 40th and 41st values in order. Adding frequencies: 14 + 18 + 6 + 2 = 40, so the 40th value is in the 15–20 bin and the 41st is in the 25–30 bin. The 40th value is at least 15 and less than 20; the 41st is at least 25 and less than 30. So their mean, the median, is at least (15 + 25) ÷ 2 = 20 and less than (20 + 30) ÷ 2 = 25 minutes. The median lies **between 20 and 25 minutes**, exactly where the gap is.
4. **Variability.** Stays range from somewhere in the 0–5 bin up to somewhere in the 45–50 bin, so up to about 50 minutes. Within each cluster the times are fairly close: most short visits are under 15 minutes and most long visits are between 30 and 45 minutes.

**In context:** the distribution of time spent in the café by these 80 customers is bimodal, with a cluster of short visits (under 20 minutes, peak at 5–10 minutes) and a cluster of long visits (25 to 50 minutes, peak at 35–40 minutes), separated by a gap from 20 to 25 minutes.

**(b)** "Most" means more than half, so more than 40 of the 80 customers. Customers who stayed less than 15 minutes: 14 + 18 + 6 = 38. That is 38 ÷ 80 = 47.5%, which is less than half. The histogram **does not support** the claim. Fewer than half (47.5%) of these customers stayed less than 15 minutes.

**(c)** Only 2 of the 80 customers (2.5%) stayed between 15 and 25 minutes, and none stayed between 20 and 25 minutes. The data form two separate groups, and a single "typical" value near 20 minutes falls between them. Even the median, which lies between 20 and 25 minutes, describes almost no real customer. A better summary describes the two groups separately.

**Check.** The claim in (b) was judged with a count taken from the graph (38 of 80), compared with the threshold the claim needs (more than 40). That is what "justify a claim" means: quote the evidence, then link it to the claim.

## Common misconceptions

- **"The peak is on the left, so it is skewed left."** Skew is named after the longer **tail**. A peak on the left with a long tail to the right is skewed **right**.
- **"A bimodal distribution has two outliers."** The two peaks are two clusters of many values each, not unusual single values.
- **"There is a gap, so the values beyond it are outliers."** A gap is evidence to look at, not a rule. A large group beyond a gap is a cluster.
- **"I can read the exact median from a histogram."** A histogram shows only bin counts. You can find the bin that holds the median, not its exact value.
- **"Approximately uniform means all values are the same."** It means each value or bin occurs about **equally often**. The values themselves vary across the whole scale.
- **"The shape description is enough."** A full description also gives centre, variability and unusual features (or says there are none).
- **"Statistics words without context."** "Skewed right with median 3.5" is incomplete. Name the variable, the individuals and the units.
- **"A claim is supported because the graph looks like it."** Quote counts, percentages or values from the graph, and compare them with what the claim says.

## Where this leads

Next, [Topic 1.7: Summary Statistics for One Quantitative Variable](/advanced-course-resources/statistics/1-7-summary-statistics-one-quantitative-variable-study-guide/) shows how to calculate the mean, median, quartiles and standard deviation exactly, and gives numerical rules for outliers. You will also see how the shape you describe here affects which summary statistics to use. Later topics use these descriptions to compare distributions. Try the [practice questions](/advanced-course-resources/statistics/1-6-descriptions-one-quantitative-variable-distributions-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/1-6-descriptions-one-quantitative-variable-distributions-revision-notes/) and the [checklist](/advanced-course-resources/statistics/1-6-descriptions-one-quantitative-variable-distributions-checklist/) to consolidate.
