---
title: "OxfordAQA A-level Mathematics (9660): Motion in a straight line with variable acceleration -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit PSM1 -- M1: Mechanics (International AS)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 4.2
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-m1-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m1-motion-variable-acceleration-oxfordaqa-alevel-maths"
description: "OxfordAQA 9660 M1.2 revision notes: the s, v, a calculus chain, constants, direction changes, speeding up, fractional powers and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **M1.2 Motion in a straight line with variable acceleration** of OxfordAQA International AS and A-level Mathematics (9660), version 5.2, Unit PSM1. The specification restricts problems to the calculus in Unit P1. Worked examples are in the [M1.2 study guide](/resources/oxfordaqa-a-level-mathematics-9660-m1-motion-variable-acceleration-oxfordaqa-alevel-maths/), and the [M1.2 practice questions](/resources/oxfordaqa-a-level-mathematics-9660-m1-motion-variable-acceleration-oxfordaqa-alevel-maths-practice/) test every method below.

## Key terms

| Term | Meaning |
|---|---|
| Variable acceleration | Acceleration that changes with time, so suvat does not apply |
| v = ds/dt | Velocity is the rate of change of displacement |
| a = dv/dt = d²s/dt² | Acceleration is the rate of change of velocity |
| s = ∫v dt, v = ∫a dt | Integrate to move up the chain, adding a constant |
| Instantaneously at rest | v = 0 at that instant |
| Change of direction | v changes sign |
| Speeding up | v and a have the same sign |
| Slowing down | v and a have opposite signs |
| Boundary condition | A known value, such as s = 0 when t = 0, used to find a constant |

## The rules of P1 calculus you need

```
d/dt (tⁿ) = n tⁿ⁻¹                for rational n
∫ tⁿ dt  = tⁿ⁺¹ / (n + 1) + c     for rational n, n ≠ −1
√t = t^(1/2),   1/t² = t^(−2),   t√t = t^(3/2)
```

No exponential, logarithmic or trigonometric functions appear in M1.2 problems.

## Methods

**At rest.** Solve v = 0; keep roots in the domain.

**Direction change.** Test the sign of v either side of each root. A repeated factor such as (t − 3)² gives v = 0 with no change of direction.

**Greatest or least velocity.** Solve a = 0; check with the sign of da/dt (negative gives a maximum) or with values either side; compare with end points of a closed interval.

**Greatest speed in an interval.** Compare the size of v at turning points and end points; a large negative velocity is a large speed.

**Displacement over an interval.** s(q) − s(p), or the definite integral of v from p to q.

**Distance.** Split at every sign change of v; add the absolute values of each piece.

**Return to the start.** Solve s = 0 for t > 0. A quadratic factor with negative discriminant has no real roots.

**From acceleration.** Integrate twice, fixing one constant with a velocity condition and the other with a displacement condition.

## Worked checks

- s = 2t³ − 9t² + 12t: v = 6t² − 18t + 12 = 6(t − 1)(t − 2); at rest at t = 1 and t = 2; a = 12t − 18.
- a = 4 − 2t, v = 3 at t = 0: v = 4t − t² + 3; greatest v when a = 0, t = 2, v = 7.
- v = 6t^(1/2) and s = 0 at t = 0: s = 4t^(3/2); at t = 9, s = 108.
- v = 2 + 18t^(−2) for t ≥ 1, s = 0 at t = 1: s = 2t − 18/t + 16.

## Link with M1.1

Integrating a constant a gives v = u + at and s = ut + ½at². So suvat is the constant-acceleration case of the calculus; it must not be used when a depends on t.

## Exam traps

- Using suvat with a = 6t − 4.
- Missing the constant of integration, or using t = 0 when the condition is given at t = 1.
- Calling v = 0 a change of direction without checking signs.
- Reading a < 0 as slowing down.
- Giving the definite integral as a distance when v changes sign.
- Sign errors when integrating negative powers.
- Giving the greatest velocity at a = 0 when the end point of the interval is higher.

## Self-test

1. s = t³ − 6t² + 9t. Find v and a.
2. For question 1, when is the particle at rest?
3. For question 1, does the particle change direction at each time of rest?
4. v = 5 + 4t − t². Find the greatest velocity.
5. a = 6t, v = 2 at t = 0, s = 0 at t = 0. Find s at t = 2.
6. v = 3√t. Find a at t = 4.
7. v = 3√t and s = 0 at t = 0. Find s at t = 4.
8. v = (t − 5)². Does the particle change direction at t = 5?
9. v = t² − 4 and a = 2t, for t ≥ 0. Is the particle speeding up at t = 1?
10. v = 4 − 4t^(−2), t ≥ 1, s = 0 at t = 1. Find s.
11. v = 3t² − 12t, t ≥ 0. Find the distance travelled in the first 5 s.
12. Why can suvat not be used when v = 3t² − 12t?

### Answers

1. v = 3t² − 12t + 9; a = 6t − 12.
2. 3(t − 1)(t − 3) = 0, so t = 1 and t = 3.
3. Yes: v changes sign at both (single roots).
4. a = 4 − 2t = 0 at t = 2; v = 5 + 8 − 4 = 9 m s⁻¹.
5. v = 3t² + 2, s = t³ + 2t; at t = 2, s = 12 m.
6. a = 1.5t^(−1/2) = 0.75 m s⁻².
7. s = 2t^(3/2); at t = 4, s = 16 m.
8. No: v ≥ 0 on both sides, so it stops instantaneously without turning.
9. No: v = −3 and a = 2 have opposite signs, so it is slowing down.
10. s = 4t + 4/t − 8.
11. s = t³ − 6t²; s(4) = −32, s(5) = −25; distance = 32 + 7 = 39 m.
12. The acceleration 6t − 12 is not constant.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, version 5.2, published by OxfordAQA: Unit PSM1, Mechanics, section M1.2.
