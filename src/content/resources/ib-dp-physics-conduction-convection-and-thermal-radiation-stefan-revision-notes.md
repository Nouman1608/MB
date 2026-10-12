---
title: "IB DP Physics: Conduction, convection and thermal radiation: Stefan-Boltzmann and Wien laws (DP Physics) -- Revision Notes"
seoTitle: "IB Physics B.1 Radiation & Conduction Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["ib"]
topic: "Conduction, convection and thermal radiation: Stefan-Boltzmann and Wien laws"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 277
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-b"
    subtopic: "ib-dp-physics-b-1"
description: "Condensed IB DP Physics B.1 revision notes on conduction, convection, Stefan-Boltzmann law, apparent brightness and Wien's law, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These revision notes follow the IB *Physics guide*, first assessment 2025, and condense the second half of topic B.1 (Thermal energy transfers): conduction, convection and thermal radiation. They apply to Standard Level and Higher Level, since B.1 has no HL-only material. Full explanations and longer worked examples are in the [study guide](/resources/ib-dp-physics-conduction-convection-and-thermal-radiation-stefan/).

Test yourself with the [practice set](/resources/ib-dp-physics-conduction-convection-and-thermal-radiation-stefan-practice/). Course page: [IB DP Physics](/boards/ib/ib-dp/physics/). Checklist: [IB DP Physics checklist](/checklists/ib/ib-dp/physics/). For the heating-calculation half of B.1 use the [molecular model revision notes](/resources/ib-dp-physics-molecular-model-temperature-internal-energy-and-revision-notes/). Not sure where you stand? Take the [free 10-minute diagnostics](/diagnostics/).

## Key definitions

- **Conduction:** transfer of thermal energy through matter by interactions between neighbouring particles, with no bulk movement of the material.
- **Convection:** transfer of thermal energy by the movement of a fluid, driven by differences in density.
- **Thermal radiation:** electromagnetic waves emitted by the surface of any body. It needs no medium.
- **Black body:** an ideal body that absorbs all radiation incident on it and emits the maximum power for its temperature.
- **Luminosity, L:** total power radiated by a body over all wavelengths (W). It can also be written as a multiple of L⊙.
- **Apparent brightness, b:** power received per unit area at the observer (W m⁻²).
- **Peak wavelength, λmax:** the wavelength at which the black-body spectrum is greatest.

## Formulas

| Quantity | Equation | Units and notes |
|---|---|---|
| Rate of conduction | ΔQ/Δt = kA ΔT/Δx | W; k in W m⁻¹ K⁻¹; ΔT in K or °C as a difference; Δx in m |
| Temperature gradient | ΔT/Δx | K m⁻¹ |
| Stefan-Boltzmann law | L = σAT⁴ | W; σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴; T in kelvin |
| Area of a sphere | A = 4πr² | m² |
| Apparent brightness | b = L/(4πd²) | W m⁻²; d in m |
| Wien's law | λmax T = 2.9 × 10⁻³ m K | λmax in m; T in kelvin |
| Solar units | L/L⊙ | L⊙ = 3.83 × 10²⁶ W |

Constants are stated here so you can practise. Use the values your teacher or question gives you.

## Conduction

- Hot particles have greater average kinetic energy. Vibrating particles pass energy to neighbours; net flow is towards the cold side.
- In metals, free electrons also carry energy, so metals conduct well.
- The direction of flow is set by the temperature difference.
- Rate is proportional to k, A and ΔT, and inversely proportional to the thickness.

**Method for a conduction calculation**

1. Convert thickness or length to metres and area to m².
2. Find ΔT as a difference. Kelvin and Celsius differences are equal.
3. Substitute into kA ΔT/Δx.
4. Multiply by time if energy is asked for: ΔQ = (ΔQ/Δt) × Δt.

**Reminder.** A rod of area 2.0 × 10⁻⁴ m² and length 0.50 m with k = 100 W m⁻¹ K⁻¹ and ΔT = 40 K: rate = 100 × 2.0 × 10⁻⁴ × 40 / 0.50 = 1.6 W.

## Convection

Write the chain in order.

1. A region of fluid is heated, so its particles move faster and spread out.
2. The density of that fluid falls.
3. The less dense fluid rises, and cooler, denser fluid sinks to replace it.
4. A circulating convection current carries thermal energy.

It needs a fluid and cannot occur in a solid. It needs the heating to be below the fluid, or the cooling above it.

## Radiation and the black-body spectrum

- Hotter surfaces emit more power and at shorter wavelengths.
- Spectrum shape: zero at short wavelength, one peak, a slower fall at long wavelength.
- Raise T: curve rises at every wavelength, the peak moves to shorter wavelength, and the area under the curve (total power per unit area) grows as T⁴.

**Method for a luminosity calculation**

1. Convert T to kelvin (add 273 to a Celsius value).
2. Write A. For a sphere, A = 4πr².
3. Compute T⁴ carefully, then multiply by σ and A.
4. Quote units in W, or divide by L⊙ for solar units.

**Method for a combined star problem**

1. Peak wavelength to T using Wien's law.
2. T and L to A using L = σAT⁴.
3. A to radius with r = √(A/4π).
4. Or: L and b to distance with d = √(L/4πb).

**Scaling reminders**

| Change | Effect |
|---|---|
| T doubles | L × 16 |
| r doubles | L × 4 |
| T × 3, r × 1/3 | L × 81/9 = 9 |
| d doubles | b ÷ 4 |
| d × 3 | b ÷ 9 |
| T doubles | λmax halves |

**Brightness reminder.** A source of L = 1.0 × 10²⁷ W is 5.0 × 10¹⁷ m away. Then b = 1.0 × 10²⁷ / (4π × (5.0 × 10¹⁷)²) = 3.2 × 10⁻¹⁰ W m⁻². Moving it to twice the distance gives a quarter of this value, 8.0 × 10⁻¹¹ W m⁻².

**Chain reminder.** A star peaks at 600 nm and has radius 1.0 × 10⁹ m. Wien: T = 2.9 × 10⁻³ / 600 × 10⁻⁹ = 4.8 × 10³ K. Then A = 4π × (1.0 × 10⁹)² = 1.26 × 10¹⁹ m² and L = σAT⁴ = 3.9 × 10²⁶ W, which is about 1.0 L⊙.

**Reading a spectrum graph.** Check which axis is wavelength and which is intensity. Compare peak positions to rank temperatures: the peak further to the left belongs to the hotter body. Compare heights or areas to rank power per unit area. Never compare temperatures from the heights alone.

## Must-know distinctions

| Pair | Difference |
|---|---|
| Luminosity and apparent brightness | L is the star's total output; b depends on distance |
| Peak wavelength and total power | λmax is where the curve peaks; total power is the area under the curve |
| Conduction and convection | Conduction passes energy between particles that stay put; convection moves the fluid itself |
| Temperature in K and in °C | Differences match; absolute values need kelvin in σAT⁴ and Wien |
| Thermal conductivity k and thermal energy | k is a property of the material; it is not an amount of energy |

## Quick self-test

1. A slab has k = 0.50 W m⁻¹ K⁻¹, area 4.0 × 10⁻³ m² and thickness 2.0 cm. Its faces differ by 30 K. Find the rate of conduction.
2. A star's spectrum peaks at 2.9 µm. Find its surface temperature.
3. A star peaks at 500 nm. Find its temperature.
4. A black-body sphere of radius 0.10 m is at 600 K. Find its luminosity.
5. A black body's temperature doubles at constant area. By what factor does L change?
6. The distance to a star is multiplied by 1.5. What happens to b?
7. A source has L = 1.0 × 10²⁶ W. Find b at 2.0 × 10¹⁶ m.
8. A surface at 27 °C is modelled as a black body. Find the peak wavelength.
9. Explain why a heater is more effective at warming a room if it is placed low down.
10. Explain, in terms of particle energy, how energy travels along a heated rod.
11. A star has L = 0.50 L⊙. Express this in watts.

### Answers

1. 0.50 × 4.0 × 10⁻³ × 30 / 0.020 = **3.0 W**.
2. T = 2.9 × 10⁻³ / 2.9 × 10⁻⁶ = **1.0 × 10³ K**.
3. T = 2.9 × 10⁻³ / 500 × 10⁻⁹ = **5.8 × 10³ K**.
4. A = 4π × 0.10² = 0.126 m². L = 5.67 × 10⁻⁸ × 0.126 × 600⁴ = **9.2 × 10² W**.
5. 2⁴ = **16 times larger**.
6. b ∝ 1/d², so b becomes 1/1.5² = 0.44 of its value (**decreases to 4/9**).
7. b = 1.0 × 10²⁶ / (4π × (2.0 × 10¹⁶)²) = **2.0 × 10⁻⁸ W m⁻²**.
8. T = 300 K. λmax = 2.9 × 10⁻³ / 300 = **9.7 × 10⁻⁶ m** (9.7 µm).
9. Air next to the heater warms and its density falls, so it rises. Cooler, denser air moves in to take its place. A convection current circulates through the room. Warm air is already at the top if the heater is high, so no current forms.
10. Particles at the hot end have more kinetic energy. They vibrate more and collide with or push on neighbours, passing energy on. The net flow is toward the cold end.
11. 0.50 × 3.83 × 10²⁶ = **1.9 × 10²⁶ W**.

## Where marks are usually lost

- Using °C in σAT⁴ or in Wien's law.
- Leaving out 4π, or using the diameter in place of the radius.
- Quoting thickness in cm or mm and not converting to metres.
- Giving heat as "rising" instead of explaining that the warm fluid is less dense.
- Not stating the direction of net transfer as set by the temperature difference.
- Describing the black-body peak as the total energy.
- Rounding T⁴ early, which drifts the third significant figure.
- Forgetting the unit, or giving W where W m⁻² is wanted for b.
- Treating luminosity as something that changes with the observer's distance.

## Official syllabus

Source: the *Physics guide* for the IB Diploma Programme (first assessment 2025), International Baccalaureate Organization. Topic B.1, Thermal energy transfers, second half.
