---
title: "Cambridge A Level Physics (9702): Photoelectric effect"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Quantum physics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 22.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-quantum-physics"
    subtopic: "a-photoelectric-effect"
description: "A focused guide to 22.2 Photoelectric effect in Cambridge A Level Physics 9702: threshold frequency, work function, hf = Φ + ½mv²max and intensity."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **22.2 Photoelectric effect** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Quantum Physics study guide](/resources/a-physics-quantum-physics/) introduces the whole of Topic 22 and states the photoelectric equation; this page goes further into the 22.2 outcomes alone: why the kinetic energy is a maximum rather than a single value, how to calculate threshold values in either direction, the graph of maximum kinetic energy against frequency and what its gradient and intercepts mean, and a careful treatment of intensity, including what happens when frequency changes at constant power. For quick recall use the [Photoelectric effect revision notes](/resources/cambridge-a-level-physics-9702-a-photoelectric-effect-revision-notes/), and for exam-style questions the [Photoelectric effect practice questions](/resources/cambridge-a-level-physics-9702-a-photoelectric-effect-practice/).

## What 22.2 asks you to do

The syllabus lists five outcomes. Candidates should be able to:

- **understand that photoelectrons may be emitted from a metal surface when it is illuminated by electromagnetic radiation**
- **understand and use the terms threshold frequency and threshold wavelength**
- **explain photoelectric emission in terms of photon energy and work function energy**
- **recall and use hf = Φ + ½mv²max**
- **explain why the maximum kinetic energy of photoelectrons is independent of intensity, whereas the photoelectric current is proportional to intensity**

Note that the syllabus uses **Φ** for the work function. The same Greek letter is used for magnetic flux in Topic 20; the meaning is always clear from the context.

## What is observed

When electromagnetic radiation falls on a clean metal surface:

1. Electrons (**photoelectrons**) are emitted only if the frequency of the radiation is above a minimum value, the **threshold frequency** f₀, which depends on the metal.
2. Below f₀, no electrons are emitted, however intense the radiation and however long it shines.
3. Above f₀, emission begins with no measurable delay, even for very weak radiation.
4. The emitted electrons have a range of kinetic energies, up to a maximum. The maximum kinetic energy increases with frequency, but does not depend on intensity.
5. At a fixed frequency above f₀, the number of electrons emitted per second (and so the photoelectric current) is proportional to the intensity.

## The photon explanation

Each photon has energy hf (22.1). The key assumption is a **one-to-one interaction**: a photon gives **all** of its energy to **one** electron, and is absorbed in the process.

The **work function** Φ is the **minimum energy needed to remove an electron from the surface** of the metal. If hf ≥ Φ, the electron can escape; whatever energy is left over becomes its kinetic energy:

```
hf = Φ + ½mv²max
```

- **Why a maximum?** Φ is the minimum energy needed, which applies to electrons at the surface. Electrons from deeper in the metal lose some energy in collisions before escaping, so they emerge with less kinetic energy. Only the most loosely held surface electrons leave with the full hf − Φ.
- **Why a threshold?** If hf < Φ, a single photon cannot free an electron. An electron cannot store energy from several photons, so no emission occurs, however many photons arrive.
- **Why no delay?** One photon is enough, and it delivers its energy in a single event.

## Threshold frequency and threshold wavelength

At the threshold, the photon has just enough energy and the electron leaves with zero kinetic energy:

```
hf₀ = Φ     →   f₀ = Φ / h
λ₀ = c / f₀ = hc / Φ
```

- The **threshold frequency** is the **minimum** frequency for emission.
- The **threshold wavelength** is the **maximum** wavelength for emission. Radiation of longer wavelength (lower frequency) does not emit electrons.

Mixing up "minimum" and "maximum" here is a common way to lose a mark.

## Intensity, current and kinetic energy

**Intensity** is power per unit area. For a beam of a single frequency, intensity is proportional to the number of photons arriving per second.

- **Maximum kinetic energy is independent of intensity.** Each electron receives energy from one photon, and every photon has the same energy hf. Increasing the intensity sends more photons, not more energetic ones, so hf − Φ is unchanged.
- **Photoelectric current is proportional to intensity.** Doubling the intensity doubles the number of photons per second, so twice as many electrons are freed each second and the current doubles.

A subtle case: if the **frequency** is increased while the **power** of the beam is kept constant, each photon carries more energy, so there are **fewer** photons per second. The maximum kinetic energy rises, but the current falls (assuming the same fraction of photons releases an electron).

## Why the wave model fails

A classical wave spreads its energy continuously over the surface, with energy delivered at a rate set by the intensity. That model predicts:

- any frequency should eventually cause emission, if the intensity is large enough or one waits long enough: **contradicted** by the threshold frequency;
- more intense radiation should give more energetic electrons: **contradicted**, since the maximum kinetic energy depends only on frequency;
- weak radiation should need time for an electron to build up enough energy: **contradicted**, since emission is immediate.

The photon model explains all three, which is why the photoelectric effect is taken as evidence for the particulate nature of electromagnetic radiation (22.3 develops this).

## Worked example 1: threshold and maximum speed

A metal has a work function of 3.6 eV. Calculate **(a)** the threshold frequency and threshold wavelength, **(b)** the maximum kinetic energy and maximum speed of photoelectrons emitted by ultraviolet radiation of wavelength 250 nm. State whether visible light (400 nm to 700 nm) causes emission.

```
(a) Φ = 3.6 × 1.60 × 10⁻¹⁹ = 5.76 × 10⁻¹⁹ J
    f₀ = Φ/h = 5.76 × 10⁻¹⁹ / 6.63 × 10⁻³⁴ = 8.7 × 10¹⁴ Hz
    λ₀ = c/f₀ = 3.00 × 10⁸ / 8.69 × 10¹⁴ = 3.5 × 10⁻⁷ m (345 nm)

(b) hf = hc/λ = 1.989 × 10⁻²⁵ / 250 × 10⁻⁹ = 7.96 × 10⁻¹⁹ J
    ½mv²max = 7.96 × 10⁻¹⁹ − 5.76 × 10⁻¹⁹ = 2.20 × 10⁻¹⁹ J  (1.4 eV)
    vmax = √(2 × 2.20 × 10⁻¹⁹ / 9.11 × 10⁻³¹) = 6.9 × 10⁵ m s⁻¹
```

All visible wavelengths are longer than 345 nm, so visible light does not cause emission from this metal.

*Annotation.* Work entirely in joules (or entirely in eV) in the subtraction. Mixing an eV work function with a joule photon energy is the most frequent error.

## The Ek(max)–f graph

Rearranging the photoelectric equation:

```
½mv²max = hf − Φ
```

This has the form y = mx + c. A graph of maximum kinetic energy (y-axis) against frequency (x-axis) is a straight line with:

- **gradient = h**, the same for every metal;
- **intercept on the f-axis = f₀**, where the kinetic energy is zero;
- **intercept on the y-axis (by extrapolation) = −Φ**.

The line is only real for f > f₀; below that there is no emission, so the part below the axis is drawn dashed or not at all. Different metals give **parallel** lines, displaced along the frequency axis by their different work functions.

## Worked example 2: from data

For a metal surface, the maximum kinetic energy of photoelectrons is 1.43 × 10⁻¹⁹ J at 7.0 × 10¹⁴ Hz and 3.42 × 10⁻¹⁹ J at 1.0 × 10¹⁵ Hz. Determine the Planck constant, the work function and the threshold frequency.

```
gradient = (3.42 − 1.43) × 10⁻¹⁹ / (10.0 − 7.0) × 10¹⁴ = 6.63 × 10⁻³⁴ J s
Φ = hf − Ek(max) = 6.63 × 10⁻³⁴ × 7.0 × 10¹⁴ − 1.43 × 10⁻¹⁹ = 3.21 × 10⁻¹⁹ J  (2.0 eV)
f₀ = Φ/h = 3.21 × 10⁻¹⁹ / 6.63 × 10⁻³⁴ = 4.8 × 10¹⁴ Hz
```

*Annotation.* If a graph is given, use two well-separated points on the line, not data points that lie off it.

## Worked example 3: photocurrent

Ultraviolet radiation of wavelength 250 nm and power 2.0 μW falls on the metal from Worked example 1. Suppose (as an illustrative figure) that one photon in 1000 releases an electron. Calculate the photoelectric current.

```
photons per second = P / hf = 2.0 × 10⁻⁶ / 7.96 × 10⁻¹⁹ = 2.5 × 10¹² s⁻¹
electrons per second = 2.5 × 10¹² / 1000 = 2.5 × 10⁹ s⁻¹
I = (electrons per second) × e = 2.5 × 10⁹ × 1.60 × 10⁻¹⁹ = 4.0 × 10⁻¹⁰ A
```

*Annotation.* Doubling the power at 250 nm doubles the current. Switching to 200 nm at the same 2.0 μW gives photons of 9.9 × 10⁻¹⁹ J, so only 2.0 × 10¹² per second: on the same assumption the current falls to about 3.2 × 10⁻¹⁰ A, while the maximum kinetic energy rises.

## Common mistakes

- **Calling the work function the energy of the electron.** It is the minimum energy needed to remove an electron from the surface.
- **Mixing eV and J** in hf = Φ + ½mv²max.
- **Saying the threshold wavelength is a minimum.** It is a maximum.
- **Saying brighter light gives faster electrons.**
- **Saying the current depends only on intensity at all frequencies.** Below f₀ there is no current at any intensity.
- **Dropping "maximum"** from kinetic energy.

## Exam technique for the command words

- **Define** (work function): the minimum energy needed to remove an electron from the surface of a metal. Define (threshold frequency): the minimum frequency of radiation that causes emission of electrons from the surface.
- **Explain** (photoelectric emission): one photon gives all its energy to one electron; emission if hf ≥ Φ; excess energy is kinetic energy.
- **Explain** (independence of intensity): each electron absorbs one photon; photon energy depends only on frequency; intensity changes the number of photons per second, so it changes the current but not the maximum kinetic energy.
- **Determine** (from a graph): gradient = h; f-intercept = f₀; Φ = hf₀.
- **Calculate**: convert eV to J first, and give speeds from ½mv²max with m = 9.11 × 10⁻³¹ kg.

## Related resources

- [Quantum Physics study guide](/resources/a-physics-quantum-physics/) — the whole of Topic 22
- [Photoelectric effect revision notes](/resources/cambridge-a-level-physics-9702-a-photoelectric-effect-revision-notes/)
- [Photoelectric effect practice questions](/resources/cambridge-a-level-physics-9702-a-photoelectric-effect-practice/)
- [Energy and momentum of a photon study guide](/resources/cambridge-a-level-physics-9702-a-energy-and-momentum-of-a-photon/) — the previous subtopic

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
