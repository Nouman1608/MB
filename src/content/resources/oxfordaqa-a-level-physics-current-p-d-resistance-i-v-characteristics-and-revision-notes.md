---
title: "OxfordAQA International AS and A-level Physics: Current, p.d., resistance, I-V characteristics and resistivity (9630) -- Revision Notes"
seoTitle: "OxfordAQA A-level Physics Current and I-V Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Current, p.d., resistance, I-V characteristics and resistivity"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "AS"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 105
syllabusTopics:
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "basics-of-electricity-oxfordaqa"
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "current-voltage-characteristics-oxfordaqa"
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "resistivity-oxfordaqa-alevel"
description: "Condensed revision notes on current, p.d., resistance, I-V graphs, resistivity, ntc thermistors and superconductors for OxfordAQA AS and A-level Physics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense sections 3.4.1 to 3.4.3 of the OxfordAQA International AS and A-level Physics (9630) specification, Version 4.4: basics of electricity, current-voltage characteristics and resistivity. The content is shared International AS and A-level content. Longer explanations and worked examples are in the [study guide](/resources/oxfordaqa-a-level-physics-current-p-d-resistance-i-v-characteristics-and/), then test yourself with the [practice questions](/resources/oxfordaqa-a-level-physics-current-p-d-resistance-i-v-characteristics-and-practice/).

Navigation: [course hub](/boards/oxfordaqa/a-level/physics/), [printable checklist](/checklists/oxfordaqa/a-level/physics/) and the [free diagnostics](/diagnostics/). Unit conversions and uncertainty are in [measurements and their errors](/resources/a-level-oxfordaqa-physics-measurements-and-their-errors/).

## Definitions to learn

- **Electric current:** rate of flow of charge.
- **Potential difference:** the work done (energy transferred) per unit charge moving between two points.
- **Resistance:** the ratio of the p.d. across a component to the current through it.
- **Ohm's law:** for a conductor, I is proportional to V as long as physical conditions such as temperature do not change.
- **Resistivity:** the property of a material, defined through ρ = RA/L, that links the resistance of a sample to its length and cross-sectional area.
- **Superconductor:** a material with zero resistivity at and below its critical temperature.

## Equations and units

| Quantity | Equation | Unit | Note |
|---|---|---|---|
| Current | I = ΔQ/Δt | A = C s⁻¹ | Time in seconds |
| Charge from electrons | Q = Ne | C | e = 1.60 × 10⁻¹⁹ C |
| P.d. | V = W/Q | V = J C⁻¹ | W is energy transferred |
| Resistance | R = V/I | Ω = V A⁻¹ | Value at a point |
| Resistivity | ρ = RA/L | Ω m | A = πd²/4 for a round wire |
| Rearranged | R = ρL/A; L = RA/ρ | | Check powers of ten |

Useful conversions: 1 mA = 10⁻³ A, 1 kΩ = 10³ Ω, 1 mm² = 10⁻⁶ m², 1 mm = 10⁻³ m, 1 min = 60 s.

## Method boxes

**Charge or current questions**

1. Convert time to seconds and current to amps.
2. Q = It for constant current. For N electrons, Q = Ne.
3. State the unit with the answer.

**Resistance at a point on a curve**

1. Read the coordinates (V, I) of the point. Check which axis is which.
2. Calculate R = V/I.
3. Do not use the gradient or its reciprocal.

**Resistivity from a graph of R against L**

1. Gradient = ρ/A for a straight line through the origin.
2. Find A from the diameter: A = πd²/4, using d in metres.
3. ρ = gradient × A.

## I-V characteristics at a glance

| Component | Shape (I against V) | Why |
|---|---|---|
| Ohmic conductor (metal at constant temperature) | Straight line through the origin | R constant |
| Filament lamp | S-shaped, symmetrical about the origin; flattens at high |V| | Temperature rises, so R rises |
| Semiconductor diode | Very little current in reverse, or forward below roughly 0.6 V; steep rise beyond that | Conducts one way only |

If V is plotted vertically and I horizontally, each curve is reflected in the line y = x, so the lamp curve bends upwards: V rises faster than I. Ohmic gradient is R on a V-I graph and 1/R on an I-V graph.

Ideal meters: ammeter zero resistance, voltmeter infinite resistance, unless the question says otherwise.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--02-iv-characteristics.webp" width="900" height="1115" alt="Four I-V graphs: a fixed resistor is a straight line through the origin; a filament lamp curves flat as it heats, with lesson data giving 10 ohm at 1.0 V and 25 ohm at 10 V; a diode conducts only above about 0.7 V forward; an NTC thermistor curve steepens as it heats." loading="lazy">
  <figcaption>Four I–V shapes side by side, with R = V/I read at a point.</figcaption>
</figure>


## Temperature effects

| Material | Resistance as T rises | Reason |
|---|---|---|
| Metal | Increases | Ions vibrate more, so more collisions with electrons |
| ntc thermistor | Decreases | More charge carriers released, which outweighs the extra vibration |
| Superconductor | Zero below the critical temperature | No energy lost to the lattice |

Only ntc thermistors are on the specification. A thermistor with a fixed resistor and a cell can act as a temperature sensor: as temperature rises, current rises and so does the p.d. across the fixed resistor.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--04-resistance-temperature.webp" width="900" height="1275" alt="In a metal, heating makes the ions vibrate more so electrons collide more and resistance rises. In an NTC thermistor or an LDR, heat or light frees many more carriers so resistance falls. The graph shows a metal rising gently and an NTC thermistor falling from 2.4 kohm at 25 C to 0.50 kohm at 65 C." loading="lazy">
  <figcaption>Collisions versus carrier number: why metals and NTC thermistors behave oppositely.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--09-sensing-dividers.webp" width="900" height="1210" alt="With an NTC thermistor and a 2.2 kohm resistor on 9.0 V, the output across the fixed resistor rises from 4.95 V at 20 C to 7.07 V at 60 C while the output across the thermistor falls from 4.05 V to 1.93 V. With an LDR in series with 10 kohm on 6.0 V, the 10 kohm resistor has 5.45 V in bright light and 0.29 V in the dark." loading="lazy">
  <figcaption>Which component the output is across decides whether it rises or falls.</figcaption>
</figure>


## Superconductor applications

- Strong magnetic fields from large currents in coils with no heating, as in scanners and accelerators.
- Cables for transmitting power with no energy lost as heat.
- The material must be kept below its critical temperature, which usually means expensive cooling.
- Critical field is not assessed.

## Measuring a characteristic: checklist

1. Ammeter in series with the component, voltmeter in parallel across it.
2. A variable supply (or a circuit that lets you vary the p.d. from near zero upwards) to give a wide range of readings.
3. Reverse the connections to cover negative p.d. for a lamp or diode.
4. For a diode, increase the forward p.d. in small steps near the threshold, and take care not to exceed the rated current.
5. Allow the filament to settle at each reading.
6. Tabulate V, I and R = V/I, then plot.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--05-series-parallel-circuit.webp" width="900" height="1060" alt="An 18 V supply drives a 6.0 ohm resistor in series with 12 ohm and 4.0 ohm resistors in parallel. The pair is 3.0 ohm, total 9.0 ohm, supply current 2.0 A; the branches carry 0.50 A and 1.5 A, with 6.0 V across both. Currents add at the junction and 18 V = 12 V + 6.0 V round the loop." loading="lazy">
  <figcaption>One mixed circuit solved to show both Kirchhoff laws.</figcaption>
</figure>


## Resistance-temperature graphs

- An ntc thermistor graph falls steeply at low temperature and flattens at high temperature.
- To use it as a sensor, read R at the measured temperature, or find the temperature from a measured R.
- A metal wire graph rises with temperature. A superconductor graph is a horizontal line along R = 0 below the critical temperature, and rises sharply to a non-zero value above it.
- Quote values read from the graph with units, and show the reading lines or points you used.

## Small worked reminders

**A.** A charge of 120 C passes in 2.5 min. I = 120/150 = 0.80 A.

**B.** A wire has R = 6.0 Ω, L = 1.5 m and d = 0.50 mm. A = π(0.25 × 10⁻³)² = 1.96 × 10⁻⁷ m². ρ = RA/L = 6.0 × 1.96 × 10⁻⁷ / 1.5 = 7.9 × 10⁻⁷ Ω m.

**C.** A thermistor of resistance 2.5 kΩ is connected to a 3.0 V supply. I = 3.0/2500 = 1.2 mA. If it warms and its resistance falls to 1.5 kΩ, I = 2.0 mA.

**D.** A filament lamp has V = 6.0 V when I = 0.30 A. R = 6.0/0.30 = 20 Ω. This is the resistance at that point only.

## Must-know distinctions

- **Resistance and resistivity:** resistance belongs to a particular sample, in ohms. Resistivity belongs to the material at a given temperature, in ohm metres.
- **Ohm's law and R = V/I:** the definition R = V/I always applies. Ohm's law says R is constant, which is true only under certain conditions.
- **Metal and ntc thermistor:** opposite trends, with different causes.
- **Low resistance and zero resistance:** a good conductor still has resistivity. A superconductor has none below its critical temperature.

## Quick self-test

1. A current of 0.80 A flows for 150 s. What charge passes?
2. How much energy is transferred when 24 C passes through a p.d. of 9.0 V?
3. What is the resistance of a component with 3.6 V across it and 45 mA through it?
4. Calculate the resistance of a 5.0 m copper wire of cross-sectional area 0.50 mm², given ρ = 1.7 × 10⁻⁸ Ω m.
5. A wire has its length and its diameter both doubled. By what factor does R change?
6. Why does a filament lamp not obey Ohm's law?
7. Describe the behaviour of a diode in reverse bias.
8. Explain why the resistance of a metal rises with temperature.
9. How many electrons pass a point each second when the current is 1.0 mA?
10. State what is meant by critical temperature.
11. Give two applications of superconductors.
12. On a V-I graph (I on the horizontal axis), a lamp curve passes through (0.30 A, 6.0 V). Why is it wrong to find R from the gradient at that point?

### Answers

1. Q = It = 0.80 × 150 = **120 C**.
2. W = VQ = 9.0 × 24 = **216 J**.
3. R = 3.6 / 0.045 = **80 Ω**.
4. R = ρL/A = 1.7 × 10⁻⁸ × 5.0 / (0.50 × 10⁻⁶) = **0.17 Ω**.
5. L doubles (R × 2); A increases by 4 (R ÷ 4). Net **R halves**.
6. Its temperature rises with current, so its resistance is not constant. Current is not proportional to p.d.
7. Almost no current flows. The resistance is very large.
8. Ions vibrate with greater amplitude, so electrons collide with them more often. The number of free electrons barely changes, so resistivity rises.
9. N = I/e = 1.0 × 10⁻³ / 1.60 × 10⁻¹⁹ = **6.3 × 10¹⁵ per second**.
10. The temperature at and below which the material has zero resistivity.
11. For example, strong magnetic fields and low-loss power transmission cables.
12. R = V/I is the ratio of the coordinates (6.0/0.30 = 20 Ω). The gradient of a curve is not that ratio.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--01-drift-velocity.webp" width="900" height="1260" alt="A wire carries free electrons that drift slowly against the conventional current. In time t the carriers in a slab of length vt cross a plane, so I = nAvq. For a 13 A copper cable the drift speed is 3.8 x 10^-4 m/s, and halving the diameter makes the drift speed four times larger for the same current." loading="lazy">
  <figcaption>Why a current of many amperes needs only a tiny drift speed: I = nAvq.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--03-resistivity-wire.webp" width="900" height="1255" alt="Three wires drawn to scale show that doubling the length doubles R (11.9 to 23.9 ohm) and doubling the diameter quarters it (2.98 ohm). A graph of R against L for a 0.32 mm wire has gradient 13.7 ohm per metre, so resistivity equals gradient times area, 1.1 x 10^-6 ohm metre." loading="lazy">
  <figcaption>How length and diameter change resistance, and how a graph gives resistivity.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--06-two-source-kirchhoff.webp" width="900" height="1100" alt="Two branches (12 V with 3.0 ohm, 8.0 V with 2.0 ohm) share a 2.0 ohm resistor. The junction law and two loop equations give I1 = 2.0 A, I2 = 1.0 A and 3.0 A through the shared resistor, with 6.0 V across it. Power from sources (32 W) equals power in the resistors (12 + 2 + 18 W)." loading="lazy">
  <figcaption>Solving a two-source circuit with Kirchhoff laws and checking energy.</figcaption>
</figure>


## Where marks are usually lost

- Using the gradient of a curve to find resistance.
- Reading the axes the wrong way round when V is on the horizontal axis.
- Giving the power of ten wrongly in A = πd²/4 when d is in mm.
- Using the radius in place of the diameter, or the reverse.
- Writing "the lamp gets hotter so the current goes up", when current rises more slowly because resistance increases.
- Describing a diode as "not conducting" in forward bias, without mentioning the threshold.
- Saying thermistor resistance "goes down because there are fewer electrons". More carriers are available.
- Leaving out units, or giving a resistivity in ohms.
- Stating "resistance is directly proportional to temperature" for a metal. The specification asks only for the qualitative effect.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--07-internal-resistance.webp" width="900" height="1290" alt="A real cell is an e.m.f. E in series with internal resistance r. With E = 12.0 V, r = 0.50 ohm and R = 5.5 ohm, I = 2.0 A, the terminal p.d. is 11.0 V and 1.0 V is lost across r. A V-I graph of a cell is a straight line with gradient -r and intercept E: data give E = 1.50 V and r = 0.60 ohm, short-circuit current 2.5 A." loading="lazy">
  <figcaption>Where the e.m.f. goes: terminal p.d. plus lost volts, and how a V–I graph gives E and r.</figcaption>
</figure>


## Frequently asked questions

**What is potential difference?**
Potential difference is the work done, or energy transferred, per unit charge moving between two points. Energy transferred is W = VQ.

**What is the difference between resistance and resistivity?**
Resistance belongs to a particular sample and is measured in ohms. Resistivity belongs to the material at a given temperature and is measured in ohm metres.

**Is R = V/I the same as Ohm's law?**
No. R = V/I defines resistance and always applies. Ohm's law says R is constant, which is only true under certain conditions, such as a metal at constant temperature.

**Why does an ntc thermistor's resistance fall when it is heated?**
It is made of semiconducting material, so heating releases more charge carriers. Saying its resistance falls because there are fewer electrons is wrong.

**What are superconductors used for?**
Superconductors are used to produce strong magnetic fields from large currents in coils with no heating, as in scanners and accelerators, and in cables that transmit power with no energy lost as heat.

## Official syllabus

Source: OxfordAQA International AS and A-level Physics (9630), Version 4.4, for exams from May/June 2020 onwards, published by OxfordAQA. Sections 3.4.1 to 3.4.3, shared International AS and A-level content.
