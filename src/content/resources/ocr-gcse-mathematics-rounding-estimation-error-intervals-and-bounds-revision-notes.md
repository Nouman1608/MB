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

## Discrete versus continuous (Higher tier only)

| Quantity | Example | Interval |
|---|---|---|
| Continuous (measured) | 200 g to the nearest 100 g | 150 ≤ m < 250 |
| Discrete (counted) | 200 cars to the nearest hundred | 150 ≤ n ≤ 249 |

The discrete interval can also be written 150 ≤ n < 250. The largest whole number allowed is 249. Do not write 249.9 for a count.

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

## Official syllabus

OCR, GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, section 4.01 Approximation and estimation (4.01a to 4.01c).
