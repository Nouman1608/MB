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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-physics-wind-solar-and-hydroelectric-energy--01-wind-power-derivation.webp" width="900" height="1210" alt="A cylinder of air of radius r (the blade length) and length vt passes the rotor disc in time t. Volume is pi r squared v t, mass is rho pi r squared v t, kinetic energy is half rho pi r squared v cubed t, so P = half pi r squared rho v cubed. With r = 26.0 m, rho = 1.2 and v = 8.0 m per s, P = 0.652 MW and a turbine delivering 0.42 MW is 64% efficient." loading="lazy">
  <figcaption>The air reaching the rotor in time t forms a cylinder of length vt, which gives P = ½πr²ρv³.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-physics-wind-solar-and-hydroelectric-energy--03-wind-shadow-layout.webp" width="900" height="900" alt="Top view of two turbines. Close together, the second sits in the slower, turbulent wind shadow of the first; an illustrative 10% speed drop leaves 0.9 cubed = 73% of the power. Spaced further apart along the wind, the shadow fades and the second turbine meets nearly full-speed air, but needs more land or sea." loading="lazy">
  <figcaption>Because P ∝ v³, even a small speed loss in a wind shadow costs a lot of power, so turbines are spaced apart.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-physics-wind-solar-and-hydroelectric-energy--05-solar-cell-vi.webp" width="900" height="1250" alt="Two graphs against voltage 0 to 0.6 V from the lesson table. Current stays near 62 mA then falls steeply to zero at 0.60 V. Power IV is zero at both ends with a maximum of 27.5 mW at 0.50 V and 55 mA, where load resistance is 9.1 ohms; efficiency is 27.5 over 220 = 12.5%." loading="lazy">
  <figcaption>Maximum power is at the knee of the V–I curve, where IV is largest.</figcaption>
</figure>


### Arrays

| Arrangement | Voltage | Current |
|---|---|---|
| n cells in series | n × cell voltage | one cell's current |
| m branches in parallel | one branch's voltage | m × branch current |

A series string is limited by its weakest cell, for example a shaded one.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-physics-wind-solar-and-hydroelectric-energy--06-solar-array.webp" width="900" height="1030" alt="Forty-eight cells drawn as 4 parallel strings of 12 in series. Series cell voltages add (12 x 0.50 = 6.00 V) and a shaded cell limits the string current; parallel currents add (4 x 55 = 220 mA). Power is 6.00 x 0.22 = 1.32 W." loading="lazy">
  <figcaption>Series adds voltages; parallel adds currents.</figcaption>
</figure>


### Required practical 10: inverse square law with an LDR

- Point source (small lamp), LDR on a metre rule, darkened room.
- Vary the distance d; record resistance R or conductance G = 1/R. Repeat readings.
- Subtract background light (lamp off).
- Measure to the filament: a constant offset x₀ is a systematic error.
- Test: if G ∝ 1/(d + x₀)², a graph of 1/√G against d is a straight line with a negative intercept on the d axis equal to −x₀.
- Caution: an LDR may not respond in proportion to intensity, so the straight line supports the law only within the range tested.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-physics-wind-solar-and-hydroelectric-energy--09-rp10-ldr-inverse-square.webp" width="900" height="1190" alt="A lamp and an LDR on a metre rule in a dark room, with conductance G = 1/R measured at distances d read from the rule; the filament is a distance x0 behind the reading point. A graph of 1 over root G against d for the lesson data is a straight line of gradient 2.04 and intercept 0.0243 that crosses the d axis at -0.012 m, so x0 is about 1.2 cm." loading="lazy">
  <figcaption>Plotting 1/√G against d gives a straight line whose negative x-intercept is −x₀.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-physics-wind-solar-and-hydroelectric-energy--04-solar-inverse-square.webp" width="900" height="1045" alt="The same beam from the Sun covers 1, 4 and 9 unit squares at distances r, 2r and 3r, so intensity is I, I/4 and I/9. With the Sun at 3.8 x 10^26 W, intensity is 1.34 x 10^3 W per square metre at the top of Earth's atmosphere and 8.99 x 10^3 at Mercury, 6.69 times larger." loading="lazy">
  <figcaption>Intensity falls as 1/r² because the same power spreads over a sphere of area 4πr².</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-physics-wind-solar-and-hydroelectric-energy--07-hydro-station.webp" width="900" height="1220" alt="Schematic section: a high reservoir feeds a penstock down a head of 120 m to a turbine and generator, with water leaving to a lower level. Energy chain: gravitational potential, kinetic of water, kinetic of turbine, electrical. P = 1000 x 45 x 9.81 x 120 = 53.0 MW, or 46.6 MW at 88% efficiency; with no losses v = root 2gh = 48.5 m per s." loading="lazy">
  <figcaption>Water falling through the head h turns a turbine and generator: P = ρQgh.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-physics-wind-solar-and-hydroelectric-energy--08-pumped-storage.webp" width="900" height="1240" alt="At low demand surplus electricity drives a pump lifting water to the upper reservoir; at high demand water is released through a turbine. With pumping 88% and generating 90% efficient the round trip returns 0.88 x 0.90 = 79% of the energy used, so pumped storage is a store, not a source." loading="lazy">
  <figcaption>Pumped storage stores energy at low demand and returns less than it uses.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-physics-wind-solar-and-hydroelectric-energy--02-wind-speed-cubed.webp" width="900" height="1140" alt="Graph of maximum power against wind speed for r = 26.0 m: 0.652 MW at 8 m per s and 2.2 MW at 12 m per s, since 1.5 cubed is 3.375. Bars show doubling v gives 8 times the power and doubling r gives 4 times." loading="lazy">
  <figcaption>Power depends on v³, so a modest rise in wind speed gives a large rise in power.</figcaption>
</figure>


## Frequently asked questions

**What is the formula for the maximum power of a wind turbine?**
The maximum power available is P = ½πr²ρv³, where r is the blade length, ρ is the air density and v is the wind speed. It comes from the kinetic energy of the air passing through the area swept by the blades each second.

**How do you calculate the power of a hydroelectric station?**
Use P = ρQgh, where ρ is the density of water, Q is the volume flow rate, g is the gravitational field strength and h is the height the water falls.

**How does light intensity change with distance from a point source?**
Intensity follows the inverse square law, I = P / 4πr², so doubling the distance from the source reduces the intensity to a quarter.

**What is required practical 10 in OxfordAQA A-level Physics?**
Required practical 10 tests the inverse square law for light using an LDR. Take a background reading with the lamp off and measure distances from the filament, not the glass of the bulb.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), specification version 4.4, for International AS and A-level exams from May/June 2020, published by OxfordAQA. These notes follow sections 3.13.2, 3.13.3 and 3.13.4.
