---
title: "AS Physics: D.C. Circuits — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "D.C. circuits"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 10.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "as-dc-circuits"
    subtopic: "as-practical-circuits"
  - qualification: "a-level"
    topic: "as-dc-circuits"
    subtopic: "as-kirchhoffs-laws"
  - qualification: "a-level"
    topic: "as-dc-circuits"
    subtopic: "as-potential-dividers"
description: "Condensed recall notes on Kirchhoff laws, resistance, e.m.f. and internal resistance, and potential dividers for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[D.C. Circuits study guide](/resources/as-physics-dc-circuits/).

## Core relationships

```
I = Q/t        V = W/Q        R = V/I        P = VI = I^2 R = V^2/R
series:    R = R1 + R2 + ...
parallel:  1/R = 1/R1 + 1/R2 + ...
```

**Adding a resistor in parallel always *decreases* total resistance**, because it provides an extra path for current. That is counter-intuitive and regularly examined.

**Worked example.** A 6.0 Ω and a 3.0 Ω resistor in parallel:

```
1/R = 1/6.0 + 1/3.0 = 1/6.0 + 2/6.0 = 3/6.0
R = 2.0 ohm
```

Notice the combined resistance (2.0 Ω) is smaller than either individual resistor — a useful check on any parallel calculation.

## Kirchhoff's laws

- **First law (junction):** the sum of currents into a junction equals the sum out — a statement of **conservation of charge**.
- **Second law (loop):** around any closed loop, the sum of e.m.f.s equals the sum of p.d.s — a statement of **conservation of energy**.

Naming the conservation law each expresses is worth a mark on its own.

## E.m.f. and internal resistance

```
E = I(R + r)  =  V + Ir
terminal p.d.  V = E - Ir
```

**E.m.f.** is the energy transferred *to* each unit charge by the source; **p.d.** is energy transferred *from* each unit charge in a component. Both are measured in volts, and confusing them is the classic definition error.

**Terminal p.d. falls as current increases**, because more energy is dissipated inside the source by its internal resistance. This is why a car's headlights dim when the starter motor draws a large current.

Plotting V against I gives a straight line: **gradient = −r**, **intercept = E**. Maximum power is delivered to the load when `R = r`.

**Worked example.** A cell of e.m.f. 1.50 V and internal resistance 0.80 Ω is connected to an external resistor of 4.20 Ω:

```
I = E / (R + r) = 1.50 / (4.20 + 0.80) = 0.30 A
V = IR = 0.30 x 4.20 = 1.26 V
P (inside cell) = I^2 r = 0.30^2 x 0.80 = 0.072 W
```

If the external resistance is then reduced, the current increases, so the "lost volts" Ir inside the cell increases and the terminal p.d. falls further below the e.m.f.

## Potential dividers

```
V_out = V_in x R2 / (R1 + R2)
```

The output is a **fraction of the supply, set by the ratio of resistances**. Replacing one resistor with a **thermistor** (resistance falls as temperature rises) or an **LDR** (resistance falls as light increases) makes the output respond to a physical condition — the basis of every sensing circuit on the syllabus.

To decide which way the output moves, ask what happens to that component's share of the total resistance.

**Worked example.** A 12 V supply is connected across a fixed 2.0 kΩ resistor in series with a thermistor. At 20 °C the thermistor has resistance 6.0 kΩ, and the output is taken across the thermistor:

```
V_out = 12 x 6.0 / (2.0 + 6.0) = 9.0 V
```

If the temperature rises, the thermistor's resistance falls, so it takes a smaller share of the total resistance and the output p.d. falls below 9.0 V.

A potential divider also underlies the **potentiometer**, used to compare potential differences via a **null method**: a galvanometer detects when the current is zero (the balanced condition), rather than reading a current directly. Because no current flows at balance, this avoids the systematic error of the meter itself disturbing the circuit — a more precise technique than a direct voltmeter reading in many cases.

## Meters

An **ideal ammeter** has zero resistance and is connected in **series**; an **ideal voltmeter** has infinite resistance and is connected in **parallel**. A real voltmeter draws a small current, which slightly reduces the p.d. it is measuring — a systematic error worth mentioning.

## Exam traps

- Saying parallel resistors increase total resistance.
- Confusing e.m.f. with p.d.
- Forgetting internal resistance when a question mentions a "real" cell or battery.
- Using the wrong resistance in a potential divider ratio.
- Connecting a voltmeter in series in a circuit diagram.
- Adding resistances directly in parallel (writing R = R1 + R2 instead of using reciprocals).
- Omitting a battery's e.m.f. from a Kirchhoff's-second-law loop equation.

## Self-test

1. What conservation law does each of Kirchhoff's laws express?
2. Why does terminal p.d. fall as current increases?
3. What do the gradient and intercept of a V–I graph give?
4. Why does adding a parallel resistor reduce total resistance?
5. What happens to the output of a potential divider when an LDR in the lower position is illuminated?
6. Why is a null method (as in a potentiometer) more precise than a direct voltmeter reading?
7. A 12 V supply drives a fixed 2.0 kΩ resistor in series with a thermistor of resistance 6.0 kΩ, with the output taken across the thermistor. Calculate the output p.d., and state what happens to it if the temperature falls.

Related: [D.C. Circuits practice questions](/resources/as-physics-dc-circuits-practice/) for further worked examples in this style.

**Answers:** 1. The first law expresses conservation of charge; the second expresses conservation of energy. 2. More energy is dissipated within the source itself by its internal resistance, so less is available per unit charge at the terminals. 3. Gradient = −r (internal resistance); intercept = E (e.m.f.). 4. It provides an additional path for current, so more total current flows for the same p.d. 5. The LDR's resistance falls, so its share of the total resistance falls and the output p.d. across it decreases. 6. At balance, zero current flows through the galvanometer, so the measuring instrument itself draws no current and does not disturb the circuit being measured, unlike a real voltmeter which always draws a small current. 7. V_out = 12 x 6.0/(2.0+6.0) = 9.0 V; if the temperature falls, the thermistor's resistance rises, so it takes a larger share of the total resistance and the output p.d. rises above 9.0 V.
