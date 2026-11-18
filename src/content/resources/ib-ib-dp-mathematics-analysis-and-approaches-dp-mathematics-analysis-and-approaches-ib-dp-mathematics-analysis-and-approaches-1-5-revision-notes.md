---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.5 Laws of exponents and introduction to logarithms -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.05
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-5"
description: "Revision notes for IB DP Maths AA section 1.5: integer exponent laws, log and ln as inverse operations, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **syllabus section 1.5** of IB DP Mathematics: Analysis and Approaches (first assessment 2021): the laws of exponents with integer exponents, and the introduction to logarithms with base 10 and base e. It is common content for SL and HL. For full explanations and annotated examples, use the [section 1.5 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-5/).

## Condensed recall: integer exponents

For a, b ≠ 0 and integers m, n:

- aᵐ × aⁿ = aᵐ⁺ⁿ (same base: add exponents)
- aᵐ ÷ aⁿ = aᵐ⁻ⁿ (same base: subtract exponents)
- (aᵐ)ⁿ = aᵐⁿ (power of a power: multiply)
- (ab)ⁿ = aⁿbⁿ and (a/b)ⁿ = aⁿ/bⁿ (the power reaches every factor)
- a⁰ = 1
- a⁻ⁿ = 1/aⁿ, so (a/b)⁻ⁿ = (b/a)ⁿ

**Where they come from.** Each law counts repeated factors. a⁰ = 1 and a⁻ⁿ = 1/aⁿ are the only definitions that keep the division law true, which is why a must be non-zero.

**What the laws do not say.**

- Nothing combines aᵐ + aⁿ. You can only factorise: 2⁵ + 2³ = 2³(2² + 1) = 40.
- Nothing combines different bases with different powers, such as 2³ × 3², except by evaluating.
- (a + b)ⁿ does not equal aⁿ + bⁿ.

**Rewriting in the form axⁿ.** Split a fraction term by term over a single-term denominator:

- (x³ − 5)/x² = x − 5x⁻²
- 3/(4x²) = (3/4)x⁻²
- 1/(3x)² = 1/(9x²) = (1/9)x⁻²

**Same-base equations with integer answers.** Write both sides as powers of one base and equate exponents. For 5^(2x − 1) = 1/125, write 1/125 = 5⁻³, so 2x − 1 = −3 and x = −1.

## Condensed recall: logarithms

**Definition.** For a > 0, a ≠ 1 and b > 0, a^x = b is equivalent to log_a b = x.

**Notation.**

- log x means log₁₀ x (common logarithm).
- ln x means logₑ x (natural logarithm), with e ≈ 2.718.

**Values that follow from the definition.**

| Fact | Reason |
|---|---|
| log 1 = 0 and ln 1 = 0 | 10⁰ = e⁰ = 1 |
| log 10 = 1 and ln e = 1 | 10¹ = 10, e¹ = e |
| log 10ᵏ = k and ln eᵏ = k | logarithm undoes the exponential |
| 10^(log x) = x and e^(ln x) = x, for x > 0 | exponential undoes the logarithm |
| log x < 0 when 0 < x < 1 | such x need a negative power of 10 |
| log 0 and log of a negative are undefined | 10^x > 0 for every real x |

**Estimating.** Place the number between powers of the base. 450 lies between 10² and 10³, so 2 < log 450 < 3 (it is 2.65 to 3 s.f.). 0.03 lies between 10⁻² and 10⁻¹, so log 0.03 is between −2 and −1 (it is −1.52).

**Solving with technology (Paper 2).**

1. Isolate the exponential term: divide or subtract any constants first.
2. Convert: 10^(stuff) = k gives stuff = log k; e^(stuff) = k gives stuff = ln k.
3. Rearrange for the unknown, keeping the log unrounded.
4. Round once, at the end, normally to 3 s.f.

## Key terms

| Term | Meaning |
|---|---|
| Base | The number being raised to a power, a in aⁿ |
| Exponent (index, power) | The number n in aⁿ |
| Integer exponent | An exponent in ℤ: positive, zero or negative whole number |
| Reciprocal | 1/a; a⁻¹ is the reciprocal of a |
| Logarithm, log_a b | The exponent to which a must be raised to give b |
| Common logarithm | Base 10, written log |
| Natural logarithm | Base e, written ln |
| e | An irrational constant, approximately 2.718, used as the natural base |
| Inverse operations | Operations that undo each other, such as 10^x and log x |

## Exam traps

- **Coefficient outside the bracket.** 4x⁻¹ is 4/x; (4x)⁻¹ is 1/(4x).
- **Sign of a negative base.** (−3)² = 9 but −3² = −9. Cubing −2a gives −8a³.
- **Subtracting a negative exponent.** x⁴ ÷ x⁻³ = x⁷, not x¹.
- **Only "positive exponents" counts.** An answer such as 5a⁻²b does not meet "give your answer with positive exponents"; write 5b/a².
- **Taking logs too early.** In 3e^(2t) = 12, divide by 3 first: e^(2t) = 4, so t = (ln 4)/2.
- **Base mix-up.** On a GDC the LOG key is base 10 and LN is base e. log 5 ≈ 0.699 and ln 5 ≈ 1.61, so the two are not interchangeable.
- **Early rounding.** Keep ln 4 in the calculator, not 1.4, or a 3 s.f. answer can come out wrong.
- **Impossible inputs.** If your working reaches ln(−2) or log 0, an earlier step is wrong, or that solution must be rejected.

## Self-test

1. Simplify 2⁻³ × 2⁵ ÷ 2⁻¹ as a single power of 2, then evaluate it.
2. Simplify (3a²b⁻¹)² × a⁻⁵, giving your answer with positive exponents.
3. Write (8x⁴ − 2x)/(4x³) in the form px + qx⁻², stating p and q.
4. Evaluate (−1/2)⁻³.
5. Explain why a⁰ = 1 for a ≠ 0, using the division law.
6. Write 10⁻³ = 0.001 in logarithmic form.
7. Write ln 20 = x in exponential form.
8. Write down the exact value of ln e⁻⁴.
9. Without a calculator, state the two consecutive integers between which log 0.6 lies.
10. Solve 10^x = 47, giving x to 3 s.f.
11. Solve 5e^(0.4t) = 35, giving t to 3 s.f.
12. Explain why the equation e^x = −3 has no real solution.

**Answers**

1. 2^(−3 + 5 − (−1)) = 2³ = 8.
2. 9a⁴b⁻² × a⁻⁵ = 9a⁻¹b⁻² = 9/(ab²).
3. 8x⁴/(4x³) − 2x/(4x³) = 2x − (1/2)x⁻², so p = 2 and q = −1/2.
4. (−1/2)⁻³ = (−2)³ = −8.
5. aⁿ ÷ aⁿ = 1, and the division law gives aⁿ ÷ aⁿ = aⁿ⁻ⁿ = a⁰. So a⁰ must equal 1. The argument needs a ≠ 0 because it divides by aⁿ.
6. log 0.001 = −3.
7. e^x = 20.
8. −4, since ln undoes the exponential.
9. 0.6 lies between 10⁻¹ = 0.1 and 10⁰ = 1, so log 0.6 lies between −1 and 0 (it is −0.222 to 3 s.f.).
10. x = log 47 = 1.67 (3 s.f.).
11. e^(0.4t) = 7, so 0.4t = ln 7 and t = (ln 7)/0.4 = 4.86 (3 s.f.).
12. e^x > 0 for every real x, so it can never equal −3. Equivalently, x = ln(−3) is undefined.

## Where next

Practise mixed questions in the [section 1.5 practice set](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-5-practice/). Rational exponents and the laws of logarithms continue in the [section 1.7 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-7-revision-notes/), and the whole unit is summarised in the [exponents, logarithms, binomial theorem and proof revision notes](/resources/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.5.
