---
title: "OCR A Level Physics A: Resistance, resistivity and electrical power (H556)"
seoTitle: "OCR A Level Physics Resistance and Power Study Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Resistance, resistivity and electrical power"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 49
syllabusTopics:
  - qualification: "a-level"
    topic: "electrons-waves-and-photons"
    subtopic: "energy-power-and-resistance"
description: "Study guide to resistance, I-V characteristics, resistivity, NTC thermistors, electrical power and the kilowatt-hour for OCR A Level Physics A (H556)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
This guide covers sections 4.2.3 (Resistance), 4.2.4 (Resistivity) and 4.2.5 (Power) of the OCR Advanced GCE in Physics A specification (H556), Version 3.0 (March 2026), for first assessment in 2017. H556 is the full A level. Charge, current, drift velocity, p.d. and e.m.f. (4.2.1 and 4.2.2) are taught on separate pages. Find the course on the [OCR A Level Physics hub](/boards/ocr/a-level/physics/) and tick off outcomes on the [printable checklist](/checklists/ocr/a-level/physics/). Test yourself with the [revision notes](/resources/ocr-a-level-physics-resistance-resistivity-and-electrical-power-revision-notes/), the [practice questions](/resources/ocr-a-level-physics-resistance-resistivity-and-electrical-power-practice/) and the [free diagnostics](/diagnostics/).

## What this unit covers

| Section | What you must be able to do |
|---|---|
| 4.2.3(a) | Define resistance, R = V/I, and the ohm; recall the equation |
| 4.2.3(b) | State Ohm's law |
| 4.2.3(c)(i) | Describe I-V characteristics of a resistor, filament lamp, thermistor, diode and LED |
| 4.2.3(c)(ii) | Describe techniques for investigating ohmic and non-ohmic components (PAG3) |
| 4.2.3(d) | Describe how the resistance of an LDR varies with light intensity |
| 4.2.4(a) | Use resistivity, R = ρL/A, and describe how to determine the resistivity of a metal (PAG3) |
| 4.2.4(b) | Describe how the resistivity of metals and semiconductors varies with temperature |
| 4.2.4(c) | Describe the NTC thermistor and how its resistance varies with temperature |
| 4.2.5(a) | Use P = VI, P = I²R and P = V²/R |
| 4.2.5(b) | Use W = VIt |
| 4.2.5(c) | Use the kilowatt-hour; calculate the cost of energy (link to 3.3.3(c)) |

## 4.2.3(a) Resistance

The **resistance** of a component is the ratio of the p.d. across it to the current through it:

R = V / I

The unit is the **ohm (Ω)**: one ohm is one volt per ampere. You are expected to recall this equation. Resistance at a point on an I-V graph is always V divided by I at that point. It is not the gradient of the graph unless the line is straight and passes through the origin.

**Worked example 1.** A p.d. of 6.0 V gives a current of 0.25 A through a resistor.
R = V / I = 6.0 / 0.25 = **24 Ω**.

## 4.2.3(b) Ohm's law

**Ohm's law:** the current through a conductor is directly proportional to the p.d. across it, provided the temperature (and other physical conditions) stay constant.

A conductor that obeys this is **ohmic**. Its I-V graph is a straight line through the origin, so its resistance is the same at every p.d. Many components do not obey the law.

## 4.2.3(c)(i) I-V characteristics

Plot current on the vertical axis and p.d. on the horizontal axis. Read resistance at each point as V/I.

| Component | Shape of I-V graph | What happens to resistance |
|---|---|---|
| Fixed resistor (constant temperature) | Straight line through origin, same in both directions | Constant |
| Filament lamp | Curve through origin that flattens as |V| increases; symmetrical about the origin | Increases as the filament heats up |
| NTC thermistor | Curve that steepens as p.d. increases | Decreases as it heats up |
| Semiconductor diode | Almost zero current in reverse; almost zero in forward until about 0.6 V to 0.7 V, then current rises very steeply | Very large in reverse and below the threshold; small above it |
| LED | Like a diode but with a higher forward threshold (the value depends on colour, roughly 1.5 V to 3 V); light is emitted when it conducts | Same pattern as the diode |

**Why the lamp curves.** The current heats the filament. The metal ions vibrate with larger amplitude, so conduction electrons collide with them more often. The electrons' average drift velocity for a given p.d. falls, so the current rises less than proportionally.

**Why the thermistor and diode behave differently.** In a semiconductor, heating (or a forward p.d. above the threshold) increases the number of charge carriers available. That outweighs the extra collisions, so resistance falls.

**Worked example 2 (filament lamp).** A lamp passes 0.20 A at 2.0 V and 0.50 A at 10.0 V.
R at 2.0 V = 2.0 / 0.20 = 10 Ω. R at 10.0 V = 10.0 / 0.50 = 20 Ω.
The p.d. rose by a factor of 5 but the current by only 2.5, so the lamp is non-ohmic.

**Worked example 3 (LED protection).** An LED needs 15 mA and has 2.0 V across it when it conducts. It runs from a 5.0 V supply through a series resistor.
p.d. across the resistor = 5.0 - 2.0 = 3.0 V.
R = 3.0 / 0.015 = **200 Ω**.
Without the resistor the current above threshold could damage the LED.

## 4.2.3(c)(ii) Investigating components (PAG3)

Use a potential divider arrangement so you can vary the p.d. from zero.

1. Connect the component in series with an ammeter. Connect a voltmeter in parallel with the component only.
2. Connect the supply across the full track of a variable resistor. Take the output from the slider and one end of the track.
3. Increase the p.d. from zero in equal steps and record V and I at each. Use digital meters and note their resolution.
4. Reverse the connections (or swap the supply polarity) and repeat to get negative values.
5. Plot I against V. Add an uncertainty estimate from the meter resolution or the scatter of repeat readings.

Safety and accuracy points:
- For a diode or LED, put a protective resistor in series and keep the current below its rated maximum. Otherwise it can be damaged.
- For a thermistor, the temperature of the component must be controlled separately (for example in a water bath); a heating current changes it.
- A spreadsheet is useful to calculate V/I at each point and to plot the graph.

## 4.2.3(d) The light-dependent resistor (LDR)

An LDR is made of semiconductor material. As the light intensity increases, more charge carriers are released, so the resistance decreases. In the dark the resistance is very large. A graph of resistance against light intensity falls steeply and then levels off.

## 4.2.4(a) Resistivity

For a uniform conductor of length L and cross-sectional area A, the resistance is

R = ρL / A

where **ρ (rho) is the resistivity** of the material, in **Ω m**. Resistivity belongs to the material itself, at a stated temperature. Resistance also depends on the shape. Rearranged, ρ = RA / L.

**Worked example 4 (using the equation).** A constantan wire has length 1.50 m and diameter 0.28 mm. Take ρ = 4.9 × 10⁻⁷ Ω m (data supplied).
A = π(d/2)² = π × (0.14 × 10⁻³)² = 6.16 × 10⁻⁸ m².
R = ρL / A = (4.9 × 10⁻⁷ × 1.50) / 6.16 × 10⁻⁸ = **11.9 Ω**.

Doubling the diameter multiplies A by 4, so R falls to a quarter. Doubling the length doubles R.

### Determining the resistivity of a metal wire (PAG3)

1. Use a micrometer (or digital calipers) to read the wire's diameter d at spots spread along it, turning the wire through a right angle at each. Take the mean. The area depends on d², so a percentage uncertainty in d is doubled in A.
2. Fix the wire straight along a metre rule. Use a crocodile clip or contact that you can slide to set the length L between 0.200 m and 1.000 m in equal steps.
3. Measure the resistance for each length, using an ammeter and voltmeter (R = V/I) or a digital ohmmeter.
4. Keep the current small and switch off between readings. A large current heats the wire, which raises its resistivity.
5. Plot R against L. The slope equals ρ/A, so ρ = slope × A. Using a graph also reduces the effect of a fixed contact resistance, which shows as a non-zero intercept.

**Worked example 5.** A graph of R against L for a wire of mean diameter 0.32 mm has gradient 13.7 Ω m⁻¹.
A = π × (0.16 × 10⁻³)² = 8.04 × 10⁻⁸ m².
ρ = gradient × A = 13.7 × 8.04 × 10⁻⁸ = **1.1 × 10⁻⁶ Ω m**.
If d has an uncertainty of ±0.01 mm, the percentage uncertainty in d is 0.01/0.32 × 100 = 3.1%, so the percentage uncertainty in A is 6.3%.

## 4.2.4(b) Resistivity and temperature

**Metals.** Resistivity increases as temperature increases. The number of conduction electrons per unit volume hardly changes. The lattice ions vibrate with larger amplitude, so electrons collide with them more often, which lowers the drift velocity for a given p.d.

**Semiconductors.** Resistivity decreases as temperature increases. Thermal energy frees more charge carriers, so the number density of carriers rises sharply. This outweighs the extra lattice vibration.

## 4.2.4(c) The NTC thermistor

A **negative temperature coefficient (NTC) thermistor** is a semiconductor component whose resistance decreases as its temperature rises. The graph of resistance against temperature is a falling curve, steep at low temperature and flatter at high temperature.

**Worked example 6.** An NTC thermistor has resistance 2.4 kΩ at 25 °C and 0.50 kΩ at 65 °C. At each temperature it is placed across a 6.0 V source.
At 25 °C: I = 6.0 / 2400 = 2.5 mA.
At 65 °C: I = 6.0 / 500 = 12 mA.
The current rises by a factor of 4.8 because the resistance fell to about a fifth.

## 4.2.5 Electrical power and energy

### (a) Power equations

Power is the rate of energy transfer, P = W/t. For an electrical component, P = VI. Substituting V = IR or I = V/R gives

P = VI = I²R = V²/R

Choose the form that uses the quantities you are given. Use I²R when the same current flows through different resistances (for example power wasted in a cable). Use V²/R when the same p.d. is across different resistances.

**Worked example 7.** A kettle is rated 2.2 kW at 230 V.
I = P / V = 2200 / 230 = 9.57 A.
R = V² / P = 230² / 2200 = **24.0 Ω**.

**Worked example 8.** A cable of resistance 0.050 Ω carries 40 A.
P = I²R = 40² × 0.050 = **80 W**, transferred as thermal energy in the cable.

### (b) Energy transferred

Since P = W/t and P = VI,

W = VIt

**Worked example 9.** A 12 V, 36 W lamp runs for 90 s.
I = 36 / 12 = 3.0 A. W = VIt = 12 × 3.0 × 90 = **3240 J** (3.2 kJ).

### (c) The kilowatt-hour and cost

The **kilowatt-hour (kW h)** is the energy delivered when a device of power 1 kW operates for 1 hour. Converting: 1 kW h = 1000 × 3600 = **3.6 × 10⁶ J**.

Cost = number of kW h × price per kW h. Use power in kW and time in hours to get kW h directly.

**Worked example 10.** The 2.2 kW kettle runs for 6.0 minutes (0.10 h). Electricity costs 30 p per kW h.
Energy = 2.2 × 0.10 = 0.22 kW h.
Cost = 0.22 × 30 = **6.6 p**.

**Link to 3.3.3(c) (efficiency).** efficiency = (useful output energy / total input energy) × 100%. If a heater is 85% efficient and its useful output is 3.4 kW h, the input is 3.4 / 0.85 = 4.0 kW h, and you pay for the input.

## Common errors

- Taking the slope of a curved I-V graph as the resistance. Work out V/I at the chosen point.
- Explaining a lamp's curve without mentioning that its temperature rises.
- Putting the voltmeter across the ammeter as well as the component.
- Using the diameter instead of the radius in A = πr², or forgetting that diameters in the question are often in mm (1 mm = 10⁻³ m).
- Saying the resistance of an NTC thermistor "gets less because electrons move faster". The key idea is more charge carriers.

## Official syllabus

This page is aligned to the OCR Advanced GCE in Physics A (H556) specification, Version 3.0 (March 2026), first assessment 2017, published by OCR, sections 4.2.3 to 4.2.5.
