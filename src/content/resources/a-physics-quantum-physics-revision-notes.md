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
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-quantum-physics--06-aphy-quantum-antimatter.webp" width="900" height="1230" alt="An electron and positron at rest annihilate into two 0.511 MeV photons going opposite ways. A 3.50 MeV photon makes an electron-positron pair, using 1.022 MeV as rest energy and leaving 2.478 MeV as kinetic energy, 1.24 MeV each. A 0.80 MeV photon is below the 1.022 MeV minimum." loading="lazy">
  <figcaption>Annihilation and pair production share energy as rest energy and kinetic energy.</figcaption>
</figure>


## The photoelectric effect

```
h f = Phi + KE_max
Phi = h f_0       (work function = threshold frequency x h)
KE_max = h f - Phi
```

**Work function Φ** — the minimum energy needed to remove an electron from the metal surface.
**Threshold frequency f₀** — below it, no emission occurs however intense the light.

### The four observations, and what each one proves

| Observation | What it rules out |
|---|---|
| No emission below f₀, whatever the intensity | Wave theory — a wave could deliver enough energy eventually |
| Emission is **instantaneous** above f₀ | Wave theory — energy would need time to accumulate |
| KE_max depends on **frequency**, not intensity | Wave theory — brighter light should give faster electrons |
| Intensity affects the **rate** of emission only | Confirms one photon → one electron |

**The one-to-one interaction is the whole argument.** One photon transfers all its energy to one electron. If that quantum is smaller than Φ, nothing happens — and waiting does not help, because the energy is not accumulated.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-quantum-physics--07-aphy-quantum-photoelectric.webp" width="900" height="1090" alt="Graph of maximum kinetic energy against frequency for two metals with work functions 2.3 eV and 3.2 eV: straight lines of equal gradient h, with threshold frequencies 5.55 and 7.72 times 10^14 Hz and vertical intercepts minus the work function. Two small graphs show that at fixed frequency, intensity changes photocurrent but not maximum kinetic energy." loading="lazy">
  <figcaption>Frequency sets photoelectron energy and intensity sets how many are emitted.</figcaption>
</figure>


## Worked example

A metal has a work function of 2.0 eV. Light of frequency 8.0 × 10¹⁴ Hz shines on it. Find the maximum kinetic energy of emitted electrons, in eV.

```
E = hf = 6.63 x 10^-34 x 8.0 x 10^14 = 5.30 x 10^-19 J = 3.31 eV
KE_max = hf - Phi = 3.31 - 2.0 = 1.31 eV
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-quantum-physics--01-aphy-quantum-alpha-scattering.webp" width="900" height="1160" alt="Twelve alpha-particle tracks computed from inverse-square repulsion by one small positive nucleus. Distant tracks barely bend, closer ones turn through large angles and the closest is turned back. This shows the atom is mostly empty space with a small, massive, positively charged nucleus." loading="lazy">
  <figcaption>Alpha tracks bend or rebound because of a tiny, massive, positive nucleus.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-quantum-physics--09-aphy-quantum-de-broglie.webp" width="900" height="1190" alt="Electrons accelerated through a potential difference pass through graphite and form rings on a screen. Doubling V from 2.5 kV to 5 kV shortens lambda from 24.6 pm to 17.4 pm and shrinks the rings by 0.71. A log scale shows a 0.057 kg ball at 40 m/s with lambda about 3e-34 m, far smaller than an electron at 3.5 kV (2e-11 m)." loading="lazy">
  <figcaption>Faster electrons have a shorter wavelength, and only atom-sized wavelengths diffract noticeably.</figcaption>
</figure>


## Energy levels and spectra

Electron energy levels are **discrete** and **negative** (zero is defined at infinite separation — a bound electron has less energy than a free one).

```
h f = E_1 - E_2
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

**Answers:** 1. hf = Φ + KE_max; Φ is the minimum energy required to remove an electron from the metal surface. 2. Red photons individually carry less energy than Φ; intensity only increases the *number* of photons, and energy is not accumulated because one photon interacts with one electron. 3. The one-to-one interaction — a single photon transfers all its energy to a single electron, so if hf < Φ no emission occurs at any intensity. 4. λ = h/p; electron diffraction rings from a thin graphite film. 5. Because electron energy levels are discrete, so only photons of energy exactly equal to a difference between two levels can be emitted or absorbed. 6. E = hf = 6.63×10⁻³⁴ × 8.0×10¹⁴ = 5.30×10⁻¹⁹ J ≈ 3.31 eV; KE_max = 3.31 − 2.0 = 1.31 eV.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-quantum-physics--08-aphy-quantum-energy-levels.webp" width="900" height="1230" alt="Hydrogen energy levels at -13.6, -3.40, -1.51 and -0.85 eV. Falls from n=3 and n=4 to n=2 give 658 nm red and 488 nm blue photons and n=2 to 1 gives 122 nm ultraviolet. A continuous spectrum is shown beside the hydrogen line spectrum with lines at the computed wavelengths." loading="lazy">
  <figcaption>Each spectral line is one photon whose energy equals a gap between two levels.</figcaption>
</figure>

