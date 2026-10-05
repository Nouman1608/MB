---
resourceId: "mb-ap-phys2-11.1-study-guide"
title: "Electric Current: Study Guide (Physics 2 11.1)"
description: "Current as the rate of charge flow through a wire: I = ΔQ/Δt, what makes charge move, random motion versus drift, and the direction of conventional current."
course: "physics-2"
unit: 11
topics: ["11.1"]
resourceType: "study-guide"
prerequisites:
  - "Electric charge, the elementary charge e and conservation of charge (Topics 10.1–10.2)"
  - "Electric potential and potential difference (Topic 10.5)"
  - "Reading the area under a graph"
prerequisiteResources: ["mb-ap-phys2-10.7-study-guide"]
learningObjectives:
  - "Define current as the rate at which charge crosses a cross-section of a conductor and use I = ΔQ/Δt"
  - "Explain that a potential difference (emf) from a source makes charge move around a circuit"
  - "Explain why zero current does not mean the charge carriers are at rest"
  - "Give the direction of conventional current and relate it to the motion of electrons or ions"
  - "Find the charge that passes a point from the area under a current–time graph"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "e = 1.60 × 10⁻¹⁹ C. Convert minutes and hours to seconds before using I = ΔQ/Δt"
related: ["mb-ap-phys2-11.1-revision-notes", "mb-ap-phys2-11.1-practice", "mb-ap-phys2-11.1-checklist"]
next: "mb-ap-phys2-11.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Current is the rate at which charge passes through a cross-section of a wire: I = ΔQ/Δt. 1 A = 1 C/s."
  - "Charge moves around a circuit because a source, such as a battery, keeps a potential difference (emf) across it."
  - "Zero current means zero net motion of charge. The carriers still move quickly in random directions."
  - "Current is a scalar, but it has a direction: conventional current is the way positive charge would move."
  - "In metal wires the carriers are electrons, so they actually move opposite to the conventional current."
faqs:
  - question: "If electrons carry the current in a wire, why do we draw current the other way?"
    answer: "The convention was fixed before anyone knew which charges move. Positive charge moving one way and negative charge moving the other way give the same current, so the convention works for every circuit. In this course circuit diagrams use conventional current unless a question says otherwise."
  - question: "Is current a vector?"
    answer: "No. Current has a direction along the wire, but it is not a direction in space. When a wire bends, the current does not change, and currents meeting at a point add as ordinary numbers, not as vectors."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What current measures

Imagine standing beside a wire and watching an imaginary slice across it, a **cross-section**. Charge passes through that slice. **Electric current** is the rate at which it does so:

**I = ΔQ / Δt**

Here ΔQ is the charge that passes through the cross-section in a time Δt. The SI unit of current is the **ampere (A)**, and 1 A = 1 C/s.

So if 0.50 A flows for 10 s, the charge that passes any cross-section is ΔQ = IΔt = (0.50 A)(10 s) = 5.0 C. Each electron carries a charge of size e = 1.60 × 10⁻¹⁹ C, so that is 5.0 ÷ (1.60 × 10⁻¹⁹) = 3.1 × 10¹⁹ electrons. A current of 1 A means about 6.25 × 10¹⁸ electrons pass each second. Even a small current involves a huge number of carriers.

Three points about the definition:

- Current is measured **at a place**: a cross-section of the wire. It is not something stored inside a component.
- The definition counts **net** charge. Charge moving one way through the slice adds to ΔQ; charge moving back the other way subtracts.
- If the current is not steady, ΔQ/Δt over a long interval gives the **average** current over that interval.

## What makes charge move

A wire on its own, not connected to anything, carries no current. Charge moves around a circuit only when something keeps a **potential difference** across it. A battery does this. Chemical reactions inside it keep one terminal at a higher electric potential than the other.

You met potential difference in Unit 10: it is the change in electric potential energy per unit charge, measured in volts (1 V = 1 J/C). The potential difference that a source such as a battery provides is often called its **electromotive force**, or **emf**, with the symbol ℰ. Despite its name, emf is **not a force**. It is energy per unit charge, in volts.

When the wire is connected across the battery, an electric field is set up inside the wire, along its length. That field pushes on the charge carriers that are already in the wire, everywhere at once. The battery does not supply the charge. The carriers were in the wire all along. The battery supplies the **energy** that keeps them moving around the loop.

## Random motion and drift

The free electrons in a metal are never still. Even in a wire with no current, they move in random directions at very high speeds, of the order of 10⁶ m/s, bouncing off the atoms of the metal. For every electron crossing a slice to the left, on average another crosses to the right. The net charge through the slice is zero, so the current is zero.

So **zero current does not mean the carriers are at rest**. It means their **net** motion is zero.

When a potential difference is applied, the electric field adds a small, steady motion in one direction on top of the random motion. This slow overall movement is called the **drift**. The current depends on the drift, not on the random motion, because only the drift carries net charge through a cross-section.

**Background (not needed for the exam).** For a wire of cross-sectional area A, with n free carriers per cubic metre each of charge q, the drift speed is v = I / (nqA). Copper has about 8.5 × 10²⁸ free electrons per cubic metre. For a current of 2.0 A in a copper wire of cross-section 1.0 mm² (1.0 × 10⁻⁶ m²), v = 2.0 ÷ (8.5 × 10²⁸ × 1.60 × 10⁻¹⁹ × 1.0 × 10⁻⁶) = 1.5 × 10⁻⁴ m/s, about 0.15 mm/s. At that speed an electron would take about 1.9 hours to drift 1.0 m. Yet a lamp lights almost the moment you close the switch. The reason is that the field acts on carriers all along the wire at almost the same time, including those already inside the lamp. No electron has to travel from the battery to the lamp first.

## Which way is the current?

Current is a **scalar**. It has a size and a direction along the wire, but it is not a vector in space:

- When a wire bends around a corner, the current does not change. The same charge per second goes around the bend.
- Currents meeting at a point add as ordinary numbers with signs, not by vector addition at angles.

To give current a direction, physicists use a convention. **Conventional current** is the direction in which **positive** charge would move. Outside the battery, conventional current goes from the positive terminal, through the circuit, to the negative terminal: from high potential to low potential.

In metal wires, the charges that actually move are **electrons**, which are negative. They drift the opposite way to the conventional current. This does not make the convention wrong. Negative charge moving to the left carries charge through a slice in exactly the same way as positive charge moving to the right: both make the right-hand side more positive. In other conductors, such as salt solutions or the gas in a fluorescent tube, both positive and negative carriers move, in opposite directions. Their contributions add.

In this course, circuit diagrams use conventional current unless a question says otherwise.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="cur-wire-title cur-wire-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cur-wire-title">A section of metal wire carrying a current</title>
<desc id="cur-wire-desc">A horizontal section of wire. The left end is labelled higher potential, towards the positive terminal. The right end is labelled lower potential, towards the negative terminal. Above the wire, a thick arrow pointing right is labelled conventional current I. Inside the wire are six electrons, each drawn as a small circle with a minus sign and a short arrow pointing left, labelled electron drift. A dashed oval across the middle of the wire marks the cross-section through which charge is counted.</desc>
<defs><marker id="cur-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="70" y="130" width="420" height="70" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<ellipse cx="280" cy="165" rx="16" ry="35" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="280" y="232" font-size="12" fill="#1d2b44" text-anchor="middle">cross-section (charge counted here)</text>
<line x1="150" y1="90" x2="420" y2="90" stroke="#1d2b44" stroke-width="4" marker-end="url(#cur-arr)"/>
<text x="285" y="75" font-size="14" font-weight="600" fill="#1d2b44" text-anchor="middle">conventional current I →</text>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<circle cx="120" cy="150" r="9" fill="#ffffff" stroke="#1d2b44"/><text x="120" y="155">−</text>
<circle cx="200" cy="182" r="9" fill="#ffffff" stroke="#1d2b44"/><text x="200" y="187">−</text>
<circle cx="250" cy="148" r="9" fill="#ffffff" stroke="#1d2b44"/><text x="250" y="153">−</text>
<circle cx="335" cy="180" r="9" fill="#ffffff" stroke="#1d2b44"/><text x="335" y="185">−</text>
<circle cx="390" cy="150" r="9" fill="#ffffff" stroke="#1d2b44"/><text x="390" y="155">−</text>
<circle cx="455" cy="178" r="9" fill="#ffffff" stroke="#1d2b44"/><text x="455" y="183">−</text>
</g>
<g stroke="#1d2b44" stroke-width="1.5" marker-end="url(#cur-arr)">
<line x1="108" y1="150" x2="84" y2="150"/><line x1="188" y1="182" x2="164" y2="182"/>
<line x1="238" y1="148" x2="214" y2="148"/><line x1="323" y1="180" x2="299" y2="180"/>
<line x1="378" y1="150" x2="354" y2="150"/><line x1="443" y1="178" x2="419" y2="178"/>
</g>
<text x="280" y="262" font-size="13" fill="#1d2b44" text-anchor="middle">← electron drift (slow; random motion not shown)</text>
<text x="70" y="120" font-size="12" fill="#1d2b44">higher potential (towards + terminal)</text>
<text x="490" y="290" font-size="12" fill="#1d2b44" text-anchor="end">lower potential (towards − terminal)</text>
</svg>
<figcaption>Figure 1. In a metal wire the electrons (circles marked −) drift slowly to the left, towards higher potential. The conventional current (thick arrow) points to the right, from higher to lower potential. The current is the net charge per second through the dashed cross-section.</figcaption>
</figure>

## Current–time graphs

A graph of current I (vertical) against time t (horizontal) is a useful way to show a current that changes, for example when a capacitor charges or a motor starts.

- Since ΔQ = IΔt for a steady current, a horizontal line at height I over a time Δt encloses a rectangle of area IΔt. That area is the charge.
- This works for any shape of graph: **the area under a current–time graph equals the charge that passes**.
- The **average current** over an interval is the total charge divided by the total time.

Units check: A × s = (C/s) × s = C.

## Worked example 1: counting the charge from a charger

**Question.** A phone charger delivers a steady current of 1.2 A to a phone for 45 minutes. (a) How much charge passes through the charging cable? (b) How many electrons is this? (c) In the cable, the conventional current goes from the charger to the phone along one wire. Which way do the electrons in that wire move?

1. Convert the time: Δt = 45 × 60 s = 2700 s.
2. (a) ΔQ = IΔt = (1.2 A)(2700 s) = 3240 C ≈ 3.2 × 10³ C.
3. (b) Number of electrons N = ΔQ / e = 3240 C ÷ (1.60 × 10⁻¹⁹ C) = 2.0 × 10²² electrons.
4. (c) Electrons are negative, so they move opposite to the conventional current: from the phone towards the charger in that wire.

**Answer.** 3.2 × 10³ C, which is 2.0 × 10²² electrons. In that wire the electrons drift from the phone towards the charger.

**Check.** A common slip is to use 45 instead of 2700 for the time, which gives 54 C, far too small. Always convert to seconds. Also note that no electrons are "used up": the same number return to the charger along the other wire of the cable.

## Worked example 2: charge from a current–time graph

**Question.** When a small fan is switched on, the current in it follows Figure 2. It rises steadily from 0 to 0.30 A in the first 2.0 s, stays at 0.30 A until t = 6.0 s, then falls steadily to zero at t = 8.0 s when the fan is switched off. (a) Find the total charge that passes through the fan. (b) Find the average current over the 8.0 s. (c) Find the charge that passes in the first 4.0 s.

<figure>
<svg viewBox="0 0 540 370" role="img" aria-labelledby="cur-it-title cur-it-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cur-it-title">Current against time for a fan</title>
<desc id="cur-it-desc">Current in amperes on the vertical axis from 0 to 0.40, time in seconds on the horizontal axis from 0 to 8. The graph rises in a straight line from 0 at t equals 0 to 0.30 amperes at t equals 2 seconds, stays at 0.30 amperes until t equals 6 seconds, then falls in a straight line to 0 at t equals 8 seconds. The region under the graph is shaded and divided by dotted vertical lines into a triangle of 0.30 coulombs, a rectangle of 1.20 coulombs and a triangle of 0.30 coulombs.</desc>
<defs><marker id="it-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<polygon points="80,300 180,120 380,120 480,300" fill="#fdf6e3" stroke="none"/>
<line x1="80" y1="300" x2="515" y2="300" stroke="#1d2b44" stroke-width="2" marker-end="url(#it-arr)"/>
<line x1="80" y1="300" x2="80" y2="35" stroke="#1d2b44" stroke-width="2" marker-end="url(#it-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="320">0</text>
<line x1="180" y1="300" x2="180" y2="306" stroke="#1d2b44"/><text x="180" y="320">2.0</text>
<line x1="280" y1="300" x2="280" y2="306" stroke="#1d2b44"/><text x="280" y="320">4.0</text>
<line x1="380" y1="300" x2="380" y2="306" stroke="#1d2b44"/><text x="380" y="320">6.0</text>
<line x1="480" y1="300" x2="480" y2="306" stroke="#1d2b44"/><text x="480" y="320">8.0</text>
<text x="290" y="350" font-size="13">Time t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="240" x2="80" y2="240" stroke="#1d2b44"/><text x="70" y="244">0.10</text>
<line x1="74" y1="180" x2="80" y2="180" stroke="#1d2b44"/><text x="70" y="184">0.20</text>
<line x1="74" y1="120" x2="80" y2="120" stroke="#1d2b44"/><text x="70" y="124">0.30</text>
<line x1="74" y1="60" x2="80" y2="60" stroke="#1d2b44"/><text x="70" y="64">0.40</text>
</g>
<text x="22" y="180" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 180)">Current I (A)</text>
<polyline points="80,300 180,120 380,120 480,300" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="180" y1="120" x2="180" y2="300" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<line x1="380" y1="120" x2="380" y2="300" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="148" y="270">0.30 C</text><text x="280" y="220">1.20 C</text><text x="412" y="270">0.30 C</text>
</g>
</svg>
<figcaption>Figure 2. Current through the fan against time (solid line). The shaded area under the line, split into a triangle, a rectangle and a triangle, is the total charge that passes: 1.80 C.</figcaption>
</figure>

1. (a) Split the area into three parts.
   - 0 to 2.0 s, triangle: ½ × 2.0 s × 0.30 A = 0.30 C.
   - 2.0 to 6.0 s, rectangle: 4.0 s × 0.30 A = 1.20 C.
   - 6.0 to 8.0 s, triangle: ½ × 2.0 s × 0.30 A = 0.30 C.
   - Total: ΔQ = 0.30 + 1.20 + 0.30 = 1.80 C.
2. (b) Average current = ΔQ / Δt = 1.80 C ÷ 8.0 s = 0.225 A ≈ 0.23 A.
3. (c) First 4.0 s: the triangle (0.30 C) plus 2.0 s of the rectangle (2.0 s × 0.30 A = 0.60 C), so 0.90 C.

**Answer.** (a) 1.8 C; (b) 0.23 A; (c) 0.90 C.

**Interpretation and check.** The average current (0.23 A) is less than the peak (0.30 A), as it must be, because the current was below its peak for part of the time. Multiplying the peak by the whole time (0.30 A × 8.0 s = 2.4 C) overestimates the charge. The 1.8 C is about 1.1 × 10¹⁹ electrons.

## Worked example 3: current carried by two kinds of ion

**Question.** Two metal plates dip into salt water and are connected to a battery. The plate on the left is at the higher potential. Each second, 2.0 × 10¹⁸ positive sodium ions (charge +e each) cross a slice of the solution moving to the right, and 1.5 × 10¹⁸ negative chloride ions (charge −e each) cross the same slice moving to the left. Find the size and direction of the current.

1. Positive ions moving right carry positive charge to the right: (2.0 × 10¹⁸)(1.60 × 10⁻¹⁹ C) = 0.32 C each second, to the right.
2. Negative ions moving left also make the right side more positive (it loses negative charge). Their contribution to the current is (1.5 × 10¹⁸)(1.60 × 10⁻¹⁹ C) = 0.24 C each second, also counted to the right.
3. Add: I = 0.32 A + 0.24 A = 0.56 A, to the right.

**Answer.** 0.56 A, directed to the right, from the higher-potential plate towards the lower-potential plate.

**Check.** Subtracting the two (giving 0.08 A) is a common error. The ions move in opposite directions, but they carry opposite charges, so their effects on the net charge flow add. The direction matches the rule that conventional current runs from high to low potential outside the source.

## Common misconceptions

- **"Current is used up by a lamp."** The charge that enters a lamp each second leaves it each second. Charge is conserved. What the lamp takes is energy, not charge or current.
- **"The battery supplies the electrons."** The carriers are already in the wires and components. The battery keeps a potential difference that pushes them around the loop and supplies the energy.
- **"No current means the electrons are not moving."** They move very fast in random directions. Zero current means zero **net** flow through a cross-section.
- **"Electrons rush from the battery to the lamp at nearly the speed of light."** The drift is slow, often a fraction of a millimetre per second. The lamp lights quickly because the push acts on carriers everywhere in the loop almost at once.
- **"Current is a vector."** It has a direction along the wire, but it does not change when the wire bends, and currents combine as numbers, not as vectors.
- **"Conventional current is wrong because electrons go the other way."** Negative charge moving one way is equivalent to positive charge moving the other way. The convention gives correct answers in every circuit.
- **"emf is a force."** emf is a potential difference: energy per unit charge, measured in volts.

## Where this leads

Next, Topic 11.2 builds whole circuits: closed, open and short circuits, loops, and the schematic symbols you will use for the rest of the unit. Continue with [Topic 11.2, Simple Circuits](/advanced-course-resources/physics-2/11-2-simple-circuits-study-guide/). Later, Topic 11.3 links the current to the potential difference through resistance. First test yourself with the [practice questions](/advanced-course-resources/physics-2/11-1-electric-current-practice/), then use the [revision notes](/advanced-course-resources/physics-2/11-1-electric-current-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/11-1-electric-current-checklist/) to consolidate.
