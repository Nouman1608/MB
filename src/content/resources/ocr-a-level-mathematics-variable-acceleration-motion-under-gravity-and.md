---
title: "OCR A Level Mathematics A: Variable acceleration, motion under gravity and projectiles (H240)"
seoTitle: "OCR A Level Maths Projectiles and Variable Acceleration"
resourceType: "study-guides"
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
description: "A study guide to variable acceleration, vector motion, motion under gravity and projectiles for OCR A Level Mathematics A (H240), with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide teaches content references 3.02f to 3.02i of the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. Calculus for variable acceleration in one dimension (3.02f) is Stage 1, shared with AS. The two-dimensional extension (3.02g), motion under gravity with vectors (3.02h) and projectiles (3.02i) are **A Level only**. The specification places Mechanics in Paper 3, Pure Mathematics and Mechanics. Constant acceleration formulae are taught in the [units and constant acceleration guide](/resources/ocr-a-level-mathematics-quantities-units-and-kinematics-with-constant/), so they are used here and not rebuilt. Use the [revision notes](/resources/ocr-a-level-mathematics-variable-acceleration-motion-under-gravity-and-revision-notes/) for recall and the [practice set](/resources/ocr-a-level-mathematics-variable-acceleration-motion-under-gravity-and-practice/) for questions. The [course hub](/boards/ocr/a-level/mathematics/), the [checklist](/checklists/ocr/a-level/mathematics/) and the [free diagnostics](/diagnostics/) show where to focus.

## What this unit covers

| Reference | You must be able to | Stage |
|---|---|---|
| 3.02f | Use differentiation and integration with respect to time to solve simple one-dimensional problems on displacement, velocity and acceleration | Stage 1 |
| 3.02g | Extend this to two dimensions with vectors, in column or i, j notation | A Level only |
| 3.02h | Use vectors for vertical-plane motion under gravity, with a = −gj | A Level only |
| 3.02i | Model a projectile as a particle with constant acceleration, and understand the limitation of the model | A Level only |

For 3.02i you must be able to use horizontal and vertical equations of motion, find the magnitude and direction of velocity, find the range on a horizontal plane and the greatest height, and derive and use the cartesian equation of the trajectory. Projectiles on an inclined plane and problems with resistive forces are excluded. The specification says you may take g as 9.8 m s⁻², and this guide does so.

## Variable acceleration in one dimension (3.02f)

When acceleration changes with time, the constant acceleration formulae no longer apply. Use calculus instead.

```
s → differentiate → v → differentiate → a
s ← integrate     ← v ← integrate     ← a
v = ds/dt        a = dv/dt = d²s/dt²
s = ∫v dt        v = ∫a dt
```

Each integration produces a constant. Use a given condition, such as "v = 5 when t = 0", to find it. A definite integral from t = a to t = b gives the **change** in the quantity over that time, so ∫v dt between two times is a change in displacement.

**Displacement or distance?** The integral of v gives displacement. Distance travelled needs the sign of v. Find the times when v = 0, split the interval there, and add the magnitudes.

### Worked example 1

A particle moves on a straight line with velocity v = 2t² − 16t + 30 m s⁻¹ for 0 ≤ t ≤ 6. At t = 0 it is at O. Find its least velocity, and the distance it travels in the six seconds.

```
a = dv/dt = 4t − 16 = 0 when t = 4
v(4) = 32 − 64 + 30 = −2
```

The velocity is a quadratic with a minimum, so the least velocity is **−2 m s⁻¹** at t = 4.

```
s = ∫(2t² − 16t + 30) dt = (2/3)t³ − 8t² + 30t      (s = 0 at t = 0)
v = 2(t − 3)(t − 5) = 0 at t = 3 and t = 5
s(3) = 36     s(5) = 100/3     s(6) = 36
```

The particle goes forward 36 m, back 8/3 m to t = 5, then forward 8/3 m again. The displacement after 6 s is 36 m, but the distance travelled is 36 + 8/3 + 8/3 = 124/3 ≈ **41.3 m**.

### Worked example 2

A particle has acceleration a = 6 − 4t m s⁻². When t = 0, v = 5 and s = 2. Find s in terms of t, and the time at which it is first at rest after t = 0.

```
v = ∫(6 − 4t) dt = 6t − 2t² + C;  v(0) = 5 so C = 5
v = 5 + 6t − 2t²
s = ∫v dt = 5t + 3t² − (2/3)t³ + D;  s(0) = 2 so D = 2
v = 0:  2t² − 6t − 5 = 0
t = (6 + √76)/4 = (3 + √19)/2 ≈ 3.68 s
```

The other root is negative, so it is rejected.

## Two dimensions (3.02g, A Level only)

Write position as r = f(t)i + g(t)j, or as a column vector. Differentiate or integrate each component separately.

```
v = dr/dt = f′(t)i + g′(t)j        a = dv/dt = f″(t)i + g″(t)j
r = ∫v dt                          v = ∫a dt
```

For integration, the constant is now a **vector**. For example v = ∫a dt gives v = (…)i + (…)j + c, and c is found from the initial velocity.

Useful facts:

- Speed is the magnitude of v: √(vₓ² + v_y²).
- Direction is an angle found with tan θ = v_y / vₓ, measured from a stated direction. State it clearly, for example "below the positive x-direction".
- A particle moving parallel to i has no j-component of velocity. One moving parallel to j has no i-component.
- "At rest" needs **both** components zero at the same time.

### Worked example 3

A particle has position r = (2t³ − 6t)i + (9t − t²)j metres at time t seconds. Find its velocity and acceleration at t = 3, and the time when it moves parallel to j.

```
v = (6t² − 6)i + (9 − 2t)j        a = 12t i − 2j
t = 3:  v = 48i + 3j,   a = 36i − 2j
```

At t = 3 the speed is √(48² + 3²) ≈ 48.1 m s⁻¹. Parallel to j needs 6t² − 6 = 0, so t = 1 (t ≥ 0). Then v = 7j. In column form the same working reads r = (2t³ − 6t, 9t − t²), so v = (6t² − 6, 9 − 2t).

### Worked example 4

A particle has acceleration a = (6t − 2)i + 4j m s⁻². At t = 0 its velocity is (i − 3j) m s⁻¹ and its position is 5j m. Find its position vector at t = 2, and the time when it moves parallel to i.

```
v = (3t² − 2t + 1)i + (4t − 3)j        (constants from v(0) = i − 3j)
r = (t³ − t² + t)i + (2t² − 3t + 5)j   (constant from r(0) = 5j)
t = 2:  r = 6i + 7j
```

Parallel to i means 4t − 3 = 0, so **t = 3/4 s**. At that time v = (3 × 9/16 − 3/2 + 1)i = (19/16)i m s⁻¹.

## Motion under gravity with vectors (3.02h, A Level only)

Take i horizontal, j vertically upward. The only acceleration is gravity, so

```
a = −g j = (0, −g) with g = 9.8 m s⁻²
```

The horizontal acceleration is zero and the vertical acceleration is −g. Substitute into the vector forms of the constant acceleration formulae, which are valid because a is constant:

```
v = u + at         r = r₀ + ut + ½at²
```

### Worked example 5

A stone is thrown from the origin with velocity (5i + 12j) m s⁻¹. Find its position and velocity at t = 2, and its speed and direction then.

```
r = (5i + 12j)(2) + ½(−9.8j)(4) = 10i + 4.4j
v = (5i + 12j) + (−9.8j)(2) = 5i − 7.6j
speed = √(5² + 7.6²) = √82.76 ≈ 9.10 m s⁻¹
angle below the horizontal: tan⁻¹(7.6/5) ≈ 56.7°
```

## Projectiles (3.02i, A Level only)

The model treats the projectile as a particle moving with constant acceleration g downwards. Launch speed u at angle α above the horizontal gives components u cos α (horizontal) and u sin α (vertical).

```
Horizontal:  x = (u cos α) t               vₓ = u cos α (constant)
Vertical:    y = (u sin α) t − ½gt²        v_y = u sin α − gt
```

For launch and landing at the same level:

| Quantity | Result | Reason |
|---|---|---|
| Time of flight | T = 2u sin α / g | y = 0 again |
| Range | R = u² sin 2α / g | x at time T |
| Greatest height | H = u² sin²α / (2g) | v_y = 0 at t = u sin α / g |

Do not memorise these without the reasons. When launch and landing levels differ, solve y = (value) for t instead. The speed at any moment is √(vₓ² + v_y²), and the direction is tan⁻¹(|v_y| / vₓ) above or below the horizontal.

### Worked example 6

A ball is launched from level ground with horizontal component 24 m s⁻¹ and vertical component 10 m s⁻¹. Find the time of flight, range and greatest height.

```
10t − 4.9t² = 0 → t = 20/9.8 ≈ 2.04 s
Range = 24 × 2.0408 ≈ 49.0 m
H = 10²/(2 × 9.8) ≈ 5.10 m
```

### Worked example 7

A ball is struck from 1.2 m above level ground with velocity components 12 m s⁻¹ horizontally and 9 m s⁻¹ upwards. Find where it lands and its velocity on landing.

```
1.2 + 9t − 4.9t² = 0 → 4.9t² − 9t − 1.2 = 0
t = (9 + √104.52)/9.8 ≈ 1.962 s    (negative root rejected)
x = 12 × 1.962 ≈ 23.5 m
v_y = 9 − 9.8(1.962) ≈ −10.2
speed = √(12² + 10.22²) ≈ 15.8 m s⁻¹
angle below horizontal = tan⁻¹(10.22/12) ≈ 40.4°
```

### The cartesian equation of the path

Eliminate t. From x = u cos α · t, t = x/(u cos α). Substitute into y:

```
y = x tan α − g x² / (2u² cos²α)
```

This can also be written with sec²α = 1 + tan²α, which turns it into a quadratic in tan α. The curve is a parabola. Use it to test whether a path passes through a point, and to find u or α from a given equation.

### Worked example 8

A projectile moves on the path y = 1.2x − 0.04x² (metres), launched from the origin. Find the launch angle, launch speed, range and greatest height.

```
tan α = 1.2, so α ≈ 50.2°      cos²α = 1/(1 + 1.44) = 1/2.44
g/(2u² cos²α) = 0.04 → u² = 9.8 × 2.44 / 0.08 ≈ 298.9, u ≈ 17.3 m s⁻¹
Range: y = 0 → x = 1.2/0.04 = 30 m
Greatest height at x = 15: y = 18 − 9 = 9 m
```

### Limitations of the model

The model ignores air resistance, so real paths are shorter and steeper on the way down. It treats the object as a particle, so size, spin and shape play no part. It takes g as constant over the height reached, and it ignores wind. When you are asked to comment, name one of these and say how the real result would differ.

## Common errors

- Using s = ut + ½at² when acceleration depends on t. Integrate instead.
- Forgetting the constant of integration, or finding it with the wrong initial condition.
- Reading ∫v dt as distance when v changes sign.
- Differentiating or integrating a vector as a whole instead of component by component.
- Putting g in the horizontal equation, or using u instead of u cos α there.
- Taking the first positive root without checking which time the question asks about.
- Measuring a landing angle from the vertical.
- Using the range formula when launch and landing heights differ.

Next, test yourself with the [practice set](/resources/ocr-a-level-mathematics-variable-acceleration-motion-under-gravity-and-practice/), or revisit the [revision notes](/resources/ocr-a-level-mathematics-variable-acceleration-motion-under-gravity-and-revision-notes/).

## Official syllabus

OCR, *A Level in Mathematics A (H240)*, Version 3.1 (August 2026), for first assessment in 2018, content references 3.02f to 3.02i.
