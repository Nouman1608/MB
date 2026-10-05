---
resourceId: "mb-ap-phys2-11.4-study-guide"
title: "Electric Power: Study Guide (Physics 2 11.4)"
description: "The rate of energy transfer in a circuit: P = IΔV and its forms I²R and ΔV²/R, energy into and out of a circuit, factors of change and predicting bulb brightness."
course: "physics-2"
unit: 11
topics: ["11.4"]
resourceType: "study-guide"
prerequisites:
  - "Ohm's law and resistance, I = ΔV/R (Topic 11.3)"
  - "Potential difference as energy per unit charge (Topic 10.5)"
  - "Power as the rate of energy transfer, P = ΔE/Δt"
prerequisiteResources: ["mb-ap-phys2-11.3-study-guide"]
learningObjectives:
  - "Derive P = IΔV from the definitions of current and potential difference"
  - "Derive and choose between P = I²R and P = ΔV²/R for a resistor"
  - "Describe where energy enters, leaves and is transferred within a circuit, and check that the rates balance"
  - "Predict how power changes when current, potential difference or resistance changes"
  - "Use power to compare the brightness of bulbs"
  - "Sketch graphs of power against current, potential difference or resistance"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Convert minutes to seconds before using ΔE = PΔt. Treat bulbs as having constant resistance unless told otherwise"
related: ["mb-ap-phys2-11.4-revision-notes", "mb-ap-phys2-11.4-practice", "mb-ap-phys2-11.4-checklist"]
next: "mb-ap-phys2-11.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Electric power is the rate at which a circuit element transfers energy: P = IΔV. Unit: watt, 1 W = 1 J/s."
  - "For a resistor, Ohm's law gives two more forms: P = I²R and P = ΔV²/R."
  - "Energy enters a circuit at the source and leaves at resistors and bulbs. With an ideal battery, the rates balance."
  - "A brighter bulb is one with a greater power."
  - "Same ΔV: smaller R gives more power. Same I: larger R gives more power."
faqs:
  - question: "Which power formula should I use?"
    answer: "All three give the same answer for a resistor. Pick the one that uses the quantity that is the same for the elements you are comparing: P = I²R when the current is shared (one loop), and P = ΔV²/R when the potential difference is the same (each element connected directly across the same battery)."
  - question: "What does a rating such as 6.0 V, 3.0 W on a bulb mean?"
    answer: "The bulb transfers energy at 3.0 W when there is 6.0 V across it. From the rating you can find its resistance, R = ΔV²/P = 12 Ω, if you assume that resistance stays constant."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Power as a rate of energy transfer

In Topic 11.3 you saw that a resistor converts electrical energy into thermal energy. This topic is about **how fast** it does so. **Power** is the rate at which energy is transferred, converted or dissipated:

**P = ΔE / Δt**

Its unit is the **watt (W)**, and 1 W = 1 J/s.

### Deriving P = IΔV

Two definitions you already know give the electrical form.

- Potential difference is energy per unit charge (Topic 10.5): when a charge q passes through an element with potential difference ΔV across it, the energy transferred is ΔE = qΔV.
- Current is charge per unit time (Topic 11.1): I = q/Δt.

Divide the energy by the time:

P = ΔE/Δt = qΔV/Δt = (q/Δt)ΔV, so **P = IΔV**

This holds for **any** circuit element: a resistor, a bulb, a motor or a battery. Units check: A × V = (C/s)(J/C) = J/s = W.

Example: 2.0 C passes through a lamp with 6.0 V across it in 0.50 s. The energy transferred is 2.0 C × 6.0 V = 12 J, so P = 12 J ÷ 0.50 s = 24 W. Using the formula: I = 2.0 C ÷ 0.50 s = 4.0 A and P = 4.0 A × 6.0 V = 24 W.

### Two forms for a resistor

For a resistor, ΔV = IR. Substituting into P = IΔV gives two **derived** forms:

- replace ΔV: P = I(IR), so **P = I²R**
- replace I: P = (ΔV/R)ΔV, so **P = ΔV²/R**

All three forms give the same number for the same resistor. Choose the one whose quantities you know, or the one that keeps the shared quantity in view when you compare elements.

## Energy into, out of and within a circuit

Follow the energy around a single loop.

- **Into the circuit.** The battery converts chemical energy into electrical energy. Charges gain potential energy as they pass through it. For an ideal battery of emf ℰ carrying current I, the rate is P = Iℰ.
- **Out of the circuit.** In each resistor, charges lose potential energy and the energy becomes thermal energy, which spreads into the surroundings. A bulb also emits light. We say the energy is **dissipated**: it leaves the circuit and cannot be recovered as electrical energy.
- **Within the circuit.** Some elements store energy instead. A charging capacitor (Topic 10.6) stores it in its electric field, and can return it later.

Energy is conserved. With an ideal battery and ideal wires, the rate at which energy enters equals the total rate at which it is dissipated and stored. This is a powerful check on any calculation.

## How power depends on current, potential difference and resistance

For an ohmic resistor (constant R):

- **P ∝ I²** and **P ∝ ΔV²**. Double the current through a resistor and its power becomes 4 times as large. Triple the potential difference and the power becomes 9 times as large.
- What happens when R changes depends on **what stays fixed**:
  - **Same ΔV** (each resistor connected directly across the same battery): P = ΔV²/R, so the **smaller** resistance has the greater power. With 9.0 V across it, a 3.0 Ω resistor dissipates 27 W but a 6.0 Ω resistor only 13.5 W.
  - **Same I** (resistors one after another in a single loop, which share one current): P = I²R, so the **larger** resistance has the greater power. With 2.0 A in each, the 3.0 Ω resistor dissipates 12 W and the 6.0 Ω resistor 24 W.

Neither rule is wrong. They answer different questions. Always ask "what is the same for these elements?" before choosing.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="pw-title pw-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pw-title">Sketches of power against current, and power against resistance</title>
<desc id="pw-desc">Two qualitative sketch graphs with no numbers. Left: power P on the vertical axis against current I on the horizontal axis for a fixed resistor. The curve starts at the origin and rises ever more steeply, a parabola. Right: power P against resistance R. A solid curve, labelled fixed delta V, starts high at small R and falls towards the R axis, a hyperbola. A dashed straight line, labelled fixed I, starts at the origin and rises steadily. The two cross once.</desc>
<defs><marker id="pw-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="70" y1="250" x2="270" y2="250" stroke="#1d2b44" stroke-width="2" marker-end="url(#pw-arr)"/>
<line x1="70" y1="250" x2="70" y2="25" stroke="#1d2b44" stroke-width="2" marker-end="url(#pw-arr)"/>
<polyline points="70,250 88,247.9 106,241.6 124,231.1 142,216.4 160,197.5 178,174.4 196,147.1 214,115.6 232,79.9 250,40" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="170" y="275">Current I</text>
<text x="40" y="140" transform="rotate(-90 40 140)">Power P</text>
<text x="170" y="300" font-size="12">fixed R: P = I²R</text>
</g>
<line x1="310" y1="250" x2="530" y2="250" stroke="#1d2b44" stroke-width="2" marker-end="url(#pw-arr)"/>
<line x1="310" y1="250" x2="310" y2="25" stroke="#1d2b44" stroke-width="2" marker-end="url(#pw-arr)"/>
<polyline points="350,40 370,110 390,145 410,166 430,180 450,190 470,197.5 490,203.3 510,208" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="310" y1="250" x2="510" y2="40" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 4"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="420" y="275">Resistance R</text>
<text x="290" y="140" transform="rotate(-90 290 140)">Power P</text>
</g>
<g font-size="12" fill="#1d2b44">
<text x="478" y="226">fixed ΔV: P = ΔV²/R</text>
<text x="440" y="132">fixed I: P = I²R</text>
</g>
</svg>
<figcaption>Figure 1. Left: for a fixed resistor, power grows with the square of the current (the same shape applies to P against ΔV). Right: how power depends on resistance depends on what is held fixed. At fixed ΔV (solid curve) power falls as R rises; at fixed I (dashed line) power rises in proportion to R.</figcaption>
</figure>

## Bulb brightness

The brightness of a bulb increases with its power. So to decide which of several bulbs is brightest, compare their powers. You often do not need numbers:

1. Decide what the bulbs share: the same ΔV, or the same I.
2. Use P = ΔV²/R or P = I²R to compare.
3. A bulb that carries no current (in an open loop or short-circuited, Topic 11.2) has P = 0 and is off.

Bulbs are often labelled with a **rating**, such as "6.0 V, 3.0 W". That means 3.0 W when 6.0 V is across it. With a different ΔV the power is different. In this course, treat a bulb's resistance as constant unless the question says otherwise, even though a real filament's resistance rises as it heats (Topic 11.3).

## Worked example 1: a heater three ways

**Question.** A heater has a resistance of 24 Ω and is connected across a 120 V supply. Find (a) the current, (b) the power, using all three forms, and (c) the energy transferred in 3.0 minutes.

1. (a) I = ΔV/R = 120 V ÷ 24 Ω = 5.0 A.
2. (b) P = IΔV = (5.0 A)(120 V) = 600 W.
3. Check: P = I²R = (5.0 A)²(24 Ω) = 600 W, and P = ΔV²/R = (120 V)² ÷ 24 Ω = 600 W.
4. (c) Δt = 3.0 × 60 s = 180 s. ΔE = PΔt = (600 W)(180 s) = 1.08 × 10⁵ J.

**Answer.** (a) 5.0 A; (b) 600 W; (c) 1.1 × 10⁵ J.

**Check.** All three forms agree, which confirms the arithmetic. If you forget to convert minutes, you get 1800 J, sixty times too small.

## Worked example 2: which bulb is brighter?

**Question.** Bulb X is rated 6.0 V, 3.0 W and bulb Y is rated 6.0 V, 12 W. Assume each has constant resistance. (a) Each bulb in turn is connected alone across a 6.0 V battery. Which is brighter? (b) Both bulbs are now connected one after the other in a single loop with the 6.0 V battery, as in Figure 2. An ammeter in the loop reads 0.40 A. Find the power of each bulb and say which is brighter. (c) Show that energy is conserved.

<figure>
<svg viewBox="0 0 540 300" role="img" aria-labelledby="xy-title xy-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="xy-title">Two bulbs and an ammeter in a single loop with a battery</title>
<desc id="xy-desc">A single rectangular loop. A 6.0 volt battery is on the left side with its positive terminal at the top. Along the top wire are bulb X and then bulb Y. On the right side is an ammeter, a circle with the letter A, reading 0.40 amperes. The bottom wire returns to the negative terminal. An arrow on the top wire shows conventional current to the right.</desc>
<defs><marker id="xy-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="80" y1="60" x2="80" y2="132"/><line x1="60" y1="132" x2="100" y2="132"/><line x1="70" y1="146" x2="90" y2="146" stroke-width="5"/><line x1="80" y1="146" x2="80" y2="240"/>
<line x1="80" y1="60" x2="184" y2="60"/><circle cx="200" cy="60" r="16"/><path d="M191 68 C191 46 209 46 209 68"/><line x1="216" y1="60" x2="314" y2="60"/>
<circle cx="330" cy="60" r="16"/><path d="M321 68 C321 46 339 46 339 68"/><line x1="346" y1="60" x2="440" y2="60"/>
<line x1="440" y1="60" x2="440" y2="134"/><circle cx="440" cy="150" r="16"/><line x1="440" y1="166" x2="440" y2="240"/>
<line x1="440" y1="240" x2="80" y2="240"/>
<line x1="240" y1="40" x2="285" y2="40" marker-end="url(#xy-arr)"/>
</g>
<g font-size="14" font-weight="600" fill="#1d2b44" text-anchor="middle">
<text x="108" y="130">+</text><text x="104" y="162">−</text>
<text x="200" y="100">X</text><text x="330" y="100">Y</text><text x="440" y="155">A</text>
<text x="262" y="32" font-size="13">I</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="40" y="143">6.0 V</text><text x="490" y="154">0.40 A</text>
<text x="200" y="116">6.0 V, 3.0 W</text><text x="330" y="116">6.0 V, 12 W</text>
</g>
</svg>
<figcaption>Figure 2. Bulbs X and Y one after the other in a single loop with a 6.0 V battery. Because there is only one path, the ammeter reading, 0.40 A, is the current in both bulbs.</figcaption>
</figure>

1. Resistances from the ratings, R = ΔV²/P: R_X = (6.0 V)² ÷ 3.0 W = 12 Ω; R_Y = (6.0 V)² ÷ 12 W = 3.0 Ω.
2. (a) Alone across 6.0 V, each bulb has its rated ΔV, so P_X = 3.0 W and P_Y = 12 W. **Y is brighter.** (Same ΔV: smaller R, more power.)
3. (b) In one loop the current is the same in both: I = 0.40 A. Use P = I²R.
   - P_X = (0.40 A)²(12 Ω) = 1.92 W.
   - P_Y = (0.40 A)²(3.0 Ω) = 0.48 W.
   - **X is brighter**, four times the power of Y. (Same I: larger R, more power.)
4. (c) Power delivered by the battery: Iℰ = (0.40 A)(6.0 V) = 2.4 W. Total dissipated: 1.92 W + 0.48 W = 2.4 W. They match.

**Answer.** (a) Y is brighter; (b) P_X = 1.9 W, P_Y = 0.48 W, so X is brighter; (c) 2.4 W in and 2.4 W out.

**Interpretation.** The "stronger" 12 W bulb is the dimmer one in the single loop. The rating describes the bulb at 6.0 V, not in every circuit. Both bulbs are also dimmer than when each was alone, because they now carry a smaller current.

## Worked example 3: a symbolic derivation and a factor of change

**Question.** A heater element is a wire of resistivity ρ, length L and diameter d, connected across a fixed potential difference ΔV. (a) Derive an expression for its power in terms of these quantities. (b) The original heater has a power of 900 W. A new element is made from the same material, with 1.5 times the diameter and twice the length, and is connected to the same supply. Find its power.

1. (a) Resistance (Topic 11.3): R = ρL/A with A = πd²/4, so R = 4ρL/(πd²).
2. Fixed ΔV, so use P = ΔV²/R = ΔV² ÷ [4ρL/(πd²)].
3. **P = πd²ΔV² / (4ρL)**.
4. (b) Only d and L change, so P ∝ d²/L. Factor = (1.5)² ÷ 2 = 2.25 ÷ 2 = 1.125.
5. New power = 1.125 × 900 W = 1012.5 W.

**Answer.** (a) P = πd²ΔV²/(4ρL); (b) about 1.0 × 10³ W (1010 W).

**Check.** Units: (m²)(V²) ÷ [(Ω·m)(m)] = V²/Ω = W. Sense: a thicker wire has less resistance, so more power at fixed ΔV; a longer wire has more resistance, so less. The thicker wire wins slightly. Note also that halving ΔV would cut the power to a quarter, because P ∝ ΔV².

## Common misconceptions

- **"A bigger resistance always means more power."** Only when the current is the same. At the same ΔV the smaller resistance has more power.
- **"The higher-rated bulb is always brighter."** A rating only applies at the stated ΔV. Worked example 2 shows the opposite in a single loop.
- **"Current is used up in a bulb."** The current entering and leaving a bulb is the same. Energy is what the bulb transfers out of the circuit.
- **"Power is energy."** Power is the rate of energy transfer. Energy = power × time, with time in seconds for joules.
- **"Doubling the current doubles the power."** For a resistor, P ∝ I², so doubling I makes P four times as large.
- **Using P = IΔV with the battery's emf for one bulb.** Use the potential difference across that particular element.

## Where this leads

Power is the energy side of every circuit you will analyse. Next, Topic 11.5 combines resistors into compound circuits, where you will predict bulb brightness in branches using these rules: continue with [Topic 11.5, Compound Direct Current (DC) Circuits](/advanced-course-resources/physics-2/11-5-compound-direct-current-dc-circuits-study-guide/). First test yourself with the [practice questions](/advanced-course-resources/physics-2/11-4-electric-power-practice/), then use the [revision notes](/advanced-course-resources/physics-2/11-4-electric-power-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/11-4-electric-power-checklist/) to consolidate.
