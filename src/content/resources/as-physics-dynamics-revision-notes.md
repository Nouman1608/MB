---
title: "AS Physics: Dynamics, Newton Laws and Momentum — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Dynamics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 3.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "as-dynamics"
    subtopic: "as-momentum-and-newtons-laws-of-motion"
  - qualification: "a-level"
    topic: "as-dynamics"
    subtopic: "as-non-uniform-motion"
  - qualification: "a-level"
    topic: "as-dynamics"
    subtopic: "as-linear-momentum-and-its-conservation"
description: "Condensed recall notes on Newton three laws, momentum, impulse and collisions for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Dynamics study guide](/resources/as-physics-dynamics-newtons-laws-and-momentum/).

## Newton's laws

**First law** — an object stays at rest or moves at constant velocity unless acted on by a **resultant** force.

**Second law** — the rate of change of momentum is proportional to the resultant force and occurs in its direction:

```
F = delta-p / delta-t      which reduces to  F = ma  only when mass is constant
```

**Stating the second law as F = ma is incomplete.** The momentum form is the general one, and it is required for problems involving changing mass, such as sand falling onto a conveyor. **Caution with a rocket burning fuel:** naively differentiating F = Δ(mv)/Δt using only the rocket's own changing mass and velocity is a common mistake, because it omits the momentum carried away by the ejected exhaust gas — the thrust actually depends on the rate at which mass is ejected and the exhaust's velocity relative to the rocket, found by applying conservation of momentum to the rocket-plus-exhaust system, not by differentiating the rocket's momentum alone. Acceleration and resultant force always act in the **same direction** — a useful check when resolving forces in more than one dimension.

**Third law** — for every force there is an equal and opposite force. The pair must act on **two different bodies** and be of the **same type**. Weight and normal contact force on a book are *not* a third-law pair — they act on the same body.

**Weight is not mass.** Weight = mg is the gravitational force on a mass, and depends on the local gravitational field; mass is constant wherever the object is.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--02-third-law-pairs.webp" width="900" height="1090" alt="Two third-law pairs for a book on a table: Earth pulls book with book pulls Earth, and table pushes book with book pushes table. A pair is the same kind of force, equal and opposite, on different bodies. Weight and the normal force both act on the book, so they are not a pair." loading="lazy">
  <figcaption>Third-law pairs act on different bodies; weight and the normal contact force act on one body and are not a pair.</figcaption>
</figure>


## Non-uniform motion and terminal velocity

Without air resistance, a falling object accelerates uniformly at g. With air resistance present, drag **increases as speed increases**, so the resultant force — and therefore the acceleration — **decreases** as the object speeds up. Eventually drag equals weight, resultant force is zero, and the object falls at a constant **terminal velocity**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--04-terminal-velocity.webp" width="900" height="1130" alt="A velocity-time graph for a faller computed from a drag-squared model, with points A to E and matching free-body diagrams. Drag grows from zero until it equals the weight at terminal velocity (40 m s-1), then the parachute opens, drag exceeds weight and the speed falls to a smaller terminal velocity (8 m s-1) where drag again equals weight." loading="lazy">
  <figcaption>Acceleration falls to zero as drag grows to equal weight; opening a parachute gives a new, smaller terminal velocity.</figcaption>
</figure>


## Momentum and impulse

```
p = mv                    kg m s^-1
impulse = F t = delta-p   N s
```

**Impulse is the area under a force–time graph.**

This explains safety features directly: a crumple zone, airbag or crash mat **increases the time** over which a given momentum change occurs, so by `F = Δp/Δt` the **average force is reduced**. For the standard exam scenario — comparing the same collision (same initial and final speeds) with and without the safety feature — the momentum change is unchanged and only the time varies; this is a simplification, since real crumple zones and airbags can also affect the rebound and final speed of the occupants, not just the collision time, but "longer time, same Δp, smaller force" is the relationship you are expected to apply. Answers that say the airbag "absorbs the force" score nothing.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-dynamics-revision-notes--02-crumple-force-time.webp" width="900" height="850" alt="Force-time graph with two triangles of equal area 980 N s. The rigid stop lasts 0.05 s and peaks at 39 kN; the crumple zone lasts 0.15 s and peaks at 13 kN. Average forces are 19.6 kN and 6.5 kN." loading="lazy">
  <figcaption>Same momentum change over a longer time means a smaller force.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--05-momentum-change.webp" width="900" height="1090" alt="A ball hits a wall at 32 m s-1 and rebounds at 24 m s-1. Taking towards the wall as positive, the initial momentum is +1.824 and the final is -1.368 kg m s-1, so the change is -3.192. The velocity change is 56 m s-1, not 8. Over 4.5 ms the average force is 709 N away from the wall." loading="lazy">
  <figcaption>Because momentum is a vector, a rebound changes it by the sum of the two sizes, and F = Δp/Δt gives the force.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--06-impulse-area.webp" width="900" height="1140" alt="Two force-time graphs. A triangle rising to 800 N at 6 ms and falling to zero at 18 ms has area 7.2 N s, so a 0.16 kg ball leaves at 45 m s-1. Readings at 2 ms intervals are estimated with trapezium strips as 0.0020 x 1630 = 3.26 N s, about 20 m s-1." loading="lazy">
  <figcaption>Impulse is the area under a force-time graph; use exact shapes for straight lines and strips for a curve.</figcaption>
</figure>


## Conservation of momentum

> In a closed system with no external resultant force, total momentum before = total momentum after.

**Momentum is a vector** — assign a positive direction and treat opposite motion as negative. This is the single biggest source of lost marks in collision calculations.

| Collision | Momentum | Kinetic energy |
|---|---|---|
| **Elastic** | Conserved | **Conserved** |
| **Inelastic** | Conserved | **Not conserved** |
| **Perfectly inelastic** | Conserved | Not conserved; objects stick together |

**Momentum is always conserved; kinetic energy is not.** In an inelastic collision the "lost" kinetic energy becomes thermal energy, sound and deformation — it is not destroyed.

For a **perfectly elastic** collision, relative speed of approach equals relative speed of separation.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-dynamics-revision-notes--03-trolleys-stick.webp" width="900" height="1000" alt="A 2.0 kg trolley at 3.0 m/s sticks to a stationary 1.0 kg trolley and both move at 2.0 m/s. Momentum is 6.0 kg m/s before and after. Kinetic energy falls from 9.0 J to 6.0 J, the 3.0 J lost to heat and sound." loading="lazy">
  <figcaption>Momentum is kept at 6.0 kg m/s; 3.0 J of kinetic energy is lost.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--07-collisions-1d.webp" width="900" height="1240" alt="Two one-dimensional collisions with bar charts. Gliders sticking together keep momentum 0.378 kg m s-1 but kinetic energy falls from 0.170 J to 0.102 J. Elastic trolleys keep both momentum (1.44) and kinetic energy (1.728 J), and the speeds of approach and separation are both 2.4 m s-1." loading="lazy">
  <figcaption>Momentum is conserved in both kinds of collision; kinetic energy is conserved only if the collision is perfectly elastic.</figcaption>
</figure>


## Explosions

Momentum before is zero, so momentum after must total zero — the fragments move in opposite directions with equal and opposite momenta. Kinetic energy *increases*, supplied by chemical or elastic potential energy.

**Worked example.** A 2.0 kg trolley moving at 3.0 m s⁻¹ collides with a stationary 1.0 kg trolley and they stick together. By conservation of momentum: (2.0 × 3.0) + (1.0 × 0) = (2.0 + 1.0)v, so v = 2.0 m s⁻¹. KE before = ½ × 2.0 × 3.0² = 9.0 J; KE after = ½ × 3.0 × 2.0² = 6.0 J — the 3.0 J difference is lost to heat and sound, confirming a perfectly inelastic collision.

## Exam traps

- Quoting F = ma as Newton's second law without the momentum form.
- Identifying weight and normal contact force as a third-law pair.
- Ignoring the vector nature of momentum in a collision.
- Saying kinetic energy is conserved in all collisions.
- Explaining an airbag as "absorbing force" rather than extending the time.
- Forgetting that the resultant force is what matters in the first law.

## Self-test

1. State Newton's second law properly, and say when F = ma is valid.
2. Give the two conditions for a third-law force pair.
3. How does a crumple zone reduce the force in a crash?
4. Which quantity is conserved in all collisions, and which is not?
5. What happens to the "lost" kinetic energy in an inelastic collision?
6. Explain why a falling skydiver eventually reaches a constant velocity.
7. Distinguish between weight and mass.

**Answers:** 1. The rate of change of momentum is proportional to the resultant force and acts in its direction; F = ma follows only when mass is constant. 2. The two forces act on different bodies and are of the same type. 3. It increases the time over which the momentum change occurs, and since force equals rate of change of momentum, a longer time gives a smaller force. 4. Momentum is always conserved; kinetic energy is conserved only in elastic collisions. 5. It is transferred to thermal energy, sound and the work done deforming the objects. 6. As speed increases, air resistance (drag) increases, reducing the resultant force and acceleration, until drag equals weight and the resultant force is zero — the object then falls at a constant terminal velocity. 7. Weight is the gravitational force on a mass (weight = mg) and depends on the local gravitational field; mass is the amount of matter in an object and is constant everywhere.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-dynamics-revision-notes--01-explosion.webp" width="900" height="1070" alt="Two trolleys of 1.0 kg and 3.0 kg start at rest with a compressed spring between them. After release they move apart at 3.0 and 1.0 m/s. Momenta are -3.0 and +3.0 kg m/s so the total stays zero, while kinetic energy rises from 0 to 6.0 J." loading="lazy">
  <figcaption>Explosion: equal and opposite momenta, but kinetic energy increases.</figcaption>
</figure>

## Frequently asked questions

**What are the conditions for a Newton's third law pair?**
The two forces must act on two different bodies and be of the same type. Weight and the normal contact force on a book are not a pair, because they act on the same body.

**What is impulse?**
Impulse is force multiplied by the time it acts, Ft, and equals the change in momentum. It is the area under a force-time graph, measured in N s.

**How do crumple zones and airbags reduce force?**
They increase the time over which a given momentum change happens, so by F = Δp/Δt the average force is smaller. Saying the airbag "absorbs the force" scores nothing.

**What happens to kinetic energy lost in an inelastic collision?**
It is not destroyed but transferred to thermal energy, sound and the work done deforming the objects. Momentum is still conserved.
