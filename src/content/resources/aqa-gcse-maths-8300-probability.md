---
title: "AQA GCSE Mathematics 8300: Probability -- Study Guide"
seoTitle: "AQA GCSE Maths 8300 Probability Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Probability"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8300"]
syllabusSeries: "For first teaching 2015"
order: 5
syllabusTopics:
  - qualification: "gcse"
    topic: "probability-aqa-gcse-maths"
description: "Study guide for AQA GCSE Maths 8300 Probability (P1-P9): relative frequency, sample spaces, Venn and tree diagrams, and conditional probability."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-09-27
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29; 2026-11-08: reviewed by sajawal-zahid."
---

This study guide teaches Topic 5, **Probability** (specification references P1 to P9), of the AQA GCSE Mathematics (8300) specification, for teaching from September 2015 with exams from May/June 2017 (version 1.0). Probability can be tested on any of the three papers at Foundation or Higher tier. P1 to P8 are for both tiers; P9, conditional probability, is Higher tier only and is labelled where it appears. Exams run every May/June and November.

Use it with the [Probability revision notes](/resources/aqa-gcse-maths-8300-probability-revision-notes/) and the [Probability practice questions](/resources/aqa-gcse-maths-8300-probability-practice/). The course hub is [AQA GCSE Mathematics](/boards/aqa/gcse/mathematics/), the [printable checklist](/checklists/aqa/gcse/mathematics/) lists every statement, and the [free 10-minute diagnostics](/diagnostics/) show where to start.

## What this topic covers

| Spec | What you must be able to do | Tier |
|---|---|---|
| P1 | Record, describe and analyse outcomes of experiments using tables and frequency trees | Both |
| P2 | Use randomness, fairness and equally likely events to calculate expected outcomes | Both |
| P3 | Link relative expected frequency to theoretical probability; use the 0 to 1 scale | Both |
| P4 | Use the fact that probabilities of an exhaustive set of (mutually exclusive) outcomes sum to 1 | Both |
| P5 | Know that bigger unbiased samples give estimates closer to the theoretical probability | Both |
| P6 | List sets and combinations systematically with tables, grids, Venn diagrams and tree diagrams | Both |
| P7 | Build sample spaces for single and combined experiments and use them | Both |
| P8 | Probabilities of independent and dependent combined events, including tree diagrams; know when to add and when to multiply | Both |
| P9 | Calculate and interpret conditional probabilities using two-way tables, tree diagrams and Venn diagrams | Higher tier only |

The whole of probability and statistics together makes up about 15% of the marks at both tiers. Probabilities can be written as fractions, decimals or percentages. Never write them as ratios or "1 in 4".

## The probability scale and the "sum to 1" rule (P3, P4)

A probability is a number from 0 (impossible) to 1 (certain). An even chance is 0.5. Words such as *unlikely* and *likely* sit either side of 0.5.

If a set of outcomes is **exhaustive** (covers everything that can happen) and **mutually exclusive** (no two can happen together), their probabilities add up to 1. So:

`P(not A) = 1 − P(A)`

**Worked example 1.** A four-colour spinner has P(red) = 0.3 and P(blue) = 0.25. Yellow is twice as likely as green. Find P(yellow).

```
P(green) + P(yellow) = 1 − 0.3 − 0.25 = 0.45
Let P(green) = x, so P(yellow) = 2x
x + 2x = 0.45  →  3x = 0.45  →  x = 0.15
P(yellow) = 2 × 0.15 = 0.3
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--01-probability-scale.webp" width="900" height="840" alt="A bag of 20 beads (4 green, 6 yellow, 10 white) above a number line from 0 impossible to 1 certain. A black bead sits at 0, a white bead at 0.5 and the event not green at 0.8. The left half is unlikely and the right half likely." loading="lazy">
  <figcaption>Probabilities run from 0 (impossible) to 1 (certain), with 0.5 an even chance.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--02-adds-to-one.webp" width="900" height="850" alt="Two bars of length 1. The spinner bar is red 0.35, blue 0.2, green x, yellow 2x, so x = 0.15 and yellow 0.3. The rain bar is 35 percent rain and 65 percent no rain." loading="lazy">
  <figcaption>All the probabilities of one event add to 1, so not happening is 1 minus happening.</figcaption>
</figure>


## Experiments, frequency trees and relative frequency (P1, P3, P5)

When you cannot work out a probability from equally likely outcomes, you run an experiment and use the **relative frequency**:

`relative frequency = number of times the outcome happened ÷ number of trials`

Relative frequency is an **estimate** of the probability. P5 is the key idea: an unbiased experiment with more trials tends to give an estimate closer to the theoretical probability. So always use the result from the largest number of trials.

**Worked example 2.** Mia rolls a dice 50 times and gets 14 sixes. Later she rolls it 500 times and gets 86 sixes.

- After 50 rolls the relative frequency is 14/50 = 0.28.
- After 500 rolls it is 86/500 = 0.172.
- A fair dice gives 1/6 ≈ 0.167. The 500-roll estimate is better because it uses more trials. It is close to 1/6, so there is no strong evidence that the dice is biased.

A **frequency tree** records how a group splits in two stages. Numbers, not probabilities, go on the branches.

**Worked example 3.** 240 people visit a museum. 3/8 are children and the rest are adults. 2/3 of the children and 40% of the adults buy something in the shop.

```
                    ┌── buy        60
      children 90 ──┤
                    └── no buy     30
240 ──┤
                    ┌── buy        60
      adults 150 ───┤
                    └── no buy     90
```

Children: 3/8 × 240 = 90, and 2/3 × 90 = 60 buy. Adults: 240 − 90 = 150, and 0.4 × 150 = 60 buy. So P(a visitor chosen at random buys something) = 120/240 = **1/2**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-probability--10-frequency-tree-museum.webp" width="900" height="900" alt="A two-stage frequency tree: 240 visitors split into 90 children (3/8) and 150 adults (5/8). 60 children buy and 30 do not; 60 adults buy and 90 do not. In total 120 of 240 buy, so P(buys) = 1/2." loading="lazy">
  <figcaption>A frequency tree records numbers of people, not probabilities, on the branches.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--04-relative-frequency.webp" width="900" height="740" alt="A graph of relative frequency of a 4 against spins: 0.5 at 10, 0.38 at 50, 0.37 at 100 and 0.355 at 200. It falls then levels off, so more trials give a more reliable estimate." loading="lazy">
  <figcaption>With more trials the relative frequency settles, so use the estimate from the most trials.</figcaption>
</figure>


## Expected outcomes and fairness (P2)

If an event has probability p and you repeat the experiment n times:

`expected number of times = p × n`

This is what you *expect* on average. It is not a guarantee, and it does not have to be a whole number.

**Worked example 4.** The probability of winning a fairground game is 0.15. Ali plays 60 times. The expected number of wins is 0.15 × 60 = **9**.

A dice, coin or spinner is **fair** (unbiased) if every outcome is equally likely. To judge fairness, compare the relative frequency from many trials with the theoretical probability.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--06-expected-frequency.webp" width="900" height="990" alt="Three bars with the expected share shaded: a fair ten-sided dice rolled 150 times gives 45 multiples of 3; a spinner with P(4) 0.355 spun 600 times gives 213; a town of 18400 adults with probability 0.065 gives 1196 cyclists." loading="lazy">
  <figcaption>Expected frequency is probability times number of trials, an average rather than an exact result.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--05-fair-or-biased.webp" width="900" height="850" alt="Bar chart of relative frequencies after 200 spins: 1 is 0.155, 2 is 0.26, 3 is 0.23, 4 is 0.355. A dashed line at 0.25 shows a fair spinner. Scores 1 and 4 are far from it, which suggests bias." loading="lazy">
  <figcaption>Results far from 0.25 after many spins suggest, but do not prove, a biased spinner.</figcaption>
</figure>


## Sample spaces and systematic listing (P6, P7)

A **sample space** lists every possible outcome. For two experiments together, a grid is the clearest way.

**Worked example 5.** A fair four-sided spinner (1 to 4) and a fair three-sided spinner (1 to 3) are spun. The two scores are multiplied.

```
 ×  |  1   2   3
----+------------
 1  |  1   2   3
 2  |  2   4   6
 3  |  3   6   9
 4  |  4   8  12
```

There are 4 × 3 = 12 equally likely outcomes. 8 products are even, so P(even) = 8/12 = **2/3**. Three products are greater than 6 (8, 9, 12), so P(product > 6) = 3/12 = **1/4**.

When listing combinations without a grid, fix the first item and run through all choices of the second, then move on. This stops you missing or repeating outcomes.

### Venn diagrams

A Venn diagram sorts items into overlapping sets inside a rectangle that holds everything.

**Worked example 6.** In a class of 40, 23 play football, 18 play tennis and 7 play both.

- Fill the overlap first: 7.
- Football only: 23 − 7 = 16. Tennis only: 18 − 7 = 11.
- Neither: 40 − (16 + 7 + 11) = 6. Write this outside both circles.
- P(neither) = 6/40 = **3/20**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--01-two-dice-sample-space.webp" width="900" height="925" alt="A 6 by 6 grid with die faces along both edges; each cell shows the total. The six cells totalling 7 form a diagonal and are highlighted, giving 6 out of 36 = 1/6." loading="lazy">
  <figcaption>A sample space diagram lists every equally likely outcome so you can count the favourable ones.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--03-venn-two-sets.webp" width="900" height="680" alt="Three copies of a Venn diagram of 32 club members (swim only 9, both 5, tennis only 11, neither 7). Shading shows plays tennis 16/32, exactly one sport 20/32 and neither 7/32." loading="lazy">
  <figcaption>Shade the region you want, add its counts, and divide by the total of 32.</figcaption>
</figure>


## Combined events and tree diagrams (P6, P8)

You must know these two results. They are not given in the exam.

| Rule | Use it when |
|---|---|
| P(A or B) = P(A) + P(B) − P(A and B) | "or" questions; if A and B are mutually exclusive, P(A and B) = 0 so you just add |
| P(A and B) = P(A given B) × P(B) | "and" questions; if A and B are independent, P(A given B) = P(A), so P(A and B) = P(A) × P(B) |

Check with the Venn example: P(football or tennis) = 23/40 + 18/40 − 7/40 = 34/40 = 17/20.

**Multiply along branches, add between branches.** On a tree diagram, each set of branches from one point must sum to 1.

**Independent events.** The first outcome does not change the second. The probability that a bus is late is 0.2 and the probability that it rains is 0.3, and you assume these are independent. P(late and rain) = 0.2 × 0.3 = 0.06. P(neither) = 0.8 × 0.7 = 0.56, so P(at least one) = 1 − 0.56 = 0.44.

**Dependent events.** The first outcome changes the second, as in picking "without replacement".

**Worked example 7.** A bag holds 5 red and 3 blue counters. Two are taken at random without replacement.

<!-- marlbridge-diagram:maths-b14-probability-tree-without-replacement -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-b14-probability-tree-without-replacement.svg" aria-label="Open full-size diagram: maths-b14-probability-tree-without-replacement"><img src="/images/learning/mathematics/maths-b14-probability-tree-without-replacement.svg" width="1600" height="1050" alt="Builds the 5-red, 3-blue source tree, checks outcome probabilities sum to one, and derives the conditional probability that both are red given the same colour." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Builds the 5-red, 3-blue source tree, checks outcome probabilities sum to one, and derives the conditional probability that both are red given the same colour. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-b14-probability-tree-without-replacement -->

```
First        Second        Outcome   Probability
             R  4/7   →    RR        5/8 × 4/7 = 20/56
R  5/8  ──<
             B  3/7   →    RB        5/8 × 3/7 = 15/56
             R  5/7   →    BR        3/8 × 5/7 = 15/56
B  3/8  ──<
             B  2/7   →    BB        3/8 × 2/7 =  6/56
```

The four outcomes total 56/56 = 1, which is a useful check.

- P(same colour) = 20/56 + 6/56 = 26/56 = **13/28**.
- P(at least one blue) = 1 − P(RR) = 1 − 20/56 = 36/56 = **9/14**.

"Know the underlying assumptions" (P8) means you should be able to say why you multiplied: the counters are picked at random, and for independent events one result does not affect the other.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-probability--11-addition-rule-overlap.webp" width="900" height="910" alt="A Venn diagram of a class of 40 shows 16, 7, 11 and 6. Bars for football (23) and tennis (18) overlap by 7, who are counted twice. Subtracting 7 gives 34, so P(football or tennis) = 34/40 = 17/20." loading="lazy">
  <figcaption>Add the two probabilities, then subtract the overlap that was counted twice.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--02-tree-with-replacement.webp" width="900" height="1070" alt="Bag of 5 red and 3 blue, two draws with replacement. Branches are 5/8 and 3/8 both times; ends RR 25/64, RB 15/64, BR 15/64, BB 9/64. One of each is 15/64+15/64 = 15/32." loading="lazy">
  <figcaption>With replacement the second branches repeat the first; multiply along paths and add the paths you want.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--03-tree-without-replacement.webp" width="900" height="1020" alt="Same bag, first counter not replaced. After a red, 4 red and 3 blue remain (4/7, 3/7); after a blue, 5 red and 2 blue remain (5/7, 2/7). Both red is 5/8 x 4/7 = 5/14." loading="lazy">
  <figcaption>Without replacement the second branches change because the bag has one fewer counter.</figcaption>
</figure>


## Conditional probability (P9) -- Higher tier only

"The probability of A **given** B" means you already know B has happened. The group you are choosing from shrinks to B only.

`P(A given B) = P(A and B) ÷ P(B)`

This is the second formula above, rearranged.

**From a two-way table.** 120 students: 70 in Year 10 (28 walk to school) and 50 in Year 11 (15 walk).

|  | Walk | Other | Total |
|---|---|---|---|
| Year 10 | 28 | 42 | 70 |
| Year 11 | 15 | 35 | 50 |
| Total | 43 | 77 | 120 |

A student who walks is chosen at random. P(Year 11 given walks) = 15/43. The denominator is the **walk total**, 43, not 120.

**From a Venn diagram.** In worked example 6, a footballer is chosen. P(plays tennis given plays football) = 7/23.

**From a tree diagram.** In worked example 7, given that both counters are the same colour, P(both red) = (20/56) ÷ (26/56) = **10/13**.

Expected frequencies make this easier to see. Imagine 56 repeats: about 20 give RR and 6 give BB, so 20 of the 26 "same colour" results are red.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-probability--12-conditional-from-tree-56.webp" width="900" height="888" alt="Imagine the two-counter experiment 56 times: 20 tries give two red, 6 give two blue and 30 give one of each. Of the 26 tries with matching colours, 20 are both red, so P(both red given same colour) = 20/26 = 10/13." loading="lazy">
  <figcaption>Expected frequencies from 56 tries make a conditional probability a simple count.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--04-conditional-venn.webp" width="900" height="910" alt="Venn diagram of 40 students: 12 French only, 6 both, 8 Spanish only, 14 neither. Given French, the sample space is the 18 in the French circle; 6 also study Spanish, so 6/18 = 1/3." loading="lazy">
  <figcaption>Given a condition, only the part of the diagram that satisfies it counts.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--05-conditional-table.webp" width="900" height="780" alt="Two-way table of 60 students: boys 14 walk and 16 bus, girls 18 walk and 12 bus. Given a walker, use the walk column total 32; 18 are girls, so 18/32 = 9/16." loading="lazy">
  <figcaption>From a table, the given condition picks one row or column as the whole sample space.</figcaption>
</figure>


## Calculator and non-calculator

Probability can appear on Paper 1, so you must add, subtract and multiply fractions by hand. On Papers 2 and 3 a calculator helps with decimals, but keep exact fractions until the end and give a fraction answer unless the question asks for a decimal.

## Common errors

- Adding probabilities along a tree branch instead of multiplying.
- Not changing the denominator on the second pick without replacement (writing 4/8 instead of 4/7).
- Adding "or" probabilities when the events overlap, so the overlap is counted twice.
- Using 120 (the grand total) instead of the row or column total for a "given" question.
- Putting the "both" number into each circle as well as the overlap in a Venn diagram.
- Writing "3 : 5" or "3 out of 8" as a probability. Write 3/8.
- Giving a probability greater than 1 and not noticing.

## Frequently asked questions

**What is relative frequency?**
Relative frequency is the number of times an outcome happened divided by the number of trials. It is an estimate of the probability, and it becomes more reliable with more trials.

**How do you calculate expected outcomes in probability?**
Multiply the probability by the number of trials. The answer is an average over many repeats, so it does not have to be a whole number.

**How do you fill in a Venn diagram from totals?**
Put the number in both sets into the overlap first, subtract it from each set total to get the only regions, then subtract everything inside the circles from the grand total to get the region outside.

**How much of AQA GCSE Maths is probability and statistics?**
Probability and statistics together make up about 15% of the marks at both Foundation and Higher tier in AQA GCSE Mathematics 8300.

## Next steps

Condense this into the [revision notes](/resources/aqa-gcse-maths-8300-probability-revision-notes/), then test yourself with the [practice questions](/resources/aqa-gcse-maths-8300-probability-practice/). The [AQA GCSE Mathematics hub](/boards/aqa/gcse/mathematics/) links the other topics.

## Official syllabus

AQA GCSE Mathematics (8300) specification, for teaching from September 2015, exams from May/June 2017, version 1.0, published by AQA -- section 3.5 Probability (P1 to P9) and Appendix: mathematical formulae.
