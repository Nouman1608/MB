---
title: "Edexcel International GCSE Mathematics A 4MA1: Degree of accuracy and standard form -- Study Guide"
seoTitle: "Edexcel IGCSE Maths 4MA1 Bounds and Standard Form Guide"
resourceType: "study-guides"
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
description: "4MA1 study guide to sections 1.8 and 1.9: rounding, significant figures, estimation, upper and lower bounds and standard form, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

This guide teaches sections **1.8 (Degree of accuracy)** and **1.9 (Standard form)** of Topic 1, Numbers and the number system, in the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2 (November 2017), for the January and June series examined on it. Both sections appear on the Foundation and Higher tiers. The Higher tier adds two statements, solving problems with bounds (1.8A) and solving problems involving standard form (1.9A); these are labelled **Higher tier only** below. Higher tier papers assume all Foundation content, so Higher candidates need every section on this page.

Course hub: [Edexcel IGCSE Mathematics](/boards/edexcel/igcse/mathematics/). Tick each statement off on the [printable checklist](/checklists/edexcel/igcse/mathematics/). For a quick recap use the [revision notes](/resources/edexcel-igcse-maths-4ma1-degree-of-accuracy-and-standard-form-revision-notes/), then test yourself with the [practice questions](/resources/edexcel-igcse-maths-4ma1-degree-of-accuracy-and-standard-form-practice/). The whole of Topic 1 is summarised in the [Numbers and the number system overview](/resources/igcse-edexcel-mathematics-numbers-and-the-number-system/) and the [topic revision notes](/resources/edexcel-igcse-mathematics-number-revision-notes/).

## What this unit covers

| Spec statement | What you must be able to do | Tier |
|---|---|---|
| 1.8A | Round integers to a given power of 10 | Both tiers |
| 1.8B | Round to a given number of significant figures or decimal places | Both tiers |
| 1.8C | Identify upper and lower bounds where values are given to a degree of accuracy | Both tiers |
| 1.8D | Use estimation to evaluate approximations to numerical calculations (by rounding values to 1 significant figure) | Both tiers |
| 1.9A (Foundation) | Calculate with and interpret numbers in the form a × 10ⁿ, where n is an integer and 1 ≤ a < 10 | Both tiers |
| 1.8A (Higher) | Solve problems using upper and lower bounds where values are given to a degree of accuracy | Higher tier only |
| 1.9A (Higher) | Solve problems involving standard form | Higher tier only |

A calculator may be used on every 4MA1 paper. You still need to show working: method marks are given for the steps, not for a bare calculator answer.

## 1.8A Rounding integers to a power of 10

"To the nearest 10, 100, 1000 ..." means to a power of 10. Find the digit in that place, then look at the digit to its right. If it is 5 or more, round up; if it is 4 or less, keep the digit. Every place to the right becomes 0.

**Worked example.** Round 57 482 to the nearest 10, 100, 1000 and 10 000.

```
nearest 10:     57 48|2   -> 2 < 5, keep   -> 57 480
nearest 100:    57 4|82   -> 8 >= 5, up    -> 57 500
nearest 1000:   57 |482   -> 4 < 5, keep   -> 57 000
nearest 10 000: 5|7 482   -> 7 >= 5, up    -> 60 000
```

Always round from the original number, not from your previous answer.

## 1.8B Significant figures and decimal places

**Decimal places (d.p.)** count digits after the decimal point. **Significant figures (s.f.)** count from the first non-zero digit, wherever it is.

- Zeros at the start of a decimal (0.00**6**...) are never significant. They only show place value.
- Zeros between non-zero digits (7.**0**3) are significant.
- When you round a large number to s.f., fill the places up to the decimal point with zeros so the size stays the same.
- If rounding leaves a trailing zero, keep it: it shows the accuracy.

**Worked example.**

| Number | Instruction | Working | Answer |
|---|---|---|---|
| 0.006 071 8 | 3 s.f. | first s.f. is 6; next digit after 607 is 1 | 0.006 07 |
| 0.006 071 8 | 2 s.f. | 60 then 7, round up | 0.0061 |
| 38 649.5 | 2 s.f. | 38 then 6, round up; fill with zeros | 39 000 |
| 4.997 12 | 2 d.p. | 4.99 then 7, round up; 4.99 → 5.00 | 5.00 |
| 7.0349 | 3 s.f. | 7.03 then 4, keep | 7.03 |

Writing 38 649.5 to 2 s.f. as "39" loses the mark: the answer must still be about thirty-eight thousand. Writing 4.99712 to 2 d.p. as "5" also loses it: 2 d.p. means two digits after the point, so 5.00.

## 1.8C Upper and lower bounds

A rounded value stands for a range of possible true values. The **lower bound** is the smallest value that rounds to it. The **upper bound** is the boundary at the top: it would itself round up to the next value, but every number just below it rounds to the given value.

**Method:** find the unit the value was rounded to, halve it, then subtract and add that half.

| Value given | Rounded to | Half unit | Lower bound | Upper bound |
|---|---|---|---|---|
| 6.4 kg | 1 d.p. (unit 0.1) | 0.05 | 6.35 kg | 6.45 kg |
| 2300 m | nearest 100 | 50 | 2250 m | 2350 m |
| 0.72 litres | 2 s.f. (unit 0.01) | 0.005 | 0.715 litres | 0.725 litres |
| 3600 g | 2 s.f. (unit 100) | 50 | 3550 g | 3650 g |
| 14 s | nearest second | 0.5 | 13.5 s | 14.5 s |

You can write the range as an inequality: for the mass, 6.35 ≤ m < 6.45. The lower bound is included (6.35 rounds up to 6.4). The upper end uses < because 6.45 rounds to 6.5, but exam questions still expect 6.45 to be written as "the upper bound".

## 1.8D Estimation

To estimate, round **every** number to 1 significant figure, then work out the simpler calculation. Show the rounded numbers: that is where the method mark is.

**Worked example 1.** Estimate (412 × 6.87) ÷ 0.0492.

```
412 -> 400     6.87 -> 7     0.0492 -> 0.05
(400 x 7) / 0.05 = 2800 / 0.05 = 2800 x 20 = 56 000
```

The calculator value is 57 529.3 (1 d.p.), so 56 000 is a sensible estimate. Dividing by 0.05 is the same as multiplying by 20, a useful trick.

**Worked example 2.** Estimate 19.7² ÷ (3.12 + 0.98).

```
19.7 -> 20     3.12 -> 3     0.98 -> 1
20² / (3 + 1) = 400 / 4 = 100
```

The calculator gives 94.7 (3 s.f.). The estimate is larger because 19.7 was rounded up and then squared.

## 1.8A Solving problems with bounds -- Higher tier only

Once you have the bounds of each measurement, choose the combination that makes the answer as large, or as small, as possible.

| To find the... | of a + b | of a − b | of a × b | of a ÷ b |
|---|---|---|---|---|
| upper bound | upper + upper | upper − **lower** | upper × upper | upper ÷ **lower** |
| lower bound | lower + lower | lower − **upper** | lower × lower | lower ÷ **upper** |

The logic: subtracting or dividing by a **smaller** number gives a **bigger** answer. Do not memorise the table blindly; ask "which value makes this as big as possible?" for each quantity in a formula.

**Worked example (speed).** A runner covers 250 m, correct to the nearest 10 m, in 31.4 seconds, correct to 1 decimal place. Work out the upper and lower bounds of the average speed, then give the speed to a suitable degree of accuracy.

```
distance d: 245 <= d < 255        time t: 31.35 <= t < 31.45

speed = d / t
upper bound = 255 / 31.35 = 8.1339...  m/s
lower bound = 245 / 31.45 = 7.7901...  m/s
```

**Suitable degree of accuracy.** Round both bounds to the same accuracy and see where they agree.

```
to 2 s.f.:  8.1   and 7.8   -> different
to 1 s.f.:  8     and 8     -> the same
```

So the speed is **8 m/s to 1 significant figure**. You must show both bounds rounded and state why you chose that accuracy; the bare answer "8" is not enough.

## 1.9A Standard form

A number in standard form is written **a × 10ⁿ**, where **1 ≤ a < 10** and **n is an integer**. The specification's own example is 150 000 000 = 1.5 × 10⁸.

### Converting

- Big numbers have a positive power: 4 070 000 = 4.07 × 10⁶ (the point moves 6 places).
- Small numbers have a negative power: 0.000 039 1 = 3.91 × 10⁻⁵ (the point moves 5 places to sit after the 3).
- Back to ordinary form: 6.2 × 10⁻³ = 0.0062 (move the point 3 places left).

### Interpreting and ordering

Compare the powers first; only if they match, compare the a values. In order of size, smallest first:

```
2.9 x 10^-3,  0.031,  3.4 x 10^-2,  4.1 x 10^-2
```

Rewrite 0.031 as 3.1 × 10⁻² to see it sits between 2.9 × 10⁻³ and 3.4 × 10⁻².

A calculator may show 1.35E5 or 1.35 × 10⁰⁵. In your answer write it as 1.35 × 10⁵, never "1.35E5".

### Multiplying and dividing

Deal with the a parts and the powers of 10 separately, using index laws (add powers to multiply, subtract to divide). Then make sure the front number is between 1 and 10.

```
(4.5 x 10^6) x (3 x 10^-2) = 13.5 x 10^4 = 1.35 x 10^5
(2.1 x 10^3) / (7 x 10^8)  = 0.3 x 10^-5  = 3 x 10^-6
```

13.5 is too big, so divide it by 10 and add 1 to the power. 0.3 is too small, so multiply it by 10 and subtract 1 from the power.

### Adding and subtracting

You cannot add the a parts unless the powers match. Convert to ordinary numbers (or to the same power), then convert back.

```
5.6 x 10^4 + 8.3 x 10^3 = 56 000 + 8300 = 64 300 = 6.43 x 10^4
```

## 1.9A Solving problems involving standard form -- Higher tier only

At Higher tier the standard form sits inside a problem: a context, a percentage, a power or root, or an expression in n.

**Worked example 1 (context).** One bacterium has a mass of 2.4 × 10⁻¹² g. How many bacteria have a total mass of 6 g?

```
6 / (2.4 x 10^-12) = 2.5 x 10^12 bacteria
```

**Worked example 2 (powers and roots).**

```
(3 x 10^4)^2 = 3^2 x 10^8 = 9 x 10^8
sqrt(1.6 x 10^9) = sqrt(16 x 10^8) = 4 x 10^4
```

For a square root, make the power of 10 even first (here 1.6 × 10⁹ = 16 × 10⁸).

**Worked example 3 (percentage).** A city's annual water use is 3.6 × 10⁷ m³. It rises by 15%. New use = 3.6 × 10⁷ × 1.15 = **4.14 × 10⁷ m³**.

**Worked example 4 (algebraic power).** a = 5 × 10ⁿ, where n is an integer. Write a² in standard form.

```
a^2 = 25 x 10^(2n) = 2.5 x 10^1 x 10^(2n) = 2.5 x 10^(2n+1)
```

## Common errors

- Counting the leading zeros of 0.006 071 8 as significant figures.
- Dropping the zeros when rounding a large number to s.f. (39 instead of 39 000).
- Giving a lower bound of 6.3 for 6.4 kg (1 d.p.): the half unit is 0.05, not 0.1.
- Rounding to the nearest whole number instead of 1 s.f. in an estimate, or not showing the rounded values.
- Using upper ÷ upper for the upper bound of a quotient (Higher).
- Leaving 13.5 × 10⁴ or 0.3 × 10⁻⁵ as a final answer: neither is standard form.
- Adding the a parts when the powers are different.

## Next steps

Condense this page with the [revision notes](/resources/edexcel-igcse-maths-4ma1-degree-of-accuracy-and-standard-form-revision-notes/), then try the [practice questions](/resources/edexcel-igcse-maths-4ma1-degree-of-accuracy-and-standard-form-practice/). For mixed Topic 1 questions use the [Numbers and the number system practice](/resources/edexcel-igcse-mathematics-number-practice/). To find gaps across the course, try a free [diagnostic](/diagnostics/).

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification, Issue 2, November 2017, first examination June 2018. Published by Pearson Education Limited.
