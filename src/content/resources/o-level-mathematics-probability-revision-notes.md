---
title: "Cambridge O Level Mathematics: Probability (4024) -- Revision Notes"
seoTitle: "O Level Maths 4024 Probability Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["o-levels"]
topic: "Probability"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 524
syllabusTopics:
  - qualification: "o-level"
    topic: "probability"
description: "Condensed revision notes for all of Probability in Cambridge O Level Mathematics 4024: formulas, methods, a quick self-test and common lost marks."
author: "marlbridge-academic-team"
publishedDate: 2026-10-25
featured: false
---
These revision notes are aligned to the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for examination in 2025, 2026 and 2027, and cover topic 8, Probability, sections 8.1 to 8.3. The syllabus is not tiered. For full explanations and worked examples, read the [study guide](/resources/o-level-mathematics-probability/) first, then test yourself on the [practice questions](/resources/o-level-mathematics-probability-practice/). Track progress with the [course hub](/boards/cambridge/o-level/mathematics/), the printable [checklist](/checklists/cambridge/o-level/mathematics/) and the free 10-minute [diagnostics](/diagnostics/).

## Key facts and formulas

| Idea | Rule |
|---|---|
| Scale | 0 is impossible, 1 is certain, all probabilities lie between 0 and 1 |
| Notation | P(A) is the probability of A, P(A′) is the probability of not A |
| Equally likely outcomes | P(A) = favourable outcomes / total outcomes |
| Complement | P(A′) = 1 − P(A) |
| Relative frequency | times it happened / number of trials |
| Expected frequency | probability × number of trials (or population) |
| Venn notation | P(A ∩ B) is "A and B", P(A ∪ B) is "A or B or both" |
| Venn count | n(A ∪ B) = n(A) + n(B) − n(A ∩ B) |
| Tree diagram | multiply along branches, add between paths |
| Check | all outcome probabilities add up to 1 |

Give answers as a fraction, decimal or percentage, which the syllabus accepts equally. Fractions are exact, so keep them unless the question asks for a decimal.

## 8.1 Introduction to probability

- Start with the total. Write the denominator first, then count the favourable outcomes.
- For tables and graphs, add up the whole table for the denominator. For Venn diagrams, the total includes the region outside the circles.
- Use the complement when the question says "not" or "at least one".

**Method for "at least one" in steps:**
1. Write the opposite event ("none").
2. Find the probability of "none".
3. Subtract from 1.

**Quick reminder.** A bag holds 20 cards, and 3 are blue. P(blue) = 3/20 = 0.15 = 15%. P(not blue) = 1 − 0.15 = 0.85, which is 17/20.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-mathematics-probability--03-club-table-bar-60.webp" width="900" height="780" alt="A bar of 60 members split into walk 21, bus 18, cycle 9 and car 12. P(bus) = 18/60 = 3/10 and P(not car) = 48/60 = 4/5, always over the whole 60." loading="lazy">
  <figcaption>The denominator is the whole 60, not the row you are looking at.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--01-probability-scale.webp" width="900" height="840" alt="A bag of 20 beads (4 green, 6 yellow, 10 white) above a number line from 0 impossible to 1 certain. A black bead sits at 0, a white bead at 0.5 and the event not green at 0.8. The left half is unlikely and the right half likely." loading="lazy">
  <figcaption>Probabilities run from 0 (impossible) to 1 (certain), with 0.5 an even chance.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--02-adds-to-one.webp" width="900" height="850" alt="Two bars of length 1. The spinner bar is red 0.35, blue 0.2, green x, yellow 2x, so x = 0.15 and yellow 0.3. The rain bar is 35 percent rain and 65 percent no rain." loading="lazy">
  <figcaption>All the probabilities of one event add to 1, so not happening is 1 minus happening.</figcaption>
</figure>


## 8.2 Relative and expected frequencies

- Relative frequency is an estimate. It improves as the number of trials grows.
- The relative frequencies for all outcomes add up to 1.
- To estimate how many times something will happen, multiply the probability by the number of trials.

**Method for expected frequency in steps:**
1. Find the probability, either from symmetry or from relative frequency.
2. Multiply by the number of trials or the size of the population.
3. Say the answer is an expectation, and round sensibly if it is a count of people or objects.

**Quick reminder.** In 120 trials a drawing pin lands point up 36 times. Relative frequency = 36/120 = 0.3. In 1500 more trials, expect 0.3 × 1500 = 450 to land point up.

### Fair, biased, random

| Word | Meaning |
|---|---|
| Fair | All outcomes are equally likely |
| Biased | Outcomes are not equally likely, some are favoured |
| Random | Chosen so each item has a chance and the choice cannot be predicted |

To argue a die is biased, compare each relative frequency with 1/6 and use numbers. More trials give a more convincing argument.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--04-relative-frequency.webp" width="900" height="740" alt="A graph of relative frequency of a 4 against spins: 0.5 at 10, 0.38 at 50, 0.37 at 100 and 0.355 at 200. It falls then levels off, so more trials give a more reliable estimate." loading="lazy">
  <figcaption>With more trials the relative frequency settles, so use the estimate from the most trials.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--06-expected-frequency.webp" width="900" height="990" alt="Three bars with the expected share shaded: a fair ten-sided dice rolled 150 times gives 45 multiples of 3; a spinner with P(4) 0.355 spun 600 times gives 213; a town of 18400 adults with probability 0.065 gives 1196 cyclists." loading="lazy">
  <figcaption>Expected frequency is probability times number of trials, an average rather than an exact result.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--05-fair-or-biased.webp" width="900" height="850" alt="Bar chart of relative frequencies after 200 spins: 1 is 0.155, 2 is 0.26, 3 is 0.23, 4 is 0.355. A dashed line at 0.25 shows a fair spinner. Scores 1 and 4 are far from it, which suggests bias." loading="lazy">
  <figcaption>Results far from 0.25 after many spins suggest, but do not prove, a biased spinner.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-probability-scale-relative-frequency-expected--03-prob-die-sixes.webp" width="900" height="990" alt="Bars compare expected sixes (120 x 1/6 = 20) with observed sixes (27), 7 more. A number line marks the fair value 0.167 and observed relative frequency 0.225. With only 120 rolls the difference could be chance; roll many more times." loading="lazy">
  <figcaption>27 sixes against 20 expected is not proof of bias from only 120 rolls.</figcaption>
</figure>


## 8.3 Combined events

### Sample space diagram

- List every outcome of the first event down the side and the second event across the top.
- Fill the table, count the cells that fit, and divide by the total number of cells.
- Use it only when outcomes are equally likely.

### Venn diagram

**Method in steps:**
1. Fill the overlap first.
2. Take the overlap away from each set total to get the "only" regions.
3. Put the people in neither set outside the circles.
4. Check the regions add up to the total.
5. Divide the region you want by the total.

**Quick reminder.** Total 40. n(A) = 22, n(B) = 15, n(A ∩ B) = 6, so n(A ∪ B) = 22 + 15 − 6 = 31 and neither = 40 − 31 = 9. Then P(A ∪ B) = 31/40 and P(A only) = 16/40 = 2/5.

With three sets, fill the region where all three overlap first, then the regions where exactly two overlap, then the regions for one set only. Finish with the region outside every circle. Example: 3 in all three sets and 7 in A and B means 4 in A and B only. Remember that P(A′) counts everything outside A, including the people in neither set.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-mathematics-probability--01-cafe-venn-probabilities.webp" width="900" height="1250" alt="A two-set Venn diagram of 50 people: tea only 20, both 8, coffee only 14, neither 8. Three small shaded copies show P(T and C) = 4/25, P(tea only) = 2/5 and P(T′) = 11/25." loading="lazy">
  <figcaption>Fill the Venn diagram from the middle outwards, then read each probability over 50.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-mathematics-probability--02-three-set-venn-40-pupils.webp" width="900" height="1030" alt="Three overlapping circles for chess 20, draughts 18 and go 15 among 40 pupils: all three 3, exactly two 4, 3 and 2, one only 10, 9 and 7, none 2. P(exactly one game) = 26/40 = 13/20." loading="lazy">
  <figcaption>Fill the centre first, then the pairs, then the single-set regions.</figcaption>
</figure>


### Tree diagram

**Method in steps:**
1. Draw one stage at a time and label each branch with its probability.
2. Check each set of branches from one point adds up to 1.
3. Write the outcome at the end of each path.
4. Multiply along each path you need.
5. Add the paths that give the event.

**Quick reminder.** On a school day the probability of a test is 0.4. If there is a test, the probability a pupil revises is 0.9. If not, it is 0.5. P(revises) = 0.4 × 0.9 + 0.6 × 0.5 = 0.36 + 0.30 = 0.66. The four paths give 0.36, 0.04, 0.30 and 0.30, which add to 1.

### With and without replacement

| | With replacement | Without replacement |
|---|---|---|
| Second-stage probabilities | Same as the first | Change, because the pool is smaller |
| Denominators | Same each time | Drop by one |
| Example, 4 red and 6 blue in a bag, P(two reds) | 4/10 × 4/10 = 4/25 | 4/10 × 3/9 = 2/15 |

**Quick reminder.** From the same bag of 4 red and 6 blue counters, without replacement, P(one of each colour) = 4/10 × 6/9 + 6/10 × 4/9 = 24/90 + 24/90 = 8/15.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-mathematics-probability--05-tree-changing-branches.webp" width="900" height="930" alt="A tree for a delayed train (0.2) then a late pupil: 0.7 if delayed, 0.05 if not. Paths give 0.14, 0.06, 0.04 and 0.76, adding to 1. The two late paths give P(late) = 0.18." loading="lazy">
  <figcaption>The second branches need not repeat: multiply along, add the paths you want, check the total is 1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-mathematics-probability--06-product-grid.webp" width="900" height="840" alt="A 3 by 4 grid of the 12 products of spinner and die. Five products are 6 or more (5/12). Four are odd, so the probability of an even product is 1 - 4/12 = 2/3." loading="lazy">
  <figcaption>List all 12 equally likely products, then count the cells you want.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--01-two-dice-sample-space.webp" width="900" height="925" alt="A 6 by 6 grid with die faces along both edges; each cell shows the total. The six cells totalling 7 form a diagonal and are highlighted, giving 6 out of 36 = 1/6." loading="lazy">
  <figcaption>A sample space diagram lists every equally likely outcome so you can count the favourable ones.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-sample-spaces-systematic-listing-product-rule-venn--06-two-spinners-grid.webp" width="900" height="1020" alt="Grid of the 12 sums of spinner A (1 to 4) and spinner B (2, 4, 6); four sums are at least 8 and six are even." loading="lazy">
  <figcaption>The sample space grid for Worked example 1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--03-venn-two-sets.webp" width="900" height="680" alt="Three copies of a Venn diagram of 32 club members (swim only 9, both 5, tennis only 11, neither 7). Shading shows plays tennis 16/32, exactly one sport 20/32 and neither 7/32." loading="lazy">
  <figcaption>Shade the region you want, add its counts, and divide by the total of 32.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-sets--05-three-set-venn.webp" width="900" height="990" alt="A three-circle Venn diagram of 60 students with all eight regions filled: 9, 10, 9 only; 10, 8, 7 for pairs; 2 for all three; 5 for none. Circle totals are 28, 30 and 26." loading="lazy">
  <figcaption>Fill the centre first; the eight regions then add to 60.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--03-tree-without-replacement.webp" width="900" height="1020" alt="Same bag, first counter not replaced. After a red, 4 red and 3 blue remain (4/7, 3/7); after a blue, 5 red and 2 blue remain (5/7, 2/7). Both red is 5/8 x 4/7 = 5/14." loading="lazy">
  <figcaption>Without replacement the second branches change because the bag has one fewer counter.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--02-tree-with-replacement.webp" width="900" height="1070" alt="Bag of 5 red and 3 blue, two draws with replacement. Branches are 5/8 and 3/8 both times; ends RR 25/64, RB 15/64, BR 15/64, BB 9/64. One of each is 15/64+15/64 = 15/32." loading="lazy">
  <figcaption>With replacement the second branches repeat the first; multiply along paths and add the paths you want.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-statistics-and-probability--10-stat-late-at-least-once.webp" width="900" height="900" alt="Higher tier. A two-day tree with late probability 0.2 and not late 0.8 each day. LL 0.04, LN 0.16, NL 0.16, NN 0.64. Late at least once is 0.04 + 0.16 + 0.16 = 0.36, or quicker 1 − 0.8 × 0.8 = 0.36." loading="lazy">
  <figcaption>1 − P(never late) is quicker than adding three routes.</figcaption>
</figure>


## Must-know distinctions

- **P(A) and P(A′).** They add up to 1, so one tells you the other.
- **Multiply and add.** Along one path, multiply. Between separate paths, add.
- **Union and intersection.** A ∪ B is in at least one set. A ∩ B is in both.
- **Probability and expected frequency.** A probability is a number from 0 to 1. An expected frequency is a count.
- **Relative frequency and theoretical probability.** The first comes from an experiment, the second from reasoning about equally likely outcomes.
- **Independent picks and dependent picks.** With replacement the second pick is unaffected. Without replacement it depends on the first.

## Quick self-test

1. A spinner has 8 equal sections, numbered 1 to 8. Find the probability of landing on a multiple of 3.
2. The probability that a bus arrives early is 0.15. Find the probability that it does not arrive early.
3. A coin is tossed 150 times and lands heads 66 times. Find the relative frequency of heads, as a decimal.
4. The probability that a plant seed does not germinate is 0.12. How many of 800 seeds should be expected to germinate?
5. Two fair spinners, each with sections 1, 2, 3 and 4, are spun and their scores added. Find the probability that the total is 4.
6. In a group of 40 people, 18 speak French, 14 speak German and 12 speak neither. How many speak both languages?
7. A bag has 6 yellow and 9 white counters. Without replacement, two are drawn out. Find P(both yellow).
8. From the same bag, find P(one yellow and one white).
9. A box has 2 faulty and 3 working lamps. Two are taken one after the other with replacement. Find the probability that at least one is faulty.
10. Explain why 7/5 cannot be a probability.

### Answers

1. Multiples of 3 are 3 and 6, so **2/8 = 1/4**.
2. 1 − 0.15 = **0.85**.
3. 66/150 = **0.44**.
4. P(germinate) = 0.88, and 0.88 × 800 = **704**.
5. The pairs giving 4 are (1,3), (2,2) and (3,1), out of 16, so **3/16**.
6. At least one language: 40 − 12 = 28. Then 18 + 14 − n(both) = 28, so n(both) = 32 − 28 = **4**.
7. 6/15 × 5/14 = 30/210 = **1/7**.
8. 6/15 × 9/14 + 9/15 × 6/14 = 54/210 + 54/210 = 108/210 = **18/35**.
9. P(no faulty) = 3/5 × 3/5 = 9/25, so P(at least one faulty) = 1 − 9/25 = **16/25**.
10. 7/5 is greater than 1, and no probability can exceed 1.

## Where marks are usually lost

- Writing the wrong denominator by using one row of a table instead of the whole table.
- Not reducing the total for the second pick when the question says without replacement.
- Adding probabilities along a branch instead of multiplying.
- Finding P(same colour) and forgetting to add the second colour's path.
- Forgetting the region outside the circles on a Venn diagram, so the total does not add up.
- Giving P(A ∪ B) as n(A) + n(B) without subtracting the overlap.
- Using the wrong probability in an expected-frequency question, such as that of the opposite event.
- Rounding a probability early, then giving an inexact final answer. Keep fractions until the end.
- Stating that a die is biased from a few throws, without quoting numbers.
- Writing an answer such as 5:2 instead of a fraction, decimal or percentage.

## Official syllabus

Cambridge O Level Mathematics (Syllabus D) 4024, syllabus for examination in 2025, 2026 and 2027, published by Cambridge University Press & Assessment.
