---
title: "IB DP Mathematics: Analysis and Approaches -- Exponents, logarithms, the binomial theorem and simple proof Study Guide"
seoTitle: "IB Maths AA Exponents, Logs and Binomial Study Guide"
resourceType: "study-guides"
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
description: "IB DP Maths AA study guide to exponents, logarithms, simple deductive proof and the binomial theorem, with fully worked examples for SL and HL."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the exponents, logarithms, binomial theorem and simple proof unit of IB Diploma Programme Mathematics: Analysis and Approaches. It is aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 1.5, 1.6, 1.7 and 1.9. All of it is common content, so it is examined at both SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

When you have worked through it, use the [revision notes](/resources/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof-revision-notes/) for quick recall and the [practice questions](/resources/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof-practice/) to test yourself. The [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/) show where this unit sits in the course.

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 1.5 | Use the laws of exponents with integer exponents. Understand logarithms with base 10 and base e, that a^x = b is equivalent to log_a b = x, and evaluate logarithms with technology | SL and HL |
| 1.6 | Write simple deductive proofs, numerical and algebraic, laid out from left-hand side to right-hand side (LHS to RHS). Use the symbols = and ≡ correctly. Check your own results | SL and HL |
| 1.7 | Use the laws of exponents with rational exponents, the laws of logarithms and the change of base formula. Solve exponential equations, including by using logarithms | SL and HL |
| 1.9 | Expand (a + b)^n for n ∈ ℕ using the binomial theorem. Use Pascal's triangle and nCr, found both by formula and by technology | SL and HL |

Section 1.8 (infinite geometric series) sits between these in the guide but belongs with sequences and series, so it is not taught here. The extension of the binomial theorem to fractional and negative exponents is HL only (section 1.10) and is also not covered here.

## Exponents (sections 1.5 and 1.7)

### The laws

For a ≠ 0 and exponents m and n:

| Law | Example |
|---|---|
| a^m × a^n = a^(m+n) | 7⁴ × 7⁻⁶ = 7⁻² |
| a^m ÷ a^n = a^(m−n) | 5⁹ ÷ 5⁷ = 5² |
| (a^m)^n = a^(mn) | (3²)⁻³ = 3⁻⁶ |
| (ab)^n = a^n b^n | (2y)³ = 8y³ |
| a⁰ = 1 | 9⁰ = 1 |
| a^(−n) = 1/a^n | 4x⁻² = 4/x² |

Section 1.7 extends these to rational exponents:

- a^(1/m) = ᵐ√a. If m is even, this means the positive root.
- a^(n/m) = (ᵐ√a)^n. Take the root first by hand; the numbers stay small.

### Worked example 1 (calculator-free)

Simplify (3x²y⁻¹)³ × (2x⁻⁴y)², giving your answer with positive exponents.

```
(3x²y⁻¹)³ = 27x⁶y⁻³
(2x⁻⁴y)²  = 4x⁻⁸y²
Product   = 108 x^(6 − 8) y^(−3 + 2) = 108x⁻²y⁻¹ = 108/(x²y)
```

Apply the power to every factor, including the number.

### Worked example 2 (calculator-free)

Evaluate 27^(2/3) and 32^(−3/5).

```
27^(2/3) = (∛27)² = 3² = 9
32^(−3/5) = 1 / 32^(3/5) = 1 / (⁵√32)³ = 1 / 2³ = 1/8
```

## Logarithms (sections 1.5 and 1.7)

### What a logarithm is

A logarithm answers the question "what power?". For a > 0, a ≠ 1 and b > 0:

**a^x = b is equivalent to log_a b = x.**

So log₂ 32 = 5 because 2⁵ = 32. The number b must be positive: log_a 0 and log_a of a negative number are not defined.

Two bases have their own notation. log x (no base written) means log₁₀ x. log_e x is written ln x, the natural logarithm. The number e ≈ 2.718.

Two facts follow straight from the definition: log_a a = 1 and log_a 1 = 0.

### Evaluating logarithms with technology

Section 1.5 expects you to find values such as log 50 or ln 7 on your GDC. To solve 10^x = 50, write x = log 50 = 1.70 (3 s.f.). To solve e^x = 7, write x = ln 7 = 1.95 (3 s.f.).

### The laws of logarithms

For a, x, y > 0:

| Law | Example |
|---|---|
| log_a xy = log_a x + log_a y | log₆ 4 + log₆ 9 = log₆ 36 = 2 |
| log_a (x/y) = log_a x − log_a y | log₃ 54 − log₃ 2 = log₃ 27 = 3 |
| log_a x^m = m log_a x | log 5² = 2 log 5 |

There is no law for log_a (x + y). It does not split.

### Worked example 3 (calculator-free)

Find the exact value of 2 log 5 + log 4.

```
2 log 5 + log 4 = log 5² + log 4      (power law)
               = log (25 × 4)        (product law)
               = log 100 = 2         (since 10² = 100)
```

### Change of base

For a, b, x > 0:

**log_a x = (log_b x)/(log_b a)**

Use it two ways. By hand, change to a base where both numbers are powers of the same thing: log₈ 32 = (log₂ 32)/(log₂ 8) = 5/3. With a GDC, change to ln or log: log₃ 20 = (ln 20)/(ln 3) = 2.73 (3 s.f.).

## Solving exponential equations (section 1.7)

There are three standard methods.

**Method A: same base.** Write both sides as powers of one base, then equate exponents.

```
4^x = 8^(x−1)
2^(2x) = 2^(3(x−1))
2x = 3x − 3
x = 3
```

**Method B: take logarithms.** Use this when the bases cannot be matched.

### Worked example 4 (calculator allowed)

Solve 5^(x+1) = 3^(2x), giving x exactly and to 3 significant figures.

```
Take ln of both sides:     (x + 1) ln 5 = 2x ln 3
Expand:                    x ln 5 + ln 5 = 2x ln 3
Collect x terms:           ln 5 = x(2 ln 3 − ln 5)
                           x = ln 5 / (2 ln 3 − ln 5) = ln 5 / ln (9/5)
                           x = 2.74 (3 s.f.)
```

Check: 5^3.738… and 3^5.476… both give about 410.

**Method C: a hidden quadratic.** Look for a term like 9^x, which is (3^x)².

```
9^x − 4(3^x) + 3 = 0
Let y = 3^x:  y² − 4y + 3 = 0,  so (y − 1)(y − 3) = 0
3^x = 1 gives x = 0;  3^x = 3 gives x = 1
```

3^x > 0 for every x, so reject a negative root in y and say why.

### Worked example 5 (calculator allowed, in context)

An account holds 5000 dollars growing at 4% per year, so V = 5000 × 1.04^t. A second account holds 3000 dollars growing at 7% per year, so W = 3000 × 1.07^t. Find when the second account first holds more.

```
3000 × 1.07^t > 5000 × 1.04^t
(1.07/1.04)^t > 5/3
t ln(1.07/1.04) > ln(5/3)
t > 17.96…
```

The second account first holds more after **18 years**. Check at t = 18: V ≈ 10 129 and W ≈ 10 140.

### Using your GDC

AA Paper 1 allows no technology. So by hand you must: apply the exponent laws, evaluate numbers such as 27^(2/3), use the log laws, change base when the numbers are powers of a common base, and solve equations by Methods A and C. Paper 2 requires technology. There you can use ln and log keys, or the GDC's equation solver, but write the equation you are solving first.

## Simple deductive proof (section 1.6)

### Equality and identity

- **=** states that two things are equal. In x² − 4 = 0 this holds only for x = ±2. It is an equation.
- **≡** states an identity: true for every value of the variable. x² − 4 ≡ (x − 2)(x + 2) holds for all x.

### Laying out an LHS to RHS proof

Start with one side only. Transform it with known algebraic steps until it becomes the other side. Do not work on both sides at once, and do not start by assuming the result.

### Worked example 6 (numerical, then algebraic)

(a) Show that 1/3 − 1/5 = 2/15.

```
LHS = 1/3 − 1/5 = 5/15 − 3/15 = 2/15 = RHS
```

(b) Show that the general result is 1/n − 1/(n + 2) ≡ 2/(n(n + 2)), for n ≠ 0, −2.

```
LHS = 1/n − 1/(n + 2)
    = (n + 2)/(n(n + 2)) − n/(n(n + 2))
    = (n + 2 − n)/(n(n + 2))
    = 2/(n(n + 2)) = RHS
```

**Check it.** Put n = 3 into the identity: 2/(3 × 5) = 2/15, which matches part (a). The guide expects you to check results like this.

### Worked example 7

Show that (2x + 1)² − (2x − 1)² ≡ 8x.

```
LHS = (4x² + 4x + 1) − (4x² − 4x + 1)
    = 4x² + 4x + 1 − 4x² + 4x − 1
    = 8x = RHS
```

The minus sign changes every sign in the second bracket.

## The binomial theorem (section 1.9)

### Pascal's triangle and nCr

Each entry in Pascal's triangle is the sum of the two above it:

```
n = 0:            1
n = 1:          1   1
n = 2:        1   2   1
n = 3:      1   3   3   1
n = 4:    1   4   6   4   1
n = 5:  1   5  10  10   5   1
n = 6: 1  6  15  20  15   6   1
```

The entries in row n are the binomial coefficients nCr, for r = 0, 1, …, n. By formula:

**nCr = n! / (r!(n − r)!)**

For example, 7C3 = 7!/(3! 4!) = (7 × 6 × 5)/(3 × 2 × 1) = 35. The guide expects you to find nCr both by formula and with technology. To find r when 8Cr = 56, make a table of 8Cr for r = 0 to 8 on your GDC. It shows **r = 3 or r = 5**. The symmetry nCr = nC(n−r) is why there are two answers.

### The theorem

For n ∈ ℕ:

**(a + b)^n = a^n + nC1 a^(n−1) b + nC2 a^(n−2) b² + … + nCr a^(n−r) b^r + … + b^n**

The general term is **nCr a^(n−r) b^r**. There are n + 1 terms.

### Worked example 8 (calculator-free)

Expand (2x − 3)⁴.

```
Coefficients from row 4: 1, 4, 6, 4, 1.  Here a = 2x, b = −3.
(2x)⁴ + 4(2x)³(−3) + 6(2x)²(−3)² + 4(2x)(−3)³ + (−3)⁴
= 16x⁴ − 96x³ + 216x² − 216x + 81
```

Keep the minus sign with b, and the signs alternate on their own.

### Worked example 9 (a single term)

Find the coefficient of x⁵ in (2x + 3)⁸.

```
General term: 8Cr (2x)^(8−r) 3^r.  For x⁵ we need 8 − r = 5, so r = 3.
Term = 8C3 × 2⁵ × 3³ x⁵ = 56 × 32 × 27 x⁵
Coefficient = 48 384
```

### Worked example 10 (term independent of x)

Find the term independent of x in (x² − 2/x)⁶.

```
General term: 6Cr (x²)^(6−r) (−2/x)^r = 6Cr (−2)^r x^(12 − 2r − r) = 6Cr (−2)^r x^(12 − 3r)
Independent of x: 12 − 3r = 0, so r = 4
Term = 6C4 × (−2)⁴ = 15 × 16 = 240
```

Simplify the power of x in the general term first.

## Common errors

- Writing (2x)⁴ as 2x⁴. The exponent applies to the 2 as well: 16x⁴.
- Treating a^(−n) as negative. 2⁻³ = 1/8, not −8.
- Splitting log (x + y) into log x + log y. There is no such law.
- Dropping the negative sign of b in a binomial expansion, so every term comes out positive.
- Using the wrong r: for the x^k term, solve the exponent equation. Do not assume r = k.
- Working on both sides of a "show that" at once, or starting from the result you are asked to prove.
- Keeping a solution such as 3^x = −2. An exponential with a positive base is always positive.

## Where next

Condense this into the [revision notes](/resources/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof-revision-notes/). Then attempt the [practice questions](/resources/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof-practice/), which have mark-by-mark answers. Logarithmic and exponential graphs are taught in the [AA functions study guide](/resources/ib-dp-mathematics-aa-functions/). You will use e^x and ln x again throughout the [AA calculus study guide](/resources/ib-dp-mathematics-aa-calculus/). For the whole course, see the [AA syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/) and the [AA exam preparation guide](/resources/ib-dp-mathematics-analysis-and-approaches-exam-preparation/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
