---
title: "Cambridge A Level Physics (9702): Electric field of a point charge"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Electric fields"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 18.4
syllabusTopics:
  - qualification: "a-level"
    topic: "a-electric-fields"
    subtopic: "a-electric-field-of-a-point-charge"
description: "Cambridge A Level Physics 9702 subtopic 18.4: E = Q/(4πε₀r²), radial fields, charged spheres and combining the fields of two charges."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **18.4 Electric field of a point charge** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Electric Fields study guide](/resources/a-physics-electric-fields/) gives the equation with one example; this page goes further: where the equation comes from, how the field varies with distance, how it applies to charged spheres, and how to combine the fields of two or more charges, including finding points where the field is zero. For quick recall use the [Electric field of a point charge revision notes](/resources/cambridge-a-level-physics-9702-a-electric-field-of-a-point-charge-revision-notes/), and for exam-style questions the [Electric field of a point charge practice questions](/resources/cambridge-a-level-physics-9702-a-electric-field-of-a-point-charge-practice/).

## What 18.4 asks you to do

Candidates should be able to:

- **recall and use E = Q/(4πε₀r²)** for the electric field strength due to a point charge in free space

It is a single outcome, but examiners use it in a wide range of contexts: charged spheres, pairs of charges, graphs of E against r, and comparisons with gravitational fields. It relies on the definition of field strength from 18.1 and on Coulomb's law from 18.3.

## Deriving the equation

Place a small positive test charge q at distance r from a point charge Q. By Coulomb's law the force on it is F = Qq/(4πε₀r²). Field strength is force per unit positive charge, so

```
E = F / q = Q / (4πε₀r²)
```

The test charge cancels, confirming that E describes the field of Q alone. The value of 1/(4πε₀) = 8.99 × 10⁹ m F⁻¹ is on the data sheet.

## Features of a radial field

- **Direction:** radially **outwards** from a positive charge, radially **inwards** towards a negative charge. If Q is negative, the formula gives a negative value; interpret that as "towards the charge" rather than carrying the sign.
- **Inverse square:** doubling r divides E by 4; tripling r divides E by 9. Field lines spread out over a larger sphere, of area 4πr², which is the origin of the 4π and the r² in the formula.
- **Graph of E against r:** a steep curve that falls rapidly at first and then flattens, never reaching zero. A quick check that data fit an inverse-square law: E × r² should be constant.

| Distance from charge | Field strength |
|---|---|
| r | E |
| 2r | E/4 |
| 3r | E/9 |
| r/2 | 4E |

## Charged spheres

From 18.3, for points **outside** a charged spherical conductor, its charge acts as if concentrated at its centre. So the same formula applies with r measured from the **centre**:

- at the surface of a sphere of radius R: E = Q/(4πε₀R²)
- at distance r > R from the centre: E = Q/(4πε₀r²), which falls as 1/r² from the surface value

This explains why a charged sphere can only hold a limited charge. If the field at its surface exceeds the breakdown field strength of the surrounding air, the air conducts and the charge leaks away in a spark. For a given maximum surface field, a larger sphere can hold more charge, since Q = 4πε₀R²E.

## Combining fields from two charges

Field strength is a vector. The field at a point due to several charges is the **vector sum** of the separate fields.

### On the line joining two charges

| Pair of charges | Directions between the charges | Where E = 0 |
|---|---|---|
| Two like charges (both + or both −) | Fields point in **opposite** directions, so they partly cancel | A point **between** them, closer to the smaller charge |
| Unlike charges (+ and −) | Fields point in the **same** direction (towards the negative), so they add | No zero point between them; a zero point lies **outside**, beyond the smaller charge |

For the zero point, set the two magnitudes equal. With charges Q₁ and Q₂ a distance d apart and the point a distance x from Q₁ (between them):

```
Q₁ / x² = Q₂ / (d − x)²   →   √Q₁ / x = √Q₂ / (d − x)
```

Taking square roots before solving avoids a quadratic.

### Off the line

Find each field's magnitude, draw its direction (away from positive, towards negative), resolve into components, add, and recombine with Pythagoras.

## Worked example 1: finding a charge from its field

The field strength 0.20 m from a small charged sphere is 4.5 × 10⁵ N C⁻¹, directed away from the sphere. Find the charge.

```
Q = E × 4πε₀r² = E r² / (8.99 × 10⁹)
Q = 4.5 × 10⁵ × 0.20² / 8.99 × 10⁹ = 2.0 × 10⁻⁶ C
```

The field points away, so the charge is **positive**: +2.0 μC. At 0.40 m the field would be a quarter as large, 1.1 × 10⁵ N C⁻¹.

## Worked example 2: two like charges

A charge of +4.0 nC is at x = 0 and a charge of +1.0 nC is at x = 0.12 m. Find the field at the midpoint and the position where the field is zero.

```
at x = 0.06 m:
from +4.0 nC: 8.99 × 10⁹ × 4.0 × 10⁻⁹ / 0.06² = 9990 N C⁻¹ in +x
from +1.0 nC: 8.99 × 10⁹ × 1.0 × 10⁻⁹ / 0.06² = 2500 N C⁻¹ in −x
resultant = 9990 − 2500 = 7.5 × 10³ N C⁻¹ in +x

zero point: √4.0 / x = √1.0 / (0.12 − x)
2(0.12 − x) = x   →   x = 0.080 m
```

*Annotation.* The zero point is 0.080 m from the larger charge and 0.040 m from the smaller one: closer to the smaller charge, as expected. Check: 4.0/0.080² = 625 and 1.0/0.040² = 625, equal.

## Worked example 3: the dome of an electrostatic generator

A spherical dome of radius 0.15 m is surrounded by air that breaks down at a field strength of 3.0 × 10⁶ V m⁻¹. Find the maximum charge on the dome and the field 0.45 m from its centre when it carries this charge.

```
Q_max = E R² / (8.99 × 10⁹) = 3.0 × 10⁶ × 0.15² / 8.99 × 10⁹ = 7.5 × 10⁻⁶ C
at r = 0.45 m = 3R:   E = 3.0 × 10⁶ / 9 = 3.3 × 10⁵ V m⁻¹
```

*Annotation.* Using the ratio (R/r)² avoids recalculating with the charge. The unit V m⁻¹ is equivalent to N C⁻¹.

## Comparison with a gravitational point mass

| Electric (point charge Q) | Gravitational (point mass M) |
|---|---|
| E = Q/(4πε₀r²) | g = GM/r² |
| Outward for +Q, inward for −Q | Always inward |
| Force per unit positive charge | Force per unit mass |

## Common mistakes

- **Using r instead of r²**, or confusing E with the potential V = Q/(4πε₀r) from 18.5.
- **Measuring r from the surface** of a sphere instead of its centre.
- **Adding field magnitudes** from two charges without checking their directions.
- **Placing the zero point between unlike charges**, where the fields add.
- **Placing the zero point closer to the larger charge.**
- **Carrying a negative sign as if it were a smaller field.** −Q gives the same magnitude, pointing inwards.

## Exam technique for the command words

- **Show that** (the equation): start from Coulomb's law with a test charge q, then divide by q.
- **Calculate**: square r, convert prefixes, give a direction (towards or away from the charge, or +x/−x).
- **Determine** (a zero-field point): equate magnitudes and take square roots; say which side of which charge.
- **Explain** (why there is no zero point between unlike charges): the fields of both charges point the same way there.
- **Sketch** (E against r for a sphere): start at the surface value at r = R and fall as 1/r²; mark E/4 at 2R.

## Related resources

- [Electric Fields study guide](/resources/a-physics-electric-fields/) — the whole of Topic 18
- [Electric field of a point charge revision notes](/resources/cambridge-a-level-physics-9702-a-electric-field-of-a-point-charge-revision-notes/)
- [Electric field of a point charge practice questions](/resources/cambridge-a-level-physics-9702-a-electric-field-of-a-point-charge-practice/)
- [Electric potential study guide](/resources/cambridge-a-level-physics-9702-a-electric-potential/) — the next subtopic

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
