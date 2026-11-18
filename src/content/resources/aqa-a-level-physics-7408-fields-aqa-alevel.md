---
title: "AQA A-Level Physics (7408): Fields"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Fields and their consequences"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 7.1
syllabusTopics:
  - qualification: "a-level"
    topic: "fields-and-their-consequences"
    subtopic: "fields-aqa-alevel"
description: "AQA A-Level Physics 7408 section 3.7.1 Fields in depth: force fields as vectors, field lines, equipotentials, neutral points and gravity versus electrostatics."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This study guide goes deeper into sub-section 3.7.1 Fields of the AQA AS and A-level Physics specification (7407/7408, AS and A-level exams June 2016 onwards). It is **A-level only** and assessed in Paper 2. Section 3.7.1 is short in the specification but it supplies the framework for everything else in section 3.7: gravitational fields, electric fields, capacitance and magnetic fields all use the same language of field strength, field lines and potential.

For the whole of section 3.7 see the [Fields and their consequences study guide](/resources/aqa-a-level-physics-fields-and-their-consequences/). For recall use the [fields revision notes](/resources/aqa-a-level-physics-7408-fields-aqa-alevel-revision-notes/), and practise with the [fields practice questions](/resources/aqa-a-level-physics-7408-fields-aqa-alevel-practice/).

Values used: G = 6.67 × 10⁻¹¹ N m² kg⁻², 1/4πε₀ = 8.99 × 10⁹ N m² C⁻²; Earth mass 5.97 × 10²⁴ kg; Moon mass 7.35 × 10²² kg; Earth–Moon distance 3.84 × 10⁸ m.

## What the specification asks

3.7.1 has four content statements:

| Statement | What it means in practice |
|---|---|
| A force field is "a region in which a body experiences a non-contact force" | Contact forces (friction, tension, normal reaction) are not field forces |
| A force field can be represented as a vector whose direction is "determined by inspection" | Decide the direction from the physical situation, then add vectors |
| Force fields arise from mass, from static charge and between moving charges | Gravitational, electric and magnetic fields respectively |
| Similarities and differences between gravitational and electrostatic forces | Both inverse-square, both use field lines, potential and equipotentials; masses always attract, charges may attract or repel |

## Field strength as a vector

Field strength is force per unit of the property the field acts on: per kilogram for gravity (g = F/m, in N kg⁻¹) and per coulomb of positive charge for electric fields (E = F/Q, in N C⁻¹ or V m⁻¹). Being force per unit, it has the direction of the force on a **test object**: a small mass, or a small positive charge, that does not disturb the field it measures.

**"Determined by inspection"** means you do not need a formula for direction. Ask: which way would a test mass, or a positive test charge, be pushed? A gravitational field points towards each mass. An electric field points away from a positive charge and towards a negative one. When two sources act at a point, find each field's magnitude, decide each direction by inspection, and add them as vectors.

## Field lines and equipotentials

Field lines are drawn so that:

- the arrow shows the direction of force on the test object;
- the closer the lines, the stronger the field;
- lines never cross, because the field has one direction at each point;
- a **uniform** field has parallel, equally spaced lines (near Earth's surface over a small region; between charged parallel plates);
- a **radial** field has lines along radii from a point mass or point charge (or a sphere, treated as a point at its centre).

**Equipotential surfaces** join points of equal potential. They always cross field lines at right angles, and no work is done moving along one. In a uniform field they are equally spaced planes; in a radial field they are concentric spheres that get **further apart** with distance for equal steps of potential, because the field weakens.

**Worked example 1: equipotential spacing.** For a point charge of +2.0 nC, V = (1/4πε₀)Q/r.

```
r = 0.10 m: V = 8.99 × 10⁹ × 2.0 × 10⁻⁹/0.10 = 180 V
r = 0.20 m: V = 90 V
r = 0.30 m: V = 60 V
r = 0.40 m: V = 45 V
```

Going from 180 V to 90 V takes 0.10 m, but going from 90 V to 45 V takes 0.20 m. Equal potential steps spread out as the field weakens.

## Gravity and electrostatics side by side

| Feature | Gravitational | Electrostatic |
|---|---|---|
| Acts on | mass | charge |
| Force law | F = Gm₁m₂/r² | F = (1/4πε₀)Q₁Q₂/r² |
| Field strength (radial) | g = GM/r² | E = (1/4πε₀)Q/r² |
| Potential (radial) | V = −GM/r | V = (1/4πε₀)Q/r |
| Work done | ΔW = mΔV | ΔW = QΔV |
| Field from potential | g = −ΔV/Δr | E = ΔV/Δr (magnitude) |
| Area under field–r graph | ΔV | ΔV |
| Direction | always attractive | like charges repel, unlike attract |
| Sign of potential | always negative | sign of the source charge |

Both laws are inverse-square: doubling the separation quarters the force. The structural similarity means you can learn one set of ideas and transfer it, with G replaced by 1/4πε₀ and mass by charge. The key physical difference is that there is no negative mass, so gravitational potential is negative everywhere and gravity can never repel.

**Worked example 2: comparing magnitudes.** Find the ratio of electrostatic to gravitational force between two alpha particles (charge 3.2 × 10⁻¹⁹ C, mass 6.64 × 10⁻²⁷ kg) at any separation.

```
F_E/F_G = (1/4πε₀)q² / (Gm²)          (r² cancels)
        = 8.99 × 10⁹ × (3.2 × 10⁻¹⁹)² / (6.67 × 10⁻¹¹ × (6.64 × 10⁻²⁷)²)
        = 3.1 × 10³⁵
```

Because the separation cancels, the ratio is the same at every distance. Gravity is negligible for charged particles, but it dominates for planets and stars because large bodies are electrically neutral overall.

## Combining fields: neutral points

A **neutral point** is where the resultant field strength is zero. It exists only where the two fields point in opposite directions.

**Worked example 3: the Earth–Moon neutral point.** Find where on the line between their centres the resultant gravitational field is zero.

Between the bodies the Earth's field points towards the Earth and the Moon's towards the Moon, so they can cancel. Let x be the distance from the Earth's centre and d the separation.

```
GM_E/x² = GM_M/(d − x)²
x/(d − x) = √(M_E/M_M) = √(81.2) = 9.01
x = 9.01d/10.01 = 0.900d = 3.46 × 10⁸ m from the Earth's centre
```

The neutral point is nine-tenths of the way to the Moon, because the field strength depends on M/r² and the Earth is about 81 times more massive.

**Worked example 4: two positive charges.** Charges of +4.0 nC and +1.0 nC are 0.30 m apart. Between them, the fields point away from each charge, so in opposite directions.

```
4.0/x² = 1.0/(0.30 − x)²  →  2.0/x = 1.0/(0.30 − x)
0.60 − 2.0x = x  →  x = 0.20 m from the +4.0 nC charge
```

**Opposite charges are different.** For +Q and −Q, the fields between them both point from + towards −, so they add and there is no neutral point between them. Midway between +2.0 nC and −2.0 nC that are 0.10 m apart, each field is 8.99 × 10⁹ × 2.0 × 10⁻⁹/0.050² = 7.2 × 10³ N C⁻¹, and the resultant is 1.4 × 10⁴ N C⁻¹ towards the negative charge.

## Fields between moving charges

The third source in the specification, interaction between moving charges, is the magnetic field. A current is moving charge, so a current-carrying wire produces a magnetic field and experiences a force in one. The details (F = BIl, F = BQv) belong to [magnetic fields](/resources/aqa-a-level-physics-7408-magnetic-fields-aqa-alevel/). For 3.7.1 you need to recognise that magnetic forces act only on moving charges, while electric forces act on charges whether or not they move.

## Common mistakes

- Calling friction or tension a field force.
- Drawing field lines that cross, or showing gravitational lines pointing away from a mass.
- Drawing equipotentials that are not perpendicular to field lines.
- Looking for a neutral point between unlike charges.
- Stating that gravity and electrostatics differ because one is inverse-square and the other is not.
- Forgetting that potential is a scalar: potentials from two sources add without direction.

## Exam technique for AQA command words

- **Define**: give the specification wording exactly, for example "a region in which a body experiences a non-contact force".
- **Compare**: state a similarity and a difference, and name both fields in each point.
- **Sketch** or **draw**: show direction arrows, the spacing that shows strength, and equipotentials at right angles to field lines.
- **Calculate** (resultant field): state each direction in words before adding, and give the resultant's direction in your answer.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.7.1 Fields (A-level only).
