---
resourceId: "mb-ap-physcem-11.6-study-guide"
title: "Kirchhoff's Loop Rule: Study Guide (Physics C: E&M 11.6)"
description: "Guide to Kirchhoff's loop rule for the calculus-based course: energy and potential round a loop, sign conventions, loop equations and graphs of electric potential against position."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.6"]
resourceType: "study-guide"
prerequisites:
  - "Electric potential and ΔU_E = qΔV (Topics 9.1 and 9.2)"
  - "Ohm's law and internal resistance (Topics 11.3 and 11.5)"
  - "Series and parallel combinations (Topic 11.5)"
prerequisiteResources: ["mb-ap-physcem-11.5-study-guide"]
learningObjectives:
  - "Describe the energy changes of charge moving through batteries and resistors using ΔU_E = qΔV"
  - "Explain why the sum of potential differences round any closed loop is zero, and link this to conservation of energy"
  - "Write a correct loop equation using a consistent sign convention, and solve it for an unknown current, emf or resistance"
  - "Find the potential at points in a circuit, and the potential difference between any two points by following a path"
  - "Sketch and interpret a graph of electric potential against position round a loop"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "No constants needed. Keep unrounded values until the final step; give answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-11.6-revision-notes", "mb-ap-physcem-11.6-practice", "mb-ap-physcem-11.6-checklist"]
next: "mb-ap-physcem-11.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Kirchhoff's loop rule: the potential differences across all the elements in any closed loop add to zero, ΣΔV = 0."
  - "It is conservation of energy: a charge that goes once round a loop returns to the same potential, so its net change in electric potential energy, qΔV, is zero."
  - "Choose a direction to walk round the loop. A resistor crossed with the current gives −IR, against it +IR; a battery crossed from − to + gives +ℰ, from + to − gives −ℰ."
  - "A negative answer for a current means only that it flows opposite to the direction you assumed."
  - "A graph of potential against position round a loop rises at sources of emf, falls across resistors in the direction of current, stays flat along ideal wires and ends where it started."
faqs:
  - question: "Does the direction I choose to go round the loop matter?"
    answer: "No. Walking the other way changes the sign of every term, so the equation is the same equation multiplied by −1. What matters is that you use one direction consistently within each loop."
  - question: "Where is the potential zero in a circuit?"
    answer: "Wherever you choose. Only potential differences are physical. Choosing a different zero point shifts every potential by the same amount and leaves every potential difference unchanged."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 11.6. The loop rule is one of the two Kirchhoff rules; the junction rule follows in Topic 11.7, and together they let you analyse any DC circuit in this course. Batteries, wires and meters are ideal unless a question says otherwise.

## Energy and potential round a circuit

In Unit 9 you met the link between electric potential and potential energy: when a charge q moves through a potential difference ΔV, its electric potential energy changes by

**ΔU_E = qΔV**

Follow a small positive charge round a circuit and watch its potential.

- **Through a battery from the − terminal to the + terminal**, the chemical processes in the battery do work on the charge. Its potential rises by ℰ, so its electric potential energy rises by qℰ.
- **Through a resistor in the direction of the current**, the charge moves from high to low potential. Its potential falls by IR, and the energy qIR is transferred to the resistor (as thermal energy, or light in a bulb).
- **Along an ideal wire**, there is no resistance, so no potential difference is needed to keep the charge moving. The potential stays the same.

A real battery is an ideal emf in series with an internal resistance r (Topic 11.5), so crossing it from − to + gives a rise of ℰ followed by a fall of Ir.

## The loop rule

Electric potential has a single value at each point in a steady circuit. So if a charge leaves a point, goes round any closed loop and arrives back at the same point, its potential is exactly what it was at the start. Its net change in electric potential energy is zero: the energy it gained in sources equals the energy it gave up in the other elements. This is **conservation of energy**, and it gives **Kirchhoff's loop rule**:

**ΣΔV = 0 round any closed loop**

The sum includes every element in the loop: batteries, resistors, capacitors and any other element.

*Background link to Unit 9.* For static charges, ΔV = −∫E·dℓ, and the electrostatic field is conservative, so the integral round any closed path is zero: ∮E·dℓ = 0. The loop rule is that statement applied to a circuit. In Unit 13 you will see what changes when magnetic flux through the loop varies.

## Writing a loop equation

1. **Draw and label** the circuit. Mark a direction for the current in each element; if you do not know it, guess.
2. **Choose a loop and a direction** to walk round it (clockwise is common).
3. **Add a term for each element** as you meet it, using one sign convention:

| Element and direction you walk | Change in potential, ΔV |
|---|---|
| Resistor, walking **with** the assumed current | −IR |
| Resistor, walking **against** the assumed current | +IR |
| Battery, walking from − terminal to + terminal | +ℰ |
| Battery, walking from + terminal to − terminal | −ℰ |
| Ideal wire | 0 |
| Capacitor, walking from + plate to − plate | −Q/C |

4. **Set the sum to zero** and solve.
5. **Interpret the sign.** If a current comes out negative, it flows opposite to your guess; its size is still correct.

The capacitor row is here for completeness. Circuits where capacitors charge and discharge are the subject of Topic 11.8.

For a single loop with one real battery of emf ℰ and internal resistance r, and external resistors R₁ and R₂, walking with the current gives ℰ − Ir − IR₁ − IR₂ = 0, so I = ℰ/(r + R₁ + R₂). This is the series result from Topic 11.5, now justified by energy conservation.

## Graphs of potential against position

You can show the potentials round a loop on a graph. Put "position round the loop" on the horizontal axis and electric potential on the vertical axis, and choose one point as zero.

- A **source of emf** appears as a rise of ℰ, crossed from − to +.
- A **resistor** appears as a fall of IR in the direction of the current. For a uniform resistor the fall is a straight line, because equal lengths have equal resistance.
- An **ideal wire** appears as a flat (horizontal) section.
- The graph **ends at the same potential it started at**: that is the loop rule in picture form.

Figure 1 shows the circuit for Worked example 1, and Figure 2 shows its graph.

<figure>
<svg viewBox="0 0 560 290" role="img" aria-labelledby="klr-c1-title klr-c1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="klr-c1-title">Single-loop circuit for Worked example 1</title>
<desc id="klr-c1-desc">A real battery on the left, shown as an ideal emf of 9.0 volts and an internal resistance of 0.60 ohms inside a dashed box, positive terminal at the top. Point A is at the negative terminal (bottom left) and point B at the positive terminal (top left). The top wire runs right through resistor R1 of 2.4 ohms to point C at the top right corner. The right-hand wire runs down through resistor R2 of 6.0 ohms to point D at the bottom right. The bottom wire returns from D to A. An arrow labelled I on the top wire points right, showing clockwise conventional current.</desc>
<defs><marker id="klr-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="30" y="75" width="90" height="150" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="75" y1="250" x2="75" y2="196"/><line x1="66" y1="196" x2="84" y2="196" stroke-width="5"/><line x1="57" y1="184" x2="93" y2="184" stroke-width="2.5"/><line x1="75" y1="184" x2="75" y2="150"/>
<polyline points="75,150 65,145 85,137 65,129 85,121 65,113 85,105 75,100"/><line x1="75" y1="100" x2="75" y2="50"/>
<line x1="75" y1="50" x2="200" y2="50"/><polyline points="200,50 205,40 215,60 225,40 235,60 245,40 255,60 260,50"/><line x1="260" y1="50" x2="460" y2="50"/>
<line x1="460" y1="50" x2="460" y2="115"/><polyline points="460,115 450,120 470,130 450,140 470,150 450,160 470,170 460,175"/><line x1="460" y1="175" x2="460" y2="250"/>
<line x1="460" y1="250" x2="75" y2="250"/>
<line x1="120" y1="50" x2="165" y2="50" marker-end="url(#klr-arr)"/>
</g>
<g fill="#1d2b44"><circle cx="75" cy="250" r="4"/><circle cx="75" cy="50" r="4"/><circle cx="460" cy="50" r="4"/><circle cx="460" cy="250" r="4"/></g>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="100" y="180" font-weight="bold">+</text>
<text x="140" y="40">I</text>
<text x="60" y="272">A</text><text x="60" y="40">B</text><text x="475" y="40">C</text><text x="475" y="272">D</text>
<text x="230" y="80">R₁ = 2.4 Ω</text>
<text x="515" y="150">R₂ = 6.0 Ω</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="start">
<text x="128" y="192">ℰ = 9.0 V</text><text x="128" y="128">r = 0.60 Ω</text>
</g>
</svg>
<figcaption>Figure 1. A real battery (dashed box: ideal emf ℰ in series with internal resistance r) drives a clockwise current through R₁ and R₂. A and B are the battery's terminals; C and D are corners of the external circuit.</figcaption>
</figure>

## Worked example 1: a single loop, its potentials and its graph

**Question.** In Figure 1, ℰ = 9.0 V, r = 0.60 Ω, R₁ = 2.4 Ω and R₂ = 6.0 Ω. (a) Use the loop rule to find the current. (b) Taking V_A = 0, find the potentials at B, C and D, and sketch V against position. (c) Repeat (b) with V_C = 0. (d) Account for the energy of 2.0 C of charge going once round the loop.

**(a)** Walk clockwise from A, with the current. Through the battery from − to +: +ℰ. Through r, R₁ and R₂ with the current: −Ir, −IR₁, −IR₂.

ℰ − Ir − IR₁ − IR₂ = 0, so I = 9.0 ÷ (0.60 + 2.4 + 6.0) = 9.0 ÷ 9.0 = **1.0 A**.

**(b)** Start at V_A = 0 and add each change.

1. Across the ideal emf: up 9.0 V. Across r: down (1.0)(0.60) = 0.60 V. So **V_B = 8.4 V**, which is also the terminal voltage.
2. Along the wire to R₁: no change. Across R₁: down 2.4 V. **V_C = 6.0 V**.
3. Across R₂: down 6.0 V. **V_D = 0**. The wire from D to A is flat, and we are back at 0, as the loop rule requires.

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="klr-g-title klr-g-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="klr-g-title">Electric potential against position round the loop of Figure 1</title>
<desc id="klr-g-desc">Horizontal axis: position round the loop, starting and ending at A. Vertical axis: electric potential in volts from 0 to 9. The line starts at 0 volts at A and rises vertically to 9.0 volts across the ideal emf. It then slopes down a little to 8.4 volts across the internal resistance, reaching B. It stays flat at 8.4 volts along the wire, then slopes down to 6.0 volts across R1, reaching C. It stays flat at 6.0 volts along the wire, then slopes down to 0 volts across R2, reaching D. It stays flat at 0 along the wire back to A.</desc>
<defs><marker id="klr-ax" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="70" y1="290" x2="545" y2="290" stroke="#1d2b44" stroke-width="2" marker-end="url(#klr-ax)"/>
<line x1="70" y1="290" x2="70" y2="35" stroke="#1d2b44" stroke-width="2" marker-end="url(#klr-ax)"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="64" y1="215" x2="70" y2="215" stroke="#1d2b44"/><text x="60" y="219">3</text>
<line x1="64" y1="140" x2="70" y2="140" stroke="#1d2b44"/><text x="60" y="144">6</text>
<line x1="64" y1="65" x2="70" y2="65" stroke="#1d2b44"/><text x="60" y="69">9</text>
<text x="60" y="294">0</text>
</g>
<text x="20" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 170)">Electric potential, V (V)</text>
<polyline points="75,290 75,65 115,80 175,80 255,140 315,140 455,290 525,290" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<g fill="#1d2b44"><circle cx="75" cy="290" r="4"/><circle cx="115" cy="80" r="4"/><circle cx="255" cy="140" r="4"/><circle cx="455" cy="290" r="4"/><circle cx="525" cy="290" r="4"/></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="75" y="310">A</text><text x="115" y="100">B</text><text x="262" y="160">C</text><text x="455" y="310">D</text><text x="525" y="310">A</text>
</g>
<g font-size="12" fill="#1d2b44">
<text x="84" y="55">+ℰ = 9.0 V</text>
<text x="125" y="72">−Ir = −0.6 V</text>
<text x="230" y="105">−IR₁ = −2.4 V</text>
<text x="400" y="200">−IR₂ = −6.0 V</text>
<text x="160" y="250">flat sections: ideal wires</text>
</g>
<text x="300" y="345" font-size="13" fill="#1d2b44" text-anchor="middle">Position round the loop, clockwise from A</text>
</svg>
<figcaption>Figure 2. Potential against position for Worked example 1, with V_A = 0. The rise of ℰ is drawn as a vertical step because the emf acts over a very short distance inside the battery. The graph finishes at the potential where it started, which is the loop rule.</figcaption>
</figure>

**(c)** With V_C = 0, subtract 6.0 V from every potential: **V_A = V_D = −6.0 V, V_B = 2.4 V, V_C = 0**. The graph has exactly the same shape, shifted down by 6.0 V. Every potential difference is unchanged, which shows that only differences in potential are physical.

**(d)** Using ΔU_E = qΔV with q = 2.0 C: the emf gives the charge 18 J. It transfers 1.2 J inside the battery (r), 4.8 J in R₁ and 12 J in R₂. Total: 18 − 1.2 − 4.8 − 12 = 0. Energy is conserved round the loop.

## Worked example 2: the potential difference between two points

**Question.** An ideal 12 V battery has two branches connected across it. Branch 1 is R₁ = 2.0 Ω then R₂ = 4.0 Ω; branch 2 is R₃ = 6.0 Ω then R₄ = 3.0 Ω. R₁ and R₃ connect to the positive terminal. An ideal voltmeter is connected between M (between R₁ and R₂) and N (between R₃ and R₄), as in Figure 3. (a) Find the voltmeter reading and which point is at higher potential. (b) Check with a loop through the voltmeter. (c) Derive a symbolic expression for V_M − V_N and the condition for a zero reading.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="klr-b-title klr-b-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="klr-b-title">Two branches across a battery with a voltmeter between their midpoints</title>
<desc id="klr-b-desc">An ideal 12 volt battery on the left, positive terminal at the top. The top wire connects to the top of two vertical branches. The left branch has R1 of 2.0 ohms above point M and R2 of 4.0 ohms below it. The right branch has R3 of 6.0 ohms above point N and R4 of 3.0 ohms below it. Both branches join the bottom wire, which returns to the negative terminal. A voltmeter, a circle with V, is connected horizontally between M and N.</desc>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="70" y1="60" x2="70" y2="154"/><line x1="52" y1="154" x2="88" y2="154" stroke-width="2.5"/><line x1="61" y1="166" x2="79" y2="166" stroke-width="5"/><line x1="70" y1="166" x2="70" y2="280"/>
<line x1="70" y1="60" x2="440" y2="60"/><line x1="70" y1="280" x2="440" y2="280"/>
<line x1="240" y1="60" x2="240" y2="85"/><polyline points="240,85 230,90 250,98 230,106 250,114 230,122 250,130 240,135"/><line x1="240" y1="135" x2="240" y2="205"/>
<polyline points="240,205 230,210 250,218 230,226 250,234 230,242 250,250 240,255"/><line x1="240" y1="255" x2="240" y2="280"/>
<line x1="440" y1="60" x2="440" y2="85"/><polyline points="440,85 430,90 450,98 430,106 450,114 430,122 450,130 440,135"/><line x1="440" y1="135" x2="440" y2="205"/>
<polyline points="440,205 430,210 450,218 430,226 450,234 430,242 450,250 440,255"/><line x1="440" y1="255" x2="440" y2="280"/>
<line x1="240" y1="170" x2="326" y2="170"/><circle cx="340" cy="170" r="14"/><line x1="354" y1="170" x2="440" y2="170"/>
</g>
<g fill="#1d2b44"><circle cx="240" cy="60" r="4"/><circle cx="240" cy="280" r="4"/><circle cx="240" cy="170" r="4"/><circle cx="440" cy="170" r="4"/></g>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="96" y="150" font-weight="bold">+</text><text x="32" y="165">12 V</text>
<text x="340" y="175" font-weight="bold">V</text>
<text x="225" y="165">M</text><text x="458" y="165">N</text>
<text x="190" y="115">R₁ = 2.0 Ω</text><text x="190" y="235">R₂ = 4.0 Ω</text>
<text x="500" y="115">R₃ = 6.0 Ω</text><text x="500" y="235">R₄ = 3.0 Ω</text>
</g>
</svg>
<figcaption>Figure 3. Circuit for Worked example 2. The ideal voltmeter takes no current, so each branch carries a single current from the top wire to the bottom wire.</figcaption>
</figure>

**(a)** The voltmeter takes no current, so each branch is a simple series path. Take V = 0 at the negative terminal; the top wire is then at 12 V.

1. Loop through the battery and branch 1, walking with the current: 12 − I₁(2.0) − I₁(4.0) = 0, so **I₁ = 2.0 A**.
2. Loop through the battery and branch 2: 12 − I₂(6.0) − I₂(3.0) = 0, so **I₂ = 1.33 A**.
3. Walk from the top wire down to M: V_M = 12 − (2.0)(2.0) = **8.0 V**. Down to N: V_N = 12 − (1.33)(6.0) = **4.0 V**.
4. The voltmeter reads **4.0 V**, with **M at the higher potential**.

**(b)** Walk the loop M → R₂ → bottom wire → R₄ → N → voltmeter → M. Down R₂ with its current: −(2.0)(4.0) = −8.0 V. Up R₄ against its current: +(1.33)(3.0) = +4.0 V. Across the voltmeter from N to M: +4.0 V. Sum: −8.0 + 4.0 + 4.0 = 0. ✓

**(c)** In general, I₁ = ℰ/(R₁ + R₂) and V_M = ℰR₂/(R₁ + R₂); similarly V_N = ℰR₄/(R₃ + R₄). So

**V_M − V_N = ℰ[R₂/(R₁ + R₂) − R₄/(R₃ + R₄)] = ℰ(R₂R₃ − R₁R₄) / [(R₁ + R₂)(R₃ + R₄)]**

The reading is zero when **R₁/R₂ = R₃/R₄**. Here R₁/R₂ = 0.5 but R₃/R₄ = 2, so the reading is not zero. Replacing R₄ with 12 Ω would make it zero.

**Interpretation.** You never needed the battery current (3.33 A, by the junction rule of Topic 11.7). Any path between two points gives their potential difference; the loop rule guarantees that every path gives the same answer.

## Common misconceptions

- **"Potential is used up as current flows."** Potential is a property of each point. Charge transfers energy as it moves to lower potential; the current is not used up.
- **Mixing sign conventions within one loop.** Pick one direction and apply the table every time.
- **"A negative current means I made a mistake."** It means the current flows the other way.
- **"The terminal voltage of a battery is always ℰ."** Crossing a real battery from − to + gives ℰ − Ir; for a battery being charged (current entering its + terminal) the terminal voltage is ℰ + Ir.
- **Giving wires a potential drop.** Ideal wires are flat sections on the graph.
- **"The loop rule only works for single loops."** It holds for every closed loop, including loops through branches and meters.
- **"The zero of potential is at the negative terminal."** That is a convenient choice, not a rule.
- **Ending the graph at a different level from the start.** A loop graph always closes.

## Where this leads

Next, Topic 11.7 adds the junction rule (charge conservation), and together the two rules solve multi-loop circuits. Topic 11.8 uses the loop rule with a capacitor term to describe charging and discharging. If internal resistance or series and parallel feel unsure, return to [Topic 11.5, Compound Direct Current Circuits](/advanced-course-resources/physics-c-electricity-and-magnetism/11-5-compound-direct-current-circuits-study-guide/). Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/11-6-kirchhoffs-loop-rule-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/11-6-kirchhoffs-loop-rule-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-6-kirchhoffs-loop-rule-checklist/). The next study guide is [Topic 11.7, Kirchhoff's Junction Rule](/advanced-course-resources/physics-c-electricity-and-magnetism/11-7-kirchhoffs-junction-rule-study-guide/).
