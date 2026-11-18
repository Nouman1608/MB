---
title: "Cambridge A Level Mathematics (9709): The Poisson distribution -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 6 – Probability & Statistics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 6.1
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "the-poisson-distribution-cambridge-alevel-maths"
description: "Twelve original 9709 Paper 6 questions on 6.1: Poisson probabilities, rescaled intervals, model conditions, data checks and both approximations."
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
> mark tariffs -- Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

These questions cover subtopic 6.1 The Poisson distribution of Cambridge International AS & A Level Mathematics 9709 (Paper 6). Give answers to 3 significant figures and show the formula with numbers substituted.

Related: [Poisson distribution study guide](/resources/cambridge-a-level-mathematics-9709-the-poisson-distribution-cambridge-alevel-maths/) | [Poisson distribution revision notes](/resources/cambridge-a-level-mathematics-9709-the-poisson-distribution-cambridge-alevel-maths-revision-notes/)

## Section A

**1.** X ~ Po(2.5). Find P(X = 3). **[2]**

**2.** X ~ Po(4). Find P(X ≤ 2). **[2]**

**3.** X ~ Po(1.8). Find P(X ≥ 2). **[3]**

**4.** X ~ Po(λ) and P(X = 0) = 0.2. Find λ. **[2]**

**5.** The number of typing errors on a page of a report is modelled by a Poisson distribution. State two conditions, in context, needed for this model to be valid. **[2]**

**6.** X ~ Po(λ) and P(X = 2) = P(X = 3). Find λ. **[2]**

## Section B

**7.** Emails arrive in an inbox at random at a mean rate of 6 per hour.

**(a)** Find the probability that exactly 4 emails arrive in a 30-minute period.

**(b)** Find the probability that at least 2 emails arrive in a 15-minute period.

**(c)** Find the length of the shortest period, in minutes, for which the probability that no email arrives is less than 0.01. **[7]**

**8.** 1.2% of eggs delivered to a shop are cracked. A box contains 250 eggs.

**(a)** Explain why a Poisson distribution is a suitable approximation for the number of cracked eggs in the box.

**(b)** Use this approximation to find the probability that fewer than 3 eggs in the box are cracked. **[5]**

**9.** Accidents on a stretch of road occur at random at a mean rate of 4.5 per week.

**(a)** State the distribution of the number of accidents in a 6-week period.

**(b)** Use a suitable approximation to find the probability that there are fewer than 25 accidents in a 6-week period. **[5]**

**10.** The numbers of flaws found on 100 sheets of glass are shown.

| Number of flaws | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Number of sheets | 30 | 38 | 20 | 9 | 3 |

**(a)** Find the mean and variance of the number of flaws per sheet.

**(b)** Explain how your answers support a Poisson model.

**(c)** Using a Poisson model with the mean from part (a), find the expected number of sheets, out of 100, with no flaws. **[6]**

**11.** The number of cars passing a checkpoint each minute has distribution Po(2.4).

**(a)** Find the probability that in a given 5-minute period at least one car passes in every one of the five minutes.

**(b)** Find the probability that exactly 10 cars pass in a 5-minute period. **[5]**

**12.** Calls to a small office arrive at random at a mean rate of 1.5 per hour. Given that at least one call arrives in a particular hour, find the probability that exactly one call arrives in that hour. **[4]**

## Answers

**1.** e^(−2.5) × 2.5³/3! [1] = **0.214** [1] **[2]**

**2.** e^(−4)(1 + 4 + 8) = 13e^(−4) [1] = **0.238** [1] **[2]**

**3.** 1 − P(X ≤ 1) [1] = 1 − e^(−1.8)(1 + 1.8) [1] = 1 − 0.4628 = **0.537** [1] **[3]**

**4.** e^(−λ) = 0.2 [1]; λ = ln 5 = **1.61** [1] **[2]**

**5.** Any two, in context [2]: errors occur independently of each other; errors occur at random; errors occur singly; the mean number of errors per page is constant throughout the report **[2]**

**6.** e^(−λ)λ²/2 = e^(−λ)λ³/6 [1]; λ = **3** [1] **[2]**

**7. (a)** X ~ Po(3) [1]; e^(−3) × 3⁴/4! = **0.168** [1]

**(b)** Y ~ Po(1.5); 1 − e^(−1.5)(1 + 1.5) [1] = **0.442** [1]

**(c)** Rate 0.1 per minute, so P(none in t minutes) = e^(−0.1t) [1]; e^(−0.1t) < 0.01 gives t > 10 ln 100 [1]; t > 46.05, so about **46.1 minutes** [1] **[7]**

**8. (a)** n = 250 > 50 [1] and np = 250 × 0.012 = 3 < 5 [1]

**(b)** X ≈ Po(3) [1]; P(X ≤ 2) = e^(−3)(1 + 3 + 4.5) [1] = **0.423** [1] **[5]**

*Examiner insight:* the exact binomial value is 0.422, which shows how close the approximation is. No continuity correction is used, because both distributions are discrete.

**9. (a)** **Po(27)** [1]

**(b)** λ = 27 > 15, so use N(27, 27) [1]; X < 25 means X ≤ 24, so P(Y < 24.5) [1]; z = (24.5 − 27)/√27 = −0.481 [1]; Φ(−0.481) = 1 − 0.6848 = **0.315** [1] **[5]**

**10. (a)** Mean = (38 + 40 + 27 + 12)/100 = **1.17** [1]; Σx²f = 38 + 80 + 81 + 48 = 247 [1]; variance = 2.47 − 1.17² = **1.10** [1]

**(b)** The mean and variance are close, as they would be for a Poisson distribution, where both equal λ [1]

**(c)** P(X = 0) = e^(−1.17) = 0.3104 [1]; expected number = **31.0 sheets** (compared with 30 observed) [1] **[6]**

**11. (a)** P(at least one car in a minute) = 1 − e^(−2.4) = 0.9093 [1]; for five independent minutes, 0.9093⁵ [1] = **0.622** [1]

**(b)** Po(12): e^(−12) × 12¹⁰/10! [1] = **0.105** [1] **[5]**

**12.** P(X = 1) = 1.5e^(−1.5) = 0.3347 [1]; P(X ≥ 1) = 1 − e^(−1.5) = 0.7769 [1]; P(X = 1 | X ≥ 1) = 0.3347 ÷ 0.7769 [1] = **0.431** [1] **[4]**

*Examiner insight:* the event X = 1 lies inside X ≥ 1, so the intersection in the conditional probability formula is just P(X = 1).

## Where marks are usually lost

- The mean not rescaled to the new interval.
- Conditions for an approximation stated without numerical values.
- A continuity correction applied to the Poisson approximation to the binomial, or omitted from the normal approximation to the Poisson.
- The standard deviation of N(λ, λ) taken as λ instead of √λ.
- Modelling conditions written in general terms with no reference to the context.
