---
title: "AQA A-Level Physics (7408): Operational amplifier -- Practice Questions"
resourceType: "practice-questions"
subject: "physics"
level: ["a-levels"]
topic: "Electronics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 13.4
syllabusTopics:
  - qualification: "a-level"
    topic: "electronics-aqa-alevel"
    subtopic: "operational-amplifier-aqa-alevel"
description: "Original practice questions with mark-scheme answers on AQA A-Level Physics 7408 section 3.13.4: inverting, non-inverting, summing and difference amplifiers."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover section 3.13.4, the operational amplifier in its feedback configurations, of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Electronics option assessed in Paper 3 Section B. Learn the content first with the [operational amplifier study guide](/resources/aqa-a-level-physics-7408-operational-amplifier/) and the [operational amplifier revision notes](/resources/aqa-a-level-physics-7408-operational-amplifier-revision-notes/). Treat op-amps as ideal unless a question gives a real property.

## Questions

### Section A: short questions

**1.** Explain what is meant by a virtual earth in an inverting amplifier. **[2]**

**2.** An inverting amplifier has R_in = 3.3 kΩ and R_f = 33 kΩ.

**(a)** State its voltage gain. **[1]**
**(b)** Calculate V_out when V_in = 0.25 V. **[1]**

**3.** A non-inverting amplifier has R_f = 56 kΩ and R₁ = 8.0 kΩ.

**(a)** Calculate its voltage gain. **[1]**
**(b)** Calculate V_out when V_in = 0.60 V. **[1]**

**4.** State two limitations of a real operational amplifier compared with an ideal one. **[2]**

**5.** An op-amp has a gain–bandwidth product of 1.0 MHz. Calculate the bandwidth when it is used with a closed-loop gain of 40. **[1]**

**6.** Explain why a non-inverting amplifier is a better choice than an inverting amplifier for a sensor with a very high internal resistance. **[2]**

### Section B: structured questions

**7.** An inverting amplifier has R_in = 4.7 kΩ, R_f = 68 kΩ and a ±12 V supply.

**(a)** Use virtual-earth analysis to derive the expression for its voltage gain. **[4]**
**(b)** The input is a sine wave of peak voltage 0.50 V. Calculate the peak output voltage and state its phase relative to the input. **[2]**
**(c)** The input peak is increased to 1.0 V. Describe the output waveform. **[2]**

**8.** A three-channel audio mixer is a summing amplifier with R_f = 10 kΩ. At one instant, microphone 1 gives 0.20 V through 10 kΩ, microphone 2 gives 0.15 V through 5.0 kΩ and a guitar pickup gives −0.40 V through 20 kΩ.

**(a)** Calculate V_out at this instant. **[3]**
**(b)** Suggest how the circuit could be changed to make microphone 2 quieter in the mix without affecting the other channels. **[1]**

**9.** A 3-bit digital-to-analogue converter is built from a summing amplifier with R_f = 2.0 kΩ. Inputs D₂ (most significant), D₁ and D₀ connect through 4.0 kΩ, 8.0 kΩ and 16 kΩ. Logic 1 is 4.0 V and logic 0 is 0 V.

**(a)** Calculate V_out for the input code 101. **[2]**
**(b)** Calculate the change in V_out for each increase of one in the binary number. **[1]**
**(c)** State V_out for the code 111. **[1]**

**10.** A temperature sensor bridge gives 1.505 V on one side and 1.490 V on the other. They are connected to a difference amplifier with R_f = 220 kΩ and R₁ = 2.2 kΩ, powered from ±15 V.

**(a)** Calculate V_out. **[2]**
**(b)** Explain why a single non-inverting amplifier of gain 100 connected to just one side of the bridge would not give a useful output. **[2]**

**11.** The frequency response curve of an op-amp amplifier is flat at a gain of 100 up to 10 kHz and then falls.

**(a)** Calculate the gain–bandwidth product of the op-amp. **[1]**
**(b)** The feedback resistor is changed to give a gain of 25. Calculate the new bandwidth. **[1]**
**(c)** Describe how the frequency response curve changes. **[2]**

**12.** A probe produces 0 to 0.40 V and has a very high internal resistance. A display needs 0 to 4.0 V, rising as the probe voltage rises.

**(a)** State the most suitable op-amp configuration and justify your choice. **[2]**
**(b)** Choose suitable values for the two resistors and show that they give the required gain. **[2]**

## Answers

**1.** The non-inverting input is at 0 V and, because the open-loop gain is very large while the output is finite, V₋ is held almost exactly at 0 V [1]. It is at earth potential without being connected to earth [1]. **[2]**
*Examiner insight:* "The inverting input is earthed" is wrong and scores zero; the whole point is that there is no connection.

**2. (a)** −33/3.3 = −10 [1]
**(b)** −10 × 0.25 = −2.5 V [1] **[2]**
*Examiner insight:* The minus sign is required for both marks.

**3. (a)** 1 + 56/8.0 = 8.0 [1]
**(b)** 8.0 × 0.60 = 4.8 V [1] **[2]**
*Examiner insight:* 56/8.0 = 7 is the most common wrong answer; the "1 +" matters.

**4.** Any two of: finite open-loop gain; open-loop gain falls as frequency rises; finite input resistance, so some input current flows; output saturates just inside the supply voltages [2] **[2]**
*Examiner insight:* "It is not perfect" is not a limitation; name a property.

**5.** 1.0 MHz/40 = 25 kHz [1] **[1]**
*Examiner insight:* Give the unit; a bare "25 000" is ambiguous.

**6.** In the non-inverting circuit, the signal connects directly to V₊, so the input resistance is very high and almost no current is drawn from the sensor [1]. An inverting circuit draws current through R_in, which would cause a large pd across the sensor's internal resistance and reduce the signal reaching the amplifier [1]. **[2]**
*Examiner insight:* The comparison earns the second mark; describe both circuits.

**7. (a)** V₊ is at 0 V and the open-loop gain is very large, so V₋ ≈ 0 V, a virtual earth [1]. No current flows into the op-amp, so the current in R_in equals the current in R_f [1]. V_in/R_in = (0 − V_out)/R_f [1], giving V_out/V_in = −R_f/R_in [1].
**(b)** Gain = −68/4.7 = −14.5 [1]; peak output 7.2 V, 180° out of phase with the input (inverted) [1]
**(c)** The predicted peak is 14.5 V, more than the 12 V supply [1], so the output is an inverted sine wave with its peaks clipped flat just inside ±12 V [1] **[8]**
*Examiner insight:* In (a), writing the result without both assumptions limits the answer to the last mark.

**8. (a)** V_out = −R_f(V₁/R₁ + V₂/R₂ + V₃/R₃) [1] = −10 kΩ × (0.20/10 kΩ + 0.15/5.0 kΩ − 0.40/20 kΩ) = −(0.20 + 0.30 − 0.20) [1] = −0.30 V [1]
**(b)** Increase the 5.0 kΩ input resistor for microphone 2 (for example, replace it with a variable resistor) [1] **[4]**
*Examiner insight:* Changing R_f would change every channel, so it does not answer (b).

**9. (a)** V_out = −2.0 kΩ × (4.0/4.0 kΩ + 4.0/16 kΩ) [1] = −(2.0 + 0.50) = −2.5 V [1]
**(b)** −2.0 × 4.0/16 = −0.50 V per step [1]
**(c)** 7 steps: −3.5 V [1] **[4]**
*Examiner insight:* Each step is set by the least significant bit's resistor; code 101 is 5 steps, and 5 × −0.50 = −2.5 V confirms (a).

**10. (a)** V_out = (1.505 − 1.490) × 220/2.2 [1] = 0.015 × 100 = 1.5 V [1]
**(b)** The amplifier would multiply the full 1.5 V by 100, predicting 150 V [1], so the output would stay saturated at about +15 V and not respond to the small temperature change; the difference amplifier cancels the 1.5 V common to both sides [1] **[4]**
*Examiner insight:* The idea that the shared voltage cancels is what the second mark rewards.

**11. (a)** 100 × 10 kHz = 1.0 MHz [1]
**(b)** 1.0 MHz/25 = 40 kHz [1]
**(c)** The flat part of the curve is lower, at a gain of 25 [1], and extends to a higher frequency, 40 kHz, before falling along the same line as before [1] **[4]**
*Examiner insight:* Both changes, lower and wider, are needed for full marks.

**12. (a)** Non-inverting amplifier [1]: it has a very high input resistance, so it does not load the probe, and its output is in phase with the input [1]
**(b)** Gain needed = 4.0/0.40 = 10; for example R₁ = 10 kΩ and R_f = 90 kΩ [1]; 1 + 90/10 = 10 [1] **[4]**
*Examiner insight:* Any pair with R_f = 9R₁ is correct; choosing R_f = 10R₁ gives a gain of 11.

## Where marks are usually lost

- Dropping minus signs for inverting and summing circuits.
- Using R_f/R₁ instead of 1 + R_f/R₁ for non-inverting gain.
- Stating outputs larger than the supply rails.
- Missing either assumption in the virtual-earth derivation.
- Changing R_f when only one mixer channel should change.
- Giving gain–bandwidth answers without units.

## More on this topic

- Recap with the [operational amplifier revision notes](/resources/aqa-a-level-physics-7408-operational-amplifier-revision-notes/).
- Re-read the [operational amplifier study guide](/resources/aqa-a-level-physics-7408-operational-amplifier/).
- Practise open-loop gain and comparators in the [analogue signal processing practice questions](/resources/aqa-a-level-physics-7408-analogue-signal-processing-practice/).

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13.4 Operational amplifier configurations (A-level only), within section 3.13 Electronics.
