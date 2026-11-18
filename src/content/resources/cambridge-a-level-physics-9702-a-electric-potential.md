---
title: "Cambridge A Level Physics (9702): Electric potential"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Electric fields"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 18.5
syllabusTopics:
  - qualification: "a-level"
    topic: "a-electric-fields"
    subtopic: "a-electric-potential"
description: "Cambridge A Level Physics 9702 subtopic 18.5: defining potential, field as negative potential gradient, V = Q/(4πε₀r) and potential energy."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **18.5 Electric potential** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Electric Fields study guide](/resources/a-physics-electric-fields/) introduces potential within the whole of Topic 18; this page goes further: the definition word by word, how field strength and potential gradient are linked, how to add potentials from several charges, and how electric potential energy is used in energy-conservation problems such as closest approach. For quick recall use the [Electric potential revision notes](/resources/cambridge-a-level-physics-9702-a-electric-potential-revision-notes/), and for exam-style questions the [Electric potential practice questions](/resources/cambridge-a-level-physics-9702-a-electric-potential-practice/).

## What 18.5 asks you to do

Candidates should be able to:

- **define electric potential** at a point as the work done per unit positive charge in bringing a small test charge from infinity to the point
- recall and use the fact that the **electric field at a point is equal to the negative of potential gradient** at that point
- **use V = Q/(4πε₀r)** for the electric potential in the field due to a point charge
- understand how the concept of electric potential leads to the **electric potential energy of two point charges** and use **E_P = Qq/(4πε₀r)**

Both V = Q/(4πε₀r) and E_P = Qq/(4πε₀r) are on the Paper 4 data sheet; the definition and the gradient relationship must be known.

## The definition, phrase by phrase

> The electric potential at a point is the **work done per unit positive charge** in bringing a **small test charge** from **infinity** to that point.

- **Work done per unit charge**: potential is energy per coulomb, so its unit is J C⁻¹, the volt.
- **Positive** test charge: fixes the sign. Bringing a positive charge towards a positive charge Q requires work against repulsion, so V is **positive** near positive charges. Near a negative charge the field does the work, so the work done by the external agent is negative and V is **negative**.
- **From infinity**: the zero of potential is at infinity, where the charge feels no force.
- **Small** test charge: so that it does not disturb the charges creating the field.

Potential is a **scalar**. This is its great practical advantage over field strength: potentials from several charges simply add, with their signs, and no directions are needed.

## Potential of a point charge

```
V = Q / (4πε₀r)
```

- V ∝ 1/r, not 1/r². Doubling the distance halves the potential.
- The graph of V against r is a curve that approaches zero at large r: above the axis for positive Q, below it for negative Q.
- For a charged conducting sphere, the same formula applies outside, with r from the centre. On the surface, V = Q/(4πε₀R).

## Field strength as negative potential gradient

```
E = − ΔV / Δx       (or E = −dV/dr)
```

- The **magnitude** of the field strength equals the **gradient** of the graph of potential against distance. On a curved V–r graph, draw a tangent at the point and measure its gradient.
- The **minus sign** means the field points in the direction in which potential **decreases**: "downhill". A positive charge, released, moves from high to low potential.
- In a uniform field the gradient is constant, which is why E = ΔV/Δd between parallel plates (18.2).
- **Equipotentials** (surfaces of equal potential) are always perpendicular to field lines. Around a point charge they are concentric spheres. For equal steps of potential, the spheres get further apart moving outwards, because the field, and so the gradient, gets weaker.

For a point charge, comparing V = Q/(4πε₀r) with E = Q/(4πε₀r²) gives E = V/r. This is a useful check, but it applies only to the field of a single point charge.

## Work done moving a charge

The work needed to move a charge q from a point at potential V₁ to a point at V₂ is:

```
W = q(V₂ − V₁) = qΔV
```

This depends only on the end points, not on the path taken. Moving along an equipotential needs no work.

## Electric potential energy of two point charges

If a charge q is at a point where the potential due to Q is V, the work done bringing q from infinity was qV. That work is stored as the electric potential energy of the pair:

```
E_P = qV = Qq / (4πε₀r)
```

- **Like charges**: E_P is **positive**. Work had to be done to push them together; it is released if they fly apart.
- **Unlike charges**: E_P is **negative**. The pair has less energy than when separated; work must be done to pull them apart.
- As r decreases, E_P increases for like charges and decreases (becomes more negative) for unlike charges.
- In energy problems, the **change** in E_P is converted to or from kinetic energy.

## Worked example 1: work done between two points

A point charge of +4.0 nC is fixed in place. Find the potentials at 0.10 m and 0.30 m from it, and the work needed to move a +2.0 nC charge from 0.30 m to 0.10 m.

```
V at 0.10 m = 8.99 × 10⁹ × 4.0 × 10⁻⁹ / 0.10 = 360 V
V at 0.30 m = 8.99 × 10⁹ × 4.0 × 10⁻⁹ / 0.30 = 120 V
W = qΔV = 2.0 × 10⁻⁹ × (360 − 120) = 4.8 × 10⁻⁷ J
```

*Annotation.* The work is positive because the +2.0 nC charge is pushed closer against repulsion. Moving it back releases the same amount of energy. Notice E = V/r = 360/0.10 = 3600 V m⁻¹ at 0.10 m, the same as Q/(4πε₀r²).

## Worked example 2: adding potentials from two charges

Charges of +3.0 nC and −1.0 nC are 0.20 m apart. Find the potential at the midpoint, and the point between them where V = 0.

```
midpoint:  V = 8.99 × 10⁹ × (3.0 × 10⁻⁹ − 1.0 × 10⁻⁹) / 0.10 = 180 V

V = 0 at distance x from +3.0 nC:
3.0/x = 1.0/(0.20 − x)   →   3(0.20 − x) = x   →   x = 0.15 m
```

*Annotation.* Potentials add as scalars with their signs: no vectors. At the point where V = 0 the field is **not** zero: both fields point towards the negative charge there. A zero of potential and a zero of field are different things.

## Worked example 3: field from a potential graph

On a graph of potential against distance near a charged sphere, the tangent at r = 0.050 m passes through 400 V at r = 0.030 m and 160 V at r = 0.060 m. Find the field strength at r = 0.050 m.

```
gradient = (160 − 400) / (0.060 − 0.030) = −8000 V m⁻¹
E = −gradient = 8000 V m⁻¹ (directed away from the sphere, the direction of falling V)
```

## Worked example 4: closest approach of an alpha particle

An alpha particle (charge +2e) with kinetic energy 8.0 × 10⁻¹³ J travels directly towards a gold nucleus (charge +79e). Find the distance of closest approach.

```
at closest approach, all kinetic energy has become electric potential energy:
E_K = Qq / (4πε₀r)
r = 8.99 × 10⁹ × (79 × 1.60 × 10⁻¹⁹)(2 × 1.60 × 10⁻¹⁹) / 8.0 × 10⁻¹³
r = 4.5 × 10⁻¹⁴ m
```

*Annotation.* The nucleus is treated as fixed, because it is far heavier. The calculated distance gives an upper limit for the size of the nucleus.

## Common mistakes

- **Using r² in V** (that is the field formula).
- **Adding potentials as vectors**, or ignoring the sign of a negative charge.
- **Assuming E = 0 wherever V = 0**, or V = 0 wherever E = 0.
- **Dropping the minus sign** in E = −dV/dx when asked for direction.
- **Defining potential without "positive" or without "from infinity".**
- **Forgetting that E_P is negative for unlike charges.**

## Exam technique for the command words

- **Define** (electric potential): work done per unit positive charge, bringing a small test charge from infinity to the point.
- **State** (the relationship between E and V): field strength equals the negative of the potential gradient.
- **Calculate**: keep the sign of each charge in V and E_P; add potentials algebraically.
- **Determine** (E from a V–r graph): draw a tangent, find its gradient, and change the sign.
- **Explain** (why V is negative near a negative charge): the field attracts the positive test charge, so negative work is done by the external agent bringing it from infinity.

## Related resources

- [Electric Fields study guide](/resources/a-physics-electric-fields/) — the whole of Topic 18
- [Electric potential revision notes](/resources/cambridge-a-level-physics-9702-a-electric-potential-revision-notes/)
- [Electric potential practice questions](/resources/cambridge-a-level-physics-9702-a-electric-potential-practice/)
- [Electric field of a point charge study guide](/resources/cambridge-a-level-physics-9702-a-electric-field-of-a-point-charge/)
- [Capacitors and capacitance study guide](/resources/cambridge-a-level-physics-9702-a-capacitors-and-capacitance/) — potential applied to charged spheres

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
