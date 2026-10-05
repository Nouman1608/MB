---
resourceId: "mb-ap-bio-2.4-study-guide"
title: "Membrane Permeability: Study Guide (Biology 2.4)"
description: "Learn why the hydrophobic interior of a membrane lets some molecules through and blocks others, how cell walls protect cells from bursting, and how to test a hypothesis with error bars."
course: "biology"
unit: 2
topics: ["2.4"]
resourceType: "study-guide"
prerequisites:
  - "Phospholipid bilayer structure and the fluid mosaic model (Topic 2.3)"
  - "Polar, nonpolar and charged molecules; hydration shells around ions (Topic 1.1)"
  - "Mean and standard deviation"
prerequisiteResources: ["mb-ap-bio-2.3-study-guide"]
learningObjectives:
  - "Explain how the hydrophobic interior of a membrane makes it selectively permeable"
  - "Predict whether a substance crosses the bilayer freely, in small amounts or only through proteins, from its size, polarity and charge"
  - "Describe how cell walls of bacteria, archaea, fungi and plants give structure, act as a barrier to some substances and prevent osmotic lysis"
  - "Calculate a standard error and use mean ± 2 SE to decide whether to reject a null hypothesis"
skills: ["1", "3", "5", "6"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Standard error SE = s ÷ √n, where s is the sample standard deviation and n the number of values. Error bars of mean ± 2 SE show roughly a 95% confidence interval"
related: ["mb-ap-bio-2.4-revision-notes", "mb-ap-bio-2.4-practice", "mb-ap-bio-2.4-checklist"]
next: "mb-ap-bio-2.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "A membrane is selectively permeable because its interior is hydrophobic: the fatty acid tails block ions and polar molecules."
  - "Small nonpolar molecules (N₂, O₂, CO₂) cross freely. Small polar, uncharged molecules (H₂O, NH₃) cross in small amounts. Ions and large polar molecules need channel or transport proteins."
  - "Cell walls in bacteria, archaea, fungi and plants give shape, block some substances and stop the cell bursting when water rushes in (osmotic lysis)."
  - "To evaluate a hypothesis, state a null hypothesis of no difference. If the mean ± 2 SE error bars do not overlap, reject it; if they overlap, fail to reject it."
faqs:
  - question: "If water is polar, how does it cross the membrane at all?"
    answer: "Water molecules are very small and have no overall charge, so a few slip through the bilayer. The amount is small. Many cells also have channel proteins for water, which you will meet later in this unit."
  - question: "Is the cell wall selectively permeable like the membrane?"
    answer: "Not in the same way. A cell wall is a porous layer that lets water, gases and most small molecules through but holds back some larger ones. The plasma membrane underneath does the fine selecting."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## A boundary that chooses

A cell needs oxygen and glucose to come in, carbon dioxide to go out, and potassium ions to stay at a higher concentration inside than outside. If its boundary let everything through, the inside would quickly become the same as the outside, and the cell would die. If it let nothing through, the cell would starve.

The plasma membrane solves this by being **selectively permeable**: it lets some substances cross easily and holds others back. This topic explains how the structure of the membrane ([Topic 2.3](/advanced-course-resources/biology/2-3-plasma-membrane-study-guide/)) produces that choice, and what an extra outer layer, the cell wall, adds.

## Why the hydrophobic interior decides

Recall the bilayer: polar heads face the water on both sides, and the nonpolar fatty acid tails form a hydrophobic layer, roughly 3 to 4 nm thick, in the middle. To cross the membrane on its own, a molecule must pass through that oily middle.

- **Nonpolar molecules** mix easily with the tails, so they pass straight through.
- **Ions** carry a full charge. In water, each ion is surrounded by a hydration shell of water molecules ([Topic 1.1](/advanced-course-resources/biology/1-1-water-and-hydrogen-bonding-study-guide/)). To enter the tails, it would have to leave that shell and sit among nonpolar groups it cannot interact with. That is very unfavourable, so ions are effectively blocked.
- **Polar molecules** form hydrogen bonds with water. The larger they are, the more of these bonds they would have to give up, and the harder it is for them to cross. Large polar molecules such as glucose barely cross at all.

So the **nonpolar hydrocarbon tails** are the barrier. Selective permeability is a direct result of the membrane having a hydrophobic interior.

## Who crosses, and how

<figure>
<svg viewBox="0 0 720 420" role="img" aria-labelledby="pm-title pm-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pm-title">Which substances can cross a phospholipid bilayer</title>
<desc id="pm-desc">A phospholipid bilayer runs across the middle of the diagram, with circles for heads on its top and bottom edges and lines for tails in the middle. Five columns show different substances. Column 1, small nonpolar molecules O2, CO2 and N2: a thick solid arrow passes straight through the bilayer, labelled cross freely. Column 2, small polar uncharged molecules H2O and NH3: a thin dashed arrow passes through, labelled small amounts. Column 3, large polar molecules such as glucose: the arrow stops at the top heads and ends in a cross, labelled blocked by the bilayer. Column 4, ions such as Na+, K+ and Cl−: the arrow stops at the heads with a cross, labelled blocked by the bilayer. Column 5: a hatched protein spans the bilayer with a pore through it, and a thick solid arrow carries ions and glucose through the protein, labelled cross through channel or transport proteins.</desc>
<defs><pattern id="pm-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1.5"/></pattern>
<marker id="pm-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="720" height="420" fill="#ffffff"/>
<text x="12" y="22" font-size="14" font-weight="700" fill="#1d2b44">Outside the cell</text>
<text x="12" y="410" font-size="14" font-weight="700" fill="#1d2b44">Cytosol</text>
<line x1="17" y1="188" x2="17" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="17" y1="230" x2="17" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="23" y1="188" x2="23" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="23" y1="230" x2="23" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="20" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="20" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="37" y1="188" x2="37" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="37" y1="230" x2="37" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="43" y1="188" x2="43" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="43" y1="230" x2="43" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="40" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="40" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="57" y1="188" x2="57" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="57" y1="230" x2="57" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="63" y1="188" x2="63" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="63" y1="230" x2="63" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="60" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="60" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="77" y1="188" x2="77" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="77" y1="230" x2="77" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="83" y1="188" x2="83" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="83" y1="230" x2="83" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="80" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="80" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="97" y1="188" x2="97" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="97" y1="230" x2="97" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="103" y1="188" x2="103" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="103" y1="230" x2="103" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="100" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="100" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="117" y1="188" x2="117" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="117" y1="230" x2="117" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="123" y1="188" x2="123" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="123" y1="230" x2="123" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="120" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="120" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="137" y1="188" x2="137" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="137" y1="230" x2="137" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="143" y1="188" x2="143" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="143" y1="230" x2="143" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="140" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="140" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="157" y1="188" x2="157" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="157" y1="230" x2="157" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="163" y1="188" x2="163" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="163" y1="230" x2="163" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="160" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="160" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="177" y1="188" x2="177" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="177" y1="230" x2="177" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="183" y1="188" x2="183" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="183" y1="230" x2="183" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="180" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="180" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="197" y1="188" x2="197" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="197" y1="230" x2="197" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="203" y1="188" x2="203" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="203" y1="230" x2="203" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="200" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="200" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="217" y1="188" x2="217" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="217" y1="230" x2="217" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="223" y1="188" x2="223" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="223" y1="230" x2="223" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="220" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="220" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="237" y1="188" x2="237" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="237" y1="230" x2="237" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="243" y1="188" x2="243" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="243" y1="230" x2="243" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="240" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="240" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="257" y1="188" x2="257" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="257" y1="230" x2="257" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="263" y1="188" x2="263" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="263" y1="230" x2="263" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="260" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="260" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="277" y1="188" x2="277" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="277" y1="230" x2="277" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="283" y1="188" x2="283" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="283" y1="230" x2="283" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="280" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="280" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="297" y1="188" x2="297" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="297" y1="230" x2="297" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="303" y1="188" x2="303" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="303" y1="230" x2="303" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="300" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="300" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="317" y1="188" x2="317" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="317" y1="230" x2="317" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="323" y1="188" x2="323" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="323" y1="230" x2="323" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="320" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="320" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="337" y1="188" x2="337" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="337" y1="230" x2="337" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="343" y1="188" x2="343" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="343" y1="230" x2="343" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="340" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="340" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="357" y1="188" x2="357" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="357" y1="230" x2="357" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="363" y1="188" x2="363" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="363" y1="230" x2="363" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="360" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="360" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="377" y1="188" x2="377" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="377" y1="230" x2="377" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="383" y1="188" x2="383" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="383" y1="230" x2="383" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="380" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="380" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="397" y1="188" x2="397" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="397" y1="230" x2="397" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="403" y1="188" x2="403" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="403" y1="230" x2="403" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="400" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="400" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="417" y1="188" x2="417" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="417" y1="230" x2="417" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="423" y1="188" x2="423" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="423" y1="230" x2="423" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="420" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="420" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="437" y1="188" x2="437" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="437" y1="230" x2="437" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="443" y1="188" x2="443" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="443" y1="230" x2="443" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="440" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="440" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="457" y1="188" x2="457" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="457" y1="230" x2="457" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="463" y1="188" x2="463" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="463" y1="230" x2="463" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="460" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="460" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="477" y1="188" x2="477" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="477" y1="230" x2="477" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="483" y1="188" x2="483" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="483" y1="230" x2="483" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="480" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="480" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="497" y1="188" x2="497" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="497" y1="230" x2="497" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="503" y1="188" x2="503" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="503" y1="230" x2="503" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="500" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="500" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="517" y1="188" x2="517" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="517" y1="230" x2="517" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="523" y1="188" x2="523" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="523" y1="230" x2="523" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="520" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="520" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="537" y1="188" x2="537" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="537" y1="230" x2="537" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="543" y1="188" x2="543" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="543" y1="230" x2="543" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="540" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="540" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="557" y1="188" x2="557" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="557" y1="230" x2="557" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="563" y1="188" x2="563" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="563" y1="230" x2="563" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="560" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="560" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="577" y1="188" x2="577" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="577" y1="230" x2="577" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="583" y1="188" x2="583" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="583" y1="230" x2="583" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="580" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="580" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="657" y1="188" x2="657" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="657" y1="230" x2="657" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="663" y1="188" x2="663" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="663" y1="230" x2="663" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="660" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="660" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="677" y1="188" x2="677" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="677" y1="230" x2="677" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="683" y1="188" x2="683" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="683" y1="230" x2="683" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="680" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="680" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="697" y1="188" x2="697" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="697" y1="230" x2="697" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="703" y1="188" x2="703" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="703" y1="230" x2="703" y2="262" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="700" cy="180" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="700" cy="270" r="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="590" y="158" width="60" height="134" rx="18" fill="url(#pm-hatch)" stroke="#1d2b44" stroke-width="2.5"/>
<rect x="612" y="158" width="16" height="134" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="80" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">Small nonpolar</text>
<text x="80" y="62" text-anchor="middle" font-size="13" font-weight="400" fill="#1d2b44">O₂, CO₂, N₂</text>
<line x1="80" y1="105" x2="80" y2="330" stroke="#1d2b44" stroke-width="4" marker-end="url(#pm-arrow)"/>
<text x="80" y="352" text-anchor="middle" font-size="13" fill="#1d2b44">Cross freely</text>
<text x="210" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">Small polar,</text>
<text x="210" y="62" text-anchor="middle" font-size="13" font-weight="400" fill="#1d2b44">uncharged</text>
<text x="210" y="78" text-anchor="middle" font-size="13" font-weight="400" fill="#1d2b44">H₂O, NH₃</text>
<line x1="210" y1="105" x2="210" y2="330" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 5" marker-end="url(#pm-arrow)"/>
<text x="210" y="352" text-anchor="middle" font-size="13" fill="#1d2b44">Small amounts</text>
<text x="340" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">Large polar</text>
<text x="340" y="62" text-anchor="middle" font-size="13" font-weight="400" fill="#1d2b44">e.g. glucose</text>
<line x1="340" y1="105" x2="340" y2="158" stroke="#1d2b44" stroke-width="3"/>
<line x1="331" y1="149" x2="349" y2="167" stroke="#1d2b44" stroke-width="3"/>
<line x1="349" y1="149" x2="331" y2="167" stroke="#1d2b44" stroke-width="3"/>
<text x="340" y="352" text-anchor="middle" font-size="13" fill="#1d2b44">Blocked by</text>
<text x="340" y="367" text-anchor="middle" font-size="13" fill="#1d2b44">the bilayer</text>
<text x="465" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">Ions</text>
<text x="465" y="62" text-anchor="middle" font-size="13" font-weight="400" fill="#1d2b44">Na⁺, K⁺, Cl⁻</text>
<line x1="465" y1="105" x2="465" y2="158" stroke="#1d2b44" stroke-width="3"/>
<line x1="456" y1="149" x2="474" y2="167" stroke="#1d2b44" stroke-width="3"/>
<line x1="474" y1="149" x2="456" y2="167" stroke="#1d2b44" stroke-width="3"/>
<text x="465" y="352" text-anchor="middle" font-size="13" fill="#1d2b44">Blocked by</text>
<text x="465" y="367" text-anchor="middle" font-size="13" fill="#1d2b44">the bilayer</text>
<text x="620" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">Ions and large</text>
<text x="620" y="62" text-anchor="middle" font-size="13" font-weight="400" fill="#1d2b44">polar molecules</text>
<line x1="620" y1="105" x2="620" y2="330" stroke="#1d2b44" stroke-width="4" marker-end="url(#pm-arrow)"/>
<text x="620" y="352" text-anchor="middle" font-size="13" fill="#1d2b44">Cross through</text>
<text x="620" y="367" text-anchor="middle" font-size="13" fill="#1d2b44">channel or</text>
<text x="620" y="382" text-anchor="middle" font-size="13" fill="#1d2b44">transport proteins</text>
</svg>
<figcaption>Figure 1. Schematic. Solid thick arrow: crosses the bilayer freely. Thin dashed arrow: crosses in small amounts. Arrow ending in ✕: cannot cross the bilayer itself. Arrows point one way only for clarity; the direction of movement depends on concentrations on each side.</figcaption>
</figure>

| Type of substance | Examples | Crosses the bilayer itself? | Route |
|---|---|---|---|
| Small nonpolar | N₂, O₂, CO₂ | **Yes, freely** | straight through the tails |
| Small polar, uncharged | H₂O, NH₃ (ammonia) | **In small amounts** | slips through the tails slowly |
| Large polar | glucose, sucrose | **Hardly at all** | through transport proteins |
| Ions | Na⁺, K⁺, Cl⁻, H⁺ | **No** | through channel and transport proteins |

Three properties set the order: **charge** matters most (any charge blocks), then **polarity**, then **size**. A useful rule: the more a substance resembles the tails (small and nonpolar), the more easily it crosses. *Background:* larger nonpolar molecules, such as steroid hormones, can also pass through the bilayer, which is why their receptors can sit inside the cell.

Because hydrophilic substances need **embedded channel and transport proteins**, the cell controls their movement by choosing which proteins it puts in its membrane. A cell with no potassium channels cannot let K⁺ out, however large the concentration difference. You will study how these proteins work, and when they use energy, in the next topics of this unit.

## Cell walls: an extra layer for some cells

Bacteria, archaea, fungi and plants all have a **cell wall** outside the plasma membrane. Animal cells do not. The walls are made of different materials:

| Group | Main wall material |
|---|---|
| Bacteria | peptidoglycan (a polymer of sugars cross-linked by short chains of amino acids) |
| Archaea | varied materials, but not peptidoglycan |
| Fungi | chitin |
| Plants | cellulose |

A cell wall has three jobs:

1. **Structural boundary.** It is stiffer than the membrane, so it gives the cell a fixed shape and supports it. In plants, walls pushed on by the cell contents hold soft tissues upright.
2. **Permeability barrier for some substances.** The wall is porous. Water, gases, ions and small molecules pass through it easily, but the pores hold back some large molecules. It is a coarse filter; the membrane does the fine selecting.
3. **Protection from osmotic lysis.** When a cell sits in a more dilute solution than its cytoplasm, water moves in by osmosis (you will study this later in the unit). A cell with only a membrane swells and can burst; this bursting is **osmotic lysis**. A wall resists the swelling. The cell presses outwards against it, building up **turgor pressure**, and the wall pushes back, so no more water can enter and the cell does not burst.

This is why an animal cell, such as a red blood cell, bursts in pure water, but a plant cell in pure water becomes firm (turgid) instead. It also explains how the antibiotic **penicillin** kills growing bacteria: it stops them building peptidoglycan cross-links properly, so the wall weakens, water rushes in and the cells burst.

## Testing a hypothesis: the null hypothesis and error bars

Biologists often ask: "Is the difference between two groups real, or could it be chance?" The standard approach is:

1. State the **null hypothesis (H₀)**: there is **no difference** between the groups (the treatment has no effect).
2. State the **alternative hypothesis**: there is a difference.
3. For each group, calculate the **mean**, the **standard deviation (s)** and the **standard error (SE = s ÷ √n)**.
4. Draw error bars of **mean ± 2 SE**. These show roughly a 95% confidence interval for each mean.
5. Decide:
   - If the error bars **do not overlap**, the difference is unlikely to be due to chance: **reject the null hypothesis**.
   - If the error bars **overlap**, the data do not give strong enough evidence of a difference: **fail to reject the null hypothesis**.

Note the wording. You never "prove" or "accept" a hypothesis from one experiment. Failing to reject H₀ does not show the groups are equal; it shows the data cannot tell them apart.

## Worked example 1: predicting routes across the membrane

**Question.** In a fictional experiment, artificial vesicles (tiny hollow spheres of pure phospholipid bilayer, with no proteins) were placed in solutions of different substances. For each substance, researchers measured the percentage by which the concentration inside had moved towards the concentration outside after 30 minutes (100% = fully equalised). They repeated the test with vesicles containing a K⁺ channel protein, or a glucose transport protein.

| Vesicle type | Substance | Repeat 1 | Repeat 2 | Repeat 3 |
|---|---|---|---|---|
| no protein | K⁺ | 0.8 | 1.1 | 1.4 |
| with K⁺ channel | K⁺ | 96 | 98 | 97 |
| no protein | glucose | 1.6 | 2.2 | 1.9 |
| with glucose transport protein | glucose | 86 | 90 | 88 |

(a) Calculate the mean for each row.
(b) Predict the result for O₂ in vesicles with no protein, and explain.
(c) Explain the difference between the first two rows.

**(a) Means.**

1. K⁺, no protein: (0.8 + 1.1 + 1.4) ÷ 3 = 3.3 ÷ 3 = **1.1%**.
2. K⁺, with channel: (96 + 98 + 97) ÷ 3 = 291 ÷ 3 = **97%**.
3. Glucose, no protein: (1.6 + 2.2 + 1.9) ÷ 3 = 5.7 ÷ 3 = **1.9%**.
4. Glucose, with transport protein: (86 + 90 + 88) ÷ 3 = 264 ÷ 3 = **88%**.

**(b) Prediction for O₂.** Close to **100%**. O₂ is small and nonpolar, so it dissolves in the fatty acid tails and crosses the bilayer freely; no protein is needed.

**(c) Explanation.** K⁺ is an ion. Its charge and hydration shell keep it out of the hydrophobic interior, so almost none crosses the pure bilayer (about 1%). A K⁺ channel provides a hydrophilic pore through the protein, so the ions bypass the tails and the concentrations nearly equalise (97%, about 88 times as much). Glucose shows the same pattern: as a large polar molecule it needs a transport protein.

**Check.** The rows without proteins are both close to zero, and the rows with proteins are high, which matches the rule in the table above. The vesicles are a model: real membranes contain many other proteins, so a real cell may move K⁺ or glucose by more than one route.

## Worked example 2: does the cell wall prevent bursting?

**Question.** A student tested the hypothesis: "The cell wall protects yeast cells (a fungus) from osmotic lysis." She used three treatments, five repeats each, and counted the percentage of cells that burst in 10 minutes:

- intact yeast cells in distilled water;
- yeast cells whose walls had been removed with a wall-digesting enzyme, in distilled water;
- wall-removed cells in a sorbitol solution with about the same water concentration as the cytoplasm (so little water moves in).

| Treatment | Cells burst / % | Mean |
|---|---|---|
| wall intact, water | 2, 4, 3, 1, 5 | 3.0 |
| wall removed, water | 88, 93, 90, 85, 94 | 90.0 |
| wall removed, sorbitol | 4, 6, 3, 5, 7 | 5.0 |

(a) State a null hypothesis for comparing the first two treatments.
(b) Calculate the standard error and mean ± 2 SE for the first two treatments.
(c) Decide whether to reject the null hypothesis, and explain the role of the sorbitol treatment.

**(a) Null hypothesis.** There is no difference in the percentage of cells that burst in distilled water between yeast cells with and without a cell wall.

**(b) Calculation for "wall removed, water".**

1. Mean = 450 ÷ 5 = 90.0%.
2. Deviations from the mean: −2, 3, 0, −5, 4. Squares: 4, 9, 0, 25, 16. Sum = 54.
3. s = √(54 ÷ (5 − 1)) = √13.5 = 3.67%.
4. SE = 3.67 ÷ √5 = **1.64%**. 2 SE = 3.29%.
5. Interval: 90.0 ± 3.3, from **86.7% to 93.3%**.

**For "wall intact, water":** deviations −1, 1, 0, −2, 2; squares sum to 10; s = √(10 ÷ 4) = 1.58%; SE = 1.58 ÷ √5 = **0.71%**; interval 3.0 ± 1.4, from **1.6% to 4.4%**.

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="yb-title yb-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="yb-title">Percentage of yeast cells that burst, with error bars</title>
<desc id="yb-desc">Bar chart of mean percentage of cells burst after 10 minutes, scale 0 to 100. Wall intact in water, plain bar: mean 3, error bar from about 1.6 to 4.4. Wall removed in water, hatched bar: mean 90, error bar from about 86.7 to 93.3. Wall removed in sorbitol solution, dotted bar: mean 5, error bar from about 3.6 to 6.4. Error bars show the mean plus or minus 2 standard errors.</desc>
<defs><pattern id="yb-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1.5"/></pattern>
<pattern id="yb-dots" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r="1.6" fill="#1d2b44"/></pattern></defs>
<rect x="0" y="0" width="560" height="360" fill="#ffffff"/>
<line x1="80" y1="232.5" x2="520" y2="232.5" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="175.0" x2="520" y2="175.0" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="117.5" x2="520" y2="117.5" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="60.0" x2="520" y2="60.0" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="290" x2="520" y2="290" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="290" x2="80" y2="50" stroke="#1d2b44" stroke-width="2"/>
<text x="72" y="294.0" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="72" y="236.5" text-anchor="end" font-size="12" fill="#1d2b44">25</text>
<text x="72" y="179.0" text-anchor="end" font-size="12" fill="#1d2b44">50</text>
<text x="72" y="121.5" text-anchor="end" font-size="12" fill="#1d2b44">75</text>
<text x="72" y="64.0" text-anchor="end" font-size="12" fill="#1d2b44">100</text>
<text x="22" y="170" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 22 170)">Cells burst / %</text>
<rect x="120" y="283.1" width="80" height="6.9" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<line x1="160" y1="279.8" x2="160" y2="286.4" stroke="#1d2b44" stroke-width="2"/>
<line x1="150" y1="279.8" x2="170" y2="279.8" stroke="#1d2b44" stroke-width="2"/>
<line x1="150" y1="286.4" x2="170" y2="286.4" stroke="#1d2b44" stroke-width="2"/>
<text x="160" y="271.8" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">3</text>
<text x="160" y="310" text-anchor="middle" font-size="13" fill="#1d2b44">Wall intact,</text>
<text x="160" y="326" text-anchor="middle" font-size="13" fill="#1d2b44">water</text>
<rect x="260" y="83.0" width="80" height="207.0" fill="url(#yb-hatch)" stroke="#1d2b44" stroke-width="2"/>
<line x1="300" y1="75.4" x2="300" y2="90.6" stroke="#1d2b44" stroke-width="2"/>
<line x1="290" y1="75.4" x2="310" y2="75.4" stroke="#1d2b44" stroke-width="2"/>
<line x1="290" y1="90.6" x2="310" y2="90.6" stroke="#1d2b44" stroke-width="2"/>
<text x="300" y="69.0" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">90</text>
<text x="300" y="310" text-anchor="middle" font-size="13" fill="#1d2b44">Wall removed,</text>
<text x="300" y="326" text-anchor="middle" font-size="13" fill="#1d2b44">water</text>
<rect x="400" y="278.5" width="80" height="11.5" fill="url(#yb-dots)" stroke="#1d2b44" stroke-width="2"/>
<line x1="440" y1="275.2" x2="440" y2="281.8" stroke="#1d2b44" stroke-width="2"/>
<line x1="430" y1="275.2" x2="450" y2="275.2" stroke="#1d2b44" stroke-width="2"/>
<line x1="430" y1="281.8" x2="450" y2="281.8" stroke="#1d2b44" stroke-width="2"/>
<text x="440" y="267.2" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">5</text>
<text x="440" y="310" text-anchor="middle" font-size="13" fill="#1d2b44">Wall removed,</text>
<text x="440" y="326" text-anchor="middle" font-size="13" fill="#1d2b44">sorbitol</text>
</svg>
<figcaption>Figure 2. Fictional data from Worked example 2. Bars show means; error bars show mean ± 2 SE. Bar fills (plain, hatched, dotted) distinguish the three treatments.</figcaption>
</figure>

**(c) Decision.** The intervals (1.6–4.4% and 86.7–93.3%) are far apart and do not overlap, so we **reject the null hypothesis**. The data support the hypothesis that the wall protects yeast from bursting in water.

**Role of sorbitol.** Maybe removing the wall simply damages cells, so they burst whatever the solution. The sorbitol treatment tests this. Wall-removed cells in sorbitol burst only 5.0% of the time (interval 3.6–6.4%), which overlaps the intact cells' interval (1.6–4.4%). So we fail to reject a null hypothesis of no difference between those two treatments. Wall-removed cells survive when water does not rush in, which shows the bursting in distilled water was caused by water entering by osmosis, not by the enzyme treatment itself.

## Common misconceptions

- **"The membrane has holes that let small molecules through."** The bilayer itself has no pores. Small nonpolar molecules dissolve through the tails. Pores exist only inside channel proteins.
- **"Ions are blocked because they are too big."** A single Na⁺ ion is smaller than an O₂ molecule, yet O₂ crosses freely. Ions are blocked by their **charge** and the water shell that comes with it, which keep them out of the hydrophobic interior.
- **"Water cannot cross the bilayer because it is polar."** Water is small and uncharged, so it crosses in small amounts.
- **"Selectively permeable means the membrane decides like a gate-keeper with a mind."** It is just chemistry: what crosses depends on size, polarity and charge, and on which proteins are present.
- **"The cell wall controls what enters the cell."** The wall is porous and lets most small substances through. The membrane does the selecting.
- **"The cell wall stops water entering."** Water passes through the wall. The wall stops the cell **expanding** until it bursts.
- **"Overlapping error bars prove there is no difference."** They mean the data do not give strong enough evidence of a difference. We fail to reject the null hypothesis; we do not prove it.

## Where this leads

Ions and polar molecules need proteins to cross. Next you will see how substances move across membranes, with and without energy, in [membrane transport](/advanced-course-resources/biology/2-5-membrane-transport-study-guide/). Osmosis and turgor return when you study tonicity later in the unit. Test yourself with the [practice questions](/advanced-course-resources/biology/2-4-membrane-permeability-practice/), then use the [revision notes](/advanced-course-resources/biology/2-4-membrane-permeability-revision-notes/) and the [checklist](/advanced-course-resources/biology/2-4-membrane-permeability-checklist/) to consolidate.
