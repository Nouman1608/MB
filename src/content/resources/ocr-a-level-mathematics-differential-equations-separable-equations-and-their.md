---
title: "OCR A Level Mathematics A: Differential equations: separable equations and their interpretation (H240)"
seoTitle: "OCR A Level Maths A Separable Differential Equations"
resourceType: "study-guides"
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
description: "Study guide to solving separable first order differential equations and interpreting exponential and other models, for OCR A Level Mathematics A."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This study guide follows the OCR A Level Mathematics A specification (Version 3.1, August 2026, for first assessment in 2018). It covers sections 1.08k and 1.08l of the Pure Mathematics content: solving first order differential equations with separable variables, and interpreting the solution in context. The specification lists both under Stage 2, so they are A Level only and are not part of the AS qualification. Pure Mathematics content is assessed in all three written papers.

Use it with the [revision notes](/resources/ocr-a-level-mathematics-differential-equations-separable-equations-and-their-revision-notes/) and the [practice questions](/resources/ocr-a-level-mathematics-differential-equations-separable-equations-and-their-practice/). The course page is [OCR A Level Mathematics](/boards/ocr/a-level/mathematics/) and the printable list is the [checklist](/checklists/ocr/a-level/mathematics/). To find your weak spots first, try the [free diagnostics](/diagnostics/). The general ideas of integration are in the [Pure Mathematics study guide](/resources/ocr-a-level-mathematics-pure-mathematics/); this page assumes you can already integrate the standard functions and does not teach the integration techniques themselves.

## What you must be able to do

| Section | Outcome | Stage |
|---|---|---|
| 1.08k | Find the general solution of a simple first order differential equation by direct integration or by separating variables, including cases that need a common factor taken out | A Level only |
| 1.08k | Use an initial condition to find a particular solution | A Level only |
| 1.08l | Interpret a solution in the context of a problem, including exponential growth and decay and modelling | A Level only |
| 1.08l | Identify limitations of a solution, including links to kinematics | A Level only |

## What a differential equation is

A **differential equation** links a function to its derivatives. A **first order** equation contains only the first derivative, such as dy/dx or dN/dt.

Solving one means finding the function. Integrating produces an arbitrary constant, so you first get a **general solution**, which describes a whole family of curves. An **initial condition** (or boundary condition), such as "y = 3 when x = 1", picks out one curve. That curve is the **particular solution**.

## Direct integration

If the right-hand side contains only x, integrate straight away:

dy/dx = f(x) gives y = ∫ f(x) dx

**Worked example 1.** Find the general solution of dy/dx = 4x + 9/x³, then the particular solution through (1, 3).

```
dy/dx = 4x + 9x⁻³
y = 2x² + 9x⁻²/(−2) + c = 2x² − 9/(2x²) + c
```

Substitute x = 1, y = 3: 3 = 2 − 9/2 + c, so c = 11/2.

Particular solution: **y = 2x² − 9/(2x²) + 11/2**.

## Separating variables

An equation is **separable** when it can be written dy/dx = f(x)g(y): a function of x multiplied by a function of y. Then move every y to one side and every x to the other:

```
(1/g(y)) dy = f(x) dx
∫ 1/g(y) dy = ∫ f(x) dx
```

Treat dy/dx as a ratio only as a shorthand. What you are really doing is integrating both sides with respect to x. Put **one** constant of integration on one side.

Method in steps:

1. Write the equation as dy/dx = f(x)g(y). Take out any common factor first.
2. Rearrange so all the y terms and dy are on the left and all the x terms and dx are on the right.
3. Integrate both sides and add + c on one side.
4. Use the given values of x and y to find c.
5. Rearrange to make y the subject if the question asks for it, or if it is simple to do.

**Worked example 2.** Solve dy/dx = x/(3y²), given y = 2 when x = 0.

```
3y² dy = x dx
∫ 3y² dy = ∫ x dx
y³ = x²/2 + c
```

When x = 0, y = 2: 8 = c.

y³ = 8 + x²/2, so **y = ∛(8 + x²/2)**.

**Worked example 3 (common factor).** Solve dy/dx = 3xy − 12x, given y = 7 when x = 0.

The two terms share a factor 3x, so factorise first: dy/dx = 3x(y − 4).

```
∫ 1/(y − 4) dy = ∫ 3x dx
ln|y − 4| = 3x²/2 + c
y − 4 = Ae^(3x²/2)          (A = ±eᶜ)
```

When x = 0, y = 7: 3 = A. So **y = 4 + 3e^(3x²/2)**.

**Why the modulus and the constant A?** Integrating 1/(y − 4) gives ln|y − 4|. Removing the logarithm gives |y − 4| = eᶜ × e^(3x²/2). Writing A = ±eᶜ absorbs the sign and the constant together. If the question tells you y > 4, you may write ln(y − 4) directly.

**Worked example 4 (trigonometric).** Solve dy/dx = y² sin x, given y = 1 when x = π/2.

```
∫ y⁻² dy = ∫ sin x dx
−1/y = −cos x + c
```

When x = π/2, y = 1: −1 = 0 + c, so c = −1. Then 1/y = cos x + 1, and **y = 1/(1 + cos x)**.

Notice that this solution is undefined when cos x = −1, that is at x = π and every odd multiple of π. The solution is only meaningful on the interval −π < x < π that contains the starting point.

## Exponential growth and decay (1.08l)

If a quantity changes at a rate **proportional to its size**, then dy/dt = ky for a constant k.

```
∫ 1/y dy = ∫ k dt
ln y = kt + c        (y > 0)
y = Ae^(kt)
```

When t = 0, y = A, so A is the initial value. If k > 0 you have **exponential growth**. If k < 0 you have **exponential decay**; it is usual to write dy/dt = −ky with k > 0 and read the sign from the equation.

Meaning of the words matters. "The rate of decrease is proportional to the mass" gives dm/dt = −km with k > 0. The minus sign records that m is falling.

**Worked example 5 (decay).** The mass m grams of a radioactive sample satisfies dm/dt = −0.02m, where t is in years, and m = 50 when t = 0. Find the half-life.

```
ln m = −0.02t + c,  so  m = 50e^(−0.02t)
```

Half-life: 25 = 50e^(−0.02t), so e^(−0.02t) = 1/2, giving t = ln 2/0.02 = **34.7 years** (3 s.f.).

Interpretation: after 100 years m = 50e⁻² = 6.77 g. The model says m gets closer and closer to 0 but never reaches it.

**Worked example 6 (growth and its limit).** A bacterial colony has P cells at time t hours with dP/dt = kP. At t = 0, P = 500, and at t = 3, P = 1300.

```
P = 500e^(kt)
1300 = 500e^(3k)  →  e^(3k) = 2.6  →  k = ln 2.6/3 = 0.3185
```

Time to reach 5000: 5000 = 500e^(kt), so t = ln 10/k = **7.23 hours**.

Limitation: at t = 8 the model gives P ≈ 6391, and the numbers keep growing without limit. A real colony runs out of food or space, so the model is only reasonable while the colony is small. Also P should be a whole number, so a decimal answer is only an approximation.

## Modelling with a constant on the right

Many rates depend on a difference, so the right-hand side has the form k(y − a). The method is the same. Newton's law of cooling says the rate of change of an object's temperature T is proportional to the difference between T and the surroundings.

**Worked example 7.** A pie at 180 °C is put in a room at a steady 22 °C. Its temperature satisfies dT/dt = −k(T − 22), where t is in minutes and k > 0. After 10 minutes the temperature is 130 °C. Find T in terms of t, and the time to reach 60 °C.

```
∫ 1/(T − 22) dT = ∫ −k dt
ln(T − 22) = −kt + c        (T > 22)
T − 22 = Ae^(−kt)
```

At t = 0, T = 180: A = 158. At t = 10, T = 130: 108 = 158e^(−10k), so k = ln(158/108)/10 = 0.0380.

**T = 22 + 158e^(−0.0380t)**.

For T = 60: 38 = 158e^(−kt), so t = ln(158/38)/k = **37.5 minutes**.

Interpretation: as t → ∞, T → 22, so the pie approaches room temperature and never falls below it. Limitations: the model assumes the room stays at 22 °C and that the pie has one uniform temperature.

## Kinematics

Velocity and acceleration are related by a = dv/dt, and v = ds/dt. If the acceleration depends on v, you get a separable equation. For example, resistance can make the acceleration depend on the speed.

**Worked example 8.** A boat's speed v m s⁻¹ satisfies dv/dt = 6 − 2v, and v = 0 when t = 0. Find v in terms of t, describe the motion, and find the distance travelled in the first 2 seconds.

```
∫ 1/(6 − 2v) dv = ∫ 1 dt
−½ ln|6 − 2v| = t + c
ln|6 − 2v| = −2t + c′
6 − 2v = Ae^(−2t)
```

At t = 0, v = 0: A = 6, so 2v = 6 − 6e^(−2t) and **v = 3 − 3e^(−2t)**.

Description: the boat starts from rest and speeds up, but more and more slowly. As t → ∞, e^(−2t) → 0 and v → 3, so the speed approaches 3 m s⁻¹ and never reaches it. The acceleration 6 − 2v is zero at v = 3, which is why the speed levels off.

Distance: s = ∫₀² (3 − 3e^(−2t)) dt = [3t + 1.5e^(−2t)] from 0 to 2 = 6 + 1.5e⁻⁴ − 1.5 = **4.53 m** (3 s.f.).

## Interpreting the solution and its limitations

Whenever a question says "describe", "comment" or "interpret", turn the formula into a sentence about the situation. Check these in turn:

- **Initial value.** Put t = 0 and say what it means.
- **Long-term behaviour.** What happens as t → ∞? Is there a limiting value (an asymptote), unlimited growth, or decay towards zero?
- **Sign and size of the rate.** Is the quantity increasing or decreasing, and is that sensible?
- **Domain.** Is the solution defined for all the values the context allows? Negative lengths, masses or populations signal that the model has failed.
- **Assumptions.** Say what the model ignores, such as a limit on resources, a changing room temperature or air resistance.

Be specific. "The model is not realistic" earns nothing; "the model gives the population growing without limit, but food supply would restrict it" is a point.

## Common errors

- **Two constants.** Writing + c on both sides. One is enough.
- **Splitting the integral wrongly.** Integrating a term in y with respect to x, or leaving a y on the right-hand side.
- **Forgetting the common factor.** In dy/dx = 3xy − 12x you cannot separate until you factorise.
- **Losing the constant when taking exponentials.** ln|y − 4| = 3x²/2 + c becomes y − 4 = Ae^(3x²/2). Writing y − 4 = e^(3x²/2) + c is wrong.
- **Applying the initial condition too early.** Substitute it after integrating, not into the differential equation.
- **Sign of k.** Read the words. "Decreases at a rate proportional to" needs a minus sign.
- **Dividing by zero.** Dividing by g(y) assumes g(y) is not zero. A constant solution, such as y = 4 in example 3, can be lost this way. It is usually covered by allowing A = 0.
- **Not answering the question asked.** If it asks for the half-life or the distance, finish the job after finding the solution.

Practise on the [practice questions](/resources/ocr-a-level-mathematics-differential-equations-separable-equations-and-their-practice/) once you can reproduce examples 2, 3, 7 and 8 without looking.

## Official syllabus

OCR, *A Level Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018. Sections 1.08k and 1.08l.
