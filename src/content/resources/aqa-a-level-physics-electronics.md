---
title: "AQA A-Level Physics: Electronics (7408)"
seoTitle: "AQA A-Level Physics Electronics Option Study Guide"
resourceType: "study-guides"
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
description: "Study guide to the AQA A-Level Physics 7408 electronics option: MOSFETs, zener diodes, sampling, LC filters, op-amps, logic, counters and AM/FM."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches section 3.13 Electronics (3.13.1 to 3.13.6) of the AQA AS and A-level Physics specification (7407/7408, version 1.4, AS and A-level exams June 2016 onwards). Section 3.13 is **A-level only** and one of the five **options** (sections 3.9 to 3.13): you study one, assessed in Paper 3 Section B (35 marks). Paper 3 Section A assesses practical skills and data analysis. The section lists no required practicals.

Next, use the [revision notes](/resources/aqa-a-level-physics-electronics-revision-notes/) and [practice questions](/resources/aqa-a-level-physics-electronics-practice/), the [course hub](/boards/aqa/a-level/physics/), the [printable checklist](/checklists/aqa/a-level/physics/) and the [free diagnostics](/diagnostics/). Diode I–V curves are in [Electricity](/resources/aqa-a-level-physics-electricity/); RC charging in [Fields and their consequences](/resources/aqa-a-level-physics-fields-and-their-consequences/).

## What this topic covers

| Specification (all A-level only) | You must be able to |
|---|---|
| 3.13.1.1 MOSFET | Structure, terminals, V_DS, V_GS, I_DSS, V_th; switch; high input resistance |
| 3.13.1.2 Zener diode | Characteristic; constant voltage source; reference voltage |
| 3.13.1.3 Photodiode | Characteristic and spectral response; detector; scintillator |
| 3.13.1.4 Hall effect sensor | Attitude sensing; tachometer |
| 3.13.2.1 Analogue and digital | Bits, bytes, sampling, quantisation, noise, PCM |
| 3.13.3.1 LC resonance filters | f₀, Q factor, mass–spring analogy |
| 3.13.3.2 Ideal op-amp | Ideal properties; open-loop gain; comparator |
| 3.13.4.1–3.13.4.4 Op-amp circuits | Inverting (derive), non-inverting, summing, difference; real op-amps |
| 3.13.5.1–3.13.5.3 Digital processing | Boolean algebra and gates; counters; astables |
| 3.13.6.1–3.13.6.4 Communication | Block diagram, media, TDM, AM and FM |

## 3.13.1 Discrete semiconductor devices

### MOSFET (N-channel, enhancement mode)

Terminals: **drain**, **source** and **gate**. A thin insulating oxide layer separates the gate, so almost no gate current flows: the input resistance is **very high**.

- **V_GS**: gate–source voltage. **V_DS**: drain–source voltage.
- **V_th**: threshold voltage. Below it no channel forms and drain current is almost zero; above it current flows drain to source.
- **I_DSS**: on data sheets, the drain current with gate shorted to source (V_GS = 0); for an enhancement device, a tiny leakage current. If a question defines it differently, use its definition.

On the characteristic (I_D against V_DS for several V_GS), the current rises then levels off; larger V_GS gives a larger current. **As a switch**: V_GS below V_th is off; V_GS well above V_th is fully on with a small V_DS, so a load in the drain circuit gets almost the full supply.

### Zener diode

A zener diode has an **anode** and a **cathode** and is used **reverse biased**. It passes almost no current until the **zener breakdown voltage** V_Z, then current rises steeply at almost constant voltage. Below the **typical minimum operating current** the voltage is not held at V_Z. With a series resistor it forms a **constant voltage source** or **reference voltage**; the resistor drops the rest of the supply.

**Worked example 1.** A 12 V supply, a 5.1 V zener (minimum current 5.0 mA) and a load drawing 20 mA. Find the largest series resistor.

```
resistor current ≥ 20 + 5.0 = 25 mA
R = (12 − 5.1) / 0.025 = 276 Ω   → use 270 Ω
check: I = 25.6 mA, so the zener gets 5.6 mA
```

### Photodiode

Used **reverse biased** (photoconductive mode): the tiny dark current increases with light intensity. The **characteristic curves** (I against V for several intensities) are almost flat in reverse bias, with current roughly proportional to intensity. The **spectral response curve** (response against wavelength) peaks, then falls to zero above a cut-off wavelength where photons have too little energy. Uses: a **detector in optical systems** (such as a fibre receiver), and with a **scintillator**, where a particle makes a flash of light that the photodiode turns into a current pulse.

### Hall effect sensor

Its output voltage depends on the flux density through it (principles not required). **Attitude**: the measured component of the Earth's field shows the orientation of a craft or phone. **Tachometer**: a magnet on a shaft passes the sensor once per turn; pulses per second × 60 gives rpm.

## 3.13.2 Analogue and digital signals

An **analogue** signal can take any value in a range. A **digital** signal uses **two voltage levels** (1 and 0). A **bit** is one binary digit; a **byte** is 8 bits. Sensors such as microphones and thermistors give analogue data.

Analogue-to-digital conversion:
- **Sampling**: measure at regular intervals; the **sampling rate** is samples per second. Sample at **at least twice** the highest frequency you need.
- **Quantisation**: each sample is rounded to one of 2ⁿ levels (n bits per sample), giving **quantisation error**.
- More bits gives smaller steps; a higher sampling rate catches faster changes. Both improve quality but raise the data rate.
- **Pulse code modulation (PCM)**: each sample is sent as a binary code of pulses.

**Worked example 2.** An 8-bit ADC covers 0 to 2.56 V and samples at 8.0 kHz.

```
levels = 2⁸ = 256       step = 2.56/256 = 0.010 V
highest frequency reproduced ≈ 8.0/2 = 4.0 kHz
data rate = 8000 × 8 = 64 000 bit s⁻¹
```

**Noise.** Noise adds random voltage to any signal; amplifying an analogue signal amplifies its noise. A digital signal can be **regenerated**: a comparator checks each pulse against a threshold and outputs a clean 1 or 0, removing noise unless it flips a bit.

Digital sampling: **advantages** are noise-free regeneration and easy storage, processing and multiplexing; **disadvantages** are quantisation error, more bandwidth and lost detail between samples.

## 3.13.3 Analogue signal processing

### LC resonance filters (parallel only)

A capacitor in **parallel** with an inductor resonates at **f₀ = 1/(2π√(LC))**. Energy moves between capacitor and inductor, like a mass–spring system: **inductance ↔ mass**, **capacitance ↔ spring** (no derivation). The **energy (voltage) response curve** peaks at f₀; **bandwidth** f_B is between the 50% energy points, and **Q = f₀/f_B**. High Q means a narrow peak.

**Worked example 3.** L = 2.5 mH, C = 10 nF, f_B = 1.6 kHz.

```
f₀ = 1/(2π√(2.5×10⁻³ × 10×10⁻⁹)) = 1/(2π × 5.0×10⁻⁶) = 31.8 kHz
Q = 31.8/1.6 = 19.9 ≈ 20
```

### The ideal operational amplifier

Connections: **power supply** rails (+V_s, −V_s), **non-inverting input** V₊, **inverting input** V₋ and output. The ideal op-amp has **infinite open-loop gain** and **infinite input resistance** (no current into the inputs). For a real op-amp without feedback:

```
V_out = A_OL (V₊ − V₋)
```

The output cannot pass the rails: it **saturates**. **Comparator**: with no feedback, a tiny difference saturates the output, positive if V₊ > V₋, otherwise negative. With A_OL = 2 × 10⁵, a difference of 100 µV would need 20 V, so on a ±9 V supply the output is saturated.

## 3.13.4 Operational amplifier configurations

### Inverting amplifier (derivation required)

Input via R_in to V₋; R_f from output to V₋; V₊ earthed. The gain is huge and the output unsaturated, so V₋ ≈ V₊ = 0: a **virtual earth**. No current enters the op-amp, so the R_in current equals the R_f current:

```
(V_in − 0)/R_in = (0 − V_out)/R_f   →   V_out/V_in = −R_f/R_in
```

**Worked example 4.** R_in = 12 kΩ, R_f = 180 kΩ, supply ±9 V.

```
gain = −180/12 = −15;   V_in = 0.30 V → V_out = −4.5 V
V_in = 0.80 V → −12 V predicted, so output saturates just inside −9 V
```

### Non-inverting, summing and difference (no derivations)

```
non-inverting:  V_out/V_in = 1 + R_f/R₁
summing:        V_out = −R_f (V₁/R₁ + V₂/R₂ + V₃/R₃ + …)
difference:     V_out = (V₊ − V₋) R_f/R₁
```

**Worked example 5.** Summing amplifier, R_f = 10 kΩ; inputs of 1.0 V through 10 kΩ, 20 kΩ and 40 kΩ.

```
V_out = −10k × (1.0/10k + 1.0/20k + 1.0/40k) = −(1.0 + 0.50 + 0.25) = −1.75 V
```

The resistors weight the inputs 4 : 2 : 1, like a simple digital-to-analogue converter. For the difference amplifier with R_f/R₁ = 10, V₊ = 1.25 V and V₋ = 1.10 V: V_out = 0.15 × 10 = 1.5 V.

### Real operational amplifiers

Limitations: finite open-loop gain, falling with frequency; finite input resistance; saturation inside the rails. The **frequency response curve** (log gain against log frequency) is flat, then falls. For a given device, **gain × bandwidth = constant**. With a gain–bandwidth product of 1.0 MHz, an amplifier set to a gain of 50 has a bandwidth of 1.0 MHz/50 = 20 kHz.

## 3.13.5 Digital signal processing

### Combinational logic

Notation: Ā = NOT A; A · B = A AND B; A + B = A OR B. Gates: AND, NAND, OR, NOR, NOT and EOR (1 when exactly one input is 1), treated as building blocks.

**Worked example 6.** Design a circuit for Q = A · B̄ + C.

Truth table (ABC → Q): 000→0, 001→1, 010→0, 011→1, 100→1, 101→1, 110→0, 111→1.

Circuit: B through NOT; that and A into AND; its output and C into OR.

### Sequential logic (counters)

Inputs: **clock** (advance one count per pulse), **reset** (to zero), **up/down**. Outputs are binary lines.
- **Binary counter**: n outputs count 0 to 2ⁿ − 1 and repeat.
- **BCD counter**: four outputs count 0 to 9, then reset to 0.
- **Johnson counter**: n stages give 2n states, one output changing per pulse (3 stages: 000, 100, 110, 111, 011, 001).
- **Modulo-n counter**: logic drives reset when the count reaches n. For modulo-6, AND the outputs worth 4 and 2: at 110 it resets at once, so it shows 0 to 5.

### Astables

An **astable** oscillator provides the **clock pulse**. **Period** T = mark time + space time; **frequency** f = 1/T; **pulse width** = mark time; **duty cycle** = mark/T; **mark-to-space ratio** = mark/space. An external RC network sets the frequency: larger R or C gives a longer period. Mark 3.0 ms, space 1.0 ms gives T = 4.0 ms, f = 250 Hz, duty cycle 75%, mark-to-space 3 : 1.

## 3.13.6 Data communication systems

**Block diagram.** A typical real-time link (know each stage's purpose): input transducer → amplifier → ADC → multiplexer → modulator (with carrier oscillator) → transmitter → path → tuned receiver and amplifier → demodulator → demultiplexer → DAC → amplifier → output transducer.

**Transmission media.**

| Medium | Points |
|---|---|
| Metal wire | Cheap; lower bandwidth, more attenuation and interference, easier to tap |
| Optic fibre | High bandwidth, low attenuation, no electrical interference, secure; costly to install |
| Radio | No cable; **ground waves** (long wavelengths) diffract round the Earth's surface; **sky waves** (short wavelengths) are refracted and reflected by the ionosphere |
| Microwave | High bandwidth; line of sight; used for satellite links at gigahertz frequencies |

**Up-links and down-links use different frequencies** so a satellite's transmitter does not de-sense its receiver.

**Time-division multiplexing.** Channels take turns in time slots on one link; the receiver separates them by synchronised timing. Four channels, each sampled at 8.0 kHz with 8 bits, need 4 × 8000 × 8 = 256 kbit s⁻¹.

**AM and FM.** The **information signal** (frequency f_M) modulates a high-frequency **carrier wave**: its amplitude in **AM**, its frequency (peak deviation Δf) in **FM**. On a voltage–time graph the fast oscillations give the carrier frequency; the repeat of the envelope (AM) or of the frequency change (FM) gives the information frequency.

```
AM bandwidth = 2 f_M        FM bandwidth = 2(Δf + f_M)
```

f_M = 4.5 kHz gives an AM bandwidth of 9.0 kHz, so a 270 kHz band holds 30 channels. Δf = 75 kHz, f_M = 15 kHz gives an FM bandwidth of 180 kHz. More bandwidth means more **data capacity**; fibre and microwaves offer far more than wire or long-wave radio.

## Common errors

- Forgetting the zener's minimum current when choosing the series resistor.
- Using 2n instead of 2ⁿ quantisation levels.
- Dropping the minus sign in inverting and summing gains.
- Using f_M instead of Δf + f_M for FM.

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, version 1.4, July 2026, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13 Electronics (A-level only option).
