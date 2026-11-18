---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.1 3D geometry: distance, midpoint, volume and surface area"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.01
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-1"
description: "Study guide to IB Maths AA 3.1: 3D distance and midpoint problems, volumes and surface areas of composite solids, and angles between lines and planes."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **section 3.1 of IB DP Mathematics: Analysis and Approaches** (first assessment 2021). It is SL content, examined at both SL and HL. The section asks for:

- the distance between two points in three-dimensional space, and their midpoint;
- volume and surface area of three-dimensional solids, including the right pyramid, right cone, sphere, hemisphere and combinations of these;
- the size of an angle between two intersecting lines, or between a line and a plane.

The [3D geometry, triangle trigonometry and radian measure study guide](/resources/ib-dp-mathematics-aa-triangles-circles-3d-geometry/) introduces each formula with one example. This page goes further: using the formulae backwards to find unknowns, solids that include a cylinder, and a careful method for 3D angles. Then use the [3D geometry revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-1-revision-notes/) and the [3D geometry practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-1-practice/).

## Distance and midpoint, used both ways

For A(x₁, y₁, z₁) and B(x₂, y₂, z₂), the distance is √((x₁ − x₂)² + (y₁ − y₂)² + (z₁ − z₂)²) and the midpoint is the average of each coordinate. Both appear in the formula booklet. The marks in exam questions usually come from using them in reverse.

### Worked example 1: an unknown coordinate

The point P(k, 2, −1) is 7 units from Q(3, −4, 1). Find the possible values of k.

```
(k − 3)² + (2 − (−4))² + (−1 − 1)² = 7²
(k − 3)² + 36 + 4 = 49
(k − 3)² = 9
k − 3 = ±3, so k = 0 or k = 6
```

Square the distance before you start, so there is no square root to handle. Two answers are expected: a sphere of radius 7 about Q meets the line of possible points twice.

### Worked example 2: the other endpoint

M(2, −1, 4) is the midpoint of [AB], where A is (5, 3, 1). Find B.

```
Each coordinate of B = 2 × (coordinate of M) − (coordinate of A)
B = (4 − 5, −2 − 3, 8 − 1) = (−1, −5, 7)
```

Check: the midpoint of (5, 3, 1) and (−1, −5, 7) is (2, −1, 4).

### Classifying a triangle from its vertices

Find the three side lengths with the distance formula. If two are equal the triangle is isosceles; if the squares satisfy a² + b² = c² it is right-angled (by the converse of Pythagoras's theorem). Work with squared lengths to keep the arithmetic exact.

## Volume and surface area

The solids named in the guide are the right pyramid, right cone, sphere and hemisphere, and combinations of them. Cuboids, prisms and cylinders come from prior learning and often appear inside combinations.

| Solid | Volume | Surface area |
|---|---|---|
| Right pyramid | (1/3) × base area × height | base + triangular faces |
| Right cone | (1/3)πr²h | curved πrl, plus πr² for the base |
| Sphere | (4/3)πr³ | 4πr² |
| Hemisphere | (2/3)πr³ | curved 2πr², total 3πr² with flat face |
| Cylinder (prior learning) | πr²h | curved 2πrh, each end πr² |

### Worked example 3: cylinder and hemisphere

A solid is a cylinder of radius 3 cm and height 10 cm with a hemisphere of radius 3 cm on top. Find its exact volume and total surface area.

```
Volume  = π(3²)(10) + (2/3)π(3³) = 90π + 18π = 108π cm³
Surface = base circle + curved cylinder + curved hemisphere
        = π(3²) + 2π(3)(10) + 2π(3²)
        = 9π + 60π + 18π = 87π cm²
```

The top of the cylinder is covered by the hemisphere, so it is not counted, and neither is the hemisphere's flat face.

### Worked example 4: an unknown dimension

A sphere has the same volume as a right cone of radius 6 cm and height 8 cm. Find the radius of the sphere.

```
(4/3)πr³ = (1/3)π(6²)(8) = 96π
r³ = 96 × 3/4 = 72
r = ∛72 = 4.16 cm (3 s.f.)
```

Cancel π before using a calculator; leave the answer as ∛72 if exact form is asked.

## Angles in 3D

The guide notes that SL examinations will only set right-angled trigonometry questions on 3D shapes. HL students should be ready to use the sine and cosine rules in a 3D triangle as well. Either way, the skill is the same: find a flat triangle inside the solid that contains the angle you want.

**Angle between a line and a plane.** Choose a point on the line, drop a perpendicular to the plane, and join the foot of the perpendicular to where the line meets the plane. That join is the projection of the line onto the plane. The angle is between the line and its projection, in a right-angled triangle.

**Angle between two intersecting lines.** Find the triangle formed by the two lines and the segment joining their far ends. If it is isosceles, split it into two right-angled triangles.

### Worked example 5: a cuboid diagonal

A cuboid has a base 6 cm by 4 cm and height 3 cm. A is a bottom corner and G is the opposite top corner. Find AG and the angle between AG and the base.

```
Base diagonal AC = √(6² + 4²) = √52
AG = √(52 + 3²) = √61 = 7.81 cm
Triangle ACG has a right angle at C (CG is vertical).
tan θ = CG/AC = 3/√52, θ = 22.6°
```

AC is the projection of AG onto the base, so the angle is GÂC, not the angle with an edge of the base.

### Worked example 6: an angle at the apex

A right pyramid has a square base of side 6 cm and its apex V is 4 cm above the centre M of the base. Find the angle between the opposite slant edges VA and VC.

```
AC = 6√2, so MA = 3√2
Triangle VMA: right angle at M
tan(AVM) = MA/VM = 3√2/4, AVM = 46.7°
Angle AVC = 2 × 46.69° = 93.4°
```

Triangle AVC is isosceles, so splitting it at M gives right-angled triangles, which keeps this within SL methods.

## Common mistakes

- Forgetting to square the given distance when it is the unknown in the formula.
- Sign slips with negative coordinates, especially (−1 − 1)² and (2 − (−4))².
- Halving the coordinates of one point instead of averaging both.
- Using the slant height for the volume of a cone, or the vertical height for πrl.
- Counting hidden faces in the surface area of a combination.
- Measuring a line–plane angle against an edge instead of the projection.
- Rounding √52 early and carrying the rounded value.

## Exam technique: command words

- **Find** a length or angle: show the triangle you used, by naming its vertices, before the calculation.
- **Show that** a triangle is isosceles or right-angled: give all three squared lengths and the comparison.
- **Write down** a midpoint: no working needed.
- **Find the exact** volume or area: leave π and surds in the answer, on Paper 1 in particular.
- Give non-exact answers to 3 significant figures and angles in degrees when the question uses degrees.

## Where to go next

Condense this with the [3D geometry revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-1-revision-notes/), then try the [3D geometry practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-1-practice/). Non-right-angled triangles are developed in the [sine rule, cosine rule and area guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-2/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 3.1.
