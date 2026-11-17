---
title: "Pearson Edexcel International GCSE Physics (4PH1): Energy and voltage in circuits -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["igcse"]
topic: "Electricity"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4PH1"]
syllabusSeries: "Issue 4"
order: 2.3
syllabusTopics:
  - qualification: "igcse"
    topic: "electricity"
    subtopic: "energy-and-voltage-in-circuits"
description: "Recall notes on series and parallel circuits, I-V graphs, LDRs, thermistors, V = IR, Q = It and E = QV, with a self-test, for Edexcel IGCSE Physics 4PH1."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-17
featured: false
---

Condensed notes on sub-topic **2(c) Energy and voltage in circuits**
(statements 2.7 to 2.21) of Pearson Edexcel International GCSE Physics
(4PH1), Issue 4. For full explanations and worked examples, use the
[Energy and voltage in circuits study guide](/resources/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits/).

## Equations (all "know and use")

```
V = I × R          voltage = current × resistance
Q = I × t          charge = current × time
E = Q × V          energy transferred = charge × voltage
series: R_total = R₁ + R₂     V_supply = V₁ + V₂     same I throughout
```

## Key terms

| Term | Meaning |
|---|---|
| current | rate of flow of charge; in metals, a flow of electrons |
| voltage | energy transferred per unit charge passed; 1 V = 1 J/C |
| resistance | opposition to current; R = V ÷ I |
| series | components in one loop; same current through each |
| parallel | components on separate branches; same voltage across each |
| junction | point where the circuit branches; current in = current out |
| LDR | light-dependent resistor; resistance falls as light increases |
| thermistor | resistance falls as temperature increases |
| diode | allows current in one direction only |
| LED | light-emitting diode; glows when current flows forwards |

## Series versus parallel

| | Series | Parallel |
|---|---|---|
| current | same everywhere | splits; branch currents add to the total |
| voltage | shared; adds to supply voltage | same across every branch |
| a lamp breaks | all go out | others stay on |
| more lamps added | each dimmer, current falls | each as bright, total current rises |
| use | switches, fuses, simple strings of lamps | domestic lighting and sockets |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits--03-series-vs-parallel-lighting.webp" width="900" height="565" alt="Left: three lamps in series with one broken; all go out. Right: three lamps in parallel, each with its own switch; one lamp is broken but the other two stay lit." loading="lazy">
  <figcaption>In parallel each lamp gets the full voltage, has its own switch and keeps working if another fails.</figcaption>
</figure>

## I−V graph shapes

- **Wire or fixed resistor (constant temperature):** straight line through
  origin; constant resistance.
- **Filament lamp:** S-shaped curve through the origin, flattening at high
  voltage in both directions; resistance rises as it heats.
- **Diode:** almost no current in reverse; current rises sharply once a
  small forward voltage is passed.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits--06-iv-characteristics.webp" width="900" height="555" alt="Current against voltage for three components. A wire or resistor gives a straight line through the origin. A filament lamp gives a curve that flattens in both directions. A diode passes almost no current in reverse and a steeply rising current once a small forward voltage is exceeded." loading="lazy">
  <figcaption>Straight line: constant resistance. Flattening curve: resistance rising. Diode: one direction only.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits--08-lamp-resistance-two-points.webp" width="900" height="590" alt="A filament lamp I–V curve with two marked points: 2.0 V at 0.20 A gives 10 Ω, and 6.0 V at 0.30 A gives 20 Ω." loading="lazy">
  <figcaption>On a curve, find R = V ÷ I at each point: here 10 Ω rises to 20 Ω.</figcaption>
</figure>

## I−V investigation in brief

Ammeter in series, voltmeter across the component, variable resistor to
change the voltage; at least six readings; reverse the component for
negative values; plot I against V.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits--05-iv-investigation-circuit.webp" width="900" height="550" alt="Circuit with a supply, an ammeter and a variable resistor in series with the component under test, and a voltmeter connected across the component. Steps: take at least six readings, reverse the component, and plot current against voltage." loading="lazy">
  <figcaption>Vary the resistor, read V and I, reverse the component, and plot I against V.</figcaption>
</figure>

## Charge and energy ideas

- Charge is not used up; energy is transferred to components.
- Current into a junction = current out (charge is conserved).
- Voltage across parallel components is the same because each branch is
  connected across the same two points.
- In series, the larger resistance takes the larger share of the
  voltage.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits--01-charge-current-energy.webp" width="900" height="545" alt="A 6.0 V battery and a lamp in a loop. Conventional current runs from + to −, electrons drift the other way. Each coulomb gains 6.0 J in the battery and transfers it in the lamp. Side notes: Q = I × t, voltage is energy per unit charge, E = Q × V." loading="lazy">
  <figcaption>Charge is not used up: each coulomb picks up energy at the supply and transfers it in the components.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits--02-junction-and-voltage-rules.webp" width="900" height="545" alt="Left: 0.80 A enters a junction and splits into 0.30 A and 0.50 A. Middle: in series the supply voltage is shared, V supply = V₁ + V₂. Right: in parallel each branch has the full supply voltage." loading="lazy">
  <figcaption>Current in equals current out at a junction; series shares the voltage, parallel branches each get all of it.</figcaption>
</figure>

## Series calculation routine

For two resistors in series (2.19), work in this order:

1. R_total = R₁ + R₂
2. I = V_supply ÷ R_total (the same through both)
3. V₁ = I × R₁ and V₂ = I × R₂
4. Check V₁ + V₂ = V_supply

Example: 4.5 V across 10 Ω and 20 Ω. R_total = 30 Ω; I = 0.15 A;
V₁ = 1.5 V, V₂ = 3.0 V; 1.5 + 3.0 = 4.5 V.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits--04-series-worked-example.webp" width="900" height="500" alt="A 9.0 V battery with 120 Ω and 60 Ω resistors in series. Total 180 Ω gives 0.050 A, so the resistors have 6.0 V and 3.0 V across them. In 2.0 minutes 6.0 C flows and the battery transfers 54 J." loading="lazy">
  <figcaption>Total resistance first, then current, then each voltage; check they add to the supply.</figcaption>
</figure>

## Sensor circuits

LDR or thermistor in series with a fixed resistor:

- more light, or higher temperature → sensor resistance falls → current
  rises → voltage across the fixed resistor rises, voltage across the
  sensor falls
- darker, or colder → the reverse

State the resistance change first, then the effect on the current.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-energy-and-voltage-in-circuits--07-ldr-thermistor-circuits.webp" width="900" height="615" alt="An LDR and, separately, a thermistor each in series with a fixed resistor, an ammeter and a battery. More light or a higher temperature lowers the sensor resistance, so the current and the voltage across the fixed resistor rise while the voltage across the sensor falls." loading="lazy">
  <figcaption>More light or more warmth: lower sensor resistance, larger current.</figcaption>
</figure>

## Exam traps

- "Current gets used up" is always wrong.
- Thermistor and LDR both **decrease** resistance as temperature or light
  **increases**.
- R₁ + R₂ is only for series.
- Find resistance as V ÷ I at a point, not the gradient of a curve.
- Convert mA to A and minutes to s before using Q = I × t.
- Ammeter in series, voltmeter in parallel.
- Electrons flow from − to + outside the supply; conventional current is
  drawn from + to −.

## Self-test

1. State what is meant by electric current.
2. What carries the current in a metal wire?
3. A current of 0.60 A enters a junction. One branch carries 0.25 A.
   Calculate the current in the other branch.
4. A 12 V battery is connected to resistors of 30 Ω and 10 Ω in series.
   Calculate the current.
5. For question 4, calculate the voltage across the 30 Ω resistor.
6. Give two reasons why house lights are wired in parallel.
7. Describe the I−V graph for a filament lamp and explain its shape.
8. State the effect on the current of covering an LDR in a series
   circuit.
9. A charge of 90 C passes through a lamp in 3.0 minutes. Calculate the
   current.
10. A 1.5 V cell drives 400 C of charge round a circuit. Calculate the
    energy transferred.
11. Explain, using the idea of charge, why current is the same at every
    point in a series circuit.
12. How would you show that a diode allows current in only one direction,
    using an LED?

## Answers

1. The rate of flow of charge.
2. Negatively charged electrons.
3. 0.60 − 0.25 = 0.35 A.
4. R = 40 Ω; I = 12 ÷ 40 = 0.30 A.
5. V = 0.30 × 30 = 9.0 V.
6. Any two: each lamp gets the full mains voltage; lamps can be switched
   independently; if one lamp fails the others stay on.
7. A curve through the origin that becomes less steep as voltage
   increases: the filament heats up, so its resistance increases.
8. Covering the LDR increases its resistance, so the current decreases.
9. I = Q ÷ t = 90 ÷ 180 = 0.50 A.
10. E = Q × V = 400 × 1.5 = 600 J.
11. There is only one path and charge is not used up or stored, so the
    same charge per second must pass every point.
12. Connect the LED in series with a resistor and a cell: it glows one way
    round; reverse it and it does not glow, showing no current flows.
