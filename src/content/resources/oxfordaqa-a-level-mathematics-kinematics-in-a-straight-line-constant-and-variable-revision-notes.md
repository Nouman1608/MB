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
description: "Condensed notes and a self-test on straight-line kinematics for OxfordAQA International AS Maths 9660, sections M1.1 and M1.2."
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

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, published by OxfordAQA. Sections M1.1 and M1.2 of Unit PSM1.
