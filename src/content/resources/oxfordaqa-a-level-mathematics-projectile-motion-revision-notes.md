---
title: "OxfordAQA International AS and A-level Mathematics: Projectile motion (9660) -- Revision Notes"
seoTitle: "OxfordAQA A-level Maths Projectile Motion Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Projectile motion"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 212
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m2-projectiles-oxfordaqa-alevel-maths"
description: "Condensed revision notes on projectile motion (M2.5) for OxfordAQA International A-level Maths: equations, method steps, derivations and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense section M2.5 (Projectiles) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification places this content in International A-level (A2) Unit M2 (Mechanics); it is not examined at International AS. For full explanations and longer worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-projectile-motion/). Test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-projectile-motion-practice/), and see the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the free [diagnostics](/diagnostics/).

## What the specification says

The specification expects you to state and use x = (V cos α)t and y = (V sin α)t − ½gt², to be aware of your assumptions, and to calculate range, time of flight and maximum height. It says the formulae for these three should not be quoted in exams, so you derive them from the two equations each time. It also says you must be able to derive the trajectory equation by eliminating time. Inclined planes and resistance are not set.

## The core equations

Origin at the launch point, x horizontal, y up, launch speed V at angle α above the horizontal, g = 9.8 m/s².

| Quantity | Horizontal | Vertical |
|---|---|---|
| Acceleration | 0 | −g |
| Velocity at time t | V cos α | V sin α − gt |
| Position at time t | x = (V cos α)t | y = (V sin α)t − ½gt² |

* Speed = √(horizontal velocity² + vertical velocity²).
* Direction: tan θ = vertical velocity / horizontal velocity.
* Time is the only link between the two directions.
* Launched below the horizontal: the vertical component V sin α is negative.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--03-suvat-trapezium.webp" width="900" height="920" alt="A straight-line velocity-time graph from 5 to 13 m/s over 4 s has gradient 2. The area is a 36 m trapezium that splits into a rectangle of 20 and a triangle of 16. These give v = u + at, s = ½(u+v)t, s = ut + ½at², and eliminating t gives v² = u² + 2as." loading="lazy">
  <figcaption>The suvat equations are the gradient and area of one straight-line velocity-time graph.</figcaption>
</figure>


## Derived results on level ground

Derive these in an answer. Do not just write them down.

| Result | Where it comes from | Expression |
|---|---|---|
| Time of flight | Set y = 0, factorise, take the non-zero root | 2V sin α / g |
| Time to top | Vertical velocity = 0 | V sin α / g |
| Greatest height | Put the time to top into y | (V sin α)² / (2g) |
| Range | x at the time of flight | V² sin 2α / g |
| Speed at the top | Only the horizontal part remains | V cos α |

**Must-know distinctions**

* Range is greatest at 45°. Angles α and 90° − α give the same range but different heights and times.
* Time to top is half the time of flight only when landing and launch levels are the same.
* At the top, vertical velocity is zero and speed is not.
* "Height above the ground" and "height above the launch point" differ when launching from a height.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--02-vt-graph-areas.webp" width="900" height="900" alt="A velocity-time graph rises to 12 m/s in 5 s, stays level to t = 11, then falls to minus 4 m/s at t = 15, crossing zero at t = 14. The areas are 30, 72, 18 above the axis and 2 below. Displacement is 118 m and distance 122 m." loading="lazy">
  <figcaption>Gradients give acceleration; areas give displacement, and distance counts every area as positive.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--08-cliff-landing.webp" width="900" height="830" alt="A stone is thrown from a 20 m cliff at 18 m/s and 25 degrees above horizontal. Setting y = minus 20 gives 4.9t² − 7.607t − 20 = 0, with roots 2.94 s and minus 1.39 s. The negative root belongs to the dashed backward extension inside the cliff and is rejected. It lands 48.0 m away at 26.8 m/s." loading="lazy">
  <figcaption>When the landing level differs, put the landing height into y and reject the negative root.</figcaption>
</figure>


## Method in steps

1. Draw the path. Mark the launch point, the landing point and what is known.
2. Resolve the launch velocity into V cos α and V sin α, with up as positive.
3. Write the x equation and the y equation (or the velocity equations).
4. Put in the condition: landing is y = (landing level), top is vertical velocity 0, a given point is known x and y.
5. Solve for t first when time links the two equations. Keep the unrounded value.
6. Substitute t back to find distances, velocities or speeds.
7. Round to 3 s.f. at the end and answer in the words of the question.

## Trajectory equation

```
t = x / (V cos α)
y = x tan α − g x² / (2V² cos² α)
y = x tan α − g x² sec² α / (2V²)
```

The specification does not require you to remember it, but you should be able to derive it. Use sec² α = 1 + tan² α to make a quadratic in tan α when the angle is unknown. Two real roots mean two possible angles. A negative discriminant means the point cannot be reached at that speed.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--09-two-angles-one-point.webp" width="900" height="910" alt="Two parabolas from the origin at 14 m/s pass through (10, 5). Using sec²α = 1 + tan²α gives T² − 4T + 3 = 0, so tan α = 1 or 3, α = 45° or 71.6°. The 45° path has range 20 m and is at its top at the point; the 71.6° path has range 12 m and passes it on the way down." loading="lazy">
  <figcaption>Eliminating t gives a quadratic in tan α, so there are usually two launch angles.</figcaption>
</figure>


## Worked reminders

**Level ground.** V = 15 m/s, α = 60°. Components: 7.5 and 12.99 m/s. Time of flight = 2 × 12.99 / 9.8 = 2.65 s. Greatest height = 12.99² / 19.6 = 8.61 m. Range = 7.5 × 2.651 = 19.9 m.

**Launch from above ground.** A ball is thrown at 10 m/s at 30° above the horizontal from a point 1.5 m above level ground. Components: 8.660 and 5.000 m/s.

```
−1.5 = 5t − 4.9t²
4.9t² − 5t − 1.5 = 0
t = 1.263 s   (positive root)
x = 8.660 × 1.263 = 10.9 m
```

**Height at a given distance.** A ball is projected from level ground at 20 m/s at 40° above the horizontal. Find its height and direction of motion when it is 18 m horizontally from the launch point.

```
Components: 15.321 and 12.856 m/s
t = 18 / 15.321 = 1.1749 s
y = 12.856 × 1.1749 − 4.9 × 1.1749² = 15.105 − 6.764 = 8.34 m
Vertical velocity = 12.856 − 9.8 × 1.1749 = 1.34 m/s
```

The ball is 8.34 m high and still rising slightly, at tan θ = 1.34 / 15.32, which is 5.0° above the horizontal.

**Finding the speed from a point.** A particle is projected at 45° and passes through the point 20 m across and 5 m up. With sec² 45° = 2 the trajectory equation gives y = x − gx²/V², so 5 = 20 − 9.8 × 400 / V². Then V² = 3920 / 15 = 261.3 and V = 16.2 m/s.

**Horizontal launch.** Initial vertical velocity is zero, so the drop is ½gt² and the horizontal distance is speed × t.

## Assumptions to quote

* Particle model: size and spin ignored.
* No air resistance and no wind.
* Constant g, directed vertically downwards.
* Motion in a vertical plane.

If asked about the effect of air resistance, say that it slows the object so the real range and greatest height would normally be smaller than in the model.

## Quick self-test

Take g = 9.8 m/s². Answers follow.

1. A particle is projected at 12 m/s at 30° above the horizontal. Find its horizontal and vertical positions 1 s after launch.
2. A ball is projected from level ground at 40 m/s at 30° above the horizontal. Find the time of flight.
3. For the ball in question 2, find the greatest height.
4. For the ball in question 2, find the range.
5. A kicked ball lands 80 m away when projected at 25°, with the same speed in each case. At what other angle could it be projected to land in the same place?
6. A projectile is launched at 30 m/s at 60° above the horizontal. What is its speed at the greatest height?
7. A stone is thrown horizontally at 10 m/s from a point 19.6 m above level ground. How far from the base of the cliff does it land?
8. Write the trajectory equation for a projection speed of 10 m/s at 45°.
9. State one modelling assumption and the effect of removing it.
10. A particle is projected at 20 m/s and reaches a greatest height of 10 m above its launch point. Find the angle of projection, to 1 d.p.
11. What launch angle on level ground gives the greatest range, and why do two different angles often give the same range?
12. A particle is projected at 20 m/s at 40° above the horizontal. Which direction components are zero at the top of its path?

### Answers

1. x = 12 cos 30° × 1 = **10.4 m**; y = 12 sin 30° − 4.9 = 6 − 4.9 = **1.1 m**.
2. 2 × 40 sin 30° / 9.8 = 40/9.8 = **4.08 s**.
3. (40 sin 30°)² / 19.6 = 400/19.6 = **20.4 m**.
4. 40² sin 60° / 9.8 = **141 m** (141.4).
5. **65°**, since 90° − 25° = 65° gives the same range.
6. The speed is the horizontal component, 30 cos 60° = **15 m/s**.
7. Fall time: 19.6 = 4.9t², t = 2 s. Distance = 10 × 2 = **20 m**.
8. sec² 45° = 2, so y = x − 9.8x² × 2 / (2 × 100) = **x − 0.098x²**.
9. For example: ignoring air resistance. Removing it would shorten the real range and lower the real greatest height.
10. (20 sin α)² = 2 × 9.8 × 10 = 196, so 20 sin α = 14, sin α = 0.7, α = **44.4°**.
11. **45°**, as sin 2α is largest there. sin 2α = sin(180° − 2α), so α and 90° − α share a range.
12. Only the **vertical velocity** component is zero at the top; the horizontal component, 20 cos 40° = 15.3 m/s, is unchanged.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--04-vertical-two-roots.webp" width="900" height="910" alt="A displacement-time parabola for a ball thrown up at 21 m/s peaks at 22.5 m. The line s = 15 m meets it at t = 0.91 s going up and t = 3.38 s coming down, with velocities plus and minus 12.1 m/s from the tangent gradients. The gap of 2.47 s is the time above 15 m." loading="lazy">
  <figcaption>The two roots of the quadratic are the times going up and coming down through the same height.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--06-vector-motion-plane.webp" width="900" height="900" alt="The path of r = (t³ − 3t)i + (2t² + 1)j from t = 0 to 2 with velocity arrows. At t = 0 the velocity is minus 3i, at t = 1 it is 4j (i component zero) and at t = 2 it is 9i + 8j, speed 12.0 m/s, with acceleration 12i + 4j." loading="lazy">
  <figcaption>Differentiate each component separately; parallel to j means the i component of velocity is zero.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--07-projectile-two-motions.webp" width="900" height="800" alt="A projectile launched at 24.5 m/s with sin α = 0.6, drawn to scale with dots every 0.5 s. The dots are 9.8 m apart horizontally (constant 19.6 m/s) while vertical speed falls from 14.7 to zero at the top and to minus 14.7 on landing. T = 3 s, R = 58.8 m, H = 11.0 m." loading="lazy">
  <figcaption>Horizontal motion is uniform and vertical motion has acceleration −g; time links the two.</figcaption>
</figure>


## Where marks are usually lost

* Quoting a range or height formula without showing where it comes from, when the question says "find" or "show".
* Using V in place of V cos α or V sin α.
* Applying level-ground formulae when launch and landing heights differ.
* Wrong sign for the landing level or for a downward launch.
* Stating that the speed at the top is zero.
* Rounding the time early and carrying the error into the distance.
* Writing "no friction" as an assumption when the relevant point is air resistance.
* Giving one angle when the quadratic in tan α has two valid roots.
* Leaving out the final statement in a "does it clear" question.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--05-calculus-turning-points.webp" width="900" height="1040" alt="Two graphs share a time axis. Displacement x = 2t³ − 15t² + 24t reaches 11 m at t = 1, minus 16 m at t = 4 and minus 5 m at t = 5. Velocity, its derivative, is zero at t = 1 and 4 and negative between. Displacement is minus 5 m but distance is 11 + 27 + 11 = 49 m." loading="lazy">
  <figcaption>Find where v = 0, split the motion there, and add the sizes of the stages for distance.</figcaption>
</figure>

## Frequently asked questions

**What are the equations of motion for a projectile?**
With launch speed V at angle α above the horizontal, x = (V cos α)t and y = (V sin α)t − ½gt². The horizontal acceleration is 0 and the vertical acceleration is −g.

**What launch angle gives the greatest range on level ground?**
45°. The angles α and 90° − α give the same range, but different heights and times of flight.

**Do you need to derive the range and time of flight formulae?**
Yes. These notes advise deriving results such as the time of flight 2V sin α / g and the range V² sin 2α / g in your answer, rather than just writing them down.

**What modelling assumptions are made for projectiles?**
The object is modelled as a particle, there is no air resistance or wind, g is constant and downwards, and the motion is in a vertical plane.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA. Section M2.5: Projectiles.
