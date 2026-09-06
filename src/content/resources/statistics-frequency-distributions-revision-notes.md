---
title: "Cambridge IGCSE Statistics: Frequency Distributions — Revision Notes"
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
description: "Condensed recall notes on grouped and ungrouped frequency distributions, class boundaries and widths, histograms, frequency polygons and cumulative frequency, for Topic 3 of Cambridge IGCSE Statistics (0479), examination 2027."
author: "marlbridge-academic-team"
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

## Discrete vs continuous class terminology (outcome 2) -- the most error-prone sub-topic

| Data type | What's required |
|---|---|
| Discrete (e.g. number of siblings) | Class limits, boundaries, midpoints AND widths |
| Continuous (e.g. height, time) | Class boundaries, midpoints and widths ONLY — no class limits |

Continuous values have no gaps between classes, so class limits are meaningless for them. Using
discrete-style limits for continuous data (or vice versa) is the single most common error Cambridge
flags in this outcome.

## Histograms (outcome 3)

Bar **area** — not height — represents frequency. This only visibly matters with **unequal class
widths**, where the vertical axis must read "frequency density" (= frequency ÷ class width) rather
than frequency. Forgetting this conversion is a frequent, avoidable error that distorts bar shape.

## Frequency polygons (outcome 4)

Used specifically with **equal class widths**. Plot frequency against each class's **midpoint** (not
boundary — that's the histogram/cumulative-curve rule), then join the points. The tool of choice when
comparing two distributions on the same axes, since two polygons overlay far more clearly than two
histograms.

## Cumulative frequency (outcomes 5–6)

Running total of frequencies up to and including each class boundary. Work backwards too: recover an
ordinary frequency distribution from a cumulative one by subtracting consecutive cumulative totals.
Plot against **upper class boundaries**. Continuous data → smooth cumulative frequency curve or
straight-line polygon. Reading this curve correctly (value from the horizontal axis vs. cumulative
frequency from the vertical axis) is a skill Topic 4 reuses directly to estimate the median of grouped
data.

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
requires only class boundaries, midpoints and widths, since continuous values have no meaningful class
limits. 2. Whenever class widths are unequal; frequency density = frequency ÷ class width. 3. Each
class's midpoint, plotted against its frequency; this differs from a histogram, which uses bars
positioned at class boundaries rather than single points at midpoints. 4. Subtract each cumulative
total from the one before it (or from the running total up to the previous class boundary). 5. Read a
value from the horizontal axis; read a cumulative frequency from the vertical axis.

## Why this topic matters beyond itself

Topic 3 is not a self-contained block to revise once and set aside — Topic 4 (Measures of central
tendency) directly reuses the cumulative frequency curve to estimate the median of grouped data, and
the discrete-versus-continuous distinction from outcome 2 resurfaces every time a later topic
introduces a new grouped-data question. Treating the conversions between raw data, grouped tables and
cumulative tables as a reusable skill, rather than three separate topics to memorise once, pays off
directly when Topic 4's estimation techniques assume this fluency is already secure.

## Official syllabus

Cambridge Assessment International Education, Cambridge IGCSE Statistics 0479 syllabus for examination
in 2027: https://www.cambridgeinternational.org/Images/718153-2027-syllabus.pdf (verified 2026-09-02)
-- the same source cited by the
[Frequency Distributions study guide](/resources/igcse-cambridge-statistics-frequency-distributions/).
