---
title: "Edexcel IAL Physics: Thermodynamics — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 5.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-5-thermodynamics-radiation-oscillations-and-cosmology"
    subtopic: "thermodynamics-edexcel"
description: "Condensed recall notes on internal energy, specific heat capacity, latent heat, the gas laws and kinetic theory for Edexcel International A Level Physics YPH11 (Unit 5, WPH15)."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Thermodynamics study guide](/resources/edexcel-ial-physics-thermodynamics/).

## Internal energy

> The **sum of the randomly distributed kinetic and potential energies** of the molecules in a system — distinct from the macroscopic, ordered kinetic or potential energy of the object as a whole (e.g. a moving car's bulk kinetic energy is not internal energy).

Both parts matter:

- The **kinetic** component depends on **temperature**.
- The **potential** component depends on **separation**, so it changes during a change of state.

**This is why temperature stays constant while a substance melts or boils** — the energy supplied increases the potential component only. That explanation is examined every series.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--02-heating-curve.webp" width="900" height="1210" alt="Temperature-time graph for 0.200 kg of ice at -15 °C heated at 150 W. 6300 J warms the ice to 0 °C, 66 800 J melts it at constant temperature, and 16 800 J warms the water to 20 °C; the total of 89 900 J takes about 600 s. Particle pictures show ice as a lattice, melting as a mixture and water as an irregular close arrangement." loading="lazy">
  <figcaption>During melting the supplied energy increases potential energy, so the temperature stays constant.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--08-first-law.webp" width="900" height="1270" alt="Top: a gas absorbs 500 J of thermal energy and expands, doing 200 J of work on its surroundings, so W = -200 J and the internal energy rises by 300 J. Bottom: a piston does 340 J of work on a gas while 120 J leaves by heating, so internal energy rises by 220 J. Waterfall bars show q, W and ΔU. Cambridge only: isothermal ΔU = 0, adiabatic q = 0, isobaric constant pressure, isovolumetric W = 0." loading="lazy">
  <figcaption>ΔU = q + W, with W the work done on the gas, negative when the gas expands.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--09-conduction-u-values.webp" width="900" height="1190" alt="A brick slab of area 14 m2 and thickness 0.22 m has faces at 20 °C and 4 °C; energy flows from hot to cold at kAΔθ/L = 0.80 x 14 x 16 / 0.22 = 814 W. A U-value is k/L, so loss = UAΔθ. A wall of 18.5 m2 (U 0.35) and a window of 3.5 m2 (U 1.8) with 15 K difference lose 97 W and 94.5 W respectively, 192 W in total; the window is 16 percent of the area but 49 percent of the loss." loading="lazy">
  <figcaption>Conduction rate is kAΔθ/L; U-values show how a small window can dominate energy loss.</figcaption>
</figure>


## Heating equations

```
E = m c delta-theta        specific heat capacity
E = m L                    specific latent heat
```

**Specific heat capacity** — energy to raise 1 kg by 1 K.
**Specific latent heat** — energy to change the state of 1 kg with no temperature change.

**Latent heat of vaporisation exceeds latent heat of fusion**, because boiling must completely separate the molecules *and* do work pushing back the atmosphere, whereas melting only loosens them.

**Worked example.** 0.50 kg of water at 100 °C is converted entirely to steam at 100 °C (L of vaporisation = 2.26 × 10⁶ J/kg).

```
E = L m = 2.26x10^6 x 0.50 = 1.13x10^6 J  (1.13 MJ)
```

**CORE PRACTICAL 12** calibrates a thermistor in a potential divider circuit for use as a thermostat. **CORE PRACTICAL 13** determines the specific latent heat of a phase change experimentally.

## Temperature and absolute zero

```
T(K) = theta(C) + 273
```

**Absolute zero** is where molecules have **minimum** internal energy — not zero energy.

Temperature measures the **mean kinetic energy** of molecules, not the total thermal energy. A bath of warm water holds far more thermal energy than a cup of boiling water, despite being cooler — conflating the two is the commonest conceptual error.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--01-kelvin-celsius-scale.webp" width="900" height="1110" alt="A vertical scale from 0 K (absolute zero, -273.15 °C) through 77 K (nitrogen boils, -196 °C) and 273.16 K (triple point of water, 0.01 °C) to 293 K (a 20 °C room). T/K = θ/°C + 273.15, and a rise of 25 K equals a rise of 25 °C because the degrees are the same size." loading="lazy">
  <figcaption>The kelvin and Celsius degrees are the same size; only the zero points differ.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--05-absolute-zero.webp" width="900" height="1080" alt="Pressure of a fixed volume of air against Celsius temperature: 100 kPa at 20 °C and 128 kPa at 100 °C, a gradient of 0.35 kPa per °C. Extending the line back to zero pressure gives -266 °C, close to the accepted -273 °C; the long extrapolation magnifies small errors." loading="lazy">
  <figcaption>Extrapolating a pressure-temperature line back to p = 0 estimates absolute zero.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--07-maxwell-boltzmann.webp" width="900" height="1150" alt="Speed distribution curves for helium at 300 K and 1200 K, computed from the Maxwell-Boltzmann formula. Both start at zero, rise to a peak and have a long tail to high speeds. At 1200 K the peak is lower and further right, with equal area. The r.m.s. speed is 1370 m/s at 300 K and 2740 m/s at 1200 K: four times the kelvin temperature gives twice the r.m.s. speed." loading="lazy">
  <figcaption>Molecular speeds are spread; a higher temperature shifts and flattens the distribution.</figcaption>
</figure>


## Ideal gases

```
pV = nRT           n in moles, R = 8.31 J mol^-1 K^-1
pV = NkT           N molecules, k = 1.38 x 10^-23 J K^-1
pV = (1/3) N m <c^2>
(1/2) m <c^2> = (3/2) k T
```

**The central result:** mean molecular kinetic energy is proportional to **absolute temperature only** — not to pressure, volume, or the identity of the gas. Helium and xenon at the same temperature have equal mean molecular kinetic energy; the xenon simply moves more slowly because it is heavier.

**T must always be in kelvin.**

**CORE PRACTICAL 14** investigates the relationship between pressure and volume of a fixed mass of gas at constant temperature (Boyle's law).

**Assumptions of the kinetic model:** many molecules in random motion; molecular volume negligible; **no intermolecular forces except during collisions**; elastic collisions; collision time negligible compared with the time between collisions.

**Real gases deviate most at high pressure and low temperature**, because molecules are close together, so their own volume matters and attractions become significant — exactly the two assumptions that fail. This is why real gases are best approximated as ideal at low pressure and high temperature, where molecules are far apart and their own volume and mutual attractions become negligible by comparison.

Because an ideal gas has no intermolecular forces, it has **no molecular potential energy**, so its internal energy is entirely kinetic and depends only on temperature.

## Exam traps

- Defining internal energy as kinetic energy only.
- Using E = mcΔθ during a change of state.
- Confusing temperature with thermal energy.
- Using °C in gas equations.
- Saying molecules stop at absolute zero.
- Saying heavier molecules have more kinetic energy at the same temperature.
- Forgetting which CORE PRACTICAL investigates which relationship — 12 is thermistor calibration, 13 is specific latent heat, 14 is Boyle's law.

## Self-test

1. Define internal energy, covering both components.
2. Why does temperature stay constant during boiling?
3. Why is latent heat of vaporisation greater than latent heat of fusion?
4. What is mean molecular kinetic energy proportional to?
5. Under what conditions do real gases deviate most from ideal behaviour, and why?
6. 0.50 kg of water at 100 °C is converted entirely to steam at 100 °C. Find the energy required (L of vaporisation = 2.26 × 10⁶ J/kg).
7. What does CORE PRACTICAL 14 investigate?
8. Distinguish internal energy from the macroscopic kinetic energy of a moving object.

**Answers:** 1. The sum of the randomly distributed kinetic and potential energies of the molecules; the kinetic part depends on temperature and the potential part on molecular separation. 2. The energy supplied increases the potential component by separating molecules rather than the kinetic component, so temperature does not rise. 3. Vaporisation must completely overcome the intermolecular forces and also do work against atmospheric pressure as the vapour expands; melting only loosens the forces. 4. The absolute temperature, and nothing else. 5. High pressure and low temperature, because molecules are close together so their own volume is no longer negligible and intermolecular attractions become significant. 6. E = Lm = 2.26×10⁶ × 0.50 = **1.13×10⁶ J** (1.13 MJ). 7. The relationship between pressure and volume of a fixed mass of gas at constant temperature (Boyle's law). 8. Internal energy is the random, disordered kinetic and potential energy of a substance's individual particles; a moving object's macroscopic kinetic energy is the ordered motion of the object as a whole and is a separate quantity entirely.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--04-boyle-law.webp" width="900" height="1200" alt="Two syringes hold the same ten molecules at constant temperature. Halving the volume from 60 to 30 cm3 doubles the pressure from 1.00 to 2.00 x 10^5 Pa because molecules hit the walls twice as often. A graph of p against 1/V for six readings is a straight line through the origin, and pV = 6.0 J every time." loading="lazy">
  <figcaption>At constant temperature pV is constant, so p against 1/V is a straight line through the origin.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--06-kinetic-pressure.webp" width="900" height="1222" alt="A molecule rebounds elastically from the wall of a cube of side L, changing momentum by 2mv_x. The time between hits on that wall is 2L/v_x, so the force is mv_x²/L. For N molecules F = (Nm/L)&lt;v_x²&gt;; random motion gives &lt;c²&gt; = 3&lt;v_x²&gt;; dividing by area L² gives pV = 1/3 Nm&lt;c²&gt;. Comparing with pV = NkT gives 1/2 m&lt;c²&gt; = 3/2 kT. For nitrogen at 300 K the r.m.s. speed is 517 m/s." loading="lazy">
  <figcaption>Pressure arises from the momentum change of molecules rebounding from the walls.</figcaption>
</figure>

