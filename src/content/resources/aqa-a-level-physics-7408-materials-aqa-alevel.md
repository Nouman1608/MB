---
title: "AQA A-Level Physics (7408): Materials"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Mechanics and materials"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 4.2
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-and-materials-aqa-alevel"
    subtopic: "materials-aqa-alevel"
description: "Study guide to AQA 7408 section 3.4.2 Materials: density, Hooke's law, stress, strain, elastic strain energy, stress-strain curves, the Young modulus and Required practical 4."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide teaches section 3.4.2 Materials of the AQA AS and A-level Physics specification (7407/7408): 3.4.2.1 Bulk properties of solids and 3.4.2.2 The Young modulus, including Required practical 4. It goes further than the summary in the [Mechanics and materials study guide](/resources/aqa-a-level-physics-mechanics-and-materials/), with new worked examples and more on reading force–extension and stress–strain graphs. Use it with the [Materials revision notes](/resources/aqa-a-level-physics-7408-materials-aqa-alevel-revision-notes/) and the [Materials practice questions](/resources/aqa-a-level-physics-7408-materials-aqa-alevel-practice/). Take g = 9.81 m s⁻².

## What 3.4.2 covers

| Sub-section | You must be able to |
|---|---|
| 3.4.2.1 Bulk properties of solids | Use density ρ = m/V; Hooke's law F = kΔL and the elastic limit; tensile stress and strain; breaking stress; derive and use energy stored = ½FΔL; describe plastic, brittle and fracture behaviour from force–extension graphs; apply energy conservation to elastic strain energy; interpret simple stress–strain curves; appreciate energy issues in transport design |
| 3.4.2.2 The Young modulus | Define and use E = tensile stress / tensile strain = FL/(AΔL); find E from the gradient of a stress–strain graph; Required practical 4 |

## Density

**Density ρ = m/V**, unit kg m⁻³. It is a property of the material, not of the object.

**Worked example 1.** A copper cylinder has radius 1.0 cm, length 5.0 cm and mass 140 g.

```
V = πr²l = π × (0.010)² × 0.050 = 1.57 × 10⁻⁵ m³
ρ = m/V = 0.140 / 1.57 × 10⁻⁵ = 8.9 × 10³ kg m⁻³
```

Convert centimetres and grams to metres and kilograms *before* substituting; mixing them gives an answer wrong by a power of ten.

## Hooke's law

Up to the **limit of proportionality**, the extension of a spring or wire is proportional to the force: **F = kΔL**, where k is the **stiffness** or **spring constant** (N m⁻¹). Beyond the limit of proportionality the graph curves. The **elastic limit** is the largest force for which the object still returns to its original length when the force is removed; beyond it, some deformation is permanent.

**Worked example 2.** A spring extends 4.0 cm under a 6.0 N load. Its stiffness is k = 6.0 / 0.040 = **150 N m⁻¹**. Under a 9.0 N load it would extend 6.0 cm, provided this is still within the limit of proportionality.

## Elastic strain energy

The work done stretching a material is the **area under its force–extension graph**. In the Hooke's-law region the graph is a straight line through the origin, so the area is a triangle:

**energy stored = ½FΔL** (= ½kΔL² for a spring)

For the spring in Worked example 2 stretched by 6.0 cm: E = ½ × 150 × 0.060² = **0.27 J**.

Elastic strain energy can be transferred to kinetic and gravitational potential energy. **Worked example 3.** A toy launcher compresses a spring of stiffness 400 N m⁻¹ by 5.0 cm and fires a 20 g ball vertically.

```
stored energy = ½ × 400 × 0.050² = 0.50 J
launch speed: ½mv² = 0.50 → v = √(2 × 0.50 / 0.020) = 7.1 m s⁻¹
maximum height (no air resistance): mgh = 0.50 → h = 0.50 / (0.020 × 9.81) = 2.5 m
```

If the material is stretched beyond its elastic limit and then unloaded, it does not return to its original length. Some of the work done has gone into permanently deforming it (and heating it), so less energy is returned than was stored. This **energy to deform** is why crumple zones in cars are designed to deform plastically: they absorb kinetic energy in a collision rather than returning it to the occupants. Such design choices raise ethical questions about balancing safety, weight and cost.

## Stress, strain and breaking stress

- **Tensile stress** = F/A, unit Pa (N m⁻²).
- **Tensile strain** = ΔL/L, no unit.
- **Breaking stress** (ultimate tensile stress) = the maximum stress the material can withstand before it breaks.

Stress and strain describe the material, independent of the size of the sample. A thicker wire of the same material needs a larger force to reach the same stress.

**Worked example 4.** A nylon line of diameter 0.40 mm has breaking stress 7.5 × 10⁷ Pa (an illustrative value). What load breaks it?

```
A = π × (0.20 × 10⁻³)² = 1.26 × 10⁻⁷ m²
F = stress × A = 7.5 × 10⁷ × 1.26 × 10⁻⁷ = 9.4 N
```

## Interpreting force–extension and stress–strain graphs

| Behaviour | What the graph shows |
|---|---|
| Elastic, Hooke's law | Straight line through the origin |
| Limit of proportionality | Point where the straight line starts to curve |
| Elastic limit | Beyond it, unloading leaves a permanent extension |
| Plastic behaviour (ductile metal, such as copper) | Large extension for little extra force after the elastic limit |
| Brittle behaviour (glass, cast iron) | Straight line up to fracture with no plastic region |
| Fracture | The end point of the graph, at the breaking stress |

When a ductile metal is loaded past its elastic limit and then unloaded, the unloading line is parallel to the original straight section and meets the extension axis at the permanent extension.

## The Young modulus

**Young modulus E = tensile stress / tensile strain = FL/(AΔL)**, unit Pa. It measures the stiffness of a *material*, and is the gradient of the straight part of a stress–strain graph.

**Worked example 5.** A copper wire 2.5 m long and 0.60 mm in diameter carries a 50 N load. Copper's Young modulus is 1.2 × 10¹¹ Pa. Find the extension and the energy stored.

```
A = π × (0.30 × 10⁻³)² = 2.83 × 10⁻⁷ m²
stress = 50 / 2.83 × 10⁻⁷ = 1.77 × 10⁸ Pa
strain = stress / E = 1.77 × 10⁸ / 1.2 × 10¹¹ = 1.47 × 10⁻³
ΔL = strain × L = 1.47 × 10⁻³ × 2.5 = 3.7 × 10⁻³ m (3.7 mm)
energy stored = ½FΔL = ½ × 50 × 3.7 × 10⁻³ = 0.092 J
```

This assumes the stress is within the limit of proportionality.

## Required practical 4

**Determination of the Young modulus by a simple method.**

1. Clamp a long, thin wire and hang a marker and load from it; a reference wire or fixed scale beside it helps measure small extensions.
2. Measure the original length L with a metre rule or tape.
3. Measure the diameter with a micrometer at several points and orientations; average them.
4. Add masses in equal steps, recording the extension each time; then unload to check the wire returns.
5. Plot stress against strain (or F against ΔL); E is the gradient of the straight section (or gradient × L/A).

A long, thin wire gives an extension large enough to measure. The diameter usually has the largest percentage uncertainty, which is doubled because area depends on d². Wear eye protection, as a wire can snap, and keep feet clear of the load.

## Common mistakes

- Using the diameter in A = πr².
- Forgetting to convert mm to m before squaring.
- Giving strain a unit.
- Calling the elastic limit and the limit of proportionality the same point.
- Using ½FΔL beyond the Hooke's-law region, where the graph is curved and the area must be found another way.
- Using F = kΔL with the length, not the extension.
- Saying the Young modulus depends on the wire's dimensions.

## Exam technique

"Define" questions need precise wording: the elastic limit is about returning to the original length; the Young modulus is a ratio of tensile stress to tensile strain. "Describe" questions on Required practical 4 need the measuring instruments, the repeats for the diameter, the graph and how E comes from its gradient. In "explain" questions on graphs, refer to a feature you can point to: the straight section, the curve, the end point.

## Frequently asked questions

**What is the difference between the limit of proportionality and the elastic limit?**
The limit of proportionality is where force stops being proportional to extension. The elastic limit is the largest force after which the material still returns to its original length. They are often close together but are not the same point.

**Why is a long, thin wire used to measure the Young modulus?**
A long, thin wire gives a larger extension for a given load, which reduces the percentage uncertainty in measuring the extension.

**How is energy stored in a stretched wire found?**
It is the area under the force–extension graph. In the region where Hooke's law applies, this area is a triangle, so the energy stored is half the force multiplied by the extension.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), for AS and A-level exams June 2016 onwards, published by AQA. Section 3.4.2 Materials.
