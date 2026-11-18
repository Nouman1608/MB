---
title: "Cambridge IGCSE Mathematics (0580): Exponential growth and decay"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 1 – Number"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 1.17
syllabusTopics:
  - qualification: "igcse"
    topic: "number-cambridge-igcse-maths"
    subtopic: "exponential-growth-and-decay-cambridge-igcse-maths"
description: "Study guide to Extended 0580 subtopic 1.17: multipliers from words, doubling and halving periods, finding n by trial, and comparing a growing and a shrinking quantity."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **1.17 Exponential growth and decay** in Topic 1 Number of the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. It is **Extended only**: the Core syllabus lists C1.17 as "Extended content only". The Extended statement (E1.17) is short:

- **Use exponential growth and decay**, for example depreciation and population change. Knowledge of e is not required.

That one line covers a wide range of questions on Papers 2 and 4. The [exponential growth, decay and surds guide](/resources/igcse-mathematics-0580-exponential-growth-decay-and-surds/) introduces the formula and shows how to find an original value and a rate. This page concentrates on the steps that usually decide the marks: building the right multiplier from the wording, counting the number of periods correctly, finding when a value passes a target, and comparing two quantities that change in different ways. Afterwards, use the [exponential growth and decay revision notes](/resources/cambridge-igcse-mathematics-0580-exponential-growth-and-decay-cambridge-igcse-maths-revision-notes/) and the [exponential growth and decay practice questions](/resources/cambridge-igcse-mathematics-0580-exponential-growth-and-decay-cambridge-igcse-maths-practice/).

## The model

When a quantity changes by the **same percentage** (or the same factor) in each equal time period:

```
value after n periods = starting value × (multiplier)^n
```

- Growth: multiplier greater than 1.
- Decay: multiplier between 0 and 1.

This is different from linear change, where the **same amount** is added or subtracted each period. A car that loses $2000 each year is losing value linearly; a car that loses 12% of its current value each year is decaying exponentially, and it loses less money each year as its value falls.

## Step 1: build the multiplier from the wording

### Worked example 1

Write down the multiplier for one period in each case.

```
(a) increases by 6.5% each year           1 + 0.065 = 1.065
(b) decreases by 2.5% each month          1 - 0.025 = 0.975
(c) loses a quarter of its value each year  1 - 0.25 = 0.75
(d) doubles every hour                    2
(e) halves every 5 years                  0.5 per 5-year period
```

In (e), the period is 5 years, not 1 year. In 20 years there are 20 ÷ 5 = 4 periods, so the value is multiplied by 0.5⁴.

## Step 2: count the periods

The power is the number of times the change has happened. Starting value means n = 0.

### Worked example 2: decay over several years (calculator)

A fish population of 24 000 decreases by 8% each year. Find (a) the population after 6 years, to the nearest hundred, (b) the overall percentage decrease over the 6 years.

```
(a) 24 000 × 0.92^6 = 14 552.5...  ->  14 600 (nearest hundred)

(b) 0.92^6 = 0.6064...
    1 - 0.6064 = 0.3936  ->  39.4% decrease (3 s.f.)
```

In (b) the overall decrease is not 6 × 8% = 48%. Each year's 8% is taken from a smaller population, so the total decrease is less.

### Worked example 3: periods shorter than the time asked (non-calculator)

A colony of 150 bacteria doubles every 20 minutes. How many bacteria are there after 2 hours?

```
2 hours = 120 minutes = 120 ÷ 20 = 6 doubling periods
150 × 2^6 = 150 × 64 = 9600 bacteria
```

Count periods, not hours. Using 2² would treat the colony as doubling once an hour.

## Step 3: when does it pass a value?

Without logarithms (which 0580 does not require) you find n by trying whole numbers. Set out a table, so the examiner can see your method.

### Worked example 4: depreciation below a target (calculator)

A new car costs $26 000. Its value falls by 14% each year. After how many complete years is it first worth less than $10 000?

```
n = 6:  26 000 × 0.86^6 = 10 518.75   (still above $10 000)
n = 7:  26 000 × 0.86^7 =  9 046.12   (below $10 000)
Answer: 7 years
```

Always show the value either side of the target. Showing only n = 7 does not prove that n = 6 is not already below.

Read the question's wording carefully: "after how many years" asks for n = 7, while "during which year does it fall below" also gives the 7th year.

## Step 4: comparing two exponential changes

### Worked example 5: one growing, one shrinking (calculator)

Town P has 48 000 people and grows by 3% each year. Town Q has 60 000 people and shrinks by 2% each year. After how many complete years does Town P first have more people than Town Q?

```
n    Town P (× 1.03^n)    Town Q (× 0.98^n)
4    54 024               55 342              P smaller
5    55 645               54 235              P larger
Answer: after 5 years
```

Use the multipliers with the same n for both towns, and compare row by row. A quick estimate helps you choose where to start: the gap is 12 000 and closes by about 2600 a year at first (1440 + 1200), so try n = 4 or 5.

## Reading the formula in reverse

The same model can describe a question given in the form V = 3500 × 1.04ⁿ:

- 3500 is the starting value (n = 0).
- 1.04 means a 4% increase each period.
- A multiplier such as 0.85 would mean a 15% decrease each period.

You may be asked to state the rate from a given formula, or to write the formula from a description.

## Common mistakes

- Using 0.08 as the multiplier for an 8% decrease, instead of 0.92.
- Using 1.8 or 1.08 the wrong way round (1.8 is an 80% increase).
- Multiplying the starting value by the rate and the number of years, which is simple (linear) change.
- Counting periods in years when the change happens every 20 minutes or every 5 years.
- Rounding the value at the end of each year before the next multiplication.
- In "when does it pass" questions, giving the last value above the target, or not showing the values either side.
- Adding percentage changes over several years to find an overall change.

## Exam technique for the command words

- **Calculate** a value after n periods: write the full expression, such as 24 000 × 0.92⁶, before the answer.
- **Find** when a value first passes a target: show a table of trials, including the value just before and just after.
- **Show that** a rate gives a stated value: substitute and give enough figures to show the result rounds to the stated value.
- **Explain** why a change is exponential and not linear: refer to a constant percentage (or factor) of the current value.

## Next steps

- Condensed rules and a self-test: the [exponential growth and decay revision notes](/resources/cambridge-igcse-mathematics-0580-exponential-growth-and-decay-cambridge-igcse-maths-revision-notes/).
- Exam-style questions with mark schemes: the [exponential growth and decay practice questions](/resources/cambridge-igcse-mathematics-0580-exponential-growth-and-decay-cambridge-igcse-maths-practice/).
- Compound interest and repeated percentage change: the [percentages study guide](/resources/cambridge-igcse-mathematics-0580-percentages-cambridge-igcse-maths/).
- Exponential graphs and the original-value and rate methods: the [exponential growth, decay and surds guide](/resources/igcse-mathematics-0580-exponential-growth-decay-and-surds/).

## Official syllabus

Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027 (Version 3), Cambridge University Press & Assessment. Topic 1 Number, subtopic E1.17 Exponential growth and decay (Extended only).
