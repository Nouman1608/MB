---
title: "IB DP Physics: The greenhouse effect and planetary energy balance (DP Physics) -- Revision Notes"
seoTitle: "IB Physics B.2 Greenhouse Effect Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["ib"]
topic: "The greenhouse effect and planetary energy balance"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 278
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-b"
    subtopic: "ib-dp-physics-b-2"
description: "Condensed revision notes on emissivity, albedo, S/4, greenhouse gases and energy balance models for IB DP Physics topic B.2, SL and HL."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These revision notes condense topic B.2 (Greenhouse effect) of the IB *Physics guide*, first assessment 2025, for Standard Level and Higher Level; the guide sets no extra content for Higher Level alone in B.2. For full explanations and worked examples, go to the [study guide](/resources/ib-dp-physics-the-greenhouse-effect-and-planetary-energy-balance/). Test yourself with the [practice set](/resources/ib-dp-physics-the-greenhouse-effect-and-planetary-energy-balance-practice/).

Course page: [IB DP Physics](/boards/ib/ib-dp/physics/). Checklist: [IB DP Physics checklist](/checklists/ib/ib-dp/physics/). To find weak spots, try the [free 10-minute diagnostics](/diagnostics/). The radiation law used here is introduced in the [B.1 study guide](/resources/ib-dp-physics-molecular-model-temperature-internal-energy-and/).

## Definitions

- **Conservation of energy:** energy is transferred, never created or destroyed. Power in equals power out when the temperature is steady.
- **Emissivity e:** the surface's radiated power per square metre, divided by the same quantity for an ideal black surface at the same temperature (σT⁴). No unit.
- **Albedo α:** total scattered power divided by total incident power. No unit, between 0 and 1.
- **Solar constant S:** intensity of the Sun's radiation at a planet's distance, on a surface facing the Sun, at the top of the atmosphere.
- **Greenhouse gas:** a gas whose molecules take in infrared and then radiate it away in every direction.
- **Enhanced greenhouse effect:** extra warming from greenhouse gases added by human activity.
- **Equilibrium temperature:** the temperature at which power absorbed equals power radiated.

## Formulas

| Quantity | Relationship | Note |
|---|---|---|
| Emissivity | e = (P/A) / σT⁴ | P = eσAT⁴ for a real surface |
| Albedo | α = scattered power / incident power | Fraction absorbed = 1 − α |
| Power intercepted | S × πR² | Projected disc of the planet |
| Mean incoming intensity | S/4 | Disc area ÷ sphere area = 1/4 |
| Mean absorbed intensity | S(1 − α)/4 | Per square metre of whole surface |
| Equilibrium (no atmosphere) | S(1 − α)/4 = eσT⁴ | T = [S(1 − α)/(4eσ)]^(1/4) |
| One full-absorbing layer | Ts = 2^(1/4) Te | Te is the no-atmosphere value |
| Layer absorbing fraction a | σTs⁴(1 − a/2) = S(1 − α)/4 | TA⁴ = Ts⁴/2 |
| Photon energy | E = hf = hc/λ | Absorption needs a matching gap |
| Peak wavelength | λmax T = 2.9 × 10⁻³ m K | Used to compare Sun and Earth |

Use kelvin in every T⁴ term. Radiation per unit area is an intensity in W m⁻².

## Method in steps: equilibrium temperature

1. Write down S, α, e and σ with units.
2. Work out the absorbed intensity S(1 − α)/4 in W m⁻².
3. Set it equal to eσT⁴ (add the atmosphere term if the model has one).
4. Rearrange to T⁴, then take the fourth root.
5. Give T in kelvin, then convert to °C only if asked. Check it is sensible.

**Reminder.** S = 1800 W m⁻², α = 0.50, e = 1. Absorbed = 1800 × 0.50 / 4 = 225 W m⁻². T⁴ = 225 / 5.67 × 10⁻⁸ = 3.97 × 10⁹; T = 251 K.

## Method in steps: surface and atmosphere layers

1. Draw the arrows: solar in, surface radiation up, atmosphere radiation up and down, radiation to space.
2. Write one balance equation for the top of the atmosphere, one for the atmosphere, one for the surface.
3. Remember the atmosphere emits equally up and down.
4. Solve for the surface temperature last.
5. Check that two of the three equations are enough: the third is a test of your algebra.

## Greenhouse gases at a glance

| Gas | Natural | Human-created |
|---|---|---|
| CO2 | Respiration, decay, volcanoes | Fossil fuels, cement, deforestation |
| CH4 | Wetlands, termites | Livestock, rice, landfill, fuel extraction |
| N2O | Soil and ocean bacteria | Fertilisers, industry |
| H2O | Evaporation | Indirect: warmer air holds more |

## Why they absorb infrared

- Energy-level model: a molecule has discrete vibrational levels. A photon is absorbed if hf equals a gap between levels. The molecule later drops back and emits a photon in a random direction, or loses energy in collisions.
- Resonance model: bonds act as oscillators. Radiation at the natural frequency drives large oscillations, so energy is absorbed and then radiated in all directions.
- Sunlight peaks at about 500 nm and passes through. Radiation from the surface peaks near 10 μm and is absorbed.
- Result: part of the absorbed energy returns to the surface, which warms until the power escaping to space matches the absorbed solar power.

## Must-know distinctions

- Natural greenhouse effect versus enhanced greenhouse effect.
- Absorption and re-emission versus reflection. Greenhouse gases absorb and re-emit in all directions; they do not mirror the radiation.
- Albedo (reflected sunlight, a property of the surface) versus emissivity (own infrared emission).
- S (at the planet's distance) versus S/4 (mean over the whole sphere).
- Incident, scattered and absorbed power.

## Albedo and the solar constant: what to remember

- High albedo: fresh snow, ice, thick cloud. Low albedo: open ocean, dark forest, bare dark soil.
- Earth's albedo changes from day to day with cloud formations, and it varies with latitude because the surface type and the angle of the Sun's rays change.
- A rise in albedo means less absorbed power and a lower equilibrium temperature, all else equal.
- A planet farther from its star has a smaller S. Intensity from a point source falls with the square of distance, so doubling the distance cuts S to one quarter.

## Layer model in a picture

```
space      <-- (1 - a) of surface IR escapes directly
           <-- atmosphere emits upward  (aσTA⁴)
-----------------------------------  atmosphere at TA
           --> atmosphere emits downward (aσTA⁴)
           <-- surface emits σTs⁴
-----------------------------------  surface at Ts
           <-- solar absorbed S(1 - α)/4 arrives from above
```

Balance at the top: what leaves (escaping surface IR plus upward atmospheric emission) equals the absorbed solar intensity. Balance at the surface: solar absorbed plus downward atmospheric emission equals σTs⁴.

**Reminder, model B.** Absorbed intensity 195 W m⁻², a = 0.60. Then σTs⁴(1 − 0.30) = 195, so Ts⁴ = 195 / (5.67 × 10⁻⁸ × 0.70) = 4.91 × 10⁹ and Ts = 265 K. Compare the no-atmosphere value of 242 K: the layer adds 23 K.

## Conservation of energy in numbers

If power in exceeds power out, the net power divides into the heat capacity to give the rate of warming: rate = net power / (mc). Example: a net 0.5 W m⁻² into a 50 m layer of water (5.0 × 10⁴ kg under each square metre, c = 4200 J kg⁻¹ K⁻¹) gives 0.5 / (5.0 × 10⁴ × 4200) = 2.4 × 10⁻⁹ K s⁻¹, which is 0.075 K in a year of 3.15 × 10⁷ s.

## Quick self-test

1. A plate of area 4.0 m² at 350 K radiates 1.8 kW. Find its emissivity.
2. A planet scatters 62% of the sunlight that reaches it. State its albedo and the fraction absorbed.
3. Explain, using areas, why the mean incoming intensity is S/4.
4. A planet has S = 1200 W m⁻² and α = 0.35. Find the mean absorbed intensity.
5. Find the equilibrium temperature for that planet if e = 1.
6. A surface of emissivity 0.90 must radiate 240 W m⁻² to balance its input. Find its temperature.
7. Earth intercepts 1361 W m⁻² over a disc of radius 6.37 × 10⁶ m. With albedo 0.30, find the absorbed power.
8. A no-atmosphere temperature is 200 K. Use the single full-absorbing layer model to find the surface temperature.
9. Name the four main greenhouse gases and give one human source of each.
10. State two reasons why the albedo of Earth changes.

### Answers

1. σT⁴ = 5.67 × 10⁻⁸ × 350⁴ = 851 W m⁻²; P/A = 1800 / 4.0 = 450 W m⁻²; e = 450 / 851 = **0.53**.
2. α = **0.62**; fraction absorbed = **0.38**.
3. The planet intercepts sunlight over a disc of area πR² but radiates from a sphere of area 4πR², so the mean is S × πR² / 4πR² = **S/4**.
4. 1200 × 0.65 / 4 = **195 W m⁻²**.
5. T⁴ = 195 / 5.67 × 10⁻⁸ = 3.44 × 10⁹, so T = **242 K**.
6. T⁴ = 240 / (0.90 × 5.67 × 10⁻⁸) = 4.70 × 10⁹, so T = **262 K**.
7. 1361 × π × (6.37 × 10⁶)² × 0.70 = **1.21 × 10¹⁷ W**.
8. 2^(1/4) × 200 = **238 K**.
9. Carbon dioxide (burning fossil fuels), methane (cattle or rice farming), nitrous oxide (fertilisers), water vapour (indirectly, through warming). Any valid human source is accepted in your own words.
10. Cloud cover changes (daily and with weather), and latitude or surface type (ice and snow reflect more than ocean or forest).

## Where marks are usually lost

- Using S instead of S/4, or applying (1 − α) twice.
- Working in degrees Celsius inside T⁴.
- Stopping at T⁴ without taking the fourth root.
- Describing greenhouse gases as reflecting or trapping, rather than absorbing and re-emitting in all directions.
- Writing "the gas re-emits it back to Earth" instead of "in all directions, so some returns to the surface".
- Giving only one half of the explanation for a changing albedo.
- Dropping units, or giving a temperature in kelvin as "K°".
- Naming a gas without giving both its natural and human sources.
- In a layer model, forgetting the layer radiates both up and down.

## Official syllabus

Source: the *Physics guide* for the IB Diploma Programme (first assessment 2025), International Baccalaureate Organization. Topic B.2, Greenhouse effect.
