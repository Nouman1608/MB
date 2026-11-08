---
title: "A Level Chemistry: Electrochemistry — Revision Notes"
resourceType: "revision-notes"
subject: "chemistry"
level: ["a-levels"]
topic: "Electrochemistry"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
order: 24.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-electrochemistry"
    subtopic: "a-electrolysis"
  - qualification: "a-level"
    topic: "a-electrochemistry"
    subtopic: "a-standard-electrode-potentials-cell-potentials-and-the-nernst-equation"
description: "Condensed recall notes on standard electrode potentials, cell e.m.f., feasibility and electrolysis for Cambridge A Level Chemistry 9701."
author: "nouman-ahmed"
reviewer: "farhat-ul-ain-sehgal"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
reviewedDate: 2026-09-29
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Electrochemistry study guide](/resources/a-electrochemistry-electrolysis-and-electrode-potentials/).

## Standard conditions

```
298 K,  1 mol dm^-3 solutions,  101 kPa for gases (the 9701 syllabus's value)
Reference: standard hydrogen electrode, E = 0.00 V by DEFINITION
```

Every E⦵ value is a measurement **relative to** the hydrogen electrode, which is assigned zero — it is not an absolute quantity.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-electrochemistry-electrolysis-and-electrode-potentials--02-hydrogen-electrode.webp" width="900" height="1130" alt="A platinum electrode in 1.00 mol per dm3 H+ with hydrogen gas bubbled over it is the standard hydrogen electrode, defined as 0.00 V. Joined to a zinc half-cell by a salt bridge it reads 0.76 V with zinc negative, so E° for Zn2+/Zn is -0.76 V. Standard conditions are 298 K, 100 kPa (101 kPa in the Cambridge syllabus) and 1.00 mol per dm3." loading="lazy">
  <figcaption>The hydrogen electrode is defined as 0.00 V, so every other half-cell potential is read against it under standard conditions.</figcaption>
</figure>


## Reading E⦵ values

Standard electrode potentials are written as **reduction** half-equations:

```
Cu2+ + 2e-  <=>  Cu        E = +0.34 V
Zn2+ + 2e-  <=>  Zn        E = -0.76 V
```

- **More positive E⦵** → more readily **reduced** → stronger oxidising agent (left-hand species).
- **More negative E⦵** → more readily **oxidised** → stronger reducing agent (right-hand species).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-electrochemistry-electrolysis-and-electrode-potentials--03-series-ladder.webp" width="900" height="1120" alt="Ten half-equations are ranked from E° +1.51 V (MnO4-/Mn2+) at the top to -2.37 V (Mg2+/Mg) at the bottom. The left-hand species gain electrons and are the oxidising agents, strongest at the top; the right-hand species give electrons and are reducing agents, strongest at the bottom." loading="lazy">
  <figcaption>A more positive E° means a stronger oxidising agent; a more negative E° means a stronger reducing agent.</figcaption>
</figure>


## Cell e.m.f.

```
E_cell = E(more positive)  -  E(more negative)
```

For a cell **freely built** from two half-cells (as above), E_cell is always **positive** — you simply take the more positive electrode potential minus the more negative one.

**The more negative electrode is the anode** (oxidation, electrons released). The more positive is the cathode (reduction). Electrons flow through the external circuit from negative to positive.

Mnemonic that survives pressure: **an ox, red cat** — **an**ode **ox**idation, **red**uction **cat**hode.

```
Zn | Zn2+ || Cu2+ | Cu        E_cell = 0.34 - (-0.76) = +1.10 V
```

Single line = phase boundary, double line = salt bridge.

**This is not the same calculation as testing feasibility of a specified
reaction** — see below. Only use "more positive minus more negative" when
you are free to choose which half-cell is reduced and which is oxidised.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-chemistry-electrochemistry-revision-notes--01-cathode-polarity.webp" width="900" height="1040" alt="A galvanic cell with a lamp and an electrolytic cell with a battery are drawn side by side. In the galvanic cell the anode is negative and the cathode positive, with electrons flowing from anode through the lamp to cathode. In the electrolytic cell the cathode is joined to the battery negative terminal and the anode to the positive. Reduction is at the cathode in both." loading="lazy">
  <figcaption>Reduction always happens at the cathode, but the cathode is positive in a galvanic cell and negative in an electrolytic cell.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-electrochemistry-electrolysis-and-electrode-potentials--01-zinc-copper-cell.webp" width="900" height="1130" alt="Two beakers are joined by a salt bridge. Zinc in Zn2+ is the negative electrode where zinc is oxidised; copper in Cu2+ is the positive electrode where Cu2+ is reduced. Electrons flow through a wire past a 1.10 V voltmeter from zinc to copper, and the cell is written Zn(s) | Zn2+(aq) || Cu2+(aq) | Cu(s)." loading="lazy">
  <figcaption>In the zinc-copper cell electrons flow from the negative zinc electrode to the positive copper electrode, giving E° cell = +1.10 V.</figcaption>
</figure>


## Feasibility

For a **specified** reaction (one species given as being reduced, another
as being oxidised), calculate:

```
E_cell = E(species reduced)  -  E(species oxidised)
```

This can come out **negative** — and a negative value means the reaction
is **not feasible** as written.

**Worked example (infeasible):** does Fe3+ oxidise Cl- to Cl2?
Fe3+/Fe2+, E = +0.77 V (reduced); Cl2/Cl-, E = +1.36 V (oxidised).

```
E_cell = 0.77 - 1.36 = -0.59 V   ->  NOT feasible
```

Iron(III) is too weak an oxidising agent to oxidise chloride ions; the
reverse reaction (Cl2 oxidising Fe2+) is the feasible one.

```
delta-G = -n F E_cell        F = 96500 C mol^-1
```

**E_cell positive → ΔG negative → thermodynamically feasible.**

Two essential caveats:

1. **Feasible does not mean fast.** A reaction with a large positive E_cell may still be immeasurably slow if the activation energy is high.
2. **E⦵ values apply at standard conditions only.** Changing concentration shifts the electrode potential — by Le Chatelier, increasing the concentration of the species on the left of a reduction half-equation makes E more positive.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-electrochemistry-electrolysis-and-electrode-potentials--04-feasibility.webp" width="900" height="1140" alt="Each row shows an arrow from the E° of the species oxidised to the E° of the species reduced (Fe3+/Fe2+ at +0.77 V). It points right for iodide (+0.23 V, feasible) and left for bromide (-0.30 V) and chloride (-0.59 V), which are not feasible. Feasible does not mean fast." loading="lazy">
  <figcaption>E° cell = E°(reduced) - E°(oxidised); a positive value means feasible, though not necessarily fast.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-electrochemistry-electrolysis-and-electrode-potentials--06-delta-g.webp" width="900" height="1120" alt="Bars show E° cell for three reactions (+1.10 V, +0.23 V, -0.59 V) above the matching delta G values from delta G = -nFE (-212.3, -44.4 and +113.9 kJ). A positive E° cell gives a negative delta G, a feasible reaction and, for Edexcel, K greater than 1." loading="lazy">
  <figcaption>A positive E° cell always corresponds to a negative delta G, because F is positive.</figcaption>
</figure>


## Electrolysis

| Electrode | Process | Charge |
|---|---|---|
| Cathode | Reduction — cations gain electrons | Negative |
| Anode | Oxidation — anions lose electrons | Positive |

**Note the reversal from an electrochemical cell:** in electrolysis the cathode is negative; in a galvanic cell it is positive. The constant is that reduction always happens at the cathode.

```
Q = I t          Q = n F
```

To find mass deposited: `Q = It`, then `n(e⁻) = Q/F`, then divide by the number of electrons in the half-equation, then `m = nM`.

### Selective discharge in aqueous solution

- **Cathode:** the *less* reactive cation (more positive E⦵) is discharged. Metals below hydrogen deposit; metals above it leave H₂ evolved instead.
- **Anode:** the species most easily oxidised (the half-cell with the less positive E⦵) is discharged. **Iodide** (I₂/I⁻, +0.54 V) and **bromide** (Br₂/Br⁻, +1.07 V) are easier to oxidise than water (O₂/H₂O, +1.23 V), so I₂ or Br₂ is released. **Chloride** (Cl₂/Cl⁻, +1.36 V) is slightly harder to oxidise than water, so oxygen is released **unless** the chloride is at high concentration, when chlorine is discharged instead — concentrated NaCl gives Cl₂, very dilute NaCl gives O₂. **Fluoride** is never discharged from aqueous solution at any concentration (F₂/F⁻, E⦵ = +2.87 V, far too positive). Sulfate and nitrate are not discharged; oxygen is released.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-chemistry-electrochemistry-revision-notes--02-anode-discharge.webp" width="900" height="890" alt="Bars show E of five anode candidates: iodide 0.54 V, bromide 1.07 V, water 1.23 V, chloride 1.36 V and fluoride 2.87 V. Iodide and bromide have smaller values than water so iodine or bromine is released. Chloride gives oxygen when dilute and chlorine when concentrated. Fluoride is never discharged." loading="lazy">
  <figcaption>The species easier to oxidise than water (smaller E) is discharged at the anode.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-electrochemistry-electrolysis-and-electrode-potentials--07-quantitative-electrolysis.webp" width="900" height="1195" alt="A cell with copper electrodes carries 2.00 A for 3860 s. Charge Q = It = 7720 C, moles of electrons = 7720 / 96 500 = 0.0800 mol, moles of copper = 0.0800 / 2 = 0.0400 mol, and mass = 0.0400 x 63.5 = 2.54 g." loading="lazy">
  <figcaption>Charge to moles of electrons to moles of copper to mass: 2.00 A for 3860 s deposits 2.54 g.</figcaption>
</figure>


## The Nernst equation

Electrode potential is **not fixed** — it varies with the concentration of the aqueous ions involved:

```
E = E-standard + (0.059 / z) log([oxidised species] / [reduced species])
```

where z is the number of electrons transferred. **Qualitatively**, increasing the concentration of the oxidised species (on the left of the reduction half-equation) makes E **more positive**; increasing the concentration of the reduced species makes E **less positive** — consistent with Le Chatelier's principle applied to the half-equilibrium.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-electrochemistry-electrolysis-and-electrode-potentials--05-nernst.webp" width="900" height="890" alt="A straight-line graph shows E for the Cu2+/Cu half-cell rising from about 0.25 V at 0.001 mol per dm3 to +0.340 V at 1.00 mol per dm3 as log[Cu2+] increases. The point at 0.0100 mol per dm3 is +0.281 V. Higher Cu2+ concentration makes E more positive." loading="lazy">
  <figcaption>E rises linearly with log[Cu2+] with slope 0.059/z, so diluting Cu2+ makes the electrode less positive.</figcaption>
</figure>


## Worked example: electrolysis

A current of 2.00 A is passed through aqueous CuSO₄ with copper electrodes for 3860 s. Calculate the mass of copper deposited. (F = 96,500 C mol⁻¹, A_r(Cu) = 63.5)

```
Q = It = 2.00 x 3860 = 7720 C
moles of electrons = Q / F = 7720 / 96500 = 0.0800 mol
Cu2+ + 2e- -> Cu, so moles of Cu = 0.0800 / 2 = 0.0400 mol
mass of Cu = 0.0400 x 63.5 = 2.54 g
```

## Exam traps

- Subtracting the wrong way and reporting a negative e.m.f. for a spontaneous cell.
- Confusing anode polarity between electrolytic and galvanic cells.
- Forgetting that ΔG = −nFE_cell needs **n = moles of electrons transferred**, taken from the balanced overall equation.
- Treating "feasible" as "will happen quickly".
- Applying E⦵ values to non-standard concentrations without comment.

## Self-test

1. What is the standard hydrogen electrode's potential, and why?
2. In `Zn|Zn²⁺||Cu²⁺|Cu`, which electrode is the anode and which way do electrons flow?
3. Calculate E_cell for Zn/Cu.
4. State the relationship between ΔG and E_cell, and what makes a reaction feasible.
5. Why is the cathode negative in electrolysis but positive in a galvanic cell?
6. A current of 2.00 A is passed through aqueous CuSO₄ with copper electrodes for 3860 s. Calculate the mass of copper deposited (F = 96,500 C mol⁻¹, A_r(Cu) = 63.5).
7. According to the Nernst equation, what happens to E if the concentration of the oxidised species increases?

**Answers:** 1. 0.00 V, by definition — it is the arbitrary reference against which all other electrode potentials are measured. 2. Zinc is the anode (more negative, oxidised); electrons flow externally from zinc to copper. 3. +0.34 − (−0.76) = +1.10 V. 4. ΔG = −nFE_cell; a positive E_cell gives a negative ΔG, so the reaction is thermodynamically feasible. 5. In electrolysis an external supply pushes electrons onto the cathode to drive reduction; in a galvanic cell reduction draws electrons in, making the cathode the positive terminal. Reduction occurs at the cathode in both cases. 6. Q = It = 7720 C; moles of electrons = 7720 ÷ 96500 = 0.0800 mol; moles of Cu = 0.0800 ÷ 2 = 0.0400 mol; mass = 0.0400 × 63.5 = 2.54 g. 7. E becomes more positive, since increasing the concentration of the oxidised species shifts the half-equilibrium towards reduction, consistent with Le Chatelier's principle.

## Frequently asked questions

**Is the cathode positive or negative?**
It depends on the cell. In electrolysis the cathode is negative because the power supply pushes electrons onto it; in a galvanic cell the cathode is the positive terminal. Reduction always happens at the cathode in both.

**How do you test whether a specified redox reaction is feasible using E⦵ values?**
Calculate E_cell = E(species reduced) − E(species oxidised) for the reaction as written. A positive value means it is feasible; a negative value, such as −0.59 V for Fe³⁺ oxidising Cl⁻, means it is not.

**What does the Nernst equation show for Cambridge 9701 Chemistry?**
The Nernst equation, E = E⦵ + (0.059/z) log([oxidised]/[reduced]), shows that electrode potential depends on ion concentration. Increasing the concentration of the oxidised species makes E more positive.

**When is chlorine produced instead of oxygen at the anode?**
Chlorine is discharged from aqueous chloride solutions only at high concentration, so concentrated NaCl gives Cl₂. Very dilute NaCl gives oxygen, because chloride (+1.36 V) is slightly harder to oxidise than water (+1.23 V).
