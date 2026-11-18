---
title: "OxfordAQA A-Level Physics (9630): Current-voltage characteristics -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA 9630 section 3.4.2: ohmic, lamp and diode I-V graphs, Ohm's law, reading either axis and circuit use, with a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 3.4.2, Current-voltage characteristics, of OxfordAQA International AS and A-level Physics (9630), shared International AS and A-level content. For full explanations and worked examples, read the [current-voltage characteristics study guide](/resources/oxfordaqa-a-level-physics-9630-current-voltage-characteristics-oxfordaqa/), then test yourself with the [current-voltage characteristics practice questions](/resources/oxfordaqa-a-level-physics-9630-current-voltage-characteristics-oxfordaqa-practice/). Sections 3.4.1 to 3.4.3 are summarised together in the [current, p.d., resistance and resistivity revision notes](/resources/oxfordaqa-a-level-physics-current-p-d-resistance-i-v-characteristics-and-revision-notes/).

## The three graphs (I vertical, V horizontal)

| Component | Shape | Resistance as V increases | Symmetrical? |
|---|---|---|---|
| Ohmic conductor | Straight line through origin | Constant | Yes |
| Filament lamp | S-shape, bending towards the V axis | Increases | Yes |
| Semiconductor diode | Near zero in reverse and below threshold; steep rise above it | Very high in reverse; falls sharply above threshold | No |

## Ohm's law

The current through a conductor is directly proportional to the pd across it, **provided physical conditions (such as temperature) stay constant**. It is a special case: R = V/I defines resistance for every component, whether or not R is constant.

## Key terms

| Term | Meaning |
|---|---|
| Characteristic | Graph of current against pd (or pd against current) for a component |
| Ohmic | Obeys Ohm's law: constant resistance |
| Forward bias | Diode connected so that it can conduct |
| Reverse bias | Diode connected so that it blocks current |
| Threshold pd | Forward pd above which a diode conducts significantly (roughly 0.6 V for silicon) |
| Protective resistor | Series resistor that limits the diode current |
| Ideal ammeter / voltmeter | Zero / infinite resistance |

## Lamp explanation chain

Larger pd → larger current → filament heats → metal ions vibrate more → more frequent collisions with free electrons → resistance rises → current rises less than in proportion.

## Reading either axis

| Graph | Ohmic gradient | Lamp curve | Resistance at a point |
|---|---|---|---|
| I against V | 1/R | Bends towards the V axis (flattens) | V/I from coordinates |
| V against I | R | Bends towards the V axis (steepens) | V/I from coordinates |

Never use the gradient of a curve as R or 1/R.

## Measuring a characteristic

- Ammeter in series; voltmeter across the component.
- Potential divider supply so the pd can start from zero.
- Reverse the connections for negative values.
- Protective resistor with a diode; time for a lamp to settle.

## Components together

| Arrangement | Same in each | Adds |
|---|---|---|
| Series | Current | pds |
| Parallel | pd | Currents |

With a lamp or diode, find the current from the characteristic, not from one fixed R.

Diode with protective resistor: R = (supply pd − diode pd) / maximum current.

## Worked reminder

A diode's forward readings are: 0.50 V, 0 mA; 0.60 V, 2.0 mA; 0.65 V, 8.0 mA; 0.70 V, 25 mA.

- Resistance at 0.65 V: 0.65 / 0.0080 = 81 Ω. At 0.70 V: 0.70 / 0.025 = 28 Ω. The resistance falls sharply above the threshold.
- In series with a 200 Ω resistor across a 2.25 V supply, test 8.0 mA: resistor pd = 200 × 0.0080 = 1.60 V, and 1.60 + 0.65 = 2.25 V. So the current is 8.0 mA.

## Exam traps

- Ohm's law stated without "constant physical conditions".
- Lamp explanation that stops at "it gets hot".
- Resistance taken as a gradient on a curve.
- Diode drawn conducting from 0 V or conducting in reverse.
- Lamp graph drawn unsymmetrical, or diode graph drawn symmetrical.
- Series variable resistor claimed to give zero pd.
- Axis labels ignored, so a lamp on V-I axes is mistaken for a diode.

## Quick self-test

1. State Ohm's law.
2. Describe the I-V characteristic of a filament lamp.
3. Explain why the resistance of a filament lamp increases as the current increases.
4. A lamp carries 0.25 A at 2.5 V and 0.35 A at 5.0 V. Find its resistance at each pd.
5. Describe the resistance of a diode in reverse bias.
6. A V-I graph (V vertical) for a resistor is a straight line through (0.25 A, 5.0 V). Find R.
7. Why is a potential divider used to supply the pd when plotting a characteristic?
8. A diode (0.65 V when conducting, maximum 15 mA) is used with a 9.0 V supply. Find the smallest protective resistor.
9. Two identical lamps in series are connected to a 6.0 V supply. Each lamp carries 0.30 A at 3.0 V. Find the current.
10. State the resistance of an ideal ammeter and of an ideal voltmeter.
11. A reverse-biased diode and a 100 Ω resistor are in parallel across a 2.0 V supply. Find the supply current.
12. An I-V graph (I vertical) for a resistor has gradient 0.050 A V⁻¹. Find R.

### Answers

1. The current through a conductor is directly proportional to the pd across it, provided physical conditions such as temperature stay constant.
2. A curve through the origin that is nearly straight at small pd and bends towards the V axis at larger pd; the same shape for negative values.
3. More current heats the filament; its ions vibrate more, so electrons collide with them more often, increasing the resistance.
4. 2.5 / 0.25 = 10 Ω; 5.0 / 0.35 = 14 Ω.
5. Very high: the current is effectively zero.
6. R = 5.0 / 0.25 = 20 Ω (the gradient, since this graph is straight).
7. It allows the pd to be varied smoothly from zero up to the full supply pd.
8. (9.0 − 0.65) / 0.015 = 557 Ω, so about 560 Ω.
9. The pd shares equally, 3.0 V each, so the current is 0.30 A.
10. Zero and infinite.
11. The diode carries no current, so I = 2.0 / 100 = 0.020 A.
12. R = 1 / gradient = 1 / 0.050 = 20 Ω.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.4.2 Current-voltage characteristics, published by OxfordAQA.
