---
title: "OxfordAQA A-Level Physics (9630): Ideal gases"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.11 – Thermal physics"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 11.3
syllabusTopics:
  - qualification: "a-level"
    topic: "thermal-physics-oxfordaqa-alevel"
    subtopic: "ideal-gases-oxfordaqa-alevel-physics"
description: "Study guide to OxfordAQA 9630 section 3.11.3: gas law graphs, absolute zero, pV = nRT and pV = NkT, molar mass, work done pΔV and Required practical 9 data."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.11.3, Ideal gases, part of Section 3.11 Thermal physics, which is International A-level only. The combined treatment of ideal gases with the molecular model is in the [ideal gases and kinetic theory study guide](/resources/oxfordaqa-a-level-physics-ideal-gases-and-kinetic-theory/). This page adds graph reading, changing-mass problems, gas density and work done on non-horizontal p–V lines. Condense it afterwards with the [ideal gases revision notes](/resources/oxfordaqa-a-level-physics-9630-ideal-gases-oxfordaqa-alevel-physics-revision-notes/) and test yourself with the [ideal gases practice questions](/resources/oxfordaqa-a-level-physics-9630-ideal-gases-oxfordaqa-alevel-physics-practice/).

Values used: R = 8.31 J mol⁻¹ K⁻¹, k = 1.38 × 10⁻²³ J K⁻¹, N_A = 6.02 × 10²³ mol⁻¹. Molar mass of air 0.029 kg mol⁻¹.

## What the specification asks for

| Statement | What you must be able to do |
|---|---|
| Gas laws as experimental relationships between p, V, T and the mass of the gas | State each law with its conditions; recognise and sketch its graphs |
| Concept of absolute zero of temperature | Explain how it is found and why kelvin must be used |
| pV = nRT for n moles and pV = NkT for N molecules | Use either form, including when the mass of gas changes |
| Work done = pΔV | Calculate work at constant pressure; use the area under a p–V graph |
| Avogadro constant, molar gas constant, Boltzmann constant | Link them through k = R/N_A |
| Molar mass and molecular mass | Convert between mass, moles and number of molecules |
| Required practical 9 | Investigate Boyle's law and Charles's law and analyse the data |

## Reading the gas law graphs

Each gas law is an **experimental** result for a fixed mass of gas with one variable held constant. Examiners often test them through graphs, so know the shape and the reason for each.

| Law (fixed mass) | Held constant | Graph | Shape |
|---|---|---|---|
| Boyle's law | T | p against V | Curve: p halves when V doubles |
| Boyle's law | T | p against 1/V | Straight line through the origin |
| Boyle's law | T | pV against p | Horizontal line |
| Charles's law | p | V against θ / °C | Straight line cutting the θ-axis at −273 °C |
| Charles's law | p | V against T / K | Straight line through the origin |
| Pressure law | V | p against T / K | Straight line through the origin |

On a p–V graph, each curve at one temperature is an **isotherm**. A higher temperature gives a larger pV, so its isotherm lies further from the origin. If two isotherms are drawn for the same gas, the outer one is at the higher temperature.

The **mass** of gas enters through n or N. At fixed V and T, doubling the amount of gas doubles the pressure, because pV = nRT gives p ∝ n. This is what happens when air is pumped into a rigid tyre.

## Absolute zero

Extrapolating a Charles's law or pressure law line to zero volume or zero pressure gives the same temperature, about −273 °C, for every gas. This is **absolute zero**: the temperature at which an ideal gas would exert no pressure. It is the zero of the kelvin scale, so T / K = θ / °C + 273.

Every gas equation is a proportion with T, so it only works with a scale whose zero is the true zero. A rise from 10 °C to 20 °C does not double the pressure; a rise from 283 K to 566 K does.

## The ideal gas equation in both forms

pV = nRT (n moles) and pV = NkT (N molecules) describe the same gas, so nR = Nk, and k = R/N_A.

- **Molar mass M:** mass of one mole, in kg mol⁻¹. Moles n = total mass / M.
- **Molecular mass m:** mass of one molecule, m = M/N_A.
- Number of molecules N = nN_A.

An **ideal gas** obeys pV = nRT at all pressures and temperatures. Real gases behave almost ideally at low pressure and at temperatures well above their boiling points.

### Gas density

Substituting n = mass/M into pV = nRT gives a useful form for density ρ = mass/V:

ρ = pM / RT

At fixed pressure, a hotter gas is less dense. Dividing pV = NkT by V gives the number of molecules per cubic metre, N/V = p/kT, which is the same for every ideal gas at the same p and T.

## Worked example 1: pumping up a tyre

A tyre of fixed volume 2.0 × 10⁻³ m³ holds air at 2.0 × 10⁵ Pa and 290 K. It is pumped to 4.5 × 10⁵ Pa at the same temperature. Find the mass of air added.

Volume and temperature are fixed, so the change in moles comes only from the change in pressure:
Δn = ΔpV/RT = (2.5 × 10⁵ × 2.0 × 10⁻³) / (8.31 × 290) = 500 / 2410 = 0.207 mol
Mass added = 0.207 × 0.029 = **6.0 × 10⁻³ kg** (6.0 g).

## Worked example 2: a leaking cylinder

An oxygen cylinder of volume 0.050 m³ holds gas at 1.5 × 10⁷ Pa and 290 K. Later the gas is at 9.0 × 10⁶ Pa and 280 K. What fraction of the gas has escaped, and what mass is this? Molar mass of oxygen = 0.032 kg mol⁻¹.

V is fixed, so n ∝ p/T.
Fraction remaining = (9.0 × 10⁶ / 280) / (1.5 × 10⁷ / 290) = 0.621, so **38%** has escaped.
Initial moles = (1.5 × 10⁷ × 0.050) / (8.31 × 290) = 311 mol, a mass of 9.96 kg.
Mass escaped = 0.379 × 9.96 = **3.8 kg**.

Do not use p₁V₁/T₁ = p₂V₂/T₂ here: that equation assumes the mass is fixed, and in this problem it is not.

## Worked example 3: density and molecules per cubic metre

Find the density of nitrogen (M = 0.028 kg mol⁻¹) at 1.01 × 10⁵ Pa and 273 K, the mass of one molecule and the number of molecules per m³.

ρ = pM/RT = (1.01 × 10⁵ × 0.028) / (8.31 × 273) = **1.25 kg m⁻³**
m = M/N_A = 0.028 / 6.02 × 10²³ = **4.65 × 10⁻²⁶ kg**
N/V = p/kT = 1.01 × 10⁵ / (1.38 × 10⁻²³ × 273) = **2.68 × 10²⁵ m⁻³**

Check: (N/V) × m = 2.68 × 10²⁵ × 4.65 × 10⁻²⁶ = 1.25 kg m⁻³, the same density.

## Work done on a p–V graph

At constant pressure, the work done by a gas that expands is pΔV. When pressure changes during the process, the work is the **area under the p–V graph** between the start and end volumes. For a straight line this area is a trapezium.

## Worked example 4: work along a sloping line

A gas changes from 3.0 × 10⁵ Pa and 1.0 × 10⁻³ m³ to 1.0 × 10⁵ Pa and 3.0 × 10⁻³ m³ along a straight line on a p–V graph.

Work done by the gas = area = ½ × (3.0 × 10⁵ + 1.0 × 10⁵) × 2.0 × 10⁻³ = **400 J**.

pV = 300 J at both ends, so the start and end temperatures are equal. The gas has done 400 J of work while ending at its starting temperature. For an ideal gas the internal energy then returns to its starting value, so by the first law about 400 J must have been supplied by heating along the way. Questions often combine section 3.11.3 with ΔU = Q + W in this way.

## Required practical 9: analysing the data

The method is in the wider study guide. Here the focus is on processing results.

**Boyle's law readings** (air in a syringe at 293 K):

| V / cm³ | 50 | 40 | 30 | 25 | 20 |
|---|---|---|---|---|---|
| p / kPa | 101 | 126 | 168 | 203 | 252 |
| pV / J | 5.05 | 5.04 | 5.04 | 5.08 | 5.04 |

The products agree to within 1%, which supports pV = constant. A plot of p against 1/V should give a straight line through the origin. Using pV = 5.05 J, the amount of trapped air is n = pV/RT = 5.05 / (8.31 × 293) = 2.07 × 10⁻³ mol.

Points to make in an evaluation:
- Push the plunger slowly and wait after each change: compression warms the gas, and Boyle's law needs a constant temperature.
- Volume trapped in the connecting tube adds the same amount to every reading. It makes the p against 1/V line miss the origin.
- For Charles's law, the line of V against θ should meet the axis near −273 °C; a short temperature range makes the extrapolated intercept uncertain.

## Common mistakes

- Using °C in any gas equation, or adding 273 to a temperature difference.
- Using p₁V₁/T₁ = p₂V₂/T₂ when gas has leaked or been added.
- Leaving volume in cm³ or dm³ (1 cm³ = 10⁻⁶ m³; 1 dm³ = 10⁻³ m³) or molar mass in g mol⁻¹.
- Confusing molar mass (per mole) with molecular mass (per molecule).
- Using pΔV when the pressure changes; use the area under the graph instead.
- Describing the gas laws as following from kinetic theory. They are experimental results; the theory explains them later, in section 3.11.4.

## Exam technique

- **State** a gas law: give the proportionality and both conditions (fixed mass, and the quantity held constant).
- **Sketch:** label axes with quantities and units, show whether the line passes through the origin, and mark −273 °C where relevant.
- **Calculate:** decide first whether the mass of gas is fixed. If it is not, work in moles.
- **Show that:** finish with the unrounded result before comparing it with the given value.
- **Explain** a practical precaution: say which variable it keeps constant and why the law needs that.

## Where next

- Condense with the [ideal gases revision notes](/resources/oxfordaqa-a-level-physics-9630-ideal-gases-oxfordaqa-alevel-physics-revision-notes/).
- Try the [ideal gases practice questions](/resources/oxfordaqa-a-level-physics-9630-ideal-gases-oxfordaqa-alevel-physics-practice/).
- Continue to the molecular explanation in the [kinetic theory of gases study guide](/resources/oxfordaqa-a-level-physics-9630-kinetic-theory-of-gases-oxfordaqa-alevel-physics/).

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.11.3 Ideal gases, published by OxfordAQA.
