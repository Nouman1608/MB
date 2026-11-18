---
title: "OxfordAQA A-level Mathematics (9660): Exponential distribution -- Practice Questions"
resourceType: "practice-questions"
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
description: "Thirteen original OxfordAQA 9660 S2.3 practice questions on exponential conditions, probabilities, quartiles and the Poisson link, with full worked answers."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs. Use these alongside the official past papers from your board
> or school.

These questions cover section S2.3 (Exponential distribution) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, in International A-level Unit S2. Give probabilities to 3 significant figures. Read the [exponential distribution study guide](/resources/oxfordaqa-a-level-mathematics-9660-s2-exponential-distribution-oxfordaqa-alevel-maths/) first, or refresh the methods with the [exponential distribution revision notes](/resources/oxfordaqa-a-level-mathematics-9660-s2-exponential-distribution-oxfordaqa-alevel-maths-revision-notes/).

## Section A

**1.** X ~ Exp(0.8). Write down the mean and the standard deviation of X. **[2]**

**2.** Accidents on a stretch of road occur at random at an average rate of 3 per month. State the distribution of the time, in months, between consecutive accidents. **[1]**

**3.** X ~ Exp(0.2). Find P(X > 4) and P(X ≤ 7). **[3]**

**4.** X ~ Exp(1.5). By integrating the probability density function, find P(X < 2). **[3]**

**5.** A student models the time between trains at a station, where trains run to a fixed timetable, by an exponential distribution. Explain why this model is unsuitable. **[1]**

## Section B

**6.** The time T minutes between customers arriving at a kiosk has an exponential distribution with mean 4 minutes.

**(a)** State the value of the parameter λ. **[1]**

**(b)** Find P(T > 6). **[2]**

**(c)** Find the median of T. **[2]**

**(d)** Explain why the median is less than the mean. **[1]**

**7.** Faults occur at random along a water pipe at an average rate of 0.15 per metre. X metres is the distance between consecutive faults.

**(a)** Find the probability that X is between 5 and 10. **[3]**

**(b)** Find the value d such that P(X > d) = 0.05. **[3]**

**8.** The lifetime, X hours, of a component has an exponential distribution, and P(X > 10) = 0.2.

**(a)** Find the parameter λ. **[2]**

**(b)** Find the mean lifetime. **[1]**

**(c)** Find P(X < 3). **[2]**

**9.** Emails arrive in an inbox at random at an average rate of 9 per hour.

**(a)** Find the probability that the time between two consecutive emails is more than 10 minutes. **[2]**

**(b)** Use a Poisson distribution to find the probability that no emails arrive in a 10-minute period, and explain why the answer equals your answer to part (a). **[2]**

**10.** The time X minutes between calls to a taxi office has distribution Exp(0.05). The last call was 10 minutes ago and no call has arrived since. Find the probability that the time between that call and the next one is more than 30 minutes. **[3]**

**11.** The gap, X seconds, between consecutive vehicles passing a sensor has distribution Exp(0.5).

**(a)** Find the probability that a gap is shorter than 1 second. **[2]**

**(b)** Eight independent gaps are recorded. Find the probability that at least one of them is shorter than 1 second. **[3]**

**12.** X ~ Exp(λ).

**(a)** Show that the interquartile range of X is (ln 3)/λ. **[4]**

**(b)** Find the interquartile range when λ = 0.5. **[1]**

**13.** X₁ and X₂ are independent, and each has distribution Exp(0.2).

**(a)** Find E(X₁ + X₂), Var(X₁ + X₂), E(3X₁ − X₂) and Var(3X₁ − X₂). **[4]**

**(b)** Explain why P(X₁ + X₂ > 10) cannot be found with the exponential cumulative distribution function. **[1]**

## Answers

**1.** Mean = 1/0.8 = **1.25** [1]; standard deviation = **1.25** [1]. Total: 2

**2.** **Exponential with λ = 3**, that is Exp(3) [1]. Total: 1

**3.** P(X > 4) = e^(−0.8) [1] = **0.449** [1]. P(X ≤ 7) = 1 − e^(−1.4) = **0.753** [1]. Total: 3

**4.** P(X < 2) = ∫₀² 1.5e^(−1.5x) dx [1] = [−e^(−1.5x)]₀² = 1 − e⁻³ [1] = **0.950** [1]. Total: 3

**5.** Trains arrive according to a schedule, so their arrivals are not random and independent at a constant rate, which the exponential model requires [1]. Total: 1

**6. (a)** **λ = 1/4 = 0.25** [1].

**(b)** P(T > 6) = e^(−0.25 × 6) [1] = e^(−1.5) = **0.223** [1].

**(c)** 1 − e^(−0.25m) = 0.5, so m = (ln 2)/0.25 [1] = **2.77 minutes** [1].

**(d)** The distribution is positively skewed: a few long gaps raise the mean but not the median [1]. Total: 6

**7. (a)** P(5 < X < 10) = e^(−0.75) − e^(−1.5) [1] = 0.4724 − 0.2231 [1] = **0.249** [1].

**(b)** e^(−0.15d) = 0.05 [1], so −0.15d = ln 0.05 [1] and d = (ln 20)/0.15 = **20.0 m** [1]. Total: 6

**8. (a)** e^(−10λ) = 0.2 [1], so **λ = (ln 5)/10 = 0.161** [1].

**(b)** Mean = 1/λ = **6.21 hours** [1].

**(c)** P(X < 3) = 1 − e^(−3λ) [1] = 1 − 0.6170 = **0.383** [1]. Total: 5

**9. (a)** 9 per hour = 0.15 per minute [1]. P(X > 10) = e^(−1.5) = **0.223** [1].

**(b)** The number in 10 minutes is Poisson with mean 1.5, so P(0) = e^(−1.5) = 0.223 [1]. No email in the 10 minutes is the same event as the gap after the last email being longer than 10 minutes [1]. Total: 4

**10.** P(X > 30 given X > 10) = P(X > 30)/P(X > 10) [1] = e^(−1.5)/e^(−0.5) [1] = e⁻¹ = **0.368** [1]. Total: 3

**11. (a)** P(X < 1) = 1 − e^(−0.5) [1] = **0.393** [1].

**(b)** P(a gap is at least 1 second) = e^(−0.5) [1]. P(none of 8 is shorter) = (e^(−0.5))⁸ = e⁻⁴ [1]. P(at least one shorter) = 1 − e⁻⁴ = **0.982** [1]. Total: 5

**12. (a)** Lower quartile: 1 − e^(−λq₁) = 0.25, so e^(−λq₁) = 0.75 and q₁ = ln(4/3)/λ [1]. Upper quartile: e^(−λq₃) = 0.25, so q₃ = (ln 4)/λ [1]. IQR = [ln 4 − ln(4/3)]/λ [1] = ln(4 ÷ 4/3)/λ = **(ln 3)/λ** [1].

**(b)** (ln 3)/0.5 = **2.20** [1]. Total: 5

**13. (a)** E(X) = 5 and Var(X) = 25 for each. E(X₁ + X₂) = **10** and Var(X₁ + X₂) = **50** [1]. E(3X₁ − X₂) = 15 − 5 = **10** [1]. Var(3X₁ − X₂) = 9(25) + 25 [1] = **250** [1].

**(b)** The sum of two independent exponential variables is not itself exponential, so its probabilities are not given by 1 − e^(−λx) [1]. Total: 5

## Where marks are usually lost

- Using λ as the mean, for example writing E(T) = 0.25 in Question 6.
- Using 1 − e^(−λx) for a "more than" probability.
- Mixing a rate per hour with a time in minutes in Question 9.
- Subtracting variances in Question 13 instead of adding them.
- Rounding e^(−0.5) before raising it to the eighth power.
- Commenting on a model without linking a condition to the context.

## Next steps

- Re-read the [exponential distribution revision notes](/resources/oxfordaqa-a-level-mathematics-9660-s2-exponential-distribution-oxfordaqa-alevel-maths-revision-notes/).
- Return to the [exponential distribution study guide](/resources/oxfordaqa-a-level-mathematics-9660-s2-exponential-distribution-oxfordaqa-alevel-maths/) for the multi-step examples.
- Try the wider set in the [continuous random variables and exponential distribution practice questions](/resources/oxfordaqa-a-level-mathematics-mean-and-variance-of-continuous-variables-and-the-practice/).
