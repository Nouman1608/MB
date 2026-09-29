---
title: "Cambridge International AS & A Level Mathematics 9709: Circular measure -- Study Guide"
seoTitle: "Cambridge 9709 Circular Measure Study Guide: Radians"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Circular measure"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 32
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
    subtopic: "circular-measure-cambridge-alevel-maths"
description: "Radians, arc length, sector area, segments and tangent problems taught step by step with worked examples, for Cambridge 9709 Pure Mathematics 1."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-28
featured: false
---

This study guide covers section 1.4 Circular measure of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027. It sits in Pure Mathematics 1, which is examined on Paper 1 (1 hour 50 minutes, 75 marks) and is compulsory for both AS Level and A Level. Papers 2 and 3 assume you know Paper 1 content, so radians come back there too. You may use a scientific calculator in every 9709 paper, but you must show your working.

Course hub: [Cambridge A Level Mathematics](/boards/cambridge/a-level/mathematics/) · Printable checklist: [9709 checklist](/checklists/cambridge/a-level/mathematics/) · Recall: [Circular measure revision notes](/resources/a-level-maths-9709-pure-mathematics-1-circular-measure-revision-notes/) · Practise: [Circular measure practice questions](/resources/a-level-maths-9709-pure-mathematics-1-circular-measure-practice/)

## What this unit covers

| Syllabus 1.4 | What you must be able to do | Paper |
|---|---|---|
| Radians | Understand the definition of a radian, and use the relationship between radians and degrees | Paper 1 |
| Arc length and sector area | Use s = rθ and A = ½r²θ to solve problems on arcs and sectors, including lengths and angles in triangles and areas of triangles | Paper 1 |

That is the whole of 1.4. Most marks come from the second outcome: a diagram with sectors, chords, triangles and tangents, where you combine s = rθ and A = ½r²θ with IGCSE triangle work.

If you are starting Pure Mathematics 1, the [Pure Mathematics 1 overview and quadratics guide](/resources/a-level-mathematics-pure-mathematics-1-quadratics/) sets out all eight sections. The section just before this one is [1.3 Coordinate geometry](/resources/a-level-mathematics-pure-mathematics-1-coordinate-geometry/), where circles appear as equations rather than as sectors.

## 1. Radians

### The definition

One radian is the angle subtended at the centre of a circle by an arc whose length equals the radius.

A full circle has circumference 2πr, so the arc all the way round is 2π "radius lengths". That gives the key fact:

- 2π radians = 360°
- π radians = 180°
- 1 radian = 180°/π ≈ 57.3°

A radian is a ratio of two lengths (arc ÷ radius), so it has no units. An angle with no degree sign is in radians.

### Converting

- Degrees to radians: multiply by π/180.
- Radians to degrees: multiply by 180/π.

Learn these common values. They come up constantly, and you will also need them in 1.5 Trigonometry.

| Degrees | 30° | 45° | 60° | 90° | 120° | 135° | 150° | 180° | 270° | 360° |
|---|---|---|---|---|---|---|---|---|---|---|
| Radians | π/6 | π/4 | π/3 | π/2 | 2π/3 | 3π/4 | 5π/6 | π | 3π/2 | 2π |

### Worked example 1: converting both ways

(a) Express 135° in radians as a multiple of π.

```
135 × π/180 = 135π/180 = 3π/4
```

Answer: **3π/4**. Simplify the fraction; 135π/180 is not finished.

(b) Convert 2.4 radians to degrees, correct to 1 decimal place.

```
2.4 × 180/π = 137.509...
```

Answer: **137.5°**. Angles in degrees go to 1 decimal place unless the question says otherwise.

(c) Convert 5π/12 to degrees. Replace π with 180°: 5 × 180 ÷ 12 = **75°**.

### Calculator mode

Your calculator must be in radian mode whenever you find sin, cos or tan of an angle in radians. Check it at the start of every circular-measure question. If sin(π/6) does not give 0.5, you are in the wrong mode.

## 2. Arc length

An arc is a fraction θ/(2π) of the whole circumference. So

```
s = (θ / 2π) × 2πr = rθ
```

**Arc length s = rθ, with θ in radians.** This formula is in the list of formulae (MF19) supplied in the exam, under Mensuration. The "θ in radians" condition matters. If a question gives the angle in degrees, convert it first.

The perimeter of a sector is two radii plus the arc:

```
perimeter of sector = 2r + rθ
```

### Worked example 2: finding an angle from a perimeter

A sector OAB has centre O and radius 8 cm. Its perimeter is 30 cm. Find angle AOB in radians, and the area of the sector.

```
perimeter = 2r + rθ
30 = 16 + 8θ
8θ = 14
θ = 1.75
```

Angle AOB = **1.75 radians**. The area uses the next formula: ½ × 8² × 1.75 = **56 cm²**.

The common slip here is forgetting the two radii and writing 8θ = 30.

## 3. Sector area

A sector is a fraction θ/(2π) of the whole circle's area:

```
A = (θ / 2π) × πr² = ½r²θ
```

**Sector area A = ½r²θ, with θ in radians.** This is also in MF19.

### Minor and major sectors

Two radii split a circle into a minor sector (angle θ) and a major sector (angle 2π − θ). A question about the major sector wants 2π − θ in both formulas. Always check which one the shaded region is.

### Worked example 3: area and perimeter together

A sector has perimeter 20 cm and area 16 cm². Find the radius and the angle.

Use the perimeter to write rθ in terms of r, then substitute into the area.

```
2r + rθ = 20   so   rθ = 20 − 2r
A = ½r²θ = ½r(rθ) = ½r(20 − 2r) = 10r − r²
10r − r² = 16
r² − 10r + 16 = 0
(r − 2)(r − 8) = 0
r = 2 or r = 8
```

Now find θ for each: r = 2 gives θ = 16/2 = 8; r = 8 gives θ = 4/8 = 0.5.

An angle of 8 radians is more than 2π ≈ 6.28, which is more than a full turn, so it cannot be a sector angle. Reject it.

Answer: **r = 8 cm, θ = 0.5 radians**.

This is where 1.4 meets [1.1 Quadratics](/resources/a-level-mathematics-quadratics-revision-notes/). Always test each root against the context.

## 4. Triangles, chords and segments

The syllabus note for 1.4 says problems include "calculation of lengths and angles in triangles and areas of triangles". These tools are not in MF19. You need them from IGCSE:

- Area of a triangle = ½ab sin C
- Cosine rule: a² = b² + c² − 2bc cos A
- Sine rule: a/sin A = b/sin B = c/sin C
- Right-angled trigonometry (SOH CAH TOA) and Pythagoras

### The standard pieces

For a sector OAB with radius r and angle θ:

- **Triangle OAB** has two sides r with included angle θ, so its area is ½r² sin θ.
- **Chord AB**: split the isosceles triangle down the middle to get two right-angled triangles. Half the chord is r sin(θ/2), so AB = 2r sin(θ/2). The cosine rule gives the same length: AB² = 2r² − 2r² cos θ.
- **Segment** (the region between chord and arc): sector minus triangle.

```
segment area = ½r²θ − ½r² sin θ = ½r²(θ − sin θ)
```

Do not quote the segment formula without working. Write the sector and the triangle separately first, then subtract. That way each step can earn a method mark.

### Worked example 4: exact segment area and perimeter

A circle has centre O and radius 10 cm. A chord AB subtends an angle of π/3 at O. Find, in exact form, the area and the perimeter of the minor segment.

Triangle OAB has OA = OB and angle π/3, so it is equilateral and AB = 10 cm.

```
sector  = ½ × 10² × π/3 = 50π/3
triangle = ½ × 10² × sin(π/3) = 50 × √3/2 = 25√3
segment = 50π/3 − 25√3        (≈ 9.06 cm²)
```

The perimeter of the segment is the arc plus the chord:

```
arc = 10 × π/3 = 10π/3
perimeter = 10π/3 + 10
```

Answers: area **50π/3 − 25√3 cm²**, perimeter **10π/3 + 10 cm**. "Exact" means leave π and √3 in. A decimal earns no credit when the question asks for an exact answer.

### Worked example 5: angle from a chord, using the cosine rule

A circle has centre O and radius 7 cm. A chord PQ has length 10 cm. Find angle POQ, then the area of the minor segment, both correct to 3 significant figures.

```
cos POQ = (7² + 7² − 10²) / (2 × 7 × 7) = −2/98 = −1/49
POQ = cos⁻¹(−1/49) = 1.591... radians
```

The cosine is negative, so the angle is obtuse. That fits: at a right angle the chord would be 7√2 ≈ 9.90 cm, and 10 cm is a little longer.

```
sector   = ½ × 49 × 1.5912... = 38.98...
triangle = ½ × 49 × sin(1.5912...) = 24.49...
segment  = 38.98... − 24.49... = 14.489...
```

Answers: angle POQ = **1.59 radians**, segment area = **14.5 cm²**. Keep the full calculator value of the angle for the later steps. Using 1.59 instead gives a segment area of 14.46 rather than 14.49. Both happen to round to 14.5 here, but in many questions early rounding changes the third figure and costs the accuracy mark.

## 5. Tangents and composite shapes

Many questions add tangents. Two facts from IGCSE do most of the work:

- A tangent is perpendicular to the radius at the point of contact.
- The two tangents from an external point are equal in length, and the line from the centre to that point bisects the angle between them.

### Worked example 6: region between two tangents and an arc

A circle has centre O and radius 5 cm. A point T is 10 cm from O. The tangents from T touch the circle at A and B. Find, in exact form, the area and the perimeter of the region bounded by TA, TB and the minor arc AB.

Triangle OAT has a right angle at A, so

```
cos AOT = OA/OT = 5/10 = ½
AOT = π/3
AOB = 2 × π/3 = 2π/3
TA = √(10² − 5²) = √75 = 5√3
```

The region is the kite OATB minus the sector OAB.

```
kite  = 2 × (½ × 5 × 5√3) = 25√3
sector = ½ × 5² × 2π/3 = 25π/3
area  = 25√3 − 25π/3        (≈ 17.1 cm²)
```

The perimeter is the two tangents plus the minor arc:

```
arc = 5 × 2π/3 = 10π/3
perimeter = 10√3 + 10π/3    (≈ 27.8 cm)
```

Answers: area **25√3 − 25π/3 cm²**, perimeter **10√3 + 10π/3 cm**.

### A method for any composite shape

1. Mark every radius on the diagram with its length. Mark every right angle (tangents, perpendiculars).
2. Find every angle at the centre in radians. Use the fact that angles at a point add up to 2π, and angles on a straight line add up to π.
3. Split the shaded region into sectors, triangles and segments. Write each piece's area on its own line.
4. For a perimeter, list every boundary piece: arcs, radii, chords, tangents. Do not include radii that lie inside the region.
5. Give exact answers when asked. Otherwise give 3 significant figures, keeping full values until the end.

## Common errors

- Using degrees in s = rθ or ½r²θ. With θ = 60, a sector of radius 3 has "area" 270, which should look wrong at once.
- Leaving the calculator in degree mode when finding sin θ for θ in radians. sin 1.2 in degree mode gives 0.0209 instead of 0.932.
- Forgetting the two radii in the perimeter of a sector.
- Using θ instead of 2π − θ for a major sector or major arc.
- Finding the segment area as sector minus ½r², which leaves out sin θ.
- Rounding an angle to 3 s.f. and then using the rounded value in the next step.
- Keeping an impossible root (θ > 2π, or a negative radius) after solving a quadratic.
- Giving 9.06 when the question says "exact".

## Where to go next

- Test your recall with the [circular measure revision notes](/resources/a-level-maths-9709-pure-mathematics-1-circular-measure-revision-notes/). They include a quick self-test.
- Work through the [circular measure practice questions](/resources/a-level-maths-9709-pure-mathematics-1-circular-measure-practice/), which have full mark schemes.
- Mixed Paper 1 questions, including a circle-and-chord angle question, are in the [Pure Mathematics 1 mixed practice](/resources/a-level-mathematics-pure-1-mixed-practice/).
- Radians are needed again when you differentiate and integrate trigonometric functions. See the [Pure Mathematics 2 study guide](/resources/a-level-mathematics-pure-mathematics-2/) and the [Pure Mathematics 3 study guide](/resources/a-level-maths-9709-pure-mathematics-3/).
- Find your weak spots across AS content with the free [9709 AS diagnostic](/practice/9709/diagnostic/as/), then use the [9709 self-check question bank](/practice/9709/).

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027* (Version 4): Subject content, 1 Pure Mathematics 1 (for Paper 1), section 1.4 Circular measure. Formulae references are to the syllabus's List of formulae and statistical tables (MF19).
