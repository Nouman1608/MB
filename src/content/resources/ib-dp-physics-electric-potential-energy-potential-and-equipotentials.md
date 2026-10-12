---
title: "IB DP Physics: Electric potential energy, potential and equipotentials (DP Physics)"
seoTitle: "IB DP Physics D.2 Electric Potential Study Guide (HL)"
resourceType: "study-guides"
subject: "physics"
level: ["ib"]
topic: "Electric potential energy, potential and equipotentials"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 291
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-d"
    subtopic: "ib-dp-physics-d-2"
description: "HL study guide to IB DP Physics D.2: electric potential energy, electric potential, potential gradient, work done and equipotentials, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide covers the additional higher level (AHL) part of sub-topic D.2, Electric and magnetic fields, from the IB *Physics guide* (first assessment 2025). Everything here is HL only (about six hours of teaching); SL candidates do not study it. It teaches each understanding from scratch, with worked calculations. For quick recall use the [revision notes](/resources/ib-dp-physics-electric-potential-energy-potential-and-equipotentials-revision-notes/), then try the [practice questions](/resources/ib-dp-physics-electric-potential-energy-potential-and-equipotentials-practice/). Find your gaps first with the [free 10-minute diagnostics](/diagnostics/).

Related: the [course hub](/boards/ib/ib-dp/physics/), the [printable checklist](/checklists/ib/ib-dp/physics/) and the [syllabus guide](/resources/ib-dp-physics-syllabus-guide/).

Constants used as data: k = 8.99 × 10⁹ N m² C⁻², e = 1.60 × 10⁻¹⁹ C, electron mass 9.11 × 10⁻³¹ kg, proton mass 1.67 × 10⁻²⁷ kg.

## What the AHL part of D.2 covers

| Understanding (all HL only) | What you must be able to do |
|---|---|
| Ep from assembly | Explain Ep as work done to assemble a system from infinite separation |
| Ep = kq₁q₂/r | Use it for two charged bodies |
| Electric potential | Scalar, zero at infinity; Ve = kQ/r as work per unit charge |
| Potential gradient | Use E = –ΔVe/Δr |
| Work done | Use W = qΔVe in joules and electronvolts |
| Equipotentials | Recognise them and relate them to field lines |

You must recognise equipotentials for a point charge, up to four point charges, solid and hollow charged conducting spheres (inside and outside) and two oppositely charged parallel plates. Coulomb's law, E = F/q and field lines belong to the shared SL and HL part of D.2 and are not retaught here.

## Electric potential energy

A pair of charges exert forces on each other, so the pair stores energy. The electric potential energy Ep of a system equals the work that an external agent must do to build it, bringing each charge in from infinite separation, where the charges do not interact and Ep is taken as zero.

For two charged bodies treated as points, separated by r:

**Ep = k q₁q₂ / r**

Keep the signs of q₁ and q₂.

- Like charges: Ep is positive. You do positive work to push them together.
- Unlike charges: Ep is negative. They attract, so you would have to do work to separate them to infinity.

### Worked example 1: two charges

A charge of +3.0 nC and a charge of –5.0 nC are 4.0 cm apart in a vacuum. Find the electric potential energy of the pair.

```
Ep = k q1 q2 / r
   = (8.99e9 × 3.0e-9 × (-5.0e-9)) / 0.040
   = -3.4e-6 J
```

The answer is –3.4 μJ, negative because the charges attract.

### Assembling more than two charges

For three or more charges, build the system one charge at a time from infinity. The first charge costs nothing, the second needs work against the first, and so on. The total is the sum of Ep for every pair, each pair counted once.

### Worked example 2: three charges at the corners of a triangle

Charges of +2.0 μC, +2.0 μC and –4.0 μC sit at the corners of an equilateral triangle of side 0.10 m. Find the total Ep.

```
Pair of the two +2.0 uC charges:
  Ep = 8.99e9 × (2.0e-6)(2.0e-6) / 0.10 = +0.360 J
Each pair of +2.0 uC and -4.0 uC:
  Ep = 8.99e9 × (2.0e-6)(-4.0e-6) / 0.10 = -0.719 J   (two such pairs)
Total = 0.360 + 2 × (-0.719) = -1.08 J
```

The order of assembly does not change the total, which is why you can add pairs.

## Electric potential

The electric potential Ve at a point equals the work done, for each coulomb of a small positive test charge, in carrying it in from infinity to that point. Its unit is the volt, V, where 1 V = 1 J C⁻¹. For a point charge Q (or outside a spherical charge distribution, measured from its centre):

**Ve = kQ / r**

Ve is a scalar: it has a sign but no direction. It is zero at infinity by definition. Positive Q gives positive Ve everywhere, and negative Q gives negative Ve.

For several sources, add the potentials as ordinary signed numbers. This is easier than adding field vectors.

### Worked example 3: single charge

Find the potential 0.30 m from a point charge of +6.0 nC.

```
Ve = kQ/r = 8.99e9 × 6.0e-9 / 0.30 = 1.8e2 V
```

The potential is 180 V.

### Worked example 4: two charges and zero potential

A +4.0 nC charge and a –1.0 nC charge are 0.50 m apart. Find (a) where on the line joining them the potential is zero, and (b) the potential at a point 0.10 m from the +4.0 nC charge, on the line, on the side away from the other charge.

(a) Between the charges, let x be the distance from the +4.0 nC charge. Then kQ₁/x + kQ₂/(0.50 – x) = 0.

```
4.0/x - 1.0/(0.50 - x) = 0
4.0(0.50 - x) = x
2.0 = 5.0x  ->  x = 0.40 m
```

So the potential is zero 0.40 m from the +4.0 nC charge. Another zero lies beyond the –1.0 nC charge: 4.0/(0.50 + y) = 1.0/y gives y = 0.17 m. Zero potential does not mean zero field.

(b) At 0.10 m from the +4.0 nC charge, away from the other, the distance to the –1.0 nC charge is 0.60 m.

```
Ve = 8.99e9 × (4.0e-9/0.10 - 1.0e-9/0.60) = 8.99e9 × 3.83e-8 = 3.4e2 V
```

The potential is about 340 V (345 V before rounding).


## Potential gradient: E = –ΔVe/Δr

The electric field strength is the negative of the rate of change of potential with distance. In the guide's form:

**E = –ΔVe/Δr**

The minus sign means the field points towards falling Ve. On a graph of Ve against r, E is minus the gradient of the tangent.

For parallel plates with potential difference V across a gap d, the gradient is constant and E = V/d.

### Worked example 5: plates and a point charge

Two plates 12 mm apart with a potential difference of 240 V: E = 240 / 0.012 = 2.0 × 10⁴ V m⁻¹.

For a point charge, Ve = kQ/r gives a gradient of –kQ/r², so the magnitude of E is kQ/r². For Q = +6.0 nC at r = 0.25 m:

```
Ve = 8.99e9 × 6.0e-9 / 0.25 = 216 V
|E| = 8.99e9 × 6.0e-9 / 0.25^2 = 863 V/m
```

## Work done in moving a charge

Work done by an external agent moving a charge q through a potential difference ΔVe is:

**W = qΔVe**

This is the change in the charge's electric potential energy. If the charge is released, the kinetic energy gained equals the potential energy lost.

- A positive charge moved to higher potential needs positive work from the agent.
- A negative charge moved to higher potential gives negative W: the field does the work.
- Moving along a path of constant potential gives W = 0.

Work in electric fields can be expressed in joules or electronvolts. One electronvolt is the work done on a charge e through 1 V, so 1 eV = 1.60 × 10⁻¹⁹ J. To convert joules to eV, divide by e.

### Worked example 6: electron through a potential difference

An electron is accelerated from rest through a potential difference of 450 V in a vacuum. Find the kinetic energy in J and in eV, and its final speed.

```
Kinetic energy = qΔV = 1.60e-19 × 450 = 7.2e-17 J = 450 eV
v = sqrt(2 × KE / m) = sqrt(2 × 7.2e-17 / 9.11e-31) = 1.3e7 m/s
```

The speed is 1.3 × 10⁷ m s⁻¹, small enough compared with the speed of light for the non-relativistic formula.

### Worked example 7: energy released

Two protons, 2.0 nm apart, are released from rest. How fast does each move when they are very far apart?

```
Ep = k e e / r = 8.99e9 × (1.60e-19)^2 / 2.0e-9 = 1.15e-19 J  (0.72 eV)
All Ep becomes KE, shared equally: 2 × (1/2) m v^2 = Ep
v = sqrt(Ep/m) = sqrt(1.15e-19 / 1.67e-27) = 8.3e3 m/s
```

Each proton moves at about 8.3 × 10³ m s⁻¹. The speeds are equal because the forces are equal and opposite and the masses are the same.

## Equipotential surfaces

An equipotential surface is a surface on which Ve has the same value everywhere. Moving a charge over such a surface needs no work, because ΔVe = 0. So the field has no component along the surface, and field lines cross equipotentials at right angles. Equipotentials drawn at equal steps in V are close together where the field is strong.

The shapes you must recognise:

| Source | Equipotentials |
|---|---|
| Single point charge | Concentric spheres (circles in a diagram), widely spaced far out |
| Up to four point charges | Pattern depends on the signs; use the rules below |
| Solid or hollow charged conducting sphere, outside | Concentric spheres, as for a point charge at the centre |
| Solid or hollow charged conducting sphere, inside | No field; the whole interior is at one potential equal to the surface value |
| Two oppositely charged parallel plates | Equally spaced planes parallel to the plates in the uniform region |

For a conducting sphere with charge Q and radius R, the surface potential is kQ/R and the interior keeps this constant value. The field outside is that of a point charge at the centre; inside it is zero. This agrees with E = –ΔVe/Δr: constant Ve means no gradient.

### Worked example 8: conducting sphere

A solid conducting sphere of radius 0.080 m is at a potential of 1500 V (relative to infinity). Find its charge, the potential 0.20 m from its centre, and the field strength at its surface.

```
Q = Ve R / k = 1500 × 0.080 / 8.99e9 = 1.3e-8 C
Ve at 0.20 m = 1500 × 0.080 / 0.20 = 6.0e2 V
E at surface = Ve / R = 1500 / 0.080 = 1.9e4 V/m
```

The charge is 13 nC, the potential at 0.20 m is 600 V and the surface field is 1.9 × 10⁴ V m⁻¹. Inside the sphere the potential is still 1500 V and the field is zero.

### Sketching equipotentials for several point charges

For up to four charges:

1. Sketch the field lines, leaving positive charges and entering negative ones.
2. Close to any one charge, draw small circles around it.
3. Far from the group, the pattern looks like one charge equal to the net charge (a dipole if the net charge is zero).
4. Draw equipotentials crossing every field line at right angles. They never cross each other.
5. Use symmetry. For two equal and opposite charges, the plane halfway between them has Ve = 0. For four charges at the corners of a square with signs alternating +, –, +, –, Ve = 0 along both lines through the centre that are parallel to the sides, and the centre is a point where the field is zero.

For four equal positive charges at the corners of a square, the field is zero at the centre and the equipotentials near it are closed loops. Between parallel plates, equipotentials bend outward near the edges, matching the edge effects in the field lines.

## Common errors

- Dropping signs in Ep = kq₁q₂/r. Negative Ep is correct for attraction.
- Adding potentials as vectors. Add signed numbers.
- Saying zero potential means zero field, or the reverse. Example 4 has zero potential with a field, and a charged conducting sphere has a field of zero but a non-zero potential inside.
- Forgetting to convert cm or mm to metres.
- Mixing electron-volts and joules in a kinetic energy equation. Convert to joules before finding a speed.

## Official syllabus

Source: *Physics guide*, first assessment 2025, International Baccalaureate Organization (Diploma Programme), sub-topic D.2 Electric and magnetic fields, additional higher level.
