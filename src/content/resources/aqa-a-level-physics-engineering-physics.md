---
title: "AQA A-Level Physics: Engineering physics (7408)"
seoTitle: "AQA A-Level Physics Engineering Physics Study Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Engineering physics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 11
syllabusTopics:
  - qualification: "a-level"
    topic: "engineering-physics-aqa-alevel"
  - qualification: "a-level"
    topic: "engineering-physics-aqa-alevel"
    subtopic: "rotational-dynamics-aqa-alevel"
  - qualification: "a-level"
    topic: "engineering-physics-aqa-alevel"
    subtopic: "thermodynamics-and-engines-aqa-alevel"
description: "Study guide to the AQA A-Level Physics 7408 engineering physics option: rotational dynamics, flywheels, thermodynamics, engine cycles and heat pumps."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches section 3.11 Engineering physics of the AQA AS and A-level Physics specification (7407/7408, version 1.3, AS and A-level exams June 2016 onwards): 3.11.1 Rotational dynamics and 3.11.2 Thermodynamics and engines. Section 3.11 is **A-level only** and is one of the five **options** (sections 3.9 to 3.13). You study one option, assessed in Paper 3 Section B (35 marks); Paper 3 Section A assesses practical skills and data analysis. The specification says questions may use unfamiliar contexts, with the information you need given.

Next, use the [revision notes](/resources/aqa-a-level-physics-engineering-physics-revision-notes/) and [practice questions](/resources/aqa-a-level-physics-engineering-physics-practice/). See also the [course hub](/boards/aqa/a-level/physics/), the [printable checklist](/checklists/aqa/a-level/physics/) and the [free diagnostics](/diagnostics/). Radians, ω and the gas laws come from [Further mechanics and thermal physics](/resources/aqa-a-level-physics-further-mechanics-and-thermal-physics/).

## What this topic covers

| Specification (all A-level only) | You must be able to |
|---|---|
| 3.11.1.1 Moment of inertia | Use I = mr², I = Σmr²; factors affecting I |
| 3.11.1.2 Rotational kinetic energy | Use E_k = ½Iω²; explain flywheels |
| 3.11.1.3 Rotational motion | Use θ, ω, α, graphs and uniform-α equations |
| 3.11.1.4 Torque and angular acceleration | Use T = Fr and T = Iα |
| 3.11.1.5 Angular momentum | Use Iω, its conservation, TΔt = Δ(Iω) |
| 3.11.1.6 Work and power | Use W = Tθ, P = Tω; frictional torque |
| 3.11.2.1 First law | Apply Q = ΔU + W |
| 3.11.2.2 Non-flow processes | Treat isothermal, adiabatic, constant p and V changes |
| 3.11.2.3 The p–V diagram | Find work from areas and loops |
| 3.11.2.4 Engine cycles | Petrol and diesel cycles; power and efficiencies |
| 3.11.2.5 Second Law and engines | Source, sink, efficiency limits, CHP |
| 3.11.2.6 Reversed heat engines | Heat pumps, refrigerators, COP |

## 3.11.1.1 Moment of inertia

Moment of inertia, I (kg m²), measures how hard it is to change an object's rotation about an axis. It plays the part of mass.

```
point mass:  I = mr²        extended object:  I = Σmr²
```

r is the distance from the **axis**. I increases with total mass and with mass placed further from the axis (r is squared), and depends on where the axis is. A ring has more I than a disc of equal mass and radius. The specification says expressions for particular shapes will be given where necessary.

**Worked example 1.** A light rod spins about its centre with 0.40 kg at each end, 0.25 m from the axis, and 0.20 kg at 0.10 m.

```
I = 2 × 0.40 × 0.25² + 0.20 × 0.10² = 0.052 kg m²
```

## 3.11.1.2 Rotational kinetic energy and flywheels

```
E_k = ½Iω²
```

A **flywheel** stores rotational kinetic energy. Its capacity rises with I (more mass, placed near the rim) and with ω, since E_k ∝ ω². The maximum ω is limited by the strength of the material. Uses in the specification:
- **Smoothing torque and speed:** an engine's torque comes in pulses; the flywheel takes in energy when torque is high and returns it when low.
- **Storing energy in vehicles:** braking energy goes into the flywheel rather than heat, and is returned when accelerating.
- **Production machines:** a small motor spins the flywheel up slowly, and the energy is released in a short burst, as in a press.

**Worked example 2.** A flywheel (I = 0.80 kg m²) speeds up from 120 to 200 rad s⁻¹.

```
ΔE_k = ½ × 0.80 × (200² − 120²) = 1.0 × 10⁴ J
```

## 3.11.1.3 Rotational motion

Angular displacement θ (rad); angular speed or velocity ω = Δθ/Δt (velocity includes the sense of rotation); angular acceleration α = Δω/Δt. On an **ω–t graph** the gradient is α and the area is θ. A straight line shows uniform α; a curve shows non-uniform α (use a tangent).

```
ω₂ = ω₁ + αt          θ = ½(ω₁ + ω₂)t
θ = ω₁t + ½αt²        ω₂² = ω₁² + 2αθ
```

The analogy with linear motion: s, v, a, m and F become θ, ω, α, I and T. So F = ma becomes T = Iα, ½mv² becomes ½Iω², mv becomes Iω, and Fv becomes Tω.

**Worked example 3.** A disc speeds up uniformly from 15 to 45 rad s⁻¹ in 6.0 s.

```
α = (45 − 15)/6.0 = 5.0 rad s⁻²
θ = ½(15 + 45) × 6.0 = 180 rad = 28.6 revolutions
```

## 3.11.1.4 Torque and angular acceleration

Torque T = Fr (N m), with r the perpendicular distance from the axis to the force's line of action. Newton's second law becomes T = Iα, where T is the **resultant** torque.

**Worked example 4.** A 40 N pull on a rope round a drum of radius 0.15 m; I = 0.60 kg m²; frictional torque 1.2 N m; starts from rest.

```
resultant T = 40 × 0.15 − 1.2 = 4.8 N m
α = 4.8/0.60 = 8.0 rad s⁻²;   after 3.0 s, ω = 24 rad s⁻¹
```

## 3.11.1.5 Angular momentum

Angular momentum = Iω (N m s). Angular impulse TΔt = Δ(Iω) for constant T. With no external resultant torque, angular momentum is **conserved**. A skater or diver who pulls in their limbs reduces I, so ω rises; kinetic energy rises too, because they do work pulling inwards.

**Worked example 5.** A turntable (I = 0.050 kg m²) spins freely at 3.0 rad s⁻¹. A ring (I = 0.025 kg m²) is dropped centrally onto it.

```
0.050 × 3.0 = 0.075 × ω₂   →   ω₂ = 2.0 rad s⁻¹
E_k: 0.225 J before, 0.150 J after
```

Angular momentum is conserved but kinetic energy is not, as in an inelastic collision.

## 3.11.1.6 Work and power

W = Tθ and P = Tω. In machines, some driving torque works against **frictional torque**; at steady speed the two are equal.

**Worked example 6.** A motor delivers 2.4 kW at 1500 rpm: ω = 1500 × 2π/60 = 157 rad s⁻¹, so T = 2400/157 = 15 N m.

## 3.11.2.1 First law of thermodynamics

Q = ΔU + W, where Q is energy transferred **to** the system by heating, ΔU is the **increase** in internal energy and W is work done **by** the system. For an ideal gas, ΔU = 0 when T is unchanged.

**Worked example 7.** A gas receives 500 J by heating and does 180 J of work: ΔU = 500 − 180 = 320 J.

## 3.11.2.2 Non-flow processes

A fixed mass of gas stays in its container, and pV = nRT throughout.

| Process | Condition | First law |
|---|---|---|
| Isothermal | pV = constant | ΔU = 0, Q = W |
| Adiabatic | pV^γ = constant, Q = 0 | W = −ΔU |
| Constant pressure | W = pΔV | Q = ΔU + pΔV |
| Constant volume | W = 0 | Q = ΔU |

γ is a constant for the gas. Isothermal changes are slow; adiabatic ones are fast or insulated. Adiabatic compression makes W negative, so ΔU and T rise.

**Worked example 8.** Air (γ = 1.4) at 1.0 × 10⁵ Pa and 300 K is compressed adiabatically from 4.0 × 10⁻⁴ m³ to 0.50 × 10⁻⁴ m³.

```
p₂ = 1.0 × 10⁵ × 8^1.4 = 1.8 × 10⁶ Pa
T₂ = T₁p₂V₂/(p₁V₁) = 300 × 8^0.4 = 689 K
```

## 3.11.2.3 The p–V diagram

Isothermals are curves; adiabatics are steeper curves; constant-pressure lines are horizontal; constant-volume lines vertical. **Work done = area under the graph** (estimate curved areas by counting squares). In a **cycle**, ΔU = 0 and **work done per cycle = area of the loop**; a clockwise loop is an engine. The specification says expressions for work done are not required except W = pΔV.

## 3.11.2.4 Engine cycles

**Four-stroke petrol engine:** induction, compression, power (a spark ignites the fuel–air mixture), exhaust. Theoretical cycle: two adiabatics joined by two constant-volume lines (heat in, heat out).

**Diesel engine:** air alone is compressed until hot enough to ignite injected fuel. Theoretical cycle: adiabatic compression, heat in at **constant pressure**, adiabatic expansion, heat out at constant volume.

**Indicator diagrams** are measured p–V loops. Compared with theory they have rounded corners, lower peak pressure and smaller area: burning takes time, valves do not move instantly, energy leaks through cylinder walls and the gas is not ideal. Induction and exhaust add a small loop of work done on the gas. Engine construction details are not required.

```
input power      = calorific value × fuel flow rate
indicated power  = loop area × cycles per second × number of cylinders
brake power      = Tω;   friction power = indicated − brake
overall = brake/input;  thermal = indicated/input;  mechanical = brake/indicated
```

A four-stroke cylinder completes one cycle every **two** crankshaft revolutions.

**Worked example 9.** Four cylinders, four-stroke, 3000 rpm; loop area 380 J; brake torque 100 N m; fuel 4.6 × 10⁷ J kg⁻¹ at 3.0 × 10⁻³ kg s⁻¹.

```
cycles per second = 50/2 = 25;  indicated = 380 × 25 × 4 = 38 kW
brake = 100 × 2π × 50 = 31.4 kW;  friction = 6.6 kW;  input = 138 kW
overall 0.23;  thermal 0.28;  mechanical 0.83  (overall = thermal × mechanical)
```

## 3.11.2.5 Second Law and engines

An engine cannot turn all the energy it takes in by heating into work, so it cannot work by the First Law alone. The **Second Law**: a heat engine must operate between a hot **source** and a cold **sink**, taking in Q_H, doing W and rejecting Q_C.

```
efficiency = W/Q_H = (Q_H − Q_C)/Q_H;   maximum = (T_H − T_C)/T_H  (kelvin)
```

Practical engines do worse because of friction, heat losses and non-ideal processes. **Combined heat and power** schemes use Q_C to heat buildings.

**Worked example 10.** Source 800 K, sink 300 K: maximum efficiency 0.625. A real engine taking in 2000 J and doing 600 J per cycle has efficiency 0.30 and rejects 1400 J.

## 3.11.2.6 Reversed heat engines

Work W moves Q_C out of a cold space and delivers Q_H = Q_C + W to a hot one. A **refrigerator** keeps the cold space cold; a **heat pump** warms the hot space.

```
COP_ref = Q_C/W = Q_C/(Q_H − Q_C);  maximum T_C/(T_H − T_C)
COP_hp  = Q_H/W = Q_H/(Q_H − Q_C);  maximum T_H/(T_H − T_C)
```

COP can exceed 1. Practical device cycles are not required.

**Worked example 11.** Between 278 K and 308 K, maximum COP_hp = 308/30 = 10.3. A heat pump with COP 3.5 delivering 6.0 kW uses 1.7 kW and extracts 4.3 kW from the cold side.

## Common errors

- Leaving ω in rpm, or using applied rather than resultant torque.
- Assuming kinetic energy is conserved when angular momentum is.
- Sign errors in Q = ΔU + W, or °C in temperature formulas.
- One cycle per revolution in a four-stroke engine.

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, version 1.3, 1 June 2017, AS and A-level exams June 2016 onwards, published by AQA. Section 3.11 Engineering physics (A-level only option).
