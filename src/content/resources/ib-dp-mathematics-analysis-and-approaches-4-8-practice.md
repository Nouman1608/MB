---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.8 The binomial distribution -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.8
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-8"
description: "Eleven original IB Maths AA questions on 4.8 the binomial distribution: conditions, inequalities, mean and variance, finding n and two-stage models, with answers."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

This set practises syllabus section 4.8 of IB DP Mathematics: Analysis and Approaches (SL and HL): the
binomial distribution and its mean and variance. Learn the methods first with the
[4.8 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-4-8/)
and the [4.8 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-4-8-revision-notes/).
All contexts are invented. Section A needs no technology; Section B questions marked (calculator allowed)
need a GDC. Give answers to 3 significant figures unless exact.

## Section A

**1.** X ~ B(5, 0.3). Using the binomial formula, find

**(a)** P(X = 0); **[1]**
**(b)** P(X = 2). **[2]**

**2.** X ~ B(15, 0.4). Write each probability in terms of probabilities of the form P(X ≤ r).

**(a)** P(X < 6) **[1]**
**(b)** P(X > 7) **[1]**
**(c)** P(3 < X ≤ 8) **[1]**

**3.** X ~ B(40, 0.15). Find E(X), Var(X) and the standard deviation of X. **[3]**

**4.** A binomial random variable has mean 6 and variance 4.2. Find n and p. **[3]**

**5.** Five students are chosen at random, without replacement, from a class of 12 boys and 10 girls. X is the
number of girls chosen. Explain why X does not follow a binomial distribution. **[2]**

## Section B

**6.** (calculator allowed) Each seed in a packet germinates with probability 0.85. A packet contains 20
seeds. X is the number that germinate.

**(a)** State two assumptions needed to model X with a binomial distribution. **[2]**
**(b)** Find P(X = 17). **[2]**
**(c)** Find the probability that at most 15 seeds germinate. **[2]**
**(d)** Find the probability that more than 17 seeds germinate. **[2]**

**7.** (calculator allowed) A library finds that each borrowed book is returned late with probability 0.4,
independently. On one day, 15 books are borrowed.

**(a)** Find the probability that exactly 6 are returned late. **[2]**
**(b)** Find the probability that fewer than 5 are returned late. **[2]**
**(c)** Find the probability that at least 8 are returned late. **[2]**
**(d)** Find the probability that between 4 and 8 books inclusive are returned late. **[2]**

**8.** (calculator allowed) A game is won with probability 0.2 each time it is played, independently. Find
the least number of games that must be played for the probability of winning at least once to exceed
0.99. **[4]**

**9.** (calculator allowed) Eggs are packed in boxes of 6. Each egg is cracked with probability 0.1,
independently. A box is rejected if it contains at least one cracked egg.

**(a)** Find the probability that a box is rejected. **[2]**
**(b)** Eight boxes are checked. Find the probability that exactly 3 are rejected. **[3]**

**10.** Three fair dice are rolled. X is the number of sixes.

**(a)** Find the probability distribution of X. **[3]**
**(b)** Find E(X). **[1]**

**11.** A player pays $1 to roll the three dice of question 10 and receives $2 for each six. Show that the
game is fair. **[2]**

## Answers

**1. (a)** 0.7⁵ = 0.168 (0.16807) [1].
**(b)** C(5, 2)(0.3)²(0.7)³ [1] = 10 × 0.09 × 0.343 = 0.309 (0.3087) [1]. **[3]**

**2. (a)** P(X ≤ 5) [1].
**(b)** 1 − P(X ≤ 7) [1].
**(c)** P(X ≤ 8) − P(X ≤ 3) [1]. **[3]**

**3.** E(X) = 40 × 0.15 = 6 [1]; Var(X) = 6 × 0.85 = 5.1 [1]; standard deviation = √5.1 ≈ 2.26 [1]. **[3]**

**4.** 1 − p = 4.2/6 = 0.7 [1], so p = 0.3 [1] and n = 6/0.3 = 20 [1]. **[3]**

**5.** After each student is chosen, the proportion of girls left changes [1], so the probability of choosing
a girl is not constant and the choices are not independent [1]. **[2]**

**6. (a)** Each seed germinates independently of the others [1]; every seed has the same probability, 0.85,
of germinating [1].
**(b)** X ~ B(20, 0.85); P(X = 17) [1] = 0.243 [1].
**(c)** P(X ≤ 15) [1] = 0.170 [1].
**(d)** P(X ≥ 18) = 1 − P(X ≤ 17) [1] = 0.405 [1]. **[8]**

**7. (a)** X ~ B(15, 0.4); P(X = 6) [1] = 0.207 [1].
**(b)** P(X ≤ 4) [1] = 0.217 [1].
**(c)** 1 − P(X ≤ 7) [1] = 0.213 [1].
**(d)** P(X ≤ 8) − P(X ≤ 3) [1] = 0.814 [1]. **[8]**

**8.** 1 − 0.8^n > 0.99 [1], so 0.8^n < 0.01 [1]. n > ln 0.01/ln 0.8 ≈ 20.6 [1], so the least number is 21
[1]. **[4]**

**9. (a)** 1 − 0.9⁶ [1] = 0.469 (0.468559) [1].
**(b)** R ~ B(8, 0.468559) [1]; P(R = 3) [1] = 0.244 [1]. **[5]**

**10. (a)** X ~ B(3, 1/6) [1]: P(X = 0) = 125/216, P(X = 1) = 75/216, P(X = 2) = 15/216,
P(X = 3) = 1/216 [2].
**(b)** E(X) = 3 × 1/6 = 0.5 [1]. **[4]**

**11.** The gains are −1, 1, 3 and 5 dollars for 0, 1, 2 and 3 sixes, with probabilities 125/216, 75/216,
15/216 and 1/216 [1]. Expected gain = (−125 + 75 + 45 + 5)/216 = 0, so the game is fair [1]. **[2]**

*General marking note:* in Section B, the probability statement (for example P(X ≥ 18) = 1 − P(X ≤ 17))
earns the method mark even if the GDC value is mis-keyed, so write it every time.

## Where marks are usually lost

- Using P(X ≤ 8) for "at least 8" in question 7(c).
- Writing assumptions in question 6(a) without mentioning seeds or germination.
- Rounding the stage 1 probability before stage 2 in question 9(b).
- Leaving the inequality the wrong way round after dividing by ln 0.8 in question 8.
- Forgetting the stake when finding the gain in question 11.

Related practice for the whole unit: [probability, discrete and continuous distributions, binomial and normal practice questions](/resources/ib-dp-mathematics-aa-probability-distributions-practice/).
