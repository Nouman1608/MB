---
title: "OxfordAQA International AS and A-level Mathematics: Probability laws, conditional probability and independence (9660)"
seoTitle: "OxfordAQA Maths 9660 Probability Laws Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Probability laws, conditional probability and independence"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 183
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-s1-statistics-oxfordaqa-alevel-maths"
    subtopic: "s1-further-probability-oxfordaqa-alevel-maths"
description: "Study guide to OxfordAQA International AS and A-level Mathematics S1.1: probability laws, conditional probability and independence, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide is aligned to the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, and covers section S1.1 (Further probability). The specification states that this content is part of International AS, Unit PSM1, and it gives no further tier labels. The spec says only simple problems will be set, solved by direct use of the laws, by counting equally likely outcomes, or by frequency tables. Tree and Venn diagrams are permitted but not required.

Related pages: [revision notes](/resources/oxfordaqa-a-level-mathematics-probability-laws-conditional-probability-and-revision-notes/), [practice questions](/resources/oxfordaqa-a-level-mathematics-probability-laws-conditional-probability-and-practice/), the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/). A related statistics topic is [Bernoulli and binomial distributions](/resources/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions/).

## What S1.1 asks you to do

| Content | What you must be able to do |
|---|---|
| Elementary probability | Assign probabilities from relative frequencies or equally likely outcomes; understand set notation |
| Addition law | Use P(A ∪ B) = P(A) + P(B) − P(A ∩ B) for two events; use P(A ∪ B) = P(A) + P(B) for mutually exclusive events; use P(A') = 1 − P(A) |
| Multiplication law and conditional probability | Use P(A ∩ B) = P(A) × P(B | A) = P(B) × P(A | B) |
| Independent events | Use P(A ∩ B) = P(A) × P(B), and test whether events are independent |
| Application | Solve simple problems by counting, frequency tables and relative frequency tables |

## 1. Events and equally likely outcomes

An **event** is a set of outcomes from a random experiment. Its probability is a number from 0 to 1.

When all outcomes are equally likely:

P(A) = (number of outcomes in A) / (total number of outcomes)

When outcomes are not equally likely, use **relative frequency**: P(A) is estimated by (number of times A occurred) / (number of trials). More trials give a more reliable estimate.

Set notation you need to read:

| Symbol | Meaning |
|---|---|
| A ∪ B | A or B or both |
| A ∩ B | A and B |
| A' | not A (the complement) |
| P(B | A) | probability of B given that A has happened |

The spec says set notation must be understood but its use is not essential. You can write "A or B" in words, provided your meaning is clear.

## 2. Addition law and complements

For any two events:

P(A ∪ B) = P(A) + P(B) − P(A ∩ B)

You subtract P(A ∩ B) because outcomes in both events have been counted twice.

Events are **mutually exclusive** if they cannot happen together, so P(A ∩ B) = 0. The law then becomes P(A ∪ B) = P(A) + P(B). For mutually exclusive events the spec allows this for two or more events: add all the separate probabilities.

For the complement: P(A') = 1 − P(A). It is often quicker to find the probability that something does not happen, for example "at least one" = 1 − "none".

**Worked example 1.** A card is chosen at random from cards numbered 1 to 20. A is "the number is a multiple of 3" and B is "the number is even". Find P(A ∪ B) and P(A').

```
A = {3, 6, 9, 12, 15, 18}      so 6 outcomes
B = {2, 4, ..., 20}            so 10 outcomes
A ∩ B = {6, 12, 18}            so 3 outcomes
P(A ∪ B) = 6/20 + 10/20 − 3/20 = 13/20
P(A')    = 1 − 6/20 = 14/20 = 7/10
```

Check by counting: 6 + 10 − 3 = 13 numbers are in A or B. The result is consistent.

## 3. Frequency tables

A two-way frequency table lets you read probabilities straight from the counts. Always check which total you divide by.

**Worked example 2.** A café records 250 orders.

| | Hot drink | Cold drink | Total |
|---|---|---|---|
| Dine in | 70 | 30 | 100 |
| Takeaway | 85 | 65 | 150 |
| Total | 155 | 95 | 250 |

Find (a) P(takeaway), (b) P(hot drink and takeaway), (c) P(hot drink given takeaway).

```
(a) P(takeaway) = 150/250 = 3/5
(b) P(hot and takeaway) = 85/250 = 17/50
(c) P(hot | takeaway) = 85/150 = 17/30
```

In (c) the word "given" restricts you to the takeaway row. The denominator is 150, not 250.

## 4. Conditional probability and the multiplication law

The multiplication law is

P(A ∩ B) = P(A) × P(B | A) = P(B) × P(A | B)

Rearranged, it gives the conditional probability:

P(B | A) = P(A ∩ B) / P(A)

The spec also allows the law for two or more events. For three events:

P(A ∩ B ∩ C) = P(A) × P(B | A) × P(C | A ∩ B)

This is how you handle selection **without replacement**: after each pick, the numbers left change, so later probabilities are conditional.

**Worked example 3.** P(A) = 0.45, P(B) = 0.35 and P(A ∪ B) = 0.6. Find P(A | B) and P(B | A).

```
P(A ∩ B) = P(A) + P(B) − P(A ∪ B) = 0.45 + 0.35 − 0.6 = 0.2
P(A | B) = 0.2 / 0.35 = 4/7
P(B | A) = 0.2 / 0.45 = 4/9
```

Notice that P(A | B) and P(B | A) are different. The condition decides the denominator.

**Worked example 4.** A box holds 9 components, 3 of which are faulty. Three are taken at random without replacement. Find the probability that (a) all three are faulty, (b) none is faulty, (c) at least one is faulty.

```
(a) 3/9 × 2/8 × 1/7 = 6/504 = 1/84
(b) 6/9 × 5/8 × 4/7 = 120/504 = 5/21
(c) 1 − 5/21 = 16/21
```

Part (c) uses the complement. Listing every way to get at least one faulty component would take far longer.

## 5. Independent events

Events A and B are **independent** if knowing that one has happened does not change the probability of the other. Then P(B | A) = P(B), and the multiplication law becomes

P(A ∩ B) = P(A) × P(B)

The spec allows this for two or more events. Independence is tested by checking whether this equation holds.

**Worked example 5.** Using the café table in example 2, are "hot drink" and "takeaway" independent?

```
P(hot) × P(takeaway) = 155/250 × 150/250 = 0.62 × 0.6 = 0.372
P(hot and takeaway)  = 85/250 = 0.34
0.372 ≠ 0.34, so the events are not independent.
```

Takeaway customers are slightly less likely than average to order a hot drink.

**Worked example 6.** A part passes three independent checks, with probabilities 0.95, 0.9 and 0.8 of passing. Find the probability that it (a) passes all three, (b) fails at least one.

```
(a) 0.95 × 0.9 × 0.8 = 0.684
(b) 1 − 0.684 = 0.316
```

## 6. Mutually exclusive is not the same as independent

These ideas are often confused.

| | Mutually exclusive | Independent |
|---|---|---|
| Meaning | Cannot both happen | One does not affect the other |
| Test | P(A ∩ B) = 0 | P(A ∩ B) = P(A) × P(B) |
| Union | P(A) + P(B) | P(A) + P(B) − P(A) × P(B) |

If P(A) and P(B) are both greater than 0 and the events are mutually exclusive, then P(A ∩ B) = 0 but P(A) × P(B) > 0. So such events are never independent. Knowing that one has occurred tells you the other has not.

**Worked example 7.** P(A) = 0.3 and P(B) = 0.5. Find P(A ∪ B) if the events are (a) mutually exclusive, (b) independent.

```
(a) 0.3 + 0.5 = 0.8
(b) P(A ∩ B) = 0.3 × 0.5 = 0.15
    P(A ∪ B) = 0.3 + 0.5 − 0.15 = 0.65
```

## 7. Finding an unknown probability

When a question gives independence and a union, form an equation.

**Worked example 8.** A and B are independent, P(A) = 0.6 and P(A ∪ B) = 0.82. Find P(B).

```
Let P(B) = p.
0.82 = 0.6 + p − 0.6p
0.22 = 0.4p
p = 0.55
```

Check: P(A ∩ B) = 0.6 × 0.55 = 0.33, and 0.6 + 0.55 − 0.33 = 0.82, as required.

## Common errors

- **Dividing by the wrong total.** In "given" questions, divide by the total for the condition only.
- **Adding probabilities for events that overlap.** Subtract P(A ∩ B), or you will count shared outcomes twice.
- **Treating "mutually exclusive" as "independent".** They are different, and non-zero exclusive events are never independent.
- **Not updating after a pick.** Without replacement, both the numerator and the denominator change.
- **Claiming independence without a test.** Show that P(A ∩ B) equals P(A) × P(B) with numbers.
- **Giving probabilities above 1.** If you get one, a union or overlap has been mishandled. Stop and re-check.
- **Rounding too early.** Keep exact fractions or full decimals until the final line.

## Using this guide

Work through each example without looking at the solution, then do the [practice questions](/resources/oxfordaqa-a-level-mathematics-probability-laws-conditional-probability-and-practice/). If you want a short recall sheet, use the [revision notes](/resources/oxfordaqa-a-level-mathematics-probability-laws-conditional-probability-and-revision-notes/). For exam technique across the whole course, see [exam preparation for OxfordAQA A-level Mathematics](/resources/oxfordaqa-a-level-mathematics-exam-preparation/).

The spec says students may use relevant formulae from the formulae booklet without proof, so check your own copy of the booklet to see which probability results it gives you. Learn all the laws above regardless.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA. This guide covers section S1.1 (Further probability) of Unit PSM1, for International AS exams from May/June 2018 and International A-level exams from May/June 2019.
