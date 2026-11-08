---
title: "Kinematics: Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["ib"]
topic: "Topic A – Space, Time and Motion (A.1)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-a"
description: "Condensed recall notes on kinematics (topic A.1), common to both SL and HL, for IB Diploma Programme Physics."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
reviewedDate: 2026-09-29
publishedDate: 2026-08-26
featured: false
---

Condensed for the final weeks, covering topic A.1, which is **common to both SL and HL** — the
syllabus adds no separate higher-level content or extensions to this topic. For the full
syllabus, use the
[IB DP Physics syllabus guide](/resources/ib-dp-physics-syllabus-guide/).

## Core quantities

| Quantity | Vector/scalar | Definition |
|---|---|---|
| Distance | Scalar | Total path length travelled |
| Displacement | Vector | Straight-line change in position, with direction |
| Speed | Scalar | Distance ÷ time |
| Velocity | Vector | Displacement ÷ time |
| Acceleration | Vector | Rate of change of velocity |

## The SUVAT equations (constant acceleration)

```
v = u + at
s = ut + 1/2 at^2
v^2 = u^2 + 2as
s = 1/2 (u + v) t
```
Where: s = displacement, u = initial velocity, v = final velocity, a = acceleration, t = time.
These four equations only hold for **constant acceleration** — check a question isn't describing
changing acceleration before reaching for SUVAT automatically.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-kinematics--03-four-suvat-equations.webp" width="900" height="930" alt="A car speeds up from 8 to 20 m/s in 6 s, covering 84 m at 2 m/s squared. Four cards check each SUVAT equation with these numbers and show which variable each leaves out." loading="lazy">
  <figcaption>Each SUVAT equation leaves out one of s, u, v, a, t, so choose the one that omits the unknown.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-kinematics--05-when-suvat-applies.webp" width="900" height="1060" alt="A straight v-t line has gradient 2 m/s squared everywhere, so SUVAT applies. A curved v-t graph has tangents of different steepness (a = 3.9 then 0.68), so acceleration changes and SUVAT fails." loading="lazy">
  <figcaption>SUVAT needs a straight-line velocity-time graph (constant acceleration).</figcaption>
</figure>


## Graphs

- **Displacement-time graph:** gradient = velocity.
- **Velocity-time graph:** gradient = acceleration; **area under the graph = displacement**.
- A curved displacement-time graph shows changing velocity (i.e. acceleration is present).
- A curved velocity-time graph shows changing acceleration — non-uniform acceleration, which the
  standard SUVAT equations (derived for *constant* acceleration only) cannot be applied to directly.
- For a velocity-time graph with a curve rather than a straight line, finding the area (displacement)
  requires estimating the area under the curve, since it is no longer a simple triangle or rectangle.

## Vectors versus scalars in practice

The distinction in the table above is not just definitional — it determines which equations you
can use and how you must handle direction. A common error is substituting a distance or speed value
(scalars) into a SUVAT equation, which strictly requires displacement and velocity (vectors). This
matters especially in problems involving a change of direction: an object thrown upward and caught
again has travelled a distance equal to twice its maximum height, but its displacement — if caught
at the same point it was thrown from — is zero. Always identify which of the two the question is
actually asking for before substituting into an equation.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-kinematics--04-motion-graphs-together.webp" width="900" height="960" alt="One journey drawn as aligned s-t and v-t graphs: speeding up (curve, a = +2), steady 6 m/s (straight line, gradient 18 m / 3 s), slowing (a = -3). The areas 9, 18 and 6 m total 33 m, the end of the s-t graph." loading="lazy">
  <figcaption>Gradient of s-t is velocity; area under v-t is displacement.</figcaption>
</figure>


## Projectile motion

Horizontal and vertical motion are **independent**. Horizontal velocity is constant (ignoring air
resistance); vertical motion is uniformly accelerated by g. Solve each direction separately using
SUVAT, then combine.

**Worked example:** A ball is thrown horizontally from a cliff top at 12 m/s and lands 2.4 s
later. Find the height of the cliff.

Only the vertical direction matters here, since the ball has no initial vertical velocity:
s = ut + ½at², with u = 0.
s = 0 + ½ × 9.81 × 2.4² = ½ × 9.81 × 5.76 = **28.3 m**.

The horizontal speed (12 m/s) is irrelevant to this particular question — it would only be needed
to find the horizontal distance travelled, a separate calculation using s = vt in the horizontal
direction. Keeping the two directions in entirely separate working, rather than mixing values from
one into the other's equation, is the single most common source of error in this topic.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-kinematics--06-horizontal-launch.webp" width="900" height="922" alt="A ball thrown horizontally at 12 m/s lands 2.4 s later; dots every 0.4 s show constant horizontal velocity and a growing downward velocity. Vertical motion alone gives h = 28.3 m; horizontal distance is 28.8 m." loading="lazy">
  <figcaption>Horizontal and vertical motion are independent: use the vertical motion for the height and s = vt horizontally for the distance.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-kinematics--07-angled-launch.webp" width="900" height="680" alt="A ball launched at 25 m/s at 50 degrees has vx = 16.1 and vy = 19.1 m/s, flight time 3.90 s, range 62.7 m and maximum height 18.7 m. At the top vy is zero, the speed is vx and the acceleration is still 9.81 m/s squared downwards." loading="lazy">
  <figcaption>Resolve the launch velocity, treat the components separately, and remember acceleration is g all the way.</figcaption>
</figure>


## Where kinematics fits in the wider syllabus

Kinematics (A.1) is the first topic of Theme A – Space, Time and Motion, and it establishes the
vocabulary — displacement, velocity, acceleration — that the rest of Theme A and later themes
build on directly. A.2 (Forces and momentum) immediately extends kinematics by asking *what
causes* acceleration, introducing Newton's laws and momentum on top of the SUVAT toolkit covered
here. Without a secure grip on the distinction between scalar and vector quantities established in
kinematics, force and momentum calculations in A.2 become far harder, since forces and momentum are
themselves vectors and inherit the same sign-convention discipline.

## Exam traps

- Using distance/speed values in a SUVAT equation that requires displacement/velocity (vectors), losing sign/direction information.
- Forgetting that gradient of a velocity-time graph gives acceleration, not velocity.
- Treating projectile motion's horizontal and vertical components as connected, when they must be solved independently.
- Sign errors — set a consistent positive direction before starting and stick to it throughout.

## Self-test

1. What does the area under a velocity-time graph represent?
2. State the SUVAT equation that doesn't involve time.
3. Why are horizontal and vertical motion solved separately in projectile problems?
4. What's the key difference between distance and displacement?

**Answers:** 1. Displacement. 2. v² = u² + 2as. 3. Because horizontal and vertical motion are independent of each other — horizontal velocity stays constant (no horizontal force, ignoring air resistance) while vertical motion is uniformly accelerated by gravity, so they must be treated as two separate SUVAT problems. 4. Distance is a scalar (total path length); displacement is a vector (straight-line change in position with direction).

5. A ball is thrown horizontally from a cliff at 12 m/s and lands 2.4 s later. What is the height of the cliff?
6. Why does kinematics matter for understanding A.2 (Forces and momentum)?

**Answers (continued):** 5. Using s = ut + ½at² with u = 0 (vertical direction only): s = ½ × 9.81 × 2.4² = **28.3 m**. 6. Forces and momentum are themselves vector quantities, and A.2 builds directly on kinematics' vocabulary and sign-convention discipline (displacement, velocity, acceleration) to explain what causes the motion kinematics describes.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-kinematics--01-distance-vs-displacement.webp" width="900" height="850" alt="A ball is thrown up 5.0 m and caught where it started. The distance is 10 m and the average speed 4.95 m/s (scalars); taking up as positive, the displacement is +5.0 minus 5.0 = 0, so the displacement and average velocity are zero (vectors)." loading="lazy">
  <figcaption>Distance and speed are scalars; displacement and velocity are vectors and can be zero for a return journey.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-kinematics--02-signs-in-vertical-motion.webp" width="900" height="1010" alt="The v-t graph of the thrown ball is one straight line from +9.9 to -9.9 m/s, gradient -9.81 m/s squared throughout, even at the top. Area above the axis is +5.0 m and below is -5.0 m, so total displacement is zero." loading="lazy">
  <figcaption>With up positive the ball has a negative acceleration all the time, and signed areas give displacement.</figcaption>
</figure>

## Frequently asked questions

**Is there HL-only content in IB DP Physics A.1 Kinematics?**
No. Topic A.1 is common to both SL and HL, and the syllabus adds no separate higher level content or extensions.

**Can SUVAT be used when acceleration is changing?**
No. The four SUVAT equations hold only for constant acceleration. For a curved velocity-time graph, use the gradient and estimate the area under the curve instead.

**Why should distance not be substituted into SUVAT equations?**
SUVAT needs displacement and velocity, which are vectors. A ball thrown up and caught at the same point travels twice its maximum height, but its displacement is zero.

**How does kinematics link to A.2 Forces and momentum?**
A.2 extends kinematics by asking what causes acceleration, adding Newton's laws and momentum. Forces and momentum are vectors, so they rely on the same sign conventions.

## Official syllabus

International Baccalaureate Organization, Physics guide (Diploma Programme), first assessment 2025.
