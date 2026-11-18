---
title: "AQA A-Level Physics (7408): Discrete semiconductor devices"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Electronics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 13.1
syllabusTopics:
  - qualification: "a-level"
    topic: "electronics-aqa-alevel"
    subtopic: "discrete-semiconductor-devices-aqa-alevel"
description: "AQA A-level Physics 7408 section 3.13.1 in depth: MOSFET switches, zener diode voltage references, photodiode response and Hall effect sensors."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **3.13.1 Discrete semiconductor devices** of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Electronics option assessed in Paper 3 Section B. It has four content statements: 3.13.1.1 the MOSFET (metal-oxide semiconducting field-effect transistor), 3.13.1.2 the zener diode, 3.13.1.3 the photodiode and 3.13.1.4 the Hall effect sensor. The specification also sets limits: N-channel enhancement mode MOSFETs only; use of the zener as a stabiliser is not required; and the operating principles of the Hall effect sensor are not required.

The [Electronics study guide](/resources/aqa-a-level-physics-electronics/) summarises the whole option. Use the [discrete semiconductor devices revision notes](/resources/aqa-a-level-physics-7408-discrete-semiconductor-devices-aqa-alevel-revision-notes/) for recall and the [discrete semiconductor devices practice questions](/resources/aqa-a-level-physics-7408-discrete-semiconductor-devices-aqa-alevel-practice/) to test yourself. Potential dividers and diode characteristics come from [Electricity](/resources/aqa-a-level-physics-electricity/).

## 3.13.1.1 The MOSFET

### Simplified structure and behaviour

An N-channel enhancement-mode MOSFET is built on a block of p-type semiconductor. Two regions of n-type material form the **source** and the **drain**. Between them, on the surface, a very thin layer of **insulating oxide** separates a metal **gate** electrode from the semiconductor.

- With no gate voltage, there is no conducting path between source and drain, so almost no drain current flows.
- Making the gate positive relative to the source attracts electrons to the region under the oxide. Once the gate–source voltage V_GS exceeds the **threshold voltage V_th**, enough electrons gather to form an **n-type channel** linking source and drain, and current flows from drain to source.
- Increasing V_GS above V_th makes the channel more conducting, so the drain current I_D increases ("enhancement").

Because the gate is insulated by the oxide, essentially **no current flows into the gate**. The MOSFET is controlled by a voltage, not a current, and has a **very high input resistance**.

### Quantities to know

| Symbol | Meaning |
|---|---|
| V_GS | Gate–source voltage (the controlling input) |
| V_DS | Drain–source voltage across the device |
| V_th | Threshold value of V_GS at which the channel forms and I_D begins |
| I_DSS | On data sheets, the drain current with gate and source shorted (V_GS = 0): a tiny leakage current for enhancement mode |

**Characteristics.** A graph of I_D against V_GS (at fixed V_DS) shows zero current until V_th, then a steep rise. A family of I_D against V_DS curves, one for each V_GS, shows the current rising and then levelling off; higher V_GS gives higher curves.

### Use as a switch

Put the load (a lamp, relay coil or motor) between the positive supply and the drain, with the source connected to 0 V. Control V_GS with a sensor circuit:

- V_GS well below V_th: the MOSFET is **off**; no current in the load.
- V_GS well above V_th: the MOSFET is fully **on**; V_DS is very small, so almost the full supply voltage is across the load.

**Worked example 1: a light-operated switch.** A 9.0 V supply feeds a potential divider of an LDR (top) and a 10 kΩ resistor (bottom); the gate connects to the junction. V_th = 2.0 V. The LDR is 100 kΩ in the dark and 1.0 kΩ in bright light (illustrative values).

```
dark:   V_GS = 9.0 × 10/(10 + 100) = 0.82 V   → below V_th: off
bright: V_GS = 9.0 × 10/(10 + 1.0) = 8.2 V    → above V_th: on
```

The load switches on in bright light. Swapping the LDR and resistor makes it switch on in the dark.

### Use as a device with very high input resistance

Because the gate draws almost no current, a MOSFET does not load the circuit driving it. A sensor with a high internal resistance (or a potential divider made of large resistors) keeps its output voltage, and the tiny current from a logic output or a microcontroller pin can control a load that takes amperes. When fully on, the channel resistance is small: with an illustrative on-resistance of 0.10 Ω and a 2.0 A load, V_DS = 0.20 V and the MOSFET dissipates only 0.40 W.

## 3.13.1.2 The zener diode

A zener diode has an **anode** and a **cathode** like any diode. Forward biased (anode positive), it conducts above about 0.7 V like an ordinary silicon diode. It is used **reverse biased** (cathode positive).

**Characteristic curve.** In reverse bias, almost no current flows until the **zener breakdown voltage V_Z**. At V_Z the current rises very steeply while the voltage stays almost constant. The curve shows a **typical minimum operating current**: below it, the voltage is not held at V_Z, so the circuit must always pass at least this current through the zener.

**Use with a resistor as a constant voltage source.** A series resistor R connects the supply to the zener's cathode; the output is taken across the zener. The resistor drops the difference between supply and V_Z, and its current divides between the zener and any load.

**Worked example 2.** A 15 V supply, a 6.2 V zener with a minimum operating current of 5.0 mA, and a 2.2 kΩ load.

```
load current = 6.2/2200 = 2.8 mA
resistor current must be at least 2.8 + 5.0 = 7.8 mA
R ≤ (15 − 6.2)/7.8 × 10⁻³ = 1.13 kΩ   → choose 1.0 kΩ
check: I_R = 8.8/1000 = 8.8 mA, zener current = 8.8 − 2.8 = 6.0 mA ✓
zener power = 6.2 × 6.0 × 10⁻³ = 37 mW
```

**Use as a reference voltage.** The steady V_Z is a fixed comparison level: for example, at one input of a comparator, or as the reference for an analogue-to-digital converter, so that a measurement does not drift when the supply voltage changes.

## 3.13.1.3 The photodiode

A photodiode is used **reverse biased**: the **photoconductive mode**. In the dark only a tiny leakage (dark) current flows. Light absorbed near the junction releases charge carriers, and the reverse current increases in proportion to the light intensity.

**Characteristic curves** show current against voltage for several light intensities. In the reverse-bias region each curve is almost horizontal: the current depends on intensity, hardly on the reverse voltage. Equal steps in intensity give roughly equal steps in current.

**Spectral response curves** show the relative response against wavelength. The response rises to a peak and then drops sharply to zero above a cut-off wavelength, because photons of longer wavelength have too little energy to release charge carriers. For a silicon photodiode the response typically peaks in the near infrared and falls to zero at about 1100 nm. A photodiode is chosen so that its peak matches the light it must detect.

**Uses:**

- **Detector in optical systems**: for example, the receiver at the end of an optical fibre link, or a barcode reader. Photodiodes respond very quickly, so they can follow rapid changes in intensity.
- **With a scintillator to detect atomic particles**: a particle or gamma photon produces a flash of light in the scintillator; the photodiode converts the flash into a current pulse that can be counted or measured.

**Worked example 3.** A reverse-biased photodiode in series with a 100 kΩ resistor produces a photocurrent of 25 µA. The p.d. across the resistor is 25 × 10⁻⁶ × 1.0 × 10⁵ = **2.5 V**, a signal that could drive a MOSFET gate or an ADC.

## 3.13.1.4 The Hall effect sensor

A Hall effect sensor gives an output p.d. that depends on the magnetic flux density through it (the operating principle is not required).

- **Attitude monitoring**: sensors measure components of the Earth's magnetic field along different directions. As a craft or a phone rotates, the components change, so its orientation (attitude) relative to the field can be found, as in an electronic compass.
- **Tachometer**: one or more magnets are fixed to a rotating shaft, and the sensor gives a pulse each time a magnet passes. Counting pulses per second gives the rotation rate.

**Worked example 4.** Four magnets on a wheel give 220 pulses per second: 220/4 = 55 rev s⁻¹ = **3300 rpm**, or ω = 55 × 2π = 346 rad s⁻¹.

## Common mistakes

- Saying a MOSFET is controlled by gate current: it is controlled by V_GS.
- Connecting a zener forward biased to make a voltage reference.
- Choosing a series resistor without allowing for the zener's minimum current.
- Saying a photodiode is used forward biased as a detector.
- Forgetting to divide by the number of magnets in tachometer calculations.

## Exam technique

- **Explain** MOSFET switching using V_GS compared with V_th.
- **Calculate** zener resistors by finding the total current first, then R = (V_supply − V_Z)/I.
- **Interpret** spectral response curves: read the peak and the cut-off, and link the cut-off to photon energy.

Next, try the [discrete semiconductor devices practice questions](/resources/aqa-a-level-physics-7408-discrete-semiconductor-devices-aqa-alevel-practice/).

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.13.1 Discrete semiconductor devices (A-level only), content statements 3.13.1.1 to 3.13.1.4.
