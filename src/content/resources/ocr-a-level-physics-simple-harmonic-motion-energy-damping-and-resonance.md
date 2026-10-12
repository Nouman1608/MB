---
title: "OCR A Level Physics A: Simple harmonic motion, energy, damping and resonance (H556)"
seoTitle: "OCR A Level Physics SHM and Resonance Study Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Simple harmonic motion, energy, damping and resonance"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 59
syllabusTopics:
  - qualification: "a-level"
    topic: "newtonian-world-and-astrophysics"
    subtopic: "oscillations-ocr-alevel"
description: "Study guide to simple harmonic motion, its equations and graphs, energy, damping and resonance, with worked examples, for OCR A Level Physics A (H556)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
This guide covers section 5.3 (Oscillations), statements 5.3.1(a) to (g), 5.3.2(a) and (b) and 5.3.3(a) to (e), of the OCR Advanced GCE in Physics A specification (H556), Version 3.0 (March 2026), for first assessment in 2017. H556 is the full A level, and this section sits in module 5, which the specification says is assessed in Modelling physics (01) and Unified physics (03). Course pages: [OCR A Level Physics hub](/boards/ocr/a-level/physics/) | [checklist](/checklists/ocr/a-level/physics/) | [free diagnostics](/diagnostics/).

Companion pages: [revision notes](/resources/ocr-a-level-physics-simple-harmonic-motion-energy-damping-and-resonance-revision-notes/) and [practice questions](/resources/ocr-a-level-physics-simple-harmonic-motion-energy-damping-and-resonance-practice/). For standing-wave resonance see [stationary waves](/resources/ocr-a-level-physics-stationary-waves-harmonics-and-resonance-tubes/).

## What this unit covers

| Statement | What you must be able to do |
|---|---|
| 5.3.1(a) | Use displacement, amplitude, period, frequency, angular frequency and phase difference |
| 5.3.1(b) | Use ω = 2π/T and ω = 2πf |
| 5.3.1(c)(i) | Define SHM by a = −ω²x |
| 5.3.1(c)(ii) | Describe techniques for finding the period or frequency (PAG10: mass on a spring, pendulum) |
| 5.3.1(d) | Use the solutions x = A cos ωt and x = A sin ωt |
| 5.3.1(e) | Use v = ±ω√(A² − x²) and vmax = ωA |
| 5.3.1(f) | Explain that the period is independent of amplitude (isochronous) |
| 5.3.1(g) | Relate displacement, velocity and acceleration graphically |
| 5.3.2(a), (b) | Describe the kinetic and potential energy interchange and sketch energy-displacement graphs |
| 5.3.3(a) to (e) | Free and forced oscillations, damping, resonance, natural frequency, amplitude-driving frequency graphs, practical examples |

## Describing an oscillation (5.3.1(a), (b))

- Displacement x: distance from the equilibrium position, in a stated direction (a vector).
- Amplitude A: the maximum displacement.
- Period T: time for one complete oscillation. Frequency f = 1/T.
- Angular frequency ω = 2π/T = 2πf, in rad s⁻¹.
- Phase difference: how far one oscillation is ahead of another, in radians or degrees. A shift of one full period is 2π rad (360°), so phase difference = 2π × (time shift) / T.

**Worked example 1.** A trolley on springs completes 30 oscillations in 27.0 s. T = 27.0/30 = 0.900 s. f = 1/0.900 = 1.11 Hz. ω = 2π/0.900 = 6.98 rad s⁻¹.

**Worked example 2.** Two identical oscillators have T = 0.60 s. The second reaches its maximum 0.10 s after the first. Phase difference = 2π × 0.10/0.60 = π/3 rad (60°). Two oscillators exactly half a period apart are in antiphase (phase difference π rad).

## Defining SHM (5.3.1(c)(i))

Simple harmonic motion is oscillation where the acceleration is proportional to the displacement, measured from equilibrium, and points back towards equilibrium:

a = −ω²x

The minus sign says the acceleration opposes the displacement. Plotting a against x gives a line through the origin whose gradient is −ω². Any system where the resultant force is F = −kx is SHM, because a = F/m = −(k/m)x, so ω² = k/m. A mass on a spring does this (within the limit of proportionality). A pendulum does so only for small angles. You do not need to quote these two relationships, but deriving ω² = k/m shows how a physical system fits the definition.

**Worked example 3.** A 0.250 kg mass on a spring of constant 40 N m⁻¹ has ω² = 40/0.250 = 160 s⁻², so ω = 12.6 rad s⁻¹ and T = 2π/12.6 = 0.497 s.

## Solutions: displacement, velocity, acceleration (5.3.1(d), (e))

The equation a = −ω²x has solutions of the form:

- x = A cos ωt when timing starts at maximum displacement.
- x = A sin ωt when timing starts at the equilibrium position.

Differentiating x = A cos ωt gives v = −Aω sin ωt, then a = −Aω² cos ωt = −ω²x. Using cos² + sin² = 1:

v² = A²ω² sin² ωt = ω²(A² − A² cos² ωt), so v = ±ω√(A² − x²)

The speed is largest at x = 0, so vmax = ωA. The maximum acceleration is ω²A, at the ends of the motion, where v = 0. The ± gives both directions of travel at the same displacement.

**Worked example 4.** A = 0.038 m and f = 3.5 Hz. ω = 2π × 3.5 = 22.0 rad s⁻¹. vmax = 22.0 × 0.038 = 0.836 m s⁻¹. Maximum acceleration = 22.0² × 0.038 = 18.4 m s⁻². At x = 0.025 m: v = 22.0 × √(0.038² − 0.025²) = 22.0 × 0.02862 = 0.629 m s⁻¹, and a = 22.0² × 0.025 = 12.1 m s⁻², directed towards the equilibrium position.

**Worked example 5.** A = 6.0 cm, f = 1.5 Hz, released from maximum displacement. ω = 2π × 1.5 = 9.42 rad s⁻¹, so x = 0.060 cos(9.42t), with the angle in radians.

- At t = 0.10 s: x = 0.060 cos(0.942) = 0.0353 m.
- First time at x = +0.030 m: cos ωt = 0.5, so ωt = π/3 and t = (π/3)/9.42 = 0.111 s. This is T/6, since T = 0.667 s.

## Isochronous oscillators (5.3.1(f))

Because ω² = k/m for a spring, the period T = 2π/ω does not contain A. A larger amplitude means a larger restoring force, and a greater distance to travel, and the two effects cancel. A simple harmonic oscillator is therefore isochronous: its period is independent of amplitude. Real systems only approximate this. A pendulum is isochronous only for small swings.

## Graphs of x, v and a (5.3.1(g))

For x = A cos ωt:

| Quantity | Equation | Shape | Relation to x |
|---|---|---|---|
| x | A cos ωt | cosine | starting point |
| v | −Aω sin ωt | negative sine | leads x by π/2 |
| a | −Aω² cos ωt | negative cosine | antiphase to x (π out) |

Reading the graphs:

- The gradient of the x-t graph is v. It is zero at the peaks and steepest as the curve crosses zero.
- The gradient of the v-t graph is a.
- When x is at a peak, v = 0 and |a| is maximum. When x = 0, |v| is maximum and a = 0.
- On the a-x graph the line has gradient −ω² and passes through the origin. The v-x graph is an ellipse, with semi-axes A on the x axis and ωA on the v axis.

**Worked example 6.** The a-x graph is a line through the origin that passes through (x = 0.040 m, a = −9.0 m s⁻²). Gradient = −9.0/0.040 = −225 s⁻², so ω² = 225 and ω = 15.0 rad s⁻¹. T = 2π/15.0 = 0.419 s and f = 2.39 Hz.

## Measuring the period (5.3.1(c)(ii), PAG10)

For a mass on a spring or a pendulum:

1. Mark the equilibrium position with a fiducial marker (a pin or a card) and start and stop the timer as the mass passes it, because it moves fastest there and the timing error is smaller than at the turning points.
2. Time at least 10 to 20 oscillations and divide, which shrinks the effect of human reaction time on one period.
3. Repeat and take a mean. Use a small, constant amplitude for a pendulum.
4. A motion sensor and data logger give x-t directly, and the period can be read from the graph.
5. Vary one quantity (mass, length, amplitude) and keep the others fixed. A graph of T² against mass for a spring is a straight line.

**Worked example 7.** Twenty oscillations take 31.4 s, with an uncertainty of ±0.2 s for the whole timing. T = 31.4/20 = 1.57 s. The uncertainty in T is 0.2/20 = ±0.01 s, which is 0.64%. If T² against m for a spring has gradient 1.58 s² kg⁻¹, then T² = 4π²m/k gives k = 4π²/1.58 = 25.0 N m⁻¹.

## Energy in SHM (5.3.2)

Energy swaps between kinetic and potential. For a spring, the potential energy is elastic. For a pendulum, it is gravitational. With no damping the total energy stays constant:

- Total energy E = ½mω²A²
- Kinetic energy Ek = ½mv² = ½mω²(A² − x²)
- Potential energy Ep = E − Ek = ½mω²x²

At x = 0 all the energy is kinetic. At x = ±A all of it is potential. Energy-displacement graphs: Ep is a parabola with its minimum at x = 0; Ek is an inverted parabola with its maximum at x = 0; the total is a horizontal line at ½mω²A². The two curves cross at x = ±A/√2, where each is half the total. Against time, both energies vary at twice the frequency of the oscillation.

**Worked example 8.** m = 0.250 kg, A = 0.080 m, f = 1.8 Hz. ω = 11.3 rad s⁻¹. E = ½ × 0.250 × 11.3² × 0.080² = 0.102 J. At x = 0.050 m, Ek = ½ × 0.250 × 11.3² × (0.080² − 0.050²) = 0.0624 J and Ep = 0.0400 J, which add to E. Ek = Ep at x = 0.080/√2 = 0.057 m.

## Free, forced and damped oscillations (5.3.3(a), (b))

A free oscillation happens when a system is displaced and released, then oscillates at its natural frequency f0 with no external force after the start. A forced oscillation has a periodic driving force, and the system oscillates at the driving frequency (after any initial transient).

Damping is the removal of energy from an oscillating system, usually as thermal energy through friction or drag. Its effects:

- The amplitude decreases with each cycle. For light damping, the amplitude falls by about the same fraction each cycle.
- The period increases very slightly, so the motion is not strictly SHM.
- Light damping: many oscillations, slowly decaying. Critical damping: the system settles at equilibrium in the least possible time and does not oscillate. Heavy damping: no oscillation, a slow return.

**Worked example 9.** Amplitude falls from 8.0 cm to 5.0 cm. Energy is proportional to A², so the fraction of energy left is (5.0/8.0)² = 0.39. Energy lost is 61%.

Observations to make (5.3.3(b)(ii)): a mass on a spring with a card attached (more drag), Barton's pendulums, and a mass on a spring driven by a vibration generator at different frequencies.

## Resonance (5.3.3(c) to (e))

Resonance happens when the frequency of the driver is the same as the natural frequency of the oscillator. The amplitude is then a maximum, because the driver supplies energy in step with the motion and transfers energy to the oscillator at the greatest rate.

An amplitude-driving frequency graph has:

- a peak at about f0, where the amplitude is largest;
- a small amplitude far below f0 (the system follows the force slowly) and a very small amplitude far above f0;
- with more damping, a lower and broader peak, with its maximum at a slightly lower frequency.

**Worked example 10.** A 0.10 kg mass on a spring of constant 40 N m⁻¹ has ω0 = √(40/0.10) = 20 rad s⁻¹, so f0 = 20/2π = 3.2 Hz. Driving at 3.2 Hz gives the largest amplitude. Heavier damping lowers that peak without moving it far.

Practical examples include a swing pushed in time, a radio tuned to one station, the sound box of an instrument, a tall building in an earthquake, a washing machine at one spin speed, and nuclear magnetic resonance in MRI. Unwanted resonance is reduced by damping the system or by changing its natural frequency.

## Common errors

- Writing a = ω²x without the minus sign, or calling the sign unimportant.
- Using degrees for ωt in x = A cos ωt.
- Taking vmax as ω²A, or giving the maximum acceleration at the equilibrium position.
- Saying "amplitude is constant, so energy is constant" for a damped oscillator.
- Stating resonance "when frequencies match" without saying driving and natural.

## Official syllabus

OCR Advanced GCE in Physics A (H556) specification, Version 3.0 (March 2026), for first assessment in 2017, published by OCR. Section 5.3, Oscillations.
