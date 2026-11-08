---
title: "OxfordAQA International GCSE Physics: Resistance, I-V graphs and components (9203) -- Revision Notes"
seoTitle: "OxfordAQA IGCSE Physics Resistance & I-V Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["igcse"]
topic: "Resistance, I-V characteristics and electronic components"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9203"]
syllabusSeries: "For exams May/June 2018 onwards"
order: 87
syllabusTopics:
  - qualification: "igcse"
    topic: "electricity-and-magnetism-oxfordaqa-igcse"
    subtopic: "electrical-circuits-oxfordaqa-igcse"
description: "Revision notes on V = IR, I-V graphs, filament lamps, thermistors, LDRs, diodes and LEDs, with a self-test, for OxfordAQA International GCSE Physics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
These notes recap resistance and components for the OxfordAQA International GCSE Physics (9203) specification, for exams May/June 2018 onwards, section 3.5.1 Electrical circuits, statements h to o. For full explanations and worked examples, read the [study guide](/resources/oxfordaqa-igcse-physics-resistance-i-v-characteristics-and-electronic/). Then test yourself with the [practice questions](/resources/oxfordaqa-igcse-physics-resistance-i-v-characteristics-and-electronic-practice/). Related pages: the [OxfordAQA Physics hub](/boards/oxfordaqa/igcse/physics/), the [printable checklist](/checklists/oxfordaqa/igcse/physics/) and the [free diagnostics](/diagnostics/).

## Key definitions and equation

| Term | Meaning |
|---|---|
| Resistance | How strongly a component opposes the flow of charge. Greater resistance means smaller current for the same p.d. |
| Ohmic conductor | A resistor at constant temperature: current is directly proportional to p.d., so resistance is constant |
| Non-ohmic | Resistance changes with current: filament lamp, diode, thermistor, LDR |

| Quantity | Symbol | Unit |
|---|---|---|
| Potential difference | V | volt (V) |
| Current | I | ampere (A) |
| Resistance | R | ohm (Ω) |

**V = I × R**, so R = V ÷ I and I = V ÷ R.

### Method in steps: any V = IR calculation

1. Write the quantity you want and the two you know.
2. Convert units: mA to A (÷ 1000), kΩ to Ω (× 1000), MΩ to Ω (× 1 000 000).
3. Rearrange, then substitute.
4. Give the answer with a unit and a sensible number of significant figures.

### Small reminder

A heater element has 12 V across it and carries 0.50 A: R = 12 ÷ 0.50 = 24 Ω. If the p.d. were raised to 18 V and the resistance stayed fixed, the current would be 18 ÷ 24 = 0.75 A. Check: 0.75 ÷ 0.50 = 1.5 = 18 ÷ 12, so the current rose in proportion.

## I-V graphs at a glance

In the specification, current is on the vertical axis and p.d. on the horizontal axis.

| Component | Shape of the I-V graph | Resistance |
|---|---|---|
| Resistor kept at a steady temperature | Straight line passing through the origin | Does not change |
| Filament lamp | Curve through the origin that flattens as p.d. rises; symmetrical for negative values | Increases as the filament gets hotter |
| Diode | Flat along the axis for reverse p.d. and small forward p.d., then rises steeply | Low forward, very high reverse; not constant |

A rough sketch in words of the diode graph:

Reverse p.d.: I is about 0. Small forward p.d.: I is about 0. Then a steep rise.

- On a straight-line graph, steeper means smaller resistance.
- On a curve, find resistance at a point from V ÷ I at that point. Not from the gradient.
- A graph that goes through the origin is not enough to prove ohmic behaviour. It must also be a straight line.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-resistance-i-v-characteristics-and-electronic--09-ohmic-test-data-plot.webp" width="900" height="890" alt="The five readings from worked example 3 lie on a straight line through the origin. V divided by I is 66.7, 69.0, 68.2, 67.8 and 67.6 ohms, so about 68 ohms every time." loading="lazy">
  <figcaption>A constant V divided by I shows an ohmic resistor.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-physics-0625-electricity-and-magnetism--04-iv-graphs.webp" width="900" height="1192" alt="Three I-V graphs: a fixed resistor gives a straight line through the origin; a filament lamp gives a curve that gets less steep because resistance rises; a diode carries no current in reverse and rises steeply forward after about 0.6 V." loading="lazy">
  <figcaption>The shape of each I-V graph tells you how the resistance behaves.</figcaption>
</figure>


## Filament lamp: the ion and electron explanation

1. The current heats the metal filament.
2. Positive ions in the lattice vibrate with larger amplitude.
3. Free electrons collide with the ions more often.
4. The flow of charge is hindered more, so the resistance rises.
5. For each extra volt, the current rises by less.

Write "ions vibrate more" and "more frequent collisions with electrons". Do not write "the electrons vibrate more" or "the filament has more resistance because it is hot" without saying why.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-resistance-i-v-characteristics-and-electronic--08-lamp-ions.webp" width="900" height="940" alt="Two panels compare a cool filament (1 V, R = 5.6 ohms) and a hot filament (6 V, R = 12.0 ohms). In the hot filament the ions vibrate with larger amplitude, so the electron collides more often. Collision counts are schematic." loading="lazy">
  <figcaption>A hotter filament has more vibrating ions in the electron path, so more collisions and higher resistance.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-resistance-i-v-characteristics-and-electronic--09-lamp-data.webp" width="900" height="950" alt="Current against p.d. for the filament lamp data from 1 V to 6 V, a curve that bends over. Dashed lines from the origin to the 2 V and 6 V points show V divided by I = 7.1 and 12.0 ohms; the flatter line means higher resistance." loading="lazy">
  <figcaption>On a curved I-V graph, resistance at a point is V divided by I, so the lamp has 7.1 ohms at 2 V and 12.0 ohms at 6 V.</figcaption>
</figure>


## Thermistor, LDR and applications

| Component | Resistance changes with | Direction | Typical application |
|---|---|---|---|
| Thermistor | Temperature | Decreases as temperature increases | Thermostat, fire alarm, temperature sensor |
| LDR | Light intensity | Decreases as light intensity increases | Switching lights on when it gets dark |

### How to describe an application

1. Name the component and the quantity that changes (temperature or light intensity).
2. State how its resistance changes.
3. State the effect on current or p.d. in the circuit.
4. State what the circuit then does: switch a heater or lamp on or off.

Example for a thermostat: when the room cools, the thermistor's resistance increases, which changes the current or p.d. in the control circuit, and the heater is switched on. When the room warms up, the resistance falls and the heater is switched off.

### Small reminder: LDR currents

An LDR on a 6.0 V supply has a resistance of 400 kΩ in the dark and 800 Ω in daylight. Dark: 6.0 ÷ 400 000 = 0.000 015 A = 15 µA. Daylight: 6.0 ÷ 800 = 0.0075 A = 7.5 mA. The current is 500 times larger in daylight (400 000 ÷ 800 = 500).

### Small reminder: thermistor currents

A thermistor on a 9.0 V supply has a resistance of 3000 Ω at 15 °C and 450 Ω at 55 °C. At 15 °C: 9.0 ÷ 3000 = 0.0030 A = 3.0 mA. At 55 °C: 9.0 ÷ 450 = 0.020 A = 20 mA. The current is larger when the thermistor is warmer, which is the change a thermostat circuit uses.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-resistance-i-v-characteristics-and-electronic--10-sensors.webp" width="900" height="1070" alt="Thermistor on 6.0 V: 2500 ohms and 2.4 mA at 20 C, 300 ohms and 20 mA at 60 C. LDR on 9.0 V: 750 kilohms and 12 microamps in the dark, 1.5 kilohms and 6.0 mA in bright light. Bars are to scale within each box." loading="lazy">
  <figcaption>A thermistor passes 8 times more current when warm and an LDR passes almost none in the dark.</figcaption>
</figure>


## Describing a lamp, resistor and diode graph in an answer

Use this order: shape, behaviour near the origin, behaviour at larger p.d., then what it means for resistance.

- Resistor: straight line, through the origin, constant gradient, so constant resistance.
- Lamp: curve through the origin, steep at first then flatter, so resistance increases with p.d. and temperature.
- Diode: almost no current in reverse and for small forward p.d., then a steep rise, so very high reverse resistance and low forward resistance.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-resistance-i-v-characteristics-and-electronic--11-diode-resistance.webp" width="900" height="1050" alt="Log-scale bars of diode resistance: 5 kilohms at 0.50 V, 58 ohms at 0.70 V, 13 ohms at 0.80 V forward, and 5.0 megohms at 5.0 V reverse." loading="lazy">
  <figcaption>Diode resistance falls from kilohms to about ten ohms forward but is millions of ohms in reverse.</figcaption>
</figure>


## Diode and LED

- A diode conducts in one direction only.
- Forward resistance is low; reverse resistance is very high.
- An LED is a diode that emits light when current flows in the forward direction.
- LEDs are increasingly used for lighting because they use a much smaller current than other forms of lighting.

### Small reminder: diode resistance

A diode has 0.75 V across it, forward, and carries 25 mA. R = 0.75 ÷ 0.025 = 30 Ω. In reverse, 4.0 V gives 0.50 µA, so R = 4.0 ÷ 0.00000050 = 8 000 000 Ω = 8.0 MΩ. The reverse resistance is about 270 000 times larger.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-resistance-i-v-characteristics-and-electronic--08-vir-worked-examples-graph.webp" width="900" height="840" alt="Three straight I-V lines through the origin for 15, 120 and 450 ohm resistors, with the lesson points 6.0 V and 0.40 A, 4.2 V and 35 mA, and 9.0 V and 20 mA marked. The smaller the resistance, the steeper the line." loading="lazy">
  <figcaption>A smaller resistance gives a steeper I-V line.</figcaption>
</figure>


## Required practical: V-I characteristics

Aim: investigate the V-I characteristics of a filament lamp, a diode and a resistor at constant temperature.

- Circuit: variable supply, component and ammeter in series; voltmeter in parallel across the component only.
- Method: increase p.d. in equal steps from zero; record V and I each time; reverse the connections and repeat.
- Diode: include a protective resistor in series.
- Constant temperature: use small currents and let the resistor cool between readings.
- Graph: I vertical, V horizontal, smooth curve or line through the points.
- Conclusion: use V ÷ I to comment on how resistance changes.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-resistance-i-v-characteristics-and-electronic--12-vi-circuit.webp" width="900" height="1050" alt="A loop of battery, variable resistor, ammeter and the component under test, with conventional current from the positive terminal. The voltmeter is connected in parallel across the component only. Resistor, filament lamp and diode (with a protective resistor) can be swapped in." loading="lazy">
  <figcaption>The ammeter goes in series with the component and the voltmeter in parallel across it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-physics-0625-electricity-and-magnetism--02-circuit-symbols.webp" width="900" height="986" alt="Fourteen standard circuit symbols with names: cell, battery, open switch, fixed resistor, variable resistor, lamp, ammeter, voltmeter, fuse, thermistor, LDR, motor, and (Extended) diode and LED." loading="lazy">
  <figcaption>The standard symbols to draw and recognise; diode and LED are Extended only.</figcaption>
</figure>


## Must-know distinctions

- Thermistor: temperature. LDR: light. Both have resistance that falls as the stimulus increases.
- Ohmic resistor: constant resistance. Filament lamp: resistance rises with temperature. Diode: resistance very high in reverse.
- Forward resistance: low. Reverse resistance: very high.
- Ions vibrate; electrons collide with the ions.
- Resistance at a point: V ÷ I. Not the gradient of a curve.

## Quick self-test

1. A component has 3.0 V across it and 0.020 A through it. What is its resistance?
2. A lamp has a resistance of 24 Ω when 0.50 A flows. What is the p.d. across it?
3. A 250 Ω resistor carries 80 mA. Calculate the p.d. across it.
4. A 2200 Ω resistor has 10 V across it. What is the current in mA, to 2 significant figures?
5. Describe the I-V graph of a resistor at constant temperature.
6. Why does the resistance of a filament lamp increase as the current increases?
7. What happens to the resistance of a thermistor when the temperature rises?
8. What happens to the resistance of an LDR when the light gets brighter?
9. State two facts about the resistance of a diode.
10. Give one reason why LEDs are replacing other forms of lighting.

### Answers

1. R = 3.0 ÷ 0.020 = **150 Ω**.
2. V = 24 × 0.50 = **12 V**.
3. 80 mA = 0.080 A. V = 250 × 0.080 = **20 V**.
4. I = 10 ÷ 2200 = 0.004 545 A = **4.5 mA**.
5. A straight line passing through the origin. Current is directly proportional to p.d.
6. The filament gets hotter, the ions vibrate more, and electrons collide with them more often.
7. It decreases.
8. It decreases.
9. Low resistance in the forward direction; very high resistance in the reverse direction (current flows in one direction only).
10. They use a much smaller current than other forms of lighting.

## Where marks are usually lost

- Substituting milliamps or kilohms directly into V = IR without converting them.
- Writing the answer without a unit, or with the wrong one.
- Stating that the lamp's resistance increases "because the current is higher" with no mention of temperature, ions and electrons.
- Saying the electrons, not the ions, vibrate more.
- Giving the thermistor's response to light, or the LDR's response to temperature.
- Drawing an I-V graph for a lamp or diode as a straight line.
- Using a graph's gradient as the resistance for a curve.
- Describing the practical with the voltmeter in series, or leaving out the reversed readings.
- Forgetting that the diode conducts in the forward direction only.

## Frequently asked questions

**What is an ohmic resistor?**
An ohmic resistor has a current directly proportional to the potential difference across it at constant temperature, so its I-V graph is a straight line through the origin and its resistance is constant.

**How does the resistance of a thermistor change with temperature?**
A thermistor's resistance falls as its temperature rises. This makes it useful as a temperature sensor, for example in a thermostat.

**What is the difference between a thermistor and an LDR?**
A thermistor's resistance depends on temperature, while an LDR's resistance depends on light intensity. For both, the resistance falls as the temperature or light level rises.

**What does a steeper I-V graph mean?**
With current on the vertical axis, a steeper line means a lower resistance, because more current flows for each volt. The gradient of an ohmic resistor's graph is 1 ÷ R.

## Official syllabus

This page follows the OxfordAQA International GCSE Physics (9203) specification, for exams May/June 2018 onwards, Version 5.2, published by OxfordAQA, section 3.5.1 Electrical circuits, statements h to o.
