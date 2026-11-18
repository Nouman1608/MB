---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.18 First order differential equations (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.18
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-18"
description: "Revision notes for IB DP Maths AA HL section 5.18: classifying first order differential equations, four solution methods, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **syllabus section 5.18** of IB DP Mathematics: Analysis and Approaches (first assessment 2021): Euler's method, separable equations, homogeneous equations and the integrating factor. It is HL-only (AHL) content. For full explanations and annotated examples, use the [section 5.18 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-18/).

## Condensed recall: classify first

Rearrange to dy/dx = F(x, y), then check:

1. **Separable?** F(x, y) = g(x)h(y). Example: dy/dx = xy + x = x(y + 1).
2. **Homogeneous?** F depends only on y/x. Test: replacing x, y by λx, λy leaves F unchanged. Example: (x² − y²)/(xy).
3. **Linear?** It can be written y′ + P(x)y = Q(x), with y and y′ only to the first power and never multiplied together. Example: y′ + y/x = x².
4. **None of these**, or a numerical value is asked for: **Euler's method**.

An equation such as dy/dx = (x + y)² is none of the first three, so in this course it is handled numerically.

## Condensed recall: the four methods

**Euler's method**

- xₙ₊₁ = xₙ + h, yₙ₊₁ = yₙ + h f(xₙ, yₙ).
- The gradient used is the one at the start of each step.
- Number of steps = (final x − starting x)/h.
- Curve concave up → Euler underestimates; concave down → overestimates.
- Smaller h → smaller error (roughly in proportion to h).

**Separable**

- h(y) dy/dx = g(x) → ∫h(y) dy = ∫g(x) dx + c.
- One constant only, on the x side.
- ln|y| = f(x) + c → y = Ae^(f(x)), with A = ±e^c.

**Homogeneous**

- y = vx, so dy/dx = v + x dv/dx.
- Then x dv/dx = f(v) − v, which separates: ∫ dv/(f(v) − v) = ln|x| + c.
- Finish by writing v = y/x and, if possible, making y the subject.

**Integrating factor**

- Write in standard form: coefficient of y′ must be 1.
- I(x) = e^(∫P(x) dx); no constant needed in this integral.
- d/dx(I y) = I Q, so I y = ∫I Q dx + C, then divide by I.
- Useful simplifications: e^(k ln x) = xᵏ, e^(ln sin x) = sin x, e^(−ln cos x) = sec x.

**Common integrating factors**

| P(x) | I(x) |
|---|---|
| k (constant) | e^(kx) |
| k/x, x > 0 | xᵏ |
| 2x | e^(x²) |
| tan x | sec x |
| −tan x | cos x |
| cot x | sin x |

## Key terms

| Term | Meaning |
|---|---|
| Order | The highest derivative in the equation; first order means only dy/dx |
| General solution | A solution containing an arbitrary constant; a family of curves |
| Particular solution | The solution satisfying a given initial or boundary condition |
| Initial condition | A known point, such as y = 2 when x = 0, used to find the constant |
| Separable | dy/dx = g(x)h(y), so the variables can be split onto opposite sides |
| Homogeneous (first order) | dy/dx = f(y/x); solved with y = vx |
| Linear (first order) | y′ + P(x)y = Q(x) |
| Integrating factor | I(x) = e^(∫P dx), which turns the left side into d/dx(I y) |
| Step length h | The increase in x for each step of Euler's method |
| Numerical solution | An approximate value found by a step-by-step method |

## Exam traps

- **Standard form first.** For 2y′ + 6y = x, divide by 2 before reading off P = 3.
- **Sign of P.** y′ − 4y = … has P = −4, so I = e^(−4x).
- **Constant placement.** In I y = ∫IQ dx + C, divide the C by I too.
- **Exponentiating.** ln|y − 3| = 2x + c gives y = 3 + Ae^(2x), not y = e^(2x) + c + 3.
- **Missing v.** dy/dx = v + x dv/dx, not x dv/dx.
- **Not returning to y.** A homogeneous answer left in v is incomplete.
- **Euler rounding.** Keep full calculator values in every row; round only the final answer.
- **Wrong number of steps.** From x = 1 to x = 2 with h = 0.25 is four steps, not five.
- **Domain.** When ln x appears, the question normally restricts to x > 0; state it if you drop the modulus.

## Self-test

1. Classify dy/dx = (x³ + y³)/(xy²).
2. Classify dy/dx = (x + y)².
3. Write down the integrating factor for y′ + 2xy = x.
4. Hence find the general solution of y′ + 2xy = x.
5. Solve dy/dx = y² cos x, given y = 1 when x = 0.
6. Use y = vx to rewrite dy/dx = (y/x)² + y/x as an equation in v and x.
7. Find the integrating factor for y′ − y tan x = 1, for −π/2 < x < π/2.
8. Use one step of Euler's method with h = 0.5 to estimate y(0.5) for dy/dx = x − 2y, y(0) = 3.
9. Solve dP/dt = kP, given P = P₀ when t = 0.
10. Verify that y = Cx² satisfies x dy/dx = 2y for every constant C.
11. Explain why the arbitrary constant must be added before dividing by the integrating factor.
12. State when Euler's method gives an overestimate.

**Answers**

1. Homogeneous: replacing x, y by λx, λy gives λ³/λ³ = 1, unchanged. It equals (1 + v³)/v².
2. None of separable, homogeneous or linear: (x + y)² cannot be split as g(x)h(y), does not depend on y/x alone, and contains y². Use Euler's method.
3. I = e^(∫2x dx) = e^(x²).
4. d/dx(ye^(x²)) = xe^(x²), so ye^(x²) = ½e^(x²) + C and y = ½ + Ce^(−x²).
5. ∫y⁻² dy = ∫cos x dx gives −1/y = sin x + c. At (0, 1), c = −1, so y = 1/(1 − sin x).
6. v + x dv/dx = v² + v, so x dv/dx = v².
7. P = −tan x, ∫−tan x dx = ln(cos x), so I = cos x.
8. f(0, 3) = 0 − 6 = −6, so y(0.5) ≈ 3 + 0.5(−6) = 0.
9. ln|P| = kt + c, so P = P₀e^(kt).
10. dy/dx = 2Cx, so x dy/dx = 2Cx² = 2y. True for every C.
11. The constant comes from integrating IQ, so it belongs to I y. Dividing by I afterwards gives C/I, which changes the shape of every solution curve; adding C after dividing gives the wrong family.
12. When the solution curve is concave down over the steps, because each tangent line lies above the curve.

## Where next

Practise full exam-style questions in the [section 5.18 practice set](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-18-practice/). For the rest of HL calculus, including the logistic equation solved with partial fractions, use the [further calculus revision notes](/resources/ib-dp-mathematics-aa-hl-further-calculus-revision-notes/). Maclaurin series built from differential equations continue in the [section 5.19 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-19-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 5.18.
