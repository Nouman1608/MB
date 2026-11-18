---
title: "AQA A-Level Physics (7408): Analogue signal processing -- Practice Questions"
resourceType: "practice-questions"
subject: "physics"
level: ["a-levels"]
topic: "Electronics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 13.3
syllabusTopics:
  - qualification: "a-level"
    topic: "electronics-aqa-alevel"
    subtopic: "analogue-signal-processing-aqa-alevel"
description: "Original practice questions with mark-scheme answers on AQA A-Level Physics 7408 section 3.13.3: LC filters, Q factor, open-loop gain and comparators."
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

These questions cover section 3.13.3, Analogue signal processing (LC resonance filters and the ideal operational amplifier), of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Electronics option assessed in Paper 3 Section B. Learn the content first with the [analogue signal processing study guide](/resources/aqa-a-level-physics-7408-analogue-signal-processing-aqa-alevel/) and the [analogue signal processing revision notes](/resources/aqa-a-level-physics-7408-analogue-signal-processing-aqa-alevel-revision-notes/). All LC circuits are parallel arrangements.

## Questions

### Section A: short questions

**1.** **(a)** State the two properties of an ideal operational amplifier given in the specification. **[2]**
**(b)** Explain why the output of a real op-amp cannot exceed the supply voltages. **[1]**

**2.** A 4.7 mH inductor is connected in parallel with a 22 nF capacitor. Calculate the resonant frequency. **[2]**

**3.** Use the mass–spring analogy to explain why increasing the inductance of an LC filter lowers its resonant frequency. **[2]**

**4.** An energy response curve for a filter peaks at 160 kHz. The energy is 50% of its peak value at 156 kHz and at 164 kHz. Calculate the Q factor. **[2]**

**5.** A real op-amp has an open-loop gain of 1.0 × 10⁵ and is powered from ±12 V. Its output saturates at ±11 V.

**(a)** V₊ = 1.200 05 V and V₋ = 1.200 00 V. Calculate the output voltage. **[1]**
**(b)** V₋ is reduced to 1.199 90 V. State the new output voltage and explain your answer. **[2]**

**6.** Explain why, on a voltage response curve, the 50% energy points are found where the voltage is about 0.71 of its peak value. **[2]**

### Section B: structured questions

**7.** A radio receiver uses a 330 µH inductor in parallel with a variable capacitor whose capacitance can be set from 30 pF to 360 pF.

**(a)** Calculate the range of frequencies the receiver can be tuned to. **[3]**
**(b)** Calculate the capacitance needed to receive a station at 1.20 MHz. **[2]**
**(c)** Explain why the filter needs a high Q factor, but why too high a Q factor would be a disadvantage. **[2]**

**8.** A student measures the voltage across a parallel LC circuit as the frequency of the input is varied. The peak voltage is 2.00 V at 40.0 kHz. The voltage is 1.41 V at 38.0 kHz and at 42.2 kHz.

**(a)** Explain why the student uses the readings at 1.41 V to find the bandwidth. **[1]**
**(b)** Calculate the bandwidth and the Q factor. **[2]**
**(c)** A resistor is added in series with the inductor. Describe and explain the change to the response curve. **[2]**

**9.** A frost alarm uses an op-amp comparator powered from ±9.0 V. V₊ is connected to the midpoint of two 10 kΩ resistors between +9.0 V and 0 V. V₋ is connected to the midpoint of a potential divider made of an ntc thermistor (top, connected to +9.0 V) and a 12 kΩ fixed resistor (bottom, connected to 0 V). The thermistor's resistance is 16 kΩ at −2 °C, 12 kΩ at 2 °C and 8.0 kΩ at 10 °C.

**(a)** Calculate the reference voltage at V₊. **[1]**
**(b)** Calculate V₋ at 10 °C and state the output. **[2]**
**(c)** Calculate V₋ at −2 °C and state the output. **[1]**
**(d)** State the temperature at which the output switches. **[1]**
**(e)** Explain how the fixed resistor could be changed so that the alarm switches at −2 °C instead. **[2]**

**10.** An op-amp with A_OL = 2.0 × 10⁵ saturates at ±13 V.

**(a)** Calculate the range of input difference (V₊ − V₋) for which the output is not saturated. **[2]**
**(b)** Explain why this makes the op-amp, with no feedback, suitable for turning a slowly varying sensor voltage into a two-level digital signal. **[2]**

**11.** A parallel LC circuit resonates at 90 kHz. State the new resonant frequency when:

**(a)** L is doubled and C is halved. **[1]**
**(b)** L and C are both doubled. **[1]**
**(c)** C is replaced by a capacitor of one ninth of the capacitance. **[1]**

**12.** A capacitor is charged and then connected across an inductor. Describe how energy is transferred in the circuit during one complete cycle of oscillation, and explain why, in a real circuit, the oscillation dies away. **[4]**

## Answers

**1. (a)** Infinite open-loop gain [1]; infinite input resistance [1]
**(b)** The output is supplied from the power rails, so it can only swing to just inside +V_s and −V_s, where it saturates [1] **[3]**
*Examiner insight:* "Very high" gain does not match the specification's word "infinite" for the ideal device.

**2.** f₀ = 1/(2π√(4.7 × 10⁻³ × 22 × 10⁻⁹)) [1] = 1.57 × 10⁴ Hz (15.7 kHz) [1] **[2]**
*Examiner insight:* Forgetting to convert nF to F gives a frequency 3 × 10⁴ times too small.

**3.** Inductance is the analogue of mass: both oppose a change, in current or in velocity [1]. A larger mass oscillates more slowly, so a larger inductance gives a lower resonant frequency [1]. **[2]**
*Examiner insight:* The second mark needs the direction of the effect, not just the pairing.

**4.** f_B = 164 − 156 = 8 kHz [1]; Q = 160/8 = 20 [1] **[2]**
*Examiner insight:* Q has no unit; writing "20 kHz" loses the mark.

**5. (a)** V_out = 1.0 × 10⁵ × 5.0 × 10⁻⁵ = 5.0 V [1]
**(b)** The difference is now 1.5 × 10⁻⁴ V, so A_OL(V₊ − V₋) would be 15 V [1]; this exceeds 11 V, so the output saturates at +11 V [1] **[3]**
*Examiner insight:* Give the sign of the saturated output: V₊ is still above V₋, so it is positive.

**6.** The energy stored is proportional to the square of the voltage [1]. Half the energy therefore corresponds to a voltage of 1/√2, about 0.71, of the peak [1]. **[2]**
*Examiner insight:* This is the step students most often miss when reading bandwidth from a voltage graph.

**7. (a)** At 30 pF: f = 1/(2π√(330 × 10⁻⁶ × 30 × 10⁻¹²)) = 1.60 MHz [1]; at 360 pF: f = 0.462 MHz (462 kHz) [1]; so the range is about 460 kHz to 1.6 MHz [1]
**(b)** C = 1/(4π²f₀²L) [1] = 1/(4π² × (1.20 × 10⁶)² × 330 × 10⁻⁶) = 5.3 × 10⁻¹¹ F (53 pF) [1]
**(c)** A high Q gives a narrow response, so neighbouring stations are rejected [1]; if Q is too high, the bandwidth becomes narrower than the station's signal, so part of the information signal is cut off [1] **[7]**
*Examiner insight:* In (a), the smallest capacitance gives the highest frequency; matching them the wrong way round still earns the calculation marks but not the range.

**8. (a)** 1.41 V is 0.71 × 2.00 V, and since energy ∝ V² these are the 50% energy points [1]
**(b)** f_B = 42.2 − 38.0 = 4.2 kHz [1]; Q = 40.0/4.2 = 9.5 [1]
**(c)** The peak becomes lower and wider, so the bandwidth increases and Q falls [1], because the resistance dissipates energy each cycle, damping the oscillation [1] **[5]**
*Examiner insight:* The resonant frequency stays at about 40 kHz; saying the peak moves loses the first mark in (c).

**9. (a)** V₊ = 9.0 × 10/20 = 4.5 V [1]
**(b)** V₋ = 9.0 × 12/(8.0 + 12) = 5.4 V [1]; V₋ > V₊, so the output is at negative saturation, just inside −9 V [1]
**(c)** V₋ = 9.0 × 12/(16 + 12) = 3.9 V, below 4.5 V, so the output is at positive saturation [1]
**(d)** 2 °C, where the thermistor's resistance equals 12 kΩ and V₋ = 4.5 V [1]
**(e)** The output switches when the thermistor's resistance equals the fixed resistance [1], so replace the 12 kΩ resistor with a 16 kΩ resistor [1] **[7]**
*Examiner insight:* State the output as a saturation level with a sign, not "on" or "off".

**10. (a)** V₊ − V₋ = 13/(2.0 × 10⁵) = 6.5 × 10⁻⁵ V [1]; so the range is −65 µV to +65 µV [1]
**(b)** Almost any input difference drives the output to one of the two saturation levels [1], so the output is at one level when the sensor voltage is above the reference and the other level when it is below, giving a two-level signal [1] **[4]**
*Examiner insight:* Link the tiny linear range in (a) to the switching action in (b).

**11. (a)** LC unchanged, so 90 kHz [1]
**(b)** LC is four times larger, so f₀ halves to 45 kHz [1]
**(c)** LC is one ninth, so f₀ triples to 270 kHz [1] **[3]**
*Examiner insight:* Work with the product LC and the square root; there is no need to find L or C.

**12.** At the start, all the energy is in the electric field of the charged capacitor [1]. As it discharges through the inductor, the current rises and the energy moves into the inductor's magnetic field, which holds all of it when the capacitor is uncharged and the current is greatest [1]. The collapsing field keeps the current flowing, charging the capacitor with the opposite polarity, and the process then reverses to complete the cycle [1]. In a real circuit, resistance converts some energy to internal energy (heat) each cycle, so the amplitude decreases [1]. **[4]**
*Examiner insight:* Compare with a mass on a spring for support, but the marks are for the electrical energy stores.

## Where marks are usually lost

- Not converting µH, mH, pF and nF to SI units.
- Forgetting to square f₀ when finding L or C.
- Reading bandwidth at half the peak voltage.
- Giving Q a unit.
- Stating an op-amp output beyond the supply rails.
- Describing a comparator output without a sign or without saying which input is higher.
- Saying added resistance changes the resonant frequency rather than the sharpness of the peak.

## Next steps

- Recap with the [analogue signal processing revision notes](/resources/aqa-a-level-physics-7408-analogue-signal-processing-aqa-alevel-revision-notes/).
- Re-read the [analogue signal processing study guide](/resources/aqa-a-level-physics-7408-analogue-signal-processing-aqa-alevel/).
- Move on to feedback circuits with the [operational amplifier practice questions](/resources/aqa-a-level-physics-7408-operational-amplifier-aqa-alevel-practice/).

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13.3 Analogue signal processing (A-level only), within section 3.13 Electronics.
