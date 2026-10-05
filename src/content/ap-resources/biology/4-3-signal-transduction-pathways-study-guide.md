---
resourceId: "mb-ap-bio-4.3-study-guide"
title: "Signal Transduction Pathways: Study Guide (Biology 4.3)"
description: "What a signalling pathway can make a cell do, from fast enzyme changes to new gene expression, new phenotypes and apoptosis, and how mutations, drugs and toxins switch pathways on or off."
course: "biology"
unit: 4
topics: ["4.3"]
resourceType: "study-guide"
prerequisites:
  - "The parts of a signal transduction pathway: ligand, receptor, relay proteins, second messengers and protein kinases"
  - "How a protein's shape depends on its amino acid sequence"
  - "Genes code for proteins; transcription factors control which genes are expressed"
prerequisiteResources: ["mb-ap-bio-4.2-study-guide"]
learningObjectives:
  - "Describe the kinds of response a signalling pathway can produce: changed activity of existing proteins, changed gene expression, a new phenotype or apoptosis"
  - "Explain how quorum sensing lets bacteria change their gene expression in response to population density"
  - "Explain how a mutation in the ligand-binding domain, the intracellular domain or any later component changes what happens downstream"
  - "Predict whether a chemical that acts on a pathway component will activate or inhibit the response"
  - "Use data from mutants and inhibitors to justify a claim about the order of components in a pathway"
skills: ["1", "4", "5", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "four-function"
calculatorNote: "Only simple ratios and differences are needed. All data sets on this page are fictional"
related: ["mb-ap-bio-4.3-revision-notes", "mb-ap-bio-4.3-practice", "mb-ap-bio-4.3-checklist"]
next: "mb-ap-bio-4.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "A signalling pathway can change the activity of proteins the cell already has (fast), or change which genes are expressed (slower). Either can alter the cell's phenotype, and some pathways trigger apoptosis, programmed cell death."
  - "Bacteria use quorum sensing: each cell releases a signal molecule, and only when the population is dense enough does the signal reach the level that switches on new genes."
  - "A mutation in any part of the pathway can change everything downstream. A part that cannot be switched on blocks the response; a part stuck in the 'on' state gives a response with no signal."
  - "Chemicals can mimic a signal, block a receptor or act on any later step, so they can activate or inhibit the pathway."
  - "To find where a fault lies, ask: which steps still work, and does adding a later step back restore the response?"
faqs:
  - question: "Is this topic the same as Topic 4.2?"
    answer: "Topic 4.2 names the parts of a pathway (ligand, receptor, second messenger, kinases). Topic 4.3 asks what the pathway does to the cell, and what happens when any part of it changes. You use the parts from 4.2 to argue about the effects in 4.3."
  - question: "Do I need to memorise every illustrative example?"
    answer: "No. You need to understand the principles well enough to apply them to an example you have never seen. Examples such as quorum sensing or a cancer-causing mutation are there to make the principles concrete."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From signal to response

In [Topic 4.2](/advanced-course-resources/biology/4-2-introduction-signal-transduction-study-guide/) you met the parts of a signal transduction pathway. A **ligand** binds a **receptor**. The receptor changes shape. Relay proteins, second messengers such as cAMP and chains of **protein kinases** pass the message on, often amplifying it.

This topic asks two new questions:

1. **What does the pathway actually make the cell do?** The answer is a **cellular response**, and there are several kinds.
2. **What happens if any part of the pathway changes?** A mutation, a drug or a toxin can change one component. Because each component switches on the next, the effect spreads to every step **downstream**.

## Four kinds of cellular response

| Kind of response | What changes | Typical speed | Example |
|---|---|---|---|
| Change in **protein activity** | an enzyme, channel or transporter the cell already has is switched on or off, often by phosphorylation | seconds to minutes | epinephrine makes liver cells break down glycogen and release glucose |
| Change in **gene expression** | a transcription factor is activated, so some genes are transcribed more (or less) and new proteins are made | minutes to hours | yeast mating pheromones switch on mating genes |
| Change in **phenotype** | the new proteins change what the cell, tissue or organism looks like or does | hours to days | ethylene changes the enzymes in fruit cells so the fruit softens and ripens |
| **Apoptosis** | the cell activates enzymes that take it apart from the inside | hours | the tissue between developing fingers and toes is removed |

The first two rows describe **where** the pathway acts. The last two describe **outcomes** that usually follow from changed gene expression. They overlap: a phenotype change nearly always rests on new proteins made after gene expression changes.

<figure>
<svg viewBox="0 0 680 424" role="img" aria-labelledby="st43-f1-title st43-f1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="st43-f1-title">One signal, two kinds of response, four places a pathway can be changed</title>
<desc id="st43-f1-desc">A ligand outside the cell binds the ligand-binding domain of a receptor that crosses the plasma membrane. Its intracellular domain passes the signal to relay proteins and a second messenger, then to a protein kinase cascade. The pathway then branches. Branch A, in the cytoplasm: an existing enzyme or channel is changed, giving a fast change in cell function. Branch B, inside the nucleus: a transcription factor changes gene expression, new proteins are made, and the result can be a new phenotype or apoptosis. Numbered circles mark four places a change can act: 1 the ligand-binding domain, 2 the intracellular domain, 3 the relay proteins, 4 the kinase cascade.</desc>
<defs><marker id="st43-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="680" height="424" fill="#ffffff"/>
<text x="20" y="22" font-size="13" fill="#1d2b44">Outside the cell</text>
<line x1="20" y1="90" x2="660" y2="90" stroke="#1d2b44" stroke-width="2"/>
<line x1="20" y1="106" x2="660" y2="106" stroke="#1d2b44" stroke-width="2"/>
<text x="655" y="84" text-anchor="end" font-size="12" fill="#1d2b44">Plasma membrane</text>
<text x="20" y="128" font-size="13" fill="#1d2b44">Cytoplasm</text>
<polygon points="110,30 130,30 120,48" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="140" y="38" font-size="13" fill="#1d2b44">Signal (ligand)</text>
<rect x="100" y="52" width="40" height="38" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="108" y="90" width="24" height="16" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="100" y="106" width="40" height="44" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="150" y="66" font-size="12" fill="#1d2b44">ligand-binding domain</text>
<text x="150" y="146" font-size="12" fill="#1d2b44">intracellular domain</text>
<line x1="120" y1="150" x2="120" y2="185" stroke="#1d2b44" stroke-width="2"/>
<line x1="120" y1="185" x2="196" y2="185" stroke="#1d2b44" stroke-width="2" marker-end="url(#st43-arrow)"/>
<rect x="200" y="164" width="160" height="44" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="183" text-anchor="middle" font-size="13" fill="#1d2b44">Relay proteins and</text>
<text x="280" y="199" text-anchor="middle" font-size="13" fill="#1d2b44">second messenger</text>
<line x1="360" y1="186" x2="406" y2="186" stroke="#1d2b44" stroke-width="2" marker-end="url(#st43-arrow)"/>
<rect x="410" y="164" width="160" height="44" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="490" y="183" text-anchor="middle" font-size="13" fill="#1d2b44">Protein kinase</text>
<text x="490" y="199" text-anchor="middle" font-size="13" fill="#1d2b44">cascade</text>
<line x1="450" y1="208" x2="330" y2="250" stroke="#1d2b44" stroke-width="2" marker-end="url(#st43-arrow)"/>
<line x1="530" y1="208" x2="540" y2="250" stroke="#1d2b44" stroke-width="2" marker-end="url(#st43-arrow)"/>
<rect x="200" y="254" width="200" height="60" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="300" y="274" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">A: existing enzyme or</text>
<text x="300" y="290" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">channel changed</text>
<text x="300" y="306" text-anchor="middle" font-size="12" fill="#1d2b44">fast change in cell function</text>
<rect x="420" y="232" width="240" height="104" rx="18" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<text x="650" y="250" text-anchor="end" font-size="12" fill="#1d2b44">Nucleus (dashed)</text>
<rect x="440" y="258" width="200" height="66" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="540" y="276" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">B: transcription factor</text>
<text x="540" y="292" text-anchor="middle" font-size="12" fill="#1d2b44">changes gene expression;</text>
<text x="540" y="307" text-anchor="middle" font-size="12" fill="#1d2b44">new proteins → new phenotype</text>
<text x="540" y="320" text-anchor="middle" font-size="12" fill="#1d2b44">or apoptosis</text>
<circle cx="80" cy="70" r="12" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><text x="80" y="75" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">1</text>
<circle cx="80" cy="130" r="12" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><text x="80" y="135" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">2</text>
<circle cx="280" cy="150" r="12" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><text x="280" y="155" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">3</text>
<circle cx="490" cy="150" r="12" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><text x="490" y="155" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">4</text>
<text x="20" y="362" font-size="12" fill="#1d2b44">1 ligand-binding domain: blocked by an antagonist drug, or mutated so the ligand cannot bind</text>
<text x="20" y="379" font-size="12" fill="#1d2b44">2 intracellular domain: mutated so it is stuck "on" (or cannot switch on)</text>
<text x="20" y="396" font-size="12" fill="#1d2b44">3 relay proteins: locked "on" by a toxin or mutation</text>
<text x="20" y="413" font-size="12" fill="#1d2b44">4 kinase cascade: stopped by an inhibitor drug</text>
</svg>
<figcaption>Figure 1. A generalised pathway. Branch A changes proteins that already exist; branch B changes which proteins are made. The numbered circles mark places where a mutation or a chemical can change the pathway; every step after that point is affected.</figcaption>
</figure>

### Changing what proteins already do

The fastest responses need no new proteins. A kinase adds a phosphate group to an enzyme, channel or transporter. Its shape changes and it becomes more (or less) active. In liver cells, the hormone epinephrine starts a cAMP pathway that ends by activating the enzyme that breaks glycogen into glucose. Glucose can be released into the blood within seconds, ready for a sudden burst of activity. Nothing new was made: an existing enzyme was switched on.

### Changing gene expression

Slower responses end at a **transcription factor**, a protein that binds DNA and makes some genes more (or less) likely to be transcribed. New mRNA is made, then new proteins. Some examples:

- **Yeast mating pheromones.** A yeast cell releases a pheromone that binds receptors on yeast cells of the opposite mating type. The pathway switches on mating genes, so the receiving cell stops dividing and grows towards its partner.
- **Cytokines.** These signalling proteins of the immune system bind receptors on target cells and change gene expression so that the cells replicate and divide.
- **Steroid hormones** such as testosterone pass through the membrane and bind a receptor inside the cell. The hormone–receptor complex itself acts as a transcription factor.
- **HOX genes** code for transcription factors that, during embryonic development, tell cells which part of the body plan they belong to (head, thorax, tail and so on). Signals in the embryo control which HOX genes each cell expresses.

### Changing phenotype

When new proteins are made, a cell can take on a new **phenotype**: a new structure, behaviour or function. In ripening fruit, the plant hormone **ethylene** changes the production of several enzymes. Some break down cell walls (the fruit softens), some convert starch to sugar (it sweetens) and some change pigments (it changes colour).

Bacteria show the same principle through **quorum sensing**. Each bacterium releases a small signal molecule, an **autoinducer**. With few cells, it diffuses away. As the population grows, the concentration rises. Above a threshold, the autoinducer binds a receptor protein inside the cells that acts as a transcription factor. New genes switch on and the whole population changes behaviour together. In the marine bacterium *Aliivibrio fischeri*, which lives in the light organ of the Hawaiian bobtail squid, quorum sensing switches on the genes for light production. Glowing only makes sense when there are enough bacteria for the light to be seen.

### Apoptosis: a response that ends the cell

Some signals tell a cell to die in a controlled way. This is **apoptosis**, or programmed cell death. The pathway activates protein-digesting enzymes that break the cell down from the inside. The fragments are packaged in membrane and eaten by other cells, so no contents leak out and no inflammation results.

Apoptosis is not a failure; it shapes the body. In a human embryo the hands start as paddles. Cells between the future fingers receive signals and undergo apoptosis, which separates the digits. In chick embryos, experiments that disrupted a receptor in this signalling pathway stopped the apoptosis and gave webbed feet, rather like a duck's. Apoptosis also removes cells that are damaged, infected or no longer needed.

## When part of the pathway changes: mutations

A receptor is a protein with separate **domains**: a ligand-binding domain that recognises the signal and an intracellular domain that passes it on. Every relay protein and kinase is also a protein whose shape is set by a gene. A mutation can change the shape of any of them, and so change everything **downstream** of that point.

Two kinds of change cover most cases:

- **Loss of function.** The component can no longer be switched on, or cannot switch on the next one. The signal stops at that point. The response is **missing or weak**, even when plenty of ligand is present. Example: in androgen insensitivity, the gene for the receptor for testosterone is mutated. Testosterone levels can be normal or high, but target cells cannot respond, so body features that depend on that response do not develop.
- **Gain of function (stuck on).** The component is active **without** its normal input. The response happens **all the time**, even with no ligand. Example: the relay protein **Ras** passes growth signals from receptors to a kinase cascade that ends in cell division. Certain mutations stop Ras from switching itself off. Cells then divide without a growth signal. Such mutations are found in many human cancers.

**Where** the change is matters too. A change upstream (in the receptor) affects all branches that come after it. A change in one branch (say, a kinase that only leads to branch B in Figure 1) can leave the other branch working normally.

## When chemicals interfere: activators and inhibitors

Chemicals made by other organisms, or by drug companies, can act at any point in Figure 1.

| Point | Chemical effect | Result | Example |
|---|---|---|---|
| Receptor (1) | **mimics** the ligand and switches the receptor on | pathway activated | synthetic hormones |
| Receptor (1) | **blocks** the ligand-binding site without switching it on | pathway inhibited | 1-methylcyclopropene blocks ethylene receptors, so stored fruit ripens later; beta blocker drugs block receptors for epinephrine in the heart |
| Relay protein (3) | locks it in the active state | pathway activated, cannot switch off | cholera toxin keeps a G protein active in gut cells, so cAMP stays high and the cells pump out chloride ions and water: severe diarrhoea |
| Kinase (4) | blocks the enzyme's active site | pathway inhibited from that point on | some cancer drugs inhibit an overactive kinase |
| Enzyme that removes a second messenger | slows its removal | response lasts longer | predict it from the rule below |

The logic is always the same. Ask: **does the chemical make this component more or less active?** Then follow the effect downstream, step by step, to the response.

## Worked example 1: quorum sensing in a fictional bacterium

**Question.** A fictional marine bacterium, strain M, can glow. Researchers grew cultures to different densities and measured the light given out per cell (arbitrary units).

| Cell density / 10⁷ cells mL⁻¹ | 0.5 | 1 | 2 | 4 | 8 | 16 |
|---|---|---|---|---|---|---|
| Light per cell / a.u. | 1.0 | 1.1 | 1.2 | 1.5 | 38 | 41 |

<figure>
<svg viewBox="0 0 580 350" role="img" aria-labelledby="st43-f2-title st43-f2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="st43-f2-title">Light per cell against cell density for strain M</title>
<desc id="st43-f2-desc">Line graph. Horizontal axis: cell density, 0.5, 1, 2, 4, 8 and 16 times ten to the seven cells per millilitre, evenly spaced because each step doubles. Vertical axis: light per cell in arbitrary units, 0 to 40. The line stays almost flat near 1 from density 0.5 to 4, then jumps to 38 at density 8 and 41 at density 16.</desc>
<rect x="0" y="0" width="580" height="350" fill="#ffffff"/>
<line x1="70" y1="100" x2="500" y2="100" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="70" y1="150" x2="500" y2="150" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="70" y1="200" x2="500" y2="200" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="70" y1="250" x2="500" y2="250" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="70" y1="300" x2="510" y2="300" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="300" x2="70" y2="80" stroke="#1d2b44" stroke-width="2"/>
<text x="80" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">0.5</text>
<text x="160" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">1</text>
<text x="240" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<text x="320" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<text x="400" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">8</text>
<text x="480" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">16</text>
<text x="62" y="304" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="62" y="254" text-anchor="end" font-size="12" fill="#1d2b44">10</text>
<text x="62" y="204" text-anchor="end" font-size="12" fill="#1d2b44">20</text>
<text x="62" y="154" text-anchor="end" font-size="12" fill="#1d2b44">30</text>
<text x="62" y="104" text-anchor="end" font-size="12" fill="#1d2b44">40</text>
<text x="285" y="342" text-anchor="middle" font-size="13" fill="#1d2b44">Cell density / 10⁷ cells mL⁻¹ (each step doubles)</text>
<text x="22" y="190" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 22 190)">Light per cell / a.u.</text>
<polyline points="80,295 160,294.5 240,294 320,292.5 400,110 480,95" fill="none" stroke="#1d2b44" stroke-width="3"/>
<circle cx="80" cy="295" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="160" cy="294.5" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="240" cy="294" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="320" cy="292.5" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="400" cy="110" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="480" cy="95" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="230" font-size="12" fill="#1d2b44">threshold crossed</text>
<text x="250" y="245" font-size="12" fill="#1d2b44">between 4 and 8</text>
</svg>
<figcaption>Figure 2. Fictional data for strain M. The x-axis steps are evenly spaced because each one doubles the density.</figcaption>
</figure>

A second, fictional experiment gave these results:

| Culture | Density / 10⁷ cells mL⁻¹ | Light per cell / a.u. |
|---|---|---|
| Normal strain M + synthetic autoinducer | 1 | 36 |
| Mutant that cannot **make** autoinducer | 16 | 1.2 |
| Mutant that cannot make autoinducer + synthetic autoinducer | 16 | 39 |
| Mutant whose autoinducer **receptor** cannot bind it | 16 | 1.1 |

(a) Describe the trend in the first table. (b) Use both experiments to justify the claim: "Light production is switched on by the autoinducer reaching a threshold, not by crowding itself." (c) Name the kind of cellular response.

**(a) Trend.** From 0.5 to 4 × 10⁷ cells mL⁻¹ the density rises eightfold, but light per cell rises only from 1.0 to 1.5. Between 4 and 8 × 10⁷ it jumps from 1.5 to 38, about 25 times higher (38 ÷ 1.5 = 25.3). Above that it levels off (41 at 16 × 10⁷). The response is **switch-like**, with a threshold between 4 and 8 × 10⁷ cells mL⁻¹.

**(b) Claim, evidence, reasoning.**

1. **Evidence 1:** adding synthetic autoinducer to a low-density culture (1 × 10⁷) gave strong light (36), with no crowding.
2. **Evidence 2:** cells that cannot make autoinducer stay dark even at the highest density (1.2), but glow (39) when it is added.
3. **Evidence 3:** cells with a receptor that cannot bind autoinducer stay dark at high density (1.1).
4. **Reasoning:** light appears whenever enough autoinducer is present, whatever the density, and never when it is missing or cannot be detected. So crowding acts only by raising the autoinducer concentration. The receptor result shows the signal must bind its receptor to act, as in any signal transduction pathway.

**(c) Kind of response.** A change in **gene expression** (light-producing genes are switched on), which changes the population's **phenotype** (it glows).

**Check.** Is the claim proven? The data strongly support it for strain M under lab conditions. A single culture per condition is a weakness; repeats would make the conclusion more secure.

## Worked example 2: ordering a pathway with mutants and an inhibitor

**Question.** In a fictional cell line, growth factor G binds a receptor. The signal passes through relay protein R and then kinase K, and ends with cell division. Researchers measured the percentage of cells that divided in 24 hours.

| Cells | Without G / % | With G / % |
|---|---|---|
| Normal | 2 | 30 |
| Mutant 1: receptor's ligand-binding domain changed | 2 | 3 |
| Mutant 2: R stuck in its active state | 29 | 31 |
| Normal + kinase K inhibitor | 2 | 3 |
| Mutant 2 + kinase K inhibitor | 2 | 3 |

(a) By how many times does G increase division in normal cells? (b) Explain the results for mutants 1 and 2. (c) Justify the claim that K acts **after** R. (d) Predict the result for a mutant whose receptor intracellular domain is stuck "on", treated with the K inhibitor.

**(a)** 30 ÷ 2 = **15 times** (an increase of 28 percentage points).

**(b)** Mutant 1 is a **loss of function** at the start of the pathway. G cannot bind, so the receptor never changes shape and nothing downstream is switched on: division stays at the background level (3%). Mutant 2 is a **gain of function**. R is active without any signal, so everything after R is switched on and cells divide (29%) even without G. Adding G changes little, because the pathway is already fully on from R onwards.

**(c)** The K inhibitor blocks division in mutant 2 (2–3%), even though R is stuck on. If K came **before** R, an active R would not need K and cells would still divide. Because blocking K stops the signal from an active R, **K must be downstream of R**.

**(d)** A receptor stuck "on" is upstream of both R and K. Blocking K still stops the signal, so division would stay at about **2–3%**, with or without G.

**Interpretation.** Mutant 2 behaves like a cancer cell: it divides with no growth signal. The inhibitor result shows why drugs aimed at a step **downstream** of the faulty protein can still work.

## Common misconceptions

- **"Every response involves new genes being switched on."** Many fast responses only change the activity of proteins the cell already has.
- **"Apoptosis is what happens when a cell is damaged and bursts."** That uncontrolled death is different. Apoptosis is an ordered, signal-driven process that the cell carries out on itself.
- **"A mutation in the receptor only matters if it is in the binding site."** A change in the intracellular domain can stop it passing the signal on, or leave it permanently on.
- **"A mutation always stops the pathway."** Gain-of-function mutations do the opposite: the response happens with no signal.
- **"Adding more ligand will fix a receptor mutation."** If the ligand cannot bind, or the receptor cannot pass the signal on, extra ligand changes nothing.
- **"Quorum sensing means bacteria count each other."** Each cell detects only the concentration of a chemical; the concentration rises with population density.
- **"An inhibitor only affects the step it binds."** It affects every step after that point, because each step depends on the one before.

## Where this leads

Next, [Topic 4.4, Feedback](/advanced-course-resources/biology/4-4-feedback-study-guide/), shows how the response to a signal can loop back to reduce or increase the signal itself, which is how the body keeps conditions steady. Pathways that control growth and division return in Topic 4.6, where faults in them lead to cancer. Test yourself now with the [practice questions](/advanced-course-resources/biology/4-3-signal-transduction-pathways-practice/), then use the [revision notes](/advanced-course-resources/biology/4-3-signal-transduction-pathways-revision-notes/) and the [checklist](/advanced-course-resources/biology/4-3-signal-transduction-pathways-checklist/) to consolidate.
