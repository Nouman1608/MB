---
title: "Cambridge O Level Mathematics (4024): Non-Right-Angled Triangles"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Trigonometry"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 6.3
syllabusTopics:
  - qualification: "o-level"
    topic: "trigonometry"
  - qualification: "o-level"
    topic: "trigonometry"
    subtopic: "non-right-angled-triangles-4024"
description: "Study guide to 4024 section 6.3: the sine rule, the cosine rule and the area formula 1/2 ab sin C for any triangle, including obtuse angles, the ambiguous case and bearings."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers section 6.3, Non-right-angled triangles, in the Trigonometry topic of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. The syllabus asks you to use the sine and cosine rules in calculations involving lengths and angles for any triangle, and to use the formula area of a triangle = 1/2 ab sin C. The notes add that problems include obtuse angles and the ambiguous case. The sine rule, the cosine rule and the area formula are given in the List of formulas. After this guide, use the [non-right-angled triangles revision notes](/resources/cambridge-o-level-mathematics-4024-non-right-angled-triangles-revision-notes/) and the [non-right-angled triangles practice questions](/resources/cambridge-o-level-mathematics-4024-non-right-angled-triangles-practice/).

## What section 6.3 asks for

1. Choose between the sine rule and the cosine rule, based on the information given.
2. Use them to find sides and angles, including obtuse angles.
3. Recognise and explain the ambiguous case of the sine rule.
4. Find the area of any triangle from two sides and the included angle.
5. Apply these in practical contexts such as bearings.

## Labelling

Label the triangle so that side a is opposite angle A, side b is opposite angle B and side c is opposite angle C. Capital letters are angles, lower-case letters are the opposite sides.

## The sine rule

```
a / sin A = b / sin B = c / sin C
```

For finding an angle it is easier to use the inverted form:

```
sin A / a = sin B / b = sin C / c
```

Use the sine rule when you know **a side and its opposite angle**, plus one other side or angle. That is, when two sides and a non-included angle are given (SSA), or two angles and any side (AAS or ASA).

### Worked example 1: finding a side

In triangle ABC, A = 40°, B = 65° and a = 8 cm. Find b.

```
b / sin 65° = 8 / sin 40°
b = 8 × sin 65° ÷ sin 40° = 11.3 cm
```

### Worked example 2: finding an angle, with the ambiguous case

In triangle ABC, a = 9 cm, b = 12 cm and A = 35°. Find angle B.

```
sin B / 12 = sin 35° / 9
sin B = 12 × sin 35° ÷ 9 = 0.7648
B = sin⁻¹(0.7648) = 49.9°
```

Because sin B = sin(180° − B), there is a second possible angle: B = 180° − 49.9° = 130.1°. Check whether it works: A + B = 35° + 130.1° = 165.1°, which is less than 180°, so a triangle exists. There are **two possible triangles**, with B = 49.9° or B = 130.1°.

### The ambiguous case

When you are given two sides and an angle that is **not between them** (SSA), and the angle is opposite the shorter of the two given sides, there can be two triangles. After finding the acute angle from the calculator, always test the obtuse angle 180° minus the acute one. If it leaves room for a third angle, the second triangle is valid. Here a = 9 is shorter than b = 12 and A is opposite the shorter side, which is the warning sign.

If the angle given is opposite the longer side, only the acute answer is possible, because an obtuse angle cannot be opposite a shorter side than the angle already given.

## The cosine rule

```
a² = b² + c² − 2bc cos A
```

The same rule applies to the other sides with the letters changed. To find an angle, rearrange:

```
cos A = (b² + c² − a²) / (2bc)
```

Use the cosine rule when you know **two sides and the included angle** (SAS) to find the third side, or **all three sides** (SSS) to find an angle.

### Worked example 3: finding a side

In triangle ABC, b = 7 cm, c = 9 cm and A = 62°. Find a.

```
a² = 7² + 9² − 2 × 7 × 9 × cos 62°
a² = 49 + 81 − 126 cos 62° = 130 − 59.15 = 70.85
a = 8.42 cm
```

Work out 126 cos 62° first and then subtract from 130. Do not do (49 + 81 − 126) × cos 62°. The negative sign applies after the multiplication.

### Worked example 4: finding an angle from three sides

A triangle has sides 7 cm, 9 cm and 11 cm. Find the largest angle.

```
the largest angle is opposite the longest side, 11 cm
cos C = (7² + 9² − 11²) / (2 × 7 × 9) = (49 + 81 − 121) / 126 = 9/126
C = 85.9°
```

Check the other angles: cos A = (81 + 121 − 49)/(2 × 9 × 11) = 153/198, so A = 39.4°. Then B = 180° − 85.9° − 39.4° = 54.7°.

### Worked example 5: an obtuse angle

A triangle has sides 5 cm, 6 cm and 10 cm. Find the largest angle.

```
cos C = (5² + 6² − 10²) / (2 × 5 × 6) = (25 + 36 − 100)/60 = −39/60 = −0.65
C = 130.5°
```

When the cosine is negative, the angle is obtuse. The calculator gives the correct obtuse angle directly.

## Area of a triangle

```
area = 1/2 ab sin C
```

C must be the angle **between** the sides a and b.

### Worked example 6

Two sides of a triangle are 8 cm and 11 cm, and the angle between them is 40°. Find the area.

```
area = 1/2 × 8 × 11 × sin 40° = 28.3 cm²
```

### Worked example 7

Find the area of the triangle with sides 7, 9 and 11 cm.

```
the angle between the sides 7 and 9 is C = 85.9° (found from the cosine rule)
area = 1/2 × 7 × 9 × sin 85.9° = 31.4 cm²
```

### Using area to find an angle

If the area is known, rearrange to find sin C. For example, area 24 cm² with sides 8 cm and 10 cm gives sin C = 48/80 = 0.6. This gives C = 36.9° or C = 143.1°, since the angle could be acute or obtuse unless the question says otherwise.

## Choosing the rule

| Information | Rule |
|---|---|
| 2 angles and a side | sine |
| 2 sides and an angle opposite one of them (SSA) | sine (check the ambiguous case) |
| 2 sides and the included angle (SAS) | cosine |
| 3 sides (SSS) | cosine |
| 2 sides and the included angle, wanting area | 1/2 ab sin C |

## Bearings and navigation

Draw north lines at each point, work out the angle in the triangle from the bearings, then apply the rules.

### Worked example 8

A ship sails 10 km from A to B on a bearing of 040°, then 14 km from B to C on a bearing of 120°. Find the distance AC and the bearing of C from A.

```
the bearing of A from B = 040° + 180° = 220°
angle ABC = 220° − 120° = 100°
AC² = 10² + 14² − 2 × 10 × 14 × cos 100° = 296 + 48.62 = 344.6
AC = 18.6 km
sin A / 14 = sin 100° / 18.56, so angle BAC = 48.0°
bearing of C from A = 040° + 48.0° = 088°
```

Angle BAC is acute because it is opposite BC, which is shorter than AC, the side opposite the largest angle of 100°.

### Worked example 9: both triangles

In triangle ABC, AB = 10 cm, AC = 7 cm and angle ABC = 30°. Find the two possible values of BC.

```
sin C / 10 = sin 30° / 7
sin C = 10 × 0.5 ÷ 7 = 0.7143
C = 45.6° or C = 134.4°
case 1: A = 180° − 30° − 45.6° = 104.4°
        BC / sin 104.4° = 7 / sin 30°, so BC = 13.6 cm
case 2: A = 180° − 30° − 134.4° = 15.6°
        BC / sin 15.6° = 7 / sin 30°, so BC = 3.76 cm
```

Both triangles fit the information: in the first, C is acute, and in the second, C is obtuse. The side AC = 7 cm can swing to either side of the foot of the perpendicular from A, and that gives two possible positions of C on the line through B.

## Common mistakes

- Using the sine rule when the information needs the cosine rule.
- Evaluating (b² + c² − 2bc) × cos A instead of subtracting 2bc cos A.
- Forgetting that the cosine of an obtuse angle is negative.
- Missing the second solution in the ambiguous case.
- Using an angle that is not between the two sides in the area formula.
- Rounding too early.
- Having the calculator in the wrong mode.

## Exam technique

- **Calculate** or **find**: state the rule used, substitute, and then give the answer to 3 significant figures (angles to 1 decimal place).
- Sketch and label the triangle.
- **Show that**: work to a greater accuracy than the stated answer.
- Check that the largest angle is opposite the longest side.

## Next steps

Work through the [non-right-angled triangles practice questions](/resources/cambridge-o-level-mathematics-4024-non-right-angled-triangles-practice/) and recap with the [non-right-angled triangles revision notes](/resources/cambridge-o-level-mathematics-4024-non-right-angled-triangles-revision-notes/).


## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 6.3 Non-right-angled triangles.
