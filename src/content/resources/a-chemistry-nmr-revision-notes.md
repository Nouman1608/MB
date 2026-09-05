---
title: "A Level Chemistry: NMR Spectroscopy — Revision Notes"
resourceType: "revision-notes"
subject: "chemistry"
level: ["a-levels"]
topic: "Analytical techniques"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
order: 37.3
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-analytical-techniques"
    subtopic: "a-carbon-13-nmr-spectroscopy"
  - qualification: "a-level"
    topic: "a-analytical-techniques"
    subtopic: "a-proton-1h-nmr-spectroscopy"
description: "Condensed recall notes on carbon-13 and proton NMR, chemical shift, splitting and integration for Cambridge A Level Chemistry 9701."
author: "nouman-ahmed"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[NMR Spectroscopy study guide](/resources/a-nmr-spectroscopy-carbon-13-and-proton-nmr/).

## The principle

Nuclei with an odd mass number — **¹H and ¹³C** — behave as tiny magnets. In a strong external field they align with or against it, and absorb radio-frequency radiation when flipping between the two states. The absorption frequency depends on the **electronic environment** of the nucleus.

**TMS (tetramethylsilane)** is the reference standard, defined as **δ = 0**. It is used because it is inert, volatile (easily removed), non-toxic, and gives a **single sharp peak** well away from most others — all twelve of its protons are equivalent.

## Carbon-13 NMR

**Number of peaks = number of chemically different carbon environments.**

This is the simplest question type on the topic: count the distinct carbon environments, allowing for symmetry. Ethanol (CH₃CH₂OH) gives **two** peaks; benzene gives **one**, because all six carbons are equivalent.

There is **no splitting** in ¹³C NMR at this level, and peak heights are not quantitative.

## Worked example: carbon-13 peak count

Predict the number of peaks for propan-1-ol, CH₃CH₂CH₂OH, and propan-2-ol, (CH₃)₂CHOH.

Propan-1-ol has three carbons, each in a genuinely different environment (terminal CH₃, central CH₂, CH₂–OH) — **3 peaks**. Propan-2-ol also has three carbons, but its two CH₃ groups are equivalent by the molecule's own symmetry, both attached identically to the central CHOH carbon — so only **2** distinct environments. Same molecular formula, different peak count: exactly why carbon-13 NMR distinguishes structural isomers other techniques might miss.

## Proton NMR — three pieces of information

**1. Chemical shift (δ)** — identifies the environment:

This table matches the one supplied in the examination Data section, so
it need not be memorised — only read correctly:

| Environment | δ (ppm) |
|---|---|
| Alkane C–H (R–CH₃, R–CH₂–R) | 0.9–1.7 |
| Alkyl adjacent to C=O (R–CO–CH₃) | 2.2–3.0 |
| Alkyl adjacent to an aromatic ring (Ar–CH₃) | 2.3–2.7 |
| Alkyl adjacent to a halogen (R–CH₂–Cl / Br) | 3.2–4.0 (varies with the halogen) |
| Alkyl adjacent to O–H or O–R (R–CH₂–OH, R–O–CH₃) | 3.3–4.3 |
| Alcohol O–H | 1.0–5.5 (variable) |
| Phenol O–H | 4.0–12.0 (variable) |
| Amine N–H | 1.0–5.0 (variable) |
| Amide N–H | 5.0–8.0 (variable) |
| Alkene =C–H | 4.5–6.0 |
| Aromatic ring C–H | 6.0–9.0 |
| Aldehyde –CHO | 9.0–10.0 |
| Carboxylic acid –COOH | 10.0–13.0 |

O–H and N–H shifts are **highly variable**, depending on concentration,
solvent and hydrogen bonding — this is exactly why they are excluded from
the n+1 splitting rule (see below) and identified instead by the D₂O
shake.

**2. Integration** — the relative area under each peak gives the **ratio of hydrogens** in each environment. Note it is a *ratio*, not an absolute count, so a 3:2:1 integration could be 3:2:1 or 6:4:2.

**3. Splitting — the n+1 rule** — a peak is split into **(n+1)** lines, where n is the number of hydrogens on **adjacent** carbons.

| Neighbours | Pattern |
|---|---|
| 0 | Singlet |
| 1 | Doublet |
| 2 | Triplet |
| 3 | Quartet |
| 4 or more (or a combination of non-equivalent neighbouring sets) | Multiplet |

**Splitting tells you about the neighbours, not the peak's own environment.** That is the conceptual point students most often invert. A CH₃ next to a CH₂ appears as a **triplet** — because the CH₂ has two hydrogens.

Ethanol is the classic worked example: CH₃ (triplet, 3H), CH₂ (quartet, 2H), OH (singlet, 1H).

**Deducing structure from a spectrum** combines all three pieces together: the number of peaks gives the number of distinct proton environments, chemical shift identifies what kind of environment each is, relative area gives how many protons are in each, and the splitting pattern reveals how many protons sit on each neighbouring carbon — usually enough to piece together the full structure, especially alongside the molecular formula from mass spectrometry.

## OH and NH protons

These appear as **broad singlets** at variable shift, and they do **not** split or get split, because they exchange rapidly with the solvent.

**The D₂O shake** confirms them: adding D₂O replaces the OH/NH hydrogen with deuterium, which is not detected, so **the peak disappears**. That is the standard identification test.

## Common mistakes to avoid

**Including an OH or NH proton in a neighbouring group's splitting count.** Because these protons usually exchange rapidly, they don't show the expected coupling to neighbouring C–H protons, and are excluded when applying the n+1 rule to an adjacent CH₂ or CH₃.

**Assuming the D₂O shake permanently changes the molecule.** It only removes that peak from *this particular spectrum*, by temporarily swapping an exchangeable proton for deuterium — a diagnostic trick, not a permanent chemical change to the compound itself.

## Solvents

Use **deuterated solvents** such as CDCl₃, because ordinary solvents would contribute their own large proton peaks and obscure the sample's.

## Exam traps

- Counting all carbons rather than distinct carbon *environments*.
- Applying the n+1 rule to the hydrogens on the same carbon.
- Treating integration as an absolute number of hydrogens.
- Expecting OH to split or be split.
- Forgetting why a deuterated solvent is required.
- Using splitting in ¹³C NMR.

## Self-test

1. Why is TMS used as the reference standard?
2. How many peaks does ethanol give in ¹³C NMR, and why?
3. State the n+1 rule and say what n counts.
4. What does integration actually tell you?
5. What is the D₂O shake for, and what happens?
6. Predict the number of carbon-13 peaks for propan-2-ol, and explain why it differs from propan-1-ol.

**Answers:** 1. It is inert, volatile, non-toxic and gives a single sharp peak away from most others, because all twelve of its protons are equivalent. 2. Two — there are two chemically different carbon environments, CH₃ and CH₂. 3. A signal is split into n+1 lines, where n is the number of hydrogen atoms on the **adjacent** carbon atoms, not on the same carbon. 4. The ratio of the numbers of hydrogen atoms in each environment — not the absolute number. 5. It identifies OH and NH protons: adding D₂O exchanges the labile hydrogen for deuterium, which is not detected, so that peak disappears. 6. Two peaks: the two CH₃ groups are equivalent by the molecule's symmetry, both attached identically to the central CHOH carbon, so they give a single combined peak — unlike propan-1-ol, where all three carbons occupy genuinely different environments and give three separate peaks.
