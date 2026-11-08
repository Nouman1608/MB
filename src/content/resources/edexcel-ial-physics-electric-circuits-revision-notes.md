---
title: "Edexcel IAL Physics: Electric Circuits — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Unit 2: Waves and Electricity"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 2.4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-2-waves-and-electricity"
    subtopic: "electric-circuits"
description: "Condensed recall notes on current, resistance, Kirchhoff's laws, internal resistance, potential dividers and I-V characteristics for Edexcel IAL Physics YPH11."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Electric Circuits study guide](/resources/edexcel-ial-physics-electric-circuits/).

## Current and charge

```
I = Q/t        I = n A v q        (number density, area, drift velocity, charge)
```

**Why a thin section of wire gets hotter first.** The current is the same throughout, so from I = nqvA a smaller cross-sectional area A means a larger drift velocity v. The heating itself is explained by resistance: R = ρl/A is larger for the thin section, so with the same current the power dissipated there, P = I²R, is greater. That reasoning is a standard extended-answer question.

Metals have a very high number density n, so drift velocity is tiny (millimetres per second) — yet the current flows almost instantly, because the electric field is established throughout the circuit at nearly the speed of light. Along a uniform current-carrying wire, potential varies **linearly** with distance from one end, which is the working principle behind a potential divider's continuous voltage split.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--01-drift-velocity.webp" width="900" height="1260" alt="A wire carries free electrons that drift slowly against the conventional current. In time t the carriers in a slab of length vt cross a plane, so I = nAvq. For a 13 A copper cable the drift speed is 3.8 x 10^-4 m/s, and halving the diameter makes the drift speed four times larger for the same current." loading="lazy">
  <figcaption>Why a current of many amperes needs only a tiny drift speed: I = nAvq.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--02-iv-characteristics.webp" width="900" height="1115" alt="Four I-V graphs: a fixed resistor is a straight line through the origin; a filament lamp curves flat as it heats, with lesson data giving 10 ohm at 1.0 V and 25 ohm at 10 V; a diode conducts only above about 0.7 V forward; an NTC thermistor curve steepens as it heats." loading="lazy">
  <figcaption>Four I–V shapes side by side, with R = V/I read at a point.</figcaption>
</figure>


## Resistance

```
V = IR        R = rho L / A        P = VI = I^2 R = V^2 / R
```

**Resistivity ρ is a property of the material; resistance R is a property of the specimen.** Doubling the length doubles R; doubling the area halves it. **CORE PRACTICAL 7** is the experiment to determine the resistivity of a material — measure length and diameter (with a micrometer) and plot R against l/A, using the gradient.

**I–V characteristics:**

| Component | Shape | Reason |
|---|---|---|
| **Ohmic conductor** | Straight through origin | R constant at constant temperature |
| **Filament lamp** | Curve flattening | Temperature rises, so resistance rises |
| **Diode** | Zero then sharp rise | Conducts only above ~0.6 V forward bias; effectively no current at all in reverse |
| **Thermistor (NTC)** | Curve steepening | Resistance falls as temperature rises |

**A filament lamp's resistance rises with current because heating increases lattice vibration**, so electrons collide more often. In an NTC thermistor the opposite happens — heating releases more charge carriers, and that effect outweighs the increased vibration. **An LDR follows the same conduction-electron logic as an NTC thermistor**, but the trigger is light rather than heat: brighter illumination releases more charge carriers, so resistance falls as light intensity increases.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--03-resistivity-wire.webp" width="900" height="1255" alt="Three wires drawn to scale show that doubling the length doubles R (11.9 to 23.9 ohm) and doubling the diameter quarters it (2.98 ohm). A graph of R against L for a 0.32 mm wire has gradient 13.7 ohm per metre, so resistivity equals gradient times area, 1.1 x 10^-6 ohm metre." loading="lazy">
  <figcaption>How length and diameter change resistance, and how a graph gives resistivity.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--04-resistance-temperature.webp" width="900" height="1275" alt="In a metal, heating makes the ions vibrate more so electrons collide more and resistance rises. In an NTC thermistor or an LDR, heat or light frees many more carriers so resistance falls. The graph shows a metal rising gently and an NTC thermistor falling from 2.4 kohm at 25 C to 0.50 kohm at 65 C." loading="lazy">
  <figcaption>Collisions versus carrier number: why metals and NTC thermistors behave oppositely.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--07-internal-resistance.webp" width="900" height="1290" alt="A real cell is an e.m.f. E in series with internal resistance r. With E = 12.0 V, r = 0.50 ohm and R = 5.5 ohm, I = 2.0 A, the terminal p.d. is 11.0 V and 1.0 V is lost across r. A V-I graph of a cell is a straight line with gradient -r and intercept E: data give E = 1.50 V and r = 0.60 ohm, short-circuit current 2.5 A." loading="lazy">
  <figcaption>Where the e.m.f. goes: terminal p.d. plus lost volts, and how a V–I graph gives E and r.</figcaption>
</figure>


## Kirchhoff's laws

- **First law** — current into a junction equals current out. Conservation of **charge**.
- **Second law** — sum of e.m.f.s equals sum of p.d.s around a loop. Conservation of **energy**.

```
series:   R = R1 + R2      parallel:  1/R = 1/R1 + 1/R2
```

Adding a parallel resistor always **reduces** total resistance, because it provides an extra path.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--05-series-parallel-circuit.webp" width="900" height="1060" alt="An 18 V supply drives a 6.0 ohm resistor in series with 12 ohm and 4.0 ohm resistors in parallel. The pair is 3.0 ohm, total 9.0 ohm, supply current 2.0 A; the branches carry 0.50 A and 1.5 A, with 6.0 V across both. Currents add at the junction and 18 V = 12 V + 6.0 V round the loop." loading="lazy">
  <figcaption>One mixed circuit solved to show both Kirchhoff laws.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--06-two-source-kirchhoff.webp" width="900" height="1100" alt="Two branches (12 V with 3.0 ohm, 8.0 V with 2.0 ohm) share a 2.0 ohm resistor. The junction law and two loop equations give I1 = 2.0 A, I2 = 1.0 A and 3.0 A through the shared resistor, with 6.0 V across it. Power from sources (32 W) equals power in the resistors (12 + 2 + 18 W)." loading="lazy">
  <figcaption>Solving a two-source circuit with Kirchhoff laws and checking energy.</figcaption>
</figure>


## E.m.f. and internal resistance

```
E = I(R + r) = V + Ir        terminal p.d.  V = E - Ir
```

**E.m.f.** is energy supplied **to** each coulomb by the source; **p.d.** is energy transferred **from** each coulomb in a component.

Plotting V against I: **gradient = −r**, **intercept = E**. Terminal p.d. falls as current rises because more energy is dissipated inside the source. **CORE PRACTICAL 8** determines e.m.f. and internal resistance this way — typically a graph of terminal p.d. against current.

**Worked example.** A cell of e.m.f. 6.0 V and internal resistance 0.50 Ω drives an external resistor of 5.5 Ω. Total resistance = 5.5 + 0.50 = 6.0 Ω, so I = E / total R = 6.0 ÷ 6.0 = **1.0 A**. Terminal p.d. = E − Ir = 6.0 − (1.0 × 0.50) = **5.5 V**, equal to the p.d. across the external resistor, as expected.

## Potential dividers

```
V_out = V_in x R2 / (R1 + R2)
```

Substituting a **thermistor** or **LDR** makes the output respond to temperature or light. To predict the direction of change, ask what happens to that component's **share** of the total resistance.

## Exam traps

- Confusing resistivity with resistance.
- Saying electrons travel at the speed of light.
- Explaining a filament lamp's curve without mentioning temperature.
- Saying parallel resistors increase total resistance.
- Confusing e.m.f. with p.d.
- Ignoring internal resistance when a "real" cell is specified.

## Self-test

1. Why does a thin section of wire heat up first?
2. Distinguish resistivity from resistance.
3. Why does a filament lamp's resistance increase with current?
4. Why does an NTC thermistor behave in the opposite way?
5. What do the gradient and intercept of a V–I graph give?
6. A cell of e.m.f. 9.0 V and internal resistance 1.0 Ω drives an external resistor of 8.0 Ω. Find the current and the terminal p.d.
7. Why does an LDR's resistance fall as light intensity increases?

**Answers:** 1. For the same current a smaller cross-sectional area requires a higher drift velocity, so electrons collide with the lattice more frequently and transfer more energy there. 2. Resistivity is a property of the material; resistance depends additionally on the length and cross-sectional area of the specimen. 3. The current heats the filament, increasing lattice vibration so electrons collide more frequently and resistance rises. 4. Heating releases additional charge carriers in the semiconductor, and that increase outweighs the effect of greater lattice vibration, so resistance falls. 5. Gradient = −r (internal resistance); intercept = E (e.m.f.). 6. Total resistance = 8.0 + 1.0 = 9.0 Ω; I = 9.0 ÷ 9.0 = 1.0 A; terminal p.d. = 9.0 − (1.0 × 1.0) = 8.0 V. 7. Brighter light releases more charge carriers in the LDR's semiconductor material, and more carriers means a lower resistance, by the same conduction-electron logic used for an NTC thermistor.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--08-potential-divider-load.webp" width="900" height="1170" alt="Left: 12 V across 4.7 kohm and 3.3 kohm gives 4.95 V across the 3.3 kohm resistor. Right: a 3.3 kohm load in parallel makes 1.65 kohm, so the output falls to 3.12 V. Below: a potentiometer slider 35.0 cm along a 100.0 cm track on a 6.0 V supply gives 2.1 V." loading="lazy">
  <figcaption>A loaded divider lowers the output; a slider on a track gives a variable output.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--09-sensing-dividers.webp" width="900" height="1210" alt="With an NTC thermistor and a 2.2 kohm resistor on 9.0 V, the output across the fixed resistor rises from 4.95 V at 20 C to 7.07 V at 60 C while the output across the thermistor falls from 4.05 V to 1.93 V. With an LDR in series with 10 kohm on 6.0 V, the 10 kohm resistor has 5.45 V in bright light and 0.29 V in the dark." loading="lazy">
  <figcaption>Which component the output is across decides whether it rises or falls.</figcaption>
</figure>

## Frequently asked questions

**What is Core Practical 7 in Edexcel IAL Physics?**
Core Practical 7 determines the electrical resistivity of a material. Measure length and diameter, with a micrometer for the diameter, and plot R against l/A; the gradient gives the resistivity.

**What are Kirchhoff's laws?**
Kirchhoff's first law says current into a junction equals current out, from conservation of charge. The second law says the sum of e.m.f.s equals the sum of p.d.s around any loop, from conservation of energy.

**Why does an NTC thermistor's resistance fall as it warms?**
Heating releases more charge carriers in the semiconductor, and this outweighs the increase in lattice vibration, so resistance falls. A filament lamp does the opposite, because only the lattice vibration increases.

**How do you predict the output of a sensor potential divider?**
Use V_out = V_in × R₂/(R₁ + R₂) and ask what happens to the sensor's share of the total resistance. If the sensor's resistance falls, its share of the supply p.d. falls too.
