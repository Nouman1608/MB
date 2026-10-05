---
resourceId: "mb-ap-stats-2.5-study-guide"
title: "Mutually Exclusive Events: Study Guide (Statistics 2.5)"
description: "Learn what joint probability means, how to write P(A ∩ B), and how to justify whether two events are mutually exclusive from a sample space, a Venn diagram or a two-way table."
course: "statistics"
unit: 2
topics: ["2.5"]
resourceType: "study-guide"
prerequisites:
  - "Sample spaces, equally likely outcomes and the complement rule (Topic 2.4)"
  - "Reading joint relative frequencies from a two-way table (Topic 2.2)"
prerequisiteResources: ["mb-ap-stats-2.4-study-guide"]
learningObjectives:
  - "Explain what the joint probability of two events is and write it as P(A ∩ B)"
  - "Find a joint probability by listing outcomes in a sample space or by reading a two-way table"
  - "Decide whether two events are mutually exclusive by checking whether P(A ∩ B) = 0"
  - "Justify a claim that two events are, or are not, mutually exclusive, using a calculation and a sentence in context"
  - "Tell apart events that cannot happen together from events that simply did not happen together in one data set"
skills: ["3", "4"]
studyMinutes: 35
difficulty: "foundation"
calculator: "graphing"
calculatorNote: "A calculator is only needed to turn fractions into decimals. Keep fractions exact, or round decimals to 4 decimal places."
related: ["mb-ap-stats-2.5-revision-notes", "mb-ap-stats-2.5-practice", "mb-ap-stats-2.5-checklist"]
next: "mb-ap-stats-2.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "The joint probability P(A ∩ B) is the probability that A and B both happen on the same trial."
  - "Two events are mutually exclusive (disjoint) if they cannot happen at the same time."
  - "Mutually exclusive means P(A ∩ B) = 0. If P(A ∩ B) is greater than 0, the events are not mutually exclusive."
  - "To justify, find the outcomes in both events (or the shared cell of a two-way table), give P(A ∩ B), and conclude in context."
  - "An event and its complement are always mutually exclusive, but mutually exclusive events do not have to be complements."
faqs:
  - question: "Is \"disjoint\" the same as \"mutually exclusive\"?"
    answer: "Yes. Both words mean the two events have no outcomes in common, so they cannot happen on the same trial. On a Venn diagram, the circles do not overlap."
  - question: "What does the symbol ∩ mean?"
    answer: "∩ means \"intersection\": the outcomes that are in both events. P(A ∩ B) is read \"the probability of A and B\" and is called the joint probability."
  - question: "If a cell in a two-way table is 0, are the events mutually exclusive?"
    answer: "For one individual chosen at random from that table, yes: P(A ∩ B) = 0. Whether the events can never happen together in a wider population is a different question. The table only shows that they did not happen together in this data set."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Two events on the same trial

In Topic 2.4 you found the probability of one event, such as "roll an even number". Many questions ask about **two events at once**. Can they both happen on the same trial? If so, how likely is that?

Take one roll of a fair six-sided die. The sample space is {1, 2, 3, 4, 5, 6}, and all six outcomes are equally likely.

- Event A = "the roll is even" = {2, 4, 6}
- Event B = "the roll is 1 or 2" = {1, 2}

The outcome 2 is in **both** events. If you roll a 2, then A and B have both happened. So A and B *can* happen together.

Now take event C = "the roll is odd" = {1, 3, 5}. No outcome is both even and odd. A and C can never happen on the same roll.

This topic gives these two situations names, and shows you how to prove which one you have.

## Joint probability and the symbol ∩

The **intersection** of events A and B is the set of outcomes that are in **both** A and B. It is written **A ∩ B** and read "A and B".

The **joint probability** of A and B is the probability that A and B both happen on the same trial. It is written:

**P(A ∩ B)**, read "the probability of A and B".

When all outcomes are equally likely, you find it the usual way (Topic 2.4):

**P(A ∩ B) = (number of outcomes in both A and B) ÷ (total number of outcomes)**

For the die: A ∩ B = {2}, so P(A ∩ B) = 1/6 ≈ 0.1667. And A ∩ C contains no outcomes at all, so P(A ∩ C) = 0/6 = 0.

You have met joint probability before, under another name. In Topic 2.2, a **joint relative frequency** was a cell count divided by the table total. If you choose one individual at random from the table, that joint relative frequency *is* the joint probability that the individual has both characteristics.

## Mutually exclusive (disjoint) events

Two events are **mutually exclusive**, also called **disjoint**, if they **cannot happen at the same time**: no outcome belongs to both.

If two events cannot happen together, the probability that they both happen is zero. So:

**A and B are mutually exclusive ⇔ P(A ∩ B) = 0**

This gives you a test you can calculate. (It works in the settings of this course, where you list outcomes or count individuals and every outcome you list has a probability above 0.)

| What you find | Conclusion |
|---|---|
| P(A ∩ B) = 0 | A and B are mutually exclusive |
| P(A ∩ B) > 0 | A and B are **not** mutually exclusive: they can happen together |

Notice that the size of the joint probability does not matter once it is above zero. If P(A ∩ B) = 0.001, the events are rare together, but they **can** happen together, so they are not mutually exclusive.

**Complements.** An event E and its complement E′ ("not E") are always mutually exclusive: an outcome cannot be in E and not in E at the same time. The reverse is not true. In the die example, A = {2, 4, 6} and D = {1} are mutually exclusive, but D is not the complement of A, because 3 and 5 are in neither event.

## Seeing it on a Venn diagram

A **Venn diagram** draws the sample space as a rectangle and each event as a closed shape inside it. The overlap of two shapes is the intersection.

<figure>
<svg viewBox="0 0 640 280" role="img" aria-labelledby="venn25-title venn25-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="venn25-title">Two Venn diagrams: overlapping events and mutually exclusive events</title>
<desc id="venn25-desc">Left panel: a rectangle labelled sample space contains two overlapping circles labelled A and B. The region where they overlap is filled with diagonal hatching. The caption below reads: hatched overlap equals A intersect B, both happen; P of A intersect B is greater than 0, not mutually exclusive. Right panel: a rectangle labelled sample space contains two circles labelled A and B that do not touch, with a gap between them. The caption below reads: no overlap, P of A intersect B equals 0; A and B are mutually exclusive (disjoint). In both panels A has a solid outline and B a dashed outline.</desc>
<defs>
<pattern id="hatch25" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
<line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="2"/>
</pattern>
<clipPath id="clipA25"><circle cx="125" cy="135" r="75"/></clipPath>
</defs>
<rect x="0" y="0" width="640" height="280" fill="#ffffff"/>
<rect x="15" y="30" width="290" height="200" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="25" y="22" font-size="13" fill="#1d2b44">Sample space</text>
<circle cx="195" cy="135" r="75" fill="url(#hatch25)" clip-path="url(#clipA25)"/>
<circle cx="125" cy="135" r="75" fill="none" stroke="#1d2b44" stroke-width="2"/>
<circle cx="195" cy="135" r="75" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 4"/>
<text x="80" y="140" font-size="18" fill="#1d2b44" text-anchor="middle">A</text>
<text x="240" y="140" font-size="18" fill="#1d2b44" text-anchor="middle">B</text>
<text x="160" y="252" font-size="13" fill="#1d2b44" text-anchor="middle">Hatched overlap = A ∩ B: both happen</text>
<text x="160" y="266" font-size="13" fill="#1d2b44" text-anchor="middle">P(A ∩ B) &gt; 0: not mutually exclusive</text>
<rect x="335" y="30" width="290" height="200" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="345" y="22" font-size="13" fill="#1d2b44">Sample space</text>
<circle cx="418" cy="135" r="60" fill="none" stroke="#1d2b44" stroke-width="2"/>
<circle cx="545" cy="135" r="60" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 4"/>
<text x="418" y="140" font-size="18" fill="#1d2b44" text-anchor="middle">A</text>
<text x="545" y="140" font-size="18" fill="#1d2b44" text-anchor="middle">B</text>
<text x="480" y="252" font-size="13" fill="#1d2b44" text-anchor="middle">No overlap: P(A ∩ B) = 0</text>
<text x="480" y="266" font-size="13" fill="#1d2b44" text-anchor="middle">A and B are mutually exclusive (disjoint)</text>
</svg>
<figcaption>Figure 1. Left: the circles overlap, and the hatched region holds the outcomes in both A and B. Right: the circles do not overlap, so there is no outcome in both events. Event A has a solid outline and event B a dashed outline in both panels.</figcaption>
</figure>

Look for an overlap that contains at least one outcome. An overlap with outcomes in it means P(A ∩ B) > 0. No overlap (or an overlap with no outcomes in it) means P(A ∩ B) = 0.

## Seeing it in a two-way table

When data are summarised in a two-way table, each **cell** is the intersection of a row category and a column category. To find the joint probability for one individual chosen at random:

**P(row category ∩ column category) = cell count ÷ table total**

So two events, one from the rows and one from the columns, are mutually exclusive for a randomly chosen individual **only if their shared cell is 0**.

Two categories of the **same** variable (two rows, or two columns) are always mutually exclusive, because each individual is counted in exactly one row and exactly one column.

## How to justify a claim

The course asks you to **justify** your answer, not just state it. A complete justification has three parts:

1. **Identify the intersection.** List the outcomes in both events, or point to the shared cell.
2. **Calculate the joint probability.** Write P(A ∩ B) = … with the fraction or decimal.
3. **Conclude in context.** Compare with 0 and say what that means for the events in the question.

A sentence such as "P(A ∩ B) = 0, so they are mutually exclusive" is better than "they don't overlap". Better still: "No ticket was both a child ticket and for an adults-only film, so P(child ∩ adults only) = 0/400 = 0, and the two events are mutually exclusive for a randomly chosen ticket."

## Worked example 1: a 12-sided game die

**Question.** A fictional board game uses a fair 12-sided die with faces 1 to 12. One roll is made. Define these events:

- A = "multiple of 5"
- B = "prime number"
- C = "greater than 10"
- D = "multiple of 4"

(a) List the outcomes in each event. (b) For each pair of events, find the joint probability. (c) Which pairs are mutually exclusive? Justify.

**(a)** The sample space has 12 equally likely outcomes.

- A = {5, 10}
- B = {2, 3, 5, 7, 11} (1 is not prime)
- C = {11, 12}
- D = {4, 8, 12}

**(b)** Find the outcomes common to each pair, then divide by 12.

| Pair | Outcomes in both | Joint probability |
|---|---|---|
| A and B | {5} | 1/12 ≈ 0.0833 |
| A and C | none | 0/12 = 0 |
| A and D | none | 0/12 = 0 |
| B and C | {11} | 1/12 ≈ 0.0833 |
| B and D | none | 0/12 = 0 |
| C and D | {12} | 1/12 ≈ 0.0833 |

**(c)** A and C, A and D, and B and D are mutually exclusive, because each joint probability is 0. For example, no face from 1 to 12 is both a multiple of 5 and a multiple of 4 (the first such number is 20), so P(A ∩ D) = 0.

A and B are **not** mutually exclusive: rolling a 5 gives both a multiple of 5 and a prime, so P(A ∩ B) = 1/12 > 0. In the same way, B and C share 11 and C and D share 12.

**Check.** None of these mutually exclusive pairs is a complement pair. For example, P(A) = 2/12 and P(C) = 2/12, and most faces (such as 1, 2 and 3) are in neither A nor C. Mutually exclusive events do not have to cover the whole sample space.

## Worked example 2: tickets at a cinema

**Question.** The fictional Rivergate Cinema sold 400 tickets one Saturday. Each ticket is classified by ticket type and by the film's age category. The cinema does not sell child tickets for adults-only films.

| Ticket type | All ages | Teen (12+) | Adults only (18+) | Total |
|---|---|---|---|---|
| Child | 58 | 34 | 0 | 92 |
| Adult | 62 | 118 | 96 | 276 |
| Senior | 10 | 14 | 8 | 32 |
| Total | 130 | 166 | 104 | 400 |

One ticket is chosen at random from the 400.

(a) Are the events "child ticket" and "adults-only film" mutually exclusive? Justify.
(b) Are the events "senior ticket" and "all-ages film" mutually exclusive? Justify.
(c) A manager says, "A ticket for a teen film can't be an adult ticket, so those events are mutually exclusive." Is the manager correct?

**(a)** The shared cell (Child, Adults only) is 0.

P(child ∩ adults only) = 0/400 = 0.

Since the joint probability is 0, the events are **mutually exclusive**: no ticket sold was a child ticket for an adults-only film. Here this matches the cinema's rule, so the two events cannot happen together for any ticket the cinema sells.

**(b)** The shared cell (Senior, All ages) is 10.

P(senior ∩ all ages) = 10/400 = 0.025.

Since 0.025 > 0, the events are **not** mutually exclusive: 10 tickets were senior tickets for all-ages films.

**(c)** The shared cell (Adult, Teen) is 118.

P(adult ∩ teen) = 118/400 = 0.295.

The manager is **wrong**. Since P(adult ∩ teen) = 0.295 > 0, an adult ticket for a teen film can happen, and in fact it is the most common combination in the table.

**Check.** Every cell probability is between 0 and 1, and the nine cell counts add to 400. Notice that the joint probabilities in (a) and (b) are both small, yet only (a) gives mutually exclusive events. Zero is the only value that counts.

## Common misconceptions

- **"Rare together means mutually exclusive."** A joint probability of 0.025 is small, but it is not 0. If the events can happen together even once, they are not mutually exclusive.
- **"Mutually exclusive events must be complements."** Complements are one kind of mutually exclusive pair. In Worked example 1, A and C are mutually exclusive, but many outcomes are in neither.
- **"A zero in my data proves the events can never happen together."** For one individual chosen at random *from that data set*, P(A ∩ B) = 0. But in a sample, a zero may just mean the combination did not turn up this time. In Worked example 2 a cinema rule explains the zero; without a reason like that, be careful about claims beyond the data.
- **"Two events in separate trials are mutually exclusive because they don't affect each other."** "First coin is heads" and "second coin is heads" can both happen (HH), so they are not mutually exclusive. Whether one event changes the chance of the other is a different idea, called independence, which you will meet in Topic 2.7.
- **Using the row or column total as the denominator.** For a joint probability of one individual chosen from the whole table, divide the cell by the **grand total**. Dividing by a row or column total gives a conditional probability, which is the next topic.
- **Stating a conclusion with no evidence.** "They are mutually exclusive" scores little on its own. Give P(A ∩ B) and compare it with 0, in context.

## Where this leads

Next, in [Topic 2.6](/advanced-course-resources/statistics/2-6-conditional-probability-study-guide/), you will find the probability of one event *given* that another has happened, and you will see that joint probabilities are the building block of that calculation. In Topic 2.7 you will use P(A ∩ B) again to find the probability that A **or** B happens, and to compare mutually exclusive events with independent events. Now try the [practice questions](/advanced-course-resources/statistics/2-5-mutually-exclusive-events-practice/), then use the [revision notes](/advanced-course-resources/statistics/2-5-mutually-exclusive-events-revision-notes/) and the [checklist](/advanced-course-resources/statistics/2-5-mutually-exclusive-events-checklist/) to consolidate.
