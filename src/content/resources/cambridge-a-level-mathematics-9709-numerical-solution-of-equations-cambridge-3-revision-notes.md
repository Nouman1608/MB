---
title: "Cambridge A Level Mathematics (9709): Numerical solution of equations (Pure Mathematics 3) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.6
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "numerical-solution-of-equations-cambridge-3"
description: "Revision notes for Cambridge 9709 Paper 3 section 3.6: sign change, graphs to count roots, iteration, limits, divergence, accuracy checks and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section **3.6 Numerical solution of equations** of Pure Mathematics 3 (Paper 3) in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. For worked examples see the [3.6 study guide](/resources/cambridge-a-level-mathematics-9709-numerical-solution-of-equations-cambridge-3/); for marked questions use the [3.6 practice questions](/resources/cambridge-a-level-mathematics-9709-numerical-solution-of-equations-cambridge-3-practice/).

## The three skills

1. **Locate a root.** Sketch y = g(x) and y = h(x) and count intersections; or show f(a) and f(b) have opposite signs for continuous f.
2. **Iterate.** Rearrange f(x) = 0 as x = F(x) and compute xₙ₊₁ = F(xₙ) from a starting value.
3. **Interpret.** If xₙ → α then α = F(α), so α satisfies the original equation. Some rearrangements do not converge; the convergence condition itself is not required.

## The sign-change argument in full

```text
Let f(x) = …
f(a) = … < 0
f(b) = … > 0
f is continuous on [a, b] and changes sign, so f(x) = 0 has a root in a < x < b.
```

Write f(x) = 0 with everything on one side first. For an equation like x = 2 sin x, use f(x) = x − 2 sin x (or 2 sin x − x); either sign convention is fine if you are consistent.

## Choosing graphs to count roots

| Equation | Graphs to sketch |
|---|---|
| eˣ = 4 − x² | y = eˣ and y = 4 − x² |
| ln x = 3 − x | y = ln x and y = 3 − x |
| x = 2 sin x | y = x and y = 2 sin x |
| cot x = x | y = cot x and y = x |
| x³ − 5x + 1 = 0 | y = x³ and y = 5x − 1 |

Pick graphs whose shapes you know exactly; a quick, labelled sketch is enough.

## Iteration routine

1. Calculator in radians if trigonometry is involved.
2. Type the start value, then the formula using the answer key, and press equals repeatedly.
3. Write each iterate to the decimal places asked for (usually two more than the final answer).
4. Stop when two successive iterates round to the same value at the required accuracy.
5. State the root clearly: "α = 2.21 to 2 d.p."
6. If asked to justify the accuracy, check the sign of f at α ± 0.005 (for 2 d.p.).

## Spotting divergence or the wrong root

- Iterates growing without limit or jumping wildly: the iteration **diverges**.
- Iterates settling on a value outside the interval you located: it converges to a **different root**. For example, xₙ₊₁ = (xₙ³ + 1)/5 starting at 2 heads to about 0.2016, not to the root of x³ − 5x + 1 = 0 between 2 and 3.
- Either way, say so in words and use a different rearrangement if one is given.

## Finding the equation from an iteration

Replace both xₙ₊₁ and xₙ by α, then simplify:

```text
xₙ₊₁ = √(5 + 2/xₙ)   →   α² = 5 + 2/α   →   α³ − 5α − 2 = 0
xₙ₊₁ = ⅓(2xₙ + 10/xₙ²)   →   α³ = 10
```

## Key terms

| Term | Meaning |
|---|---|
| Root | A value of x with f(x) = 0 |
| Continuous | No breaks or jumps in the graph over the interval |
| Sign change | f(a) and f(b) have opposite signs |
| Iterative formula | A rule xₙ₊₁ = F(xₙ) producing a sequence |
| Converge | The sequence approaches a fixed limit |
| Diverge | The sequence does not settle to a limit |
| Limit α | The value the sequence approaches; satisfies α = F(α) |

## Exam traps

- A sign change needs a continuous function: tan x changes sign across π/2 without a root.
- Values of f(a) and f(b) need a written conclusion.
- Rounding iterates before reusing them changes later values.
- Too few iterations: two successive iterates must agree at the required accuracy.
- Degrees instead of radians ruins every iterate.
- "Hence" after a "show that" means use the iteration or equation just given.
- An answer to 3 d.p. needs iterates written to at least 4 or 5 d.p.

## Self-test

1. Show that x³ − 2x − 5 = 0 has a root between 2 and 3.
2. What must be true about f for the sign-change argument to work?
3. xₙ₊₁ = √(2xₙ + 3). Find the equation satisfied by the limit α and solve it.
4. With x₁ = 1, find x₂ and x₃ for xₙ₊₁ = cos xₙ (radians), to 4 d.p.
5. How many roots has eˣ = 3 − x? Explain.
6. A root of f(x) = 0 is 1.76 to 2 d.p. Which two values of x would you test?
7. xₙ₊₁ = 4/xₙ² + 1. Find the equation satisfied by the limit.
8. An iteration gives 2, 3.1, 0.7, 6.8, −4.9. What do you conclude?
9. Rearrange x³ + 4x − 1 = 0 into the form x = (1 − x³)/4.
10. Why is a sign change for 1/(x − 2) between 1 and 3 not a root?
11. What accuracy should each iterate be written to if the root is wanted to 3 d.p.?
12. xₙ₊₁ = ln(xₙ + 2). Find the equation satisfied by the limit, in exponential form.

**Answers**

1. f(2) = 8 − 4 − 5 = −1 < 0, f(3) = 27 − 6 − 5 = 16 > 0; f is continuous, so there is a root between 2 and 3.
2. f must be continuous on the interval.
3. α² = 2α + 3, so (α − 3)(α + 1) = 0; α > 0 because it is a square root, so **α = 3**.
4. x₂ = 0.5403, x₃ = 0.8576.
5. **One**: y = eˣ is increasing and y = 3 − x is decreasing, and they cross once.
6. **1.755 and 1.765**.
7. α = 4/α² + 1, so **α³ − α² − 4 = 0**.
8. The iteration **diverges** and does not find a root.
9. 4x = 1 − x³, so x = (1 − x³)/4.
10. 1/(x − 2) is not continuous at x = 2; the sign change is caused by the asymptote.
11. Usually 5 d.p., or whatever the question states (at least one more than the answer).
12. α = ln(α + 2), so **e^α = α + 2**.

## Links

- Full explanations: [3.6 study guide](/resources/cambridge-a-level-mathematics-9709-numerical-solution-of-equations-cambridge-3/)
- Marked questions: [3.6 practice questions](/resources/cambridge-a-level-mathematics-9709-numerical-solution-of-equations-cambridge-3-practice/)
- Paper 3 summary: [Pure Mathematics 3 revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/)
