---
title: "A Level Physics: Electric Fields — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Electric fields"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 18.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-electric-fields"
    subtopic: "a-electric-fields-and-field-lines"
  - qualification: "a-level"
    topic: "a-electric-fields"
    subtopic: "a-uniform-electric-fields"
  - qualification: "a-level"
    topic: "a-electric-fields"
    subtopic: "a-electric-force-between-point-charges"
  - qualification: "a-level"
    topic: "a-electric-fields"
    subtopic: "a-electric-field-of-a-point-charge"
  - qualification: "a-level"
    topic: "a-electric-fields"
    subtopic: "a-electric-potential"
description: "Condensed recall notes on Coulomb\u2019s law, field strength, potential and the comparison with gravitational fields for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Electric Fields study guide](/resources/a-physics-electric-fields/).

## Equations

```
Coulomb's law      F = Q1 Q2 / (4 pi e0 r^2)
field strength     E = F / q = Q / (4 pi e0 r^2)      N/C or V/m
potential          V = Q / (4 pi e0 r)                 J/C = V
potential energy   Ep = Q1 Q2 / (4 pi e0 r)

UNIFORM field (parallel plates):
                   E = V / d                           (constant)
```

`1/(4πε₀) ≈ 8.99 × 10⁹ N m² C⁻²`

## The comparison table — learn this cold

| | Gravitational | Electric |
|---|---|---|
| Source | Mass | Charge |
| Force | Always **attractive** | Attractive **or repulsive** |
| Field strength | g = GM/r² | E = Q/4πε₀r² |
| Potential | φ = −GM/r, **always negative** | V = Q/4πε₀r, **sign follows the charge** |
| Falls off | Both **1/r²** for field, **1/r** for potential | Same |
| Can be shielded? | **No** | **Yes** |

The structural similarity is the point — both are inverse-square laws with the same mathematics. The differences are sign and shielding. Learning this table well pays off across the whole topic, since almost every comparison question on this specification draws directly on one of its rows.

## Radial vs uniform fields

**Radial** (point charge or sphere):
- Field lines radiate outward from positive, inward to negative.
- E ∝ 1/r², V ∝ 1/r.
- Outside a charged sphere, treat all charge as concentrated at the centre.

**Worked example.** Field strength 0.20 m from a point charge of +5.0 × 10⁻⁶ C:

```
E = Q / (4 pi e0 r^2) = 8.99e9 x 5.0e-6 / 0.20^2 = 1.12 x 10^6 N/C
```

The direction is radially outward from a positive charge (the direction of the force on a positive test charge placed at that point), and radially inward toward a negative charge. Field lines are drawn closer together where the field is stronger, exactly as in a uniform field diagram, just arranged radially rather than in parallel.

**Uniform** (parallel plates):
- Field lines are **parallel and evenly spaced**.
- E = V/d and is the **same everywhere** between the plates.
- Potential varies **linearly** with distance.

## Charged particle in a uniform field

A particle entering perpendicular to a uniform field follows a **parabolic** path — mathematically identical to projectile motion under gravity.

```
Along the field:   a = F/m = qE/m    (constant acceleration)
Across the field:  constant velocity
```

Work done accelerating a charge through a potential difference:

```
W = qV        and if all becomes kinetic energy:  qV = 1/2 m v^2
```

That relation defines the **electronvolt**: 1 eV = 1.60 × 10⁻¹⁹ J.

**Worked example.** An electron (charge 1.60 × 10⁻¹⁹ C, mass 9.11 × 10⁻³¹ kg) is accelerated from rest through a p.d. of 500 V:

```
qV = 1/2 m v^2
v = sqrt(2qV/m) = sqrt(2 x 1.60e-19 x 500 / 9.11e-31) = 1.33 x 10^7 m/s
```

This assumes all the work done by the field converts to kinetic energy, which holds as long as no other force acts on the electron. The same relation works for any charged particle accelerated from rest through a known potential difference, not only electrons — just substitute the correct charge and mass.

## Equipotentials

Lines (or surfaces) of constant potential, always **perpendicular to field lines**. No work is done moving a charge along an equipotential.

Relationship: `E = −dV/dr` — field strength is the negative potential gradient.

## Exam traps

- Using r from the **surface** rather than the centre for a charged sphere.
- Forgetting electric potential can be **positive or negative**, unlike gravitational.
- Applying E = V/d to a radial field — it only holds for uniform fields.
- Treating field strength (vector) and potential (scalar) alike; potentials **add algebraically**.
- Omitting 1/(4πε₀) or using the wrong power of r.
- Forgetting that the electronvolt relation (qV = ½mv²) only holds when all the accelerating work converts to kinetic energy, with no other force acting.

Related: [Electric Fields practice questions](/resources/a-physics-electric-fields-practice/) for further worked calculations.

## Self-test

1. State Coulomb's law and give the units of ε₀ term.
2. How does electric potential differ from gravitational potential in sign?
3. Two parallel plates 5 mm apart have a 200 V p.d. Find the field strength.
4. What path does a charged particle take entering a uniform field perpendicular to it?
5. Why is no work done moving a charge along an equipotential?
6. Find the field strength 0.20 m from a point charge of +5.0 × 10⁻⁶ C.
7. An electron is accelerated from rest through a p.d. of 500 V. Find its final speed.

**Answers:** 1. F = Q₁Q₂/(4πε₀r²); the constant 1/(4πε₀) ≈ 8.99 × 10⁹ N m² C⁻². 2. Gravitational potential is always negative because gravity is only attractive; electric potential is positive near a positive charge and negative near a negative charge. 3. E = V/d = 200/0.005 = **40 000 V/m**. 4. A parabola — constant velocity across the field, constant acceleration along it, exactly like projectile motion. 5. The force is perpendicular to the displacement at every point, so W = Fd cos 90° = 0. 6. E = 8.99 × 10⁹ × 5.0 × 10⁻⁶ ÷ 0.20² = **1.12 × 10⁶ N/C**, directed radially outward. 7. v = √(2qV/m) = √(2 × 1.60 × 10⁻¹⁹ × 500 ÷ 9.11 × 10⁻³¹) = **1.33 × 10⁷ m/s**.
