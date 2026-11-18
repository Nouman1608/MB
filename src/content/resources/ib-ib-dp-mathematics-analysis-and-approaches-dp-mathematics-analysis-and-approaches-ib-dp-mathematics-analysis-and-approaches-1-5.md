---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Laws of exponents and introduction to logarithms"
resourceType: "study-guides"
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
description: "IB DP Maths AA section 1.5 study guide: integer exponent laws, what a logarithm means, base 10 and base e, and evaluating logs with technology."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on one syllabus section of IB Diploma Programme Mathematics: Analysis and Approaches: **section 1.5, laws of exponents with integer exponents and an introduction to logarithms**. It is common content, examined at SL and HL, and it follows the IB *Mathematics: analysis and approaches guide* for first assessment 2021.

Section 1.5 is the foundation. Rational exponents, the laws of logarithms and change of base come next, in section 1.7, which has its own [study guide on the laws of exponents and logarithms](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-7/). For the whole unit at a glance, see the [exponents, logarithms, binomial theorem and proof study guide](/resources/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof/).

## What section 1.5 asks of you

- Use the laws of exponents when every exponent is an integer (positive, zero or negative).
- Understand what a logarithm is, for base 10 and base e.
- Know that a^x = b is equivalent to log_a b = x, where b > 0. The natural logarithm log_e x is written ln x.
- Evaluate logarithms numerically using technology.

Everything here is used again constantly: in exponential models, in exponential and logarithmic graphs, and in calculus, where expressions must be rewritten in the form ax^n before you differentiate or integrate them.

## Why the laws of exponents work

You do not need to memorise the laws as unrelated rules. Each one comes from counting repeated factors.

- **Multiplying:** a³ × a² = (a × a × a)(a × a) = a⁵. Five factors of a in total, so add the exponents.
- **Dividing:** a⁵ ÷ a² cancels two factors from top and bottom, leaving a³. Subtract the exponents.
- **Power of a power:** (a³)² = a³ × a³ = a⁶. Multiply the exponents.
- **Power of a product:** (ab)³ = ab × ab × ab = a³b³. The power reaches every factor.

The zero and negative exponents are then forced on us if the division law is to keep working:

- a³ ÷ a³ = 1, but the division law gives a⁰. So **a⁰ = 1**.
- a⁰ ÷ a³ = 1/a³, but the division law gives a⁻³. So **a⁻ⁿ = 1/aⁿ**.

Both facts need a ≠ 0, because dividing by zero is not allowed. Knowing the reasons lets you rebuild a law in the exam if you forget it, and stops you inventing false ones.

## Coefficients, brackets and signs

Most lost marks in section 1.5 come from four small slips.

**The power reaches every factor inside the bracket, including the number.** (3x)⁻² = 3⁻²x⁻² = 1/(9x²). Without a bracket, 3x⁻² means 3 × x⁻² = 3/x². These are different expressions.

**A power does not split over a sum.** (a + b)² ≠ a² + b². The law (ab)ⁿ = aⁿbⁿ is about products only. Expanding sums is the job of the binomial theorem.

**Signs depend on the bracket.** (−2)⁴ = 16, but −2⁴ = −(2⁴) = −16. With an odd power, (−x)³ = −x³; with an even power, (−x)⁴ = x⁴.

**A fraction to a negative power flips over.** (2/3)⁻² = (3/2)² = 9/4, because a⁻ⁿ = 1/aⁿ.

### Writing expressions in the form axⁿ

Calculus questions often start with an expression that must be rewritten as a sum of terms axⁿ. Divide every term of the numerator by the denominator separately:

```
(6x⁵ − 4x²) / (2x⁴) = 6x⁵/(2x⁴) − 4x²/(2x⁴)
                    = 3x − 2x⁻²
```

Watch the coefficient when the variable sits under a power: 1/(2x)³ = 1/(8x³) = (1/8)x⁻³, while 5/(2x³) = (5/2)x⁻³.

## Worked example 1 (calculator-free)

Simplify (−2x³y⁻²)³ ÷ (4x⁻¹y)², giving your answer with positive exponents.

```
(−2x³y⁻²)³ = (−2)³ x⁹ y⁻⁶ = −8x⁹y⁻⁶
(4x⁻¹y)²   = 16 x⁻² y²
Quotient   = (−8/16) x^(9 − (−2)) y^(−6 − 2)
           = −(1/2) x¹¹ y⁻⁸
           = −x¹¹ / (2y⁸)
```

*Annotation.* Cube the −2 as well as the letters: an odd power keeps the minus sign. Subtracting a negative exponent, 9 − (−2), is where most errors happen, so write the step out. "Positive exponents" means y⁻⁸ must move to the denominator before you stop.

## Logarithms: asking "what power?"

A logarithm reverses an exponential. For a > 0, a ≠ 1 and b > 0:

**a^x = b is equivalent to log_a b = x.**

In words, log_a b is the power you raise a to in order to get b. Section 1.5 uses two bases:

- **Base 10**, written log x. For example log 1000 = 3, since 10³ = 1000, and log 0.01 = −2, since 10⁻² = 0.01.
- **Base e**, written ln x, the natural logarithm. Here e ≈ 2.718. For example ln e⁵ = 5 and ln 1 = 0.

| Exponential form | Logarithmic form |
|---|---|
| 10⁴ = 10 000 | log 10 000 = 4 |
| 10⁻¹ = 0.1 | log 0.1 = −1 |
| e⁰ = 1 | ln 1 = 0 |
| e² ≈ 7.389 | ln 7.389 ≈ 2 |

Three consequences are worth knowing by heart, because they all follow from the definition:

- **The input must be positive.** No power of 10 or e is zero or negative, so log 0, log(−5) and ln(−1) are undefined.
- **Numbers between 0 and 1 have negative logarithms** (for base 10 or e), because they are reached by negative powers.
- **Logs and exponentials undo each other:** log 10^x = x and 10^(log x) = x; ln e^x = x and e^(ln x) = x, for x > 0 where needed.

You can also estimate a logarithm before reaching for technology. 2000 lies between 10³ and 10⁴, so log 2000 is between 3 and 4. A GDC gives 3.30 (3 s.f.), which is consistent. A quick estimate like this catches keying errors.

## Evaluating logarithms with technology

The syllabus expects you to evaluate logarithms numerically with a GDC, so these questions belong on Paper 2. The method is always: isolate the power, convert to logarithmic form, then evaluate.

## Worked example 2 (calculator allowed)

A bacterial culture is modelled by N = 200e^(0.3t), where t is the time in hours. Find the time at which N = 1000.

```
200e^(0.3t) = 1000
e^(0.3t)    = 5                (divide by 200 first)
0.3t        = ln 5             (definition of ln)
t           = ln 5 / 0.3 = 5.3647...
t           = 5.36 hours (3 s.f.)
```

*Annotation.* Divide by 200 before taking logarithms; ln(200e^(0.3t)) cannot be simplified with section 1.5 tools alone. Keep ln 5 / 0.3 unrounded until the final line, then give 3 significant figures.

## Worked example 3 (calculator allowed)

Solve 4 × 10^(x − 1) = 3.2.

```
10^(x − 1) = 0.8
x − 1      = log 0.8 = −0.09691...
x          = 0.903 (3 s.f.)
```

The negative value of log 0.8 is expected, since 0.8 lies between 0 and 1.

## Common mistakes

- Writing 3x⁻² as 1/(3x²). Only the x is raised to −2.
- Treating a negative exponent as a negative number: 2⁻³ = 1/8, not −8.
- Losing the minus sign when cubing a negative coefficient.
- Taking the logarithm of zero or a negative number on a GDC and copying down an error or a complex value.
- Rounding ln 5 to 1.6 mid-calculation, which pushes the final answer away from 3 s.f. accuracy.
- Reading log x as ln x. With no base written, log means base 10 in the IB.

## Exam technique: the command words

- **Write down**: the answer can be read off with little or no working, such as "write down log 0.001" (answer −3).
- **Simplify**: give a single, tidy expression. If the question says "positive exponents", no negative exponent may remain.
- **Find** and **Solve**: show the conversion from exponential to logarithmic form, then the value.
- **Show that**: every step must be visible, ending exactly at the printed result.
- Give final answers exactly or correct to 3 significant figures, unless the question states otherwise.

Paper 1 allows no technology, so there you will only meet logarithms that work out exactly, such as log 10 000 or ln e³. Paper 2 requires technology, which is where logs like ln 5 are evaluated.

## Where next

Condense this section with the [section 1.5 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-5-revision-notes/), then test yourself with the [section 1.5 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-5-practice/). When integer exponents feel automatic, move on to rational exponents and the log laws in section 1.7.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.5.
