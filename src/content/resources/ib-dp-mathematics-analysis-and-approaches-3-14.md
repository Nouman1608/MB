---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.14 Vector equation of a line in two and three dimensions (AHL only)"
resourceType: "study-guides"
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
description: "IB Maths AA HL 3.14 study guide: r = a + λb, parametric and Cartesian forms, angles between lines, perpendicular distance and constant-velocity kinematics."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 3.14 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021) covers the vector equation of a line in two and three dimensions, r = a + λb, the angle between two lines, and simple applications to kinematics. You also need the parametric and Cartesian forms of a line. It is additional higher level (AHL) content, examined at HL only.

This page goes deeper on 3.14 alone; the [HL vectors, lines and planes study guide](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes/) covers the strand as a whole. Condense this page with the [3.14 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-14-revision-notes/) and test yourself with the [3.14 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-14-practice/). Vectors are written in rows here; use columns in the exam.

## How the vector equation works

In r = a + λb:

- a is the position vector of **one known point** on the line;
- b is a **direction vector**, parallel to the line;
- λ is a scalar parameter. Each real value of λ gives the position vector r of one point on the line.

λ = 0 gives the point a itself; λ = 1 gives a + b; negative λ gives points on the other side of a. As λ runs through all real numbers, r traces the whole line.

The equation is **not unique**. Any point on the line can replace a, and any non-zero multiple of b can replace b. So r = (1, 2) + λ(2, 4) and r = (3, 6) + μ(1, 2) describe the same line. When your answer differs from a mark scheme, check that your point lies on their line and that the directions are parallel.

## The three forms

For a line through (x₀, y₀, z₀) with direction (l, m, n):

```
Vector:       r = (x₀, y₀, z₀) + λ(l, m, n)
Parametric:   x = x₀ + λl,  y = y₀ + λm,  z = z₀ + λn
Cartesian:    (x − x₀)/l = (y − y₀)/m = (z − z₀)/n
```

Each Cartesian fraction equals λ, which is how you move between forms.

### Reading Cartesian equations carefully

| Cartesian equation | Point | Direction | Why |
|---|---|---|---|
| (x − 2)/3 = (y + 1)/(−2) = z/4 | (2, −1, 0) | (3, −2, 4) | standard form; z/4 = (z − 0)/4 |
| (3 − x)/2 = (y − 1)/5 = z + 4 | (3, 1, −4) | (−2, 5, 1) | (3 − x)/2 = (x − 3)/(−2); z + 4 = (z + 4)/1 |
| x = 5, (y − 1)/2 = z/3 | (5, 1, 0) | (0, 2, 3) | x never changes, so its direction component is 0 |

In two dimensions, eliminate λ to get an ordinary straight-line equation. For r = (1, 3) + λ(2, −1): x = 1 + 2λ and y = 3 − λ, so λ = 3 − y and x = 1 + 2(3 − y), giving **x + 2y = 7**. The direction (2, −1) matches the gradient −1/2.

## Worked examples

### Example 1: is a point on a line?

Does (7, −5, 12) lie on r = (1, −1, 0) + λ(3, −2, 6)?

```
x: 1 + 3λ = 7    →  λ = 2
y: −1 − 2(2) = −5   ✓
z: 0 + 6(2) = 12    ✓
```

One value of λ satisfies all three components, so the point is on the line. If any component failed, it would not be.

### Example 2: the angle between two lines

Find the acute angle between lines with directions (2, −1, 2) and (1, 1, −4).

```
|b₁ · b₂| = |2 − 1 − 8| = 7
|b₁| = 3,  |b₂| = √18 = 3√2
cos θ = 7/(9√2)
θ = 56.6° (3 s.f.)
```

Only the directions matter; the points on the lines do not. The modulus in the numerator gives the acute angle, which is the convention for the angle between two lines. This method uses the scalar product from the [3.13 guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-13/).

### Example 3: the foot of the perpendicular

Find the point Q on L: r = (1, 0, 2) + λ(2, 1, −1) closest to P(5, 1, 3), and the shortest distance from P to L.

```
A general point of L: Q = (1 + 2λ, λ, 2 − λ)
PQ = Q − P = (2λ − 4, λ − 1, −1 − λ)
PQ is perpendicular to L:  2(2λ − 4) + (λ − 1) − (−1 − λ) = 0
6λ − 8 = 0  →  λ = 4/3
Q = (11/3, 4/3, 2/3),  PQ = (−4/3, 1/3, −7/3)
|PQ| = √(16 + 1 + 49)/3 = √66/3 ≈ 2.71
```

The idea: the shortest segment from a point to a line meets the line at right angles, so its scalar product with the direction vector is zero.

## Lines as paths: kinematics

If the position of an object at time t is r = a + tb, then:

- a is the **initial position** (t = 0);
- b is the **velocity vector**;
- |b| is the **speed**;
- the displacement after time t is tb, and the distance travelled is t|b|.

Here the parameter has a meaning, time, so you cannot rescale b without changing the motion. Two equations describing the same path but with different speeds are different motions.

### Example 4: closest approach

*Invented data.* A ship leaves harbour O at noon with velocity (4, 3) km h⁻¹, so its position t hours later is r = t(4, 3). A lighthouse is at L(10, 20). When is the ship closest to the lighthouse, and how close does it come?

```
Speed = |(4, 3)| = 5 km h⁻¹
LS = (4t − 10, 3t − 20)
|LS|² = (4t − 10)² + (3t − 20)² = 25t² − 200t + 500
Minimum where t = 200/50 = 4 (vertex of the quadratic)
|LS|² = 25(16) − 800 + 500 = 100, so the distance is 10 km
```

The ship is closest at 16:00, at (16, 12), 10 km from the lighthouse. Check: LS = (6, −8) and (6, −8) · (4, 3) = 24 − 24 = 0, so LS is perpendicular to the path, as Example 3 predicts. You could also minimise |LS|² with calculus, or on a GDC.

## Common mistakes

- Using a point of the line as the direction vector, for example writing r = (1, 2, 3) + λ(4, 0, 4) for the line through (1, 2, 3) and (4, 0, 4). The direction is (4, 0, 4) − (1, 2, 3) = (3, −2, 1).
- Misreading Cartesian equations such as (3 − x)/2 or z + 4; rewrite each fraction as (x − x₀)/l first.
- Writing a vector equation without "r =", which is not an equation.
- Finding the obtuse angle between lines; take the modulus of the scalar product.
- Using the speed as the velocity, or the position vector as the velocity.
- Checking only two components when testing whether a point is on a line.

## Exam technique

- **Write down** a vector equation: give "r =" with a point and a direction; any correct pair scores.
- **Find the Cartesian equation**: show the parametric step if the conversion is not obvious.
- **Show that** a point lies on a line: find λ from one component and verify the other two.
- **Find the acute angle**: show |b₁ · b₂|, both magnitudes, and the inverse cosine.
- In kinematics, **interpret**: say what t, a, b and |b| mean, with units.

## Where to go next

- Recall the forms with the [3.14 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-14-revision-notes/) and practise with the [3.14 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-14-practice/).
- Compare two lines, and two moving objects, in the [3.15 coincident, parallel, intersecting and skew lines guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-15/).
