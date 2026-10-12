---
title: "OxfordAQA International AS and A-level Physics: Wind, solar and hydroelectric energy (9630)"
seoTitle: "OxfordAQA A-level Physics Wind, Solar, Hydro Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Wind, solar and hydroelectric energy"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 129
syllabusTopics:
  - qualification: "a-level"
    topic: "energy-sources-oxfordaqa-alevel"
    subtopic: "wind-energy-oxfordaqa-alevel-physics"
  - qualification: "a-level"
    topic: "energy-sources-oxfordaqa-alevel"
    subtopic: "solar-energy-oxfordaqa-alevel-physics"
  - qualification: "a-level"
    topic: "energy-sources-oxfordaqa-alevel"
    subtopic: "hydroelectric-power-and-pumped-storage-oxfordaqa-alevel-physics"
description: "Study guide to wind power, solar intensity and cells, hydroelectric stations and pumped storage for OxfordAQA International A-level Physics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide covers sections 3.13.2 to 3.13.4 of the OxfordAQA International AS and A-level Physics (9630) specification, version 4.4: wind energy, solar energy and hydroelectric power with pumped storage. The specification marks section 3.13 as International A-level only, so none of it is needed for the International AS. For condensed recall use the [revision notes](/resources/oxfordaqa-a-level-physics-wind-solar-and-hydroelectric-energy-revision-notes/), then test yourself with the [practice questions](/resources/oxfordaqa-a-level-physics-wind-solar-and-hydroelectric-energy-practice/). The course hub is at [OxfordAQA A-level Physics](/boards/oxfordaqa/a-level/physics/) and the printable list is the [checklist](/checklists/oxfordaqa/a-level/physics/). Not sure where to start? The free [diagnostics](/diagnostics/) will tell you.

## What this unit covers

| Section | What you must be able to do |
|---|---|
| 3.13.2 | Use the maximum power available from a wind turbine, ½πr²ρv³; appreciate why not all of it can be used; explain how wind shadows decide wind farm layout; discuss environmental factors |
| 3.13.3 | State and use intensity at a distance from the Sun, I = P/4πr²; sketch and use the V-I characteristic and maximum power of a solar cell; explain how cells are arranged in arrays; carry out Required practical 10 |
| 3.13.4 | Describe a hydroelectric station (turbine and generator); link gravitational potential energy to kinetic energy; use the maximum power from water flowing through a turbine; explain base and back-up stations and pumped storage |

## 3.13.2 Wind energy

### Maximum power

In a time t the air passing through the rotor disc forms a cylinder of length vt, so:

- volume = πr²vt, where r is the blade length
- mass = ρπr²vt
- kinetic energy = ½mv² = ½ρπr²v³t

Dividing by t gives the maximum power available:

**P = ½πr²ρv³**

Here ρ is the density of air. The specification writes this quantity as E, but it is a power in watts. Power is proportional to r², so doubling the blade length gives four times the power, and to v³, so doubling the wind speed gives eight times the power.

**Worked example 1.** A rotor has blades 26.0 m long. The air density is 1.2 kg m⁻³ and the wind speed is 8.0 m s⁻¹. (a) Find the maximum power. (b) The turbine delivers 0.42 MW. Find its efficiency. (c) Find the maximum power at 12 m s⁻¹.

(a) P = ½ × π × (26.0)² × 1.2 × (8.0)³ = 6.52 × 10⁵ W, which is 0.652 MW.

(b) Efficiency = 0.42 / 0.652 = 0.644, or 64%.

(c) The speed rises by a factor 1.5, so power rises by 1.5³ = 3.375: P = 0.652 × 3.375 = 2.2 MW.

### Why all of it cannot be used

- If the turbine took all the kinetic energy, the air would stop behind the rotor and block the flow. Air must leave with kinetic energy, so only a fraction can be extracted.
- Some energy is lost to friction in the bearings and gearbox, to turbulence at the blades and to resistive heating in the generator.
- The wind speed varies. At low speeds the rotor does not turn, and in very strong winds turbines are shut down to protect them, so the average output is well below the maximum.

### Wind shadows and farm layout

Air leaving a turbine is slower and more turbulent. A turbine placed directly downwind sits in this wind shadow, receives a lower v, and because power depends on v³ even a small drop in speed costs a lot of power. Turbines are therefore spaced well apart, with extra distance along the prevailing wind direction, so each meets fresh, fast air. The cost is more land or sea area per turbine.

### Environmental factors

Wind turbines produce no carbon dioxide while operating and need no fuel. Against that, they are an intermittent source, they change the appearance of a landscape, they make noise, and their blades can harm birds and bats. Offshore sites have stronger, steadier wind but cost more to build and connect.

## 3.13.3 Solar energy

### Intensity from a point source

Intensity is power per unit area at right angles to the radiation, in W m⁻². The Sun radiates its power P in all directions, so at distance r the energy spreads over a sphere of area 4πr²:

**I = P / 4πr²**

This is an inverse square law: I ∝ 1/r². Doubling the distance cuts the intensity to a quarter. Intensity at the Earth's surface is less than at the top of the atmosphere, which absorbs and scatters some radiation.

**Worked example 2.** The Sun's power is 3.8 × 10²⁶ W and the Earth is 1.5 × 10¹¹ m from it. (a) Find the intensity at the top of the atmosphere. (b) Mercury is 5.8 × 10¹⁰ m from the Sun. Find the intensity there. (c) A 25 m² panel faces the Sun squarely under an intensity of 1.0 × 10³ W m⁻² and is 18% efficient. Find its output.

(a) I = 3.8 × 10²⁶ / (4π × (1.5 × 10¹¹)²) = 1.34 × 10³ W m⁻².

(b) By ratio, I = 1.34 × 10³ × (1.5 × 10¹¹ / 5.8 × 10¹⁰)² = 1.34 × 10³ × 6.69 = 8.99 × 10³ W m⁻².

(c) Input = 1.0 × 10³ × 25 = 2.5 × 10⁴ W; output = 0.18 × 2.5 × 10⁴ = 4.5 × 10³ W.

### Solar cell V-I characteristic

A solar cell in light is a source of emf. Its output current stays almost constant as the terminal voltage rises, then falls steeply to zero at the open-circuit voltage. The power delivered is P = IV, which is zero at both ends of the curve and has a maximum near the "knee". Maximum power is found by calculating IV at each point and picking the largest. The load resistance that gives it is R = V/I at that point.

**Worked example 3.** A cell of area 2.2 cm² is lit by 1.0 × 10³ W m⁻².

| V / V | 0 | 0.20 | 0.40 | 0.45 | 0.50 | 0.52 | 0.54 | 0.56 | 0.58 | 0.60 |
|---|---|---|---|---|---|---|---|---|---|---|
| I / mA | 62 | 61.5 | 60 | 58.5 | 55 | 52 | 46 | 34 | 16 | 0 |
| P = IV / mW | 0 | 12.3 | 24.0 | 26.3 | 27.5 | 27.0 | 24.8 | 19.0 | 9.3 | 0 |

(a) Maximum power is 27.5 mW, at 0.50 V and 55 mA.
(b) Load resistance at maximum power = 0.50 / 0.055 = 9.1 Ω.
(c) Light power on the cell = 1.0 × 10³ × 2.2 × 10⁻⁴ = 0.22 W, so efficiency = 0.0275 / 0.22 = 12.5%.

### Arrays

- **Series:** cell voltages add; the same current flows through all, so the weakest (or shaded) cell limits the current.
- **Parallel:** currents add; the voltage stays that of one cell.

**Worked example 4.** Each cell gives 0.50 V and 55 mA at maximum power. A module has 4 identical strings in parallel, each string having 12 cells in series. Voltage = 12 × 0.50 = 6.00 V. Current = 4 × 55 mA = 220 mA. Power = 6.00 × 0.22 = 1.32 W. Check: 48 cells × 0.50 V × 0.055 A = 1.32 W.

### Required practical 10: inverse square law with an LDR

A small lamp acts as the point source. In a darkened room, place the LDR on a metre rule in line with the lamp, and record the LDR response (resistance with a multimeter, or conductance G = 1/R) at several distances d.

- Cover the distances evenly and repeat each reading.
- Measure the background reading with the lamp off.
- Judge the distance from the filament, not the bulb glass: the true distance is d + x₀, where x₀ is unknown and acts as a systematic error.
- An LDR may not respond in proportion to intensity, so treat a straight-line test as a check on the whole system, not as a proof.

If G ∝ 1/(d + x₀)², then 1/√G = (d + x₀)/√k, a straight line against d whose negative x-intercept gives −x₀.

**Worked example 5.** Data for G (in mS) were:

| d / m | 0.10 | 0.15 | 0.20 | 0.25 | 0.30 | 0.40 | 0.50 | 0.60 |
|---|---|---|---|---|---|---|---|---|
| G / mS | 19.32 | 9.05 | 5.38 | 3.48 | 2.48 | 1.41 | 0.92 | 0.64 |
| 1/√G | 0.2275 | 0.3324 | 0.4311 | 0.5361 | 0.635 | 0.8422 | 1.0426 | 1.250 |

A best-fit line has gradient 2.04 mS^−½ m⁻¹ and intercept 0.0243 on the vertical axis. The line crosses the d axis at −0.0243/2.04 = −0.0119 m, so x₀ ≈ 1.2 cm: the filament sits about 1.2 cm behind the point where the distance was read. The data support an inverse square relationship once this offset is included. For uncertainty method, see [measurements and their errors](/resources/a-level-oxfordaqa-physics-measurements-and-their-errors/).

## 3.13.4 Hydroelectric power and pumped storage

### Station components and energy chain

Water held in a high reservoir runs down a pipe (penstock) to a turbine, then out to a lower level. The turbine shaft turns a generator, where a coil rotating in a magnetic field induces an emf. The chain is: gravitational potential energy → kinetic energy of the water → kinetic energy of the turbine → electrical energy.

Water falling through a height h (the head) loses mgh of potential energy per mass m. If the volume flowing each second is Q, the mass per second is ρQ, so the available power is

**P = ρQgh**

Ignoring losses, mgh = ½mv² gives v = √(2gh).

**Worked example 6.** Water of density 1000 kg m⁻³ falls through 120 m at 45 m³ s⁻¹. Available power = 1000 × 45 × 9.81 × 120 = 5.30 × 10⁷ W = 53.0 MW. At 88% overall efficiency the electrical output is 46.6 MW.

### Water flowing through a turbine

For a turbine standing in a moving stream, the same argument as for wind gives the specification's expression with the density of water:

**P = ½πr²ρv³**, with ρ = 1000 kg m⁻³.

For r = 1.5 m and v = 2.4 m s⁻¹, P = ½ × π × 1.5² × 1000 × 2.4³ = 4.89 × 10⁴ W, about 49 kW. Water is about 830 times denser than air (1000 / 1.2), so a water turbine of the same size and speed has about 830 times the power available.

### Base and back-up stations

Base-power stations run continuously at steady output to meet the constant demand. Back-up (peak) stations are brought on quickly when demand rises above the base supply. Hydroelectric stations suit back-up use because water can be released through the turbines within minutes.

### Pumped storage

At times of low demand, surplus electricity drives pumps that lift water from a lower reservoir to an upper one, storing gravitational potential energy. At times of high demand the water is released back through the turbines to generate. Pumped storage is not a source: it uses more energy to pump than it later returns.

**Worked example 7.** An upper reservoir holds 2.0 × 10⁶ m³, with a mean head of 300 m. Energy stored = ρVgh = 1000 × 2.0 × 10⁶ × 9.81 × 300 = 5.89 × 10¹² J, which is 1635 MWh. At 90% generating efficiency the output is 1470 MWh, enough to run at 400 MW for 3.68 h. If pumping is 88% efficient too, the round trip returns 0.88 × 0.90 = 79% of the energy used.

## Common errors

- Using r as the diameter in ½πr²ρv³, or forgetting that v is cubed.
- Using the density of air for water, or the reverse.
- Treating the maximum power as the power actually delivered.
- Using the distance from the lamp casing, not the filament, in Required practical 10 and ignoring background light.
- Adding voltages in parallel or currents in series.
- Calling pumped storage an energy source.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), specification version 4.4, for International AS and A-level exams from May/June 2020, published by OxfordAQA. This guide follows sections 3.13.2, 3.13.3 and 3.13.4.
