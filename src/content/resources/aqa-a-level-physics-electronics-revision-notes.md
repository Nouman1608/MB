---
title: "AQA A-Level Physics: Electronics (7408) -- Revision Notes"
seoTitle: "AQA A-Level Physics Electronics Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for the AQA A-Level Physics 7408 electronics option: key equations, device facts, op-amp and logic methods, and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These revision notes condense section 3.13 Electronics (3.13.1 to 3.13.6) of the AQA AS and A-level Physics specification (7407/7408, version 1.4, AS and A-level exams June 2016 onwards). The section is **A-level only**. It is one of the five **options** (sections 3.9 to 3.13); you study one, and it is assessed in Paper 3 Section B (35 marks). Paper 3 Section A assesses practical skills and data analysis.

For full explanations and worked examples, use the [study guide](/resources/aqa-a-level-physics-electronics/). Then test yourself with the [practice questions](/resources/aqa-a-level-physics-electronics-practice/). See also the [course hub](/boards/aqa/a-level/physics/), the [printable checklist](/checklists/aqa/a-level/physics/) and the [free diagnostics](/diagnostics/). Diode basics are in [Electricity](/resources/aqa-a-level-physics-electricity-revision-notes/).

## Key equations

| Quantity | Equation | Section |
|---|---|---|
| LC resonant frequency | f₀ = 1/(2π√(LC)) | 3.13.3.1 |
| Q factor | Q = f₀/f_B (f_B at 50% energy points) | 3.13.3.1 |
| Open-loop output | V_out = A_OL(V₊ − V₋) | 3.13.3.2 |
| Inverting amplifier | V_out/V_in = −R_f/R_in | 3.13.4.1 |
| Non-inverting amplifier | V_out/V_in = 1 + R_f/R₁ | 3.13.4.2 |
| Summing amplifier | V_out = −R_f(V₁/R₁ + V₂/R₂ + V₃/R₃ + …) | 3.13.4.3 |
| Difference amplifier | V_out = (V₊ − V₋)R_f/R₁ | 3.13.4.3 |
| Real op-amp | gain × bandwidth = constant | 3.13.4.4 |
| Astable | f = 1/T; duty cycle = mark/T; mark-to-space = mark/space | 3.13.5.3 |
| AM bandwidth | 2f_M | 3.13.6.4 |
| FM bandwidth | 2(Δf + f_M) | 3.13.6.4 |

Only the inverting amplifier needs a derivation. The specification says the LC, non-inverting, summing and difference results are not to be derived.

## 3.13.1 Devices in one line each

- **MOSFET (N-channel, enhancement mode only)**: drain, source, gate. Insulated gate, so **very high input resistance**. Off for V_GS < V_th; on above V_th. V_DS is drain–source pd. I_DSS is the data-sheet drain current with V_GS = 0 (a tiny leakage current for an enhancement device).
- **Zener diode**: anode and cathode; used reverse biased. Conducts at the **breakdown voltage** V_Z if the current is above the **minimum operating current**. With a series resistor: constant voltage source and reference voltage (use as a stabiliser not required).
- **Photodiode**: reverse biased (photoconductive mode); reverse current rises with light intensity. **Spectral response curve**: response against wavelength, with a peak and a long-wavelength cut-off. Optical detector; with a **scintillator** it detects particles.
- **Hall effect sensor**: output depends on magnetic flux density. Attitude monitoring; tachometer (one pulse per turn). Principles not required.

## Method boxes

**Zener series resistor**
1. Resistor current = load current + zener minimum current.
2. Resistor pd = supply − V_Z.
3. R(max) = pd / current. Pick the next value **below**.

**ADC quality**
1. Levels = 2ⁿ for n bits.
2. Step size = input range / 2ⁿ.
3. Highest frequency reproduced ≈ sampling rate / 2.
4. Data rate = samples per second × bits per sample (× channels).

**Op-amp circuit: which formula?**
1. Input to V₋ through a resistor, V₊ earthed → **inverting**.
2. Input straight to V₊, feedback divider to V₋ → **non-inverting**.
3. Several resistors meeting at V₋ → **summing**.
4. Signals on both inputs → **difference**.
5. No feedback resistor → **comparator** (output saturates).
6. Check the answer against the supply rails.

**Inverting-amplifier derivation (virtual earth)**
1. Gain is huge, output finite, so V₋ ≈ V₊ = 0 V.
2. No current enters the op-amp.
3. I = V_in/R_in = −V_out/R_f, so V_out/V_in = −R_f/R_in.

**Modulo-n counter**
1. Write n in binary.
2. AND together the outputs that are 1 in n.
3. Connect the AND output to reset. The counter shows 0 to n − 1.

**Reading an AM or FM graph**
1. Carrier frequency = 1 / (time for one fast oscillation).
2. Information frequency = 1 / (time for one repeat of the envelope or frequency pattern).
3. Carrier cycles per information cycle = f_carrier / f_M.

## 3.13.2 Analogue and digital: key facts

- Bit = one binary digit; byte = 8 bits. You need binary numbers 1 to 10, not binary arithmetic.
- Digital uses two voltage levels. **Quantisation** rounds each sample to a level; **sampling rate** sets how fast it can follow changes.
- More bits and a faster sampling rate improve quality but increase data.
- **Noise**: analogue noise is amplified along with the signal; digital pulses are **regenerated** by comparing with a threshold.
- **PCM**: each sample is sent as a binary code.
- Sensors (temperature, light, sound, strain) collect analogue data.

## 3.13.3 and 3.13.4 Filters and op-amps: key facts

- **LC filter** (parallel only): inductance is the analogue of mass, capacitance of the spring. The energy (voltage) response curve peaks at f₀; high Q gives a narrow peak. The current response curve is not required.
- **Ideal op-amp**: infinite open-loop gain, infinite input resistance; supply rails plus V₊, V₋ and output connections. Treat it as a system building block.
- **Comparator**: output goes to positive saturation when V₊ > V₋ and negative saturation when V₋ > V₊.
- **Real op-amp**: finite gain that falls with frequency, finite input resistance, output limited by the rails. On the frequency response curve, raising the closed-loop gain narrows the bandwidth.

## 3.13.5 Logic and counters: key facts

| Gate | Output is 1 when |
|---|---|
| AND (A · B) | both inputs 1 |
| NAND | not both inputs 1 |
| OR (A + B) | at least one input 1 |
| NOR | both inputs 0 |
| NOT (Ā) | input 0 |
| EOR | exactly one input 1 |

- **Binary counter**: n outputs, 2ⁿ states. **BCD counter**: 0 to 9. **Johnson counter**: n stages, 2n states, one bit changes per pulse.
- Counter inputs: clock (one count per pulse), reset (back to zero), up/down (sets the counting direction). Outputs: one logic line per stage, read together as the count.
- Astable: larger R or C in the external RC network → longer period, lower clock frequency.

## 3.13.6 Communication: key facts

- **Block diagram**: know the purpose of each stage. Transducers convert between the signal and electrical form; amplifiers raise signal strength; the ADC/DAC convert between analogue and digital; the multiplexer combines channels on one link and the demultiplexer separates them; the modulator puts the signal onto a carrier and the demodulator recovers it; the transmitter sends the signal along the path; the tuned receiver selects the wanted carrier.
- **Wire**: cheap, low bandwidth, interference. **Fibre**: high bandwidth, secure, low loss, costly to lay. **Radio/microwave**: no cable; microwaves are line of sight.
- **Ground wave**: long wavelengths diffract round the Earth. **Sky wave**: refracted and reflected by the ionosphere.
- **Satellites**: different up-link and down-link frequencies so the receiver is not de-sensed.
- **TDM**: channels share one link in turn, in time slots.
- **Data capacity** rises with bandwidth.

## Must-know distinctions

- **Zener vs photodiode**: both reverse biased; zener holds a voltage, photodiode passes a light-dependent current.
- **Open-loop vs closed-loop gain**: A_OL is the op-amp alone; R_f/R_in is the circuit with feedback.
- **Inverting vs non-inverting**: −R_f/R_in vs 1 + R_f/R₁; low vs very high input resistance.
- **Binary vs BCD vs Johnson**: 2ⁿ states vs 10 states vs 2n states.
- **Duty cycle vs mark-to-space**: mark/period vs mark/space.
- **AM vs FM bandwidth**: 2f_M vs 2(Δf + f_M).

## Quick self-test

1. How many quantisation levels does a 10-bit ADC have?
2. Calculate f₀ for L = 10 mH and C = 100 nF.
3. A filter has f₀ = 15.9 kHz and f_B = 0.53 kHz. Calculate Q.
4. Non-inverting amplifier, R_f = 90 kΩ, R₁ = 10 kΩ. Calculate the gain.
5. Why is the inverting input called a virtual earth?
6. An astable has mark 0.6 ms and space 0.4 ms. Find f, duty cycle and mark-to-space ratio.
7. FM with Δf = 25 kHz and f_M = 5 kHz. Find the bandwidth.
8. Gain–bandwidth product 2.0 MHz, closed-loop gain 40. Find the bandwidth.
9. How many states does a 4-stage Johnson counter have?
10. One channel sampled at 10 kHz with 12 bits per sample. Find the bit rate.
11. Which gate outputs 1 only when both inputs are 0?
12. Why do satellite up-links and down-links use different frequencies?

### Answers

1. 2¹⁰ = **1024**.
2. 1/(2π√(10×10⁻³ × 100×10⁻⁹)) = **5.03 kHz**.
3. 15.9/0.53 = **30**.
4. 1 + 90/10 = **10**.
5. V₊ is at 0 V and the huge gain keeps V₋ almost equal to it, but V₋ is not connected to earth.
6. T = 1.0 ms, so **f = 1.0 kHz**; duty cycle **60%**; mark-to-space **1.5 (3 : 2)**.
7. 2(25 + 5) = **60 kHz**.
8. 2.0 MHz/40 = **50 kHz**.
9. 2 × 4 = **8**.
10. 10 000 × 12 = **120 kbit s⁻¹**.
11. **NOR**.
12. So the satellite's strong transmitted signal does not **de-sense** its own receiver.

## Where marks are usually lost

- Choosing the zener resistor from the load current alone, forgetting the minimum zener current.
- Rounding the zener resistor up instead of down, which starves the diode.
- Writing 2n quantisation levels instead of 2ⁿ.
- Saying a virtual earth is "connected to 0 V".
- Leaving out the minus sign for inverting and summing amplifiers.
- Quoting an output larger than the supply rails instead of saying it saturates.
- Taking bandwidth at 50% voltage rather than 50% energy.
- Confusing duty cycle with mark-to-space ratio.
- Writing 2Δf + f_M for FM bandwidth.
- Describing internal gate circuits, which are not required.

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, version 1.4, July 2026, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13 Electronics (A-level only option).
