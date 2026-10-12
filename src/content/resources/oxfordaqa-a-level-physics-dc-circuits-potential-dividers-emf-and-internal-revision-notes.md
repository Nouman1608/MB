---
title: "OxfordAQA International AS and A-level Physics: DC circuits, potential dividers, emf and internal resistance (9630) -- Revision Notes"
seoTitle: "OxfordAQA A-level Physics DC Circuits Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "DC circuits, potential dividers, emf and internal resistance"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "AS"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 106
syllabusTopics:
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "circuits-oxfordaqa-alevel"
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "potential-divider-oxfordaqa"
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "electromotive-force-and-internal-resistance-oxfordaqa"
description: "Condensed revision notes, formulae and a self-test on circuits, potential dividers and emf for OxfordAQA International AS and A-level Physics (9630)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes are aligned to the *OxfordAQA International AS and A-level Physics (9630)* specification, Version 4.4, sections 3.4.4, 3.4.5 and 3.4.6 (shared International AS and A-level content), for exams May/June 2020 onwards. The [study guide](/resources/oxfordaqa-a-level-physics-dc-circuits-potential-dividers-emf-and-internal/) explains each idea in full with longer worked examples. The [practice set](/resources/oxfordaqa-a-level-physics-dc-circuits-potential-dividers-emf-and-internal-practice/) lets you test yourself. Related pages: [course page](/boards/oxfordaqa/a-level/physics/), [checklist](/checklists/oxfordaqa/a-level/physics/) and [free diagnostics](/diagnostics/).

## Key formulae

| Quantity | Relationship |
|---|---|
| Series resistors | RT = R₁ + R₂ + R₃ + … |
| Parallel resistors | 1/RT = 1/R₁ + 1/R₂ + 1/R₃ + … |
| Energy | E = IVt |
| Power | P = IV = I²R = V²/R |
| Potential divider | Vout = Vin × R₂/(R₁ + R₂), output across R₂ |
| emf | ε = E/Q |
| Circuit with internal resistance | ε = I(R + r), so V = ε − Ir |
| Short-circuit current | ε/r |

Ammeters are ideal (zero resistance) and voltmeters ideal (infinite resistance) unless a question says otherwise.

## 3.4.4 Circuits

### Series versus parallel

| | Series | Parallel |
|---|---|---|
| Current | Same everywhere | Splits between branches |
| Pd | Splits (adds to the supply pd) | Same across each branch |
| Total resistance | Greater than the biggest single value | Below the smallest single value |
| Power form to use | I²R (current common) | V²/R (pd common) |

### Method for a mixed circuit

1. Reduce each parallel group to one resistance.
2. Add the series parts to get RT.
3. Find the supply current, I = V/RT.
4. Work back out: pd across each group, then branch currents.
5. Check: branch currents sum to the total, and pds around the loop sum to the supply pd.

### Cells

- In series: emfs add (same direction), internal resistances add.
- Identical cells in parallel: emf unchanged, internal resistance r/n for n cells.
- A parallel bank shares the current, so each cell supplies less and lasts longer.

### Conservation laws

- Charge: current into a junction equals current out.
- Energy: round any loop, total emf equals total pd across components. Energy supplied per coulomb equals energy transferred per coulomb.

### Worked reminder: cells with internal resistance

Two identical cells (2.0 V, 0.50 Ω each) drive a 3.5 Ω resistor. In series, ε = 4.0 V and r = 1.0 Ω, so I = 4.0/4.5 = 0.889 A. In parallel, ε = 2.0 V and r = 0.25 Ω, so I = 2.0/3.75 = 0.533 A.

### Quick reminders

- A 12 V, 3.0 A heater for 300 s: E = 3.0 × 12 × 300 = 1.08 × 10⁴ J.
- For two resistors in series, the larger resistance gets the larger share of the power. In parallel, the smaller resistance gets the larger share.

## 3.4.5 Potential divider

### Method in steps

1. Identify the resistor the output is taken across (call it R₂).
2. Vout = Vin × R₂/(R₁ + R₂).
3. If a load is connected across the output, replace R₂ with R₂ in parallel with the load, then recalculate.

### Variable and sensor dividers

| Component | What changes | Output across it | Output across the fixed resistor |
|---|---|---|---|
| Variable resistor | Set by the slider or knob | Rises as its resistance rises | Falls as its resistance rises |
| ntc thermistor | R falls as temperature rises | Falls as temperature rises | Rises as temperature rises |
| LDR | R falls as light level rises | Falls as light level rises | Rises as light level rises |

A variable resistor connected as a divider (the two ends across the supply, the output taken from the slider) gives any pd from 0 V up to the supply pd. A loaded divider gives a smaller output than an unloaded one, and the effect grows as the load resistance gets smaller.

**Worked reminder.** To get 2.0 V from a 6.0 V supply with a 2.0 kΩ resistor across the output: 2.0 = 6.0 × 2.0/(R₁ + 2.0), so R₁ + 2.0 = 6.0 and R₁ = 4.0 kΩ.

## 3.4.6 emf and internal resistance

### Key ideas

- emf: energy the source supplies per coulomb of charge it drives round the circuit, ε = E/Q.
- Terminal pd V = ε − Ir. The term Ir is the lost volts.
- With no current, V = ε. With more current, V is lower.
- Power: total εI, delivered VI, wasted inside I²r.
- A source with larger r loses more energy internally for the same current.
- Efficiency of the source: VI divided by εI, which equals V/ε, or R/(R + r).
- Largest current from a source is the short-circuit value, ε/r, which is why a real battery heats up if shorted.

### Method for internal-resistance problems

1. Write ε = I(R + r).
2. Substitute known values and solve for the unknown (I, R or r).
3. Find V = IR or V = ε − Ir to check consistency.

**Worked reminder.** ε = 1.80 V, r = 0.60 Ω, R = 2.4 Ω. I = 1.80/3.0 = 0.60 A. V = 0.60 × 2.4 = 1.44 V. Lost volts = 0.36 V.

### Required practical 3

- Arrangement: cell, variable resistor, ammeter and switch in series; voltmeter across the cell.
- Take at least six readings of V and I, opening the switch between readings.
- Plot V against I. Gradient = −r. Vertical intercept = ε.
- Use a large triangle for the gradient. Read the intercept from the line.
- Check for a systematic error: a voltmeter that does not read zero, or contact resistance in leads.

## Must-know distinctions

- emf versus terminal pd: emf is energy per coulomb supplied by the source; terminal pd is the pd across the terminals when current flows, and it is lower.
- Total resistance versus branch resistance: parallel lowers RT.
- Series cells versus parallel cells: series raises emf, parallel does not.
- Divider unloaded versus loaded: the load lowers the output.
- Rheostat versus divider: a variable resistor in series cannot take the load pd to zero; a divider can.

## Quick self-test

1. Find the resistance of 6.0 Ω, 12 Ω and 4.0 Ω resistors in parallel.
2. A 6.0 V supply drives 2.5 A for 40 s through a resistor. How much energy is transferred?
3. What power is dissipated in a 5.0 Ω resistor carrying 0.60 A?
4. A 100 Ω resistor is rated at 0.25 W. What is the largest pd across it, and the largest current?
5. A 9.0 V supply is across 3.0 kΩ in series with 6.0 kΩ. What is the pd across the 6.0 kΩ resistor?
6. In a divider with an ntc thermistor and a fixed resistor, the output is taken across the thermistor. What happens to the output as the temperature rises?
7. A 6.0 V source drives 1.2 A through a 4.0 Ω resistor. What is its internal resistance?
8. What is the terminal pd in question 7?
9. A 1.2 V cell has internal resistance 0.15 Ω. What is the short-circuit current?
10. Two identical 1.2 V cells, each of internal resistance 0.50 Ω, are in parallel. State the emf and internal resistance of the pair.
11. A V against I graph for a cell is a straight line from 1.60 V at zero current to 1.18 V at 0.30 A. State the emf and internal resistance.
12. Define the emf of a cell.

### Answers

1. 1/R = 1/6 + 1/12 + 1/4 = 6/12 = 0.5, so **2.0 Ω**.
2. E = IVt = 2.5 × 6.0 × 40 = **600 J**.
3. P = I²R = 0.60² × 5.0 = **1.8 W**.
4. V = √(PR) = √(0.25 × 100) = **5.0 V**; I = √(P/R) = **0.050 A**.
5. 9.0 × 6.0/9.0 = **6.0 V**.
6. It **falls**, because the thermistor's resistance falls and so does its share of the total.
7. ε/I = 6.0/1.2 = 5.0 Ω total, so r = 5.0 − 4.0 = **1.0 Ω**.
8. V = IR = 1.2 × 4.0 = **4.8 V** (check: 6.0 − 1.2 × 1.0 = 4.8 V).
9. I = ε/r = 1.2/0.15 = **8.0 A**.
10. emf **1.2 V**, internal resistance 0.50/2 = **0.25 Ω**.
11. ε = **1.60 V**; gradient = (1.18 − 1.60)/0.30 = −1.4 V A⁻¹, so r = **1.4 Ω**.
12. The energy the cell supplies per coulomb of charge it drives round the circuit, ε = E/Q.

## Where marks are usually lost

- Leaving 1/R as the answer without inverting it.
- Using V²/R with a pd taken from the wrong place in the circuit.
- Calling the terminal pd "the emf" in a circuit that carries a current.
- Forgetting to convert minutes to seconds or kΩ to Ω before using E = IVt.
- Ignoring the load on a divider when the question says one is connected.
- Writing that the "resistance" of a thermistor rises with temperature when the question concerns an ntc thermistor.
- Giving r as a negative number from the gradient, or using ε as the final data point.
- Not saying "per coulomb" or "per unit charge" when asked for the meaning of emf.
- Giving a final answer to far more significant figures than the data supports.

## Official syllabus

*OxfordAQA International AS and A-level Physics (9630)*, Version 4.4, for International AS and A-level exams May/June 2020 onwards, published by OxfordAQA. Sections 3.4.4, 3.4.5 and 3.4.6.
