---
title: "Cambridge A Level Physics (9702): Equation of state"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Ideal gases"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 15.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-ideal-gases"
    subtopic: "a-equation-of-state"
description: "A focused guide to 15.2 Equation of state in Cambridge A Level Physics 9702: what makes a gas ideal, pV = nRT, pV = NkT, k = R/N_A, graphs and worked examples."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **15.2 Equation of state** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Ideal Gases study guide](/resources/a-physics-ideal-gases/) introduces all of Topic 15 with a single pressure calculation; this page goes further into the equation of state: what pV ∝ T means and when a real gas obeys it, how to choose between the molar and molecular forms, the standard graphs, and multi-step problems where the amount of gas changes. For quick recall use the [Equation of state revision notes](/resources/cambridge-a-level-physics-9702-a-equation-of-state-revision-notes/), and for exam-style questions the [Equation of state practice questions](/resources/cambridge-a-level-physics-9702-a-equation-of-state-practice/).

## What 15.2 asks you to do

The syllabus lists three outcomes. Candidates should be able to:

- understand that a gas obeying **pV ∝ T**, where T is the **thermodynamic temperature**, is known as an **ideal gas**
- recall and use the equation of state **pV = nRT**, where n is the amount of substance (number of moles), and **pV = NkT**, where N is the number of molecules
- recall that the **Boltzmann constant** k is given by **k = R/N_A**

Data list values: R = 8.31 J K⁻¹ mol⁻¹, k = 1.38 × 10⁻²³ J K⁻¹, N_A = 6.02 × 10²³ mol⁻¹.

## What "ideal" means

For a fixed amount of gas, an **ideal gas** is one for which the product pV is proportional to the thermodynamic temperature T. Written with the constant of proportionality for n moles, this is pV = nRT.

The proportionality contains three familiar special cases, each with one variable held constant:

| Held constant | Relationship | Graph that gives a straight line through the origin |
|---|---|---|
| T (and n) | p ∝ 1/V | p against 1/V |
| p (and n) | V ∝ T | V against T (in kelvin) |
| V (and n) | p ∝ T | p against T (in kelvin) |

All three require T in **kelvin**. Plotted against Celsius temperature, V or p gives a straight line that meets the temperature axis at about –273 °C, not at the origin: this is the extrapolation to absolute zero described in the [Temperature scales guide](/resources/cambridge-a-level-physics-9702-a-temperature-scales/).

**Real gases.** No real gas is exactly ideal. Real gases behave very nearly ideally at **low pressure** and at temperatures **well above** the point where they would liquefy, because the molecules are then far apart and their attractions matter little. Close to liquefaction, or at very high pressure, pV ∝ T no longer holds.

## Two forms of one law

```
pV = nRT      n = number of moles,      R = 8.31 J K⁻¹ mol⁻¹
pV = NkT      N = number of molecules,  k = 1.38 × 10⁻²³ J K⁻¹
```

Since N = nN_A, the two are the same equation if R = N_A k, that is:

```
k = R / N_A = 8.31 / 6.02 × 10²³ = 1.38 × 10⁻²³ J K⁻¹
```

So k is the gas constant **per molecule** and R is the gas constant **per mole**. Use whichever matches the quantity in the question; mixing n with k, or N with R, gives answers out by a factor of 6 × 10²³.

**Units check.** p in Pa, V in m³, T in K. Then pV is in joules (Pa m³ = N m⁻² × m³ = N m = J), which is why R is in J K⁻¹ mol⁻¹. Volumes in cm³ must be multiplied by 10⁻⁶, and litres (dm³) by 10⁻³.

## The fixed-amount shortcut

If no gas enters or leaves, nR is constant, so:

```
p₁V₁ / T₁ = p₂V₂ / T₂
```

This avoids R entirely. In a ratio, any consistent units for p and V can be used (kPa and cm³ are fine), but T must still be in kelvin.

## Worked example 1: a rising bubble

An air bubble of volume 2.0 cm³ is released at the bottom of a lake, where the pressure is 3.0 × 10⁵ Pa and the temperature is 7 °C. At the surface the pressure is 1.0 × 10⁵ Pa and the temperature is 17 °C. Calculate the bubble's volume at the surface.

```
T₁ = 280.15 K,  T₂ = 290.15 K
V₂ = V₁ × (p₁ / p₂) × (T₂ / T₁)
V₂ = 2.0 × (3.0 × 10⁵ / 1.0 × 10⁵) × (290.15 / 280.15)
V₂ = 6.2 cm³
```

*Annotation.* Writing the answer as a product of ratios makes the physics visible: the pressure falls to a third, which triples the volume, and the temperature rise adds a further 4%. Using Celsius temperatures (17/7) would make the volume more than double again, an obviously wrong answer.

## Worked example 2: when the amount of gas changes

A cylinder of volume 0.020 m³ contains nitrogen at a pressure of 6.0 × 10⁶ Pa and a temperature of 17 °C. After some gas is used, the pressure is 2.0 × 10⁶ Pa at the same temperature. The molar mass of nitrogen is 0.028 kg mol⁻¹. Calculate the mass of gas used.

```
T = 290.15 K
n₁ = p₁V / RT = (6.0 × 10⁶ × 0.020) / (8.31 × 290.15) = 49.8 mol
n₂ = p₂V / RT = (2.0 × 10⁶ × 0.020) / (8.31 × 290.15) = 16.6 mol
gas used = 33.2 mol × 0.028 kg mol⁻¹ = 0.93 kg
```

*Annotation.* p₁V₁/T₁ = p₂V₂/T₂ cannot be used here, because n changes. Whenever gas leaks, is pumped in, or is shared between containers, work with n (or N) for each state separately.

## Worked example 3: counting molecules

Calculate the number of air molecules in a room of volume 60 m³ at a pressure of 1.01 × 10⁵ Pa and a temperature of 20 °C.

```
N = pV / kT = (1.01 × 10⁵ × 60) / (1.38 × 10⁻²³ × 293.15)
N = 1.5 × 10²⁷ molecules
```

*Annotation.* The question asks for molecules, so pV = NkT is the direct route. Using pV = nRT would give n = 2.5 × 10³ mol, which then needs multiplying by N_A.

## Density of an ideal gas

Combining pV = nRT with n = m/M gives the density ρ = m/V:

```
ρ = pM / RT
```

For air (M ≈ 0.029 kg mol⁻¹) at 1.01 × 10⁵ Pa and 20 °C, ρ = (1.01 × 10⁵ × 0.029) ÷ (8.31 × 293.15) = 1.2 kg m⁻³. At constant pressure, the density of a gas is inversely proportional to its thermodynamic temperature, which is why warm air rises.

## Reading equation-of-state graphs

- **pV against T** for a fixed amount: a straight line through the origin with gradient **nR** (or Nk). Two lines for different amounts have gradients in the ratio of the amounts.
- **p against 1/V** at constant T: straight line through the origin with gradient **nRT**. A higher temperature gives a steeper line.
- **p against V** at constant T: a curve (an isothermal), with curves further from the axes for higher temperatures.

## Common mistakes

- **Celsius temperatures** in any form of the equation.
- **Volumes in cm³ or litres** substituted with pressures in pascals.
- **Using p₁V₁/T₁ = p₂V₂/T₂ when gas has escaped.**
- **Mixing n with k, or N with R.**
- **Defining an ideal gas as "a gas with no forces between molecules".** The syllabus definition is a gas obeying pV ∝ T; the molecular model belongs to kinetic theory.
- **Rounding T to 273 when the data suggest 273.15**, then losing a significant figure.

## Exam technique for the command words

- **State** or **explain** (what is meant by an ideal gas): a gas for which pV is proportional to the thermodynamic temperature (for a fixed amount of gas).
- **State** (the relationship between k and R): k = R/N_A, so k is the gas constant per molecule.
- **Calculate**: decide first whether the amount of gas is fixed; convert temperature to kelvin and volume to m³; show the rearranged equation before substituting.
- **Sketch** or **describe** (a graph): name the axes, say whether the line passes through the origin, and give the gradient in symbols.
- **Suggest** (when a real gas departs from ideal behaviour): at high pressure or low temperature, close to liquefaction.

## Related resources

- [Ideal Gases study guide](/resources/a-physics-ideal-gases/) — the whole of Topic 15
- [Equation of state revision notes](/resources/cambridge-a-level-physics-9702-a-equation-of-state-revision-notes/)
- [Equation of state practice questions](/resources/cambridge-a-level-physics-9702-a-equation-of-state-practice/)
- [The mole](/resources/cambridge-a-level-physics-9702-a-the-mole/) — subtopic 15.1
- [Kinetic theory of gases](/resources/cambridge-a-level-physics-9702-a-kinetic-theory-of-gases/) — subtopic 15.3, where pV = NkT is compared with kinetic theory

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
