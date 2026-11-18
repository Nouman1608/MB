---
title: "OxfordAQA A-Level Physics (9630): Coulomb's law"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.8 – Electric fields and capacitance"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 8.1
syllabusTopics:
  - qualification: "a-level"
    topic: "electric-fields-and-capacitance"
    subtopic: "coulombs-law-oxfordaqa"
description: "Study guide to OxfordAQA 9630 section 3.8.1: Coulomb's law, forces from several charges, equilibrium points, hanging spheres and gravity compared."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.8.1, Coulomb's law, the first part of Section 3.8 Electric fields and capacitance. Section 3.8 is International A-level only. The broader picture, including field lines and field strength, is in the [Coulomb's law and electric field strength study guide](/resources/oxfordaqa-a-level-physics-coulombs-law-and-electric-field-strength/). When you have worked through this page, condense it with the [Coulomb's law revision notes](/resources/oxfordaqa-a-level-physics-9630-coulombs-law-oxfordaqa-revision-notes/) and test yourself with the [Coulomb's law practice questions](/resources/oxfordaqa-a-level-physics-9630-coulombs-law-oxfordaqa-practice/).

Data used: ε₀ = 8.85 × 10⁻¹² F m⁻¹, so 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻²; e = 1.60 × 10⁻¹⁹ C; G = 6.67 × 10⁻¹¹ N m² kg⁻²; proton mass 1.67 × 10⁻²⁷ kg; g = 9.81 N kg⁻¹.

## What the specification asks for

| Statement in 3.8.1 | What you must be able to do |
|---|---|
| Force between point charges in a vacuum, F = Q₁Q₂/(4πε₀r²), where ε₀ is the permittivity of free space | Use the equation, rearrange it, and reason with proportion |
| Air can be treated as a vacuum when calculating force between charges | Justify using ε₀ for charges in air |
| For a charged sphere, charge may be considered to be at the centre | Measure r from the centre of each sphere |
| Comparison of magnitude of gravitational and electrostatic forces between subatomic particles | Calculate both forces and explain why gravity is ignored |

Questions rarely stop at one pair of charges. The marks are in combining forces from several charges, finding where forces balance, and using Coulomb's law inside a Newton's laws problem.

## The law and its parts

F = Q₁Q₂ / (4πε₀r²)

- **F** is the force each charge exerts on the other. The two forces are equal in size and opposite in direction, acting on different charges, so they form a Newton's third law pair. A large charge does not push harder on a small one than the small one pushes back.
- **r** is the distance between the point charges, or between the centres of charged spheres.
- **ε₀** is the permittivity of free space. Its unit, the farad per metre, is equivalent to C² N⁻¹ m⁻²: rearrange to ε₀ = Q₁Q₂/(4πFr²) and the units are C² / (N m²).
- **The force acts along the line joining the charges.** It is repulsive for like charges and attractive for unlike charges.

If you substitute signed charges, a negative answer means attraction. It is usually safer to substitute magnitudes and decide the direction from a sketch.

### Why air counts as a vacuum

The equation is written for a vacuum. In a material the force between two charges is reduced, by a factor equal to the relative permittivity of the material. For air that factor is about 1.0006, so the force changes by less than 0.1%, far smaller than the uncertainty in any data you will be given. That is the reason you use ε₀ for charges in air.

### Proportional reasoning

Because F ∝ Q₁Q₂ and F ∝ 1/r², many questions can be answered without substituting ε₀ at all:

| Change | Effect on F |
|---|---|
| One charge doubled | × 2 |
| Both charges doubled | × 4 |
| Separation doubled | ÷ 4 |
| Separation reduced to one third | × 9 |
| Both charges doubled and separation doubled | unchanged |

To find the separation that gives a new force, use r₂ = r₁√(F₁/F₂). If the force must fall by a factor of 4, the separation doubles.

## Forces from more than one charge

Force is a vector. Calculate the force from each charge separately, as if the others were absent, then add the forces as vectors. Coulomb's law does not change because a third charge is nearby.

### Worked example 1: three charges in a line

Charge A (+3.0 nC) is at x = 0, charge B (−2.0 nC) at x = 0.040 m and charge C (+5.0 nC) at x = 0.100 m. Find the resultant force on B.

Force on B from A: r = 0.040 m, unlike charges, so B is pulled towards A (to the left).

F_A = 8.99 × 10⁹ × 3.0 × 10⁻⁹ × 2.0 × 10⁻⁹ / 0.040² = 3.37 × 10⁻⁵ N, to the left.

Force on B from C: r = 0.060 m, unlike charges, so B is pulled towards C (to the right).

F_C = 8.99 × 10⁹ × 5.0 × 10⁻⁹ × 2.0 × 10⁻⁹ / 0.060² = 2.50 × 10⁻⁵ N, to the right.

Resultant = 3.37 × 10⁻⁵ − 2.50 × 10⁻⁵ = **8.7 × 10⁻⁶ N to the left**, towards A.

C has the bigger charge but is further away. Its force loses out because of the square of the distance.

### Worked example 2: forces at right angles

A charge P of +4.0 nC is at the origin. A charge of +6.0 nC sits 0.050 m due east of P, and a charge of −3.0 nC sits 0.030 m due north of P. Find the resultant force on P.

The +6.0 nC charge repels P, pushing it west: F₁ = 8.99 × 10⁹ × 6.0 × 10⁻⁹ × 4.0 × 10⁻⁹ / 0.050² = 8.63 × 10⁻⁵ N.

The −3.0 nC charge attracts P, pulling it north: F₂ = 8.99 × 10⁹ × 3.0 × 10⁻⁹ × 4.0 × 10⁻⁹ / 0.030² = 1.20 × 10⁻⁴ N.

Resultant = √(F₁² + F₂²) = **1.5 × 10⁻⁴ N**, at tan⁻¹(1.20/0.863) = **54° north of west**.

### Worked example 3: where does the force cancel?

Charges of +8.0 nC and +2.0 nC are fixed 0.30 m apart. Where on the line between them would a third charge feel no resultant force?

At distance x from the +8.0 nC charge the two forces must be equal:

8.0/x² = 2.0/(0.30 − x)²

Square-rooting both sides: 2/x = 1/(0.30 − x), so 0.60 − 2x = x and **x = 0.20 m** from the +8.0 nC charge.

The size and sign of the third charge cancel from both sides, so the point is the same for any third charge. The point lies nearer the smaller charge. For two unlike charges there is no balance point between them, because both forces then point the same way; it lies outside the pair, beyond the smaller charge.

## Coulomb's law with Newton's laws: hanging spheres

Two identical small conducting spheres, each of mass 0.50 g, hang from the same point on insulating threads 0.20 m long. They carry equal charges and settle with each thread at 6.0° to the vertical. Find the charge on each sphere.

Three forces act on each sphere: weight mg downwards, tension T along the thread, and the electric force F horizontally, away from the other sphere. In equilibrium:

- vertically: T cos θ = mg
- horizontally: T sin θ = F
- dividing: F = mg tan θ

F = 0.50 × 10⁻³ × 9.81 × tan 6.0° = 5.16 × 10⁻⁴ N.

Separation r = 2 × 0.20 × sin 6.0° = 0.0418 m.

From F = Q²/(4πε₀r²): Q = r √(F × 4πε₀) = 0.0418 × √(5.16 × 10⁻⁴ / 8.99 × 10⁹) = **1.0 × 10⁻⁸ C** (10 nC).

The spheres are small compared with their separation, so each is treated as a point charge at its centre.

## Gravity and electrostatics between subatomic particles

For two protons a distance r apart, both forces follow an inverse-square law, so r cancels in the ratio:

F_e / F_g = e² / (4πε₀ G m_p²) = (1.60 × 10⁻¹⁹)² × 8.99 × 10⁹ / (6.67 × 10⁻¹¹ × (1.67 × 10⁻²⁷)²) = **1.2 × 10³⁶**

At 2.0 × 10⁻¹⁵ m, about the spacing of protons in a nucleus, the electrostatic repulsion is 8.99 × 10⁹ × (1.60 × 10⁻¹⁹)² / (2.0 × 10⁻¹⁵)² = 58 N. That is a large force on a particle of mass 10⁻²⁷ kg, and gravity, smaller by a factor of 10³⁶, cannot oppose it. This is why gravity is ignored in calculations on charged subatomic particles, and why a different, attractive force must hold nuclei together.

The ratio is fixed only for a given pair of particles. For an electron and a proton the gravitational force is smaller still, because the electron mass is about 1/1840 of the proton mass.

## Common mistakes

- Measuring r to the surface of a sphere instead of its centre.
- Forgetting to square r, or squaring the charge as well as the separation.
- Adding the forces from two charges as numbers when they act in different directions.
- Deciding direction from the sign of a calculated answer, then also flipping it from the sketch, so the direction is reversed twice.
- Putting nC or cm into the equation unconverted: nano is 10⁻⁹ and 1 cm is 10⁻² m, so r² in cm² is out by 10⁴.
- In a hanging-sphere problem, using the thread length as the separation.

## Exam technique

- **State** Coulomb's law: name both proportionalities (product of the charges, inverse square of the separation) and say the law applies to point charges.
- **Calculate**: write the equation, substitute in SI units, give the answer to the significant figures of the data, and state the direction when a force is asked for.
- **Show that**: give the unrounded answer to one more significant figure than the value quoted, so the examiner sees it was calculated, not copied.
- **Compare** gravitational and electrostatic forces: calculate both, give the ratio, and draw the conclusion that gravity is negligible.
- **Explain** why a balance point is independent of the third charge: show that the third charge appears on both sides of the force equation and cancels.

## Related resources

- [Coulomb's law revision notes](/resources/oxfordaqa-a-level-physics-9630-coulombs-law-oxfordaqa-revision-notes/)
- [Coulomb's law practice questions](/resources/oxfordaqa-a-level-physics-9630-coulombs-law-oxfordaqa-practice/)
- [Electric field strength study guide](/resources/oxfordaqa-a-level-physics-9630-electric-field-strength-oxfordaqa/)
- [Newton's law of gravitation and gravitational field study guide](/resources/oxfordaqa-a-level-physics-newtons-law-of-gravitation-and-gravitational-field/)

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.8.1 Coulomb's law, published by OxfordAQA. Check the board's website for the current version of the specification.
