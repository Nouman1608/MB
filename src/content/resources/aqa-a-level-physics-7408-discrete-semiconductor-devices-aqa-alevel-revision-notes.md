---
title: "AQA A-Level Physics (7408): Discrete semiconductor devices -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA A-level Physics 7408 notes on discrete devices (3.13.1): MOSFET terms and switching, zener circuits, photodiodes, Hall sensors and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section **3.13.1 Discrete semiconductor devices** of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Electronics option. Full explanations and worked examples are in the [discrete semiconductor devices study guide](/resources/aqa-a-level-physics-7408-discrete-semiconductor-devices-aqa-alevel/); test yourself with the [discrete semiconductor devices practice questions](/resources/aqa-a-level-physics-7408-discrete-semiconductor-devices-aqa-alevel-practice/).

## What the specification includes and excludes

| Device | Required | Not required |
|---|---|---|
| MOSFET | Simplified structure, behaviour, characteristics; drain, source, gate; V_DS, V_GS, I_DSS, V_th; switch; very high input resistance | Anything other than N-channel enhancement mode |
| Zener diode | Characteristic with breakdown voltage and minimum operating current; anode and cathode; constant voltage source with a resistor; reference voltage | Use as a stabiliser |
| Photodiode | Characteristic and spectral response curves; photoconductive detector; with a scintillator | |
| Hall effect sensor | Attitude monitoring; tachometer | Principles of operation |

## Key terms

| Term | Meaning |
|---|---|
| Gate | Insulated control electrode of a MOSFET |
| Source / drain | Terminals between which the channel current flows (drain to source) |
| Channel | Conducting n-type path formed under the gate when V_GS > V_th |
| V_th | Threshold gate–source voltage for conduction |
| I_DSS | Drain current with gate shorted to source; tiny leakage for enhancement mode |
| Zener breakdown voltage | Reverse voltage at which current rises steeply at almost constant voltage |
| Minimum operating current | Smallest zener current that keeps the voltage at V_Z |
| Photoconductive mode | Photodiode reverse biased; current proportional to intensity |
| Spectral response | Relative output against wavelength |
| Scintillator | Material that emits a light flash when a particle is absorbed |
| Tachometer | Instrument measuring rotation rate |
| Attitude | Orientation of a craft or device |

## MOSFET summary

- N-channel enhancement: p-type body, n-type source and drain, metal gate on thin oxide.
- V_GS < V_th: off (no channel). V_GS > V_th: channel forms; I_D rises with V_GS.
- Gate insulated → almost zero gate current → very high input resistance → voltage-controlled.
- Switch: load between supply and drain; source to 0 V; fully on gives small V_DS.
- Sensor control: potential divider (LDR or thermistor plus resistor) sets V_GS. Swap positions to reverse the action.

## Zener summary

- Reverse biased, in series with a resistor; output across the zener.
- Total resistor current = load current + zener current (at least the minimum).
- R ≤ (V_supply − V_Z)/(I_load + I_Z,min); choose the next lower standard value.
- Power in zener = V_Z × I_Z.
- Reference voltage: fixed level for comparators and ADCs, independent of supply changes.

## Photodiode summary

- Reverse biased (photoconductive): small dark current; current ∝ intensity.
- Characteristic: near-flat lines in reverse bias, higher for brighter light.
- Spectral response: peak, then cut-off at long wavelength where photon energy is too small (silicon: peak in near infrared, cut-off about 1100 nm).
- Series resistor converts current to voltage: V = IR.
- Uses: optical detectors (fibre receivers); with a scintillator for particle detection.

## Hall effect sensor summary

- Output p.d. depends on flux density through the sensor.
- Attitude: components of the Earth's field change with orientation.
- Tachometer: rev s⁻¹ = pulses per second ÷ magnets on the shaft; rpm = rev s⁻¹ × 60.

## Exam traps

- "Gate current switches the MOSFET": it is V_GS that matters.
- Drawing current from source to drain in an N-channel device's load circuit: conventional current flows drain to source.
- Forgetting the minimum zener current in resistor calculations.
- Rounding the zener resistor **up**: that gives too little current.
- Photodiode used forward biased: wrong for photoconductive detection.
- Ignoring the number of magnets in tachometer calculations.

## Self-test

1. Name the three terminals of a MOSFET.
2. What is the threshold voltage V_th?
3. Why does a MOSFET have a very high input resistance?
4. A 12 V supply feeds a thermistor (top) and a 4.7 kΩ resistor (bottom); the gate connects to the junction; V_th = 4.0 V. The thermistor is 10 kΩ when cold and 1.5 kΩ when hot. Is the MOSFET on when cold, when hot, or both?
5. Which way round is a zener diode connected to give a constant voltage?
6. A 9.0 V supply, a 5.1 V zener (minimum 4.0 mA) and a 1.0 kΩ load. Find the largest series resistor.
7. With a 390 Ω series resistor in that circuit, find the zener current.
8. Why is a reference voltage useful for an ADC?
9. A photodiode produces 40 µA through a 47 kΩ resistor. Find the p.d. across the resistor.
10. Why does a photodiode's spectral response fall to zero at long wavelengths?
11. How is a photodiode used to detect particles?
12. A shaft carries two magnets and the Hall sensor gives 150 pulses per second. Find the speed in rpm.

### Answers

1. **Drain, source and gate**.
2. The gate–source voltage **above which a channel forms** and drain current flows.
3. The gate is separated from the channel by an **insulating oxide layer**, so almost **no gate current** flows.
4. Cold: V_GS = 12 × 4.7/14.7 = 3.8 V (**off**); hot: 12 × 4.7/6.2 = 9.1 V (**on**). On only when **hot**.
5. **Reverse biased** (cathode to the more positive side).
6. I = 5.1 + 4.0 = 9.1 mA; R = 3.9/0.0091 = **430 Ω** (largest).
7. I_R = 3.9/390 = 10.0 mA; zener current = 10.0 − 5.1 = **4.9 mA**.
8. The comparison level stays fixed **even if the supply voltage changes**, so readings do not drift.
9. V = 40 × 10⁻⁶ × 47 × 10³ = **1.9 V**.
10. Long-wavelength photons have **too little energy** to release charge carriers.
11. A **scintillator** turns each particle into a flash of light, which the photodiode converts into a **current pulse**.
12. 150/2 = 75 rev s⁻¹ = **4500 rpm**.

## Frequently asked questions

**How do you choose the series resistor for a zener reference?**
Add the load current to the zener's minimum operating current to get the smallest current the resistor must carry. The resistor must drop the supply voltage minus V_Z at that current, so R must not exceed (V_supply − V_Z) divided by that total.

**Why is a photodiode reverse biased when used as a light detector?**
In reverse bias the dark current is tiny and the current rises in proportion to light intensity, almost independent of the reverse voltage. This photoconductive mode gives a fast, linear response.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.13.1 Discrete semiconductor devices (A-level only).
