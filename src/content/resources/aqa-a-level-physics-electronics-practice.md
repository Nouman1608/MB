---
title: "AQA A-Level Physics: Electronics (7408) -- Practice Questions"
seoTitle: "AQA A-Level Physics Electronics Practice Questions"
resourceType: "practice-questions"
subject: "physics"
level: ["a-levels"]
topic: "Electronics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 13
syllabusTopics:
  - qualification: "a-level"
    topic: "electronics-aqa-alevel"
  - qualification: "a-level"
    topic: "electronics-aqa-alevel"
    subtopic: "discrete-semiconductor-devices-aqa-alevel"
  - qualification: "a-level"
    topic: "electronics-aqa-alevel"
    subtopic: "analogue-and-digital-signals-aqa-alevel"
  - qualification: "a-level"
    topic: "electronics-aqa-alevel"
    subtopic: "analogue-signal-processing-aqa-alevel"
  - qualification: "a-level"
    topic: "electronics-aqa-alevel"
    subtopic: "operational-amplifier-aqa-alevel"
  - qualification: "a-level"
    topic: "electronics-aqa-alevel"
    subtopic: "digital-signal-processing-aqa-alevel"
  - qualification: "a-level"
    topic: "electronics-aqa-alevel"
    subtopic: "data-communication-systems-aqa-alevel"
description: "Original practice questions with full worked answers for the AQA A-Level Physics 7408 electronics option, from zener diodes and op-amps to AM and FM."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover section 3.13 Electronics (3.13.1 to 3.13.6) of the AQA AS and A-level Physics specification (7407/7408, version 1.4, AS and A-level exams June 2016 onwards). The section is **A-level only** and one of the five **options** (sections 3.9 to 3.13); you study one, assessed in Paper 3 Section B (35 marks). Paper 3 Section A assesses practical skills and data analysis.

Learn the content with the [study guide](/resources/aqa-a-level-physics-electronics/) and the [revision notes](/resources/aqa-a-level-physics-electronics-revision-notes/). Treat op-amps as ideal unless told otherwise.

## Questions

**1.** An N-channel enhancement-mode MOSFET is used as a switch controlled by a sensor.

**(a)** State what is meant by the threshold voltage V_th. **[1]**
**(b)** Explain why the MOSFET draws almost no current from the sensor. **[2]**

**2.** A 3.3 V zener diode, with a minimum operating current of 4.0 mA, is used with a series resistor and a 9.0 V supply to power a load drawing 12 mA.

**(a)** Calculate the largest series resistance that keeps the output at 3.3 V. **[3]**
**(b)** The load current rises to 20 mA with this resistor in place. Explain what happens to the output voltage. **[2]**

**3.** **(a)** Describe how a photodiode and a scintillator together detect a single atomic particle. **[2]**
**(b)** A Hall effect tachometer gives one pulse per revolution. It records 45 pulses in 1.5 s. Calculate the rotation rate in revolutions per minute. **[2]**

**4.** A 3-bit ADC accepts inputs from 0 to 4.0 V and samples at 10 kHz. Each sample is assigned to the level at or below it, numbered from 0.

**(a)** State the number of levels and calculate the step size. **[2]**
**(b)** An input of 2.3 V is sampled. State the level number and write it in binary. **[2]**
**(c)** State the highest signal frequency the ADC can reproduce. **[1]**
**(d)** Calculate the data rate. **[1]**

**5.** Explain why a digital signal can be sent over a long, noisy link with less loss of quality than an analogue signal. **[3]**

**6.** A parallel LC filter uses a 1.0 nF capacitor and must resonate at 200 kHz.

**(a)** Calculate the inductance needed. **[2]**
**(b)** The bandwidth at the 50% energy points is 8.0 kHz. Calculate the Q factor. **[1]**
**(c)** The capacitor is replaced by a 4.0 nF capacitor. Calculate the new resonant frequency. **[1]**
**(d)** State the mechanical analogues of inductance and capacitance. **[2]**

**7.** An inverting amplifier has R_in = 4.7 kΩ and R_f = 47 kΩ and a ±12 V supply.

**(a)** Use virtual-earth analysis to show that V_out/V_in = −R_f/R_in. **[3]**
**(b)** Calculate V_out for V_in = 0.65 V. **[1]**
**(c)** Explain what happens to V_out when V_in = 1.5 V. **[1]**

**8.** An audio mixer is a summing amplifier with R_f = 20 kΩ. Input 1 is 0.30 V through 10 kΩ; input 2 is −0.80 V through 40 kΩ. Calculate V_out. **[3]**

**9.** An op-amp has a gain–bandwidth product of 1.0 MHz. It is used as a non-inverting amplifier with R_f = 24 kΩ and R₁ = 1.0 kΩ.

**(a)** Calculate the gain. **[1]**
**(b)** Calculate the bandwidth. **[2]**
**(c)** A gain of 100 is needed for signals up to 20 kHz. Show that one stage cannot do this, and explain how two stages could. **[3]**

**10.** Inputs A and B go to a NAND gate. The NAND output and input C go to a NOR gate, whose output is Q.

**(a)** Write a Boolean expression for Q and simplify it. **[2]**
**(b)** State the only combination of A, B and C that gives Q = 1. **[2]**
**(c)** Describe a circuit using only AND and NOT gates that gives the same output. **[1]**

**11.** An astable with mark time 2.0 ms and space time 3.0 ms clocks a 4-bit binary counter.

**(a)** Calculate the period, frequency and duty cycle of the astable. **[3]**
**(b)** The counter is to become a modulo-10 counter. State which outputs must be combined by an AND gate to drive the reset pin. **[2]**
**(c)** State the number of distinct states of a 4-stage Johnson counter. **[1]**

**12.** A communication link carries several signals.

**(a)** A graph of an AM signal shows the envelope repeating every 0.25 ms, with 40 carrier oscillations in each repeat. Calculate the information frequency and the carrier frequency. **[2]**
**(b)** Speech channels with f_M = 5.0 kHz are sent by AM. Calculate the bandwidth per channel and the number of channels in a 120 kHz band. **[2]**
**(c)** Calculate the bandwidth of an FM signal with Δf = 50 kHz and f_M = 15 kHz. **[1]**
**(d)** Six channels are combined by time-division multiplexing. Each is sampled at 8.0 kHz with 8 bits per sample. Calculate the total bit rate and the time available for each sample. **[2]**
**(e)** Give two advantages of optic fibre over copper wire for this link. **[2]**
**(f)** Explain why a satellite relaying the signals uses different up-link and down-link frequencies. **[1]**

## Answers

**1. (a)** The minimum gate–source voltage at which a channel forms and drain current flows [1].
**(b)** The gate is insulated from the channel by an oxide layer [1], so the input resistance is very high and the gate current is negligible [1]. **[3]**
*Examiner insight:* "High resistance" alone gets one mark at most; link it to the insulated gate for the second.

**2. (a)** Current = 12 + 4.0 = 16 mA [1]; pd = 9.0 − 3.3 = 5.7 V [1]; R = 5.7/0.016 = **356 Ω** [1]
**(b)** The resistor can supply only about 16 mA at 3.3 V, less than the load needs, so the zener current falls below its minimum (to zero) [1]. The zener stops regulating and the output voltage falls below 3.3 V [1]. **[5]**
*Examiner insight:* Using only the 12 mA load current gives 475 Ω and loses the first and last marks in (a).

**3. (a)** The particle produces a flash of light in the scintillator [1]; the reverse-biased photodiode turns the light into a pulse of current [1].
**(b)** 45/1.5 = 30 revolutions per second [1]; × 60 = **1800 rpm** [1]. **[4]**
*Examiner insight:* For the scintillator, stating "the photodiode detects the particle" misses the light-production step.

**4. (a)** 2³ = **8 levels** [1]; step = 4.0/8 = **0.50 V** [1]
**(b)** 2.3/0.50 = 4.6, so **level 4** [1], binary **100** [1]
**(c)** 10/2 = **5.0 kHz** [1]
**(d)** 10 000 × 3 = **30 kbit s⁻¹** [1] **[6]**
*Examiner insight:* Follow the assignment rule given in the question; rounding 4.6 up to level 5 loses the mark here.

**5.** Noise adds to both signals, and amplifying an analogue signal amplifies the noise with it [1]. A digital signal has only two levels, so a comparator or regenerator can decide whether each pulse is 1 or 0 [1] and output clean pulses, removing the noise unless it is large enough to flip a bit [1]. **[3]**
*Examiner insight:* Saying "digital is not affected by noise" is wrong; the credit is for regeneration.

**6. (a)** L = 1/(4π²f₀²C) [1] = 1/(4π² × (2.0×10⁵)² × 1.0×10⁻⁹) = **6.3 × 10⁻⁴ H (0.63 mH)** [1]
**(b)** Q = 200/8.0 = **25** [1]
**(c)** f₀ ∝ 1/√C, so the frequency halves: **100 kHz** [1]
**(d)** Inductance ↔ **mass** [1]; capacitance ↔ **spring** [1]. **[6]**
*Examiner insight:* Forgetting to square f₀ gives a wildly wrong L; units of henry are needed for the accuracy mark.

**7. (a)** V₊ is earthed and the open-loop gain is very large, so V₋ ≈ 0 V (virtual earth) [1]. No current enters the op-amp, so the current in R_in equals the current in R_f [1]. V_in/R_in = (0 − V_out)/R_f, giving V_out/V_in = −R_f/R_in [1]
**(b)** Gain = −47/4.7 = −10; V_out = **−6.5 V** [1]
**(c)** −15 V is predicted, beyond the supply, so the output saturates at about −12 V (just inside the rail) [1]. **[5]**
*Examiner insight:* A "show that" needs both assumptions stated; quoting the final formula alone earns nothing.

**8.** V_out = −R_f(V₁/R₁ + V₂/R₂) [1] = −20 k × (0.30/10 k − 0.80/40 k) = −(0.60 − 0.40) [1] = **−0.20 V** [1] **[3]**
*Examiner insight:* Keep the sign of the −0.80 V input; treating it as positive gives −1.0 V.

**9. (a)** 1 + 24/1.0 = **25** [1]
**(b)** Bandwidth = 1.0 MHz/25 [1] = **40 kHz** [1]
**(c)** One stage of gain 100 has bandwidth 1.0 MHz/100 = 10 kHz, below 20 kHz [1]. Two stages of gain 10 in series give overall gain 10 × 10 = 100 [1], and each has bandwidth 100 kHz, so 20 kHz is covered [1]. **[6]**
*Examiner insight:* Using the non-inverting gain as R_f/R₁ (24) is a common slip that carries through to (b).

**10. (a)** Q = NOT(NOT(A · B) + C) [1] = **A · B · C̄** [1]
**(b)** **A = 1, B = 1, C = 0** [1]; every other combination gives Q = 0 [1]
**(c)** C through a NOT gate, then A, B and C̄ into a three-input AND gate (or two two-input ANDs) [1]. **[5]**
*Examiner insight:* Working row by row through a full truth table is acceptable evidence for (b) if the algebra is shaky.

**11. (a)** T = 2.0 + 3.0 = **5.0 ms** [1]; f = 1/5.0 ms = **200 Hz** [1]; duty cycle = 2.0/5.0 = **40%** [1]
**(b)** 10 = 1010 in binary [1], so AND the outputs worth **8 and 2** [1]
**(c)** 2 × 4 = **8** [1] **[6]**
*Examiner insight:* A duty cycle of 2.0/3.0 is the mark-to-space ratio and scores zero.

**12. (a)** f_M = 1/0.25 ms = **4.0 kHz** [1]; carrier = 40 × 4.0 kHz = **160 kHz** [1]
**(b)** Bandwidth = 2 × 5.0 = **10 kHz** [1]; 120/10 = **12 channels** [1]
**(c)** 2(50 + 15) = **130 kHz** [1]
**(d)** 6 × 8000 × 8 = **384 kbit s⁻¹** [1]; 1/(6 × 8000) = **20.8 µs** per sample [1]
**(e)** Any two: much greater bandwidth or data rate; lower attenuation; immune to electrical interference; harder to tap, so more secure [2]
**(f)** The strong down-link transmission would otherwise de-sense the satellite's receiver for the weak up-link signal [1]. **[10]**
*Examiner insight:* In (e), "faster" or "better" alone is too vague; each mark needs a named property.

## Where marks are usually lost

- Leaving the zener minimum current out of the series-resistor calculation.
- Rounding a quantisation level the wrong way for the rule stated.
- Claiming digital signals are immune to noise instead of describing regeneration.
- Missing the virtual-earth and no-input-current steps in the derivation.
- Ignoring the sign of an input in a summing amplifier.
- Quoting an output beyond the supply rails.
- Using R_f/R₁ for a non-inverting amplifier's gain.
- Confusing duty cycle with mark-to-space ratio.
- Using f_M alone, or 2Δf + f_M, for FM bandwidth.

## Next steps

- Recap with the [revision notes](/resources/aqa-a-level-physics-electronics-revision-notes/).
- Re-read the [study guide](/resources/aqa-a-level-physics-electronics/).
- See every topic on the [AQA A-level Physics hub](/boards/aqa/a-level/physics/) and the [printable checklist](/checklists/aqa/a-level/physics/).
- Try all free 10-minute [diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, version 1.4, July 2026, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13 Electronics (A-level only option).
