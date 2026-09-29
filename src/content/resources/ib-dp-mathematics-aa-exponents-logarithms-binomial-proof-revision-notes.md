---
title: "IB DP Mathematics: Analysis and Approaches -- Exponents, logarithms, the binomial theorem and simple proof Revision Notes"
seoTitle: "IB Maths AA Exponents, Logs and Binomial Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Exponents, logarithms, the binomial theorem and simple proof"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.5
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-5"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-6"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-7"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-9"
description: "Condensed IB DP Maths AA revision notes on exponent and log laws, exponential equations, LHS to RHS proof and binomial expansions, with a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

For full explanations and longer worked examples, read the [exponents, logarithms, binomial theorem and proof study guide](/resources/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof/) first.

These revision notes cover the exponents, logarithms, binomial theorem and simple proof unit of IB Diploma Programme Mathematics: Analysis and Approaches. They are aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 1.5, 1.6, 1.7 and 1.9. This is common content for SL and HL. The notes follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 sessions.

Test yourself afterwards with the [practice questions](/resources/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof-practice/). Track the whole course on the [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/).

## Definitions

- **Exponent (index):** in a^n, n is the exponent and a is the base.
- **Logarithm:** a^x = b is equivalent to log_a b = x, for a > 0, a ≠ 1, b > 0.
- **Common logarithm:** log x means log₁₀ x.
- **Natural logarithm:** ln x means log_e x, where e ≈ 2.718.
- **Identity (≡):** true for every value of the variable.
- **Equation (=):** true only for particular values.
- **Binomial coefficient:** nCr = n!/(r!(n − r)!), the number in row n, position r, of Pascal's triangle (counting from r = 0).

## Formulas

| Topic | Result | Condition |
|---|---|---|
| Exponents | a^m × a^n = a^(m+n) | |
| | a^m ÷ a^n = a^(m−n) | a ≠ 0 |
| | (a^m)^n = a^(mn) | |
| | a⁰ = 1, a^(−n) = 1/a^n | a ≠ 0 |
| | a^(1/m) = ᵐ√a, a^(n/m) = (ᵐ√a)^n | positive root if m even |
| Log definition | a^x = b ⇔ x = log_a b | a > 0, a ≠ 1, b > 0 |
| Special values | log_a a = 1, log_a 1 = 0 | |
| Product law | log_a xy = log_a x + log_a y | a, x, y > 0 |
| Quotient law | log_a (x/y) = log_a x − log_a y | a, x, y > 0 |
| Power law | log_a x^m = m log_a x | a, x > 0 |
| Change of base | log_a x = (log_b x)/(log_b a) | a, b, x > 0 |
| Binomial theorem | (a + b)^n = Σ nCr a^(n−r) b^r, r = 0 to n | n ∈ ℕ |
| General term | nCr a^(n−r) b^r | |
| Coefficients | nCr = n!/(r!(n − r)!) | 0 ≤ r ≤ n |

## Method in steps

> **Simplify an exponent expression**
> 1. Expand any bracket raised to a power: apply it to the number and to every letter.
> 2. Collect each base: add exponents when multiplying, subtract when dividing.
> 3. Rewrite negative exponents as fractions if the question asks for positive exponents.

> **Evaluate a^(n/m) by hand**
> 1. Take the m-th root of a.
> 2. Raise to the power n.
> 3. If the exponent is negative, take the reciprocal.
> Example: 16^(3/4) = (⁴√16)³ = 2³ = 8.

> **Combine logs into a single log**
> 1. Move every coefficient up as a power (power law).
> 2. Combine sums as products and differences as quotients.
> 3. Evaluate if the result is a known power of the base.
> Example: log₆ 72 − log₆ 2 = log₆ 36 = 2.

> **Solve an exponential equation**
> 1. Can both sides be written with the same base? Equate exponents.
> 2. If not, take ln (or log) of both sides and use the power law.
> 3. Collect the x terms on one side and factorise out x.
> 4. If terms such as 4^x and 2^x appear together, substitute y = 2^x to get a quadratic. Reject y ≤ 0.
> 5. Give an exact answer if asked, then a 3 s.f. value.

> **LHS to RHS proof**
> 1. Write "LHS =" and start from the left-hand side only.
> 2. Transform it one algebraic step per line.
> 3. Finish with "= RHS".
> 4. Check with a value: substitute a number into both sides.

> **Find a specific binomial term**
> 1. Write the general term nCr a^(n−r) b^r with a and b in full (include signs).
> 2. Simplify the power of x into one expression in r.
> 3. Set it equal to the power you want and solve for r.
> 4. Substitute r and evaluate the coefficient.

## Worked reminders

**Exponents.** (3x²y⁻¹)³ × (2x⁻⁴y)² = 27x⁶y⁻³ × 4x⁻⁸y² = 108/(x²y).

**Change of base by hand.** log₂₅ 125 is awkward, but log₅ 125 = 3 and log₅ 25 = 2, so log₂₅ 125 = 3/2.

**Change of base with a GDC.** log₃ 20 = (ln 20)/(ln 3) = 2.73 (3 s.f.).

**Taking logs.** 5^(x+1) = 3^(2x) gives (x + 1) ln 5 = 2x ln 3, so x = ln 5 / (2 ln 3 − ln 5) = 2.74 (3 s.f.).

**Proof with a check.** 1/n − 1/(n + 2) ≡ 2/(n(n + 2)). With n = 3: 1/3 − 1/5 = 2/15 and 2/(3 × 5) = 2/15. The two sides agree.

**Binomial term.** In (x² − 2/x)⁶ the general term is 6Cr (−2)^r x^(12 − 3r). The constant term has r = 4: 15 × 16 = 240.

**nCr by technology.** To find r when 8Cr = 56, tabulate 8Cr for r = 0 to 8. The table gives r = 3 and r = 5.

## Pascal's triangle, rows 0 to 6

```
1
1  1
1  2  1
1  3  3  1
1  4  6  4  1
1  5 10 10  5  1
1  6 15 20 15  6  1
```

Row n gives the coefficients of (a + b)^n. Each row is symmetric because nCr = nC(n−r).

## Must-know distinctions

- **= versus ≡.** x² − 9 = 0 is an equation (x = ±3). x² − 9 ≡ (x − 3)(x + 3) is an identity (every x). Use ≡ when a question asks you to show that an identity holds.
- **log x versus ln x.** log x is base 10. ln x is base e. Both are single keys on the GDC.
- **log_a (xy) versus log_a x × log_a y.** Only the first splits (into a sum). The second is not a law.
- **(log_a x)/(log_a y) versus log_a (x/y).** The first is a change of base, equal to log_y x. The second is log_a x − log_a y.
- **a^(−n) versus −a^n.** 2⁻³ = 1/8. −2³ = −8.
- **nCr versus the term.** In (2x + 3)⁸ the coefficient of x⁵ is 8C3 × 2⁵ × 3³ = 48 384, not 8C3 = 56. The powers of the numbers inside the bracket are part of the coefficient.
- **Numerical versus algebraic proof.** A numerical proof shows one case, such as 1/3 − 1/5 = 2/15. An algebraic proof shows the general case for all allowed values.

## What needs a calculator

AA Paper 1 allows no technology; Paper 2 requires it. Be fluent by hand with exponent laws, fractional powers of perfect powers, log laws, change of base between related bases, equations solved by matching bases or by a hidden quadratic, LHS to RHS proofs, binomial expansions and nCr from the formula. Use technology for decimal values of logs, for equations that need logs to finish, and for tables of nCr.

## Quick self-test

1. Simplify x⁵ × x⁻⁸, giving the answer with a positive exponent.
2. Evaluate 8^(−2/3).
3. Find log₃ 81.
4. Write 5^x = 12 in logarithmic form.
5. Find the exact value of log 25 + log 4.
6. Find the exact value of log₆ 72 − log₆ 2.
7. Find log₂ 7 to 3 significant figures.
8. Solve 2^(x+1) = 32.
9. Find the coefficient of x² in (1 + 2x)⁶.
10. Evaluate 5C2 using the formula.
11. Is (x + 1)² = x² + 1 an identity? Give a reason.
12. Solve e^(2x) = 5, giving x exactly and to 3 significant figures.

### Answers

1. x⁻³ = **1/x³**
2. 8^(2/3) = (∛8)² = 4, so 8^(−2/3) = **1/4**
3. 3⁴ = 81, so log₃ 81 = **4**
4. **x = log₅ 12**
5. log (25 × 4) = log 100 = **2**
6. log₆ (72/2) = log₆ 36 = **2**
7. (ln 7)/(ln 2) = **2.81**
8. 32 = 2⁵, so x + 1 = 5 and **x = 4**
9. 6C2 × 2² = 15 × 4 = **60**
10. 5!/(2! 3!) = 120/12 = **10**
11. **No.** (x + 1)² = x² + 2x + 1, which equals x² + 1 only when x = 0. It is an equation, not an identity.
12. 2x = ln 5, so **x = ½ ln 5 = 0.805**

## Where marks are usually lost

- Raising only the letters to a power: (3x²)³ written as 3x⁶ instead of 27x⁶.
- Writing a^(−n) as a negative number rather than a reciprocal.
- Splitting log (x + y) as log x + log y, or writing log x × log y as log xy.
- Using the power law on a coefficient outside the log the wrong way: 2 log 5 is log 25, not log 10.
- Keeping a negative value of 3^x or 2^x after solving a hidden quadratic.
- Giving only a decimal when the question asks for x exactly, such as ln 40 / ln 2.5.
- Working on both sides of a "show that", or starting from the statement to be proved.
- Losing the negative sign of b in (a − b)^n, so the terms no longer alternate.
- Quoting nCr as the coefficient and forgetting the powers of the numbers in the bracket.
- Finding one value of r from an nCr equation and missing the symmetric second value.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
