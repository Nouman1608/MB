---
title: "OxfordAQA A-level Mathematics (9660): Motion in a straight line with variable acceleration"
resourceType: "study-guides"
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
description: "OxfordAQA 9660 M1.2 in depth: calculus for motion, rest without reversal, speeding up and slowing down, negative powers of t, and distance from a velocity."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section **M1.2 Motion in a straight line with variable acceleration** of OxfordAQA International AS and A-level Mathematics (9660), specification version 5.2, in the Mechanics strand of International AS Unit PSM1. The specification gives the relationships v = ds/dt, a = dv/dt = d²s/dt², s = ∫v dt and v = ∫a dt, and states that problems are restricted to the calculus in the AS unit P1. That means polynomials and powers tⁿ with n rational (integration with n ≠ −1), with no exponential or trigonometric functions.

The [study guide to kinematics in a straight line](/resources/oxfordaqa-a-level-mathematics-kinematics-in-a-straight-line-constant-and-variable/) introduces the basic method. This page deals with the points that cause most lost marks: deciding whether a particle really changes direction, telling when it is speeding up, handling negative powers of t, and connecting the calculus back to the constant acceleration equations of the [M1.1 study guide](/resources/oxfordaqa-a-level-mathematics-9660-m1-motion-constant-acceleration-oxfordaqa-alevel-maths/). Afterwards, use the [M1.2 revision notes](/resources/oxfordaqa-a-level-mathematics-9660-m1-motion-variable-acceleration-oxfordaqa-alevel-maths-revision-notes/) and the [M1.2 practice questions](/resources/oxfordaqa-a-level-mathematics-9660-m1-motion-variable-acceleration-oxfordaqa-alevel-maths-practice/).

## The calculus chain

```
            differentiate              differentiate
  s(t)  ------------------>  v(t)  ------------------>  a(t)
        <------------------        <------------------
         integrate (+ constant)      integrate (+ constant)
```

Going down the chain loses nothing. Going up needs a constant of integration each time, fixed by a condition such as "at t = 0 the particle is at O" or "when t = 1, v = 5".

## Linking back to M1.1

If a is constant, integrating gives the suvat equations directly, which shows that M1.1 is a special case of M1.2:

```
v = ∫a dt = at + c,         v = u when t = 0, so c = u:  v = u + at
s = ∫(u + at) dt = ut + ½at² + k,   s = 0 when t = 0:     s = ut + ½at²
```

So use suvat only when the acceleration is constant; as soon as a, v or s is given as a non-linear function of t, use calculus.

## At rest does not always mean turning round

A particle is **instantaneously at rest** when v = 0. It **changes direction** only if v changes sign there.

### Worked example 1: a repeated root

A particle moves on a line with displacement s = t⁴ − 8t³ + 18t² metres from O at time t seconds, t ≥ 0.

```
v = ds/dt = 4t³ − 24t² + 36t = 4t(t² − 6t + 9) = 4t(t − 3)²
a = dv/dt = 12t² − 48t + 36 = 12(t − 1)(t − 3)
```

- **At rest:** v = 0 when t = 0 or t = 3.
- **Direction:** for t > 0, 4t > 0 and (t − 3)² ≥ 0, so v ≥ 0 throughout. At t = 3 the particle stops for an instant but **does not turn round**. It always moves in the positive direction.
- **Greatest velocity for 0 < t < 3:** a = 0 when t = 1. Then v = 4 × 1 × 4 = 16 m s⁻¹. Check with the second derivative of v: da/dt = 24t − 48 = −24 < 0 at t = 1, so this is a maximum.
- **Distance in the first 4 s:** because the particle never reverses, distance = s(4) − s(0) = (256 − 512 + 288) − 0 = **32 m**. Splitting at t = 3 is unnecessary, although it gives the same answer: s(3) = 27, then 32 − 27 = 5.

The lesson: a squared factor in v gives a touching zero, not a crossing. Always test the sign of v either side of each root.

## Speeding up and slowing down

The particle is **speeding up** when v and a have the **same sign**, and **slowing down** when they have **opposite signs**. A negative acceleration does not by itself mean slowing down.

### Worked example 2

A particle has velocity v = t² − 6t + 8 = (t − 2)(t − 4) m s⁻¹, so a = 2t − 6.

| Interval | Sign of v | Sign of a | Speed is |
|---|---|---|---|
| 0 < t < 2 | + | − | Decreasing |
| 2 < t < 3 | − | − | Increasing |
| 3 < t < 4 | − | + | Decreasing |
| t > 4 | + | + | Increasing |

Between t = 2 and t = 4 the particle moves in the negative direction; its greatest speed in that interval is at t = 3, where v = 9 − 18 + 8 = −1, a speed of 1 m s⁻¹.

## Fractional and negative powers of t

P1 calculus includes tⁿ for any rational n (for integration, n ≠ −1), so expect t^(1/2), t^(3/2) and t^(−2).

### Worked example 3: starting from acceleration

A particle starts from rest at O and has acceleration a = 6√t m s⁻² for t ≥ 0.

```
v = ∫6t^(1/2) dt = 4t^(3/2) + c;  v = 0 at t = 0, so c = 0:  v = 4t^(3/2)
s = ∫4t^(3/2) dt = (8/5)t^(5/2) + k;  s = 0 at t = 0, so k = 0:  s = 1.6t^(5/2)
At t = 4:  v = 4 × 8 = 32 m s⁻¹,   s = 1.6 × 32 = 51.2 m
Time when v = 108:  t^(3/2) = 27,  so t = 27^(2/3) = 9 s
```

### Worked example 4: a negative power and a non-zero start time

For t ≥ 1 a particle moves with v = 8 − 32t^(−2) m s⁻¹. It is at O when t = 1.

```
a = dv/dt = 64t^(−3), which is positive for all t ≥ 1
At rest: 8 = 32/t²  ->  t² = 4  ->  t = 2   (t = −2 is outside the domain)
s = ∫(8 − 32t^(−2)) dt = 8t + 32t^(−1) + c
s = 0 at t = 1:  8 + 32 + c = 0  ->  c = −40
s = 8t + 32/t − 40;   s(2) = 16 + 16 − 40 = −8
```

At t = 1 the velocity is −24 m s⁻¹, so the particle starts by moving in the negative direction, slows (v negative, a positive), stops 8 m on the negative side of O at t = 2, then moves in the positive direction. The same displacement comes from the definite integral: the integral of v from t = 1 to t = 2 is [8t + 32/t] from 1 to 2 = 32 − 40 = −8.

## Displacement, distance and returning to O

A definite integral of v gives **displacement** over the interval. For **distance**, split the interval at every time where v changes sign and add the sizes of the pieces.

### Worked example 5: does it return?

A particle starts at O with v = 3t² − 18t + 24 = 3(t − 2)(t − 4). Show that it never returns to O for t > 0, and find the distance it travels in the first 5 s.

```
s = t³ − 9t² + 24t   (s = 0 at t = 0, so no constant)
Return to O:  t(t² − 9t + 24) = 0.  The quadratic has discriminant
81 − 96 = −15 < 0, so its only root is t = 0: the particle never returns.
s(2) = 20,  s(4) = 16,  s(5) = 20
0 to 2 s: 20 m forwards; 2 to 4 s: 4 m back; 4 to 5 s: 4 m forwards
Distance = 20 + 4 + 4 = 28 m,  displacement = 20 m
```

The discriminant argument is the kind of reasoning a "show that" question expects.

## Common mistakes

- Saying a particle changes direction whenever v = 0, without checking the sign of v either side.
- Treating negative acceleration as slowing down.
- Forgetting the constant of integration, or fixing it with the wrong time (here t = 1 rather than t = 0).
- Integrating t^(−2) as t^(−1)/(−1) and then dropping the minus sign.
- Using a definite integral of v as the distance when v changes sign inside the interval.
- Using suvat for a variable acceleration.

## Exam technique

- **Find when the particle is at rest**: solve v = 0 and keep only roots in the given domain.
- **Show that it never returns**: set s = 0 and use the discriminant or a factor argument.
- **Greatest velocity**: solve a = 0, then confirm a maximum with da/dt < 0 or a sign table; compare with end values if the interval is closed.
- State units on every final answer and keep exact fractions until the end.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, version 5.2, published by OxfordAQA: Unit PSM1, Mechanics, section M1.2.
