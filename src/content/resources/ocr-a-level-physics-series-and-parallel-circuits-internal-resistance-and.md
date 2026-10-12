---
title: "OCR A Level Physics A: Series and parallel circuits, internal resistance and potential dividers (H556)"
seoTitle: "OCR A Level Physics Internal Resistance Study Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Series and parallel circuits, internal resistance and potential dividers"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 50
syllabusTopics:
  - qualification: "a-level"
    topic: "electrons-waves-and-photons"
    subtopic: "electrical-circuits-ocr-alevel"
description: "Study guide to Kirchhoff's laws, series and parallel resistance, internal resistance and potential dividers for OCR A Level Physics A (H556) section 4.3."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
This guide covers section 4.3 (Electrical circuits) of the OCR Advanced GCE in Physics A specification (H556), Version 3.0 (March 2026), for first assessment in 2017. It teaches 4.3.1 series and parallel circuits, 4.3.2 internal resistance and 4.3.3 potential dividers. H556 is the full A level, so everything here is A level content. Use the [revision notes](/resources/ocr-a-level-physics-series-and-parallel-circuits-internal-resistance-and-revision-notes/) for quick recall and the [practice set](/resources/ocr-a-level-physics-series-and-parallel-circuits-internal-resistance-and-practice/) to test yourself. Course pages: [OCR A Level Physics hub](/boards/ocr/a-level/physics/) and the [printable checklist](/checklists/ocr/a-level/physics/). Not sure where your gaps are? Try the free [10-minute diagnostics](/diagnostics/).

## What this unit covers

| Reference | You must be able to |
|---|---|
| 4.3.1(a) | State Kirchhoff's second law and link it to conservation of energy |
| 4.3.1(b) | Apply Kirchhoff's first and second laws to circuits |
| 4.3.1(c)-(e) | Find total resistance in series, parallel and mixed circuits |
| 4.3.1(f) | Analyse circuits with more than one source of e.m.f. |
| 4.3.2(a), (b) | Explain internal resistance, terminal p.d. and lost volts |
| 4.3.2(c)(i) | Use E = I(R + r) and E = V + Ir |
| 4.3.2(c)(ii) | Describe how to determine internal resistance (PAG3) |
| 4.3.3(a), (b) | Analyse potential dividers, including a potentiometer and LDR or thermistor circuits |
| 4.3.3(c)(i) | Use Vout = R2/(R1 + R2) × Vin and V1/V2 = R1/R2 |
| 4.3.3(c)(ii) | Describe how to investigate potential divider and sensing circuits (PAG4) |

## 4.3.1 Kirchhoff's laws

**First law:** total current into a junction equals total current out. Charge is conserved, and it cannot pile up at a junction in a steady circuit.

**Second law (4.3.1(a)):** around any closed loop, the sum of the e.m.f.s equals the sum of the p.d.s. This is conservation of energy. Each coulomb gains energy from the sources and transfers the same total to the components on a full loop.

To apply it, choose a direction round the loop. Count an e.m.f. as positive when you pass through the source from negative to positive terminal in that direction, and count each resistor's p.d. as IR with the current in that direction. Then write: sum of e.m.f. = sum of IR.

## 4.3.1(c), (d) Resistors in series and parallel

In series the same current passes through every resistor and the p.d.s add. Dividing the supply p.d. by the same current gives

R = R1 + R2 + ...

In parallel the p.d. is the same across every branch and the currents add (first law). Dividing that current by the common p.d. gives

1/R = 1/R1 + 1/R2 + ...

For two resistors this becomes R = R1R2/(R1 + R2). The total of a parallel group is always smaller than its smallest resistor, because each branch adds another path.

## 4.3.1(e) Mixed circuits

Reduce the circuit in stages, then work back out.

1. Collapse every parallel group into one equivalent resistor.
2. Add series resistances to get the total.
3. Find the supply current from I = V/R.
4. Work back out: p.d. across the parallel group is I × R(group), then each branch current is that p.d. divided by the branch resistance.

**Worked example 1.** A 12 V supply of negligible internal resistance is connected across a 4.0 Ω resistor in series with a parallel pair of 15 Ω and 10 Ω.

Parallel pair: 1/R = 1/15 + 1/10 = 5/30, so R = 6.0 Ω.
Total: 4.0 + 6.0 = 10.0 Ω.
Supply current: I = 12/10.0 = 1.2 A.
P.d. across the 4.0 Ω resistor: 1.2 × 4.0 = 4.8 V, leaving 12 − 4.8 = 7.2 V across the pair.
Branch currents: 7.2/15 = 0.48 A and 7.2/10 = 0.72 A. These add to 1.2 A, which checks the first law.

## 4.3.1(f) More than one source of e.m.f.

Sources can help each other (same sense round the loop) or oppose each other (opposite sense). With two sources in a single loop, the net e.m.f. is the sum when they help and the difference when they oppose. When sources sit in different branches, label a current in each branch, write one first-law equation and one second-law equation per independent loop, then solve the simultaneous equations.

**Worked example 2.** Branch A has a 12 V source and a 3.0 Ω resistor. Branch B has an 8.0 V source and a 2.0 Ω resistor. The branches join at two junctions, with a 2.0 Ω resistor R connected between those junctions. Treat the sources as having no internal resistance. Currents I1 (branch A) and I2 (branch B) both flow towards the top of R.

First law: the current in R is I1 + I2.
Loop through A and R: 12 = 3.0 I1 + 2.0(I1 + I2), so 12 = 5.0 I1 + 2.0 I2.
Loop through B and R: 8.0 = 2.0 I2 + 2.0(I1 + I2), so 8.0 = 2.0 I1 + 4.0 I2.
Multiply the first by 2: 24 = 10 I1 + 4 I2. Subtract the second: 16 = 8 I1, so I1 = 2.0 A.
Then 8.0 = 4.0 + 4.0 I2, so I2 = 1.0 A. The current in R is 3.0 A, and the p.d. across R is 6.0 V.

Energy check: the sources deliver 12 × 2.0 + 8.0 × 1.0 = 32 W and the resistors dissipate 12 + 2 + 18 = 32 W.

If a current comes out negative, its true direction is opposite to the one you drew. That is a valid answer.

## 4.3.2 Internal resistance

**4.3.2(a).** The **e.m.f.** E of a source is the energy transferred to each coulomb of charge passing through the source, from chemical (or other) energy to electrical. A real source also resists the flow of charge through itself. This **internal resistance** r acts like a resistor in series with an ideal source.

**4.3.2(b).** The **terminal p.d.** V is the p.d. across the terminals when current is drawn. Some of the e.m.f. is used up driving current through r. The p.d. across the internal resistance, Ir, is called the **lost volts**. With no current drawn, there are no lost volts and V = E.

**4.3.2(c)(i).** Applying the second law to the loop of source, internal resistance and external resistance R:

E = I(R + r) and E = V + Ir

with V = IR. Rearranged: V = E − Ir. Plotting V (vertical) against I (horizontal) gives a straight line with gradient −r and vertical intercept E. The horizontal intercept, E/r, is the current if the terminals were joined directly (short circuit).

**Worked example 3.** A 12.0 V source of internal resistance 0.50 Ω drives a load of 5.5 Ω.

I = E/(R + r) = 12.0/(5.5 + 0.50) = 2.0 A.
Terminal p.d. V = IR = 2.0 × 5.5 = 11.0 V. Lost volts Ir = 2.0 × 0.50 = 1.0 V. Check: 11.0 + 1.0 = 12.0 V.
Power in the load: I²R = 22 W. Wasted inside the source: I²r = 2.0 W. Total supplied: EI = 24 W.
Short-circuit current: E/r = 12.0/0.50 = 24 A.

**Why V falls with load.** A smaller R means a larger current, so Ir grows and V = E − Ir falls.

### 4.3.2(c)(ii) Determining internal resistance (PAG3)

1. Connect the cell or power supply in series with a variable resistor (or a set of known resistors) and an ammeter. Connect a voltmeter directly across the terminals of the source.
2. Change the resistance in steps, recording I and V each time. Open the switch between readings so the source does not drain or warm up.
3. Repeat to check consistency. Plot V against I and draw a line of best fit.
4. Read E from the intercept and r from the negative of the gradient.

**Worked example 4.** The readings below were taken for a cell.

| I / A | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 |
|---|---|---|---|---|---|
| V / V | 1.44 | 1.38 | 1.32 | 1.26 | 1.20 |

V falls by 0.06 V for each 0.10 A, so gradient = −0.60 V A⁻¹ and r = 0.60 Ω. Extending the line to I = 0 gives E = 1.50 V (check: 1.44 + 0.10 × 0.60 = 1.50).

Keep currents small so the source does not heat, since heating changes r.

## 4.3.3 Potential dividers

A **potential divider** is two or more components in series across a source, with the output taken across one of them. The same current flows through both, so p.d.s share in proportion to resistance:

V1/V2 = R1/R2 and Vout = R2/(R1 + R2) × Vin

where Vout is across R2. (Because I = Vin/(R1 + R2) and Vout = IR2.)

**Worked example 5 (fixed resistors).** A 15 V supply is connected across 2.0 kΩ (R1) and 3.0 kΩ (R2) in series. Vout across R2 = 3.0/5.0 × 15 = 9.0 V. The other 6.0 V is across R1, and 6.0/9.0 = 2.0/3.0 as the ratio rule says.

**Potentiometer (4.3.3(a)).** A potentiometer is a resistor with a sliding contact, used as a potential divider. The whole track is across the supply and the output is taken between the slider and one end. If the track is uniform, Vout is proportional to the length from that end, so Vout = (l/L) × Vin. With a 6.0 V supply and a slider 35.0 cm along a 100.0 cm track, Vout = 0.350 × 6.0 = 2.1 V. 

**Loaded dividers.** Anything connected across the output, such as a lamp, is in parallel with R2. That lowers the effective R2 and so lowers Vout. Use the parallel equivalent in the divider equation.

### 4.3.3(b) Variable components

- **Thermistor (NTC type):** the hotter it is, the lower its resistance.
- **LDR:** the brighter the light on it, the lower its resistance.

Across the sensor, Vout falls as its resistance falls. Across the fixed resistor, Vout rises as the sensor's resistance falls.

**Worked example 6 (thermistor).** A 6.0 V supply is across a 2.2 kΩ fixed resistor and a thermistor. Vout is taken across the fixed resistor. At 20 °C the thermistor is 4.7 kΩ. At a higher temperature it is 1.2 kΩ.

At 20 °C: Vout = 2.2/(2.2 + 4.7) × 6.0 = 1.9 V.
At the higher temperature: Vout = 2.2/(2.2 + 1.2) × 6.0 = 3.9 V.
Vout rises as the temperature rises.

**Worked example 7 (LDR).** A 9.0 V supply is across a 10 kΩ resistor and an LDR, with Vout across the LDR. In bright light the LDR is 2.0 kΩ: Vout = 2.0/12 × 9.0 = 1.5 V. In the dark it is 100 kΩ: Vout = 100/110 × 9.0 = 8.2 V. Vout is high in the dark.

### 4.3.3(c)(ii) Investigating dividers and sensing circuits (PAG4)

- Build the circuit from the diagram with a DC supply and check polarity.
- Measure Vout with a digital voltmeter and check that Vin stays constant.
- For a thermistor, vary temperature with a water bath and a thermometer, allowing time to reach equilibrium. For an LDR, vary distance from a lamp and note stray light.
- Plot Vout against the variable and compare with the divider equation.

## Common errors

- Adding 1/R values and forgetting to invert at the end.
- Using E instead of V as the p.d. across the load.
- Treating lost volts as constant: they rise with current.
- Taking Vout across the wrong component in a sensing circuit.
- Forgetting that a load across R2 lowers Vout.

## Official syllabus

OCR Advanced GCE in Physics A (H556), Version 3.0 (March 2026), first assessment 2017, published by OCR (Oxford Cambridge and RSA). Section 4.3: Electrical circuits.
