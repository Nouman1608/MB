---
resourceId: "mb-ap-stats-2.7-study-guide"
title: "Independent Events and Unions of Events: Study Guide (Statistics 2.7)"
description: "Learn what independent events are, how to check independence from a table or from given probabilities, and how to find P(A or B) with the general addition rule."
course: "statistics"
unit: 2
topics: ["2.7"]
resourceType: "study-guide"
prerequisites:
  - "Probability of an event and of its complement (Topic 2.4)"
  - "Mutually exclusive events and P(A ∩ B) (Topic 2.5)"
  - "Conditional probability and the general multiplication rule (Topic 2.6)"
prerequisiteResources: ["mb-ap-stats-2.6-study-guide"]
learningObjectives:
  - "Explain what it means for two events to be independent, in context"
  - "Decide whether two events are independent by comparing P(A | B) with P(A), or P(A ∩ B) with P(A) · P(B)"
  - "Use the multiplication rule P(A ∩ B) = P(A) · P(B) for independent events, including several independent trials"
  - "Calculate P(A ∪ B) with the general addition rule and explain why P(A ∩ B) is subtracted"
  - "Tell the difference between independent events and mutually exclusive events"
skills: ["3"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Any calculator that multiplies and raises to a power is enough. Keep at least 4 decimal places in working; round final probabilities to 4 decimal places unless told otherwise."
related: ["mb-ap-stats-2.7-revision-notes", "mb-ap-stats-2.7-practice", "mb-ap-stats-2.7-checklist"]
next: "mb-ap-stats-2.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "A and B are independent when knowing that one happened does not change the probability of the other: P(A | B) = P(A)."
  - "For independent events only, P(A ∩ B) = P(A) · P(B). Check any one of the three equivalent conditions."
  - "P(A ∪ B) means A or B or both. General addition rule: P(A ∪ B) = P(A) + P(B) − P(A ∩ B)."
  - "Mutually exclusive is not the same as independent. Two mutually exclusive events with non-zero probabilities are never independent."
  - "For several independent trials, P(at least one) = 1 − P(none)."
faqs:
  - question: "Which of the three conditions should I check for independence?"
    answer: "Any one of them. If one holds, all three hold. Choose the one that uses the numbers you already have, and show the comparison with both values written out."
  - question: "Can I assume two events are independent?"
    answer: "Only when the situation makes it reasonable, such as separate spins of a spinner, or when the question tells you to. Say the assumption in words. When you have data, check it instead."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What does "independent" mean?

Two events are **independent** if knowing whether one of them happened does not change the probability of the other. Learning about A gives you no new information about B.

Think of two separate spins of a fair spinner. The first spin landing on 3 tells you nothing about the second spin. The events "first spin is 3" and "second spin is 3" are independent.

Now think of one person chosen at random from a school. "The person is over 180 cm tall" and "the person plays basketball for the school team" are probably **not** independent. If you learn that the person plays basketball, the probability that they are tall goes up.

Independence is about **probabilities**, not about whether the events feel connected. You decide it with numbers, or you state it as an assumption when the situation justifies it.

## Three ways to check for independence

From Topic 2.6, P(A | B) is the probability of A given that B has happened. Events A and B are independent if and only if any one of these is true:

| Condition | In words |
|---|---|
| P(A \| B) = P(A) | Knowing B happened does not change the probability of A. |
| P(B \| A) = P(B) | Knowing A happened does not change the probability of B. |
| P(A ∩ B) = P(A) · P(B) | The probability of both equals the product of the separate probabilities. |

The three conditions are equivalent (as long as P(A) and P(B) are not 0). If one holds, they all hold. If one fails, they all fail. So you need to check only one. Pick the one that uses numbers you already have.

**Where the product rule comes from.** The general multiplication rule from Topic 2.6 says P(A ∩ B) = P(A) · P(B | A). If A and B are independent, P(B | A) is just P(B). Replace it and you get

**P(A ∩ B) = P(A) · P(B)** (independent events only).

This is the **multiplication rule for independent events**. It extends to more than two events: if A, B and C are independent, P(A ∩ B ∩ C) = P(A) · P(B) · P(C).

**How to write a check.** Show both numbers and compare them. For example: "P(F | C) = 0.40 and P(F) = 0.46. Since 0.40 ≠ 0.46, the events are not independent." A bare "not equal, so dependent" earns little.

## The union of two events: A or B

The **union** A ∪ B is the event that A happens, or B happens, or both happen. In statistics, "or" always includes "both" unless you are told otherwise.

You might try P(A) + P(B). The problem is the overlap. Outcomes in **both** A and B are counted once inside P(A) and again inside P(B). To count them only once, subtract the overlap one time. This gives the **general addition rule**:

**P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**

This rule works for **any** two events. Two special cases:

- If A and B are **mutually exclusive** (Topic 2.5), P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B).
- If A and B are **independent**, you can find the overlap with the product rule: P(A ∪ B) = P(A) + P(B) − P(A) · P(B).

A useful check: P(A ∪ B) can never be bigger than 1, and can never be smaller than the larger of P(A) and P(B). Also, P(A ∪ B) = 1 − P(neither A nor B), because "neither" is the complement of "A or B".

## Seeing a union on a Venn diagram

The data below come from a fictional ferry company, Northwind Ferries. On one crossing, 800 passengers were recorded. Event **C**: the passenger travelled with a car. Event **F**: the passenger bought food on board.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="ferry-title ferry-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ferry-title">Venn diagram of car and food events for 800 ferry passengers</title>
<desc id="ferry-desc">A rectangle labelled all 800 passengers contains two overlapping circles. The left circle, drawn with a solid outline, is event C, travelled with a car. The right circle, drawn with a dashed outline, is event F, bought food on board. The part of C outside F contains 192 passengers. The overlap of C and F contains 128 passengers. The part of F outside C contains 240 passengers. The region outside both circles contains 240 passengers. The union of C and F is the 192 plus 128 plus 240, which is 560 passengers.</desc>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<rect x="30" y="20" width="580" height="260" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="42" y="42" font-size="14" fill="#1d2b44">All 800 passengers</text>
<circle cx="260" cy="160" r="105" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="380" cy="160" r="105" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5"/>
<text x="200" y="72" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44">C: car (solid)</text>
<text x="440" y="72" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44">F: food (dashed)</text>
<text x="205" y="158" text-anchor="middle" font-size="20" fill="#1d2b44">192</text>
<text x="205" y="180" text-anchor="middle" font-size="12" fill="#1d2b44">car only</text>
<text x="320" y="158" text-anchor="middle" font-size="20" font-weight="bold" fill="#1d2b44">128</text>
<text x="320" y="180" text-anchor="middle" font-size="12" fill="#1d2b44">both</text>
<text x="435" y="158" text-anchor="middle" font-size="20" fill="#1d2b44">240</text>
<text x="435" y="180" text-anchor="middle" font-size="12" fill="#1d2b44">food only</text>
<text x="560" y="250" text-anchor="middle" font-size="20" fill="#1d2b44">240</text>
<text x="560" y="270" text-anchor="middle" font-size="12" fill="#1d2b44">neither</text>
</svg>
<figcaption>Figure 1. Northwind Ferries passengers (fictional). The union C ∪ F is everything inside at least one circle: 192 + 128 + 240 = 560 passengers. Adding the two circle totals, 320 + 368 = 688, counts the 128 in the overlap twice.</figcaption>
</figure>

The same counts as a two-way table:

| | Bought food (F) | No food | Total |
|---|---|---|---|
| Car (C) | 128 | 192 | 320 |
| No car | 240 | 240 | 480 |
| Total | 368 | 432 | 800 |

## Worked example 1: checking independence and finding a union from a table

**Question.** One passenger is chosen at random from the 800. (a) Find P(C), P(F) and P(C ∩ F). (b) Are C and F independent? Justify your answer. (c) Find P(C ∪ F) and interpret it.

**(a)**

1. P(C) = 320 ÷ 800 = 0.40.
2. P(F) = 368 ÷ 800 = 0.46.
3. P(C ∩ F) = 128 ÷ 800 = 0.16.

**(b)** Use the conditional-probability check. Among car passengers, P(F | C) = 128 ÷ 320 = 0.40. For all passengers, P(F) = 0.46. Since 0.40 ≠ 0.46, knowing that a passenger has a car **changes** the probability that they bought food. C and F are **not independent**.

The product check gives the same verdict: P(C) · P(F) = 0.40 × 0.46 = 0.184, but P(C ∩ F) = 0.16. Since 0.184 ≠ 0.16, the events are not independent.

**(c)** P(C ∪ F) = P(C) + P(F) − P(C ∩ F) = 0.40 + 0.46 − 0.16 = **0.70**.

**Interpretation.** If one of these 800 passengers is chosen at random, the probability that the passenger travelled with a car, bought food on board, or both, is 0.70.

**Check.** The only passengers outside C ∪ F are the 240 with no car and no food. 1 − 240 ÷ 800 = 1 − 0.30 = 0.70. It matches. Without the subtraction you would get 0.86, which counts the 128 "both" passengers twice.

**Note.** Car passengers were *less* likely to buy food (0.40 compared with 0.50 for passengers without a car). The data do not tell us why. Perhaps drivers ate in their cars.

## Worked example 2: independent events and "at least one"

**Question.** A fictional bakery, Crumb & Co., has an oven and a mixer. On any working day, the oven breaks down with probability 0.04 and the mixer breaks down with probability 0.07. Assume breakdowns of the two machines are independent.

(a) Find the probability that both machines break down on the same day.
(b) Find the probability that at least one machine breaks down on a given day.
(c) Find the probability that there is at least one day with a breakdown in a 5-day working week. Assume different days are independent.

**(a)** Let O = oven breaks down, M = mixer breaks down. Because they are independent,

P(O ∩ M) = P(O) · P(M) = 0.04 × 0.07 = **0.0028**.

**(b)** "At least one" is the union O ∪ M.

P(O ∪ M) = P(O) + P(M) − P(O ∩ M) = 0.04 + 0.07 − 0.0028 = **0.1072**.

**Check with the complement.** "At least one breaks down" is the opposite of "neither breaks down". P(neither) = (1 − 0.04)(1 − 0.07) = 0.96 × 0.93 = 0.8928. Then 1 − 0.8928 = 0.1072. It matches. (Multiplying 0.96 and 0.93 is allowed because if O and M are independent, so are their complements.)

**(c)** On one day, P(no breakdown) = 0.8928. For 5 independent days,

P(no breakdown on any of the 5 days) = 0.8928⁵ ≈ 0.5672.

P(at least one day with a breakdown) = 1 − 0.5672 ≈ **0.4328**.

**Interpretation.** In about 43% of 5-day weeks, the bakery can expect at least one day on which a machine breaks down.

**Why not 5 × 0.1072?** That gives 0.536, which counts weeks with two or more breakdown days more than once. With more days the same mistake gives a "probability" above 1. The complement route avoids this.

**Is independence reasonable?** Only if the machines do not share a cause of failure. If both run on the same electrical circuit, a power cut could stop both, and the multiplication rule would underestimate P(O ∩ M). State the assumption and think about whether it fits.

## Worked example 3: independent is not the same as mutually exclusive

**Question.** A fair spinner has 10 equal sectors numbered 1 to 10. It is spun once. Let A = "the number is even", B = "the number is 4 or less" and C = "the number is 9 or 10". (a) Are A and B independent? (b) Are B and C independent? Are they mutually exclusive? (c) Find P(A ∪ B) and P(B ∪ C).

**(a)** A = {2, 4, 6, 8, 10}, so P(A) = 0.5. B = {1, 2, 3, 4}, so P(B) = 0.4. A ∩ B = {2, 4}, so P(A ∩ B) = 0.2.

P(A) · P(B) = 0.5 × 0.4 = 0.2 = P(A ∩ B). So A and B **are independent**. In words: P(A | B) = 2 ÷ 4 = 0.5 = P(A). Knowing the number is 4 or less leaves the chance of an even number at one half.

**(b)** C = {9, 10}, so P(C) = 0.2. B and C share no outcomes, so P(B ∩ C) = 0: they **are mutually exclusive**.

P(B) · P(C) = 0.4 × 0.2 = 0.08, but P(B ∩ C) = 0. Since 0 ≠ 0.08, B and C are **not independent**. Knowing B happened tells you C is impossible: P(C | B) = 0, not 0.2.

**(c)** P(A ∪ B) = 0.5 + 0.4 − 0.2 = **0.7**. Check by listing: A ∪ B = {1, 2, 3, 4, 6, 8, 10}, which is 7 of 10 sectors.

P(B ∪ C) = 0.4 + 0.2 − 0 = **0.6**. Check: {1, 2, 3, 4, 9, 10}, 6 of 10 sectors.

**The lesson.** Mutually exclusive events with non-zero probabilities are always **dependent**: if one happens, the other cannot. Independent events with non-zero probabilities always **overlap**.

## Common misconceptions

- **"Independent means mutually exclusive."** These are different ideas. Mutually exclusive means P(A ∩ B) = 0. Independent means P(A ∩ B) = P(A) · P(B). Both can be true only if one of the events has probability 0.
- **Adding for "or" when the events overlap.** P(A) + P(B) works only for mutually exclusive events. Otherwise subtract P(A ∩ B). A "probability" above 1 is a warning sign.
- **Multiplying without checking independence.** P(A) · P(B) gives P(A ∩ B) only for independent events. Otherwise use P(A) · P(B | A).
- **"The events have nothing to do with each other, so they must be independent."** Independence must be checked with data or justified by how the outcomes are produced. State it as an assumption when you use it.
- **"After four reds in a row, a different colour is due."** For independent spins, past results do not change the next spin. The probability stays the same each time.
- **"P(at least one in n tries) = n × p."** This overcounts. Use 1 − P(none).
- **Comparing the wrong pair.** To check independence with conditional probabilities, compare P(A | B) with P(A), not with P(B), and not P(A | B) with P(B | A).
- **A verdict with no numbers.** Write both values and the comparison: "0.40 ≠ 0.46, so not independent".

## Where this leads

Next, in Topic 2.8, you will use these rules to build **probability distributions**: tables that give the probability of each possible value of a random variable. Independence and the multiplication rule are how many of those probabilities are found, and they return in the binomial distribution in Topic 2.10. Read [Introduction to Random Variables and Probability Distributions](/advanced-course-resources/statistics/2-8-introduction-random-variables-probability-distributions-study-guide/) when you are ready.

First, try the [practice questions](/advanced-course-resources/statistics/2-7-independent-events-unions-events-practice/), then use the [revision notes](/advanced-course-resources/statistics/2-7-independent-events-unions-events-revision-notes/) and the [checklist](/advanced-course-resources/statistics/2-7-independent-events-unions-events-checklist/) to consolidate. If conditional probability still feels shaky, go back to [Conditional Probability](/advanced-course-resources/statistics/2-6-conditional-probability-study-guide/).
