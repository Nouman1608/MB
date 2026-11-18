---
title: "AQA GCSE Physics (8463): Current, potential difference and resistance"
resourceType: "study-guides"
subject: "physics"
level: ["gcse"]
topic: "Electricity"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8463"]
syllabusSeries: "For first teaching 2016"
order: 2.1
syllabusTopics:
  - qualification: "gcse"
    topic: "electricity-aqa-gcse"
    subtopic: "current-potential-difference-and-resistance-aqa"
description: "AQA GCSE Physics 4.2.1 in depth: Q = It, V = IR, measuring resistance, I–V graphs, thermistors, LDRs and required practicals 3 and 4, with worked examples."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of AQA GCSE Physics (8463): **4.2.1 Current, potential difference and
resistance**, specification points 4.2.1.1 to 4.2.1.4. It is assessed on Paper 1 at both tiers, and none of it is
Higher tier only. Required practical activities 3 and 4 sit here, so expect method and data-analysis questions as
well as calculations.

For a fast recap, use the [current, potential difference and resistance revision notes](/resources/aqa-gcse-physics-8463-current-potential-difference-and-resistance-aqa-revision-notes/),
then test yourself with the [current, potential difference and resistance practice questions](/resources/aqa-gcse-physics-8463-current-potential-difference-and-resistance-aqa-practice/).
The whole of section 4.2 is summarised in the [Electricity study guide](/resources/aqa-gcse-physics-8463-electricity/).

## What the specification asks for

| Point | Content | You must be able to |
|---|---|---|
| 4.2.1.1 | Standard circuit symbols | Draw and interpret circuit diagrams |
| 4.2.1.2 | Charge and current | Recall and apply Q = It; know current is the same at any point in a single closed loop |
| 4.2.1.3 | Current, resistance and pd | Recall and apply V = IR; carry out required practical 3 |
| 4.2.1.4 | Resistors | Explain ohmic and non-ohmic behaviour; describe thermistors and LDRs and their uses; design a circuit to measure resistance; use I–V graphs; carry out required practical 4 |

## Drawing circuit diagrams that score

Examiners check three things in a circuit diagram: the symbols are the standard ones, the circuit is a complete
loop, and each meter is in the right place. Draw wires as straight lines with square corners, leave no gaps at
joins, and never draw a wire running through a component symbol.

- An **ammeter** goes **in series**, in the same loop as the component, so the same current passes through both.
- A **voltmeter** goes **in parallel**, with its two leads either side of the one component it measures.
- A **variable resistor** in series lets you change the current and the pd across the component under test.
- A **diode** symbol has a triangle pointing in the direction current can flow; the bar shows the blocked direction.

A useful check: trace a path from one terminal of the cell back to the other. If the path must pass through the
voltmeter to get round, the voltmeter has been drawn in series by mistake.

## Charge, current and time

Current is the **rate of flow of electrical charge**: how many coulombs pass a point each second. A current of
1 A means 1 C passes every second. For charge to flow at all, the circuit must be **closed** and must contain a
**source of potential difference**, such as a cell. Remove either and the current is zero.

In a **single closed loop**, the current has the **same value at every point**. Charge is not used up by
components; the same charge flows round and round. What a component takes is energy, not charge.

**Worked example 1 (unit conversion).** A phone charger delivers 850 mA for 1.5 hours. Calculate the charge
that flows.

```
I = 850 mA = 0.850 A
t = 1.5 × 3600 = 5400 s
Q = I t = 0.850 × 5400
Q = 4590 C  (4600 C to 2 s.f.)
```

**Worked example 2 (rearranging).** A charge of 36 C passes through a lamp in 2.0 minutes. Find the current.

```
t = 2.0 × 60 = 120 s
I = Q ÷ t = 36 ÷ 120
I = 0.30 A
```

## Resistance and V = IR

The current through a component depends on **both** its resistance and the pd across it. For a given pd, a
**larger resistance** gives a **smaller current**. Questions use the term potential difference, but "voltage"
also gains credit.

**Worked example 3 (kilohms).** A resistor of 2.2 kΩ has a pd of 9.0 V across it. Calculate the current in mA.

```
R = 2.2 kΩ = 2200 Ω
I = V ÷ R = 9.0 ÷ 2200
I = 0.00409 A = 4.1 mA  (2 s.f.)
```

Forgetting to convert kΩ to Ω makes the answer 1000 times too large, which is the most common slip in this topic.

## Ohmic conductors and components whose resistance changes

For an **ohmic conductor at constant temperature**, current is **directly proportional** to pd, so resistance
stays the same whatever the current. Its I–V graph is a straight line through the origin.

For **lamps, diodes, thermistors and LDRs**, resistance is **not constant**; it changes as the current changes.

- **Filament lamp:** as current rises the filament gets hotter, and its resistance increases. The graph curves
  and becomes less steep at higher pd. It is the same shape for negative pd because the filament heats whichever
  way current flows.
- **Diode:** current flows in **one direction only**. In reverse its resistance is very high, so the current is
  almost zero.
- **Thermistor:** resistance **decreases as temperature increases**. Application: a thermostat that switches a
  heater according to room temperature.
- **LDR:** resistance **decreases as light intensity increases**. Application: switching lights on when it gets
  dark.

The specification also asks you to investigate how the resistance of a thermistor depends on temperature, and of
an LDR on light intensity. For the thermistor, put it in a beaker of water with a thermometer, heat the water in
steps and record V and I at each temperature. For the LDR, change the distance from a lamp, or use a light meter,
and do the same.

### Finding resistance from an I–V graph

Resistance at any point is **V ÷ I using the coordinates of that point**, not the gradient of the curve.

**Worked example 4.** On a filament lamp's I–V graph, the point at 2.0 V is at 0.40 A and the point at 6.0 V is
at 0.75 A. Find the resistance at each pd and comment.

```
At 2.0 V:  R = 2.0 ÷ 0.40 = 5.0 Ω
At 6.0 V:  R = 6.0 ÷ 0.75 = 8.0 Ω
```

The resistance has increased because the filament is hotter at the higher current. Notice that tripling the pd
did not triple the current: that is what "non-linear" means.

## Required practical 3: factors affecting resistance

The specification names two parts: the **length of a wire at constant temperature**, and **combinations of
resistors in series and parallel**.

**Method for the wire.** Tape a length of thin wire to a metre rule. Connect a cell, a switch and an ammeter in
series with one crocodile clip at the zero mark; move a second clip to set the length. Put a voltmeter across the
section between the clips. Record V and I for lengths such as 10 cm to 90 cm, calculate R = V ÷ I, and plot R
(y-axis) against length (x-axis).

| Variable | In this investigation |
|---|---|
| Independent | Length of wire between the clips |
| Dependent | Resistance, calculated from V and I |
| Control | Material and thickness of wire; temperature, kept steady with a low current and by switching off between readings |

**Interpreting results.** A straight line through the origin shows resistance is **directly proportional** to
length. If the line is straight but crosses the resistance axis above zero, there is extra resistance in the
clips and connections, a systematic error that adds the same amount to every reading.

**Worked example 5.** At 50.0 cm the voltmeter reads 0.80 V and the ammeter 0.50 A. At 100.0 cm the readings
are 1.20 V and 0.375 A. Is R proportional to length?

```
50.0 cm:   R = 0.80 ÷ 0.50  = 1.6 Ω
100.0 cm:  R = 1.20 ÷ 0.375 = 3.2 Ω
Doubling the length doubles R, consistent with direct proportion.
```

## Required practical 4: I–V characteristics

Investigate a **resistor at constant temperature**, a **filament lamp** and a **diode**. Use a variable resistor
(or variable supply) to change the pd in steps, read V and I at each step, then **reverse the connections** to
obtain negative values. Plot **current on the y-axis** against **pd on the x-axis**. For the diode, include a fixed
resistor in series to protect it from too large a forward current; readings change sharply once it starts to
conduct, so take smaller steps there.

## Common mistakes

- Calculating resistance from the gradient of a curved I–V graph instead of V ÷ I at the point.
- Describing the lamp graph as "proportional": it is only proportional for an ohmic conductor.
- Writing that current is "used up" in a loop; it is the same everywhere in a single loop.
- Saying a thermistor responds to light or an LDR to temperature.
- Leaving time in minutes or hours in Q = It, or kΩ and mA unconverted.
- In required practical 3, not mentioning how temperature is kept constant.

## Exam technique for AQA command words

- **Calculate**: show the equation, the substitution with converted units, then the answer with its unit.
- **Describe** a method: give the circuit, what you change, what you measure and how you process the readings.
- **Explain** a graph shape: give the cause (filament heats up) and the effect (resistance increases).
- **Sketch** a graph: label axes with quantities, pass through the origin where required, and show the correct
  curvature; no plotted points are needed.
- **Determine** from a graph: read clear coordinates and show the division you used.

## Official syllabus

AQA GCSE Physics (8463) specification, for teaching from September 2016 onwards, for exams in 2018 onwards
(Version 1.1, 30 September 2019), published by AQA. This guide covers 4.2.1 Current, potential difference and
resistance.
