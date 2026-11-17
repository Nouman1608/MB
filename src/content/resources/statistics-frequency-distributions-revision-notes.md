---
title: "Cambridge IGCSE Statistics: Frequency Distributions — Revision Notes"
seoTitle: "Cambridge IGCSE Statistics Frequency Distributions Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["igcse"]
topic: "Topic 3 – Frequency Distributions"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0479"]
syllabusSeries: "2027"
order: 3
syllabusTopics:
  - qualification: "igcse"
    topic: "frequency-distributions-0479"
description: "Recall notes on grouped data, class boundaries, frequency density, frequency polygons and cumulative frequency for Cambridge IGCSE Statistics 0479 Topic 3."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review. Fix pass: replaced doubtful claim that limits and boundaries coincide for continuous data, and unsupported most-common-error claim, with the 0479 syllabus wording; previously reviewed by sajawal-zahid on 2026-09-29; 2026-11-08: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-09-06
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Frequency Distributions study guide](/resources/igcse-cambridge-statistics-frequency-distributions/).

## Grouped vs ungrouped (outcome 1)

Ungrouped: every distinct value listed with its own frequency. Grouped: values combined into class
intervals (e.g. "30 -- under 40"). Grouping makes large data sets easier to summarise but costs
precision -- exact original values can only be estimated once grouped. Always tie an "advantage/
disadvantage of grouping" answer to the specific context given (large range, ease of comparison), not
a generic response.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-cambridge-statistics-frequency-distributions--15-grouped-and-ungrouped.webp" width="900" height="1085" alt="Same 40 illustrative values drawn as an ungrouped distribution (12 bars) and as three classes of four values: 0-3 with 20, 4-7 with 14, 8-11 with 6. Grouping is easier to read but exact values are lost." loading="lazy">
  <figcaption>Grouping summarises large data but loses precision.</figcaption>
</figure>

## Discrete vs continuous class terminology (outcome 2) -- the most error-prone sub-topic

| Data type | What's required |
|---|---|
| Discrete (e.g. number of siblings) | Class limits, boundaries, midpoints AND widths |
| Continuous (e.g. height, time) | Class boundaries, midpoints and widths only |

The 0479 syllabus asks for class limits as well as boundaries only for discrete data; for continuous data
it asks for class boundaries, midpoints and widths. Keep the two cases apart.
(This is separate from the equal-class-widths rule below, which applies to frequency polygons specifically
-- histograms must still handle unequal class widths via frequency density.)

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-cambridge-statistics-frequency-distributions--16-limits-boundaries-midpoints-widths.webp" width="900" height="1030" alt="Discrete class 10-19: limits 10 and 19, boundaries 9.5 and 19.5, midpoint 14.5, width 10. Continuous class 30 to under 40: boundaries 30 and 40, midpoint 35, width 10; limits and boundaries coincide." loading="lazy">
  <figcaption>Discrete classes need limits and boundaries; continuous classes need boundaries only.</figcaption>
</figure>

## Histograms (outcome 3)

Bar **area** — not height — represents frequency. This only visibly matters with **unequal class
widths**, where the vertical axis must read "frequency density" (= frequency ÷ class width) rather
than frequency. Forgetting this conversion is a frequent, avoidable error that distorts bar shape.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-cambridge-statistics-frequency-distributions--17-frequency-density-histogram.webp" width="900" height="925" alt="Histogram with frequency density on the vertical axis: class 10 to under 30 has density 0.4 (area 8) and class 30 to under 40 has density 1.2 (area 12), so the narrower class has the taller bar." loading="lazy">
  <figcaption>Bar area, not height, represents frequency when class widths differ.</figcaption>
</figure>

## Frequency polygons (outcome 4)

Used specifically with **equal class widths**. Plot frequency against each class's **midpoint** (not
boundary — that's the histogram/cumulative-curve rule), then join the points. The tool of choice when
comparing two distributions on the same axes, since two polygons overlay far more clearly than two
histograms.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-cambridge-statistics-frequency-distributions--18-frequency-polygons.webp" width="900" height="890" alt="Two frequency polygons on one set of axes, plotted at class midpoints 5 to 45 with equal widths of 10. Class A has frequencies 3, 8, 15, 9, 5 and class B has 6, 12, 12, 7, 3." loading="lazy">
  <figcaption>Polygons use midpoints and overlay clearly for comparison.</figcaption>
</figure>

## Cumulative frequency (outcomes 5–6)

Running total of frequencies up to and including each class boundary. Work backwards too: recover an
ordinary frequency distribution from a cumulative one by subtracting consecutive cumulative totals.
Plot against **upper class boundaries**. Continuous data → smooth cumulative frequency curve or
straight-line polygon. Reading this curve correctly (value from the horizontal axis vs. cumulative
frequency from the vertical axis) is a skill Topic 4 reuses directly to estimate the median of grouped
data.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-cambridge-statistics-frequency-distributions--19-cumulative-frequency.webp" width="900" height="1030" alt="Table of illustrative frequencies 4, 9, 14, 8, 5 with running totals 4, 13, 27, 35, 40, and a cumulative frequency polygon plotted at upper class boundaries. Reading at value 25 gives cumulative frequency 20." loading="lazy">
  <figcaption>A cumulative frequency graph turns running totals into a curve you can read.</figcaption>
</figure>

## Worked example: converting to frequency density

A grouped distribution has an unequal-width class "10 -- under 30" (width 20) with frequency 8.

```
Frequency density = frequency / class width = 8 / 20 = 0.4
```

Plot 0.4 on the vertical axis for this class's bar, not 8 -- plotting raw frequency here would make
this wider class look disproportionately tall relative to narrower classes in the same histogram.

## Worked example: reading a cumulative frequency curve

A cumulative frequency curve for 60 students' test scores shows the curve passing through the point
(50, 45) on a (score, cumulative frequency) axis pair.

```
Reading the point (50, 45): 45 students scored 50 or below.
To find how many scored ABOVE 50: 60 - 45 = 15 students.
```

A common exam trap is stopping at "45 students" when the question actually asks how many scored
*above* a given value -- always check exactly what the question asks for before reading a value
straight off the curve, since the curve gives a cumulative total up to a point, not automatically the
number above or below it without a subtraction step.

## Common mistakes

- Using discrete-data class-limit rules for continuous data, or vice versa.
- Forgetting to convert to frequency density for unequal-width histograms.
- Plotting frequency polygon points at class boundaries instead of midpoints.
- Reading a cumulative frequency curve off the wrong axis (value vs. cumulative frequency).
- Treating grouping as a free simplification with no cost — always acknowledge the lost precision.

## How the four representations connect

Raw data → ungrouped table → grouped table → cumulative table. Exam questions often require moving
between two or more of these in a single multi-part question, so practise the conversions themselves,
not just each representation in isolation.

## Self-test

1. What is the key difference in what's required for discrete versus continuous class data?
2. When must a histogram's vertical axis be labelled "frequency density," and how is it calculated?
3. What is plotted at each point of a frequency polygon, and why does this differ from a histogram?
4. How do you recover an ordinary frequency distribution from a cumulative one?
5. Which axis of a cumulative frequency curve do you read to find a value, and which to find a
   cumulative frequency?

**Answers:** 1. Discrete data requires class limits, boundaries, midpoints and widths; continuous data
requires only class boundaries, midpoints and widths. 2. Whenever class widths are unequal; frequency density = frequency ÷ class width. 3. Each
class's midpoint, plotted against its frequency; this differs from a histogram, which uses bars
positioned at class boundaries rather than single points at midpoints. 4. From each cumulative
total, subtract the cumulative total before it (the running total up to the previous class boundary);
the first class's frequency is its own cumulative total. 5. Read a
value from the horizontal axis; read a cumulative frequency from the vertical axis.

## Why this topic matters beyond itself

Topic 3 is not a self-contained block to revise once and set aside — Topic 4 (Measures of central
tendency) directly reuses the cumulative frequency curve to estimate the median of grouped data, and
the discrete-versus-continuous distinction from outcome 2 resurfaces every time a later topic
introduces a new grouped-data question. Treating the conversions between raw data, grouped tables and
cumulative tables as a reusable skill, rather than three separate topics to memorise once, pays off
directly when Topic 4's estimation techniques assume this fluency is already secure.

## Frequently asked questions

**How do you find how many values lie above a point on a cumulative frequency curve?**
Read the cumulative frequency at that value, then subtract it from the total. For example, if 45 of 60 students scored 50 or below, 60 − 45 = 15 scored above 50.

**Where do you plot points on a cumulative frequency graph?**
Plot each running total against the upper class boundary of its class. For continuous data, join the points with a smooth curve or straight-line polygon.

**Where do you plot points on a frequency polygon?**
Plot each class's frequency against its midpoint, not its boundary. Frequency polygons in IGCSE Statistics 0479 use equal class widths.

**What does grouping data cost?**
Grouping makes a large data set easier to summarise, but the exact original values are lost and can only be estimated. Treating grouping as a free simplification is a common mistake.

**Which topic of Cambridge IGCSE Statistics 0479 do these notes cover?**
They cover Topic 3, Frequency distributions, for examination in 2027, including class boundaries, histograms, frequency polygons and cumulative frequency.

## Official syllabus

Cambridge Assessment International Education, Cambridge IGCSE Statistics 0479 syllabus for examination
in 2027: https://www.cambridgeinternational.org/Images/718153-2027-syllabus.pdf (verified 2026-09-02)
-- the same source cited by the
[Frequency Distributions study guide](/resources/igcse-cambridge-statistics-frequency-distributions/).
