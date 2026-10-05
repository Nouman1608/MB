---
resourceId: "mb-ap-bio-3.1-study-guide"
title: "Enzymes: Study Guide (Biology 3.1)"
description: "Learn how enzymes speed up reactions by lowering activation energy, why a substrate must match the active site in shape and charge, and how to measure and compare reaction rates."
course: "biology"
unit: 3
topics: ["3.1"]
resourceType: "study-guide"
prerequisites:
  - "Protein structure: R groups and the tertiary fold that gives a protein its shape (Topic 1.7)"
  - "Hydrogen bonds and ionic attractions between charged groups (Topics 1.1 and 1.7)"
prerequisiteResources: ["mb-ap-bio-2.10-study-guide"]
learningObjectives:
  - "Explain that enzymes are protein catalysts that speed up reactions in cells by lowering the activation energy"
  - "Read an energy profile and show that an enzyme changes the activation energy but not the overall free energy change"
  - "Explain why a substrate must be compatible with the active site in both shape and charge, using the enzyme–substrate complex model"
  - "Calculate a reaction rate from product–time data and explain why the rate falls as substrate is used up"
  - "Identify the independent and dependent variables in an enzyme experiment and justify negative and positive controls"
skills: ["1", "3", "5"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "No constants are needed. Rates are change in amount divided by time; keep the units of the data and round to 2 or 3 significant figures"
related: ["mb-ap-bio-3.1-revision-notes", "mb-ap-bio-3.1-practice", "mb-ap-bio-3.1-checklist"]
next: "mb-ap-bio-3.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Enzymes are proteins that act as biological catalysts. They make reactions in cells happen far faster by lowering the activation energy."
  - "An enzyme does not change the free energy change (ΔG) of a reaction, does not supply energy and is not used up. It is released unchanged and used again."
  - "A substrate binds only if its shape and its charges fit the active site. Substrate plus enzyme forms an enzyme–substrate complex, which then releases the products."
  - "Because a cell controls which enzymes it makes and when they are active, enzymes regulate which reactions happen and how fast."
  - "Rate = change in amount of product (or substrate) ÷ time. The initial rate is measured at the start, before substrate runs low."
faqs:
  - question: "Are all enzymes proteins?"
    answer: "For this course, yes: enzymes are treated as protein catalysts. As background, a few RNA molecules (ribozymes) can also catalyse reactions, for example in the ribosome, but these are not what exam questions on enzymes are about."
  - question: "Why do enzyme names often end in -ase?"
    answer: "It is a naming habit, not a rule. Many names describe the substrate or the reaction: lactase acts on lactose, and amylase acts on starch. Some older names, such as pepsin, do not follow the pattern."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Why cells need catalysts

Your cells carry out thousands of chemical reactions every second. They break down food molecules, build proteins and copy DNA. Most of these reactions are **energetically possible** at body temperature, but on their own they would happen far too slowly to keep a cell alive. A sugar cube does not break down into carbon dioxide and water while it sits on a table, even though that reaction releases energy.

A **catalyst** is a substance that speeds up a reaction without being used up. **Enzymes** are the catalysts of living things. They are **proteins**, and each one catalyses one reaction, or a small group of very similar reactions. This topic explains *how* they speed reactions up, *why* each enzyme is so specific, and how you measure their effect.

## Activation energy: the barrier every reaction must cross

For reactant molecules to change into products, some of their bonds must be stretched and broken before new bonds can form. That needs an input of energy at the start, even if the reaction releases more energy overall. This starting "energy hill" is the **activation energy** (Eₐ).

At body temperature only a tiny fraction of collisions between molecules carry enough energy to get over a high hill. Most collisions fail, and the reaction is slow.

<figure>
<svg viewBox="0 0 700 360" role="img" aria-labelledby="ea31-title ea31-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ea31-title">Energy profile of a reaction with and without an enzyme</title>
<desc id="ea31-desc">Graph of free energy against progress of reaction. Both curves start at the same reactant level and end at the same, lower product level. The solid curve, without enzyme, rises to a tall peak. The dashed curve, with enzyme, rises to a much lower peak. A long arrow from the reactant level to the tall peak is labelled activation energy without enzyme. A shorter arrow to the low peak is labelled activation energy with enzyme. A small downward arrow from reactant level to product level is labelled free energy change, the same for both.</desc>
<defs><marker id="ea31-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="700" height="360" fill="#ffffff"/>
<line x1="80" y1="300" x2="640" y2="300" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="300" x2="80" y2="30" stroke="#1d2b44" stroke-width="2"/>
<text x="360" y="330" text-anchor="middle" font-size="14" fill="#1d2b44">Progress of reaction</text>
<text x="30" y="165" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 30 165)">Free energy</text>
<line x1="150" y1="220" x2="600" y2="220" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<line x1="270" y1="60" x2="600" y2="60" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<line x1="270" y1="160" x2="490" y2="160" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<path d="M80,220 L150,220 C220,220 230,60 270,60 C310,60 320,260 390,260 L470,260" fill="none" stroke="#1d2b44" stroke-width="3"/>
<path d="M150,220 C220,220 230,160 270,160 C310,160 320,260 390,260" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="9 6"/>
<line x1="580" y1="218" x2="580" y2="63" stroke="#1d2b44" stroke-width="2" marker-start="url(#ea31-arr)" marker-end="url(#ea31-arr)"/>
<text x="588" y="130" font-size="12" font-weight="600" fill="#1d2b44">Activation</text>
<text x="588" y="145" font-size="12" font-weight="600" fill="#1d2b44">energy without</text>
<text x="588" y="160" font-size="12" font-weight="600" fill="#1d2b44">enzyme</text>
<line x1="480" y1="218" x2="480" y2="163" stroke="#1d2b44" stroke-width="2" marker-start="url(#ea31-arr)" marker-end="url(#ea31-arr)"/>
<text x="488" y="180" font-size="12" font-weight="600" fill="#1d2b44">Activation</text>
<text x="488" y="195" font-size="12" font-weight="600" fill="#1d2b44">energy with</text>
<text x="488" y="210" font-size="12" font-weight="600" fill="#1d2b44">enzyme</text>
<line x1="430" y1="222" x2="430" y2="257" stroke="#1d2b44" stroke-width="2" marker-end="url(#ea31-arr)"/>
<text x="438" y="250" font-size="12" fill="#1d2b44">ΔG: the same for both</text>
<text x="86" y="210" font-size="12" fill="#1d2b44">Reactants</text>
<text x="395" y="282" font-size="12" fill="#1d2b44">Products</text>
<line x1="95" y1="256" x2="130" y2="256" stroke="#1d2b44" stroke-width="3"/>
<text x="138" y="260" font-size="12" fill="#1d2b44">Without enzyme (solid)</text>
<line x1="95" y1="278" x2="130" y2="278" stroke="#1d2b44" stroke-width="3" stroke-dasharray="9 6"/>
<text x="138" y="282" font-size="12" fill="#1d2b44">With enzyme (dashed)</text>
</svg>
<figcaption>Figure 1. Model energy profile. The enzyme lowers the activation energy (here from 80 to 30 kJ mol⁻¹), so far more collisions succeed each second. The start and end levels do not move: the free energy change, ΔG (here −20 kJ mol⁻¹), is the same with or without the enzyme.</figcaption>
</figure>

**Reading Figure 1.**

- The **height of the hill** above the reactants is the activation energy. With the enzyme, the hill is much lower (in this model, 30 kJ mol⁻¹ instead of 80 kJ mol⁻¹, a drop of 50 kJ mol⁻¹).
- The **difference between the start and the end** is the free energy change, ΔG. Here the products have less free energy than the reactants (ΔG is negative), so the reaction can happen on its own; it is just slow without help.
- ΔG is the **same on both curves**. An enzyme changes the route, not the starting point or the destination. It cannot make an unfavourable reaction favourable, and it does not supply energy.

So an enzyme speeds up a reaction by **lowering the activation energy**. A much larger fraction of encounters between substrate and enzyme now lead to products, and the reaction runs millions of times faster in many cases.

## Enzyme structure: the active site

An enzyme is a large protein folded into a precise three-dimensional shape (its tertiary structure, and sometimes quaternary structure, from Topic 1.7). Somewhere on its surface is a small pocket or groove called the **active site**. This is where the reactant molecule, called the **substrate**, binds and where the reaction happens.

The active site is formed by a few amino acids, often far apart in the sequence, that the folding brings close together. Their **R groups** line the pocket. These R groups decide two things:

- the **shape** of the pocket: its size, depth and outline;
- the **chemical character** of the pocket: which spots carry a positive or negative charge, which are polar and can form hydrogen bonds, and which are nonpolar.

For a reaction to happen, the substrate must be **compatible with the active site in both shape and charge**. A molecule that is the right shape but carries a positive charge where the active site also has a positive charge is repelled. A molecule with matching charges but the wrong size cannot fit. This double requirement is why most enzymes are highly **specific**.

## The enzyme–substrate complex model

The steps of an enzyme-catalysed reaction can be written as:

**E + S → ES → E + P**

where E is the enzyme, S the substrate, ES the **enzyme–substrate complex** and P the products.

<figure>
<svg viewBox="0 0 680 300" role="img" aria-labelledby="es31-title es31-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="es31-title">The enzyme-substrate complex model</title>
<desc id="es31-desc">Three panels. Panel 1: a substrate, labelled S, shaped like a wedge with two negative charges on its lower edge, sits above an enzyme, labelled E. The enzyme has a wedge-shaped dip in its surface, the active site, with two positive charges at its floor. Panel 2: the substrate sits exactly in the active site, with its negative charges next to the positive charges, forming the enzyme-substrate complex. Panel 3: the substrate has been split into two products, P1 and P2, which move away. The enzyme is unchanged and its active site is empty, ready for another substrate.</desc>
<defs><marker id="es31-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="680" height="300" fill="#ffffff"/>
<polygon points="70,40 130,40 120,80 80,80" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><text x="100" y="60" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">S</text><text x="90" y="76" text-anchor="middle" font-size="16" font-weight="700" fill="#1d2b44">−</text><text x="110" y="76" text-anchor="middle" font-size="16" font-weight="700" fill="#1d2b44">−</text>
<line x1="100" y1="84" x2="100" y2="98" stroke="#1d2b44" stroke-width="2" marker-end="url(#es31-arr)"/>
<text x="145" y="112" text-anchor="start" font-size="12" fill="#1d2b44">Active site</text>
<line x1="143" y1="114" x2="124" y2="128" stroke="#1d2b44" stroke-width="1"/>
<path d="M20,130 Q20,120 30,120 L70,120 L80,160 L120,160 L130,120 L170,120 Q180,120 180,130 L180,220 Q180,230 170,230 L30,230 Q20,230 20,220 Z" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/><text x="90" y="182" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">+</text><text x="110" y="182" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">+</text><text x="100" y="215" text-anchor="middle" font-size="16" font-weight="700" fill="#1d2b44">E</text>
<path d="M260,130 Q260,120 270,120 L310,120 L320,160 L360,160 L370,120 L410,120 Q420,120 420,130 L420,220 Q420,230 410,230 L270,230 Q260,230 260,220 Z" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/><text x="330" y="182" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">+</text><text x="350" y="182" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">+</text><text x="340" y="215" text-anchor="middle" font-size="16" font-weight="700" fill="#1d2b44">E</text>
<polygon points="310,120 370,120 360,160 320,160" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><text x="340" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2b44">S</text><text x="330" y="156" text-anchor="middle" font-size="16" font-weight="700" fill="#1d2b44">−</text><text x="350" y="156" text-anchor="middle" font-size="16" font-weight="700" fill="#1d2b44">−</text>
<path d="M500,130 Q500,120 510,120 L550,120 L560,160 L600,160 L610,120 L650,120 Q660,120 660,130 L660,220 Q660,230 650,230 L510,230 Q500,230 500,220 Z" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/><text x="570" y="182" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">+</text><text x="590" y="182" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">+</text><text x="580" y="215" text-anchor="middle" font-size="16" font-weight="700" fill="#1d2b44">E</text>
<polygon points="520,50 550,50 550,90 530,90" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="538" y="76" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">P₁</text>
<polygon points="610,50 640,50 630,90 610,90" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="622" y="76" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2b44">P₂</text>
<line x1="190" y1="175" x2="245" y2="175" stroke="#1d2b44" stroke-width="3" marker-end="url(#es31-arr)"/>
<line x1="430" y1="175" x2="485" y2="175" stroke="#1d2b44" stroke-width="3" marker-end="url(#es31-arr)"/>
<text x="100" y="262" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">1. Substrate (S) meets</text>
<text x="100" y="278" text-anchor="middle" font-size="12" fill="#1d2b44">enzyme (E)</text>
<text x="340" y="262" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">2. Enzyme–substrate</text>
<text x="340" y="278" text-anchor="middle" font-size="12" fill="#1d2b44">complex: shapes and charges fit</text>
<text x="580" y="262" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">3. Products released;</text>
<text x="580" y="278" text-anchor="middle" font-size="12" fill="#1d2b44">enzyme unchanged, reused</text>
</svg>
<figcaption>Figure 2. The enzyme–substrate complex model. The substrate binds because its shape matches the active site <strong>and</strong> its negative charges (−) sit next to positive charges (+) on the active-site R groups. A molecule with the wrong shape, or with charges that repel, does not bind.</figcaption>
</figure>

1. **Binding.** Substrate molecules move randomly in solution and collide with enzymes. When a substrate meets an active site in the right orientation, weak attractions (ionic attractions between opposite charges, hydrogen bonds, hydrophobic interactions) hold it in place. These are the same kinds of attraction that hold a protein's shape together.
2. **The complex.** While bound, the substrate is held in a position that makes the reaction easier. The enzyme may hold two substrates close together and correctly lined up, stretch a particular bond, or place a charged R group next to the atoms that must react. Each of these lowers the activation energy.
3. **Release.** The products have a different shape and charge pattern from the substrate, so they no longer fit well and drift away. The enzyme is **unchanged** and the active site is free to bind another substrate.

Because the enzyme is reused, one enzyme molecule can catalyse the same reaction many thousands of times. A cell therefore needs only small amounts of each enzyme.

**Background (not required):** the active site is not perfectly rigid. When the substrate binds, the enzyme often changes shape slightly and grips the substrate more closely. This refinement is called **induced fit**. It still depends on shape and charge being compatible.

Enzymes build molecules as well as break them down. Some catalyse **hydrolysis** (splitting a polymer with water, as amylase does to starch); others catalyse **dehydration synthesis** (joining monomers and releasing water). The model in Figure 2 shows a breakdown reaction, but the same steps apply when two substrates are joined.

## Enzymes regulate what happens in a cell

Without its enzyme, a reaction in a cell is so slow that it effectively does not happen. This turns enzymes into control points:

- A cell can **switch a reaction on** by making the enzyme (expressing its gene) and **switch it off** by not making it or by breaking the enzyme down.
- A cell can **adjust how active** an existing enzyme is, for example with molecules that bind to it and change its shape (you meet these in Topic 3.2).
- In a **metabolic pathway**, the product of one enzyme is the substrate of the next. Controlling one enzyme in the pathway controls the whole sequence.

This is why the structure of enzymes matters at the level of the whole organism. Different cell types make different sets of enzymes, so they carry out different reactions.

## Measuring how fast an enzyme works

A **reaction rate** is the change in the amount of product (or substrate) per unit of time:

**rate = change in amount ÷ time taken**

Typical units are cm³ s⁻¹ (gas produced), mmol L⁻¹ min⁻¹ (concentration of product) or min⁻¹ (when you time how long a colour change takes and use 1 ÷ time as a relative rate).

On a graph of product against time, the rate is the **gradient**. At the start the curve is steepest: substrate is plentiful and active sites are busy. Later the curve flattens because the substrate is being used up: fewer substrate molecules are left to collide with active sites. When all the substrate has reacted, the curve is flat. The **initial rate**, measured over the first short period, is the fairest way to compare conditions, because every trial starts with the same substrate concentration. Topic 3.2 looks in detail at how substrate concentration and other conditions affect the rate.

## Worked example 1: calculating rates with and without an enzyme

**Question.** Catalase is an enzyme found in most living tissues, with high levels in mammalian liver. It speeds up the breakdown of hydrogen peroxide, a harmful by-product of metabolism:

2H₂O₂ → 2H₂O + O₂

A class adds 1.0 cm³ of liver extract to 10 cm³ of hydrogen peroxide solution and collects the oxygen in an upturned measuring cylinder. A second tube receives 1.0 cm³ of water instead of extract. The fictional results are below and in Figure 3.

| Time / s | 0 | 30 | 60 | 90 | 120 | 150 | 180 |
|---|---|---|---|---|---|---|---|
| With extract: O₂ / cm³ | 0.0 | 9.0 | 16.5 | 22.0 | 25.5 | 27.5 | 28.0 |
| No extract: O₂ / cm³ | 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 |

(a) Calculate the initial rate with extract over the first 30 s, and the mean rate between 120 s and 180 s.
(b) Calculate the initial rate without extract and compare the two initial rates.
(c) Explain the shape of the curve with extract.
(d) Predict the final volume of oxygen in the tube without extract if it were left for many days.

<figure>
<svg viewBox="0 0 600 360" role="img" aria-labelledby="cat31-title cat31-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cat31-title">Oxygen released from hydrogen peroxide with and without catalase extract</title>
<desc id="cat31-desc">Line graph of volume of oxygen in cubic centimetres, 0 to 30, against time in seconds, 0 to 180. With extract, solid line with circles: 0, 9.0, 16.5, 22.0, 25.5, 27.5 and 28.0 at 30-second steps; the curve is steep at first and levels off near 28. A dotted straight line through the origin and the 30-second point shows the initial rate. Without extract, dashed line with squares: rises only from 0 to 0.6 over 180 seconds, almost flat along the axis.</desc>
<rect x="0" y="0" width="600" height="360" fill="#ffffff"/>
<line x1="80" y1="256.7" x2="460" y2="256.7" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="213.3" x2="460" y2="213.3" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="170.0" x2="460" y2="170.0" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="126.7" x2="460" y2="126.7" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="83.3" x2="460" y2="83.3" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="40.0" x2="460" y2="40.0" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="300" x2="470" y2="300" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="300" x2="80" y2="30" stroke="#1d2b44" stroke-width="2"/>
<text x="80.0" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="143.3" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">30</text>
<text x="206.7" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">60</text>
<text x="270.0" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">90</text>
<text x="333.3" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">120</text>
<text x="396.7" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">150</text>
<text x="460.0" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">180</text>
<text x="72" y="304.0" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="72" y="260.7" text-anchor="end" font-size="12" fill="#1d2b44">5</text>
<text x="72" y="217.3" text-anchor="end" font-size="12" fill="#1d2b44">10</text>
<text x="72" y="174.0" text-anchor="end" font-size="12" fill="#1d2b44">15</text>
<text x="72" y="130.7" text-anchor="end" font-size="12" fill="#1d2b44">20</text>
<text x="72" y="87.3" text-anchor="end" font-size="12" fill="#1d2b44">25</text>
<text x="72" y="44.0" text-anchor="end" font-size="12" fill="#1d2b44">30</text>
<text x="270" y="345" text-anchor="middle" font-size="14" fill="#1d2b44">Time / s</text>
<text x="20" y="170" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 20 170)">Volume of oxygen / cm³</text>
<polyline points="80.0,300.0 143.3,222.0 206.7,157.0 270.0,109.3 333.3,79.0 396.7,61.7 460.0,57.3" fill="none" stroke="#1d2b44" stroke-width="3"/>
<circle cx="80.0" cy="300.0" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="143.3" cy="222.0" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="206.7" cy="157.0" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="270.0" cy="109.3" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="333.3" cy="79.0" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="396.7" cy="61.7" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="460.0" cy="57.3" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="475" y="120" font-size="13" font-weight="600" fill="#1d2b44">With extract</text>
<text x="475" y="136" font-size="12" fill="#1d2b44">(solid, ○)</text>
<polyline points="80.0,300.0 143.3,299.1 206.7,298.3 270.0,297.4 333.3,296.5 396.7,295.7 460.0,294.8" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="9 6"/>
<rect x="75.0" y="295.0" width="10" height="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="138.3" y="294.1" width="10" height="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="201.7" y="293.3" width="10" height="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="265.0" y="292.4" width="10" height="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="328.3" y="291.5" width="10" height="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="391.7" y="290.7" width="10" height="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="455.0" y="289.8" width="10" height="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="475" y="286" font-size="13" font-weight="600" fill="#1d2b44">No extract</text>
<text x="475" y="302" font-size="12" fill="#1d2b44">(dashed, □)</text>
<line x1="80.0" y1="300.0" x2="238.3" y2="105.0" stroke="#1d2b44" stroke-width="2" stroke-dasharray="2 4"/>
<text x="88.3" y="99.0" font-size="12" fill="#1d2b44">initial rate: 9.0 cm³ in 30 s</text>
</svg>
<figcaption>Figure 3. Fictional class data for Worked example 1. The dotted line has the gradient of the first 30 s, 0.30 cm³ s⁻¹. The curve then bends as the rate falls.</figcaption>
</figure>

**(a) Rates with extract.**

1. Initial rate = (9.0 − 0.0) cm³ ÷ 30 s = **0.30 cm³ s⁻¹** (18 cm³ per minute).
2. Rate from 120 s to 180 s = (28.0 − 25.5) cm³ ÷ 60 s = 2.5 ÷ 60 = **0.042 cm³ s⁻¹**, about 14% of the initial rate.

**(b) Without extract.**

1. Initial rate = 0.1 cm³ ÷ 30 s = **0.0033 cm³ s⁻¹**.
2. Comparison: 0.30 ÷ 0.0033 ≈ **90**. The extract makes the initial rate about 90 times faster. (The readings without extract are so small that this ratio is only a rough estimate.)

**(c) Shape.** At first the curve is steep because the peroxide concentration is high and catalase molecules bind substrate often. As peroxide is used up, collisions between substrate and active sites become less frequent, so the gradient falls. By 180 s nearly all the peroxide has been broken down and the curve levels off. Note that the catalase has **not** been used up: the rate falls because the **substrate** runs out.

**(d) Prediction.** About **28 cm³**. The same amount of hydrogen peroxide gives the same amount of oxygen whether or not catalase is present. The enzyme only changes how fast that end point is reached, just as it changes the activation energy but not ΔG.

**Check.** Units: cm³ ÷ s gives cm³ s⁻¹, a rate. The gradient of the dotted line in Figure 3 matches the 0.30 cm³ s⁻¹ calculated. The true initial rate may be slightly higher, because the curve already bends a little before 30 s.

## Worked example 2: choosing and justifying controls

**Question.** Germinating seeds break down their stored starch for energy. A student wants to test the claim that **an extract of germinating barley seeds contains amylase**, an enzyme that hydrolyses starch. She can use iodine solution, which turns blue-black with starch and stays yellow-brown when no starch is left. She sets up four tubes, each with 5 cm³ of 1% starch solution at 25 °C, and samples a drop every 30 s onto iodine:

| Tube | Added (1 cm³) | Time until iodine stays yellow-brown / min (3 trials) |
|---|---|---|
| A | barley extract | 5.5, 6.0, 6.5 |
| B | barley extract boiled for 5 min, then cooled | still blue-black at 30 min (all trials) |
| C | distilled water | still blue-black at 30 min (all trials) |
| D | purchased amylase solution | 3.5, 4.0, 4.5 |

(a) Identify the independent and dependent variables.
(b) Explain the purpose of tubes B, C and D.
(c) Calculate the mean time and a relative rate (1 ÷ mean time) for tubes A and D.
(d) State a conclusion.

**(a) Variables.**

1. Independent variable: what is added to the starch (fresh extract, boiled extract, water or known amylase).
2. Dependent variable: the time taken for starch to disappear, judged by the iodine test.
3. Controlled variables: starch concentration and volume, volume added, temperature (25 °C), pH, and the sampling interval.

**(b) Controls, and why each one is there.**

1. **Tube C, water (negative control).** It shows whether starch disappears **without** any extract, for example by slow breakdown on its own or by dilution. Starch is still present at 30 min, so any change in tube A must come from the extract.
2. **Tube B, boiled extract (negative control).** Boiling destroys the shape of proteins (Topic 3.2 explains how). If the extract still worked after boiling, the starch breakdown might be caused by something other than an enzyme, such as acid in the extract. Boiled extract has no effect, so the active ingredient is heat-sensitive, as an enzyme would be.
3. **Tube D, known amylase (positive control).** It shows that the method *can* detect amylase activity: the starch, iodine and timing all work. Without it, a negative result in tube A could just mean the test had failed.

**(c) Calculations.**

1. Tube A mean = (5.5 + 6.0 + 6.5) ÷ 3 = **6.0 min**. Relative rate = 1 ÷ 6.0 = **0.17 min⁻¹**.
2. Tube D mean = (3.5 + 4.0 + 4.5) ÷ 3 = **4.0 min**. Relative rate = 1 ÷ 4.0 = **0.25 min⁻¹**.

A longer time means a **slower** rate, which is why 1 ÷ time is used.

**(d) Conclusion.** The data **support** the claim. Fresh extract removes starch, water does not, and boiling removes the effect, which points to a protein catalyst. The positive control shows the test works. The experiment does not prove the enzyme is amylase specifically; a further test could check that the product is maltose, the sugar amylase releases.

## Common misconceptions

- **"Enzymes are used up in the reaction."** The enzyme leaves each reaction unchanged and is reused. Reactions slow down because substrate runs out.
- **"Enzymes provide the energy for a reaction."** They lower the energy barrier; they do not add energy, and ΔG stays the same.
- **"An enzyme can make any reaction happen."** It only speeds up reactions that are already possible. It changes how fast equilibrium or completion is reached, not where the reaction ends up.
- **"Only shape matters for binding."** Charge and polarity matter too. A substrate of the right shape is repelled if its charges clash with the active site.
- **"The active site is the whole enzyme."** It is a small region; the rest of the protein holds the active site in the right shape.
- **"Enzymes only break molecules down."** Many enzymes join molecules together, for example in dehydration synthesis.
- **"Enzymes are alive."** They are molecules. They can work outside cells, for example in a test tube or in a biological washing powder.
- **"A negative control and a positive control do the same job."** A negative control shows what happens without the factor being tested; a positive control shows that the method can detect a real effect.

## Where this leads

Because an enzyme's activity depends on its shape and charge, anything that changes the shape (temperature, pH, chemicals) or competes for the active site (inhibitors) changes the rate. That is [Topic 3.2, Environmental Impacts on Enzyme Function](/advanced-course-resources/biology/3-2-environmental-impacts-on-enzyme-function-study-guide/). Test yourself with the [practice questions](/advanced-course-resources/biology/3-1-enzymes-practice/), then use the [revision notes](/advanced-course-resources/biology/3-1-enzymes-revision-notes/) and the [checklist](/advanced-course-resources/biology/3-1-enzymes-checklist/) to consolidate.
