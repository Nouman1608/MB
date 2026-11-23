---
title: "Cambridge IGCSE Mathematics (0580): Similarity"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 4 – Geometry"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 4.4
syllabusTopics:
  - qualification: "igcse"
    topic: "geometry-cambridge-igcse-maths"
    subtopic: "similarity-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic 4.4 Similarity: lengths in nested and crossed triangles, proving similarity with reasons, and area and volume scale factors."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **4.4 Similarity** in the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. The tiers differ:

| Tier | Statements |
|---|---|
| Core (C4.4) | Calculate lengths of similar shapes. |
| Extended (E4.4) | 1 Calculate lengths of similar shapes. 2 Use the relationships between lengths and areas of similar shapes and lengths, surface areas and volumes of similar solids. 3 Solve problems and give simple explanations involving similarity. |

The Extended notes add that this includes use of scale factor, for example volume of A ÷ volume of B = (length of A ÷ length of B)³, and showing that two triangles are similar using geometric reasons. The [Geometry revision notes](/resources/igcse-mathematics-geometry-revision-notes/) state the k, k² and k³ rules with one area example. This page teaches the full method for lengths in the triangle arrangements examiners use, how to write a similarity argument, and how to move between length, area and volume in both directions. Afterwards, use the [similarity revision notes](/resources/cambridge-igcse-mathematics-0580-similarity-revision-notes/) and the [similarity practice questions](/resources/cambridge-igcse-mathematics-0580-similarity-practice/).

## What similar means

Two shapes are **similar** when one is an enlargement of the other: corresponding angles are equal and every length is multiplied by the same **scale factor**, k.

```
k = length on the new shape / corresponding length on the original
```

If k > 1 the shape gets bigger; if 0 < k < 1 it gets smaller. To go back the other way, divide by k.

**Corresponding** lengths are in the same position in each shape. In triangles, corresponding sides are **opposite equal angles**. Matching sides by size can go wrong when the shapes are turned or flipped, so match them by angles.

## Core: finding lengths

### Worked example 1: a simple enlargement

A photograph 15 cm wide and 10 cm high is enlarged to a width of 24 cm. Find the new height.

```
k = 24 / 15 = 1.6
New height = 10 x 1.6 = 16 cm
```

### Worked example 2: one triangle inside another

In triangle ABC, D is on AB and E is on AC, with DE parallel to BC. Triangles ADE and ABC are similar. AD = 4 cm, AB = 10 cm, DE = 6 cm and AE = 5 cm. Find BC and EC.

```
Corresponding sides: AD with AB, DE with BC, AE with AC
k = AB / AD = 10 / 4 = 2.5
BC = 6 x 2.5 = 15 cm
AC = 5 x 2.5 = 12.5 cm,  so EC = 12.5 - 5 = 7.5 cm
```

The scale factor comes from **whole** sides, AB and AD. Using DB (6 cm) instead of AB is the classic error: it compares a part with a part. Draw the two triangles separately if it helps.

### Worked example 3: crossed lines (an "hourglass")

AE and BD are straight lines that cross at C. AB is parallel to DE. AC = 6 cm, CE = 9 cm, AB = 8 cm and BC = 5 cm. Triangles ABC and EDC are similar. Find DE and CD.

```
A corresponds to E, B corresponds to D (alternate angles), C to C.
k = CE / AC = 9 / 6 = 1.5
DE = AB x 1.5 = 8 x 1.5 = 12 cm
CD = BC x 1.5 = 5 x 1.5 = 7.5 cm
```

The second triangle is upside down compared with the first, which is why matching by angles matters.

## Extended: showing that triangles are similar

Two triangles are similar if their angles are equal. Since the angles of a triangle add to 180°, showing **two** pairs of equal angles is enough. Each pair needs a geometric reason from the syllabus angle facts.

### Worked example 4: writing the argument

For the hourglass in worked example 3, show that triangles ABC and EDC are similar.

```
Angle ACB = angle ECD     (vertically opposite angles are equal)
Angle BAC = angle DEC     (alternate angles, AB parallel to DE)
The third angles are then equal (angle sum of a triangle = 180 degrees).
So triangles ABC and EDC are similar.
```

Other reasons that often appear: **corresponding angles** (parallel lines), a **common angle** shared by both triangles, and circle theorems such as **angles in the same segment are equal**.

## Extended: areas and volumes

If lengths are multiplied by k, then:

| Quantity | Scale factor | Why |
|---|---|---|
| Lengths (and perimeters) | k | definition |
| Areas (and surface areas) | k² | area is length × length |
| Volumes (and capacities) | k³ | volume is length × length × length |

Always find **k from lengths** first, then square or cube it. If you are given an area ratio, square-root it to get k; if given a volume ratio, cube-root it.

### Worked example 5: from area to length

Two similar triangles have areas 20 cm² and 45 cm². The shortest side of the smaller triangle is 6 cm. Find the shortest side of the larger triangle.

```
Area factor = 45 / 20 = 9/4
k = sqrt(9/4) = 3/2
Shortest side = 6 x 3/2 = 9 cm
```

### Worked example 6: from length to volume and surface area

Two similar bottles have heights 12 cm and 18 cm. The smaller bottle holds 320 ml and its label has area 50 cm². The labels are similar too. Find the capacity of the larger bottle and the area of its label.

```
k = 18 / 12 = 1.5
Capacity: 320 x 1.5^3 = 320 x 3.375 = 1080 ml
Label:    50 x 1.5^2 = 50 x 2.25  = 112.5 cm^2
```

### Worked example 7: from volume to surface area

Two similar solids have volumes 54 cm³ and 250 cm³. The surface area of the smaller solid is 36 cm². Find the surface area of the larger solid.

```
Volume factor = 250 / 54 = 125/27
k = cube root of (125/27) = 5/3
Area factor = (5/3)^2 = 25/9
Surface area = 36 x 25/9 = 100 cm^2
```

Going from volume to area always passes through k: cube root, then square.

### Worked example 8: a frustum

A solid cone has height 12 cm and volume 810 cm³. The top 4 cm is cut off parallel to the base, leaving a frustum. Find the volume of the frustum.

```
The small cone cut off is similar to the whole cone.
k = 4 / 12 = 1/3
Small cone volume = 810 x (1/3)^3 = 810 / 27 = 30 cm^3
Frustum volume = 810 - 30 = 780 cm^3
```

## Common mistakes

- **Adding instead of multiplying**: a side that grows from 4 to 10 has k = 2.5, not "add 6".
- **Using part of a side** (DB instead of AB) in nested triangles.
- **Matching sides by length or position on the page** instead of by equal angles.
- **Using k for areas or volumes**, or k² for volumes.
- **Dividing when you should multiply**: check whether the shape is getting bigger or smaller.
- **Square-rooting a volume ratio** instead of cube-rooting it.
- **Rounding k too early**: keep exact fractions where possible.

## Exam technique

- **Calculate** a length: write k as a fraction or decimal, then show the multiplication.
- **Show that** triangles are similar (Extended): two pairs of equal angles, each with a named reason.
- **Explain**: say which lengths correspond and that the ratios are equal.
- On Paper 2 use exact fractions such as 3/2 and 25/9; on Paper 4 keep full calculator values until the final 3 significant figures.

## Next steps

- Recap with the [similarity revision notes](/resources/cambridge-igcse-mathematics-0580-similarity-revision-notes/) and practise with the [similarity practice questions](/resources/cambridge-igcse-mathematics-0580-similarity-practice/).
- Similar shapes link to scale factors in the [scale drawings study guide](/resources/cambridge-igcse-mathematics-0580-scale-drawings/) and to enlargement in the [Transformations and vectors study guide](/resources/igcse-mathematics-transformations-and-vectors/).
- Other resources for syllabus 0580 are on the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Topic 4 Geometry, C4.4 Similarity ("Calculate lengths of similar shapes") and E4.4 Similarity (also the relationships between lengths, areas and volumes, and solving problems and giving simple explanations involving similarity).
