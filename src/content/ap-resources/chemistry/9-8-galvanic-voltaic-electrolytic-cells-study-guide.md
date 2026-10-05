---
resourceId: "mb-ap-chem-9.8-study-guide"
title: "Galvanic (Voltaic) and Electrolytic Cells: Study Guide (Chemistry 9.8)"
description: "Learn what each part of an electrochemical cell does, how galvanic and electrolytic cells differ, and how to trace electrons, ions, mass changes and gases from a cell diagram."
course: "chemistry"
unit: 9
topics: ["9.8"]
resourceType: "study-guide"
prerequisites:
  - "Oxidation numbers and balancing redox half-reactions (Topic 4.9)"
  - "Thermodynamic favourability and the sign of ΔG° (Topic 9.3)"
  - "Driving unfavourable processes with electrical energy (Topic 9.7)"
prerequisiteResources: ["mb-ap-chem-9.7-study-guide"]
learningObjectives:
  - "Describe the job of each part of an electrochemical cell: electrodes, half-cell solutions, salt bridge and meter or power supply"
  - "Distinguish galvanic cells (favourable reaction, produce electrical energy) from electrolytic cells (unfavourable reaction, need electrical energy)"
  - "Identify the anode as the site of oxidation and the cathode as the site of reduction in any cell, and write the half-reactions"
  - "Trace the direction of electron flow in the wire and of ion flow in the salt bridge or electrolyte"
  - "Predict and explain observations such as electrode mass changes and gas evolution, at both the particle and the lab scale"
  - "Explain how changing a part of the experimental set-up changes what the cell does"
skills: ["1", "2", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Molar masses: Mg 24.31, Cl 35.45, Ag 107.87, Pb 207.2 g mol⁻¹; R = 0.08206 L atm mol⁻¹ K⁻¹"
related: ["mb-ap-chem-9.8-revision-notes", "mb-ap-chem-9.8-practice", "mb-ap-chem-9.8-checklist"]
next: "mb-ap-chem-9.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A galvanic (voltaic) cell runs a thermodynamically favourable redox reaction and produces electrical energy. An electrolytic cell uses electrical energy to drive an unfavourable one."
  - "In every cell, oxidation happens at the anode and reduction happens at the cathode."
  - "Electrons flow through the external wire from the anode to the cathode. They never travel through the salt bridge or the solution."
  - "Ions carry the charge inside the cell: anions move towards the anode and cations move towards the cathode, keeping each half-cell electrically neutral."
  - "A metal anode that is oxidised loses mass; a cathode where metal ions are reduced gains mass. Gases form where a gas is a product of a half-reaction."
faqs:
  - question: "Do I need to label the electrodes as positive or negative?"
    answer: "Not for this course's exam: labelling electrodes positive or negative is excluded from assessment. Focus on which electrode is the anode (oxidation) and which is the cathode (reduction). The signs differ between galvanic and electrolytic cells, which is why relying on them causes mistakes."
  - question: "Why is it called a salt bridge if it is just a tube?"
    answer: "The tube or paper strip is filled with a solution of an unreactive salt, such as KNO₃. The ions of that salt move to balance the charge in the two half-cells. A tube of pure water would not work, because it has almost no ions."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Two kinds of electrochemical cell

In [Topic 9.7](/advanced-course-resources/chemistry/9-7-coupled-reactions-study-guide/) you saw that electrical energy can drive a reaction that would not happen by itself. An **electrochemical cell** is the device that links a redox reaction to an electric current. There are two kinds:

| | Galvanic (voltaic) cell | Electrolytic cell |
|---|---|---|
| Redox reaction | thermodynamically **favourable** (ΔG° < 0) | thermodynamically **unfavourable** (ΔG° > 0) |
| Energy change | chemical energy → electrical energy | electrical energy → chemical energy |
| What is in the circuit | a voltmeter, bulb or other device that *uses* the current | a **power supply** (battery or DC source) that *pushes* the current |
| Everyday example | a battery powering a torch | recharging that battery; electroplating; extracting reactive metals from molten salts |
| Oxidation happens at | the anode | the anode |
| Reduction happens at | the cathode | the cathode |

The last two rows are the same for both kinds. That is the most useful rule in this topic: **an**ode = **ox**idation, **red**uction = **cat**hode ("an ox, red cat").

## What each part of a galvanic cell does

The figure shows a galvanic cell built from lead and silver. One beaker holds a lead strip in lead(II) nitrate solution; the other holds a silver strip in silver nitrate solution.

<figure>
<svg viewBox="0 0 640 360" role="img" aria-labelledby="gal-title gal-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="gal-title">Galvanic cell made from lead and silver half-cells</title>
<desc id="gal-desc">Two beakers. The left beaker contains a lead strip in lead(II) nitrate solution and is labelled anode, oxidation: Pb to Pb2+ plus 2 electrons. The right beaker contains a silver strip in silver nitrate solution and is labelled cathode, reduction: Ag+ plus an electron to Ag. A wire joins the two strips through a voltmeter at the top; an arrow labelled electrons points along the wire from the lead strip to the silver strip. An upside-down U-shaped salt bridge containing potassium nitrate connects the two solutions; an arrow shows nitrate ions moving towards the lead beaker and another shows potassium ions moving towards the silver beaker.</desc>
<rect x="290" y="20" width="60" height="40" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="46" text-anchor="middle" font-size="16" font-weight="600" fill="#1d2b44">V</text>
<path d="M130 120 V40 H290" fill="none" stroke="#1d2b44" stroke-width="2"/>
<path d="M350 40 H510 V120" fill="none" stroke="#1d2b44" stroke-width="2"/>
<path d="M170 30 H260" stroke="#1d2b44" stroke-width="2" marker-end="url(#g1)"/>
<path d="M380 30 H470" stroke="#1d2b44" stroke-width="2" marker-end="url(#g1)"/>
<text x="215" y="22" text-anchor="middle" font-size="12" fill="#1d2b44">e⁻ flow</text>
<text x="425" y="22" text-anchor="middle" font-size="12" fill="#1d2b44">e⁻ flow</text>
<path d="M60 150 V290 H220 V150" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M420 150 V290 H580 V150" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="120" y="120" width="20" height="150" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="500" y="120" width="20" height="150" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="140" y="310" text-anchor="middle" font-size="12" fill="#1d2b44">Pb in Pb(NO₃)₂(aq)</text>
<text x="500" y="310" text-anchor="middle" font-size="12" fill="#1d2b44">Ag in AgNO₃(aq)</text>
<text x="140" y="330" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">ANODE (oxidation)</text>
<text x="140" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">Pb → Pb²⁺ + 2e⁻</text>
<text x="500" y="330" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">CATHODE (reduction)</text>
<text x="500" y="348" text-anchor="middle" font-size="12" fill="#1d2b44">Ag⁺ + e⁻ → Ag</text>
<path d="M190 240 V110 H450 V240" fill="none" stroke="#1d2b44" stroke-width="14" stroke-linejoin="round" opacity="0.25"/>
<path d="M190 240 V110 H450 V240" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="5 4"/>
<text x="320" y="100" text-anchor="middle" font-size="12" fill="#1d2b44">salt bridge, KNO₃(aq)</text>
<path d="M300 130 H230" stroke="#1d2b44" stroke-width="2" marker-end="url(#g1)"/>
<text x="265" y="148" text-anchor="middle" font-size="12" fill="#1d2b44">NO₃⁻</text>
<path d="M340 130 H410" stroke="#1d2b44" stroke-width="2" marker-end="url(#g1)"/>
<text x="375" y="148" text-anchor="middle" font-size="12" fill="#1d2b44">K⁺</text>
<defs><marker id="g1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. A lead–silver galvanic cell. Electrons move through the wire from anode to cathode; inside the salt bridge, anions move towards the anode beaker and cations towards the cathode beaker. Each label gives the half-reaction in words and symbols, so colour is not needed.</figcaption>
</figure>

- **Electrodes.** Solid conductors where electrons are lost or gained. Here both electrodes take part in the reaction (lead dissolves, silver is deposited). Some cells use **inert electrodes**, such as graphite or platinum, which only carry electrons.
- **Half-cell solutions.** They contain the ions that are oxidised or reduced (here Ag⁺) or that form (here Pb²⁺), and they let ions move.
- **Wire and voltmeter.** Electrons travel through the external wire. A voltmeter measures the potential difference between the electrodes; an ammeter or bulb shows that current is flowing.
- **Salt bridge.** A tube or paper strip soaked in a solution of an unreactive salt (KNO₃ here). It completes the circuit and keeps each beaker electrically neutral, while stopping the two solutions from mixing. If Ag⁺ ions reached the lead strip directly, they would react on the lead surface and the electrons would never pass through the wire.

### Why ions move the way they do

As the cell runs, the anode beaker gains Pb²⁺ ions, so it would build up positive charge. The cathode beaker loses Ag⁺ ions, leaving extra NO₃⁻, so it would build up negative charge. Charge build-up would stop the current within moments. The salt bridge prevents this: **NO₃⁻ ions move into the anode beaker** and **K⁺ ions move into the cathode beaker**. The general rule is that anions move towards the anode and cations move towards the cathode.

### The view at the particle level

- **At the anode surface:** Pb atoms each lose two electrons and become Pb²⁺ ions that move off into the solution. The electrons travel through the metal into the wire. Over time the lead strip gets thinner.
- **At the cathode surface:** Ag⁺ ions from the solution reach the silver surface, each gain one electron from the metal, and become Ag atoms stuck to the electrode. The silver strip gets heavier and the Ag⁺ concentration falls.

## Electrolytic cells

In an electrolytic cell, a **power supply** replaces the voltmeter. It pulls electrons from one electrode and pushes them into the other, forcing an unfavourable reaction to happen.

<figure>
<svg viewBox="0 0 640 320" role="img" aria-labelledby="ely-title ely-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ely-title">Electrolytic cell for molten magnesium chloride</title>
<desc id="ely-desc">A single container of molten magnesium chloride with two graphite electrodes connected to a DC power supply. The left electrode is the anode, where chloride ions are oxidised to chlorine gas, shown as bubbles. The right electrode is the cathode, where magnesium ions are reduced to magnesium metal. Arrows show electrons leaving the anode, passing through the power supply and entering the cathode. Chloride ions move towards the anode and magnesium ions move towards the cathode.</desc>
<rect x="235" y="20" width="170" height="44" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="47" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">DC power supply</text>
<path d="M200 120 V42 H235" fill="none" stroke="#1d2b44" stroke-width="2"/>
<path d="M405 42 H440 V120" fill="none" stroke="#1d2b44" stroke-width="2"/>
<path d="M200 110 V60" stroke="#1d2b44" stroke-width="2" marker-end="url(#e1)"/>
<path d="M440 60 V110" stroke="#1d2b44" stroke-width="2" marker-end="url(#e1)"/>
<text x="150" y="85" font-size="12" fill="#1d2b44">e⁻ out</text>
<text x="452" y="85" font-size="12" fill="#1d2b44">e⁻ in</text>
<path d="M120 140 V270 H520 V140" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="190" y="120" width="20" height="120" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="430" y="120" width="20" height="120" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="220" cy="200" r="5" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="225" cy="180" r="4" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="222" cy="160" r="5" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200" y="290" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">ANODE (oxidation)</text>
<text x="200" y="308" text-anchor="middle" font-size="12" fill="#1d2b44">2Cl⁻ → Cl₂(g) + 2e⁻</text>
<text x="440" y="290" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">CATHODE (reduction)</text>
<text x="440" y="308" text-anchor="middle" font-size="12" fill="#1d2b44">Mg²⁺ + 2e⁻ → Mg</text>
<text x="320" y="190" text-anchor="middle" font-size="12" fill="#1d2b44">molten MgCl₂</text>
<path d="M300 220 H240" stroke="#1d2b44" stroke-width="2" marker-end="url(#e1)"/>
<text x="270" y="240" text-anchor="middle" font-size="12" fill="#1d2b44">Cl⁻</text>
<path d="M340 220 H420" stroke="#1d2b44" stroke-width="2" marker-end="url(#e1)"/>
<text x="380" y="240" text-anchor="middle" font-size="12" fill="#1d2b44">Mg²⁺</text>
<text x="235" y="150" font-size="11" fill="#1d2b44">Cl₂ bubbles</text>
<defs><marker id="e1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 2. Electrolysis of molten magnesium chloride. The power supply drives electrons out of the anode and into the cathode. Chlorine gas forms at the anode; magnesium metal forms at the cathode.</figcaption>
</figure>

The overall reaction, MgCl₂(l) → Mg(l) + Cl₂(g), is the reverse of the very favourable reaction between magnesium and chlorine, so it needs a continuous supply of electrical energy. Notice:

- Oxidation (of Cl⁻) is still at the anode; reduction (of Mg²⁺) is still at the cathode.
- Electrons still flow through the external circuit from the anode to the cathode; the power supply is what moves them.
- There is no salt bridge, because both half-reactions happen in the same molten salt. The ions of the melt carry the charge: Cl⁻ moves towards the anode and Mg²⁺ towards the cathode.

**About electrode signs (not assessed).** In a galvanic cell the anode is the negative electrode; in an electrolytic cell the anode is the one joined to the positive terminal of the supply. The signs swap between the two kinds of cell, and this course does not assess them. Use "oxidation at the anode" instead.

## Worked example 1: reading a galvanic cell from observations

**Question.** The cell in Figure 1 runs for an hour. The silver electrode gains 0.863 g. (a) Identify the anode and cathode and write the half-reactions and the overall equation. (b) State the direction of electron flow and of K⁺ and NO₃⁻ movement. (c) Find the change in mass of the lead electrode.

**(a)** The silver electrode gains mass, so Ag⁺ ions are being reduced to Ag there. Reduction happens at the cathode, so **silver is the cathode** and **lead is the anode**.
- Anode (oxidation): Pb(s) → Pb²⁺(aq) + 2e⁻
- Cathode (reduction): Ag⁺(aq) + e⁻ → Ag(s)
- Multiply the cathode equation by 2 so the electrons cancel: **Pb(s) + 2Ag⁺(aq) → Pb²⁺(aq) + 2Ag(s)**

**(b)** Electrons flow through the wire **from the lead electrode to the silver electrode**. In the salt bridge, **NO₃⁻ moves towards the lead beaker** and **K⁺ moves towards the silver beaker**.

**(c)**
1. Moles of Ag deposited: 0.863 g ÷ 107.87 g mol⁻¹ = 0.008000 mol.
2. Each Ag needs 1 electron, so 0.008000 mol of electrons passed.
3. Each Pb gives 2 electrons, so moles of Pb oxidised = 0.008000 ÷ 2 = 0.004000 mol.
4. Mass of Pb lost: 0.004000 mol × 207.2 g mol⁻¹ = 0.829 g.

**Answer.** The lead electrode **loses 0.829 g**.

**Check.** Two Ag are deposited for every Pb that dissolves, but a Pb atom is almost twice as heavy as an Ag atom, so the two mass changes should be similar in size. They are.

## Worked example 2: an electrolytic cell for magnesium

**Question.** The cell in Figure 2 produces 4.86 g of magnesium. (a) Explain why this cell needs a power supply. (b) Write the half-reactions and say where gas forms. (c) What volume would the chlorine occupy at 298 K and 1.00 atm?

**(a)** Magnesium and chlorine react together very favourably to form MgCl₂. The cell runs the reverse of that reaction, which is therefore thermodynamically unfavourable (ΔG° > 0). It happens only while the power supply provides electrical energy, so this is an electrolytic cell.

**(b)** Anode (oxidation): 2Cl⁻ → Cl₂(g) + 2e⁻. Cathode (reduction): Mg²⁺ + 2e⁻ → Mg. **Gas (chlorine) forms at the anode.**

**(c)**
1. Moles of Mg: 4.86 g ÷ 24.31 g mol⁻¹ = 0.1999 mol.
2. Both half-reactions involve 2 electrons, so 1 mol of Cl₂ forms for every 1 mol of Mg: n(Cl₂) = 0.1999 mol.
3. V = nRT / P = 0.1999 mol × 0.08206 L atm mol⁻¹ K⁻¹ × 298 K ÷ 1.00 atm = **4.89 L**.

**Interpretation.** The electron count links the two electrodes: whatever passes into the cathode must have left the anode.

## Changing the set-up: what happens?

Exam questions often ask how a change to the apparatus changes the results. Reason from the job each part does.

| Change | Effect | Reason |
|---|---|---|
| Remove the salt bridge | Current stops almost at once | Charge builds up in each beaker; there is no path for ions to balance it |
| Fill the bridge with distilled water | Little or no current | Pure water has almost no ions to carry charge |
| Use a bridge salt whose ions react with a half-cell ion (e.g. KCl next to Ag⁺) | Performance falls | A precipitate (AgCl) forms, removing Ag⁺ and blocking the bridge |
| Use a larger anode | Cell runs for longer; voltage unchanged | More metal is available to oxidise, but each atom behaves the same way |
| Replace the voltmeter with a power supply pushing the other way | The cell becomes electrolytic | Electrical energy now drives the reverse, unfavourable reaction (like recharging a battery) |
| Let the two solutions mix | Little or no current in the wire | Electrons transfer directly between particles in solution, and the energy is lost as heat |

## Common misconceptions

- **"Electrons flow through the salt bridge."** No. Electrons only move through the wire and electrodes. Ions carry charge through the salt bridge and the solutions.
- **"The salt bridge supplies the reacting ions."** Its ions are chosen *not* to react. They only balance charge.
- **"The anode is always negative."** That is true only for galvanic cells, and signs are not assessed. Anode = oxidation is always true.
- **"In an electrolytic cell, electrons flow from cathode to anode."** In both types they flow through the external circuit from the anode to the cathode.
- **"The cathode always gains mass."** Only if a metal is deposited there. A gas or a dissolved ion can also be the product.
- **"Bigger electrodes give a bigger voltage."** Electrode size changes how much material can react, not the voltage.
- **"Current flowing means the reaction is favourable."** In an electrolytic cell, the current flows *because* a power supply forces an unfavourable reaction.

## Where this leads

Next, [Topic 9.9](/advanced-course-resources/chemistry/9-9-cell-potential-free-energy-study-guide/) puts numbers on cells: you will calculate cell potentials from half-reaction data and link the sign of E°cell to ΔG°. Later topics use the same cells to explain non-standard conditions and to relate current to the amount of product. Try the [practice questions](/advanced-course-resources/chemistry/9-8-galvanic-voltaic-electrolytic-cells-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/9-8-galvanic-voltaic-electrolytic-cells-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/9-8-galvanic-voltaic-electrolytic-cells-checklist/) to consolidate.
