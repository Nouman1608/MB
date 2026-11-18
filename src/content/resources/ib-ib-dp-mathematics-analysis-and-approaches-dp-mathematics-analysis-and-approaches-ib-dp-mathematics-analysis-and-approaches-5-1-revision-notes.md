---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.1 Limits and the derivative as a gradient function -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 5 – Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.01
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-1"
description: "Revision notes on IB DP Maths AA section 5.1: limits from tables and graphs, chords and tangents, derivative notation, rates of change and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **section 5.1, the concept of a limit and the derivative as gradient function
and rate of change**, in IB DP Mathematics: Analysis and Approaches (first assessment 2021),
examined at SL and HL. The
[5.1 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-1/)
explains each idea with worked tables; the
[5.1 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-1-practice/)
test it. The rules of differentiation that follow are summarised in the
[differentiation revision notes](/resources/ib-dp-mathematics-aa-sl-differentiation-revision-notes/).

## What the guide expects at SL

- An informal understanding of a limit, estimated from a **table** or a **graph**.
- The gradient of a curve at a point as the **limit of chord gradients**.
- The derivative as a **gradient function** and as a **rate of change**.
- The notations dy/dx, f′(x), dV/dr and ds/dt.
- Not required at SL: formal analytic methods of calculating limits. Differentiation from first
  principles is HL content (section 5.12).

## Condensed recall

- **Limit.** lim (x → a) f(x) = L means f(x) gets arbitrarily close to L as x gets close to a, from
  both sides. What happens exactly at x = a does not matter.
- **Undefined point, finite limit.** Expressions such as (x² − 4)/(x − 2) give 0/0 at x = 2 but still
  have a limit (here 4). On the graph there is a hole.
- **One-sided disagreement.** If the left and right approaches give different values, the limit does
  not exist.
- **Chord to tangent.** The gradient of the chord PQ approaches the gradient of the tangent at P as Q
  moves towards P. That limit is the gradient of the curve at P.
- **Gradient function.** Doing this at every x gives f′(x), a function. f′(a) is one number: the
  gradient at x = a.
- **Rate of change.** dy/dx tells you how fast y changes per unit change in x. Units: units of y per
  unit of x.
- **Sign.** A positive derivative means the quantity is increasing at that instant; negative means
  decreasing; zero means momentarily not changing.
- **Average versus instantaneous.** Average rate over [a, b] = (f(b) − f(a))/(b − a), a chord.
  Instantaneous rate at a = f′(a), a tangent.

## Key terms

| Term | Meaning |
|---|---|
| Limit | The value a function approaches as the input approaches a given value |
| Chord | A straight line joining two points on a curve |
| Tangent | The straight line that touches a curve at a point and has the curve's gradient there |
| Gradient function | The derivative f′(x), giving the gradient of the curve at each x |
| Derivative | The limit of chord gradients; the instantaneous rate of change |
| Average rate of change | Change in output divided by change in input over an interval |
| Instantaneous rate of change | The rate of change at a single instant, given by the derivative |

## Notation reminders

| Symbol | Example in context |
|---|---|
| dy/dx | gradient of y = f(x) |
| f′(x) | gradient function of f; f′(2) is the gradient at x = 2 |
| dV/dr | cm³ per cm when V is a volume in cm³ and r is a radius in cm |
| ds/dt | metres per second when s is in metres and t in seconds (velocity) |

## Mini-example: a chord table

Estimate the gradient of y = √x at (4, 2). The chord to (4 + h, √(4 + h)) has gradient
(√(4 + h) − 2)/h.

| h | 0.5 | 0.1 | 0.01 |
|---|---|---|---|
| chord gradient | 0.2426 | 0.2485 | 0.2498 |

The gradients approach 0.25, so the gradient at (4, 2) is about 0.25. Repeat with negative h to
confirm the same value from the left.

## Exam traps

- **Trap: substituting into 0/0.** It is not the limit and not "undefined so no limit". Use a table.
- **Trap: a table from one side only.** Include values below and above a.
- **Trap: rounding the table too far.** Two decimal places can hide the trend; keep four significant
  figures or more.
- **Trap: f′(a) read as a height.** f′(a) is a gradient; f(a) is the y-coordinate.
- **Trap: "rate" without units.** "−12" alone is incomplete; "decreasing at 12 litres per minute" is
  complete.
- **Trap: average when instantaneous is asked.** "At t = 3" means the derivative, not a chord over an
  interval.

## Self-test

1. What does lim (x → a) f(x) = L mean?
2. Estimate lim (x → 0) (eˣ − 1)/x given the values 1.0517 (x = 0.1), 1.0050 (x = 0.01) and 1.0005
   (x = 0.001).
3. Why should the table in question 2 also include negative values of x?
4. f(x) = (x² − 4)/(x − 2). Is f(2) defined? What is the limit as x → 2?
5. What is the geometric meaning of f′(3)?
6. Explain the difference between f(3) and f′(3).
7. A chord joins (1, 1) and (1.01, 1.0201) on y = x². Find its gradient. What does it estimate?
8. Write down the units of dV/dr if V is in cm³ and r in cm.
9. P is the population of a town and t the time in years. Interpret dP/dt = 350 at t = 4.
10. A temperature T °C satisfies dT/dt = −1.5 at t = 10 minutes. Interpret this.
11. s = t³ metres. Find the average velocity between t = 1 and t = 3.
12. The left-hand values of a function approach 2 and the right-hand values approach 5 as x → 1.
    What can you say about the limit?

**Answers**

1. f(x) gets as close as we like to L when x is close enough to a (on either side).
2. The values approach 1, so the limit is 1.
3. The limit must have the same value from both sides; checking only x > 0 does not show this.
4. f(2) is undefined (0/0), but the limit is 4, since f(x) = x + 2 for x ≠ 2.
5. The gradient of the tangent to y = f(x) at the point where x = 3.
6. f(3) is the y-coordinate at x = 3; f′(3) is the gradient of the curve there.
7. 0.0201/0.01 = 2.01. It estimates the gradient of y = x² at x = 1 (which is 2).
8. cm³ per cm (cm² in simplified units).
9. At t = 4 years, the population is increasing at 350 people per year.
10. At 10 minutes, the temperature is falling at 1.5 °C per minute.
11. (27 − 1)/(3 − 1) = 13 m s⁻¹.
12. The limit does not exist, because the two sides approach different values.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 5.1: introduction to the concept of a limit; derivative
interpreted as gradient function and as rate of change.
