---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.5 Concepts of trial, outcome, sample space, event and probability -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.5
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-5"
description: "Revision notes for IB Maths AA 4.5: sample spaces, equally likely outcomes, P(A) = n(A)/n(U), complements, relative frequency, expected numbers and a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section **4.5** of IB DP Mathematics: Analysis and Approaches (first
assessment 2021, SL and HL): the basic language and rules of probability. Explanations and worked examples
are in the
[4.5 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-5/).

## Core recall

```
P(A) = n(A) / n(U)                  (equally likely outcomes only)
P(A′) = 1 − P(A)
0 ≤ P(A) ≤ 1;  probabilities of all outcomes in U sum to 1
Relative frequency = occurrences / trials        (estimates P)
Expected number of occurrences = n × p
```

- A **trial** is one run of the experiment; an **outcome** is one result; the **sample space U** is the set
  of all outcomes; an **event** is a set of outcomes.
- P(A) = 0: impossible. P(A) = 1: certain.

## Choosing a sample space representation

| Experiment | Best representation |
|---|---|
| One stage, few outcomes | List |
| Two stages (two dice, coin and die, two spinners) | Grid or table |
| Three coins, three children | Systematic list (8 outcomes) |
| Numbers with properties (multiples, primes) | Set notation |

Count in a sample space whose outcomes are **equally likely**. Totals, products and "number of heads" are
usually **not** equally likely.

## Theoretical versus experimental probability

| | Theoretical | Experimental (relative frequency) |
|---|---|---|
| Source | Symmetry and counting | Repeated trials |
| Needs | Equally likely outcomes | Data from an experiment |
| Exact? | Yes, under its assumptions | No: an estimate that improves with more trials |

## Expected number

- Long-run average count, n × p.
- Need not be a whole number: 100 rolls of a die, expected sixes 16.7 (3 s.f.).
- Different from "what will happen": actual counts vary around it.

## Key terms

| Term | Meaning |
|---|---|
| Trial | One performance of an experiment |
| Outcome | A single possible result |
| Sample space (U) | The set of all possible outcomes |
| Event | A subset of the sample space |
| Equally likely | Having the same probability |
| Complement A′ | All outcomes in U not in A |
| Relative frequency | Proportion of trials in which an event occurred |
| Expected number | n × p for n trials with probability p |

## Exam traps

- **Unequal outcomes counted as equal.** Two dice: P(total 7) = 6/36, not 1/11.
- **Order matters in a grid.** (1, 3) and (3, 1) are different cells.
- **Missing outcomes.** List systematically.
- **"At least one".** Use 1 − P(none).
- **Relative frequency is not the probability.** It is an estimate.
- **Expected numbers rounded unnecessarily.**
- **Mixing formats.** Keep fractions exact on Paper 1; decimals to 3 significant figures otherwise.

## Worked reminders

**A grid.** Two fair four-sided spinners, each numbered 1 to 4, are spun and the scores added. The grid has
16 equally likely cells. A total of 5 appears in 4 cells, (1, 4), (2, 3), (3, 2), (4, 1), so
P(total = 5) = 4/16 = 1/4. A total of 2 appears once, so P(total = 2) = 1/16: the seven possible totals are
not equally likely.

**Relative frequency to expectation.** A drawing pin lands point up 132 times in 200 drops: estimated
P(point up) = 0.66, and the expected number in 750 drops is 750 × 0.66 = 495.

**Complement.** For three fair coins, P(at least one head) = 1 − P(TTT) = 1 − 1/8 = 7/8.

## Count directly or use the complement?

| The event | Quicker route |
|---|---|
| Few outcomes in A | Count A directly |
| Many outcomes in A, few in A′ | 1 − P(A′) |
| "At least one" | 1 − P(none) |
| "Not ..." | 1 − P(...) |

Expected number versus probability: a probability is between 0 and 1; an expected number is n × p and can be
any non-negative value up to n.

## Self-test

1. Define "sample space".
2. A fair die is rolled. List the event "a number greater than 4" and find its probability.
3. Two fair dice are rolled. Find n(U).
4. Explain why P(total = 2) ≠ P(total = 7) for two fair dice.
5. Find P(at least one six) when two fair dice are rolled.
6. P(A) = 0.27. Find P(A′).
7. A coin is spun 400 times and lands heads 228 times. Estimate P(heads).
8. Using question 7, find the expected number of heads in 1000 spins.
9. Three fair coins are tossed. Find P(exactly one tail).
10. A letter is chosen at random from the word PROBABILITY. Find P(B).
11. Expected number of fives when a fair die is rolled 50 times?
12. Why does relative frequency give a better estimate after 5000 trials than after 50?

### Answers

1. The set of all possible outcomes of an experiment.
2. {5, 6}; P = 2/6 = 1/3.
3. 6 × 6 = 36.
4. Only (1, 1) gives 2, but six ordered pairs give 7, so P(2) = 1/36 and P(7) = 6/36.
5. 1 − 25/36 = 11/36.
6. 0.73.
7. 228/400 = 0.57.
8. 1000 × 0.57 = 570.
9. HHT, HTH, THH: 3/8.
10. PROBABILITY has 11 letters, 2 of them B: 2/11.
11. 50 × 1/6 = 25/3 ≈ 8.33.
12. Random variation averages out over many trials, so the proportion settles closer to the true
    probability.

## Frequently asked questions

**Is relative frequency the same as probability?**
No. Relative frequency is an experimental estimate of a probability. It varies between experiments and
becomes more reliable as the number of trials increases.

**Must an expected number be a whole number?**
No. It is n × p, a long-run average, so values such as 16.7 sixes in 100 rolls are correct and should not
be rounded unless the question asks.

**When can I use P(A) = n(A)/n(U)?**
Only when every outcome in U is equally likely. Otherwise use relative frequency or a model.

## Where to go next

Test yourself with the [4.5 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-5-practice/),
then move to the [4.6 revision notes on combined and conditional events](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-6-revision-notes/).
