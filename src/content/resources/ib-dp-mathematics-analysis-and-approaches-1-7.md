---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.7 Laws of exponents and laws of logarithms"
resourceType: "study-guides"
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
description: "IB DP Maths AA section 1.7 study guide: rational exponents, why the log laws hold, change of base, and solving exponential and log equations."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **syllabus section 1.7** of IB DP Mathematics: Analysis and Approaches (first assessment 2021): the laws of exponents with rational exponents, the laws of logarithms, change of base, and solving exponential equations, including by using logarithms. It is common content for SL and HL.

It builds directly on section 1.5, where exponents were integers and logarithms were introduced; revise that first with the [section 1.5 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-1-5/) if a^x = b ⇔ log_a b = x is not yet automatic. The unit overview, with its own set of examples, is the [exponents, logarithms, binomial theorem and proof study guide](/resources/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof/).

## What section 1.7 asks of you

- Use a^(1/m) = ᵐ√a and a^(n/m) = (ᵐ√a)ⁿ, together with the integer laws from section 1.5.
- Use the three laws of logarithms: log_a xy = log_a x + log_a y, log_a(x/y) = log_a x − log_a y and log_a xᵐ = m log_a x, for a, x, y > 0 and a ≠ 1.
- Change the base of a logarithm: log_a x = (log_b x)/(log_b a).
- Solve exponential equations, including by taking logarithms.

## Rational exponents

**Why a^(1/2) = √a.** If the power-of-a-power law is to keep working, (a^(1/2))² = a¹ = a. So a^(1/2) is the number whose square is a, which is √a. In the same way a^(1/3) = ∛a, and in general a^(1/m) = ᵐ√a. For even m this means the positive root.

**Then a^(n/m) = (a^(1/m))ⁿ**: root first, then power. By hand, taking the root first keeps numbers small: 32^(3/5) = 2³ = 8.

Algebraic simplification uses the same laws on letters and numbers together:

```
(8x⁶)^(2/3)       = 8^(2/3) × x^(6 × 2/3) = 4x⁴
x^(1/2)(x^(3/2) − x^(−1/2)) = x² − x⁰ = x² − 1
(√x)³ / x²        = x^(3/2 − 2) = x^(−1/2) = 1/√x
(27/8)^(−2/3)     = (8/27)^(2/3) = (2/3)² = 4/9
```

Converting roots to powers is also the first step before differentiating or integrating expressions such as 3/√x = 3x^(−1/2).

## Where the laws of logarithms come from

Each log law is an exponent law in disguise. Let p = log_a x and q = log_a y, so that x = aᵖ and y = a^q.

- **Product:** xy = aᵖa^q = a^(p + q), so log_a xy = p + q = log_a x + log_a y.
- **Quotient:** x/y = a^(p − q), so log_a(x/y) = log_a x − log_a y.
- **Power:** xᵐ = (aᵖ)ᵐ = a^(mp), so log_a xᵐ = m log_a x.

This is worth knowing for two reasons. It lets you rebuild a law you have forgotten, and it explains the traps: there is no exponent law for a sum aᵖ + a^q, so there is **no** log law for log_a(x + y).

### Combining and expanding

The laws run in both directions. To **combine** into a single logarithm, apply the power law first, then product and quotient:

```
2 log 3 − log 6 + log 4 = log 9 − log 6 + log 4
                        = log (9 × 4 / 6)
                        = log 6
```

To **expand**, rewrite any root as a power first:

```
ln (x³/√y) = ln x³ − ln y^(1/2) = 3 ln x − (1/2) ln y
```

## Change of base

**Derivation.** Let y = log_a x, so aʸ = x. Take log_b of both sides: y log_b a = log_b x, so y = (log_b x)/(log_b a).

Three uses:

1. **Technology:** log₇ 50 = (ln 50)/(ln 7) = 2.01 (3 s.f.).
2. **Exact values by hand:** choose a base in which both numbers are powers. log₂₇ 9 = (log₃ 9)/(log₃ 27) = 2/3.
3. **Equations with two bases:** convert everything to one base.

A neat consequence: log_a b × log_b a = (ln b/ln a)(ln a/ln b) = 1.

## Worked example 1 (calculator-free): a logarithmic equation

Solve log₂(x + 1) + log₂(x − 1) = 3.

```
log₂[(x + 1)(x − 1)] = 3       (product law)
x² − 1 = 2³ = 8                (definition of log)
x² = 9, so x = 3 or x = −3
```

Check the domain: x = −3 makes x + 1 and x − 1 negative, and the logarithm of a negative number is undefined. So **x = 3** only.

*Annotation.* Combining the logs can introduce a value that the original equation does not allow, so always substitute back into the original logarithms.

## Worked example 2 (calculator-free): two different bases

Solve log₃ x = log₉(x + 6).

```
log₉(x + 6) = log₃(x + 6)/log₃ 9 = (1/2) log₃(x + 6)    (change of base)
2 log₃ x = log₃(x + 6)
log₃ x² = log₃(x + 6)           (power law)
x² = x + 6, so (x − 3)(x + 2) = 0
```

x = −2 is rejected because log₃(−2) is undefined, so **x = 3**. Check: log₃ 3 = 1 and log₉ 9 = 1.

## Solving exponential equations

Choose the method from the form of the equation.

| Form | Method |
|---|---|
| Both sides are powers of one base | Rewrite with that base and equate exponents |
| Different bases that cannot be matched | Take ln (or log) of both sides, then collect the x terms |
| Terms like e^(2x) and e^x together | Substitute u = e^x and solve a quadratic |

## Worked example 3 (calculator allowed): unmatched bases

Solve 2^(2x + 1) = 7 × 3^x, giving x exactly and to 3 s.f.

```
(2x + 1) ln 2 = ln 7 + x ln 3          (take ln, use product and power laws)
2x ln 2 − x ln 3 = ln 7 − ln 2
x (ln 4 − ln 3) = ln (7/2)
x = ln (7/2) / ln (4/3) = 4.35 (3 s.f.)
```

*Annotation.* The log of the right-hand side is ln 7 + x ln 3, by the product law; it is not x ln 21. Collect every x term on one side before factorising out x.

## Worked example 4 (calculator-free): a hidden quadratic in e^x

Solve e^(2x) − 5e^x + 6 = 0.

```
Let u = e^x, so e^(2x) = u².
u² − 5u + 6 = 0, so (u − 2)(u − 3) = 0
e^x = 2 gives x = ln 2;   e^x = 3 gives x = ln 3
```

Both values are valid because 2 and 3 are positive. Had a root been negative, you would reject it and say why: e^x > 0 for all x.

## Worked example 5 (calculator-free, in context)

The mass of a radioactive sample is m = 80 × (1/2)^(t/12) grams after t years. Find when m = 5.

```
(1/2)^(t/12) = 5/80 = 1/16 = (1/2)⁴
t/12 = 4, so t = 48 years
```

Matching bases gives an exact answer with no logarithm needed.

## Common mistakes

- Splitting log(x + y) into log x + log y.
- Writing (log x)² as 2 log x. The power law applies to log(x²), not to the square of a log.
- Treating ln x/ln y as ln(x/y). A quotient of logs is a change of base, not the quotient law.
- Forgetting to check the domain after combining logs.
- Evaluating 16^(3/4) as 16³ first, then struggling to take a fourth root of 4096.
- Taking logs of a sum: ln(e^x + 3) is not x + ln 3.

## Exam technique: the command words

- **Express … as a single logarithm**: power law first, then combine.
- **Find the exact value**: no decimals; leave answers such as ln(7/2)/ln(4/3) or 2/3.
- **Solve**: show the law used at each stage, then check every root in the original equation.
- **Hence**: use the previous part. If part (a) asks you to show log₄ x = (1/2) log₂ x, part (b) usually needs it.

Paper 1 (no technology) tests exact work: rational exponents, the log laws, change of base between related numbers and quadratic-type equations. On Paper 2 you may evaluate logs with the GDC or use its solver, but write the equation you are solving.

## Where next

Condense the laws with the [section 1.7 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-1-7-revision-notes/) and test yourself with the [section 1.7 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-1-7-practice/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.7.
