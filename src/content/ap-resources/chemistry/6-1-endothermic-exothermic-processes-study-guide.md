---
resourceId: "mb-ap-chem-6.1-study-guide"
title: "Endothermic and Exothermic Processes: Study Guide (Chemistry 6.1)"
description: "Decide whether a heating, phase change, reaction or dissolving process is endothermic or exothermic, and justify the claim from temperature data and particle interactions."
course: "chemistry"
unit: 6
topics: ["6.1"]
resourceType: "study-guide"
prerequisites:
  - "Breaking a chemical bond needs energy; forming one releases energy (Topic 2.2)"
  - "Intermolecular and interparticle forces (Topic 3.1)"
  - "A particle view of solutions and dissolving (Topics 3.7 to 3.10)"
prerequisiteResources: ["mb-ap-chem-5.11-study-guide"]
learningObjectives:
  - "Define the system and the surroundings for a process and say which way energy moves between them"
  - "Use a temperature rise or fall in the surroundings to classify a process as exothermic or endothermic"
  - "Classify heating and cooling, phase changes and chemical reactions as endothermic or exothermic, and explain why"
  - "Explain that energy can leave or enter a system as heat or as work, and that the total energy is conserved"
  - "Explain why dissolving can be exothermic or endothermic by comparing the interactions broken with the interactions formed"
skills: ["1", "6"]
studyMinutes: 35
difficulty: "foundation"
calculator: "none-needed"
calculatorNote: "Only temperature differences are found. ΔT = T(final) − T(initial); quote it to the same decimal place as the thermometer readings"
related: ["mb-ap-chem-6.1-revision-notes", "mb-ap-chem-6.1-practice", "mb-ap-chem-6.1-checklist"]
next: "mb-ap-chem-6.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Exothermic: the system loses energy to the surroundings. Endothermic: the system gains energy from the surroundings."
  - "The thermometer usually sits in the surroundings. If the water warms up, the process inside it is exothermic; if the water cools, the process is endothermic."
  - "Melting, boiling and sublimation are endothermic; freezing, condensing and deposition are exothermic."
  - "Energy lost by the system equals energy gained by the surroundings. It can move as heat or as work."
  - "Dissolving is exothermic when the new solute–solvent attractions are stronger overall than the attractions broken, and endothermic when they are weaker."
faqs:
  - question: "Does an endothermic reaction 'give out cold'?"
    answer: "No. Cold is not a substance and nothing called cold moves. An endothermic process takes energy in, so the water, air or skin that supplied the energy is left with less and its temperature falls."
  - question: "Can the same event be exothermic and endothermic?"
    answer: "Yes, if you change the system. Burning gas under a pan is exothermic for the gas and its products. The water in the pan gains that energy, so heating the water is endothermic for the water. Always say which system you mean."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## System, surroundings and the direction of energy

In [Topic 5.11](/advanced-course-resources/chemistry/5-11-catalysis-study-guide/) you finished studying how fast reactions go. Unit 6 asks a different question: where does the energy go when matter changes?

To answer it, you first split the world into two parts:

- The **system** is the part you are studying. In a reaction, the system is the reacting particles: the reactants turning into products.
- The **surroundings** are everything else that can exchange energy with the system. In a beaker reaction this is mainly the water the particles are dissolved in, plus the beaker and the air.

Energy is **conserved**. It is not made or destroyed, only moved. So any energy the system loses is gained by the surroundings, and any energy the system gains comes from the surroundings. This gives two labels:

- **Exothermic** ("exo" = out): the energy of the system **decreases**. Energy moves **out** of the system into the surroundings.
- **Endothermic** ("endo" = in): the energy of the system **increases**. Energy moves **in** from the surroundings.

A third case is possible but rare: the energy of the system stays the same. For example, two gases that barely interact can mix with almost no energy change.

<figure>
<svg viewBox="0 0 640 240" role="img" aria-labelledby="exo-endo-title exo-endo-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="exo-endo-title">Direction of energy transfer in exothermic and endothermic processes</title>
<desc id="exo-endo-desc">Two panels. Left panel, labelled exothermic: a box marked system, energy falls, sits inside a larger dashed box marked surroundings. Three arrows point outward from the system into the surroundings, labelled energy out as heat or work. The caption under the panel says the surroundings warm up. Right panel, labelled endothermic: the same boxes, but the three arrows point inward from the surroundings to the system, labelled energy in as heat or work, and the system box says energy rises. The caption under the panel says the surroundings cool down.</desc>
<defs><marker id="ee1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<text x="160" y="22" text-anchor="middle" font-size="16" font-weight="600" fill="#1d2b44">Exothermic</text>
<rect x="15" y="35" width="290" height="160" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="25" y="55" font-size="13" fill="#1d2b44">Surroundings</text>
<rect x="105" y="95" width="110" height="60" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="160" y="121" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">System</text>
<text x="160" y="141" text-anchor="middle" font-size="13" fill="#1d2b44">energy falls</text>
<path d="M217 125 H290" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ee1)"/>
<path d="M103 125 H30" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ee1)"/>
<path d="M160 93 V62" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ee1)"/>
<text x="160" y="182" text-anchor="middle" font-size="13" fill="#1d2b44">energy out (heat or work)</text>
<text x="160" y="222" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">Surroundings warm up</text>
<text x="480" y="22" text-anchor="middle" font-size="16" font-weight="600" fill="#1d2b44">Endothermic</text>
<rect x="335" y="35" width="290" height="160" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="345" y="55" font-size="13" fill="#1d2b44">Surroundings</text>
<rect x="425" y="95" width="110" height="60" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="480" y="121" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">System</text>
<text x="480" y="141" text-anchor="middle" font-size="13" fill="#1d2b44">energy rises</text>
<path d="M610 125 H540" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ee1)"/>
<path d="M350 125 H420" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ee1)"/>
<path d="M480 62 V90" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ee1)"/>
<text x="480" y="182" text-anchor="middle" font-size="13" fill="#1d2b44">energy in (heat or work)</text>
<text x="480" y="222" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">Surroundings cool down</text>
</svg>
<figcaption>Figure 1. The arrow direction carries the meaning: arrows leave the system in an exothermic process and enter it in an endothermic one. The dashed outline marks the surroundings.</figcaption>
</figure>

When you draw an energy-transfer diagram like Figure 1, put the arrows between the system and the surroundings and point them the way the energy moves.

## Heat and work: two ways energy moves

Energy crosses the boundary of a system in two ways:

- **Heat (q)** is energy transferred because of a temperature difference. Faster-moving particles collide with slower ones and pass on energy. (Topic 6.3 looks at these collisions in detail.)
- **Work (w)** is energy transferred when something is pushed through a distance. A reaction that makes a gas, for example, pushes back the air or a piston as the gas expands.

So the full statement of energy conservation for a reaction is:

- **Exothermic:** the energy lost by the reacting particles is gained by the surroundings, as heat flowing out of the system, work done by the system, or both.
- **Endothermic:** the system gains energy from the surroundings, as heat flowing into the system, work done on the system, or both.

In most reactions you meet, heat is by far the larger part. But work matters when gases are made or used up, and it explains why a temperature reading alone can miss part of the energy change.

*Background:* you need the idea that energy can move as heat or as work. The formal difference between enthalpy and internal energy that follows from it is not assessed in this course; from Topic 6.6 on, reactions are treated at constant pressure and the heat transferred is taken as the energy change.

## Reading temperature changes

You cannot see energy. You can see its effect on temperature. **Temperature changes show energy changes.**

The key step is to ask: *what is the thermometer touching?* In almost every experiment it is in the **surroundings**, usually the water around the reacting particles. You do not measure the temperature of "the reaction"; you measure what the reaction does to the water.

| Observation in the surroundings | Which way did energy move? | The process is |
|---|---|---|
| Water, solution or air gets **warmer** | out of the system, into the surroundings | **exothermic** |
| Water, solution or air gets **colder** | out of the surroundings, into the system | **endothermic** |
| No measurable change | no net transfer you can detect (or transfer as work) | neither, within the precision of the data |

Two checks before you write your claim:

1. **Name the system.** "The dissolving of the solid is exothermic" is a full claim. "It is exothermic" is not.
2. **Compare with the precision of the thermometer.** A change of 0.1 °C on a thermometer read to ±0.2 °C is not evidence of anything.

## Three kinds of process

Systems change their energy in three main ways. You need to classify all three.

### Heating and cooling a substance

If a substance is heated, its particles gain energy: **heating is endothermic for the substance being heated**. Cooling is exothermic for the substance being cooled. The energy came from (or went to) something else, which is the surroundings.

### Phase changes

To melt, boil or sublime, particles must be pulled apart against the attractions between them. That needs energy, so these changes are **endothermic**. The reverse changes let particles come together and attract each other, which releases energy, so they are **exothermic**.

| Endothermic (energy in) | Exothermic (energy out) |
|---|---|
| melting (solid → liquid) | freezing (liquid → solid) |
| vaporising or boiling (liquid → gas) | condensing (gas → liquid) |
| sublimation (solid → gas) | deposition (gas → solid) |

This is why water evaporating from your skin makes you feel cool: the evaporating water takes energy from your skin. It is also why steam that condenses on your hand can burn: condensing releases energy into your skin.

### Chemical reactions

In a reaction, bonds in the reactants break and new bonds in the products form.

- **Breaking a bond always needs an energy input.**
- **Forming a bond always releases energy.**

Whether the whole reaction is exothermic or endothermic depends on the balance. If the bonds formed release more energy than the bonds broken need, the reaction is exothermic. Familiar exothermic reactions include burning fuels, neutralising an acid with a base and the slow rusting of iron in some hand warmers. Familiar endothermic reactions include photosynthesis and the decomposition of calcium carbonate, which only continues while you keep heating it. (Topic 6.7 turns this bond balance into numbers.)

## Dissolving: either sign is possible

Making a solution is a good test of the "bonds broken, bonds formed" idea, except that most of the interactions are intermolecular or between ions and molecules rather than covalent bonds. Picture three steps:

1. **Separate the solute particles** from each other (ions from the lattice, or molecules from each other). Attractions are overcome, so this needs energy.
2. **Separate some solvent molecules** to make space for the solute. Again attractions are overcome, so this needs energy.
3. **Let solute and solvent particles attract each other** (for example, ion–dipole attractions between ions and water). New attractions form, so this releases energy.

The overall sign depends on the **relative strengths of the interactions before and after**:

- If the new solute–solvent attractions are **stronger** overall than the solute–solute and solvent–solvent attractions that were broken, energy is released: dissolving is **exothermic** and the solution warms. Calcium chloride dissolving in water behaves like this, which is why it is used in some heat packs.
- If the new attractions are **weaker** overall than the ones broken, energy must be taken in: dissolving is **endothermic** and the solution cools. Ammonium nitrate behaves like this, which is why it is used in instant cold packs.

An endothermic solid can still dissolve completely. Energy is not the only factor that decides whether a process happens; you will meet the other factor, entropy, in Unit 9.

## Worked example 1: classifying from temperature data

**Question.** A student adds 2.0 g of three fictional solids, P, Q and R, to separate insulated cups, each containing 50.0 g of water. The thermometer reads to ±0.2 °C. Classify each dissolving process and justify your answer.

| Solid | Initial temperature (°C) | Final temperature (°C) |
|---|---|---|
| P | 21.4 | 29.8 |
| Q | 21.5 | 16.2 |
| R | 21.3 | 21.4 |

1. **Find each temperature change**, ΔT = T(final) − T(initial).
   - P: 29.8 − 21.4 = **+8.4 °C**
   - Q: 16.2 − 21.5 = **−5.3 °C**
   - R: 21.4 − 21.3 = **+0.1 °C**
2. **Name the system and surroundings.** The system is the solid dissolving (solute particles becoming surrounded by water). The surroundings are mainly the water in the cup.
3. **Link the sign of ΔT to the direction of energy transfer.**
   - P: the water warmed, so energy moved from the dissolving particles into the water. Dissolving P is **exothermic**.
   - Q: the water cooled, so energy moved from the water into the dissolving particles. Dissolving Q is **endothermic**.
   - R: +0.1 °C is smaller than the ±0.2 °C precision of the thermometer. The data show **no measurable energy change**; you cannot classify R from this experiment.

**Interpretation.** For P, the new solute–water attractions released more energy than was needed to separate the particles. For Q, the reverse is true.

## Worked example 2: the same event from two systems

**Question.** A gas burner heats a pan of water. Some steam rises from the pan and condenses on a cold window above it, which becomes slightly warmer. Classify each of the following as endothermic or exothermic: (a) the burning of the gas; (b) the water in the pan; (c) the steam on the window.

1. **(a) System: the gas and oxygen reacting.** Combustion releases energy into the pan and the air. The system loses energy: **exothermic**.
2. **(b) System: the water in the pan.** It gains energy from the flame. Its temperature rises and some of it vaporises. Heating and vaporising are both **endothermic** for the water.
3. **(c) System: the steam.** It changes from gas to liquid and the window gets warmer, so energy moves from the steam to the window: **exothermic**.

**Point to notice.** Parts (a) and (b) describe one energy transfer seen from two sides. The flame's loss is the water's gain. Whether you call it endothermic or exothermic depends only on which system you chose.

## Worked example 3: evaluating a claim about dissolving

**Question.** A fictional salt, LX, dissolves in water and the temperature of the solution falls. A student claims: "Because the solution got colder, no attractions formed when LX dissolved." Evaluate the claim.

1. **Classify.** The temperature of the water fell, so energy moved into the dissolving system: the process is endothermic overall.
2. **Separate the steps.** Endothermic overall means the energy needed to separate the ions and to separate water molecules was **greater** than the energy released when ion–water attractions formed.
3. **Judge the claim.** The claim is **incorrect**. Ion–water attractions did form, and they did release energy. They were just weaker overall than the attractions that had to be broken, so the net change was an energy gain by the system.

**Answer.** The cooling shows only that the energy released by forming new attractions was smaller than the energy used to break the old ones, not that no attractions formed.

## Common misconceptions

- **"An endothermic reaction gives out cold."** Nothing called cold moves. Energy moves *into* the system, so the surroundings are left with less and their temperature falls.
- **"The thermometer measures the temperature of the reaction."** It measures the surroundings. A rising reading means the reacting system is losing energy.
- **"Breaking bonds releases energy."** Breaking a bond always needs energy. Energy is released when bonds form.
- **"Exothermic reactions do not need any energy to start."** Many need a spark or a flame to begin. That starting energy is the activation energy from Topic 5.6; it does not change the overall sign.
- **"Exothermic reactions are fast."** Energy change and speed are separate ideas. Rusting is exothermic but slow.
- **"Dissolving always takes in energy, because attractions are broken."** Attractions also form. The sign depends on which set is stronger overall.
- **"Endothermic and exothermic are fixed labels for an event."** They describe a chosen system. Name it.
- **"No temperature change means no energy change."** Energy can also leave or enter as work, and a small change can hide inside the uncertainty of the thermometer.

## Where this leads

Next, in [Topic 6.2](/advanced-course-resources/chemistry/6-2-energy-diagrams-study-guide/), you will show the endothermic or exothermic nature of a process on an energy diagram. Later topics in this unit put numbers on the energy: heat transfer and calorimetry (Topics 6.3 and 6.4), phase changes (Topic 6.5) and enthalpy of reaction (Topics 6.6 to 6.9). Try the [practice questions](/advanced-course-resources/chemistry/6-1-endothermic-exothermic-processes-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/6-1-endothermic-exothermic-processes-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/6-1-endothermic-exothermic-processes-checklist/) to consolidate.
