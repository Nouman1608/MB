---
resourceId: "mb-ap-phys2-15.3-study-guide"
title: "Emission and Absorption Spectra: Study Guide (Physics 2 15.3)"
description: "How atoms emit and absorb photons: energy level diagrams, line spectra, using spectra to identify elements, and binding (ionization) energy for single-electron atoms."
course: "physics-2"
unit: 15
topics: ["15.3"]
resourceType: "study-guide"
prerequisites:
  - "Photon energy E = hf and c = fλ (Topics 14.4 and 15.1)"
  - "Discrete energy states of an electron in an atom (Topic 15.2)"
  - "Potential energy of a system of two charges (Topic 10.4)"
prerequisiteResources: ["mb-ap-phys2-15.2-study-guide"]
learningObjectives:
  - "Explain that an atom (electron plus nucleus) gains or loses energy only by amounts equal to the gap between two of its energy states"
  - "Use an energy level diagram to find the energy, frequency and wavelength of an emitted or absorbed photon"
  - "Decide whether a photon of given energy can be absorbed by an atom in a given state"
  - "Explain how emission and absorption line spectra form and how they identify the elements in a source or a gas"
  - "Use binding energy to find the minimum energy needed to ionize an atom from a given state"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "h = 6.63 × 10⁻³⁴ J·s = 4.14 × 10⁻¹⁵ eV·s, c = 3.00 × 10⁸ m/s, 1 eV = 1.60 × 10⁻¹⁹ J. Shortcut: hc ≈ 1.24 × 10³ eV·nm"
related: ["mb-ap-phys2-15.3-revision-notes", "mb-ap-phys2-15.3-practice", "mb-ap-phys2-15.3-checklist"]
next: "mb-ap-phys2-15.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "An atom can absorb or emit a photon only if the photon's energy equals the difference between two of the atom's energy states."
  - "Photon energy and wavelength are linked by E = hf = hc/λ. With E in eV, λ in nm ≈ 1240 ÷ E."
  - "Each element has its own set of energy levels, so it has its own set of spectral lines: a fingerprint."
  - "Emission spectrum: bright lines from a hot, low-density gas. Absorption spectrum: dark lines where a cooler gas removes photons from a continuous spectrum."
  - "Binding energy is the energy needed to remove the electron completely. It is largest from the ground state."
faqs:
  - question: "Why are the energies of the levels negative?"
    answer: "Zero is chosen as the energy of the electron and nucleus when they are far apart and the electron is at rest. A bound electron has less energy than that, so its energy is negative. The size of the negative number is the binding energy from that level."
  - question: "Can an atom absorb a photon whose energy is slightly more than a gap?"
    answer: "No, not for a jump between two bound states. The energy has to match the gap. The exception is ionization: any photon with at least the binding energy can free the electron, and the extra energy becomes the kinetic energy of the free electron."
  - question: "Do I need to know energy level diagrams for atoms with many electrons?"
    answer: "No. In this course you only analyse energy level diagrams of atoms with a single electron. Real multi-electron atoms still have line spectra, but you will not be asked to model their levels."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## The atom as a system

In Topic 15.2 you met the idea that an electron in an atom can only have certain energies. This topic asks what happens when light meets those energy states.

Choose the **system** carefully: the atom is the electron **plus** the nucleus. The energy of the atom is the interaction (electric potential) energy between them, together with the electron's kinetic energy. When we say "the electron moves to a higher level", what really changes is the energy of the electron–nucleus system.

The energy states are fixed by the atom. Three words describe them:

- **Ground state.** The lowest energy state (n = 1). Atoms at room temperature are almost all in this state.
- **Excited state.** Any higher state (n = 2, 3, …). An atom in an excited state does not stay there long.
- **Ionized.** The electron has left the atom completely. The zero of energy is set here, for an electron at rest far from the nucleus. So every bound state has a **negative** energy.

## Photons in, photons out

Energy is conserved when an atom meets light. The atom changes from one state to another, and a single photon carries the difference.

- **Absorption.** An atom in a lower state takes in a photon and jumps to a higher state. This can only happen if the photon's energy **exactly equals** the gap between the two states.
- **Emission.** An atom in an excited state drops to a lower state on its own (spontaneously) and gives out one photon. The photon's energy equals the gap.

In both cases:

**E_photon = |E_upper − E_lower| = hf = hc/λ**

Because the gap between two particular states is fixed, each transition gives a photon of **one frequency** and therefore **one wavelength**. That is why atoms produce sharp lines rather than a smear of colour.

### Units: the electronvolt

Atomic energies are tiny in joules, so we use the **electronvolt**: 1 eV = 1.60 × 10⁻¹⁹ J. With h = 4.14 × 10⁻¹⁵ eV·s and c = 3.00 × 10⁸ m/s, the product hc is about 1.24 × 10⁻⁶ eV·m, or 1.24 × 10³ eV·nm. This gives a fast route:

**λ (in nm) ≈ 1240 ÷ E (in eV)**

A 2.0 eV photon has λ ≈ 620 nm (visible, orange-red). A 10 eV photon has λ ≈ 124 nm (ultraviolet). Bigger energy gaps give shorter wavelengths. If you work in joules with h = 6.63 × 10⁻³⁴ J·s instead, your answer may differ in the last figure. Both routes are fine.

## Energy level diagrams

An **energy level diagram** shows each allowed state as a horizontal line. Higher lines are higher energies. The vertical distance between two lines is the energy of the photon for that transition. An arrow pointing **down** is emission; an arrow pointing **up** is absorption. The horizontal position means nothing.

Figure 1 shows an invented single-electron atom that we will use for this guide. It is a model, not a real element. In this course you only need diagrams for atoms with one electron.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="eld-title eld-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="eld-title">Energy level diagram of a model single-electron atom</title>
<desc id="eld-desc">Five horizontal lines. From the top: 0 electronvolts labelled ionized, n equals 4 at minus 1.0 electronvolts, n equals 3 at minus 2.0, n equals 2 at minus 4.0, and n equals 1, the ground state, at minus 12.0 electronvolts near the bottom. A solid downward arrow from n equals 3 to n equals 2 is labelled emission of a 2.0 electronvolt photon. A dashed upward arrow from n equals 1 to n equals 2 is labelled absorption of an 8.0 electronvolt photon. A dotted upward arrow from n equals 1 to the zero line is labelled binding energy 12.0 electronvolts.</desc>
<defs><marker id="eld-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2">
<line x1="120" y1="50" x2="470" y2="50" stroke-dasharray="3 3"/>
<line x1="120" y1="75" x2="470" y2="75"/>
<line x1="120" y1="100" x2="470" y2="100"/>
<line x1="120" y1="150" x2="470" y2="150"/>
<line x1="120" y1="350" x2="470" y2="350"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="end">
<text x="112" y="54">0 eV</text>
<text x="112" y="79">−1.0 eV</text>
<text x="112" y="104">−2.0 eV</text>
<text x="112" y="154">−4.0 eV</text>
<text x="112" y="354">−12.0 eV</text>
</g>
<g font-size="13" fill="#1d2b44">
<text x="478" y="54">ionized</text>
<text x="478" y="79">n = 4</text>
<text x="478" y="104">n = 3</text>
<text x="478" y="154">n = 2</text>
<text x="478" y="354">n = 1 (ground)</text>
</g>
<line x1="170" y1="100" x2="170" y2="148" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#eld-arr)"/>
<text x="180" y="128" font-size="12" fill="#1d2b44">emits 2.0 eV photon</text>
<line x1="300" y1="350" x2="300" y2="152" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 4" marker-end="url(#eld-arr)"/>
<text x="290" y="250" font-size="12" fill="#1d2b44" text-anchor="end">absorbs 8.0 eV photon</text>
<line x1="420" y1="350" x2="420" y2="52" stroke="#1d2b44" stroke-width="2" stroke-dasharray="2 4" marker-end="url(#eld-arr)"/>
<text x="414" y="300" font-size="12" fill="#1d2b44" text-anchor="end">binding energy</text>
<text x="414" y="316" font-size="12" fill="#1d2b44" text-anchor="end">12.0 eV</text>
</svg>
<figcaption>Figure 1. Energy levels of an invented single-electron atom (not a real element). Solid arrow down: emission from n = 3 to n = 2. Dashed arrow up: absorption from n = 1 to n = 2. Dotted arrow: removing the electron from the ground state. The levels are drawn to scale.</figcaption>
</figure>

How many different lines can this atom emit? Any pair of levels gives one line, so four levels give 4 × 3 ÷ 2 = **6 lines**. An atom excited to n = 4 can drop straight to n = 1, or go down in steps (4 → 2 → 1, for example). Each step is a separate photon.

## Binding energy and ionization

The **binding energy** of a state is the energy needed to take the electron from that state to E = 0, so that it is free. For the atom in Figure 1:

- from the ground state: 0 − (−12.0 eV) = **12.0 eV**;
- from n = 2: **4.0 eV**; from n = 4: only **1.0 eV**.

The ground state is the most tightly bound, so it needs the **most** energy to ionize. A photon with **at least** the binding energy can ionize the atom. Above that threshold the energy does not have to match anything, because a free electron can have any kinetic energy: the extra energy becomes the electron's kinetic energy.

## Line spectra and what they tell you

A **spectrum** is light spread out by wavelength, for example with a diffraction grating (Topic 14.8) or a prism.

- **Continuous spectrum.** All wavelengths are present with no gaps. A hot, dense object such as a lamp filament gives this (Topic 15.4).
- **Emission (bright-line) spectrum.** A hot, low-density gas, for example in a discharge tube, gives bright lines on a dark background. Collisions keep lifting atoms into excited states, and each drop down emits a photon at one of the atom's line wavelengths.
- **Absorption (dark-line) spectrum.** Continuous light passes through a cooler gas. Atoms in the gas absorb photons that match their gaps. Those wavelengths are missing from the beam, so dark lines appear in the continuous spectrum. The excited atoms soon re-emit, but in **all directions**, so very little of that energy continues along the original beam.

<figure>
<svg viewBox="0 0 560 260" role="img" aria-labelledby="spec-title spec-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="spec-title">Emission and absorption spectra of the model atom</title>
<desc id="spec-desc">Two horizontal strips share a wavelength scale from 100 to 700 nanometres. The upper strip, labelled emission spectrum of the hot gas, is dark with five bright lines at 113, 124, 155, 413 and 620 nanometres. The lower strip, labelled absorption spectrum through the cool gas, is light with three dark lines at 113, 124 and 155 nanometres only. The 413 and 620 nanometre lines are absent from the absorption spectrum.</desc>
<text x="60" y="30" font-size="13" fill="#1d2b44">Emission spectrum (hot gas): bright lines on dark</text>
<rect x="60" y="40" width="460" height="50" fill="#1d2b44"/>
<g stroke="#fdf6e3" stroke-width="3">
<line x1="69.8" y1="40" x2="69.8" y2="90"/><line x1="78.4" y1="40" x2="78.4" y2="90"/><line x1="102.2" y1="40" x2="102.2" y2="90"/><line x1="300.2" y1="40" x2="300.2" y2="90"/><line x1="458.7" y1="40" x2="458.7" y2="90"/>
</g>
<text x="60" y="125" font-size="13" fill="#1d2b44">Absorption spectrum (cool gas, ground state): dark lines on light</text>
<rect x="60" y="135" width="460" height="50" fill="#fdf6e3" stroke="#1d2b44"/>
<g stroke="#1d2b44" stroke-width="3">
<line x1="69.8" y1="135" x2="69.8" y2="185"/><line x1="78.4" y1="135" x2="78.4" y2="185"/><line x1="102.2" y1="135" x2="102.2" y2="185"/>
</g>
<line x1="60" y1="200" x2="520" y2="200" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="60" y1="200" x2="60" y2="206" stroke="#1d2b44"/><text x="60" y="220">100</text>
<line x1="136.7" y1="200" x2="136.7" y2="206" stroke="#1d2b44"/><text x="136.7" y="220">200</text>
<line x1="213.3" y1="200" x2="213.3" y2="206" stroke="#1d2b44"/><text x="213.3" y="220">300</text>
<line x1="290" y1="200" x2="290" y2="206" stroke="#1d2b44"/><text x="290" y="220">400</text>
<line x1="366.7" y1="200" x2="366.7" y2="206" stroke="#1d2b44"/><text x="366.7" y="220">500</text>
<line x1="443.3" y1="200" x2="443.3" y2="206" stroke="#1d2b44"/><text x="443.3" y="220">600</text>
<line x1="520" y1="200" x2="520" y2="206" stroke="#1d2b44"/><text x="520" y="220">700</text>
<text x="290" y="245" font-size="13">Wavelength λ (nm)</text>
</g>
</svg>
<figcaption>Figure 2. Spectra of the Figure 1 atom from 100 nm to 700 nm. Top: the hot gas emits lines at 113, 124, 155, 413 and 620 nm (the sixth line, 1240 nm, is infrared and off the scale). Bottom: a cool gas, with its atoms in the ground state, absorbs only the three lines that start at n = 1.</figcaption>
</figure>

Figure 2 shows an important detail. A cool gas has nearly all its atoms in the ground state, so its absorption lines are only the transitions that **start at n = 1**. The emission spectrum includes every downward transition, so it usually has more lines. Every absorption line still matches an emission line of the same element.

**Spectra as fingerprints.** Each element has its own set of energy levels, so it has its own set of line wavelengths. That makes a spectrum a reliable fingerprint:

- An **emission spectrum** tells you which elements are present in a light source, such as a gas lamp or a hot gas cloud.
- An **absorption spectrum** tells you which elements are present in a gas that light has passed through, such as the outer layers of a star or a gas sample in a lab.

To identify an element, all of its expected lines (for the conditions) must be present. One matching line is not enough evidence. For example, hydrogen's visible emission lines are at about 656, 486, 434 and 410 nm. They come from drops down to n = 2. A gas showing only one of those wavelengths is not proven to be hydrogen.

Background: the dark lines in sunlight are absorption lines from gases in the Sun's outer layers. Helium was first identified from a line in the Sun's spectrum, before it was found on Earth.

## Worked example 1: lines from the model atom

**Question.** Atoms of the Figure 1 atom are excited into the n = 3 state. (a) List every photon energy they can emit as they return to the ground state. (b) Find each wavelength and say which part of the spectrum it is in. (c) Find the frequency of the visible photon.

1. **Possible transitions from n = 3.** Directly 3 → 1, or in two steps 3 → 2 then 2 → 1. So three different photons are possible.
2. **Energies.** 3 → 1: E = −2.0 − (−12.0) = **10.0 eV**. 3 → 2: E = −2.0 − (−4.0) = **2.0 eV**. 2 → 1: E = −4.0 − (−12.0) = **8.0 eV**.
3. **Wavelengths** (λ ≈ 1240 ÷ E). 10.0 eV → **124 nm** (ultraviolet). 2.0 eV → **620 nm** (visible). 8.0 eV → **155 nm** (ultraviolet).
4. **Frequency of the visible photon.** f = c/λ = (3.00 × 10⁸ m/s) ÷ (620 × 10⁻⁹ m) = **4.84 × 10¹⁴ Hz**.
5. **Check with joules.** 2.0 eV × 1.60 × 10⁻¹⁹ J/eV = 3.2 × 10⁻¹⁹ J, and f = E/h = 3.2 × 10⁻¹⁹ J ÷ 6.63 × 10⁻³⁴ J·s = 4.83 × 10¹⁴ Hz. The two routes agree to within rounding.

**Interpretation.** A single atom emits either one photon (3 → 1) or two photons (3 → 2 → 1). In each case the total energy given out is 10.0 eV, which is exactly the energy the atom lost. A large number of atoms produce all three lines, so you would see a single red-orange line by eye, plus two ultraviolet lines that need a detector.

## Worked example 2: which photons are absorbed?

**Question.** A beam containing photons of 8.0 eV, 9.0 eV, 10.0 eV and 13.0 eV passes through a cool gas of the Figure 1 atom. All the atoms are in the ground state. Which photons can be absorbed, and what happens to each atom that absorbs one?

1. **Rule.** A ground-state atom absorbs a photon only if −12.0 eV + E_photon is the energy of an allowed level, **or** if E_photon is at least the 12.0 eV binding energy.
2. **8.0 eV.** −12.0 + 8.0 = −4.0 eV, which is level n = 2. **Absorbed**; the atom goes to n = 2.
3. **9.0 eV.** −12.0 + 9.0 = −3.0 eV. There is no level at −3.0 eV. **Not absorbed**; the photon passes through.
4. **10.0 eV.** −12.0 + 10.0 = −2.0 eV, which is n = 3. **Absorbed**; the atom goes to n = 3.
5. **13.0 eV.** This is more than the 12.0 eV binding energy. **Absorbed**, and the atom is ionized. The freed electron has kinetic energy 13.0 − 12.0 = **1.0 eV**.

**Check and interpretation.** The 8.0 eV photon has wavelength 1240 ÷ 8.0 = 155 nm, which matches the dark line at 155 nm in Figure 2. Notice the 9.0 eV photon carries more energy than the 8.0 eV photon, yet it is not absorbed. "More energy" is not enough; the energy must match a gap (or exceed the binding energy). If the gas were hot, so some atoms sat in n = 2, those atoms could also absorb 2.0 eV and 3.0 eV photons, and any photon of 4.0 eV or more would ionize them.

## Common misconceptions

- **"An atom absorbs any photon with enough energy to reach a level."** The photon energy must **equal** the gap. A photon with a little extra is not absorbed for a bound-to-bound jump. Only ionization accepts any energy above a threshold.
- **"The electron emits the photon."** Treat the atom (electron plus nucleus) as the system. The photon's energy comes from the change in the system's interaction energy.
- **"Dark lines mean the gas emits darkness" or "the absorbed light is gone for good."** The atoms re-emit, but in all directions. Along the original beam the light at those wavelengths is much weaker, so the line looks dark.
- **"Absorption and emission spectra of an element have exactly the same lines."** Every absorption line matches an emission line, but a cool gas absorbs mainly from the ground state, so it shows fewer lines.
- **"A negative energy means the atom has no energy."** The negative sign comes from the choice of zero (electron free and at rest). A more negative level is more tightly bound.
- **Mixing up which end is bigger.** A larger energy gap gives a **higher** frequency and a **shorter** wavelength.
- **Calling one matching line proof of an element.** You need the whole pattern of lines expected under those conditions.

## Where this leads

Topic 15.4 looks at the opposite kind of spectrum: the continuous glow of a hot, dense object, and how Planck's quantum idea explained it. See the [blackbody radiation study guide](/advanced-course-resources/physics-2/15-4-blackbody-radiation-study-guide/). For this topic, try the [practice questions](/advanced-course-resources/physics-2/15-3-emission-absorption-spectra-practice/), then use the [revision notes](/advanced-course-resources/physics-2/15-3-emission-absorption-spectra-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/15-3-emission-absorption-spectra-checklist/) to consolidate. You can look back at the [Bohr model guide](/advanced-course-resources/physics-2/15-2-bohr-model-atomic-structure-study-guide/) for where the energy levels come from.
