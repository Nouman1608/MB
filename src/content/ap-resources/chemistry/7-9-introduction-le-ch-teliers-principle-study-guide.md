---
resourceId: "mb-ap-chem-7.9-study-guide"
title: "Introduction to Le Châtelier's Principle: Study Guide (Chemistry 7.9)"
description: "Learn to predict how an equilibrium shifts when you add or remove a species, change temperature, compress a gas mixture or dilute a solution, and what you would see."
course: "chemistry"
unit: 7
topics: ["7.9"]
resourceType: "study-guide"
prerequisites:
  - "Equilibrium as a dynamic state with equal forward and reverse rates (Topics 7.1 and 7.2)"
  - "Writing an equilibrium expression and leaving out solids and pure liquids (Topic 7.3)"
  - "Reading concentration–time graphs and particle diagrams of equilibrium mixtures (Topic 7.8)"
prerequisiteResources: ["mb-ap-chem-7.8-study-guide"]
learningObjectives:
  - "State Le Châtelier's principle and explain it in terms of forward and reverse rates"
  - "Predict the direction of shift when a reactant or product is added or removed"
  - "Treat heat as a reactant or product to predict the effect of a temperature change"
  - "Predict the effect of changing the volume of a gas mixture, or diluting a solution, by counting particles"
  - "Recognise changes that cause no shift: a catalyst, extra solid or pure liquid, an unreactive gas at constant volume"
  - "Predict what you would observe after a stress: a change of colour, pH or temperature"
skills: ["4", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "none-needed"
calculatorNote: "This topic is about reasoning, not calculation. Topic 7.10 adds the numbers using Q and K"
related: ["mb-ap-chem-7.9-revision-notes", "mb-ap-chem-7.9-practice", "mb-ap-chem-7.9-checklist"]
next: "mb-ap-chem-7.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Le Châtelier's principle: when a system at equilibrium is disturbed, it shifts in the direction that partly undoes the disturbance."
  - "Add a species and the system shifts to use it up; remove a species and the system shifts to replace it."
  - "Treat heat as a product of an exothermic reaction and a reactant of an endothermic one. Heating favours the endothermic direction."
  - "Decreasing the volume of a gas mixture favours the side with fewer gas molecules. Diluting a solution favours the side with more dissolved particles."
  - "A catalyst, extra solid or pure liquid, or an unreactive gas added at constant volume causes no shift."
  - "The shift shows up in things you can measure: colour, pH and temperature."
faqs:
  - question: "Does the system completely cancel the change?"
    answer: "No. The shift only partly undoes the stress. If you add a reactant, some of it reacts, but its concentration at the new equilibrium is still higher than before you added it."
  - question: "Which stress changes the value of K?"
    answer: "Only a change in temperature. Adding or removing species, changing volume and diluting all leave K the same; they change the reaction quotient Q instead. Topic 7.10 shows this with numbers."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What Le Châtelier's principle says

At equilibrium, the forward and reverse reactions run at the same rate, so the amounts of reactants and products stay constant. A **stress** is any change that upsets this balance. The four stresses you need are:

1. adding or removing a reactant or product;
2. changing the temperature;
3. changing the volume (and so the pressure) of a gas-phase system;
4. diluting a reaction mixture in solution.

**Le Châtelier's principle:** when a system at equilibrium is disturbed, it shifts in the direction that partly counteracts the disturbance, until a new equilibrium is reached.

"Shifts to the right" (or "forward") means there is a net change from reactants to products. "Shifts to the left" (or "in reverse") means a net change from products to reactants. After the shift, the forward and reverse rates are equal again, but the concentrations are different from before.

### Why it works: rates

The principle is not magic. It follows from the rates you met in Topic 7.2. Suppose you add more of a reactant. Reactant particles now collide more often, so the forward rate jumps above the reverse rate. There is a net forward reaction. As it runs, reactants are used up (so the forward rate falls) and products build up (so the reverse rate rises). When the two rates are equal again, the system is at a new equilibrium.

<figure>
<svg viewBox="0 0 640 320" role="img" aria-labelledby="lc-graph-title lc-graph-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lc-graph-title">Concentration against time when extra B is added to the equilibrium A + B ⇌ C</title>
<desc id="lc-graph-desc">Three flat lines show an equilibrium mixture: A is highest, C is in the middle and B is lowest. At time t1, B jumps up suddenly. After t1, B and A both fall and C rises, until all three lines level off again. At the new equilibrium C is the highest, A is in the middle and B is lowest, but B is still higher than it was before t1.</desc>
<line x1="70" y1="260" x2="610" y2="260" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="260" x2="70" y2="30" stroke="#1d2b44" stroke-width="2"/>
<text x="340" y="300" text-anchor="middle" font-size="14" fill="#1d2b44">Time</text>
<text x="24" y="150" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 24 150)">Concentration</text>
<line x1="250" y1="260" x2="250" y2="40" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<text x="250" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">t₁: B added</text>
<path d="M70 60 H250 C290 120, 330 137, 420 137 H560" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M70 235 H250 V110 C290 160, 330 187, 420 187 H560" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 5"/>
<path d="M70 160 H250 C290 105, 330 83, 420 83 H560" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="2 4"/>
<text x="80" y="52" font-size="13" fill="#1d2b44">[A]</text>
<text x="80" y="152" font-size="13" fill="#1d2b44">[C]</text>
<text x="80" y="227" font-size="13" fill="#1d2b44">[B]</text>
<text x="568" y="87" font-size="13" fill="#1d2b44">[C]</text>
<text x="568" y="141" font-size="13" fill="#1d2b44">[A]</text>
<text x="568" y="191" font-size="13" fill="#1d2b44">[B]</text>
</svg>
<figcaption>Figure 1. Adding B to A + B ⇌ C. Solid line: [A]; dashed line: [B]; dotted line: [C]. The system shifts right: A and the added B are used up and C is made. [B] settles above its old value, because the shift only partly undoes the stress.</figcaption>
</figure>

## Stress 1: adding or removing a species

- **Add** a reactant or product → the system shifts to **use it up**.
- **Remove** a reactant or product → the system shifts to **replace it**.

You can remove a species without taking it out of the flask yourself. Adding a reagent that turns it into a precipitate, or that reacts with it, removes it from the equilibrium just as well. For example, adding silver nitrate removes chloride ions as solid AgCl.

**What does not count as a stress.** A solid or a pure liquid does not appear in the equilibrium expression (Topic 7.3). Its "concentration" does not change when you add more of it, so adding or removing some (as long as some remains) causes no shift. The same applies to water when it is the solvent.

## Stress 2: changing the temperature

Temperature is different from the other stresses because it changes the value of K. For predicting the direction, the simplest method is to write heat into the equation:

- **Exothermic forward reaction** (ΔH < 0): heat is a **product**. A + B ⇌ C + heat.
- **Endothermic forward reaction** (ΔH > 0): heat is a **reactant**. heat + A + B ⇌ C.

Then treat heating as "adding heat" and cooling as "removing heat". Heating always favours the endothermic direction; cooling favours the exothermic direction.

You can also run this backwards. If heating a mixture increases the amount of product, the forward reaction must be endothermic.

## Stress 3: changing the volume of a gas mixture

For a system of gases, count the gas molecules on each side of the balanced equation, using the coefficients.

- **Decrease the volume** (which increases the total pressure) → shift towards the side with **fewer** gas molecules. Fewer molecules partly reduce the pressure.
- **Increase the volume** → shift towards the side with **more** gas molecules.
- **Equal numbers of gas molecules** on both sides → no shift.

Only count gases. In CaCO₃(s) ⇌ CaO(s) + CO₂(g) there is 0 mol of gas on the left and 1 mol on the right.

One special case: adding an unreactive gas such as argon **at constant volume** raises the total pressure but does not change the partial pressure or concentration of any reacting gas. There is no shift. A pressure change matters only when it changes the concentrations of the reacting species.

## Stress 4: diluting a solution

Diluting a solution with water lowers the concentration of **every** dissolved species by the same factor. This is the solution version of increasing the volume of a gas:

- Dilution favours the side with **more dissolved particles** (count ions and molecules in solution, using coefficients).
- Equal numbers of dissolved particles on both sides → dilution causes no shift.

Water as the solvent is not counted, because it is a pure liquid.

## What you would actually see

Exam questions often ask what an observer would **measure**, not just which way the system shifts. Link the shift to the property:

| Property | How the shift shows up |
|---|---|
| Colour | If one species is coloured, a shift towards it deepens that colour; a shift away from it makes the colour fade or change. |
| pH | If H⁺ or OH⁻ is in the equation, a shift that makes or uses it changes the pH. |
| Temperature | In an insulated vessel, a shift in the exothermic direction releases heat and the temperature rises; a shift in the endothermic direction absorbs heat and the temperature falls. |

For example, in aqueous ammonia, NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq). Dissolving some ammonium chloride adds NH₄⁺, so the system shifts left. Hydroxide ions are used up, [OH⁻] falls, and the pH **decreases**. A pH meter would show this directly.

## Worked example 1: one coloured equilibrium, four stresses

**Question.** In a solution containing cobalt(II) ions and chloride ions, this equilibrium is set up. The forward reaction is endothermic.

[Co(H₂O)₆]²⁺(aq) + 4Cl⁻(aq) ⇌ [CoCl₄]²⁻(aq) + 6H₂O(l)  ΔH > 0

The ion [Co(H₂O)₆]²⁺ is pink and the ion [CoCl₄]²⁻ is blue. The mixture is purple (both colours present). Predict the colour change for each stress: (a) adding concentrated hydrochloric acid; (b) adding silver nitrate solution; (c) placing the tube in hot water; (d) adding a large volume of water.

1. **(a) Add HCl.** This adds Cl⁻, a reactant. The system shifts **right** to use it up. More blue [CoCl₄]²⁻ forms: the solution turns **bluer**.
2. **(b) Add AgNO₃.** Ag⁺ removes Cl⁻ as a white precipitate of AgCl(s). Removing a reactant shifts the system **left** to replace it. More pink [Co(H₂O)₆]²⁺ forms: the solution turns **pinker** (and goes cloudy from the precipitate).
3. **(c) Heat.** The forward reaction is endothermic, so heat is a reactant. Adding heat shifts the system **right**: the solution turns **bluer**. (Cooling in ice would turn it pinker.)
4. **(d) Dilute.** Water is the solvent, so it is not counted. Count dissolved particles: left side 1 + 4 = 5; right side 1. Dilution favours the side with more dissolved particles, so the system shifts **left**: the solution turns **pinker**, beyond the simple fading that dilution causes.

**Check.** In each case, ask: "Does the shift partly undo what I did?" Adding Cl⁻ → Cl⁻ is used up. Removing Cl⁻ → Cl⁻ is released. Adding heat → heat is absorbed. Diluting → the number of dissolved particles increases. All four agree with the principle.

## Worked example 2: squeezing a gas syringe

**Question.** A sealed glass syringe holds an equilibrium mixture of dinitrogen tetroxide (colourless) and nitrogen dioxide (brown) at room temperature:

N₂O₄(g) ⇌ 2NO₂(g)  ΔH > 0

(a) The plunger is pushed in quickly so the volume halves, and the temperature is kept constant. Describe what you see immediately and over the next few seconds. (b) The syringe is then put in an ice bath. Predict the colour change.

1. **(a) The instant of compression.** Nothing has reacted yet, but every gas is squeezed into half the space, so [NO₂] doubles. The mixture looks **darker brown** straight away.
2. **The shift.** Count gas molecules: 1 on the left, 2 on the right. A smaller volume favours the side with fewer gas molecules, so the system shifts **left**. Some NO₂ combines to form N₂O₄, and the brown colour **fades a little**.
3. **The new equilibrium.** The shift only partly undoes the stress. The final colour is lighter than just after compression but **still darker** than the original mixture, because [NO₂] at the new equilibrium is higher than before.
4. **(b) Ice bath.** The forward reaction is endothermic, so heat is a reactant. Cooling removes heat, so the system shifts **left** (the exothermic direction). More colourless N₂O₄ forms and the gas turns **paler**.

**Why step 1 matters.** If an exam question asks what you *observe*, the darkening caused by compression is part of the answer. The shift explains the partial fading afterwards, not the darkening.

## Changes that cause no shift

| Change | Why there is no shift |
|---|---|
| Adding a catalyst | It speeds up the forward and reverse reactions by the same factor. Equilibrium is reached sooner, but its position is the same. |
| Adding more solid or pure liquid | Not in the equilibrium expression, so the balance is not upset. |
| Adding an unreactive gas at constant volume | The partial pressures of the reacting gases do not change. |
| Changing the volume when gas molecules are equal on both sides | Both sides are affected equally. |

## Common misconceptions

- **"The system returns to the old concentrations."** No. A new equilibrium is reached with different concentrations. If you add a reactant, its final concentration is still higher than before (Figure 1).
- **"Adding a reactant increases K."** K changes only with temperature. Adding a species changes the position of equilibrium, not K.
- **"Adding more solid shifts the equilibrium."** Solids and pure liquids are not in the equilibrium expression, so adding more has no effect on the position.
- **"Higher pressure always shifts the equilibrium."** Only if it changes the concentrations of reacting gases, and only if the numbers of gas molecules on the two sides differ.
- **"Heating always shifts to the right."** Heating favours the endothermic direction, which may be the reverse reaction.
- **"A catalyst increases the yield."** It gets you to equilibrium faster but does not change how much product is present at equilibrium.
- **"Darker colour after compression proves the system shifted towards the coloured gas."** The concentration jump from compression can darken the colour even when the shift is the other way (Worked example 2).

## Where this leads

Le Châtelier's principle tells you the direction of a shift but not why it must go that way, or by how much. In [Topic 7.10, Reaction Quotient and Le Châtelier's Principle](/advanced-course-resources/chemistry/7-10-reaction-quotient-le-ch-teliers-study-guide/), you will compare the reaction quotient Q with K to prove each prediction with numbers. Previous topic: [Representations of Equilibrium](/advanced-course-resources/chemistry/7-8-representations-equilibrium-study-guide/). Now try the [practice questions](/advanced-course-resources/chemistry/7-9-introduction-le-ch-teliers-principle-practice/), then use the [revision notes](/advanced-course-resources/chemistry/7-9-introduction-le-ch-teliers-principle-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/7-9-introduction-le-ch-teliers-principle-checklist/).
