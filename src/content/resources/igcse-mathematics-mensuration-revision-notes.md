---
title: "IGCSE Mathematics: Mensuration — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Mensuration"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "For examination in 2025, 2026 and 2027"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "mensuration-cambridge-igcse-maths"
    subtopic: "units-of-measure-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "mensuration-cambridge-igcse-maths"
    subtopic: "area-and-perimeter-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "mensuration-cambridge-igcse-maths"
    subtopic: "circles-arcs-and-sectors-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "mensuration-cambridge-igcse-maths"
    subtopic: "surface-area-and-volume-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "mensuration-cambridge-igcse-maths"
    subtopic: "compound-shapes-and-parts-of-shapes-cambridge-igcse-maths"
description: "Condensed recall notes on units of measure, area, perimeter, circles, arcs, sectors, surface area, volume and compound shapes for Cambridge IGCSE Mathematics 0580."
author: "marlbridge-academic-team"
publishedDate: 2026-09-04
featured: false
---

Condensed for the final weeks. Pair these notes with the
[Mensuration practice questions](/resources/igcse-mathematics-mensuration-practice/)
for worked exam-style application.

## Units of measure

Linear conversions apply directly, but **area conversions square the factor** and **volume conversions cube it**:

```
1 m = 100 cm            -> linear factor 100
1 m^2 = 100^2 = 10 000 cm^2   -> area factor 100^2
1 m^3 = 100^3 = 1 000 000 cm^3 -> volume factor 100^3
```

Forgetting to square or cube the linear factor is the single most common unit-conversion error in this topic.

## Area and perimeter

| Shape | Area | Perimeter |
|---|---|---|
| Rectangle | length x width | 2(length + width) |
| Triangle | (1/2) x base x height | sum of the three sides |
| Parallelogram | base x height | sum of the four sides |
| Trapezium | (1/2)(a + b) x height, a and b the parallel sides | sum of the four sides |

## Circles, arcs and sectors

```
circumference = 2 x pi x r          area = pi x r^2

arc length  = (angle / 360) x 2 x pi x r
sector area = (angle / 360) x pi x r^2
```

Both the arc length and sector-area formulas scale the full circumference or area by the **fraction of a full turn** the angle represents. For a **major** sector or arc, first subtract the given (minor) angle from 360 degrees to get the correct larger angle before applying the fraction -- applying the fraction directly to the given angle answers the wrong region.

## Surface area and volume

```
Cylinder:  volume = pi x r^2 x h
           total surface area = 2 x pi x r x h + 2 x pi x r^2

Cone:      volume = (1/3) x pi x r^2 x h
           (h is the PERPENDICULAR height, not the slant height)

Sphere:    volume = (4/3) x pi x r^3
           surface area = 4 x pi x r^2
```

A cone's slant height and perpendicular height are different lengths, related by Pythagoras' theorem (slant height is the hypotenuse of a right-angled triangle formed with the radius and the perpendicular height) -- always check which one a question has given before substituting into the volume formula. Total surface area of a cylinder or cone must include the circular end(s); curved surface area alone does not.

## Compound shapes and parts of shapes

A compound shape's area or volume is found by **adding or subtracting** the areas or volumes of the simpler shapes it is built from -- decide which operation applies by checking whether a piece has been joined on or removed.

```
10 cm x 6 cm rectangle, semicircle of diameter 6 cm removed:
rectangle area  = 10 x 6 = 60 cm^2
semicircle area = (1/2) x pi x 3^2 = 14.14 cm^2
remaining area  = 60 - 14.14 = 45.9 cm^2 (3 s.f.)
```

## Exam traps

- Converting an area or volume using only the linear conversion factor, without squaring or cubing it.
- Forgetting the angle-over-360 fraction when finding an arc length or sector area.
- Using the slant height instead of the perpendicular height in a cone's volume formula.
- Applying the minor-sector angle directly to a major-sector question, instead of subtracting it from 360 degrees first.
- Adding instead of subtracting (or the reverse) when a compound shape has a piece removed.
- Rounding at an intermediate step in a multi-step calculation rather than only at the final answer.

## Self-test

1. State the area-conversion factor between m^2 and cm^2.
2. Write down the formula for the area of a sector, given the sector angle and radius.
3. Which length is used in a cone's volume formula: the slant height or the perpendicular height?
4. A major sector has a minor angle of 80 degrees marked on the diagram. What angle should be used to find the major sector's area?
5. State whether a compound-shape calculation with a piece removed uses addition or subtraction.

**Answers:** 1. 10 000 (100^2), since 1 m = 100 cm. 2. Sector area = (angle / 360) x pi x r^2. 3. The perpendicular height. 4. 360 - 80 = 280 degrees. 5. Subtraction -- subtract the removed piece's area from the whole shape's area.
