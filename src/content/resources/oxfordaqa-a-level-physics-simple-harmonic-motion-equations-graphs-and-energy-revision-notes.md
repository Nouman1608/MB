---
title: "OxfordAQA International AS and A-level Physics: Simple harmonic motion: equations, graphs and energy (9630) -- Revision Notes"
seoTitle: "OxfordAQA A-level Physics SHM Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Simple harmonic motion: equations, graphs and energy"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 114
syllabusTopics:
  - qualification: "a-level"
    topic: "circular-and-periodic-motion-oxfordaqa"
    subtopic: "simple-harmonic-motion-oxfordaqa"
description: "Condensed revision notes on simple harmonic motion for OxfordAQA International A-level Physics: formulas, graph rules, derivations, energy and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
These notes condense section 3.6.2 (simple harmonic motion) of the OxfordAQA International AS and A-level Physics (9630) specification, version 4.4. The section is International A-level only. For full explanations and worked examples, read the [study guide](/resources/oxfordaqa-a-level-physics-simple-harmonic-motion-equations-graphs-and-energy/). Then test yourself with the [practice questions](/resources/oxfordaqa-a-level-physics-simple-harmonic-motion-equations-graphs-and-energy-practice/). The [course hub](/boards/oxfordaqa/a-level/physics/), the [printable checklist](/checklists/oxfordaqa/a-level/physics/) and the [free diagnostics](/diagnostics/) help you plan the rest of your revision.

## Definitions to know

- Simple harmonic motion (SHM): oscillation where acceleration is proportional to displacement from equilibrium and always points back towards it.
- Amplitude A: the maximum displacement from equilibrium.
- Period T: the time for one complete oscillation. Frequency f = 1/T.
- Angular frequency ω = 2πf = 2π/T, in rad s⁻¹.
- Restoring force: the resultant force that acts towards equilibrium. In SHM it is F = −mω²x.

## Formula table

| Result | Formula | Notes |
|---|---|---|
| SHM condition | a = −ω²x | Minus sign: acceleration opposes displacement |
| Displacement | x = A cos ωt | Timing starts at x = +A; ωt in radians |
| Velocity | v = −Aω sin ωt | Gradient of the x–t graph |
| Speed at displacement x | v = ±ω√(A² − x²) | Zero at x = ±A |
| Maximum speed | ωA | At x = 0 |
| Maximum acceleration | ω²A | At x = ±A |
| Mass–spring period | T = 2π√(m/k) | Independent of amplitude |
| Simple pendulum period | T = 2π√(l/g) | Valid for small swings; mass cancels |
| Total energy | ½mω²A² | Proportional to A² |
| Kinetic energy | ½mω²(A² − x²) | Zero at the extremes |
| Potential energy | ½mω²x² | Zero at equilibrium |

## Method in steps

### Finding ω from data

1. If you have the period or frequency: ω = 2π/T or ω = 2πf.
2. If you have a force law F = −cx: ω² = c/m.
3. If you have a graph of a against x: the line goes through the origin with gradient −ω².
4. If you have a spring or pendulum: ω² = k/m or ω² = g/l.

### Answering a "show that the motion is SHM" question

1. Identify the restoring force and write F = ma.
2. Rearrange to a = −(constant)x.
3. State that this matches a = −ω²x, with the constant equal to ω².
4. Deduce T = 2π/ω.

### Derivation of the spring period

1. F = −kx and F = ma give a = −(k/m)x.
2. Compare with a = −ω²x: ω² = k/m.
3. T = 2π/ω = 2π√(m/k).

### Derivation of the pendulum period

1. Restoring force along the arc: F = −mg sin θ.
2. For small θ (in radians), sin θ ≈ θ = x/l.
3. ma = −mg(x/l), so a = −(g/l)x and ω² = g/l.
4. T = 2π√(l/g). The mass cancels.

## Graphs and gradients

| Time | Displacement | Velocity | Acceleration |
|---|---|---|---|
| 0 | +A | 0 | −ω²A |
| T/4 | 0 | −ωA | 0 |
| T/2 | −A | 0 | +ω²A |
| 3T/4 | 0 | +ωA | 0 |

- x–t: cosine curve. v is its gradient.
- v–t: negative sine curve. a is its gradient.
- a–t: negative cosine curve, the mirror image of x–t.
- Velocity leads displacement by π/2. Acceleration and displacement are in antiphase (phase difference π).
- On an a–x graph SHM gives a line through the origin whose gradient is −ω². On a v–x graph it gives an ellipse.
- Speed is greatest when the x–t graph is steepest. Acceleration is greatest when the v–t graph is steepest.

## Energy graphs

Against displacement:

- Ep: upright parabola, minimum at x = 0, maximum ½mω²A² at the ends.
- Ek: inverted parabola, maximum ½mω²A² at x = 0, zero at the ends.
- Total: horizontal line at ½mω²A².
- Ek and Ep cross at x = ±A/√2.

Against time:

- Ek and Ep are sin² and cos² curves, with period T/2.
- Total energy is a horizontal line.
- When Ek is at its maximum, Ep is zero, and the reverse.

## Worked reminder

A 0.25 kg mass on a spring of constant 64 N m⁻¹ oscillates with amplitude 0.040 m.

1. ω = √(k/m) = √(64/0.25) = 16.0 rad s⁻¹.
2. T = 2π/16.0 = 0.393 s.
3. Maximum speed = ωA = 16.0 × 0.040 = 0.64 m s⁻¹.
4. Maximum acceleration = ω²A = 256 × 0.040 = 10.2 m s⁻².
5. Total energy = ½kA² = ½ × 64 × 0.040² = 0.0512 J, which matches ½mω²A² because k = mω².

Continue with the same oscillator at x = 0.030 m:

1. Ep = ½mω²x² = ½ × 0.25 × 256 × 0.030² = 0.0288 J.
2. Ek = ½mω²(A² − x²) = ½ × 0.25 × 256 × (0.0016 − 0.0009) = 0.0224 J.
3. Check: 0.0288 + 0.0224 = 0.0512 J, the total.

A second reminder, for the pendulum. A 2.5 m pendulum swings through a small angle. T = 2π√(l/g) = 2π√(2.5/9.81) = 3.17 s. Doubling the bob mass leaves this unchanged. Quadrupling the length doubles it, because T is proportional to √l.

## Reading a graph quickly

1. Find the amplitude from the largest value on the axis and the period from the time for one full cycle.
2. Calculate ω = 2π/T.
3. Check the starting point. A curve that starts at a maximum on the x–t axes matches x = A cos ωt.
4. For a velocity or acceleration value at a given time, draw a tangent on the previous graph in the chain (x–t for velocity, v–t for acceleration). A pre-drawn graph of that quantity can be read directly.
5. Cross-check with the maximum values: the steepest gradient on x–t should equal ωA.

## Must-know distinctions

- Speed against velocity. v = ±ω√(A² − x²) gives speed. The sign gives direction.
- Frequency against angular frequency. f counts cycles per second; ω counts radians per second.
- Frequency of the motion against frequency of the energy graphs. Energy swaps twice per cycle, so the energy graphs have period T/2.
- Mass–spring against pendulum. The spring period depends on m; the pendulum period does not.
- Total energy against energy at a point. Total energy is constant; Ek and Ep change with x.
- Equilibrium against extremes. Speed is maximum and acceleration zero at equilibrium. At the extremes it is the reverse.

## Quick self-test

1. An oscillator has ω = 5.0 rad s⁻¹. What is its acceleration at x = +0.20 m?
2. An oscillator has frequency 0.80 Hz. Find ω and T.
3. An oscillator has amplitude 0.030 m and ω = 12 rad s⁻¹. Find its maximum speed and maximum acceleration.
4. A = 0.10 m and ω = 6.0 rad s⁻¹. What is the speed at x = 0.060 m?
5. Find the period of a 0.50 kg mass on a spring of constant 200 N m⁻¹.
6. Find the length of a pendulum with period 1.0 s (g = 9.81 m s⁻²).
7. What fraction of the total energy is kinetic when x = A/2?
8. By what factor does the total energy change if the amplitude is tripled?
9. An oscillation has period 0.60 s. What is the period of its Ek–t graph?
10. What is the phase difference between acceleration and displacement?
11. A mass on a spring is replaced by one four times as heavy. What happens to the period?
12. State where in the cycle the speed is zero and the acceleration is greatest.

### Answers

1. a = −ω²x = −25 × 0.20 = **−5.0 m s⁻²**.
2. ω = 2π × 0.80 = **5.03 rad s⁻¹**; T = 1/0.80 = **1.25 s**.
3. vmax = ωA = 12 × 0.030 = **0.36 m s⁻¹**; amax = ω²A = 144 × 0.030 = **4.32 m s⁻²**.
4. v = 6.0 × √(0.10² − 0.060²) = 6.0 × 0.080 = **0.48 m s⁻¹**.
5. T = 2π√(0.50/200) = 2π × 0.05 = **0.314 s**.
6. l = gT²/(4π²) = 9.81/39.48 = **0.248 m**.
7. Ek/E = 1 − x²/A² = 1 − 1/4 = **3/4**.
8. Energy is proportional to A², so it rises by a factor of **9**.
9. **0.30 s**, which is T/2.
10. **π rad** (antiphase).
11. T is proportional to √m, so the period **doubles**.
12. At the **extremes**, x = ±A, where v = 0 and |a| = ω²A.

## Where marks are usually lost

- Dropping the minus sign in a = −ω²x, or giving a magnitude when the direction is asked for.
- Using degrees for ωt in x = A cos ωt.
- Saying the mass affects the pendulum period, or that amplitude changes the period of a mass–spring system in SHM.
- Quoting the total energy as ½mω²x² (the potential energy) rather than ½mω²A².
- Drawing Ek and Ep against time with period T instead of T/2.
- Stating "sin θ = θ" without saying that θ is small and in radians.
- Not showing the comparison with a = −ω²x in a "show that" question.
- Reading a gradient from a chord instead of drawing a tangent at the point required.
- Using the full extension of a hanging spring as the displacement.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), specification version 4.4, for International AS and A-level exams May/June 2020 onwards, published by OxfordAQA. Section 3.6.2 is International A-level only.
