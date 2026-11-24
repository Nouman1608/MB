---
title: "Cambridge A Level Physics (9702): Practical circuits"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "D.C. circuits"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 10.1
syllabusTopics:
  - qualification: "a-level"
    topic: "as-dc-circuits"
    subtopic: "as-practical-circuits"
description: "A focused guide to 10.1 Practical circuits in Cambridge AS Physics 9702: reading circuit diagrams, e.m.f. versus p.d., internal resistance and terminal p.d."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **10.1 Practical circuits** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (AS Level). The broader [D.C. circuits study guide](/resources/as-physics-dc-circuits/) describes all 27 circuit symbols in the syllabus table and introduces internal resistance; this page goes deeper into interpreting diagrams, the energy argument that separates e.m.f. from p.d., and how internal resistance changes the terminal p.d. in real situations, from a car battery to a high-voltage laboratory supply. For quick recall use the [Practical circuits revision notes](/resources/cambridge-a-level-physics-9702-as-practical-circuits-revision-notes/), and for exam-style questions the [Practical circuits practice questions](/resources/cambridge-a-level-physics-9702-as-practical-circuits-practice/).

## What 10.1 asks you to do

Candidates should be able to:

- recall and use the circuit symbols shown in the syllabus
- draw and interpret circuit diagrams containing those symbols
- define and use the **electromotive force (e.m.f.)** of a source as energy transferred per unit charge in driving charge around a complete circuit
- distinguish between e.m.f. and potential difference (p.d.) **in terms of energy considerations**
- understand the effects of the **internal resistance** of a source of e.m.f. on the terminal potential difference

## Interpreting circuit diagrams

The symbol table itself is set out in the [D.C. circuits guide](/resources/as-physics-dc-circuits/). The skill examined here is reading a diagram quickly and correctly:

- **Follow the current.** Start at the positive terminal (the longer line of a cell) and trace each path back to the negative terminal. Wherever the path splits at a junction dot, the branches are in parallel.
- **Series** components lie on the same single path: the same current passes through each.
- **Parallel** components connect between the same two junctions: they share the same p.d.
- **Ammeters** must be in series with the component whose current they measure. An ammeter drawn across a component (in parallel) is an error: being of very low resistance, it would short-circuit that component.
- **Voltmeters** must be connected across (in parallel with) the component. A voltmeter drawn in series would reduce the current almost to zero because of its very high resistance.
- **An open switch** breaks every path that passes through it; a **closed switch** has zero resistance and can short-circuit anything connected in parallel with it.
- **A wire with no component** joining two points puts them at the same potential, so any component connected only between those two points carries no current.

When redrawing a complicated diagram, keep every junction and every component, and check that each component still connects the same pair of junctions.

## E.m.f. and p.d.: the energy distinction

Both quantities are measured in volts, and both are energy per unit charge. The difference is the **direction of the energy transfer**.

- **E.m.f.** is the energy transferred **to** electrical energy, per unit charge, by a source (from chemical energy in a cell, from mechanical energy in a generator, from light in a solar cell) in driving charge round a complete circuit.
- **P.d.** is the energy transferred **from** electrical energy to other forms, per unit charge, as charge passes through a component.

```
e.m.f.:  ε = W / Q    (W = energy converted into electrical energy by the source)
p.d.:    V = W / Q    (W = energy converted from electrical energy in the component)
```

In a complete circuit, energy is conserved: the energy each coulomb receives from the source equals the energy it transfers in all the components, including inside the source itself.

## Internal resistance and terminal p.d.

A real source has an **internal resistance** r: the resistance of the materials inside it. When a current I flows, some of the energy per coulomb, Ir, is transferred to thermal energy inside the source. Only the rest is available to the external circuit. The p.d. across the source's terminals, the **terminal p.d.** V, is therefore:

```
ε = I(R + r)
V = IR = ε − Ir
```

The quantity Ir is sometimes called the "lost volts". Multiplying every term by I gives the power version:

```
εI   =   I²R    +   I²r
total power from source = power to external circuit + power wasted inside source
```

## How terminal p.d. depends on the external resistance

For a source with ε = 3.0 V and r = 0.50 Ω:

| External resistance R | Current I = ε/(R + r) | Terminal p.d. V = ε − Ir |
|---|---|---|
| Very large (open circuit) | ≈ 0 | 3.0 V |
| 4.5 Ω | 0.60 A | 2.70 V |
| 1.5 Ω | 1.5 A | 2.25 V |
| 0.50 Ω | 3.0 A | 1.5 V |
| 0 (short circuit) | 6.0 A | 0 |

The pattern: as R decreases, I increases, so Ir increases and V falls. On open circuit, no current flows, so V = ε: this is why a voltmeter of very high resistance across the terminals reads (almost) the e.m.f. On short circuit, all the e.m.f. is across the internal resistance, and the maximum possible current is ε/r.

## Worked example 1: finding ε and r from two readings

A high-resistance voltmeter across a battery reads 2.70 V when a 4.5 Ω resistor is connected and 2.25 V when the resistor is replaced by 1.5 Ω. Find the e.m.f. and the internal resistance.

```
I₁ = 2.70 / 4.5 = 0.60 A        I₂ = 2.25 / 1.5 = 1.50 A
ε = V + Ir:
ε = 2.70 + 0.60r
ε = 2.25 + 1.50r
subtract: 0 = 0.45 − 0.90r   →   r = 0.50 Ω
ε = 2.70 + 0.60 × 0.50 = 3.00 V
```

*Annotation.* Two readings give two simultaneous equations in ε and r. In an experiment, many readings plotted as V against I give a straight line of gradient −r and intercept ε, which averages out random errors.

## Worked example 2: why headlamps dim when a car starts

A car battery has e.m.f. 12.0 V and internal resistance 0.020 Ω. The starter motor draws 150 A.

```
lost volts = Ir = 150 × 0.020 = 3.0 V
terminal p.d. = 12.0 − 3.0 = 9.0 V
power wasted inside battery = I²r = 150² × 0.020 = 450 W
```

The headlamps are connected in parallel across the same terminals, so their p.d. falls from nearly 12 V to 9.0 V while the motor runs, and they dim. A car battery is designed with a very **low** internal resistance precisely so that it can deliver currents this large without the terminal p.d. collapsing.

## When a large internal resistance is useful

A laboratory extra-high-tension supply might have e.m.f. 5.0 kV. If it is built with an internal resistance of 50 MΩ, the largest current it can ever deliver, even on short circuit, is:

```
I_max = ε / r = 5000 / 50 × 10⁶ = 1.0 × 10⁻⁴ A  (0.10 mA)
```

The internal resistance limits the current for safety. The cost is that the terminal p.d. falls a long way whenever the supply delivers any appreciable current.

## Sources in series

For cells connected in series, all facing the same way, the e.m.f.s add and the internal resistances add. Four cells each of e.m.f. 1.5 V and internal resistance 0.30 Ω give 6.0 V and 1.2 Ω. If one cell is reversed, its e.m.f. subtracts, but its internal resistance still adds.

## Charging a source

When a source is being **charged**, current is forced into its positive terminal, against its e.m.f. Now the terminal p.d. must exceed the e.m.f.: V = ε + Ir. A 12.0 V battery of internal resistance 0.40 Ω charged at 5.0 A needs a terminal p.d. of 12.0 + 2.0 = 14.0 V.

## Common mistakes

- **Defining e.m.f. as a force,** or as "the voltage of a battery". It is energy per unit charge, transferred to electrical energy.
- **Distinguishing e.m.f. and p.d. without mentioning energy** when the question says "in terms of energy".
- **Assuming terminal p.d. equals e.m.f.** whenever a current flows.
- **Using ε = IR** with the external resistance only, forgetting r.
- **Putting an ammeter in parallel** when drawing or interpreting a diagram.
- **Saying internal resistance is always a disadvantage.** It limits current in high-voltage supplies.

## Exam technique for the command words

- **Define** (e.m.f.): "energy transferred per unit charge in driving charge around a complete circuit".
- **Distinguish** (e.m.f. and p.d.): one sentence each, stating that for e.m.f. energy is converted *to* electrical energy and for p.d. *from* electrical energy.
- **Explain** (why the terminal p.d. falls): current increases → Ir increases → more energy per coulomb is transferred inside the source → V = ε − Ir decreases.
- **Calculate** or **determine**: write ε = I(R + r) first, then substitute.
- **Draw** a circuit: use the syllabus symbols, straight lines with junction dots, and place meters correctly.

## More resources on this topic

- [D.C. circuits study guide](/resources/as-physics-dc-circuits/) — the whole of Topic 10, including the full symbol table
- [Practical circuits revision notes](/resources/cambridge-a-level-physics-9702-as-practical-circuits-revision-notes/)
- [Practical circuits practice questions](/resources/cambridge-a-level-physics-9702-as-practical-circuits-practice/)
- [Kirchhoff's laws](/resources/cambridge-a-level-physics-9702-as-kirchhoffs-laws/) — subtopic 10.2

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
