---
title: "OxfordAQA International AS and A-level Physics: DC circuits, potential dividers, emf and internal resistance (9630)"
seoTitle: "OxfordAQA A-level Physics DC Circuits and emf Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "DC circuits, potential dividers, emf and internal resistance"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "AS"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 106
syllabusTopics:
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "circuits-oxfordaqa-alevel"
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "potential-divider-oxfordaqa"
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "electromotive-force-and-internal-resistance-oxfordaqa"
description: "Study guide to series and parallel circuits, potential dividers, emf and internal resistance for OxfordAQA International AS and A-level Physics (9630)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide is aligned to the *OxfordAQA International AS and A-level Physics (9630)* specification, Version 4.4, for International AS and A-level exams May/June 2020 onwards. It covers sections 3.4.4 (circuits), 3.4.5 (potential divider) and 3.4.6 (electromotive force and internal resistance), including Required practical 3. All three sections are shared International AS and A-level content.

Pair it with the [revision notes](/resources/oxfordaqa-a-level-physics-dc-circuits-potential-dividers-emf-and-internal-revision-notes/) and the [practice set](/resources/oxfordaqa-a-level-physics-dc-circuits-potential-dividers-emf-and-internal-practice/). See also the [course page](/boards/oxfordaqa/a-level/physics/), the [checklist](/checklists/oxfordaqa/a-level/physics/) and the [free diagnostics](/diagnostics/). It assumes the basics in sections 3.4.1 to 3.4.3.

## What this unit covers

| Section | What you must be able to do |
|---|---|
| 3.4.4 | Combine resistors in series and parallel; use E = IVt and P = IV = I²R = V²/R; analyse circuits with cells in series and identical cells in parallel; apply conservation of charge and of energy |
| 3.4.5 | Use a potential divider to supply a constant or variable pd; include variable resistors, thermistors and LDRs |
| 3.4.6 | Use emf = E/Q and emf = I(R + r); explain the effect of internal resistance on terminal pd; calculate with non-negligible internal resistance; Required practical 3 |

The specification says ammeters and voltmeters are treated as ideal (zero and infinite resistance) unless a question says otherwise. Using a potentiometer as a measuring instrument is outside the specification.

## 3.4.4 Circuits

### Resistors in series and parallel

Resistors in series carry one common current, and their pds sum to the supply pd.

RT = R₁ + R₂ + R₃ + …

Resistors in parallel have one common pd, and their branch currents sum to the supply current.

1/RT = 1/R₁ + 1/R₂ + 1/R₃ + …

Adding a resistor in parallel always lowers the total resistance, because it gives the current another path. The total is always smaller than the smallest branch.

**Worked example 1.** A 15 Ω and a 10 Ω resistor are in parallel. This pair is in series with a 4.0 Ω resistor across a 20 V supply with negligible internal resistance. Find the current in each resistor and the power in the 4.0 Ω resistor.

1. Parallel pair: 1/R = 1/15 + 1/10 = 1/6, so R = 6.0 Ω.
2. Total: RT = 6.0 + 4.0 = 10 Ω.
3. Supply current: I = V/R = 20/10 = 2.0 A. This passes through the 4.0 Ω resistor.
4. Pd across the pair: V = 2.0 × 6.0 = 12 V.
5. Branch currents: 12/15 = 0.80 A and 12/10 = 1.2 A. They add to 2.0 A.
6. Power in the 4.0 Ω resistor: P = I²R = 2.0² × 4.0 = 16 W.

### Energy and power

Energy transferred: E = IVt. Power: P = IV. Combine with V = IR to get two more forms:

P = I²R (use when the current is common, as in series)
P = V²/R (use when the pd is common, as in parallel)

**Worked example 2.** A heater is connected to a 12 V supply and draws 3.0 A for 5.0 minutes.

1. Time in seconds: 5.0 × 60 = 300 s.
2. E = IVt = 3.0 × 12 × 300 = 1.08 × 10⁴ J.
3. Power: P = IV = 3.0 × 12 = 36 W.
4. Resistance: R = V/I = 12/3.0 = 4.0 Ω.
5. Check: I²R = 3.0² × 4.0 = 36 W and V²/R = 144/4.0 = 36 W.

### Cells in series and in parallel

Cells in series: the emfs add (if they point the same way) and the internal resistances add. Identical cells in parallel: the emf is the same as one cell, and the supply can deliver more current for longer because each cell supplies only a share. With ideal cells, three 1.5 V cells in series give 4.5 V, while three in parallel still give 1.5 V.

### Conservation of charge and energy

Charge is conserved: at any junction, the total current in equals the total current out. Energy is conserved: round any complete loop, the energy per coulomb supplied by the sources equals the energy per coulomb transferred in the components. In terms of pd, the total emf round a loop equals the total pd across the components in that loop.

**Worked example 3.** A 9.0 V supply drives three resistors in series. The pds across the first two are 2.5 V and 4.1 V, and the current is 0.20 A. Find the third resistor's resistance.

1. Third pd: 9.0 − 2.5 − 4.1 = 2.4 V (energy conservation).
2. R = V/I = 2.4/0.20 = 12 Ω.

At a junction, if 3.2 A arrives and 1.9 A leaves in one wire, the other wire carries 3.2 − 1.9 = 1.3 A away (charge conservation).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--05-series-parallel-circuit.webp" width="900" height="1060" alt="An 18 V supply drives a 6.0 ohm resistor in series with 12 ohm and 4.0 ohm resistors in parallel. The pair is 3.0 ohm, total 9.0 ohm, supply current 2.0 A; the branches carry 0.50 A and 1.5 A, with 6.0 V across both. Currents add at the junction and 18 V = 12 V + 6.0 V round the loop." loading="lazy">
  <figcaption>One mixed circuit solved to show both Kirchhoff laws.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--06-two-source-kirchhoff.webp" width="900" height="1100" alt="Two branches (12 V with 3.0 ohm, 8.0 V with 2.0 ohm) share a 2.0 ohm resistor. The junction law and two loop equations give I1 = 2.0 A, I2 = 1.0 A and 3.0 A through the shared resistor, with 6.0 V across it. Power from sources (32 W) equals power in the resistors (12 + 2 + 18 W)." loading="lazy">
  <figcaption>Solving a two-source circuit with Kirchhoff laws and checking energy.</figcaption>
</figure>


## 3.4.5 The potential divider

Two resistors in series across a supply share the supply pd in proportion to their resistances. The output is taken across one of them:

Vout = Vin × R₂ / (R₁ + R₂), where R₂ is the resistor the output is measured across.

The larger the share of the total resistance, the larger the share of the pd.

**Worked example 4.** A 12 V supply (negligible internal resistance) is across a 4.7 kΩ resistor in series with a 3.3 kΩ resistor. Find the pd across the 3.3 kΩ resistor, then find it again when a 3.3 kΩ load is connected across it.

1. Unloaded: Vout = 12 × 3.3/(4.7 + 3.3) = 12 × 3.3/8.0 = 4.95 V.
2. Loaded: the 3.3 kΩ resistor and load in parallel give 1/R = 2/3.3, so R = 1.65 kΩ.
3. Vout = 12 × 1.65/(4.7 + 1.65) = 3.12 V (3 s.f.).

The output falls when a load draws current, and it falls more the smaller the load resistance is compared with R₂. A high-resistance load barely changes the output.

### Constant and variable pd

A fixed pair gives a constant pd. To vary the pd, replace one resistor with a variable resistor, or connect the two ends of a variable resistor across the supply and take the output between one end and the slider. Moving the slider from one end to the other changes the output smoothly from 0 V to the full supply pd (when unloaded). This is different from using a variable resistor as a rheostat in series, which cannot reduce the pd across the load to zero.

### Thermistors and LDRs

An ntc thermistor's resistance falls as temperature rises. An LDR's resistance falls as light intensity rises. Put either in a divider and the output pd changes with the conditions. Which way it changes depends on which resistor the output is across.

**Worked example 5 (temperature sensor).** An ntc thermistor and a 4.0 kΩ resistor are in series across a 5.0 V supply, and the output pd is measured across the thermistor. The thermistor's resistance is 6.0 kΩ at 20 °C and 1.0 kΩ at 60 °C. These values are supplied for this example.

1. At 20 °C: Vout = 5.0 × 6.0/(4.0 + 6.0) = 3.0 V.
2. At 60 °C: Vout = 5.0 × 1.0/(4.0 + 1.0) = 1.0 V.
3. The output falls as the temperature rises, because the thermistor now makes up a smaller part of the total resistance. Swapping the two components would make the output rise with temperature.

**Worked example 6 (light sensor).** A 6.0 V supply is across an LDR in series with a 10 kΩ resistor, with the output across the 10 kΩ resistor. The LDR is 1.0 kΩ in bright light and 200 kΩ in the dark (supplied values).

1. Bright: Vout = 6.0 × 10/(1.0 + 10) = 5.45 V.
2. Dark: Vout = 6.0 × 10/(200 + 10) = 0.286 V.
3. The output is high in bright light and low in the dark.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--04-resistance-temperature.webp" width="900" height="1275" alt="In a metal, heating makes the ions vibrate more so electrons collide more and resistance rises. In an NTC thermistor or an LDR, heat or light frees many more carriers so resistance falls. The graph shows a metal rising gently and an NTC thermistor falling from 2.4 kohm at 25 C to 0.50 kohm at 65 C." loading="lazy">
  <figcaption>Collisions versus carrier number: why metals and NTC thermistors behave oppositely.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--08-potential-divider-load.webp" width="900" height="1170" alt="Left: 12 V across 4.7 kohm and 3.3 kohm gives 4.95 V across the 3.3 kohm resistor. Right: a 3.3 kohm load in parallel makes 1.65 kohm, so the output falls to 3.12 V. Below: a potentiometer slider 35.0 cm along a 100.0 cm track on a 6.0 V supply gives 2.1 V." loading="lazy">
  <figcaption>A loaded divider lowers the output; a slider on a track gives a variable output.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--09-sensing-dividers.webp" width="900" height="1210" alt="With an NTC thermistor and a 2.2 kohm resistor on 9.0 V, the output across the fixed resistor rises from 4.95 V at 20 C to 7.07 V at 60 C while the output across the thermistor falls from 4.05 V to 1.93 V. With an LDR in series with 10 kohm on 6.0 V, the 10 kohm resistor has 5.45 V in bright light and 0.29 V in the dark." loading="lazy">
  <figcaption>Which component the output is across decides whether it rises or falls.</figcaption>
</figure>


## 3.4.6 Electromotive force and internal resistance

### Definitions

The emf ε of a source is the energy it supplies per coulomb of charge it drives round the circuit: ε = E/Q. It is measured in volts. The pd across the cell's terminals (the terminal pd, V) is what the external circuit actually receives. A real cell has internal resistance r, so energy is also dissipated inside it.

Round the whole circuit, with external resistance R:

ε = I(R + r) = IR + Ir

The IR term is the terminal pd V. The Ir term is the "lost volts". So V = ε − Ir.

When no current is drawn (a high-resistance voltmeter alone across the cell), there are no lost volts and the terminal pd equals the emf. As the current rises, the terminal pd falls. With a short circuit (R ≈ 0) the current is largest, ε/r.

**Worked example 7.** A cell of emf 1.80 V and internal resistance 0.60 Ω is connected to a 2.4 Ω resistor. Find the current, terminal pd, lost volts and the share of the power delivered to the resistor.

1. I = ε/(R + r) = 1.80/(2.4 + 0.60) = 0.60 A.
2. Terminal pd: V = IR = 0.60 × 2.4 = 1.44 V.
3. Lost volts: Ir = 0.60 × 0.60 = 0.36 V. Check: 1.44 + 0.36 = 1.80 V.
4. Total power from the cell: εI = 1.08 W. Power in the resistor: VI = 0.864 W. Power wasted inside: I²r = 0.216 W.
5. Fraction delivered: 0.864/1.08 = 0.80, or 80%.

**Worked example 8 (combinations).** Two identical cells (1.8 V, 0.60 Ω each) drive a 2.4 Ω resistor.

- In series: ε = 3.6 V, r = 1.2 Ω, so I = 3.6/(2.4 + 1.2) = 1.0 A.
- In parallel: ε = 1.8 V, r = 0.60/2 = 0.30 Ω, so I = 1.8/(2.4 + 0.30) = 0.667 A in total, so 0.333 A from each cell.

Series gives more current here, while parallel shares the load between the cells, so each one loses less energy internally.

### Required practical 3: emf and internal resistance

The specification names the investigation: measure the terminal pd of a cell or battery as the current varies. A typical arrangement puts the cell, a variable resistor, an ammeter and a switch in series, with a voltmeter across the cell's terminals.

1. Close the switch and adjust the variable resistor to give a current. Record I and V.
2. Repeat for at least six currents, opening the switch between readings so the cell is not drained and does not heat.
3. Plot V (vertical) against I (horizontal).

Rearrange V = ε − Ir to compare with y = mx + c. The gradient is −r and the vertical intercept is ε.

**Worked example 9.** Measured values (illustrative): I = 0.10, 0.20, 0.30, 0.40, 0.50, 0.60 A and V = 1.53, 1.47, 1.41, 1.36, 1.31, 1.25 V. A best-fit line gives a gradient of −0.55 V A⁻¹ and an intercept of 1.58 V.

1. Internal resistance r = −gradient = 0.55 Ω.
2. emf ε = intercept = 1.58 V.

Keep currents modest and readings short, so the cell does not overheat or run down. Use a large triangle on the line for the gradient, and read the intercept from the line, not from a data point.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--03-resistivity-wire.webp" width="900" height="1255" alt="Three wires drawn to scale show that doubling the length doubles R (11.9 to 23.9 ohm) and doubling the diameter quarters it (2.98 ohm). A graph of R against L for a 0.32 mm wire has gradient 13.7 ohm per metre, so resistivity equals gradient times area, 1.1 x 10^-6 ohm metre." loading="lazy">
  <figcaption>How length and diameter change resistance, and how a graph gives resistivity.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--07-internal-resistance.webp" width="900" height="1290" alt="A real cell is an e.m.f. E in series with internal resistance r. With E = 12.0 V, r = 0.50 ohm and R = 5.5 ohm, I = 2.0 A, the terminal p.d. is 11.0 V and 1.0 V is lost across r. A V-I graph of a cell is a straight line with gradient -r and intercept E: data give E = 1.50 V and r = 0.60 ohm, short-circuit current 2.5 A." loading="lazy">
  <figcaption>Where the e.m.f. goes: terminal p.d. plus lost volts, and how a V–I graph gives E and r.</figcaption>
</figure>


## Common errors

- Adding resistances in parallel instead of reciprocals, or forgetting the final inversion of 1/R.
- Using V²/R with a pd that is not the pd across that resistor.
- Treating terminal pd as equal to the emf while a current is flowing.
- Forgetting that the load changes the output of a divider.
- Putting the output across the wrong component, so the output rises when it should fall.
- Using the gradient as r without its sign, or reading ε from the last data point.

## Official syllabus

*OxfordAQA International AS and A-level Physics (9630)*, Version 4.4, for International AS and A-level exams May/June 2020 onwards, published by OxfordAQA. Sections 3.4.4, 3.4.5 and 3.4.6 (Required practical 3).
