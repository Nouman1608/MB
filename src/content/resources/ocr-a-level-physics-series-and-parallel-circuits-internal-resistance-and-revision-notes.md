---
title: "OCR A Level Physics A: Series and parallel circuits, internal resistance and potential dividers (H556) -- Revision Notes"
seoTitle: "OCR A Level Physics Circuits Revision Notes (4.3)"
resourceType: "revision-notes"
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
description: "Condensed revision notes on Kirchhoff's laws, internal resistance, lost volts and potential dividers for OCR A Level Physics A (H556) section 4.3."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
Quick recall for section 4.3 (Electrical circuits) of the OCR Advanced GCE in Physics A specification (H556), Version 3.0 (March 2026), for first assessment in 2017. It covers 4.3.1 series and parallel circuits, 4.3.2 internal resistance and 4.3.3 potential dividers. For full explanations, read the [study guide](/resources/ocr-a-level-physics-series-and-parallel-circuits-internal-resistance-and/), then test yourself with the [practice set](/resources/ocr-a-level-physics-series-and-parallel-circuits-internal-resistance-and-practice/). Course pages: [OCR A Level Physics hub](/boards/ocr/a-level/physics/), the [printable checklist](/checklists/ocr/a-level/physics/) and the free [10-minute diagnostics](/diagnostics/).

## Key laws and formulae

| Item | Statement | Reference |
|---|---|---|
| Kirchhoff's first law | Total current in = total current out. Conservation of charge. | 4.3.1(b) |
| Kirchhoff's second law | Around a closed loop, sum of e.m.f. = sum of p.d. (sum of IR). Conservation of energy. | 4.3.1(a), (b) |
| Series | R = R1 + R2 + ... | 4.3.1(c) |
| Parallel | 1/R = 1/R1 + 1/R2 + ... | 4.3.1(d) |
| Two in parallel | R = R1R2/(R1 + R2) | 4.3.1(d) |
| Internal resistance | E = I(R + r) and E = V + Ir | 4.3.2(c)(i) |
| Lost volts | Ir, so V = E − Ir | 4.3.2(b) |
| Potential divider | Vout = R2/(R1 + R2) × Vin and V1/V2 = R1/R2 | 4.3.3(c)(i) |

## Series and parallel at a glance

| | Series | Parallel |
|---|---|---|
| Current | Same everywhere | Splits between branches |
| P.d. | Shares out | Same across each branch |
| Total resistance | Larger than any one resistor | Smaller than the smallest resistor |
| Add a resistor | Total R rises | Total R falls |

## Method: mixed circuit (4.3.1(e))

1. Collapse each parallel group into one equivalent resistor.
2. Add series parts to get the total resistance.
3. Supply current I = V/R (use the terminal p.d. if the source has internal resistance).
4. Find the p.d. across each section from I × R.
5. Divide a group's p.d. by each branch resistance to get branch currents.
6. Check that branch currents sum to the supply current.

**Reminder.** A 12 Ω and a 24 Ω resistor in parallel: 1/R = 1/12 + 1/24 = 3/24, so R = 8.0 Ω. Put 2.0 Ω in series: 10 Ω total. On a 15 V supply (no internal resistance) the current is 1.5 A, the p.d. across the pair is 1.5 × 8.0 = 12 V, and the branch currents are 1.0 A and 0.50 A.

## Method: more than one source (4.3.1(f))

1. Label a current in each branch and mark its direction.
2. Write the first-law equation at a junction.
3. Write the second-law equation for each independent loop: sum of e.m.f. = sum of IR, going round in one direction.
4. Solve the simultaneous equations. A negative answer means the true direction is opposite to your arrow.
5. Check with power: power from the sources should equal power dissipated.

In a single loop, sources in the same sense add and sources in opposite senses subtract.

**Reminder.** Cells of 9.0 V and 5.0 V oppose in a loop with a total of 8.0 Ω. Net e.m.f. = 4.0 V, so I = 4.0/8.0 = 0.50 A.

## Internal resistance (4.3.2)

- **E.m.f.:** energy transferred to each coulomb passing through the source, from chemical (or other) energy to electrical.
- **Internal resistance r:** the resistance of the source itself, in series with the external circuit.
- **Terminal p.d. V:** the p.d. across the source terminals while it supplies current.
- **Lost volts:** Ir, the p.d. across the internal resistance. They grow as the current grows.
- With no current drawn, V = E.
- Short-circuit current = E/r.

**Reminder.** E = 3.0 V, r = 1.2 Ω, load 4.8 Ω. I = 3.0/(4.8 + 1.2) = 0.50 A. V = 0.50 × 4.8 = 2.4 V. Lost volts = 0.50 × 1.2 = 0.60 V. Check: 2.4 + 0.60 = 3.0 V.

### Graph of V against I

| Feature | Meaning |
|---|---|
| Vertical intercept | E |
| Gradient | −r |
| Horizontal intercept | E/r (short-circuit current) |

### Determining r (PAG3)

1. Source in series with an ammeter and a variable resistor; voltmeter across the source terminals.
2. Vary R in steps, record I and V.
3. Open the switch between readings to avoid draining or heating.
4. Plot V against I, draw a line of best fit, and read E and r.

## Potential dividers (4.3.3)

- Two components in series across Vin; the output is across one of them.
- The same current flows through both, so the larger resistance takes the larger share of the p.d.
- Vout = R2/(R1 + R2) × Vin, with R2 the component the output is across.
- Ratio form: V1/V2 = R1/R2.

**Reminder.** 12 V across 3.0 kΩ (R1) and 9.0 kΩ (R2). Output across R1 is 12 × 3.0/12 = 3.0 V, and across R2 it is 9.0 V.

### Potentiometer (4.3.3(a))

A uniform resistive track across a supply with a sliding contact. Vout is proportional to the length from the end: Vout = (l/L) × Vin.

### Sensors (4.3.3(b))

| Component | Resistance change | If the output is across it | If the output is across the fixed resistor |
|---|---|---|---|
| NTC thermistor | Falls as temperature rises | Vout falls as temperature rises | Vout rises as temperature rises |
| LDR | Falls as light intensity rises | Vout falls as light rises | Vout rises as light rises |

**Loaded divider.** A load across R2 puts it in parallel, so effective R2 falls and Vout falls.

### Investigating dividers (PAG4)

1. Build from the diagram with a DC supply, checking polarity.
2. Measure Vout with a digital voltmeter and check that Vin stays constant.
3. Vary one factor only (temperature using a water bath, or distance from a lamp) and allow time to settle.
4. Compare readings with the divider equation.

## Must-know distinctions

- **E.m.f. and terminal p.d.:** E.m.f. is the energy per coulomb supplied by the source. Terminal p.d. is what remains after the lost volts.
- **Lost volts and p.d. across the load:** lost volts are across r only.
- **First law and second law:** charge conservation at a junction against energy conservation round a loop.
- **Series and parallel resistance:** add resistances against add reciprocals.

## Quick self-test

1. State what Kirchhoff's second law expresses in terms of energy.
2. Find the total resistance of 24 Ω, 8.0 Ω and 12 Ω in parallel.
3. A 6.0 V supply with negligible internal resistance is across 4.0 Ω in series with 8.0 Ω. Find the current and the p.d. across the 8.0 Ω resistor.
4. A cell of e.m.f. 1.5 V and internal resistance 0.30 Ω supplies 0.40 A. Find the lost volts and the terminal p.d.
5. What is the short-circuit current for a 9.0 V source of internal resistance 1.5 Ω?
6. A graph of V against I for a cell has a vertical intercept of 2.0 V and a gradient of −0.80 V A⁻¹. State E and r.
7. A 10 V supply is across 1.0 kΩ (R1) and 4.0 kΩ (R2) in series. Find Vout across R2.
8. An NTC thermistor and a fixed resistor form a divider, with Vout across the fixed resistor. How does Vout change as the temperature falls?
9. A 5.0 V supply is across a 50.0 cm potentiometer track. Find Vout when the slider is 18.0 cm from the zero end.
10. Why does connecting a load across R2 reduce Vout?

### Answers

1. The energy gained per coulomb from the sources equals the energy transferred per coulomb to components round a closed loop. Energy is conserved.
2. 1/R = 1/24 + 1/8 + 1/12 = (1 + 3 + 2)/24 = 6/24, so R = 4.0 Ω.
3. Total 12 Ω, I = 6.0/12 = 0.50 A, p.d. across 8.0 Ω = 4.0 V.
4. Lost volts = 0.40 × 0.30 = 0.12 V. V = 1.5 − 0.12 = 1.38 V.
5. 9.0/1.5 = 6.0 A.
6. E = 2.0 V, r = 0.80 Ω.
7. Vout = 4.0/5.0 × 10 = 8.0 V.
8. Thermistor resistance rises, so its share of the p.d. rises and Vout across the fixed resistor falls.
9. 5.0 × 18.0/50.0 = 1.8 V.
10. The load is in parallel with R2, so the combined resistance is smaller, and R2's share of the supply p.d. falls.

## Where marks are usually lost

- Writing 1/R = 1/R1 + 1/R2 and leaving the answer as 1/R.
- Using E where V is needed, for example in I = V/R for the load.
- Missing units, or leaving a resistance in kΩ in an equation that needs Ω.
- Not saying which component the output is taken across before reasoning about Vout.
- Describing a thermistor or LDR as having "less resistance" without saying what caused it.
- Explaining internal resistance without linking it to energy transferred in the source.
- Plotting V against I but reading r as the gradient without the negative sign.
- Ignoring a negative current from Kirchhoff equations instead of reading it as a reversed direction.

## Official syllabus

OCR Advanced GCE in Physics A (H556), Version 3.0 (March 2026), first assessment 2017, published by OCR (Oxford Cambridge and RSA). Section 4.3: Electrical circuits.
