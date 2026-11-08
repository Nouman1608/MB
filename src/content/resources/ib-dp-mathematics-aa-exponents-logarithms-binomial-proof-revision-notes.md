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
reviewStatus: "review-pending"
publishedDate: 2026-09-27
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by muhammad-ghazali-siddiqui on 2026-09-29."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof--01-exponent-ladder.webp" width="900" height="720" alt="Eight boxes show 2 to the power -3 to 4 as 1/8, 1/4, 1/2, 1, 2, 4, 8, 16, each step to the right multiplying by 2. Arrows from 2^3 = 8 and 2^(-1) = 1/2 merge into 2^2 = 4, showing that multiplying powers adds the exponents (3 + (-1) = 2)." loading="lazy">
  <figcaption>Each step up the exponent multiplies by 2, so multiplying powers adds exponents.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof--02-rational-exponents.webp" width="900" height="890" alt="27^(2/3): the cube root of 27 is 3 (the edge of a 3 by 3 by 3 cube) and squaring gives 9. 32^(-3/5): the fifth root of 32 is 2, cubing gives 8, and the reciprocal gives 1/8. Take the root first so the numbers stay small." loading="lazy">
  <figcaption>For a^(n/m), take the m-th root first, then the power n.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof--04-change-of-base.webp" width="900" height="900" alt="A ruler marks 1, 2, 4, 8, 16, 32 at their base-2 logarithms 0 to 5. The length to 32 is 5 units and one base-8 step (log2 8) is 3 units, so 5 units hold 5/3 steps: log8 32 = 5/3. With a calculator, log3 20 = ln 20 / ln 3 = 2.73." loading="lazy">
  <figcaption>Changing base counts how many steps of one size fit in another length.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof--06-hidden-quadratic.webp" width="900" height="990" alt="The graph of y = 9^x - 4(3^x) + 3 crosses the x-axis at x = 0 and x = 1. Substituting y = 3^x gives y^2 - 4y + 3 = 0, so (y-1)(y-3) = 0, 3^x = 1 or 3. Because 3^x is always positive, a negative root for y must be rejected." loading="lazy">
  <figcaption>A 9^x term is (3^x)^2, so substitute y = 3^x and solve the quadratic.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof--07-identity-lhs-rhs.webp" width="900" height="950" alt="The curves y = 1/n - 1/(n+2) (dashed) and y = 2/(n(n+2)) (thick) lie exactly on top of each other, with asymptotes at n = 0 and n = -2. At n = 3 both equal 2/15, matching the numerical check. Because they agree for every allowed n, the statement is an identity." loading="lazy">
  <figcaption>An identity (the symbol identical-to) is true for every allowed n: both sides trace one curve.</figcaption>
</figure>


## Worked reminders

**Exponents.** (3x²y⁻¹)³ × (2x⁻⁴y)² = 27x⁶y⁻³ × 4x⁻⁸y² = 108/(x²y).

**Change of base by hand.** log₂₅ 125 is awkward, but log₅ 125 = 3 and log₅ 25 = 2, so log₂₅ 125 = 3/2.

**Change of base with a GDC.** log₃ 20 = (ln 20)/(ln 3) = 2.73 (3 s.f.).

**Taking logs.** 5^(x+1) = 3^(2x) gives (x + 1) ln 5 = 2x ln 3, so x = ln 5 / (2 ln 3 − ln 5) = 2.74 (3 s.f.).

**Proof with a check.** 1/n − 1/(n + 2) ≡ 2/(n(n + 2)). With n = 3: 1/3 − 1/5 = 2/15 and 2/(3 × 5) = 2/15. The two sides agree.

**Binomial term.** In (x² − 2/x)⁶ the general term is 6Cr (−2)^r x^(12 − 3r). The constant term has r = 4: 15 × 16 = 240.

**nCr by technology.** To find r when 8Cr = 56, tabulate 8Cr for r = 0 to 8. The table gives r = 3 and r = 5.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof--09-term-independent-of-x.webp" width="900" height="880" alt="A bar chart of the seven terms of (x^2 - 2/x)^6 with coefficients 1, -12, 60, -160, 240, -192, 64 and powers of x equal to 12 - 3r. The term at r = 4 has power 0, so the term independent of x is 6C4 x (-2)^4 = 15 x 16 = 240." loading="lazy">
  <figcaption>Solve 12 - 3r = 0 to find which term has no x.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof--08-pascal-expansion.webp" width="900" height="910" alt="Pascal’s triangle for rows 0 to 8, each entry the sum of the two above. Row 4 (1, 4, 6, 4, 1) gives (2x - 3)^4 = 16x^4 - 96x^3 + 216x^2 - 216x + 81. In row 8, 8C3 = 8C5 = 56 by symmetry." loading="lazy">
  <figcaption>Row n of Pascal’s triangle gives the coefficients of (a + b)^n.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof--03-log-solves-power.webp" width="900" height="960" alt="A graph of y = 10^x shows the level y = 50 meeting the curve at x = log 50 = 1.70 (3 s.f.). The definition 2^5 = 32 is equivalent to log2 32 = 5, and the same idea in base e gives x = ln 7 = 1.95 for e^x = 7." loading="lazy">
  <figcaption>A logarithm answers &quot;what power?&quot;, so 10^x = 50 gives x = log 50 = 1.70.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof--05-solve-by-logs.webp" width="900" height="970" alt="The curves y = 5^(x+1) and y = 3^(2x) cross at x = 2.74 where both equal about 410. Taking logs gives (x+1) ln 5 = 2x ln 3, so x = ln 5 / ln(9/5) = 2.74." loading="lazy">
  <figcaption>The solution of 5^(x+1) = 3^(2x) is where the curves meet, found with logs.</figcaption>
</figure>

## Frequently asked questions

**What is the difference between = and ≡?**
The = sign states an equation, true only for certain values, such as x² − 9 = 0 for x = ±3. The ≡ sign states an identity, true for every value, such as x² − 9 ≡ (x − 3)(x + 3).

**Does log(x + y) equal log x + log y?**
No. There is no law for the log of a sum. The product law says log xy = log x + log y, which is different.

**What is the change of base formula for logarithms?**
log_a x = (log_b x)/(log_b a). By hand, change to a base where both numbers are powers of the same thing; with a GDC, change to ln or log.

**What is the difference between log x and ln x?**
In IB DP Mathematics: Analysis and Approaches, log x means log base 10 and ln x means the natural logarithm, base e.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
