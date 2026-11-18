---
title: "OxfordAQA A-Level Physics (9630): Capacitors"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.8 – Electric fields and capacitance"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 8.4
syllabusTopics:
  - qualification: "a-level"
    topic: "electric-fields-and-capacitance"
    subtopic: "capacitors-oxfordaqa-alevel"
description: "Study guide to OxfordAQA 9630 section 3.8.4: capacitance, C = Aε₀εr/d, relative permittivity, polar-molecule dielectric action and energy from Q–V graphs."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.8.4, Capacitors, the last part of Section 3.8 Electric fields and capacitance (International A-level only). For an overview that also covers electric potential, use the [electric potential and capacitors study guide](/resources/oxfordaqa-a-level-physics-electric-potential-and-capacitors/). Charging and discharging through a resistor is a separate subtopic, 3.9.1, covered in the [capacitor charge and discharge study guide](/resources/oxfordaqa-a-level-physics-capacitor-charge-and-discharge-through-resistors/). After this page, condense it with the [capacitors revision notes](/resources/oxfordaqa-a-level-physics-9630-capacitors-oxfordaqa-alevel-revision-notes/) and test yourself with the [capacitors practice questions](/resources/oxfordaqa-a-level-physics-9630-capacitors-oxfordaqa-alevel-practice/).

Data used: ε₀ = 8.85 × 10⁻¹² F m⁻¹.

## What the specification asks for

| Statement in 3.8.4 | What you must be able to do |
|---|---|
| Definition of capacitance, C = Q/V | Define it, use it, and give the unit |
| For a parallel plate capacitor, C = Aε₀εr/d | Calculate C and predict the effect of changing A, d or the dielectric |
| Relative permittivity and dielectric constant | Explain what εr means and how it is measured |
| Dielectric action: describe the action of a simple polar molecule that rotates in the presence of an electric field | Give the step-by-step explanation |
| Energy stored from area under a graph of charge against p.d.: E = ½QV = ½CV² = ½Q²/C | Derive from the graph and choose the right form |

## Capacitance

A capacitor is two conductors separated by an insulator. Connecting it to a supply moves electrons from one plate, round the circuit, to the other. One plate ends with charge +Q and the other −Q.

C = Q/V, where Q is the charge on one plate and V the p.d. between the plates. The farad is one coulomb per volt. Practical values are in μF (10⁻⁶ F), nF (10⁻⁹ F) and pF (10⁻¹² F).

For a given capacitor, Q ∝ V. A graph of Q against V is a straight line through the origin with gradient C.

## The parallel plate capacitor

C = Aε₀εr/d

- A is the area of overlap of the plates. Sliding one plate sideways so that only half overlaps halves C.
- d is the separation. C ∝ 1/d.
- εr is the relative permittivity of the material filling the gap.

### Worked example 1: designing a capacitor

A capacitor of 1.0 nF is needed. The plates have area 0.050 m² and the dielectric has εr = 4.5. Find the thickness of dielectric needed.

d = Aε₀εr / C = 0.050 × 8.85 × 10⁻¹² × 4.5 / 1.0 × 10⁻⁹ = **2.0 × 10⁻³ m** (2.0 mm).

With air in the gap the same plates would need a separation of 0.44 mm for the same capacitance: the dielectric lets the plates sit 4.5 times further apart.

## Relative permittivity and dielectric constant

Relative permittivity εr is the ratio of the permittivity of a material to the permittivity of free space, ε/ε₀. In a capacitor it is the factor by which the capacitance increases when the material fills the gap:

εr = C with dielectric / C with vacuum (or air)

That ratio is also called the **dielectric constant** of the material. It has no unit. A vacuum has εr = 1 by definition, and air is so close to 1 that it is treated as a vacuum. To measure εr, measure C with the gap empty, then with the material filling the same gap, and divide.

## Dielectric action: the polar molecule

A polar molecule has a permanent separation of charge: one end slightly positive, the other slightly negative. Questions ask for a sequence, and each step is a marking point:

1. **No field.** The molecules point in random directions, so their effects cancel.
2. **Field applied.** The field pushes the positive end one way and the negative end the other. Equal, opposite, parallel forces on the two ends form a **couple**, which **rotates** the molecule.
3. **Alignment.** The molecules turn towards the field direction: the negative ends towards the positive plate and the positive ends towards the negative plate.
4. **Surface charges.** Inside the material neighbouring ends cancel, but a layer of negative charge is left facing the positive plate and a layer of positive charge facing the negative plate.
5. **Reduced field.** These layers produce a field opposing the applied field, so the resultant field between the plates is smaller.
6. **Result.** For the same charge on the plates, the p.d. (V = Ed) is smaller, so C = Q/V is larger. Equivalently, at fixed p.d., more charge flows onto the plates.

The field is reduced, not removed. Thermal motion keeps knocking molecules out of line, so the alignment is only partial.

## Energy stored: the area under the Q–V graph

To add a small charge ΔQ when the p.d. is V takes work VΔQ. On the graph of charge against p.d., that work is a thin strip of width ΔQ and length V. Adding strips from zero to the final charge builds up a right-angled triangle with sides Q and V, so the total work stored is its area:

E = ½QV

Substituting Q = CV gives ½CV²; substituting V = Q/C gives ½Q²/C.

Why a half? The p.d. is zero for the first charge and V only for the last, so on average the charge is moved through V/2. The supply, on the other hand, delivers all of its charge at its full emf, doing work QV. Only half of that ends up stored; the rest is dissipated in the resistance of the circuit as the capacitor charges.

### Worked example 2: a camera flash

A 150 μF capacitor is charged to 300 V. Find the charge, the energy stored and the mean power if it discharges in 2.0 ms.

Q = CV = 150 × 10⁻⁶ × 300 = **0.045 C**.

E = ½CV² = ½ × 150 × 10⁻⁶ × 300² = **6.75 J**.

Mean power = 6.75 / 2.0 × 10⁻³ = **3.4 × 10³ W**. The capacitor stores modest energy but can release it very quickly.

### Worked example 3: charging further

A 2200 μF capacitor is charged from 6.0 V to 12 V. Find the extra energy stored.

ΔE = ½C(V₂² − V₁²) = ½ × 2200 × 10⁻⁶ × (144 − 36) = **0.12 J**.

The common wrong answer, ½C(ΔV)² = 0.040 J, treats the change as if starting from zero. On the graph, the extra energy is the area of the trapezium between 6 V and 12 V, not a small triangle.

## Changing the plate separation

These questions combine C = Aε₀εr/d, C = Q/V, E = V/d and the energy equations. Decide first which quantity is fixed.

### Worked example 4: pulling the plates apart

Square plates of side 0.20 m are 1.0 mm apart in air, charged to 100 V.

C = 8.85 × 10⁻¹² × 0.040 / 1.0 × 10⁻³ = 3.54 × 10⁻¹⁰ F (354 pF); Q = 3.54 × 10⁻⁸ C; stored energy ½CV² = 1.77 × 10⁻⁶ J.

The separation is doubled to 2.0 mm, so C halves to 177 pF.

| | Disconnected first (Q fixed) | Left connected (V fixed) |
|---|---|---|
| Charge | 3.54 × 10⁻⁸ C | halves to 1.77 × 10⁻⁸ C |
| P.d. | doubles to 200 V | 100 V |
| Field E = V/d | unchanged, 1.0 × 10⁵ V m⁻¹ | halves to 5.0 × 10⁴ V m⁻¹ |
| Energy stored | doubles to 3.54 × 10⁻⁶ J | halves to 8.9 × 10⁻⁷ J |

In the disconnected case the energy rises because you do work pulling apart plates that attract each other. In the connected case charge flows back into the supply.

## Common mistakes

- Taking Q as the total charge on the capacitor, which is zero. Use the charge on one plate.
- Forgetting to convert μF, nF or pF, or mm for d.
- Using ½C(ΔV)² for a change of p.d. that does not start at zero.
- Saying the dielectric "cancels" the field.
- Describing dielectric action with "the molecules become charged". They are already polar; the field rotates them.
- Assuming the charge stays fixed when the capacitor is still connected to the supply.

## Exam technique

- **Define** capacitance: charge stored per unit p.d., C = Q/V.
- **Describe** dielectric action in ordered steps: random, couple, rotation, aligned layers, opposing field, smaller V, larger C.
- **Show that** the energy is ½QV: refer to the area under the Q–V graph, not just the formula.
- **Explain** a change: state which quantity is constant, then follow each equation in turn.

## Related resources

- [Capacitors revision notes](/resources/oxfordaqa-a-level-physics-9630-capacitors-oxfordaqa-alevel-revision-notes/)
- [Capacitors practice questions](/resources/oxfordaqa-a-level-physics-9630-capacitors-oxfordaqa-alevel-practice/)
- [Electric potential study guide](/resources/oxfordaqa-a-level-physics-9630-electric-potential-oxfordaqa/)
- [Electric field strength study guide](/resources/oxfordaqa-a-level-physics-9630-electric-field-strength-oxfordaqa/)

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.8.4 Capacitors, published by OxfordAQA. Check the board's website for the current version of the specification.
