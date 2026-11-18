---
title: "AQA A-Level Physics (7408): Analogue signal processing -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for AQA A-Level Physics 7408 section 3.13.3: LC resonance, Q factor and bandwidth, the ideal op-amp, open-loop gain and comparators, with a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 3.13.3, Analogue signal processing, of the AQA AS and A-level Physics specification (7407/7408): 3.13.3.1 LC resonance filters and 3.13.3.2 The ideal operational amplifier. The section is part of the A-level only Electronics option, assessed in Paper 3 Section B. For explanations and worked examples, read the [analogue signal processing study guide](/resources/aqa-a-level-physics-7408-analogue-signal-processing-aqa-alevel/); then practise with the [analogue signal processing practice questions](/resources/aqa-a-level-physics-7408-analogue-signal-processing-aqa-alevel-practice/).

## Key equations

| Quantity | Equation | Notes |
|---|---|---|
| Resonant frequency | f₀ = 1/(2π√(LC)) | Parallel LC only; derivation not required |
| Rearranged for C | C = 1/(4π²f₀²L) | Square f₀ |
| Rearranged for L | L = 1/(4π²f₀²C) | Square f₀ |
| Q factor | Q = f₀/f_B | f_B measured between the 50% energy points |
| Open-loop output | V_out = A_OL(V₊ − V₋) | Real op-amp, no feedback, output limited by the supply |

## Key terms

| Term | Meaning |
|---|---|
| Resonant frequency f₀ | Frequency at which energy passes between L and C and the response peaks |
| Energy (voltage) response curve | Graph of a filter's response against frequency |
| Bandwidth f_B | Frequency range between the two 50% energy points |
| Q factor | f₀/f_B; measures how sharply the filter selects a frequency |
| Inductance as mass | Both oppose change: in current, or in velocity |
| Capacitance as spring | Both store energy that drives the motion back |
| Non-inverting input V₊ | Input whose rise makes the output rise |
| Inverting input V₋ | Input whose rise makes the output fall |
| Open-loop gain A_OL | Gain of the op-amp with no feedback |
| Infinite input resistance | No current flows into either input of the ideal op-amp |
| Saturation | Output stuck just inside a supply rail because A_OL(V₊ − V₋) would exceed it |
| Comparator | Op-amp without feedback whose output shows which input is higher |
| Reference voltage | Fixed voltage, usually from a potential divider, that a sensor voltage is compared with |

## Condensed recall: LC filters

- Energy moves between the capacitor's electric field and the inductor's magnetic field at f₀.
- Resistance damps the oscillation; less resistance gives a sharper peak and a higher Q.
- f₀ ∝ 1/√(LC): doubling C (or L) divides f₀ by √2; quadrupling C halves f₀.
- To tune to a higher frequency, reduce C (or L).
- High Q: narrow band, good selectivity. Low Q: broad band, passes more frequencies.
- Energy ∝ V², so on a voltage axis the 50% energy points sit at 0.71 of the peak voltage.
- The current response curve is not required.

## Condensed recall: the ideal op-amp

- Connections: +V_s, −V_s (and 0 V), V₊, V₋, output.
- Ideal: infinite open-loop gain, infinite input resistance.
- Real: A_OL large but finite (commonly of order 10⁵); output saturates just inside the rails.
- Largest unsaturated input difference = saturation voltage / A_OL, typically tens of microvolts.
- Comparator: V₊ > V₋ gives positive saturation; V₊ < V₋ gives negative saturation.
- To reverse a comparator's action, swap the inputs or swap the positions of sensor and fixed resistor in the divider.

## Quick-check numbers

| Data | Result |
|---|---|
| L = 10 mH, C = 100 nF | f₀ = 5.0 kHz |
| L = 0.47 mH, C = 1.0 nF | f₀ = 232 kHz |
| f₀ = 455 kHz, L = 1.0 mH | C = 122 pF |
| f₀ = 455 kHz, f_B = 10 kHz | Q = 45.5 |
| A_OL = 1.0 × 10⁵, saturation 12 V | largest difference 120 µV |

## Comparator method

1. Find the reference voltage from its potential divider: V = V_s × R_bottom/(R_top + R_bottom).
2. Find the sensor voltage at each condition given.
3. Compare V₊ with V₋ and state the output saturation level.
4. For the switching point, set the sensor voltage equal to the reference and solve for the sensor's resistance.

## Exam traps

- Not squaring f₀, or not converting pF, nF and mH to SI units.
- Measuring f_B at half the peak voltage instead of 0.71 of it.
- Pairing capacitance with mass; inductance is the mass analogue.
- Treating a real op-amp's gain as infinite when A_OL is given.
- Quoting an output larger than the supply voltage.
- Stating the comparator output without saying which input is higher.
- Calling the comparator an amplifier circuit with feedback; it has none.

## Self-test

1. State the equation for the resonant frequency of a parallel LC circuit.
2. What is the mechanical analogue of inductance?
3. A filter has f₀ = 120 kHz and f_B = 6.0 kHz. Calculate Q.
4. The capacitance in an LC filter is made four times larger. What happens to f₀?
5. What fraction of the peak voltage marks the 50% energy points?
6. State the effect of reducing the resistance in an LC circuit on its response curve.
7. State the two properties of an ideal op-amp named in the specification.
8. Write the open-loop transfer function of a real op-amp.
9. An op-amp has A_OL = 1.5 × 10⁵. V₊ = 2.000 10 V and V₋ = 2.000 00 V. Supply ±15 V. State the output.
10. In a comparator, V₋ = 4.0 V and V₊ falls from 5.0 V to 3.0 V. Describe the output.
11. Why does an op-amp with infinite input resistance not affect the potential divider feeding it?
12. Name the type of op-amp circuit with no feedback that switches between two output levels.

### Answers

1. f₀ = 1/(2π√(LC)).
2. Mass.
3. Q = 120/6.0 = 20.
4. f₀ halves, since f₀ ∝ 1/√C.
5. 1/√2, about 0.71.
6. The peak becomes taller and narrower: bandwidth falls and Q rises.
7. Infinite open-loop gain and infinite input resistance.
8. V_out = A_OL(V₊ − V₋).
9. 1.5 × 10⁵ × 1.0 × 10⁻⁴ V = 15 V would be needed, so the output saturates just below +15 V.
10. It starts at positive saturation and switches to negative saturation as V₊ falls below 4.0 V.
11. No current flows into the input, so the divider's output voltage is not changed by the connection.
12. A comparator.

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13.3 Analogue signal processing (A-level only), within section 3.13 Electronics.
