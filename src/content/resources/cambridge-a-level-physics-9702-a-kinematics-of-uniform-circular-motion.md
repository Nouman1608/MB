---
title: "Cambridge A Level Physics (9702): Kinematics of uniform circular motion"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Motion in a circle"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 12.1
syllabusTopics:
  - qualification: "a-level"
    topic: "a-motion-in-a-circle"
    subtopic: "a-kinematics-of-uniform-circular-motion"
description: "A focused guide to 12.1 Kinematics of uniform circular motion in Cambridge A Level Physics 9702: radians, angular speed, ω = 2π/T and v = rω."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **12.1 Kinematics of uniform circular motion** of Cambridge International AS & A Level Physics 9702, 2025–2027 series. It is the first A Level topic. The broader [Motion in a Circle study guide](/resources/a-physics-motion-in-a-circle/) covers both 12.1 and the centripetal acceleration and force of 12.2; this page stays with the kinematics only and goes further into the radian, angular displacements larger than one turn, unit conversions such as revolutions per minute, linked rotations (belts and gears), and points at different radii on the same rotating object. For quick recall use the [Kinematics of uniform circular motion revision notes](/resources/cambridge-a-level-physics-9702-a-kinematics-of-uniform-circular-motion-revision-notes/), and for exam-style questions the [Kinematics of uniform circular motion practice questions](/resources/cambridge-a-level-physics-9702-a-kinematics-of-uniform-circular-motion-practice/).

## What 12.1 asks you to do

Candidates should be able to:

- **define the radian** and express angular displacement in radians
- understand and use the concept of **angular speed**
- recall and use **ω = 2π/T** and **v = rω**

"Uniform" circular motion means motion in a circle at **constant speed**, and so at constant angular speed. Why such motion needs a force, and how large the acceleration is, belongs to 12.2.

## The radian

> One radian is the angle subtended at the centre of a circle by an arc of length equal to the radius of the circle.

For an arc of length s on a circle of radius r, the angle in radians is:

```
θ = s / r        (θ in radians; s and r in the same units)
```

Because θ is a length divided by a length, the radian has no dimensions. A full circle has arc length 2πr, so:

```
360° = 2π rad      180° = π rad      1 rad ≈ 57.3°
degrees → radians: multiply by π/180
radians → degrees: multiply by 180/π
```

Useful values to recognise: 90° = π/2 ≈ 1.57 rad, 60° = π/3 ≈ 1.05 rad, 45° = π/4 ≈ 0.785 rad, 30° = π/6 ≈ 0.524 rad.

**Arc length from an angle.** Rearranging gives s = rθ, valid only if θ is in radians. The tip of a 12 cm minute hand moving through 20 minutes turns through one third of a circle, 2π/3 = 2.09 rad, so it travels s = 0.12 × 2.09 = 0.25 m.

## Angular displacement

The **angular displacement** of an object moving in a circle is the angle, measured at the centre, through which the radius to the object has turned. It is measured in radians and is not limited to 2π: a wheel that makes 3.5 complete turns has an angular displacement of 3.5 × 2π = 7π ≈ 22.0 rad.

## Angular speed

> Angular speed ω is the rate of change of angular displacement.

```
ω = Δθ / Δt      unit: rad s⁻¹
```

For uniform circular motion, one revolution (2π rad) takes one period T, so:

```
ω = 2π / T = 2πf      (f = 1/T is the number of revolutions per second)
```

**Converting revolutions per minute.** Rotation rates are often quoted in revolutions per minute (rpm). Divide by 60 to get revolutions per second, then multiply by 2π:

```
ω = (rpm / 60) × 2π
e.g. 1500 rpm = 25 rev s⁻¹ → ω = 25 × 2π = 157 rad s⁻¹
```

## Linear speed and v = rω

The **linear speed** v is the speed along the circular path, and its direction at any instant is along the **tangent** to the circle. Starting from s = rθ and dividing both sides by the time taken:

```
s / t = r (θ / t)    →    v = rω
```

Equivalently, one revolution covers a distance 2πr in time T, so v = 2πr/T = rω.

**One rotating object, many radii.** Every point on a rigid rotating object turns through the same angle in the same time, so every point has the **same angular speed**. Their linear speeds differ: v ∝ r. A point twice as far from the axis moves twice as fast. This is why ω, not v, is the natural way to describe a rotating object.

**Constant speed is not constant velocity.** In uniform circular motion the speed is constant, but the direction of motion changes continuously, so the velocity changes. That change is the centripetal acceleration studied in 12.2.

## Worked example 1: the rotating Earth

Taking the Earth's rotation period as 24 hours and its radius as 6.37 × 10⁶ m, calculate (a) the Earth's angular speed, (b) the linear speed of a point on the equator, and (c) the linear speed of a point at latitude 60°.

```
(a) T = 24 × 3600 = 86 400 s
    ω = 2π / T = 2π / 86 400 = 7.27 × 10⁻⁵ rad s⁻¹
(b) v = rω = 6.37 × 10⁶ × 7.27 × 10⁻⁵ = 463 m s⁻¹
(c) at latitude 60°, the circle of rotation has radius r = R cos 60° = 3.19 × 10⁶ m
    v = rω = 3.19 × 10⁶ × 7.27 × 10⁻⁵ = 232 m s⁻¹
```

*Annotation.* Both points have the same ω, because the whole Earth rotates as one body. The point at 60° moves in a smaller circle about the axis, so its linear speed is half that at the equator. Always convert the period to seconds before calculating ω.

## Worked example 2: a belt drive

A motor turns a pulley of radius 2.0 cm at 1500 rpm. A belt that does not slip links it to a second pulley of radius 6.0 cm. Calculate the angular speed of the second pulley.

```
ω₁ = (1500 / 60) × 2π = 157 rad s⁻¹
belt speed v = r₁ω₁ = 0.020 × 157 = 3.14 m s⁻¹
the belt moves both rims at the same linear speed:
ω₂ = v / r₂ = 3.14 / 0.060 = 52.4 rad s⁻¹   (500 rpm)
```

*Annotation.* Linked rotations share a **linear** speed at the point of contact, so r₁ω₁ = r₂ω₂. Points on the **same** object share an **angular** speed. Decide which case applies before writing any equation.

## A rolling wheel

A wheel of radius r rolling without slipping moves forward a distance 2πr for each revolution. The speed of the vehicle equals the speed of the rim relative to the axle, so v = rω. A car moving at 25 m s⁻¹ on wheels of radius 0.30 m has wheels turning at ω = 25 / 0.30 = 83 rad s⁻¹, which is about 800 rpm.

## Common mistakes

- **Using degrees in s = rθ or ω = θ/t.** These relationships require radians.
- **Defining the radian vaguely**, for example as "57.3°". Use the arc-equals-radius definition.
- **Forgetting to convert rpm** (or hours, or days) before calculating ω.
- **Giving different angular speeds** to different points on the same rotating object.
- **Giving equal angular speeds** to two pulleys linked by a belt, instead of equal rim speeds.
- **Confusing f and ω.** f is in revolutions per second (Hz); ω = 2πf is in rad s⁻¹.
- **Saying the velocity is constant** in uniform circular motion.

## Exam technique for the command words

- **Define** (the radian or angular speed): use the precise wording above; for angular speed, "rate of change of angular displacement" or "angle swept out per unit time".
- **Show that** (v = rω): start from s = rθ and divide by t, or from v = 2πr/T and ω = 2π/T.
- **Calculate**: convert to seconds and radians first; give ω in rad s⁻¹ and v in m s⁻¹.
- **Explain** (why two points have different speeds): same ω for a rigid body, so v ∝ r.
- **State** (the direction of the velocity): along the tangent to the circle at that point.

## Related resources

- [Motion in a Circle study guide](/resources/a-physics-motion-in-a-circle/) — the whole of Topic 12, including centripetal acceleration and force
- [Kinematics of uniform circular motion revision notes](/resources/cambridge-a-level-physics-9702-a-kinematics-of-uniform-circular-motion-revision-notes/)
- [Kinematics of uniform circular motion practice questions](/resources/cambridge-a-level-physics-9702-a-kinematics-of-uniform-circular-motion-practice/)
- [Kinematics: Equations of Motion](/resources/as-physics-kinematics-equations-of-motion/) — the AS Level foundation for speed and velocity

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
