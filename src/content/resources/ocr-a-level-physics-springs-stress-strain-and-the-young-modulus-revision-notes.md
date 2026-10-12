---
title: "OCR A Level Physics A: Springs, stress, strain and the Young modulus (H556) -- Revision Notes"
seoTitle: "OCR A Level Physics Springs, Young Modulus Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Springs, stress, strain and the Young modulus"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 46
syllabusTopics:
  - qualification: "a-level"
    topic: "forces-and-motion-ocr-alevel"
    subtopic: "materials-ocr-alevel"
description: "Revision notes on springs, Hooke's law, elastic energy, stress, strain, the Young modulus and stress-strain graphs for OCR A Level Physics A (H556)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
These notes condense sections 3.4.1 (Springs) and 3.4.2 (Mechanical properties of matter) of the OCR Advanced GCE in Physics A specification (H556), Version 3.0 (March 2026), for first assessment in 2017. Longer explanations and fuller worked examples are in the [study guide](/resources/ocr-a-level-physics-springs-stress-strain-and-the-young-modulus/).

Related pages: the [practice questions](/resources/ocr-a-level-physics-springs-stress-strain-and-the-young-modulus-practice/), the [OCR A Level Physics hub](/boards/ocr/a-level/physics/), the [printable checklist](/checklists/ocr/a-level/physics/) and the [free diagnostics](/diagnostics/).

## Definitions to recall

- **Tensile deformation:** pulling forces make an object longer; the change is the extension.
- **Compressive deformation:** pushing forces make an object shorter; the change is the compression.
- **Hooke's law:** below the limit of proportionality, a spring's extension doubles when the force doubles.
- **Force constant k:** force per unit extension for a given spring or wire, in N m⁻¹.
- **Limit of proportionality:** the point beyond which force-extension is no longer a straight line through the origin.
- **Elastic deformation:** the object returns to its original size and shape when the force is removed.
- **Plastic deformation:** a permanent change in size or shape remains after the force is removed.
- **Tensile stress:** force per unit cross-sectional area.
- **Tensile strain:** extension divided by original length.
- **Ultimate tensile strength (UTS):** the maximum tensile stress a material can withstand before breaking.
- **Young modulus:** tensile stress divided by tensile strain, within the limit of proportionality.

## Equations and units

| Quantity | Equation | Unit |
|---|---|---|
| Hooke's law | F = kx | N |
| Force constant | k = F/x | N m⁻¹ |
| Work done / stored energy (linear) | E = ½Fx = ½kx² | J |
| Stress | σ = F/A | Pa (N m⁻²) |
| Strain | ε = x/L | none |
| Young modulus | E = σ/ε = FL/(Ax) | Pa |
| Link between k and E | k = EA/L | N m⁻¹ |
| Wire cross-section | A = πd²/4 | m² |

The symbol E is used for both elastic energy and the Young modulus. Use the context and units to tell them apart.

## Graphs: what to read off

| Graph | Gradient | Area under graph |
|---|---|---|
| Force (y) against extension (x) | k | Work done / energy stored |
| Extension (y) against force (x) | 1/k | Not used |
| Stress (y) against strain (x), straight part | Young modulus | Not used |
| Extension (y) against force (x), wire | L/(EA) | Not used |

Force-extension features: straight through the origin means Hooke's law holds; where it curves is the limit of proportionality; a steeper line (force on y) is a stiffer sample.

## Method: work done from a graph

1. Identify the force axis and the extension axis, and check the units (mm to m, kN to N).
2. If the line is straight through the origin, use ½Fx.
3. Otherwise split into triangles, rectangles and trapeziums, or count squares.
4. Convert the area into joules: area = (force per square) × (extension per square) × number of squares.

**Reminder.** A force rises linearly from 0 to 12 N over the first 0.030 m, then stays at 12 N to 0.070 m. Work = ½ × 12 × 0.030 + 12 × 0.040 = 0.18 + 0.48 = 0.66 J.

## Method: Young modulus of a metal wire

1. Choose a long, thin wire, clamped firmly at the top, kept taut by a small weight.
2. Measure the original length L with a metre rule or tape.
3. Use a micrometer at several positions and in two perpendicular directions, then average the diameters and calculate A = πd²/4.
4. Add equal masses in steps and record the extension at each, against a fixed scale. Unload too, to check the wire is elastic.
5. Plot extension (y) against force (x). The gradient is L/(EA).
6. E = L / (A × gradient).

Key points: the diameter is the largest source of uncertainty because A ∝ d², so a 2% uncertainty in d gives 4% in A. Wear eye protection and use sand or foam to catch falling masses. Keep extensions inside the elastic region.

**Reminder.** L = 1.50 m, d = 0.40 mm, gradient 7.0 × 10⁻⁵ m N⁻¹. A = π × (0.20 × 10⁻³)² = 1.26 × 10⁻⁷ m². E = 1.50 / (1.26 × 10⁻⁷ × 7.0 × 10⁻⁵) = 1.7 × 10¹¹ Pa.

## Method: plastic deformation on a force-extension graph

1. Find the area under the loading line for the total work done.
2. Draw the unloading line from the maximum point, parallel to the original straight section.
3. Where it meets zero force is the permanent extension.
4. The area under the unloading line is the energy recovered. Total work minus energy recovered is dissipated as thermal energy.

**Reminder.** A strip has initial slope 400 N m⁻¹. It is loaded to 24 N at 0.090 m. The unloading line reaches zero force at 0.090 - 24/400 = 0.030 m, so the permanent extension is 0.030 m. Energy recovered = ½ × 24 × 0.060 = 0.72 J.

## Stress-strain graph shapes

| Material | Graph features | Behaviour at the end |
|---|---|---|
| Ductile (for example copper) | Straight line, then curve; possible yield point; peak at UTS; wire necks | Large plastic deformation, then breaks |
| Brittle (for example glass) | Straight line almost to the end | Fractures suddenly, little plastic deformation |
| Polymeric: rubber | Curve, not straight; loading and unloading curves differ | Returns to original length; the loop is energy dissipated as thermal energy |
| Polymeric: polythene | Initial rise, then yields and extends a long way | Permanent extension |

For a metal loaded past its elastic limit, the unloading line is approximately parallel to the original straight section and the graph ends at a non-zero extension: the permanent extension.

## Must-know distinctions

- **Stiffness k and Young modulus E.** k depends on the sample's size; E depends only on the material. k = EA/L.
- **Elastic and plastic.** Elastic: returns when unloaded. Plastic: does not.
- **Limit of proportionality and elastic limit.** One is about the graph being straight, the other about returning to the original size.
- **Stress and strain.** Stress has unit Pa; strain has no unit.
- **UTS and breaking force.** UTS is a stress. Breaking force is a force and depends on the area.
- **Tensile and compressive.** Both can be handled with F = kx, using the size of the change in length.

## Quick self-test

1. State Hooke's law.
2. A force of 18 N stretches a spring by 0.24 m. Find k.
3. The same spring is extended by 0.12 m. How much energy is stored?
4. A spring with k = 300 N m⁻¹ is compressed by 5.0 cm. What force acts on it?
5. A force of 300 N acts on a wire of cross-sectional area 1.5 mm². Find the stress.
6. A wire of length 1.25 m extends by 1.5 mm. Find the strain.
7. A material has stress 75 MPa at strain 1.25 × 10⁻³ in the elastic region. Find the Young modulus.
8. A rod of cross-section 4.0 mm² breaks under 1.6 kN. Find the UTS.
9. A spring with k = 250 N m⁻¹ stores 0.20 J. What is its extension?
10. A wire has E = 1.2 × 10¹¹ Pa, A = 0.80 mm² and L = 3.0 m. Find k.
11. Why is the wire's diameter measured at several places?
12. How does a rubber band's graph differ from a spring's, and what does the enclosed loop between its loading and unloading curves represent?

### Answers

1. Within the limit of proportionality, extension is proportional to force.
2. k = 18 / 0.24 = 75 N m⁻¹.
3. E = ½ × 75 × 0.12² = 0.54 J.
4. F = 300 × 0.050 = 15 N.
5. 1.5 mm² = 1.5 × 10⁻⁶ m². Stress = 300 / 1.5 × 10⁻⁶ = 2.0 × 10⁸ Pa.
6. Strain = 1.5 × 10⁻³ / 1.25 = 1.2 × 10⁻³.
7. E = 75 × 10⁶ / 1.25 × 10⁻³ = 6.0 × 10¹⁰ Pa.
8. UTS = 1600 / 4.0 × 10⁻⁶ = 4.0 × 10⁸ Pa.
9. x = √(2E/k) = √(2 × 0.20 / 250) = 0.040 m.
10. k = EA/L = 1.2 × 10¹¹ × 0.80 × 10⁻⁶ / 3.0 = 3.2 × 10⁴ N m⁻¹.
11. The wire may not be uniform or perfectly circular. A is proportional to d², so any error in d is doubled in A. Averaging reduces this.
12. The rubber band's graph is a curve, not a straight line, and the unloading curve lies below the loading curve. The loop between them represents energy dissipated as thermal energy.

## Where marks are usually lost

- Using the total length of a spring or wire as the extension.
- Leaving mm, mm² or kN in the equation and not converting to m, m² or N.
- Squaring the diameter without halving it first for the radius, or using the diameter as the radius.
- Quoting E = σ/ε without saying it only applies within the limit of proportionality.
- Describing plastic and elastic deformation without referring to what happens when the force is removed.
- Using ½Fx when the graph is not a straight line through the origin.
- Saying "the graph is a straight line" for a rubber band, or forgetting that its loading and unloading curves differ.
- Calling the gradient of an extension-force graph k, when it is 1/k.
- In practical answers, giving a single diameter reading, or measuring the extension of a wire over a short length, which makes the percentage uncertainty large.

## Official syllabus

OCR Advanced GCE in Physics A (H556) specification, Version 3.0 (March 2026), for first assessment in 2017, published by OCR. Sections 3.4.1 Springs and 3.4.2 Mechanical properties of matter.
