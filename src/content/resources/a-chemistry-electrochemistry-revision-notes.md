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
E_cell = E(reduced, more positive)  -  E(oxidised, more negative)
```

E_cell for a spontaneous cell is always **positive**. If your answer is negative, you have the half-cells the wrong way round.

**The more negative electrode is the anode** (oxidation, electrons released). The more positive is the cathode (reduction). Electrons flow through the external circuit from negative to positive.

Mnemonic that survives pressure: **an ox, red cat** — **an**ode **ox**idation, **red**uction **cat**hode.

```
Zn | Zn2+ || Cu2+ | Cu        E_cell = 0.34 - (-0.76) = +1.10 V
```

Single line = phase boundary, double line = salt bridge.

## Feasibility

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
- **Anode:** halides are discharged in preference to OH⁻; otherwise O₂ from OH⁻. Concentration also matters — concentrated NaCl gives Cl₂, very dilute gives O₂.

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

**Answers:** 1. 0.00 V, by definition — it is the arbitrary reference against which all other electrode potentials are measured. 2. Zinc is the anode (more negative, oxidised); electrons flow externally from zinc to copper. 3. +0.34 − (−0.76) = +1.10 V. 4. ΔG = −nFE_cell; a positive E_cell gives a negative ΔG, so the reaction is thermodynamically feasible. 5. In electrolysis an external supply pushes electrons onto the cathode to drive reduction; in a galvanic cell reduction draws electrons in, making the cathode the positive terminal. Reduction occurs at the cathode in both cases.
