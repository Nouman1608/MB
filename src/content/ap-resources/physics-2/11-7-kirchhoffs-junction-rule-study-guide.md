---
resourceId: "mb-ap-phys2-11.7-study-guide"
title: "Kirchhoff's Junction Rule: Study Guide (Physics 2 11.7)"
description: "Why current into a junction equals current out: charge conservation, sign conventions, branches, using junction and loop rules together, and testing the rule with data."
course: "physics-2"
unit: 11
topics: ["11.7"]
resourceType: "study-guide"
prerequisites:
  - "Current as the rate of charge flow, I = ΔQ/Δt (Topic 11.1)"
  - "Series and parallel connections and equivalent resistance (Topic 11.5)"
  - "Kirchhoff's loop rule (Topic 11.6)"
prerequisiteResources: ["mb-ap-phys2-11.6-study-guide"]
learningObjectives:
  - "Explain the junction rule as a result of charge conservation in a circuit with steady currents"
  - "Write a junction equation using assumed current directions and interpret a negative answer"
  - "Find unknown currents at one or more junctions from given or measured currents"
  - "Combine junction and loop equations to find every branch current in a one-battery circuit"
  - "Use measured currents, with their uncertainty, to support or reject a claim about a junction"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Batteries, wires and meters are ideal unless stated. Keep unrounded values until the final step"
related: ["mb-ap-phys2-11.7-revision-notes", "mb-ap-phys2-11.7-practice", "mb-ap-phys2-11.7-checklist"]
next: "mb-ap-phys2-11.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "At any junction, total current in = total current out: ΣI_in = ΣI_out."
  - "The rule comes from conservation of charge: charge cannot build up at a junction in a steady circuit."
  - "Every element in one branch carries the same current. Current is not used up by resistors or bulbs."
  - "Guess a direction for each unknown current. A negative answer means the real current flows the other way."
  - "Junction equations plus loop equations give enough equations to find every branch current."
faqs:
  - question: "Does more current go down the branch with more resistance?"
    answer: "No. Parallel branches have the same potential difference across them, so the branch with less resistance carries more current. The junction rule only says the branch currents must add up to the current coming in."
  - question: "Can I apply the junction rule to a whole part of a circuit, not just one point?"
    answer: "Yes. Draw a closed boundary around any part of a circuit with steady currents. The total current entering the boundary equals the total current leaving it, for the same reason: charge does not pile up inside."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Charge has nowhere to go

In Topic 11.2 you met **junctions**: points where three or more wires meet, so the current can split or combine. In Topic 11.6 you used the loop rule, which comes from conservation of energy. This topic adds the second Kirchhoff rule. It comes from a different conservation law: **conservation of electric charge**.

Think about a junction in a circuit with steady currents. Charge flows in along some wires and out along others. A junction is just a meeting point of wires. It has nowhere to store charge. If more charge arrived each second than left, charge would build up at the junction. Its potential would change, and the currents would change until the build-up stopped. So once a circuit has steady currents, the charge entering a junction each second must equal the charge leaving it each second.

Charge per second is current (I = ΔQ/Δt). That gives the rule.

## The junction rule

**The total current entering a junction equals the total current leaving it.**

**ΣI_in = ΣI_out**

An equivalent form: if you count currents in as positive and currents out as negative, the currents at a junction add to zero, ΣI = 0.

<figure>
<svg viewBox="0 0 480 300" role="img" aria-labelledby="jn-title jn-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="jn-title">Four wires meeting at one junction</title>
<desc id="jn-desc">A junction drawn as a dot with four wires. From the left, a wire carries 2.0 amperes towards the junction, shown by an arrow pointing at the dot. From below, a wire carries 0.5 amperes up towards the junction. To the right, a wire carries 1.5 amperes away from the junction. Upwards, a wire carries an unknown current I away from the junction. Each label also says in or out.</desc>
<defs><marker id="jn-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2.5" fill="none">
<line x1="50" y1="150" x2="430" y2="150"/><line x1="240" y1="30" x2="240" y2="280"/>
</g>
<circle cx="240" cy="150" r="6" fill="#1d2b44"/>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="110" y1="130" x2="170" y2="130" marker-end="url(#jn-arr)"/>
<line x1="262" y1="260" x2="262" y2="200" marker-end="url(#jn-arr)"/>
<line x1="310" y1="130" x2="370" y2="130" marker-end="url(#jn-arr)"/>
<line x1="262" y1="110" x2="262" y2="50" marker-end="url(#jn-arr)"/>
</g>
<g font-size="13" fill="#1d2b44">
<text x="90" y="118">2.0 A in</text>
<text x="272" y="236">0.5 A in</text>
<text x="310" y="118">1.5 A out</text>
<text x="272" y="84">I out</text>
<text x="226" y="172" text-anchor="end">junction</text>
</g>
</svg>
<figcaption>Figure 1. Currents at one junction. The arrows show the direction of conventional current. In: 2.0 A + 0.5 A = 2.5 A. Out: 1.5 A + I. So I = 1.0 A.</figcaption>
</figure>

### Signs and assumed directions

Often you do not know which way a current flows before you solve the problem. That is fine.

1. Draw an arrow for every unknown current and give it a name (I₁, I₂, …). Pick any direction.
2. Write the junction equation using your arrows.
3. Solve. A **positive** answer means your arrow was right. A **negative** answer means the current has that size but flows **the other way**.

Keep the same arrow for a current in every equation you write, including the loop equations. Do not flip it halfway through.

### Branches, junctions and regions

- A **branch** is the path between two junctions. There is no junction inside it, so every element in one branch carries **the same current**. This is the series rule from Topic 11.5, and it is the junction rule again: at the wire between two elements, one current comes in and one goes out.
- Current is **not used up**. A resistor or bulb transfers energy out of the circuit, but every coulomb that enters it also leaves it. The energy story is the loop rule; the charge story is the junction rule.
- You can apply the rule to a **region**: draw a closed boundary around any part of a circuit. In a steady circuit the current crossing into the boundary equals the current crossing out.
- Parallel branches split the current, but **not** equally unless they are identical. Each branch has the same potential difference across it, so the branch with less resistance carries more current.

## Using the junction and loop rules together

For a circuit with branches, follow these steps.

1. Label every junction and every branch. Give each branch one current with an assumed direction.
2. Write a junction equation for each junction. (A circuit with two junctions gives the same equation twice, once from each end, so use only one of them.)
3. Write loop equations (Topic 11.6) until you have as many independent equations as unknown currents.
4. Solve. Check the answers in an equation you did not use.

In this course every circuit you solve this way has one battery, or batteries in the same branch. You will not be asked to analyse two batteries with different emfs wired in parallel.

## Worked example 1: unknown currents at two junctions

**Question.** Part of a circuit has two junctions, X and Y, joined by wire b. At X, a current of 3.0 A arrives along one wire and 1.8 A leaves along wire a; wire b is the only other wire at X. At Y, wire d carries 0.50 A away from Y. Wire c, the only other wire at Y, carries an unknown current I₂; assume it flows **into** Y. Find the current I₁ in wire b (assumed from X to Y) and I₂. How much charge passes along wire b in 30 s?

1. Junction X: in = out, so 3.0 A = 1.8 A + I₁. I₁ = **1.2 A**, positive, so it flows from X to Y as assumed.
2. Junction Y: in = I₁ + I₂; out = 0.50 A. So 1.2 A + I₂ = 0.50 A, giving I₂ = **−0.70 A**.
3. Interpret the sign: the current in wire c is 0.70 A, flowing **out of** Y, not in.
4. Charge in wire b: ΔQ = IΔt = (1.2 A)(30 s) = **36 C**.

**Check.** Draw a boundary around X and Y together. In: 3.0 A. Out: 1.8 A + 0.50 A + 0.70 A = 3.0 A. The region check agrees.

## Worked example 2: a battery feeding two branches

**Question.** In Figure 2, an ideal battery of emf 9.0 V drives current through R₁ = 2.0 Ω and then through two parallel branches, R₂ = 3.0 Ω and R₃ = 6.0 Ω. Use Kirchhoff's rules to find I₁, I₂ and I₃.

<figure>
<svg viewBox="0 0 540 340" role="img" aria-labelledby="two-title two-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="two-title">Battery, one resistor in the main line and two parallel branches</title>
<desc id="two-desc">A battery of emf 9.0 volts on the left, positive terminal at the top. The top wire runs right through resistor R1, 2.0 ohms, to junction J1. From J1 one branch goes down through R2, 3.0 ohms, to junction J2 on the bottom wire. The top wire continues right from J1 to a second branch that goes down through R3, 6.0 ohms, to the bottom wire. The bottom wire returns left from J2 to the negative terminal. Arrows show current I1 to the right in the top wire before J1, current I2 downward through R2 and current I3 downward through R3.</desc>
<defs><marker id="two-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="80" y1="60" x2="80" y2="170"/><line x1="60" y1="170" x2="100" y2="170"/><line x1="70" y1="184" x2="90" y2="184" stroke-width="5"/><line x1="80" y1="184" x2="80" y2="300"/>
<line x1="80" y1="60" x2="150" y2="60"/><polyline points="150,60 155,50 165,70 175,50 185,70 195,50 205,70 210,60"/><line x1="210" y1="60" x2="440" y2="60"/>
<line x1="300" y1="60" x2="300" y2="150"/><polyline points="300,150 290,155 310,165 290,175 310,185 290,195 310,205 300,210"/><line x1="300" y1="210" x2="300" y2="300"/>
<line x1="440" y1="60" x2="440" y2="150"/><polyline points="440,150 430,155 450,165 430,175 450,185 430,195 450,205 440,210"/><line x1="440" y1="210" x2="440" y2="300"/>
<line x1="80" y1="300" x2="440" y2="300"/>
<line x1="225" y1="38" x2="270" y2="38" marker-end="url(#two-arr)"/>
<line x1="322" y1="100" x2="322" y2="138" marker-end="url(#two-arr)"/>
<line x1="462" y1="100" x2="462" y2="138" marker-end="url(#two-arr)"/>
</g>
<circle cx="300" cy="60" r="4" fill="#1d2b44"/><circle cx="300" cy="300" r="4" fill="#1d2b44"/>
<g font-size="14" font-weight="600" fill="#1d2b44" text-anchor="middle">
<text x="108" y="166">+</text><text x="104" y="200">−</text><text x="40" y="182">9.0 V</text>
<text x="248" y="30" font-size="13">I₁</text><text x="338" y="124" font-size="13">I₂</text><text x="478" y="124" font-size="13">I₃</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="180" y="92">R₁ = 2.0 Ω</text><text x="350" y="186">R₂ = 3.0 Ω</text><text x="490" y="186">R₃ = 6.0 Ω</text>
<text x="300" y="48">J₁</text><text x="300" y="322">J₂</text>
</g>
</svg>
<figcaption>Figure 2. The circuit for Worked example 2. Arrows show the assumed directions of I₁, I₂ and I₃. Dots mark junctions J₁ and J₂.</figcaption>
</figure>

1. Three unknown currents need three independent equations.
2. Junction J₁: **I₁ = I₂ + I₃**. (J₂ gives the same equation.)
3. Loop through the battery, R₁ and R₂, going clockwise: 9.0 V − (2.0 Ω)I₁ − (3.0 Ω)I₂ = 0.
4. Loop through R₂ and R₃ only (no battery): going down R₂ (with I₂) and up R₃ (against I₃), −(3.0 Ω)I₂ + (6.0 Ω)I₃ = 0, so I₃ = I₂/2.
5. Substitute into the junction equation: I₁ = I₂ + I₂/2 = 1.5 I₂.
6. Substitute into the first loop: 9.0 = 2.0(1.5 I₂) + 3.0 I₂ = 6.0 I₂, so I₂ = **1.5 A**.
7. Then I₃ = **0.75 A** and I₁ = **2.25 A** (2.3 A to 2 significant figures).

**Check.** Junction: 1.5 A + 0.75 A = 2.25 A. Potential differences: R₁ has (2.0)(2.25) = 4.5 V; R₂ and R₃ each have 4.5 V, as parallel branches must. 4.5 V + 4.5 V = 9.0 V around the outer loop. Equivalent resistance gives the same answer: R₂ and R₃ in parallel make 2.0 Ω, so the total is 4.0 Ω and I₁ = 9.0 V ÷ 4.0 Ω = 2.25 A.

**Interpretation.** The 3.0 Ω branch carries twice the current of the 6.0 Ω branch. Half the resistance, same potential difference, twice the current.

## Worked example 3: testing the rule with lab data

**Question.** A student puts an ammeter in each of the three wires at a junction. Each meter reads to the nearest 0.01 A. The readings are 0.48 A in, and 0.31 A and 0.16 A out. The student says: "Out is 0.47 A, so 0.01 A is lost at the junction. The junction rule fails." Evaluate the claim.

1. Total out: 0.31 A + 0.16 A = 0.47 A. The difference from 0.48 A is 0.01 A, about 2% of the current in.
2. Each reading could be off by up to about 0.01 A because of the meter's resolution. With three readings, the sums could differ by up to about 0.03 A even if the currents balance exactly.
3. A difference of 0.01 A is inside this range, so the data **agree** with the junction rule. They do not show that charge is lost.
4. A real loss of charge would also need somewhere for the charge to go. A junction in a steady circuit has no way to store it.

**Answer.** The claim is not supported. The 0.01 A mismatch is within the measurement uncertainty, so the data are consistent with ΣI_in = ΣI_out.

**Check.** A useful experimental test would repeat the readings, swap the meters between wires, or use meters with finer resolution. If the mismatch stayed far larger than the meter resolution, you would first look for a meter fault or a missing wire.

## Common misconceptions

- **"Current is used up in a resistor."** The same current enters and leaves every element in a branch. Energy is transferred, not charge.
- **"Current always splits equally at a junction."** Only between identical branches. Less resistance means more current.
- **"More current goes through the bigger resistance."** The reverse. Parallel branches share one potential difference, so I = ΔV/R is largest where R is smallest.
- **"A negative current means I made a mistake."** It means the current flows opposite to your arrow. Keep the sign until the end, then state the real direction.
- **"The junction rule is about potential."** It is about charge per second. Potential differences belong to the loop rule.
- **"Charge collects at a junction for a while."** In a steady circuit, it does not. (In Topic 11.8, charge does build up on the plates of a capacitor, which is why the current in a capacitor's branch changes with time.)
- **"A battery always supplies the same current."** An ideal battery keeps the same potential difference. The current it supplies depends on the circuit, and the junction rule tells you it equals the sum of the branch currents.

## Where this leads

With both Kirchhoff rules you can analyse any one-battery circuit. Next, [Topic 11.8, Resistor-Capacitor (RC) Circuits](/advanced-course-resources/physics-2/11-8-resistor-capacitor-rc-circuits-study-guide/), adds capacitors, where the branch currents change with time. If the loop rule is not yet secure, return to [Topic 11.6, Kirchhoff's Loop Rule](/advanced-course-resources/physics-2/11-6-kirchhoffs-loop-rule-study-guide/). First test yourself with the [practice questions](/advanced-course-resources/physics-2/11-7-kirchhoffs-junction-rule-practice/), then use the [revision notes](/advanced-course-resources/physics-2/11-7-kirchhoffs-junction-rule-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/11-7-kirchhoffs-junction-rule-checklist/) to consolidate.
