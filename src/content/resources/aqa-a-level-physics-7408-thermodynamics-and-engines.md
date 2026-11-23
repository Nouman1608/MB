---
title: "AQA A-Level Physics (7408): Thermodynamics and engines"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Engineering physics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 11.2
syllabusTopics:
  - qualification: "a-level"
    topic: "engineering-physics-aqa-alevel"
    subtopic: "thermodynamics-and-engines-aqa-alevel"
description: "AQA A-level Physics 7408 section 3.11.2 in depth: first law, non-flow processes, p-V loops, engine power and efficiencies, the Second Law and heat pumps."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **3.11.2 Thermodynamics and engines** of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Engineering physics option assessed in Paper 3 Section B. It has six content statements: 3.11.2.1 first law of thermodynamics, 3.11.2.2 non-flow processes, 3.11.2.3 the p–V diagram, 3.11.2.4 engine cycles, 3.11.2.5 Second Law and engines, and 3.11.2.6 reversed heat engines.

The [Engineering physics study guide](/resources/aqa-a-level-physics-engineering-physics/) summarises the whole option. Use the [thermodynamics and engines revision notes](/resources/aqa-a-level-physics-7408-thermodynamics-and-engines-revision-notes/) for recall and the [thermodynamics and engines practice questions](/resources/aqa-a-level-physics-7408-thermodynamics-and-engines-practice/) to test yourself. The ideal gas equation and internal energy are in [Further mechanics and thermal physics](/resources/aqa-a-level-physics-further-mechanics-and-thermal-physics/).

## 3.11.2.1 The first law of thermodynamics

**Q = ΔU + W**, with the specification's sign convention:

- **Q**: energy transferred **to** the system by heating (negative if the system loses heat);
- **ΔU**: **increase** in internal energy (negative if U falls);
- **W**: work done **by** the system (negative if work is done on it, as in compression).

For an ideal gas, internal energy depends only on temperature, so ΔU = 0 whenever the temperature returns to its starting value. Getting the signs right is most of the work in this topic, so write each quantity with its sign before substituting.

| Situation | Q | ΔU | W |
|---|---|---|---|
| Gas heated in a sealed rigid can | + | + | 0 |
| Gas expands slowly at constant temperature | + | 0 | + |
| Gas compressed quickly in an insulated cylinder | 0 | + | − |
| Gas cools at constant pressure | − | − | − |

## 3.11.2.2 Non-flow processes

A **non-flow process** keeps a fixed mass of gas inside the system (as in a cylinder with a piston); gas does not flow in and out during the change. pV = nRT applies throughout for an ideal gas.

- **Isothermal** (constant T): pV = constant. ΔU = 0, so **Q = W**. Needs a slow change with good thermal contact.
- **Adiabatic** (no heat transfer): **pV^γ = constant**, Q = 0, so **W = −ΔU**. Happens in fast changes or insulated containers. Expansion cools the gas; compression heats it.
- **Constant pressure** (isobaric): **W = pΔV**, so Q = ΔU + pΔV.
- **Constant volume** (isochoric): W = 0, so **Q = ΔU**.

γ is the ratio of the gas's principal molar heat capacities; for a monatomic gas it is about 1.67 and for air about 1.4. It will be given.

**Worked example 1: constant pressure.** A gas at 2.0 × 10⁵ Pa expands from 1.5 × 10⁻³ m³ to 2.5 × 10⁻³ m³ while 700 J is supplied by heating.

```
W = pΔV = 2.0 × 10⁵ × 1.0 × 10⁻³ = 200 J
ΔU = Q − W = 700 − 200 = 500 J
```

**Worked example 2: adiabatic expansion.** A monatomic gas (γ = 1.67) at 6.0 × 10⁵ Pa and 600 K expands adiabatically from 0.50 × 10⁻³ m³ to 2.0 × 10⁻³ m³.

```
p₂ = p₁(V₁/V₂)^γ = 6.0 × 10⁵ × (0.25)^1.67 = 5.9 × 10⁴ Pa
T₂ = T₁ × p₂V₂/(p₁V₁) = 600 × (5.9 × 10⁴ × 2.0 × 10⁻³)/(6.0 × 10⁵ × 0.50 × 10⁻³) = 237 K
```

The pressure falls by a factor of about 10 for a fourfold volume change; an isothermal expansion would only quarter it. That is why adiabatics are **steeper** than isothermals on a p–V diagram.

**Worked example 3: isothermal compression.** 0.050 mol of gas at 300 K is compressed isothermally from 1.2 × 10⁻³ m³ to 0.40 × 10⁻³ m³. The pressure rises from nRT/V = 1.04 × 10⁵ Pa to 3.12 × 10⁵ Pa. Counting squares under the curve gives roughly 140 J of work done **on** the gas, so W = −140 J. Since ΔU = 0, Q = W = −140 J: the gas must lose about 140 J by heating to stay at 300 K. (No work formula is needed for isothermal changes; the specification asks only for estimates from the area.)

## 3.11.2.3 The p–V diagram

- **Work done = area under the curve** between the start and end volumes. Expansion: work done by the gas; compression: work done on the gas.
- **Constant pressure**: horizontal line; area = pΔV exactly.
- **Constant volume**: vertical line; no area, no work.
- **Cyclic process**: the gas returns to its starting state, so ΔU = 0 over a cycle and **net work done per cycle = area of the loop**. A **clockwise** loop means net work done by the gas (an engine); anticlockwise means net work done on the gas (a refrigerator or heat pump).

**Worked example 4.** A gas is taken round a rectangular cycle between 1.0 × 10⁵ Pa and 3.0 × 10⁵ Pa and between 1.0 × 10⁻³ m³ and 3.0 × 10⁻³ m³. Net work per cycle = 2.0 × 10⁵ × 2.0 × 10⁻³ = **400 J**. At 25 cycles per second this gives 10 kW.

## 3.11.2.4 Engine cycles

**Four-stroke petrol engine**: induction (fuel–air mixture drawn in), compression, ignition by a spark and power stroke, exhaust. The **theoretical (Otto) cycle**: adiabatic compression, heat in at constant volume, adiabatic expansion, heat out at constant volume.

**Diesel engine**: air alone is drawn in and compressed to a much higher pressure, so it becomes hot enough to ignite fuel injected at the top of the stroke. Theoretical cycle: adiabatic compression, heat in at **constant pressure**, adiabatic expansion, heat out at constant volume.

An **indicator diagram** is the p–V loop measured on a real engine. Compared with the theoretical diagram it has **rounded corners** and a **smaller area**: fuel takes time to burn, valves take time to open and close, heat is lost through the cylinder walls, and the working gas is not an ideal gas of fixed composition. A thin extra loop at low pressure represents the **pumping work** of induction and exhaust, done by the engine. Construction details are not required, and questions on other cycles give all the information needed.

```
input power     = calorific value × fuel flow rate
indicated power = (area of p–V loop) × (cycles per second) × (number of cylinders)
brake power     = Tω
friction power  = indicated power − brake power
overall efficiency    = brake power/input power
thermal efficiency    = indicated power/input power
mechanical efficiency = brake power/indicated power
```

**Worked example 5.** A six-cylinder four-stroke engine runs at 2400 rpm. Loop area 250 J; brake torque 95 N m; fuel of calorific value 4.5 × 10⁷ J kg⁻¹ used at 2.4 × 10⁻³ kg s⁻¹.

```
rev s⁻¹ = 40; cycles per second per cylinder = 40/2 = 20
indicated power = 250 × 20 × 6 = 30.0 kW
ω = 2400 × 2π/60 = 251 rad s⁻¹; brake power = 95 × 251 = 23.9 kW
friction power = 6.1 kW;  input power = 4.5 × 10⁷ × 2.4 × 10⁻³ = 108 kW
overall 0.22, thermal 0.28, mechanical 0.80
```

## 3.11.2.5 The Second Law and engines

An engine cannot work by the First Law alone: it cannot convert all the heat it takes in into work. The **Second Law** requires a heat engine to operate between a **hot source** (T_H) and a **cold sink** (T_C), rejecting some energy Q_C to the sink.

```
efficiency = W/Q_H = (Q_H − Q_C)/Q_H
maximum theoretical efficiency = (T_H − T_C)/T_H   (kelvin)
```

**Worked example 6.** Source 900 K, sink 320 K: maximum efficiency = 580/900 = **0.64**. A real engine taking in 5.0 kJ per cycle with efficiency 0.35 does 1.75 kJ of work and rejects 3.25 kJ.

Practical engines fall short because of friction, heat losses, the time needed for combustion and heat transfer, and processes that are not reversible. **Maximising use of W and Q_H**: in **combined heat and power** schemes, the rejected Q_C (for example from a power station's cooling water) heats buildings, so a much larger fraction of the fuel's energy is used.

## 3.11.2.6 Reversed heat engines

Work W is done to move energy from a cold space to a hot one: Q_H = Q_C + W. A **refrigerator** is valued for the Q_C removed; a **heat pump** for the Q_H delivered.

```
COP_ref = Q_C/W = Q_C/(Q_H − Q_C);  maximum T_C/(T_H − T_C)
COP_hp  = Q_H/W = Q_H/(Q_H − Q_C);  maximum T_H/(T_H − T_C)
```

**Worked example 7.** A freezer at 268 K in a 298 K kitchen has maximum COP_ref = 268/30 = 8.9. A real freezer with COP 3.0 removing 450 W uses 150 W and releases 600 W into the kitchen. Practical cycles and devices are not required.

## Common mistakes

- Treating W as work done on the gas in Q = ΔU + W.
- Using Celsius temperatures in efficiency or COP formulas.
- Counting one cycle per revolution in a four-stroke engine.
- Forgetting the number of cylinders in indicated power.
- Saying a COP above 1 breaks energy conservation.

## Exam technique

- **Sketch** p–V diagrams with arrows and label each process.
- **Calculate**: write all signs first; state which efficiency you are finding.
- **Explain** differences between real and theoretical cycles with at least two physical reasons.

Next, try the [thermodynamics and engines practice questions](/resources/aqa-a-level-physics-7408-thermodynamics-and-engines-practice/).

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.11.2 Thermodynamics and engines (A-level only), content statements 3.11.2.1 to 3.11.2.6.
