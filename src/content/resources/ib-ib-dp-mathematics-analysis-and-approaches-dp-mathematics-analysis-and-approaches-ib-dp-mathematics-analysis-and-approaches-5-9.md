---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Kinematic problems: displacement, velocity, acceleration and distance"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.09
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-9"
description: "IB DP Maths AA section 5.9 study guide: displacement, velocity, acceleration and total distance travelled, by hand and with a GDC, with worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on one syllabus section of IB Diploma Programme Mathematics: Analysis and Approaches: **section 5.9, kinematic problems involving displacement s, velocity v, acceleration a and total distance travelled**. It is SL content, examined at SL and HL, and it follows the IB *Mathematics: analysis and approaches guide* for first assessment 2021.

Kinematics is where differentiation (sections 5.6 to 5.8) and integration (sections 5.5, 5.10 and 5.11) meet a single context. The [AA integration and kinematics study guide](/resources/ib-dp-mathematics-aa-sl-integration-kinematics/) gives one worked example; this page covers the whole range of question types, including the interpretation questions that are easy to lose marks on.

## What section 5.9 asks of you

For a particle moving in a straight line, with t usually in seconds:

```
v = ds/dt          a = dv/dt = d²s/dt²
displacement from t₁ to t₂ = ∫ v dt        (limits t₁ to t₂)
distance travelled from t₁ to t₂ = ∫ |v| dt (limits t₁ to t₂)
```

You need to move in both directions along the chain s → v → a, interpret signs, and know the difference between displacement and distance.

## The vocabulary, precisely

- **Displacement s**: position relative to a fixed origin O, with a sign. s = −3 means 3 units on the negative side of O.
- **Velocity v**: rate of change of displacement, with a sign giving the direction of motion.
- **Speed**: |v|, never negative.
- **Acceleration a**: rate of change of velocity, with a sign. Negative acceleration is not the same as slowing down.
- **At rest**: v = 0. "Instantaneously at rest" means v = 0 at a single moment, often where the particle changes direction.
- **Changes direction**: v = 0 **and** v changes sign.
- **Returns to its starting point**: displacement from the start is zero.

### Speeding up or slowing down

Compare the signs of v and a.

| v | a | The particle is… |
|---|---|---|
| + | + | speeding up (moving in the positive direction) |
| − | − | speeding up (moving in the negative direction) |
| + | − | slowing down |
| − | + | slowing down |

Same signs: speed increasing. Opposite signs: speed decreasing. A particle with a = −4 and v = −10 is getting faster.

## Worked example 1 (calculator-free): from displacement down the chain

A particle moves so that s(t) = 2t³ − 15t² + 24t + 3 metres, for 0 ≤ t ≤ 5 seconds.

```
v(t) = 6t² − 30t + 24 = 6(t − 1)(t − 4)
a(t) = 12t − 30

At rest: t = 1 s and t = 4 s
Positions: s(0) = 3, s(1) = 14, s(4) = −13, s(5) = −2
```

**Total distance from t = 0 to t = 5.** The particle changes direction at t = 1 and t = 4, so add the lengths of each leg:

```
0 → 1: |14 − 3|    = 11
1 → 4: |−13 − 14|  = 27
4 → 5: |−2 − (−13)| = 11
Total distance = 49 m
Displacement   = s(5) − s(0) = −5 m
```

When s(t) is given, the position-table method is quicker than integrating |v|: list s at the start, at each turning time and at the end, then add the gaps.

**When is the particle speeding up?** a = 0 at t = 2.5, so split the interval at t = 1, 2.5 and 4.

| Interval | sign of v | sign of a | |
|---|---|---|---|
| 0 < t < 1 | + | − | slowing down |
| 1 < t < 2.5 | − | − | speeding up |
| 2.5 < t < 4 | − | + | slowing down |
| 4 < t < 5 | + | + | speeding up |

## Worked example 2 (calculator-free): from acceleration up the chain

A particle has acceleration a(t) = 6 − 2t m s⁻². When t = 0, v = −5 m s⁻¹ and s = 0. Find the total distance travelled in the first 6 seconds.

Going up the chain you integrate, and each integration needs a boundary condition.

```
v(t) = ∫(6 − 2t) dt = 6t − t² + c;   v(0) = −5 → c = −5
v(t) = −t² + 6t − 5 = −(t − 1)(t − 5)

s(t) = ∫ v dt = −t³/3 + 3t² − 5t + k;   s(0) = 0 → k = 0

s(0) = 0,  s(1) = −7/3,  s(5) = 25/3,  s(6) = 6

Distance = 7/3 + (25/3 + 7/3) + |6 − 25/3|
         = 7/3 + 32/3 + 7/3 = 46/3 m
```

The displacement is s(6) − s(0) = 6 m, much smaller than the 46/3 ≈ 15.3 m travelled, because the particle moves backwards, then forwards, then backwards again. Writing the distance as ∫₀⁶ |v(t)| dt before splitting it is a good habit: it shows the examiner the method.

## Worked example 3 (calculator allowed): Paper 2 style

A particle moves with velocity v(t) = 5 sin t − t m s⁻¹, for 0 ≤ t ≤ 6.

```
(a) Changes direction: v = 0 and changes sign → t = 2.60 s (2.5957…)
(b) Displacement = ∫₀⁶ v dt = −17.8 m
(c) Distance     = ∫₀⁶ |v| dt = 29.6 m
(d) Greatest speed: from the graph of |v|, 9.81 m s⁻¹ at t = 4.91 s
```

Three habits earn the method marks here. Write the integral with its limits before giving the GDC value. Use the absolute-value function for distance rather than splitting by hand. For the greatest speed, look at the graph of |v| (or the minimum and maximum of v) over the whole interval, including the end points. Note that v(0) = 0 too, but the particle is starting from rest there, not changing direction.

## Reading motion from graphs

Some questions give the graph of v against t instead of a formula.

- The gradient of the v–t graph is the acceleration.
- The signed area under the v–t graph is the displacement; the total area, counting regions below the axis as positive, is the distance.
- The particle is furthest in the positive direction when v changes from + to −, which is the maximum of s.
- A local maximum or minimum of v (where a = 0) is where the acceleration changes sign.

## Common mistakes

- Giving displacement when the question asks for distance, or integrating v straight across a time when it changes sign.
- Treating "negative acceleration" as "slowing down" without checking the sign of v.
- Forgetting the constant when integrating a to get v, or v to get s, or using v(0) to find the constant in s.
- Answering "speed" with a negative number.
- Treating v = 0 as a change of direction without checking a sign change, as at a start from rest.
- On Paper 2, finding the times where v = 0 to three significant figures and then using the rounded values as limits.

## Exam technique: the command words

- **Find the times when the particle is at rest**: solve v(t) = 0 within the domain; reject values outside it.
- **Find the total distance travelled**: write ∫|v| dt with limits, then evaluate (split at the zeros by hand on Paper 1).
- **Determine whether the particle is speeding up**: state the signs of v and a, then conclude.
- **Interpret** or **explain** a value in context: use the words of the context and units, such as "the particle is 4 m to the left of O".

## Where next

Condense the section with the [section 5.9 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-9-revision-notes/) and practise with the [section 5.9 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-9-practice/). The integration skills used here are developed further in the [section 5.11 study guide on definite integrals and areas](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-11/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section SL 5.9.
