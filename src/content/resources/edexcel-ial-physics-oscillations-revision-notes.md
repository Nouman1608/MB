---
title: "Edexcel IAL Physics: Oscillations — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 5.5
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-5-thermodynamics-radiation-oscillations-and-cosmology"
    subtopic: "oscillations-edexcel"
description: "Condensed recall notes on simple harmonic motion, energy in SHM, damping and resonance for Edexcel International A Level Physics YPH11 (Unit 5, WPH15)."
author: "iftikhar-azeemi"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Oscillations study guide](/resources/edexcel-ial-physics-oscillations-ial/).

## Simple harmonic motion

**Definition — both parts are required:**

> Acceleration is **proportional to displacement** from the equilibrium position and always directed **towards** it.

```
a = -omega^2 x
x = A cos(omega t)   or   A sin(omega t)
v_max = omega A        a_max = omega^2 A
omega = 2 pi f = 2 pi / T
```

*Background — beyond the specification, not among outcomes 143-145 or the
supplied formulae:* the velocity-displacement relation, v = ±ω√(A² − x²),
gives the speed at any displacement x directly, without needing time t.

**The minus sign is the definition.** It encodes "towards equilibrium", and dropping it means you have not stated SHM. The underlying condition is **F = −kx**: the restoring force is directly proportional to displacement and directed towards equilibrium — this identifies which physical systems actually undergo SHM.

**Worked example.** A 0.60 kg mass oscillates on a spring of constant 15 N/m, amplitude 0.080 m. T = 2π√(m/k) = 2π√(0.60/15) = 2π√0.04 = **1.26 s**. ω = 2π/T = **5.0 rad/s**. Maximum acceleration (at x = A): a_max = ω²A = 25 × 0.080 = **2.0 m/s²**.

**Standard systems:**

```
pendulum:   T = 2 pi sqrt(L/g)        (small angles only)
mass-spring: T = 2 pi sqrt(m/k)
```

**Neither period depends on amplitude** — that is what makes them useful as timekeepers, and it is a frequent question.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-oscillations-revision-notes--04-spring-worked-example.webp" width="900" height="1120" alt="A 0.60 kg mass on a 15 N/m spring with amplitude 0.080 m: T = 1.26 s, omega = 5.0 rad/s, maximum acceleration 2.0 m/s^2 towards equilibrium, with a straight-line acceleration-displacement graph of gradient -omega^2." loading="lazy">
  <figcaption>Period, angular frequency and maximum acceleration for the lesson worked example.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--05-shm-restoring-force.webp" width="900" height="1000" alt="A 0.40 kg mass on a 25 N/m spring at x = -0.050 m, 0 and +0.050 m with restoring force arrows to scale (1.25 N towards equilibrium, zero at equilibrium). An acceleration-displacement graph is a straight line through the origin with gradient -omega squared = -62.5 per second squared, so omega squared = k/m and T = 0.795 s." loading="lazy">
  <figcaption>The restoring force and acceleration are proportional to displacement and opposite to it.</figcaption>
</figure>


## Phase relationships

Displacement, velocity and acceleration are all sinusoidal but out of step:

- **Velocity leads displacement by 90°** — velocity is maximum at zero displacement, and zero at maximum displacement.
- **Acceleration is 180° out of phase with displacement** — maximum and opposite at the extremes, zero at the centre.

So at the **equilibrium position**: displacement zero, velocity maximum, acceleration zero. At **maximum displacement**: velocity zero, acceleration maximum. Reading those two states correctly answers most graph questions.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--06-shm-graphs.webp" width="900" height="1110" alt="Three stacked graphs over one period for amplitude 0.050 m and omega 4.0 per second: x is a cosine, v a negative sine with maximum 0.20 m/s a quarter cycle ahead of x, and a a negative cosine with maximum 0.80 m/s^2 in antiphase with x. Dotted lines mark quarter periods." loading="lazy">
  <figcaption>v leads x by a quarter cycle and a is in antiphase with x.</figcaption>
</figure>


## Energy

*Background — beyond the specification, not among outcomes 143-145 or the
supplied formulae (and the potential-energy form below is, in any case, only
an approximation for the named simple pendulum):*

```
Ek = 1/2 m omega^2 (A^2 - x^2)
Ep = 1/2 m omega^2 x^2
E_total = 1/2 m omega^2 A^2      constant
```

Kinetic energy is maximum at the centre; potential energy is maximum at the extremes; **the total is constant** in the absence of damping.

Both energy curves have **twice the frequency** of the displacement curve, because energy is maximum twice per cycle.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--07-shm-energy.webp" width="900" height="1080" alt="For a 0.250 kg oscillator with A 0.080 m and f 1.8 Hz the total energy is 0.102 J. Against displacement, Ep is an upright parabola and Ek an inverted parabola under a flat total line, crossing at plus and minus A over root 2. Against time each energy completes two cycles per oscillation and they are in antiphase." loading="lazy">
  <figcaption>Energy swaps between kinetic and potential, with the total constant when there is no damping.</figcaption>
</figure>


## Damping

Resistive forces remove energy, so amplitude decreases.

| Type | Behaviour |
|---|---|
| **Light** | Amplitude decays gradually; many oscillations |
| **Heavy** | Slow return to equilibrium without oscillating |
| **Critical** | **Fastest** return to equilibrium without overshooting |

**Critical damping is the fastest return, not the slowest.** It is used in car suspension and measuring instruments, precisely because overshoot and oscillation are undesirable.

Damping reduces amplitude but has only a small effect on the natural frequency in the lightly damped case. Plastic deformation of ductile materials within a real oscillating structure also dissipates energy, adding to damping's effect in reducing amplitude over successive cycles.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--08-damping-resonance.webp" width="900" height="1110" alt="Top: displacement against time for light, critical and heavy damping, with a dashed envelope on the light-damping curve. Bottom: amplitude of a forced oscillation against driving frequency over natural frequency; light damping gives a tall sharp peak near f0 and heavy damping a lower, broader peak at slightly lower frequency." loading="lazy">
  <figcaption>Damping removes energy; resonance is largest when the driving frequency matches the natural frequency, and damping flattens it.</figcaption>
</figure>


## Resonance

A **free oscillation** happens at a system's own **natural frequency** with no external driving force; a **forced oscillation** is driven by an external periodic force, potentially at a different frequency. **Resonance occurs when the driving frequency equals the natural frequency**, giving maximum amplitude and maximum energy transfer. **CORE PRACTICAL 16** uses this relationship in reverse — determining an unknown mass from the resonant frequencies of oscillation of known masses.

Increasing damping **reduces the peak amplitude** and makes the resonance curve **broader**, and shifts the peak slightly to a lower frequency.

**Examples:** a swing pushed in time; a wine glass shattered by sound; MRI; radio tuning; and the destructive cases — bridges and buildings in earthquakes, which is why dampers are engineered in.

## Exam traps

- Omitting the minus sign or the "towards equilibrium" clause from the SHM definition.
- Saying pendulum period depends on amplitude or on mass.
- Saying acceleration is maximum at the centre — it is zero there.
- Saying critical damping is the slowest return.
- Forgetting that the pendulum formula requires small angles.
- Using degrees where radians are needed for ω.

## Self-test

1. Define simple harmonic motion fully.
2. Where in the cycle are velocity and acceleration each maximum?
3. What does the period of a pendulum depend on, and what does it not?
4. Distinguish light, heavy and critical damping.
5. What happens to a resonance curve as damping increases?
6. State the condition, in terms of force, for a system to undergo SHM.
7. A 0.60 kg mass oscillates on a spring of constant 15 N/m with amplitude 0.080 m. Calculate the period and the maximum acceleration.
8. Distinguish a free oscillation from a forced oscillation.

**Answers:** 1. Acceleration is proportional to displacement from equilibrium and is always directed towards the equilibrium position. 2. Velocity is maximum at the equilibrium position where displacement is zero; acceleration is maximum at maximum displacement. 3. It depends on length and gravitational field strength; it does not depend on amplitude (for small angles) or on the mass of the bob. 4. Light damping gives a slowly decaying oscillation; heavy damping returns to equilibrium slowly without oscillating; critical damping returns in the shortest time without overshooting. 5. The peak amplitude falls, the curve becomes broader, and the peak shifts slightly to a lower frequency. 6. F = −kx — the restoring force is directly proportional to displacement and directed towards equilibrium. 7. T = 2π√(0.60/15) = 1.26 s; ω = 2π/T = 5.0 rad/s; a_max = ω²A = 25 × 0.080 = 2.0 m/s². 8. A free oscillation occurs at the system's own natural frequency with no external driving force; a forced oscillation is driven by an external periodic force, possibly at a different frequency.

## Frequently asked questions

**Is v = ±ω√(A² − x²) required for Edexcel IAL Physics?**
No. The velocity-displacement relation is background beyond the specification. It is not among the outcomes or the supplied formulae, and the same applies to the SHM energy equations on this page.

**Is critical damping the slowest return to equilibrium?**
No. Critical damping gives the fastest return to equilibrium without overshooting. It is used in car suspension and measuring instruments, where oscillation is undesirable.

**What is Core Practical 16 in Edexcel IAL Physics?**
Core Practical 16 determines an unknown mass from the resonant frequencies of oscillation of known masses.

**Why do the energy curves of an oscillator have twice the frequency of the displacement?**
Kinetic and potential energy each reach their maximum twice in every cycle, so their curves repeat twice as often as the displacement curve.
