---
title: "A Level Physics: Temperature — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Temperature"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 14.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-temperature"
    subtopic: "a-thermal-equilibrium"
  - qualification: "a-level"
    topic: "a-temperature"
    subtopic: "a-temperature-scales"
  - qualification: "a-level"
    topic: "a-temperature"
    subtopic: "a-specific-heat-capacity-and-specific-latent-heat"
description: "Condensed recall notes on thermal equilibrium, thermodynamic and empirical scales, and thermometers for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Temperature study guide](/resources/a-physics-temperature/).

## What temperature actually measures

Temperature is a measure of the **mean kinetic energy of the molecules** — not the total energy, and not the amount of heat.

```
mean KE per molecule = (3/2) k T
```

This is why a cup of boiling water and a bath of warm water can hold very different amounts of thermal energy despite the cup being hotter. **Temperature and thermal energy are different quantities**, and conflating them is the most common conceptual error in the topic.

## Thermal equilibrium

Two bodies are in thermal equilibrium when there is **no net flow of thermal energy** between them — which happens when they are at the **same temperature**.

Thermal energy flows from higher to lower temperature, **not** from higher to lower internal energy. A large cold object may hold far more internal energy than a small hot one, yet energy still flows from the hot object to the cold one.

Thermal equilibrium is what makes thermometry possible: a thermometer reads its own temperature, which equals the temperature of the body once equilibrium is established.

## The thermodynamic scale

The thermodynamic (absolute) scale is defined **independently of any material property**. That independence is its whole advantage.

```
T / K = theta / C + 273.15
```

Two fixed points:

- **Absolute zero, 0 K** — the temperature at which substances have **minimum internal energy**. Not zero energy.
- **Triple point of water, 273.16 K** — the unique temperature and pressure at which ice, water and water vapour coexist in equilibrium.

The triple point is used rather than the melting point because it occurs at **one unique pressure**, so it is perfectly reproducible; a melting point varies with pressure.

**A temperature interval is the same size in K and °C**, so a *change* of 20 °C is a change of 20 K. Only absolute temperatures need converting — which is why ΔT can be left in °C in q = mcΔT, but T must be in kelvin in pV = nRT.

## Empirical scales and thermometers

An empirical scale depends on a **physical property that varies with temperature**, calibrated between two fixed points. Different thermometric properties do not vary in the same way between the fixed points, so two empirical thermometers can agree at the fixed points and **disagree everywhere between them**. The thermodynamic scale has no such problem.

| Thermometer | Property | Strengths | Limitations |
|---|---|---|---|
| **Liquid-in-glass** | Expansion of liquid | Cheap, direct reading, portable | Limited range, slow, low sensitivity, fragile |
| **Thermocouple** | E.m.f. from two junctions | Wide range, fast, small thermal capacity, remote reading | Non-linear, needs calibration |
| **Resistance (platinum)** | Resistance of a wire | Very accurate, wide range | Slow response, large thermal capacity |
| **Thermistor** | Resistance of a semiconductor | Very sensitive, fast | Narrow range, highly non-linear |

**Choosing a thermometer:** small thermal capacity for rapidly changing temperatures (a thermocouple, because it absorbs little energy and so barely disturbs the system it measures); high accuracy where speed does not matter (platinum resistance); high sensitivity over a narrow range (thermistor).

## Specific heat capacity and specific latent heat

**Specific heat capacity** c is the energy required to raise the temperature of unit mass of a substance by one degree, without a change of state:

```
Q = mcΔθ
```

Worked example: 500 g of water (c = 4200 J kg⁻¹ K⁻¹) heated from 20 °C to 80 °C requires Q = 0.500 × 4200 × 60 = 126,000 J.

**Specific latent heat** L is the energy required to change the state of unit mass of a substance **without a change of temperature**:

```
Q = mL
```

Fusion refers to melting/freezing; vaporisation refers to boiling/condensing. On a cooling curve (temperature against time), temperature falls steadily while the substance stays in one state, but is **constant during a change of state**, since the energy transferred is latent heat rather than energy that raises or lowers temperature.

## Exam traps

- Saying absolute zero is where molecules have *no* energy rather than minimum energy.
- Converting an interval from °C to K by adding 273.
- Using °C in pV = nRT.
- Saying thermal energy flows from higher internal energy to lower.
- Treating temperature and thermal energy as the same quantity.
- Giving the melting point rather than the triple point as a fixed point.
- Forgetting that Q = mcΔθ only applies while the substance stays in one state — once melting or boiling starts, use Q = mL instead, since the temperature is no longer changing.
- Assuming a larger mass always needs more energy for the same temperature change — c varies hugely between substances, so a large mass of a low-c material can need less energy than a small mass of water.

## Self-test

1. What does temperature measure?
2. Define thermal equilibrium and state the direction of energy flow.
3. Why is the triple point used as a fixed point rather than the melting point?
4. Is a change of 15 °C equal to a change of 15 K?
5. Why is a thermocouple preferred for rapidly changing temperatures?
6. Distinguish specific latent heat from specific heat capacity.
7. Why does temperature stay constant while a solid melts, even though energy is still being supplied?

**Answers:** 1. The mean kinetic energy of the molecules — not the total thermal energy. 2. No net flow of thermal energy between two bodies, which occurs when they are at the same temperature; energy flows from higher to lower *temperature*, regardless of internal energy. 3. The triple point occurs at one unique temperature and pressure, so it is perfectly reproducible, whereas a melting point varies with pressure. 4. Yes — intervals are identical on the two scales; only absolute temperatures differ, by 273.15. 5. It has a small thermal capacity, so it responds quickly and absorbs very little energy from the system being measured. 6. Specific latent heat is the energy needed to change state without a change of temperature, while specific heat capacity is the energy needed to change temperature without a change of state. 7. During melting the temperature stays constant because the energy supplied is latent heat, going into breaking intermolecular bonds rather than increasing mean kinetic energy.
