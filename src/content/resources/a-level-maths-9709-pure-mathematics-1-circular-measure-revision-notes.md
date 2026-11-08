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
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--05-ambiguous-case.webp" width="900" height="890" alt="Angle A = 34°, a = 9, b = 13. A circle of radius 9 centred on C meets the line through A at two points, giving two triangles: B = 126.1° with c = 5.47, and B = 53.9° with c = 16.1. Two triangles exist when b sin A &lt; a &lt; b, here 7.27 &lt; 9 &lt; 13." loading="lazy">
  <figcaption>Two sides and a non-included angle can fit two different triangles.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--03-sector-triangle-segment.webp" width="900" height="765" alt="A sector of radius 10 cm and angle π/3 has area 50π/3. Subtracting the triangle of area 25√3 leaves the segment, ½r²(θ − sin θ), about 9.06 cm². The arc length is rθ = 10π/3 cm and θ must be in radians." loading="lazy">
  <figcaption>Segment area is sector area minus triangle area.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--04-which-rule.webp" width="900" height="846" alt="Four triangles show the given information. Two sides and the angle between (SAS) or three sides (SSS) need the cosine rule: missing side 9.23, largest angle 96.4°. Two angles and a side (AAS) need the sine rule: missing side 22.9. Two sides and a non-included angle (SSA) use the sine rule but may have two answers." loading="lazy">
  <figcaption>Match the known sides and angles to the rule: cosine for SAS and SSS, sine for AAS and SSA.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--07-small-angle-approximations.webp" width="900" height="1100" alt="For θ from 0 to 1 radian, sin θ and tan θ hug the line y = θ near zero and cos θ hugs 1 − θ²/2. At θ = 0.2, sin = 0.1987, tan = 0.2027, cos = 0.9801 and 1 − θ²/2 = 0.9800." loading="lazy">
  <figcaption>For small θ in radians, sin θ and tan θ are close to θ and cos θ is close to 1 − θ²/2.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--01-unit-circle-any-angle.webp" width="900" height="850" alt="A circle of radius 1 with P at 210 degrees, measured anticlockwise from the positive x-axis. P = (cos 210°, sin 210°) = (−√3/2, −1/2) lies in the third quadrant, with reference angle 30°. Corner notes give where sin, cos and tan are positive." loading="lazy">
  <figcaption>The point P on the unit circle gives cos θ and sin θ for any angle, and its quadrant gives the signs.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--02-exact-value-triangles.webp" width="900" height="948" alt="Two right-angled triangles: legs 1, 1 and hypotenuse √2 (45°, 45°); and half an equilateral triangle with sides 1, √3, 2 (30°, 60°). A table gives sin, cos and tan of 30°, 45° and 60° read from them, with radian equivalents." loading="lazy">
  <figcaption>Two triangles generate every exact value you need for 30°, 45° and 60°.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--06-trig-graphs.webp" width="900" height="930" alt="y = sin x and y = cos x over 0 to 360° have period 360° and range −1 to 1; cos is sin shifted. y = tan x has period 180°, zeros at 0, 180 and 360 degrees, passes through 1 at 45° and 225°, and has asymptotes at 90° and 270°." loading="lazy">
  <figcaption>Sine and cosine repeat every 360°; tangent repeats every 180° and has asymptotes.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--08-reciprocal-graphs.webp" width="900" height="1102" alt="y = sec x, cosec x and cot x drawn over their parent functions. sec has asymptotes at 90° and 270°, cosec and cot at 0°, 180° and 360°. sec and cosec only take values y ≥ 1 or y ≤ −1 with period 360°; cot takes all real values with period 180°." loading="lazy">
  <figcaption>A reciprocal graph has an asymptote wherever the parent function is zero.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--09-inverse-trig-graphs.webp" width="900" height="1218" alt="y = sin x restricted to −π/2 ≤ x ≤ π/2 reflects in y = x to give y = arcsin x, with domain −1 to 1 and range −π/2 to π/2. y = arccos x has range 0 to π; y = arctan x has range strictly between −π/2 and π/2 with horizontal asymptotes." loading="lazy">
  <figcaption>Restrict the domain so the function is one-to-one, then reflect in y = x to get the inverse.</figcaption>
</figure>


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

## Frequently asked questions

**What is a radian?**
A radian is the angle at the centre of a circle subtended by an arc equal in length to the radius. So 2π radians = 360°, and 1 radian is about 57.3°.

**Which circular measure formulae are in MF19 for Cambridge 9709?**
Only the arc length s = rθ and sector area A = ½r²θ, both with θ in radians. The sector perimeter, triangle area, chord length and segment area must be built from them.

**What is the difference between a sector and a segment?**
A sector is bounded by two radii and an arc. A segment is bounded by a chord and an arc, so it is the sector with the triangle at the centre removed.

**How do you find the length of a chord?**
Use AB = 2r sin(θ/2), from splitting the isosceles triangle in half, or the cosine rule AB² = r² + r² − 2r² cos θ. Both give the same value.

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027* (Version 4): Subject content, 1 Pure Mathematics 1 (for Paper 1), section 1.4 Circular measure. Formulae references are to the syllabus's List of formulae and statistical tables (MF19).
