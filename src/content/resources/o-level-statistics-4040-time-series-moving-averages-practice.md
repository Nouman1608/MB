---
title: "Time Series and Moving Averages: O Level Statistics 4040 and IGCSE 0479 Practice Questions"
seoTitle: "Time Series Practice Questions: Statistics 4040 and 0479"
seoDescription: "Original practice questions with worked answers on moving averages, centring, seasonal components and predictions for O Level Statistics 4040 and IGCSE 0479."
resourceType: "practice-questions"
subject: "statistics"
level: ["o-levels", "igcse"]
topic: "Topic 10 – Time Series"
boards: ["cambridge"]
qualifications: ["o-level", "igcse"]
syllabusCodes: ["4040", "0479"]
syllabusSeries: "2025-2027"
order: 10
syllabusTopics:
  - qualification: "o-level"
    topic: "time-series-4040"
    subtopic: "understanding-of-trend-4040"
  - qualification: "o-level"
    topic: "time-series-4040"
    subtopic: "understanding-of-seasonal-variation-4040"
  - qualification: "igcse"
    topic: "time-series-0479"
description: "Original practice questions with full worked answers on 3-point and centred 4-point moving averages, trend lines, seasonal components and predictions — O Level Statistics 4040 Topic 10 and IGCSE Statistics 0479 Topic 12."
author: "marlbridge-academic-team"
publishedDate: 2026-09-29
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs. Use them alongside the official past papers from Cambridge.

Study the method first: [time series study guide](/resources/o-level-statistics-4040-time-series-moving-averages/).

---

## Questions

**1.** A school café records its sales (in hundreds of rupees) each term for three years.

| | Autumn | Spring | Summer |
|---|---|---|---|
| Year 1 | 34 | 25 | 19 |
| Year 2 | 38 | 27 | 22 |
| Year 3 | 41 | 31 | 25 |

(a) Explain why a 3-point moving average is appropriate for these data. **[1]**

(b) Calculate all the 3-point moving averages. **[3]**

(c) Explain why these moving averages do not need to be centred. **[1]**

(d) Calculate the seasonal component for each term. **[3]**

(e) A trend line is drawn through the first and last moving averages. Use it, with your
answer to (d), to predict the café's sales in the Autumn term of Year 4. **[3]**

(f) State one assumption made in your prediction. **[1]**

**2.** A household's quarterly electricity bills (in hundreds of rupees) are:

| | Q1 | Q2 | Q3 | Q4 |
|---|---|---|---|---|
| Year 1 | 120 | 95 | 80 | 130 |
| Year 2 | 128 | 99 | 86 | 139 |

(a) Calculate the five 4-point moving averages. **[2]**

(b) Calculate the four centred moving averages and state the quarter each belongs to. **[3]**

(c) For each of these four quarters, calculate the difference between the bill and the
centred moving average. **[2]**

(d) Explain why two years of data are not enough to give a reliable seasonal
component for each quarter. **[1]**

---

## Answers

**1.** (a) There are three terms in each yearly cycle, so each moving average covers one
full cycle and the seasonal pattern is averaged out [1].

(b) (34 + 25 + 19) ÷ 3 = **26.0**; (25 + 19 + 38) ÷ 3 = **27.3**; (19 + 38 + 27) ÷ 3 = **28.0**;
(38 + 27 + 22) ÷ 3 = **29.0**; (27 + 22 + 41) ÷ 3 = **30.0**; (22 + 41 + 31) ÷ 3 = **31.3**;
(41 + 31 + 25) ÷ 3 = **32.3** [3] (2 marks for five or six correct, 1 mark for three or four).

(c) With an odd number of points, the middle of each group is an actual term
(for example, the first average belongs to Year 1 Spring), so it can be plotted
against that term directly [1].

(d) Differences (sales − moving average):
- Autumn: Year 2 38 − 28.0 = 10.0; Year 3 41 − 31.33 = 9.67; mean **+9.83**
- Spring: Year 1 25 − 26.0 = −1.0; Year 2 27 − 29.0 = −2.0; Year 3 31 − 32.33 = −1.33; mean **−1.44**
- Summer: Year 1 19 − 27.33 = −8.33; Year 2 22 − 30.0 = −8.0; mean **−8.17**

[1] for the method (sales − moving average), [1] for the differences, [1] for the three means.

(e) The trend line passes through (Year 1 Spring, 26.0) and (Year 3 Spring, 32.33): a rise
of 6.33 over 6 terms, about 1.06 per term [1]. Year 4 Autumn is 2 terms after Year 3
Spring, so the trend value is about 32.33 + 2 × 1.06 = 34.4 [1].
Prediction = 34.4 + 9.83 ≈ **44.3**, about Rs 4 430 [1].

(f) Any one: the trend continues in a straight line beyond the data; the seasonal
pattern stays the same in Year 4; there are no unusual events (such as a change in
prices or school closure) [1].

**2.** (a) (120 + 95 + 80 + 130) ÷ 4 = **106.25**; then **108.25**, **109.25**, **110.75**, **113.0** [2]
(1 mark for three or four correct).

(b) (106.25 + 108.25) ÷ 2 = **107.25** (Year 1 Q3); (108.25 + 109.25) ÷ 2 = **108.75** (Year 1 Q4);
(109.25 + 110.75) ÷ 2 = **110.0** (Year 2 Q1); (110.75 + 113.0) ÷ 2 = **111.875** (Year 2 Q2) [3]
(1 mark for the values, 1 mark for the method, 1 mark for the quarters).

(c) Year 1 Q3: 80 − 107.25 = **−27.25**; Year 1 Q4: 130 − 108.75 = **+21.25**;
Year 2 Q1: 128 − 110.0 = **+18.0**; Year 2 Q2: 99 − 111.875 = **−12.875** [2]
(1 mark for two correct).

(d) Each quarter has only one difference, so its "average" rests on a single year and
may be distorted by an unusual year [1].

---

## Where marks are usually lost

- In 1(b), rounding early. Keep 27.33 and 31.33 in the working even if you
  quote 27.3 and 31.3.
- In 1(d), subtracting the wrong way round, which flips every sign.
- In 1(e), adding the seasonal component to the last *actual* Autumn value (41)
  instead of to the *trend* value.
- In 2(b), attaching the centred averages to the wrong quarters. The first
  centred value belongs to the third quarter of the data.

## Next steps

- [Crude and standardised rates practice](/resources/o-level-statistics-4040-crude-and-standardised-rates-practice/)
- [Index numbers practice](/resources/o-level-statistics-4040-index-numbers-practice/)
- [O Level Statistics 4040 hub](/boards/cambridge/o-level/statistics/) · [IGCSE Statistics 0479 hub](/boards/cambridge/igcse/statistics/)
