---
title: "Cambridge IGCSE Mathematics (0580): Non-right-angled triangles"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 6 – Trigonometry"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 6.5
syllabusTopics:
  - qualification: "igcse"
    topic: "trigonometry-cambridge-igcse-maths"
    subtopic: "non-right-angled-triangles-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic E6.5: choosing the sine or cosine rule, obtuse angles, the ambiguous case and area = ½ab sin C, with worked examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **E6.5 Non-right-angled triangles** in Topic 6 Trigonometry of the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. It is **Extended only**: the Core column reads "Extended content only", so it is tested on Paper 2 (non-calculator) and Paper 4 (calculator).

The topic-level [trigonometry study guide](/resources/igcse-mathematics-trigonometry/) gives an overview of the sine and cosine rules. This page goes deeper on choosing the rule, labelling, the ambiguous case, area problems worked backwards and multi-step problems. Revise with the [non-right-angled triangles revision notes](/resources/cambridge-igcse-mathematics-0580-non-right-angled-triangles-revision-notes/) and practise with the [non-right-angled triangles practice questions](/resources/cambridge-igcse-mathematics-0580-non-right-angled-triangles-practice/).

## What subtopic E6.5 asks for

| Statement | What you must be able to do | Syllabus note |
|---|---|---|
| E6.5.1 | Use the sine and cosine rules in calculations involving lengths and angles for any triangle | Includes problems involving obtuse angles and the ambiguous case |
| E6.5.2 | Use the formula area of triangle = ½ab sin C | The sine rule, cosine rule and area formula are given in the List of formulas |

Because the formulas are printed for you, the marks go to labelling correctly, choosing the right formula and handling obtuse angles.

## Labelling a triangle

Use capital letters for angles and the matching lower-case letter for the side **opposite** that angle: side a is opposite angle A. If the triangle is PQR, side p is QR, opposite P. With that labelling:

```
Sine rule:     a / sin A = b / sin B = c / sin C
               (or sin A / a = sin B / b = sin C / c, easier for angles)
Cosine rule:   a² = b² + c² − 2bc cos A
Area:          ½ab sin C   (C is the angle between sides a and b)
```

The cosine rule rearranged for an angle is cos A = (b² + c² − a²) ÷ 2bc.

## Choosing the rule

| You know | You want | Use |
|---|---|---|
| Two angles and any side | another side | sine rule (find the third angle first if needed) |
| Two sides and the angle between them | the third side | cosine rule |
| Three sides | an angle | cosine rule, rearranged |
| Two sides and an angle **not** between them | an angle | sine rule, then check the ambiguous case |
| Two sides and the angle between them | the area | ½ab sin C |

Quick test: if you have a side **and the angle opposite it**, the sine rule is available. If not, use the cosine rule.

### Worked example 1: sine rule for sides (calculator)

In triangle ABC, angle A = 38°, angle B = 74° and BC = 9.2 cm. Find AC and AB.

```
Angle C = 180° − 38° − 74° = 68°
BC is side a (opposite A), AC is side b (opposite B), AB is side c.

b / sin 74° = 9.2 / sin 38°
b = 9.2 × sin 74° ÷ sin 38° = 14.364... cm

c = 9.2 × sin 68° ÷ sin 38° = 13.855... cm
```

**AC = 14.4 cm, AB = 13.9 cm** (3 s.f.). Check: the longest side, AC, is opposite the largest angle, 74°.

### Worked example 2: exact cosine rule (non-calculator)

In triangle PQR, PQ = 3 cm, PR = 5 cm and angle QPR = 60°. Find the exact length of QR and the exact area.

```
QR² = 3² + 5² − 2 × 3 × 5 × cos 60°
    = 9 + 25 − 30 × ½
    = 19
QR  = √19 cm

Area = ½ × 3 × 5 × sin 60° = (15/2) × (√3/2) = 15√3/4 cm²
```

On Paper 2 the angles will be ones whose exact values you know (see the [exact values study guide](/resources/igcse-mathematics-0580-exact-trigonometric-values-and-trigonometric-functions/)).

## Obtuse angles

For an angle between 90° and 180°, the **cosine is negative** and the **sine is positive**. This has two effects.

- In the cosine rule for a side, −2bc cos A becomes a positive amount added on, so the third side is longer than it would be with a right angle.
- In the cosine rule for an angle, a negative value of cos A means the angle is obtuse; the inverse key gives it correctly.

### Worked example 3: finding an obtuse angle (calculator)

A triangle has sides 5 cm, 7 cm and 10 cm. Find its largest angle.

```
The largest angle is opposite the longest side, 10 cm.
cos θ = (5² + 7² − 10²) ÷ (2 × 5 × 7)
      = (25 + 49 − 100) ÷ 70
      = −26/70 = −0.3714...
θ = cos⁻¹(−0.3714...) = 111.803...°
```

**111.8°** (1 d.p.). Because 5² + 7² < 10², you could predict the angle is obtuse before calculating.

## The ambiguous case

The sine rule for an angle gives a value of sin θ. Between 0° and 180° there are **two** angles with that sine: θ and 180° − θ (see the [trigonometric functions study guide](/resources/cambridge-igcse-mathematics-0580-trigonometric-functions/)). The calculator shows only the acute one. When you know two sides and an angle that is **not** between them, both triangles may be possible.

### Worked example 4: two possible triangles (calculator)

In triangle ABC, AB = 11 cm, BC = 8 cm and angle BAC = 40°. Find the two possible values of angle ACB.

```
BC = a = 8 (opposite A), AB = c = 11 (opposite C)
sin C / 11 = sin 40° / 8
sin C = 11 × sin 40° ÷ 8 = 0.8838...
C = 62.108...°   or   C = 180° − 62.108...° = 117.891...°

Check each: 40° + 62.1° = 102.1° < 180°  valid
            40° + 117.9° = 157.9° < 180° valid
```

**Angle ACB = 62.1° or 117.9°.** Both triangles exist: one with AC about 12.2 cm, one with AC about 4.7 cm. Point C can sit at either of two places on the line from A, both 8 cm from B.

**When is there only one answer?** If the obtuse option makes the angle sum 180° or more, it is impossible. Also, the angle opposite the **shorter** of the two known sides must be acute, because the larger angle is always opposite the longer side. If a question says the angle is obtuse, or a diagram clearly shows it, choose accordingly.

## Area = ½ab sin C, forwards and backwards

The angle must be the one **between** the two sides you use. If it is not, find the included angle first.

### Worked example 5: finding a side from the area (calculator)

Triangle XYZ has XY = 9 cm, angle YXZ = 30° and area 40 cm². Find XZ.

```
Area = ½ × XY × XZ × sin 30°
40   = ½ × 9 × XZ × 0.5
40   = 2.25 × XZ
XZ   = 17.777... cm
```

**XZ = 17.8 cm** (3 s.f.). If the question had asked for angle YXZ instead, you would get sin X and the ambiguous case would apply again: both the acute and obtuse angle give the same area, so the question must tell you which one.

## Multi-step problems

### Worked example 6: a triangular field (calculator)

A field PQR has PQ = 120 m, QR = 85 m and angle PQR = 132°. Find (a) PR, (b) the area of the field, (c) angle QPR.

```
(a) PR² = 120² + 85² − 2 × 120 × 85 × cos 132°
        = 14400 + 7225 + 13650.2...
        = 35275.2...
    PR  = 187.817... m  → 188 m (3 s.f.)

(b) Area = ½ × 120 × 85 × sin 132° = 3790.03... → 3790 m² (3 s.f.)

(c) sin P / 85 = sin 132° / 187.817...
    sin P = 0.3363...
    P = 19.653...° → 19.7°
```

In (c) there is no ambiguity: angle Q is already obtuse, so P must be acute. Use the stored value of PR, not 188.

## Common mistakes

- Pairing a side with an angle that is not opposite it in the sine rule.
- Working out 120² + 85² − 2 × 120 × 85 and then multiplying by cos 132°. Work out the whole term 2bc cos A first.
- Forgetting to square root at the end of the cosine rule for a side.
- Using the sine rule to find the largest angle of a triangle when it might be obtuse; the cosine rule avoids the problem.
- Giving one answer in an ambiguous-case question that asks for two values.
- Using an angle that is not between the two sides in ½ab sin C.
- Rounding a side before using it in the next step.

## Exam technique

- **Calculate** or **work out**: show the substituted formula; that line is usually a method mark.
- **Show that** angle ACB = 117.9° (or similar): give the unrounded value, more accurate than the target, and explain why the obtuse value is chosen.
- Mark the given information on a sketch and label sides with lower-case letters before choosing a rule.
- Give lengths to 3 significant figures and angles to 1 decimal place unless told otherwise.

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Subject content, Topic 6 Trigonometry, E6.5 Non-right-angled triangles (Extended subject content), with C6.5 marked "Extended content only". See also the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).
