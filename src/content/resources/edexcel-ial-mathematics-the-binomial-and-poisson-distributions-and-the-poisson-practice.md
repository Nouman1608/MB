---
title: "Pearson Edexcel International Advanced Level Mathematics: The Binomial and Poisson distributions and the Poisson approximation to the binomial (YMA01) -- Practice Questions"
seoTitle: "Edexcel IAL Maths S2 Binomial and Poisson Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "The Binomial and Poisson distributions and the Poisson approximation to the binomial"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 165
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-2-edexcel-alevel-maths"
    subtopic: "s2-binomial-and-poisson-distributions-edexcel-alevel-maths"
description: "Eleven original questions with worked answers on binomial and Poisson models, mean and variance and the Poisson approximation, for Edexcel IAL Unit S2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions follow Unit S2 section 1 (topics 1.1 to 1.3) of Pearson's International Advanced Subsidiary/Advanced Level Mathematics, Further Mathematics and Pure Mathematics specification (YMA01), Issue 3, April 2019. The specification states that Unit S2 is optional for IAS Further Mathematics and for IAL Mathematics and Further Mathematics. Where a question supplies cumulative probabilities, treat them as data given in the question.

Learn the methods first in the [study guide](/resources/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson/) and the [revision notes](/resources/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson-revision-notes/). The [course hub](/boards/edexcel/a-level/mathematics/) and [printable checklist](/checklists/edexcel/a-level/mathematics/) show the wider course.

## Questions

**1.** The random variable X ~ B(8, 0.35). Find **(a)** P(X = 3) **[2]**, **(b)** P(X ≥ 2) **[2]**.

**2.** The random variable Y ~ Po(1.8). Find **(a)** P(Y = 2) **[2]**, **(b)** P(Y ≥ 1) **[2]**.

**3.** X ~ B(n, p) has mean 18 and standard deviation 3. Find n and p. **[4]**

**4.** X ~ B(25, 0.2). You are given P(X ≤ 2) = 0.0982, P(X ≤ 5) = 0.6167, P(X ≤ 6) = 0.7800, P(X ≤ 7) = 0.8909 and P(X ≤ 8) = 0.9532. Find **(a)** P(3 ≤ X ≤ 7) **[2]**, **(b)** P(X ≥ 9) **[2]**, **(c)** P(X = 6) **[2]**.

**5.** Online orders reach a small bakery at an average rate of 2.4 per hour. **(a)** State the distribution of the number of orders in 15 minutes and find the probability that there are none **[2]**. **(b)** Find the probability of at least 9 orders in 3 hours, given that a Po(7.2) variable has P(Y ≤ 8) = 0.7027 **[3]**.

**6.** In a batch of tablets, each is chipped independently with probability 0.015. A pack holds 200 tablets and X is the number chipped. **(a)** Explain why X can be approximated by a Poisson distribution, and state it **[2]**. **(b)** Use it to estimate P(X ≤ 1) **[2]**. **(c)** Calculate the exact binomial value of P(X ≤ 1) and comment on the approximation **[2]**.

**7.** X ~ Po(λ) and P(X = 0) = 0.2. **(a)** Show that λ = ln 5 **[2]**. **(b)** Find P(X ≥ 2) **[3]**.

**8.** The numbers of cyclists passing a point on two separate paths in one minute are independent, with A ~ Po(1.5) and B ~ Po(2.1). Let S = A + B. **(a)** State the distribution of S **[1]**. Find **(b)** P(S = 4) **[2]** and **(c)** P(S ≤ 2) **[2]**.

**9.** **(a)** Fifteen tomato plants share a greenhouse and X is the number infected by a fungus. Give one reason, in context, why B(15, p) may be unsuitable **[2]**. **(b)** A shop records the number of customers entering in each of 50 half-hour periods across a day, with mean 2.6 and variance 5.9. Comment on whether a Poisson model suits these counts **[2]**. **(c)** Suggest one way to improve the model in (b) **[1]**.

**10.** A library finds that a member returns a book late with probability 0.08, independently. Of 40 members, X returned a book late. **(a)** Find E(X) and Var(X) **[2]**. **(b)** Find P(X ≥ 5), given that P(X ≤ 4) = 0.7868 **[3]**. **(c)** Use a Poisson approximation to estimate P(X ≥ 5), given that a Po(3.2) variable has P(Y ≤ 4) = 0.7806 **[3]**. **(d)** Compare your answers in (b) and (c) using the variances **[1]**.

**11.** Hairline cracks appear in glass panels at an average rate of 1.4 per day, independently. **(a)** Find the probability of at least 10 cracks in 5 days, given that a Po(7) variable has P(Y ≤ 9) = 0.8305 **[3]**. **(b)** Find the probability that a given day has no cracks **[2]**. **(c)** Find the probability that, in 5 days, exactly two days have no cracks **[3]**.

## Answers

**1. (a)** P(X = 3) = 56 × 0.35³ × 0.65⁵ [1] = **0.279** [1]
**(b)** P(X ≥ 2) = 1 − 0.65⁸ − 8 × 0.35 × 0.65⁷ [1] = 1 − 0.0319 − 0.1373 = **0.831** [1]
*Examiner insight:* show an unrounded expression before the 3 s.f. answer, so your method is visible even if the final decimal is slightly off.

**2. (a)** P(Y = 2) = e⁻¹·⁸ × 1.8² / 2 [1] = **0.268** [1]
**(b)** P(Y ≥ 1) = 1 − P(Y = 0) = 1 − e⁻¹·⁸ [1] = **0.835** [1]
*Examiner insight:* the usual error in (b) is to sum from P(Y = 1) upwards or to use 1 − P(Y = 1); the complement is the single term P(Y = 0).

**3.** np = 18 and np(1 − p) = 9 [1]. Dividing, 1 − p = 0.5 [1], so **p = 0.5** [1] and **n = 36** [1]
*Examiner insight:* the question gives the standard deviation, so squaring it to get the variance 9 is the step candidates most often skip.

**4. (a)** P(3 ≤ X ≤ 7) = P(X ≤ 7) − P(X ≤ 2) [1] = 0.8909 − 0.0982 = **0.7927** [1]
**(b)** P(X ≥ 9) = 1 − P(X ≤ 8) [1] = 1 − 0.9532 = **0.0468** [1]
**(c)** P(X = 6) = P(X ≤ 6) − P(X ≤ 5) [1] = 0.7800 − 0.6167 = **0.1633** [1]
*Examiner insight:* showing the difference of two cumulative values makes your method visible even if you misread one table entry.

**5. (a)** Mean = 2.4 ÷ 4 = 0.6, so Y ~ Po(0.6) [1]; P(Y = 0) = e⁻⁰·⁶ = **0.549** [1]
**(b)** Over 3 hours the mean is 7.2, so W ~ Po(7.2) [1]; P(W ≥ 9) = 1 − P(W ≤ 8) [1] = 1 − 0.7027 = **0.2973** [1]
*Examiner insight:* stating the rescaled distribution before calculating is advice worth following, because it shows the mean was changed rather than the probability.

**6. (a)** n = 200 is large and p = 0.015 is small [1], so X ≈ Po(200 × 0.015) = **Po(3)** [1]
**(b)** P(X ≤ 1) ≈ e⁻³(1 + 3) = 4e⁻³ [1] = **0.199** [1]
**(c)** Exact: 0.985²⁰⁰ + 200 × 0.015 × 0.985¹⁹⁹ = **0.197** [1]. The approximation is within about 0.002 of the exact value, so it is a good one here [1]
*Examiner insight:* a comment on an approximation earns more when it quotes the size of the difference than when it says only "they are close".

**7. (a)** P(X = 0) = e⁻λ = 0.2 [1], so λ = ln(1 / 0.2) = **ln 5** [1]
**(b)** P(X = 1) = λe⁻λ = 0.2 ln 5 [1]; P(X ≥ 2) = 1 − 0.2 − 0.2 ln 5 [1] = **0.478** [1]
*Examiner insight:* in a "show that" part, write the line e⁻λ = 0.2 and the step taking logarithms; the final result is given, so the working is what gains credit.

**8. (a)** Independent Poisson variables add, so S ~ **Po(3.6)** [1]
**(b)** P(S = 4) = e⁻³·⁶ × 3.6⁴ / 4! [1] = **0.191** [1]
**(c)** P(S ≤ 2) = e⁻³·⁶(1 + 3.6 + 6.48) [1] = **0.303** [1]
*Examiner insight:* adding the means is valid only because the counts are independent, so mention that when you justify S ~ Po(3.6).

**9. (a)** Disease can spread between neighbouring plants [1], so whether one plant is infected affects the probability for others and the trials are not independent [1]
**(b)** A Poisson model has variance equal to its mean [1]; here the variance 5.9 is more than twice the mean 2.6, so the counts are too spread out and the model is unsuitable [1]
**(c)** Model separate periods (for example lunchtime and the rest of the day) with their own constant rates [1]
*Examiner insight:* comments gain credit when they name a model condition and link it to the context; a vague remark such as "it is not random" is weak.

**10. (a)** E(X) = 40 × 0.08 = **3.2** [1]; Var(X) = 40 × 0.08 × 0.92 = **2.944** [1]
**(b)** P(X ≥ 5) = 1 − P(X ≤ 4) [1] = 1 − 0.7868 [1] = **0.2132** [1]
**(c)** X ≈ Po(3.2) [1]; P(Y ≥ 5) = 1 − 0.7806 [1] = **0.2194** [1]
**(d)** The Poisson variance 3.2 is slightly larger than the binomial variance 2.944, which fits the approximation giving a slightly larger tail probability [1]
*Examiner insight:* in (c), the Poisson mean is the binomial mean np, and writing that link shows why the approximation was chosen.

**11. (a)** Over 5 days the mean is 7, so Y ~ Po(7) [1]; P(Y ≥ 10) = 1 − P(Y ≤ 9) [1] = 1 − 0.8305 = **0.1695** [1]
**(b)** For one day the count is Po(1.4), so P(none) = e⁻¹·⁴ [1] = **0.2466** [1]
**(c)** Days are independent, so the number of days with no cracks is B(5, 0.2466) [1]; P(2) = 10 × 0.2466² × 0.7534³ [1] = **0.260** [1]
*Examiner insight:* this question uses Poisson and then binomial; naming each distribution as you switch lets credit follow your method even if an earlier decimal is wrong.

## Where marks are usually lost

- Using 1 − P(X ≤ r) when the question needs 1 − P(X ≤ r − 1).
- Quoting a Poisson mean for the wrong interval, for example 2.4 instead of 0.6 for 15 minutes.
- Treating a standard deviation as a variance.
- Writing "not independent" without saying which events affect which.
- Using the Poisson approximation without comment on n being large and p small.
- Subtracting cumulative values in the wrong order or with the wrong index.
- Stating answers to fewer than three significant figures, or rounding table values early.
- Failing to state the distribution before calculating.

## Next steps

- Condense the unit with the [revision notes](/resources/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson-revision-notes/).
- Re-read the worked examples in the [study guide](/resources/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson/).
- Check the course on the [Edexcel A Level Maths hub](/boards/edexcel/a-level/mathematics/) and tick topics on the [checklist](/checklists/edexcel/a-level/mathematics/).
- Take the free 10-minute [diagnostics](/diagnostics/) to find weak areas.
- [Book a free trial class](/trial/) for help with this unit.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019 (Pearson Education Limited). This page covers Unit S2, section 1.
