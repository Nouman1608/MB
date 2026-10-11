---
title: "Pearson Edexcel International Advanced Level Mathematics: Triangle trig, radians and trig graphs (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths P1 Trig and Radians Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on sine and cosine rules, the ambiguous case, radians, arc and sector formulae and trig graphs for Edexcel IAL Mathematics P1."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These revision notes condense Unit P1 topics 3.1 to 3.3 of the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (Issue 3, April 2019): sine and cosine rules, radians, and trigonometric graphs. P1 is a compulsory unit for IAS Mathematics and IAL Mathematics, as the specification states. For full explanations and worked examples, read the [study guide](/resources/edexcel-ial-mathematics-triangle-trigonometry-radians-and-trigonometric-graphs/). Then try the [practice questions](/resources/edexcel-ial-mathematics-triangle-trigonometry-radians-and-trigonometric-graphs-practice/).

Links: [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/), [printable checklist](/checklists/edexcel/a-level/mathematics/), [P1 revision notes](/resources/edexcel-a-level-mathematics-pure1-revision-notes/), [free diagnostics](/diagnostics/).

## 3.1 Triangles: formulae at a glance

| Result | Statement | Use when |
|---|---|---|
| Sine rule | a / sin A = b / sin B = c / sin C | a side and its opposite angle are known, plus one more piece |
| Cosine rule (side) | a² = b² + c² − 2bc cos A | two sides and the included angle |
| Cosine rule (angle) | cos A = (b² + c² − a²) / (2bc) | all three sides |
| Area | ½ ab sin C | two sides and the included angle |

### Method: choosing a rule

1. Mark the known values on a sketch.
2. Is there a known side opposite a known angle? If so, the sine rule is available.
3. If not, you have SAS or SSS, so use the cosine rule.
4. Find a missing angle with the sine rule only when it is opposite the shorter side, or when you can tell whether it is acute or obtuse.
5. Use the angle sum 180° to finish.

### The ambiguous case in brief

- Given two sides and a non-included angle (SSA), sin B = k gives B and 180° − B.
- Accept the second value only if A + (180° − B) < 180°.
- For A acute, with side a opposite A and another side b, there are two triangles when b sin A < a < b, one when a ≥ b, and none when a < b sin A. Right-angled (a = b sin A) gives exactly one.

### Worked reminder

In triangle ABC, A = 30°, a = 6 and b = 8.

```
sin B = 8 sin 30° / 6 = 2/3
B = 41.8°   or   138.2°
b sin A = 4 < 6 < 8, so two triangles: 30° + 138.2° = 168.2° < 180°
```

### Worked reminder: SAS

Two sides 14 and 9 enclose 40°. The third side:

```
x² = 14² + 9² − 2(14)(9)cos 40° = 196 + 81 − 252(0.76604) = 83.96
x = 9.16
```

### Worked reminder: SSS

Sides 5, 6 and 9. The largest angle is opposite 9:

```
cos θ = (25 + 36 − 81) / (2 × 5 × 6) = −20/60 = −1/3
θ = 109.5°
```

### Worked reminder: area

Two sides 7 and 10 enclosing 150°: area = ½ × 7 × 10 × sin 150° = 35 × ½ = 17.5.

## 3.2 Radians

### Definitions and conversions

| Fact | Result |
|---|---|
| One radian | angle at the centre when arc length = radius |
| Full turn | 2π radians |
| Half turn | π radians = 180° |
| Degrees to radians | multiply by π/180 |
| Radians to degrees | multiply by 180/π |
| 1 radian | about 57.3° |

### Exact conversions to know

| Degrees | 30° | 45° | 60° | 90° | 120° | 135° | 150° | 180° | 210° | 225° | 270° | 360° |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Radians | π/6 | π/4 | π/3 | π/2 | 2π/3 | 3π/4 | 5π/6 | π | 7π/6 | 5π/4 | 3π/2 | 2π |

### Sector and segment

| Quantity | Formula (θ in radians) |
|---|---|
| Arc length | s = rθ |
| Sector area | A = ½ r² θ = ½ r s |
| Sector perimeter | 2r + rθ |
| Triangle OAB in a sector | ½ r² sin θ |
| Segment area | ½ r² (θ − sin θ) |
| Chord length | 2r sin(θ/2) |

### Worked reminder

A sector has r = 5 and θ = 2.4. Arc = 5 × 2.4 = 12. Area = ½ × 25 × 2.4 = 30. Perimeter = 10 + 12 = 22.

Another: radius 6, angle π/4. Arc = 6π/4 = 3π/2 ≈ 4.71. Area = ½ × 36 × π/4 = 9π/2 ≈ 14.1.

Segment: r = 10, θ = 0.9. Area = ½ × 100 × (0.9 − sin 0.9) = 50 × 0.11667 = 5.83. Chord = 20 sin 0.45 = 8.70. Perimeter of the segment = arc + chord = 9 + 8.70 = 17.7.

Working backwards: area 18 and r = 6 give θ = 2A / r² = 36/36 = 1 radian, and the arc is 6 × 1 = 6.

### Method: sector and segment problems

1. Write the angle in radians. If it is given in degrees, multiply by π/180 first.
2. Write the formula you need and substitute.
3. For a segment, subtract the triangle from the sector. Do not use ½r²θ alone.
4. If two unknowns appear (r and θ), form two equations from the arc, area or perimeter and eliminate one.
5. Check that θ is sensible: a sector needs 0 < θ < 2π.

## 3.3 Graphs of trigonometric functions

### Key facts

| | y = sin x | y = cos x | y = tan x |
|---|---|---|---|
| Period | 2π (360°) | 2π (360°) | π (180°) |
| Range | −1 to 1 | −1 to 1 | all real values |
| Value at 0 | 0 | 1 | 0 |
| Symmetry | odd: sin(−x) = −sin x | even: cos(−x) = cos x | odd: tan(−x) = −tan x |
| Special feature | max at π/2 | max at 0 | asymptotes at π/2 + nπ |

### Symmetry and periodicity results

```
sin(π − x) = sin x       cos(π − x) = −cos x      tan(π − x) = −tan x
sin(π + x) = −sin x      cos(π + x) = −cos x      tan(π + x) = tan x
sin(π/2 − x) = cos x     cos(π/2 − x) = sin x
```

Add or subtract 2π (360°) to any sine or cosine, or π (180°) to any tangent, and the value is unchanged.

### Exact values to recall

| x | 0 | π/6 | π/4 | π/3 | π/2 |
|---|---|---|---|---|---|
| sin x | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos x | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan x | 0 | √3/3 | 1 | √3 | undefined |

### Method: sketching a transformed trig curve

1. Identify the base curve and its effect: p sin x scales the height by p; sin(x + a) shifts left by a; sin(bx) has period 2π/b.
2. Work out the period and the range.
3. Find the y-intercept by substituting x = 0.
4. Find the zeros and turning points by setting the bracket equal to the base curve's key angles.
5. Plot the points, draw a smooth curve, and label axes values in exact form.

### Worked reminders

- y = 3 sin x: range −3 to 3, period 2π, maximum (π/2, 3).
- y = sin(x + π/6): moves the sine curve left by π/6; crosses the y-axis at 1/2.
- y = sin 2x: period π, so two waves between 0 and 2π.
- y = tan 2x: period π/2, first asymptote at x = π/4.
- y = cos(x/2): period 4π, so only half a wave appears between 0 and 2π; it starts at 1 and reaches −1 at x = 2π.

## Must-know distinctions

- **Sine rule vs cosine rule:** the sine rule needs a pair (side with opposite angle); the cosine rule does not.
- **Included vs non-included angle:** area uses the included angle; the ambiguous case uses a non-included one.
- **Arc vs chord:** the arc is rθ; the chord is 2r sin(θ/2).
- **Sector vs segment:** a sector includes the centre point and both radii; a segment is cut off by a chord.
- **Odd vs even:** sine and tangent are odd; cosine is even.
- **sin 2x vs 2 sin x:** one changes the period, the other the height.

## Quick self-test

1. Convert 210° to radians.
2. Convert 5π/4 to degrees.
3. A sector has radius 5 and angle 2.4 radians. Find its area and perimeter.
4. Two sides 14 and 9 enclose an angle of 40°. Find the third side to 3 s.f.
5. A triangle has sides 5, 6 and 9. Find its largest angle to 1 d.p.
6. In triangle ABC, A = 80°, B = 35° and a = 20. Find b to 3 s.f.
7. Find the area of a triangle with sides 7 and 10 enclosing 150°.
8. In triangle ABC, A = 30°, a = 6 and b = 8. How many triangles are possible?
9. Write the exact values of sin(7π/6), cos(2π/3) and tan(3π/4).
10. State the period of y = sin 2x and the period of y = tan 3x.

### Answers

1. 7π/6.
2. 225°.
3. Area 30, perimeter 22.
4. 9.16.
5. 109.5°.
6. b = 20 sin 35° / sin 80° = 11.6.
7. 17.5.
8. Two (B = 41.8° or 138.2°).
9. −1/2, −1/2 and −1.
10. π and π/3.

## Where marks are usually lost

- Using the sine rule for an obtuse angle and giving only the acute value.
- Leaving out the second ambiguous-case triangle, or including one that breaks the angle sum.
- Using an angle that is not between the two sides in ½ab sin C.
- Applying the arc and sector formulae with the angle in degrees.
- Forgetting the radii in the perimeter of a sector.
- Rounding too early; keep full values until the final line.
- Writing 1.05 when the question wants the exact value π/3.
- Drawing a tan graph without asymptotes, or one that curves back at them.
- Shifting sin(x + a) to the right.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019 (Pearson Education Limited), Unit P1 topics 3.1 to 3.3.
