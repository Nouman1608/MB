---
title: "AQA GCSE Physics 8463: Electricity -- Revision Notes"
seoTitle: "AQA GCSE Physics 8463 Electricity Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["gcse"]
topic: "Electricity"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8463"]
syllabusSeries: "For first teaching 2016"
order: 2
syllabusTopics:
  - qualification: "gcse"
    topic: "electricity-aqa-gcse"
  - qualification: "gcse"
    topic: "electricity-aqa-gcse"
    subtopic: "current-potential-difference-and-resistance-aqa"
  - qualification: "gcse"
    topic: "electricity-aqa-gcse"
    subtopic: "series-and-parallel-circuits-aqa"
  - qualification: "gcse"
    topic: "electricity-aqa-gcse"
    subtopic: "domestic-uses-and-safety"
  - qualification: "gcse"
    topic: "electricity-aqa-gcse"
    subtopic: "energy-transfers-aqa-electricity"
  - qualification: "gcse"
    topic: "electricity-aqa-gcse"
    subtopic: "static-electricity"
description: "Condensed AQA GCSE Physics 8463 Electricity revision notes: circuit equations, I–V graphs, series vs parallel, mains wiring, static and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

These are condensed recall notes for section **4.2 Electricity** (4.2.1.1 to 4.2.5.2) of the AQA GCSE Physics
(8463) specification, for teaching from September 2016 and exams from 2018 onwards. The topic is assessed on
Paper 1, set at Foundation and Higher Tier, and Paper 2 can draw on its energy-transfer ideas. No point in section
4.2 is marked (HT only), so all of it applies to both tiers.

For full explanations and worked examples, use the [Electricity study guide](/resources/aqa-gcse-physics-8463-electricity/).
Then test yourself with the [Electricity practice questions](/resources/aqa-gcse-physics-8463-electricity-practice/).
The course hub is [AQA GCSE Physics](/boards/aqa/gcse/physics/), the [printable checklist](/checklists/aqa/gcse/physics/)
lists every point, and the [free diagnostics](/diagnostics/) help you find gaps.

## The equations -- all six must be recalled

| Equation | Symbols | Units |
|---|---|---|
| charge flow = current × time | Q = I t | C, A, s |
| potential difference = current × resistance | V = I R | V, A, Ω |
| power = potential difference × current | P = V I | W, V, A |
| power = current² × resistance | P = I² R | W, A, Ω |
| energy transferred = power × time | E = P t | J, W, s |
| energy transferred = charge flow × potential difference | E = Q V | J, C, V |
| series resistance | R_total = R₁ + R₂ | Ω |

Unit traps: 1 kW = 1000 W; 1 kΩ = 1000 Ω; 1 mA = 0.001 A; minutes × 60 = seconds; hours × 3600 = seconds.

## Definitions to learn word for word

- **Electric current:** the rate of flow of electrical charge.
- **Source of potential difference:** needed for charge to flow round a closed circuit.
- **Ohmic conductor:** current is directly proportional to pd at constant temperature, so resistance is constant.
- **Alternating pd:** keeps reversing direction. **Direct pd:** one direction only.
- **National Grid:** a system of cables and transformers linking power stations to consumers.
- **Electric field:** the region around a charged object where another charged object feels a force.

## 4.2.1 Components and I–V graphs

| Component | Graph shape (I against V) | Resistance |
|---|---|---|
| Fixed resistor, constant temperature | Straight line through origin | Constant |
| Filament lamp | S-shaped curve, flattening at both ends | Rises as filament temperature rises |
| Diode | Zero in reverse; rises steeply in forward direction | Very high in reverse |
| Thermistor | -- | Falls as **temperature** rises (thermostats) |
| LDR | -- | Falls as **light intensity** rises (lights that switch on in the dark) |

**Measuring resistance -- method in steps**

1. Ammeter in **series** with the component.
2. Voltmeter in **parallel** across the component.
3. Change the pd with a variable resistor; record V and I.
4. Calculate R = V ÷ I for each pair of readings.

**Required practical 3 (resistance of a wire):** vary the length between crocodile clips; keep temperature
constant (low current, switch off between readings); R should be directly proportional to length. Also compare
resistors in series and in parallel.

**Required practical 4 (I–V characteristics):** resistor at constant temperature, filament lamp, diode. Reverse the
supply to get negative values; plot I on the y-axis against V on the x-axis.

Worked reminder: 3.0 V across a lamp, 0.60 A through it → R = 3.0 ÷ 0.60 = **5.0 Ω**.

## 4.2.2 Series vs parallel -- must-know distinctions

| | Series | Parallel |
|---|---|---|
| Current | Same everywhere | Branch currents add up to the total |
| pd | Shared (adds up to supply) | Same across every branch |
| Total resistance | R₁ + R₂ (goes up when you add one) | Less than the smallest (goes down when you add one) |
| Why | Charge passes through each resistor in turn | Each resistor is an extra path for charge |

You are **not** required to calculate the total resistance of two resistors in parallel. For a parallel branch,
use V = IR on that branch alone.

**Series circuit calculation -- method in steps**

1. Add the resistances to get the equivalent resistance.
2. I = supply pd ÷ total resistance.
3. pd across each resistor = I × its resistance.
4. Check the pds add up to the supply pd.

**Sensor circuits:** a thermistor or LDR in series with a fixed resistor. When the sensor's resistance rises, it
takes a **bigger share** of the supply pd.

Worked reminder: 9.0 V supply, 2.0 kΩ fixed resistor, thermistor at 1.0 kΩ → total 3.0 kΩ, I = 9.0 ÷ 3000 =
0.0030 A, pd across thermistor = 0.0030 × 1000 = **3.0 V**. If the thermistor cools to 7.0 kΩ → total 9.0 kΩ,
I = 0.0010 A, pd across thermistor = **7.0 V**.

## 4.2.3 Mains electricity

- UK mains: **ac**, **50 Hz**, **about 230 V**.
- Live -- **brown** -- carries the alternating pd; about 230 V relative to earth.
- Neutral -- **blue** -- completes the circuit; at or close to 0 V.
- Earth -- **green and yellow stripes** -- safety wire; 0 V; carries current only if there is a fault.
- A live wire is dangerous even when the switch is open: it is still at about 230 V, and your body is at 0 V.
- A connection between live and earth lets a large current flow: risk of shock or fire.

## 4.2.4 Energy transfers

- Energy transferred depends on the **power** of the appliance and **how long** it is on.
- Work is done when charge flows.
- Motors: energy to kinetic energy stores. Heaters: energy to thermal energy stores.
- Worked reminder: a 1.5 kW heater on for 2 hours → E = 1500 × 7200 = **10 800 000 J** (10.8 MJ).

**National Grid chain:** power station → **step-up transformer** (pd up, current down) → transmission cables →
**step-down transformer** (pd down to a safe domestic value) → homes.

**Why efficient:** same power at higher pd means lower current (P = VI); lower current means much less heating
of the cables (P = I²R), so less energy is wasted.

## Must-know distinctions

| Pair | Difference |
|---|---|
| ac vs dc | ac keeps reversing direction; dc flows one way only |
| E = Pt vs E = QV | Use E = Pt when you know power and time; E = QV when you know charge and pd |
| P = VI vs P = I²R | Use P = I²R when you know current and resistance but not pd |
| Thermistor vs LDR | Thermistor responds to temperature; LDR responds to light |
| Neutral vs earth | Neutral carries current in normal use; earth carries current only in a fault |

## 4.2.5 Static electricity

- Rub two **insulators**: **electrons** move from one to the other.
- Gains electrons → **negative**. Loses electrons → **equal positive** charge.
- Like charges **repel**; unlike charges **attract**; both are **non-contact** forces.
- Field lines round an isolated sphere: **radial**, outward for positive, inward for negative, closest together
  near the surface.
- Field is strongest close to the object; force increases as distance decreases.
- **Sparking:** charge builds up, the pd to a nearby earthed object gets large, electrons jump the gap.

## Quick self-test

1. A current of 2.0 A flows for 45 s. Calculate the charge.
2. A component has 6.0 V across it and 0.30 A through it. Calculate its resistance.
3. A 10 Ω and a 15 Ω resistor are in series with a 5.0 V supply. Find the total resistance and the current.
4. State the frequency and pd of the UK domestic supply.
5. What colour is the earth wire?
6. A 230 V appliance draws 4.0 A. Calculate its power.
7. How much energy does a 60 W lamp transfer in 2 minutes?
8. A current of 3.0 A passes through a 5.0 Ω resistor. Calculate the power.
9. 50 C of charge passes through a pd of 9.0 V. Calculate the energy transferred.
10. A polythene rod gains electrons when rubbed. What charge does it get?
11. What happens to the resistance of a thermistor as its temperature rises?
12. Two parallel branches on a 3.0 V supply carry 0.10 A and 0.20 A. What is the total current?

### Answers

1. Q = 2.0 × 45 = **90 C**
2. R = 6.0 ÷ 0.30 = **20 Ω**
3. R_total = 10 + 15 = **25 Ω**; I = 5.0 ÷ 25 = **0.20 A**
4. **50 Hz**, **about 230 V**
5. **Green and yellow stripes**
6. P = 230 × 4.0 = **920 W**
7. E = 60 × 120 = **7200 J**
8. P = 3.0² × 5.0 = **45 W**
9. E = 50 × 9.0 = **450 J**
10. **Negative**
11. It **decreases**
12. 0.10 + 0.20 = **0.30 A**

## Where marks are usually lost

- Leaving time in minutes or hours in Q = It and E = Pt.
- Writing "P = IR" or forgetting to square the current in P = I²R.
- Drawing the voltmeter in series or the ammeter in parallel.
- Describing a filament lamp graph as a straight line, or saying its resistance falls.
- Stating that current is shared between components in a series circuit.
- Writing "the neutral wire is safe to touch because it carries no current" -- it does carry current; it is at about 0 V.
- Saying the earth wire "stops the current" -- it stops the appliance casing becoming live.
- Explaining static with protons or "positive charge" moving; only electrons move.
- In National Grid answers, saying the step-up transformer "increases the current".
- Dropping units, or giving 1.38 MJ as "1.38" with no prefix.

## Official syllabus

AQA GCSE Physics (8463) specification, for teaching from September 2016 onwards, for exams in 2018 onwards
(Version 1.1, 30 September 2019), published by AQA. These notes cover section 4.2 Electricity.
