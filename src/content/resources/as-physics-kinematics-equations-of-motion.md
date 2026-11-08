---
title: "Kinematics: Equations of Motion"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Kinematics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 2.1
syllabusTopics:
  - qualification: "a-level"
    topic: "as-kinematics"
    subtopic: "as-equations-of-motion"
description: "Distance, displacement, speed, velocity and acceleration, motion graphs and deriving the suvat equations: Topic 2, Kinematics, of Cambridge AS Physics 9702."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-18
updatedDate: 2026-08-18
featured: false
---

This guide covers Topic 2, Kinematics, subtopic **2.1 Equations of motion**,
from Cambridge International AS & A Level Physics 9702, 2025–2027 series. This
is AS Level content, building directly on the scalar/vector distinction from
Topic 1.

## Before studying this

This resource assumes the scalar/vector distinction and vector resolution from
[Physical Quantities, Units and Measurement](/resources/as-physics-physical-quantities-units-and-measurement/)
— displacement, velocity and acceleration are all vectors, and treating them
as plain numbers without regard to direction is a common source of sign errors
in this topic.

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — AS Level, Topic 2**

**2.1 Equations of motion** — defining and using distance, displacement, speed,
velocity and acceleration; representing these graphically; determining
displacement from the area under a velocity–time graph; determining velocity
from the gradient of a displacement–time graph and acceleration from the
gradient of a velocity–time graph; deriving the equations of uniformly
accelerated motion in a straight line from the definitions of velocity and
acceleration; solving problems with these equations, including bodies falling
freely under gravity without air resistance; describing an experiment to
determine the acceleration of free fall; describing motion that combines a
uniform velocity in one direction with a uniform acceleration in a
perpendicular direction.

## Distance, displacement, speed and velocity

**Distance** is the total path length travelled (a scalar); **displacement** is
the straight-line distance from start to finish, in a given direction (a
vector). **Speed** is distance travelled per unit time (a scalar); **velocity**
is displacement per unit time (a vector). Two objects can travel the same
distance at the same speed while having very different displacements and
velocities, if their paths differ.

**Acceleration** is the rate of change of velocity — also a vector, and note
that an object can accelerate by changing direction alone, even at constant
speed.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--04-stopping-distance.webp" width="900" height="950" alt="Two bars to scale: at 20 m/s thinking 13 m plus braking 28.6 m gives 42 m; at 30 m/s thinking 19.5 m plus braking 64.3 m gives 84 m. A 50 percent rise in speed multiplies braking distance by 2.25 and roughly doubles stopping distance." loading="lazy">
  <figcaption>Thinking distance is proportional to speed; braking distance to speed squared (OCR only).</figcaption>
</figure>


## Reading motion graphs

- On a **displacement–time graph**, the **gradient** at any point gives the
velocity at that instant. A horizontal section means the object is stationary;
a straight sloped line means constant velocity; a curve means the velocity is
changing.
- On a **velocity–time graph**, the **gradient** gives the acceleration, and
the **area under the graph** gives the displacement over that time interval —
this is signed area, so a region where velocity is negative counts as negative
displacement. A horizontal line means constant velocity (zero acceleration);
the area of a triangle or trapezium under a sloped line gives the
**displacement** during that acceleration. If velocity changes sign during the
interval, total distance travelled requires adding the *magnitudes* of the
areas above and below the time axis separately, rather than reading off a
single signed area.

Being asked to determine one quantity from the "area under" or "gradient of" a
graph is one of the most frequently tested skills in this subtopic — practise
reading both types of graph before touching the equations below.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--01-v-t-graph-gradient-area.webp" width="900" height="1160" alt="A velocity-time graph rises from 0 to 8 m/s in 4 s, stays at 8 m/s for 4 s, then falls to -4 m/s over 3 s. The areas are +16, +32, +8 m above the axis and -2 m below it, so displacement is 54 m and distance is 58 m. An acceleration-time graph beneath shows the gradients +2, 0 and -4 m/s squared." loading="lazy">
  <figcaption>Gradient of a v-t graph is acceleration; area is signed displacement, and distance adds the magnitudes.</figcaption>
</figure>


## The equations of motion

For **uniformly accelerated motion in a straight line**, with initial velocity
u, final velocity v, acceleration a, displacement s and time t:

```
v = u + at
s = ut + ½at²
v² = u² + 2as
s = ½(u + v)t
```

These are derived directly from the definitions of velocity (rate of change of
displacement) and acceleration (rate of change of velocity) — you should be
able to derive the first from the definition of acceleration, and the others by
combining it with the definition of velocity, since "derive" is an explicit
syllabus command word here, not just "recall."

**Worked example.** A ball is dropped from rest and falls freely (ignore air
resistance) for 2.0 s. Using g = 9.81 m s⁻² and s = ut + ½at² with u = 0:

```
s = 0 + ½ × 9.81 × 2.0² = 19.6 m
```

Its velocity at that point, from v = u + at: v = 0 + 9.81 × 2.0 = 19.6 m s⁻¹.

### Determining g experimentally

A standard method drops an object through a known, measured height and times
the fall electronically (a light gate or timer released by an electromagnet),
then uses s = ½gt² (since u = 0) rearranged to g = 2s/t². Repeating the drop and
averaging t reduces the effect of random timing error.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--03-measuring-g.webp" width="900" height="1170" alt="An electromagnet releases a steel ball and starts a timer; a trapdoor stops it. Plotting h against t squared gives a straight line through the origin with gradient g over 2 = 4.90 m/s squared, so g = 9.80 m/s squared (data from the OCR worked example)." loading="lazy">
  <figcaption>h = half g t squared, so the gradient of h against t squared is g/2.</figcaption>
</figure>


### Motion with a uniform velocity and a perpendicular uniform acceleration

Where a uniform velocity in one direction and a uniform acceleration in a
perpendicular direction act at the same time — for example, a ball thrown
horizontally that also falls under gravity — the two motions are independent
and can be analysed **separately**, using the equations above in each
direction, then combined only if a resultant displacement or velocity is asked
for. This is the same resolving idea from Topic 1, applied to motion rather
than to a single force.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--02-suvat-from-graph.webp" width="900" height="1000" alt="A v-t graph for 6.0 to 22 m/s over 120 m has gradient 1.87 m/s squared and total area 120 m, split into a rectangle ut (51 m) and a triangle half a t squared (69 m). Four cards list the equations and which variable each leaves out." loading="lazy">
  <figcaption>The area under a v-t graph for constant acceleration gives s = ut + half a t squared; each suvat equation omits one variable.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--05-horizontal-launch.webp" width="900" height="1210" alt="A ball thrown horizontally at 14 m/s from a 45 m cliff and a ball dropped at the same moment are shown every 0.5 s: always at the same height, landing together after 3.03 s. The thrown ball covers 7.0 m sideways each interval. It lands 42 m away at 33 m/s, 65 degrees below horizontal." loading="lazy">
  <figcaption>The horizontal and vertical motions are independent and share only the time.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--06-angled-projectile.webp" width="900" height="880" alt="A ball launched at 28 m/s, 35 degrees, has vx = 22.9 and vy = 16.1 m/s, flight time 3.27 s, range 75 m and maximum height 13.1 m. At the top the velocity is the horizontal component only and the acceleration is still g downwards." loading="lazy">
  <figcaption>At the top vertical velocity is zero but the speed equals vx and the acceleration is still g.</figcaption>
</figure>


## Common mistakes

- **Mixing up "distance" and "displacement," or "speed" and "velocity," when a
question explicitly distinguishes them** — a returning journey has non-zero
distance but can have zero displacement.
- **Reading a velocity–time graph's gradient when displacement is asked for
(or vice versa)** — gradient gives velocity or acceleration; area gives
displacement.
- **Forgetting that free fall without air resistance means constant
acceleration, so all four equations of motion apply directly** — with air
resistance present, they don't (see the next topic, Dynamics, for terminal
velocity).
- **Treating the horizontal and vertical components of motion as dependent on
each other**, when the syllabus explicitly treats them as independent
directions that are only combined at the end if needed.

## Quick revision checklist

- Distance vs. displacement, speed vs. velocity (scalar/vector pairs)
- Reading gradient and area from displacement–time and velocity–time graphs
- The four equations of uniformly accelerated motion, and deriving the first
from the definitions of velocity and acceleration
- Applying the equations to free fall (u = 0, a = g)
- An experimental method to determine g
- Treating perpendicular uniform-velocity and uniform-acceleration motions
independently

## Frequently asked questions

**What are the equations of uniformly accelerated motion?**
The four equations are v = u + at, s = ut + ½at², v² = u² + 2as and s = ½(u + v)t. They apply only to uniformly accelerated motion in a straight line.

**What does the area under a velocity-time graph show?**
The area under a velocity-time graph gives the displacement, as a signed area, and the gradient gives the acceleration. For total distance when the velocity changes sign, add the magnitudes of the areas above and below the axis.

**Do you need to derive the suvat equations for Cambridge 9702?**
Yes. Cambridge 9702 requires you to derive the equations of uniformly accelerated motion from the definitions of velocity and acceleration, not just recall them.

**How do you determine g experimentally?**
Drop an object from rest through a measured height and time the fall electronically, for example with a light gate. Rearrange s = ½gt² to g = 2s/t², and repeat the drops and average t to reduce random error.

## Related resources

- [Physical Quantities, Units and Measurement](/resources/as-physics-physical-quantities-units-and-measurement/) — the vector resolution this topic builds on
- [Dynamics: Newton's Laws and Momentum](/resources/as-physics-dynamics-newtons-laws-and-momentum/) — the next AS topic, connecting motion to force
- [Cambridge AS & A Level Physics hub](/boards/cambridge/a-level/physics/)

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027
series. Always check the current syllabus for your examination year.*

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--08-terminal-speed.webp" width="900" height="1020" alt="A speed-time graph for an 80 kg skydiver starts with gradient g and flattens at about 55 m/s. Force diagrams show A: drag 0, a = 9.81; B: drag 500 N, a = 3.56 m/s squared; C: drag = weight = 785 N, a = 0." loading="lazy">
  <figcaption>At terminal speed drag equals weight, the resultant force is zero and the speed is constant.</figcaption>
</figure>
