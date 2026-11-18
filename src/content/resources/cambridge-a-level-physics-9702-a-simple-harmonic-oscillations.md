---
title: "Cambridge A Level Physics (9702): Simple harmonic oscillations"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Oscillations"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 17.1
syllabusTopics:
  - qualification: "a-level"
    topic: "a-oscillations"
    subtopic: "a-simple-harmonic-oscillations"
description: "Cambridge A Level Physics 9702 subtopic 17.1: SHM vocabulary, a = −ω²x, x = x₀ sin ωt, the velocity equations and reading SHM graphs."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **17.1 Simple harmonic oscillations** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Oscillations study guide](/resources/a-physics-oscillations/) introduces all of Topic 17; this page goes further into 17.1 alone: precise use of the vocabulary, how to test whether a motion is simple harmonic, how to use the equations without slipping into degrees, and how to read the graphs examiners like to set. For quick recall use the [Simple harmonic oscillations revision notes](/resources/cambridge-a-level-physics-9702-a-simple-harmonic-oscillations-revision-notes/), and for exam-style questions the [Simple harmonic oscillations practice questions](/resources/cambridge-a-level-physics-9702-a-simple-harmonic-oscillations-practice/).

## What 17.1 asks you to do

Candidates should be able to:

- understand and use the terms **displacement, amplitude, period, frequency, angular frequency and phase difference** in the context of oscillations, and express the period in terms of both frequency and angular frequency
- understand that simple harmonic motion occurs when **acceleration is proportional to displacement from a fixed point and in the opposite direction**
- use **a = −ω²x** and recall and use, as a solution to this equation, **x = x₀ sin ωt**
- use the equations **v = v₀ cos ωt** and **v = ±ω√(x₀² − x²)**
- analyse and interpret **graphical representations** of the variations of displacement, velocity and acceleration

The data sheet for Paper 4 gives a = −ω²x and both velocity equations, but not x = x₀ sin ωt, which must be recalled.

## The vocabulary, used precisely

| Term | Precise meaning | Common slip |
|---|---|---|
| Displacement x | Distance from the equilibrium position in a stated direction; a vector, positive or negative | Treating it as always positive |
| Amplitude x₀ | Maximum displacement from equilibrium | Using the peak-to-peak distance, which is 2x₀ |
| Period T | Time for one complete oscillation | Timing from one extreme to the other (that is T/2) |
| Frequency f | Number of oscillations per unit time | Confusing with angular frequency |
| Angular frequency ω | 2π × frequency, in rad s⁻¹ | Using f where ω is needed |
| Phase difference | How far one oscillation is ahead of another, as a fraction of a cycle, in radians or degrees | Giving a time instead of an angle |

The period in terms of both frequencies:

```
T = 1/f = 2π/ω          ω = 2πf
```

Phase difference between two oscillations of the same period, when one reaches a given point a time Δt after the other:

```
phase difference = (Δt / T) × 2π rad   =  (Δt / T) × 360°
```

## The defining condition, and how to test for it

Simple harmonic motion (SHM) needs two features of the acceleration:

1. it is **proportional to the displacement** from a fixed point (the equilibrium position)
2. it is **always directed towards** that point, opposite to the displacement

Both are captured in a = −ω²x, where ω² is a positive constant. To test whether a motion is simple harmonic, write the acceleration in terms of x and compare:

- a = −250x is SHM, with ω² = 250 and ω = 15.8 rad s⁻¹
- a = +9x is not SHM: the acceleration points away from equilibrium, so the displacement grows
- a = −4x² is not SHM: the acceleration is not proportional to x
- a = −5 (constant) is not SHM: the acceleration does not depend on x

A mass on a spring is the standard example. Hooke's law gives a restoring force F = −kx, so a = −(k/m)x. Comparing with a = −ω²x shows the motion is simple harmonic with ω² = k/m. This comparison, rather than any formula to memorise, is what the syllabus asks you to do.

## The equations and what they mean

Taking t = 0 as the moment the oscillator passes through equilibrium moving in the positive direction:

```
x = x₀ sin ωt
v = v₀ cos ωt        where v₀ = ωx₀ (maximum speed)
a = −ω²x = −ω²x₀ sin ωt      maximum magnitude ω²x₀
```

If timing starts at an extreme (released from rest at x = +x₀), the displacement is x₀ cos ωt instead. The physics is identical; only the starting point of the clock changes, so check which description matches the question.

The velocity–displacement relation needs no time at all:

```
v = ±ω√(x₀² − x²)
```

The ± shows that at any displacement the oscillator can be moving either way; the speed is the same in both directions. At x = 0 the speed is ωx₀; at x = ±x₀ it is zero.

**Calculator warning.** In sin ωt and cos ωt, ωt is in **radians**. Set the calculator to radian mode before any of these calculations.

## Reading the graphs

For x = x₀ sin ωt:

- The **velocity–time** graph is a cosine: velocity is the gradient of the displacement–time graph. It is maximum where the x–t graph crosses zero (steepest) and zero at the peaks and troughs. Velocity leads displacement by a quarter of a cycle (π/2 rad).
- The **acceleration–time** graph is the displacement graph inverted and scaled by ω². Acceleration is the gradient of the velocity–time graph, and is in antiphase with displacement (π rad).
- The **acceleration–displacement** graph is a straight line through the origin with **negative gradient −ω²**, running from (−x₀, +ω²x₀) to (+x₀, −ω²x₀). This is the graphical test for SHM, and its gradient gives ω directly.
- The **velocity–displacement** graph is an ellipse (a circle if the axes are scaled suitably), with v = ±ωx₀ at x = 0 and v = 0 at x = ±x₀.

## Worked example 1: reading ω from an acceleration–displacement graph

An acceleration–displacement graph for an oscillator is a straight line through the origin. At x = +0.030 m the acceleration is −12 m s⁻². Find ω, the period and the frequency.

```
gradient = −12 / 0.030 = −400 s⁻²  so  ω² = 400
ω = 20 rad s⁻¹
T = 2π/ω = 2π/20 = 0.31 s
f = 1/T = 3.2 Hz
```

*Annotation.* A straight line through the origin with negative gradient is the evidence that the motion is simple harmonic; state that before using the gradient. The unit of the gradient is s⁻², consistent with ω² in rad² s⁻².

## Worked example 2: displacement and velocity at a given time

An oscillator has amplitude 0.060 m and frequency 2.5 Hz. At t = 0 it passes through equilibrium moving in the positive direction. Find its displacement and velocity at t = 0.070 s.

```
ω = 2πf = 2π × 2.5 = 15.7 rad s⁻¹
ωt = 15.7 × 0.070 = 1.10 rad
x = x₀ sin ωt = 0.060 × sin(1.10) = 0.060 × 0.891 = 0.053 m
v = v₀ cos ωt = (15.7 × 0.060) × cos(1.10) = 0.942 × 0.454 = 0.43 m s⁻¹
check: v = ω√(x₀² − x²) = 15.7 × √(0.060² − 0.0535²) = 0.43 m s⁻¹
```

*Annotation.* The check uses the time-free equation and agrees. The velocity is positive because cos ωt is still positive: the oscillator has not yet reached the extreme, which it does at ωt = π/2 = 1.57 rad.

## Worked example 3: phase difference

Two pendulums have the same period, 1.2 s. Pendulum B reaches its maximum displacement 0.15 s after pendulum A does. State the phase difference.

```
phase difference = (0.15 / 1.2) × 2π = 0.785 rad = π/4 rad  (45°)
```

*Annotation.* Phase difference only has a fixed value when the two periods are equal. Give it as an angle (radians or degrees), and say which oscillation leads if the question asks: here A leads B by π/4.

## Common mistakes

- **Degree mode** in sin ωt: x = 0.040 sin(5.0 × 0.30) is 0.040 m in radians but 1.0 × 10⁻³ m in degrees.
- **Dropping the minus sign** in a = −ω²x when defining SHM.
- **Using f for ω** in v₀ = ωx₀ or a = −ω²x.
- **Taking the peak-to-peak distance as the amplitude.**
- **Saying acceleration is maximum at equilibrium.** It is zero there; speed is maximum there.
- **Stating phase difference as a time** rather than an angle.

## Exam technique for the command words

- **State** (the conditions for SHM): proportional to displacement from a fixed point; directed towards that point (opposite to displacement).
- **Explain how the graph shows SHM**: a–x is a straight line through the origin (proportional) with negative gradient (opposite direction).
- **Determine** (ω from a graph): quote the gradient with its sign, set it equal to −ω², and take the square root.
- **Calculate**: radians throughout; give ω in rad s⁻¹ and f in Hz.
- **Sketch** (v–t or a–t from x–t): keep the same period, mark the quarter-cycle shift for velocity and the half-cycle shift for acceleration, and label the peak values ωx₀ and ω²x₀.

## Related resources

- [Oscillations study guide](/resources/a-physics-oscillations/) — the whole of Topic 17
- [Simple harmonic oscillations revision notes](/resources/cambridge-a-level-physics-9702-a-simple-harmonic-oscillations-revision-notes/)
- [Simple harmonic oscillations practice questions](/resources/cambridge-a-level-physics-9702-a-simple-harmonic-oscillations-practice/)
- [Energy in simple harmonic motion study guide](/resources/cambridge-a-level-physics-9702-a-energy-in-simple-harmonic-motion/) — the next subtopic

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
