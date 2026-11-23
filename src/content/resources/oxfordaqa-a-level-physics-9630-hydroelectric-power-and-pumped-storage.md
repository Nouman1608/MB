---
title: "OxfordAQA A-Level Physics (9630): Hydroelectric power and pumped storage"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.13 – Energy sources"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 13.4
syllabusTopics:
  - qualification: "a-level"
    topic: "energy-sources-oxfordaqa-alevel"
    subtopic: "hydroelectric-power-and-pumped-storage-oxfordaqa-alevel-physics"
description: "Study guide to OxfordAQA 9630 section 3.13.4: turbine and generator, the energy chain, water turbine power, base and back-up stations and pumped storage."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.13.4, Hydroelectric power and pumped storage, part of Section 3.13 Energy sources, which is International A-level only. A first set of examples on station power, water turbines and a pumped storage reservoir is in the [wind, solar and hydroelectric energy study guide](/resources/oxfordaqa-a-level-physics-wind-solar-and-hydroelectric-energy/). This page checks the energy chain numerically, compares water and wind turbines of the same size, works out round-trip efficiency and the time to fill and empty a reservoir, and sizes the water needed to meet a surge in demand. Condense it with the [hydroelectric power revision notes](/resources/oxfordaqa-a-level-physics-9630-hydroelectric-power-and-pumped-storage-revision-notes/) and test yourself with the [hydroelectric power practice questions](/resources/oxfordaqa-a-level-physics-9630-hydroelectric-power-and-pumped-storage-practice/).

Take g = 9.81 N kg⁻¹ and the density of water as 1000 kg m⁻³.

## What the specification asks for

| Statement | What you must be able to do |
|---|---|
| Components of a hydroelectric power station: turbine and generator | Describe what each does |
| Transfer of gravitational potential energy to kinetic energy | Follow the energy chain and calculate each stage |
| Maximum power available from flow of water through a turbine = ½πr²ρv³, ρ the density of water | Use and rearrange it; compare with wind |
| Idea of base-power stations and back-up power stations | Explain the roles and why hydroelectric suits back-up |
| Principles of operation of pumped storage systems | Explain how they store energy; calculate stored energy and efficiency |

The specification labels the turbine expression E, but it is a power in watts.

## The station and its energy chain

Water stored behind a dam in a high reservoir runs down a large pipe (the penstock) to the turbine house at a lower level.

- The **turbine** is turned by the moving water: the water's kinetic energy becomes kinetic energy of the rotating shaft.
- The **generator** on the same shaft rotates coils relative to a magnetic field, so the changing flux linkage induces an emf (section 3.10). Kinetic energy becomes electrical energy.

The chain is: gravitational potential energy of the water → kinetic energy of the water → kinetic energy of the turbine → electrical energy, with some energy dissipated by friction and turbulence and in the generator at every stage.

If water falls through a height h (the **head**) with no losses, mgh = ½mv², so the speed reaching the turbine is v = √(2gh). With a volume flow rate Q, the mass per second is ρQ and the power available is ρQgh.

### Worked example 1: checking the chain

Water flows at 30 m³ s⁻¹ through a head of 85 m.

Power available = ρQgh = 1000 × 30 × 9.81 × 85 = **2.5 × 10⁷ W** (25 MW)
Ideal speed at the turbine = √(2 × 9.81 × 85) = **40.8 m s⁻¹**
Kinetic energy per second = ½ × (3.0 × 10⁴ kg s⁻¹) × 40.8² = 2.5 × 10⁷ W

The kinetic energy delivered each second equals the potential energy lost each second, as the energy chain requires. With a generator that is 90% efficient, and other losses ignored, the electrical output would be 22.5 MW.

## Water turbines in a flowing stream: ½πr²ρv³

A turbine placed in a river or tidal current, rather than at the foot of a dam, is treated in the same way as a wind turbine: the water passing through the swept area πr² each second has mass ρπr²v and kinetic energy ½ρπr²v³. The only change from 3.13.2 is that ρ is now the density of water.

### Worked example 2: water against wind

A river turbine has blades of length 2.0 m in a current of 1.8 m s⁻¹.

P = ½ × π × 2.0² × 1000 × 1.8³ = **3.7 × 10⁴ W** (37 kW)

A wind turbine with the same 2.0 m blades in a 10 m s⁻¹ wind (air density 1.2 kg m⁻³) has only ½ × π × 4.0 × 1.2 × 1000 = 7.5 × 10³ W available. To match the river turbine, the wind would need v³ = 3.66 × 10⁴ / (½ × π × 4.0 × 1.2) = 4.86 × 10³, so v = **17 m s⁻¹**, a strong gale. Water is about 800 times denser than air, so slow currents carry large powers, and water turbines can be much smaller for the same output.

## Base-power and back-up power stations

Electricity demand is never zero, but it rises and falls through the day.

- **Base-power stations** run continuously at a steady output to meet the minimum demand that is always present. Stations that take a long time to start or change output, such as nuclear stations, are used this way.
- **Back-up power stations** are brought into use when demand rises above the base supply, often at short notice. They must start quickly.

Hydroelectric stations make excellent back-up stations: opening the valves sends water through the turbines and the generators reach full output within minutes, with no fuel to heat and no boiler to bring to temperature.

## Pumped storage

A pumped storage system has two reservoirs at different heights and machines that can work either as pump and motor or as turbine and generator.

1. When demand is low and there is spare generating capacity (often at night), electricity drives the machines as pumps, lifting water from the lower reservoir to the upper one. Electrical energy is stored as gravitational potential energy.
2. When demand is high, the water is released back down through the machines, now working as turbines and generators, and electricity is produced within minutes.

Pumped storage is **not an energy source**. Some energy is wasted in each direction, so it always returns less electrical energy than it uses. Its value is that it moves energy from times of low demand to times of high demand, lets base-power stations run steadily, and can absorb surplus output from intermittent sources such as wind.

### Worked example 3: storing and returning energy

An upper reservoir holds 4.0 × 10⁶ m³ of water at a mean head of 350 m. Pumping is 85% efficient and generating is 88% efficient.

Energy stored = ρVgh = 1000 × 4.0 × 10⁶ × 9.81 × 350 = **1.37 × 10¹³ J** (3.8 × 10³ MWh)
Electrical energy used to pump = 1.37 × 10¹³ / 0.85 = 1.62 × 10¹³ J
Electrical energy returned = 1.37 × 10¹³ × 0.88 = 1.21 × 10¹³ J
Round-trip efficiency = 0.85 × 0.88 = **0.75**, or 75%

Generating at 1.5 GW, the reservoir empties in 1.21 × 10¹³ / 1.5 × 10⁹ = 8.1 × 10³ s, about 2.2 hours. Refilling with 1.2 GW of pumping power takes 1.62 × 10¹³ / 1.2 × 10⁹ = 1.35 × 10⁴ s, about 3.7 hours.

### Worked example 4: meeting a surge in demand

Demand rises suddenly by 1.2 GW for 30 minutes. A pumped storage station with a 350 m head and 88% generating efficiency covers it. What volume of water is needed?

Electrical energy = 1.2 × 10⁹ × 1800 = 2.16 × 10¹² J
Potential energy needed = 2.16 × 10¹² / 0.88 = 2.45 × 10¹² J
Volume = E/(ρgh) = 2.45 × 10¹² / (1000 × 9.81 × 350) = **7.1 × 10⁵ m³**

## Common mistakes

- Using the density of air in the water-turbine expression, or the reverse.
- Treating ½πr²ρv³ (a turbine in a current) and ρQgh (water falling through a head) as the same situation.
- Calling pumped storage a source of energy, or giving it an efficiency above 100%.
- Multiplying efficiencies wrongly: energy to pump is stored energy ÷ pumping efficiency, not × it.
- Describing a base-power station as one that is "always on full" without saying it meets the constant minimum demand.
- Forgetting that the generator, not the turbine, produces the electricity.

## Exam technique

- **Describe** the station: name reservoir, penstock, turbine and generator, and state the energy change at each.
- **Calculate:** decide whether the question describes falling water (use mgh per second) or a turbine in a stream (use ½πr²ρv³).
- **Explain** why hydroelectric power suits back-up: fast start, no fuel heating, output changed by valves.
- **Explain** pumped storage: when it pumps, when it generates, why it is useful despite losses.
- **Evaluate** a scheme: weigh fast response and no emissions in operation against flooding of land, effects on rivers and the need for suitable geography, and reach a judgement.

## Where next

- Condense with the [hydroelectric power revision notes](/resources/oxfordaqa-a-level-physics-9630-hydroelectric-power-and-pumped-storage-revision-notes/).
- Try the [hydroelectric power practice questions](/resources/oxfordaqa-a-level-physics-9630-hydroelectric-power-and-pumped-storage-practice/).
- Compare with the [wind energy study guide](/resources/oxfordaqa-a-level-physics-9630-wind-energy/).

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.13.4 Hydroelectric power and pumped storage, published by OxfordAQA.
