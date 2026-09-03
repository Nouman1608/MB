---
title: "A Level Physics: Circular Motion — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Motion in a circle"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 12.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-motion-in-a-circle"
    subtopic: "a-kinematics-of-uniform-circular-motion"
  - qualification: "a-level"
    topic: "a-motion-in-a-circle"
    subtopic: "a-centripetal-acceleration"
description: "Condensed recall notes on angular velocity, centripetal force and vertical circle problems for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the full weeks. For the full explanation, use the
[Motion in a Circle study guide](/resources/a-physics-motion-in-a-circle/),
and test yourself with the [practice questions](/resources/a-physics-circular-motion-practice/).

## Angular quantities

```
angular velocity   omega = theta / t = 2 pi / T = 2 pi f     rad s^-1
linear speed       v = r omega
```

Angles must be in **radians**: 2π rad = 360°, so 1 rad ≈ 57.3° — every formula on this page assumes radians, and switching a calculator to degree mode by mistake is the most common source of a wrong answer.

## Centripetal acceleration and force

```
a = v^2 / r  =  r omega^2
F = m v^2 / r  =  m r omega^2
```

**Both always directed towards the centre.**

The single most important idea: **centripetal force is not a new force.** It is the *resultant* of the real forces already acting — tension, gravity, friction, normal contact, magnetic force. Naming it as an extra arrow on a free-body diagram is wrong; identify which real force (or combination) is actually providing it instead.

| Situation | What provides the centripetal force |
|---|---|
| Ball on a string | Tension |
| Car on a flat bend | Friction between tyres and road |
| Planet in orbit | Gravitational attraction |
| Electron in a magnetic field | Magnetic force BQv |
| Car on a banked track | Horizontal component of the normal contact force |

## Banked tracks

On a **frictionless** banked track at angle θ, only two forces act: weight (down) and the normal contact force (perpendicular to the track surface). Resolving:

```
Vertical:    N cos(theta) = mg
Horizontal:  N sin(theta) = m v^2 / r

Dividing:    tan(theta) = v^2 / (r g)
```

**Worked example.** A track is banked at 20° and designed for cars travelling at 25 m/s. Find the radius it should be built to.

```
tan(20) = v^2 / (r g)
r = v^2 / (g tan(20)) = 25^2 / (9.81 x 0.364) = 625 / 3.57 = 175 m
```

At exactly this speed and radius, no friction is needed at all — friction only becomes necessary if the car's actual speed differs from the design speed.

## Why it accelerates at constant speed

Velocity is a **vector**, with both magnitude and direction. In circular motion the direction changes continuously, so velocity changes, so there is acceleration — even though the *speed* (the magnitude of velocity) stays constant throughout.

The force is perpendicular to velocity at every instant, therefore **no work is done** and kinetic energy is constant.

## Vertical circles — the two critical points

```
TOP:     T + mg = m v^2 / r      ->   T = m v^2 / r - mg
BOTTOM:  T - mg = m v^2 / r      ->   T = m v^2 / r + mg
```

Tension is **greatest at the bottom** and **least at the top**, differing by 2mg.

**Minimum speed at the top** occurs when T = 0 and gravity alone supplies the centripetal force:

```
mg = m v^2 / r      ->      v_min = sqrt(g r)
```

Below that speed the object leaves the circular path — the string would go slack, or the bucket of water would spill — because gravity alone is more than enough to provide the (now smaller) required centripetal force, so the path curves away from the intended circle.

## Exam traps

- Drawing centripetal force as an extra arrow instead of identifying the real force providing it.
- Using degrees where radians are required.
- Saying there is no acceleration because the speed is constant.
- Claiming the centripetal force does work — it never does.
- At the top of a vertical circle, forgetting that **both** tension and weight act downwards, towards the centre.
- Mixing v and ω in the same expression without converting.
- Forgetting that a banked-track derivation requires resolving the normal contact force into horizontal and vertical components, not just quoting the final tan θ formula.
- Assuming friction is always needed on a banked track — at exactly the design speed for a given angle and radius, none is required at all.

## Self-test

1. Give the two expressions for centripetal acceleration.
2. Why is an object in uniform circular motion accelerating?
3. What provides the centripetal force for a car on a flat bend?
4. Derive the minimum speed at the top of a vertical circle.
5. Where is the tension greatest in a vertical circle, and by how much does it differ from the minimum?
6. Derive the relationship between banking angle, speed and radius for a frictionless banked track.
7. A track is banked at 15° for cars travelling at 20 m/s. Find the design radius.

**Answers:** 1. a = v²/r and a = rω². 2. Velocity is a vector and its direction changes continuously, so the velocity changes even though the speed does not. 3. Friction between the tyres and the road surface. 4. At minimum speed the tension is zero, so weight alone supplies the centripetal force: mg = mv²/r, giving v = √(gr). 5. At the bottom; it exceeds the tension at the top by 2mg. 6. Resolving the normal contact force: N cos θ = mg (vertical) and N sin θ = mv²/r (horizontal); dividing gives tan θ = v²/(rg). 7. r = v² ÷ (g tan θ) = 20² ÷ (9.81 × tan 15°) = 400 ÷ (9.81 × 0.268) = **152 m**.
