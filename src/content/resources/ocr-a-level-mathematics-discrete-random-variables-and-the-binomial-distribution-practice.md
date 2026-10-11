---
title: "OCR A Level Mathematics A: Discrete random variables and the binomial distribution (H240) -- Practice Questions"
seoTitle: "OCR A Level Maths Binomial Distribution Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Discrete random variables and the binomial distribution"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 127
syllabusTopics:
  - qualification: "a-level"
    topic: "statistics-ocr-alevel-maths"
    subtopic: "statistical-distributions-ocr-alevel-maths"
description: "Original practice questions with worked answers on discrete distributions, binomial probabilities and the mean and variance for OCR A Level Mathematics A."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions follow the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, sections 2.04a to 2.04d. Parts on the mean and variance (2.04d) are **A Level only**; everything else is Stage 1, common with AS. Write the distribution and the formula before the number. Revise first with the [study guide](/resources/ocr-a-level-mathematics-discrete-random-variables-and-the-binomial-distribution/) or the [revision notes](/resources/ocr-a-level-mathematics-discrete-random-variables-and-the-binomial-distribution-revision-notes/).

## Questions

**1.** A fair coin is tossed three times. X is the number of times that a toss shows a different face from the toss before it (so HHT gives X = 1 and HTH gives X = 2).

**(a)** Draw up the probability distribution table for X. **[3]**
**(b)** Find P(X ≥ 1). **[1]**

**2.** A discrete variable X has P(X = x) = k(4 − x) for x = 0, 1, 2, 3, and no other values.

**(a)** Show that k = 0.1. **[2]**
**(b)** Find P(X ≥ 2). **[1]**
**(c)** Find the probability that X is odd. **[1]**

**3.** Six cards are dealt from a standard pack of 52 cards, and X is the number of red cards. Explain why X ~ B(6, 0.5) is not a suitable model. **[3]**

**4.** A goalkeeper faces 10 penalty kicks from different players. The probability of saving any kick is modelled as 0.25, so that the number of saves is B(10, 0.25). State two assumptions made in this model, in context, and give one reason why one of them might not hold. **[4]**

**5.** X ~ B(9, 0.2).

**(a)** Find P(X = 3), showing the formula. **[2]**
**(b)** Find P(X ≥ 2). **[2]**

**6.** X ~ B(25, 0.4). Find

**(a)** P(X ≤ 8), **[1]**
**(b)** P(X > 12), **[2]**
**(c)** P(7 ≤ X ≤ 11). **[2]**

**7.** A batch contains many light bulbs, each of which is faulty with probability 0.06. A sample of 15 bulbs is taken. Let X be the number of faulty bulbs.

**(a)** State the distribution of X and one assumption needed. **[2]**
**(b)** Find the probability that none is faulty. **[1]**
**(c)** Find the probability that at most one is faulty. **[1]**
**(d)** Find the probability that more than two are faulty. **[2]**

**8.** (A Level only)

**(a)** X ~ B(60, 0.45). Find the mean and variance of X. **[2]**
**(b)** Find the standard deviation of X to 3 significant figures. **[1]**
**(c)** Y ~ B(n, p) has mean 20 and variance 12. Find n and p. **[3]**

**9.** A company puts a voucher in each of its packets independently, so that each packet contains one with probability 0.15. A shop receives 40 packets. Let X be the number with a voucher.

**(a)** State the distribution of X and why the model might not be exact. **[2]**
**(b)** Find P(X = 5). **[2]**
**(c)** Find P(X ≥ 8). **[2]**
**(d)** Find P(4 ≤ X ≤ 9). **[2]**
**(e)** (A Level only) Find the mean and variance of X. **[2]**

**10.** X ~ B(4, 0.6).

**(a)** Write the probability distribution of X as a table, with each probability exact, and show the total is 1. **[4]**
**(b)** Find the probability that X is even. **[2]**
**(c)** (A Level only) Verify that the formulae for the mean and variance give 2.4 and 0.96. **[2]**

## Answers

**1. (a)** There are 8 equally likely outcomes. HHH and TTT give X = 0, so P(X = 0) = 2/8 = 1/4 [1]. HHT, HTT, THH, TTH give X = 1, so P(X = 1) = 4/8 = 1/2 [1]. HTH and THT give X = 2, so P(X = 2) = 1/4 [1]

| x | 0 | 1 | 2 |
|---|---|---|---|
| P(X = x) | 1/4 | 1/2 | 1/4 |

**(b)** P(X ≥ 1) = 1/2 + 1/4 = **3/4** [1]
*Examiner insight:* Listing all eight outcomes before counting shows where each probability comes from. Counting from a partial list is where outcomes tend to be missed.

**2. (a)** k(4 + 3 + 2 + 1) = 1 [1], so 10k = 1 and **k = 0.1** [1]
**(b)** P(X ≥ 2) = 0.2 + 0.1 = **0.3** [1]
**(c)** X odd means X = 1 or 3: 0.3 + 0.1 = **0.4** [1]
*Examiner insight:* A "show that" answer needs the sum written out. Stating only "10k = 1" with no list of the four terms leaves the first step unseen.

**3.** The trials (cards) are not independent [1]. Cards are not replaced, so the probability of red changes after each card [1]. For example, if the first card is red, the chance the next is red is 25/51, not 0.5 [1].
*Examiner insight:* Naming a condition is not enough. Tie it to the cards and give the changed probability, as above.

**4.** Assumption 1: each kick is saved independently of the others, so one save does not change the chance of another [1]. Assumption 2: the probability of a save is 0.25 for every kick [1]. The second may fail because different players take the kicks [1], and a strong penalty taker is less likely to be saved against than a weak one [1].
*Examiner insight:* Phrases such as "the probability is constant" earn more when you add "for every kick". Name the thing being repeated.

**5. (a)** P(X = 3) = 9C3 × 0.2³ × 0.8⁶ = 84 × 0.008 × 0.262144 [1] = **0.1762** [1]
**(b)** P(X ≥ 2) = 1 − P(X ≤ 1) = 1 − (0.8⁹ + 9 × 0.2 × 0.8⁸) [1] = 1 − (0.1342 + 0.3020) = **0.5638** [1]
*Examiner insight:* The complement of X ≥ 2 is X ≤ 1. Using X ≤ 2 is a common slip and changes the answer.

**6. (a)** **0.2735** [1]
**(b)** P(X > 12) = 1 − P(X ≤ 12) [1] = 1 − 0.8462 = **0.1538** [1]
**(c)** P(X ≤ 11) − P(X ≤ 6) [1] = 0.7323 − 0.0736 = **0.6587** [1]
*Examiner insight:* Show the cumulative values you used. Bare final answers give a marker nothing to credit if a figure is out.

**7. (a)** X ~ B(15, 0.06) [1]. Assumption: bulbs are faulty independently of one another, which is reasonable as the batch is large [1].
**(b)** P(X = 0) = 0.94¹⁵ = **0.3953** [1]
**(c)** P(X ≤ 1) = **0.7738** [1]
**(d)** P(X > 2) = 1 − P(X ≤ 2) [1] = 1 − 0.9429 = **0.0571** [1]
*Examiner insight:* Saying the batch is large gives the reason independence is acceptable. Sampling without replacement from a small batch would not support that.

**8. (a)** μ = 60 × 0.45 = **27** [1]; σ² = 60 × 0.45 × 0.55 = **14.85** [1]
**(b)** σ = √14.85 = **3.85** [1]
**(c)** np = 20 and npq = 12, so q = 12/20 = 0.6 [1], p = 0.4 [1], n = 20/0.4 = **50**, **p = 0.4** [1]
*Examiner insight:* If asked for standard deviation, take the square root of npq. Dividing the variance by the mean gives q at once and shortens the algebra.

**9. (a)** X ~ B(40, 0.15) [1]. Vouchers may not be independent, for example if the packets come from one production run where the vouchers were inserted in blocks [1].
**(b)** P(X = 5) = 40C5 × 0.15⁵ × 0.85³⁵ = 658008 × 0.15⁵ × 0.85³⁵ [1] = **0.1692** [1]
**(c)** P(X ≥ 8) = 1 − P(X ≤ 7) [1] = 1 − 0.7559 = **0.2441** [1]
**(d)** P(X ≤ 9) − P(X ≤ 3) [1] = 0.9328 − 0.1302 = **0.8026** [1]
**(e)** Mean = 40 × 0.15 = **6** [1]; variance = 40 × 0.15 × 0.85 = **5.1** [1]
*Examiner insight:* For P(X ≥ 8) the cut-off value is 7, not 8. A short line showing the conversion to a cumulative probability makes that step visible.

**10. (a)** P(X = 0) = 0.4⁴ = 0.0256 [1]; P(X = 1) = 4 × 0.6 × 0.4³ = 0.1536 [1]; P(X = 2) = 6 × 0.36 × 0.16 = 0.3456, and P(X = 3) = 4 × 0.216 × 0.4 = 0.3456 [1]; P(X = 4) = 0.6⁴ = 0.1296, and the total is 0.0256 + 0.1536 + 0.3456 + 0.3456 + 0.1296 = 1 [1]

| x | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| P(X = x) | 0.0256 | 0.1536 | 0.3456 | 0.3456 | 0.1296 |

**(b)** P(X even) = 0.0256 + 0.3456 + 0.1296 [1] = **0.5008** [1]
**(c)** μ = 4 × 0.6 = **2.4** [1]; σ² = 4 × 0.6 × 0.4 = **0.96** [1]
*Examiner insight:* The binomial coefficients for 4 trials are 1, 4, 6, 4, 1. Writing them next to each term makes it easier to find an arithmetic slip.

## Where marks are usually lost

- Not using the total of 1 to find an unknown, or not checking the sum at the end.
- Reading X ≥ r as 1 − P(X ≤ r) rather than 1 − P(X ≤ r − 1).
- Stating the conditions without applying them to the scenario in the question.
- Writing an assumption such as "p is constant" without saying what the trials are.
- Using a binomial model for draws without replacement from a small group.
- Rounding the individual terms heavily before adding them.
- Giving npq when the standard deviation is asked for.
- Putting q where p belongs when the question gives a failure probability.

## Next steps

- Recap with the [revision notes](/resources/ocr-a-level-mathematics-discrete-random-variables-and-the-binomial-distribution-revision-notes/) or relearn from the [study guide](/resources/ocr-a-level-mathematics-discrete-random-variables-and-the-binomial-distribution/).
- Tick off 2.04a to 2.04d on the [checklist](/checklists/ocr/a-level/mathematics/) and see the [course hub](/boards/ocr/a-level/mathematics/).
- Take one of the [free 10-minute diagnostics](/diagnostics/).
- Wider practice: [Statistics practice](/resources/ocr-a-level-mathematics-statistics-practice/).
- [Book a free trial class](/trial/).

## Official syllabus

OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR: sections 2.04a to 2.04d.
