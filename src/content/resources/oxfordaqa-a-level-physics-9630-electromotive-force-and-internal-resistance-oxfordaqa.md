---
title: "OxfordAQA A-Level Physics (9630): Electromotive force and internal resistance"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.4 – Electricity"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "AS"
order: 4.6
syllabusTopics:
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "electromotive-force-and-internal-resistance-oxfordaqa"
description: "Study guide to OxfordAQA 9630 section 3.4.6: emf, terminal pd and lost volts, internal resistance calculations, cell combinations and Required practical 3."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.4.6, Electromotive force and internal resistance, the last part of Section 3.4 Electricity. It is shared International AS and A-level content. Sections 3.4.4 to 3.4.6 are taught together in the [DC circuits, potential dividers, emf and internal resistance study guide](/resources/oxfordaqa-a-level-physics-dc-circuits-potential-dividers-emf-and-internal/). After this page, condense it with the [emf and internal resistance revision notes](/resources/oxfordaqa-a-level-physics-9630-electromotive-force-and-internal-resistance-oxfordaqa-revision-notes/) and test yourself with the [emf and internal resistance practice questions](/resources/oxfordaqa-a-level-physics-9630-electromotive-force-and-internal-resistance-oxfordaqa-practice/).

## What the specification asks for

| Statement in 3.4.6 | What you must be able to do |
|---|---|
| emf: ε = E/Q | Define emf as energy transferred per unit charge by the source |
| ε = I(R + r) | Use the equation for a source with internal resistance |
| Effect of internal resistance on terminal pd | Explain why terminal pd falls as current rises |
| Calculations for circuits in which the internal resistance is not negligible | Solve circuit problems including r |
| Required practical 3 | Investigate emf and internal resistance from the variation of terminal pd with current |

## Emf and pd: two different energy transfers

The **emf** ε of a source is the energy transferred to electrical energy per unit charge passing through the source: ε = E/Q. Chemical energy in a cell, for example, is transferred to the charges.

The **pd** across a component is the energy transferred from electrical energy to other forms per unit charge passing through it.

Both are measured in volts (J C⁻¹), but they describe transfers in opposite directions. An emf belongs to a source; a pd belongs to anything charge passes through, including the source's own internal resistance.

## Internal resistance and lost volts

Real sources have **internal resistance** r: the charges are slowed by the materials inside the cell, so some of the energy given to them is transferred to heating inside the cell before they leave it. For a current I:

- energy per coulomb given by the source: ε
- energy per coulomb transferred inside the source (the **lost volts**): Ir
- energy per coulomb delivered to the external circuit (the **terminal pd**): V = IR

Conservation of energy for each coulomb gives

ε = IR + Ir = I(R + r), equivalently V = ε − Ir.

Consequences:

- With no current (open circuit), Ir = 0 and the terminal pd equals the emf. An ideal voltmeter across an isolated cell reads its emf.
- The larger the current, the larger the lost volts and the smaller the terminal pd.
- The largest possible current flows when the terminals are joined by a wire of negligible resistance: I = ε/r, the short-circuit current.

### Worked example 1: starting a car

A car battery has emf 12.6 V and internal resistance 0.020 Ω. The starter motor draws 150 A. Find the terminal pd and explain why the headlamps dim while the engine is being started.

Lost volts = Ir = 150 × 0.020 = 3.0 V.

Terminal pd = 12.6 − 3.0 = **9.6 V**.

The headlamps are connected across the same terminals, so their pd falls from nearly 12.6 V to 9.6 V while the motor runs. The power in the battery's internal resistance is I²r = 150² × 0.020 = 450 W, which is why the battery warms when a large current is drawn for long.

This also shows why a car battery must have a very small internal resistance: a cell with r = 1 Ω could never supply 150 A.

### Worked example 2: two readings, two unknowns

A cell is connected first to a 4.0 Ω resistor, giving a terminal pd of 1.20 V, then to a 9.0 Ω resistor, giving 1.35 V. Find ε and r.

Currents: I₁ = 1.20 / 4.0 = 0.30 A; I₂ = 1.35 / 9.0 = 0.15 A.

ε = V + Ir for each: ε = 1.20 + 0.30r and ε = 1.35 + 0.15r.

Subtracting: 0 = −0.15 + 0.15r, so r = **1.0 Ω** and ε = 1.20 + 0.30 = **1.50 V**.

## Power in a circuit with internal resistance

Multiplying ε = IR + Ir by I gives

εI = I²R + I²r

The power supplied by the source (εI) equals the power delivered to the external circuit plus the power wasted in the source. The fraction delivered usefully is R / (R + r), so a source works most efficiently when the external resistance is much larger than r.

## Cells in combination

| Arrangement | Total emf | Total internal resistance |
|---|---|---|
| n identical cells in series | nε | nr |
| n identical cells in parallel | ε | r/n |

In series, both the emfs and the internal resistances add, because the charge passes through every cell. In parallel, the charge splits between the cells, so the internal resistances combine like parallel resistors while the emf stays the same. A parallel arrangement therefore delivers a larger current with less lost volts.

## When a high internal resistance is useful

Most sources are designed for low internal resistance. High-voltage laboratory supplies (EHT supplies) are deliberately given a very large internal resistance, so that if someone touches the terminals the short-circuit current ε/r is too small to be dangerous.

## Required practical 3: emf and internal resistance

The specification describes this as "Investigation of the emf and internal resistance of electric cells and batteries by measuring the variation of the terminal pd of a cell or battery with current".

**Method**

1. Connect the cell in series with an ammeter, a variable resistor and a switch; connect a voltmeter directly across the cell's terminals.
2. Set the variable resistor, close the switch, record I and V, then open the switch.
3. Repeat for a range of resistances. Keep each reading brief and switch off between readings, because a current warms the cell and changes its internal resistance, and also runs it down so its emf falls.
4. A small fixed resistor in series prevents a very large current if the variable resistor is set to zero.

**Analysis 1: V against I.** V = −rI + ε is a straight line: gradient −r, intercept ε on the V axis.

**Analysis 2: R against 1/I.** Rearranging ε = I(R + r) gives R = ε(1/I) − r. A graph of external resistance R against 1/I is a straight line with gradient ε and intercept −r on the R axis. This is useful when the resistances are known accurately (for example, a resistance box) and only an ammeter is used.

### Worked example 3: the second analysis

Readings with a resistance box:

| R / Ω | 1.0 | 2.0 | 4.0 | 6.0 | 10.0 |
|---|---|---|---|---|---|
| I / A | 2.00 | 1.50 | 1.00 | 0.75 | 0.50 |
| 1/I / A⁻¹ | 0.50 | 0.67 | 1.00 | 1.33 | 2.00 |

Gradient from (0.50, 1.0) to (2.00, 10.0) = 9.0 / 1.50 = **6.0 V**, which is ε.

Intercept: R = 6.0 × (1/I) − r, and at 1/I = 0.50, R = 1.0, so r = 3.0 − 1.0 = **2.0 Ω**.

## Common mistakes

- Defining emf as "the voltage of a battery" or as a force.
- Using ε = IR, forgetting the internal resistance.
- Saying the terminal pd equals the emf whenever a voltmeter is used: only when no current flows.
- Reading the gradient of a V-I graph as +r, or reading ε from the I axis intercept.
- Adding internal resistances for cells in parallel.
- Keeping the current flowing between readings in the practical.

## Exam technique

- **Define** emf: energy transferred to electrical energy per unit charge by the source.
- **Explain** a falling terminal pd: larger current → larger Ir (lost volts) → smaller V = ε − Ir.
- **Calculate**: write ε = I(R + r) first; for two unknowns, write two equations and subtract.
- **Describe** Required practical 3: circuit, range of currents, switching off between readings, graph and what the gradient and intercept give.
- **Evaluate**: identify sources of error (cell warming, emf falling as the cell runs down, meter resolution) and how the method controls them.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.4.6 Electromotive force and internal resistance, published by OxfordAQA.
