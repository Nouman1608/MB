---
title: "Cambridge A Level Physics (9702): Energy stored in a capacitor"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Capacitance"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 19.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-capacitance"
    subtopic: "a-energy-stored-in-a-capacitor"
description: "A focused guide to 19.2 Energy stored in a capacitor in Cambridge A Level Physics 9702: area under the V–Q graph, W = ½QV = ½CV² and charge sharing."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **19.2 Energy stored in a capacitor** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Capacitance study guide](/resources/a-physics-capacitance/) introduces the whole of Topic 19 and gives the basic result W = ½CV²; this page goes further into the energy outcomes alone: why the area under the graph is the energy, how to read energy changes off a graph between two voltages, which of the three forms of the equation to choose, and why energy is "lost" when capacitors share charge. For quick recall use the [Energy stored in a capacitor revision notes](/resources/cambridge-a-level-physics-9702-a-energy-stored-in-a-capacitor-revision-notes/), and for exam-style questions the [Energy stored in a capacitor practice questions](/resources/cambridge-a-level-physics-9702-a-energy-stored-in-a-capacitor-practice/).

## What 19.2 asks you to do

The syllabus lists two outcomes. Candidates should be able to:

- **determine the electric potential energy stored in a capacitor from the area under the potential–charge graph**
- **recall and use W = ½QV = ½CV²**

The first outcome is a graphical skill: you may be given a graph and asked for an energy, or asked to explain where the ½ comes from. The second is a calculation outcome. Both lean on 19.1, because C = Q/V lets you move between the forms of the equation.

## Why the energy is the area under the graph

Think about charging a capacitor one small packet of charge at a time. When the capacitor already holds charge Q, the p.d. across it is V = Q/C. To push a further small charge ΔQ onto the plates, work must be done against this p.d.:

```
ΔW = V ΔQ
```

On a graph of p.d. V (y-axis) against charge Q (x-axis), V ΔQ is the area of a thin vertical strip of width ΔQ under the line. Adding all the strips from zero charge up to the final charge gives the total work done, which is stored as electric potential energy. So the energy stored is the **area under the potential–charge graph**.

For a capacitor, V = Q/C, so the graph is a **straight line through the origin** with gradient 1/C. The area under it is a triangle:

```
W = ½ × base × height = ½QV
```

The ½ appears because the p.d. is not constant while the capacitor charges. The first packet of charge is moved across almost no p.d.; the last is moved across nearly the full p.d. V. On average, each coulomb is moved across V/2.

Note which axis is which. The syllabus says "potential–charge graph", so V is plotted against Q. If a question plots Q against V instead, the energy is the area between the line and the **Q-axis** (the vertical axis), which is still ½QV but is not the area "under" the line in the usual sense. Always check the axes before shading an area.

## The three forms of the equation

Substituting Q = CV or V = Q/C into W = ½QV gives:

```
W = ½QV = ½CV² = Q²/(2C)
```

The syllabus requires the first two. The third is not listed, but it follows in one line and is useful when charge, rather than p.d., is fixed. Choose the form that matches what the question holds constant:

| Situation | Quantity that stays fixed | Most direct form | Consequence |
|---|---|---|---|
| Capacitor left connected to a supply | V | W = ½CV² | W ∝ C at fixed V; doubling V gives four times the energy |
| Isolated capacitor (disconnected) | Q | W = Q²/(2C) | W ∝ 1/C at fixed Q |
| Graph or data giving Q and V directly | neither | W = ½QV | no need to find C first |

The squared dependence is the most tested idea. Doubling the p.d. across a given capacitor doubles the charge **and** doubles the average p.d. it was moved across, so the energy rises by a factor of four.

## Energy changes between two voltages

Questions often ask how much energy is released when a capacitor discharges from one p.d. to another, not all the way to zero. On the V–Q graph this is the area of a **trapezium** between the two charges, which equals the difference of two triangles:

```
ΔW = ½CV₁² − ½CV₂² = ½C(V₁² − V₂²)
```

A common error is to write ½C(V₁ − V₂)², which squares the difference instead of taking the difference of the squares. For a 100 μF capacitor discharging from 10 V to 5 V, the correct answer is ½ × 100 × 10⁻⁶ × (100 − 25) = 3.75 mJ; the incorrect method gives only 1.25 mJ.

The trapezium also shows a striking result. When a capacitor's p.d. falls to one third of its starting value, two thirds of the charge has left, but the energy remaining is (1/3)² = 1/9 of the original, so **eight ninths** of the energy has been released.

## Worked example 1: energy from a graph

A graph of p.d. V against charge Q for a capacitor is a straight line from the origin to the point (6.0 mC, 12 V). Determine **(a)** the capacitance, **(b)** the energy stored at 12 V, **(c)** the energy released as the p.d. falls from 12 V to 4.0 V.

```
(a) C = Q/V = 6.0 × 10⁻³ / 12 = 5.0 × 10⁻⁴ F  (500 μF)

(b) W = ½QV = ½ × 6.0 × 10⁻³ × 12 = 0.036 J

(c) At 4.0 V, Q = CV = 5.0 × 10⁻⁴ × 4.0 = 2.0 × 10⁻³ C
    Trapezium area = ½ × (12 + 4.0) × (6.0 − 2.0) × 10⁻³ = 0.032 J
    Check: ½C(V₁² − V₂²) = ½ × 5.0 × 10⁻⁴ × (144 − 16) = 0.032 J
```

*Annotation.* Part (c) can be done either by area or by equation; doing one and checking with the other catches most arithmetic slips. Keep the milli prefix in view: the base of the trapezium is 4.0 × 10⁻³ C, not 4.0 C.

## Worked example 2: a flash unit

A 2200 μF capacitor in a flash unit is charged to 9.0 V. When the flash fires, the p.d. falls to 3.0 V in 1.0 ms. Calculate the energy released and the mean power output of the flash.

```
Energy at 9.0 V:   ½CV² = ½ × 2200 × 10⁻⁶ × 9.0² = 0.0891 J
Energy at 3.0 V:   ½CV² = ½ × 2200 × 10⁻⁶ × 3.0² = 0.0099 J
Energy released:   0.0891 − 0.0099 = 0.0792 J ≈ 0.079 J
Mean power:        0.0792 / 1.0 × 10⁻³ = 79 W
```

*Annotation.* The capacitor stores only a small amount of energy, but it can release it very quickly, which is why capacitors are used where a short, high-power pulse is needed. The figures in this example are invented for the calculation.

## Worked example 3: sharing charge

A 100 μF capacitor is charged to 20 V and disconnected from the supply. It is then connected in parallel with an identical, uncharged 100 μF capacitor. Calculate the energy stored before and after, and comment.

```
Before:  Q = CV = 100 × 10⁻⁶ × 20 = 2.0 × 10⁻³ C
         W = ½CV² = ½ × 100 × 10⁻⁶ × 20² = 0.020 J

After:   charge is conserved, so Q = 2.0 × 10⁻³ C on 200 μF in total
         V = Q/C = 2.0 × 10⁻³ / 200 × 10⁻⁶ = 10 V
         W = ½CV² = ½ × 200 × 10⁻⁶ × 10² = 0.010 J
```

*Annotation.* Charge is conserved but energy stored is not: half of it has gone. It is transferred to internal energy in the resistance of the connecting wires as the current flows (and a little is radiated). A clear answer says **charge is conserved, so the common p.d. is found from total Q over total C**, then uses W = ½CV² for the combination. Do not assume energy is conserved and try to find V from it.

## Why the supply does twice the work

When a capacitor is charged to p.d. V by a supply of constant e.m.f. V, the supply moves a total charge Q through p.d. V, so it does work QV. Only ½QV ends up stored in the capacitor. The other ½QV is dissipated in the resistance of the circuit during charging. This half-and-half split does not depend on the value of the resistance: a larger resistance makes the charging slower but dissipates the same total energy. This is a frequent "explain" question, and the answer must contrast **QV supplied** with **½QV stored**.

## Common mistakes

- **Writing W = QV** for the energy stored. That is the work done by the supply, not the energy in the capacitor.
- **Squaring the difference**, ½C(V₁ − V₂)², instead of taking the difference of squares, ½C(V₁² − V₂²).
- **Forgetting to convert μF and mC** to F and C before substituting.
- **Reading the wrong area** when the graph has Q on the y-axis and V on the x-axis.
- **Assuming energy is conserved when capacitors share charge.** Charge is conserved; stored energy falls.
- **Thinking that halving V halves W.** It quarters it.

## Exam technique for the command words

- **State** (what the area under a V–Q graph represents): "the energy stored", or "the work done in charging the capacitor". Name the axes.
- **Show that** W = ½QV: state that V ∝ Q so the graph is a straight line through the origin, identify the area as a triangle, and write ½ × Q × V. Each of those three steps usually carries credit.
- **Calculate**: write the form you choose, substitute with powers of ten visible, and give the unit (J or mJ).
- **Determine** (from a graph): mark the points you read, show the area as a triangle or trapezium, and include the unit of the area.
- **Explain** (why energy is lost when charge is shared, or why the supply does more work than is stored): name the resistance in which energy is dissipated, and compare the two energies numerically if values are given.

## Related resources

- [Capacitance study guide](/resources/a-physics-capacitance/) — the whole of Topic 19
- [Energy stored in a capacitor revision notes](/resources/cambridge-a-level-physics-9702-a-energy-stored-in-a-capacitor-revision-notes/)
- [Energy stored in a capacitor practice questions](/resources/cambridge-a-level-physics-9702-a-energy-stored-in-a-capacitor-practice/)
- [Discharging a capacitor study guide](/resources/cambridge-a-level-physics-9702-a-discharging-a-capacitor/) — the next subtopic, where stored energy is released through a resistor

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
