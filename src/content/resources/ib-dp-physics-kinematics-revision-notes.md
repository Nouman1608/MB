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
description: "Condensed SL-level recall notes on kinematics (sub-topic A.1) for IB Diploma Programme Physics."
author: "marlbridge-academic-team"
publishedDate: 2026-08-26
featured: false
---

Condensed for the final weeks, covering the **SL-level** content of sub-topic A.1. For the full
syllabus, including HL-only extensions, use the
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

## Where kinematics fits in the wider syllabus

Kinematics (A.1) is the first sub-topic of Topic A – Space, Time and Motion, and it establishes the
vocabulary — displacement, velocity, acceleration — that the rest of Topic A and later topics
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

## Official syllabus

International Baccalaureate Organization, Physics guide (Diploma Programme), first assessment 2025. Marlbridge holds, or is in the process of obtaining, a formal license from the IB for commercial use of this guide.
