---
title: "Cambridge A Level Chemistry (9701): Gas/liquid chromatography"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Analytical techniques"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
stage: "A"
order: 37.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-analytical-techniques"
    subtopic: "a-gas-liquid-chromatography"
description: "Gas/liquid chromatography phases, retention time, percentage composition from peak areas and explaining retention times, for Cambridge 9701."
author: "marlbridge-academic-team"
reviewer: "farhat-ul-ain-sehgal"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to farhat-ul-ain-sehgal (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **37.2, Gas/liquid chromatography**, from Topic 37, Analytical techniques,
of Cambridge International AS & A Level Chemistry 9701, 2025–2027 series. It is A Level content. The
broader [Chromatography: Thin-Layer and Gas/Liquid study guide](/resources/a-chromatography-tlc-and-glc/)
gives the definitions and one percentage calculation; this page adds peak areas from peak dimensions,
the conditions that change retention times, and a method for explaining the order in which components
leave the column.

## What the syllabus asks for

Subtopic 37.2 has three learning outcomes:

1. describe and understand the terms: "stationary phase; a high boiling point non-polar liquid (on a
   solid support)"; "mobile phase; an unreactive gas"; "retention time"
2. "interpret gas / liquid chromatograms in terms of the percentage composition of a mixture"
3. "explain retention times in terms of interaction with the stationary phase"

## How the technique works

- A small sample of the mixture is **injected** into a heated port, where it vaporises.
- An **unreactive carrier gas** (the **mobile phase**), such as nitrogen or helium, sweeps the vapour
  into a long, thin **column** inside an oven.
- The column holds the **stationary phase**: a **non-polar liquid with a high boiling point**, coated
  on an inert **solid support**. Its high boiling point means it stays liquid in the oven and is not
  carried away by the gas.
- Each component is shared between the moving gas and the stationary liquid. Components that spend
  more time dissolved in the liquid move through the column more slowly.
- A **detector** at the far end records each component as it leaves, producing a **chromatogram**:
  detector response plotted against time.

The carrier gas must be **unreactive** so that it does not react with the sample or the stationary
phase, and so that the components reach the detector unchanged.

## Retention time

**Retention time** is the time between injecting the sample and the component reaching the detector,
read at the **maximum** of its peak.

Retention time is characteristic of a compound only under fixed conditions. It changes with:

- the **column temperature** (higher temperature → components spend more time as vapour → shorter
  retention times);
- the **flow rate** of the carrier gas (faster flow → shorter retention times);
- the **length** of the column and the **nature of the stationary phase**.

So to identify a component, compare its retention time with that of a known pure compound run on the
**same instrument under the same conditions**.

## Percentage composition from peak areas

The **area under each peak** is proportional to the amount of that component. So:

    percentage of component X = (area of peak X ÷ total area of all peaks) × 100

**Finding areas.** Exam chromatograms often show peaks as triangles or near-triangles. Then:

    area of a triangular peak = ½ × base width × height

If all peaks have the same width, the heights alone can be compared, but check the widths before
using that short cut.

**An assumption.** The calculation treats the detector as responding equally to every component. In
9701 questions you take the peak-area percentage as the percentage composition of the mixture.

## Explaining retention times

The syllabus asks you to explain retention times "in terms of interaction with the stationary phase".
The stationary phase is a **non-polar** liquid, so the main attractions between it and a component
are **instantaneous dipole–induced dipole** forces.

- **Stronger interaction with the stationary phase** (the component dissolves well in it) → the
  component spends more time in the liquid → **longer** retention time.
- **Weaker interaction** → more time in the gas → **shorter** retention time.

Instantaneous dipole–induced dipole forces are stronger for molecules with **more electrons** and
**larger surface area**. That gives three reliable patterns:

1. **Homologous series:** retention time increases with chain length (pentane < hexane < heptane).
2. **Branching:** a branched isomer has a smaller surface area for contact, interacts less, and
   usually comes out **before** its straight-chain isomer.
3. **Volatility link:** compounds with stronger intermolecular forces usually have higher boiling
   points as well, so on a non-polar column components often leave in order of increasing boiling
   point. Use this as supporting evidence, but always state the interaction with the stationary phase.

## Worked example 1: percentage composition from triangular peaks

**Question.** A chromatogram of a three-component mixture shows triangular peaks.

| Peak | Base width / min | Height / arbitrary units |
|---|---|---|
| 1 | 0.40 | 5.0 |
| 2 | 0.60 | 8.0 |
| 3 | 0.50 | 3.2 |

Calculate the percentage of each component.

**Answer.**

- Areas: peak 1 = ½ × 0.40 × 5.0 = 1.0; peak 2 = ½ × 0.60 × 8.0 = 2.4; peak 3 = ½ × 0.50 × 3.2 = 0.80
- Total area = 1.0 + 2.4 + 0.80 = 4.2
- Peak 1: 1.0 / 4.2 × 100 = **23.8%**; peak 2: 2.4 / 4.2 × 100 = **57.1%**; peak 3: 0.80 / 4.2 ×
  100 = **19.0%**

*Examiner's note:* comparing heights alone would give 5.0 : 8.0 : 3.2 and the wrong answer, because
the peaks have different widths. The percentages sum to 99.9% only because of rounding.

## Worked example 2: explaining an order of retention times

**Question.** A mixture of hexane, heptane and 2-methylpentane is analysed on a non-polar column.
Predict the order in which they reach the detector and explain it.

**Answer.** Order: **2-methylpentane, then hexane, then heptane.**

- Heptane has the most electrons, so it has the strongest instantaneous dipole–induced dipole
  attractions to the non-polar stationary phase. It dissolves best, spends most time in the liquid and
  has the longest retention time.
- Hexane and 2-methylpentane have the same number of electrons, but 2-methylpentane is branched, so it
  has less surface contact with the stationary phase. Its attractions are weaker and it leaves first.

## Worked example 3: interpreting a chromatogram with a reference

**Question.** A sample gives peaks at 2.1, 3.4 and 5.8 minutes. A pure sample of ethyl ethanoate, run
on the same instrument under the same conditions, gives a peak at 3.4 minutes. What can be concluded?

**Answer.** The sample probably contains ethyl ethanoate, which gave the peak at 3.4 minutes. There are
at least three components. To be more confident, the retention time could be compared again under a
second set of conditions (for example a different column temperature), in which a match should still
be found.

## Common mistakes

- Calling the stationary phase a solid. In GLC it is a **liquid** on a solid support.
- Saying the carrier gas "reacts with" or "dissolves" the sample. It is **unreactive** and simply
  carries the vapour.
- Comparing **heights** instead of **areas** when peaks have different widths.
- Measuring retention time to the start of a peak instead of its maximum.
- Explaining retention time only by boiling point without mentioning the **stationary phase**.
- Comparing retention times from different instruments or conditions.

## Exam technique for the command words

- **Describe** the terms: give the syllabus phrase and an example (nitrogen or helium; a non-polar
  liquid of high boiling point on a solid support).
- **Interpret** a chromatogram: identify peaks by retention time, then calculate areas and
  percentages, showing each area.
- **Calculate:** write each area, the total, and each percentage, to three significant figures where
  the data allow.
- **Explain** retention times: name the intermolecular force with the stationary phase, say which
  component interacts more strongly, and link that to a longer time.

## Next steps

Condense this page with the [Gas/liquid chromatography revision notes](/resources/cambridge-a-level-chemistry-9701-a-gas-liquid-chromatography-revision-notes/),
then test yourself with the [Gas/liquid chromatography practice questions](/resources/cambridge-a-level-chemistry-9701-a-gas-liquid-chromatography-practice/).
For the other chromatography technique in Topic 37, see the
[Thin-layer chromatography study guide](/resources/cambridge-a-level-chemistry-9701-a-thin-layer-chromatography/).

Written against Cambridge International AS & A Level Chemistry 9701, 2025–2027 series. Always check
the current syllabus for your examination year.
