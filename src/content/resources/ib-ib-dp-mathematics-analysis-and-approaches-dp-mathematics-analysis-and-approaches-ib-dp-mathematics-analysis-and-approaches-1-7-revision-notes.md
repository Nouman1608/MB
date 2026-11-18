---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Laws of exponents and laws of logarithms -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.07
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-7"
description: "Revision notes for IB DP Maths AA section 1.7: rational exponents, log laws, change of base, solving exponential equations, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **syllabus section 1.7** of IB DP Mathematics: Analysis and Approaches (first assessment 2021): rational exponents, the laws of logarithms, change of base, and solving exponential equations. It is common content for SL and HL. For derivations and annotated examples, use the [section 1.7 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-7/).

## Condensed recall: rational exponents

- a^(1/m) = ᵐ√a (positive root when m is even)
- a^(n/m) = (ᵐ√a)ⁿ = ᵐ√(aⁿ); by hand, take the root first
- a^(−n/m) = 1/a^(n/m)
- All integer laws still apply: add exponents when multiplying, subtract when dividing, multiply for a power of a power.

**Quick conversions**

| Root form | Power form |
|---|---|
| √x | x^(1/2) |
| 1/√x | x^(−1/2) |
| x√x | x^(3/2) |
| ∛(x²) | x^(2/3) |
| 4/∛x | 4x^(−1/3) |

**Evaluating by hand:** 81^(3/4) = (⁴√81)³ = 3³ = 27; (4/9)^(−3/2) = (9/4)^(3/2) = (3/2)³ = 27/8.

## Condensed recall: logarithms

For a, b > 0, a, b ≠ 1, and x, y > 0:

| Law | Statement | Comes from |
|---|---|---|
| Product | log_a xy = log_a x + log_a y | aᵖ × a^q = a^(p + q) |
| Quotient | log_a(x/y) = log_a x − log_a y | aᵖ ÷ a^q = a^(p − q) |
| Power | log_a xᵐ = m log_a x | (aᵖ)ᵐ = a^(mp) |
| Change of base | log_a x = (log_b x)/(log_b a) | take log_b of aʸ = x |

**Special values:** log_a 1 = 0, log_a a = 1, log_a aᵏ = k, a^(log_a x) = x.

**Corollaries:** log_a(1/x) = −log_a x; log_a √x = (1/2) log_a x; log_a b × log_b a = 1; log_(a²) x = (1/2) log_a x.

**Combining into one log:** move coefficients up as powers first, then add (multiply inside) and subtract (divide inside). For example 3 ln 2 + ln 5 − 2 ln 10 = ln(8 × 5/100) = ln 0.4.

## Condensed recall: solving equations

**Exponential equations**

1. **Same base**: 8^x = 4^(x + 1) → 2^(3x) = 2^(2x + 2) → x = 2.
2. **Take logs**: 5^x = 3^(x + 2) → x ln 5 = (x + 2) ln 3 → x = 2 ln 3/(ln 5 − ln 3) = ln 9/ln(5/3) = 4.30 (3 s.f.).
3. **Quadratic in a power**: 4^x − 6 × 2^x + 8 = 0 → u = 2^x, (u − 2)(u − 4) = 0 → x = 1 or x = 2.

**Logarithmic equations**

1. Combine into a single log on each side, or one log equal to a number.
2. Remove the log: log_a(stuff) = k means stuff = aᵏ.
3. Solve, then check every root in the original equation; reject any that make an argument zero or negative.

## Key terms

| Term | Meaning |
|---|---|
| Rational exponent | An exponent of the form n/m with n, m integers, m ≠ 0 |
| Argument of a logarithm | The number whose log is taken, x in log_a x; it must be positive |
| Base of a logarithm | a in log_a x; a > 0 and a ≠ 1 |
| Change of base | Rewriting log_a x in a base b of your choice |
| Exact value | An answer left as a surd, fraction or expression in logs, not a decimal |
| Extraneous root | A solution produced by the algebra that fails the original equation |

## Exam traps

- **No sum law.** log(x + y) does not split; ln(e^x + 1) is not x + ln 1.
- **Power on the log versus power inside.** (ln x)² ≠ 2 ln x; only ln(x²) = 2 ln x.
- **Quotient of logs.** ln 8/ln 2 = 3 (change of base), but ln(8/2) = ln 4. They are different.
- **Coefficient placement.** 2 log 5 = log 25, not log 10.
- **Domain after combining.** log(x − 4) + log(x + 1) = log 6 gives x² − 3x − 10 = 0, so x = 5 or x = −2; x = −2 must be rejected.
- **Even roots.** x^(1/2) is the positive root only.
- **Taking logs of a sum of terms.** In 3^x + 3^(x + 1) = 36, factorise first: 3^x(1 + 3) = 36, so 3^x = 9 and x = 2.

## Self-test

1. Evaluate 125^(−2/3) without a calculator.
2. Simplify (16x⁸)^(3/4).
3. Write 5/(x√x) in the form axⁿ.
4. Express 2 log 20 − log 4 as a single logarithm and evaluate it exactly.
5. Write ln(x²y³/z) in terms of ln x, ln y and ln z.
6. Find the exact value of log₈ 16.
7. Use change of base to evaluate log₅ 40 to 3 s.f.
8. Show that log₄ x = (1/2) log₂ x.
9. Solve 9^(x − 1) = 27^x.
10. Solve 3^(x + 1) = 2^(2x), giving an exact answer and 3 s.f.
11. Solve log₃(2x + 1) − log₃(x − 1) = 2.
12. Solve 2^(2x) − 3 × 2^(x + 1) + 8 = 0.

**Answers**

1. 125^(−2/3) = 1/(∛125)² = 1/25.
2. 16^(3/4) x^(8 × 3/4) = 8x⁶.
3. 5x^(−3/2).
4. log(400/4) = log 100 = 2.
5. 2 ln x + 3 ln y − ln z.
6. log₂ 16/log₂ 8 = 4/3.
7. ln 40/ln 5 = 2.29 (3 s.f.).
8. log₄ x = log₂ x/log₂ 4 = log₂ x/2.
9. 3^(2x − 2) = 3^(3x), so 2x − 2 = 3x and x = −2.
10. (x + 1) ln 3 = 2x ln 2, so x(ln 4 − ln 3) = ln 3 and x = ln 3/ln(4/3) = 3.82 (3 s.f.).
11. log₃((2x + 1)/(x − 1)) = 2, so 2x + 1 = 9(x − 1), giving x = 10/7. Check: x − 1 = 3/7 > 0, so it is valid.
12. 3 × 2^(x + 1) = 6 × 2^x. With u = 2^x: u² − 6u + 8 = 0, so u = 2 or 4, giving x = 1 or x = 2.

## Where next

Work through the [section 1.7 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-7-practice/), which have mark-by-mark answers. The integer-exponent foundations are in the [section 1.5 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-5-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.7.
