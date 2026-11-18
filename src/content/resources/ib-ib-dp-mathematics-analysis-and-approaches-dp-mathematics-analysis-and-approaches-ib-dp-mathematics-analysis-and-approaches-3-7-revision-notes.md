---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): The circular functions sin x, cos x and tan x -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 3 -- Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.07
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-7"
description: "IB Maths AA 3.7 revision notes: key features of sin, cos and tan graphs, the a sin(b(x + c)) + d form, building models and exam traps, with a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section 3.7 of IB DP Mathematics: Analysis and Approaches (first assessment 2021): the circular functions sin x, cos x and tan x, their amplitude, periodic nature and graphs, the form f(x) = a sin(b(x + c)) + d, transformations and real-life models. The section is SL and HL. The full explanations are in the [3.7 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-7/); test yourself afterwards with the [3.7 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-7-practice/).

## The three basic graphs

| | sin x | cos x | tan x |
|---|---|---|---|
| Period | 2π | 2π | π |
| Range | [−1, 1] | [−1, 1] | ℝ |
| Zeros | 0, π, 2π, … | π/2, 3π/2, … | 0, π, 2π, … |
| Asymptotes | none | none | x = π/2, 3π/2, … |
| Starts (x = 0) at | 0, rising | 1, its maximum | 0, rising |
| Odd or even | odd | even | odd |

The cosine curve is the sine curve translated π/2 to the left.

## Key terms

| Term | Meaning |
|---|---|
| Periodic function | f(x + p) = f(x) for all x; the smallest positive p is the period |
| Period | Length of one complete cycle: 2π/b for a sin(bx), π/b for tan(bx) |
| Amplitude | Half the distance from minimum to maximum value; \|a\| |
| Principal axis | The horizontal line y = d midway between maximum and minimum |
| Horizontal stretch | Scale factor 1/b, parallel to the x-axis |
| Vertical stretch | Scale factor a, parallel to the y-axis; a < 0 also reflects in the x-axis |
| Phase shift | Informal name for the horizontal translation −c |

## Reading f(x) = a sin(b(x + c)) + d

1. Factorise b out of the bracket first.
2. Amplitude |a|; maximum d + |a|; minimum d − |a|.
3. Period 2π/b (360°/b in degrees).
4. Translation: c to the left if c > 0, to the right if c < 0.
5. Principal axis y = d.

**Example.** g(x) = 4 sin(πx/6 − π/3) + 10 = 4 sin((π/6)(x − 2)) + 10. Amplitude 4, period 12, translation 2 to the right, range 6 ≤ g(x) ≤ 14.

## Building a model from data or a context

1. d = (max + min)/2 and |a| = (max − min)/2.
2. Period: time from one maximum to the next, or twice the time from a maximum to the next minimum. Then b = 2π/period.
3. Choose the function and the sign of a from the starting point:
   - starts at a maximum: + cos;
   - starts at a minimum: − cos;
   - starts on the principal axis, rising: + sin;
   - starts on the principal axis, falling: − sin.
4. If the start is at none of these, use c to move the first maximum (cos) or the first rising crossing of the axis (sin) to the right place.
5. Check one other data point in your model.

**Examples.**

- A wheel of radius 15 m with centre 18 m up, turning once every 8 minutes, starting at the top: h(t) = 15 cos(πt/4) + 18.
- A mass on a spring oscillates between 4 cm and 16 cm from a sensor, period 2 s, starting at 10 cm and moving away: d(t) = 6 sin(πt) + 10.
- *Invented data:* daylight is longest, 16 hours, in month 6 and shortest, 8 hours, in month 12: L(m) = 4 cos((π/6)(m − 6)) + 12.

## Transformations in words

Mapping y = sin x onto y = −3 sin(2x + π/2) − 1:

- factorise: −3 sin(2(x + π/4)) − 1;
- horizontal stretch, scale factor 1/2;
- translation π/4 to the left;
- vertical stretch, scale factor 3, and reflection in the x-axis;
- translation 1 unit down.

Its range is −4 ≤ y ≤ 2 and its period is π.

## Exam traps

- **b is not the period.** y = sin 4x has period π/2, not 4.
- **Unfactorised brackets.** sin(2x − π) is a translation of π/2, not π.
- **Tan has a different period.** tan 3x has period π/3, not 2π/3.
- **Amplitude is never negative.** For y = −5 cos x the amplitude is 5.
- **Tan has no amplitude and no range limits.** "Amplitude 1" for tan x is wrong.
- **Count the cycles.** On 0 ≤ x ≤ 2π, y = cos 3x completes three cycles; sketches with two lose the shape mark.
- **Calculator mode.** A model in radians must be evaluated in radian mode.
- **Use the model you found.** In later parts, substitute into your equation, not the rounded data.

## Self-test

1. State the period of y = 7 sin(x/3).
2. State the amplitude and range of y = 2 − 6 cos x.
3. State the period of y = tan(πx/2).
4. Write down the equations of the asymptotes of y = tan 2x for 0 ≤ x ≤ π.
5. Describe the horizontal translation in y = cos(4x + π).
6. Find the maximum value of y = 5 sin(3x) − 8 and the smallest positive x where it occurs.
7. A sine curve has maximum 11 and minimum −3. Find its amplitude and principal axis.
8. Write down the function obtained by stretching y = cos x vertically by scale factor 3 and then translating it 2 units down.
9. A model has maximum at t = 2 and the next minimum at t = 5. Find the period and b.
10. Write a model for a point on a wheel of radius 4 m, centre 5 m above the ground, turning once every 12 s and starting at the bottom.
11. Is y = sin x + cos x periodic? If so, state its period.
12. How many cycles of y = sin 5x lie in 0 ≤ x ≤ 2π?

### Answers

1. 2π ÷ (1/3) = 6π.
2. Amplitude 6; range −4 ≤ y ≤ 8.
3. π ÷ (π/2) = 2.
4. 2x = π/2 or 3π/2, so x = π/4 and x = 3π/4.
5. cos(4(x + π/4)): π/4 to the left.
6. Maximum −3, where 3x = π/2, so x = π/6.
7. Amplitude 7; principal axis y = 4.
8. y = 3 cos x − 2.
9. Period 6, so b = 2π/6 = π/3.
10. h(t) = 5 − 4 cos(πt/6).
11. Yes; both parts repeat every 2π, so the period is 2π.
12. Five.

## Links

Go back to the [3.7 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-7/) for the worked tide model, and use these graphs to solve equations with the [3.8 solving trigonometric equations revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-8-revision-notes/).
