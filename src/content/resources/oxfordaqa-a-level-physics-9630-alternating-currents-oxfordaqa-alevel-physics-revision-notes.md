---
title: "OxfordAQA A-Level Physics (9630): Alternating currents -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA 9630 section 3.10.5: rms, peak and peak-to-peak values, mean power, mains values and oscilloscope use, with a self-test."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 3.10.5, Alternating currents, of OxfordAQA International AS and A-level Physics (9630), in Section 3.10 Magnetic fields (International A-level only). Full explanations and worked examples are in the [alternating currents study guide](/resources/oxfordaqa-a-level-physics-9630-alternating-currents-oxfordaqa-alevel-physics/); test yourself with the [alternating currents practice questions](/resources/oxfordaqa-a-level-physics-9630-alternating-currents-oxfordaqa-alevel-physics-practice/). The transformer, the next subtopic, is in the [transformer revision notes](/resources/oxfordaqa-a-level-physics-9630-the-operation-of-a-transformer-oxfordaqa-alevel-physics-revision-notes/).

All results below apply to sinusoidal waveforms only.

## Equations

| Equation | Use |
|---|---|
| Irms = Io/√2; Vrms = Vo/√2 | Peak to rms |
| Peak-to-peak = 2Vo = 2√2 Vrms | Full height of the wave |
| P(mean) = IrmsVrms = Irms²R = Vrms²/R | Mean power in a resistor |
| P(peak) = IoVo = 2 × P(mean) | Largest instantaneous power |
| f = 1/T | Frequency from period |
| Voltage = divisions × Y-gain | Oscilloscope vertical reading |
| Time = divisions × time-base | Oscilloscope horizontal reading |

## Key terms

| Term | What to write |
|---|---|
| Peak value | Maximum value measured from zero |
| Peak-to-peak value | From the top of a peak to the bottom of a trough: twice the peak |
| Root mean square value | The steady dc value giving the same mean power in a resistor |
| Period | Time for one complete cycle |
| Y-gain | Volts per vertical division |
| Time-base | Time per horizontal division |
| Trigger | Starts each sweep at the same point to give a steady trace |

## Condensed recall

- Power in a resistor ∝ I², so it is positive on both halves of the cycle.
- The mean of sin² over a cycle is ½, so mean power = ½ × peak power, and Irms = Io/√2.
- Mains supplies are quoted as rms. 230 V rms: peak 325 V, peak-to-peak 650 V.
- A dc supply of value V heats a resistor as fast as an ac supply of rms value V.
- Oscilloscope as dc voltmeter: set the zero line with the input grounded, then measure the shift.
- Oscilloscope as ac voltmeter: measure the peak-to-peak height and halve it.
- Time-base off: an ac signal draws a vertical line of length equal to the peak-to-peak value.
- Measure the period over several cycles to reduce uncertainty.
- Choose the Y-gain and time-base so the trace fills as much of the screen as possible.

## Conversion ladder

From rms: × √2 → peak; × 2 → peak-to-peak.

From peak-to-peak: ÷ 2 → peak; ÷ √2 → rms.

## Method box: reading a trace

1. Note the Y-gain and time-base, with units.
2. Count the peak-to-peak height in divisions; × Y-gain; halve for the peak.
3. Count the divisions for a whole number of cycles; × time-base; ÷ number of cycles = T.
4. f = 1/T; Vrms = Vo/√2.

## Oscilloscope settings: choosing well

| Goal | Setting choice | Reason |
|---|---|---|
| Accurate voltage | Largest trace that stays on screen | A ±0.1 division reading error is a smaller percentage of a tall trace |
| Accurate period | Two or more whole cycles across the screen | The reading error is shared over several periods |
| Steady display | Adjust the trigger | Each sweep starts at the same point of the wave |
| Known zero | Ground the input, then Y-shift onto a grid line | Needed for dc readings and for measuring from the centre line |

## Worked reminders

- 2.5 A peak in 12 Ω: mean power = (2.5/√2)² × 12 = **37.5 W**; peak power **75 W**.
- Trace 5.2 divisions peak-to-peak at 5.0 V per division: Vo = **13 V**, Vrms = **9.2 V**.
- Two cycles in 8.0 divisions at 2.0 ms per division: T = **8.0 ms**, f = **125 Hz**.

## Exam traps

- Using Vo/√2 for a non-sinusoidal wave.
- Dividing peak-to-peak by √2 instead of 2√2 to reach rms.
- Using peak values for mean power.
- Taking a half-cycle as the period.
- Forgetting to multiply divisions by the setting.
- Defining rms by its calculation steps only, with no mention of equal mean power.

## Self-test

1. Define the rms value of an alternating current.
2. A sine wave has a peak-to-peak value of 20 V. Find its rms value.
3. Find the peak and peak-to-peak values of a 230 V rms supply.
4. Why is the mean power half the peak power?
5. A 2.4 kW heater runs on 240 V rms. Find Irms and Io.
6. What dc voltage heats a resistor at the same rate as an ac voltage of peak-to-peak 34 V?
7. A trace shifts 2.6 divisions downwards at 2.0 V per division when a cell is connected. Find its p.d. and comment on the polarity.
8. With the time-base switched off, what does an ac signal look like?
9. Which control holds a repeating trace still?
10. A signal is 3.0 V rms. Which Y-gain from 0.5, 1, 2 and 5 V per division is best on a screen 8 divisions high?
11. Two pulses are 4.5 divisions apart on 20 μs per division. Find the time interval.
12. Why measure the time for several cycles rather than one?

### Answers

1. The steady direct current that gives the same mean power in a resistor.
2. Vo = 10 V, so Vrms = **7.1 V**.
3. **325 V** and **650 V** (651 V before rounding).
4. P ∝ sin² ωt, whose mean over a cycle is ½.
5. Irms = 2400/240 = **10 A**; Io = **14 A**.
6. Vo = 17 V, so Vrms = **12 V** dc.
7. **5.2 V**; the downward shift shows the input terminal is negative relative to ground.
8. A **vertical line** whose length is the peak-to-peak value.
9. The **trigger**.
10. Peak-to-peak = 8.5 V: 1 V per division goes off screen, so **2 V per division** (4.2 divisions).
11. **90 μs**.
12. The reading uncertainty is shared across several periods, so the percentage uncertainty in T is smaller.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.10.5 Alternating currents, published by OxfordAQA. Check the board's website for the current version of the specification.
