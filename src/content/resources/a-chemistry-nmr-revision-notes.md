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
reviewer: "farhat-ul-ain-sehgal"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by farhat-ul-ain-sehgal on 2026-09-29; 2026-11-08: reviewed by farhat-ul-ain-sehgal."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[NMR Spectroscopy study guide](/resources/a-nmr-spectroscopy-carbon-13-and-proton-nmr/).

## The principle

Nuclei with an odd mass number — **¹H and ¹³C** — behave as tiny magnets. In a strong external field they align with or against it, and absorb radio-frequency radiation when flipping between the two states. The absorption frequency depends on the **electronic environment** of the nucleus.

**TMS (tetramethylsilane)** is the reference standard, defined as **δ = 0**. It is used because it is inert, volatile (easily removed), non-toxic, and gives a **single sharp peak** well away from most others — all twelve of its protons are equivalent.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-chemistry-nmr-revision-notes--02-nmr-tms-reference.webp" width="900" height="940" alt="Tetramethylsilane has four CH3 groups on silicon, so its twelve hydrogens are equivalent and give one sharp peak at delta 0, away from typical sample signals. Reasons for using it: inert, volatile, non-toxic, single sharp peak." loading="lazy">
  <figcaption>TMS: twelve equivalent hydrogens give one sharp reference peak at 0.</figcaption>
</figure>


## Carbon-13 NMR

**Number of peaks = number of chemically different carbon environments.**

This is the simplest question type on the topic: count the distinct carbon environments, allowing for symmetry. Ethanol (CH₃CH₂OH) gives **two** peaks; benzene gives **one**, because all six carbons are equivalent.

There is **no splitting** in ¹³C NMR at this level, and peak heights are not quantitative.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-nuclear-magnetic-resonance-spectroscopy--01-nmr-c13-environments.webp" width="900" height="976" alt="Skeletal drawings of pentane, 2-methylbutane and 2,2-dimethylpropane with each carbon coloured by environment. Pentane gives 3 peaks, 2-methylbutane 4 and 2,2-dimethylpropane 2. Peak positions are schematic." loading="lazy">
  <figcaption>Symmetry-equivalent carbons give one 13C peak, so the three C5H12 isomers give 3, 4 and 2 peaks (all boards).</figcaption>
</figure>


## Worked example: carbon-13 peak count

Predict the number of peaks for propan-1-ol, CH₃CH₂CH₂OH, and propan-2-ol, (CH₃)₂CHOH.

Propan-1-ol has three carbons, each in a genuinely different environment (terminal CH₃, central CH₂, CH₂–OH) — **3 peaks**. Propan-2-ol also has three carbons, but its two CH₃ groups are equivalent by the molecule's own symmetry, both attached identically to the central CHOH carbon — so only **2** distinct environments. Same molecular formula, different peak count: exactly why carbon-13 NMR distinguishes structural isomers other techniques might miss.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-chemistry-nmr-revision-notes--03-nmr-propanol-c13.webp" width="900" height="1010" alt="Skeletal formulae with carbons coloured by environment. Propan-1-ol has three different carbons and gives 3 peaks; propan-2-ol has a mirror plane so its two CH3 carbons are equivalent and it gives 2 peaks." loading="lazy">
  <figcaption>Propan-1-ol gives 3 carbon-13 peaks, propan-2-ol only 2 because of symmetry.</figcaption>
</figure>


## Proton NMR — three pieces of information

**1. Chemical shift (δ)** — identifies the environment:

The table below gives the thirteen rows of the *Typical proton (¹H) NMR
chemical shift values (δ) relative to TMS = 0* table printed in the Data
section of the 9701 syllabus (2025–2027), which is provided in the
examination — so it need not be memorised, only read correctly:

| Environment of proton | Example | δ / ppm |
|---|---|---|
| alkane | –CH₃, –CH₂–, >CH– | 0.9–1.7 |
| alkyl next to C=O | CH₃–C=O, –CH₂–C=O, >CH–C=O | 2.2–3.0 |
| alkyl next to aromatic ring | CH₃–Ar, –CH₂–Ar, >CH–Ar | 2.3–3.0 |
| alkyl next to electronegative atom | CH₃–O, –CH₂–O, –CH₂–Cl | 3.2–4.0 |
| attached to alkene | =CHR | 4.5–6.0 |
| attached to aromatic ring | H–Ar | 6.0–9.0 |
| aldehyde | HCOR | 9.3–10.5 |
| alcohol | ROH | 0.5–6.0 |
| phenol | Ar–OH | 4.5–7.0 |
| carboxylic acid | RCOOH | 9.0–13.0 |
| alkyl amine | R–NH– | 1.0–5.0 |
| aryl amine | Ar–NH₂ | 3.0–6.0 |
| amide | RCONHR | 5.0–12.0 |

*Note (as printed): δ values for O–H and N–H protons can vary depending on
solvent and concentration. Ar is used to represent an aromatic ring.*

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-chemistry-nmr-revision-notes--01-nmr-shift-table.webp" width="900" height="1162" alt="Bars for all thirteen proton environments in the 9701 data table on a delta axis, solid for C-H and dashed for O-H and N-H whose shifts vary with solvent and concentration. TMS sits at 0." loading="lazy">
  <figcaption>The thirteen 1H shift ranges from the 9701 data table, with the variable O-H and N-H shifts set apart.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-chemistry-nmr-revision-notes--04-nmr-ethanol-h1.webp" width="900" height="960" alt="Ethanol CH3, CH2 and OH groups matched to a schematic proton spectrum: a 3 H triplet, a 2 H quartet and a 1 H singlet, with an integration trace stepping 2 : 1 : 3. The OH is neither split nor splitting." loading="lazy">
  <figcaption>Ethanol: three signals whose splitting and areas follow the n+1 rule and integration.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-nuclear-magnetic-resonance-spectroscopy--04-nmr-integration.webp" width="900" height="990" alt="Pentan-3-one with its spectrum: quartet at 2.4 and triplet at 1.1 with an integration trace of 32 mm and 48 mm. Ratio 2:3 doubles to 4 H and 6 H." loading="lazy">
  <figcaption>Integration step heights 32:48 = 2:3, scaled to 10 H gives 4 H and 6 H (pentan-3-one).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-chemistry-nuclear-magnetic-resonance-spectroscopy--03-nmr-splitting.webp" width="900" height="960" alt="Ethyl group with arrows: 3 H on CH3 split CH2 into a quartet and 2 H on CH2 split CH3 into a triplet. Below, stick patterns for n = 0 to 3." loading="lazy">
  <figcaption>n neighbouring H give n + 1 lines: singlet, doublet, triplet, quartet with Pascal heights (OCR also uses quintet, sextet, septet).</figcaption>
</figure>


## OH and NH protons

These appear as **broad singlets** at variable shift, and they do **not** split or get split, because they exchange rapidly with the solvent.

**The D₂O shake** confirms them: adding D₂O replaces the OH/NH hydrogen with deuterium, which is not detected, so **the peak disappears**. That is the standard identification test.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-chemistry-nmr-revision-notes--05-nmr-d2o-shake.webp" width="900" height="1190" alt="Two schematic ethanol spectra, before and after shaking with D2O. The exchange R-OH + D2O to R-OD + HOD removes only the OH peak; the C-H quartet and triplet are unchanged." loading="lazy">
  <figcaption>Shaking with D2O makes the OH peak vanish; C-H signals stay.</figcaption>
</figure>


## Common mistakes to avoid

**Including an OH or NH proton in a neighbouring group's splitting count.** Because these protons usually exchange rapidly, they don't show the expected coupling to neighbouring C–H protons, and are excluded when applying the n+1 rule to an adjacent CH₂ or CH₃.

**Assuming the D₂O shake changes the carbon skeleton.** The exchange R–OH + D₂O ⇌ R–OD + HOD is a real, reversible reaction, but it swaps only the labile O–H/N–H hydrogen for deuterium; every C–H bond and the carbon connectivity are unchanged, which is why only the O–H/N–H peak disappears.

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

## Frequently asked questions

**Why is TMS used as the reference in NMR spectroscopy?**
TMS (tetramethylsilane) is inert, volatile, non-toxic and gives a single sharp peak because all twelve of its protons are equivalent. It is defined as δ = 0.

**Do I need to memorise proton NMR chemical shift values for Cambridge 9701?**
No. The table of typical ¹H chemical shift values is printed in the Data section of the 9701 syllabus and provided in the examination, so you need to read it correctly rather than memorise it.

**Why are OH and NH peaks not split in proton NMR?**
OH and NH protons exchange rapidly with the solvent, so they do not couple with neighbouring protons. They appear as broad singlets at variable shift and are left out of the n+1 count for adjacent groups.

**Why are deuterated solvents such as CDCl₃ used in NMR?**
Ordinary solvents contain hydrogen and would produce large proton peaks that hide the sample's signals. Deuterium is not detected in ¹H NMR.

**Is there splitting in carbon-13 NMR?**
Not at this level. In Cambridge 9701 Chemistry, ¹³C NMR shows one peak per distinct carbon environment, with no splitting, and peak heights are not quantitative.
