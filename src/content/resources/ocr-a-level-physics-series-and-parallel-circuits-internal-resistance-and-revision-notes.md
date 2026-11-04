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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--05-series-parallel-circuit.webp" width="900" height="1060" alt="An 18 V supply drives a 6.0 ohm resistor in series with 12 ohm and 4.0 ohm resistors in parallel. The pair is 3.0 ohm, total 9.0 ohm, supply current 2.0 A; the branches carry 0.50 A and 1.5 A, with 6.0 V across both. Currents add at the junction and 18 V = 12 V + 6.0 V round the loop." loading="lazy">
  <figcaption>One mixed circuit solved to show both Kirchhoff laws.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--06-two-source-kirchhoff.webp" width="900" height="1100" alt="Two branches (12 V with 3.0 ohm, 8.0 V with 2.0 ohm) share a 2.0 ohm resistor. The junction law and two loop equations give I1 = 2.0 A, I2 = 1.0 A and 3.0 A through the shared resistor, with 6.0 V across it. Power from sources (32 W) equals power in the resistors (12 + 2 + 18 W)." loading="lazy">
  <figcaption>Solving a two-source circuit with Kirchhoff laws and checking energy.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--01-drift-velocity.webp" width="900" height="1260" alt="A wire carries free electrons that drift slowly against the conventional current. In time t the carriers in a slab of length vt cross a plane, so I = nAvq. For a 13 A copper cable the drift speed is 3.8 x 10^-4 m/s, and halving the diameter makes the drift speed four times larger for the same current." loading="lazy">
  <figcaption>Why a current of many amperes needs only a tiny drift speed: I = nAvq.</figcaption>
</figure>


### Determining r (PAG3)

1. Source in series with an ammeter and a variable resistor; voltmeter across the source terminals.
2. Vary R in steps, record I and V.
3. Open the switch between readings to avoid draining or heating.
4. Plot V against I, draw a line of best fit, and read E and r.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--03-resistivity-wire.webp" width="900" height="1255" alt="Three wires drawn to scale show that doubling the length doubles R (11.9 to 23.9 ohm) and doubling the diameter quarters it (2.98 ohm). A graph of R against L for a 0.32 mm wire has gradient 13.7 ohm per metre, so resistivity equals gradient times area, 1.1 x 10^-6 ohm metre." loading="lazy">
  <figcaption>How length and diameter change resistance, and how a graph gives resistivity.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--04-resistance-temperature.webp" width="900" height="1275" alt="In a metal, heating makes the ions vibrate more so electrons collide more and resistance rises. In an NTC thermistor or an LDR, heat or light frees many more carriers so resistance falls. The graph shows a metal rising gently and an NTC thermistor falling from 2.4 kohm at 25 C to 0.50 kohm at 65 C." loading="lazy">
  <figcaption>Collisions versus carrier number: why metals and NTC thermistors behave oppositely.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--07-internal-resistance.webp" width="900" height="1290" alt="A real cell is an e.m.f. E in series with internal resistance r. With E = 12.0 V, r = 0.50 ohm and R = 5.5 ohm, I = 2.0 A, the terminal p.d. is 11.0 V and 1.0 V is lost across r. A V-I graph of a cell is a straight line with gradient -r and intercept E: data give E = 1.50 V and r = 0.60 ohm, short-circuit current 2.5 A." loading="lazy">
  <figcaption>Where the e.m.f. goes: terminal p.d. plus lost volts, and how a V–I graph gives E and r.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--08-potential-divider-load.webp" width="900" height="1170" alt="Left: 12 V across 4.7 kohm and 3.3 kohm gives 4.95 V across the 3.3 kohm resistor. Right: a 3.3 kohm load in parallel makes 1.65 kohm, so the output falls to 3.12 V. Below: a potentiometer slider 35.0 cm along a 100.0 cm track on a 6.0 V supply gives 2.1 V." loading="lazy">
  <figcaption>A loaded divider lowers the output; a slider on a track gives a variable output.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--09-sensing-dividers.webp" width="900" height="1210" alt="With an NTC thermistor and a 2.2 kohm resistor on 9.0 V, the output across the fixed resistor rises from 4.95 V at 20 C to 7.07 V at 60 C while the output across the thermistor falls from 4.05 V to 1.93 V. With an LDR in series with 10 kohm on 6.0 V, the 10 kohm resistor has 5.45 V in bright light and 0.29 V in the dark." loading="lazy">
  <figcaption>Which component the output is across decides whether it rises or falls.</figcaption>
</figure>


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
