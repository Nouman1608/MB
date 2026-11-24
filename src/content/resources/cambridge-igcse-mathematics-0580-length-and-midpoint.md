---
title: "Cambridge IGCSE Mathematics (0580): Length and midpoint"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 3 – Coordinate geometry"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 3.4
syllabusTopics:
  - qualification: "igcse"
    topic: "coordinate-geometry-cambridge-igcse-maths"
    subtopic: "length-and-midpoint-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic E3.4 (Extended only): length of a line segment, midpoints, missing endpoints, unknown coordinates and exact surd answers."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **3.4 Length and midpoint** in the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. It is **Extended only**: the Core syllabus lists C3.4 as "Extended content only". The Extended statement has two parts:

1. Calculate the length of a line segment.
2. Find the coordinates of the midpoint of a line segment.

It is examined on Paper 2 (non-calculator) and Paper 4 (calculator). Neither formula is on the formula list printed in the paper, so you must know both. The [Coordinate geometry revision notes](/resources/igcse-mathematics-coordinate-geometry-revision-notes/) state the two formulas with one example each; this page shows where they come from and how exam questions use them in reverse, with unknowns and inside longer problems. Afterwards, use the [length and midpoint revision notes](/resources/cambridge-igcse-mathematics-0580-length-and-midpoint-revision-notes/) and the [length and midpoint practice questions](/resources/cambridge-igcse-mathematics-0580-length-and-midpoint-practice/).

## Length: Pythagoras on a grid

Any sloping segment AB is the hypotenuse of a right-angled triangle whose other two sides are horizontal and vertical. Their lengths are the differences of the coordinates, so Pythagoras' theorem gives:

```
AB = sqrt( (x2 - x1)^2 + (y2 - y1)^2 )
```

The order of subtraction does not matter here, because squaring removes any negative sign: (–6)² = 36, just as 6² = 36. That is one less thing to worry about than with gradient.

### Worked example 1 (non-calculator): an exact answer

Find the length of the line segment joining P(–1, 3) and Q(4, –2). Give your answer as a surd in its simplest form.

```
Horizontal change: 4 - (-1) = 5
Vertical change:   -2 - 3   = -5
PQ^2 = 5^2 + (-5)^2 = 25 + 25 = 50
PQ   = sqrt(50) = sqrt(25 x 2) = 5 sqrt(2)
```

On Paper 2 an exact answer such as 5√2 is expected when the question asks for one; simplifying surds is part of Extended Number (E1.18).

### Worked example 2 (calculator): decimal coordinates

Find the length of CD, where C is (2.5, –1.2) and D is (–3.1, 4.6).

```
Horizontal change: -3.1 - 2.5 = -5.6
Vertical change:    4.6 - (-1.2) = 5.8
CD^2 = 5.6^2 + 5.8^2 = 31.36 + 33.64 = 65
CD   = sqrt(65) = 8.062...  = 8.06 (3 s.f.)
```

Type the negative change in brackets, (–5.6)², or square the positive value. Typing –5.6² gives –31.36 on many calculators, because the square is done before the minus sign.

## Midpoint: the average of the ends

The midpoint is halfway along in both directions, so each of its coordinates is the mean of the corresponding end coordinates:

```
M = ( (x1 + x2)/2 , (y1 + y2)/2 )
```

Notice the **plus** signs. Length uses differences; midpoint uses sums.

### Worked example 3: negative coordinates

Find the midpoint of the segment joining (–7, 2) and (3, –8).

```
x: (-7 + 3)/2 = -4/2 = -2
y: (2 + (-8))/2 = -6/2 = -3
M = (-2, -3)
```

A quick sense check: –2 is between –7 and 3, and –3 is between 2 and –8.

### Worked example 4: finding the other end

M(4, –1) is the midpoint of AB. A is (–2, 5). Find the coordinates of B.

```
Step from A to M: across 4 - (-2) = 6,  up -1 - 5 = -6
B is the same step again from M:
B = (4 + 6, -1 + (-6)) = (10, -7)
```

Or use the formula: (–2 + x)/2 = 4 gives x = 10, and (5 + y)/2 = –1 gives y = –7. A common error is to take the midpoint of A and M, which finds a point a quarter of the way along, not the far end.

## Using length with an unknown

### Worked example 5: two possible answers

The distance between (1, k) and (7, 2) is 10 units. Find the possible values of k.

```
(7 - 1)^2 + (2 - k)^2 = 10^2
36 + (2 - k)^2 = 100
(2 - k)^2 = 64
2 - k = 8   or   2 - k = -8
k = -6      or   k = 10
```

There are two answers: one point above (7, 2) and one below. Taking only the positive square root loses half the marks.

## Length and midpoint inside longer problems

### Worked example 6: classifying a triangle

A(1, 1), B(5, 4) and C(–2, 5) are the vertices of a triangle. Show that the triangle is isosceles and right-angled.

```
AB^2 = 4^2 + 3^2 = 25,          AB = 5
AC^2 = (-3)^2 + 4^2 = 25,       AC = 5
BC^2 = (-7)^2 + 1^2 = 50,       BC = sqrt(50)

AB = AC, so the triangle is isosceles.
AB^2 + AC^2 = 25 + 25 = 50 = BC^2,
so by the converse of Pythagoras the angle at A is 90 degrees.
```

Working with the squared lengths keeps the arithmetic exact, which matters on Paper 2.

### Worked example 7: a circle from a diameter

The points (–4, 7) and (6, –3) are the ends of a diameter of a circle. Find the centre and the radius.

```
Centre = midpoint = ((-4 + 6)/2, (7 + (-3))/2) = (1, 2)
Diameter^2 = 10^2 + (-10)^2 = 200
Diameter = sqrt(200) = 10 sqrt(2)
Radius = 5 sqrt(2)  (= 7.07 to 3 s.f.)
```

The midpoint of a diameter is the centre; this links coordinate work to circle vocabulary in Topic 4. Midpoints also give the centre of a rectangle or parallelogram (where the diagonals cross) and are the first step in finding a perpendicular bisector (E3.7).

## Common mistakes

- **Subtracting for a midpoint** or **adding for a length**.
- **Forgetting the square root**, so the answer is the squared length (50 instead of √50).
- **Forgetting to halve** in the midpoint: (–4, –6) instead of (–2, –3).
- **Squaring a negative on the calculator without brackets.**
- **Taking only the positive root** when an unknown coordinate can lie on either side.
- **Rounding too early**: keep √65 or the full display until the last step.
- **Not simplifying a surd** on a non-calculator paper: √50 should become 5√2 when the simplest form is asked for.

## Exam technique

- **Calculate the length**: write the substituted formula, then the sum of squares, then the root. Each stage can earn method credit.
- **Find the coordinates of the midpoint**: give an ordered pair. Fractions such as (1.5, –2.5) are fine.
- **Show that** a triangle is isosceles or right-angled: give every length (or squared length) and state the conclusion in words.
- Give non-exact answers on Paper 4 to 3 significant figures, and exact surds on Paper 2 when asked.
- A rough sketch with the points placed shows whether the midpoint and length are sensible.

## More on this topic

- Recap with the [length and midpoint revision notes](/resources/cambridge-igcse-mathematics-0580-length-and-midpoint-revision-notes/) and practise with the [length and midpoint practice questions](/resources/cambridge-igcse-mathematics-0580-length-and-midpoint-practice/).
- Combine midpoints with gradients in the [perpendicular lines study guide](/resources/cambridge-igcse-mathematics-0580-perpendicular-lines/).
- Other resources for syllabus 0580 are on the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Topic 3 Coordinate geometry, E3.4 Length and midpoint (Extended subject content), with C3.4 marked "Extended content only".
