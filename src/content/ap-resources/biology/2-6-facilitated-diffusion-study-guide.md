---
resourceId: "mb-ap-bio-2.6-study-guide"
title: "Facilitated Diffusion: Study Guide (Biology 2.6)"
description: "Learn why ions and large polar molecules need channel or carrier proteins to cross a membrane, how ion movement polarizes membranes, and how aquaporins move large amounts of water."
course: "biology"
unit: 2
topics: ["2.6"]
resourceType: "study-guide"
prerequisites:
  - "The hydrophobic interior of the phospholipid bilayer (Topics 2.3 and 2.4)"
  - "Passive and active transport and concentration gradients (Topic 2.5)"
prerequisiteResources: ["mb-ap-bio-2.5-study-guide"]
learningObjectives:
  - "Explain how the size, polarity and charge of a molecule decide whether it needs a protein to cross the membrane"
  - "Compare channel proteins and carrier proteins and explain why both give passive transport"
  - "Explain why ions such as Na⁺ and K⁺ need channel proteins, and how their movement can polarize a membrane"
  - "Explain how aquaporins let large amounts of water cross membranes"
  - "Interpret data showing that facilitated diffusion levels off at high concentration"
  - "Predict the effect of blocking, adding or removing transport proteins on a cell or organism"
skills: ["1", "2", "5", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "No constants are needed. Round to the precision of the data"
related: ["mb-ap-bio-2.6-revision-notes", "mb-ap-bio-2.6-practice", "mb-ap-bio-2.6-checklist"]
next: "mb-ap-bio-2.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Facilitated diffusion is passive transport through a membrane protein: down the concentration gradient, with no energy input from the cell."
  - "Ions (such as Na⁺ and K⁺) and large polar molecules (such as glucose) cannot cross the hydrophobic core of the bilayer, so they need channel or carrier proteins."
  - "Channel proteins form a hydrophilic pore; carrier proteins bind a specific molecule and change shape. Both are specific."
  - "When ions move through channels they carry charge, so the membrane can become polarized: one side more negative than the other."
  - "Aquaporins are water channels that move large amounts of water quickly. Because each protein can only work so fast, the rate of facilitated diffusion levels off at high concentration."
faqs:
  - question: "If a protein is involved, why is facilitated diffusion not active transport?"
    answer: "Because the cell supplies no energy and the substance only moves down its gradient. The protein provides a route, not a push. Active transport needs a direct energy input and can move substances from low to high concentration."
  - question: "Can water cross a membrane without aquaporins?"
    answer: "Yes, but only slowly and in small amounts, because water is small and uncharged (Topic 2.4). Aquaporins let much more water cross much faster."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Structure decides the route

Whether a substance can cross a membrane on its own depends on its **structure**: its size, its polarity and whether it carries a charge. The centre of the phospholipid bilayer is made of nonpolar hydrocarbon tails. Anything that is charged or strongly polar is attracted to water and repelled by that hydrophobic layer.

| Type of substance | Examples | Crosses the bilayer on its own? | Route |
|---|---|---|---|
| Small, nonpolar | O₂, CO₂, N₂ | yes, freely | simple diffusion |
| Small, polar, uncharged | H₂O, NH₃ | slowly, in small amounts | simple diffusion; water mostly through aquaporins |
| Ions, any size | Na⁺, K⁺, Cl⁻, Ca²⁺ | no | channel proteins |
| Large, polar | glucose, amino acids | no | carrier proteins |

An ion such as Na⁺ is smaller than a water molecule, yet it cannot slip through the bilayer. Its charge attracts a shell of water molecules (a hydration shell, Topic 1.1), and pushing a charged particle into the nonpolar core would take far too much energy. Size alone does not decide; **charge and polarity matter more**.

**Facilitated diffusion** is the answer for these substances. It is the passive movement of a substance across a membrane **through a transport protein**, from high to low concentration, with **no energy input** from the cell. The protein provides a hydrophilic route; the concentration gradient provides the drive.

## Channel proteins and carrier proteins

There are two kinds of protein that carry out facilitated diffusion.

**Channel proteins** form a pore lined with hydrophilic (polar or charged) amino acids that runs right through the membrane. Ions or water molecules flow through it, usually in single file. Channels are very fast. They are also **specific**: the width of the pore and the charges lining it decide what can pass. A potassium channel, for example, lets K⁺ through but very few Na⁺ ions. Many channels are **gated**: they open or close in response to a signal, such as a change in voltage or the binding of a molecule. This lets a cell switch ion movement on and off.

**Carrier proteins** bind a specific molecule on one side of the membrane, change shape, and release it on the other side. They are slower than channels, because each carrier must change shape for every molecule (or small group of molecules) it moves. Glucose transporters are carrier proteins that move glucose into many cells, such as red blood cells, by facilitated diffusion.

<figure>
<svg viewBox="0 0 700 350" role="img" aria-labelledby="fd-title fd-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fd-title">Channel protein and carrier protein in a membrane</title>
<desc id="fd-desc">A horizontal band across the middle is the phospholipid bilayer; outside is above, the cytoplasm is below. Left: a channel protein drawn as two blocks with a gap between them. Four circles labelled K plus sit above the membrane and one below; an arrow runs down through the gap from the crowded side to the sparse side. Right: a carrier protein shown twice. In the first drawing a notch faces outward and holds a hexagon labelled glucose, with two more glucose hexagons above. An arrow labelled shape changes points to the second drawing, where the notch faces inward and the glucose hexagon is released below the membrane.</desc>
<rect x="0" y="0" width="700" height="350" fill="#ffffff"/>
<defs><marker id="fd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<text x="12" y="22" font-size="14" font-weight="600" fill="#1d2b44">Outside the cell</text>
<text x="12" y="342" font-size="14" font-weight="600" fill="#1d2b44">Inside the cell (cytoplasm)</text>
<rect x="10" y="130" width="680" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="110" y="112" width="25" height="76" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="155" y="112" width="25" height="76" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<line x1="145" y1="72" x2="145" y2="222" stroke="#1d2b44" stroke-width="3" marker-end="url(#fd-arrow)"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2"><circle cx="95" cy="60" r="12"/><circle cx="145" cy="46" r="12"/><circle cx="198" cy="64" r="12"/><circle cx="105" cy="96" r="12"/><circle cx="190" cy="222" r="12"/></g>
<g font-size="11" fill="#1d2b44" text-anchor="middle" font-weight="600"><text x="95" y="64">K⁺</text><text x="145" y="50">K⁺</text><text x="198" y="68">K⁺</text><text x="105" y="100">K⁺</text><text x="190" y="226">K⁺</text></g>
<path d="M350,112 L362,112 L380,150 L398,112 L410,112 L410,188 L350,188 Z" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<path d="M500,112 L560,112 L560,188 L548,188 L530,150 L512,188 L500,188 Z" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2">
<polygon points="370.0,60.0 365.0,68.7 355.0,68.7 350.0,60.0 355.0,51.3 365.0,51.3"/>
<polygon points="402.0,72.0 397.0,80.7 387.0,80.7 382.0,72.0 387.0,63.3 397.0,63.3"/>
<polygon points="390.0,128.0 385.0,136.7 375.0,136.7 370.0,128.0 375.0,119.3 385.0,119.3"/>
<polygon points="540.0,205.0 535.0,213.7 525.0,213.7 520.0,205.0 525.0,196.3 535.0,196.3"/>
</g>
<line x1="428" y1="100" x2="488" y2="100" stroke="#1d2b44" stroke-width="2" marker-end="url(#fd-arrow)"/>
<text x="460" y="88" text-anchor="middle" font-size="12" fill="#1d2b44">shape changes</text>
<text x="575" y="212" font-size="12" fill="#1d2b44">glucose (hexagon)</text>
<text x="300" y="60" font-size="12" fill="#1d2b44">glucose</text>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="145" y="262" font-weight="600">Channel protein</text><text x="145" y="278">hydrophilic pore: ions (here K⁺)</text><text x="145" y="294">or water flow straight through</text>
<text x="455" y="262" font-weight="600">Carrier protein</text><text x="455" y="278">binds a specific molecule, changes shape</text><text x="455" y="294">and releases it on the other side</text>
</g>
</svg>
<figcaption>Figure 1. Both proteins give passive transport: the arrow in each runs from the side with more particles to the side with fewer. Circles are K⁺ ions; hexagons are glucose molecules.</figcaption>
</figure>

## Ions, channels and polarized membranes

Ions such as **sodium (Na⁺)** and **potassium (K⁺)** can only cross a membrane through **channel proteins** (or through pumps, Topic 2.8). This has an important side effect. Every ion carries a charge, so when ions move through channels, **charge moves too**.

Take a cell with K⁺ more concentrated inside than outside. If its membrane has open K⁺ channels, K⁺ diffuses **out** down its gradient. The negative ions it was balancing, mostly large negatively charged molecules such as proteins, cannot follow. So the inside of the cell becomes **negative** compared with the outside. The membrane is now **polarized**: there is a difference in charge, a voltage, across it. In a typical nerve cell at rest, the inside is about 70 millivolts more negative than the outside.

Once a membrane is polarized, an ion's movement depends on **two** things: its concentration gradient and the charge across the membrane. As the inside becomes more negative, it starts to attract positive K⁺ back. Net movement of K⁺ slows and stops **before** the concentrations become equal. Together, these two influences make up the **electrochemical gradient** (developed in Topic 2.8).

If Na⁺ channels then open, Na⁺ rushes **in**, down both its concentration gradient and its charge gradient, and the inside becomes less negative. Opening and closing gated Na⁺ and K⁺ channels in this way is the basis of nerve impulses, which you meet later in the course.

## Large polar molecules: carriers and saturation

Glucose is polar and too large to cross the bilayer at a useful rate, so it moves through carrier proteins. The process is still passive: glucose only moves from where it is more concentrated to where it is less concentrated. Many cells keep their internal glucose low by converting it into other molecules as soon as it arrives. This keeps the gradient, so glucose keeps flowing in without any energy being spent on transport itself.

Because each carrier can only bind and move molecules at a certain speed, facilitated diffusion has a **maximum rate**. At low concentrations, adding more solute gives a big rise in rate. At high concentrations, almost every carrier is busy all the time, and adding more solute makes little difference. The rate **levels off** (the carriers are **saturated**). Simple diffusion through the bilayer does not level off in the same way: its rate keeps rising in proportion to the gradient.

<figure>
<svg viewBox="0 0 640 350" role="img" aria-labelledby="sat-title sat-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sat-title">Rate of uptake against outside concentration</title>
<desc id="sat-desc">Line graph. Horizontal axis: outside concentration in millimoles per litre, 0 to 32. Vertical axis: rate of uptake in arbitrary units, 0 to 12. Facilitated diffusion, a solid curve with circle markers, rises steeply at first through 2.4 at 1, 4.0 at 2, 6.0 at 4 and 8.0 at 8, then flattens through 9.6 at 16 to 10.7 at 32. A dotted horizontal line at 12 marks the maximum rate, when all carriers are busy. A dashed straight line from the origin to 9.6 at 32 shows simple diffusion for comparison; it does not level off.</desc>
<rect x="0" y="0" width="640" height="350" fill="#ffffff"/>
<line x1="70" y1="300" x2="464" y2="300" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="300" x2="70" y2="45" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="318">0</text><text x="166" y="318">8</text><text x="262" y="318">16</text><text x="358" y="318">24</text><text x="454" y="318">32</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="304">0</text><text x="62" y="224">4</text><text x="62" y="144">8</text><text x="62" y="64">12</text>
</g>
<text x="262" y="342" text-anchor="middle" font-size="14" fill="#1d2b44">Outside concentration / mmol L⁻¹</text>
<text x="20" y="180" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 20 180)">Rate of uptake / arbitrary units</text>
<line x1="70" y1="60" x2="454" y2="60" stroke="#1d2b44" stroke-width="2" stroke-dasharray="2 4"/>
<text x="80" y="52" font-size="12" fill="#1d2b44">maximum rate: all carriers busy (dotted)</text>
<polyline points="70.0,300.0 76.0,273.3 82.0,252.0 88.0,234.5 94.0,220.0 100.0,207.7 106.0,197.1 112.0,188.0 118.0,180.0 130.0,166.7 142.0,156.0 154.0,147.3 166.0,140.0 178.0,133.8 190.0,128.6 202.0,124.0 214.0,120.0 226.0,116.5 238.0,113.3 250.0,110.5 262.0,108.0 274.0,105.7 286.0,103.6 298.0,101.7 310.0,100.0 322.0,98.4 334.0,96.9 346.0,95.6 358.0,94.3 370.0,93.1 382.0,92.0 394.0,91.0 406.0,90.0 418.0,89.1 430.0,88.2 442.0,87.4 454.0,86.7" fill="none" stroke="#1d2b44" stroke-width="3"/>
<line x1="70" y1="300" x2="454" y2="108" stroke="#1d2b44" stroke-width="3" stroke-dasharray="9 6"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<circle cx="82" cy="252" r="5"/><circle cx="94" cy="220" r="5"/><circle cx="118" cy="180" r="5"/><circle cx="166" cy="140" r="5"/><circle cx="262" cy="108" r="5"/><circle cx="454" cy="86.7" r="5"/>
</g>
<g font-size="13" fill="#1d2b44">
<text x="470" y="84">Facilitated</text><text x="470" y="100">(solid, ○)</text>
<text x="470" y="124">Simple diffusion</text><text x="470" y="140">(dashed)</text>
</g>
</svg>
<figcaption>Figure 2. Model data. The circles are the facilitated diffusion values used in Worked example 1. The dashed line shows the shape expected for simple diffusion, which has no proteins to saturate.</figcaption>
</figure>

## Aquaporins: fast lanes for water

Water is small and uncharged, so a little of it crosses the bilayer directly (Topic 2.4). But many cells need to move **large quantities** of water quickly. They use **aquaporins**: channel proteins that let water molecules pass in single file, while keeping out ions.

- In the **kidney**, cells lining the collecting ducts can add aquaporins to their surface membrane when the body needs to save water. The hormone ADH (antidiuretic hormone) triggers this: vesicles carrying aquaporins fuse with the membrane by exocytosis (Topic 2.5). More water is then reabsorbed into the blood, and the urine becomes more concentrated.
- In **plants**, root cells use aquaporins to take in water from the soil quickly.

Water movement through aquaporins is still passive. It is osmosis through a protein, and its direction depends on the solute concentrations on each side (Topic 2.7). An aquaporin speeds water up; it never decides the direction.

## Comparing the routes

| Feature | Simple diffusion | Facilitated diffusion | Active transport (Topic 2.8) |
|---|---|---|---|
| Protein needed | no | yes: channel or carrier | yes: pump |
| Direction | down the gradient | down the gradient | can be against the gradient |
| Energy from the cell | none | none | direct input (ATP) |
| Levels off at high concentration? | no | yes (saturation) | yes |
| Typical substances | O₂, CO₂ | ions, glucose, water (aquaporins) | ions, some nutrients |

## Worked example 1: reading a saturation curve

**Question.** Fictional cells take up glucose only through carrier proteins. The table gives the rate of uptake at different outside glucose concentrations (arbitrary units; the same values appear as circles in Figure 2).

| Outside glucose / mmol L⁻¹ | 1 | 2 | 4 | 8 | 16 | 32 |
|---|---|---|---|---|---|---|
| Rate of uptake | 2.4 | 4.0 | 6.0 | 8.0 | 9.6 | 10.7 |

(a) Calculate the percentage increase in rate when the concentration doubles from 1 to 2 mmol L⁻¹, and from 16 to 32 mmol L⁻¹.
(b) Explain the difference.
(c) A mutation halves the number of carriers in the membrane. Predict the rate at 4 and at 32 mmol L⁻¹, and justify.

**(a) Calculations.**

1. From 1 to 2: (4.0 − 2.4) ÷ 2.4 × 100 = 1.6 ÷ 2.4 × 100 = **67%**.
2. From 16 to 32: (10.7 − 9.6) ÷ 9.6 × 100 = 1.1 ÷ 9.6 × 100 = **11%** (11.5% before rounding).

**(b) Explanation.** Both steps double the concentration, but the second gives a much smaller rise. At 1–2 mmol L⁻¹, most carriers are free at any moment, so more glucose means more carriers in use and a much faster rate. At 16–32 mmol L⁻¹, nearly all carriers are already busy. The rate is limited by **the number of carriers and how fast each works**, not by the glucose supply. The carriers are close to **saturation**: the rate at 32 mmol L⁻¹ is already 89% of the maximum of about 12.

**(c) Prediction.** Each carrier still works in the same way, so with half as many carriers the rate at every concentration should halve:

- at 4 mmol L⁻¹: 6.0 ÷ 2 = **3.0**
- at 32 mmol L⁻¹: 10.7 ÷ 2 ≈ **5.3**, with the maximum falling from about 12 to about 6.

**Check.** The answer separates the two limits. At low concentration, the glucose supply limits the rate. At high concentration, the number of carriers limits it. The prediction also keeps the process passive: fewer carriers slow uptake, but glucose still only moves down its gradient.

## Worked example 2: predicting the effect of blocking aquaporins

**Question.** A layer of fictional kidney collecting-duct cells is grown on a filter. Water flow across the layer is measured (µL cm⁻² h⁻¹) under a fixed difference in solute concentration.

| Condition | Water flow |
|---|---|
| No hormone | 2.0 |
| With ADH | 14.0 |
| With ADH and Compound B (blocks aquaporins) | 2.6 |

(a) By what factor does ADH increase water flow?
(b) Calculate the percentage decrease in flow when Compound B is added with ADH.
(c) Explain the results, and explain why flow does not fall to zero.
(d) Predict the effect on a person whose collecting-duct aquaporins do not work.

**(a)** 14.0 ÷ 2.0 = **7.0 times**.

**(b)** (14.0 − 2.6) ÷ 14.0 × 100 = 11.4 ÷ 14.0 × 100 = **81%** (81.4% before rounding).

**(c)** ADH causes vesicles containing aquaporins to fuse with the membrane, so the cells have more water channels. Water still moves only down its gradient, but much faster, because many more molecules can pass each second. Compound B blocks the aquaporins, so flow drops back close to the no-hormone value. It does not fall to zero because some water still crosses the phospholipid bilayer directly, and the cells may keep a few unblocked channels.

**(d)** Less water would be reabsorbed from the urine back into the blood. The person would produce **large volumes of dilute urine**, lose water quickly and feel very thirsty, with a risk of dehydration. Giving more ADH would not help, because the problem is the channel, not the signal. A rare inherited condition, nephrogenic diabetes insipidus, can arise in this way.

This is the reasoning pattern for "predict the effect of a disruption": name the component that changed, say what it normally does, follow the effect to the cell, then to the organism.

## Common misconceptions

- **"Facilitated diffusion uses energy because it uses a protein."** The protein gives a route, not a push. No ATP is used.
- **"Channel proteins pump ions."** Channels only let ions flow down their gradient. Pumps (Topic 2.8) use energy.
- **"Facilitated diffusion can move substances against their gradient if there are enough carriers."** More carriers only make movement down the gradient faster.
- **"Na⁺ is tiny, so it can pass between the lipids."** Its charge and hydration shell keep it out of the hydrophobic core.
- **"Water can only cross a membrane through aquaporins."** A small amount crosses the bilayer directly; aquaporins add a fast route.
- **"The rate of facilitated diffusion keeps rising as concentration rises."** It levels off when the proteins are saturated.
- **"Any channel lets any ion through."** Channels and carriers are specific to particular ions or molecules.
- **"Ion movement only changes concentrations."** Ions carry charge, so their movement can polarize the membrane.

## Where this leads

Aquaporins lead straight into [Topic 2.7, Tonicity and Osmoregulation](/advanced-course-resources/biology/2-7-tonicity-osmoregulation-study-guide/), where you work out which way water moves. Topic 2.8 explains the pumps that use ATP to build the ion gradients that channels let ions run down. If the difference between passive and active transport is not secure, re-read the [Topic 2.5 study guide](/advanced-course-resources/biology/2-5-membrane-transport-study-guide/). Then try the [practice questions](/advanced-course-resources/biology/2-6-facilitated-diffusion-practice/), and consolidate with the [revision notes](/advanced-course-resources/biology/2-6-facilitated-diffusion-revision-notes/) and the [checklist](/advanced-course-resources/biology/2-6-facilitated-diffusion-checklist/).
