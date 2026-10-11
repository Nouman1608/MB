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

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA. Section M2.5: Projectiles.
