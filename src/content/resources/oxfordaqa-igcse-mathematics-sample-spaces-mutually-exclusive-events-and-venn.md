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

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), Version 5.1 (for exams May/June 2018 onwards), published by OxfordAQA, section 3.4.3 Probability, references S14 to S16.
