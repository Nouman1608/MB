---
title: "A Level Mathematics: Probability & Statistics 1 Practice Questions (Cambridge 9709 Paper 5)"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Probability & Statistics 1"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 5
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
description: "Original exam-style Probability & Statistics 1 questions with full worked answers on probability distributions, conditional probability, the geometric distribution, permutations, the normal distribution and the normal approximation to the binomial, for Cambridge AS & A Level Mathematics 9709 Paper 5."
author: "marlbridge-academic-team"
publishedDate: 2026-09-24
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Each question practises a skill tested in the June 2025 Paper 5 series. After each answer there is a tip and the real question to try next.

---

## Questions

**1.** Two coins are thrown together. The first is biased so that P(head) = 1/3; the second is fair. X is the number of heads obtained. Find the probability distribution of X. **[3]**

**2.** 60% of the residents of a town own a car. A random sample of 150 residents is chosen. Use a suitable approximation to find the probability that more than 100 of them own a car. **[5]**

**3.** A bag contains 5 green marbles and 10 yellow marbles. A marble is taken at random. If it is green it is put back; if it is yellow it is not. A second marble is then taken at random.
**(a)** Show that the probability that the second marble is yellow is 41/63.
**(b)** Find the probability that the first marble was green, given that the second marble is yellow. **[4]**

**4.** At a junction, 20% of vehicles turn left, independently of each other.
**(a)** Find the probability that the first vehicle to turn left is the 5th vehicle.
**(b)** Find the probability that the first vehicle to turn left comes before the 6th vehicle. **[4]**

**5.** The seven letters of the word BANANAS are arranged in a line.
**(a)** How many different arrangements are there?
**(b)** How many arrangements have no two As next to each other? **[5]**

**6.** The wingspans of a species of bird are normally distributed with mean 50 cm and standard deviation 4 cm. In a sample of 200 of these birds, how many would you expect to have a wingspan between 46 cm and 55 cm? **[4]**

**7.** The times taken to complete a puzzle are normally distributed with mean μ seconds and standard deviation σ seconds. 10% of people take more than 80 seconds and 25% take less than 60 seconds. Find μ and σ. **[5]**

---

## Answers

**1.** P(X = 0) = 2/3 × 1/2 = **1/3** [1]. P(X = 2) = 1/3 × 1/2 = **1/6** [1]. P(X = 1) = 1 − 1/3 − 1/6 = **1/2** [1].

*Tip:* check that your probabilities add up to 1.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 52, Question 1.

**2.** X ~ B(150, 0.6), approximated by N(90, 36), since np = 90 and npq = 36 are both large [1] [1]. "More than 100" means X ≥ 101, so use 100.5 (continuity correction) [1]. z = (100.5 − 90) ÷ 6 = 1.75 [1]. P(X > 100) ≈ 1 − Φ(1.75) = 1 − 0.9599 = **0.0401** [1].

*Tip:* write the inequality in whole numbers first, then apply the continuity correction.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 52, Question 2.

**3.** **(a)** P(G then Y) = 5/15 × 10/15 = 2/9 [1]. P(Y then Y) = 10/15 × 9/14 = 3/7. Total = 14/63 + 27/63 = **41/63** [1].
**(b)** P(first G | second Y) = (2/9) ÷ (41/63) [1] = (14/63) ÷ (41/63) = **14/41** [1].

*Tip:* the second draw depends on the first, so draw a tree diagram with different second-branch probabilities.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 52, Question 3.

**4.** **(a)** Four vehicles not turning left, then one that does: 0.8⁴ × 0.2 [1] = **0.0819** [1].
**(b)** "Before the 6th" means within the first 5: 1 − 0.8⁵ [1] = **0.672** [1].

*Tip:* the probability that the first success happens within n trials is 1 − qⁿ.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 52, Question 4.

**5.** **(a)** 7! ÷ (3! × 2!) [1] = **420** [1].
**(b)** Arrange B, N, N, S: 4! ÷ 2! = 12 ways [1]. There are 5 gaps for the 3 As: ⁵C₃ = 10 [1]. Total = 12 × 10 = **120** [1].

*Tip:* for "not together", arrange the other letters first, then place the repeated letters in the gaps.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 52, Question 6.

**6.** z-values: (46 − 50) ÷ 4 = −1 and (55 − 50) ÷ 4 = 1.25 [1]. P = Φ(1.25) − Φ(−1) = 0.8944 − 0.1587 [1] = 0.7357 [1]. Expected number = 200 × 0.7357 ≈ **147** [1].

*Tip:* standardise both limits, and give the expected number as a whole number at the end.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 52, Question 7(a).

**7.** (80 − μ) ÷ σ = 1.282 [1] and (60 − μ) ÷ σ = −0.674 [1]. Subtracting: 20 = 1.956σ [1], so **σ = 10.2** [1] and μ = 60 + 0.674 × 10.22 = **66.9** [1].

*Tip:* use the z-value for the area to the left of the point, and give it a negative sign when that area is below 0.5.

*Try the real question next:* Cambridge International AS & A Level Mathematics 9709, June 2025, Paper 52, Question 7(b).

---

## Where marks are usually lost

- No continuity correction, or one applied in the wrong direction.
- Conditional probability found as P(A and B) without dividing by P(B).
- Repeated letters not divided out in arrangements.
- z-values given the wrong sign.
