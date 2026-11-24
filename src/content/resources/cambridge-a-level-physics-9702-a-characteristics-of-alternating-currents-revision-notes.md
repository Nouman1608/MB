---
title: "Cambridge A Level Physics (9702): Characteristics of alternating currents -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Alternating currents"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 21.1
syllabusTopics:
  - qualification: "a-level"
    topic: "a-alternating-currents"
    subtopic: "a-characteristics-of-alternating-currents"
description: "Revision notes for Cambridge A Level Physics 9702 21.1 Characteristics of alternating currents: x = x₀ sin ωt, mean power, r.m.s. values, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 21.1 of Cambridge International AS & A Level Physics 9702 (2025–2027) covers period, frequency and peak value, equations of the form x = x₀ sin ωt, the mean power in a resistive load, and the distinction between r.m.s. and peak values. These notes are condensed for recall. For full explanations and worked examples, read the [Characteristics of alternating currents study guide](/resources/cambridge-a-level-physics-9702-a-characteristics-of-alternating-currents/); to apply the ideas, try the [Characteristics of alternating currents practice questions](/resources/cambridge-a-level-physics-9702-a-characteristics-of-alternating-currents-practice/).

## The equations

```
x = x₀ sin ωt          (x = I or V; zero and rising at t = 0)
ω = 2πf = 2π/T         (ω in rad s⁻¹)
I_r.m.s. = I₀/√2       V_r.m.s. = V₀/√2      (sinusoidal only)
mean power = ½ × maximum power = ½ I₀V₀ = I_r.m.s. V_r.m.s.
mean power = I_r.m.s.² R = V_r.m.s.² / R
```

## Terms

| Term | Meaning |
|---|---|
| Period T | Time for one complete cycle |
| Frequency f | Cycles per second; f = 1/T; unit Hz |
| Peak value I₀ or V₀ | Maximum value measured from zero |
| Peak-to-peak | 2 × peak (symmetrical wave) |
| R.m.s. value | Steady (d.c.) value giving the same mean power in a resistor |
| Angular frequency ω | 2πf |

## Reading information

**From an equation.** V = 170 sin(377t): V₀ = 170 V; f = 377/2π = 60 Hz; V_r.m.s. = 120 V.

**From an oscilloscope.** Peak-to-peak height (divisions) × y-gain → halve for V₀. Cycle length (divisions) × time-base → T.

## Power in a resistor

- P = I₀²R sin²ωt: never negative.
- Power pulses at **2f**.
- Mean of sin² over a cycle = ½ → mean power = ½ peak power.
- I_r.m.s.²R = ½I₀²R → I_r.m.s. = I₀/√2.

## Peak and r.m.s. side by side (230 V mains)

| Quantity | Value |
|---|---|
| V_r.m.s. | 230 V (the quoted value) |
| V₀ | 325 V |
| Peak-to-peak | 651 V |
| Mean over a cycle | 0 |

## Sketching the graphs

- **I–t**: sine curve starting at zero and rising; +I₀ at T/4, zero at T/2, −I₀ at 3T/4, zero at T.
- **r.m.s. level**: a horizontal line at 0.71 of the peak; it is not the mean of the curve (which is zero).
- **P–t** for a resistor: never below zero; touches zero twice per cycle; peaks of P₀ = I₀²R at T/4 and 3T/4; mean line at P₀/2.
- Two complete power humps fit inside one current cycle.

## Three quick calculations

**Heater.** 1.2 kW on 240 V r.m.s.: I_r.m.s. = 1200/240 = 5.0 A; I₀ = 7.1 A; maximum power 2.4 kW.

**Equation.** I = 0.80 sin(100πt) A: f = 50 Hz; I_r.m.s. = 0.57 A; at t = 2.0 ms, I = 0.80 sin(0.628 rad) = 0.47 A.

**Trace.** 8.0 divisions peak-to-peak at 0.50 V per division: V₀ = 2.0 V. One cycle across 5.0 divisions at 0.10 ms per division: T = 0.50 ms, f = 2.0 kHz.

## Which value to use

- Power, heating and equipment ratings: r.m.s. values.
- Reading or sketching a waveform (oscilloscope trace, graph axes): peak values, since the curve reaches ±x₀ once each per cycle.
- Instantaneous values at a stated time: x = x₀ sin ωt with the peak value.

## Non-sinusoidal waves

- √2 applies **only** to sinusoidal waves.
- Square wave between +V₀ and −V₀: V_r.m.s. = V₀; mean power = V₀²/R, twice that of a sine wave with the same peak.

## Key terms

| Term | Meaning |
|---|---|
| Alternating current | Current that reverses direction periodically |
| Sinusoidal | Varying as x₀ sin ωt |
| Resistive load | Load in which P = I²R at every instant (e.g. a heater or filament) |
| R.m.s. | Root of the mean of the squares |
| Rating | Value quoted on equipment; r.m.s. for a.c. |

## Exam traps

- Taking peak-to-peak as the peak.
- Calculator in degrees.
- Forgetting the ½ in mean power, or using I₀V₀ as the mean.
- Calling I₀/√2 the "mean current"; the mean over a cycle is zero.
- Using √2 for a square wave.
- Mixing peak and r.m.s. values in one calculation.
- Writing f = ω instead of f = ω/2π.

## Self-test

1. Define the r.m.s. value of an alternating current.
2. A mains supply is 230 V r.m.s. Calculate the peak voltage.
3. A sinusoidal current has peak 4.0 A and flows in a 25 Ω resistor. Calculate the mean power.
4. Calculate the maximum power for Question 3.
5. A voltage is V = 50 sin(314t). Find the frequency and period.
6. What is the r.m.s. value of the voltage in Question 5?
7. A 50 Hz supply heats a resistor. At what frequency does the power vary?
8. What is the mean current over one complete cycle of a sinusoidal a.c.?
9. A trace has peak-to-peak height 5.0 divisions at 5.0 V per division. Find V₀.
10. A square wave switches between +6.0 V and −6.0 V across 3.0 Ω. Find the mean power.
11. Why are the voltage and current ratings of a.c. appliances given as r.m.s. values?
12. In I = I₀ sin ωt, what is the value of ωt when I first equals I₀/2?

**Answers:** 1. The value of the direct current that would dissipate the same mean power in the same resistor. 2. 230 × √2 = 325 V. 3. I_r.m.s. = 2.83 A; P = I_r.m.s.²R = 8.0 × 25 = 200 W. 4. I₀²R = 16 × 25 = 400 W. 5. f = 314/2π = 50 Hz; T = 0.020 s. 6. 50/√2 = 35 V. 7. 100 Hz. 8. Zero. 9. Peak-to-peak 25 V, so V₀ = 12.5 V. 10. V²/R = 36/3.0 = 12 W (r.m.s. = 6.0 V for a square wave). 11. So that power calculations use the same equations as for d.c.: the r.m.s. value gives the same heating effect as that steady value. 12. π/6 rad (0.52 rad).

## More resources on this topic

- [Alternating Currents revision notes](/resources/a-physics-alternating-currents-revision-notes/) — the whole of Topic 21
- [Characteristics of alternating currents practice questions](/resources/cambridge-a-level-physics-9702-a-characteristics-of-alternating-currents-practice/)
- [Rectification and smoothing revision notes](/resources/cambridge-a-level-physics-9702-a-rectification-and-smoothing-revision-notes/)
