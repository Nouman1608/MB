---
title: "OxfordAQA International AS and A-level Mathematics: Scalar product and perpendicular distance (9660)"
seoTitle: "OxfordAQA A-level Maths Scalar Product Guide (9660)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "The scalar product, angles between lines and perpendicular distance"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 200
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-vectors-oxfordaqa-alevel-maths"
description: "Study guide to the scalar product, the angle between two lines and the perpendicular distance from a point to a line, for OxfordAQA 9660 Unit P2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide is aligned to the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. It covers the second half of section P2.10 (Vectors): the scalar product and its use for the angle between two lines, plus the foot of the perpendicular from a point to a line and the perpendicular distance. The specification places this in International A-level Unit P2 (Pure Maths). It is not examined at International AS. The specification says calculators may be used in Unit P2.

Revise the other pages for this unit as you go: the [revision notes](/resources/oxfordaqa-a-level-mathematics-the-scalar-product-angles-between-lines-and-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-mathematics-the-scalar-product-angles-between-lines-and-practice/). The course hub is [OxfordAQA A-level Mathematics](/boards/oxfordaqa/a-level/mathematics/) and the printable list is the [checklist](/checklists/oxfordaqa/a-level/mathematics/). To find weak spots first, try the [free diagnostics](/diagnostics/).

You need to write a line as r = a + tb. Vector equations of lines, intersections and skew lines are met elsewhere in section P2.10, so this guide only uses them.

## What this unit covers

| Spec content (P2.10) | You must be able to | Stage |
|---|---|---|
| The scalar product | Evaluate (x, y, z).(a, b, c) = xa + yb + zc and use |u||v|cos θ | A-level, Unit P2 |
| Angle between two lines | Use direction vectors and the scalar product | A-level, Unit P2 |
| Foot of the perpendicular | Find its coordinates from a point to a line | A-level, Unit P2 |
| Perpendicular distance | Find the distance from a point to a line | A-level, Unit P2 |

Column vectors will be used in questions, and you may use i, j, k notation if you prefer. This page writes a column vector across the page as (x, y, z) to save space.

## The scalar product

For u = (x, y, z) and v = (a, b, c), the scalar product is a single number, not a vector:

```
u.v = xa + yb + zc
u.v = |u||v| cos θ
```

Here θ is the angle between u and v when both vectors point away from the same point, so 0° ≤ θ ≤ 180°. In two dimensions, drop the third term.

Useful consequences:

- u.v = v.u, and u.(v + w) = u.v + u.w.
- u.u = |u|², so |u| = √(u.u).
- If u.v = 0 and neither vector is zero, then cos θ = 0 and the vectors are perpendicular.
- u.v > 0 means θ is acute. u.v < 0 means θ is obtuse.
- If u and v are parallel, u.v = |u||v| (same direction) or −|u||v| (opposite directions).

Rearranging the second form gives the angle:

```
cos θ = (u.v) / (|u||v|)
```

### Worked example 1: evaluating and finding an angle

Find the angle between u = (2, −1, 3) and v = (4, 5, −2).

```
u.v = (2)(4) + (−1)(5) + (3)(−2) = 8 − 5 − 6 = −3
|u| = √(4 + 1 + 9) = √14
|v| = √(16 + 25 + 4) = √45 = 3√5
cos θ = −3 / (√14 × 3√5) = −1/√70
θ = 96.9° (1 d.p.)
```

The scalar product is negative, so an obtuse answer is what you should expect.

### Worked example 2: a perpendicular condition

Find k so that (k, 2, −1) is perpendicular to (3, k, 4).

```
3k + 2k − 4 = 0
5k = 4
k = 4/5
```

Perpendicular means the scalar product is zero. You do not need the magnitudes.

## The angle between two lines

A line r = a + tb runs in the direction of b. The angle between two lines is therefore the angle between their direction vectors. The position vectors a play no part.

Method:

1. Read off the direction vectors d₁ and d₂.
2. Work out d₁.d₂, |d₁| and |d₂|.
3. Find cos θ = (d₁.d₂) / (|d₁||d₂|).
4. Decide which angle is wanted.

Two lines meet at two supplementary angles, such as 48.2° and 131.8°. The usual convention is to quote the acute one. If the scalar product comes out negative, take the supplement (180° − θ). Read the question: if it asks for the angle between two given vectors, give that angle even when it is obtuse.

The same method works for skew lines, which never meet. The angle is defined by the directions alone, so you do not need to check whether the lines intersect first. Parallel lines give an angle of 0° (and perpendicular lines 90°).

### Worked example 3: lines in three dimensions

```
l₁: r = (1, 0, 2) + s(2, 1, −2)
l₂: r = (3, −1, 0) + t(1, −4, 8)
```

Find the acute angle between l₁ and l₂.

```
d₁.d₂ = (2)(1) + (1)(−4) + (−2)(8) = 2 − 4 − 16 = −18
|d₁| = √(4 + 1 + 4) = 3
|d₂| = √(1 + 16 + 64) = 9
cos θ = −18 / (3 × 9) = −2/3
θ = 131.8° between the vectors
```

The angle between the vectors is obtuse, so the acute angle between the lines is 180° − 131.8° = **48.2°**.

A shortcut is to use the modulus: cos θ = |d₁.d₂| / (|d₁||d₂|) = 2/3, which gives 48.2° directly.

### Lines in two dimensions

A line y = mx + c has direction vector (1, m). Use that in the same formula. If a line is given as ax + by = c, its direction vector is (b, −a).

### Worked example 3b: lines in two dimensions

Find the acute angle between 2x + y = 5 and x − 3y = 4.

```
directions: (1, −2) and (3, 1)
d₁.d₂ = 3 − 2 = 1
|d₁| = √5, |d₂| = √10
cos θ = 1 / √50, so θ = 81.9°
```

The scalar product is positive, so this angle is already acute and **81.9°** is the answer.

## The foot of the perpendicular

Let P be a point and l a line r = a + td. The **foot of the perpendicular** is the point X on l that is closest to P. The line segment PX is perpendicular to l.

Method:

1. Write the general point on the line: X = a + td, with coordinates in terms of t.
2. Write the vector PX = X − P, in terms of t.
3. Set PX.d = 0, because PX is perpendicular to the direction of l.
4. Solve the linear equation for t.
5. Substitute t back into X to get the coordinates.

The condition PX.d = 0 gives a linear equation in t, because t appears only once in each component of PX and d is constant.

### Worked example 4: foot of the perpendicular

Find the foot X of the perpendicular from P(7, 7, −4) to the line l: r = (1, 2, 0) + t(2, 2, 1).

```
X = (1 + 2t, 2 + 2t, t)
PX = X − P = (2t − 6, 2t − 5, t + 4)
PX.d = 2(2t − 6) + 2(2t − 5) + 1(t + 4) = 9t − 18
9t − 18 = 0, so t = 2
X = (1 + 4, 2 + 4, 2) = (5, 6, 2)
```

The foot of the perpendicular is **(5, 6, 2)**.

Check: PX = (−2, −1, 6) and d = (2, 2, 1) give −4 − 2 + 6 = 0.

## Perpendicular distance from a point to a line

The perpendicular distance from P to l is the length of PX, where X is the foot of the perpendicular. Once you have X, take the magnitude of PX.

### Worked example 5: the distance

Continue example 4. PX = (−2, −1, 6).

```
|PX| = √(4 + 1 + 36) = √41 ≈ 6.40
```

The perpendicular distance is **√41**, or 6.40 to 3 significant figures.

### A check using Pythagoras

Take A = (1, 2, 0) on the line, so AP = (6, 5, −4) and |AP|² = 77. The length of the part of AP along the line is AP.d / |d| = 18/3 = 6. By Pythagoras, the distance squared is 77 − 36 = 41. This gives the distance without finding the foot, but you need the foot if the question asks for its coordinates.

In a triangle ABP with A on the line, the distance is also |AP| sin θ, where θ is the angle between AP and the line. You can find θ with the scalar product.

## Putting it together: a triangle

For triangle ABC, the angle at B is the angle between BA and BC. Use BA.BC = |BA||BC| cos B. To find the area, find the foot D of the perpendicular from A to BC, then use area = ½ × BC × AD. The practice set has a question of this type.

## Common errors

- Writing the scalar product as a vector. The answer is a number.
- Putting position vectors into the angle formula when only the directions of the lines matter.
- Forgetting to divide by |u||v|. The scalar product alone is not cos θ.
- Quoting an obtuse angle for the angle between two lines when you meant the acute one, or the reverse when a question asks for the angle between vectors.
- Writing PX.d = 0 with PX = P − X in one place and X − P in another. Either sign works, but be consistent.
- Stopping at t. The foot is a point, so substitute back.
- Reporting |AP| as the distance. It is the distance to a point on the line, not the shortest one.
- Rounding too early. Keep exact surds until the last line.

## Next steps

Work through the [practice questions](/resources/oxfordaqa-a-level-mathematics-the-scalar-product-angles-between-lines-and-practice/), then condense your notes with the [revision notes](/resources/oxfordaqa-a-level-mathematics-the-scalar-product-angles-between-lines-and-revision-notes/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section P2.10 (Vectors), published by OxfordAQA. For International AS exams from May/June 2018 and International A-level exams from May/June 2019.
