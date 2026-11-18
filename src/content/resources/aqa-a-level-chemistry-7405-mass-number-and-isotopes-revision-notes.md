---
title: "AQA A-Level Chemistry (7405): Mass number and isotopes -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7405 notes on mass number and isotopes: counting particles, isotopes, TOF stages and flight times, element spectra and a self-test."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to nouman-ahmed (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Please confirm that the electron impact and electrospray detail and the flight-time calculations sit within 3.1.1.2, since the specification text names only the ionisation stage."
publishedDate: 2026-11-18
featured: false
---

These notes condense section **3.1.1.2 Mass number and isotopes** of the AQA AS and A-level Chemistry specification (7404/7405), for teaching from September 2015. It is AS content, examined on Paper 1, and A-level Paper 3 can draw on it. Full explanations and worked examples are in the [Mass number and isotopes study guide](/resources/aqa-a-level-chemistry-7405-mass-number-and-isotopes/); exam-style questions are in the [Mass number and isotopes practice questions](/resources/aqa-a-level-chemistry-7405-mass-number-and-isotopes-practice/). The previous sub-section is summarised in the [Fundamental particles revision notes](/resources/aqa-a-level-chemistry-7405-fundamental-particles-revision-notes/).

## Key terms

| Term | Meaning |
|---|---|
| Atomic (proton) number, Z | Number of protons in the nucleus; defines the element |
| Mass number, A | Number of protons + neutrons |
| Isotopes | Atoms of the same element with the same number of protons but different numbers of neutrons |
| Relative isotopic mass | Mass of an atom of an isotope compared with 1/12 of the mass of a carbon-12 atom |
| Relative abundance | Proportion of an isotope in a sample; the peak height in a spectrum |
| m/z | Mass-to-charge ratio; equals the ion's relative mass for a 1+ ion |
| Mononuclear ion | An ion made of one atom, such as Cl⁺ (not Cl₂⁺) |

## Counting particles

```
protons   = Z
neutrons  = A − Z
electrons = Z − charge
```

| Species | Protons | Neutrons | Electrons |
|---|---|---|---|
| ³²S²⁻ | 16 | 16 | 18 |
| ⁶⁵Zn²⁺ | 30 | 35 | 28 |
| ¹²⁷I⁻ | 53 | 74 | 54 |
| ³H | 1 | 2 | 1 |

Reverse check: 20 protons, 22 neutrons, 18 electrons is ⁴²Ca²⁺.

## Why isotopes exist and what differs

- The proton number fixes the element; the neutron number can vary, so one element can have atoms of different mass.
- **Same chemical properties:** same electron configuration.
- **Different physical properties:** anything that depends on mass, such as density or rate of diffusion.

## TOF mass spectrometry: stage, what happens, why

| Stage | What happens | Why it matters |
|---|---|---|
| Ionisation | Electron impact: X(g) → X⁺(g) + e⁻. Electrospray: X(g) + H⁺ → XH⁺(g) | Charged particles can be accelerated and detected |
| Acceleration | Electric field gives all ions the **same kinetic energy** | With KE fixed, speed depends only on mass |
| Ion drift | Ions cross a field-free region at constant speed | Lighter ions are faster, so they separate by arrival time |
| Detection | Ions gain electrons at a negative plate, producing a current | Current is proportional to abundance |
| Data analysis | Computer converts times to m/z and plots abundance | Gives the spectrum used in calculations |

**Which ionisation method?** Electron impact suits elements and small molecules. Electrospray is gentler, so large molecules do not fragment; the ion carries an extra proton, so the peak is at Mᵣ + 1.

## Flight-time calculations

The question gives KE = ½mv² and v = d ÷ t. Your job is the conversions.

### Method in steps

1. Mass of one ion (kg) = relative mass ÷ 1000 ÷ Avogadro constant.
2. Speed: v = √(2KE ÷ m).
3. Time: t = d ÷ v.
4. To compare two isotopes at the same KE: t₂ = t₁ × √(m₂ ÷ m₁).
5. To find a mass from a time: m = 2KE t² ÷ d², then × 1000 × Avogadro constant.

**Worked reminder.** ³⁹K⁺ ions with KE 1.50 × 10⁻¹⁶ J cross a 1.00 m tube.

- m = 39.0 ÷ 1000 ÷ 6.022 × 10²³ = 6.476 × 10⁻²⁶ kg
- v = √(2 × 1.50 × 10⁻¹⁶ ÷ 6.476 × 10⁻²⁶) = 6.81 × 10⁴ m s⁻¹
- t = 1.00 ÷ 6.81 × 10⁴ = **1.47 × 10⁻⁵ s**
- ⁴¹K⁺ arrives at 1.47 × 10⁻⁵ × √(41 ÷ 39) = **1.51 × 10⁻⁵ s**

## Spectra of elements

- **Number of peaks** = number of isotopes.
- **m/z** of each peak = relative isotopic mass.
- **Height** = relative abundance.

```
Aᵣ = Σ(m/z × abundance) ÷ Σ(abundance)
```

Divide by the total of the heights, not automatically by 100.

**Worked reminder (percentages).** Silicon: 28 (92.2%), 29 (4.7%), 30 (3.1%).
Aᵣ = (2581.6 + 136.3 + 93.0) ÷ 100 = 28.109 = **28.1**.

**Worked reminder (relative heights).** Peaks at m/z 6 (height 1.0) and m/z 7 (height 12.2).
Aᵣ = (6.0 + 85.4) ÷ 13.2 = 6.92 = **6.9**, so the element is lithium.

**Worked reminder (unknown abundance).** Rubidium: ⁸⁵Rb and ⁸⁷Rb, Aᵣ = 85.5. Let x = fraction of ⁸⁵Rb: 85x + 87(1 − x) = 85.5, so 2x = 1.5 and x = 0.75. That is **75% rubidium-85**.

**Molecules.** Electron impact: the molecular ion M⁺ at the highest m/z gives Mᵣ. Electrospray: subtract 1 from the MH⁺ peak.

**Scope limit.** Aᵣ calculations use mononuclear ions only.

## Exam traps

- Writing "same speed" instead of "same kinetic energy" for acceleration.
- Electrons = A − Z (that is neutrons).
- Forgetting the charge when counting electrons in an ion; for a negative ion, add electrons.
- Same chemistry "because same protons": the reason is the same electron configuration.
- Missing ÷ 1000 or ÷ L when finding the mass of one ion.
- Dividing by 100 when peak heights do not total 100.
- Subtracting 1 from an electron-impact peak.
- Stating that the detector "counts" ions without mentioning the current.

## Self-test

1. How many neutrons are in ⁸¹Br⁻?
2. How many electrons are in ⁵⁹Co³⁺ (Z = 27)?
3. A particle has 8 protons, 10 neutrons and 10 electrons. Write its symbol.
4. Why do ³⁵Cl and ³⁷Cl have the same chemical properties?
5. State one physical property that differs between isotopes.
6. What does the acceleration stage give every ion?
7. Explain why lighter ions reach the detector first.
8. How is abundance measured at the detector?
9. A peak from electrospray ionisation appears at m/z 151. What is the Mᵣ of the molecule?
10. Copper gives peaks at m/z 63 (69.2%) and 65 (30.8%). Calculate Aᵣ to one decimal place.
11. An element has two isotopes, mass 107 and 109, and Aᵣ 107.9. Find the percentage of the lighter isotope.
12. A ²⁴Mg⁺ ion takes 1.20 × 10⁻⁵ s. How long does a ²⁶Mg⁺ ion take with the same kinetic energy and tube?

### Answers

1. 81 − 35 = **46**.
2. 27 − 3 = **24**.
3. ¹⁸O²⁻.
4. Same number and arrangement of electrons, and chemical reactions involve electrons.
5. Density (or rate of diffusion, or mass).
6. The same kinetic energy.
7. Same KE = ½mv², so smaller mass gives greater speed and a shorter time over the same distance.
8. Ions gain electrons at the detector, creating a current proportional to the number of ions.
9. 151 − 1 = **150**.
10. (63 × 69.2 + 65 × 30.8) ÷ 100 = 63.616 = **63.6**.
11. 107x + 109(1 − x) = 107.9, so 2x = 1.1, x = 0.55: **55%**.
12. 1.20 × 10⁻⁵ × √(26 ÷ 24) = **1.25 × 10⁻⁵ s**.

## Official syllabus

AQA, *AS and A-level Chemistry* specification (7404/7405), for AS and A-level exams June 2016 onwards: section 3.1.1.2 Mass number and isotopes.
