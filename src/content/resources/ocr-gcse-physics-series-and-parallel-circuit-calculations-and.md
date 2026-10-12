---
title: "OCR GCSE Physics A: Series and parallel circuit calculations and electrical power (J249)"
seoTitle: "OCR GCSE Physics Series, Parallel Circuits and Power"
resourceType: "study-guides"
subject: "physics"
level: ["gcse"]
topic: "Series and parallel circuit calculations and electrical power"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J249"]
syllabusSeries: "Version 5.0 (July 2026), for first assessment in 2018"
order: 19
syllabusTopics:
  - qualification: "gcse"
    topic: "electricity-ocr-gcse"
    subtopic: "simple-circuits-ocr-gcse"
description: "Study guide for OCR GCSE Physics A (J249) P3.2i-P3.2m: series and parallel circuit calculations, measurement circuits and power, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This study guide is aligned to the OCR GCSE (9-1) Gateway Science Physics A (J249) specification, Version 5.0 (July 2026), first assessment in 2018. It covers learning outcomes P3.2i to P3.2m in topic P3.2 Simple circuits. No statement in this range is printed in bold in the specification, so each is assessed in both Foundation and Higher Tier papers.

Related: [Series and parallel circuits revision notes](/resources/ocr-gcse-physics-series-and-parallel-circuit-calculations-and-revision-notes/) | [Practice questions](/resources/ocr-gcse-physics-series-and-parallel-circuit-calculations-and-practice/) | [OCR GCSE Physics hub](/boards/ocr/gcse/physics/) | [Printable checklist](/checklists/ocr/gcse/physics/) | [Exam preparation](/resources/ocr-gcse-physics-exam-preparation/) | [Free diagnostics](/diagnostics/)

## What this guide covers

| Outcome | What you must be able to do | Tier |
|---|---|---|
| P3.2i | Explain why net resistance rises for two resistors in series and falls for two in parallel (qualitative explanation only) | Both |
| P3.2j | Calculate currents, potential differences and resistances in d.c. series and parallel circuits | Both |
| P3.2k | Explain the design and use of d.c. circuits for measurement and testing | Both |
| P3.2l | Explain how power transfer in a device relates to the potential difference across it, the current, and the energy change over a given time | Both |
| P3.2m | Apply the equations linking potential difference, current, charge, resistance, power, energy and time, and solve problems with resistors in series using equivalent resistance | Both |

Quantities and units used throughout: potential difference V in volts (V), current I in amperes (A), resistance R in ohms (Ω), charge Q in coulombs (C), energy E in joules (J) or kilowatt-hours (kW h), power P in watts (W) or kilowatts (kW), time t in seconds (s) or hours (h).

## P3.2i: why net resistance changes

Resistance measures how much a component opposes current. The net (total) resistance of a circuit is the single resistance that would draw the same current from the same supply.

**Series.** Charge has only one path. It must pass through every resistor in turn, so each one adds opposition. The supply has to push the same current through more obstruction, so for a given supply p.d. the current falls. Net resistance is larger than any single resistor in the chain.

**Parallel.** Each extra branch is another path for charge. The supply p.d. is applied across every branch, so each branch carries its own current and the supply delivers the sum of them. For the same supply p.d. the total current rises, which means the net resistance has fallen. Net resistance is smaller than the smallest branch.

A useful comparison: one door out of a hall is slow, two doors side by side let more people through, and a second door placed in the same corridor makes it slower again.

Practical link: the specification suggests investigating the brightness of bulbs in series and parallel. Two identical bulbs in series are each dimmer than a single bulb, because the current is smaller. Two identical bulbs in parallel are each as bright as a single bulb on the same supply, because each branch has the full supply p.d., but the cell supplies more current overall.

## P3.2j: currents, p.d.s and resistances

### The rules

| | Series | Parallel |
|---|---|---|
| Current | Equal at all points | Divides between branches; the branch currents sum to the supply current |
| Potential difference | Supply p.d. is shared; the p.d.s add up | Same across every branch, equal to the supply p.d. |
| Resistance | Net R = R₁ + R₂ + ... | Net R is less than the smallest branch |

The link between the three quantities is V = I × R. Rearranged: I = V / R and R = V / I. Use it on a single component, or on the whole circuit using the supply p.d., the supply current and the net resistance.

### Worked example 1: series

A 12 V supply is connected to a 5.0 Ω resistor and a 7.0 Ω resistor in series. Find the current and the p.d. across each resistor.

1. Net resistance = 5.0 + 7.0 = 12 Ω.
2. Current = V / R = 12 / 12 = 1.0 A. This is the current in both resistors.
3. p.d. across 5.0 Ω = 1.0 × 5.0 = 5.0 V.
4. p.d. across 7.0 Ω = 1.0 × 7.0 = 7.0 V.
5. Check: 5.0 + 7.0 = 12 V, the supply p.d.

### Worked example 2: parallel

A 6.0 Ω resistor and a 3.0 Ω resistor are connected in parallel across a 9.0 V supply. Find the current in each branch, the supply current and the net resistance.

1. Each branch has 9.0 V across it.
2. Current in 6.0 Ω = 9.0 / 6.0 = 1.5 A.
3. Current in 3.0 Ω = 9.0 / 3.0 = 3.0 A.
4. Supply current = 1.5 + 3.0 = 4.5 A.
5. Net resistance = V / I = 9.0 / 4.5 = 2.0 Ω. This is smaller than 3.0 Ω, as P3.2i predicts.

### Worked example 3: a series and parallel mix

A resistor R₁ = 4.0 Ω is in series with a parallel pair, a 6.0 Ω resistor and a 12 Ω resistor. The supply is 12 V and the ammeter in the supply lead reads 1.5 A. Find the current in each branch of the pair.

1. R₁ carries the supply current, so its p.d. = 1.5 × 4.0 = 6.0 V.
2. The rest of the supply p.d. is across the pair: 12 − 6.0 = 6.0 V. Both branches have this p.d.
3. Current in the 12 Ω branch = 6.0 / 12 = 0.50 A. Current in the 6.0 Ω branch = 6.0 / 6.0 = 1.0 A.
4. Check: 0.50 + 1.0 = 1.5 A, which matches the ammeter.

Method for mixed circuits: find the p.d. or current you can be sure of, then apply the series or parallel rule one section at a time.

## P3.2k: circuits for measurement and testing

- **Ammeter in series.** It must sit in the path of the current being measured. Ammeters have very low resistance so they do not change the current.
- **Voltmeter in parallel.** It connects across the component, with both leads on either side of it. Voltmeters have very high resistance so they draw almost no current.
- **Finding resistance.** Measure the p.d. across a component and the current through it, then use R = V / I. A variable resistor in the circuit lets you take a range of readings.
- **Sensor circuits.** Put a thermistor or LDR in a series loop with a fixed resistor and connect a voltmeter across the fixed resistor. This turns a change in temperature or light level into a change in p.d. The specification suggests investigating a thermistor in a beaker of water being heated and an LDR in different light levels.
- **Fault finding.** A voltmeter placed across a lamp that is not lit in a series circuit reads close to the full supply p.d. if that lamp has a broken filament, because almost all the p.d. is across the break. It reads close to zero if the lamp is intact but the break is elsewhere.

### Worked example 4: a thermistor circuit

An NTC thermistor is in series with a 100 Ω fixed resistor on a 6.0 V supply. A voltmeter across the fixed resistor reads 2.0 V.

1. Current = 2.0 / 100 = 0.020 A.
2. p.d. across the thermistor = 6.0 − 2.0 = 4.0 V.
3. Thermistor resistance = 4.0 / 0.020 = 200 Ω.
4. The thermistor is heated until its resistance is 50 Ω. Net resistance = 100 + 50 = 150 Ω, so current = 6.0 / 150 = 0.040 A.
5. The voltmeter now reads 0.040 × 100 = 4.0 V. The reading rose as the temperature rose, so the voltmeter reading is an indicator of temperature.

## P3.2l and P3.2m: power, energy and charge

A device transfers energy from the electrical supply to other stores. The rate of this transfer is its power.

| Equation | Use |
|---|---|
| P = V × I | Power from p.d. and current |
| P = I² × R | Power from current and resistance |
| E = P × t | Energy from power and time (J with W and s; kW h with kW and h) |
| E = Q × V | Energy from charge and p.d. |
| V = I × R | Link between p.d., current and resistance |
| Q = I × t | Charge from current and time |

A device with a high p.d. across it and a large current through it transfers energy quickly. One coulomb of charge transfers V joules as it passes through a p.d. of V volts, which is what E = Q × V says.

### Worked example 5: a kettle

A kettle has 230 V across it and a current of 10 A.

1. P = V × I = 230 × 10 = 2300 W.
2. In 120 s: E = P × t = 2300 × 120 = 276 000 J.
3. In kilowatt-hours for 3.0 minutes: P = 2.3 kW, t = 3.0 / 60 = 0.050 h, E = 2.3 × 0.050 = 0.115 kW h.

### Worked example 6: using P = I² × R

A heater element has resistance 60 Ω and carries 0.50 A. P = 0.50² × 60 = 0.25 × 60 = 15 W.

### Worked example 7: everything together

A 9.0 V cell is connected to a 15 Ω resistor and a 30 Ω resistor in series. Find the current, the power in each resistor, and the energy transferred in 5.0 minutes.

1. Equivalent resistance = 15 + 30 = 45 Ω.
2. Current = 9.0 / 45 = 0.20 A.
3. Power in 15 Ω resistor = 0.20² × 15 = 0.60 W. Power in 30 Ω resistor = 0.20² × 30 = 1.2 W.
4. Total power = 0.60 + 1.2 = 1.8 W. Check: V × I = 9.0 × 0.20 = 1.8 W.
5. t = 5.0 × 60 = 300 s. Energy = 1.8 × 300 = 540 J.
6. Charge flowing = I × t = 0.20 × 300 = 60 C. Check with E = Q × V = 60 × 9.0 = 540 J.

## Common errors

- Adding branch resistances in a parallel circuit. The net resistance of a parallel pair is smaller than either branch.
- Using the supply p.d. across one series resistor. Only its own share of the p.d. is across it.
- Putting a voltmeter in series, or an ammeter in parallel.
- Leaving time in minutes or hours when using watts and joules. Convert to seconds, or use kW with hours.
- Mixing kW and W in one calculation.
- Giving a power as an energy, or the reverse. Joules measure energy, watts measure joules per second.
- Dropping units, or giving a final answer with far more figures than the data supports.

## Next steps

Try the [practice questions](/resources/ocr-gcse-physics-series-and-parallel-circuit-calculations-and-practice/), then use the [revision notes](/resources/ocr-gcse-physics-series-and-parallel-circuit-calculations-and-revision-notes/) for quick recall. A [free diagnostic](/diagnostics/) will show where to focus.

## Official syllabus

OCR GCSE (9-1) Gateway Science Physics A (J249), Version 5.0 (July 2026), first assessment in 2018, published by OCR. Learning outcomes P3.2i to P3.2m.
