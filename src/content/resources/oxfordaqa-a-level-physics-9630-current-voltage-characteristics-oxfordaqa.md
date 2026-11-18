---
title: "OxfordAQA A-Level Physics (9630): Current-voltage characteristics"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.4 – Electricity"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "AS"
order: 4.2
syllabusTopics:
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "current-voltage-characteristics-oxfordaqa"
description: "Study guide to OxfordAQA 9630 section 3.4.2: I-V characteristics of an ohmic conductor, filament lamp and diode, Ohm's law, axes and combining components."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.4.2, Current-voltage characteristics, in Section 3.4 Electricity. It is shared International AS and A-level content. Sections 3.4.1 to 3.4.3 are taught together in the [current, p.d., resistance, I-V characteristics and resistivity study guide](/resources/oxfordaqa-a-level-physics-current-p-d-resistance-i-v-characteristics-and/). After this page, condense it with the [current-voltage characteristics revision notes](/resources/oxfordaqa-a-level-physics-9630-current-voltage-characteristics-oxfordaqa-revision-notes/) and test yourself with the [current-voltage characteristics practice questions](/resources/oxfordaqa-a-level-physics-9630-current-voltage-characteristics-oxfordaqa-practice/).

## What the specification asks for

| Statement in 3.4.2 | What you must be able to do |
|---|---|
| Characteristics for an ohmic conductor, semiconductor diode and filament lamp | Sketch, recognise and explain each graph |
| Ohm's law as a special case where I ∝ V under constant physical conditions | State the law and its condition; identify when it applies |
| Ammeters and voltmeters treated as ideal unless stated | Use zero and infinite meter resistance in analysis |
| Either I or V may be on the horizontal axis | Read resistance correctly from either form of graph |

## Measuring a characteristic

To plot I against V you need readings across the full range of pd, including zero and negative values.

- Connect the component with an **ammeter in series** and a **voltmeter in parallel** across the component only.
- Supply the pd from a **potential divider** (a variable resistor connected across the supply with a sliding contact). This lets the pd fall to zero, which a variable resistor in series cannot do.
- **Reverse the supply connections** (or the component) to take readings for negative pd.
- For a diode, add a **protective resistor** in series so the current cannot rise high enough to damage it once it starts to conduct.
- For a lamp, wait briefly after each change so the filament reaches a steady temperature before reading.

Ideal meters mean the ammeter adds no resistance and the voltmeter draws no current, so the readings are the true current through and pd across the component.

## The three characteristics

### Ohmic conductor

A straight line through the origin, symmetrical in both directions. The current is directly proportional to the pd, so V/I is constant.

**Ohm's law** states that the current through a conductor is directly proportional to the pd across it, provided physical conditions, such as temperature, remain constant. The specification calls it a special case: R = V/I applies to every component, but only some components have a constant R.

### Filament lamp

The graph is S-shaped and symmetrical about the origin. Near the origin it is almost straight, because a small current barely heats the filament. As the pd rises the line bends towards the V axis: equal increases in pd give smaller and smaller increases in current.

The physics: a larger current transfers more energy to the filament, so its temperature rises. The metal ions vibrate with larger amplitude, the free electrons collide with them more often, and the resistance increases. The lamp would obey Ohm's law only if its temperature could be held constant.

### Semiconductor diode

- **Reverse bias:** the current is very small, effectively zero, so the resistance is very high.
- **Forward bias below the threshold pd:** almost no current.
- **Forward bias above the threshold:** the current rises steeply for a small further rise in pd, so the resistance falls sharply. For a silicon diode the threshold is roughly 0.6 V; in a question, use the value given.

## Resistance from a characteristic

At any point, R = V/I using the coordinates of that point. For a curved graph, the gradient at that point is not the resistance and nor is its reciprocal.

### Worked example 1: a lamp from data

| V / V | 0.5 | 1.0 | 2.0 | 3.0 | 4.0 | 5.0 | 6.0 |
|---|---|---|---|---|---|---|---|
| I / A | 0.12 | 0.20 | 0.29 | 0.36 | 0.42 | 0.47 | 0.50 |
| R / Ω | 4.2 | 5.0 | 6.9 | 8.3 | 9.5 | 10.6 | 12.0 |

The resistance nearly triples from 0.5 V to 6.0 V. Notice that doubling the pd from 3.0 V to 6.0 V increases the current by only 39%, not 100%.

### When V is on the vertical axis

For an ohmic conductor, a graph of V against I is a straight line through the origin with gradient R. For a lamp, the graph of V against I curves upwards (gets steeper), because the resistance increases. For a diode it rises steeply at first, then flattens near the threshold pd. Always read the axis labels before deciding what a bend means: a lamp curve bends towards the V axis on both forms of the graph.

## Using characteristics in circuits

When components are in **series**, the current is the same in each and the pds add. When they are in **parallel**, the pd is the same and the currents add. With a non-ohmic component you cannot use one fixed resistance; instead, find the current that satisfies the circuit using the characteristic.

### Worked example 2: lamp and resistor in series

The lamp in worked example 1 is connected in series with a 12.5 Ω resistor across a 7.5 V supply of negligible internal resistance. Find the current.

The pds must add to 7.5 V: V_lamp + I × 12.5 = 7.5. Test values from the table:

| I / A | V_lamp / V | I × 12.5 / V | Total / V |
|---|---|---|---|
| 0.29 | 2.0 | 3.6 | 5.6 |
| 0.36 | 3.0 | 4.5 | 7.5 |
| 0.42 | 4.0 | 5.3 | 9.3 |

The current is **0.36 A**, with 3.0 V across the lamp and 4.5 V across the resistor. On a graph, the same answer comes from plotting both characteristics and finding where their pds add to the supply pd.

### Worked example 3: protecting a diode

A diode has a forward pd of 0.70 V when conducting and must not carry more than 20 mA. It is used with a 6.0 V supply. Find the smallest series resistor.

pd across the resistor = 6.0 − 0.70 = 5.3 V.

R = V/I = 5.3 / 0.020 = **265 Ω**; choose the next standard value above this.

If the diode is reversed, the current is effectively zero, so there is no pd across the resistor and almost the whole 6.0 V appears across the diode.

### Worked example 4: lamp and resistor in parallel

The same lamp is connected in parallel with a 20 Ω resistor across a 4.0 V supply. Find the supply current.

Lamp current at 4.0 V = 0.42 A (from the table). Resistor current = 4.0 / 20 = 0.20 A.

Total = **0.62 A**. The combined resistance at this pd is 4.0 / 0.62 = 6.5 Ω, but this value would change at any other pd.

## Common mistakes

- Taking the gradient of a curve as the resistance.
- Explaining the lamp graph with "the wire gets longer" or "electrons slow down" without linking to temperature and collisions.
- Stating Ohm's law without the constant-conditions condition.
- Drawing a diode graph with large reverse current, or with current starting at 0 V in forward bias.
- Using a series variable resistor and claiming it lets the pd reach zero.
- Drawing the ammeter in parallel or the voltmeter in series with the component.

## Exam technique

- **Sketch**: label both axes with quantity and unit, pass through the origin, and show symmetry (or its absence for a diode).
- **Explain** the lamp: current → heating → temperature rise → more ion vibration → more collisions → resistance rises.
- **State** Ohm's law: proportionality plus "constant physical conditions".
- **Describe** the method: circuit, potential divider supply, reversal, repeat readings, plot I against V.
- **Determine** resistance: read both coordinates, then divide; show the values you read.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.4.2 Current-voltage characteristics, published by OxfordAQA.
