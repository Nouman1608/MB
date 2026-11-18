---
title: "Cambridge O Level Mathematics (4024): Cumulative Frequency Diagrams -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["o-levels"]
topic: "Statistics"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 9.6
syllabusTopics:
  - qualification: "o-level"
    topic: "statistics"
    subtopic: "cumulative-frequency-diagrams-4024"
description: "Revision notes for 4024 section 9.6: cumulative frequency tables, plotting at upper boundaries, median, quartiles, percentiles and IQR, with a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 9.6, Cumulative frequency diagrams, of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. Full worked examples are in the [cumulative frequency diagrams study guide](/resources/cambridge-o-level-mathematics-4024-cumulative-frequency-diagrams/), and exam-style questions are in the [cumulative frequency diagrams practice questions](/resources/cambridge-o-level-mathematics-4024-cumulative-frequency-diagrams-practice/).

## The two outcomes

1. Draw and interpret cumulative frequency tables and diagrams, with points clearly marked (for example as small crosses) and joined by a smooth curve.
2. Estimate and interpret the median, percentiles, quartiles and interquartile range from the diagram.

## Key terms

| Term | Meaning |
|---|---|
| Cumulative frequency (CF) | running total of frequencies: how many items are at or below a value |
| Upper class boundary | the top of a class; where each CF is plotted |
| Median | the middle value; read at height n/2 |
| Lower quartile (LQ) | a quarter of the way through the data; height n/4 |
| Upper quartile (UQ) | three quarters of the way through; height 3n/4 |
| Percentile | the p-th percentile is read at height p% of n |
| Interquartile range (IQR) | UQ − LQ: the spread of the middle half of the data |

## Method: table and diagram

1. Add a CF column: each entry is the previous CF plus the class frequency.
2. Check the last CF equals the total.
3. Plot (upper boundary, CF) for each class, plus (lowest boundary, 0).
4. Mark crosses and join with a smooth, never-decreasing curve.

### Example table (80 students' marks out of 50)

| Mark m | 0 < m ≤ 10 | 10 < m ≤ 20 | 20 < m ≤ 30 | 30 < m ≤ 40 | 40 < m ≤ 50 |
|---|---|---|---|---|---|
| Frequency | 4 | 12 | 28 | 24 | 12 |
| CF | 4 | 16 | 44 | 68 | 80 |

Points: (0, 0), (10, 4), (20, 16), (30, 44), (40, 68), (50, 80).

## Method: reading measures

| Measure | Height for n = 80 | Reading (about) | Check from table |
|---|---|---|---|
| LQ | 20 | 21 marks | between 16 (at 20) and 44 (at 30) |
| Median | 40 | 29 marks | between 16 and 44, close to 44 |
| UQ | 60 | 37 marks | between 44 (at 30) and 68 (at 40) |
| IQR | — | about 15 to 16 marks | UQ − LQ |
| 90th percentile | 72 | about 43 marks | between 68 (at 40) and 80 (at 50) |

Readings from a hand-drawn curve vary slightly; the check column shows the interval each must fall in.

## Method: counting above or below a value

- **At or below x:** read up from x to the curve, then across.
- **Above x:** total − (reading at x).
- **Between x₁ and x₂:** reading at x₂ − reading at x₁.
- **Percentage:** count ÷ total × 100.

Example: a pass mark of 25 gives a reading of about 30 students at or below it, so about 80 − 30 = 50 students passed (62.5%).

## Method: back to frequencies

Subtract consecutive CF readings to get the frequency of each class. The results must add to the total.

## Comparing distributions

Use the median for the average and the IQR for the spread:

"The median for Group 1 (29 marks) is higher than for Group 2 (25 marks), so Group 1 scored better on average. The IQR for Group 1 (16 marks) is larger than for Group 2 (11 marks), so Group 2's marks were more consistent."

## Percentiles and quartiles in words

- The median is the 50th percentile; the lower quartile is the 25th; the upper quartile is the 75th.
- "The 90th percentile is 43 marks" means about 90% of the students scored 43 or less.
- "The top 20%" starts at the 80th percentile, read at height 0.8n.
- The IQR ignores the lowest and highest quarters, so one extreme value does not change it, unlike the range.

## Exam traps

- Plotting at midpoints instead of upper boundaries.
- Missing the starting point with CF = 0.
- Ruled straight segments, or a curve that goes down.
- Reading n/2 on the horizontal axis.
- Quoting the height (such as 40) as the median.
- Forgetting "total minus" for "more than" questions.
- A comparison with the median only and nothing on spread.

## Self-test

1. Frequencies are 4, 12, 28, 24, 12. Write down the cumulative frequencies.
2. At what heights do you read the LQ, median and UQ when n = 80?
3. At what height do you read the 10th percentile when n = 80?
4. Why are cumulative frequencies plotted at upper class boundaries?
5. What point should be plotted first for the marks table above?
6. The median must lie between which two marks? Explain using the table.
7. LQ = 21 and UQ = 37. Find the IQR.
8. About 30 students scored 25 or less. How many scored more than 25?
9. A curve passes through (20, 16) and (30, 44). How many students scored more than 20 but no more than 30?
10. What does an IQR of 16 marks tell you?
11. What shape is a cumulative frequency curve, and why can it never go down?
12. Group 2 has median 25 and IQR 11. Compare it with a group with median 29 and IQR 16.

### Answers

1. **4, 16, 44, 68, 80**.
2. **20, 40 and 60**.
3. 10% of 80 = **8**.
4. Each CF counts items **up to the end of the class**, which is the upper boundary.
5. **(0, 0)**.
6. **20 and 30**: CF 16 at 20 is below 40, and CF 44 at 30 is above 40.
7. 37 − 21 = **16 marks**.
8. 80 − 30 = **50**.
9. 44 − 16 = **28**.
10. The **middle half** of the students' marks are spread over about 16 marks.
11. An **S-shaped**, rising curve: each total adds a frequency, which is **never negative**.
12. The other group scored **higher on average** (29 against 25), but Group 2's marks were **more consistent** (IQR 11 against 16).
