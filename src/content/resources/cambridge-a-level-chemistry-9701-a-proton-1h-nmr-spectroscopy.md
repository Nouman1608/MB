---
title: "Cambridge A Level Chemistry (9701): Proton (1H) NMR spectroscopy"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Analytical techniques"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
stage: "A"
order: 37.4
syllabusTopics:
  - qualification: "a-level"
    topic: "a-analytical-techniques"
    subtopic: "a-proton-1h-nmr-spectroscopy"
description: "Proton NMR for Cambridge 9701: predicting full spectra from the shift table, integration traces, n+1 splitting in esters, arenes and alcohols, and D₂O exchange."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **37.4, Proton (¹H) NMR spectroscopy**, from Topic 37, Analytical techniques, of
Cambridge International AS & A Level Chemistry 9701, 2025–2027 series. It is A Level content. The syllabus
asks you to interpret a proton spectrum of a simple molecule to deduce "the different environments of proton
present using chemical shift values", "the relative numbers of each type of proton present from relative
peak areas", the number of equivalent protons on the adjacent carbon "using the n + 1 rule (limited to
singlet, doublet, triplet, quartet and multiplet)" and "the possible structures for the molecule". You must
also predict chemical shifts and splitting patterns, describe the use of TMS, state the need for deuterated
solvents such as CDCl₃, and describe identifying O–H and N–H protons by exchange with D₂O.

The overview page [NMR Spectroscopy: Carbon-13 and Proton NMR](/resources/a-nmr-spectroscopy-carbon-13-and-proton-nmr/)
sets out each of these ideas and the ethanol spectrum. This page builds on it with full predictions for
esters, arenes, halogenoalkanes and alcohols, integration traces, harder splitting cases and two complete
deductions. Afterwards, use the [proton NMR revision notes](/resources/cambridge-a-level-chemistry-9701-a-proton-1h-nmr-spectroscopy-revision-notes/)
and the [proton NMR practice questions](/resources/cambridge-a-level-chemistry-9701-a-proton-1h-nmr-spectroscopy-practice/).

## Four questions a proton spectrum answers

| Feature | Question it answers |
|---|---|
| Number of signals | How many different proton environments are there? |
| Chemical shift, δ | What is each set of protons attached to or near? |
| Relative peak area | How many protons are in each environment, as a ratio? |
| Splitting pattern | How many protons are on the neighbouring carbon atom(s)? |

Work through all four for every spectrum. Most incomplete answers use only one or two.

## Predicting chemical shift from the data table

The 9701 data section prints a table of **typical proton chemical shift values relative to TMS = 0**. To
predict a shift, decide what each set of protons is attached to and find the matching row:

| Protons | Row in the table | Typical range / ppm |
|---|---|---|
| CH₃ at the end of an alkyl chain | alkane | 0.9–1.7 |
| CH₃ or CH₂ bonded to a C=O carbon | alkyl next to C=O | 2.2–3.0 |
| CH₃ or CH₂ bonded to a benzene ring | alkyl next to aromatic ring | 2.3–3.0 |
| CH₃ or CH₂ bonded to O or Cl | alkyl next to electronegative atom | 3.2–4.0 |
| H on a benzene ring | attached to aromatic ring | 6.0–9.0 |
| H of a CHO group | aldehyde | 9.3–10.5 |
| H of a COOH group | carboxylic acid | 9.0–13.0 |

O–H and N–H rows have wide ranges, and the table notes that their δ values vary with solvent and concentration.
A peak in a range shared by an O–H and a C–H environment is exactly where the D₂O test becomes useful.

The table gives typical values. In an examination, use the ranges as printed, and treat a value near a
boundary in the light of the rest of the evidence.

## Relative peak areas and integration traces

Peak areas are often shown by an **integration trace**: a line that steps up at each signal, with the height of
each step proportional to the number of protons. To use it:

1. Measure or read each step height.
2. Divide every height by the smallest.
3. Scale to whole numbers if needed.
4. Check the total against the number of hydrogens in the molecular formula.

**Example.** For C₄H₈O₂, the steps measure 21 mm, 14 mm and 21 mm. Dividing by 14 gives 1.5 : 1 : 1.5;
doubling gives **3 : 2 : 3**, which totals 8, matching the 8 hydrogens. If the total had been half the
formula's hydrogens, you would double every number.

## Splitting: applying n + 1 carefully

A signal is split into n + 1 lines, where n is the number of protons on the **adjacent carbon atom(s)**.
Four refinements cover most examination molecules.

**Count neighbours on both sides.** In propane, CH₃CH₂CH₃, each CH₃ has two neighbouring protons and is a
**triplet**. The CH₂ has six neighbours (three on each side), which would give seven lines; the 9701 outcomes
limit names to singlet, doublet, triplet, quartet and **multiplet**, so call it a multiplet.

**Equivalent protons do not split each other.** The six CH₃ protons in propane do not split one another.
Splitting comes only from protons in a different environment on the next carbon.

**An oxygen or carbonyl carbon breaks the chain of splitting.** In methyl propanoate, CH₃CH₂COOCH₃, the OCH₃
protons are on a carbon bonded to an oxygen with no hydrogen, so they are a **singlet**. The CH₂ is next to a
CH₃ and a C=O carbon, so n = 3 and it is a **quartet**.

**O–H and N–H protons are usually left out of the count.** Their rapid exchange normally removes the coupling,
so they appear as broad singlets and do not split their neighbours.

## Full predictions for four molecules

**Methyl propanoate, CH₃CH₂COOCH₃**

| Protons | δ region | Area | Splitting |
|---|---|---|---|
| CH₃ of ethyl group | 0.9–1.7 | 3 | triplet (next to CH₂) |
| CH₂ next to C=O | 2.2–3.0 | 2 | quartet (next to CH₃) |
| O–CH₃ | 3.2–4.0 | 3 | singlet |

**Ethyl ethanoate, CH₃COOCH₂CH₃**

| Protons | δ region | Area | Splitting |
|---|---|---|---|
| CH₃ next to C=O | 2.2–3.0 | 3 | singlet |
| O–CH₂ | 3.2–4.0 | 2 | quartet (next to CH₃) |
| CH₃ of ethyl group | 0.9–1.7 | 3 | triplet (next to CH₂) |

These isomers both show a triplet, a quartet and a singlet in the ratio 3 : 2 : 3. **Chemical shift**
separates them: in methyl propanoate the quartet is in the 2.2–3.0 region (CH₂ next to C=O); in ethyl
ethanoate it is in the 3.2–4.0 region (CH₂ bonded to O).

**2-chloropropane, CH₃CHClCH₃:** the six equivalent CH₃ protons are a **doublet** (one neighbouring H) in
0.9–1.7, area 6. The CH proton has six neighbours, so it is a **multiplet** in the 3.2–4.0 region (next to
Cl), area 1.

**Ethanal, CH₃CHO:** the CH₃ protons are a **doublet** (next to the single CHO proton) in 2.2–3.0, area 3.
The CHO proton is a **quartet** (next to CH₃) in 9.3–10.5, area 1.

## Worked example 1: deducing an ester

**Data.** Compound **E**, C₄H₈O₂: δ 1.1 (triplet, 3H), δ 2.3 (quartet, 2H), δ 3.7 (singlet, 3H).

- **Environments:** three signals, eight protons, matching the formula.
- **Shift:** δ 3.7 is in the region for alkyl next to an electronegative atom, so a CH₃ bonded to O. δ 2.3 is
  in the region for alkyl next to C=O.
- **Splitting:** the triplet and quartet together indicate a CH₃CH₂– group. The singlet CH₃ has no
  neighbouring protons.
- **Assembly:** the CH₂ of the ethyl group is next to C=O; the singlet CH₃ is on oxygen. E is
  **CH₃CH₂COOCH₃, methyl propanoate**. Ethyl ethanoate is ruled out because its quartet would appear in the
  3.2–4.0 region.

## Worked example 2: deducing an arene

**Data.** Compound **F**, C₈H₁₀: δ 1.2 (triplet, 3H), δ 2.6 (quartet, 2H), δ 7.2 (multiplet, 5H).

- Five protons in the 6.0–9.0 region means a benzene ring with **one** substituent, C₆H₅–.
- The quartet in the 2.3–3.0 region is a CH₂ bonded to the ring with three neighbouring protons.
- The triplet is a CH₃ next to that CH₂.
- F is **ethylbenzene, C₆H₅CH₂CH₃**.

Compare 1,4-dimethylbenzene, also C₈H₁₀: it would give only **two singlets**, one for the six equivalent CH₃
protons in 2.3–3.0 and one for the four ring protons, area ratio 6 : 4 = 3 : 2. No triplet or quartet is
possible because no CH₃ is next to a carbon bearing hydrogens.

## Practical points: TMS, CDCl₃ and D₂O

**TMS** is added as the reference, defined as δ = 0; every shift you read is measured from its single peak.

**Deuterated solvents** such as CDCl₃ are needed because a solvent containing ¹H would give a very large
signal that hides the sample's peaks. Deuterium does not give a signal in a proton spectrum.

**D₂O exchange** in practice: record the spectrum, add a little D₂O, shake and record it again. O–H and N–H
protons exchange for deuterium, so their signal **disappears**; C–H signals are unchanged. Propan-1-ol,
CH₃CH₂CH₂OH, shows a triplet (CH₃, area 3), a multiplet (middle CH₂, area 2), a triplet in 3.2–4.0 (CH₂O,
area 2) and a broad singlet (OH, area 1). Only the broad singlet vanishes. Its isomer methoxyethane,
CH₃OCH₂CH₃, shows no change on adding D₂O, because it has no O–H proton.

## Common mistakes

- **Naming the number of neighbours instead of the pattern.** Write "triplet", not "two neighbouring
  protons", when the question asks for the splitting pattern.
- **Applying n + 1 to one side only**, for example calling the middle CH₂ of 1-chloropropane a triplet. It
  has five neighbouring protons and is a multiplet.
- **Splitting a singlet that is cut off by O or C=O**, such as the CH₃ of an ethanoate or a methyl ester.
- **Using only the splitting** to tell esters apart. Isomers such as methyl propanoate and ethyl ethanoate need
  the shift of the quartet.
- **Forgetting to scale the integration ratio** to match the molecular formula.
- **Describing the D₂O test without the observation.** Say which peak disappears and why.

## Exam technique for 9701 command words

**Predict** a spectrum: give, for each environment, the δ region from the table, the relative area and the
splitting pattern, preferably as a table.

**Deduce** a structure: write one line of evidence for each feature (shift, area, splitting), then the
structure. Examiners credit the reasoning steps.

**Describe** the D₂O test: include what is done, what is seen and why.

**State** the need for a deuterated solvent: one clear reason is enough, linked to the solvent's own ¹H
signal.

## Related resources

- [Carbon-13 NMR spectroscopy study guide](/resources/cambridge-a-level-chemistry-9701-a-carbon-13-nmr-spectroscopy/) — subtopic 37.3
- [Analytical Techniques: IR and Mass Spectrometry](/resources/as-analytical-techniques-ir-and-mass-spectrometry/) — molecular formula and functional-group evidence used with NMR
- [NMR Spectroscopy revision notes](/resources/a-chemistry-nmr-revision-notes/) — the combined summary of both NMR subtopics

Written against Cambridge International AS & A Level Chemistry 9701, 2025–2027 series. Always check the
current syllabus for your examination year.
