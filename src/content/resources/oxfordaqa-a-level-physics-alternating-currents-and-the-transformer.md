---
title: "OxfordAQA International AS and A-level Physics: Alternating currents and the transformer (9630)"
seoTitle: "OxfordAQA A-level Physics AC and Transformers Guide"
resourceType: "study-guides"
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
description: "Study guide to rms and peak values, oscilloscope use, the transformer equation, efficiency and power lines for OxfordAQA A-level Physics (9630)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide follows the OxfordAQA International AS and A-level Physics (9630) specification, Version 4.4, for exams from May/June 2020 onwards. It covers sections 3.10.5 (Alternating currents) and 3.10.6 (The operation of a transformer). Section 3.10, Magnetic fields, is marked International A-level only, so this content is not part of the International AS. Use the guide with the [course hub](/boards/oxfordaqa/a-level/physics/) and the [printable checklist](/checklists/oxfordaqa/a-level/physics/).

Companion pages: the [revision notes](/resources/oxfordaqa-a-level-physics-alternating-currents-and-the-transformer-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-physics-alternating-currents-and-the-transformer-practice/). To find your weak spots first, try the [free diagnostics](/diagnostics/).

## What 3.10.5 and 3.10.6 ask you to do

| Specification statement | What you must be able to do |
|---|---|
| 3.10.5 Sinusoidal voltages and currents; rms, peak and peak-to-peak values | Convert between the three for a sine wave only |
| Irms = Io/√2 and Vrms = Vo/√2 | Use both, including for mains values |
| Mains peak and peak-to-peak voltages | Work them out from the rms value |
| Oscilloscope as dc and ac voltmeter; time intervals; frequency; ac waveforms | Read a trace and use the controls |
| 3.10.6 Transformer equation Ns/Np = Vs/Vp | Find turns or voltages |
| Efficiency = IsVs/IpVp | Calculate it and explain the energy losses |
| Transmission at high voltage | Calculate power and voltage losses in a line |
| Required practical 7 | Describe and evaluate an efficiency investigation |

You are not asked to know how an oscilloscope is built inside, but you must know how its controls work. Waveforms other than sinusoidal are outside this content.

## Describing an alternating current

An alternating current changes direction continually. A sinusoidal supply gives a voltage V = Vo sin ωt, where Vo is the **peak value** (maximum, measured from zero) and ω = 2πf.

- **Peak value** Vo: the maximum displacement from zero.
- **Peak-to-peak value**: from the top of one peak to the bottom of the next, so exactly 2Vo for a sine wave.
- **Period** T: time for one complete cycle, with f = 1/T.

The same words apply to current: Io and 2Io.

## The root mean square value

The average of a sine wave over a cycle is zero, so the mean value says nothing about its heating effect. Instead we use the **root mean square (rms) value**: the steady direct current or voltage that gives the same mean power in a given resistor.

The name tells you how to find it. Square the values, take the mean, then take the square root. For a sinusoidal wave the result is:

Irms = Io/√2    Vrms = Vo/√2

These two results hold for sinusoidal waveforms only. A square wave or a triangular wave gives a different factor.

Because the rms values act like direct values in power calculations, the mean power in a resistor R is

P = Irms Vrms = Irms² R = Vrms²/R

Using peak values instead, P = IoVo/2. Note that the maximum instantaneous power is IoVo, twice the mean.

### Worked example: a heater on the mains

A heater is rated 2.0 kW on a supply of 230 V rms. Find the rms current, the peak current and the resistance.

- Irms = P/Vrms = 2000/230 = **8.7 A**
- Io = √2 × 8.70 = **12 A**
- R = Vrms²/P = 230²/2000 = **26 Ω**

The resistance check: Vrms/Irms = 230/8.70 = 26.4 Ω, which agrees.

### Mains values

Mains supplies are quoted as rms. For a 230 V rms supply:

- peak voltage = √2 × 230 = 325 V
- peak-to-peak voltage = 2 × 325 = 651 V (650 V to 2 s.f.)

Another supply quoted as 120 V rms at 60 Hz has a peak of 170 V, a peak-to-peak value of 339 V and a period of 1/60 = 16.7 ms. Mains frequency and voltage vary between countries, so a question supplies the values it wants you to use.

## The oscilloscope

An oscilloscope plots voltage on the vertical axis against time on the horizontal axis. You need the controls, not the circuitry.

| Control | What it does |
|---|---|
| Y-gain (volts per division) | Sets how many volts one vertical division represents |
| Time-base (time per division) | Sets how much time one horizontal division represents |
| Y-shift | Moves the trace up or down |
| X-shift | Moves the trace sideways |
| Trigger | Starts each sweep at the same point of the signal so the trace is steady |
| Input coupling (dc/ac, where fitted) | In dc, the whole signal is shown. In ac, any steady dc part is blocked |
| Brightness and focus | Make the trace visible and sharp |

### As a dc voltmeter

With the time-base off, or running, a steady voltage shifts the trace to a new height. First set the trace on a zero line with the input grounded or the input set to zero. Then connect the signal. Voltage = divisions of shift × Y-gain setting. A trace moved down by 3.0 divisions on 0.50 V per division reads −1.5 V.

### As an ac voltmeter and timer

The trace is a sine wave. Read the vertical height of the wave and multiply by the Y-gain. Read the width of one cycle and multiply by the time-base setting.

### Worked example: reading a trace

The Y-gain is 0.50 V per division and the time-base is 2.0 ms per division. The wave has a peak 3.4 divisions above the centre line and one full cycle takes 4.0 divisions horizontally.

- Vo = 3.4 × 0.50 = **1.7 V**
- Peak-to-peak = 2 × 1.7 = **3.4 V**
- Vrms = 1.7/√2 = **1.2 V**
- T = 4.0 × 2.0 ms = 8.0 ms, so f = 1/0.0080 = **125 Hz**

If you switch the time-base to 1.0 ms per division, the same cycle spans 8.0 divisions, so fewer cycles fit on the screen. Increasing the Y-gain to 1.0 V per division halves the trace height. The signal itself does not change, only the display.

## The transformer

A transformer has two coils, the primary and the secondary, wound on one laminated iron core. When the primary is connected to an ac supply, its current keeps changing and so does the magnetic flux it sets up in the core. The core guides that flux through the secondary coil as well. By Faraday's law (section 3.10.4) the changing flux linkage induces an emf in the secondary. A direct supply produces a steady flux and no secondary emf once the current has settled, so a transformer needs ac.

For an ideal transformer:

Ns/Np = Vs/Vp

A **step-up** transformer has Ns > Np, so Vs > Vp. A **step-down** transformer has Ns < Np.

### Worked example: finding the number of turns

A transformer has 690 turns on its primary coil, connected to a 230 V rms supply. It must supply 18 V rms. Find the number of secondary turns.

Ns = Np × Vs/Vp = 690 × 18/230 = **54 turns**

The turns ratio 690 : 54 is about 12.8 : 1, a step-down.

### Efficiency

Power is VI, so

efficiency = IsVs/IpVp

This is a fraction, and you can multiply by 100 for a percentage. For an ideal transformer the efficiency is 1 and IsVs = IpVp, so the currents are in the inverse ratio of the voltages: stepping voltage up steps current down.

**Worked example.** The secondary delivers 2.5 A at 12 V. The primary draws 0.14 A from the 230 V supply.

- Output power = 12 × 2.5 = 30 W
- Input power = 230 × 0.14 = 32.2 W
- Efficiency = 30/32.2 = 0.932, or **93%**
- Power wasted = 32.2 − 30 = **2.2 W**

### Causes of inefficiency and how to reduce them

| Cause | Why it wastes energy | Reduction |
|---|---|---|
| Resistance of the coils | Current heats the wire (I²R) | Thick wire of low resistivity, such as copper |
| Eddy currents in the core | The changing flux induces currents in the iron itself, which heat it | Laminate the core: thin sheets, insulated from each other |
| Hysteresis | Energy is used repeatedly magnetising and demagnetising the core | Use a magnetically soft material, such as soft iron |
| Flux leakage | Not all the flux from the primary links the secondary | Wind the coils close together on a closed core |

## Transmitting power at high voltage

Electrical power is delivered through lines of non-zero resistance. For a power P transmitted at voltage V, the line current is I = P/V. The power lost as heat in the line is

P(loss) = I²R, with R the resistance of the line.

Raising V lowers I for the same P, and the loss falls with I². The p.d. lost along the line is IR, which is **not** the transmission voltage.

### Worked example: comparing two voltages

A power of 2.4 MW is sent through a line of total resistance 4.0 Ω.

| | At 20 kV | At 120 kV |
|---|---|---|
| Current I = P/V | 120 A | 20 A |
| Power loss I²R | 57.6 kW | 1.6 kW |
| Percentage lost | 2.4% | 0.067% |
| P.d. lost along line IR | 480 V | 80 V |

The voltage is six times larger, the current is six times smaller and the loss is 36 times smaller. This is why power stations step the voltage up for transmission, then step it down near consumers for safety.

## Required practical 7: efficiency of a transformer

The specification lists this as the investigation of the efficiency of a transformer.

1. Connect the primary to a low-voltage alternating supply, not the mains. Use a transformer with demountable or ready-made coils.
2. Connect an ac voltmeter and ammeter to measure Vp and Ip. Connect another pair to measure Vs and Is.
3. Place a variable resistor as a load across the secondary.
4. Record all four readings, then change the load and repeat.
5. For each set, calculate IsVs/IpVp.

Analyse by plotting efficiency against secondary current or load. To change the investigation, vary the core material, the number of turns or the supply voltage while keeping the others fixed.

Evaluation points: the meters should be set to ac ranges and read rms values; the coils warm up, so their resistance rises and the efficiency falls over a long run; repeat and average readings; each meter has a percentage uncertainty and the four uncertainties add in the efficiency.

## Common errors

- Using Vrms = Vo/√2 for a square or triangular wave.
- Calling the peak-to-peak value the amplitude. The amplitude is Vo.
- Using the transmission voltage in I²R instead of the current.
- Treating the p.d. lost along a line as the supply voltage.
- Writing that a transformer works on dc.
- Giving only "heat" as a loss, without saying where the heat comes from.
- Reading an oscilloscope in divisions and forgetting to multiply by the setting.

## Next steps

Condense this with the [revision notes](/resources/oxfordaqa-a-level-physics-alternating-currents-and-the-transformer-revision-notes/), then test yourself on the [practice questions](/resources/oxfordaqa-a-level-physics-alternating-currents-and-the-transformer-practice/).

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), specification Version 4.4, for exams from May/June 2020 onwards, published by OxfordAQA. This page covers sections 3.10.5 and 3.10.6 and Required practical 7.
