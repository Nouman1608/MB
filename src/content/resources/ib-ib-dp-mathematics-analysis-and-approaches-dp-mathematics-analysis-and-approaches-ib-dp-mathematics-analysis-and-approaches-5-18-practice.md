---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.18 First order differential equations (AHL only) -- Practice Questions"
resourceType: "practice-questions"
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
description: "12 original IB DP Maths AA HL questions on first order differential equations (section 5.18): Euler, separable, y = vx and integrating factors."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

This set covers **syllabus section 5.18** of IB DP Mathematics: Analysis and Approaches (first assessment 2021): Euler's method, separable equations, homogeneous equations with y = vx, and the integrating factor. It is HL-only content. Questions are labelled "(calculator-free)" for Paper 1 style or "(calculator allowed)" for Paper 2 style. Give answers exactly or to 3 significant figures unless told otherwise.

Learn the methods first in the [section 5.18 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-18/) and the [section 5.18 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-18-revision-notes/).

## Section A

**1.** (calculator-free) State whether each differential equation is separable, homogeneous or linear.

**(a)** dy/dx = x²y³ **[1]**

**(b)** dy/dx = (x − y)/(x + y) **[1]**

**(c)** dy/dx + y tan x = sec x **[1]**

**2.** (calculator allowed) A curve satisfies dy/dx = x² + y, and y = 2 when x = 1. Use Euler's method with step length 0.1 to estimate y when x = 1.2. **[3]**

**3.** (calculator-free) Find the general solution of x dy/dx + 3y = x², for x > 0. **[4]**

**4.** (calculator-free) Solve dy/dx = e^(x − y), given that y = ln 2 when x = 0. Give y in terms of x. **[4]**

**5.** (calculator-free) Show that the substitution y = vx transforms the equation dy/dx = f(y/x) into x dv/dx = f(v) − v. **[2]**

**6.** (calculator allowed) The number of bacteria P in a culture t hours after it is set up satisfies dP/dt = 0.04P, and P = 250 when t = 0.

**(a)** Find P in terms of t. **[2]**

**(b)** Find the number of bacteria after 10 hours. **[1]**

## Section B

**7.** (calculator-free) Water drains from a tank. The depth h metres after t hours satisfies dh/dt = −k√h, where k is a positive constant. Initially h = 16.

**(a)** Show that 2√h = 8 − kt. **[3]**

**(b)** After 2 hours the depth is 9 metres. Find the value of k. **[2]**

**(c)** Find the time at which the tank becomes empty. **[2]**

**8.** (calculator-free) Use the substitution y = vx to solve dy/dx = y/x + tan(y/x), for 0 < x < 2, given that y = π/6 when x = 1. Show that y = x arcsin(x/2). **[6]**

**9.** (calculator-free) Consider dy/dx + y cot x = 2 cos x, for 0 < x < π.

**(a)** Show that an integrating factor is sin x. **[2]**

**(b)** Given that y = 3 when x = π/2, find y in terms of x. **[5]**

**10.** (calculator allowed) A curve passes through (0, 0) and satisfies dy/dx = 2x(y + 1).

**(a)** Use Euler's method with h = 0.25 to estimate y when x = 0.5. **[3]**

**(b)** Solve the differential equation, giving y in terms of x. **[4]**

**(c)** Find the percentage error in your answer to (a). **[2]**

**(d)** Explain why the estimate in (a) is too small, and state how it could be improved using Euler's method. **[2]**

**11.** (calculator allowed) A drug is given by a continuous drip. The amount x mg in the bloodstream t hours after the drip starts satisfies dx/dt = 5 − 0.25x, with x = 0 when t = 0.

**(a)** Show that x = 20(1 − e^(−0.25t)). **[4]**

**(b)** Write down the amount of drug in the bloodstream in the long term. **[1]**

**(c)** Find the time taken for the amount to reach 15 mg. **[2]**

**12.** (calculator-free) Consider dy/dx = (x + y)/x, for x > 0, with y = 2 when x = 1.

**(a)** Use the substitution y = vx to find y in terms of x. **[4]**

**(b)** Show that solving the same equation with an integrating factor gives the same result. **[4]**

## Answers

**1. (a)** **Separable**: x² × y³ is a function of x times a function of y [1]

**(b)** **Homogeneous**: dividing top and bottom by x gives (1 − v)/(1 + v), with v = y/x [1]

**(c)** **Linear**: P(x) = tan x and Q(x) = sec x [1]

**2.** x = 1: y₁ = 2 + 0.1(1 + 2) = 2.3 [1]. x = 1.1: f = 1.21 + 2.3 = 3.51 [1]. y(1.2) ≈ 2.3 + 0.351 = **2.651** [1]

**3.** Divide by x: y′ + (3/x)y = x [1]. I = e^(3 ln x) = x³ [1]. d/dx(x³y) = x⁴, so x³y = x⁵/5 + C [1]. **y = x²/5 + C/x³** [1]

**4.** e^(x − y) = eˣe^(−y), so ∫eʸ dy = ∫eˣ dx [1]. eʸ = eˣ + c [1]. At x = 0: 2 = 1 + c, so c = 1 [1]. **y = ln(eˣ + 1)** [1]

**5.** y = vx gives dy/dx = v + x dv/dx by the product rule [1]. Substituting: v + x dv/dx = f(v), so x dv/dx = f(v) − v [1]

**6. (a)** ∫(1/P) dP = ∫0.04 dt gives ln P = 0.04t + c [1]. **P = 250e^(0.04t)** [1]

**(b)** 250e^(0.4) = 372.9…, so **373 bacteria** [1]

**7. (a)** ∫h^(−1/2) dh = ∫−k dt [1]. 2√h = −kt + c [1]. At t = 0, 2√16 = 8 = c, so 2√h = 8 − kt [1]

**(b)** 2√9 = 8 − 2k, so 6 = 8 − 2k [1]. **k = 1** [1]

**(c)** Empty when h = 0: 0 = 8 − t [1]. **t = 8 hours** [1]

*Examiner insight:* In (a), the constant must be found from h = 16 before k is known; finding k first is impossible because there are two unknowns.

**8.** v + x dv/dx = v + tan v, so x dv/dx = tan v [1]. ∫cot v dv = ∫(1/x) dx [1]. ln|sin v| = ln x + c [1]. sin v = Ax [1]. At x = 1, v = π/6: A = sin(π/6) = 1/2 [1]. sin(y/x) = x/2, so **y = x arcsin(x/2)** [1]

*Examiner insight:* The v terms cancel on purpose. If they do not, check that you used v + x dv/dx and not x dv/dx alone.

**9. (a)** ∫cot x dx = ln|sin x| [1]. sin x > 0 for 0 < x < π, so I = e^(ln sin x) = sin x [1]

**(b)** d/dx(y sin x) = 2 sin x cos x [1]. y sin x = sin² x + C [1]. At x = π/2: 3 × 1 = 1 + C [1], so C = 2 [1]. **y = sin x + 2/sin x** (or sin x + 2 cosec x) [1]

*Examiner insight:* Integrating 2 sin x cos x as −½ cos 2x gives C = 5/2 instead; the final function is identical, so either route earns full marks.

**10. (a)** f(0, 0) = 0, so y(0.25) ≈ 0 [1]. f(0.25, 0) = 2(0.25)(1) = 0.5 [1]. y(0.5) ≈ 0 + 0.25 × 0.5 = **0.125** [1]

**(b)** ∫1/(y + 1) dy = ∫2x dx [1]. ln|y + 1| = x² + c [1]. At (0, 0), c = 0 [1]. **y = e^(x²) − 1** [1]

**(c)** Exact y(0.5) = e^(0.25) − 1 = 0.28403 [1]. Error = (0.28403 − 0.125)/0.28403 × 100 = **56.0%** [1]

**(d)** d²y/dx² = 2(y + 1)(1 + 2x²) > 0, so the curve is concave up and each tangent step lies below it [1]. Use a smaller step length, for example h = 0.05 [1]

**11. (a)** ∫1/(5 − 0.25x) dx = ∫dt [1]. −4 ln|5 − 0.25x| = t + c [1]. At t = 0, x = 0: c = −4 ln 5 [1]. 5 − 0.25x = 5e^(−0.25t), so x = 20(1 − e^(−0.25t)) [1]

**(b)** e^(−0.25t) → 0, so **20 mg** [1]

**(c)** 20(1 − e^(−0.25t)) = 15 gives e^(−0.25t) = 0.25 [1]. t = 4 ln 4 = **5.55 hours** [1]

*Examiner insight:* The equation is also linear (x′ + 0.25x = 5), so an integrating factor e^(0.25t) is an equally valid method for (a).

**12. (a)** v + x dv/dx = 1 + v [1]. dv = (1/x) dx, so v = ln x + c [1]. At x = 1, v = 2: c = 2 [1]. **y = x ln x + 2x** [1]

**(b)** y′ − (1/x)y = 1 [1]. I = e^(−ln x) = 1/x [1]. d/dx(y/x) = 1/x, so y/x = ln x + C [1]. At (1, 2), C = 2, giving y = x ln x + 2x, the same result [1]

## Where marks are usually lost

- Reading P(x) before the equation is in standard form (question 3).
- Writing eʸ = eˣ + c as y = x + c (question 4): the logarithm of a sum is not a sum of logarithms.
- Adding the constant after dividing by the integrating factor (question 9).
- Using the gradient at the end of each Euler step instead of the start (question 10).
- Dividing by the Euler estimate instead of the exact value in a percentage error.
- Leaving a homogeneous answer in terms of v (question 8).

## Next steps

- Recap the methods in the [section 5.18 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-18-revision-notes/).
- For a logistic model solved with partial fractions and mixed HL calculus questions, try the [further calculus practice questions](/resources/ib-dp-mathematics-aa-hl-further-calculus-practice/).
- Move on to series solutions with the [section 5.19 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-19-practice/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 5.18.
