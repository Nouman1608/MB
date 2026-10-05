---
resourceId: "mb-ap-phys1-8.1-study-guide"
title: "Internal Structure and Density: Study Guide (Physics 1 8.1)"
description: "How particle interactions give solids, liquids and gases their properties, what makes a fluid, density as mass per volume, mass–volume graphs and the ideal-fluid model."
course: "physics-1"
unit: 8
topics: ["8.1"]
resourceType: "study-guide"
prerequisites:
  - "Mass, weight and the gravitational force mg (Topic 2.6)"
  - "Area and volume of rectangles, boxes and cylinders"
  - "Finding the slope of a best-fit straight line"
prerequisiteResources: ["mb-ap-phys1-7.4-study-guide"]
learningObjectives:
  - "Explain the different properties of solids, liquids and gases in terms of how strongly their particles interact"
  - "Describe what makes a substance a fluid and name both liquids and gases as fluids"
  - "Calculate density from mass and volume, convert between g/cm³ and kg/m³, and find average density for an object made of several parts"
  - "Plot mass against volume and use the slope of the best-fit line to find a density"
  - "State the two assumptions of the ideal-fluid model and judge when a real fluid fits it"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. Use g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-8.1-revision-notes", "mb-ap-phys1-8.1-practice", "mb-ap-phys1-8.1-checklist"]
next: "mb-ap-phys1-8.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Solids, liquids and gases differ because their particles interact with different strengths and sit at different spacings."
  - "A fluid is any substance with no fixed shape: it flows and takes the shape of its container. Liquids and gases are both fluids."
  - "Density is mass per unit volume: ρ = m / V, in kg/m³. 1 g/cm³ = 1000 kg/m³."
  - "For one material, a graph of mass against volume is a straight line through the origin. Its slope is the density."
  - "An ideal fluid is incompressible (its density never changes) and has no viscosity (no internal friction)."
faqs:
  - question: "Is a heavy object always dense?"
    answer: "No. Density compares mass with volume. A large log can weigh more than a small steel bolt, but the steel is about ten times denser because each cubic metre of it has far more mass."
  - question: "Does cutting an object in half change its density?"
    answer: "No. Both the mass and the volume halve, so their ratio stays the same. Density belongs to the material, not to the size of the piece."
  - question: "Are gases fluids?"
    answer: "Yes. A gas has no fixed shape and flows, so it is a fluid. Unlike a liquid, it also has no fixed volume and is easy to compress."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Unit 8 applies the forces, energy and momentum ideas from earlier units to fluids. This first topic sets up the vocabulary: what a fluid is, and how to describe it with one number, its density.

## Why solids, liquids and gases behave differently

All matter is made of particles (atoms and molecules) that interact with each other. Two things decide how a material behaves:

- **how strongly** neighbouring particles attract or repel each other, and
- **how far apart** the particles are, on average.

Compare the three everyday states:

| State | Particle picture | Shape | Volume | Easy to squeeze? |
|---|---|---|---|---|
| Solid | Strong interactions hold particles in fixed places. They vibrate about those places. | fixed | fixed | no |
| Liquid | Particles are close together and still interact strongly, but they can slide past each other. | not fixed | fixed | hardly at all |
| Gas | Particles are far apart compared with their size. They interact only briefly, when they collide. | not fixed | not fixed | yes |

<figure>
<svg viewBox="0 0 560 250" role="img" aria-labelledby="p1-81-states-title p1-81-states-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-81-states-title">Particle pictures of a solid, a liquid and a gas</title>
<desc id="p1-81-states-desc">Three boxes side by side. The left box, labelled solid, has particles packed in neat rows and columns, each touching its neighbours. The middle box, labelled liquid, has particles almost as close together but in an irregular arrangement, filling the bottom part of the box with a flat top surface. The right box, labelled gas, has only a few particles spread far apart across the whole box, each with a short arrow showing it moving in a different direction.</desc>
<rect x="0" y="0" width="560" height="250" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="20" y="30" width="160" height="160"/>
<rect x="200" y="30" width="160" height="160"/>
<rect x="380" y="30" width="160" height="160"/>
</g>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5">
<circle cx="50" cy="110" r="10"/><circle cx="72" cy="110" r="10"/><circle cx="94" cy="110" r="10"/><circle cx="116" cy="110" r="10"/><circle cx="138" cy="110" r="10"/>
<circle cx="50" cy="132" r="10"/><circle cx="72" cy="132" r="10"/><circle cx="94" cy="132" r="10"/><circle cx="116" cy="132" r="10"/><circle cx="138" cy="132" r="10"/>
<circle cx="50" cy="154" r="10"/><circle cx="72" cy="154" r="10"/><circle cx="94" cy="154" r="10"/><circle cx="116" cy="154" r="10"/><circle cx="138" cy="154" r="10"/>
<circle cx="50" cy="176" r="10" /><circle cx="72" cy="176" r="10"/><circle cx="94" cy="176" r="10"/><circle cx="116" cy="176" r="10"/><circle cx="138" cy="176" r="10"/>
<circle cx="215" cy="178" r="10"/><circle cx="238" cy="176" r="10"/><circle cx="262" cy="179" r="10"/><circle cx="286" cy="175" r="10"/><circle cx="309" cy="178" r="10"/><circle cx="333" cy="176" r="10"/>
<circle cx="226" cy="157" r="10"/><circle cx="250" cy="155" r="10"/><circle cx="275" cy="158" r="10"/><circle cx="298" cy="155" r="10"/><circle cx="322" cy="158" r="10"/><circle cx="345" cy="160" r="10"/>
<circle cx="214" cy="137" r="10"/><circle cx="240" cy="134" r="10"/><circle cx="264" cy="137" r="10"/><circle cx="288" cy="135" r="10"/><circle cx="312" cy="137" r="10"/><circle cx="336" cy="139" r="10"/>
<circle cx="228" cy="116" r="10"/><circle cx="276" cy="117" r="10"/><circle cx="321" cy="117" r="10"/>
<circle cx="410" cy="60" r="10"/><circle cx="500" cy="75" r="10"/><circle cx="440" cy="130" r="10"/><circle cx="515" cy="160" r="10"/><circle cx="405" cy="170" r="10"/>
</g>
<path d="M202 106 H358" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 3"/>
<g stroke="#1d2b44" stroke-width="1.5" fill="none">
<path d="M420 55 L438 45 M434 42 L438 45 L433 49"/>
<path d="M490 82 L476 96 M476 91 L476 96 L481 96"/>
<path d="M452 132 L472 136 M468 132 L472 136 L467 139"/>
<path d="M515 150 L515 130 M512 134 L515 130 L518 134"/>
<path d="M398 162 L388 146 M387 151 L388 146 L392 148"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="100" y="212">Solid</text><text x="280" y="212">Liquid</text><text x="460" y="212">Gas</text>
<text x="100" y="232" font-size="11">fixed places, vibrate</text>
<text x="280" y="232" font-size="11">close, slide past each other</text>
<text x="460" y="232" font-size="11">far apart, move freely</text>
<text x="280" y="98" font-size="11">surface</text>
</g>
</svg>
<figcaption>Figure 1. Particle pictures. In the solid, particles are locked in a regular pattern. In the liquid, they are just as close but disordered and free to slide, so the liquid settles into the bottom of its container with a surface. In the gas, a few fast particles spread through the whole container.</figcaption>
</figure>

This particle picture explains things you can see. A liquid keeps its volume because its particles are already touching: pushing them closer is very hard. A gas is easy to compress because most of its volume is empty space between particles.

## What counts as a fluid

A **fluid** is a substance that has **no fixed shape**. If you push sideways on part of it, it flows. Pour it into a new container and it takes that container's shape.

- **Liquids** are fluids. Water, oil and honey all flow.
- **Gases** are fluids too. Air flows round a moving car and fills any room it is in.
- **Solids** are not fluids. A steel block keeps its shape on any surface.

So "fluid" does not mean "liquid". In this unit, everything you learn about fluids applies to air as well as to water, unless a model says otherwise.

## Density: mass per unit volume

Two samples of the same fluid can have very different masses: a bucket of water has more mass than a cup of it. To describe the **material** rather than the sample, divide mass by volume. This ratio is the **density**:

**ρ = m / V**

- ρ (the Greek letter rho) is density, in **kg/m³**.
- m is mass, in kg.
- V is volume, in m³.

Density tells you how much mass is packed into each cubic metre. It is a property of the material. Cut a block in half and both m and V halve, so ρ stays the same.

### Converting units

Labs often measure in grams and cubic centimetres. Since 1 g = 10⁻³ kg and 1 cm³ = 10⁻⁶ m³:

**1 g/cm³ = 10⁻³ kg ÷ 10⁻⁶ m³ = 1000 kg/m³**

Also useful: 1 mL = 1 cm³, and 1 L = 1000 cm³ = 10⁻³ m³.

### Some real densities (approximate, at room conditions)

| Material | Density (kg/m³) |
|---|---|
| air (at sea level) | about 1.2 |
| cork | about 240 |
| ice | about 920 |
| fresh water | about 1000 |
| aluminium | about 2700 |
| iron | about 7900 |
| gold | about 19,300 |

Gases are roughly a thousand times less dense than liquids and solids. That matches the particle picture: gas particles are far apart.

### Mass, volume, weight, size and density are different words

Physics answers lose marks when these words are swapped. Keep them apart:

| Word | Meaning | Unit |
|---|---|---|
| mass, m | how much matter; resistance to acceleration | kg |
| volume, V | how much space the object takes up | m³ |
| weight, mg | the gravitational force on the object | N |
| density, ρ | mass per unit volume of the material | kg/m³ |
| "size" | vague: say volume, length or area instead | — |

A 2.0 kg block has weight 2.0 × 9.8 = 19.6 N on Earth. Its density depends on its volume too, so the mass alone cannot tell you the density.

## Worked example 1: identifying a metal from its density

**Question.** A solid metal cylinder has diameter 2.00 cm and length 5.00 cm. Its mass is 42.4 g. Find its density in kg/m³ and suggest what metal it could be.

1. Radius: r = 2.00 cm ÷ 2 = 1.00 cm = 0.0100 m. Length: L = 0.0500 m.
2. Volume of a cylinder: V = πr²L = π × (0.0100 m)² × 0.0500 m = 1.57 × 10⁻⁵ m³.
3. Mass in kg: m = 42.4 g = 0.0424 kg.
4. Density: ρ = m / V = 0.0424 kg ÷ 1.57 × 10⁻⁵ m³ = **2.7 × 10³ kg/m³** (2699 kg/m³ before rounding).
5. Compare with the table: this matches **aluminium** (about 2700 kg/m³).

**Check.** Work in grams and cm³ instead: V = π × 1.00² × 5.00 = 15.7 cm³, and 42.4 g ÷ 15.7 cm³ = 2.70 g/cm³. Multiply by 1000 to get 2700 kg/m³. Both routes agree.

## Mass–volume graphs

For pieces of one uniform material, m = ρV. Plot mass on the vertical axis and volume on the horizontal axis:

- The graph is a **straight line through the origin** (zero volume has zero mass).
- The **slope** of the line is Δm / ΔV, which is the **density**.
- A denser material gives a **steeper** line.

A graph is better than one measurement because the best-fit line averages out random errors in individual readings.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="p1-81-mv-title p1-81-mv-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-81-mv-title">Mass against volume for five rock pebbles, with a best-fit line</title>
<desc id="p1-81-mv-desc">Mass m in grams from 0 to 60 against volume V in cubic centimetres from 0 to 20. Five data points marked with crosses lie close to a solid straight best-fit line through the origin that rises to about 53 g at 20 cubic centimetres; its slope is 2.65 grams per cubic centimetre. A dashed comparison line for ice, slope 0.92 grams per cubic centimetre, rises only to 18.4 g at 20 cubic centimetres and is much less steep. Two open circles on the best-fit line at 2.0 and 20.0 cubic centimetres mark the points used to find the slope.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M180 290 V50 M290 290 V50 M400 290 V50 M510 290 V50"/>
<path d="M70 210 H510 M70 130 H510 M70 50 H510"/>
</g>
<path d="M70 290 H520 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="180" y="308">5</text><text x="290" y="308">10</text><text x="400" y="308">15</text><text x="510" y="308">20</text>
<text x="295" y="330" font-size="13">volume, V (cm³)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="214">20</text><text x="62" y="134">40</text><text x="62" y="54">60</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">mass, m (g)</text>
<path d="M70 289.1 L510 77.2" stroke="#1d2b44" stroke-width="2"/>
<path d="M70 290 L510 216.4" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<g stroke="#1d2b44" stroke-width="2">
<path d="M153 241.4 L163 251.4 M163 241.4 L153 251.4"/>
<path d="M230 205.8 L240 215.8 M240 205.8 L230 215.8"/>
<path d="M307 167 L317 177 M317 167 L307 177"/>
<path d="M406 118.6 L416 128.6 M416 118.6 L406 128.6"/>
<path d="M483 83.8 L493 93.8 M493 83.8 L483 93.8"/>
</g>
<circle cx="114" cy="267.9" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="510" cy="77.2" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="122" y="285" font-size="12" fill="#1d2b44">(2.0, 5.5)</text>
<text x="452" y="66" font-size="12" fill="#1d2b44">(20.0, 53.2)</text>
<text x="300" y="100" font-size="12" fill="#1d2b44">solid line: rock, slope 2.65 g/cm³</text>
<text x="330" y="270" font-size="12" fill="#1d2b44">dashed line: ice, slope 0.92 g/cm³</text>
</svg>
<figcaption>Figure 2. Mass against volume for five pebbles of one rock type (crosses). The solid best-fit line has slope (53.2 − 5.5) g ÷ (20.0 − 2.0) cm³ = 2.65 g/cm³. The dashed line shows ice for comparison: a less dense material gives a shallower line.</figcaption>
</figure>

## Worked example 2: density from a graph

**Question.** A student wants the density of a type of rock. She has five pebbles of it, an electronic balance and a measuring cylinder part-filled with water. Describe a method and use her results to find the density.

| V (cm³) | 4.0 | 7.5 | 11.0 | 15.5 | 19.0 |
|---|---|---|---|---|---|
| m (g) | 10.9 | 19.8 | 29.5 | 41.6 | 50.3 |

**Method.**

1. Measure each pebble's mass on the balance.
2. Read the water level in the cylinder. Lower one pebble in gently so it is fully under water, and read the new level. The rise in level is the pebble's volume (1 mL = 1 cm³). This works for irregular shapes that you cannot measure with a ruler.
3. Plot m (vertical) against V (horizontal) and draw a best-fit straight line.

**Analysis.**

1. The points lie close to a straight line that passes very near the origin (Figure 2). This supports the idea that all five pebbles are the same material.
2. Choose two points **on the line**, far apart: (2.0 cm³, 5.5 g) and (20.0 cm³, 53.2 g).
3. Slope = (53.2 − 5.5) g ÷ (20.0 − 2.0) cm³ = 47.7 g ÷ 18.0 cm³ = **2.65 g/cm³**.
4. In SI units: ρ = 2.65 × 1000 = **2.65 × 10³ kg/m³** (granite, for comparison, is about 2700 kg/m³).

**Check.** Each pebble alone gives a ratio between 2.64 and 2.73 g/cm³. The slope sits inside that range but uses all five readings at once, so one bad reading has less effect.

## Average density of an object made of parts

Many objects are not one uniform material. A boat, a football or a person contains several materials and often trapped air. For such an object, use the **average density**:

**ρ_avg = total mass ÷ total volume**

## Worked example 3: a sealed hollow container

**Question.** A sealed box is made from aluminium sheet. The metal itself has a volume of 40 cm³. The box encloses 400 cm³ of air (density 0.0012 g/cm³). Find the box's average density and compare it with water (1.0 g/cm³) and with solid aluminium.

1. Mass of aluminium: m = ρV = 2.70 g/cm³ × 40 cm³ = 108 g.
2. Mass of air: 0.0012 g/cm³ × 400 cm³ = 0.48 g.
3. Total mass: 108 + 0.48 = 108.48 g. Total volume: 40 + 400 = 440 cm³.
4. Average density: 108.48 g ÷ 440 cm³ = **0.25 g/cm³ = 2.5 × 10² kg/m³**.

**Compare.** The box's average density is about a quarter of water's, even though aluminium is 2.7 times denser than water. Same mass, very different volume: a solid aluminium lump of 108 g would have a volume of only about 40 cm³.

**Interpretation.** The air adds almost nothing to the mass (ignoring it changes the answer by less than 0.5%) but a lot to the volume. In Topic 8.3 you will use average density to decide whether an object floats.

## The ideal-fluid model

Real fluids are messy, so this course uses a simple model. An **ideal fluid** has two properties:

1. **Incompressible.** Squeezing it does not change its volume, so its density stays constant.
2. **No viscosity.** Viscosity is internal friction: layers of fluid dragging on each other as they slide. An ideal fluid flows with no such friction, so no kinetic energy is lost to thermal energy inside it.

How good is the model?

- **Water** fits well. It is very hard to compress, and it flows easily.
- **Honey or thick oil** has high viscosity. It flows slowly and loses energy as it flows, so the "no viscosity" part fails.
- **Air** is easy to compress. Halve the volume of air in a sealed syringe and its density doubles. The "incompressible" part fails when the pressure on a gas changes a lot.

Unless a question says otherwise, treat fluids as ideal.

## Common misconceptions

- **"Heavy means dense."** Weight depends on mass; density depends on mass *and* volume. A heavy object can have a low density if it is large.
- **"A smaller piece has a smaller density."** Cutting a uniform object changes m and V by the same factor, so ρ does not change.
- **"Fluid means liquid."** Gases are fluids too: they have no fixed shape and they flow.
- **"Gases have no mass, so they have no density."** Air has a density of about 1.2 kg/m³. A room full of air has a mass of tens of kilograms.
- **"A gas has a fixed density."** A gas fills whatever volume it is given, so the same mass of gas can have very different densities.
- **"Things float because they are lighter than water."** A ship is far heavier than a bucket of water and still floats. What matters is comparing densities (developed in Topic 8.3).
- **Unit slips.** Mixing g with kg, or cm³ with m³, changes the answer by a factor of 1000 or more. Convert first, or work wholly in g and cm³ and multiply by 1000 at the end.
- **Reading the mass–volume graph from one point only.** Use the slope of the best-fit line, not m ÷ V for a single reading, when the question gives a graph.

## Where this leads

Topic 8.2 (Pressure) asks what a fluid does to the surfaces it touches. Density appears straight away: the extra pressure under a column of fluid depends on ρ. Read the [Topic 8.2 study guide](/advanced-course-resources/physics-1/8-2-pressure-study-guide/) next. First, try the [practice questions](/advanced-course-resources/physics-1/8-1-internal-structure-density-practice/), then use the [revision notes](/advanced-course-resources/physics-1/8-1-internal-structure-density-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/8-1-internal-structure-density-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
