---
title: "OCR A Level Mathematics A: Probability: Venn and tree diagrams, conditional probability and modelling (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths H240 Probability Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Probability: Venn and tree diagrams, conditional probability and modelling"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 126
syllabusTopics:
  - qualification: "a-level"
    topic: "statistics-ocr-alevel-maths"
    subtopic: "probability-ocr-alevel-maths"
description: "Condensed revision notes for OCR A Level Maths A (H240) probability: formulae, method steps, self-test and common slips for 2.03a to 2.03e."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense section 2.03 Probability of the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. For full explanations and worked examples, read the [study guide](/resources/ocr-a-level-mathematics-probability-venn-and-tree-diagrams-conditional/). When you are ready, try the [practice questions](/resources/ocr-a-level-mathematics-probability-venn-and-tree-diagrams-conditional-practice/).

Stage 1 content (2.03a, 2.03b) is shared with AS. Content marked **A Level only** is Stage 2 (2.03c to 2.03e). Course hub: [/boards/ocr/a-level/mathematics/](/boards/ocr/a-level/mathematics/). Printable checklist: [/checklists/ocr/a-level/mathematics/](/checklists/ocr/a-level/mathematics/). Find weak spots with the [free diagnostics](/diagnostics/).

## Notation

| Symbol | Meaning |
|---|---|
| P(A) | probability of event A |
| A' | A does not happen, P(A') = 1 − P(A) |
| P(X = 2), P(X = x) | probability that the random variable X takes that value |
| A ∩ B | A and B both happen |
| A ∪ B | A or B or both happen |
| A \| B (A Level only) | A given that B has happened |

## Formulae

| Result | Stage | When to use |
|---|---|---|
| Probabilities of all outcomes add to 1 | 1 | finding an unknown constant in a distribution |
| P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | A Level only | any two events, with an overlap |
| Mutually exclusive: P(A ∩ B) = 0 | 1 | events that cannot occur together |
| Independent: P(A ∩ B) = P(A) × P(B) | 1 | events that do not affect each other |
| P(A ∩ B) = P(A) × P(B \| A) | A Level only | multiplying along a tree |
| P(A \| B) = P(A ∩ B) / P(B) | A Level only | restricting to B |

Independence also means P(B \| A) = P(B). The specification excludes using the conditional formula to find P(A | B) from P(B | A).

## Must-know distinctions

- **Mutually exclusive** means no overlap. **Independent** means no influence. Two events with non-zero probabilities cannot be both.
- P(A | B) is a share of B. P(B | A) is a share of A. They are usually different.
- "At least one" is nearly always easiest as 1 − P(none).
- Without replacement means the second-stage branches depend on the first outcome. With replacement, or from a very large population, they are the same.

## Method boxes

**Test for independence**
1. Get P(A), P(B) and P(A ∩ B). If P(A ∪ B) is given, rearrange the union formula for the intersection.
2. Multiply P(A) by P(B).
3. Equal values mean independent. State the conclusion in a sentence.

**Venn diagram**
1. Start with the overlap.
2. Deduct the overlap from each group's count to get what lies in that group alone.
3. Neither = total − (all three other regions).
4. Probabilities are region counts divided by the total.

**Tree diagram**
1. Draw one stage at a time. Label each branch with its probability.
2. Check that the branches from each node add to 1.
3. Multiply along the branches to get a combined outcome.
4. Add the outcomes you want. Use 1 − (unwanted) when that is shorter.

**Conditional probability (A Level only)**
1. Identify the "given" event. It is the denominator.
2. Find P(both) from the table, Venn diagram or tree.
3. Divide. Simplify only at the end.

**Modelling comment**
1. Name the assumption (fair, independent, constant probability, replacement).
2. Say why it may fail in the context given.
3. State which way the answer would move.

## Choosing a diagram (Stage 1)

| Situation | Best tool | Why |
|---|---|---|
| Two stages, outcomes you can list | sample space table | each cell is one outcome, easy to count |
| Ordered stages, possibly dependent | tree diagram | branches carry the changing probabilities |
| Overlapping groups with a total | Venn diagram | the overlap and the "neither" region are visible |
| Counts in two categories | two-way table | rows and columns give conditional probabilities directly |

## Small worked reminders

**Union and independence.** P(A) = 0.35, P(B) = 0.4, P(A ∪ B) = 0.6.

```
P(A ∩ B) = 0.35 + 0.4 − 0.6 = 0.15
P(A) × P(B) = 0.14
```

0.15 ≠ 0.14, so A and B are not independent.

**Without replacement.** A bag has 5 blue and 3 pink beads. Two are taken without replacement.

```
P(same colour) = 5/8 × 4/7 + 3/8 × 2/7 = 20/56 + 6/56 = 26/56 = 13/28
```

**Conditional from a table.** Of 100 students, 45 play chess and 18 play both chess and a second game.

```
P(second game | chess) = 18/45 = 2/5
```

**Venn diagram with a total.** Of 64 volunteers, 30 help with setup (S), 25 with catering (C) and 9 do both.

```
S only = 30 − 9 = 21     C only = 25 − 9 = 16     both = 9
Neither = 64 − (21 + 9 + 16) = 18
P(S ∪ C) = 46/64 = 23/32
```

**Distribution link.** P(X = x) = k/x for x = 1, 2, 3, 6, and no other values.

```
k(1 + 1/2 + 1/3 + 1/6) = 2k = 1, so k = 1/2
P(X = 3) = 1/6
```

**Dependent chain.** If P(late today) = 0.1, P(late tomorrow | late today) = 0.5 and P(late tomorrow | on time today) = 0.05:

```
P(late both days) = 0.1 × 0.5 = 0.05
P(late tomorrow) = 0.05 + 0.9 × 0.05 = 0.095
```

An independence model with 0.095 each day would give 0.1 × 0.095 = 0.0095 for both days, much lower than 0.05. This shows how ignoring dependence can understate a joint probability.

**Reading a two-way table.** Of 80 members, 50 are adults. Of the 50 adults, 20 own a bike. Of the 30 children, 24 own one.

```
P(bike) = 44/80 = 11/20
P(adult | bike) = 20/44 = 5/11
P(bike | child) = 24/30 = 4/5
```

**Modelling check.** Sampling two students from 1200, of whom 540 are girls.

```
Exact: 540/1200 × 539/1199 = 0.2023
Independent model: 0.45 × 0.45 = 0.2025
```

The gap is tiny because the population is large. With 12 students the same idea would be much less accurate.

## Stage map

| Reference | Topic | Stage |
|---|---|---|
| 2.03a | mutually exclusive, independent, notation, link to distributions | 1 |
| 2.03b | tree, sample space and Venn diagrams | 1 |
| 2.03c | conditional probability from diagrams and tables; two formulae | A Level only |
| 2.03d | conditional probability from first principles | A Level only |
| 2.03e | modelling and critique of assumptions | A Level only |

## Quick self-test

1. Events C and D cannot happen together, with P(C) = 0.35 and P(D) = 0.2. Find P(C ∪ D).
2. P(A) = 0.35, P(B) = 0.4, P(A ∪ B) = 0.6. Find P(A ∩ B).
3. P(A) = 0.4 and P(A ∩ B) = 0.12. Find P(B | A).
4. Two beads are taken without replacement from 5 blue and 3 pink. Find P(one of each colour).
5. P(B) = 0.45 and P(A ∩ B) = 0.18. Find P(A | B).
6. P(A) = 0.7, P(B | A) = 0.2 and P(B | A') = 0.5. Find P(B).
7. Each of four items independently fails a check with probability 0.1. Find P(at least one fails).
8. P(X = x) = k(x + 2) for x = 0, 1, 2, 3. Find k and P(X ≤ 1).
9. P(A) = 0.3, P(B) = 0.6 and P(A ∩ B) = 0.18. Are A and B independent? Find P(A' | B).
10. A model treats ten days of weather as independent with the same chance of rain each day. State one reason that this may be unrealistic.

### Answers

1. 0.35 + 0.2 = **0.55**.
2. 0.35 + 0.4 − 0.6 = **0.15**.
3. 0.12 / 0.4 = **0.3**.
4. 2 × 5/8 × 3/7 = 30/56 = **15/28**.
5. 0.18 / 0.45 = **0.4**.
6. 0.7 × 0.2 + 0.3 × 0.5 = 0.14 + 0.15 = **0.29**.
7. 1 − 0.9⁴ = 1 − 0.6561 = **0.3439**.
8. 14k = 1 so **k = 1/14**; P(X ≤ 1) = 2/14 + 3/14 = **5/14**.
9. 0.3 × 0.6 = 0.18 = P(A ∩ B), so **independent**. P(A' | B) = P(A' ∩ B)/P(B) = (0.6 − 0.18)/0.6 = **0.7**.
10. For example, wet days tend to come in spells, so rain on one day makes rain the next day more likely. The days are not independent.

## Where marks are usually lost

- Writing "independent" because the numbers look similar, with no product test shown.
- Adding probabilities for events that overlap, or forgetting to subtract P(A ∩ B).
- Using the first-stage denominator again on the second stage of a without-replacement tree.
- Putting the wrong event in the denominator of a conditional probability.
- Stopping at an unsimplified or mis-copied fraction when the question asks for an exact value.
- Giving a decimal that has been rounded early, so the independence test fails by a small amount.
- Missing the "neither" region in a Venn diagram, so the regions do not total the full sample.
- Answering a modelling question with "not realistic" and no named assumption or direction of effect.
- Leaving out the final conclusion in words when the question asks you to decide or comment.

## Official syllabus

OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR. Section 2.03 Probability.
