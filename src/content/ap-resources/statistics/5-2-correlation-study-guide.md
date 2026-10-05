---
resourceId: "mb-ap-stats-5.2-study-guide"
title: "Correlation: Study Guide (Statistics 5.2)"
description: "Learn what the correlation coefficient r tells you about a linear association, how to interpret it in context, why a value near 1 or −1 does not prove a line fits, and why correlation is not causation."
course: "statistics"
unit: 5
topics: ["5.2"]
resourceType: "study-guide"
prerequisites:
  - "Describing form, direction, strength and unusual features of a scatterplot (Topic 5.1)"
  - "z-scores and standard deviation (Topics 1.7 and 1.9)"
  - "Observational studies and experiments (Topic 1.13)"
prerequisiteResources: ["mb-ap-stats-5.1-study-guide"]
learningObjectives:
  - "Explain what the correlation coefficient r measures and what its sign and size tell you"
  - "Interpret a value of r in context, naming both variables and the strength and direction of the linear association"
  - "Use the facts that r has no units and always lies between −1 and 1"
  - "Explain why a value of r close to −1 or 1 does not on its own show that a linear model is appropriate"
  - "Explain why a strong correlation does not show that one variable causes changes in the other"
skills: ["4"]
studyMinutes: 40
difficulty: "core"
calculator: "graphing"
calculatorNote: "Find r with technology (on many graphing calculators, turn diagnostics on and use linear regression). Round r to 2 decimal places unless told otherwise."
related: ["mb-ap-stats-5.2-revision-notes", "mb-ap-stats-5.2-practice", "mb-ap-stats-5.2-checklist"]
next: "mb-ap-stats-5.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "The correlation coefficient r measures the direction and strength of a linear association between two quantitative variables."
  - "r always lies between −1 and 1 and has no units. Its sign gives the direction; its closeness to −1 or 1 gives the strength."
  - "r = 0 means no linear association. r = 1 or r = −1 means all the points lie exactly on a straight line."
  - "Always look at the scatterplot: a curved pattern can still give r close to −1 or 1."
  - "Correlation does not imply causation. Only a well-designed experiment can show cause and effect."
faqs:
  - question: "Do I have to calculate r by hand?"
    answer: "No. In this course r is found with technology. You need to interpret it, know its properties and judge whether it is meaningful."
  - question: "Is there an official cut-off for 'strong' or 'moderate'?"
    answer: "No. This guide uses a rough working guide, but always judge strength from the scatterplot as well as from r."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## One number for a linear association

In Topic 5.1 you described a scatterplot in words: form, direction, strength and unusual features. Words like "strong" and "moderate" are useful but vague. When the form is **linear**, one number can summarise the direction and strength: the **correlation coefficient, r**.

- **Direction:** a positive r means a positive association; a negative r means a negative association.
- **Strength:** the closer r is to −1 or 1, the more closely the points follow a straight line.

In this course you find r with **technology**. Your job is to interpret it and to know when it can be trusted.

## Properties of r

| Property | What it means |
|---|---|
| −1 ≤ r ≤ 1 | r can never be bigger than 1 or smaller than −1. A value like 1.3 is always a mistake. |
| Sign | r > 0: positive association. r < 0: negative association. |
| Size | The closer r is to −1 or 1, the stronger the **linear** association. r = −0.85 is stronger than r = 0.60. |
| r = 1 or r = −1 | A perfect linear association: every point lies on one straight line. |
| r = 0 | No **linear** association. There may still be a strong curved pattern. |
| No units | r is a pure number. Changing units (cm to inches, kg to pounds) does not change r. |
| Order of variables | Swapping x and y gives the same r. |

**A rough working guide** (not an official rule): |r| above about 0.8 is often called strong, about 0.5 to 0.8 moderate, and below about 0.5 weak. Always check the scatterplot too.

<figure>
<svg viewBox="0 0 640 200" role="img" aria-labelledby="panel-title panel-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="panel-title">Four small scatterplots with their correlation coefficients</title>
<desc id="panel-desc">Panel A: ten points rising in a fairly tight straight band; r equals 0.94, strong positive. Panel B: ten points rising slightly with lots of scatter; r equals 0.50, moderate positive. Panel C: ten points falling with some scatter; r equals negative 0.78, moderate to strong negative. Panel D: ten points forming a symmetric U-shaped curve, falling then rising; r equals 0, yet the points follow a clear curved pattern.</desc>
<rect x="0" y="0" width="640" height="200" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="25" y1="150" x2="145" y2="150"/><line x1="25" y1="150" x2="25" y2="45"/>
<line x1="180" y1="150" x2="300" y2="150"/><line x1="180" y1="150" x2="180" y2="45"/>
<line x1="335" y1="150" x2="455" y2="150"/><line x1="335" y1="150" x2="335" y2="45"/>
<line x1="490" y1="150" x2="610" y2="150"/><line x1="490" y1="150" x2="490" y2="45"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="85" y="32">A</text><text x="240" y="32">B</text><text x="395" y="32">C</text><text x="550" y="32">D</text>
<text x="85" y="175">r = 0.94</text><text x="240" y="175">r = 0.50</text><text x="395" y="175">r = −0.78</text><text x="550" y="175">r = 0 (curved!)</text>
</g>
<g fill="#1d2b44">
<circle cx="40" cy="127.3" r="3.5"/><circle cx="50" cy="118.2" r="3.5"/><circle cx="60" cy="120.9" r="3.5"/><circle cx="70" cy="97.3" r="3.5"/><circle cx="80" cy="105.5" r="3.5"/><circle cx="90" cy="80.9" r="3.5"/><circle cx="100" cy="93.6" r="3.5"/><circle cx="110" cy="66.4" r="3.5"/><circle cx="120" cy="77.3" r="3.5"/><circle cx="130" cy="60" r="3.5"/>
<circle cx="195" cy="104.5" r="3.5"/><circle cx="205" cy="131.8" r="3.5"/><circle cx="215" cy="95.5" r="3.5"/><circle cx="225" cy="122.7" r="3.5"/><circle cx="235" cy="77.3" r="3.5"/><circle cx="245" cy="113.6" r="3.5"/><circle cx="255" cy="113.6" r="3.5"/><circle cx="265" cy="68.2" r="3.5"/><circle cx="275" cy="95.5" r="3.5"/><circle cx="285" cy="86.4" r="3.5"/>
<circle cx="350" cy="72.7" r="3.5"/><circle cx="360" cy="63.6" r="3.5"/><circle cx="370" cy="90.9" r="3.5"/><circle cx="380" cy="72.7" r="3.5"/><circle cx="390" cy="100" r="3.5"/><circle cx="400" cy="81.8" r="3.5"/><circle cx="410" cy="109.1" r="3.5"/><circle cx="420" cy="90.9" r="3.5"/><circle cx="430" cy="122.7" r="3.5"/><circle cx="440" cy="104.5" r="3.5"/>
<circle cx="505" cy="63.6" r="3.5"/><circle cx="515" cy="90" r="3.5"/><circle cx="525" cy="111.8" r="3.5"/><circle cx="535" cy="126.4" r="3.5"/><circle cx="545" cy="133.6" r="3.5"/><circle cx="555" cy="133.6" r="3.5"/><circle cx="565" cy="126.4" r="3.5"/><circle cx="575" cy="111.8" r="3.5"/><circle cx="585" cy="90" r="3.5"/><circle cx="595" cy="63.6" r="3.5"/>
</g>
</svg>
<figcaption>Figure 1. Four fictional data sets of ten points each, with r found by technology. The value of r is printed under each plot, so the figure does not rely on colour. Panel D shows a strong curved pattern with r = 0: r only measures straight-line association.</figcaption>
</figure>

## Background: where r comes from

You will not be asked to calculate r by hand, but the idea behind it helps you interpret it. Technology converts every x-value and y-value to a z-score (how many standard deviations it is from its mean). Then:

**r = (1 / (n − 1)) Σ zₓ z_y**

If a point is above average on both variables, or below average on both, the product zₓz_y is positive. If it is above on one and below on the other, the product is negative. When most points are "both high or both low", r is positive. Because z-scores have no units, r has no units either.

## Worked example 1: interpreting r in context

**Question.** A fictional orchard measured the trunk diameter (cm) and the apple yield (kg) of 10 trees of the same variety.

| Trunk diameter (cm) | 12 | 15 | 17 | 18 | 20 | 22 | 24 | 25 | 28 | 30 |
|---|---|---|---|---|---|---|---|---|---|---|
| Yield (kg) | 38 | 49 | 45 | 52 | 60 | 53 | 72 | 62 | 79 | 74 |

(a) The scatterplot shows a linear pattern with no unusual points. Use technology to find r and interpret it.
(b) The orchard's export manager converts diameters to inches and yields to pounds. What is r now?

**(a)** Enter diameter as x and yield as y. Technology gives **r = 0.9271… ≈ 0.93**.

**Interpretation.** r = 0.93 shows a **strong, positive, linear** association between trunk diameter and apple yield for these 10 trees: trees with wider trunks tend to produce more apples.

**(b)** r has no units, so changing units does not change it: **r = 0.93** still. (Technology confirms 0.9271 with diameters ÷ 2.54 and yields × 2.20462.) Swapping the axes would also give 0.93.

**Check.** A full interpretation names the **strength**, the **direction**, the word **linear**, and **both variables** in context.

## When r misleads (1): a curved pattern

**r close to −1 or 1 does not mean a straight line is the right model.** Always look at the scatterplot.

## Worked example 2: a cooling drink

**Question.** A student recorded the temperature of a cup of tea every 2 minutes in a fictional science lesson. Technology gives r = −0.98. A classmate says: "r is almost −1, so the relationship is linear." Is the classmate right?

| Time (min) | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Temperature (°C) | 90.0 | 79.9 | 71.4 | 64.1 | 57.9 | 52.6 | 48.0 | 44.2 | 40.9 | 38.1 | 35.7 |

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="tea-title tea-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tea-title">Scatterplot of tea temperature against time, showing a curve</title>
<desc id="tea-desc">The horizontal axis shows time from 0 to 20 minutes. The vertical axis shows temperature from 20 to 95 degrees Celsius. Eleven dots fall from 90 degrees at 0 minutes to 35.7 degrees at 20 minutes. They fall steeply at first and then more slowly, forming a curve that bends. A dashed straight line joins the first and last dots; all the middle dots lie below it.</desc>
<rect x="0" y="0" width="640" height="310" fill="#ffffff"/>
<line x1="70" y1="250" x2="600" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="250" x2="70" y2="25" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="70" y1="250" x2="70" y2="257"/><line x1="200" y1="250" x2="200" y2="257"/><line x1="330" y1="250" x2="330" y2="257"/><line x1="460" y1="250" x2="460" y2="257"/><line x1="590" y1="250" x2="590" y2="257"/>
<line x1="63" y1="250" x2="70" y2="250"/><line x1="63" y1="206" x2="70" y2="206"/><line x1="63" y1="162" x2="70" y2="162"/><line x1="63" y1="118" x2="70" y2="118"/><line x1="63" y1="74" x2="70" y2="74"/><line x1="63" y1="30" x2="70" y2="30"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="70" y="272">0</text><text x="200" y="272">5</text><text x="330" y="272">10</text><text x="460" y="272">15</text><text x="590" y="272">20</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="end">
<text x="58" y="255">20</text><text x="58" y="211">35</text><text x="58" y="167">50</text><text x="58" y="123">65</text><text x="58" y="79">80</text><text x="58" y="35">95</text>
</g>
<text x="330" y="298" text-anchor="middle" font-size="14" fill="#1d2b44">Time (minutes)</text>
<text x="18" y="140" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 18 140)">Temperature (°C)</text>
<line x1="70" y1="44.7" x2="590" y2="203.9" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<g fill="#1d2b44">
<circle cx="70" cy="44.7" r="5"/><circle cx="122" cy="74.3" r="5"/><circle cx="174" cy="99.2" r="5"/><circle cx="226" cy="120.6" r="5"/><circle cx="278" cy="138.8" r="5"/><circle cx="330" cy="154.4" r="5"/><circle cx="382" cy="167.9" r="5"/><circle cx="434" cy="179" r="5"/><circle cx="486" cy="188.7" r="5"/><circle cx="538" cy="196.9" r="5"/><circle cx="590" cy="203.9" r="5"/>
</g>
<text x="300" y="80" font-size="12" fill="#1d2b44">dashed: straight line from first to last reading</text>
</svg>
<figcaption>Figure 2. Temperature of a cup of tea against time (fictional data). r = −0.98, but the dots bend away from a straight line: every middle dot lies below the dashed reference line.</figcaption>
</figure>

1. **Look at the rate of change.** In the first 2 minutes the tea cools by 10.1 °C. Between 18 and 20 minutes it cools by only 2.4 °C. A linear pattern would have a roughly constant drop every 2 minutes.
2. **Look at the plot.** The dots curve; all the middle dots sit below the straight line joining the first and last readings.
3. **Conclusion.** The classmate is **wrong**. r = −0.98 tells us there is a strong negative association, and that a straight line follows it fairly well, but the form is clearly **non-linear**. A value of r near −1 or 1 never proves that the form is linear; you must check the scatterplot. (Later in Unit 5 you will use residual plots to check this more carefully.)

## When r misleads (2): unusual points

r is **not resistant**. One unusual point can change it a lot. Eight fictional lizards had lengths 10, 11, 12, …, 17 cm and masses 21, 24, 26, 30, 31, 35, 37 and 40 g, lying almost on a straight line: r = 0.997. A ninth record, length 11 cm and mass 62 g (probably a typing error for 26 g), drops r to **0.18**. A ninth point that fits the pattern, such as 25 cm and 62 g, leaves r at about 0.999. So report any unusual points alongside r, and check whether they are errors.

## When r misleads (3): correlation is not causation

A strong correlation shows that two variables are **associated**. It does **not** show that changes in one variable **cause** changes in the other. Often a **lurking variable** (a third variable not in the study) affects both. Only a well-designed **experiment**, with random assignment of treatments (Topic 1.13), can give good evidence of cause and effect.

## Worked example 3: cafés and bike thefts

**Question.** In a fictional region, a researcher counted the number of cafés and the number of reported bicycle thefts last year in 14 towns. The scatterplot is linear with r = 0.91. A local newspaper writes: "Cafés cause bike crime. Close cafés to make streets safer." Respond.

1. **Interpret r.** r = 0.91 shows a strong, positive, linear association: towns with more cafés tend to have more reported bike thefts.
2. **Look for a lurking variable.** Town **population** is a likely one. Bigger towns have more cafés **and** more people, more bikes and more thefts. Population could explain the association without cafés causing anything.
3. **Type of study.** This is an observational study. Nobody assigned cafés to towns at random, so it cannot show cause and effect.
4. **Conclusion.** The newspaper's claim is **not justified**. The correlation is real, but correlation does not imply causation. A fairer comparison would at least look at thefts **per 1,000 residents**; even then, only an experiment could establish a cause.

## Common misconceptions

- **"r = −0.85 is weaker than r = 0.60 because it is negative."** The sign is direction only. Strength depends on distance from 0: |−0.85| = 0.85 is stronger.
- **"r = 0 means the variables are unrelated."** r = 0 means no **linear** association. Figure 1, panel D, has a strong curved pattern with r = 0.
- **"r near 1 means a line is the right model."** A curve can give r = 0.98 (Worked example 2). Check the scatterplot.
- **"r has units."** It does not. "r = 0.93 kg per cm" is wrong.
- **"r can be bigger than 1 if the association is very strong."** Never: −1 ≤ r ≤ 1.
- **"High correlation proves cause."** Correlation does not imply causation; look for lurking variables.
- **"r tells me the slope."** r measures how closely points follow a line, not how steep the line is. A perfect line with a gentle slope still has r = 1.
- **"One odd point won't matter."** r is not resistant; one point can change it greatly.
- **Interpreting r without context.** Say "strong, positive, linear association between trunk diameter and yield", not just "strong".

## Where this leads

Once you know a linear association is strong, you can fit a line and use it to predict. That is [Topic 5.3: Linear Regression Models](/advanced-course-resources/statistics/5-3-linear-regression-models-study-guide/). Later, in least-squares regression, you will also meet r², which builds on r. Try the [practice questions](/advanced-course-resources/statistics/5-2-correlation-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/5-2-correlation-revision-notes/) and the [checklist](/advanced-course-resources/statistics/5-2-correlation-checklist/) to consolidate.
