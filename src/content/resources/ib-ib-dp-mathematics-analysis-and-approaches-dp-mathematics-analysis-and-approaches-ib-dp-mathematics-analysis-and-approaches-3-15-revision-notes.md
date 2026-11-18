---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Coincident, parallel, intersecting and skew lines (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 3 -- Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.15
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-15"
description: "IB Maths AA HL 3.15 revision notes: deciding if two lines are coincident, parallel, intersecting or skew, intersection points and collisions, with a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section 3.15 of IB DP Mathematics: Analysis and Approaches (first assessment 2021), which is HL only (AHL): classifying two lines as coincident, parallel, intersecting or skew, and finding points of intersection. The worked examples are in the [3.15 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-15/); test yourself afterwards with the [3.15 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-15-practice/). Vectors are written in rows here; use columns in the exam.

## Decision table

For L₁: r = a + λb and L₂: r = c + μd:

| d = kb? | Common point? | Lines are | Points in common |
|---|---|---|---|
| yes | yes | coincident | infinitely many |
| yes | no | parallel | none |
| no | yes | intersecting | exactly one |
| no | no | skew (3D only) | none |

## Key terms

| Term | Meaning |
|---|---|
| Coincident lines | Two equations describing the same line |
| Parallel lines | Parallel directions, no common point |
| Intersecting lines | Meet at exactly one point |
| Skew lines | Not parallel and do not intersect; only possible in three dimensions |
| Parameter | The scalar (λ, μ) in a line equation; use a different letter for each line |
| Collision | Two moving objects at the same point at the same time |

## Method

1. **Directions.** Is d a multiple of b? Check every component with the same k.
2. **Parallel directions:** substitute a point of L₂ into L₁.
   - fits: coincident;
   - does not fit: parallel.
3. **Non-parallel directions:** set a + λb = c + μd.
   - Solve two component equations for λ and μ (choose the easiest pair).
   - Substitute into the third.
   - True: intersecting; find the point from either line.
   - False: skew.
4. **Write the conclusion** with the reasons: "not parallel and no common point, so skew".

## Moving objects

| Question | Parameters | Condition |
|---|---|---|
| Do the paths cross? | different (s and u) | all three components agree for some s, u |
| Do the objects collide? | the same time t | all three components agree for one t |

Paths can cross without a collision if the objects reach the crossing point at different times.

## Worked reminders

- Directions (2, −4, 6) and (−1, 2, −3): parallel (k = −1/2), so the lines are parallel or coincident, never skew.
- Directions (1, 2, 3) and (2, 4, 5): not parallel (the third component breaks the ratio).
- L₁: r = (0, 0, 0) + λ(1, 1, 0), L₂: r = (2, 0, 1) + μ(0, 1, 0). z: 0 = 1 fails immediately for every λ, μ, and the directions are not parallel: skew.
- L₁: r = (1, 1) + λ(2, 1), L₂: r = (5, 3) + μ(−4, −2): parallel directions, and (5, 3) is on L₁ at λ = 2: coincident.
- A: r = (0, 0) + t(1, 2); B: r = (3, 0) + t(−1, 4): x gives t = 1.5, then y gives 3 and 6, so no collision.

## Exam traps

- **Same parameter for both lines.** Only for collisions; never for intersections.
- **Only two equations checked.** In 3D, the third equation decides between intersecting and skew.
- **Parallel without testing a point.** The lines could be coincident.
- **Skew in 2D.** Impossible; two non-parallel lines in a plane always meet.
- **Missing coordinates.** "They intersect" without the point loses the final mark when the point is asked for.
- **A component of 0.** For directions (1, 0, 2) and (2, 0, 4), the zero components agree, so they are parallel; (1, 0, 2) and (2, 1, 4) are not.

## Self-test

1. Can lines with directions (3, −1, 2) and (−6, 2, −4) be skew?
2. Define skew lines.
3. L₁: r = (1, 2, 3) + λ(1, 1, 1); L₂: r = (3, 4, 5) + μ(2, 2, 2). Classify.
4. L₁: r = (1, 2, 3) + λ(1, 1, 1); L₂: r = (3, 4, 6) + μ(2, 2, 2). Classify.
5. L₁: r = (0, 1, 2) + λ(1, 0, 1); L₂: r = (1, 1, 0) + μ(0, 0, 1). Do they intersect?
6. For question 5, give the point or explain.
7. L₁: r = (1, 0, 0) + λ(0, 1, 0); L₂: r = (0, 0, 1) + μ(1, 0, 0). Classify.
8. Find the intersection of r = (2, 1) + λ(1, 1) and r = (0, 5) + μ(1, −1).
9. Two lines intersect at λ = 2 on L₁: r = (1, 0, 4) + λ(3, 1, −1). Find the point.
10. A: r = (1, 1, 0) + t(1, 0, 1); B: r = (3, −1, 0) + t(0, 1, 1). Do A and B collide?
11. For question 10, do the paths cross?
12. Why must the parameters be different when testing two lines for intersection?

### Answers

1. No: (−6, 2, −4) = −2(3, −1, 2), so the lines are parallel or coincident.
2. Lines that are not parallel and do not intersect.
3. Parallel directions; (3, 4, 5) is on L₁ at λ = 2, so coincident.
4. Parallel directions; λ = 2 gives (3, 4, 5) ≠ (3, 4, 6), so parallel.
5. x: λ = 1; y: 1 = 1 ✓; z: 3 = μ. Yes.
6. (1, 1, 3).
7. Equate: λ-line gives (1, λ, 0); μ-line gives (μ, 0, 1); z: 0 = 1 fails, and the directions are not parallel, so skew.
8. 2 + λ = μ and 1 + λ = 5 − μ give λ = 1, so (3, 2).
9. (7, 2, 2).
10. x: 1 + t = 3, so t = 2; y: 1 vs 1 ✓; z: 2 vs 2 ✓. Yes, at (3, 1, 2) when t = 2.
11. Yes; colliding objects' paths always cross.
12. The common point can be reached at different parameter values on the two lines.

## Links

Go back to the [3.15 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-15/) for the full collision example, and see the whole strand in the [HL vectors revision notes](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes-revision-notes/).
