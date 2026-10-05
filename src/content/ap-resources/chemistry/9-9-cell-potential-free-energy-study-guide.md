---
resourceId: "mb-ap-chem-9.9-study-guide"
title: "Cell Potential and Free Energy: Study Guide (Chemistry 9.9)"
description: "Learn how to calculate a standard cell potential from reduction potentials, how its sign shows whether a cell reaction is favourable, and how ΔG° = −nFE° links volts to free energy."
course: "chemistry"
unit: 9
topics: ["9.9"]
resourceType: "study-guide"
prerequisites:
  - "Anode, cathode and electron flow in galvanic and electrolytic cells (Topic 9.8)"
  - "The sign of ΔG° and thermodynamic favourability (Topic 9.3)"
  - "Balancing redox equations so that electrons cancel (Topic 4.9)"
prerequisiteResources: ["mb-ap-chem-9.8-study-guide"]
learningObjectives:
  - "Explain what a standard reduction potential measures and read a table of them"
  - "Pick out the oxidation and reduction half-reactions in a cell and calculate E°cell from their standard reduction potentials"
  - "Use the sign of E°cell to decide whether a cell reaction is thermodynamically favoured or needs an applied potential"
  - "Convert between E°cell and ΔG° with ΔG° = −nFE°, choosing n correctly and handling units"
  - "Explain why E° does not change when an equation is multiplied, while ΔG° does"
skills: ["5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "F = 96,485 C mol⁻¹; 1 J = 1 C × 1 V. Standard reduction potentials are given in the guide to 2 decimal places; give ΔG° in kJ mol⁻¹ to 3 significant figures"
related: ["mb-ap-chem-9.9-revision-notes", "mb-ap-chem-9.9-practice", "mb-ap-chem-9.9-checklist"]
next: "mb-ap-chem-9.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A standard reduction potential, E°, measures how strongly a species pulls electrons towards itself, compared with hydrogen (0.00 V), at standard conditions."
  - "E°cell = E°(cathode) − E°(anode), using both values as reduction potentials straight from the table."
  - "A positive E°cell means the cell reaction is thermodynamically favoured (galvanic). A negative E°cell means it is unfavoured and needs an externally applied potential (electrolytic)."
  - "ΔG° = −nFE°: a positive E° gives a negative ΔG°. n is the moles of electrons transferred in the balanced equation."
  - "Never multiply E° by the coefficients. E° is a property per electron; ΔG° scales with the amount of reaction."
faqs:
  - question: "Why do I not multiply the reduction potential when I double a half-reaction?"
    answer: "A potential is energy per unit of charge (1 V = 1 J per coulomb). Doubling the half-reaction doubles both the energy and the charge, so their ratio stays the same. The total energy change is handled by n in ΔG° = −nFE°."
  - question: "Is ΔG° = −nFE° on the formula sheet?"
    answer: "Yes. It is on the equations and constants sheet you get in the exam, together with F = 96,485 C mol⁻¹. You still need to choose n yourself and convert between J and kJ."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## From "it works" to "how hard it pushes"

In [Topic 9.8](/advanced-course-resources/chemistry/9-8-galvanic-voltaic-electrolytic-cells-study-guide/) you learned to read a cell: oxidation at the anode, reduction at the cathode, electrons through the wire. A voltmeter in a galvanic cell shows a number. That number is the **cell potential**, E, in volts (V). It tells you how strongly the redox reaction drives electrons through the wire.

This topic answers three questions:

1. Where does the voltage of a cell come from, and how can you calculate it from data?
2. What does its sign tell you?
3. How is it connected to the free energy change, ΔG°, that you met in Topic 9.3?

## Standard reduction potentials

Every half-reaction has its own "appetite" for electrons. Chemists measure it as a **standard reduction potential**, E°. The half-reaction is always written as a **reduction** (electrons on the left).

- Each value is measured against a reference half-cell, the standard hydrogen electrode: 2H⁺(aq) + 2e⁻ → H₂(g), which is given E° = 0.00 V by definition.
- "Standard" (the ° sign) means 1 M for dissolved species, 1 atm for gases, and pure solids and liquids. Tables are usually for 25 °C (298 K).
- A **more positive** E° means the species on the left is **more easily reduced**: it is a stronger oxidising agent.
- A **more negative** E° means the reduction is harder, so the reverse (oxidation of the metal on the right) is easier.

| Half-reaction (as a reduction) | E° (V) |
|---|---|
| Cl₂(g) + 2e⁻ → 2Cl⁻(aq) | +1.36 |
| Br₂(l) + 2e⁻ → 2Br⁻(aq) | +1.07 |
| Ag⁺(aq) + e⁻ → Ag(s) | +0.80 |
| Fe³⁺(aq) + e⁻ → Fe²⁺(aq) | +0.77 |
| I₂(s) + 2e⁻ → 2I⁻(aq) | +0.54 |
| Cu²⁺(aq) + 2e⁻ → Cu(s) | +0.34 |
| 2H⁺(aq) + 2e⁻ → H₂(g) | 0.00 |
| Fe²⁺(aq) + 2e⁻ → Fe(s) | −0.44 |
| Zn²⁺(aq) + 2e⁻ → Zn(s) | −0.76 |
| Al³⁺(aq) + 3e⁻ → Al(s) | −1.66 |

On the exam you are given the values you need. Learn to use the table, not to memorise it.

## Calculating a standard cell potential

In a cell, one half-reaction runs as a reduction (at the cathode) and the other runs backwards, as an oxidation (at the anode). The cell potential is the **gap** between the two reduction potentials:

> **E°cell = E°(cathode) − E°(anode)**, with both values taken straight from the table as reduction potentials.

Some teachers write the same idea as E°cell = E°(reduction) + E°(oxidation), where the oxidation potential is the reduction potential with its sign changed. Both give the same answer. Pick one method and use it every time, so you never change a sign twice.

For a zinc–copper cell, Cu²⁺ is reduced and Zn is oxidised: E°cell = (+0.34) − (−0.76) = **+1.10 V**.

<figure>
<svg viewBox="0 0 640 350" role="img" aria-labelledby="ladder-title ladder-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ladder-title">A ladder of standard reduction potentials</title>
<desc id="ladder-desc">A vertical scale of standard reduction potential in volts, from +1.5 at the top to −1.8 at the bottom. Marks from top to bottom: chlorine to chloride +1.36, bromine to bromide +1.07, silver ion to silver +0.80, copper(II) to copper +0.34, hydrogen ion to hydrogen 0.00, iron(II) to iron −0.44, aluminium ion to aluminium −1.66. An upward arrow on the left is labelled "more easily reduced". On the right a dashed bracket spans from the iron(II) mark down to the aluminium mark and is labelled E°cell = −0.44 − (−1.66) = +1.22 V, with the iron half-reaction labelled cathode (higher) and the aluminium half-reaction labelled anode (lower).</desc>
<line x1="250" y1="30" x2="250" y2="330" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="22" text-anchor="middle" font-size="12" fill="#1d2b44">E° (V)</text>
<g font-size="13" fill="#1d2b44">
<line x1="242" y1="42.7" x2="258" y2="42.7" stroke="#1d2b44" stroke-width="2"/><text x="234" y="47" text-anchor="end">Cl₂ + 2e⁻ → 2Cl⁻</text><text x="266" y="47">+1.36</text>
<line x1="242" y1="69.1" x2="258" y2="69.1" stroke="#1d2b44" stroke-width="2"/><text x="234" y="73" text-anchor="end">Br₂ + 2e⁻ → 2Br⁻</text><text x="266" y="73">+1.07</text>
<line x1="242" y1="93.6" x2="258" y2="93.6" stroke="#1d2b44" stroke-width="2"/><text x="234" y="98" text-anchor="end">Ag⁺ + e⁻ → Ag</text><text x="266" y="98">+0.80</text>
<line x1="242" y1="135.5" x2="258" y2="135.5" stroke="#1d2b44" stroke-width="2"/><text x="234" y="140" text-anchor="end">Cu²⁺ + 2e⁻ → Cu</text><text x="266" y="140">+0.34</text>
<line x1="242" y1="166.4" x2="258" y2="166.4" stroke="#1d2b44" stroke-width="2"/><text x="234" y="171" text-anchor="end">2H⁺ + 2e⁻ → H₂</text><text x="266" y="171">0.00 (reference)</text>
<line x1="242" y1="206.4" x2="258" y2="206.4" stroke="#1d2b44" stroke-width="2"/><text x="234" y="211" text-anchor="end">Fe²⁺ + 2e⁻ → Fe</text><text x="266" y="211">−0.44</text>
<line x1="242" y1="317.3" x2="258" y2="317.3" stroke="#1d2b44" stroke-width="2"/><text x="234" y="322" text-anchor="end">Al³⁺ + 3e⁻ → Al</text><text x="266" y="322">−1.66</text>
</g>
<path d="M30 300 V60" stroke="#1d2b44" stroke-width="2" marker-end="url(#l1)"/>
<text x="42" y="250" font-size="12" fill="#1d2b44" transform="rotate(-90 42 250)">more easily reduced</text>
<path d="M360 206.4 H400 V317.3 H360" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="410" y="230" font-size="12" font-weight="600" fill="#1d2b44">Fe²⁺/Fe higher: cathode</text>
<text x="410" y="258" font-size="13" fill="#1d2b44">E°cell = −0.44 − (−1.66)</text>
<text x="410" y="278" font-size="13" font-weight="600" fill="#1d2b44">= +1.22 V</text>
<text x="410" y="306" font-size="12" font-weight="600" fill="#1d2b44">Al³⁺/Al lower: anode</text>
<defs><marker id="l1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. Reduction potentials as a ladder. In a galvanic cell the half-reaction higher on the ladder runs as a reduction (cathode) and the lower one runs as an oxidation (anode). E°cell is the height of the gap, so it comes out positive. The dashed bracket shows the aluminium–iron cell from Worked example 1.</figcaption>
</figure>

### Do not multiply E° by coefficients

To balance electrons you often multiply a half-reaction by 2 or 3. **The E° value stays the same.** A potential is energy *per unit of charge* (1 V = 1 J C⁻¹). Doubling a half-reaction doubles the energy and doubles the charge, so the ratio does not change. Think of it like the height of a waterfall: twice as much water falling does not make the waterfall taller.

## The sign of E°cell tells you about favourability

- **E°cell > 0:** the reaction is thermodynamically favoured under standard conditions. It can run as a **galvanic cell** and produce a positive voltage.
- **E°cell < 0:** the reaction as written is thermodynamically unfavoured. It happens only if an outside power supply applies a potential at least as large as the gap: an **electrolytic cell**. Its reverse reaction is favoured, with the same size of E° and the opposite sign.

This matches Topic 9.8: a galvanic cell runs a favourable reaction, and an electrolytic cell uses electrical energy to force an unfavourable one.

## Linking cell potential and free energy: ΔG° = −nFE°

Electrical work equals charge × potential difference. When a redox reaction pushes n mol of electrons (charge nF) through a potential E°, the most electrical work it can do is nFE°. That maximum work equals the decrease in free energy, −ΔG°:

> **ΔG° = −nFE°**

- **n** = moles of electrons transferred per mole of reaction **as written** in the balanced equation (find it from the electrons that cancel).
- **F** = Faraday's constant, 96,485 C mol⁻¹: the charge on one mole of electrons.
- **E°** in volts. Because 1 C × 1 V = 1 J, the answer comes out in **joules** (per mole of reaction). Divide by 1000 for kJ.

The minus sign does the important job: a **positive E°** gives a **negative ΔG°**, so both say "favoured". A negative E° gives a positive ΔG°.

| E°cell | ΔG° | Reaction as written | Cell type |
|---|---|---|---|
| positive | negative | thermodynamically favoured | galvanic |
| negative | positive | thermodynamically unfavoured | electrolytic (needs applied potential) |
| zero | zero | neither direction favoured at standard conditions | no net drive |

**ΔG° depends on how you write the equation; E° does not.** If you double the equation, n doubles, so ΔG° doubles, but E° is unchanged. This is just what you would expect: ΔG° is the free energy for a stated *amount* of reaction, while E° is energy per unit of charge.

## Worked example 1: an aluminium–iron cell

**Question.** A galvanic cell is made from an aluminium strip in 1 M Al(NO₃)₃ and an iron strip in 1 M Fe(NO₃)₂. Use the table to (a) identify the cathode and anode, (b) write the balanced overall equation, (c) calculate E°cell, and (d) calculate ΔG° for the reaction as written.

**(a)** Fe²⁺/Fe (−0.44 V) is higher on the ladder than Al³⁺/Al (−1.66 V). So Fe²⁺ is reduced: **iron is the cathode**. Aluminium is oxidised: **aluminium is the anode**.

**(b)**
- Cathode: Fe²⁺(aq) + 2e⁻ → Fe(s) (× 3)
- Anode: Al(s) → Al³⁺(aq) + 3e⁻ (× 2)
- Six electrons cancel: **2Al(s) + 3Fe²⁺(aq) → 2Al³⁺(aq) + 3Fe(s)**, so **n = 6**.

**(c)** E°cell = E°(cathode) − E°(anode) = (−0.44) − (−1.66) = **+1.22 V**. The multipliers 3 and 2 do not touch the E° values. (Multiplying them in would give 3(−0.44) − 2(−1.66) = +2.00 V, which is wrong.)

**(d)** ΔG° = −nFE° = −(6 mol e⁻)(96,485 C mol⁻¹)(1.22 V) = −706,000 J, so **ΔG° = −706 kJ mol⁻¹** (per mole of reaction as written, that is, per 2 mol of Al).

**Interpretation.** E° is positive and ΔG° is negative, so the reaction is thermodynamically favoured: this is a working galvanic cell. If the equation were written per 1 mol of Al (n = 3), ΔG° would be −353 kJ mol⁻¹, but E° would still be 1.22 V.

## Worked example 2: can bromine oxidise chloride ions?

**Question.** A student proposes making chlorine by adding bromine to sodium chloride solution:

Br₂(l) + 2Cl⁻(aq) → 2Br⁻(aq) + Cl₂(g)

Is this reaction thermodynamically favoured under standard conditions? Support your answer with E° and ΔG°.

1. **Identify the half-reactions.** Br₂ gains electrons (reduction, so the cathode would be the bromine half-cell). Cl⁻ loses electrons (oxidation, so the anode would be the chloride half-cell).
2. **Cell potential.** E° = E°(Br₂/Br⁻) − E°(Cl₂/Cl⁻) = (+1.07) − (+1.36) = **−0.29 V**.
3. **Free energy.** n = 2. ΔG° = −(2)(96,485 C mol⁻¹)(−0.29 V) = +56,000 J, so **ΔG° = +56.0 kJ mol⁻¹**.

**Answer.** E° is negative and ΔG° is positive, so the reaction is **not** thermodynamically favoured. Bromine cannot oxidise chloride ions under standard conditions. The reaction could be forced in an electrolytic cell, but only with an externally applied potential of more than 0.29 V.

**Check by reasoning.** Chlorine sits higher on the ladder than bromine, so chlorine is the stronger oxidising agent. The **reverse** reaction, Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂, has E° = +0.29 V and ΔG° = −56.0 kJ mol⁻¹: chlorine water does turn bromide solution orange-brown.

## Worked example 3: working backwards to an unknown potential

**Question.** A fictional metal X forms X²⁺ ions. For the reaction X(s) + 2Ag⁺(aq) → X²⁺(aq) + 2Ag(s), ΔG° = −164 kJ mol⁻¹. Find E°cell and the standard reduction potential of X²⁺/X.

1. **Rearrange.** E° = −ΔG° ÷ (nF). Convert kJ to J first: −164 kJ = −164,000 J.
2. n = 2 (each X loses 2 electrons; 2 Ag⁺ each gain 1).
3. E°cell = −(−164,000 J) ÷ (2 × 96,485 C mol⁻¹) = **+0.850 V**.
4. Silver is reduced (cathode) and X is oxidised (anode): 0.850 V = (+0.80 V) − E°(X²⁺/X), so **E°(X²⁺/X) = −0.05 V**.

**Interpretation.** X²⁺/X sits just below hydrogen on the ladder, so X should be oxidised by 1 M H⁺ (E° = 0.00 − (−0.05) = +0.05 V, a small positive value) and by Cu²⁺ (E° = 0.34 − (−0.05) = +0.39 V).

**Units check.** J ÷ (C mol⁻¹ × mol) leaves J C⁻¹, which is volts.

## Connection to K

In [Topic 9.5](/advanced-course-resources/chemistry/9-5-free-energy-equilibrium-study-guide/) you saw that ΔG° = −RT ln K. Putting the two equations together shows that a positive E°cell goes with K > 1, and a negative E°cell goes with K < 1. You will use this link in the next topic, where the cell is no longer at standard conditions.

## Common misconceptions

- **"Multiply E° by the coefficient when you multiply a half-reaction."** No. E° is energy per unit of charge, so it never scales. Only n (and so ΔG°) changes with the coefficients.
- **"Flip the sign of the anode value, then subtract it."** That changes the sign twice. Use E°(cathode) − E°(anode) with table values, or add the oxidation potential, but not both.
- **"A negative standard reduction potential means that species cannot be reduced."** It can be reduced; it just needs a partner that is oxidised even more easily (lower on the ladder), or an applied potential.
- **"n is the number of electrons in one half-reaction."** n is the number of electrons that cancel in the balanced overall equation (6 in Worked example 1, not 2 or 3).
- **"ΔG° comes out in kJ."** With F in C mol⁻¹ and E in V, the answer is in J. Forgetting to divide by 1000 makes ΔG° a thousand times too large.
- **"A larger E°cell means a faster reaction."** E° tells you about thermodynamic favourability, not rate. As in Topic 9.4, a favoured reaction can still be very slow.
- **"An electrolytic cell has a positive E°cell because current flows."** The reaction it drives has a negative E°. The current flows only because the power supply pushes it.

## Where this leads

Real cells rarely run at 1 M and 1 atm. Next, [Topic 9.10](/advanced-course-resources/chemistry/9-10-cell-potential-under-nonstandard-conditions-study-guide/) explains how the cell potential changes as concentrations change, why it falls to zero at equilibrium, and how a cell with the same metal on both sides can still give a voltage. Try the [practice questions](/advanced-course-resources/chemistry/9-9-cell-potential-free-energy-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/9-9-cell-potential-free-energy-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/9-9-cell-potential-free-energy-checklist/) to consolidate.
