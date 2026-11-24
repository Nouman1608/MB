---
title: "OxfordAQA A-Level Physics (9630): The operation of a transformer"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.10 – Magnetic fields"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 10.6
syllabusTopics:
  - qualification: "a-level"
    topic: "magnetic-fields-oxfordaqa-alevel"
    subtopic: "the-operation-of-a-transformer-oxfordaqa-alevel-physics"
description: "Study guide to OxfordAQA 9630 section 3.10.6: how a transformer works, Ns/Np = Vs/Vp, efficiency, causes of losses, line losses and Required practical 7."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.10.6, The operation of a transformer, the last part of Section 3.10 Magnetic fields (International A-level only). For a first pass through alternating currents and the transformer together, use the [alternating currents and the transformer study guide](/resources/oxfordaqa-a-level-physics-alternating-currents-and-the-transformer/). After this page, condense it with the [transformer revision notes](/resources/oxfordaqa-a-level-physics-9630-the-operation-of-a-transformer-revision-notes/) and test yourself with the [transformer practice questions](/resources/oxfordaqa-a-level-physics-9630-the-operation-of-a-transformer-practice/).

## What the specification asks for

| Statement in 3.10.6 | What you must be able to do |
|---|---|
| The transformer equation Ns/Np = Vs/Vp | Use it for step-up and step-down transformers |
| Transformer efficiency = IsVs/IpVp | Calculate efficiency and unknown currents |
| Causes of inefficiencies in a transformer | Name each cause, explain it and say how it is reduced |
| Transmission of electrical power at high voltage, including calculations of power and voltage losses in transmission lines | Calculate line current, power lost and p.d. lost |
| Required practical 7: investigation of the efficiency of a transformer | Plan, carry out safely and analyse the investigation |

## How a transformer works

A transformer is two coils, the primary and the secondary, wound on a shared core of soft iron. It works by electromagnetic induction (section 3.10.4), step by step:

1. An alternating p.d. across the primary drives an alternating current in it.
2. The current produces an alternating magnetic flux. The iron core concentrates this flux and guides it through the secondary coil.
3. The flux linkage of the secondary therefore changes continuously.
4. By Faraday's law, an alternating emf is induced in the secondary, at the same frequency as the supply.

A steady (dc) supply gives a steady flux after it is switched on. With no change of flux linkage, no emf is induced in the secondary, so a transformer does not work on dc.

### Where the turns ratio comes from

In an ideal transformer every turn of both coils links the same changing flux, so the emf per turn is the same in both. The emf across each coil is therefore proportional to its number of turns:

Vs/Vp = Ns/Np

- **Step-up:** Ns > Np, so Vs > Vp.
- **Step-down:** Ns < Np, so Vs < Vp.

For an ideal transformer (100% efficient), power in = power out: IpVp = IsVs. Stepping the voltage up steps the current down by the same factor. A transformer does not create energy.

### Worked example 1: a phone charger

A charger transformer has 1150 turns on its primary, connected to 230 V rms. The secondary must give 6.0 V rms. Find the number of secondary turns.

Ns = Np × Vs/Vp = 1150 × 6.0/230 = **30 turns**.

If the secondary supplies 1.5 A and the transformer is ideal, Ip = IsVs/Vp = 1.5 × 6.0/230 = 0.039 A. The primary current is small because the primary voltage is large.

## Efficiency

efficiency = output power / input power = IsVs/IpVp

### Worked example 2: finding the primary current

A transformer on a 230 V supply delivers 4.0 A at 12 V to a lamp. Its efficiency is 90%. Find the primary current.

Output power = 12 × 4.0 = 48 W.

Input power = 48 / 0.90 = 53.3 W.

Ip = 53.3 / 230 = **0.23 A**.

An efficiency less than 1 always means input power exceeds output power. If your answer for Ip is smaller than the ideal value (48/230 = 0.21 A), you have divided the wrong way.

## Causes of inefficiency

| Cause | What happens | How it is reduced |
|---|---|---|
| Resistance of the coils | Current heats the windings (I²R) | Thick wire of low resistivity, usually copper |
| Eddy currents in the core | The changing flux induces currents in the iron, which heat it | Laminated core: thin sheets insulated from one another |
| Hysteresis | Energy is needed each cycle to magnetise and demagnetise the core, and is transferred as heat | Soft iron, which is easily magnetised and demagnetised |
| Flux leakage | Some flux from the primary does not pass through the secondary | Closed core, with the coils wound close together, often one on top of the other |

Two of these depend on the load in different ways. Coil heating grows with the square of the current, so it matters most at large loads. Eddy currents and hysteresis come from the changing flux in the core, which is present whenever the primary is connected, even with nothing attached to the secondary.

## Transmitting power at high voltage

Power stations send electrical power over long distances through cables with resistance R. For a power P sent at voltage V:

- line current I = P/V
- power lost in the line = I²R
- p.d. lost along the line = IR

Raising V by a factor n cuts I by n, the power loss by n² and the voltage drop by n. Step-up transformers raise the voltage for transmission and step-down transformers lower it for safe use. This is only practical with alternating current.

### Worked example 3: supplying a village

A village needs 25 kW. The line from the substation has a total resistance of 2.0 Ω. Compare sending the power at 400 V and at 11 kV.

| | At 400 V | At 11 kV |
|---|---|---|
| Line current I = P/V | 62.5 A | 2.27 A |
| Power lost I²R | 7.8 kW | 10 W |
| Percentage of 25 kW lost | 31% | 0.04% |
| P.d. lost IR | 125 V | 4.5 V |

At 400 V almost a third of the power heats the cable, and the voltage at the village end falls from 400 V to 275 V. At 11 kV both losses are negligible. The p.d. lost along the line is IR, not the transmission voltage; putting 11 kV into V²/R with the line resistance gives a meaningless answer.

### Worked example 4: how much resistance is acceptable?

For the 11 kV line above, the maximum line resistance that keeps the loss below 2% of 25 kW is:

I²R ≤ 500 W, so R ≤ 500 / 2.27² = **97 Ω**.

So at high voltage, thinner (cheaper, lighter) cables can be used.

### Chains of transformers

When power passes through several transformers, the overall efficiency is the product of the individual efficiencies. A 98% step-up transformer followed by a 97% step-down transformer gives 0.98 × 0.97 = 95% overall, before any line losses.

## Required practical 7: efficiency of a transformer

**Aim:** find how the efficiency of a transformer depends on a chosen variable, such as the load current or the number of turns.

**Method:**

- Use a low-voltage ac supply. Laboratory transformers must never be connected to the mains.
- Connect an ac ammeter and an ac voltmeter to each coil, with a variable resistor as the load on the secondary.
- Record Vp, Ip, Vs and Is for a range of load resistances.
- Calculate IpVp, IsVs and the efficiency for each.

**Variables:** independent: load current (or turns, or core arrangement); dependent: efficiency; controlled: supply voltage and frequency, the transformer and core, the meters used.

**Analysis:** plot efficiency against secondary current. At large currents the efficiency falls, because coil heating rises with I². Repeat readings, and let the coils cool between runs, since a hot coil has a higher resistance.

## Common mistakes

- Inverting the turns ratio.
- Calculating efficiency from voltages alone.
- Saying a transformer works on dc "but less well". It gives no output after the instant of switching.
- Saying laminations "stop" eddy currents.
- Using the transmission voltage instead of the line current in I²R.
- Confusing the p.d. lost in the line (IR) with the supply voltage.

## Exam technique

- **Explain** how a transformer works in four linked steps: alternating current, alternating flux in the core, changing flux linkage of the secondary, induced alternating emf.
- **Explain** a loss: name the cause, describe how it wastes energy, give the remedy.
- **Calculate** line losses: find I = P/V first, then I²R and IR.
- **Plan** the practical: name the meters (ac), the variables, the safety rule and the graph.

## More resources on this topic

- [Transformer revision notes](/resources/oxfordaqa-a-level-physics-9630-the-operation-of-a-transformer-revision-notes/)
- [Transformer practice questions](/resources/oxfordaqa-a-level-physics-9630-the-operation-of-a-transformer-practice/)
- [Alternating currents study guide](/resources/oxfordaqa-a-level-physics-9630-alternating-currents/)
- [Electromagnetic induction study guide](/resources/oxfordaqa-a-level-physics-9630-electromagnetic-induction/)

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.10.6 The operation of a transformer and Required practical 7, published by OxfordAQA. Check the board's website for the current version of the specification.
