---
title: "AQA A-Level Physics (7408): Operational amplifier"
resourceType: "study-guides"
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
description: "Study guide to AQA A-Level Physics 7408 section 3.13.4: inverting, non-inverting, summing and difference amplifiers, virtual earth and real op-amp limits."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section 3.13.4 of the AQA AS and A-level Physics specification (7407/7408), the operational amplifier in its feedback configurations: 3.13.4.1 inverting amplifier, 3.13.4.2 non-inverting amplifier, 3.13.4.3 summing amplifier (with the difference amplifier) and 3.13.4.4 real operational amplifiers. It is part of the A-level only Electronics option, assessed in Paper 3 Section B. The op-amp itself, its ideal properties and the comparator are in the [analogue signal processing study guide](/resources/aqa-a-level-physics-7408-analogue-signal-processing/); the [Electronics study guide](/resources/aqa-a-level-physics-electronics/) summarises the whole option. Follow this page with the [operational amplifier revision notes](/resources/aqa-a-level-physics-7408-operational-amplifier-revision-notes/) and the [operational amplifier practice questions](/resources/aqa-a-level-physics-7408-operational-amplifier-practice/).

## What the specification asks for

| Content statement | Required |
|---|---|
| 3.13.4.1 Inverting amplifier | Derivation of V_out/V_in = −R_f/R_in; calculations; meaning of virtual earth; virtual-earth analysis |
| 3.13.4.2 Non-inverting amplifier | V_out/V_in = 1 + R_f/R₁; derivation not required |
| 3.13.4.3 Summing and difference amplifiers | V_out = −R_f(V₁/R₁ + V₂/R₂ + V₃/R₃ + …); V_out = (V₊ − V₋)R_f/R₁; derivations not required |
| 3.13.4.4 Real operational amplifiers | Limitations; frequency response curve; gain × bandwidth = constant for a given device |

Only one derivation is required in this section: the inverting amplifier. Every other gain formula is used, not derived.

## Why feedback changes everything

Without feedback, an op-amp's output saturates for an input difference of a few tens of microvolts. **Negative feedback** connects part of the output back to the inverting input. If the output rises too far, it pulls V₋ up, which drives the output back down. The circuit settles where V₋ is almost exactly equal to V₊. The overall (closed-loop) gain is then set by resistor values, not by the large and variable open-loop gain. That is what makes these circuits predictable.

Two rules, valid while the output is not saturated, solve every configuration:

1. **No current flows into either input** (infinite input resistance).
2. **V₋ ≈ V₊** (very high open-loop gain with a finite output).

## Inverting amplifier

**Circuit.** The input V_in connects through R_in to the inverting input. A feedback resistor R_f connects the output to the inverting input. The non-inverting input is connected to 0 V.

### The derivation (required)

```
1. V₊ = 0 V. The open-loop gain is very large and V_out is finite,
   so V₊ − V₋ ≈ 0 and V₋ ≈ 0 V.
   V₋ is at 0 V without being connected to 0 V: a virtual earth.

2. No current enters the op-amp, so the current I through R_in
   also flows through R_f.

3. Current in R_in:  I = (V_in − 0) / R_in
   Current in R_f:   I = (0 − V_out) / R_f

4. V_in / R_in = −V_out / R_f   →   V_out / V_in = −R_f / R_in
```

Each numbered step carries credit, so state both assumptions in words. The minus sign shows that the output is inverted: a positive input gives a negative output, and a sine wave input comes out 180° out of phase.

**Input resistance.** Because V₋ is a virtual earth, the source sees a resistance of just R_in to 0 V. If R_in is small, the amplifier draws a large current from the source. This is a practical limit of the inverting design.

### Worked example 1: an inverting stage near its limit

R_in = 10 kΩ, R_f = 220 kΩ, supply ±15 V. The input is a sine wave of peak 0.50 V, then 0.80 V.

```
gain = −220 / 10 = −22
peak 0.50 V → output peak −22 × 0.50 = −11 V (inverted sine, 11 V peak)
peak 0.80 V → −17.6 V predicted; the output cannot pass the rails,
              so the tops and bottoms are clipped just inside ±15 V
```

Clipping distorts the waveform. To amplify the larger signal without distortion, reduce R_f or the input amplitude.

## Non-inverting amplifier

**Circuit.** The input goes straight to the non-inverting input. A potential divider of R_f (output to V₋) and R₁ (V₋ to 0 V) feeds a fraction of the output back to V₋.

```
V_out / V_in = 1 + R_f / R₁
```

- The output is **in phase** with the input.
- The gain is always at least 1.
- The input connects directly to V₊, so the input resistance is very high: the amplifier draws almost no current from the source. That makes it the better choice for a sensor that cannot supply current.

With R_f = 0 and R₁ removed, the gain is exactly 1. This **voltage follower** gives the same voltage as its input but can supply current to a load without loading the source.

### Worked example 2: designing for a gain of 11

R₁ = 1.0 kΩ. Find R_f for a gain of 11.

```
11 = 1 + R_f / 1.0 kΩ   →   R_f = 10 kΩ
```

A frequent slip is to use R_f/R₁ = 11 and choose 11 kΩ, which gives a gain of 12.

## Summing amplifier

**Circuit.** Several inputs, each through its own resistor, meet at the inverting input; R_f provides feedback; V₊ is at 0 V. Because V₋ is a virtual earth, each input drives its own current into the junction without affecting the others, and all the currents flow through R_f.

```
V_out = −R_f (V₁/R₁ + V₂/R₂ + V₃/R₃ + …)
```

**Audio mixer.** Equal input resistors with a variable R_f add the signals with equal weighting and adjustable volume. A variable resistor on one input changes that channel's weighting alone.

### Worked example 3: a 4-bit digital-to-analogue converter

R_f = 1.0 kΩ. Four logic inputs D₃ (most significant) to D₀ connect through 10 kΩ, 20 kΩ, 40 kΩ and 80 kΩ. Logic 1 is 5.0 V and logic 0 is 0 V. Find the output for the code 0110.

```
D₃ = 0, D₂ = 1, D₁ = 1, D₀ = 0
V_out = −1.0 kΩ × (5.0/20 kΩ + 5.0/40 kΩ) = −(0.25 + 0.125) = −0.375 V
one step (code 0001) = −1.0 × 5.0/80 = −0.0625 V, and 0110 = 6 steps
```

Halving the resistance for each more significant bit doubles its weighting, so the output is proportional to the binary number.

## Difference amplifier

**Circuit.** Two signals feed the two inputs through matched resistor networks: R₁ to the inverting input with R_f as feedback, and an identical R₁ and R_f pair on the non-inverting side.

```
V_out = (V₊ − V₋) R_f / R₁
```

Here V₊ and V₋ are the two signal voltages applied to the non-inverting and inverting sides. Any voltage common to both inputs cancels, so only the difference is amplified.

### Worked example 4: a strain gauge bridge

A bridge circuit gives 2.52 V on one side and 2.48 V on the other. The difference amplifier has R_f = 100 kΩ and R₁ = 1.0 kΩ.

```
V_out = (2.52 − 2.48) × 100 / 1.0 = 4.0 V
```

The 2.5 V shared by both sides would saturate an ordinary amplifier with a gain of 100; the difference amplifier ignores it.

## Real operational amplifiers

Limitations compared with the ideal device:

- **Finite open-loop gain**, which also **falls as frequency rises**.
- **Finite input resistance**, so a small input current flows.
- **Output saturation** just inside the supply rails, limiting the output swing.

The **frequency response curve** plots gain against frequency on logarithmic axes. With feedback, the gain is flat at the closed-loop value up to a cut-off, then falls along the open-loop curve. For a given device

```
gain × bandwidth = constant
```

### Worked example 5: trading gain for bandwidth

An op-amp has a gain–bandwidth product of 1.0 MHz and an open-loop gain of 1.0 × 10⁵.

```
open-loop bandwidth = 1.0 MHz / 1.0 × 10⁵ = 10 Hz
closed-loop gain 22 → bandwidth = 1.0 MHz / 22 = 45 kHz
closed-loop gain 11 → bandwidth = 1.0 MHz / 11 = 91 kHz
```

Without feedback, the full gain is available only up to about 10 Hz. Lowering the gain widens the bandwidth; two stages of modest gain in series can give a high overall gain over a wide band.

## Common mistakes

- Dropping the minus sign in inverting and summing results.
- Using R_f/R₁ for the non-inverting gain.
- Quoting an output beyond the supply rails without stating that it saturates.
- Calling the inverting input "earthed": it is at 0 V without a connection, a virtual earth.
- Stating that "current flows into the op-amp" in the derivation.
- Treating gain × bandwidth as the open-loop gain alone.

## Exam technique

- **Derive** or **show that** for the inverting amplifier: write the two assumptions, the equal currents and the algebra. A final formula alone earns nothing.
- **Calculate** questions: identify the configuration first, then check the answer against the rails.
- **Explain** a choice of configuration: compare input resistance and phase (inverting draws current and inverts; non-inverting has very high input resistance and keeps phase).
- **Sketch** questions on output waveforms: show inversion, the correct peak value and flat clipped tops if saturation occurs.

## Next steps

Condense the circuits with the [operational amplifier revision notes](/resources/aqa-a-level-physics-7408-operational-amplifier-revision-notes/) and test yourself with the [operational amplifier practice questions](/resources/aqa-a-level-physics-7408-operational-amplifier-practice/). Digital-to-analogue conversion links to [analogue and digital signals](/resources/aqa-a-level-physics-7408-analogue-and-digital-signals/).

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13.4 Operational amplifier configurations (A-level only), within section 3.13 Electronics.
