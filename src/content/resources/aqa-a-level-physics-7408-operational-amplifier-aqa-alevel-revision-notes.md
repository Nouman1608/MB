---
title: "AQA A-Level Physics (7408): Operational amplifier -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for AQA A-Level Physics 7408 section 3.13.4: op-amp configurations, the virtual-earth derivation, gain-bandwidth product and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 3.13.4 of the AQA AS and A-level Physics specification (7407/7408): the operational amplifier in inverting, non-inverting, summing and difference configurations, and the limitations of real op-amps. The section is part of the A-level only Electronics option, assessed in Paper 3 Section B. For explanations and worked examples, read the [operational amplifier study guide](/resources/aqa-a-level-physics-7408-operational-amplifier-aqa-alevel/); then practise with the [operational amplifier practice questions](/resources/aqa-a-level-physics-7408-operational-amplifier-aqa-alevel-practice/). The ideal op-amp and comparator are in the [analogue signal processing revision notes](/resources/aqa-a-level-physics-7408-analogue-signal-processing-aqa-alevel-revision-notes/).

## The five circuits

| Configuration | Input goes to | Result | Phase | Derivation? |
|---|---|---|---|---|
| Inverting | V₋ through R_in; V₊ at 0 V | V_out/V_in = −R_f/R_in | Inverted | Required |
| Non-inverting | V₊ directly; R_f and R₁ divider to V₋ | V_out/V_in = 1 + R_f/R₁ | In phase | Not required |
| Summing | Several resistors to V₋; V₊ at 0 V | V_out = −R_f(V₁/R₁ + V₂/R₂ + …) | Inverted | Not required |
| Difference | Matched networks on both inputs | V_out = (V₊ − V₋)R_f/R₁ | Follows the difference | Not required |
| Real op-amp | Any | gain × bandwidth = constant | — | — |

## Key terms

| Term | Meaning |
|---|---|
| Negative feedback | Part of the output returned to the inverting input, setting the gain by resistor values |
| Closed-loop gain | Gain of the whole circuit with feedback |
| Open-loop gain | Gain of the op-amp alone, with no feedback |
| Virtual earth | The inverting input held at 0 V by feedback in an inverting circuit, without a direct connection to 0 V |
| Virtual-earth analysis | Using V₋ ≈ 0 V and zero input current to find currents and gain |
| Input resistance (inverting circuit) | Equal to R_in, because V₋ is a virtual earth |
| Voltage follower | Non-inverting amplifier with gain 1 (R_f = 0, R₁ absent) |
| Clipping | Flattening of the output waveform where it saturates at the rails |
| Frequency response curve | Graph of gain against frequency, usually on log axes |
| Bandwidth | Range of frequencies over which the gain stays at its flat value |
| Gain–bandwidth product | Constant for a given op-amp: gain × bandwidth |

## The derivation in four lines

1. V₊ = 0; gain is huge and V_out finite, so V₋ ≈ 0 (virtual earth).
2. No current enters the op-amp, so the same current I flows through R_in and R_f.
3. I = V_in/R_in and I = (0 − V_out)/R_f.
4. So V_out/V_in = −R_f/R_in.

## Condensed recall

- Two working rules (output unsaturated): no input current; V₋ ≈ V₊.
- Inverting: input resistance = R_in, so a small R_in loads the source.
- Non-inverting: very high input resistance; gain never below 1.
- Summing: inputs do not interact because the junction is a virtual earth; binary-weighted resistors (R, 2R, 4R, 8R) give a digital-to-analogue converter.
- Difference: a voltage common to both inputs cancels; only the difference is amplified, which suits bridge sensors.
- Real op-amps: finite gain that falls with frequency; finite input resistance; output saturates just inside the rails.
- Gain × bandwidth: halving the gain doubles the bandwidth.
- Always check the answer against the supply voltage.

## Quick-check numbers

| Data | Result |
|---|---|
| Inverting, R_in = 2.2 kΩ, R_f = 33 kΩ | gain −15 |
| Non-inverting, R_f = 47 kΩ, R₁ = 4.7 kΩ | gain 11 |
| Summing, R_f = 10 kΩ, 0.40 V through 10 kΩ and 0.60 V through 20 kΩ | V_out = −0.70 V |
| Difference, R_f/R₁ = 50, inputs 1.32 V and 1.30 V | V_out = 1.0 V |
| Product 1.0 MHz, gain 40 | bandwidth 25 kHz |

## Exam traps

- Losing the minus sign for inverting and summing circuits.
- Using R_f/R₁ as the non-inverting gain.
- Quoting an output beyond the rails instead of stating saturation.
- Saying the inverting input is connected to earth.
- Leaving out "no current enters the op-amp" in the derivation.
- In summing questions, ignoring the sign of a negative input.
- Treating the open-loop gain as the closed-loop gain in bandwidth calculations.

## Self-test

1. State the gain of an inverting amplifier with R_in = 5.0 kΩ and R_f = 75 kΩ.
2. Explain what is meant by a virtual earth.
3. Why is the current in R_in equal to the current in R_f in an inverting amplifier?
4. Calculate R_f for a non-inverting amplifier of gain 21 with R₁ = 2.0 kΩ.
5. Which configuration should be used with a sensor that cannot supply current? Why?
6. A summing amplifier has R_f = 20 kΩ. Inputs are 0.50 V through 10 kΩ and −0.30 V through 20 kΩ. Calculate V_out.
7. A difference amplifier has R_f = 47 kΩ and R₁ = 4.7 kΩ. V₊ = 3.10 V and V₋ = 3.00 V. Calculate V_out.
8. An inverting amplifier with gain −30 has a ±9 V supply. Describe the output for an input of 0.40 V.
9. State two limitations of a real op-amp.
10. An op-amp has a gain–bandwidth product of 2.0 MHz. Find the bandwidth at a gain of 50.
11. What is the input resistance of an inverting amplifier with R_in = 4.7 kΩ?
12. What is the gain of a voltage follower, and what is it used for?

### Answers

1. −75/5.0 = −15.
2. The inverting input is held at (almost) 0 V by negative feedback, even though it is not connected to 0 V.
3. The op-amp has (effectively) infinite input resistance, so no current flows into the inverting input.
4. 21 = 1 + R_f/2.0 kΩ, so R_f = 40 kΩ.
5. Non-inverting: the input connects directly to V₊, giving a very high input resistance, so almost no current is drawn.
6. −20 kΩ × (0.50/10 kΩ − 0.30/20 kΩ) = −(1.0 − 0.30) = −0.70 V.
7. (3.10 − 3.00) × 47/4.7 = 1.0 V.
8. −12 V is predicted, beyond the rail, so the output saturates just inside −9 V.
9. Any two: finite open-loop gain; gain falls with frequency; finite input resistance; output saturates inside the rails.
10. 2.0 MHz/50 = 40 kHz.
11. 4.7 kΩ.
12. Gain 1; it supplies current to a load without drawing current from (loading) the source.

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13.4 Operational amplifier configurations (A-level only), within section 3.13 Electronics.
