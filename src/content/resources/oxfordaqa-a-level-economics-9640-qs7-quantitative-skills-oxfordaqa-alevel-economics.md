---
title: "OxfordAQA A-level Economics (9640): QS7 Converting money values to real terms"
resourceType: "study-guides"
subject: "economics"
level: ["a-levels"]
topic: "Quantitative skills"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9640"]
syllabusSeries: "First teaching September 2020, first AS exams May/June 2021, first A-level exams May/June 2022"
order: 5.7
syllabusTopics:
  - qualification: "a-level"
    topic: "quantitative-skills-oxfordaqa-alevel-economics"
    subtopic: "qs7-quantitative-skills-oxfordaqa-alevel-economics"
description: "QS7 study guide for OxfordAQA 9640 Economics: deflating spending, pensions and GDP per head, building an index from inflation and real interest rates."
author: "marlbridge-academic-team"
reviewer: "salman-ahmad"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to salman-ahmad (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers quantitative skill **QS7** in section 3.5 of the OxfordAQA International AS and A-level Economics (9640) specification: "make calculations to convert from money to real terms". Quantitative skills can be assessed in any unit, and QS7 appears wherever the data are in money values: national income and living standards, wages, government spending, interest rates and prices. Every country and figure below is invented.

The basic deflating formula, with examples on a real wage, real GDP growth and a real price, is in the broader [index numbers and real terms guide](/resources/oxfordaqa-a-level-economics-index-numbers-and-money-to-real-terms/). This page takes the skill further: converting into any year's prices, working when the base year falls in the middle of the data, building a price index from inflation rates, real interest rates and real values per head. Condensed recall is in the [QS7 revision notes](/resources/oxfordaqa-a-level-economics-9640-qs7-quantitative-skills-oxfordaqa-alevel-economics-revision-notes/), and the [QS7 practice questions](/resources/oxfordaqa-a-level-economics-9640-qs7-quantitative-skills-oxfordaqa-alevel-economics-practice/) test it. Track the course with the [course hub](/boards/oxfordaqa/a-level/economics/) and the [printable checklist](/checklists/oxfordaqa/a-level/economics/).

## The one idea behind every QS7 calculation

A money (nominal) value is measured in the prices of its own year. A real value is measured in the prices of one chosen year, so that every figure in a comparison buys the same basket. To move a value from the prices of year t into the prices of year X:

```
real value in year-X prices = nominal value in year t x (price index in year X / price index in year t)
```

When year X is the base year, its index is 100, and the formula becomes the familiar nominal / index x 100. Writing it in the general form avoids two mistakes: dividing by the wrong index, and multiplying when you should divide. Ask yourself which year's prices are higher. Converting an old value into today's dearer prices must make it larger; converting a recent value into older, cheaper prices must make it smaller.

## Worked example 1: a real-terms cut in public spending

Country P (invented) reports spending on schools.

| Year | Nominal spending (bn) | Price index (2015 = 100) |
|---|---|---|
| 2019 | 42.0 | 108 |
| 2024 | 47.5 | 131 |

**In 2015 prices:** 2019 = 42.0 / 108 x 100 = 38.89bn; 2024 = 47.5 / 131 x 100 = 36.26bn.

**Change:** nominal spending rose by (47.5 - 42.0) / 42.0 = 13.1%. Real spending fell by (36.26 - 38.89) / 38.89 = **-6.8%**.

**In 2024 prices instead:** 2019 spending = 42.0 x 131 / 108 = 50.94bn, against 47.5bn actually spent in 2024. The real fall is again 6.8%, because only the units change, never the percentage. Expressing the comparison in the latest year's prices is often clearer for a reader: "the 2019 budget would cost 50.9bn at today's prices, but only 47.5bn was spent".

**Interpretation.** A government can truthfully say spending rose by 5.5bn while schools can buy about 7% less with it. Prices rose by 131 / 108 - 1 = 21.3% over the period, faster than the 13.1% rise in money spending.

## Worked example 2: building a price index from inflation rates

Questions often give inflation rates rather than an index. Build the index by multiplying growth factors, starting from 100.

| Year | Inflation (%) | Price index (year 1 = 100) |
|---|---|---|
| 1 | | 100.00 |
| 2 | 2.0 | 100 x 1.020 = 102.00 |
| 3 | 5.5 | 102.00 x 1.055 = 107.61 |
| 4 | 8.0 | 107.61 x 1.080 = 116.22 |
| 5 | 3.5 | 116.22 x 1.035 = 120.29 |

A state pension rises from 900 a month in year 1 to 1,050 in year 5. Real pension in year 1 prices = 1,050 / 120.29 x 100 = 872.9. The money rise is 16.7%, but the real change is (872.9 - 900) / 900 = **-3.0%**.

Two traps: adding the inflation rates (2.0 + 5.5 + 8.0 + 3.5 = 19.0%) understates the true 20.3% rise in prices, because each year's inflation applies to an already higher price level; and "inflation fell to 3.5% in year 5" does not mean prices fell, only that they rose more slowly.

## Worked example 3: the real interest rate

The interest rate quoted by a bank is a money rate. The real interest rate is what a saver gains, or a borrower pays, in purchasing power.

A saver deposits 2,000 at a nominal rate of 4.5% when inflation is 6.0%.

- Money value after a year: 2,000 x 1.045 = 2,090.
- Real value in today's prices: 2,090 / 1.060 = 1,971.70.
- Exact real rate: 1.045 / 1.060 - 1 = **-1.4%**.
- Quick approximation: 4.5 - 6.0 = -1.5%.

The approximation is close when rates are low, but say which you used. A negative real rate means savers lose purchasing power and borrowers gain, because the debt shrinks in real terms. This helps explain why inflation redistributes between lenders and borrowers.

## Worked example 4: real values per head

Living-standards questions often need two adjustments: one for prices and one for population. Country R (invented):

| | Year 1 | Year 2 |
|---|---|---|
| Nominal GDP (bn) | 600 | 690 |
| Price index | 100 | 112 |
| Population (m) | 20.0 | 20.6 |

1. Real GDP in year 1 prices: 690 / 112 x 100 = 616.07bn.
2. Real GDP per head: year 1 = 600bn / 20.0m = 30,000; year 2 = 616.07bn / 20.6m = 29,906.
3. Change: (29,906 - 30,000) / 30,000 = **-0.3%**.

Nominal GDP rose by 15%, real GDP by 2.7%, and real GDP per head fell slightly, because the population grew by 3%. Each adjustment changes the story, so finish the calculation before you interpret it.

## When the base year sits in the middle of the data

If the price index has 2020 = 100 but the data run from 2018, the 2018 index is below 100 (say 94). Deflating 2018 values still uses nominal / index x 100: a 2018 wage of 470 is 470 / 94 x 100 = 500 in 2020 prices. A real value can be larger than its money value when the year being converted is earlier than the base year. That is not an error.

## Choosing the right price index

Use the index that matches what is being measured. Wages and pensions are usually deflated by a consumer price index, because households spend them. A firm's revenue might be deflated by an index of its own product prices. If a question gives only one index, use it, but in an evaluation note that it may not fit everyone: a pensioner who spends more on heating than the average household faces a different inflation rate.

## Common mistakes

- Dividing by the index of the wrong year, or multiplying instead of dividing.
- Adding inflation rates instead of multiplying growth factors.
- Giving a real figure without saying which year's prices it is in.
- Subtracting inflation from nominal growth and presenting the answer as exact.
- Deflating GDP but forgetting population when the question is about living standards.
- Treating a fall in the inflation rate as a fall in prices.
- Rounding the price index to whole numbers in a multi-year chain.

## Exam technique

- **Calculate:** show the conversion with both indices written in, and state the units, for example "36.26bn in 2015 prices".
- **Explain:** after a real change, say why it differs from the money change: prices rose faster than spending.
- **Evaluate:** question the deflator (is it the right index for these people?), the period chosen and what real income leaves out, such as hours worked or the distribution of income.
- Use exact working (dividing growth factors) when a question asks for a figure to one decimal place.

## Frequently asked questions

**Does the choice of price year change the real growth rate?**
No. Converting into any year's prices changes the size of every figure by the same proportion, so percentage changes stay the same.

**Can a real value be larger than the money value?**
Yes, when you convert into the prices of a later, dearer year, or when the year being converted had a price index below 100.

**Is real interest rate always nominal rate minus inflation?**
That is a good approximation for low rates. The exact rate divides the growth factors: (1 + nominal rate) / (1 + inflation) - 1.

## Official syllabus

OxfordAQA International AS and A-level Economics (9640), specification version 1.2, section 3.5 Quantitative skills, item QS7, with related content on index numbers and real and nominal data in section 3.2.1.2. Published by OxfordAQA.
