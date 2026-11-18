---
title: "AQA A-Level Physics (7408): Thermodynamics and engines -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA A-level Physics 7408 notes on thermodynamics and engines (3.11.2): sign rules, processes, engine power, efficiencies, COP and a self-test."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section **3.11.2 Thermodynamics and engines** of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Engineering physics option. Full explanations and worked examples are in the [thermodynamics and engines study guide](/resources/aqa-a-level-physics-7408-thermodynamics-and-engines-aqa-alevel/); test yourself with the [thermodynamics and engines practice questions](/resources/aqa-a-level-physics-7408-thermodynamics-and-engines-aqa-alevel-practice/).

## Equations

| Equation | Notes |
|---|---|
| Q = ΔU + W | Q to the system; ΔU increase; W by the system |
| pV = nRT | Ideal gas, all processes |
| pV = constant | Isothermal |
| pV^γ = constant | Adiabatic (γ given) |
| W = pΔV | Constant pressure (only work formula required) |
| Work per cycle = loop area | ΔU = 0 over a cycle |
| Input power = calorific value × fuel flow rate | |
| Indicated power = loop area × cycles per second × cylinders | Four-stroke: cycles per second = rev s⁻¹ ÷ 2 |
| Brake power = Tω | |
| Friction power = indicated − brake | |
| Overall = brake/input; thermal = indicated/input; mechanical = brake/indicated | overall = thermal × mechanical |
| Efficiency = W/Q_H = (Q_H − Q_C)/Q_H | |
| Maximum efficiency = (T_H − T_C)/T_H | kelvin |
| COP_ref = Q_C/W; maximum T_C/(T_H − T_C) | |
| COP_hp = Q_H/W; maximum T_H/(T_H − T_C) | |

## Key terms

| Term | Meaning |
|---|---|
| Non-flow process | Fixed mass of gas stays in the system during the change |
| Isothermal | Constant temperature; ΔU = 0 so Q = W |
| Adiabatic | No heat transfer; Q = 0 so W = −ΔU |
| Indicator diagram | Measured p–V loop of a real engine |
| Indicated power | Power developed by the gas in the cylinders |
| Brake power | Useful output power at the shaft |
| Source and sink | Hot and cold reservoirs a heat engine must work between |
| CHP | Combined heat and power: rejected heat used for heating |
| Coefficient of performance | Useful energy moved ÷ work input for a reversed heat engine |

## Processes at a glance

| Process | p–V line | Q | ΔU | W |
|---|---|---|---|---|
| Isothermal expansion | Curve (pV constant) | + | 0 | + |
| Adiabatic expansion | Steeper curve | 0 | − | + |
| Adiabatic compression | Steeper curve | 0 | + | − |
| Constant-pressure expansion | Horizontal | + | + | + (pΔV) |
| Constant-volume heating | Vertical | + | + | 0 |

## Engine cycles

- **Petrol (Otto)**: adiabatic compression → heat in at constant V (spark) → adiabatic expansion → heat out at constant V.
- **Diesel**: air only compressed until hot enough to ignite injected fuel → heat in at constant p → adiabatic expansion → heat out at constant V.
- **Real vs theoretical**: rounded corners and smaller area because burning takes time, valves take time to move, heat leaks through cylinder walls, the gas is not ideal; small pumping loop for induction and exhaust.
- **Four-stroke**: one power stroke per cylinder every **two** revolutions.

## Second Law and reversed engines

- No engine can turn all of Q_H into work; it must reject Q_C to a sink.
- Real efficiency is below (T_H − T_C)/T_H because of friction, heat losses and irreversible processes.
- CHP uses Q_C for heating.
- Refrigerators and heat pumps: Q_H = Q_C + W; COP can exceed 1 because W moves energy rather than creating it.
- COP_hp = COP_ref + 1 for the same device.

## Exam traps

- Sign errors: compression means W is negative.
- Celsius in efficiency or COP: always use kelvin.
- One cycle per revolution in a four-stroke engine.
- Forgetting the number of cylinders.
- Mixing up thermal (indicated/input) and mechanical (brake/indicated) efficiency.
- Describing an anticlockwise loop as an engine.
- Saying a diesel engine uses a spark.

## Self-test

1. A gas loses 300 J by heating while 500 J of work is done on it. Find ΔU.
2. A gas expands at 1.5 × 10⁵ Pa by 0.80 × 10⁻³ m³. Find the work done by the gas.
3. A gas expands adiabatically, doing 250 J of work. Find Q and ΔU.
4. What is the change in internal energy of a gas over one complete cycle?
5. Calculate the maximum efficiency of an engine between 750 K and 300 K.
6. A four-cylinder four-stroke engine runs at 3600 rpm with a loop area of 200 J. Find the indicated power.
7. Its brake power is 20 kW. Find the mechanical efficiency.
8. Calculate the maximum COP of a heat pump between 278 K and 293 K.
9. Calculate the maximum COP of a refrigerator between 255 K and 295 K.
10. Why is the area of a real indicator diagram smaller than the theoretical one?
11. State how the heat input stage differs between the theoretical petrol and diesel cycles.
12. What does a combined heat and power scheme do?

### Answers

1. Q = −300 J, W = −500 J, so ΔU = Q − W = −300 + 500 = **+200 J**.
2. W = 1.5 × 10⁵ × 0.80 × 10⁻³ = **120 J**.
3. **Q = 0**; ΔU = −W = **−250 J**.
4. **Zero** (the gas returns to its starting state).
5. (750 − 300)/750 = **0.60**.
6. 60 rev s⁻¹ ÷ 2 = 30 cycles per second per cylinder; 200 × 30 × 4 = **24 kW**.
7. 20/24 = **0.83**.
8. 293/15 = **19.5**.
9. 255/40 = **6.4**.
10. Any two: burning takes **time**, so pressure does not rise at constant volume; valves do not open and close **instantly**; **heat is lost** through the cylinder walls; the working gas is **not ideal**.
11. Petrol: heat in at **constant volume**; diesel: heat in at **constant pressure**.
12. It uses the heat **rejected to the sink** (for example cooling water) to **heat buildings**, so more of the fuel's energy is used.

## Frequently asked questions

**Why can a heat pump have a coefficient of performance greater than 1?**
The work input moves energy from the cold space to the hot space rather than creating it, and the energy delivered is the work plus the energy taken from outside. So Q_H can be several times W without breaking energy conservation.

**How do you find the indicated power of an engine?**
Multiply the area of the p–V loop (work per cycle) by the number of cycles per second and by the number of cylinders. In a four-stroke engine each cylinder completes one cycle every two revolutions.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.11.2 Thermodynamics and engines (A-level only).
