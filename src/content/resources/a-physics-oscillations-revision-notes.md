---
title: "A Level Physics: Oscillations — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Oscillations"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 17.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-oscillations"
    subtopic: "a-simple-harmonic-oscillations"
  - qualification: "a-level"
    topic: "a-oscillations"
    subtopic: "a-energy-in-simple-harmonic-motion"
  - qualification: "a-level"
    topic: "a-oscillations"
    subtopic: "a-damped-and-forced-oscillations-resonance"
description: "Condensed recall notes on simple harmonic motion, energy in SHM, damping and resonance for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Oscillations study guide](/resources/a-physics-oscillations/).

## Defining SHM

> Motion in which the acceleration is **proportional to the displacement** from a fixed point and **always directed towards** that point.

```
a = -omega^2 x
```

The **minus sign is the definition** — it encodes "directed towards equilibrium". Omitting it loses the mark even if the rest is right.

## Equations

```
angular frequency   omega = 2 pi f = 2 pi / T

displacement        x = x0 sin(omega t)     (starting at equilibrium)
                    x = x0 cos(omega t)     (starting at maximum)

velocity            v = +/- omega sqrt(x0^2 - x^2)
maximum velocity    v_max = omega x0        (at x = 0)
maximum accel.      a_max = omega^2 x0      (at x = +/- x0)
```

## Where each quantity peaks

| At equilibrium (x = 0) | At maximum displacement (x = ±x₀) |
|---|---|
| **Velocity maximum** | Velocity **zero** |
| Acceleration **zero** | **Acceleration maximum** |
| Kinetic energy maximum | Potential energy maximum |
| Potential energy zero | Kinetic energy zero |

Velocity and acceleration are **90° out of phase**; acceleration and displacement are **180° out of phase**.

## Energy in SHM

```
total energy   E = 1/2 m omega^2 x0^2       (constant)
kinetic        Ek = 1/2 m omega^2 (x0^2 - x^2)
potential      Ep = 1/2 m omega^2 x^2
```

Both Ek and Ep vary as **x²**, so their graphs against displacement are parabolas — and their sum is a horizontal line.

## Damping

| Type | Behaviour |
|---|---|
| **Light** | Amplitude decays exponentially over many oscillations |
| **Critical** | Returns to equilibrium in the **shortest time without oscillating** |
| **Heavy (over)** | Returns slowly, no oscillation |

Critical damping is the one used in car suspension and analogue meters.

Damping reduces amplitude but leaves the period essentially unchanged for light damping.

## Resonance

When the driving frequency equals the system's **natural frequency**, energy transfer is maximum and amplitude peaks.

Increasing damping **lowers** the peak amplitude **and shifts it to a slightly lower frequency**, while broadening the curve.

Examples: tuned circuits, MRI, musical instruments — and the destructive cases such as bridges and buildings in earthquakes.

## Exam traps

- Omitting the minus sign in a = −ω²x.
- Confusing where velocity and acceleration are maximum.
- Using degrees when ω is in rad/s.
- Saying damping changes the period noticeably — for light damping it does not.
- Describing critical damping as "the fastest return" without "**without oscillating**".
- Forgetting total energy in SHM is constant.

## Self-test

1. Define simple harmonic motion.
2. Where in the cycle is acceleration greatest, and where is velocity greatest?
3. A pendulum has amplitude 0.05 m and ω = 4 rad/s. Find v_max.
4. What distinguishes critical from heavy damping?
5. What happens to the resonance peak as damping increases?

**Answers:** 1. Motion in which acceleration is proportional to displacement from a fixed point and always directed towards that point (a = −ω²x). 2. Acceleration is greatest at maximum displacement; velocity is greatest at the equilibrium position. 3. v_max = ωx₀ = 4 × 0.05 = **0.2 m/s**. 4. Critical damping returns the system to equilibrium in the shortest possible time without oscillating; heavy damping returns it more slowly, also without oscillating. 5. The peak amplitude falls, the peak shifts to a slightly lower frequency, and the curve broadens.
