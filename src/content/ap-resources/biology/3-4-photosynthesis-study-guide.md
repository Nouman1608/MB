---
resourceId: "mb-ap-bio-3.4-study-guide"
title: "Photosynthesis: Study Guide (Biology 3.4)"
description: "Learn how chloroplasts capture light: the stroma, thylakoids and grana, the two photosystems, water splitting, the proton gradient and ATP synthase, NADPH, the Calvin cycle and photosynthesis's prokaryotic origins."
course: "biology"
unit: 3
topics: ["3.4"]
resourceType: "study-guide"
prerequisites:
  - "Energy coupling, ATP and stepwise pathways (Topic 3.3)"
  - "Membranes, concentration gradients and the structure of chloroplasts (Unit 2)"
  - "Moles and molar mass for simple equation calculations"
prerequisiteResources: ["mb-ap-bio-3.3-study-guide"]
learningObjectives:
  - "Write the overall equation for photosynthesis and use it for mass calculations"
  - "Locate the light reactions and the Calvin cycle in the chloroplast and link each structure to its job"
  - "Trace electrons from water through photosystem II, the electron transport chain and photosystem I to NADPH"
  - "Explain how the proton gradient across the thylakoid membrane drives ATP synthesis by ATP synthase"
  - "Explain how ATP and NADPH from the light reactions power carbohydrate production in the Calvin cycle"
  - "Use evidence to argue that photosynthesis began in prokaryotes and oxygenated the atmosphere"
skills: ["1", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Molar masses (g mol⁻¹): CO₂ 44.01, H₂O 18.02, O₂ 32.00, C₆H₁₂O₆ 180.16. Give answers to 3 significant figures"
related: ["mb-ap-bio-3.4-revision-notes", "mb-ap-bio-3.4-practice", "mb-ap-bio-3.4-checklist"]
next: "mb-ap-bio-3.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Photosynthesis uses CO₂, H₂O and light energy to make carbohydrate and O₂: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂."
  - "The light reactions happen in the thylakoid membranes (grana); the Calvin cycle happens in the stroma."
  - "Light boosts electrons in photosystems II and I. Water is split to replace electrons lost from photosystem II, releasing O₂."
  - "Electron transport pumps H⁺ into the thylakoid space. H⁺ flowing back through ATP synthase makes ATP (photophosphorylation). Photosystem I's electrons reduce NADP⁺ to NADPH."
  - "ATP and NADPH power the Calvin cycle, which builds carbohydrate from CO₂. Photosynthesis first evolved in prokaryotes; cyanobacteria oxygenated the atmosphere."
faqs:
  - question: "Do I need to learn the steps of the Calvin cycle?"
    answer: "No. You need to know where it happens, what goes in (CO₂, ATP, NADPH) and what comes out (carbohydrate, ADP, Pᵢ, NADP⁺). The individual steps, the molecules' structures and the enzyme names are outside the course. The one enzyme you must know is ATP synthase."
  - question: "Where does the oxygen released by plants come from?"
    answer: "From water. When water is split to replace the electrons lost from photosystem II, its oxygen atoms are released as O₂. The oxygen atoms in CO₂ end up in the sugar and in water."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Capturing light energy

In [Topic 3.3](/advanced-course-resources/biology/3-3-cellular-energy-study-guide/) you saw that every living system needs an energy input. For almost all life on Earth, that energy first enters through **photosynthesis**. Plants, algae and cyanobacteria capture energy from sunlight and store it in the chemical bonds of carbohydrates.

The overall equation is:

**6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂** (light energy absorbed by chlorophyll)

- **Reactants:** carbon dioxide, water and light energy.
- **Products:** carbohydrate (written here as glucose) and oxygen.

The sugars can be used straight away, broken down in respiration to make ATP, or built into larger molecules. Plants store them as starch and use them to make cellulose, proteins and lipids. Every animal that eats a plant, and every animal that eats that animal, depends on this stored energy.

The equation is a summary. It hides two linked sets of reactions:

1. **The light reactions** capture light energy and use it to make **ATP** and **NADPH**. They split water and release O₂.
2. **The Calvin cycle** uses that ATP and NADPH to build carbohydrate from CO₂.

## Where photosynthesis came from

Photosynthesis **first evolved in prokaryotes**, long before plants existed.

- Rock layers show that free oxygen in Earth's atmosphere rose sharply about **2.4 billion years ago**. This is known as the Great Oxidation Event.
- The evidence points to **cyanobacteria**, prokaryotes that release O₂ in photosynthesis, as the cause. The oldest fossils that most scientists accept as eukaryotes are much younger than this rise in oxygen, so eukaryotes cannot have produced it.
- Eukaryotic photosynthesis was **built on the prokaryotic pathway**. A chloroplast is descended from a cyanobacterium that was taken in by an early eukaryotic cell (endosymbiosis, Unit 2). Chloroplasts still have a double membrane, their own circular DNA and bacteria-like ribosomes, and they use two photosystems, just as cyanobacteria do.

So the chemistry happening in a leaf today is a version of the chemistry that changed the planet's atmosphere.

## Inside the chloroplast

The structure of the chloroplast matches its two jobs.

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="chl-title chl-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="chl-title">Structure of a chloroplast</title>
<desc id="chl-desc">A cut-open oval chloroplast drawn with two outlines, labelled outer membrane and inner membrane. The space inside the inner membrane is labelled stroma, fluid, site of the Calvin cycle. Inside are three stacks of flat discs. One disc is labelled thylakoid, and its membrane is labelled thylakoid membrane, containing photosystems, electron transport chain and ATP synthase, site of the light reactions. One stack is labelled granum, a stack of thylakoids. The inside of a disc is labelled thylakoid space. Thin lines join neighbouring stacks.</desc>
<rect x="0" y="0" width="640" height="330" fill="#ffffff"/>
<ellipse cx="300" cy="165" rx="250" ry="120" fill="#ffffff" stroke="#1d2b44" stroke-width="3"/>
<ellipse cx="300" cy="165" rx="238" ry="108" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<rect x="130" y="120" width="70" height="14" rx="7"/><rect x="130" y="138" width="70" height="14" rx="7"/><rect x="130" y="156" width="70" height="14" rx="7"/><rect x="130" y="174" width="70" height="14" rx="7"/><rect x="130" y="192" width="70" height="14" rx="7"/>
<rect x="265" y="129" width="70" height="14" rx="7"/><rect x="265" y="147" width="70" height="14" rx="7"/><rect x="265" y="165" width="70" height="14" rx="7"/><rect x="265" y="183" width="70" height="14" rx="7"/>
<rect x="400" y="120" width="70" height="14" rx="7"/><rect x="400" y="138" width="70" height="14" rx="7"/><rect x="400" y="156" width="70" height="14" rx="7"/><rect x="400" y="174" width="70" height="14" rx="7"/><rect x="400" y="192" width="70" height="14" rx="7"/>
</g>
<line x1="200" y1="163" x2="265" y2="172" stroke="#1d2b44" stroke-width="2"/>
<line x1="335" y1="172" x2="400" y2="163" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="122" y1="62" x2="158" y2="66"/><line x1="515" y1="56" x2="500" y2="104"/><line x1="330" y1="278" x2="330" y2="235"/><line x1="165" y1="206" x2="80" y2="288"/><line x1="470" y1="199" x2="520" y2="286"/><line x1="320" y1="28" x2="300" y2="136"/>
</g>
<text x="20" y="66" font-size="13" fill="#1d2b44">Outer membrane</text>
<text x="490" y="50" font-size="13" fill="#1d2b44">Inner membrane</text>
<text x="330" y="292" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">Stroma (fluid):</text>
<text x="330" y="308" text-anchor="middle" font-size="12" fill="#1d2b44">site of the Calvin cycle</text>
<text x="20" y="300" font-size="13" font-weight="700" fill="#1d2b44">Granum</text>
<text x="20" y="316" font-size="12" fill="#1d2b44">(stack of thylakoids)</text>
<text x="470" y="300" font-size="13" font-weight="700" fill="#1d2b44">Thylakoid membrane:</text>
<text x="470" y="316" font-size="12" fill="#1d2b44">site of light reactions</text>
<text x="330" y="22" font-size="12" fill="#1d2b44">Thylakoid space (inside each disc)</text>
</svg>
<figcaption>Figure 1. A chloroplast (not to scale). Stacked thylakoids form grana, where the light reactions happen in the thylakoid membranes. The surrounding fluid, the stroma, is where the Calvin cycle builds carbohydrate.</figcaption>
</figure>

| Structure | What it is | Its job |
|---|---|---|
| **Stroma** | fluid inside the inner membrane, outside the thylakoids | site of the **Calvin cycle** (carbon fixation) |
| **Thylakoid** | flattened sac of membrane | its membrane holds chlorophyll in **two photosystems**, plus electron transport proteins and ATP synthase |
| **Thylakoid space** | the inside of a thylakoid | collects H⁺ ions to build a proton gradient |
| **Granum** (plural grana) | a stack of thylakoids | site of the **light reactions**; stacking packs a large membrane area into a small space |

## The light reactions

The light reactions are a chain of coordinated steps across the thylakoid membrane. Follow Figure 2 as you read.

<figure>
<svg viewBox="0 0 680 360" role="img" aria-labelledby="lr-title lr-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lr-title">The light reactions in the thylakoid membrane</title>
<desc id="lr-desc">A horizontal band represents the thylakoid membrane. Above it is the stroma, labelled low hydrogen ion concentration. Below it is the thylakoid space, labelled high hydrogen ion concentration. In the membrane, from left to right: photosystem II, the electron transport chain, photosystem I and ATP synthase. Wavy arrows labelled light point into photosystem II and photosystem I. Below photosystem II, water is split into hydrogen ions and oxygen, and electrons pass to photosystem II. A dashed electron path runs from photosystem II through the electron transport chain to photosystem I and then up into the stroma, where NADP plus and a hydrogen ion become NADPH. A solid arrow shows hydrogen ions pumped by the electron transport chain from the stroma into the thylakoid space. Another solid arrow shows hydrogen ions flowing from the thylakoid space through ATP synthase into the stroma, where ADP and inorganic phosphate become ATP.</desc>
<rect x="0" y="0" width="680" height="360" fill="#ffffff"/>
<defs><marker id="lr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<text x="20" y="24" font-size="13" font-weight="700" fill="#1d2b44">Stroma: low [H⁺]</text>
<text x="20" y="348" font-size="13" font-weight="700" fill="#1d2b44">Thylakoid space: high [H⁺]</text>
<rect x="0" y="155" width="680" height="50" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="440" y="222" font-size="11" fill="#1d2b44">thylakoid membrane</text>
<rect x="60" y="140" width="80" height="80" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="100" y="185" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">PS II</text>
<rect x="210" y="145" width="70" height="70" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="245" y="185" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">ETC</text>
<rect x="350" y="140" width="80" height="80" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="390" y="185" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">PS I</text>
<rect x="565" y="130" width="70" height="100" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="600" y="177" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2b44">ATP</text>
<text x="600" y="192" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2b44">synthase</text>
<path d="M70,50 q6,-8 12,0 t12,0 t12,0 t12,0" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="118" y1="56" x2="105" y2="135" stroke="#1d2b44" stroke-width="2" marker-end="url(#lr-arrow)"/>
<text x="70" y="40" font-size="12" fill="#1d2b44">light</text>
<path d="M360,50 q6,-8 12,0 t12,0 t12,0 t12,0" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="408" y1="56" x2="395" y2="135" stroke="#1d2b44" stroke-width="2" marker-end="url(#lr-arrow)"/>
<text x="360" y="40" font-size="12" fill="#1d2b44">light</text>
<text x="100" y="268" text-anchor="middle" font-size="13" fill="#1d2b44">2H₂O → 4H⁺ + O₂</text>
<text x="100" y="286" text-anchor="middle" font-size="12" fill="#1d2b44">(water split; e⁻ to PS II)</text>
<line x1="100" y1="252" x2="100" y2="225" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#lr-arrow)"/>
<line x1="140" y1="180" x2="207" y2="180" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#lr-arrow)"/>
<line x1="280" y1="180" x2="347" y2="180" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#lr-arrow)"/>
<line x1="430" y1="150" x2="470" y2="100" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#lr-arrow)"/>
<text x="440" y="95" font-size="12" fill="#1d2b44">NADP⁺ + H⁺ → NADPH</text>
<line x1="245" y1="80" x2="245" y2="290" stroke="#1d2b44" stroke-width="3" marker-end="url(#lr-arrow)"/>
<text x="255" y="76" font-size="12" fill="#1d2b44">H⁺ pumped in</text>
<line x1="600" y1="300" x2="600" y2="82" stroke="#1d2b44" stroke-width="3" marker-end="url(#lr-arrow)"/>
<text x="590" y="316" text-anchor="end" font-size="12" fill="#1d2b44">H⁺ flows out</text>
<text x="600" y="70" text-anchor="middle" font-size="13" fill="#1d2b44">ADP + Pᵢ → ATP</text>
<line x1="300" y1="260" x2="340" y2="260" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="346" y="264" font-size="12" fill="#1d2b44">dashed: electron path</text>
<line x1="300" y1="282" x2="340" y2="282" stroke="#1d2b44" stroke-width="3"/>
<text x="346" y="286" font-size="12" fill="#1d2b44">solid: H⁺ movement</text>
</svg>
<figcaption>Figure 2. The light reactions (simplified). Electrons (dashed path) go from water to photosystem II, through the electron transport chain to photosystem I, then to NADP⁺. The resulting H⁺ gradient (solid arrows) drives ATP synthase.</figcaption>
</figure>

1. **Light boosts electrons in photosystem II.** Chlorophyll molecules absorb light energy. The energy raises electrons to a higher energy level, and they leave the photosystem.
2. **Water is split.** To replace the lost electrons, photosystem II takes electrons from water. Water splits into electrons, H⁺ ions and oxygen. The H⁺ ions stay inside the thylakoid space. The oxygen is released as **O₂**, a by-product.
3. **Electrons pass along the electron transport chain (ETC).** The ETC is a series of proteins in the thylakoid membrane that connects photosystem II to photosystem I. Electrons move from carrier to carrier in **oxidation–reduction (redox) reactions**: each carrier is reduced when it gains electrons and oxidised when it passes them on. At each step the electrons lose a little energy. Some of that energy is used to **pump H⁺** from the stroma into the thylakoid space. (You do not need the names of the carriers.)
4. **Light boosts the electrons again in photosystem I.** The electrons arrive with less energy than they started with. Light absorbed by photosystem I raises them to a high energy level once more.
5. **NADP⁺ is reduced to NADPH.** The electrons from photosystem I are passed to **NADP⁺**, which also picks up H⁺, forming **NADPH** on the stroma side. NADPH carries high-energy electrons to the Calvin cycle.
6. **The proton gradient makes ATP.** Water splitting and pumping leave a **high H⁺ concentration inside** the thylakoid and a **low concentration outside**, in the stroma. This electrochemical gradient stores energy. H⁺ ions can flow back out only through **ATP synthase**, a protein channel in the membrane. As they flow, ATP synthase joins ADP and Pᵢ into ATP. Making ATP by this flow of protons is **chemiosmosis**; when the energy came from light, the whole process is called **photophosphorylation**.

**Why two photosystems?** One light-driven boost does not give an electron enough energy to travel all the way from water to NADP⁺. Photosystem II takes electrons from water and powers the proton pumping; photosystem I gives the electrons the extra energy needed to reduce NADP⁺. Without both, the plant could not make both ATP and NADPH.

**ETCs are not only in chloroplasts.** Electron transport chains also run in the inner membrane of mitochondria (Topic 3.5) and across the plasma membranes of prokaryotes. In every case, electron flow builds a proton gradient that ATP synthase uses.

## The Calvin cycle

The Calvin cycle takes place in the **stroma**. It uses the products of the light reactions to fix CO₂ into carbohydrate.

| In | Out |
|---|---|
| CO₂ (from the air, through stomata) | carbohydrate (a three-carbon sugar, used to build glucose, sucrose and starch) |
| ATP (from the light reactions) | ADP + Pᵢ (back to the thylakoids) |
| NADPH (from the light reactions) | NADP⁺ (back to the thylakoids) |

ATP supplies energy and NADPH supplies high-energy electrons. Together they convert low-energy CO₂ into energy-rich carbohydrate. The cycle regenerates its starting molecule, which is why it is a cycle. You do not need to learn its steps, intermediates or enzymes.

The two stages depend on each other. Without light, ATP and NADPH run out within a short time and the Calvin cycle stops. Without the Calvin cycle, ADP and NADP⁺ are not returned, and the light reactions slow down.

## Worked example 1: using the equation

**Question.** In a fictional experiment, a potted plant takes up 2.64 g of CO₂ in one day. Assume all of it is turned into glucose. Calculate (a) the mass of glucose made, (b) the mass of O₂ released and (c) the mass of water used, and check that mass is conserved. Use the molar masses in the calculator note.

1. Moles of CO₂ = mass ÷ molar mass = 2.64 g ÷ 44.01 g mol⁻¹ = **0.0600 mol**.
2. **(a)** From the equation, 6 mol CO₂ → 1 mol glucose. Moles of glucose = 0.0600 ÷ 6 = 0.0100 mol. Mass = 0.0100 mol × 180.16 g mol⁻¹ = **1.80 g**.
3. **(b)** 6 mol CO₂ → 6 mol O₂, so 0.0600 mol O₂. Mass = 0.0600 × 32.00 = **1.92 g**.
4. **(c)** 6 mol CO₂ uses 6 mol H₂O, so 0.0600 mol H₂O. Mass = 0.0600 × 18.02 = **1.08 g**.
5. **Check.** Mass in = 2.64 + 1.08 = 3.72 g. Mass out = 1.80 + 1.92 = 3.72 g. Mass is conserved.

**Interpretation.** A real plant would gain less than 1.80 g of glucose, because it also breaks down sugar in respiration, day and night. The equation gives the maximum. Remember too that the O₂ comes from the water, not from the CO₂, even though the masses balance either way.

## Worked example 2: what a herbicide reveals

**Question.** A fictional herbicide H blocks the transfer of electrons from photosystem II to the electron transport chain. Leaf discs in bright light are measured with and without H.

| Measurement (fictional data) | Control | With H |
|---|---|---|
| O₂ release / µmol h⁻¹ | 12.0 | 0.6 |
| pH in thylakoid space | 5.2 | 7.6 |
| pH in stroma | 7.9 | 7.9 |
| ATP made (% of control) | 100 | 9 |

(a) Calculate the percentage fall in O₂ release.
(b) Calculate how many times more concentrated H⁺ is in the thylakoid space than in the stroma, with and without H.
(c) Use the data to support the claim that H stops the plant making carbohydrate.

**(a)** (12.0 − 0.6) ÷ 12.0 × 100 = **95% fall**.

**(b)** Each pH unit is a tenfold change in H⁺ concentration.

1. Control: 7.9 − 5.2 = 2.7 units, so 10^2.7 ≈ **500 times** more H⁺ inside.
2. With H: 7.9 − 7.6 = 0.3 units, so 10^0.3 ≈ **2 times**. The gradient has almost gone.

**(c)**

1. **Claim.** H stops carbohydrate production.
2. **Evidence and reasoning, step by step.** Electrons cannot leave photosystem II, so it cannot accept more electrons from water. Water splitting stops, which is why O₂ release falls by 95%. With no electron flow along the ETC, no H⁺ is pumped and none is released from water, so the H⁺ gradient collapses (500 times → 2 times). Without the gradient, ATP synthase makes little ATP (9% of control). No electrons reach photosystem I, so no NADPH is made either.
3. **Link to the Calvin cycle.** The Calvin cycle needs both ATP and NADPH to turn CO₂ into carbohydrate. With both missing, carbohydrate production stops, and the plant cannot store energy.

## Common misconceptions

- **"The O₂ released comes from CO₂."** It comes from water split at photosystem II.
- **"The Calvin cycle is the 'dark reactions', so it happens at night."** It happens in the light, because it needs a constant supply of ATP and NADPH from the light reactions.
- **"Plants photosynthesise instead of respiring."** Plant cells respire all the time, in light and dark. Photosynthesis is extra, not a replacement.
- **"ATP synthase pumps protons."** ATP synthase lets protons flow *down* their gradient and uses that flow to make ATP. The ETC does the pumping.
- **"The H⁺ concentration is highest in the stroma."** It is highest inside the thylakoid space.
- **"Photosystem I comes first."** The names reflect the order in which they were discovered. Electrons go from photosystem II to photosystem I.
- **"Photosynthesis started in plants."** It began in prokaryotes; chloroplasts descend from cyanobacteria.
- **"Chlorophyll makes energy."** Chlorophyll absorbs light energy and passes it to electrons; energy is converted, not created.

## Where this leads

Photosynthesis stores light energy in carbohydrate. Next, in Topic 3.5, [Cellular Respiration](/advanced-course-resources/biology/3-5-cellular-respiration-study-guide/), you will see how cells release that energy as ATP, using another electron transport chain and another ATP synthase, this time in mitochondria. Look back at [Topic 3.3](/advanced-course-resources/biology/3-3-cellular-energy-study-guide/) for why energy must keep flowing. Test yourself with the [practice questions](/advanced-course-resources/biology/3-4-photosynthesis-practice/), then use the [revision notes](/advanced-course-resources/biology/3-4-photosynthesis-revision-notes/) and the [checklist](/advanced-course-resources/biology/3-4-photosynthesis-checklist/) to consolidate.
