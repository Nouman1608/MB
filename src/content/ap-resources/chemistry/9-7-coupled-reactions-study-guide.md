---
resourceId: "mb-ap-chem-9.7-study-guide"
title: "Coupled Reactions: Study Guide (Chemistry 9.7)"
description: "Learn how electrical energy, light or a linked favourable reaction can make a thermodynamically unfavourable process happen, and how to add coupled reactions and their ΔG° values."
course: "chemistry"
unit: 9
topics: ["9.7"]
resourceType: "study-guide"
prerequisites:
  - "Gibbs free energy and thermodynamic favourability, ΔG° = ΔH° − TΔS° (Topic 9.3)"
  - "The link between ΔG° and K (Topic 9.5)"
  - "Adding chemical equations and their energy changes, as in Hess's law (Topic 6.9)"
prerequisiteResources: ["mb-ap-chem-9.6-study-guide"]
learningObjectives:
  - "Explain how an outside energy source, such as electricity or light, can make a thermodynamically unfavourable process take place"
  - "Identify the shared (common) intermediate that links two coupled reactions"
  - "Add coupled reactions and their ΔG° values to find the overall reaction and judge whether it is favourable"
  - "Explain why a favourable reaction must be chemically linked to an unfavourable one to drive it"
  - "Relate the equilibrium constant of a coupled reaction to the constants of its steps"
skills: ["4", "5", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "R = 8.314 J mol⁻¹ K⁻¹; convert kJ to J before using K = e^(−ΔG°/RT); keep unrounded values until the final step"
related: ["mb-ap-chem-9.7-revision-notes", "mb-ap-chem-9.7-practice", "mb-ap-chem-9.7-checklist"]
next: "mb-ap-chem-9.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A process with ΔG° > 0 is thermodynamically unfavourable, but it can still be made to happen if energy is supplied."
  - "The energy can come from outside the system (electrical energy in electrolysis or battery charging, light in photosynthesis) or from a favourable reaction coupled to it."
  - "Coupled reactions share at least one common intermediate: it is made in one step and used in the other, so it cancels when you add the equations."
  - "Add the equations and add their ΔG° values. The coupling works only if the overall ΔG° is negative."
  - "Because ΔG° values add, equilibrium constants multiply: K(overall) = K₁ × K₂."
faqs:
  - question: "Does coupling change the ΔG° of the unfavourable step?"
    answer: "No. The unfavourable step keeps its own positive ΔG°. Coupling creates a new overall reaction, and it is the overall reaction that has a negative ΔG°."
  - question: "Is a coupled reaction the same as using a catalyst?"
    answer: "No. A catalyst lowers the activation energy and speeds up a reaction, but it cannot change ΔG° or make an unfavourable reaction favourable. Coupling changes which overall reaction takes place."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Unfavourable does not mean impossible

Earlier in this unit you used the sign of ΔG° to decide whether a process is **thermodynamically favourable**. If ΔG° < 0, the process tends to go forward on its own and K > 1. If ΔG° > 0, the process is **thermodynamically unfavourable**: left to itself it does not make much product, and K < 1.

Many useful processes are unfavourable. Splitting water into hydrogen and oxygen, making glucose from carbon dioxide, recharging a phone battery and extracting many metals from their ores all have ΔG° > 0. Yet they happen every day. The reason is that someone, or something, **supplies the energy**.

There are two ways to do this:

1. **Use an outside energy source.** Energy from outside the chemical system, such as electrical energy or light, is converted into the chemical energy of the products.
2. **Couple the reaction to a favourable one.** A second reaction with a large negative ΔG° is chemically linked to the unfavourable one, so that the two together make an overall reaction with ΔG° < 0.

Neither method breaks any rule of thermodynamics. The unfavourable process still has its positive ΔG°. What changes is that it is now part of a bigger process whose total free-energy change is negative.

## Driving a process with an outside energy source

### Electrical energy

In an **electrolytic cell**, a power supply pushes electrons through a reaction that would not happen by itself. Decomposing water is an example:

2H₂O(l) → 2H₂(g) + O₂(g)  ΔG° = +474.3 kJ mol⁻¹ (per mole of reaction as written)

This value is twice the standard free energy of formation of liquid water (−237.1 kJ mol⁻¹), with the sign reversed. So the power supply must deliver **at least 237.1 kJ of electrical energy for every mole of H₂ made** under standard conditions. In practice more is needed, because some energy is always lost as heat.

**Charging a battery** works the same way. When a battery powers a phone, a favourable redox reaction runs and releases electrical energy. When you plug the phone in, the charger supplies electrical energy and forces the *reverse* reaction, which is unfavourable. You will look closely at the cells involved in [Topic 9.8](/advanced-course-resources/chemistry/9-8-galvanic-voltaic-electrolytic-cells-study-guide/).

### Light energy

In **photosynthesis**, plants convert carbon dioxide and water into glucose and oxygen:

6CO₂(g) + 6H₂O(l) → C₆H₁₂O₆(s) + 6O₂(g)  ΔG° ≈ +2880 kJ mol⁻¹

This value comes from standard free energies of formation (glucose −910.6, CO₂ −394.4 and liquid water −237.1 kJ mol⁻¹). A positive value this large means the reaction is extremely unfavourable. Plants drive it with **light**: pigments absorb photons, and the energy of the photons is stored in the chemical bonds of glucose. You only need the overall idea here. The many separate steps of photosynthesis are biology, not chemistry assessment.

## Coupled reactions and the common intermediate

Sometimes no outside energy is available, but a favourable reaction is. Can the favourable reaction "pay for" the unfavourable one? Yes, but only if the two reactions are **coupled**.

Coupled reactions **share at least one common intermediate**: a species that is a product of one reaction and a reactant in the other. Because it is made and then used up, it does not appear in the overall equation. This shared species is the physical link between the two reactions. Without it, the favourable reaction simply runs on its own and releases its energy as heat to the surroundings.

To analyse a coupled system:

1. Write both equations. Reverse or multiply one if needed so that the common intermediate cancels. (Reversing changes the sign of ΔG°; multiplying by n multiplies ΔG° by n.)
2. Add the equations and cancel species that appear on both sides.
3. Add the ΔG° values: **ΔG°(overall) = ΔG°₁ + ΔG°₂**.
4. If ΔG°(overall) < 0, the overall reaction is favourable and the desired product can form.

This is the same bookkeeping you used for enthalpy in Hess's law. Free energy is a state function too, so free-energy changes add in the same way.

<figure>
<svg viewBox="0 0 640 305" role="img" aria-labelledby="couple-title couple-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="couple-title">Free-energy ladder for two coupled reactions</title>
<desc id="couple-desc">A vertical free-energy axis. The starting level is the reactants. Step 1, the unfavourable reaction, rises by plus 98.6 kilojoules per mole to a higher level. Step 2, the favourable reaction, falls by 300.1 kilojoules per mole from that level to the final level. The final level is 201.5 kilojoules per mole below the start, shown by a dashed arrow labelled overall.</desc>
<line x1="60" y1="20" x2="60" y2="295" stroke="#1d2b44" stroke-width="2"/>
<text x="30" y="150" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 30 150)">Free energy, G</text>
<line x1="90" y1="150" x2="210" y2="150" stroke="#1d2b44" stroke-width="3"/>
<text x="150" y="140" text-anchor="middle" font-size="12" fill="#1d2b44">MS + O₂</text>
<line x1="250" y1="91" x2="370" y2="91" stroke="#1d2b44" stroke-width="3"/>
<text x="310" y="81" text-anchor="middle" font-size="12" fill="#1d2b44">M + S + O₂</text>
<line x1="410" y1="271" x2="530" y2="271" stroke="#1d2b44" stroke-width="3"/>
<text x="470" y="291" text-anchor="middle" font-size="12" fill="#1d2b44">M + SO₂</text>
<path d="M230 150 V97" stroke="#1d2b44" stroke-width="2" marker-end="url(#cr1)"/>
<text x="236" y="125" font-size="12" fill="#1d2b44">Step 1</text>
<text x="236" y="140" font-size="12" fill="#1d2b44">+98.6</text>
<path d="M390 91 V264" stroke="#1d2b44" stroke-width="2" marker-end="url(#cr1)"/>
<text x="396" y="160" font-size="12" fill="#1d2b44">Step 2</text>
<text x="396" y="175" font-size="12" fill="#1d2b44">−300.1</text>
<path d="M150 156 V264" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#cr1)"/>
<text x="158" y="215" font-size="12" fill="#1d2b44">Overall −201.5</text>
<text x="560" y="64" font-size="11" fill="#1d2b44">(kJ mol⁻¹)</text>
<defs><marker id="cr1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. The unfavourable step goes uphill; the favourable step goes further downhill. The overall change (dashed arrow) is the sum and is downhill, so the overall reaction is favourable. Levels are drawn to scale, with values from Worked example 1.</figcaption>
</figure>

### What happens to K?

Since K = e^(−ΔG°/RT), adding ΔG° values means **multiplying equilibrium constants**:

K(overall) = K₁ × K₂

A tiny K₁ (unfavourable step) multiplied by a huge K₂ (favourable step) can give a large K(overall). This matches the rule from Unit 7 that adding two equations multiplies their equilibrium constants.

## Coupling in living things: ATP

Cells build large molecules, move ions against concentration gradients and contract muscles. Many of these processes are unfavourable. Cells drive them by coupling them to the hydrolysis of **ATP** (adenosine triphosphate) to **ADP** (adenosine diphosphate) and inorganic phosphate, written Pᵢ:

ATP + H₂O → ADP + Pᵢ  ΔG° ≈ −30 kJ mol⁻¹

Reported values for this reaction under standard conditions vary between about −28 and −34 kJ mol⁻¹, depending on the conditions chosen; −30.5 kJ mol⁻¹ is a commonly quoted value and is the one used in the examples on these pages.

In a typical coupling, ATP passes its end phosphate group to another molecule. The phosphate group (or the water and Pᵢ when you write the steps separately) is the common intermediate that links the two reactions. The cell's enzymes make sure the two steps happen together, on the same molecules, rather than separately.

## Worked example 1: extracting a metal from its sulfide

*The values for the metal sulfide are invented for this example; the value for SO₂ is real.*

**Question.** A metal M occurs as the sulfide ore MS. Heating the ore alone gives very little metal:

(1) MS(s) → M(s) + S(s)  ΔG°₁ = +98.6 kJ mol⁻¹

An engineer suggests roasting the ore in air instead, so that the sulfur burns:

(2) S(s) + O₂(g) → SO₂(g)  ΔG°₂ = −300.1 kJ mol⁻¹

(a) Identify the common intermediate. (b) Write the overall equation and find ΔG°(overall). (c) Find K₁, K₂ and K(overall) at 298 K and comment.

1. **Common intermediate.** S(s) is a product of reaction (1) and a reactant in reaction (2).
2. **Add the equations.** MS(s) + S(s) + O₂(g) → M(s) + S(s) + SO₂(g). Cancel S(s):

   MS(s) + O₂(g) → M(s) + SO₂(g)

3. **Add the ΔG° values.** ΔG°(overall) = +98.6 + (−300.1) = **−201.5 kJ mol⁻¹**. The overall reaction is thermodynamically favourable.
4. **Equilibrium constants at 298.15 K.** RT = 8.314 × 298.15 = 2479 J mol⁻¹.
   - K₁ = e^(−98 600 / 2479) = **5.3 × 10⁻¹⁸**
   - K₂ = e^(+300 100 / 2479) = **3.8 × 10⁵²**
   - K(overall) = e^(+201 500 / 2479) = **2.0 × 10³⁵**, which equals K₁ × K₂.

**Interpretation.** On its own, step 1 makes almost no metal (K₁ is tiny). Coupled to the burning of sulfur, the overall reaction lies very far towards the metal. The positive ΔG°₁ has not changed; it is outweighed by the larger negative ΔG°₂. (Thermodynamics tells us nothing about the rate: the ore still has to be heated so that the reaction goes at a useful speed.)

## Worked example 2: how much ATP does a cell need?

*The value for the phosphorylation step is invented for this example.*

**Question.** A cell needs to attach a phosphate group to a molecule B:

(1) B + Pᵢ → B–P + H₂O  ΔG°₁ = +19.0 kJ mol⁻¹

(a) Show that coupling with ATP hydrolysis (ΔG° = −30.5 kJ mol⁻¹) makes the overall process favourable. (b) A different reaction in the same cell has ΔG° = +45.0 kJ mol⁻¹. What is the smallest whole number of ATP molecules that must be hydrolysed for each reaction event?

**(a)**

1. Write the two reactions:
   - B + Pᵢ → B–P + H₂O  +19.0 kJ mol⁻¹
   - ATP + H₂O → ADP + Pᵢ  −30.5 kJ mol⁻¹
2. Common intermediates: Pᵢ and H₂O each appear on opposite sides, so they cancel.
3. Overall: **B + ATP → B–P + ADP**.
4. ΔG°(overall) = +19.0 + (−30.5) = **−11.5 kJ mol⁻¹**. Negative, so the coupled process is favourable.

**(b)**

1. With one ATP: +45.0 + (−30.5) = +14.5 kJ mol⁻¹. Still positive, so not enough.
2. With two ATP: +45.0 + 2(−30.5) = **−16.0 kJ mol⁻¹**. Negative.

**Answer.** At least **2 ATP** per reaction event. Multiplying the ATP equation by 2 multiplies its ΔG° by 2.

**Check.** The overall ΔG° in each case is less negative than ΔG° for ATP hydrolysis alone. That makes sense: part of the free energy released by ATP is used to "lift" the unfavourable step.

## Worked example 3: the minimum light energy for photosynthesis

**Question.** Photosynthesis has ΔG° ≈ +2879 kJ per mole of glucose. Chlorophyll absorbs red light of wavelength 680 nm. What is the smallest amount of 680 nm photons, in moles, that could supply this energy? (h = 6.626 × 10⁻³⁴ J s, c = 2.998 × 10⁸ m s⁻¹, N_A = 6.022 × 10²³ mol⁻¹.)

1. Energy of one mole of photons: E = N_A × hc / λ = 6.022 × 10²³ × (6.626 × 10⁻³⁴ × 2.998 × 10⁸) / (680 × 10⁻⁹ m) = 1.759 × 10⁵ J mol⁻¹ = **175.9 kJ mol⁻¹**.
2. Moles of photons needed: 2879 kJ ÷ 175.9 kJ mol⁻¹ = **16.4 mol of photons per mole of glucose** (about 9.9 × 10²⁴ photons).
3. Units check: kJ ÷ (kJ per mol of photons) leaves mol of photons.

**Interpretation.** This is a lower limit. Real plants absorb more light than this, because no energy conversion is 100% efficient. The calculation shows that light really can supply the free energy that the unfavourable reaction needs.

## Common misconceptions

- **"Coupling makes the unfavourable step favourable."** No. Each step keeps its own ΔG°. Only the *overall* reaction has ΔG° < 0.
- **"Any favourable reaction can drive any unfavourable one."** Only if they are chemically linked by a common intermediate (or the energy is converted to useful work, as in a cell). Burning fuel in the next beaker just heats the room.
- **"A catalyst can drive an unfavourable reaction."** A catalyst speeds up a reaction in both directions. It does not change ΔG° or K.
- **"Add the K values."** ΔG° values add; K values multiply.
- **Forgetting to reverse the sign.** If you reverse an equation to make the intermediate cancel, change the sign of its ΔG°. If you double it, double ΔG°.
- **"Electrolysis or photosynthesis breaks thermodynamics."** No. The outside energy source loses more free energy than the products gain, so the total process is still favourable.
- **"A negative overall ΔG° means the reaction is fast."** Thermodynamics says whether products are favoured, not how quickly they form. Kinetics (Unit 5) decides the rate.

## Where this leads

Electrical energy is the outside source in electrolytic cells and in battery charging. Next, [Topic 9.8](/advanced-course-resources/chemistry/9-8-galvanic-voltaic-electrolytic-cells-study-guide/) compares galvanic cells, which turn a favourable reaction into electrical energy, with electrolytic cells, which use electrical energy to drive an unfavourable one. Topic 9.9 then links cell potential to ΔG°. Try the [practice questions](/advanced-course-resources/chemistry/9-7-coupled-reactions-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/9-7-coupled-reactions-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/9-7-coupled-reactions-checklist/) to consolidate.
