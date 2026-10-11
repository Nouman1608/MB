---
title: "OxfordAQA International GCSE Mathematics: Sample spaces, mutually exclusive events and Venn probability (9260) -- Revision Notes"
seoTitle: "OxfordAQA IGCSE Maths Sample Spaces Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Sample spaces, mutually exclusive events and Venn diagram probability"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9260"]
syllabusSeries: "Version 5.1 (for exams May/June 2018 onwards)"
order: 101
syllabusTopics:
  - qualification: "igcse"
    topic: "statistics-and-probability-oxfordaqa-igcse-maths"
    subtopic: "probability-oxfordaqa-igcse-maths"
description: "Condensed revision notes on sample spaces, mutually exclusive events and Venn diagram probability for OxfordAQA International GCSE Mathematics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These revision notes cover OxfordAQA International GCSE Mathematics (9260), specification Version 5.1 (for exams May/June 2018 onwards), section 3.4.3 Probability, references S14, S15 and S16. All of this is Core content, which can also be assessed on the Extension Tier papers. The [study guide](/resources/oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn/) gives the full explanations. To test yourself, use the [practice questions](/resources/oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn-practice/). The [course hub](/boards/oxfordaqa/igcse/mathematics/), the [checklist](/checklists/oxfordaqa/igcse/mathematics/) and the [free diagnostics](/diagnostics/) show where this topic sits and how secure you are.

## Key facts

| Reference | Fact |
|---|---|
| S14 | A sample space lists every possible outcome. Use it for single events and for two successive events |
| S14 | Probability = favourable outcomes ÷ total outcomes, only when outcomes are equally likely |
| S15 | Mutually exclusive: the events cannot both happen |
| S15 | Exhaustive: at least one of the outcomes must happen |
| S15 | Mutually exclusive and exhaustive outcomes: probabilities sum to 1 |
| S15 | If A and B are mutually exclusive, P(A ∪ B) = P(A) + P(B) |
| S16 | Venn diagram: rectangle for everything, circles for properties, overlap for both |

Two consequences you will use again and again:

```
P(not A) = 1 − P(A)
total of all Venn regions = size of group (or 1 for probabilities)
```

## S14: Sample spaces

### Method in steps

1. Decide what one outcome looks like, for example (3, H) or (2, 5).
2. Check that the outcomes you list are equally likely. If not, split them until they are, such as labelling each counter.
3. Build a grid or an ordered list. Hold the first item fixed, then run through the second.
4. Count the total. For two successive events, total = outcomes of first × outcomes of second. Without replacement, the second factor is one smaller.
5. Circle or underline the outcomes you want, count them, then write favourable ÷ total and simplify.

### Layouts to know

| Situation | Layout | Total |
|---|---|---|
| One event (die, spinner, bag) | A single list | Number of outcomes |
| Two successive events, with replacement | Grid: first down, second across | m × n |
| Two successive events, no replacement | Ordered pairs with the diagonal removed | m × (m − 1) |
| Event and a coin | Pairs such as (4, T) | 2 × the other |

### Worked reminder

Two fair three-sided spinners, numbered 1, 2, 3 and 2, 4, 6, are spun. The score is the sum.

| 1st \ 2nd | 2 | 4 | 6 |
|---|---|---|---|
| 1 | 3 | 5 | 7 |
| 2 | 4 | 6 | 8 |
| 3 | 5 | 7 | 9 |

There are 9 outcomes. The sum is odd in 6 of them (3, 5, 7, 5, 7, 9), so P(odd) = 6/9 = 2/3.

Without replacement, order still matters. Pairs (2, 5) and (5, 2) are two outcomes.

## S15: Mutually exclusive and exhaustive

### Definitions with examples (one fair die)

| Events | Mutually exclusive? | Exhaustive? |
|---|---|---|
| Odd, even | Yes | Yes |
| Less than 3, greater than 4 | Yes | No (3 and 4 missing) |
| Odd, less than 3 | No (1 is in both) | No (4 and 6 missing) |
| Factor of 6, multiple of 4 | Yes | No (5 missing) |

### Method for a missing probability

1. Confirm the listed outcomes are mutually exclusive and exhaustive.
2. Add the known probabilities.
3. Subtract the total from 1.
4. If the unknown is an algebraic expression, form an equation and solve it.

**Worked reminder.** P(win) = 0.35, P(draw) = 0.2 and P(lose) = y. Then 0.35 + 0.2 + y = 1, so y = 0.45.

### The addition rule

When A and B are mutually exclusive, P(A ∪ B) = P(A) + P(B). If you cannot say that the events are mutually exclusive, do not use the rule.

**Worked reminder.** P(A) = 0.35 and P(B) = 0.45, mutually exclusive. P(A or B) = 0.8, so P(neither) = 0.2.

### Must-know distinctions

- Mutually exclusive means no overlap. Exhaustive means no gap. A pair can have either, both or neither.
- If P(A) + P(B) = 1, the events need not be exhaustive or exclusive. Check by listing.
- If two events can both happen, then P(A) + P(B) counts the overlap twice. Use a Venn diagram or a list instead.
- P(not A) = 1 − P(A) works because A and "not A" are mutually exclusive and exhaustive.

## S16: Venn diagrams

### Method in steps

1. Draw a rectangle and the right number of overlapping circles. Label each circle.
2. Find the overlap first. With two sets, both = (total of A) + (total of B) − (people in at least one).
3. Subtract the overlap from each circle total to get the "only" regions.
4. People in at least one = total − neither.
5. Check that all regions add to the total.
6. Read off the region you need and divide by the total.

### Worked reminder (counts)

Of 30 pupils, 14 have a dog, 11 have a cat and 5 have both. Dog only = 14 − 5 = 9. Cat only = 11 − 5 = 6. Neither = 30 − (9 + 5 + 6) = 10.

| Dog only | Both | Cat only | Neither |
|---|---|---|---|
| 9 | 5 | 6 | 10 |

P(neither) = 10/30 = 1/3. P(exactly one pet) = (9 + 6)/30 = 1/2.

### Worked reminder (probabilities)

P(A) = 0.6, P(B) = 0.5 and P(neither) = 0.1. At least one: 0.9. Both = 0.6 + 0.5 − 0.9 = 0.2. A only 0.4, B only 0.3, and 0.4 + 0.2 + 0.3 + 0.1 = 1.

### Reading regions in words

| Wording | Region |
|---|---|
| A only, or A but not B | Circle A without the overlap |
| Both A and B | Overlap |
| A or B (or both) | A only + overlap + B only |
| Exactly one of A, B | A only + B only |
| Neither | Outside both circles |
| Not A | Everything outside circle A, including B only and neither |

### Three-circle diagrams

Fill the centre, then the three "exactly two" regions, then the "only" regions. Each "only" value is a circle total minus the three other regions that lie inside that circle. Total the seven regions and subtract from the group size for "none".

## Quick self-test

1. A coin is tossed and then a fair three-sided spinner (1, 2, 3) is spun. How many outcomes are in the sample space?
2. Two fair dice are rolled. Find P(the total is 9).
3. P(A) = 0.35 and P(B) = 0.45, where A and B are mutually exclusive. Find P(A or B) and P(neither).
4. In the numbers 1 to 20, are "multiple of 3" and "multiple of 5" mutually exclusive? Give a reason.
5. A bag has red, blue, yellow and green counters. P(red) = 0.2, P(blue) = 0.35, and yellow and green are equally likely. Find P(yellow).
6. A die is rolled. Are "odd" and "less than 3" mutually exclusive? Are they exhaustive?
7. Of 30 pupils, 14 have a dog, 11 have a cat and 5 have both. How many have neither, and what is P(exactly one pet)?
8. P(A) = 0.6, P(B) = 0.5 and P(neither) = 0.1. Find P(both).
9. Cards 1, 2 and 3 are taken one after the other without replacement. List the sample space and find P(the sum is odd).
10. Two events have P(A) = 0.4 and P(B) = 0.3, and they are mutually exclusive. Find P(A) + P(B) and P(not A and not B), and say what the second value tells you.

### Answers

1. 2 × 3 = **6** outcomes.
2. The pairs that total 9 are (3,6), (4,5), (5,4), (6,3). That is 4 out of 36, so **1/9**.
3. P(A or B) = 0.35 + 0.45 = **0.8**. P(neither) = 1 − 0.8 = **0.2**.
4. **No.** The number 15 is a multiple of both.
5. Yellow and green share 1 − 0.2 − 0.35 = 0.45, so P(yellow) = 0.45 ÷ 2 = **0.225**.
6. **Not mutually exclusive** (1 is odd and less than 3). **Not exhaustive** (4 and 6 are in neither).
7. Neither = 30 − (9 + 5 + 6) = **10**. P(exactly one pet) = 15/30 = **1/2**.
8. At least one = 0.9, so P(both) = 0.6 + 0.5 − 0.9 = **0.2**.
9. The ordered pairs are (1,2), (1,3), (2,1), (2,3), (3,1), (3,2): 6 outcomes. The sum is odd for (1,2), (2,1), (2,3), (3,2), so P = 4/6 = **2/3**.
10. P(A) + P(B) = **0.7**. P(neither) = 1 − 0.7 = **0.3**, the probability that neither event happens.

## Where marks are usually lost

- Listing a sample space whose outcomes are not equally likely, such as one outcome per colour.
- Counting (a, b) and (b, a) as the same outcome, or missing one of them.
- Using the wrong grid size for the second event when there is no replacement.
- Adding P(A) and P(B) for events that can happen together.
- Stating that two events are mutually exclusive without giving a reason. A short reason, such as "15 is in both", makes your claim checkable.
- Putting the circle totals into the circles instead of the "only" values.
- Forgetting the region outside the circles, so the answer is out of the whole group.
- Giving a count such as 15 where a probability such as 15/30 is wanted.
- Answering "A or B" with the overlap counted twice.

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), Version 5.1 (for exams May/June 2018 onwards), published by OxfordAQA, section 3.4.3 Probability, references S14 to S16.
