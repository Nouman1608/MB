---
title: "IB DP Mathematics: Applications and Interpretation -- 3D geometry, triangle trigonometry, bearings and sectors Study Guide"
seoTitle: "IB Maths AI 3D Geometry, Trigonometry and Sectors Guide"
resourceType: "study-guides"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "3D geometry, triangle trigonometry, bearings and sectors"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 3.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-1"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-2"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-3"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-4"
description: "Study guide to 3D solids, sine and cosine rules, bearings, elevation and sectors for IB DP Maths AI SL and HL (sections 3.1-3.4), with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

This study guide teaches 3D geometry, triangle trigonometry, bearings and sectors for IB Diploma Programme Mathematics: Applications and Interpretation. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 3.1 to 3.4, which are common content for SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

The [geometry and trigonometry strand overview](/resources/ib-dp-mathematics-ai-geometry-trigonometry/) gives the big picture. This page goes section by section. When you have worked through it, use the [revision notes](/resources/ib-dp-mathematics-ai-sl-3d-geometry-trigonometry-revision-notes/) for quick recall and the [practice questions](/resources/ib-dp-mathematics-ai-sl-3d-geometry-trigonometry-practice/) to test yourself. The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) show where this unit sits.

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 3.1 | Find the distance between two points in 3D and their midpoint; find volumes and surface areas of right pyramids, right cones, spheres, hemispheres and combinations; find the angle between two intersecting lines or between a line and a plane | SL and HL |
| 3.2 | Use sine, cosine and tangent in right-angled triangles; use the sine rule, the cosine rule and area = (1/2)ab sin C | SL and HL |
| 3.3 | Apply right and non-right angled trigonometry, including Pythagoras' theorem, angles of elevation and depression and bearings; draw labelled diagrams from written statements | SL and HL |
| 3.4 | Find the length of an arc and the area of a sector | SL and HL |

Three limits from the guide shape the questions you will meet:

- In SL examinations, only right-angled trigonometry is set on three-dimensional shapes.
- The ambiguous case of the sine rule is not included.
- Radians are not required at SL. Work in degrees throughout this unit. (Radian measure is HL only, in AHL 3.7.)

The guide states that all formulae required for the course are in the mathematics formula booklet. You still have to pick the right one and set it up correctly.

## 3.1 Three-dimensional geometry

### Distance and midpoint

For points A(x₁, y₁, z₁) and B(x₂, y₂, z₂):

- distance AB = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²)
- midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2)

These are the 2D results with a z-term added.

### Worked example 1

Find the distance between A(2, −1, 5) and B(8, 3, −7), and the midpoint of AB.

```
differences: 8 − 2 = 6,  3 − (−1) = 4,  −7 − 5 = −12
AB = √(6² + 4² + (−12)²) = √(36 + 16 + 144) = √196 = 14
midpoint = ((2 + 8)/2, (−1 + 3)/2, (5 + (−7))/2) = (5, 1, −1)
```

### Volume and surface area

| Solid | Volume | Surface area |
|---|---|---|
| Right pyramid, base area A, height h | V = (1/3)Ah | base + area of each triangular face |
| Right cone, radius r, height h, slant height l | V = (1/3)πr²h | curved surface = πrl; add πr² for the base |
| Sphere, radius r | V = (4/3)πr³ | 4πr² |
| Hemisphere, radius r | V = (2/3)πr³ | curved surface 2πr²; add πr² for the flat face if it is exposed |

For a cone, l = √(r² + h²). For a pyramid, the height of a triangular face (its slant height) is not the vertical height. Find it from a right-angled triangle.

### Worked example 2: a combined solid

A toy is a solid hemisphere of radius 6 cm with a right cone of the same radius and height 8 cm fixed to its flat face. Find its volume and total surface area.

```
slant height l = √(6² + 8²) = √100 = 10 cm
V = (2/3)π(6³) + (1/3)π(6²)(8) = 144π + 96π = 240π = 754 cm³ (3 s.f.)
surface = curved hemisphere + curved cone
        = 2π(6²) + π(6)(10) = 72π + 60π = 132π = 415 cm² (3 s.f.)
```

The two flat circles are joined together, so neither is part of the outside surface.

### Angles in 3D shapes

The guide asks for the angle between two intersecting lines, or between a line and a plane. To find the angle between a line and a plane:

1. From a point on the line, drop a perpendicular to the plane.
2. Join the foot of that perpendicular to where the line meets the plane. This is the projection of the line on the plane.
3. The angle you want is between the line and its projection, in a right-angled triangle.

### Worked example 3: a right pyramid

A right pyramid has a square base of side 10 m and vertical height 12 m. Find (a) its volume, (b) its total surface area, (c) the angle between a sloping edge and the base, (d) the angle between the base and the line from the apex to the midpoint of a base edge.

```
(a) V = (1/3)(10²)(12) = 400 m³
(b) slant height of a face = √(12² + 5²) = 13 m
    SA = 10² + 4 × (1/2)(10)(13) = 100 + 260 = 360 m²
(c) half the base diagonal = (1/2)√(10² + 10²) = 5√2 = 7.071 m
    tan θ = 12 / 7.071, so θ = 59.5° (1 d.p.)
(d) apex is 12 m above the centre, which is 5 m from the edge midpoint
    tan φ = 12 / 5, so φ = 67.4° (1 d.p.)
```

In (c) the projection of the sloping edge on the base is half a diagonal. In (d) it is half a side. Using the wrong one is the usual error.

## 3.2 Triangle trigonometry

### Right-angled triangles

SOH CAH TOA: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent. To find an angle, use the inverse functions sin⁻¹, cos⁻¹ and tan⁻¹ (the guide links this to inverse functions, SL 2.2). For example, a ramp 4.2 m long that rises 0.9 m makes an angle sin⁻¹(0.9/4.2) = 12.4° with the ground.

### Non-right-angled triangles

Label sides a, b, c opposite angles A, B, C.

- Sine rule: a/sin A = b/sin B = c/sin C
- Cosine rule: c² = a² + b² − 2ab cos C, or cos C = (a² + b² − c²)/(2ab)
- Area of a triangle = (1/2)ab sin C

Choose the rule from what you know:

| You know | Use |
|---|---|
| Two angles and any side | Sine rule (find the third angle first if needed) |
| Two sides and the angle between them | Cosine rule for the third side |
| Three sides | Cosine rule for an angle |
| Two sides and the angle between them, want area | (1/2)ab sin C |

### Worked example 4: three sides known

A triangle has sides 7 cm, 9 cm and 12 cm. Find its largest angle and its area.

```
largest angle is opposite the longest side, 12 cm
cos C = (7² + 9² − 12²)/(2 × 7 × 9) = (49 + 81 − 144)/126 = −14/126
C = cos⁻¹(−0.1111...) = 96.4° (1 d.p.)
area = (1/2)(7)(9) sin 96.379...° = 31.3 cm² (3 s.f.)
```

A negative cosine means an obtuse angle. The calculator handles this for you with cos⁻¹.

### Worked example 5: two angles and a side

In triangle ABC, A = 38°, B = 74° and c = 20 cm. Find a.

```
C = 180° − 38° − 74° = 68°
a / sin 38° = 20 / sin 68°
a = 20 sin 38° / sin 68° = 13.3 cm (3 s.f.)
```

## 3.3 Applications: elevation, depression and bearings

The guide expects you to build a labelled diagram from a written description. Do this every time before you calculate.

- **Angle of elevation**: measured up from the horizontal to the line of sight.
- **Angle of depression**: measured down from the horizontal to the line of sight. It equals the angle of elevation from the other end (alternate angles).
- **Bearings**: three figures, measured clockwise from north. The bearing back is the forward bearing ± 180°.

### Worked example 6: elevation from two points

From point A, the angle of elevation of the top T of a tower is 32°. You walk 40 m directly towards the tower to B, where the angle of elevation is 51°. Find the height of the tower.

```
angle ABT = 180° − 51° = 129°
angle ATB = 180° − 32° − 129° = 19°
sine rule in ABT: BT / sin 32° = 40 / sin 19°
BT = 40 sin 32° / sin 19° = 65.107... m
height = BT sin 51° = 50.6 m (3 s.f.)
```

Keep BT unrounded in your calculator for the last step.

### Worked example 7: bearings

A boat leaves harbour H on a bearing of 040° and sails 12 km to P. It then sails 9 km on a bearing of 130° to Q. Find the distance HQ and the bearing of Q from H.

```
bearing of H from P = 040° + 180° = 220°
angle HPQ = 220° − 130° = 90°
HQ = √(12² + 9²) = √225 = 15 km
angle PHQ = tan⁻¹(9/12) = 36.87°
bearing of Q from H = 040° + 36.87° = 076.9° (1 d.p.)
```

Here the angle at P happened to be a right angle. If it is not, use the cosine rule for HQ and the sine rule for the angle at H.

## 3.4 Arcs and sectors

For a circle of radius r and a sector angle θ in degrees:

- arc length = (θ/360) × 2πr
- sector area = (θ/360) × πr²

### Worked example 8

A sector has radius 9 cm and angle 150°. Find its arc length, area and perimeter. Then find the angle of a sector of radius 9 cm with arc length 20 cm.

```
arc = (150/360) × 2π(9) = 7.5π = 23.6 cm (3 s.f.)
area = (150/360) × π(9²) = 33.75π = 106 cm² (3 s.f.)
perimeter = 23.56... + 9 + 9 = 41.6 cm (3 s.f.)
reverse: 20 = (θ/360) × 18π, so θ = 20 × 360 / (18π) = 127.3° (1 d.p.)
```

The perimeter includes both radii.

### Worked example 9: a segment

A sector has radius 10 m and angle 80°. Find the area of the segment between the arc and the chord.

```
sector area = (80/360) × π(10²) = 69.81 m²
triangle area = (1/2)(10)(10) sin 80° = 49.24 m²
segment area = 69.81... − 49.24... = 20.6 m² (3 s.f.)
```

This joins 3.2 and 3.4. Expect questions that link them.

## Using your GDC

The guide lists technology as required on every AI paper, so use your GDC throughout this unit.

- Check the calculator is in **degree** mode before every trigonometry question.
- Use the equation solver for reverse problems, such as finding r when a volume is given.
- Store intermediate values (such as BT above) and recall them. Rounding early moves your answer in the third figure.
- Still write the formula with your numbers substituted. A bare answer earns nothing if it is wrong.

## Common errors

- Using the vertical height of a pyramid or cone as its slant height, or the reverse.
- Adding the flat face of a hemisphere to a surface area when it is glued to another solid.
- Using a full base diagonal instead of half a diagonal when finding the angle between a pyramid edge and the base.
- Using the sine rule when you know two sides and the included angle. You need the cosine rule.
- Getting the interior angle in a bearings diagram wrong because you did not draw a north line at each point.
- Measuring an angle of depression from the vertical instead of the horizontal.
- Leaving the calculator in radian mode.
- Forgetting the two radii when asked for the perimeter of a sector.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021 -- syllabus sections SL 3.1, SL 3.2, SL 3.3 and SL 3.4. For how this unit fits the whole course, see the [AI syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/) and the [AI exam preparation guide](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/).
