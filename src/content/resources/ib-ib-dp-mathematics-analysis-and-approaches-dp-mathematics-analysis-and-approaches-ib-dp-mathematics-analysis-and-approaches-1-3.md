---
title: "IB DP Mathematics: Analysis and Approaches (1.3): Geometric sequences and series"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 1 – Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.3
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-3"
description: "IB DP Maths AA section 1.3 in depth: geometric nth term and finite sums, sigma notation, two possible ratios, counting terms and growth applications."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers syllabus section **1.3** of IB DP Mathematics: Analysis and Approaches (first assessment
2021), common to SL and HL: **geometric sequences and series**. The section covers the formulae for the nth
term and the sum of the first n terms, sigma notation for geometric sums, and applications; the guide's
examples include the spread of disease, salary increase and decrease, and population growth. As in 1.2,
technology may be used to generate and display sequences, and if you use it in an exam you are expected
to identify the first term and the common ratio. Sums to infinity are a separate section, 1.8, and are not
covered here.

For quick recall use the [section 1.3 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-3-revision-notes/),
and test yourself with the [section 1.3 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-3-practice/).
The broader [sequences, series and financial applications study guide](/resources/ib-dp-mathematics-aa-sequences-series-financial/)
introduces the formulae; this page works through the harder question types.

## The formulae (in the formula booklet)

```
u_n = u_1 r^(n − 1)
S_n = u_1(r^n − 1)/(r − 1) = u_1(1 − r^n)/(1 − r),   r ≠ 1
```

The common ratio is r = u_{n+1}/u_n. It can be negative (terms alternate in sign) or a fraction (terms
shrink). If r = 1 every term is equal, the formula does not apply, and S_n = nu₁.

**Recognising a geometric sequence.** Test ratios, not differences: 4, 6, 9, 13.5 has ratios 1.5 each time,
so it is geometric even though its differences grow. A percentage change of p% each step gives
r = 1 + p/100 for growth and r = 1 − p/100 for decay.

## Question type 1: two terms, two possible ratios

**Worked example 1 (calculator-free).** A geometric sequence has u₃ = 12 and u₅ = 48. Find the possible
values of r and u₁.

```
u_5 / u_3 = r^2 = 48/12 = 4
r = 2  or  r = −2
u_1 = u_3 / r^2 = 12/4 = 3   (the same for both values of r)
Sequences: 3, 6, 12, 24, 48, ...   and   3, −6, 12, −24, 48, ...
```

An even power of r always gives two real roots. Unless the question says the terms are all positive, you
must give both; that is often worth a mark on its own.

## Question type 2: how many terms?

**Worked example 2 (calculator-free).** The finite sequence 3, 6, 12, …, 1536 is geometric. Find the number
of terms and their sum.

```
u_1 = 3, r = 2
3 × 2^(n − 1) = 1536  ->  2^(n − 1) = 512 = 2^9  ->  n = 10
S_10 = 3(2^10 − 1)/(2 − 1) = 3 × 1023 = 3069
```

When the last term is not an exact power on Paper 1, the question is designed for Paper 2, where you use
logarithms or a GDC table.

## Sigma notation

The sum Σ from r = 1 to 7 of 2^r means 2 + 4 + 8 + … + 128.

```
u_1 = 2 (substitute the lower limit), ratio = 2, number of terms = 7 − 1 + 1 = 7
Sum = 2(2^7 − 1)/(2 − 1) = 254
```

Two checks prevent most errors: **substitute the lower limit** to get u₁ (it is not always the coefficient),
and **count terms** as upper − lower + 1. For example, the sum from r = 0 to 5 of 3^r has 6 terms and
u₁ = 3⁰ = 1.

## Question type 3: geometric conditions on algebraic terms

If a, b, c are consecutive terms of a geometric sequence, then b/a = c/b, so **b² = ac**.

**Worked example 3 (calculator-free).** x, x + 6 and x + 18 are consecutive terms of a geometric sequence.
Find x and r.

```
(x + 6)^2 = x(x + 18)
x^2 + 12x + 36 = x^2 + 18x
36 = 6x  ->  x = 6
Terms: 6, 12, 24, so r = 2
```

## Applications

### Population growth: watch the index

**Worked example 4 (calculator allowed).** A town has 12 000 people at the start of 2026, and the population
grows by 3.5% a year. In which year does it first exceed 20 000?

```
After n years: 12 000 × 1.035^n
12 000 × 1.035^n > 20 000  ->  1.035^n > 5/3
n > ln(5/3) / ln(1.035) = 14.85
```

So n = 15 years after the start of 2026: the population first exceeds 20 000 at the start of **2041**.
Check: after 14 years it is 19 424, after 15 years 20 104 (nearest person).

Here the starting value is "after 0 years", so the power is n. If the question instead calls 12 000 the
first term u₁, the population in year n is u₁ × 1.035ⁿ⁻¹. Decide which convention the wording uses before
you write the formula; this single choice causes many one-year errors.

### Spread of disease: a sum, not a term

**Worked example 5 (calculator allowed).** In a model, 5 new cases occur on day 1 and the number of new cases
each day is 1.4 times the number the day before. Find the total number of cases in the first 14 days, and the
first day on which the total exceeds 10 000.

```
u_1 = 5, r = 1.4
S_14 = 5(1.4^14 − 1)/(1.4 − 1) = 1376.5..., about 1377 cases
S_19 = 7458 (nearest whole), S_20 = 10 446
```

The total first exceeds 10 000 on **day 20**. "New cases on day n" is a term; "cases so far" is a sum. Read
which one the question asks for.

### Salary decrease

A salary that falls by 10% a year from £80 000 has r = 0.9. The salary in year 10 is 80 000 × 0.9⁹ =
£30 993.64, and the total paid over the 10 years is 80 000(1 − 0.9¹⁰)/(1 − 0.9) = £521 057.25. Using the
(1 − rⁿ)/(1 − r) form when r < 1 keeps both numerator and denominator positive.

## Exam technique

- **Write u₁ and r** before any GDC calculation, as the guide expects.
- **"Find the least n"**: solve the inequality with logarithms or a table, round up, and check the values
  either side.
- **"Show that"**: write the formula with values substituted; the final line must match exactly.
- Keep r exact (such as 1.035) rather than rounding it.

## Common mistakes

- Giving only r = 2 when r² = 4.
- Taking the coefficient as u₁ in a sigma sum whose lower limit is not 1.
- Using rⁿ for the nth term when u₁ is the first term.
- Answering with a term when a total was asked for, or the reverse.
- Rounding intermediate values, which changes later digits.
- Applying the sum formula with r = 1.

## Next steps

- [Section 1.3 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-3-revision-notes/)
- [Section 1.3 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-3-practice/)
- [Section 1.4 study guide: financial applications](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-4/)
- [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/)

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*,
first assessment 2021: syllabus section 1.3, geometric sequences and series.
