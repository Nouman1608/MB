---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.4 Financial applications of geometric sequences and series"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.4
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-4"
description: "IB DP Maths AA section 1.4 in depth: compound interest at different frequencies, finding time and rate, annual depreciation, TVM entries and real value."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Please confirm that the real value of an investment after inflation sits within the AA guide's section 1.4 guidance; it is included here as on the existing unit pages. 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers syllabus section **1.4** of IB DP Mathematics: Analysis and Approaches (first assessment
2021), common to SL and HL: **financial applications of geometric sequences and series**, namely
**compound interest** and **annual depreciation**. Compound interest may be calculated yearly,
half-yearly, quarterly or monthly, and exam questions may require technology, including the financial
package on your GDC. You will not be asked to derive the compound interest formula. The real value of an
investment after inflation is also included below, as on the broader unit pages.

For quick recall use the [section 1.4 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-1-4-revision-notes/),
and test yourself with the [section 1.4 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-1-4-practice/).
The [sequences, series and financial applications study guide](/resources/ib-dp-mathematics-aa-sequences-series-financial/)
introduces the formula; this page covers the full range of question types. All amounts in the examples are
invented for practice.

## Why this is geometric

Compound interest adds interest to the balance each period, so the next interest is calculated on a
larger amount. Multiplying by the same factor every period is exactly a geometric sequence. Depreciation by
a fixed percentage is the same idea with a factor below 1. Simple interest, by contrast, adds the same
amount each period, which is arithmetic (section 1.2).

## The formula (in the formula booklet)

```
FV = PV × (1 + r/(100k))^(kn)
```

| Symbol | Meaning |
|---|---|
| FV | Future value |
| PV | Present value (the amount invested or borrowed) |
| r | Nominal annual interest rate, as a percentage |
| k | Number of compounding periods per year: 1, 2, 4 or 12 |
| n | Number of years |

The two numbers that cause errors are the **rate per period**, r/k, and the **number of periods**, kn.

## How compounding frequency changes the result

£10 000 invested at a nominal 6% a year for 10 years:

| Compounding | k | Rate per period | Periods | FV |
|---|---|---|---|---|
| Yearly | 1 | 6% | 10 | £17 908.48 |
| Half-yearly | 2 | 3% | 20 | £18 061.11 |
| Quarterly | 4 | 1.5% | 40 | £18 140.18 |
| Monthly | 12 | 0.5% | 120 | £18 193.97 |
| Simple interest (for comparison) | | | | £16 000.00 |

More frequent compounding gives a larger amount, but the gain shrinks with each step. Compound interest
beats simple interest because interest is earned on earlier interest.

## Question type 1: find the future value

**Worked example 1 (calculator allowed).** £7500 is invested at 4.8% per year, compounded monthly, for
5 years.

```
Rate per month: 4.8/12 = 0.4%, so the factor is 1.004
Periods: 12 × 5 = 60
FV = 7500 × 1.004^60 = £9529.81
```

**The same calculation on a TVM solver.** N = 60, I% = 4.8, PV = −7500, PMT = 0, P/Y = 12, C/Y = 12, solve
for FV. Write these entries in your answer: if the final value is wrong, correct entries can still earn the
method marks. The negative PV shows money leaving you; FV comes out positive.

## Question type 2: find the time

**Worked example 2 (calculator allowed).** £2000 is invested at 3% per year, compounded quarterly. After how
long does the balance first exceed £3000?

```
2000 × 1.0075^m > 3000, where m is the number of quarters
1.0075^m > 1.5
m > ln 1.5 / ln 1.0075 = 54.26
```

Interest is only added at the end of each quarter, so m = 55 quarters: **13 years 9 months**. Check: after 54
quarters the balance is £2994.08; after 55 it is £3016.53. A TVM solver gives N = 54.26 when solved for
FV = 3000, which you must then round **up** to a whole number of periods.

Answering "13.6 years" (54.26 ÷ 4) treats interest as if it were added continuously, which it is not.

## Question type 3: find the rate

The GDC solves for I%. By hand, isolate the factor: if £6000 grows to £7200 in 4 years with yearly
compounding, (1 + r/100)⁴ = 1.2, so 1 + r/100 = 1.2^(1/4) = 1.0466, and r = 4.66% (3 s.f.).

## Annual depreciation

A value that falls by r% each year is multiplied by (1 − r/100) each year:

```
Value after n years = initial value × (1 − r/100)^n
```

On a TVM solver, depreciation can be modelled by entering a **negative** I%.

**Worked example 3 (calculator allowed).** A laptop costs £1800 and depreciates by 22% a year. Find its
value after 3 years and the number of complete years until it is worth less than £300.

```
After 3 years: 1800 × 0.78^3 = £854.19
1800 × 0.78^n < 300  ->  n > ln(1/6) / ln 0.78 = 7.21
After 7 years: £316.18   After 8 years: £246.62
```

It is first worth less than £300 after **8 years**.

**Worked example 4 (calculator allowed).** A car bought for £24 000 is worth £13 500 after 4 years. Find the
annual rate of depreciation.

```
(1 − r/100)^4 = 13 500 / 24 000 = 0.5625
1 − r/100 = 0.5625^(1/4) = 0.8660...
r = 13.4% per year (3 s.f.)
```

## Real value after inflation

Inflation reduces what money can buy. To express a future amount in today's money, divide by the inflation
factor for the same number of years.

**Worked example 5 (calculator allowed).** £15 000 is invested for 6 years at 5% per year, compounded
yearly. Inflation is 3% per year. Find the real value of the investment.

```
FV = 15 000 × 1.05^6 = £20 101.43
Real value = 20 101.4346... / 1.03^6 = £16 834.64
```

The investment has grown by about £5100 in money terms, but by only about £1835 in purchasing power. Use the
unrounded FV in the division.

## Exam technique

- **Write the formula with numbers substituted**, or list your TVM entries, before the answer.
- **Round money to the nearest penny** (2 decimal places) unless told otherwise, and only at the end.
- **"After how many years"**: decide whether the question wants whole years, whole periods, or a time such as
  "13 years 9 months", and check the values either side.
- Paper 1 can include financial questions that simplify by hand, such as factors that are exact powers.

## Common mistakes

- Using the annual rate as the rate per period.
- Setting N to the number of years when compounding is monthly or quarterly.
- Entering PV and FV with the same sign on a TVM solver.
- Writing a depreciation factor as 1.22 instead of 0.78.
- Dividing a time in periods by k without rounding up to a whole period first.
- Subtracting the inflation rate from the interest rate when the question asks for the real value by
  dividing.

## Frequently asked questions

**Is continuous compounding examined?**
The guide treats the link between compound interest and continuous compounding as enrichment, so you are not
expected to use it in section 1.4 questions.

**Do I need the TVM solver?**
Questions may require technology, including the financial package, but the formula always works too. Use
whichever you can show clearly.

## More on this topic

- [Section 1.4 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-1-4-revision-notes/)
- [Section 1.4 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-1-4-practice/)
- [Section 1.3 study guide: geometric sequences and series](/resources/ib-dp-mathematics-analysis-and-approaches-1-3/)
- [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/)

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*,
first assessment 2021: syllabus section 1.4, financial applications of geometric sequences and series.
