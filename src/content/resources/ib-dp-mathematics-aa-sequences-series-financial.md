---
title: "IB DP Mathematics: Analysis and Approaches -- Sequences, series and financial applications Study Guide"
seoTitle: "IB Maths AA Sequences, Series and Finance Study Guide"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Sequences, series and financial applications"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-1"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-2"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-3"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-4"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-8"
description: "IB DP Maths AA study guide to standard form, arithmetic and geometric sequences, sigma notation, compound interest, depreciation and infinite sums."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the sequences, series and financial applications unit of IB Diploma Programme Mathematics: Analysis and Approaches from scratch. It is aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 1.1, 1.2, 1.3, 1.4 and 1.8, which are common content for SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

When you have worked through it, use the [revision notes](/resources/ib-dp-mathematics-aa-sequences-series-financial-revision-notes/) for quick recall and the [practice questions](/resources/ib-dp-mathematics-aa-sequences-series-financial-practice/) to test yourself. The [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/) show where this unit sits in the whole course.

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 1.1 | Calculate with numbers in the form a × 10ᵏ, where 1 ≤ a < 10 and k is an integer | SL and HL |
| 1.2 | Use the nth term and sum formulas for arithmetic sequences; sigma notation; applications such as simple interest; approximate a common difference when real data is not perfectly arithmetic | SL and HL |
| 1.3 | Use the nth term and sum formulas for geometric sequences; sigma notation; applications such as population growth, spread of disease and salary change | SL and HL |
| 1.4 | Compound interest (yearly, half-yearly, quarterly or monthly) and annual depreciation; the real value of an investment after inflation | SL and HL |
| 1.8 | Find the sum of an infinite convergent geometric series, using the condition \|r\| < 1 | SL and HL |

## 1.1 Numbers in the form a × 10ᵏ

A number is in this form when 1 ≤ a < 10 and k is an integer. So 4.07 × 10⁻⁴ is correct, but 40.7 × 10⁻⁵ is not, because 40.7 is not less than 10.

Calculator notation is not acceptable in an answer. If your GDC shows `5.2E30`, you must write 5.2 × 10³⁰.

**Worked example.** Calculate (7.2 × 10⁻³) × (5 × 10⁸) without a calculator.

```
(7.2 × 5) × 10^(−3 + 8) = 36 × 10^5
36 = 3.6 × 10^1, so the answer is 3.6 × 10^6
```

For division, divide the a values and subtract the powers: (9.6 × 10⁴) ÷ (3.2 × 10⁻⁵) = 3 × 10⁹. To add or subtract, first write both numbers with the same power of 10: 4.3 × 10⁵ + 2.1 × 10⁴ = 4.3 × 10⁵ + 0.21 × 10⁵ = 4.51 × 10⁵.

## 1.2 Arithmetic sequences and series

An arithmetic sequence adds the same amount, the **common difference** d, each time. The first term is u₁.

- nth term: u_n = u₁ + (n − 1)d
- Sum of the first n terms: S_n = (n/2)(2u₁ + (n − 1)d) = (n/2)(u₁ + u_n)

**Worked example.** An arithmetic sequence has u₃ = 11 and u₈ = 31. Find u₁, d and S₁₂.

```
u8 − u3 = 5d, so 5d = 20 and d = 4
u1 = u3 − 2d = 11 − 8 = 3
S12 = (12/2)(2 × 3 + 11 × 4) = 6 × 50 = 300
```

Two given terms always give two equations. Subtracting them removes u₁ in one step.

### Sigma notation

Σ means "add up". The expression

```
 20
 Σ (2r + 1)
r=5
```

means substitute r = 5, 6, …, 20 and add the results. The terms go up by 2 each time, so this is an arithmetic series.

- Number of terms: 20 − 5 + 1 = 16 (not 15)
- First term: 2(5) + 1 = 11; last term: 2(20) + 1 = 41
- Sum: (16/2)(11 + 41) = 8 × 52 = **416**

### Applications and simple interest

Simple interest pays the same amount every year, so the balance forms an arithmetic sequence. Put £2000 in an account paying 3% simple interest and it gains £60 a year: £2060, £2120, £2180, … After 10 years the balance is 2000 + 10 × 60 = £2600.

### When real data is not perfectly arithmetic

The guide expects you to approximate a common difference from data that is nearly, but not exactly, arithmetic. A simple, defensible approach is to take the overall change divided by the number of steps.

**Worked example.** A café sells 98 pastries in week 1 and 143 in week 6, with roughly equal increases in between. An approximate common difference is (143 − 98)/5 = 9 pastries per week. You can then predict later weeks with u_n ≈ 98 + 9(n − 1), and comment that the prediction becomes less reliable the further you go beyond the data.

## 1.3 Geometric sequences and series

A geometric sequence multiplies by the same number, the **common ratio** r, each time. Find r by dividing any term by the one before it.

- nth term: u_n = u₁rⁿ⁻¹
- Sum of the first n terms: S_n = u₁(rⁿ − 1)/(r − 1) = u₁(1 − rⁿ)/(1 − r), for r ≠ 1

The two sum formulas are the same; use the first when r > 1 and the second when r < 1 to avoid negative signs.

**Worked example.** A geometric sequence has u₁ = 5 and r = 3. Find u₆ and S₆.

```
u6 = 5 × 3^5 = 5 × 243 = 1215
S6 = 5(3^6 − 1)/(3 − 1) = 5 × 728 / 2 = 1820
```

**Worked example (calculator allowed).** For the same sequence, find the least n for which S_n > 10 000.

```
5(3^n − 1)/2 > 10 000
3^n − 1 > 4000
3^n > 4001
n > ln 4001 / ln 3 = 7.549...
```

So n = **8**. Check both sides: S₇ = 5465 and S₈ = 16 400. A table of values on your GDC gives the same result, and the guide allows technology to generate and display sequences.

The guide says that if you use technology in an exam, you are expected to identify the first term and the common difference (or ratio). Always write u₁ and d, or u₁ and r, before you use a sequence function.

### Applications

Growth or decay by a fixed percentage is geometric. A salary rising by 4% a year has r = 1.04. A population falling by 2% a year has r = 0.98. Be careful with the index: if year 1 is the starting value, then year n is u₁ × rⁿ⁻¹, not u₁ × rⁿ.

## 1.4 Financial applications

### Compound interest

With compound interest, interest is added to the balance, so the next interest payment is larger. For a present value PV, an annual rate of r%, compounded k times a year for n years:

```
FV = PV × (1 + r/(100k))^(kn)
```

k = 1 for yearly, 2 for half-yearly, 4 for quarterly and 12 for monthly compounding.

**Worked example.** £5000 is invested at 3.6% per year, compounded quarterly, for 7 years.

```
Rate per quarter: 3.6/4 = 0.9%, so the multiplier is 1.009
Number of periods: 4 × 7 = 28
FV = 5000 × 1.009^28 = £6425.73
```

### Using the financial package on your GDC

The guide says exam questions may require technology, including built-in financial packages (usually called TVM). Enter N as the total number of periods (28 above), I% as the annual rate (3.6), PV as −5000 (money leaving you), PMT as 0, P/Y = C/Y = 4, then solve for FV. Write down the values you entered, so the method is visible if your final answer is wrong.

**Worked example (calculator allowed).** What annual rate, compounded quarterly, turns £8000 into £11 000 in 6 years?

```
N = 24, PV = −8000, PMT = 0, FV = 11000, P/Y = C/Y = 4
Solve for I%: I = 5.34% (3 s.f.)
```

By hand, (1 + r/400)²⁴ = 11/8, which gives the same value.

### Annual depreciation

Depreciation reduces a value by a fixed percentage each year, so r is less than 1. A machine bought for £60 000 that loses 12% of its value each year is worth

```
60 000 × 0.88^4 = £35 981.72 after 4 years
```

### Real value and inflation

Inflation means money buys less in future. To find the real value of an investment in today's money, divide its future value by the inflation factor for the same number of years. If the £6425.73 above is affected by inflation of 2.2% a year for 7 years, its real value is

```
6425.7327... / 1.022^7 = £5517.81
```

Use the unrounded future value. Dividing the rounded £6425.73 gives £5517.80.

Subtracting the inflation rate from the interest rate and compounding at that rate gives a close but not identical answer, so if a question describes a method, follow it.

The guide says exam questions will not ask you to derive the compound interest formula. It also notes that the link between continuous compounding and e is enrichment only and is not examined.

## 1.8 Sum of an infinite geometric series

If |r| < 1, the terms shrink towards 0 and the sum of the first n terms approaches a limit:

```
S∞ = u1 / (1 − r),  valid only when |r| < 1
```

If |r| ≥ 1, the series does not converge and S∞ does not exist.

**Worked example.** Find the sum to infinity of 18 + 12 + 8 + …

```
r = 12/18 = 2/3, and |2/3| < 1, so the series converges
S∞ = 18 / (1 − 2/3) = 18 / (1/3) = 54
```

**Worked example.** Write 0.272727… as a fraction.

```
0.27 + 0.0027 + 0.000027 + ... has u1 = 0.27 and r = 0.01
S∞ = 0.27 / 0.99 = 27/99 = 3/11
```

When r contains x, the condition |r| < 1 gives an inequality. For example, if r = 2x − 1, then −1 < 2x − 1 < 1, so 0 < x < 1.

## What must be done by hand

Paper 1 allows no technology, at SL and at HL. Be ready to do these without a GDC:

- multiply and divide numbers in the form a × 10ᵏ
- find u₁ and d, or u₁ and r, from two given terms
- evaluate S_n and sigma sums where the numbers are small
- solve a quadratic in n from an arithmetic sum, and reject negative or non-integer roots
- find S∞ and the range of x for which a series converges

Compound interest, depreciation, real value and "least n" questions usually belong on Paper 2, where you are expected to use technology.

## Common errors

- Writing calculator notation such as 3.2E8 instead of 3.2 × 10⁸.
- Leaving an answer as 36 × 10⁵: the a value must satisfy 1 ≤ a < 10.
- Counting the terms in a sigma sum from r = 5 to r = 20 as 15 instead of 16.
- Using rⁿ instead of rⁿ⁻¹ for the nth term, which puts every term one step ahead.
- Using 3.6% as the quarterly rate. The quarterly rate is 3.6/4 = 0.9%.
- Setting N to the number of years in TVM when compounding is monthly. N is the number of periods.
- Using S∞ without checking |r| < 1 first.
- Keeping a negative or fractional value of n: n must be a positive integer.

## Where to go next

- [Revision notes for this unit](/resources/ib-dp-mathematics-aa-sequences-series-financial-revision-notes/)
- [Practice questions with worked answers](/resources/ib-dp-mathematics-aa-sequences-series-financial-practice/)
- [IB DP Maths AA functions study guide](/resources/ib-dp-mathematics-aa-functions/): exponential models link to geometric sequences
- [IB DP Maths AA calculus study guide](/resources/ib-dp-mathematics-aa-calculus/)
- [IB DP Maths AA syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/) and [exam preparation guide](/resources/ib-dp-mathematics-analysis-and-approaches-exam-preparation/)

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
