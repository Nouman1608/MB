---
title: "OCR GCSE Mathematics: Rounding, estimation, error intervals and bounds (J560) -- Revision Notes"
seoTitle: "OCR GCSE Maths Rounding and Bounds Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["gcse"]
topic: "Rounding, estimation, error intervals and bounds"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 41
syllabusTopics:
  - qualification: "gcse"
    topic: "approximation-and-estimation-ocr-gcse-maths"
    subtopic: "approximation-and-estimation-detail-ocr-gcse-maths"
description: "Condensed revision notes on rounding, estimation, error intervals and bounds for OCR GCSE Mathematics J560, with a self-test and common mistakes."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Condensed recall for the final weeks. For full explanations and worked examples, use the [study guide](/resources/ocr-gcse-mathematics-rounding-estimation-error-intervals-and-bounds/). These notes follow section 4.01 of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026): 4.01a rounding, 4.01b estimation, 4.01c upper and lower bounds. Everything is assessed at both tiers except two items marked **Higher tier only**: bounds of calculations, and discrete versus continuous bounds.

Links: [OCR GCSE Mathematics hub](/boards/ocr/gcse/mathematics/), [printable checklist](/checklists/ocr/gcse/mathematics/), [practice questions](/resources/ocr-gcse-mathematics-rounding-estimation-error-intervals-and-bounds-practice/), [10-minute diagnostics](/diagnostics/).

## 4.01a Rounding

| Term | Rule |
|---|---|
| Nearest 10, 100, ... | Look one column to the right. 5 or more: round up |
| Decimal places (dp) | Count digits after the point |
| Significant figures (sf) | Count from the first non-zero digit |
| Zeros | Zeros before the first non-zero digit of a decimal are place holders. Zeros between other digits count |
| Final zeros | Keep them: 3.10 is 2 dp, 0.0070 is 2 sf |

**Method in steps**

1. Mark the rounding digit.
2. Look at the next digit to the right.
3. Add one if it is 5 to 9. Otherwise leave the digit.
4. Replace dropped whole-number digits with zeros.

**Appropriate accuracy**

- Round only the final answer. Keep extra figures in the working.
- Follow the accuracy the question asks for.
- If none is stated, match the data: 3 sf for measurements, nearest penny for money.
- Do not quote more figures than the data justifies.

**Quick reminders**

```
48 996 to the nearest 100  ->  49 000
0.0070463 to 2 sf          ->  0.0070
3.0951 to 2 dp             ->  3.10
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-estimation-and-using-a-calculator--01-rounding-number-line.webp" width="900" height="960" alt="Two number lines show 46 285 between 46 200 and 46 300, past the halfway point 46 250, so it rounds up to 46 300. Between 46 000 and 47 000 it lies before halfway 46 500, so it rounds to 46 000." loading="lazy">
  <figcaption>Compare 46 285 with the halfway point to round to the nearest 100 or 1000.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-estimation-and-using-a-calculator--02-significant-figures.webp" width="900" height="900" alt="The digits of 0.07049 are boxed. The leading zeros are greyed because they never count; counting starts at the 7. The digit after the last kept one decides: 0 and 4 leave it (0.07, 0.070) and 9 rounds up (0.0705)." loading="lazy">
  <figcaption>Count significant figures from the first non-zero digit and keep zeros that show accuracy, as in 0.070.</figcaption>
</figure>


## 4.01b Estimation

**Method in steps**

1. Round each number to 1 sf (or to a convenient number if the question says so).
2. For a root, use the nearest perfect square.
3. Work out the simpler calculation without a calculator.
4. Write the answer with ≈.

| Situation | What happens |
|---|---|
| Every number in a product rounded up | Estimate is too big |
| Numerator rounded up, denominator rounded down | Estimate is too big |
| Some up, some down | Effects can cancel, so check each |

**Worked reminder.** (59.2 + 11.8) ÷ (0.203 × 7.1) ≈ (60 + 10) ÷ (0.2 × 7) = 70 ÷ 1.4 = 50.

**Worked reminder.** 3.6 kg at £7.95 per kg ≈ 4 × 8 = £32.

**Checking a calculator answer.** If your estimate is near 0.64 and the calculator shows 6.49, a key or decimal point is wrong. Estimates catch factors of 10 quickly.

**The symbol ≈** means "approximately equal to". Use it for estimates and for rounded decimal answers. Use = only for exact values.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-rounding-estimation-error-intervals-and-bounds--01-estimate-with-root.webp" width="900" height="740" alt="Number line of perfect squares with 24.3 close to 25, then the estimate (8 x 0.4) / 5 = 0.64 beside the calculator value 0.649." loading="lazy">
  <figcaption>Replace the number under the root by the nearest perfect square, then estimate.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-rounding-estimation-error-intervals-and-bounds--02-estimate-fraction.webp" width="900" height="700" alt="Top 59.2 + 11.8 rounds to 60 + 10 = 70; bottom 0.203 x 7.1 rounds to 0.2 x 7 = 1.4; 70 / 1.4 = 50 against the calculator 49.3." loading="lazy">
  <figcaption>Round and work out the top and bottom separately, then divide.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-estimation-and-using-a-calculator--03-estimate-calculation.webp" width="900" height="800" alt="62.4, 0.187 and 3.87 are rounded to 60, 0.2 and 4. The estimate is (60 x 0.2) / 4 = 3. On a number line it lies right next to the calculator value 3.015." loading="lazy">
  <figcaption>Round every number to 1 s.f., write the rounded calculation, and work it out.</figcaption>
</figure>


## 4.01c Error intervals

| Value | Accuracy | Error interval |
|---|---|---|
| 2.1 | rounded to 1 dp | 2.05 ≤ x < 2.15 |
| 2.1 | truncated to 1 dp | 2.1 ≤ x < 2.2 |
| 60 | nearest 10 | 55 ≤ x < 65 |
| 2400 | 2 sf | 2350 ≤ x < 2450 |
| 0.58 | truncated to 2 dp | 0.58 ≤ x < 0.59 |

**Method in steps (rounded)**

1. Find the unit of the rounding (10, 0.1, 0.01 ...).
2. Halve it.
3. Lower limit: subtract the half-unit. Include it with ≤.
4. Upper limit: add the half-unit. Exclude it with <.

**Method (truncated).** Lower limit is the value. Upper limit is the value plus one whole unit. Use ≤ then <.

**Limits of accuracy in context.** "Can you be sure?" asks whether it works for every value in the interval. Compare the worst case for the object with the worst case for the space.

- Object certainly fits when its largest possible size is less than or equal to the smallest possible gap.
- If the ranges overlap, you cannot be sure.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-rounding-estimation-error-intervals-and-bounds--05-error-interval-rounded-truncated.webp" width="900" height="840" alt="A number line from 2.00 to 2.25. For 2.1 rounded to 1 decimal place the true value lies from 2.05, included, up to 2.15, not included: half a unit either side. For 2.1 truncated to 1 decimal place the digits were cut off, so the true value lies from 2.1, included, up to 2.2, not included: a whole unit above. The value 2.1 is marked on both lines." loading="lazy">
  <figcaption>Rounded to 1 dp, 2.1 stands for 2.05 ≤ x &lt; 2.15; truncated, it stands for 2.1 ≤ x &lt; 2.2.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-rounding-estimation-error-intervals-and-bounds--05-error-interval-nearest-10-2sf.webp" width="900" height="810" alt="Number lines for a = 60 to the nearest 10 (55 &lt;= a &lt; 65) and d = 2400 to 2 s.f. (2350 &lt;= d &lt; 2450), each with half the unit either side, filled dot at the lower end and open ring at the upper." loading="lazy">
  <figcaption>Half the rounding unit each side; include the lower end only.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-number--04-limits-of-accuracy.webp" width="900" height="810" alt="A number line from 4.50 to 4.70 kg shades the values from 4.55 to 4.65 that round to 4.6 kg. The lower bound 4.55 is included (filled dot); the upper bound 4.65 is not (open dot)." loading="lazy">
  <figcaption>A value given to 1 d.p. can be up to half a unit (0.05) either side: 4.55 &lt;= mass &lt; 4.65.</figcaption>
</figure>


## Bounds of calculations (Higher tier only)

| Answer | Add | Subtract | Multiply | Divide |
|---|---|---|---|---|
| Upper bound | UB + UB | UB − LB | UB × UB | UB ÷ LB |
| Lower bound | LB + LB | LB − UB | LB × LB | LB ÷ UB |

**Method in steps**

1. Write an error interval for each given value.
2. Pick the bounds that make the answer largest, then smallest.
3. Calculate both with the full values, no rounding yet.
4. Round both results. If they agree to some accuracy, that is the justified accuracy for the final answer.

**Worked reminder.** Rectangle 7.2 cm by 3.9 cm to 1 dp: upper bound of area 7.25 × 3.95 = 28.6375, lower bound 7.15 × 3.85 = 27.5275. They differ to 2 sf (29 and 28), but both are 30 to 1 sf.

**Worked reminder.** Speed = distance ÷ time with 700 m (nearest 100 m) and 56 s (nearest second). Upper bound 750 ÷ 55.5 = 13.51, lower bound 650 ÷ 56.5 = 11.50. They agree only to 1 sf (both round to 10), so the speed is 10 m/s to 1 sf. Quoting 13 or 12 would not be justified.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-rounding-estimation-error-intervals-and-bounds--07-bounds-of-area.webp" width="900" height="1075" alt="A rectangle drawn to scale. The smallest possible rectangle is 7.15 by 3.85 cm, area 27.5275 square centimetres. The largest possible rectangle is 7.25 by 3.95 cm, drawn with a dashed outline around it, area 28.6375 square centimetres. A number line of area shows the lower bound, the nominal area 7.2 times 3.9 equals 28.08 and the upper bound, with 28.08 between them." loading="lazy">
  <figcaption>The area of a 7.2 by 3.9 rectangle (1 dp) lies between 27.5275 and 28.6375 cm².</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-rounding-estimation-error-intervals-and-bounds--03-bounds-subtract-divide.webp" width="900" height="1030" alt="For x - y the upper bound uses the top of x and the bottom of y (4.80), the lower bound the reverse (4.60). For cost divided by length the bounds are 3.032 and 2.968, both 3 to 1 s.f." loading="lazy">
  <figcaption>For subtraction and division the second quantity uses the opposite end of its interval.</figcaption>
</figure>


## Discrete versus continuous (Higher tier only)

| Quantity | Example | Interval |
|---|---|---|
| Continuous (measured) | 200 g to the nearest 100 g | 150 ≤ m < 250 |
| Discrete (counted) | 200 cars to the nearest hundred | 150 ≤ n ≤ 249 |

The discrete interval can also be written 150 ≤ n < 250. The largest whole number allowed is 249. Do not write 249.9 for a count.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-rounding-estimation-error-intervals-and-bounds--04-discrete-continuous.webp" width="900" height="870" alt="A continuous mass of 200 g is a bar 150 &lt;= m &lt; 250 ending in an open ring; a discrete count of 200 cars is 100 whole numbers 150 to 249 with 250 crossed out." loading="lazy">
  <figcaption>Continuous bounds are never reached; counted values stop at 249.</figcaption>
</figure>


## Wording that gains credit

- Estimates: show the rounded numbers, the simple calculation, then the answer with ≈.
- Error intervals: write both ends with inequality symbols in one statement, such as 55 ≤ x < 65.
- Fit questions: state the largest size of the object and the smallest size of the space, then compare them.
- Bounds: label each as an upper or lower bound and show the substituted values.
- Final accuracy: say which figures both bounds share, then round to that.

## Worked reminders in context

**Error interval in context.** A bag is labelled 2.5 kg to the nearest 0.1 kg. Half of 0.1 is 0.05, so 2.45 ≤ m < 2.55. A bag of exactly 2.55 kg would be labelled 2.6 kg, so it is excluded.

**Truncated timing.** A stopwatch shows 12.3 s, truncating after the first decimal place. The real time is at least 12.3 and under 12.4: 12.3 ≤ t < 12.4.

**Subtraction bound (Higher tier only).** Gap = 20.5 cm (1 dp) minus a pipe of 4.2 cm (1 dp). Upper bound of the gap left is 20.55 − 4.15 = 16.40. Lower bound is 20.45 − 4.25 = 16.20.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-rounding-estimation-error-intervals-and-bounds--06-cabinet-and-gap.webp" width="900" height="900" alt="Two bands on a number line from 74.4 to 75.6 cm. The cabinet width can be anywhere from 74.5, included, to 75.5, not included. The gap width has the same interval. The worst case is a cabinet of 75.4 cm and a gap of 74.6 cm, so the cabinet is 0.8 cm too wide. You cannot be sure it fits, because the smallest possible gap, 74.5, is not at least as large as the largest possible cabinet, 75.5." loading="lazy">
  <figcaption>A 75 cm cabinet could be 75.4 cm and a 75 cm gap 74.6 cm, so you cannot be sure it fits.</figcaption>
</figure>


## Must-know distinctions

- **Rounded versus truncated.** Rounded intervals go half a unit each side. Truncated intervals go one unit up from the value.
- **Decimal places versus significant figures.** 0.0407 to 2 dp is 0.04, but to 2 sf is 0.041.
- **Bound versus value.** The upper bound of a rounded value is never reached, but you use it in calculations.
- **Estimate versus exact.** Estimates use ≈ and need visible rounding.
- **Accuracy of an answer versus accuracy of the working.** Round at the end.

## Quick self-test

1. Round 0.0407 to 2 dp and to 2 sf.
2. Estimate 4.9 × 61 ÷ 0.52 without a calculator.
3. Write an error interval for x = 8.5 rounded to 1 dp.
4. Write an error interval for y = 9.4 truncated to 1 dp.
5. A mass m is 340 g to the nearest 10 g. Write an error interval.
6. Estimate √(80.3) × 4.1 ÷ 2.9.
7. (Higher tier only) a = 5.2 and b = 3.8, both to 1 dp. Find the upper bound of a − b.
8. (Higher tier only) A square has side 4.0 cm to 1 dp. Find the lower bound of its area.
9. (Higher tier only) 1500 people to the nearest hundred attend a fair. Write the interval for the number n.
10. (Higher tier only) p = 9.6 and q = 2.4, both to 1 dp. Find the lower bound of p ÷ q to 3 sf.

### Answers

1. 0.04 (2 dp) and 0.041 (2 sf).
2. 5 × 60 ÷ 0.5 = 600, so ≈ 600.
3. 8.45 ≤ x < 8.55.
4. 9.4 ≤ y < 9.5.
5. 335 ≤ m < 345.
6. √81 = 9, so 9 × 4 ÷ 3 = 12, so ≈ 12.
7. 5.25 − 3.75 = 1.5.
8. 3.95² = 15.6025 (about 15.6 cm²).
9. 1450 ≤ n ≤ 1549 (or 1450 ≤ n < 1550).
10. 9.55 ÷ 2.45 = 3.8979..., so 3.90 to 3 sf. (Lower bound of p is 9.55, upper bound of q is 2.45.)

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-estimation-and-using-a-calculator--07-dont-round-early.webp" width="900" height="890" alt="A circle has circumference 30 cm, so r = 30 / (2 pi) = 4.774648... cm. Using the full value in A = pi r^2 gives 71.6 cm squared; using the rounded 4.77 gives 71.5, which is wrong." loading="lazy">
  <figcaption>Carry the full calculator value forward and round only the final answer.</figcaption>
</figure>


## Where marks are usually lost

- Writing an upper limit with ≤ for a continuous rounded quantity.
- Dropping a final zero, for example giving 3.1 when 2 dp was asked.
- Using the wrong bound for the denominator or the subtracted term.
- Rounding bounds too early, before the calculation is complete.
- Giving a final answer to more figures than the bounds support, with no justification.
- Estimating without showing the rounded values, so the method cannot be followed.
- Using a calculator value as an "estimate" instead of rounding first.
- Saying "it fits" without comparing the worst cases.
- Giving 249.9 or 250 as the greatest discrete value instead of 249.
- Truncating when the question says rounding, or the other way round.

## Frequently asked questions

**Do zeros count as significant figures?**
Zeros before the first non-zero digit of a decimal are only place holders and do not count. Zeros between other digits do count, and final zeros must be kept, so 0.0070 is given to 2 significant figures.

**What is the difference between a rounded and a truncated error interval?**
A rounded value has an interval half a unit either side, such as 2.05 ≤ x < 2.15 for 2.1 to 1 decimal place. A truncated value is the lower end and the interval goes one whole unit up, so 2.1 truncated gives 2.1 ≤ x < 2.2.

**How do you find the upper bound of a division using bounds?**
Divide the upper bound of the numerator by the lower bound of the denominator. For the lower bound, divide the lower bound of the numerator by the upper bound of the denominator; this is Higher tier only.

**How do you decide the accuracy of an answer calculated from bounds?**
Round both the upper and lower bounds and give the answer to the accuracy at which they agree. Quoting more figures than both bounds share is not justified.

## Official syllabus

OCR, GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, section 4.01 Approximation and estimation (4.01a to 4.01c).
