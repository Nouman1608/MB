---
title: "OxfordAQA International AS and A-level Physics: Electric potential and capacitors (9630) -- Revision Notes"
seoTitle: "OxfordAQA A-level Physics Electric Potential Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on electric potential, equipotentials, capacitance, dielectrics and stored energy for OxfordAQA International A-level Physics 9630."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-12
featured: false
reviewNote: "2026-11-08: reviewed by iftikhar-azeemi."
---

These notes condense sections 3.8.3 (Electric potential) and 3.8.4 (Capacitors) of the OxfordAQA International AS and A-level Physics (9630) specification, Version 4.4, exams from May/June 2020 onwards. Both sections sit inside 3.8, which is International A-level only. For full explanations read the [study guide](/resources/oxfordaqa-a-level-physics-electric-potential-and-capacitors/), then test yourself with the [practice questions](/resources/oxfordaqa-a-level-physics-electric-potential-and-capacitors-practice/). Track progress on the [course hub](/boards/oxfordaqa/a-level/physics/) and the [checklist](/checklists/oxfordaqa/a-level/physics/), and use the [free diagnostics](/diagnostics/) to find weak spots.

Constants used below, as a question would give them: ε₀ = 8.85 × 10⁻¹² F m⁻¹, so 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻²; e = 1.60 × 10⁻¹⁹ C.

## Definitions to learn word for word

- **Absolute electric potential** at a point: the energy transferred per coulomb of positive test charge when a small test charge is moved in from infinity to that point. Zero at infinity. Unit: volt (J C⁻¹).
- **Potential difference** between two points: the work done per unit charge in moving a charge between them.
- **Equipotential surface**: a surface on which every point has the same potential. No work is done moving a charge along it.
- **Capacitance**: charge stored per unit potential difference, C = Q/V. Unit: farad (C V⁻¹).
- **Relative permittivity** (dielectric constant) ε_r: the ratio of the material's permittivity to ε₀. It is the factor by which the capacitance rises when the dielectric fills the gap. No unit.

## Formulas

| Quantity | Formula | Notes |
|---|---|---|
| Work done | ΔW = QΔV | Q in coulombs, ΔV in volts |
| Potential, radial field | V = Q/(4πε₀r) | Sign of Q kept; scalar; ∝ 1/r |
| Field, radial field | E = Q/(4πε₀r²) | ∝ 1/r²; vector |
| Field from potential | E = −ΔV/Δr | Magnitude is the gradient of V against r |
| Potential difference from E | ΔV = area under E against r | Between the two radii |
| Uniform field | E = V/d | Plates distance d apart |
| Capacitance | C = Q/V | Q on one plate |
| Parallel plates | C = Aε₀ε_r/d | A overlap area, d separation |
| Energy stored | E = ½QV = ½CV² = Q²/(2C) | Area under Q against V graph |

## Graphs: what to sketch

| Graph (positive charge, r outside the charge) | Key features |
|---|---|
| V against r | Hyperbola-type curve, V ∝ 1/r. Never reaches zero. Doubling r halves V |
| E against r | Steeper curve, E ∝ 1/r². Doubling r quarters E |
| Q against V (capacitor) | Straight line through the origin, gradient C. Area is the energy |

Label both axes with quantity and unit. For a negative charge, V is negative and rises towards zero.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--02-energy-stored-vq-graph.webp" width="900" height="1010" alt="A straight V-Q graph from the origin has gradient 1/C. A thin strip is the work V delta Q and the triangle under the line is the energy stored, 1/2 QV = 1/2 CV^2 = Q^2/2C. For 470 microfarad at 12 V the energy is 33.8 mJ. OCR only: charging from a 12 V battery takes QV = 67.7 mJ, half stored and half lost as heat." loading="lazy">
  <figcaption>The energy stored is the area under the V-Q graph, half of QV.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--09-ln-graph-find-rc.webp" width="900" height="1230" alt="Potential difference readings for a discharging capacitor lie on a curve. Plotting ln V against t gives a straight line of gradient minus 0.0500 per second, so RC = 20.0 s. With R = 100 kilohm, C = 200 microfarad. For charging, plot ln(V0 - V) instead." loading="lazy">
  <figcaption>A ln V against t graph is a straight line whose gradient is minus 1/RC.</figcaption>
</figure>


## Method boxes

**Potential at a point from several charges**
1. Work out each distance from the point to each charge.
2. Find each Q/(4πε₀r) with the sign of Q.
3. Add them as plain numbers. Never use Pythagoras or components for potential.

**Energy gained by a charge in a field**
1. Find ΔV between the start and end points.
2. ΔW = QΔV. The sign shows whether the field or the agent does the work.
3. If released from rest, ΔW becomes kinetic energy, ½mv².

**Energy of a capacitor: choose the form**
1. Know Q and V: ½QV.
2. Know C and V: ½CV².
3. Know Q and C: Q²/(2C).

**Polar molecule dielectric action, in order**
1. Without a field the molecules point randomly.
2. In a field, each molecule experiences a couple and rotates towards alignment.
3. Surface layers of opposite charge build up facing the plates.
4. These create a field opposing the applied field, so the net field falls.
5. For the same Q the pd falls, so C = Q/V rises.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--03-series-parallel-capacitors.webp" width="900" height="1100" alt="The same two capacitors, 10 and 15 microfarad, are connected across 15 V. In series each holds 90 microcoulombs and the p.d.s (9.0 V and 6.0 V) add, giving 6.0 microfarad. In parallel each has 15 V and the charges (150 and 225 microcoulombs) add, giving 25 microfarad." loading="lazy">
  <figcaption>Series: same charge, p.d.s add, smaller C. Parallel: same p.d., charges add, larger C.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--04-dielectric-polar-molecules.webp" width="900" height="1090" alt="Polar molecules between capacitor plates point randomly with no field. When the plates are charged they line up, leaving layers of negative ends facing the positive plate and positive ends facing the negative plate. These layers reduce the net field, so the p.d. is smaller for the same charge and C = Q/V rises. For the lesson example, 916 pF with the dielectric against 398 pF in air." loading="lazy">
  <figcaption>Aligned polar molecules reduce the field, so the same charge gives a smaller p.d. and a larger capacitance.</figcaption>
</figure>


## Small worked reminders

**Potential and energy.** At 0.50 m from a point charge of +1.0 μC: V = 8.99 × 10⁹ × 1.0 × 10⁻⁶ / 0.50 = 1.8 × 10⁴ V. Moving +2.0 nC through 150 V needs ΔW = 2.0 × 10⁻⁹ × 150 = 3.0 × 10⁻⁷ J.

**Capacitor.** 100 μF at 10 V stores ½ × 100 × 10⁻⁶ × 10² = 5.0 × 10⁻³ J.

## Must-know distinctions

- **Potential and field strength.** V is a scalar with 1/r dependence. E is a vector with 1/r² dependence. E is the gradient of V, not equal to it.
- **Zero potential does not mean zero field.** Between a positive and a negative charge there is a point of zero potential, but the field there is not zero.
- **Isolated and connected capacitor.** Inserting a dielectric into an isolated capacitor keeps Q fixed and lowers V. With a battery connected, V stays fixed and Q rises.
- **Charge on a capacitor.** Q is the magnitude on one plate, not the net charge, which is zero.
- **Equipotential and field line.** They cross at right angles.

## Quick self-test

1. Define absolute electric potential.
2. Find V at 0.50 m from a point charge of +1.0 μC.
3. How much work is done moving +2.0 nC through a pd of 150 V?
4. In a uniform field the potential falls by 200 V over 0.050 m. Find E.
5. A point charge produces V = 90 V at 0.20 m. Find E there, and V at 0.60 m.
6. A 4.7 μF capacitor is at 6.0 V. How much charge is on one plate?
7. The plate area of a parallel plate capacitor is doubled and the separation is doubled. What happens to C?
8. A capacitor of 140 pF becomes 560 pF with a dielectric filling the gap. Find ε_r.
9. Find the energy stored in a 100 μF capacitor at 10 V.
10. A 6.0 μF capacitor holds 120 μC. Find the energy stored.

### Answers

1. Energy transferred per coulomb of positive test charge as it is moved in from infinity to the point; zero at infinity.
2. 1.8 × 10⁴ V.
3. 3.0 × 10⁻⁷ J.
4. E = 200 / 0.050 = 4.0 × 10³ V m⁻¹.
5. For a point charge E = V/r = 90 / 0.20 = 450 V m⁻¹. V ∝ 1/r, so V = 90 × 0.20/0.60 = 30 V.
6. Q = CV = 4.7 × 10⁻⁶ × 6.0 = 2.8 × 10⁻⁵ C.
7. C is unchanged, since C ∝ A/d and both double.
8. ε_r = 560/140 = 4.0.
9. 5.0 × 10⁻³ J.
10. E = Q²/(2C) = (120 × 10⁻⁶)² / (2 × 6.0 × 10⁻⁶) = 1.2 × 10⁻³ J.

## Where marks are usually lost

- Writing the definition of potential without "per unit charge" or without "from infinity".
- Using r² in V = Q/(4πε₀r), or r in the field formula.
- Dropping the sign of a negative charge when adding potentials.
- Adding potentials as vectors.
- Saying that a field-free point has zero potential, or the reverse.
- Forgetting to convert pF, nF, μF, or mm, before substituting.
- Describing dielectric action as "the dielectric stores charge" rather than explaining alignment and the opposing field.
- Giving the energy of a capacitor as QV instead of ½QV.
- Leaving a graph unlabelled or drawing E against r as a straight line.

## Worked reminders: graphs and energy

**Potential from the area under E against r.** Between 0.20 m and 0.50 m from a point charge of +4.0 × 10⁻⁸ C, the area under the E–r curve is (Q/4πε₀)(1/r₁ − 1/r₂) = 8.99 × 10⁹ × 4.0 × 10⁻⁸ × (5.0 − 2.0) = 1.1 × 10³ V. A trapezium over-estimates this because the curve sags below the chord.

**Gradient.** Reading the slope of a V against r graph at a point gives the field strength there. The slope of a chord gives only the mean field over that interval.

**Dielectric inserted.** A 150 pF capacitor at 50 V holds 7.5 nC. Isolated, a slab with ε_r = 4.0 makes C = 600 pF and V = 12.5 V. Still connected, V stays at 50 V and Q becomes 30 nC.

## Units to check before you substitute

- 1 μF = 10⁻⁶ F, 1 nF = 10⁻⁹ F, 1 pF = 10⁻¹² F.
- 1 nC = 10⁻⁹ C, 1 μC = 10⁻⁶ C, 1 mC = 10⁻³ C.
- 1 mm = 10⁻³ m, 1 cm = 10⁻² m, 1 kV = 10³ V.
- Field strength can be given in V m⁻¹ or N C⁻¹; the two are equivalent.

## Command words and what they ask for

- **Define**: give the precise statement, with the unit if asked.
- **Show that**: work out the value from the data, with enough steps to see the method, and quote it to more figures than the value given.
- **Explain**: give the reason, linking cause and effect (rotation, opposing field, smaller pd, larger C).
- **Sketch**: draw the shape with labelled axes and any key features, such as the point where a curve falls to a quarter or half.

## Frequently asked questions

**What is the difference between electric potential and field strength?**
Potential is a scalar that varies as 1/r around a point charge, while field strength is a vector that varies as 1/r². The field strength is the gradient of the potential, not equal to it.

**Does zero potential mean zero electric field?**
No. Between a positive and a negative charge there is a point of zero potential, but the field there is not zero.

**How do you find a potential difference from a graph of E against r?**
The potential difference between two radii is the area under the E–r graph between them. Counting a trapezium over-estimates it, because the curve sags below the chord.

**How much energy does a capacitor store?**
The energy stored is ½QV, equal to ½CV² or Q²/(2C). For example, a 100 μF capacitor at 10 V stores 5.0 × 10⁻³ J. Writing QV instead of ½QV is a common error.

**What does a "show that" question require?**
Work out the value from the data with enough steps to see the method, and quote your answer to more significant figures than the value given.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630) specification, Version 4.4, for exams from May/June 2020 onwards, published by OxfordAQA. Sections 3.8.3 and 3.8.4.
