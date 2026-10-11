---
title: "OxfordAQA International AS and A-level Mathematics: Mean and variance of continuous variables and the exponential distribution (9660) -- Practice Questions"
seoTitle: "OxfordAQA A-level Maths Exponential Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Mean and variance of continuous variables and the exponential distribution"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 203
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-oxfordaqa-alevel-maths"
    subtopic: "s2-continuous-random-variables-oxfordaqa-alevel-maths"
  - qualification: "a-level"
    topic: "unit-s2-statistics-oxfordaqa-alevel-maths"
    subtopic: "s2-exponential-distribution-oxfordaqa-alevel-maths"
description: "Original practice questions with worked answers on continuous means, variances, sums of independent variables and the exponential distribution."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions follow the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, section S2.2 (second part: mean and variance of continuous random variables and of sums of independent variables) and section S2.3 (exponential distribution). The specification places this content in International A-level Unit S2 (Statistics); it is not examined at International AS. Read the [study guide](/resources/oxfordaqa-a-level-mathematics-mean-and-variance-of-continuous-variables-and-the/) first if the topic is new. Course pages: [hub](/boards/oxfordaqa/a-level/mathematics/) and [checklist](/checklists/oxfordaqa/a-level/mathematics/).

## Questions

**1.** The random variable X has pdf f(x) = x³/4 for 0 ≤ x ≤ 2, and f(x) = 0 otherwise.

**(a)** Find E(X). **[2]**
**(b)** Find Var(X). **[3]**

**2.** The random variable X has pdf f(x) = 2/x² for 1 ≤ x ≤ 2, and f(x) = 0 otherwise.

**(a)** Show that E(X) = 2 ln 2. **[3]**
**(b)** Find the exact value of E(6X⁻¹). **[3]**
**(c)** Find Var(X), giving your answer to 3 significant figures. **[3]**

**3.** The random variable X has E(X) = 7.5 and Var(X) = 2.25. Find E(4 − 2X), Var(4 − 2X) and the standard deviation of 4 − 2X. **[3]**

**4.** The times, in minutes, taken by two independent stages of a process are X and Y. E(X) = 20, Var(X) = 6.25, E(Y) = 8 and Var(Y) = 2.25.

**(a)** Find the mean and variance of X + Y. **[2]**
**(b)** Find the mean and variance of X − Y. **[2]**
**(c)** Explain why your two variances are equal. **[1]**

**5.** A sensor gives readings R with mean 2.4 and variance 0.09. Five independent readings R₁, …, R₅ are added to give S. A second quantity is T = 5R, using a single reading.

**(a)** Find E(S) and Var(S). **[2]**
**(b)** Find E(T) and Var(T), and say why the variances differ. **[2]**

**6.** Faults occur at random along a long cable at an average rate of 0.25 per kilometre. The distance in kilometres between consecutive faults is D.

**(a)** State the distribution of D and write down its mean. **[2]**
**(b)** Find P(D > 6). **[2]**
**(c)** Find P(1 < D < 5). **[3]**

**7.** The time X minutes between customers entering a shop has an exponential distribution with mean 12.

**(a)** Find P(X < 8). **[3]**
**(b)** Find the value t such that P(X > t) = 0.05. **[2]**

**8.** The random variable X has cumulative distribution function F(x) = 1 − e^(−0.2x) for x ≥ 0.

**(a)** Find the median of X. **[2]**
**(b)** Write down E(X) and the standard deviation of X. **[1]**
**(c)** Find P(X > 7). **[2]**

**9.** The random variable X has an exponential distribution with parameter 0.25. Find E(2X + 3), E(5X²) and Var(4X − 5). **[5]**

**10.** The random variable X has pdf f(x) = 3x(8 − x)/256 for 0 ≤ x ≤ 8, and f(x) = 0 otherwise.

**(a)** Use integration to find E(X). **[3]**
**(b)** Find Var(X). **[4]**
**(c)** Find E(3X² − 10). **[2]**
**(d)** Find Var(5 − 2X). **[2]**

**11.** Customers arrive at a stall at random, at an average rate of 1.5 per hour. The time in hours between consecutive arrivals is T.

**(a)** Find P(T > 1). **[2]**
**(b)** Find the mean and the standard deviation of T, in minutes. **[2]**
**(c)** The number of arrivals in a 2-hour period is N. Find P(N ≥ 2). **[3]**
**(d)** T₁ and T₂ are independent gaps with the distribution of T. Find the mean and the standard deviation of T₁ − T₂, in hours. **[3]**
**(e)** Find Var(2T₁) and Var(T₁ + T₂), and comment on the difference. **[2]**

## Answers

**1. (a)** E(X) = ∫ x · x³/4 dx from 0 to 2 [1] = [x⁵/20] = 32/20 = **8/5** [1]
**(b)** E(X²) = ∫ x⁵/4 dx = [x⁶/24] from 0 to 2 = 64/24 = 8/3 [1]; Var(X) = 8/3 − (8/5)² [1] = **8/75** (0.107) [1] **[5]**
*Examiner insight:* Subtracting μ² rather than μ at the last step is a common slip, so write the formula before substituting.

**2. (a)** E(X) = ∫ x · 2/x² dx from 1 to 2 = ∫ 2/x dx [1] = [2 ln x] [1] = 2 ln 2 − 2 ln 1 = **2 ln 2** [1]
**(b)** E(6X⁻¹) = ∫ (6/x)(2/x²) dx = 12 ∫ x⁻³ dx [1] = 12 [−1/(2x²)] from 1 to 2 [1] = 12(−1/8 + 1/2) = **9/2** [1]
**(c)** E(X²) = ∫ x² · 2/x² dx = ∫ 2 dx = 2 [1]; Var(X) = 2 − (2 ln 2)² [1] = **0.0782** [1] **[9]**
*Examiner insight:* In a "show that" part, display the integrand after simplifying and the integrated form; jumping to the printed answer leaves the reader nothing to credit.

**3.** E(4 − 2X) = 4 − 2(7.5) = **−11** [1]; Var(4 − 2X) = (−2)² × 2.25 = **9** [1]; standard deviation = √9 = **3** [1] **[3]**
*Examiner insight:* The constant 4 drops out of the variance and the −2 is squared, so a negative variance signals an error.

**4. (a)** E(X + Y) = 20 + 8 = **28** [1]; Var(X + Y) = 6.25 + 2.25 = **8.5** [1]
**(b)** E(X − Y) = 20 − 8 = **12** [1]; Var(X − Y) = 6.25 + 2.25 = **8.5** [1]
**(c)** The variances add in both cases, because (−1)² = 1 and subtracting Y does not remove its variability (the variables are independent). [1] **[5]**
*Examiner insight:* Mention independence when you add variances; the formula depends on it and stating it shows you know why.

**5. (a)** E(S) = 5 × 2.4 = **12** [1]; Var(S) = 5 × 0.09 = **0.45** [1]
**(b)** E(T) = 5 × 2.4 = **12** [1]; Var(T) = 25 × 0.09 = **2.25**. The variances differ because T repeats one reading five times, which magnifies its error, while S combines five independent readings whose errors partly cancel. [1] **[4]**
*Examiner insight:* Give a reason in words as well as the numbers when a question asks you to say why.

**6. (a)** Events at random at a constant rate give exponential gaps, so D ~ Exp(0.25) [1], with mean 1/0.25 = **4 km** [1]
**(b)** P(D > 6) = e^(−0.25 × 6) [1] = e^(−1.5) = **0.223** [1]
**(c)** P(1 < D < 5) = e^(−0.25) − e^(−1.25) [2] = 0.7788 − 0.2865 = **0.492** [1] **[7]**
*Examiner insight:* For an interval, subtract the two upper-tail values with the smaller x first; reversing them gives a negative probability.

**7.** λ = 1/12.
**(a)** P(X < 8) = 1 − e^(−8/12) [2] = 1 − e^(−2/3) = **0.487** [1]
**(b)** e^(−t/12) = 0.05 [1], t = 12 ln 20 = **35.9** [1] **[5]**
*Examiner insight:* Convert the mean to λ = 1/mean at the start; using 12 as the rate is the most common source of wrong answers here.

**8. (a)** 1 − e^(−0.2x) = 0.5 so e^(−0.2x) = 0.5 [1]; x = ln 2 / 0.2 = **3.47** [1]
**(b)** λ = 0.2, so E(X) = **5** and the standard deviation is **5** [1]
**(c)** P(X > 7) = 1 − F(7) [1] = e^(−1.4) = **0.247** [1] **[5]**
*Examiner insight:* P(X > x) is 1 − F(x), not F(x); say which tail the question asks for before you substitute.

**9.** E(X) = 1/0.25 = 4 and Var(X) = 1/0.25² = 16 [1]. E(2X + 3) = 2(4) + 3 = **11** [1]. E(X²) = Var(X) + (E(X))² = 16 + 16 = 32 [1]; E(5X²) = 5 × 32 = **160** [1]. Var(4X − 5) = 16 × 16 = **256** [1] **[5]**
*Examiner insight:* Show how you got E(X²) from the variance and mean, as it is not equal to the square of the mean.

**10. (a)** E(X) = ∫ 3x²(8 − x)/256 dx from 0 to 8 [1] = (3/256) [8x³/3 − x⁴/4] [1] = (3/256)(4096/3 − 1024) = (3/256)(1024/3) = **4** [1]
**(b)** E(X²) = (3/256) ∫ (8x³ − x⁴) dx [1] = (3/256) [2x⁴ − x⁵/5] from 0 to 8 [1] = (3/256)(8192 − 6553.6) = 96/5 [1]; Var(X) = 96/5 − 16 = **16/5** (3.2) [1]
**(c)** E(3X² − 10) = 3(96/5) − 10 [1] = **238/5** (47.6) [1]
**(d)** Var(5 − 2X) = (−2)² Var(X) [1] = 4 × 16/5 = **64/5** (12.8) [1] **[11]**
*Examiner insight:* Part (b) is long, so keep exact fractions throughout; early rounding of E(X²) feeds into the variance and its multiples.

**11. (a)** λ = 1.5 and P(T > 1) = e^(−1.5) [1] = **0.223** [1]
**(b)** Mean = 1/1.5 hours = **40 minutes** [1]; the standard deviation is also **40 minutes** [1]
**(c)** N is Poisson with mean 1.5 × 2 = 3 [1]; P(N ≥ 2) = 1 − P(0) − P(1) = 1 − e^(−3)(1 + 3) [1] = **0.801** [1]
**(d)** E(T₁ − T₂) = 2/3 − 2/3 = **0** [1]; Var(T₁ − T₂) = 2 × (2/3)² = 8/9 [1]; standard deviation = √(8/9) = **0.943** hours [1]
**(e)** Var(2T₁) = 4 × 4/9 = **16/9** (1.78) and Var(T₁ + T₂) = 2 × 4/9 = **8/9** (0.889) [1]. Doubling one gap multiplies its variance by 4, whereas adding a second independent gap only doubles the variance, so Var(2T₁) is larger [1] **[12]**
*Examiner insight:* Part (c) is a Poisson question in an exponential setting; say that you are using a Poisson count with mean λt so the method is clear.

## Where marks are usually lost

- Forgetting to subtract μ² when finding a variance from E(X²).
- Using E(1/X) = 1/E(X). Integrate (1/x) f(x) instead.
- Computing Var(aX + b) as aVar(X) + b.
- Subtracting variances for a difference of independent variables.
- Treating T₁ + T₂ and 2T₁ as the same variable.
- Using the mean as λ in an exponential question instead of λ = 1/mean.
- Leaving the rate and the time in different units.
- Using F(x) when the question asks for an upper tail, or the reverse.
- Rounding before the final line, especially in long integrals.

## Next steps

- Revise with the [revision notes](/resources/oxfordaqa-a-level-mathematics-mean-and-variance-of-continuous-variables-and-the-revision-notes/) and the [study guide](/resources/oxfordaqa-a-level-mathematics-mean-and-variance-of-continuous-variables-and-the/).
- Practise finding probabilities from pdfs and cdfs with the [probability density and cumulative distribution practice](/resources/oxfordaqa-a-level-mathematics-probability-density-and-cumulative-distribution-practice/).
- Go to the [OxfordAQA A-level Mathematics hub](/boards/oxfordaqa/a-level/mathematics/) or print the [checklist](/checklists/oxfordaqa/a-level/mathematics/).
- Take one of the free 10-minute [diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019), published by OxfordAQA: sections S2.2 (second part) and S2.3.
