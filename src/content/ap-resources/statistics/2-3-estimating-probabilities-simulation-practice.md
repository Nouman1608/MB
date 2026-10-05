---
resourceId: "mb-ap-stats-2.3-practice"
title: "Estimating Probabilities Using Simulation: Practice Questions (Statistics 2.3)"
description: "Seven original Marlbridge practice questions on outcomes and events, assigning random digits, carrying out simulations and the law of large numbers, with worked solutions and suggested rubrics."
course: "statistics"
unit: 2
topics: ["2.3"]
resourceType: "practice-questions"
prerequisites:
  - "Calculating a relative frequency"
prerequisiteResources: ["mb-ap-stats-2.3-study-guide"]
learningObjectives:
  - "Distinguish trials, outcomes and events in context"
  - "Assign random digits or random integers to outcomes with the correct probabilities"
  - "Carry out a simulation, with or without replacement, and estimate a probability from the results"
  - "Explain the law of large numbers and reject the idea that an outcome is 'due'"
skills: ["3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "A random integer generator is useful for checking. Give estimated probabilities to 3 decimal places unless told otherwise."
related: ["mb-ap-stats-2.3-study-guide", "mb-ap-stats-2.3-revision-notes", "mb-ap-stats-2.3-checklist"]
next: "mb-ap-stats-2.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every simulation answer states the digit assignment, one trial, the count and the total."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional, and the lines of random digits and the simulation results were created for this page. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: read random digits from left to right and ignore the spaces; trials are independent unless the question says otherwise; give estimated probabilities to 3 decimal places unless stated.

## Question 1 (multiple choice · foundation)

A fair spinner is divided into 8 equal sectors numbered 1 to 8. It is spun once. Which of these is an **event that contains more than one outcome**?

- (A) The spinner lands on 5.
- (B) The spinner lands on an even number.
- (C) The spinner is spun once.
- (D) The probability that the spinner lands on 3.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** "Lands on an even number" is a collection of the outcomes 2, 4, 6 and 8, so it is an event made of four outcomes.

- (A) is a single outcome. It can be treated as an event, but that event contains only one outcome.
- (C) describes the trial (one repetition of the random process), not a result.
- (D) is a number describing how likely an event is, not an event itself.
</details>

## Question 2 (multiple choice · core)

A fictional archer hits the centre of the target on 35% of her shots. Which assignment of random digits correctly simulates **one shot**?

- (A) One digit: 0 to 3 = hit, 4 to 9 = miss.
- (B) Two digits: 00 to 34 = hit, 35 to 99 = miss.
- (C) Two digits: 00 to 35 = hit, 36 to 99 = miss.
- (D) One digit: 3 and 5 = hit, all other digits = miss.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** There are 100 pairs from 00 to 99. The pairs 00 to 34 are 35 pairs, so P(hit) = 35/100 = 0.35.

- (A) gives 4 of 10 digits, a probability of 0.4.
- (C) gives 36 pairs (00 to 35 includes both ends), a probability of 0.36.
- (D) reads "35%" as the digits 3 and 5, which gives 2 of 10 digits, a probability of 0.2.
</details>

## Question 3 (multiple choice · core)

A fair spinner has 4 equal sectors, one of them labelled A, so P(A) = 0.25 on each spin. Which statement is correct?

- (A) In every 4 spins, the spinner lands on A exactly once.
- (B) After 6 spins in a row without A, the next spin is more likely than usual to land on A.
- (C) Over a very large number of spins, the proportion of spins that land on A will be close to 0.25.
- (D) Over a very large number of spins, the number of A results will be within 1 of one quarter of the number of spins.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** This is the law of large numbers: with independent trials, the relative frequency of A settles close to 0.25 in the long run.

- (A) treats probability as a short-run guarantee. Four spins can easily give 0, 2 or more A results.
- (B) is the "law of averages" mistake. Spins are independent, so P(A) on the next spin is still 0.25.
- (D) confuses the **proportion** with the **count**. The proportion gets close to 0.25, but the count can still differ from one quarter of the spins by more than 1 (for example, 2,540 A results in 10,000 spins has proportion 0.254 but is 40 away from 2,500).
</details>

## Question 4 (calculation · core)

A fictional bakery's festival special sells out on 60% of days, independently from day to day. The festival lasts 3 days. Use the random digits below to carry out **15 trials** and estimate the probability that the special sells out on **all 3 days**. Use 0 to 5 = sells out and 6 to 9 = does not sell out.

**72985 65929 81428 25227 60318 39165 03608 42359 79074**

<details>
<summary>Worked solution</summary>

1. **Assignment check:** 0 to 5 is 6 of the 10 digits, so P(sells out) = 0.6. Repeats are allowed, because each day is a separate random event.
2. **One trial:** read 3 digits (Friday, Saturday, Sunday). Success if all three digits are 0 to 5.
3. **Trials** (groups of three): 729, 856, 592, 981, 428, **252**, 276, **031**, 839, 165, 036, 084, **235**, 979, 074.
4. Successes: 252, 031 and 235, so **3 of 15 trials**.
5. **Estimate:** 3 ÷ 15 = **0.200**. About 20% of 3-day festivals would have the special sell out every day.

Suggested mark points (3): 1 for correct groups of three with the success rule applied; 1 for the count and total (3 out of 15); 1 for the estimate 0.200 with a sentence in context. A common slip is to mark 165 or 036 as successes: each contains a 6, which means "does not sell out" on that day.
</details>

## Question 5 (constructed response · core)

A fictional youth orchestra has 12 violinists, 5 of whom are in their first year. The conductor chooses 3 different violinists at random to play a trio.

(a) Describe how to use a random integer generator to carry out one trial of a simulation to estimate the probability that **at least two** of the three are first-years.
(b) A generator produced these integers from 1 to 12: **4, 10, 7, 4, 10, 10, 5, 1, 3, 4**. Use them, in order, to carry out 3 trials. Record the result of each.
(c) A computer ran 200 trials. The numbers of first-years in the trio were:

| First-years in trio | 0 | 1 | 2 | 3 | Total |
|---|---|---|---|---|---|
| Number of trials | 33 | 100 | 62 | 5 | 200 |

Estimate the probability that at least two of the three are first-years, and interpret it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Label the violinists 1 to 12, with 1 to 5 = first-years and 6 to 12 = not first-years. Generate random integers from 1 to 12 and keep the first 3 **different** values; ignore a repeat, because a violinist cannot be chosen twice. Record how many of the 3 values are from 1 to 5. The trial is a success if that number is 2 or 3.

**(b)**
- Trial 1: 4, 10, 7. First-years: 4 only, so **1** (not a success).
- Trial 2: 4, 10, then 10 is a repeat (skip), then 5. Trio 4, 10, 5. First-years: 4 and 5, so **2** (success).
- Trial 3: 1, 3, 4. First-years: all three, so **3** (success).

Note that 4 appears in all three trials. That is allowed: each trial starts with all 12 violinists.

**(c)** Trials with at least two first-years: 62 + 5 = 67. Estimate = 67 ÷ 200 = **0.335**. If the conductor chose a trio at random many times, about 33.5% of the trios would include at least two first-years.

| Point | What earns it |
|---|---|
| 1 | Labels 1 to 12 with 1 to 5 as first-years **and** states that repeats within a trial are ignored |
| 1 | States what is recorded and when a trial counts as a success (2 or 3 first-years) |
| 1 | All three trials in (b) correct, including skipping the repeated 10 |
| 1 | Estimate 67/200 = 0.335 with an interpretation in context |

A design using random digits (pairs 01 to 12, ignoring 00 and 13 to 99 and repeats) is also correct in (a).
</details>

## Question 6 (constructed response · core)

In a fictional quiz game, each of 5 questions has 4 options, and exactly one option is correct. A contestant guesses every answer at random.

(a) Describe how to simulate one contestant's game using random integers.
(b) A computer simulated 500 games. The numbers of correct answers were:

| Correct answers | 0 | 1 | 2 | 3 | 4 | 5 | Total |
|---|---|---|---|---|---|---|---|
| Number of games | 126 | 190 | 136 | 45 | 3 | 0 | 500 |

Estimate the probability that a guessing contestant gets **at least 3** answers correct.
(c) Next season, 200 contestants will guess every answer. About how many of them would you expect to get at least 3 correct? Show your reasoning.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For each question, generate a random integer from 1 to 4; let 1 = correct and 2, 3, 4 = wrong, so P(correct) = 1/4. Repeats are allowed, because each question is a separate guess. One trial = 5 integers (one game). Record the number of 1s.

**(b)** Games with at least 3 correct: 45 + 3 + 0 = 48. Estimate = 48 ÷ 500 = **0.096**.

**(c)** Expected number ≈ 200 × 0.096 = 19.2, so **about 19** of the 200 guessing contestants would get at least 3 correct.

| Point | What earns it |
|---|---|
| 1 | Assignment with probability 1/4 for "correct" (integers 1 to 4, or digit pairs 00 to 24) and one trial = 5 values with repeats allowed |
| 1 | Adds the counts for 3, 4 and 5 correct (48) and divides by 500: 0.096 |
| 1 | Multiplies the estimated probability by 200 and gives about 19 contestants |

Single digits 0 to 9 cannot give 1/4 directly. A design using 0, 1 = correct and 2 to 7 = wrong, ignoring 8 and 9, is also correct (2 of the 8 digits used).
</details>

## Question 7 (explanation · stretch)

Players of a fictional online game open "mystery boxes". Each box contains a gold token with an unknown probability p, independently of other boxes. Two students try to estimate p with simulations based on the game's rules.

- Ana runs 20 trials. A gold token appears in 7 of them.
- Ben runs 2,000 trials. A gold token appears in 531 of them.

(a) Calculate each student's estimate of p. Whose estimate is more reliable? Use the law of large numbers in your answer.
(b) A player has opened 6 boxes in a row without a gold token. He says, "I'm due a gold one, so my next box is more likely to have one." Explain why he is wrong.
(c) Could Ana's estimate happen to be closer to p than Ben's? Explain briefly.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Ana: 7 ÷ 20 = **0.35**. Ben: 531 ÷ 2,000 = **0.2655**. Ben's estimate is more reliable. The law of large numbers says that, for independent trials, the relative frequency gets closer to the true probability as the number of trials increases. Ben used 100 times as many trials, so his relative frequency is much more likely to be close to p.

**(b)** The boxes are independent: what happened in the last 6 boxes does not change the chance for the next one. The probability of gold in the next box is still p. The law of large numbers is about the proportion over very many boxes, not about the next box making up for a run of bad luck.

**(c)** Yes, it is possible, because any simulation result depends on chance. But it is unlikely: with only 20 trials, the relative frequency often lands far from p, while with 2,000 trials it usually lands close.

| Point | What earns it |
|---|---|
| 1 | Both estimates correct (0.35 and 0.2655) |
| 1 | Chooses Ben **and** links more trials to a relative frequency closer to the true probability |
| 1 | Explains that independent trials mean the next box still has probability p |
| 1 | Says it is possible but unlikely, with a reason based on the number of trials |
</details>

## How did you do?

- **Q1 wrong:** re-read "Random processes, outcomes and events" in the [study guide](/advanced-course-resources/statistics/2-3-estimating-probabilities-simulation-study-guide/).
- **Q2 or Q6(a) wrong:** revisit "Assigning values" in "Designing a simulation". Count the values you assign.
- **Q3 or Q7 wrong:** revisit "The law of large numbers" and Figure 1.
- **Q4 wrong:** work through Worked example 1 again.
- **Q5 wrong:** work through Worked example 2, especially skipping repeats within a trial.
- **Q6(b) or (c) wrong:** remember: estimate = count ÷ total; expected number ≈ estimate × number of people.

Then tick off the [topic checklist](/advanced-course-resources/statistics/2-3-estimating-probabilities-simulation-checklist/).
