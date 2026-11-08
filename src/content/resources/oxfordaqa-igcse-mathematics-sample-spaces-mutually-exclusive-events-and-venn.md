---
title: "OxfordAQA International GCSE Mathematics: Sample spaces, mutually exclusive events and Venn probability (9260)"
seoTitle: "OxfordAQA IGCSE Maths Sample Spaces and Venn Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Sample spaces, mutually exclusive events and Venn diagram probability"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9260"]
syllabusSeries: "Version 5.1 (for exams May/June 2018 onwards)"
order: 101
syllabusTopics:
  - qualification: "igcse"
    topic: "statistics-and-probability-oxfordaqa-igcse-maths"
    subtopic: "probability-oxfordaqa-igcse-maths"
description: "A study guide to sample spaces, mutually exclusive events and Venn diagram probability for OxfordAQA International GCSE Mathematics, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This study guide is written for OxfordAQA International GCSE Mathematics (9260), using the specification Version 5.1 (for exams May/June 2018 onwards). It covers references S14, S15 and S16 in section 3.4.3 Probability: sample spaces, mutually exclusive and exhaustive outcomes, and Venn diagrams for probabilities. All three are Core content, which the specification says can also be assessed on the Extension Tier papers, so there is nothing here that is Extension only. Use the [OxfordAQA International GCSE Mathematics hub](/boards/oxfordaqa/igcse/mathematics/) and the [checklist](/checklists/oxfordaqa/igcse/mathematics/) to see where this fits, and try the free [10-minute diagnostics](/diagnostics/) to find weak spots.

The probability scale, relative frequency and expected frequency are separate references, as are independent events, tree diagrams and conditional probability. They are not taught here.

## What this unit covers

| Reference | What you must be able to do |
|---|---|
| S14 | Understand and use sample spaces for single events and for two successive events |
| S15 | Identify mutually exclusive and exhaustive outcomes, and know that the probabilities of all such outcomes sum to 1 |
| S15 | Know and use P(A ∪ B) = P(A) + P(B) when events A and B are mutually exclusive |
| S16 | Understand and use Venn diagrams to work out probabilities |

Related pages: the [revision notes](/resources/oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn-revision-notes/) condense this guide, and the [practice questions](/resources/oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn-practice/) test it. Fraction and decimal work is covered in the [Number revision notes](/resources/igcse-oxfordaqa-mathematics-number-revision-notes/).

## S14: Sample spaces

A **sample space** lists every outcome an experiment could have. If all of those outcomes are equally likely:

```
P(event) = (outcomes that give the event) / (all outcomes)
```

The words "equally likely" matter. A list of outcomes is only a useful sample space if you can trust that condition.

### Single events

**Worked example 1.** A bag holds 3 red tiles, 2 blue tiles and 1 green tile. One tile is taken at random. Find P(blue) and P(not red).

Listing the colours gives red, blue, green. That is 3 outcomes, but they are not equally likely, so 1/3 would be wrong. Label every tile instead:

```
R1  R2  R3  B1  B2  G
```

There are 6 equally likely outcomes. Two are blue, so P(blue) = 2/6 = 1/3. Three are not red (B1, B2, G), so P(not red) = 3/6 = 1/2.

### Two successive events

For two events, one after the other, a **two-way table** (grid) lists every pair. Put the first event down the side and the second across the top. The number of outcomes is the product of the numbers of outcomes of each event.

**Worked example 2.** A fair spinner has five equal sections numbered 1 to 5. It is spun twice and the score is the first number minus the second. Find P(score is 0) and P(score is at least 2).

The grid has 5 × 5 = 25 cells. Scores can be negative.

| First \ Second | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| 1 | 0 | −1 | −2 | −3 | −4 |
| 2 | 1 | 0 | −1 | −2 | −3 |
| 3 | 2 | 1 | 0 | −1 | −2 |
| 4 | 3 | 2 | 1 | 0 | −1 |
| 5 | 4 | 3 | 2 | 1 | 0 |

The score 0 sits on the diagonal, 5 cells, so P(0) = 5/25 = 1/5. Scores of at least 2 are 2, 3, 4, 2, 3, 2, which is 6 cells, so P(at least 2) = 6/25.

**Worked example 3.** A fair six-sided die is rolled and then a fair coin is tossed. Find P(a prime number and tails) and P(heads and a number greater than 4).

Write each outcome as a pair, such as (3, T). There are 6 × 2 = 12 outcomes. The primes are 2, 3 and 5, so the outcomes with a prime and tails are (2, T), (3, T) and (5, T). That is 3 out of 12, which is 1/4. Heads with a number greater than 4 gives (5, H) and (6, H), which is 2 out of 12 = 1/6.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn--11-samp-spinner-difference-grid.webp" width="900" height="910" alt="A 5 by 5 grid of scores, first spin minus second spin. The five cells on the diagonal score 0, so P(0) = 5/25 = 1/5. Six cells score 2 or more: 2, 3, 4, 2, 3, 2, so P(at least 2) = 6/25." loading="lazy">
  <figcaption>Each cell is one equally likely outcome of two spins; count the cells that match the event.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn--12-samp-die-and-coin.webp" width="900" height="630" alt="A grid of 12 outcome pairs, die number 1 to 6 across and heads or tails down. Prime with tails is (2,T), (3,T), (5,T), which is 3 of 12 or 1/4. Heads with a number greater than 4 is (5,H) and (6,H), which is 2 of 12 or 1/6." loading="lazy">
  <figcaption>Writing every pair shows 6 × 2 = 12 equally likely outcomes.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--01-two-dice-sample-space.webp" width="900" height="925" alt="A 6 by 6 grid with die faces along both edges; each cell shows the total. The six cells totalling 7 form a diagonal and are highlighted, giving 6 out of 36 = 1/6." loading="lazy">
  <figcaption>A sample space diagram lists every equally likely outcome so you can count the favourable ones.</figcaption>
</figure>


### Successive events without replacement

If the first item is not put back, the same item cannot appear twice. The grid then has a blank diagonal, or you list ordered pairs.

**Worked example 4.** Cards numbered 1, 3, 4 and 6 are shuffled. Two are taken one after the other and not replaced. Find P(the cards add to 7) and P(both are odd).

The first card can be any of 4 and the second any of the other 3, so there are 4 × 3 = 12 ordered pairs:

```
(1,3) (1,4) (1,6)
(3,1) (3,4) (3,6)
(4,1) (4,3) (4,6)
(6,1) (6,3) (6,4)
```

A total of 7 comes from (1,6), (6,1), (3,4) and (4,3), so P = 4/12 = 1/3. Both odd means (1,3) or (3,1), so P = 2/12 = 1/6.

Order matters here: (1,6) and (6,1) are different outcomes, and both are in the list.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn--06-without-replacement-grid.webp" width="900" height="1060" alt="A 4 by 4 grid for cards numbered 1, 3, 4 and 6 drawn one after another without replacement. The diagonal cells are crossed out because the same card cannot be drawn twice. The 12 remaining cells show the totals. Four of them, from the pairs 1 and 6, 6 and 1, 3 and 4, 4 and 3, equal 7, so the probability is 4 over 12, one third." loading="lazy">
  <figcaption>Grid for four cards with the diagonal removed.</figcaption>
</figure>


## S15: Mutually exclusive and exhaustive outcomes

Two events are **mutually exclusive** if they cannot happen at the same time. A set of outcomes is **exhaustive** if at least one of them must happen. A set can be both.

For a die:

- "Prime" (2, 3, 5) and "square" (1, 4) are mutually exclusive. No number is both.
- "Even" (2, 4, 6) and "prime" (2, 3, 5) are not mutually exclusive, because 2 is in both.
- "Even" and "odd" are mutually exclusive and exhaustive. Every number is exactly one of them.
- "Prime" and "even" are not exhaustive. The number 1 is neither.

### The two key results

If a list of outcomes is mutually exclusive and exhaustive, their probabilities sum to 1. Two consequences follow:

```
P(not A) = 1 − P(A)

P(A ∪ B) = P(A) + P(B)    (only when A and B are mutually exclusive)
```

The symbol A ∪ B means "A or B (or both)". The second result adds probabilities, so it can only be used when there is no overlap to count twice.

**Worked example 5.** A fair die is rolled. Event A is "prime" and event B is "square". Find P(A or B). Then try the same sum with A and "even".

A and B are mutually exclusive, so P(A or B) = 3/6 + 2/6 = 5/6. Check by listing: 1, 2, 3, 4, 5 gives 5 outcomes out of 6.

Now take "prime" and "even". Adding gives 3/6 + 3/6 = 1, but the outcome 1 cannot be prime or even. Listing the outcomes that are prime or even gives 2, 3, 4, 5, 6, so the true probability is 5/6. The addition rule failed because the events share the outcome 2.

**Worked example 6.** A biased spinner has four colours. P(red) = x, P(green) = 2x, P(yellow) = 0.1 and P(blue) = 0.3. Find x, then P(red or blue) and P(not green).

The colours are mutually exclusive and exhaustive, so the probabilities sum to 1:

```
x + 2x + 0.1 + 0.3 = 1
3x + 0.4 = 1
3x = 0.6
x = 0.2
```

So P(red) = 0.2, P(green) = 0.4. Red and blue are mutually exclusive, so P(red or blue) = 0.2 + 0.3 = 0.5. Then P(not green) = 1 − 0.4 = 0.6.

**Worked example 7.** Two mutually exclusive events have P(A) = 3/8 and P(B) = 1/4. Find P(A or B), then the probability that neither happens.

P(A or B) = 3/8 + 2/8 = 5/8. The probability of neither is 1 − 5/8 = 3/8.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn--05-mutually-exclusive-die.webp" width="900" height="890" alt="Two Venn diagrams of the numbers on a die. Top: prime numbers 2, 3, 5 and square numbers 1, 4 do not overlap, so adding 3 sixths and 2 sixths gives the correct 5 sixths. Bottom: prime numbers and even numbers 2, 4, 6 overlap at 2, so adding gives 1, which is wrong because the number 1 is neither. The true probability is 5 sixths." loading="lazy">
  <figcaption>Prime/square versus prime/even Venn diagrams.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--02-adds-to-one.webp" width="900" height="850" alt="Two bars of length 1. The spinner bar is red 0.35, blue 0.2, green x, yellow 2x, so x = 0.15 and yellow 0.3. The rain bar is 35 percent rain and 65 percent no rain." loading="lazy">
  <figcaption>All the probabilities of one event add to 1, so not happening is 1 minus happening.</figcaption>
</figure>


## S16: Venn diagrams

A **Venn diagram** shows how a group is split by two or more properties. The rectangle is everything being considered. Each circle is one property. Overlapping circles show items with both properties. Items in no circle go inside the rectangle but outside the circles.

A Venn diagram can show counts or probabilities. Either way, **fill in the overlap first**, then work outwards. The numbers in all regions must give the total (or 1 for probabilities).

### Venn diagrams with counts

**Worked example 8.** Of 60 people, 28 drink tea, 35 drink coffee and 11 drink neither. Find P(coffee only).

Start with the people who drink at least one: 60 − 11 = 49. Adding 28 + 35 = 63 counts the "both" group twice, so:

```
both = 28 + 35 − 49 = 14
tea only = 28 − 14 = 14
coffee only = 35 − 14 = 21
neither = 11
```

| Region | Tea only | Both | Coffee only | Neither |
|---|---|---|---|---|
| People | 14 | 14 | 21 | 11 |

The regions total 14 + 14 + 21 + 11 = 60. So P(coffee only) = 21/60 = 7/20.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--03-venn-two-sets.webp" width="900" height="680" alt="Three copies of a Venn diagram of 32 club members (swim only 9, both 5, tennis only 11, neither 7). Shading shows plays tennis 16/32, exactly one sport 20/32 and neither 7/32." loading="lazy">
  <figcaption>Shade the region you want, add its counts, and divide by the total of 32.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-sets--03-unknown-overlap.webp" width="900" height="1010" alt="Two Venn diagrams of 50 tourists. First the regions are written with x for the overlap (31−x, x, 27−x, x÷2); solving gives x = 16. Then the filled counts 15, 16, 11 and 8 add to 50." loading="lazy">
  <figcaption>Call the overlap x, write each region in terms of x, then solve.</figcaption>
</figure>


### Venn diagrams with probabilities

**Worked example 9.** For a customer, P(buys A) = 0.5, P(buys B) = 0.4 and P(buys neither) = 0.2. Find P(buys both) and P(buys exactly one).

P(buys at least one) = 1 − 0.2 = 0.8. So P(both) = 0.5 + 0.4 − 0.8 = 0.1. Then A only = 0.5 − 0.1 = 0.4 and B only = 0.4 − 0.1 = 0.3. The regions are 0.4, 0.1, 0.3 and 0.2, which sum to 1. P(exactly one) = 0.4 + 0.3 = 0.7.

Notice that A and B are not mutually exclusive here, because P(both) is not zero.

### Sorting numbers

**Worked example 10.** The whole numbers 1 to 28 are sorted by A = factors of 28 and B = prime numbers. Find P(neither).

Factors of 28: 1, 2, 4, 7, 14, 28 (6 numbers). Primes up to 28: 2, 3, 5, 7, 11, 13, 17, 19, 23 (9 numbers). In both: 2 and 7.

| Region | Numbers | Count |
|---|---|---|
| A only | 1, 4, 14, 28 | 4 |
| Both | 2, 7 | 2 |
| B only | 3, 5, 11, 13, 17, 19, 23 | 7 |
| Neither | 6, 8, 9, 10, 12, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27 | 15 |

The counts total 28. P(neither) = 15/28.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn--13-samp-venn-factors-primes.webp" width="900" height="1010" alt="A Venn diagram of the numbers 1 to 28. Factors of 28 only: 1, 4, 14, 28. Both factors of 28 and prime: 2 and 7. Primes only: 3, 5, 11, 13, 17, 19, 23. In neither set, outside the circles: 15 numbers. The regions total 28, so P(neither) = 15/28." loading="lazy">
  <figcaption>Test every number for both properties: 4 + 2 + 7 + 15 = 28, so P(neither) = 15/28.</figcaption>
</figure>


### Three sets

The same method works for three circles. Fill in the centre first (in all three), then the regions shared by exactly two sets, then the sets alone.

**Worked example 11.** In a year group of 40, 20 play football, 17 play cricket and 14 play hockey. Three play all three sports, 5 play football and cricket only, 4 play football and hockey only, and 2 play cricket and hockey only. Find the number who play none, and P(exactly two sports).

```
football only = 20 − 3 − 5 − 4 = 8
cricket only  = 17 − 3 − 5 − 2 = 7
hockey only   = 14 − 3 − 4 − 2 = 5
```

Adding all seven regions: 8 + 7 + 5 + 5 + 4 + 2 + 3 = 34. So 40 − 34 = 6 play none.

Exactly two sports means 5 + 4 + 2 = 11 pupils, so P = 11/40.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-sets--05-three-set-venn.webp" width="900" height="990" alt="A three-circle Venn diagram of 60 students with all eight regions filled: 9, 10, 9 only; 10, 8, 7 for pairs; 2 for all three; 5 for none. Circle totals are 28, 30 and 26." loading="lazy">
  <figcaption>Fill the centre first; the eight regions then add to 60.</figcaption>
</figure>


## Common errors

- Listing colours or categories as the sample space when they are not equally likely (worked example 1).
- Treating (1, 6) and (6, 1) as one outcome, or leaving out repeated pairs such as (3, 3) when the item is replaced.
- Using a grid of the wrong size. Two spins of a 5-section spinner give 25 cells, not 10.
- Adding P(A) and P(B) when the events overlap, as with "even" and "prime".
- Saying events are mutually exclusive because their probabilities add to less than 1. Check whether they can both happen.
- Writing the totals 28 and 35 straight into the circles and forgetting that the overlap is counted in both.
- Leaving out the number outside the circles, so the regions do not add to the total.

## Next steps

Condense this with the [revision notes](/resources/oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn-revision-notes/), then work through the [practice questions](/resources/oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn-practice/). Tick off S14 to S16 on the [checklist](/checklists/oxfordaqa/igcse/mathematics/), and take a [free diagnostic](/diagnostics/) for a check on the wider topic.

## Frequently asked questions

**What is a sample space in probability?**
A sample space lists every outcome an experiment could have. If all those outcomes are equally likely, the probability of an event is the number of favourable outcomes divided by the total.

**Are (1, 6) and (6, 1) the same outcome?**
No. For two successive events they are different ordered outcomes and both must be counted. With replacement, repeated pairs such as (3, 3) also count.

**How many cells does a grid for two spins of a 5-section spinner have?**
It has 5 × 5 = 25 cells, not 10. Using a grid of the wrong size is a common error.

**Does P(A) + P(B) being less than 1 mean the events are mutually exclusive?**
No. Mutually exclusive means the events cannot happen together, so check whether any outcome is in both. "Even" and "prime" on a die are not mutually exclusive because 2 is in both.

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), Version 5.1 (for exams May/June 2018 onwards), published by OxfordAQA, section 3.4.3 Probability, references S14 to S16.
