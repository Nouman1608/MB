---
title: "Cambridge A Level Physics (9702): Energy in simple harmonic motion -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Oscillations"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 17.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-oscillations"
    subtopic: "a-energy-in-simple-harmonic-motion"
description: "Condensed notes on 17.2 for Cambridge A Level Physics 9702: energy interchange in SHM, E = ½mω²x₀², energy–displacement and energy–time graphs, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Subtopic 17.2 of Cambridge International AS & A Level Physics 9702 (2025–2027) asks you to describe the interchange between kinetic and potential energy in simple harmonic motion and to recall and use E = ½mω²x₀². These notes are condensed for recall. For full explanations and worked examples, read the [Energy in simple harmonic motion study guide](/resources/cambridge-a-level-physics-9702-a-energy-in-simple-harmonic-motion/); to apply the ideas, try the [Energy in SHM practice questions](/resources/cambridge-a-level-physics-9702-a-energy-in-simple-harmonic-motion-practice/).

## Equations

```
total energy      E = ½mω²x₀²        (recall: not on the data sheet)
kinetic energy    E_K = ½mω²(x₀² − x²)
potential energy  E_P = ½mω²x²
E_K + E_P = E     (constant if undamped)
```

- Derivation: E = E_K at x = 0 = ½mv₀² = ½m(ωx₀)².
- E_K at any x comes from v² = ω²(x₀² − x²).
- Use ω in rad s⁻¹ (ω = 2πf = 2π/T) and x₀ in metres.

## How E scales

| Change (same oscillator unless stated) | Effect on E |
|---|---|
| Amplitude × 2 | × 4 |
| Amplitude × ½ | × ¼ |
| Frequency × 3, same amplitude | × 9 |
| Mass × 2, same ω and x₀ | × 2 |
| Energy loss of 19% | Amplitude falls by 10% (0.9² = 0.81) |

## The interchange in words

| Position | Speed | E_K | E_P |
|---|---|---|---|
| Extreme, x = ±x₀ | 0 | 0 | Maximum = E |
| Equilibrium, x = 0 | Maximum, ωx₀ | Maximum = E | 0 |
| x = ±x₀/√2 (≈ 0.71x₀) | ωx₀/√2 | E/2 | E/2 |
| x = ±x₀/2 | (√3/2)ωx₀ | 3E/4 | E/4 |

Name the potential energy: elastic for a horizontal spring, gravitational for a pendulum, combined elastic and gravitational for a vertical spring.

## Graph shapes

**Against displacement (−x₀ to +x₀):**

- E_P: parabola, minimum 0 at x = 0
- E_K: inverted parabola, maximum E at x = 0
- Total: horizontal line at E
- Curves cross at x = ±x₀/√2

**Against time (x = x₀ sin ωt):**

- E_P = E sin²ωt; E_K = E cos²ωt
- Never negative
- Period of each energy curve = **T/2** (twice the frequency of x)
- Curves are mirror images about E/2 and sum to E at all times

## Calculation routes

| Given | Route |
|---|---|
| m, f (or T), x₀ | ω = 2πf, then E = ½mω²x₀² |
| m, v₀ | E = ½mv₀² directly (no ω needed) |
| E, m, ω | x₀ = √(2E/(mω²)) |
| E and x₀ from a graph | ω² = 2E/(mx₀²) |
| E, x | E_P = E(x/x₀)², then E_K = E − E_P |

The last row is the fastest route in many questions: because E_P ∝ x², the fraction of energy that is potential is (x/x₀)², whatever the oscillator.

## Two quick examples

**Pendulum released from a height.** A bob is released from rest 0.050 m above its lowest point. Total energy = mgh, so at the lowest point ½mv₀² = mgh and v₀ = √(2gh) = √(2 × 9.81 × 0.050) = 0.99 m s⁻¹. The mass cancels, so every bob released from that height has the same maximum speed.

**Energy fraction at a displacement.** An oscillator with amplitude 50 mm is at x = 30 mm. E_P/E = (30/50)² = 0.36, so 36% of the energy is potential and 64% is kinetic. The speed is then √0.64 = 0.8 of the maximum speed.

## Key terms

| Term | Meaning |
|---|---|
| Total energy of SHM | E = ½mω²x₀²; constant for an undamped oscillator |
| Kinetic energy | Energy due to the motion of the oscillating mass; maximum at equilibrium |
| Potential energy | Stored energy (elastic or gravitational); maximum at the extremes |
| Energy interchange | Continuous conversion between kinetic and potential energy, twice per cycle each way |
| Undamped | No resistive forces, so no energy is lost and the amplitude is constant |

## Exam traps

- Using x instead of x₀ for the total energy.
- Assuming energies are equal at half amplitude.
- Using f for ω.
- Energy–time sketches with the period of the displacement, or with negative energy.
- Forgetting the square when scaling with amplitude or frequency.
- Leaving out "total energy constant" in a description of the interchange.

## Self-test

1. Derive E = ½mω²x₀² from the maximum speed.
2. A 0.50 kg mass oscillates with ω = 6.0 rad s⁻¹ and x₀ = 0.10 m. Find E.
3. For Question 2, find E_P and E_K at x = 0.060 m.
4. The amplitude of an oscillator is tripled. By what factor does E change?
5. At what displacement are E_K and E_P equal?
6. What fraction of E is kinetic at x = x₀/2?
7. An oscillator has period 0.80 s. What is the period of its kinetic energy variation?
8. A pendulum is released from rest. Where is its kinetic energy maximum?
9. A 0.20 kg oscillator has total energy 0.040 J and ω = 10 rad s⁻¹. Find x₀.
10. Find the maximum speed of the oscillator in Question 9.
11. An oscillator loses 36% of its energy. By what fraction does its amplitude fall?
12. What form of potential energy is involved for a trolley between two horizontal springs?

**Answers:** 1. All energy is kinetic at x = 0: E = ½mv₀² and v₀ = ωx₀, so E = ½mω²x₀². 2. E = 0.5 × 0.50 × 36 × 0.010 = 0.090 J. 3. E_P = 0.5 × 0.50 × 36 × 0.0036 = 0.0324 J; E_K = 0.090 − 0.0324 = 0.058 J. 4. × 9. 5. x = ±x₀/√2. 6. Three quarters. 7. 0.40 s. 8. At the lowest point (equilibrium). 9. x₀ = √(2E/(mω²)) = √(0.080/20) = 0.063 m. 10. v₀ = ωx₀ = 0.63 m s⁻¹ (check: ½ × 0.20 × 0.63² = 0.040 J). 11. Remaining energy 0.64E, so amplitude 0.8x₀: it falls by 20%. 12. Elastic (strain) potential energy.

## Related resources

- [Oscillations revision notes](/resources/a-physics-oscillations-revision-notes/) — the whole of Topic 17
- [Simple harmonic oscillations revision notes](/resources/cambridge-a-level-physics-9702-a-simple-harmonic-oscillations-revision-notes/)
- [Energy in SHM practice questions](/resources/cambridge-a-level-physics-9702-a-energy-in-simple-harmonic-motion-practice/)
