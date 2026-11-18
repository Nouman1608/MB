---
title: "Edexcel International GCSE Mathematics A (4MA1): Probability"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Statistics and probability"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 6.3
syllabusTopics:
  - qualification: "igcse"
    topic: "statistics-and-probability-edexcel-igcse-maths"
    subtopic: "probability-edexcel-igcse-maths"
description: "Study guide for Edexcel IGCSE Maths 4MA1 section 6.3: probability language, sample spaces, Venn diagrams, expected frequency and tree diagrams."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This study guide goes deeper into section 6.3, Probability, of topic 6 (Statistics and probability) in the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2 (November 2017). The Foundation Tier has ten statements (A to J), which both tiers need. The Higher Tier adds tree diagrams, independent events and simple conditional probability, marked **Higher tier only** below.

The [Statistics and probability study guide](/resources/edexcel-igcse-maths-4ma1-statistics-and-probability/) gives one example of each idea. This page works through the full sample space of two dice, probability tables with unknowns, Venn diagrams with a missing region, the reliability of experimental estimates and three-stage problems without replacement. Use it with the [Probability revision notes](/resources/edexcel-igcse-mathematics-4ma1-probability-edexcel-igcse-maths-revision-notes/) and the [Probability practice questions](/resources/edexcel-igcse-mathematics-4ma1-probability-edexcel-igcse-maths-practice/).

## What the specification asks

| Statement | Content | Tier |
|---|---|---|
| Foundation A | understand the language of probability (outcomes, equal likelihood, events, random) | Both |
| Foundation B | understand and use the probability scale: P(certainty) = 1, P(impossibility) = 0 | Both |
| Foundation C | understand and use estimates or measures of probability from theoretical models | Both |
| Foundation D | find probabilities from a Venn diagram | Both |
| Foundation E | understand sample spaces and events, and find probabilities from a sample space | Both |
| Foundation F | list all the outcomes for single events and for two successive events in a systematic way | Both |
| Foundation G | estimate probabilities from previously collected data | Both |
| Foundation H | calculate the probability of the complement of an event: P(A′) = 1 − P(A) | Both |
| Foundation I | use the addition rule for mutually exclusive events: P(A or B) = P(A) + P(B) | Both |
| Foundation J | understand and use the term "expected frequency" | Both |
| Higher A | draw and use tree diagrams | Higher |
| Higher B | determine the probability that two or more independent events will occur | Higher |
| Higher C | use simple conditional probability when combining events (for example, picking two balls from a bag without replacement) | Higher |
| Higher D | apply probability to simple problems | Higher |

## Language and the scale (both tiers)

- An **outcome** is one possible result; an **event** is one or more outcomes.
- Outcomes are **equally likely** when each has the same chance, as with a fair dice. Choosing **at random** means every item has an equal chance of being picked.
- Probabilities go from 0 (impossible) to 1 (certain). Write them as fractions, decimals or percentages, never as ratios or "1 in 4" alone.

For equally likely outcomes:

```
P(event) = number of outcomes in the event ÷ total number of outcomes
```

## Listing outcomes systematically (both tiers)

A systematic list fixes the first choice and runs through the second, so nothing is missed or repeated.

**Worked example 1 (choosing two from four).** Two of Amir, Bea, Chen and Dina (A, B, C, D) are chosen at random as captains.

```
AB  AC  AD
    BC  BD
        CD
6 outcomes; A is in 3 of them, so P(Amir is chosen) = 3/6 = 1/2
```

The order does not matter here, so AB and BA are the same outcome.

**Worked example 2 (two dice).** Two fair dice are rolled and the scores are added. A sample space grid has 6 × 6 = 36 equally likely cells.

```
sum 9: (3, 6), (4, 5), (5, 4), (6, 3)  -> P(sum 9) = 4/36 = 1/9
double: (1, 1) ... (6, 6)              -> P(double) = 6/36 = 1/6
sum 7 is the most likely total: 6 cells, P = 1/6
```

Here order **does** matter: (3, 6) and (6, 3) are different cells, because the dice are different.

## Probability tables, complements and the addition rule (both tiers)

The probabilities of all the possible outcomes add up to 1. That fact solves most table questions.

**Worked example 3.** A spinner lands on red, blue, green or yellow. P(red) = 0.15 and P(blue) = 0.3. Green and yellow are equally likely.

```
P(green) + P(yellow) = 1 − 0.15 − 0.3 = 0.55
P(green) = 0.55 ÷ 2 = 0.275
P(not red) = 1 − 0.15 = 0.85            (complement)
P(red or blue) = 0.15 + 0.3 = 0.45      (mutually exclusive: one spin cannot land on both)
expected number of greens in 400 spins = 0.275 × 400 = 110
```

**Mutually exclusive** means the events cannot happen at the same time. Adding is only correct for such events; "even" and "greater than 3" on one dice are not mutually exclusive (both include 4 and 6).

**Expected frequency** = probability × number of trials. It is what you would expect on average; the actual count will usually differ a little.

## Venn diagrams (both tiers)

Fill a Venn diagram from the inside out: the overlap, then each "only" region, then the outside.

**Worked example 4 (a missing overlap).** 40 students were asked about tea and coffee. 22 like tea, 18 like coffee and 7 like neither.

```
students in at least one circle = 40 − 7 = 33
22 + 18 = 40, which counts the overlap twice
overlap = 40 − 33 = 7
tea only = 22 − 7 = 15, coffee only = 18 − 7 = 11
```

A student is picked at random:

```
P(likes tea only) = 15/40 = 3/8
P(likes exactly one) = (15 + 11)/40 = 13/20
P(likes coffee but not tea) = 11/40
```

## Experimental probability (both tiers)

When outcomes are not equally likely, or a dice may be biased, estimate the probability from data:

```
relative frequency = number of times the event happened ÷ number of trials
```

**Worked example 5.** Priya spins a spinner 50 times and gets red 14 times. Sam spins it 500 times and gets red 162 times.

```
Priya: 14 ÷ 50 = 0.28
Sam:   162 ÷ 500 = 0.324
```

Sam's estimate is more reliable because it is based on more trials. To decide whether a dice is fair, compare its relative frequencies with the theoretical probabilities: a small difference over a few rolls is expected, but a large difference over many rolls suggests bias.

## Tree diagrams and independent events (Higher tier only)

Events are **independent** when the outcome of one does not affect the other. Then P(A and B) = P(A) × P(B).

On a tree diagram, the branches from each point add to 1. **Multiply along** a route; **add** the results of different routes that give the same event.

**Worked example 6.** The probability that Lena's train is on time is 0.9, and the probability that her connecting bus is on time is 0.7. The two are independent.

```
P(both on time) = 0.9 × 0.7 = 0.63
P(exactly one on time) = 0.9 × 0.3 + 0.1 × 0.7 = 0.27 + 0.07 = 0.34
P(neither on time) = 0.1 × 0.3 = 0.03
P(at least one on time) = 1 − 0.03 = 0.97
```

Check: 0.63 + 0.34 + 0.03 = 1. ✓ For "at least one", the complement of "none" is almost always the shortest route.

## Without replacement (Higher tier only)

If an item is not replaced, the probabilities on the second branch change: the total goes down by one, and so does the count of whatever was taken.

**Worked example 7.** A bag holds 4 red and 6 green counters. Three counters are taken at random without replacement. Find P(at least one red) and P(all the same colour).

```
P(no red) = 6/10 × 5/9 × 4/8 = 120/720 = 1/6
P(at least one red) = 1 − 1/6 = 5/6
P(all red) = 4/10 × 3/9 × 2/8 = 24/720
P(all green) = 120/720
P(all the same colour) = 144/720 = 1/5
```

Leave fractions unsimplified until the end; equal denominators (720) make the final addition easy.

## Exam technique

- **"Write down"**: a single probability is expected, as a fraction or decimal.
- **"Work out"** or **"Calculate"**: show the multiplication or addition you used.
- **"Draw a tree diagram"**: label every branch with its outcome and probability.
- **"Is the dice fair? Give a reason"**: compare a relative frequency with the theoretical value and mention the number of trials.

## Common mistakes

- Writing probabilities as ratios (3 : 8) or as "3 out of 8" without a fraction.
- Adding probabilities of events that can happen together.
- Treating (3, 6) and (6, 3) as one outcome when two different dice are rolled.
- Forgetting to reduce **both** numbers on the second branch without replacement.
- Counting the Venn overlap twice.
- Rounding probabilities part-way through a tree calculation.

## Next steps

Condense the rules with the [Probability revision notes](/resources/edexcel-igcse-mathematics-4ma1-probability-edexcel-igcse-maths-revision-notes/), then test yourself with the [Probability practice questions](/resources/edexcel-igcse-mathematics-4ma1-probability-edexcel-igcse-maths-practice/). Set notation used in Venn diagrams is explained in the [Set language and notation study guide](/resources/edexcel-igcse-maths-4ma1-set-language-and-notation/).

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017, Pearson Education Limited. Topic 6, Statistics and probability: 6.3 Probability (Foundation Tier statements A to J; Higher Tier statements A to D).
