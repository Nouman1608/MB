---
title: "OCR A Level Physics A: Resistance, resistivity and electrical power (H556) -- Revision Notes"
seoTitle: "OCR A Level Physics Resistance and Power Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on resistance, Ohm's law, I-V graphs, resistivity, NTC thermistors, power and kW h for OCR A Level Physics A (H556)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
Quick recall for OCR A Level Physics A (H556), Version 3.0 (March 2026), sections 4.2.3 (Resistance), 4.2.4 (Resistivity) and 4.2.5 (Power). For full explanations and longer worked examples, read the [study guide](/resources/ocr-a-level-physics-resistance-resistivity-and-electrical-power/). Then try the [practice questions](/resources/ocr-a-level-physics-resistance-resistivity-and-electrical-power-practice/), the [free diagnostics](/diagnostics/), the [OCR A Level Physics hub](/boards/ocr/a-level/physics/) and the [printable checklist](/checklists/ocr/a-level/physics/).

## Definitions and laws

| Term | Statement |
|---|---|
| Resistance (4.2.3(a)) | R = V/I at a given p.d.; unit ohm (Ω), one volt per ampere |
| Ohm's law (4.2.3(b)) | Current is directly proportional to p.d. at constant temperature (and other physical conditions) |
| Ohmic conductor | Obeys Ohm's law: straight I-V line through the origin |
| Resistivity (4.2.4(a)) | Material property in R = ρL/A; unit Ω m |
| NTC thermistor (4.2.4(c)) | Semiconductor whose resistance falls as temperature rises |
| Kilowatt-hour (4.2.5(c)) | Energy used by a 1 kW appliance in 1 h; 1 kW h = 3.6 × 10⁶ J |

## Equations to recall and use

| Quantity | Equation | Notes |
|---|---|---|
| Resistance | R = V/I | Use V and I at the same point |
| Resistivity | R = ρL/A, so ρ = RA/L | A = πd²/4 for a round wire |
| Power | P = VI = I²R = V²/R | Pick the form that matches the data |
| Energy | W = VIt = Pt | t in seconds for joules |
| Energy in kW h | E = P (kW) × t (h) | Cost = kW h × price per kW h |
| Efficiency (3.3.3(c)) | useful output energy / total input energy × 100% | You pay for the input |

## I-V characteristics: recall grid

| Component | Graph | Reason |
|---|---|---|
| Resistor at constant temperature | Line through origin, straight | R constant |
| Filament lamp | Flattening curve, symmetrical about origin | Filament heats, ions vibrate more, more collisions, R rises |
| NTC thermistor | Steepening curve | Heating releases more charge carriers, R falls |
| Diode | Negligible current in reverse and below about 0.6 V to 0.7 V forward; then steep rise | One-way conduction above a threshold p.d. |
| LED | Same shape as a diode with higher threshold; emits light | Threshold depends on the LED |
| LDR | R falls as light intensity rises | Light releases more charge carriers |

Reminder: resistance at a point on a curve is V/I, not the slope.

## Method in steps: investigating a component (PAG3)

1. Set up the component in series with an ammeter and a variable resistor wired as a potential divider, so the p.d. starts at zero.
2. Voltmeter in parallel with the component only.
3. Increase V in equal steps; record V and I. Add a series protective resistor for a diode or LED.
4. Reverse the polarity for negative values on a diode, lamp or resistor.
5. Plot I against V; calculate V/I in a spreadsheet to show how R varies.
6. For a thermistor, control the temperature separately, with a thermometer in a water bath.

## Method in steps: resistivity of a metal wire (PAG3)

1. Read the diameter with a micrometer at spots along the wire, rotating it by 90° each time; take the mean and find A = πd²/4.
2. Measure R for a range of lengths L (equal steps), using small currents so the wire does not heat.
3. Plot R against L. Slope = ρ/A, so ρ = slope × A.
4. Percentage uncertainty in A is twice that in d.

## Temperature effects

| Material | Resistivity as temperature rises | Explanation |
|---|---|---|
| Metal | Increases | Ions vibrate more, more collisions; number density of conduction electrons barely changes |
| Semiconductor | Decreases | Many more charge carriers released, outweighing extra collisions |

## Worked reminders

**Resistance from a point on a graph.** A diode has 0.30 A at 0.80 V. R = 0.80/0.30 = 2.7 Ω. That is its resistance at that point only.

**Resistivity.** Copper cable of length 25 m and cross-sectional area 1.0 mm² (1.0 × 10⁻⁶ m²), with ρ = 1.7 × 10⁻⁸ Ω m (data supplied): R = 1.7 × 10⁻⁸ × 25 / 1.0 × 10⁻⁶ = 0.425 Ω.

**Scaling.** If L doubles and d halves, A falls to a quarter, so R rises by 2 × 4 = 8 times.

**Power.** A 100 W lamp at 230 V: I = 100/230 = 0.435 A; R = 230²/100 = 529 Ω.

**Cost.** A 3.0 kW heater runs for 2.0 h at 20 p per kW h: energy = 6.0 kW h; cost = 120 p = £1.20.

**Conversion.** 0.50 kW h = 0.50 × 3.6 × 10⁶ = 1.8 × 10⁶ J.

## Reading graphs and data

- A straight line through the origin on an I-V graph means ohmic. Check that the line passes through (0, 0).
- A graph of R against L for a uniform wire is a straight line. Its slope is ρ/A and a positive intercept suggests contact or lead resistance.
- For a lamp, compare V/I at two p.d. values and state that R rose. Then link the rise to temperature.
- For an NTC thermistor, work out the ratio of resistances. If R falls to one fifth, the current at fixed p.d. is five times larger.
- For a diode or LED, quote the approximate p.d. at which the current starts to rise steeply, and state that the current is negligible below it and in reverse.

## Power and cost: setting out the working

1. Write the known quantities with units (convert mm to m, minutes to hours or seconds, W to kW).
2. Choose the equation: P = VI if you have V and I, P = I²R if you have I and R, P = V²/R if you have V and R.
3. For energy in joules use W = VIt = Pt with t in seconds. For cost use kW h = P (kW) × t (h).
4. State the answer with its unit and a sensible number of significant figures.

**Extra reminder.** A 12 V supply drives 3.0 A through a lamp for 90 s. W = 12 × 3.0 × 90 = 3240 J, which is 3.2 kJ to 2 s.f. In kW h this is 3240 / (3.6 × 10⁶) = 9.0 × 10⁻⁴ kW h.

## Must-know distinctions

- Resistance depends on shape and material. Resistivity depends only on the material (and temperature).
- Ohm's law is a statement of proportionality. A component can have a resistance and still be non-ohmic.
- Metals and semiconductors both have more lattice collisions at higher temperature. In a semiconductor the large rise in carrier number wins; in a metal the carrier number barely changes, so collisions win.
- A kilowatt-hour is a unit of energy, not power.

## Quick self-test

1. A p.d. of 12 V drives a current of 40 mA through a resistor. Calculate its resistance.
2. State Ohm's law.
3. Explain why a filament lamp's I-V graph is not a straight line.
4. A round wire has ρ = 5.5 × 10⁻⁷ Ω m, length 1.0 m and diameter 1.0 mm. Find its resistance.
5. Why is it better to find ρ from the gradient of an R-L graph than from one reading?
6. Compare how the resistivity of a metal and a semiconductor change as temperature increases.
7. A 2.5 A current flows through an 8.0 Ω resistor. Calculate the power.
8. A 60 W heating element has resistance 15 Ω. Calculate the p.d. across it.
9. Convert 0.50 kW h into joules.
10. A 3.0 kW heater runs for 2.0 hours at 20 p per kW h. Calculate the cost.

### Answers

1. R = 12 / 0.040 = **300 Ω**.
2. The current through a conductor is directly proportional to the p.d. across it, provided the temperature (and other physical conditions) stay constant.
3. The current heats the filament; the metal ions vibrate more, collide more often with electrons, so resistance rises as p.d. increases and the graph flattens.
4. A = π(0.5 × 10⁻³)² = 7.85 × 10⁻⁷ m². R = ρL/A = 5.5 × 10⁻⁷ × 1.0 / 7.85 × 10⁻⁷ = **0.70 Ω**.
5. The line averages out random error across several readings and a non-zero intercept (for example contact resistance) does not affect the gradient.
6. The resistivity of a metal increases because of more lattice collisions. The resistivity of a semiconductor decreases because many more charge carriers are released.
7. P = I²R = 2.5² × 8.0 = **50 W**.
8. V = √(PR) = √(60 × 15) = **30 V**.
9. 0.50 × 3.6 × 10⁶ = **1.8 × 10⁶ J**.
10. Energy = 6.0 kW h; cost = 6.0 × 20 = **120 p (£1.20)**.

## Where marks are usually lost

- Writing "resistance is constant" as Ohm's law and leaving out the temperature condition.
- Taking the slope of a curve as resistance instead of V/I.
- Using diameter as radius: this gives an area four times too big.
- Forgetting to convert mm to m, or mm² to m² (1 mm² = 10⁻⁶ m²).
- Explaining a thermistor with "electrons move faster" instead of "more charge carriers".
- Using kW with seconds, or W with hours, so the energy unit is wrong.
- Writing a value without a unit, or giving more significant figures than the data supports.
- Not stating a reason for using small currents when finding resistivity: heating changes resistivity.
- Describing a component investigation without the potential divider, so the p.d. cannot start from zero.

## Official syllabus

This page is aligned to the OCR Advanced GCE in Physics A (H556) specification, Version 3.0 (March 2026), first assessment 2017, published by OCR, sections 4.2.3 to 4.2.5.
