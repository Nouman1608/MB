---
title: "AQA A-Level Physics (7408): Discrete semiconductor devices -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA A-level Physics 7408 practice on discrete devices: MOSFET switching circuits, zener resistor design, photodiode detectors and Hall effect sensors."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover section **3.13.1 Discrete semiconductor devices** of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Electronics option. Learn the content first in the [discrete semiconductor devices study guide](/resources/aqa-a-level-physics-7408-discrete-semiconductor-devices-aqa-alevel/) and the [discrete semiconductor devices revision notes](/resources/aqa-a-level-physics-7408-discrete-semiconductor-devices-aqa-alevel-revision-notes/).

All MOSFETs are N-channel enhancement mode. Component values are illustrative.

## Section A

**1.** State what is meant by V_GS and V_DS for a MOSFET. **[2]**

**2.** Explain why a MOSFET is suitable for connecting directly to a sensor with a high output resistance. **[2]**

**3.** Describe the reverse-bias part of the characteristic curve of a zener diode. **[2]**

**4.** Describe the shape of a typical spectral response curve for a photodiode. **[2]**

**5.** A Hall effect tachometer senses three magnets fixed to a shaft and records 90 pulses per second. Calculate the rotation rate in revolutions per minute. **[2]**

**6.** Give one use of a Hall effect sensor other than as a tachometer. **[1]**

## Section B

**7.** A 6.0 V supply is connected across a thermistor (top) in series with a 2.2 kΩ resistor (bottom). The gate of a MOSFET is connected to the junction, and its source to 0 V. The MOSFET has V_th = 2.5 V. The thermistor's resistance falls as temperature rises.

**(a)** Calculate the thermistor resistance at which the MOSFET begins to conduct. **[2]**
**(b)** State and explain whether the MOSFET switches on as the temperature rises or as it falls. **[2]**
**(c)** State how to change the circuit so that the MOSFET switches on at low temperature. **[1]**

**8.** A MOSFET switches a 12 V lamp that takes 1.5 A. When fully on, the MOSFET's drain–source resistance is 0.15 Ω.

**(a)** Calculate V_DS, the power dissipated in the MOSFET and the p.d. across the lamp. **[3]**
**(b)** Explain why the circuit driving the gate supplies almost no power. **[1]**

**9.** A 4.7 V zener diode with a minimum operating current of 3.0 mA is used with a series resistor to supply a 1.5 kΩ load from a 12 V supply.

**(a)** Calculate the load current. **[1]**
**(b)** Calculate the maximum value of the series resistor. **[2]**
**(c)** A 1.0 kΩ resistor is used. Calculate the current in the zener. **[2]**
**(d)** The load is disconnected. Calculate the zener current and the power it dissipates. **[2]**

**10.** A photodiode is reverse biased in series with a 220 kΩ resistor across a 9.0 V supply.

**(a)** Explain how the photodiode responds to light in this photoconductive mode. **[2]**
**(b)** At a certain light intensity the current is 18 µA. Calculate the p.d. across the resistor. **[1]**
**(c)** The intensity doubles. Calculate the new p.d. across the resistor. **[1]**
**(d)** Suggest why photodiodes are used as receivers in optical fibre systems. **[1]**

**11.** Describe how a photodiode can be used with a scintillator to detect atomic particles. **[2]**

**12.** Explain how Hall effect sensors can be used to monitor the attitude of a spacecraft or a mobile phone. **[2]**

## Answers

**1.** V_GS: the p.d. between the gate and the source (the controlling voltage) [1]; V_DS: the p.d. between the drain and the source (across the device) [1]

**2.** The gate is insulated from the channel by an oxide layer, so it draws almost no current (very high input resistance) [1]; the sensor's output voltage is not pulled down, so the sensor can control the MOSFET without being loaded [1]

**3.** Almost no current flows until the reverse voltage reaches the zener breakdown voltage [1]; then the current increases very steeply while the voltage stays almost constant at V_Z (above the minimum operating current) [1]

**4.** The response rises with wavelength to a peak [1]; then falls sharply to zero above a cut-off wavelength, where photons have too little energy to release charge carriers [1]

**5.** 90/3 = 30 rev s⁻¹ [1]; × 60 = **1800 rpm** [1]

**6.** Monitoring attitude (orientation) by measuring components of the Earth's magnetic field, for example as an electronic compass [1]

**7. (a)** At switching, V_GS = 2.5 V: 6.0 × 2.2/(2.2 + R) = 2.5 [1]; R = **3.1 kΩ** [1]
**(b)** As temperature rises, the thermistor's resistance falls, so a larger share of the 6.0 V is across the 2.2 kΩ resistor and V_GS rises [1]; when V_GS exceeds 2.5 V the MOSFET switches on, so it switches on as the temperature rises [1]
**(c)** Swap the thermistor and the fixed resistor [1]

**8. (a)** V_DS = IR = 1.5 × 0.15 = **0.23 V** [1]; power = I²R = 1.5² × 0.15 = **0.34 W** [1]; lamp p.d. = 12 − 0.23 = **11.8 V** [1]
**(b)** The insulated gate draws almost no current, so the power (V_GS × gate current) is almost zero [1]

**9. (a)** I = 4.7/1500 = **3.1 mA** [1]
**(b)** Resistor current ≥ 3.13 + 3.0 = 6.13 mA [1]; R ≤ (12 − 4.7)/6.13 × 10⁻³ = **1.2 kΩ** (1190 Ω) [1]
**(c)** I_R = 7.3/1000 = 7.3 mA [1]; zener current = 7.3 − 3.1 = **4.2 mA** [1]
**(d)** All 7.3 mA now passes through the zener [1]; power = 4.7 × 7.3 × 10⁻³ = **34 mW** [1]

**10. (a)** In the dark only a tiny leakage current flows [1]; light releases charge carriers, so the reverse current increases in proportion to the light intensity [1]
**(b)** V = 18 × 10⁻⁶ × 220 × 10³ = **4.0 V** [1]
**(c)** Current doubles to 36 µA: V = **7.9 V** [1]
**(d)** It responds very quickly to changes in light intensity, so it can follow rapid pulses of data (and its spectral response can be matched to the light used) [1]

**11.** A particle absorbed in the scintillator produces a flash of light [1]; the photodiode converts the flash into a current (or voltage) pulse that is counted or measured [1]

**12.** The sensors measure the components of the Earth's magnetic field along fixed directions in the craft or phone [1]; when the device rotates these components change, so its orientation relative to the field can be calculated [1]

## Where marks are usually lost

- Describing MOSFET control in terms of gate current.
- Leaving out the zener's minimum current when finding the series resistor.
- Rounding a maximum resistor value upwards.
- Forgetting that the full resistor current passes through the zener when the load is removed.
- Ignoring the number of magnets in a tachometer reading.

## Next steps

- [Discrete semiconductor devices study guide](/resources/aqa-a-level-physics-7408-discrete-semiconductor-devices-aqa-alevel/)
- [Discrete semiconductor devices revision notes](/resources/aqa-a-level-physics-7408-discrete-semiconductor-devices-aqa-alevel-revision-notes/)
- [Electronics practice questions for the whole option](/resources/aqa-a-level-physics-electronics-practice/)

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.13.1 Discrete semiconductor devices (A-level only).
