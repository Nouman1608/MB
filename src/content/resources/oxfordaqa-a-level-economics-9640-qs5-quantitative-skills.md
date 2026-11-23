---
title: "OxfordAQA A-level Economics (9640): QS5 Calculate and interpret index numbers"
resourceType: "study-guides"
subject: "economics"
level: ["a-levels"]
topic: "Quantitative skills"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9640"]
syllabusSeries: "First teaching September 2020, first AS exams May/June 2021, first A-level exams May/June 2022"
order: 5.5
syllabusTopics:
  - qualification: "a-level"
    topic: "quantitative-skills-oxfordaqa-alevel-economics"
    subtopic: "qs5-quantitative-skills-oxfordaqa-alevel-economics"
description: "OxfordAQA 9640 QS5 study guide: values from an index, comparing and linking series, the terms of trade, value and volume indices, and average change."
author: "marlbridge-academic-team"
reviewer: "salman-ahmad"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to salman-ahmad (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into quantitative skill QS5, "calculate and interpret index numbers", from section 3.5 of the OxfordAQA International AS and A-level Economics (9640) specification. The specification says the quantitative skills could be assessed in any of the assessments. Index numbers also appear in the subject content: 3.2.1.2 asks how index numbers are calculated, including the base year and weights, and how they measure changes in the price level and other variables; 3.4.1.2 asks students to calculate the terms of trade from indices of export and import prices.

The broader [index numbers and money to real terms guide](/resources/oxfordaqa-a-level-economics-index-numbers-and-money-to-real-terms/) shows how to build a simple index, change the base year, construct a weighted index and find inflation. This page covers what comes next: working back from an index to the data, comparing series with different base years, linking an old series to a new one, the terms of trade, splitting a value index into price and volume, and average annual change. All figures are invented; "cu" means currency units. Condense the page with the [QS5 revision notes](/resources/oxfordaqa-a-level-economics-9640-qs5-quantitative-skills-revision-notes/) and test yourself with the [QS5 practice questions](/resources/oxfordaqa-a-level-economics-9640-qs5-quantitative-skills-practice/).

## The core relationship

```
Index in year t = (value in year t / value in base year) × 100
```

Every technique below rearranges or combines this one line.

## 1. From an index back to the data

If you know the index and the base-year value, you can recover the actual value:

```
Value in year t = value in base year × (index in year t / 100)
```

### Worked example 1

Car sales in Country A were 48,000 in the base year 2020 (index = 100). The index for 2023 is 112.5.

```
Sales in 2023 = 48,000 × 112.5/100 = 54,000
```

Working the other way: if 2023 sales of 54,000 have an index of 112.5, base-year sales were 54,000 ÷ 1.125 = 48,000.

An index alone never tells you the level. Two indices of 112.5 for car sales in two countries say nothing about which country sells more cars.

## 2. Comparing series with different base years

Two series can only be compared directly if they share a base year. Rebase one of them first.

### Worked example 2

Country B's real GDP index (2015 = 100) is 120 in 2020 and 138 in 2024. Country C's real GDP index (2020 = 100) is 112 in 2024. Which grew faster from 2020 to 2024?

```
Rebase B to 2020 = 100:
2024 value = 138 / 120 × 100 = 115
```

From 2020 to 2024, Country B grew by 15% and Country C by 12%. Comparing 138 with 112 directly would wrongly suggest a 26-point gap, because B's index includes five extra years of growth from 2015.

## 3. Linking an old series to a new one

Statistical agencies periodically move to a new base year, so a long run of data can come in two pieces. To join them, you need one year that appears in both.

### Worked example 3

An old consumer price index has 2010 = 100, and its value for 2019 is 127.1. A new index starts with 2019 = 100, and gives 102.0 for 2020 and 105.6 for 2021.

To express the new figures on the old base, multiply each by 127.1/100:

```
2020: 102.0 × 1.271 = 129.6
2021: 105.6 × 1.271 = 134.2
```

Check: on the new base, prices rose 5.6% from 2019 to 2021; on the old base, 134.2/127.1 = 1.056, also 5.6%. Linking changes the reference point, not the rate of change.

## 4. The terms of trade

The terms of trade compare the prices a country receives for its exports with the prices it pays for its imports:

```
Terms of trade = (index of export prices / index of import prices) × 100
```

### Worked example 4

| Year | Export price index | Import price index | Terms of trade |
|---|---|---|---|
| 1 (base) | 100 | 100 | 100.0 |
| 2 | 108 | 104 | 108/104 × 100 = 103.8 |
| 3 | 115 | 125 | 115/125 × 100 = 92.0 |

In year 2 the terms of trade **improved**: each unit of exports buys 3.8% more imports than in the base year. In year 3 they **deteriorated** to 92.0: export prices rose, but import prices rose faster, so the same exports now buy 8% fewer imports than in the base year.

**Interpreting with care.** An "improvement" is not automatically good for the economy. If export prices rose because the currency appreciated, exports may become less competitive and sales may fall. A "deterioration" caused by falling export prices from higher productivity may raise export volumes. Specification point 3.4.1.2 asks you to understand the causes and effects of changes in the terms of trade, so always look for the reason behind the change.

## 5. Value, price and volume indices

The value of exports (or of any spending) is price × quantity. In index form:

```
Value index = (price index × volume index) / 100
```

### Worked example 5

Country D's export price index is 110 and its export volume index is 95 (same base year).

```
Value index = 110 × 95 / 100 = 104.5
```

Export revenue rose by 4.5%, even though the quantity exported fell by 5%, because prices rose by 10%. The same split explains why nominal GDP can rise while real GDP falls: the price index rises more than the volume index falls.

## 6. Average annual change from an index

If an index rises from 100 to 134 over 5 years, the average annual rate of increase is not 34/5 = 6.8%:

```
Average annual multiplier = (134/100)^(1/5) = 1.0603
Average annual rate = 6.03%
```

Each year's increase applies to a larger value than the last, so dividing the total by the number of years overstates the annual rate.

## Common mistakes

- Comparing index values from series with different base years.
- Reading the index level as a quantity, such as "index of 112.5 means 112.5 cars".
- Calculating the terms of trade as import prices over export prices.
- Calling any rise in the terms of trade "good for the economy" without examining its cause.
- Adding a price index and a volume index instead of multiplying them.
- Dividing the total change in an index by the number of years to find an average annual rate.
- Confusing a change of 5 index points with a 5% change when the starting index is not 100.

## Exam technique

- **Calculate**: write the formula, substitute, and give the answer to one decimal place unless told otherwise.
- **Using the data**: state the base year you are working from.
- **Explain what the index shows**: give a percentage change from the base year and say what the index cannot show, such as the level of the variable.
- **Assess the significance** of a change in the terms of trade: link it to its cause, to export competitiveness and to the current account.

## Where next

Practise with the [QS5 practice questions](/resources/oxfordaqa-a-level-economics-9640-qs5-quantitative-skills-practice/) and condense with the [QS5 revision notes](/resources/oxfordaqa-a-level-economics-9640-qs5-quantitative-skills-revision-notes/). The terms of trade are developed further in the [international trade guide](/resources/oxfordaqa-a-level-economics-international-trade/).

## Official syllabus

OxfordAQA International AS and A-level Economics (9640), section 3.5 Quantitative skills, QS5: calculate and interpret index numbers. First teaching September 2020; first International AS exams May/June 2021; first International A-level exams May/June 2022. Published by OxfordAQA.
