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
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Motion in a Circle study guide](/resources/a-physics-motion-in-a-circle/),
and test yourself with the [practice questions](/resources/a-physics-circular-motion-practice/).

## Angular quantities

```
angular velocity   omega = theta / t = 2 pi / T = 2 pi f     rad s^-1
linear speed       v = r omega
```

Angles must be in **radians**: 2π rad = 360°, so 1 rad ≈ 57.3° — every formula on this page assumes radians, and switching a calculator to degree mode by mistake is the most common source of a wrong answer.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--01-radian-omega-v.webp" width="900" height="1160" alt="A circle with a 1 radian sector: the arc along the edge is as long as the radius and the angle is about 57.3 degrees, with quarter, half and three-quarter turns marked as pi/2, pi, 3pi/2 and 2pi. Below, a turntable at 45 rpm has omega 4.71 rad/s everywhere; a point at 0.10 m moves at 0.47 m/s and a point at 0.20 m at 0.94 m/s, so v = omega r." loading="lazy">
  <figcaption>One radian is the angle whose arc equals the radius, and at the same ω a point further out moves faster.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-circular-motion-revision-notes--01-magnetic-force-circle.webp" width="900" height="915" alt="An electron moves clockwise in a circle in a uniform magnetic field pointing into the page, shown by crosses. At three positions the velocity is along the tangent and the magnetic force BQv is at right angles to it, pointing to the centre. This magnetic force is the centripetal force, so BQv = mv squared over r, and it does no work so the speed is constant." loading="lazy">
  <figcaption>The magnetic force on a moving electron is always towards the centre, so it provides the centripetal force.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--03-centripetal-force-sources.webp" width="900" height="1090" alt="Four top-view pictures: a bung on a string (tension), a coin on a turntable (friction), a rider in a spinning drum (push of the wall) and a satellite (gravity). In each the real force points to the centre and the velocity is tangent. The resultant is mv^2/r = m omega^2 r." loading="lazy">
  <figcaption>Centripetal force is not an extra force: it is the real force or resultant pointing to the centre.</figcaption>
</figure>


## Banked tracks (beyond the syllabus — background only, not examinable)

Banked-track problems do not appear in the Cambridge 9702 Motion in a Circle syllabus content, but the idea extends the centripetal-force relationships above in a way that helps consolidate them.

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-circular-motion-revision-notes--01-banked-track.webp" width="900" height="990" alt="A car on a track banked at 20 degrees. Only weight mg and the normal force N act. A vector triangle shows N cos theta balances mg and N sin theta, towards the centre, gives mv squared over r. Dividing gives tan theta = v squared over r g, so 25 m/s at 20 degrees needs r = 175 m and no friction." loading="lazy">
  <figcaption>On a banked track the horizontal part of the normal force supplies the centripetal force.</figcaption>
</figure>


## Why it accelerates at constant speed

Velocity is a **vector**, with both magnitude and direction. In circular motion the direction changes continuously, so velocity changes, so there is acceleration — even though the *speed* (the magnitude of velocity) stays constant throughout.

The force is perpendicular to velocity at every instant, therefore **no work is done** and kinetic energy is constant.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--02-centripetal-acceleration.webp" width="900" height="710" alt="Balls on a circle have tangent velocity arrows of equal length and acceleration arrows pointing to the centre, at right angles to the velocity. A vector triangle shows v1 and v2 and their difference delta v pointing towards the centre. A dashed line shows a ball moving straight on if the force is removed." loading="lazy">
  <figcaption>Speed is constant but the velocity turns, so the change in velocity and the acceleration point towards the centre.</figcaption>
</figure>


## Vertical circles — the two critical points

```
TOP:     T + mg = m v^2 / r      ->   T = m v^2 / r - mg
BOTTOM:  T - mg = m v^2 / r      ->   T = m v^2 / r + mg
```

Tension is **greatest at the bottom** and **least at the top**. Subtracting the two equations gives a difference of **2mg only if the speed is the same at both points** (e.g. a stone whirled at constant speed). If the object moves freely and energy is conserved, it is faster at the bottom: ½mv_bottom² = ½mv_top² + mg(2r), so v_bottom² = v_top² + 4gr, and the tensions then differ by **6mg**.

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
6. *(Extension, beyond the syllabus)* Derive the relationship between banking angle, speed and radius for a frictionless banked track.
7. *(Extension, beyond the syllabus)* A track is banked at 15° for cars travelling at 20 m/s. Find the design radius.

**Answers:** 1. a = v²/r and a = rω². 2. Velocity is a vector and its direction changes continuously, so the velocity changes even though the speed does not. 3. Friction between the tyres and the road surface. 4. At minimum speed the tension is zero, so weight alone supplies the centripetal force: mg = mv²/r, giving v = √(gr). 5. At the bottom; if the speed is the same at the top and bottom it exceeds the tension at the top by 2mg (if energy is conserved instead, so the object is faster at the bottom, by 6mg). 6. Resolving the normal contact force: N cos θ = mg (vertical) and N sin θ = mv²/r (horizontal); dividing gives tan θ = v²/(rg). 7. r = v² ÷ (g tan θ) = 20² ÷ (9.81 × tan 15°) = 400 ÷ (9.81 × 0.268) = **152 m**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--04-vertical-circle.webp" width="900" height="810" alt="A 0.50 kg ball on a 0.80 m string. At the top (4.0 m/s) tension 5.1 N and weight 4.9 N both point down; at the bottom (6.9 m/s) tension 34.5 N points up and weight 4.9 N down, arrows to scale. The bottom tension exceeds the top by 6mg = 29.4 N, and the minimum speed at the top (T = 0) is sqrt(gr) = 2.8 m/s." loading="lazy">
  <figcaption>Tension is least at the top and greatest at the bottom, differing by 6mg for a freely moving ball.</figcaption>
</figure>

## Frequently asked questions

**How do you calculate angular velocity?**
Angular velocity is ω = θ/t = 2π/T = 2πf, measured in rad s⁻¹, and it is linked to linear speed by v = rω. All angles must be in radians.

**What are the formulas for centripetal acceleration and force?**
Centripetal acceleration is a = v²/r = rω², and centripetal force is F = mv²/r = mrω². Both are always directed towards the centre of the circle.

**What is the minimum speed at the top of a vertical circle?**
At the minimum speed the tension is zero and weight alone provides the centripetal force, so mg = mv²/r and v_min = √(gr). Below this speed the object leaves the circular path.

**Are banked tracks in the Cambridge 9702 syllabus?**
No. Banked-track problems do not appear in the Cambridge 9702 Motion in a Circle content; the banked-track section on this page is background only.
