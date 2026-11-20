---
title: "Cambridge O Level Mathematics (4024): Non-Right-Angled Triangles -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 4024 section 6.3: choosing between the sine rule and cosine rule, the area formula, the ambiguous case, obtuse angles and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes summarise section 6.3, Non-right-angled triangles, of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. Full explanations are in the [non-right-angled triangles study guide](/resources/cambridge-o-level-mathematics-4024-non-right-angled-triangles/), and exam-style questions are in the [non-right-angled triangles practice questions](/resources/cambridge-o-level-mathematics-4024-non-right-angled-triangles-practice/).

## What is examined

- Use the sine and cosine rules for lengths and angles in any triangle. This includes problems with obtuse angles and the ambiguous case.
- Use area = 1/2 ab sin C.
- The sine rule, cosine rule and area formula are in the List of formulas.

## Key terms

| Term | Meaning |
|---|---|
| Included angle | the angle between two given sides |
| Opposite | side a is opposite angle A |
| Ambiguous case | SSA data that can give two different triangles |
| Obtuse angle | between 90° and 180° |
| SAS | two sides and the included angle |
| SSS | three sides |
| ASA, AAS | two angles and a side |
| SSA | two sides and a non-included angle |

## The formulas

```
sine rule:    a / sin A = b / sin B = c / sin C
              (for angles: sin A / a = sin B / b = sin C / c)
cosine rule:  a² = b² + c² − 2bc cos A
              cos A = (b² + c² − a²) / (2bc)
area:         1/2 ab sin C
```

## Which rule?

| Given | Find | Use |
|---|---|---|
| side and its opposite angle, plus one more | side or angle | sine rule |
| two angles and a side | another side | sine rule |
| two sides and the included angle | third side | cosine rule |
| three sides | an angle | cosine rule |
| two sides and the included angle | area | 1/2 ab sin C |
| area and one side and angle | a side or an angle | 1/2 ab sin C rearranged |

## Method box: any triangle problem

1. Sketch and label the triangle: capital letters for angles, lower-case for opposite sides.
2. Identify the data type (SAS, SSS, ASA, SSA).
3. Choose the rule from the table.
4. Substitute. In the cosine rule, work out 2bc cos A before subtracting.
5. Use the inverse function for angles.
6. Check that the largest angle is opposite the longest side.

## Obtuse angles

- The cosine of an obtuse angle is negative. The cosine rule gives the obtuse angle directly.
- The sine of an obtuse angle is positive. The sine rule gives an acute angle on the calculator. The obtuse angle is 180° minus that value.
- A triangle can have only one obtuse angle, and it is opposite the longest side.

## The ambiguous case

For SSA data, after finding an angle B with the sine rule, test 180° − B.

```
a = 9, b = 12, A = 35°:   B = 49.9° or 130.1°   (35 + 130.1 < 180, both fit)
a = 10, b = 7, A = 65°:   B = 39.4° only        (65 + 140.6 > 180)
```

Two triangles are possible when the given angle is opposite the shorter of the two given sides and the other value still leaves room for a third angle.

## Area

1. The angle must be between the two sides used.
2. For three sides, find one angle with the cosine rule, then use the area formula.
3. The area can give two possible angles from sin C: C and 180° − C.

```
area = 1/2 × 8 × 11 × sin 40° = 28.3
sin C = 2 × area / (ab)
```

## Bearings with non-right-angled triangles

1. Draw north lines at each point.
2. Use back bearings and angle facts to find an angle inside the triangle.
3. Apply the cosine rule for the third side, or the sine rule for another angle.
4. Convert the final angle back to a bearing.

Example: 10 km on 040°, then 14 km on 120°. Angle ABC = 220° − 120° = 100°. AC = 18.6 km. Angle BAC = 48.0°, so the bearing of C from A is 088°.

## Must-know distinctions

| Idea | Be clear that |
|---|---|
| Sine rule | needs a matching side and opposite angle |
| Cosine rule | needs SAS or SSS |
| Included vs opposite | the area formula uses the included angle |
| Acute vs obtuse | cos < 0 means obtuse |
| Ambiguous case | check 180° − B each time |

## Exam traps

- Using the sine rule for SAS or SSS.
- Doing (b² + c² − 2bc) × cos A.
- Dropping the negative sign for an obtuse angle's cosine.
- Not checking the ambiguous case.
- Using the wrong angle in the area formula.
- Rounding early.

## Command words you will meet

| Command word | What to do |
|---|---|
| Calculate | work out, showing the rule and the substitution |
| Show that | prove by working to more accuracy than the stated value |
| Find | calculate |
| Work out | calculate with or without a calculator |
| Give | produce the answer, stating units |

## Self-test

1. In triangle ABC, A = 60°, B = 45° and a = 9 cm. Find b.
2. In triangle ABC, b = 5 cm, c = 7 cm and A = 80°. Find a.
3. A triangle has sides 5 cm, 7 cm and 8 cm. Find the largest angle.
4. Two sides of a triangle are 6 cm and 9 cm with an angle of 30° between them. Find the area.
5. In triangle ABC, a = 10 cm, b = 8 cm and A = 50°. Find angle B.
6. A triangle has sides 3 cm, 4 cm and 6 cm. Find the largest angle.
7. Two sides are 10 cm and 12 cm with an angle of 110° between them. Find the area.
8. In triangle ABC, A = 35°, B = 80° and b = 7 cm. Find a.
9. In triangle ABC, AB = 10 cm, BC = 12 cm and angle B = 40°. Find AC.
10. State the rule you would use to find an angle when you know all three sides.

### Answers

1. 9 × sin 45° ÷ sin 60° = **7.35 cm**.
2. a² = 25 + 49 − 70 cos 80° = 61.84, so **a = 7.86 cm**.
3. cos θ = (25 + 49 − 64)/70 = 10/70, so θ = **81.8°**.
4. 1/2 × 6 × 9 × sin 30° = **13.5 cm²**.
5. sin B = 8 sin 50° ÷ 10 = 0.6128, so **B = 37.8°** (180° − 37.8° would give 50 + 142.2 > 180, so no second triangle).
6. cos θ = (9 + 16 − 36)/24 = −11/24, so θ = **117.3°**.
7. 1/2 × 10 × 12 × sin 110° = **56.4 cm²**.
8. a = 7 × sin 35° ÷ sin 80° = **4.08 cm**.
9. AC² = 100 + 144 − 240 cos 40° = 60.14, so **AC = 7.76 cm**.
10. The **cosine rule**.


## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 6.3 Non-right-angled triangles.
