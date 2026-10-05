---
resourceId: "mb-ap-chem-5.1-study-guide"
title: "Reaction Rates: Study Guide (Chemistry 5.1)"
description: "Learn what a reaction rate measures, how coefficients link the rates of different species, how rates are measured in the lab, and why concentration, temperature, surface area and catalysts change them."
course: "chemistry"
unit: 5
topics: ["5.1"]
resourceType: "study-guide"
prerequisites:
  - "Balancing chemical equations and using mole ratios (Unit 4)"
  - "Molarity as moles of solute per litre of solution (Topic 3.7)"
  - "Reading the slope of a straight line on a graph"
prerequisiteResources: ["mb-ap-chem-4.9-study-guide"]
learningObjectives:
  - "Define the rate of a reaction as the change in amount or concentration of a species per unit time, with a positive value and correct units"
  - "Use the coefficients of a balanced equation to convert the rate of one species into the rate of another, and into the rate of reaction"
  - "Calculate an average rate from experimental data and explain how an instantaneous rate is found from a tangent"
  - "Describe lab measurements that can follow a reaction over time, such as gas volume, mass loss and colour"
  - "Explain, at the particle level, how concentration, temperature, surface area and catalysts change the rate of a reaction"
skills: ["5", "6"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Molar masses: C 12.01, O 16.00 g mol⁻¹. Keep unrounded values until the final step; rates usually to 2–3 significant figures"
related: ["mb-ap-chem-5.1-revision-notes", "mb-ap-chem-5.1-practice", "mb-ap-chem-5.1-checklist"]
next: "mb-ap-chem-5.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A reaction rate is how fast reactants are turned into products: the change in concentration (or amount) per unit time, usually in M s⁻¹."
  - "Reactants are used up, so their rate of disappearance is −Δ[reactant]/Δt. Products form, so their rate of formation is +Δ[product]/Δt. Both are positive numbers."
  - "Coefficients set the ratio of rates. In 3 A → B + 2 C, A disappears three times as fast as B forms."
  - "Rates usually fall as a reaction goes on, because reactant concentrations fall. An average rate covers an interval; an instantaneous rate is the slope of the tangent at one moment."
  - "Higher concentration, higher temperature, larger surface area and a catalyst all make a reaction faster."
faqs:
  - question: "Why is the rate of a reactant written with a minus sign?"
    answer: "Its concentration goes down, so Δ[reactant] is negative. The minus sign turns this into a positive rate, because a rate is always reported as a positive number."
  - question: "Does a faster reaction make more product?"
    answer: "No. Rate tells you how quickly product forms, not how much forms in the end. The final amount depends on the amounts of reactants (stoichiometry) and, for reversible reactions, on equilibrium."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What a reaction rate measures

Some reactions are over in a fraction of a second, like a precipitate forming when two solutions are mixed. Others take years, like iron rusting. **Chemical kinetics** is the study of how fast reactions happen and what controls that speed.

The **rate of a reaction** is how quickly reactants are turned into products. You measure it as the change in the amount of a substance divided by the time taken:

> rate = change in concentration ÷ change in time = Δ[X] / Δt

Square brackets mean concentration in mol L⁻¹ (M). So the usual unit of rate is **M s⁻¹** (mol L⁻¹ s⁻¹). You may also see M min⁻¹, or, for a gas or a solid, mL s⁻¹ or g s⁻¹ when the measurement is a volume or a mass.

Two signs need care:

- A **product** is formed, so its concentration rises and Δ[product] is positive. Rate of formation = **+Δ[product] / Δt**.
- A **reactant** is used up, so its concentration falls and Δ[reactant] is negative. Rate of disappearance = **−Δ[reactant] / Δt**. The minus sign makes the rate positive.

A rate is always reported as a positive number. If your answer is negative, you have left out the minus sign for a reactant.

## Rates of different species: use the coefficients

In one reaction, every species changes at a rate set by the balanced equation. Take the decomposition of hypochlorite ions in warm bleach:

3 ClO⁻(aq) → ClO₃⁻(aq) + 2 Cl⁻(aq)

Each time the reaction happens once, 3 ClO⁻ ions are used and 1 ClO₃⁻ ion and 2 Cl⁻ ions are made. So in any time interval:

- ClO⁻ disappears **three times** as fast as ClO₃⁻ forms.
- Cl⁻ forms **twice** as fast as ClO₃⁻ forms.

Chemists remove this ambiguity by defining one **rate of reaction**: divide each species' rate by its coefficient. For a general reaction a A + b B → c C + d D:

> rate of reaction = −(1/a) Δ[A]/Δt = −(1/b) Δ[B]/Δt = (1/c) Δ[C]/Δt = (1/d) Δ[D]/Δt

Every term gives the same number, so it does not matter which species you measure. When a question asks for "the rate", check whether it means the rate of one species or the rate of reaction.

## Average rate and instantaneous rate

Rates are rarely constant. In most reactions the rate is fastest at the start, when reactant concentrations are highest, and slows as the reactants are used up. Figure 1 shows this for a reaction A → 2 B.

<figure>
<svg viewBox="0 0 640 320" role="img" aria-labelledby="rate-curve-title rate-curve-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rate-curve-title">Concentration against time for A → 2 B, with a tangent line</title>
<desc id="rate-curve-desc">A graph with time from 0 to 200 seconds on the horizontal axis and concentration from 0 to 1.6 M on the vertical axis. The solid curve for reactant A starts at 0.80 M and falls steeply at first, then more gently, reaching about 0.11 M at 200 seconds. The dashed curve for product B starts at 0 and rises steeply at first, then more gently, reaching about 1.38 M at 200 seconds. At every time, B has risen by twice as much as A has fallen. A dotted straight line touches the A curve at 50 seconds, where A is 0.485 M; this tangent has a slope of minus 0.00485 M per second.</desc>
<line x1="70" y1="260" x2="580" y2="260" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="260" x2="70" y2="30" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="264">0</text><text x="62" y="209">0.4</text><text x="62" y="154">0.8</text><text x="62" y="99">1.2</text><text x="62" y="44">1.6</text>
</g>
<g stroke="#1d2b44" stroke-width="1"><line x1="66" y1="205" x2="70" y2="205"/><line x1="66" y1="150" x2="70" y2="150"/><line x1="66" y1="95" x2="70" y2="95"/><line x1="66" y1="40" x2="70" y2="40"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="278">0</text><text x="195" y="278">50</text><text x="320" y="278">100</text><text x="445" y="278">150</text><text x="570" y="278">200</text>
</g>
<g stroke="#1d2b44" stroke-width="1"><line x1="195" y1="260" x2="195" y2="264"/><line x1="320" y1="260" x2="320" y2="264"/><line x1="445" y1="260" x2="445" y2="264"/><line x1="570" y1="260" x2="570" y2="264"/></g>
<text x="325" y="305" text-anchor="middle" font-size="13" fill="#1d2b44">Time (s)</text>
<text x="20" y="150" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 20 150)">Concentration (M)</text>
<path d="M70.0 150.0 L95.0 160.5 L120.0 169.9 L145.0 178.5 L170.0 186.3 L195.0 193.3 L220.0 199.6 L245.0 205.4 L270.0 210.6 L295.0 215.3 L320.0 219.5 L345.0 223.4 L370.0 226.9 L395.0 230.0 L420.0 232.9 L445.0 235.5 L470.0 237.8 L495.0 239.9 L520.0 241.8 L545.0 243.5 L570.0 245.1" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M70.0 260.0 L95.0 239.1 L120.0 220.1 L145.0 203.0 L170.0 187.5 L195.0 173.4 L220.0 160.7 L245.0 149.2 L270.0 138.9 L295.0 129.4 L320.0 120.9 L345.0 113.2 L370.0 106.3 L395.0 100.0 L420.0 94.3 L445.0 89.1 L470.0 84.4 L495.0 80.2 L520.0 76.4 L545.0 72.9 L570.0 69.8" fill="none" stroke="#b5542b" stroke-width="2.5" stroke-dasharray="8 5"/>
<line x1="70" y1="159.9" x2="320" y2="226.6" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<circle cx="195" cy="193.3" r="4.5" fill="#1d2b44"/>
<text x="500" y="230" font-size="13" fill="#1d2b44">[A], reactant (solid)</text>
<text x="430" y="66" font-size="13" fill="#b5542b">[B], product (dashed)</text>
<text x="205" y="182" font-size="12" fill="#1d2b44">tangent at 50 s</text>
</svg>
<figcaption>Figure 1. For A → 2 B, the reactant curve (solid) falls and the product curve (dashed) rises twice as far. Both curves are steepest at the start. The dotted tangent at 50 s gives the instantaneous rate there.</figcaption>
</figure>

There are two ways to describe the rate from a graph or table like this:

- **Average rate** over an interval = the change in concentration ÷ the length of the interval. On the graph it is the slope of the straight line (secant) joining two points on the curve. For A from 0 to 100 s: [A] falls from 0.800 M to 0.294 M, so the average rate of disappearance is 0.506 M ÷ 100 s = 0.00506 M s⁻¹.
- **Instantaneous rate** at one moment = the slope of the **tangent** to the curve at that moment, with the sign made positive for a reactant. At 50 s the tangent has slope −0.00485 M s⁻¹, so A is disappearing at 0.00485 M s⁻¹ at that instant.

The **initial rate** is the instantaneous rate at t = 0. It matters in Topic 5.2, because at the very start you know exactly what the concentrations are.

A curve that flattens out tells you the rate is falling. When the reactant curve becomes horizontal, the rate has dropped to zero: the limiting reactant is used up (or the reaction has reached equilibrium).

## How rates are measured in the lab

To find a rate you need a property that changes as the reaction goes on and that you can measure many times without stopping the reaction. The choice depends on the reaction.

| What changes | What you measure | Typical reaction |
|---|---|---|
| A gas is given off | Volume of gas in a gas syringe or upturned measuring cylinder | A metal or a carbonate with acid; catalysed decomposition of hydrogen peroxide |
| A gas escapes from an open flask | Mass of the flask on a balance | A carbonate with acid |
| A coloured species forms or is used up | Absorbance in a spectrophotometer, or the time until a colour appears | Fading of a dye; formation of iodine |
| A precipitate forms | Time until a mark under the flask is hidden | Thiosulfate with acid |
| Ions are used up or made | Electrical conductivity or pH | Reactions in which H⁺ or OH⁻ is consumed |
| The number of gas molecules changes | Total pressure in a sealed container | Gas-phase decompositions |

In every case you convert the measurement into amounts or concentrations with stoichiometry, then divide by time.

## What changes the rate

A reaction happens when reactant particles **collide** with enough energy and in a suitable orientation. Topic 5.5 builds this collision model in detail. For now, use it to connect what you see in the beaker (the macroscopic scale) to what particles are doing (the particulate scale).

| Change | Effect on rate | Particle-level reason |
|---|---|---|
| Higher concentration of a reactant in solution (or higher partial pressure of a gas) | Usually faster | More particles in each unit of volume, so collisions happen more often |
| Higher temperature | Faster | Particles move faster, so they collide more often, and a larger fraction of collisions have enough energy to react |
| Larger surface area of a solid (powder instead of lumps) | Faster | Only particles at the surface can be hit; breaking a solid up exposes more of them |
| Adding a catalyst | Faster | The catalyst gives a different route with a lower energy barrier; it is not used up (Topic 5.11) |
| Other conditions, such as the solvent or, for some reactions, light | Can be faster or slower | They change how easily particles meet or how much energy is available |

Two points help in written answers:

- **Concentration applies to dissolved substances and gases, not to pure solids or liquids.** Adding more lumps of marble does not make each lump react faster. What matters for a solid is how much surface is exposed.
- **Temperature has two effects.** Faster particles collide more often, but the bigger effect is that many more collisions have enough energy. That is why a 10 °C rise can roughly double the rate of many reactions, far more than the small rise in collision frequency could explain.

## Worked example 1: rates of different species

**Question.** In a warm bleach solution, hypochlorite decomposes: 3 ClO⁻(aq) → ClO₃⁻(aq) + 2 Cl⁻(aq). At one moment, ClO⁻ is disappearing at 6.0 × 10⁻⁵ M s⁻¹ (an invented value for practice). Find (a) the rate of formation of ClO₃⁻, (b) the rate of formation of Cl⁻ and (c) the rate of reaction.

1. Write the ratio of coefficients: ClO⁻ : ClO₃⁻ : Cl⁻ = 3 : 1 : 2.
2. **(a)** ClO₃⁻ forms one-third as fast as ClO⁻ disappears: 6.0 × 10⁻⁵ M s⁻¹ × (1/3) = **2.0 × 10⁻⁵ M s⁻¹**.
3. **(b)** Cl⁻ forms two-thirds as fast as ClO⁻ disappears: 6.0 × 10⁻⁵ M s⁻¹ × (2/3) = **4.0 × 10⁻⁵ M s⁻¹**.
4. **(c)** Rate of reaction = −(1/3) Δ[ClO⁻]/Δt = (1/3)(6.0 × 10⁻⁵) = **2.0 × 10⁻⁵ M s⁻¹**. Check with Cl⁻: (1/2)(4.0 × 10⁻⁵) = 2.0 × 10⁻⁵ M s⁻¹. The same.

**Check.** The species with the biggest coefficient (ClO⁻) has the biggest rate. If your Cl⁻ rate came out larger than the ClO⁻ rate, you multiplied by 3/2 instead of 2/3.

## Worked example 2: an average rate from mass-loss data

**Question.** A student adds marble chips (calcium carbonate, in excess) to 50.0 mL of hydrochloric acid in an open flask on a balance. Carbon dioxide escapes, so the mass falls. The invented results are:

| Time (s) | 0 | 30 | 60 | 120 | 180 |
|---|---|---|---|---|---|
| Mass of flask and contents (g) | 152.40 | 151.96 | 151.64 | 151.24 | 151.02 |

CaCO₃(s) + 2 HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)

(a) Calculate the average rate of loss of mass over the first 60 s and over the next 60 s.
(b) Convert the first rate into the average rate at which HCl is used up, in mol s⁻¹ and in M s⁻¹.
(c) Explain why the rate falls.

1. **(a)** Mass lost from 0 to 60 s = 152.40 − 151.64 = 0.76 g. Average rate = 0.76 g ÷ 60 s = **0.0127 g s⁻¹**.
   From 60 to 120 s: 151.64 − 151.24 = 0.40 g, so 0.40 g ÷ 60 s = **0.0067 g s⁻¹**.
2. **(b)** The mass lost is CO₂ (M = 44.01 g mol⁻¹). Moles of CO₂ per second = 0.01267 g s⁻¹ ÷ 44.01 g mol⁻¹ = 2.88 × 10⁻⁴ mol s⁻¹.
   From the equation, 2 mol HCl are used for each 1 mol CO₂, so HCl is used at 2 × 2.88 × 10⁻⁴ = **5.76 × 10⁻⁴ mol s⁻¹**.
   In 50.0 mL (0.0500 L) of solution: 5.76 × 10⁻⁴ mol s⁻¹ ÷ 0.0500 L = **0.0115 M s⁻¹**. This is the average rate of disappearance of HCl, −Δ[HCl]/Δt.
3. **(c)** The rate in the second minute is about half the rate in the first. As the acid reacts, [HCl] falls, so H⁺ ions hit the surface of the chips less often. (The chips also get smaller, so a little less surface is exposed.) Fewer successful collisions each second means a lower rate.

**Interpretation.** The mass readings change least between 120 and 180 s (0.22 g), so the rate is still falling. The total CO₂ lost by 180 s is 1.38 g, or 0.0314 mol. When the mass stops changing, the acid is used up, because the marble is in excess.

## Common misconceptions

- **"The rate is the same number for every species."** Only the rate of reaction is. The rates of the individual species differ by the ratio of their coefficients.
- **"A rate can be negative."** Concentration changes can be negative, but rates are reported as positive. Use −Δ[reactant]/Δt.
- **"The rate stays the same all the way through."** For most reactions the rate falls as reactants are used up. That is why an average rate depends on which interval you choose.
- **"A faster reaction gives more product."** Rate controls how soon product appears, not how much appears in the end.
- **"Adding more of a solid increases its concentration."** A pure solid has no concentration in solution. More lumps add surface, but the rate per unit of surface is unchanged.
- **"A catalyst is used up in the reaction."** A catalyst takes part but is regenerated, so the same amount is present at the end.
- **"Heating speeds a reaction only because particles collide more often."** The bigger effect is that more collisions have enough energy to react.
- **Mixing up the units of the graph with the equation.** A rate from a concentration–time graph is in M s⁻¹. Coefficients from the equation are pure numbers that compare rates; they are not part of the units.

## Where this leads

This topic links back to the stoichiometry and reaction types of Unit 4, including [Topic 4.9, Oxidation–Reduction (Redox) Reactions](/advanced-course-resources/chemistry/4-9-oxidation-reduction-redox-reactions-study-guide/). Next, [Topic 5.2, Introduction to Rate Law](/advanced-course-resources/chemistry/5-2-introduction-rate-law-study-guide/), turns "higher concentration means faster" into an equation, rate = k[A]ᵐ[B]ⁿ, and shows how initial rates reveal the powers. Later topics explain the temperature and catalyst effects with the collision model, energy profiles and mechanisms. Try the [practice questions](/advanced-course-resources/chemistry/5-1-reaction-rates-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/5-1-reaction-rates-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/5-1-reaction-rates-checklist/) to consolidate.
