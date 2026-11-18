---
title: "Cambridge A Level Physics (9702): Potential dividers"
resourceType: "study-guides"
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
description: "A focused guide to 10.3 Potential dividers in Cambridge AS Physics 9702: the divider equation, potentiometer comparison of p.d.s, null methods and sensor circuits."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **10.3 Potential dividers** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (AS Level). The broader [D.C. circuits study guide](/resources/as-physics-dc-circuits/) introduces potential dividers, the potentiometer and null methods in outline; this page goes into each in depth: the divider equation and what a load does to it, how a potentiometer wire compares two p.d.s, why a galvanometer at balance lets you measure an e.m.f. without drawing current, and how to work out which way a sensor circuit's output moves. For quick recall use the [Potential dividers revision notes](/resources/cambridge-a-level-physics-9702-as-potential-dividers-revision-notes/), and for exam-style questions the [Potential dividers practice questions](/resources/cambridge-a-level-physics-9702-as-potential-dividers-practice/).

## What 10.3 asks you to do

Candidates should be able to:

- understand the **principle of a potential divider** circuit
- recall and use the principle of the **potentiometer** as a means of comparing potential differences
- understand the use of a **galvanometer in null methods**
- explain the use of **thermistors and light-dependent resistors** in potential dividers to provide a potential difference that is dependent on temperature and light intensity

## The principle of a potential divider

Two resistors R₁ and R₂ connected in series across a supply of p.d. V_in carry the same current, I = V_in/(R₁ + R₂). The p.d. across each is therefore proportional to its resistance:

```
V₁ / V₂ = R₁ / R₂

V_out (across R₂) = V_in × R₂ / (R₁ + R₂)
```

The supply p.d. is "divided" between the resistors in the ratio of their resistances, and V_out can be any fraction of V_in by choosing R₁ and R₂. The equation assumes that no current is drawn from the output.

**A variable output.** Replacing the two resistors by a single resistor with a sliding contact (the three-terminal potentiometer symbol) gives an output that can be varied smoothly from **zero** up to the **full** supply p.d. A variable resistor in series with a component cannot do this: it can reduce the p.d. across the component but never to zero.

## Loading a potential divider

If a load of resistance R_L is connected across R₂, the load and R₂ are in parallel, and their combined resistance is **less** than R₂. The share of V_in across that part falls, so the output p.d. drops.

**Example.** A 12 V supply is across two 10 kΩ resistors, so V_out = 6.0 V. A 10 kΩ load is connected across the lower resistor:

```
lower part: 10 kΩ ∥ 10 kΩ = 5.0 kΩ
V_out = 12 × 5.0 / (10 + 5.0) = 4.0 V
```

The output stays close to its unloaded value only if the load resistance is much larger than R₂.

## The potentiometer as a means of comparing p.d.s

A potentiometer in this sense is a long uniform resistance wire, often 1 m, connected across a **driver cell**. Because the wire is uniform, the p.d. between one end A and any point along it is **proportional to the length** from A.

To measure an unknown p.d. or e.m.f.:

1. Connect the positive terminal of the test cell to the same end A of the wire as the positive terminal of the driver cell.
2. Connect the other terminal of the test cell, through a **galvanometer**, to a sliding contact (jockey) that can touch the wire at any point.
3. Move the contact along the wire until the galvanometer shows **no deflection**. This is the **balance point**, a distance l from A.
4. At balance, the p.d. across length l of wire equals the p.d. of the test cell.

To **compare** two e.m.f.s ε₁ and ε₂, find the balance length for each with the same driver circuit:

```
ε₁ / ε₂ = l₁ / l₂
```

**Conditions for a balance point to exist:** the p.d. across the whole wire must be **greater** than the p.d. being measured, and like terminals must be connected to the same end of the wire. If either condition fails, the galvanometer deflects the same way wherever the contact touches.

## Why a null method is so useful

At balance, **no current passes through the galvanometer, and so no current passes through the test cell**. This has two important consequences:

- **No lost volts.** With I = 0 in the test cell, its terminal p.d. equals its e.m.f. (V = ε − Ir with I = 0). The potentiometer therefore measures the **e.m.f.** directly. A real voltmeter always draws some current and reads slightly less than the e.m.f.
- **The galvanometer is not used as a measuring instrument.** It only has to show **zero** current, so it need not be calibrated; it only needs to be sensitive. The measurement comes from lengths on the wire, which can be read precisely.

In practice, a large protective resistor is often placed in series with the galvanometer while searching for the balance point, to protect it from large currents, and removed (or short-circuited) for the final adjustment, so that the galvanometer is at its most sensitive.

## Worked example 1: comparing e.m.f.s

A standard cell of e.m.f. 1.02 V gives a balance length of 51.0 cm on a potentiometer wire. With the same driver circuit, a second cell gives a balance length of 73.5 cm. Calculate the e.m.f. of the second cell.

```
p.d. per unit length = 1.02 V / 51.0 cm = 0.0200 V cm⁻¹
ε₂ = 0.0200 × 73.5 = 1.47 V
(or directly: ε₂ = 1.02 × 73.5 / 51.0 = 1.47 V)
```

*Annotation.* The driver cell must not change between the two balances. If it runs down, the p.d. per centimetre falls and both balance lengths are no longer comparable. Long balance lengths are better because the same absolute uncertainty in locating the balance point gives a smaller percentage uncertainty.

## Sensor circuits: thermistors and LDRs

Replacing one resistor in a divider with a thermistor or an LDR makes V_out depend on temperature or light intensity. Work out the direction of change in three steps:

1. How does the sensor's resistance change? (Thermistor: falls as temperature rises. LDR: falls as light intensity rises.)
2. That component's share of V_in changes in the same direction as its resistance.
3. The p.d. across the **other** resistor changes the opposite way, since the two p.d.s always add up to V_in.

| Sensor | Condition increases | Sensor resistance | Output across sensor | Output across fixed resistor |
|---|---|---|---|---|
| Thermistor | Temperature | Falls | Falls | Rises |
| LDR | Light intensity | Falls | Falls | Rises |

So a circuit whose output must **rise in the dark** (to switch on a lamp) takes its output across the **LDR**; a circuit whose output must **rise when hot** (a fire or overheating warning) takes its output across the **fixed resistor** in series with a thermistor.

## Worked example 2: a temperature-dependent output

A thermistor and a 2.0 kΩ fixed resistor are in series across a 9.0 V supply, with the output taken across the fixed resistor. The thermistor's resistance is 5.0 kΩ at 15 °C and 1.0 kΩ at 60 °C. Find the output p.d. at each temperature.

```
15 °C:  V_out = 9.0 × 2.0 / (5.0 + 2.0) = 2.6 V
60 °C:  V_out = 9.0 × 2.0 / (1.0 + 2.0) = 6.0 V
```

The output rises as the temperature rises, so this arrangement suits an over-temperature alarm. *Annotation.* Choosing a fixed resistor comparable to the sensor's resistance in the range of interest gives a large change in V_out for a given change in temperature; a fixed resistor far larger or far smaller than the sensor would make V_out almost insensitive.

## Common mistakes

- **Using the wrong resistor on top of the fraction.** The resistor the output is taken across goes on top.
- **Forgetting the load.** A meter or circuit connected across the output is in parallel with that resistor and lowers V_out.
- **Saying the galvanometer "measures the e.m.f.".** It only detects zero current; the lengths give the measurement.
- **Connecting the test cell the wrong way round** on a potentiometer, so that no balance point exists.
- **Reversing the direction of a sensor circuit's output** by skipping step 3 in the sensor method.
- **Confusing the two meanings of "potentiometer"**: a three-terminal variable resistor, and a uniform wire used to compare p.d.s. Both rely on the p.d. along a uniform resistance being proportional to length.

## Exam technique for the command words

- **Explain** (the principle): same current in series resistors, so p.d.s are in the ratio of resistances.
- **Calculate**: write V_out = V_in R₂/(R₁ + R₂) and identify R₂ clearly; for a potentiometer, write ε₁/ε₂ = l₁/l₂.
- **Explain** (why a potentiometer measures e.m.f.): no current in the test cell at balance, so no p.d. across its internal resistance.
- **Explain** (a sensor circuit): chain the reasoning — condition changes → resistance changes → share of p.d. changes → output changes.
- **Suggest** (a design change): swap the positions of the sensor and fixed resistor to reverse the response; change the fixed resistor to shift the switching point.

## Related resources

- [D.C. circuits study guide](/resources/as-physics-dc-circuits/) — the whole of Topic 10
- [Potential dividers revision notes](/resources/cambridge-a-level-physics-9702-as-potential-dividers-revision-notes/)
- [Potential dividers practice questions](/resources/cambridge-a-level-physics-9702-as-potential-dividers-practice/)
- [Kirchhoff's laws](/resources/cambridge-a-level-physics-9702-as-kirchhoffs-laws/) — subtopic 10.2
- [Resistance and resistivity](/resources/cambridge-a-level-physics-9702-as-resistance-and-resistivity/) — LDR and thermistor behaviour

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
