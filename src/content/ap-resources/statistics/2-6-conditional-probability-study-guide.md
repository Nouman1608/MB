---
resourceId: "mb-ap-stats-2.6-study-guide"
title: "Conditional Probability: Study Guide (Statistics 2.6)"
description: "Learn to calculate P(A | B) from a two-way table, a formula or a tree diagram, use the general multiplication rule, and avoid confusing P(A | B) with P(B | A)."
course: "statistics"
unit: 2
topics: ["2.6"]
resourceType: "study-guide"
prerequisites:
  - "Joint probability and the notation P(A ∩ B) (Topic 2.5)"
  - "Conditional relative frequencies in a two-way table (Topic 2.2)"
prerequisiteResources: ["mb-ap-stats-2.5-study-guide"]
learningObjectives:
  - "Explain what P(A | B) means, in context, as a probability calculated within the group where B has happened"
  - "Calculate a conditional probability by counting in a two-way table and with the formula P(A | B) = P(A ∩ B) / P(B)"
  - "Use the general multiplication rule P(A ∩ B) = P(A) · P(B | A) to find joint probabilities, including draws without replacement"
  - "Build and use a tree diagram to find joint probabilities and to reverse a conditional probability"
  - "Explain why P(A | B) and P(B | A) are usually different"
skills: ["3"]
studyMinutes: 40
difficulty: "core"
calculator: "graphing"
calculatorNote: "A calculator is only needed for arithmetic. Keep fractions exact, or round decimals to 4 decimal places; do not round intermediate values."
related: ["mb-ap-stats-2.6-revision-notes", "mb-ap-stats-2.6-practice", "mb-ap-stats-2.6-checklist"]
next: "mb-ap-stats-2.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "P(A | B) is the probability that A happens given that B has happened. Read the bar as \"given\"."
  - "Formula: P(A | B) = P(A ∩ B) / P(B), as long as P(B) > 0."
  - "In a two-way table: P(A | B) = (cell for A and B) ÷ (total for B). The condition picks the denominator."
  - "General multiplication rule: P(A ∩ B) = P(A) · P(B | A). Multiply along the branches of a tree diagram."
  - "P(A | B) and P(B | A) have different denominators, so they are usually different numbers."
faqs:
  - question: "Which event goes after the bar in P(A | B)?"
    answer: "The event you already know has happened: the condition. P(late | van) means \"the probability a parcel is late, given that it went by van\". The condition decides which group you divide by."
  - question: "Is a conditional probability the same as a conditional relative frequency?"
    answer: "They use the same calculation. In Topic 2.2 you divided a cell by its row or column total to describe data. If one individual is chosen at random from the table, that conditional relative frequency is the conditional probability."
  - question: "Does the general multiplication rule only work for independent events?"
    answer: "No. It works for any two events, because it uses P(B | A), which already allows for A changing the chance of B. The shortcut P(A) · P(B) is only for independent events, which you meet in Topic 2.7."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What “given” does to a probability

Sometimes you learn something about the outcome before you are asked for a probability. That information **changes the set of outcomes that are still possible**.

Roll a fair six-sided die. The probability of a 2 is 1/6. Now suppose a friend looks at the die and tells you, "It's even." The only possible outcomes are now {2, 4, 6}, three equally likely outcomes. One of them is 2. So, given that the roll is even, the probability of a 2 is **1/3**.

The information "the roll is even" cut the sample space from six outcomes to three. That is what a **conditional probability** does: it works out a probability **inside the group where the condition is true**.

## Notation and the formula

The probability that event A happens **given that** event B has happened is written:

**P(A | B)**, read "the probability of A given B".

The vertical bar means "given". The event after the bar, B, is the **condition**: the thing you already know.

The definition is:

**P(A | B) = P(A ∩ B) / P(B)**, provided P(B) > 0.

Read it as: "of all the probability that sits in B, what fraction is also in A?"

For the die, A = "roll a 2" and B = "roll is even". A ∩ B = {2}, so P(A ∩ B) = 1/6, and P(B) = 3/6 = 1/2. Then

P(A | B) = (1/6) ÷ (1/2) = 1/3 ≈ 0.3333, the same answer as counting.

Now swap the events. P(B | A) = P(even | rolled a 2) = (1/6) ÷ (1/6) = 1. If you know the roll is 2, it is certainly even. So **P(A | B) and P(B | A) are different**. The top of the fraction is the same joint probability, but the bottom is the probability of whichever event is the condition.

## Conditional probability from a two-way table

When each individual is counted in a two-way table, the formula becomes a simple count.

**P(A | B) = (count in both A and B) ÷ (count in B)**

The condition tells you which **row or column total** to divide by. This is the same calculation as a **conditional relative frequency** in Topic 2.2. If one individual is chosen at random from the table, the conditional relative frequency *is* the conditional probability.

A quick way to avoid mistakes: before you divide, say the condition aloud as "out of all the …". For P(streak | premium), say "out of all the premium users". That group's total is your denominator.

## Worked example 1: a language-learning app

**Question.** A fictional language-learning app looked at 500 of its users. It recorded each user's plan and whether the user completed a 30-day learning streak.

| Plan | Completed streak | Did not complete | Total |
|---|---|---|---|
| Free | 60 | 290 | 350 |
| Premium | 81 | 69 | 150 |
| Total | 141 | 359 | 500 |

One user is chosen at random.

(a) Find P(completed streak | premium) by counting. Check it with the formula.
(b) Find P(completed streak | free) and compare it with (a).
(c) Find P(premium | completed streak). Explain why it differs from (a).

**(a)** The condition is "premium", so restrict to the 150 premium users. Of these, 81 completed the streak.

P(completed | premium) = 81/150 = **0.54**.

Check with the formula: P(completed ∩ premium) = 81/500 = 0.162 and P(premium) = 150/500 = 0.3. So P(completed | premium) = 0.162 ÷ 0.3 = 0.54. ✓

**Interpretation.** If a premium user is chosen at random, the probability that this user completed the 30-day streak is 0.54.

**(b)** Restrict to the 350 free users: P(completed | free) = 60/350 ≈ **0.1714**.

A premium user is much more likely to have completed the streak (0.54) than a free user (about 0.17). This describes these 500 users only. It does **not** show that paying for premium *causes* users to keep going; the users chose their own plans, so this is not an experiment.

**(c)** Now the condition is "completed streak", so restrict to the 141 users who completed it. Of these, 81 were premium.

P(premium | completed) = 81/141 ≈ **0.5745**.

Both (a) and (c) use the same cell, 81, but (a) divides by the 150 premium users and (c) divides by the 141 users who completed the streak. Different groups give different probabilities.

## The general multiplication rule

Rearrange the definition P(B | A) = P(A ∩ B) / P(A) by multiplying both sides by P(A):

**P(A ∩ B) = P(A) · P(B | A)**

This is the **general multiplication rule**. In words: for A and B both to happen, A must happen, and **then**, given that A has happened, B must happen.

It is most useful when events happen in stages, such as two draws one after the other.

**Example: drawing without replacement.** A fictional school raffle has 12 tickets left in a box, and 4 of them are winning tickets. Two tickets are drawn at random, one after the other, **without** putting the first back.

- P(first wins) = 4/12.
- Given that the first ticket won, 11 tickets remain and 3 of them win: P(second wins | first wins) = 3/11.
- P(both win) = (4/12) × (3/11) = 12/132 = **1/11 ≈ 0.0909**.

A common mistake is to use 4/12 for the second draw as well, giving (4/12)² = 1/9 ≈ 0.1111. That would be right only if the first ticket were put back. Without replacement, the second probability is conditional on what happened first.

## Tree diagrams

A **tree diagram** shows a process in stages. Each branch is labelled with a probability. Branches from the first point show the first stage. Branches from each later point are **conditional** on the path taken to reach it.

To use a tree:

- The probabilities on the branches leaving any one point add to 1.
- **Multiply along a path** to get a joint probability. This is the general multiplication rule.
- The paths at the ends are nonoverlapping outcomes, so their probabilities add to 1. To find the probability of an event made of several paths, **add those paths**.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="tree26-title tree26-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tree26-title">Tree diagram for parcel delivery method and lateness</title>
<desc id="tree26-desc">A tree diagram starting from one point. The first two branches go to Van with probability 0.70 and Bike courier with probability 0.30. From Van, two branches go to Late with probability 0.10 and On time with probability 0.90. From Bike courier, two branches go to Late with probability 0.04 and On time with probability 0.96. At the end of each path the joint probability is shown: van and late 0.70 times 0.10 equals 0.070; van and on time 0.70 times 0.90 equals 0.630; bike and late 0.30 times 0.04 equals 0.012; bike and on time 0.30 times 0.96 equals 0.288. The two late paths are marked with an arrow and the label late.</desc>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="30" y1="150" x2="170" y2="80"/>
<line x1="30" y1="150" x2="170" y2="220"/>
<line x1="235" y1="80" x2="350" y2="40"/>
<line x1="235" y1="80" x2="350" y2="120"/>
<line x1="235" y1="220" x2="350" y2="185"/>
<line x1="235" y1="220" x2="350" y2="260"/>
</g>
<circle cx="30" cy="150" r="4" fill="#1d2b44"/>
<g font-size="14" fill="#1d2b44">
<text x="175" y="85">Van</text>
<text x="175" y="225">Bike</text>
<text x="355" y="45">Late</text>
<text x="355" y="125">On time</text>
<text x="355" y="190">Late</text>
<text x="355" y="265">On time</text>
</g>
<g font-size="13" fill="#1d2b44">
<text x="82" y="106" text-anchor="middle">0.70</text>
<text x="82" y="205" text-anchor="middle">0.30</text>
<text x="283" y="52" text-anchor="middle">0.10</text>
<text x="283" y="114" text-anchor="middle">0.90</text>
<text x="283" y="194" text-anchor="middle">0.04</text>
<text x="283" y="255" text-anchor="middle">0.96</text>
</g>
<g font-size="13" fill="#1d2b44">
<text x="430" y="45">0.70 × 0.10 = 0.070 ◀ late</text>
<text x="430" y="125">0.70 × 0.90 = 0.630</text>
<text x="430" y="190">0.30 × 0.04 = 0.012 ◀ late</text>
<text x="430" y="265">0.30 × 0.96 = 0.288</text>
</g>
<text x="430" y="292" font-size="12" fill="#1d2b44">End probabilities add to 1.000</text>
</svg>
<figcaption>Figure 1. Tree diagram for the fictional Swiftpost delivery company in Worked example 2. Second-stage branches are conditional probabilities, for example P(late | van) = 0.10. Multiplying along a path gives a joint probability. The two paths ending in "late" are marked with an arrow and the word "late".</figcaption>
</figure>

## Worked example 2: reversing a conditional probability with a tree

**Question.** A fictional company, Swiftpost, sends 70% of its parcels by van and 30% by bike courier. Of van parcels, 10% arrive late. Of bike-courier parcels, 4% arrive late. One parcel is chosen at random.

(a) Find P(van ∩ late).
(b) Find P(late).
(c) A customer's parcel arrived late. Find the probability that it went by van.

**Step 1: label the information.** P(van) = 0.70 and P(bike) = 0.30. The lateness rates are conditional: P(late | van) = 0.10 and P(late | bike) = 0.04. Draw the tree (Figure 1). The missing branches are P(on time | van) = 1 − 0.10 = 0.90 and P(on time | bike) = 1 − 0.04 = 0.96.

**(a)** Multiply along the van-then-late path (general multiplication rule):

P(van ∩ late) = P(van) · P(late | van) = 0.70 × 0.10 = **0.07**.

**(b)** A parcel can be late in two ways, by van or by bike. These two paths cannot both happen to one parcel, so add them:

P(bike ∩ late) = 0.30 × 0.04 = 0.012.
P(late) = 0.07 + 0.012 = **0.082**.

**(c)** "Arrived late" is the condition, so you need P(van | late). Use the definition:

P(van | late) = P(van ∩ late) / P(late) = 0.07 / 0.082 ≈ **0.8537**.

**Interpretation.** Given that a Swiftpost parcel arrived late, the probability that it went by van is about 0.854.

**Check.** Imagine 10,000 parcels. About 7,000 go by van, and 10% of those, 700, are late. About 3,000 go by bike, and 4% of those, 120, are late. So 820 parcels are late, and 700 of them went by van: 700/820 ≈ 0.8537. ✓ Notice that P(late | van) = 0.10 but P(van | late) ≈ 0.854. Swapping the condition changes the answer completely.

## Common misconceptions

- **"P(A | B) = P(B | A)."** They share the same joint probability on top but divide by different things. In Worked example 2, P(late | van) = 0.10 while P(van | late) ≈ 0.854.
- **Dividing by the grand total.** In a two-way table, a conditional probability divides by the total of the **condition's** row or column. Dividing by the grand total gives the joint probability instead.
- **Picking the wrong condition from words.** "The proportion of premium users who completed the streak" is P(completed | premium): the group named after "of" is the condition. "The proportion of completers who were premium" is P(premium | completed).
- **Not updating for "without replacement".** After one item is removed, both the number of items and (often) the number of successes change. Use conditional probabilities for later draws.
- **Using P(A) · P(B) for "A and B".** That shortcut is only for independent events (Topic 2.7). The general rule P(A) · P(B | A) is always correct.
- **Rounding too early.** In Worked example 2, rounding P(late) to 0.08 would give 0.07/0.08 = 0.875 instead of 0.8537. Keep full values until the end.
- **Reading a conditional probability as cause.** A higher P(completed | premium) in observational data does not show that the premium plan causes users to finish.

## Where this leads

Next, in [Topic 2.7](/advanced-course-resources/statistics/2-7-independent-events-unions-events-study-guide/), you will compare P(A | B) with P(A) to decide whether two events are **independent**, and use the joint probability to find P(A or B). Conditional thinking returns later in the course whenever you read the result of a significance test. Look back at [Topic 2.5](/advanced-course-resources/statistics/2-5-mutually-exclusive-events-study-guide/) if joint probability still feels shaky. Now try the [practice questions](/advanced-course-resources/statistics/2-6-conditional-probability-practice/), then use the [revision notes](/advanced-course-resources/statistics/2-6-conditional-probability-revision-notes/) and the [checklist](/advanced-course-resources/statistics/2-6-conditional-probability-checklist/) to consolidate.
