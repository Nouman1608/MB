---
title: "Cambridge O Level Statistics: Probability basics and mutually exclusive events (4040) -- Revision Notes"
seoTitle: "O Level Statistics 4040 Probability Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Probability basics and mutually exclusive events"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 25
syllabusTopics:
  - qualification: "o-level"
    topic: "elementary-ideas-of-probability-4040"
description: "Revision notes on sample space, relative frequency, complement, mutually exclusive events and the addition rule for Cambridge O Level Statistics 4040."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense topic 11, *Elementary ideas of probability*, from the Cambridge O Level Statistics 4040 syllabus for examination in 2025, 2026 and 2027. They focus on the basic ideas and mutually exclusive events. For fuller explanations, read the [study guide](/resources/cambridge-o-level-statistics-probability-basics-and-mutually-exclusive-events/). Then test yourself with the [practice questions](/resources/cambridge-o-level-statistics-probability-basics-and-mutually-exclusive-events-practice/).

Course pages: [O Level Statistics hub](/boards/cambridge/o-level/statistics/), [printable checklist](/checklists/cambridge/o-level/statistics/) and [free 10-minute diagnostics](/diagnostics/). Related: [Venn diagrams for data](/resources/cambridge-o-level-statistics-venn-box-and-whisker-and-stem-and-leaf-diagrams/).

## Key definitions

| Term | Meaning |
|---|---|
| Experiment | A process with an uncertain result, such as rolling a die |
| Outcome | One possible result |
| Sample space, S | The set of all outcomes |
| Event | A set of outcomes you are interested in |
| Equally likely | Every outcome has the same chance |
| Complement, A′ | A does not happen |
| Mutually exclusive | Events that cannot both happen in one trial, so A ∩ B = Ø |
| Relative frequency | Times the event happened divided by number of trials |
| Expected number | Probability × number of trials |

Syllabus notation to recognise: n(A) for the number of elements in A, A′ for the complement, ∪ for union (or), ∩ for intersection (and), Ø for the empty set, and the symbol for the universal set.

## Formulas

| Situation | Formula |
|---|---|
| Equally likely outcomes | P(A) = n(A) / n(S) |
| Range of values | 0 ≤ P(A) ≤ 1 |
| Estimate from trials | P(A) ≈ frequency / trials |
| Expected number | probability × number of trials |
| Complement | P(A′) = 1 − P(A) |
| Mutually exclusive events | P(A ∪ B) = P(A) + P(B) |
| Any two events | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) |
| Full set of exclusive events | All probabilities add to 1 |
| Counting form | n(A ∪ B) = n(A) + n(B) − n(A ∩ B) |

Work out whether the formula needs the overlap before you add anything.

## Method in steps

**Finding a probability from equally likely outcomes**

1. List or count the sample space. Use a table for two stages.
2. Count the outcomes in the event.
3. Divide, then simplify.

**Deciding if two events are mutually exclusive**

1. Ask: can one outcome belong to both events?
2. If yes, they overlap and are not exclusive. Use the general addition rule.
3. If no, add the probabilities.

**Filling a Venn diagram**

1. Write the intersection first.
2. Take it away from each set's total to leave the "only" regions.
3. Subtract all regions from the total to get "neither".
4. Check that the regions add to the total.

**Using a tree diagram**

1. Put probabilities on each branch. Branches from one point add to 1.
2. Multiply along a path when the stages are independent.
3. Add the paths that make up the event, because different paths are exclusive.
4. Check that all path probabilities add to 1.

## Small worked reminders

**Exclusive events.** A bag holds 24 sweets: 9 mint, 8 toffee and 7 fruit. One is taken.

```
P(mint or fruit) = 9/24 + 7/24 = 16/24 = 2/3
P(not toffee)    = 1 − 8/24 = 2/3   (the same, as it must be)
```

**Relative frequency.** A counter lands tails 27 times in 60 throws.

```
Estimate = 27/60 = 0.45
Expected tails in 200 throws = 0.45 × 200 = 90
```

**Addition rule with an unknown overlap.** P(A) = 0.6, P(B) = 0.35 and P(neither) = 0.1.

```
P(A ∪ B) = 1 − 0.1 = 0.9
P(A ∩ B) = 0.6 + 0.35 − 0.9 = 0.05
```

**Venn diagram.** Of 40 members of a club, 22 play chess, 15 act in drama and 9 do neither.

```
Union = 40 − 9 = 31
Both  = 22 + 15 − 31 = 6
Chess only = 22 − 6 = 16,  Drama only = 15 − 6 = 9
P(exactly one activity) = (16 + 9)/40 = 25/40 = 5/8
```

**Two-way table.** In a table of 100 customers, 60 are adults and 35 paid by card. Of the adults, 21 paid by card.

```
P(adult or card) = 60/100 + 35/100 − 21/100 = 74/100 = 37/50
P(child and card) = (35 − 21)/100 = 14/100 = 7/50
```

**Tree diagram.** A player scores each of two independent penalties with probability 0.6.

```
P(both)     = 0.6 × 0.6 = 0.36
P(neither)  = 0.4 × 0.4 = 0.16
P(exactly one) = 2 × (0.6 × 0.4) = 0.48
Check: 0.36 + 0.16 + 0.48 = 1
```

**Complement for "at least one".** Three fair coins are tossed. List the eight outcomes or use the complement:

```
P(at least one head) = 1 − P(no heads) = 1 − 1/8 = 7/8
```

## Must-know distinctions

- **Exclusive versus overlapping.** "Heart" and "king" from a pack of cards overlap, because the king of hearts is both. "Heart" and "spade" do not.
- **Exclusive versus independent.** Mutually exclusive events cannot happen together. Independent events do not affect each other. Two events that each have a non-zero probability cannot be both exclusive and independent, so never use the two words as if they meant the same thing. Independence is treated in more detail under the same syllabus topic.
- **Probability versus relative frequency.** A probability from equal likelihood is calculated. A relative frequency is measured from trials and is an estimate.
- **Expected number versus actual number.** The expected number is an average, not a promise.
- **Or versus and.** "A or B" is the union and uses addition. "A and B" is the intersection, which is the overlap.
- **Exactly one versus at least one.** "Exactly one" excludes the overlap. "At least one" is the union, and is often easier as 1 − P(none).

## Quick self-test

1. A fair die is rolled. Find P(a number greater than 4).
2. P(rain tomorrow) = 0.35. Find P(no rain).
3. A bag has 4 red, 6 white and 5 black counters. Find P(red or black).
4. An event occurs 36 times in 150 trials. Estimate its probability, then the number of occurrences expected in 400 trials.
5. Events A and B are exclusive, with P(A) = 0.25 and P(B) = 0.4. Find P(A ∪ B).
6. P(A) = 0.35, P(B) = 0.5 and P(A ∩ B) = 0.15. Find P(A ∪ B).
7. Could events with P(A) = 0.6 and P(B) = 0.5 be mutually exclusive? Explain.
8. Of 30 pupils, 12 play hockey, 10 play netball and 4 play both. Find P(neither).
9. A player wins each of two independent games with probability 0.15. Find P(wins exactly one game).
10. The probabilities of four exclusive outcomes are 0.1, 0.3, x and 0.25, and they cover every outcome. Find x.
11. A card is chosen at random from cards numbered 1 to 25. Find P(a multiple of 5).

### Answers

1. Numbers 5 and 6, so **2/6 = 1/3**.
2. 1 − 0.35 = **0.65**.
3. (4 + 5)/15 = 9/15 = **3/5**.
4. 36/150 = **0.24**; expected 0.24 × 400 = **96**.
5. 0.25 + 0.4 = **0.65**.
6. 0.35 + 0.5 − 0.15 = **0.7**.
7. **No.** For exclusive events P(A ∪ B) = 0.6 + 0.5 = 1.1, which is more than 1.
8. Union = 12 + 10 − 4 = 18, so neither = 30 − 18 = 12 and P = 12/30 = **2/5**.
9. Win-lose or lose-win: 0.15 × 0.85 + 0.85 × 0.15 = **0.255**.
10. 0.1 + 0.3 + x + 0.25 = 1, so x = **0.35**.
11. 5, 10, 15, 20, 25 give 5 cards: 5/25 = **1/5**.

## Writing answers clearly

The syllabus overview asks candidates to show all working on the question paper, so set your work out as a short chain of steps.

- Name the event: "Let A be the event that the pupil studies French."
- Write the rule before the numbers: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).
- Substitute, then evaluate, then state the answer in the form asked for.
- When a question says "explain" or "show", give the reason in a sentence, such as "the events cannot both happen because no number is both prime and a square".
- Finish with a quick reasonableness check: the answer must lie between 0 and 1, and an event that includes another must be at least as likely.

## Where marks are usually lost

- Counting the overlap twice when the events can happen together, without taking off P(A ∩ B).
- Treating "two heads, one head, no heads" as equally likely outcomes.
- Giving a probability as a ratio such as 3 : 7 or as a number above 1.
- Not simplifying a fraction, or giving a decimal that has been rounded early.
- Using 1 − P(A) when the question asks for a different event, such as "at least one" of two.
- Forgetting that a Venn diagram needs a "neither" region outside the circles.
- Answering "expected number" with a probability, or giving a decimal count of people without comment.
- Giving only a final answer. Writing the addition or subtraction makes your method visible.
- Saying events are exclusive without a reason. State the overlapping outcome, or show that there is none.

## Official syllabus

Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, published by Cambridge University Press & Assessment (Cambridge International Education).
