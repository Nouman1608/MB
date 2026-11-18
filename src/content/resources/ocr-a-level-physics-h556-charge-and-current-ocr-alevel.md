---
title: "OCR A Level Physics A (H556): Charge and current"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Electrons, waves and photons"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 4.1
syllabusTopics:
  - qualification: "a-level"
    topic: "electrons-waves-and-photons"
    subtopic: "charge-and-current-ocr-alevel"
description: "Study guide to OCR A Level Physics A 4.1: current as rate of flow of charge, quantised charge, ions in electrolytes, Kirchhoff's first law and I = Anev."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 4.1, Charge and current, of the OCR Advanced GCE in Physics A specification (H556), Version 3.0 (March 2026), for first assessment in 2017: learning outcomes 4.1.1(a)-(g), Charge, and 4.1.2(a)-(c), Mean drift velocity, in Module 4. The specification describes this as a short section that introduces ideas rather than practical work, ending with the continuity equation I = Anev and a classification of materials by their number density of charge carriers.

The broader [charge, current, drift velocity, p.d. and e.m.f. study guide](/resources/ocr-a-level-physics-charge-current-drift-velocity-p-d-and-e-m-f/) also takes in p.d. and e.m.f. from section 4.2. This page stays inside 4.1 and goes further on it: charge from a current-time graph, ions with more than one unit of charge, junction networks, and working out a number density from density and molar mass. Use it with the [charge and current revision notes](/resources/ocr-a-level-physics-h556-charge-and-current-ocr-alevel-revision-notes/) and the [charge and current practice questions](/resources/ocr-a-level-physics-h556-charge-and-current-ocr-alevel-practice/).

Values used: e = 1.6 × 10⁻¹⁹ C and the Avogadro constant N_A = 6.02 × 10²³ mol⁻¹. In a question, use the values given.

## What you must be able to do

| Statement | Content |
|---|---|
| 4.1.1(a)-(b) | Current as rate of flow of charge, I = ΔQ/Δt; the coulomb |
| 4.1.1(c)-(d) | e = 1.6 × 10⁻¹⁹ C (electron −e, proton +e); net charge is quantised, a multiple of e |
| 4.1.1(e)-(f) | Current as electrons moving in metals and ions moving in electrolytes; conventional current and electron flow |
| 4.1.1(g) | Kirchhoff's first law; conservation of charge |
| 4.1.2(a)-(c) | Mean drift velocity; I = Anev with n the number density; conductors, semiconductors and insulators in terms of n |

## Current and charge (4.1.1(a)-(b))

Current is the rate of flow of charge, I = ΔQ/Δt. For a steady current ΔQ = IΔt. When the current changes, the same definition tells you that **charge is the area under a current-time graph**, because each thin strip of the graph has area I × Δt.

The coulomb is defined from the ampere, which is the base unit: one coulomb is the charge that passes a point when a steady current of one ampere flows for one second, 1 C = 1 A s.

### Worked example 1: charge from a graph

The current in a component rises uniformly from 0 to 0.40 A in 5.0 s, then stays at 0.40 A for a further 10.0 s. Find the total charge and the number of electrons that pass.

```
triangle : ½ × 5.0 × 0.40 = 1.0 C
rectangle: 10.0 × 0.40   = 4.0 C
total Q  = 5.0 C
electrons = Q / e = 5.0 / (1.6 × 10⁻¹⁹) = 3.1 × 10¹⁹
```

## Quantised charge (4.1.1(c)-(d))

An electron carries −e and a proton +e, with e = 1.6 × 10⁻¹⁹ C. An object becomes charged by gaining or losing electrons, so its net charge is always Q = ±Ne with N a whole number. An ion that has lost two electrons, such as Cu²⁺, carries +2e = +3.2 × 10⁻¹⁹ C.

The specification links this idea to how science develops (HSW7). Early twentieth-century experiments on charged oil drops found that every measured charge was a whole-number multiple of one smallest value, which was evidence that charge comes in discrete units. When you test data for quantisation, divide each charge by e and look for whole numbers.

## Charge carriers and the direction of current (4.1.1(e)-(f))

| Conductor | Charge carriers | Motion |
|---|---|---|
| Metal | Delocalised (free) electrons | Drift towards the positive terminal |
| Electrolyte (molten or dissolved ionic compound) | Positive and negative ions | Positive ions to the cathode (negative electrode), negative ions to the anode (positive electrode) |

**Conventional current** is drawn from positive to negative round the external circuit. The convention was fixed before the electron was known, and it later turned out that in metals the carriers are negative and move the opposite way. Both descriptions give the same circuit results; use conventional current unless asked for electron flow.

In an electrolyte both kinds of ion contribute. Negative charge moving left adds to the current in the same direction as positive charge moving right, so the contributions **add**.

### Worked example 2: current in an electrolyte

In a copper(II) sulfate solution, 4.0 × 10¹⁷ Cu²⁺ ions cross a plane in one direction each second, and 4.0 × 10¹⁷ SO₄²⁻ ions cross it in the opposite direction.

```
charge per ion = 2e = 3.2 × 10⁻¹⁹ C
Cu²⁺ : 4.0 × 10¹⁷ × 3.2 × 10⁻¹⁹ = 0.128 A
SO₄²⁻: 4.0 × 10¹⁷ × 3.2 × 10⁻¹⁹ = 0.128 A
I = 0.128 + 0.128 = 0.26 A
```

Forgetting the factor of 2, or subtracting the two contributions, are the usual mistakes.

## Kirchhoff's first law (4.1.1(g))

**The sum of the currents entering any point in a circuit equals the sum of the currents leaving that point.** It is a consequence of conservation of charge: charge is not created or destroyed, and in a steady state it does not build up at a junction, so each second the charge that arrives must leave.

In a network, apply the law at one junction at a time. If you do not know a current's direction, guess it; a negative answer means the current flows the other way.

### Worked example 3: two junctions

At junction P, a current of 5.0 A arrives and splits into a branch carrying 2.2 A and a wire to junction Q. At Q, a further branch is assumed to bring in a current I₁, and a single wire leaves carrying 1.9 A.

```
P: 5.0 = 2.2 + I(PQ)      →  I(PQ) = 2.8 A, from P to Q
Q: 2.8 + I₁ = 1.9          →  I₁ = −0.9 A
```

The negative sign shows that the branch at Q carries 0.9 A **out** of Q, not in.

## Mean drift velocity (4.1.2(a)-(b))

Free electrons in a metal move randomly at high speeds even with no current. A p.d. sets up an electric field that adds a small average motion along the wire: the **mean drift velocity** v. The current is I = Anev, where A is the cross-sectional area, n the number density of charge carriers (per m³) and e the charge on each carrier. For carriers of charge q, I = Anqv.

### Worked example 4: number density from bulk data

Copper has density 8960 kg m⁻³ and molar mass 0.0635 kg mol⁻¹. Assume each atom provides one free electron. Find n, then the drift velocity in a wire of area 1.0 mm² carrying 2.0 A.

```
atoms per m³ = (ρ / M) × N_A = (8960 / 0.0635) × 6.02 × 10²³
             = 8.5 × 10²⁸ m⁻³        so n = 8.5 × 10²⁸ m⁻³
A = 1.0 mm² = 1.0 × 10⁻⁶ m²
v = I / (Ane) = 2.0 / (1.0 × 10⁻⁶ × 8.5 × 10²⁸ × 1.6 × 10⁻¹⁹)
  = 1.5 × 10⁻⁴ m s⁻¹
```

The drift velocity is about a seventh of a millimetre per second. A lamp still lights almost at once because the electric field travels round the circuit at close to the speed of light, and electrons everywhere in the circuit begin to drift together.

### Using I = Anev in proportion

| Held constant | Change | Effect on v |
|---|---|---|
| I, n | area halved | v doubles |
| I, n | diameter halved | v × 4 |
| I, A | n ten times smaller | v × 10 |
| A, n | current doubled | v doubles |

In wires joined in **series** the current is the same in each, so a thinner wire, or a material with a smaller n, has a larger drift velocity.

## Conductors, semiconductors and insulators (4.1.2(c))

| Type | Number density n | Behaviour |
|---|---|---|
| Conductor (metal) | Very large, about 10²⁸ to 10²⁹ m⁻³ | Large currents with tiny drift velocities |
| Semiconductor | Much smaller than in metals; increases with temperature or light | Carriers must drift much faster for the same current; conducts better when warmed |
| Insulator | Extremely small | Almost no current even with a large p.d. |

The comparison is made in terms of n alone, as the specification states.

## Common errors

- Reading a charge from the height of an I-t graph instead of its area.
- Using e for an ion that carries 2e or 3e.
- Subtracting the contributions of positive and negative ions in an electrolyte.
- Stating Kirchhoff's first law without linking it to conservation of charge.
- Using the diameter, or a diameter in mm, in place of the area in m².
- Saying electrons travel round the circuit quickly; the drift is slow, the field is fast.

## Exam technique

- **State** Kirchhoff's first law in words, then **explain** it: charge is conserved and does not accumulate at a junction.
- **Show that** I = Anev: write the volume passed in time t (Avt), the number of carriers (nAvt), the charge (nAvte) and divide by t.
- **Explain** the difference between metals and semiconductors: always use n, and connect it to v through I = Anev.
- **Calculate**: convert time to seconds and area to m² on separate lines.

## Official syllabus

OCR Advanced GCE in Physics A (H556), Version 3.0 (March 2026), for first assessment in 2017, published by OCR. Module 4, Electrons, waves and photons: section 4.1, learning outcomes 4.1.1(a)-(g) and 4.1.2(a)-(c).
