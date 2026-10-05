---
resourceId: "mb-ap-bio-2.7-study-guide"
title: "Tonicity and Osmoregulation: Study Guide (Biology 2.7)"
description: "Learn how tonicity and water potential predict the direction of osmosis, how to calculate solute potential, and how cells and organisms control their water balance."
course: "biology"
unit: 2
topics: ["2.7"]
resourceType: "study-guide"
prerequisites:
  - "Diffusion, selective permeability and aquaporins (Topics 2.4–2.6)"
  - "Moles and molar concentration (mol L⁻¹)"
prerequisiteResources: ["mb-ap-bio-2.6-study-guide"]
learningObjectives:
  - "Use the terms hypotonic, hypertonic and isotonic correctly, always comparing one solution with another"
  - "Predict the direction of net water movement from solute concentrations or from water potentials"
  - "Calculate water potential from pressure and solute potential, and solute potential from concentration, ionization constant and temperature"
  - "Explain how a cell wall, a central vacuole and a contractile vacuole help cells survive in different environments"
  - "Explain how osmoregulation keeps an organism's water and solute balance within limits"
  - "Construct a graph of osmosis data and use it to estimate the water potential of a tissue"
skills: ["1", "2", "4", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Pressure constant R = 0.0831 L bar mol⁻¹ K⁻¹. Temperature in kelvin = °C + 273. Water potentials in bars, to 2 or 3 significant figures"
related: ["mb-ap-bio-2.7-revision-notes", "mb-ap-bio-2.7-practice", "mb-ap-bio-2.7-checklist"]
next: "mb-ap-bio-2.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Tonicity compares two solutions. Water moves by osmosis from the hypotonic side (fewer solute particles) to the hypertonic side (more solute particles). Isotonic means no net movement."
  - "Water moves from higher water potential to lower water potential. Ψ = Ψp + Ψs, where Ψp is pressure potential and Ψs is solute potential."
  - "Solute potential is never positive: Ψs = −iCRT, with R = 0.0831 L bar mol⁻¹ K⁻¹ and T in kelvin. Pure water in an open container has Ψ = 0."
  - "A cell wall lets plant cells become turgid without bursting; animal cells and wall-less protists must control water balance in other ways, such as a contractile vacuole."
  - "Osmoregulation keeps internal water and solute levels within limits, which cells need for growth and homeostasis."
faqs:
  - question: "Is water potential the same as water concentration?"
    answer: "Not quite. Water potential is a measure of the tendency of water to move, and it includes pressure as well as solutes. Two solutions with the same solute concentration can have different water potentials if one is under pressure, as in a turgid plant cell."
  - question: "Why is the ionization constant 2 for sodium chloride?"
    answer: "Each NaCl unit separates into two particles in water, Na⁺ and Cl⁻. Solute potential depends on the number of dissolved particles, so NaCl lowers water potential about twice as much as the same molar concentration of sucrose, which does not ionize (i = 1)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Why water moves into and out of cells

In Topics 2.4 to 2.6 you saw that the plasma membrane is selectively permeable. Water crosses it, slowly through the lipid bilayer and quickly through aquaporins. Many solutes, such as ions and sugars, cannot cross freely. So a membrane can separate two solutions that hold different amounts of solute. This gives a **concentration gradient**.

When solutes cannot cross but water can, water moves instead. The net movement of water across a selectively permeable membrane is **osmosis**. It is passive: no ATP is used. Water molecules cross in both directions all the time. Osmosis is the *net* flow, from the side where water is more free to move to the side where it is less free.

Why does adding solute make water "less free"? Dissolved particles attract water molecules into hydration shells (Topic 1.1). Water held around solutes is less able to move across the membrane. So the side with more dissolved particles gains water overall.

## Tonicity: always a comparison

**Tonicity** describes a solution compared with another solution, usually the inside of a cell. It depends on solutes that **cannot** cross the membrane.

| Term | Meaning (solution compared with the cell) | Net water movement |
|---|---|---|
| **Hypotonic** | fewer dissolved solute particles than the cell | into the cell |
| **Isotonic** | the same concentration of solute particles | no net movement (equal flow both ways) |
| **Hypertonic** | more dissolved solute particles than the cell | out of the cell |

A short rule: **water moves from hypotonic to hypertonic**. In other words, it moves from the region of low solute concentration (low **osmolarity**, the total concentration of dissolved particles) to the region of high solute concentration.

The words only make sense as a pair. "The solution is hypertonic" means nothing until you say "hypertonic *to the cell*". If the solution is hypertonic to the cell, the cell is hypotonic to the solution.

## What happens to cells

<figure>
<svg viewBox="0 0 720 440" role="img" aria-labelledby="ton-title ton-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ton-title">Animal and plant cells in hypotonic, isotonic and hypertonic solutions</title>
<desc id="ton-desc">A grid with two rows and three columns. Columns: hypotonic solution, isotonic solution, hypertonic solution. Top row, animal cell without a wall: in hypotonic solution it is a large swollen circle with arrows pointing inward and the label swells and may burst; in isotonic solution it is a normal oval with two-headed arrows and the label normal, no net movement; in hypertonic solution it is a small shrivelled shape with arrows pointing outward and the label shrivels. Bottom row, plant cell with a square wall: in hypotonic solution the membrane presses against the wall, arrows point inward, label turgid, the normal healthy state; in isotonic solution the membrane is just touching the wall, two-headed arrows, label flaccid; in hypertonic solution the membrane has pulled away from the wall into a small rounded shape, arrows point outward, label plasmolysed.</desc>
<defs>
<marker id="ton-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker>
<marker id="ton-arrow-s" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker>
</defs>
<rect x="0" y="0" width="720" height="440" fill="#ffffff"/>
<text x="200" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">Hypotonic solution</text>
<text x="200" y="44" text-anchor="middle" font-size="12" fill="#1d2b44">fewer solute particles than cell</text>
<text x="400" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">Isotonic solution</text>
<text x="400" y="44" text-anchor="middle" font-size="12" fill="#1d2b44">same solute concentration</text>
<text x="600" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">Hypertonic solution</text>
<text x="600" y="44" text-anchor="middle" font-size="12" fill="#1d2b44">more solute particles than cell</text>
<text x="48" y="136" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">Animal</text>
<text x="48" y="154" text-anchor="middle" font-size="12" fill="#1d2b44">(no wall)</text>
<text x="48" y="316" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">Plant</text>
<text x="48" y="334" text-anchor="middle" font-size="12" fill="#1d2b44">(cell wall)</text>
<line x1="100" y1="240" x2="700" y2="240" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="3 4"/>
<circle cx="200" cy="140" r="55" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<line x1="108" y1="140" x2="140" y2="140" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ton-arrow)"/>
<line x1="292" y1="140" x2="260" y2="140" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ton-arrow)"/>
<text x="200" y="215" text-anchor="middle" font-size="13" fill="#1d2b44">swells; may burst (lyse)</text>
<ellipse cx="400" cy="140" rx="46" ry="38" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<line x1="306" y1="140" x2="348" y2="140" stroke="#1d2b44" stroke-width="2.5" marker-start="url(#ton-arrow-s)" marker-end="url(#ton-arrow-s)"/>
<line x1="452" y1="140" x2="494" y2="140" stroke="#1d2b44" stroke-width="2.5" marker-start="url(#ton-arrow-s)" marker-end="url(#ton-arrow-s)"/>
<text x="400" y="215" text-anchor="middle" font-size="13" fill="#1d2b44">normal; no net movement</text>
<polygon points="636,140 628,149 629,161 617,163 611,174 600,169 589,174 583,163 571,161 572,149 564,140 572,131 571,119 583,117 589,106 600,111 611,106 617,117 629,119 628,131" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<line x1="560" y1="140" x2="528" y2="140" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ton-arrow)"/>
<line x1="640" y1="140" x2="672" y2="140" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ton-arrow)"/>
<text x="600" y="215" text-anchor="middle" font-size="13" fill="#1d2b44">shrivels</text>
<rect x="145" y="265" width="110" height="110" fill="none" stroke="#1d2b44" stroke-width="5"/>
<rect x="150" y="270" width="100" height="100" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="164" y="284" width="72" height="72" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 3"/>
<text x="200" y="324" text-anchor="middle" font-size="11" fill="#1d2b44">vacuole</text>
<line x1="108" y1="320" x2="140" y2="320" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ton-arrow)"/>
<line x1="292" y1="320" x2="260" y2="320" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ton-arrow)"/>
<text x="200" y="397" text-anchor="middle" font-size="13" fill="#1d2b44">turgid (firm)</text>
<text x="200" y="414" text-anchor="middle" font-size="12" fill="#1d2b44">healthy state for most plants</text>
<rect x="345" y="265" width="110" height="110" fill="none" stroke="#1d2b44" stroke-width="5"/>
<rect x="351" y="271" width="98" height="98" rx="20" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="370" y="290" width="60" height="60" rx="10" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 3"/>
<line x1="300" y1="320" x2="338" y2="320" stroke="#1d2b44" stroke-width="2.5" marker-start="url(#ton-arrow-s)" marker-end="url(#ton-arrow-s)"/>
<line x1="462" y1="320" x2="500" y2="320" stroke="#1d2b44" stroke-width="2.5" marker-start="url(#ton-arrow-s)" marker-end="url(#ton-arrow-s)"/>
<text x="400" y="397" text-anchor="middle" font-size="13" fill="#1d2b44">flaccid (limp)</text>
<text x="400" y="414" text-anchor="middle" font-size="12" fill="#1d2b44">no pressure on wall</text>
<rect x="545" y="265" width="110" height="110" fill="none" stroke="#1d2b44" stroke-width="5"/>
<ellipse cx="600" cy="320" rx="30" ry="26" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<ellipse cx="600" cy="320" rx="16" ry="13" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 3"/>
<line x1="540" y1="320" x2="508" y2="320" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ton-arrow)"/>
<line x1="660" y1="320" x2="692" y2="320" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ton-arrow)"/>
<text x="600" y="397" text-anchor="middle" font-size="13" fill="#1d2b44">plasmolysed</text>
<text x="600" y="414" text-anchor="middle" font-size="12" fill="#1d2b44">membrane pulls off wall</text>
</svg>
<figcaption>Figure 1. Arrows show net water movement: pointing at the cell means water enters, pointing away means water leaves, two-headed means equal flow both ways. The thick square line is the plant cell wall; the dashed shape is the central vacuole.</figcaption>
</figure>

**Animal cells** have no wall. In a hypotonic solution they gain water, swell and may burst (**lysis**). In a hypertonic solution they lose water and shrivel. So animal cells need an isotonic surrounding fluid. This is why fluid given into a patient's vein is made isotonic with blood plasma (for example, 0.9% sodium chloride).

**Plant cells** have a cell wall (Topic 2.4). In a hypotonic solution, water enters the large **central vacuole**. The cell swells until the membrane presses on the wall, and the wall pushes back. The cell becomes **turgid**. It does not burst, because the wall resists further swelling. Turgid cells hold soft parts of the plant upright. In an isotonic solution the cell is **flaccid**, and the plant wilts. In a hypertonic solution the cell loses water from its vacuole and the membrane pulls away from the wall. This is **plasmolysis**, and it usually kills the cell if it lasts.

So the "normal" state differs: isotonic for an animal cell, hypotonic surroundings for a plant cell.

## Water potential: one number that predicts the direction

Tonicity words compare solute concentrations. But plant cells also have **pressure** from the wall. To include both effects, biologists use **water potential**, symbol **Ψ** (the Greek letter psi), measured in **bars** (1 bar is close to atmospheric pressure).

**Water moves from higher water potential to lower water potential.**

**Ψ = Ψp + Ψs**

- **Ψp, pressure potential.** Physical pressure on the water. In a turgid plant cell, the wall pushes back on the contents, so Ψp is positive. For a solution in an open container, **Ψp = 0**. In xylem under tension, Ψp can be negative.
- **Ψs, solute potential** (also called osmotic potential). The effect of dissolved solutes. Pure water has Ψs = 0. Adding solute always makes Ψs **negative**. More solute means more negative Ψs.

Pure water in an open beaker has Ψ = 0 + 0 = 0. Any solution in an open container has Ψ = Ψs, which is below zero. So water moves from pure water into any solution, as you would expect.

### Calculating solute potential

**Ψs = −iCRT**

| Symbol | Meaning | Units or value |
|---|---|---|
| i | ionization constant: particles formed per formula unit | 1 for sucrose and glucose; about 2 for NaCl; about 3 for CaCl₂ |
| C | molar concentration | mol L⁻¹ (M) |
| R | pressure constant | 0.0831 L bar mol⁻¹ K⁻¹ |
| T | temperature | kelvin: °C + 273 |

The units work out: (mol L⁻¹) × (L bar mol⁻¹ K⁻¹) × K = bar. The minus sign is part of the equation, so Ψs comes out negative. The values of i for salts assume the salt separates completely, which is close enough for dilute solutions.

## Worked example 1: will this cell gain or lose water?

**Question.** A plant cell has Ψs = −7.5 bar and Ψp = +2.0 bar. It is placed in an open beaker at 22 °C containing either (a) 0.20 M sucrose or (b) 0.20 M sodium chloride. Predict the direction of net water movement in each case.

1. Water potential of the cell: Ψ = Ψp + Ψs = +2.0 + (−7.5) = **−5.5 bar**.
2. Temperature in kelvin: T = 22 + 273 = 295 K.
3. **(a) Sucrose** (i = 1): Ψs = −(1)(0.20 mol L⁻¹)(0.0831 L bar mol⁻¹ K⁻¹)(295 K) = **−4.90 bar**. The beaker is open, so Ψp = 0 and Ψ = −4.90 bar.
4. Compare: −4.90 bar is higher (less negative) than −5.5 bar. Water moves **into the cell**, from higher to lower Ψ. The solution is hypotonic to the cell.
5. **(b) Sodium chloride** (i = 2): Ψs = −(2)(0.20)(0.0831)(295) = **−9.81 bar**, so Ψ = −9.81 bar.
6. Compare: −9.81 bar is lower than −5.5 bar. Water moves **out of the cell**. The solution is hypertonic to the cell.

**Check.** Same molar concentration, opposite results. The only difference is i: NaCl gives two particles per unit, so it lowers Ψ twice as much.

**Interpretation.** In (a), water entering the cell pushes the membrane harder against the wall. Ψp rises, so the cell's Ψ rises, until it equals −4.90 bar. Then net movement stops. The pressure term is what lets a plant cell reach equilibrium without bursting. In (b), the cell loses water, Ψp falls toward zero, and if water loss continues the cell plasmolyses.

## Osmoregulation: keeping water balance within limits

Cells need a fairly steady volume and internal solute composition. Enzymes work within limits of concentration, membranes tear if stretched too far, and growth needs water to enter in a controlled way. Growth and homeostasis therefore depend on molecules moving across membranes all the time. **Osmoregulation** is the control of water balance and internal solute concentration, and so of the organism's water potential.

- **Contractile vacuoles in freshwater protists.** A single-celled organism such as *Paramecium* lives in pond water that is hypotonic to its cytoplasm. Water enters by osmosis all the time. A **contractile vacuole** collects the extra water and expels it through the membrane. This uses energy. Without it, the cell would swell and burst, because it has no wall.
- **The central vacuole in plant cells.** The vacuole stores water and solutes. By keeping its Ψs low, it draws water in, keeps the cell turgid and supports the plant. Cell growth also depends on this: water entering the vacuole provides the push that enlarges a young cell.
- **Fish (an extension example).** A freshwater fish has body fluids hypertonic to the water around it. It gains water across its gills, so it produces large amounts of dilute urine and takes up salts actively. A marine bony fish is hypotonic to seawater, so it loses water, drinks seawater, gets rid of excess salt through its gills and makes little urine. In each case the organism spends energy to keep its internal fluid different from its surroundings.

## Worked example 2: graphing osmosis data to find a tissue's water potential

**Question.** A student cuts identical cylinders from one carrot root and places three cylinders in each of six sucrose solutions in open dishes at 20 °C. After 24 hours she records the percentage change in mass. All data are fictional.

| Sucrose / M | Trial 1 / % | Trial 2 / % | Trial 3 / % |
|---|---|---|---|
| 0.0 | +17.2 | +18.9 | +17.9 |
| 0.1 | +11.0 | +12.3 | +11.2 |
| 0.2 | +4.1 | +5.6 | +5.3 |
| 0.3 | −1.9 | −0.6 | −1.1 |
| 0.4 | −8.4 | −7.0 | −7.4 |
| 0.5 | −13.1 | −14.6 | −14.0 |

(a) Construct a suitable graph. (b) Estimate the sucrose concentration that is isotonic to the carrot cells. (c) Estimate the water potential of the carrot tissue.

**(a) Constructing the graph.**

1. Calculate the means: +18.0, +11.5, +5.0, −1.2, −7.6 and −13.9%.
2. Choose a **line graph** (a scatter plot of means), because both variables are continuous.
3. Independent variable on the x-axis: sucrose concentration / M. Dependent variable on the y-axis: mean percentage change in mass / %. Include the negative values, so the y-axis must cross zero.
4. Use even scales that fill the grid. Plot the means. Show the spread with **error bars**; here they show the range (lowest to highest trial).
5. Draw a line through the points (a straight best-fit line suits these data).

<figure>
<svg viewBox="0 0 560 370" role="img" aria-labelledby="carrot-title carrot-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="carrot-title">Mean percentage change in mass of carrot cylinders against sucrose concentration</title>
<desc id="carrot-desc">Line graph. Horizontal axis: sucrose concentration in moles per litre, from 0 to 0.5. Vertical axis: mean percentage change in mass, from minus 15 to plus 20, with a horizontal line at zero. Six circle markers with vertical range bars fall in a nearly straight line from plus 18.0 at 0 molar to minus 13.9 at 0.5 molar, with a straight best-fit line drawn through them. The line crosses zero change at about 0.28 molar, marked with a dashed vertical line.</desc>
<rect x="0" y="0" width="560" height="370" fill="#ffffff"/>
<line x1="80" y1="40" x2="480" y2="40" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="120" x2="480" y2="120" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="280" x2="480" y2="280" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="200" x2="490" y2="200" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="80" y1="320" x2="490" y2="320" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="320" x2="80" y2="30" stroke="#1d2b44" stroke-width="2"/>
<text x="72" y="44" text-anchor="end" font-size="12" fill="#1d2b44">+20</text>
<text x="72" y="124" text-anchor="end" font-size="12" fill="#1d2b44">+10</text>
<text x="72" y="204" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="72" y="284" text-anchor="end" font-size="12" fill="#1d2b44">−10</text>
<text x="80" y="338" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="160" y="338" text-anchor="middle" font-size="12" fill="#1d2b44">0.1</text>
<text x="240" y="338" text-anchor="middle" font-size="12" fill="#1d2b44">0.2</text>
<text x="320" y="338" text-anchor="middle" font-size="12" fill="#1d2b44">0.3</text>
<text x="400" y="338" text-anchor="middle" font-size="12" fill="#1d2b44">0.4</text>
<text x="480" y="338" text-anchor="middle" font-size="12" fill="#1d2b44">0.5</text>
<text x="280" y="362" text-anchor="middle" font-size="14" fill="#1d2b44">Sucrose concentration / M</text>
<text x="22" y="180" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 22 180)">Mean change in mass / %</text>
<line x1="80" y1="56.8" x2="480" y2="311.6" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="80" y1="48.8" x2="80" y2="62.4" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="160" y1="101.6" x2="160" y2="112" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="240" y1="155.2" x2="240" y2="167.2" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="320" y1="204.8" x2="320" y2="215.2" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="400" y1="256" x2="400" y2="267.2" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="480" y1="304.8" x2="480" y2="316.8" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="74" y1="48.8" x2="86" y2="48.8" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="74" y1="62.4" x2="86" y2="62.4" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="154" y1="101.6" x2="166" y2="101.6" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="154" y1="112" x2="166" y2="112" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="234" y1="155.2" x2="246" y2="155.2" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="234" y1="167.2" x2="246" y2="167.2" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="314" y1="204.8" x2="326" y2="204.8" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="314" y1="215.2" x2="326" y2="215.2" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="394" y1="256" x2="406" y2="256" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="394" y1="267.2" x2="406" y2="267.2" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="474" y1="304.8" x2="486" y2="304.8" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="474" y1="316.8" x2="486" y2="316.8" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="80" cy="56" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="160" cy="108" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="240" cy="160" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="320" cy="209.6" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="400" cy="260.8" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="480" cy="311.2" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<line x1="304.5" y1="200" x2="304.5" y2="320" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="312" y="190" font-size="13" font-weight="600" fill="#1d2b44">zero change ≈ 0.28 M</text>
<text x="250" y="96" font-size="12" fill="#1d2b44">gain in mass: water entered</text>
<text x="96" y="300" font-size="12" fill="#1d2b44">loss in mass: water left</text>
</svg>
<figcaption>Figure 2. Fictional data. Circles are means of three cylinders; vertical bars show the range of the three trials; the solid line is a straight best-fit line. The point where the line crosses zero change estimates the isotonic concentration.</figcaption>
</figure>

**(b) Isotonic point.** The tissue neither gains nor loses mass where the line crosses 0%. Between 0.2 M (+5.0%) and 0.3 M (−1.2%), the change falls by 6.2 percentage points. Zero is 5.0 ÷ 6.2 of the way along: 0.2 + (5.0 ÷ 6.2) × 0.1 = **0.28 M** (a best-fit line through all six points gives the same value to 2 s.f.).

**(c) Water potential.** At the isotonic concentration, the tissue's Ψ equals the solution's Ψ. The dish is open, so Ψ = Ψs = −iCRT = −(1)(0.28)(0.0831)(293) = **−6.8 bar**.

**Interpretation.** Using percentage change, not mass change, allows for cylinders that start at slightly different masses. The error bars are short and do not overlap, so the trend is clear. The estimate assumes sucrose does not enter the cells, and that 24 hours was long enough to reach equilibrium.

## Common misconceptions

- **"Water moves to where the concentration is higher."** Only if you mean solute concentration. Water moves from high *water* potential to low water potential, which is toward the higher solute concentration.
- **"Hypertonic describes the cell."** Tonicity is a comparison. Always say "hypertonic *to*" something.
- **"In an isotonic solution water stops moving."** Water keeps crossing both ways at equal rates. There is no *net* movement.
- **"Osmosis moves solutes."** In osmosis, water moves; the solutes that set up the gradient cannot cross.
- **"Plant cells burst in pure water."** The wall resists expansion, so the cell becomes turgid. Animal cells and wall-less protists can burst.
- **"A turgid plant cell is unhealthy, like a swollen red blood cell."** Turgor is the normal, healthy state for most plant cells. Flaccid and plasmolysed cells are the stressed ones.
- **"Solute potential can be positive."** Ψs is zero for pure water and negative for any solution.
- **"i does not matter."** Forgetting i = 2 for NaCl halves the solute potential and can reverse your prediction.
- **"Use °C in −iCRT."** T must be in kelvin.

## Where this leads

Topic 2.8, [Mechanisms of Transport](/advanced-course-resources/biology/2-8-mechanisms-transport-study-guide/), explains the active transport that cells use to build the solute gradients you met here. Water potential returns whenever you study water movement in plants, and osmoregulation returns as an example of homeostasis in animals. Now try the [practice questions](/advanced-course-resources/biology/2-7-tonicity-osmoregulation-practice/), then use the [revision notes](/advanced-course-resources/biology/2-7-tonicity-osmoregulation-revision-notes/) and the [checklist](/advanced-course-resources/biology/2-7-tonicity-osmoregulation-checklist/) to consolidate.
