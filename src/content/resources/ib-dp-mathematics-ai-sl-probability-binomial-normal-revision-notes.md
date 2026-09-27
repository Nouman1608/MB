---
title: "IB DP Mathematics: Applications and Interpretation -- Probability, discrete random variables, binomial and normal distributions Revision Notes"
seoTitle: "IB Maths AI Probability, Binomial and Normal Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Probability, discrete random variables, binomial and normal distributions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 4.5
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-5"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-6"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-7"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-8"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-9"
description: "Condensed notes on probability rules, conditional probability, E(X), binomial and normal distributions, with a self-test, for IB DP Maths AI SL/HL."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

For full explanations and longer worked examples, read the [study guide for this unit](/resources/ib-dp-mathematics-ai-sl-probability-binomial-normal/) first.

These revision notes cover probability, discrete random variables and the binomial and normal distributions for IB Diploma Programme Mathematics: Applications and Interpretation. They are aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 4.5–4.9, which are common content for SL and HL. They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 sessions.

Links: [course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) · [printable checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) · [practice questions](/resources/ib-dp-mathematics-ai-sl-probability-binomial-normal-practice/) · [statistics and probability overview](/resources/ib-dp-mathematics-ai-statistics-probability/)

## Definitions

- **Trial**: one repetition of an experiment. **Outcome**: one possible result.
- **Sample space, U**: the set of all outcomes. **Event, A**: a set of outcomes.
- **Relative frequency**: (times A occurred) ÷ (number of trials). An experimental estimate of P(A).
- **Complementary event A′**: A does not occur.
- **Mutually exclusive**: A and B cannot both occur.
- **Independent**: the occurrence of one does not change the probability of the other.
- **Discrete random variable**: takes separate values, each with a probability; the probabilities sum to 1.
- **Fair game**: E(X) = 0, where X is the player's gain.

## Formulas

| Result | Formula |
|---|---|
| Equally likely outcomes | P(A) = n(A)/n(U) |
| Complement | P(A′) = 1 − P(A) |
| Expected number of occurrences | n × P(A) |
| Combined events | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) |
| Mutually exclusive | P(A ∩ B) = 0 |
| Conditional probability | P(A │ B) = P(A ∩ B)/P(B) |
| Alternate form | P(A ∩ B) = P(B) P(A │ B) |
| Independent | P(A ∩ B) = P(A)P(B) |
| Discrete random variable | Σ P(X = x) = 1, E(X) = Σ x P(X = x) |
| Binomial X ~ B(n, p) | E(X) = np, Var(X) = np(1 − p) |
| Normal X ~ N(μ, σ²) | about 68% in μ ± σ, 95% in μ ± 2σ, 99.7% in μ ± 3σ |

Binomial and normal probabilities, and inverse normal values, are found on your GDC. The guide says so for both distributions.

## Method in steps

**Conditional probability from a diagram**

```
1. Fill in the Venn diagram from the middle (the intersection) outwards,
   or build the tree with conditional probabilities on the second branches.
2. Identify the "given" event B. Its total is the denominator.
3. Find the part of B where A also happens. That is the numerator.
4. P(A | B) = numerator ÷ denominator.
```

**Testing independence**

```
1. Find P(A ∩ B) from the data.
2. Compute P(A) × P(B).
3. Equal → independent. Not equal → not independent. Write both numbers.
```

**Discrete distribution with an unknown**

```
1. Set Σ P(X = x) = 1 and solve for k.
2. Check every probability is between 0 and 1.
3. E(X) = Σ x P(X = x). For a game, subtract the cost inside each x value.
```

**Binomial**

```
1. Check: fixed n, two outcomes, constant p, independent trials.
2. Write X ~ B(n, p) and the probability statement.
3. Rewrite as P(X = r) (pdf) or P(X ≤ r) (cdf).
4. Use the GDC and give 3 s.f.
```

**Normal**

```
1. Write X ~ N(μ, σ²). Note σ, not σ², goes into the GDC.
2. Sketch the curve, mark μ and shade the region.
3. Probability: normal cdf(lower, upper, μ, σ).
4. Value: inverse normal(area to the LEFT, μ, σ).
```

## Worked reminders

**Tree diagram, reversed condition.** It rains on 30% of days. When it rains, a bus is late with probability 0.4; when it is dry, with probability 0.1.

```
P(late) = 0.3 × 0.4 + 0.7 × 0.1 = 0.12 + 0.07 = 0.19
P(rain | late) = 0.12 / 0.19 = 0.632 (3 s.f.)
```

**Binomial inequality.** X ~ B(10, 0.3):

```
P(X ≤ 2) = 0.383     (cdf directly)
P(X ≥ 3) = 1 − P(X ≤ 2) = 0.617
```

**Normal, both directions.** X ~ N(60, 5²):

```
P(X < 52) = 0.0548
P(X < a) = 0.8  →  a = 64.2
```

**Expected number.** A test has a 0.04 chance of a false alarm each time it runs. In 350 runs:

```
Expected false alarms = 350 × 0.04 = 14
```

**Fair game with a cost.** A player pays 2 euros. A spin pays out 10 euros with probability 0.1 and 5 euros with probability 0.2, otherwise nothing.

```
Gains: 8, 3, −2 with probabilities 0.1, 0.2, 0.7
E(X) = 0.8 + 0.6 − 1.4 = 0, so the game is fair
```

**Normal then binomial.** If P(one item is faulty) comes from a normal model, the number of faulty items in a batch of n is B(n, p). Keep p unrounded on your GDC between the two steps.

## Which model?

| Situation | Model | Key check |
|---|---|---|
| Equally likely outcomes you can list | Sample space, P(A) = n(A)/n(U) | Are outcomes really equally likely? |
| Two events overlapping | Venn diagram | Fill the intersection first |
| Events in stages | Tree diagram | Second-stage probabilities are conditional |
| Values of X with given probabilities | Discrete distribution | Probabilities sum to 1 |
| Count of successes in n trials | B(n, p) | Fixed n, constant p, independent |
| Measurement clustered round a mean | N(μ, σ²) | Continuous, roughly symmetrical |

A count of successes when items are drawn **without replacement** from a small group is not binomial, because p changes after each draw. Use a tree diagram instead.

## GDC reminders

| You want | Use |
|---|---|
| P(X = r), binomial | binomial pdf (n, p, r) |
| P(X ≤ r), binomial | binomial cdf (n, p, r) |
| P(a < X < b), normal | normal cdf (a, b, μ, σ) |
| P(X > a), normal | normal cdf (a, a very large upper bound, μ, σ) |
| x with P(X < x) = q | inverse normal (q, μ, σ) |
| x with P(X > x) = q | inverse normal (1 − q, μ, σ) |

Menu names differ between calculator models, so practise on your own GDC.

## Must-know distinctions

- **Mutually exclusive vs independent.** Mutually exclusive: P(A ∩ B) = 0. Independent: P(A ∩ B) = P(A)P(B). If both events have non-zero probability, they cannot be both.
- **With vs without replacement.** With replacement, second-stage probabilities are unchanged and draws are independent. Without, the denominator drops by 1 and the numerator may too.
- **Relative frequency vs theoretical probability.** One comes from an experiment, the other from equally likely outcomes. More trials bring them closer.
- **P(A | B) vs P(B | A).** The denominators differ. Read which event is "given".
- **Discrete vs continuous.** For a binomial X, P(X < 5) = P(X ≤ 4). For a normal X, P(X < 5) = P(X ≤ 5).
- **Variance vs standard deviation.** N(60, 25) has σ = 5. B(n, p) has variance np(1 − p); take the square root for σ.
- **Expected number vs most likely number.** np = 12.8 is a valid expected number even though you cannot observe 12.8.

## Quick self-test

1. P(A) = 0.35. Find P(A′).
2. A drawing pin lands point up 42 times in 120 throws. Estimate P(point up) and the expected number of point-up landings in 80 throws.
3. A and B are mutually exclusive, P(A) = 0.2, P(B) = 0.5. Find P(A ∪ B).
4. A and B are independent, P(A) = 0.6, P(B) = 0.3. Find P(A ∪ B).
5. P(A ∩ B) = 0.12 and P(B) = 0.4. Find P(A | B).
6. X takes values 1, 2, 3 with probabilities 0.5, 0.3, 0.2. Find E(X).
7. A player's gain is −2, 3 or 8 with probabilities 0.7, 0.2, 0.1. Is the game fair?
8. The probabilities of X = 1, 2, 3, 4 are 0.2, 0.35, k, 0.15. Find k.
9. X ~ B(12, 0.4). Find E(X) and Var(X).
10. X ~ B(10, 0.3). Find P(X = 4).
11. X ~ N(60, 5²). Without a GDC, what percentage of values lie between 50 and 70?
12. For the tree reminder above, write down P(late | dry).

### Answers

1. 1 − 0.35 = **0.65**
2. 42/120 = **0.35**; 80 × 0.35 = **28**
3. 0.2 + 0.5 = **0.7**
4. 0.6 + 0.3 − 0.6 × 0.3 = 0.9 − 0.18 = **0.72**
5. 0.12/0.4 = **0.3**
6. 0.5 + 0.6 + 0.6 = **1.7**
7. E(X) = −1.4 + 0.6 + 0.8 = 0, so **yes, it is fair**
8. 0.2 + 0.35 + k + 0.15 = 1, so **k = 0.3**
9. E(X) = 12 × 0.4 = **4.8**; Var(X) = 4.8 × 0.6 = **2.88**
10. **0.200** (binomial pdf)
11. 50 and 70 are μ ± 2σ, so about **95%**
12. **0.1** (read straight from the branch)

## Where marks are usually lost

- Writing P(A ∪ B) = P(A) + P(B) for overlapping events, and losing the subtraction of P(A ∩ B).
- Concluding "independent" or "not independent" without writing P(A)P(B) and P(A ∩ B) side by side.
- Using the whole group as the denominator in a conditional probability read from a Venn diagram or table.
- Leaving the second-branch denominators unchanged when items are not replaced.
- Finding E(X) for a game from the payouts and forgetting to subtract the cost to play.
- Keying in P(X ≤ 5) for P(X < 5) on a binomial question, or P(X ≤ 3) for P(X ≥ 3).
- Giving only a GDC number with no "X ~ B(n, p)" or "X ~ N(μ, σ²)" statement, so no method mark is possible if the number is wrong.
- Entering σ² instead of σ, or the right-hand tail area into inverse normal.
- Rounding an intermediate probability to 2 or 3 s.f. before using it in a later part, and drifting from the accurate answer.
- Rounding an expected number to a whole number when the question did not ask for it.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021.
