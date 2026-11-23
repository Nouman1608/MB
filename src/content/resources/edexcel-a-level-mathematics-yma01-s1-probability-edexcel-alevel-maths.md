---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Probability"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S1: Statistics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 7.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-probability-edexcel-alevel-maths"
description: "Edexcel IAL Maths S1 probability guide: three-set Venn diagrams, conditional probability, testing independence, tree diagrams and sampling without replacement."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 3 of **Unit S1: Statistics 1** in Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics (YMA01), Specification Issue 3: "Elementary probability" (3.1); "Sample space. Exclusive and complementary events. Conditional probability" (3.2); "Independence of two events" (3.3); and "Sum and product laws" (3.4), with "use of tree diagrams and Venn diagrams" and "sampling with and without replacement".

The broader S1 guide on [probability, and correlation and regression](/resources/edexcel-ial-mathematics-probability-and-correlation-and-regression/) introduces each law with a two-event example. This page goes further: three-event Venn diagrams, algebraic problems where you must find a missing probability, reversing a conditional probability on a tree, and the proofs that sometimes appear as "show that" parts. Use the [probability revision notes](/resources/edexcel-a-level-mathematics-yma01-s1-probability-edexcel-alevel-maths-revision-notes/) for recall and the [probability practice set](/resources/edexcel-a-level-mathematics-yma01-s1-probability-edexcel-alevel-maths-practice/) to test yourself.

## The laws you must know

The specification lists these as formulae you are expected to remember:

```
P(A′) = 1 − P(A)
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
P(A ∩ B) = P(A) P(B | A)
independent A, B:  P(B | A) = P(B),  P(A | B) = P(A),  P(A ∩ B) = P(A) P(B)
```

Rearranging the third gives the definition of conditional probability, P(B | A) = P(A ∩ B) / P(A). In words: restrict attention to the outcomes in A, and ask what fraction of them are also in B.

**Mutually exclusive** events cannot happen together, so P(A ∩ B) = 0 and the addition law reduces to P(A ∪ B) = P(A) + P(B). **Independent** events do not affect each other's probability. These are different ideas: two events with non-zero probabilities that are mutually exclusive cannot be independent, because knowing that A happened tells you B did not.

## Sample spaces

A sample space lists every possible outcome. For two fair dice it is a 6 × 6 grid of 36 equally likely outcomes. A grid makes conditional questions straightforward: to find P(total is 8 | at least one die shows 6), count the outcomes with at least one 6 (11 of them), then count how many of those total 8: (2, 6) and (6, 2). The answer is 2/11. The given condition shrinks the sample space; the denominator is 11, not 36.

## Venn diagrams with three events

With three overlapping events, fill the diagram **from the centre outwards**: the triple overlap first, then each double overlap minus the triple, then each single region, then the region outside all three.

## Worked example 1: three subjects

Of 100 students, 45 study French (F), 30 German (G) and 40 Spanish (S). 15 study both French and German, 12 study both German and Spanish, 18 study both French and Spanish, and 8 study all three.

```
F ∩ G ∩ S          8
F ∩ G only         15 − 8 = 7
G ∩ S only         12 − 8 = 4
F ∩ S only         18 − 8 = 10
F only             45 − 7 − 10 − 8 = 20
G only             30 − 7 − 4 − 8 = 11
S only             40 − 10 − 4 − 8 = 18
none               100 − 78 = 22
```

**(a) P(exactly one language)** = (20 + 11 + 18)/100 = **0.49**.

**(b) P(F | S)** = 18/40 = **0.45**. The 18 counts every Spanish student who also takes French, including the 8 who take all three.

**(c) P(G | F′)**: there are 55 students not taking French, of whom 11 + 4 = 15 take German, so the answer is 15/55 = **3/11**.

**(d) Are F and S independent?** P(F) × P(S) = 0.45 × 0.40 = 0.18, and P(F ∩ S) = 18/100 = 0.18. They are equal, so **F and S are independent**. A complete answer shows both numbers and states the conclusion.

## Worked example 2: algebra without a diagram

P(A) = 0.4, P(B | A) = 0.25 and P(A ∪ B) = 0.7. Find P(B), P(A | B) and P(A′ ∩ B′), and decide whether A and B are independent.

```
P(A ∩ B) = P(A) P(B | A) = 0.4 × 0.25 = 0.1
P(B)     = P(A ∪ B) − P(A) + P(A ∩ B) = 0.7 − 0.4 + 0.1 = 0.4
P(A | B) = 0.1 / 0.4 = 0.25
P(A′ ∩ B′) = 1 − P(A ∪ B) = 0.3
```

P(A | B) = 0.25 but P(A) = 0.4, so A and B are **not** independent. Any one of the three tests is enough, but it must be stated with numbers.

A quick check: sketch a two-event Venn diagram with regions 0.3, 0.1, 0.3 and 0.3. They add to 1, which confirms the arithmetic.

## Tree diagrams and the product law

Each branch of a tree carries a conditional probability: the probability of that outcome **given** everything earlier on the path. Multiply along a path (product law) and add across paths that give the event you want (sum law).

## Worked example 3: reversing a conditional

A shop buys 60% of its bulbs from supplier X and 40% from supplier Y. 3% of X's bulbs and 5% of Y's bulbs are faulty. A bulb is chosen at random.

```
P(faulty) = 0.6 × 0.03 + 0.4 × 0.05 = 0.018 + 0.02 = 0.038
P(Y | faulty) = P(Y ∩ faulty) / P(faulty) = 0.02 / 0.038 = 0.526 (3 s.f.)
```

Although Y supplies only 40% of the bulbs, just over half of the faulty bulbs come from Y. The tree gives P(faulty | Y) directly; P(Y | faulty) needs the conditional probability formula with the total from the sum law as the denominator.

## Sampling with and without replacement

With replacement, the probabilities stay the same for every draw, so draws are independent. Without replacement, each later probability is conditional on what has already been removed.

## Worked example 4: two draws without replacement

A bag holds 4 red and 6 green counters. Two are taken without replacement.

```
P(same colour)        = (4/10)(3/9) + (6/10)(5/9) = 12/90 + 30/90 = 7/15
P(first red | same)   = (12/90) / (42/90) = 2/7
P(at least one red)   = 1 − P(both green) = 1 − (6/10)(5/9) = 2/3
```

"At least one" is almost always quicker through the complement.

## Proving a result about independence

A "show that" part may ask you to prove that if A and B are independent, then so are A and B′:

```
P(A ∩ B′) = P(A) − P(A ∩ B)
          = P(A) − P(A) P(B)        (independence)
          = P(A) [1 − P(B)]
          = P(A) P(B′)
```

Each line needs a reason, and the last line must match the definition of independence.

## Common mistakes

- Treating "mutually exclusive" and "independent" as the same thing.
- Using P(A ∩ B) = P(A)P(B) without being told, or having shown, that A and B are independent.
- Filling a three-set Venn diagram from the outside, so the double overlaps are counted twice.
- Using the whole sample space as the denominator of a conditional probability.
- Forgetting to reduce both numerator and denominator on the second draw without replacement.
- Writing a conclusion about independence with no numerical comparison.

## Exam technique

- **"Find"** a conditional probability: write the formula P(A | B) = P(A ∩ B)/P(B) with numbers substituted.
- **"Determine whether"** or **"Show that"** events are independent: compute both sides of one test and state the conclusion.
- **"Draw a tree diagram"**: label every branch with its probability; conditional branches change after the first stage.
- **"Complete the Venn diagram"**: check that all regions add to 1 (or to the total number).
- Leave answers as exact fractions or to 3 significant figures.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, Unit S1, section 3 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
