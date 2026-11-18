---
title: "OxfordAQA A-Level Physics (9630): Alternating currents"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.10 – Magnetic fields"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 10.5
syllabusTopics:
  - qualification: "a-level"
    topic: "magnetic-fields-oxfordaqa-alevel"
    subtopic: "alternating-currents-oxfordaqa-alevel-physics"
description: "Study guide to OxfordAQA 9630 section 3.10.5: why rms is peak over √2, mean and peak power, mains values and choosing and reading oscilloscope settings."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.10.5, Alternating currents, in Section 3.10 Magnetic fields (International A-level only). For a first pass through 3.10.5 and the transformer together, use the [alternating currents and the transformer study guide](/resources/oxfordaqa-a-level-physics-alternating-currents-and-the-transformer/). After this page, condense it with the [alternating currents revision notes](/resources/oxfordaqa-a-level-physics-9630-alternating-currents-oxfordaqa-alevel-physics-revision-notes/) and test yourself with the [alternating currents practice questions](/resources/oxfordaqa-a-level-physics-9630-alternating-currents-oxfordaqa-alevel-physics-practice/).

## What the specification asks for

| Statement in 3.10.5 | What you must be able to do |
|---|---|
| Sinusoidal voltages and currents only; root mean square, peak and peak-to-peak values for sinusoidal waveforms only | Define and convert between the three values |
| Irms = Io/√2; Vrms = Vo/√2 | Use the equations, and use rms values for mean power |
| Application to the calculation of mains electricity peak and peak-to-peak voltage values | Convert a quoted rms mains voltage |
| Use of an oscilloscope as a dc and ac voltmeter, to measure time intervals and frequencies, and to display ac waveforms | Read traces and choose settings |
| No details of the structure of an oscilloscope are required, but familiarity with the operation of the controls is expected | Explain what each control does |

Every equation in this subtopic applies to sine waves only. A square or triangular wave has a different relationship between peak and rms, and questions on this course will not ask for it.

## Where the √2 comes from

An alternating current I = Io sin ωt in a resistor R gives an instantaneous power P = I²R = Io²R sin² ωt. Power is never negative: the resistor heats on both halves of the cycle.

The mean of sin² ωt over a cycle is exactly ½. One way to see this: sin² and cos² have identical shapes, shifted by a quarter cycle, so over a full cycle they have the same mean; since sin² + cos² = 1 at every instant, each mean must be ½.

Mean power = ½Io²R. The rms current is the steady current giving that same power:

Irms²R = ½Io²R, so Irms = Io/√2.

The same argument with V²/R gives Vrms = Vo/√2. This is why the rms value is defined as the square root of the mean of the squares: squaring makes every value positive, averaging finds the mean power, and the square root brings the units back to amps or volts.

### Mean power and peak power

- Mean power: P = IrmsVrms = Irms²R = Vrms²/R.
- Peak power: IoVo = 2 × mean power.

## Mains values

Mains supplies are quoted as rms values, because those give the heating effect directly. The specification asks you to work out the peak and peak-to-peak values.

For a supply of Vrms: Vo = √2 Vrms and peak-to-peak = 2√2 Vrms.

The supply voltage and frequency vary between countries, so a question will give you the values to use.

### Worked example 1: a lamp on a 120 V rms supply

A lamp is rated 60 W on a 120 V rms supply. Find the rms current, the peak current, the lamp's resistance (assuming it stays constant) and the peak power.

Irms = P/Vrms = 60/120 = **0.50 A**.

Io = √2 × 0.50 = **0.71 A**.

R = Vrms/Irms = 120/0.50 = **240 Ω**.

Peak power = IoVo = 0.707 × 170 = **120 W**, twice the mean.

### Worked example 2: dc and ac compared

A 12 V dc supply and an ac supply of peak 12 V are connected in turn to the same resistor. Which heats it more?

The ac supply has Vrms = 12/√2 = 8.5 V. Power ∝ V², so the ac power is (8.5/12)² = 0.50 of the dc power. The dc supply heats the resistor **twice** as fast. An ac supply needs a peak of 17 V to match 12 V dc.

## The oscilloscope

An oscilloscope plots voltage (vertical) against time (horizontal) on a grid of divisions. You need to know what the controls do, not how the instrument works inside.

| Control | What it does | How you use it |
|---|---|---|
| Y-gain (volts per division) | Sets the vertical scale | Voltage = divisions × Y-gain |
| Time-base (time per division) | Sets the horizontal sweep speed | Time = divisions × time-base |
| Y-shift | Moves the trace up or down | Set the zero line before measuring |
| X-shift | Moves the trace sideways | Line up a peak with a grid line |
| Time-base off | Spot moves only vertically | An ac signal draws a vertical line equal to the peak-to-peak value |
| Trigger | Starts each sweep at the same point | Holds a repeating trace steady |

### As a dc voltmeter

Ground the input and use the Y-shift to put the trace on a grid line. Connect the dc signal: the line jumps up (or down, for reversed polarity) by a number of divisions. Voltage = divisions × Y-gain.

### As an ac voltmeter

Measure the height of the wave in divisions. Measuring peak-to-peak and halving is more accurate than measuring from the centre line, because you do not need to locate the centre. With the time-base off, the vertical line gives the peak-to-peak value directly.

### Measuring time intervals and frequency

Time interval = horizontal divisions × time-base. For frequency, measure the period over several cycles and divide by the number of cycles, then use f = 1/T.

### Worked example 3: choosing the settings

A 5.0 V rms, 1.5 kHz signal is to be displayed on a screen 8 divisions high and 10 divisions wide.

Peak-to-peak voltage = 2√2 × 5.0 = 14.1 V.

- At 2 V per division, the trace is 7.1 divisions tall: it nearly fills the screen. **Best choice.**
- At 5 V per division, it is only 2.8 divisions tall, so a reading uncertainty of ±0.1 division is a much larger percentage.
- At 1 V per division, the trace (14 divisions) goes off screen.

Period = 1/1500 = 0.667 ms.

- At 0.2 ms per division, one cycle is 3.3 divisions, so 3 cycles fit across the screen: good for measuring the period over several cycles.
- At 1 ms per division, the screen shows 15 cycles squeezed together: hard to read.

### Worked example 4: a time interval

An ultrasound pulse and its echo from the far side of a water tank appear 3.6 divisions apart with the time-base on 50 μs per division. Taking the speed of sound in water as 1500 m s⁻¹, find the width of the tank.

Time interval = 3.6 × 50 μs = 180 μs.

The pulse travels there and back, so width = 1500 × 180 × 10⁻⁶ / 2 = **0.14 m**.

### Worked example 5: time-base switched off

With the time-base off and the Y-gain on 0.50 V per division, an ac signal draws a vertical line 6.4 divisions long.

Peak-to-peak = 6.4 × 0.50 = 3.2 V; peak = 1.6 V; rms = 1.6/√2 = **1.1 V**.

If the length can be read to ±0.1 division, the percentage uncertainty is 0.1/6.4 = 1.6%, and the rms value carries the same percentage.

## Common mistakes

- Applying Vo/√2 to a square wave or another non-sinusoidal waveform.
- Dividing a peak-to-peak value by √2 instead of by 2√2.
- Using peak values in Irms²R, so doubling the mean power.
- Reading a trace's height in divisions but not multiplying by the Y-gain.
- Taking the period from half a cycle.
- Saying the mains supply "is 325 V" when 325 V is the peak of a 230 V rms supply.

## Exam technique

- **Define** rms current: the steady (dc) current that would dissipate the same mean power in a resistor.
- **Explain** why rms values are used: they give the heating effect directly, so P = IrmsVrms works as for dc.
- **Describe** how to measure a frequency with an oscilloscope: set the time-base so several cycles appear, count divisions for a whole number of cycles, multiply by the time-base, divide by the number of cycles, then take the reciprocal.
- **Evaluate** a choice of settings: say whether the trace fills the screen and how that affects the percentage uncertainty.

## Related resources

- [Alternating currents revision notes](/resources/oxfordaqa-a-level-physics-9630-alternating-currents-oxfordaqa-alevel-physics-revision-notes/)
- [Alternating currents practice questions](/resources/oxfordaqa-a-level-physics-9630-alternating-currents-oxfordaqa-alevel-physics-practice/)
- [Electromagnetic induction study guide](/resources/oxfordaqa-a-level-physics-9630-electromagnetic-induction-oxfordaqa-alevel-physics/)
- [The operation of a transformer study guide](/resources/oxfordaqa-a-level-physics-9630-the-operation-of-a-transformer-oxfordaqa-alevel-physics/)

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.10.5 Alternating currents, published by OxfordAQA. Check the board's website for the current version of the specification.
