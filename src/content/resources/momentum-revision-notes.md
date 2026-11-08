---
title: "Momentum: Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["o-levels"]
topic: "Motion, forces and energy"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["5054"]
syllabusSeries: "2026-2028"
order: 1.6
syllabusTopics:
  - qualification: "o-level"
    topic: "motion-forces-and-energy"
    subtopic: "momentum"
description: "Condensed recall notes on momentum, impulse and conservation of momentum in collisions for Cambridge O Level Physics 5054."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Momentum study guide](/resources/momentum/).

## Definitions and equations

```
momentum   p = m v          kg m/s   -- a VECTOR
impulse    F t = m v - m u  N s      -- change in momentum
force      F = (m v - m u) / t       -- Newton's second law, full form
```

Momentum is a **vector**: direction matters. Assign one direction positive and stick to it throughout — the commonest source of error in this topic.

## Conservation of momentum

> In a closed system with no external forces, **total momentum before = total momentum after**.

The principle assumes **no significant external force during the event** — it cannot be applied, for example, to a trolley slowed by friction over a long time, since friction is an external force acting throughout.

```
m1 u1  +  m2 u2   =   m1 v1  +  m2 v2
```

Applies to **all** collisions and explosions, elastic or not.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/momentum--01-momentum-vector.webp" width="900" height="720" alt="A 1200 kg car at 15 m/s to the right has momentum 18000 kg m/s to the right, drawn as a long arrow. The same car going left has velocity and momentum with a minus sign." loading="lazy">
  <figcaption>Momentum p = mv is a vector: it points the way the object moves.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/momentum--02-collision-stick.webp" width="900" height="780" alt="A 2 kg trolley at 3 m/s hits a stationary 1 kg trolley. Momentum before is 6 kg m/s, shown as a bar. After they stick, 3 kg moves at 2 m/s and the bar is the same length." loading="lazy">
  <figcaption>Total momentum before a collision equals total momentum after it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/momentum--03-explosion.webp" width="900" height="820" alt="A 5 kg object at rest splits into 2 kg at 6 m/s and 3 kg at minus 4 m/s. The +12 and -12 momentum bars cancel to a total of zero." loading="lazy">
  <figcaption>After an explosion the pieces move in opposite directions so total momentum is still zero.</figcaption>
</figure>


## The two collision types

| | Elastic | Inelastic |
|---|---|---|
| Momentum | Conserved | Conserved |
| Kinetic energy | **Conserved** | **Not** conserved |
| Objects | Bounce apart | Often stick together |

Momentum is conserved in **both**. Only kinetic energy distinguishes them — students routinely claim momentum is lost in an inelastic collision, which is wrong.

## Explosions

Total momentum before = **zero** (both at rest), so afterwards the momenta must be equal and opposite:

```
0 = m1 v1 + m2 v2      ->    m1 v1 = -m2 v2
```

This is recoil: a rifle and bullet, a rocket and exhaust gases, two skaters pushing apart.

**Worked example.** A 5 kg object at rest explodes into two parts. A 2 kg piece moves off at 6 m/s. Find the velocity of the remaining 3 kg piece.

```
momentum before = 0
momentum after = (2 x 6) + (3 x v) = 0
12 + 3v = 0
v = -4 m/s   (4 m/s in the opposite direction to the 2 kg piece)
```

The negative sign is doing real work: the two pieces must move in **opposite** directions for the total to remain zero.

## Worked examples

**Collision, sticking together:**
A 2 kg trolley at 3 m/s hits a stationary 4 kg trolley and they move off together.

```
before:  (2 x 3) + (4 x 0) = 6 kg m/s
after:   (2 + 4) x v = 6v

6v = 6   ->   v = 1 m/s
```

**Impulse:**
A 0.15 kg ball hits a wall at 12 m/s and rebounds at 8 m/s. Find the change in momentum.

```
Take towards the wall as positive:
initial = 0.15 x 12  = +1.8
final   = 0.15 x -8  = -1.2

change = -1.2 - 1.8 = -3.0 kg m/s   (magnitude 3.0 N s)
```

Note the sign change — forgetting it gives 0.6 instead of 3.0, and is the classic trap.

## Safety applications

Crumple zones, airbags, seatbelts, crash mats and gloves all **increase the time** over which momentum changes. Since `F = Δp / t`, a longer time means a **smaller force**, and therefore less injury.

`F = Δp/Δt` is equivalent to `F = ma` when mass is constant, since Δp = Δ(mv) = mΔv, giving F = mΔv/Δt = ma — the same law, just written in a form that also applies where mass itself changes.

## Exam traps

- Assign and keep a positive direction; a rebound reverses the sign.
- Momentum **is** conserved in inelastic collisions.
- Units: momentum kg m/s, impulse N s — numerically the same.
- "Objects stick together" means they share a common final velocity.
- In an explosion, total momentum before is zero, not "each object has zero momentum after".
- Forgetting the negative sign shows the two exploding pieces move in opposite directions.
- Applying conservation of momentum where a significant external force (such as friction over a long time) acts during the event.

## Self-test

1. State the principle of conservation of momentum.
2. Is momentum conserved in an inelastic collision?
3. A 1 kg ball at 5 m/s hits a stationary 4 kg ball; they move off together. Find their speed.
4. Why do airbags reduce injury?
5. A 0.2 kg ball hits a wall at 10 m/s and rebounds at 6 m/s. Find the impulse.
6. A 5 kg object at rest explodes into a 2 kg piece moving at 6 m/s and a 3 kg piece. Find the 3 kg piece's velocity.
7. Show that F = Δp/Δt is equivalent to F = ma for constant mass.

**Answers:** 1. In a closed system with no external forces, total momentum before a collision equals total momentum after. 2. Yes — momentum is always conserved; only kinetic energy is not. 3. (1×5) = 5 = (1+4)v → v = **1 m/s**. 4. They increase the time over which the passenger's momentum changes, so by F = Δp/t the force on the body is reduced. 5. Taking towards the wall as positive: (0.2×−6) − (0.2×10) = −1.2 − 2.0 = **−3.2 kg m/s**, magnitude 3.2 N s. 6. Momentum before = 0, so (2×6) + (3×v) = 0 → 12 + 3v = 0 → v = **−4 m/s** (4 m/s opposite to the 2 kg piece). 7. Δp = Δ(mv) = mΔv for constant m, so F = Δp/Δt = mΔv/Δt = **ma**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/momentum--04-head-on-signs.webp" width="900" height="790" alt="A 2 kg trolley at +3 m/s meets a 1 kg trolley at -3 m/s. Momenta +6 and -3 give +3 in total. Stuck together, 3v = +3 so v = +1 m/s to the right." loading="lazy">
  <figcaption>Pick a positive direction and treat motion the other way as negative.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/momentum--05-impulse-force-time.webp" width="900" height="940" alt="Two force-time graphs with the same momentum change of 900 kg m/s for a 60 kg person stopping from 15 m/s. A 0.05 s stop needs 18000 N; a 0.2 s airbag stop needs 4500 N. Both areas are 900 N s." loading="lazy">
  <figcaption>The same impulse over a longer time needs a smaller force.</figcaption>
</figure>

## Frequently asked questions

**Is momentum conserved in an inelastic collision?**
Yes. Momentum is conserved in both elastic and inelastic collisions; only kinetic energy distinguishes them. Claiming momentum is lost in an inelastic collision is a common error.

**What is the total momentum before an explosion?**
If the objects start at rest, the total momentum before is zero, so afterwards the pieces have equal and opposite momenta. This explains recoil, such as a rifle and bullet.

**What does "objects stick together" mean in a momentum question?**
It means the objects move off together with a common final velocity, so you use their combined mass after the collision.

**Is F = Δp / Δt the same as F = ma?**
Yes, when mass is constant: Δp = mΔv, so F = mΔv / Δt = ma. The momentum form also covers situations where mass changes, which O Level Physics 5054 does not require you to calculate.
