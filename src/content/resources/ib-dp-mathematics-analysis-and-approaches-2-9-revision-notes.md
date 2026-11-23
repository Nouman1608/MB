---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.9 Exponential and logarithmic functions -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.09
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-9"
description: "Revision notes for IB Maths AA 2.9: exponential and log graphs, aˣ = e^(x ln a), inverse identities, transformed asymptotes, models and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 2.9 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021): exponential functions aˣ and eˣ, logarithmic functions logₐ x and ln x, the relationships aˣ = e^(x ln a) and logₐ aˣ = x = a^(logₐ x), and exponentials and logarithms as inverse functions. It is common to SL and HL. For explanations and worked examples, see the [2.9 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-2-9/); for exam-style questions, see the [2.9 practice set](/resources/ib-dp-mathematics-analysis-and-approaches-2-9-practice/).

## Core recall

- y = aˣ: domain ℝ, range y > 0, through (0, 1), asymptote y = 0.
- y = logₐ x: domain x > 0, range ℝ, through (1, 0), asymptote x = 0.
- a > 1: increasing. 0 < a < 1: decreasing.
- e ≈ 2.718; ln x = logₑ x.
- **aˣ = e^(x ln a).**
- **logₐ aˣ = x** and **a^(logₐ x) = x** (a, x > 0, a ≠ 1).
- y = aˣ and y = logₐ x are inverses: reflections in y = x.
- a⁻ˣ = (1/a)ˣ: reflection of aˣ in the y-axis.

## Key terms

| Term | Meaning |
|---|---|
| Exponential function | f(x) = aˣ, a > 0, a ≠ 1 (the variable is in the power) |
| Base | The number a being raised to a power |
| Natural exponential | eˣ |
| Logarithm | logₐ x is the power a must be raised to, to give x |
| Natural logarithm | ln x = logₑ x |
| Growth / decay | Increasing / decreasing exponential |
| Half-life | Time for a decaying quantity to halve: ln 2/|k| for A e^(kt) |
| Doubling time | Time for a growing quantity to double: ln 2/k |

## Comparing graphs

| Pair | Relationship |
|---|---|
| 2ˣ and 3ˣ | Meet at (0, 1); 3ˣ is higher for x > 0, lower for x < 0 |
| 2ˣ and (1/2)ˣ | Reflections of each other in the y-axis |
| eˣ and ln x | Reflections of each other in y = x; they never meet |
| ln x and log₁₀ x | Meet at (1, 0); ln x is steeper, since ln x = 2.303 log₁₀ x |
| eˣ and e^(2x) | e^(2x) is eˣ stretched horizontally by scale factor 1/2 |

**Quick example.** Without a calculator, 3^(−2) = 1/9 < 2^(−2) = 1/4, so for negative x the smaller base gives the higher graph.

## Transformed graphs: tracking the asymptote

| Function | Asymptote | Domain or range |
|---|---|---|
| y = eˣ + c | y = c | range y > c |
| y = c − eˣ | y = c | range y < c |
| y = A e^(kx) + c | y = c | range y > c if A > 0 |
| y = ln(x − h) | x = h | domain x > h |
| y = ln(bx + d) | x = −d/b (b > 0) | domain x > −d/b |
| y = logₐ(x + h) + c | x = −h | domain x > −h |

**Quick example.** y = 5 − e^(2x): asymptote y = 5, range y < 5, y-intercept (0, 4), x-intercept x = ½ ln 5.

## Inverses of these functions

1. Isolate the exponential (or the log).
2. Apply ln (or raise the base) to both sides.
3. Swap to write f⁻¹(x); its asymptote is the swapped asymptote of f.

**Quick example.** f(x) = e^(x − 1) + 3: x − 1 = ln(y − 3), so f⁻¹(x) = 1 + ln(x − 3), domain x > 3.

## Models

- y = A e^(kt): A = value at t = 0; k > 0 growth, k < 0 decay.
- Percentage change per unit time: (e^k − 1) × 100%.
- Converting: A bᵗ = A e^(t ln b).

**Quick example.** M = 80e^(−0.025t): initial mass 80, half-life ln 2/0.025 = 27.7 time units.

## Exam traps

- Range of aˣ given as y ≥ 0.
- Domain of ln(x − h) not stated, or stated with ≥.
- aˣ written as e^(a ln x).
- ln(a + b) split as ln a + ln b.
- Base of a log changed without the rule (logₐ x = ln x / ln a).
- Asymptotes of an inverse not swapped.
- Decimal answers where exact logarithms are expected.

## Self-test

1. Write down the domain, range and asymptote of y = eˣ − 4.
2. Write 3ˣ in the form e^(kx).
3. Evaluate log₅ 5⁷ and 10^(log₁₀ 6).
4. Simplify ln(e^(−2)).
5. State the domain of y = ln(2x − 3).
6. Find the inverse of f(x) = 4ˣ and its domain.
7. Is y = (0.6)ˣ growth or decay?
8. Describe the reflection that maps y = 2ˣ to y = (1/2)ˣ.
9. Find the x-intercept of y = ln(x + 4).
10. Find the doubling time for A e^(0.05t).
11. Write down the asymptote of y = 7 − 2e^(−x).
12. Find the inverse of f(x) = ln(x − 1) + 2.

### Answers

1. Domain ℝ; range y > −4; asymptote y = −4
2. e^(x ln 3)
3. 7 and 6
4. −2
5. x > 3/2
6. f⁻¹(x) = log₄ x, x > 0
7. Decay (0 < 0.6 < 1)
8. Reflection in the y-axis
9. x + 4 = 1, so (−3, 0)
10. ln 2/0.05 = 13.9 time units (3 s.f.)
11. y = 7
12. f⁻¹(x) = e^(x − 2) + 1

## Where to go next

Return to the [2.9 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-2-9/) for the inverse and model examples, then try the [2.9 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-2-9-practice/). The laws of logarithms are summarised in the [exponents and logarithms revision notes](/resources/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.9.
