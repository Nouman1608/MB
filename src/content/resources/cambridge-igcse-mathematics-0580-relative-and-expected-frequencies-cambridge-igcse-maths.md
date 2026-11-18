---
title: "Cambridge IGCSE Mathematics (0580): Relative and expected frequencies"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 8 – Probability"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 8.2
syllabusTopics:
  - qualification: "igcse"
    topic: "probability-cambridge-igcse-maths"
    subtopic: "relative-and-expected-frequencies-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic 8.2: relative frequency as an estimate, testing for bias, expected frequencies, and the meaning of fair, bias and random."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **8.2 Relative and expected frequencies** in Topic 8 Probability of the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. The Core (C8.2) and Extended (E8.2) statements are the same, so everything here is for **both tiers**.

The broader [probability and expected frequency study guide](/resources/igcse-mathematics-0580-probability-and-expected-frequency/) introduces relative frequency with a spinner experiment. This page goes further: comparing several people's results, deciding whether a dice or spinner is biased, expected frequencies from probability tables and samples, and working backwards. Revise with the [relative and expected frequencies revision notes](/resources/cambridge-igcse-mathematics-0580-relative-and-expected-frequencies-cambridge-igcse-maths-revision-notes/) and practise with the [relative and expected frequencies practice questions](/resources/cambridge-igcse-mathematics-0580-relative-and-expected-frequencies-cambridge-igcse-maths-practice/).

## What subtopic 8.2 asks for

| Statement | What you must be able to do | Syllabus note |
|---|---|---|
| 8.2.1 | Understand relative frequency as an estimate of probability | e.g. use results of experiments with a spinner to estimate the probability of a given outcome |
| 8.2.2 | Calculate expected frequencies | e.g. use probability to estimate an expected value from a population; includes understanding what is meant by fair, bias and random |

## Fair, bias and random

| Word | Meaning | Example |
|---|---|---|
| Fair | Every outcome is equally likely | A fair dice: each score has probability 1/6 |
| Biased | Some outcomes are more likely than others | A weighted coin that lands heads more often |
| Random | Chosen so that every item has an equal chance, with no pattern or influence | Picking a raffle ticket without looking |

"Biased" describes the object or method, not one result. A fair dice can show three sixes in a row; that alone does not make it biased.

## Relative frequency

```
relative frequency = number of times the outcome happens ÷ total number of trials
```

Relative frequency is used when there is no theoretical probability to work out: a drawing pin landing point up, a biased spinner, a machine producing a faulty item. It is an **estimate** of the probability, and:

- with few trials it can be far from the true probability;
- as the number of trials increases, it tends to settle down near the true probability;
- so the estimate from the **largest number of trials** is the most reliable.

### Worked example 1: comparing results (calculator)

Three students drop a drawing pin and record how often it lands point up.

| Student | Drops | Point up |
|---|---|---|
| Asha | 20 | 13 |
| Ben | 50 | 29 |
| Chen | 150 | 87 |

(a) Work out each student's relative frequency. (b) Whose result gives the best estimate? (c) Use all the results to give a single estimate.

```
(a) Asha 13/20 = 0.65    Ben 29/50 = 0.58    Chen 87/150 = 0.58

(b) Chen's, because it is based on the most trials.

(c) Combine:  (13 + 29 + 87) ÷ (20 + 50 + 150) = 129/220 = 0.586... ≈ 0.59
```

Combining the data gives an even larger number of trials, so (c) is better still. Do **not** average the three relative frequencies: that gives Asha's 20 drops the same weight as Chen's 150.

## Expected frequency

If an event has probability p and there are n trials, the number of times you **expect** it to happen is

```
expected frequency = p × n
```

It is a long-run average, not a promise: in 60 rolls of a fair dice you expect 10 sixes, but you might get 7 or 13. An expected frequency can be a decimal, such as 0.3 × 25 = 7.5; give it as it is unless the question asks you to round.

### Worked example 2: from a probability table (non-calculator)

A biased spinner has these probabilities.

| Colour | Red | Green | Blue | Yellow |
|---|---|---|---|---|
| Probability | 0.35 | 0.25 | 0.3 | 0.1 |

It is spun 80 times. Find the expected number of (a) blues, (b) spins that are not red.

```
(a) 0.3 × 80 = 24
(b) P(not red) = 1 − 0.35 = 0.65;  0.65 × 80 = 52
```

### Worked example 3: from a population (calculator)

In a survey of 250 randomly chosen drivers, 40 were seen using a phone. Estimate how many of the 1800 drivers passing a junction in a day use a phone.

```
relative frequency = 40/250 = 0.16
expected number = 0.16 × 1800 = 288
```

The estimate depends on the survey being **random** and representative. If the 250 drivers were all observed at one time of day, the estimate could be poor.

### Worked example 4: working backwards (non-calculator)

A fair dice is rolled a number of times and the expected number of sixes is 45. How many times is it rolled?

```
(1/6) × n = 45
n = 45 × 6 = 270
```

## Is it biased? Using expected frequency as a test

Compare the observed frequencies with the frequencies you would expect if the object were fair.

### Worked example 5: two dice (calculator)

Dice A is rolled 300 times with these results.

| Score | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Frequency | 48 | 52 | 45 | 51 | 49 | 55 |

Dice B is rolled 300 times and shows a six 92 times. Comment on whether each dice is biased.

```
If fair: expected frequency of each score = 300 × 1/6 = 50

Dice A: every frequency is close to 50 (from 45 to 55).
        There is no evidence of bias.

Dice B: relative frequency of six = 92/300 = 0.306...
        This is much greater than 1/6 = 0.166...
        92 sixes is far more than the expected 50.
        This suggests dice B is biased towards six.
```

Two cautions: results always vary a little, so small differences are not evidence of bias; and with very few trials you cannot draw a firm conclusion either way.

## Choosing your words

Questions on 8.2 often ask you to **explain** or **give a reason**. Short, specific statements earn the mark:

- "Chen's estimate is more reliable because he did more trials."
- "The dice is probably biased because 92 sixes is much more than the expected 50."
- "Expected frequency is 21, but the actual number may differ because the results are random."

Vague answers such as "it is more accurate" or "the dice is unfair" without a reason with numbers usually do not score.

## Common mistakes

- Averaging relative frequencies from different sample sizes instead of combining the counts.
- Choosing the estimate closest to a "nice" value instead of the one from the most trials.
- Claiming an expected frequency is what **will** happen.
- Rounding an expected frequency to a whole number when the question did not ask.
- Saying a dice is biased because of a small difference from the expected value.
- Dividing instead of multiplying: expected frequency is p × n, not n ÷ p.

## Exam technique

- **Estimate**: show relative frequency, then p × n.
- **Explain** or **give a reason**: refer to the number of trials, or compare an observed and an expected value, with numbers.
- **Calculate** on Paper 3 or 4: keep the relative frequency unrounded before multiplying.

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Subject content, Topic 8 Probability, C8.2 and E8.2 Relative and expected frequencies. See also the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).
