---
title: "A Level Physics: Thermodynamics — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Thermodynamics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 16.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-thermodynamics"
    subtopic: "a-internal-energy"
  - qualification: "a-level"
    topic: "a-thermodynamics"
    subtopic: "a-the-first-law-of-thermodynamics"
description: "Condensed recall notes on internal energy, the first law, specific heat capacity and latent heat for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Thermodynamics study guide](/resources/a-physics-thermodynamics/).

## Internal energy

> The **sum of the random distribution of kinetic and potential energies** of the molecules in a system.

Both halves matter:
- **Kinetic** component depends on **temperature**.
- **Potential** component depends on **separation**, so it changes during a change of state.

That is why temperature stays constant while a substance melts or boils: the energy supplied increases the potential component only.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--02-heating-curve.webp" width="900" height="1210" alt="Temperature-time graph for 0.200 kg of ice at -15 °C heated at 150 W. 6300 J warms the ice to 0 °C, 66 800 J melts it at constant temperature, and 16 800 J warms the water to 20 °C; the total of 89 900 J takes about 600 s. Particle pictures show ice as a lattice, melting as a mixture and water as an irregular close arrangement." loading="lazy">
  <figcaption>During melting the supplied energy increases potential energy, so the temperature stays constant.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--09-conduction-u-values.webp" width="900" height="1190" alt="A brick slab of area 14 m2 and thickness 0.22 m has faces at 20 °C and 4 °C; energy flows from hot to cold at kAΔθ/L = 0.80 x 14 x 16 / 0.22 = 814 W. A U-value is k/L, so loss = UAΔθ. A wall of 18.5 m2 (U 0.35) and a window of 3.5 m2 (U 1.8) with 15 K difference lose 97 W and 94.5 W respectively, 192 W in total; the window is 16 percent of the area but 49 percent of the loss." loading="lazy">
  <figcaption>Conduction rate is kAΔθ/L; U-values show how a small window can dominate energy loss.</figcaption>
</figure>


## The first law of thermodynamics

```
delta-U = q + W

delta-U = increase in internal energy
q       = heat supplied TO the system
W       = work done ON the system
```

**Sign convention is where marks are lost.** Using Cambridge's convention:

| Situation | Sign |
|---|---|
| Heat supplied to the gas | q positive |
| Heat lost by the gas | q negative |
| Gas **compressed** (work done on it) | W positive |
| Gas **expands** (work done by it) | W negative |

The **magnitude** of the work done at constant pressure is:

```
W = p delta-V     (delta-V is the change in volume; this gives the work done BY the gas during an expansion)
```

Since W in delta-U = q + W is defined as work done **ON** the system (see the
box above), its **sign** must be fixed up to match: for an **expansion**
(ΔV positive), the gas does work on its surroundings, so work done on the
system is **negative**, W = −pΔV; for a **compression** (ΔV negative), the
surroundings do work on the gas, so work done on the system is
**positive**, W = +p|ΔV|. This matches the sign convention table above:
expansion → W negative, compression → W positive.

**Worked example.** A gas absorbs 500 J of thermal energy and does 200 J of work by expanding against a constant external pressure. Since the gas does work on its surroundings, W (work done on the system) = −200 J.

```
delta-U = q + W = 500 + (-200) = 300 J
```

The gas's internal energy increases by 300 J.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--08-first-law.webp" width="900" height="1270" alt="Top: a gas absorbs 500 J of thermal energy and expands, doing 200 J of work on its surroundings, so W = -200 J and the internal energy rises by 300 J. Bottom: a piston does 340 J of work on a gas while 120 J leaves by heating, so internal energy rises by 220 J. Waterfall bars show q, W and ΔU. Cambridge only: isothermal ΔU = 0, adiabatic q = 0, isobaric constant pressure, isovolumetric W = 0." loading="lazy">
  <figcaption>ΔU = q + W, with W the work done on the gas, negative when the gas expands.</figcaption>
</figure>


## The four processes

| Process | Condition | Consequence |
|---|---|---|
| **Isothermal** | Constant T | ΔU = 0, so q = −W |
| **Adiabatic** | No heat transfer | q = 0, so ΔU = W |
| **Isobaric** | Constant p | pΔV is the work done **by** the gas, so work done on it is W = −pΔV (negative for an expansion) and ΔU = q − pΔV |
| **Isovolumetric** | Constant V | W = 0, so ΔU = q |

The isothermal row follows from ΔU depending only on temperature for an ideal gas; the isovolumetric row follows because no work is done without a change in volume.

**Internal energy is a state function** — it depends only on the current state of the system (its temperature, for an ideal gas), never on the process or path used to reach that state. Two different routes between the same start and end states give the same ΔU, even if q and W individually differ along each route.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--04-boyle-law.webp" width="900" height="1200" alt="Two syringes hold the same ten molecules at constant temperature. Halving the volume from 60 to 30 cm3 doubles the pressure from 1.00 to 2.00 x 10^5 Pa because molecules hit the walls twice as often. A graph of p against 1/V for six readings is a straight line through the origin, and pV = 6.0 J every time." loading="lazy">
  <figcaption>At constant temperature pV is constant, so p against 1/V is a straight line through the origin.</figcaption>
</figure>


## Heating equations

```
temperature change:   E = m c delta-theta
change of state:      E = m L
```

- **Specific heat capacity c** — energy to raise 1 kg by 1 K, J kg⁻¹ K⁻¹.
- **Specific latent heat L** — energy to change the state of 1 kg with no temperature change, J kg⁻¹.

Specific heat capacity is defined **per kilogram**; heat capacity (without "specific") is a property of a particular object and is defined **per kelvin** only, without dividing by mass — the two are easily confused in an exam answer.

**Latent heat of vaporisation > latent heat of fusion** because boiling must overcome the intermolecular forces completely and also do work pushing back the atmosphere, whereas melting only loosens them.

## Absolute zero and the ideal gas

Absolute zero (0 K, −273.15 °C, often rounded to −273 °C) is the temperature at which molecules have **minimum** internal energy — not zero energy.

```
T(K) = theta(C) + 273.15   (often rounded to +273 for working)
pV = nRT
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--01-kelvin-celsius-scale.webp" width="900" height="1110" alt="A vertical scale from 0 K (absolute zero, -273.15 °C) through 77 K (nitrogen boils, -196 °C) and 273.16 K (triple point of water, 0.01 °C) to 293 K (a 20 °C room). T/K = θ/°C + 273.15, and a rise of 25 K equals a rise of 25 °C because the degrees are the same size." loading="lazy">
  <figcaption>The kelvin and Celsius degrees are the same size; only the zero points differ.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--05-absolute-zero.webp" width="900" height="1080" alt="Pressure of a fixed volume of air against Celsius temperature: 100 kPa at 20 °C and 128 kPa at 100 °C, a gradient of 0.35 kPa per °C. Extending the line back to zero pressure gives -266 °C, close to the accepted -273 °C; the long extrapolation magnifies small errors." loading="lazy">
  <figcaption>Extrapolating a pressure-temperature line back to p = 0 estimates absolute zero.</figcaption>
</figure>


## Exam traps

- Defining internal energy as kinetic energy only.
- Getting the sign of W wrong for expansion versus compression.
- Using E = mcΔθ during a change of state, where temperature is constant.
- Saying molecules "stop moving" at absolute zero.
- Forgetting to convert °C to K in gas equations.
- Confusing specific heat capacity (per kg per K) with heat capacity (per K).
- Assuming internal energy depends on the process used to reach a state — it is a state function, determined only by the current state.
- Applying W = pΔV when pressure is not constant during the process.

## Self-test

1. Define internal energy, covering both components.
2. State the first law and the sign convention for a gas being compressed.
3. Why does temperature stay constant during boiling?
4. An ideal gas expands isothermally. What are ΔU and q?
5. Why is latent heat of vaporisation larger than latent heat of fusion?
6. A gas absorbs 500 J of thermal energy and does 200 J of work by expanding. Find the change in internal energy.
7. Why does internal energy not depend on the process used to reach a given state?

**Answers:** 1. The sum of the random distribution of kinetic and potential energies of the molecules; the kinetic part depends on temperature, the potential part on molecular separation. 2. ΔU = q + W; compressing the gas means work is done **on** it, so W is positive. 3. The energy supplied increases the potential component of internal energy by separating the molecules, not the kinetic component, so temperature is unchanged. 4. ΔU = 0 **for an ideal gas** (internal energy depends only on temperature, which is constant here), so q = −W — this does not hold for a real gas, where internal energy also depends on the (changing) separation between molecules. 5. Vaporisation must completely overcome the intermolecular forces and also do work against atmospheric pressure as the vapour expands; melting only loosens the forces. 6. W = −200 J (the gas does work on its surroundings); ΔU = q + W = 500 + (−200) = **300 J**. 7. Internal energy is a **state function** — it depends only on the system's current state (its temperature, for an ideal gas), never on the route taken to reach it, even though q and W individually can differ between different routes.
