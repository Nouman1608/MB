---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.4 The circle: radian measure, arc length and area of a sector"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.04
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-4"
description: "Study guide to IB Maths AA 3.4: radian measure, arc length and sector area, with reverse problems, major sectors, segments, chords and annular sectors."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **section 3.4 of IB DP Mathematics: Analysis and Approaches** (first assessment 2021): the circle, radian measure of angles, length of an arc and area of a sector. It is SL content, examined at SL and HL. The guide notes that radian measure may be expressed as exact multiples of π or as decimals.

The [3D geometry, triangle trigonometry and radian measure study guide](/resources/ib-dp-mathematics-aa-triangles-circles-3d-geometry/) introduces the two formulae with one sector and segment example. This page explains why radians make the formulae so simple, and then concentrates on the questions that use them in reverse or in combination: unknown radii and angles, major sectors, chords and segments, and shapes between two arcs. Afterwards, use the [radian measure revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-4-revision-notes/) and the [radian measure practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-4-practice/).

## Why radians

One radian is the angle at the centre of a circle subtended by an arc whose length equals the radius. So an angle of θ radians cuts off an arc of θ radii:

- arc length **l = rθ**;
- a full turn has arc 2πr, so 2π radians = 360° and **π radians = 180°**;
- the sector is the fraction θ/(2π) of the whole circle, so its area is (θ/2π) × πr² = **½r²θ**.

In degrees the same results need a factor of π/180, which is why both formulae work **only** with θ in radians. Radians are also the measure used throughout calculus, and the guide says radian measure should be assumed on examination papers unless otherwise indicated.

### Converting

| Degrees | 30° | 45° | 60° | 90° | 120° | 135° | 150° | 180° | 270° | 360° |
|---|---|---|---|---|---|---|---|---|---|---|
| Radians | π/6 | π/4 | π/3 | π/2 | 2π/3 | 3π/4 | 5π/6 | π | 3π/2 | 2π |

Multiply by π/180 to go to radians and by 180/π to go to degrees. A sense check: 1 radian is just under 60° (about 57.3°), so an angle of 2.5 radians is obtuse and an angle of 4 radians is reflex.

## Using the formulae in reverse

Many questions give the arc, area or perimeter and ask for r or θ. The perimeter of a sector is **2r + rθ**: two radii plus the arc.

### Worked example 1: perimeter and area together

A sector has perimeter 20 cm and area 16 cm². Find its radius and angle.

```
Perimeter: 2r + rθ = 20   →  rθ = 20 − 2r
Area:      ½r²θ = 16      →  ½r(rθ) = 16
Substitute: ½r(20 − 2r) = 16
            10r − r² = 16
            r² − 10r + 16 = 0
            (r − 2)(r − 8) = 0, so r = 2 or r = 8
r = 2:  θ = (20 − 4)/2 = 8 radians   (more than 2π ≈ 6.28, impossible)
r = 8:  θ = (20 − 16)/8 = 0.5 radians
```

So **r = 8 cm and θ = 0.5 rad**. Rejecting r = 2 needs the reason: a sector angle cannot exceed 2π.

## Minor and major sectors

Two radii divide a circle into a **minor** sector (angle θ) and a **major** sector (angle 2π − θ). The same formulae apply to both, using the correct angle. Read the question for "major" or "reflex", or look at the diagram's shading.

## Chords and segments

A chord AB of a circle with centre O and angle AOB = θ forms an isosceles triangle with the two radii. Two useful results follow from section 3.2:

- **chord length** AB = 2r sin(θ/2), from splitting the isosceles triangle in half (or from the cosine rule);
- **segment area** = sector − triangle = ½r²θ − ½r² sin θ = **½r²(θ − sin θ)**.

These are not separate formulae to memorise; they are combinations, and writing the sector and triangle steps separately keeps your method visible.

### Worked example 2: from a chord to the segments

A circle has radius 10 cm. A chord AB has length 12 cm. Find angle AOB, the area of the minor segment and the area of the major segment.

```
Half-chord: sin(θ/2) = 6/10, so θ/2 = 0.6435..., θ = 1.287 rad
Minor segment = ½(10²)(1.287... − sin 1.287...)
              = 50(1.287... − 0.96) = 16.4 cm²
Major segment = π(10²) − 16.35... = 298 cm²
```

Note that sin 1.287… = 0.96 exactly here, since sin θ = 2 sin(θ/2) cos(θ/2) = 2(0.6)(0.8). The major segment is the whole circle minus the minor one; there is no need to work with the reflex angle.

## Shapes between two arcs

An **annular sector** is the region between two concentric arcs with the same angle θ, like a curved path. Its area is the difference of two sectors:

**area = ½R²θ − ½r²θ = ½(R² − r²)θ.**

Its perimeter has four parts: the outer arc Rθ, the inner arc rθ and two straight edges of length R − r.

### Worked example 3: a curved path (exact)

A path is the region between two concentric arcs of radii 4 m and 7 m, with angle 5π/6 at the centre. Find its exact area and perimeter.

```
Area = ½(7² − 4²)(5π/6) = ½(33)(5π/6) = 55π/4 m²
Perimeter = 7(5π/6) + 4(5π/6) + 2(3)
          = 55π/6 + 6 m
```

## Arc length in motion

An object moving round a circle through θ radians travels rθ. A minute hand of length 9 cm in 20 minutes turns through one third of a revolution, 2π/3, so its tip moves 9 × 2π/3 = **6π cm**, about 18.8 cm.

## Shaded regions: a planning habit

Before calculating, write the region as a sum or difference of standard shapes, in words: "shaded = sector OAB − triangle OAB" or "shaded = large sector − small sector + rectangle". Then calculate each piece on its own line. This makes it clear where each mark comes from, and it catches the most common slip: adding a triangle that should be subtracted. If the region is bounded by arcs of two different circles, find each centre angle separately before combining.

## Common mistakes

- Using l = rθ or ½r²θ with θ in degrees.
- Calculator in degree mode for sin θ in a segment area when θ is in radians.
- Forgetting the two radii in the perimeter of a sector.
- Using the minor angle for a major sector.
- Writing the segment as sector + triangle instead of sector − triangle.
- Keeping an angle bigger than 2π, or a negative radius, from a quadratic.
- Converting with 180/π the wrong way round.

## Exam technique: command words

- **Write down** an angle in radians: an exact multiple of π, such as 5π/6.
- **Find the exact** arc length or area: keep π; Paper 1 needs this.
- **Show that** θ = k: set up the equation from the given information and solve it; end with θ = k.
- **Find the area of the shaded region**: say which shapes you add or subtract before calculating.
- On Paper 2, give answers to 3 significant figures, and store intermediate angles in your calculator.

## Where to go next

Fix the facts with the [radian measure revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-4-revision-notes/) and practise with the [radian measure practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-4-practice/). Radians lead straight into the [unit circle definitions guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-5/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 3.4.
