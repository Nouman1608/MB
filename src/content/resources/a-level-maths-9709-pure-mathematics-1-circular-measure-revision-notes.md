---
title: "Cambridge International AS & A Level Mathematics 9709: Circular measure -- Revision Notes"
seoTitle: "Cambridge 9709 Circular Measure Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed 9709 circular measure notes: radian conversions, arc and sector formulas, segment and tangent methods, and an 11-question self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-09-28
featured: false
---

These notes condense section 1.4 Circular measure of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027. The section is part of Pure Mathematics 1, examined on Paper 1 and compulsory for AS Level and A Level. Papers 2 and 3 assume it. A scientific calculator is allowed in all 9709 papers. For full explanations and longer worked examples, use the [circular measure study guide](/resources/a-level-maths-9709-pure-mathematics-1-circular-measure/).

Practise: [Circular measure practice questions](/resources/a-level-maths-9709-pure-mathematics-1-circular-measure-practice/) · Course hub: [Cambridge A Level Mathematics](/boards/cambridge/a-level/mathematics/) · Checklist: [9709 checklist](/checklists/cambridge/a-level/mathematics/) · Diagnostic: [9709 AS diagnostic](/practice/9709/diagnostic/as/)

## What 1.4 asks of you

1. Understand the definition of a radian, and use the relationship between radians and degrees.
2. Use s = rθ and A = ½r²θ to solve problems on arc length and sector area, including lengths and angles in triangles and areas of triangles.

## Definitions

- **Radian:** the angle at the centre of a circle subtended by an arc equal in length to the radius.
- **Arc:** part of the circumference. Minor arc: the shorter one. Major arc: the longer one.
- **Chord:** a straight line joining two points on the circle.
- **Sector:** region bounded by two radii and an arc ("pizza slice").
- **Segment:** region bounded by a chord and an arc.
- **Subtends:** an arc or chord "subtends" the angle it makes at the centre.

## Formula table

| Quantity | Formula (θ in radians) | In MF19? |
|---|---|---|
| Degrees to radians | × π/180 | No |
| Radians to degrees | × 180/π | No |
| Arc length | s = rθ | Yes |
| Sector area | A = ½r²θ | Yes |
| Sector perimeter | 2r + rθ | No (build it) |
| Triangle OAB area | ½r² sin θ (from ½ab sin C) | No |
| Chord AB | 2r sin(θ/2), or cosine rule | No |
| Segment area | ½r²θ − ½r² sin θ | No (build it) |
| Major sector angle | 2π − θ | No |

MF19 is the list of formulae supplied in the exam. The arc and sector formulas appear there under Mensuration, marked "θ in radians". Everything else in the table you build from them or from IGCSE triangle work.

## Key conversions

| Degrees | 30° | 45° | 60° | 90° | 120° | 150° | 180° | 360° |
|---|---|---|---|---|---|---|---|---|
| Radians | π/6 | π/4 | π/3 | π/2 | 2π/3 | 5π/6 | π | 2π |

1 radian ≈ 57.3°. So 3 radians is just under 180°, and 6.28 radians is a full turn.

**Reminder:** 72° = 72π/180 = **2π/5**. 1.5 rad = 1.5 × 180/π = **85.9°** (1 d.p.).

## Method boxes

### Arc or sector with one unknown

```
1. Write down what is known: r, θ, s, A or perimeter.
2. Pick the formula that links them (s = rθ, A = ½r²θ, P = 2r + rθ).
3. Rearrange for the unknown.
4. Check θ is between 0 and 2π and r is positive.
```

**Reminder:** radius 12 cm, angle 0.75 rad. Arc = 12 × 0.75 = **9 cm**. Area = ½ × 144 × 0.75 = **54 cm²**.

### Two conditions (perimeter and area, or arc and area)

```
1. Use the simpler condition to write rθ (or θ) in terms of r.
2. Substitute into A = ½r²θ = ½r(rθ).
3. Solve the resulting equation (often a quadratic).
4. Reject roots with θ > 2π or r ≤ 0.
```

### Segment area

```
1. Sector area       = ½r²θ
2. Triangle area     = ½r² sin θ   (calculator in RADIANS)
3. Segment           = sector − triangle
```

**Reminder:** r = 4, θ = π/6. Sector = ½ × 16 × π/6 = 4π/3. Triangle = ½ × 16 × sin(π/6) = 4. Segment = **4π/3 − 4**.

### Chord length

```
Half-angle method:  AB = 2r sin(θ/2)
Cosine rule:        AB² = r² + r² − 2r² cos θ
```

**Reminder:** r = 9, θ = 1.2. AB = 18 sin 0.6 = **10.2** (3 s.f.). The cosine rule gives the same value.

### Finding the angle when you know a chord

```
cos θ = (r² + r² − AB²) / (2r²)      then θ = cos⁻¹(...)
or   sin(θ/2) = (½AB) / r            then θ = 2 sin⁻¹(...)
```

Give θ in radians, and keep the unrounded value for any later step.

### Composite regions (tangents, overlaps, shaded shapes)

```
1. Label every radius. Mark right angles (tangent ⟂ radius).
2. Find every angle at a centre, in radians.
     angles at a point: 2π      angles on a straight line: π
     quadrilateral with two tangents: angle at centre = π − angle between tangents
3. Area: add and subtract sectors, triangles, segments. One line per piece.
4. Perimeter: list every boundary piece (arcs, chords, tangents, straight edges).
```

## Must-know distinctions

- **Arc vs chord.** The arc is curved (rθ). The chord is straight (2r sin(θ/2)). The arc is always longer.
- **Sector vs segment.** A sector includes the triangle at the centre. A segment is the sector with that triangle removed.
- **Minor vs major.** Minor uses θ. Major uses 2π − θ. A major segment is the whole circle minus the minor segment: πr² − ½r²(θ − sin θ).
- **Exact vs 3 s.f.** "Exact" or "in terms of π" means keep π and surds. Otherwise give 3 significant figures, or 1 d.p. for angles in degrees.
- **Radians vs degrees on the calculator.** The formulas need radians. sin and cos of a radian angle need radian mode.
- **Perimeter vs arc length.** A sector's perimeter adds two radii. A segment's perimeter adds the chord.
- **Show that vs find.** In a "show that", every step must appear, including the value you are aiming at as the last line.

## Links to other Pure Mathematics 1 topics

- **1.1 Quadratics:** perimeter-and-area questions often end in a quadratic, and "maximum area" questions can be done by completing the square. See the [quadratics revision notes](/resources/a-level-mathematics-quadratics-revision-notes/).
- **1.3 Coordinate geometry:** a circle given by its equation may then have a sector or segment cut off by a line. See the [coordinate geometry guide](/resources/a-level-mathematics-pure-mathematics-1-coordinate-geometry/).
- **1.5 Trigonometry:** exact values of sin, cos and tan of π/6, π/4, π/3 turn many circular-measure answers into exact form.
- **Later papers:** the calculus of trigonometric functions only works in radians. See the [Pure Mathematics 2 revision notes](/resources/a-level-mathematics-pure-mathematics-2-revision-notes/) and [Pure Mathematics 3 revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/).

## Quick self-test

Give exact answers where the question says so. Otherwise give 3 significant figures (angles in degrees to 1 d.p.).

1. Express 40° in radians, exactly.
2. Express 7π/12 in degrees.
3. Convert 2 radians to degrees.
4. Find the arc length of a sector with radius 4 cm and angle 2.5 rad.
5. Find the exact area of a sector with radius 6 cm and angle π/4.
6. An arc of length 11 cm is on a circle of radius 5 cm. Find the angle it subtends at the centre.
7. A sector has angle 1.5 rad and area 75 cm². Find its radius.
8. Find the exact perimeter of a sector with radius 3 cm and angle 2π/3.
9. Find the exact area of the minor segment cut off by a chord that subtends π/2 at the centre of a circle of radius 4 cm.
10. Find the length of the chord that subtends 1 radian at the centre of a circle of radius 10 cm.
11. Two radii of a circle of radius 2 cm make a minor sector with angle 1 rad. Find the area of the major sector.

### Answers

1. 40 × π/180 = **2π/9**
2. 7 × 180 ÷ 12 = **105°**
3. 2 × 180/π = **114.6°**
4. s = 4 × 2.5 = **10 cm**
5. ½ × 36 × π/4 = **9π/2 cm²**
6. θ = 11/5 = **2.2 rad**
7. ½r² × 1.5 = 75, so r² = 100 and **r = 10 cm**
8. 2 × 3 + 3 × 2π/3 = **6 + 2π cm**
9. ½ × 16 × π/2 − ½ × 16 × sin(π/2) = **4π − 8 cm²**
10. 2 × 10 × sin 0.5 = **9.59 cm**
11. Major angle = 2π − 1, area = ½ × 4 × (2π − 1) = 4π − 2 = **10.6 cm²**

If you missed 9 or 11, reread the segment and major-sector method boxes above. If you missed 7, practise rearranging with r² before taking the square root.

## Where marks are usually lost

- Substituting an angle in degrees into s = rθ or ½r²θ, which gives answers roughly 57 times too big.
- Finding sin θ in degree mode for a radian angle. sin 1 in degree mode is 0.0175; in radian mode it is 0.841.
- Leaving out the two radii when a question asks for the perimeter of a sector.
- Using θ instead of 2π − θ for the major arc or major sector.
- Rounding an intermediate angle (for example 1.591 to 1.6) and carrying it forward, which can lose the final accuracy mark.
- Writing a decimal when the question says "exact" or "in terms of π".
- On a "show that", writing the target result without enough steps to reach it, so the working does not show where it came from.
- Keeping a root that gives θ > 2π after solving a quadratic.
- In tangent questions, forgetting the right angle between tangent and radius, so the angle at the centre is found wrongly.
- Counting a line that lies inside a shaded region as part of its perimeter.

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027* (Version 4): Subject content, 1 Pure Mathematics 1 (for Paper 1), section 1.4 Circular measure. Formulae references are to the syllabus's List of formulae and statistical tables (MF19).
