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

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021.
