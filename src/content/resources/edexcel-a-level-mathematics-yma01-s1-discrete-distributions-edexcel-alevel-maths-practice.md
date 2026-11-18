---
title: "Edexcel International A Level Mathematics (YMA01): Discrete distributions -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S1: Statistics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 7.6
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-discrete-distributions-edexcel-alevel-maths"
description: "Twelve original Edexcel IAL Maths S1 discrete uniform distribution questions with full answers: mean, variance, stepped values, finding n and judging the model."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "The S1 unit description lists 'discrete distributions' but the content table names only 5.4 'The discrete uniform distribution', so these questions treat that statement as the subtopic; please confirm the mapping."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

These questions cover the discrete distribution in Unit S1, content statement 5.4: the discrete uniform distribution and its mean and variance, together with the linear-change rules from statement 5.3 where values go up in steps. Give exact answers where possible.

Related: [discrete distributions revision notes](/resources/edexcel-a-level-mathematics-yma01-s1-discrete-distributions-edexcel-alevel-maths-revision-notes/) and the [discrete distributions study guide](/resources/edexcel-a-level-mathematics-yma01-s1-discrete-distributions-edexcel-alevel-maths/).

---

## Section A

**1.** X has a discrete uniform distribution over 1, 2, ..., 8. Find P(X > 5), E(X) and Var(X). **[3]**

**2.** X has a discrete uniform distribution over 1, 2, ..., n, and E(X) = 9. Find n and Var(X). **[3]**

**3.** A spinner has seven sectors numbered 1 to 7. State two conditions needed for the score to be modelled by a discrete uniform distribution. **[2]**

**4.** X has a discrete uniform distribution over 1, 2, ..., n, and Var(X) = 30. Find n and P(X ≥ 15). **[3]**

## Section B

**5.** A card is drawn at random from ten cards numbered 2, 4, 6, ..., 20. X is the number on the card.

**(a)** Find E(X) and Var(X). **[3]**

**(b)** Find P(X < E(X)). **[1]**

**(c)** Find the probability that X lies within one standard deviation of its mean. **[3]**

**6.** X has a discrete uniform distribution over the values 10, 15, 20, ..., 60.

**(a)** Show that E(X) = 35 and Var(X) = 250. **[4]**

**(b)** Find P(X > 45). **[1]**

**7.** Two fair spinners are each numbered 1, 2 and 3. Both are spun, and D is the positive difference between the two scores (D = 0 if the scores are equal).

**(a)** Find the probability distribution of D, and explain why D does not have a discrete uniform distribution. **[3]**

**(b)** Find E(D) and Var(D). **[3]**

**8.** A computer selects a whole number X at random from 1 to n, each equally likely. P(X > 12) = 0.52.

**(a)** Find n. **[2]**

**(b)** Find the probability that X is a multiple of 3. **[1]**

**(c)** Find E(X) and Var(X). **[2]**

**9.** In a game, a player pays £6, rolls a fair ten-sided die numbered 1 to 10, and receives £X, where X is the score.

**(a)** Find the player's expected gain per game. **[2]**

**(b)** Find the variance of the amount received. **[1]**

**(c)** The rule is changed so that the player receives £2X. Find the entry fee that would make the game fair. **[1]**

**10.** X has a discrete uniform distribution over the integers −3, −2, ..., 3. Find E(X), Var(X) and E(X²). **[3]**

**11.** A teacher asks each of 200 students to write down a digit "at random" from 0 to 9, and models the digit as discrete uniform. The digit 7 was written 41 times.

**(a)** State the expected frequency of each digit under the model. **[1]**

**(b)** Comment on the model, giving a reason why it may not be appropriate. **[2]**

**12.** X has a discrete uniform distribution over 1, 2, 3, 4, 5, and Y = 3X − 2. Find E(Y) and Var(Y). **[3]**

---

## Answers

**1.** P(X > 5) = 3/8 [1]. E(X) = 9/2 = **4.5** [1]. Var(X) = (64 − 1)/12 = **5.25** [1].

**2.** (n + 1)/2 = 9, so **n = 17** [1]. Var(X) = (17² − 1)/12 [1] = 288/12 = **24** [1].

**3.** The sectors must be of equal size, so each number is equally likely [1], and each spin must result in exactly one of the numbers 1 to 7 [1].

**4.** (n² − 1)/12 = 30, so n² = 361 [1] and **n = 19** [1]. P(X ≥ 15) = 5/19 [1].

**5. (a)** X = 2Y, where Y is uniform on 1 to 10 [1]. E(X) = 2 × 5.5 = **11** [1]. Var(X) = 4 × 99/12 = **33** [1].

**(b)** Values below 11 are 2, 4, 6, 8, 10, so P = **1/2** [1].

**(c)** σ = √33 = 5.745, so the interval is 5.26 to 16.74 [1]. The values inside are 6, 8, 10, 12, 14, 16 [1], so the probability is 6/10 = **0.6** [1].

**6. (a)** There are 11 values [1]. X = 10 + 5(Y − 1), where Y is uniform on 1 to 11, so E(X) = 10 + 5 × 5 = 35 [1]. Var(Y) = (121 − 1)/12 = 10 [1], so Var(X) = 5² × 10 = 250 [1].

**(b)** 50, 55, 60: **3/11** [1].

**7. (a)** Of the 9 equally likely outcomes, D = 0 for 3, D = 1 for 4 and D = 2 for 2 [1]. So P(D = 0) = 3/9, P(D = 1) = 4/9, P(D = 2) = 2/9 [1]. The probabilities are not all equal, so D is not uniform [1].

**(b)** E(D) = (0 + 4 + 4)/9 = **8/9** [1]. E(D²) = (0 + 4 + 8)/9 = 4/3 [1]. Var(D) = 4/3 − 64/81 = **44/81** (0.543) [1].

**8. (a)** (n − 12)/n = 0.52 [1], so 0.48n = 12 and **n = 25** [1].

**(b)** Multiples of 3 from 1 to 25: 3, 6, ..., 24, which is 8 values: **8/25** [1].

**(c)** E(X) = 26/2 = **13** [1]. Var(X) = (625 − 1)/12 = **52** [1].

**9. (a)** E(X) = 11/2 = 5.5 [1]; expected gain = 5.5 − 6 = **−£0.50** (an expected loss of 50p) [1].

**(b)** Var(X) = 99/12 = **8.25** [1].

**(c)** E(2X) = 11, so the fair fee is **£11** [1].

**10.** E(X) = **0** by symmetry [1]. X = Y − 4 with Y uniform on 1 to 7, so Var(X) = (49 − 1)/12 = **4** [1]. E(X²) = Var(X) + [E(X)]² = **4** [1].

**11. (a)** 200 ÷ 10 = **20** [1].

**(b)** 41 is about twice the expected 20, so the data do not support the model [1]. People choosing digits tend to favour some (such as 7) and avoid others, so the digits are not equally likely [1].

**12.** E(X) = 3 and Var(X) = (25 − 1)/12 = 2 [1]. E(Y) = 3 × 3 − 2 = **7** [1]. Var(Y) = 9 × 2 = **18** [1].

---

## Where marks are usually lost

- Using 20 or 60 as n in Questions 5 and 6, instead of counting the values.
- Forgetting to square the step size when finding the variance.
- Assuming D in Question 7 is uniform because each spinner is.
- Miscounting the values in an inclusive range.
- Giving the expected gain in Question 9 as a positive amount.
