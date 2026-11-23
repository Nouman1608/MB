---
title: "Cambridge A Level Mathematics (9709): Probability"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 5 – Probability & Statistics 1"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 5.3
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "probability-cambridge-alevel-maths"
description: "Cambridge 9709 Paper 5 subtopic 5.3 in depth: sample spaces, counting methods, exclusive and independent events, tree diagrams and conditional probability."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 5.3 Probability is the foundation for everything else in Paper 5 of Cambridge International AS & A Level Mathematics 9709: the binomial, geometric and normal distributions all rest on the multiplication and addition rules introduced here. Questions in this subtopic are short on formulae and long on interpretation. The marks go to candidates who identify the sample space correctly, recognise whether events are independent, and read conditional wording ("given that") precisely.

For the whole paper, see the [Probability & Statistics 1 study guide](/resources/a-level-maths-9709-probability-statistics-1/). This page is paired with the [probability revision notes](/resources/cambridge-a-level-mathematics-9709-probability-revision-notes/) and the [probability practice questions](/resources/cambridge-a-level-mathematics-9709-probability-practice/).

## What the syllabus asks for

Candidates should be able to:

- evaluate probabilities in simple cases by enumeration of equiprobable elementary events (for example, the total score when two fair dice are thrown), or by calculation using permutations or combinations (for example, drawing balls at random from a bag);
- use addition and multiplication of probabilities, as appropriate, in simple cases;
- understand the meaning of exclusive and independent events, including deciding whether events A and B are independent by comparing P(A ∩ B) with P(A) × P(B);
- calculate and use conditional probabilities in simple cases, for example from a sample space or a tree diagram, using P(A | B) = P(A ∩ B) ÷ P(B) where needed.

The notes say explicit use of the general formula P(A ∪ B) = P(A) + P(B) − P(A ∩ B) is not required. The notation P(A), P(A ∪ B), P(A ∩ B), P(A | B) and A′ for the complement of A is assumed.

## Enumeration: listing equally likely outcomes

When every elementary outcome is equally likely, P(event) = number of favourable outcomes ÷ total number of outcomes. For two fair dice there are 36 equally likely ordered pairs, best shown in a 6 × 6 grid.

- P(total is prime): totals 2, 3, 5, 7 and 11 occur 1 + 2 + 4 + 6 + 2 = 15 times, so the probability is 15/36 = **5/12**.
- P(product is even): the product is odd only when both dice are odd, in 9 cells, so the probability is 27/36 = **3/4**.

The grid also makes conditional questions easy: restrict attention to the cells where the given event happens and count within them.

## Using permutations and combinations

When selections are made at random without replacement, count favourable selections and divide by all selections. A bag holds 5 red, 4 blue and 3 green balls, and 3 are taken at random.

- P(one of each colour) = (5 × 4 × 3) ÷ ¹²C₃ = 60/220 = **3/11**.
- P(at least two red) = (⁵C₂ × 7 + ⁵C₃) ÷ 220 = (70 + 10)/220 = **4/11**.

A tree diagram gives the same answers, but for three or more draws the counting method is shorter and less error-prone. Arrangements work the same way: if the letters of ORANGE are arranged at random, P(the three vowels are together) = (4! × 3!) ÷ 6! = 144/720 = 1/5.

## Exclusive and independent events

These two ideas are often confused, and questions test the difference directly.

| | Exclusive (mutually exclusive) | Independent |
|---|---|---|
| Meaning | A and B cannot both happen | the occurrence of one does not change the probability of the other |
| Test | P(A ∩ B) = 0 | P(A ∩ B) = P(A) × P(B) |
| Rule it gives | P(A or B) = P(A) + P(B) | P(A and B) = P(A) × P(B) |

If A and B are exclusive and both have non-zero probability, they **cannot** be independent: P(A ∩ B) = 0 but P(A) × P(B) > 0. Knowing that one happened tells you for certain that the other did not.

**Worked example: testing independence.** Two fair dice are thrown. A is "the total is 7", B is "the first die shows 3" and C is "the total is 8".

- P(A) = 6/36 = 1/6, P(B) = 1/6, and A ∩ B is the single outcome (3, 4), so P(A ∩ B) = 1/36. Since 1/6 × 1/6 = 1/36, **A and B are independent**.
- P(C) = 5/36 and B ∩ C is (3, 5), so P(B ∩ C) = 1/36. But P(B) × P(C) = 5/216 ≠ 1/36, so **B and C are not independent**.

*Annotation:* the conclusion must quote the comparison. "They are independent because the dice do not affect each other" is wrong here; A and B are both about the same throw of the first die, and independence has to be shown numerically.

## Tree diagrams and conditional probability

A tree diagram multiplies along branches (for successive events) and adds across complete paths (for exclusive outcomes). Second-stage branches carry conditional probabilities, so they can differ from one first-stage branch to another.

**Worked example: a screening test.** 2% of a population have a condition. A test is positive for 95% of people with the condition and for 10% of people without it. Find the probability that a person who tests positive has the condition.

```
P(condition and positive)     = 0.02 × 0.95 = 0.019
P(no condition and positive)  = 0.98 × 0.10 = 0.098
P(positive)                   = 0.019 + 0.098 = 0.117
P(condition | positive)       = 0.019 ÷ 0.117 = 0.162 (3 s.f.)
```

Only about one in six positive results comes from a person with the condition, because so many more people are without it. "Given that" questions reverse the order of the tree, and the formula P(A | B) = P(A ∩ B) ÷ P(B) is the safe way to handle the reversal.

## Conditional probability from a table

When data are given as a two-way table, a conditional probability uses a row or column total as the denominator. If 70 of 120 students study science and 40 of those are in Year 13, then P(Year 13 | science) = 40/70 = 4/7, while P(science and Year 13) = 40/120 = 1/3. The first divides by the restricted group; the second by everyone.

## Common mistakes

- Treating ordered pairs as unordered: (2, 5) and (5, 2) are separate outcomes for two dice.
- Using "with replacement" probabilities in a "without replacement" problem.
- Claiming independence or exclusivity without a numerical check.
- Finding P(A ∩ B) when the question asks for P(A | B), or dividing by the wrong total.
- Adding probabilities of events that are not exclusive.
- Forgetting that "at least one" is usually 1 − P(none).

## Exam technique

- **Show that** a probability equals a given value: write every branch or every count. A tree diagram on its own, without the products, may not earn full credit.
- **Determine whether** A and B are independent: calculate P(A ∩ B) and P(A) × P(B), compare them, and state the conclusion.
- **Find the probability that ... given that ...:** write P(A | B) = P(A ∩ B) ÷ P(B) with the numbers in, then simplify.
- Leave answers as exact fractions where they are simple; otherwise give 3 significant figures.

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Mathematics (9709) syllabus for examination in 2026 and 2027*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf), Subject content, section 5.3 "Probability" (Probability & Statistics 1, Paper 5).
