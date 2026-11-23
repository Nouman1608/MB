---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.15 Coincident, parallel, intersecting and skew lines (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.15
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-15"
description: "IB Maths AA HL 3.15 study guide: classifying two lines as coincident, parallel, intersecting or skew, finding intersections, and collisions of moving objects."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 3.15 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021) covers the classification of two lines as coincident, parallel, intersecting or skew, and finding points of intersection. It is additional higher level (AHL) content, examined at HL only. The method is short, but each step must be written down, because the conclusion depends on all of them.

This page goes deeper on 3.15 alone; the [HL vectors, lines and planes study guide](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes/) covers the whole strand. Condense this page with the [3.15 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-15-revision-notes/) and test yourself with the [3.15 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-15-practice/). Vectors are written in rows here; use columns in the exam.

## The four possibilities

Two questions decide the relationship between L₁: r = a + λb and L₂: r = c + μd.

1. **Are the directions parallel?** That is, is d a scalar multiple of b?
2. **Do the lines share a point?**

| Directions parallel? | Common point? | Relationship |
|---|---|---|
| Yes | Yes (then every point is shared) | Coincident: the same line |
| Yes | No | Parallel and distinct |
| No | Yes (exactly one) | Intersecting |
| No | No | Skew |

**Skew** lines are not parallel and do not meet. They exist only in three dimensions. In a plane, two lines that are not parallel always intersect, so in two dimensions the only cases are coincident, parallel or intersecting.

## The method

**Step 1: compare directions.** If d = kb, go to Step 2a; otherwise go to Step 2b.

**Step 2a (parallel directions).** Test whether a point of one line lies on the other. If it does, the lines are coincident; if not, they are parallel.

**Step 2b (non-parallel directions).** Set a + λb = c + μd, using **different** parameters. This gives three component equations in two unknowns. Solve two of them for λ and μ, then substitute into the third:

- third equation true: the lines intersect; substitute λ (or μ) to find the point;
- third equation false: the lines are skew.

Using the same letter for both parameters assumes the point is reached at the same parameter value on both lines, which is generally false and leads to wrong conclusions.

## Worked examples

### Example 1: skew lines

L₁: r = (1, 0, −1) + λ(2, 1, 1) and L₂: r = (0, 3, 2) + μ(1, −1, 1).

The directions (2, 1, 1) and (1, −1, 1) are not multiples of each other, so the lines are not parallel.

```
x:  1 + 2λ = μ
y:  λ = 3 − μ
Substitute μ = 1 + 2λ into y:  λ = 2 − 2λ  →  λ = 2/3,  μ = 7/3
z check:  L₁ gives −1 + 2/3 = −1/3;  L₂ gives 2 + 7/3 = 13/3
```

−1/3 ≠ 13/3, so the third equation fails: no common point. The lines are not parallel and do not intersect, so they are **skew**. The conclusion must mention both facts.

### Example 2: coincident or merely parallel?

L₁: r = (2, −1, 3) + λ(1, 2, −2) and L₂: r = (4, 3, −1) + μ(−2, −4, 4).

```
(−2, −4, 4) = −2(1, 2, −2): parallel directions
Is (4, 3, −1) on L₁?  x: 2 + λ = 4 → λ = 2
y: −1 + 4 = 3 ✓     z: 3 − 4 = −1 ✓
```

The point is on L₁, so the lines are **coincident**. If L₂ instead passed through (4, 3, 0), the z-check would give −1 ≠ 0 and the lines would be **parallel** and distinct.

### Example 3: an unknown that makes lines intersect

L₁: r = (1, 2, 0) + λ(1, 0, 1) and L₂: r = (k, 0, 3) + μ(0, 1, 1). Find k so that the lines intersect, and find the point of intersection.

```
x:  1 + λ = k
y:  2 = μ
z:  λ = 3 + μ = 5
So k = 1 + 5 = 6, and the point is (6, 2, 5).
Check on L₂: (6, 0 + 2, 3 + 2) = (6, 2, 5) ✓
```

Use the two equations without k to find λ and μ, then the third to find k. The angle between these lines is found from their directions: cos θ = |(1, 0, 1) · (0, 1, 1)|/(√2 × √2) = 1/2, so they meet at 60°.

### Example 4: lines in two dimensions

r = (1, 2) + λ(3, 1) and r = (4, 0) + μ(1, −1). The directions are not parallel, so the lines intersect.

```
x:  1 + 3λ = 4 + μ
y:  2 + λ = −μ
Substitute μ = −2 − λ:  1 + 3λ = 2 − λ  →  λ = 1/4
Point: (1 + 3/4, 2 + 1/4) = (7/4, 9/4)
```

There is no third equation to check in two dimensions.

## Moving objects: crossing paths and collisions

When the parameter is time, two different questions can be asked.

- **Do the paths cross?** Use different parameters, as above. Paths can cross at a point that the two objects reach at different times.
- **Do the objects collide?** Use the **same** time t for both. A collision needs the same position at the same time.

### Example 5: paths cross, no collision

A: r = (1, 2, 0) + t(2, 0, 1) and B: r = (6, 3, 1) + t(1, −1, 2), with t in seconds.

```
Paths (parameters s for A, u for B):
x:  1 + 2s = 6 + u
y:  2 = 3 − u          →  u = 1, then s = 3
z:  s = 1 + 2u         →  3 = 3 ✓
The paths cross at (7, 2, 3).
```

A reaches (7, 2, 3) at t = 3 but B reaches it at t = 1, so they do not collide. A direct collision test with one t confirms it: x gives 1 + 2t = 6 + t, so t = 5, but then y gives 2 for A and −2 for B.

## Common mistakes

- Using the same parameter for both lines when testing for intersection.
- Declaring lines skew after only checking that the directions are not parallel.
- Declaring lines parallel when they are actually coincident, by not testing a common point.
- Solving three equations, finding they are consistent, and forgetting to give the point of intersection.
- Calling two non-intersecting lines in a plane skew.
- Treating crossing paths as a collision.

## Exam technique

- **Show that the lines are skew**: state that the directions are not parallel, solve two equations, show the third fails, and write the conclusion with both reasons.
- **Show that the lines intersect and find the point**: give λ and μ, show the third equation holds, then give the coordinates.
- **Determine** the relationship: follow the method and name the case.
- **Hence** find the angle between the lines: use the directions only, with |b · d| for the acute angle.
- For moving objects, **state** whether you are testing paths (two parameters) or collision (one time).

## Where to go next

- Recall the method with the [3.15 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-15-revision-notes/) and practise with the [3.15 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-15-practice/).
- Revise line equations in the [3.14 guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-14/).
- Continue to the [3.16 vector product guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-16/).
