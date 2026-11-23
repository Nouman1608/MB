---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.2 The sine rule, cosine rule and area of a triangle"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.02
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-2"
description: "Study guide to IB Maths AA 3.2: right-angled ratios, choosing the sine or cosine rule, exact working, obtuse angles and the area formula ½ab sin C."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **section 3.2 of IB DP Mathematics: Analysis and Approaches** (first assessment 2021). It is SL content, examined at SL and HL. The section asks you to:

- use the sine, cosine and tangent ratios to find sides and angles of right-angled triangles;
- use the sine rule, a/sin A = b/sin B = c/sin C;
- use the cosine rule, c² = a² + b² − 2ab cos C, and its rearranged form for an angle;
- find the area of a triangle as ½ab sin C.

The ambiguous case of the sine rule is not part of 3.2; it is added in section 3.5. The [3D geometry, triangle trigonometry and radian measure study guide](/resources/ib-dp-mathematics-aa-triangles-circles-3d-geometry/) introduces each rule with one example. This page focuses on choosing the right rule, working exactly on Paper 1, two-step problems, and area questions run in reverse. Follow it with the [triangle trigonometry revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-2-revision-notes/) and the [triangle trigonometry practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-2-practice/).

## Labelling first

Use capital letters for angles and the matching lower-case letter for the side **opposite**: side a is opposite angle A. Every rule depends on pairing correctly, so label the diagram before writing any formula. If a triangle is named PQR, side p is QR, side q is PR and side r is PQ.

## Choosing the rule

| What you know | What you want | Rule |
|---|---|---|
| Right angle plus one side and one other piece | any side or angle | SOH CAH TOA or Pythagoras |
| Two angles and any side | another side | sine rule |
| Two sides and the angle opposite one of them | the angle opposite the other | sine rule (check uniqueness) |
| Two sides and the included angle | the third side | cosine rule |
| Three sides | any angle | cosine rule (rearranged) |
| Two sides and the included angle | area | ½ab sin C |

A quick test: the sine rule needs a **complete pair**, a side together with its opposite angle. If you have no complete pair, you need the cosine rule.

## Why the cosine rule is safer for large angles

The sine of an angle and the sine of its supplement are equal: sin 50° = sin 130°. So when the sine rule gives an angle, a calculator returns only the acute value. If the true angle is obtuse, the sine rule silently gives the wrong one.

The cosine rule has no such problem, because cos θ is negative for obtuse θ. So:

- To find the **largest** angle (opposite the longest side), use the cosine rule.
- If you use the sine rule to find an angle, make sure that angle is opposite a **shorter** side than a known side–angle pair. Then it must be acute and the answer is unique.

## Working exactly (Paper 1)

On the calculator-free paper the values are chosen so the rules simplify. You should know cos 60° = ½, cos 120° = −½, sin 30° = ½, sin 60° = √3/2 and sin 45° = cos 45° = √2/2.

### Worked example 1: exact cosine rule and area

In triangle ABC, AB = 3 cm, AC = 8 cm and angle BAC = 60°. Find BC and the exact area.

```
BC² = 3² + 8² − 2(3)(8) cos 60°
    = 9 + 64 − 48 × ½ = 49
BC  = 7 cm

Area = ½ × 3 × 8 × sin 60° = 12 × √3/2 = 6√3 cm²
```

The answer to the area must be left as 6√3 on Paper 1; 10.4 does not answer "exact".

## Two-step problems

Most exam questions chain two rules. The key habit is to **store the unrounded value** from the first step.

### Worked example 2: cosine rule, then sine rule

In triangle PQR, PQ = 9.4 cm, QR = 6.1 cm and angle PQR = 112°. Find PR and angle QPR.

```
PR² = 9.4² + 6.1² − 2(9.4)(6.1) cos 112°
PR  = 12.98... = 13.0 cm (3 s.f.)

sin QPR / 6.1 = sin 112° / 12.98...
sin QPR = 0.4357...
QPR = 25.8°
```

Angle QPR is opposite QR = 6.1 cm, the shorter of the two sides in the calculation, so it must be acute; the sine rule answer is safe. The third angle is 180° − 112° − 25.8° = 42.2°.

If you had rounded PR to 13.0 before the second step, the angle would still be 25.8° here, but in tighter cases the third significant figure changes. Use your calculator's memory.

## Area questions in reverse

Area = ½ab sin C can be rearranged to find a side or an angle.

### Worked example 3: finding the included angle from the area

A triangle has sides 6 cm and 9 cm, and area 20 cm². Find the possible sizes of the angle between these sides.

```
½ × 6 × 9 × sin C = 20
27 sin C = 20, so sin C = 20/27 = 0.7407...
C = 47.8°   or   C = 180° − 47.8° = 132°
```

Both angles give a genuine triangle with the same area, because sin C is the same. The third side is 6.67 cm in the first case and 13.8 cm in the second. If the question tells you the angle is obtuse, or gives the third side, only one survives. This is not the ambiguous case of section 3.5; it comes from the area formula itself.

## Right-angled triangles inside other shapes

Many 3.2 questions hide a right angle. Look for:

- the perpendicular from the apex of an isosceles triangle, which bisects the base;
- a radius meeting a tangent;
- the height of a triangle drawn to find its area as ½ × base × height.

Splitting an isosceles triangle with sides 10, 10 and 12 gives two right-angled triangles with hypotenuse 10 and base 6, so the height is 8 and the area is 48, with no sine rule needed.

## Common mistakes

- Pairing a side with the wrong angle in the sine rule.
- Using the sine rule to find an obtuse angle and getting its acute supplement.
- Forgetting that cos C is negative for an obtuse angle, so −2ab cos C adds to the total.
- Calculator in radian mode when the question uses degrees.
- In ½ab sin C, using an angle that is not between sides a and b.
- Rounding an intermediate side and carrying it into the next rule.
- Giving one angle from an area question when two are possible.

## Exam technique: command words

- **Find**: write the rule with the numbers substituted before evaluating; that line carries the method mark.
- **Show that** cos A = k: substitute into the rearranged cosine rule and simplify to exactly k.
- **Find the exact value**: no decimals; use the standard exact ratios.
- **Hence find the area**: use the angle or side from the previous part.
- Give lengths to 3 significant figures and angles in degrees to 1 decimal place or 3 significant figures, with units.

## Where to go next

Condense this with the [triangle trigonometry revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-2-revision-notes/), then try the [triangle trigonometry practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-2-practice/). Real-life uses, such as bearings and elevation, are in the [applications of trigonometry guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-3/), and the ambiguous case in the [unit circle guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-5/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 3.2.
