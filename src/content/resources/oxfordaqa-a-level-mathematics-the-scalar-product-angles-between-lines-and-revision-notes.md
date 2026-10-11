---
title: "OxfordAQA International AS and A-level Mathematics: Scalar product and perpendicular distance (9660) -- Revision Notes"
seoTitle: "OxfordAQA A-level Maths Scalar Product Notes (9660)"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "The scalar product, angles between lines and perpendicular distance"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 200
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-vectors-oxfordaqa-alevel-maths"
description: "Condensed revision notes on the scalar product, the angle between lines and the perpendicular distance from a point to a line, for OxfordAQA 9660 Unit P2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Quick recall for the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, section P2.10 (second part): the scalar product, the angle between two lines, and the foot of the perpendicular and perpendicular distance from a point to a line. This content belongs to International A-level Unit P2 and is not examined at International AS. For full explanations, use the [study guide](/resources/oxfordaqa-a-level-mathematics-the-scalar-product-angles-between-lines-and/).

Links: [course hub](/boards/oxfordaqa/a-level/mathematics/), [checklist](/checklists/oxfordaqa/a-level/mathematics/), [practice questions](/resources/oxfordaqa-a-level-mathematics-the-scalar-product-angles-between-lines-and-practice/) and the [free diagnostics](/diagnostics/).

## Key results

| Result | Statement |
|---|---|
| Component form | (x, y, z).(a, b, c) = xa + yb + zc |
| Geometric form | u.v = \|u\|\|v\| cos θ, with 0° ≤ θ ≤ 180° |
| Angle | cos θ = (u.v) / (\|u\|\|v\|) |
| Perpendicular | u.v = 0 (both vectors non-zero) |
| Length | u.u = \|u\|² |
| Parallel, same way | u.v = \|u\|\|v\| |
| Parallel, opposite way | u.v = −\|u\|\|v\| |
| Sign | u.v > 0 acute, u.v < 0 obtuse |
| Rules | u.v = v.u and u.(v + w) = u.v + u.w |
| Line | r = a + td; direction d, point a |
| 2D line y = mx + c | direction (1, m) |
| 2D line ax + by = c | direction (b, −a) |

The scalar product is a number. The answer is never a vector.

## Terms to know

- **Scalar product**: the number xa + yb + zc found from two vectors. It is also called the dot product.
- **Direction vector**: any non-zero vector parallel to the line. Multiples of it describe the same direction.
- **Foot of the perpendicular**: the point on the line nearest to P, where PX meets the line at a right angle.
- **Perpendicular distance**: the length PX, the shortest distance from P to the line.
- **Skew lines**: lines in three dimensions that are neither parallel nor intersecting. They still have an angle between them.


## Method: angle between two lines

1. Read off the direction vectors d₁ and d₂ and set aside the points a.
2. Find d₁.d₂, |d₁| and |d₂|.
3. cos θ = (d₁.d₂) / (|d₁||d₂|).
4. If the answer is obtuse and the question asks for the angle between the lines, give the acute one, 180° − θ.

Works for skew lines. Works for parallel lines (0°) and perpendicular lines (90°).

Quick reminder: directions (1, 1, 0) and (0, 1, 1). Scalar product 1, magnitudes √2 and √2, so cos θ = 1/2 and θ = 60°.

### Short worked reminder (three dimensions)

Direction vectors (6, 2, 3) and (0, −4, 3).

```
d₁.d₂ = 0 − 8 + 9 = 1
|d₁| = √(36 + 4 + 9) = 7
|d₂| = √(0 + 16 + 9) = 5
cos θ = 1/35, so θ = 88.4° (1 d.p.)
```

The scalar product is positive, so this is already the acute angle. The lines are almost, but not exactly, perpendicular.

### Short worked reminder (an unknown constant)

Lines with directions (1, 2, 2) and (p, 0, 1) meet at 45°. Find p.

```
d₁.d₂ = p + 2
|d₁| = 3, |d₂| = √(p² + 1)
(p + 2) / (3√(p² + 1)) = 1/√2
2(p + 2)² = 9(p² + 1)
7p² − 8p + 1 = 0
(7p − 1)(p − 1) = 0
p = 1/7 or p = 1
```

Squaring can introduce roots that give the supplementary angle. Here p + 2 is positive for both values, so both give 45°.

## Method: foot of the perpendicular

For P and line l: r = a + td:

1. X = a + td, written as coordinates in t.
2. PX = X − P, in terms of t.
3. Solve PX.d = 0 for t.
4. Substitute t into X. That point is the foot.

The perpendicular distance is |PX| at that t.

### Short worked reminder (two dimensions)

Find the foot and the distance from P(3, 3) to the line r = (1, −3) + t(2, 1).

```
X = (1 + 2t, −3 + t)
PX = (2t − 2, t − 6)
PX.d = 2(2t − 2) + (t − 6) = 5t − 10 = 0, so t = 2
X = (5, −1)
PX = (2, −4), |PX| = √(4 + 16) = √20 = 2√5
```

The foot is (5, −1) and the distance is 2√5, about 4.47.

### Alternative: no foot needed

If A is on the line and d is its direction:

```
distance² = |AP|² − (AP.d / |d|)²
```

Use this when the question asks only for the distance. If it asks for the foot, you still need t.

## Must-know distinctions

- Scalar product versus vector: one is a number, the other a vector.
- Direction vector versus position vector: only direction vectors give the angle between lines.
- Angle between vectors versus angle between lines: vectors can give an obtuse angle, lines are quoted as acute (or 90°).
- Perpendicular distance versus distance to a point on the line: only the foot gives the shortest distance.
- Perpendicular test versus parallel test: perpendicular needs u.v = 0. Parallel needs one vector to be a multiple of the other.
- Unknown constants: set u.v = 0 for perpendicular. For a given angle, use the cosine form and expect a quadratic after squaring, then check which roots fit the sign of the scalar product.

## Exam habits

- Write the vectors in full before the scalar product, with brackets round negatives.
- Keep surds exact until the final line, then give the decimal the question asks for.
- Show cos θ = ... as its own line before you take the inverse cosine.
- Test your foot: PX.d should come out as 0.
- Say what you are finding. A line such as "direction vectors are..." makes your method clear.

## Triangle checklist

- Angle ABC: vectors BA and BC, both starting at B.
- Right angle at A: AB.AC = 0.
- Area with a right angle at A: ½ × AB × AC.
- Area in general: ½ × BC × AD, where D is the foot of the perpendicular from A to BC.

### Short worked reminder (angle in a triangle)

A(2, 0, 1), B(4, 2, 2) and C(3, −1, 3). Find angle BAC.

```
AB = (2, 2, 1)     AC = (1, −1, 2)
AB.AC = 2 − 2 + 2 = 2
|AB| = 3, |AC| = √6
cos A = 2 / (3√6) = √6/9
A = 74.2° (1 d.p.)
```

Both vectors start at A, which is the vertex of the angle. Using AB and CA instead would give the supplement.

## Quick self-test

1. Evaluate (2, −3, 1).(4, 1, −5). What does your answer tell you?
2. Find |(2, −3, 6)|.
3. |a| = 4, |b| = 5 and the angle between a and b is 60°. Find a.b.
4. Find the angle between (1, 2, 2) and (0, 3, 4), to 1 d.p.
5. Find k so that (3, k, 1) and (k, 2, −3) are perpendicular.
6. Lines have directions (1, 2, −2) and (−1, 0, 1). Find the acute angle between the lines.
7. Find the foot and distance from P(3, 2, 6) to the line r = (0, 1, 2) + t(1, 2, 0).
8. If u.v = −|u||v|, what is the angle between u and v?
9. P is 13 units from A on a line. The part of AP along the line has length 12. How far is P from the line?
10. Why can the angle between two lines never be quoted as 120°?
11. Find the acute angle between y = x + 2 and y = 3x − 1, to 1 d.p.
12. Find the foot of the perpendicular from (4, 0) to the line y = x, and the distance.

### Answers

1. 8 − 3 − 5 = 0, so the vectors are perpendicular.
2. √(4 + 9 + 36) = 7.
3. 4 × 5 × cos 60° = 10.
4. Scalar product 14, magnitudes 3 and 5, cos θ = 14/15, so θ = 21.0°.
5. 3k + 2k − 3 = 0, so k = 3/5.
6. Scalar product −1 − 2 = −3, magnitudes 3 and √2, cos θ = −1/√2, so the vectors are at 135° and the lines at 45°.
7. t = 1 gives the foot (1, 3, 2). PX = (2, −1, 4) has scalar product 0 with (1, 2, 0). Distance √21.
8. 180°. The vectors point in opposite directions.
9. √(13² − 12²) = 5.
10. Two lines make a pair of supplementary angles, 60° and 120°, and the convention is to quote the acute one, 60°.
11. Directions (1, 1) and (1, 3). Scalar product 4, magnitudes √2 and √10, cos θ = 4/√20 = 2/√5, so θ = 26.6°.
12. The line is r = t(1, 1). X = (t, t) and PX = (t − 4, t), so PX.d = 2t − 4 = 0 and t = 2. The foot is (2, 2) and the distance is √(4 + 4) = 2√2.

## Where marks are usually lost

- Using the position vectors of the lines instead of their direction vectors.
- Forgetting the denominator |u||v| when finding cos θ.
- Sign slips in the scalar product, especially with negative components. Write each product in brackets first.
- Giving the obtuse angle when the question asks for the angle between two lines.
- Solving PX.d = 0 correctly but not substituting back to give the foot as a point.
- Presenting |AP| (a point on the line) as the perpendicular distance.
- Rounding in the middle of a chain of working, then giving a final answer that is slightly off.
- Using the scalar product to test for parallel lines. It tests for perpendicular ones.
- Claiming a result with no working when the question says show that. Write every line.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section P2.10 (Vectors), published by OxfordAQA. For International AS exams from May/June 2018 and International A-level exams from May/June 2019.
