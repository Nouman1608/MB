---
title: "IB DP Mathematics: Applications and Interpretation -- Number, approximation, sequences and financial mathematics Revision Notes"
seoTitle: "IB Maths AI Number, Sequences and Finance Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed IB DP Maths AI revision notes on sequences, compound interest, TVM loans, bounds and percentage error, with a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

For full explanations and longer worked examples, read the [study guide](/resources/ib-dp-mathematics-ai-number-approximation-financial/) first.

These revision notes cover the number, approximation, sequences and financial mathematics unit of IB Diploma Programme Mathematics: Applications and Interpretation. They are aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 1.1 to 1.8, which are common content for SL and HL. They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 sessions.

Test yourself afterwards with the [practice questions](/resources/ib-dp-mathematics-ai-number-approximation-financial-practice/). The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) list every unit. Every AI paper requires a GDC, but written working still earns the method marks.

## Key definitions

- **Standard form:** a × 10ᵏ with 1 ≤ a < 10 and k an integer. Never write GDC notation such as `6.1E−4`.
- **Arithmetic sequence:** constant common difference d. **Geometric sequence:** constant common ratio r.
- **Series:** the sum of the terms of a sequence. Sₙ is the sum of the first n terms.
- **Sigma notation:** Σ (from r = 1 to n) of an expression in r means "substitute r = 1, 2, …, n and add".
- **Logarithm:** aˣ = b is equivalent to log_a b = x, for b > 0. At SL, a is 10 (log) or e (ln).
- **Bounds:** the smallest and largest values that round to the given number.
- **Amortization:** repaying a loan with equal regular payments. **Annuity:** equal regular payments into or out of an account. In exams, payments are at the end of each period.
- **Zeros and roots:** x-values where f(x) = 0 are the zeros of f and the roots of f(x) = 0.

## Formulas

| Topic | Formula |
|---|---|
| Arithmetic nth term | uₙ = u₁ + (n − 1)d |
| Arithmetic sum | Sₙ = (n/2)(2u₁ + (n − 1)d) = (n/2)(u₁ + uₙ) |
| Geometric nth term | uₙ = u₁rⁿ⁻¹ |
| Geometric sum | Sₙ = u₁(rⁿ − 1)/(r − 1), r ≠ 1 |
| Compound interest | FV = PV × (1 + r/(100k))^(kn) |
| Depreciation (i% per year) | V = V₀ × (1 − i/100)ⁿ |
| Real value after inflation i% | real value = FV / (1 + i/100)ⁿ |
| Logarithm | aˣ = b ⇔ x = log_a b |
| Percentage error | ε = \|(v_A − v_E)/v_E\| × 100% |
| Exponent laws (integer powers) | aᵐaⁿ = aᵐ⁺ⁿ, aᵐ/aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁻ⁿ = 1/aⁿ |

k is the number of compounding periods per year: 1, 2, 4 or 12. The laws of logarithms are **HL only** (AHL 1.9), so they are not needed here.

## Method in steps

**Two terms of an arithmetic sequence given (e.g. u₅ and u₁₂)**

```
1. Subtract:  u12 − u5 = 7d, so find d
2. Back-substitute:  u1 = u5 − 4d
3. Use the nth term or sum formula
```

**Compound interest on the TVM solver**

```
N   = number of periods (years × k)
I%  = annual rate
PV  = −amount invested (money out is negative)
PMT = 0
P/Y = C/Y = k
Solve FV
```

**Loan (amortization) on the TVM solver**

```
N = total payments, I% = annual rate
PV = +loan (you receive it), FV = 0
P/Y = C/Y = payments per year
Solve PMT (it comes out negative)
Total interest = (number of payments × payment) − loan
Balance after m payments: set N = m, PMT = −payment, solve FV
```

**Maximum percentage error from a rounded measurement**

```
1. Write the bounds of the measurement
2. Calculate the quantity with the measured value and with each bound
3. Percentage error with each bound as the exact value
4. The larger one is the maximum percentage error
```

**Systems and polynomials**

```
1. Write the equations in full (method mark)
2. Use the GDC simultaneous-equation or polynomial solver
3. Reject roots outside the context's domain
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--01-arithmetic-sequence-sum.webp" width="900" height="1010" alt="A bar chart of the first 20 terms of an arithmetic sequence with bars 4 (23) and 11 (51) highlighted. Seven steps of d = 4 link them (51 minus 23 = 28). The first term is 11, the 20th is 87 and the sum of 20 terms is 980, the same as the sigma sum of (4k + 7)." loading="lazy">
  <figcaption>Find d from two terms, work back to u1, then use S_n = (n/2)(u1 + un).</figcaption>
</figure>


## Small worked reminders

- (6 × 10⁵)(3 × 10⁻²) = 18 × 10³ = 1.8 × 10⁴.
- 10ˣ = 350 → x = log 350 = 2.54 (3 s.f.).
- A mass of 8.6 kg to 1 d.p. lies in 8.55 ≤ m < 8.65.
- Year 10 of a salary starting at £30 000 and rising 4% a year is u₁₀ = 30 000 × 1.04⁹ = £42 699.35, not 30 000 × 1.04¹⁰.
- The total earned over those 10 years is S₁₀ = 30 000(1.04¹⁰ − 1)/(1.04 − 1) = £360 183.21.

**Finance reminders**

- €5000 at 3% per year, compounded yearly, for 4 years: 5000 × 1.03⁴ = €5627.54. With inflation of 2% per year, the real value is 5627.54 ÷ 1.02⁴ = €5198.98.
- Saving £100 at the end of each month for 5 years at 6% per year, compounded monthly: N = 60, I% = 6, PV = 0, PMT = −100, P/Y = C/Y = 12 gives FV = £6977.00. Only £6000 of that was paid in.
- The guide says you will not be asked to derive the compound interest formula, and the annuity formula is not examined. The TVM solver is the expected tool.

**Nearly arithmetic data**

Sales over five weeks are 62, 70, 77, 86, 93. The differences are 8, 7, 9, 7, so the data is roughly arithmetic. Estimate d ≈ (93 − 62)/4 = 7.75. The model predicts week 9 as 93 + 4 × 7.75 = 124. State that this is an estimate from a model.

**Estimation checks**

- Before accepting a GDC answer, estimate it. (4.8 × 10⁶) ÷ (1.6 × 10⁻³) should be about 3 × 10⁹, not 3 × 10³.
- A loan's total repayments must be more than the amount borrowed.
- A length, a price or a number of people cannot be negative.
- Choose accuracy that suits the data: money to the nearest cent, people as whole numbers.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--04-compound-real-value.webp" width="900" height="975" alt="A graph of 6000 euros at 3.6% per year compounded monthly for 5 years rising to 7181.37 euros, with the real value after 2.1% inflation rising more slowly to 6472.60 euros. The vertical axis starts at 5500. The key shows the formula and the TVM settings N = 60, I% = 3.6, PV = -6000, P/Y = C/Y = 12." loading="lazy">
  <figcaption>Compounding monthly grows the money; dividing by the inflation factor gives its value in today's money.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--08-loan-amortization.webp" width="900" height="1020" alt="A graph of the amount owed on a 15 000 pound loan falling to zero over 48 monthly payments, with a bar showing total repaid 16 909.44 pounds as 15 000 borrowed plus 1909.44 interest. TVM settings N = 48, I% = 6, PV = 15 000, FV = 0, P/Y = C/Y = 12 give PMT = -352.275, so the payment is 352.28 pounds." loading="lazy">
  <figcaption>Equal monthly payments clear the loan; the extra paid is interest.</figcaption>
</figure>


## Must-know distinctions

| This | Not this |
|---|---|
| Simple interest: same amount added each year (arithmetic) | Compound interest: same percentage added (geometric) |
| uₙ: the nth term | Sₙ: the total of the first n terms |
| Depreciation multiplier 1 − i/100 | Growth multiplier 1 + i/100 |
| Nominal value (the number in the account) | Real value (adjusted for inflation) |
| Upper bound 4.15 with x < 4.15 | "4.149…" or x ≤ 4.15 |
| Divide by the exact value in ε | Dividing by the approximate value |
| Monthly compounding: N = 12 × years | N = years |
| Payment at the end of each period (exam default) | Payment at the start of each period |

## Quick self-test

1. (a) Calculate (7.5 × 10⁻⁴) × (4 × 10⁹), giving your answer in the form a × 10ᵏ. (b) Simplify (2x⁻²)³.
2. An arithmetic sequence has u₁ = 9 and d = −2. Find S₁₂.
3. Evaluate the sum of (5r + 2) from r = 1 to 16.
4. A geometric sequence has u₁ = 1200 and r = 0.9. Find u₇.
5. A geometric sequence has u₁ = 3 and r = 2. Find S₆.
6. £2000 is invested at 2.4% per year, compounded quarterly. Find its value after 8 years.
7. A machine costing £18 000 depreciates by 15% per year. Find its value after 3 years.
8. State the bounds of (a) x = 7.3 to 1 d.p. (b) y = 2600 to the nearest 100.
9. Find the percentage error when π is approximated by 3.14.
10. Find (a) log 0.02 (b) ln 40, to 3 s.f.
11. A loan of £9000 at 7.2% per year, compounded monthly, is repaid monthly over 3 years. Find the monthly payment.
12. Solve x³ − 4x + 1 = 0.

### Answers

1. (a) 30 × 10⁵ = **3 × 10⁶** (b) 2³x⁻⁶ = **8x⁻⁶ = 8/x⁶**
2. S₁₂ = 6(18 + 11 × (−2)) = 6 × (−4) = **−24**
3. u₁ = 7, d = 5, u₁₆ = 82; S₁₆ = 8(7 + 82) = **712**
4. 1200 × 0.9⁶ = 637.729… = **638** (3 s.f.)
5. 3(2⁶ − 1)/(2 − 1) = **189**
6. 2000 × (1 + 2.4/400)³² = **£2421.95**
7. 18 000 × 0.85³ = **£11 054.25**
8. (a) **7.25 ≤ x < 7.35** (b) **2550 ≤ y < 2650**
9. |3.14 − π|/π × 100% = **0.0507%** (3 s.f.)
10. (a) **−1.70** (b) **3.69**
11. N = 36, I% = 7.2, PV = 9000, FV = 0, P/Y = C/Y = 12 → PMT = −278.72, so **£278.72**
12. GDC polynomial solver: **x = −2.11, 0.254, 1.86** (3 s.f.)

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--03-geometric-salary.webp" width="900" height="930" alt="A bar chart of a salary rising 3% a year for 8 years, each bar showing the starting 38 000 plus growth, labelled with the power of r used (r^0 to r^7). Year 8 is 38 000 x 1.03^7, about 46 700 pounds, and the 8-year total is about 338 000 pounds. A warning says the power is 7, not 8." loading="lazy">
  <figcaption>Year n uses r^(n-1); the sum of the first n terms is a geometric series.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--05-depreciation.webp" width="900" height="920" alt="A bar chart of a car worth 24 500 pounds losing 14% a year, value 24 500 x 0.86^n for n = 0 to 8. A dashed line marks 10 000 pounds. Year 5 is 11 525.46 (above) and year 6 is 9911.90 (below), so the value first falls below 10 000 at the end of year 6." loading="lazy">
  <figcaption>Depreciation multiplies by 0.86 each year; a table finds when the value passes 10 000.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--06-logarithm-power.webp" width="900" height="1220" alt="Two graphs. y = 10^x reaches 5000 at x = 3.70, so x = log 5000. y = e^x reaches 12 at x = 2.48, so x = ln 12. A further example is pH = -log(3.2 x 10^-5) = 4.49. An HL-only tag notes that the laws of logarithms are not needed here." loading="lazy">
  <figcaption>a^x = b is the same as x = log_a b; the GDC evaluates log and ln.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--07-bounds-percentage-error.webp" width="900" height="1060" alt="Two number lines. The radius 3.4 cm to one decimal place lies in 3.35 &lt;= r &lt; 3.45. The areas from the lower bound, measured value and upper bound are 35.257, 36.317 and 37.393 square centimetres. The percentage errors are 2.88% against the upper and 3.01% against the lower, so the maximum is about 3.01%." loading="lazy">
  <figcaption>Bounds for the radius give bounds for the area; the maximum percentage error divides by the smaller true value.</figcaption>
</figure>


## Where marks are usually lost

- Leaving an answer as `4.2E7` instead of 4.2 × 10⁷.
- Using rⁿ for the nth term, so the answer is one period out.
- Writing only a GDC answer for a sum without stating u₁ and d (or r), which the guide expects you to identify.
- Entering years instead of periods for N when interest is compounded quarterly or monthly.
- Giving PV and PMT the same sign in the TVM solver.
- Answering "33 quarters" when the balance reaches a target part-way through the 34th quarter; interest is only added at the end of each period, so round up.
- Dividing by the approximate value in percentage error.
- Keeping a negative length or a value outside the domain as a root.
- Giving money to 3 significant figures when the question asks for the nearest cent, or the reverse.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-number-approximation-financial--09-polynomial-roots.webp" width="900" height="1010" alt="A graph of y = 2x^3 - 5x^2 - 4x + 3 crossing the x-axis at x = -1, 0.5 and 3, the roots from the GDC solver. The region x &lt; 0 is shaded and the root -1 is shown hollow: if x is a length it is rejected." loading="lazy">
  <figcaption>Roots are where the graph crosses the axis; check them against the context.</figcaption>
</figure>


## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021.
