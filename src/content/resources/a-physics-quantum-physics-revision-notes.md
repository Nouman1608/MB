---
title: "A Level Physics: Quantum Physics — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Quantum physics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 22.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-quantum-physics"
    subtopic: "a-energy-and-momentum-of-a-photon"
  - qualification: "a-level"
    topic: "a-quantum-physics"
    subtopic: "a-photoelectric-effect"
  - qualification: "a-level"
    topic: "a-quantum-physics"
    subtopic: "a-wave-particle-duality"
  - qualification: "a-level"
    topic: "a-quantum-physics"
    subtopic: "a-energy-levels-in-atoms-and-line-spectra"
description: "Condensed recall notes on the photoelectric effect, photon energy, wave-particle duality and energy levels for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Quantum Physics study guide](/resources/a-physics-quantum-physics/).

## Photon energy

```
E = h f = h c / lambda        h = 6.63 x 10^-34 J s
1 eV = 1.60 x 10^-19 J
```

The **electron-volt** is a convenient unit at the atomic scale: it is defined as the energy gained by an electron accelerated through a potential difference of 1 V.

## The photoelectric effect

```
h f = phi + KE_max
phi = h f_0       (work function = threshold frequency x h)
KE_max = h f - phi
```

**Work function φ** — the minimum energy needed to remove an electron from the metal surface.
**Threshold frequency f₀** — below it, no emission occurs however intense the light.

### The four observations, and what each one proves

| Observation | What it rules out |
|---|---|
| No emission below f₀, whatever the intensity | Wave theory — a wave could deliver enough energy eventually |
| Emission is **instantaneous** above f₀ | Wave theory — energy would need time to accumulate |
| KE_max depends on **frequency**, not intensity | Wave theory — brighter light should give faster electrons |
| Intensity affects the **rate** of emission only | Confirms one photon → one electron |

**The one-to-one interaction is the whole argument.** One photon transfers all its energy to one electron. If that quantum is smaller than φ, nothing happens — and waiting does not help, because the energy is not accumulated.

## Worked example

A metal has a work function of 2.0 eV. Light of frequency 8.0 × 10¹⁴ Hz shines on it. Find the maximum kinetic energy of emitted electrons, in eV.

```
E = hf = 6.63 x 10^-34 x 8.0 x 10^14 = 5.30 x 10^-19 J = 3.31 eV
KE_max = hf - phi = 3.31 - 2.0 = 1.31 eV
```

Working directly in eV avoids an unnecessary unit conversion once the photon energy has been found.

## Wave-particle duality

The photoelectric effect is strong evidence that light behaves as **particles**; interference and diffraction are equally strong evidence that light behaves as a **wave**. Both are true — this is wave-particle duality, and it applies in reverse to particles like electrons too.

```
de Broglie:   lambda = h / p = h / (m v)
```

Electrons accelerated through a p.d. V gain energy `eV = ½mv²`, giving `λ = h/√(2meV)`.

**Evidence:** electron diffraction through a thin graphite film produces rings — diffraction is a wave property, yet electrons are particles. Conversely the photoelectric effect shows light, a wave, behaving as particles.

Because h is tiny, everyday objects have wavelengths far too small to observe — a macroscopic object's de Broglie wavelength is many orders of magnitude smaller than any aperture it could pass through, so no diffraction is ever seen. An electron at a few hundred eV has a wavelength comparable to atomic spacing, which is why it diffracts from a crystal lattice.

## Energy levels and spectra

Electron energy levels are **discrete** and **negative** (zero is defined at infinite separation — a bound electron has less energy than a free one).

```
h f = E_2 - E_1
```

| Spectrum | Cause |
|---|---|
| **Emission line** | Electron falls from higher to lower level, emitting a photon of exactly ΔE |
| **Absorption line** | Photon of exactly ΔE is absorbed, lifting an electron to a higher level |

Line spectra are **discrete** precisely because energy levels are discrete — this is the direct experimental evidence for quantisation, and each element's pattern is unique, which is how stellar composition is determined from the absorption lines in starlight.

## Exam traps

- Saying more intense light gives faster photoelectrons. It gives *more* of them.
- Using average energy rather than one-photon-one-electron.
- Forgetting to convert eV to J before substituting.
- Omitting the minus sign on energy levels.
- Using λ = h/mv with a speed found from a non-relativistic formula where it isn't valid.
- Saying an electron "is" a wave or "is" a particle rather than exhibiting both behaviours depending on the experiment.

## Self-test

1. State the photoelectric equation and define the work function.
2. Why does intense red light fail to eject electrons when faint blue light succeeds?
3. What single feature of photon–electron interaction explains the threshold frequency?
4. State de Broglie's relation and the evidence for it.
5. Why are line spectra discrete?
6. A metal has a work function of 2.0 eV. Light of frequency 8.0 × 10¹⁴ Hz shines on it. Find KE_max in eV.

**Answers:** 1. hf = φ + KE_max; φ is the minimum energy required to remove an electron from the metal surface. 2. Red photons individually carry less energy than φ; intensity only increases the *number* of photons, and energy is not accumulated because one photon interacts with one electron. 3. The one-to-one interaction — a single photon transfers all its energy to a single electron, so if hf < φ no emission occurs at any intensity. 4. λ = h/p; electron diffraction rings from a thin graphite film. 5. Because electron energy levels are discrete, so only photons of energy exactly equal to a difference between two levels can be emitted or absorbed. 6. E = hf = 6.63×10⁻³⁴ × 8.0×10¹⁴ = 5.30×10⁻¹⁹ J ≈ 3.31 eV; KE_max = 3.31 − 2.0 = 1.31 eV.
