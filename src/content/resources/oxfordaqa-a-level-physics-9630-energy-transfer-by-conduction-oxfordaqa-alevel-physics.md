---
title: "OxfordAQA A-Level Physics (9630): Energy transfer by conduction"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.11 – Thermal physics"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 11.2
syllabusTopics:
  - qualification: "a-level"
    topic: "thermal-physics-oxfordaqa-alevel"
    subtopic: "energy-transfer-by-conduction-oxfordaqa-alevel-physics"
description: "Study guide to OxfordAQA 9630 section 3.11.2: rate of conduction kAΔθ/L, temperature gradients, U-values for parallel surfaces and heat-loss calculations."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.11.2, Energy transfer by conduction, part of Section 3.11 Thermal physics. Section 3.11 is International A-level only. The wider unit, including internal energy, the first law and specific heat capacity, is in the [first law of thermodynamics, heating and conduction study guide](/resources/oxfordaqa-a-level-physics-first-law-of-thermodynamics-heating-and-conduction/). When you have worked through this page, condense it with the [conduction revision notes](/resources/oxfordaqa-a-level-physics-9630-energy-transfer-by-conduction-oxfordaqa-alevel-physics-revision-notes/) and test yourself with the [conduction practice questions](/resources/oxfordaqa-a-level-physics-9630-energy-transfer-by-conduction-oxfordaqa-alevel-physics-practice/).

## What the specification asks for

Section 3.11.2 is short, but every line of it can be examined as a calculation.

| Statement | What you must be able to do |
|---|---|
| Rate of energy transfer by conduction = kAΔθ/L, where k is the thermal conductivity | Use and rearrange the equation; state the unit of k; explain each factor |
| Use of U-values to calculate energy losses for parallel surfaces only | Find the loss through each surface and add them |
| Rate of energy transfer = UAΔθ where U = k/L | Convert between k and U; compare insulating materials and thicknesses |

## The physical picture behind kAΔθ/L

Conduction moves energy through a material from a hotter region to a colder one with no bulk movement of the material. Particles in the hot region vibrate with more energy and pass some of it to their neighbours through the forces between them. In metals, free electrons also move through the lattice and carry energy quickly, which is why metals have thermal conductivities hundreds of times larger than plastics or glass.

Each factor in the equation has a simple reason:

- **A (area at right angles to the flow):** a wider slab offers more parallel paths, so the rate is proportional to A.
- **Δθ (temperature difference across the slab):** a larger difference drives a larger flow, so the rate is proportional to Δθ.
- **L (thickness or length along the flow):** energy must pass through more layers of particles, so the rate is inversely proportional to L.
- **k (thermal conductivity):** a property of the material alone, measured in W m⁻¹ K⁻¹.

The unit of k follows from rearranging: k = rate × L / (AΔθ), so its unit is W × m / (m² × K) = W m⁻¹ K⁻¹. Because a temperature *difference* of 1 °C equals a difference of 1 K, Δθ can be worked out in either unit.

### Steady state and the temperature gradient

The equation applies in the **steady state**: the temperature at each point in the material has stopped changing. Then no point is gaining internal energy, so the same rate of energy transfer passes through every cross-section. For a uniform slab, or a rod whose sides are lagged so no energy leaks out sideways, this means the temperature falls linearly from the hot face to the cold face. The ratio Δθ/L is the **temperature gradient**, and the rate is k × A × (temperature gradient).

A rod that is not lagged loses energy through its sides, so less energy reaches the far end than enters the hot end. Its temperature profile curves, and kAΔθ/L no longer gives one rate for the whole rod. In a question, "the rod is well lagged" is the signal that the simple equation and a straight-line temperature profile apply.

### Why insulators trap air

Gases are poor conductors because their particles are far apart and collide only occasionally. Still air has a very low k. Fibreglass, foam and woven fabrics work mainly by trapping air in small pockets so it cannot circulate. If the air could move freely, convection would carry energy across the gap, which kAΔθ/L does not describe.

## Worked example 1: a lagged rod

A copper rod of length 0.45 m and diameter 2.0 cm is well lagged. One end sits in steam at 100 °C and the other in melting ice at 0 °C. Take k = 390 W m⁻¹ K⁻¹ for copper and the specific latent heat of fusion of ice as 3.34 × 10⁵ J kg⁻¹. Find (a) the rate of energy transfer, (b) the temperature at the midpoint and (c) the mass of ice melted each minute.

(a) A = π × (0.010)² = 3.14 × 10⁻⁴ m². Rate = kAΔθ/L = 390 × 3.14 × 10⁻⁴ × 100 / 0.45 = **27 W** (27.2 W unrounded).

(b) The rod is lagged and in the steady state, so the temperature falls linearly. Halfway along it is **50 °C**.

(c) Energy each minute = 27.2 × 60 = 1630 J. Mass melted = Q/l = 1630 / 3.34 × 10⁵ = **4.9 × 10⁻³ kg** (about 4.9 g).

The diameter was given in centimetres and halved for the radius. Leaving A in cm² would make the answer 10⁴ times too large.

## U-values: describing a whole layer

Builders rarely know the thermal conductivity of every brick and mortar joint. Instead each wall, window or roof is given a single **U-value**, the rate of energy transfer per square metre per kelvin of temperature difference. For a single uniform layer, U = k/L, with unit W m⁻² K⁻¹. The rate through that surface is then UAΔθ.

Two consequences matter in exam questions:

- A **low** U-value means a **good** insulator. Doubling the thickness of a layer halves U.
- U is a property of a particular layer of a particular thickness, while k belongs to the material. Two walls of the same material but different thickness have the same k and different U-values.

Quoted U-values for real windows are lower than k/L for the glass alone, because thin layers of still air at each surface also resist the flow. In an exam you use the U-value you are given.

### Parallel surfaces only

The specification limits U-value work to **parallel surfaces**: separate surfaces of one building, each with the same inside and outside temperatures, such as walls, windows, roof and door. Energy leaves through each one independently, so the rates add:

total rate = (U₁A₁ + U₂A₂ + U₃A₃ + …) × Δθ

You will not be asked to combine layers placed one behind another, such as plaster, brick and foam in one wall.

## Worked example 2: heat loss from a house

A house is kept at 20 °C when the outside temperature is 5 °C. Its surfaces are:

| Surface | Area / m² | U / W m⁻² K⁻¹ | UA / W K⁻¹ | Rate / W |
|---|---|---|---|---|
| Walls (excluding windows and door) | 95 | 0.30 | 28.5 | 428 |
| Windows | 18 | 2.8 | 50.4 | 756 |
| Roof | 60 | 0.16 | 9.6 | 144 |
| Door | 2.0 | 1.8 | 3.6 | 54 |
| **Total** | | | 92.1 | **1382** |

(a) Each rate is UA × 15 K. The total rate of energy loss is **1.4 × 10³ W**.

(b) Over one day: 1382 × 86 400 = **1.19 × 10⁸ J**, or 1.382 kW × 24 h = 33 kWh.

(c) The windows are replaced with glazing of U = 1.2 W m⁻² K⁻¹. The window loss becomes 1.2 × 18 × 15 = 324 W, so the total falls to 950 W, a saving of 432 W, or **31%** of the original loss.

The windows are under a tenth of the total area yet cause over half the loss. When a question asks which improvement is most effective, compare the UA values: the surface with the largest UA gives the biggest reduction for a given fractional improvement.

## Worked example 3: choosing an insulation thickness

Loft insulation has k = 0.040 W m⁻¹ K⁻¹. What thickness gives a U-value of 0.16 W m⁻² K⁻¹?

U = k/L, so L = k/U = 0.040 / 0.16 = **0.25 m**.

## Worked example 4: finding k from measurements

A board of insulating material 1.2 cm thick and of area 0.25 m² separates a heated box from the room. A heater of 18.0 W keeps the inside 30 K warmer than the room in the steady state, and all the heater's energy is assumed to pass through the board.

k = rate × L / (AΔθ) = 18.0 × 0.012 / (0.25 × 30) = **0.029 W m⁻¹ K⁻¹**.

If some energy escaped through the edges of the box, less than 18.0 W would pass through the board, so this calculated value of k would be too large.

## Common mistakes

- Using the diameter as the radius, or leaving the area in cm² or mm².
- Leaving the thickness in mm or cm. A 25 mm board has L = 0.025 m.
- Confusing k and U. Check the unit: W m⁻¹ K⁻¹ for k, W m⁻² K⁻¹ for U.
- Calling a material with a high U-value a good insulator; the reverse is true.
- Giving a rate in watts when the question asks for energy. Multiply by the time in seconds, or by hours for kWh.
- Applying the equation to an unlagged rod, or to a slab that is still warming up.
- Adding U-values directly. Add the products UA, or the separate rates.

## Exam technique

- **Calculate:** write the equation, substitute with units converted to SI, and give the answer with a unit and sensible significant figures.
- **Show that:** give the unrounded result before comparing with the stated value.
- **Explain:** link each factor to the physics. "Doubling L halves the rate because energy must pass through twice as many layers of particles" earns more than "L is on the bottom".
- **Compare** or **suggest:** use numbers. In a heat-loss question, the surface with the largest UA is the one to improve first.
- **Estimate:** state the values you assume (an area, a thickness) and keep the answer to one or two significant figures.

## Where next

- Condense this page with the [conduction revision notes](/resources/oxfordaqa-a-level-physics-9630-energy-transfer-by-conduction-oxfordaqa-alevel-physics-revision-notes/).
- Try the [conduction practice questions](/resources/oxfordaqa-a-level-physics-9630-energy-transfer-by-conduction-oxfordaqa-alevel-physics-practice/).
- Review the rest of the unit in the [first law of thermodynamics, heating and conduction study guide](/resources/oxfordaqa-a-level-physics-first-law-of-thermodynamics-heating-and-conduction/).

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.11.2 Energy transfer by conduction, published by OxfordAQA.
