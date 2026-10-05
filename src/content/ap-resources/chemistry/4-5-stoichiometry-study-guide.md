---
resourceId: "mb-ap-chem-4.5-study-guide"
title: "Stoichiometry: Study Guide (Chemistry 4.5)"
description: "Use balanced equations as mole ratios to calculate amounts of reactants and products, find the limiting reactant, and combine stoichiometry with gas and solution data."
course: "chemistry"
unit: 4
topics: ["4.5"]
resourceType: "study-guide"
prerequisites:
  - "Converting between mass, moles and particles (Topic 1.1)"
  - "Writing and balancing chemical equations (Topics 4.1 to 4.3)"
  - "The ideal gas law PV = nRT and molarity M = n / V"
prerequisiteResources: ["mb-ap-chem-4.4-study-guide"]
learningObjectives:
  - "Explain why conservation of atoms lets you calculate product amounts from reactant amounts, and the reverse"
  - "Use the coefficients of a balanced equation as mole ratios in multi-step calculations"
  - "Identify the limiting reactant by comparing moles, and calculate the theoretical yield and the excess left over"
  - "Combine stoichiometry with the ideal gas law and with molarity"
  - "Predict how the amount of product changes when the amount of one reactant changes"
skills: ["5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Use the molar masses you are given and R = 0.08206 L atm mol⁻¹ K⁻¹; convert °C to K and mL to L; round only at the end"
related: ["mb-ap-chem-4.5-revision-notes", "mb-ap-chem-4.5-practice", "mb-ap-chem-4.5-checklist"]
next: "mb-ap-chem-4.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Coefficients in a balanced equation are mole ratios, never mass ratios."
  - "Every stoichiometry problem runs: given quantity → moles of A → mole ratio → moles of B → wanted quantity."
  - "The limiting reactant is the one that runs out first. Find it by comparing moles divided by coefficients, not grams."
  - "Gases enter and leave through n = PV / RT; solutions through n = M × V (V in litres)."
  - "Adding more of the excess reactant does not make more product; adding more of the limiting reactant does, until it stops being limiting."
faqs:
  - question: "Why can't I compare masses to find the limiting reactant?"
    answer: "Reactions happen particle by particle, and equal masses of different substances hold different numbers of particles. You must turn each mass into moles and then take the coefficients into account."
  - question: "Do I always need the balanced equation?"
    answer: "Yes. The mole ratio comes only from the coefficients of a correctly balanced equation. An unbalanced equation gives wrong ratios and wrong answers."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Why a balanced equation lets you predict amounts

Atoms are not created or destroyed in a chemical reaction. They are only rearranged. A balanced equation records this: it has the same number of each kind of atom on both sides. Because of that, if you know how much of one substance reacts, you can work out how much of every other substance reacts or forms. This works in both directions. You can predict how much product a known amount of reactant will give, or work backwards from a measured product to the reactant you started with.

Take the combustion of butane, the fuel in many lighters:

2C₄H₁₀(g) + 13O₂(g) → 8CO₂(g) + 10H₂O(l)

The coefficients tell you the **proportions** in which particles react. Two molecules of butane react with thirteen molecules of oxygen. Scale that up by Avogadro's number and the same statement holds for moles: 2 mol of butane react with 13 mol of oxygen to give 8 mol of CO₂ and 10 mol of H₂O.

> The coefficients are **mole ratios**. They are not mass ratios, and they are not volume ratios for liquids or solids.

From one equation you can write any ratio you need, as a conversion factor:

- 13 mol O₂ / 2 mol C₄H₁₀
- 8 mol CO₂ / 2 mol C₄H₁₀
- 10 mol H₂O / 13 mol O₂

Choose the factor that has the substance you **want** on top and the substance you **know** on the bottom. The units then cancel, exactly as in Topic 1.1.

## The stoichiometry road map

Every stoichiometry calculation follows the same route. Whatever form your data arrives in (a mass, a gas volume or a solution volume), you first turn it into moles of the substance you know. You then cross the equation with the mole ratio. Finally you turn moles of the wanted substance into whatever form the question asks for.

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="stoich-map-title stoich-map-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="stoich-map-title">The stoichiometry road map</title>
<desc id="stoich-map-desc">On the left, three ways to get moles of the known substance A: mass divided by molar mass, gas data using n equals PV over RT, or solution data using n equals molarity times volume in litres. These lead to a central box, moles of A. An arrow labelled multiply by the mole ratio from the balanced equation leads to a second central box, moles of B. From moles of B, three arrows lead to mass of B (multiply by molar mass), gas volume of B (V equals nRT over P) and solution volume of B (V equals n over molarity).</desc>
<rect x="10" y="20" width="140" height="50" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="80" y="42" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Mass of A</text>
<text x="80" y="60" text-anchor="middle" font-size="12" fill="#1d2b44">n = m / M</text>
<rect x="10" y="105" width="140" height="50" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="80" y="127" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Gas A: P, V, T</text>
<text x="80" y="145" text-anchor="middle" font-size="12" fill="#1d2b44">n = PV / RT</text>
<rect x="10" y="190" width="140" height="50" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="80" y="212" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Solution A</text>
<text x="80" y="230" text-anchor="middle" font-size="12" fill="#1d2b44">n = M × V (in L)</text>
<rect x="195" y="100" width="100" height="60" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="3"/>
<text x="245" y="126" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">moles</text>
<text x="245" y="146" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">of A</text>
<rect x="345" y="100" width="100" height="60" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="3"/>
<text x="395" y="126" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">moles</text>
<text x="395" y="146" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">of B</text>
<rect x="490" y="20" width="140" height="50" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="560" y="42" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Mass of B</text>
<text x="560" y="60" text-anchor="middle" font-size="12" fill="#1d2b44">m = n × M</text>
<rect x="490" y="105" width="140" height="50" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="560" y="127" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Gas B</text>
<text x="560" y="145" text-anchor="middle" font-size="12" fill="#1d2b44">V = nRT / P</text>
<rect x="490" y="190" width="140" height="50" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="560" y="212" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Solution B</text>
<text x="560" y="230" text-anchor="middle" font-size="12" fill="#1d2b44">V = n / M</text>
<path d="M150 50 L195 112" stroke="#1d2b44" stroke-width="2" marker-end="url(#s45a)"/>
<path d="M150 130 H192" stroke="#1d2b44" stroke-width="2" marker-end="url(#s45a)"/>
<path d="M150 210 L195 150" stroke="#1d2b44" stroke-width="2" marker-end="url(#s45a)"/>
<path d="M295 130 H342" stroke="#1d2b44" stroke-width="3" marker-end="url(#s45a)"/>
<text x="320" y="88" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">× mole ratio</text>
<text x="320" y="182" text-anchor="middle" font-size="12" fill="#1d2b44">(from the</text>
<text x="320" y="197" text-anchor="middle" font-size="12" fill="#1d2b44">balanced equation)</text>
<path d="M445 112 L488 50" stroke="#1d2b44" stroke-width="2" marker-end="url(#s45a)"/>
<path d="M445 130 H487" stroke="#1d2b44" stroke-width="2" marker-end="url(#s45a)"/>
<path d="M445 150 L488 210" stroke="#1d2b44" stroke-width="2" marker-end="url(#s45a)"/>
<defs><marker id="s45a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. The only step that crosses the equation is the mole ratio, and it works only on moles. The thick boxes in the middle are the core of every problem.</figcaption>
</figure>

The two side routes come from earlier topics:

- **Gases (Topic 3.4):** PV = nRT, so n = PV / RT. With R = 0.08206 L atm mol⁻¹ K⁻¹, use P in atm, V in L and T in kelvin (T in K = T in °C + 273.15).
- **Solutions (Topic 3.7):** molarity M = n / V, so n = M × V. The volume must be in **litres**: 25.0 mL is 0.0250 L.

## Limiting reactant, excess reactant and yield

In a real experiment the reactants are rarely mixed in exactly the ratio of the equation. One reactant runs out first. That reactant is the **limiting reactant**: once it is used up, the reaction stops, so it decides how much product forms. The other reactant is **in excess**, and some of it is left over.

To find the limiting reactant:

1. Convert every reactant amount into **moles**.
2. Divide each number of moles by that reactant's **coefficient**.
3. The **smallest** result belongs to the limiting reactant.

An equivalent method is to take one reactant, calculate how many moles of the other it needs, and compare with what is actually present. Both methods give the same answer. What does **not** work is comparing grams, or comparing moles without the coefficients.

The amount of product calculated from the limiting reactant is the **theoretical yield**: the most product the reaction can give if it goes to completion. In the lab you often collect less, because of side reactions, losses during transfer or a reaction that does not finish. The ratio of what you actually collect to the theoretical yield, times 100, is the **percent yield**.

## Worked example 1: mass to mass with a non-1:1 ratio

**Question.** A camping stove burns 5.80 g of butane, C₄H₁₀, completely. Use the equation above. (a) What mass of oxygen is used? (b) What mass of carbon dioxide forms? Molar masses: C 12.01, H 1.008, O 16.00 g mol⁻¹.

1. Molar mass of butane: M = 4(12.01) + 10(1.008) = 58.12 g mol⁻¹.
2. Moles of butane: n = 5.80 g ÷ 58.12 g mol⁻¹ = 0.099794 mol.
3. Moles of O₂: 0.099794 mol C₄H₁₀ × (13 mol O₂ / 2 mol C₄H₁₀) = 0.64866 mol O₂.
4. Mass of O₂: 0.64866 mol × 32.00 g mol⁻¹ = 20.757 g.
5. Moles of CO₂: 0.099794 mol C₄H₁₀ × (8 mol CO₂ / 2 mol C₄H₁₀) = 0.39917 mol CO₂.
6. Mass of CO₂: 0.39917 mol × 44.01 g mol⁻¹ = 17.568 g.

**Answer.** (a) 20.8 g of O₂. (b) 17.6 g of CO₂ (3 significant figures, matching 5.80 g).

**Check with conservation of mass.** The water formed is 0.099794 × (10/2) = 0.49897 mol, which is 8.989 g. Mass in: 5.80 + 20.757 = 26.56 g. Mass out: 17.568 + 8.989 = 26.56 g. The totals match, as they must.

**The trap.** Multiplying 5.80 g by 13/2 gives 37.7 g of oxygen. That uses the coefficients as a mass ratio. Butane and oxygen molecules have different masses, so the ratio only applies to moles.

## Worked example 2: limiting reactant with a solution and a gas

**Question.** A student drops 1.31 g of zinc into 25.0 mL of 1.00 M hydrochloric acid at 25 °C and 1.00 atm:

Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)

(a) Which reactant is limiting? (b) What volume of hydrogen gas forms? (c) What mass of the excess reactant is left? Zn = 65.38 g mol⁻¹; R = 0.08206 L atm mol⁻¹ K⁻¹.

1. Moles of Zn: 1.31 g ÷ 65.38 g mol⁻¹ = 0.020037 mol.
2. Moles of HCl: 1.00 mol L⁻¹ × 0.0250 L = 0.0250 mol.
3. Divide by coefficients: Zn 0.020037 ÷ 1 = 0.02004; HCl 0.0250 ÷ 2 = 0.0125. The smaller value is for HCl, so **HCl is limiting**. (Check the other way: 0.020037 mol of Zn would need 0.040074 mol of HCl, but only 0.0250 mol is present.)
4. Moles of H₂ from the limiting reactant: 0.0250 mol HCl × (1 mol H₂ / 2 mol HCl) = 0.0125 mol H₂.
5. Volume: V = nRT / P = (0.0125 mol)(0.08206 L atm mol⁻¹ K⁻¹)(298.15 K) ÷ 1.00 atm = 0.30583 L.
6. Zinc used: 0.0125 mol (1:1 with H₂). Zinc left: 0.020037 − 0.0125 = 0.007537 mol, which is 0.007537 × 65.38 = 0.4928 g.

**Answer.** (a) HCl. (b) 0.306 L of H₂. (c) 0.493 g of zinc remains unreacted.

**Notice.** There are more moles of HCl than of Zn, yet HCl is limiting. The coefficient 2 means each zinc atom needs two HCl. If you had assumed Zn was limiting you would predict 0.490 L of hydrogen, far too much.

**Percent yield.** Suppose the student collects only 0.281 L of hydrogen. The percent yield is 0.281 ÷ 0.30583 × 100 = 91.9%.

## When one amount changes

A common exam task is to predict what happens to the product when one reactant amount changes. Figure 2 shows a fictional experiment. Different masses of magnesium are added to the same 50.0 mL of 1.00 M HCl (0.0500 mol), and the hydrogen is measured. The reaction is Mg + 2HCl → MgCl₂ + H₂.

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="mg-graph-title mg-graph-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mg-graph-title">Moles of hydrogen formed against mass of magnesium added</title>
<desc id="mg-graph-desc">Graph with mass of magnesium added in grams on the horizontal axis from 0 to 1.2 and moles of hydrogen formed on the vertical axis from 0 to 0.050. A solid line for 50.0 millilitres of acid rises in a straight line from the origin to 0.025 moles at 0.61 grams of magnesium, then stays flat at 0.025 moles up to 1.2 grams. A dashed line for 100.0 millilitres of acid follows the same straight rise but keeps rising past 0.025 moles and reaches about 0.049 moles at 1.2 grams.</desc>
<line x1="80" y1="250" x2="590" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="250" x2="80" y2="30" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="268">0</text><text x="163.3" y="268">0.2</text><text x="246.7" y="268">0.4</text><text x="330" y="268">0.6</text><text x="413.3" y="268">0.8</text><text x="496.7" y="268">1.0</text><text x="580" y="268">1.2</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="163.3" y1="250" x2="163.3" y2="255"/><line x1="246.7" y1="250" x2="246.7" y2="255"/><line x1="330" y1="250" x2="330" y2="255"/><line x1="413.3" y1="250" x2="413.3" y2="255"/><line x1="496.7" y1="250" x2="496.7" y2="255"/><line x1="580" y1="250" x2="580" y2="255"/>
<line x1="75" y1="208" x2="80" y2="208"/><line x1="75" y1="166" x2="80" y2="166"/><line x1="75" y1="124" x2="80" y2="124"/><line x1="75" y1="82" x2="80" y2="82"/><line x1="75" y1="40" x2="80" y2="40"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="70" y="254">0</text><text x="70" y="212">0.010</text><text x="70" y="170">0.020</text><text x="70" y="128">0.030</text><text x="70" y="86">0.040</text><text x="70" y="44">0.050</text>
</g>
<text x="335" y="295" text-anchor="middle" font-size="13" fill="#1d2b44">Mass of Mg added (g)</text>
<text x="18" y="140" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 18 140)">H₂ formed (mol)</text>
<polyline points="80,250 580,42.7" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<polyline points="80,250 333.3,145 580,145" fill="none" stroke="#1d2b44" stroke-width="3"/>
<circle cx="333.3" cy="145" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="345" y="168" font-size="12" fill="#1d2b44">0.608 g Mg: acid now limiting</text>
<text x="430" y="137" font-size="12" fill="#1d2b44">50.0 mL acid (solid)</text>
<text x="100" y="110" font-size="12" fill="#1d2b44">100.0 mL acid (dashed)</text>
</svg>
<figcaption>Figure 2. Left of the circle, magnesium is limiting and the hydrogen grows in direct proportion to the magnesium. Right of the circle, the acid is limiting and extra magnesium makes no more hydrogen. Doubling the acid (dashed line) moves the turning point to 1.216 g, just beyond this graph.</figcaption>
</figure>

Read the graph as a set of cause-and-effect statements:

- **While Mg is limiting**, n(H₂) = n(Mg). Doubling the magnesium doubles the hydrogen.
- **The turning point** is where the reactants are in exactly the equation ratio: 0.0500 mol HCl needs 0.0250 mol Mg, which is 0.0250 × 24.31 = 0.608 g.
- **Once HCl is limiting**, n(H₂) = ½ n(HCl) = 0.0250 mol, whatever extra Mg you add. In these conditions that is 0.612 L of gas at 25 °C and 1.00 atm.
- **Adding more of the excess reactant never increases the product.** It only increases the amount left over.

## Common misconceptions

- **"The coefficients are mass ratios."** They are mole ratios. 2 g of butane does not react with 13 g of oxygen (Worked example 1).
- **"The limiting reactant is the one with the smaller mass."** Compare moles, and divide by coefficients. In Worked example 2, HCl is limiting even though there are more moles of it than of zinc.
- **"The limiting reactant is the one with fewer moles."** Not if the coefficients differ. Always divide by the coefficient first.
- **Calculating the product from the excess reactant.** The excess reactant does not run out, so it cannot set the amount of product.
- **Forgetting to convert units for gases and solutions.** mL must become L; °C must become K. Using 25 instead of 298.15 for T makes a gas volume about twelve times too small.
- **Using an unbalanced equation.** Check the atoms on both sides before you take any ratio.
- **Thinking the product total equals the sum of the moles of reactants.** Mass is conserved; moles are not. In Worked example 1, 15 mol of reactant particles become 18 mol of product particles for every 2 mol of butane.

## Where this leads

Stoichiometry is the calculation engine for the rest of Unit 4 and beyond. The next topic, [Introduction to Titration](/advanced-course-resources/chemistry/4-6-introduction-titration-study-guide/), uses exactly this road map: a measured volume of a solution of known molarity gives moles, and the mole ratio gives the amount of the unknown. You will meet the same calculations again in thermochemistry and in equilibrium. Try the [practice questions](/advanced-course-resources/chemistry/4-5-stoichiometry-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/4-5-stoichiometry-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/4-5-stoichiometry-checklist/) to consolidate. If you need the previous topic, see [Physical and Chemical Changes](/advanced-course-resources/chemistry/4-4-physical-chemical-changes-study-guide/).
