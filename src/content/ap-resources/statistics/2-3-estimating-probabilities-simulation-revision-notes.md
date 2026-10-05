---
resourceId: "mb-ap-stats-2.3-revision-notes"
title: "Estimating Probabilities Using Simulation: Revision Notes (Statistics 2.3)"
description: "One-page recap of random processes, outcomes, events, long-run relative frequency, designing a simulation and the law of large numbers, with the mistakes that cost marks."
course: "statistics"
unit: 2
topics: ["2.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-2.3-study-guide"]
learningObjectives:
  - "Recall the vocabulary of random processes and the steps of a simulation"
  - "Spot the common errors in simulation questions before making them"
skills: ["3"]
studyMinutes: 10
difficulty: "foundation"
calculator: "graphing"
calculatorNote: "A random integer generator replaces a line of random digits and allows many more trials."
related: ["mb-ap-stats-2.3-study-guide", "mb-ap-stats-2.3-practice", "mb-ap-stats-2.3-checklist"]
next: "mb-ap-stats-2.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Probability = long-run relative frequency."
  - "Estimate = count of trials with the event ÷ total trials."
  - "More independent trials give a more reliable estimate; the next trial is never 'due'."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/2-3-estimating-probabilities-simulation-study-guide/).

## Recap

- A **random process** has results decided by chance. One repetition is a **trial**.
- An **outcome** is the result of one trial. An **event** is a collection of outcomes.
- The **probability** of an event is its relative frequency over a very large number of trials.
- A relative frequency from real or simulated data **estimates** the true probability.
- A **simulation** uses random digits or random integers to imitate the random process.

## Key relationships

| Idea | What to remember |
|---|---|
| Estimated probability | number of trials with the event ÷ total number of trials |
| Law of large numbers | with independent trials, the relative frequency settles towards one value (the probability) as trials increase |
| Probability 0.1, 0.2, … | single digits: 1, 2, … of the digits 0 to 9 |
| Probability 0.35, 0.07, … | pairs of digits: 35, 7, … of the pairs 00 to 99 |
| Outcomes that do not fit 10 digits | assign some digits and ignore the rest (e.g. 1 to 3 for three equally likely outcomes) |
| Without replacement | skip a value that repeats **within** a trial |
| With replacement / independent parts | repeats are allowed |

## Simulation steps

1. State the event and the probability of each basic outcome.
2. Assign random values to outcomes in the right proportions; say which values to ignore and whether to skip repeats.
3. Describe one trial and what you record.
4. Do many trials; record the **count** and the **total**.
5. Estimate the probability and interpret it in context.

## Mistakes to avoid

1. **"0.2 means exactly 1 in 5."** Only in the long run, and only approximately.
2. **Believing an outcome is "due"** after a run without it. Independent trials have no memory.
3. **Assigning the wrong number of digits** (0 to 2 is three digits, so probability 0.3).
4. **Not skipping repeats** when the same item cannot be chosen twice in a trial.
5. **Calling a simulated estimate exact.** Another run gives a different value.
6. **Too few trials**, or giving a count with no total.
7. **No context** in the conclusion.

## Quick self-check

1. Assign pairs of random digits to simulate an event with probability 0.45. *(Pairs 00 to 44 = event, 45 to 99 = not the event: 45 of 100 pairs)*
2. In 400 simulated trials an event happened 92 times. Estimate its probability. *(92 ÷ 400 = 0.23)*
3. A fair spinner has landed on red 5 times in a row. Is "not red" more likely next time? *(No. Spins are independent, so the probabilities for the next spin are unchanged.)*

Next: [practice questions](/advanced-course-resources/statistics/2-3-estimating-probabilities-simulation-practice/).
