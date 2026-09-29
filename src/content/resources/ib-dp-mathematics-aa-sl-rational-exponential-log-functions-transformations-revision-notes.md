---
title: "IB DP Mathematics: Analysis and Approaches -- Rational, exponential and logarithmic functions, solving equations and transformations Revision Notes"
seoTitle: "IB Maths AA Rational, Exp and Log Functions Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Rational, exponential and logarithmic functions, solving equations and transformations"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.8
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-8"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-9"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-10"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-11"
description: "Condensed IB DP Maths AA revision notes on asymptotes, exp and log graphs, solving equations and transformations, with a quick self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

For full explanations and worked examples, start with the [study guide](/resources/ib-dp-mathematics-aa-sl-rational-exponential-log-functions-transformations/). These notes condense the rational, exponential and logarithmic functions, solving equations and transformations unit of IB Diploma Programme Mathematics: Analysis and Approaches. They are aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 2.8, 2.9, 2.10 and 2.11, which are common to SL and HL. They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 sessions.

Test yourself afterwards with the [practice questions](/resources/ib-dp-mathematics-aa-sl-rational-exponential-log-functions-transformations-practice/). The [Functions strand overview](/resources/ib-dp-mathematics-aa-functions/) gives the wider context, and the [course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and [printable checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/) show every section of the course.

## Definitions

- **Reciprocal function:** f(x) = 1/x, x ≠ 0. Branches in quadrants 1 and 3.
- **Self-inverse:** f⁻¹(x) = f(x), so f(f(x)) = x. The reciprocal function is self-inverse, and its graph is symmetric about y = x.
- **Rational function (this unit):** f(x) = (ax + b)/(cx + d), with c ≠ 0.
- **Vertical asymptote:** a line x = k that the graph approaches as y → ±∞.
- **Horizontal asymptote:** a line y = k that the graph approaches as x → ±∞.
- **Exponential function:** f(x) = aˣ, a > 0, or f(x) = eˣ.
- **Logarithmic function:** f(x) = logₐ x or ln x, defined for x > 0.
- **Composite transformation:** two or more transformations applied in sequence.

## Key results

| Function | Domain | Range | Asymptote(s) | Intercepts |
|---|---|---|---|---|
| y = 1/x | x ≠ 0 | y ≠ 0 | x = 0, y = 0 | none |
| y = (ax + b)/(cx + d) | x ≠ −d/c | y ≠ a/c | x = −d/c, y = a/c | (0, b/d), (−b/a, 0) |
| y = aˣ (a > 0, a ≠ 1) | all real x | y > 0 | y = 0 | (0, 1) |
| y = eˣ | all real x | y > 0 | y = 0 | (0, 1) |
| y = logₐ x | x > 0 | all real y | x = 0 | (1, 0) |
| y = ln x | x > 0 | all real y | x = 0 | (1, 0) |

Relationships from section 2.9:

```
aˣ = e^(x ln a)
logₐ aˣ = x        a^(logₐ x) = x        (a, x > 0, a ≠ 1)
```

Exponential and logarithmic functions with the same base are inverses. Their graphs are reflections of each other in y = x.

## Transformations table

| Equation | Effect | (x, y) → |
|---|---|---|
| y = f(x) + b | vertical translation by b | (x, y + b) |
| y = f(x − a) | horizontal translation by a | (x + a, y) |
| y = −f(x) | reflection in x-axis | (x, −y) |
| y = f(−x) | reflection in y-axis | (−x, y) |
| y = p f(x) | vertical stretch, factor p | (x, py) |
| y = f(qx) | horizontal stretch, factor 1/q | (x/q, y) |

Not required at SL: transformations of the form f(ax + b).

## Method in steps

**Sketching (ax + b)/(cx + d)**

1. Vertical asymptote: set cx + d = 0.
2. Horizontal asymptote: y = a/c.
3. Intercepts: y = b/d at x = 0; x = −b/a from the numerator.
4. Draw dashed asymptotes, plot intercepts, then draw each branch in the correct region.

*Reminder:* (3x + 2)/(x − 4) has asymptotes x = 4 and y = 3, and intercepts (0, −1/2) and (−2/3, 0).

**Solving a disguised quadratic in eˣ or aˣ**

1. Spot a^(2x) = (aˣ)² and substitute u = aˣ.
2. Solve the quadratic in u.
3. Reject any u ≤ 0, and say why (aˣ > 0).
4. Take logs of the positive root(s). Leave answers exact unless told otherwise.

**Solving with technology (Paper 2)**

1. Graph both sides, or graph left side minus right side.
2. Use intersect or zero.
3. Check the whole domain, especially near asymptotes, for extra roots.
4. Write the equation you solved, then the answer to 3 s.f.

**Applying a composite transformation y = p f(x − a) + b**

1. Horizontal translation by a.
2. Vertical stretch by p (reflect too if p < 0).
3. Vertical translation by b.
4. Track key points and every asymptote through each step.

## Small worked reminders

**Inverse pair.** f(x) = 5ˣ has inverse f⁻¹(x) = log₅ x. The domain of f⁻¹ is x > 0, which is the range of f. So f⁻¹(125) = 3, because 5³ = 125.

**Decay written two ways.** y = 2^(−x) is the same function as y = (1/2)ˣ. It is the reflection of y = 2ˣ in the y-axis, it still passes through (0, 1), and it still has the asymptote y = 0.

**Transforming ln x.** y = 3 − ln x is y = ln x reflected in the x-axis, then translated 3 units up. The asymptote stays at x = 0 because both changes are vertical. The x-intercept solves ln x = 3, so x = e³ ≈ 20.1.

**Rational function from 1/x.** (3x + 2)/(x − 4) = 3 + 14/(x − 4), since 3(x − 4) + 14 = 3x + 2. So the graph is y = 1/x stretched vertically by scale factor 14, then translated 4 units right and 3 units up. The asymptotes x = 4 and y = 3 agree with the formulas in the table above.

**Model to equation.** A population is modelled by P = 500e^(0.03t), t in years. To find when P = 800:

```
e^(0.03t) = 1.6
0.03t = ln 1.6
t = 15.7 years (3 s.f.)
```

**Checking a GDC answer.** Substitute your root back into both sides. If the two sides differ in the third significant figure, you have read the wrong intersection or rounded too early.

## Must-know distinctions

- **f(x) + b vs f(x + b):** outside the bracket moves the graph up or down; inside moves it left or right, the opposite way to the sign.
- **p f(x) vs f(qx):** p multiplies y-coordinates; q *divides* x-coordinates.
- **−f(x) vs f(−x):** reflection in the x-axis vs reflection in the y-axis.
- **Horizontal asymptote of a rational function vs y-intercept:** a/c vs b/d.
- **Growth vs decay:** aˣ increases if a > 1 and decreases if 0 < a < 1. e^(kx) grows if k > 0 and decays if k < 0.
- **Exact vs approximate:** x = ln 5 is exact; 1.61 is its 3 s.f. value. Paper 1 usually wants the first.
- **Analytic vs graphical:** "solve" on Paper 2 allows a GDC; "find the exact value" or "show that" needs algebra.

## Quick self-test

1. State the asymptotes of f(x) = (5x − 1)/(2x + 6).
2. Find the axis intercepts of the same function.
3. f(x) = 1/x. Find f(f(7)).
4. Write 3ˣ in the form e^(kx). Give k exactly and to 3 s.f.
5. Evaluate log₄ 4^2.5 and 10^(log 7).
6. State the domain of y = ln(x − 5) and the equation of its asymptote.
7. Solve e^(2x) − 9eˣ + 20 = 0 exactly.
8. Solve 9ˣ − 2(3ˣ) − 3 = 0.
9. Describe the transformation that maps y = f(x) to y = 3f(x + 4).
10. The point (6, −2) lies on y = f(x). Find its image on y = f(x/2) and on y = 2f(x) − 1.
11. State the horizontal asymptote and y-intercept of y = 5 − 3e^(−x).
12. Use technology to solve x² = 2ˣ.

### Answers

1. Vertical x = −3; horizontal y = 5/2.
2. (0, −1/6) and (1/5, 0).
3. 7, because the function is self-inverse.
4. 3ˣ = e^(x ln 3), so k = ln 3 ≈ 1.10.
5. 2.5 and 7.
6. Domain x > 5; asymptote x = 5.
7. With u = eˣ: (u − 4)(u − 5) = 0, so x = ln 4 or x = ln 5.
8. With u = 3ˣ: (u − 3)(u + 1) = 0. Reject u = −1, since 3ˣ > 0. So 3ˣ = 3 and x = 1.
9. Translation 4 units left, then vertical stretch with scale factor 3 (the two can be done in either order).
10. f(x/2) is a horizontal stretch with factor 2: (12, −2). 2f(x) − 1: (6, −5).
11. Asymptote y = 5; y-intercept (0, 2).
12. x = −0.767, x = 2 or x = 4.

## Where marks are usually lost

- Stating the horizontal asymptote of (ax + b)/(cx + d) as y = b/d, or leaving it out of a sketch.
- Giving an asymptote as a number ("−3") instead of an equation ("x = −3").
- Drawing a rational or log branch that touches or crosses its asymptote.
- Keeping a negative value of u = eˣ, or rejecting it without a reason.
- Moving y = f(x − a) the wrong way, or multiplying x-coordinates by q for f(qx) instead of dividing.
- Doing a vertical translation before a stretch, which changes the final equation.
- Forgetting to move the asymptotes when you transform key points.
- Missing a second intersection on the GDC because the window cut off a region near an asymptote.
- Rounding a model constant (such as ln 1.5) early and then using it, which changes the 3 s.f. answer.
- Giving a decimal where the question asks for an exact answer.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), sections SL 2.8, 2.9, 2.10 and 2.11.
