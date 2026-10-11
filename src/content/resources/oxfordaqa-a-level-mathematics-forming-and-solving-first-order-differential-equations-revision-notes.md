---
title: "OxfordAQA International AS and A-level Mathematics: Forming and solving first-order differential equations (9660) -- Revision Notes"
seoTitle: "OxfordAQA 9660 First-Order Differential Equations Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Forming and solving first-order differential equations"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 197
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-differential-equations-oxfordaqa-alevel-maths"
description: "Condensed revision notes on forming differential equations, growth and decay, and separable equations for OxfordAQA 9660 Unit P2 (P2.8), with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Quick recall for section P2.8 of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. It belongs to International A-level (A2) Unit P2 and is not examined at International AS. For full explanations use the [study guide](/resources/oxfordaqa-a-level-mathematics-forming-and-solving-first-order-differential-equations/). Then try the [practice questions](/resources/oxfordaqa-a-level-mathematics-forming-and-solving-first-order-differential-equations-practice/). Also see the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/).

## Words to equations

| Wording | Equation |
|---|---|
| Rate of change of y with respect to x | dy/dx |
| Proportional to y | dy/dx = ky |
| Inversely proportional to y | dy/dx = k/y |
| Decreasing, proportional to the amount | dm/dt = −km, k > 0 |
| Temperature T above surroundings S, cooling | dT/dt = −k(T − S), k > 0 |
| Rate in minus rate out | dx/dt = (in) − (out) |

Rules:

- Introduce k and say what it is (k > 0 or k < 0).
- Match the sign to the words: "increases" gives positive, "decreases" gives negative.
- "Rate of change of volume" is dV/dt. If the question gives r, use dV/dt = (dV/dr)(dr/dt).

## Method for separable equations

```
1. dy/dx = f(x) g(y)
2. (1/g(y)) dy = f(x) dx
3. integrate each side, adding a single +c
4. use the initial condition for c
5. rearrange for y if asked
```

Check that variables really separate. dy/dx = x + y does not, because the right side cannot be written as a product of a function of x and a function of y. dy/dx = x e^y does, and so does dy/dx = (x + 1)/y.

## Key results

| Equation | Solution | Notes |
|---|---|---|
| dy/dt = ky | y = Ae^(kt) | A = y at t = 0 |
| dy/dt = −ky | y = Ae^(−kt) | Never reaches 0 |
| dT/dt = −k(T − S) | T − S = Be^(−kt) | T tends to S |
| dy/dx = k/y | y² = 2kx + c | Reciprocal on the y side |
| dh/dt = −k√h | √h = √h₀ − kt/2 | Reaches 0 in finite time |
| dx/dt = a − bx | x = a/b + Be^(−bt) | Limit a/b |

Doubling time and half-life are both (ln 2)/k. They do not depend on the starting amount.

## Useful integrals for this topic

```
∫ 1/y dy = ln y + c                    (y > 0)
∫ y^n dy = y^(n+1)/(n+1) + c           (n ≠ −1)
∫ e^(ay) dy = e^(ay)/a + c
∫ 1/(ax + b) dx = (1/a) ln(ax + b) + c
∫ 1/(py + q) dy = (1/p) ln(py + q) + c
```

For logistic-type equations (a product of two linear factors in y), split with partial fractions first.

## Combining logarithms to tidy the answer

```
ln y = 3 ln x + c
write c = ln A
ln y = ln(Ax³)
y = Ax³
```

Take care with signs: the constant A can only be positive if you started with ln y and y > 0.

## Worked reminders

**Growth.** A fish stock has dS/dt = 0.06S and S = 500 at t = 0. Then S = 500e^(0.06t). It doubles when e^(0.06t) = 2, so t = (ln 2)/0.06 = 11.6 (3 s.f.).

**Separable.** Solve dy/dx = 2x/(y + 1) with y = 1 when x = 0, for y > −1.

```
(y + 1) dy = 2x dx
(y + 1)²/2 = x² + c
x = 0, y = 1:  2 = c
(y + 1)² = 2x² + 4
y = −1 + √(2x² + 4)
```

**Cooling.** A body at 70 °C in surroundings at 18 °C reaches 46 °C after 10 minutes. Then T − 18 = 52e^(−kt), so 28 = 52e^(−10k), k = (1/10) ln(52/28) = 0.0619. At t = 20, T = 18 + 52e^(−20k) = 33.1 °C (3 s.f.).

## Method in steps for a context problem

```
1. Name the quantity and the variable (for example N after t days).
2. Write the rate sentence as dN/dt = ... with a constant k.
3. Separate and integrate. One constant.
4. Use the starting condition (usually t = 0) to find the constant.
5. Use the second piece of data to find k. Keep it exact.
6. Answer the question in words, with units.
```

Always check the answer against the story. A decaying amount must fall. A cooling body must stay above the room temperature.

## Forming from geometry: a reminder

An oil slick spreads as a circle so that its area A increases at a rate proportional to its circumference. With radius r, A = πr² and circumference = 2πr.

```
dA/dt = k × 2πr            (k > 0)
dA/dr = 2πr
dr/dt = 2πkr ÷ 2πr = k
```

The radius grows at a constant rate. The same method gives dr/dt for spheres, circles and cylinders: write the quantity formula, differentiate it with respect to the size variable, then divide.

## Checking a solution by substitution

To show that y = 5 − 2e^(−4x) satisfies dy/dx = 4(5 − y):

```
dy/dx = 8e^(−4x)
5 − y = 2e^(−4x), so 4(5 − y) = 8e^(−4x)
```

Both sides match, so the equation is satisfied. A "show that" question needs this line-by-line comparison, not just a statement.

## Reading the shape of a solution

- Exponential growth y = Ae^(kt): the curve rises faster as y grows. The gradient is proportional to the height.
- Exponential decay: the curve falls towards the t-axis and flattens.
- Cooling: the curve falls towards the line T = S, which is a horizontal asymptote.
- Infusion with removal: the curve rises towards the limit a/b, which is the value of x where rate in equals rate out (dx/dt = 0).

Setting the rate equal to zero finds the limiting value without solving the equation.

## Must-know distinctions

- General solution has +c. Particular solution has c found.
- Growth model (exponential) has no upper limit. Cooling and infusion models have a limiting value.
- Exponential decay never reaches zero. Square-root draining does, at a finite time.
- dm/dt = −km with k > 0 and dm/dt = km with k < 0 describe the same decay. Do not mix them.
- Rate of change of V and rate of change of r are different quantities. Link them with the chain rule.

## Quick self-test

1. Write an equation for "the rate of increase of N is proportional to the square of N".
2. Solve dy/dx = 2y given y = 3 when x = 0. Find y when x = (ln 2)/2.
3. A radioactive mass decays at a rate proportional to the mass, with dm/dt = −0.05m. Find the time for the mass to fall to 40% of its starting value.
4. Solve dy/dx = 2x/(y + 1), given y = 1 when x = 0 and y > −1. Find y when x = 2.
5. Solve dy/dx = 3e^y with y = 0 when x = 0, and find y when x = 0.2.
6. Bacteria grow at a rate proportional to their number, dN/dt = 0.03N. How long for the number to become five times its starting value?
7. State the limit of x as t → ∞ for dx/dt = 6 − 0.3x with x = 0 at t = 0.
8. A drink at 70 °C is in a room at 18 °C. After 10 minutes it is 46 °C. Find its temperature after 20 minutes in total.
9. Water drains with dh/dt = −0.2√h. If h = 9 initially, find the time to empty.
10. Find the general solution of x dy/dx = 3(y + 2) for x > 0, y > −2.

### Answers

1. dN/dt = kN², with k > 0.
2. y = 3e^(2x). At x = (ln 2)/2, y = 3 × 2 = 6.
3. m = m₀e^(−0.05t). 0.4 = e^(−0.05t), t = (ln 2.5)/0.05 = 18.3 (3 s.f.).
4. y = −1 + √(2x² + 4). At x = 2, y = −1 + √12 = 2.46 (3 s.f.).
5. e^(−y) dy = 3 dx, so −e^(−y) = 3x + c. At (0, 0): c = −1, so e^(−y) = 1 − 3x and y = −ln(1 − 3x). At x = 0.2, y = −ln 0.4 = 0.916 (3 s.f.).
6. e^(0.03t) = 5, t = (ln 5)/0.03 = 53.6 (3 s.f.).
7. The limit is 20.
8. T = 33.1 °C (3 s.f.), from the worked reminder.
9. 2√h = −0.2t + 6, so √h = 3 − 0.1t. Empty at t = 30.
10. ln(y + 2) = 3 ln x + c, so y = Ax³ − 2.

## Where marks are usually lost

- Not separating the variables first, so y and x are integrated together.
- Missing the constant of integration or adding it after the initial condition has been applied.
- Rewriting ln y = kt + c as y = kt + c.
- Leaving k unknown when the question gives enough data to find it.
- Rounding k early, then quoting answers that do not match to 3 significant figures.
- Wrong sign of k in a decay or cooling model, giving growth instead of decay.
- Applying the initial condition to the wrong quantity (for example using T = 85 in place of T − 20 = 65).
- Not answering the question asked: the time, the amount, or the limiting value, with units.
- Treating dV/dt and dr/dt as the same thing.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019), published by OxfordAQA. These notes cover section P2.8 of Unit P2.
