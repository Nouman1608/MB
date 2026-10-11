---
title: "OxfordAQA International AS and A-level Maths: Sine/cosine rules, radians, arcs (9660)"
seoTitle: "OxfordAQA Maths 9660 Sine, Cosine Rules and Radians"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Sine and cosine rules, radians, arcs and sectors, trigonometric graphs"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 180
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-pp1-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "pp1-trigonometry-oxfordaqa-alevel-maths"
description: "Study guide to the sine and cosine rules, triangle area, radians, arc length, sector area and trig graphs for OxfordAQA International AS and A-level Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide is written for the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. It covers the first part of content statement PP1.2 (Trigonometry): the sine and cosine rules, the area of a triangle, degree and radian measure, arc length and sector area, and the sine, cosine and tangent graphs. The specification files this content under International AS Unit PSM1 (section 3.2, PP1). Solving trigonometric equations and the identities are taught separately.

Links: [course hub](/boards/oxfordaqa/a-level/mathematics/), [printable checklist](/checklists/oxfordaqa/a-level/mathematics/), [revision notes for this unit](/resources/oxfordaqa-a-level-mathematics-sine-and-cosine-rules-radians-arcs-and-sectors-revision-notes/), [practice questions for this unit](/resources/oxfordaqa-a-level-mathematics-sine-and-cosine-rules-radians-arcs-and-sectors-practice/) and [Pure Maths 1 revision notes](/resources/oxfordaqa-a-level-mathematics-p1-revision-notes/). The [free 10-minute diagnostics](/diagnostics/) can show you where to begin.

## What this unit covers

| Spec ref | What you must be able to do |
|---|---|
| PP1.2 | Use the sine rule and the cosine rule |
| PP1.2 | Use area = ½ab sin C |
| PP1.2 | Work in degrees and radians and convert between them |
| PP1.2 | Use arc length l = rθ and sector area A = ½r²θ (you need to know these) |
| PP1.2 | Know the sine, cosine and tangent functions, their graphs, symmetries and periodicity |

The specification says the ideas of odd and even functions are not required, so this guide describes symmetry in plain terms.

## Labelling a triangle

Use capital letters for the vertices and the matching small letters for the opposite sides. Side a is opposite angle A, side b opposite B, side c opposite C. Every rule below depends on this pairing, so mark it on your diagram before you start.

## The sine rule

```
a / sin A = b / sin B = c / sin C
```

You can also write it upside down, sin A / a = sin B / b = sin C / c. Put the unknown on top.

The rule works as soon as you hold one matching pair, a side with the angle facing it, plus one extra fact. In practice that is two angles with any side, or two sides with an angle that is not enclosed by them.

### Worked example 1: finding a side

In triangle ABC, A = 38°, B = 64° and a = 9.4 cm. Find b and c.

```
b / sin 64° = 9.4 / sin 38°
b = 9.4 × sin 64° ÷ sin 38° = 13.72... = 13.7 cm (3 s.f.)

C = 180° − 38° − 64° = 78°
c = 9.4 × sin 78° ÷ sin 38° = 14.93... = 14.9 cm (3 s.f.)
```

### The ambiguous case

If the data is two sides plus an angle that lies outside them, the sine rule gives sin of the unknown angle. Two angles between 0° and 180° have the same sine: θ and 180° − θ. Both may give a triangle.

### Worked example 2: two triangles

In triangle ABC, a = 11.2 cm, b = 14.5 cm and A = 43°. Find angle B and side c in each possible triangle.

```
sin B / 14.5 = sin 43° / 11.2
sin B = 14.5 × sin 43° ÷ 11.2 = 0.8829...
B = 62.0° or B = 180° − 62.0° = 118.0°
```

Test each. Case 1: C = 180° − 43° − 62.0° = 75.0°, so c = 11.2 × sin 75.0° ÷ sin 43° = 15.9 cm. Case 2: C = 180° − 43° − 118.0° = 19.0°, so c = 11.2 × sin 19.0° ÷ sin 43° = 5.35 cm.

Both are valid because the angles in each case add to less than 180°. If the second value of B had made the total reach 180° or more, only one triangle would exist. A short check is: the larger side is opposite the larger angle. Here b > a, so B > A holds in both cases.

## The cosine rule

```
a² = b² + c² − 2bc cos A
```

Rearranged for an angle:

```
cos A = (b² + c² − a²) / (2bc)
```

Use it for two sides with the angle enclosed by them, or for a triangle with all three sides given. The pattern repeats for the other angles: b² = a² + c² − 2ac cos B, and so on.

### Worked example 3: finding a side

In triangle ABC, b = 8.3 cm, c = 11.6 cm and A = 64°. Find a.

```
a² = 8.3² + 11.6² − 2 × 8.3 × 11.6 × cos 64°
a² = 68.89 + 134.56 − 84.4... = 119.04
a = 10.9 cm (3 s.f.)
```

### Worked example 4: finding an angle

A triangle has sides 7.2 cm, 9.5 cm and 12.1 cm. Find its largest angle, then the other two.

The longest side faces the biggest angle. Name that angle L.

```
cos L = (7.2² + 9.5² − 12.1²) / (2 × 7.2 × 9.5)
      = (51.84 + 90.25 − 146.41) / 136.8
      = −4.32 / 136.8 = −0.03157...
L = 91.8° (1 d.p.)
```

A negative cosine tells you the angle is obtuse. The cosine rule gives only one angle in the range 0° to 180°, so there is no ambiguity. For the next angle, use the cosine rule again, with the side 9.5 cm opposite it: cos B = (7.2² + 12.1² − 9.5²) ÷ (2 × 7.2 × 12.1), so B = 51.7°. The third angle is 180° − 91.8° − 51.7° = 36.5°.

### Choosing a rule

| You know | Use |
|---|---|
| Two sides with the angle enclosed | Cosine rule, giving the missing side |
| Every side known | Cosine rule rearranged, giving an angle |
| A side and its opposite angle, plus one more fact | Sine rule |
| Two angles known | Subtract from 180° for the third, then sine rule |

## Area of a triangle

```
Area = ½ab sin C
```

The angle C must be the angle between sides a and b. Any pair of sides with their included angle will do.

### Worked example 5

Triangle ABC has a = 5.7 cm, b = 8.6 cm and C = 47°. Find the area and the length of c.

```
Area = ½ × 5.7 × 8.6 × sin 47° = 17.9 cm² (3 s.f.)
c² = 5.7² + 8.6² − 2 × 5.7 × 8.6 × cos 47° = 39.58...
c = 6.29 cm (3 s.f.)
```

### Worked example 6: working backwards from the area

A triangle has sides 7 cm and 12 cm and area 35 cm². Find the possible sizes of the included angle.

```
35 = ½ × 7 × 12 × sin C = 42 sin C
sin C = 5/6 = 0.8333...
C = 56.4° or C = 180° − 56.4° = 123.6°
```

Both angles are possible because the sine is positive in both.

## Degrees and radians

Picture a circle with an arc marked along its edge that is exactly as long as the radius. The angle that arc makes at the centre is one radian. The whole circle is 2π radians, giving:

```
π radians = 180°
to change degrees to radians: multiply by π/180
to change radians to degrees: multiply by 180/π
```

Learn these common angles:

A right angle is π/2, a half turn is π, and three quarters of a turn is 3π/2. The acute special angles are π/6 for 30°, π/4 for 45° and π/3 for 60°.

Examples: 135° = (135/180)π = 3π/4. 5π/6 = (5 × 180°)/6 = 150°. 2.4 rad = 2.4 × 180/π = 137.5° (1 d.p.). 70° = 70π/180 = 7π/18 ≈ 1.22 rad.

When a question gives an angle with no unit and no degree sign, such as sin 1.4, treat it as radians. Make sure every evaluation you do uses the matching unit.

## Arc length and sector area

The spec says you need to know these two formulae, with θ in radians:

```
Arc length  l = rθ
Sector area A = ½r²θ
```

Perimeter of a sector = 2r + rθ (two radii plus the arc). Forgetting the radii is the usual slip.

### Worked example 7

A sector has radius 7.5 cm and angle 1.4 rad. Find the arc length, area and perimeter.

```
l = 7.5 × 1.4 = 10.5 cm
A = ½ × 7.5² × 1.4 = 39.375 = 39.4 cm² (3 s.f.)
Perimeter = 2 × 7.5 + 10.5 = 25.5 cm
```

### Worked example 8: a segment

The area between a chord and its arc is a segment. It equals sector area minus triangle area:

```
Segment = ½r²θ − ½r² sin θ = ½r²(θ − sin θ)
```

For r = 7.5 cm and θ = 1.4 rad: ½ × 56.25 × (1.4 − 0.98545) = 11.7 cm² (3 s.f.).

### Worked example 9: finding r and θ

A sector has perimeter 30 cm and area 50 cm². Find the possible values of r and θ.

```
Perimeter: 2r + rθ = 30, so rθ = 30 − 2r
Area: ½r(rθ) = 50, so ½r(30 − 2r) = 50
15r − r² = 50
r² − 15r + 50 = 0
(r − 5)(r − 10) = 0
```

If r = 5, then θ = (30 − 10)/5 = 4. If r = 10, then θ = (30 − 20)/10 = 1. Both are valid sectors, since θ is below 2π in each case.

### If the angle is in degrees

Convert first. A sector of radius 12 cm and angle 75° has θ = 75π/180 = 5π/12 rad. Arc length = 12 × 5π/12 = 5π = 15.7 cm. Area = ½ × 144 × 5π/12 = 30π = 94.2 cm².

## Graphs, symmetry and periodicity

Know the shape of each graph and be ready to sketch it over 0° to 360° (or 0 to 2π).

| Graph | Repeats every | y-values | Features |
|---|---|---|---|
| y = sin x | 360° (2π) | −1 to 1 | Goes through (0, 0), peaks at x = 90°, bottoms out at x = 270° |
| y = cos x | 360° (2π) | −1 to 1 | Value 1 at x = 0, zero at 90° and 270°, lowest point at x = 180° |
| y = tan x | 180° (π) | All real values | Goes through (0, 0), vertical asymptotes at x = 90° and 270°, no turning points |

Periodicity means the graph repeats exactly. So sin(x + 360°) = sin x, cos(x + 360°) = cos x and tan(x + 180°) = tan x.

The graphs also have symmetry that lets you move between angles:

```
sin(−x) = −sin x            cos(−x) = cos x
sin(180° − x) = sin x       cos(180° − x) = −cos x
sin(180° + x) = −sin x      cos(360° − x) = cos x
tan(180° + x) = tan x       tan(180° − x) = −tan x
```

### Worked example 10

Given sin 20° = 0.3420 and cos 20° = 0.9397 (4 d.p.), write down sin 160°, sin 200°, cos 160° and cos 340°.

```
sin 160° = sin(180° − 20°) = 0.3420
sin 200° = sin(180° + 20°) = −0.3420
cos 160° = cos(180° − 20°) = −0.9397
cos 340° = cos(360° − 20°) = 0.9397
```

A sketch makes these easy. The sine graph is symmetrical about x = 90° and the cosine graph about x = 180°, which is why 160° and 20° share a sine value.

### Stretching the input

Replacing x with kx shrinks the graph horizontally and divides the period by k. The graph of y = sin 2x repeats every 360°/2 = 180°. The graph of y = tan(x/2) has period 180° ÷ ½ = 360°. Multiplying the whole function, as in y = 3 sin x, scales the height: the range is −3 to 3.

## Common errors

- Pairing a side with the wrong angle in the sine rule. Mark opposite pairs on the diagram.
- Using the sine rule to find an angle that could be obtuse, and giving only the acute answer.
- Using cos A with the wrong side in the cosine rule. The side being found stands alone on the left.
- Applying the area formula with an angle that sits outside the two sides you multiply.
- Using l = rθ or A = ½r²θ with θ in degrees.
- Forgetting the straight edges when adding up the boundary of a sector.
- Drawing tan x with a maximum, or stopping the curve before the asymptote.

## Next steps

Work through the [practice questions](/resources/oxfordaqa-a-level-mathematics-sine-and-cosine-rules-radians-arcs-and-sectors-practice/), then use the [revision notes](/resources/oxfordaqa-a-level-mathematics-sine-and-cosine-rules-radians-arcs-and-sectors-revision-notes/) to keep the key results fresh. Record your progress on the [checklist](/checklists/oxfordaqa/a-level/mathematics/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section 3.2.1, content statement PP1.2: Trigonometry. Published by OxfordAQA.
