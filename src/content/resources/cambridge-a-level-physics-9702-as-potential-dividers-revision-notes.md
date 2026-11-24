---
title: "Cambridge A Level Physics (9702): Potential dividers -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "D.C. circuits"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 10.3
syllabusTopics:
  - qualification: "a-level"
    topic: "as-dc-circuits"
    subtopic: "as-potential-dividers"
description: "Revision notes for Cambridge AS Physics 9702 10.3 Potential dividers: divider equation, loading, potentiometer balance, null methods, sensors and a self-test."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 10.3 of Cambridge International AS & A Level Physics 9702 (2025–2027) covers the principle of the potential divider, the potentiometer for comparing p.d.s, the galvanometer in null methods, and thermistor and LDR sensing circuits. These notes are for quick recall. For fuller explanations and annotated examples see the [Potential dividers study guide](/resources/cambridge-a-level-physics-9702-as-potential-dividers/); for exam-style questions use the [Potential dividers practice questions](/resources/cambridge-a-level-physics-9702-as-potential-dividers-practice/).

## Divider equation

```
V_out = V_in × R₂ / (R₁ + R₂)      (output across R₂)
V₁ / V₂ = R₁ / R₂                   (same current in both)
```

- Assumes no current is drawn from the output.
- Output resistor goes on top of the fraction.
- Quick example: 6.0 V across 3.3 kΩ and 1.2 kΩ; output across 1.2 kΩ = 6.0 × 1.2 ÷ 4.5 = 1.6 V.

## Variable output

- Three-terminal potentiometer (slider on a resistor): output from **0 to V_in**.
- Variable resistor in series with a component: cannot reduce the component's p.d. to zero.

## Loading

- Load R_L across R₂ → R₂ ∥ R_L < R₂ → V_out falls.
- Keep R_L ≫ R₂ for the output to stay near its unloaded value.

## Potentiometer wire for comparing p.d.s

```
p.d. along uniform wire ∝ length
at balance: ε_test = (p.d. per unit length) × l
comparing:  ε₁ / ε₂ = l₁ / l₂
```

**Setting up:**

- Driver cell across a uniform wire.
- Test cell: positive terminal to the same end as the driver's positive terminal.
- Galvanometer between the test cell and the sliding contact (jockey).
- Find the point of zero deflection.

**No balance point if:**

- the p.d. across the whole wire is less than the test e.m.f., or
- the test cell is connected the wrong way round.

**Calibrating:** balance a cell of known e.m.f. first to find the p.d. per unit length, then balance the unknown with the driver unchanged.

**Series resistor with the driver:** reduces the p.d. across the wire so that balance lengths are long, giving smaller percentage uncertainty.

## Galvanometer and null methods

- **Null method**: adjust the circuit until a detector shows zero, rather than reading a meter's value.
- At balance, **no current flows in the test cell**, so no Ir and the potentiometer gives the **e.m.f.**, not the terminal p.d.
- The galvanometer only needs to be **sensitive**, not calibrated.
- Protective high resistance in series with the galvanometer while searching; removed for the final balance.
- A potentiometer can also find a cell's terminal p.d. when it supplies a known resistor, so ε and r can be found from two balance lengths.

## Sensor circuits

| Sensor | Resistance falls when | Output **rises** when the condition increases if taken across |
|---|---|---|
| Thermistor (NTC) | Temperature rises | The fixed resistor |
| LDR | Light intensity rises | The fixed resistor |

- Output across the sensor moves the **opposite** way.
- Dark-activated (lamp turns on at night): output across the LDR.
- Heat-activated alarm: output across the fixed resistor in series with the thermistor.
- Cold-activated (frost warning): output across the thermistor.
- Best sensitivity: fixed resistor similar to the sensor's resistance over the range used.

## Key terms

| Term | Meaning |
|---|---|
| Potential divider | Resistors in series across a supply, giving a fraction of its p.d. |
| Potentiometer | Uniform resistance (wire or track) with a sliding contact; p.d. ∝ length |
| Driver cell | Supplies the current through the potentiometer wire |
| Balance point | Position of the sliding contact where the galvanometer reads zero |
| Galvanometer | Sensitive meter for detecting very small currents |
| Null method | Measurement made by adjusting for zero reading on a detector |
| Loading | Fall in output p.d. when a load is connected |

## Exam traps

- Putting R₁ on top of the fraction when the output is across R₂.
- Ignoring the effect of a voltmeter or load across the output.
- Claiming the galvanometer measures the p.d.
- Saying a potentiometer measures terminal p.d. of an isolated test cell (at balance it gives the e.m.f.).
- Forgetting a balance needs the wire's total p.d. to exceed the test p.d.
- Reversing the response of a sensor circuit.
- Letting the driver cell change between two balance measurements.

## Self-test

1. Why are p.d.s in a divider in the ratio of the resistances?
2. 9.0 V is across 1.0 kΩ (top) and 2.0 kΩ (bottom). Find the p.d. across the bottom resistor.
3. A load equal to R₂ is connected across R₂ in question 2. What is the new output?
4. What is meant by a balance point?
5. Why does a potentiometer measure e.m.f. rather than terminal p.d.?
6. Why does the galvanometer not need calibrating?
7. State two reasons why no balance point might be found.
8. Cell A balances at 64.0 cm and cell B at 48.0 cm. A has e.m.f. 1.60 V. Find B's e.m.f.
9. In a thermistor divider with output across the thermistor, what happens to the output as temperature rises?
10. Where should the output be taken for a light that switches on in the dark?
11. Why is a protective resistor used with the galvanometer at first?
12. Why is a long balance length desirable?

**Answers:** 1. The same current flows through both, so V = IR is proportional to R. 2. 9.0 × 2.0 ÷ 3.0 = 6.0 V. 3. Lower part becomes 1.0 kΩ, so V_out = 9.0 × 1.0 ÷ 2.0 = 4.5 V. 4. The point on the wire where the galvanometer shows zero current. 5. At balance no current flows in the test cell, so there is no p.d. across its internal resistance. 6. It only has to indicate zero current, not measure a value. 7. The p.d. across the whole wire is less than the p.d. being measured; the test cell is connected with its terminals the wrong way round. 8. 1.60 × 48.0 ÷ 64.0 = 1.20 V. 9. The thermistor's resistance falls, so the output across it falls. 10. Across the LDR. 11. To protect the galvanometer from a large current when the contact is far from balance. 12. A given uncertainty in locating the balance point is a smaller percentage of a long length.

## More resources on this topic

- [D.C. circuits revision notes](/resources/as-physics-dc-circuits-revision-notes/) — the whole of Topic 10
- [Kirchhoff's laws revision notes](/resources/cambridge-a-level-physics-9702-as-kirchhoffs-laws-revision-notes/) — subtopic 10.2
- [Potential dividers practice questions](/resources/cambridge-a-level-physics-9702-as-potential-dividers-practice/)
