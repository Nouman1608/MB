---
title: "AQA A-Level Physics: Engineering physics (7408) -- Revision Notes"
seoTitle: "AQA A-Level Physics Engineering Physics Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for the AQA A-Level Physics 7408 engineering physics option: key equations, method steps, distinctions and a quick self-test with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These revision notes condense section 3.11 Engineering physics of the AQA AS and A-level Physics specification (7407/7408, version 1.3, AS and A-level exams June 2016 onwards): 3.11.1 Rotational dynamics and 3.11.2 Thermodynamics and engines. The section is **A-level only**. It is one of the five **options** (sections 3.9 to 3.13); you study one, and it is assessed in Paper 3 Section B (35 marks). Paper 3 Section A assesses practical skills and data analysis.

For full explanations and worked examples, use the [study guide](/resources/aqa-a-level-physics-engineering-physics/). Then test yourself with the [practice questions](/resources/aqa-a-level-physics-engineering-physics-practice/). See also the [course hub](/boards/aqa/a-level/physics/), the [printable checklist](/checklists/aqa/a-level/physics/) and the [free diagnostics](/diagnostics/). Radians, ω and the ideal gas equation come from [Further mechanics and thermal physics](/resources/aqa-a-level-physics-further-mechanics-and-thermal-physics-revision-notes/).

## Key equations

| Quantity | Equation | Unit |
|---|---|---|
| Moment of inertia | I = mr² (point); I = Σmr² | kg m² |
| Rotational kinetic energy | E_k = ½Iω² | J |
| Angular speed | ω = Δθ/Δt | rad s⁻¹ |
| Angular acceleration | α = Δω/Δt | rad s⁻² |
| Torque | T = Fr; T = Iα | N m |
| Angular momentum | L = Iω | N m s |
| Angular impulse | TΔt = Δ(Iω) | N m s |
| Work, power | W = Tθ; P = Tω | J, W |
| First law | Q = ΔU + W | J |
| Ideal gas | pV = nRT | |
| Isothermal | pV = constant | |
| Adiabatic | pV^γ = constant | |
| Constant pressure | W = pΔV | J |
| Input power | calorific value × fuel flow rate | W |
| Indicated power | loop area × cycles per second × cylinders | W |
| Friction power | indicated − brake | W |
| Engine efficiency | W/Q_H = (Q_H − Q_C)/Q_H | |
| Maximum efficiency | (T_H − T_C)/T_H | |
| Refrigerator | COP = Q_C/W, max T_C/(T_H − T_C) | |
| Heat pump | COP = Q_H/W, max T_H/(T_H − T_C) | |

Uniform angular acceleration:

```
ω₂ = ω₁ + αt          θ = ½(ω₁ + ω₂)t
θ = ω₁t + ½αt²        ω₂² = ω₁² + 2αθ
```

## 3.11.1 Rotational dynamics

**Moment of inertia (3.11.1.1).** Depends on the mass, how far the mass is from the axis (r²), and where the axis is. Mass at the rim counts most. The specification says expressions for particular shapes will be given where necessary.

**Flywheels (3.11.1.2).** Store energy as ½Iω². Capacity rises with I (heavy rim) and ω (limited by the material's strength). Uses: smoothing torque and speed in engines; storing braking energy in vehicles; releasing stored energy quickly in production machines such as presses.

**Graphs (3.11.1.3).** ω–t: gradient = α, area = θ. Straight line = uniform α; curve = non-uniform α (use a tangent). θ–t: gradient = ω.

**Torque (3.11.1.4).** Use the **resultant** torque in T = Iα: applied torque minus frictional torque.

**Angular momentum (3.11.1.5).** Conserved when no external resultant torque acts. Pulling mass in reduces I and raises ω; kinetic energy rises because work is done pulling inwards. Joining two rotating bodies: L is conserved, E_k is not.

**Work and power (3.11.1.6).** At constant speed, driving torque = frictional torque. Power lost to friction = T_friction × ω.

### Method: rotational dynamics problem

1. Convert rpm or rev s⁻¹ to rad s⁻¹ (multiply rev s⁻¹ by 2π).
2. Find the resultant torque.
3. α = T/I.
4. Pick the uniform-α equation that contains your known and wanted quantities.
5. Check with energy: Tθ (work by resultant torque) = Δ(½Iω²).

## 3.11.2 Thermodynamics and engines

**First law (3.11.2.1).** Q = energy **to** the gas by heating; ΔU = **increase** in internal energy; W = work done **by** the gas. Compression: W negative. Losing heat: Q negative.

**Non-flow processes (3.11.2.2).**

| Process | What is fixed | Result |
|---|---|---|
| Isothermal | T | ΔU = 0, Q = W |
| Adiabatic | no heat flow | Q = 0, W = −ΔU |
| Constant pressure | p | W = pΔV |
| Constant volume | V | W = 0, Q = ΔU |

Adiabatic compression heats a gas; adiabatic expansion cools it. γ is a constant for the gas.

*Worked reminder:* halving the volume adiabatically with γ = 1.4 multiplies p by 2^1.4 = 2.64 and T by 2^0.4 = 1.32. Isothermally, p would only double.

**p–V diagrams (3.11.2.3).** Work = area under the line. Cycle: work per cycle = loop area; ΔU = 0 per cycle. Only W = pΔV needs a formula; other areas are estimated (count squares).

**Engine cycles (3.11.2.4).**
- Petrol (four-stroke): induction, compression, power, exhaust. Theoretical: two adiabatics, heat in and out at constant volume. Spark ignition.
- Diesel: air only is compressed; fuel ignites in the hot air. Theoretical: heat in at **constant pressure**, out at constant volume.
- Real indicator diagram: rounded corners, lower peak, smaller area, small negative pumping loop.
- Four-stroke: one cycle per two crankshaft revolutions per cylinder.

**Efficiencies.**

```
overall    = brake / input
thermal    = indicated / input
mechanical = brake / indicated
overall    = thermal × mechanical
```

### Method: engine data problem

1. Convert rpm to rev s⁻¹, then halve it for cycles per second (four-stroke).
2. Indicated power = loop area × cycles per second × cylinders.
3. Brake power = Tω, with ω = 2π × rev s⁻¹.
4. Input power = calorific value × fuel flow rate.
5. Check that overall = thermal × mechanical and that every efficiency is below 1.

**Second Law (3.11.2.5).** A heat engine needs a source and a sink; it cannot turn all of Q_H into W. Real engines fall short of (T_H − T_C)/T_H because of friction, heat losses and non-ideal processes. CHP schemes use Q_C for heating.

**Reversed heat engines (3.11.2.6).** Work moves energy from cold to hot: Q_H = Q_C + W. A fridge's useful output is Q_C; a heat pump's is Q_H. COP can be greater than 1. For the same temperatures, COP_hp = COP_ref + 1.

## Must-know distinctions

- **Angular speed vs angular velocity:** angular velocity includes the sense of rotation.
- **Torque vs resultant torque:** T = Iα needs the resultant.
- **Indicated vs brake power:** indicated comes from the p–V loop (work done by the gas); brake is measured at the output shaft (Tω).
- **Thermal vs mechanical efficiency:** thermal is how well fuel energy becomes gas work; mechanical is how much gas work reaches the shaft.
- **Isothermal vs adiabatic:** isothermal is slow with heat flow, T fixed; adiabatic has no heat flow, T changes.
- **Refrigerator vs heat pump:** same device principle; different useful energy (Q_C vs Q_H).

## Quick self-test

1. Find I for a 3.0 kg point mass 0.20 m from an axis.
2. A flywheel (I = 2.5 kg m²) spins at 40 rad s⁻¹. Find its kinetic energy.
3. Convert 1200 rpm to rad s⁻¹.
4. A wheel starts from rest with α = 4.0 rad s⁻². Find the angle turned in 5.0 s.
5. A resultant torque of 12 N m acts on a body with I = 0.30 kg m². Find α.
6. A diver's I drops from 3.2 kg m² to 0.80 kg m². Her ω was 2.0 rad s⁻¹. Find her new ω.
7. Find the power delivered by a torque of 50 N m at 60 rad s⁻¹.
8. 250 J of work is done on a gas while it loses 70 J by heating. Find ΔU.
9. A gas at 2.0 × 10⁵ Pa is compressed isothermally from 3.0 L to 1.2 L. Find the new pressure.
10. Find the maximum efficiency of an engine working between 600 K and 300 K.
11. Find the maximum COP of a refrigerator with T_C = 255 K and T_H = 300 K.
12. Indicated power 30 kW; brake power 24 kW. Find the mechanical efficiency and friction power.

### Answers

1. I = 3.0 × 0.20² = **0.12 kg m²**
2. E_k = ½ × 2.5 × 40² = **2000 J**
3. 1200/60 × 2π = **126 rad s⁻¹**
4. θ = ½ × 4.0 × 5.0² = **50 rad**
5. α = 12/0.30 = **40 rad s⁻²**
6. ω = 3.2 × 2.0/0.80 = **8.0 rad s⁻¹**
7. P = 50 × 60 = **3000 W**
8. Q = −70 J, W = −250 J; ΔU = Q − W = −70 + 250 = **+180 J**
9. p = 2.0 × 10⁵ × 3.0/1.2 = **5.0 × 10⁵ Pa**
10. (600 − 300)/600 = **0.50**
11. 255/45 = **5.7**
12. 24/30 = **0.80**; friction power = **6 kW**

## Where marks are usually lost

- Leaving ω in rpm or rev s⁻¹ inside E_k = ½Iω², P = Tω or L = Iω.
- Using the motor torque in T = Iα and ignoring frictional torque.
- Claiming kinetic energy is conserved when two rotating bodies couple.
- Writing ΔU = Q + W with AQA's definition of W (work done **by** the gas).
- Treating an adiabatic change as "no temperature change".
- Using T in °C in pV = nRT, efficiency or COP formulas.
- Forgetting the factor of ½ in cycles per second for a four-stroke engine.
- Quoting an efficiency greater than 1, or a COP formula upside down.
- Describing a diesel engine with a spark plug.

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, version 1.3, 1 June 2017, AS and A-level exams June 2016 onwards, published by AQA. Section 3.11 Engineering physics (A-level only option).
