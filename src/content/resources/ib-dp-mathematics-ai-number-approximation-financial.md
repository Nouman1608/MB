---
title: "IB DP Mathematics: Applications and Interpretation -- Number, approximation, sequences and financial mathematics Study Guide"
seoTitle: "IB Maths AI Number, Sequences and Finance Study Guide"
resourceType: "study-guides"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Number, approximation, sequences and financial mathematics"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 1.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-number-and-algebra"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-1-1"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-number-and-algebra"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-1-2"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-number-and-algebra"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-1-3"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-number-and-algebra"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-1-4"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-number-and-algebra"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-1-5"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-number-and-algebra"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-1-6"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-number-and-algebra"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-1-7"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-number-and-algebra"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-1-8"
description: "IB DP Maths AI study guide to standard form, sequences, compound interest, logarithms, rounding errors, loans, annuities and GDC equation solving."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-09-27
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by muhammad-ghazali-siddiqui on 2026-09-29."
---

This study guide teaches the number, approximation, sequences and financial mathematics unit of IB Diploma Programme Mathematics: Applications and Interpretation from scratch. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 1.1 to 1.8, which are common content for SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

When you have worked through it, use the [revision notes](/resources/ib-dp-mathematics-ai-number-approximation-financial-revision-notes/) for quick recall and the [practice questions](/resources/ib-dp-mathematics-ai-number-approximation-financial-practice/) to test yourself. The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) show where this unit sits in the course.

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 1.1 | Calculate with numbers in the form a × 10ᵏ, 1 ≤ a < 10, k an integer | SL and HL |
| 1.2 | Arithmetic sequences and series: nth term, sum of n terms, sigma notation, simple interest, approximating a common difference from real data | SL and HL |
| 1.3 | Geometric sequences and series: nth term, sum of n terms, sigma notation, growth and decay applications | SL and HL |
| 1.4 | Compound interest (yearly, half-yearly, quarterly, monthly), annual depreciation, real value after inflation | SL and HL |
| 1.5 | Laws of exponents with integer exponents; logarithms with base 10 and e, evaluated with technology | SL and HL |
| 1.6 | Decimal places and significant figures, upper and lower bounds, percentage error, estimation | SL and HL |
| 1.7 | Amortization and annuities using technology | SL and HL |
| 1.8 | Use technology to solve linear systems in up to 3 variables and polynomial equations | SL and HL |

Every AI exam paper requires a graphic display calculator (GDC), so this unit leans on technology. You still need to write down the method: the guide says full marks are not necessarily awarded for a correct answer with no working.

## 1.1 Numbers in the form a × 10ᵏ

A number is in this form when 1 ≤ a < 10 and k is an integer. So 3.2 × 10⁴ is correct; 32 × 10³ is not.

Calculator notation is not acceptable. If your GDC shows `3E9`, write 3 × 10⁹.

**Worked example.** Calculate (4.8 × 10⁶) ÷ (1.6 × 10⁻³).

```
(4.8 ÷ 1.6) × 10^(6 − (−3)) = 3 × 10^9
```

For addition, match the powers first: 2.5 × 10⁴ + 7 × 10³ = 2.5 × 10⁴ + 0.7 × 10⁴ = 3.2 × 10⁴.

## 1.2 Arithmetic sequences and series

An arithmetic sequence adds the same **common difference** d each time.

- nth term: uₙ = u₁ + (n − 1)d
- sum of the first n terms: Sₙ = (n/2)(2u₁ + (n − 1)d) = (n/2)(u₁ + uₙ)

**Worked example.** An arithmetic sequence has u₄ = 23 and u₁₁ = 51. Find d, u₁ and S₂₀.

```
u11 − u4 = 7d  →  51 − 23 = 7d  →  d = 4
u1 = u4 − 3d = 23 − 12 = 11
S20 = (20/2)(2 × 11 + 19 × 4) = 10 × 98 = 980
```

**Sigma notation.** Σ means "add up". The same sum written in sigma notation is

```
 20
 Σ (4k + 7) = 11 + 15 + 19 + ... + 87 = 980
k=1
```

If you use a GDC sum function, the guide expects you to identify the first term (11) and the common difference (4) in your working.

**Simple interest** is arithmetic. £3500 earning 2.8% simple interest gains 0.028 × 3500 = £98 each year, so the values 3598, 3696, 3794, … form an arithmetic sequence. After 6 years the value is 3500 + 6 × 98 = £4088.

**Real data that is nearly arithmetic.** A club's membership over five years is 148, 171, 190, 214, 236. The differences (23, 19, 24, 22) are not equal, so approximate d. Using the first and last values, d ≈ (236 − 148)/4 = 22. The model predicts year 9 as 236 + 4 × 22 = 324 members. The further beyond the data you predict, the less reliable the estimate.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--01-arithmetic-sequence-sum.webp" width="900" height="1010" alt="A bar chart of the first 20 terms of an arithmetic sequence with bars 4 (23) and 11 (51) highlighted. Seven steps of d = 4 link them (51 minus 23 = 28). The first term is 11, the 20th is 87 and the sum of 20 terms is 980, the same as the sigma sum of (4k + 7)." loading="lazy">
  <figcaption>Find d from two terms, work back to u1, then use S_n = (n/2)(u1 + un).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--02-nearly-arithmetic-data.webp" width="900" height="1020" alt="A graph of club membership for years 1 to 5 (148, 171, 190, 214, 236). The differences 23, 19, 24, 22 are unequal, so d is approximated as (236 - 148)/4 = 22. A dashed extension to year 9 predicts 324 members, in a shaded prediction region that is less reliable." loading="lazy">
  <figcaption>Approximate d from the first and last values, and treat predictions beyond the data with caution.</figcaption>
</figure>


## 1.3 Geometric sequences and series

A geometric sequence multiplies by the same **common ratio** r each time.

- nth term: uₙ = u₁rⁿ⁻¹
- sum of the first n terms: Sₙ = u₁(rⁿ − 1)/(r − 1) = u₁(1 − rⁿ)/(1 − r), r ≠ 1

Applications include disease spread, salary changes and population growth. With technology, you must still identify u₁ and r.

**Worked example.** A starting salary is £38 000 and rises by 3% each year. Find the salary in year 8 and the total earned over the first 8 years.

```
u1 = 38 000, r = 1.03
u8 = 38 000 × 1.03^7 = 46 735.2...  →  £46 700 (3 s.f.)
S8 = 38 000 × (1.03^8 − 1)/(1.03 − 1) = 337 908.7...  →  £338 000 (3 s.f.)
```

Watch the power: year 8 is u₈, which uses r⁷, not r⁸.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--03-geometric-salary.webp" width="900" height="930" alt="A bar chart of a salary rising 3% a year for 8 years, each bar showing the starting 38 000 plus growth, labelled with the power of r used (r^0 to r^7). Year 8 is 38 000 x 1.03^7, about 46 700 pounds, and the 8-year total is about 338 000 pounds. A warning says the power is 7, not 8." loading="lazy">
  <figcaption>Year n uses r^(n-1); the sum of the first n terms is a geometric series.</figcaption>
</figure>


## 1.4 Compound interest and depreciation

Compound interest is geometric growth. With present value PV, annual rate r%, k compounding periods per year and n years:

```
FV = PV × (1 + r/(100k))^(kn)
```

k = 1 (yearly), 2 (half-yearly), 4 (quarterly) or 12 (monthly). The guide says you may use built-in financial packages, and that you will not be asked to derive the formula.

**Worked example.** €6000 is invested at 3.6% per year, compounded monthly, for 5 years.

```
FV = 6000 × (1 + 3.6/1200)^60 = 7181.37  →  €7181.37
```

On the GDC's TVM solver: N = 60, I% = 3.6, PV = −6000, PMT = 0, P/Y = 12, C/Y = 12, solve for FV. Money you pay in is negative; money you receive is positive.

**Real value.** If inflation is 2.1% per year, divide by the inflation factor to express the result in today's money:

```
real value = 7181.37 / 1.021^5 = 6472.60  →  €6472.60
```

If a question states a different method, use the method it gives.

**Depreciation** uses a multiplier below 1. A car bought for £24 500 loses 14% of its value each year:

```
value after 4 years = 24 500 × 0.86^4 = 13 401.70  →  £13 401.70
```

To find when the value first falls below £10 000, use a GDC table of 24 500 × 0.86ⁿ: n = 5 gives £11 525.46 and n = 6 gives £9911.90, so the value first falls below £10 000 at the end of year 6.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--04-compound-real-value.webp" width="900" height="975" alt="A graph of 6000 euros at 3.6% per year compounded monthly for 5 years rising to 7181.37 euros, with the real value after 2.1% inflation rising more slowly to 6472.60 euros. The vertical axis starts at 5500. The key shows the formula and the TVM settings N = 60, I% = 3.6, PV = -6000, P/Y = C/Y = 12." loading="lazy">
  <figcaption>Compounding monthly grows the money; dividing by the inflation factor gives its value in today's money.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--05-depreciation.webp" width="900" height="920" alt="A bar chart of a car worth 24 500 pounds losing 14% a year, value 24 500 x 0.86^n for n = 0 to 8. A dashed line marks 10 000 pounds. Year 5 is 11 525.46 (above) and year 6 is 9911.90 (below), so the value first falls below 10 000 at the end of year 6." loading="lazy">
  <figcaption>Depreciation multiplies by 0.86 each year; a table finds when the value passes 10 000.</figcaption>
</figure>


## 1.5 Exponents and logarithms

At SL the laws of exponents are for **integer** exponents:

- aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁻ⁿ = 1/aⁿ

Examples: 2⁻³ × 2⁵ = 2² = 4, and (3x²)³ × x⁻⁴ = 27x⁶ × x⁻⁴ = 27x².

A logarithm answers "what power?". The guide asks for awareness that

```
a^x = b  is equivalent to  log_a b = x,  where b > 0
```

At SL you work with base 10 (log x) and base e (ln x = logₑ x), and you evaluate them with technology.

**Worked examples.**

- 10ˣ = 5000 → x = log 5000 = 3.70 (3 s.f.)
- eˣ = 12 → x = ln 12 = 2.48 (3 s.f.)
- pH = −log[H⁺]. If [H⁺] = 3.2 × 10⁻⁵, pH = −log(3.2 × 10⁻⁵) = 4.49 (3 s.f.)

The laws of logarithms (log xy = log x + log y and so on) are **HL only** (section AHL 1.9), so they are not part of this unit.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--06-logarithm-power.webp" width="900" height="1220" alt="Two graphs. y = 10^x reaches 5000 at x = 3.70, so x = log 5000. y = e^x reaches 12 at x = 2.48, so x = ln 12. A further example is pH = -log(3.2 x 10^-5) = 4.49. An HL-only tag notes that the laws of logarithms are not needed here." loading="lazy">
  <figcaption>a^x = b is the same as x = log_a b; the GDC evaluates log and ln.</figcaption>
</figure>


## 1.6 Approximation and errors

**Rounding.** Give answers exactly or to 3 significant figures unless the question says otherwise. Choose a sensible accuracy for the data: money to the nearest cent, for example, or a population to a whole number.

**Upper and lower bounds.** If x = 4.1 to one decimal place, then 4.05 ≤ x < 4.15. A length of 12.4 cm to 1 d.p. lies in 12.35 ≤ L < 12.45.

**Percentage error.** With approximate value v_A and exact value v_E:

```
ε = |(v_A − v_E) / v_E| × 100%
```

If you estimate 50 when the exact value is 47.3, ε = |50 − 47.3|/47.3 × 100% = 5.71%.

**Worked example (error from measurement).** A circle's radius is measured as 3.4 cm to one decimal place. Find the maximum percentage error in the area calculated from 3.4 cm.

```
bounds: 3.35 ≤ r < 3.45
A (measured) = π × 3.4^2   = 36.317 cm²
A (upper)    = π × 3.45^2  = 37.393 cm²
A (lower)    = π × 3.35^2  = 35.257 cm²
error using upper = |36.317 − 37.393|/37.393 × 100% = 2.88%
error using lower = |36.317 − 35.257|/35.257 × 100% = 3.01%
maximum percentage error ≈ 3.01%
```

The lower bound gives the bigger error because the smaller true value is the denominator.

**Estimation.** Check that answers make sense: a length cannot be negative, and a monthly loan payment should not exceed the loan.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--07-bounds-percentage-error.webp" width="900" height="1060" alt="Two number lines. The radius 3.4 cm to one decimal place lies in 3.35 &lt;= r &lt; 3.45. The areas from the lower bound, measured value and upper bound are 35.257, 36.317 and 37.393 square centimetres. The percentage errors are 2.88% against the upper and 3.01% against the lower, so the maximum is about 3.01%." loading="lazy">
  <figcaption>Bounds for the radius give bounds for the area; the maximum percentage error divides by the smaller true value.</figcaption>
</figure>


## 1.7 Amortization and annuities

**Amortization** is paying off a loan with equal regular payments. An **annuity** is a sequence of equal regular payments into or out of an account. The guide says you do these with technology, that payments in exams are made at the **end** of each period, and that the annuity formula itself will not be examined.

Write your TVM entries down as working. For a loan, PV is positive (you receive it) and PMT is negative (you pay).

**Worked example (loan).** £15 000 is borrowed at 6% per year, compounded monthly, repaid monthly over 4 years.

```
N = 48, I% = 6, PV = 15 000, FV = 0, P/Y = 12, C/Y = 12
PMT = −352.275...  →  monthly payment £352.28
total repaid  = 48 × 352.28 = £16 909.44
total interest = 16 909.44 − 15 000 = £1909.44
```

**Worked example (savings annuity).** £150 is paid in at the end of every month for 10 years at 4.8% per year, compounded monthly.

```
N = 120, I% = 4.8, PV = 0, PMT = −150, P/Y = 12, C/Y = 12
FV = 23 044.79  →  £23 044.79 (of which 150 × 120 = £18 000 was paid in)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--08-loan-amortization.webp" width="900" height="1020" alt="A graph of the amount owed on a 15 000 pound loan falling to zero over 48 monthly payments, with a bar showing total repaid 16 909.44 pounds as 15 000 borrowed plus 1909.44 interest. TVM settings N = 48, I% = 6, PV = 15 000, FV = 0, P/Y = C/Y = 12 give PMT = -352.275, so the payment is 352.28 pounds." loading="lazy">
  <figcaption>Equal monthly payments clear the loan; the extra paid is interest.</figcaption>
</figure>


## 1.8 Solving equations with technology

The guide says you use technology to solve systems of linear equations in up to 3 variables and polynomial equations. No specific method is required in exams, and a system set in an exam will always have a unique solution. Learn the words **zeros** (of a function) and **roots** (of an equation).

**Worked example (system).** Adult, child and senior tickets cost a, c and s dollars.

```
2a + 3c +  s = 62
 a + 2c + 2s = 50
3a +  c +  s = 60
GDC simultaneous-equation solver:  a = 14, c = 8, s = 10
```

Write the system down before quoting the solution.

**Worked example (polynomial).** Solve 2x³ − 5x² − 4x + 3 = 0. The GDC polynomial solver gives x = −1, x = 0.5 and x = 3. In context, reject roots outside the domain, such as a negative length.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--09-polynomial-roots.webp" width="900" height="1010" alt="A graph of y = 2x^3 - 5x^2 - 4x + 3 crossing the x-axis at x = -1, 0.5 and 3, the roots from the GDC solver. The region x &lt; 0 is shaded and the root -1 is shown hollow: if x is a length it is rejected." loading="lazy">
  <figcaption>Roots are where the graph crosses the axis; check them against the context.</figcaption>
</figure>


## Common errors

- Writing `2.4E−5` instead of 2.4 × 10⁻⁵.
- Using rⁿ instead of rⁿ⁻¹ for the nth term, which puts you one year out.
- Mixing up k and n in compound interest: 5 years monthly is N = 60, not 5.
- Entering PV and PMT with the same sign in the TVM solver, which gives an error or a nonsense answer.
- Switching between the rounded and unrounded payment. Round the payment to the nearest cent, as it would actually be paid, and use that value for every later total.
- Stating an upper bound of 4.149 for 4.1 (1 d.p.). The upper bound is 4.15, with a strict inequality.
- Dividing by the approximate value instead of the exact value in percentage error.
- Quoting all roots of a polynomial when the context rules some out.
- Using the laws of logarithms, which belong to HL (AHL 1.9), rather than technology.

## Next steps

Go to the [revision notes](/resources/ib-dp-mathematics-ai-number-approximation-financial-revision-notes/) for a one-page recap, then try the [practice questions](/resources/ib-dp-mathematics-ai-number-approximation-financial-practice/). Related: [geometry and trigonometry](/resources/ib-dp-mathematics-ai-geometry-trigonometry/), [statistics and probability](/resources/ib-dp-mathematics-ai-statistics-probability/), the [AI syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/) and [AI exam preparation](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/).

## Frequently asked questions

**Do you get full marks for a correct answer with no working in IB Maths AI?**
Not necessarily. The IB guide says full marks are not necessarily awarded for a correct answer with no working, so write down your method even when the GDC does the calculation.

**Which term uses rⁿ⁻¹ in a geometric sequence?**
The nth term is uₙ = u₁rⁿ⁻¹, so year 8 of a salary uses r⁷, not r⁸. Counting from the wrong starting point is a common error.

**How do you estimate the common difference from real data that is nearly arithmetic?**
Use the first and last values: d ≈ (last − first)/(number of terms − 1). Predictions made further beyond the data are less reliable.

**Is simple interest an arithmetic or geometric sequence?**
Simple interest is arithmetic, because the same amount of interest is added each year. Compound interest is geometric growth, because the value is multiplied by the same factor each period.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021.
