---
title: "OxfordAQA International AS and A-level Maths: Sine/cosine rules, radians, arcs (9660) -- Revision Notes"
seoTitle: "OxfordAQA Maths 9660 Radians and Rules Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on sine and cosine rules, triangle area, radians, arcs, sectors and trig graphs for OxfordAQA International AS and A-level Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense content statement PP1.2 (Trigonometry, first part) from Version 5.2 of the OxfordAQA International AS and A-level Mathematics (9660) specification, where it sits in International AS Unit PSM1 (section 3.2, PP1). When you need the reasoning and longer solutions, use the [study guide](/resources/oxfordaqa-a-level-mathematics-sine-and-cosine-rules-radians-arcs-and-sectors/). Test yourself afterwards with the [practice questions](/resources/oxfordaqa-a-level-mathematics-sine-and-cosine-rules-radians-arcs-and-sectors-practice/), tick the [checklist](/checklists/oxfordaqa/a-level/mathematics/), and see the [course hub](/boards/oxfordaqa/a-level/mathematics/). The [free 10-minute diagnostics](/diagnostics/) help you decide where to begin.

## Key results

| Topic | Result |
|---|---|
| Sine rule | a / sin A = b / sin B = c / sin C |
| Cosine rule (side) | a² = b² + c² − 2bc cos A |
| Cosine rule (angle) | cos A = (b² + c² − a²) / (2bc) |
| Triangle area | ½ab sin C, with C between sides a and b |
| Degrees and radians | π rad = 180° |
| Arc length | l = rθ (θ in radians) |
| Sector area | A = ½r²θ (θ in radians) |
| Sector perimeter | 2r + rθ |
| Segment area | ½r²(θ − sin θ) |

The specification says you need to know the arc length and sector area formulae. The triangle labelling is always side a opposite angle A, and so on.

## Choosing the rule

| Information given | Method |
|---|---|
| SAS: two sides, the angle between them | Cosine rule, solving for the opposite side |
| SSS: all three sides | Cosine rule rearranged, solving for an angle |
| AAS or ASA: two angles, one side | Subtract to find the third angle, then sine rule |
| SSA: two sides, an angle outside them | Sine rule, then test for a second triangle |

### Method in steps: any triangle problem

1. Sketch the triangle. Mark every given length and angle.
2. Label sides and opposite angles with matching letters.
3. Decide which row of the table applies.
4. Substitute exact values first and round only at the end.
5. Check that the largest side faces the largest angle and the angles sum to 180°.

### The ambiguous case

For SSA, the sine rule gives sin of the unknown angle. Take the acute value θ and also 180° − θ. Keep the second only if it plus the known angle is less than 180°.

Reminder: a = 5, b = 8, A = 30° gives sin B = 0.8, so B = 53.1° or 126.9°. Both leave room for a third angle, so there are two triangles.

The cosine rule never has this problem. It gives one angle between 0° and 180°, and a negative cosine means an obtuse angle.

## Radians

```
degrees to radians: × π/180
radians to degrees: × 180/π
```

```
π/2 is 90°, π is 180°, 3π/2 is 270°, 2π is 360°
π/6 is 30°, π/4 is 45°, π/3 is 60°, 2π/3 is 120°, 3π/4 is 135°
```

If the arc is as long as the radius, the angle it makes at the centre is 1 radian, which is about 57.3°.

### Method in steps: sector problems

1. Convert any angle in degrees to radians first.
2. Write down l = rθ and A = ½r²θ.
3. If two quantities are given, find the other two. If the perimeter and area are both given, express rθ from the perimeter, then substitute into the area.
4. For a perimeter, add 2r to the arc.
5. For a segment, subtract the triangle ½r² sin θ from the sector.

Reminder: r = 6 cm and θ = 2.5 rad. Arc = 15 cm, area = 45 cm², perimeter = 27 cm.

## Graphs of sin, cos and tan

| Graph | Repeats every | y-values | Notes |
|---|---|---|---|
| y = sin x | 360° (2π) | −1 to 1 | Goes through (0, 0). Peak at 90°, trough at 270° |
| y = cos x | 360° (2π) | −1 to 1 | Equals 1 at x = 0. Zero at 90° and 270° |
| y = tan x | 180° (π) | All real values | Goes through (0, 0). Asymptotes at 90° and 270° |

Periodicity: sin(x + 360°) = sin x, cos(x + 360°) = cos x, tan(x + 180°) = tan x.

Symmetry relations:

```
sin(180° − x) = sin x        cos(−x) = cos x
sin(−x) = −sin x             cos(180° − x) = −cos x
sin(180° + x) = −sin x       cos(360° − x) = cos x
tan(180° + x) = tan x        tan(180° − x) = −tan x
```

Exact values to know:

```
sin: 0°→0, 30°→1/2, 45°→√2/2, 60°→√3/2, 90°→1
cos: 0°→1, 30°→√3/2, 45°→√2/2, 60°→1/2, 90°→0
tan: 0°→0, 30°→1/√3, 45°→1, 60°→√3, 90°→ no value
```

For y = sin kx, y = cos kx and y = tan kx, the period is the original period divided by k. So y = cos 4x has period 90°.

## Must-know distinctions

- Sine rule or cosine rule: if the given facts contain a matching side and angle pair, the sine rule is usually quicker. If not, use the cosine rule.
- Arc and chord: the arc is the curved line of length rθ. The chord is the straight line, found with the cosine rule or 2r sin(θ/2).
- Sector and segment: a sector has two radii. A segment is cut off by a chord and has none.
- Radians and degrees: the formulae l = rθ and A = ½r²θ need radians only.
- Period and range: the period is the horizontal length of one cycle. The range is the set of y-values reached.

## Small worked reminders

### Area and angle together

A triangle has sides 9 cm and 12 cm and area 40 cm². Find the acute included angle.

```
40 = ½ × 9 × 12 × sin C = 54 sin C
sin C = 40/54 = 0.7407
C = 47.8° (1 d.p.)
```

The obtuse alternative is 180° − 47.8° = 132.2°, which also gives the same area.

### An exact segment

A circle has radius 4 cm. A chord subtends an angle of π/2 at the centre. The segment area is

```
½ × 4² × (π/2 − sin(π/2)) = 8(π/2 − 1) = 4π − 8 cm²
```

The sector is 4π cm² and the triangle is 8 cm². Leaving the answer in terms of π keeps it exact.

### Reading a sector from its area

A sector has radius 9 cm and area 40.5 cm². Then 40.5 = ½ × 81 × θ, so θ = 1 rad and the arc length is 9 cm. A sector whose angle is 1 rad always has an arc equal to its radius.

## Ways to gain credit

- Show the formula, then the substitution, then the answer. A correct method with a slip still shows what you intended.
- Keep full values through the working and round once at the end. Give angles to the accuracy the question asks for.
- State both answers where the sine rule or an area equation gives two, and say which are valid.
- Write units on every length and area.

## Quick self-test

1. Write 300° in radians, in terms of π.
2. Write 3π/4 radians in degrees.
3. A sector has radius 6 cm and angle 2.5 rad. Find the arc length, area and perimeter.
4. In a triangle, two sides of length 7 cm and 5 cm enclose an angle of 60°. Find the third side to 3 s.f.
5. Two sides of a triangle are 10 cm and 12 cm and the angle between them is 30°. Find its area.
6. A triangle has sides 5 cm, 6 cm and 4 cm. Find the angle opposite the 4 cm side to 1 d.p.
7. In triangle ABC, A = 75°, B = 40° and a = 10 cm. Find b to 3 s.f.
8. State the period of y = cos 4x.
9. Given sin 25° = 0.4226, write down sin 155° and sin 335°.
10. How many vertical asymptotes does y = tan x have for 0° ≤ x ≤ 360°, and where?
11. In triangle ABC, a = 5, b = 8 and A = 30°. How many triangles are possible?

### Answers

1. 300° × π/180 = 5π/3.
2. 3π/4 × 180/π = 135°.
3. Arc = 6 × 2.5 = 15 cm. Area = ½ × 36 × 2.5 = 45 cm². Perimeter = 12 + 15 = 27 cm.
4. Third side² = 7² + 5² − 2 × 7 × 5 × cos 60° = 49 + 25 − 35 = 39, so the side is √39 = 6.24 cm.
5. ½ × 10 × 12 × sin 30° = 30 cm².
6. cos θ = (5² + 6² − 4²)/(2 × 5 × 6) = 45/60 = 0.75, so θ = 41.4°.
7. b = 10 × sin 40° ÷ sin 75° = 6.65 cm.
8. 360° ÷ 4 = 90°, or π/2 radians.
9. sin 155° = sin(180° − 25°) = 0.4226. sin 335° = sin(360° − 25°) = −0.4226.
10. Two, at x = 90° and x = 270°.
11. Two. Both B = 53.1° and B = 126.9° work, since 30° + 126.9° is below 180°.

## Where marks are usually lost

- Mixing up which side pairs with which angle in the sine rule.
- Giving only the acute angle when the problem allows an obtuse one.
- Rounding the angle or side partway through and then losing accuracy in the final answer.
- Putting an angle into the area formula that is not enclosed by the two sides used.
- Forgetting that sector formulae need radians, or treating a radian angle as degrees.
- Adding only the arc when asked for the boundary of a sector.
- Writing a segment area as sector area minus a sector, rather than minus a triangle.
- Sketching tan x without asymptotes, or giving cos x a start value of 0.
- Giving the period of sin 2x as 720° instead of 180°.
- Not showing the substitution, which makes it hard for an examiner to give credit for a correct method.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section 3.2.1, content statement PP1.2: Trigonometry. Published by OxfordAQA.
