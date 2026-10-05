---
resourceId: "mb-ap-phys2-15.7-study-guide"
title: "Fission, Fusion and Nuclear Decay: Study Guide (Physics 2 15.7)"
description: "The strong force, conservation laws in nuclear reactions, E = mc², binding energy, fission and fusion, and random decay with half-life, decay constant and N = N₀e^(−λt)."
course: "physics-2"
unit: 15
topics: ["15.7"]
resourceType: "study-guide"
prerequisites:
  - "Nuclear notation, protons, neutrons and isotopes (Topic 15.2)"
  - "Conservation of energy and of momentum, and kinetic energy K = ½mv²"
  - "Using the electron volt as an energy unit (Topic 15.5)"
prerequisiteResources: ["mb-ap-phys2-15.6-study-guide"]
learningObjectives:
  - "Explain why the strong force holds a nucleus together and why it only matters at nuclear distances"
  - "Check a nuclear reaction for conservation of nucleon number and charge, and find a missing product"
  - "Use E = mc² and 1 u = 931 MeV/c² to find the energy released from a mass difference"
  - "Use conservation of momentum to share the released energy between the products"
  - "Describe fusion and fission and use binding energy per nucleon to explain when each releases energy"
  - "Describe radioactive decay as random, and use half-life, the decay constant and N = N₀e^(−λt) to predict amounts and ages"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "c = 3.00 × 10⁸ m/s, 1 eV = 1.60 × 10⁻¹⁹ J, 1 u = 1.66 × 10⁻²⁷ kg = 931 MeV/c². Keep unrounded values until the final step"
related: ["mb-ap-phys2-15.7-revision-notes", "mb-ap-phys2-15.7-practice", "mb-ap-phys2-15.7-checklist"]
next: "mb-ap-phys2-15.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "The strong force acts between nucleons over very short distances and holds the nucleus together against electric repulsion."
  - "Every nuclear reaction conserves nucleon number, charge, energy and momentum. Mass alone is not conserved: rest energy mc² counts as energy."
  - "If the products have less mass than the reactants, energy Δm c² is released as kinetic energy of the products or as photons."
  - "Fusion joins light nuclei; fission splits heavy nuclei. Each releases energy when the products are more tightly bound per nucleon."
  - "When one nucleus decays is random. A large sample follows N = N₀e^(−λt) = N₀(½)^(t/t½), with λ = ln 2 / t½."
faqs:
  - question: "Is mass turned into energy in a nuclear reaction?"
    answer: "Total energy is conserved, and rest energy mc² is part of that total. In a reaction that releases energy, the products have less rest energy (less mass) than the reactants, and the difference appears as kinetic energy or photons. Nothing is created from nothing."
  - question: "Do I need to learn the half-lives of particular isotopes?"
    answer: "No. Half-lives range from tiny fractions of a second to billions of years, and a question will give you the value. You need to know how to use a half-life, not to remember one."
  - question: "Why is the number of nuclei left after a time only a prediction?"
    answer: "Each nucleus decays at a random moment. The equation N = N₀e^(−λt) gives the expected number. For a very large sample the actual number is extremely close to it. For a small sample the actual number can be noticeably different."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What holds a nucleus together

A nucleus is made of protons and neutrons. Together they are called **nucleons**. The protons all repel each other electrically, and they are packed into a region only about 10⁻¹⁵ m across. At that distance the electric repulsion between two protons is large. So something stronger must hold the nucleus together.

That something is the **strong force**. You need three facts about it:

- It acts between nucleons: proton–proton, neutron–neutron and proton–neutron.
- At nuclear distances it is much stronger than the electric force, so it dominates how nucleons interact.
- It has a very **short range**. Beyond a few times 10⁻¹⁵ m it becomes negligible. That is why it does not pull separate atoms together, and why you never meet it in everyday life.

Neutrons feel the strong attraction but no electric repulsion. That is one reason most nuclei contain neutrons as well as protons.

Recall the notation from Topic 15.2. ²³⁵₉₂U means a uranium nucleus with **nucleon number A = 235** (protons + neutrons, written top left) and **proton number Z = 92** (bottom left). A neutron is ¹₀n and a proton is ¹₁p.

## Rules that every nuclear reaction obeys

A nuclear reaction cannot produce just any set of products. Four conservation laws constrain it.

| Conserved quantity | How you check it |
|---|---|
| Nucleon number | Total A on the left = total A on the right |
| Charge | Total Z on the left = total Z on the right |
| Energy (including rest energy mc²) | Energy released = (mass before − mass after) × c² |
| Momentum | Total momentum before = total momentum after |

The first two let you find a missing product. The last two decide how much energy is released and how it is shared out.

Notice what is **not** on the list: mass. The total mass after a reaction is usually slightly different from the total mass before.

## Mass and energy

Every object has a **rest energy** E = mc², where c = 3.00 × 10⁸ m/s. Mass and energy can be exchanged in any nuclear reaction. If the products have less total mass than the reactants, the "missing" mass Δm has become other forms of energy:

**Energy released = Δm c², where Δm = (total mass before) − (total mass after)**

This energy appears in two ways:

- as **kinetic energy** of the products, which fly apart quickly, and
- as **photons** (gamma rays).

Masses of nuclei are usually given in **unified atomic mass units (u)**. The course data are 1 u = 1.66 × 10⁻²⁷ kg = 931 MeV/c². So a mass change of 1 u corresponds to 931 MeV of energy. You can multiply a mass in u by 931 MeV directly, with no need to convert to kilograms. (1 MeV = 10⁶ eV = 1.60 × 10⁻¹³ J.)

### Binding energy

A helium-4 nucleus has less mass than the two protons and two neutrons that make it. Using atomic masses (1.007825 u for a hydrogen atom, 1.008665 u for a neutron, 4.002603 u for a helium-4 atom):

Δm = 2(1.007825 u) + 2(1.008665 u) − 4.002603 u = 0.030377 u, which corresponds to 0.030377 × 931 MeV = 28.3 MeV.

So you would have to **supply** 28.3 MeV to pull a helium-4 nucleus apart into separate nucleons. That is its **binding energy**. A bound nucleus has *less* energy, and so less mass, than its separated parts. Dividing by the 4 nucleons gives 7.07 MeV per nucleon. The larger the **binding energy per nucleon**, the more tightly bound each nucleon is.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="be-title be-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="be-title">Binding energy per nucleon against nucleon number (schematic)</title>
<desc id="be-desc">A schematic graph. The horizontal axis is nucleon number A from 0 to 250. The vertical axis is binding energy per nucleon in MeV from 0 to 10. The curve rises steeply for light nuclei, with a sharp spike at helium-4 of about 7.1 MeV, reaches a broad maximum of about 8.8 MeV near A equals 56, which is labelled iron, and then falls slowly to about 7.6 MeV at A equals 238, labelled uranium. An arrow on the left, pointing right towards the peak, is labelled fusion of light nuclei releases energy. An arrow on the right, pointing left towards the peak, is labelled fission of heavy nuclei releases energy.</desc>
<defs><marker id="be-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="340" x2="535" y2="340" stroke="#1d2b44" stroke-width="2" marker-end="url(#be-arr)"/>
<line x1="80" y1="340" x2="80" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#be-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="168" y1="340" x2="168" y2="346" stroke="#1d2b44"/><text x="168" y="360">50</text>
<line x1="256" y1="340" x2="256" y2="346" stroke="#1d2b44"/><text x="256" y="360">100</text>
<line x1="344" y1="340" x2="344" y2="346" stroke="#1d2b44"/><text x="344" y="360">150</text>
<line x1="432" y1="340" x2="432" y2="346" stroke="#1d2b44"/><text x="432" y="360">200</text>
<line x1="520" y1="340" x2="520" y2="346" stroke="#1d2b44"/><text x="520" y="360">250</text>
<text x="300" y="385" font-size="13">Nucleon number A</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="284" x2="80" y2="284" stroke="#1d2b44"/><text x="70" y="288">2</text>
<line x1="74" y1="228" x2="80" y2="228" stroke="#1d2b44"/><text x="70" y="232">4</text>
<line x1="74" y1="172" x2="80" y2="172" stroke="#1d2b44"/><text x="70" y="176">6</text>
<line x1="74" y1="116" x2="80" y2="116" stroke="#1d2b44"/><text x="70" y="120">8</text>
</g>
<text x="24" y="200" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 200)">Binding energy per nucleon (MeV)</text>
<polyline points="81.8,340.0 83.5,308.9 85.3,260.8 87.0,142.0 90.6,190.8 92.3,182.9 101.1,125.0 108.2,116.6 115.2,115.2 129.3,103.4 150.4,100.6 178.6,93.9 227.8,95.8 291.2,102.0 322.9,105.1 379.2,111.8 446.1,119.6 498.9,128.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="178.6" cy="93.9" r="4" fill="#1d2b44"/>
<text x="178" y="80" font-size="12" fill="#1d2b44" text-anchor="middle">iron, about 8.8</text>
<circle cx="87.0" cy="142.0" r="4" fill="#1d2b44"/>
<text x="100" y="146" font-size="12" fill="#1d2b44">helium-4, about 7.1</text>
<circle cx="498.9" cy="128.0" r="4" fill="#1d2b44"/>
<text x="498" y="150" font-size="12" fill="#1d2b44" text-anchor="middle">uranium, about 7.6</text>
<path d="M100 230 H165" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#be-arr)"/>
<text x="105" y="250" font-size="12" fill="#1d2b44">fusion of light</text>
<text x="105" y="266" font-size="12" fill="#1d2b44">nuclei releases energy</text>
<path d="M480 230 H260" stroke="#1d2b44" stroke-width="2" marker-end="url(#be-arr)"/>
<text x="470" y="250" font-size="12" fill="#1d2b44" text-anchor="end">fission of heavy nuclei</text>
<text x="470" y="266" font-size="12" fill="#1d2b44" text-anchor="end">releases energy</text>
</svg>
<figcaption>Figure 1. Binding energy per nucleon against nucleon number (schematic; values approximate). Nuclei near the peak are the most tightly bound. Moving towards the peak from either side releases energy: by fusion from the left (dashed arrow) or by fission from the right (solid arrow).</figcaption>
</figure>

## Fusion and fission

**Fusion** is when two or more small nuclei join to form a larger nucleus, often with other particles such as neutrons. For example, deuterium and tritium (two isotopes of hydrogen) fuse:

²₁H + ³₁H → ⁴₂He + ¹₀n

Check: A is 2 + 3 = 5 on the left and 4 + 1 = 5 on the right. Z is 1 + 1 = 2 on both sides. Fusion of light nuclei releases energy because the product is further up the curve in Figure 1. Fusing hydrogen into helium is what powers the Sun. Fusion is hard to start, because the nuclei must get close enough for the short-range strong force to act, against their electric repulsion. That needs extremely high temperatures (background, not assessed).

**Fission** is when a nucleus splits into two or more smaller nuclei, usually with a few neutrons. One possible fission of uranium-235 after it absorbs a slow neutron is:

¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n

Check: A is 1 + 235 = 236 and 141 + 92 + 3 = 236. Z is 92 and 56 + 36 = 92. The fragments are medium-sized nuclei, closer to the peak in Figure 1 than uranium, so energy is released: about 200 MeV per fission.

Some very heavy nuclei split on their own. That is **spontaneous fission**. Others, like uranium-235, usually need an **energy input** first, for example from absorbing a neutron. Whether a nucleus needs that input depends on its binding energy. The neutrons released can trigger further fissions, which is the idea behind a chain reaction in a reactor.

The key comparison: **energy is released whenever the products are more tightly bound per nucleon than the reactants**. Fusing two iron nuclei, or splitting a helium nucleus, would need energy instead.

## Radioactive decay is random

**Radioactive decay** is when an unstable nucleus changes by itself into one or more different nuclei, or drops to a lower energy level of the same nucleus. Topic 15.8 covers the different types. Here the question is *when* it happens.

You cannot predict when one particular nucleus will decay. A nucleus that has existed for a long time is no more "due" to decay than a new one. What you can know is the **probability** of decay per unit time, the same for every nucleus of a given isotope. With a huge number of nuclei, that probability makes the behaviour of the whole sample very predictable.

The **half-life t½** is the time for half of the radioactive nuclei present to decay. After one half-life, ½ remain; after two, ¼; after three, ⅛. The **decay constant λ** (units s⁻¹) is linked to it by

**λ = ln 2 / t½ ≈ 0.693 / t½**

and the number of undecayed nuclei after time t is

**N = N₀ e^(−λt), or equivalently N = N₀ (½)^(t / t½)**

Use the second form when t is a whole number of half-lives. Use the first, with logarithms, to find a time: t = ln(N₀/N) / λ. If you know how much of a material there was at the start, measuring how much remains gives its **age**.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="dk-title dk-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="dk-title">Number of undecayed nuclei against time</title>
<desc id="dk-desc">The vertical axis is number of undecayed nuclei N, from 0 to N zero. The horizontal axis is time, marked at 0, 1, 2, 3, 4 and 5 half-lives. A smooth falling curve starts at N zero and halves every half-life: N zero over 2 at one half-life, N zero over 4 at two half-lives, N zero over 8 at three half-lives, N zero over 16 at four half-lives. Dotted lines from each of these points to both axes show the halving. The curve approaches zero but never reaches it.</desc>
<defs><marker id="dk-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="340" x2="535" y2="340" stroke="#1d2b44" stroke-width="2" marker-end="url(#dk-arr)"/>
<line x1="80" y1="340" x2="80" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#dk-arr)"/>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4">
<path d="M80 200 H160 V340"/><path d="M80 270 H240 V340"/><path d="M80 305 H320 V340"/><path d="M80 322.5 H400 V340"/>
</g>
<polyline points="80,60.0 90,83.2 100,104.5 110,124.1 120,142.0 130,158.4 140,173.5 150,187.3 160,200.0 170,211.6 180,222.3 190,232.0 200,241.0 210,249.2 220,256.8 230,263.7 240,270.0 250,275.8 260,281.1 270,286.0 280,290.5 290,294.6 300,298.4 310,301.8 320,305.0 330,307.9 340,310.6 350,313.0 360,315.3 370,317.3 380,319.2 390,320.9 400,322.5 410,324.0 420,325.3 430,326.5 440,327.6 450,328.7 460,329.6 470,330.5 480,331.2 490,332.0 500,332.6 510,333.3 520,333.8" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="72" y="64">N₀</text><text x="72" y="204">N₀/2</text><text x="72" y="274">N₀/4</text><text x="72" y="302">N₀/8</text><text x="72" y="327">N₀/16</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="360">0</text><text x="160" y="360">1</text><text x="240" y="360">2</text><text x="320" y="360">3</text><text x="400" y="360">4</text><text x="480" y="360">5</text>
<text x="300" y="385" font-size="13">Time (number of half-lives)</text>
</g>
<text x="24" y="200" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 200)">Undecayed nuclei N</text>
</svg>
<figcaption>Figure 2. Exponential decay. In each half-life the number of undecayed nuclei halves, whatever number you start from. The curve never reaches zero, but for a finite sample the last nucleus does eventually decay at a random time.</figcaption>
</figure>

Half-lives vary hugely between isotopes. Polonium-214 has a half-life of about 164 microseconds. Uranium-238 has a half-life of about 4.5 billion years. You do not need to remember any of these values.

In a laboratory you cannot count nuclei directly. Instead you measure the **count rate** from a detector. It is proportional to the number of undecayed nuclei, so it falls with the same half-life. Measure the background count rate first (with the source removed) and subtract it from every reading. A graph of ln(corrected count rate) against time is a straight line with gradient −λ.

## Worked example 1: energy from fusion and how it is shared

**Question.** In the reaction ²₁H + ³₁H → ⁴₂He + ¹₀n, the atomic masses are ²H: 2.014102 u, ³H: 3.016049 u, ⁴He: 4.002603 u, and the neutron mass is 1.008665 u. The reacting nuclei have negligible kinetic energy. (a) Find the energy released. (b) How is it shared between the helium nucleus and the neutron?

1. Mass before: 2.014102 u + 3.016049 u = 5.030151 u.
2. Mass after: 4.002603 u + 1.008665 u = 5.011268 u.
3. Mass decrease: Δm = 5.030151 u − 5.011268 u = 0.018883 u. (The electron masses cancel: two electrons on each side.)
4. Energy released: Q = 0.018883 × 931 MeV = **17.6 MeV** (17.58 MeV), which is 2.81 × 10⁻¹² J.
5. Momentum: the total momentum before is about zero, so afterwards the helium nucleus and the neutron have **equal and opposite momenta**, p.
6. With K = p²/2m and the same p for both, K is inversely proportional to mass. The neutron gets the fraction m_He/(m_He + m_n) = 4.002603/5.011268 = 0.799 of the energy.
7. K_n = 0.799 × 17.58 MeV = **14.0 MeV**; K_He = 17.58 − 14.04 = **3.5 MeV**.

**Interpretation.** Only 0.38% of the original mass is converted, but per kilogram that is a very large energy. The light neutron carries away about 80% of it. Momentum conservation, not chance, fixes that split.

## Worked example 2: using half-life and the decay constant

**Question.** A sample contains 8.0 × 10¹² nuclei of an isotope with a half-life of 6.0 h. (a) Find the decay constant. (b) How many undecayed nuclei remain after 15 h? (c) How long until only 5.0% remain?

1. (a) λ = ln 2 / t½ = 0.693 / 6.0 h = **0.116 h⁻¹**. In SI units: 0.1155 ÷ 3600 s = **3.21 × 10⁻⁵ s⁻¹**.
2. (b) 15 h is 15/6.0 = 2.5 half-lives. N = N₀(½)^2.5 = 8.0 × 10¹² × 0.177 = **1.4 × 10¹²**. (Check: N₀e^(−λt) = 8.0 × 10¹² × e^(−0.1155 × 15) gives the same.)
3. (c) N/N₀ = 0.050, so t = ln(N₀/N) / λ = ln 20 / 0.1155 h⁻¹ = **26 h** (25.9 h).

**Check.** Two half-lives leave 25% and three leave 12.5%, so 2.5 half-lives leaving 17.7% sits between them, as it should. 5% is between four half-lives (6.25%) and five (3.1%), and 25.9 h is 4.3 half-lives. Each answer is an expected value: the actual count will differ very slightly, because each decay is random.

## Worked example 3: estimating the mass lost in fission

**Question.** Each fission of uranium-235 releases about 200 MeV. Estimate (a) the mass lost in one fission, as a fraction of the 236 u that reacts, and (b) the energy released if 1.0 kg of uranium-235 fissions completely.

1. (a) Δm = 200 MeV ÷ 931 MeV/u = 0.215 u. As a fraction: 0.215 / 236 = 9.1 × 10⁻⁴, about **0.09%** of the mass.
2. (b) Number of nuclei in 1.0 kg: 1.0 kg ÷ (235 × 1.66 × 10⁻²⁷ kg) = 2.56 × 10²⁴.
3. Energy: 2.56 × 10²⁴ × 200 MeV × 1.60 × 10⁻¹³ J/MeV = **8.2 × 10¹³ J**.

**Check.** About 0.09% of 1.0 kg is 9 × 10⁻⁴ kg, and (9 × 10⁻⁴ kg)(3.00 × 10⁸ m/s)² ≈ 8 × 10¹³ J. The two routes agree. A fusion reaction converts a larger fraction of its mass (0.38% in Worked example 1).

## Common misconceptions

- **"Mass is conserved in nuclear reactions."** Nucleon number is conserved. Mass is not: the products of an energy-releasing reaction have less mass.
- **"Binding energy is energy stored in the nucleus, released when it breaks up."** Binding energy is the energy you must *supply* to separate the nucleons. A tightly bound nucleus has less mass than its parts.
- **"Both fission and fusion always release energy."** Only when the products have a higher binding energy per nucleon. Splitting light nuclei or fusing heavy ones needs energy.
- **"After two half-lives, the sample has all decayed."** After two half-lives a quarter remains. Each half-life halves what is *left*.
- **"An old nucleus is more likely to decay soon."** Every undecayed nucleus of an isotope has the same chance of decaying in the next second, whatever its age.
- **"The half-life depends on how much material there is."** It is a property of the isotope. A bigger sample has more decays per second but the same half-life.
- **"Released energy is shared equally between the products."** For two products from rest, momentum conservation gives the lighter one more kinetic energy.

## Where this leads

Topic 15.8 looks at what a decaying nucleus actually emits: alpha particles, electrons, positrons, neutrinos and gamma rays, with the extra conservation rule for lepton number. Practise first with the [practice questions](/advanced-course-resources/physics-2/15-7-fission-fusion-nuclear-decay-practice/), then use the [revision notes](/advanced-course-resources/physics-2/15-7-fission-fusion-nuclear-decay-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/15-7-fission-fusion-nuclear-decay-checklist/). When you are ready, continue to [Topic 15.8: Types of Radioactive Decay](/advanced-course-resources/physics-2/15-8-types-radioactive-decay-study-guide/). For the electron volt and photon energies, look back at [Topic 15.6: Compton Scattering](/advanced-course-resources/physics-2/15-6-compton-scattering-study-guide/).
