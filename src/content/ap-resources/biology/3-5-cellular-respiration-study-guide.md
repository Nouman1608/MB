---
resourceId: "mb-ap-bio-3.5-study-guide"
title: "Cellular Respiration: Study Guide (Biology 3.5)"
description: "How cells release energy from glucose: glycolysis, the Krebs cycle, the electron transport chain, chemiosmosis and ATP synthase, uncoupling and heat, and fermentation without oxygen."
course: "biology"
unit: 3
topics: ["3.5"]
resourceType: "study-guide"
prerequisites:
  - "ATP, ADP and energy coupling in cells"
  - "Enzymes as catalysts, and how temperature affects them"
  - "The electron transport chain and ATP synthase in photosynthesis"
prerequisiteResources: ["mb-ap-bio-3.4-study-guide"]
learningObjectives:
  - "Describe where glycolysis, pyruvate oxidation, the Krebs cycle and the electron transport chain happen, and what goes in and comes out of each"
  - "Explain how electron carriers (NADH and FADH₂) link the early stages to the electron transport chain, with oxygen as the final electron acceptor"
  - "Explain how the electron transport chain builds a proton gradient that ATP synthase uses to make ATP (chemiosmosis)"
  - "Explain how uncoupling the gradient from ATP synthesis releases heat, and why some endotherms use this"
  - "Explain how fermentation lets glycolysis continue without oxygen, and compare it with aerobic respiration"
  - "Construct a correctly labelled graph from respiration data and use it to compare rates"
skills: ["1", "2", "4", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Rates are found from the gradient of a graph or from total change ÷ time. Model values used here: about 30 ATP per glucose in aerobic respiration, 2 ATP per glucose in fermentation"
related: ["mb-ap-bio-3.5-revision-notes", "mb-ap-bio-3.5-practice", "mb-ap-bio-3.5-checklist"]
next: "mb-ap-bio-3.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Cellular respiration releases energy from food molecules to make ATP. It happens in plants, animals, fungi and microbes, not only in animals."
  - "Glycolysis (cytosol) splits glucose into 2 pyruvate and makes a little ATP and NADH. The Krebs cycle (mitochondrial matrix) releases CO₂ and loads more electrons onto NAD⁺ and FAD."
  - "NADH and FADH₂ hand electrons to the electron transport chain in the inner mitochondrial membrane. Oxygen is the final electron acceptor and becomes water."
  - "Electron flow pumps protons into the intermembrane space. Protons flowing back through ATP synthase drive ATP synthesis: oxidative phosphorylation by chemiosmosis."
  - "Without oxygen, fermentation recycles NADH back to NAD⁺ so glycolysis can keep making its 2 ATP per glucose, producing lactic acid or ethanol."
faqs:
  - question: "Do plants respire, or do they only photosynthesise?"
    answer: "Plants do both. Their cells have mitochondria and respire all the time, day and night. In bright light, photosynthesis is usually faster than respiration, so a leaf takes in CO₂ overall; in the dark it only gives out CO₂."
  - question: "How many ATP does one glucose make?"
    answer: "Glycolysis plus fermentation gives 2 ATP. Full aerobic respiration gives many more: modern estimates are about 30–32, while older books say 36–38. You will not be asked to memorise an exact figure; questions give the value they want you to use."
  - question: "Is anaerobic respiration the same as fermentation?"
    answer: "No. Some prokaryotes respire without oxygen by using another final electron acceptor, such as nitrate or sulfate, in an electron transport chain. Fermentation uses no electron transport chain at all; it only regenerates NAD⁺ for glycolysis."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Why cells respire

Every cell needs a steady supply of ATP to run active transport, build molecules, move and divide. ATP is not stored in large amounts; a cell remakes it from ADP and inorganic phosphate (Pᵢ) all the time. The energy to do this comes from food molecules such as carbohydrates, fats and proteins. **Cellular respiration** is the set of enzyme-catalysed reactions that releases that energy in small, controlled steps and uses it to make ATP.

Respiration, and its oxygen-free relative fermentation, are found in all forms of life: bacteria, archaea, fungi, plants and animals. That is strong evidence that these pathways are very old and were inherited from a common ancestor.

For glucose, the overall change in aerobic respiration is:

**C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O** (energy released: part captured as ATP, the rest lost as heat)

The equation hides many steps. You do not need to memorise the steps, the intermediate molecules or the enzyme names. You **do** need to know where each stage happens, what goes in and out, and how the stages are linked.

## Oxidation, reduction and electron carriers

Energy is released when electrons move from food molecules toward oxygen, which attracts electrons strongly. Two words describe this:

- **Oxidation** is the loss of electrons (often with hydrogen). Glucose is oxidised to CO₂.
- **Reduction** is the gain of electrons. Oxygen is reduced to water.

Cells do not pass electrons straight from glucose to oxygen: that would release the energy in one burst, mostly as heat. Instead, electrons are picked up by **coenzymes** that act as carriers:

- **NAD⁺** accepts electrons (and a proton) to become **NADH**.
- **FAD** accepts electrons to become **FADH₂**.

Think of NADH and FADH₂ as charged batteries. They carry electrons from the early stages to the electron transport chain, where the energy is used.

## The four stages and where they happen

<figure>
<svg viewBox="0 0 680 330" role="img" aria-labelledby="cr-map-title cr-map-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cr-map-title">Overview of the four stages of aerobic respiration</title>
<desc id="cr-map-desc">Four boxes in a row joined by arrows. Box 1, glycolysis, in the cytosol: glucose in; 2 pyruvate, net 2 ATP and 2 NADH out. Box 2, pyruvate oxidation, in the mitochondrial matrix: CO2 and NADH out. Box 3, Krebs cycle, in the matrix: CO2, NADH, FADH2 and a little ATP out. Box 4, electron transport chain and ATP synthase, in the inner mitochondrial membrane: NADH and FADH2 deliver electrons, oxygen accepts them and becomes water, and most of the ATP is made here. A dashed line under the boxes shows NADH and FADH2 from boxes 1 to 3 travelling to box 4.</desc>
<rect x="0" y="0" width="680" height="330" fill="#ffffff"/>
<text x="95" y="28" text-anchor="middle" font-size="13" fill="#1d2b44">Cytosol</text>
<text x="350" y="28" text-anchor="middle" font-size="13" fill="#1d2b44">Mitochondrial matrix</text>
<text x="600" y="28" text-anchor="middle" font-size="13" fill="#1d2b44">Inner membrane</text>
<rect x="20" y="45" width="150" height="70" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="95" y="76" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">1 Glycolysis</text>
<text x="95" y="98" text-anchor="middle" font-size="12" fill="#1d2b44">glucose → 2 pyruvate</text>
<rect x="195" y="45" width="140" height="70" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="265" y="76" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">2 Pyruvate</text>
<text x="265" y="96" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">oxidation</text>
<rect x="360" y="45" width="140" height="70" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="430" y="76" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">3 Krebs cycle</text>
<text x="430" y="98" text-anchor="middle" font-size="12" fill="#1d2b44">(citric acid cycle)</text>
<rect x="525" y="45" width="145" height="70" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="3"/>
<text x="597" y="76" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">4 ETC +</text>
<text x="597" y="96" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2b44">ATP synthase</text>
<line x1="170" y1="80" x2="191" y2="80" stroke="#1d2b44" stroke-width="2"/>
<polygon points="195,80 187,75 187,85" fill="#1d2b44"/>
<line x1="335" y1="80" x2="356" y2="80" stroke="#1d2b44" stroke-width="2"/>
<polygon points="360,80 352,75 352,85" fill="#1d2b44"/>
<text x="95" y="140" text-anchor="middle" font-size="12" fill="#1d2b44">out: net 2 ATP</text>
<text x="95" y="157" text-anchor="middle" font-size="12" fill="#1d2b44">2 NADH</text>
<text x="95" y="174" text-anchor="middle" font-size="12" fill="#1d2b44">no O₂ needed</text>
<text x="265" y="140" text-anchor="middle" font-size="12" fill="#1d2b44">out: CO₂</text>
<text x="265" y="157" text-anchor="middle" font-size="12" fill="#1d2b44">NADH</text>
<text x="430" y="140" text-anchor="middle" font-size="12" fill="#1d2b44">out: CO₂, NADH,</text>
<text x="430" y="157" text-anchor="middle" font-size="12" fill="#1d2b44">FADH₂, a little ATP</text>
<text x="597" y="140" text-anchor="middle" font-size="12" fill="#1d2b44">in: O₂ (final acceptor)</text>
<text x="597" y="157" text-anchor="middle" font-size="12" fill="#1d2b44">out: H₂O, most ATP</text>
<polyline points="95,185 95,215 597,215 597,175" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5"/>
<line x1="265" y1="165" x2="265" y2="215" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5"/>
<line x1="430" y1="165" x2="430" y2="215" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5"/>
<polygon points="597,165 592,175 602,175" fill="#1d2b44"/>
<text x="340" y="240" text-anchor="middle" font-size="13" fill="#1d2b44">Dashed line: NADH and FADH₂ carry electrons to the ETC</text>
<text x="340" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">Solid arrows: carbon skeletons passed on (pyruvate, then a two-carbon unit)</text>
<text x="340" y="310" text-anchor="middle" font-size="12" fill="#1d2b44">Thick border: the stage that needs O₂ directly and makes most of the ATP</text>
</svg>
<figcaption>Figure 1. The four stages of aerobic respiration in a eukaryotic cell. Only stage 4 uses oxygen directly, but stages 2 and 3 stop without it because NAD⁺ and FAD are not freed up again.</figcaption>
</figure>

### Stage 1: glycolysis (cytosol)

Glycolysis happens in the cytosol of every cell. It splits one six-carbon glucose into **two three-carbon pyruvate** molecules. Along the way it makes ATP from ADP and Pᵢ, and reduces NAD⁺ to NADH. Per glucose the net gain is **2 ATP and 2 NADH**. Glycolysis needs no oxygen and no mitochondria, which is one reason it is thought to be the oldest part of the pathway.

### Stages 2 and 3: pyruvate oxidation and the Krebs cycle (mitochondrial matrix)

If oxygen is available, pyruvate is transported from the cytosol into the **mitochondrion**. In the **matrix** (the fluid inside the inner membrane):

- each pyruvate is oxidised: one carbon leaves as **CO₂** and NAD⁺ is reduced to NADH;
- the remaining two-carbon unit enters the **Krebs cycle** (also called the citric acid cycle), a loop of reactions that releases the rest of the carbon as **CO₂**, reduces more **NAD⁺ to NADH** and **FAD to FADH₂**, and makes a small amount of **ATP**.

*Background, not for memorising:* per glucose, stages 2 and 3 release all 6 carbons as 6 CO₂ (2 in pyruvate oxidation, 4 in the cycle). Together with glycolysis they produce about 10 NADH and 2 FADH₂ but only 4 ATP directly. Most of glucose's energy is now held in those reduced carriers, not in ATP.

### Stage 4: electron transport and oxidative phosphorylation (inner membrane)

This is where most ATP is made. Figure 2 shows how.

<figure>
<svg viewBox="0 0 680 360" role="img" aria-labelledby="cr-etc-title cr-etc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cr-etc-title">Electron transport chain and ATP synthase in the inner mitochondrial membrane</title>
<desc id="cr-etc-desc">A horizontal membrane band across the middle. Above it is the intermembrane space, labelled high proton concentration and lower pH. Below it is the matrix, labelled low proton concentration and higher pH. Three electron carrier proteins sit in the membrane. A dashed line shows electrons from NADH and FADH2 in the matrix passing through the three carriers in turn and then to oxygen, which becomes water. Above each carrier an arrow points upward, labelled H plus, showing protons pumped from the matrix into the intermembrane space. On the right, ATP synthase spans the membrane. An arrow points downward through it, labelled H plus, and below it ADP plus Pi becomes ATP.</desc>
<rect x="0" y="0" width="680" height="360" fill="#ffffff"/>
<text x="340" y="30" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Intermembrane space: high H⁺ concentration, lower pH</text>
<rect x="20" y="150" width="640" height="60" fill="#fdf6e3" stroke="none"/>
<line x1="20" y1="150" x2="660" y2="150" stroke="#1d2b44" stroke-width="2"/>
<line x1="20" y1="210" x2="660" y2="210" stroke="#1d2b44" stroke-width="2"/>
<text x="30" y="185" font-size="12" fill="#1d2b44">Inner</text>
<text x="30" y="200" font-size="12" fill="#1d2b44">membrane</text>
<rect x="130" y="135" width="70" height="90" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="165" y="185" text-anchor="middle" font-size="13" fill="#1d2b44">Carrier 1</text>
<rect x="250" y="135" width="70" height="90" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="285" y="185" text-anchor="middle" font-size="13" fill="#1d2b44">Carrier 2</text>
<rect x="370" y="135" width="70" height="90" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="405" y="185" text-anchor="middle" font-size="13" fill="#1d2b44">Carrier 3</text>
<line x1="165" y1="128" x2="165" y2="78" stroke="#1d2b44" stroke-width="3"/>
<polygon points="165,68 159,80 171,80" fill="#1d2b44"/>
<text x="180" y="88" font-size="14" font-weight="700" fill="#1d2b44">H⁺</text>
<line x1="285" y1="128" x2="285" y2="78" stroke="#1d2b44" stroke-width="3"/>
<polygon points="285,68 279,80 291,80" fill="#1d2b44"/>
<text x="300" y="88" font-size="14" font-weight="700" fill="#1d2b44">H⁺</text>
<line x1="405" y1="128" x2="405" y2="78" stroke="#1d2b44" stroke-width="3"/>
<polygon points="405,68 399,80 411,80" fill="#1d2b44"/>
<text x="420" y="88" font-size="14" font-weight="700" fill="#1d2b44">H⁺</text>
<polyline points="95,275 165,200 285,200 405,200 470,275" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5"/>
<polygon points="474,280 463.7,275.7 471.2,269.2" fill="#1d2b44"/>
<text x="95" y="295" text-anchor="middle" font-size="13" fill="#1d2b44">NADH, FADH₂</text>
<text x="95" y="312" text-anchor="middle" font-size="12" fill="#1d2b44">give up e⁻</text>
<text x="285" y="262" text-anchor="middle" font-size="12" fill="#1d2b44">e⁻ path (dashed)</text>
<text x="480" y="298" text-anchor="middle" font-size="13" fill="#1d2b44">O₂ + e⁻ + H⁺</text>
<text x="480" y="315" text-anchor="middle" font-size="13" fill="#1d2b44">→ H₂O</text>
<rect x="545" y="115" width="70" height="125" rx="10" fill="#ffffff" stroke="#1d2b44" stroke-width="3"/>
<text x="580" y="105" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">ATP synthase</text>
<line x1="580" y1="60" x2="580" y2="252" stroke="#1d2b44" stroke-width="3"/>
<polygon points="580,262 574,250 586,250" fill="#1d2b44"/>
<text x="596" y="72" font-size="14" font-weight="700" fill="#1d2b44">H⁺</text>
<text x="580" y="285" text-anchor="middle" font-size="13" fill="#1d2b44">ADP + Pᵢ → ATP</text>
<text x="340" y="345" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Matrix: low H⁺ concentration, higher pH</text>
</svg>
<figcaption>Figure 2. Electrons (dashed path) move from carrier to carrier and finally to oxygen. The energy released pumps protons up into the intermembrane space. Protons can only flow back down through ATP synthase, which uses that flow to make ATP. Carrier names are not needed.</figcaption>
</figure>

1. **Electron delivery.** NADH and FADH₂ give their electrons to the **electron transport chain (ETC)**, a series of proteins in the inner mitochondrial membrane. This oxidises them back to NAD⁺ and FAD, which return to glycolysis and the Krebs cycle.
2. **Redox series.** Each carrier is reduced when it accepts electrons and oxidised when it passes them on. Each acceptor holds electrons more strongly than the one before, so energy is released in small steps.
3. **Final acceptor.** At the end, **oxygen** accepts the electrons and combines with protons to form **water**. This is the only place oxygen is used. Aerobic prokaryotes also use oxygen; anaerobic prokaryotes use another acceptor, such as nitrate or sulfate.
4. **Proton pumping.** The energy released moves protons (H⁺) from the matrix into the **intermembrane space**. This builds an **electrochemical gradient**: high H⁺ concentration (lower pH) outside the inner membrane, low H⁺ concentration (higher pH) inside, in the matrix.
5. **Chemiosmosis.** The membrane is almost impermeable to H⁺, so protons can only flow back into the matrix through **ATP synthase**. Their flow turns part of the enzyme and drives **ADP + Pᵢ → ATP**. Making ATP this way, powered by electron transport to oxygen, is **oxidative phosphorylation**.

**Structure and function.** The inner membrane is folded into **cristae**. Folding gives more surface area for ETC proteins and ATP synthase, so more ATP can be made per mitochondrion. Cells with high energy demand, such as muscle cells, tend to have many mitochondria with densely packed cristae.

**Prokaryotes** have no mitochondria. Their ETC and ATP synthase sit in the **plasma membrane**, and protons are pumped out of the cell across it. The chemiosmotic principle is the same.

### Uncoupling: making heat instead of ATP

Normally electron transport and ATP synthesis are **coupled**: the ETC can only run as fast as protons flow back through ATP synthase. If protons leak back across the inner membrane by another route, the gradient is used up without making ATP. The ETC then runs fast, oxygen use rises, and the energy is released as **heat**. This is called **uncoupling** (or decoupling) of oxidative phosphorylation from electron transport.

Some endotherms use this on purpose. **Brown adipose tissue** (brown fat) in newborn humans and in many small and hibernating mammals contains an uncoupling protein that lets protons back into the matrix. The heat helps keep body temperature up in the cold.

## Fermentation: glycolysis without oxygen

What happens if oxygen runs out? The ETC stops, because there is nothing to accept electrons at the end. NADH can no longer unload, so the cell's small supply of **NAD⁺ is used up**. Without NAD⁺, glycolysis would stop too.

**Fermentation** solves this. NADH passes its electrons to pyruvate (or a molecule made from it), regenerating **NAD⁺** so that glycolysis can keep running:

| Type | Example organisms | Product(s) from pyruvate |
|---|---|---|
| Lactic acid fermentation | many bacteria; human muscle cells during intense exercise | lactic acid (lactate) |
| Alcohol fermentation | yeast and some bacteria | ethanol and CO₂ |

Fermentation itself makes **no extra ATP**. The cell gets only the **2 ATP per glucose** from glycolysis, compared with roughly 30 from full aerobic respiration. Most of the energy stays locked in the lactic acid or ethanol. That is why fermenting cells use glucose so quickly.

### Respiration and photosynthesis compared

| Feature | Respiration (mitochondria) | Photosynthesis (chloroplasts, Topic 3.4) |
|---|---|---|
| ETC location | inner mitochondrial membrane | thylakoid membrane |
| Electrons come from | NADH and FADH₂ (from food) | water, boosted by light |
| Final electron acceptor | O₂ (forms water) | NADP⁺ (forms NADPH) |
| Side with high H⁺ | intermembrane space | inside the thylakoid |
| ATP made by | ATP synthase: oxidative phosphorylation | ATP synthase: photophosphorylation |

## Worked example 1: graphing respirometer data

**Question.** A student measures oxygen uptake by woodlice (small land crustaceans) in a respirometer at 10 °C and at 25 °C. Each tube holds 2.5 g of woodlice. A control tube of glass beads was used to correct the readings for changes in air pressure and temperature. Corrected data (fictional):

| Time / min | 0 | 5 | 10 | 15 | 20 | 25 |
|---|---|---|---|---|---|---|
| O₂ used at 25 °C / mL | 0.00 | 0.14 | 0.27 | 0.41 | 0.55 | 0.68 |
| O₂ used at 10 °C / mL | 0.00 | 0.05 | 0.11 | 0.16 | 0.21 | 0.27 |

(a) Construct an appropriate graph. (b) Calculate the rate at each temperature in mL g⁻¹ h⁻¹. (c) Explain the difference.

**(a) Building the graph.** Check each component:

1. **Type:** both variables are continuous and measured over time, so a **line graph** (x–y plot) is right, not a bar chart.
2. **Axes:** independent variable (time) on x; dependent variable (O₂ used) on y. Labels include units: "Time / min" and "Volume of O₂ used / mL".
3. **Scaling:** even steps that use most of the grid (here 0–25 min and 0–0.7 mL).
4. **Plotting:** each point placed accurately, with a different marker for each temperature.
5. **Legend** naming each series, and **trend lines**: the points lie close to straight lines, so a best-fit straight line through each set is appropriate.

<figure>
<svg viewBox="0 0 600 360" role="img" aria-labelledby="cr-we1-title cr-we1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cr-we1-title">Oxygen used by woodlice at 10 and 25 degrees Celsius</title>
<desc id="cr-we1-desc">Line graph. Horizontal axis: time in minutes, 0 to 25. Vertical axis: volume of oxygen used in millilitres, 0 to 0.7. The 25 degree series, solid line with circle markers, rises steeply and almost straight to 0.68 millilitres at 25 minutes. The 10 degree series, dashed line with square markers, rises less steeply to 0.27 millilitres at 25 minutes. A legend identifies the two series.</desc>
<rect x="0" y="0" width="600" height="360" fill="#ffffff"/>
<line x1="80" y1="300" x2="490" y2="300" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="300" x2="80" y2="45" stroke="#1d2b44" stroke-width="2"/>
<text x="80" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="160" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">5</text>
<text x="240" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">10</text>
<text x="320" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">15</text>
<text x="400" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">20</text>
<text x="480" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">25</text>
<text x="72" y="304" text-anchor="end" font-size="12" fill="#1d2b44">0.0</text>
<text x="72" y="234" text-anchor="end" font-size="12" fill="#1d2b44">0.2</text>
<text x="72" y="164" text-anchor="end" font-size="12" fill="#1d2b44">0.4</text>
<text x="72" y="94" text-anchor="end" font-size="12" fill="#1d2b44">0.6</text>
<line x1="80" y1="230" x2="490" y2="230" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="160" x2="490" y2="160" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="90" x2="490" y2="90" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<text x="285" y="345" text-anchor="middle" font-size="14" fill="#1d2b44">Time / min</text>
<text x="22" y="175" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 22 175)">Volume of O₂ used / mL</text>
<line x1="80" y1="300" x2="480" y2="62" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="80" y1="300" x2="480" y2="205.5" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 6"/>
<circle cx="160" cy="251" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="240" cy="205.5" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="320" cy="156.5" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="400" cy="107.5" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="480" cy="62" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="155" y="277.5" width="10" height="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="235" y="256.5" width="10" height="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="315" y="239" width="10" height="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="395" y="221.5" width="10" height="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="475" y="200.5" width="10" height="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="100" y="52" width="170" height="52" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<line x1="110" y1="68" x2="140" y2="68" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="125" cy="68" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="148" y="72" font-size="12" fill="#1d2b44">25 °C (solid, ○)</text>
<line x1="110" y1="90" x2="140" y2="90" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="6 4"/>
<rect x="121" y="86" width="8" height="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="148" y="94" font-size="12" fill="#1d2b44">10 °C (dashed, □)</text>
</svg>
<figcaption>Figure 3. Model answer for part (a): line graph with labelled axes and units, even scales, distinct markers, a legend and a best-fit line for each temperature.</figcaption>
</figure>

**(b) Rates.** The lines are straight, so the gradient equals total change ÷ time (a best-fit gradient gives the same answer to 2 significant figures).

1. 25 °C: 0.68 mL ÷ 25 min = 0.0272 mL min⁻¹. × 60 = 1.632 mL h⁻¹. ÷ 2.5 g = **0.65 mL g⁻¹ h⁻¹**.
2. 10 °C: 0.27 mL ÷ 25 min = 0.0108 mL min⁻¹. × 60 = 0.648 mL h⁻¹. ÷ 2.5 g = **0.26 mL g⁻¹ h⁻¹**.
3. Ratio: 0.653 ÷ 0.259 ≈ **2.5**, so the rate is about two and a half times higher at 25 °C.

**Check the units.** mL ÷ min × (min per h) ÷ g gives mL g⁻¹ h⁻¹, a rate per gram of animal, so groups of different mass could be compared fairly.

**(c) Explanation.** Woodlice are ectotherms: their body temperature follows their surroundings. Respiration is a series of enzyme-catalysed reactions. At 25 °C, molecules move faster and collide with active sites more often, so glycolysis, the Krebs cycle and the ETC all run faster, and oxygen, the final electron acceptor, is used up faster. The conclusion applies to this range of temperatures only; at much higher temperatures enzymes would denature and the rate would fall.

## Worked example 2: predicting the effect of blocking the ETC

**Question.** A fictional poison, compound K, binds to the last carrier of the ETC so that electrons cannot pass to oxygen. Cultured muscle cells are measured before and after adding K (rates per million cells, nmol min⁻¹; fictional data):

| Measurement | Before K | After K |
|---|---|---|
| O₂ consumption | 12.0 | 0.6 |
| Lactate released | 4.0 | 40 |
| ATP production | 64 | 43 |

(a) Explain the change in O₂ consumption and in ATP production. (b) Explain the change in lactate. (c) Using the model values of 6 O₂ and about 30 ATP per glucose for aerobic respiration, and 2 lactate and 2 ATP per glucose for fermentation, show that the ATP figures are consistent and find how glucose use changes.

**(a)** With the last carrier blocked, electrons cannot reach O₂, so O₂ consumption falls by (0.6 − 12.0) ÷ 12.0 × 100 = **−95%**. Electrons back up along the chain, so no more protons are pumped. The proton gradient runs down, ATP synthase stops, and oxidative phosphorylation stops. ATP production falls by (43 − 64) ÷ 64 × 100 = **−33%**.

**(b)** NADH can no longer give its electrons to the ETC, so NAD⁺ runs short. The cells switch to **lactic acid fermentation**: NADH reduces pyruvate to lactate, regenerating NAD⁺ so that glycolysis continues. Lactate output rises **tenfold** (40 ÷ 4.0 = 10).

**(c)** Before K: aerobic glucose = 12.0 ÷ 6 = 2.0; fermented glucose = 4.0 ÷ 2 = 2.0. ATP = 2.0 × 30 + 2.0 × 2 = 64 ✓. Glucose use = **4.0** nmol min⁻¹.
After K: aerobic glucose = 0.6 ÷ 6 = 0.1; fermented glucose = 40 ÷ 2 = 20. ATP = 0.1 × 30 + 20 × 2 = 43 ✓. Glucose use = **20.1** nmol min⁻¹.

So the cells use about **5 times** as much glucose (20.1 ÷ 4.0 ≈ 5.0) yet make a third less ATP. Fermentation keeps the cells alive for a while, but it is a costly back-up.

**Interpretation.** The prediction rests on a chain of cause and effect: block electron transfer → no proton pumping → no gradient → no oxidative phosphorylation → NADH builds up → fermentation. In an exam, write every link; marks are usually lost by jumping from "ETC blocked" straight to "less ATP".

## Common misconceptions

- **"Plants photosynthesise; animals respire."** Plant cells respire all the time. Respiration happens in all living things.
- **"Respiration means breathing."** Breathing moves air in and out of lungs. Cellular respiration is a chemical process in cells.
- **"Oxygen is used in the Krebs cycle."** Oxygen is used only at the end of the ETC. The Krebs cycle stops without oxygen only because NAD⁺ and FAD are not regenerated.
- **"The CO₂ we breathe out comes from the oxygen we breathe in."** The carbon and oxygen in CO₂ come from the food molecules (and water). Inhaled O₂ ends up in water.
- **"The ETC makes ATP."** The ETC pumps protons. ATP synthase makes the ATP, driven by protons flowing back.
- **"Protons are pumped into the matrix."** They are pumped out of the matrix into the intermembrane space. The matrix has the **higher** pH.
- **"Fermentation produces extra ATP."** It produces none; it only regenerates NAD⁺ so glycolysis can keep making 2 ATP per glucose.
- **"Anaerobic respiration and fermentation are the same thing."** Anaerobic respiration uses an ETC with a non-oxygen final acceptor; fermentation has no ETC.
- **"Uncoupling is always harmful."** Brown fat uncouples on purpose to produce heat.

## Where this leads

Respiration completes Unit 3: compare it carefully with [Topic 3.4, photosynthesis](/advanced-course-resources/biology/3-4-photosynthesis-study-guide/), which uses the same kind of chemiosmotic machinery but captures energy from light instead of releasing it from food. The ATP made here powers the signalling and cell division in Unit 4, starting with [Topic 4.1, cell communication](/advanced-course-resources/biology/4-1-cell-communication-study-guide/). Test yourself with the [practice questions](/advanced-course-resources/biology/3-5-cellular-respiration-practice/), then use the [revision notes](/advanced-course-resources/biology/3-5-cellular-respiration-revision-notes/) and the [checklist](/advanced-course-resources/biology/3-5-cellular-respiration-checklist/) to consolidate.
