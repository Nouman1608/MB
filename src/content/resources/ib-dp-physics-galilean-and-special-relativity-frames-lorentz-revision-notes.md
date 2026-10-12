---
title: "IB DP Physics: Galilean and special relativity: Lorentz transformations and space-time diagrams (DP Physics) -- Revision Notes"
seoTitle: "IB Physics HL A.5 Special Relativity Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["ib"]
topic: "Galilean and special relativity: frames, Lorentz transformations and space-time diagrams"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 275
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-a"
    subtopic: "ib-dp-physics-a-5"
description: "Condensed revision notes for IB DP Physics A.5 (HL only): relativity formulas, method steps, key distinctions, a quick self-test and common mistakes."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These are condensed notes for **sub-topic A.5, Galilean and special relativity**, from the IB *Physics guide*, first assessment 2025. All of A.5 is additional higher level content, so everything below is **HL only**. For full explanations and longer worked examples, read the [study guide](/resources/ib-dp-physics-galilean-and-special-relativity-frames-lorentz/), then test yourself with the [practice questions](/resources/ib-dp-physics-galilean-and-special-relativity-frames-lorentz-practice/).

Links: [IB DP Physics hub](/boards/ib/ib-dp/physics/), [printable checklist](/checklists/ib/ib-dp/physics/), [free diagnostics](/diagnostics/).

## Definitions

- **Reference frame**: axes and clocks used by an observer to give the position and time of events.
- **Inertial frame**: a frame that is not accelerating.
- **Event**: something that happens at a definite place and time.
- **Galilean relativity**: Newton's laws of motion keep the same form for observers in any inertial frame.
- **Proper time interval Δt₀**: time between two events measured in the frame where both happen at the same place.
- **Proper length L₀**: length of an object measured in the frame where it is at rest.
- **Invariant**: has the same value in all inertial frames (the space-time interval is one).
- **World line**: the path of a particle on a space-time diagram. This unit uses constant velocity only.

## The two postulates

1. The laws of physics take the same form in every inertial reference frame.
2. The speed of light in a vacuum is the same in all inertial frames, independent of the motion of source or observer.

## Formula table

S′ moves at v along +x relative to S, origins together at t = 0.

| Idea | Equation | Notes |
|---|---|---|
| Galilean position | x′ = x − vt | Low speeds only |
| Galilean time | t′ = t | Time is universal in this model |
| Galilean velocity | u′ = u − v | Fails for light |
| Lorentz factor | γ = 1/√(1 − v²/c²) | γ ≥ 1 |
| Lorentz position | x′ = γ(x − vt) | |
| Lorentz time | t′ = γ(t − vx/c²) | Depends on x |
| Velocity addition | u′ = (u − v)/(1 − uv/c²) | Keep signs |
| Interval | (Δs)² = (cΔt)² − (Δx)² | Invariant |
| Time dilation | Δt = γΔt₀ | Δt₀ is the proper time |
| Length contraction | L = L₀/γ | Along the motion only |
| World-line angle | tan θ = v/c | θ measured from the ct axis |

## Methods in steps

**Choosing between dilation, contraction and Lorentz equations**

1. Write down the two events or the object.
2. Find the frame in which the two events are at the same place (a clock) or the object is at rest (a length).
3. That frame gives the proper quantity, Δt₀ or L₀.
4. Use Δt = γΔt₀ or L = L₀/γ. If neither fits, use the Lorentz equations on the full coordinates.

**Lorentz transformation of an event**

1. Choose S and S′, and fix the direction of +x so v has the right sign.
2. Find γ from v/c.
3. Compute x′ = γ(x − vt).
4. Compute t′ = γ(t − vx/c²). Work out vx/c² as (v/c) × (x/c) to keep numbers small.

**Velocity addition**

1. Decide which frame the given velocity is in (u) and the velocity of the new frame relative to it (v).
2. Substitute with signs, then divide by 1 − uv/c².
3. Check: the speed should be below c.

**Space-time diagram**

1. Draw ct vertical and x horizontal with the same scale.
2. Draw light at 45°.
3. Draw the world line of a moving frame's origin at θ = tan⁻¹(v/c) from the ct axis; this is ct′.
4. Draw x′ at the same angle from the x axis, tilted towards the light line.
5. Read coordinates by drawing lines parallel to the primed axes.

## Small worked reminders

**Time dilation.** A clock at rest in a spacecraft ticks at an interval of 3.0 μs. The spacecraft moves at 0.80c, so γ = 1.667. An observer measures 3.0 × 1.667 = **5.0 μs**.

**Interval.** Events with Δt = 5.0 s and Δx = 0.90 × 10⁹ m have cΔt = 1.5 × 10⁹ m. Then Δs = √((1.5 × 10⁹)² − (0.90 × 10⁹)²) = 1.2 × 10⁹ m, so the proper time is 1.2 × 10⁹/3.00 × 10⁸ = **4.0 s**.

**Simultaneity.** Two flashes with Δt = 0 and Δx = 1000 m in S. For S′ at 0.60c, Δt′ = −γvΔx/c² = −1.25 × (0.60 × 1000)/(3.00 × 10⁸) = **−2.5 μs**. S′ does not see them as simultaneous.

**Lorentz transformation.** S′ at 0.40c, event x = 4.5 × 10⁸ m, t = 2.0 s. γ = 1.091. x′ = 1.091 × (4.5 × 10⁸ − 0.40 × 3.00 × 10⁸ × 2.0) = **2.29 × 10⁸ m**. vx/c² = 0.40 × 1.5 s = 0.60 s, so t′ = 1.091 × (2.0 − 0.60) = **1.53 s**. As a check, (cΔt)² − (Δx)² is 1.575 × 10¹⁷ m² in both frames.

**Muon reminder.** A muon with proper lifetime 2.2 μs at 0.995c has γ = 10.0. Earth-frame lifetime 22 μs, so it travels about 6.6 km. In the muon frame, an 8.0 km layer contracts to about 0.80 km, crossed in about 2.7 μs.

## Must-know distinctions

- **Proper time vs dilated time**: proper time is the shortest interval, from one clock present at both events. Every other frame measures longer.
- **Proper length vs contracted length**: proper length is the longest, measured at rest.
- **Galilean vs Lorentz**: Galilean has t′ = t and u′ = u − v. Lorentz mixes x into t′ and keeps c the same for all observers.
- **Invariant vs frame-dependent**: Δs and c are invariant. Δt, Δx and simultaneity depend on the frame.
- **Symmetry**: each inertial observer sees the other's clock slow and the other's rod contracted.
- **Axes on a diagram**: ct and x are perpendicular. ct′ and x′ are not drawn perpendicular, and their scales differ from ct and x.
- **Muon evidence**: in the Earth frame, the muon lifetime is dilated. In the muon frame, the distance is contracted. Both lead to the same result.

## Quick self-test

1. S′ moves at 20 m/s relative to S. An event has x = 500 m, t = 10 s in S. Find x′ using Galilean relativity.
2. A cyclist moves at 40 m/s in S; S′ moves at 25 m/s in the same direction. Find the cyclist's velocity in S′ (Galilean).
3. Calculate γ for v = 0.96c.
4. A clock records a proper interval of 4.0 μs. The clock moves at 0.96c. What interval does a stationary observer measure?
5. A rod has proper length 70 m and moves lengthways at 0.96c. What length is measured?
6. In S, an object moves at 0.50c. S′ moves at v = −0.50c relative to S. Find the object's speed in S′.
7. Events have Δt = 5.0 s and Δx = 0.90 × 10⁹ m. Find the proper time between them.
8. Find θ on a space-time diagram for a particle at 0.50c.
9. A world line makes 40° with the ct axis. Find the speed as a fraction of c.
10. State the second postulate in one sentence.
11. Why can two events that are simultaneous in S be non-simultaneous in S′?

### Answers

1. x′ = 500 − 20 × 10 = **300 m**.
2. u′ = 40 − 25 = **15 m/s**.
3. γ = 1/√(1 − 0.9216) = 1/0.28 = **3.57**.
4. Δt = 3.571 × 4.0 = **14 μs** (14.3 μs).
5. L = 70/3.571 = **19.6 m**.
6. u′ = (0.50 − (−0.50))c/(1 + 0.25) = 1.00c/1.25 = **0.80c**.
7. Δs = 1.2 × 10⁹ m, so Δt₀ = Δs/c = **4.0 s**.
8. θ = tan⁻¹(0.50) = **26.6°**.
9. v/c = tan 40° = **0.839**.
10. The speed of light in a vacuum is the same for all inertial observers.
11. t′ = γ(t − vx/c²) depends on x, so events at different x with equal t get different t′ unless they are also at the same x.

## Where marks are usually lost

- Using u + v or u − v at speeds close to c.
- Choosing the wrong frame for Δt₀ or L₀, so the answer is shorter when it should be longer, or the reverse.
- Forgetting the sign of v in x′ = γ(x − vt) and in velocity addition.
- Writing "time slows down" without saying whose clock and as measured by whom.
- Leaving c out of (cΔt)² − (Δx)² so the units do not match.
- Claiming length contraction happens perpendicular to the motion.
- Explaining muon survival using only one frame, or mixing the two frames in one argument.
- Drawing ct′ and x′ at different angles from the light line.
- Giving γ or speeds to too few or too many significant figures; keep working values and round at the end.

## Next steps

Use the [practice questions](/resources/ib-dp-physics-galilean-and-special-relativity-frames-lorentz-practice/) next, and return to the [study guide](/resources/ib-dp-physics-galilean-and-special-relativity-frames-lorentz/) for any weak area. Check the [free diagnostics](/diagnostics/) and the [printable checklist](/checklists/ib/ib-dp/physics/).

## Official syllabus

IB Diploma Programme *Physics guide*, first assessment 2025, published by the International Baccalaureate Organization. Sub-topic A.5, Galilean and special relativity (additional higher level).
