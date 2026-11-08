---
title: "OxfordAQA International AS and A-level Mathematics: Probability laws, conditional probability and independence (9660) -- Revision Notes"
seoTitle: "OxfordAQA Maths 9660 Probability Laws Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA International AS and A-level Mathematics S1.1: addition and multiplication laws, conditional probability, independence."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These revision notes follow the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, section S1.1 (Further probability). The spec states this content is part of International AS, Unit PSM1. For full explanations and worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-probability-laws-conditional-probability-and/) first. Then test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-probability-laws-conditional-probability-and-practice/), and tick off progress on the [course checklist](/checklists/oxfordaqa/a-level/mathematics/). The whole course sits on the [OxfordAQA Mathematics hub](/boards/oxfordaqa/a-level/mathematics/), and the [free 10-minute diagnostics](/diagnostics/) show where to focus.

## Key definitions

- **Event:** a set of outcomes. P(A) lies between 0 and 1.
- **Equally likely outcomes:** P(A) = (outcomes in A) / (all outcomes).
- **Relative frequency:** P(A) is estimated by (times A occurred) / (number of trials).
- **Complement:** A' means "not A".
- **Mutually exclusive:** A and B cannot both happen, so P(A ∩ B) = 0.
- **Independent:** knowing A has happened does not change the probability of B, so P(B | A) = P(B).

## Laws to know

| Law | Result | Notes |
|---|---|---|
| Complement | P(A') = 1 − P(A) | Use for "at least one" |
| Addition, any two events | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | Spec: two events only |
| Addition, mutually exclusive | P(A ∪ B) = P(A) + P(B) | Spec: two or more events |
| Multiplication | P(A ∩ B) = P(A) × P(B | A) = P(B) × P(A | B) | Spec: two or more events |
| Conditional | P(B | A) = P(A ∩ B) / P(A) | Rearranged multiplication law |
| Independent | P(A ∩ B) = P(A) × P(B) | Spec: two or more events |

For three events in sequence: P(A ∩ B ∩ C) = P(A) × P(B | A) × P(C | A ∩ B).

## Method boxes

**Method: probability from a frequency table**
1. Find the row, column and grand totals.
2. For a plain probability, divide the cell or total you want by the grand total.
3. For "given", divide by the total of the condition only.
4. Simplify, or give a decimal if asked.

**Method: test for independence**
1. Find P(A), P(B) and P(A ∩ B) from the data.
2. Multiply P(A) × P(B).
3. Compare with P(A ∩ B).
4. Write a conclusion: "equal, so independent" or "not equal, so not independent".

**Method: selection without replacement**
1. Write each pick as a fraction.
2. Reduce the numerator and denominator by one for the items removed.
3. Multiply along the sequence.
4. For "at least one", find "none" and subtract from 1.

**Method: unknown probability with independence**
1. Let P(B) = p.
2. Write P(A ∩ B) = P(A) × p.
3. Substitute into the addition law.
4. Solve the linear equation and check that p lies between 0 and 1.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-1--05-two-way-table-given.webp" width="900" height="970" alt="Café table of 250 orders. P(hot and takeaway) = 85/250 = 0.34 uses the grand total; P(hot given takeaway) = 85/150 = 17/30 uses only the takeaway row. Hot and takeaway are not independent since 0.62 x 0.6 = 0.372, not 0.34." loading="lazy">
  <figcaption>The word given restricts you to one row or column, so its total is the denominator.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-1--06-venn-conditional.webp" width="900" height="1050" alt="Venn regions A only 0.45, both 0.10, B only 0.25, neither 0.20. Given B the sample space is the B circle (0.35), so P(A|B) = 0.10/0.35 = 2/7. Given not A the space is 0.45, so P(B|A') = 0.25/0.45 = 5/9." loading="lazy">
  <figcaption>The condition becomes the new sample space and sits in the denominator.</figcaption>
</figure>


## Must-know distinctions

| | Mutually exclusive | Independent |
|---|---|---|
| Test | P(A ∩ B) = 0 | P(A ∩ B) = P(A) × P(B) |
| Union | P(A) + P(B) | P(A) + P(B) − P(A)P(B) |
| Picture | Events do not overlap | Overlap is exactly the product |

Two events with non-zero probabilities cannot be both. If they are exclusive, one happening rules out the other, which is a strong dependence.

Also remember that P(A | B) and P(B | A) are normally different. They share the numerator P(A ∩ B) but divide by different totals.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-1--02-exclusive-vs-independent.webp" width="900" height="1000" alt="With P(A) = 0.4 and P(B) = 0.35, a probability bar shows exclusive events do not overlap (P(A and B) = 0, union 0.75), while a unit square shows independent events overlap in area 0.4 x 0.35 = 0.14 giving a union of 0.61. Exclusive events with non-zero probabilities are never independent." loading="lazy">
  <figcaption>Independence is an overlap equal to the product; exclusivity is no overlap at all.</figcaption>
</figure>


## Small worked reminders

**Reminder 1: addition law.** For P(A) = 0.5, P(B) = 0.3 and P(A ∩ B) = 0.1:

```
P(A ∪ B) = 0.5 + 0.3 − 0.1 = 0.7
```

**Reminder 2: conditional probability from a table.** Of 120 pupils, 45 play chess, and 27 of those also play an instrument.

```
P(instrument | chess) = 27/45 = 3/5
```

**Reminder 3: without replacement.** A bag has 5 red and 3 blue counters. Two are taken without replacement.

```
P(both red) = 5/8 × 4/7 = 20/56 = 5/14
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-1--08-independence-model-check.webp" width="900" height="900" alt="Two students chosen when 45% are girls: the independent model gives 0.2025. The exact value without replacement is 0.2023 for 1200 students (gap 0.0002); illustrative sizes of 100 and 20 students give gaps 0.0025 and 0.0130." loading="lazy">
  <figcaption>Independence is a good approximation for a large population but poor for a small group.</figcaption>
</figure>


## Useful consequences

These follow from the laws above. Each can be derived in a line or two, so you do not need to memorise them separately.

| Situation | Result |
|---|---|
| Split B by whether A happens | P(B) = P(A ∩ B) + P(A' ∩ B) |
| Neither event happens | P(A' ∩ B') = 1 − P(A ∪ B) |
| A happens but B does not | P(A ∩ B') = P(A) − P(A ∩ B) |
| Exactly one of A, B happens | P(A) + P(B) − 2 × P(A ∩ B) |
| Independence and complements | If A and B are independent, so are A and B' |

The first row is the key step in many "find P(B)" questions. A Venn diagram or a table is permitted, so draw one whenever you are unsure which region you are counting.

## More worked reminders

**Reminder 4: four regions from three numbers.** P(A) = 0.45, P(B) = 0.35 and P(A ∩ B) = 0.2.

```
P(A ∩ B')  = 0.45 − 0.2 = 0.25
P(A' ∩ B)  = 0.35 − 0.2 = 0.15
P(A' ∩ B') = 1 − (0.25 + 0.2 + 0.15) = 0.4
Check: 0.25 + 0.2 + 0.15 + 0.4 = 1
```

**Reminder 5: testing independence.** In the example above, P(A) × P(B) = 0.45 × 0.35 = 0.1575, while P(A ∩ B) = 0.2. These differ, so A and B are not independent.

**Reminder 6: relative frequency table.** A survey of 200 customers gives these relative frequencies.

| | Online | In store |
|---|---|---|
| Under 30 | 0.24 | 0.16 |
| 30 or over | 0.22 | 0.38 |

```
P(under 30)              = 0.24 + 0.16 = 0.4
P(online)                = 0.24 + 0.22 = 0.46
P(online | under 30)     = 0.24 / 0.4 = 0.6
P(under 30) x P(online)  = 0.4 x 0.46 = 0.184, not 0.24
```

The probabilities in the table add to 1. The two events are not independent, because 0.184 is not equal to 0.24.

**Reminder 7: three independent events.** Three independent switches work with probabilities 0.9, 0.8 and 0.7.

```
All work:       0.9 x 0.8 x 0.7 = 0.504
At least one fails: 1 - 0.504 = 0.496
```

## Checking an answer

Before you move on, run through these checks.

1. Is every probability between 0 and 1?
2. Do the probabilities of all regions or outcomes add to 1?
3. Does the answer make sense? A union cannot be smaller than either event, and an intersection cannot be larger than either.
4. For a "given" question, did you divide by the probability or total of the condition?
5. For independence, did you compare numbers rather than just state a conclusion?

## Quick self-test

1. P(A) = 0.35. Find P(A').
2. A, B and C are mutually exclusive with probabilities 0.2, 0.15 and 0.4. Find P(A ∪ B ∪ C).
3. P(A) = 0.5, P(B) = 0.3 and P(A ∩ B) = 0.1. Find P(A ∪ B).
4. P(A ∩ B) = 0.12 and P(B) = 0.4. Find P(A | B).
5. A and B are independent with P(A) = 0.25 and P(B) = 0.8. Find P(A ∩ B).
6. P(A) = 0.5, P(B) = 0.4 and P(A ∪ B) = 0.9. Are A and B mutually exclusive?
7. A and B are independent, P(A) = 0.4 and P(A ∪ B) = 0.64. Find P(B).
8. A fair six-sided die is rolled twice. Find P(sum is 8) and P(sum is 8 | first roll is 3).
9. In a group of 120 pupils, 45 play chess. Find P(chess) as a fraction in its simplest form.
10. A bag has 5 red and 3 blue counters. Two are drawn without replacement. Find P(both red).

### Answers

1. 1 − 0.35 = **0.65**
2. 0.2 + 0.15 + 0.4 = **0.75**
3. 0.5 + 0.3 − 0.1 = **0.7**
4. 0.12 / 0.4 = **0.3**
5. 0.25 × 0.8 = **0.2**
6. P(A ∩ B) = 0.5 + 0.4 − 0.9 = 0, so **yes, mutually exclusive**.
7. 0.64 = 0.4 + p − 0.4p, so 0.24 = 0.6p and p = **0.4**.
8. There are 5 ways to make 8 out of 36, so **5/36**. If the first roll is 3, only a second roll of 5 works: **1/6**.
9. 45/120 = **3/8**
10. 5/8 × 4/7 = 20/56 = **5/14**

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-1--03-dice-sample-space-independence.webp" width="900" height="1106" alt="A 6 by 6 grid of two-dice totals. A (first die even) covers 18 cells, B (total 7) 6 cells, both 3 cells. 1/2 x 1/6 = 1/12 = 3/36, so A and B are independent." loading="lazy">
  <figcaption>Counting cells in the sample space shows P(A and B) equals P(A) x P(B).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-1--04-tree-without-replacement.webp" width="900" height="950" alt="Tree for two counters from 6 red and 4 blue without replacement. Second-stage probabilities change (5/9, 4/9 after red; 6/9, 3/9 after blue). Path probabilities RR 30/90, RB 24/90, BR 24/90, BB 12/90. At least one blue is 60/90 = 2/3, and P(first red given at least one blue) = 24/60 = 2/5." loading="lazy">
  <figcaption>Without replacement the second-stage branches change, and the complement 1 - P(RR) gives at least one blue quickly.</figcaption>
</figure>


## Where marks are usually lost

- Dividing by the grand total instead of the condition total in a "given" question.
- Adding P(A) and P(B) without subtracting the overlap when the events can occur together.
- Saying events are independent because they are "unrelated", with no numerical test.
- Confusing mutually exclusive with independent.
- Keeping the denominator unchanged on the second pick when there is no replacement.
- Finding P(A | B) when the question asked for P(B | A).
- Rounding intermediate decimals, which can spoil a final answer.
- Giving a conclusion with no working on a question that says "show that" or "determine whether".
- Setting up the equation for an unknown probability correctly but not checking that the result is between 0 and 1.

Exam-technique advice for the whole course is in [exam preparation](/resources/oxfordaqa-a-level-mathematics-exam-preparation/).

## Frequently asked questions

**What is the addition law of probability?**
For any two events, P(A ∪ B) = P(A) + P(B) − P(A ∩ B). If the events are mutually exclusive, P(A ∩ B) = 0 and the probabilities simply add.

**What is the formula for conditional probability?**
P(B | A) = P(A ∩ B) / P(A). It is the multiplication law P(A ∩ B) = P(A) × P(B | A) rearranged.

**How do you find the probability of "at least one"?**
Find the probability of "none" and subtract it from 1, using the complement rule P(A') = 1 − P(A).

**What is the probability that exactly one of two events happens?**
It is P(A) + P(B) − 2 × P(A ∩ B), because the overlap has to be removed from both events.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA. Section S1.1 (Further probability), Unit PSM1, International AS exams from May/June 2018 and International A-level exams from May/June 2019.
