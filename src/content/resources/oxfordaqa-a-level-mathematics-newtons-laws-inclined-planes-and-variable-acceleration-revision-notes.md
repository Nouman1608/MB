---
title: "OxfordAQA International AS and A-level Mathematics: Newton's laws: slopes, variable acceleration (9660) -- Revision Notes"
seoTitle: "OxfordAQA A-level Maths M2 Slopes & Variable Acc Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Newton's laws: inclined planes and variable acceleration"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 211
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m2-newtons-law-of-motion-oxfordaqa-alevel-maths"
description: "Condensed notes on Newton's laws on slopes and variable acceleration in 1, 2 and 3 dimensions for OxfordAQA International A-level Maths (9660)."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

Quick recall for section M2.4 of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. This content sits in International A-level Unit M2 (Mechanics) and is not examined at International AS. For full explanations and longer worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-newtons-laws-inclined-planes-and-variable-acceleration/). Then practise with the [practice questions](/resources/oxfordaqa-a-level-mathematics-newtons-laws-inclined-planes-and-variable-acceleration-practice/).

Course hub: [/boards/oxfordaqa/a-level/mathematics/](/boards/oxfordaqa/a-level/mathematics/). Checklist: [/checklists/oxfordaqa/a-level/mathematics/](/checklists/oxfordaqa/a-level/mathematics/). Find weak areas with the [free 10-minute diagnostics](/diagnostics/).

## Key results

| Idea | Result |
|---|---|
| Newton's second law | F = ma, a vector equation: resultant force = mass × acceleration |
| Weight on a slope at angle θ | mg sin θ along the slope (downwards), mg cos θ into the slope |
| Normal reaction (no other perpendicular force) | R = mg cos θ |
| Friction while sliding | F = μR, opposing motion |
| Friction when not sliding | F ≤ μR |
| Smooth slope, sliding | a = g sin θ, independent of mass |
| Rough slope, sliding down | a = g(sin θ − μ cos θ) |
| Rough slope, sliding up | deceleration = g(sin θ + μ cos θ) |
| Variable acceleration | a = dv/dt, v = dr/dt, v = ∫ a dt, r = ∫ v dt |
| Vectors | r = x i + y j + z k, v = dr/dt, a = d²r/dt², F = ma |

Constant-acceleration equations (v = u + at, s = ut + ½at², v² = u² + 2as, s = ½(u + v)t) hold only when a is constant. Use g = 9.8 m s⁻² unless told otherwise.

## Method for a slope problem

1. Draw the force diagram: weight mg, normal reaction R, friction F (opposing motion), any applied force.
2. Mark the direction of motion and the positive direction.
3. Resolve perpendicular to the slope: R = mg cos θ (adjust if an applied force has a perpendicular component).
4. If sliding, write F = μR.
5. Resolve along the slope: resultant = ma.
6. Solve for a, then use constant-acceleration equations for time, distance or speed.

**Reminder: at rest or sliding?** On a slope with coefficient μ, a particle stays at rest if tan θ ≤ μ. It slides if tan θ > μ. For a particle that has stopped, compare mg sin θ with the largest possible friction μ mg cos θ. Do not assume it stays put.

**Reminder: up then down.** Going up, friction acts down the slope, so the deceleration is g(sin θ + μ cos θ). On the way back, friction acts up the slope, so a = g(sin θ − μ cos θ). These are different values.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--07-projectile-two-motions.webp" width="900" height="800" alt="A projectile launched at 24.5 m/s with sin α = 0.6, drawn to scale with dots every 0.5 s. The dots are 9.8 m apart horizontally (constant 19.6 m/s) while vertical speed falls from 14.7 to zero at the top and to minus 14.7 on landing. T = 3 s, R = 58.8 m, H = 11.0 m." loading="lazy">
  <figcaption>Horizontal motion is uniform and vertical motion has acceleration −g; time links the two.</figcaption>
</figure>


## Method for a variable acceleration problem

1. Find a. If given a force F(t), a = F/m. If given r(t), differentiate twice.
2. Integrate to get v. Add the constant using the stated condition, usually the velocity at t = 0.
3. Integrate again to get r. Add a second constant from a stated position.
4. For vectors, do each component separately and keep the answer as a vector.
5. Check what is asked: velocity or speed, displacement or distance, vector or magnitude.

**Speed and direction from v = p i + q j.** Speed = √(p² + q²). Angle to i: tan⁻¹(q/p), taking care with the quadrant. In three dimensions, speed = √(p² + q² + w²) for v = p i + q j + w k.

**Distance versus displacement.** Find the times when v = 0. Split the integral there and add the sizes of the separate displacements.

**Special conditions in vectors.**

| Statement | Condition |
|---|---|
| Moving parallel to i | j (and k) component of v is zero |
| Force acts in the j direction only | i and k components of F are zero |
| At rest | every component of v is zero at the same time |
| Passes through the origin | every component of r is zero at the same time |
| Magnitude of force equals N | sum of squares of components equals N² |

**Three dimensions.** If k is vertically upwards, include −mg k in the resultant force.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--02-vt-graph-areas.webp" width="900" height="900" alt="A velocity-time graph rises to 12 m/s in 5 s, stays level to t = 11, then falls to minus 4 m/s at t = 15, crossing zero at t = 14. The areas are 30, 72, 18 above the axis and 2 below. Displacement is 118 m and distance 122 m." loading="lazy">
  <figcaption>Gradients give acceleration; areas give displacement, and distance counts every area as positive.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--04-vertical-two-roots.webp" width="900" height="910" alt="A displacement-time parabola for a ball thrown up at 21 m/s peaks at 22.5 m. The line s = 15 m meets it at t = 0.91 s going up and t = 3.38 s coming down, with velocities plus and minus 12.1 m/s from the tangent gradients. The gap of 2.47 s is the time above 15 m." loading="lazy">
  <figcaption>The two roots of the quadratic are the times going up and coming down through the same height.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--05-calculus-turning-points.webp" width="900" height="1040" alt="Two graphs share a time axis. Displacement x = 2t³ − 15t² + 24t reaches 11 m at t = 1, minus 16 m at t = 4 and minus 5 m at t = 5. Velocity, its derivative, is zero at t = 1 and 4 and negative between. Displacement is minus 5 m but distance is 11 + 27 + 11 = 49 m." loading="lazy">
  <figcaption>Find where v = 0, split the motion there, and add the sizes of the stages for distance.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--06-vector-motion-plane.webp" width="900" height="900" alt="The path of r = (t³ − 3t)i + (2t² + 1)j from t = 0 to 2 with velocity arrows. At t = 0 the velocity is minus 3i, at t = 1 it is 4j (i component zero) and at t = 2 it is 9i + 8j, speed 12.0 m/s, with acceleration 12i + 4j." loading="lazy">
  <figcaption>Differentiate each component separately; parallel to j means the i component of velocity is zero.</figcaption>
</figure>


## Worked reminders

**Smooth slope.** Mass 2 kg, slope 15°, smooth: a = 9.8 sin15° = 2.54 m s⁻². The component of weight along the slope is 2(9.8) sin15° = 5.07 N.

**Variable acceleration.** F = 6t N acts on a 3 kg particle starting from rest at t = 0. Then a = 2t, v = t², and r = t³/3 + constant.

**Force from position.** r = (t³ − t) i + 3t² j with m = 3: a = 6t i + 6 j, so F = 18t i + 18 j.

**Rough slope with an applied force.** Mass 6 kg, slope 20°, μ = 0.3, pushed up the slope by 50 N parallel to it. R = 6(9.8) cos20° = 55.25 N, friction 0.3R = 16.58 N down the slope, weight component 20.11 N down the slope. Then 50 − 20.11 − 16.58 = 6a, so a = 2.22 m s⁻² up the slope.

**Distance travelled.** If v = −(t − 1)(t − 5) with x = 0 at t = 0, the velocity changes sign at t = 1. Then x(1) = −7/3 and x(5) = 25/3, so the distance is 7/3 + 32/3 = 13.

## Modelling words to use

- Particle: size ignored, all forces act at a point.
- Smooth: no friction, so only the weight component and applied forces act along the slope.
- Motion under gravity: no air resistance, g constant.
- A force law F(t) is valid only over the time stated in the question.

## Must-know distinctions

- F = ma uses the resultant force, not one force.
- sin θ goes with the slope direction, cos θ with the perpendicular, when θ is the angle to the horizontal.
- Limiting friction F = μR applies only when sliding or about to slide.
- Distance travelled is never less than the magnitude of the displacement.
- A definite integral from 0 to T gives the change in the quantity. An indefinite integral needs a constant.

## Quick self-test

1. A particle slides down a smooth plane inclined at 40°. Find its acceleration to 3 s.f.
2. A 5 kg block rests on a plane inclined at 25°. Find the normal reaction to 3 s.f.
3. A block rests on a plane inclined at 20° with μ = 0.5. Can it remain at rest? Give a reason.
4. A particle of mass m has a = 4t − 3 and v = 2 at t = 0. Find v when t = 3.
5. A 2 kg particle starts from rest under F = (4t i + 6 j) N. Find its speed at t = 3 to 3 s.f.
6. A 3 kg particle has r = (t³ − t) i + 3t² j. Find the magnitude of the force at t = 2 to 3 s.f.
7. A block slides down a plane inclined at 30° with μ = 0.2. Find its acceleration to 3 s.f.
8. A particle has v = (t − 2)(t − 4) for t from 0 to 4, starting at x = 0. Find the distance travelled.
9. A 3 kg particle has a = (2i − j + 4t k). Find the magnitude of the force at t = 1 to 4 s.f.
10. A 4 kg particle is projected up a smooth plane inclined at 30° with speed 7.35 m s⁻¹. Find the time to come to rest and the distance travelled up the slope.

### Answers

1. a = 9.8 sin40° = **6.30 m s⁻²**.
2. R = 5(9.8) cos25° = **44.4 N**.
3. tan20° = 0.364, which is less than 0.5. The maximum friction exceeds the weight component along the slope, so **yes, it can remain at rest**.
4. v = 2t² − 3t + 2, so at t = 3, v = 18 − 9 + 2 = **11** (in the same units as the question uses).
5. a = (2t, 3), v = (t², 3t), at t = 3 v = (9, 9), speed = 9√2 = **12.7 m s⁻¹**.
6. a = (6t, 6), F = (18t, 18), at t = 2 F = (36, 18), |F| = √1620 = **40.2 N**.
7. a = 9.8(sin30° − 0.2 cos30°) = **3.20 m s⁻²** down the slope.
8. x = t³/3 − 3t² + 8t. x(2) = 20/3 and x(4) = 16/3. Distance = 20/3 + (20/3 − 16/3) = **8** (same units as x).
9. F = 3a = (6, −3, 12t). At t = 1: |F| = √(36 + 9 + 144) = √189 = **13.75 N**.
10. Deceleration = 9.8 sin30° = 4.9 m s⁻². t = 7.35/4.9 = **1.5 s**. Distance = 7.35²/(2 × 4.9) = **5.51 m**.

## Where marks are usually lost

- Resolving with sin and cos the wrong way round on a slope.
- Missing a force: friction, or the applied force's component, in the equation along the slope.
- Using the same friction direction for the upward and downward parts of a journey.
- Applying v = u + at to an acceleration that varies with t.
- Forgetting a constant of integration, or finding it from the wrong condition.
- Stopping at a vector acceleration without the factor of mass when asked for force (or dividing the wrong way).
- Giving displacement when asked for distance, because the sign change in velocity was never checked.
- Rounding too early. Keep full values until the last line, then give 3 significant figures unless told otherwise.
- Not stating the direction of an answer when it is a vector or "up/down the slope".

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--03-suvat-trapezium.webp" width="900" height="920" alt="A straight-line velocity-time graph from 5 to 13 m/s over 4 s has gradient 2. The area is a 36 m trapezium that splits into a rectangle of 20 and a triangle of 16. These give v = u + at, s = ½(u+v)t, s = ut + ½at², and eliminating t gives v² = u² + 2as." loading="lazy">
  <figcaption>The suvat equations are the gradient and area of one straight-line velocity-time graph.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--09-two-angles-one-point.webp" width="900" height="910" alt="Two parabolas from the origin at 14 m/s pass through (10, 5). Using sec²α = 1 + tan²α gives T² − 4T + 3 = 0, so tan α = 1 or 3, α = 45° or 71.6°. The 45° path has range 20 m and is at its top at the point; the 71.6° path has range 12 m and passes it on the way down." loading="lazy">
  <figcaption>Eliminating t gives a quadratic in tan α, so there are usually two launch angles.</figcaption>
</figure>

## Frequently asked questions

**What is the acceleration of a particle sliding down a smooth slope?**
It is g sin θ, where θ is the angle of the slope to the horizontal. It does not depend on the mass.

**What is the acceleration down a rough slope?**
For a particle sliding down, a = g(sin θ − μ cos θ). Sliding up, the deceleration is g(sin θ + μ cos θ), because friction then acts down the slope.

**When does F = μR apply?**
Only when the object is sliding or about to slide. When it is not sliding, the friction force satisfies F ≤ μR.

**How do you find a force from a position vector?**
Differentiate r twice with respect to t to get the acceleration, then multiply by the mass using F = ma. For the magnitude, take the square root of the sum of the squared components.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, for International AS exams from May/June 2018 and International A-level exams from May/June 2019, published by OxfordAQA. These notes follow section M2.4.
