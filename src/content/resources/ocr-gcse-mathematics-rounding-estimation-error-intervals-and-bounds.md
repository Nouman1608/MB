---
title: "OCR GCSE Mathematics: Rounding, estimation, error intervals and bounds (J560)"
seoTitle: "OCR GCSE Maths Rounding, Estimation and Bounds Guide"
resourceType: "study-guides"
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
description: "Study guide to rounding, estimation, error intervals and upper and lower bounds for OCR GCSE Mathematics J560, with worked examples for both tiers."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide is aligned to the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026). It covers section 4.01 (Approximation and estimation): 4.01a rounding, 4.01b estimation and 4.01c upper and lower bounds. Most of it is assessed at both tiers. Calculating the bounds of a calculation, and the difference between discrete and continuous bounds, is **Higher tier only**.

Because the specification allows any content to appear on either kind of paper, practise each skill by hand as well as with a calculator. Related pages: the [revision notes](/resources/ocr-gcse-mathematics-rounding-estimation-error-intervals-and-bounds-revision-notes/), the [practice questions](/resources/ocr-gcse-mathematics-rounding-estimation-error-intervals-and-bounds-practice/), the [OCR GCSE Mathematics hub](/boards/ocr/gcse/mathematics/), the [printable checklist](/checklists/ocr/gcse/mathematics/), the [number operations study guide](/resources/ocr-gcse-mathematics-number-operations-and-integers/) and the [10-minute diagnostics](/diagnostics/).

## What this unit covers

| Ref | What you must be able to do | Tier |
|---|---|---|
| 4.01a | Round to the nearest whole number, ten, hundred and so on, to a stated number of sf, or to a stated number of dp | Both |
| 4.01a | Round answers to an appropriate level of accuracy | Both |
| 4.01b | Estimate or check a result without a calculator using suitable approximations | Both |
| 4.01b | Estimate more complex calculations including roots; use the symbol ≈ appropriately | Both |
| 4.01c | Use inequality notation to write an error interval for a number rounded or truncated to a given accuracy | Both |
| 4.01c | Apply and interpret limits of accuracy, for example whether an object fits a space | Both |
| 4.01c | Calculate the upper and lower bounds of a calculation using numbers rounded to a known accuracy | Higher tier only |
| 4.01c | Understand the difference between bounds of discrete and continuous quantities | Higher tier only |

## 4.01a Rounding

Pick out the rounding digit, then inspect its right-hand neighbour. A neighbour of 5, 6, 7, 8 or 9 adds one to the rounding digit. A neighbour of 0 to 4 leaves it unchanged. Whole-number places that are dropped become zeros, so the size of the number is kept.

- **Nearest ten, hundred, thousand:** the rounding digit sits in the column named, such as the tens or the hundreds.
- **Decimal places (dp):** count digits after the decimal point.
- **Significant figures (sf):** the first significant figure is the first digit that is not zero. A zero before it, as in 0.0070, is only a place holder. A zero sandwiched between other digits counts.

### Worked example 1

Round (a) 48 996 to the nearest hundred, (b) 0.0070463 to 2 sf, (c) 3.0951 to 2 dp.

```
(a) Hundreds digit is 9; next digit is 9, so round up: 49 000
    (the 9 carries into the thousands)
(b) First significant figure is the 7 (the zeros before it do not count).
    2 sf means 7 and 0. Next digit is 4, so the 0 stays.
    0.0070463 -> 0.0070
(c) 2 dp means 3.09. Next digit is 5, so round up: 3.10
```

The final zeros in (b) and (c) are not optional. 0.0070 shows 2 sf and 3.10 shows 2 dp. Writing 0.007 or 3.1 changes the accuracy you claim.

### Rounding answers to an appropriate level of accuracy

Round the final answer, never the working. Keep the full display, or at least two more figures than you need, until the last line. Then choose an accuracy that matches the data. A result should not look more precise than the numbers it came from. If a question tells you the accuracy, use it. If it does not, 3 significant figures is a sensible default for measurements, and money is given to the nearest penny.

### Worked example 2

A ribbon 18.4 m long is cut into 7 equal pieces. How long is each piece?

```
18.4 / 7 = 2.628571...
```

The ribbon length has 3 sf, so give the answer to 3 sf: **2.63 m**. Writing 2.628571 m would claim accuracy to a millionth of a metre.

## 4.01b Estimation

An estimate lets you check an answer and spot a slip with a decimal point. Round every number to 1 significant figure (unless the question says otherwise), then do a calculation you can finish in your head. Write the result with ≈, not =.

### Worked example 3

Estimate the cost of 3.6 kg of cheese at £7.95 per kg.

```
3.6 -> 4,   7.95 -> 8
4 x 8 = 32
cost ≈ £32
```

The exact cost is £28.62. Both numbers were rounded up, so the estimate is bigger than the true value. Whenever you round every number in a product up, the estimate is an overestimate. Rounding some up and some down can partly cancel.

### Complex calculations, including roots

For a square root, replace the number under the root by the nearest perfect square, then take the root. For a quotient, round so the division is easy: a denominator rounded to 1 sf often leaves a convenient quotient.

### Worked example 4

Estimate (7.8 × 0.41) ÷ √24.3.

```
7.8 -> 8      0.41 -> 0.4      24.3 -> 25, so sqrt = 5
(8 x 0.4) / 5 = 3.2 / 5 = 0.64
(7.8 x 0.41) / sqrt(24.3) ≈ 0.64
```

The calculator value is 0.649, so the estimate is close. If your calculator gave 6.49 or 0.0649, the estimate would show the keying error at once.

### Worked example 5

Estimate (59.2 + 11.8) ÷ (0.203 × 7.1).

```
Numerator:   60 + 10 = 70
Denominator: 0.2 x 7 = 1.4
70 / 1.4 = 50
(59.2 + 11.8) / (0.203 x 7.1) ≈ 50
```

Work out the top and the bottom separately, then divide. Show every rounded value so the method can be followed.

## 4.01c Error intervals

A rounded value stands for a whole range of true values. An **error interval** states that range with inequalities.

- **Rounded:** half a unit either side. The lower end is included. The upper end is **not**, because the true value would then round up.
- **Truncated:** digits are cut off, never rounded. The value is the lower end, and the upper end is one whole unit above (not included).

Method: find the unit of the rounding, halve it, subtract it for the lower limit and add it for the upper limit.

| Value | Accuracy | Error interval |
|---|---|---|
| 2.1 | rounded to 1 dp | 2.05 ≤ x < 2.15 |
| 2.1 | truncated to 1 dp | 2.1 ≤ x < 2.2 |
| 60 | nearest 10 | 55 ≤ x < 65 |

### Worked example 6

Write an error interval for each: (a) a = 60 to the nearest 10, (b) b = 3.7 rounded to 1 dp, (c) c = 0.58 truncated to 2 dp, (d) d = 2400 to 2 sf.

```
(a) half of 10 = 5:           55 <= a < 65
(b) half of 0.1 = 0.05:       3.65 <= b < 3.75
(c) truncated, unit 0.01:     0.58 <= c < 0.59
(d) 2 sf: the 4 is in the hundreds, unit 100, half = 50:
                              2350 <= d < 2450
```

Always check by testing the ends: 2350 rounds to 2400 (to 2 sf), 2449 does too, 2450 does not.

### Limits of accuracy in context

Use the limits to decide whether something is certain. "Can you be sure?" means every value in the interval must work.

### Worked example 7

A cabinet is 75 cm wide to the nearest cm. The gap for it is 75 cm wide to the nearest cm. Can you be sure the cabinet fits?

```
Cabinet:  74.5 <= w < 75.5
Gap:      74.5 <= g < 75.5
```

The cabinet could be 75.4 cm while the gap is 74.6 cm. So **no, you cannot be sure**. The cabinet fits only if the gap is at least as wide as the cabinet. To be certain you need the smallest possible gap to be at least the largest possible cabinet. Here 74.5 is not at least 75.5.

## 4.01c Bounds of calculations (Higher tier only)

The **upper bound** of a measurement is the top of its error interval, and the **lower bound** is the bottom. Use the upper bound as the limit even though the value itself never reaches it. For a calculation, choose bounds that make the answer as big, or as small, as possible.

| To get the... | Add | Subtract | Multiply | Divide |
|---|---|---|---|---|
| Upper bound of the answer | UB + UB | UB − LB | UB × UB | UB ÷ LB |
| Lower bound of the answer | LB + LB | LB − UB | LB × LB | LB ÷ UB |

For subtraction and division, the second quantity works against you: a bigger number taken away gives a smaller answer. Positive quantities only are assumed in this table.

### Worked example 8

A rectangle measures 7.2 cm by 3.9 cm, each to 1 dp. Find the bounds of its area.

```
Length: 7.15 <= l < 7.25     Width: 3.85 <= w < 3.95
Upper bound of area = 7.25 x 3.95 = 28.6375 cm²
Lower bound of area = 7.15 x 3.85 = 27.5275 cm²
```

The area 7.2 × 3.9 = 28.08 lies between the two, as it should.

### Worked example 9

x = 12.6 and y = 7.9, both to 1 dp. Find the upper and lower bounds of x − y.

```
Upper bound = 12.65 - 7.85 = 4.80
Lower bound = 12.55 - 7.95 = 4.60
```

### Worked example 10 (division and a sensible final answer)

A roll of fencing costs £37.50 to the nearest 50p and is 12.5 m long to 1 dp. Find the cost per metre to a suitable accuracy.

```
Cost:   37.25 <= C < 37.75      Length: 12.45 <= L < 12.55
Upper bound of C/L = 37.75 / 12.45 = 3.0321...
Lower bound of C/L = 37.25 / 12.55 = 2.9681...
```

Both bounds round to 3 to 1 sf, so the cost per metre is **£3 to 1 sf**. Rounding to 3.0 would not be justified, because the bounds already differ in the first decimal place (3.0 and 2.9). **To choose the accuracy, round both bounds and give the figure only if they agree.**

### Discrete and continuous quantities (Higher tier only)

A **continuous** quantity such as length, mass or time can take any value, so the upper limit is a bound that is never reached: 150 ≤ m < 250 for a mass of 200 g to the nearest 100 g.

A **discrete** quantity is counted, so only whole numbers occur. The spec's example: 200 cars to the nearest hundred gives 150 ≤ n ≤ 249, or equivalently 150 ≤ n < 250. The greatest possible number is 249, because 250 would round up to 300.

## Common errors

- Stopping at 3.1 when asked for 2 dp of 3.0951. Keep the zero: 3.10.
- Writing ≤ at the upper end of a rounded continuous interval.
- Adding the half-unit to a truncated value instead of a whole unit.
- Using the lower bound of the denominator for the lower bound of a quotient. It needs the upper bound.
- Quoting a final answer to more figures than the bounds agree on.
- Estimating with 3 or 4 digit numbers, which defeats the point of an estimate.

## Next steps

Read the condensed [revision notes](/resources/ocr-gcse-mathematics-rounding-estimation-error-intervals-and-bounds-revision-notes/) next, and then work through the [practice questions](/resources/ocr-gcse-mathematics-rounding-estimation-error-intervals-and-bounds-practice/) under timed conditions.

## Official syllabus

OCR, GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, section 4.01 Approximation and estimation (4.01a to 4.01c).
