---
title: "OxfordAQA International GCSE Mathematics: Rounding, estimation, bounds and fraction-decimal equivalence (9260)"
seoTitle: "OxfordAQA IGCSE Maths Rounding, Bounds and Fractions Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Rounding, estimation, bounds and fraction-decimal-percentage equivalence"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9260"]
syllabusSeries: "Version 5.1 (for exams May/June 2018 onwards)"
order: 74
syllabusTopics:
  - qualification: "igcse"
    topic: "number-oxfordaqa-igcse-maths"
    subtopic: "structure-and-calculation-oxfordaqa-igcse-maths"
  - qualification: "igcse"
    topic: "number-oxfordaqa-igcse-maths"
    subtopic: "fractions-decimal-and-percentages-oxfordaqa-igcse-maths"
description: "Study guide to rounding, limits of accuracy, estimation, bounds, recurring decimals and fraction operators for OxfordAQA International GCSE Mathematics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This study guide is aligned to the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1 (for exams May/June 2018 onwards). It covers statements N11 (section 3.1.1) and N12 to N14 (section 3.1.2). The specification says all content can be assessed on the Extension Tier question papers, so Core content is also Extension content. Statements that appear only in the Extension column are marked "Extension only" below.

Use it with the [revision notes](/resources/oxfordaqa-igcse-mathematics-rounding-estimation-bounds-and-fraction-decimal-revision-notes/) and the [practice questions](/resources/oxfordaqa-igcse-mathematics-rounding-estimation-bounds-and-fraction-decimal-practice/). The [course hub](/boards/oxfordaqa/igcse/mathematics/) and the [printable checklist](/checklists/oxfordaqa/igcse/mathematics/) show where this unit sits. To find out which parts you need most, take a [free 10-minute diagnostic](/diagnostics/) first.

## What this unit covers

| Reference | What you must be able to do | Extension only? |
|---|---|---|
| N11 | Round to a given number of decimal places or significant figures | No |
| N11 | Apply and interpret limits of accuracy | No |
| N11 | Use estimation to find approximate answers | No |
| N11 | Calculate and use upper and lower bounds | Extension only |
| N12 | Use equivalent fractions; convert between fractions, terminating decimals and percentages | No |
| N12 | Convert between fractions and recurring decimals | Extension only |
| N13 | Interpret fractions, decimals and percentages as operators | No |
| N14 | Write one quantity as a fraction or percentage of another, including fractions above 1 and percentages above 100 | No |

Percentage change, interest and reverse percentages are N15 and are not covered here.

## 1. Rounding (N11)

**Decimal places (d.p.)** count digits after the decimal point. Look at the next digit: 5 or more rounds up, 4 or less leaves the digit alone.

**Significant figures (s.f.)** start at the first digit that is not zero. Zeros before that digit never count. Zeros that hold place value must stay.

**Worked example 1.** Round each number as stated.

```
0.0040683 to 2 s.f.   first non-zero digit is 4, so keep 4 and 0
                      next digit is 6, so round up: 0.0041
59 849 to 2 s.f.      keep 5 and 9, next digit is 8, so 9 becomes 10
                      59 849 -> 60 000 (the zeros keep the place value)
7.9996 to 3 d.p.      third decimal is 9, next digit is 6, round up
                      7.999 + 0.001 = 8.000 (keep the zeros to show 3 d.p.)
2.0465 to 3 s.f.      digits 2, 0, 4; next digit is 6, round up: 2.05
```

## 2. Limits of accuracy (N11)

A rounded number stands for a whole interval of true values. The interval runs from half a unit of the rounding place below the number to half a unit above it. The lower end is included. The upper end is not.

| Rounded to | Example value | Error interval |
|---|---|---|
| nearest 100 | 3 400 | 3 350 ≤ x < 3 450 |
| 1 d.p. | 14.6 | 14.55 ≤ x < 14.65 |
| 2 s.f. | 0.072 | 0.0715 ≤ x < 0.0725 |

**Worked example 2.** A crowd is reported as 12 000 to 2 s.f. Give the error interval and say whether a true count of 12 460 is possible.

The second significant figure is in the thousands place, so the rounding unit is 1 000 and half a unit is 500.

```
12 000 - 500 = 11 500
12 000 + 500 = 12 500
11 500 ≤ n < 12 500
```

12 460 lies inside this interval, so it is possible. A count of 12 500 is not, because the upper end is excluded: 12 500 would round up to 13 000 (2 s.f.).

## 3. Estimation (N11)

An estimate uses simple rounded numbers, usually one significant figure each. Choose values that make the working easy and show each one.

**Worked example 3.** Estimate (38.6 × 5.12) ÷ 0.0489.

```
38.6   -> 40
5.12   -> 5
0.0489 -> 0.05

(40 × 5) ÷ 0.05 = 200 ÷ 0.05 = 4 000
```

Dividing by 0.05 is the same as multiplying by 20. The exact value is 4 041.6 (1 d.p.), so the estimate is close.

**Worked example 4.** A shop sells 28 packs of pens at £3.87 each. Estimate the total and say whether it is an over-estimate or an under-estimate.

```
28 -> 30      3.87 -> 4
30 × 4 = 120   so about £120
```

Each number went up when rounded, so the product comes out too big: an over-estimate. The exact total is £108.36.

## 4. Upper and lower bounds (N11, Extension only)

When values are rounded, a calculation using them gives a range of possible answers. The **lower bound** of a value is the bottom of its error interval. The **upper bound** is the top of its error interval. Use the upper bound of 14.6 as 14.65, even though the true value is strictly below it.

| Calculation | Upper bound | Lower bound |
|---|---|---|
| a + b | upper a + upper b | lower a + lower b |
| a − b | upper a − lower b | lower a − upper b |
| a × b | upper a × upper b | lower a × lower b |
| a ÷ b | upper a ÷ lower b | lower a ÷ upper b |

The subtraction and division rows are the ones that go wrong. To make a difference as large as possible, take away as little as possible. To make a quotient as large as possible, divide by the smallest value.

**Worked example 5.** A rectangle has length 7.6 cm and width 3.2 cm, both to 1 d.p. Find the bounds for (a) the area, (b) the perimeter, (c) length − width, (d) length ÷ width.

The length lies in 7.55 ≤ l < 7.65 and the width lies in 3.15 ≤ w < 3.25.

```
(a) area      lower 7.55 × 3.15 = 23.7825
              upper 7.65 × 3.25 = 24.8625
(b) perimeter lower 2(7.55 + 3.15) = 21.4
              upper 2(7.65 + 3.25) = 21.8
(c) l - w     lower 7.55 - 3.25 = 4.30
              upper 7.65 - 3.15 = 4.50
(d) l ÷ w     lower 7.55 ÷ 3.25 = 2.3231 (4 d.p.)
              upper 7.65 ÷ 3.15 = 2.4286 (4 d.p.)
```

**Giving an answer to a sensible accuracy.** Round both bounds to the same number of significant figures. Use the greatest accuracy at which they still agree.

In part (d), 2.32 and 2.43 differ at 3 s.f. At 2 s.f. they are 2.3 and 2.4, which still differ. At 1 s.f. both are 2. So l ÷ w = 2 to 1 s.f.

**Worked example 6.** A runner covers 400 m (to the nearest 10 m) in 52 s (to the nearest second). Find the speed to a justified accuracy.

```
distance: 395 ≤ d < 405       time: 51.5 ≤ t < 52.5
upper speed = 405 ÷ 51.5 = 7.864... 
lower speed = 395 ÷ 52.5 = 7.523...
```

To 2 s.f. these are 7.9 and 7.5, which differ. To 1 s.f. both are 8. The speed is **8 m/s** to 1 s.f.

## 5. Equivalent fractions and conversions (N12)

Multiply or divide the top and bottom of a fraction by the same number to get an equivalent fraction. To simplify, divide by the highest common factor.

```
18/42: divide by 6 -> 3/7
5/8 = ?/56: 8 × 7 = 56, so multiply top by 7 -> 35/56
```

**Fraction to decimal:** divide the numerator by the denominator. **Decimal to fraction:** write the digits over 10, 100 or 1 000, then simplify. **Percentage:** a percentage is a fraction out of 100, so ÷ 100 gives the decimal and × 100 goes the other way.

**Worked example 7.** Complete the conversions.

```
7/40 = 7 ÷ 40 = 0.175 = 17.5%
0.36 = 36/100 = 9/25
3.2% = 3.2/100 = 0.032 = 32/1000 = 4/125
135% = 1.35 = 135/100 = 27/20
```

**A terminating decimal** ends. A fraction in lowest terms gives a terminating decimal exactly when 2 and 5 are the only primes that divide its denominator. So 7/40 terminates because 40 = 2 × 2 × 2 × 5. A fraction such as 5/12 does not, because 12 contains a factor 3.

## 6. Recurring decimals (N12, Extension only)

In a recurring decimal, one digit or a block of digits repeats without end. Dots mark the repeating part: one dot over a single repeating digit, or a dot over each end of a longer block. For example, 0.2̇7̇ means 0.272727... and 0.46̇ means 0.46666...

**Fraction to recurring decimal.** Divide numerator by denominator and stop when the remainders repeat. Then 7/15 = 0.46̇ and 5/6 = 0.83̇.

**Recurring decimal to fraction.** Multiply by a power of 10 so that the repeating tails line up, then subtract.

**Worked example 8.** Write 0.2̇7̇ as a fraction.

```
x = 0.272727...
100x = 27.272727...
99x = 27
x = 27/99 = 3/11
```

**Worked example 9.** Only the final 3 repeats in 0.383̇ (that is, 0.38333...). Show that it equals 23/60.

```
x = 0.38333...
10x = 3.8333...
100x = 38.3333...
100x - 10x = 34.5
90x = 34.5
x = 34.5/90 = 69/180 = 23/60
```

**Worked example 10.** Write 1.2̇4̇ as a mixed number.

The whole number 1 stays. 0.2̇4̇ = 24/99 = 8/33, so the number is 1 8/33, or 41/33.

## 7. Fractions, decimals and percentages as operators (N13)

"Of" means multiply. A fraction, decimal or percentage acts on a quantity by multiplying it.

| Operator | As a multiplier |
|---|---|
| 3/8 of 456 | 456 × 3/8 = 171 |
| 35% of 840 | 840 × 0.35 = 294 |
| 12.5% of 3.6 m | 3.6 × 0.125 = 0.45 m |
| 9/5 of 35 | 35 × 9/5 = 63 |
| 160% of 35 | 35 × 1.6 = 56 |

Operators above 1 (such as 9/5 or 160%) make the quantity bigger. Operators can follow one another: 2/3 of 3/5 of 450 = 2/3 of 270 = 180.

**Worked example 11.** A box holds 240 sweets. 5/12 are red. A quarter of the remaining sweets are blue. How many are blue, and what fraction of the box is that?

```
red       = 5/12 of 240 = 100
remaining = 240 - 100 = 140
blue      = 0.25 × 140 = 35
fraction  = 35/240 = 7/48
```

## 8. One quantity as a fraction or percentage of another (N14)

Write the first quantity over the second (the one that follows "of"), in the same units. Simplify, then multiply by 100 for a percentage.

**Worked example 12.** Express (a) 45 minutes as a fraction of 2 hours, (b) 180 as a percentage of 120, (c) 7.5 as a fraction of 6, and (d) 85 cm as a percentage of 2.5 m.

```
(a) 2 h = 120 min       45/120 = 3/8
(b) 180/120 = 1.5       = 150%
(c) 7.5/6 = 5/4         = 1 1/4 (the fraction is greater than 1)
(d) 2.5 m = 250 cm      85/250 = 0.34 = 34%
```

Results above 1 or above 100% are correct when the first quantity is bigger. Swap the roles and the answer changes: if Mia ran 2.4 km and Ben ran 3.0 km, Ben's distance is 125% of Mia's, and Mia's is 80% of Ben's.

## Common errors

- Writing 8 instead of 8.000 when asked for 3 d.p.
- Giving the upper end of an error interval with ≤ instead of <.
- Using lower bounds for both values when finding the upper bound of a − b or a ÷ b.
- Rounding bounds too early, then reporting an accuracy the data cannot support.
- Putting the wrong quantity on the bottom in N14: the quantity after "of" or "compared with" is the denominator.
- Mixing minutes with hours, or cm with m, in a comparison.

## Next steps

Read the [revision notes](/resources/oxfordaqa-igcse-mathematics-rounding-estimation-bounds-and-fraction-decimal-revision-notes/), then try the [practice questions](/resources/oxfordaqa-igcse-mathematics-rounding-estimation-bounds-and-fraction-decimal-practice/). The wider topic is in the [Number study guide](/resources/igcse-oxfordaqa-mathematics-number/).

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), specification Version 5.1, for exams May/June 2018 onwards, published by OxfordAQA. Sections 3.1.1 (N11) and 3.1.2 (N12, N13, N14).
