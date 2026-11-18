---
title: "OxfordAQA A-Level Physics (9630): Safety aspects of nuclear reactors"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.12 – Nuclear energy"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 12.4
syllabusTopics:
  - qualification: "a-level"
    topic: "nuclear-energy-oxfordaqa-alevel"
    subtopic: "safety-aspects-nuclear-reactors-oxfordaqa-alevel-physics"
description: "Study guide to OxfordAQA 9630 section 3.12.4: fuel, remote handling, shielding, emergency shut-down, radioactive waste and the balance of risk and benefit."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.12.4, Safety aspects of nuclear reactors, part of Section 3.12 Nuclear energy, which is International A-level only. A summary of fuel, shielding, waste classes and risk is in the [induced fission, reactor safety and nuclear fusion study guide](/resources/oxfordaqa-a-level-physics-induced-fission-reactor-safety-and-nuclear-fusion/). This page explains *why* each safety measure is needed, using ideas from radioactivity elsewhere in the course: the properties of α, β and γ radiation, the inverse-square law for γ radiation and exponential decay. Condense it with the [reactor safety revision notes](/resources/oxfordaqa-a-level-physics-9630-safety-aspects-nuclear-reactors-oxfordaqa-alevel-physics-revision-notes/) and test yourself with the [reactor safety practice questions](/resources/oxfordaqa-a-level-physics-9630-safety-aspects-nuclear-reactors-oxfordaqa-alevel-physics-practice/).

## What the specification asks for

| Statement | What you must be able to do |
|---|---|
| Fuel used, remote handling of fuel, shielding, emergency shut-down | Describe each and explain the hazard it addresses |
| Production, remote handling and storage of radioactive waste materials | Explain where waste comes from and how it is managed |
| Appreciation of balance between risk and benefits in the development of nuclear power | Weigh risks against benefits and reach a judgement |

Most marks here come from extended answers. The calculations below show the physics behind the descriptions.

## Where the hazards come from

A working reactor contains three kinds of radioactive material:

- **Fission fragments.** These nuclei have too many neutrons for their size, so they are unstable. Most decay by β⁻ emission, often followed by γ emission, through chains of daughter nuclei. Their half-lives range from fractions of a second to many years.
- **Heavy nuclei made from uranium-238.** Uranium-238 can capture a neutron without splitting. Through later β⁻ decays this produces plutonium-239 and other heavy nuclei, many of them α emitters with very long half-lives.
- **Activated materials.** Neutrons absorbed by the steel, the coolant and impurities in them make some of those nuclei radioactive. This is why the reactor structure itself becomes radioactive.

Neutrons and γ rays escape from the core and are very penetrating. α and β particles are stopped by the fuel cladding and pressure vessel, but α emitters are dangerous if they escape and are breathed in or swallowed.

## Fuel and its handling

**Fresh fuel** is uranium, usually as uranium dioxide pellets sealed in metal tubes, enriched so that it contains a few per cent of uranium-235. It is only weakly radioactive: uranium emits mainly α particles, which the sealed tubes stop. It can be handled with care before use.

**Used (spent) fuel** is very different. It now contains fission fragments and newly made heavy nuclei, so it emits intense β and γ radiation and keeps generating heat from their decay. No one can work near it, so it is moved by **remote handling**: machines operated from behind shielding unload it from the core and carry it, under water, to cooling ponds. The water absorbs radiation and carries away the decay heat.

### Worked example 1: heat from decay

A canister of high-level waste has an activity of 5.0 × 10¹⁵ Bq. Each decay deposits on average 0.80 MeV in the canister. Find the rate at which it produces thermal energy.

Power = activity × energy per decay = 5.0 × 10¹⁵ × 0.80 × 1.60 × 10⁻¹³ = **640 W**

That is a steady output like a room heater, from a sealed container, with no way of switching it off. Waste of this kind must be cooled for years before long-term storage.

## Shielding

The core sits inside a thick **steel pressure vessel**, which is surrounded by a **thick concrete shield**. Together they absorb the neutrons and γ rays that would otherwise reach people outside. Dense materials absorb γ radiation well, and water and concrete, which contain light nuclei, slow and absorb neutrons.

Distance is also a defence. For a point source of γ radiation the intensity falls as the inverse square of the distance, I = k/r². This is the physics of remote handling.

### Worked example 2: why distance helps

The γ intensity from a used fuel component is measured as 3.6 × 10⁴ units at 0.50 m. Find the intensity at 3.0 m.

I ∝ 1/r², so I = 3.6 × 10⁴ × (0.50/3.0)² = 3.6 × 10⁴ / 36 = **1.0 × 10³ units**

Six times the distance gives one thirty-sixth of the intensity. Long-reach tools and remote machines exploit this, while shielding adds further reduction.

## Emergency shut-down

If a fault is detected, the reactor must be shut down at once. The control rods are inserted fully into the core, absorbing so many neutrons that the chain reaction stops within seconds. The rods are designed to fall into the core under gravity if power to their holding mechanism fails, so the shut-down does not depend on any power supply. A neutron-absorbing liquid can also be added to the coolant as a second, independent method.

Stopping fission does **not** stop the heating. The fission fragments already in the fuel keep decaying, so cooling must continue for days afterwards. Loss of cooling after shut-down is the most serious danger, because decay heat can then damage the fuel and release radioactive material.

### Worked example 3: cooling after shut-down

A reactor runs at 3.0 GW of thermal power. Just after shut-down, decay heating is still several per cent of full power; take 6% for this estimate. The emergency cooling water (c = 4200 J kg⁻¹ K⁻¹) may warm by 30 K. Find the flow needed.

Decay power = 0.06 × 3.0 × 10⁹ = 1.8 × 10⁸ W
Mass flow = P/(cΔθ) = 1.8 × 10⁸ / (4200 × 30) = **1.4 × 10³ kg s⁻¹**

Even a shut-down reactor needs over a tonne of cooling water every second at first.

## Radioactive waste: production, handling and storage

Waste is grouped by how radioactive it is.

- **Low-level waste**, such as protective clothing and tools, is slightly contaminated. It is sealed in drums and buried at shallow depth.
- **Intermediate-level waste**, such as fuel cladding and reactor components, needs shielding. It is often set in concrete inside steel containers.
- **High-level waste**, mainly spent fuel and the fission products separated from it, is intensely radioactive and hot. It is cooled in ponds for years, can be sealed in glass inside steel containers, and is held in shielded, cooled stores. Disposal deep underground in stable rock is the long-term plan in several countries.

All of it is handled remotely or behind shielding, and stored where it cannot leak into water supplies.

### Worked example 4: short-lived and long-lived waste

(a) Iodine-131 (half-life 8.02 days) in a waste stream has an activity of 4.0 × 10¹⁴ Bq. How long until it falls below 1.0 × 10⁹ Bq?

Activity ratio = 4.0 × 10¹⁴ / 1.0 × 10⁹ = 4.0 × 10⁵. Number of half-lives n = ln(4.0 × 10⁵)/ln 2 = 18.6.
Time = 18.6 × 8.02 = **149 days**, about five months.

(b) Plutonium-239 has a half-life of 24 100 years. What fraction of it remains after 1000 years?

A/A₀ = e^(−λt) with λ = ln 2/24 100 y⁻¹: e^(−0.693 × 1000/24 100) = **0.97**

The iodine is no longer a problem after months; the plutonium is almost unchanged after a millennium. This is why waste is sorted, and why the long-lived part needs storage that is safe for many thousands of years.

## Balancing risk and benefit

**Risk** combines how likely a harmful event is with how severe it would be. A nuclear accident is rare but can be severe; routine operation exposes workers and the public to very low doses.

| Benefits | Risks and costs |
|---|---|
| Very large energy from a small mass of fuel | Rare but severe accidents, with release of radioactive material |
| No carbon dioxide from the reactor during operation | Long-lived waste that must be stored safely for thousands of years |
| Continuous output, suited to base-load supply | High building and decommissioning costs |
| Less dependence on imported fossil fuels | Security of fuel and waste materials |

A strong answer does not just list points. It compares nuclear power with the realistic alternatives for the situation (for example fossil fuels, with their carbon dioxide and air pollution, or intermittent renewables), weighs the size of each risk, and reaches a reasoned judgement. The specification asks you to appreciate this balance, so there is no single right conclusion, but there must be one.

## Common mistakes

- Saying the control rods "cool the reactor". They absorb neutrons; the coolant removes energy.
- Thinking a shut-down reactor is safe once fission stops. Decay heat continues.
- Describing fresh fuel as highly radioactive. Spent fuel is the intense hazard.
- Saying shielding stops α particles from the core. α and β are stopped close to their source; shielding is mainly for neutrons and γ rays.
- Giving a list of advantages and disadvantages with no judgement.
- Using the inverse-square law for α or β particles. It applies to γ radiation from a point source.

## Exam technique

- **Describe** a safety feature: say what it is and what it does.
- **Explain**: add *why*, naming the radiation or hazard involved.
- **Discuss** or **evaluate** risk and benefit: give points on both sides, compare them, and finish with a justified conclusion.
- **Calculate**: decay-heat power is activity × energy per decay; distance effects use I ∝ 1/r²; storage times use half-lives or A = A₀e^(−λt).

## Where next

- Condense with the [reactor safety revision notes](/resources/oxfordaqa-a-level-physics-9630-safety-aspects-nuclear-reactors-oxfordaqa-alevel-physics-revision-notes/).
- Try the [reactor safety practice questions](/resources/oxfordaqa-a-level-physics-9630-safety-aspects-nuclear-reactors-oxfordaqa-alevel-physics-practice/).
- Review decay calculations in the [exponential radioactive decay study guide](/resources/oxfordaqa-a-level-physics-exponential-radioactive-decay/).

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.12.4 Safety aspects of nuclear reactors, published by OxfordAQA.
