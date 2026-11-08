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
reviewer: "hassan"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
reviewedDate: 2026-09-29
publishedDate: 2026-08-22
updatedDate: 2026-09-27
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[D.C. Circuits study guide](/resources/as-physics-dc-circuits/).

## Circuit symbols

You must recall and use the 27 symbols in the syllabus's circuit-symbol table, and draw and interpret diagrams that use them. The full list, each described in words, is in the [study guide](/resources/as-physics-dc-circuits/#circuit-symbols). The ones most often mixed up:

- **Cell** — two parallel lines of *unequal* length (long line = positive). **Capacitor** — two parallel lines of *equal* length.
- **Variable resistor** — arrow *through* the rectangle. **Potentiometer** — arrow *onto* the rectangle from a third lead. **Thermistor** — diagonal line with a horizontal tail, no arrowhead.
- **LDR** — arrows pointing *in*. **LED** — diode symbol with arrows pointing *out*.
- **Motor** — M in a circle. **Generator** — G in a square. **Ammeter**, **voltmeter**, **galvanometer** — A, V or an upward arrow in a circle.
- **Junction** — a solid dot where wires are joined.

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--03-resistivity-wire.webp" width="900" height="1255" alt="Three wires drawn to scale show that doubling the length doubles R (11.9 to 23.9 ohm) and doubling the diameter quarters it (2.98 ohm). A graph of R against L for a 0.32 mm wire has gradient 13.7 ohm per metre, so resistivity equals gradient times area, 1.1 x 10^-6 ohm metre." loading="lazy">
  <figcaption>How length and diameter change resistance, and how a graph gives resistivity.</figcaption>
</figure>


## Kirchhoff's laws

- **First law (junction):** the sum of currents into a junction equals the sum out — a statement of **conservation of charge**.
- **Second law (loop):** around any closed loop, the sum of e.m.f.s equals the sum of p.d.s — a statement of **conservation of energy**.

Naming the conservation law each expresses is worth a mark on its own.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--05-series-parallel-circuit.webp" width="900" height="1060" alt="An 18 V supply drives a 6.0 ohm resistor in series with 12 ohm and 4.0 ohm resistors in parallel. The pair is 3.0 ohm, total 9.0 ohm, supply current 2.0 A; the branches carry 0.50 A and 1.5 A, with 6.0 V across both. Currents add at the junction and 18 V = 12 V + 6.0 V round the loop." loading="lazy">
  <figcaption>One mixed circuit solved to show both Kirchhoff laws.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--06-two-source-kirchhoff.webp" width="900" height="1100" alt="Two branches (12 V with 3.0 ohm, 8.0 V with 2.0 ohm) share a 2.0 ohm resistor. The junction law and two loop equations give I1 = 2.0 A, I2 = 1.0 A and 3.0 A through the shared resistor, with 6.0 V across it. Power from sources (32 W) equals power in the resistors (12 + 2 + 18 W)." loading="lazy">
  <figcaption>Solving a two-source circuit with Kirchhoff laws and checking energy.</figcaption>
</figure>


## E.m.f. and internal resistance

```
E = I(R + r)  =  V + Ir
discharging:  V = E - Ir
charging:     V = E + Ir
```

**E.m.f.** is the energy transferred *to* each unit charge by the source; **p.d.** is energy transferred *from* each unit charge in a component. Both are measured in volts, and confusing them is the classic definition error.

**While discharging** (driving current through an external circuit), **terminal p.d. falls as current increases**, because more energy is dissipated inside the source by its internal resistance. This is why a car's headlights dim when the starter motor draws a large current. **While being charged** (current driven into the source by another, higher-voltage source), the opposite holds: the **applied terminal voltage exceeds the e.m.f. by Ir**, since some of the applied energy is used to overcome the source's own internal resistance.

Plotting V against I gives a straight line: **gradient = −r**, **intercept = E**. Maximum power is delivered to the load when `R = r`.

**Worked example.** A cell of e.m.f. 1.50 V and internal resistance 0.80 Ω is connected to an external resistor of 4.20 Ω:

```
I = E / (R + r) = 1.50 / (4.20 + 0.80) = 0.30 A
V = IR = 0.30 x 4.20 = 1.26 V
P (inside cell) = I^2 r = 0.30^2 x 0.80 = 0.072 W
```

If the external resistance is then reduced, the current increases, so the "lost volts" Ir inside the cell increases and the terminal p.d. falls further below the e.m.f.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--04-resistance-temperature.webp" width="900" height="1275" alt="In a metal, heating makes the ions vibrate more so electrons collide more and resistance rises. In an NTC thermistor or an LDR, heat or light frees many more carriers so resistance falls. The graph shows a metal rising gently and an NTC thermistor falling from 2.4 kohm at 25 C to 0.50 kohm at 65 C." loading="lazy">
  <figcaption>Collisions versus carrier number: why metals and NTC thermistors behave oppositely.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--07-internal-resistance.webp" width="900" height="1290" alt="A real cell is an e.m.f. E in series with internal resistance r. With E = 12.0 V, r = 0.50 ohm and R = 5.5 ohm, I = 2.0 A, the terminal p.d. is 11.0 V and 1.0 V is lost across r. A V-I graph of a cell is a straight line with gradient -r and intercept E: data give E = 1.50 V and r = 0.60 ohm, short-circuit current 2.5 A." loading="lazy">
  <figcaption>Where the e.m.f. goes: terminal p.d. plus lost volts, and how a V–I graph gives E and r.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--08-potential-divider-load.webp" width="900" height="1170" alt="Left: 12 V across 4.7 kohm and 3.3 kohm gives 4.95 V across the 3.3 kohm resistor. Right: a 3.3 kohm load in parallel makes 1.65 kohm, so the output falls to 3.12 V. Below: a potentiometer slider 35.0 cm along a 100.0 cm track on a 6.0 V supply gives 2.1 V." loading="lazy">
  <figcaption>A loaded divider lowers the output; a slider on a track gives a variable output.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--09-sensing-dividers.webp" width="900" height="1210" alt="With an NTC thermistor and a 2.2 kohm resistor on 9.0 V, the output across the fixed resistor rises from 4.95 V at 20 C to 7.07 V at 60 C while the output across the thermistor falls from 4.05 V to 1.93 V. With an LDR in series with 10 kohm on 6.0 V, the 10 kohm resistor has 5.45 V in bright light and 0.29 V in the dark." loading="lazy">
  <figcaption>Which component the output is across decides whether it rises or falls.</figcaption>
</figure>


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

## Frequently asked questions

**Why does terminal p.d. fall as current increases?**
As a source drives more current, more energy per unit charge is dissipated inside it by its internal resistance, so less is available at the terminals: V = E − Ir. When a source is being charged, the terminal voltage exceeds the e.m.f. by Ir instead.

**What is a null method?**
In a null method, such as with a potentiometer, a galvanometer detects when the current is zero at balance. Because no current flows through the meter, it does not disturb the circuit being measured.

**How do ideal ammeters and voltmeters behave?**
An ideal ammeter has zero resistance and is connected in series; an ideal voltmeter has infinite resistance and is connected in parallel. A real voltmeter draws a small current, slightly reducing the p.d. it measures.

**How many circuit symbols must you know for Cambridge 9702?**
You must recall and use the 27 symbols in the Cambridge 9702 syllabus's circuit-symbol table, and draw and interpret diagrams that use them.
