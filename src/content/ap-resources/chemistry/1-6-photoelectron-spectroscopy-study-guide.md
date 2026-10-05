---
resourceId: "mb-ap-chem-1.6-study-guide"
title: "Photoelectron Spectroscopy: Study Guide (Chemistry 1.6)"
description: "Learn how a photoelectron spectrum shows the subshells of an atom or ion: peak position gives binding energy, peak height gives electron count, and Coulomb's law explains both."
course: "chemistry"
unit: 1
topics: ["1.6"]
resourceType: "study-guide"
prerequisites:
  - "Writing ground-state electron configurations for atoms and ions up to calcium"
  - "Coulomb's law as a proportion, and the idea of shielding by core electrons"
prerequisiteResources: ["mb-ap-chem-1.5-study-guide"]
learningObjectives:
  - "Explain what the position and the height of each peak in a photoelectron spectrum tell you"
  - "Turn a photoelectron spectrum into a ground-state electron configuration and identify the atom or ion"
  - "Predict the spectrum of an atom or ion from its electron configuration"
  - "Use Coulomb's law, distance and nuclear charge to explain why peaks sit at different binding energies"
  - "Judge whether a model of electron structure is consistent with photoelectron data"
skills: ["1", "4", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Binding energies are given in MJ mol⁻¹ (1 MJ mol⁻¹ = 1000 kJ mol⁻¹). All spectra on this page use illustrative values chosen to show the real pattern; they are not measured data"
related: ["mb-ap-chem-1.6-revision-notes", "mb-ap-chem-1.6-practice", "mb-ap-chem-1.6-checklist"]
next: "mb-ap-chem-1.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Photoelectron spectroscopy (PES) measures how much energy it takes to remove electrons from each subshell of an atom or ion."
  - "Each peak is one subshell. Its position is the binding energy; its height is (ideally) proportional to the number of electrons in that subshell."
  - "Peaks at higher binding energy belong to electrons closer to the nucleus or feeling a larger effective nuclear charge, as Coulomb's law predicts."
  - "Separate 2s and 2p (and 3s and 3p) peaks are evidence that shells are split into subshells."
faqs:
  - question: "Why does the binding energy axis often run backwards?"
    answer: "Many spectra plot binding energy increasing to the left, and often on a log scale. Always read the axis labels before you read the peaks."
  - question: "Is a PES peak the same as an ionization energy?"
    answer: "The lowest-energy peak is close to the first ionization energy. The other peaks are not successive ionization energies: each one is the energy to remove a single electron from a different subshell of the neutral atom."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What photoelectron spectroscopy measures

In Topic 1.5 you wrote electron configurations such as 1s² 2s² 2p⁶ 3s² for magnesium. That configuration is a model. Photoelectron spectroscopy (PES) is an experiment that lets you test the model.

The idea is simple:

1. Shine high-energy radiation (X-rays or ultraviolet light) on a sample of atoms in the gas phase.
2. Each photon that is absorbed can knock **one** electron out of an atom. The electron can come from **any** subshell, not only the outer one.
3. Measure how much energy was needed to remove each electron. This is the electron's **binding energy**.

A **photoelectron spectrum** is a graph of how many electrons were removed (vertical axis) against their binding energy (horizontal axis). Electrons from the same subshell all need the same energy, so they pile up into one peak.

> **Background (not needed for this topic's questions):** the instrument does not measure binding energy directly. It measures the kinetic energy (KE) of each ejected electron. Because the photon energy is known, binding energy = photon energy − KE. For example, if photons carry 150.0 MJ mol⁻¹ and electrons from one subshell leave with 24.0 MJ mol⁻¹ of kinetic energy, that subshell's binding energy is 150.0 − 24.0 = 126.0 MJ mol⁻¹. Weakly held electrons leave fastest. You will meet photon energy again in Unit 3.

## How to read a spectrum

Two features carry all the information.

- **Peak position = binding energy of that subshell.** The further a peak is towards high binding energy, the more strongly those electrons are held.
- **Peak height = number of electrons in that subshell.** The heights are *ideally* proportional to the number of electrons. Real peaks are not perfect, so you compare **relative** heights: a 2p peak in a full subshell is about three times as tall as a full 2s peak (6 electrons against 2).

So for a neutral atom:

- the **number of peaks** is the number of occupied subshells;
- the **heights** give the superscripts of the electron configuration;
- the **total of the heights** (in electrons) equals the number of electrons, which equals the atomic number.

### Watch the axis

In most spectra you will see, binding energy **increases to the left**, and the scale is often **logarithmic** (each grid line is ten times the one before it). Core peaks can be hundreds of times larger in energy than valence peaks, and a log scale is the only way to show them all on one graph.

<figure>
<svg viewBox="0 0 680 280" role="img" aria-labelledby="pes-mg-title pes-mg-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pes-mg-title">Illustrative photoelectron spectrum of magnesium</title>
<desc id="pes-mg-desc">A spectrum with binding energy on a logarithmic axis from 1000 MJ per mole on the left to 0.1 MJ per mole on the right. There are four peaks. The 1s peak is at about 126 MJ per mole with a height of 2 electrons. The 2s peak is at about 9.1 MJ per mole, height 2. The 2p peak is at about 5.3 MJ per mole, height 6, three times taller than the others. The 3s peak is at about 0.74 MJ per mole, height 2.</desc>
<line x1="60" y1="200" x2="620" y2="200" stroke="#1d2b44" stroke-width="2"/>
<line x1="60" y1="200" x2="60" y2="60" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="60" y1="200" x2="60" y2="207"/><line x1="200" y1="200" x2="200" y2="207"/><line x1="340" y1="200" x2="340" y2="207"/><line x1="480" y1="200" x2="480" y2="207"/><line x1="620" y1="200" x2="620" y2="207"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="60" y="224">1000</text><text x="200" y="224">100</text><text x="340" y="224">10</text><text x="480" y="224">1</text><text x="620" y="224">0.1</text>
<text x="340" y="252">Binding energy (MJ mol⁻¹), increasing to the left</text>
</g>
<text x="30" y="130" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 30 130)">Relative number of electrons</text>
<path d="M178 200 L186 160 L194 200 Z" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M338 200 L346 160 L354 200 Z" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M370 200 L378.5 80 L387 200 Z" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M490 200 L498 160 L506 200 Z" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="186" y="140">1s (2)</text><text x="186" y="155">≈126</text>
<text x="326" y="140">2s (2)</text><text x="326" y="155">≈9.1</text>
<text x="400" y="62">2p (6)</text><text x="400" y="76">≈5.3</text>
<text x="498" y="140">3s (2)</text><text x="498" y="155">≈0.74</text>
</g>
</svg>
<figcaption>Figure 1. Illustrative spectrum of magnesium, 1s² 2s² 2p⁶ 3s². Each label gives the subshell, the number of electrons (in brackets) and the approximate binding energy in MJ mol⁻¹. The values are chosen to show the real pattern; they are not measured data. Note the log scale and the axis running from high to low energy.</figcaption>
</figure>

Read Figure 1 from left to right. The 1s peak is far to the left: these electrons are held very tightly. The 2s and 2p peaks sit close together but are clearly separate. The 3s peak is far to the right: the outermost electrons are the easiest to remove. The heights 2, 2, 6, 2 add up to 12 electrons, which is magnesium's atomic number.

## Explaining peak positions with Coulomb's law

From Topic 1.5, the attraction between the nucleus and an electron follows Coulomb's law:

**F ∝ q₁q₂ / r²**

A bigger attraction means more energy is needed to remove the electron, so the peak sits at higher binding energy. Two factors decide the size of the attraction.

**1. Distance from the nucleus (r).** Electrons in shell n = 1 are, on average, much closer to the nucleus than electrons in n = 2 or n = 3. Smaller r gives a much larger attraction, so core peaks have far higher binding energies than valence peaks. In Figure 1, the 1s electrons of magnesium need roughly 170 times as much energy to remove as the 3s electrons.

**2. The charge the electron feels.** A larger nuclear charge (more protons) pulls harder on every electron. But an electron in an outer shell does not feel the full nuclear charge: the core electrons between it and the nucleus **shield** it. Inner electrons feel almost the whole nuclear charge; outer electrons feel a much smaller **effective nuclear charge**.

These two ideas explain the main patterns you will see in spectra:

| Pattern in the data | Explanation |
|---|---|
| Within one atom, 1s is at the highest binding energy and the valence subshell is at the lowest. | 1s electrons are closest to the nucleus and feel almost the full nuclear charge. |
| The same subshell moves to higher binding energy as you go from one element to the next (for example, 1s of Mg is higher than 1s of Na). | One more proton increases the nuclear charge, while the electrons in that subshell are at a similar distance. |
| 2s and 2p give two separate peaks, with 2s at higher binding energy. | A shell is divided into subshells with different energies. PES is the experimental evidence for this. |

The course treats the 2s/2p split as an observed fact that supports the subshell model. The deeper reason (s electrons spend more time very close to the nucleus) is background and is not needed for the exam.

## Atoms, ions and how spectra change

The same rules apply to ions. You only need the ion's electron configuration.

- **Cations.** Electrons are removed from the highest-energy occupied subshell first. Mg²⁺ is 1s² 2s² 2p⁶, so its spectrum has no 3s peak. Its remaining peaks keep the heights 2, 2, 6.
- **Anions.** Added electrons go into the lowest available subshell. Cl⁻ is 1s² 2s² 2p⁶ 3s² 3p⁶, so its 3p peak is taller than chlorine's (6 electrons against 5).
- **Isoelectronic species** (the same number of electrons, such as Cl⁻, Ar and K⁺) have the **same number of peaks with the same heights**. Their peaks differ in **position**: the species with more protons holds every electron more tightly, so its peaks sit at higher binding energy.

## Worked example 1: from spectrum to configuration

**Question.** An element gives the photoelectron spectrum summarised below (illustrative values). Write its electron configuration, identify it, and state which peak belongs to the electrons that are, on average, furthest from the nucleus.

| Peak | Binding energy (MJ mol⁻¹) | Relative height |
|---|---|---|
| A | 208 | 2 |
| B | 18.7 | 2 |
| C | 13.5 | 6 |
| D | 1.95 | 2 |
| E | 1.06 | 3 |

1. **Count the peaks.** Five peaks mean five occupied subshells.
2. **Assign subshells in order of decreasing binding energy.** The highest-energy peak is 1s. Then come 2s and 2p (close together), then 3s and 3p (close together, at low energy). So A = 1s, B = 2s, C = 2p, D = 3s, E = 3p.
3. **Use heights as superscripts.** 1s² 2s² 2p⁶ 3s² 3p³.
4. **Add the electrons.** 2 + 2 + 6 + 2 + 3 = 15. A neutral atom with 15 electrons has 15 protons: the element is **phosphorus**.
5. **Furthest electrons.** Peak E (3p) has the lowest binding energy. These electrons are in the outermost shell and are shielded by 10 core electrons, so they feel the weakest attraction.

**Check.** Peak C is three times as tall as B, as expected for a full 2p subshell (6) beside a full 2s subshell (2). Peak E is only 3 units, so the 3p subshell is half full, which matches group 15.

**Interpretation.** Peak E's position, 1.06 MJ mol⁻¹ (1060 kJ mol⁻¹), is an estimate of phosphorus's first ionization energy, because it is the energy to remove the most loosely held electron.

## Worked example 2: predicting spectra for isoelectronic species

**Question.** The illustrative spectrum of argon has peaks at 309, 31.5, 24.1, 2.82 and 1.52 MJ mol⁻¹, with heights 2, 2, 6, 2, 6. Predict how the spectra of Cl⁻ and K⁺ compare with argon's. A student claims: "The K⁺ spectrum will have an extra small peak at low energy, because potassium has a 4s electron." Evaluate the claim.

1. **Count electrons.** Cl⁻ has 17 protons and 18 electrons. Ar has 18 protons and 18 electrons. K⁺ has 19 protons and 18 electrons.
2. **Write configurations.** All three are 1s² 2s² 2p⁶ 3s² 3p⁶.
3. **Predict the shape.** All three spectra have five peaks with heights 2, 2, 6, 2, 6.
4. **Predict the positions.** The electrons are in the same subshells, so distance and shielding are similar. The nuclear charge differs: +17, +18, +19. By Coulomb's law, a larger nuclear charge attracts every electron more strongly. So every K⁺ peak is at a **higher** binding energy than the matching Ar peak, and every Cl⁻ peak is at a **lower** binding energy.
5. **Evaluate the claim.** The claim is **incorrect**. Potassium's 4s electron is the one removed to form K⁺. K⁺ has no 4s electron, so its spectrum has no 4s peak. The spectrum of a potassium *atom* would have a sixth, small peak (height 1) at very low binding energy.

**Why this matters.** Peak heights tell you the electron configuration; peak positions tell you about the nucleus–electron attraction. Isoelectronic species are the cleanest test of that second idea, because only the nuclear charge changes.

## Is the model consistent with the data?

The suggested skill for this topic is judging whether a model fits the evidence. Two models are worth comparing.

- **A simple shell model** says every electron in the same shell has the same energy. For magnesium it predicts **three** peaks with heights 2, 8 and 2. The real spectrum has **four** peaks, because the n = 2 electrons split into a 2s peak (2) and a 2p peak (6). The simple shell model is therefore **not consistent** with PES data.
- **The shell-and-subshell model** (the electron configuration) predicts one peak for each occupied subshell, with heights equal to the superscripts. This **is consistent** with the data for every element in this course.

When an exam question asks whether a model is consistent with a spectrum, name the specific feature of the data (number of peaks, relative heights or relative positions) that agrees or disagrees with the model.

## Common misconceptions

- **"The tallest peak has the highest energy."** No. Height tells you the number of electrons; position tells you the energy. In Figure 1, the 2p peak is tallest but the 1s peak has the highest binding energy.
- **"High energy is on the right."** Not always. Most spectra put high binding energy on the left. Read the axis first.
- **"One peak per electron."** No: one peak per occupied subshell. Twelve electrons in magnesium give four peaks.
- **"PES peaks are successive ionization energies."** No. Each peak is the energy to remove one electron from a particular subshell of the neutral atom (or the given ion). Only the lowest peak matches an ionization energy (the first one).
- **"Core electrons do not show up."** They do. PES removes electrons from every subshell, which is why it is evidence for the core as well as the valence structure.
- **"The 1s peak is at the same energy in every element."** No. It moves to higher binding energy as the nuclear charge increases.
- **"Electrons in the same shell have the same energy."** PES shows separate s and p peaks within a shell.
- **"A p peak always has a height of 6."** Only when the subshell is full. Phosphorus's 3p peak has height 3.

## Where this leads

PES gives you experimental evidence for the shells and subshells from [Topic 1.5, Atomic Structure and Electron Configuration](/advanced-course-resources/chemistry/1-5-atomic-structure-electron-configuration-study-guide/). Next, [Topic 1.7, Periodic Trends](/advanced-course-resources/chemistry/1-7-periodic-trends-study-guide/), uses the same Coulomb's law reasoning to explain trends in ionization energy, atomic radius and electronegativity. Try the [practice questions](/advanced-course-resources/chemistry/1-6-photoelectron-spectroscopy-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/1-6-photoelectron-spectroscopy-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/1-6-photoelectron-spectroscopy-checklist/) to consolidate.
