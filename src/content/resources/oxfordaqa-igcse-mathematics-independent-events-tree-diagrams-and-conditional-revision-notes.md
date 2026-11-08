---
title: "OxfordAQA International GCSE Mathematics: Independent events, tree diagrams and conditional probability (9260) -- Revision Notes"
seoTitle: "OxfordAQA IGCSE Maths Tree Diagrams Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Independent events, tree diagrams and conditional probability"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9260"]
syllabusSeries: "Version 5.1 (for exams May/June 2018 onwards)"
order: 102
syllabusTopics:
  - qualification: "igcse"
    topic: "statistics-and-probability-oxfordaqa-igcse-maths"
    subtopic: "probability-oxfordaqa-igcse-maths"
description: "Condensed revision notes on independent events, tree diagrams and conditional probability for OxfordAQA International GCSE Mathematics, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense the [study guide](/resources/oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional/) for the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1 (for exams May/June 2018 onwards). They cover section 3.4.3 Probability, statements S17 and S18, which are both **Extension only**. Practise afterwards with the [practice questions](/resources/oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional-practice/). Course pages: the [OxfordAQA IGCSE Mathematics hub](/boards/oxfordaqa/igcse/mathematics/) and the [checklist](/checklists/oxfordaqa/igcse/mathematics/). To find your weak spots first, use the [free 10-minute diagnostics](/diagnostics/).

## Statement map

| Statement | Skill | Tier |
|---|---|---|
| S17 | Probability of independent combined events, including tree diagrams and other representations | Extension only |
| S17 | P(A ∩ B) = P(A) × P(B) for independent A and B | Extension only |
| S18 | Conditional probabilities, including tree diagrams and other representations | Extension only |

## Key definitions

| Term | Meaning |
|---|---|
| Independent events | Knowing that one has happened leaves the probability of the other unchanged |
| A ∩ B | Both A and B happen |
| Complement | P(not A) = 1 − P(A) |
| Conditional probability | The probability of an event given that another has happened, written P(A given B) |
| With replacement | The item goes back, so later probabilities stay the same |
| Without replacement | The item stays out, so later probabilities change |

## Independent events: the rule

```
P(A ∩ B) = P(A) × P(B)   whenever A and B are independent
```

- "And" means multiply. Extend to three or more independent events by multiplying every probability.
- To test independence, multiply P(A) by P(B) and check the result against P(A ∩ B). A match means independent.
- "At least one" is usually 1 − P(none). Find P(none) by multiplying the complements.
- "Exactly one" means add the separate ways, each of which is a product.

**Worked reminder.** Two machines work independently. Machine 1 runs with probability 0.8 and machine 2 with probability 0.7.

```
P(both run)    = 0.8 × 0.7 = 0.56
P(neither run) = 0.2 × 0.3 = 0.06
P(at least one runs) = 1 − 0.06 = 0.94
P(exactly one runs)  = 0.8 × 0.3 + 0.2 × 0.7 = 0.24 + 0.14 = 0.38
```

Check: 0.56 + 0.06 + 0.38 = 1, so every case is counted once.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional--05-p-two-alarms-areas.webp" width="900" height="970" alt="A unit square split by clock 1 (0.9 on time) and clock 2 (0.85 on time) into four regions: both 0.765, clock 1 only 0.135, clock 2 only 0.085, neither 0.015. Exactly one is 0.22 and at least one is 1 minus 0.015 = 0.985." loading="lazy">
  <figcaption>Multiplying probabilities for independent events gives the four regions 0.765, 0.135, 0.085 and 0.015.</figcaption>
</figure>


## Tree diagrams: method in steps

1. Draw one set of branches for each stage, left to right.
2. Write a probability on every branch. Branches from one point must add to 1.
3. Multiply the branch probabilities on one path to get that outcome.
4. Add the paths that match the question.
5. Check that all end-of-path probabilities add to 1.

### Replacement or not

| | With replacement | Without replacement |
|---|---|---|
| Second-stage probabilities | Same as the first stage | Change after the first pick |
| Denominator at stage 2 | Same total | Total reduced by 1 |
| Independent stages? | Yes | No |
| Typical wording | "replaced", "put back", "returned" | "not replaced", "kept", "two are chosen together" |

"Two are chosen together" or "two are picked at once" is treated as without replacement.

**Worked reminder (without replacement).** A bag holds 11 counters: 3 red and 8 blue. Two are taken without replacement.

```
P(red, red)   = 3/11 × 2/10 = 6/110 = 3/55
P(blue, blue) = 8/11 × 7/10 = 56/110 = 28/55
P(same)       = 3/55 + 28/55 = 31/55
P(different)  = 1 − 31/55 = 24/55
Check by paths: 3/11 × 8/10 + 8/11 × 3/10 = 24/110 + 24/110 = 48/110 = 24/55
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional--06-u-tree-sweets.webp" width="900" height="890" alt="Two-stage tree for 6 mint and 4 fruit sweets put back each time. Paths: MM 9/25, MF 6/25, FM 6/25, FF 4/25. Same flavour 13/25, different 12/25." loading="lazy">
  <figcaption>With replacement, both stages use 3/5 and 2/5: same flavour is 13/25, different is 12/25.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional--07-u-tree-pens.webp" width="900" height="960" alt="Tree for 7 blue and 5 yellow pens kept out. Paths: BB 42/132, BY 35/132, YB 35/132, YY 20/132. Both blue 7/22, different 35/66, at least one blue 28/33." loading="lazy">
  <figcaption>Without replacement the second-stage fractions change: both blue is 7/22, at least one blue is 28/33.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional--08-u-reverse-pens-grid.webp" width="900" height="792" alt="A 12 by 12 grid of ordered pen pairs with the 12 same-pen cells empty, leaving 132. The 7 blue-second columns hold 77 cells, 42 with a blue first pen, so the probability is 42/77 = 6/11." loading="lazy">
  <figcaption>Of the 77 equally likely cells with a blue second pen, 42 have a blue first pen: 42/77 = 6/11.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--02-tree-with-replacement.webp" width="900" height="1070" alt="Bag of 5 red and 3 blue, two draws with replacement. Branches are 5/8 and 3/8 both times; ends RR 25/64, RB 15/64, BR 15/64, BB 9/64. One of each is 15/64+15/64 = 15/32." loading="lazy">
  <figcaption>With replacement the second branches repeat the first; multiply along paths and add the paths you want.</figcaption>
</figure>


## Other representations

- **Two-way table**: ideal for conditional probability. Read the given row or column total as the new total.
- **Sample space grid**: lists every outcome of two independent events with equally likely outcomes. Count favourable outcomes over total outcomes.
- **Organised lists**: write the paths in a fixed order so none is missed or repeated.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--01-two-dice-sample-space.webp" width="900" height="925" alt="A 6 by 6 grid with die faces along both edges; each cell shows the total. The six cells totalling 7 form a diagonal and are highlighted, giving 6 out of 36 = 1/6." loading="lazy">
  <figcaption>A sample space diagram lists every equally likely outcome so you can count the favourable ones.</figcaption>
</figure>


## Conditional probability: method in steps

1. Find the "given" event. It follows the word "given" or "if".
2. Restrict attention to outcomes where the given event happens. That is your new total.
3. Count or calculate the part of that total where the other event also happens.
4. Divide: P(A | B) = P(A ∩ B) ÷ P(B).

### From a tree

The second-stage branch is already a conditional probability. The branch from "rain" to "late" is P(late | rain). To reverse it:

```
P(rain | late) = P(rain and late) ÷ P(late)
P(late) = sum of every path that ends in "late"
```

**Worked reminder.** Frost has probability 0.4. With frost, a car fails to start with probability 0.2. Without frost, it fails with probability 0.05.

```
P(frost and fails)    = 0.4 × 0.2  = 0.08
P(no frost and fails) = 0.6 × 0.05 = 0.03
P(fails) = 0.08 + 0.03 = 0.11
P(frost | fails) = 0.08 ÷ 0.11 = 8/11
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional--06-p-reverse-tree-rain-late.webp" width="900" height="820" alt="A tree for rain (0.3) and the train being late (0.5 after rain, 0.1 without). The late paths 0.15 and 0.07 are highlighted and a bar of 0.22 shows the rain share, so P(rain | late) = 15/22." loading="lazy">
  <figcaption>P(rain | late) is the rain share of all the paths that end in late: 0.15 out of 0.22.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional--07-p-three-day-tree.webp" width="900" height="914" alt="A three-stage tree with eight paths for a train late with probability 0.2 on each of three days. The three paths with exactly one late day are highlighted at 0.128 each, giving 0.384; never late is 0.512." loading="lazy">
  <figcaption>Three stages multiply along three branches; exactly one late day can happen in three ways.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--03-tree-without-replacement.webp" width="900" height="1020" alt="Same bag, first counter not replaced. After a red, 4 red and 3 blue remain (4/7, 3/7); after a blue, 5 red and 2 blue remain (5/7, 2/7). Both red is 5/8 x 4/7 = 5/14." loading="lazy">
  <figcaption>Without replacement the second branches change because the bag has one fewer counter.</figcaption>
</figure>


### From a table

If 60 members are split into Adult and Junior with 24 Junior, and 9 of the Juniors play chess, then P(chess | Junior) = 9/24 = 3/8. The total used is 24, not 60.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--05-conditional-table.webp" width="900" height="780" alt="Two-way table of 60 students: boys 14 walk and 16 bus, girls 18 walk and 12 bus. Given a walker, use the walk column total 32; 18 are girls, so 18/32 = 9/16." loading="lazy">
  <figcaption>From a table, the given condition picks one row or column as the whole sample space.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--04-conditional-venn.webp" width="900" height="910" alt="Venn diagram of 40 students: 12 French only, 6 both, 8 Spanish only, 14 neither. Given French, the sample space is the 18 in the French circle; 6 also study Spanish, so 6/18 = 1/3." loading="lazy">
  <figcaption>Given a condition, only the part of the diagram that satisfies it counts.</figcaption>
</figure>


## Wording that tells you what to do

| Phrase in the question | What it usually means |
|---|---|
| "both", "and", "then" | Multiply along a path |
| "either", "or", "one of the following" | Add the separate paths |
| "at least one" | 1 − P(none) |
| "exactly one", "exactly two" | Add every arrangement, each one a product |
| "given that", "if", "knowing that" | Conditional: reduce the total |
| "replaced", "put back" | Same probabilities at every stage |
| "not replaced", "chosen together" | Totals reduce at each stage |

**Worked reminder (exactly two of three).** A basketball player scores each shot with probability 0.6, independently. Find the probability of scoring exactly two of three shots.

```
Each arrangement, such as score, score, miss: 0.6 × 0.6 × 0.4 = 0.144
There are 3 arrangements (the miss can be first, second or third).
P(exactly two) = 3 × 0.144 = 0.432
```

## Must-know distinctions

- **P(A | B) and P(B | A)** are usually different. Identify which event is given.
- **Independent and mutually exclusive** are different ideas. Independent events can both happen. Do not use one test for the other. Mutually exclusive events are taught in the sample spaces unit.
- **With and without replacement.** Only with replacement are stages independent.
- **Multiply along, add across.** Along one path multiply. Between paths add.
- **"At least one"** is the complement of "none".

## Quick self-test

1. Events G and H are independent with P(G) = 0.45 and P(H) = 0.2. Find P(G ∩ H).
2. Events C and D have P(C) = 0.5, P(D) = 0.3 and P(C ∩ D) = 0.2. Are they independent?
3. A fair coin is tossed three times. Find the probability of three tails.
4. Two independent switches work with probabilities 0.9 and 0.6. Find the probability that at least one works.
5. A bag holds 3 white and 7 black beads. Two are taken without replacement. Find the probability that both are white.
6. In the bag from question 5, find the probability that the second bead is black, given that the first was white.
7. In a group of 50 people, 30 have a bicycle and 12 of those also have a scooter. Find P(scooter | bicycle).
8. The probability of a delay is 0.4. If delayed, a meeting starts late with probability 0.7. If not delayed, with probability 0.2. Find P(meeting starts late).
9. Using question 8, find P(delayed | meeting starts late).
10. A tree diagram branch pair at one point has probabilities 0.35 and x. Find x.

### Answers

1. 0.45 × 0.2 = **0.09**
2. 0.5 × 0.3 = 0.15, which is not 0.2, so **not independent**.
3. (1/2)³ = **1/8**
4. P(neither) = 0.1 × 0.4 = 0.04, so P(at least one) = 1 − 0.04 = **0.96**
5. 3/10 × 2/9 = 6/90 = **1/15**
6. After a white bead, 9 remain: 2 white and 7 black, so **7/9**.
7. Given bicycle, the total is 30, so 12/30 = **2/5**.
8. 0.4 × 0.7 + 0.6 × 0.2 = 0.28 + 0.12 = **0.4**
9. 0.28 ÷ 0.4 = 0.7, so **7/10**
10. x = 1 − 0.35 = **0.65**

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional--04-p-independence-test.webp" width="900" height="1020" alt="Two unit squares showing the overlap area P(A) times P(B) beside the given P(A and B). C and D: 0.15 equals 0.15, independent. E and F: 0.15 does not equal 0.2, not independent." loading="lazy">
  <figcaption>A and B are independent only when P(A) × P(B) equals the given P(A ∩ B).</figcaption>
</figure>


## Where marks are usually lost

- Multiplying with the original total for the second pick when items are not replaced.
- Writing branch probabilities that do not add to 1 at a point.
- Stopping at one path when the question needs two or more paths added.
- Answering P(B | A) when the question asked for P(A | B).
- Using the grand total as the denominator for a conditional probability.
- Declaring events independent without showing the product comparison.
- Rounding a decimal part-way through, then losing accuracy in the final answer.
- Leaving "at least one" as a long list of paths and missing one, when 1 − P(none) was available.
- Giving a probability greater than 1 or below 0 and not noticing.

## Frequently asked questions

**What is the difference between with and without replacement?**
With replacement the item goes back, so the second-stage probabilities are the same as the first and the stages are independent. Without replacement the total drops by one after each pick, so the later probabilities change.

**How do you calculate conditional probability?**
Identify the "given" event, restrict attention to the outcomes where it happens to get the new total, then find the part of that total where the other event also happens. In symbols, P(A | B) = P(A ∩ B) ÷ P(B).

**Are independent and mutually exclusive events the same thing?**
No. Independent events can both happen, and knowing one has happened leaves the other's probability unchanged; mutually exclusive events cannot happen together. They need different tests.

**What does "exactly one" mean in a probability question?**
It means you add every separate way that exactly one event happens, where each way is a product of probabilities along a path. Counting only one of the cases is a common mistake.

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), specification Version 5.1, for exams May/June 2018 onwards, published by OxfordAQA. These notes follow section 3.4.3 Probability, statements S17 and S18.
