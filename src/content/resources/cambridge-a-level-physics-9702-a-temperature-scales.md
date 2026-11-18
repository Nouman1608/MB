---
title: "Cambridge A Level Physics (9702): Temperature scales"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Temperature"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-temperature"
    subtopic: "a-temperature-scales"
description: "A focused guide to 14.2 Temperature scales in Cambridge A Level Physics 9702: thermometric properties, why scales disagree, thermodynamic scale, absolute zero."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **14.2 Temperature scales** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Temperature study guide](/resources/a-physics-temperature/) introduces all of Topic 14 and compares types of thermometer; this page goes further into the scale outcomes alone: what makes a physical property usable for measuring temperature, why two thermometers calibrated at the same fixed points can disagree, what it means for the thermodynamic scale to be independent of any substance, how absolute zero can be found from gas data, and when a temperature must be in kelvin. For quick recall use the [Temperature scales revision notes](/resources/cambridge-a-level-physics-9702-a-temperature-scales-revision-notes/), and for exam-style questions the [Temperature scales practice questions](/resources/cambridge-a-level-physics-9702-a-temperature-scales-practice/).

## What 14.2 asks you to do

The syllabus lists four outcomes. Candidates should be able to:

- understand that a **physical property that varies with temperature** may be used to measure temperature, and state examples, including the **density of a liquid**, the **volume of a gas at constant pressure**, the **resistance of a metal** and the **e.m.f. of a thermocouple**
- understand that the **thermodynamic temperature scale does not depend on the property of any particular substance**
- convert between kelvin and degrees Celsius using **T/K = θ/°C + 273.15**
- understand that the lowest possible temperature is **zero kelvin**, known as **absolute zero**

## What makes a property usable

A **thermometric property** is any measurable property that changes with temperature. To be useful over a given range it must:

- **change measurably** for small changes in temperature (sensitivity)
- have **one value for each temperature** in the range, so that each reading corresponds to a single temperature
- be **reproducible**: return to the same value whenever the same temperature is reached

The second condition is easy to overlook. Water is densest at about 4 °C, so its density is the same at some temperature just below 4 °C and another just above. A thermometer based on the density of water would give the same reading for two different temperatures between 0 °C and about 8 °C, which is why liquid-density thermometers use other liquids.

## The four syllabus properties

| Property | As temperature rises | What is measured | Notes |
|---|---|---|---|
| Density of a liquid | Usually decreases (the liquid expands) | Length of a liquid column in a fine tube, or the density directly | Range limited by freezing and boiling of the liquid |
| Volume of a gas at constant pressure | Increases; proportional to thermodynamic temperature for an ideal gas | Volume of a fixed mass of gas, with pressure held constant | The behaviour of real gases at low pressure is very close to this |
| Resistance of a metal | Increases | Resistance of a wire, from a measured current and p.d. | Platinum is commonly used because it is stable |
| E.m.f. of a thermocouple | Depends on the temperature difference between two junctions of different metals | The e.m.f. across the free ends, with one junction at a known reference temperature | Small junction, so it reaches equilibrium quickly |

A question that asks you to "state examples" will accept any of the four named in the syllabus; naming the property, not just the device, is safest ("resistance of a metal", not "a resistance thermometer").

## Empirical scales and calibration

Each property gives an **empirical** scale: one built from the behaviour of a particular substance. To make a Celsius-type scale, the property is measured at two **fixed points** (for example, the melting point of pure ice and the boiling point of pure water at standard pressure), and the scale is divided linearly between them:

```
θ = (X_θ – X₀) / (X₁₀₀ – X₀) × 100 °C
```

where X is the value of the thermometric property. This formula **assumes** that the property changes linearly with temperature between the fixed points. That assumption is where scales part company.

## Worked example 1: two thermometers that disagree

*The data below are invented for illustration.* A thermocouple and a metal resistance thermometer are both calibrated at 0 °C and 100 °C, then placed in the same liquid.

| | At 0 °C | At 100 °C | In the liquid |
|---|---|---|---|
| Thermocouple e.m.f. / mV | 0.00 | 4.10 | 2.20 |
| Resistance / Ω | 100.0 | 138.5 | 120.0 |

```
thermocouple:  θ = (2.20 – 0.00) / (4.10 – 0.00) × 100 = 53.7 °C
resistance:    θ = (120.0 – 100.0) / (138.5 – 100.0) × 100 = 51.9 °C
```

*Annotation.* Both thermometers are correct at the fixed points by definition, and both are in thermal equilibrium with the same liquid, yet they give different temperatures. Neither is wrong: the two properties simply do not vary with temperature in the same way between 0 °C and 100 °C, so linear scales based on them do not match. This is the reason a scale that does not depend on any particular substance is needed.

## The thermodynamic scale

The **thermodynamic (kelvin) scale** is defined in a way that does **not depend on the property of any particular substance**. Its zero is absolute zero, and the size of its unit, the kelvin, is fixed so that a change of 1 K equals a change of 1 °C.

In practice, real thermometers are calibrated against it. A gas thermometer comes closest to it directly, because for an ideal gas the volume at constant pressure is proportional to thermodynamic temperature (Topic 15), and real gases at low pressure behave very nearly ideally. That is a property of the ideal-gas model, not of any one gas, which is why different gases at low pressure agree with each other.

Kelvin temperatures are written "300 K", not "300 °K"; the symbol is T for thermodynamic temperature and θ for Celsius temperature.

## Absolute zero

**Absolute zero**, 0 K or –273.15 °C, is the **lowest possible temperature**. There are no negative kelvin temperatures. In terms of the ideal-gas model, it is the temperature at which the volume of a gas at constant pressure (or the pressure at constant volume) would extrapolate to zero.

## Worked example 2: finding absolute zero from gas data

*Invented data.* A fixed mass of gas at constant pressure has volume 250 cm³ at 20.0 °C and 318 cm³ at 100.0 °C. Assuming volume varies linearly with temperature, estimate absolute zero in °C.

```
gradient = (318 – 250) / (100.0 – 20.0) = 0.85 cm³ per °C
temperature at which V = 0:  20.0 – 250 / 0.85 = 20.0 – 294 = –274 °C
```

*Annotation.* The answer is close to –273 °C. The extrapolation goes far beyond the measured range, and any real gas would liquefy long before reaching it, so the result is an estimate. It still shows why absolute zero sits at about –273 °C: it is where the straight line of V against θ meets the temperature axis.

## Converting, and when to convert

```
T / K = θ / °C + 273.15        θ / °C = T / K – 273.15
```

- **Temperature differences** are the same on both scales: a rise of 25 °C is a rise of 25 K. Q = mcΔθ can use either.
- **Ratios and proportionalities** need kelvin. The gas equations (pV = nRT), the mean kinetic energy (3/2 kT) and any statement such as "doubling the temperature" refer to thermodynamic temperature.

## Worked example 3: what "doubling" means

A gas is warmed from 20 °C to 40 °C. A student says the temperature has doubled. Calculate the actual ratio of thermodynamic temperatures.

```
T₁ = 20 + 273.15 = 293.15 K
T₂ = 40 + 273.15 = 313.15 K
T₂ / T₁ = 1.07
```

*Annotation.* The thermodynamic temperature has risen by about 7%. To double it from 293 K, the gas would need to reach 586 K, which is 313 °C. Ratios of Celsius temperatures have no physical meaning because the zero of the Celsius scale is not a zero of anything physical.

## Common mistakes

- **Naming a device instead of a property** when asked for thermometric properties.
- **Assuming all thermometers agree everywhere** once calibrated at the fixed points.
- **Writing °K**, or forgetting that absolute zero is –273.15 °C, not –273.15 K.
- **Converting a temperature change** by adding 273.15 to it.
- **Using Celsius temperatures in ratios** or in gas equations.
- **Saying the thermodynamic scale "is based on" a gas.** It is independent of any substance; an ideal gas is a model that matches it.

## Exam technique for the command words

- **State** (examples of thermometric properties): give two or three of the four syllabus properties, worded as properties.
- **Explain** (why two thermometers disagree): both are calibrated at the same fixed points, but their properties do not vary in the same way with temperature between them.
- **State** or **explain** (what is meant by the thermodynamic scale being absolute): it does not depend on the property of any substance, and its zero is the lowest possible temperature.
- **Calculate** or **convert**: use 273.15 unless the question's data suggest 273; keep temperature changes unconverted.
- **Determine** (absolute zero from data): plot or calculate the straight-line relationship and extrapolate to zero volume or pressure.

## Related resources

- [Temperature study guide](/resources/a-physics-temperature/) — the whole of Topic 14
- [Temperature scales revision notes](/resources/cambridge-a-level-physics-9702-a-temperature-scales-revision-notes/)
- [Temperature scales practice questions](/resources/cambridge-a-level-physics-9702-a-temperature-scales-practice/)
- [Thermal equilibrium](/resources/cambridge-a-level-physics-9702-a-thermal-equilibrium/) — why a thermometer reads the temperature of what it touches
- [Equation of state](/resources/cambridge-a-level-physics-9702-a-equation-of-state/) — where kelvin temperatures are essential

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
