---
title: "Cambridge International AS & A Level Mathematics 9709: Probability & Statistics 1 -- Revision Notes"
seoTitle: "A Level Maths 9709 Probability & Statistics 1 Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Probability & Statistics 1"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 5
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "representation-of-data-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "permutations-and-combinations-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "probability-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "discrete-random-variables-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "the-normal-distribution-cambridge-alevel-maths"
description: "Condensed Cambridge 9709 Paper 5 revision notes: formulas, method steps, key distinctions and a 12-question self-test for Probability & Statistics 1."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

These notes condense topic 5, Probability & Statistics 1, of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4): sections 5.1 to 5.5. All of it is examined on **Paper 5** (1 hour 15 minutes, 50 marks, 40% of the AS Level and 20% of the A Level). For full explanations and worked examples, use the [Probability & Statistics 1 study guide](/resources/a-level-maths-9709-probability-statistics-1/).

Other links: [Probability & Statistics 1 practice questions](/resources/a-level-mathematics-probability-statistics-1-practice/), the [A Level Mathematics hub](/boards/cambridge/a-level/mathematics/), the [printable 9709 checklist](/checklists/cambridge/a-level/mathematics/) and the free [AS Level diagnostic](/practice/9709/diagnostic/as/).

## Formulas

| Result | Formula | In MF19? |
|---|---|---|
| Mean (raw) | x̄ = Σx / n | Yes |
| Standard deviation (raw) | √(Σx²/n − x̄²) | Yes |
| Mean (grouped) | Σxf / Σf, x = mid-point | Yes |
| Standard deviation (grouped) | √(Σx²f/Σf − x̄²) | Yes |
| Combinations | ⁿCᵣ = n! / (r!(n − r)!) | Yes |
| Conditional probability | P(A \| B) = P(A ∩ B) / P(B) | No |
| Independence test | P(A ∩ B) = P(A) × P(B) | No |
| Discrete expectation | E(X) = Σxp | Yes |
| Discrete variance | Var(X) = Σx²p − {E(X)}² | Yes |
| Binomial B(n, p) | P(X = r) = ⁿCᵣ pʳ(1 − p)ⁿ⁻ʳ; mean np; variance np(1 − p) | Yes |
| Geometric Geo(p) | P(X = r) = p(1 − p)ʳ⁻¹; mean 1/p | Yes |
| Geometric tail | P(X > r) = (1 − p)ʳ | No (derive it) |
| Standardising | Z = (X − μ)/σ | No |
| Negative z | Φ(−z) = 1 − Φ(z) | Yes (with the table) |

## 5.1 Representation of data

**Diagrams.** Stem-and-leaf keeps raw data (needs a key; back-to-back compares two sets). Box-and-whisker shows five values and makes skew visible. Histogram: bar area ∝ frequency, height = frequency density = frequency ÷ class width. Cumulative frequency: plot at upper class boundaries.

**Reading a cumulative frequency graph (n values).**

1. Median at n/2, Q₁ at n/4, Q₃ at 3n/4 on the vertical axis.
2. A percentile, e.g. the 90th, at 0.9n.
3. "How many above 40?" Read the cumulative frequency at 40 and subtract from n.

**Coded data.** If y = x − a: x̄ = a + ȳ and the standard deviation of x equals the standard deviation of y.

**Two data sets.** Add n, Σx and Σx² across the sets, then use the formulas once.

**Comparing data.** One comment on centre (median or mean), one on spread (IQR or standard deviation), both in context.

## 5.2 Permutations and combinations

**Method in steps.**

1. Order matters? Permutation. Order does not matter? Combination.
2. Repeats: divide by k! for each letter repeated k times.
3. "Together": glue into one block, arrange blocks, multiply by internal arrangements.
4. "Not together": total − together, or arrange the rest and choose gaps.
5. "At least / at most": list exact cases and add.
6. Two rows: arrange each row and multiply.

Small reminder: 7 people in a line with A and B not next to each other: 7! − 2 × 6! = 5040 − 1440 = 3600.

## 5.3 Probability

**Must-know distinctions.**

| Mutually exclusive | Independent |
|---|---|
| Cannot happen together | One does not affect the other |
| P(A ∩ B) = 0 | P(A ∩ B) = P(A) × P(B) |
| P(A or B) = P(A) + P(B) | P(A and B) = P(A) × P(B) |

Two events with non-zero probabilities cannot be both exclusive and independent.

**Conditional probability from a tree.**

1. Draw the tree; later branches may depend on earlier ones (no replacement).
2. Numerator: the branch (or branches) where both A and B happen.
3. Denominator: every branch where B happens.
4. Divide. Leave as a fraction or give 3 s.f.

The general formula P(A ∪ B) = P(A) + P(B) − P(A ∩ B) is not required explicitly by the syllabus; a Venn diagram or a count of outcomes is enough.

## 5.4 Discrete random variables

**Probability distribution table.** List all values of X; check Σp = 1; E(X) = Σxp; Var(X) = Σx²p − {E(X)}². An unknown probability is found from Σp = 1, and a second unknown from a given E(X).

**Worked reminder (two unknowns).** X takes the values 1, 2, 3, 4 with probabilities 0.1, a, b, 0.3, and E(X) = 2.7.

```
Σp = 1:     a + b = 0.6
E(X) = 2.7: 0.1 + 2a + 3b + 1.2 = 2.7  →  2a + 3b = 1.4
solve:      b = 0.2, a = 0.4
E(X²) = 0.1 + 1.6 + 1.8 + 4.8 = 8.3
Var(X) = 8.3 − 2.7² = 1.01
```

**Binomial or geometric?**

| B(n, p) | Geo(p) |
|---|---|
| Fixed number of trials n | Trials continue until the first success |
| X = number of successes, 0 to n | X = trial on which the first success occurs, 1, 2, 3, … |
| Mean np, variance np(1 − p) | Mean 1/p (variance not required) |

Both need independent trials and a constant probability p.

**Useful rewrites.** P(X ≥ 1) = 1 − P(X = 0). P(X > r) for Geo(p) = (1 − p)ʳ. "Before the kth trial" for Geo(p) means X ≤ k − 1.

## 5.5 The normal distribution

**Method in steps (probability from a value).**

1. Sketch the curve; mark μ and shade the region.
2. z = (x − μ)/σ, at least 3 d.p. when possible.
3. Φ(z) from the table; for a negative z, use 1 − Φ(|z|).
4. Right-hand tail: 1 − Φ(z). Between two values: Φ(z₂) − Φ(z₁).

**Method in steps (value from a probability).**

1. Turn the probability into an area to the left.
2. Use the critical values table (e.g. 0.95 → 1.645) or read the main table backwards.
3. Give z the correct sign: negative if the area to the left is below 0.5.
4. Solve (x − μ)/σ = z; with two unknowns, solve two equations simultaneously.

**Worked reminder (μ and σ both unknown).** P(X < 40) = 0.05 and P(X > 70) = 0.1.

```
(40 − μ)/σ = −1.645      (70 − μ)/σ = 1.282
subtract:  30 = 2.927σ  →  σ = 10.2 (3 s.f.)
μ = 40 + 1.645 × 10.249 = 56.9 (3 s.f.)
```

Keep σ unrounded when you substitute back for μ.

**Normal approximation to B(n, p).** Conditions: np > 5 and nq > 5. Use N(np, npq). Continuity corrections:

| Binomial | Normal |
|---|---|
| P(X ≤ 15) | P(Y < 15.5) |
| P(X < 15) | P(Y < 14.5) |
| P(X ≥ 15) | P(Y > 14.5) |
| P(X = 15) | P(14.5 < Y < 15.5) |

## Quick self-test

1. How many different arrangements are there of the letters of CASSETTE?
2. In how many ways can 4 books be chosen from 9 different books?
3. For 10 values, Σx = 85 and Σx² = 790. Find the mean and standard deviation.
4. P(A) = 0.4, P(B) = 0.5 and P(A ∩ B) = 0.2. Are A and B independent? Find P(A | B).
5. X ~ B(8, 0.4). Find P(X = 3).
6. X ~ Geo(0.25). Find P(X = 3) and E(X).
7. X ~ Geo(0.25). Find P(X > 4).
8. Find P(Z < −0.84) where Z ~ N(0, 1).
9. X ~ N(30, 4²). Find P(X < 25).
10. Can the normal approximation be used for B(40, 0.1)? Give a reason.
11. A class 15 ≤ x < 25 has frequency 34. Find its frequency density.
12. Two fair dice are thrown. Find P(total is at least 10).

### Answers

1. 8! ÷ (2! × 2! × 2!) = **5040** (S, T and E each appear twice).
2. ⁹C₄ = **126**.
3. Mean = 8.5; standard deviation = √(79 − 8.5²) = √6.75 = **2.60** (3 s.f.).
4. 0.4 × 0.5 = 0.2 = P(A ∩ B), so **independent**. P(A | B) = 0.2 ÷ 0.5 = **0.4**.
5. ⁸C₃ × 0.4³ × 0.6⁵ = 56 × 0.064 × 0.07776 = **0.279** (3 s.f.).
6. 0.75² × 0.25 = **0.141** (3 s.f.); E(X) = 1 ÷ 0.25 = **4**.
7. 0.75⁴ = **0.316** (3 s.f.).
8. 1 − Φ(0.84) = 1 − 0.7995 = **0.2005**.
9. z = −1.25; 1 − Φ(1.25) = 1 − 0.8944 = **0.1056**.
10. **No**: np = 4, which is not greater than 5.
11. 34 ÷ 10 = **3.4**.
12. Totals 10, 11, 12 come from 3 + 2 + 1 = 6 outcomes; 6/36 = **1/6**.

## Where marks are usually lost

- Frequency plotted as bar height on a histogram with unequal class widths.
- Combined mean found by averaging two means from sets of different sizes.
- Standard deviation given when the question asked for variance, or the reverse.
- An "at least" selection done as one product that double-counts.
- Letters that repeat not divided out, or divided out when they are different.
- Independence claimed without comparing P(A ∩ B) with P(A) × P(B) numerically.
- Conditional probability left as P(A ∩ B), without dividing by P(B).
- Geometric P(X ≤ r) worked out term by term with an arithmetic slip, instead of 1 − (1 − p)ʳ.
- Continuity correction missed, or applied in the wrong direction.
- The z-value for "top 10%" given as −1.282 instead of +1.282.

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 5, Probability & Statistics 1 (for Paper 5): sections 5.1 to 5.5.
