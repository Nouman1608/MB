---
title: "OxfordAQA International AS and A-level Physics: Wind, solar and hydroelectric energy (9630) -- Revision Notes"
seoTitle: "OxfordAQA A-level Physics Wind Solar Hydro Notes"
resourceType: "revision-notes"
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
description: "Condensed notes on wind, solar and hydroelectric energy, solar cells and pumped storage for OxfordAQA International A-level Physics, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense sections 3.13.2 to 3.13.4 of the OxfordAQA International AS and A-level Physics (9630) specification, version 4.4. The specification marks section 3.13 as International A-level only. The [study guide](/resources/oxfordaqa-a-level-physics-wind-solar-and-hydroelectric-energy/), has the full explanations; the [practice questions](/resources/oxfordaqa-a-level-physics-wind-solar-and-hydroelectric-energy-practice/). Course pages: [OxfordAQA A-level Physics hub](/boards/oxfordaqa/a-level/physics/) and the printable [checklist](/checklists/oxfordaqa/a-level/physics/). The free [diagnostics](/diagnostics/) show where to focus.

The specification expects you to weigh advantages and disadvantages of each source and judge which suits a situation. Learn the comparison table near the end.

## Key equations

| Quantity | Equation | Notes |
|---|---|---|
| Maximum wind power | P = ½πr²ρv³ | r = blade length, ρ = density of air; P ∝ r² and P ∝ v³ |
| Maximum power in a water stream | P = ½πr²ρv³ | same form, ρ = density of water (1000 kg m⁻³ as supplied data) |
| Intensity from a point source | I = P/4πr² | I ∝ 1/r²; units W m⁻² |
| Power of a solar cell | P = IV | maximum at the knee of the V-I curve |
| Efficiency | useful output power / input power | give as a fraction or a percentage |
| Power from falling water | P = ρQgh | Q = volume per second, h = head |
| Stored energy, pumped storage | E = ρVgh | V = volume raised |

## Wind energy: method

1. Write the mass passing per second: ρπr²v.
2. Kinetic energy per second: ½ × (ρπr²v) × v² = ½πr²ρv³.
3. Convert radius to metres; cube the speed, not the product.
4. For a change, use ratios: new/old = (r₂/r₁)² × (v₂/v₁)³.

Reminder: r = 10 m and v = 6.0 m s⁻¹ in air of 1.2 kg m⁻³ gives P = ½ × π × 100 × 1.2 × 216 = 4.07 × 10⁴ W, about 41 kW.

### Why not all of it can be used

- The air must carry on moving past the rotor, so it keeps some kinetic energy.
- Friction, turbulence, gearbox and generator losses.
- Wind speed varies, and turbines are stopped in very high winds.

### Wind farms and the environment

- Wind shadow: slower, turbulent air behind a turbine. Turbines are spaced so that none sits in another's shadow, which needs a lot of land or sea.
- For: no carbon dioxide in operation, no fuel, small running cost.
- Against: intermittent supply, noise, visual impact, risk to birds and bats, construction impact.

## Solar energy: method

1. Intensity from a source: I = P/4πr². Use r from the centre of the source.
2. Comparing distances: I₂ = I₁ × (r₁/r₂)².
3. Power on a panel facing the source = I × area. Output = efficiency × that.

Reminder: tripling the distance cuts intensity to one ninth.

### Solar cell V-I characteristic

- Current is nearly constant at low voltage (the short-circuit current).
- It then drops steeply to zero at the open-circuit voltage.
- Power IV is zero at both ends. Maximum power is near the knee.
- To find it from a table, compute IV for every row and pick the largest.
- Load resistance at maximum power is V/I at that row.

### Arrays

| Arrangement | Voltage | Current |
|---|---|---|
| n cells in series | n × cell voltage | one cell's current |
| m branches in parallel | one branch's voltage | m × branch current |

A series string is limited by its weakest cell, for example a shaded one.

### Required practical 10: inverse square law with an LDR

- Point source (small lamp), LDR on a metre rule, darkened room.
- Vary the distance d; record resistance R or conductance G = 1/R. Repeat readings.
- Subtract background light (lamp off).
- Measure to the filament: a constant offset x₀ is a systematic error.
- Test: if G ∝ 1/(d + x₀)², a graph of 1/√G against d is a straight line with a negative intercept on the d axis equal to −x₀.
- Caution: an LDR may not respond in proportion to intensity, so the straight line supports the law only within the range tested.

## Hydroelectric energy and pumped storage

- Station: upper reservoir, penstock, turbine, generator, outlet.
- Energy chain: gravitational potential energy → kinetic energy of water → kinetic energy of turbine → electrical energy (generator).
- Ignoring losses, v = √(2gh).
- Base stations run continuously at steady output. Back-up stations start up quickly when demand rises. Hydro and pumped storage suit back-up because they respond within minutes.
- Pumped storage: pump water up when demand is low; release it through the turbines when demand is high. It is an energy store, not a source, and returns less energy than it uses.

### Source comparison

| Source | Strengths | Limits |
|---|---|---|
| Wind | no fuel, no carbon dioxide in use | intermittent, shadows, visual and noise impact |
| Solar cell | no moving parts, no emissions in use | depends on daylight and weather; low efficiency |
| Hydro | fast response, no fuel | needs a large height difference and water; changes the valley |
| Pumped storage | stores surplus for peaks | net energy loss; needs two reservoirs |

## Short worked reminders

Solar panel: area 1.6 m², intensity 800 W m⁻² at right angles, efficiency 17%. Light power = 800 × 1.6 = 1280 W. Output = 0.17 × 1280 = 218 W.

Water turbine in a stream: r = 1.2 m, v = 2.0 m s⁻¹, ρ = 1000 kg m⁻³. P = ½ × π × 1.2² × 1000 × 2.0³ = 1.81 × 10⁴ W, about 18 kW.

Pumped storage: 5.0 × 10⁵ m³ lifted 200 m. E = ρVgh = 1000 × 5.0 × 10⁵ × 9.81 × 200 = 9.81 × 10¹¹ J, which is 273 MWh. Real output is less, because of losses in both the pumping and the generating.

Efficiency of a round trip: multiply the pumping efficiency by the generating efficiency. Two efficiencies of 0.85 give 0.72 (0.7225).

## Must-know distinctions

- Power available vs power delivered: the first is the ceiling, the second is after losses.
- Series vs parallel: series adds voltage, parallel adds current.
- Base vs back-up: steady supply vs quick response.
- Energy source vs energy store: pumped storage is a store.
- ½πr²ρv³ (a turbine in a moving fluid) vs ρQgh (water falling through a head).

## Quick self-test

1. Air of density 1.2 kg m⁻³ moves at 10 m s⁻¹ through a rotor of blade length 15 m. Find the maximum power.
2. By what factor does the maximum wind power change if the wind speed triples?
3. Give one reason a turbine cannot extract all the wind's kinetic energy.
4. A lamp's light is measured at 0.50 m and again at 1.50 m. How does the intensity compare?
5. A star radiates 1.9 × 10²⁶ W. Find its intensity at 2.0 × 10¹¹ m.
6. A cell delivers 40 mA at 0.48 V. What power is that?
7. Five identical cells, each 0.55 V and 80 mA, are in series. Give the voltage and current.
8. Four such strings are joined in parallel. Give the voltage and current.
9. Water at 30 m³ s⁻¹ falls 60 m. Find the available power (g = 9.81 m s⁻²).
10. How many times greater is the maximum power from water than from air, for the same r and v?
11. Why is the LDR experiment done in a darkened room?
12. When is water pumped to the upper reservoir, and why?

### Answers

1. P = ½ × π × 15² × 1.2 × 10³ = 4.24 × 10⁵ W, about 424 kW.
2. 3³ = 27 times.
3. The air must keep moving; if it stopped it would block the flow (or: friction and generator losses).
4. Distance is three times larger, so intensity is one ninth.
5. I = 1.9 × 10²⁶ / (4π × (2.0 × 10¹¹)²) = 378 W m⁻² (3.8 × 10² W m⁻²).
6. P = 0.040 × 0.48 = 0.0192 W = 19.2 mW.
7. Voltage 5 × 0.55 = 2.75 V; current 80 mA.
8. Voltage 2.75 V; current 4 × 80 = 320 mA.
9. P = 1000 × 30 × 9.81 × 60 = 1.77 × 10⁷ W, about 17.7 MW.
10. Ratio of densities = 1000 / 1.2 = 833.
11. Background light would add to the LDR reading and disturb the intensity measured from the lamp.
12. When demand is low and electricity is surplus, so the energy is stored as gravitational potential energy for the peak.

## Where marks are usually lost

- Using diameter for r, or squaring the wrong quantity in ½πr²ρv³.
- Forgetting that v is cubed, so a small change in wind speed has a large effect.
- Using air density for water, or the reverse.
- Writing "all the energy cannot be used because of wastage" without naming a physical reason.
- Treating a wind farm layout answer as only about space; the point is the wind shadow.
- Reading the maximum power of a cell off the current or voltage axis instead of calculating IV.
- Mixing up series and parallel when asked for the current or voltage of an array.
- Describing the LDR practical without a distance range, repeats, background reading or filament offset.
- Calling pumped storage a source, or stating that it gives a net gain of energy.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), specification version 4.4, for International AS and A-level exams from May/June 2020, published by OxfordAQA. These notes follow sections 3.13.2, 3.13.3 and 3.13.4.
