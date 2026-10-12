---
title: "OxfordAQA International AS and A-level Physics: Alternating currents and the transformer (9630) -- Revision Notes"
seoTitle: "OxfordAQA A-level Physics AC and Transformer Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Alternating currents and the transformer"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 123
syllabusTopics:
  - qualification: "a-level"
    topic: "magnetic-fields-oxfordaqa-alevel"
    subtopic: "alternating-currents-oxfordaqa-alevel-physics"
  - qualification: "a-level"
    topic: "magnetic-fields-oxfordaqa-alevel"
    subtopic: "the-operation-of-a-transformer-oxfordaqa-alevel-physics"
description: "Condensed revision notes on rms values, oscilloscope controls, the transformer, energy losses and power lines for OxfordAQA A-level Physics (9630)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense sections 3.10.5 (Alternating currents) and 3.10.6 (The operation of a transformer) of the OxfordAQA International AS and A-level Physics (9630) specification, Version 4.4. Section 3.10 is International A-level only. For full explanations, read the [study guide](/resources/oxfordaqa-a-level-physics-alternating-currents-and-the-transformer/). Test yourself with the [practice questions](/resources/oxfordaqa-a-level-physics-alternating-currents-and-the-transformer-practice/), use the [course hub](/boards/oxfordaqa/a-level/physics/) and tick points off the [printable checklist](/checklists/oxfordaqa/a-level/physics/). Not sure where to start? Try a [free diagnostic](/diagnostics/).

## Key definitions

- **Peak value (Vo, Io):** the maximum value, measured from zero.
- **Peak-to-peak value:** from the top of a peak to the bottom of a trough. For a sine wave it is 2Vo or 2Io.
- **Period T:** time for one cycle. Frequency f = 1/T.
- **Root mean square (rms) value:** the steady dc value that gives the same mean power in a given resistor. Found by squaring, averaging over a cycle, then square-rooting.
- **Step-up transformer:** secondary voltage greater than primary (Ns > Np).
- **Step-down transformer:** secondary voltage less than primary (Ns < Np).
- **Efficiency:** useful output power divided by input power.

## Formulae

| Quantity | Equation | Notes |
|---|---|---|
| rms current | Irms = Io/√2 | Sinusoidal only |
| rms voltage | Vrms = Vo/√2 | Sinusoidal only |
| Peak-to-peak | 2Vo, 2Io | Sinusoidal |
| Frequency | f = 1/T | T from the trace |
| Mean power | P = IrmsVrms = Irms²R = Vrms²/R | Uses rms values |
| Transformer | Ns/Np = Vs/Vp | Ideal transformer |
| Efficiency | IsVs/IpVp | Fraction, or multiply by 100 |
| Line current | I = P/V | P is the power transmitted |
| Line power loss | I²R | R is line resistance |
| Line p.d. drop | IR | Not the supply voltage |

## Method boxes

**Converting between rms, peak and peak-to-peak**

1. Identify what you are given: rms, peak or peak-to-peak.
2. Go to the peak value first. From rms multiply by √2. From peak-to-peak divide by 2.
3. Then go to the value wanted. Peak-to-peak is twice the peak. rms is peak divided by √2.
4. Say clearly which value you are quoting.

**Reading an oscilloscope**

1. Note the Y-gain (volts per division) and the time-base (time per division).
2. Voltage: count divisions vertically and multiply by the Y-gain.
3. Period: count divisions for one cycle and multiply by the time-base.
4. Frequency: 1 divided by the period.
5. For better accuracy, measure several cycles across the screen and divide.

**Transformer calculation**

1. Write Ns/Np = Vs/Vp and fill in the known values.
2. Find the missing turns or voltage.
3. For currents, use IpVp for input power and IsVs for output power.
4. Efficiency = output power / input power.

**Power line calculation**

1. Current in the line: I = P/V.
2. Power lost: I²R.
3. Fraction lost: I²R divided by P.
4. P.d. lost along the line: IR.

## Oscilloscope controls

| Control | Effect |
|---|---|
| Y-gain | Volts per vertical division. Larger setting, smaller trace |
| Time-base | Time per horizontal division. Larger setting, fewer cycles displayed |
| Y-shift and X-shift | Move the trace without changing the signal |
| Trigger | Holds the trace steady by starting each sweep at the same point |
| dc/ac input (where fitted) | dc shows the whole signal. ac blocks a steady dc component |

As a dc voltmeter, the trace moves by a number of divisions. As an ac voltmeter, read the height of the wave and convert.

## Must-know distinctions

| Idea | Compare |
|---|---|
| Peak and rms | Peak is the maximum. rms is the equivalent heating value, lower by √2 |
| Peak and peak-to-peak | Peak-to-peak is twice the peak |
| Eddy currents and hysteresis | Eddy currents are induced currents in the core. Hysteresis is energy used to reverse the core's magnetisation |
| Power lost in a line and p.d. lost | Power is I²R. P.d. is IR |
| Step-up voltage and current | Voltage goes up, current goes down |

## Causes of inefficiency

- **Coil resistance:** I²R heating. Use thick copper wire.
- **Eddy currents:** the changing flux induces currents in the core. Use a laminated core with insulation between layers.
- **Hysteresis:** energy repeatedly reverses the core magnetisation. Use soft iron.
- **Flux leakage:** some flux does not link both coils. Wind the coils close together on a closed core.

## Worked reminders

**rms values.** A sinusoidal supply has peak voltage 25 V. Vrms = 25/√2 = 17.7 V and the peak-to-peak value is 50 V.

**Current conversion.** A current has rms value 0.75 A. Io = 0.75 × √2 = 1.06 A and the peak-to-peak value is 2.12 A.

**Transformer.** Np = 500 and Ns = 2000, with a 12 V primary. Vs = 12 × 2000/500 = 48 V. If the transformer is ideal and the secondary delivers 0.50 A, the input power is 48 × 0.50 = 24 W, so Ip = 24/12 = 2.0 A.

**Efficiency.** A transformer delivers 34 W and is 85% efficient. Input power = 34/0.85 = 40 W. On a 230 V supply Ip = 40/230 = 0.17 A.

**Line loss.** 1.2 MW is sent at 60 kV through a line of resistance 8.0 Ω. I = 1.2 × 10⁶/60 000 = 20 A. Loss = 20² × 8.0 = 3200 W = 3.2 kW. If the voltage is raised tenfold, the current falls tenfold and the loss falls by a factor of 100.

## Required practical 7: efficiency of a transformer

The aim is to find how the efficiency depends on the load or on the transformer itself.

- Use a low-voltage ac supply. Never connect a laboratory transformer to the mains.
- Measure Vp, Ip, Vs and Is with ac meters and a variable load across the secondary.
- Calculate efficiency = IsVs/IpVp for each load. Plot efficiency against secondary current.
- Vary one quantity at a time: load, turns ratio or core material.
- Control variables: keep the supply voltage and frequency fixed while the load changes.
- Expect efficiency to fall at large load currents, because the I²R heating in the coils grows with current squared.
- Improve reliability by repeating readings, letting the coils cool between runs and checking the meters on their ac range.

## Quick self-test

1. A sinusoidal voltage has a peak value of 8.5 V. Find its rms value.
2. A sinusoidal current has an rms value of 3.0 A. Find its peak and peak-to-peak values.
3. A signal has period 25 ms. Find its frequency. How many divisions does one cycle occupy with the time-base on 5.0 ms per division?
4. A sinusoidal supply is 6.0 V rms. Find the peak-to-peak voltage.
5. A step-down transformer has a turns ratio Np : Ns = 40 : 1 and a primary of 230 V. Find the secondary voltage.
6. A transformer takes 50 W and delivers 46 W. Find the efficiency.
7. A line carries 1.2 MW at 60 kV. Find the current. If the line resistance is 8.0 Ω, find the power loss.
8. An oscilloscope trace is 5.6 divisions peak to peak on 0.50 V per division. Find the peak voltage.
9. State why a transformer will not work from a direct supply.
10. Give two reasons why high-voltage transmission wastes less power.
11. A transformer is 85% efficient and delivers 34 W. Find the input power.

### Answers

1. 8.5/√2 = **6.0 V**
2. Io = 3.0 × √2 = **4.2 A**; peak-to-peak = **8.5 A**
3. f = 1/0.025 = **40 Hz**; 25/5.0 = **5.0 divisions**
4. Vo = 6.0 × √2 = 8.49 V, so peak-to-peak = **17 V**
5. Vs = 230/40 = **5.75 V** (5.8 V to 2 s.f.)
6. 46/50 = **0.92, or 92%**
7. I = 1.2 × 10⁶/60 000 = **20 A**; loss = 20² × 8.0 = **3.2 kW**
8. Peak-to-peak = 5.6 × 0.50 = 2.8 V, so the peak is **1.4 V**
9. A steady current gives a steady flux, so there is no change of flux linkage in the secondary and no emf is induced.
10. For the same power, a higher voltage means a smaller current. The loss I²R falls with the square of the current.
11. Input = 34/0.85 = **40 W**

## Where marks are usually lost

- Applying Vo/√2 to a waveform that is not sinusoidal.
- Giving a peak value when the question asks for rms, or the reverse.
- Forgetting to double the peak value to get peak-to-peak.
- Counting divisions on an oscilloscope but not multiplying by the setting.
- Taking the period from half a cycle and doubling the frequency.
- Using V²/R with a peak voltage when the question wants mean power.
- Putting the power-line voltage into I²R in place of the current.
- Writing "energy is lost as heat" with no cause, such as eddy currents or coil resistance.
- Saying a laminated core "stops" eddy currents. It reduces them by cutting the paths available.
- Calculating efficiency from the voltages alone, when it needs the currents too: IsVs/IpVp.
- Quoting efficiency above 100%, which means input and output have been swapped.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), specification Version 4.4, for exams from May/June 2020 onwards, published by OxfordAQA. These notes cover sections 3.10.5 and 3.10.6 and Required practical 7.
