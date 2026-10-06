---
title: "AQA A-Level Chemistry: Electrode potentials and electrochemical cells (7405)"
seoTitle: "AQA A-Level Chemistry Electrode Potentials Guide (7405)"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Electrode potentials and electrochemical cells"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7405"]
syllabusSeries: "For teaching from September 2015"
order: 11
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "electrode-potentials-and-electrochemical-cells-7405"
description: "Study guide for AQA A-Level Chemistry 7405 section 3.1.11: cell notation, the hydrogen electrode, EMF, predicting redox and commercial cells."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide covers section 3.1.11, Electrode potentials and electrochemical cells, of the AQA AS and A-level Chemistry specification (7404/7405), version 1.2, July 2026, for AS and A-level exams from June 2016 onwards. The whole of 3.1.11 is marked "A-level only", so it is not part of AS. The specification lists it under A-level Paper 1, and Paper 3 can assess any content. Required practical 8, measuring the EMF of an electrochemical cell, belongs to this section.

Use it with the [revision notes](/resources/aqa-a-level-chemistry-electrode-potentials-and-electrochemical-cells-revision-notes/) and the [practice questions](/resources/aqa-a-level-chemistry-electrode-potentials-and-electrochemical-cells-practice/). This topic builds directly on [oxidation, reduction and redox equations](/resources/aqa-a-level-chemistry-oxidation-reduction-and-redox-equations/), so revise half-equations there first if they feel shaky. For the rest of the course, see the [AQA A-Level Chemistry hub](/boards/aqa/a-level/chemistry/) and the [printable checklist](/checklists/aqa/a-level/chemistry/). To find your weak spots quickly, try the [free diagnostics](/diagnostics/).

## What this section covers

| Spec section | What you must be able to do | Status |
|---|---|---|
| 3.1.11.1 | IUPAC half-equations; conventional cell representation | A-level only |
| 3.1.11.1 | Standard hydrogen electrode; why conditions matter (no Nernst equation); standard conditions; electrochemical series | A-level only |
| 3.1.11.1 | Predict the direction of redox reactions; calculate EMF | A-level only |
| 3.1.11.1 | Required practical 8: measuring the EMF of an electrochemical cell | A-level only |
| 3.1.11.2 | Non-rechargeable, rechargeable and fuel cells; lithium cell and alkaline hydrogen–oxygen fuel cell reactions | A-level only |
| 3.1.11.2 | Deduce reactions and EMF from given data; explain how a current is generated; benefits and risks | A-level only |

## What an electrochemical cell does

In an electrochemical cell, electrons pass from the reducing agent to the oxidising agent through an external wire instead of directly. This creates a potential difference that can drive a current.

A cell is two **half-cells**. One type is a metal in a solution of its own ions (Zn in Zn²⁺(aq)). When both species are in solution (Fe³⁺ and Fe²⁺), an inert **platinum** electrode carries the electrons. A **salt bridge** (often filter paper soaked in saturated potassium nitrate) lets ions move to balance charge, completing the circuit without mixing the solutions.

## Writing electrode half-equations: the IUPAC convention

Every electrode half-equation is written as a **reduction**, with the electrons on the left and a reversible arrow:

```
Zn²⁺(aq) + 2e⁻ ⇌ Zn(s)          E⦵ = −0.76 V
Cu²⁺(aq) + 2e⁻ ⇌ Cu(s)          E⦵ = +0.34 V
```

The E⦵ value belongs to the half-equation written this way round. A more positive value means the species on the left gains electrons more readily. A more negative value means the species on the right loses electrons more readily.

## Conventional representation of a cell

The cell is written as a single line:

```
Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)
```

- A single vertical line `|` marks a phase boundary.
- The double line `||` is the salt bridge.
- The **negative electrode** (where oxidation happens) goes on the left. The **positive electrode** (where reduction happens) goes on the right.
- Electrodes go on the outside. On each side, the species are ordered so that the change reads left to right across the line: on the left Zn → Zn²⁺ (oxidation); on the right Cu²⁺ → Cu (reduction).
- Where both species are in the same solution, separate them with a comma and put platinum on the outside: `Pt(s) | Fe²⁺(aq), Fe³⁺(aq) ||`.

**EMF = E⦵(right) − E⦵(left)**, which is the same as E⦵(positive electrode) − E⦵(negative electrode). Written correctly, a cell always has a positive EMF.

### Worked example 1: the zinc–copper cell

Use Zn²⁺/Zn E⦵ = −0.76 V and Cu²⁺/Cu E⦵ = +0.34 V.

1. The more negative electrode is zinc, so zinc is the negative electrode and goes on the left.
2. Zinc is oxidised: Zn → Zn²⁺ + 2e⁻. Copper ions are reduced: Cu²⁺ + 2e⁻ → Cu.
3. Representation: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)
4. EMF = +0.34 − (−0.76) = **+1.10 V**
5. Overall: Zn + Cu²⁺ → Zn²⁺ + Cu (electrons cancel, two each side).

## The standard hydrogen electrode and standard conditions

You can only measure a potential difference between two half-cells, so electrode potentials are measured against the **standard hydrogen electrode (SHE)**, given a potential of 0.00 V.

The SHE is:

- hydrogen gas at 100 kPa bubbled over a platinum electrode
- dipped into a solution with 1.00 mol dm⁻³ H⁺ ions (for example, hydrochloric acid)
- at 298 K.

Its half-equation is 2H⁺(aq) + 2e⁻ ⇌ H₂(g). Written in a cell, it is `Pt(s) | H₂(g) | H⁺(aq) ||`.

**Standard electrode potential, E⦵**, refers to conditions of 298 K, 100 kPa and 1.00 mol dm⁻³ solutions of ions. E⦵ for a half-cell is the EMF of a cell made from that half-cell and the SHE, measured under these conditions. Its sign is the sign of the half-cell's electrode relative to the SHE.

### Why conditions matter

Each electrode sets up an equilibrium, such as Cu²⁺(aq) + 2e⁻ ⇌ Cu(s). Changing conditions shifts it, so E changes. You need the direction only (the Nernst equation is not required).

- **Raising [Cu²⁺]** shifts the equilibrium right. The electrode takes more electrons from the circuit, so E becomes **more positive**.
- **Lowering [Cu²⁺]** shifts it left. E becomes **less positive**.
- Temperature and, for gas electrodes, pressure also shift the equilibrium. This is why E⦵ values only compare fairly when everything is at standard conditions.

In a zinc–copper cell, diluting the Cu²⁺ solution makes the positive electrode less positive, so the EMF falls below 1.10 V.

### Worked example 2: finding an unknown electrode potential

A lead half-cell is connected to a standard copper half-cell (E⦵ = +0.34 V) instead of to the SHE. The voltmeter reads 0.47 V and the lead electrode is negative. Find E⦵ for Pb²⁺/Pb.

1. Lead is the negative electrode, so EMF = E(Cu) − E(Pb).
2. 0.47 = 0.34 − E(Pb)
3. E(Pb) = 0.34 − 0.47 = **−0.13 V**

## The electrochemical series

Listing E⦵ values in order gives the **electrochemical series**. Values used on this page (always use those given in a question):

| Half-equation | E⦵ / V |
|---|---|
| Mg²⁺ + 2e⁻ ⇌ Mg | −2.37 |
| Zn²⁺ + 2e⁻ ⇌ Zn | −0.76 |
| Fe²⁺ + 2e⁻ ⇌ Fe | −0.44 |
| Pb²⁺ + 2e⁻ ⇌ Pb | −0.13 |
| 2H⁺ + 2e⁻ ⇌ H₂ | 0.00 |
| Cu²⁺ + 2e⁻ ⇌ Cu | +0.34 |
| I₂ + 2e⁻ ⇌ 2I⁻ | +0.54 |
| Fe³⁺ + e⁻ ⇌ Fe²⁺ | +0.77 |
| Br₂ + 2e⁻ ⇌ 2Br⁻ | +1.07 |
| MnO₄⁻ + 8H⁺ + 5e⁻ ⇌ Mn²⁺ + 4H₂O | +1.51 |


- The **strongest oxidising agent** is on the **left** at the **most positive** end (MnO₄⁻ here).
- The **strongest reducing agent** is on the **right** at the **most negative** end (Mg here).

## Predicting the direction of a redox reaction

A reaction is feasible under standard conditions when the oxidising agent is on the left of the half-equation with the **more positive** E⦵ and the reducing agent is on the right of the **less positive** one. The more positive half-equation goes forwards; the other goes backwards. Equivalently, the EMF is positive.

### Worked example 3: will Fe³⁺ oxidise iodide or bromide?

1. Fe³⁺/Fe²⁺ is +0.77 V; I₂/I⁻ is +0.54 V. Fe³⁺ is on the more positive side, so it is reduced and I⁻ is oxidised. EMF = 0.77 − 0.54 = +0.23 V. **Feasible**: 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂.
2. Br₂/Br⁻ is +1.07 V, more positive than +0.77 V. For Fe³⁺ to oxidise Br⁻, the EMF would be 0.77 − 1.07 = −0.30 V. **Not feasible**.
3. The reverse is feasible: Br₂ oxidises Fe²⁺, EMF = +0.30 V: Br₂ + 2Fe²⁺ → 2Br⁻ + 2Fe³⁺.

### Limits of a prediction

E⦵ values say nothing about rate: a feasible reaction may have a high activation energy and be too slow to see. Under non-standard conditions the potentials differ, so a reaction with a small predicted EMF may not happen.

## Calculating EMF with platinum electrodes

### Worked example 4: acidified manganate(VII) and iron(II)

Data: MnO₄⁻/Mn²⁺ +1.51 V; Fe³⁺/Fe²⁺ +0.77 V.

1. The more positive electrode is MnO₄⁻/Mn²⁺. It is the positive electrode (reduction) and goes on the right.
2. Both pairs are ions in solution, so both electrodes are platinum. H⁺ takes part in the reduction, so it is included.
3. Representation: Pt(s) | Fe²⁺(aq), Fe³⁺(aq) || MnO₄⁻(aq), H⁺(aq), Mn²⁺(aq) | Pt(s)
4. EMF = 1.51 − 0.77 = **+0.74 V**
5. Overall (iron half-equation × 5): MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺

## Required practical 8: measuring the EMF of a cell

A typical method:

1. Clean metal strips with emery paper to remove the oxide layer, which would otherwise affect the reading.
2. Place each strip in a beaker of a 1.00 mol dm⁻³ solution of its own ions.
3. Join the solutions with a strip of filter paper soaked in saturated potassium nitrate solution. Potassium chloride is avoided where silver ions are present, because it would precipitate silver chloride.
4. Connect the electrodes to a high-resistance voltmeter. Almost no current flows, so the reading is the EMF.
5. Record the reading and which electrode is negative.

The specification also suggests investigating how concentration or temperature affects a cell such as Zn | Zn²⁺ || Cu²⁺ | Cu.

## Commercial applications of cells

Cells are used as a commercial source of electrical energy. The specification names three types:

- **Non-rechargeable (irreversible)**: the reactions cannot be reversed in practice, so the cell is discarded once the reactants are used up.
- **Rechargeable**: an external supply forces current backwards and reverses the electrode reactions, regenerating the reactants.
- **Fuel cells**: fuel and oxygen are supplied continuously. They generate a current and **do not need to be electrically recharged**.

### How the reactions generate a current

Oxidation at the negative electrode releases electrons; reduction at the positive electrode takes them up. Electrons flow through the external circuit from negative to positive while ions move inside the cell to balance charge.

### The lithium cell

The specification gives these simplified electrode reactions:

```
Positive electrode:  Li⁺ + CoO₂ + e⁻ → Li⁺[CoO₂]⁻
Negative electrode:  Li → Li⁺ + e⁻
```

During discharge, lithium is oxidised (0 to +1) and cobalt is reduced (+4 in CoO₂ to +3 in [CoO₂]⁻). Overall: Li + CoO₂ → Li⁺[CoO₂]⁻. Recharging reverses both reactions.

### The alkaline hydrogen–oxygen fuel cell

### Worked example 5

Data: O₂ + 2H₂O + 4e⁻ ⇌ 4OH⁻, E⦵ = +0.40 V; 2H₂O + 2e⁻ ⇌ H₂ + 2OH⁻, E⦵ = −0.83 V.

1. Positive electrode (more positive, reduction): O₂ + 2H₂O + 4e⁻ → 4OH⁻
2. Negative electrode (reverse of the more negative half-equation): H₂ + 2OH⁻ → 2H₂O + 2e⁻
3. Double the hydrogen equation to balance 4e⁻ and add. OH⁻ and H₂O cancel: **2H₂ + O₂ → 2H₂O**
4. EMF = 0.40 − (−0.83) = **+1.23 V**

### Benefits and risks

- Fuel cells produce only water at the point of use, but making hydrogen needs energy, which may come from fossil fuels. Hydrogen is flammable and hard to store.
- Rechargeable cells cut waste compared with throwaway cells, but the lithium in lithium cells is reactive and damaged cells can catch fire.
- Disposed cells can release toxic metal compounds, so they need recycling.

## Common errors

- Writing an electrode half-equation as an oxidation. IUPAC half-equations are reductions with electrons on the left.
- Doubling an E⦵ value when you multiply a half-equation. E⦵ does not depend on the amount.
- Calculating EMF as left − right, giving a negative cell value.
- Leaving out platinum, or the state symbols, in a cell with two aqueous species.
- Saying a salt bridge carries electrons. Only ions move in it.
- Treating "feasible" as "fast".

## Where to go next

Test yourself with the [practice questions](/resources/aqa-a-level-chemistry-electrode-potentials-and-electrochemical-cells-practice/), condense the topic with the [revision notes](/resources/aqa-a-level-chemistry-electrode-potentials-and-electrochemical-cells-revision-notes/), and see the [AQA exam preparation guide](/resources/aqa-a-level-chemistry-exam-preparation/).

## Official syllabus

AQA AS and A-level Chemistry specification (7404/7405), version 1.2, July 2026, for AS and A-level exams June 2016 onwards, section 3.1.11 Electrode potentials and electrochemical cells (A-level only). Published by AQA.
