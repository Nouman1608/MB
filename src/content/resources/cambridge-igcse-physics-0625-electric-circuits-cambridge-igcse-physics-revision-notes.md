---
title: "Cambridge IGCSE Physics (0625): Electric circuits -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["igcse"]
topic: "Electricity and magnetism"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0625"]
syllabusSeries: "For examination in 2026, 2027 and 2028"
order: 4.3
syllabusTopics:
  - qualification: "igcse"
    topic: "electricity-and-magnetism-cambridge-igcse-physics"
    subtopic: "electric-circuits-cambridge-igcse-physics"
description: "Revision notes for Cambridge IGCSE Physics 0625 section 4.3: components, series and parallel rules, combined resistance, potential dividers and a self-test."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-17
featured: false
---

These notes condense section 4.3 Electric circuits of the Cambridge IGCSE Physics 0625 syllabus (for examination in 2026, 2027 and 2028). Lines marked **Extended only** are Supplement content, examined on Papers 2 and 4. For explanations and worked examples, read the [electric circuits study guide](/resources/cambridge-igcse-physics-0625-electric-circuits-cambridge-igcse-physics/).

## Components and how they behave (4.3.1)

| Component | Behaviour in a circuit |
|---|---|
| Cell / battery | Source of e.m.f.; cells in series add |
| Power supply (a.c. or d.c.) | Laboratory source |
| Generator | Source of e.m.f. from motion |
| Switch | Open: no current; closed: current flows |
| Fixed resistor | Constant resistance |
| Variable resistor | Adjustable resistance; varies the current |
| Heater | Transfers energy by heating |
| NTC thermistor | Resistance falls as temperature rises |
| LDR | Resistance falls as light intensity rises |
| Lamp | Lights when current flows |
| Motor / bell | Turns / rings when current flows |
| Ammeter / voltmeter | Series / parallel |
| Magnetising coil | Becomes an electromagnet with current |
| Transformer | Changes an alternating p.d. |
| Fuse | Melts if current exceeds its rating |
| Relay | Coil current operates a switch in a second circuit |
| Potential divider | Supplies a variable fraction of the supply p.d. |
| Diode (Extended only) | Conducts one way only |
| LED (Extended only) | Diode that emits light when it conducts |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-physics-0625-electricity-and-magnetism--02-circuit-symbols.webp" width="900" height="986" alt="Fourteen standard circuit symbols with names: cell, battery, open switch, fixed resistor, variable resistor, lamp, ammeter, voltmeter, fuse, thermistor, LDR, motor, and (Extended) diode and LED." loading="lazy">
  <figcaption>The standard symbols to draw and recognise; diode and LED are Extended only.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-physics-0625-electric-circuits-cambridge-igcse-physics--01-diode-thermistor-ldr.webp" width="900" height="660" alt="Two circuits with a cell, a diode and a lamp. With the diode pointing the way the current flows the lamp is on; reversed, no current flows and the lamp stays off. Below, an NTC thermistor's resistance decreases as temperature increases and an LDR's resistance decreases as light intensity increases." loading="lazy">
  <figcaption>A diode conducts one way only; thermistor and LDR resistance both fall as temperature or light increases.</figcaption>
</figure>

## Series rules (4.3.2)

- Current is the **same at every point**.
- R_total = R₁ + R₂ + ...
- Cells facing the same way: e.m.f.s add. A reversed cell: subtract it.
- Larger resistance → larger p.d. (constant current).
- **Extended only:** p.d.s across the components add up to the supply p.d.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-physics-0625-electric-circuits-cambridge-igcse-physics--02-series-worked-example.webp" width="900" height="686" alt="A 12 V battery in series with 10 Ω, 20 Ω and 30 Ω resistors and an ammeter. The current is 0.20 A everywhere and the p.d.s are 2.0 V, 4.0 V and 6.0 V, which add up to 12 V." loading="lazy">
  <figcaption>In series the current is the same everywhere and the largest resistor takes the largest p.d.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-physics-0625-electric-circuits-cambridge-igcse-physics--03-reversed-cell.webp" width="900" height="470" alt="Three 1.5 V cells in a row with the middle one reversed. The two cells facing the same way give +1.5 V each and the reversed one −1.5 V, so the total e.m.f. is 1.5 V." loading="lazy">
  <figcaption>A reversed cell subtracts its e.m.f. from the total.</figcaption>
</figure>

## Parallel rules (4.3.2)

- Source current is **larger** than the current in any one branch.
- Two resistors in parallel: combined resistance **less than either**.
- **Extended only:** current into a junction = current out (charge is conserved: not used up or stored).
- **Extended only:** every branch has the **same p.d.**
- **Extended only:** 1/R = 1/R₁ + 1/R₂; remember to invert at the end.

**Advantages of parallel lighting**

1. Each lamp receives the full supply p.d.
2. Lamps can be switched independently.
3. If one lamp fails, the rest stay lit.

## Method in steps: mixed circuit (Extended only)

1. Combine any parallel pair into one resistance.
2. Add series resistances for the total.
3. Supply current I = supply p.d. ÷ total R.
4. p.d. across each series part = I × R.
5. Branch currents = p.d. across the pair ÷ each branch resistance.
6. Check: branch currents add to I; p.d.s add to the supply.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-physics-0625-electric-circuits-cambridge-igcse-physics--04-parallel-worked-example.webp" width="900" height="578" alt="A 12 V supply drives 1.5 A through a 4.0 Ω resistor, which takes 6.0 V. The remaining 6.0 V is across both parallel branches, so 1.0 A flows through 6.0 Ω and 0.50 A through 12 Ω; the pair is equivalent to 4.0 Ω and the total is 8.0 Ω." loading="lazy">
  <figcaption>Find the pair's resistance, then the supply current, then share out the p.d. and the current.</figcaption>
</figure>

## Potential dividers (4.3.3)

- Core: for a constant current, p.d. increases as resistance increases.
- **Extended only:** R₁ / R₂ = V₁ / V₂.
- **Extended only:** variable potential divider with output across R₂:

| R₂ is | Change | Output V₂ |
|---|---|---|
| NTC thermistor | hotter | falls |
| NTC thermistor | colder | rises |
| LDR | darker | rises |
| LDR | brighter | falls |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-physics-0625-electric-circuits-cambridge-igcse-physics--05-potential-divider.webp" width="900" height="730" alt="Left: a 6.0 V supply across 1.2 kΩ and 3.6 kΩ in series; the ratio 1 : 3 gives 1.5 V and 4.5 V. Right: with an LDR in place of the lower resistor, getting darker raises the LDR's resistance, so it takes a larger share of the supply p.d. and the output across it rises." loading="lazy">
  <figcaption>The larger resistance takes the larger share of the supply p.d.: R₁/R₂ = V₁/V₂.</figcaption>
</figure>

## Key terms

| Term | Meaning |
|---|---|
| Series | Components in one loop, one after another |
| Parallel | Components on separate branches between the same two points |
| Junction | Point where the current splits or joins |
| Combined e.m.f. | Total e.m.f. of sources connected in series |
| Potential divider | Two resistances in series sharing a supply p.d. |
| NTC thermistor | Resistance falls as temperature rises |
| LDR | Resistance falls as light intensity rises |

## Exam traps

- Current is not used up; it is the same before and after a series lamp.
- Parallel combination must be **smaller** than the smallest branch resistor.
- Thermistor and LDR resistances **fall** as temperature and light rise.
- A diode drawn against the current blocks it completely.
- Saying "parallel lamps are brighter" without saying each gets the full p.d.
- In R₁ / R₂ = V₁ / V₂, keep each p.d. with its own resistor.

## Self-test

1. Three 1.5 V cells are in series, all facing the same way. What is the combined e.m.f.?
2. One of those cells is turned round. What is the new e.m.f.?
3. Find the total resistance of 15 Ω and 25 Ω in series.
4. A current of 0.30 A flows into a parallel circuit with two branches. One branch carries 0.10 A. What does the other carry?
5. State two advantages of connecting house lamps in parallel.
6. What happens to the resistance of an NTC thermistor as it is heated?
7. A 2.0 Ω and a 6.0 Ω resistor are in series with a 4.0 V supply. Which has the larger p.d. across it?
8. *(Extended)* Find the combined resistance of 20 Ω and 30 Ω in parallel.
9. *(Extended)* Find the combined resistance of 10 Ω and 40 Ω in parallel.
10. *(Extended)* A 9.0 V supply is across a 6.0 kΩ resistor and an LDR in series. The LDR is 2.0 kΩ in daylight and 18 kΩ in the dark. Find the p.d. across the LDR in each case.
11. *(Extended)* Explain why current into a junction equals current out.
12. *(Extended)* A diode is connected in series with a lamp and a cell, pointing against the conventional current. What happens?

### Answers

1. **4.5 V**.
2. 1.5 + 1.5 − 1.5 = **1.5 V**.
3. **40 Ω**.
4. **0.20 A**.
5. Any two: each lamp gets the full p.d.; lamps can be switched separately; one failing leaves the others lit.
6. It **decreases**.
7. The **6.0 Ω** resistor (larger resistance, same current).
8. 1/R = 1/20 + 1/30 = 5/60, so R = **12 Ω**.
9. 1/R = 1/10 + 1/40 = 5/40, so R = **8.0 Ω**.
10. Daylight: 9.0 × 2.0/8.0 = **2.25 V** (2.3 V); dark: 9.0 × 18/24 = **6.75 V** (6.8 V).
11. **Charge** is not used up or stored at a junction, so the rate of flow in equals the rate out.
12. The diode has a very high resistance in reverse, so **no current** flows and the lamp stays off.

## Official syllabus

Cambridge International, *Cambridge IGCSE Physics 0625 syllabus for examination in 2026, 2027 and 2028*, Topic 4 Electricity and magnetism, section 4.3 Electric circuits. Test yourself with the [electric circuits practice questions](/resources/cambridge-igcse-physics-0625-electric-circuits-cambridge-igcse-physics-practice/).
