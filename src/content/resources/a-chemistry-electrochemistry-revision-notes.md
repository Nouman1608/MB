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
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Electrochemistry study guide](/resources/a-electrochemistry-electrolysis-and-electrode-potentials/).

## Standard conditions

```
298 K,  1 mol dm^-3 solutions,  100 kPa (or 1 atm) for gases
Reference: standard hydrogen electrode, E = 0.00 V by DEFINITION
```

Every E⦵ value is a measurement **relative to** the hydrogen electrode, which is assigned zero — it is not an absolute quantity.

## Reading E⦵ values

Standard electrode potentials are written as **reduction** half-equations:

```
Cu2+ + 2e-  <=>  Cu        E = +0.34 V
Zn2+ + 2e-  <=>  Zn        E = -0.76 V
```

- **More positive E⦵** → more readily **reduced** → stronger oxidising agent (left-hand species).
- **More negative E⦵** → more readily **oxidised** → stronger reducing agent (right-hand species).

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
- **Anode:** oxygen is released from hydroxide/water by default (hydroxide/water is easier to oxidise than most halides on electrode-potential grounds) **unless** a halide is present at high concentration, in which case the halogen is discharged instead — concentrated NaCl gives Cl₂, very dilute NaCl gives O₂. Fluoride is never discharged from aqueous solution at any concentration (F⁻/F₂, E⦵ = +2.87 V, far too positive).

## The Nernst equation

Electrode potential is **not fixed** — it varies with the concentration of the aqueous ions involved:

```
E = E-standard + (0.059 / z) log([oxidised species] / [reduced species])
```

where z is the number of electrons transferred. **Qualitatively**, increasing the concentration of the oxidised species (on the left of the reduction half-equation) makes E **more positive**; increasing the concentration of the reduced species makes E **less positive** — consistent with Le Chatelier's principle applied to the half-equilibrium.

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
