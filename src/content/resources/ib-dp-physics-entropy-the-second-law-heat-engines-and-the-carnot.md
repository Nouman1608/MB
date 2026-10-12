---
title: "IB DP Physics: Entropy, the second law, heat engines and the Carnot limit (DP Physics)"
seoTitle: "IB Physics B.4 Entropy, Second Law, Carnot Study Guide"
resourceType: "study-guides"
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
description: "Study guide to IB DP Physics B.4 (HL only): entropy, microstates, the second law, heat engines, efficiency and the Carnot limit, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide covers the second half of sub-topic B.4, Thermodynamics, from the IB *Physics guide* (first assessment 2025): entropy, the second law, heat engines and the Carnot limit. All of B.4 is additional higher level, so everything here is HL only; the guide lists no standard level content in B.4. The first law, work done by a gas and the named gas processes belong to the other half of B.4 and are not taught here. For condensed recall use the [revision notes](/resources/ib-dp-physics-entropy-the-second-law-heat-engines-and-the-carnot-revision-notes/), then try the [practice questions](/resources/ib-dp-physics-entropy-the-second-law-heat-engines-and-the-carnot-practice/). To find your weak spots first, take the [free 10-minute diagnostics](/diagnostics/).

Related pages: the [course hub](/boards/ib/ib-dp/physics/), the [printable checklist](/checklists/ib/ib-dp/physics/), [molecular model, temperature and internal energy](/resources/ib-dp-physics-molecular-model-temperature-internal-energy-and/) and [work, energy, power and efficiency](/resources/ib-dp-physics-work-energy-power-and-efficiency/).

## What this unit covers

| Guide reference | What you must be able to do | Tier |
|---|---|---|
| B.4 entropy | Explain entropy S as a measure of the disorder of the particles in a system | HL only |
| B.4 entropy | Use ΔS = ΔQ/T for a macroscopic transfer | HL only |
| B.4 entropy | Use S = k_B ln Ω with Ω the number of microstates, in simple combinatorial (coin) models | HL only |
| B.4 second law | State the Clausius and Kelvin forms, and the entropy form for isolated systems | HL only |
| B.4 irreversibility | Explain why real isolated systems gain entropy, and how a non-isolated system can lose it locally | HL only |
| B.4 heat engines | Describe cyclic processes as the basis of heat engines, and use η = useful work / input energy | HL only |
| B.4 Carnot | Use η_Carnot = 1 − T_c/T_h as the upper limit | HL only |

Sign convention (Clausius): count Q as positive when the system receives net heat, and W as positive when the system does net work on its surroundings. Temperatures in every formula below must be in kelvin.

## Entropy as disorder

Entropy S is a thermodynamic quantity linked to how disordered the particles of a system are. A solid at low temperature has particles confined near fixed positions, so few arrangements fit the same total energy. A gas has particles that can be almost anywhere and move in many ways, so many arrangements fit. The gas has the higher entropy.

"Disorder" here means a count of arrangements, not untidiness.

## The macroscopic definition: ΔS = ΔQ/T

When thermal energy ΔQ is transferred to a system at a constant temperature T, its entropy changes by

ΔS = ΔQ / T

with ΔQ positive for energy entering the system and negative for energy leaving. The unit is J K⁻¹. Use one T, as for a reservoir or a change of state.

### Worked example 1: melting

A 0.40 kg block of ice at 273.15 K melts completely. Take the specific latent heat of fusion as 3.34 × 10⁵ J kg⁻¹ (supplied data).

1. Energy absorbed: ΔQ = mL = 0.40 × 3.34 × 10⁵ = 1.336 × 10⁵ J.
2. ΔS = ΔQ/T = 1.336 × 10⁵ / 273.15 = 489 J K⁻¹.

The entropy of the water rises: the particles move from a lattice to a liquid with many more possible arrangements.

### Worked example 2: heat flowing from hot to cold

A conducting rod joins a hot reservoir at 450 K and a cold reservoir at 300 K. In a short time 1500 J flows along it. Treat both reservoirs as holding their temperatures.

1. Hot reservoir: ΔS = −1500/450 = −3.33 J K⁻¹.
2. Cold reservoir: ΔS = +1500/300 = +5.00 J K⁻¹.
3. Total: −3.33 + 5.00 = +1.67 J K⁻¹.

The cold side gains more than the hot side loses, because the same energy is divided by a smaller temperature. Reversing the flow would lower the total, which the second law forbids.

## The microscopic definition: S = k_B ln Ω

A microstate is one specific arrangement of the individual particles. A macrostate is what you observe overall. Many microstates can give the same macrostate. The guide says to treat microstates as equally probable. The entropy is

S = k_B ln Ω

where Ω is the number of microstates for that macrostate and k_B is the Boltzmann constant, 1.38 × 10⁻²³ J K⁻¹ (give it as supplied data). Ω is a pure number, so S has the unit of k_B, J K⁻¹.

### The coin model

Treat each coin as a particle that is either heads or tails. The macrostate is the number of heads. For four coins, the number of ways to get k heads is the number of ways to choose which k coins show heads:

| Heads | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Ω | 1 | 4 | 6 | 4 | 1 |

There are 2⁴ = 16 equally likely microstates in total. The mixed macrostate (2 heads) has the largest Ω, so it has the highest entropy and is the most probable. "All heads" has Ω = 1, so S = k_B ln 1 = 0.

### Worked example 3: ten coins

A tray holds 10 coins. Find Ω and S for the macrostate "5 heads", and the probability of seeing it.

1. Ω = 10!/(5! × 5!) = 252.
2. S = k_B ln 252 = 1.38 × 10⁻²³ × 5.53 = 7.63 × 10⁻²³ J K⁻¹.
3. Total microstates = 2¹⁰ = 1024, so the probability is 252/1024 = 0.246.

With 100 coins the central macrostate has Ω of about 1.0 × 10²⁹, and macrostates near 50 heads dominate overwhelmingly. Real systems have of order 10²³ particles, so the most disordered macrostates are in practice the only ones seen.

For a change from Ω_i to Ω_f, ΔS = k_B ln(Ω_f/Ω_i).

### Worked example 4: particles spreading out

Suppose each of N = 1.0 × 10²² particles in a gas is equally likely to be in either half of a box. Removing a partition lets each particle be in either half, so Ω is multiplied by 2 for every particle, giving Ω_f/Ω_i = 2^N.

ΔS = k_B ln(2^N) = N k_B ln 2 = 1.0 × 10²² × 1.38 × 10⁻²³ × 0.693 = 0.0957 J K⁻¹.

The gas will not gather back into one half: that is one microstate among 2^N, not forbidden, merely overwhelmingly improbable.

## The second law of thermodynamics

The guide asks for three descriptions.

- **Clausius form:** thermal energy does not, of itself, flow from a colder body to a hotter body. Moving it that way needs work to be done.
- **Kelvin form:** it is impossible to take thermal energy from a single reservoir and convert all of it into work in a cyclic process. Some must be rejected to a colder reservoir.
- **Entropy form:** for an isolated system, the entropy never decreases. It stays constant only in an idealised reversible process and increases in every irreversible one.

An isolated system exchanges neither mass nor energy with its surroundings. The second law constrains which processes can happen and in which direction a system evolves.

### Irreversibility

Friction, finite temperature differences, sudden expansion and mixing all raise the entropy of an isolated system, so the reverse would lower it and does not occur. A perfectly reversible process is a limit that real processes approach but never reach.

### Local decreases in entropy

A non-isolated system can lose entropy. Water freezing in a freezer is one example. The second law holds because the surroundings gain at least as much entropy as the system loses.

### Worked example 5: a freezer

A freezer turns 0.30 kg of water at 273.15 K to ice at 273.15 K. The kitchen is at 295 K. Use L = 3.34 × 10⁵ J kg⁻¹.

1. Energy removed from the water: Q = 0.30 × 3.34 × 10⁵ = 1.002 × 10⁵ J.
2. Entropy change of the water: −1.002 × 10⁵ / 273.15 = −367 J K⁻¹.
3. The kitchen must gain at least 367 J K⁻¹. At 295 K that needs at least 367 × 295 = 1.08 × 10⁵ J of heat delivered to the room.
4. That is 8.0 × 10³ J more than was removed from the water, and the extra is the minimum electrical work the freezer must do.

The water's entropy falls locally, the kitchen's rises by at least as much, and work is the price.

## Cyclic processes and heat engines

A heat engine takes thermal energy Q_h from a hot reservoir at T_h, converts part of it to useful work W, and rejects Q_c to a cold reservoir at T_c. The working substance goes through a cycle, so it returns to its starting state. Its internal energy is then unchanged over one cycle, and energy conservation gives

W = Q_h − Q_c

On a pressure–volume diagram the area enclosed by the loop equals the net work per cycle. A rectangular loop between 100 kPa and 300 kPa with a volume change of 2.0 × 10⁻³ m³ gives (300 000 − 100 000) × 2.0 × 10⁻³ = 400 J.

The Kelvin form explains why Q_c cannot be zero: an engine needs both a hot source and a cold sink.

## Efficiency

η = useful work / input energy = W / Q_h

Efficiency has no unit and is always less than 1.

### Worked example 6: a four-stroke engine

In one cycle an engine takes in 850 J from burning fuel and rejects 620 J to the surroundings.

1. W = 850 − 620 = 230 J.
2. η = 230/850 = 0.271, or 27.1%.
3. At 25 cycles per second the power output is 25 × 230 = 5750 W.

## The Carnot limit

The Carnot cycle is the most efficient cycle possible between two fixed reservoir temperatures. It sets the limit

η_Carnot = 1 − T_c/T_h

with both temperatures in kelvin. No engine working between those temperatures can exceed it, and real engines fall below it.

The entropy argument shows where the limit comes from. In the ideal reversible case the total entropy change per cycle is zero: Q_c/T_c − Q_h/T_h = 0, so Q_c/Q_h = T_c/T_h and η = 1 − Q_c/Q_h = 1 − T_c/T_h. If the engine did better, Q_c would be smaller, and the total entropy would fall.


### Worked example 7: testing a claim

A designer claims an engine running between 520 °C and 45 °C converts 62% of its input energy into work.

1. T_h = 520 + 273.15 = 793.15 K and T_c = 45 + 273.15 = 318.15 K.
2. η_Carnot = 1 − 318.15/793.15 = 0.599.
3. 0.62 is greater than 0.599, so the claim violates the second law.

### Worked example 8: entropy produced by a real engine

An engine works between 500 K and 300 K and takes in 2.0 MJ of heat per cycle at 500 K, with an actual efficiency of 0.25.

1. η_Carnot = 1 − 300/500 = 0.40, so the most work possible is 0.40 × 2.0 = 0.80 MJ.
2. Actual work W = 0.25 × 2.0 = 0.50 MJ, so Q_c = 1.50 MJ.
3. Entropy change of the reservoirs: +1.50 × 10⁶/300 − 2.0 × 10⁶/500 = 5000 − 4000 = +1000 J K⁻¹ per cycle.
4. The work lost to irreversibility is 0.80 − 0.50 = 0.30 MJ, which equals T_c × ΔS = 300 × 1000.

The engine's own entropy is unchanged after a full cycle, so the total gain is in the reservoirs. Every irreversibility costs work, in proportion to the entropy produced.

## Common errors

- Using °C in 1 − T_c/T_h. Convert to kelvin first.
- Treating Carnot efficiency as achievable. It is the ceiling; real engines are below it.
- Saying entropy of a system can never decrease. That applies to isolated systems, or to the system plus its surroundings.
- Writing Ω for a coin macrostate as 2^N. That is the total number of microstates.
- Giving ΔS for a reservoir with the wrong sign: energy leaving a reservoir gives a negative ΔS.

## Official syllabus

IB *Physics guide*, first assessment 2025, published by the International Baccalaureate Organization. This resource follows the second half of sub-topic B.4, Thermodynamics, which is entirely additional higher level.
