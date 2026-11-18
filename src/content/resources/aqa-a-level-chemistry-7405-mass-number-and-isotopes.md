---
title: "AQA A-Level Chemistry (7405): Mass number and isotopes"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Atomic structure"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7405"]
syllabusSeries: "For teaching from September 2015"
stage: "AS"
order: 1.2
syllabusTopics:
  - qualification: "a-level"
    topic: "atomic-structure-7405"
    subtopic: "mass-number-and-isotopes-7405"
description: "AQA 7405 mass number and isotopes in depth: counting particles in ions, why isotopes exist, time-of-flight calculations and reading element spectra."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide teaches section **3.1.1.2 Mass number and isotopes** of the AQA AS and A-level Chemistry specification (7404/7405), for teaching from September 2015. It is AS content in 3.1.1 Atomic structure, examined on Paper 1, and A-level Paper 3 can draw on it. The broader [Atomic Structure study guide](/resources/a-level-aqa-chemistry-atomic-structure/) introduces the five stages of time-of-flight (TOF) mass spectrometry; this page goes further into particle counting, the reasons behind each TOF stage, flight-time calculations and the full range of spectrum questions. Condensed recall is in the [Mass number and isotopes revision notes](/resources/aqa-a-level-chemistry-7405-mass-number-and-isotopes-revision-notes/), and questions are in the [Mass number and isotopes practice questions](/resources/aqa-a-level-chemistry-7405-mass-number-and-isotopes-practice/). The course hub is [AQA A-Level Chemistry](/boards/aqa/a-level/chemistry/).

## What the specification asks

| Content statement | What you must be able to do |
|---|---|
| Mass number (A) and atomic (proton) number (Z) | Determine the number of protons, neutrons and electrons in atoms and ions from A, Z and charge |
| Isotopes | Explain why isotopes exist |
| Principles of a simple TOF mass spectrometer: ionisation, acceleration to give all ions constant kinetic energy, ion drift, ion detection, data analysis | Describe and explain each stage |
| The spectrometer gives relative isotopic mass and relative abundance | Interpret simple mass spectra of elements |
| Mass spectrometry identifies elements and determines relative molecular mass | Use a spectrum to identify an element or find Mᵣ |
| Calculating relative atomic mass | Calculate Aᵣ from isotopic abundance, limited to mononuclear ions |

The skills column links this sub-topic to reporting answers to an appropriate number of significant figures, calculating weighted means and interpreting spectra.

## Counting particles: A, Z and charge

**Atomic number, Z**, is the number of protons. It defines the element. **Mass number, A**, is the number of protons plus neutrons. Both are written on the symbol: mass number top left, atomic number bottom left, charge top right.

```
neutrons  = A − Z
electrons = Z − charge
```

### Worked example 1: three particles

| Particle | Z | A | Charge | Protons | Neutrons | Electrons |
|---|---|---|---|---|---|---|
| ³⁷Cl⁻ | 17 | 37 | 1− | 17 | 20 | 18 |
| ⁵⁶Fe³⁺ | 26 | 56 | 3+ | 26 | 30 | 23 |
| ²H⁺ | 1 | 2 | 1+ | 1 | 1 | 0 |

The last row is a deuterium ion, a bare nucleus. Questions like it check that you do not assume every particle has electrons.

**Working backwards.** An ion has 34 protons, 45 neutrons and 36 electrons. Z = 34, so the element is selenium; A = 34 + 45 = 79; charge = 34 − 36 = 2−. The particle is ⁷⁹Se²⁻.

## Why isotopes exist

**Isotopes** are atoms of the same element with the same number of protons but different numbers of neutrons. To *explain the existence* of isotopes, say that the number of protons fixes the element, but nuclei of that element can hold different numbers of neutrons, giving atoms with different mass numbers.

Then link structure to properties:

- **Chemical properties are the same**, because isotopes have the same number of electrons in the same arrangement, and chemistry is decided by electrons.
- **Physical properties that depend on mass differ**, such as density and the rate at which a gas diffuses.

A full answer needs both halves: same electron configuration, therefore same chemistry.

## Relative isotopic mass

The **relative isotopic mass** is the mass of an atom of one isotope compared with one twelfth of the mass of an atom of carbon-12. It is very close to the mass number but is not a whole number (chlorine-35 is about 34.97). Exam data usually rounds relative isotopic masses to whole numbers, and the spectrometer measures them accurately. Relative atomic mass, the weighted mean across all isotopes, is defined in 3.1.2.1.

## Time-of-flight mass spectrometry: the reason for each stage

Knowing the five names earns little on its own. Most marks come from saying *why* each stage is there.

1. **Ionisation.** The particles must be charged so that an electric field can accelerate them and the detector can register them. Two methods appear in AQA questions:
   - *Electron impact:* the vaporised sample is hit by high-energy electrons from an electron gun, which knock out an electron: X(g) → X⁺(g) + e⁻.
   - *Electrospray:* the sample is dissolved in a volatile solvent and forced through a fine needle at high voltage; each molecule gains a proton: X(g) + H⁺ → XH⁺(g). This is gentle, so large molecules do not break up.
2. **Acceleration.** An electric field gives **all the ions the same kinetic energy**. This is the stage the specification wording stresses.
3. **Ion drift.** In a region with no electric field, ions travel at constant speed. Because KE = ½mv² is the same for every ion, a smaller mass means a higher speed, so lighter ions arrive first.
4. **Detection.** Positive ions hit a negatively charged plate and gain electrons. This produces a current, and the size of the current is proportional to the number of ions arriving (the abundance).
5. **Data analysis.** A computer converts flight times into m/z values and plots abundance against m/z.

For a 1+ ion, m/z equals the relative mass of the ion.

### The flight-time calculation

AQA questions that ask for a time or speed give you the equations. The working uses two of them:

```
KE = ½mv²        v = d ÷ t
```

**Worked example 2.** A ²⁰Ne⁺ ion is accelerated to a kinetic energy of 2.00 × 10⁻¹⁶ J and drifts 1.50 m to the detector. The Avogadro constant is 6.022 × 10²³ mol⁻¹. Calculate the time of flight.

```
Step 1  mass of one ion in kg
        m = 20.0 ÷ 1000 ÷ 6.022 × 10²³ = 3.321 × 10⁻²⁶ kg

Step 2  speed
        v = √(2KE ÷ m) = √(2 × 2.00 × 10⁻¹⁶ ÷ 3.321 × 10⁻²⁶)
          = 1.097 × 10⁵ m s⁻¹

Step 3  time
        t = d ÷ v = 1.50 ÷ 1.097 × 10⁵ = 1.37 × 10⁻⁵ s
```

Two traps live here. The relative mass must be divided by 1000 (grams to kilograms) **and** by the Avogadro constant (one mole to one ion). Missing either gives a wildly wrong time.

**Comparing isotopes.** Because the kinetic energy is fixed, t is proportional to √m. A ²²Ne⁺ ion takes 1.37 × 10⁻⁵ × √(22 ÷ 20) = 1.43 × 10⁻⁵ s. The heavier isotope arrives later, but only slightly.

**Going backwards.** If a question gives t, d and KE, rearrange: m = 2KE t² ÷ d², then multiply by 1000 and by the Avogadro constant to get the relative mass.

## Reading spectra of elements

Each peak in the spectrum of an element is one isotope. Its m/z gives the relative isotopic mass and its height gives the relative abundance. Heights can be percentages or just relative values; the weighted mean works the same way if you divide by the **total** abundance.

```
Aᵣ = Σ(m/z × abundance) ÷ Σ(abundance)
```

### Worked example 3: abundances as percentages

Neon: m/z 20 (90.5%), 21 (0.3%), 22 (9.2%).

```
Aᵣ = (20 × 90.5 + 21 × 0.3 + 22 × 9.2) ÷ 100
   = (1810 + 6.3 + 202.4) ÷ 100 = 20.187 = 20.2
```

### Worked example 4: relative peak heights, then identify the element

A spectrum shows two peaks: m/z 39, height 14.0; m/z 41, height 1.0.

```
Aᵣ = (39 × 14.0 + 41 × 1.0) ÷ (14.0 + 1.0)
   = 587 ÷ 15.0 = 39.1
```

The Periodic Table shows 39.1 for potassium, so the element is potassium. This is how mass spectrometry **identifies an element**, for example in a sample analysed far from a laboratory.

### Worked example 5: finding an abundance

Boron has isotopes ¹⁰B and ¹¹B and Aᵣ = 10.8. Let the fraction of ¹⁰B be x.

```
10x + 11(1 − x) = 10.8
11 − x = 10.8
x = 0.20, so 20% boron-10 and 80% boron-11
```

### Relative molecular mass from a spectrum

For a molecular substance, the peak at the highest m/z from electron impact is usually the molecular ion, M⁺, and its m/z equals Mᵣ. With electrospray, the ion is MH⁺, so subtract 1. The specification limits Aᵣ calculations to **mononuclear** (single-atom) ions, so you will not be asked to work out Aᵣ from peaks of diatomic ions such as Cl₂⁺.

## Common mistakes

- Using A − Z for electrons, or forgetting the charge when counting electrons.
- Saying isotopes have the same chemical properties "because they have the same protons". The reason is the same electron configuration.
- Writing that acceleration gives ions the same speed. It gives them the same kinetic energy; their speeds differ.
- Forgetting ÷ 1000 and ÷ L when finding the mass of one ion.
- Dividing by 100 when the abundances are peak heights that do not add up to 100.
- Giving Aᵣ to more significant figures than the abundance data justify.
- Subtracting 1 from an electron-impact peak.

## Exam technique for the command words

- **State** or **give**: a fact or value, no reasoning ("the same kinetic energy").
- **Explain**: a cause and its effect, joined with "so" or "because" ("same kinetic energy, so lighter ions move faster and arrive first").
- **Calculate**: show every line, carry unrounded values, and round once at the end.
- **Deduce** or **identify**: use the data, then name the conclusion and point to the evidence ("Aᵣ = 39.1, matching potassium").

## Frequently asked questions

**What is the difference between mass number and relative isotopic mass?**
Mass number is a count of protons and neutrons, always a whole number. Relative isotopic mass is a measured mass compared with carbon-12 and is very close to, but not exactly, the mass number.

**Why do isotopes of an element react in the same way?**
They have the same number of electrons in the same arrangement, and chemical reactions involve electrons, so their chemical properties are the same.

**Do I need to learn the flight-time equations?**
Questions that ask for a speed or a time supply the equations. You need to be able to rearrange them, convert relative mass to the mass of one ion in kilograms and keep track of standard form.

## Official syllabus

AQA, *AS and A-level Chemistry* specification (7404/7405), for AS and A-level exams June 2016 onwards: section 3.1.1.2 Mass number and isotopes.
