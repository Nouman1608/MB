---
title: "Cambridge O Level Mathematics: Trigonometry (4024)"
seoTitle: "O Level Maths Trigonometry Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Trigonometry"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 523
syllabusTopics:
  - qualification: "o-level"
    topic: "trigonometry"
description: "A step-by-step Cambridge O Level Mathematics study guide to Pythagoras, right-angled and non-right-angled trigonometry, bearings and 3D problems."
author: "marlbridge-academic-team"
publishedDate: 2026-10-25
featured: false
---
This guide teaches topic 6, Trigonometry, from the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. It covers sections 6.1 to 6.4. The syllabus does not split this topic into tiers, so all of it is for every candidate. Paper 1 forbids calculators while Paper 2 requires one, and on Paper 2 candidates should give angles in degrees to 1 decimal place and other non-exact answers to 3 significant figures unless the question says otherwise.

Use it with the [revision notes](/resources/o-level-mathematics-trigonometry-revision-notes/) for quick recall and the [existing practice questions](/resources/o-level-mathematics-trigonometry-practice/) for testing. The [course hub](/boards/cambridge/o-level/mathematics/) lists the other topics, the [checklist](/checklists/cambridge/o-level/mathematics/) lets you tick off each outcome, and the [free diagnostics](/diagnostics/) show where to focus.

## What this topic covers

| Section | Outcome |
|---|---|
| 6.1 Pythagoras' theorem | Know and use Pythagoras' theorem |
| 6.2 Right-angled triangles | Use sine, cosine and tangent for acute angles; solve 2D problems with Pythagoras and trigonometry (bearings may be needed); know the shortest distance from a point to a line; use angles of elevation and depression |
| 6.3 Non-right-angled triangles | Use the sine and cosine rules for lengths and angles, including obtuse angles and the ambiguous case; use area = ½ab sin C |
| 6.4 Pythagoras and trigonometry in 3D | Solve three-dimensional problems, including the angle between a line and a plane |

The syllabus notes that the sine rule, cosine rule and triangle area formula are in the List of formulas. You still need to know which one to choose and how to rearrange it.

## 6.1 Pythagoras' theorem

In a right-angled triangle the longest side, opposite the right angle, is the hypotenuse. If its length is c and the other two sides are a and b:

```
a² + b² = c²
```

To find the hypotenuse, add the squares and take the square root. To find a shorter side, subtract.

**Worked example 1.** A right-angled triangle has hypotenuse 26 cm and one shorter side 10 cm. Find the other side.

```
x² = 26² - 10²
x² = 676 - 100 = 576
x = 24 cm
```

**Worked example 2.** A rectangular screen is 6.5 cm wide and 4.2 cm high. Find its diagonal.

```
d² = 6.5² + 4.2² = 42.25 + 17.64 = 59.89
d = 7.74 cm (3 s.f.)
```


## 6.2 Right-angled triangles

### The three ratios

Label the sides from the angle you are using, call it θ. The hypotenuse is opposite the right angle. The opposite side faces θ. The adjacent side touches θ and is not the hypotenuse.

| Ratio | Formula |
|---|---|
| sin θ | opposite / hypotenuse |
| cos θ | adjacent / hypotenuse |
| tan θ | opposite / adjacent |

A memory aid is SOH CAH TOA. Choose the ratio that contains the two sides you are dealing with: the one you know and the one you want.

**Finding a side.** Write the ratio, substitute, rearrange.

**Worked example 3.** In a right-angled triangle the angle is 37° and the side adjacent to it is 14.5 cm. Find the opposite side.

```
tan 37° = opposite / 14.5
opposite = 14.5 × tan 37° = 10.9 cm (3 s.f.)
```

**Finding an angle.** Apply sin⁻¹, cos⁻¹ or tan⁻¹ to the ratio and quote degrees to 1 decimal place.

**Worked example 4.** The hypotenuse is 11.4 cm and the side opposite angle θ is 7.2 cm.

```
sin θ = 7.2 / 11.4
θ = sin⁻¹(7.2 / 11.4) = 39.2° (1 d.p.)
```

Work in degrees and do not round 7.2 / 11.4 first.

### Shortest distance from a point to a line

The shortest way from a point to a line is the perpendicular. Any slanting route is the hypotenuse of a right-angled triangle with that perpendicular as one side, so it must be longer. This turns "closest approach" questions into right-angled triangles.

**Worked example 5.** A boat is at P. A straight pier runs from A. PA = 13.5 m and the angle between PA and the pier is 42°. How close to the pier is the boat?

The shortest distance is the perpendicular from P to the pier. In the right-angled triangle, PA is the hypotenuse and the required distance is opposite the 42° angle.

```
distance = 13.5 × sin 42° = 9.03 m (3 s.f.)
```

### Angles of elevation and depression

The angle of elevation is measured upward from the horizontal to the line of sight. The angle of depression is measured downward from the horizontal. The two horizontal lines are parallel, so looking down from A to B gives the same angle as looking up from B to A (alternate angles).

**Worked example 6.** Eyes are 1.6 m above the ground, 55 m from the base of a tower 38 m tall. Find the angle of elevation of the top.

The vertical side is 38 - 1.6 = 36.4 m.

```
tan θ = 36.4 / 55
θ = 33.5° (1 d.p.)
```

**Worked example 7.** A cliff top is 26 m above the sea and a boat is 90 m away horizontally. Find the angle of depression of the boat. It is the angle below the horizontal:

```
tan θ = 26 / 90
θ = 16.1° (1 d.p.)
```

Draw the horizontal through the observer first. The angle sits between that line and the line of sight, not between the line of sight and the vertical.

### Bearings in right-angled problems

A bearing is measured clockwise from north and written with three figures, for example 075°. The syllabus says knowledge of bearings may be required.

**Worked example 8.** A ship sails 8 km on a bearing of 075° from A to B, then 6 km on a bearing of 165° to C. Find AC and the bearing of C from A.

The bearings differ by 90°, so angle ABC = 90°.

```
AC² = 8² + 6² = 100, so AC = 10 km
angle CAB = tan⁻¹(6/8) = 36.9°
bearing of C from A = 075° + 36.9° = 111.9°
bearing of A from C = 111.9° + 180° = 291.9°
```

Sketch north lines at each point to confirm the direction of each turn.

## 6.3 Non-right-angled triangles

Label the triangle with side a opposite angle A, side b opposite angle B and side c opposite angle C.

| Rule | Form | Use when you know |
|---|---|---|
| Area | ½ab sin C | two sides and the angle enclosed by them |
| Sine rule | a / sin A = b / sin B = c / sin C | a matching side-angle pair, plus one other side or angle |
| Cosine rule (side) | a² = b² + c² - 2bc cos A | two sides and the angle enclosed by them |
| Cosine rule (angle) | cos A = (b² + c² - a²) / (2bc) | all three sides |

### Obtuse angles

Sine and cosine are defined for angles up to 180°. The sine of an obtuse angle is positive: sin(180° - x) = sin x. The cosine of an obtuse angle is negative: cos(180° - x) = -cos x. In the cosine rule the term -2bc cos A therefore becomes positive when A is obtuse.

If the cosine rule gives a negative value for cos A, the angle is obtuse. This is a handy check.

**Worked example 9 (cosine rule, side).** Two sides of a triangle are 7.4 cm and 9.2 cm with included angle 118°. Find the third side and the area.

```
c² = 7.4² + 9.2² - 2 × 7.4 × 9.2 × cos 118°
c² = 54.76 + 84.64 + 63.92 = 203.3 (approx)
c = 14.3 cm (3 s.f.)
area = ½ × 7.4 × 9.2 × sin 118° = 30.1 cm² (3 s.f.)
```

**Worked example 10 (cosine rule, angle).** The sides are 7 cm, 9 cm and 12 cm. Find the largest angle, opposite the 12 cm side.

```
cos A = (7² + 9² - 12²) / (2 × 7 × 9) = -14 / 126
A = 96.4° (1 d.p.)
```

The negative cosine shows the angle is obtuse. The largest angle is always opposite the longest side.

### The ambiguous case

When you know two sides and an angle that is not enclosed by them (SSA), the sine rule can give two possible triangles. Finding an angle with sin⁻¹ returns the acute value, but the obtuse angle 180° minus that value has the same sine.

**Worked example 11.** In triangle ABC, angle A = 40°, a = 8 cm and b = 11 cm. Find angle B and side c.

```
sin B = 11 × sin 40° / 8 = 0.8838
B = 62.1° or B = 180° - 62.1° = 117.9°
```

Test each. Angle A + B must be less than 180°.

```
Case 1: B = 62.1°, C = 77.9°, c = 8 × sin 77.9° / sin 40° = 12.2 cm
Case 2: B = 117.9°, C = 22.1°, c = 8 × sin 22.1° / sin 40° = 4.68 cm
```

Both triangles exist, so there are two answers. Here the given angle is opposite the shorter of the two given sides, which is the situation that allows two triangles. If the angle is opposite the longer given side, the obtuse option is too big and only one triangle exists. If the side opposite the angle is shorter than the perpendicular height (b sin A), no triangle exists, since sin B would be greater than 1.

### Mixed bearing problem

**Worked example 12.** A ship sails 150 km from P to Q on a bearing of 040°, then 210 km from Q to R on a bearing of 100°. Find PR and the bearing of R from P.

The bearing of P from Q is 040° + 180° = 220°. At Q, angle PQR = 220° - 100° = 120°.

```
PR² = 150² + 210² - 2 × 150 × 210 × cos 120° = 22 500 + 44 100 + 31 500 = 98 100
PR = 313 km (3 s.f.)
sin(QPR) / 210 = sin 120° / PR
angle QPR = 35.5° (1 d.p.)
bearing of R from P = 040° + 35.5° = 075.5°
```

Use the sine rule to find an angle only when the angle is acute, as here. Because 120° is the largest angle, the other two must be acute.

## 6.4 Pythagoras' theorem and trigonometry in 3D

Three-dimensional problems are a chain of two-dimensional right-angled triangles. Draw each triangle separately, flat, with its right angle marked and its lengths labelled.

### Angle between a line and a plane

To find how steeply a line meets a plane, use the line's shadow on the plane, called its projection. Drop a perpendicular from the upper end of the line to the plane. The projection joins the foot of that perpendicular to the lower end of the line, and the required angle lies between the line and this projection. The angle is measured at the bottom end.

**Worked example 13.** A cuboid has a base 8 cm by 6 cm and height 5 cm. Find the length of the space diagonal and the angle it makes with the base.

```
base diagonal = √(8² + 6²) = 10 cm
space diagonal = √(10² + 5²) = √125 = 11.2 cm (3 s.f.)
angle with base = tan⁻¹(5 / 10) = 26.6° (1 d.p.)
```

The base diagonal is the projection of the space diagonal onto the base, so it is the adjacent side.

**Worked example 14.** A pyramid has a square base of side 10 cm and a vertex 12 cm directly above the centre. Find the length of a sloping edge and the angle it makes with the base.

The centre of the base is half a diagonal from a corner, 5√2 = 7.07 cm.

```
edge = √(12² + 7.07²) = 13.9 cm (3 s.f.)
angle with base = tan⁻¹(12 / 7.07) = 59.5° (1 d.p.)
```


## Common errors

- Working in radians instead of degrees on Paper 2.
- Labelling opposite and adjacent from the wrong angle.
- Rounding in the middle of a calculation. Paper 2 guidance asks you to avoid this.
- Ignoring the second sine-rule angle in an SSA problem.
- Forgetting that cos 120° is negative in the cosine rule.
- Measuring a bearing anticlockwise or from east.
- Using the slanting edge instead of the perpendicular height in a 3D right-angled triangle.

## Next steps

Work through the [revision notes](/resources/o-level-mathematics-trigonometry-revision-notes/), try the [practice questions](/resources/o-level-mathematics-trigonometry-practice/), and take a [free diagnostic](/diagnostics/) to find any gaps.

## Official syllabus

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for examination in 2025, 2026 and 2027, topic 6 Trigonometry (Cambridge University Press & Assessment).
