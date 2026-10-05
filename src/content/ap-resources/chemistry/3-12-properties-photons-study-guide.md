---
resourceId: "mb-ap-chem-3.12-study-guide"
title: "Properties of Photons: Study Guide (Chemistry 3.12)"
description: "Learn how a photon's energy equals the energy change of the atom or molecule that absorbs or emits it, and how to use c = λν and E = hν to calculate wavelength, frequency and energy."
course: "chemistry"
unit: 3
topics: ["3.12"]
resourceType: "study-guide"
prerequisites:
  - "The regions of the electromagnetic spectrum and the transitions they cause (Topic 3.11)"
  - "Scientific notation, unit prefixes (nm, μm, kJ) and significant figures"
  - "The mole and Avogadro's number (Topic 1.1)"
prerequisiteResources: ["mb-ap-chem-3.11-study-guide"]
learningObjectives:
  - "Explain that absorbing or emitting a photon changes the energy of an atom or molecule by exactly the photon's energy"
  - "Use c = λν to convert between wavelength and frequency"
  - "Use E = hν, and the combined form E = hc/λ, to find the energy of one photon"
  - "Convert between energy per photon and energy per mole of photons"
  - "Use an energy-level diagram to find the wavelengths of emission or absorption lines"
skills: ["1", "5"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Use h = 6.626 × 10⁻³⁴ J s, c = 2.998 × 10⁸ m s⁻¹ and N_A = 6.022 × 10²³ mol⁻¹. Convert nm to m before calculating; keep unrounded values until the final step"
related: ["mb-ap-chem-3.12-revision-notes", "mb-ap-chem-3.12-practice", "mb-ap-chem-3.12-checklist"]
next: "mb-ap-chem-3.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "When an atom or molecule absorbs a photon, its energy rises by exactly the photon's energy; when it emits a photon, its energy falls by exactly that amount."
  - "Wavelength and frequency are linked by c = λν: as one goes up, the other goes down."
  - "Photon energy is E = hν, or E = hc/λ. Higher frequency and shorter wavelength both mean more energy per photon."
  - "Multiply energy per photon by N_A to get energy per mole of photons, which you can compare with bond energies in kJ mol⁻¹."
faqs:
  - question: "Is frequency measured in hertz or s⁻¹?"
    answer: "Both are the same unit: 1 Hz = 1 s⁻¹. Write s⁻¹ when you want the units to cancel clearly in E = hν, because h is in J s."
  - question: "Do I need to learn the values of h and c?"
    answer: "The values are given on the equation sheet in the exam. You do need to know which equation uses which constant, and to convert units such as nm to m before you use them."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## A photon is a fixed packet of energy

In Topic 3.11 you saw that atoms and molecules have quantized energy levels, and that each region of the spectrum matches one kind of transition. This topic puts numbers on that idea.

Light arrives in **photons**. Each photon carries one fixed amount of energy that depends only on its frequency. When a photon meets an atom or molecule, there are two possibilities:

- **Absorption.** The photon disappears, and the energy of the atom or molecule goes **up** by exactly the energy of the photon.
- **Emission.** The atom or molecule drops to a lower level, and its energy goes **down** by exactly the energy of the photon it gives out.

Energy is conserved in both cases, so:

> E(photon) = ΔE(atom or molecule) = E(upper level) − E(lower level)

Because the levels are quantized, only photons with energies equal to a gap can be absorbed or emitted. That is why the spectrum of an element shows sharp lines at a few wavelengths, not a continuous smear of colour.

## The two equations

**Wavelength and frequency.** Every electromagnetic wave travels through a vacuum at the same speed, the speed of light c. Speed = distance per wave × waves per second, so:

**c = λν**

- c = 2.998 × 10⁸ m s⁻¹ (speed of light)
- λ (lambda) = wavelength, in **metres**
- ν (nu) = frequency, in **s⁻¹** (hertz, Hz)

Since c is fixed, λ and ν are inversely proportional. Halve the wavelength and the frequency doubles.

**Energy and frequency (Planck's equation).**

**E = hν**

- E = energy of **one photon**, in joules
- h = 6.626 × 10⁻³⁴ J s (Planck's constant)

Energy is directly proportional to frequency. Double the frequency and each photon carries twice the energy.

**Combining them.** Substitute ν = c/λ into E = hν:

**E = hc / λ**

This lets you go straight from wavelength to energy. Energy is inversely proportional to wavelength, which is the "shorter wavelength, more energy" rule from Topic 3.11 written as an equation.

| Quantity | Symbol | Unit you must use | Typical size for visible light |
|---|---|---|---|
| Wavelength | λ | m | about 4 × 10⁻⁷ to 7 × 10⁻⁷ m |
| Frequency | ν | s⁻¹ (Hz) | about 4 × 10¹⁴ to 7.5 × 10¹⁴ s⁻¹ |
| Energy per photon | E | J | about 3 × 10⁻¹⁹ to 5 × 10⁻¹⁹ J |
| Energy per mole of photons | E × N_A | J mol⁻¹, then kJ mol⁻¹ | about 170 to 300 kJ mol⁻¹ |

### Per photon or per mole?

E = hν gives the energy of **one** photon, so the number is tiny (around 10⁻¹⁹ J). Chemists usually compare energies per mole, for example with bond energies in kJ mol⁻¹. To convert, multiply by Avogadro's number and divide by 1000:

energy per mole (kJ mol⁻¹) = E(per photon, J) × 6.022 × 10²³ mol⁻¹ ÷ 1000 J kJ⁻¹

The reverse also works: to find the energy one molecule needs to break a bond, divide the bond energy in J mol⁻¹ by N_A.

### Choosing a route

Most photon questions are one of four routes. Decide which one before you touch the calculator.

| You are given | You want | Route |
|---|---|---|
| wavelength λ | energy per photon | convert λ to m, then E = hc/λ |
| frequency ν | wavelength | λ = c/ν, then convert m to nm if asked |
| energy per mole (kJ mol⁻¹) | wavelength | × 1000, ÷ N_A to get J per photon, then λ = hc/E |
| two energy levels | wavelength of the line | ΔE = upper − lower, then λ = hc/ΔE |

Writing each step as a fraction lets the units check you, just as in mole calculations. For example, to find the wavelength that matches 250 kJ mol⁻¹:

(250 kJ mol⁻¹) × (1000 J / 1 kJ) × (1 mol / 6.022 × 10²³ photons) = 4.151 × 10⁻¹⁹ J per photon, then λ = hc / E = 4.785 × 10⁻⁷ m = 479 nm.

If the units do not cancel to the one you want, the setup is wrong.

## Worked example 1: one photon and one mole of photons

**Question.** A particular blue LED emits light of wavelength 455 nm. Calculate (a) the frequency, (b) the energy of one photon and (c) the energy of one mole of these photons, in kJ mol⁻¹.

1. **Convert the wavelength to metres.** 455 nm × (10⁻⁹ m / 1 nm) = 4.55 × 10⁻⁷ m.
2. **(a) Frequency.** ν = c / λ = (2.998 × 10⁸ m s⁻¹) ÷ (4.55 × 10⁻⁷ m) = 6.589 × 10¹⁴ s⁻¹.
3. **(b) Energy of one photon.** E = hν = (6.626 × 10⁻³⁴ J s) × (6.589 × 10¹⁴ s⁻¹) = 4.366 × 10⁻¹⁹ J.
   The units cancel: J s × s⁻¹ = J.
4. **(c) Energy per mole.** 4.366 × 10⁻¹⁹ J × 6.022 × 10²³ mol⁻¹ = 2.629 × 10⁵ J mol⁻¹ = 263 kJ mol⁻¹.

**Answer.** (a) 6.59 × 10¹⁴ s⁻¹; (b) 4.37 × 10⁻¹⁹ J; (c) 263 kJ mol⁻¹ (3 significant figures, matching 455 nm).

**Check.** Using E = hc/λ in one step: (6.626 × 10⁻³⁴ × 2.998 × 10⁸) ÷ 4.55 × 10⁻⁷ = 4.366 × 10⁻¹⁹ J, the same. The frequency and energy sit inside the visible-light ranges in the table above, which is right for blue light.

## Reading an energy-level diagram

An energy-level diagram draws each allowed level as a horizontal line, with energy increasing upwards. An arrow **down** is emission; an arrow **up** is absorption. The length of the arrow is the photon's energy. Levels are often given negative energies, measured from the point where the electron would be removed completely (energy zero). Only **differences** between levels matter for photons, so the negative signs cancel out when you subtract.

<figure>
<svg viewBox="0 0 640 290" role="img" aria-labelledby="z-title z-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="z-title">Energy levels of fictional atom Z and its three emission lines</title>
<desc id="z-desc">Energy increases upwards. A dashed line at the top marks zero energy, where the electron is removed. Below it are three levels: level 3 at minus 2.10 times ten to the minus 19 joules, level 2 at minus 5.20 times ten to the minus 19 joules, and level 1, the ground level, at minus 9.00 times ten to the minus 19 joules. Three downward arrows show emission: from level 3 to level 2, giving 641 nanometres, visible; from level 2 to level 1, giving 523 nanometres, visible; and from level 3 to level 1, the longest arrow, giving 288 nanometres, ultraviolet.</desc>
<defs><marker id="z-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="130" y1="30" x2="600" y2="30" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="120" y="34" text-anchor="end" font-size="12" fill="#1d2b44">0 (removed)</text>
<line x1="130" y1="83" x2="600" y2="83" stroke="#1d2b44" stroke-width="3"/>
<text x="120" y="80" text-anchor="end" font-size="12" fill="#1d2b44">level 3</text>
<text x="120" y="95" text-anchor="end" font-size="11" fill="#1d2b44">−2.10 × 10⁻¹⁹ J</text>
<line x1="130" y1="160" x2="600" y2="160" stroke="#1d2b44" stroke-width="3"/>
<text x="120" y="157" text-anchor="end" font-size="12" fill="#1d2b44">level 2</text>
<text x="120" y="172" text-anchor="end" font-size="11" fill="#1d2b44">−5.20 × 10⁻¹⁹ J</text>
<line x1="130" y1="255" x2="600" y2="255" stroke="#1d2b44" stroke-width="3"/>
<text x="120" y="252" text-anchor="end" font-size="12" fill="#1d2b44">level 1 (ground)</text>
<text x="120" y="267" text-anchor="end" font-size="11" fill="#1d2b44">−9.00 × 10⁻¹⁹ J</text>
<path d="M190 85 V156" stroke="#1d2b44" stroke-width="2" marker-end="url(#z-a)"/>
<text x="200" y="118" font-size="12" fill="#1d2b44">3 → 2</text>
<text x="200" y="134" font-size="12" fill="#1d2b44">641 nm, visible</text>
<path d="M330 162 V251" stroke="#1d2b44" stroke-width="2" marker-end="url(#z-a)"/>
<text x="340" y="203" font-size="12" fill="#1d2b44">2 → 1</text>
<text x="340" y="219" font-size="12" fill="#1d2b44">523 nm, visible</text>
<path d="M470 85 V251" stroke="#1d2b44" stroke-width="2" marker-end="url(#z-a)"/>
<text x="480" y="160" font-size="12" fill="#1d2b44">3 → 1</text>
<text x="480" y="176" font-size="12" fill="#1d2b44">288 nm, UV</text>
</svg>
<figcaption>Figure 1. Energy levels of the fictional atom Z (Worked example 2). Each downward arrow is an emitted photon; the longest arrow carries the most energy and has the shortest wavelength.</figcaption>
</figure>

## Worked example 2: emission lines from an energy-level diagram

**Question.** The fictional atom Z has the three energy levels shown in Figure 1. Excited Z atoms can drop from level 3 to level 2, from level 2 to level 1, or straight from level 3 to level 1. Calculate the wavelength of each emitted photon and state the region of the spectrum.

1. **Find each energy gap** (upper minus lower):
   - 3 → 2: (−2.10 × 10⁻¹⁹ J) − (−5.20 × 10⁻¹⁹ J) = 3.10 × 10⁻¹⁹ J
   - 2 → 1: (−5.20 × 10⁻¹⁹ J) − (−9.00 × 10⁻¹⁹ J) = 3.80 × 10⁻¹⁹ J
   - 3 → 1: (−2.10 × 10⁻¹⁹ J) − (−9.00 × 10⁻¹⁹ J) = 6.90 × 10⁻¹⁹ J
2. **Use λ = hc / E** for each. First, hc = (6.626 × 10⁻³⁴ J s)(2.998 × 10⁸ m s⁻¹) = 1.9865 × 10⁻²⁵ J m.
   - 3 → 2: λ = 1.9865 × 10⁻²⁵ J m ÷ 3.10 × 10⁻¹⁹ J = 6.408 × 10⁻⁷ m = **641 nm**, visible (red-orange)
   - 2 → 1: λ = 1.9865 × 10⁻²⁵ ÷ 3.80 × 10⁻¹⁹ = 5.228 × 10⁻⁷ m = **523 nm**, visible (green)
   - 3 → 1: λ = 1.9865 × 10⁻²⁵ ÷ 6.90 × 10⁻¹⁹ = 2.879 × 10⁻⁷ m = **288 nm**, ultraviolet

**Check 1: energy adds up.** The 3 → 1 drop equals the two smaller drops together: 3.10 × 10⁻¹⁹ + 3.80 × 10⁻¹⁹ = 6.90 × 10⁻¹⁹ J. An atom that falls in two steps emits two lower-energy photons instead of one high-energy photon.

**Check 2: absorption.** A ground-state Z atom can **absorb** 523 nm or 288 nm photons, raising it to level 2 or level 3. It cannot absorb 641 nm light from the ground state, because no gap from level 1 equals 3.10 × 10⁻¹⁹ J.

**Note.** Only the 3 → 1 line falls outside the visible range, so a spectroscope pointed at glowing Z would show two coloured lines. You would need a UV detector to see the third.

## Brightness is not photon energy

A brighter light of the same colour delivers **more photons per second**, not more energetic photons. Each photon still carries E = hν. So:

- A dim 523 nm lamp can raise ground-state Z atoms (Worked example 2) to level 2, because each of its photons carries exactly the 3.80 × 10⁻¹⁹ J gap.
- A very bright 641 nm lamp cannot, because each of its photons carries only 3.10 × 10⁻¹⁹ J, which matches no gap from level 1. An atom absorbs one photon at a time, so piling on more photons does not help.

Brightness changes **how many** atoms or molecules undergo a transition each second, not **which** transition happens. This idea returns in Topic 3.13, where more absorbing particles remove more photons from a beam.

## Common misconceptions

- **Forgetting to convert nm to m.** Using λ = 455 instead of 4.55 × 10⁻⁷ m gives an answer 10⁹ times too small for E. Convert before you substitute.
- **Mixing per photon and per mole.** E = hν gives joules per photon. Multiply by N_A for J mol⁻¹, then divide by 1000 for kJ mol⁻¹.
- **"Longer wavelength means more energy."** E = hc/λ: energy falls as wavelength rises.
- **"Wavelength and frequency are directly proportional."** They are inversely proportional; their product is always c.
- **"An emitted photon's energy equals the energy of the level it came from."** It equals the **difference** between the two levels.
- **"An atom can absorb part of a photon's energy."** A photon is absorbed whole, and only if its energy matches a gap; otherwise it passes through.
- **"Brighter light gives more energetic photons."** Brightness is the number of photons; energy per photon depends only on frequency.
- **Dropping the negative signs carelessly.** With negative level energies, always do upper − lower. The answer for a photon must be positive.

## Where this leads

This topic gives numbers to the transitions in [Topic 3.11, Spectroscopy and the Electromagnetic Spectrum](/advanced-course-resources/chemistry/3-11-spectroscopy-electromagnetic-spectrum-study-guide/). Next, [Topic 3.13, the Beer-Lambert Law](/advanced-course-resources/chemistry/3-13-beer-lambert-law-study-guide/), uses the absorption of photons by a solution to measure its concentration. Try the [practice questions](/advanced-course-resources/chemistry/3-12-properties-photons-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/3-12-properties-photons-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/3-12-properties-photons-checklist/) to consolidate.
