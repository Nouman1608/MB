---
title: "Cambridge International AS & A Level Mathematics (9709): Discrete Random Variables -- Exam-Style Questions with Marks and Mark Scheme (Draft)"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 5 – Probability & Statistics 1"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 5.41
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "discrete-random-variables-cambridge-alevel-maths"
description: "Draft: ten original 9709 discrete random variable questions (tables, binomial, geometric) with the mark for each part shown and a mark scheme with M, A and B marks and full working."
author: "marlbridge-academic-team"
reviewStatus: "draft"
reviewNote: "2026-11-26: DRAFT, hidden. Not reviewed; no reviewer credited (the owner has approved review by the subject teacher but has not named one). Questions are original. Every answer was recomputed by script (reports/owner-decisions-2/question-sets-derivations.py). A maths teacher must complete the 'What the teacher must confirm' list before this set can be marked reviewed."
publishedDate: 2026-11-26
featured: false
---
> **DRAFT for teacher review. Not for publication.** No teacher has reviewed this set and no reviewer is credited. The page is hidden from the site until a named teacher completes the list below.
>
> **What the teacher must confirm**
>
> - Every answer, recomputed independently (not from the drafter's script).
> - That the marks per part (M, A, B) match what Cambridge would award for each step. The M, A, B and "ft" conventions come from the drafter's knowledge of Cambridge mark schemes; the 9709 syllabus itself does not define them.
> - That each question sits in syllabus section 5.4 (Discrete random variables) of the 2026-2027 syllabus, and that question 6 (finding the smallest n by logarithms or trial) is acceptable at Paper 5 level.
> - That the plan's wording "probability distributions and hypothesis tests" is intended to be covered by this set alone. Hypothesis tests are a Paper 6 topic and are not in this set; the normal distribution (5.5) has its own existing page.
> - That no wording is close to a past-paper question.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available free from your board.

Related: [discrete random variables revision notes](/resources/cambridge-a-level-mathematics-9709-discrete-random-variables-revision-notes/)

> **How to use this set:** the mark for each part is shown in square brackets. Total: 46 marks. Formulae for B(n, p) and Geo(p) are in the list of formulae (MF19) supplied in the examination; show all working. Give non-exact answers to 3 significant figures. The command words (Calculate, Determine, Explain, State, Show that) follow the Cambridge command-word list for 9709; "Find" is used as it is in the examination papers. Content: syllabus 5.4 Discrete random variables (Paper 5).

---

## Questions

**1.** The discrete random variable X takes the values 2, 4, 6 and 8 with probabilities 0.3, 0.2, p and 0.1 respectively.

**(a)** Find the value of p. **[1]**

**(b)** Find E(X). **[2]**

**(c)** Find Var(X). **[3]**

**2.** The random variable X has the distribution B(10, 0.35).

**(a)** Find P(X = 4). **[2]**

**(b)** Find P(X ≥ 3). **[3]**

**3.** A gardener plants 12 seeds. Each seed independently has a probability of 0.8 of germinating. The number of seeds that germinate is X.

**(a)** State two conditions that must hold for X to be modelled by a binomial distribution. **[2]**

**(b)** Calculate the probability that exactly 10 seeds germinate. **[2]**

**(c)** Calculate the probability that at least 11 seeds germinate. **[2]**

**4.** X ~ B(40, 0.15). Find E(X) and Var(X). **[2]**

**5.** A quality inspector tests samples one at a time. Each sample is independently faulty with probability 0.2. The random variable X is the number of samples tested up to and including the first faulty one, so X ~ Geo(0.2).

**(a)** Find P(X = 5). **[2]**

**(b)** State E(X). **[1]**

**(c)** Find P(X > 3). **[2]**

**6.** The random variable X ~ B(n, 0.2). Determine the smallest value of n for which P(X ≥ 1) > 0.95. **[3]**

**7.** The random variable X has the distribution shown, where a and b are constants.

| x | 1 | 2 | 3 |
|---|---|---|---|
| P(X = x) | a | b | 0.3 |

Given that E(X) = 2.0, find a and b. **[4]**

**8.** A fair four-sided die has faces numbered 1, 2, 3 and 4. It is thrown twice. The random variable X is the positive difference between the two scores (0 if they are equal).

**(a)** Show that P(X = 0) = 0.25 and draw up the probability distribution table of X. **[3]**

**(b)** Find E(X). **[2]**

**(c)** Find Var(X). **[3]**

**9.** A bag holds 5 red and 5 blue counters. Four counters are taken from the bag one at a time, without replacement. The random variable X is the number of red counters taken. Explain why X does not have a binomial distribution. **[2]**

**10.** In a game a player pays $3 and throws a fair six-sided die. A score of 6 wins $10 (the $3 is not returned). A score of 4 or 5 returns the $3. A score of 1, 2 or 3 loses the $3. Let Y dollars be the player's net gain.

**(a)** Draw up the probability distribution table of Y. **[2]**

**(b)** Calculate E(Y) and state what it means for a player who plays many times. **[3]**

---

## Answers

Marking key: **M** = method mark, **A** = accuracy mark (depends on the preceding M mark unless stated), **B** = independent mark. "ft" = follow through. Non-exact answers are to 3 significant figures; an exact value is also accepted.

**1.**

**(a)** p = 1 − (0.3 + 0.2 + 0.1) = **0.4** [B1].

**(b)** E(X) = 2(0.3) + 4(0.2) + 6(0.4) + 8(0.1) [M1]; = **4.6** [A1].

**(c)** E(X²) = 4(0.3) + 16(0.2) + 36(0.4) + 64(0.1) = 25.2 [M1]; Var(X) = E(X²) − [E(X)]² = 25.2 − 4.6² [M1]; = **4.04** [A1].

**2.**

**(a)** P(X = 4) = ¹⁰C₄ (0.35)⁴ (0.65)⁶ [M1]; = **0.238** [A1] (0.2377…).

**(b)** P(X ≥ 3) = 1 − P(X ≤ 2) [M1]; P(X ≤ 2) = (0.65)¹⁰ + ¹⁰C₁(0.35)(0.65)⁹ + ¹⁰C₂(0.35)²(0.65)⁸ = 0.2616… [M1]; P(X ≥ 3) = **0.738** [A1].

**3.**

**(a)** Any two of: a fixed number of trials (12 seeds) [B1]; each trial has two outcomes, germinates or does not [B1]; the probability of germinating is the same (0.8) for each seed [B1]; the seeds are independent of one another [B1]. Maximum 2 marks.

**(b)** P(X = 10) = ¹²C₁₀ (0.8)¹⁰ (0.2)² [M1]; = **0.283** [A1] (0.2834…).

**(c)** P(X ≥ 11) = P(X = 11) + P(X = 12) = 12(0.8)¹¹(0.2) + (0.8)¹² [M1]; = **0.275** [A1] (0.2748…).

**4.** E(X) = np = 40 × 0.15 = **6** [B1]; Var(X) = np(1 − p) = 40 × 0.15 × 0.85 = **5.1** [B1].

**5.**

**(a)** P(X = 5) = (0.8)⁴ × 0.2 [M1]; = **0.0819** [A1] (0.08192).

**(b)** E(X) = 1 ÷ 0.2 = **5** [1].

**(c)** P(X > 3) = (0.8)³ [M1] = **0.512** [A1]. (Equivalent: 1 − P(X = 1) − P(X = 2) − P(X = 3).)

**6.** P(X ≥ 1) = 1 − 0.8ⁿ > 0.95, so 0.8ⁿ < 0.05 [M1]; solve by logarithms (n > ln 0.05 ÷ ln 0.8 = 13.4…) or by trial: 0.8¹³ = 0.055… is too large and 0.8¹⁴ = 0.044… is small enough [M1]; **n = 14** [A1]. (Answers using "n > 13.4" with no conclusion that n is a whole number lose the A mark.)

**7.** Probabilities sum to 1: a + b + 0.3 = 1, so a + b = 0.7 [B1]; E(X) = a + 2b + 3(0.3) = 2.0, so a + 2b = 1.1 [M1]; subtract: b = 0.4 [M1]; **a = 0.3, b = 0.4** [A1].

**8.**

**(a)** There are 16 equally likely outcomes; X = 0 for (1,1), (2,2), (3,3), (4,4), so P(X = 0) = 4/16 = 0.25 [B1]. Counting the remaining outcomes by difference [M1] gives the table [A1]:

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P(X = x) | 0.25 | 0.375 | 0.25 | 0.125 |

**(b)** E(X) = 0(0.25) + 1(0.375) + 2(0.25) + 3(0.125) [M1]; = **1.25** [A1].

**(c)** E(X²) = 0 + 0.375 + 4(0.25) + 9(0.125) = 2.5 [M1]; Var(X) = 2.5 − 1.25² [M1]; = **0.9375** (0.938 to 3 significant figures) [A1].

**9.** The counters are taken without replacement [B1], so the trials are not independent (the probability that the next counter is red changes after each draw, so it is not a constant 0.5) [B1].

**10.**

**(a)** Y takes the values 7, 0 and −3 [B1] with probabilities 1/6, 2/6 and 3/6 respectively [B1].

| y | 7 | 0 | −3 |
|---|---|---|---|
| P(Y = y) | 1/6 | 1/3 | 1/2 |

**(b)** E(Y) = 7(1/6) + 0(1/3) − 3(1/2) [M1]; = 7/6 − 9/6 = **−1/3 ≈ −$0.333** [A1]; on average the player **loses about 33 cents per game** in the long run [B1].

---

## Where marks are usually lost

- Using Var(X) = E(X²) − E(X) rather than subtracting the square of the mean.
- Mixing up P(X ≥ 3), P(X > 3) and P(X ≤ 3); write the complement out before calculating.
- In "state the conditions" questions, naming "random" or "fair" instead of independence and a constant probability.
- For a geometric distribution, using p^(r−1)(1 − p) instead of (1 − p)^(r−1) p.
- Stopping at n > 13.4 instead of giving the whole number 14.
- Reading "net gain" as the prize alone and forgetting the stake.
