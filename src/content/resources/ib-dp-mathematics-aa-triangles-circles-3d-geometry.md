---
title: "IB DP Mathematics: Analysis and Approaches -- 3D geometry, triangle trigonometry and radian measure Study Guide"
seoTitle: "IB Maths AA 3D Geometry, Trigonometry and Radians Guide"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "3D geometry, triangle trigonometry and radian measure"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-1"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-2"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-3"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-4"
description: "Study guide for IB DP Maths AA sections 3.1–3.4: 3D distance, solids, sine and cosine rules, bearings, radians, arcs and sectors, with worked examples."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-09-27
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by muhammad-ghazali-siddiqui on 2026-09-29; 2026-11-08: reviewed by muhammad-ghazali-siddiqui."
---

This study guide teaches the 3D geometry, triangle trigonometry and radian measure unit of IB Diploma Programme Mathematics: Analysis and Approaches from scratch. It is aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, and covers syllabus sections 3.1–3.4. All of it is SL content, so it is examined at both SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

When you have worked through it, use the [revision notes](/resources/ib-dp-mathematics-aa-triangles-circles-3d-geometry-revision-notes/) for final-weeks recall and the [practice questions](/resources/ib-dp-mathematics-aa-triangles-circles-3d-geometry-practice/) to test yourself. For the whole course, see the [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/).

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 3.1 | Find the distance between two points in 3D and their midpoint; find volumes and surface areas of right pyramids, right cones, spheres, hemispheres and combinations; find the angle between two intersecting lines or between a line and a plane | SL and HL |
| 3.2 | Use sin, cos and tan in right-angled triangles; use the sine rule, the cosine rule and area = ½ab sin C | SL and HL |
| 3.3 | Apply right and non-right-angled trigonometry, including Pythagoras's theorem, angles of elevation and depression, and bearings; draw labelled diagrams from written statements | SL and HL |
| 3.4 | Measure angles in radians; find arc lengths and sector areas | SL and HL |

The guide states that all formulae required for the course are in the mathematics formula booklet. Check your own copy so you know exactly how each one is printed.

## 3.1 Geometry in three dimensions

### Distance and midpoint

For A(x₁, y₁, z₁) and B(x₂, y₂, z₂):

```
d = √((x₁ − x₂)² + (y₁ − y₂)² + (z₁ − z₂)²)
midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2)
```

These are the 2D results you already know with a third term added.

### Worked example 1

Find the midpoint and length of [AB], where A(1, −2, 4) and B(5, 4, 1).

```
midpoint = ((1 + 5)/2, (−2 + 4)/2, (4 + 1)/2) = (3, 1, 2.5)
AB = √(4² + 6² + (−3)²) = √(16 + 36 + 9) = √61 ≈ 7.81
```

### Volume and surface area

| Solid | Volume | Surface area |
|---|---|---|
| Right pyramid, base area A, height h | V = (1/3)Ah | base + area of each triangular face |
| Right cone, radius r, height h, slant height l | V = (1/3)πr²h | curved surface = πrl; add πr² for the base |
| Sphere, radius r | V = (4/3)πr³ | 4πr² |
| Hemisphere, radius r | V = (2/3)πr³ | curved 2πr²; total with flat face 3πr² |

In a cone, r, h and l form a right-angled triangle, so l² = r² + h². For a combined solid, add the volumes. For its surface area, add only the faces you can touch from outside. Faces that are glued together are not part of the surface.

### Worked example 2: a combined solid

A solid is a right cone of radius 6 cm and height 8 cm on top of a hemisphere of radius 6 cm. Find its exact volume and surface area.

```
Volume  = (1/3)π(6²)(8) + (2/3)π(6³) = 96π + 144π = 240π cm³
Slant height l = √(6² + 8²) = 10
Surface = πrl + 2πr² = 60π + 72π = 132π cm²
```

The circular face where the cone meets the hemisphere is inside the solid, so it is not counted.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-triangles-circles-3d-geometry--02-cone-on-hemisphere.webp" width="900" height="650" alt="Cross-section of a cone of radius 6 and height 8 on a hemisphere of radius 6; slant height 10. Volume is 96 pi plus 144 pi, 240 pi cm cubed. Surface is 60 pi plus 72 pi, 132 pi cm squared, with the glued circular face not counted." loading="lazy">
  <figcaption>Add the volumes; add only the outside surfaces, not the glued face.</figcaption>
</figure>


### Angles in 3D shapes

The guide says that in SL examinations, only right-angled trigonometry questions will be set on 3D shapes. You must find a right-angled triangle inside the solid and work in it.

- **Angle between a line and a plane.** Drop a perpendicular from a point on the line to the plane. The angle is between the line and its projection (its "shadow") on the plane.
- **Angle between two intersecting lines.** Find a triangle that contains both lines. In an isosceles triangle, split it into two right-angled triangles.

That exam note names SL examinations only. If you take HL, be ready to use the sine or cosine rule in a 3D triangle as well.

### Worked example 3: a right pyramid

A right pyramid has a rectangular base ABCD with AB = 8 cm and BC = 6 cm. The apex V is 12 cm vertically above the centre M of the base. Find (a) the volume, (b) the length VA and (c) the angle between VA and the base.

```
(a) V = (1/3)(8 × 6)(12) = 192 cm³
(b) AC = √(8² + 6²) = 10, so MA = 5
    VA = √(12² + 5²) = 13 cm
(c) Triangle VMA has a right angle at M.
    tan θ = VM/MA = 12/5
    θ = 67.4°
```

MA is the projection of VA onto the base, so the required angle is VÂM.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-triangles-circles-3d-geometry--01-distance-midpoint-3d.webp" width="900" height="830" alt="A box drawn in three dimensions with opposite corners A(1, -2, 4) and B(5, 4, 1). The path from A goes 4 along x, 6 along y and 3 down in z. The straight line AB across the box has length root 61, about 7.81, and its midpoint is M(3, 1, 2.5)." loading="lazy">
  <figcaption>The 3D distance formula is Pythagoras applied twice: AB² = 4² + 6² + 3² = 61.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-triangles-circles-3d-geometry--03-pyramid-angle-3d.webp" width="900" height="740" alt="A right pyramid on a 8 by 6 rectangle with apex V 12 above the centre M. The edge VA has shadow MA of length 5 on the base. The flat triangle VMA has legs 12 and 5, hypotenuse 13 and angle 67.4 degrees at A, the angle between VA and the base." loading="lazy">
  <figcaption>To find the angle between a line and a plane, use the right-angled triangle formed by the line, its shadow on the plane and the perpendicular.</figcaption>
</figure>


## 3.2 Triangle trigonometry

### Right-angled triangles

sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent. To find an angle, use the inverse functions sin⁻¹, cos⁻¹ or tan⁻¹.

### Worked example 4

In a right-angled triangle the hypotenuse is 14 cm and one angle is 35°. The opposite side is 14 sin 35° = **8.03 cm** and the adjacent side is 14 cos 35° = **11.5 cm**. In another right-angled triangle with legs 5 and 9, the angle opposite 5 is tan⁻¹(5/9) = **29.1°**.

### The sine rule

```
a/sin A = b/sin B = c/sin C
```

Side a is opposite angle A, and so on. Use it when you know a side and its opposite angle, plus one more side or angle.

Section 3.2 does not include the ambiguous case. That appears in section 3.5. In this unit, when you find an angle with the sine rule, check it is unique. If the angle is opposite the shorter of the two known sides, it must be acute.

### Worked example 5

(a) In triangle ABC, A = 38°, C = 104° and c = 15 cm. Find a.

```
a/sin 38° = 15/sin 104°
a = 15 sin 38° / sin 104° = 9.52 cm
```

(b) In triangle PQR, p = 9 cm, q = 12 cm and Q = 70°. Find P.

```
sin P = 9 sin 70° / 12 = 0.7048...
P = 44.8°
```

P is opposite the shorter side, so it is smaller than Q and must be acute. There is only one answer.

### The cosine rule

```
c² = a² + b² − 2ab cos C
cos C = (a² + b² − c²)/(2ab)
```

Use it when you know two sides and the included angle (to find the third side), or all three sides (to find an angle).

### Worked example 6

A triangle has sides 7 cm, 9 cm and 12 cm. Find its largest angle and its area.

The largest angle is opposite the longest side.

```
cos C = (7² + 9² − 12²)/(2 × 7 × 9) = −14/126 = −1/9
C = 96.4°
Area = ½ × 7 × 9 × sin 96.4° = 31.3 cm²
```

A negative cosine means an obtuse angle. The cosine rule handles this for you; the sine rule would not.

### Area of a triangle

Area = ½ab sin C, where C is the angle between sides a and b.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-triangles-circles-3d-geometry--04-sine-rule-two-cases.webp" width="900" height="910" alt="Two triangles solved with the sine rule. In ABC, A=38, C=104 and c=15 give a = 15 sin38 / sin104 = 9.52 cm. In PQR, p=9, q=12 and Q=70 give sin P = 9 sin70/12 so P = 44.8 degrees. P faces the shorter side so it is acute and the answer is unique." loading="lazy">
  <figcaption>Match each side with the angle opposite it; the angle opposite the shorter side must be acute.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-triangles-circles-3d-geometry--05-cosine-rule-area.webp" width="900" height="630" alt="A triangle with sides 7, 9 and 12 cm. The cosine rule gives cos C = -1/9 at the angle C facing the 12 cm side, so C = 96.4 degrees, obtuse. The area is half times 7 times 9 times sin 96.4 degrees = 31.3 cm squared." loading="lazy">
  <figcaption>The largest angle faces the longest side; a negative cosine means it is obtuse.</figcaption>
</figure>


## 3.3 Applications

### Diagrams, elevation and depression

Always sketch and label a diagram. The guide expects you to build one from a written description.

- An **angle of elevation** is measured upwards from the horizontal.
- An **angle of depression** is measured downwards from the horizontal.
- The angle of depression from A to B equals the angle of elevation from B to A (alternate angles).

### Worked example 7

From the top of a cliff 80 m high, the angle of depression of a boat is 14°. The angle of elevation of the cliff top from the boat is also 14°, so the horizontal distance is

```
d = 80/tan 14° = 321 m (3 s.f.)
```

### Bearings

A bearing is a three-figure angle measured clockwise from north, such as 050°. Draw a north line at every point you work from. The back bearing (from B to A) differs from the bearing from A to B by 180°.

### Worked example 8

A boat sails 12 km from P on a bearing of 050° to Q, then 9 km on a bearing of 130° to R. Find the distance PR and the bearing of R from P.

At Q, the bearing back to P is 230°. The angle between QP and QR is 230° − 130° = 100°.

```
PR² = 12² + 9² − 2(12)(9)cos 100°
PR = 16.2 km
sin QPR = 9 sin 100° / 16.20... → QPR = 33.2°
Bearing of R from P = 050° + 33.2° = 083.2°
```

Angle QPR is opposite the shorter side, so it is acute. Carry the unrounded PR into the sine rule.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-triangles-circles-3d-geometry--06-bearings-route.webp" width="900" height="820" alt="A two-leg boat journey from P to Q (12 km, bearing 050) then to R (9 km, bearing 130), drawn to scale with a north line at each point. The angle PQR is 100 degrees, PR is 16.2 km, angle QPR is 33.2 degrees and the bearing of R from P is 083.2 degrees." loading="lazy">
  <figcaption>Draw a north line at every point; the interior angle comes from the back bearing 230° − 130° = 100°.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-triangles-circles-3d-geometry--07-elevation-depression.webp" width="900" height="590" alt="A cliff 80 m high beside the sea with a boat offshore. The line of sight from the cliff top makes a 14 degree angle of depression below the horizontal; from the boat the angle of elevation of the cliff top is also 14 degrees. They are alternate angles. The horizontal distance is 80 over tan 14 degrees = 321 m." loading="lazy">
  <figcaption>The angle of depression from A to B equals the angle of elevation from B to A.</figcaption>
</figure>


## 3.4 Radian measure, arcs and sectors

### Radians

One radian is the angle at the centre of a circle subtended by an arc equal in length to the radius. A full turn is 2π radians, so π radians = 180°.

```
degrees → radians: multiply by π/180    135° = 3π/4
radians → degrees: multiply by 180/π    1 rad ≈ 57.3°
```

The guide says radian measure may be written as exact multiples of π or as decimals. It also says that radian measure should be assumed on exam papers unless otherwise indicated. Check your GDC mode before every trigonometry calculation.

### Arc length and sector area (θ in radians)

```
arc length  l = rθ
sector area A = ½r²θ
```

These only work with θ in radians. The perimeter of a sector is 2r + rθ.

### Worked example 9

A sector has radius 12 cm and angle 2π/3 at the centre. Find the arc length, the sector area and the area of the segment cut off by the chord.

```
arc    = 12 × 2π/3 = 8π cm
sector = ½ × 12² × 2π/3 = 48π cm²
triangle = ½ × 12 × 12 × sin(2π/3) = 62.35... cm²
segment  = 48π − 62.35... = 88.4 cm² (3 s.f.)
```

The segment combines 3.2 (area of a triangle) with 3.4 (sector area).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-triangles-circles-3d-geometry--08-what-is-a-radian.webp" width="900" height="680" alt="A circle with an arc equal in length to the radius marked, giving an angle of one radian, about 57.3 degrees. Six such arcs plus a short dashed remainder go round the circle, showing 2 pi is about 6.28 radians. Conversion rules: multiply by pi over 180 for degrees to radians and 180 over pi for the reverse." loading="lazy">
  <figcaption>One radian is the angle subtended by an arc the same length as the radius, so a full turn is 2π radians.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-triangles-circles-3d-geometry--09-sector-segment.webp" width="900" height="600" alt="A sector of radius 12 cm and angle 2 pi over 3. Arc = 8 pi cm, sector = 48 pi cm squared, triangle = 62.35 cm squared and segment = sector minus triangle = 88.4 cm squared. The formulas need radians." loading="lazy">
  <figcaption>Segment area = sector area − triangle area, using A = ½r²θ and ½r² sin θ.</figcaption>
</figure>


## Using your GDC

Paper 1 allows no technology, at both SL and HL. Paper 2 requires it (and HL Paper 3). By hand you should be able to:

- find 3D distances and midpoints, leaving surds such as √61 exact;
- find volumes and surface areas as exact multiples of π;
- convert between degrees and radians in terms of π;
- find arc lengths and sector areas in terms of π;
- set up the sine and cosine rules and simplify when the values are given.

With a GDC, check the angle mode first. Store unrounded intermediate values and round only the final answer to 3 significant figures.

## Common errors

- Using l = rθ or A = ½r²θ with θ in degrees.
- GDC left in degree mode when the question uses radians, or the reverse.
- Counting a glued face in the surface area of a combined solid.
- Using the vertical height instead of the slant height in πrl.
- Measuring the angle between a line and a plane against the wrong line in the plane. Use the projection.
- Taking the hemisphere's surface as 2πr² when the flat face is exposed. Total is 3πr².
- Bearings measured anticlockwise or from east, or written with two figures (50° instead of 050°).
- Mixing up elevation and depression, or measuring them from the vertical.
- Using the sine rule to find the largest angle of a triangle, which may be obtuse.
- Rounding an intermediate side to 3 s.f. and carrying it forward.

## Where to go next

Condense this guide with the [revision notes](/resources/ib-dp-mathematics-aa-triangles-circles-3d-geometry-revision-notes/), then try the [practice questions](/resources/ib-dp-mathematics-aa-triangles-circles-3d-geometry-practice/). Inverse functions from the [functions study guide](/resources/ib-dp-mathematics-aa-functions/) link to finding angles. Radians are used throughout the [calculus study guide](/resources/ib-dp-mathematics-aa-calculus/). For papers and timing, see the [AA exam preparation guide](/resources/ib-dp-mathematics-analysis-and-approaches-exam-preparation/) and the [AA syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/).

## Frequently asked questions

**What topics are in IB Maths AA syllabus sections 3.1 to 3.4?**
Sections 3.1–3.4 cover 3D distance and midpoint, volumes and surface areas of pyramids, cones, spheres and hemispheres, angles in 3D shapes, right-angled and non-right-angled triangle trigonometry, bearings, elevation and depression, and radian measure with arcs and sectors. All of it is SL content examined at both SL and HL.

**When do you use the sine rule instead of the cosine rule?**
Use the sine rule when you know a side and its opposite angle plus one more side or angle. Use the cosine rule when you know two sides and the included angle, or all three sides.

**How do you find the angle between a line and a plane?**
Drop a perpendicular from a point on the line to the plane and join its foot to the point where the line meets the plane. The required angle is between the line and this projection, found in the right-angled triangle that results.

**How do you find the surface area of a combined solid?**
Add the areas of only the faces you can touch from outside. A face where two solids are glued together, such as the circle where a cone meets a hemisphere, is inside the solid and is not counted, although the volumes are simply added.

**Is the ambiguous case of the sine rule in sections 3.1 to 3.4?**
No. Section 3.2 does not include the ambiguous case, which appears in section 3.5. In this unit, an angle found with the sine rule is unique if it is opposite the shorter of the two known sides, because it must then be acute.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
