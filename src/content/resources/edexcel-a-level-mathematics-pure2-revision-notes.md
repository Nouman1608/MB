---
title: "Edexcel A Level Mathematics: Pure Mathematics 2 — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P2: Pure Mathematics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 2
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
description: "Condensed recall notes on proof, algebra and functions, sequences and series, exponentials/logarithms, trigonometry, differentiation and integration for Pearson Edexcel International A Level Mathematics (YMA01), Unit P2."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Pure Mathematics 2 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-2/).

## Proof (P2.1)

Two methods: **proof by deduction** (a general algebraic argument that holds for all cases) and **proof by exhaustion** (checking **every** case in a genuinely finite set — e.g. all integers in a stated range, or all remainders when dividing by a fixed number).

**Proof by exhaustion checklist:** (1) confirm the case list is truly complete — no case silently skipped; (2) present cases in an organised, clearly labelled list, not a run of unstructured numbers. A correct final statement reached by incomplete or unjustified reasoning earns far fewer marks than the working alone suggests.

## Algebra and functions (P2.2)

**Factor theorem:** if f(b/a) = 0, then (ax − b) is a factor of f(x) — use it to find a first factor of a cubic before completing the factorisation by inspection or division. **Remainder theorem:** dividing f(x) by (ax − b) leaves remainder f(b/a), without carrying out the full division. (The modulus function is introduced later, in Pure Mathematics 3.)

## Coordinate geometry (P2.3)

**Circle:** (x − a)² + (y − b)² = r², centre (a, b), radius r — complete the square in both x and y to extract these from the expanded form. **Three circle facts:** (1) the tangent is perpendicular to the radius at the point of contact; (2) the perpendicular bisector of a chord passes through the centre; (3) the angle in a semicircle is a right angle. (Straight-line equations and the parallel/perpendicular conditions are covered in Unit P1.)

## Sequences and series (P2.4)

| Type | Common feature | Sum formula basis |
|---|---|---|
| **Arithmetic** | Common **difference** between terms | Sn = n/2 (2a + (n−1)d) |
| **Geometric** | Common **ratio** between terms | Sn = a(1−rⁿ)/(1−r) |

**Check first:** does the sequence have a common difference (arithmetic) or common ratio (geometric)? Applying the wrong formula because this check was skipped is one of the most frequent errors across P2.4–P2.5.

**Convergence:** a geometric series converges (has a sum to infinity) only if **|r| < 1**:

```
S(infinity) = a / (1 - r)      [only valid when |r| < 1]
```

Don't assume every series has a finite sum — check the convergence condition first.

**Binomial expansion:** (a + bx)ⁿ for a positive integer n expands using the binomial coefficients (written ⁿCᵣ or `n choose r`). This is assessed in the same section as sequences and series, though it is a separate skill from summing a series.

## Exponentials and logarithms (P2.5)

Laws of logarithms, and solving equations involving exponential/logarithmic functions. Questions frequently **combine geometric series with exponential growth/decay contexts** (investment growth, population change) — recognise this link rather than treating P2.4 and P2.5 as unrelated content.

## Trigonometry (P2.6)

**New in P2:** the identity sin²θ + cos²θ = 1 and tanθ = sinθ ÷ cosθ, used to solve trigonometric equations within a given interval. P1's own trigonometry is triangle-based — the sine rule, cosine rule and area of a triangle — and does not include these identities or equation-solving.

## Differentiation (P2.7) and integration (P2.8)

**Differentiation (P2.7)** applies P1's calculus to **stationary points**: set dy/dx = 0, solve for x, then classify each point using d²y/dx² (positive → minimum, negative → maximum; zero → check the gradient's sign either side instead). Use this to determine where a function is increasing (dy/dx > 0) or decreasing (dy/dx < 0), and to sketch its curve.

**Integration (P2.8)** applies P1's integration to **definite integrals** and the area under a curve: [F(x)] from a to b = F(b) − F(a). A region below the x-axis integrates to a *negative* value, so a total area (rather than a signed value) requires splitting at the roots and adding the absolute value of each part. The **trapezium rule** approximates an area that can't be integrated exactly, using an increasing number of trapezia to improve accuracy.

(The chain, product and quotient rules for differentiation are introduced later, in Pure Mathematics 3.)

## Worked example: proof by exhaustion

Prove that the square of any positive odd number less than 10 is odd.

```
Positive odd numbers less than 10: 1, 3, 5, 7, 9

1^2 = 1   (odd)
3^2 = 9   (odd)
5^2 = 25  (odd)
7^2 = 49  (odd)
9^2 = 81  (odd)

All cases checked, all results odd -> statement proven for this
finite set.
```

The case list (1, 3, 5, 7, 9) is stated explicitly, restricted to the positive odd numbers below 10, and confirmed complete **before** checking — this is what separates a genuine proof by exhaustion from an unstructured list of examples. Restricting the domain like this is a genuine part of the proof, not a simplification: the same statement about *all* odd integers (including negative ones) would need a different case list or a general algebraic argument instead.

## Worked example: exponential growth combined with a geometric series

An investment of $1,000 grows by 5% each year. Find its value after 3 years, and the total value of three separate $1,000 investments made at the start of years 1, 2 and 3, valued at the end of year 3.

```
Single investment after 3 years:
        1000 x 1.05^3 = 1157.63 (to 2 d.p.)

Three investments, each growing for a different number of years
by the end of year 3 (this is a geometric-series-style sum):
        Year-1 investment grows for 3 years: 1000 x 1.05^3
        Year-2 investment grows for 2 years: 1000 x 1.05^2
        Year-3 investment grows for 1 year:  1000 x 1.05^1

        Total = 1000(1.05 + 1.05^2 + 1.05^3) = 1000 x 1.05 x (1.05^3 - 1)/(1.05 - 1)
```

Recognising that a series of repeated investments compounding at a fixed rate forms a geometric series -- rather than calculating each year's value separately from scratch -- is exactly the kind of applied link between P2.4 and P2.5 this unit rewards.

## Why Unit P2 is assessed the way it is

Because every route through YMA01 requires all four Pure Mathematics units regardless of which applied units (M1, S1, D1, etc.) a candidate studies, P2's content is genuinely compulsory knowledge, not optional background. Exam questions on this unit typically combine two or three sub-topics within a single multi-step problem rather than testing each in isolation -- a question might open with a proof, use its result within an algebraic manipulation, and finish with a differentiation or integration step. Past-paper practice specific to Unit P2, rather than only topic-by-topic drilling, is the most reliable way to build fluency at combining sub-topics under exam conditions.

## Key terms

**Proof by deduction** — a general algebraic argument valid for all cases. **Proof by exhaustion** — checking every case in a genuinely finite, confirmed-complete set. **Factor theorem** — if f(b/a) = 0 then (ax − b) is a factor of f(x). **Stationary point** — a point where dy/dx = 0, classified as a maximum or minimum using d²y/dx². **Arithmetic sequence** — constant common difference between terms. **Geometric sequence** — constant common ratio between terms. **Convergent series** — a geometric series with |r| < 1, possessing a finite sum to infinity.

## Common mistakes

- Applying the arithmetic sum formula to a geometric sequence, or vice versa, without checking for a common difference/ratio first.
- Forgetting the |r| < 1 condition before using the sum-to-infinity formula.
- Adding signed definite integrals when a total area is required, instead of splitting at the roots and taking absolute values of each part.
- Not checking the gradient's sign either side of a stationary point when the second-derivative test itself gives zero.
- Treating a proof-by-exhaustion case list as complete without explicitly confirming it covers every possibility.

## Quick self-test

- State the sum-to-infinity formula and its validity condition.
- Prove, by exhaustion, that the square of any even number from 2 to 8 is even.
- Find and classify the stationary points of y = x³ − 3x.
- Solve 2 sin²θ − 1 = 0 for 0° ≤ θ ≤ 360°.
- Identify whether a sequence with terms 5, 10, 20, 40 is arithmetic or geometric, and find its next term.

## Related resources

- [Pure Mathematics 2 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-2/)
- [Pure Mathematics 2 practice questions](/resources/edexcel-a-level-mathematics-pure2-practice/)

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level
Mathematics (YMA01) specification, Issue 3 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
