---
title: "IB DP Physics: Simple harmonic motion: equations, period and energy (DP Physics) -- Revision Notes"
seoTitle: "IB DP Physics C.1 SHM Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["ib"]
topic: "Simple harmonic motion: equations, period and energy"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 283
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-c"
    subtopic: "ib-dp-physics-c-1"
description: "Condensed IB DP Physics C.1 revision notes on SHM: conditions, a = –ω²x, period formulas, energy changes, plus HL phase angle and energy equations."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These are condensed revision notes for sub-topic C.1, Simple harmonic motion, in the IB *Physics guide* (first assessment 2025). The core is for SL and HL. Anything marked "HL only" is additional higher level content. For explanations and longer worked examples, read the [study guide](/resources/ib-dp-physics-simple-harmonic-motion-equations-period-and-energy/). When you are ready, try the [practice questions](/resources/ib-dp-physics-simple-harmonic-motion-equations-period-and-energy-practice/) or a [free 10-minute diagnostic](/diagnostics/).

Also useful: the [course hub](/boards/ib/ib-dp/physics/), the [printable checklist](/checklists/ib/ib-dp/physics/) and [kinematics](/resources/ib-dp-physics-kinematics/).

## Definitions and conditions

- **Equilibrium position:** where the net force is zero.
- **Displacement x:** distance from equilibrium, with direction.
- **Amplitude x₀:** maximum displacement.
- **Time period T:** the time taken by one full oscillation. **Frequency f:** the number of oscillations in each second.
- **Angular frequency ω:** 2πf, in rad s⁻¹.
- **SHM conditions:** the net force points towards equilibrium, and its size is proportional to the displacement (F = –kx).
- **Defining equation:** a = –ω²x. The minus sign means the acceleration is always towards equilibrium, opposite to the displacement.

## Formulas

| Result | Equation | Level |
|---|---|---|
| Period, frequency, angular frequency | T = 1/f = 2π/ω | SL and HL |
| Defining equation | a = –ω²x | SL and HL |
| Mass-spring period | T = 2π√(m/k) | SL and HL |
| Simple pendulum period | T = 2π√(l/g) | SL and HL |
| Displacement | x = x₀ sin(ωt + φ) | HL only |
| Velocity | v = ωx₀ cos(ωt + φ) | HL only |
| Velocity against displacement | v = ±ω√(x₀² – x²) | HL only |
| Total energy | E_T = ½mω²x₀² | HL only |
| Potential energy | E_p = ½mω²x² | HL only |

Useful results that follow: maximum speed = ωx₀ (at equilibrium), maximum acceleration = ω²x₀ (at the turning points), and E_K = E_T – E_p = ½mω²(x₀² – x²).

## Method boxes

**Finding a period**
1. Identify the system: spring (use m and k) or pendulum (use l and g).
2. Substitute in SI units: kilograms, newtons per metre, metres.
3. Take the square root last, then multiply by 2π.
4. For ω, use ω = 2π/T. For f, use 1/T.

**Rearranging**
- Spring constant: k = 4π²m/T²
- Pendulum: g = 4π²l/T² or l = gT²/4π²
- A graph of T² against l for a pendulum is a straight line through the origin with gradient 4π²/g.

**HL: finding the phase angle**
1. Put t = 0 into x = x₀ sin φ and solve for φ in radians.
2. There are two solutions in one cycle. Use the sign of the velocity at t = 0 (v = ωx₀ cos φ) to pick the right one.
3. Keep everything in radians.

## Small worked reminders

**Period of each system.** A pendulum of length 2.0 m with g = 9.81 m s⁻² has T = 2π√(2.0/9.81) = 2.84 s. A 0.50 kg mass on a spring with k = 200 N m⁻¹ has T = 2π√(0.50/200) = 0.314 s, so ω = 2π/T = 20 rad s⁻¹.

**HL speed.** With ω = 10 rad s⁻¹, amplitude 0.030 m and x = 0.020 m: v = 10 × √(0.030² – 0.020²) = 0.224 m s⁻¹.

**Scaling.** Because T depends on a square root, changing a quantity by a factor n changes T by √n. Quadrupling the mass on a spring doubles T, and quartering the length of a pendulum halves T. Neither change tells you anything about the amplitude.

**HL energy.** A 0.20 kg mass with ω = 10 rad s⁻¹ and amplitude 0.030 m has E_T = ½ × 0.20 × 10² × 0.030² = 0.0090 J.

## Graphs of SHM against time (HL equations)

Taking x = x₀ sin(ωt) with φ = 0, the three graphs are related like this:

| Graph | Shape | Value at t = 0 | Maximum size |
|---|---|---|---|
| Displacement x | Sine curve | 0 | x₀ |
| Velocity v | Cosine curve | ωx₀ | ωx₀ |
| Acceleration a | Negative sine curve | 0 | ω²x₀ |

- The velocity is the gradient of the displacement graph. It is zero at the peaks and troughs of x and largest where x crosses zero.
- The acceleration is the gradient of the velocity graph, and it is always the negative of ω² times the displacement. When x is at a peak, a is at its most negative.
- The velocity leads the displacement by a quarter of a cycle (π/2 rad). The acceleration is in antiphase with the displacement (a phase difference of π rad).
- A non-zero φ shifts every curve sideways along the time axis. It does not change the amplitude or the period.

## Setting up a pendulum or spring question

**Pendulum checks**
- Is l the distance from the pivot to the centre of mass of the bob?
- Is the angle small? If not, T = 2π√(l/g) is only approximate.
- Is g given, or does the question change planet or lift?

**Spring checks**
- Is the mass the only mass that oscillates? Add any extra mass hung from the spring.
- Is k given directly, or do you have to find it from a force and an extension, k = F/Δx?
- A vertical spring has the same period formula as a horizontal one. Only the equilibrium position changes.

**Energy checks**
- Name the types of energy you are comparing, and state the position.
- For a quantitative question (HL only), find E_T from the amplitude first, then find E_p at the given x, then subtract to get E_K.
- Say what happens if damping is present: the total falls, so the amplitude falls.

## Energy over one cycle

| Position | Speed | Kinetic | Potential |
|---|---|---|---|
| Turning point (x = ±x₀) | Zero | Zero | Maximum |
| Equilibrium (x = 0) | Maximum | Maximum | Minimum |

- The total stays constant when there are no dissipative forces.
- Spring: potential energy is elastic. Pendulum: gravitational.
- Against time, both energies repeat twice per period. Against displacement, E_p is a parabola, E_K an inverted parabola, and E_T a horizontal line.

## Must-know distinctions

- **ω and speed:** ω is the rate of change of phase in rad s⁻¹. Speed is in m s⁻¹.
- **Mass and period:** the spring period depends on mass, the pendulum period does not.
- **Amplitude and period:** neither period depends on amplitude (for a pendulum, provided the angle is small).
- **Velocity and acceleration:** speed is greatest where acceleration is zero, and the reverse.
- **x and x₀:** x changes with time, x₀ is fixed.

## Quick self-test

1. State the two conditions that must be met for motion to be SHM.
2. An oscillator has frequency 4.0 Hz. Find its period and angular frequency.
3. An oscillator has ω = 3.0 rad s⁻¹. What is the size of its acceleration at x = 0.12 m, and in which direction?
4. A 0.15 kg mass hangs on a spring of spring constant 120 N m⁻¹. Find the period.
5. A pendulum has period 3.0 s where g = 9.81 m s⁻². Find its length.
6. The mass on a spring is increased by a factor of four. What happens to the period?
7. Where in the cycle is the kinetic energy of a pendulum greatest, and where is its potential energy greatest?
8. HL: An oscillator has amplitude 0.15 m and ω = 8.0 rad s⁻¹. Find its maximum speed and maximum acceleration.
9. HL: An oscillator has amplitude 0.20 m and ω = 2.0 rad s⁻¹. Find its speed at x = 0.12 m.
10. HL: A 0.50 kg mass has ω = 4.0 rad s⁻¹ and amplitude 0.10 m. Find the total energy.
11. HL: At t = 0 the displacement is +x₀. Find φ.
12. The length of a pendulum is increased by a factor of nine. What happens to the period?

### Answers

1. The net force always points towards equilibrium, and its magnitude is proportional to the displacement.
2. T = 1/4.0 = 0.25 s. ω = 2π × 4.0 = 25 rad s⁻¹ (25.1).
3. a = ω²x = 9.0 × 0.12 = 1.1 m s⁻² (1.08), directed towards equilibrium.
4. T = 2π√(0.15/120) = 0.222 s.
5. l = gT²/4π² = 9.81 × 9.0/39.48 = 2.2 m (2.24).
6. T is proportional to √m, so it doubles.
7. Kinetic energy is greatest as it passes through the lowest point (equilibrium). Potential energy is greatest at the ends of the swing.
8. v_max = ωx₀ = 1.2 m s⁻¹. a_max = ω²x₀ = 9.6 m s⁻².
9. v = 2.0 × √(0.20² – 0.12²) = 2.0 × 0.16 = 0.32 m s⁻¹.
10. E_T = ½ × 0.50 × 4.0² × 0.10² = 0.040 J.
11. sin φ = 1, so φ = π/2 rad.
12. T is proportional to √l, so the period is multiplied by three.

## Where marks are usually lost

- Leaving out the "towards equilibrium" idea when explaining the minus sign.
- Stating "proportional to displacement" without saying the force or acceleration is opposite to it.
- Using degrees for φ or for the argument of the sine.
- Putting mass into the pendulum period formula.
- Forgetting that a graph of T² against l, not T against l, is the straight line.
- Quoting maximum kinetic energy at the turning points.
- Not specifying that the energy is conserved only if no energy is dissipated.
- Ignoring the direction of motion when using v = ±ω√(x₀² – x²), or choosing the wrong phase angle when two values of φ fit.
- Writing answers without units, or with the wrong ones (rad s⁻¹ for ω, Hz for f).

## Official syllabus

Source: *Physics guide*, first assessment 2025, International Baccalaureate Organization (Diploma Programme), sub-topic C.1 Simple harmonic motion.
