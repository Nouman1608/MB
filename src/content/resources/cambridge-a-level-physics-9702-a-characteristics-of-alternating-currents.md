---
title: "Cambridge A Level Physics (9702): Characteristics of alternating currents"
resourceType: "study-guides"
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
description: "A focused guide to 21.1 Characteristics of alternating currents in Cambridge A Level Physics 9702: period, peak, x = x₀ sin ωt, mean power and r.m.s."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **21.1 Characteristics of alternating currents** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Alternating Currents study guide](/resources/a-physics-alternating-currents/) introduces the whole of Topic 21 with a mains-supply example; this page goes further into the 21.1 outcomes alone: reading values from an equation and from an oscilloscope trace, solving x = x₀ sin ωt for a time, why the mean power is exactly half the peak power, and where the √2 in the r.m.s. relationship comes from and when it does not apply. For quick recall use the [Characteristics of alternating currents revision notes](/resources/cambridge-a-level-physics-9702-a-characteristics-of-alternating-currents-revision-notes/), and for exam-style questions the [Characteristics of alternating currents practice questions](/resources/cambridge-a-level-physics-9702-a-characteristics-of-alternating-currents-practice/).

## What 21.1 asks you to do

The syllabus lists four outcomes. Candidates should be able to:

- **understand and use the terms period, frequency and peak value** as applied to an alternating current or voltage
- **use equations of the form x = x₀ sin ωt** representing a sinusoidally alternating current or voltage
- **recall and use the fact that the mean power in a resistive load is half the maximum power** for a sinusoidal alternating current
- **distinguish between root-mean-square (r.m.s.) and peak values and recall and use I_r.m.s. = I₀/√2 and V_r.m.s. = V₀/√2** for a sinusoidal alternating current

The syllabus also notes that the practical and economic advantages of transmitting power by electricity at high voltage are assumed from IGCSE or O Level; they are background to Topic 21 rather than a 21.1 outcome.

## The terms

| Term | Meaning | Symbol and unit |
|---|---|---|
| Period | Time for one complete cycle | T, s |
| Frequency | Number of complete cycles per unit time; f = 1/T | f, Hz |
| Peak value | Maximum value of the current or voltage, measured from zero | I₀ or V₀ |
| Peak-to-peak value | Difference between the positive and negative peaks; 2 × peak for a symmetrical wave | — |
| Angular frequency | ω = 2πf = 2π/T | ω, rad s⁻¹ |

"Amplitude" and "peak value" mean the same thing for a sinusoidal current or voltage. Peak-to-peak values are not in the outcomes, but oscilloscope traces are often easiest to measure that way, so you must be able to halve them.

## Reading an equation

An equation such as V = 170 sin(377t) contains everything you need:

```
peak value:  V₀ = 170 V
ω = 377 rad s⁻¹  →  f = ω / 2π = 60.0 Hz,  T = 1/f = 16.7 ms
r.m.s. value: V₀ / √2 = 120 V
```

If the equation is written with 2πft or 100πt, read f directly: V = 325 sin(100πt) has ω = 100π, so f = 50 Hz.

## Reading an oscilloscope trace

**Worked example 1.** An oscilloscope shows a sinusoidal trace. The vertical distance from the lowest point to the highest point is 6.0 divisions, with the y-gain set to 2.0 V per division. One complete cycle occupies 4.0 divisions horizontally, with the time-base set to 5.0 ms per division. Find the peak voltage, the period, the frequency and the r.m.s. voltage.

```
Peak-to-peak = 6.0 × 2.0 = 12 V   →  V₀ = 6.0 V
T = 4.0 × 5.0 ms = 20 ms         →  f = 1 / 0.020 = 50 Hz
V_r.m.s. = 6.0 / √2 = 4.2 V
```

*Annotation.* Measure across several cycles where you can and divide, to reduce the reading uncertainty. Halving the peak-to-peak height is the most commonly forgotten step.

## Solving x = x₀ sin ωt for a time

The equation describes a quantity that is zero and increasing at t = 0. Two things go wrong in calculations: the calculator mode, and forgetting that the sine function gives more than one time per cycle.

**Worked example 2.** A current is given by I = 2.0 sin(2π × 60 t), in amperes. Find **(a)** the current at t = 5.0 ms and **(b)** the earliest time at which the current is 1.0 A.

```
(a) ωt = 2π × 60 × 0.0050 = 1.885 rad
    I = 2.0 × sin(1.885 rad) = 2.0 × 0.951 = 1.9 A

(b) sin ωt = 1.0 / 2.0 = 0.50  →  ωt = π/6 rad (0.524 rad)
    t = 0.524 / (2π × 60) = 1.4 × 10⁻³ s
```

*Annotation.* ωt is in **radians**; set the calculator to radians or convert. In (b), the current reaches 1.0 A again at ωt = 5π/6, on the way back down from the peak, a time 6.9 ms after zero. Both answers are valid; read the question to see which is wanted.

## Why the mean power is half the peak power

For a resistor R carrying a current I = I₀ sin ωt, the instantaneous power is:

```
P = I²R = I₀²R sin²ωt
```

Three features follow:

- **P is never negative.** Squaring removes the sign, so energy is transferred to the resistor during both halves of every cycle.
- **P varies at twice the supply frequency.** sin²ωt goes through two humps per cycle: a 50 Hz supply makes the power pulse 100 times a second.
- **The mean of sin²ωt over a cycle is ½.** The graph of sin²ωt is symmetrical about the line at ½, rising to 1 and falling to 0. So the mean power is ½I₀²R, which is half the peak power P₀ = I₀²R.

```
mean power = ½ × peak power = ½ I₀V₀
```

## Where the √2 comes from

The **r.m.s. value** of an alternating current is the value of the steady (direct) current that would dissipate the same mean power in the same resistor. Set the d.c. power equal to the a.c. mean power:

```
I_r.m.s.² R = ½ I₀² R   →   I_r.m.s. = I₀ / √2 ≈ 0.707 I₀
```

The same argument with P = V²/R gives V_r.m.s. = V₀/√2. As a consequence, the mean power can be written in the same form as for d.c.:

```
mean power = I_r.m.s. V_r.m.s. = I_r.m.s.² R = V_r.m.s.² / R
```

The name describes the procedure: take the **square** of the current, find the **mean** of the squares, then take the **root**.

**The √2 is for sinusoidal waveforms only.** For a square wave that switches between +V₀ and −V₀, the square of the voltage is always V₀², so its r.m.s. value equals V₀. Using V₀/√2 for a non-sinusoidal wave is wrong; the syllabus restricts the relationship to sinusoidal currents and voltages.

## Worked example 3: a lamp on an a.c. supply

A lamp rated 12 V, 24 W works normally on a sinusoidal supply. Treating the lamp as a fixed resistance, find the peak voltage, the r.m.s. and peak currents, and the maximum and mean power.

```
Rating values are r.m.s.:   V_r.m.s. = 12 V
V₀ = 12 × √2 = 17 V
R = V² / P = 12² / 24 = 6.0 Ω
I_r.m.s. = 12 / 6.0 = 2.0 A;   I₀ = 2.0 × √2 = 2.8 A
Maximum power = I₀V₀ = 2.83 × 16.97 = 48 W
Mean power = ½ × 48 = 24 W  (matches the rating)
```

*Annotation.* The lamp behaves exactly as it would on a 12 V d.c. supply: that is the point of r.m.s. values. Ratings of a.c. equipment and quoted mains voltages are r.m.s. unless stated otherwise.

## Common mistakes

- **Reading the peak-to-peak value as the peak value.**
- **Using degrees** in x = x₀ sin ωt.
- **Writing mean power = I₀V₀** or forgetting the ½.
- **Thinking the mean current over a cycle is I₀/√2.** The mean current over a full cycle is zero; I₀/√2 is the r.m.s. value.
- **Applying V₀/√2 to square or triangular waves.**
- **Confusing ω with f**: ω = 2πf, not f.

## Exam technique for the command words

- **Define** (r.m.s. value): the value of the direct current (or p.d.) that would produce the same mean power (heating effect) in a resistor.
- **State** (the relationship between mean and peak power): mean power is half the maximum power, for a sinusoidal supply and a resistive load.
- **Determine** (from a trace): show divisions × setting, then halve peak-to-peak.
- **Calculate**: identify which values are r.m.s. and which are peak before substituting; rating values are r.m.s.
- **Explain** (why the mean current is not used): it is zero over a cycle, yet energy is transferred in both halves.

## Related resources

- [Alternating Currents study guide](/resources/a-physics-alternating-currents/) — the whole of Topic 21
- [Characteristics of alternating currents revision notes](/resources/cambridge-a-level-physics-9702-a-characteristics-of-alternating-currents-revision-notes/)
- [Characteristics of alternating currents practice questions](/resources/cambridge-a-level-physics-9702-a-characteristics-of-alternating-currents-practice/)
- [Rectification and smoothing study guide](/resources/cambridge-a-level-physics-9702-a-rectification-and-smoothing/) — the next subtopic
- [Electromagnetic induction study guide](/resources/cambridge-a-level-physics-9702-a-electromagnetic-induction/) — how alternating e.m.f.s are produced

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
