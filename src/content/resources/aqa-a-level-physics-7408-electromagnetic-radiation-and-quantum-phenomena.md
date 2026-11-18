---
title: "AQA A-Level Physics (7408): Electromagnetic radiation and quantum phenomena"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Particles and radiation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 2.2
syllabusTopics:
  - qualification: "a-level"
    topic: "particles-and-radiation-aqa-alevel"
    subtopic: "electromagnetic-radiation-and-quantum-phenomena"
description: "Study guide to AQA 7408 section 3.2.2: photoelectric effect, electron collisions, energy levels, line spectra and wave-particle duality, with worked calculations."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide teaches section 3.2.2 Electromagnetic radiation and quantum phenomena of the AQA AS and A-level Physics specification (7407/7408), sub-sections 3.2.2.1 to 3.2.2.4. It adds worked calculations and explanation practice to the overview in the [Particles and radiation study guide](/resources/aqa-a-level-physics-particles-and-radiation/). Use it with the [quantum phenomena revision notes](/resources/aqa-a-level-physics-7408-electromagnetic-radiation-and-quantum-phenomena-revision-notes/) and the [quantum phenomena practice questions](/resources/aqa-a-level-physics-7408-electromagnetic-radiation-and-quantum-phenomena-practice/). This is AS and A-level content with no required practical.

Constants: h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, e = 1.60 × 10⁻¹⁹ C, mₑ = 9.11 × 10⁻³¹ kg, proton mass 1.67 × 10⁻²⁷ kg.

## What 3.2.2 covers

| Sub-section | You must be able to |
|---|---|
| 3.2.2.1 The photoelectric effect | Explain threshold frequency with photons; use work function, stopping potential and hf = ϕ + Ek(max) |
| 3.2.2.2 Collisions of electrons with atoms | Explain ionisation and excitation; describe the fluorescent tube; use the electronvolt |
| 3.2.2.3 Energy levels and photon emission | Explain line spectra; use hf = E₁ − E₂ |
| 3.2.2.4 Wave-particle duality | Use λ = h/mv; explain electron diffraction as evidence of wave behaviour |

## The photoelectric effect

When electromagnetic radiation of high enough frequency falls on a metal surface, electrons are emitted. Three observations cannot be explained if light is treated only as a wave:

1. **Threshold frequency.** Below a minimum frequency f₀, no electrons are emitted, however intense the light. A wave model predicts that a bright enough beam would always supply enough energy.
2. **Maximum kinetic energy depends on frequency, not intensity.** Brighter light of the same frequency gives more electrons per second but the same Ek(max).
3. **Emission is immediate.** Electrons leave as soon as light above f₀ arrives, with no build-up time.

The photon model explains all three. Light arrives as photons of energy hf, and each electron absorbs one whole photon. If hf is less than the **work function** ϕ, the minimum energy needed to free an electron from the surface, no electron can escape. Above the threshold, the extra energy becomes kinetic energy:

**hf = ϕ + Ek(max)**, with **f₀ = ϕ/h** and **eVs = Ek(max)**

Electrons from deeper inside the metal lose some energy on the way out, which is why the equation gives the *maximum* kinetic energy.

### Worked example 1

Light of wavelength 400 nm falls on a metal of work function 2.30 eV. Find the maximum kinetic energy of the photoelectrons, the stopping potential and the threshold wavelength.

```
E = hc/λ = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) / (400 × 10⁻⁹) = 4.97 × 10⁻¹⁹ J = 3.11 eV
Ek(max) = 3.11 − 2.30 = 0.81 eV          (1.3 × 10⁻¹⁹ J)
Vs = 0.81 V
λ₀ = hc/ϕ = 1.989 × 10⁻²⁵ / (2.30 × 1.60 × 10⁻¹⁹) = 5.40 × 10⁻⁷ m (540 nm)
```

Light of wavelength longer than 540 nm, such as red light, emits no electrons from this metal.

### Worked example 2: photons per second

A 2.0 mW beam of 400 nm light falls on the same metal. Number of photons per second = power ÷ energy per photon = 2.0 × 10⁻³ / 4.97 × 10⁻¹⁹ = **4.0 × 10¹⁵ s⁻¹**. Doubling the power doubles this, and so doubles the rate of emission, but each photon still carries 4.97 × 10⁻¹⁹ J, so Ek(max) is unchanged.

### Reading a graph of Ek(max) against f

Rearranging gives Ek(max) = hf − ϕ, a straight line. The **gradient is h** for every metal, the **intercept on the f-axis is f₀**, and extending the line back to f = 0 gives an intercept of **−ϕ** on the energy axis. Lines for different metals are parallel. If the vertical axis shows stopping potential, the gradient is h/e.

## Collisions of electrons with atoms

The **electronvolt** is the energy transferred when an electron moves through a pd of 1 V: 1 eV = 1.60 × 10⁻¹⁹ J. An electron accelerated through 12 V gains 12 eV.

- **Excitation**: an atomic electron moves to a higher energy level. It needs *exactly* the energy difference between levels.
- **Ionisation**: an atomic electron is removed completely. From the ground state of hydrogen this needs 13.6 eV.

A free electron colliding with an atom can transfer *part* of its kinetic energy. A photon is different: it is absorbed only if its whole energy matches a level difference (or exceeds the ionisation energy).

### Worked example 3

Hydrogen levels: −13.6, −3.40, −1.51 and −0.85 eV. An electron with kinetic energy 12.0 eV collides with a hydrogen atom in its ground state.

```
to n = 2: 13.6 − 3.40 = 10.2 eV   (less than 12.0 eV, so possible)
to n = 3: 13.6 − 1.51 = 12.09 eV  (more than 12.0 eV, so not possible)
```

The atom can be excited to n = 2, and the electron then leaves with 12.0 − 10.2 = **1.8 eV**. A 12.0 eV photon, by contrast, would not be absorbed at all, because 12.0 eV matches no level difference.

### The fluorescent tube

1. A high pd across the tube accelerates free electrons through mercury vapour.
2. The electrons collide with mercury atoms, exciting them (and ionising some, which releases more free electrons).
3. The excited mercury atoms de-excite, emitting ultraviolet photons.
4. The phosphor coating on the inside of the glass absorbs the UV, exciting its atoms.
5. The phosphor atoms de-excite in several smaller steps, emitting visible photons.

## Energy levels and line spectra

Electrons in an atom occupy discrete energy levels. A transition from a higher level E₁ to a lower level E₂ emits one photon:

**hf = E₁ − E₂**

Because only certain differences exist, only certain frequencies are emitted, giving a **line spectrum**. This is the evidence for discrete levels. An atom excited to level n can drop back by several routes. From n = 4 there are six possible transitions (4→3, 4→2, 4→1, 3→2, 3→1, 2→1), so up to six lines.

### Worked example 4

Find the wavelengths emitted in the hydrogen transitions 3 → 1 and 4 → 2.

```
3 → 1: ΔE = 13.6 − 1.51 = 12.09 eV = 1.934 × 10⁻¹⁸ J
       λ = hc/ΔE = 1.03 × 10⁻⁷ m (103 nm, ultraviolet)
4 → 2: ΔE = 3.40 − 0.85 = 2.55 eV = 4.08 × 10⁻¹⁹ J
       λ = hc/ΔE = 4.88 × 10⁻⁷ m (488 nm, visible blue-green)
```

The larger the energy gap, the shorter the wavelength. Transitions down to the ground state give ultraviolet photons.

## Wave-particle duality

The photoelectric effect is evidence that electromagnetic waves have a particle nature. **Electron diffraction** is evidence that particles have a wave nature: a beam of electrons passing through a thin layer of graphite produces rings on a screen, a diffraction pattern that only waves can make.

The **de Broglie wavelength** of a particle of momentum mv is **λ = h/mv**. For significant diffraction, λ must be similar in size to the spacing of the atoms (about 10⁻¹⁰ m).

### Worked example 5

An electron is accelerated from rest through 2.0 kV. Compare its de Broglie wavelength with that of a proton moving at the same speed.

```
Ek = eV = 1.60 × 10⁻¹⁹ × 2000 = 3.20 × 10⁻¹⁶ J
v = √(2Ek/mₑ) = √(2 × 3.20 × 10⁻¹⁶ / 9.11 × 10⁻³¹) = 2.65 × 10⁷ m s⁻¹
λ(electron) = h/(mₑv) = 6.63 × 10⁻³⁴ / (9.11 × 10⁻³¹ × 2.65 × 10⁷) = 2.75 × 10⁻¹¹ m
λ(proton)   = h/(mₚv) = 1.50 × 10⁻¹⁴ m
```

The proton's wavelength is about 1800 times smaller, far below atomic spacings, so protons at this speed show no noticeable diffraction by graphite. Increasing the accelerating pd raises the electron's momentum, shortens λ and makes the diffraction rings smaller.

Our understanding of the nature of matter has changed over time as evidence like this appeared. Such changes are evaluated through peer review and validated by the scientific community before they are accepted.

## Common mistakes

- Saying brighter light increases the kinetic energy of photoelectrons.
- Mixing eV and J in hf = ϕ + Ek(max).
- Forgetting that ϕ is a minimum energy, so the equation gives the maximum kinetic energy.
- Assuming a photon can give part of its energy to an atom.
- Leaving levels in eV inside λ = hc/ΔE.
- Using λ = h/mv with a kinetic energy instead of a momentum.

## Exam technique

"Explain" questions on the photoelectric effect expect the one-photon-to-one-electron idea and a link to ϕ. "Describe" questions on the fluorescent tube expect the ordered steps above. In calculations, write the energy in joules on its own line before using hc/λ, and state the unit (eV or J) at every step.

## Frequently asked questions

**Why does increasing light intensity not increase the maximum kinetic energy of photoelectrons?**
Each electron absorbs one photon, and the photon energy depends only on frequency. Higher intensity means more photons per second, so more electrons are emitted, but each still receives the same energy.

**What is the difference between excitation by an electron and by a photon?**
A colliding electron can give any part of its kinetic energy, as long as it is at least a level difference. A photon must be absorbed whole, so its energy must exactly match a level difference.

**What does electron diffraction show?**
It shows that electrons have a wave nature. The rings formed when electrons pass through graphite are a diffraction pattern, with a wavelength given by λ = h/mv.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), for AS and A-level exams June 2016 onwards, published by AQA. Section 3.2.2 Electromagnetic radiation and quantum phenomena.
