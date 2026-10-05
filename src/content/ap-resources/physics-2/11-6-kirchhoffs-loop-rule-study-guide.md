---
resourceId: "mb-ap-phys2-11.6-study-guide"
title: "Kirchhoff's Loop Rule: Study Guide (Physics 2 11.6)"
description: "Kirchhoff's loop rule from energy conservation: energy per charge, sign rules for batteries and resistors, graphs of potential around a loop, and loops with and without a battery."
course: "physics-2"
unit: 11
topics: ["11.6"]
resourceType: "study-guide"
prerequisites:
  - "Electric potential difference as energy per unit charge (Topic 10.5)"
  - "Series and parallel connections, emf and internal resistance (Topic 11.5)"
  - "Ohm's law ΔV = IR (Topic 11.3)"
prerequisiteResources: ["mb-ap-phys2-11.5-study-guide"]
learningObjectives:
  - "Describe energy changes in a circuit as charges moving through potential differences, using ΔU = qΔV"
  - "Explain why the loop rule follows from conservation of energy"
  - "Write a correct loop equation for any closed loop, with the right sign for each battery and resistor"
  - "Use the loop rule to find unknown currents, resistances, emfs and potentials"
  - "Sketch and interpret graphs of electric potential against position around a loop"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Choose one point as zero potential and keep it for the whole problem. Keep unrounded values until the final step"
related: ["mb-ap-phys2-11.6-revision-notes", "mb-ap-phys2-11.6-practice", "mb-ap-phys2-11.6-checklist"]
next: "mb-ap-phys2-11.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "A charge q moving through a potential difference ΔV changes its electric potential energy by ΔU = qΔV."
  - "Around any closed loop the potential differences add to zero: ΣΔV = 0. This is energy conservation."
  - "Battery from − to +: +ℰ. Resistor in the direction of the current: −IR. Against the current: +IR."
  - "The loop rule applies to every closed loop, including loops with no battery in them."
  - "A graph of potential against position around a loop rises at each emf, falls across each resistor and is flat along ideal wires."
faqs:
  - question: "Does it matter which way I go round the loop?"
    answer: "No. Going the other way changes the sign of every term, so the equation is the same equation multiplied by −1. Pick a direction, keep it for the whole loop, and apply the sign rules consistently."
  - question: "What if I guess the direction of the current wrongly?"
    answer: "Use your guess in the sign rules anyway. If the current comes out negative, it flows the other way with the same size. The loop equation is still correct."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Energy carried by moving charge

In Topic 10.5 you met electric potential difference as energy per unit charge. In a circuit this gives a simple way to track energy. When a charge q moves between two points with a potential difference ΔV between them, its electric potential energy changes by

**ΔU_E = qΔV**, or equivalently **ΔV = ΔU_E / q**

Positive charges (the carriers of conventional current) gain electric potential energy when they move to a higher potential and lose it when they move to a lower potential.

- **Inside a battery**, the battery does work on the charges, moving them from the negative terminal to the positive terminal. Non-electric energy (for example chemical energy) becomes electric potential energy. Each coulomb gains ℰ joules.
- **In a resistor**, charges move from high potential to low potential. Electric potential energy becomes thermal energy (or light, in a bulb).
- **Along an ideal wire**, there is no change in potential, so there is no energy change.

For example, when 0.40 C passes through a 1.5 V cell, it gains (0.40 C)(1.5 V) = 0.60 J of electric potential energy.

## The loop rule

Pick any point in a circuit and give it a value of electric potential. Now follow a closed loop and come back to the same point. You must arrive at the **same potential** you started with, because a point has only one value of potential. So the rises and falls along the way must cancel:

**ΣΔV = 0** around any closed loop

This is **Kirchhoff's loop rule**. It is a statement of **conservation of energy**. Multiply every term by a test charge q: the charge gains energy in the batteries and loses energy in the resistors, and when it returns to its starting point its electric potential energy is back where it started. The energy given to it equals the energy it gave out.

Two features matter in practice:

- The rule applies to **every** closed loop, not only the one containing the battery. A loop through two parallel branches has no emf, so the potential differences across the branches must cancel: parallel branches have equal potential differences, which is the rule you used in Topic 11.5.
- The rule says nothing about which loop you choose or where you start. Any closed path gives a correct equation.

### Sign rules

Choose a direction to go round the loop. Then add a term for each element you cross:

| You cross | In this direction | Term in ΣΔV |
|---|---|---|
| Battery (emf ℰ) | − terminal to + terminal | +ℰ |
| Battery (emf ℰ) | + terminal to − terminal | −ℰ |
| Resistor R with current I | same direction as the current | −IR |
| Resistor R with current I | against the current | +IR |
| Internal resistance r | treat it like any resistor | −Ir or +Ir |
| Ideal wire or ideal ammeter | either | 0 |

The resistor rule follows from the direction of conventional current: it flows from high potential to low potential through a resistor, so going **with** the current you go **downhill** in potential.

## Potential–position graphs

A useful picture of the loop rule is a graph of electric potential against position as you go round a loop. Choose one point (often the negative terminal of the battery) as V = 0. Then:

- The graph **rises** by ℰ across each ideal emf crossed from − to +.
- It **falls** by IR across each resistor crossed in the direction of the current. A larger resistance in series gives a larger fall.
- It is **flat** along ideal wires.
- It **ends at the same value** it started at. That is the loop rule.

Figure 2 shows the graph for Worked example 1.

## Worked example 1: one loop, with a potential graph

**Question.** In Figure 1 a battery of emf 12 V and internal resistance 1.0 Ω is connected to R₁ = 3.0 Ω and R₂ = 8.0 Ω in a single loop. (a) Use the loop rule to find the current. (b) Taking point a (the negative terminal) as 0 V, find the potential at b and c, and sketch the graph of potential against position. (c) How much energy does 2.0 C of charge gain and lose in one trip round the loop?

<figure>
<svg viewBox="0 0 540 300" role="img" aria-labelledby="kl1-title kl1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="kl1-title">Single loop with a real battery and two resistors</title>
<desc id="kl1-desc">A rectangular loop. On the left side a dashed rectangle represents the battery case. Inside it, from the bottom terminal up, are an ideal battery symbol of emf 12 volts with its long positive line on top, then the internal resistance r of 1.0 ohm. Point a is the bottom terminal, at the lower left corner of the loop. Point b is the top terminal. From b the wire goes up and right along the top through R1, 3.0 ohms, to point c at the top right corner. The wire then goes down the right side and back left along the bottom through R2, 8.0 ohms, to point a. An arrow on the top wire shows the conventional current I to the right.</desc>
<defs><marker id="kl1-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="70" y="90" width="60" height="140" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="100" y1="226" x2="100" y2="200"/><line x1="90" y1="200" x2="110" y2="200" stroke-width="5"/><line x1="80" y1="186" x2="120" y2="186"/><line x1="100" y1="186" x2="100" y2="170"/>
<polyline points="100,170 90,165 110,155 90,145 110,135 90,125 110,115 100,110"/><line x1="100" y1="110" x2="100" y2="94"/>
<line x1="100" y1="86" x2="100" y2="50"/><line x1="100" y1="50" x2="240" y2="50"/>
<polyline points="240,50 245,40 255,60 265,40 275,60 285,40 295,60 300,50"/><line x1="300" y1="50" x2="440" y2="50"/>
<line x1="440" y1="50" x2="440" y2="250"/><line x1="440" y1="250" x2="300" y2="250"/>
<polyline points="300,250 295,240 285,260 275,240 265,260 255,240 245,260 240,250"/><line x1="240" y1="250" x2="100" y2="250"/><line x1="100" y1="250" x2="100" y2="234"/>
<line x1="330" y1="34" x2="380" y2="34" marker-end="url(#kl1-arr)"/>
</g>
<circle cx="100" cy="90" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><circle cx="100" cy="230" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="440" cy="50" r="4" fill="#1d2b44"/>
<g font-size="14" font-weight="600" fill="#1d2b44">
<text x="112" y="74">b</text><text x="452" y="44">c</text><text x="80" y="270">a</text>
<text x="121" y="182">+</text><text x="353" y="28" font-size="13">I</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="64" y="145">r = 1.0 Ω</text><text x="64" y="197">ℰ = 12 V</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="270" y="28">R₁ = 3.0 Ω</text><text x="270" y="284">R₂ = 8.0 Ω</text>
</g>
</svg>
<figcaption>Figure 1. The dashed box is the battery case: an ideal emf in series with internal resistance r. Going round a → b → c → a follows the conventional current.</figcaption>
</figure>

1. (a) Go round a → b → c → a, in the direction of the current. Cross the emf from − to + (+ℰ), then r, R₁ and R₂ each in the direction of the current:
   +12 V − I(1.0 Ω) − I(3.0 Ω) − I(8.0 Ω) = 0
2. So 12 V = I(12 Ω), and I = 1.0 A.
3. (b) Start at a: V_a = 0. Crossing the emf raises the potential to 12 V. Crossing r lowers it by (1.0 A)(1.0 Ω) = 1.0 V, so **V_b = 11 V** (this is the terminal voltage, ℰ − Ir).
4. Crossing R₁ lowers it by (1.0 A)(3.0 Ω) = 3.0 V, so **V_c = 8.0 V**.
5. Crossing R₂ lowers it by (1.0 A)(8.0 Ω) = 8.0 V, back to **0 V** at a. The loop closes, as the rule requires.
6. (c) Using ΔU = qΔV with q = 2.0 C: the charge gains (2.0 C)(12 V) = 24 J in the emf. It loses 2.0 J in r, 6.0 J in R₁ and 16 J in R₂, a total of 24 J.

<figure>
<svg viewBox="0 0 540 310" role="img" aria-labelledby="kl2-title kl2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="kl2-title">Graph of electric potential against position around the loop</title>
<desc id="kl2-desc">Electric potential in volts on the vertical axis, with ticks at 0, 4, 8 and 12 volts. Position around the loop on the horizontal axis, marked a, b, c and back to a. Starting at a at 0 volts, the line rises steeply to 12 volts across the emf, then falls a little to 11 volts across the internal resistance, reaching b. It stays flat at 11 volts along the wire, falls to 8 volts across R1, reaching c, stays flat at 8 volts along the wire, then falls to 0 volts across R2 and stays flat at 0 volts along the wire back to a.</desc>
<defs><marker id="kl2-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="250" x2="525" y2="250" stroke="#1d2b44" stroke-width="2" marker-end="url(#kl2-arr)"/>
<line x1="80" y1="250" x2="80" y2="40" stroke="#1d2b44" stroke-width="2" marker-end="url(#kl2-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="190" x2="80" y2="190" stroke="#1d2b44"/><text x="70" y="194">4</text>
<line x1="74" y1="130" x2="80" y2="130" stroke="#1d2b44"/><text x="70" y="134">8</text>
<line x1="74" y1="70" x2="80" y2="70" stroke="#1d2b44"/><text x="70" y="74">12</text>
<text x="70" y="254">0</text>
</g>
<line x1="80" y1="85" x2="130" y2="85" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<path d="M80 250 L100 70 L130 85 H200 L280 130 H360 L440 250 H505" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<g font-size="14" font-weight="600" fill="#1d2b44" text-anchor="middle">
<text x="80" y="270">a</text><text x="130" y="270">b</text><text x="280" y="270">c</text><text x="505" y="270">a</text>
</g>
<g font-size="12" fill="#1d2b44">
<text x="140" y="60">emf: +12 V, then r: −1.0 V</text>
<text x="165" y="80">11 V</text><text x="305" y="124">8.0 V</text>
<text x="235" y="150">R₁: −3.0 V</text>
<text x="385" y="215" text-anchor="end">R₂: −8.0 V</text>
</g>
<text x="300" y="298" font-size="13" fill="#1d2b44" text-anchor="middle">Position around the loop (a → b → c → a)</text>
<text x="26" y="150" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 26 150)">Electric potential V (V)</text>
</svg>
<figcaption>Figure 2. Potential against position for Figure 1, with a at 0 V. The line rises across the emf, falls across r, R₁ and R₂, is flat along the wires, and ends where it started.</figcaption>
</figure>

**Answer.** (a) 1.0 A. (b) V_b = 11 V, V_c = 8.0 V; graph as in Figure 2. (c) It gains 24 J and loses 24 J.

**Check.** The larger resistor has the larger fall in potential, because the current is the same in every element of a single loop. A voltmeter between b and a reads 11 V, not 12 V: the terminal voltage is less than the emf when there is a current. If R₁ and R₂ swapped places, the graph would fall by 8.0 V first and then by 3.0 V, and V_c would be 3.0 V. The shape changes, but the size of each fall, and the return to 0 V at a, do not.

## Worked example 2: a loop with no battery

**Question.** In Figure 3 a battery (ℰ = 9.0 V, r = 0.50 Ω) is in series with R₁ = 2.0 Ω and two parallel branches between junctions P and Q. Branch X contains R₂ alone. Branch Y contains R₃ = 2.0 Ω in series with an unknown resistor Rₓ. Ammeters (not drawn) show 2.0 A in the battery, 1.2 A in branch X and 0.80 A in branch Y. Find the terminal voltage, R₂ and Rₓ.

<figure>
<svg viewBox="0 0 540 320" role="img" aria-labelledby="kl3-title kl3-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="kl3-title">Battery with internal resistance, a series resistor and two parallel branches</title>
<desc id="kl3-desc">On the left, a dashed battery case contains an internal resistance r above an emf symbol with its long positive line on top. From the top of the case the wire goes right along the top through R1, 2.0 ohms, to junction P. From P, branch X goes straight down through R2 to junction Q on the bottom wire, with a label showing 1.2 amps downward. The top wire continues right from P and then branch Y goes down through R3, 2.0 ohms, and then an unknown resistor Rx, to the bottom wire, with a label showing 0.80 amps. The bottom wire returns from Q to the negative terminal. A label on the top wire shows 2.0 amps to the right.</desc>
<defs><marker id="kl3-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="35" y="55" width="50" height="115" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="60" y1="50" x2="60" y2="60"/><polyline points="60,60 50,65 70,75 50,85 70,95 50,105 60,110"/><line x1="60" y1="110" x2="60" y2="140"/>
<line x1="40" y1="140" x2="80" y2="140"/><line x1="50" y1="154" x2="70" y2="154" stroke-width="5"/><line x1="60" y1="154" x2="60" y2="280"/>
<line x1="60" y1="50" x2="130" y2="50"/><polyline points="130,50 135,40 145,60 155,40 165,60 175,40 185,60 190,50"/><line x1="190" y1="50" x2="420" y2="50"/>
<line x1="300" y1="50" x2="300" y2="135"/><polyline points="300,135 290,140 310,150 290,160 310,170 290,180 310,190 300,195"/><line x1="300" y1="195" x2="300" y2="280"/>
<line x1="420" y1="50" x2="420" y2="85"/><polyline points="420,85 410,90 430,100 410,110 430,120 410,130 420,135"/><line x1="420" y1="135" x2="420" y2="175"/>
<polyline points="420,175 410,180 430,190 410,200 430,210 410,220 420,225"/><line x1="420" y1="225" x2="420" y2="280"/>
<line x1="420" y1="280" x2="60" y2="280"/>
<line x1="210" y1="34" x2="260" y2="34" marker-end="url(#kl3-arr)"/>
<line x1="282" y1="90" x2="282" y2="125" marker-end="url(#kl3-arr)"/>
<line x1="402" y1="140" x2="402" y2="170" marker-end="url(#kl3-arr)"/>
</g>
<circle cx="300" cy="50" r="4" fill="#1d2b44"/><circle cx="300" cy="280" r="4" fill="#1d2b44"/>
<g font-size="14" font-weight="600" fill="#1d2b44">
<text x="92" y="90">r</text><text x="92" y="152">ℰ</text><text x="22" y="138">+</text>
<text x="306" y="40">P</text><text x="306" y="302">Q</text>
<text x="318" y="170">R₂</text><text x="438" y="115">R₃</text><text x="438" y="205">Rₓ</text>
</g>
<g font-size="12" fill="#1d2b44">
<text x="235" y="26" text-anchor="middle">2.0 A</text>
<text x="276" y="112" text-anchor="end">1.2 A</text>
<text x="396" y="160" text-anchor="end">0.80 A</text>
<text x="160" y="76" text-anchor="middle">R₁ = 2.0 Ω</text>
<text x="462" y="115">2.0 Ω</text>
</g>
</svg>
<figcaption>Figure 3. Branch X (R₂) and branch Y (R₃ and Rₓ) both connect junction P to junction Q. Arrows show the measured currents.</figcaption>
</figure>

1. **Terminal voltage.** Cross the battery from − to +: ℰ − Ir = 9.0 V − (2.0 A)(0.50 Ω) = 8.0 V.
2. **Loop through the battery and branch X.** Going with the current: +9.0 V − (2.0 A)(0.50 Ω) − (2.0 A)(2.0 Ω) − ΔV_X = 0, so ΔV_X = 9.0 − 1.0 − 4.0 = 4.0 V.
3. **R₂.** R₂ = ΔV_X / I_X = 4.0 V ÷ 1.2 A = 3.3 Ω (3.33 Ω).
4. **Loop with no battery: P → X → Q → Y → P.** Go down through X with its current (−4.0 V), then up through Y against its current (+IR for each resistor): −4.0 V + (0.80 A)(2.0 Ω) + (0.80 A)Rₓ = 0.
5. So (0.80 A)Rₓ = 4.0 V − 1.6 V = 2.4 V, and **Rₓ = 3.0 Ω**.

**Answer.** Terminal voltage 8.0 V; R₂ = 3.3 Ω; Rₓ = 3.0 Ω.

**Check.** Branch Y has 1.6 V + 2.4 V = 4.0 V across it, the same as branch X, as the no-battery loop requires. The branch currents 1.2 A + 0.80 A add to the 2.0 A in the battery, which you will justify formally with the junction rule in Topic 11.7.

## Common misconceptions

- **"The first resistor after the battery uses up most of the voltage."** The share of each resistor in a single loop depends on its resistance, not on its position. The current is the same everywhere in the loop.
- **"The loop rule only works for the loop with the battery."** It holds for every closed loop. Loops without a source are often the quickest way to an unknown.
- **"Potential is used up, so the current gets smaller round the loop."** The potential falls round the loop; the current in a single loop does not change.
- **Mixing sign conventions half-way round.** Choose a direction once. Each resistor term is −IR going with its current and +IR going against it.
- **Forgetting internal resistance.** It is a resistor in the loop and needs its own −Ir term.
- **"The terminal voltage always equals the emf."** Only with no current in the battery.
- **Using a different zero of potential part-way through.** Only differences matter, but you must keep one reference point for the whole problem.

## Where this leads

The loop rule is one of two tools for analysing any circuit. Topic 11.7 adds the junction rule, from conservation of charge, so you can set up and solve equations for circuits with several unknown currents. Continue with [Topic 11.7, Kirchhoff's Junction Rule](/advanced-course-resources/physics-2/11-7-kirchhoffs-junction-rule-study-guide/). First test yourself with the [practice questions](/advanced-course-resources/physics-2/11-6-kirchhoffs-loop-rule-practice/), then use the [revision notes](/advanced-course-resources/physics-2/11-6-kirchhoffs-loop-rule-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/11-6-kirchhoffs-loop-rule-checklist/) to consolidate.
