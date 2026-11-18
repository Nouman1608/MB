---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.8 Solving trigonometric equations -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.08
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-8"
description: "IB Maths AA 3.8 revision notes: partner solutions, changing the interval, quadratics in sin, cos or tan, GDC solving and exam traps, with a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section 3.8 of IB DP Mathematics: Analysis and Approaches (first assessment 2021): solving trigonometric equations in a finite interval, graphically and analytically, including equations leading to quadratics in sin x, cos x or tan x. The section is SL and HL, and the general solution is not required. The worked examples are in the [3.8 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-8/); afterwards, try the [3.8 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-8-practice/).

## Partner solutions and periods

| Equation | First solution α | Partner in the same cycle | Repeat every |
|---|---|---|---|
| sin x = k | arcsin k, in [−π/2, π/2] | π − α | 2π |
| cos x = k | arccos k, in [0, π] | 2π − α (or −α) | 2π |
| tan x = k | arctan k, in ]−π/2, π/2[ | π + α | π |

Special values: sin x = ±1 and cos x = ±1 have only one solution per cycle; sin x = k and cos x = k have none if |k| > 1.

## Key terms

| Term | Meaning |
|---|---|
| Finite interval | The stated range of x, such as 0 ≤ x ≤ 2π; only solutions inside it are given |
| Argument | The expression inside the function, such as 2x + π/3 in sin(2x + π/3) |
| Reference angle | The acute angle α with the same size of ratio as the target angle |
| Partner solution | The second solution in one cycle, from the symmetry of the graph |
| Quadratic in sin x | An equation of the form a sin²x + b sin x + c = 0 |
| Graphical solution | Intersections of the graphs of both sides, found on a GDC |

## Method summary

**Basic or transformed argument**

1. Isolate: sin(u) = k.
2. Convert the interval for x into the interval for u.
3. List all u in that interval (α, partner, then ± periods).
4. Convert back to x; check every value is in the original interval.

**Quadratic type**

1. Replace so only one ratio remains:
   - cos²x = 1 − sin²x or sin²x = 1 − cos²x;
   - cos 2x = 1 − 2sin²x (equation has sin x) or 2cos²x − 1 (equation has cos x);
   - sin 2x = 2 sin x cos x, then factorise.
2. Rearrange to = 0 and factorise (or use the quadratic formula).
3. Reject roots outside [−1, 1] for sin and cos.
4. Solve each remaining basic equation.

**Product type:** if the equation can be written as A × B = 0, solve A = 0 and B = 0 separately. Never divide by a factor that can be zero.

**Graphical type (Paper 2):** graph y = left side and y = right side in the correct angle mode, zoom to the interval, and read every intersection to 3 s.f. Write down the equation you graphed.

## Counting solutions

Number of solutions of sin(bx) = k, with 0 < |k| < 1, over an interval that covers n complete cycles: 2n. Example: cos 4x = 0.2 on 0 ≤ x ≤ π covers 4x from 0 to 4π, two cycles, so 4 solutions.

## Exam traps

- **Interval not transformed.** sin 3x = k on 0 ≤ x ≤ 2π needs 0 ≤ 3x ≤ 6π.
- **Dividing by zero.** From sin 2x = sin x, dividing by sin x loses x = 0, π, 2π.
- **Impossible roots kept.** cos x = 3 has no solution; write "no solution" and move on.
- **Endpoints.** With 0 ≤ x ≤ 2π, sin x = 0 gives 0, π and 2π: three solutions, not two.
- **Units.** An interval written in degrees needs answers in degrees.
- **Calculator mode.** A radian equation solved in degree mode gives nonsense.
- **Only the calculator value.** arcsin and arccos give one value; the partner must be found by you.
- **Premature rounding.** Divide the exact or unrounded inner angle by b, then round.
- **Safe division needs a reason.** sin x = k cos x → tan x = k is fine only after explaining that cos x = 0 is not a solution.

## Self-test

1. Solve 2 sin x = −√3 for 0 ≤ x ≤ 2π.
2. Solve cos 2x = 0 for 0 ≤ x ≤ π.
3. Solve tan(x/2) = 1 for 0 ≤ x ≤ 2π.
4. Solve sin(x − π/6) = 1 for 0 ≤ x ≤ 2π.
5. Solve 2cos²x = 1 for 0 ≤ x ≤ 2π.
6. Solve 2sin²x + sin x − 1 = 0 for 0 ≤ x ≤ 2π.
7. Solve sin 2x = sin x for 0 ≤ x ≤ π.
8. Solve cos x = 0.3 for 0 ≤ x ≤ 2π, to 3 s.f.
9. How many solutions does cos 4x = 0.2 have for 0 ≤ x ≤ π?
10. Solve tan x = −1 for −π ≤ x ≤ π.
11. Solve 2cos²x = 3 sin x for 0 ≤ x ≤ 2π.
12. Solve sin x = 0.4x for x > 0, using a GDC.

### Answers

1. sin x = −√3/2: x = 4π/3, 5π/3.
2. 2x = π/2 or 3π/2, so x = π/4, 3π/4.
3. 0 ≤ x/2 ≤ π and x/2 = π/4, so x = π/2.
4. x − π/6 = π/2, so x = 2π/3.
5. cos x = ±√2/2: x = π/4, 3π/4, 5π/4, 7π/4.
6. (2 sin x − 1)(sin x + 1) = 0: x = π/6, 5π/6, 3π/2.
7. sin x(2 cos x − 1) = 0: x = 0, π/3, π.
8. x = 1.27 or 2π − 1.266 = 5.02.
9. Four.
10. x = −π/4, 3π/4.
11. 2 − 2sin²x = 3 sin x, so (2 sin x − 1)(sin x + 2) = 0; sin x = 1/2: x = π/6, 5π/6.
12. x = 2.13 (3 s.f.).

## Links

For the full worked examples, see the [3.8 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-8/). Equations using sin 2x and cos 2x rely on the [3.6 identities revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-6-revision-notes/), and mixed practice across the unit is in the [circular functions practice questions](/resources/ib-dp-mathematics-aa-circular-functions-trig-identities-practice/).
