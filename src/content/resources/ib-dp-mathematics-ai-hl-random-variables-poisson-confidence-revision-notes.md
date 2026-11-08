---
title: "IB DP Mathematics: Applications and Interpretation -- Random variables, the central limit theorem, confidence intervals and the Poisson distribution (HL) Revision Notes"
seoTitle: "IB Maths AI HL Random Variables and Poisson Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Random variables, the central limit theorem, confidence intervals and the Poisson distribution (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 4.14
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-14"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-15"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-16"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-17"
description: "Condensed IB Maths AI HL revision notes on E and Var rules, X̄ and the CLT, z and t confidence intervals and Poisson, with a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-09-27
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by muhammad-ghazali-siddiqui on 2026-09-29; 2026-11-08: reviewed by muhammad-ghazali-siddiqui."
---

For full explanations and worked examples, start with the [random variables, CLT, confidence intervals and Poisson study guide](/resources/ib-dp-mathematics-ai-hl-random-variables-poisson-confidence/).

These notes cover the HL random variables unit of IB Diploma Programme Mathematics: Applications and Interpretation. They are aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 4.14–4.17, all of which are AHL content (HL only). They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 sessions.

Track your progress on the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) and see the whole course on the [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/). When you are ready, try the [practice questions](/resources/ib-dp-mathematics-ai-hl-random-variables-poisson-confidence-practice/). For the SL statistics this unit builds on, see the [AI statistics and probability guide](/resources/ib-dp-mathematics-ai-statistics-probability/).

## Key definitions

- **Var(X)**: the variance of the random variable X. The formula for it is not required in examinations; you will be given it or use the GDC.
- **Unbiased estimate**: a sample statistic whose expected value equals the population parameter. x̄ estimates μ; s²ₙ₋₁ estimates σ².
- **s²ₙ**: the sample variance (divide by n). **s²ₙ₋₁**: the unbiased estimate of the population variance (divide by n − 1).
- **Central limit theorem (CLT)**: for large n, X̄ is approximately normal whatever the distribution of X. In examinations, n > 30 counts as large.
- **Confidence interval**: a range, built from one sample, that would contain μ in the stated percentage of repeated samples.
- **Po(m)**: the Poisson distribution with mean m. X ~ Po(m) means X has this distribution.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-random-variables-poisson-confidence--03-imath-rv-sample-mean.webp" width="900" height="1010" alt="A wide dashed curve for X ~ N(500, 12²) and a narrow curve for the mean of 9 values, N(500, 4²), with P(x̄ &lt; 495) = 0.106 shaded." loading="lazy">
  <figcaption>The sample mean has standard deviation σ/√n, so it clusters closer to μ.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-random-variables-poisson-confidence--04-imath-rv-clt.webp" width="900" height="1250" alt="Three panels show the exact distribution of the mean of n values from a skewed population against a normal curve. The fit is poor at n = 1, better at n = 5 and close at n = 40." loading="lazy">
  <figcaption>For large n the mean is approximately normal even when the population is not.</figcaption>
</figure>


## Formulas

| Result | Formula | Condition |
|---|---|---|
| Linear transformation | E(aX + b) = aE(X) + b | any X |
| | Var(aX + b) = a²Var(X) | any X |
| Linear combination, mean | E(a₁X₁ + … + aₙXₙ) = a₁E(X₁) + … + aₙE(Xₙ) | any X₁, …, Xₙ |
| Linear combination, variance | Var(a₁X₁ + … + aₙXₙ) = a₁²Var(X₁) + … + aₙ²Var(Xₙ) | X₁, …, Xₙ independent |
| Unbiased estimate of μ | x̄ = Σxᵢ / n | |
| Unbiased estimate of σ² | s²ₙ₋₁ = (n/(n − 1)) s²ₙ = Σfᵢ(xᵢ − x̄)² / (n − 1) | n = Σfᵢ |
| Sample mean of a normal | X ~ N(μ, σ²) ⇒ X̄ ~ N(μ, σ²/n) | exact for any n |
| Central limit theorem | X̄ ≈ N(μ, σ²/n) | n > 30, any distribution |
| Confidence interval, σ known | x̄ ± z × σ/√n (normal) | normal population |
| Confidence interval, σ unknown | use the t-distribution with sₙ₋₁ | normal population, any n |
| Poisson | P(X = x) = e⁻ᵐ mˣ / x! | x = 0, 1, 2, … |
| | E(X) = m, Var(X) = m | |
| Sum of Poissons | X + Y ~ Po(m₁ + m₂) | X, Y independent |

## Method in steps

**Probability for a combination of normal variables**

1. Define the new variable, for example T = A₁ + A₂ − B.
2. Find E(T) from the coefficients.
3. Find Var(T): square each coefficient, and add every term.
4. State T ~ N(E(T), Var(T)).
5. Rewrite the event in terms of T (for example "A₁ + A₂ > B" becomes T > 0) and use the GDC with SD = √Var(T).

**Probability for a sample mean**

1. Decide why X̄ is normal: the population is normal (exact), or n > 30 (CLT, approximate). Say which.
2. Write X̄ ~ N(μ, σ²/n).
3. Enter σ/√n, not σ²/n, as the standard deviation.

**Confidence interval**

1. Ask: is σ given? Yes → Z-interval. No → T-interval, whatever the sample size.
2. Enter the data list, or x̄, n and σ (or sₙ₋₁).
3. Write the interval to 3 s.f., in square brackets.
4. Interpret: "We are C% confident that the mean [quantity] lies between … and …".

**Poisson**

1. Check the conditions: independent events, uniform average rate.
2. Scale m to the interval asked about.
3. For a total from independent sources, add the means.
4. Convert "≥", ">" and "<" into cumulative form before using poissoncdf.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-random-variables-poisson-confidence--07-imath-rv-poisson-scaling.webp" width="900" height="1070" alt="Po(2.4) for 10 minutes with P(X = 3) = 0.209 shaded, then Po(4.8) for 20 minutes with P(Y ≥ 5) = 0.524 shaded." loading="lazy">
  <figcaption>Scale the Poisson mean to the interval in the question before calculating.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-random-variables-poisson-confidence--08-imath-rv-poisson-sum.webp" width="900" height="1040" alt="Po(2.4) and Po(1.1) combine into Po(3.5), shown with P(T ≤ 2) = 0.321 shaded." loading="lazy">
  <figcaption>The sum of independent Poisson variables is Poisson with the means added.</figcaption>
</figure>


## Small worked reminders

- E(X) = 12, Var(X) = 4, Y = 3X − 5 → E(Y) = 31, Var(Y) = 36.
- Box 400 g (SD 15) plus 6 apples, each 150 g (SD 8): Var = 15² + 6 × 8² = 609, SD = 24.7 g.
- X ~ N(500, 12²), n = 9 → X̄ ~ N(500, 16), so SD(X̄) = 4.
- 2.4 calls per 10 minutes → Po(4.8) for 20 minutes.
- Po(2.4) and Po(1.1) independent → total ~ Po(3.5).
- Cups A ~ N(45, 3²), B ~ N(80, 4²): D = A₁ + A₂ − B ~ N(10, 34), so P(A₁ + A₂ > B) = P(D > 0) = 0.957.
- Mean 3.2, SD 1.5, not normal, n = 40 → CLT: SD(X̄) = 1.5/√40 = 0.237, P(X̄ > 3.5) = 0.103.
- σ = 3 known, n = 25, x̄ = 48.6 → 95% Z-interval [47.4, 49.8].

## Interpreting a confidence interval

Use this template: "We are 95% confident that the mean [quantity, with units] of [population] lies between [lower] and [upper]."

What it means: if you took many samples and built an interval from each in the same way, about 95% of those intervals would contain μ. It does not mean there is a 95% probability that μ lies in your one interval, because μ is fixed.

To judge a claim, check whether the claimed value lies inside the interval. Inside: the sample is consistent with the claim. Outside: the sample does not support it. Raising the confidence level widens the interval; a larger sample narrows it.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-random-variables-poisson-confidence--05-imath-rv-ci-meaning.webp" width="900" height="1140" alt="Twenty simulated 95% intervals around a fixed true mean of 50. One misses the true mean and the rest contain it." loading="lazy">
  <figcaption>About 95% of intervals built this way contain μ; μ is fixed and the intervals vary.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-random-variables-poisson-confidence--06-imath-rv-t-vs-z.webp" width="900" height="940" alt="A t curve with 7 degrees of freedom has heavier tails than the normal, so its 90% critical value 1.895 exceeds 1.645. For the eight leaves the t interval 14.2 to 15.0 is wider than a z interval." loading="lazy">
  <figcaption>With σ unknown use t; the larger multiplier widens the interval.</figcaption>
</figure>


## Must-know distinctions

**X₁ + X₂ versus 2X.** Two independent observations: Var = 2Var(X). One observation doubled: Var = 4Var(X). Read the context: "the total mass of two bags" is X₁ + X₂; "a bag of twice the size" may be 2X.

**X + Y versus X − Y.** Means add or subtract. Variances always add.

**s²ₙ versus s²ₙ₋₁.** The GDC often shows σx (that is, sₙ) and Sx (that is, sₙ₋₁). Only s²ₙ₋₁ is the unbiased estimate of σ².

**Normal population versus CLT.** A normal population gives an exactly normal X̄ for any n. A non-normal population needs n > 30 and gives an approximately normal X̄.

**Z-interval versus T-interval.** The choice depends only on whether σ is known. A large sample does not let you switch to z.

**Binomial versus Poisson.** Binomial has a fixed number of trials and a maximum value n. Poisson counts events in an interval with no fixed maximum.

**Poisson versus normal.** Poisson is discrete and counts events. Normal is continuous and models measurements.

## Quick self-test

1. E(X) = 5 and Var(X) = 3. Find E(2X + 1) and Var(2X + 1).
2. X and Y are independent with Var(X) = 4 and Var(Y) = 9. Find Var(X − Y).
3. X₁ and X₂ are independent, each with variance 5. Find Var(X₁ + X₂) and Var(2X₁).
4. A sample of 10 has s²ₙ = 6.4. Find s²ₙ₋₁.
5. X ~ N(40, 6²). Write down the distribution of the mean of a sample of 16.
6. What sample size do IB examinations treat as large enough for the CLT?
7. X ~ Po(2). Find P(X = 0).
8. Faults occur at 1.2 per hour. Find the probability of exactly 4 faults in 3 hours.
9. X ~ Po(1.5) and Y ~ Po(2.5) are independent. Find P(X + Y ≤ 2).
10. A sample of 100 is taken from a normal population with unknown σ. Which distribution gives the confidence interval?
11. A 95% confidence interval for μ is [12.1, 13.5]. Write down x̄.
12. Emails arrive at 0.6 per minute. Find the probability that at least one arrives in a given minute.

### Answers

1. E = 2(5) + 1 = **11**; Var = 2² × 3 = **12**.
2. 4 + 9 = **13**.
3. Var(X₁ + X₂) = **10**; Var(2X₁) = 4 × 5 = **20**.
4. (10/9) × 6.4 = **7.11** (3 s.f.).
5. X̄ ~ **N(40, 2.25)**, since 36/16 = 2.25.
6. **n > 30**.
7. e⁻² = **0.135** (3 s.f.).
8. Po(3.6): P(X = 4) = **0.191** (3 s.f.).
9. X + Y ~ Po(4): P(≤ 2) = **0.238** (3 s.f.).
10. **The t-distribution**, because σ is unknown, regardless of sample size.
11. The midpoint: (12.1 + 13.5)/2 = **12.8**.
12. X ~ Po(0.6): 1 − e⁻⁰·⁶ = **0.451** (3 s.f.).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-random-variables-poisson-confidence--01-imath-rv-var-combine.webp" width="900" height="1060" alt="A box with six different apples is compared with a box and one apple counted six times. Two bell curves centred on 1300 g show variance 609 (SD 24.7 g) for the correct model and 2529 (SD 50.3 g) for the wrong one." loading="lazy">
  <figcaption>Separate independent items add variances; one item multiplied by n multiplies variance by n².</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-random-variables-poisson-confidence--02-imath-rv-unbiased.webp" width="900" height="970" alt="Bar chart of books read by 20 people with mean 1.6. The sum of squared deviations 22.8 divided by 20 gives 1.14 and divided by 19 gives 1.2, the unbiased estimate of σ²." loading="lazy">
  <figcaption>Divide by n − 1 to get the unbiased estimate of the population variance.</figcaption>
</figure>


## Where marks are usually lost

- Writing Var(X − Y) = Var(X) − Var(Y). The variances add.
- Modelling "the total of n items" as nX, which gives n²Var(X) instead of nVar(X).
- Quoting σx from the GDC as the estimate of σ when the question asks for an unbiased estimate, which needs Sx (sₙ₋₁).
- Entering σ²/n as the standard deviation in normalcdf, or forgetting to divide σ by √n.
- Saying "X̄ is normal" with no reason. State "the population is normal" or "n > 30, so by the central limit theorem".
- Using a Z-interval with the sample standard deviation because n is large; the guide requires t whenever σ is unknown.
- Interpreting a confidence interval as "a 95% probability that μ is in this interval", or giving no context at all.
- Keeping the Poisson mean for the wrong interval, for example using the hourly rate for a 3-hour period.
- Treating P(X ≥ 4) as 1 − P(X ≤ 4) instead of 1 − P(X ≤ 3).
- Naming a model without a reason from the context, such as "Poisson" with no mention of independence or a constant rate.

## Frequently asked questions

**What sample size counts as large for the central limit theorem in IB Maths AI?**
In IB examinations, n > 30 counts as large. For such samples the sample mean X̄ is approximately normal, X̄ ≈ N(μ, σ²/n), whatever the distribution of X.

**Why is Var(X − Y) equal to Var(X) + Var(Y)?**
For independent variables, each coefficient is squared in the variance rule, so the coefficient −1 becomes +1. Variances always add, even when the variables are subtracted.

**What does a 95% confidence interval mean?**
If you took many samples and built an interval from each in the same way, about 95% of those intervals would contain the population mean μ. It does not mean there is a 95% probability that μ lies in your one interval, because μ is fixed.

**What is the mean and variance of a Poisson distribution?**
For X ~ Po(m), both the mean and the variance equal m. The sum of two independent Poisson variables is also Poisson, with mean m₁ + m₂.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections AHL 4.14, 4.15, 4.16 and 4.17.
