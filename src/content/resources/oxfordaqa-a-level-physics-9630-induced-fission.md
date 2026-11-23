---
title: "OxfordAQA A-Level Physics (9630): Induced fission"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.12 – Nuclear energy"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 12.3
syllabusTopics:
  - qualification: "a-level"
    topic: "nuclear-energy-oxfordaqa-alevel"
    subtopic: "induced-fission-oxfordaqa-alevel-physics"
description: "Study guide to OxfordAQA 9630 section 3.12.3: thermal-neutron fission, chain reactions, critical mass, moderator, control rods, coolant and collisions."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.12.3, Induced fission, part of Section 3.12 Nuclear energy, which is International A-level only. The overview of fission, reactor safety and fusion, with tables of energy kept per collision and first worked examples, is in the [induced fission, reactor safety and nuclear fusion study guide](/resources/oxfordaqa-a-level-physics-induced-fission-reactor-safety-and-nuclear-fusion/). This page adds balancing fission equations, a full momentum-and-energy check of a moderating collision, a neutron budget for a working reactor and fuel use. Condense it with the [induced fission revision notes](/resources/oxfordaqa-a-level-physics-9630-induced-fission-revision-notes/) and test yourself with the [induced fission practice questions](/resources/oxfordaqa-a-level-physics-9630-induced-fission-practice/).

The specification says details of particular reactors are not required. Everything here applies to a general thermal reactor.

## What the specification asks for

| Statement | What you must be able to do |
|---|---|
| Fission induced by thermal neutrons; possibility of a chain reaction; critical mass | Explain each and the conditions for a steady chain reaction |
| Functions of the moderator, control rods and coolant in a thermal reactor | State and explain what each does |
| A simple mechanical model of moderation by elastic collisions | Apply conservation of momentum and kinetic energy to neutron collisions |
| Factors affecting the choice of materials; examples | Justify materials for each function |

## Fission induced by thermal neutrons

In **induced fission**, a nucleus absorbs a neutron, becomes highly unstable and splits into two smaller nuclei (fission fragments) plus two or three neutrons. The fragments fly apart because of their electric repulsion, carrying most of the energy as kinetic energy.

A **thermal neutron** is one whose kinetic energy has fallen to the same order as the energy of thermal motion in its surroundings, a few hundredths of an eV. Uranium-235 is far more likely to absorb a slow neutron and undergo fission than a fast one, which is why a thermal reactor slows its neutrons down. Neutrons from fission are fast, typically 1 to 2 MeV.

### Balancing a fission equation

Nucleon number and proton number are both conserved.

**Worked example 1.** ²³⁵₉₂U + ¹₀n → ¹⁴⁴₅₆Ba + ⁸⁹₃₆Kr + x ¹₀n. Find x.

Nucleons: 235 + 1 = 144 + 89 + x, so x = **3**.
Protons: 92 = 56 + 36. ✓

The fragments vary from one fission to the next. Most pairs are unequal, one with A around 90 to 100 and one around 135 to 145. The average number of neutrons released is about 2.5, so equations show 2 or 3.

## Chain reactions and critical mass

Each fission releases more than one neutron, so one fission can trigger others. Whether the reaction grows, holds steady or dies away depends on what happens to those neutrons. Each neutron can:

- cause another fission of uranium-235
- escape through the surface of the fuel
- be captured by uranium-238 without fission
- be absorbed by the moderator, coolant, structure or control rods

The reaction is steady (**critical**) when, on average, exactly one neutron from each fission causes another. More than one gives a growing (**supercritical**) reaction; fewer than one gives a dying (**subcritical**) one.

The **critical mass** is the minimum mass of fissile material that can sustain a chain reaction. Neutrons are produced throughout the volume but escape through the surface. A larger lump has a smaller surface area for each unit of volume, so a smaller fraction of neutrons escapes. The critical mass is smaller when:

- the fuel is a sphere, the shape with least surface for its volume
- the fuel is more enriched in uranium-235
- the fuel is denser, so a neutron meets more nuclei before reaching the surface
- a moderator is present, so more neutrons are thermal and likely to cause fission

### Worked example 2: a neutron budget

On average, each fission in a reactor releases 2.4 neutrons. Of these, 0.30 escape from the core, 0.55 are captured by uranium-238 without fission and 0.20 are absorbed by the moderator and coolant. How many must the control rods absorb for the reactor to run steadily?

For a steady rate, exactly 1.00 neutron must go on to cause fission.
Control rods must absorb 2.4 − 1.00 − 0.30 − 0.55 − 0.20 = **0.35 neutrons per fission**.

If the rods are raised so they absorb only 0.30, then 1.05 neutrons per fission cause further fissions. The rate rises by 5% in each generation. The operators then lower the rods again to bring the number back to 1.00.

## The three parts of the reactor core

| Part | Function | Why it works |
|---|---|---|
| Moderator | Slows fast neutrons to thermal speeds | Neutrons lose kinetic energy in elastic collisions with light nuclei |
| Control rods | Absorb neutrons to control the rate of fission | Made of materials whose nuclei capture neutrons readily; moved in or out of the core |
| Coolant | Carries energy from the core to the heat exchanger or turbines | Flows through the core, absorbing energy from the hot fuel |

Inserting the control rods further absorbs more neutrons and lowers the fission rate. Withdrawing them raises it.

## A mechanical model of moderation

You can model moderation with a moving ball (or air-track glider) colliding head-on and elastically with a stationary one.

- **Equal masses:** the moving ball stops and the other moves off with all the kinetic energy. A neutron striking a hydrogen-1 nucleus head-on can lose all its energy in one collision.
- **Target much heavier:** the moving ball bounces back with almost its original speed. A neutron striking a heavy nucleus loses very little energy.

For a body of mass m and speed u striking a stationary mass M head-on and elastically, momentum and kinetic energy are both conserved, which gives

v = u(m − M)/(m + M) for the incoming body, and V = 2mu/(m + M) for the target.

### Worked example 3: one collision with carbon-12

A 2.0 MeV neutron (mass 1.675 × 10⁻²⁷ kg) collides head-on and elastically with a stationary carbon-12 nucleus (M = 12m).

Initial speed: u = √(2E/m) = √(2 × 3.20 × 10⁻¹³ / 1.675 × 10⁻²⁷) = 1.95 × 10⁷ m s⁻¹
Neutron after: v = u(1 − 12)/13 = −(11/13)u = **−1.65 × 10⁷ m s⁻¹** (it rebounds)
Carbon after: V = 2u/13 = **3.0 × 10⁶ m s⁻¹**

Checks:
- Momentum before = m × 1.95 × 10⁷ = 3.27 × 10⁻²⁰ kg m s⁻¹. After = m(−1.65 × 10⁷) + 12m(3.0 × 10⁶) = 3.27 × 10⁻²⁰ kg m s⁻¹. ✓
- Fraction of kinetic energy kept by the neutron = (11/13)² = 0.72, so it loses 28% of its energy in this collision.

The neutron needs many such collisions to reach thermal energy. A real collision is usually glancing, so on average it loses less than this.

## Choosing materials

**Moderator.** Its nuclei should be light, so that each collision removes a large fraction of the neutron's energy, and they should absorb very few neutrons. Water, heavy water and graphite are used. Ordinary hydrogen is the lightest possible nucleus but absorbs some neutrons; deuterium and carbon absorb fewer, so they waste fewer neutrons.

**Control rods.** The material must absorb neutrons strongly and keep its strength at high temperatures. Boron and cadmium are examples.

**Coolant.** It should have a high specific heat capacity so that each kilogram carries a lot of energy, absorb few neutrons, and be easy to pump. Water (often under pressure so it does not boil) and carbon dioxide gas are examples. Water can act as both coolant and moderator.

## Worked example 4: fuel used each day

A reactor produces 3.0 GW of thermal power. Each fission of uranium-235 releases 200 MeV. Find the mass of uranium-235 used per day. Take 1 u = 1.66 × 10⁻²⁷ kg.

Energy per fission = 200 × 1.60 × 10⁻¹³ = 3.2 × 10⁻¹¹ J
Fissions per second = 3.0 × 10⁹ / 3.2 × 10⁻¹¹ = 9.4 × 10¹⁹
Fissions per day = 9.4 × 10¹⁹ × 86 400 = 8.1 × 10²⁴
Mass = 8.1 × 10²⁴ × 235 × 1.66 × 10⁻²⁷ = **3.2 kg per day**

## Common mistakes

- Saying the moderator absorbs neutrons. It slows them; the control rods absorb them.
- Saying the moderator slows down the chain reaction. It makes fission *more* likely.
- Defining critical mass as the mass that "explodes". It is the minimum mass for a self-sustaining chain reaction.
- Choosing a heavy material as a moderator because it is "dense". Light nuclei take more energy per collision.
- Forgetting that the neutron rebounds (negative velocity) when it hits a heavier nucleus.
- Losing the balance of a fission equation by forgetting the incoming neutron.

## Exam technique

- **State the function** of a component in one sentence, then **explain** how it achieves it.
- **Explain** moderation: elastic collisions, momentum conservation, light nuclei taking a large share of the kinetic energy.
- **Discuss** a choice of material: give at least two properties and link each to the function.
- **Calculate** a collision: write momentum conservation and the kinetic energy (or relative speed) condition, then solve.

## Where next

- Condense with the [induced fission revision notes](/resources/oxfordaqa-a-level-physics-9630-induced-fission-revision-notes/).
- Try the [induced fission practice questions](/resources/oxfordaqa-a-level-physics-9630-induced-fission-practice/).
- Continue with the [safety aspects of nuclear reactors study guide](/resources/oxfordaqa-a-level-physics-9630-safety-aspects-nuclear-reactors/).

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.12.3 Induced fission, published by OxfordAQA.
