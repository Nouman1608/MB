---
title: "OxfordAQA A-Level Physics (9630): Circuits -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA 9630 section 3.4.4: series and parallel rules, power equations, cells and conservation laws, with a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 3.4.4, Circuits, of OxfordAQA International AS and A-level Physics (9630), shared International AS and A-level content. For full explanations and worked examples, read the [circuits study guide](/resources/oxfordaqa-a-level-physics-9630-circuits-oxfordaqa-alevel/), then test yourself with the [circuits practice questions](/resources/oxfordaqa-a-level-physics-9630-circuits-oxfordaqa-alevel-practice/). Sections 3.4.4 to 3.4.6 are summarised together in the [DC circuits, potential dividers, emf and internal resistance revision notes](/resources/oxfordaqa-a-level-physics-dc-circuits-potential-dividers-emf-and-internal-revision-notes/).

## Series and parallel at a glance

| | Series | Parallel |
|---|---|---|
| Current | Same through each | Splits; branch currents add |
| pd | Shared; pds add | Same across each branch |
| Resistance | R_T = R₁ + R₂ + … | 1/R_T = 1/R₁ + 1/R₂ + … |
| Combined value | Bigger than the largest | Smaller than the smallest |
| Larger resistor gets | Larger pd and power | Smaller current and power |

Shortcuts: two in parallel, R_T = R₁R₂/(R₁ + R₂); n equal resistors R in parallel, R/n.

## Power and energy

| Equation | Use when |
|---|---|
| E = IVt | Energy over a time (t in seconds) |
| P = IV | Current and pd known |
| P = I²R | Same current (series) |
| P = V²/R | Same pd (parallel) |

Rated values: a component rated V_rated, P_rated has R = V_rated² / P_rated (assuming constant R).

## Conservation laws

| Law | Statement | Use |
|---|---|---|
| Charge | Current into a junction = current out | Missing branch currents |
| Energy | Sum of emfs = sum of pds round any loop | Missing pds; parallel branches share a pd |

## Cells

| Arrangement | Total emf | Note |
|---|---|---|
| n cells in series, same direction | Sum of emfs | |
| One cell reversed in a series chain | Subtract its emf | |
| n identical cells in parallel | Same as one cell | Each supplies 1/n of the current |

## Network method

1. Combine the innermost group; redraw.
2. Find the total resistance and supply current.
3. Work outwards: V = IR for series parts; shared pd for parallel parts.
4. Check junction currents and loop pds.

## Key terms

| Term | Meaning |
|---|---|
| Junction | Point where three or more wires meet |
| Branch | Path between two junctions |
| Power | Rate of energy transfer, P = E/t (W) |
| Rating | pd and power at which a component is designed to operate |

## Worked reminder

A 12 V supply drives a 4.0 Ω resistor in series with a 6.0 Ω and a 3.0 Ω resistor in parallel.

1. Parallel pair: 6.0 × 3.0 / 9.0 = 2.0 Ω. Total 6.0 Ω.
2. Supply current = 12 / 6.0 = 2.0 A.
3. pd across 4.0 Ω = 8.0 V, so 4.0 V across the pair.
4. Currents: 4.0 / 6.0 = 0.67 A and 4.0 / 3.0 = 1.33 A, adding to 2.0 A.
5. Power in the 4.0 Ω resistor = I²R = 2.0² × 4.0 = 16 W.

## Reasoning about changes

Follow the chain: total resistance → supply current → pds → branch currents.

- **Add a resistor in parallel** (with another resistor in series with the parallel section): total resistance falls, supply current rises, the pd across the series resistor rises, so the pd across the parallel section falls.
- **Remove a parallel branch (or a lamp in it fails):** total resistance rises, supply current falls, and the remaining branch gets a larger share of the supply pd.
- **A lamp in a series chain fails:** the loop is broken, so the current everywhere in that loop becomes zero.
- **Add a resistor in series:** total resistance rises and the current falls everywhere in that loop.

## Exam traps

- Reciprocal not taken at the end of a parallel calculation.
- Supply pd used across one of several series components.
- Wrong current put into I²R for a parallel branch.
- Emfs added for cells in parallel.
- Time in minutes or hours in E = IVt.
- Assuming the higher-rated lamp is always brighter.
- A negative current treated as an error rather than a reversed direction.

## Quick self-test

1. Find the combined resistance of 6.0 Ω and 3.0 Ω in parallel.
2. Find the combined resistance of three 10 Ω resistors in parallel.
3. State the law that gives the current in a wire leaving a junction.
4. A 36 V supply is connected across a 12 Ω resistor. Find the current.
5. A current of 2.0 A flows through a 5.0 Ω resistor. Find the power.
6. A 27 Ω resistor has 9.0 V across it. Find the power.
7. A 12 V heater draws 1.5 A for 10 minutes. Find the energy transferred.
8. What is the total emf of five 1.5 V cells in series if one is reversed?
9. What is the emf of three identical 2.0 V cells in parallel?
10. Two resistors in series carry 0.50 A, with 3.0 V and 4.5 V across them. Find the supply pd and the total resistance.
11. Currents of 1.2 A and 0.30 A enter a junction and 0.80 A leaves along one wire. Find the current in the third wire leaving.
12. A lamp is rated 12 V, 24 W. Find its resistance at its rated pd.

### Answers

1. 6.0 × 3.0 / 9.0 = 2.0 Ω.
2. 10 / 3 = 3.3 Ω.
3. Conservation of charge: current in = current out.
4. I = 36 / 12 = 3.0 A.
5. P = I²R = 2.0² × 5.0 = 20 W.
6. P = V²/R = 9.0² / 27 = 3.0 W.
7. E = IVt = 1.5 × 12 × 600 = 1.08 × 10⁴ J.
8. 4 × 1.5 − 1.5 = 4.5 V.
9. 2.0 V.
10. 7.5 V; R = 7.5 / 0.50 = 15 Ω.
11. 1.5 − 0.80 = 0.70 A.
12. R = V²/P = 12² / 24 = 6.0 Ω.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.4.4 Circuits, published by OxfordAQA.
