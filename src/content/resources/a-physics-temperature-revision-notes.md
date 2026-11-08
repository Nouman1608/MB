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
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-22
updatedDate: 2026-11-05
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Temperature study guide](/resources/a-physics-temperature/).

## What temperature actually measures

Temperature is a measure of the **mean translational kinetic energy of the molecules** — not the total energy, and not the amount of heat.

```
mean translational KE per molecule = (3/2) k T
```

This is why a cup of boiling water and a bath of warm water can hold very different amounts of thermal energy despite the cup being hotter. **Temperature and thermal energy are different quantities**, and conflating them is the most common conceptual error in the topic.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--01-kelvin-celsius-scale.webp" width="900" height="1110" alt="A vertical scale from 0 K (absolute zero, -273.15 °C) through 77 K (nitrogen boils, -196 °C) and 273.16 K (triple point of water, 0.01 °C) to 293 K (a 20 °C room). T/K = θ/°C + 273.15, and a rise of 25 K equals a rise of 25 °C because the degrees are the same size." loading="lazy">
  <figcaption>The kelvin and Celsius degrees are the same size; only the zero points differ.</figcaption>
</figure>


## Thermal equilibrium

Two bodies are in thermal equilibrium when there is **no net flow of thermal energy** between them — which happens when they are at the **same temperature**.

Thermal energy flows from higher to lower temperature, **not** from higher to lower internal energy. A large cold object may hold far more internal energy than a small hot one, yet energy still flows from the hot object to the cold one.

Thermal equilibrium is what makes thermometry possible: a thermometer reads its own temperature, which equals the temperature of the body once equilibrium is established.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--08-first-law.webp" width="900" height="1270" alt="Top: a gas absorbs 500 J of thermal energy and expands, doing 200 J of work on its surroundings, so W = -200 J and the internal energy rises by 300 J. Bottom: a piston does 340 J of work on a gas while 120 J leaves by heating, so internal energy rises by 220 J. Waterfall bars show q, W and ΔU. Cambridge only: isothermal ΔU = 0, adiabatic q = 0, isobaric constant pressure, isovolumetric W = 0." loading="lazy">
  <figcaption>ΔU = q + W, with W the work done on the gas, negative when the gas expands.</figcaption>
</figure>


## The thermodynamic scale

The thermodynamic (absolute) scale is defined **independently of any material property**. That independence is its whole advantage.

```
T / K = theta / C + 273.15
```

Two fixed points:

- **Absolute zero, 0 K** — the lowest possible temperature, at which substances have their **minimum internal energy**. The ideal-gas relation mean translational KE = (3/2)kT extrapolates to zero there, but write "minimum", not "zero".
- **Triple point of water, 273.16 K** — the unique temperature and pressure at which ice, water and water vapour coexist in equilibrium.

The triple point is used rather than the melting point because it occurs at **one unique pressure**, so it is perfectly reproducible; a melting point varies with pressure.

**A temperature interval is the same size in K and °C**, so a *change* of 20 °C is a change of 20 K. Only absolute temperatures need converting — which is why ΔT can be left in °C in q = mcΔT, but T must be in kelvin in pV = nRT.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--05-absolute-zero.webp" width="900" height="1080" alt="Pressure of a fixed volume of air against Celsius temperature: 100 kPa at 20 °C and 128 kPa at 100 °C, a gradient of 0.35 kPa per °C. Extending the line back to zero pressure gives -266 °C, close to the accepted -273 °C; the long extrapolation magnifies small errors." loading="lazy">
  <figcaption>Extrapolating a pressure-temperature line back to p = 0 estimates absolute zero.</figcaption>
</figure>


## Empirical scales and thermometers

An empirical scale depends on a **physical property that varies with temperature** — the syllabus names the density of a liquid, the volume of a gas at constant pressure, the resistance of a metal and the e.m.f. of a thermocouple — calibrated between two fixed points. Different thermometric properties do not vary in the same way between the fixed points, so two empirical thermometers can agree at the fixed points and **disagree everywhere between them**. The thermodynamic scale has no such problem.

| Thermometer | Property | Strengths | Limitations |
|---|---|---|---|
| **Liquid-in-glass** | Expansion of liquid | Cheap, direct reading, portable | Limited range, slow, low sensitivity, fragile |
| **Thermocouple** | E.m.f. from two junctions | Wide range, fast, small thermal capacity, remote reading | Non-linear, needs calibration |
| **Resistance (platinum)** | Resistance of a wire | Very accurate, wide range | Slow response, large thermal capacity |
| **Thermistor** | Resistance of a semiconductor | Very sensitive, fast | Narrow range, highly non-linear |

**Choosing a thermometer:** small thermal capacity for rapidly changing temperatures (a thermocouple, because it absorbs little energy and so barely disturbs the system it measures); high accuracy where speed does not matter (platinum resistance); high sensitivity over a narrow range (thermistor).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--04-boyle-law.webp" width="900" height="1200" alt="Two syringes hold the same ten molecules at constant temperature. Halving the volume from 60 to 30 cm3 doubles the pressure from 1.00 to 2.00 x 10^5 Pa because molecules hit the walls twice as often. A graph of p against 1/V for six readings is a straight line through the origin, and pV = 6.0 J every time." loading="lazy">
  <figcaption>At constant temperature pV is constant, so p against 1/V is a straight line through the origin.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--06-kinetic-pressure.webp" width="900" height="1222" alt="A molecule rebounds elastically from the wall of a cube of side L, changing momentum by 2mv_x. The time between hits on that wall is 2L/v_x, so the force is mv_x²/L. For N molecules F = (Nm/L)&lt;v_x²&gt;; random motion gives &lt;c²&gt; = 3&lt;v_x²&gt;; dividing by area L² gives pV = 1/3 Nm&lt;c²&gt;. Comparing with pV = NkT gives 1/2 m&lt;c²&gt; = 3/2 kT. For nitrogen at 300 K the r.m.s. speed is 517 m/s." loading="lazy">
  <figcaption>Pressure arises from the momentum change of molecules rebounding from the walls.</figcaption>
</figure>


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

- Saying internal energy is "zero" or that molecules "stop moving" at absolute zero. The syllabus answer is that 0 K is the lowest possible temperature, where internal energy is a **minimum**.
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

**Answers:** 1. The mean translational kinetic energy of the molecules — not the total thermal energy. 2. No net flow of thermal energy between two bodies, which occurs when they are at the same temperature; energy flows from higher to lower *temperature*, regardless of internal energy. 3. The triple point occurs at one unique temperature and pressure, so it is perfectly reproducible, whereas a melting point varies with pressure. 4. Yes — intervals are identical on the two scales; only absolute temperatures differ, by 273.15. 5. It has a small thermal capacity, so it responds quickly and absorbs very little energy from the system being measured. 6. Specific latent heat is the energy needed to change state without a change of temperature, while specific heat capacity is the energy needed to change temperature without a change of state. 7. During melting the temperature stays constant because the energy supplied is latent heat, going into breaking intermolecular bonds rather than increasing mean translational kinetic energy.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--02-heating-curve.webp" width="900" height="1210" alt="Temperature-time graph for 0.200 kg of ice at -15 °C heated at 150 W. 6300 J warms the ice to 0 °C, 66 800 J melts it at constant temperature, and 16 800 J warms the water to 20 °C; the total of 89 900 J takes about 600 s. Particle pictures show ice as a lattice, melting as a mixture and water as an irregular close arrangement." loading="lazy">
  <figcaption>During melting the supplied energy increases potential energy, so the temperature stays constant.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--03-shc-electrical.webp" width="900" height="1290" alt="A lagged metal block of 1.00 kg holds a heater and a thermometer. The heater is connected through an ammeter in series with a voltmeter across it; conventional current flows from the positive terminal. At 12.0 V and 4.20 A (50.4 W) the temperature rises 24.0 K in 420 s, a straight line of gradient 0.0571 K/s, so c = P/(m × gradient) = 882 J/kg/K." loading="lazy">
  <figcaption>The gradient of a temperature-time graph at constant power gives c = P / (m × gradient).</figcaption>
</figure>

## Frequently asked questions

**Why is the triple point of water used as a fixed point?**
The triple point of water, 273.16 K, occurs at one unique temperature and pressure where ice, water and water vapour coexist, so it is perfectly reproducible. A melting point varies with pressure.

**Why do empirical thermometers disagree between fixed points?**
Different thermometric properties, such as liquid density, gas volume, metal resistance or thermocouple e.m.f., do not vary with temperature in the same way. Thermometers calibrated at the same two fixed points can therefore disagree everywhere in between.

**What is the difference between specific heat capacity and specific latent heat?**
Specific heat capacity is the energy needed to change the temperature of unit mass without a change of state, Q = mcΔθ. Specific latent heat is the energy needed to change the state of unit mass without a change of temperature, Q = mL.

**Why does temperature stay constant while a substance melts?**
During a change of state the energy supplied is latent heat, which separates the molecules against their intermolecular forces, increasing their potential energy rather than their mean kinetic energy, so the temperature does not change.
