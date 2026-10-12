---
title: "IB DP Physics: Galilean and special relativity: Lorentz transformations and space-time diagrams (DP Physics)"
seoTitle: "IB Physics HL A.5 Special Relativity Study Guide"
resourceType: "study-guides"
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
description: "Study guide to IB DP Physics A.5 (HL only): Galilean and Lorentz transformations, time dilation, length contraction, simultaneity, space-time diagrams."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide teaches **sub-topic A.5, Galilean and special relativity**, from Topic A of the IB *Physics guide*, first assessment 2025. The guide places all of A.5 in the additional higher level (AHL) content, so everything here is **HL only**; A.5 has no standard level part. Derivations of the Lorentz transformations, velocity addition, time dilation and length contraction are not required, so the focus is on using the results.

Use it with the [revision notes](/resources/ib-dp-physics-galilean-and-special-relativity-frames-lorentz-revision-notes/) and the [practice questions](/resources/ib-dp-physics-galilean-and-special-relativity-frames-lorentz-practice/). Course links: [IB DP Physics hub](/boards/ib/ib-dp/physics/), [printable checklist](/checklists/ib/ib-dp/physics/) and the free [diagnostics](/diagnostics/). Earlier motion work is in [Kinematics](/resources/ib-dp-physics-kinematics/).

## What this unit covers

| Section | What you must be able to do | Level |
|---|---|---|
| A.5 | Explain reference frames and inertial frames | HL only |
| A.5 | State Galilean relativity; use x′ = x − vt, t′ = t and u′ = u − v | HL only |
| A.5 | State the two postulates of special relativity | HL only |
| A.5 | Use the Lorentz transformations and relativistic velocity addition | HL only |
| A.5 | Use the invariant interval (Δs)² = (cΔt)² − (Δx)² | HL only |
| A.5 | Distinguish proper time and proper length; use Δt = γΔt₀ and L = L₀/γ | HL only |
| A.5 | Explain the relativity of simultaneity | HL only |
| A.5 | Draw and read space-time diagrams; use tan θ = v/c | HL only |
| A.5 | Describe how muon decay experiments support time dilation and length contraction | HL only |

## Reference frames and Galilean relativity

A **reference frame** is a set of axes and clocks that an observer uses to give the position and time of any **event** (something that happens at one place and one instant). Two observers in different frames describe the same event with different numbers.

An **inertial reference frame** is one that is not accelerating. A frame at rest and a frame moving at constant velocity relative to it are both inertial. **Galilean relativity** is the statement that Newton's laws of motion take the same form for every inertial observer. No mechanics experiment can tell you which inertial frame is "really" at rest.

Take frame S′ moving along the x-axis at constant speed v relative to frame S, with the origins together at t = 0. The Galilean transformations are

**x′ = x − vt and t′ = t**


Time is the same for everyone. Differentiating gives the velocity addition rule **u′ = u − v**, where u is a velocity in S and u′ the same velocity in S′.

**Worked example 1.** Frame S′ moves at 12 m/s along +x relative to S. An event happens at x = 300 m, t = 40 s in S. A car moves at 30 m/s in S.

1. x′ = 300 − 12 × 40 = 300 − 480 = **−180 m**.
2. t′ = t = **40 s**.
3. u′ = 30 − 12 = **18 m/s**.

This works well at everyday speeds. It fails for light, which leads to special relativity.

## The two postulates

1. **The laws of physics take the same form in every inertial reference frame.**
2. **The speed of light in a vacuum, c, is the same for all inertial observers, whatever the motion of the source or observer.**

The second postulate contradicts u′ = u − v. If a light pulse moves at c in S, Galilean addition would give c − v in S′. Special relativity keeps c and changes the rules for space and time instead.

## Lorentz transformations

The postulates lead to the Lorentz transformations for S′ moving at speed v along +x:

**x′ = γ(x − vt)**

**t′ = γ(t − vx/c²)**


where **γ = 1/√(1 − v²/c²)**. Note γ ≥ 1, and γ is close to 1 when v is much less than c. Time now depends on position and on v, so the two frames do not share a universal time.

Useful values: γ = 1.25 at 0.60c, 1.667 at 0.80c, 2.29 at 0.90c, 5.03 at 0.98c.

**Worked example 2.** S′ moves at 0.60c relative to S. An event has x = 3.0 × 10⁸ m and t = 2.0 s in S. Take c = 3.00 × 10⁸ m/s.

1. γ = 1/√(1 − 0.36) = 1.25.
2. vt = 0.60 × 3.00 × 10⁸ × 2.0 = 3.6 × 10⁸ m, so x′ = 1.25(3.0 × 10⁸ − 3.6 × 10⁸) = **−7.5 × 10⁷ m**.
3. vx/c² = 0.60 × (3.0 × 10⁸)/(3.00 × 10⁸) = 0.60 s, so t′ = 1.25(2.0 − 0.60) = **1.75 s**.

The event has a negative x′ even though x is positive. That is allowed: S′ has moved away from S, so the event lies behind the S′ origin.

## Relativistic velocity addition

Substituting the Lorentz equations for a moving object gives

**u′ = (u − v) / (1 − uv/c²)**


where u is the object's velocity in S and v the velocity of S′ relative to S. Keep the signs: velocities in the +x direction are positive. At low speeds the term uv/c² is tiny and you recover u′ = u − v. If u = c, then u′ = c for every v, which satisfies postulate 2.

**Worked example 3.** In frame S, a rocket moves at u = −0.60c (towards −x). Frame S′ moves at v = +0.70c relative to S.

u′ = (−0.60c − 0.70c)/(1 − (−0.60)(0.70)) = −1.30c/1.42 = **−0.915c**.

The rocket's speed in S′ is 0.915c, below c. Galilean addition would give 1.30c, which is impossible.

## The invariant interval

Different observers disagree on Δt and Δx between two events, but they agree on the **space-time interval** Δs:

**(Δs)² = (cΔt)² − (Δx)²**


Δs is **invariant**: it has the same value in every inertial frame. If (cΔt)² > (Δx)², Δs² is positive and the events could be linked by something slower than light.

**Proper time interval** Δt₀ is the time between two events measured in the frame where both happen at the same place, so it is read from a single clock. For such events Δx = 0 in that frame, so Δs = cΔt₀. **Proper length** L₀ is the length of an object measured in the frame where the object is at rest.

**Worked example 4.** In frame S, two events are separated by Δt = 5.0 s and Δx = 1.2 × 10⁹ m.

1. cΔt = 3.00 × 10⁸ × 5.0 = 1.5 × 10⁹ m.
2. (Δs)² = (1.5 × 10⁹)² − (1.2 × 10⁹)² = 8.1 × 10¹⁷ m², so Δs = 9.0 × 10⁸ m.
3. Proper time = Δs/c = **3.0 s**.

A frame moving at v = Δx/Δt = 0.80c sees both events at one place. Check: γ = 1.667 and 5.0/1.667 = 3.0 s.

## Time dilation

If a clock is at rest in a frame, the interval it records between two ticks is a proper time Δt₀. An observer who sees the clock moving at speed v measures a longer interval:

**Δt = γΔt₀**


Moving clocks run slow as judged by the observer. The effect is symmetric between two inertial observers, since each sees the other's clock running slow. The derivation is not required.

## Length contraction

A rod with proper length L₀ that travels lengthways at speed v is measured by an observer to have length

**L = L₀/γ**


Only lengths parallel to the motion contract. The effect is symmetric, and it is a feature of measurements made by observers in relative motion, not of forces squeezing the object.

**Worked example 5.** A spacecraft has proper length 84 m and passes you at 0.90c. γ = 2.294, so L = 84/2.294 = **36.6 m**.

## Relativity of simultaneity

Events that are simultaneous in one frame are generally **not** simultaneous in another when they are at different x. From the Lorentz equation, two events with Δt = 0 and Δx in S have Δt′ = −γvΔx/c² in S′.

**Worked example 6.** In S, two flashes occur at the same time, 600 m apart along x. S′ moves at 0.50c.

Δt′ = γ(0 − vΔx/c²), with γ = 1.155 and vΔx/c² = 0.50 × 600/(3.00 × 10⁸) = 1.0 × 10⁻⁶ s. So Δt′ = **−1.15 μs**. The flash at the larger x is seen to happen first in S′.

Events at the same place and time in one frame are the same event in all frames.

## Space-time diagrams

A space-time diagram plots **ct** (vertical) against **x** (horizontal). Each point is an event. The **world line** of a particle is its path; this unit limits you to constant velocity, so world lines are straight.

- A light ray has a world line at 45° to both axes.
- A particle at rest has a vertical world line.
- A particle moving at speed v has a world line at angle θ to the ct axis, where **tan θ = v/c**. Its angle is always less than 45°.

For a second inertial frame S′ moving at v, the **ct′ axis** is the world line of S′'s origin, at angle θ to ct, with tan θ = v/c. The **x′ axis** tilts upward by the same angle towards the light line. The axes are no longer perpendicular on the page. The scales on ct′ and x′ differ from those on ct and x, and they are set by lines of constant interval (hyperbolae of constant (cΔt)² − (Δx)²). Reading an event's coordinates in S′ means drawing lines parallel to the primed axes, not perpendicular to them.

Simultaneity, dilation and contraction can all be read from such a diagram. For dilation, compare where a line parallel to x′ meets the ct′ axis with where a line parallel to x meets it: the same ct′ tick spans a longer ct interval. Events on a line parallel to x are simultaneous in S. Events on a line parallel to x′ are simultaneous in S′. Since the two lines differ, simultaneity is relative.

For v = 0.60c, θ = tan⁻¹(0.60) = 31.0°. For v = 0.80c, θ = 38.7°.

## Evidence from muon decay

Muons are unstable particles made when cosmic rays strike the upper atmosphere. Their proper mean lifetime is about 2.2 μs, yet many reach ground level. This supports special relativity.

**Worked example 7.** Muons travel at 0.980c. Take their proper lifetime as 2.2 μs and the atmosphere layer as 6.0 km thick in the Earth frame.

1. Without dilation, distance = 0.980 × 3.00 × 10⁸ × 2.2 × 10⁻⁶ ≈ 650 m, far less than 6.0 km.
2. γ = 5.03, so the lifetime in the Earth frame is 5.03 × 2.2 = **11 μs**, and the distance is 0.98c × 11.06 μs ≈ **3.3 km**.
3. In the muon frame the layer is contracted to 6000/5.03 = **1.19 km**, crossed in 1.19 km/(0.98c) = **4.1 μs**.

Both explanations agree: time dilation in the Earth frame, length contraction in the muon frame. This is why the experiments support both effects.

## Common errors

- Using Δt = γΔt₀ with the wrong interval as Δt₀. Δt₀ is the time between events at the same place in some frame, from one clock.
- Applying L = L₀/γ to a length perpendicular to the motion, or using the measured length as L₀.
- Adding speeds with u + v at relativistic speeds.
- Dropping the sign of v or u in the velocity addition equation.
- Drawing x′ perpendicular to ct′, or tilting it away from the light line instead of towards it.
- Saying the object "really shrinks" or a clock "really breaks"; measurements differ because the frames differ.

## Next steps

Try the [practice questions](/resources/ib-dp-physics-galilean-and-special-relativity-frames-lorentz-practice/), then condense with the [revision notes](/resources/ib-dp-physics-galilean-and-special-relativity-frames-lorentz-revision-notes/). Check coverage on the [printable checklist](/checklists/ib/ib-dp/physics/) and test yourself with the [free diagnostics](/diagnostics/).

## Official syllabus

IB Diploma Programme *Physics guide*, first assessment 2025, published by the International Baccalaureate Organization. Sub-topic A.5, Galilean and special relativity (additional higher level).
