---
title: "Cambridge A Level Mathematics (9709): Differential equations (Pure Mathematics 3) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.8
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "differential-equations-cambridge-alevel-maths"
description: "Revision notes for Cambridge 9709 Paper 3 section 3.8: forming rate equations, separating variables, constants, particular solutions, context and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section **3.8 Differential equations** of Pure Mathematics 3 (Paper 3) in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. For worked examples see the [3.8 study guide](/resources/cambridge-a-level-mathematics-9709-differential-equations-cambridge-alevel-maths/); for marked questions use the [3.8 practice questions](/resources/cambridge-a-level-mathematics-9709-differential-equations-cambridge-alevel-maths-practice/).

## The four steps

1. **Form** the equation from words, with a constant k > 0 and the correct sign.
2. **Separate**: get every y (and dy) on one side and every x (and dx) on the other.
3. **Integrate** both sides, adding one constant.
4. **Use** the condition(s) to find the constant(s), rearrange if asked, and **interpret**.

## Separable shapes

| Equation | Separated form | Result |
|---|---|---|
| dy/dx = ky | ∫ 1/y dy = ∫ k dx | y = Ae^(kx) |
| dy/dx = f(x)/g(y) | ∫ g(y) dy = ∫ f(x) dx | depends on f and g |
| dy/dx = e^(x + y) | ∫ e^(−y) dy = ∫ eˣ dx | −e^(−y) = eˣ + c |
| dy/dx = (1 + y²) f(x) | ∫ 1/(1 + y²) dy = ∫ f(x) dx | tan⁻¹ y = F(x) + c |
| dy/dx = cos²y f(x) | ∫ sec²y dy = ∫ f(x) dx | tan y = F(x) + c |
| dx/dt = k(a − x) | ∫ 1/(a − x) dx = ∫ k dt | −ln\|a − x\| = kt + c |
| dx/dt = x(a − x) | partial fractions on the left | logistic-type growth to a |

## Handling the constant

- ln|y| = g(x) + c can be rewritten as y = Ae^(g(x)), where A = ±e^c.
- Find c before rearranging if the rearrangement is messy; either order is accepted if the algebra is right.
- With two conditions (for example θ at t = 0 and at t = 10), one finds c and the other finds k.
- Never write e^(g(x) + c) as e^(g(x)) + e^c.

## Interpreting the answer

| Question | What to do |
|---|---|
| Long-term behaviour | Let t → ∞ and state the limit in context |
| Time to reach a value | Substitute and solve, usually with logarithms |
| Does it ever reach a value? | Show the equation has no solution, or that the limit is never reached |
| Validity of the model | Note where the model gives impossible values, such as negative depth |

## One condensed example with two conditions

x is inversely proportional to x² in its rate of growth: dx/dt = k/x². Given x = 1 at t = 0 and x = 2 at t = 7:

```text
∫ x² dx = ∫ k dt   →   x³/3 = kt + c
t = 0, x = 1:   c = 1/3
t = 7, x = 2:   8/3 = 7k + 1/3   →   k = 1/3
x³ = t + 1,  so  x = ∛(t + 1)
```

The first condition fixes c and the second fixes k.

## Key terms

| Term | Meaning |
|---|---|
| Differential equation | An equation involving a derivative |
| First order | Contains only the first derivative |
| Separable | Can be written as dy/dx = f(x)g(y) |
| General solution | Contains an arbitrary constant |
| Particular solution | The constant fixed by an initial condition |
| Constant of proportionality | k in "rate ∝ quantity" |
| Initial condition | A known value such as y = 2 when x = 0 |

## Exam traps

- "Decreases" needs a minus sign: dV/dt = −kV, not kV with a negative k left unexplained.
- Separate before integrating; ∫ y dx with y unknown cannot be done.
- One constant only, on one side.
- e^(a + c) = Ae^a, not e^a + c.
- ∫ 1/(a − x) dx = −ln|a − x|: the minus is the most common slip.
- When partial fractions are needed, show the split.
- "Express y in terms of x" means an explicit formula; stopping at ln y = … loses the final mark.
- Context answers must use the units and words of the problem.

## Self-test

1. Write a differential equation for: the rate of increase of P is proportional to P².
2. A curve's gradient at (x, y) is 2x/y. Write the equation and separate it.
3. Solve dy/dx = 2y, given y = 3 when x = 0.
4. Solve dy/dx = x/y, given y = 2 when x = 0.
5. Find the general solution of dy/dx = y cos x.
6. Separate dy/dx = (1 + y²)/x.
7. Solve dx/dt = −0.5x, x = 10 at t = 0. When does x = 5?
8. In dθ/dt = −k(θ − 15), what does θ tend to as t → ∞?
9. Find ∫ 1/(5 − x) dx.
10. Rewrite ln|y| = 3x + c in the form y = Ae^(3x).
11. Solve dy/dx = e^(−y), given y = 0 when x = 0.
12. A model gives h = (4 − 0.2t)². For which t is the model valid if h is a depth that decreases to zero?

**Answers**

1. dP/dt = kP², k > 0.
2. dy/dx = 2x/y; ∫ y dy = ∫ 2x dx.
3. y = Ae^(2x), A = 3: **y = 3e^(2x)**.
4. y²/2 = x²/2 + c, c = 2: **y² = x² + 4**, so y = √(x² + 4) (positive since y = 2 > 0).
5. ln|y| = sin x + c, so **y = Ae^(sin x)**.
6. ∫ 1/(1 + y²) dy = ∫ 1/x dx, giving tan⁻¹ y = ln|x| + c.
7. x = 10e^(−0.5t); 5 = 10e^(−0.5t) gives **t = 2 ln 2 = 1.39**.
8. **15**.
9. **−ln|5 − x| + c**.
10. y = ±e^c e^(3x), so **A = ±e^c**.
11. eʸ = x + 1, so **y = ln(x + 1)**.
12. h reaches 0 at t = 20, so **0 ≤ t ≤ 20**.

## Links

- Full explanations: [3.8 study guide](/resources/cambridge-a-level-mathematics-9709-differential-equations-cambridge-alevel-maths/)
- Marked questions: [3.8 practice questions](/resources/cambridge-a-level-mathematics-9709-differential-equations-cambridge-alevel-maths-practice/)
- Paper 3 summary: [Pure Mathematics 3 revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/)
