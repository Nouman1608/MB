---
title: "Cambridge O Level Mathematics (4024): Scatter Diagrams"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Statistics"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 9.5
syllabusTopics:
  - qualification: "o-level"
    topic: "statistics"
    subtopic: "scatter-diagrams-4024"
description: "Study guide to 4024 section 9.5: plotting scatter diagrams, describing correlation, drawing and using a line of best fit, outliers and extrapolation."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 9.5, Scatter diagrams, in the Statistics topic of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. Every candidate studies it. The broader page [Scatter Diagrams, Correlation and Cumulative Frequency Diagrams](/resources/cambridge-o-level-mathematics-scatter-diagrams-correlation-and-cumulative-frequency/) works through one full example; this guide adds outliers, reading the line in both directions, judging when a line of best fit should not be used, and the wording examiners expect. Afterwards, use the [scatter diagrams revision notes](/resources/cambridge-o-level-mathematics-4024-scatter-diagrams-revision-notes/) and the [scatter diagrams practice questions](/resources/cambridge-o-level-mathematics-4024-scatter-diagrams-practice/).

## What section 9.5 asks for

| Outcome | What you must be able to do |
|---|---|
| 9.5 (1) | Draw and interpret scatter diagrams; plotted points should be clearly marked, for example as small crosses |
| 9.5 (2) | Understand what is meant by positive, negative and zero correlation |
| 9.5 (3) | Draw by eye, interpret and use a straight line of best fit |

The syllabus notes describe the line of best fit: a **single ruled line drawn by inspection**, which **extends across the full data set**, and which need not pass through any of the points but has a **roughly even distribution of points either side** along its whole length.

## Drawing a scatter diagram

A scatter diagram shows two measurements for each item. Each item gives one point.

1. Put one variable on each axis. If one variable might help explain the other (hours of revision and test score), it usually goes on the horizontal axis.
2. Choose scales that spread the points across most of the grid. An axis does not have to start at zero, but if it does not, make that clear.
3. Label each axis with the variable and its units.
4. Plot each pair with a small, neat cross.
5. Do **not** join the points.

A plotted point that is clearly misplaced is the most common lost mark in this section. Read each pair twice: across, then up.

## Correlation

| Correlation | Pattern of points | Meaning |
|---|---|---|
| Positive | a band rising from left to right | as one variable increases, the other tends to increase |
| Negative | a band falling from left to right | as one variable increases, the other tends to decrease |
| Zero | no clear pattern | no linear relationship between the variables |

You can also describe the strength: **strong** if the points lie close to a straight line, **weak** if they are widely scattered around one.

**Interpreting** means writing the correlation in the words of the context: "positive correlation: students who revised for longer tended to score higher". The word "tended" matters; not every student fits the pattern.

**Correlation is not cause.** A scatter diagram can show that two variables are related, but it cannot show that one causes the other. Both might depend on a third factor.

## Outliers

An **outlier** is a point that does not fit the pattern of the others. It may be a recording error, or a genuine but unusual item. When you draw a line of best fit, ignore a clear outlier, because it would pull the line away from the rest of the data. If asked, identify it by its coordinates and suggest a reason.

## Drawing the line of best fit

- Use a transparent ruler and look through it at the points.
- Draw one straight line, by eye, across the whole data set (from the leftmost points to the rightmost).
- Balance the points: roughly the same number above and below, spread along the length of the line, not all above at one end and below at the other.
- Do not force the line through the origin or through the first and last points.
- Do not draw a line at all if there is zero correlation.

### Worked example 1

Ten students recorded the hours they revised, h, and their test score, s. One further student revised for 5 hours and scored 90.

| h (hours) | 2 | 3 | 4 | 5 | 6 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| s (marks) | 38 | 42 | 49 | 53 | 58 | 64 | 65 | 71 | 75 | 82 |

(a) Describe the correlation.

**Strong positive correlation**: the more hours a student revised, the higher their score tended to be.

(b) Comment on the point (5, 90).

It is an **outlier**: the other students who revised about 5 hours scored around 50. The student may have prior knowledge of the topic, or the score may have been recorded wrongly. It is left out when drawing the line.

(c) A line of best fit is drawn through (2, 37) and (10, 81). Check that it is reasonable.

Its gradient is (81 − 37) ÷ (10 − 2) = 44 ÷ 8 = 5.5, so the line is s = 37 + 5.5(h − 2). Comparing the ten points with the line, six are slightly above and four slightly below, spread along its length. It extends across the full data set. It is a reasonable line.

(d) Estimate the score of a student who revised for 7.5 hours.

```
s = 37 + 5.5 × (7.5 − 2) = 37 + 30.25 ≈ 67
```

On a graph, go up from 7.5 to the line and across to the s-axis.

(e) Estimate how long a student who scored 60 revised.

```
60 = 37 + 5.5(h − 2)
23 = 5.5(h − 2)
h − 2 ≈ 4.2, so h ≈ 6.2 hours
```

On a graph, go across from 60 to the line and down. Using the line "backwards" like this is just as valid.

(f) Interpret the gradient.

Each extra hour of revision was associated with about **5.5 extra marks** on average.

(g) Use the line to predict the score after 15 hours of revision. Comment.

The line gives 37 + 5.5 × 13 = 108.5 marks, which is more than the test total. This is **extrapolation**: 15 hours is outside the data (2 to 10 hours), and the pattern clearly cannot continue for ever. Predictions within the range of the data (**interpolation**) are far more reliable.

## When not to use a line of best fit

- **Zero correlation:** a line would suggest a relationship that is not there.
- **Weak correlation:** a line can be drawn, but estimates from it are unreliable; say so.
- **Outside the data:** as in part (g), extrapolated values may be impossible.
- **Curved patterns:** a straight line does not describe them well. The syllabus asks only for straight lines of best fit, but you should recognise that a straight line is a poor model if the points clearly curve.

## Common mistakes

- Joining the points dot to dot.
- A line that stops short of the data or is drawn as two segments.
- A line forced through the origin or through the end points.
- Including an obvious outlier when judging the line's position.
- Calling the correlation "positive" without saying what it means in context.
- Claiming that one variable causes the other.
- Using the line for values far outside the data without comment.

## Exam technique for the command words

- **Plot:** small, accurate crosses; examiners check the coordinates.
- **Describe the correlation:** type (and strength if helpful), then a sentence in context.
- **Draw a line of best fit:** single ruled line across the full data set, balanced.
- **Use your line to estimate:** show the reading lines on the graph; the answer must match your own line.
- **Explain why the estimate may be unreliable:** mention extrapolation, weak correlation or an outlier, as appropriate.

## More on this topic

Try the [scatter diagrams practice questions](/resources/cambridge-o-level-mathematics-4024-scatter-diagrams-practice/) and revise from the [scatter diagrams revision notes](/resources/cambridge-o-level-mathematics-4024-scatter-diagrams-revision-notes/). The limits of conclusions from data are covered in [interpreting statistical data](/resources/cambridge-o-level-mathematics-4024-interpreting-statistical-data/).

## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 9.5 Scatter diagrams.
