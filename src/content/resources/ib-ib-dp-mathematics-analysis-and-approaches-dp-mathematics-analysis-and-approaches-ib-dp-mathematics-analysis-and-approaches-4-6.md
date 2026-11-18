---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.6 Combined, mutually exclusive, conditional and independent events"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 4 – Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.6
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-6"
description: "IB Maths AA study guide to section 4.6: Venn, tree and sample space diagrams, the addition rule, mutually exclusive, conditional and independent events."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers syllabus section **4.6** of IB Diploma Programme Mathematics: Analysis and Approaches
(first assessment 2021): **the use of Venn diagrams, tree diagrams, sample space diagrams and tables of
outcomes to calculate probabilities; combined events, P(A ∪ B) = P(A) + P(B) − P(A ∩ B); mutually exclusive
events, P(A ∩ B) = 0; conditional probability, P(A | B) = P(A ∩ B)/P(B); and independent events,
P(A ∩ B) = P(A)P(B)**. It is SL and HL content.

The [probability, discrete and continuous distributions, binomial and normal study guide](/resources/ib-dp-mathematics-aa-probability-distributions/)
gives one example of each idea. This page is about choosing the right diagram, filling it in from partial
information, and not confusing "mutually exclusive" with "independent". Section 4.11 later formalises
conditional probability and independence: see the
[4.11 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-11/).

## The rules

```
Combined events:      P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
Mutually exclusive:   P(A ∩ B) = 0,  so P(A ∪ B) = P(A) + P(B)
Conditional:          P(A | B) = P(A ∩ B) / P(B)
Independent:          P(A ∩ B) = P(A) P(B)
```

- **A ∪ B** ("A or B") includes outcomes in both. That overlap is counted twice by P(A) + P(B), so it is
  subtracted once.
- **A ∩ B** ("A and B") is the overlap.
- **A | B** ("A given B") restricts attention to B: of the outcomes in B, what fraction are also in A?

## Mutually exclusive versus independent

| | Mutually exclusive | Independent |
|---|---|---|
| Meaning | A and B cannot both happen | Knowing one has happened does not change the probability of the other |
| Test | P(A ∩ B) = 0 | P(A ∩ B) = P(A)P(B) |
| Venn diagram | Circles do not overlap | Overlap is exactly P(A)P(B) |

If P(A) and P(B) are both non-zero, mutually exclusive events **cannot** be independent: P(A ∩ B) = 0, but
P(A)P(B) > 0. Learning that A happened tells you B did not, which is the opposite of independence.

## Choosing a diagram

| Information given | Diagram |
|---|---|
| Overlapping categories with counts or probabilities | Venn diagram |
| Events in stages, especially with changing probabilities | Tree diagram |
| Two simultaneous experiments with equally likely outcomes | Sample space diagram (grid) |
| Two categorical variables for a group of people | Table of outcomes (two-way table) |

**Filling in a Venn diagram:** start with the intersection, then the "only" regions, then the region outside
both circles. Check that every region sums to the total (or to 1).

### Worked example 1: a Venn diagram with an unknown

In a class of 50 students, 28 study Biology (B), 22 study Chemistry (C) and 7 study neither.

```
Let x study both.  Regions: B only = 28 − x,  both = x,  C only = 22 − x,  neither = 7
(28 − x) + x + (22 − x) + 7 = 50   →   57 − x = 50   →   x = 7

P(B only) = 21/50
P(B ∪ C) = 43/50          (or 28/50 + 22/50 − 7/50)
P(C | B) = 7/28 = 1/4     (of the 28 Biology students, 7 study Chemistry)
Independent?  P(B)P(C) = 0.56 × 0.44 = 0.2464,  P(B ∩ C) = 0.14  → not independent
```

## Tree diagrams

On a tree, probabilities on branches leaving the same point add to 1. Multiply **along** a path for "and";
add **between** paths for "or". The second-stage branches are conditional probabilities: they are the
probabilities given what happened on the first stage.

**With and without replacement.** If items are replaced, second-stage probabilities are the same as the
first stage. Without replacement, both the numerator and the denominator change.

### Worked example 2: conditional probability from a tree

A student takes the bus to school with probability 0.7, otherwise she walks. If she takes the bus, the
probability she is late is 0.1; if she walks, it is 0.4. Find the probability she is late, and the
probability she took the bus, given that she is late.

```
P(bus and late)  = 0.7 × 0.1 = 0.07
P(walk and late) = 0.3 × 0.4 = 0.12
P(late) = 0.07 + 0.12 = 0.19

P(bus | late) = P(bus ∩ late) / P(late) = 0.07/0.19 = 7/19 ≈ 0.368
```

Notice that P(bus | late) ≈ 0.368 is very different from P(late | bus) = 0.1. Which event is "given"
changes the answer completely.

### Worked example 3: without replacement

Two students are chosen at random from 4 boys and 6 girls.

```
P(one of each) = P(BG) + P(GB) = (4/10)(6/9) + (6/10)(4/9) = 48/90 = 8/15
P(at least one girl) = 1 − P(BB) = 1 − (4/10)(3/9) = 1 − 12/90 = 13/15
```

The complement shortcut avoids adding three paths (BG, GB, GG).

## Tables of outcomes

For a two-way table of counts, P(A | B) = (number in both A and B)/(number in B). Read the row or column for
the "given" event; that total is the denominator. Independence holds if the proportion in A is the same
within B as in the whole group.

## Common mistakes

- Adding P(A) and P(B) for "or" without subtracting the overlap.
- Assuming events are mutually exclusive or independent when the question does not say so.
- Using "mutually exclusive" and "independent" as if they meant the same thing.
- Dividing by the wrong total in a conditional probability: the denominator is the "given" event.
- Forgetting to reduce the denominator on the second branch without replacement.
- Leaving a Venn diagram that does not add up to the total.
- Confusing P(A | B) with P(B | A).

## Exam technique

- **"Draw" / "complete"** a Venn or tree diagram: label every region or branch, including probabilities on
  every branch.
- **"Find"** a probability: show which paths or regions you used. On Paper 1 keep fractions exact.
- **"Show that"** events are (not) independent: compare P(A ∩ B) with P(A)P(B), giving both numbers and a
  conclusion.
- **"Explain"** why events are mutually exclusive: they have no outcomes in common, so P(A ∩ B) = 0.
- **"Given that"** in a question always signals a conditional probability.

## Where to go next

Use the [4.6 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-6-revision-notes/)
for recall and the [4.6 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-6-practice/)
to test yourself. Section 4.7 attaches numbers to outcomes: see the
[4.7 discrete random variables study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-7/).

## Official syllabus

International Baccalaureate Organization, *Mathematics: analysis and approaches guide*, first assessment
2021, section 4.6 (SL and HL): use of Venn diagrams, tree diagrams, sample space diagrams and tables of
outcomes to calculate probabilities; combined events; mutually exclusive events; conditional probability;
independent events.
