---
title: "Pearson Edexcel International Advanced Level Mathematics: Projectiles and kinematics with calculus (YMA01)"
seoTitle: "Edexcel IAL Maths M2 Projectiles and Kinematics Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Projectiles, vertical motion and kinematics using calculus and vectors"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 158
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-2-edexcel-alevel-maths"
    subtopic: "m2-kinematics-edexcel-alevel-maths"
description: "Study guide to Edexcel IAL Maths M2 kinematics: vertical motion, projectiles, calculus with displacement and vectors, with fully worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide is for Pearson Edexcel International Advanced Level Mathematics (YMA01), aligned to the *Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics* specification, Issue 3, April 2019. It covers Unit M2 section 1, topics 1.1 to 1.4. The specification lists M2 as an optional unit for IAS Further Mathematics and for IAL Mathematics and Further Mathematics, so it is available at IAS only within Further Mathematics.

The specification assumes you already know P1 to P4 and M1, so constant-acceleration (suvat) work and basic vectors are taken as known. If your calculus is rusty, start with [differentiating and integrating powers of x](/resources/edexcel-ial-mathematics-differentiating-and-integrating-powers-of-x-gradients/). See also the [course hub](/boards/edexcel/a-level/mathematics/) and the [printable checklist](/checklists/edexcel/a-level/mathematics/). Not sure where you stand? Take a free [10-minute diagnostic](/diagnostics/).

## What this unit covers

| Spec ref | What you must be able to do |
|---|---|
| 1.1 | Model motion in a vertical plane with constant acceleration, for example under gravity |
| 1.2 | Solve simple cases of projectile motion |
| 1.3 | Find velocity and acceleration when displacement is a function of time, by setting up and solving equations of the form dx/dt = f(t) or dv/dt = g(t) |
| 1.4 | Differentiate and integrate a vector with respect to time |

The specification says the calculus in 1.3 will be consistent with the level of calculus in P1 to P4. So expect powers of t, but also exponentials and trigonometric functions.

Other pages in this set: [revision notes](/resources/edexcel-ial-mathematics-projectiles-vertical-motion-and-kinematics-using-revision-notes/) and [practice questions](/resources/edexcel-ial-mathematics-projectiles-vertical-motion-and-kinematics-using-practice/).

## 1.1 Vertical motion under gravity

A particle moving vertically has a constant acceleration of magnitude g. Take g from the question. The working below uses 9.8 m s⁻². Model the object as a particle and ignore air resistance.

The constant-acceleration equations, with u initial velocity, v final velocity, a acceleration, s displacement and t time:

```
v = u + at
s = ut + ½at²
v² = u² + 2as
s = ½(u + v)t
```

**Choose one direction as positive and keep to it.** If up is positive, then a = −g. Displacement s is measured from the starting point, so a point below the start has negative s. Velocity is negative when the particle moves downwards.

Three facts save time. At the highest point v = 0. Going up and coming down through the same height, the speeds are equal. The time up to the top equals the time down to the same level.

### Worked example 1

A ball is thrown vertically upwards at 14 m s⁻¹ from a point 3 m above horizontal ground. Find (a) the greatest height above the ground, (b) the time taken to reach the ground, (c) the speed on reaching the ground.

(a) Up is positive. At the top v = 0, so v² = u² + 2as gives

```
0 = 14² − 2(9.8)s
s = 196 / 19.6 = 10
```

Greatest height above ground = 10 + 3 = **13 m**.

(b) The ball ends 3 m below its starting point, so s = −3:

```
−3 = 14t − 4.9t²
4.9t² − 14t − 3 = 0
t = (14 + √(196 + 58.8)) / 9.8 = (14 + √254.8) / 9.8
```

Reject the negative root. **t = 3.06 s** (3 s.f.).

(c) v² = 14² + 2(−9.8)(−3) = 196 + 58.8 = 254.8, so the speed is **16.0 m s⁻¹** (3 s.f.).

### Worked example 2

A ball is thrown vertically upwards at 21 m s⁻¹ from the ground. For how long is it more than 15 m above the ground?

Set s = 15:

```
15 = 21t − 4.9t²
4.9t² − 21t + 15 = 0
t = (21 ± √147) / 9.8
```

The two roots are the times when the ball passes 15 m, going up and coming down. The time above 15 m is the difference:

```
(21 + √147)/9.8 − (21 − √147)/9.8 = 2√147 / 9.8 = 2.47 s
```

**The ball is above 15 m for 2.47 s** (3 s.f.).

## 1.2 Projectile motion

A projectile moves under gravity alone. Split the motion into two independent parts. If a particle is projected at speed U at angle α above the horizontal, then:

| Direction | Acceleration | Initial velocity | Velocity at time t | Displacement at time t |
|---|---|---|---|---|
| Horizontal | 0 | U cos α | U cos α | (U cos α)t |
| Vertical (up +) | −g | U sin α | U sin α − gt | (U sin α)t − ½gt² |

Time is the link between the two directions. The usual plan is: find t from the direction where you have the most information, then use it in the other.

The speed at any moment is √(vₓ² + v_y²) and the angle to the horizontal θ satisfies tan θ = |v_y| / |vₓ|. State whether the particle is moving above or below the horizontal.

Key situations:
- **Back at launch level:** vertical displacement is 0, so time of flight T = 2U sin α / g, and the range is (U cos α)T.
- **Greatest height:** v_y = 0, giving H = (U sin α)² / 2g. At that moment the speed equals the horizontal component.
- **Launched horizontally:** the initial vertical velocity is 0, so the fall time comes from s = ½gt² alone.
- **Landing below launch level:** vertical displacement is negative, which gives a quadratic in t.

### Worked example 3

A ball is projected from level ground at 24.5 m s⁻¹ at an angle α above the horizontal, where sin α = 0.6. Find (a) the time of flight, (b) the range, (c) the greatest height, (d) the speed and direction of motion after 2 s.

cos α = 0.8, so the horizontal component is 19.6 and the vertical component is 14.7.

(a) Vertical displacement is 0: 0 = 14.7t − 4.9t², so t = 14.7 / 4.9 = **3 s**.

(b) Range = 19.6 × 3 = **58.8 m**.

(c) At the top 0 = 14.7² − 2(9.8)H, so H = 216.09 / 19.6 = **11.0 m** (3 s.f.).

(d) After 2 s: v_y = 14.7 − 9.8(2) = −4.9, vₓ = 19.6.

```
speed = √(19.6² + 4.9²) = √408.17 = 20.2 m/s
tan θ = 4.9 / 19.6 = 1/4, θ = 14.0°
```

**20.2 m s⁻¹, at 14.0° below the horizontal** (3 s.f.), since v_y is negative.

### Worked example 4

A ball is struck from level ground at 25 m s⁻¹ with sin α = 0.6, so the components are 20 and 15. A wall 8 m high stands 30 m away on level ground. Does the ball clear it?

The ball reaches the wall when 20t = 30, so t = 1.5 s. Height then:

```
y = 15(1.5) − 4.9(1.5)² = 22.5 − 11.025 = 11.475
```

This is above 8 m, so **the ball clears the wall by 3.475 m**. Check the vertical velocity: 15 − 9.8(1.5) = 0.3, so it is still just rising.

## 1.3 Calculus with displacement, velocity and acceleration

When displacement x is a function of time, velocity and acceleration come by differentiation. Going back, you integrate.

```
v = dx/dt          a = dv/dt = d²x/dt²
v = ∫ a dt         x = ∫ v dt
```

Every indefinite integral needs a constant. You find it from a condition such as "at t = 0, v = 12" or "x = 0 when t = 0". This is a different method from suvat: **do not use suvat when acceleration varies with time.**

Reading the working:
- At rest: set v = 0.
- Turning point: v = 0 and v changes sign.
- Maximum or minimum velocity: set a = 0.
- **Displacement is not distance.** For distance travelled, find the position at each time the particle turns round and add the sizes of the separate stages.

### Worked example 5

A particle moves on a straight line with x = t³ − 9t² + 24t − 5 metres, for t ≥ 0 seconds. Find the distance travelled in the first 5 s.

```
v = 3t² − 18t + 24 = 3(t − 2)(t − 4)
```

The particle turns at t = 2 and t = 4. Positions:

```
x(0) = −5   x(2) = 15   x(4) = 11   x(5) = 15
```

Distance = |15 − (−5)| + |11 − 15| + |15 − 11| = 20 + 4 + 4 = **28 m**. The displacement is only 20 m.

### Worked example 6

A particle moves on a line with acceleration a = (2t − 8) m s⁻². At t = 0 it passes the origin with velocity 12 m s⁻¹. Find the total distance travelled in the first 6 s.

```
v = ∫(2t − 8)dt = t² − 8t + c,  v(0) = 12 so c = 12
v = t² − 8t + 12 = (t − 2)(t − 6)
x = t³/3 − 4t² + 12t   (x = 0 at t = 0)
```

v > 0 for t < 2 and v < 0 for 2 < t < 6. So the particle turns at t = 2, where x = 8/3 − 16 + 24 = 32/3. At t = 6, x = 72 − 144 + 72 = 0.

Distance = 32/3 + 32/3 = **64/3 m** (about 21.3 m). The particle ends back at the origin, so its displacement is 0.

### Worked example 7

A particle has velocity v = 12e^(−t/2) m s⁻¹ for t ≥ 0 and starts at the origin. Find its acceleration and position at t = 2, and the value its position approaches.

```
a = dv/dt = −6e^(−t/2)         a(2) = −6e⁻¹ = −2.21 m s⁻²
x = ∫12e^(−t/2) dt = −24e^(−t/2) + c,  x(0) = 0 so c = 24
x = 24(1 − e^(−t/2))           x(2) = 24(1 − e⁻¹) = 15.2 m
```

As t → ∞, e^(−t/2) → 0, so **x approaches 24 m**.

## 1.4 Vectors and calculus

A position vector r(t) = x(t)i + y(t)j is differentiated or integrated component by component.

```
v = dr/dt       a = dv/dt = d²r/dt²
v = ∫ a dt      r = ∫ v dt
```

The constant of integration is now a constant **vector**. It is fixed by a condition such as v = 2i − 5j at t = 0. Speed is the magnitude |v|. Direction comes from the ratio of the components.

Reading a vector problem:
- Moving parallel to i: the j-component of v is 0.
- Moving parallel to j: the i-component of v is 0.
- Instantaneously at rest: both components of v are 0 at the same time.

### Worked example 8

A particle has position vector r = (3t² − 2t)i + (t³ − 6t)j metres at time t seconds. Find (a) v and a at t = 2, (b) the speed at t = 2, (c) the time at which its velocity is parallel to i.

```
v = (6t − 2)i + (3t² − 6)j
a = 6i + 6t j
```

(a) At t = 2: **v = 10i + 6j** and **a = 6i + 12j**.

(b) Speed = √(10² + 6²) = √136 = **11.7 m s⁻¹** (3 s.f.).

(c) The j-component of v is zero: 3t² − 6 = 0, so t² = 2 and **t = √2 s**.

### Worked example 9

A particle has acceleration a = 4t i + (6 − 3t²)j. At t = 0, v = 2i − 5j and the position is i + 2j. Find r when t = 2.

```
v = (2t² + c₁)i + (6t − t³ + c₂)j
v(0) = 2i − 5j so c₁ = 2, c₂ = −5
v = (2t² + 2)i + (6t − t³ − 5)j

r = (2t³/3 + 2t + d₁)i + (3t² − t⁴/4 − 5t + d₂)j
r(0) = i + 2j so d₁ = 1, d₂ = 2
```

At t = 2:

```
i: 16/3 + 4 + 1 = 31/3
j: 12 − 4 − 10 + 2 = 0
```

**r = (31/3)i** metres, so the particle is on the x-axis at that moment.

## Common errors

- Using g = +9.8 when up is positive, or mixing signs between u and a.
- Picking the wrong root of a quadratic in t without checking what each means.
- Treating a projectile's horizontal velocity as changing.
- Quoting the angle without saying above or below the horizontal.
- Using suvat equations when acceleration depends on t.
- Leaving out the constant of integration, or fixing it with the wrong condition.
- Giving displacement when the question asks for distance.
- In vector work, differentiating the i and j parts together as one number, or writing a vector answer with a missing i or j.

## Next steps

Revise the formulae and methods in the [revision notes](/resources/edexcel-ial-mathematics-projectiles-vertical-motion-and-kinematics-using-revision-notes/). Then test yourself with the [practice questions](/resources/edexcel-ial-mathematics-projectiles-vertical-motion-and-kinematics-using-practice/).

## Official syllabus

*Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics*, Specification, Issue 3, April 2019, published by Pearson Education Limited. Unit M2 section 1, topics 1.1 to 1.4.
