---
title: "Cambridge A Level Physics (9702): Energy in simple harmonic motion"
resourceType: "study-guides"
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
description: "A focused guide to 17.2 in Cambridge A Level Physics 9702: kinetic–potential energy interchange, deriving E = ½mω²x₀², energy graphs and worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **17.2 Energy in simple harmonic motion** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Oscillations study guide](/resources/a-physics-oscillations/) states the energy equations within the whole of Topic 17; this page goes further: where E = ½mω²x₀² comes from, how to describe the energy interchange in different oscillators, how energy varies with displacement and with time, and how to run energy calculations in both directions. For quick recall use the [Energy in SHM revision notes](/resources/cambridge-a-level-physics-9702-a-energy-in-simple-harmonic-motion-revision-notes/), and for exam-style questions the [Energy in SHM practice questions](/resources/cambridge-a-level-physics-9702-a-energy-in-simple-harmonic-motion-practice/).

## What 17.2 asks you to do

Candidates should be able to:

- **describe the interchange between kinetic and potential energy** during simple harmonic motion
- **recall and use E = ½mω²x₀²** for the total energy of a system undergoing simple harmonic motion

E = ½mω²x₀² is not on the data sheet, so it must be recalled. It builds directly on 17.1, especially v₀ = ωx₀ and v = ±ω√(x₀² − x²); see the [Simple harmonic oscillations study guide](/resources/cambridge-a-level-physics-9702-a-simple-harmonic-oscillations/) if those are not secure.

## Describing the interchange

In an undamped oscillator the total energy is constant; it moves back and forth between kinetic energy and potential energy twice in every cycle. A full description names the type of potential energy, says where each form is maximum and zero, and states that the total stays constant.

| Oscillator | Form of potential energy |
|---|---|
| Trolley between springs on a horizontal track | Elastic (strain) potential energy of the springs |
| Simple pendulum | Gravitational potential energy of the bob |
| Mass hanging on a vertical spring | Elastic and gravitational together; their combined change, measured from the equilibrium position, behaves exactly like ½mω²x² |

Following a trolley released from rest at x = +x₀:

1. At x = +x₀ the trolley is momentarily at rest: kinetic energy zero, potential energy maximum, equal to the total E.
2. Moving towards equilibrium, it speeds up: potential energy is transferred to kinetic energy.
3. At x = 0 the speed is maximum: kinetic energy maximum (equal to E), potential energy zero.
4. Moving towards x = −x₀ it slows down: kinetic energy is transferred back to potential energy.
5. At x = −x₀ the cycle is half complete, and the sequence then runs in reverse.

## Deriving the total energy

The total energy equals the kinetic energy at the equilibrium position, where all of it is kinetic. With v₀ = ωx₀:

```
E = ½mv₀² = ½m(ωx₀)² = ½mω²x₀²
```

At any displacement x, using v² = ω²(x₀² − x²):

```
kinetic energy   E_K = ½mv² = ½mω²(x₀² − x²)
potential energy E_P = E − E_K = ½mω²x²
```

The total is constant: E_K + E_P = ½mω²x₀² at every point.

### What the total energy depends on

E = ½mω²x₀² shows that for a given oscillator:

- E ∝ x₀²: doubling the amplitude gives **four times** the energy; halving it leaves a quarter
- E ∝ ω² (and so ∝ f²): at the same amplitude, tripling the frequency gives **nine times** the energy
- E ∝ m at the same ω and x₀

## Energy against displacement

Plotted against x from −x₀ to +x₀:

- **E_P = ½mω²x²** is a parabola, zero at x = 0 and rising to E at x = ±x₀
- **E_K = ½mω²(x₀² − x²)** is an inverted parabola, equal to E at x = 0 and zero at x = ±x₀
- **Total E** is a horizontal straight line touching both parabolas at their maxima

The two curves cross where E_K = E_P = E/2, which gives x² = x₀²/2, so **x = ±x₀/√2 ≈ ±0.71x₀**. Notice that at half the amplitude the potential energy is only a quarter of the total: energy is not shared equally at x₀/2.

## Energy against time

With x = x₀ sin ωt and v = v₀ cos ωt:

```
E_P = E sin²ωt          E_K = E cos²ωt
```

Both are always positive, and each goes through two maxima in every oscillation, so the energies vary with **twice the frequency** of the displacement (period T/2). The two curves are mirror images about the line E/2 and always add up to E. A sketch that shows the kinetic energy going negative, or with the same period as the displacement, loses the mark.

## Worked example 1: energy at a given displacement

A mass of 0.40 kg oscillates in SHM with amplitude 0.080 m and frequency 1.5 Hz. Calculate the total energy and the kinetic and potential energies at x = 0.050 m.

```
ω = 2πf = 2π × 1.5 = 9.42 rad s⁻¹
E = ½mω²x₀² = 0.5 × 0.40 × 9.42² × 0.080² = 0.114 J
E_P = ½mω²x² = 0.5 × 0.40 × 9.42² × 0.050² = 0.044 J
E_K = E − E_P = 0.114 − 0.044 = 0.069 J
```

*Annotation.* Finding E_P first and subtracting is quicker than using the E_K formula, and the subtraction is a built-in check that E_K + E_P = E. The value of v₀ = ωx₀ = 0.75 m s⁻¹ gives another check: ½ × 0.40 × 0.75² = 0.114 J.

## Worked example 2: amplitude from energy

A 0.15 kg mass on a spring has a period of 0.50 s. It is given 0.018 J of energy and set oscillating. Calculate the amplitude.

```
ω = 2π/T = 2π/0.50 = 12.6 rad s⁻¹
x₀ = √(2E / (mω²)) = √(2 × 0.018 / (0.15 × 12.6²))
x₀ = √(1.52 × 10⁻³) = 0.039 m
```

*Annotation.* Rearranging before substituting avoids rounding errors. Because E ∝ x₀², giving the same oscillator four times the energy would only double the amplitude, to 0.078 m.

## Worked example 3: an annotated model answer

*Question.* A simple pendulum is pulled aside and released. Describe the energy changes during one complete oscillation, assuming no energy is lost. **[3]**

*Model answer.* At the point of release the bob is at rest at its highest point, so its kinetic energy is zero and its gravitational potential energy is maximum [1]. As it swings down, gravitational potential energy is converted to kinetic energy, which is maximum at the lowest (equilibrium) point, where the potential energy is minimum [1]. The bob then rises to the other extreme, converting kinetic energy back to potential energy, and the process repeats on the return swing; the total energy remains constant throughout [1].

*Annotation.* The third mark needs the constant total. Naming the type of potential energy (gravitational here) avoids a vague answer.

## Linking to damping

When resistive forces act, energy is transferred out of the oscillator, usually to internal energy of the surroundings. Because E ∝ x₀², a loss of energy shows up as a fall in amplitude: an oscillator that loses 19% of its energy has its amplitude reduced by 10%, since 0.9² = 0.81. The next subtopic, [Damped and forced oscillations, resonance](/resources/cambridge-a-level-physics-9702-a-damped-and-forced-oscillations-resonance/), develops this.

## Common mistakes

- **Writing E = ½mω²x²** for the total energy: the total uses the amplitude x₀.
- **Assuming E_K = E_P at half the amplitude.** They are equal at x₀/√2.
- **Using f instead of ω** in ½mω²x₀².
- **Sketching energy–time graphs with the same period as the displacement.** The energy period is T/2.
- **Saying the potential energy is maximum at equilibrium**, often after confusing a vertical spring with a pendulum.
- **Forgetting the square on x₀** when comparing energies: double amplitude means four times the energy.

## Exam technique for the command words

- **Describe** (the interchange): name the potential energy type, give the positions of maximum and zero kinetic and potential energy, and state that the total is constant.
- **Show that** (E = ½mω²x₀²): start from E_K at x = 0 and v₀ = ωx₀.
- **Calculate**: find ω first, keep x₀ in metres, and use E − E_P to get E_K.
- **Sketch** (energy against x or t): label E on the axis; parabolas for x, sin² and cos² shapes for t, with half the period of the displacement.
- **Determine** (from a graph of E_P against x): read E at x = x₀, then use E = ½mω²x₀² to find ω or m.

## Related resources

- [Oscillations study guide](/resources/a-physics-oscillations/) — the whole of Topic 17
- [Energy in SHM revision notes](/resources/cambridge-a-level-physics-9702-a-energy-in-simple-harmonic-motion-revision-notes/)
- [Energy in SHM practice questions](/resources/cambridge-a-level-physics-9702-a-energy-in-simple-harmonic-motion-practice/)
- [Simple harmonic oscillations study guide](/resources/cambridge-a-level-physics-9702-a-simple-harmonic-oscillations/) — the equations used here

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
