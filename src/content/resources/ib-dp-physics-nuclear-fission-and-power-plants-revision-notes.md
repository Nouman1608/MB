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

## Chain reactions

- k is the average number of neutrons per fission that go on to trigger a further fission.
- k < 1: subcritical, dies away. k = 1: critical, steady. k > 1: supercritical, grows.
- A plant is run at k = 1 and adjusted slightly by the control rods.
- Neutrons are lost by escaping or by being absorbed without fission.
- There is a minimum, **critical**, mass because bigger pieces lose a smaller fraction of neutrons through the surface.
- Natural uranium is about 0.7% uranium-235. **Enrichment** raises this fraction.

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

## Waste and storage

| Product | Typical radiation | Notes |
|---|---|---|
| Fission fragments such as caesium-137, strontium-90 | Beta-minus, gamma | Half-lives around 30 years; dominate for the first few centuries |
| Heavy nuclides such as plutonium-239 | Alpha | Half-life about 2.41 × 10⁴ years |
| Activated structure | Mixed | Decays with the half-life of each nuclide |

- **Decay heat:** fragments keep decaying after the chain reaction stops, so cooling must continue.
- **Management route:** cooling pond, then dry cask, then reprocessing and vitrification in glass if used, then deep geological storage.
- **Long-term impact:** storage must outlast institutions. Consider leaks, ground movement, security and the burden on future generations.

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

## Official syllabus

IB Diploma Programme *Physics guide*, first assessment 2025, published by the International Baccalaureate Organization. These notes paraphrase sub-topic E.4, Fission.
