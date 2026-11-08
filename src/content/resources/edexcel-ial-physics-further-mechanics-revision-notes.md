---
title: "Edexcel IAL Physics: Further Mechanics — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Unit 4: Further Mechanics, Fields and Particles"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 4.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-4-further-mechanics-fields-and-particles"
    subtopic: "further-mechanics"
description: "Condensed recall notes on momentum in two dimensions, circular motion and centripetal force for Edexcel International A Level Physics YPH11 (Unit 4, WPH14)."
author: "iftikhar-azeemi"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Further Mechanics study guide](/resources/edexcel-ial-physics-further-mechanics/).

## Momentum in two dimensions

Momentum is a vector, so it is conserved **independently in each perpendicular direction**. Resolve into x and y, apply conservation separately, then recombine.

```
p = mv        impulse = Ft = delta-p
```

**Elastic** collisions conserve kinetic energy; **inelastic** do not. Momentum is conserved in both.

For a perfectly elastic collision, the **relative speed of approach equals the relative speed of separation** — a useful shortcut that avoids simultaneous equations.

**Ek = p²/2m** is a useful form of the kinetic energy equation when momentum, rather than velocity, is known directly — handy for checking whether a collision is elastic without first converting every momentum back to a velocity.

**CORE PRACTICAL 9** investigates the relationship between force and change of momentum. **CORE PRACTICAL 10** uses ICT (e.g. video analysis software) to analyse collisions between small spheres such as ball bearings on a table top — the standard practical basis for two-dimensional momentum questions.

```
Worked example: a 0.15 kg ball moving at 8.0 m/s collides head-on with a
stationary 0.25 kg ball. After the collision the first ball rebounds at
2.0 m/s. Find the velocity of the second ball, and state whether the
collision is elastic.

Momentum:    (0.15 x 8.0) = (0.15 x -2.0) + (0.25 x v)
             1.2 = -0.30 + 0.25v  ->  v = 6.0 m/s

KE before:   0.5 x 0.15 x 8.0^2 = 4.8 J
KE after:    0.5 x 0.15 x 2.0^2 + 0.5 x 0.25 x 6.0^2 = 0.3 + 4.5 = 4.8 J
             Kinetic energy conserved -> ELASTIC
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--05-momentum-change.webp" width="900" height="1090" alt="A ball hits a wall at 32 m s-1 and rebounds at 24 m s-1. Taking towards the wall as positive, the initial momentum is +1.824 and the final is -1.368 kg m s-1, so the change is -3.192. The velocity change is 56 m s-1, not 8. Over 4.5 ms the average force is 709 N away from the wall." loading="lazy">
  <figcaption>Because momentum is a vector, a rebound changes it by the sum of the two sizes, and F = Δp/Δt gives the force.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--06-impulse-area.webp" width="900" height="1140" alt="Two force-time graphs. A triangle rising to 800 N at 6 ms and falling to zero at 18 ms has area 7.2 N s, so a 0.16 kg ball leaves at 45 m s-1. Readings at 2 ms intervals are estimated with trapezium strips as 0.0020 x 1630 = 3.26 N s, about 20 m s-1." loading="lazy">
  <figcaption>Impulse is the area under a force-time graph; use exact shapes for straight lines and strips for a curve.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--07-collisions-1d.webp" width="900" height="1240" alt="Two one-dimensional collisions with bar charts. Gliders sticking together keep momentum 0.378 kg m s-1 but kinetic energy falls from 0.170 J to 0.102 J. Elastic trolleys keep both momentum (1.44) and kinetic energy (1.728 J), and the speeds of approach and separation are both 2.4 m s-1." loading="lazy">
  <figcaption>Momentum is conserved in both kinds of collision; kinetic energy is conserved only if the collision is perfectly elastic.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--08-collision-2d.webp" width="900" height="1110" alt="A 0.16 kg puck at 5.0 m s-1 hits a stationary 0.24 kg puck. The first leaves at 3.0 m s-1 at 35 degrees; the second leaves at 2.0 m s-1 at 34 degrees on the other side. A to-scale momentum triangle closes on the original 0.80 kg m s-1. Kinetic energy falls from 2.0 J to 1.22 J, so it is inelastic." loading="lazy">
  <figcaption>Momentum is conserved on each axis, so the two final momenta add as vectors to the initial momentum.</figcaption>
</figure>


## Circular motion

```
omega = theta / t = 2 pi / T = 2 pi f       rad s^-1
v = r omega
a = v^2 / r = r omega^2
F = m v^2 / r = m r omega^2
```

**Angles must be in radians.**

**Centripetal force is not a new force.** It is the *resultant* of the real forces already present — tension, gravity, friction, normal contact, or magnetic force. Adding it as an extra arrow on a free-body diagram is the standard error.

| Situation | Provided by |
|---|---|
| Ball on a string | Tension |
| Car on a flat bend | Friction |
| Planet in orbit | Gravitational attraction |
| Charged particle in a magnetic field | Magnetic force BQv |
| Car on a banked track | Horizontal component of the normal force |

**Why there is acceleration at constant speed:** velocity is a vector, and its direction changes continuously, so the velocity changes even though the speed does not.

The force is always **perpendicular to the velocity**, so it does **no work** and kinetic energy is constant.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--01-slope-forces.webp" width="900" height="840" alt="Free-body diagram of a 12 kg block on a 25 degree slope with arrows to scale. Weight 118 N acts down, the normal contact force 107 N is perpendicular to the slope and friction 18 N acts up the slope. Weight is resolved into mg sin 25 = 49.8 N down the slope and mg cos 25 = 107 N into it, giving a net 31.8 N and a = 2.6 m s-2." loading="lazy">
  <figcaption>The normal force is perpendicular to the slope, and the weight splits into components along and into it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--02-third-law-pairs.webp" width="900" height="1090" alt="Two third-law pairs for a book on a table: Earth pulls book with book pulls Earth, and table pushes book with book pushes table. A pair is the same kind of force, equal and opposite, on different bodies. Weight and the normal force both act on the book, so they are not a pair." loading="lazy">
  <figcaption>Third-law pairs act on different bodies; weight and the normal contact force act on one body and are not a pair.</figcaption>
</figure>


## Vertical circles

```
top:     T + mg = mv^2/r    ->   T = mv^2/r - mg
bottom:  T - mg = mv^2/r    ->   T = mv^2/r + mg
```

Tension is **greatest at the bottom** and least at the top. Subtracting the two boxed equations gives a difference of **2mg only when the same speed v is substituted into both** — a common simplification, not the real situation. In an actual vertical circle the object is faster at the bottom than at the top, and if energy is conserved, v_bottom^2 exceeds v_top^2 by 4gr (from ½mv_bottom^2 = ½mv_top^2 + mg(2r)). Substituting this back shows the true difference between the bottom and top tensions is **6mg**, not 2mg.

**Minimum speed at the top** is when T = 0 and gravity alone supplies the centripetal force:

```
mg = mv^2/r    ->    v_min = sqrt(gr)
```

Below this the object leaves the circular path.

## Exam traps

- Drawing centripetal force as an additional force rather than identifying its source.
- Using degrees instead of radians.
- Saying there is no acceleration because speed is constant.
- Claiming centripetal force does work.
- Forgetting that at the top of a vertical circle *both* tension and weight act towards the centre.
- Failing to resolve momentum into components in a two-dimensional collision.
- Converting every momentum back to a velocity before checking kinetic energy, when Ek = p²/2m gives the answer directly from momentum and mass alone.
- Confusing what each core practical investigates: Core Practical 9 is force and momentum change; Core Practical 10 is two-dimensional collision analysis by video.

## Self-test

1. How is momentum conserved in a two-dimensional collision?
2. Give the two expressions for centripetal acceleration.
3. Why is an object in uniform circular motion accelerating?
4. Why does the centripetal force do no work?
5. Derive the minimum speed at the top of a vertical circle.
6. Write the kinetic energy equation in terms of momentum, and state when this form is most useful.
7. A 0.20 kg ball moving at 5.0 m/s collides with a stationary 0.30 kg ball; after the collision the first ball moves at 1.0 m/s in the same direction. Find the second ball's velocity and state whether the collision is elastic.

**Answers:** 1. It is conserved independently in each of two perpendicular directions, so resolve into components and apply conservation to each separately. 2. a = v²/r and a = rω². 3. Velocity is a vector whose direction is continuously changing, so the velocity changes even at constant speed. 4. It acts perpendicular to the direction of motion, and work requires a component of force along the displacement. 5. At minimum speed the tension is zero, so weight alone provides the centripetal force: mg = mv²/r, giving v = √(gr). 6. Ek = p²/2m; most useful when momentum, rather than velocity, is already known. 7. Momentum: (0.20 × 5.0) = (0.20 × 1.0) + (0.30 × v) → 1.0 = 0.20 + 0.30v → v = 2.67 m/s. KE before = ½(0.20)(5.0)² = 2.5 J; KE after = ½(0.20)(1.0)² + ½(0.30)(2.67)² ≈ 0.1 + 1.07 = 1.17 J — kinetic energy is not conserved, so the collision is **inelastic**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--03-lift-tension.webp" width="900" height="900" alt="Three free-body diagrams of a 640 kg lift to one scale. Accelerating upward the tension is 7.0 kN, at constant speed 6.3 kN, and decelerating while moving up 5.5 kN, always against a weight of 6.3 kN. Net force is 0.77 kN up, zero, and 0.77 kN down." loading="lazy">
  <figcaption>Tension is larger than weight when acceleration is upward and smaller when it is downward, T = m(g + a).</figcaption>
</figure>

## Frequently asked questions

**What is the tension at the top and bottom of a vertical circle?**
At the top, T = mv²/r − mg; at the bottom, T = mv²/r + mg, so tension is greatest at the bottom. If energy is conserved the object is faster at the bottom, and the tensions differ by 6mg rather than 2mg.

**What is the minimum speed at the top of a vertical circle?**
At the minimum speed the tension is zero and weight alone provides the centripetal force, so mg = mv²/r and v_min = √(gr).

**What provides the centripetal force in common situations?**
Tension provides it for a ball on a string, friction for a car on a flat bend, gravitational attraction for a planet in orbit, and the magnetic force BQv for a charged particle in a magnetic field.

**What is the difference between Core Practicals 9 and 10?**
Core Practical 9 investigates the relationship between force and change of momentum. Core Practical 10 uses ICT, such as video analysis, to analyse collisions between small spheres.
