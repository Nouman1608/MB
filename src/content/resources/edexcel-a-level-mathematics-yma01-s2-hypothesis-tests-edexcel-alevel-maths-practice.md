---
title: "Edexcel International A Level Mathematics (YMA01): Hypothesis tests -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S2: Statistics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 8.5
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-2-edexcel-alevel-maths"
    subtopic: "s2-hypothesis-tests-edexcel-alevel-maths"
description: "Twelve original Edexcel IAL Maths S2 hypothesis test questions with mark-scheme answers: binomial and Poisson tests, critical regions and two tails."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

These questions cover Unit S2, content statements 4.3 to 4.6: null and alternative hypotheses, critical regions, one- and two-tailed tests, and tests for the binomial parameter p and the Poisson mean, including the normal approximation. Probabilities in the answers are given to 4 decimal places, as in cumulative tables.

Related: [hypothesis tests revision notes](/resources/edexcel-a-level-mathematics-yma01-s2-hypothesis-tests-edexcel-alevel-maths-revision-notes/) and the [hypothesis tests study guide](/resources/edexcel-a-level-mathematics-yma01-s2-hypothesis-tests-edexcel-alevel-maths/).

---

## Section A

**1.** Explain what is meant by the null hypothesis and by the critical region of a hypothesis test. **[2]**

**2.** Explain why the actual significance level of a test using the binomial distribution is often less than the stated significance level. **[2]**

**3.** X ~ B(12, p). Find the critical region for a test of H₀: p = 0.3 against H₁: p < 0.3 at the 10% level, and state the actual significance level. **[3]**

**4.** A garage claims it services an average of 5 cars per day. A rival believes the true rate is higher. Write suitable hypotheses for a test, defining the parameter you use. **[2]**

## Section B

**5.** A café believes that 20% of its customers order a dessert. After a new menu is introduced, 6 of a random sample of 15 customers order a dessert.

**(a)** Test, at the 5% level of significance, whether the proportion ordering a dessert has increased. **[5]**

**(b)** State whether your conclusion would change at the 10% level, giving a reason. **[1]**

**6.** A student wants to test whether a coin is biased. She tosses it 30 times and records X, the number of heads.

**(a)** Write down suitable hypotheses. **[1]**

**(b)** Find the critical region for a two-tailed test at the 5% level. **[4]**

**(c)** State the actual significance level of the test. **[1]**

**(d)** She obtains 20 heads. State, with a reason, her conclusion. **[2]**

**7.** Calls arrive at a helpline at a mean rate of 3.5 per hour. After an advertising campaign, 13 calls arrive in a randomly chosen two-hour period. Test, at the 5% level, whether the rate of calls has increased. **[6]**

**8.** A factory records accidents at a mean rate of 2.5 per day. After new safety rules, there are no accidents on one randomly chosen day.

**(a)** Test, at the 5% level, whether the mean rate has decreased. **[4]**

**(b)** Explain why observing a single day can never give significant evidence of a decrease at the 5% level. **[2]**

**9.** A politician claims that 40% of voters support her policy. In a random sample of 150 voters, 48 support it. Using a suitable approximation, test at the 5% level whether support is lower than she claims. **[7]**

**10.** The number of emails a manager receives in an hour has a Poisson distribution. Under her usual workload the mean is 9. Find the critical region for a test of whether the mean has changed, using a two-tailed test at the 10% level, and state the actual significance level. **[5]**

**11.** It is known that 10% of a type of plant are infected. A gardener suspects the proportion is higher in her area and tests 40 plants.

**(a)** Find the critical region for a test at the 5% level. **[3]**

**(b)** She finds 7 infected plants. State her conclusion in context. **[2]**

**12.** A student writes "accept H₀, so the proportion is 0.3" at the end of a test. Explain two ways in which this conclusion should be improved. **[2]**

---

## Answers

**1.** The null hypothesis is the claim about the parameter's value that is assumed true while the test is carried out [1]. The critical region is the set of values of the test statistic that would lead to the null hypothesis being rejected [1].

**2.** The binomial distribution is discrete, so the probabilities of the possible critical regions jump in steps [1]. The critical region chosen is the one with probability as close as possible to, but not above, the stated level [1].

**3.** P(X ≤ 1) = 0.0850 ≤ 0.10 and P(X ≤ 2) = 0.2528 > 0.10 [1], so the critical region is **X ≤ 1** [1] with actual significance level **0.0850** [1].

**4.** Let λ be the mean number of cars serviced per day [1]. H₀: λ = 5, H₁: λ > 5 [1].

**5. (a)** H₀: p = 0.2, H₁: p > 0.2 [1]. Under H₀, X ~ B(15, 0.2) [1]. P(X ≥ 6) = 1 − P(X ≤ 5) = 1 − 0.9389 = 0.0611 [1]. 0.0611 > 0.05, so do not reject H₀ [1]. There is insufficient evidence that the proportion of customers ordering a dessert has increased [1].

**(b)** Yes: 0.0611 < 0.10, so H₀ would be rejected, giving evidence of an increase [1].

**6. (a)** H₀: p = 0.5, H₁: p ≠ 0.5, where p is the probability of a head [1].

**(b)** Use 0.025 in each tail [1]. Lower: P(X ≤ 9) = 0.0214 ≤ 0.025 and P(X ≤ 10) = 0.0494, so X ≤ 9 [1]. Upper: P(X ≥ 21) = 1 − P(X ≤ 20) = 0.0214 and P(X ≥ 20) = 0.0494, so X ≥ 21 [1]. Critical region: **X ≤ 9 or X ≥ 21** [1].

**(c)** 0.0214 + 0.0214 = **0.0428** [1].

**(d)** 20 is not in the critical region [1], so there is insufficient evidence that the coin is biased [1].

**7.** H₀: λ = 7, H₁: λ > 7, using the rate for a two-hour period [1] [1]. Under H₀, X ~ Po(7) [1]. P(X ≥ 13) = 1 − P(X ≤ 12) = 1 − 0.9730 = 0.0270 [1]. 0.0270 < 0.05, so reject H₀ [1]. There is evidence that the rate of calls to the helpline has increased [1].

**8. (a)** H₀: λ = 2.5, H₁: λ < 2.5 [1]. Under H₀, X ~ Po(2.5) and P(X ≤ 0) = 0.0821 [1]. 0.0821 > 0.05, so do not reject H₀ [1]. There is insufficient evidence that the accident rate has decreased [1].

**(b)** The most extreme possible result for a decrease is 0 accidents [1], and its probability, 0.0821, is already above 0.05, so no single-day result can fall in a 5% critical region [1].

**9.** H₀: p = 0.4, H₁: p < 0.4 [1]. X ~ B(150, 0.4) is approximated by N(60, 36) [1], since n is large and p is close to 0.5. P(X ≤ 48) ≈ P(Y < 48.5) [1]. z = (48.5 − 60)/6 = −1.92 [1]. P(Z < −1.92) = 1 − 0.9726 = 0.0274 [1]. 0.0274 < 0.05, so reject H₀ [1]. There is evidence that support for the policy is lower than 40% [1].

**10.** H₀: λ = 9, H₁: λ ≠ 9, with 0.05 in each tail [1]. Lower: P(X ≤ 3) = 0.0212 and P(X ≤ 4) = 0.0550, so X ≤ 3 [1]. Upper: P(X ≥ 15) = 1 − P(X ≤ 14) = 1 − 0.9585 = 0.0415 and P(X ≥ 14) = 1 − 0.9261 = 0.0739, so X ≥ 15 [1]. Critical region **X ≤ 3 or X ≥ 15** [1]; actual significance level 0.0212 + 0.0415 = **0.0627** [1].

**11. (a)** H₀: p = 0.1, H₁: p > 0.1, X ~ B(40, 0.1) [1]. P(X ≥ 8) = 1 − 0.9581 = 0.0419 ≤ 0.05 and P(X ≥ 7) = 1 − 0.9005 = 0.0995 [1], so the critical region is **X ≥ 8** [1].

**(b)** 7 is not in the critical region [1], so there is insufficient evidence that the proportion of infected plants in her area is higher than 10% [1].

**12.** It should say "do not reject H₀", because the test cannot show that H₀ is true [1], and it should be written in context, for example "there is insufficient evidence that the proportion has changed from 0.3" [1].

---

## Where marks are usually lost

- Using one tail when the question asks whether something has "changed", as in Questions 6 and 10.
- Not scaling the Poisson mean to the two-hour period in Question 7.
- Finding P(X ≥ k) as 1 − P(X ≤ k).
- Missing the continuity correction in Question 9.
- Conclusions that state "H₀ is true" or omit the context.
