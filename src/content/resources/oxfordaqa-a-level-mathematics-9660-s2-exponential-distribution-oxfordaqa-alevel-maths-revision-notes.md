---
title: "OxfordAQA A-level Mathematics (9660): Exponential distribution -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S2: Statistics (International A-level)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 6.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-oxfordaqa-alevel-maths"
    subtopic: "s2-exponential-distribution-oxfordaqa-alevel-maths"
description: "Revision notes for OxfordAQA 9660 S2.3: exponential conditions and the Poisson link, pdf, cdf, mean, variance, median, quartiles, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section S2.3 (Exponential distribution) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, in International A-level Unit S2. The section covers the conditions for the model, probability calculations using the cdf or by integrating the pdf, and the mean, variance and standard deviation (proofs are not expected). For explanations and worked examples, read the [exponential distribution study guide](/resources/oxfordaqa-a-level-mathematics-9660-s2-exponential-distribution-oxfordaqa-alevel-maths/); to practise, use the [exponential distribution practice questions](/resources/oxfordaqa-a-level-mathematics-9660-s2-exponential-distribution-oxfordaqa-alevel-maths-practice/).

## The link to the Poisson distribution

If events occur singly, independently and at random at a constant average rate λ, then:

- the **number** of events in an interval of length t is Poisson with mean λt;
- the **length** of the interval between consecutive events is exponential with parameter λ.

The specification states the second fact directly: lengths of intervals between Poisson events have an exponential distribution. "No event in an interval of length x" and "the gap is longer than x" are the same event, which is why P(X > x) = e^(−λx) matches the Poisson probability of zero events.

## Formulae

```
X ~ Exp(λ),  λ > 0

pdf       f(x) = λe^(−λx)       x ≥ 0  (0 otherwise)
cdf       F(x) = 1 − e^(−λx)    x ≥ 0
survivor  P(X > x) = e^(−λx)
interval  P(a < X < b) = e^(−λa) − e^(−λb)

E(X) = 1/λ       Var(X) = 1/λ²       sd = 1/λ
median = (ln 2)/λ
q₁ = ln(4/3)/λ    q₃ = (ln 4)/λ
```

## Deriving the cdf

```
F(x) = ∫₀ˣ λe^(−λu) du = [−e^(−λu)]₀ˣ = 1 − e^(−λx)
```

Learn this line: a question may say "by integration", which needs the working, not the quoted result.

## Finding the parameter

| You are given | Then |
|---|---|
| The rate | λ is the rate |
| The mean μ | λ = 1/μ |
| The median m | λ = (ln 2)/m |
| P(X > a) = p | λ = −(ln p)/a |
| The variance σ² | λ = 1/σ |

## Key terms

| Term | Meaning |
|---|---|
| Poisson process | Events occurring singly, independently, at random, at constant rate |
| Rate λ | Average number of events per unit of time or length |
| Exponential distribution | Distribution of the interval between consecutive Poisson events |
| Probability density function | f(x), whose area over an interval gives a probability |
| Cumulative distribution function | F(x) = P(X ≤ x) |
| Survivor probability | P(X > x), the probability of waiting longer than x |
| Median | Value m with F(m) = 0.5 |

## Useful results for every exponential distribution

- The mean equals the standard deviation.
- The median is about 69% of the mean, so the distribution is positively skewed.
- P(X > mean) = e⁻¹ ≈ 0.368.
- P(X < 2 × mean) = 1 − e⁻² ≈ 0.865.
- P(X > s + t given X > s) = P(X > t): time already waited does not change the chance of a further wait.

## Checking suitability

| Context | Suitable? | Reason |
|---|---|---|
| Time between radioactive decays from a sample | Usually yes | Random, independent, constant rate over a short period |
| Gaps between timetabled trains | No | Arrivals are scheduled, not random |
| Time between customers over a whole day | Doubtful | The rate changes at busy times |
| Distance between flaws in a long roll of cloth | Often yes | If flaws occur independently at a constant rate per metre |

## Exam traps

- **λ is not the mean.** Exp(0.4) has mean 2.5, not 0.4.
- **Survivor versus cdf.** P(X > 3) = e^(−3λ); P(X < 3) = 1 − e^(−3λ).
- **Units.** Convert the rate before substituting: 12 per hour is 0.2 per minute.
- **Rounding.** Keep e⁻¹ or e^(−1.5) unrounded if you reuse it.
- **Sums.** X₁ + X₂ is not exponential; only its mean and variance follow simply.
- **Continuous variable.** P(X = a) = 0, so < and ≤ give the same probability.

## Self-test

1. X ~ Exp(2). Find E(X) and Var(X).
2. The mean of an exponential variable is 5. Find λ.
3. X ~ Exp(0.5). Find P(X > 3).
4. X ~ Exp(1.2). Find P(X < 1).
5. Find the median of X ~ Exp(0.05).
6. State the fact linking the Poisson and exponential distributions.
7. State two conditions needed for an exponential model of the time between events.
8. Calls arrive at random at 12 per hour. Find the probability of a gap longer than 10 minutes.
9. For any exponential distribution, find P(X > E(X)).
10. X ~ Exp(0.5). Find P(1 < X < 3).
11. X₁ and X₂ are independent and each Exp(0.25). Find Var(X₁ + X₂).
12. Why are gaps between buses running to a timetable not modelled well by an exponential distribution?

### Answers

1. E(X) = 0.5, Var(X) = 0.25.
2. λ = 1/5 = 0.2.
3. e^(−1.5) = 0.223.
4. 1 − e^(−1.2) = 0.699.
5. (ln 2)/0.05 = 13.9.
6. The lengths of intervals between Poisson events have an exponential distribution with the same rate.
7. Any two of: events occur singly; independently; at random; at a constant average rate.
8. λ = 0.2 per minute, so P(X > 10) = e⁻² = 0.135.
9. e⁻¹ = 0.368.
10. e^(−0.5) − e^(−1.5) = 0.6065 − 0.2231 = 0.383.
11. Each variance is 1/0.25² = 16, so the total is 32.
12. The buses are scheduled, so arrivals are not random or independent.

## Related pages

- [Exponential distribution study guide](/resources/oxfordaqa-a-level-mathematics-9660-s2-exponential-distribution-oxfordaqa-alevel-maths/)
- [Exponential distribution practice questions](/resources/oxfordaqa-a-level-mathematics-9660-s2-exponential-distribution-oxfordaqa-alevel-maths-practice/)
- [Continuous random variables and exponential distribution revision notes](/resources/oxfordaqa-a-level-mathematics-mean-and-variance-of-continuous-variables-and-the-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section S2.3 Exponential distribution, published by OxfordAQA.
