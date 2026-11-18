---
title: "Cambridge O Level Physics (5054): Electric circuits -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["o-levels"]
topic: "Electricity and magnetism"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["5054"]
syllabusSeries: "2026-2028"
order: 4.3
syllabusTopics:
  - qualification: "o-level"
    topic: "electricity-and-magnetism"
    subtopic: "electric-circuits"
description: "Quick recall for 5054 subtopic 4.3: components, series and parallel rules, combined resistance, sensors and potential dividers, with exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed notes for subtopic 4.3 Electric circuits in Cambridge O Level
Physics 5054. For full worked examples, use the
[Electric circuits study guide](/resources/cambridge-o-level-physics-5054-electric-circuits/);
for exam-style questions, use the
[Electric circuits practice questions](/resources/cambridge-o-level-physics-5054-electric-circuits-practice/).

## The rules

| Quantity | Series | Parallel |
|---|---|---|
| Current | Same everywhere | Branch currents add to the total (junction rule) |
| P.d. | Shares add to the supply p.d. | Same across every branch |
| Combined resistance | R = R₁ + R₂ + … | 1/R = 1/R₁ + 1/R₂, or R = R₁R₂ ÷ (R₁ + R₂) |
| Adding a resistor | Total R increases, current falls | Total R decreases, supply current rises |

Quick checks:

- Parallel pair: answer is smaller than the smaller resistor.
- Two equal resistors in parallel: half of one.
- Series p.d.s are shared in proportion to resistance.

## Calculation method for a combined circuit

1. Replace each parallel group with its combined resistance.
2. Add series resistances to find the total.
3. I supply = V supply ÷ R total.
4. P.d. across each series part = I × R.
5. P.d. across the parallel group = supply p.d. − series p.d.s.
6. Branch currents = parallel p.d. ÷ branch resistance.
7. Check: branch currents add to I supply; p.d.s add to V supply.

## Components to recognise and describe

| Component | What it does |
|---|---|
| Fixed resistor | Constant resistance |
| Variable resistor | Adjustable resistance to control current |
| NTC thermistor | Resistance falls as temperature rises |
| LDR | Resistance falls as light intensity rises |
| Diode | Current in one direction only |
| LED | Diode that emits light when forward-biased |
| Lamp | Lights; resistance rises when hot |
| Heater | Transfers energy by heating |
| Fuse | Melts if the current is too large |
| Relay | Small coil current switches a separate circuit |
| Magnetising coil | Produces a magnetic field |
| Transformer | Changes alternating p.d. |
| Motor | Turns |
| Generator | Produces e.m.f. from rotation |
| Oscilloscope | Displays p.d. against time |
| Ammeter / voltmeter | Series / parallel |
| Potential divider | Gives a fraction of the supply p.d. |

## Potential dividers

```
R₁ / R₂ = V₁ / V₂          V₁ = V supply × R₁ / (R₁ + R₂)
```

- The larger resistor takes the larger share of the p.d.
- **Variable potential divider:** a slider on a resistor across the
  supply gives an output from 0 to the full supply p.d.

## Sensor circuits

| Sensor | Condition change | Its resistance | Its share of p.d. | Fixed resistor's share |
|---|---|---|---|---|
| LDR | Gets darker | Rises | Rises | Falls |
| LDR | Gets brighter | Falls | Falls | Rises |
| Thermistor | Gets hotter | Falls | Falls | Rises |
| Thermistor | Gets colder | Rises | Rises | Falls |

Night light: output across the **LDR**. Overheat alarm: output across the
**fixed resistor** in series with the thermistor. Replacing the fixed
resistor with a variable one sets the switching point.

## Key terms

| Term | Meaning |
|---|---|
| Series circuit | Components connected one after another in a single loop |
| Parallel circuit | Components connected on separate branches between the same two points |
| Junction | A point where the current divides or combines |
| Combined (total) resistance | The single resistance that could replace an arrangement and draw the same current |
| Potential divider | Resistors in series used to provide a fraction of the supply p.d. |
| Input sensor | A component whose resistance changes with a physical condition, used to control a circuit |

## Exam traps

- In series, the current is **not** used up; it is the same before and
  after each component.
- When using 1/R = 1/R₁ + 1/R₂, remember the final step of taking the
  reciprocal.
- Adding a parallel branch **reduces** total resistance.
- An NTC thermistor's resistance **decreases** as temperature increases.
- A potential divider with output across the wrong component gives the
  opposite behaviour; reason through the table above.
- Ratios: if R₁ is three times R₂, then V₁ is three times V₂ — not three
  times the supply.
- Units: kΩ cancel in a ratio, so they need not be converted in R₁ / R₂.

## Self-test

1. State the rule for current in a series circuit.
2. Currents of 0.30 A and 0.45 A leave a junction. What current enters?
3. Find the combined resistance of 4.0 Ω and 12 Ω in parallel.
4. Find the combined resistance of 10 Ω and 10 Ω in parallel.
5. Resistors of 5.0 Ω and 15 Ω are in series on 8.0 V. Find the current.
6. In question 5, find the p.d. across the 15 Ω resistor.
7. What happens to the total resistance when a third resistor is added in
   parallel?
8. Describe the action of an LDR.
9. Describe the action of an NTC thermistor.
10. R₁ = 20 kΩ and R₂ = 30 kΩ form a potential divider. V₂ = 6.0 V. Find V₁.
11. A thermistor and fixed resistor form a potential divider. Across which
    should the output be taken for a circuit that responds when it gets
    hot?
12. What does a relay allow a small current to do?

**Answers**

1. The current is the same at every point.
2. 0.30 + 0.45 = **0.75 A**.
3. R = (4.0 × 12) ÷ 16 = **3.0 Ω**.
4. **5.0 Ω**.
5. I = 8.0 ÷ 20 = **0.40 A**.
6. V = 0.40 × 15 = **6.0 V**.
7. It decreases.
8. Its resistance decreases as the light intensity increases.
9. Its resistance decreases as the temperature increases.
10. V₁ = 6.0 × 20 ÷ 30 = **4.0 V**.
11. Across the fixed resistor (its share rises as the thermistor's
    resistance falls).
12. Switch on or off a separate circuit, which may carry a much larger
    current.

*Written against Cambridge O Level Physics 5054, 2026–2028 series.*
