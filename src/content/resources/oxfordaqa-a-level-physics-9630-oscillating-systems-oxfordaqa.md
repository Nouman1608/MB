---
title: "OxfordAQA A-Level Physics (9630): Oscillating systems"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.5 – Oscillations and waves"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "AS"
order: 5.1
syllabusTopics:
  - qualification: "a-level"
    topic: "oscillations-and-waves-oxfordaqa-alevel"
    subtopic: "oscillating-systems-oxfordaqa"
description: "Study guide to OxfordAQA 9630 section 3.5.1: mass-spring and pendulum periods, energy against displacement and time, damping and Required practical 4."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.5.1, Oscillating systems, the first part of Section 3.5 Oscillations and waves. It is shared International AS and A-level content. Sections 3.5.1 and 3.5.2 are taught together in the [oscillating systems, damping, free and forced vibrations study guide](/resources/oxfordaqa-a-level-physics-oscillating-systems-damping-free-and-forced-vibrations/). After this page, condense it with the [oscillating systems revision notes](/resources/oxfordaqa-a-level-physics-9630-oscillating-systems-oxfordaqa-revision-notes/) and test yourself with the [oscillating systems practice questions](/resources/oxfordaqa-a-level-physics-9630-oscillating-systems-oxfordaqa-practice/).

Take g = 9.81 m s⁻² unless a question gives another value.

## What the specification asks for

| Statement in 3.5.1 | What you must be able to do |
|---|---|
| Mass-spring system: T = 2π√(m/k) | Use and rearrange; know what T depends on |
| Simple pendulum: T = 2π√(l/g) | Use and rearrange; know the conditions |
| Variation of Ek, Ep and total energy with both displacement and time | Sketch and interpret the energy graphs |
| Effects of damping on oscillations | Describe light, heavy and critical damping |
| Required practical 4 | Investigate simple harmonic systems with a mass-spring system and a simple pendulum |

The full mathematical treatment of simple harmonic motion (equations for displacement, velocity and acceleration) is in section 3.6.2, International A-level only.

## The vocabulary of oscillation

- **Equilibrium position:** where the oscillating object would rest; the restoring force is zero there.
- **Displacement x:** distance from equilibrium in a stated direction.
- **Amplitude A:** the maximum displacement.
- **Period T:** the time for one complete oscillation; **frequency** f = 1/T.

## What the period depends on

| System | Depends on | Does not depend on |
|---|---|---|
| Mass-spring, T = 2π√(m/k) | Mass m, spring constant k | Amplitude; g |
| Simple pendulum, T = 2π√(l/g) | Length l, gravitational field strength g | Mass of bob; amplitude (for small angles) |

Two conditions apply. The spring must obey Hooke's law throughout the motion; the pendulum formula holds only for small angles of swing (in practice below about 10°). Within those limits the period does not change as the amplitude dies away, which is what makes a pendulum a useful timekeeper.

The length l of a pendulum is measured from the point of suspension to the **centre of mass** of the bob.

### Proportional reasoning

Because T ∝ √m and T ∝ √l, multiplying the mass or the length by 4 doubles the period. Because T ∝ 1/√k and T ∝ 1/√g, a stiffer spring or a stronger gravitational field shortens the period.

**Worked example 1: the same pendulum on the Moon.** A pendulum has period 1.50 s on Earth. Find its period on the Moon, where g = 1.62 m s⁻².

T ∝ 1/√g, so T_Moon = 1.50 × √(9.81/1.62) = 1.50 × 2.46 = **3.69 s**.

A mass-spring system taken to the Moon would keep the same period, because g does not appear in T = 2π√(m/k).

## Energy in an oscillation

For an undamped oscillator, energy is continually transferred between kinetic energy Ek and potential energy Ep (elastic for a horizontal spring; gravitational for a pendulum), while the total stays constant.

**Against displacement**

- Ep is zero at equilibrium and maximum at x = ±A. For a horizontal spring Ep = ½kx², a parabola.
- Ek = total − Ep: maximum at equilibrium, zero at x = ±A; an inverted parabola.
- Total energy: a horizontal line.

**Against time**

- Ek and Ep each rise and fall twice per period, because each reaches its maximum twice in every oscillation (once on each side for Ep, once in each direction for Ek). Their graphs have half the period of the displacement graph.
- Neither energy is ever negative.
- When Ek is at a maximum, Ep is zero, and vice versa; their sum is constant.

### Worked example 2: energy at a point

A 0.40 kg trolley oscillates horizontally between two springs with combined spring constant 40 N m⁻¹ and amplitude 0.050 m. Find the period, the total energy, and the speed at x = 0.030 m.

T = 2π√(0.40/40) = **0.63 s**.

Total energy = Ep at maximum displacement = ½ × 40 × 0.050² = **0.050 J**.

At x = 0.030 m: Ep = ½ × 40 × 0.030² = 0.018 J, so Ek = 0.050 − 0.018 = 0.032 J.

v = √(2Ek/m) = √(2 × 0.032 / 0.40) = **0.40 m s⁻¹**. The maximum speed, at equilibrium, is √(2 × 0.050 / 0.40) = 0.50 m s⁻¹.

## Damping

Damping is the effect of resistive forces (such as air resistance or friction) that transfer energy from the oscillator to the surroundings, so the amplitude decreases.

- **Light damping:** the oscillator completes many oscillations, with the amplitude decreasing gradually; the period is almost unchanged.
- **Critical damping:** the system returns to equilibrium in the shortest possible time without oscillating.
- **Heavy damping:** the system returns to equilibrium without oscillating, but more slowly than with critical damping.

On an energy-time graph for a damped oscillator, the total energy falls step by step; on a displacement-time graph, the peaks shrink while the time between them stays nearly constant. Car suspension is an example where damping is designed in: shock absorbers bring the car body back to its rest position quickly after a bump, close to critical damping, so it does not keep bouncing.

## Required practical 4 in depth

The specification describes this as "Investigation into simple harmonic systems using a mass-spring system and a simple pendulum".

**Good technique for both systems**

- Time 10 or 20 oscillations and divide, so that human reaction time is a small fraction of the total.
- Use a fiducial marker (a fixed pointer) at the equilibrium position and start and stop timing as the object passes it. The object moves fastest there, so the moment it passes is sharpest.
- Repeat each timing and average.
- Keep the amplitude small: for the pendulum to stay within the small-angle condition, and for the spring to obey Hooke's law.

**Analysis by straight-line graphs**

- Mass-spring: T² = (4π²/k) m, so T² against m is a straight line through the origin with gradient 4π²/k.
- Pendulum: T² = (4π²/g) l, so T² against l is a straight line through the origin with gradient 4π²/g.

### Worked example 3: finding k

A student times 10 oscillations for masses on a spring.

| m / kg | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 |
|---|---|---|---|---|---|
| 10T / s | 3.98 | 5.60 | 6.90 | 7.94 | 8.90 |
| T² / s² | 0.158 | 0.314 | 0.476 | 0.630 | 0.792 |

Gradient = (0.792 − 0.158) / (0.50 − 0.10) = 1.58 s² kg⁻¹.

k = 4π² / gradient = 39.5 / 1.58 = **25 N m⁻¹**.

The spring constant can be checked independently by hanging a known mass and measuring the static extension (k = mg/ΔL). A graph that does not pass through the origin suggests a systematic error, such as ignoring the spring's own mass.

For the pendulum, a gradient of 4.02 s² m⁻¹ from a T² against l graph gives g = 4π² / 4.02 = 9.82 m s⁻². If l was measured only to the top of the bob, every length is too short by the bob's radius: the line is shifted sideways but the gradient, and so g, is unaffected.

## Common mistakes

- Taking T² as T, or forgetting to divide the total time by the number of oscillations.
- Measuring pendulum length to the top or bottom of the bob in a single-length calculation.
- Saying the pendulum period depends on mass, or the mass-spring period depends on g.
- Drawing energy-time graphs with the same period as the displacement.
- Saying damping changes the period significantly (for light damping it hardly does).
- Confusing critical and heavy damping.

## Exam technique

- **Calculate**: write the formula, rearrange before substituting, and give units.
- **Explain** a straight-line graph: square the formula to show T² ∝ m or T² ∝ l, then state what the gradient equals.
- **Sketch** energy graphs: label Ek, Ep and total; show total as constant (undamped) or falling (damped).
- **Describe** the practical: what is varied, what is measured, how timing uncertainty is reduced, and how the result comes from the gradient.
- **Compare** damping types using the time to return to equilibrium and whether oscillation occurs.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.5.1 Oscillating systems, published by OxfordAQA.
