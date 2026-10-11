---
title: "OxfordAQA International GCSE Mathematics: Sine rule, cosine rule and area of a triangle (9260)"
seoTitle: "OxfordAQA IGCSE Maths Sine & Cosine Rule Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Sine rule, cosine rule and area of a triangle"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9260"]
syllabusSeries: "Version 5.1 (for exams May/June 2018 onwards)"
order: 93
syllabusTopics:
  - qualification: "igcse"
    topic: "geometry-and-measures-oxfordaqa-igcse-maths"
    subtopic: "mensuration-and-calculation-oxfordaqa-igcse-maths"
description: "Study guide to the sine rule, cosine rule and area of a triangle for OxfordAQA International GCSE Mathematics, with fully worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide is written for the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1 (for exams May/June 2018 onwards). It covers statement G20 in section 3.3.2, Mensuration and calculation: the sine rule, the cosine rule and the area formula for any triangle. All of G20 sits in the Extension content column, so every skill here is **Extension only**. The specification also says all content can be assessed on the Extension papers.

Right-angled triangles are a separate statement (G19), so this guide assumes you can already use Pythagoras and sin, cos and tan in a right-angled triangle. Use the [revision notes](/resources/oxfordaqa-igcse-mathematics-sine-rule-cosine-rule-and-area-of-a-triangle-revision-notes/) for quick recall and the [practice questions](/resources/oxfordaqa-igcse-mathematics-sine-rule-cosine-rule-and-area-of-a-triangle-practice/) to test yourself. Course pages: the [OxfordAQA IGCSE Mathematics hub](/boards/oxfordaqa/igcse/mathematics/) and the [printable checklist](/checklists/oxfordaqa/igcse/mathematics/). To see where you stand first, try the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Ref | What you must be able to do | Tier |
|---|---|---|
| G20 | Know and apply the sine rule to find unknown lengths | Extension only |
| G20 | Know and apply the sine rule to find unknown angles | Extension only |
| G20 | Know and apply the cosine rule to find unknown lengths | Extension only |
| G20 | Know and apply the cosine rule to find unknown angles | Extension only |
| G20 | Know and apply Area = ½ab sin C to find the area, a side or an angle of any triangle | Extension only |

The specification expects you not to round during the middle of a calculation. Keep the full calculator value until the last line, then round.

## Labelling a triangle

In triangle ABC, the **angles** are A, B and C (capital letters). The **sides** are a, b and c (small letters). Side a is opposite angle A, side b is opposite angle B and side c is opposite angle C.

```
        A
       /\
    c /  \ b
     /    \
   B/______\C
        a
```

Every rule below depends on this pairing. Side a faces angle A, and the rule only works when you keep each side with its own angle.

## Which rule do you need?

Look at what the question gives you and what it asks for.

| You know | You want | Use |
|---|---|---|
| Two angles and one side | Another side | Sine rule |
| Two sides and an angle outside those two sides | Another angle | Sine rule |
| Two sides and the angle enclosed by them | The third side | Cosine rule |
| All three sides | An angle | Cosine rule (rearranged) |
| Two sides and the angle between them | The area | Area = ½ab sin C |

If the triangle has a right angle, the right-angled methods from G19 are usually quicker.

## The sine rule

In any triangle ABC:

```
a / sin A = b / sin B = c / sin C
```

You never use all three parts at once. Pick the two fractions that contain the information you have.

### Finding a length

For a length, put the unknown on top. Write it as the flipped version:

```
a / sin A = b / sin B   becomes   b = a × sin B / sin A
```

**Worked example 1.** In triangle ABC, angle A = 53°, angle B = 77° and a = 14.7 cm. Find b.

```
b / sin 77° = 14.7 / sin 53°
b = 14.7 × sin 77° / sin 53°
b = 17.9346...
b = 17.9 cm (3 s.f.)
```

The angle C = 180° − 53° − 77° = 50° was not needed here. If the question had asked for c, you would find C first, because c needs its own opposite angle.

### Finding an angle

For an angle, put the unknown angle's sine on top:

```
sin A / a = sin B / b   becomes   sin B = b × sin A / a
```

**Worked example 2.** In triangle ABC, a = 16.3 cm, b = 12.8 cm and angle A = 72°. Find angle B.

```
sin B / 12.8 = sin 72° / 16.3
sin B = 12.8 × sin 72° / 16.3 = 0.7468...
B = sin⁻¹(0.7468...) = 48.3176...
B = 48.3° (1 d.p.)
```

### The two-answer problem

The sine of an angle and the sine of its supplement are equal: sin x = sin (180° − x). When you take an inverse sine you get the acute angle. The obtuse angle 180° − x may also fit the triangle.

In example 2 only the acute angle is possible. Side a = 16.3 is longer than side b = 12.8, and a sits opposite the given angle A. The angle B is opposite the shorter side, so B must be smaller than A. The obtuse option 180° − 48.3° = 131.7° fails, because 72° + 131.7° exceeds 180°.

**Worked example 3.** A triangle has angle A = 28°, a = 6.4 cm and b = 9.5 cm. Find the possible values of angle B.

```
sin B = 9.5 × sin 28° / 6.4 = 0.6969...
B = 44.2° (acute)  or  B = 180° − 44.2° = 135.8° (obtuse)
Check: 28° + 135.8° = 163.8°, which is less than 180°
```

Both triangles fit, because the given angle faces the shorter of the two given sides. Unless the question tells you that the angle is acute or obtuse, or the diagram shows it, give both. If the angle is opposite the longer given side, as in example 2, only the acute value works.

## The cosine rule

The cosine rule works when the sine rule does not have enough information. In triangle ABC:

```
a² = b² + c² − 2bc cos A
```

Here A is enclosed by sides b and c, and a is the side facing it. The same rule written for the other angles is b² = a² + c² − 2ac cos B.

### Finding a length

**Worked example 4.** In triangle ABC, b = 8.7 cm, c = 11.3 cm and angle A = 57°. Find a.

```
a² = 8.7² + 11.3² − 2 × 8.7 × 11.3 × cos 57°
a² = 75.69 + 127.69 − 107.0897...
a² = 96.2931...
a = √96.2931... = 9.8129...
a = 9.81 cm (3 s.f.)
```

Work out the whole of 2bc cos A first, then subtract it. Do not subtract 2bc from b² + c² before multiplying by cos A. If angle A is obtuse, cos A is negative and the term −2bc cos A becomes positive, so a² is larger than b² + c².

### Finding an angle

Rearranging the rule gives:

```
cos A = (b² + c² − a²) / (2bc)
```

The side a in the numerator is the one opposite the angle you want.

**Worked example 5.** A triangle has sides 7.4 cm, 9.1 cm and 12.6 cm. Find the largest angle.

The longest side faces the largest angle, so take a = 12.6, b = 7.4 and c = 9.1.

```
cos A = (7.4² + 9.1² − 12.6²) / (2 × 7.4 × 9.1)
cos A = (54.76 + 82.81 − 158.76) / 134.68
cos A = −21.19 / 134.68 = −0.1573...
A = cos⁻¹(−0.1573...) = 99.0523...
A = 99.1° (1 d.p.)
```

Unlike the sine rule, the inverse cosine gives the correct angle straight away, including an obtuse angle. A negative cos A means the angle is obtuse.

## The area of a triangle

For any triangle, with C the angle **between** sides a and b:

```
Area = ½ × a × b × sin C
```

The angle has to be the one enclosed by the two sides in the formula. Any pair of sides with the angle between them works, so ½bc sin A and ½ac sin B are the same formula.

**Worked example 6 (area).** Two sides of a triangle are 13.5 cm and 9.2 cm and the angle between them is 38°. Find the area.

```
Area = ½ × 13.5 × 9.2 × sin 38°
Area = 38.2326...
Area = 38.2 cm² (3 s.f.)
```

### Finding an angle from the area

**Worked example 7.** A triangle has area 40 cm² and two sides of 11 cm and 9.5 cm. Find the angle between those sides.

```
40 = ½ × 11 × 9.5 × sin C
sin C = 80 / 104.5 = 0.7656...
C = 49.956...  or  C = 180° − 49.956... = 130.044...
C = 50.0° or 130.0° (1 d.p.)
```

Both angles give the same area. If the question says the angle is acute or obtuse, choose accordingly. If it does not, give both.

### Finding a side from the area

**Worked example 8.** A triangle has area 35 cm². One side is 8 cm and the angle between it and the unknown side x is 125°. Find x.

```
35 = ½ × 8 × x × sin 125°
35 = 4x × sin 125°
x = 35 / (4 × sin 125°) = 10.6818...
x = 10.7 cm (3 s.f.)
```

## Putting the rules together

Many questions need two steps. A common pattern is cosine rule first (to find a missing side), then sine rule or the area formula.

**Worked example 9.** A triangular plot PQR has PQ = 240 m, PR = 310 m and angle QPR = 67°. Find the length QR, the angle PRQ and the area of the plot.

*Step 1: QR by the cosine rule.* The known angle P lies between the two known sides.

```
QR² = 240² + 310² − 2 × 240 × 310 × cos 67°
QR² = 153 700 − 58 140.79...
QR² = 95 559.20...
QR = 309.1265... = 309 m (3 s.f.)
```

*Step 2: angle PRQ by the sine rule.* Use the unrounded value of QR. The angle at R is opposite PQ.

```
sin R / 240 = sin 67° / QR
sin R = 240 × sin 67° / 309.1265... = 0.7147...
R = 45.6° (1 d.p.)
```

The obtuse value 134.4° is not possible. PQ = 240 m is the shortest side, so the angle opposite it is the smallest angle, and 134.4° plus the 67° at P would already exceed 180°. Choosing the angle opposite the shortest side is a good habit, because it removes the doubt.

*Step 3: area.*

```
Area = ½ × 240 × 310 × sin 67° = 34 242.78...
Area = 34 200 m² (3 s.f.)
```

## Common errors

- Matching a side to an angle that is not opposite it in the sine rule. Each fraction needs a side and its own opposite angle.
- Using the cosine rule with an angle that is not between the two sides you used.
- Using ½ab sin C when the angle is not between sides a and b.
- Entering b² + c² − 2bc cos A as (b² + c² − 2bc) cos A.
- Forgetting the square root after finding a².
- Giving only the acute angle when the sine rule can give two.
- Rounding a side or angle early and carrying the rounded value forward.

## Next steps

Try the [practice questions](/resources/oxfordaqa-igcse-mathematics-sine-rule-cosine-rule-and-area-of-a-triangle-practice/), then re-read the [revision notes](/resources/oxfordaqa-igcse-mathematics-sine-rule-cosine-rule-and-area-of-a-triangle-revision-notes/) before your next test.

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), specification Version 5.1 (for exams May/June 2018 onwards), published by OxfordAQA. Statement G20, section 3.3.2 Mensuration and calculation.
