---
title: "Cambridge IGCSE Mathematics (0580): Right-angled triangles"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Right-angled triangles"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 6.2
syllabusTopics:
  - qualification: "igcse"
    topic: "trigonometry-cambridge-igcse-maths"
    subtopic: "right-angled-triangles-cambridge-igcse-maths"
description: "Study guide to Cambridge IGCSE Maths 0580 subtopic 6.2: sine, cosine and tangent in right-angled triangles, bearings, and Extended elevation and depression."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This study guide teaches subtopic **6.2 Right-angled triangles** from Topic 6 Trigonometry of the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. Core (C6.2) has two statements: the three trigonometric ratios, and solving two-dimensional problems with them and Pythagoras' theorem. Extended (E6.2) adds two more: the perpendicular distance as the shortest distance to a line, and angles of elevation and depression. Most questions on this subtopic need a calculator, so they usually appear on Papers 3 and 4.

Consolidate with the [right-angled triangles revision notes](/resources/cambridge-igcse-mathematics-0580-right-angled-triangles-revision-notes/) and test yourself with the [right-angled triangles practice questions](/resources/cambridge-igcse-mathematics-0580-right-angled-triangles-practice/).

## What this subtopic covers

| Statement | What you must do | Tier |
|---|---|---|
| 6.2.1 | Know and use the sine, cosine and tangent ratios for acute angles in calculations involving sides and angles of a right-angled triangle | Core and Extended |
| 6.2.2 | Solve problems in two dimensions using Pythagoras' theorem and trigonometry (knowledge of bearings may be required) | Core and Extended |
| 6.2.3 | Know that the perpendicular distance from a point to a line is the shortest distance to the line | Extended only |
| 6.2.4 | Carry out calculations involving angles of elevation and depression | Extended only |

The notes say angles are given in degrees and answers in degrees should be **correct to one decimal place**.

## Labelling the sides

Every ratio depends on which angle you are using, called θ here.

- **Hypotenuse (H):** opposite the right angle; always the longest side.
- **Opposite (O):** opposite θ.
- **Adjacent (A):** next to θ, but not the hypotenuse.

Label the sides **from the angle you are using**. If the question moves to the other acute angle, the opposite and adjacent sides swap.

## The three ratios

```
sin θ = O / H        cos θ = A / H        tan θ = O / A
```

SOH CAH TOA is the usual memory aid. To choose a ratio, look at which two sides are involved: the one you know and the one you want. The ratio that uses both of them is the one to use.

## Finding a side

Write the ratio as an equation and rearrange.

### Worked example 1: unknown on top

In triangle PQR, angle Q = 90°, PR = 14 cm and angle P = 32°. Find QR.

```
QR is opposite angle P; PR is the hypotenuse -> sine
sin 32° = QR / 14
QR = 14 × sin 32° = 7.418... = 7.42 cm  (3 s.f.)
```

### Worked example 2: unknown on the bottom

In triangle ABC, angle B = 90°, AB = 8.5 cm and angle A = 41°. Find AC.

```
AB is adjacent to angle A; AC is the hypotenuse -> cosine
cos 41° = 8.5 / AC
AC = 8.5 / cos 41° = 11.26... = 11.3 cm  (3 s.f.)
```

When the unknown is on the bottom, the answer is a **division**. Check it is sensible: the hypotenuse must be longer than 8.5 cm.

## Finding an angle

Find the ratio as a number, then use the inverse function (sin⁻¹, cos⁻¹ or tan⁻¹).

### Worked example 3

A right-angled triangle has sides 5.6 cm opposite angle x and 9.1 cm adjacent to it. Find x.

```
tan x = 5.6 / 9.1
x = tan⁻¹(5.6 / 9.1) = 31.607...° = 31.6°  (1 d.p.)
```

Make sure the calculator is in degree mode. A quick test: sin 30° should give 0.5.

## Two-dimensional problems

Larger problems combine two triangles, or Pythagoras with a ratio. Find what you can in the first triangle, keep it unrounded, and carry it into the second.

### Worked example 4: two triangles sharing a side

In triangle ABC, angle ABC = 90°, AB = 7 cm and angle ACB = 35°. D lies on BC with angle ADB = 60°. Find CD.

```
In triangle ABC:  tan 35° = 7 / BC,  BC = 7 / tan 35° = 9.997...
In triangle ABD:  tan 60° = 7 / BD,  BD = 7 / tan 60° = 4.041...
CD = BC − BD = 5.955... = 5.96 cm  (3 s.f.)
```

Rounding BC and BD to 3 s.f. first gives 10.0 − 4.04 = 5.96 here, but in other questions early rounding can change the last figure.

### Bearings

A bearing is measured **clockwise from north** and written with three figures, such as 045° or 125°. To work with one, draw a north line at the starting point and mark the angle; the right-angled triangle uses north–south and east–west lines.

### Worked example 5: bearings

(a) A ship sails 18 km on a bearing of 125°. How far east and how far south of its start is it?
(b) A walker goes 12 km due north from A to B, then 7 km due east to C. Find the bearing of C from A.

```
(a) the angle between the course and the south line is 180° − 125° = 55°
    east  = 18 × sin 55° = 14.7 km  (3 s.f.)
    south = 18 × cos 55° = 10.3 km  (3 s.f.)

(b) angle at A between north and AC: tan θ = 7 / 12
    θ = 30.256...° = 30.3°
    bearing of C from A = 030.3°
```

## Extended: the shortest distance to a line

The shortest distance from a point to a line is the **perpendicular** distance. Any other route from the point to the line is the hypotenuse of a right-angled triangle, so it is longer.

### Worked example 6 (Extended)

A tree T is 30 m from a point A on a straight path. The line AT makes an angle of 24° with the path. Find the shortest distance from the tree to the path.

```
drop a perpendicular from T to the path, meeting it at N
TN is opposite the 24° angle; AT = 30 m is the hypotenuse
TN = 30 × sin 24° = 12.2 m  (3 s.f.)
```

## Extended: angles of elevation and depression

- An **angle of elevation** is measured **up** from the horizontal to the line of sight.
- An **angle of depression** is measured **down** from the horizontal to the line of sight.

Both are measured from the horizontal, never from the vertical. The angle of depression from A to B equals the angle of elevation from B to A, because they are alternate angles between parallel horizontal lines.

### Worked example 7 (Extended)

(a) From a point 40 m from the foot of a tower, on level ground, the angle of elevation of the top is 28°. Find the height of the tower.
(b) From the top of a vertical cliff 65 m high, the angle of depression of a boat is 17°. Find the distance of the boat from the foot of the cliff.

```
(a) tan 28° = h / 40
    h = 40 × tan 28° = 21.3 m  (3 s.f.)

(b) the angle of elevation of the cliff top from the boat is also 17°
    tan 17° = 65 / d
    d = 65 / tan 17° = 213 m  (3 s.f.)
```

In (b), putting the 17° at the top of the cliff, between the cliff and the line of sight, is the most common error. That angle is 90° − 17° = 73°.

## Exam technique

- **"Calculate"**: write the ratio equation first, then the rearranged form, then the value.
- **"Show that angle x = 31.6°"**: give the angle to at least 2 decimal places before rounding to the value shown.
- **Bearings**: always three figures; draw the north line at the point the bearing is measured **from**.
- Lengths to 3 significant figures; angles to 1 decimal place.

## Common mistakes

- Labelling opposite and adjacent from the wrong angle.
- Writing sin 32 × 14 when the unknown is on the bottom, so a division was needed.
- Calculator in radians or gradians.
- Using the angle of depression inside the triangle at the top of a cliff.
- Rounding a length in the first triangle and carrying the rounded value forward.
- Writing a bearing as 30.3° instead of 030.3°, or measuring it anticlockwise.

## Frequently asked questions

**Are angles of elevation and depression on the 0580 Core paper?**
They are named only in the Extended statements (E6.2), together with the perpendicular distance as the shortest distance to a line. Core statements cover the three ratios and two-dimensional problems, including bearings.

**How accurate should a trigonometry angle be?**
The syllabus notes say answers in degrees should be correct to one decimal place, unless a question says otherwise.

## More on this topic

- Consolidate with the [right-angled triangles revision notes](/resources/cambridge-igcse-mathematics-0580-right-angled-triangles-revision-notes/).
- Practise with the [right-angled triangles practice questions](/resources/cambridge-igcse-mathematics-0580-right-angled-triangles-practice/).
- Revise the theorem used alongside the ratios in the [Pythagoras' theorem study guide](/resources/igcse-mathematics-0580-pythagoras-theorem/).
- Extended candidates: learn the special angles in the [exact trigonometric values study guide](/resources/cambridge-igcse-mathematics-0580-exact-trigonometric-values/).

## Official syllabus

Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027, Cambridge International. Topic 6 Trigonometry, subtopics C6.2 and E6.2 Right-angled triangles.
