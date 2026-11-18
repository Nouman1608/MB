---
title: "OxfordAQA A-Level Physics (9630): Moving charges in a magnetic field"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.10 – Magnetic fields"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 10.2
syllabusTopics:
  - qualification: "a-level"
    topic: "magnetic-fields-oxfordaqa-alevel"
    subtopic: "moving-charges-in-a-magnetic-field-oxfordaqa-alevel-physics"
description: "Study guide to OxfordAQA 9630 section 3.10.2: F = BQv, directions for positive and negative charges, circular paths, specific charge and the cyclotron."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.10.2, Moving charges in a magnetic field, in Section 3.10 Magnetic fields (International A-level only). For a first pass through 3.10.1 and 3.10.2 together, use the [force on conductors and moving charges study guide](/resources/oxfordaqa-a-level-physics-force-on-conductors-and-moving-charges-in-magnetic/). After this page, condense it with the [moving charges revision notes](/resources/oxfordaqa-a-level-physics-9630-moving-charges-in-a-magnetic-field-oxfordaqa-alevel-physics-revision-notes/) and test yourself with the [moving charges practice questions](/resources/oxfordaqa-a-level-physics-9630-moving-charges-in-a-magnetic-field-oxfordaqa-alevel-physics-practice/).

Data used: e = 1.60 × 10⁻¹⁹ C; masses: electron 9.11 × 10⁻³¹ kg, proton 1.67 × 10⁻²⁷ kg, alpha particle 6.64 × 10⁻²⁷ kg (charge +2e).

## What the specification asks for

| Statement in 3.10.2 | What you must be able to do |
|---|---|
| Force on charged particles moving in a magnetic field: F = BQv when the field is perpendicular to velocity | Calculate the force and use it with Newton's second law |
| Direction of force on positive and negative charged particles | Apply Fleming's left-hand rule to both |
| Circular path of particles; application in devices such as the cyclotron | Derive and use r = mv/(BQ), the period and the frequency, and explain a cyclotron |

## From F = BIL to F = BQv

A current is moving charge. If charges Q move at speed v along a wire, a length L contains charge that takes time L/v to pass a point, so I = Q/(L/v) = Qv/L. Then BIL = B(Qv/L)L = BQv. The force on a wire is the sum of the forces on the moving charges inside it.

F = BQv applies with the velocity perpendicular to the field. A charge moving along the field lines feels no force, and a charge at rest feels no magnetic force at all.

## Directions

Fleming's left-hand rule uses conventional current, so:

- **Positive particle:** second finger along the velocity.
- **Negative particle:** second finger opposite to the velocity, because a negative charge moving one way is equivalent to conventional current the other way.

For the same velocity and field, a proton and an electron are pushed in opposite directions. In a cloud or bubble chamber photograph, or a deflection-tube diagram, this lets you identify the sign of a particle from the way its track curves, provided you know the field direction.

## Circular motion

The force is always perpendicular to the velocity. Two consequences:

1. **The force does no work.** There is no displacement in the direction of the force, so the kinetic energy and speed stay constant. Only the direction of motion changes.
2. **The force has a constant size and is always perpendicular to the motion**, so it provides a centripetal force and the path is a circle in the plane perpendicular to the field.

BQv = mv²/r, so

r = mv/(BQ)

Since mv is the momentum p, r = p/(BQ). A faster or heavier particle makes a wider circle; a stronger field or a larger charge makes a tighter one.

The time for one orbit is T = 2πr/v = 2πm/(BQ), and the frequency is f = BQ/(2πm). Neither depends on speed or radius: a faster particle travels a bigger circle in the same time. This fact makes the cyclotron possible.

### Comparing particles

Questions often give two particles and ask which curves more. Choose the form of r that matches what is the same for both:

| Same for both particles | Use | Radius depends on |
|---|---|---|
| Speed | r = mv/(BQ) | m/Q |
| Momentum | r = p/(BQ) | 1/Q |
| Kinetic energy Ek | r = √(2mEk)/(BQ) | √m / Q |
| Accelerating p.d. V | r = √(2mV/Q)/B | √(m/Q) |

### Worked example 1: equal kinetic energies

A proton and an alpha particle each have 2.0 MeV of kinetic energy and move at right angles to a 0.50 T field. Compare the radii.

Ek = 2.0 × 10⁶ × 1.60 × 10⁻¹⁹ = 3.2 × 10⁻¹³ J.

Proton: r = √(2 × 1.67 × 10⁻²⁷ × 3.2 × 10⁻¹³) / (1.60 × 10⁻¹⁹ × 0.50) = **0.41 m**.

Alpha: r = √(2 × 6.64 × 10⁻²⁷ × 3.2 × 10⁻¹³) / (3.20 × 10⁻¹⁹ × 0.50) = **0.41 m**.

The alpha particle has about four times the mass (doubling √m) and twice the charge (halving r), so the effects cancel. The proton moves twice as fast (2.0 × 10⁷ m s⁻¹ against 9.8 × 10⁶ m s⁻¹), but the curvature is the same.

### Worked example 2: specific charge of the electron

Electrons accelerated from rest through 250 V enter a uniform field of 1.2 mT at right angles and follow a circle of radius 4.4 cm. Find their specific charge e/m.

Energy: eV = ½mv², so v = √(2eV/m).

Circle: r = mv/(eB). Squaring and substituting v² = 2eV/m gives r² = 2mV/(eB²), so

e/m = 2V/(B²r²) = 2 × 250 / ((1.2 × 10⁻³)² × 0.044²) = **1.8 × 10¹¹ C kg⁻¹**.

This is close to the accepted value of 1.76 × 10¹¹ C kg⁻¹. The radius appears squared, so a 2% error in r gives a 4% error in e/m.

## Combining electric and magnetic fields: selecting a speed

If a uniform electric field and a uniform magnetic field are arranged at right angles to each other and to the beam, the electric force QE and the magnetic force BQv can be made to act in opposite directions. A particle passes straight through when

QE = BQv, so v = E/B

The charge and mass cancel, so the arrangement passes particles of one speed only, whatever their charge or mass. Faster particles feel a larger magnetic force and are deflected one way; slower particles are deflected the other way.

### Worked example 3

Plates 5.0 mm apart have 300 V across them, and a perpendicular magnetic field of 0.020 T acts in the same region. E = 300 / 0.0050 = 6.0 × 10⁴ V m⁻¹, so the selected speed is v = 6.0 × 10⁴ / 0.020 = **3.0 × 10⁶ m s⁻¹**.

This uses E = V/d from section 3.8.2; such a selector is often placed before a magnetic field so that every particle entering the field has the same speed, and differences in radius then come from differences in m/Q.

## The cyclotron

1. Two hollow D-shaped electrodes (dees) sit in a vacuum, with a uniform magnetic field perpendicular to them.
2. An alternating p.d. across the gap between the dees accelerates the particles each time they cross the gap.
3. Inside a dee there is no electric field, so the particle moves in a semicircle at constant speed.
4. Each semicircle takes the same time, πm/(BQ), whatever the speed, so an alternating p.d. of fixed frequency f = BQ/(2πm) reverses at the right moments.
5. The radius grows with each crossing until the particle reaches the edge and is extracted.

At the edge, radius R: v = BQR/m, so the maximum kinetic energy is Ek = B²Q²R²/(2m). It depends on the field and the size of the dees, not on the gap p.d. A larger p.d. means fewer revolutions to reach the same energy.

### Worked example 4: an alpha-particle cyclotron

B = 1.5 T, dee radius 0.40 m, peak gap p.d. 30 kV.

Frequency: f = 1.5 × 3.20 × 10⁻¹⁹ / (2π × 6.64 × 10⁻²⁷) = **1.2 × 10⁷ Hz**.

Exit speed: v = 1.5 × 3.20 × 10⁻¹⁹ × 0.40 / 6.64 × 10⁻²⁷ = 2.9 × 10⁷ m s⁻¹.

Maximum kinetic energy: ½mv² = **2.8 × 10⁻¹² J** (about 17 MeV).

Each revolution crosses the gap twice, gaining 2 × 2e × 30 kV = 120 keV, so the particle makes about 2.78 × 10⁻¹² / (2 × 3.20 × 10⁻¹⁹ × 3.0 × 10⁴) ≈ **145 revolutions**.

## Common mistakes

- Pointing the second finger along an electron's velocity.
- Saying the magnetic force speeds the particle up. It changes direction only.
- Using r = mv/(BQ) with the wrong charge for an alpha particle (it is 2e).
- Thinking a faster particle completes its orbit faster. The period is independent of speed.
- Saying the cyclotron's final energy depends on the accelerating p.d.

## Exam technique

- **Explain** why the path is circular: force perpendicular to velocity, constant size, so it provides a centripetal force; no work done, so speed is constant.
- **Show that** the period is independent of speed: start from BQv = mv²/r, then T = 2πr/v, and show v cancelling.
- **Compare** two particles: pick the quantity they share, then write r in terms of it.
- **Describe** the cyclotron in ordered steps: dees, field, alternating p.d. across the gap, semicircles of constant period, growing radius.

## Related resources

- [Moving charges revision notes](/resources/oxfordaqa-a-level-physics-9630-moving-charges-in-a-magnetic-field-oxfordaqa-alevel-physics-revision-notes/)
- [Moving charges practice questions](/resources/oxfordaqa-a-level-physics-9630-moving-charges-in-a-magnetic-field-oxfordaqa-alevel-physics-practice/)
- [Magnetic flux density study guide](/resources/oxfordaqa-a-level-physics-9630-magnetic-flux-density-oxfordaqa-alevel-physics/)
- [Circular motion study guide](/resources/oxfordaqa-a-level-physics-circular-motion-angular-speed-and-centripetal-force/)

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.10.2 Moving charges in a magnetic field, published by OxfordAQA. Check the board's website for the current version of the specification.
