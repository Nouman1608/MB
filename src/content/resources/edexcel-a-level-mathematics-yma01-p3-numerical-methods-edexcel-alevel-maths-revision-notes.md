---
title: "Edexcel International A Level Mathematics (YMA01): Numerical methods (P3.6) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P3: Pure Mathematics 3"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 3.6
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p3-pure-mathematics-3-edexcel-alevel-maths"
    subtopic: "p3-numerical-methods-edexcel-alevel-maths"
description: "Condensed notes on change-of-sign root location, its failure cases and iteration for Edexcel IAL Maths Unit P3, with exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 6 of Unit P3 (Pearson Edexcel International Advanced Level Mathematics, YMA01, Issue 3): "location of roots of f(x) = 0 by considering changes of sign of f(x) in an interval of x in which f(x) is continuous" and "approximate solution of equations using simple iterative methods, including recurrence relations of the form xₙ₊₁ = f(xₙ)". For full worked examples, use the [P3 numerical methods study guide](/resources/edexcel-a-level-mathematics-yma01-p3-numerical-methods-edexcel-alevel-maths/), then try the [P3 numerical methods practice questions](/resources/edexcel-a-level-mathematics-yma01-p3-numerical-methods-edexcel-alevel-maths-practice/).

## Change of sign

**Statement.** If f is continuous on [a, b] and f(a) and f(b) have opposite signs, there is at least one root of f(x) = 0 between a and b.

**Full-marks answer pattern.**

1. f(a) = (value) < 0 and f(b) = (value) > 0, or the other way round.
2. "There is a change of sign."
3. "f is continuous on [a, b]."
4. "So there is a root in (a, b)."

**Showing a root to a given accuracy.** For α = 1.37 to 2 decimal places, test the rounding interval [1.365, 1.375]. For α = 2.214 to 3 decimal places, test [2.2135, 2.2145].

## When the method fails

| Problem | Effect | Typical function |
|---|---|---|
| Discontinuity (asymptote) | Sign change without a root | 1/x on [−1, 1]; tan x across π/2 |
| Touching root (repeated factor) | Root without a sign change | (x − 1)² on [0, 2] |
| Two (or any even number of) roots | No sign change | x² − 3x + 2 on [0.5, 2.5] |
| Roots very close together | Easily missed with a wide interval | Use narrower intervals |

## Iteration

- Rearrange f(x) = 0 into x = g(x); every step must be reversible algebra.
- Iterate xₙ₊₁ = g(xₙ) from the given x₀.
- If the values converge, the limit is a root of f(x) = 0.
- The same equation can have several rearrangements. One may converge to the root you want, another to a different root, and another may diverge.
- In this unit, the iteration formula (the "lead") is given in the question.

**Convergence patterns.**

- Staircase: values approach the root from one side, each closer than the last.
- Cobweb: values jump alternately above and below the root, closing in.
- Divergence: values move further apart, or away from any root.

**Calculator routine.** Enter x₀, press "=", type g(Ans), press "=" repeatedly. Write down each value to the required number of decimal places, but keep the stored value for the next step.

**Mode.** Iterations with sin, cos or tan use **radians** unless told otherwise.

## Worked mini example

x² − x − 3 = 0 can be written x = √(x + 3) (for x > 0). With x₀ = 2: x₁ = √5 = 2.2361, x₂ = 2.2882, x₃ = 2.2996. The values increase towards the positive root (1 + √13)/2 = 2.3028, a staircase pattern. Let f(x) = x² − x − 3. To confirm 2.303 to 3 decimal places, check f(2.3025) < 0 and f(2.3035) > 0.

## Key terms

| Term | Meaning |
|---|---|
| Root | A value α with f(α) = 0 |
| Continuous | The graph has no breaks or jumps over the interval |
| Change of sign | f(a) and f(b) have opposite signs |
| Iteration | Repeatedly applying a formula xₙ₊₁ = g(xₙ) |
| Converge | Values approach a fixed limit |
| Diverge | Values do not approach a limit |
| Starting value | The given x₀ |
| Rearrangement | An equivalent form x = g(x) of f(x) = 0 |

## Exam traps

- Forgetting "f is continuous" in a sign-change conclusion.
- Testing 2.213 and 2.215 to show 2.214 to 3 d.p.: the interval must be 2.2135 to 2.2145.
- Using degrees for trigonometric iterations.
- Rounding each iterate and retyping it.
- Claiming a root from iteration alone when the question asks you to "show" the accuracy.
- Not noticing that an iteration has converged to a different root from the one in the question.
- Not giving iterates to the requested number of decimal places.

## Self-test

**1.** f is continuous, f(1) = −2 and f(2) = 3. What can you conclude?

**2.** Why must f be continuous for the sign-change test to work?

**3.** Which interval would you test to show that a root is 1.37 to 2 decimal places?

**4.** Use xₙ₊₁ = √(xₙ + 3) with x₀ = 2 to find x₁ and x₂ to 4 decimal places.

**5.** Which equation does the iteration in Question 4 solve?

**6.** f(x) = 1/x. f(−1) < 0 and f(1) > 0. Is there a root in [−1, 1]?

**7.** An iteration gives 1, 3, 9, 27, ... What does this show?

**8.** f(x) = (x − 1)². Explain why a sign-change search on [0, 2] fails.

**9.** Rearrange x³ − 2x − 5 = 0 into the form x = ∛(...).

**10.** Describe the difference between a staircase and a cobweb pattern of convergence.

**11.** Why should you use the Ans key when iterating on a calculator?

### Answers

**1.** There is at least one root of f(x) = 0 between 1 and 2.

**2.** A discontinuity, such as an asymptote, can produce a change of sign with no root.

**3.** [1.365, 1.375].

**4.** x₁ = √5 = 2.2361 and x₂ = √(5.2361) = 2.2882.

**5.** x² = x + 3, that is x² − x − 3 = 0 (positive root).

**6.** No: 1/x is not continuous at x = 0, and 1/x is never zero.

**7.** The iteration diverges, so it does not give a root.

**8.** f(x) ≥ 0 for all x, so there is no sign change even though x = 1 is a root.

**9.** x³ = 2x + 5, so x = ∛(2x + 5).

**10.** In a staircase the values approach the root from one side; in a cobweb they lie alternately on either side of it.

**11.** It keeps the full stored value at each step, so rounding errors do not build up.

## Related resources

- [P3 numerical methods study guide](/resources/edexcel-a-level-mathematics-yma01-p3-numerical-methods-edexcel-alevel-maths/)
- [P3 numerical methods practice questions](/resources/edexcel-a-level-mathematics-yma01-p3-numerical-methods-edexcel-alevel-maths-practice/)
- [Exponential and natural logarithm functions and numerical methods revision notes](/resources/edexcel-ial-mathematics-the-exponential-and-natural-logarithm-functions-revision-notes/)
- [P3 exponentials and logarithms revision notes](/resources/edexcel-a-level-mathematics-yma01-p3-exponentials-and-logarithms-edexcel-alevel-maths-revision-notes/)
