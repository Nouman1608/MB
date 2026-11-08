---
title: "AQA GCSE Mathematics 8300: Probability -- Revision Notes"
seoTitle: "AQA GCSE Maths 8300 Probability Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA GCSE Maths 8300 Probability revision notes: key rules, tree and Venn methods, a quick self-test with answers and common mark losses."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-09-27
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29."
---

These revision notes cover Topic 5, **Probability** (P1 to P9), of the AQA GCSE Mathematics (8300) specification, for teaching from September 2015 with exams from May/June 2017 (version 1.0). P1 to P8 are for Foundation and Higher tier; P9 (conditional probability) is Higher tier only. Probability can appear on the non-calculator Paper 1 or on the calculator Papers 2 and 3, in the May/June and November series.

For full explanations and worked examples, read the [Probability study guide](/resources/aqa-gcse-maths-8300-probability/). When you are ready, try the [Probability practice questions](/resources/aqa-gcse-maths-8300-probability-practice/). The [AQA GCSE Mathematics hub](/boards/aqa/gcse/mathematics/), the [printable checklist](/checklists/aqa/gcse/mathematics/) and the [free diagnostics](/diagnostics/) help you plan what to revise next.

## Key words

| Term | Meaning |
|---|---|
| Outcome | One possible result of an experiment |
| Event | One or more outcomes, e.g. "an even number" |
| Sample space | A list, table or grid of every possible outcome |
| Exhaustive | The outcomes cover everything that can happen |
| Mutually exclusive | The events cannot happen at the same time |
| Independent | One event does not change the probability of the other |
| Dependent | One event changes the probability of the other (e.g. no replacement) |
| Fair / unbiased | Every outcome is equally likely |
| Relative frequency | Times the outcome happened ÷ number of trials |
| Expected frequency | Probability × number of trials |

Write probabilities as fractions, decimals or percentages. Never as a ratio.

## Formulas you must know (P3, P4, P8, P9)

The "or" rule and the "and" rule are in the specification's list of formulae you must know or be able to derive. None of these is printed on the exam paper.

| Formula | Notes |
|---|---|
| P(not A) = 1 − P(A) | Exhaustive outcomes sum to 1 (P4) |
| P(A) = number of favourable outcomes ÷ total outcomes | Only for equally likely outcomes (P7) |
| Expected number = P(A) × n | n = number of trials (P2, P3) |
| P(A or B) = P(A) + P(B) − P(A and B) | If mutually exclusive, P(A and B) = 0 |
| P(A and B) = P(A given B) × P(B) | If independent, this is P(A) × P(B) |
| P(A given B) = P(A and B) ÷ P(B) | Higher tier only (P9) |

## Relative frequency and sample size (P1, P3, P5)

- Relative frequency estimates a probability from an experiment.
- More trials give a more reliable estimate (P5). Always use the largest set of results.
- To test whether something is fair, compare the relative frequency after many trials with the theoretical probability.
- A frequency tree holds **counts** on its branches. Start with the total at the left, split it, then split each branch again.

Small reminder: a biased spinner lands on 3 in 45 out of 300 spins. The relative frequency is 45/300 = 0.15. If it is spun another 200 times, you would expect about 0.15 × 200 = 30 threes.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-probability--10-frequency-tree-museum.webp" width="900" height="900" alt="A two-stage frequency tree: 240 visitors split into 90 children (3/8) and 150 adults (5/8). 60 children buy and 30 do not; 60 adults buy and 90 do not. In total 120 of 240 buy, so P(buys) = 1/2." loading="lazy">
  <figcaption>A frequency tree records numbers of people, not probabilities, on the branches.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--04-relative-frequency.webp" width="900" height="740" alt="A graph of relative frequency of a 4 against spins: 0.5 at 10, 0.38 at 50, 0.37 at 100 and 0.355 at 200. It falls then levels off, so more trials give a more reliable estimate." loading="lazy">
  <figcaption>With more trials the relative frequency settles, so use the estimate from the most trials.</figcaption>
</figure>


## Expected outcomes and fairness (P2)

- Expected number = probability × number of trials. It is an average over many repeats, so it can be a decimal such as 12.5.
- If a question asks "how many times would you expect…", give a number of times, not a probability.
- For a game, expected outcomes can be turned into money: expected number of wins × prize, compared with the total paid to play.
- "Fair" means equally likely outcomes. A single short run of results cannot prove a dice is biased; a large number of trials gives better evidence.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--06-expected-frequency.webp" width="900" height="990" alt="Three bars with the expected share shaded: a fair ten-sided dice rolled 150 times gives 45 multiples of 3; a spinner with P(4) 0.355 spun 600 times gives 213; a town of 18400 adults with probability 0.065 gives 1196 cyclists." loading="lazy">
  <figcaption>Expected frequency is probability times number of trials, an average rather than an exact result.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--05-fair-or-biased.webp" width="900" height="850" alt="Bar chart of relative frequencies after 200 spins: 1 is 0.155, 2 is 0.26, 3 is 0.23, 4 is 0.355. A dashed line at 0.25 shows a fair spinner. Scores 1 and 4 are far from it, which suggests bias." loading="lazy">
  <figcaption>Results far from 0.25 after many spins suggest, but do not prove, a biased spinner.</figcaption>
</figure>


## Listing combinations systematically (P6)

- Fix the first choice and run through every option for the second, then move the first choice on.
- For three items A, B, C in order there are 6 arrangements: ABC, ACB, BAC, BCA, CAB, CBA.
- For a meal of one of 3 starters and one of 4 mains, there are 3 × 4 = 12 combinations. This product rule for counting (spec N5) is Higher tier only; at Foundation, check by listing.

## Method in steps: sample-space grid (P6, P7)

1. Write the outcomes of the first experiment down the side and the second across the top.
2. Fill every cell with the combined result (sum, product, difference or pair).
3. Count the total cells. This is the denominator.
4. Count the cells that match the event. This is the numerator.
5. Simplify the fraction.

Example: two fair dice give 36 cells. The sum 9 comes from (3,6), (4,5), (5,4), (6,3), so P(sum 9) = 4/36 = 1/9.

## Method in steps: Venn diagram (P6, P9)

1. Put the "both" number in the overlap first.
2. Subtract it from each set total to get the "only" regions.
3. Subtract everything inside the circles from the grand total to get the region outside.
4. Check that all regions add up to the grand total.
5. For "given" questions, the denominator is the total of the circle you are told about (Higher tier only).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-probability--11-addition-rule-overlap.webp" width="900" height="910" alt="A Venn diagram of a class of 40 shows 16, 7, 11 and 6. Bars for football (23) and tennis (18) overlap by 7, who are counted twice. Subtracting 7 gives 34, so P(football or tennis) = 34/40 = 17/20." loading="lazy">
  <figcaption>Add the two probabilities, then subtract the overlap that was counted twice.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--03-venn-two-sets.webp" width="900" height="680" alt="Three copies of a Venn diagram of 32 club members (swim only 9, both 5, tennis only 11, neither 7). Shading shows plays tennis 16/32, exactly one sport 20/32 and neither 7/32." loading="lazy">
  <figcaption>Shade the region you want, add its counts, and divide by the total of 32.</figcaption>
</figure>


## Method in steps: tree diagram (P8)

1. Write probabilities on each branch. Each pair from one point sums to 1.
2. Without replacement, take 1 off the total for the second pick, and take 1 off the colour already chosen.
3. Multiply along the branches to get each outcome.
4. Add the outcomes that fit the event.
5. For "at least one", use 1 − P(none).

Small reminder: a bag holds 3 green and 2 white beads. Two are taken without replacement. P(both white) = 2/5 × 1/4 = 2/20 = 1/10.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--02-adds-to-one.webp" width="900" height="850" alt="Two bars of length 1. The spinner bar is red 0.35, blue 0.2, green x, yellow 2x, so x = 0.15 and yellow 0.3. The rain bar is 35 percent rain and 65 percent no rain." loading="lazy">
  <figcaption>All the probabilities of one event add to 1, so not happening is 1 minus happening.</figcaption>
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

- "Given" cuts the sample space down to the group you know about.
- Two-way table: use the row or column total as the denominator, not the grand total.
- Tree diagram: P(first was A given the outcome) = (probability of the path you want) ÷ (sum of all paths that give that outcome).
- Thinking in expected frequencies helps: turn probabilities into counts out of, say, 100 or 1000, then read off the fraction.

Small reminder: 60% of pupils take the bus and 25% of bus users arrive late. Overall, 20% of pupils arrive late. Out of 100 pupils, 60 take the bus and 15 of those are late, while 20 pupils in total are late. So P(took the bus given late) = 15/20 = 0.75.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-probability--12-conditional-from-tree-56.webp" width="900" height="888" alt="Imagine the two-counter experiment 56 times: 20 tries give two red, 6 give two blue and 30 give one of each. Of the 26 tries with matching colours, 20 are both red, so P(both red given same colour) = 20/26 = 10/13." loading="lazy">
  <figcaption>Expected frequencies from 56 tries make a conditional probability a simple count.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--01-probability-scale.webp" width="900" height="840" alt="A bag of 20 beads (4 green, 6 yellow, 10 white) above a number line from 0 impossible to 1 certain. A black bead sits at 0, a white bead at 0.5 and the event not green at 0.8. The left half is unlikely and the right half likely." loading="lazy">
  <figcaption>Probabilities run from 0 (impossible) to 1 (certain), with 0.5 an even chance.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--04-conditional-venn.webp" width="900" height="910" alt="Venn diagram of 40 students: 12 French only, 6 both, 8 Spanish only, 14 neither. Given French, the sample space is the 18 in the French circle; 6 also study Spanish, so 6/18 = 1/3." loading="lazy">
  <figcaption>Given a condition, only the part of the diagram that satisfies it counts.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--05-conditional-table.webp" width="900" height="780" alt="Two-way table of 60 students: boys 14 walk and 16 bus, girls 18 walk and 12 bus. Given a walker, use the walk column total 32; 18 are girls, so 18/32 = 9/16." loading="lazy">
  <figcaption>From a table, the given condition picks one row or column as the whole sample space.</figcaption>
</figure>


## Must-know distinctions

| This | Is not the same as |
|---|---|
| Mutually exclusive: cannot both happen, so P(A and B) = 0 | Independent: can both happen, and P(A and B) = P(A) × P(B) |
| With replacement: branches repeat | Without replacement: denominators drop by 1 |
| Relative frequency (from an experiment) | Theoretical probability (from equally likely outcomes) |
| Expected number (an average, may be a decimal) | What will actually happen |
| P(A and B) (out of everyone) | P(A given B) (out of B only) |

## Quick self-test

1. P(A) = 0.37. Find P(not A).
2. A fair spinner has five equal sectors, two of them red. It is spun 80 times. How many reds do you expect?
3. A coin lands heads 58 times in 100 throws. Write the relative frequency of heads as a decimal.
4. A fair coin is thrown and a fair dice is rolled. How many outcomes are in the sample space?
5. Two fair dice are rolled. Find P(the sum is 9).
6. A and B are mutually exclusive. P(A) = 0.2 and P(B) = 0.45. Find P(A or B).
7. A and B are independent. P(A) = 0.4 and P(B) = 0.3. Find P(A and B).
8. A bag holds 3 green and 2 white beads. Two are taken without replacement. Find P(both white).
9. P(A) = 0.5, P(B) = 0.4 and P(A and B) = 0.15. Find P(A or B).
10. (Higher tier only) P(A and B) = 0.18 and P(B) = 0.6. Find P(A given B).
11. (Higher tier only) In a class, 12 girls and 9 boys wear glasses. A pupil who wears glasses is chosen at random. Find the probability that it is a girl.

### Answers

1. 1 − 0.37 = **0.63**
2. 2/5 × 80 = **32**
3. 58/100 = **0.58**
4. 2 × 6 = **12**
5. 4/36 = **1/9**
6. 0.2 + 0.45 = **0.65**
7. 0.4 × 0.3 = **0.12**
8. 2/5 × 1/4 = **1/10**
9. 0.5 + 0.4 − 0.15 = **0.75**
10. 0.18 ÷ 0.6 = **0.3**
11. 12/(12 + 9) = 12/21 = **4/7**

## Where marks are usually lost

- Adding along the branches of a tree diagram instead of multiplying.
- Keeping the same denominator on the second pick when there is no replacement.
- Using P(A) + P(B) for events that overlap, which counts P(A and B) twice.
- Giving an expected frequency as a probability (writing 0.15 instead of 9 wins).
- Using a relative frequency from a small number of trials when a larger set is given.
- Leaving an unfinished calculation, such as 20/56 + 6/56, without adding and simplifying.
- Writing a probability as a ratio or as "3 in 8".
- In a Venn diagram, forgetting the region outside the circles.
- (Higher tier only) Dividing by the grand total instead of the "given" total in a conditional question.

## Frequently asked questions

**Can you write a probability as a ratio?**
No. Write probabilities as fractions, decimals or percentages, never as a ratio or in the form 3 in 8.

**Why do more trials give a better estimate of probability?**
Relative frequency from more trials is more reliable, so always use the largest set of results available when estimating a probability.

**How do you find P(A or B) when the events overlap?**
Use P(A or B) = P(A) + P(B) − P(A and B). Adding P(A) and P(B) alone counts the overlap twice.

**Do you need to remember the probability formulas for AQA GCSE Maths?**
Yes. The or rule and the and rule are on the AQA 8300 list of formulae you must know or be able to derive; they are not given in the exam.

## Official syllabus

AQA GCSE Mathematics (8300) specification, for teaching from September 2015, exams from May/June 2017, version 1.0, published by AQA -- section 3.5 Probability (P1 to P9) and Appendix: mathematical formulae.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--01-two-dice-sample-space.webp" width="900" height="925" alt="A 6 by 6 grid with die faces along both edges; each cell shows the total. The six cells totalling 7 form a diagonal and are highlighted, giving 6 out of 36 = 1/6." loading="lazy">
  <figcaption>A sample space diagram lists every equally likely outcome so you can count the favourable ones.</figcaption>
</figure>

