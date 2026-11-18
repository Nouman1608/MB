---
title: "OxfordAQA A-Level Physics (9630): The Young modulus"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.2 – Mechanics and materials"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "AS"
order: 2.10
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-and-materials-oxfordaqa-alevel"
    subtopic: "the-young-modulus-oxfordaqa"
description: "Study guide to OxfordAQA 9630 section 3.2.10: the Young modulus, finding it from stress-strain graphs, Required practical 2 analysis and uncertainty."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.2.10, The Young modulus, part of Section 3.2 Mechanics and materials. It is shared International AS and A-level content. The wider picture, including Hooke's law, stress, strain and elastic strain energy from section 3.2.9, is in the [bulk properties of solids and the Young modulus study guide](/resources/oxfordaqa-a-level-physics-bulk-properties-of-solids-and-the-young-modulus/). When you have worked through this page, condense it with the [Young modulus revision notes](/resources/oxfordaqa-a-level-physics-9630-the-young-modulus-oxfordaqa-revision-notes/) and test yourself with the [Young modulus practice questions](/resources/oxfordaqa-a-level-physics-9630-the-young-modulus-oxfordaqa-practice/).

Take g = 9.81 N kg⁻¹ throughout.

## What the specification asks for

Section 3.2.10 has three parts:

| Statement | What you must be able to do |
|---|---|
| Young modulus E = tensile stress / tensile strain = FL/(AΔL) | Define E, use and rearrange the equation, handle units and prefixes |
| Use of stress-strain graphs to determine the Young modulus | Find E as the gradient of the linear region; compare materials |
| Required practical 2 | Describe and analyse the load-extension investigation for a wire, and evaluate its uncertainties |

## Why the Young modulus is useful

The spring constant k tells you how hard it is to stretch one particular object. Cut a wire in half and k doubles; use a thicker wire of the same metal and k rises again. That makes k useless for comparing materials. Dividing force by area (stress) removes the effect of thickness, and dividing extension by original length (strain) removes the effect of length. What remains, stress divided by strain, depends only on the material and its condition (for example its temperature). That ratio is the Young modulus:

E = tensile stress / tensile strain = (F/A) / (ΔL/L) = FL/(AΔL)

Points to hold on to:

- E is defined only where stress is proportional to strain, the region below the limit of proportionality. Beyond it, stress/strain is no longer constant and is not the Young modulus.
- Strain has no unit, so E has the unit of stress: pascals (N m⁻²). Metals have values of order 10¹¹ Pa, so answers are often quoted in GPa (1 GPa = 10⁹ Pa).
- A large E means a stiff material: a large stress produces only a small strain.
- For a wire, k = EA/L. This links the object property (k) to the material property (E) and is useful in ratio questions.

### Rearranging for the quantity you need

Many questions give E and ask for an extension, a force or a diameter. Rearranging FL/(AΔL) = E gives:

- extension ΔL = FL/(EA)
- force F = EAΔL/L
- area A = FL/(EΔL), then d = √(4A/π)

The extension is proportional to F and L and inversely proportional to E and to d². Halving the diameter quarters the area and so multiplies the extension by four.

### Worked example 1: extension of a lift cable

A steel cable of length 25 m and diameter 12 mm supports a load of mass 1500 kg at rest. The Young modulus of the steel is 2.0 × 10¹¹ Pa. Find the extension.

F = mg = 1500 × 9.81 = 1.47 × 10⁴ N.

A = π(d/2)² = π × (6.0 × 10⁻³)² = 1.13 × 10⁻⁴ m².

Stress = F/A = 1.47 × 10⁴ / 1.13 × 10⁻⁴ = 1.30 × 10⁸ Pa.

Strain = stress/E = 1.30 × 10⁸ / 2.0 × 10¹¹ = 6.5 × 10⁻⁴.

ΔL = strain × L = 6.5 × 10⁻⁴ × 25 = **0.016 m** (16 mm).

Working through stress and strain separately is slower than substituting into ΔL = FL/(EA), but every line can earn a method mark, and a slip in one line does not hide the rest of the method.

## Finding E from a stress-strain graph

On a graph of stress (vertical) against strain (horizontal), the gradient of the straight section through the origin is E. The method:

1. Identify the straight section. Do not use any point beyond where the line starts to curve.
2. Pick two points on the line, far apart. If the line passes through the origin you may use (0, 0) as one of them.
3. Read stress values with their prefix (MPa means 10⁶ Pa). Strain may be given as a percentage: 0.15% is a strain of 0.0015.
4. Gradient = Δstress / Δstrain, in Pa.

### Worked example 2: comparing two materials

The straight section of material P passes through a strain of 1.5 × 10⁻³ at a stress of 105 MPa. The straight section of material Q passes through a strain of 0.80 × 10⁻³ at 168 MPa. Both lines pass through the origin.

E for P = 105 × 10⁶ / 1.5 × 10⁻³ = **7.0 × 10¹⁰ Pa**.

E for Q = 168 × 10⁶ / 0.80 × 10⁻³ = **2.1 × 10¹¹ Pa**.

Q is three times stiffer. On a shared set of axes, its line is the steeper one. A question may then ask which material reaches a higher stress before its line stops being straight: that is a separate property (the limit of proportionality), and the steeper line does not have to go higher.

### Graphs with force and extension

If the axes are force and extension rather than stress and strain, the gradient is not E. A graph of force against extension has gradient F/ΔL = EA/L, so E = gradient × L / A. A graph of extension against force has gradient L/(EA), so E = L / (A × gradient). Check which quantity is on which axis before writing anything.

### Worked example 3: two wires in series

A steel wire (E = 2.0 × 10¹¹ Pa, length 1.20 m) is joined end to end with a brass wire (E = 1.0 × 10¹¹ Pa, length 0.80 m). Both have diameter 0.50 mm. The combination hangs vertically and carries a tension of 40 N throughout. Find the total extension.

A = π × (0.25 × 10⁻³)² = 1.96 × 10⁻⁷ m².

Steel: ΔL = FL/(EA) = 40 × 1.20 / (2.0 × 10¹¹ × 1.96 × 10⁻⁷) = 1.22 × 10⁻³ m.

Brass: ΔL = 40 × 0.80 / (1.0 × 10¹¹ × 1.96 × 10⁻⁷) = 1.63 × 10⁻³ m.

Total = **2.85 × 10⁻³ m**. In series, the tension is the same in each wire (ignoring their weight) and the extensions add. The shorter brass wire stretches more because its E is half that of steel.

## Required practical 2 in depth

The specification describes this practical as an "Investigation of load-extension graph for a wire and determination of the Young modulus for the material of the wire". Examiners can ask you to describe it, process specimen results or evaluate the method.

**Why each design choice matters**

- *Long, thin wire.* For a given load, ΔL ∝ L/d², so a long, thin wire gives an extension of a millimetre or more, large enough to measure with a small percentage uncertainty.
- *Reference wire (where used).* Some set-ups hang two wires of the same material from the same support, with a vernier scale fixed to the unloaded reference wire and read against the loaded test wire. If the support sags or the temperature changes, both wires are affected equally, so the reading still records only the extension caused by the load.
- *Micrometer for diameter, at several points and in two perpendicular directions.* The diameter is the smallest length measured and it is squared, so it usually contributes the largest percentage uncertainty.
- *Original length from the clamp to the marker.* This is the length that stretches; use a metre rule or tape measure.
- *Load and unload in steps.* If the readings on unloading return to the starting values, the wire has stayed within its elastic limit, so the data apply to the region where E is defined.
- *Safety.* Goggles protect the eyes if the wire snaps; keep feet clear of the masses.

### Worked example 4: analysis with uncertainty

A student plots force (vertical) against extension (horizontal) for a wire of length 2.000 ± 0.002 m and mean diameter 0.38 ± 0.01 mm. The gradient of the best-fit line is 7.4 × 10³ N m⁻¹; the steepest and least steep acceptable lines give gradients differing from this by about 3%.

A = π × (0.19 × 10⁻³)² = 1.134 × 10⁻⁷ m².

E = gradient × L / A = 7.4 × 10³ × 2.000 / 1.134 × 10⁻⁷ = 1.30 × 10¹¹ Pa.

Percentage uncertainties: diameter 0.01/0.38 = 2.6%, so area 2 × 2.6 = 5.3%; length 0.1%; gradient 3%.

Total ≈ 5.3 + 0.1 + 3 = 8.4%, so E = **(1.30 ± 0.11) × 10¹¹ Pa**.

The diameter dominates. Improving the length measurement would make almost no difference; measuring the diameter at more points, or using a thinner wire with a micrometer of better resolution relative to it, would.

## Common mistakes

- Taking the gradient of a force-extension graph as E, without multiplying by L/A.
- Using the radius as the diameter, or forgetting to square it.
- Leaving the diameter in mm or the stress in MPa when substituting.
- Using the stretched length instead of the original length in the strain.
- Using a point beyond the limit of proportionality when finding a gradient.
- Saying a thicker wire has a larger Young modulus: it has a larger k, but the same E.
- Adding the uncertainty in d once instead of twice when finding the uncertainty in A.

## Exam technique

- **Define**: "the ratio of tensile stress to tensile strain, within the limit of proportionality". Both the ratio and the condition are expected.
- **Calculate / determine**: show stress and strain (or the rearranged equation) before the final value, and give a unit.
- **Show that**: work to at least one more significant figure than the value you are given, then state that it rounds to it.
- **Describe** (practical): name the measuring instrument for each quantity, say how you control or check the elastic limit, and say how E comes from the graph.
- **Explain** (design choices): link each choice to a smaller percentage uncertainty or a fairer measurement, as in the list above.
- **Evaluate**: compare the percentage uncertainties and identify the largest one before suggesting an improvement.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.2.10 The Young modulus, published by OxfordAQA.
