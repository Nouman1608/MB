---
title: "IB DP Physics: Nuclear fission and power plants (DP Physics)"
seoTitle: "IB Physics E.4 Nuclear Fission Study Guide"
resourceType: "study-guides"
subject: "physics"
level: ["ib"]
topic: "Nuclear fission and power plants"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 298
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-e"
    subtopic: "ib-dp-physics-e-4"
description: "Study guide to fission energy, chain reactions, reactor components and nuclear waste for IB DP Physics sub-topic E.4, SL and HL."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide teaches sub-topic E.4, Fission, from the IB *Physics guide* for first assessment 2025. The content is the same for SL and HL: the guide adds no extra HL material to E.4, and suggests about four hours of teaching. It follows on from binding energy and radioactive decay in E.3, so read the [nuclear structure and binding energy guide](/resources/ib-dp-physics-nuclear-structure-binding-energy-and-types-of/) first if mass defect is new to you.

Track your progress on the [IB DP Physics hub](/boards/ib/ib-dp/physics/) and the [printable checklist](/checklists/ib/ib-dp/physics/). The other two pages for this unit are the [revision notes](/resources/ib-dp-physics-nuclear-fission-and-power-plants-revision-notes/) and the [practice questions](/resources/ib-dp-physics-nuclear-fission-and-power-plants-practice/). If you are unsure where you stand, try the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Guide reference | What you must be able to do | Tier |
|---|---|---|
| E.4, first understanding | Explain why fission, whether spontaneous or started by a neutron, releases energy, and calculate it | SL and HL |
| E.4, second understanding | Explain the role of a chain reaction | SL and HL |
| E.4, third understanding | Explain what control rods, moderators, heat exchangers and shielding each do | SL and HL |
| E.4, fourth understanding | Describe the products of fission and how they are managed, including long-term storage | SL and HL |
| E.4, guidance | Calculate energy released in fission reactions; consider the impact of long-term storage of waste | SL and HL |

## Energy release in fission

**Fission** is the splitting of a heavy nucleus into two smaller nuclei, called fission fragments, usually with a few free neutrons.

- In **spontaneous fission** a nucleus splits with no outside trigger. It is rare for most nuclides and competes with alpha decay.
- In **neutron-induced fission** a nucleus absorbs a neutron, becomes more unstable and then splits. Uranium-235 is the standard example, and it fissions readily after absorbing a slow neutron.

Why is energy released? Start from the graph of binding energy per nucleon plotted against nucleon number. Uranium sits well to the right of the peak near iron and nickel, at roughly 7.6 MeV per nucleon. Mid-mass fragments sit nearer the peak, at roughly 8.5 MeV per nucleon. The fragments are more tightly bound, so the total binding energy increases and the difference appears as energy. Put another way, the products have a little less mass than the reactants, and that mass difference is released as energy through ΔE = Δm c².

Most of the energy appears as kinetic energy of the fragments, which are driven apart by electric repulsion because both are positively charged. Collisions with surrounding atoms convert it to thermal energy. That is the form of energy a power plant uses. Smaller shares go to the neutrons, to gamma rays and to later beta decay of the fragments.

A typical neutron-induced fission can be written:

U-235 + n → U-236* → Xe-140 + Sr-94 + 2n

The asterisk marks an excited intermediate nucleus. Check nucleon numbers (236 = 140 + 94 + 2) and proton numbers (92 = 54 + 38). Many other pairs of fragments are possible.

### Worked example 1: energy from the mass difference

Use these atomic masses: U-235 235.043930 u; neutron 1.008665 u; Xe-140 139.921640 u; Sr-94 93.915361 u. Take 1 u = 931.5 MeV/c².

1. Reactant mass: 235.043930 + 1.008665 = 236.052595 u.
2. Product mass: 139.921640 + 93.915361 + 2 × 1.008665 = 235.854331 u.
3. Mass difference: 236.052595 − 235.854331 = 0.198264 u.
4. Energy: 0.198264 × 931.5 = 185 MeV.
5. In joules, with 1 MeV = 1.602 × 10⁻¹³ J: 184.68 × 1.602 × 10⁻¹³ = 2.96 × 10⁻¹¹ J.

Using the full masses on both sides, including every neutron, avoids slips. Net, the reaction makes one more neutron than it uses.

### Worked example 2: energy per kilogram

Take the mass of one U-235 nucleus as 235 u, with 1 u = 1.661 × 10⁻²⁷ kg.

1. Nuclei in 1.00 kg: 1.00 ÷ (235 × 1.661 × 10⁻²⁷) = 2.56 × 10²⁴.
2. Energy if every nucleus fissions at 2.96 × 10⁻¹¹ J: 2.56 × 10²⁴ × 2.96 × 10⁻¹¹ = 7.6 × 10¹³ J.
3. Compare with oil at about 4.2 × 10⁷ J kg⁻¹ (a typical value): the ratio is 1.8 × 10⁶.


### Worked example 3: from binding energy per nucleon

Suppose U-235 (7.59 MeV per nucleon) splits into fragments with nucleon numbers 137 and 96, releasing two neutrons. Binding energy per nucleon is 8.39 MeV for the first and 8.65 MeV for the second (approximate, read from a curve).

1. Binding energy of U-235: 235 × 7.59 = 1784 MeV.
2. Binding energy of fragments: 137 × 8.39 + 96 × 8.65 = 1149 + 830 = 1980 MeV.
3. Energy released: 1980 − 1784 = 196 MeV, about 2 × 10² MeV.

This is higher than the 185 MeV in worked example 1 because per-nucleon values read from a curve are rounded. Treat it as an estimate. Free neutrons have no binding energy, so they do not appear.

## Chain reactions

Each fission releases two or three neutrons. If at least one of them triggers a further fission, each round of fissions can start the next: a **chain reaction**.

Define k as the average number of neutrons from one fission that go on to trigger a further fission. This is a convenient way to describe the chain, though the guide does not require it.

| Value of k | Fission rate | Name |
|---|---|---|
| k < 1 | Falls away | Subcritical |
| k = 1 | Steady | Critical |
| k > 1 | Grows | Supercritical |

A power plant holds k at 1. Neutrons are lost by escaping from the surface of the fuel, or by being absorbed without causing fission. A larger piece of fuel loses a smaller fraction by escape, which is why a minimum, or **critical**, mass exists.

Natural uranium is only about 0.7% uranium-235, with the rest uranium-238, which absorbs neutrons without fissioning easily. Reactor fuel is usually **enriched** so that the proportion of uranium-235 is higher.

### Worked example 4: growth of a chain

A reactor has k = 1.04, so each generation of fissions is 1.04 times the last. Starting at 1000 fissions in one generation:

1. After 25 generations: 1000 × 1.04²⁵ = 2670 fissions per generation.
2. After 50 generations: 1000 × 1.04⁵⁰ = 7110.
3. With k = 0.96 instead, after 25 generations: 1000 × 0.96²⁵ = 360, so the reaction dies away.


## The parts of a nuclear power plant

| Component | Role | Typical materials |
|---|---|---|
| Fuel rods | Hold the fissile material; heat is produced here | Enriched uranium in sealed metal tubes |
| Moderator | Slows fast neutrons by collisions so they cause fission | Water, heavy water, graphite |
| Control rods | Absorb neutrons to set k | Boron, cadmium |
| Heat exchanger | Moves thermal energy from the primary coolant to a separate circuit | Steel tubes carrying water |
| Shielding | Absorbs radiation from the core | Thick concrete, steel, water |

**Moderator.** Fast neutrons (around 1 to 2 MeV) are poorly absorbed by uranium-235 compared with slow ones. A moderator is made of light nuclei. The neutrons lose energy by elastic collisions until they reach thermal energies, about 0.025 eV. The material must absorb few neutrons itself.

Why light nuclei? In a head-on elastic collision of a neutron with a stationary nucleus of mass number A, the fraction of kinetic energy kept by the neutron is ((A − 1)/(A + 1))². For hydrogen (A = 1) it is 0, and for deuterium (A = 2) it is 1/9. For carbon-12 it is (11/13)² = 0.716. Heavy nuclei barely slow a neutron, since it bounces off like a ball off a wall. This result is a supporting argument, not a stated requirement.

**Control rods.** Rods containing a strong neutron absorber move into or out of the core. Pushed in, they absorb more neutrons and k falls; withdrawn, k rises. They hold the reactor at k = 1 and shut it down.

**Heat exchanger.** The coolant that passes through the core becomes radioactive and may be at high pressure. In a heat exchanger it passes energy to a second water circuit, which makes steam for the turbine, so the steam never touches the core. Thermal power is P = (m/t) c ΔT.

**Shielding.** Neutrons, gamma rays and other radiation come from the core. Thick concrete and steel layers absorb them to protect workers and the public.

### Worked example 5: a whole plant

A plant has electrical output 640 MW at an overall efficiency of 34%. Each fission supplies 185 MeV of usable energy.

1. Thermal power: 640 ÷ 0.34 = 1.88 × 10⁹ W.
2. Waste heat: 1.88 × 10⁹ − 6.40 × 10⁸ = 1.24 × 10⁹ W.
3. Energy per fission: 185 × 1.602 × 10⁻¹³ = 2.96 × 10⁻¹¹ J.
4. Fissions per second: 1.88 × 10⁹ ÷ 2.96 × 10⁻¹¹ = 6.35 × 10¹⁹.
5. Mass fissioned per second: 6.35 × 10¹⁹ × 235 × 1.661 × 10⁻²⁷ = 2.48 × 10⁻⁵ kg.
6. Per year (3.15 × 10⁷ s): about 780 kg.

This connects to the guide's linking question: binding energy per fission, divided into the thermal power, gives the rate of fissions.

### Worked example 6: flow in the heat exchanger

The primary coolant must carry away 1.88 × 10⁹ W and warms by 40 K across the core. Take c = 4.2 × 10³ J kg⁻¹ K⁻¹.

1. m/t = P ÷ (c ΔT) = 1.88 × 10⁹ ÷ (4.2 × 10³ × 40).
2. m/t = 1.1 × 10⁴ kg s⁻¹.

## Fission products and their management

Fission produces three groups of material:

- **Fission fragments**, such as caesium-137 and strontium-90. They have too many neutrons for stability, so they decay by beta-minus emission, often with gamma rays. Both named here have half-lives near thirty years.
- **Heavier nuclides** formed when uranium-238 absorbs neutrons, such as plutonium-239. They are alpha emitters with very long half-lives, around 2.4 × 10⁴ years for plutonium-239.
- **Activated materials** such as the reactor structure, which become radioactive after neutron absorption.

After shutdown the fragments keep decaying, so the core still produces thermal energy. This **decay heat** must be removed.

Management of used fuel:

1. **Cooling ponds** hold it for years while the shortest-lived products decay. The water cools and shields.
2. **Dry storage** in sealed casks follows.
3. **Reprocessing** can separate uranium and plutonium for re-use, leaving smaller volumes of highly active waste.
4. **Vitrification** locks highly active waste in glass.
5. **Deep geological storage** places sealed containers in stable rock for the long term.

### Worked example 7: how long must waste be stored?

Caesium-137 has a half-life of 30.1 years. What fraction of a sample remains after 150 years, and how long until 0.1% remains?

1. Half-lives in 150 years: 150 ÷ 30.1 = 4.98. Fraction = 0.5⁴·⁹⁸ = 0.032, about 3%.
2. For 0.1%, 2ⁿ = 1000, so n = 9.97 half-lives.
3. Time: 9.97 × 30.1 = 300 years.

Now compare plutonium-239 (half-life 2.41 × 10⁴ years): 1000 years leaves 0.97 of the original. Storage for such nuclides must outlast human institutions, which is why the guide asks you to consider the long-term impact of storage: leaks, ground movement, security and the burden on future generations.

## Fission and climate change

A fission plant releases little carbon dioxide while running, and a small mass of fuel supplies a lot of energy. Against that stand waste, accident risk, mining impacts and cost. In an evaluation, give a point on each side and reach a judgment.

## Common errors

- Writing that control rods slow neutrons, or that the moderator absorbs them. Moderators slow; control rods absorb.
- Using only the mass of the fragments and forgetting the free neutrons in a mass-defect sum.
- Saying the heat exchanger makes steam from the core coolant directly.
- Stating that waste "stays radioactive for ever". Give half-lives and compare time scales.

## Official syllabus

IB Diploma Programme *Physics guide*, first assessment 2025, published by the International Baccalaureate Organization. This page paraphrases sub-topic E.4, Fission.
