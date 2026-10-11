---
title: "Pearson Edexcel International Advanced Level Mathematics: Triangle trig, radians and trig graphs (YMA01)"
seoTitle: "Edexcel IAL Maths P1: Triangle Trig, Radians, Graphs"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Triangle trigonometry, radians and trigonometric graphs"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 139
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-mathematics-1-edexcel-alevel-maths"
    subtopic: "p1-trigonometry-edexcel-alevel-maths"
description: "Study guide to the sine and cosine rules, ambiguous case, radians, sector area and trig graphs for Edexcel IAL Mathematics P1, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide follows the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics, Further Mathematics and Pure Mathematics specification (Issue 3, April 2019). It covers Unit P1 topics 3.1, 3.2 and 3.3: the sine and cosine rules, radian measure, and the graphs of sine, cosine and tangent. The specification lists P1 as a compulsory unit for both IAS Mathematics and IAL Mathematics (and Pure Mathematics).

Use it with the [revision notes](/resources/edexcel-ial-mathematics-triangle-trigonometry-radians-and-trigonometric-graphs-revision-notes/) and the [practice set](/resources/edexcel-ial-mathematics-triangle-trigonometry-radians-and-trigonometric-graphs-practice/). For the rest of the unit, see [Pure Mathematics 1](/resources/a-level-edexcel-mathematics-pure-mathematics-1/) and the [P1 revision notes](/resources/edexcel-a-level-mathematics-pure1-revision-notes/). Course hub: [Edexcel A Level Mathematics](/boards/edexcel/a-level/mathematics/). Printable [checklist](/checklists/edexcel/a-level/mathematics/). Not sure where you stand? Try a [free 10-minute diagnostic](/diagnostics/).

## What this unit covers

| Spec | What you must be able to do |
|---|---|
| 3.1 | Use the sine and cosine rules, and area = ½ab sin C, including the ambiguous case of the sine rule |
| 3.2 | Use radian measure, with s = rθ for arc length and A = ½r²θ for sector area |
| 3.3 | Know the graphs, symmetries and periodicity of sine, cosine and tangent, including curves such as y = 3 sin x, y = sin(x + π/6) and y = sin 2x |

Solving trigonometric equations, identities and the transformation of general graphs are separate specification topics. This guide only uses graph transformations where they apply to the three trig curves.

## 3.1 Sine rule, cosine rule and area

Label a triangle ABC with side a opposite angle A, and so on.

```
Sine rule:    a / sin A = b / sin B = c / sin C
              (use the upside-down form sin A / a = ... when finding an angle)
Cosine rule:  a² = b² + c² − 2bc cos A
              cos A = (b² + c² − a²) / (2bc)
Area:         ½ ab sin C   (the angle must be between the two sides used)
```

**Which rule?**

| You know | Use |
|---|---|
| Two sides and the angle between them (SAS) | Cosine rule for the third side |
| Three sides (SSS) | Cosine rule for an angle |
| Two angles and a side (AAS or ASA) | Sine rule (the third angle is 180° minus the other two) |
| Two sides and an angle not between them (SSA) | Sine rule, and watch for two triangles |

### Worked example 1: SAS then an angle

In triangle ABC, b = 11.6, c = 8.4 and A = 52°. Find a, then angle C.

```
a² = 11.6² + 8.4² − 2(11.6)(8.4)cos 52°
   = 134.56 + 70.56 − 194.88 × 0.61566
   = 85.14
a = 9.23   (3 s.f.)

sin C / 8.4 = sin 52° / 9.227
sin C = 8.4 × 0.78801 / 9.227 = 0.7174
C = 45.8°
```

C is opposite the shortest side, so it must be acute and the sine rule gives one answer. If you tried angle B (opposite the longest side) with the sine rule, it could be 82.2° or 97.8°, and you could not choose. B = 180° − 52° − 45.8° = 82.2°. Finding the angle opposite the shortest side first avoids the doubt.

### Worked example 2: SSS and an obtuse angle

A triangle has sides 7, 9 and 12. Find its largest angle.

Put the longest side, 12, opposite the angle you want, since the biggest angle faces it.

```
cos θ = (7² + 9² − 12²) / (2 × 7 × 9)
      = (49 + 81 − 144) / 126
      = −14/126 = −1/9
θ = 96.4°
```

A negative cosine means an obtuse angle. The cosine rule never gives a false second answer, which is why it is the better tool for a possibly obtuse angle.

### Worked example 3: two angles and a side

In triangle ABC, A = 59°, C = 63° and a = 22. Find c.

```
B = 180° − 59° − 63° = 58°
c / sin 63° = 22 / sin 59°
c = 22 × 0.89101 / 0.85717 = 22.9   (3 s.f.)
```

### The ambiguous case

You are given two sides and a non-included angle: say a, b and A. Since sin B = sin(180° − B), the equation sin B = k can give two angles, B and 180° − B. Both are valid if the second leaves room for angle A in the triangle: A + (180° − B) < 180°, which simplifies to A < B.

### Worked example 4: two triangles

In triangle ABC, A = 34°, a = 9 and b = 13. Find all possible values of c.

```
sin B = 13 sin 34° / 9 = 0.80772
B = 53.9°   or   B = 180° − 53.9° = 126.1°
```

Check each against A = 34°: 34° + 126.1° = 160.1°, which is below 180°, so both triangles exist.

```
Case 1: B = 53.9°  → C = 180 − 34 − 53.9 = 92.1°
        c = 9 sin 92.1° / sin 34° = 16.1
Case 2: B = 126.1° → C = 180 − 34 − 126.1 = 19.9°
        c = 9 sin 19.9° / sin 34° = 5.47
```

**Answer: c = 16.1 or c = 5.47.**

Two triangles are only possible when the side opposite the given angle is shorter than the other given side but longer than b sin A. Here 13 sin 34° = 7.27 < 9 < 13. If a ≥ b, the second angle is too big and only one triangle exists.

### Worked example 5: area and an unknown angle

A triangle has two sides of length 10 and 9, and area 40. Find the possible sizes of the angle between them, and the third side in each case.

```
½ × 10 × 9 × sin C = 40
sin C = 80/90 = 0.8889
C = 62.7°   or   C = 117.3°
```

Both values give a triangle, because the sine of an acute angle and of its supplement are equal. The cosine rule gives the third side:

```
C = 62.7°:  c² = 100 + 81 − 180 cos 62.7° = 98.5  → c = 9.93
C = 117.3°: c² = 100 + 81 − 180 cos 117.3° = 263.5 → c = 16.2
```

**Examiner insight:** when a question says "find the angle" from an area, a single answer can lose the second solution. Mention that sin C = k gives C and 180° − C, then test each against the context.

## 3.2 Radian measure

One radian is the angle at the centre of a circle that cuts off an arc equal in length to the radius. A full turn is 2π radians, so

```
180° = π radians
degrees → radians: multiply by π/180
radians → degrees: multiply by 180/π
```

Common angles you should know without working:

| Degrees | 30° | 45° | 60° | 90° | 120° | 135° | 150° | 180° | 270° | 360° |
|---|---|---|---|---|---|---|---|---|---|---|
| Radians | π/6 | π/4 | π/3 | π/2 | 2π/3 | 3π/4 | 5π/6 | π | 3π/2 | 2π |

Leave answers in terms of π unless the question asks for a decimal. For example 72° = 72π/180 = 2π/5 ≈ 1.26 rad, and 2 rad = 2 × 180/π ≈ 114.6°.

### Arc length and sector area

With θ in **radians** and radius r:

```
arc length   s = rθ
sector area  A = ½ r² θ
```

Both formulae are only valid when θ is in radians. In degrees the equivalents carry a factor of θ/360, so work in radians throughout.

### Worked example 6: a sector

A sector has radius 9 cm and angle 1.2 radians. Find the arc length, area and perimeter.

```
s = 9 × 1.2 = 10.8 cm
A = ½ × 81 × 1.2 = 48.6 cm²
perimeter = 2 × 9 + 10.8 = 28.8 cm
```

The perimeter of a sector includes both radii. Leaving them out is a common slip.

### Worked example 7: working backwards

A sector has arc length 15 cm and area 75 cm². Find r and θ.

```
s = rθ = 15       A = ½ r² θ = ½ r (rθ) = ½ r × 15 = 75
r = 150/15 = 10 cm
θ = 15/10 = 1.5 radians
```

The substitution A = ½ r s is quick whenever arc length and area are both known.

### Worked example 8: a segment

A chord AB subtends an angle of 2 radians at the centre O of a circle of radius 6 cm. Find the area of the minor segment and its perimeter.

A segment is the sector OAB minus triangle OAB.

```
sector      = ½ × 36 × 2         = 36
triangle    = ½ × 6 × 6 × sin 2  = 18 × 0.90930 = 16.37
segment     = 36 − 16.37         = 19.6 cm²   (3 s.f.)

arc AB      = 6 × 2 = 12
chord AB    : isosceles triangle, apex 2 rad
            = 2 × 6 × sin(1) = 10.10
perimeter   = 12 + 10.10 = 22.1 cm
```

Evaluate sin 2 in radians: sin 2 = 0.9093. A value of 0.0349 means you have used 2 degrees.

## 3.3 Graphs of sine, cosine and tangent

The tables below use radians.

| Function | Period | Range | Key features on 0 to 2π |
|---|---|---|---|
| y = sin x | 2π | −1 to 1 | zeros at 0, π, 2π; max at π/2; min at 3π/2 |
| y = cos x | 2π | −1 to 1 | max at 0 and 2π; zeros at π/2, 3π/2; min at π |
| y = tan x | π | all real | zeros at 0, π, 2π; asymptotes at x = π/2 and 3π/2 |

### Symmetries and periodicity

```
sin(x + 2π) = sin x     cos(x + 2π) = cos x     tan(x + π) = tan x
sin(−x) = −sin x        (odd: rotational symmetry about the origin)
cos(−x) = cos x         (even: reflection in the y-axis)
tan(−x) = −tan x
sin(π − x) = sin x      cos(π − x) = −cos x     tan(π − x) = −tan x
sin(x + π) = −sin x     cos(x + π) = −cos x
sin(π/2 − x) = cos x
```

You can read each one off the graph, so sketch a quick curve rather than memorise them.

### Stretches, shifts and changes of period

| Equation | Effect on y = sin x | Period |
|---|---|---|
| y = 3 sin x | stretch parallel to the y-axis, scale factor 3; range −3 to 3 | 2π |
| y = sin(x + π/6) | translation of π/6 to the left | 2π |
| y = sin 2x | stretch parallel to the x-axis, scale factor ½ | π |
| y = cos(x/2) | stretch parallel to the x-axis, scale factor 2 | 4π |

For y = sin(ax), the period is 2π/a. For y = tan(ax), it is π/a.

### Worked example 9: sketching y = sin(x + π/6)

Sketch y = sin(x + π/6) for 0 ≤ x ≤ 2π, labelling intercepts and turning points.

```
y-intercept: x = 0 → sin(π/6) = 1/2        point (0, 1/2)
maximum:     x + π/6 = π/2 → x = π/3       point (π/3, 1)
zeros:       x + π/6 = π   → x = 5π/6
             x + π/6 = 2π  → x = 11π/6
minimum:     x + π/6 = 3π/2 → x = 4π/3    point (4π/3, −1)
right end:   x = 2π → sin(13π/6) = 1/2     point (2π, 1/2)
```

The curve starts at (0, 1/2), rises to (π/3, 1), falls through (5π/6, 0) to (4π/3, −1), then rises through (11π/6, 0) to (2π, 1/2). It is the sine curve moved π/6 to the left, so the curve begins part-way up the first rise.

### Worked example 10: y = sin 2x

Sketch y = sin 2x for 0 ≤ x ≤ 2π. The period is π, so there are two full waves.

```
zeros:   x = 0, π/2, π, 3π/2, 2π
maxima:  (π/4, 1) and (5π/4, 1)
minima:  (3π/4, −1) and (7π/4, −1)
```

### Reading the tangent graph

y = tan x climbs from −∞ to +∞ between each pair of asymptotes, x = π/2 + nπ, passing through zero midway. It has no maximum or minimum. In y = tan 2x the asymptotes move to x = π/4 + nπ/2.

## Common errors

- Using ½ab sin C with an angle that is not between the two sides.
- Using the sine rule for an angle opposite the longest side and ignoring the obtuse alternative.
- Forgetting the second ambiguous-case triangle, or keeping one that makes the angle sum exceed 180°.
- Applying s = rθ or A = ½r²θ with θ in degrees.
- Leaving the two radii out of a sector perimeter.
- Stretching y = sin 2x vertically; the 2 changes the period, not the height.
- Sketching y = sin(x + π/6) shifted to the right.
- Rounding intermediate values early. Keep full figures until the last line.

## Next steps

Work through the [revision notes](/resources/edexcel-ial-mathematics-triangle-trigonometry-radians-and-trigonometric-graphs-revision-notes/), then test yourself with the [practice questions](/resources/edexcel-ial-mathematics-triangle-trigonometry-radians-and-trigonometric-graphs-practice/). Tick off topics on the [checklist](/checklists/edexcel/a-level/mathematics/) and take a [diagnostic](/diagnostics/) to find gaps.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019 (Pearson Education Limited), Unit P1 topics 3.1 to 3.3.
