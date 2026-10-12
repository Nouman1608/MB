---
title: "OCR A Level Physics A: Simple harmonic motion, energy, damping and resonance (H556) -- Revision Notes"
seoTitle: "OCR A Level Physics SHM and Resonance Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on SHM equations, graphs, energy, damping and resonance, with a self-test, for OCR A Level Physics A (H556) section 5.3."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
These notes condense section 5.3 (Oscillations) of the OCR Advanced GCE in Physics A specification (H556), Version 3.0 (March 2026), for first assessment in 2017: statements 5.3.1(a) to (g), 5.3.2(a), (b) and 5.3.3(a) to (e). For full explanations use the [study guide](/resources/ocr-a-level-physics-simple-harmonic-motion-energy-damping-and-resonance/), then try the [practice questions](/resources/ocr-a-level-physics-simple-harmonic-motion-energy-damping-and-resonance-practice/). Course pages: [OCR A Level Physics hub](/boards/ocr/a-level/physics/) | [checklist](/checklists/ocr/a-level/physics/) | [free diagnostics](/diagnostics/).

## Key terms (5.3.1(a), 5.3.3)

| Term | Meaning |
|---|---|
| Displacement x | Distance from the equilibrium position, with direction |
| Amplitude A | Maximum displacement |
| Period T | Time for one complete oscillation |
| Frequency f | Oscillations per second, f = 1/T |
| Angular frequency ω | ω = 2π/T = 2πf, in rad s⁻¹ |
| Phase difference | Fraction of a cycle one oscillation is ahead of another, in rad or degrees |
| Simple harmonic motion | Acceleration proportional to displacement, always pointing back to the equilibrium position |
| Isochronous | Period independent of amplitude |
| Free oscillation | Oscillation at the natural frequency with no external force after the start |
| Forced oscillation | Oscillation driven by a periodic external force, at the driving frequency |
| Damping | Removal of energy from the oscillation, usually as thermal energy |
| Resonance | Maximum amplitude when the driving frequency equals the natural frequency |

## Key relationships

| Relationship | Notes |
|---|---|
| ω = 2π/T = 2πf | 5.3.1(b) |
| a = −ω²x | Defining equation, 5.3.1(c)(i) |
| x = A cos ωt | Timing from maximum displacement |
| x = A sin ωt | Timing from the equilibrium position |
| v = ±ω√(A² − x²) | 5.3.1(e) |
| vmax = ωA | At x = 0 |
| amax = ω²A | At x = ±A |
| Phase difference = 2π × (time shift)/T | In radians |
| E = ½mω²A² | Total energy |
| Ek = ½mω²(A² − x²), Ep = ½mω²x² | Sum to E |
| ω² = k/m for F = −kx | Mass on a spring |

## Method in steps: an SHM calculation

1. Find ω from T or f (ω = 2π/T).
2. Decide whether you need the maximum value (vmax = ωA, amax = ω²A) or the value at a given x (use the √ equation or a = −ω²x).
3. Substitute in SI units: metres for A and x, kilograms for m.
4. Give direction for a (towards the equilibrium position) and say whether v is a speed or a signed value.
5. For x as a function of time, check which form fits the start, and keep ωt in radians.

## Graphs of x, v and a (5.3.1(g))

| Feature | x-t | v-t | a-t |
|---|---|---|---|
| Starts at maximum | cosine | negative sine | negative cosine |
| Maximum value | A | ωA | ω²A |
| Phase relative to x | 0 | leads by π/2 | π out (antiphase) |

- Gradient of x-t is v. Gradient of v-t is a.
- At a peak of x: v = 0 and |a| is maximum. At x = 0: |v| is maximum and a = 0.
- a-x: a line through the origin, sloping down, with gradient −ω².
- v-x: an ellipse, with intercepts ±A on the x axis and ±ωA on the v axis.

## Energy (5.3.2)

- At x = 0: Ek is maximum (equal to E) and Ep is a minimum.
- At x = ±A: Ep is maximum (equal to E) and Ek = 0.
- Ep-x is a parabola opening upwards with minimum at x = 0. Ek-x is an inverted parabola with maximum at x = 0. Total energy is a horizontal line at ½mω²A².
- The curves cross at x = ±A/√2, where each is E/2.
- In time, Ek and Ep each vary at twice the oscillation frequency.
- With damping, the total-energy line would fall with time.
- Type of potential energy: elastic for a spring, gravitational for a pendulum.

## Method in steps: timing an oscillation (5.3.1(c)(ii), PAG10)

1. Fix the apparatus. Set a small, steady amplitude.
2. Put a fiducial marker at the equilibrium position and time as the mass passes it.
3. Time 10 to 20 oscillations and divide by the count.
4. Repeat and take a mean. Judge the spread to estimate the uncertainty.
5. Change one variable at a time. For a mass on a spring, plot T² against m; the gradient is 4π²/k.
6. A data logger with a motion sensor shows x-t, from which T is read directly.

## Damping and forced oscillations (5.3.3)

| Damping | Behaviour |
|---|---|
| Light | Oscillates; amplitude decays steadily; period slightly longer |
| Critical | Settles at equilibrium in the least time, with no oscillation |
| Heavy | No oscillation; very slow return |

- Energy lost per cycle is a fraction of the energy at the start of that cycle, and energy is proportional to A².
- Damping reduces the amplitude at resonance and widens the peak. The peak moves to slightly lower frequency.
- Critical damping is used where a quick settle matters, such as a car suspension, a door closer or the needle of a meter.

## Resonance graph (5.3.3(c) to (e))

- Axes: amplitude (vertical) against driving frequency (horizontal).
- Far below f0 the amplitude is small and roughly constant. Near f0 it rises to a peak. Above f0 it falls to a small value.
- Little damping gives a tall, narrow peak. More damping gives a lower, broader peak.
- At resonance the driver transfers energy to the oscillator at the maximum rate.

Practical examples: playground swing, radio tuning, instrument sound boxes, buildings and bridges in wind or ground motion, washing machine drum, engine panels rattling at certain speeds, MRI. Reducing unwanted resonance: add damping or change the natural frequency.

## Worked reminders

**A.** T = 0.50 s, A = 3.0 cm. ω = 2π/0.50 = 12.6 rad s⁻¹. vmax = 12.6 × 0.030 = 0.377 m s⁻¹.

**B.** At x = 0.020 m (same oscillator): v = 12.6 × √(0.030² − 0.020²) = 12.6 × 0.02236 = 0.281 m s⁻¹.

**C.** m = 0.10 kg, E = 4.8 mJ. At half the amplitude, E is a quarter: 1.2 mJ.

**D.** k = 36 N m⁻¹ and m = 0.25 kg. ω² = k/m = 144 s⁻², so ω = 12 rad s⁻¹ and T = 2π/12 = 0.52 s.

## Model answer: why a driven system resonates

The driving force has a frequency that you can change. When it matches the natural frequency, the driving force pushes in the same direction as the velocity of the oscillator on every cycle. The driver therefore does positive work each cycle, and the oscillator gains energy faster than at any other driving frequency. The amplitude grows until the energy removed by damping in each cycle equals the energy supplied. With less damping the amplitude needed to reach that balance is larger, so the peak is taller.

## Must-know distinctions

- Natural frequency (set by the system) versus driving frequency (set by the driver).
- Free oscillation versus forced oscillation versus damped oscillation.
- Period (time) versus angular frequency (rate of turning in a reference circle, rad s⁻¹).
- Speed at a given x (the √ equation) versus maximum speed (ωA).
- Phase difference in rad versus degrees: 2π rad is 360°.

## Quick self-test

1. An oscillator has T = 0.25 s. Calculate f and ω.
2. State the defining equation of SHM and what the minus sign means.
3. An oscillator has ω = 8.0 rad s⁻¹ and A = 0.050 m. Calculate vmax and amax.
4. For the same oscillator, calculate the speed at x = 0.030 m.
5. Which form, x = A sin ωt or x = A cos ωt, applies when timing starts at the equilibrium position?
6. State the phase difference between displacement and acceleration.
7. The amplitude of an oscillator triples. What happens to its period and its total energy?
8. At what displacement is the kinetic energy equal to the potential energy?
9. Describe how a critically damped system behaves after being displaced.
10. A 0.50 kg mass on a spring has a natural frequency of 2.0 Hz. Calculate the spring constant.
11. Give the condition for resonance.
12. Why do you time many oscillations instead of one?

### Answers

1. f = 1/0.25 = 4.0 Hz. ω = 2π × 4.0 = 25.1 rad s⁻¹.
2. a = −ω²x. The acceleration is always opposite to the displacement, directed towards the equilibrium position.
3. vmax = 8.0 × 0.050 = 0.40 m s⁻¹. amax = 8.0² × 0.050 = 3.2 m s⁻².
4. v = 8.0 × √(0.050² − 0.030²) = 8.0 × 0.040 = 0.32 m s⁻¹.
5. x = A sin ωt.
6. π rad (180°): they are in antiphase.
7. The period does not change (isochronous). Energy is proportional to A², so it is 9 times larger.
8. x = ±A/√2, about ±0.71A.
9. It settles at equilibrium as fast as possible and does not overshoot.
10. ω = 2π × 2.0 = 12.57 rad s⁻¹. k = mω² = 0.50 × 157.9 = 79 N m⁻¹.
11. The frequency of the driver is equal to the natural frequency of the oscillating system.
12. It reduces the percentage uncertainty from reaction time in the period.

## Where marks are usually lost

- Omitting the minus sign or its meaning in a = −ω²x.
- Working in degrees where ωt must be in radians.
- Using the amplitude where the question gives a peak-to-peak distance (A is half of it).
- Confusing frequency and angular frequency: forgetting the 2π.
- Describing resonance without saying driving frequency and natural frequency.
- Sketching a resonance peak at the wrong place or with damping making it taller.
- Saying the energy of a damped oscillator is lost without saying where it goes.
- Reading a period from the timing of one swing and quoting too many figures.

## Official syllabus

OCR Advanced GCE in Physics A (H556) specification, Version 3.0 (March 2026), for first assessment in 2017, published by OCR. Section 5.3, Oscillations.
