---
title: "Cambridge A Level Physics (9702): Specific heat capacity and specific latent heat"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Temperature"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14.3
syllabusTopics:
  - qualification: "a-level"
    topic: "a-temperature"
    subtopic: "a-specific-heat-capacity-and-specific-latent-heat"
description: "A focused guide to 14.3 in Cambridge A Level Physics 9702: defining and using c and L, fusion versus vaporisation, heating curves and multi-stage examples."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **14.3 Specific heat capacity and specific latent heat** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Temperature study guide](/resources/a-physics-temperature/) introduces all of Topic 14 with single-step examples; this page goes further into the two definitions and how they are used together: precise wording, electrical heating data, why vaporisation needs so much more energy than melting, reading a heating curve quantitatively, and a method that removes the effect of energy losses. For quick recall use the [revision notes for this subtopic](/resources/cambridge-a-level-physics-9702-a-specific-heat-capacity-and-specific-latent-heat-revision-notes/), and for exam-style questions the [practice questions for this subtopic](/resources/cambridge-a-level-physics-9702-a-specific-heat-capacity-and-specific-latent-heat-practice/).

## What 14.3 asks you to do

The syllabus lists two outcomes. Candidates should be able to:

- **define and use specific heat capacity**
- **define and use specific latent heat**, and **distinguish between specific latent heat of fusion and specific latent heat of vaporisation**

"Define" means a precise sentence; "use" covers any calculation, including those where the energy comes from an electrical heater and those that combine both quantities.

## Specific heat capacity

**Definition.** The specific heat capacity of a substance is the **energy required per unit mass** of the substance **to raise its temperature by one degree** (1 K or 1 °C).

```
Q = mcΔθ        c = Q / (mΔθ)
unit of c: J kg⁻¹ K⁻¹
```

Two points in the definition carry marks: **per unit mass**, and **per unit temperature rise**. Writing "the energy needed to heat a substance" earns nothing. Δθ is a temperature change, so it is the same in kelvin and in degrees Celsius.

Typical values used in questions: water about 4200 J kg⁻¹ K⁻¹, aluminium about 900 J kg⁻¹ K⁻¹, copper about 385 J kg⁻¹ K⁻¹. Water's value is unusually large, so a given mass of water needs much more energy for each kelvin of temperature rise than the same mass of a metal.

## Using electrical heating data

Many questions give the energy as electrical energy from a heater: Q = VIt = Pt. Equating this to mcΔθ links electricity (AS Topic 9) to this subtopic.

## Worked example 1: c of a liquid from heater data

A heater connected to a 12.0 V supply carries a current of 3.5 A for 600 s. It is immersed in 0.80 kg of a liquid in an insulated container, and the liquid's temperature rises by 7.5 K. Calculate the specific heat capacity of the liquid.

```
energy supplied = VIt = 12.0 × 3.5 × 600 = 25 200 J
c = Q / (mΔθ) = 25 200 / (0.80 × 7.5) = 4200 J kg⁻¹ K⁻¹
```

*Annotation.* If some of the energy escapes to the surroundings, the liquid's temperature rises less than it would otherwise, so this calculation gives a value of c that is **too large**. Knowing the direction of the error is a common follow-up part.

## Specific latent heat

**Definition.** The specific latent heat of a substance is the **energy required per unit mass** to **change its state without any change in temperature**.

```
Q = mL        unit of L: J kg⁻¹
```

There are two kinds, distinguished by the change of state:

| | Specific latent heat of fusion, L_f | Specific latent heat of vaporisation, L_v |
|---|---|---|
| Change of state | Solid to liquid (melting) | Liquid to gas (boiling) |
| Reverse process releases the same energy | Liquid to solid (freezing) | Gas to liquid (condensing) |
| Water | 3.34 × 10⁵ J kg⁻¹ | 2.26 × 10⁶ J kg⁻¹ |

## Why vaporisation needs much more energy than fusion

For water, L_v is nearly seven times L_f. Two reasons, both in terms of molecules:

1. **Separation.** On melting, molecules stay close together; the regular structure breaks down and they become free to move past each other, but most of the attractions between them remain. On boiling, molecules are separated to large distances, so essentially all the intermolecular attractions must be overcome. Much more work is done against these forces.
2. **Expansion.** A vapour occupies a far larger volume than the liquid it came from, so the substance must also do work pushing back the surrounding atmosphere as it expands. Melting involves almost no change in volume.

During either change the temperature stays constant: the energy supplied increases the **potential energy** of the molecules (their separation), not their mean kinetic energy.

## Reading a heating curve

When a solid is heated at constant power P, a graph of temperature against time shows sloping sections (one state, Q = mcΔθ) and flat sections (changes of state, Q = mL). The graph can be read quantitatively:

```
gradient of a sloping section = Δθ/Δt = P / (mc)    →   c = P / (m × gradient)
length of a flat section = Δt                      →   L = PΔt / m
```

- A **steeper** slope means a **smaller** specific heat capacity.
- A **longer** flat section means a **larger** specific latent heat (for the same mass and power).

*Invented example.* 0.20 kg of a solid is heated at 100 W. The solid warms at 0.40 K s⁻¹, it then melts in 120 s, and the liquid warms at 0.25 K s⁻¹. Then c_solid = 100 ÷ (0.20 × 0.40) = 1250 J kg⁻¹ K⁻¹, L_f = 100 × 120 ÷ 0.20 = 6.0 × 10⁴ J kg⁻¹, and c_liquid = 100 ÷ (0.20 × 0.25) = 2000 J kg⁻¹ K⁻¹.

## Worked example 2: from ice to warm water

Calculate the energy needed to change 0.50 kg of ice at –15 °C into water at 40 °C, and the time this takes with a 500 W heater (no losses). Take c_ice = 2100 J kg⁻¹ K⁻¹, c_water = 4200 J kg⁻¹ K⁻¹ and L_f = 3.34 × 10⁵ J kg⁻¹.

```
warm ice to 0 °C:    Q₁ = 0.50 × 2100 × 15  =  15 750 J
melt at 0 °C:        Q₂ = 0.50 × 3.34 × 10⁵ = 167 000 J
warm water to 40 °C: Q₃ = 0.50 × 4200 × 40  =  84 000 J
total = 266 750 J ≈ 2.7 × 10⁵ J
time = 266 750 / 500 = 530 s
```

*Annotation.* Each stage uses its own equation and its own specific heat capacity. The melting stage needs more energy than the other two together, which is typical: latent heats are large compared with mcΔθ for modest temperature changes.

## Worked example 3: cancelling energy losses

*Invented data.* To measure L_v for a liquid, an immersed heater keeps the liquid boiling, and the mass boiled away in 300 s is measured at two heater powers. Energy is lost to the surroundings at the same rate h in both runs, because the liquid is at its boiling point both times.

| Heater power / W | Mass boiled away in 300 s / g |
|---|---|
| 60 | 7.2 |
| 40 | 4.5 |

```
run 1:  60 × 300 = (7.2 × 10⁻³)L + h × 300
run 2:  40 × 300 = (4.5 × 10⁻³)L + h × 300
subtract:  20 × 300 = (2.7 × 10⁻³)L
L = 6000 / 2.7 × 10⁻³ = 2.2 × 10⁶ J kg⁻¹
```

*Annotation.* Subtracting removes h because the losses are equal in the two runs. Substituting back gives h ≈ 6.7 W. Using run 1 alone, ignoring losses, would give L = 18 000 ÷ 7.2 × 10⁻³ = 2.5 × 10⁶ J kg⁻¹, more than 10% too high.

## Common mistakes

- **Definitions without "per unit mass"**, or for L, without "without a change in temperature".
- **Using Q = mcΔθ across a change of state**, or using one value of c for both ice and water.
- **Mixing up L_f and L_v**, especially in steam or boiling questions.
- **Grams left as grams.**
- **Saying temperature stays constant during melting because "no energy is being supplied".** Energy is supplied; it increases molecular potential energy.
- **Stating that energy losses make c (or L) too small.** With losses, more energy is supplied than the sample absorbs, so the calculated value is too large.

## Exam technique for the command words

- **Define**: energy per unit mass; per unit temperature change (c), or to change state at constant temperature (L).
- **Distinguish** (fusion and vaporisation): name the change of state for each.
- **Explain** (why L_v > L_f): molecules separated much further, overcoming nearly all attractions; work done against the atmosphere as the volume increases.
- **Calculate**: split multi-stage processes into stages, label each, and add. Convert g to kg; use P × t for electrical energy.
- **Suggest** (sources of error): energy lost to the surroundings, energy absorbed by the container, or (for boiling) vapour condensing back.

## Related resources

- [Temperature study guide](/resources/a-physics-temperature/) — the whole of Topic 14
- [Revision notes for this subtopic](/resources/cambridge-a-level-physics-9702-a-specific-heat-capacity-and-specific-latent-heat-revision-notes/)
- [Practice questions for this subtopic](/resources/cambridge-a-level-physics-9702-a-specific-heat-capacity-and-specific-latent-heat-practice/)
- [Thermal equilibrium](/resources/cambridge-a-level-physics-9702-a-thermal-equilibrium/) — mixing problems using Q = mcΔθ
- [Thermodynamics](/resources/a-physics-thermodynamics/) — internal energy and the first law

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
