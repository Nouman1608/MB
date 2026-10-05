---
resourceId: "mb-ap-chem-3.11-study-guide"
title: "Spectroscopy and the Electromagnetic Spectrum: Study Guide (Chemistry 3.11)"
description: "Learn how each region of the electromagnetic spectrum matches one kind of change in a molecule: microwaves change rotation, infrared changes vibration, and UV or visible light moves electrons."
course: "chemistry"
unit: 3
topics: ["3.11"]
resourceType: "study-guide"
prerequisites:
  - "Electrons in atoms occupy quantized energy levels (Topics 1.5 and 1.6)"
  - "Covalent bonds and molecular shape (Unit 2)"
  - "Converting between metres, millimetres, micrometres and nanometres"
prerequisiteResources: ["mb-ap-chem-3.10-study-guide"]
learningObjectives:
  - "Place the main regions of the electromagnetic spectrum in order of wavelength, frequency and photon energy"
  - "Describe the three ways a molecule can store energy: rotation, vibration and electron arrangement"
  - "Link microwave, infrared and ultraviolet or visible radiation to the type of transition each one causes"
  - "Use the size of the energy gaps to explain why each kind of transition needs a different region of the spectrum"
  - "Explain the colour of a substance and its absorption pattern in terms of electronic transitions"
skills: ["1", "4", "6"]
studyMinutes: 35
difficulty: "core"
calculator: "scientific"
calculatorNote: "Energies per mole in the tables use h = 6.626 × 10⁻³⁴ J s, c = 2.998 × 10⁸ m s⁻¹ and N_A = 6.022 × 10²³ mol⁻¹. Region boundaries are approximate"
related: ["mb-ap-chem-3.11-revision-notes", "mb-ap-chem-3.11-practice", "mb-ap-chem-3.11-checklist"]
next: "mb-ap-chem-3.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Shorter wavelength means higher frequency and more energy per photon: radio < microwave < infrared < visible < ultraviolet < X-ray < gamma."
  - "Molecules have quantized rotational, vibrational and electronic energy levels. The gaps grow in that order."
  - "Microwave photons change rotation, infrared photons change vibration, and ultraviolet or visible photons move electrons between energy levels."
  - "A photon is absorbed only if its energy matches a gap, so the region a substance absorbs in tells you which kind of transition happened."
faqs:
  - question: "Do I need to calculate photon energies in this topic?"
    answer: "Not yet. Here you link spectral regions to transitions and compare energies qualitatively. Topic 3.12 adds the equations c = λν and E = hν so you can calculate them."
  - question: "Does every molecule absorb infrared radiation?"
    answer: "No. As background beyond the course: a vibration absorbs infrared only if it changes the molecule's dipole moment. N₂ and O₂ absorb almost no infrared, while CO₂ and H₂O do, which is why they are greenhouse gases."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Light is a stream of energy packets

Light and other electromagnetic radiation travel as waves, but they deliver energy in separate packets called **photons**. Every photon of one wavelength carries the same amount of energy. Two simple rules link the wave and the packet:

- **Shorter wavelength means higher frequency.** All electromagnetic waves travel at the same speed in a vacuum, so if the waves are closer together, more of them pass a point each second.
- **Higher frequency means more energy per photon.** A photon of ultraviolet light carries far more energy than a photon of infrared light.

So you can rank photons by energy just by looking at their wavelengths: the **shorter the wavelength, the more energetic the photon**. In Topic 3.12 you will put numbers on this with c = λν and E = hν. In this topic, the ranking is enough.

## The electromagnetic spectrum

The electromagnetic spectrum is the full range of wavelengths, from radio waves many metres long to gamma rays far smaller than an atom. Scientists split it into named regions. The boundaries are conventions, not sharp physical edges, so different books quote slightly different values.

<figure>
<svg viewBox="0 0 640 200" role="img" aria-labelledby="em-title em-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="em-title">The electromagnetic spectrum, from long to short wavelength</title>
<desc id="em-desc">A horizontal bar divided into seven labelled regions from left to right: radio, microwave, infrared, visible, ultraviolet, X-ray and gamma. Approximate boundary wavelengths are marked below the bar: 1 metre, 1 millimetre, 700 nanometres, 400 nanometres, 10 nanometres and 0.01 nanometres. An arrow above the bar points right, labelled increasing frequency and photon energy. An arrow below points left, labelled increasing wavelength. Brackets under the bar show that microwaves cause rotational transitions, infrared causes vibrational transitions, and visible plus ultraviolet cause electronic transitions. The bar is not to scale.</desc>
<defs><marker id="em-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<path d="M20 22 H620" stroke="#1d2b44" stroke-width="2" marker-end="url(#em-a)"/>
<text x="320" y="16" text-anchor="middle" font-size="13" fill="#1d2b44">increasing frequency and photon energy →</text>
<rect x="10" y="34" width="90" height="44" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="55" y="61" text-anchor="middle" font-size="13" fill="#1d2b44">Radio</text>
<rect x="100" y="34" width="100" height="44" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="150" y="61" text-anchor="middle" font-size="13" fill="#1d2b44">Microwave</text>
<rect x="200" y="34" width="120" height="44" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="260" y="61" text-anchor="middle" font-size="13" fill="#1d2b44">Infrared</text>
<rect x="320" y="34" width="40" height="44" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="340" y="61" text-anchor="middle" font-size="12" fill="#1d2b44">Vis.</text>
<rect x="360" y="34" width="100" height="44" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="410" y="61" text-anchor="middle" font-size="13" fill="#1d2b44">Ultraviolet</text>
<rect x="460" y="34" width="90" height="44" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="505" y="61" text-anchor="middle" font-size="13" fill="#1d2b44">X-ray</text>
<rect x="550" y="34" width="80" height="44" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="590" y="61" text-anchor="middle" font-size="13" fill="#1d2b44">Gamma</text>
<text x="100" y="94" text-anchor="middle" font-size="11" fill="#1d2b44">1 m</text>
<text x="200" y="94" text-anchor="middle" font-size="11" fill="#1d2b44">1 mm</text>
<text x="314" y="94" text-anchor="middle" font-size="11" fill="#1d2b44">700 nm</text>
<text x="368" y="94" text-anchor="middle" font-size="11" fill="#1d2b44">400 nm</text>
<text x="460" y="94" text-anchor="middle" font-size="11" fill="#1d2b44">10 nm</text>
<text x="550" y="94" text-anchor="middle" font-size="11" fill="#1d2b44">0.01 nm</text>
<path d="M620 110 H20" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#em-a)"/>
<text x="320" y="126" text-anchor="middle" font-size="13" fill="#1d2b44">← increasing wavelength</text>
<path d="M104 142 V150 H196 V142" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="150" y="168" text-anchor="middle" font-size="12" fill="#1d2b44">rotation</text>
<path d="M204 142 V150 H316 V142" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="260" y="168" text-anchor="middle" font-size="12" fill="#1d2b44">vibration</text>
<path d="M324 142 V150 H456 V142" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="390" y="168" text-anchor="middle" font-size="12" fill="#1d2b44">electronic transitions</text>
<text x="390" y="184" text-anchor="middle" font-size="11" fill="#1d2b44">(visible + ultraviolet)</text>
</svg>
<figcaption>Figure 1. The regions of the electromagnetic spectrum (not to scale). Energy per photon rises from left to right; wavelength rises from right to left. The brackets show which molecular change each region causes.</figcaption>
</figure>

| Region | Approximate wavelength | What its photons do to a molecule |
|---|---|---|
| Radio | longer than about 1 m | too little energy for the changes in this topic |
| Microwave | about 1 mm to 1 m | change how fast the molecule **rotates** |
| Infrared (IR) | about 700 nm to 1 mm | change how strongly bonds **vibrate** (stretch and bend) |
| Visible | about 400 nm (violet) to 700 nm (red) | move **electrons** to higher energy levels |
| Ultraviolet (UV) | about 10 nm to 400 nm | move **electrons** to higher energy levels; can break bonds |
| X-ray and gamma | shorter than about 10 nm | remove electrons, even from inner shells (as in PES, Topic 1.6) |

Two memory hooks help. Inside the visible region, red has the longest wavelength and violet the shortest. "Infra-red" is just beyond red (lower energy), and "ultra-violet" is just beyond violet (higher energy).

## Three ways a molecule stores energy

A molecule is not a rigid, still object. It can hold energy in three separate ways:

1. **Rotation.** The whole molecule spins about its centre of mass.
2. **Vibration.** The atoms move back and forth relative to each other, so bonds stretch and compress and bond angles open and close.
3. **Electronic energy.** Electrons occupy particular energy levels; an electron can be moved to a higher level.

Each kind of energy is **quantized**: the molecule can only have certain allowed values, like the rungs of a ladder. To climb from one rung to the next, it must gain exactly the energy of the gap. The key fact for this topic is that the gaps are very different in size:

**rotational gaps ≪ vibrational gaps ≪ electronic gaps**

Spinning a whole molecule a little faster takes very little energy. Stretching a bond harder takes more. Moving an electron to a new energy level, against the pull of the nuclei, takes much more again.

<figure>
<svg viewBox="0 0 640 290" role="img" aria-labelledby="lev-title lev-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lev-title">Nested energy levels in a molecule</title>
<desc id="lev-desc">An energy-level diagram with energy increasing upwards. Two thick lines are electronic levels: the ground electronic level near the bottom and an excited electronic level near the top, far apart. Above each thick line are medium lines for vibrational levels, spaced moderately. Just above the lowest vibrational line are very closely spaced thin lines for rotational levels. Arrow A is very short and joins two rotational levels; it is caused by a microwave photon. Arrow B is medium length and joins two vibrational levels; it is caused by an infrared photon. Arrow C is long and joins the ground electronic level to the excited electronic level; it is caused by an ultraviolet or visible photon.</desc>
<defs><marker id="lev-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<path d="M30 270 V20" stroke="#1d2b44" stroke-width="2" marker-end="url(#lev-a)"/>
<text x="22" y="150" text-anchor="middle" font-size="12" fill="#1d2b44" transform="rotate(-90 22 150)">Energy</text>
<line x1="60" y1="250" x2="340" y2="250" stroke="#1d2b44" stroke-width="4"/>
<line x1="60" y1="244" x2="340" y2="244" stroke="#1d2b44" stroke-width="1"/>
<line x1="60" y1="238" x2="340" y2="238" stroke="#1d2b44" stroke-width="1"/>
<line x1="60" y1="232" x2="340" y2="232" stroke="#1d2b44" stroke-width="1"/>
<line x1="60" y1="210" x2="340" y2="210" stroke="#1d2b44" stroke-width="2"/>
<line x1="60" y1="172" x2="340" y2="172" stroke="#1d2b44" stroke-width="2"/>
<line x1="60" y1="90" x2="340" y2="90" stroke="#1d2b44" stroke-width="4"/>
<line x1="60" y1="56" x2="340" y2="56" stroke="#1d2b44" stroke-width="2"/>
<line x1="60" y1="24" x2="340" y2="24" stroke="#1d2b44" stroke-width="2"/>
<text x="348" y="254" font-size="11" fill="#1d2b44">ground electronic level</text>
<text x="348" y="236" font-size="11" fill="#1d2b44">rotational levels (thin)</text>
<text x="348" y="214" font-size="11" fill="#1d2b44">vibrational levels (medium)</text>
<text x="348" y="94" font-size="11" fill="#1d2b44">excited electronic level</text>
<path d="M100 250 V236" stroke="#1d2b44" stroke-width="2" marker-end="url(#lev-a)"/>
<text x="88" y="226" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">A</text>
<path d="M170 250 V214" stroke="#1d2b44" stroke-width="2" marker-end="url(#lev-a)"/>
<text x="158" y="200" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">B</text>
<path d="M260 250 V94" stroke="#1d2b44" stroke-width="2" marker-end="url(#lev-a)"/>
<text x="248" y="150" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">C</text>
<text x="490" y="140" font-size="12" fill="#1d2b44">A: microwave, rotation</text>
<text x="490" y="158" font-size="12" fill="#1d2b44">B: infrared, vibration</text>
<text x="490" y="176" font-size="12" fill="#1d2b44">C: UV or visible,</text>
<text x="490" y="192" font-size="12" fill="#1d2b44">electronic</text>
</svg>
<figcaption>Figure 2. Each electronic level contains a ladder of vibrational levels, and each vibrational level contains a finer ladder of rotational levels. Arrow length shows the energy needed: A ≪ B ≪ C. Spacings are schematic, not to scale.</figcaption>
</figure>

## Matching the region to the transition

Because a photon can only be absorbed if its energy matches a gap, the size of each gap decides which region of the spectrum can cause it. The table shows typical photon energies, given per mole of photons so you can compare them with bond energies from Unit 2.

| Example wavelength | Region | Energy per mole of photons | Transition it matches |
|---|---|---|---|
| 1.00 cm | microwave | about 0.012 kJ mol⁻¹ | rotational |
| 5.00 μm | infrared | about 23.9 kJ mol⁻¹ | vibrational |
| 500 nm | visible | about 239 kJ mol⁻¹ | electronic |
| 250 nm | ultraviolet | about 479 kJ mol⁻¹ | electronic |

The jumps are large: the infrared photon carries about 2000 times the energy of the microwave photon, and the ultraviolet photon about 20 times the energy of the infrared photon. Notice too that ultraviolet energies are similar to typical covalent bond energies (a few hundred kJ mol⁻¹). That is why ultraviolet light can break bonds and damage molecules, while infrared and microwaves only make molecules vibrate or rotate faster.

**The rule to remember:**

- **Microwave → rotational** transitions
- **Infrared → vibrational** transitions
- **Ultraviolet / visible → electronic** transitions

A higher-energy transition usually brings smaller changes with it. When a molecule absorbs a UV photon, its vibrational and rotational state can change at the same time, because those gaps are tiny by comparison. The reverse is not true: a microwave photon can never move an electron, because it carries far too little energy.

## Absorption and emission

Spectroscopy studies the light that matter **absorbs** or **emits**.

- In an **absorption spectrum**, radiation passes through a sample. The sample removes only the photons whose energies match its gaps, so you see dips at those wavelengths. The molecule moves **up** a ladder.
- In an **emission spectrum**, the sample is first given extra energy (by heating or an electric discharge). It then drops **down** a ladder and gives out photons whose energies match the gaps.

For the same substance, the same gaps appear in both. A gap that absorbs at a certain wavelength also emits at that wavelength.

### Colour is an electronic effect

When white light passes through a coloured solution, the solute absorbs some visible wavelengths through electronic transitions. Your eye sees the wavelengths that are left. The colour you see is roughly the **complement** of the colour absorbed: a substance that absorbs orange light looks blue, and one that absorbs violet light looks yellow. Copper(II) sulfate solution looks blue because it absorbs mainly in the orange-red part of the spectrum.

A colourless substance either has no electronic gaps in the visible region (its electronic transitions need UV photons) or absorbs too weakly to notice. Topic 3.13 turns this absorption into a measurement of concentration.

## Worked example 1: identifying transitions from absorption data

**Question.** A fictional gas, Q, made of small polar molecules, absorbs radiation at three wavelengths: 2.40 mm, 6.10 μm and 185 nm. For each, name the region of the spectrum and the type of transition. Then rank the three transitions by energy gap.

1. **Convert to one unit** to compare. 2.40 mm = 2.40 × 10⁻³ m; 6.10 μm = 6.10 × 10⁻⁶ m; 185 nm = 1.85 × 10⁻⁷ m.
2. **Place each wavelength.**
   - 2.40 mm lies between 1 mm and 1 m: **microwave**, so a **rotational** transition.
   - 6.10 μm lies between 700 nm and 1 mm: **infrared**, so a **vibrational** transition.
   - 185 nm lies between 10 nm and 400 nm: **ultraviolet**, so an **electronic** transition.
3. **Rank by energy.** Shorter wavelength means more energy per photon, so the gaps rank: electronic (185 nm) > vibrational (6.10 μm) > rotational (2.40 mm).

**Check.** This ranking matches rotational ≪ vibrational ≪ electronic from Figure 2. In numbers, the 6.10 μm photon carries about 390 times the energy of the 2.40 mm photon, and the 185 nm photon about 33 times the energy of the 6.10 μm photon. You do not need these ratios here, but they confirm the large jumps between regions.

**Common slip.** Comparing "2.40" with "185" without converting units would rank the microwave line as the shortest wavelength. Always put wavelengths in the same unit first.

## Worked example 2: what can an atom absorb compared with a molecule?

**Question.** A sample of argon gas and a sample of hydrogen chloride gas, HCl, are each tested with microwave, infrared and ultraviolet radiation. Predict which regions each gas can absorb in, and justify your answer in terms of transitions.

1. **Hydrogen chloride** is a molecule with a bond and a permanent dipole.
   - It can **rotate**, so it has rotational levels: it can absorb **microwaves**.
   - Its H–Cl bond can stretch, so it has vibrational levels: it can absorb **infrared**.
   - It has electrons in energy levels: it can absorb **ultraviolet** through electronic transitions.
2. **Argon** exists as single atoms.
   - A single atom has no bonds, so there is nothing to **vibrate**: no infrared absorption.
   - A single atom has no rotational energy levels of the kind a molecule has: no microwave absorption.
   - It does have electrons in quantized energy levels, so it can absorb only through **electronic** transitions. For argon these gaps are very large, so it absorbs only high-energy ultraviolet.

**Answer.** HCl can absorb in all three regions; argon absorbs only in the ultraviolet.

**Why this matters.** The example shows that a spectrum tells you about structure. Absorption in the infrared is direct evidence that the sample contains bonds that can vibrate.

## Common misconceptions

- **"Longer wavelength means more energy."** It is the reverse. Energy per photon falls as wavelength rises, so infrared photons carry less energy than visible photons.
- **"Infrared radiation excites electrons."** In this course, infrared matches vibrational gaps. Electronic transitions need visible or ultraviolet photons.
- **"Microwaves make molecules vibrate."** Microwave photons match rotational gaps. Vibrational gaps are much larger and need infrared.
- **"A molecule absorbs any photon with enough energy, and keeps the extra."** A transition needs a photon whose energy matches a gap. Photons that do not match pass through.
- **"The colour of a solution is the colour it absorbs."** You see the light that is not absorbed, roughly the complementary colour.
- **"Brighter light can cause bigger transitions."** Brightness is the number of photons. The kind of transition depends on the energy of each photon, which depends on the wavelength.
- **"Spectral regions have exact edges."** The boundaries are conventions. A wavelength near a boundary, such as 720 nm, could be called deep red or near infrared; the region tells you the type of transition only roughly at the edges.

## Where this leads

This topic builds on the quantized electron energy levels from [Topic 1.6, Photoelectron Spectroscopy](/advanced-course-resources/chemistry/1-6-photoelectron-spectroscopy-study-guide/), where high-energy photons remove electrons altogether. Next, [Topic 3.12, Properties of Photons](/advanced-course-resources/chemistry/3-12-properties-photons-study-guide/), gives you c = λν and E = hν so you can calculate the energy of each transition. Topic 3.13 then uses absorption of visible light to measure concentration. Try the [practice questions](/advanced-course-resources/chemistry/3-11-spectroscopy-electromagnetic-spectrum-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/3-11-spectroscopy-electromagnetic-spectrum-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/3-11-spectroscopy-electromagnetic-spectrum-checklist/) to consolidate.
