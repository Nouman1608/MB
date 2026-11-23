---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.11 Formal definition of conditional probability and independence"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.92
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-11"
description: "Study guide to IB DP Maths AA section 4.11: the formula P(A|B) = P(A∩B)/P(B), formal tests for independence, a short proof and worked examples."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 4.11 of IB DP Mathematics: Analysis and Approaches (first assessment 2021) asks for the
**formal definition and use of the formulae** for conditional probability,
P(A | B) = P(A ∩ B)/P(B), and for **testing for independence**, using P(A | B) = P(A) = P(A | B′).
It is SL content, examined at SL and HL. Section 4.6 introduced conditional and independent events
informally through Venn diagrams, tree diagrams and tables; 4.11 turns those ideas into definitions
you can use in algebra and in short proofs.

The [probability and distributions study guide](/resources/ib-dp-mathematics-aa-probability-distributions/)
covers the whole of 4.5 to 4.14 at unit level. This page goes deeper into 4.11 only. Afterwards, use
the
[4.11 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-4-11-revision-notes/)
and the
[4.11 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-4-11-practice/).

## The definition and what it means

For events A and B with P(B) > 0, the probability of A **given** B is

```
P(A | B) = P(A ∩ B) / P(B)
```

Knowing that B has happened shrinks the sample space to B. The formula asks: what fraction of B is
also in A? On a Venn diagram, you divide the overlap by the whole of circle B, not by the whole
rectangle.

Rearranged, the definition gives the **multiplication rule**:

```
P(A ∩ B) = P(B) × P(A | B) = P(A) × P(B | A)
```

This is what you use each time you multiply along the branches of a tree diagram: the second branch
carries a conditional probability.

**Order matters.** P(A | B) and P(B | A) have the same numerator, P(A ∩ B), but different
denominators. They are equal only when P(A) = P(B).

## Independence, formally

A and B are **independent** when knowing that one has happened does not change the probability of
the other. The guide states it as

```
P(A | B) = P(A) = P(A | B′)
```

Each of the following is equivalent (when the probabilities involved are non-zero), so any one of
them is a valid test:

| Test | How to use it |
|---|---|
| P(A ∩ B) = P(A) × P(B) | Usually quickest from a Venn diagram or given probabilities |
| P(A \| B) = P(A) | Natural from a two-way table or a tree |
| P(A \| B) = P(A \| B′) | Compares the two rows (or columns) of a table directly |

To show events are **not** independent, one inequality is enough. To show they **are** independent,
the equality must hold exactly; do not round before comparing.

**Independent is not the same as mutually exclusive.** Mutually exclusive events cannot happen
together, so P(A ∩ B) = 0. If both P(A) and P(B) are non-zero, then P(A)P(B) > 0, so mutually
exclusive events of this kind are never independent: knowing that B happened tells you that A did
not.

## Worked example 1: testing a two-way table

A survey of 160 commuters recorded how each travelled and whether they arrived late.

| | Late | On time | Total |
|---|---|---|---|
| Car | 18 | 72 | 90 |
| Train | 7 | 63 | 70 |
| Total | 25 | 135 | 160 |

L is the event "late" and C is "travelled by car". (Data invented.)

```
P(L)      = 25/160 = 0.15625
P(L | C)  = 18/90  = 0.2
P(L | C′) = 7/70   = 0.1
```

P(L | C) ≠ P(L), so L and C are not independent. Car travellers in this sample were twice as likely
to be late as train travellers.

The reverse conditional is different: P(C | L) = 18/25 = 0.72. Of the late commuters, 72% came by
car. Notice the denominator: for "given L" you divide by the 25 late commuters, not by the 90 car
travellers.

## Worked example 2: an unknown probability

P(A) = 0.4 and P(A ∪ B) = 0.7. Let P(B) = x. Find x if (a) A and B are independent, (b) A and B
are mutually exclusive.

```
(a) Independent: P(A ∩ B) = 0.4x
    P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
    0.7 = 0.4 + x − 0.4x
    0.3 = 0.6x,  so x = 0.5
(b) Mutually exclusive: P(A ∩ B) = 0
    0.7 = 0.4 + x,  so x = 0.3
```

In part (a), check with the definition: P(A ∩ B) = 0.2, so P(A | B) = 0.2/0.5 = 0.4 = P(A). The
equality confirms independence.

## Worked example 3: working from a conditional

P(A) = 0.6, P(B) = 0.5 and P(A | B) = 0.4. Find P(A ∩ B), P(B | A), P(A ∪ B) and P(A | B′), and
decide whether A and B are independent.

```
P(A ∩ B) = P(B) × P(A | B) = 0.5 × 0.4 = 0.2
P(B | A) = 0.2 / 0.6 = 1/3
P(A ∪ B) = 0.6 + 0.5 − 0.2 = 0.9
P(A ∩ B′) = P(A) − P(A ∩ B) = 0.6 − 0.2 = 0.4
P(A | B′) = 0.4 / P(B′) = 0.4 / 0.5 = 0.8
```

P(A | B) = 0.4 but P(A) = 0.6, so A and B are not independent. The test P(A | B) = P(A | B′) fails
too: 0.4 ≠ 0.8. Drawing the Venn diagram with regions 0.4, 0.2, 0.3 and 0.1 is a good check that
every probability is between 0 and 1 and the total is 1.

## Worked example 4: conditioning on a compound event

Two fair six-sided dice are rolled. Find the probability that both show a six, given that at least
one shows a six.

```
A = both sixes:          n(A) = 1
B = at least one six:    n(B) = 36 − 25 = 11   (25 outcomes have no six)
A ∩ B = A, because both sixes is already "at least one six"
P(A | B) = (1/36) / (11/36) = 1/11
```

Students often answer 1/6 by reasoning that "the other die must be a six". That treats the
condition as "the first die shows a six", which is a different event with 6 outcomes, not 11.

## A short proof the guide expects you to follow

If A and B are independent, then A and B′ are independent.

```
P(A ∩ B′) = P(A) − P(A ∩ B)          (A splits into A ∩ B and A ∩ B′)
          = P(A) − P(A)P(B)          (independence)
          = P(A)(1 − P(B))
          = P(A)P(B′)
```

So P(A ∩ B′) = P(A)P(B′), which is the condition for independence. This is why the guide's
definition can include P(A | B′): if knowing B does not change P(A), knowing "not B" cannot change it
either.

## Common mistakes

- Dividing by P(A) when the question asks for P(A | B). The event after the bar is the denominator.
- Testing independence with rounded decimals and declaring two values "equal" when they differ in
  the fourth figure.
- Assuming independence because two events "seem unrelated". Unless the question says so, you must
  test it.
- Treating mutually exclusive events as independent, or adding probabilities of independent events.
- Using P(A ∪ B) = P(A) + P(B) for events that can overlap.
- In "given at least one" problems, counting the condition as if one specific item were fixed.

## Exam technique and command words

- **Find** P(A | B): write the formula with the values substituted before simplifying, so the method
  is visible.
- **Determine whether** or **justify** that events are independent: quote the test you are using,
  give both sides as exact values, and finish with a sentence such as "0.2 ≠ 0.15625, so not
  independent".
- **Show that**: give every step, ending exactly at the given value; a calculator decimal alone does
  not show anything.
- On Paper 1 keep answers as exact fractions. On Paper 2, give decimals to three significant figures
  unless told otherwise.

## Where to go next

Use the
[4.11 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-4-11-revision-notes/)
to condense the section, then try the
[4.11 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-4-11-practice/).
HL students should go on to
[Bayes' theorem (4.13)](/resources/ib-dp-mathematics-analysis-and-approaches-4-13/),
which reverses a conditional probability using exactly these definitions.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 4.11: formal definition and use of the formulae
P(A | B) = P(A ∩ B)/P(B) for conditional probabilities, and P(A | B) = P(A) = P(A | B′) for
independent events.
