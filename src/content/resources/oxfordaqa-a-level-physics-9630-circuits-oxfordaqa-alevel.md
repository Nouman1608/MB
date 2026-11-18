---
title: "OxfordAQA A-Level Physics (9630): Circuits"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.4 – Electricity"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "AS"
order: 4.4
syllabusTopics:
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "circuits-oxfordaqa-alevel"
description: "Study guide to OxfordAQA 9630 section 3.4.4: resistor networks, energy and power equations, cells in series and parallel, and conservation of charge and energy."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.4.4, Circuits, in Section 3.4 Electricity. It is shared International AS and A-level content. Sections 3.4.4 to 3.4.6 are taught together in the [DC circuits, potential dividers, emf and internal resistance study guide](/resources/oxfordaqa-a-level-physics-dc-circuits-potential-dividers-emf-and-internal/). After this page, condense it with the [circuits revision notes](/resources/oxfordaqa-a-level-physics-9630-circuits-oxfordaqa-alevel-revision-notes/) and test yourself with the [circuits practice questions](/resources/oxfordaqa-a-level-physics-9630-circuits-oxfordaqa-alevel-practice/).

Unless stated otherwise on this page, supplies have negligible internal resistance and meters are ideal. Internal resistance is the subject of section 3.4.6.

## What the specification asks for

| Statement in 3.4.4 | What you must be able to do |
|---|---|
| Resistors in series: R_T = R₁ + R₂ + R₃ + … | Combine series resistors |
| Resistors in parallel: 1/R_T = 1/R₁ + 1/R₂ + 1/R₃ + … | Combine parallel resistors |
| Energy and power: E = IVt; P = IV = I²R = V²/R | Choose and use the right form |
| Relationships between current, voltage and resistance in series and parallel circuits, including cells in series and identical cells in parallel | Analyse circuits and cell combinations |
| Conservation of charge and conservation of energy in dc circuits | Use both to find unknown currents and pds |

## The two conservation laws

Every rule for series and parallel circuits comes from two principles.

**Conservation of charge.** Charge is not created or destroyed, so at any junction the total current flowing in equals the total current flowing out. In a single loop the current is the same everywhere.

**Conservation of energy.** Round any closed loop, the energy given to each coulomb by the sources equals the energy each coulomb transfers in the components. In pd terms: the sum of the emfs equals the sum of the pds round the loop. Branches connected between the same two points therefore have the same pd.

### Why the resistor formulas work

- **Series:** the same current I flows through each resistor, and the pds add: V = IR₁ + IR₂ + IR₃. Dividing by I gives R_T = R₁ + R₂ + R₃.
- **Parallel:** the same pd V is across each resistor, and the currents add: I = V/R₁ + V/R₂ + V/R₃. Dividing by V gives 1/R_T = 1/R₁ + 1/R₂ + 1/R₃.

Two checks: a series combination is always larger than its largest resistor; a parallel combination is always smaller than its smallest. For two equal resistors R in parallel, R_T = R/2; for n equal resistors, R/n.

## Analysing a network

1. Combine the innermost series or parallel group first and redraw.
2. Repeat until one resistance remains; find the supply current.
3. Work back out, using V = IR on series parts and the shared pd on parallel parts.
4. Check that currents balance at each junction and pds add up round each loop.

### Worked example 1: a three-level network

A 24 V supply is connected to a 6.0 Ω resistor in series with a parallel pair. One branch of the pair is a 12 Ω resistor; the other is an 8.0 Ω and a 4.0 Ω resistor in series. Find every current and pd.

Branch with 8.0 Ω and 4.0 Ω: 12 Ω. Parallel pair: 12 Ω with 12 Ω gives 6.0 Ω.

Total: 6.0 + 6.0 = 12 Ω, so supply current = 24 / 12 = **2.0 A**.

pd across the 6.0 Ω resistor = 2.0 × 6.0 = 12 V, so the parallel pair has 24 − 12 = **12 V** across it.

12 Ω branch: 12 / 12 = **1.0 A**. Other branch: 12 / 12 = **1.0 A**, giving 8.0 V across the 8.0 Ω resistor and 4.0 V across the 4.0 Ω resistor.

Checks: 1.0 + 1.0 = 2.0 A at the junction; 12 + 8.0 + 4.0 = 24 V round the outer loop.

## Energy and power

E = IVt follows from W = QV and Q = It. Power is the rate of energy transfer, so P = E/t = IV. Substituting V = IR or I = V/R gives the other two forms:

| Form | Best when you know | Typical use |
|---|---|---|
| P = IV | Current and pd | Any component |
| P = I²R | Current and resistance | Series parts (same I) |
| P = V²/R | pd and resistance | Parallel parts (same V) |

### Worked example 2: which lamp is brighter?

Two lamps are rated 230 V, 60 W and 230 V, 100 W. Assume each keeps the resistance it has at its rated pd. They are connected in series across 230 V. Which is brighter?

R = V²/P: 60 W lamp, 230² / 60 = 882 Ω; 100 W lamp, 230² / 100 = 529 Ω.

Series current = 230 / (882 + 529) = 0.163 A.

P = I²R: 60 W lamp, 0.163² × 882 = **23 W**; 100 W lamp, 0.163² × 529 = **14 W**.

In series the 60 W lamp is brighter, because with the same current the larger resistance has the larger power. In parallel at 230 V each runs at its rating, so the 100 W lamp is brighter. The constant-resistance assumption is a simplification: a real filament is cooler and has lower resistance in the series circuit.

### Worked example 3: energy from a battery

A phone battery maintains a pd of 3.7 V while supplying 0.40 A for 2.5 hours. Find the energy transferred.

E = IVt = 0.40 × 3.7 × 2.5 × 3600 = **1.3 × 10⁴ J**.

## Cells in series and in parallel

**Cells in series.** The emfs add when the cells point the same way: four 1.5 V cells give 6.0 V. A cell connected the wrong way round subtracts its emf, so three forward and one reversed give 1.5 + 1.5 + 1.5 − 1.5 = 3.0 V. This follows from energy conservation round the loop.

**Identical cells in parallel.** The combination has the same emf as one cell: two 1.5 V cells in parallel give 1.5 V. Each cell supplies half the total current, so the combination can deliver the same current for longer, or a larger current with less strain on each cell. Only identical cells should be connected in parallel; otherwise current circulates between them. (How internal resistance changes in these combinations is covered in section 3.4.6.)

## Junction problems

### Worked example 4

At a junction, currents of 0.35 A and 0.20 A flow in, and a current of 0.15 A flows out along one wire. Find the current in the remaining wire.

Total in = 0.55 A. Out = 0.15 A + I. So I = **0.40 A**, flowing out.

If your answer is negative, the current flows in the opposite direction to the one you assumed; the magnitude is still correct.

## Common mistakes

- Adding parallel resistances directly, or forgetting to take the reciprocal at the end of 1/R_T.
- Using the supply pd across a resistor that shares the pd with others in series.
- Using P = I²R with the supply current for a component in a parallel branch.
- Thinking a larger power rating always means a brighter lamp, whatever the circuit.
- Adding the emfs of cells in parallel.
- Leaving time in hours in E = IVt.

## Exam technique

- **Calculate**: show each combined resistance on its own line; examiners award method marks for intermediate values.
- **Show that**: compute to an extra significant figure, then compare.
- **Explain** a reading (for example, why a meter reading changes when a switch closes): trace the change in total resistance → supply current → pds, in that order.
- **State** conservation laws precisely: charge at junctions; energy round loops.
- Sketch the redrawn circuit for complex networks; it prevents misreading which resistors share a current or a pd.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.4.4 Circuits, published by OxfordAQA.
