---
resourceId: "mb-ap-stats-2.4-study-guide"
title: "Introduction to Probability: Study Guide (Statistics 2.4)"
description: "Learn to list a sample space, calculate probabilities when outcomes are equally likely, check that probabilities lie between 0 and 1, and use the complement rule for “not” and “at least one”."
course: "statistics"
unit: 2
topics: ["2.4"]
resourceType: "study-guide"
prerequisites:
  - "Working with fractions, decimals and percentages"
  - "Random processes, outcomes, events and long-run relative frequency (Topic 2.3)"
prerequisiteResources: ["mb-ap-stats-2.3-study-guide"]
learningObjectives:
  - "List the sample space of a random process, using a table or grid when there are two stages"
  - "Calculate the probability of an event by counting outcomes when all outcomes are equally likely"
  - "Use the facts that every probability lies from 0 to 1 and that the sample space has probability 1"
  - "Find the probability of the complement of an event, including “at least one” events"
  - "Recognise when outcomes are not equally likely, so that counting values gives the wrong probability"
skills: ["3"]
studyMinutes: 40
difficulty: "foundation"
calculator: "graphing"
calculatorNote: "Fractions are often clearest. If you convert to a decimal, give 3 or 4 decimal places (for example 11/12 ≈ 0.9167)."
related: ["mb-ap-stats-2.4-revision-notes", "mb-ap-stats-2.4-practice", "mb-ap-stats-2.4-checklist"]
next: "mb-ap-stats-2.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "The sample space S is the set of all possible outcomes, with no overlaps. P(S) = 1."
  - "If all outcomes are equally likely, P(E) = number of outcomes in E ÷ total number of outcomes."
  - "Every probability is from 0 (impossible) to 1 (certain), inclusive."
  - "Complement rule: P(not E) = 1 − P(E). Write “not E” as Eᶜ, E′ or Ē."
  - "“At least one” is the complement of “none”: P(at least one) = 1 − P(none)."
faqs:
  - question: "How is this different from estimating a probability by simulation?"
    answer: "A simulation estimates a probability from the relative frequency over many trials, so the answer changes from run to run. When the outcomes are equally likely, you can count them and find the theoretical probability exactly."
  - question: "Should I give probabilities as fractions or decimals?"
    answer: "Either is fine if it is correct and between 0 and 1. A fraction such as 11/12 is exact. A rounded decimal should keep enough places to be useful, for example 0.9167."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From estimates to exact probabilities

In Topic 2.3 you estimated probabilities by repeating a random process many times. The estimate changed from one simulation to the next. Sometimes you can do better. If you can list every possible outcome, and you know they are all equally likely, you can calculate a probability exactly by counting. This exact value is called a **theoretical probability**. It is the value that relative frequencies settle towards in the long run.

## The sample space

The **sample space**, written S, is the set of **all** possible outcomes of a random process. The outcomes must not overlap: each trial gives exactly one outcome in S.

- Spin a fair spinner with sectors numbered 1 to 8 once: S = {1, 2, 3, 4, 5, 6, 7, 8}.
- Choose one member at random from a club: S is the list of all members.

Because one of the outcomes in S **must** happen on every trial, **P(S) = 1**.

**Two-stage processes.** When a trial has two parts, list the outcomes as pairs. A table or grid makes sure you miss none and count none twice. For example, roll a fair four-sided die (faces 1 to 4) and spin a fair spinner with three equal sectors (1, 2, 3). Each outcome is a pair (die, spinner), such as (3, 2). There are 4 × 3 = 12 pairs.

## Probabilities when outcomes are equally likely

An **event** E is a set of outcomes from the sample space. Write its probability as **P(E)**. If all outcomes in S are **equally likely**:

**P(E) = number of outcomes in E ÷ total number of outcomes in S**

For the 1 to 8 spinner, let E = "lands on an odd number". E = {1, 3, 5, 7}, so P(E) = 4/8 = 1/2.

**Check that the outcomes really are equally likely.** The formula only works when they are. A fair die, a spinner with equal sectors, and choosing one person "at random" from a list all give equally likely outcomes. Totals of two dice, or the three results "win, lose, draw", usually do not.

**Choosing one individual at random from a table of counts.** If each individual is equally likely to be chosen, the probability of a category is its count divided by the total. A fictional climbing club has 80 members:

| Membership type | Junior | Adult | Senior | Total |
|---|---|---|---|---|
| Members | 18 | 47 | 15 | 80 |

One member is chosen at random for a prize. P(adult) = 47/80 = 0.5875. This is the same calculation as a relative frequency from Topic 2.2, now read as a probability.

## The basic rules

Two rules hold for every probability, not just for equally likely outcomes.

1. **0 ≤ P(E) ≤ 1.** A probability can never be negative or greater than 1. P(E) = 0 means E cannot happen. P(E) = 1 means E is certain.
2. **P(S) = 1.** So the probabilities of all the separate outcomes in the sample space add to 1.

Use rule 2 to find a missing probability. If a fictional weather model gives P(sunny) = 0.5, P(cloudy) = 0.3 and P(rainy) = ?, and these are the only three outcomes, then P(rainy) = 1 − 0.5 − 0.3 = 0.2.

Use rule 1 to check every answer. A probability of 1.15 or −0.09 tells you there is a mistake.

## The complement of an event

The **complement** of E is the event "**E does not happen**". It contains every outcome in S that is not in E. You may see it written as **Eᶜ**, **E′** or **Ē**. All three mean "not E".

E and its complement have no outcomes in common, and together they make up the whole sample space. So their probabilities add to 1:

**P(Eᶜ) = 1 − P(E)**

For the climbing club, P(not junior) = 1 − 18/80 = 62/80 = 0.775. You could also count 47 + 15 = 62 non-junior members directly. The complement rule is quicker when the event itself has many outcomes but its complement has few.

**Describe the complement carefully.**

| Event E | Complement Eᶜ |
|---|---|
| at least one silver badge | no silver badges |
| at least 2 crossings delayed | at most 1 crossing delayed (0 or 1) |
| score of 6 or more | score of 5 or less |
| all three answers correct | at least one answer wrong |

## Seeing a sample space as a grid

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="grid-title grid-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="grid-title">Sample space grid for a four-sided die and a three-sector spinner</title>
<desc id="grid-desc">A grid with 4 columns for the die results 1, 2, 3 and 4, and 3 rows for the spinner results 1, 2 and 3. Each of the 12 cells shows the score, die plus spinner. Row 1 reads 2, 3, 4, 5. Row 2 reads 3, 4, 5, 6. Row 3 reads 4, 5, 6, 7. Three cells have a thick border, grey shading and a tick: die 4 with spinner 2 (score 6), die 3 with spinner 3 (score 6) and die 4 with spinner 3 (score 7). These are the outcomes in the event "score at least 6".</desc>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<text x="370" y="28" text-anchor="middle" font-size="15" fill="#1d2b44">Four-sided die</text>
<g font-size="15" fill="#1d2b44" text-anchor="middle">
<text x="220" y="58">1</text><text x="320" y="58">2</text><text x="420" y="58">3</text><text x="520" y="58">4</text>
<text x="150" y="104">1</text><text x="150" y="159">2</text><text x="150" y="214">3</text>
</g>
<text x="95" y="152" text-anchor="middle" font-size="15" fill="#1d2b44" transform="rotate(-90 95 152)">Spinner</text>
<rect x="170" y="70" width="100" height="55" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="220" y="104" text-anchor="middle" font-size="18" fill="#1d2b44">2</text>
<rect x="270" y="70" width="100" height="55" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="320" y="104" text-anchor="middle" font-size="18" fill="#1d2b44">3</text>
<rect x="370" y="70" width="100" height="55" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="420" y="104" text-anchor="middle" font-size="18" fill="#1d2b44">4</text>
<rect x="470" y="70" width="100" height="55" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="520" y="104" text-anchor="middle" font-size="18" fill="#1d2b44">5</text>
<rect x="170" y="125" width="100" height="55" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="220" y="159" text-anchor="middle" font-size="18" fill="#1d2b44">3</text>
<rect x="270" y="125" width="100" height="55" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="320" y="159" text-anchor="middle" font-size="18" fill="#1d2b44">4</text>
<rect x="370" y="125" width="100" height="55" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="420" y="159" text-anchor="middle" font-size="18" fill="#1d2b44">5</text>
<rect x="470" y="125" width="100" height="55" fill="#d9dee8" stroke="#1d2b44" stroke-width="4"/>
<text x="520" y="159" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">6 ✓</text>
<rect x="170" y="180" width="100" height="55" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="220" y="214" text-anchor="middle" font-size="18" fill="#1d2b44">4</text>
<rect x="270" y="180" width="100" height="55" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="320" y="214" text-anchor="middle" font-size="18" fill="#1d2b44">5</text>
<rect x="370" y="180" width="100" height="55" fill="#d9dee8" stroke="#1d2b44" stroke-width="4"/>
<text x="420" y="214" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">6 ✓</text>
<rect x="470" y="180" width="100" height="55" fill="#d9dee8" stroke="#1d2b44" stroke-width="4"/>
<text x="520" y="214" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">7 ✓</text>
<text x="370" y="270" text-anchor="middle" font-size="13" fill="#1d2b44">Thick border, shading and ✓ = score at least 6 (3 of the 12 outcomes)</text>
</svg>
<figcaption>Figure 1. The 12 equally likely outcomes of rolling a four-sided die and spinning a three-sector spinner. Each cell shows the score (die + spinner). The three marked cells form the event "score at least 6", so its probability is 3/12 = 0.25.</figcaption>
</figure>

## Worked example 1: a die and a spinner

**Question.** In a fictional board game, a player rolls a fair four-sided die (1 to 4) and spins a fair spinner with three equal sectors (1 to 3). The score is die + spinner.

(a) How many outcomes are in the sample space? Are they equally likely?
(b) Find P(score is at least 6).
(c) Find P(score is not 7).
(d) A student says, "The possible scores are 2, 3, 4, 5, 6 and 7, so P(score = 5) = 1/6." Is this right?

**(a)** Each outcome is a pair (die, spinner). There are 4 × 3 = **12** outcomes, shown in Figure 1. The die is fair and the sectors are equal, so each of the 12 pairs is equally likely.

**(b)** Outcomes with score at least 6: (3, 3), (4, 2), (4, 3). That is 3 outcomes.
P(score ≥ 6) = 3/12 = **1/4 = 0.25**.

**(c)** Let E = "score is 7". Only (4, 3) gives 7, so P(E) = 1/12.
P(Eᶜ) = 1 − 1/12 = **11/12 ≈ 0.9167**.
Counting the 11 other cells gives the same answer, but the complement rule needs only one cell.

**(d)** No. The six **scores** are not equally likely, so you cannot count scores. Count the equally likely **pairs** instead. A score of 5 comes from (2, 3), (3, 2) and (4, 1): 3 of the 12 pairs. P(score = 5) = 3/12 = **0.25**, not 1/6 ≈ 0.167. A score of 2 comes only from (1, 1), so P(score = 2) = 1/12.

**Check.** The score counts in the grid are 1, 2, 3, 3, 2, 1 for scores 2 to 7. They add to 12, so the probabilities add to 1, as P(S) = 1 requires.

## Worked example 2: "at least one" with the complement rule

**Question.** A fictional language-learning app gives a user one badge per day, either bronze (B) or silver (S). Over 3 days, all 8 possible sequences of badges are equally likely.

(a) List the sample space.
(b) Find the probability that the user gets at least one silver badge.
(c) Find the probability of exactly two silver badges.
(d) Describe the complement of "at least two silver badges" and find its probability.

**(a)** Write each outcome as day 1, day 2, day 3:
S = {BBB, BBS, BSB, BSS, SBB, SBS, SSB, SSS}. That is 2 × 2 × 2 = 8 outcomes. Order matters: BBS and SBB are different outcomes.

**(b)** The complement of "at least one silver" is "**no** silver", which is only BBB.
P(no silver) = 1/8, so P(at least one silver) = 1 − 1/8 = **7/8 = 0.875**.
Check by counting: every outcome except BBB has an S, which is 7 outcomes.

**(c)** Exactly two silver: BSS, SBS, SSB. P = 3/8 = **0.375**.

**(d)** "At least two silver" means 2 or 3 silver. Its complement is "**at most one silver**" (0 or 1 silver): BBB, BBS, BSB, SBB. P = 4/8 = **0.5**. Using the rule: at least two silver has 4 outcomes (BSS, SBS, SSB, SSS), so P = 1 − 4/8 = 0.5.

**Interpretation.** Over a very large number of 3-day periods, the user would get at least one silver badge in about 87.5% of them.

**Link to simulation.** You could also estimate this probability with the method of Topic 2.3. Let even digits stand for bronze and odd digits for silver, read 3 digits per trial, and count the trials that contain at least one odd digit. With many trials, the law of large numbers says the relative frequency would settle near 0.875. The exact answer from counting tells you the value a good simulation should be close to, and a simulation is a useful check when a sample space is too large to list by hand.

## Common misconceptions

- **"There are three outcomes, so each has probability 1/3."** Only if they are equally likely. A football match can end in a win, loss or draw, but these need not be equally likely.
- **Counting values that are not equally likely.** In Worked example 1, the scores 2 to 7 are not equally likely. Count the equally likely pairs.
- **Missing or double-counting outcomes.** Use a grid or a systematic list. BBS and SBB are different outcomes.
- **Probabilities outside 0 to 1.** An answer such as 1.15 or −0.09 is always wrong. Use this as a check.
- **The wrong complement.** The complement of "at least 2" is "at most 1", not "none" and not "at most 2".
- **"P(not E) = P(E)".** The two must add to 1. If P(E) = 0.3, then P(Eᶜ) = 0.7.
- **Writing a percentage as a probability.** 87.5% is the probability 0.875, not 87.5.

## Where this leads

Next, Topic 2.5 asks whether two events can happen at the same time (mutually exclusive events). Later topics add rules for "and", "or" and "given that", but they all rest on the ideas here: list the sample space, check whether outcomes are equally likely, keep every probability between 0 and 1, and use the complement when it is quicker. Now try the [practice questions](/advanced-course-resources/statistics/2-4-introduction-probability-practice/), then use the [revision notes](/advanced-course-resources/statistics/2-4-introduction-probability-revision-notes/) and the [checklist](/advanced-course-resources/statistics/2-4-introduction-probability-checklist/). When you are ready, go on to [Topic 2.5: Mutually Exclusive Events](/advanced-course-resources/statistics/2-5-mutually-exclusive-events-study-guide/).
