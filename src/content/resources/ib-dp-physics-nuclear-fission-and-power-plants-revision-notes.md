---
title: "IB DP Physics: Nuclear fission and power plants (DP Physics) -- Revision Notes"
seoTitle: "IB Physics E.4 Fission Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed IB DP Physics revision notes on E.4 fission: energy release, chain reactions, reactor components, waste and key calculations."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense sub-topic E.4, Fission, from the IB *Physics guide* for first assessment 2025. The content is the same for SL and HL, since the guide adds no extra HL material to E.4. For full explanations and extra worked examples, use the [study guide](/resources/ib-dp-physics-nuclear-fission-and-power-plants/).

Test yourself afterwards with the [practice questions](/resources/ib-dp-physics-nuclear-fission-and-power-plants-practice/), tick off outcomes on the [printable checklist](/checklists/ib/ib-dp/physics/), and see the [IB DP Physics hub](/boards/ib/ib-dp/physics/). The [free 10-minute diagnostics](/diagnostics/) show which topics to prioritise. Binding energy basics are in the [nuclear structure revision notes](/resources/ib-dp-physics-nuclear-structure-binding-energy-and-types-of-revision-notes/), and half-life is in the [decay law notes](/resources/ib-dp-physics-activity-half-life-and-the-radioactive-decay-law-revision-notes/).

## Core ideas in one place

- **Fission:** a heavy nucleus splits into two smaller fragments, usually with two or three free neutrons.
- **Spontaneous fission:** no trigger needed; rare.
- **Neutron-induced fission:** the nucleus absorbs a neutron, then splits. Uranium-235 with slow neutrons is the standard case.
- **Why energy is released:** fragments have higher binding energy per nucleon than the parent, so the products have less mass. Energy released = Δm c².
- **Where it goes:** mostly the fragments' kinetic energy, shared with the fuel as thermal energy. The rest goes to neutrons, gamma rays and later beta decay.
- **Chain reaction:** neutrons from one fission cause further fissions.
- **Fission products:** neutron-rich fragments that are beta emitters, plus long-lived heavy nuclides such as plutonium-239.

## Key relationships

| Quantity | Relationship | Notes |
|---|---|---|
| Energy released | E = Δm c² | Δm = mass of reactants − mass of products |
| Mass to energy | 1 u = 931.5 MeV/c² | Given as data in questions here |
| MeV to J | 1 MeV = 1.602 × 10⁻¹³ J | |
| From binding energy | E = Σ (BE of products) − BE of parent | Free neutrons contribute zero |
| Thermal power | P = (m/t) c ΔT | For a coolant stream |
| Efficiency | useful output ÷ input power | Waste heat = input − output |
| Fissions per second | thermal power ÷ energy per fission | Energy per fission in joules |
| Mass used | fissions × mass of nucleus | Nuclear mass about A × 1.661 × 10⁻²⁷ kg |
| Half-life | fraction left = (1/2)^(t / T) | For waste storage times |
| Generation growth | N after n generations = N₀ kⁿ | A convenient model, not required by the guide |

## Method: energy from masses

1. Write a balanced equation. Check nucleon number and proton number both balance.
2. Add reactant masses, including the incoming neutron. Add product masses, including every emitted neutron.
3. Subtract: Δm = reactants − products. It must be positive for energy to be released.
4. For MeV, multiply by 931.5. For joules, convert u to kg first and use c².
5. Quote units and a sensible number of significant figures.

**Worked reminder.** U-235 + n gives Xe-140 + Sr-94 + 2n. Reactants 236.052595 u, products 235.854331 u, so Δm = 0.198264 u and E = 0.198264 × 931.5 = 185 MeV, or 2.96 × 10⁻¹¹ J.

## Method: energy from binding energy per nucleon

1. Find the total binding energy of each nucleus: A × (binding energy per nucleon).
2. Add up the products.
3. Subtract the parent's total.

Because per-nucleon values are read from a curve, the answer is an estimate. U-235 at 7.59 MeV per nucleon gives a total of 1784 MeV. Fragments of 137 and 96 nucleons at 8.39 and 8.65 MeV per nucleon give 1980 MeV, so about 196 MeV is released.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-nuclear-fission-and-power-plants--01-fission-binding-energy.webp" width="900" height="850" alt="A binding energy per nucleon graph against nucleon number rises to a peak near iron and nickel and falls to about 7.6 MeV for uranium-235. Two fragments at about 8.5 MeV sit higher on the curve. The products are more tightly bound, so the difference is released." loading="lazy">
  <figcaption>Fragments are nearer the binding energy peak, so total binding energy rises and energy is released.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-nuclear-fission-and-power-plants--02-fission-mass-difference.webp" width="900" height="1030" alt="A slow neutron and U-235 form U-236*, which splits into Xe-140, Sr-94 and two neutrons, with nucleons (236) and protons (92) balancing. Bars to a truncated scale show mass before 236.052595 u and after 235.854331 u. The 0.198264 u difference times 931.5 gives about 185 MeV, 2.96e-11 J." loading="lazy">
  <figcaption>The mass lost, 0.198264 u, becomes about 185 MeV per fission.</figcaption>
</figure>


## Chain reactions

- k is the average number of neutrons per fission that go on to trigger a further fission.
- k < 1: subcritical, dies away. k = 1: critical, steady. k > 1: supercritical, grows.
- A plant is run at k = 1 and adjusted slightly by the control rods.
- Neutrons are lost by escaping or by being absorbed without fission.
- There is a minimum, **critical**, mass because bigger pieces lose a smaller fraction of neutrons through the surface.
- Natural uranium is about 0.7% uranium-235. **Enrichment** raises this fraction.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-nuclear-fission-and-power-plants--03-chain-reaction-k.webp" width="900" height="1120" alt="Three panels show generations of fissions as dots. For k below 1 the counts fall, for k equal to 1 they stay steady, and for k above 1 they double each generation. A footer gives 2670 fissions after 25 generations for k = 1.04 and 360 for k = 0.96, from 1000." loading="lazy">
  <figcaption>k &lt; 1 dies away, k = 1 is steady and k &gt; 1 grows; a power plant holds k at 1.</figcaption>
</figure>


## Parts of a plant: roles at a glance

| Part | One-line role | Common wrong answer |
|---|---|---|
| Moderator | Slows fast neutrons by elastic collisions so they can cause fission | "Absorbs neutrons" |
| Control rods | Soak up neutrons so k stays at 1, or drops below 1 to shut down | "Slow neutrons" |
| Heat exchanger | Passes thermal energy from the primary coolant to a second circuit that makes steam | "Makes the core cooler by itself" |
| Shielding | Absorbs neutrons and gamma rays from the core | "Stops the reaction" |
| Fuel rods | Contain enriched uranium; energy is released here | "Produce neutrons without fuel" |

**Moderator material.** Light nuclei, low neutron absorption. Head-on elastic collision, fraction of energy kept by the neutron: ((A − 1)/(A + 1))². Hydrogen 0, deuterium 1/9, carbon-12 0.716. Heavier nuclei slow a neutron far less per collision.

**Why a second circuit?** The primary coolant passes through the core and becomes radioactive, so the turbine side stays separate.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-nuclear-fission-and-power-plants--04-reactor-parts.webp" width="900" height="930" alt="A cross-section shows a reactor core inside concrete shielding with fuel rods, moderator water and control rods. Hot coolant flows through a heat exchanger and returns cool, boiling water in a separate circuit whose steam drives a turbine and generator, then condenses. Numbered labels match fuel rods, moderator, control rods, heat exchanger and shielding." loading="lazy">
  <figcaption>Fuel rods make heat, the moderator slows neutrons, control rods absorb them, and the heat exchanger keeps core coolant away from the turbine steam.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-nuclear-fission-and-power-plants--05-moderator-collisions.webp" width="900" height="1060" alt="Four rows show a neutron hitting hydrogen, deuterium, carbon-12 and a heavy nucleus. Bars show the fraction of energy kept: 0, 1/9, 0.72 and about 0.98. Heavy nuclei barely slow a neutron." loading="lazy">
  <figcaption>The fraction of energy a neutron keeps is ((A-1)/(A+1))^2, so light nuclei slow it fastest.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-nuclear-fission-and-power-plants--06-plant-energy-fuel.webp" width="900" height="910" alt="A flow diagram: 640 MW of electricity at 34 percent efficiency needs 1.88e9 W of thermal power, with 1.24e9 W as waste heat. At 185 MeV per fission this is 6.35e19 fissions per second, 2.48e-5 kg of U-235 per second, about 780 kg per year." loading="lazy">
  <figcaption>Dividing thermal power by the energy per fission gives the fuel use of a whole plant.</figcaption>
</figure>


## Waste and storage

| Product | Typical radiation | Notes |
|---|---|---|
| Fission fragments such as caesium-137, strontium-90 | Beta-minus, gamma | Half-lives around 30 years; dominate for the first few centuries |
| Heavy nuclides such as plutonium-239 | Alpha | Half-life about 2.41 × 10⁴ years |
| Activated structure | Mixed | Decays with the half-life of each nuclide |

- **Decay heat:** fragments keep decaying after the chain reaction stops, so cooling must continue.
- **Management route:** cooling pond, then dry cask, then reprocessing and vitrification in glass if used, then deep geological storage.
- **Long-term impact:** storage must outlast institutions. Consider leaks, ground movement, security and the burden on future generations.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-nuclear-fission-and-power-plants--07-fission-waste-route.webp" width="900" height="1100" alt="Three cards show fission fragments (Cs-137, Sr-90; beta-minus; about 30 years), plutonium-239 (alpha; 2.4e4 years) and activated materials. Five numbered steps follow: cooling pond, dry storage, reprocessing, vitrification and deep geological storage. A note says decay heat must still be removed after shutdown." loading="lazy">
  <figcaption>Used fuel moves from cooling ponds through casks, reprocessing and glass to deep geological storage.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-nuclear-fission-and-power-plants--08-waste-decay-times.webp" width="900" height="950" alt="Two graphs of fraction remaining against years. Caesium-137 (30.1 year half-life) falls to 3 percent at 150 years and 0.1 percent at 300 years. Plutonium-239 (2.41e4 years) is still 97 percent after 1000 years." loading="lazy">
  <figcaption>Cs-137 needs centuries, but Pu-239 needs storage that outlasts human institutions.</figcaption>
</figure>


## Worked reminders: plant and waste

**Plant.** Electrical output 640 MW at 34% efficiency gives thermal power 640 ÷ 0.34 = 1.88 × 10⁹ W. With 185 MeV (2.96 × 10⁻¹¹ J) per fission, that is 6.35 × 10¹⁹ fissions per second, which uses about 2.5 × 10⁻⁵ kg of uranium-235 each second.

**Coolant flow.** To carry 1.88 × 10⁹ W with a 40 K rise and c = 4.2 × 10³ J kg⁻¹ K⁻¹, the mass flow is 1.88 × 10⁹ ÷ (4.2 × 10³ × 40) = 1.1 × 10⁴ kg s⁻¹.

**Waste.** Caesium-137 has a half-life of 30.1 years. After 150 years, 0.5 raised to 4.98 leaves 3%. To reach 0.1% takes about 10 half-lives, roughly 300 years.

## Must-know distinctions

- **Spontaneous vs induced:** no trigger vs absorbed neutron.
- **Moderator vs control rod:** slows vs absorbs.
- **Heat exchanger vs shielding:** transfers thermal energy vs absorbs radiation.
- **Fission vs fusion:** heavy splits vs light joins. Fusion is E.5.
- **Subcritical, critical, supercritical:** k below, at and above 1.

## Quick self-test

1. U-235 absorbs a neutron and forms Sr-90, a xenon nuclide and two neutrons. Give the nucleon number and proton number of the xenon.
2. A fission has a mass difference of 0.2150 u. Calculate the energy released in MeV, using 1 u = 931.5 MeV/c².
3. Convert 200 MeV to joules.
4. A reactor has k = 1.10 and 200 fissions in the first generation. How many fissions occur in the eleventh generation?
5. Which part of a reactor absorbs neutrons, and which slows them?
6. What fraction of its kinetic energy does a neutron keep after a head-on elastic collision with a stationary deuterium nucleus (A = 2)?
7. A plant has a thermal power of 3.0 GW and an efficiency of 33%. Find the electrical output and the waste heat power.
8. How many fissions per second give 1.0 GW, if each releases 200 MeV?
9. Iodine-131 has a half-life of 8.0 days. What fraction remains after 40 days?
10. Why must a reactor be cooled after the chain reaction has been stopped?

### Answers

1. A = 236 − 90 − 2 = 144; Z = 92 − 38 = 54. Xenon-144, nucleon number **144**, proton number **54**.
2. 0.2150 × 931.5 = **200 MeV**.
3. 200 × 1.602 × 10⁻¹³ = **3.20 × 10⁻¹¹ J**.
4. The first generation is 200, so the eleventh follows ten multiplications: 200 × 1.10¹⁰ = **519** (about 5.2 × 10²).
5. Control rods absorb; the moderator slows.
6. Fraction kept = (1/3)² = **1/9**, about 0.11.
7. Electrical = 0.33 × 3.0 = **0.99 GW**; waste heat = 3.0 − 0.99 = **2.01 GW**.
8. Energy per fission = 3.20 × 10⁻¹¹ J. Rate = 1.0 × 10⁹ ÷ 3.20 × 10⁻¹¹ = **3.1 × 10¹⁹ s⁻¹**.
9. 40 ÷ 8.0 = 5 half-lives, so (1/2)⁵ = **1/32 = 0.031**.
10. Fission products keep decaying and release thermal energy (decay heat), which can overheat the fuel.

## Where marks are usually lost

- Mixing up the moderator and control rods, or saying either "stops the reaction" without saying how.
- Forgetting to include every neutron in a mass-defect sum.
- Leaving the energy in MeV when joules are asked for, or the reverse.
- Describing a chain reaction without saying neutrons from fission cause more fission.
- Using the electrical output instead of the thermal input to find the number of fissions.
- Giving a waste answer such as "bury it" without half-life, time scale or risk.
- Treating k as a count of neutrons per fission rather than neutrons that go on to cause fission.
- Missing the unit prefix, such as MW against GW.

## Frequently asked questions

**Is there extra HL content in IB DP Physics E.4 Fission?**
No. The guide adds no extra HL material to E.4, so the content is the same for SL and HL.

**Why is there a critical mass for a chain reaction?**
Neutrons are lost by escaping through the surface of the fuel. A bigger piece loses a smaller fraction of its neutrons this way, so there is a minimum mass for a self-sustaining chain reaction.

**What is enriched uranium?**
Natural uranium is only about 0.7% uranium-235. Enrichment raises the fraction of uranium-235 in the fuel.

**Is the multiplication factor k required by the IB DP Physics guide?**
No. The generation-growth model using k is a convenient way to describe a chain reaction, but the guide does not require it.

## Official syllabus

IB Diploma Programme *Physics guide*, first assessment 2025, published by the International Baccalaureate Organization. These notes paraphrase sub-topic E.4, Fission.
