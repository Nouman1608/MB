---
title: "AQA A-Level Physics (7408): Electric fields"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Fields and their consequences"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 7.3
syllabusTopics:
  - qualification: "a-level"
    topic: "fields-and-their-consequences"
    subtopic: "electric-fields-aqa-alevel"
description: "AQA A-Level Physics 7408 electric fields in depth: Coulomb's law, uniform and radial fields, deflecting charged particles, potential, gradients and areas."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This study guide goes deeper into sub-section 3.7.3 Electric fields of the AQA AS and A-level Physics specification (7407/7408, AS and A-level exams June 2016 onwards): 3.7.3.1 Coulomb's law, 3.7.3.2 Electric field strength and 3.7.3.3 Electric potential. It is **A-level only** and assessed in Paper 2.

The whole of section 3.7 is summarised in the [Fields and their consequences study guide](/resources/aqa-a-level-physics-fields-and-their-consequences/). Use the [electric fields revision notes](/resources/aqa-a-level-physics-7408-electric-fields-aqa-alevel-revision-notes/) for recall and the [electric fields practice questions](/resources/aqa-a-level-physics-7408-electric-fields-aqa-alevel-practice/) to test yourself. The comparison with gravity is developed in the [fields study guide](/resources/aqa-a-level-physics-7408-fields-aqa-alevel/).

Values used: 1/4πε₀ = 8.99 × 10⁹ N m² C⁻² (ε₀ = 8.85 × 10⁻¹² F m⁻¹), e = 1.60 × 10⁻¹⁹ C, mₑ = 9.11 × 10⁻³¹ kg.

## What this subtopic covers

| Spec ref | Content |
|---|---|
| 3.7.3.1 | F = (1/4πε₀)Q₁Q₂/r² in a vacuum; ε₀; air treated as a vacuum; charge on a sphere acts at its centre; electrostatic versus gravitational forces between subatomic particles |
| 3.7.3.2 | Field lines; E = F/Q; uniform field E = V/d and its derivation from Fd = QΔV; path of a charged particle entering a uniform field at right angles; radial field E = (1/4πε₀)Q/r² |
| 3.7.3.3 | Absolute potential (zero at infinity) and potential difference; ΔW = QΔV; equipotentials; V = (1/4πε₀)Q/r; graphs of E and V against r; E = ΔV/Δr; ΔV from area under E–r |

## Coulomb's law and estimation

Coulomb's law gives the force between two point charges: proportional to the product of the charges, inversely proportional to the square of the separation. Like charges repel and unlike charges attract; the forces on the two charges are equal and opposite. The specification lets you treat air as a vacuum, and a uniformly charged sphere as a point charge at its centre (outside the sphere).

**Estimates.** Two rubbed balloons each carrying about 50 nC, 0.20 m apart, repel with F = 8.99 × 10⁹ × (50 × 10⁻⁹)²/0.20² ≈ 6 × 10⁻⁴ N. In a hydrogen atom, the proton and electron about 5.3 × 10⁻¹¹ m apart attract with about 8 × 10⁻⁸ N. That looks tiny, but on an electron of mass 9.11 × 10⁻³¹ kg it produces an enormous acceleration.

## Field strength: uniform and radial

**E = F/Q** is the force per unit positive charge (N C⁻¹). Field lines run from positive to negative charge, and their direction at a point is the direction of the force on a positive test charge.

**Uniform field derivation.** Between parallel plates with potential difference V and separation d, moving charge Q across the gap against a constant force F requires work Fd. By definition of potential difference this work is QV. So Fd = QV, giving F/Q = V/d, and E = V/d (V m⁻¹, the same unit as N C⁻¹). Halving d at fixed V doubles E.

**Radial field.** E = (1/4πε₀)Q/r², pointing away from a positive charge.

## Deflecting charged particles

A particle entering a uniform field at right angles has no force along the plates, so its velocity component in that direction is constant. Across the plates it has a constant force QE, so a constant acceleration QE/m. The path is a **parabola**, exactly like a horizontally launched projectile; after leaving the plates it moves in a straight line.

**Worked example 1: accelerate, then deflect.** An electron is accelerated from rest through 2000 V, then enters midway between plates 4.0 cm long and 2.0 cm apart with a potential difference of 300 V between them.

```
Acceleration stage:  eV = ½mv²  →  v = √(2 × 1.60 × 10⁻¹⁹ × 2000/9.11 × 10⁻³¹)
                     v = 2.65 × 10⁷ m s⁻¹
Deflection stage:    E = 300/0.020 = 1.5 × 10⁴ V m⁻¹
                     a = eE/m = 2.63 × 10¹⁵ m s⁻²
                     t = 0.040/2.65 × 10⁷ = 1.51 × 10⁻⁹ s
                     y = ½at² = 3.0 × 10⁻³ m towards the positive plate
                     v_y = at = 3.98 × 10⁶ m s⁻¹;  exit angle = tan⁻¹(v_y/v) = 8.5°
```

Combining the stages algebraically gives y = V_d L²/(4dV_a), with no e or m in it: every charged particle accelerated through the same potential difference follows the same path through the plates. The time spent between the plates does depend on the particle.

## Electric potential

**Absolute electric potential** at a point is the work done per unit positive charge in bringing a small positive charge from infinity to that point, with V = 0 at infinity. Near a positive charge V is positive (work is needed to push a positive charge in); near a negative charge V is negative. **ΔW = QΔV** gives the work done moving Q through a potential difference ΔV.

**Potential is a scalar.** To find the potential at a point due to several charges, add the individual potentials with their signs. To find the field, add vectors.

**Worked example 2: field and potential together.** +3.0 nC sits at A and −1.0 nC at B, 0.20 m apart. Find E and V at the midpoint M.

```
V = 8.99 × 10⁹ × (3.0 × 10⁻⁹ − 1.0 × 10⁻⁹)/0.10 = 180 V
E from A: 8.99 × 10⁹ × 3.0 × 10⁻⁹/0.10² = 2.70 × 10³ N C⁻¹, away from A (towards B)
E from B: 8.99 × 10⁹ × 1.0 × 10⁻⁹/0.10² = 0.90 × 10³ N C⁻¹, towards B
E = 3.6 × 10³ N C⁻¹ towards B
```

The two fields add because both point towards B, while the potentials partly cancel because they have opposite signs.

**Worked example 3: a charged dome.** A spherical dome of radius 0.15 m is at a potential of 60 kV.

```
Q = 4πε₀rV = 0.15 × 6.0 × 10⁴/8.99 × 10⁹ = 1.0 × 10⁻⁶ C
E at surface = Q/(4πε₀r²) = V/r = 6.0 × 10⁴/0.15 = 4.0 × 10⁵ V m⁻¹
```

**Worked example 4: closest approach.** A 5.0 MeV alpha particle (charge 2e) heads straight for a gold nucleus (charge 79e). At closest approach all its kinetic energy has become electric potential energy, QV:

```
E_k = 5.0 × 10⁶ × 1.60 × 10⁻¹⁹ = 8.0 × 10⁻¹³ J
8.0 × 10⁻¹³ = 8.99 × 10⁹ × (2 × 1.60 × 10⁻¹⁹)(79 × 1.60 × 10⁻¹⁹)/r
r = 4.5 × 10⁻¹⁴ m
```

## Graphs of E and V against r

Outside a positive point charge or sphere, E falls as 1/r² and V falls as 1/r. Two links connect them:

- **E = ΔV/Δr** (in magnitude): the field is the gradient of the V–r graph. Draw a tangent and measure its gradient.
- **ΔV = area under the E–r graph** between two radii.

**Worked example 5: field from two potential readings.** V = 300 V at 0.12 m and 240 V at 0.15 m from a charged sphere. The average gradient gives E ≈ 60/0.030 = 2.0 × 10³ V m⁻¹ around r = 0.135 m. (The exact value there, using Q = 4.0 nC from the first reading, is 1.98 × 10³ V m⁻¹: the chord gradient is a good estimate when the interval is small.)

Mapping field patterns: conducting paper (2D) or an electrolytic tank (3D) with a voltmeter probe lets you trace equipotentials and so infer field lines at right angles to them.

## Common mistakes

- Squaring r in V = Q/4πε₀r, or not squaring it in E.
- Adding potentials as vectors, or fields without directions.
- Using the plate length instead of the separation in E = V/d.
- Assuming the speed along the plates changes during deflection.
- Forgetting to convert MeV or keV to joules.
- Thinking zero potential means zero field.

## Exam technique for AQA command words

- **Derive** (E = V/d): state work done = Fd, equate to QV, rearrange.
- **Describe** (path in a field): name the shape, say which velocity component is constant and why.
- **Calculate** (two-charge problems): set out each contribution on its own line with its direction or sign.
- **Explain** (graphs): name gradient or area and what it gives.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.7.3 Electric fields (A-level only).
