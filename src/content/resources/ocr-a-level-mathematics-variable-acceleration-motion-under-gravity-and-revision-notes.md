---
title: "OCR A Level Mathematics A: Variable acceleration, motion under gravity and projectiles (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Projectiles Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Variable acceleration, motion under gravity and projectiles"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 132
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-ocr-alevel-maths"
    subtopic: "kinematics-ocr-alevel-maths"
description: "Condensed revision notes on variable acceleration, vector motion, gravity and projectiles for OCR A Level Mathematics A (H240), with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense content references 3.02f to 3.02i of the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. Reference 3.02f is Stage 1, shared with AS. References 3.02g, 3.02h and 3.02i are **A Level only**. For explanations and fuller worked examples, read the [study guide](/resources/ocr-a-level-mathematics-variable-acceleration-motion-under-gravity-and/). When you are ready to test yourself, use the [practice set](/resources/ocr-a-level-mathematics-variable-acceleration-motion-under-gravity-and-practice/), the [course hub](/boards/ocr/a-level/mathematics/), the [checklist](/checklists/ocr/a-level/mathematics/) and the [free diagnostics](/diagnostics/).

## Key results

| Idea | Result | Stage |
|---|---|---|
| Velocity and acceleration (3.02f) | v = ds/dt, a = dv/dt = d²s/dt² | Stage 1 |
| Reverse (3.02f) | s = ∫v dt, v = ∫a dt, with a constant of integration | Stage 1 |
| Vector form (3.02g) | v = dr/dt, a = dv/dt; r = ∫v dt, v = ∫a dt | A Level only |
| Gravity (3.02h) | a = −gj = (0, −g), with g = 9.8 m s⁻² | A Level only |
| Constant acceleration, vectors | v = u + at, r = r₀ + ut + ½at² | A Level only |
| Launch components (3.02i) | horizontal u cos α, vertical u sin α | A Level only |
| Time of flight, same level | T = 2u sin α / g | A Level only |
| Range, same level | R = u² sin 2α / g | A Level only |
| Greatest height | H = u² sin²α / (2g) | A Level only |
| Path | y = x tan α − g x² / (2u² cos²α) | A Level only |

## Method boxes

**Variable acceleration in one dimension**

1. Decide which direction to go: differentiate from s towards a, or integrate from a towards s.
2. After every integration, add a constant and find it from a given condition.
3. For "at rest", solve v = 0. For maximum or minimum velocity, solve a = 0.
4. For distance travelled, split the interval where v changes sign and add magnitudes.

**Vectors with calculus**

1. Treat the i and j components separately.
2. The constant of integration is a vector, found from the initial velocity or position.
3. Speed = √(vₓ² + v_y²). Direction = tan⁻¹(v_y / vₓ), with the reference direction stated.
4. "Parallel to i": j-component of v is 0. "Parallel to j": i-component of v is 0.

**Projectile problems**

1. Split u into components. Draw a sketch with axes and the launch point.
2. Horizontal: constant velocity, x = (u cos α) t.
3. Vertical: acceleration −g, so y = (u sin α) t − ½gt² and v_y = u sin α − gt.
4. Use t to connect the two directions. Find t from the vertical equation first.
5. Reject roots that make no sense, such as negative times.

## Worked reminders

**A. Distance travelled.** A particle has s = 2t³ − 9t² + 12t for 0 ≤ t ≤ 3.

```
v = 6t² − 18t + 12 = 6(t − 1)(t − 2)      a = 12t − 18
s(0) = 0,  s(1) = 5,  s(2) = 4,  s(3) = 9
distance = 5 + 1 + 5 = 11
```

It reverses at t = 1 and t = 2, so the distance (11) differs from the displacement (9).

**B. Finding a constant.** a = 4t − 6 and v = 2 when t = 0.

```
v = 2t² − 6t + C, C = 2, so v = 2t² − 6t + 2
s = (2/3)t³ − 3t² + 2t + D
```

**C. A projectile at 60°.** Launch speed 15 m s⁻¹ from level ground, α = 60°.

```
components: 7.5 and 13.0 (15 sin 60° = 12.99)
T = 2(12.99)/9.8 ≈ 2.65 s    R = 7.5 × 2.651 ≈ 19.9 m
H = 12.99²/(19.6) ≈ 8.61 m
y = 1.732x − 0.0871x²
```

**D. Range symmetry.** For u = 18 m s⁻¹, R = 324 sin 2α / 9.8. The maximum is 33.1 m at α = 45°. Angles α and 90° − α give the same range: 30° and 60° both give 28.6 m. The paths differ in height and in time of flight.

**E. Launch from a height.** A stone is thrown horizontally at 10 m s⁻¹ from 35 m above level ground.

```
35 = ½(9.8)t² → t = 2.67 s
horizontal distance = 10 × 2.673 ≈ 26.7 m
```

## Phrases decoded

| The question says | You do |
|---|---|
| "at rest" | solve v = 0 (every component, in two dimensions) |
| "greatest height" or "highest point" | set the vertical velocity to 0 |
| "returns to the level of projection" | set y = 0 for the second time |
| "hits the ground" | set the height of the particle to 0, reject the negative time |
| "moving at 45° below the horizontal" | set v_y = −vₓ |
| "speed" | find the magnitude of the velocity vector |
| "passes through the point (p, q)" | substitute into the path equation, or solve x = p then check y = q |
| "find the range" | find the horizontal distance when the height returns to the stated level |

**F. Integrating a vector.** a = 2t i − 6j, v = 4i + j at t = 0, r = 0 at t = 0.

```
v = (t² + 4)i + (1 − 6t)j
r = (t³/3 + 4t)i + (t − 3t²)j
```

**G. Vector gravity.** A particle starts at 2j with velocity (6i + 10j) and a = −9.8j.

```
r = 6t i + (2 + 10t − 4.9t²)j     v = 6i + (10 − 9.8t)j
```

At the highest point 10 − 9.8t = 0, so t = 1.02 s, and the height is 2 + 100/19.6 ≈ 7.10 m.

## Must-know distinctions

- **Displacement and distance:** ∫v dt gives displacement. Distance needs the sign changes of v.
- **Speed and velocity:** speed is a magnitude, velocity is a vector.
- **At rest and at the top:** at rest means both components are zero. At the highest point of a projectile only the vertical component is zero, and the horizontal speed is still u cos α.
- **Maximum speed and maximum velocity:** a = 0 finds a stationary value of v, but check the ends of the interval for the greatest speed.
- **Cartesian path and time equations:** the path equation has no t. Use it for "passes through a point" and shape questions, not for timing.
- **Model and reality:** the model ignores air resistance, treats the object as a particle, keeps g constant and ignores wind.

## Quick self-test

1. A particle has s = 2t³ − 9t² + 12t. Find its acceleration when t = 4.
2. A particle has a = 6t − 4, v = 3 when t = 0. Find v in terms of t.
3. A particle has position r = 3t²i + (t³ − 2t)j. Find its velocity and acceleration at t = 2.
4. A particle has v = (2t + 1)i − 4tj and starts at the origin. Find its position at t = 3.
5. A ball is thrown from the origin with velocity (3i + 7j) m s⁻¹ in the model a = −9.8j. Find its position and velocity at t = 1.
6. For the ball in question 5, find the greatest height reached.
7. Find the horizontal and vertical components of a launch at 20 m s⁻¹ and 30° above the horizontal.
8. A projectile is launched from level ground at 15 m s⁻¹ at 60°. Find the speed at the moment it lands.
9. State two limitations of the projectile model.
10. A particle moves with v = 3t² − 12t + 5. At what time is the acceleration zero, and what is the velocity then?
11. A stone is thrown horizontally at 10 m s⁻¹ from 35 m above level ground. Find the speed when it lands, to 3 significant figures.

### Answers

1. a = 12t − 18, so a = 30 m s⁻².
2. v = 3t² − 4t + 3.
3. v = 6t i + (3t² − 2)j = 12i + 10j. a = 6i + 6tj = 6i + 12j.
4. r = (t² + t)i − 2t²j, so at t = 3: r = 12i − 18j.
5. r = 3i + 2.1j. v = 3i − 2.8j.
6. v_y = 0 at t = 7/9.8, and H = 49/19.6 = 2.5 m.
7. Horizontal 20 cos 30° ≈ 17.3 m s⁻¹, vertical 20 sin 30° = 10 m s⁻¹.
8. The horizontal component stays 7.5 and the vertical component reverses to −12.99 at the same height, so the speed is √(7.5² + 12.99²) = 15 m s⁻¹.
9. Air resistance ignored; object treated as a particle; g taken as constant; wind ignored.
10. a = 6t − 12 = 0 at t = 2, and v = 12 − 24 + 5 = −7 m s⁻¹.
11. v_y = 9.8 × 2.673 ≈ 26.2, so speed = √(10² + 26.2²) ≈ 28.0 m s⁻¹.

## Where marks are usually lost

- No constant of integration, or a constant found from the wrong condition.
- Giving s(end) − s(0) when the question asks for distance travelled and the particle turns round.
- Using constant acceleration formulae when a is a function of t.
- Using a, not v, in the condition for a particle at rest.
- Mixing components: using u in a horizontal equation, or g in a horizontal equation.
- Giving an angle with no reference direction, such as "below the horizontal".
- Rounding g or intermediate values early, so a final 3 significant figure answer drifts.
- Using the range formula for a launch from a height.
- Giving a limitation of the model that is really a limitation of the question, such as "the ball might hit a bird".

## Official syllabus

OCR, *A Level in Mathematics A (H240)*, Version 3.1 (August 2026), for first assessment in 2018, content references 3.02f to 3.02i.
