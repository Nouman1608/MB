---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.3 Applications of right and non-right-angled trigonometry"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.03
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-3"
description: "Study guide to IB Maths AA 3.3: turning words into labelled diagrams, angles of elevation and depression, bearings and multi-step triangle problems."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **section 3.3 of IB DP Mathematics: Analysis and Approaches** (first assessment 2021): applications of right and non-right-angled trigonometry, including Pythagoras's theorem, angles of elevation and depression, and the construction of labelled diagrams from written statements. It is SL content, examined at SL and HL. Bearings are a frequent context.

The [3D geometry, triangle trigonometry and radian measure study guide](/resources/ib-dp-mathematics-aa-triangles-circles-3d-geometry/) shows a single elevation problem and a two-leg bearings problem. Here the focus is the step that decides most marks: turning a paragraph of text into a correct diagram, then choosing which triangle to solve first. Use the [applications revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-3-revision-notes/) and the [applications practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-3-practice/) afterwards. The rules themselves are in the [sine rule, cosine rule and area guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-2/).

## From words to a diagram

The guide names "construction of labelled diagrams from written statements" as a skill in its own right. A reliable routine:

1. **Read the whole question first**, so the diagram has room for every point.
2. **Draw the fixed objects** (the ground, a tower, a starting port) first.
3. **Mark each given length and angle** as soon as you read it, in the place it belongs.
4. **Add right angles** that the context implies: vertical towers meet level ground at 90°; "due north" and "due east" are perpendicular.
5. **Label the unknown** you are asked for with a letter.
6. **Shade or name the triangle** you will solve first.

A neat diagram is not decoration: it makes your method visible, and most errors in these questions start with a wrongly placed angle.

## Elevation and depression

- An **angle of elevation** is measured up from the horizontal to the line of sight.
- An **angle of depression** is measured down from the horizontal.
- Because the horizontal lines at the two ends are parallel, the angle of depression from A to B equals the angle of elevation from B to A (alternate angles).

Neither angle is ever measured from the vertical.

### Worked example 1: observers on opposite sides

Two points A and B on level ground are 120 m apart, with the foot F of a vertical tower between them on the line AB. The angles of elevation of the top T from A and B are 25° and 38°. Find the height of the tower.

Let the height be h, AF = x and FB = 120 − x.

```
In triangle AFT: x = h / tan 25°
In triangle BFT: 120 − x = h / tan 38°
Add:  120 = h (1/tan 25° + 1/tan 38°)
h = 120 / (2.1445... + 1.2799...) = 35.0 m
```

An alternative uses the non-right-angled triangle ABT: angle ATB = 180° − 25° − 38° = 117°, the sine rule gives AT, then h = AT sin 25°. Both routes give 35.0 m; choose the one with fewer steps for the data you have.

## Bearings

- A bearing is a three-figure angle measured **clockwise from north**: 040°, 125°, 310°.
- Draw a **north line at every point** where you need a bearing.
- **Back bearing**: the bearing of A from B differs from the bearing of B from A by 180°.
- North lines are parallel, so co-interior angles add to 180° and alternate angles are equal. These give the angles inside the triangle.

### Worked example 2: a fix on a lighthouse

A ship at A observes a lighthouse L on a bearing of 030°. It then sails 8 km due east to B, from where L is on a bearing of 320°. Find BL and the shortest distance between the ship's path and the lighthouse.

```
Angle LAB: east is 090°, so angle = 90° − 30° = 60°
Angle ABL: west (back along BA) is 270°, L is at 320°, so angle = 50°
Angle ALB = 180° − 60° − 50° = 70°

BL / sin 60° = 8 / sin 70°   →  BL = 7.37 km
AL / sin 50° = 8 / sin 70°   →  AL = 6.52 km
Shortest distance = AL sin 60° = 5.65 km
```

The shortest distance from L to the line AB is the perpendicular, so this step uses right-angled trigonometry. As a check, BL sin 50° also gives 5.65 km.

## Problems in three dimensions

Elevation questions often have two observation points that are not in a line with the foot of the object. Then two right-angled triangles stand vertically, and a third lies flat on the ground.

### Worked example 3: a mast seen from south and east

A point A is 50 m due south of the foot F of a vertical mast. From A the angle of elevation of the top is 32°. A point B is due east of F, and from B the angle of elevation of the top is 21°. Find the distance AB.

```
Height: h = 50 tan 32° = 31.24... m
FB = h / tan 21° = 81.39... m
Angle AFB = 90° (south and east are perpendicular)
AB = √(50² + 81.39...²) = 95.5 m
```

The diagram here has three triangles: AFT and BFT are vertical, and AFB is horizontal. Pythagoras's theorem on level ground is the final step.

## Choosing the first triangle

When a diagram contains several triangles, start with the one that has **three known pieces**, including at least one side. Solve it, then look for a triangle that now has three known pieces. In worked example 3, triangle AFT is complete first (a side, a right angle and an angle), which gives the height; that height then completes triangle BFT, and only then can the horizontal triangle AFB be solved. If no triangle has three known pieces, introduce a letter for one length, as in worked example 1, and write two equations.

## Pythagoras's theorem and its converse

Pythagoras's theorem appears inside almost every application, either for a direct length or to check a right angle. Its converse is useful for interpreting data: if the three distances between towns satisfy a² + b² = c², the angle opposite c is 90°, which tells you two directions are perpendicular.

## Common mistakes

- Measuring elevation or depression from the vertical.
- Placing a depression angle inside the triangle at the wrong vertex; transfer it with alternate angles first.
- Bearings measured anticlockwise, from east, or written with two figures.
- Forgetting the north line at the second point, so the interior angle is wrong.
- Treating "due east then due north" legs as anything other than perpendicular.
- Using a rounded height in the next triangle.
- Answering a different distance from the one asked (slant distance instead of horizontal, or the reverse).

## Exam technique: command words

- **Draw a labelled diagram**: include all given values, right angles and north lines.
- **Show that** an angle in a bearings triangle equals a given value: state the angle facts used ("co-interior angles", "180° − 130°").
- **Find** a height or distance: name the triangle, write the ratio or rule, then evaluate.
- **Find the bearing**: give three figures, from the correct point, measured clockwise from north.
- **Shortest distance**: means the perpendicular distance.

Context answers need units and a sensible degree of accuracy, usually 3 significant figures.

## Where to go next

Summarise the conventions with the [applications revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-3-revision-notes/) and practise with the [applications practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-3-practice/). 3D angle methods are in the [3D geometry guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-1/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 3.3.
