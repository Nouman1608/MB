---
title: "Pearson Edexcel International Advanced Level Mathematics: Continuous uniform and Normal approximations (YMA01) -- Practice Questions"
seoTitle: "Edexcel IAL Maths S2 Uniform and Normal Approx Practice"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "The continuous uniform distribution and the Normal approximation with continuity correction"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 167
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-2-edexcel-alevel-maths"
    subtopic: "s2-continuous-distributions-edexcel-alevel-maths"
description: "Original practice questions with worked answers on the continuous uniform distribution and Normal approximations for Edexcel IAL Mathematics S2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions follow the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, April 2019, unit S2 content 3.1 and 3.2. The specification lists S2 as an optional unit for IAS Further Mathematics and for IAL Mathematics and Further Mathematics. Give Normal probabilities to 3 significant figures, working from unrounded z values.

Read the [study guide](/resources/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal/) and [revision notes](/resources/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal-revision-notes/) first if a topic is new. The [course hub](/boards/edexcel/a-level/mathematics/), [printable checklist](/checklists/edexcel/a-level/mathematics/) and [free 10-minute diagnostics](/diagnostics/) are also linked for planning.

## Questions

**1.** The continuous random variable X ~ U[3, 11].

**(a)** Find P(X < 5.4). **[2]**
**(b)** Write down the mean and the variance of X. **[2]**
**(c)** Find P(6 < X < 9.5). **[2]**

**2.** The continuous random variable X ~ U[a, b]. Show, by integration, that E(X) = (a + b)/2. **[3]**

**3.** For X ~ U[a, b], show that Var(X) = (b − a)²/12. **[5]**

**4.** The random variable X has a continuous uniform distribution on [a, b]. Its lower quartile is 6.5 and its upper quartile is 14.5. Find a and b. **[5]**

**5.** Parcel masses are recorded to the nearest 5 g. The rounding error R grams is modelled as U[−2.5, 2.5].

**(a)** Find P(|R| > 1.5). **[2]**
**(b)** Find the variance and standard deviation of R. **[2]**

**6.** X ~ B(120, 0.3).

**(a)** State a suitable Normal approximation for X. **[2]**
**(b)** Use it to estimate P(X > 40). **[2]**
**(c)** Use it to estimate P(32 ≤ X < 45). **[3]**

**7.** Messages reach a server at a mean rate of 0.8 per minute, and X is the number in a 40-minute period.

**(a)** State the distribution of X and a Normal approximation to it. **[2]**
**(b)** Estimate P(X ≤ 26). **[3]**
**(c)** Estimate P(X = 30). **[3]**

**8.** Decide whether a Normal approximation is suitable for each of the following, giving reasons based on the mean and the shape.

**(a)** X ~ B(400, 0.5). **[2]**
**(b)** X ~ B(20, 0.05). Find P(Y < −0.5) for the approximating Normal variable Y to support your answer. **[2]**

**9.** A filter releases a sample after a delay of T minutes, where T ~ U[2, 12]. A release is "late" if T > 9.5.

**(a)** Find the probability that a release is late. **[2]**
**(b)** Find the mean and variance of T. **[2]**
**(c)** In 200 independent releases, X are late. State the distribution of X and a suitable Normal approximation. **[3]**
**(d)** Estimate P(X ≥ 60). **[3]**

**10.** X ~ B(200, 0.4). Use a Normal approximation to find the largest integer c such that P(X ≤ c) < 0.05. You may use the value z = −1.645, for which Φ(z) = 0.05. **[5]**

**11.** X ~ Po(25).

**(a)** State a Normal approximation for X. **[1]**
**(b)** Use it, with a continuity correction, to estimate P(X ≥ 30). **[2]**
**(c)** Find the value you would obtain by using 30 instead of 29.5, and explain why 29.5 is the better choice. **[2]**

**12.** The continuous random variable X has probability density function f(x) = k for 2 ≤ x ≤ 9, and f(x) = 0 otherwise.

**(a)** Find k. **[1]**
**(b)** Find the cumulative distribution function F(x) for all x. **[3]**
**(c)** Find E(X²). **[2]**

## Answers

**1.** **(a)** f(x) = 1/8 on [3, 11] [1], so P(X < 5.4) = (5.4 − 3)/8 = **0.3** [1]
**(b)** Mean = (3 + 11)/2 = **7** [1]; variance = 8²/12 = **16/3 (5.33)** [1]
**(c)** Width of the interval is 9.5 − 6 = 3.5 [1], so probability = 3.5/8 = **0.4375** [1]
*Examiner insight:* write the density before the probabilities, because a stated height of 1/8 shows your method clearly to the reader, and keep the variance as an exact fraction unless asked to round.

**2.** E(X) = ∫ x/(b − a) dx from a to b [1] = [x²/(2(b − a))] between a and b = (b² − a²)/(2(b − a)) [1] = (b − a)(b + a)/(2(b − a)) = **(a + b)/2** [1]
*Examiner insight:* in a derivation, state the integral with its limits and show the factorisation of b² − a²; the cancelled factor is the step that turns the integral into the stated result.

**3.** E(X²) = ∫ x²/(b − a) dx = (b³ − a³)/(3(b − a)) [1] = (a² + ab + b²)/3 using b³ − a³ = (b − a)(a² + ab + b²) [1]
Var(X) = E(X²) − [E(X)]² = (a² + ab + b²)/3 − (a + b)²/4 [1]
= (4a² + 4ab + 4b² − 3a² − 6ab − 3b²)/12 [1]
= (a² − 2ab + b²)/12 = **(b − a)²/12** [1]
*Examiner insight:* the common-denominator line is where sign slips happen, so write it out in full rather than combining in your head; the question gives the answer, so the working is what you are being judged on.

**4.** F(x) = (x − a)/(b − a), so quartiles satisfy q = a + p(b − a) [1]
6.5 = a + (b − a)/4 and 14.5 = a + 3(b − a)/4 [1]
Subtracting: (b − a)/2 = 8, so b − a = 16 [1]
a = 6.5 − 16/4 = **2.5** [1]; b = 2.5 + 16 = **18.5** [1]
*Examiner insight:* both quartile equations should appear before you solve them; checking that the median (10.5) sits midway between the quartiles is a quick way to catch a slip.

**5.** **(a)** P(R > 1.5) = (2.5 − 1.5)/5 = 0.2, and by symmetry P(R < −1.5) = 0.2 [1]; so P(|R| > 1.5) = **0.4** [1]
**(b)** Variance = 5²/12 = **25/12 (2.08)** [1]; standard deviation = √(25/12) = **1.44** [1]
*Examiner insight:* split a modulus event into its two tails and say so; counting only one tail is the usual way to lose credit here.

**6.** **(a)** np = 36 [1] and np(1 − p) = 25.2, so **Y ~ N(36, 25.2)** [1]
**(b)** P(X > 40) = P(X ≥ 41) → P(Y > 40.5); z = 4.5/√25.2 = 0.896 [1]; probability = **0.185** [1]
**(c)** Whole numbers 32 to 44, so 31.5 < Y < 44.5 [1]; z = −4.5/5.020 = −0.896 and z = 8.5/5.020 = 1.693 [1]; probability = 0.9548 − 0.1851 = **0.770** [1]
*Examiner insight:* list the whole-number values before correcting; "< 45" stops at 44, so the upper boundary is 44.5, and writing 45.5 is a typical slip.

**7.** **(a)** X ~ Po(32) [1], approximated by **Y ~ N(32, 32)** [1]
**(b)** P(X ≤ 26) → P(Y < 26.5) [1]; z = −5.5/√32 = −0.972 [1]; probability = **0.165** [1]
**(c)** P(X = 30) → P(29.5 < Y < 30.5) [1]; z = −0.442 and z = −0.265 [1]; probability = 0.3954 − 0.3293 = **0.0662** [1]
*Examiner insight:* scale the rate to the whole period before approximating; using 0.8 as the Poisson parameter and then 40 as the Normal mean mixes two models.

**8.** **(a)** Mean 200 and variance 100 [1]; p = 0.5 gives a symmetrical, bell-shaped distribution, so the Normal approximation is **suitable** [1]
**(b)** Approximation is N(1, 0.95) [1]; P(Y < −0.5) = Φ(−1.539) = **0.0619**, so about 6% of the model lies where a count cannot be, because the mean is small and the true distribution is skewed, so the approximation is **not suitable** [1]
*Examiner insight:* a reason that mentions the size of the mean or the shape is more convincing than quoting "n is large" alone, which does not address the skewness.

**9.** **(a)** Width of late interval = 12 − 9.5 = 2.5, so P(T > 9.5) = 2.5/10 [1] = **0.25** [1]
**(b)** Mean = (2 + 12)/2 = **7** [1]; variance = 10²/12 = **25/3 (8.33)** [1]
**(c)** X ~ B(200, 0.25) [1]; mean = 50 [1] and variance = 200 × 0.25 × 0.75 = 37.5, so **Y ~ N(50, 37.5)** [1]
**(d)** P(X ≥ 60) → P(Y > 59.5) [1]; z = 9.5/√37.5 = 1.551 [1]; probability = **0.0604** [1]
*Examiner insight:* in a chained problem, pass the exact probability 0.25 forward rather than a rounded one, and label which distribution each part uses.

**10.** X ≈ Y ~ N(80, 48), standard deviation 6.928 [1]
P(X ≤ c) → P(Y < c + 0.5), so need (c + 0.5 − 80)/6.928 < −1.645 [1]
c + 0.5 < 80 − 1.645 × 6.928 = 68.60 [1]
c < 68.1 [1]
Largest integer is **c = 68** [1]
*Examiner insight:* keep the continuity correction in the inequality and then reduce to an integer at the end; rounding 68.6 up to 69 would give a probability above 0.05 (about 0.065), so check your final integer.

**11.** **(a)** **Y ~ N(25, 25)** [1]
**(b)** P(X ≥ 30) → P(Y > 29.5) [1]; z = 4.5/5 = 0.9, giving **0.184** [1]
**(c)** Using 30: z = 1, giving **0.159** [1]. Whole number 30 is represented by the band 29.5 to 30.5, so a boundary at 30 discards half of that band and underestimates the probability (the exact Poisson value is 0.182) [1]
*Examiner insight:* when asked to explain a correction, refer to the band of width 1 around the whole number rather than saying only that it "makes the answer more accurate".

**12.** **(a)** The area is 7k = 1, so **k = 1/7** [1]
**(b)** F(x) = **0** for x < 2 [1]; F(x) = **(x − 2)/7** for 2 ≤ x ≤ 9 [1]; F(x) = **1** for x > 9 [1]
**(c)** E(X²) = ∫ x²/7 dx from 2 to 9 = (729 − 8)/21 [1] = 721/21 = **103/3 (34.3)** [1]
*Examiner insight:* give the cumulative distribution function for all three ranges; stopping at the middle expression leaves the definition incomplete.

## Where marks are usually lost

- Using the wrong height for a uniform density, such as 1/b instead of 1/(b − a).
- Quoting the variance as (b − a)²/6 or leaving it as a rounded decimal when an exact fraction was asked for.
- Counting one tail only when a modulus event, such as |R| > 1.5, has two tails.
- Applying the continuity correction in the wrong direction, or not at all.
- Using 45.5 for P(X < 45), when the largest included value is 44.
- Entering the standard deviation where the Normal variance belongs.
- Failing to scale a Poisson rate to the time period before approximating.
- Rounding a probability early in a multi-part problem and carrying the rounded value forward.
- Skipping the factorisation in derivation questions.

## Next steps

- Review the [revision notes](/resources/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal-revision-notes/) and [study guide](/resources/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal/).
- Visit the [course hub](/boards/edexcel/a-level/mathematics/) and [checklist](/checklists/edexcel/a-level/mathematics/).
- Take the [free 10-minute diagnostics](/diagnostics/) to find weak areas.
- Book a [free trial class](/trial/).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, published by Pearson Education Limited (unit S2, content 3.1 and 3.2).
