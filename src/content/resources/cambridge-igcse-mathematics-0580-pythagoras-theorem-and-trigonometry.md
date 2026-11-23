---
title: "Cambridge IGCSE Mathematics (0580): Pythagoras’ theorem and trigonometry in 3D"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 6 – Trigonometry"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 6.6
syllabusTopics:
  - qualification: "igcse"
    topic: "trigonometry-cambridge-igcse-maths"
    subtopic: "pythagoras-theorem-and-trigonometry-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic E6.6: finding lengths and angles in cuboids, pyramids, cones and prisms, including the angle between a line and a plane."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **E6.6 Pythagoras’ theorem and trigonometry in 3D** in Topic 6 Trigonometry of the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. It is **Extended only**: the Core column reads "Extended content only", so it is tested on Paper 2 (non-calculator) and Paper 4 (calculator).

The syllabus asks you to "carry out calculations and solve problems in three dimensions using Pythagoras’ theorem and trigonometry, including calculating the angle between a line and a plane". The two-dimensional skills come from the [Pythagoras’ theorem study guide](/resources/igcse-mathematics-0580-pythagoras-theorem/) and the [trigonometry study guide](/resources/igcse-mathematics-trigonometry/). This page shows how to find the right flat triangle inside a solid. Revise with the [3D trigonometry revision notes](/resources/cambridge-igcse-mathematics-0580-pythagoras-theorem-and-trigonometry-revision-notes/) and practise with the [3D trigonometry practice questions](/resources/cambridge-igcse-mathematics-0580-pythagoras-theorem-and-trigonometry-practice/).

## The one idea: every 3D question is a chain of 2D triangles

You never use a "3D formula". You find a right-angled triangle that lies in one flat plane inside the solid, draw it separately, and solve it. Often the answer to one triangle becomes a side of the next.

**The routine**

1. Name the line or angle you want, using the vertex letters.
2. Look for a right angle that involves it. Vertical edges meet horizontal faces at 90°; a perpendicular height meets the base at 90°.
3. Draw that triangle flat, label the known sides, and mark the right angle.
4. If a side is missing, find it from another triangle first (usually a diagonal of the base).
5. Solve with Pythagoras or SOH CAH TOA (or the sine and cosine rules if the triangle has no right angle).

## The angle between a line and a plane

This is the part of E6.6 the syllabus names directly. The angle between a line and a plane is the angle between the line and its **projection** on the plane: the "shadow" of the line if a light shone straight down onto the plane.

To find it:

```
1. From the top end of the line, drop a perpendicular to the plane.
   Call the foot of the perpendicular F.
2. Join F to the point where the line meets the plane. This is the projection.
3. The angle you want is between the line and the projection.
   The triangle (line, projection, perpendicular) has its right angle at F.
```

The most common error is to measure the angle to an edge of the base instead of to the projection.

## Labelling a cuboid

In these examples a cuboid has base ABCD and top EFGH, with E directly above A, F above B, G above C and H above D. So AE, BF, CG and DH are the vertical edges.

### Worked example 1: a space diagonal and its angle with the base (calculator)

A cuboid has AB = 9 cm, BC = 6 cm and AE = 4 cm. Find (a) the length AG, (b) the angle between AG and the base ABCD.

```
(a) Triangle ABC (in the base, right angle at B):
      AC² = 9² + 6² = 117,  AC = √117
    Triangle ACG (vertical, right angle at C, because CG is vertical):
      AG² = AC² + CG² = 117 + 16 = 133
      AG = √133 = 11.532... → 11.5 cm

(b) The projection of AG on the base is AC (G is directly above C).
    In triangle ACG:  tan θ = CG / AC = 4 / √117
    θ = 20.294...° → 20.3°
```

Keep √117 exact in the calculator. Rounding AC to 10.8 first still gives 20.3° here, but it can change the last figure in other questions.

The shortcut AG² = 9² + 6² + 4² gives the same answer and is fine for a length, but you still need AC for the angle.

### Worked example 2: a rectangle-based pyramid (calculator)

A pyramid VABCD has a horizontal rectangular base ABCD with AB = 8 cm and BC = 6 cm. The vertex V is 12 cm vertically above M, the centre of the base. Find (a) the length VA, (b) the angle between VA and the base, (c) the angle between the base and the line from V to the midpoint N of AB.

```
(a) Base diagonal AC = √(8² + 6²) = 10 cm, so AM = 5 cm.
    Triangle VMA (right angle at M):
      VA = √(5² + 12²) = √169 = 13 cm

(b) The projection of VA on the base is MA.
      tan θ = VM / MA = 12 / 5
      θ = 67.380...° → 67.4°

(c) N is the midpoint of AB. MN is parallel to BC and half its length:
      MN = 3 cm. The projection of VN on the base is MN.
      tan φ = 12 / 3 = 4
      φ = 75.963...° → 76.0°
```

Notice that the angles in (b) and (c) differ, because the projections MA and MN are different lengths. Always identify the specific projection.

### Worked example 3: a non-calculator cube

A cube has edges of 2 cm. Find the exact length of a space diagonal and the exact value of the tangent of the angle it makes with the base.

```
Base diagonal = √(2² + 2²) = √8 = 2√2 cm
Space diagonal = √(8 + 2²) = √12 = 2√3 cm
tan θ = 2 / (2√2) = 1/√2   (or √2/2)
```

On Paper 2, leave answers in simplified surd form as asked; surds are E1.18.

### Worked example 4: a cone (calculator)

A cone has base radius 6 cm and vertical height 8 cm. Find the slant height and the angle between a slant line and the base.

```
Vertical cross-section through the apex: a right-angled triangle
with base 6 (radius) and height 8.
Slant height = √(6² + 8²) = 10 cm
tan θ = 8 / 6,  θ = 53.130...° → 53.1°
```

Every slant line on a cone makes the same angle with the base, because the cone is symmetric about its axis.

### Worked example 5: angles of elevation in 3D (calculator)

A vertical mast PT stands with its foot P on horizontal ground and is 25 m tall. Point A is 40 m due south of P and point B is 30 m due east of P. Find (a) the distance AB, (b) the angle of elevation of T from B.

```
(a) Angle APB = 90° (south and east are perpendicular).
    AB = √(40² + 30²) = 50 m

(b) Triangle BPT is vertical with the right angle at P.
    tan θ = 25 / 30,  θ = 39.805...° → 39.8°
```

The ground triangle APB and the vertical triangles APT and BPT are three separate flat triangles; drawing each one separately prevents mixing up sides.

### Worked example 6: a wedge (calculator)

A wedge has a horizontal rectangular base ABCD with AB = 12 cm and BC = 5 cm. Its vertical rectangular face BCEF stands on BC, with E 3 cm above C and F 3 cm above B. Find the angle between AE and the base.

```
E is directly above C, so the projection of AE on the base is AC.
AC = √(12² + 5²) = 13 cm
tan θ = CE / AC = 3 / 13
θ = 12.994...° → 13.0°
```

Writing 13.0°, not 13°, shows the answer is correct to 1 decimal place.

## Common mistakes

- Measuring the angle to an edge (such as AB) instead of to the projection (such as AC).
- Using the full base diagonal when the triangle needs half of it, as in a pyramid.
- Drawing the triangle in 3D perspective and then misreading which angle is 90°. Redraw it flat.
- Rounding a base diagonal before using it as a side of the next triangle.
- Assuming a sloping edge such as VA is the height of a pyramid.
- Mixing up which of two angles the question wants when two lines start from the same point.

## Exam technique

- **Calculate** or **find**: show each triangle's equation, such as AC² = 9² + 6², so method marks are available at every stage.
- **Show that**: give the value to more figures than the target, for instance AG = 11.53… for "show that AG = 11.5 cm correct to 3 significant figures".
- Write the name of the angle you are finding, such as angle GAC, before the calculation. It tells the examiner you have identified the projection.
- Give lengths to 3 significant figures and angles to 1 decimal place unless told otherwise.

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Subject content, Topic 6 Trigonometry, E6.6 Pythagoras’ theorem and trigonometry in 3D (Extended subject content), with C6.6 marked "Extended content only". See also the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).
