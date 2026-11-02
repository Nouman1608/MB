---
title: "Edexcel International GCSE Mathematics A 4MA1: Degree of accuracy and standard form -- Revision Notes"
seoTitle: "Edexcel IGCSE Maths 4MA1 Bounds and Standard Form Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Degree of accuracy and standard form"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "numbers-and-the-number-system-edexcel-igcse-maths"
  - qualification: "igcse"
    topic: "numbers-and-the-number-system-edexcel-igcse-maths"
    subtopic: "degree-of-accuracy-edexcel-igcse-maths"
  - qualification: "igcse"
    topic: "numbers-and-the-number-system-edexcel-igcse-maths"
    subtopic: "standard-form-edexcel-igcse-maths"
description: "Condensed 4MA1 notes on rounding, significant figures, estimation, bounds and standard form (sections 1.8-1.9), with a self-test and answers."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

For full explanations and worked examples, use the [Degree of accuracy and standard form study guide](/resources/edexcel-igcse-maths-4ma1-degree-of-accuracy-and-standard-form/). These notes condense sections **1.8** and **1.9** of Topic 1 in the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2 (November 2017), for the January and June series examined on it. Rounding, identifying bounds, estimation and calculating with standard form are on both tiers. Solving problems with bounds and solving problems involving standard form are **Higher tier only** and are labelled. A calculator may be used on every 4MA1 paper.

Course hub: [Edexcel IGCSE Mathematics](/boards/edexcel/igcse/mathematics/). Tick off each statement on the [printable checklist](/checklists/edexcel/igcse/mathematics/), then try the [practice questions](/resources/edexcel-igcse-maths-4ma1-degree-of-accuracy-and-standard-form-practice/) or a free [diagnostic](/diagnostics/). The wider topic is covered in the [Numbers and the number system revision notes](/resources/edexcel-igcse-mathematics-number-revision-notes/).

## Key words

| Term | Meaning |
|---|---|
| Degree of accuracy | How a value was rounded: to a power of 10, a number of d.p., or a number of s.f. |
| Decimal places (d.p.) | Digits after the decimal point |
| Significant figures (s.f.) | Digits counted from the first non-zero digit |
| Lower bound | Smallest value that rounds to the given value |
| Upper bound | The value at the top of the range; anything just below it rounds to the given value |
| Estimate | Answer worked out after rounding every number to 1 s.f. |
| Standard form | a × 10ⁿ with 1 ≤ a < 10 and n an integer |

## 1.8A and 1.8B Rounding -- both tiers

**Method in steps**

1. Find the last digit you are keeping (the place value, the d.p., or the s.f.).
2. Look at the next digit only.
3. 5 or more: round the kept digit up. 4 or less: leave it.
4. Replace dropped digits **before** the decimal point with zeros; drop digits **after** it.

**Which zeros count as significant figures?**

| Zeros | Significant? | Example |
|---|---|---|
| Leading zeros in a decimal | No | 0.000**4**983: first s.f. is 4 |
| Zeros between other digits | Yes | 3**0**5 has 3 s.f. |
| Trailing zeros you write after rounding | Yes, they show accuracy | 12.0**0** to 2 d.p. |

**Small reminders**

- 3 s.f. of 0.080 96 is 0.0810. Keep the final 0: it is the third significant figure.
- 2 s.f. of 61 540 is 62 000, not 62.
- 1 d.p. of 2.96 is 3.0, not 3.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-degree-of-accuracy-and-standard-form--05-rounding-carry.webp" width="900" height="1050" alt="4.99712 to 2 d.p.: keep 4.99, the next digit 7 rounds up, giving 5.00. 38 649.5 to 2 s.f.: keep 38, the next digit 6 rounds up to 39, and zeros fill the places to give 39 000." loading="lazy">
  <figcaption>Rounding up can carry, and the zeros must stay.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-estimation-and-using-a-calculator--02-significant-figures.webp" width="900" height="900" alt="The digits of 0.07049 are boxed. The leading zeros are greyed because they never count; counting starts at the 7. The digit after the last kept one decides: 0 and 4 leave it (0.07, 0.070) and 9 rounds up (0.0705)." loading="lazy">
  <figcaption>Count significant figures from the first non-zero digit and keep zeros that show accuracy, as in 0.070.</figcaption>
</figure>


## 1.8C Identifying bounds -- both tiers

**Method in steps**

1. Name the unit of rounding (nearest 5? 0.1? 100?).
2. Halve it.
3. Lower bound = value − half unit. Upper bound = value + half unit.

| Given | Unit | Bounds |
|---|---|---|
| 40 cm to nearest 5 cm | 5 | 37.5 cm and 42.5 cm |
| 0.3 kg to 1 d.p. | 0.1 | 0.25 kg and 0.35 kg |
| 120 000 to 2 s.f. | 10 000 | 115 000 and 125 000 |
| 7.06 to 3 s.f. | 0.01 | 7.055 and 7.065 |

As an inequality: 37.5 ≤ x < 42.5. "Nearest 5" catches people out: the half unit is 2.5.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-number--04-limits-of-accuracy.webp" width="900" height="810" alt="A number line from 4.50 to 4.70 kg shades the values from 4.55 to 4.65 that round to 4.6 kg. The lower bound 4.55 is included (filled dot); the upper bound 4.65 is not (open dot)." loading="lazy">
  <figcaption>A value given to 1 d.p. can be up to half a unit (0.05) either side: 4.55 &lt;= mass &lt; 4.65.</figcaption>
</figure>


## 1.8D Estimation -- both tiers

**Method in steps**

1. Round **every** number to 1 s.f. Write the rounded calculation down.
2. Work it out without a calculator.
3. If the question asks, say whether it is an overestimate or underestimate by checking which way each number was rounded.

**Reminder:** dividing by 0.2 is multiplying by 5; dividing by 0.05 is multiplying by 20.

```
(0.587 x 3.94) / 0.213  ->  (0.6 x 4) / 0.2 = 2.4 / 0.2 = 12
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-estimation-and-using-a-calculator--03-estimate-calculation.webp" width="900" height="800" alt="62.4, 0.187 and 3.87 are rounded to 60, 0.2 and 4. The estimate is (60 x 0.2) / 4 = 3. On a number line it lies right next to the calculator value 3.015." loading="lazy">
  <figcaption>Round every number to 1 s.f., write the rounded calculation, and work it out.</figcaption>
</figure>


## 1.8A Solving problems with bounds -- Higher tier only

**Combining bounds**

| Want | Use |
|---|---|
| Biggest sum or product | both upper bounds |
| Smallest sum or product | both lower bounds |
| Biggest difference a − b | upper a, **lower** b |
| Smallest difference a − b | lower a, **upper** b |
| Biggest quotient a ÷ b | upper a, **lower** b |
| Smallest quotient a ÷ b | lower a, **upper** b |

**Worked reminder (difference).** P = 17.6 to 1 d.p. and Q = 9.25 to 2 d.p.

```
P: 17.55 to 17.65        Q: 9.245 to 9.255
upper bound of P - Q = 17.65 - 9.245 = 8.405
lower bound of P - Q = 17.55 - 9.255 = 8.295
```

**Suitable degree of accuracy.** Work out both bounds. Round each to 1 s.f., then 2 s.f., then 3 s.f. The answer is the most accurate value on which **both** bounds agree. Above, to 2 s.f. the bounds give 8.4 and 8.3, so they disagree. To 1 s.f. both give 8. So P − Q = 8 to 1 s.f.

**"Must be sure" decisions.** If a quantity must definitely be enough (fence, fabric, paint), use the **upper bound** of what is needed. If something must definitely fit, compare the upper bound of the object with the lower bound of the space.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-degree-of-accuracy-and-standard-form--04-bounds-of-a-speed.webp" width="900" height="1100" alt="Distance 250 m to the nearest 10 lies from 245 to 255; time 31.4 s lies from 31.35 to 31.45. Upper speed 255/31.35 = 8.134 and lower 245/31.45 = 7.790. At 2 s.f. they round to 7.8 and 8.1, but at 1 s.f. both are 8, so the speed is 8 m/s." loading="lazy">
  <figcaption>The biggest distance over the smallest time gives the upper bound; choose the accuracy where both bounds agree.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-degree-of-accuracy-and-standard-form--04-bounds-two-values.webp" width="900" height="1120" alt="Illustrative a = 8 and b = 3 to the nearest whole number. Upper and lower bounds: a+b 12 and 10; a-b 6 and 4 (upper a minus lower b, lower a minus upper b); a x b 29.75 and 18.75; a / b 3.4 and about 2.14. Gold boxes are upper bounds and teal boxes are lower bounds." loading="lazy">
  <figcaption>Pick the upper or lower bound of each value that makes the answer as large or as small as possible.</figcaption>
</figure>


## 1.9A Standard form -- both tiers

**Converting**

| Ordinary number | Standard form | Note |
|---|---|---|
| 92 000 | 9.2 × 10⁴ | big number, positive power |
| 0.000 605 | 6.05 × 10⁻⁴ | small number, negative power |
| 7 | 7 × 10⁰ | 10⁰ = 1 |

**Calculating**

| Operation | Rule | Then |
|---|---|---|
| × | multiply the a parts, **add** the powers | adjust so 1 ≤ a < 10 |
| ÷ | divide the a parts, **subtract** the powers | adjust so 1 ≤ a < 10 |
| + or − | convert to ordinary numbers or match the powers | convert back |
| squaring | square a, **double** the power | adjust |

**Adjusting.** If a ≥ 10, divide a by 10 and add 1 to the power. If a < 1, multiply a by 10 and subtract 1 from the power.

```
25 x 10^-6  = 2.5 x 10^-5
0.8 x 10^9  = 8 x 10^8
```

**Calculator display.** 4.7E-03 or 4.7 × 10⁻⁰³ means 4.7 × 10⁻³. Write it in proper notation in your answer.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-degree-of-accuracy-and-standard-form--02-std-form-add-match-powers.webp" width="900" height="710" alt="A bar of blocks worth 10^4 shows 5.6 x 10^4 = 56 000 and 8.3 x 10^3 = 0.83 x 10^4. Together they make 6.43 blocks, so 6.43 x 10^4 = 64 300." loading="lazy">
  <figcaption>Write both numbers with the same power, then add the front numbers.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-number--03-standard-form.webp" width="900" height="880" alt="Digit boxes show the decimal point of 4 560 000 jumping 6 places left to give 4.56 x 10^6, and of 0.00032 jumping 4 places right to give 3.2 x 10^-4. A must lie between 1 and 10." loading="lazy">
  <figcaption>Move the decimal point until the number is between 1 and 10; the count of moves is the power of 10.</figcaption>
</figure>


## 1.9A Solving problems involving standard form -- Higher tier only

- **"How many times bigger?"** Divide the larger by the smaller: (6 × 10⁸) ÷ (1.5 × 10⁵) = 4 × 10³.
- **Square roots.** Make the power even first: √(3.6 × 10⁷) = √(36 × 10⁶) = 6 × 10³.
- **Expressions in n.** Treat 10ⁿ with index laws, then adjust a: (2 × 10ⁿ)³ = 8 × 10³ⁿ; (6 × 10ⁿ)² = 36 × 10²ⁿ = 3.6 × 10²ⁿ⁺¹.
- **Units.** 1 km = 10³ m, 1 m = 10³ mm. Convert first, then calculate.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-degree-of-accuracy-and-standard-form--03-std-form-power-root.webp" width="900" height="710" alt="Squares drawn to scale: side 3 x 10^4 has area 9 x 10^8; side 4 x 10^4 has area 16 x 10^8 = 1.6 x 10^9, so the square root of 1.6 x 10^9 is 4 x 10^4. The power of 10 is made even before the root." loading="lazy">
  <figcaption>Squaring and rooting standard form, with an even power before a root.</figcaption>
</figure>


## Must-know distinctions

- **d.p. vs s.f.** 0.0467 to 2 d.p. is 0.05; to 2 s.f. it is 0.047.
- **Identify bounds (both tiers) vs solve problems with bounds (Higher).** Foundation stops at writing the two bounds.
- **Estimate vs exact.** An estimate uses 1 s.f. values; a calculator value earns no estimate marks.
- **13 × 10⁴ vs 1.3 × 10⁵.** Equal value, but only the second is standard form.

## Quick self-test

1. Round 7649 to the nearest 100.
2. Write 0.000 498 3 to 2 significant figures.
3. Write 12.0451 to 2 decimal places.
4. A length is 9.0 m to 1 d.p. Write down its bounds.
5. A crowd is recorded as 600 to the nearest 50. Write down the bounds.
6. Estimate (48.7 × 21.3) ÷ 9.8.
7. Write 0.002 81 in standard form.
8. Work out (5 × 10⁻³)², giving your answer in standard form.
9. Work out 2.4 × 10⁵ + 6 × 10⁴ in standard form.
10. (Higher) a = 12 and b = 5, both to the nearest whole number. Find the upper bound of a ÷ b to 3 s.f.
11. (Higher) Work out √(4.9 × 10⁷) as an ordinary number.
12. (Higher) a = 30 to the nearest 10 and b = 12 to the nearest whole number. Find the lower bound of a − b.

### Answers

1. 7600
2. 0.000 50 (the trailing 0 is the second s.f.)
3. 12.05
4. 8.95 m and 9.05 m
5. 575 and 625
6. (50 × 20) ÷ 10 = **100** (calculator: 105.8)
7. 2.81 × 10⁻³
8. 25 × 10⁻⁶ = 2.5 × 10⁻⁵
9. 240 000 + 60 000 = 300 000 = 3 × 10⁵
10. 12.5 ÷ 4.5 = 2.78
11. √(49 × 10⁶) = 7 × 10³ = 7000
12. 25 − 12.5 = 12.5

## Where marks are usually lost

- Writing 0.0005 for 0.000 498 3 to 2 s.f. The answer needs the trailing zero: 0.000 50.
- Rounding 61 540 to 2 s.f. as 62 and losing the place value.
- Using 0.1 rather than 0.05 as the half unit for 1 d.p. values.
- Taking the half unit of "nearest 5" as 0.5 instead of 2.5.
- Estimating with 2 s.f. values, or not writing the rounded values down.
- (Higher) Using upper − upper for the biggest difference.
- (Higher) Giving a "suitable degree of accuracy" without showing both bounds rounded.
- Leaving answers like 25 × 10⁻⁶ or 0.8 × 10⁹, which are not in standard form.
- Adding 2.4 and 6 when the powers differ (2.4 × 10⁵ + 6 × 10⁴ is not 8.4 × 10⁵).
- Copying calculator notation such as 4.7E-03 as the final answer.

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification, Issue 2, November 2017, first examination June 2018. Published by Pearson Education Limited.
