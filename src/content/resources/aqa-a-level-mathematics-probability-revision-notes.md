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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-1--01-venn-addition-law.webp" width="900" height="870" alt="Venn diagram for cards 1 to 20 with A multiples of 3 and B even: 3 only in A, 3 in both, 7 only in B, 7 in neither. 6 + 10 - 3 = 13 cards, so P(A or B) = 13/20 and P(A') = 7/10." loading="lazy">
  <figcaption>Adding P(A) and P(B) counts the overlap twice, so it is subtracted once.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-1--02-exclusive-vs-independent.webp" width="900" height="1000" alt="With P(A) = 0.4 and P(B) = 0.35, a probability bar shows exclusive events do not overlap (P(A and B) = 0, union 0.75), while a unit square shows independent events overlap in area 0.4 x 0.35 = 0.14 giving a union of 0.61. Exclusive events with non-zero probabilities are never independent." loading="lazy">
  <figcaption>Independence is an overlap equal to the product; exclusivity is no overlap at all.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-1--03-dice-sample-space-independence.webp" width="900" height="1106" alt="A 6 by 6 grid of two-dice totals. A (first die even) covers 18 cells, B (total 7) 6 cells, both 3 cells. 1/2 x 1/6 = 1/12 = 3/36, so A and B are independent." loading="lazy">
  <figcaption>Counting cells in the sample space shows P(A and B) equals P(A) x P(B).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-1--04-tree-without-replacement.webp" width="900" height="950" alt="Tree for two counters from 6 red and 4 blue without replacement. Second-stage probabilities change (5/9, 4/9 after red; 6/9, 3/9 after blue). Path probabilities RR 30/90, RB 24/90, BR 24/90, BB 12/90. At least one blue is 60/90 = 2/3, and P(first red given at least one blue) = 24/60 = 2/5." loading="lazy">
  <figcaption>Without replacement the second-stage branches change, and the complement 1 - P(RR) gives at least one blue quickly.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-1--05-two-way-table-given.webp" width="900" height="970" alt="Café table of 250 orders. P(hot and takeaway) = 85/250 = 0.34 uses the grand total; P(hot given takeaway) = 85/150 = 17/30 uses only the takeaway row. Hot and takeaway are not independent since 0.62 x 0.6 = 0.372, not 0.34." loading="lazy">
  <figcaption>The word given restricts you to one row or column, so its total is the denominator.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-1--06-venn-conditional.webp" width="900" height="1050" alt="Venn regions A only 0.45, both 0.10, B only 0.25, neither 0.20. Given B the sample space is the B circle (0.35), so P(A|B) = 0.10/0.35 = 2/7. Given not A the space is 0.45, so P(B|A') = 0.25/0.45 = 5/9." loading="lazy">
  <figcaption>The condition becomes the new sample space and sits in the denominator.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-1--07-reversing-the-condition.webp" width="900" height="910" alt="Out of 10 000 components, 400 faulty and 9 600 good. The test flags 380 faulty and 288 good, 668 in all, so P(faulty given flagged) = 380/668 = 0.569, matching 0.038/0.0668 on a tree." loading="lazy">
  <figcaption>Reversing the condition means dividing one tree path by all paths that end in the observed outcome.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-1--08-independence-model-check.webp" width="900" height="900" alt="Two students chosen when 45% are girls: the independent model gives 0.2025. The exact value without replacement is 0.2023 for 1200 students (gap 0.0002); illustrative sizes of 100 and 20 students give gaps 0.0025 and 0.0130." loading="lazy">
  <figcaption>Independence is a good approximation for a large population but poor for a small group.</figcaption>
</figure>


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
