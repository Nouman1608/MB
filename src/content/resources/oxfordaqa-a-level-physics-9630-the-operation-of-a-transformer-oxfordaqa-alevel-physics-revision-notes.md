---
title: "OxfordAQA A-Level Physics (9630): The operation of a transformer -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA 9630 section 3.10.6: transformer action, turns ratio, efficiency, losses, line losses and Required practical 7, with a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 3.10.6, The operation of a transformer, of OxfordAQA International AS and A-level Physics (9630), in Section 3.10 Magnetic fields (International A-level only), including Required practical 7. Full explanations and worked examples are in the [transformer study guide](/resources/oxfordaqa-a-level-physics-9630-the-operation-of-a-transformer-oxfordaqa-alevel-physics/); test yourself with the [transformer practice questions](/resources/oxfordaqa-a-level-physics-9630-the-operation-of-a-transformer-oxfordaqa-alevel-physics-practice/). Rms values are summarised in the [alternating currents revision notes](/resources/oxfordaqa-a-level-physics-9630-alternating-currents-oxfordaqa-alevel-physics-revision-notes/).

## Equations

| Equation | Use | Notes |
|---|---|---|
| Ns/Np = Vs/Vp | Turns and voltages | Ideal transformer |
| IpVp = IsVs | Ideal transformer currents | So Is/Ip = Np/Ns |
| Efficiency = IsVs/IpVp | Real transformer | Fraction; × 100 for % |
| I = P/V | Transmission line current | P is the power sent |
| Power lost = I²R | Line heating | R is the line resistance |
| P.d. lost = IR | Voltage drop along the line | Not the supply voltage |

## Key terms

| Term | What to write |
|---|---|
| Primary coil | Coil connected to the ac supply |
| Secondary coil | Coil connected to the load, in which the emf is induced |
| Step-up transformer | More secondary turns than primary turns; Vs > Vp |
| Step-down transformer | Fewer secondary turns than primary turns; Vs < Vp |
| Ideal transformer | No energy losses: power in equals power out |
| Efficiency | Output power divided by input power |
| Laminated core | Core made of thin insulated sheets, to reduce eddy currents |

## How it works, in four steps

1. Alternating current in the primary.
2. Alternating flux in the soft-iron core, which links the secondary.
3. Changing flux linkage in the secondary.
4. Alternating emf induced in the secondary (Faraday's law), same frequency.

DC gives a steady flux: no change of flux linkage, no output.

## Causes of inefficiency

| Cause | Remedy |
|---|---|
| Coil resistance (I²R heating) | Thick copper wire |
| Eddy currents in the core | Laminated core, insulated layers |
| Hysteresis (repeated magnetising and demagnetising) | Soft iron core |
| Flux leakage | Closed core; coils wound close together |

Coil heating grows with load current squared. Eddy currents and hysteresis arise from the changing flux and occur even with no load.

## High-voltage transmission

- For a fixed power, raising V by n divides I by n.
- Power lost I²R falls by n²; p.d. lost IR falls by n.
- Step-up at the power station, step-down near the user. Transformers need ac.
- Overall efficiency of a chain = product of the separate efficiencies.

## Method box: line-loss calculation

1. Line current: I = P/V, using the power sent and the transmission voltage.
2. Power lost: I²R, with R the total resistance of both cables.
3. Percentage lost: I²R ÷ P × 100.
4. P.d. lost: IR; the voltage reaching the user is V − IR.
5. Never put the transmission voltage into V²/R with the line resistance: that p.d. is not across the line.

## Required practical 7

- Low-voltage ac supply only, never the mains.
- AC ammeter and voltmeter on each coil; variable resistor as load.
- Calculate IsVs/IpVp for each load.
- Independent: load current (or turns, or core). Controlled: supply voltage, frequency, transformer.
- Efficiency usually falls at high load current, as coil heating rises with I².
- Repeat readings; let the coils cool between runs.

## Worked reminders

- Np = 2000 on 230 V, Vs = 11.5 V: Ns = **100**.
- 230 V at 0.30 A in, 24 V at 2.6 A out: efficiency = 62.4/69.0 = **0.90**; wasted **6.6 W**.
- 120 kW through 0.80 Ω at 6.0 kV: I = 20 A, loss **320 W**, p.d. lost **16 V**.

## Exam traps

- Inverting the turns ratio, giving a step-up answer for a step-down transformer.
- Efficiency from voltages only, or above 100%.
- "Energy is lost as heat" with no cause named.
- "Laminations stop eddy currents."
- Using the transmission voltage in I²R or V²/R.
- Saying a transformer increases power.

## Self-test

1. Why does a transformer not work on a steady dc supply?
2. Why is the core made of soft iron?
3. A transformer has 2000 primary turns on 230 V. How many secondary turns give 11.5 V?
4. An ideal transformer steps 12 V up to 240 V and the secondary current is 0.50 A. Find the primary current.
5. Find the efficiency: 69 W in, 62.4 W out.
6. Why are the coils wound one on top of the other?
7. A transformer is 88% efficient and delivers 150 W. Find the input power.
8. Power is sent at 600 V instead of 6.0 kV through the same line. By what factor does the power loss change?
9. Find the line current for 120 kW sent at 600 V.
10. Find the p.d. lost in 0.80 Ω carrying the current from question 9.
11. Three stages have efficiencies 96%, 97% and 98%. Find the overall efficiency.
12. Give one safety rule for Required practical 7.

### Answers

1. A steady current gives a steady flux, so there is no change of flux linkage in the secondary and no emf is induced.
2. Soft iron is easily magnetised and demagnetised, reducing hysteresis losses, and it concentrates the flux through both coils.
3. Ns = 2000 × 11.5/230 = **100**.
4. Ip = 240 × 0.50 / 12 = **10 A**.
5. 62.4/69 = **0.90** (90%).
6. To reduce flux leakage, so that almost all the primary's flux links the secondary.
7. 150/0.88 = **170 W**.
8. The current is 10 times larger, so the loss is **100 times larger**.
9. 120 000/600 = **200 A**.
10. 200 × 0.80 = **160 V**.
11. 0.96 × 0.97 × 0.98 = **0.91** (91%).
12. Use a low-voltage ac supply; never connect a laboratory transformer to the mains.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.10.6 The operation of a transformer and Required practical 7, published by OxfordAQA. Check the board's website for the current version of the specification.
