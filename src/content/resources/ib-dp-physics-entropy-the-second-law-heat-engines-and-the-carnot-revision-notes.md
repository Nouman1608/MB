---
title: "IB DP Physics: Entropy, the second law, heat engines and the Carnot limit (DP Physics) -- Revision Notes"
seoTitle: "IB Physics B.4 Entropy and Carnot Revision Notes (HL)"
resourceType: "revision-notes"
subject: "physics"
level: ["ib"]
topic: "Entropy, the second law, heat engines and the Carnot limit"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 281
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-b"
    subtopic: "ib-dp-physics-b-4"
description: "Condensed IB DP Physics B.4 (HL only) notes on entropy, microstates, the second law, heat engines, efficiency and the Carnot limit, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These revision notes condense the second half of sub-topic B.4, Thermodynamics, from the IB *Physics guide* (first assessment 2025). All of B.4 is additional higher level (HL only); the guide has no standard level content there. For full explanations and worked examples read the [study guide](/resources/ib-dp-physics-entropy-the-second-law-heat-engines-and-the-carnot/), and test yourself with the [practice questions](/resources/ib-dp-physics-entropy-the-second-law-heat-engines-and-the-carnot-practice/). Not sure where to start? Try the [free 10-minute diagnostics](/diagnostics/).

Related pages: the [course hub](/boards/ib/ib-dp/physics/), the [printable checklist](/checklists/ib/ib-dp/physics/) and [molecular model, temperature and internal energy](/resources/ib-dp-physics-molecular-model-temperature-internal-energy-and/). The first law and gas processes are covered separately and are not repeated here.

## Key definitions (all HL only)

- **Entropy S:** a thermodynamic quantity measuring how disordered the arrangement of a system's particles is. Unit J K⁻¹.
- **Microstate:** one specific arrangement of the individual particles. Microstates are treated as equally probable.
- **Macrostate:** the overall observable state; many microstates can correspond to one macrostate.
- **Isolated system:** no mass and no energy can enter or leave.
- **Closed system:** no mass transfer, but energy can cross the boundary as heat or work.
- **Heat engine:** a device running a cyclic process, taking energy from a hot reservoir, doing work and rejecting energy to a cold reservoir.
- **Efficiency:** useful work divided by input energy.

## Equations

| Quantity | Equation | Notes |
|---|---|---|
| Entropy change, macroscopic | ΔS = ΔQ / T | T in kelvin and constant during the transfer; ΔQ is negative for energy leaving |
| Entropy, microscopic | S = k_B ln Ω | Ω = number of microstates; k_B = 1.38 × 10⁻²³ J K⁻¹ |
| Change from Ω | ΔS = k_B ln(Ω_f / Ω_i) | Follows by subtraction |
| Work per cycle | W = Q_h − Q_c | Internal energy is unchanged over a full cycle |
| Efficiency | η = W / Q_h | Same as useful work / input energy |
| Carnot limit | η_Carnot = 1 − T_c / T_h | Kelvin temperatures only |
| Reversible limit | Q_c / Q_h = T_c / T_h | From zero total entropy change |

Sign convention (Clausius): Q is positive for net heat received by the system, W positive for net work done by the system on its surroundings.

## Entropy and the coin model

Method in steps for a coin question:

1. Decide the macrostate (for example, "3 heads out of 6 coins").
2. Count microstates: Ω = N! / (k! (N − k)!).
3. Total microstates = 2^N, so probability = Ω / 2^N.
4. Substitute into S = k_B ln Ω. Use the natural logarithm.

| Coins | Macrostate | Ω | Probability |
|---|---|---|---|
| 5 | 2 heads | 10 | 10/32 = 0.3125 |
| 8 | 4 heads | 70 | 70/256 = 0.273 |
| 8 | 8 heads | 1 | 1/256 = 0.0039 |

For 8 coins and 4 heads, S = 1.38 × 10⁻²³ × ln 70 = 1.38 × 10⁻²³ × 4.25 = 5.86 × 10⁻²³ J K⁻¹. For "all heads", S = k_B ln 1 = 0.

Key links to remember: the mixed macrostate has the largest Ω, the highest entropy and the highest probability. A system moves towards the macrostate with the most microstates because it is overwhelmingly more probable, not because of a force.

## Using ΔS = ΔQ/T

Method in steps:

1. Convert the temperature to kelvin.
2. Decide the sign of ΔQ for the system you are analysing.
3. Divide. Do each system (or reservoir) separately.
4. Add the changes to get the total for the isolated combination.

Reminder: 750 J leaves a reservoir at 360 K and enters one at 250 K. Hot: −750/360 = −2.08 J K⁻¹. Cold: +750/250 = +3.00 J K⁻¹. Total: +0.917 J K⁻¹. Positive, so the flow is allowed.

## The second law

| Form | Statement in brief |
|---|---|
| Clausius | Thermal energy does not flow of its own accord from cold to hot; doing that needs work |
| Kelvin | A cyclic device cannot take energy from one reservoir and turn all of it into work |
| Entropy | The entropy of an isolated system does not decrease: it is constant if reversible, rising if irreversible |

Must-know distinctions:

| Idea | Isolated system | Non-isolated system |
|---|---|---|
| Entropy of the system | Cannot fall | Can fall locally |
| What compensates | Nothing needed | Surroundings gain an equal or greater amount |
| Real processes | Entropy rises (irreversible) | Total of system and surroundings rises |
| Ideal reversible limit | Entropy stays constant | Total stays constant |

Why real processes are irreversible: friction, heat flow across a temperature difference, free expansion and mixing all increase the number of accessible microstates. Reversal would need a decrease in total entropy.

## Heat engines and efficiency

Method in steps for engine problems:

1. Draw the energy flow: Q_h in, W out, Q_c out.
2. Write W = Q_h − Q_c.
3. Use η = W / Q_h.
4. For power problems, replace energies by energy per second, using the same form on both sides.

Reminder: an engine has output 36 kW and efficiency 0.30. Input power = 36/0.30 = 120 kW and rejected power = 120 − 36 = 84 kW.

The Kelvin form means every engine rejects some energy, so η is always below 1 and Q_c is never zero.

## The Carnot limit

- It depends only on the two reservoir temperatures, in kelvin.
- It is an upper limit for any engine between those reservoirs. A real engine has lower efficiency.
- Raising T_h or lowering T_c increases the limit.
- An engine reaching the limit would be reversible and produce no net entropy.

Reminder: for T_h = 900 K and T_c = 300 K, η_Carnot = 1 − 300/900 = 0.667. To reach 0.40 with T_c = 290 K you need T_h of at least 290/0.60 = 483 K.

Testing a claim in steps: convert to kelvin, find η_Carnot, compare the claimed efficiency. If the claim is higher, it breaks the second law. If it is lower, the claim is allowed in principle but is not guaranteed by the limit.

## Entropy produced by a real engine

Method in steps:

1. Find Q_c from Q_h and W.
2. Reservoir entropy change per cycle = Q_c / T_c − Q_h / T_h.
3. The result is positive for a real engine and zero for a Carnot engine.
4. Work lost compared with the Carnot ideal = T_c × (entropy produced).

Reminder: Q_h = 1200 J from a reservoir at 600 K, Q_c = 800 J to one at 300 K. W = 400 J and η = 0.333, below the Carnot value of 0.50. Entropy change = 800/300 − 1200/600 = 2.67 − 2.00 = +0.667 J K⁻¹. Check: lost work = 300 × 0.667 = 200 J, and the Carnot engine would have produced 0.50 × 1200 = 600 J, which is 200 J more than 400 J.

## Quick self-test

1. Three coins are tossed. State the number of microstates for the macrostate "1 head" and find S in J K⁻¹.
2. 2500 J enters a reservoir at 500 K. Find its entropy change.
3. A system's number of microstates rises by a factor of 10⁵. Find ΔS.
4. State the Kelvin form of the second law.
5. An engine takes 1000 J per cycle and produces 300 J of work. Find η and the energy rejected.
6. Find the Carnot limit for T_h = 400 K, T_c = 300 K.
7. Find the minimum T_h for an engine with T_c = 290 K to have a Carnot limit of 0.40.
8. An engine works between 720 K and some lower temperature and must have a Carnot limit of 0.35. Find the highest allowed T_c.
9. Explain how water can freeze in a freezer without breaking the second law.
10. Explain why a tray of coins shaken at random shows roughly half heads, not all heads.

### Answers

1. Ω = 3, so S = 1.38 × 10⁻²³ × ln 3 = 1.52 × 10⁻²³ J K⁻¹.
2. ΔS = +2500/500 = +5.0 J K⁻¹.
3. ΔS = 1.38 × 10⁻²³ × ln(10⁵) = 1.38 × 10⁻²³ × 11.5 = 1.59 × 10⁻²² J K⁻¹.
4. It is impossible for a cyclic process to take energy from a single reservoir and convert all of it into work.
5. η = 300/1000 = 0.30. Rejected energy = 1000 − 300 = 700 J.
6. η = 1 − 300/400 = 0.25.
7. 1 − 290/T_h = 0.40, so T_h = 290/0.60 = 483 K.
8. 1 − T_c/720 = 0.35, so T_c = 0.65 × 720 = 468 K.
9. The water loses entropy, but the freezer rejects more energy than it removes (the electrical work adds to it) into the warmer room, so the room gains at least as much entropy as the water loses.
10. The macrostate with about half heads has by far the most microstates, so it is overwhelmingly the most probable. "All heads" is a single microstate.

## Where marks are usually lost

- Leaving temperatures in °C inside ΔQ/T or 1 − T_c/T_h.
- Giving a reservoir that loses energy a positive ΔS.
- Calculating Ω for a coin macrostate as 2^N instead of N!/(k!(N − k)!).
- Using a base-10 logarithm in S = k_B ln Ω.
- Saying "entropy always increases" without stating that it applies to isolated systems, or to system plus surroundings.
- Saying the local decrease is "cancelled" without stating that the surroundings' increase is equal or greater.
- Writing the Kelvin form as "an engine cannot be 100% efficient" without the cyclic, single-reservoir condition.
- Treating Carnot efficiency as something real engines reach.
- Ignoring the sign convention: Q_c in W = Q_h − Q_c is a positive quantity of rejected energy.

## Official syllabus

IB *Physics guide*, first assessment 2025, published by the International Baccalaureate Organization. This resource follows the second half of sub-topic B.4, Thermodynamics, which is entirely additional higher level.
