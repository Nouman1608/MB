---
resourceId: "mb-ap-physcem-11.7-study-guide"
title: "Kirchhoff's Junction Rule: Study Guide (Physics C: E&M 11.7)"
description: "Guide to Kirchhoff's junction rule for the calculus-based course: charge conservation at junctions, sign conventions, solving multi-loop circuits with the loop rule, and testing the rule in the lab."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.7"]
resourceType: "study-guide"
prerequisites:
  - "Current as the rate of charge flow, and current density J (Topic 11.1)"
  - "Closed loops and junctions in a schematic (Topic 11.2)"
  - "Ohm's law, ΔV = IR (Topic 11.3), and the loop rule (Topic 11.6)"
prerequisiteResources: ["mb-ap-physcem-11.6-study-guide"]
learningObjectives:
  - "Explain why the junction rule follows from conservation of charge"
  - "Write a junction equation for any junction, or any closed region of a circuit, with a consistent sign convention"
  - "Interpret a negative current as a current in the opposite direction to the one you assumed"
  - "Combine junction equations with loop equations to find every current in a multi-loop circuit"
  - "Plan a measurement that tests the junction rule and analyse the data with a graph"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Batteries, wires and meters are ideal unless a question says otherwise. Keep unrounded values until the final step"
related: ["mb-ap-physcem-11.7-revision-notes", "mb-ap-physcem-11.7-practice", "mb-ap-physcem-11.7-checklist"]
next: "mb-ap-physcem-11.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Junction rule: the total current into a junction equals the total current out, ΣI_in = ΣI_out."
  - "It is conservation of charge: charge cannot pile up at a point where wires meet."
  - "Guess a direction for each unknown current; a negative answer just means the current flows the other way."
  - "The rule works for any closed region of a circuit, not only a single junction."
  - "With B unknown branch currents, use (junctions − 1) junction equations and make up the rest with loop equations."
faqs:
  - question: "What is the difference between the junction rule and the loop rule?"
    answer: "The junction rule comes from conservation of charge and is about currents at a point. The loop rule comes from conservation of energy and is about potential differences round a closed path. Most multi-loop circuits need both."
  - question: "Does the junction rule still hold while a capacitor is charging?"
    answer: "Yes. Charge builds up on the capacitor plates, not at the junctions in the wires. At every instant, the current into a junction equals the current out of it."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 11.7. The loop rule (Topic 11.6) told you how potential changes round a closed path. The junction rule tells you how current divides where wires meet. Together they let you solve circuits that series and parallel rules cannot handle alone. As in the rest of Unit 11, batteries, wires and meters are ideal unless a question says otherwise.

## Charge cannot pile up at a junction

A **junction** (or node) is a point where three or more wires meet. On a schematic it is usually marked with a dot.

Think about a small region around a junction. Charge flows in along some wires and out along others. If more charge came in each second than went out, charge would build up at the junction. A growing net charge at a point in a wire would create a growing electric field that pushes new charge away. In a steady circuit this does not happen. Charge is conserved, and a junction in a wire cannot store it.

So the amount of charge entering a junction per second equals the amount leaving per second. Current is charge per unit time, which gives **Kirchhoff's junction rule**:

**ΣI_in = ΣI_out**

You can also write it as **ΣI = 0**, if you count currents into the junction as positive and currents out as negative. Both forms say the same thing. Pick one and use it for the whole problem.

<figure>
<svg viewBox="0 0 560 290" role="img" aria-labelledby="jr-one-title jr-one-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="jr-one-title">Currents at a single junction</title>
<desc id="jr-one-desc">A filled dot labelled J in the centre with four straight wires attached. Two wires come in from the left, one from the upper left and one from the lower left, with arrows pointing towards J, labelled I one and I two. Two wires leave to the right, one horizontally and one towards the lower right, with arrows pointing away from J, labelled I three and I four. Below the drawing the equation I one plus I two equals I three plus I four is written.</desc>
<defs><marker id="jr1-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="80" y1="50" x2="280" y2="140"/>
<line x1="80" y1="230" x2="280" y2="140"/>
<line x1="280" y1="140" x2="500" y2="140"/>
<line x1="280" y1="140" x2="440" y2="250"/>
<line x1="150" y1="81.5" x2="200" y2="104" marker-end="url(#jr1-arr)"/>
<line x1="150" y1="198.5" x2="200" y2="176" marker-end="url(#jr1-arr)"/>
<line x1="370" y1="140" x2="430" y2="140" marker-end="url(#jr1-arr)"/>
<line x1="345" y1="184.7" x2="390" y2="215.6" marker-end="url(#jr1-arr)"/>
</g>
<circle cx="280" cy="140" r="6" fill="#1d2b44"/>
<g font-size="15" fill="#1d2b44" text-anchor="middle">
<text x="280" y="120" font-weight="bold">J</text>
<text x="160" y="70">I₁ (in)</text>
<text x="160" y="228">I₂ (in)</text>
<text x="400" y="126">I₃ (out)</text>
<text x="350" y="230">I₄ (out)</text>
<text x="280" y="278">I₁ + I₂ = I₃ + I₄</text>
</g>
</svg>
<figcaption>Figure 1. A junction J with two currents in and two out. Charge conservation requires I₁ + I₂ = I₃ + I₄. The arrows, not the angles of the wires, decide which side of the equation a current goes on.</figcaption>
</figure>

### The calculus view

In Topic 11.1 you met current density J, with I = ∫J·dA. Draw a small closed surface round the junction. The net current out through that surface is ∮J·dA. Conservation of charge says this equals the rate at which the charge inside *decreases*:

∮J·dA = −dq_inside/dt

A junction in an ideal wire holds no charge, so dq_inside/dt = 0 and the net current out is zero. That is the junction rule. The same surface argument tells you when the rule does **not** apply to a point: if your surface cuts through the gap of a capacitor and encloses only one plate, charge does build up inside, and the current in does not equal the current out. Keep junctions on the wires, and the rule always holds.

## Using the rule

**Assumed directions.** In a circuit you often do not know which way a current flows. Draw an arrow for each unknown current, in either direction, and write your equations using those arrows. If a current comes out **negative**, it flows opposite to your arrow. Its size is still correct. Do not go back and redraw the arrow halfway through; just report the true direction at the end.

**Same current along a branch.** A **branch** is a path between two junctions with no junction in the middle. Every element in a branch carries the same current. Use one symbol per branch, not one per element.

**Closed regions.** The argument above works for any closed surface, not just one round a single point. So the total current into **any closed region** of a circuit equals the total current out. This is a quick check on a full solution: draw a boundary round part of the circuit and add the currents in the wires that cross it.

**How many equations?** A circuit with N junctions gives only **N − 1 independent** junction equations. The last one always follows from the others. If the circuit has B branches, you need B equations for the B unknown currents. The other B − (N − 1) come from the loop rule, one for each independent loop.

**Bulbs do not "use up" current.** The same current enters and leaves a resistor or bulb. Energy is transferred in the element (Topic 11.4), but charge is not lost. That is why the current is the same everywhere in a branch.

## Worked example 1: currents in a network

**Question.** Figure 2 shows part of a larger circuit with three junctions, A, B and C. A current of 4.0 A enters A along wire 1, 2.5 A flows from A to B along wire 2, and 3.5 A leaves B along wire 4. Find the currents in wires 3, 5 and 6, and their directions.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="jr-net-title jr-net-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="jr-net-title">A network of three junctions</title>
<desc id="jr-net-desc">Three junction dots: A at the upper left, B at the upper right and C at the bottom centre, forming a triangle. Wire 1 comes in from the left to A, arrow towards A, labelled 4.0 A. Wire 2 runs from A to B along the top, arrow towards B, labelled 2.5 A. Wire 3 runs diagonally from A down to C, arrow towards C, labelled I three. Wire 4 leaves B to the right, arrow away from B, labelled 3.5 A. Wire 5 runs diagonally from C up to B, arrow towards B, labelled I five. Wire 6 comes up from the bottom of the drawing into C, arrow towards C, labelled I six. A dashed oval encloses all three junctions and is crossed only by wires 1, 4 and 6.</desc>
<defs><marker id="jrn-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<ellipse cx="280" cy="150" rx="170" ry="105" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 5"/>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="30" y1="90" x2="160" y2="90"/>
<line x1="160" y1="90" x2="400" y2="90"/>
<line x1="160" y1="90" x2="280" y2="210"/>
<line x1="400" y1="90" x2="530" y2="90"/>
<line x1="280" y1="210" x2="400" y2="90"/>
<line x1="280" y1="210" x2="280" y2="330"/>
<line x1="55" y1="90" x2="105" y2="90" marker-end="url(#jrn-arr)"/>
<line x1="255" y1="90" x2="310" y2="90" marker-end="url(#jrn-arr)"/>
<line x1="200" y1="130" x2="235" y2="165" marker-end="url(#jrn-arr)"/>
<line x1="455" y1="90" x2="505" y2="90" marker-end="url(#jrn-arr)"/>
<line x1="325" y1="165" x2="360" y2="130" marker-end="url(#jrn-arr)"/>
<line x1="280" y1="315" x2="280" y2="275" marker-end="url(#jrn-arr)"/>
</g>
<circle cx="160" cy="90" r="6" fill="#1d2b44"/><circle cx="400" cy="90" r="6" fill="#1d2b44"/><circle cx="280" cy="210" r="6" fill="#1d2b44"/>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="160" y="72" font-weight="bold">A</text>
<text x="400" y="72" font-weight="bold">B</text>
<text x="300" y="230" font-weight="bold">C</text>
<text x="80" y="78">1: 4.0 A</text>
<text x="280" y="78">2: 2.5 A</text>
<text x="185" y="168">3: I₃</text>
<text x="480" y="78">4: 3.5 A</text>
<text x="378" y="168">5: I₅</text>
<text x="315" y="300">6: I₆</text>
</g>
</svg>
<figcaption>Figure 2. Three junctions with six wires. Arrows on wires 3, 5 and 6 are assumed directions. The dashed oval is a closed region crossed only by wires 1, 4 and 6.</figcaption>
</figure>

1. **Junction A.** In: 4.0 A. Out: 2.5 A along wire 2 and I₃ along wire 3. So 4.0 A = 2.5 A + I₃, giving **I₃ = 1.5 A**, from A to C as drawn.
2. **Junction B.** In: 2.5 A along wire 2 and I₅ along wire 5. Out: 3.5 A. So 2.5 A + I₅ = 3.5 A, giving **I₅ = 1.0 A**, from C to B as drawn.
3. **Junction C.** In: I₃ and I₆. Out: I₅. So 1.5 A + I₆ = 1.0 A, giving **I₆ = −0.5 A**.
4. **Interpret the sign.** I₆ is negative, so the assumed arrow was wrong. **0.50 A flows out of C, down wire 6.**

**Check with a closed region.** Only wires 1, 4 and 6 cross the dashed oval. In: 4.0 A. Out: 3.5 A + 0.5 A = 4.0 A. The region gains no charge, so the answers are consistent. Notice you could have found the current in wire 6 from this region alone, without knowing anything about wires 2, 3 and 5.

## Combining the junction and loop rules

For a full circuit, follow the same steps every time:

1. **Label** every junction and give each branch one current symbol with an assumed direction.
2. **Junction equations:** write N − 1 of them.
3. **Loop equations:** go round independent loops and apply the loop rule (Topic 11.6). Crossing a resistor in the direction of its assumed current, the potential drops by IR; against it, the potential rises by IR. Crossing a battery from − to +, the potential rises by ℰ.
4. **Solve** the simultaneous equations. Substitution works well for three unknowns.
5. **Check:** every negative sign has been interpreted; a closed-region or energy check works.

The unit's boundary note leaves out circuits in which batteries with different potential differences are joined in parallel. The method still works for them, but the examples here use one battery.

## Worked example 2: a two-loop circuit

**Question.** In Figure 3 an ideal 12.0 V battery drives a current I₁ through R₁ = 4.0 Ω to junction P. There the current splits between R₂ = 6.0 Ω and R₃ = 12.0 Ω, which rejoin at junction Q on the return wire. Use Kirchhoff's rules to find I₁, I₂ and I₃.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="jr-we2-title jr-we2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="jr-we2-title">Two-loop circuit for Worked example 2</title>
<desc id="jr-we2-desc">A battery on the left, positive terminal at the top, labelled emf 12.0 volts. The top wire runs right through resistor R one, 4.0 ohms, to junction P. From P one branch goes down through resistor R two, 6.0 ohms, to junction Q on the bottom wire. The top wire also continues right from P to a second branch that goes down through resistor R three, 12.0 ohms, to the bottom wire. The bottom wire returns to the negative terminal. Arrows show I one to the right on the top wire before P, I two downward in the R two branch and I three downward in the R three branch.</desc>
<defs><marker id="jr2-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="80" y1="60" x2="80" y2="149"/><line x1="62" y1="149" x2="98" y2="149" stroke-width="2.5"/><line x1="71" y1="161" x2="89" y2="161" stroke-width="5"/><line x1="80" y1="161" x2="80" y2="250"/>
<line x1="80" y1="60" x2="150" y2="60"/><polyline points="150,60 155,50 165,70 175,50 185,70 195,50 205,70 210,60"/><line x1="210" y1="60" x2="460" y2="60"/>
<line x1="320" y1="60" x2="320" y2="125"/><polyline points="320,125 330,130 310,140 330,150 310,160 330,170 310,180 320,185"/><line x1="320" y1="185" x2="320" y2="250"/>
<line x1="460" y1="60" x2="460" y2="125"/><polyline points="460,125 470,130 450,140 470,150 450,160 470,170 450,180 460,185"/><line x1="460" y1="185" x2="460" y2="250"/>
<line x1="80" y1="250" x2="460" y2="250"/>
<line x1="235" y1="60" x2="285" y2="60" marker-end="url(#jr2-arr)"/>
<line x1="320" y1="195" x2="320" y2="235" marker-end="url(#jr2-arr)"/>
<line x1="460" y1="195" x2="460" y2="235" marker-end="url(#jr2-arr)"/>
</g>
<circle cx="320" cy="60" r="4" fill="#1d2b44"/><circle cx="320" cy="250" r="4" fill="#1d2b44"/>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="108" y="146" font-weight="bold">+</text>
<text x="40" y="160">12.0 V</text>
<text x="180" y="38">R₁ = 4.0 Ω</text>
<text x="260" y="48">I₁</text>
<text x="320" y="44">P</text>
<text x="320" y="275">Q</text>
<text x="370" y="160">R₂ = 6.0 Ω</text>
<text x="512" y="160">R₃ = 12.0 Ω</text>
<text x="303" y="220">I₂</text>
<text x="443" y="220">I₃</text>
</g>
</svg>
<figcaption>Figure 3. A battery, R₁ in the main branch, and R₂ and R₃ in two branches between junctions P and Q. Arrows show the assumed current directions.</figcaption>
</figure>

1. **Junction P** (Q gives the same equation, so N − 1 = 1): **I₁ = I₂ + I₃**.
2. **Loop 1** (battery, R₁, R₂), going clockwise from the negative terminal: +12.0 − 4.0I₁ − 6.0I₂ = 0.
3. **Loop 2** (R₂ and R₃), going down through R₂ and up through R₃: −6.0I₂ + 12.0I₃ = 0, so **I₂ = 2I₃**.
4. **Substitute.** From step 1, I₁ = 2I₃ + I₃ = 3I₃. Loop 1 becomes 12.0 = 4.0(3I₃) + 6.0(2I₃) = 24.0I₃.
5. So **I₃ = 0.50 A**, **I₂ = 1.0 A** and **I₁ = 1.5 A**. All are positive, so the assumed directions were right.

**Check 1: equivalent resistance.** R₂ and R₃ in parallel give (6.0 × 12.0)/(6.0 + 12.0) = 4.0 Ω. With R₁ in series, R_eq = 8.0 Ω, and I₁ = 12.0 V ÷ 8.0 Ω = 1.5 A. The two methods agree.

**Check 2: energy.** The battery supplies ℰI₁ = 12.0 × 1.5 = 18 W. The resistors dissipate (1.5)²(4.0) + (1.0)²(6.0) + (0.50)²(12.0) = 9.0 + 6.0 + 3.0 = 18 W.

**Interpretation.** The current divides in the inverse ratio of the resistances: the 6.0 Ω branch carries twice the current of the 12.0 Ω branch, because both branches have the same potential difference (6.0 V) across them.

### The same circuit with node potentials

You can also write the junction rule in terms of potentials, which saves work in larger circuits. Take Q as 0 V, so the top of the battery is at 12.0 V. Call the unknown potential at P V_P. Each current is a potential difference divided by a resistance, so the junction rule at P reads:

(12.0 − V_P)/4.0 = V_P/6.0 + V_P/12.0

Multiply by 12: 36 − 3V_P = 2V_P + V_P, so **V_P = 6.0 V**, and then I₁ = 1.5 A, I₂ = 1.0 A and I₃ = 0.50 A as before. One unknown instead of three. Question 7 of the practice set uses this method on a circuit that cannot be reduced to series and parallel parts.

## Testing the junction rule in the lab

The junction rule is a prediction you can test. A simple plan:

1. Build a circuit with one battery, a resistor in the main branch and two parallel branches, one containing a **variable resistor**.
2. Place an ammeter **in series** in the main branch (I₁) and in each parallel branch (I₂ and I₃). Ammeters must be in series with the element whose current they measure (Topic 11.5).
3. Change the variable resistor to five or more settings and record I₁, I₂ and I₃ each time.
4. Plot I₁ (vertical axis) against I₂ + I₃ (horizontal axis), with units on both axes and a scale that uses most of the grid.
5. The junction rule predicts a straight line through the origin with **slope 1**. Draw a best-fit line and compare its slope and intercept with 1 and 0, allowing for the ammeter precision.

Real ammeters have a small resistance, so inserting them slightly changes the currents. That does not spoil the test: the junction rule applies to whatever currents are actually present.

## Common misconceptions

- **"Current is used up by bulbs and resistors."** Charge is conserved. The same current enters and leaves every element in a branch; energy, not charge, is transferred.
- **"The current always splits equally at a junction."** It splits equally only when the branches are identical. Otherwise more current takes the lower-resistance path.
- **"A negative answer means I made a mistake."** It usually means only that your assumed direction was backwards. Keep the magnitude and reverse the direction.
- **Writing a junction equation for every junction.** With N junctions only N − 1 are independent. The extra equation gives nothing new, and you will be short of equations unless you add loop equations.
- **Giving each resistor in a branch its own current.** Elements in the same branch carry the same current.
- **Mixing up the two rules.** The junction rule is about charge (currents); the loop rule is about energy (potential differences).

## Where this leads

Next, in [Topic 11.8, Resistor-Capacitor (RC) Circuits](/advanced-course-resources/physics-c-electricity-and-magnetism/11-8-resistor-capacitor-rc-circuits-study-guide/), you will apply both Kirchhoff rules at every instant to circuits whose currents change with time, and get a differential equation for the charge on a capacitor. To review the loop rule, go back to [Topic 11.6](/advanced-course-resources/physics-c-electricity-and-magnetism/11-6-kirchhoffs-loop-rule-study-guide/). Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/11-7-kirchhoffs-junction-rule-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/11-7-kirchhoffs-junction-rule-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-7-kirchhoffs-junction-rule-checklist/).
