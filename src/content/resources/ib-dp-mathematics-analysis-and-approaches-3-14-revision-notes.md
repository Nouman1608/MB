---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.14 Vector equation of a line in two and three dimensions (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.14
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-14"
description: "IB Maths AA HL 3.14 revision notes: vector, parametric and Cartesian forms of a line, angles between lines, closest points and kinematics, with a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section 3.14 of IB DP Mathematics: Analysis and Approaches (first assessment 2021), which is HL only (AHL): the vector equation of a line in two and three dimensions, the angle between two lines, and simple applications to kinematics. The worked examples are in the [3.14 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-14/); test yourself afterwards with the [3.14 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-14-practice/). Vectors are written in rows here; use columns in the exam.

## Forms of a line

For the line through (x₀, y₀, z₀) with direction (l, m, n):

| Form | Equation |
|---|---|
| Vector | r = (x₀, y₀, z₀) + λ(l, m, n) |
| Parametric | x = x₀ + λl, y = y₀ + λm, z = z₀ + λn |
| Cartesian | (x − x₀)/l = (y − y₀)/m = (z − z₀)/n |
| Through A and B | r = a + λ(b − a) |
| 2D Cartesian | eliminate λ to get ax + by = c |

If a direction component is 0, that coordinate is constant and is written separately, for example x = 5.

## Key terms

| Term | Meaning |
|---|---|
| Position vector a | Vector to a known point on the line |
| Direction vector b | Any vector parallel to the line |
| Parameter λ | Scalar; each value gives one point on the line |
| Acute angle between lines | From cos θ = \|b₁ · b₂\|/(\|b₁\|\|b₂\|) |
| Velocity vector | b in r = a + tb, when t is time |
| Speed | \|b\| |
| Foot of the perpendicular | The point on a line closest to a given point |

## Converting forms

- **Vector to Cartesian:** write the parametric equations, make λ the subject of each, set them equal.
- **Cartesian to vector:** rewrite each fraction as (x − x₀)/l; the numbers subtracted give the point, the denominators give the direction.
- **Watch for:** (4 − y)/3 = (y − 4)/(−3); z/2 = (z − 0)/2; 2x − 1 = (x − 1/2)/(1/2), so the direction component is 1/2 (or scale every component by 2).

## Methods

**Line through two points A and B**

1. Direction b − a.
2. r = a + λ(b − a).

**Is P on the line?**

1. Find λ from one component.
2. Substitute into the other two; all must agree.

**Angle between two lines**

1. Take the direction vectors only.
2. cos θ = |b₁ · b₂|/(|b₁||b₂|) for the acute angle.

**Closest point to P on a line (foot of the perpendicular)**

1. Write a general point Q of the line in terms of λ.
2. Form PQ = q − p.
3. Solve PQ · b = 0 for λ.
4. Substitute for Q; the shortest distance is |PQ|.

**Kinematics: r = a + tb**

1. Initial position a; velocity b; speed |b|.
2. Position at time t: substitute t.
3. Time to reach a point: solve one component, check the others.
4. Closest approach: minimise |r − p|², or use the perpendicular condition.

## Worked reminders

- Through (2, 0, −1) and (5, 4, −1): r = (2, 0, −1) + λ(3, 4, 0); Cartesian (x − 2)/3 = y/4, z = −1.
- (x + 3)/4 = (1 − y)/2 = (z − 2)/5 has point (−3, 1, 2) and direction (4, −2, 5).
- Directions (1, 0, 1) and (0, 1, 1): cos θ = 1/2, so the lines meet (or pass) at 60°.
- r = (1, 2) + t(6, 8): speed 10 units per unit time; position at t = 0.5 is (4, 6).
- A line in 2D with direction (3, −2) has gradient −2/3.

## Exam traps

- **Point vs direction.** Subtract to get the direction from two points.
- **"r =" missing.** The equation must start "r =".
- **Negative signs in Cartesian form.** Rewrite (3 − x)/2 as (x − 3)/(−2) before reading.
- **Obtuse angle.** Use the modulus for the angle between lines.
- **All three components.** A point lies on a line only if one λ fits every component.
- **Time is not rescalable.** In kinematics, b is the velocity; do not simplify it.
- **Speed vs velocity.** Speed is a number, |b|; velocity is the vector b.

## Self-test

1. Write a vector equation of the line through (4, −1, 2) with direction (1, 3, −2).
2. Write the line in question 1 in Cartesian form.
3. Find a vector equation of the line through A(0, 2, 5) and B(3, 2, 1).
4. Write (x − 1)/2 = (y + 3)/(−1) = (5 − z)/4 in vector form.
5. Does (5, 0, 1) lie on r = (1, 4, 3) + λ(2, −2, −1)?
6. Find the acute angle between lines with directions (1, 1, 0) and (1, 0, 0).
7. Write r = (2, 5) + λ(1, −3) in the form ax + by = c.
8. A particle has position r = (1, −2, 0) + t(2, 2, 1). Find its speed.
9. For the particle in question 8, find its position when t = 3.
10. Find λ for the foot of the perpendicular from the origin to r = (3, 0, 0) + λ(1, 1, 0).
11. Hence find the shortest distance from the origin to that line.
12. Explain why r = (1, 1) + λ(2, 2) and r = (3, 3) + μ(−1, −1) are the same line.

### Answers

1. r = (4, −1, 2) + λ(1, 3, −2).
2. (x − 4)/1 = (y + 1)/3 = (z − 2)/(−2).
3. r = (0, 2, 5) + λ(3, 0, −4).
4. r = (1, −3, 5) + λ(2, −1, −4).
5. x gives λ = 2; y: 4 − 4 = 0 ✓; z: 3 − 2 = 1 ✓. Yes.
6. cos θ = 1/√2, so 45°.
7. x = 2 + λ, y = 5 − 3λ, so 3x + y = 11.
8. |(2, 2, 1)| = 3.
9. (7, 4, 3).
10. (3 + λ, λ, 0) · (1, 1, 0) = 3 + 2λ = 0, so λ = −3/2.
11. Foot (3/2, −3/2, 0); distance √(9/4 + 9/4) = 3√2/2.
12. (3, 3) is on the first line (λ = 1), and (−1, −1) is a multiple of (2, 2).

## Links

Return to the [3.14 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-14/) for the worked closest-approach model, and see the whole strand in the [HL vectors revision notes](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes-revision-notes/).
