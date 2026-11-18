---
title: "Cambridge A Level Chemistry (9701): Carbon-13 NMR spectroscopy"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Analytical techniques"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
stage: "A"
order: 37.3
syllabusTopics:
  - qualification: "a-level"
    topic: "a-analytical-techniques"
    subtopic: "a-carbon-13-nmr-spectroscopy"
description: "Carbon-13 NMR for Cambridge 9701: counting carbon environments with symmetry, reading the 13C shift table and narrowing an unknown down to possible structures."
author: "marlbridge-academic-team"
reviewer: "farhat-ul-ain-sehgal"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to farhat-ul-ain-sehgal (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **37.3, Carbon-13 NMR spectroscopy**, from Topic 37, Analytical techniques, of
Cambridge International AS & A Level Chemistry 9701, 2025–2027 series. It is A Level content. The syllabus
asks you to "analyse and interpret a carbon-13 NMR spectrum of a simple molecule to deduce (a) the
different environments of the carbon atoms present (b) the possible structures for the molecule", and to
"predict or explain the number of peaks in a carbon-13 NMR spectrum for a given molecule".

The overview page [NMR Spectroscopy: Carbon-13 and Proton NMR](/resources/a-nmr-spectroscopy-carbon-13-and-proton-nmr/)
introduces both NMR subtopics side by side. This page stays with carbon-13 and goes further: a reliable
method for counting environments in rings and branched chains, how to use the carbon-13 shift table printed
in the syllabus data section, and how to turn a spectrum into a short list of candidate structures. When you
have worked through it, use the [carbon-13 NMR revision notes](/resources/cambridge-a-level-chemistry-9701-a-carbon-13-nmr-spectroscopy-revision-notes/)
and test yourself with the [carbon-13 NMR practice questions](/resources/cambridge-a-level-chemistry-9701-a-carbon-13-nmr-spectroscopy-practice/).

## What a carbon-13 spectrum shows you

A carbon-13 spectrum is a set of lines plotted against **chemical shift, δ, in ppm**, measured relative to
tetramethylsilane (TMS) at δ = 0. The δ scale increases from right to left. For 9701 you read two things from
it:

- **How many peaks there are.** Each peak is one carbon environment, so the count tells you how many
  non-equivalent carbon atoms the molecule contains.
- **Where each peak sits.** The δ value tells you what kind of environment that carbon is in: an alkyl
  carbon, a carbon bonded to oxygen, an alkene or arene carbon, a carbonyl carbon, and so on.

Two things that matter in proton NMR do not appear in the 37.3 outcomes. You are not asked to interpret
splitting in a carbon-13 spectrum, and you are not asked to use peak heights to count carbons. A tall peak
does not mean "more carbons" in a question on this subtopic; the evidence you are expected to use is the
number of peaks and their positions.

## Counting environments: a method that works every time

Most marks in this subtopic depend on counting environments correctly. Counting by eye works for chains of
three carbons; for rings and branched molecules, use a routine.

1. **Draw the full displayed or skeletal structure.** Do not work from a condensed formula such as
   C₆H₄Cl₂, which hides where the substituents are.
2. **Look for symmetry.** Ask whether a mirror plane or a rotation would carry one carbon onto another.
   Carbons that swap places under a symmetry operation are equivalent.
3. **Label each carbon with a letter**, giving equivalent carbons the same letter.
4. **Count the letters.** That number is the number of peaks.

A useful check: for each carbon, list what it is bonded to all the way along the chain or round the ring.
If two carbons have identical lists in both directions, they are equivalent.

### Chains and branches

| Molecule | Structure | Environments | Peaks |
|---|---|---|---|
| butanone | CH₃COCH₂CH₃ | all four carbons differ | 4 |
| pentan-3-one | CH₃CH₂COCH₂CH₃ | C=O; two equivalent CH₂; two equivalent CH₃ | 3 |
| 2-methylpropanal | (CH₃)₂CHCHO | two equivalent CH₃; CH; CHO | 3 |
| 2-methylpropan-2-ol | (CH₃)₃COH | three equivalent CH₃; the central C | 2 |
| cyclohexanone | six-membered ring with one C=O | C=O; the two carbons next to it; the next two; the carbon opposite | 4 |

In cyclohexanone, a mirror plane through the C=O carbon and the carbon opposite pairs up the other four
ring carbons, leaving four environments.

### Benzene rings

Substituted benzene rings are the most common source of lost marks, because the answer depends entirely on
where the substituents sit.

- **Methylbenzene:** the CH₃ carbon, the ring carbon carrying it, the two carbons next to that, the two
  beyond those, and the single carbon opposite. **5 peaks.**
- **1,2-dichlorobenzene:** a mirror plane between the two C–Cl carbons makes them equivalent, and pairs the
  remaining four ring carbons into two sets. **3 peaks.**
- **1,3-dichlorobenzene:** the mirror plane passes through carbon 2 (between the chlorines) and carbon 5.
  The two C–Cl carbons are equivalent and carbons 4 and 6 are equivalent, but carbons 2 and 5 are each on
  their own. **4 peaks.**
- **1,4-dichlorobenzene:** two C–Cl carbons that are equivalent, and four C–H carbons that are all
  equivalent. **2 peaks.**

So three isomers with the same formula, C₆H₄Cl₂, give 3, 4 and 2 peaks. A question that gives you a
carbon-13 spectrum with four peaks in the arene region is pointing you at the 1,3-isomer.

## Using the carbon-13 shift table

The 9701 syllabus data section includes a table of **typical carbon-13 chemical shift values relative to
TMS = 0**, and you use it in the examination rather than learning it. It groups carbons by hybridisation
and neighbours:

| Hybridisation | Environment | Example | δ / ppm |
|---|---|---|---|
| sp³ | alkyl | CH₃–, CH₂–, –CH<, >C< | 0–50 |
| sp³ | next to alkene/arene | –C–C=C, –C–Ar | 25–50 |
| sp³ | next to carbonyl/carboxyl | C–COR, C–O₂R | 30–65 |
| sp³ | next to halogen | C–X | 30–60 |
| sp³ | next to oxygen | C–O | 50–70 |
| sp² | alkene or arene | >C=C<, ring carbons | 110–160 |
| sp² | carboxyl | R–COOH, R–COOR | 160–185 |
| sp² | carbonyl | R–CHO, R–CO–R | 190–220 |
| sp | nitrile | R–C≡N | 100–125 |

Three habits make the table work for you.

**Read the "environment" column as the carbon's own position.** "Next to oxygen" means the carbon atom itself
is bonded to an oxygen atom, as in the CH₂ of CH₃CH₂OH, not a carbon two bonds away.

**Separate the two C=O regions.** Aldehydes and ketones appear at 190–220. Carboxylic acids and esters
appear lower, at 160–185. One peak can therefore tell you whether a C=O group is in a ketone/aldehyde or in an
acid/ester, which IR alone cannot do reliably because the absorption ranges for these groups overlap.

**Expect overlaps and use them honestly.** The sp³ ranges overlap: a peak at 55 ppm could be a carbon bonded
to oxygen, to a halogen or next to a carbonyl group. Nitrile carbons (100–125) overlap the low end of the
alkene/arene range. When a peak falls in an overlap, use the molecular formula to rule options out: no
halogen in the formula means no C–X carbon.

## Worked example 1: from spectrum to possible structures

**Data.** Compound **A**, C₃H₆O₂, gives three peaks: one in the 160–185 region, one in the 50–70 region and
one below 50.

**Step 1 – count.** Three peaks and three carbons, so every carbon is in a different environment; there is no
symmetry.

**Step 2 – assign regions.** The 160–185 peak is a **carboxyl or ester carbon**, not a ketone or aldehyde
(those would be 190–220). The 50–70 peak is an **sp³ carbon bonded to oxygen**. The peak below 50 is an
**alkyl carbon**.

**Step 3 – test candidates with this formula.**

- Propanoic acid, CH₃CH₂COOH: has a carboxyl carbon but **no sp³ carbon bonded to oxygen**; its other two
  carbons are both alkyl. It does not fit.
- Methyl ethanoate, CH₃COOCH₃: ester carbon (160–185), O–CH₃ (50–70), CH₃ attached to C=O (alkyl region).
  It fits.
- Ethyl methanoate, HCOOCH₂CH₃: ester carbon (160–185), O–CH₂ (50–70), CH₃ (alkyl region). It fits.
- 1-hydroxypropanone, CH₃COCH₂OH: three environments, but its C=O is a **ketone** carbon, which would appear
  at 190–220. It does not fit.

**Conclusion.** A is an ester: methyl ethanoate or ethyl methanoate. The carbon-13 spectrum cannot choose
between them, and that is an acceptable answer to "deduce the possible structures". Proton NMR would settle
it, because the two esters give different splitting patterns.

## Worked example 2: when two structures give the same count

**Data.** Compound **B**, C₄H₁₀O, gives **two** peaks: one in the 50–70 region and one below 50.

Two peaks for four carbons means heavy symmetry. Check the C₄H₁₀O isomers:

| Isomer | Peaks |
|---|---|
| butan-1-ol | 4 |
| butan-2-ol | 4 |
| 2-methylpropan-1-ol | 3 |
| 2-methylpropan-2-ol | 2 |
| ethoxyethane | 2 |
| 1-methoxypropane | 4 |
| 2-methoxypropane | 3 |

Two candidates remain. **2-methylpropan-2-ol** has one carbon bonded to oxygen and three equivalent CH₃
carbons. **Ethoxyethane** has two equivalent CH₂ carbons bonded to oxygen and two equivalent CH₃ carbons. Both
match the data. To finish the identification you would use IR (only the alcohol shows a broad O–H
absorption) or the D₂O exchange test in proton NMR.

## Common mistakes

- **Counting carbons instead of environments**, especially in rings: methylbenzene has seven carbons but
  five peaks.
- **Treating all disubstituted benzenes alike.** The 1,2-, 1,3- and 1,4-isomers give different counts; work
  each one out from a drawing.
- **Placing ester and acid carbonyl carbons in the 190–220 region.** That region is for aldehydes and
  ketones only.
- **Reading "next to oxygen" too loosely**, so that every carbon in an alcohol is assigned to 50–70. Only the
  carbon directly bonded to O belongs there.
- **Giving one structure when the data fit two.** If the question says "possible structures", list every
  candidate the data allow and say which extra evidence would decide.
- **Ignoring the molecular formula.** It removes impossible assignments, such as a C–X carbon in a compound
  with no halogen.

## Exam technique for 9701 command words

**Predict** (for example, "Predict the number of peaks…"): give the number, then a brief reason that names
the equivalent carbons. "Four peaks; the two CH₃ groups are equivalent" earns more credit than "four".

**Explain** (for example, "Explain why X gives fewer peaks than Y"): make the symmetry argument explicit. Say
which carbons are equivalent and why, using the molecule's mirror plane or the identical groups attached.

**Deduce**: show the chain of evidence. State what the peak count tells you, assign each peak to a region of
the table, then eliminate candidates. Marks are given for the reasoning steps as well as the final
structure.

**Suggest**: you are expected to apply your knowledge to an unfamiliar molecule, and more than one answer may
be credited. Give a structure that fits every piece of data, not just the peak count.

## Related resources

- [Proton (¹H) NMR spectroscopy study guide](/resources/cambridge-a-level-chemistry-9701-a-proton-1h-nmr-spectroscopy/)
  — the companion subtopic, 37.4
- [Analytical Techniques: IR and Mass Spectrometry](/resources/as-analytical-techniques-ir-and-mass-spectrometry/)
  — the evidence most often combined with a carbon-13 spectrum
- [Chromatography: Thin-Layer and Gas/Liquid Chromatography](/resources/a-chromatography-tlc-and-glc/)
  — subtopics 37.1 and 37.2

Written against Cambridge International AS & A Level Chemistry 9701, 2025–2027 series. Always check the
current syllabus for your examination year.
