---
title: "OCR A Level Mathematics A: Differential equations: separable equations and their interpretation (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths A Separable DEs Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Differential equations: separable equations and their interpretation"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 121
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "integration-ocr-alevel-maths"
description: "Condensed revision notes on separable differential equations, particular solutions, growth and decay and modelling for OCR A Level Mathematics A."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense sections 1.08k and 1.08l of the OCR A Level Mathematics A specification (Version 3.1, August 2026, for first assessment in 2018). Both are Stage 2, so they are A Level only. For full explanations and worked examples, use the [study guide](/resources/ocr-a-level-mathematics-differential-equations-separable-equations-and-their/). Test yourself with the [practice questions](/resources/ocr-a-level-mathematics-differential-equations-separable-equations-and-their-practice/).

The course page is [OCR A Level Mathematics](/boards/ocr/a-level/mathematics/), the printable list is the [checklist](/checklists/ocr/a-level/mathematics/), and the [free diagnostics](/diagnostics/) show which topics to revise first. The integration techniques you need are in the [Pure Mathematics revision notes](/resources/ocr-a-level-mathematics-pure-revision-notes/).

## Key terms

| Term | Meaning |
|---|---|
| First order differential equation | Contains dy/dx (or dN/dt) but no higher derivative |
| General solution | Contains an arbitrary constant; a family of curves |
| Initial condition | A known value, such as y = 3 when x = 1 |
| Particular solution | The one member of the family that fits the initial condition |
| Separable | Can be written dy/dx = f(x)g(y) |

## Direct integration (1.08k)

If dy/dx = f(x), then y = ∫ f(x) dx + c. Find c from the initial condition.

**Worked reminder.** dy/dx = 6x − 5/x² with y = 4 when x = 1. Then y = 3x² + 5/x + c. At x = 1: 4 = 3 + 5 + c, so c = −4. Particular solution: y = 3x² + 5/x − 4.

## Separating variables (1.08k)

Method in steps:

1. Factorise the right-hand side if you can: dy/dx = f(x)g(y).
2. Rearrange to get the y terms with dy and the x terms with dx: (1/g(y)) dy = f(x) dx.
3. Integrate each side, adding a single constant to one of them.
4. Put the given values of x and y into the result to find that constant.
5. Make y the subject where the question asks, or where it is simple.

| Form | Separated | Typical result |
|---|---|---|
| dy/dx = ky | ∫ 1/y dy = ∫ k dx | y = Ae^(kx) |
| dy/dx = y² f(x) | ∫ y⁻² dy = ∫ f(x) dx | −1/y = ∫ f(x) dx |
| dy/dx = f(x)/y | ∫ y dy = ∫ f(x) dx | y²/2 = ∫ f(x) dx |
| dy/dx = k(y − a) | ∫ 1/(y − a) dy = ∫ k dx | y = a + Ae^(kx) |
| dy/dx = e^(x + y) | ∫ e^(−y) dy = ∫ e^x dx | e^(−y) result, then take logs |

**Worked reminder (common factor).** dy/dx = 2xy + 6x with y = 1 when x = 0. Factorise: dy/dx = 2x(y + 3). Then ∫ 1/(y + 3) dy = ∫ 2x dx, so ln|y + 3| = x² + c. Hence y + 3 = Ae^(x²). At x = 0: 4 = A. So y = 4e^(x²) − 3.

**Worked reminder (powers of y).** dy/dx = 6x²y² with y = 1/2 when x = 0. Then ∫ y⁻² dy = ∫ 6x² dx gives −1/y = 2x³ + c. At x = 0: −2 = c. So 1/y = 2 − 2x³ and y = 1/(2 − 2x³).

## From logarithm to exponential

ln|y − a| = g(x) + c becomes y − a = Ae^(g(x)), where A = ±eᶜ. Apply the initial condition to A.

- Never write y − a = e^(g(x)) + c.
- If the question tells you y > a, you may write ln(y − a) with no modulus.
- A constant solution y = a is covered by A = 0.

## Exponential growth and decay (1.08l)

| Words | Equation | Solution |
|---|---|---|
| Rate of increase proportional to the amount | dN/dt = kN, k > 0 | N = N₀e^(kt) |
| Rate of decrease proportional to the amount | dN/dt = −kN, k > 0 | N = N₀e^(−kt) |
| Rate proportional to the difference from a fixed value a | dT/dt = −k(T − a) | T = a + Ae^(−kt) |

- **Half-life:** solve N = N₀/2, so t = ln 2/k.
- **Doubling time:** solve N = 2N₀, so t = ln 2/k.
- N₀ is the value at t = 0.
- Use two data points to find k: divide one equation by the other, or take logs.

**Worked reminder.** A population satisfies dN/dt = 0.04N, with N = 2000 at t = 0. Then N = 2000e^(0.04t). It reaches 5000 when e^(0.04t) = 2.5, so t = ln 2.5/0.04 = 22.9 years.

## Cooling and the constant in the exponent

**Worked reminder.** A metal block at 90 °C is placed in a room at 15 °C. Its temperature obeys dT/dt = −k(T − 15). After 6 minutes it is 60 °C.

1. Separate and integrate: ln(T − 15) = −kt + c, so T = 15 + Ae^(−kt).
2. At t = 0, T = 90, so A = 75.
3. At t = 6: 45 = 75e^(−6k), so e^(−6k) = 0.6 and k = −ln 0.6/6 = 0.0851.
4. Time to reach 30 °C: 15 = 75e^(−kt), so t = ln 5/k = 18.9 minutes.

Always keep k exact (or to at least 4 significant figures) until the last line, and round only the final answer.

## Setting up an equation from words

| Statement | Equation |
|---|---|
| The rate of growth of x is proportional to x | dx/dt = kx |
| The rate of decrease of m is proportional to m² | dm/dt = −km² |
| The gradient at (x, y) is twice y divided by x | dy/dx = 2y/x |
| The rate of cooling is proportional to the excess temperature over 15 | dT/dt = −k(T − 15) |

Define every symbol with its units, state whether k is positive, and add the initial condition before you solve.

## Kinematics links (1.08l)

- v = ds/dt and a = dv/dt.
- If a depends on v, separate in v and t. If a depends on s, the equation may need a different method, and it is not covered here.
- A speed that approaches a limit has a **terminal velocity**: set the acceleration to zero and solve.

**Worked reminder.** dv/dt = 12 − 3v with v = 2 when t = 0. Then ∫ 1/(12 − 3v) dv = ∫ dt gives −(1/3) ln|12 − 3v| = t + c. So 12 − 3v = Ae^(−3t). At t = 0: A = 6. Then v = 4 − 2e^(−3t). As t → ∞, v → 4, so the terminal velocity is 4. Check by setting 12 − 3v = 0: v = 4.

## Interpreting a solution

| Question to ask | What to write |
|---|---|
| What is the value at t = 0? | The starting amount, temperature or speed |
| What happens as t → ∞? | Limiting value, unlimited growth, or decay towards 0 |
| Does it make sense for all t? | Check for negative or impossible values, or division by zero |
| What does the model ignore? | Limited resources, changing surroundings, air resistance |

**Limitations to quote with a reason:**

- Exponential growth continues for ever, but real populations are limited by space or food.
- Exponential decay never reaches zero, but real quantities are made of whole units.
- Newton cooling assumes steady surroundings and uniform temperature.
- A formula valid for an interval may fail outside it (a denominator can become zero).

## Must-know distinctions

- **General or particular?** General has c or A; particular has a number.
- **dy/dt = ky or dy/dt = k(y − a)?** The first tends to 0 (or grows without limit); the second tends to a.
- **"Increases" or "decreases"?** Decide the sign of the right-hand side from the words, not from k.
- **Solution or check?** Differentiate your answer and put it in the equation if time allows.

## Quick self-test

1. Find the general solution of dy/dx = 8x³ − 2.
2. Solve dy/dx = 4y, given y = 3 when x = 0.
3. Solve dy/dx = x/y², given y = 1 when x = 0.
4. Solve dy/dx = x(y − 1), given y = 5 when x = 0.
5. Solve dy/dx = e^(2x − y), given y = 0 when x = 0. Give y in terms of x.
6. A quantity satisfies dm/dt = −0.05m. Find the time for it to halve.
7. A population satisfies dP/dt = kP, with P = 400 at t = 0 and P = 600 at t = 2. Find k.
8. A hot drink obeys dT/dt = −0.1(T − 20). State what T approaches.
9. A particle has dv/dt = 5 − v and v = 0 at t = 0. Find v in terms of t.
10. Give one limitation of exponential growth as a model for a population.

### Answers

1. y = 2x⁴ − 2x + c
2. y = 3e^(4x)
3. ∫ y² dy = ∫ x dx, so y³/3 = x²/2 + c; at (0, 1), c = 1/3. y = ∛(1 + 3x²/2).
4. ln|y − 1| = x²/2 + c; y − 1 = Ae^(x²/2); A = 4. y = 1 + 4e^(x²/2).
5. e^y dy = e^(2x) dx, so e^y = e^(2x)/2 + c; at (0, 0), c = 1/2. y = ln((e^(2x) + 1)/2).
6. t = ln 2/0.05 = 13.9
7. 600 = 400e^(2k), so k = ln 1.5/2 = 0.203
8. 20 (the surroundings)
9. −ln|5 − v| = t + c; 5 − v = 5e^(−t); v = 5 − 5e^(−t)
10. It gives unlimited growth; real populations are limited by food or space.

## Where marks are usually lost

- Putting a constant on both sides, or none at all.
- Missing the common factor, so the variables never separate.
- Writing y − a = e^(g(x)) + c instead of y − a = Ae^(g(x)).
- Substituting the initial condition before integrating.
- Getting the sign of k wrong for decay.
- Giving a limitation that is vague ("not realistic") with no reason tied to the context.
- Leaving a solution with a domain problem unmentioned, such as a denominator that reaches zero.
- Stopping at the solution when the question asks for a time, a limit or a distance.

## Official syllabus

OCR, *A Level Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018. Sections 1.08k and 1.08l.
