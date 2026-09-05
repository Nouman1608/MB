---
title: "Forces and Momentum: Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["ib"]
topic: "Topic A – Space, Time and Motion (A.2)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 3
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-a"
    subtopic: "ib-dp-physics-a-2"
description: "Condensed SL/HL recall notes on Newton's laws, contact and field forces, momentum, impulse, collisions and circular motion, for sub-topic A.2 of IB Diploma Programme Physics."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

Condensed for the final weeks, covering sub-topic A.2 (identical content for SL and HL — there is no additional HL extension here). For the full syllabus, see the
[Forces and Momentum study guide](/resources/ib-dp-physics-forces-and-momentum/) and the
[IB DP Physics syllabus guide](/resources/ib-dp-physics-syllabus-guide/).

## Newton's laws and forces

State all three: **first law** — an object stays at rest/constant velocity unless a resultant force acts; **second law** — F = ma, or more generally **F = Δp/Δt** (applies even where mass changes); **third law** — every action force has an equal, opposite reaction force acting on a **different** body.

**Named contact forces:** normal force, friction (static Ff ≤ μsFN; dynamic Ff = μdFN), tension, elastic restoring force (Hooke's law, FH = −kx), viscous drag, buoyancy (Fb = ρVg). **Named field forces:** gravitational (Fg = mg), electric, magnetic.

## Momentum and impulse

```
p = mv                 (linear momentum)
J = F(delta t)          (impulse = force x time)
```

Momentum is **conserved** unless a resultant external force acts. Impulse **equals** the resulting change in momentum. For a rocket burning fuel, F = ma still applies to the rocket alone provided the thrust from the ejected exhaust is included as an external force; applying Δp/Δt to the rocket's own momentum without accounting for the exhaust's momentum is not a valid shortcut. The general open-system form (F_ext = Δp/Δt for a fixed collection of matter, or a momentum-flux balance for an open system such as the rocket) is only needed when the exhaust's momentum is tracked explicitly.

## Collisions

| Type | Kinetic energy | Momentum |
|---|---|---|
| Elastic | Conserved | Conserved |
| Inelastic | NOT conserved | Conserved |

Momentum is **always** conserved (no external resultant force); check the **kinetic energy** before and after to classify a collision as elastic or inelastic.

## Circular motion at constant speed

```
a = v^2/r = w^2 r = 4(pi)^2 r / T^2      (centripetal acceleration)
v = 2(pi)r/T = wr                          (linear/angular speed)
```

**Centripetal force is not a new, separate force** — it is whichever named force (tension, gravity, friction, normal force) provides the centre-directed resultant in a given scenario.

## Worked example: classifying a collision

A 2 kg trolley at 3 m/s collides with a stationary 1 kg trolley; afterwards they move together at 2 m/s.

```
Momentum before: (2)(3) + (1)(0) = 6 kg m/s
Momentum after:  (2+1)(2) = 6 kg m/s        -- conserved, as expected
KE before: 1/2(2)(3^2) = 9 J
KE after:  1/2(3)(2^2) = 6 J                -- KE fell 9 J -> 6 J
Conclusion: INELASTIC (kinetic energy not conserved; the trolleys
            coupling together and moving as one is itself a strong
            clue)
```

Two-step method: check momentum conservation first, then compare KE before and after — this reliably classifies any collision.

## Free-body diagrams

Represent every force acting on a body as a labelled arrow from a single point, with arrow length roughly proportional to force magnitude. Analyse in **one dimension** first (forces along a single line) before **two dimensions** (resolving forces into perpendicular components using trigonometry). The resultant force is what Newton's second law relates to F = ma or F = Δp/Δt — never a single individual force in isolation.

## Worked example: impulse and a change in momentum

A 0.5 kg ball moving at 4 m/s is struck by a bat and rebounds at 6 m/s in the opposite direction. The bat is in contact with the ball for 0.02 s. Find the average force exerted by the bat.

```
Step 1: define a positive direction (take the rebound direction as
        positive)
Step 2: momentum before = (0.5)(-4) = -2 kg m/s
        momentum after  = (0.5)(6)  = 3 kg m/s
Step 3: change in momentum, delta p = 3 - (-2) = 5 kg m/s
Step 4: impulse J = F(delta t) = delta p
        F = delta p / delta t = 5 / 0.02 = 250 N
```

Setting a consistent positive direction before starting, and treating the reversed velocity as negative, is essential here -- a sign error at step 2 is the most common way marks are lost on this style of question.

## Key terms

**Momentum** — mass × velocity, p = mv. **Impulse** — force × time, equal to the change in momentum produced. **Elastic collision** — kinetic energy is conserved. **Inelastic collision** — kinetic energy is not conserved (momentum still is). **Centripetal acceleration** — the acceleration directed toward the centre of a circular path, a = v²/r.

## Common mistakes

- Using F = ma where mass is changing, instead of F = Δp/Δt.
- Treating "centripetal force" as an additional force rather than naming the real force providing it.
- Assuming kinetic energy is conserved in every collision — only true for elastic collisions.
- Confusing static friction's inequality (Ff ≤ μsFN) with dynamic friction's equality (Ff = μdFN).

## Quick self-test

1. State Newton's second law in its more general, momentum form.
2. Name the six named contact forces in A.2.
3. Is momentum conserved in an inelastic collision? Is kinetic energy?
4. What determines whether a force is "the" centripetal force in a given scenario?
5. Give the formula for centripetal acceleration in terms of angular velocity.

**Answers:** 1. F = Δp/Δt. 2. Normal force, friction, tension, elastic restoring force (Hooke's law), viscous drag, and buoyancy — a contact force arising from the pressure difference a fluid exerts on the top and bottom of a submerged object, not a field force. 3. Momentum: yes, always conserved. Kinetic energy: no, only in elastic collisions. 4. Whichever named real force (tension, gravity, friction, normal force) is providing the centre-directed resultant in that specific scenario. 5. a = ω²r.

## Official syllabus

International Baccalaureate Organization, Physics guide (Diploma Programme), first assessment 2025, sub-topic A.2. Overview at
[ibo.org](https://www.ibo.org/en/programmes/diploma-programme/curriculum/sciences/physics/).
