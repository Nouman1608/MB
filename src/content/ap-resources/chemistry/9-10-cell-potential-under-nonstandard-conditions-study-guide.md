---
resourceId: "mb-ap-chem-9.10-study-guide"
title: "Cell Potential Under Nonstandard Conditions: Study Guide (Chemistry 9.10)"
description: "Learn how concentration changes move a cell potential above or below E°, why it falls to zero at equilibrium, how concentration cells work, and how to use the Nernst equation qualitatively."
course: "chemistry"
unit: 9
topics: ["9.10"]
resourceType: "study-guide"
prerequisites:
  - "Calculating E°cell and linking it to ΔG° (Topic 9.9)"
  - "Writing a reaction quotient Q and comparing Q with K (Topic 7.3)"
  - "ΔG° = −RT ln K (Topic 9.5)"
prerequisiteResources: ["mb-ap-chem-9.9-study-guide"]
learningObjectives:
  - "Explain why the potential of a working cell depends on the concentrations of the species that react"
  - "Compare Q with 1 and with K to predict whether a cell potential is larger or smaller than E°, and when it reaches zero"
  - "Describe the cell potential as a drive towards equilibrium that shrinks as the cell runs down"
  - "Explain why Le Châtelier's principle is not the right tool for reasoning about a working cell"
  - "Predict the direction of electron flow in a concentration cell and explain when it stops"
  - "Use the Nernst equation qualitatively, and as a numerical check, to justify a claim about cell potential"
skills: ["5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "R = 8.314 J mol⁻¹ K⁻¹, F = 96,485 C mol⁻¹, T = 298 K, so RT/F = 0.0257 V. Nernst numbers in this guide are checks on reasoning, not the main skill"
related: ["mb-ap-chem-9.10-revision-notes", "mb-ap-chem-9.10-practice", "mb-ap-chem-9.10-checklist"]
next: "mb-ap-chem-9.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "E° is the cell potential when Q = 1 (standard conditions). Real cells usually have Q ≠ 1, so E ≠ E°."
  - "The cell potential is the drive towards equilibrium: the further the cell is from equilibrium, the larger the size of E. At equilibrium (Q = K), E = 0 and the cell is 'dead'."
  - "Q < 1 (more reactant, less product than standard) moves the cell further from equilibrium, so E > E°. Q > 1 moves it closer, so E < E°."
  - "Reason with Q, not Le Châtelier's principle: a working cell is not at equilibrium."
  - "In a concentration cell (same half-reaction on both sides), electrons flow so as to make the two concentrations equal: the dilute side is the anode."
faqs:
  - question: "Will I have to calculate a cell potential with the Nernst equation?"
    answer: "The course expects you to understand the equation qualitatively and to reason with it. A calculation on its own is not enough to show understanding, so always explain the direction of change using Q. A quick calculation can then support your reasoning."
  - question: "Does E° change when the concentrations change?"
    answer: "No. E° is fixed for a reaction at a given temperature, because it describes standard conditions. What changes is E, the actual cell potential."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Standard conditions are just one point on the journey

In [Topic 9.9](/advanced-course-resources/chemistry/9-9-cell-potential-free-energy-study-guide/) every calculation used **standard conditions**: 1 M solutions and 1 atm gases. Under those conditions the reaction quotient Q equals 1, and the cell potential is E°.

A real cell does not stay at standard conditions. As a galvanic cell runs, reactant ions are used up and product ions build up. So Q changes, and the voltage on the meter, E (no ° sign), changes with it. A torch battery does not give its full voltage for ever: it runs down.

The key idea in this topic is:

> **The cell potential is a driving force towards equilibrium.** The further the reaction mixture is from equilibrium, the larger the size of E. At equilibrium there is no drive left, so E = 0.

## Comparing Q with 1 and with K

Remember Q has the same form as K but uses the concentrations right now. Pure solids and liquids are left out. For Fe(s) + Cu²⁺(aq) → Fe²⁺(aq) + Cu(s):

Q = [Fe²⁺] ÷ [Cu²⁺]

A galvanic cell has E° > 0, so K is greater than 1 (usually much greater). As the cell runs, Q rises from its starting value towards K. Four cases cover everything:

| Situation | Where the cell is | Effect on E |
|---|---|---|
| Q = 1 | standard conditions | E = E° |
| Q < 1 (relatively more reactant, less product) | **further** from equilibrium than standard | E **larger** than E° |
| 1 < Q < K (relatively more product, less reactant) | **closer** to equilibrium than standard | E **smaller** than E°, but still positive |
| Q = K | at equilibrium | E = 0; no current flows |

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="eq-title eq-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="eq-title">How cell potential changes as the reaction quotient changes</title>
<desc id="eq-desc">A graph with cell potential E on the vertical axis and ln Q on the horizontal axis. A straight line slopes downwards from left to right. Where ln Q equals zero, meaning Q equals 1, the line is at E equals E standard, marked with a filled circle. Further right, the line crosses the horizontal E equals zero line at the point labelled Q equals K, equilibrium, marked with an open circle. To the left of Q equals 1 the region is labelled further from equilibrium, E greater than E standard. Between Q equals 1 and Q equals K the region is labelled closer to equilibrium, E less than E standard. An arrow along the line pointing down and to the right is labelled as the cell runs.</desc>
<line x1="60" y1="20" x2="60" y2="300" stroke="#1d2b44" stroke-width="2"/>
<line x1="60" y1="260" x2="620" y2="260" stroke="#1d2b44" stroke-width="2"/>
<text x="20" y="40" font-size="14" font-weight="600" fill="#1d2b44">E</text>
<text x="600" y="290" font-size="14" font-weight="600" fill="#1d2b44">ln Q</text>
<text x="52" y="264" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<line x1="220" y1="20" x2="220" y2="300" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<text x="220" y="316" text-anchor="middle" font-size="12" fill="#1d2b44">Q = 1 (ln Q = 0)</text>
<line x1="60" y1="120" x2="220" y2="120" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<text x="52" y="124" text-anchor="end" font-size="12" fill="#1d2b44">E°</text>
<path d="M80 62.4 L600 276.5" stroke="#1d2b44" stroke-width="3"/>
<circle cx="220" cy="120" r="6" fill="#1d2b44"/>
<circle cx="560" cy="260" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="560" y="245" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">Q = K: E = 0</text>
<text x="80" y="200" font-size="12" fill="#1d2b44">Q &lt; 1: further from</text>
<text x="80" y="216" font-size="12" fill="#1d2b44">equilibrium, E &gt; E°</text>
<text x="300" y="110" font-size="12" fill="#1d2b44">1 &lt; Q &lt; K: closer to</text>
<text x="300" y="126" font-size="12" fill="#1d2b44">equilibrium, E &lt; E°</text>
<path d="M300 200 L410 245" stroke="#1d2b44" stroke-width="2" marker-end="url(#n1)"/>
<text x="190" y="240" font-size="12" font-style="italic" fill="#1d2b44">as the cell runs</text>
<defs><marker id="n1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. Cell potential against ln Q (schematic, not to scale). The filled circle is standard conditions (Q = 1, E = E°); the open circle is equilibrium (Q = K, E = 0). For most real cells K is enormous, so the open circle would be very far to the right.</figcaption>
</figure>

## The Nernst equation, read without a calculator

The Nernst equation puts Figure 1 into symbols:

> **E = E° − (RT / nF) ln Q**

You can read every key fact straight off it:

- If **Q = 1**, ln Q = 0, so **E = E°**.
- If **Q < 1**, ln Q is negative, so you subtract a negative number: **E > E°**.
- If **Q > 1**, ln Q is positive: **E < E°**.
- At equilibrium E = 0 and Q = K, so E° = (RT/nF) ln K. A positive E° matches K > 1, as you saw in Topic 9.9.

The factor RT/nF is small (RT/F is only 0.0257 V at 298 K). So a tenfold change in Q usually shifts E by only a few hundredths of a volt. Changing concentrations moves E **above or below** E°, but for most cells it does not change the sign of E unless the mixture is pushed past equilibrium.

This course treats the Nernst equation as a reasoning tool. Plugging numbers in is not enough on its own: always say what happens to Q, and why that moves the cell closer to or further from equilibrium.

## Why not Le Châtelier's principle?

You may be tempted to say "adding reactant shifts the equilibrium to the right, so the voltage goes up". The prediction happens to be right, but the reasoning is not. Le Châtelier's principle describes how a system **at equilibrium** responds to a disturbance. A working cell is **not at equilibrium**: that is exactly why it has a voltage. A cell at equilibrium has E = 0 and does nothing.

So use this chain instead: **change in concentration → change in Q → cell closer to or further from equilibrium (Q compared with K) → smaller or larger E.**

## Worked example 1: an iron–copper cell away from standard

**Question.** The cell Fe(s) | Fe²⁺(aq) || Cu²⁺(aq) | Cu(s) runs the reaction Fe(s) + Cu²⁺(aq) → Fe²⁺(aq) + Cu(s), with E° = +0.78 V. Predict whether E is greater than, less than or equal to 0.78 V in each case, and justify each answer.

(a) [Cu²⁺] = 1.0 M, [Fe²⁺] = 0.010 M
(b) [Cu²⁺] = 0.010 M, [Fe²⁺] = 1.0 M
(c) Starting from 1.0 M of each ion, both half-cells are diluted tenfold with water.
(d) Starting from 1.0 M of each ion, some Na₂S is added to the copper half-cell, and CuS precipitates.

**(a)** Q = 0.010 ÷ 1.0 = 0.010, which is less than 1. There is more reactant and less product than at standard conditions, so the cell is **further from equilibrium**: **E > 0.78 V**.

**(b)** Q = 1.0 ÷ 0.010 = 100, which is greater than 1 (but still far below K). The cell is **closer to equilibrium**: **E < 0.78 V**.

**(c)** Both concentrations fall to 0.10 M, so Q = 0.10 ÷ 0.10 = 1. Q is unchanged, so **E = 0.78 V**. (This works because both ions have the same coefficient. It is not true for every cell: see Practice Q6.)

**(d)** Precipitating CuS removes Cu²⁺, the reactant ion. [Cu²⁺] falls, so Q rises above 1. The cell is closer to equilibrium: **E < 0.78 V**.

**Numerical check.** With n = 2, E = 0.78 − (0.0257/2) ln Q. For (a), E = 0.78 + 0.059 = 0.84 V; for (b), E = 0.78 − 0.059 = 0.72 V. The numbers agree with the reasoning, and show that a hundredfold change in Q shifts E by only about 0.06 V here.

## Concentration cells

A **concentration cell** uses the same half-reaction in both half-cells, at different concentrations. Because the two half-reactions are identical, **E° = 0**. Even so, the cell gives a voltage, because Q ≠ 1. It is far from equilibrium, which for this cell means equal concentrations on both sides.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="cc-title cc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cc-title">A silver concentration cell</title>
<desc id="cc-desc">Two beakers joined by a wire through a voltmeter and by a salt bridge. The left beaker has a silver strip in dilute 0.0010 molar silver nitrate and is labelled anode, oxidation: Ag to Ag+ plus an electron, so the silver ion concentration rises. The right beaker has a silver strip in concentrated 0.50 molar silver nitrate and is labelled cathode, reduction: Ag+ plus an electron to Ag, so the silver ion concentration falls. An arrow on the wire shows electrons flowing from the dilute side to the concentrated side.</desc>
<rect x="290" y="20" width="60" height="40" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="46" text-anchor="middle" font-size="16" font-weight="600" fill="#1d2b44">V</text>
<path d="M130 110 V40 H290" fill="none" stroke="#1d2b44" stroke-width="2"/>
<path d="M350 40 H510 V110" fill="none" stroke="#1d2b44" stroke-width="2"/>
<path d="M170 28 H260" stroke="#1d2b44" stroke-width="2" marker-end="url(#c1)"/>
<path d="M380 28 H470" stroke="#1d2b44" stroke-width="2" marker-end="url(#c1)"/>
<text x="215" y="20" text-anchor="middle" font-size="12" fill="#1d2b44">e⁻ flow</text>
<text x="425" y="20" text-anchor="middle" font-size="12" fill="#1d2b44">e⁻ flow</text>
<path d="M60 140 V250 H220 V140" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<path d="M420 140 V250 H580 V140" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="120" y="110" width="20" height="120" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="500" y="110" width="20" height="120" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<path d="M190 220 V100 H450 V220" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="5 4"/>
<text x="320" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">salt bridge</text>
<text x="140" y="268" text-anchor="middle" font-size="12" fill="#1d2b44">Ag in 0.0010 M AgNO₃ (dilute)</text>
<text x="140" y="284" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">ANODE: Ag → Ag⁺ + e⁻ ([Ag⁺] rises)</text>
<text x="500" y="268" text-anchor="middle" font-size="12" fill="#1d2b44">Ag in 0.50 M AgNO₃ (concentrated)</text>
<text x="500" y="284" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">CATHODE: Ag⁺ + e⁻ → Ag ([Ag⁺] falls)</text>
<defs><marker id="c1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 2. A silver concentration cell. The labels name the dilute and concentrated solutions in words, so shading is not needed. Electrons flow from the dilute side to the concentrated side until the two concentrations are equal.</figcaption>
</figure>

To find the direction, ask: **which way does the system need to go to reach equilibrium?** The concentrations must become equal. The dilute side can only gain Ag⁺ if silver metal is **oxidised** there, so the dilute side is the **anode**. The concentrated side loses Ag⁺ when the ions are **reduced** to silver, so it is the **cathode**.

## Worked example 2: running a concentration cell

**Question.** For the cell in Figure 2 (equal volumes of solution in each beaker): (a) state the direction of electron flow; (b) describe how E changes as the cell runs; (c) find the Ag⁺ concentration in each beaker when the cell stops; (d) use the Nernst equation to estimate the starting potential.

**(a)** Electrons flow through the wire **from the silver strip in 0.0010 M AgNO₃ to the silver strip in 0.50 M AgNO₃**, for the reason given above.

**(b)** As the cell runs, the dilute side becomes more concentrated and the concentrated side becomes more dilute. The cell moves closer to equilibrium, so **E falls**, reaching **zero** when the concentrations are equal.

**(c)** One Ag⁺ is made at the anode for every Ag⁺ removed at the cathode, and the volumes are equal, so the final concentration is the average: (0.0010 + 0.50) ÷ 2 = **0.2505 M (about 0.25 M) in both beakers**.

**(d)** Overall: Ag⁺(0.50 M) → Ag⁺(0.0010 M), so Q = 0.0010 ÷ 0.50 = 0.0020 and n = 1. E = 0 − (0.0257/1) ln(0.0020) = **+0.160 V**. The positive value confirms the direction in (a); it is small because E° = 0.

## Worked example 3: a battery running down

**Question.** A zinc–copper cell (E° = +1.10 V) starts with 1.0 M Zn²⁺ and 1.0 M Cu²⁺ and is left connected to a bulb. Explain what happens to Q and E over time, and what a "dead" cell means.

1. The reaction Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s) makes Zn²⁺ and uses Cu²⁺, so Q = [Zn²⁺] ÷ [Cu²⁺] **rises** from 1.
2. As Q rises towards K, the cell gets closer to equilibrium, so E **falls** below 1.10 V.
3. When Q = K, E = 0. No more net reaction happens and no current flows: the cell is "dead".

**Interpretation.** A dead cell is a cell **at equilibrium**, not necessarily one with no reactant left. For this cell K is about 10³⁷, so at equilibrium [Cu²⁺] is extremely small, but in principle it is not zero.

## Common misconceptions

- **"Adding reactant shifts the equilibrium right, so E goes up (Le Châtelier)."** The cell is not at equilibrium. Reason with Q: less product or more reactant means Q falls, so the cell is further from equilibrium and E is larger.
- **"Changing the concentration changes E°."** E° is fixed (at a given temperature). Only E changes.
- **"E = 0 means all the reactants are used up."** E = 0 means Q = K: the cell is at equilibrium.
- **"A concentration cell gives no voltage because E° = 0."** It gives a voltage because Q ≠ 1; it stops only when the concentrations are equal.
- **"Diluting both half-cells never changes E."** Only if Q does not change. If the ions have different coefficients in the equation, dilution changes Q.
- **"Electrons in a concentration cell flow towards the dilute side to 'spread out'."** They flow **from** the dilute side (anode) **to** the concentrated side (cathode).
- **"A Nernst calculation is a full answer."** Explain the direction with Q first; the number is a check.

## Where this leads

Next, [Topic 9.11](/advanced-course-resources/chemistry/9-11-electrolysis-faradays-law-study-guide/) turns to electrolytic cells and connects the current and time to the amount of substance produced. Try the [practice questions](/advanced-course-resources/chemistry/9-10-cell-potential-under-nonstandard-conditions-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/9-10-cell-potential-under-nonstandard-conditions-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/9-10-cell-potential-under-nonstandard-conditions-checklist/) to consolidate.
