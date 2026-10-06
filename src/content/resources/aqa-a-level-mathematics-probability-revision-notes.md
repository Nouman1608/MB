---
title: "AQA A-Level Mathematics: M: Probability (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths 7357 Probability Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "M: Probability"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 14
syllabusTopics:
  - qualification: "a-level"
    topic: "m-probability-aqa-alevel-maths"
description: "Condensed revision notes for AQA A-Level Maths probability: rules, independence tests, conditional probability methods and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and longer worked examples, use the
[Probability study guide](/resources/aqa-a-level-mathematics-probability/). These notes condense
**Section M: Probability** (M1 to M3) of the **AQA A-level Mathematics (7357) specification**,
version 1.3, for A-level exams from June 2018 onwards. Section M is listed under Paper 3. A
calculator is required in every 7357 paper.

Test yourself afterwards with the
[Probability practice questions](/resources/aqa-a-level-mathematics-probability-practice/). The
[7357 course hub](/boards/aqa/a-level/mathematics/), the
[printable checklist](/checklists/aqa/a-level/mathematics/) and the free
[10-minute diagnostics](/diagnostics/) help you plan the rest of your revision.

## Notation

| Symbol | Meaning |
|---|---|
| P(A) | probability of event A |
| A′ | complement of A ("not A") |
| A ∪ B | A or B or both |
| A ∩ B | A and B |
| P(A \| B) | probability of A given B |

## Formulas

| Rule | Formula | When it applies |
|---|---|---|
| Complement | P(A′) = 1 − P(A) | always |
| Addition | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | always |
| Mutually exclusive | P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B) | events cannot happen together |
| Independent | P(A ∩ B) = P(A) × P(B) | one event does not affect the other |
| Conditional | P(A \| B) = P(A ∩ B) / P(B) | always (P(B) > 0) |
| Multiplication | P(A ∩ B) = P(B) × P(A \| B) | always; used on tree branches |
| Independence (conditional form) | P(A \| B) = P(A) | only if independent |

The conditional probability formula is stated in the specification under M2.

## M1: Mutually exclusive vs independent

| | Mutually exclusive | Independent |
|---|---|---|
| Meaning | cannot both happen | one does not change the chance of the other |
| Key fact | P(A ∩ B) = 0 | P(A ∩ B) = P(A) × P(B) |
| Venn diagram | circles do not overlap | overlap equals the product |
| Operation | add for "or" | multiply for "and" |

If both P(A) and P(B) are non-zero, mutually exclusive events are **never** independent.

### Method: test for independence

1. Find P(A ∩ B) (from a table, Venn diagram or the addition rule).
2. Work out P(A) × P(B).
3. Compare the two numbers, showing both.
4. Conclude in words: "equal, so independent" or "not equal, so not independent".

Alternative: compare P(A | B) with P(A).

**Reminder.** P(A) = 0.3, P(B) = 0.6, P(A ∪ B) = 0.72.
P(A ∩ B) = 0.3 + 0.6 − 0.72 = 0.18 and 0.3 × 0.6 = 0.18, so A and B are independent.

### Link to distributions

- **Discrete:** values of X are mutually exclusive, so P(X ≤ 2) = P(X = 0) + P(X = 1) + P(X = 2)
  and all probabilities total 1. Independent repeats multiply.
- **Continuous:** P(X = a) = 0 for any single value; P(X < a) and P(X > b) (a < b) are mutually
  exclusive, so P(X < a or X > b) = P(X < a) + P(X > b). Get Normal probabilities from your
  calculator.

## M2: Conditional probability

"Given B" means the sample space is now B only.

### Method: two-way table

1. Find the row or column for the condition.
2. Numerator: the cell in that row or column that also satisfies the event.
3. Denominator: that row or column **total**.

**Reminder.** Of 80 students, 45 study Biology and 32 study Chemistry; 20 study both.

```
P(Chemistry | Biology) = 20/45 = 4/9
P(Biology | Chemistry) = 20/32 = 5/8
```

Same numerator, different denominators: the condition decides the denominator.

### Method: Venn diagram

1. Write P(A ∩ B) in the overlap first.
2. Subtract to get "A only" and "B only".
3. Outside region = 1 − (sum of the three regions).
4. Check that all four regions total 1.
5. For P(A | B): overlap ÷ whole of B.

**Reminder.** P(A) = 0.5, P(B) = 0.3 and P(A ∩ B) = 0.1.

```
A only = 0.4    B only = 0.2    outside = 1 − 0.7 = 0.3
P(A | B′) = P(A ∩ B′)/P(B′) = 0.4/0.7 = 4/7 = 0.571 (3 s.f.)
```

"Given B′" means everything outside circle B: the "A only" region plus the outside region.
With three events, the same rule holds: start with the region common to all three, then the
pairwise overlaps, then the "only" regions.

### Method: tree diagram

1. First branches: unconditional probabilities.
2. Later branches: probabilities **given** the earlier branch. Without replacement, change the
   numerators and denominators.
3. Multiply along each path; add the paths you need.
4. To reverse the condition: P(first | second) = P(path(s) with both) ÷ P(second).

**Reminder.** 70% of a firm's parcels go by road (R), the rest by air. 2% of road parcels and 5%
of air parcels arrive late (L).

```
P(L) = 0.7 × 0.02 + 0.3 × 0.05 = 0.014 + 0.015 = 0.029
P(R | L) = 0.014 / 0.029 = 0.483 (3 s.f.)
```

**Reminder (without replacement).** A bag holds 4 white and 5 black discs; two are taken.

```
P(one of each) = P(W then B) + P(B then W)
               = 4/9 × 5/8 + 5/9 × 4/8 = 20/72 + 20/72 = 5/9
```

Both orders count, and the second fraction has denominator 8 because one disc has gone.

### Must-know distinctions

- P(A | B) ≠ P(B | A) in general. Check which event is the condition.
- P(A ∩ B) is "both"; P(A | B) is "A, knowing B".
- "At least one" is usually quickest as 1 − P(none).

## M3: Modelling with probability

Common assumptions to name and judge:

- outcomes are equally likely (fair coin, unbiased die, random choice);
- trials are independent;
- the probability is constant from trial to trial;
- a relative frequency from past data is a good estimate of the probability.

A good critique has three parts: **name** the assumption, give a **reason from the context** why
it may fail, and state the **likely direction** of the effect on the answer.

**Reminder.** A commuter's bus is late with probability 0.15 each day, modelled as independent.
P(late on all 5 weekdays) = 0.15⁵ = 0.0000759 (3 s.f.). Bad weather or roadworks last several
days, so late days cluster; the true probability of a late run is probably **higher** than the
model gives.

## Quick self-test

1. P(A) = 0.25, P(B) = 0.4, and A and B are independent. Find P(A ∩ B) and P(A ∪ B).
2. P(A) = 0.3, P(B) = 0.45, and A and B are mutually exclusive. Find P(A′ ∩ B′).
3. P(A ∩ B) = 0.12 and P(B) = 0.3. Find P(A | B).
4. P(A) = 0.6 and P(B | A) = 0.35. Find P(A ∩ B).
5. A and B are mutually exclusive with P(A) = 0.2 and P(B) = 0.3. Can they be independent?
6. Of 120 people, 18 are left-handed, and 7 of those wear glasses. Find P(wears glasses |
   left-handed).
7. A bag has 3 red and 2 green beads. Two are taken without replacement. Find P(both green).
8. P(X = x) = x/15 for x = 1, 2, 3, 4, 5. Find P(X ≥ 4).
9. X ~ N(20, 3²). Find P(X < 17 or X > 23).
10. P(A) = 0.5, P(B) = 0.4 and P(A | B) = 0.5. Are A and B independent?
11. A coin assumed fair is tossed 4 times. Find P(at least one head).
12. P(D) = 0.1, P(+ | D) = 0.9 and P(+ | D′) = 0.2. Find P(D | +).

### Answers

1. P(A ∩ B) = 0.25 × 0.4 = **0.1**; P(A ∪ B) = 0.25 + 0.4 − 0.1 = **0.55**.
2. P(A ∪ B) = 0.75, so P(A′ ∩ B′) = 1 − 0.75 = **0.25**.
3. 0.12 / 0.3 = **0.4**.
4. 0.6 × 0.35 = **0.21**.
5. **No.** P(A ∩ B) = 0, but P(A) × P(B) = 0.06 ≠ 0.
6. 7/18 = **0.389** (3 s.f.).
7. 2/5 × 1/4 = **1/10**.
8. (4 + 5)/15 = **3/5**.
9. 0.15866 + 0.15866 = **0.317** (3 s.f.), using the calculator's Normal function.
10. **Yes**, because P(A | B) = 0.5 = P(A).
11. 1 − (1/2)⁴ = **15/16**.
12. P(+) = 0.09 + 0.18 = 0.27; P(D | +) = 0.09/0.27 = **1/3**.

## Where marks are usually lost

- Claiming independence (or not) without showing P(A) × P(B) and P(A ∩ B) as numbers.
- Using P(A ∪ B) = P(A) + P(B) for events that overlap.
- Using the grand total as the denominator in a two-way table when the question says "given".
- Reversing a conditional: answering P(B | A) when P(A | B) was asked.
- Leaving "A" in the A circle of a Venn diagram instead of "A only", so the regions total more
  than 1.
- Keeping the same probabilities on second branches when items are not replaced.
- Rounding mid-calculation, so a final answer drifts outside 3 s.f. accuracy.
- Critiques that say "the model is unrealistic" without naming the assumption and the context.
- Treating P(X = a) as non-zero for a continuous variable.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams
June 2018 onwards, published by AQA. Section 3.14, M: Probability.
