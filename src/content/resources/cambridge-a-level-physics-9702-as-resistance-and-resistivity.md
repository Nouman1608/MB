---
title: "Cambridge A Level Physics (9702): Resistance and resistivity"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Electricity"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 9.3
syllabusTopics:
  - qualification: "a-level"
    topic: "as-electricity"
    subtopic: "as-resistance-and-resistivity"
description: "A focused guide to 9.3 Resistance and resistivity in Cambridge AS Physics 9702: defining R, Ohm's law, I–V curves, R = ρL/A, the resistivity method, LDRs and thermistors."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **9.3 Resistance and resistivity** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (AS Level). The broader [Electricity study guide](/resources/as-physics-electricity/) summarises the three I–V characteristics and the resistivity equation; this page goes further into reading resistance correctly from a curved graph, describing each characteristic precisely, measuring resistivity in the laboratory, and handling questions where a wire is stretched or reshaped. For quick recall use the [Resistance and resistivity revision notes](/resources/cambridge-a-level-physics-9702-as-resistance-and-resistivity-revision-notes/), and for exam-style questions the [Resistance and resistivity practice questions](/resources/cambridge-a-level-physics-9702-as-resistance-and-resistivity-practice/).

## What 9.3 asks you to do

Candidates should be able to:

- define resistance, and recall and use **V = IR**
- **sketch** the I–V characteristics of a metallic conductor at constant temperature, a semiconductor diode and a filament lamp
- explain that the resistance of a filament lamp increases as current increases because its temperature increases
- state **Ohm's law**
- recall and use **R = ρL/A**
- understand that the resistance of a **light-dependent resistor (LDR)** decreases as light intensity increases, and that the resistance of a **thermistor** decreases as temperature increases (a negative temperature coefficient is assumed)

## Resistance and Ohm's law are not the same thing

**Resistance** is defined as the ratio of the potential difference across a component to the current in it:

```
R = V / I        1 Ω = 1 V A⁻¹
```

This definition applies to **every** component at every point on its characteristic, whether or not the component obeys Ohm's law.

**Ohm's law** is a statement about a particular kind of behaviour: *for a metallic conductor at constant temperature, the current is directly proportional to the potential difference across it.* A component that obeys it has a resistance that does not change as V changes. A filament lamp does not obey Ohm's law, but V = IR still gives its resistance at any instant.

## Reading resistance from an I–V graph

On a graph of current I against p.d. V, the resistance at a point is **V divided by I at that point**. It is **not** the reciprocal of the gradient of the tangent at that point, unless the graph is a straight line through the origin.

## Worked example 1: a filament lamp

A filament lamp has a current of 0.20 A at a p.d. of 1.0 V, and 0.50 A at 6.0 V. Calculate its resistance at each p.d.

```
at 1.0 V:  R = V / I = 1.0 / 0.20 = 5.0 Ω
at 6.0 V:  R = V / I = 6.0 / 0.50 = 12 Ω
```

The resistance more than doubles. *Annotation.* A student who drew a tangent at 6.0 V and took 1/gradient would get a much larger value, because the curve is flattening there. That is the resistance to a small change in current, not the resistance defined by R = V/I. Examiners award the mark only for V/I.

## The three characteristics, described precisely

When asked to **sketch**, draw I on the vertical axis and V on the horizontal axis (unless told otherwise), and include both positive and negative values of V.

**Metallic conductor at constant temperature.** A straight line through the origin, extending into the negative quadrant with the same gradient. Constant resistance; obeys Ohm's law.

**Filament lamp.** A curve through the origin whose gradient **decreases** as V increases in either direction, so the graph flattens towards the V axis at high p.d. It is symmetrical: reversing the p.d. gives a current of the same size in the opposite direction, so the negative half is the positive half rotated through 180° about the origin.

*Explanation (often 2–3 marks):* as the current increases, the filament's temperature increases. The metal ions in the filament vibrate with larger amplitude, so the free electrons collide with them more often, and the resistance increases. A larger increase in p.d. is then needed for each further increase in current.

**Semiconductor diode.** In **reverse bias** (negative V), the current is practically zero: very high resistance. In **forward bias**, the current stays very small until the p.d. reaches a threshold (of the order of 0.5–0.7 V for a typical silicon diode), and then rises steeply, so the resistance becomes low. The graph is not symmetrical, which is why a diode allows current in one direction only.

## Resistivity

The resistance of a uniform conductor depends on its length L, its cross-sectional area A and the material:

```
R = ρL / A       ρ = RA / L
unit of ρ: Ω m² / m = Ω m
```

**Resistivity ρ** is a property of the material (at a given temperature). It does not depend on the size or shape of the sample. Resistance does: doubling L doubles R; doubling A halves R.

For a wire of circular cross-section, A = πd²/4, where d is the diameter. Because A depends on d², small errors in d have a large effect: a 2% uncertainty in d becomes a 4% uncertainty in A, and so in ρ.

## Worked example 2: resistivity from a graph

A student measures the resistance of different lengths of a wire of diameter 0.40 mm and plots R against L. The graph is a straight line through the origin with gradient 3.90 Ω m⁻¹. Calculate the resistivity.

```
R = (ρ / A) L, so gradient = ρ / A
A = π (0.20 × 10⁻³)² = 1.257 × 10⁻⁷ m²
ρ = gradient × A = 3.90 × 1.257 × 10⁻⁷ = 4.9 × 10⁻⁷ Ω m
```

## Describing the resistivity experiment

A full description includes:

1. Measure the diameter of the wire with a **micrometer screw gauge** at several points along it, in two perpendicular directions at each point, and take the mean. Check the gauge for zero error.
2. Connect a measured length L of the wire (marked with crocodile clips or a sliding contact) in series with an ammeter and a supply, with a voltmeter across that length.
3. Record V and I and calculate R = V/I. Repeat for several lengths measured with a metre rule.
4. Keep the current small (or switch off between readings) so the wire does not heat up, since resistivity changes with temperature.
5. Plot R against L; ρ = gradient × A. Using the gradient removes the effect of any constant contact resistance, which only shifts the line up without changing its gradient.

## Worked example 3: a stretched wire

A wire of resistance 2.0 Ω is stretched uniformly until its length is 1.5 times the original. Its volume is unchanged. Find its new resistance.

```
volume = AL is constant, so new A = A / 1.5
R = ρL/A, so new R = ρ(1.5L) / (A/1.5) = 1.5² × ρL/A = 2.25 × 2.0 = 4.5 Ω
```

*Annotation.* The trap is to multiply only by 1.5. Stretching changes both the length and the area, and both changes increase the resistance.

## LDRs and thermistors

- **LDR**: as light intensity increases, resistance **decreases**. Its resistance can fall from many kilohms in darkness to a few hundred ohms in bright light.
- **Thermistor** (negative temperature coefficient, as assumed by this syllabus): as temperature increases, resistance **decreases**, and the change is not linear.

In both, more energy (from light or heating) frees more charge carriers, so n in I = Anvq increases. Compare a metal wire, whose resistance **increases** with temperature. These components are used in sensing circuits in [Potential dividers](/resources/cambridge-a-level-physics-9702-as-potential-dividers/).

## Common mistakes

- **Using the gradient of a tangent** to find resistance from a curved I–V graph.
- **Saying a filament lamp does not obey V = IR.** It does not obey **Ohm's law**; V = IR still defines its resistance.
- **Stating Ohm's law without "constant temperature"** (or "constant physical conditions").
- **Sketching the filament lamp curve bending upwards**, or only in one quadrant.
- **Using diameter as radius** in A = πr², or forgetting to square.
- **Thinking resistivity changes when a wire is cut or stretched.** Only resistance changes.
- **Reversing the LDR or thermistor behaviour.**

## Exam technique for the command words

- **Define** (resistance): "the ratio of potential difference to current", or R = V/I with symbols defined.
- **State** (Ohm's law): current proportional to p.d. for a metallic conductor at constant temperature.
- **Sketch**: label axes I and V, pass through the origin, show both quadrants, and make the shape distinct (straight, flattening curve, or near-zero then steep).
- **Explain** (filament lamp): current up → temperature up → more frequent collisions with vibrating ions → resistance up.
- **Calculate** or **determine**: convert mm to m before squaring; quote ρ in Ω m.
- **Describe** (the resistivity experiment): name instruments, what is measured, repeats, the graph plotted and how ρ is found from it.

## Related resources

- [Electricity study guide](/resources/as-physics-electricity/) — the whole of Topic 9
- [Resistance and resistivity revision notes](/resources/cambridge-a-level-physics-9702-as-resistance-and-resistivity-revision-notes/)
- [Resistance and resistivity practice questions](/resources/cambridge-a-level-physics-9702-as-resistance-and-resistivity-practice/)
- [Potential difference and power](/resources/cambridge-a-level-physics-9702-as-potential-difference-and-power/) — subtopic 9.2

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
