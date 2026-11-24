---
title: "AQA A-Level Physics (7408): Analogue signal processing"
resourceType: "study-guides"
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
description: "Study guide to AQA A-Level Physics 7408 section 3.13.3: parallel LC resonance filters, Q factor, the mass-spring analogy, the ideal op-amp and comparators."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section 3.13.3, Analogue signal processing, of the AQA AS and A-level Physics specification (7407/7408). It has two content statements: 3.13.3.1 LC resonance filters and 3.13.3.2 The ideal operational amplifier. The section belongs to the A-level only Electronics option, assessed in Paper 3 Section B. The [Electronics study guide](/resources/aqa-a-level-physics-electronics/) gives a short overview of the whole option; this page adds the detail behind tuning, response curves and comparator circuits. Afterwards, use the [analogue signal processing revision notes](/resources/aqa-a-level-physics-7408-analogue-signal-processing-revision-notes/) and the [analogue signal processing practice questions](/resources/aqa-a-level-physics-7408-analogue-signal-processing-practice/).

## What the specification asks for

| Content statement | Detail in the specification |
|---|---|
| 3.13.3.1 LC resonance filters | Resonant frequency f₀ = 1/(2π√(LC)); only parallel arrangements; analogy with a mass–spring system (inductance as mass, capacitance as spring); derivation not required; energy (voltage) response curve, with the current response curve not required; Q = f₀/f_B, where f_B is the bandwidth at the 50% energy points |
| 3.13.3.2 The ideal operational amplifier | Power supply and signal connections; infinite open-loop gain; infinite input resistance; open-loop transfer function for a real op-amp, V_out = A_OL(V₊ − V₋); use as a comparator; the op-amp treated as a system building block |

The op-amp circuits with feedback (inverting, non-inverting, summing and difference amplifiers) are section 3.13.4 and have their own [operational amplifier study guide](/resources/aqa-a-level-physics-7408-operational-amplifier/).

## LC resonance filters

### How a parallel LC circuit oscillates

Charge a capacitor and connect it across an inductor. The capacitor discharges through the inductor, and the growing current builds a magnetic field. When the capacitor is empty, the current is at its maximum and all the energy is in the inductor's magnetic field. The changing field then keeps the current flowing, charging the capacitor the other way. Energy passes back and forth between the electric field of the capacitor and the magnetic field of the inductor at the **resonant frequency**

```
f₀ = 1 / (2π√(LC))
```

with L in henries and C in farads. Resistance in the circuit converts some energy to heat on each cycle, so the oscillation dies away unless energy is supplied.

### The mass–spring analogy

| LC circuit | Mass–spring system |
|---|---|
| Inductance L opposes changes in current | Mass m opposes changes in velocity |
| Capacitance C stores energy in an electric field | Spring stores elastic potential energy |
| Energy in the inductor's magnetic field | Kinetic energy of the mass |
| Resistance removes energy | Damping removes energy |
| Larger L lowers f₀ | Larger m lowers the frequency |
| Larger C lowers f₀ | A less stiff (more easily stretched) spring lowers the frequency |

The specification asks for the analogy, not a derivation. Use it to predict directions of change: doubling L, like doubling the mass, divides the frequency by √2.

### Using the circuit as a filter

When a parallel LC circuit is driven by signals of many frequencies, such as all the radio signals picked up by an aerial, it responds strongly only near f₀. The **energy (voltage) response curve** plots the response against frequency: a sharp peak at f₀, falling away on both sides.

The **bandwidth** f_B is the width of the peak between the two frequencies at which the energy is 50% of its peak value. The **Q factor** is

```
Q = f₀ / f_B
```

A high Q means a narrow peak: the filter selects one frequency and rejects neighbours. A low Q means a broad peak that passes a wider band of frequencies. Lower resistance (less damping) gives a higher Q, just as a lightly damped oscillator has a sharper resonance.

**Reading the graph.** If the graph shows energy, read the bandwidth at half the peak height. Energy is proportional to the square of voltage, so if the graph shows voltage, the 50% energy points are where the voltage is 1/√2, or about 0.71, of its peak. Check the axis label before drawing your horizontal line.

### Worked example 1: tuning a radio

A receiver uses a fixed 220 µH inductor in parallel with a variable capacitor. Find the range of capacitance needed to tune from 540 kHz to 1600 kHz.

```
C = 1 / (4π² f₀² L)

at 540 kHz:  C = 1 / (4π² × (5.40 × 10⁵)² × 2.20 × 10⁻⁴) = 3.95 × 10⁻¹⁰ F ≈ 395 pF
at 1600 kHz: C = 1 / (4π² × (1.60 × 10⁶)² × 2.20 × 10⁻⁴) = 4.50 × 10⁻¹¹ F ≈ 45 pF
```

The highest frequency needs the smallest capacitance. A frequency ratio of about 3 needs a capacitance ratio of about 9, because f₀ ∝ 1/√C.

### Worked example 2: Q factor from a response curve

A voltage response curve peaks at 50.0 kHz. The voltage falls to 0.71 of its peak value at 48.0 kHz and 52.5 kHz. Find the bandwidth and Q.

```
f_B = 52.5 − 48.0 = 4.5 kHz
Q = 50.0 / 4.5 = 11
```

Because these points are at 0.71 of the peak voltage, they are the 50% energy points, so this is the bandwidth the specification defines.

## The ideal operational amplifier

An **operational amplifier** (op-amp) is a high-gain amplifier treated as a building block: you need its connections and behaviour, not its internal circuit.

**Connections.**
- Two power supply connections, usually +V_s and −V_s (with a 0 V reference), which set the limits of the output.
- The **non-inverting input**, V₊.
- The **inverting input**, V₋.
- The output, V_out, measured relative to 0 V.

**Ideal properties.**
- **Infinite open-loop gain**: any difference between the inputs, however small, would give an unlimited output.
- **Infinite input resistance**: no current flows into either input, so the op-amp does not load the circuit feeding it.

**A real op-amp without feedback** follows the open-loop transfer function

```
V_out = A_OL (V₊ − V₋)
```

where A_OL is the open-loop gain, very large (commonly of order 10⁵) but finite. The output cannot exceed the supply voltages: once A_OL(V₊ − V₋) would go beyond them, the output **saturates** just inside the supply rails.

### Worked example 3: how small a difference saturates the output?

An op-amp has A_OL = 2.0 × 10⁵ and saturates at ±8.0 V. Find the largest input difference that does not saturate the output.

```
V₊ − V₋ = V_out / A_OL = 8.0 / (2.0 × 10⁵) = 4.0 × 10⁻⁵ V = 40 µV
```

Any difference larger than 40 µV drives the output to +8.0 V or −8.0 V. This is why an op-amp without feedback acts as a switch rather than a linear amplifier.

## The op-amp as a comparator

A **comparator** compares two voltages. With no feedback:

- V₊ > V₋ gives V_out at positive saturation.
- V₊ < V₋ gives V_out at negative saturation.

One input is usually a fixed **reference voltage** from a potential divider; the other comes from a sensor in a potential divider. The output switches when the sensor voltage crosses the reference.

### Worked example 4: a dark-activated switch

An op-amp is powered from ±9.0 V. V₋ is held at a reference from a potential divider of 20 kΩ (top) and 10 kΩ (bottom) between +9.0 V and 0 V. V₊ comes from a 4.7 kΩ fixed resistor (top) and a light-dependent resistor (bottom) between +9.0 V and 0 V. Find the reference voltage, the LDR resistance at which the output switches, and the output state in bright light (LDR 1.0 kΩ) and in darkness (LDR 10 kΩ).

```
reference V₋ = 9.0 × 10 / (20 + 10) = 3.0 V

switching: 9.0 × R / (R + 4.7 kΩ) = 3.0  →  R = 2.35 kΩ

bright: V₊ = 9.0 × 1.0 / 5.7 = 1.6 V  < 3.0 V → output negative saturation
dark:   V₊ = 9.0 × 10 / 14.7 = 6.1 V  > 3.0 V → output positive saturation
```

The positive output in darkness can switch on a lamp through a driver such as a MOSFET. Swapping the two inputs reverses the action, giving a light-activated switch. Replacing the reference resistors with a variable resistor lets the user set the switching light level. Comparators also restore noisy digital pulses, as described in the [analogue and digital signals study guide](/resources/aqa-a-level-physics-7408-analogue-and-digital-signals/).

## Common mistakes

- Forgetting to square f₀ when rearranging for L or C.
- Leaving capacitances in pF or µF, or inductances in mH, inside the formula.
- Reading the bandwidth at half the peak **voltage** instead of 0.71 of it.
- Pairing capacitance with mass: it is inductance that plays the role of mass.
- Treating the open-loop gain of a real op-amp as infinite in a calculation; use the A_OL given.
- Giving a comparator output beyond the supply rails, or stating the wrong sign when V₊ and V₋ are swapped.

## Exam technique

- **Calculate** questions on LC circuits reward a rearranged equation before substitution; give f₀ to 2 or 3 significant figures with the unit.
- **Sketch** questions on the response curve need a peak at f₀, a symmetrical fall on both sides, and a narrower, taller peak for higher Q.
- **Explain** questions on comparators need the comparison stated with the inputs named: "V₊ rises above V₋, so the output switches to positive saturation".
- **Describe** questions on the analogy need the pairs named and the energy exchange explained.

## More on this topic

Condense this page with the [analogue signal processing revision notes](/resources/aqa-a-level-physics-7408-analogue-signal-processing-revision-notes/), test yourself with the [analogue signal processing practice questions](/resources/aqa-a-level-physics-7408-analogue-signal-processing-practice/), and carry the op-amp forward into feedback circuits with the [operational amplifier study guide](/resources/aqa-a-level-physics-7408-operational-amplifier/).

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13.3 Analogue signal processing (A-level only), within section 3.13 Electronics.
