---
title: "OxfordAQA International AS and A-level Mathematics: Kinematics in a straight line: constant and variable acceleration (9660) -- Revision Notes"
seoTitle: "OxfordAQA 9660 Maths Kinematics Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Kinematics in a straight line: constant and variable acceleration"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 185
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-m1-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m1-motion-constant-acceleration-oxfordaqa-alevel-maths"
  - qualification: "a-level"
    topic: "unit-psm1-m1-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m1-motion-variable-acceleration-oxfordaqa-alevel-maths"
description: "Condensed notes and a self-test on straight-line kinematics with constant and variable acceleration for OxfordAQA International AS Maths 9660 (M1.1, M1.2)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These are condensed notes for sections M1.1 and M1.2 of OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, which belong to International AS Unit PSM1. For the full explanations and longer worked examples, use the [study guide](/resources/oxfordaqa-a-level-mathematics-kinematics-in-a-straight-line-constant-and-variable/). When you are ready, test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-kinematics-in-a-straight-line-constant-and-variable-practice/).

Course hub: [/boards/oxfordaqa/a-level/mathematics/](/boards/oxfordaqa/a-level/mathematics/). Printable checklist: [/checklists/oxfordaqa/a-level/mathematics/](/checklists/oxfordaqa/a-level/mathematics/). Unsure what to revise first? Try the [free 10-minute diagnostics](/diagnostics/). The calculus used here is covered in the [Pure Maths 1 revision notes](/resources/oxfordaqa-a-level-mathematics-p1-revision-notes/).

## Definitions (M1.1)

| Term | Meaning | Sign |
|---|---|---|
| Distance | Total path length | Always ≥ 0 |
| Displacement | Change in position | + or − |
| Speed | Distance ÷ time | Always ≥ 0 |
| Velocity | Displacement ÷ time | + or − |
| Acceleration | Change in velocity ÷ time | + or − |
| Average speed | Total distance ÷ total time | ≥ 0 |
| Average velocity | Displacement ÷ total time | + or − |

Pick a positive direction and state it. Turning round makes distance larger than the size of displacement.

## Graphs

| Graph | Gradient | Area |
|---|---|---|
| Displacement–time (s–t) | Velocity | None needed |
| Velocity–time (v–t) | Acceleration | Displacement |

- Horizontal on v–t: constant velocity. Straight slope: constant acceleration. On the axis: at rest.
- Area above the axis is positive displacement, below is negative. For distance, add the sizes.
- Steeper on s–t means faster. A turning point on s–t has zero gradient.
- Break a v–t graph into rectangles, triangles and trapeziums.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--02-vt-graph-areas.webp" width="900" height="900" alt="A velocity-time graph rises to 12 m/s in 5 s, stays level to t = 11, then falls to minus 4 m/s at t = 15, crossing zero at t = 14. The areas are 30, 72, 18 above the axis and 2 below. Displacement is 118 m and distance 122 m." loading="lazy">
  <figcaption>Gradients give acceleration; areas give displacement, and distance counts every area as positive.</figcaption>
</figure>


## Constant acceleration equations (M1.1)

| Equation | No |
|---|---|
| v = u + at | s |
| s = ut + ½at² | v |
| s = vt − ½at² | u |
| s = ½(u + v)t | a |
| v² = u² + 2as | t |

**Method in steps**

1. Sketch and mark the positive direction.
2. Write u, v, a, s, t and tick the three known, one wanted.
3. Choose the equation missing the unused variable.
4. Substitute with signs and solve.
5. Check the answer's sign and size make sense.

Key phrases: "from rest" means u = 0; "comes to rest" means v = 0; "deceleration of 3" means a = −3 (when the motion is in the positive direction).

**Reminder.** A train slows uniformly from 25 m/s to 10 m/s in 6 s. Then a = (10 − 25) ÷ 6 = −2.5 m/s², and s = ½(25 + 10) × 6 = 105 m.

**Graph reminder.** A lift's velocity rises uniformly from 0 to 3 m/s in 2 s, stays at 3 m/s for 10 s, then falls uniformly to 0 in 3 s. Area = ½ × 2 × 3 + 3 × 10 + ½ × 3 × 3 = 3 + 30 + 4.5 = 37.5 m, taking 15 s, so the average speed is 37.5 ÷ 15 = 2.5 m/s.

**Which equation?** Read the unknown and the three knowns, then match the missing variable in the table above.

| You know | You want | Use |
|---|---|---|
| u, a, t | v | v = u + at |
| u, a, t | s | s = ut + ½at² |
| v, a, t | s | s = vt − ½at² |
| u, v, t | s | s = ½(u + v)t |
| u, v, a | s | v² = u² + 2as |
| u, v, s | a | v² = u² + 2as |

If no single equation fits, find a second unknown first, or form two equations and solve them together.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--03-suvat-trapezium.webp" width="900" height="920" alt="A straight-line velocity-time graph from 5 to 13 m/s over 4 s has gradient 2. The area is a 36 m trapezium that splits into a rectangle of 20 and a triangle of 16. These give v = u + at, s = ½(u+v)t, s = ut + ½at², and eliminating t gives v² = u² + 2as." loading="lazy">
  <figcaption>The suvat equations are the gradient and area of one straight-line velocity-time graph.</figcaption>
</figure>


## Vertical motion under gravity (M1.1)

- Model: a particle, no air resistance, constant acceleration g downwards.
- Take g = 9.8 m/s² (the value the specification uses) unless told otherwise.
- With up as positive, a = −9.8.
- At the top, v = 0.
- Returning to the launch level: same speed, time up equals time down.
- Max height from speed u: u² ÷ 19.6.
- Time to return to launch level: 2u ÷ 9.8.
- Landing below the launch point: s is negative, and you usually get a quadratic in t. Reject the negative root.

**Reminder.** A pebble is thrown up at 10 m/s from a point 3 m above the ground. At landing, s = −3 with up positive.

```
−3 = 10t − 4.9t²  →  4.9t² − 10t − 3 = 0
t = (10 + √(100 + 58.8)) ÷ 9.8 = (10 + 12.60) ÷ 9.8 ≈ 2.31 s
```

The other root is negative, so reject it.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--04-vertical-two-roots.webp" width="900" height="910" alt="A displacement-time parabola for a ball thrown up at 21 m/s peaks at 22.5 m. The line s = 15 m meets it at t = 0.91 s going up and t = 3.38 s coming down, with velocities plus and minus 12.1 m/s from the tangent gradients. The gap of 2.47 s is the time above 15 m." loading="lazy">
  <figcaption>The two roots of the quadratic are the times going up and coming down through the same height.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--07-projectile-two-motions.webp" width="900" height="800" alt="A projectile launched at 24.5 m/s with sin α = 0.6, drawn to scale with dots every 0.5 s. The dots are 9.8 m apart horizontally (constant 19.6 m/s) while vertical speed falls from 14.7 to zero at the top and to minus 14.7 on landing. T = 3 s, R = 58.8 m, H = 11.0 m." loading="lazy">
  <figcaption>Horizontal motion is uniform and vertical motion has acceleration −g; time links the two.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--08-cliff-landing.webp" width="900" height="830" alt="A stone is thrown from a 20 m cliff at 18 m/s and 25 degrees above horizontal. Setting y = minus 20 gives 4.9t² − 7.607t − 20 = 0, with roots 2.94 s and minus 1.39 s. The negative root belongs to the dashed backward extension inside the cliff and is rejected. It lands 48.0 m away at 26.8 m/s." loading="lazy">
  <figcaption>When the landing level differs, put the landing height into y and reject the negative root.</figcaption>
</figure>


## Calculus relationships (M1.2)

```
v = ds/dt          a = dv/dt = d²s/dt²
s = ∫v dt          v = ∫a dt
```

| To find | Do this |
|---|---|
| Velocity from s | Differentiate |
| Acceleration from v | Differentiate |
| Rest | Solve v = 0 |
| Max or min velocity | Solve a = 0, then test |
| Displacement from v | Integrate and use a boundary condition |
| Distance | Split at each time v = 0, add the sizes |

Only P1 calculus is needed: polynomials and t^n with n rational. Reminder: d/dt of t^n is nt^(n−1); ∫t^n dt = t^(n+1)/(n+1) + c for n ≠ −1.

**Method for a distance question**

1. Find v and solve v = 0 within the time interval.
2. Find s (or use definite integrals) at the start, each turning time and the end.
3. Add the sizes of the changes between consecutive times.

**Reminder.** A particle has v = t² − 4t, with s = 0 when t = 0.

```
a = 2t − 4, so a = 0 at t = 2, where v = 4 − 8 = −4 (the least velocity)
v = 0 at t = 0 and t = 4
s = t³/3 − 2t²
s(4) = 64/3 − 32 = −32/3, so the displacement over 4 s is −32/3 m
Since v < 0 for 0 < t < 4, the distance is 32/3 m
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--05-calculus-turning-points.webp" width="900" height="1040" alt="Two graphs share a time axis. Displacement x = 2t³ − 15t² + 24t reaches 11 m at t = 1, minus 16 m at t = 4 and minus 5 m at t = 5. Velocity, its derivative, is zero at t = 1 and 4 and negative between. Displacement is minus 5 m but distance is 11 + 27 + 11 = 49 m." loading="lazy">
  <figcaption>Find where v = 0, split the motion there, and add the sizes of the stages for distance.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--06-vector-motion-plane.webp" width="900" height="900" alt="The path of r = (t³ − 3t)i + (2t² + 1)j from t = 0 to 2 with velocity arrows. At t = 0 the velocity is minus 3i, at t = 1 it is 4j (i component zero) and at t = 2 it is 9i + 8j, speed 12.0 m/s, with acceleration 12i + 4j." loading="lazy">
  <figcaption>Differentiate each component separately; parallel to j means the i component of velocity is zero.</figcaption>
</figure>


## Must-know distinctions

- Displacement versus distance; velocity versus speed.
- Constant acceleration (suvat) versus acceleration that depends on t (calculus).
- v = 0 versus a = 0: they usually happen at different times.
- A definite integral of v is displacement, not distance.
- Gradient of v–t is acceleration; area under v–t is displacement.

## Quick self-test

1. A cyclist rides 30 m north in 4 s, then 18 m south in 6 s. Find the distance, displacement and average speed.
2. A velocity–time graph is a straight line from 5 m/s at t = 0 to 17 m/s at t = 4 s. Find the acceleration.
3. A car starts from rest with acceleration 2.4 m/s². Find the distance in 5 s.
4. A runner's speed rises uniformly from 3 m/s to 15 m/s over 45 m. Find the acceleration and the time taken.
5. A sledge stops uniformly from 10 m/s with deceleration 4 m/s². Find the stopping distance.
6. A stone is dropped from rest from 20 m above the ground. Find the speed on impact and the fall time, to 3 s.f.
7. A ball is thrown up at 7 m/s. Find the maximum height and the time to reach it, to 3 s.f.
8. A particle has s = 2t³ − 27t² + 84t. Find v, the times at rest and the acceleration at each.
9. A particle has a = 6t − 4 and v = 5 when t = 0. Find v in terms of t.
10. A particle has v = 2t + 3. Find its displacement between t = 1 and t = 3.
11. A stone is released from rest and falls 44.1 m. Find the time and the final speed.

### Answers

1. Distance 48 m, displacement 12 m north, average speed 4.8 m/s.
2. a = (17 − 5) ÷ 4 = 3 m/s².
3. s = ½ × 2.4 × 25 = 30 m.
4. a = (15² − 3²) ÷ (2 × 45) = 2.4 m/s²; t = (15 − 3) ÷ 2.4 = 5 s.
5. s = 10² ÷ (2 × 4) = 12.5 m.
6. v = √(2 × 9.8 × 20) = 19.8 m/s; t = √(40 ÷ 9.8) = 2.02 s.
7. Height 49 ÷ 19.6 = 2.5 m; time 7 ÷ 9.8 = 0.714 s.
8. v = 6t² − 54t + 84 = 6(t − 2)(t − 7), so at rest at t = 2 and t = 7. a = 12t − 54, giving a = −30 m/s² at t = 2 and a = 30 m/s² at t = 7.
9. v = 3t² − 4t + 5.
10. [t² + 3t] from 1 to 3 = 18 − 4 = 14 m.
11. t = √(2 × 44.1 ÷ 9.8) = 3 s; v = 9.8 × 3 = 29.4 m/s.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--01-distance-displacement.webp" width="900" height="910" alt="A number line from minus 4 to 14 m shows a particle moving 12 m forward, 5 m back and 9 m back, ending at minus 2 m after 20 s. Distance is 26 m, giving average speed 1.3 m/s. Displacement is minus 2 m, giving average velocity minus 0.1 m/s." loading="lazy">
  <figcaption>Distance adds every leg; displacement only compares start and end, so the two averages differ.</figcaption>
</figure>


## Where marks are usually lost

- No sign convention stated, so the signs of a and v disagree.
- Using a = +9.8 for an upward throw with up positive.
- Quoting a decimal answer from rounded intermediate values.
- Giving displacement when the question asks for distance, or the reverse.
- Not splitting at v = 0 when the particle turns round.
- Leaving out the constant of integration or never using the boundary condition.
- Applying suvat to a particle whose acceleration depends on t.
- Keeping both roots of a quadratic in t, including the negative or zero one.
- Differentiating twice when only v was asked, or integrating when differentiation was needed.
- Writing no units, or the wrong ones (m instead of m/s).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--09-two-angles-one-point.webp" width="900" height="910" alt="Two parabolas from the origin at 14 m/s pass through (10, 5). Using sec²α = 1 + tan²α gives T² − 4T + 3 = 0, so tan α = 1 or 3, α = 45° or 71.6°. The 45° path has range 20 m and is at its top at the point; the 71.6° path has range 12 m and passes it on the way down." loading="lazy">
  <figcaption>Eliminating t gives a quadratic in tan α, so there are usually two launch angles.</figcaption>
</figure>

## Frequently asked questions

**What are the five suvat equations?**
They are v = u + at, s = ut + ½at², s = vt − ½at², s = ½(u + v)t and v² = u² + 2as. Each one leaves out one of the five variables, and they apply only when acceleration is constant.

**What does the area under a velocity–time graph represent?**
It gives the displacement. Area above the time axis is positive displacement and area below is negative; for distance, add the sizes.

**What is the difference between average speed and average velocity?**
Average speed is total distance divided by total time, so it is never negative. Average velocity is displacement divided by total time, and can be positive or negative.

**How do you find the maximum height of a ball thrown upwards?**
At the highest point v = 0, so v² = u² + 2as gives a maximum height of u² ÷ 19.6 when g = 9.8 m/s².

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, published by OxfordAQA. Sections M1.1 and M1.2 of Unit PSM1.
