---
title: "A Level Chemistry: Chromatography — Revision Notes"
resourceType: "revision-notes"
subject: "chemistry"
level: ["a-levels"]
topic: "Analytical techniques"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
order: 37.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-analytical-techniques"
    subtopic: "a-thin-layer-chromatography"
  - qualification: "a-level"
    topic: "a-analytical-techniques"
    subtopic: "a-gas-liquid-chromatography"
description: "Condensed recall notes on TLC, gas-liquid chromatography, Rf values, retention time and combined techniques for Cambridge A Level Chemistry 9701."
author: "nouman-ahmed"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Chromatography study guide](/resources/a-chromatography-tlc-and-glc/).

## The principle

All chromatography separates by the **relative affinity of components for two phases**:

- **Stationary phase** — does not move.
- **Mobile phase** — carries the sample through.

**A component with greater affinity for the stationary phase moves more slowly.** That single sentence explains every result in the topic, and every question reduces to applying it.

## Thin-layer chromatography (TLC)

**Stationary phase:** silica or alumina on a plate — **polar**.
**Mobile phase:** a solvent that rises by capillary action.

```
Rf = distance moved by spot / distance moved by solvent front
```

Rf is always between 0 and 1, and is **constant for a given substance under identical conditions** — same solvent, same stationary phase, same temperature. Comparing Rf values from different conditions is meaningless, which is why a known reference is run alongside.

**Because silica is polar, more polar components are retained more strongly and have lower Rf values.** Non-polar components travel further. This is really the balance of **two competing interactions**: how strongly the compound is adsorbed onto the stationary phase (stronger = lower Rf) versus how soluble it is in the mobile solvent (more soluble = higher Rf) — the overall Rf reflects which effect wins out for a given compound and solvent choice.

**Practical points that carry marks:**

- The baseline must be drawn in **pencil**, because ink would dissolve and travel with the solvent.
- The spot must start **above** the solvent level, or it would dissolve into the solvent reservoir instead of moving up the plate.
- Colourless spots are located under **UV light** or with a locating agent such as ninhydrin for amino acids.

**Limitation:** two different substances can coincidentally have the same Rf, so TLC alone cannot identify a compound with certainty — a known reference spot run alongside is what makes the comparison meaningful.

## Gas-liquid chromatography (GLC)

**Stationary phase:** a high-boiling liquid on an inert solid support.
**Mobile phase:** an inert **carrier gas** — nitrogen or helium.

The sample is vaporised and carried through a heated column.

**Retention time** — the time from injection to detection. It depends on **boiling point** and **solubility in the stationary phase**: components with lower boiling points and lower solubility travel faster and have shorter retention times.

**The peak area is proportional to the amount** of each component, so GLC is quantitative — a calibration is needed to convert areas into concentrations. Percentage composition = (area of one peak ÷ total area of all peaks) × 100%. **Worked example.** A three-component mixture gives peak areas of 15.0, 25.0 and 20.0 (arbitrary units) for A, B and C. Total area = 60.0, so percentage of A = (15.0 ÷ 60.0) × 100% = **25.0%**. Using peak *height* instead of area is a common error — a broader, shorter peak can represent the same amount as a narrower, taller one.

**Limitation:** the sample must be volatile and thermally stable, so GLC cannot be used for compounds that decompose on heating. And, as with TLC, two compounds can share a retention time, which is exactly the identification gap GC–MS closes.

## Combined techniques

**GC–MS** solves the identification problem. Gas chromatography **separates** the mixture; mass spectrometry then **identifies** each component from its fragmentation pattern and molecular ion.

This is why the combination is used in forensics, drug testing and environmental analysis — separation alone gives a retention time that is suggestive, while the mass spectrum gives an identification.

## Exam traps

- Comparing Rf values obtained under different conditions.
- Drawing the baseline in ink.
- Starting the spot below the solvent level.
- Saying a single Rf value proves identity.
- Forgetting that GLC requires a volatile, thermally stable sample.
- Confusing which phase moves.

## Self-test

1. What determines how fast a component moves in any chromatography?
2. Why must the TLC baseline be drawn in pencil and the spot placed above the solvent?
3. Why is an Rf value only comparable under identical conditions?
4. What does retention time depend on in GLC?
5. Why is GC–MS more useful than GLC alone?
6. A GLC trace gives peak areas of 10.0, 40.0 and 10.0 (arbitrary units) for X, Y and Z. Calculate the percentage composition of Y.
7. Why is Rf described as the balance of two competing interactions, rather than depending on the stationary phase alone?

**Answers:** 1. Its relative affinity for the stationary and mobile phases — greater affinity for the stationary phase means slower movement. 2. Ink would dissolve and travel with the solvent, contaminating the result; a spot below the solvent level would dissolve into the reservoir rather than moving up the plate. 3. Rf depends on the solvent, stationary phase and temperature, so a value obtained under different conditions is not comparable. 4. The component's boiling point and its solubility in the liquid stationary phase. 5. GLC only separates and gives retention times, which two compounds may share; the mass spectrometer then identifies each separated component from its fragmentation pattern. 6. Total area = 10.0 + 40.0 + 10.0 = 60.0; percentage of Y = (40.0 ÷ 60.0) × 100% = 66.7%. 7. A compound's overall Rf reflects both how strongly it's adsorbed onto the stationary phase (lower Rf) and how soluble it is in the mobile solvent (higher Rf) — the two effects can pull in opposite directions, so neither alone fully determines the result.
