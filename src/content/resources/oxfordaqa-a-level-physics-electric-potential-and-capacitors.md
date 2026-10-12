---
title: "OxfordAQA International AS and A-level Physics: Electric potential and capacitors (9630)"
seoTitle: "OxfordAQA A-level Physics Electric Potential Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Electric potential and capacitors"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 118
syllabusTopics:
  - qualification: "a-level"
    topic: "electric-fields-and-capacitance"
    subtopic: "electric-potential-oxfordaqa"
  - qualification: "a-level"
    topic: "electric-fields-and-capacitance"
    subtopic: "capacitors-oxfordaqa-alevel"
description: "Study guide to electric potential, equipotentials, capacitance, dielectrics and stored energy for OxfordAQA A-level Physics, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide follows the OxfordAQA International AS and A-level Physics (9630) specification, Version 4.4, for exams from May/June 2020 onwards. It covers sections 3.8.3 (Electric potential) and 3.8.4 (Capacitors). Section 3.8 is marked International A-level only, so it is not part of the International AS qualification. Use the [course hub](/boards/oxfordaqa/a-level/physics/) and the [printable checklist](/checklists/oxfordaqa/a-level/physics/) to track your progress.

Companion pages: the [revision notes](/resources/oxfordaqa-a-level-physics-electric-potential-and-capacitors-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-physics-electric-potential-and-capacitors-practice/). If you are unsure where you stand, try a [free diagnostic](/diagnostics/) first. You should already know 3.8.1 and 3.8.2 (Coulomb's law and electric field strength).

Data for the examples, as a question would supply them: permittivity of free space ε₀ = 8.85 × 10⁻¹² F m⁻¹; elementary charge e = 1.60 × 10⁻¹⁹ C; proton mass 1.67 × 10⁻²⁷ kg. Then 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻².

## What 3.8.3 and 3.8.4 ask you to do

| Section | What you must be able to do |
|---|---|
| 3.8.3 | Define absolute electric potential (zero at infinity) and potential difference |
| 3.8.3 | Use the work done in moving a charge, ΔW = QΔV |
| 3.8.3 | Explain equipotential surfaces and why no work is done along them |
| 3.8.3 | Use V = Q/(4πε₀r) for a radial field |
| 3.8.3 | Sketch and interpret graphs of E and V against r; use E = −ΔV/Δr; find ΔV from the area under an E against r graph |
| 3.8.4 | Define capacitance, C = Q/V |
| 3.8.4 | Use C = Aε₀ε_r/d for a parallel plate capacitor; explain relative permittivity and dielectric constant |
| 3.8.4 | Describe how a polar molecule rotating in a field gives dielectric action |
| 3.8.4 | Find the energy stored from the area under a Q against V graph: ½QV = ½CV² = Q²/2C |

## Electric potential (3.8.3)

### Definitions

The absolute electric potential V at a point is the energy transferred, per coulomb of positive test charge, when a small test charge is moved in from infinity to that point. Infinity is the zero of potential. The unit is the volt, V = J C⁻¹.

Potential difference between two points is the work done per unit charge in moving a charge from one point to the other. Potential is a scalar, so potentials from several charges add as plain numbers, with signs.

Near a positive charge, you must do work on a positive test charge to push it in, so V is positive. Near a negative charge, V is negative. This differs from gravity, where V is always negative.

### Work done: ΔW = QΔV

Moving a charge Q through a potential difference ΔV involves work ΔW = QΔV. If the charge is released and the field does the work, this appears as kinetic energy.

**Worked example 1.** A proton is accelerated from rest through a potential difference of 2.5 kV in a vacuum. Find its kinetic energy and final speed.

```
ΔW = QΔV = 1.60 × 10⁻¹⁹ × 2.5 × 10³ = 4.0 × 10⁻¹⁶ J
½mv² = 4.0 × 10⁻¹⁶
v = √(2 × 4.0 × 10⁻¹⁶ / 1.67 × 10⁻²⁷) = 6.9 × 10⁵ m s⁻¹
```

The result does not depend on the path taken, only on the potential difference.

### Equipotentials

An equipotential surface joins points at the same potential. Moving a charge along one needs no work, since ΔV = 0 gives ΔW = 0. So the electric field has no component along an equipotential: field lines cross equipotentials at right angles.

- Point charge or charged sphere: concentric spherical surfaces.
- Uniform field between parallel plates: flat planes parallel to the plates, equally spaced for equal steps in potential.

Where equipotentials for equal steps in V are closer together, the field is stronger.

### Radial field: V = Q/(4πε₀r)

For a point charge, or a sphere treated as a point charge at its centre, the magnitude of the potential at distance r is

V = Q/(4πε₀r)

Q carries its sign. V falls as 1/r, so it falls more slowly with distance than E, which falls as 1/r².

**Worked example 2.** Charges of +5.0 nC and −2.0 nC are 0.30 m apart in air (treated as a vacuum). Find V at a point on the line between them, 0.10 m from the positive charge. Where between them is V zero?

```
Distance from the −2.0 nC charge = 0.30 − 0.10 = 0.20 m
V = 8.99 × 10⁹ × (5.0 × 10⁻⁹ / 0.10) + 8.99 × 10⁹ × (−2.0 × 10⁻⁹ / 0.20)
  = 449.5 − 89.9 = 360 V

Zero at x from the +5.0 nC charge: 5.0/x = 2.0/(0.30 − x)
5.0(0.30 − x) = 2.0x, so x = 1.5/7.0 = 0.21 m
```

V is also zero at 0.50 m from the positive charge, on the far side of the negative one, but not between them.

### Graphs of E and V against r

For r outside the charge (or the sphere's surface), with a positive charge:

| Graph | Shape | Reason |
|---|---|---|
| V against r | Curve that starts high and falls towards zero; V ∝ 1/r | V = Q/(4πε₀r) |
| E against r | Steeper curve falling towards zero; E ∝ 1/r² | E = Q/(4πε₀r²) |

For a negative charge both V and the E direction flip: V is negative and rises towards zero. If you draw magnitudes only, say so on the axis. On a graph of V against r, doubling r halves V; on the graph of E, doubling r quarters E.

### E = −ΔV/Δr and the area under E against r

The field strength is the negative of the potential gradient: E = −ΔV/Δr. The magnitude is the gradient of the V–r graph. The minus sign says that E points in the direction of falling potential. In a uniform field this gives E = V/d between plates a distance d apart.

Conversely, ΔV is the area under an E against r graph between two radii (magnitudes, ignoring the sign convention).

**Worked example 3.** A sphere carries +3.2 nC. Find the potential difference between points 0.050 m and 0.070 m from its centre, and the mean field strength between them.

```
V at 0.050 m = 8.99 × 10⁹ × 3.2 × 10⁻⁹ / 0.050 = 575 V
V at 0.070 m = 8.99 × 10⁹ × 3.2 × 10⁻⁹ / 0.070 = 411 V
ΔV = 575 − 411 = 164 V
mean E = ΔV/Δr = 164 / 0.020 = 8.2 × 10³ V m⁻¹
```

Check with the formula at the midpoint: E at 0.060 m is 8.99 × 10⁹ × 3.2 × 10⁻⁹ / 0.060² = 8.0 × 10³ V m⁻¹. The mean is a little bigger because the field is stronger near the inner point, so the chord slope is not the field at the midpoint.

The area under E = Q/(4πε₀r²) between r₁ and r₂ is exactly (Q/4πε₀)(1/r₁ − 1/r₂), which is the same 164 V.

## Capacitors (3.8.4)

### Capacitance

Capacitance is the charge stored per unit potential difference across the capacitor: C = Q/V. The unit is the farad, F = C V⁻¹. Here Q is the magnitude of the charge on either plate, not the total charge of the capacitor, which is zero.

### Parallel plate capacitor

C = Aε₀ε_r/d

where A is the overlap area of the plates, d their separation, ε₀ the permittivity of free space and ε_r the relative permittivity of the material between them. A bigger area, a thinner gap or a better dielectric each increases C.

Relative permittivity ε_r is the ratio of the permittivity of the material to ε₀. It is the factor by which the capacitance rises when the dielectric fills the gap. The term dielectric constant refers to this same quantity. It has no unit, and a vacuum (and so air, to a good approximation) has ε_r = 1.

### Dielectric action: polar molecules

A polar molecule has one end slightly positive and the other slightly negative even without an applied field. Water is an example.

1. With no field, the molecules point in random directions, so there is no net effect.
2. When the plates are charged, the field exerts opposite forces on the two ends of each molecule. These form a couple that rotates the molecule to line up (partly, because thermal motion resists) with the field.
3. Inside the dielectric the aligned molecules cancel, but a layer of negative ends faces the positive plate and a layer of positive ends faces the negative plate.
4. These surface layers produce a field opposing the applied field, so the net field in the gap is smaller.
5. For the same charge Q the pd V is therefore smaller. Because C = Q/V, the capacitance is larger.

**Worked example 4.** A parallel plate capacitor has square plates of side 0.15 m, separated by 0.50 mm of material with ε_r = 2.3. Find its capacitance, the charge at 12 V, and the energy stored.

```
A = 0.15² = 0.0225 m²
C = 8.85 × 10⁻¹² × 2.3 × 0.0225 / 0.50 × 10⁻³ = 9.2 × 10⁻¹⁰ F (916 pF)
Q = CV = 9.16 × 10⁻¹⁰ × 12 = 1.1 × 10⁻⁸ C
Energy = ½CV² = ½ × 9.16 × 10⁻¹⁰ × 12² = 6.6 × 10⁻⁸ J
```

Without the material (air), C would be 398 pF, and ε_r = 916/398 = 2.3, as it should.

### Energy stored

A graph of charge stored against pd is a straight line through the origin with gradient C. As the capacitor charges, each extra small charge ΔQ is moved through the pd V that exists at that moment, so the work is VΔQ, a thin strip of area. The total energy is the area under the line, a triangle:

E = ½QV = ½CV² = Q²/(2C)

Pick the form that fits your data: ½QV if you know Q and V, ½CV² if you know C and V, Q²/(2C) if you know Q and C.

**Worked example 5.** A 470 μF capacitor is charged to 9.0 V. Find the charge and the energy stored.

```
Q = CV = 470 × 10⁻⁶ × 9.0 = 4.2 × 10⁻³ C
E = ½QV = ½ × 4.23 × 10⁻³ × 9.0 = 1.9 × 10⁻² J
check: ½CV² = ½ × 470 × 10⁻⁶ × 81 = 1.9 × 10⁻² J
```

Doubling the pd across a capacitor multiplies the energy by four, since E ∝ V².

### Dielectric inserted: connected or isolated

- Isolated (battery removed): Q stays fixed. C rises by ε_r, so V falls by ε_r and the energy Q²/2C falls by ε_r.
- Connected to a battery: V stays fixed. C rises, so Q rises and the energy ½CV² rises by ε_r. The battery supplies the extra charge.

## Common errors

- Writing V = Q/(4πε₀r²). The potential has r, not r².
- Treating potentials as vectors. Add them as signed numbers.
- Forgetting the minus sign in a potential from a negative charge.
- Using Q as the total charge on both plates (zero) in C = Q/V. Use the magnitude on one plate.
- Saying the field "cancels" in the dielectric. It is reduced, not removed.
- Leaving d in millimetres or C in microfarads when substituting.
- Saying no force acts on a charge on an equipotential. The force is perpendicular to the surface, but no work is done.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630) specification, Version 4.4, for exams from May/June 2020 onwards, published by OxfordAQA. Sections 3.8.3 and 3.8.4.
