---
title: "IB DP Mathematics: Applications and Interpretation -- Radians, the unit circle, matrix transformations and vectors (HL) Study Guide"
seoTitle: "IB Maths AI HL Radians, Matrices and Vectors Study Guide"
resourceType: "study-guides"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Radians, the unit circle, matrix transformations and vectors (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 3.7
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-7"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-8"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-9"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-10"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-11"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-12"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-13"
description: "Study guide for IB Maths AI HL sections 3.7-3.13: radians, the unit circle, matrix transformations, vectors, kinematics, scalar and vector products."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the HL geometry unit on radians, the unit circle, matrix transformations and vectors in IB Diploma Programme Mathematics: Applications and Interpretation. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 3.7–3.13, and all of it is HL only (AHL). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 HL sessions.

All three HL papers require technology. On HL papers, radian measure is assumed unless the question says otherwise. Vectors written in a row here, such as (2, −1, 3), stand for column vectors.

See the [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/), the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) and the [geometry and trigonometry strand overview](/resources/ib-dp-mathematics-ai-geometry-trigonometry/).

## What this unit covers

| Section | What you must be able to do | SL/HL |
|---|---|---|
| 3.7 | Define a radian; convert between degrees and radians; find arc length and sector area in radians | HL only |
| 3.8 | Define cos θ and sin θ on the unit circle; use cos²θ + sin²θ = 1 and tan θ = sin θ / cos θ; handle the ambiguous case of the sine rule; solve trig equations graphically on a finite interval | HL only |
| 3.9 | Use matrices for reflections, stretches, enlargements, translations and rotations; compose them; interpret the determinant as an area scale factor | HL only |
| 3.10 | Work with vectors and scalars, components, unit and base vectors, position vectors, magnitude, rescaling and normalising | HL only |
| 3.11 | Write the vector equation of a line in 2D and 3D and convert it to parametric form | HL only |
| 3.12 | Model motion with constant velocity (r = r₀ + vt) and variable velocity in 2D; find closest approach | HL only |
| 3.13 | Use the scalar and vector products; find angles, areas and components of vectors | HL only |

## 3.7 Radians, arcs and sectors

One radian is the angle at the centre of a circle made by an arc equal in length to the radius. A full turn is 2π radians, so:

- π rad = 180°
- degrees → radians: multiply by π/180
- radians → degrees: multiply by 180/π

Radian answers may be exact multiples of π or decimals.

With θ in radians and radius r:

- arc length l = rθ
- sector area A = ½r²θ

**Worked example.** (a) Convert 150° to radians. (b) A sector has radius 8 cm and angle 1.2 rad. Find its arc length, area and perimeter.

```
(a) 150 × π/180 = 5π/6 (= 2.62 rad, 3 s.f.)
(b) l = 8 × 1.2 = 9.6 cm
    A = ½ × 8² × 1.2 = 38.4 cm²
    perimeter = 8 + 8 + 9.6 = 25.6 cm
```

The perimeter includes both radii.

## 3.8 The unit circle and further trigonometry

### Definitions

On the circle of radius 1 centred at the origin, turn anticlockwise from the positive x-axis through angle θ. The point you reach is (cos θ, sin θ). This defines cosine and sine for any angle:

- cos θ is the x-coordinate, sin θ is the y-coordinate
- tan θ = sin θ / cos θ
- cos²θ + sin²θ = 1 (Pythagoras on the unit circle)

Plot the y-coordinate against θ as θ runs from 0 to 2π and you get the graph of sin x; plot the x-coordinate and you get cos x. The guide says exact values of sin, cos and tan are not assessed, but knowing the signs in each quadrant helps you pick the right solution.

**Worked example.** sin θ = 0.6 and θ is obtuse. Find cos θ and tan θ.

```
cos²θ = 1 − 0.6² = 0.64, so cos θ = ±0.8
θ obtuse → point is in the second quadrant → x negative → cos θ = −0.8
tan θ = 0.6 / (−0.8) = −0.75
```

### The ambiguous case of the sine rule

Given two sides and a non-included angle, the sine rule gives sin B, and both B and 180° − B share that value. Both are valid if the triangle's angles still total less than 180°.

**Worked example.** In triangle ABC, a = 7 cm, b = 9 cm and angle A = 40°. Find the possible values of angle B.

```
sin B / 9 = sin 40° / 7
sin B = 9 sin 40° / 7 = 0.8264...
B = 55.7°   or   B = 180° − 55.7° = 124.3°
Check: 40° + 124.3° = 164.3° < 180°, so both triangles exist.
```

### Solving trigonometric equations graphically

When an equation mixes trig and other functions, graph each side on your GDC over the given interval and find the intersections.

**Worked example.** Solve 5 sin x = x + 1 for 0 ≤ x ≤ 2π.

```
Graph y = 5 sin x and y = x + 1 on 0 ≤ x ≤ 2π (radian mode).
Intersections: x = 0.253 and x = 2.40
```

Check you are in radian mode, and sketch the graphs in your working so the method is visible.

## 3.9 Matrix transformations

A transformation of a point (x, y) has the form

```
( x' )   ( a  b ) ( x )   ( e )
( y' ) = ( c  d ) ( y ) + ( f )
```

The matrix does the reflection, stretch, enlargement or rotation. The vector (e, f) is a translation.

| Transformation | Matrix |
|---|---|
| Reflection in the x-axis | (1 0; 0 −1) |
| Reflection in the y-axis | (−1 0; 0 1) |
| Reflection in y = x | (0 1; 1 0) |
| Reflection in y = (tan θ)x | (cos 2θ  sin 2θ; sin 2θ  −cos 2θ) |
| Horizontal stretch, scale factor k | (k 0; 0 1) |
| Vertical stretch, scale factor k | (1 0; 0 k) |
| Enlargement, centre origin, scale factor k | (k 0; 0 k) |
| Anticlockwise rotation θ about the origin | (cos θ  −sin θ; sin θ  cos θ) |

Rows are separated by semicolons. To check any matrix, see where it sends (1, 0) and (0, 1): the images are its first and second columns.

### Compositions

If transformation A is applied first and then B, the single matrix is **BA**. The first transformation sits next to the point.

### The determinant

Area of image = |det A| × area of object. A negative determinant means the shape has been reflected (its orientation reversed). Translations do not change area.

**Worked example.** Triangle PQR has P(1, 1), Q(4, 1), R(1, 3). It is rotated 90° anticlockwise about the origin, then stretched vertically with scale factor 2. Find the single matrix, the image vertices and the area of the image.

```
Rotation R = (0 −1; 1 0), stretch S = (1 0; 0 2)
Combined M = SR = (0 −1; 2 0)
P' = (0×1 − 1×1, 2×1 + 0×1) = (−1, 2)
Q' = (−1, 8),  R' = (−3, 2)
det M = 0×0 − (−1)(2) = 2
Area PQR = ½ × 3 × 2 = 3, so image area = 2 × 3 = 6 units²
```

Repeating affine transformations is one way to generate fractals.

## 3.10 Vectors

A **scalar** has size only (speed, mass). A **vector** has size and direction (velocity, force), drawn as a directed line segment.

- Components: v = (v₁, v₂, v₃) = v₁i + v₂j + v₃k, where i, j, k are the base vectors.
- Magnitude: |v| = √(v₁² + v₂² + v₃²)
- Position vector of A: OA = a. The vector from A to B is AB = b − a.
- kv is parallel to v. The zero vector is 0; −v has the same length and opposite direction.
- The resultant of several vectors is their sum.
- Unit vector (normalising): v / |v| has length 1 in the direction of v.
- Rescaling: to get length L in the direction of v, use L × v / |v|.

**Worked example.** A drone moves at 15 m s⁻¹ in the direction 2i − 2j + k. Find its velocity vector.

```
|2i − 2j + k| = √(4 + 4 + 1) = 3
velocity = 15 × (2i − 2j + k) / 3 = 10i − 10j + 5k  m s⁻¹
```

## 3.11 Vector equation of a line

A line through the point with position vector a, in direction b, is

**r = a + λb**

In 3D, with a = (x₀, y₀, z₀) and b = (l, m, n), the parametric form is x = x₀ + λl, y = y₀ + λm, z = z₀ + λn.

**Worked example.** Show that (5, 11, −3) lies on r = (2, −1, 3) + λ(1, 4, −2).

```
x: 2 + λ = 5   → λ = 3
y: −1 + 4λ = 11 → λ = 3
z: 3 − 2λ = −3 → λ = 3
Same λ in all three equations, so the point is on the line.
```

To find where two lines meet, set their parametric forms equal, solve two of the equations for λ and μ, and check the third.

## 3.12 Vector kinematics

### Constant velocity

**r = r₀ + vt**, where r₀ is the position at t = 0. The relative position of B from A is AB = r_B − r_A.

**Worked example.** Ship A: r_A = (2, 1) + t(3, 4). Ship B: r_B = (14, 5) + t(−1, 2). Distances are in km, t in hours. Find when they are closest and the minimum distance.

```
AB = r_B − r_A = (12 − 4t, 4 − 2t)
|AB|² = (12 − 4t)² + (4 − 2t)² = 20t² − 112t + 160
Minimum where d/dt = 40t − 112 = 0 → t = 2.8 h
AB = (0.8, −1.6), |AB| = √3.2 = 1.79 km (3 s.f.)
```

Graphing |AB| against t on your GDC also finds the minimum.

### Variable velocity in two dimensions

When velocity depends on t, integrate each component and use the starting position to find the constants. Projectile and circular motion are special cases.

**Worked example.** A ball has v = (12, 15 − 9.8t) m s⁻¹ and starts at (0, 2). Find when and where it lands (y = 0).

```
x = 12t + c₁, c₁ = 0
y = 2 + 15t − 4.9t²
y = 0 → t = 3.19 s (positive root, GDC)
x = 12 × 3.19 = 38.3 m
```

The guide also uses f(t − a) to show a time shift of a: an object that starts a seconds later.

## 3.13 Scalar and vector products

### Scalar product

v · w = v₁w₁ + v₂w₂ + v₃w₃ = |v||w| cos θ

- Angle between vectors: cos θ = (v · w) / (|v||w|)
- Perpendicular if and only if v · w = 0 (non-zero vectors)
- Acute angle between two lines: use their direction vectors and take |v · w|

### Vector product

v × w = (v₂w₃ − v₃w₂, v₃w₁ − v₁w₃, v₁w₂ − v₂w₁), and v × w = |v||w| sin θ n, where n is the unit normal given by the right-hand screw rule.

- |v × w| is the area of the parallelogram with sides v and w; half of it is the triangle's area.
- Component of a in the direction of b: (a · b) / |b| = |a| cos θ
- Component of a perpendicular to b (in their plane): |a × b| / |b| = |a| sin θ

**Worked example.** a = (2, −1, 3), b = (1, 4, 2). Find the angle between them, a × b, the area of the triangle they span, and the components of a along and perpendicular to b.

```
a · b = 2 − 4 + 6 = 4
|a| = √14, |b| = √21
cos θ = 4 / √294 → θ = 1.34 rad (76.5°)
a × b = ((−1)(2) − (3)(4), (3)(1) − (2)(2), (2)(4) − (−1)(1)) = (−14, −1, 9)
|a × b| = √278 = 16.7, triangle area = 8.34 units²
along b: 4/√21 = 0.873;  perpendicular: √278/√21 = 3.64
```

**Acute angle between lines.** Directions (1, −2, 2) and (2, 1, −2) give a dot product of −4. Use |−4| / (3 × 3) = 4/9, so the acute angle is 63.6°.

## Common errors

- Calculator in degree mode for a radian question, or the other way round. HL papers assume radians unless told otherwise.
- Using l = rθ with θ in degrees.
- Taking only the acute answer from the sine rule when the obtuse one also fits.
- Multiplying composed matrices in the wrong order (A then B is BA, not AB).
- Forgetting the modulus in area = |det A| × area.
- Normalising by dividing by the sum of the components instead of the magnitude.
- Finding an obtuse angle between two lines and not converting to the acute one.
- In kinematics, mixing up r₀ (position) and v (velocity), or forgetting the constant of integration.
- Giving a GDC answer with no written equation or sketch.

## Next steps

Condense this into the [revision notes](/resources/ib-dp-mathematics-ai-hl-trigonometry-matrix-transformations-vectors-revision-notes/), then try the [practice questions](/resources/ib-dp-mathematics-ai-hl-trigonometry-matrix-transformations-vectors-practice/). The [syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/), [subject guide](/resources/ib-dp-mathematics-applications-and-interpretation-subject-guide/) and [exam preparation guide](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/) cover the whole course.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021 — syllabus sections 3.7–3.13 (AHL).
