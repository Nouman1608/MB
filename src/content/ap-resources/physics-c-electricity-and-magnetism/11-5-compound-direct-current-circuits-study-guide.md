---
resourceId: "mb-ap-physcem-11.5-study-guide"
title: "Compound Direct Current Circuits: Study Guide (Physics C: E&M 11.5)"
description: "Guide to compound DC circuits for the calculus-based course: series and parallel, equivalent resistance, internal resistance and terminal voltage, and how ammeters and voltmeters are used."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.5"]
resourceType: "study-guide"
prerequisites:
  - "Ohm's law, ΔV = IR, and what resistance means (Topic 11.3)"
  - "Power in circuit elements and bulb brightness (Topic 11.4)"
  - "Closed loops, junctions and schematic symbols (Topic 11.2)"
prerequisiteResources: ["mb-ap-physcem-11.4-study-guide"]
learningObjectives:
  - "Decide whether elements are in series, in parallel or neither, from the paths that charge can take"
  - "Find the equivalent resistance of a network by combining series and parallel groups step by step"
  - "Use the equivalent resistance to find the current in, and potential difference across, every resistor"
  - "Model a real battery as an ideal emf in series with an internal resistance, and calculate its terminal voltage"
  - "Explain where ammeters and voltmeters go, why ideal meters do not disturb a circuit, and how real meters do"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "No constants needed. Keep unrounded values until the final step; give answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-11.5-revision-notes", "mb-ap-physcem-11.5-practice", "mb-ap-physcem-11.5-checklist"]
next: "mb-ap-physcem-11.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Series: one path, so the same current passes through every element. Parallel: several paths between the same two points, so every path has the same potential difference."
  - "Series resistances add: R_eq = R₁ + R₂ + …. Parallel resistances add as reciprocals: 1/R_eq = 1/R₁ + 1/R₂ + …."
  - "Adding a parallel path always lowers the equivalent resistance; a parallel group has less resistance than its smallest member."
  - "A real battery acts like an ideal emf ℰ in series with an internal resistance r, so its terminal voltage is ΔV = ℰ − Ir when there is a current I."
  - "Ammeters go in series and ideally have zero resistance; voltmeters go in parallel and ideally have infinite resistance. Real meters change what they measure."
faqs:
  - question: "Are two resistors in parallel just because they are drawn side by side?"
    answer: "No. Two elements are in parallel only if both of their ends are connected to the same two points, with nothing else between. Trace the wires from junction to junction; the layout on the page does not matter."
  - question: "Is the emf the same as the voltage across a battery?"
    answer: "Only when there is no current in the battery. With a current I, the terminal voltage is ℰ − Ir, which is less than the emf. Unless a question says otherwise, batteries are ideal (r = 0), and then the two are equal."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 11.5. It turns the loops and junctions of Topic 11.2 and Ohm's law from Topic 11.3 into a method for solving circuits with several resistors. Unless a question says otherwise, treat every battery, wire and meter as **ideal**. Circuits with batteries of different emf connected in parallel are outside this course.

## Series and parallel: it is about the paths

Whether elements are "in series" or "in parallel" depends on the **paths charge can take**, not on how the diagram looks.

- **Series.** Elements are in series if any charge that passes through one of them must go through all of them, with no other route available. Charge is conserved and does not pile up in a steady circuit, so **the current is the same in every element in series**.
- **Parallel.** Elements are in parallel if their ends are joined to the **same two points**, so charge arriving at one point can take any one of the paths to the other. The potential is the same all along an ideal wire, so **every parallel path has the same potential difference across it**.

Many elements are neither. In Figure 1, R₁ is not in series with R₃ alone, because charge leaving R₁ can go through R₂ instead. R₃ and R₄ are in series with each other, and that pair is in parallel with R₂.

**Test for series:** is there a junction between the two elements? If yes, they are not in series. **Test for parallel:** are both ends of each element connected (by wire only) to the same two junctions? If yes, they are in parallel.

## Equivalent resistance

A group of resistors can be replaced by a single **equivalent resistance** R_eq that draws the same current from the same potential difference.

**Series.** The same current I passes through each resistor, and the potential differences add: ΔV = IR₁ + IR₂ + … = I(R₁ + R₂ + …). So

**R_eq = R₁ + R₂ + R₃ + …** (series)

**Parallel.** Each resistor has the same ΔV, and the currents add: I = ΔV/R₁ + ΔV/R₂ + … = ΔV(1/R₁ + 1/R₂ + …). So

**1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + …** (parallel)

Three consequences follow.

- **Adding a path lowers R_eq.** Each new parallel path gives charge another way through, so the total current for the same ΔV rises. The reciprocal sum gets bigger, so R_eq gets smaller.
- **A parallel group has less resistance than its smallest member.** For example, 4.0 Ω in parallel with 100 Ω gives 3.85 Ω, a little less than 4.0 Ω.
- **Two resistors only:** R_eq = R₁R₂/(R₁ + R₂), "product over sum". For n identical resistors R in parallel, R_eq = R/n. Do not use "product over sum" for three at once.

### Reducing a network step by step

1. Find the **innermost** group that is purely series or purely parallel, and replace it with its R_eq.
2. Redraw. A new series or parallel group usually appears.
3. Repeat until one resistor is left, then find the total current from I = ℰ/R_eq.
4. **Work back out:** use the total current and ΔV = IR to find the potential difference across each group, then the current in each branch.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="cdc-net-title cdc-net-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cdc-net-title">A compound circuit with four resistors</title>
<desc id="cdc-net-desc">An ideal battery of emf 24 volts on the left, positive terminal at the top. The top wire runs right through resistor R1 of 6 ohms to a junction P. From P, one branch goes straight down through resistor R2 of 30 ohms to a junction Q on the bottom wire. The top wire also continues right from P and then down through R3 of 6 ohms and R4 of 9 ohms, one after the other, to the bottom wire. The bottom wire returns through Q to the negative terminal. An arrow labelled I on the top wire points right.</desc>
<defs><marker id="cdc-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="70" y1="60" x2="70" y2="144"/><line x1="52" y1="144" x2="88" y2="144" stroke-width="2.5"/><line x1="61" y1="156" x2="79" y2="156" stroke-width="5"/><line x1="70" y1="156" x2="70" y2="250"/>
<line x1="70" y1="60" x2="150" y2="60"/><polyline points="150,60 155,50 165,70 175,50 185,70 195,50 205,70 210,60"/><line x1="210" y1="60" x2="460" y2="60"/>
<line x1="320" y1="60" x2="320" y2="125"/><polyline points="320,125 310,130 330,140 310,150 330,160 310,170 330,180 320,185"/><line x1="320" y1="185" x2="320" y2="250"/>
<line x1="460" y1="60" x2="460" y2="85"/><polyline points="460,85 450,90 470,98 450,106 470,114 450,122 470,130 460,135"/><line x1="460" y1="135" x2="460" y2="170"/>
<polyline points="460,170 450,175 470,183 450,191 470,199 450,207 470,215 460,220"/><line x1="460" y1="220" x2="460" y2="250"/>
<line x1="460" y1="250" x2="70" y2="250"/>
<line x1="95" y1="60" x2="130" y2="60" marker-end="url(#cdc-arr)"/>
</g>
<circle cx="320" cy="60" r="4" fill="#1d2b44"/><circle cx="320" cy="250" r="4" fill="#1d2b44"/>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="96" y="140" font-weight="bold">+</text>
<text x="30" y="155">24 V</text>
<text x="112" y="50">I</text>
<text x="180" y="38">R₁ = 6.0 Ω</text>
<text x="320" y="44">P</text><text x="320" y="274">Q</text>
<text x="375" y="160">R₂ = 30 Ω</text>
<text x="510" y="114">R₃ = 6.0 Ω</text>
<text x="510" y="199">R₄ = 9.0 Ω</text>
</g>
</svg>
<figcaption>Figure 1. The circuit for Worked example 1. R₃ and R₄ are in series (no junction between them). That pair and R₂ both connect P to Q, so they are in parallel. R₁ carries the total current, so it is in series with the whole parallel group.</figcaption>
</figure>

## Worked example 1: currents and potential differences in a network

**Question.** In Figure 1 the battery is ideal with ℰ = 24 V. (a) Find R_eq. (b) Find the current and potential difference for every resistor. (c) R₂ is removed, leaving a gap. Compare the current from the battery with your answer to (b).

**(a) Equivalent resistance.**

1. R₃ and R₄ are in series: 6.0 + 9.0 = 15 Ω.
2. That 15 Ω branch is in parallel with R₂ = 30 Ω: 1/R_p = 1/30 + 1/15 = 3/30, so R_p = **10 Ω**. (Product over sum: 30 × 15 ÷ 45 = 10 Ω.)
3. R₁ is in series with the group: R_eq = 6.0 + 10 = **16 Ω**.

**(b) Work back out.**

1. Total current: I = ℰ/R_eq = 24 V ÷ 16 Ω = **1.5 A**. All of it passes through R₁.
2. ΔV₁ = (1.5 A)(6.0 Ω) = **9.0 V**.
3. Across the parallel group: ΔV_PQ = (1.5 A)(10 Ω) = **15 V**. Check: 9.0 V + 15 V = 24 V, the full emf.
4. R₂ has the full 15 V across it: I₂ = 15 ÷ 30 = **0.50 A**.
5. The R₃–R₄ branch also has 15 V across it: I₃₄ = 15 ÷ 15 = **1.0 A**. Then ΔV₃ = (1.0)(6.0) = **6.0 V** and ΔV₄ = (1.0)(9.0) = **9.0 V**.

**Check.** The branch currents add up to the total: 0.50 + 1.0 = 1.5 A. The branch with less resistance (15 Ω) carries the larger current, twice as much as the 30 Ω branch.

**(c) R₂ removed.** Now everything is in series: R_eq = 6.0 + 15 = 21 Ω, and I = 24 ÷ 21 = **1.14 A**, less than 1.5 A. Removing a path **raised** the equivalent resistance and **lowered** the battery current. The potential difference across R₁ falls to 6.86 V, while the R₃–R₄ branch now has 17.1 V across it, more than before.

**Interpretation.** Changing one branch changes the potential difference across the others. In this circuit only the battery's emf stays fixed.

## Real batteries and real wires

**Ideal wires** have negligible resistance. This is a good model because copper leads have far less resistance than the other elements. But the model only works when the circuit **contains other resistance**. A bare wire across an ideal battery would give I = ℰ/0, which is meaningless. In a real circuit, the wire's own small resistance and the battery's internal resistance then set the current.

The **emf** ℰ of a battery is the potential difference it would supply if it were ideal. You can measure it as the potential difference across the terminals when there is **no current** in the battery.

A real battery has **internal resistance** r. Model it as an ideal emf in series with a resistor r, inside the battery's casing (Figure 2). When there is a current I, there is a potential drop Ir inside, so the potential difference you can measure across the terminals is

**ΔV_terminal = ℰ − Ir**

The more current the battery delivers, the lower its terminal voltage. The current in a single loop is I = ℰ/(R + r), where R is the external resistance.

<figure>
<svg viewBox="0 0 560 290" role="img" aria-labelledby="cdc-bat-title cdc-bat-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cdc-bat-title">Model of a real battery, with meters connected</title>
<desc id="cdc-bat-desc">A dashed box labelled real battery contains an ideal emf symbol and a resistor labelled r in series between two terminals, B on the left (negative) and A on the right (positive). Outside the box, terminal A connects through an ammeter, shown as a circle with the letter A, to a load resistor R on the right, and the circuit returns along the bottom wire to terminal B. A voltmeter, a circle with the letter V, is connected in its own branch between a junction just right of terminal A and a junction on the left-hand wire leading to terminal B, so it is in parallel with the battery. An arrow labelled I after the ammeter points right.</desc>
<defs><marker id="cdc-arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="80" y="40" width="220" height="80" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="80" y1="80" x2="140" y2="80"/><line x1="140" y1="71" x2="140" y2="89" stroke-width="5"/><line x1="152" y1="62" x2="152" y2="98" stroke-width="2.5"/><line x1="152" y1="80" x2="190" y2="80"/>
<polyline points="190,80 195,70 205,90 215,70 225,90 235,70 245,90 250,80"/><line x1="250" y1="80" x2="300" y2="80"/>
<line x1="300" y1="80" x2="360" y2="80"/><circle cx="374" cy="80" r="14"/><line x1="388" y1="80" x2="480" y2="80"/>
<line x1="480" y1="80" x2="480" y2="120"/><polyline points="480,120 470,125 490,135 470,145 490,155 470,165 490,175 480,180"/><line x1="480" y1="180" x2="480" y2="250"/>
<line x1="480" y1="250" x2="40" y2="250"/><line x1="40" y1="250" x2="40" y2="80"/><line x1="40" y1="80" x2="80" y2="80"/>
<line x1="330" y1="80" x2="330" y2="190"/><line x1="330" y1="190" x2="204" y2="190"/><circle cx="190" cy="190" r="14"/><line x1="176" y1="190" x2="40" y2="190"/>
<line x1="405" y1="80" x2="445" y2="80" marker-end="url(#cdc-arr2)"/>
</g>
<circle cx="80" cy="80" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><circle cx="300" cy="80" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="330" cy="80" r="4" fill="#1d2b44"/><circle cx="40" cy="190" r="4" fill="#1d2b44"/>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="374" y="85" font-weight="bold">A</text><text x="190" y="195" font-weight="bold">V</text>
<text x="162" y="60" font-weight="bold">+</text>
<text x="146" y="112">ℰ</text><text x="220" y="112">r</text>
<text x="425" y="70">I</text>
<text x="518" y="155">R</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="190" y="32">real battery (dashed box)</text>
<text x="84" y="138">B (−)</text><text x="296" y="138">A (+)</text>
<text x="374" y="112">ammeter</text><text x="190" y="225">voltmeter reads ℰ − Ir</text>
<text x="518" y="200">load</text>
</g>
</svg>
<figcaption>Figure 2. A real battery modelled as an ideal emf ℰ in series with an internal resistance r, both inside the dashed box. You can only connect to the terminals A and B. The ammeter is in series with the load; the voltmeter is in parallel with the battery and reads the terminal voltage.</figcaption>
</figure>

## Worked example 2: finding internal resistance

**Question.** With nothing connected, an ideal voltmeter across a battery reads 6.0 V. A 2.5 Ω resistor is then connected across the battery, and the voltmeter reading falls to 5.0 V. (a) Find the current and the internal resistance. (b) Find the terminal voltage when the load is replaced by a 1.0 Ω resistor. (c) A student connects a thick wire of resistance 0.010 Ω across the terminals. Estimate the current, and explain why "ideal wire, ideal battery" fails here.

**(a)** With no current, the reading is the emf: ℰ = 6.0 V.

1. The voltmeter now reads the potential difference across the 2.5 Ω resistor: I = 5.0 V ÷ 2.5 Ω = **2.0 A**.
2. The "missing" 1.0 V is dropped inside the battery: Ir = 6.0 − 5.0 = 1.0 V, so r = 1.0 V ÷ 2.0 A = **0.50 Ω**.

**(b)** I = ℰ/(R + r) = 6.0 ÷ (1.0 + 0.50) = **4.0 A**, and ΔV_terminal = 6.0 − (4.0)(0.50) = **4.0 V** (the same as IR = 4.0 × 1.0). A smaller load draws more current, so the terminal voltage drops further.

**(c)** I = 6.0 ÷ (0.010 + 0.50) = **11.8 A**, about 12 A. Almost all of the emf is dropped across the internal resistance; the terminal voltage is only about 0.12 V. With an ideal battery and an ideal wire the model would predict an infinite current. Neglecting the wire's resistance is only allowed when something else in the circuit has resistance; here, that "something else" is the battery's own r.

**Check.** In (a) the 2.5 Ω load receives (5.0)(2.0) = 10 W while (2.0)²(0.50) = 2.0 W is dissipated inside the battery, so the battery transfers 12 W = ℰI in total, as energy conservation requires (Topic 11.4).

## Measuring current and potential difference

**Ammeters** measure the current at one point in a circuit. The current must pass **through** the meter, so an ammeter is connected **in series** with the element whose current you want. An **ideal ammeter has zero resistance**, so adding it does not change the current.

**Voltmeters** measure the potential difference between two points. A voltmeter is connected **in parallel** with the element, one lead on each side. An **ideal voltmeter has infinite resistance**, so no charge flows through it and the rest of the circuit is unchanged.

**Real meters change the circuit.** A real ammeter adds a small resistance in series, so the current falls a little. A real voltmeter provides a parallel path, which lowers the resistance of whatever it is connected across.

*Example of meter loading.* Two 10 kΩ resistors are in series with an ideal 12 V battery. Each should have 6.0 V across it. Connect a voltmeter of resistance 10 kΩ across one resistor. That resistor and the meter now form a 5.0 kΩ parallel pair, so the meter reads 12 × 5.0 ÷ (10 + 5.0) = **4.0 V**, not 6.0 V. A 1.0 MΩ voltmeter would read 5.97 V. A good voltmeter needs a resistance much larger than the resistance it is connected across; a good ammeter needs a resistance much smaller than the resistance of the loop it is in.

Connecting a meter the wrong way round in this sense causes trouble. An ammeter placed in parallel provides a near-zero-resistance path: it shorts the element and may carry a dangerously large current. A voltmeter placed in series adds a huge resistance, so the current almost stops.

## Brightness of bulbs in compound circuits

Topic 11.4 showed that bulb brightness rises with power, P = I²R = (ΔV)²/R. To predict brightness changes, follow this order: change in R_eq → change in total current → change in ΔV across each part → change in power of each bulb. With an **ideal** battery, adding a bulb in parallel directly across the battery leaves the other bulbs on that battery unchanged, because each still has ℰ across it. With a **real** battery, the extra current raises Ir, the terminal voltage falls, and every bulb dims slightly.

## Common misconceptions

- **"Side by side on the page means parallel."** Only shared end points make elements parallel. Trace the junctions.
- **"Current is used up by the first resistor."** In series, the current is the same in every element. Energy is transferred; charge is not lost.
- **"Adding a resistor always increases resistance."** Only in series. Adding one in parallel adds a path and lowers R_eq.
- **"The parallel resistance is the average."** It is always less than the smallest resistance in the group.
- **Forgetting the last step.** 1/R_eq = 0.50 Ω⁻¹ means R_eq = 2.0 Ω, not 0.50 Ω.
- **"A battery supplies a fixed current."** An ideal battery fixes the potential difference; the current depends on the circuit.
- **"The terminal voltage is always the emf."** Only when no current is drawn from a real battery.
- **"Ignore wire resistance in every case."** Not when the wire is the only thing connected across the battery.
- **Ammeter in parallel or voltmeter in series.** Ammeters go in the path of the current; voltmeters go across the element.

## Where this leads

Series and parallel rules work only when a network can be broken into such groups. For other circuits, and for circuits with more than one battery, you need Kirchhoff's rules: the loop rule (energy conservation) in the next topic and the junction rule (charge conservation) in Topic 11.7. Topic 11.8 then applies the same tools to circuits that contain capacitors. Look back at [Topic 11.4, Electric Power](/advanced-course-resources/physics-c-electricity-and-magnetism/11-4-electric-power-study-guide/) for brightness and energy. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/11-5-compound-direct-current-circuits-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/11-5-compound-direct-current-circuits-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-5-compound-direct-current-circuits-checklist/). The next study guide is [Topic 11.6, Kirchhoff's Loop Rule](/advanced-course-resources/physics-c-electricity-and-magnetism/11-6-kirchhoffs-loop-rule-study-guide/).
