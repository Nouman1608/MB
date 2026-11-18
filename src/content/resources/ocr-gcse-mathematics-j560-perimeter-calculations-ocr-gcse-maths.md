---
title: "OCR GCSE Mathematics (J560): Perimeter calculations"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Topic 10 – Mensuration"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 10.2
syllabusTopics:
  - qualification: "gcse"
    topic: "mensuration-ocr-gcse-maths"
    subtopic: "perimeter-calculations-ocr-gcse-maths"
description: "OCR GCSE Maths J560 section 10.02 in depth: missing sides in rectilinear shapes, circumference and arc length forwards and backwards, and composite perimeters."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 10.02, Perimeter calculations, of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), for first assessment in 2017. All three statements sit in the first two columns of the specification, so they are content for **both tiers**. Arc length is in the column headed "Foundation tier learners should also be able to", so Foundation and Higher candidates both need it.

The [units, compound measures, maps, bearings and perimeter guide](/resources/ocr-gcse-mathematics-units-compound-measures-maps-bearings-perimeter/) introduces 10.02 alongside 10.01. This page goes further on 10.02 alone: finding missing sides, perimeters written in algebra, working backwards from a circumference or an arc, exact answers in terms of π, and composite shapes with arcs cut out. Condense it with the [10.02 revision notes](/resources/ocr-gcse-mathematics-j560-perimeter-calculations-ocr-gcse-maths-revision-notes/) and test yourself with the [10.02 practice questions](/resources/ocr-gcse-mathematics-j560-perimeter-calculations-ocr-gcse-maths-practice/).

## What the specification asks

| Ref | Statement in the specification |
|---|---|
| 10.02a Perimeter of rectilinear shapes | "Calculate the perimeter of rectilinear shapes." |
| 10.02b Circumference of a circle | "Know and apply the formula circumference = 2πr = πd to calculate the circumference of a circle"; "Calculate the arc length of a sector of a circle given its angle and radius." |
| 10.02c Perimeter of composite shapes | "Apply perimeter formulae in calculations involving the perimeter of composite 2D shapes." |

The circumference formula is one you must **know**: it is not given in the paper. The arc length rule follows from it, so learn why it works rather than a separate formula.

## Rectilinear shapes and missing sides

A rectilinear shape has straight sides meeting at right angles. Before adding, find every missing side. In any rectilinear outline, the horizontal edges going one way add up to the horizontal edges going the other way, and the same is true of the vertical edges.

**Worked example 1 (an L-shape).** An L-shape has a bottom edge of 12 cm, a left edge of 9 cm, a top edge of 5 cm and an inner vertical edge of 6 cm. Find its perimeter.

```
right edge       = 9 − 6  = 3 cm
inner horizontal = 12 − 5 = 7 cm
perimeter = 12 + 9 + 5 + 6 + 7 + 3 = 42 cm
```

This equals 2 × (12 + 9) = 42 cm, because the notch is at a corner.

**Worked example 2 (a slot in the middle of an edge).** A 15 cm by 8 cm rectangle has a slot 5 cm wide and 3 cm deep cut from the middle of its top edge.

```
outer rectangle: 2 × (15 + 8) = 46 cm
the slot removes 5 cm of top edge but adds 5 cm across its floor
it also adds two side walls of 3 cm each: + 6 cm
perimeter = 46 + 6 = 52 cm
```

A slot or notch away from a corner always adds twice its depth.

**Worked example 3 (perimeter in algebra).** A rectangle measures 2x cm by (x + 3) cm. A 2 cm square is cut from one corner. The perimeter is 36 cm. Find x.

```
corner cut, so perimeter = 2(2x + x + 3) = 6x + 6
6x + 6 = 36  →  6x = 30  →  x = 5
```

Check: the rectangle is 10 cm by 8 cm, and 2 × (10 + 8) = 36.

## Circumference

```
C = πd = 2πr
```

The circumference is a little more than three diameters. A circle of diameter 35 cm has circumference 35π = 109.95… = **110 cm** (3 s.f.).

### Working backwards

Rearrange the formula: d = C ÷ π, and r = C ÷ 2π.

**Worked example 4.** A circular flower bed has circumference 50 m. Find its radius.

```
d = 50 ÷ π = 15.915... m
r = 15.915... ÷ 2 = 7.96 m (3 s.f.)
```

Keep the unrounded diameter in your calculator before halving.

### Turns of a wheel

One complete turn of a wheel moves it forward by one circumference.

**Worked example 5.** A wheel has diameter 70 cm. How many complete turns does it make in travelling 1 km?

```
circumference = π × 0.7 = 2.199... m   (convert 70 cm to 0.7 m first)
turns = 1000 ÷ 2.199... = 454.7...
```

The wheel makes **454 complete turns**. The question says "complete", so round down.

### Exact answers

On the non-calculator papers, or when asked for an answer "in terms of π", leave π as a symbol. A circle of radius 4.5 cm has circumference 2 × π × 4.5 = **9π cm**. Write the number before π, and simplify any fraction.

## Arc length

A sector is a slice of a circle bounded by two radii and an arc. The arc is the same fraction of the circumference as the angle is of 360°.

```
arc length = (θ/360) × 2πr
```

**Worked example 6 (exact sector perimeter).** A sector has radius 9 cm and angle 40°. Find its perimeter in terms of π.

```
arc = 40/360 × 2π × 9 = 1/9 × 18π = 2π cm
perimeter = arc + two radii = 2π + 18 cm
```

As a decimal this is 24.3 cm (3 s.f.). An answer of 2π alone is only the arc.

### Finding the angle

**Worked example 7.** An arc of length 11 cm lies on a circle of radius 6 cm. Find the angle of the sector.

```
θ/360 × 2π × 6 = 11
θ/360 = 11 ÷ 12π
θ = 11 × 360 ÷ 12π = 105.04...
```

The angle is **105°** to the nearest degree. A quick check: 11 cm is just under a third of the circumference 12π ≈ 37.7 cm, and a third of 360° is 120°.

### Finding the radius

**Worked example 8.** A sector with angle 150° has arc length 10π cm. Find the radius.

```
150/360 × 2πr = 10π
5/12 × 2πr   = 10π
5πr/6        = 10π
r            = 10 × 6/5 = 12 cm
```

Cancel π from both sides early. The working stays exact and needs no calculator.

## Composite shapes

A composite shape is built from rectangles, triangles, circles and parts of circles. For its perimeter, trace round the outside and list every edge: straight edges and arcs. Leave out any line that is inside the shape.

**Worked example 9 (a semicircle cut out).** A rectangular plate is 20 cm by 12 cm. A semicircle of diameter 12 cm is cut from one short end. Find the perimeter of what remains.

```
long sides: 20 + 20 = 40 cm
far short end: 12 cm
cut end: the straight 12 cm edge has gone; the semicircular arc replaces it
arc = ½ × π × 12 = 6π cm
perimeter = 52 + 6π = 70.8 cm (3 s.f.)
```

Cutting a piece out can increase the perimeter. Here the arc (18.8 cm) is longer than the straight edge it replaces.

**Worked example 10 (part of a ring).** A path is a quarter of a ring between circles of radius 6 m and 10 m with the same centre. Find its perimeter.

```
outer arc = ¼ × 2π × 10 = 5π
inner arc = ¼ × 2π × 6  = 3π
straight ends = 2 × (10 − 6) = 8
perimeter = 8π + 8 = 33.1 m (3 s.f.)
```

Each straight end is the difference of the radii, not either radius.

## Common mistakes

- Using the diameter in 2πr, or the radius in πd.
- Adding only the given sides of a rectilinear shape and ignoring the unlabelled ones.
- Forgetting that a notch in the middle of an edge adds two extra sides.
- Giving only the arc as the perimeter of a sector or semicircle.
- Counting an internal join line as part of a composite perimeter.
- Rounding the diameter before halving it, which can change the final digit.
- Mixing units, such as a diameter in cm with a distance in km.

## Exam technique

- **"Give your answer in terms of π"**: do not use a calculator value of π; simplify to a form such as 8π + 8.
- **"Show that"**: write the formula, substitute, then show the value matches the one given, to at least one more decimal place than it is quoted.
- **Composite shapes**: label each edge on the diagram as you add it, so none is counted twice or missed.
- **Context**: finish with the unit and, where the question asks, a rounded or whole-number answer in words.

## Where to go next

Condense the methods with the [10.02 revision notes](/resources/ocr-gcse-mathematics-j560-perimeter-calculations-ocr-gcse-maths-revision-notes/), then try the [10.02 practice questions](/resources/ocr-gcse-mathematics-j560-perimeter-calculations-ocr-gcse-maths-practice/). Unit conversions used here are in the [10.01 units and measurement guide](/resources/ocr-gcse-mathematics-j560-units-and-measurement-ocr-gcse-maths/), and the area of the same shapes is in the [area guide](/resources/ocr-gcse-mathematics-area-triangles-parallelograms-trapezia-circles-sectors/).

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Section 10.02, Perimeter calculations (10.02a Perimeter of rectilinear shapes, 10.02b Circumference of a circle, 10.02c Perimeter of composite shapes).
