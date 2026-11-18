---
title: "Cambridge A Level Physics (9702): Energy levels in atoms and line spectra"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Quantum physics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 22.4
syllabusTopics:
  - qualification: "a-level"
    topic: "a-quantum-physics"
    subtopic: "a-energy-levels-in-atoms-and-line-spectra"
description: "A focused guide to 22.4 Energy levels and line spectra in Cambridge A Level Physics 9702: discrete levels, emission and absorption spectra and hf = E₁ − E₂."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **22.4 Energy levels in atoms and line spectra** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Quantum Physics study guide](/resources/a-physics-quantum-physics/) states the main result in a short section; this page explains how to read an energy level diagram, how emission and absorption spectra form and why they look different, and how to work through transition calculations. For quick recall use the [Energy levels and line spectra revision notes](/resources/cambridge-a-level-physics-9702-a-energy-levels-in-atoms-and-line-spectra-revision-notes/), and for exam-style questions the [Energy levels and line spectra practice questions](/resources/cambridge-a-level-physics-9702-a-energy-levels-in-atoms-and-line-spectra-practice/).

## What 22.4 asks you to do

The syllabus lists three outcomes. Candidates should be able to:

- understand that there are **discrete electron energy levels in isolated atoms** (for example atomic hydrogen)
- understand the **appearance and formation** of **emission and absorption line spectra**
- recall and use **hf = E₁ − E₂**

"Appearance" means you should be able to describe what each kind of spectrum looks like; "formation" means you should be able to explain, step by step, how the atoms produce it.

## Discrete energy levels

An electron bound in an isolated atom cannot have any energy it likes. It can only occupy certain allowed **energy levels**. Between these levels there are no allowed values at all, which is what "discrete" means.

### Reading an energy level diagram

An energy level diagram draws each allowed level as a horizontal line, with energy increasing upwards. For atomic hydrogen the lowest few levels are:

| Level | Energy / eV |
|---|---|
| n = 1 (ground state) | −13.6 |
| n = 2 | −3.40 |
| n = 3 | −1.51 |
| n = 4 | −0.85 |
| n = ∞ (ionisation) | 0 |

Four features of every such diagram matter in answers:

- **The energies are negative.** Zero is defined as the energy of an electron that has just been freed from the atom. A bound electron has less energy than a free one, so its energy is below zero.
- **The lowest level is the ground state.** An atom left alone settles here. Every higher level is an **excited state**.
- **The levels get closer together** towards the top of the diagram, converging on zero.
- **The ionisation energy** is the energy needed to remove an electron from the ground state completely: 13.6 eV for hydrogen, the gap from −13.6 eV to 0.

### Why "isolated" atoms?

In a gas at low pressure the atoms are far apart and barely affect one another, so each has the sharp set of levels shown above. In a solid or a dense gas, neighbouring atoms interact and the levels spread into broad ranges. That is why a hot solid, such as a lamp filament, gives a **continuous spectrum**, while a low-pressure gas gives lines.

## Transitions and photons

When an electron moves from a higher level E₁ to a lower level E₂, the atom loses exactly the energy difference, and it is carried away by a single photon:

```
hf = E₁ − E₂        and, since c = fλ,    λ = hc / (E₁ − E₂)
```

The process also works in reverse. An electron in a lower level can absorb a photon and move up, but only if the photon's energy **exactly** matches the gap to an allowed higher level. A photon with slightly too much or too little energy is not absorbed.

Because only certain gaps exist, only certain photon energies, and so only certain frequencies and wavelengths, can be emitted or absorbed. Each gap gives one spectral line.

**Counting lines.** If electrons are excited to a level, they can fall back directly or in steps through every level below. With levels labelled 1 to n, the number of different downward transitions is n(n − 1)/2. Electrons excited to n = 4 can therefore produce 4 × 3 / 2 = 6 different lines.

## Emission line spectra

**Appearance:** a series of separate **bright coloured lines on a dark background**, each at a definite wavelength. The pattern is unique to the element, which is why it acts like a fingerprint.

**Formation, step by step:**

1. Atoms of a low-pressure gas are given energy, for example by an electric discharge through the gas or by heating.
2. Electrons are raised to excited states.
3. Excited states are unstable; the electrons fall back to lower levels, in one jump or several.
4. Each fall emits one photon with energy equal to the difference between the two levels, hf = E₁ − E₂.
5. Only certain differences exist, so only certain wavelengths are emitted. Viewed through a diffraction grating, each appears as a separate bright line.

## Absorption line spectra

**Appearance:** a **continuous spectrum crossed by dark lines**. The dark lines appear at exactly the same wavelengths as some of the bright lines in the emission spectrum of the same element.

**Formation, step by step:**

1. White light, containing a continuous range of wavelengths, passes through a cooler gas.
2. Photons whose energy exactly equals the gap between the ground state (or another occupied level) and a higher level are absorbed, raising electrons to excited states.
3. The excited electrons soon fall back and re-emit photons, but these are emitted in **all directions**, not just along the original beam.
4. So the transmitted beam has far fewer photons at those particular wavelengths, and those wavelengths appear dark.

**Why fewer lines in absorption?** In a cool gas almost all atoms are in the ground state, so absorption lines mainly correspond to jumps **from** the ground state. In emission, electrons fall between any pair of levels, so many more lines appear.

Absorption spectra are how the composition of stars is found: the dark lines in starlight identify the elements in a star's cooler outer layers, and their shift in wavelength is the redshift used in [Hubble's law and the Big Bang theory](/resources/cambridge-a-level-physics-9702-a-hubbles-law-and-the-big-bang-theory/).

## Worked example 1: a hydrogen line

Calculate the wavelength of the photon emitted when an electron in atomic hydrogen falls from n = 3 to n = 2, and state the region of the spectrum.

```
E₁ − E₂ = −1.51 − (−3.40) = 1.89 eV
       = 1.89 × 1.60 × 10⁻¹⁹ = 3.02 × 10⁻¹⁹ J
λ = hc / (E₁ − E₂) = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) / 3.02 × 10⁻¹⁹
  = 6.58 × 10⁻⁷ m  (658 nm)
```

*Annotation.* 658 nm lies between about 400 nm and 700 nm, so this is visible red light. The subtraction of negative numbers is where marks are lost: write both signs explicitly. The fall from n = 2 to n = 1 releases 10.2 eV, giving 122 nm in the ultraviolet, so not every hydrogen line is visible.

## Worked example 2: an unfamiliar atom

An atom has four levels at −10.0 eV, −6.0 eV, −4.2 eV and −1.6 eV. Its electrons are excited to the highest level. Find how many emission lines can be produced and which lie in the visible region (400 nm to 700 nm).

There are 4 levels, so 4 × 3 / 2 = **6** lines. Using λ = hc/ΔE with ΔE converted to joules:

| Transition / eV | ΔE / eV | λ / nm |
|---|---|---|
| −1.6 → −4.2 | 2.6 | 478 |
| −1.6 → −6.0 | 4.4 | 283 |
| −1.6 → −10.0 | 8.4 | 148 |
| −4.2 → −6.0 | 1.8 | 691 |
| −4.2 → −10.0 | 5.8 | 214 |
| −6.0 → −10.0 | 4.0 | 311 |

Two lines are visible: 478 nm (blue) and 691 nm (red). *Annotation.* The largest energy gap always gives the shortest wavelength. A quick check, before calculating, is that 1.8 eV to 3.1 eV corresponds roughly to the visible range.

## Common mistakes

- **Adding the energies** of two levels instead of subtracting them.
- **Using the energy of one level** as the photon energy. A photon carries a difference between two levels.
- **Leaving ΔE in eV** when substituting into λ = hc/ΔE with h in J s.
- **Saying absorbed photons "disappear".** They are absorbed, then re-emitted in random directions, so the forward beam loses them.
- **Describing an emission spectrum as "coloured bands".** It is a set of sharp, separate lines.
- **Thinking an atom can absorb part of a photon's energy.** A photon is absorbed only if its energy exactly matches a gap.
- **Explaining why the energies are negative** with "electrons have negative charge". The sign comes from choosing zero for a free electron.

## Exam technique for the command words

- **Describe** (the appearance of an absorption spectrum): continuous spectrum with dark lines at specific wavelengths.
- **Explain** (how an emission spectrum is formed): excitation, de-excitation, one photon per transition, energy equals level difference, only certain differences possible.
- **Explain** (why lines show discrete levels): if any energy were possible, any photon energy could be emitted and the spectrum would be continuous.
- **Calculate** (wavelength or frequency of a line): find ΔE, convert to joules, then use hf = ΔE or λ = hc/ΔE.
- **Determine** (number of lines): n(n − 1)/2, or draw every possible downward arrow.

## Related resources

- [Quantum Physics study guide](/resources/a-physics-quantum-physics/) — the whole of Topic 22
- [Energy levels and line spectra revision notes](/resources/cambridge-a-level-physics-9702-a-energy-levels-in-atoms-and-line-spectra-revision-notes/)
- [Energy levels and line spectra practice questions](/resources/cambridge-a-level-physics-9702-a-energy-levels-in-atoms-and-line-spectra-practice/)
- [Wave-particle duality](/resources/cambridge-a-level-physics-9702-a-wave-particle-duality/) — subtopic 22.3
- [The diffraction grating](/resources/cambridge-a-level-physics-9702-as-the-diffraction-grating/) — how spectral lines are separated and measured

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
