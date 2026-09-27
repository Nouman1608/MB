---
title: "IB DP Mathematics: Analysis and Approaches -- Probability, discrete and continuous distributions, binomial and normal Revision Notes"
seoTitle: "IB Maths AA Probability and Distributions Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Probability, discrete and continuous distributions, binomial and normal"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.5
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-5"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-6"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-7"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-8"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-9"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-11"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-12"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-13"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-14"
description: "Condensed IB DP Maths AA notes on probability, binomial and normal distributions, Bayes and continuous variables, with a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

For full explanations and longer worked examples, start with the [probability and distributions study guide](/resources/ib-dp-mathematics-aa-probability-distributions/). These notes are for the final weeks.

They cover the probability and distributions unit of IB Diploma Programme Mathematics: Analysis and Approaches, aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 4.5–4.9 and 4.11–4.12 (SL and HL) and 4.13–4.14 (HL only, marked below). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

When you are ready, test yourself with the [probability and distributions practice questions](/resources/ib-dp-mathematics-aa-probability-distributions-practice/). Tick the unit off on the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/), and find the other units on the [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/).

## Definitions (4.5–4.7)

- **Trial**: one run of an experiment. **Outcome**: one possible result.
- **Sample space U**: all possible outcomes. **Event A**: a subset of U.
- **Relative frequency**: number of times A occurred ÷ number of trials (experimental probability).
- **Complement A′**: "not A". P(A′) = 1 − P(A).
- **Mutually exclusive**: A and B cannot both happen, so P(A ∩ B) = 0.
- **Independent**: one event does not affect the other, so P(A ∩ B) = P(A)P(B).
- **Discrete random variable**: takes separate values, each with a probability; Σ P(X = x) = 1.
- **Fair game**: E(X) = 0, where X is the player's gain.
- **Normal distribution N(μ, σ²)**: symmetric about μ; mean = median = mode. About 68% of values lie within μ ± σ, 95% within μ ± 2σ and 99.7% within μ ± 3σ. The z-value gives the number of standard deviations from the mean.

## Formulas

| Result | Form | Section |
|---|---|---|
| Equally likely outcomes | P(A) = n(A)/n(U) | 4.5 |
| Expected number of occurrences | n × P(A) | 4.5 |
| Union | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | 4.6 |
| Conditional | P(A \| B) = P(A ∩ B)/P(B) | 4.6, 4.11 |
| Independence | P(A \| B) = P(A) = P(A \| B′) | 4.11 |
| Expected value (discrete) | E(X) = Σ x P(X = x) | 4.7 |
| Binomial mean and variance | E(X) = np, Var(X) = np(1 − p) | 4.8 |
| Standardized value | z = (x − μ)/σ | 4.12 |
| Bayes (HL) | P(B \| A) = P(B)P(A \| B) / [P(B)P(A \| B) + P(B′)P(A \| B′)] | 4.13 |
| Variance (HL) | Var(X) = E(X²) − [E(X)]² | 4.14 |
| Continuous pdf (HL) | ∫ f(x) dx over (−∞, ∞) = 1 | 4.14 |
| Continuous mean (HL) | E(X) = ∫ x f(x) dx | 4.14 |
| Median (HL) | ∫ f(x) dx from −∞ to m = 1/2 | 4.14 |
| Linear transformation (HL) | E(aX + b) = aE(X) + b, Var(aX + b) = a²Var(X) | 4.14 |

## Method in steps

**Tree diagram, without replacement (4.6)**
1. First branches: original counts over the original total.
2. Second branches: reduce the count and the total by one on the branch already taken.
3. Multiply along branches; add the branches that meet the event.
4. For a conditional, divide the wanted branch(es) by the total of the given branches.

**Finding an unknown constant k (4.7, 4.14 HL)**
1. Discrete: set Σ P(X = x) = 1.
2. Continuous: set the integral of f over its whole domain equal to 1. For piecewise f, integrate each piece and add.

**Binomial (4.8)**
1. Check the four conditions: fixed n, two outcomes, constant p, independent trials.
2. Write X ~ B(n, p).
3. Rewrite the inequality in "≤" form: P(X ≥ 4) = 1 − P(X ≤ 3); P(X < 4) = P(X ≤ 3).
4. Use binomial pdf for "=", binomial cdf for "≤".

**Normal (4.9, 4.12)**
1. Sketch the curve, mark μ and shade the region.
2. Known μ and σ: use normal cdf, or inverse normal for a value.
3. Unknown μ or σ: get z from N(0, 1) inverse normal using the area to the **left**, then solve x = μ + zσ. Two unknowns need two equations.

**Bayes' theorem (4.13, HL)**
1. Draw a tree: the "cause" events first (at most three), the observed event second.
2. P(observed) = sum of all branches ending in the observed event.
3. P(cause | observed) = that cause's branch ÷ P(observed).

**Continuous random variable (4.14, HL)**
1. Mode: where f is largest. Check endpoints as well as stationary points.
2. Median: solve ∫ f(x) dx from the lower end to m = 1/2. For piecewise f, first check which piece holds half the area.
3. Var(X) = E(X²) − [E(X)]².

## Small worked reminders

- A 12% chance per day over 250 days gives an expected 250 × 0.12 = 30 occurrences.
- P(A) = 0.45, P(B) = 0.3, P(A ∩ B) = 0.12: P(A | B) = 0.4, and 0.45 × 0.3 = 0.135 ≠ 0.12, so not independent.
- X ~ B(20, 0.15): mean 3, variance 2.55, P(X ≤ 2) = 0.405.
- X ~ N(50, 4²): P(X < a) = 0.9 gives a = 55.1.
- X ~ N(120, σ²), P(X > 130) = 0.2: z = 0.8416, σ = 10/0.8416 = 11.9.
- HL: f(x) = x²/9 on [0, 3]: E(X) = 9/4, Var(X) = 27/80, median 3/∛2 = 2.38.

## Must-know distinctions

- **Mutually exclusive vs independent.** Exclusive: P(A ∩ B) = 0. Independent: P(A ∩ B) = P(A)P(B). If P(A) and P(B) are both non-zero, exclusive events cannot be independent.
- **P(A | B) vs P(B | A).** They are different. Bayes' theorem (HL) converts one into the other.
- **With vs without replacement.** Without replacement, second-stage probabilities change and the trials are not independent, so the binomial model does not apply.
- **Discrete vs continuous.** Discrete: P(X = 3) can be non-zero and P(X < 3) ≠ P(X ≤ 3). Continuous: P(X = 3) = 0 and P(X < 3) = P(X ≤ 3).
- **σ vs σ².** N(μ, σ²) gives the variance; the GDC asks for σ.
- **Normal cdf vs inverse normal.** Given a value, find a probability with cdf. Given a probability, find a value with inverse normal.
- **Mode vs median of a pdf (HL).** Mode is the highest point of f; median splits the area in half.

## Quick self-test

1. P(A) = 0.35. Find P(A′).
2. A fair die is rolled 150 times. Find the expected number of fives.
3. P(A) = 0.6, P(B) = 0.5, P(A ∩ B) = 0.3. Are A and B independent?
4. A and B are mutually exclusive, with P(A) = 0.2 and P(B) = 0.45. Find P(A ∪ B).
5. P(A ∩ B) = 0.18 and P(B) = 0.3. Find P(A | B).
6. P(X = x) = x/10 for x ∈ {1, 2, 3, 4}. Find E(X).
7. X ~ B(10, 0.3). Find E(X) and Var(X).
8. X ~ B(10, 0.3). Find P(X = 2).
9. X ~ N(70, 5²). Find P(X > 78).
10. X ~ N(70, 5²). Find the z-value of x = 62.
11. (HL) P(B) = 0.4, P(A | B) = 0.5, P(A | B′) = 0.2. Find P(B | A).
12. (HL) E(X) = 4 and Var(X) = 3. Find E(2X + 1) and Var(2X + 1).

### Answers

1. 0.65
2. 150 × 1/6 = 25
3. P(A)P(B) = 0.3 = P(A ∩ B), so yes.
4. 0.2 + 0.45 = 0.65
5. 0.18/0.3 = 0.6
6. (1 + 4 + 9 + 16)/10 = 3
7. E(X) = 3, Var(X) = 2.1
8. 0.233 (GDC, binomial pdf)
9. 0.0548 (GDC, normal cdf)
10. z = (62 − 70)/5 = −1.6
11. P(A) = 0.2 + 0.12 = 0.32, so P(B | A) = 0.2/0.32 = 0.625
12. E(2X + 1) = 9, Var(2X + 1) = 4 × 3 = 12

## Where marks are usually lost

- Adding P(A) and P(B) for "A or B" without subtracting P(A ∩ B).
- Claiming independence from a diagram "looking" separate, instead of testing P(A ∩ B) = P(A)P(B) or P(A | B) = P(A).
- Keeping the same denominator on the second branch of a without-replacement tree.
- Forgetting that the probabilities in a discrete distribution must sum to 1 when k is unknown.
- Using P(X ≤ 4) for P(X < 4), or 1 − P(X ≤ 4) for P(X ≥ 4), with a binomial variable.
- Writing a GDC answer with no distribution stated, such as "0.405" alone, which may lose method marks if it is wrong.
- Entering σ² as the standard deviation in a normal calculation.
- Using the right-tail area in inverse normal when the calculator expects the left-tail area.
- Rounding z or σ to 3 s.f. before finding μ, which shifts the final answer.
- (HL) Writing Var(aX + b) = a Var(X) + b, or taking the mode of a pdf as a stationary point when the maximum is at an endpoint.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
