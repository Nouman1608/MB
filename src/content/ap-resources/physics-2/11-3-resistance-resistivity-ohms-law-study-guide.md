---
resourceId: "mb-ap-phys2-11.3-study-guide"
title: "Resistance, Resistivity and Ohm's Law: Study Guide (Physics 2 11.3)"
description: "How the material and shape of a conductor set its resistance, R = ρL/A, Ohm's law, ohmic and non-ohmic elements, temperature effects and reading R from I–ΔV graphs."
course: "physics-2"
unit: 11
topics: ["11.3"]
resourceType: "study-guide"
prerequisites:
  - "Current as the rate of charge flow, I = ΔQ/Δt (Topic 11.1)"
  - "Closed loops, schematics and meter placement (Topic 11.2)"
  - "Potential difference in volts (Topic 10.5)"
prerequisiteResources: ["mb-ap-phys2-11.2-study-guide"]
learningObjectives:
  - "Explain resistance as the opposition an object gives to the movement of charge"
  - "Use R = ρL/A to calculate resistance and to predict how it changes with length, area and material"
  - "Describe resistivity as a property of a material and state how it usually changes with temperature"
  - "Apply Ohm's law, I = ΔV/R, and decide whether an element is ohmic"
  - "Find resistance from the slope of a current–potential difference graph"
  - "Plan and analyse an experiment that measures resistance or resistivity"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Convert mm to m and mm² to m² (1 mm² = 1.0 × 10⁻⁶ m²) before using R = ρL/A. Keep unrounded values until the final step"
related: ["mb-ap-phys2-11.3-revision-notes", "mb-ap-phys2-11.3-practice", "mb-ap-phys2-11.3-checklist"]
next: "mb-ap-phys2-11.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Resistance R measures how strongly an object opposes the movement of charge. Unit: ohm, 1 Ω = 1 V/A."
  - "For a uniform conductor, R = ρL/A: longer means more resistance, thicker means less."
  - "Resistivity ρ belongs to the material, not the object. For most conductors it rises with temperature."
  - "Ohm's law: I = ΔV/R. An ohmic element keeps the same R at every current."
  - "On a graph of I against ΔV, the slope is 1/R. A straight line through the origin means the element is ohmic."
faqs:
  - question: "What is the difference between resistance and resistivity?"
    answer: "Resistivity is a property of a material, such as copper, and does not depend on the size or shape of a sample. Resistance is a property of one particular object, such as a 2 m length of copper wire, and depends on both the material and the shape."
  - question: "Is a filament bulb ohmic?"
    answer: "No. As the current rises, the filament gets hotter and its resistivity increases, so its resistance is not constant. Its graph of current against potential difference curves instead of being a straight line."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What resistance measures

In Topic 11.2 you built circuits from loops. Connect the same battery to a short thick copper wire and then to a thin bulb filament, and you get very different currents. The difference comes from **resistance**.

**Resistance R** is a measure of how strongly an object opposes the movement of electric charge through it. For any element in a circuit it is defined by

**R = ΔV / I**

where ΔV is the potential difference across the element and I is the current through it. The unit is the **ohm (Ω)**, and 1 Ω = 1 V/A. A 15 Ω resistor with 6.0 V across it carries a current of 6.0 V ÷ 15 Ω = 0.40 A.

Why do objects resist at all? In a metal, the free electrons drift through a lattice of atoms that vibrate. The electrons keep colliding with them, which limits the drift. Those collisions also pass energy to the atoms, so the material warms up. A resistor **converts electrical energy into thermal energy**, which can raise the temperature of the resistor and of whatever is around it. Topic 11.4 deals with the rate of that transfer.

## Resistance from shape and material

For a resistor with **uniform geometry** (the same cross-section all along, like a wire or a rod), the resistance depends on three things:

**R = ρL / A**

- **L** is the length in metres. A longer conductor has more resistance, in direct proportion. Charge has further to travel through the material.
- **A** is the cross-sectional area in m². A wider conductor has less resistance, in inverse proportion. There are more paths side by side for the charge.
- **ρ** (rho) is the **resistivity** of the material, in Ω·m.

Resistivity is a **fundamental property of a material**. It comes from the material's atomic and molecular structure: how many free charge carriers there are and how easily they move. It quantifies how strongly the material itself opposes the motion of charge. Any sample of copper at a given temperature has the same resistivity, whatever its size or shape. Resistance, in contrast, belongs to one particular object.

Typical values at 20 °C:

| Material | Resistivity ρ (Ω·m) | Typical use |
|---|---|---|
| Copper | 1.68 × 10⁻⁸ | connecting wires |
| Aluminium | 2.82 × 10⁻⁸ | power lines |
| Nichrome (nickel–chromium alloy) | 1.10 × 10⁻⁶ | heating elements |

Nichrome's resistivity is about 65 times that of copper. That is why a toaster element is made of nichrome and the cable that feeds it is copper. A 1.0 m length of copper with a cross-section of 1.0 mm² has R = (1.68 × 10⁻⁸ Ω·m)(1.0 m) ÷ (1.0 × 10⁻⁶ m²) = 0.0168 Ω. That is why connecting wires are usually treated as having no resistance.

**Wires are circles.** If you are given a diameter d, the cross-sectional area is A = π(d/2)². Doubling the diameter makes the area **four** times larger, so it cuts R to a quarter.

### Resistivity and temperature

The resistivity of a conductor **typically increases with temperature**. In a hotter metal the atoms vibrate more strongly, so drifting electrons collide with them more often. A tungsten lamp filament has a much larger resistance when it glows than when it is cold.

## Ohm's law and ohmic elements

**Ohm's law** relates the current in an element to the potential difference across it and its resistance:

**I = ΔV / R**

Some materials keep the same resistance whatever the current. These are called **ohmic** materials. For an ohmic element, doubling ΔV doubles I, so I ∝ ΔV. In the model used in this course, the resistivity of an ohmic material stays constant regardless of temperature. Treat a "resistor" in a question as ohmic unless you are told otherwise.

Elements whose resistance changes with current are **non-ohmic**. The filament bulb is the standard example: a larger current heats the filament, the resistivity rises and so R rises. R = ΔV/I still gives the resistance at each moment. It just is not a constant.

### Reading resistance from a graph

The best way to test whether an element is ohmic is to measure I for several values of ΔV and plot a graph of **current I (vertical) against potential difference ΔV (horizontal)**.

- An ohmic element gives a **straight line through the origin**.
- Since I = (1/R)ΔV, the **slope of the I–ΔV graph is 1/R**, so R = 1/slope. A steeper line means a **smaller** resistance.
- If the axes are swapped (ΔV vertical, I horizontal), the slope is R itself. Always check which quantity is on which axis.
- For a non-ohmic element the graph curves. At any point, R = ΔV/I uses the coordinates of that point (the slope of the line from the origin to the point), not the slope of the curve there.

<figure>
<svg viewBox="0 0 560 390" role="img" aria-labelledby="iv-title iv-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="iv-title">Current against potential difference for a resistor and a filament bulb</title>
<desc id="iv-desc">Current I in amperes on the vertical axis from 0 to 0.40, potential difference delta V in volts on the horizontal axis from 0 to 7. A solid straight line through the origin, labelled ohmic resistor, 20 ohms, rises to 0.35 amperes at 7 volts. A dashed curve, labelled filament bulb, starts at the origin, rises steeply and then bends over: 0.12 amperes at 1 volt, 0.24 at 3 volts and 0.345 at 6 volts. The curve stays above the straight line, but it gets less steep as the voltage rises while the straight line keeps the same slope.</desc>
<defs><marker id="iv-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="320" x2="535" y2="320" stroke="#1d2b44" stroke-width="2" marker-end="url(#iv-arr)"/>
<line x1="80" y1="320" x2="80" y2="25" stroke="#1d2b44" stroke-width="2" marker-end="url(#iv-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="140" y1="320" x2="140" y2="326" stroke="#1d2b44"/><text x="140" y="340">1</text>
<line x1="200" y1="320" x2="200" y2="326" stroke="#1d2b44"/><text x="200" y="340">2</text>
<line x1="260" y1="320" x2="260" y2="326" stroke="#1d2b44"/><text x="260" y="340">3</text>
<line x1="320" y1="320" x2="320" y2="326" stroke="#1d2b44"/><text x="320" y="340">4</text>
<line x1="380" y1="320" x2="380" y2="326" stroke="#1d2b44"/><text x="380" y="340">5</text>
<line x1="440" y1="320" x2="440" y2="326" stroke="#1d2b44"/><text x="440" y="340">6</text>
<line x1="500" y1="320" x2="500" y2="326" stroke="#1d2b44"/><text x="500" y="340">7</text>
<text x="300" y="370" font-size="13">Potential difference ΔV (V)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="250" x2="80" y2="250" stroke="#1d2b44"/><text x="70" y="254">0.10</text>
<line x1="74" y1="180" x2="80" y2="180" stroke="#1d2b44"/><text x="70" y="184">0.20</text>
<line x1="74" y1="110" x2="80" y2="110" stroke="#1d2b44"/><text x="70" y="114">0.30</text>
<line x1="74" y1="40" x2="80" y2="40" stroke="#1d2b44"/><text x="70" y="44">0.40</text>
</g>
<text x="22" y="180" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 180)">Current I (A)</text>
<line x1="80" y1="320" x2="500" y2="75" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="80,320 140,236 200,187 260,152 320,124 380,99.5 440,78.5" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 4"/>
<text x="490" y="135" font-size="12" fill="#1d2b44" text-anchor="middle">ohmic resistor, 20 Ω</text>
<text x="170" y="180" font-size="12" fill="#1d2b44" text-anchor="middle">filament bulb</text>
</svg>
<figcaption>Figure 1. The ohmic resistor (solid line) has a constant slope of 0.050 A/V, so R = 1 ÷ 0.050 = 20 Ω at every current. The filament bulb (dashed curve) bends towards the ΔV axis: its resistance, ΔV/I, rises from about 8 Ω at 1.0 V to about 17 Ω at 6.0 V as the filament heats up.</figcaption>
</figure>

## Measuring resistance in the lab

To find the resistance of an element, put it in a loop with a source and a way of changing ΔV (a variable resistor or an adjustable supply). Place an **ammeter in the loop** to measure I and a **voltmeter across the element** to measure ΔV, as in Topic 11.2. Take readings over a range of values, then plot I against ΔV.

To find the **resistivity** of a material, use a wire of that material with a known diameter. Measure the resistance of different lengths of it (move one contact along the wire). Since R = (ρ/A)L, a graph of R against L should be a straight line through the origin with slope ρ/A. Then ρ = slope × A. Good practice: measure the diameter at several points with a micrometer and average; keep the current small so the wire does not heat up and change its resistivity.

## Worked example 1: a heating wire

**Question.** A heating element is made of 2.4 m of nichrome wire (ρ = 1.10 × 10⁻⁶ Ω·m) with a diameter of 0.50 mm. (a) Find its resistance. (b) Find the current when it is connected across 12 V. Assume the resistivity stays constant.

1. Convert the diameter: d = 0.50 mm = 0.50 × 10⁻³ m, so the radius is 0.25 × 10⁻³ m.
2. Cross-sectional area: A = π(0.25 × 10⁻³ m)² = 1.963 × 10⁻⁷ m².
3. (a) R = ρL/A = (1.10 × 10⁻⁶ Ω·m)(2.4 m) ÷ (1.963 × 10⁻⁷ m²) = 13.45 Ω.
4. (b) I = ΔV/R = 12 V ÷ 13.45 Ω = 0.892 A.

**Answer.** (a) R = 13 Ω (13.4 Ω). (b) I = 0.89 A.

**Check.** Units: (Ω·m)(m)/m² = Ω. A common slip is to use the diameter in place of the radius, which makes A four times too big and gives 3.4 Ω. A copper wire of the same size would have only 0.21 Ω. It would barely warm up, which is why heating elements use a high-resistivity alloy.

## Worked example 2: predicting a factor of change

**Question.** Wire A has a resistance of 16 Ω. Wire B is made of the same material. It is half as long as A and has twice the diameter. (a) Find the resistance of B. (b) Each wire in turn is connected across the same battery. How does the current in B compare with the current in A?

1. Write the ratio so that ρ cancels: R_B / R_A = (L_B / L_A) × (A_A / A_B).
2. Length factor: L_B / L_A = 1/2.
3. Area factor: area depends on diameter squared, so A_B / A_A = 2² = 4, and A_A / A_B = 1/4.
4. R_B / R_A = (1/2)(1/4) = 1/8, so R_B = 16 Ω ÷ 8 = 2.0 Ω.
5. (b) Same ΔV, so I = ΔV/R and I_B / I_A = R_A / R_B = 8.

**Answer.** (a) 2.0 Ω. (b) The current in B is 8 times the current in A.

**Check.** Both changes (shorter and thicker) lower the resistance, so R_B must be smaller than R_A. The usual error is to treat the diameter like the area and get a factor of 1/4 instead of 1/8.

## Worked example 3: resistivity from a graph

**Question.** A student measures the resistance of different lengths of a wire of unknown alloy. The diameter is 0.30 mm. The results are below. Plot a suitable graph and use it to find the resistivity of the alloy.

| L (m) | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|
| R (Ω) | 2.9 | 5.6 | 8.6 | 11.3 | 14.3 |

1. R = (ρ/A)L, so plot R (vertical) against L (horizontal). Expect a straight line through the origin with slope ρ/A. Figure 2 shows the plot.
2. Draw the best-fit line. It passes very close to the origin and through about (1.00 m, 14.2 Ω). Slope = 14.2 Ω ÷ 1.00 m = 14.2 Ω/m. (A least-squares fit gives 14.25 Ω/m.)
3. Area: A = π(0.15 × 10⁻³ m)² = 7.07 × 10⁻⁸ m².
4. ρ = slope × A = (14.2 Ω/m)(7.07 × 10⁻⁸ m²) = 1.00 × 10⁻⁶ Ω·m.

<figure>
<svg viewBox="0 0 560 390" role="img" aria-labelledby="rl-title rl-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rl-title">Resistance against length for an alloy wire</title>
<desc id="rl-desc">Resistance R in ohms on the vertical axis from 0 to 16, length L in metres on the horizontal axis from 0 to 1.2. Five plotted points marked with crosses: 0.20 metres, 2.9 ohms; 0.40, 5.6; 0.60, 8.6; 0.80, 11.3; 1.00, 14.3. A straight best-fit line starts at the origin and passes through 1.00 metres, 14.2 ohms, close to every point.</desc>
<defs><marker id="rl-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="320" x2="535" y2="320" stroke="#1d2b44" stroke-width="2" marker-end="url(#rl-arr)"/>
<line x1="80" y1="320" x2="80" y2="25" stroke="#1d2b44" stroke-width="2" marker-end="url(#rl-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="150" y1="320" x2="150" y2="326" stroke="#1d2b44"/><text x="150" y="340">0.20</text>
<line x1="220" y1="320" x2="220" y2="326" stroke="#1d2b44"/><text x="220" y="340">0.40</text>
<line x1="290" y1="320" x2="290" y2="326" stroke="#1d2b44"/><text x="290" y="340">0.60</text>
<line x1="360" y1="320" x2="360" y2="326" stroke="#1d2b44"/><text x="360" y="340">0.80</text>
<line x1="430" y1="320" x2="430" y2="326" stroke="#1d2b44"/><text x="430" y="340">1.00</text>
<line x1="500" y1="320" x2="500" y2="326" stroke="#1d2b44"/><text x="500" y="340">1.20</text>
<text x="300" y="370" font-size="13">Length L (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="250" x2="80" y2="250" stroke="#1d2b44"/><text x="70" y="254">4</text>
<line x1="74" y1="180" x2="80" y2="180" stroke="#1d2b44"/><text x="70" y="184">8</text>
<line x1="74" y1="110" x2="80" y2="110" stroke="#1d2b44"/><text x="70" y="114">12</text>
<line x1="74" y1="40" x2="80" y2="40" stroke="#1d2b44"/><text x="70" y="44">16</text>
</g>
<text x="28" y="180" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 28 180)">Resistance R (Ω)</text>
<line x1="80" y1="320" x2="465" y2="46.6" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="2">
<path d="M145 264.2 L155 274.2 M145 274.2 L155 264.2"/>
<path d="M215 217 L225 227 M215 227 L225 217"/>
<path d="M285 164.5 L295 174.5 M285 174.5 L295 164.5"/>
<path d="M355 117.2 L365 127.2 M355 127.2 L365 117.2"/>
<path d="M425 64.8 L435 74.8 M425 74.8 L435 64.8"/>
</g>
<text x="400" y="200" font-size="12" fill="#1d2b44" text-anchor="middle">slope = ρ/A ≈ 14.2 Ω/m</text>
</svg>
<figcaption>Figure 2. Resistance against length for the alloy wire in Worked example 3 (crosses are measurements; the solid line is the best fit through the origin). A straight line through the origin confirms R ∝ L.</figcaption>
</figure>

**Answer.** ρ ≈ 1.0 × 10⁻⁶ Ω·m.

**Interpretation and check.** The result is of the same order as nichrome (1.10 × 10⁻⁶ Ω·m), which is reasonable for a resistance alloy. Using the slope of a best-fit line is better than using one reading, because it averages out random errors in individual measurements. The line passes through the origin, so there is no sign of a systematic error such as contact resistance.

## Common misconceptions

- **"R = ΔV/I means a bigger voltage makes a bigger resistance."** For an ohmic element, raising ΔV raises I in proportion, and R stays the same. R depends on the material and shape.
- **"A thicker wire has more resistance because there is more metal."** More cross-section gives more paths for charge, so R goes **down**.
- **Using the diameter as the radius, or forgetting to square it.** A = π(d/2)². Doubling d divides R by 4.
- **Treating mm² like mm.** 1 mm² = 10⁻⁶ m², not 10⁻³ m².
- **"Resistivity and resistance are the same thing."** Resistivity belongs to the material; resistance belongs to the object.
- **"The slope of an I–ΔV graph is the resistance."** It is 1/R. A steeper line means less resistance.
- **"Every element obeys Ohm's law."** You can always work out R = ΔV/I at one moment, but only ohmic elements keep that R constant, so only they have I ∝ ΔV. A filament bulb does not.
- **"Current is used up in a resistor."** The same current enters and leaves it. What the resistor takes is energy, which becomes thermal energy.

## Where this leads

Resistance lets you calculate currents. Topic 11.4 uses it to find the **rate** at which a resistor converts electrical energy: continue with [Topic 11.4, Electric Power](/advanced-course-resources/physics-2/11-4-electric-power-study-guide/). Later in the unit you will combine resistors into compound circuits. First test yourself with the [practice questions](/advanced-course-resources/physics-2/11-3-resistance-resistivity-ohms-law-practice/), then use the [revision notes](/advanced-course-resources/physics-2/11-3-resistance-resistivity-ohms-law-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/11-3-resistance-resistivity-ohms-law-checklist/) to consolidate.
