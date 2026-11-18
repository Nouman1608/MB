---
title: "OxfordAQA A-Level Physics (9630): Wind energy"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.13 – Energy sources"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 13.2
syllabusTopics:
  - qualification: "a-level"
    topic: "energy-sources-oxfordaqa-alevel"
    subtopic: "wind-energy-oxfordaqa-alevel-physics"
description: "Study guide to OxfordAQA 9630 section 3.13.2: maximum turbine power ½πr²ρv³, why it cannot all be used, wind shadows, farm layout and the environment."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.13.2, Wind energy, part of Section 3.13 Energy sources, which is International A-level only. The derivation of the power equation and a first worked example are in the [wind, solar and hydroelectric energy study guide](/resources/oxfordaqa-a-level-physics-wind-solar-and-hydroelectric-energy/). This page shows why a variable wind gives more energy than its average speed suggests, links power to air density through the ideal gas equation, sizes a turbine for a target output and quantifies wind shadows. Condense it with the [wind energy revision notes](/resources/oxfordaqa-a-level-physics-9630-wind-energy-oxfordaqa-alevel-physics-revision-notes/) and test yourself with the [wind energy practice questions](/resources/oxfordaqa-a-level-physics-9630-wind-energy-oxfordaqa-alevel-physics-practice/).

## What the specification asks for

| Statement | What you must be able to do |
|---|---|
| Maximum power available from a wind turbine = ½πr²ρv³, ρ the density of air | Use and rearrange it; explain each factor |
| Appreciation why all this energy cannot be used | Give the physical reasons |
| Wind shadows determine arrangement of turbines in a wind farm | Explain wind shadows and their effect on layout |
| Environmental factors in the use of wind turbines | Weigh advantages and disadvantages for a given site |

The specification labels the quantity E, but ½πr²ρv³ has the unit of power, watts. Write P in your working and say that it is a power.

The introduction to Sections 3.11 to 3.13 also asks you to use the advantages and disadvantages of each source to judge which is appropriate in a given situation, so expect extended questions that compare wind with other sources.

## The equation as a flow of kinetic energy

Picture the air that crosses the circle swept by the blades in one second. It forms a cylinder of cross-section πr² and length v, so:

- mass of air per second = ρπr²v
- kinetic energy of each kilogram = ½v²
- kinetic energy arriving per second = ½(ρπr²v)v² = ½πr²ρv³

Each factor tells you something about choosing a turbine and a site:

- **r²:** doubling the blade length gives four times the power, so turbines have grown very large.
- **v³:** two of the three powers of v come from the kinetic energy per kilogram and one from the mass flow. A site with 10% faster wind offers 1.1³ = 1.33 times the power.
- **ρ:** denser air carries more energy. Density changes little from place to place, but it is not constant.

### Worked example 1: the mass of air involved

A rotor with 40 m blades faces a 10 m s⁻¹ wind of density 1.2 kg m⁻³.

Mass per second = ρπr²v = 1.2 × π × 40² × 10 = **6.0 × 10⁴ kg s⁻¹**
Kinetic energy per second = ½ × 6.03 × 10⁴ × 10² = **3.0 × 10⁶ W**

Sixty tonnes of air pass through the rotor every second. That is why even a moderate wind carries megawatts.

## Why the wind's average speed misleads

Because P ∝ v³, the mean power over a period is not the power at the mean speed. Fast spells contribute far more than slow ones.

### Worked example 2: a day of variable wind

The same 40 m turbine (ρ = 1.2 kg m⁻³) experiences 4.0 m s⁻¹ for 12 hours and 12 m s⁻¹ for 12 hours.

½πr²ρ = ½ × π × 1600 × 1.2 = 3016 W per (m s⁻¹)³
At 4.0 m s⁻¹: P = 3016 × 64 = 1.93 × 10⁵ W
At 12 m s⁻¹: P = 3016 × 1728 = 5.21 × 10⁶ W
Mean available power = (0.193 + 5.21)/2 × 10⁶ = **2.7 × 10⁶ W**

The mean speed is 8.0 m s⁻¹, which would suggest 3016 × 512 = 1.54 × 10⁶ W. The true average is 1.75 times larger. Over the day, the maximum energy available is 2.70 × 10⁶ × 86 400 = 2.3 × 10¹¹ J. When a question gives a spread of speeds, work out the power for each speed and then average.

## Air density and the ideal gas equation

From section 3.11.3, ρ = pM/RT for a gas of molar mass M. Air density falls at high altitude, where pressure is lower, and rises in cold weather.

### Worked example 3: a hill-top site

Air has molar mass 0.029 kg mol⁻¹. At sea level, p = 1.01 × 10⁵ Pa and T = 288 K. On a hill, p = 0.90 × 10⁵ Pa and T = 278 K. Take R = 8.31 J mol⁻¹ K⁻¹.

ρ(sea level) = (1.01 × 10⁵ × 0.029)/(8.31 × 288) = 1.22 kg m⁻³
ρ(hill) = (0.90 × 10⁵ × 0.029)/(8.31 × 278) = 1.13 kg m⁻³

At the same wind speed the hill offers 1.13/1.22 = 0.92 of the power, 8% less. Hill sites are still chosen because their wind is usually faster, and the v³ factor outweighs the small change in ρ.

## Sizing a turbine

### Worked example 4: choosing a blade length

A turbine must deliver 2.0 MW at a wind speed of 11 m s⁻¹. It converts 40% of the maximum available power into electrical output. Air density is 1.2 kg m⁻³.

Maximum power needed = 2.0 × 10⁶ / 0.40 = 5.0 × 10⁶ W
r = √(2P/(πρv³)) = √(2 × 5.0 × 10⁶ / (π × 1.2 × 1331)) = √1993 = **45 m**

## Why all the energy cannot be used

- **The air must keep moving.** If the turbine removed all the kinetic energy, the air would stop at the rotor and no more air could flow through. The air leaves with lower, but not zero, speed. A theoretical analysis known as the Betz limit puts the maximum fraction that any turbine could extract at about 59%; you do not need this value, but it shows the limit is fundamental, not a matter of engineering.
- **Energy losses in the machine.** Friction in bearings and gearbox, turbulence at the blades and resistive heating in the generator and cables all waste energy.
- **Operating limits.** Below a minimum speed the rotor does not turn usefully; in very strong winds turbines are stopped to avoid damage. The energy in those winds is not collected.

## Wind shadows and farm layout

Air leaving a turbine has given up some of its kinetic energy, so it is slower, and the rotating blades leave it turbulent. Downwind of each turbine is a **wind shadow**. A turbine placed in it receives slower, gustier air.

### Worked example 5: the cost of a shadow

A turbine sits where the wind speed is 75% of the free stream value. The power available is (0.75)³ = **0.42** of what an unshadowed turbine receives: a 25% loss of speed costs 58% of the power.

Wind farms are therefore laid out with turbines spaced several rotor diameters apart, with larger gaps along the direction of the prevailing wind than across it, and are often staggered so that each row sees past the one in front. The spacing means a wind farm needs a large area of land or sea.

## Environmental factors

| In favour | Against |
|---|---|
| No carbon dioxide or other emissions during operation | Output depends on the wind, so back-up or storage is needed |
| No fuel to extract, transport or pay for | Visual impact on landscapes |
| Land between onshore turbines can still be farmed | Noise from blades and gearboxes near homes |
| Offshore sites have stronger, steadier winds | Risk to birds and bats; offshore sites cost more to build, connect and maintain |
| Energy used to make a turbine is recovered during its working life | Large areas are needed because of spacing |

An exam judgement should fit the situation. A remote, windy coastline with few residents suits a wind farm; a sheltered valley near a town does not.

## Common mistakes

- Using the diameter as r. The blade length is the radius.
- Forgetting to cube v, or cubing the mean speed for a variable wind.
- Calling ½πr²ρv³ an energy because the specification labels it E.
- Saying a turbine could extract all the energy "if it were efficient enough".
- Using the density of water in place of air.
- Listing environmental points without relating them to the situation in the question.

## Exam technique

- **Show that** the power is proportional to v³: give both sources of v (mass flow and kinetic energy per kilogram).
- **Calculate:** write P = ½πr²ρv³, substitute, give watts or megawatts.
- **Explain** why not all energy is used: start with the air needing to keep moving, then add machine losses.
- **Explain** layout: link the wind shadow to slower air and then to v³.
- **Evaluate** a site: use points on both sides and reach a judgement for that site.

## Where next

- Condense with the [wind energy revision notes](/resources/oxfordaqa-a-level-physics-9630-wind-energy-oxfordaqa-alevel-physics-revision-notes/).
- Try the [wind energy practice questions](/resources/oxfordaqa-a-level-physics-9630-wind-energy-oxfordaqa-alevel-physics-practice/).
- Compare with the [solar energy study guide](/resources/oxfordaqa-a-level-physics-9630-solar-energy-oxfordaqa-alevel-physics/).

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.13.2 Wind energy, published by OxfordAQA.
