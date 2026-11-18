---
title: "AQA A-Level Physics (7408): Periodic motion"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Further mechanics and thermal physics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 6.1
syllabusTopics:
  - qualification: "a-level"
    topic: "further-mechanics-and-thermal-physics"
    subtopic: "periodic-motion-aqa-alevel"
description: "AQA A-Level Physics 7408 periodic motion in depth: circular motion problems, SHM phase and timing, spring and pendulum analysis, damping and resonance."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This study guide goes deeper into sub-section 3.6.1 Periodic motion of the AQA AS and A-level Physics specification (7407/7408, AS and A-level exams June 2016 onwards). It covers 3.6.1.1 Circular motion, 3.6.1.2 Simple harmonic motion, 3.6.1.3 Simple harmonic systems and 3.6.1.4 Forced vibrations and resonance. All of it is **A-level only** and is assessed in Paper 1.

For the whole of section 3.6 in one place, start with the [Further mechanics and thermal physics study guide](/resources/aqa-a-level-physics-further-mechanics-and-thermal-physics/). For quick recall use the [periodic motion revision notes](/resources/aqa-a-level-physics-7408-periodic-motion-aqa-alevel-revision-notes/), and test yourself with the [periodic motion practice questions](/resources/aqa-a-level-physics-7408-periodic-motion-aqa-alevel-practice/).

## What this subtopic covers

| Spec ref | Content | Key results |
|---|---|---|
| 3.6.1.1 | Circular motion at constant speed; radians | ω = v/r = 2πf; a = v²/r = ω²r; F = mv²/r = mω²r |
| 3.6.1.2 | Condition for SHM; graphs of x, v, a against t | a = −ω²x; x = A cos ωt; v = ±ω√(A² − x²) |
| 3.6.1.3 | Mass-spring and simple pendulum; energy; damping; Required practical 7 | T = 2π√(m/k); T = 2π√(l/g) |
| 3.6.1.4 | Free and forced vibrations; resonance; sharpness of resonance | qualitative only |

The specification excludes the direction of angular velocity and does not examine the derivation of a = v²/r.

## Circular motion: setting up the equation

Every circular-motion problem is solved the same way: identify the real forces, find their resultant towards the centre, and set it equal to mv²/r (or mω²r). The resultant is what we call the centripetal force; it is never an additional force drawn on the diagram.

**Unit care.** Rotation rates are often given in revolutions per minute. Divide by 60 to get f in Hz, then ω = 2πf. A 45 rpm turntable has ω = 45 × 2π/60 = 4.71 rad s⁻¹.

**Worked example 1: a car over a hump-back bridge.** A 1000 kg car crosses the top of a bridge whose road surface is an arc of radius 30 m, at a constant 12 m s⁻¹. Find the normal contact force at the top and the speed at which the car would just lose contact.

At the top, weight acts down (towards the centre) and the normal contact force N acts up.

```
Resultant towards centre:  mg − N = mv²/r
N = m(g − v²/r) = 1000 × (9.81 − 144/30) = 1000 × 5.01 = 5.0 × 10³ N
Loses contact when N = 0:  v² = gr  →  v = √(9.81 × 30) = 17 m s⁻¹
```

The car's apparent weight falls because part of the weight is "used" to provide the centripetal force. At the bottom of a dip the argument reverses: N − mg = mv²/r, so N is larger than mg.

## SHM: phase, timing and the defining equation

The defining condition is that acceleration is **proportional to displacement and directed towards the equilibrium position**, written a = −ω²x. The minus sign carries the "towards equilibrium" part; the constant ω² is fixed by the system, not by the amplitude.

Three phase facts are worth knowing cold:

- **v leads x by a quarter cycle.** When x is at a maximum, v is zero; when x passes through zero, |v| is at its maximum ωA.
- **a is in antiphase with x.** Maximum positive displacement has maximum negative acceleration.
- **The a–x graph** is a straight line through the origin with negative gradient −ω². Any other shape is not SHM.

x = A cos ωt applies only when timing starts at maximum positive displacement. If timing starts at equilibrium moving in the positive direction, x = A sin ωt. Always use radians in the calculator for ωt.

**Worked example 2: time to reach half amplitude.** An oscillator has amplitude 0.050 m and period 0.60 s. It is released from x = +0.050 m at t = 0. Find when it first reaches x = +0.025 m and its speed then.

```
ω = 2π/T = 2π/0.60 = 10.5 rad s⁻¹
0.025 = 0.050 cos ωt  →  cos ωt = 0.5  →  ωt = π/3
t = (π/3)/ω = T/6 = 0.10 s
v = ω√(A² − x²) = 10.5 × √(0.050² − 0.025²) = 0.45 m s⁻¹
```

A useful result follows: moving from maximum displacement to half amplitude takes T/6, not T/8. The motion is slowest near the extremes, so it covers the outer half of the amplitude in more than half of the quarter-period.

## Simple harmonic systems

**Why a mass on a spring is SHM.** Displace the mass x from equilibrium and the resultant force is −kx (Hooke's law, taking the extra extension from equilibrium). Newton's second law gives a = −(k/m)x, which has the SHM form with ω² = k/m, so T = 2π√(m/k). The same result holds for a vertical spring because the weight is balanced by the initial extension at equilibrium.

**Why a pendulum is only approximately SHM.** The restoring force along the arc is mg sin θ. Only when θ is small (in radians) does sin θ ≈ θ = x/l, giving a = −(g/l)x. At large amplitude the period increases slightly, so use small angles in Required practical 7.

**Energy in SHM.** With no damping, E_total = ½mω²A², constant. Kinetic energy is greatest at equilibrium; potential energy is greatest at the extremes. Both energies complete two cycles in each oscillation period, because each reaches a maximum twice per cycle.

**Worked example 3: a pendulum's energy.** A 0.20 kg bob on a 0.80 m string swings with an arc amplitude of 0.10 m.

```
ω = √(g/l) = √(9.81/0.80) = 3.50 rad s⁻¹       T = 2π/ω = 1.79 s
v_max = ωA = 3.50 × 0.10 = 0.35 m s⁻¹
E_total = ½mω²A² = ½ × 0.20 × 3.50² × 0.10² = 1.2 × 10⁻² J
```

**Damping** dissipates energy. The specification distinguishes light damping (amplitude decays slowly, period almost unchanged), critical damping (return to equilibrium in the shortest time without oscillating) and heavy damping (slow return, no oscillation).

### Required practical 7 analysis

Plotting T² against m for a spring gives a straight line of gradient 4π²/k. If the gradient is 1.6 s² kg⁻¹, then k = 4π²/1.6 = 25 N m⁻¹. For a pendulum, T² against l gives gradient 4π²/g. Timing many oscillations and starting the clock as the mass passes equilibrium (where it moves fastest, so the instant is sharpest) reduces percentage uncertainty in T.

## Forced vibrations and resonance

A system left to oscillate after one displacement performs **free vibrations** at its natural frequency. A periodic driving force produces **forced vibrations** at the driving frequency. As the driving frequency approaches the natural frequency, the amplitude grows; at **resonance** the two frequencies are equal and energy is transferred from driver to oscillator most efficiently, so amplitude is a maximum.

Increasing damping:

- lowers the peak amplitude;
- broadens the peak, so resonance is less sharp;
- moves the peak to a slightly lower frequency.

Examples the specification expects: mechanical systems (a swing, vehicle suspension with shock absorbers, a building or bridge driven by wind or footsteps) and stationary-wave situations (a string driven by a vibration generator, an air column in a wind instrument). Critical damping is chosen for suspension so the car returns to level quickly without bouncing.

## Common mistakes

- Drawing "centripetal force" as an extra arrow on a free-body diagram.
- Using degrees for ωt in x = A cos ωt.
- Taking T/8 as the time from maximum displacement to half amplitude.
- Stating that the period of a pendulum depends on the mass of the bob.
- Saying resonance happens when the amplitude is large, rather than when driving frequency equals natural frequency.
- Saying damping shifts the peak to a higher frequency.

## Exam technique for AQA command words

- **Show that**: write the equation, substitute every value with units, and give the answer to one more significant figure than the value you were asked to show.
- **Explain**: link cause to effect. For resonance, say "driving frequency equals natural frequency, so energy transfer is maximum, so amplitude is maximum".
- **Sketch**: label axes, mark A and T on the graph, and get the phase right (for example, v is zero where x is at a peak).
- **Estimate**: state the values you assume, such as a car's mass or the radius of a bend, and give the answer to one or two significant figures.
- **Describe** (for Required practical 7): give the measurements, the instruments, how you reduce uncertainty, and which graph you plot.

## Frequently asked questions

**Does amplitude affect the period of SHM?**
No. For a true simple harmonic oscillator T = 2π/ω, and ω depends only on the system (k and m, or g and l). A pendulum's period rises slightly at large amplitude because it is then no longer simple harmonic.

**Why does a mass on a vertical spring have the same period as on a horizontal one?**
At equilibrium the weight is balanced by the spring's initial extension, so the extra restoring force for a further displacement x is still −kx. That gives a = −(k/m)x, the same equation as for a horizontal spring.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.6.1 Periodic motion (A-level only).
