---
resourceId: "mb-ap-physcem-11.4-revision-notes"
title: "Electric Power: Revision Notes (Physics C: E&M 11.4)"
description: "One-page recap of electric power for the calculus-based course: P = IΔV, I²R and ΔV²/R, bulb brightness, motors and energy balance, and integrating power over time."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-11.4-study-guide"]
learningObjectives:
  - "Recall the three forms of electric power and when each is most useful"
  - "Spot brightness and energy-balance errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-11.4-study-guide", "mb-ap-physcem-11.4-practice", "mb-ap-physcem-11.4-checklist"]
next: "mb-ap-physcem-11.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "P = IΔV for any element; P = I²R = ΔV²/R for a resistor."
  - "Brighter bulb = more power. Same I: larger R wins. Same ΔV: smaller R wins."
  - "Changing power: E = ∫P dt."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivation, Figures 1–3 and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-4-electric-power-study-guide/).

## Recap

- **Power** is the rate of energy transfer. For charge dq crossing a potential difference ΔV, dU = ΔV dq, so P = IΔV.
- 1 W = 1 J/s = 1 V·A. 1 kWh = 3.6 × 10⁶ J is a unit of **energy**.
- Sources (batteries, generators) deliver power; resistors, bulbs and motors receive it. Total delivered = total received.
- A resistor dissipates electrical energy as thermal energy at the rate I²R.
- A bulb's brightness increases with its power, so compare powers to compare bulbs.
- A motor converts electrical energy to mechanical energy, with some thermal loss: IΔV = P_mech + P_thermal.

## Key relationships

| Situation | Relationship | Note |
|---|---|---|
| Any element | P = IΔV | Includes motors and batteries |
| Resistor | P = I²R = ΔV²/R | Uses ΔV = IR |
| Same current (series) | P ∝ R | Larger R, more power |
| Same potential difference (parallel) | P ∝ 1/R | Smaller R, more power |
| Fixed resistor | P ∝ ΔV², P ∝ I² | Double ΔV → 4P |
| Ideal battery, emf ℰ | P = ℰI | Power delivered |
| Lifting at constant speed | P_mech = mgv | g = 9.8 m/s² |
| Power varies with time | E = ∫P dt | Area under P–t graph |

## Assumptions behind the results

- Resistors and bulbs are ohmic unless stated, so R does not change as they warm up.
- Batteries are ideal (no internal resistance) unless stated.
- Connecting wires dissipate negligible power.

## Mistakes to avoid

1. **"More resistance, more power" without checking what is fixed.**
2. **Saying bulbs use up current.** They transfer energy; the current in and out is the same.
3. **I²R for a motor's input.** That is only the thermal part; the input is IΔV.
4. **Averaging I or ΔV before squaring.** Integrate P dt instead.
5. **Doubling ΔV doubles P.** For a fixed R it quadruples P.
6. **kWh as power.** It is energy.

## Quick self-check

1. A current of 3.0 A passes through a 5.0 Ω resistor. What is the power? *(45 W)*
2. The potential difference across a fixed resistor is doubled. By what factor does the power change? *(4)*
3. How much energy does a 60 W device transfer in 2.0 minutes? *(7.2 × 10³ J)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/11-4-electric-power-practice/).
