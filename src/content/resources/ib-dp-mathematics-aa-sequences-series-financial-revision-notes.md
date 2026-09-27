---
title: "IB DP Mathematics: Analysis and Approaches -- Sequences, series and financial applications Revision Notes"
seoTitle: "IB Maths AA Sequences and Series Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed IB DP Maths AA revision notes on sequences, series, sigma notation, compound interest and sums to infinity, with a 12-question self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

These are condensed revision notes. For full explanations and worked examples, use the [sequences, series and financial applications study guide](/resources/ib-dp-mathematics-aa-sequences-series-financial/).

The notes cover IB Diploma Programme Mathematics: Analysis and Approaches, aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 1.1, 1.2, 1.3, 1.4 and 1.8. All of this content is common to SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

See the [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/) for the rest of the course. Test yourself afterwards with the [practice questions](/resources/ib-dp-mathematics-aa-sequences-series-financial-practice/).

## Definitions

- **a × 10ᵏ form:** 1 ≤ a < 10 and k is an integer. Calculator notation (e.g. `2.4E-6`) is not acceptable.
- **Sequence:** an ordered list of terms u₁, u₂, u₃, …
- **Series:** the sum of the terms of a sequence. S_n is the sum of the first n terms.
- **Arithmetic:** each term is the previous term plus d, the common difference.
- **Geometric:** each term is the previous term times r, the common ratio.
- **Convergent geometric series:** a series with |r| < 1, whose sum approaches S∞.
- **Compound interest:** interest is added to the balance, so it earns interest itself.
- **Depreciation:** a value falls by a fixed percentage each year.
- **Real value:** a future amount expressed in today's money, after allowing for inflation.

## Formulas

| Quantity | Arithmetic | Geometric |
|---|---|---|
| nth term | u_n = u₁ + (n − 1)d | u_n = u₁rⁿ⁻¹ |
| Sum of first n terms | S_n = (n/2)(2u₁ + (n − 1)d) | S_n = u₁(rⁿ − 1)/(r − 1), r ≠ 1 |
| Alternative sum | S_n = (n/2)(u₁ + u_n) | S_n = u₁(1 − rⁿ)/(1 − r), r ≠ 1 |
| Finding d or r | d = u₂ − u₁ | r = u₂/u₁ |
| Sum to infinity | does not exist (d ≠ 0) | S∞ = u₁/(1 − r), \|r\| < 1 |

| Financial | Formula |
|---|---|
| Compound interest, rate r% a year, compounded k times a year, n years | FV = PV × (1 + r/(100k))^(kn) |
| Depreciation at r% a year for n years | value = initial × (1 − r/100)ⁿ |
| Real value after n years of inflation at i% a year | real value = FV / (1 + i/100)ⁿ |

k = 1 yearly, 2 half-yearly, 4 quarterly, 12 monthly.

## Method in steps

**Two terms given, find the sequence**

1. Write each term using the nth term formula.
2. Arithmetic: subtract the equations to find d. Geometric: divide them to find r.
3. Substitute back to find u₁.

**Sigma sum**

1. Count the terms: top limit − bottom limit + 1.
2. Substitute the bottom limit for the first term, the top limit for the last term.
3. Decide whether it is arithmetic or geometric, then use the matching S_n formula.

**Least n so that S_n exceeds a value**

1. Write the inequality using the S_n formula.
2. Solve it with logs (geometric) or as a quadratic (arithmetic), or use a GDC table.
3. Round **up** to the next integer and check S_n on both sides of the boundary.

**Compound interest on a GDC (TVM)**

1. N = number of periods (years × k), not the number of years.
2. I% = annual rate; P/Y = C/Y = k.
3. PV negative (money you pay in), PMT = 0, solve for FV, I% or N.
4. Write your inputs on the page.

**Sum to infinity**

1. Find r and check |r| < 1. State it.
2. S∞ = u₁/(1 − r).
3. If r contains x, solve −1 < r < 1 for the range of x.

## Worked reminders

- (6 × 10⁴)(4 × 10⁻⁹) = 24 × 10⁻⁵ = **2.4 × 10⁻⁴**
- Σ from r = 1 to 10 of (4r + 3): 10 terms, first 7, last 43, sum = 5 × 50 = **250**
- 81 + 27 + 9 + …: u₁ = 81, r = 1/3, S∞ = 81/(2/3) = **121.5**
- £2500 at 4% a year compounded half-yearly for 5 years: 2500 × 1.02¹⁰ = **£3047.49**
- 0.888… = 0.8/(1 − 0.1) = **8/9**
- Least n with 5(3ⁿ − 1)/2 > 10 000: 3ⁿ > 4001, n > 7.55, so **n = 8** (S₇ = 5465, S₈ = 16 400)
- Data 98, …, 143 over 6 weeks, roughly steady: approximate d = (143 − 98)/5 = **9 a week**

## Paper 1 or Paper 2?

Paper 1 allows no technology at SL or HL; Paper 2 requires it. That split shapes how you revise this unit.

**Expect to work by hand (Paper 1 style):**

- arithmetic with numbers in the form a × 10ᵏ
- finding u₁, d or r from two terms, and solving S_n = k as a quadratic in n
- sigma sums with small, friendly numbers
- sums to infinity, recurring decimals and the range of x for convergence

**Expect to use your GDC (Paper 2 style):**

- compound interest, depreciation and real value
- finding an unknown rate or number of periods with the financial package
- "least n" questions where logs or a table of values give a non-integer boundary
- modelling data that is not perfectly arithmetic, then predicting from the model

When you use technology, the guide expects you to identify the first term and the common difference or ratio, so write them down before you use a sequence or TVM function.

## Must-know distinctions

- **Arithmetic vs geometric.** Constant difference means add; constant ratio means multiply. Test with u₂ − u₁ = u₃ − u₂, or u₂/u₁ = u₃/u₂.
- **Sequence vs series.** u_n is one term; S_n is a total. Read which one the question asks for.
- **Simple vs compound interest.** Simple interest is arithmetic (same amount each year). Compound interest is geometric (same percentage each period).
- **Growth vs depreciation.** Growth of 6% gives r = 1.06; depreciation of 6% gives r = 0.94, not −0.06 and not 0.06.
- **Nominal vs real value.** The nominal value is the amount in the account. The real value divides by the inflation factor.
- **S_n vs S∞.** S_n exists for any geometric sequence (r ≠ 1). S∞ exists only when |r| < 1.
- **nth term vs "after n years".** If u₁ is the starting value, then after n years you have u₁rⁿ, which is u_(n+1). Decide which labelling the question uses.

## Quick self-test

1. Write 0.000 407 in the form a × 10ᵏ.
2. Calculate (5 × 10³)(6 × 10⁻⁷), giving your answer in the form a × 10ᵏ.
3. An arithmetic sequence has u₁ = −7 and d = 5. Find u₂₀.
4. Find the sum of the first 15 terms of 2, 9, 16, …
5. Evaluate the sum from r = 1 to 10 of (4r + 3).
6. Find u₈ for the geometric sequence 3, −6, 12, …
7. Find the sum of the first 5 terms of 81, 27, 9, …
8. Find S∞ for 20, 15, 11.25, …
9. £2500 is invested at 4% a year, compounded half-yearly. Find its value after 5 years.
10. A car worth £18 000 depreciates by 20% a year. Find its value after 3 years.
11. For what values of x does the geometric series with r = x − 2 converge?
12. Write 0.888… as a fraction.

### Answers

1. **4.07 × 10⁻⁴**
2. 30 × 10⁻⁴ = **3 × 10⁻³**
3. u₂₀ = −7 + 19 × 5 = **88**
4. d = 7, S₁₅ = (15/2)(4 + 14 × 7) = 7.5 × 102 = **765**
5. **250** (10 terms, 7 + 11 + … + 43)
6. r = −2, u₈ = 3 × (−2)⁷ = **−384**
7. r = 1/3, S₅ = 81(1 − (1/3)⁵)/(2/3) = **121**
8. r = 0.75, S∞ = 20/0.25 = **80**
9. 2500 × 1.02¹⁰ = **£3047.49**
10. 18 000 × 0.8³ = **£9216**
11. |x − 2| < 1, so **1 < x < 3**
12. **8/9**

## Where marks are usually lost

- Giving 30 × 10⁻⁴ or 3E−3 instead of 3 × 10⁻³: neither is in the required form.
- Counting 15 terms instead of 16 in a sigma sum from r = 5 to r = 20.
- Using rⁿ in place of rⁿ⁻¹, so every geometric term is one step out.
- Dividing the wrong way when finding r (u₁/u₂ instead of u₂/u₁).
- Using the annual rate per period in compound interest: 4% compounded half-yearly is 2% per period, over 2n periods.
- Rounding intermediate values in a financial chain, which shifts the final answer by a few pence.
- Rounding n down in a "least n" question, or not checking the value either side of the boundary.
- Using S∞ when |r| ≥ 1, or not stating the condition |r| < 1 when a question asks you to justify convergence.
- Giving the non-strict inequality 1 ≤ x ≤ 3 when the convergence condition is strict.
- Keeping a negative or non-integer root when solving S_n = k for n.

## Next steps

- Full explanations: [study guide](/resources/ib-dp-mathematics-aa-sequences-series-financial/)
- Test yourself: [practice questions with mark-by-mark answers](/resources/ib-dp-mathematics-aa-sequences-series-financial-practice/)
- Related unit: [functions study guide](/resources/ib-dp-mathematics-aa-functions/) for exponential models
- Course overview: [IB DP Maths AA subject guide](/resources/ib-dp-mathematics-analysis-and-approaches-subject-guide/) and [exam preparation guide](/resources/ib-dp-mathematics-analysis-and-approaches-exam-preparation/)

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
