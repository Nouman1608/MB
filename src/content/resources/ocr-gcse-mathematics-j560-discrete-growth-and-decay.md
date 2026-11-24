---
title: "OCR GCSE Mathematics (J560): Discrete growth and decay"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Topic 5 – Ratio, proportion and rates of change"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 5.3
syllabusTopics:
  - qualification: "gcse"
    topic: "ratio-proportion-and-rates-of-change-ocr-gcse-maths"
    subtopic: "discrete-growth-and-decay-ocr-gcse-maths"
description: "OCR GCSE Maths J560 section 5.03 in depth: simple interest, multipliers step by step, compound interest, depreciation and growth formulae."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 5.03, Discrete growth and decay, of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), for first assessment in 2017. Simple interest and step-by-step multiplier problems are for **both tiers**. Writing growth or decay as a formula, and solving and interpreting problems with that formula, are **Higher tier only** and are labelled.

The [direct and inverse proportion and growth and decay guide](/resources/ocr-gcse-mathematics-direct-and-inverse-proportion-and-growth-and-decay/) introduces 5.03 alongside proportion. This page goes further on 5.03 alone: working backwards from interest to a rate, year-by-year tables, why percentage changes cannot be added, interest over months, reversing a compound change and finding the first interval that passes a target. Condense it with the [5.03 revision notes](/resources/ocr-gcse-mathematics-j560-discrete-growth-and-decay-revision-notes/) and test yourself with the [5.03 practice questions](/resources/ocr-gcse-mathematics-j560-discrete-growth-and-decay-practice/).

## What the specification asks

Section 5.03a, Growth and decay, has three layers.

| Layer | What you must do | Tier |
|---|---|---|
| Initial learning | Calculate simple interest, including in financial contexts | Both tiers |
| Foundation column | Solve problems step by step involving multipliers over a given interval, for example compound interest and depreciation | Both tiers |
| Higher column | Express exponential growth or decay as a formula, then solve and interpret answers in growth and decay problems | Higher tier only |

The word **discrete** matters. The change happens in separate steps, once per interval (each year, month or hour), not smoothly all the time. That is why every method on this page works interval by interval, and why answers to "how many years" questions are whole numbers.

The specification links this section to percentage change (2.03c) and, for Higher, to exponential functions (7.01d). The specification's own examples are a car worth £15 000 that depreciates by 30%, 20% and 15% in three successive years, and £100 earning compound interest at 10% per year, written as A = 100 × 1.1ⁿ.

## Simple interest

Simple interest is paid on the original amount (the principal) only. The interest is the same every year.

```
interest for one year = principal × rate ÷ 100
total interest        = interest for one year × number of years
final amount          = principal + total interest
```

Questions often run backwards: they give the interest and ask for the rate or the time. Find one year's interest first, then compare it with the principal.

**Worked example 1.** £3,600 is invested at simple interest. After 3 years it has earned £486 in interest. Find the annual rate.

```
interest per year = 486 ÷ 3 = 162
rate = 162 ÷ 3600 × 100 = 4.5%
```

**Worked example 2.** At 2.5% simple interest, how many years does it take £800 to earn £140?

```
interest per year = 800 × 0.025 = 20
years = 140 ÷ 20 = 7 years
```

## Multipliers

A multiplier turns a percentage change into one multiplication.

| Change | Multiplier |
|---|---|
| Increase by 6% | 1 + 0.06 = 1.06 |
| Increase by 17.5% | 1.175 |
| Decrease by 6% | 1 − 0.06 = 0.94 |
| Decrease by 30% | 0.7 |
| Decrease by 2.5% | 0.975 |

A multiplier above 1 means growth and a multiplier between 0 and 1 means decay. Repeating the same change n times means multiplying by the multiplier n times, which is the same as multiplying by the multiplier to the power n.

## Compound interest step by step

With compound interest, each year's interest is added on before the next year's interest is worked out. A table makes the steps visible and earns method marks.

**Worked example 3.** £4,000 is invested at 3% compound interest per year. Find its value after 3 years and compare it with 3% simple interest.

| Year | Start of year | × 1.03 | End of year |
|---|---|---|---|
| 1 | £4,000.00 | 4000 × 1.03 | £4,120.00 |
| 2 | £4,120.00 | 4120 × 1.03 | £4,243.60 |
| 3 | £4,243.60 | 4243.60 × 1.03 | £4,370.908 |

The value after 3 years is **£4,370.91**. In one line: 4000 × 1.03³ = 4370.908. Simple interest would give 4000 × 0.03 × 3 = £360, a total of £4,360. Compound interest earns £10.91 more, because from year 2 onwards interest is also earned on earlier interest.

Keep the unrounded value from each row. Round money to the nearest penny only at the end.

### Interest over a different interval

The specification says "over a given interval", and the interval need not be a year. If an account pays 0.5% per month for 2 years, there are 24 intervals, so the multiplier is 1.005²⁴. For £2,500 that gives 2500 × 1.005²⁴ = £2,817.90.

## Different changes in successive intervals

When the percentage changes each year, use a different multiplier for each year and multiply them together.

**Worked example 4 (the specification's car).** A car is worth £15,000 new. It depreciates by 30% in the first year, 20% in the second and 15% in the third. Find its value after 3 years and the overall percentage decrease.

```
after year 1: 15000 × 0.7  = 10500
after year 2: 10500 × 0.8  = 8400
after year 3:  8400 × 0.85 = 7140
overall multiplier = 0.7 × 0.8 × 0.85 = 0.476
overall decrease   = 1 − 0.476 = 0.524, so 52.4%
```

The car is worth **£7,140**. The overall decrease is 52.4%, not 30 + 20 + 15 = 65%. Each later percentage is taken from a smaller amount, so percentage changes in sequence never simply add.

The same idea explains why a rise followed by an equal fall does not return to the start. A price that rises by 8% and then falls by 8% is multiplied by 1.08 × 0.92 = 0.9936, an overall fall of 0.64%.

## Working backwards from a compound change

To find an original value, divide by the multiplier as many times as it was applied. Do not subtract the percentage from the final value.

**Worked example 5.** After 3 years at 4% compound interest, an account holds £5,624.32. How much was invested?

```
original × 1.04³ = 5624.32
original = 5624.32 ÷ 1.04³ = 5624.32 ÷ 1.124864 = 5000
```

£5,000 was invested. Check: 5000 × 1.124864 = 5624.32.

## Growth and decay as a formula (Higher tier only)

A quantity that starts at A₀ and is multiplied by m each interval has value

```
A = A₀ × mⁿ   after n intervals
```

Reading the formula is part of the skill. In A = 100 × 1.1ⁿ, 100 is the starting amount, 1.1 is the multiplier and n counts the years, so the growth rate is 10% per year. In V = 650 × 0.85ⁿ, the starting value is 650 and it falls by 15% per interval.

**Worked example 6 (Higher tier only).** A town has 12,000 residents. The population falls by 6% each year. (a) Write a formula for the population P after n years. (b) After how many years does the population first fall below 9,000?

```
(a) P = 12000 × 0.94ⁿ
(b) n = 4: 12000 × 0.94⁴ = 9368.99   (still above 9,000)
    n = 5: 12000 × 0.94⁵ = 8806.85   (below 9,000)
```

The population first falls below 9,000 **after 5 years**. Show both trial values: the one just above the target and the one just below it. A single value does not prove it is the first.

**Interpreting answers.** In a discrete model the formula only has meaning at whole numbers of intervals. A population of 8,806.85 should be read as about 8,807 people. If interest is paid at the end of each year, the account does not reach a target "after 4.3 years"; it reaches it at the end of year 5. When asked whether a model is reasonable, comment on whether the same percentage change is likely to continue for that long.

## Common mistakes

- Using simple interest when the question says compound, or the other way round. Read the word before choosing a method.
- Writing a 6% decrease as a multiplier of 0.6 or 1.06 instead of 0.94.
- Adding successive percentages, such as treating 30%, 20% and 15% as 65%.
- Finding the interest only and forgetting to add the principal when the question asks for the total value.
- Reversing a compound increase by taking off the percentage of the final value.
- Rounding to the nearest penny after every year, which can move the final penny.
- Giving a decimal number of years, or only one trial value, in a "first year when" question.
- Counting intervals wrongly: 2 years of monthly interest is 24 intervals, not 2.

## Exam technique for OCR command words

- **Calculate** or **Work out**: show the multiplier and the calculation, not just the result. A correct multiplier usually earns method credit even if a slip follows.
- **Show that**: the answer is given, so the marks are for the working. Write the full calculation and give a more accurate value than the one in the question, such as 4370.908 before rounding to £4,370.91.
- **Explain** or **Give a reason**: refer to the mathematics, for example "the 20% is taken from the value after the first year, which is smaller than £15,000".
- **Is ... correct? Show how you decide**: carry out the calculation, then state yes or no with the comparison.
- On the non-calculator papers (Paper 2 for Foundation and Paper 5 for Higher), expect friendly multipliers such as 1.1² = 1.21 or 0.9² = 0.81, worked by hand.

## More on this topic

- Condense the methods with the [discrete growth and decay revision notes](/resources/ocr-gcse-mathematics-j560-discrete-growth-and-decay-revision-notes/).
- Test yourself with the [discrete growth and decay practice questions](/resources/ocr-gcse-mathematics-j560-discrete-growth-and-decay-practice/).
- Revise the linked percentage skills in the [percentages and ordering guide](/resources/ocr-gcse-mathematics-percentages-and-ordering-fractions-decimals-and/) and the exponential graphs in the [exponential and trigonometric graphs guide](/resources/ocr-gcse-mathematics-exponential-and-trigonometric-graphs-and/).

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Section 5.03, Discrete growth and decay.
