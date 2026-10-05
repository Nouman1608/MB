---
resourceId: "mb-ap-physcem-11.3-study-guide"
title: "Resistance, Resistivity and Ohm's Law: Study Guide (Physics C: E&M 11.3)"
description: "Calculus-based guide to resistance: R = ρℓ/A from E = ρJ, resistivity and temperature, integrating a resistivity that varies along a wire, Ohm's law and finding R from an I–ΔV graph."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.3"]
resourceType: "study-guide"
prerequisites:
  - "Current density and the field in a conductor, J = I/A and E = ρJ (Topic 11.1)"
  - "Potential difference across a uniform field, ΔV = Eℓ (Unit 9)"
  - "Closed loops and circuit symbols (Topic 11.2)"
  - "Integrating a simple function of x"
prerequisiteResources: ["mb-ap-physcem-11.2-study-guide"]
learningObjectives:
  - "Explain what resistance measures and calculate it from the definition R = ΔV/I"
  - "Derive R = ρℓ/A from E = ρJ and use it to predict how R changes with length, area and material"
  - "Explain resistivity as a material property and describe how it changes with temperature in a conductor"
  - "Find the resistance of a wire whose resistivity varies along its length by integrating ρ(x) dx/A"
  - "State Ohm's law, distinguish ohmic from non-ohmic elements, and explain why a resistor can warm up"
  - "Plot current against potential difference from data and find the resistance from the slope"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Copper resistivity 1.7 × 10⁻⁸ Ω·m at room temperature; other materials are given in each example. Keep unrounded values until the final step"
related: ["mb-ap-physcem-11.3-revision-notes", "mb-ap-physcem-11.3-practice", "mb-ap-physcem-11.3-checklist"]
next: "mb-ap-physcem-11.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Resistance measures how strongly an object opposes the flow of charge: R = ΔV/I, measured in ohms (1 Ω = 1 V/A)."
  - "For a uniform wire, R = ρℓ/A: longer means more resistance, thicker means less, and the material sets ρ."
  - "Resistivity ρ is a property of the material; in a metal it usually rises with temperature."
  - "If ρ varies along the wire, add thin slices in series: R = (1/A)∫ρ(x) dx."
  - "Ohm's law, ΔV = IR with R constant, holds for ohmic elements; on an I–ΔV graph they give a straight line through the origin with slope 1/R."
faqs:
  - question: "Is ΔV = IR the same thing as Ohm's law?"
    answer: "Not quite. R = ΔV/I is the definition of resistance and can be used at any single point. Ohm's law is the extra claim that R stays the same for all currents. Elements for which that is true are called ohmic."
  - question: "Why does the slope of an I–ΔV graph give 1/R rather than R?"
    answer: "Current is on the vertical axis and potential difference on the horizontal axis, so the slope is ΔI/ΔV = 1/R. If the graph is drawn the other way round, with ΔV on the vertical axis, the slope is R."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 11.3. You will derive the resistance of a wire from the field inside it, and integrate when the material changes along the wire. You will also plot and read experimental data, which the course expects you to do with care.

Constant used throughout: copper has resistivity **1.7 × 10⁻⁸ Ω·m** at room temperature. Every other material in this guide is given its own value.

## What resistance measures

In Topic 11.2 you saw that a bulb lights only if there is a potential difference across it. The same potential difference does not drive the same current through every object. A short thick copper wire lets a large current through; a thin wire of a heating alloy lets much less through. **Resistance** measures how strongly an object opposes the movement of charge through it:

**R = ΔV / I**

- ΔV is the potential difference across the object and I is the current in it.
- The SI unit is the **ohm**: 1 Ω = 1 V/A.
- A large R means a large potential difference is needed for a given current.

Resistance belongs to an **object**: this wire, this lamp, this resistor. It depends on what the object is made of **and** on its shape. The next section separates those two parts.

## From E = ρJ to R = ρℓ/A

In Topic 11.1 you met the link between the field inside a conductor and the current density:

**E = ρJ**

Here ρ is the **resistivity** of the material, in Ω·m. Now apply it to a straight wire of length ℓ and uniform cross-sectional area A, made of one material, carrying a steady current I.

1. The current spreads evenly over the cross-section, so J = I/A.
2. The field inside is uniform and along the wire, so the potential difference between the ends is ΔV = Eℓ.
3. Combine: ΔV = Eℓ = ρJℓ = ρ(I/A)ℓ.
4. Divide by I: **R = ΔV/I = ρℓ/A**.

This shows how each factor matters:

- **Length.** R ∝ ℓ. Double the length and the charge has twice as far to go against the same opposition, so R doubles.
- **Area.** R ∝ 1/A. Double the area and there are twice as many parallel paths, so R halves. For a round wire, A = πr² = πd²/4, so doubling the **diameter** makes R four times smaller.
- **Material.** R ∝ ρ. Copper's ρ is about 1.7 × 10⁻⁸ Ω·m; the alloy in Worked example 1 is about 65 times larger, and insulators are larger by many powers of ten.

**Stretching a wire.** If a wire is pulled to n times its length, its volume stays the same, so its area falls to A/n. Then R = ρ(nℓ)/(A/n) = n²(ρℓ/A). Stretching to twice the length makes R four times larger.

## Resistivity is a property of the material

Resistivity does not depend on the size or shape of a sample. It depends on the **atomic and molecular structure** of the material: how many charge carriers it has and how often they are scattered as they drift. A copper coin and a copper cable have the same resistivity but very different resistances.

**Temperature.** In a metal, the charge carriers scatter off the vibrating ions. When the metal gets hotter, the ions vibrate more, the carriers scatter more often, and the resistivity **increases**. So the resistivity of a conductor typically rises with temperature.

**The ohmic model.** In many problems you treat a resistor as **ohmic**: its resistivity, and so its resistance, stays constant regardless of temperature. Real resistors are designed to come close to this over their working range. When a question says an element is ohmic, or simply gives you a fixed R, use a constant value.

**Resistors and thermal energy.** As charge drifts through a resistor, electrical energy is converted to thermal energy. This can raise the temperature of the resistor **and** of its surroundings. Topic 11.4 shows how to calculate the rate. For a component whose resistivity depends on temperature, such as the thin metal filament of a lamp, this heating changes the resistance as the current rises.

## When the resistivity changes along the wire

Suppose the wire has a uniform area A, but its material changes gradually along its length, so the resistivity is a function ρ(x) of the distance x from one end. You cannot use a single ρ in ρℓ/A.

Split the wire into thin slices of thickness dx. Each slice is short enough that ρ is constant across it, so its resistance is

dR = ρ(x) dx / A

The same current passes through every slice in turn, and the potential differences across them add. So the resistances of the slices add too:

**R = (1/A) ∫₀ˡ ρ(x) dx**

Check: if ρ is constant, the integral gives ρℓ and you get back R = ρℓ/A. Because the current is the same in every slice, the potential difference is **not** shared evenly: more of it falls across the slices with higher resistivity. The field is larger there too, since E = ρJ and J is the same everywhere.

## Ohm's law

The definition R = ΔV/I works at any single moment for any element. **Ohm's law** is a stronger statement about some materials:

**ΔV = IR, with R constant for all currents**

- Elements that obey it are called **ohmic**. Double the potential difference and the current doubles.
- Elements that do not are **non-ohmic**. A filament lamp is the usual example. As the current rises, the filament heats up, its resistivity rises, and so does its resistance.

<figure>
<svg viewBox="0 0 560 370" role="img" aria-labelledby="ohm-title ohm-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ohm-title">Current against potential difference for an ohmic resistor and a filament lamp</title>
<desc id="ohm-desc">Horizontal axis: potential difference in volts from 0 to 7. Vertical axis: current in amperes from 0 to 0.35. Solid straight line from the origin rising steadily, labelled ohmic resistor, constant slope. Dashed curve from the origin that rises steeply at first and then flattens, labelled filament lamp. The two meet at 6 volts and 0.30 amperes, marked with an open circle. Below 6 volts the dashed curve lies above the line; above 6 volts it lies below.</desc>
<defs><marker id="ohm-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="70" y1="300" x2="545" y2="300" stroke="#1d2b44" stroke-width="2" marker-end="url(#ohm-arr)"/>
<line x1="70" y1="300" x2="70" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#ohm-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="201.4" y1="300" x2="201.4" y2="306" stroke="#1d2b44"/><text x="201.4" y="320">2</text>
<line x1="332.9" y1="300" x2="332.9" y2="306" stroke="#1d2b44"/><text x="332.9" y="320">4</text>
<line x1="464.3" y1="300" x2="464.3" y2="306" stroke="#1d2b44"/><text x="464.3" y="320">6</text>
<text x="300" y="350" font-size="13">Potential difference, ΔV (V)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="64" y1="231.4" x2="70" y2="231.4" stroke="#1d2b44"/><text x="60" y="235">0.10</text>
<line x1="64" y1="162.9" x2="70" y2="162.9" stroke="#1d2b44"/><text x="60" y="167">0.20</text>
<line x1="64" y1="94.3" x2="70" y2="94.3" stroke="#1d2b44"/><text x="60" y="98">0.30</text>
</g>
<text x="18" y="180" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 180)">Current, I (A)</text>
<line x1="70" y1="300" x2="530" y2="60" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="70.0,300.0 86.4,269.4 102.9,253.7 135.7,229.8 168.6,210.5 201.4,193.6 234.3,178.3 267.1,164.3 300.0,151.1 332.9,138.7 365.7,126.9 398.6,115.6 431.4,104.7 464.3,94.3 497.1,84.2 530.0,74.4" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 5"/>
<circle cx="464.3" cy="94.3" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="300" y="205">ohmic resistor: straight line, slope = 1/R</text>
<text x="110" y="150">filament lamp (dashed):</text>
<text x="110" y="166">slope falls as R rises</text>
</g>
</svg>
<figcaption>Figure 1. Current against potential difference for an ohmic resistor (solid straight line) and a filament lamp (dashed curve). The two have the same resistance, ΔV/I = 20 Ω, only at the open circle. Below that point the lamp, being cooler, has less resistance; above it, more.</figcaption>
</figure>

**Reading resistance from a graph.** For an ohmic element, a graph of current I (vertical) against potential difference ΔV (horizontal) is a straight line through the origin. Its slope is ΔI/ΔV = **1/R**, so **R = 1/slope**. For a non-ohmic element, R at a given point is ΔV/I at **that point**, read from the coordinates; it is not 1 ÷ (the slope of the tangent).

## Worked example 1: designing a heating coil

**Question.** A heating coil is made from 2.5 m of alloy wire with diameter 0.50 mm. The alloy has resistivity 1.1 × 10⁻⁶ Ω·m. Treat the coil as ohmic. (a) Find its resistance. (b) Find the current when 7.0 V is applied, and check the field in the wire using E = ρJ. (c) The same piece of wire is stretched evenly to 5.0 m. Find the new resistance. (d) Compare with a copper wire of the same size.

1. Convert the diameter and find the area: r = 0.25 mm = 2.5 × 10⁻⁴ m, so A = π(2.5 × 10⁻⁴ m)² = 1.96 × 10⁻⁷ m².
2. (a) R = ρℓ/A = (1.1 × 10⁻⁶ Ω·m)(2.5 m) ÷ (1.96 × 10⁻⁷ m²) = **14 Ω** (14.0 Ω).
3. (b) I = ΔV/R = 7.0 V ÷ 14.0 Ω = **0.50 A**. Field from the potential difference: E = ΔV/ℓ = 7.0 V ÷ 2.5 m = 2.8 V/m. Field from the current density: J = I/A = 2.55 × 10⁶ A/m², so ρJ = (1.1 × 10⁻⁶)(2.55 × 10⁶) = 2.8 V/m. The two agree.
4. (c) Twice the length at constant volume means half the area, so R increases by 2 × 2 = 4: **56 Ω**.
5. (d) Copper: R = (1.7 × 10⁻⁸)(2.5) ÷ (1.96 × 10⁻⁷) = 0.22 Ω, about 65 times smaller. The ratio is just the ratio of the resistivities, because the shape is the same.

**Check.** Units: Ω·m × m ÷ m² = Ω. Copper connecting wires have much less resistance than the coil, which is why we usually treat them as ideal (Topic 11.2).

## Worked example 2: resistance from plotted data

**Question.** A student connects a coil of wire to a variable supply and records the potential difference across it and the current in it. The wire is 1.20 m long with diameter 0.30 mm. (a) Plot I against ΔV and decide whether the coil is ohmic over this range. (b) Find its resistance from the graph. (c) Find the resistivity of the wire.

| ΔV (V) | 0.50 | 1.00 | 1.50 | 2.00 | 2.50 | 3.00 |
|---|---|---|---|---|---|---|
| I (A) | 0.082 | 0.158 | 0.247 | 0.322 | 0.405 | 0.480 |

<figure>
<svg viewBox="0 0 560 370" role="img" aria-labelledby="iv-title iv-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="iv-title">Plotted current against potential difference for a coil of wire</title>
<desc id="iv-desc">Horizontal axis: potential difference in volts from 0 to 3.5, ticks every volt. Vertical axis: current in amperes from 0 to 0.6, ticks every 0.2. Six data points marked with crosses at 0.5, 1.0, 1.5, 2.0, 2.5 and 3.0 volts, with currents from 0.082 to 0.480 amperes. A straight best-fit line passes through the origin and close to every point. A right-angled triangle drawn under the line from the origin to 3.0 volts shows a rise of 0.483 amperes over a run of 3.00 volts.</desc>
<defs><marker id="iv-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="70" y1="300" x2="545" y2="300" stroke="#1d2b44" stroke-width="2" marker-end="url(#iv-arr)"/>
<line x1="70" y1="300" x2="70" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#iv-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="201.4" y1="300" x2="201.4" y2="306" stroke="#1d2b44"/><text x="201.4" y="320">1.0</text>
<line x1="332.9" y1="300" x2="332.9" y2="306" stroke="#1d2b44"/><text x="332.9" y="320">2.0</text>
<line x1="464.3" y1="300" x2="464.3" y2="306" stroke="#1d2b44"/><text x="464.3" y="320">3.0</text>
<text x="300" y="350" font-size="13">Potential difference, ΔV (V)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="64" y1="220" x2="70" y2="220" stroke="#1d2b44"/><text x="60" y="224">0.20</text>
<line x1="64" y1="140" x2="70" y2="140" stroke="#1d2b44"/><text x="60" y="144">0.40</text>
<line x1="64" y1="60" x2="70" y2="60" stroke="#1d2b44"/><text x="60" y="64">0.60</text>
</g>
<text x="18" y="180" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 180)">Current, I (A)</text>
<line x1="70" y1="300" x2="516.9" y2="80.8" stroke="#1d2b44" stroke-width="2"/>
<polyline points="70,300 464.3,300 464.3,106.6" fill="none" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="3 4"/>
<g stroke="#1d2b44" stroke-width="2">
<path d="M130.7 262.2 l10 10 M140.7 262.2 l-10 10"/>
<path d="M196.4 231.8 l10 10 M206.4 231.8 l-10 10"/>
<path d="M262.1 196.2 l10 10 M272.1 196.2 l-10 10"/>
<path d="M327.9 166.2 l10 10 M337.9 166.2 l-10 10"/>
<path d="M393.6 133.0 l10 10 M403.6 133.0 l-10 10"/>
<path d="M459.3 103.0 l10 10 M469.3 103.0 l-10 10"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="300" y="290" text-anchor="middle">run = 3.00 V</text>
<text x="472" y="210">rise = 0.483 A</text>
<text x="150" y="110">best-fit line through the origin</text>
<text x="150" y="126">slope = 0.161 A/V, so R = 6.2 Ω</text>
</g>
</svg>
<figcaption>Figure 2. The data from Worked example 2 (crosses) with a best-fit straight line through the origin. The dotted triangle uses a large part of the line to find the slope.</figcaption>
</figure>

**(a) Plot and decide.** Choose scales that use most of the grid: ΔV from 0 to 3.5 V and I from 0 to 0.6 A, with units on each axis (Figure 2). The points lie close to a straight line through the origin, so **the coil behaves as ohmic over this range**. The small scatter is measurement uncertainty. Calculating ΔV/I for each row gives values between 6.07 Ω and 6.33 Ω with no steady trend, which supports this.

**(b) Resistance from the slope.** Draw one best-fit line, not a line through the first and last points. Read the slope from a large triangle: the line passes through (0, 0) and (3.00 V, 0.483 A), so slope = 0.483 A ÷ 3.00 V = 0.161 A/V. Then R = 1/slope = 1 ÷ 0.161 A/V = **6.2 Ω**.

**(c) Resistivity.** A = π(1.5 × 10⁻⁴ m)² = 7.07 × 10⁻⁸ m². ρ = RA/ℓ = (6.21 Ω)(7.07 × 10⁻⁸ m²) ÷ 1.20 m = **3.7 × 10⁻⁷ Ω·m**.

**Interpretation.** A best-fit line uses all six readings at once, so random errors partly cancel. If the points had curved away from the line at higher potential differences, that would suggest the wire was warming up and its resistance rising.

## Worked example 3: a wire with graded resistivity

**Question.** A rod of length L = 0.80 m and uniform area A = 2.0 × 10⁻⁷ m² is made of a material whose resistivity rises steadily from one end: ρ(x) = ρ₀(1 + 2x/L), with ρ₀ = 4.0 × 10⁻⁷ Ω·m. (a) Derive its resistance. (b) A potential difference of 1.6 V is applied across it. How is this shared between the two halves? (c) Compare the field at the two ends.

**(a) Resistance.** Add slices in series:

R = (1/A) ∫₀ᴸ ρ₀(1 + 2x/L) dx = (ρ₀/A)[x + x²/L]₀ᴸ = (ρ₀/A)(L + L) = **2ρ₀L/A**

With numbers: R = 2(4.0 × 10⁻⁷ Ω·m)(0.80 m) ÷ (2.0 × 10⁻⁷ m²) = **3.2 Ω**.

**(b) Sharing the potential difference.** The current is I = 1.6 V ÷ 3.2 Ω = 0.50 A in every slice. The first half has resistance (ρ₀/A)[x + x²/L] from 0 to L/2, which is (ρ₀/A)(L/2 + L/4) = (3/4)(ρ₀L/A). That is 3/8 of the total. So the first half takes (3/8)(1.6 V) = **0.60 V** and the second half takes **1.0 V**.

**(c) Fields.** J = I/A = 2.5 × 10⁶ A/m² everywhere. At x = 0, E = ρ₀J = **1.0 V/m**. At x = L, ρ = 3ρ₀, so E = **3.0 V/m**.

**Check.** If ρ were constant at ρ₀, R would be ρ₀L/A = 1.6 Ω; the graded rod has twice that, which makes sense because its average resistivity is 2ρ₀. The average field is 1.6 V ÷ 0.80 m = 2.0 V/m, between the two end values.

## Common misconceptions

- **"R = ΔV/I is Ohm's law."** It is the definition of resistance. Ohm's law says R stays constant as the current changes.
- **"Resistance and resistivity are the same thing."** Resistivity belongs to the material; resistance belongs to the object and also depends on ℓ and A.
- **Using diameter in place of radius.** A = πr² = πd²/4. Forgetting to halve d makes A four times too big and R four times too small.
- **"Stretching to twice the length doubles R."** The area also halves, so R becomes four times larger.
- **Taking the slope of an I–ΔV graph as R.** With I on the vertical axis, the slope is 1/R.
- **Using a tangent slope for a non-ohmic element.** R at a point is ΔV/I at that point.
- **"A thicker wire has more resistance because there is more metal."** More area means more paths for charge, so less resistance.
- **Using one value of ρ when ρ varies.** Integrate ρ(x) dx and divide by A.

## Where this leads

Next, [Topic 11.4, Electric Power](/advanced-course-resources/physics-c-electricity-and-magnetism/11-4-electric-power-study-guide/), uses ΔV = IR to find how fast resistors convert electrical energy, and why some bulbs glow more brightly than others. Topic 11.5 combines resistors in series and parallel. Go back to [Topic 11.2, Simple Circuits](/advanced-course-resources/physics-c-electricity-and-magnetism/11-2-simple-circuits-study-guide/) if loops and symbols feel shaky. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/11-3-resistance-resistivity-ohms-law-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/11-3-resistance-resistivity-ohms-law-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-3-resistance-resistivity-ohms-law-checklist/).
