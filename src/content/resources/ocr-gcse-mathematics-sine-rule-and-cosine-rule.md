---
title: "OCR GCSE Mathematics: Sine rule and cosine rule (J560)"
seoTitle: "OCR GCSE Maths Sine Rule and Cosine Rule Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Sine rule and cosine rule"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 66
syllabusTopics:
  - qualification: "gcse"
    topic: "mensuration-ocr-gcse-maths"
    subtopic: "triangle-mensuration-ocr-gcse-maths"
description: "Study guide to OCR GCSE Mathematics J560 sections 10.05d and 10.05e: the sine rule and cosine rule for lengths and angles, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide covers sections 10.05d (sine rule) and 10.05e (cosine rule) of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026). Both statements sit only in the Higher tier column of the specification, so everything below is **Higher tier only**. The same column lists the area formula ½ab sin C in 10.03a, and 6.02d lists all three formulae among those Higher tier learners should recall and use, so the area formula is included here for problem solving.

Use it with the [OCR GCSE Mathematics hub](/boards/ocr/gcse/mathematics/) and the [printable checklist](/checklists/ocr/gcse/mathematics/). The condensed version is the [revision notes](/resources/ocr-gcse-mathematics-sine-rule-and-cosine-rule-revision-notes/), and the [practice set](/resources/ocr-gcse-mathematics-sine-rule-and-cosine-rule-practice/) tests everything below. To find your weak spots first, try the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Ref | What you must be able to do | Tier |
|---|---|---|
| 10.05d | Know and apply the sine rule, a/sin A = b/sin B = c/sin C, to find lengths and angles | Higher tier only |
| 10.05e | Know and apply the cosine rule, a² = b² + c² - 2bc cos A, to find lengths and angles | Higher tier only |
| 10.03a | Area of a triangle = ½ab sin C (used here to solve problems) | Higher tier only |

The rules work in any triangle, not only right-angled ones. Right-angled triangles, Pythagoras and exact trigonometric values are separate units, so this page assumes you can already use sin, cos and tan on a right-angled triangle.

## Labelling the triangle

Name the angles A, B and C. Name the side opposite each angle with the matching lower-case letter: a is opposite A, b is opposite B, c is opposite C.

```
        A
       / \
    c /   \ b
     /     \
    B-------C
         a
```

Every error in this topic starts with a mislabelled triangle. Before you write any formula, mark each given angle and the side facing it. A side and the angle opposite it are always a pair.

## The sine rule

The sine rule says that in every triangle, each side divided by the sine of its opposite angle gives the same number:

```
a / sin A = b / sin B = c / sin C
```

You never use all three fractions at once. Pick the two that contain your unknown and the pair of values you know.

**Use the sine rule when you know a side and its opposite angle, plus one more angle or side.**

### Finding a length

Put the unknown side on the top of the left-hand fraction so that you do not have to rearrange afterwards.

**Worked example 1.** In triangle ABC, A = 48°, B = 71° and a = 9.3 cm. Find b.

```
b / sin 71° = 9.3 / sin 48°
b = 9.3 × sin 71° / sin 48°
b = 11.83...
```

So b = **11.8 cm** (3 s.f.). The angle C = 61° was not needed here, because a and A form the known pair and B is the angle opposite the side we want.

If the angle opposite the unknown side is not given, find it first with the angle sum: C = 180° - A - B.

### Finding an angle

Turn the rule upside down so the unknown angle is on top: sin A / a = sin B / b.

**Worked example 2.** In triangle ABC, a = 14.2 cm, b = 11.5 cm and A = 64°. Find B.

```
sin B / 11.5 = sin 64° / 14.2
sin B = 11.5 × sin 64° / 14.2
sin B = 0.72789...
B = sin⁻¹(0.72789...) = 46.71...°
```

So B = **46.7°** (1 d.p.).

### When there are two possible angles

Sine is positive for both an acute angle and the obtuse angle that adds with it to 180°. If sin B = 0.8333, then B could be 56.4° or 123.6°. Check whether the obtuse angle fits in the triangle by adding it to the angle you already know. It must leave a positive third angle.

**Worked example 3.** Triangle ABC has A = 30°, a = 6 cm and b = 10 cm. Find the possible values of B.

```
sin B = 10 × sin 30° / 6 = 5/6 = 0.8333...
B = 56.4° or B = 180° - 56.4° = 123.6°
```

Test each: 30° + 56.4° = 86.4° (less than 180°, fits) and 30° + 123.6° = 153.6° (less than 180°, fits). Two different triangles are possible, so B = **56.4° or 123.6°**.

In Example 2, the given angle A faced the longer side (a > b). Then B must be smaller than A, so the obtuse answer cannot fit. When the given angle faces the shorter side, as here (a < b), expect to check both. Only give two answers when the question allows both, for example when it says "find the possible values". Otherwise use the diagram or wording to decide.

## The cosine rule

The cosine rule links all three sides with one angle:

```
a² = b² + c² - 2bc cos A
```

The angle A is the one between sides b and c, and a is the side opposite A. You may relabel to suit the triangle, for example c² = a² + b² - 2ab cos C.

**Use the cosine rule when you know two sides and the angle between them, or all three sides.**

### Finding a length

**Worked example 4.** In triangle ABC, b = 7.4 cm, c = 10.6 cm and A = 112°. Find a.

```
a² = 7.4² + 10.6² - 2 × 7.4 × 10.6 × cos 112°
a² = 54.76 + 112.36 - 156.88 × (-0.3746...)
a² = 167.12 + 58.77...
a² = 225.89...
a = 15.03...
```

So a = **15.0 cm** (3 s.f.). Here cos 112° is negative, so the last term adds. Many errors come from losing that sign. Work out 2bc cos A as one number, with its sign, before you subtract it.

Do the multiplication before the subtraction. Do not subtract 2bc from b² + c² first and then multiply by cos A.

### Finding an angle

Rearrange the rule to make cos A the subject:

```
cos A = (b² + c² - a²) / (2bc)
```

The angle you want is opposite the side a, which is the side on its own at the start of the numerator.

**Worked example 5.** A triangle has sides 6.5 cm, 9.0 cm and 12.5 cm. Find its largest angle.

The largest angle is opposite the longest side, so call 12.5 cm the side c and find C.

```
cos C = (6.5² + 9.0² - 12.5²) / (2 × 6.5 × 9.0)
cos C = (42.25 + 81 - 156.25) / 117
cos C = -33 / 117 = -0.28205...
C = cos⁻¹(-0.28205...) = 106.38...°
```

So the largest angle is **106.4°** (1 d.p.). A negative cosine means the angle is obtuse. That is a useful check.

Starting with the largest angle is a good habit. Cosine gives only one angle between 0° and 180°, so there is no second answer to test. If you then need another angle, you can use the sine rule safely, because the other two angles must both be acute.

## Choosing the rule

| You know | You want | Use |
|---|---|---|
| Two angles and any side | another side | Sine rule |
| A side and its opposite angle, and one more side | the angle opposite that side | Sine rule |
| Two sides and the angle between them | the third side | Cosine rule |
| All three sides | any angle | Cosine rule |

If the information does not match any row, you probably need the angle sum first. Two angles always give the third.

Notice the pattern. The sine rule needs a matching pair (a side and the angle opposite it). The cosine rule is for the cases where no such pair exists.

## Area of a triangle: ½ab sin C

The area formula uses two sides and the angle between them:

```
Area = ½ × a × b × sin C
```

**Worked example 6.** Two sides of a triangle are 12.4 cm and 9.7 cm and the angle between them is 38°. Find the area.

```
Area = ½ × 12.4 × 9.7 × sin 38°
     = 60.14 × 0.61566...
     = 37.02...
```

The area is **37.0 cm²** (3 s.f.).

You can also run the formula backwards. If you know the area and two sides, work out sin C and then find C. Take care here: sin C gives an acute angle and an obtuse angle, so look in the question for which one is meant.

## Combined problems

Longer questions chain the rules together. A sensible plan is to draw one clear triangle, mark everything you know, choose the rule from the table, and then ask what the answer gives you for the next step.

**Worked example 7.** A boat leaves A and sails 8.5 km on a bearing of 072° to B. It then sails 6.2 km on a bearing of 140° to C. Find the distance AC and the bearing of C from A.

Bearings are measured clockwise from north. The bearing of A from B is 072° + 180° = 252°. The angle ABC is the difference between the bearing back to A and the bearing on to C:

```
angle ABC = 252° - 140° = 112°
```

Two sides and the included angle are known, so use the cosine rule:

```
AC² = 8.5² + 6.2² - 2 × 8.5 × 6.2 × cos 112°
AC² = 72.25 + 38.44 + 39.48...
AC² = 150.17...
AC = 12.25...
```

So AC = **12.3 km** (3 s.f.).

Now find angle BAC. The side BC and the angle ABC are a known pair, so use the sine rule with the unknown angle on top:

```
sin(BAC) / 6.2 = sin 112° / 12.25...
sin(BAC) = 6.2 × sin 112° / 12.25...
sin(BAC) = 0.46909...
angle BAC = 27.98...°
```

Angle BAC is acute because BC is shorter than AC. The bearing of C from A is 072° + 27.98...° = 99.98...°, so it is **100.0°** (1 d.p.).

Use your unrounded value of AC in the second step. Rounding early can change the final angle in the first decimal place.

## Common errors

- **Wrong pairing.** Using a side with the sine of an angle that is not opposite it. Draw the triangle and tick each pair.
- **Rule mismatch.** Trying the sine rule when you know two sides and the angle between them. There is no matching pair, so use the cosine rule.
- **Subtracting first.** In a² = b² + c² - 2bc cos A, multiplying (b² + c² - 2bc) by cos A is wrong. The cos A belongs to the 2bc term only.
- **Sign slip with obtuse angles.** Forgetting that cos is negative for angles over 90°, so -2bc cos A becomes a positive addition.
- **Missing second solution.** Giving only 56.4° when the question allows 123.6° too (or giving both when only one fits).
- **Wrong angle in the area formula.** The angle in ½ab sin C must lie between the two sides you use.
- **Early rounding.** Keep full unrounded values through a multi-step answer and round once at the end.
- **Wrong angle unit.** Give angles in degrees, as the questions here do, not in radians.

## Where to go next

Work through the [practice set](/resources/ocr-gcse-mathematics-sine-rule-and-cosine-rule-practice/), then use the [revision notes](/resources/ocr-gcse-mathematics-sine-rule-and-cosine-rule-revision-notes/) as a quick checklist before a mock. The [free diagnostics](/diagnostics/) will show you which topics need attention next.

## Official syllabus

OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Sections 10.05d, 10.05e, 10.03a and 6.02d. All content on this page is Higher tier only.
