---
resourceId: "mb-ap-bio-2.8-study-guide"
title: "Mechanisms of Transport: Study Guide (Biology 2.8)"
description: "Learn how cells use membrane proteins and ATP to move ions against their gradients, how the sodium–potassium pump works, and how pumps build electrochemical gradients and membrane potential."
course: "biology"
unit: 2
topics: ["2.8"]
resourceType: "study-guide"
prerequisites:
  - "Passive transport, facilitated diffusion and channel proteins (Topics 2.5–2.6)"
  - "ATP as the cell's energy carrier and proteins changing shape (Topic 1.7)"
prerequisiteResources: ["mb-ap-bio-2.7-study-guide"]
learningObjectives:
  - "Compare simple diffusion, facilitated diffusion and active transport by energy use, direction and the proteins involved"
  - "Explain why active transport needs membrane proteins and a direct input of metabolic energy such as ATP"
  - "Describe the steps of the sodium–potassium pump cycle and its 3 Na⁺ : 2 K⁺ : 1 ATP ratio"
  - "Explain what an electrochemical gradient is and how the pump helps maintain the membrane potential"
  - "Use pump stoichiometry to calculate ion movement and ATP use"
  - "Predict the direction of passive ion movement from the concentration and electrical parts of an electrochemical gradient"
skills: ["1", "2", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Sodium–potassium pump: 3 Na⁺ out and 2 K⁺ in for each ATP hydrolysed. Large numbers in standard form, to 2 or 3 significant figures"
related: ["mb-ap-bio-2.8-revision-notes", "mb-ap-bio-2.8-practice", "mb-ap-bio-2.8-checklist"]
next: "mb-ap-bio-2.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Active transport moves substances using a direct input of metabolic energy, usually ATP. It often moves ions against their concentration gradient, from low to high concentration."
  - "Active transport always needs a membrane protein (a pump). The pump is specific and changes shape as it works."
  - "The sodium–potassium pump moves 3 Na⁺ out and 2 K⁺ in for every ATP. This keeps Na⁺ high outside and K⁺ high inside."
  - "An electrochemical gradient combines a concentration difference and a charge difference. The pump moves one net positive charge out per cycle, helping keep the inside of the cell negative (the membrane potential)."
  - "Stop the ATP supply and the pumps stop: gradients run down as ions leak back by passive transport."
faqs:
  - question: "Does active transport always move substances against their gradient?"
    answer: "Not always, but often. What defines active transport is the direct use of metabolic energy by a membrane protein. In some cases this energy is used to move a substance from low to high concentration, which passive transport can never do."
  - question: "Why does the cell spend so much ATP on pumping ions?"
    answer: "The gradients the pumps build are a store of energy and information. Cells use them to control volume, to send nerve signals, and to drive the uptake of other substances. Many cells spend a large share of their ATP on the sodium–potassium pump alone."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Moving things the "wrong" way

Diffusion always runs downhill: from high concentration to low concentration, until the two sides are equal (Topics 2.5 and 2.6). But living cells are full of ions at concentrations very different from their surroundings. A typical animal cell has far more potassium ions inside than outside, and far fewer sodium ions. Diffusion alone would erase these differences. So cells must be doing work to keep them. That work is **active transport**.

## Three ways across the membrane

| Feature | Simple diffusion | Facilitated diffusion | Active transport |
|---|---|---|---|
| Direction | down the concentration gradient | down the gradient | can be against the gradient (low → high) |
| Energy | none (passive) | none (passive) | **direct input of metabolic energy**, usually ATP |
| Protein needed? | no; crosses the bilayer | yes: a channel or carrier | **yes: a pump (carrier protein)** |
| Typical substances | O₂, CO₂, other small nonpolar molecules | ions through channels; glucose; water through aquaporins | Na⁺, K⁺, H⁺, Ca²⁺ |
| Stops when | concentrations are equal | concentrations are equal | the energy supply stops |

Two features define active transport. First, **a membrane protein is necessary**. Ions are charged and cannot cross the hydrophobic interior of the bilayer, and only a protein can couple energy to their movement. Second, **energy is put in directly**, usually by breaking down ATP. Large particles moved by endocytosis and exocytosis also need energy (Topic 2.5), but those processes use vesicles, not pumps.

## How a pump works

A pump is a carrier protein that spans the membrane. It binds particular ions on one side, changes shape, and releases them on the other side. ATP provides the energy for the shape change. The pump is **specific**: its binding sites fit particular ions, just as an enzyme's active site fits its substrate. It is also **saturable**: when every pump is working at its top speed, adding more of the ion it carries does not increase the rate.

### The sodium–potassium pump

The best-known pump is the **sodium–potassium pump** (Na⁺/K⁺ pump). It is also an enzyme: it hydrolyses ATP, so it is called an **ATPase**. One cycle runs like this:

1. With the pump open to the inside of the cell, **three Na⁺** ions bind to it.
2. Binding triggers the pump to split **ATP** into ADP. The released phosphate group attaches to the pump (the pump is **phosphorylated**).
3. Phosphorylation changes the pump's shape. It now opens to the outside, and its grip on Na⁺ weakens, so the three Na⁺ are **released outside**.
4. In this shape, **two K⁺** ions from outside bind.
5. K⁺ binding causes the phosphate to be released. The pump returns to its original shape, open to the inside.
6. The two K⁺ are **released inside**. The pump is ready to bind Na⁺ again.

**Net result per cycle: 3 Na⁺ out, 2 K⁺ in, 1 ATP used.** Both ions move against their concentration gradients.

<figure>
<svg viewBox="0 0 680 400" role="img" aria-labelledby="nak-title nak-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="nak-title">The sodium–potassium pump in the plasma membrane</title>
<desc id="nak-desc">A horizontal membrane drawn as a double band separates the outside of the cell, at the top, from the cytoplasm, at the bottom. A pump protein spans the membrane in the centre. On the left, an arrow points upward through the pump carrying three circles labelled Na plus, from inside to outside. On the right, an arrow points downward carrying two squares labelled K plus, from outside to inside. Below the pump, inside the cell, ATP becomes ADP plus phosphate. Labels at the top right: outside, sodium high at about 145 millimolar, potassium low at about 4 millimolar, relatively positive. Labels at the bottom: inside, sodium low at about 12 millimolar, potassium high at about 140 millimolar, negative, about minus 70 millivolts.</desc>
<defs>
<marker id="nak-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker>
</defs>
<rect x="0" y="0" width="680" height="400" fill="#ffffff"/>
<text x="460" y="30" font-size="15" font-weight="700" fill="#1d2b44">Outside the cell</text>
<text x="460" y="50" font-size="13" fill="#1d2b44">Na⁺ high (about 145 mM)</text>
<text x="460" y="68" font-size="13" fill="#1d2b44">K⁺ low (about 4 mM)</text>
<text x="460" y="86" font-size="13" fill="#1d2b44">charge: relatively positive (+)</text>
<rect x="0" y="160" width="680" height="16" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="0" y="176" width="680" height="16" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<text x="600" y="210" text-anchor="middle" font-size="12" fill="#1d2b44">phospholipid bilayer</text>
<rect x="270" y="120" width="140" height="112" rx="26" fill="#ffffff" stroke="#1d2b44" stroke-width="3"/>
<text x="342" y="172" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">Na⁺/K⁺</text>
<text x="342" y="190" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">pump</text>
<line x1="298" y1="290" x2="298" y2="92" stroke="#1d2b44" stroke-width="3" marker-end="url(#nak-arrow)"/>
<circle cx="262" cy="100" r="15" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="262" y="105" text-anchor="middle" font-size="11" font-weight="700" fill="#1d2b44">Na⁺</text>
<circle cx="262" cy="68" r="15" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="262" y="73" text-anchor="middle" font-size="11" font-weight="700" fill="#1d2b44">Na⁺</text>
<circle cx="262" cy="36" r="15" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="262" y="41" text-anchor="middle" font-size="11" font-weight="700" fill="#1d2b44">Na⁺</text>
<text x="160" y="60" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">3 Na⁺ out</text>
<text x="160" y="78" text-anchor="middle" font-size="12" fill="#1d2b44">(up the Na⁺ gradient)</text>
<line x1="386" y1="48" x2="386" y2="270" stroke="#1d2b44" stroke-width="3" marker-end="url(#nak-arrow)"/>
<rect x="400" y="242" width="30" height="30" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="415" y="262" text-anchor="middle" font-size="11" font-weight="700" fill="#1d2b44">K⁺</text>
<rect x="400" y="278" width="30" height="30" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="415" y="298" text-anchor="middle" font-size="11" font-weight="700" fill="#1d2b44">K⁺</text>
<text x="500" y="270" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">2 K⁺ in</text>
<text x="500" y="288" text-anchor="middle" font-size="12" fill="#1d2b44">(up the K⁺ gradient)</text>
<text x="150" y="250" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">ATP → ADP + Pᵢ</text>
<text x="150" y="268" text-anchor="middle" font-size="12" fill="#1d2b44">energy for the shape change</text>
<line x1="215" y1="244" x2="276" y2="222" stroke="#1d2b44" stroke-width="1.5"/>
<text x="20" y="340" font-size="15" font-weight="700" fill="#1d2b44">Inside the cell (cytoplasm)</text>
<text x="20" y="360" font-size="13" fill="#1d2b44">Na⁺ low (about 12 mM); K⁺ high (about 140 mM)</text>
<text x="20" y="378" font-size="13" fill="#1d2b44">charge: negative (about −70 mV relative to outside)</text>
</svg>
<figcaption>Figure 1. One pump cycle moves three Na⁺ (circles) out and two K⁺ (squares) in, using one ATP. Concentrations are typical approximate values for a mammalian cell.</figcaption>
</figure>

## Electrochemical gradients and membrane potential

An ion feels two "pushes" across a membrane:

- a **concentration gradient** (chemical part): it tends to diffuse from high to low concentration;
- an **electrical gradient** (charge part): opposite charges attract, so a positive ion is drawn toward a negative region.

Together these make an **electrochemical gradient**. For Na⁺, both parts point the same way: Na⁺ is more concentrated outside, and the inside is negative, so Na⁺ is strongly drawn in whenever a channel opens.

The voltage across the membrane is the **membrane potential**. In many animal cells at rest, the inside is about **−70 mV** compared with the outside. The membrane is **polarized** (Topic 2.6). The Na⁺/K⁺ pump helps maintain this in two ways:

1. **Directly.** Each cycle moves three positive charges out but only two back in: **one net positive charge leaves** per ATP. This makes the inside slightly more negative.
2. **By maintaining the ion gradients.** The pump keeps K⁺ high inside and Na⁺ high outside. *Background, beyond this topic:* most of the resting potential actually comes from K⁺ leaking out through open K⁺ channels, which carries positive charge out. That leak only works because the pump keeps building the K⁺ gradient.

Pumps are not limited to Na⁺ and K⁺. **Proton pumps** (H⁺-ATPases) move H⁺ out of plant cells and into lysosomes, keeping the lysosome interior acidic. **Calcium pumps** keep Ca²⁺ in the cytoplasm very low, so that a small release of Ca²⁺ can act as a signal.

*Background, beyond this topic:* gradients store energy, like water behind a dam. Some carrier proteins let Na⁺ or H⁺ flow back down its gradient and use that energy to carry another substance, such as glucose, up its own gradient. This is called cotransport. You will meet the use of H⁺ gradients again in cellular respiration and photosynthesis.

## Worked example 1: an ATP budget for ion pumping

**Question.** A model animal cell has 1.2 × 10⁶ sodium–potassium pumps, each completing 100 cycles per second. The cell makes 4.0 × 10⁸ ATP molecules per second. All values are fictional. Calculate (a) the number of Na⁺ and K⁺ ions moved per second, (b) the ATP used per second and the percentage of the cell's ATP this represents, and (c) the net number of positive charges moved out per second.

1. Cycles per second for the whole cell: 1.2 × 10⁶ pumps × 100 s⁻¹ = **1.2 × 10⁸ cycles s⁻¹**.
2. **(a)** Na⁺ out: 3 × 1.2 × 10⁸ = **3.6 × 10⁸ ions s⁻¹**. K⁺ in: 2 × 1.2 × 10⁸ = **2.4 × 10⁸ ions s⁻¹**.
3. **(b)** One ATP per cycle, so ATP used = **1.2 × 10⁸ ATP s⁻¹**. Percentage: 1.2 × 10⁸ ÷ 4.0 × 10⁸ × 100 = **30%**.
4. **(c)** Net charge out = 3.6 × 10⁸ − 2.4 × 10⁸ = **1.2 × 10⁸ positive charges s⁻¹**, one per cycle.

**Check.** The ratio Na⁺ : K⁺ : ATP = 3.6 : 2.4 : 1.2 = 3 : 2 : 1, as it should be.

**Interpretation.** Nearly a third of this model cell's ATP goes on one pump. That is realistic: many real cells spend a large share of their ATP on ion pumping, and nerve cells spend more. If a poison cut ATP production, the pumps would slow at once, and the gradients would start to run down as Na⁺ and K⁺ leaked back through channels. Membrane potential would shrink, and the cell would gain Na⁺, and with it water (Topic 2.7), and begin to swell.

## Worked example 2: which way will each ion leak?

**Question.** The table gives typical approximate concentrations for a resting mammalian cell with a membrane potential of −70 mV (inside negative).

| Ion | Inside / mM | Outside / mM |
|---|---|---|
| Na⁺ | 12 | 145 |
| K⁺ | 140 | 4 |

(a) Calculate the outside : inside ratio for Na⁺ and the inside : outside ratio for K⁺.
(b) For each ion, state the direction of the concentration push and of the electrical push, and predict which way the ion moves when its channels open.
(c) In one second, 3.0 × 10⁶ Na⁺ ions leak into the cell. How many pump cycles, and how many ATP, are needed to return them? How many K⁺ does this bring in?

**(a) Ratios.**

1. Na⁺: 145 ÷ 12 = **12** (12.1): about twelve times more concentrated outside.
2. K⁺: 140 ÷ 4 = **35**: thirty-five times more concentrated inside.

**(b) The two pushes.**

| Ion | Concentration push | Electrical push (inside negative) | Net passive movement through open channels |
|---|---|---|---|
| Na⁺ | inward (high outside) | inward (positive ion drawn to negative inside) | **strongly inward**: both pushes agree |
| K⁺ | outward (high inside) | inward (positive ion held by negative inside) | **outward** at rest: the concentration push is the larger of the two |

So the two ions leak in opposite directions. Na⁺ leaks in and K⁺ leaks out, and each leak runs its own gradient down. Passive transport can never rebuild these gradients; only a pump using ATP can move the ions back.

**(c) Paying back the leak.**

1. Each pump cycle removes 3 Na⁺. Cycles needed = 3.0 × 10⁶ ÷ 3 = **1.0 × 10⁶ cycles**.
2. One ATP per cycle: **1.0 × 10⁶ ATP**.
3. Two K⁺ per cycle: 2 × 1.0 × 10⁶ = **2.0 × 10⁶ K⁺** brought in, which also replaces K⁺ that has leaked out.

**Check.** Na⁺ : K⁺ : ATP = 3.0 × 10⁶ : 2.0 × 10⁶ : 1.0 × 10⁶ = 3 : 2 : 1.

**Interpretation.** A steady gradient is a balance, not a fixed state. Ions leak through channels all the time, and pumps move them back all the time. That is why a resting cell that is doing no obvious work still uses ATP. It also explains why ion gradients are useful: when a cell opens Na⁺ channels on purpose, Na⁺ rushes in very fast, driven by both pushes. Nerve and muscle cells use this to send signals, which you will meet later in the course.

## Common misconceptions

- **"Active transport means moving against the gradient."** The defining feature is the direct use of metabolic energy by a membrane protein. Moving from low to high concentration is what it makes possible, not its definition.
- **"Facilitated diffusion uses energy because it uses a protein."** Channels and carriers in facilitated diffusion are passive. Only pumps couple movement to ATP.
- **"The pump swaps Na⁺ and K⁺ one for one."** It moves three Na⁺ out and two K⁺ in, so one net positive charge leaves per cycle.
- **"ATP is pushed through the membrane with the ions."** ATP stays inside. It transfers a phosphate to the pump, and that changes the pump's shape.
- **"Ions can cross the bilayer if they are small enough."** Even small ions are charged and are repelled by the hydrophobic core. They need channels or pumps.
- **"Once the gradients are built, the pump can stop."** Ions leak back all the time. The pump must keep working to maintain the gradients, which is why cells keep spending ATP on it.
- **"The membrane potential is caused entirely by the pump."** The pump contributes directly and keeps the gradients in place, but much of the resting potential comes from K⁺ leaking out through channels.

## Where this leads

Topic 2.9, [Cell Compartmentalization](/advanced-course-resources/biology/2-9-cell-compartmentalization-study-guide/), shows how internal membranes, each with their own pumps and channels, separate reactions inside eukaryotic cells. Ion gradients return in cell signalling and in the nervous system, and H⁺ gradients drive ATP synthesis in Unit 3. Look back at [Tonicity and Osmoregulation](/advanced-course-resources/biology/2-7-tonicity-osmoregulation-study-guide/) to see why pumping solutes also controls water. Now try the [practice questions](/advanced-course-resources/biology/2-8-mechanisms-transport-practice/), then use the [revision notes](/advanced-course-resources/biology/2-8-mechanisms-transport-revision-notes/) and the [checklist](/advanced-course-resources/biology/2-8-mechanisms-transport-checklist/) to consolidate.
