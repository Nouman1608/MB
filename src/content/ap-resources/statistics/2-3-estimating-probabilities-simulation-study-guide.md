---
resourceId: "mb-ap-stats-2.3-study-guide"
title: "Estimating Probabilities Using Simulation: Study Guide (Statistics 2.3)"
description: "Learn what random processes, outcomes and events are, how to design and carry out a simulation with random digits or technology, and why more trials give better estimates."
course: "statistics"
unit: 2
topics: ["2.3"]
resourceType: "study-guide"
prerequisites:
  - "Calculating a relative frequency as a count divided by a total (Topic 1.3)"
  - "Using a line of random digits or a random number generator to choose individuals (Topic 1.11)"
prerequisiteResources: ["mb-ap-stats-2.2-study-guide"]
learningObjectives:
  - "Use the words random process, trial, outcome and event correctly in context"
  - "Explain probability as the relative frequency of an outcome over a very large number of trials"
  - "Design a simulation by assigning random digits or random integers to outcomes so that the chances match the real situation"
  - "Carry out simulated trials, record the counts and the total, and use the relative frequency to estimate a probability"
  - "Use the law of large numbers to explain why more trials give a more reliable estimate, and why it says nothing about the next trial"
skills: ["3"]
studyMinutes: 40
difficulty: "foundation"
calculator: "graphing"
calculatorNote: "Use the random integer function on a graphing calculator (or any random number generator) to carry out many trials quickly. Give estimated probabilities as decimals to 2 or 3 decimal places."
related: ["mb-ap-stats-2.3-revision-notes", "mb-ap-stats-2.3-practice", "mb-ap-stats-2.3-checklist"]
next: "mb-ap-stats-2.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "A random process has results decided by chance. One repetition is a trial; its result is an outcome; an event is a set of outcomes."
  - "The probability of an event is its relative frequency in the long run, over a very large number of trials."
  - "A simulation gives each outcome random values in the right proportions, repeats the process many times and records the count and the total."
  - "Estimated probability = number of trials where the event happened ÷ total number of trials."
  - "Law of large numbers: with independent trials, the relative frequency settles towards one value as the number of trials grows. It does not make the next trial 'due'."
faqs:
  - question: "Why does my simulation give a different answer from my friend's?"
    answer: "Each simulation uses different random numbers, so each gives a slightly different estimate. That is expected. With more trials, the estimates usually get closer to each other and to the true probability."
  - question: "How many trials are enough?"
    answer: "There is no single number. In class, 10 to 20 trials by hand show the method. For a useful estimate, use technology and run hundreds or thousands of trials. More trials give a more reliable estimate."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Random processes, outcomes and events

Many situations have results you cannot predict in advance. A coin can land heads or tails. A bus can be on time or late. A **random process** is any process whose results are decided by chance.

You need four words to talk about a random process clearly:

- **Trial:** one repetition of the random process. Spinning a spinner once is one trial.
- **Outcome:** the result of one trial. "The spinner landed on 3" is an outcome.
- **Event:** a collection of one or more outcomes. "The spinner landed on an odd number" is an event. It happens if the outcome is 1, 3, 5 or 7 (on a spinner numbered 1 to 8).
- **Probability:** a number from 0 to 1 that describes how likely an event is.

Sometimes one trial is a whole sequence of actions. If you want to know about a commuter's week, one trial might be "four ferry crossings", and the outcome is the list of four results.

## Probability as long-run relative frequency

What does "the probability that a crossing is delayed is 0.2" mean? It does **not** mean that exactly 1 crossing in every 5 is delayed. It means that if you watched a very large number of crossings, the proportion that were delayed would be close to 0.2.

So the **probability of an event is its long-run relative frequency**: the proportion of times it happens over a very large number of trials.

This gives you a way to **estimate** a probability from data. Count how often the event happened and divide by the number of trials:

**estimated P(event) = number of trials in which the event happened ÷ total number of trials**

For example, a fictional bakery recorded 250 days, and its bread sold out before noon on 38 of them. The relative frequency is 38 ÷ 250 = 0.152. This is an **estimate** of the true probability that the bread sells out before noon. Another 250 days would give a slightly different value.

## The law of large numbers

How close is an estimate to the true probability? That depends mostly on the number of trials. The **law of large numbers** says:

> When trials are independent, the relative frequency of an event gets closer and closer to a single value as the number of trials increases.

That single value is the probability. Two words matter here:

- **Independent:** the result of one trial does not change the chances on another trial.
- **Long run:** the law is about very many trials. In a short run, the relative frequency can jump around a lot.

Figure 1 shows one simulation of 1,000 ferry crossings. Each crossing was delayed with probability 0.2, decided by a random number generator. After each crossing, the relative frequency of delays so far was recorded.

<figure>
<svg viewBox="0 0 640 290" role="img" aria-labelledby="lln-title lln-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lln-title">Running relative frequency of delayed crossings in 1,000 simulated ferry crossings</title>
<desc id="lln-desc">A line graph. The horizontal axis is the number of crossings, from 0 to 1,000. The vertical axis is the relative frequency of delayed crossings so far, from 0 to 0.6. A dashed horizontal reference line is drawn at 0.2, the true probability. The solid line starts at 0 for the first 5 crossings, jumps between about 0.05 and 0.21 during the first 100 crossings, and then stays close to the dashed line. After 200 crossings it is 0.200, after 500 crossings 0.200, and after 1,000 crossings 0.213.</desc>
<rect x="0" y="0" width="640" height="290" fill="#ffffff"/>
<line x1="60" y1="230" x2="600" y2="230" stroke="#1d2b44" stroke-width="2"/>
<line x1="60" y1="30" x2="60" y2="230" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="60" y1="230" x2="60" y2="237"/><line x1="168" y1="230" x2="168" y2="237"/><line x1="276" y1="230" x2="276" y2="237"/><line x1="384" y1="230" x2="384" y2="237"/><line x1="492" y1="230" x2="492" y2="237"/><line x1="600" y1="230" x2="600" y2="237"/>
<line x1="53" y1="230" x2="60" y2="230"/><line x1="53" y1="196.7" x2="60" y2="196.7"/><line x1="53" y1="163.3" x2="60" y2="163.3"/><line x1="53" y1="130" x2="60" y2="130"/><line x1="53" y1="96.7" x2="60" y2="96.7"/><line x1="53" y1="63.3" x2="60" y2="63.3"/><line x1="53" y1="30" x2="60" y2="30"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="60" y="252">0</text><text x="168" y="252">200</text><text x="276" y="252">400</text><text x="384" y="252">600</text><text x="492" y="252">800</text><text x="600" y="252">1,000</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="end">
<text x="48" y="234">0</text><text x="48" y="201">0.1</text><text x="48" y="167">0.2</text><text x="48" y="134">0.3</text><text x="48" y="101">0.4</text><text x="48" y="67">0.5</text><text x="48" y="34">0.6</text>
</g>
<text x="330" y="278" text-anchor="middle" font-size="14" fill="#1d2b44">Number of crossings simulated</text>
<text x="16" y="130" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 16 130)">Relative frequency of delays</text>
<line x1="60" y1="163.3" x2="600" y2="163.3" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="596" y="182" text-anchor="end" font-size="12" fill="#1d2b44">dashed line: true probability 0.2</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" points="60.5,230.0 61.1,230.0 61.6,230.0 62.2,230.0 62.7,230.0 63.2,230.0 64.3,188.3 65.4,196.7 66.5,202.2 68.1,207.8 70.8,213.3 73.5,176.7 76.2,185.6 81.6,163.3 87.0,170.0 92.4,168.9 103.2,167.5 114.0,160.0 141.0,167.8 168.0,163.3 195.0,162.0 222.0,160.0 276.0,157.5 330.0,163.3 384.0,163.3 438.0,162.9 492.0,160.0 546.0,159.3 600.0,159.0"/>
<text x="120" y="110" font-size="12" fill="#1d2b44">large swings in the first 100 crossings</text>
<line x1="118" y1="114" x2="78" y2="170" stroke="#1d2b44" stroke-width="1"/>
<text x="600" y="140" text-anchor="end" font-size="12" fill="#1d2b44">0.213 after 1,000 crossings</text>
</svg>
<figcaption>Figure 1. One simulation of 1,000 fictional ferry crossings, each delayed with probability 0.2. Solid line: relative frequency of delays so far. Dashed line: the true probability. Early on the relative frequency swings widely (0 after 5 crossings, 0.05 after 20). In the long run it settles near 0.2.</figcaption>
</figure>

Notice two things. First, the early values are far from 0.2: after 5 crossings there were no delays at all. Second, the line does not have to hit 0.2 exactly. After 1,000 crossings it was 0.213. The law of large numbers promises that the relative frequency gets **close** to the probability, not that it equals it.

## Designing a simulation

Often you cannot repeat a real process thousands of times. It may be too slow, too expensive or impossible. A **simulation** imitates the random process with random numbers, so that the simulated outcomes behave like the real ones.

Follow these steps.

1. **State the question.** Name the event whose probability you want, and the probability of each basic outcome.
2. **Assign random values to outcomes.** Use random digits or random integers. Give each outcome a share of the values that matches its probability. Say whether repeats are allowed or skipped.
3. **Describe one trial.** Say how many values one trial uses and what you record (for example, "the number of delays in four values").
4. **Repeat many times.** Record the count of trials in which the event happened and the **total** number of trials.
5. **Conclude in context.** Estimated probability = count ÷ total. Say what the estimate means for the real situation.

**Assigning values.** With random digits 0 to 9, each digit has probability 0.1.

- A probability of 0.2 needs 2 of the 10 digits, for example 0 and 1.
- A probability of 0.35 needs pairs of digits: 35 of the 100 pairs 00 to 99, for example 00 to 34.
- Three equally likely outcomes do not fit 10 digits evenly. Use 1, 2, 3 for the outcomes and **ignore** 0 and 4 to 9.

**With or without replacement.** If one item cannot be chosen twice in the same trial (drawing tiles from a bag, choosing people), skip a repeated value within a trial. If each part of a trial is a fresh event with the same chances (each ferry crossing), repeats are allowed.

**With technology.** A random integer generator does the same job faster. For a probability of 0.2, generate integers from 1 to 10 and let 1 and 2 stand for "delayed". Technology makes thousands of trials possible, which is where simulation becomes useful.

## Worked example 1: simulating a week of ferry crossings

**Question.** On a fictional route, each ferry crossing is delayed with probability 0.2, independently of other crossings. Rui crosses 4 times a week. Use a simulation to estimate the probability that at least 2 of Rui's 4 crossings in a week are delayed. Use this line of random digits for 10 trials:

**86523 00018 69569 76559 28603 85077 81080 50244**

1. **Question.** Event: "at least 2 of 4 crossings are delayed". Each crossing: P(delayed) = 0.2.
2. **Assign digits.** 0 and 1 = delayed; 2 to 9 = on time. This gives 2 of the 10 digits, so a probability of 0.2. Repeats are allowed, because each crossing is a fresh random event.
3. **One trial.** Read 4 digits (one week). Record the number of delays and whether it is at least 2.
4. **Carry out 10 trials.** Ignore the spaces and read the digits in groups of four.

| Trial | Digits | Delays (0 or 1) | At least 2? |
|---|---|---|---|
| 1 | 8652 | 0 | no |
| 2 | 3000 | 3 | yes |
| 3 | 1869 | 1 | no |
| 4 | 5697 | 0 | no |
| 5 | 6559 | 0 | no |
| 6 | 2860 | 1 | no |
| 7 | 3850 | 1 | no |
| 8 | 7781 | 1 | no |
| 9 | 0805 | 2 | yes |
| 10 | 0244 | 1 | no |

5. **Conclude.** The event happened in 2 of 10 trials. Estimated probability = 2 ÷ 10 = **0.2**. Based on this simulation, Rui has about a 0.2 chance of at least 2 delays in a week.

**Check with more trials.** Ten trials give a rough estimate only. A random number generator ran **1,000** simulated weeks: 184 had at least 2 delays, so the estimate is 184 ÷ 1,000 = **0.184**. By the law of large numbers, this is the more reliable estimate. (The exact value is about 0.181. You will learn to calculate it in Topic 2.10.)

## Worked example 2: drawing without replacement

**Question.** In a fictional board game, a bag holds 10 tiles: 3 gold and 7 silver. A player draws 2 tiles at random, without putting the first back. Estimate the probability that the player draws **at least one gold tile**. Use this line of random digits for 10 trials:

**21522 48677 47236 54927 9231**

1. **Question.** Event: "at least one of the 2 tiles is gold".
2. **Assign digits.** Label the tiles 0 to 9. Digits 0, 1, 2 = gold tiles; 3 to 9 = silver tiles. Each digit stands for **one particular tile**.
3. **One trial.** Read digits until you have 2 **different** digits. Skip a digit that repeats within the trial, because the same tile cannot be drawn twice. Record how many of the 2 are gold.
4. **Carry out 10 trials.**

| Trial | Digits read | Tiles | Gold tiles | At least one gold? |
|---|---|---|---|---|
| 1 | 2 1 | 2, 1 | 2 | yes |
| 2 | 5 2 | 5, 2 | 1 | yes |
| 3 | 2 4 | 2, 4 | 1 | yes |
| 4 | 8 6 | 8, 6 | 0 | no |
| 5 | 7 7 4 | 7, 4 (second 7 skipped) | 0 | no |
| 6 | 7 2 | 7, 2 | 1 | yes |
| 7 | 3 6 | 3, 6 | 0 | no |
| 8 | 5 4 | 5, 4 | 0 | no |
| 9 | 9 2 | 9, 2 | 1 | yes |
| 10 | 7 9 | 7, 9 | 0 | no |

Notice that a digit can appear again in a **later** trial (2 appears in trials 1, 2, 3, 6 and 9). Each trial starts with a full bag, so only repeats inside one trial are skipped.

5. **Conclude.** At least one gold tile appeared in 5 of 10 trials. Estimated probability = 5 ÷ 10 = **0.5**.

**Check with technology.** A computer simulated 1,000 draws of 2 tiles from the bag:

| Gold tiles in the draw | 0 | 1 | 2 | Total |
|---|---|---|---|---|
| Number of trials | 453 | 476 | 71 | 1,000 |

Estimated P(at least one gold) = (476 + 71) ÷ 1,000 = 547 ÷ 1,000 = **0.547**. The table also estimates other events: P(both gold) ≈ 71 ÷ 1,000 = 0.071. The exact probability of at least one gold tile is 8/15 ≈ 0.533, so both estimates are close, and the 1,000-trial estimate is the one to trust.

**Interpretation.** Based on the 1,000-trial simulation, if many players each drew 2 tiles from a full bag, about 55% of them would get at least one gold tile.

## Common misconceptions

- **"A probability of 0.2 means exactly 1 in every 5."** Probability describes the long run. In Figure 1, the first 5 crossings had no delays at all.
- **The "law of averages".** After several on-time crossings, a delay is **not** "due". The trials are independent, so the chance on the next crossing is still 0.2. The law of large numbers is about proportions over many trials, not about the next trial making up for earlier ones.
- **Digits that do not match the probabilities.** Using 0 to 2 for a probability of 0.2 gives 0.3. Count the values you assign.
- **Forgetting to skip repeats** when sampling without replacement. In Worked example 2, the second 7 in trial 5 must be skipped.
- **Skipping repeats when you should not.** In Worked example 1, two delays in one week are two separate crossings, so the same digit may appear twice.
- **"My simulation gave the exact probability."** A simulation gives an **estimate**. Another run gives a different estimate.
- **Too few trials.** Ten trials show the method, but the estimate can be far from the truth. Use many more trials for a reliable estimate.
- **Not recording the total.** An estimate needs both the count and the number of trials. "The event happened 184 times" means nothing without "out of 1,000".

## Where this leads

Next, Topic 2.4 calculates probabilities exactly from a list of equally likely outcomes, without simulation. Later in the unit, simulation returns to estimate whole probability distributions, and in inference it helps you judge whether a result could happen by chance. Start with the [practice questions](/advanced-course-resources/statistics/2-3-estimating-probabilities-simulation-practice/), then use the [revision notes](/advanced-course-resources/statistics/2-3-estimating-probabilities-simulation-revision-notes/) and the [checklist](/advanced-course-resources/statistics/2-3-estimating-probabilities-simulation-checklist/). When you are ready, go on to [Topic 2.4: Introduction to Probability](/advanced-course-resources/statistics/2-4-introduction-probability-study-guide/).
