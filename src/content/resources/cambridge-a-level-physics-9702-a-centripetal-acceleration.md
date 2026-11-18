---
title: "Cambridge A Level Physics (9702): Centripetal acceleration"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Motion in a circle"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 12.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-motion-in-a-circle"
    subtopic: "a-centripetal-acceleration"
description: "A focused guide to 12.2 Centripetal acceleration in Cambridge A Level Physics 9702: why a perpendicular force bends a path, a = v²/r, F = mrω², worked examples."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **12.2 Centripetal acceleration** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Motion in a Circle study guide](/resources/a-physics-motion-in-a-circle/) introduces the whole of Topic 12, including radians and angular speed; this page goes further into the centripetal outcomes alone: why a sideways force changes direction but not speed, where a = v²/r comes from, how to choose between the two forms of each equation, and how to set up the force equation for situations you have not met before. For quick recall use the [Centripetal acceleration revision notes](/resources/cambridge-a-level-physics-9702-a-centripetal-acceleration-revision-notes/), and for exam-style questions the [Centripetal acceleration practice questions](/resources/cambridge-a-level-physics-9702-a-centripetal-acceleration-practice/).

## What 12.2 asks you to do

The syllabus lists four outcomes. Candidates should be able to:

- understand that a **force of constant magnitude that is always perpendicular to the direction of motion** causes centripetal acceleration
- understand that centripetal acceleration causes circular motion with a **constant angular speed**
- recall and use **a = rω²** and **a = v²/r**
- recall and use **F = mrω²** and **F = mv²/r**

The first two outcomes are about cause and effect, and are tested with "explain" questions. The last two are calculations. All four rely on 12.1: ω must be in rad s⁻¹, and v = rω links the two forms.

## Why a perpendicular force gives circular motion

Split any force on a moving object into two components: one along the velocity and one at right angles to it.

- The component **along** the velocity changes the **speed**.
- The component **perpendicular** to the velocity changes the **direction** only.

If the force is always perpendicular to the motion, there is no component along the velocity, so the speed never changes. The same conclusion follows from energy: work done is force × displacement in the direction of the force, and each small displacement is at right angles to the force, so no work is done and the kinetic energy stays constant.

Now add the condition that the force has **constant magnitude**. At constant speed, a constant sideways force turns the velocity through equal angles in equal times. Equal angles in equal times means a **constant angular speed**, and the path curves by the same amount everywhere: a circle. The acceleration, F/m, has constant magnitude and always points at right angles to the velocity, which places it along the radius towards the centre.

If either condition fails, the path is not a uniform circle. A force that is perpendicular but growing would tighten the curve; a force with a forward component would speed the object up so it spirals.

## Deriving a = v²/r

The syllabus asks you to recall the equation, but a short derivation shows why it has this form and is a useful check.

Consider an object moving at speed v on a circle of radius r. In a short time Δt it moves through a small angle Δθ, and its velocity vector turns through the same angle Δθ, because velocity is always tangential.

1. The arc travelled is rΔθ, so Δt = rΔθ / v.
2. Draw the two velocity vectors tail to tail. They have equal length v and an angle Δθ between them, so for small Δθ the change in velocity has magnitude Δv = vΔθ.
3. Δv points towards the centre of the circle (it is the short side of the vector triangle, at right angles to the average velocity).
4. Acceleration = Δv / Δt = vΔθ ÷ (rΔθ / v) = v²/r.

Substituting v = rω gives a = (rω)²/r = **rω²**. The two forms are the same physics; which one to use depends on what the question holds constant.

## Choosing between the v and ω forms

The two forms of each equation suggest opposite proportionalities, and questions are often built on this.

| Situation | Quantity that is the same | Use | Consequence |
|---|---|---|---|
| Points on one rigid rotating object (a disc, a fairground wheel, the Earth) | ω | a = rω² | a ∝ r: the rim accelerates more than a point near the axle |
| Cars taking bends of different radii at the same speed | v | a = v²/r | a ∝ 1/r: the tighter bend needs more force |
| One object, speed doubled, same radius | r | a = v²/r | a is four times larger |
| One object, period halved, same radius | r | a = rω² | ω doubles, so a is four times larger |

When a question gives revolutions per minute, convert first: ω = 2π × (revolutions per second).

## Centripetal force is a job, not a force

F = mv²/r tells you the **resultant** force needed towards the centre. It is never an extra force on a free-body diagram. In each situation, ask which real force, or which component of a real force, points towards the centre:

| Situation | What supplies the resultant force towards the centre |
|---|---|
| Puck on a string on a frictionless table | Tension |
| Car on a flat bend | Sideways friction between tyres and road |
| Planet or satellite in a circular orbit | Gravitational force (Topic 13) |
| Rider pressed against the wall of a spinning rotor | Normal contact force from the wall |
| Charged particle moving at right angles to a uniform magnetic field | Magnetic force (Topic 20) |
| Mass on a string swinging in a horizontal circle (conical pendulum) | Horizontal component of the tension |

The magnetic and gravitational cases are the clearest examples of the first outcome: the force is perpendicular to the velocity at every instant and has constant magnitude, so the motion is a circle at constant speed.

## Worked example 1: a spin dryer

The drum of a spin dryer has radius 0.25 m and turns at 1200 revolutions per minute. Calculate the centripetal acceleration of clothing pressed against the drum, and the force the drum exerts on a 0.050 kg sock.

```
f = 1200 / 60 = 20 rev s⁻¹
ω = 2πf = 2π × 20 = 126 rad s⁻¹
a = rω² = 0.25 × 126² = 3.9 × 10³ m s⁻²   (about 400 times g)
F = ma = 0.050 × 3.9 × 10³ = 2.0 × 10² N
```

*Annotation.* The drum is a rigid rotating object, so ω is the natural quantity and a = rω² avoids a separate step for v. The force on the sock comes from the drum wall (a normal contact force). Water in the fabric reaches a hole in the drum, where nothing pushes on it, and so it carries on in a straight line along the tangent and leaves the drum. It is not "thrown outwards" by any force.

## Worked example 2: a conical pendulum

A ball of mass 0.30 kg hangs on a string of length 0.60 m and moves in a horizontal circle, with the string at 30° to the vertical. Calculate the tension, the angular speed and the period.

```
Vertically (no vertical acceleration):   T cos 30° = mg
T = (0.30 × 9.81) / cos 30° = 3.40 N

Radius of the circle:   r = L sin 30° = 0.60 × 0.50 = 0.30 m

Horizontally (resultant towards the centre):   T sin 30° = mrω²
ω² = (3.40 × 0.50) / (0.30 × 0.30) = 18.9
ω = 4.3 rad s⁻¹
period = 2π / ω = 1.4 s
```

*Annotation.* Two mistakes are common here. The radius is the horizontal distance from the ball to the vertical through the support, not the string length. And the centripetal force is only the horizontal component of the tension: the vertical component balances the weight. Dividing the two equations gives ω² = g / (L cos θ), which shows that the mass cancels.

## A quick check: the rotating Earth

A point on the Equator moves in a circle of radius 6.37 × 10⁶ m once every 24 hours. Taking T = 86 400 s, ω = 2π/T = 7.27 × 10⁻⁵ rad s⁻¹, and a = rω² = 0.034 m s⁻². Part of the gravitational pull on an object at the Equator supplies this, which is why a spring balance there reads very slightly less than the full gravitational force. The effect is small, about 0.3% of g, which is why it can usually be ignored.

## Common mistakes

- **Adding "centripetal force" as a separate arrow** alongside tension, weight or friction.
- **Using revolutions per second or degrees per second as ω.** Convert to rad s⁻¹.
- **Using the string length as the radius** in a conical pendulum.
- **Saying the object is thrown outwards** when the force is removed. It moves along the tangent.
- **Applying a ∝ r and a ∝ 1/r to the wrong case.** Decide first whether ω or v is fixed.
- **Thinking constant speed means no acceleration.** The velocity changes direction, so there is an acceleration of v²/r.

## Exam technique for the command words

- **Explain** (why a body moving in a circle accelerates, or why a perpendicular force gives a circle): velocity is a vector; its direction changes continuously; a resultant force acts towards the centre; with no component along the velocity the speed stays constant.
- **State** (the direction of the acceleration): towards the centre of the circle. "Inwards" without "centre" may not score.
- **Calculate** or **determine**: write the equation you choose, convert units (rev min⁻¹ to rad s⁻¹, cm to m), substitute and give a unit.
- **Show that**: give each step, including the value of ω, and then a final answer to one more significant figure than the value you are showing.
- **Suggest** (what supplies the centripetal force): name the real force and, where needed, the component.

## Related resources

- [Motion in a Circle study guide](/resources/a-physics-motion-in-a-circle/) — the whole of Topic 12
- [Centripetal acceleration revision notes](/resources/cambridge-a-level-physics-9702-a-centripetal-acceleration-revision-notes/)
- [Centripetal acceleration practice questions](/resources/cambridge-a-level-physics-9702-a-centripetal-acceleration-practice/)
- [Gravitational force between point masses](/resources/cambridge-a-level-physics-9702-a-gravitational-force-between-point-masses/) — circular orbits use these equations

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
