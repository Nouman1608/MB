---
resourceId: "mb-ap-phys2-11.5-study-guide"
title: "Compound Direct Current (DC) Circuits: Study Guide (Physics 2 11.5)"
description: "Series and parallel connections, equivalent resistance of resistor networks, batteries with internal resistance and terminal voltage, and how ammeters and voltmeters affect a circuit."
course: "physics-2"
unit: 11
topics: ["11.5"]
resourceType: "study-guide"
prerequisites:
  - "Closed loops, schematic symbols and meter placement (Topic 11.2)"
  - "Ohm's law ΔV = IR (Topic 11.3)"
  - "Electric power P = IΔV (Topic 11.4)"
prerequisiteResources: ["mb-ap-phys2-11.4-study-guide"]
learningObjectives:
  - "Decide whether circuit elements are connected in series, in parallel or neither"
  - "Derive and use the rules for the equivalent resistance of resistors in series and in parallel"
  - "Reduce a compound resistor network step by step and find the current in, and potential difference across, each resistor"
  - "Model a real battery as an ideal emf in series with an internal resistance and use ΔV_terminal = ℰ − Ir"
  - "Explain when wire resistance can be ignored"
  - "Describe how ideal and nonideal ammeters and voltmeters are connected and how a real meter changes what it measures"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Keep unrounded values for currents until the final step. Batteries, wires and meters are ideal unless a question says otherwise"
related: ["mb-ap-phys2-11.5-revision-notes", "mb-ap-phys2-11.5-practice", "mb-ap-phys2-11.5-checklist"]
next: "mb-ap-phys2-11.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Series: one path, so the same current passes through every element. R_eq = R₁ + R₂ + …"
  - "Parallel: several paths between the same two points, so every branch has the same potential difference. 1/R_eq = 1/R₁ + 1/R₂ + …"
  - "Adding a branch in parallel always lowers the equivalent resistance, below the smallest branch resistance."
  - "A real battery acts like an ideal emf ℰ in series with an internal resistance r, so its terminal voltage is ℰ − Ir."
  - "Ideal ammeters have zero resistance and go in series; ideal voltmeters have infinite resistance and go in parallel. Real meters slightly change the circuit."
faqs:
  - question: "Are two resistors in parallel just because they are drawn side by side?"
    answer: "No. Two elements are in parallel only if both of their ends are connected to the same two points, so they share the same potential difference. Check the connections at each end, not the layout on the page."
  - question: "Is the emf of a battery the same as the voltage across its terminals?"
    answer: "Only when there is no current in the battery. With a current I, the terminal voltage is ℰ − Ir, which is less than the emf for a battery being discharged."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## From one resistor to many

In Topic 11.3 you used ΔV = IR for a single resistor, and in Topic 11.4 you found the power it dissipates. Real circuits contain many resistors, joined in different ways. This topic gives you a method to handle them: replace a group of resistors by **one equivalent resistor** that draws the same current from the source when given the same potential difference. Then work back out to find what happens in each part.

Two kinds of connection make this possible.

- **Series.** Elements are in series when any charge that passes through one of them **must** then pass through all the others, with no other path to take. Because charge is not stored or lost along the path, the **current is the same** in every element in series.
- **Parallel.** Elements are in parallel when charge can pass through **one of two or more paths** between the same two points. Each path starts at one junction and ends at the other, so the **potential difference is the same** across every path.

Some elements are neither. In Figure 3, R₁ is not in series with R₂ alone, because charge leaving R₁ can go through R₂ **or** R₃.

<figure>
<svg viewBox="0 0 560 280" role="img" aria-labelledby="sp-title sp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sp-title">Two resistors in series compared with two resistors in parallel</title>
<desc id="sp-desc">Left: a battery on the left side of a rectangular loop, positive terminal at the top. Along the top wire are two resistors, R1 then R2, one after the other, so the loop has a single path. Right: a battery on the left side of a second loop. The top wire reaches a junction, marked with a dot. From the junction one vertical branch contains R1 and a second vertical branch, further right, contains R2. Both branches join again at a junction on the bottom wire, which returns to the negative terminal.</desc>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="40" y1="50" x2="40" y2="110"/><line x1="20" y1="110" x2="60" y2="110"/><line x1="30" y1="124" x2="50" y2="124" stroke-width="5"/><line x1="40" y1="124" x2="40" y2="200"/>
<line x1="40" y1="50" x2="70" y2="50"/><polyline points="70,50 75,40 85,60 95,40 105,60 115,40 125,60 130,50"/><line x1="130" y1="50" x2="160" y2="50"/>
<polyline points="160,50 165,40 175,60 185,40 195,60 205,40 215,60 220,50"/><line x1="220" y1="50" x2="250" y2="50"/>
<line x1="250" y1="50" x2="250" y2="200"/><line x1="250" y1="200" x2="40" y2="200"/>
<line x1="330" y1="50" x2="330" y2="110"/><line x1="310" y1="110" x2="350" y2="110"/><line x1="320" y1="124" x2="340" y2="124" stroke-width="5"/><line x1="330" y1="124" x2="330" y2="200"/>
<line x1="330" y1="50" x2="520" y2="50"/>
<line x1="440" y1="50" x2="440" y2="95"/><polyline points="440,95 430,100 450,110 430,120 450,130 430,140 450,150 440,155"/><line x1="440" y1="155" x2="440" y2="200"/>
<line x1="520" y1="50" x2="520" y2="95"/><polyline points="520,95 510,100 530,110 510,120 530,130 510,140 530,150 520,155"/><line x1="520" y1="155" x2="520" y2="200"/>
<line x1="520" y1="200" x2="330" y2="200"/>
</g>
<circle cx="440" cy="50" r="4" fill="#1d2b44"/><circle cx="440" cy="200" r="4" fill="#1d2b44"/>
<g font-size="14" font-weight="600" fill="#1d2b44" text-anchor="middle">
<text x="100" y="30">R₁</text><text x="190" y="30">R₂</text>
<text x="414" y="130">R₁</text><text x="545" y="130">R₂</text>
<text x="66" y="108">+</text><text x="356" y="108">+</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="145" y="232">Series: one path</text>
<text x="145" y="252">same I in R₁ and R₂</text>
<text x="425" y="232">Parallel: two paths</text>
<text x="425" y="252">same ΔV across R₁ and R₂</text>
</g>
</svg>
<figcaption>Figure 1. Left: R₁ and R₂ in series, so all the charge passes through both. Right: R₁ and R₂ in parallel between the two junctions (dots), so each charge passes through one of them.</figcaption>
</figure>

## Equivalent resistance in series

Take resistors R₁, R₂, R₃ in series with current I. Each one has a potential difference ΔVᵢ = IRᵢ across it. A charge passing through all three loses energy in each, so the potential differences add:

ΔV_total = IR₁ + IR₂ + IR₃ = I(R₁ + R₂ + R₃)

A single resistor with the same I for the same ΔV_total must have

**R_eq = R₁ + R₂ + R₃ + …** (series)

The equivalent resistance is **larger** than any one of the resistors. Adding more resistors in series makes the single path harder to push charge through. For example, 4.0 Ω and 6.0 Ω in series give 10 Ω.

## Equivalent resistance in parallel

Now take R₁, R₂, R₃ in parallel, all connected between the same two junctions, with potential difference ΔV across each. The current in each branch is Iᵢ = ΔV/Rᵢ. Charge is conserved at the junctions, so the total current into the group is the sum of the branch currents:

I = ΔV/R₁ + ΔV/R₂ + ΔV/R₃ = ΔV(1/R₁ + 1/R₂ + 1/R₃)

A single resistor that draws the same I with the same ΔV must have

**1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + …** (parallel)

Three results follow.

- **More paths, less resistance.** Each new branch gives charge another route, so the total current rises for the same ΔV. R_eq **decreases** every time you add a branch.
- **R_eq is smaller than the smallest branch.** 4.0 Ω and 6.0 Ω in parallel give 1/R_eq = 1/4 + 1/6 = 5/12, so R_eq = 2.4 Ω, less than 4.0 Ω.
- **n identical resistors R in parallel give R/n.** Three 30 Ω resistors in parallel give 10 Ω.

Do not forget the last step: the formula gives 1/R_eq. Invert it.

## Reducing a compound network

A compound circuit mixes series and parallel connections. Reduce it in stages:

1. Find a group that is purely series or purely parallel. Replace it by its R_eq.
2. Redraw. New series or parallel groups appear. Repeat until one resistor is left.
3. Find the total current from the source: I = ℰ/R_eq.
4. Work back out through your redrawn diagrams. Series parts share the same current; parallel parts share the same potential difference. Use ΔV = IR at each stage.

## Real wires and real batteries

### Wires

So far wires have been ideal, with no resistance. Wires made of good conductors do have a little resistance, but it is normally much smaller than that of the other elements, so you can ignore it. That is only valid when the circuit **contains** other elements with resistance. If a plain wire is connected straight across a battery, the wire's tiny resistance is no longer small compared with anything else, and it cannot be ignored.

### Batteries: emf and internal resistance

An **ideal battery** has no internal resistance. The potential difference between its terminals when there is **no current** in it is called its **emf**, ℰ. That is the potential difference the battery would supply if it were ideal.

A real battery is made of materials that resist the motion of charge. You can model it as an **ideal emf ℰ in series with a small internal resistance r**, both hidden inside the case (Figure 2). The internal resistance is in series with the rest of the circuit, so the whole circuit current I passes through it.

When there is a current, part of the emf is lost across r inside the battery. The potential difference you can measure across the terminals is

**ΔV_terminal = ℰ − Ir**

- With no current (open circuit), ΔV_terminal = ℰ. An ideal voltmeter across the terminals of a disconnected battery reads the emf.
- The larger the current drawn, the lower the terminal voltage.
- For a single external resistance R, the internal resistance just adds in series: I = ℰ/(R + r).

<figure>
<svg viewBox="0 0 540 280" role="img" aria-labelledby="bat-title bat-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bat-title">Model of a real battery as an ideal emf in series with an internal resistance</title>
<desc id="bat-desc">A dashed rectangle represents the case of a real battery. Inside it, on one vertical wire, are a resistor labelled r and, below it, an ideal battery symbol labelled emf, with its long positive line on top. The wire leaves the case at a top terminal and a bottom terminal, drawn as small open circles. Outside, the top terminal connects by a wire going up, right and down through an external resistor R, then along the bottom back to the bottom terminal. A voltmeter is connected between the top wire and the bottom wire, so it measures the potential difference across the terminals. An arrow on the top wire shows conventional current I to the right.</desc>
<defs><marker id="bat-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="60" y="60" width="120" height="140" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="120" y1="60" x2="120" y2="75"/><polyline points="120,75 110,80 130,90 110,100 130,110 110,120 130,130 120,135"/><line x1="120" y1="135" x2="120" y2="150"/>
<line x1="100" y1="150" x2="140" y2="150"/><line x1="110" y1="164" x2="130" y2="164" stroke-width="5"/><line x1="120" y1="164" x2="120" y2="200"/>
<line x1="120" y1="56" x2="120" y2="30"/><line x1="120" y1="30" x2="420" y2="30"/><line x1="420" y1="30" x2="420" y2="110"/>
<polyline points="420,110 410,115 430,125 410,135 430,145 410,155 430,165 420,170"/><line x1="420" y1="170" x2="420" y2="230"/>
<line x1="420" y1="230" x2="120" y2="230"/><line x1="120" y1="230" x2="120" y2="204"/>
<line x1="300" y1="30" x2="300" y2="114"/><circle cx="300" cy="130" r="16"/><line x1="300" y1="146" x2="300" y2="230"/>
<line x1="340" y1="16" x2="390" y2="16" marker-end="url(#bat-arr)"/>
</g>
<circle cx="120" cy="58" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><circle cx="120" cy="202" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="300" cy="30" r="4" fill="#1d2b44"/><circle cx="300" cy="230" r="4" fill="#1d2b44"/>
<g font-size="14" font-weight="600" fill="#1d2b44" text-anchor="middle">
<text x="145" y="110">r</text><text x="155" y="168">ℰ</text><text x="92" y="148">+</text><text x="92" y="176">−</text>
<text x="445" y="145">R</text><text x="300" y="135">V</text><text x="365" y="12" font-size="13">I</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="120" y="256">real battery (dashed case)</text>
<text x="300" y="256">reads ΔV_terminal = ℰ − Ir</text>
</g>
</svg>
<figcaption>Figure 2. A real battery modelled as an ideal emf ℰ in series with internal resistance r, inside the dashed case. Only the two terminals (open circles) can be reached, so a voltmeter across them reads ℰ − Ir when the current is I.</figcaption>
</figure>

## Measuring current and potential difference

- An **ammeter** measures the current at one point, so it goes **in series** with the element whose current you want. An **ideal ammeter has zero resistance**, so adding it does not change that current.
- A **voltmeter** measures the potential difference between two points, so it goes **in parallel** with the element. An **ideal voltmeter has infinite resistance**, so no charge flows through it.

Real meters are not ideal, and they change the circuit they measure:

- A real ammeter has a small resistance. In series, it adds to the resistance of the loop, so the current it reads is a little **smaller** than the current before it was connected.
- A real voltmeter has a very large but finite resistance. In parallel with an element, it forms a new branch, which lowers the resistance of that part of the circuit. When the element shares the potential difference with other resistance in series, its share drops a little, so the reading is a little **smaller** than the true value without the meter. (Across an element connected directly to an ideal battery, the reading would not change.)

In this course you only need to reason about these effects qualitatively. Unless a question says otherwise, treat all batteries, wires and meters as ideal. Circuits in which batteries with **different** emfs are connected in parallel are not assessed.

## Worked example 1: a compound network

**Question.** In Figure 3 an ideal 9.0 V battery is connected to R₁ = 3.0 Ω in series with a parallel group of R₂ = 10 Ω and R₃ = 15 Ω. Find the current in, and the potential difference across, each resistor.

<figure>
<svg viewBox="0 0 540 300" role="img" aria-labelledby="net-title net-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="net-title">A resistor in series with a parallel pair</title>
<desc id="net-desc">A 9.0 volt battery on the left side, positive terminal at the top. The top wire passes through R1, 3.0 ohms, then reaches a junction marked with a dot. From the junction one vertical branch contains R2, 10 ohms, and a second vertical branch further right contains R3, 15 ohms. Both branches meet at a junction on the bottom wire, which returns to the negative terminal. A dashed rectangle surrounds the two branches and is labelled parallel group equals 6.0 ohms.</desc>
<defs><marker id="net-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="275" y="72" width="195" height="150" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="60" y1="50" x2="60" y2="130"/><line x1="40" y1="130" x2="80" y2="130"/><line x1="50" y1="144" x2="70" y2="144" stroke-width="5"/><line x1="60" y1="144" x2="60" y2="250"/>
<line x1="60" y1="50" x2="130" y2="50"/><polyline points="130,50 135,40 145,60 155,40 165,60 175,40 185,60 190,50"/><line x1="190" y1="50" x2="420" y2="50"/>
<line x1="300" y1="50" x2="300" y2="120"/><polyline points="300,120 290,125 310,135 290,145 310,155 290,165 310,175 300,180"/><line x1="300" y1="180" x2="300" y2="250"/>
<line x1="420" y1="50" x2="420" y2="120"/><polyline points="420,120 410,125 430,135 410,145 430,155 410,165 430,175 420,180"/><line x1="420" y1="180" x2="420" y2="250"/>
<line x1="420" y1="250" x2="60" y2="250"/>
<line x1="210" y1="34" x2="260" y2="34" marker-end="url(#net-arr)"/>
</g>
<circle cx="300" cy="50" r="4" fill="#1d2b44"/><circle cx="300" cy="250" r="4" fill="#1d2b44"/>
<g font-size="14" font-weight="600" fill="#1d2b44">
<text x="86" y="128">+</text><text x="86" y="156">−</text>
<text x="90" y="200">ℰ = 9.0 V</text>
<text x="128" y="28">R₁ = 3.0 Ω</text>
<text x="318" y="155">R₂</text><text x="438" y="155">R₃</text>
<text x="230" y="28" font-size="13">I</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="335" y="200">10 Ω</text><text x="455" y="200">15 Ω</text>
<text x="372" y="285">dashed: parallel group = 6.0 Ω</text>
</g>
</svg>
<figcaption>Figure 3. R₂ and R₃ share both junctions (dots), so they are in parallel. Their equivalent resistance (dashed box) is in series with R₁.</figcaption>
</figure>

1. **Parallel group.** 1/R_p = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6, so R_p = 6.0 Ω.
2. **Whole circuit.** R₁ is in series with R_p: R_eq = 3.0 Ω + 6.0 Ω = 9.0 Ω.
3. **Total current.** I = ℰ/R_eq = 9.0 V ÷ 9.0 Ω = 1.0 A. All of it passes through R₁.
4. **Potential differences.** ΔV₁ = (1.0 A)(3.0 Ω) = 3.0 V. Across the parallel group, ΔV_p = (1.0 A)(6.0 Ω) = 6.0 V. Both R₂ and R₃ have 6.0 V across them.
5. **Branch currents.** I₂ = 6.0 V ÷ 10 Ω = 0.60 A; I₃ = 6.0 V ÷ 15 Ω = 0.40 A.

**Answer.** R₁: 1.0 A, 3.0 V. R₂: 0.60 A, 6.0 V. R₃: 0.40 A, 6.0 V.

**Check.** The branch currents add to the total: 0.60 A + 0.40 A = 1.0 A. The potential differences along one path add to the emf: 3.0 V + 6.0 V = 9.0 V. Energy also balances: the resistors dissipate 3.0 W + 3.6 W + 2.4 W = 9.0 W, equal to ℰI = (9.0 V)(1.0 A). Notice that the **smaller** resistor in the parallel group carries the **larger** current.

## Worked example 2: internal resistance and a second lamp

**Question.** A battery has emf 6.0 V and internal resistance 0.50 Ω. (a) A lamp of resistance 2.5 Ω is connected across it. Find the current and the terminal voltage. (b) A second, identical lamp is connected in parallel with the first. Find the new terminal voltage and the current in each lamp. Treat the lamp resistance as constant.

1. (a) The lamp and r are in series: I = ℰ/(R + r) = 6.0 V ÷ (2.5 Ω + 0.50 Ω) = 2.0 A.
2. Terminal voltage: ΔV_terminal = ℰ − Ir = 6.0 V − (2.0 A)(0.50 Ω) = 5.0 V. Check: IR = (2.0 A)(2.5 Ω) = 5.0 V across the lamp.
3. (b) Two 2.5 Ω lamps in parallel: R_ext = 2.5 Ω ÷ 2 = 1.25 Ω.
4. New current from the battery: I = 6.0 V ÷ (1.25 Ω + 0.50 Ω) = 3.43 A (3.4286 A).
5. Terminal voltage: 6.0 V − (3.4286 A)(0.50 Ω) = 6.0 V − 1.71 V = 4.29 V.
6. Each lamp has the terminal voltage across it: I_lamp = 4.2857 V ÷ 2.5 Ω = 1.71 A.

**Answer.** (a) 2.0 A, 5.0 V. (b) Terminal voltage 4.3 V; each lamp carries 1.7 A.

**Interpretation.** Adding the second lamp increased the total current, so more of the emf was lost across r. The first lamp's current fell from 2.0 A to 1.7 A, so it got **dimmer** (its power fell from 10 W to about 7.3 W). With an **ideal** battery, the terminal voltage would stay at 6.0 V and each lamp would carry 6.0 V ÷ 2.5 Ω = 2.4 A whatever the number of lamps. This is one reason a lamp can dim when a high-current device is switched on from the same battery.

## Worked example 3: a real voltmeter

**Question.** Two equal resistors are in series across an ideal battery, so each has half the emf across it. A student measures the potential difference across one of them with a voltmeter whose resistance is large but finite. Will the reading be equal to, greater than or less than half the emf? Explain without calculation.

1. The voltmeter is connected in parallel with one resistor. It forms a second branch with very large resistance.
2. Adding a branch in parallel always lowers the equivalent resistance of that part, so the measured resistor plus voltmeter now has slightly **less** resistance than the other resistor.
3. In series, the same current passes through both parts, so the part with less resistance has the smaller share of the emf.

**Answer.** The reading is slightly **less** than half the emf.

**Check.** The larger the voltmeter's resistance compared with the resistor, the smaller the change. That is why a good voltmeter has a very large resistance, and why an ideal one is treated as infinite.

## Common misconceptions

- **"Current is used up as it passes through resistors in series."** The current is the same in every element in series. What decreases along the path is the electric potential.
- **"Adding a resistor always increases the resistance."** Only in series. A resistor added in parallel gives charge another path and lowers R_eq.
- **"Parallel branches share the current equally."** Only if they have equal resistance. The branch with the smaller resistance carries the larger current, because every branch has the same ΔV.
- **Forgetting to invert.** 1/R_eq = 0.25 Ω⁻¹ means R_eq = 4 Ω, not 0.25 Ω.
- **"Elements drawn next to each other are in parallel."** Parallel means both ends share the same two points. Trace the connections.
- **"A battery always supplies its emf."** The terminal voltage of a real battery is ℰ − Ir and falls as the current rises.
- **"The internal resistance is part of the external circuit."** It is inside the battery, in series with everything else. You cannot put a voltmeter across r alone.
- **"Meters never affect a circuit."** Ideal meters do not. Real ammeters add a little resistance in series; real voltmeters add a parallel branch.

## Where this leads

So far you have relied on two ideas: potential differences along a path add up, and currents into a junction share out. Topic 11.6 turns the first idea into Kirchhoff's loop rule, which also handles circuits that cannot be reduced to series and parallel groups. Continue with [Topic 11.6, Kirchhoff's Loop Rule](/advanced-course-resources/physics-2/11-6-kirchhoffs-loop-rule-study-guide/). First test yourself with the [practice questions](/advanced-course-resources/physics-2/11-5-compound-direct-current-dc-circuits-practice/), then use the [revision notes](/advanced-course-resources/physics-2/11-5-compound-direct-current-dc-circuits-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/11-5-compound-direct-current-dc-circuits-checklist/) to consolidate.
