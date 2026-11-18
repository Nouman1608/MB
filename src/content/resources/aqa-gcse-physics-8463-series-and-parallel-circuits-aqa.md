---
title: "AQA GCSE Physics (8463): Series and parallel circuits"
resourceType: "study-guides"
subject: "physics"
level: ["gcse"]
topic: "Electricity"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8463"]
syllabusSeries: "For first teaching 2016"
order: 2.2
syllabusTopics:
  - qualification: "gcse"
    topic: "electricity-aqa-gcse"
    subtopic: "series-and-parallel-circuits-aqa"
description: "AQA GCSE Physics 4.2.2 in depth: current, pd and resistance rules for series and parallel, equivalent resistance, sensor circuits and worked calculations."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers one subtopic of AQA GCSE Physics (8463) in depth: **4.2.2 Series and parallel circuits**. It is
assessed on Paper 1 at Foundation and Higher Tier, with no Higher-only content. You need the rules for each type of
connection, a qualitative explanation of why adding resistors changes the total resistance, and confident
calculation in dc series circuits.

For a quick recap, use the [series and parallel circuits revision notes](/resources/aqa-gcse-physics-8463-series-and-parallel-circuits-aqa-revision-notes/).
To test yourself, try the [series and parallel circuits practice questions](/resources/aqa-gcse-physics-8463-series-and-parallel-circuits-aqa-practice/).
The equations V = IR and Q = It come from the previous subtopic, explained in the
[current, potential difference and resistance study guide](/resources/aqa-gcse-physics-8463-current-potential-difference-and-resistance-aqa/).

## What the specification asks for

Components can be joined **in series** or **in parallel**, and some circuits contain both. You must be able to:

- use circuit diagrams to construct and check series and parallel circuits with a variety of common components
- describe the difference between series and parallel circuits
- explain qualitatively why adding resistors in series increases the total resistance, while adding them in
  parallel decreases it
- explain the design and use of dc series circuits for measurement and testing
- calculate currents, potential differences and resistances in dc series circuits
- solve problems with resistors in series using the idea of **equivalent resistance**.

You are **not** required to calculate the total resistance of two resistors joined in parallel.

## The rules, and the reason behind each

| Quantity | Series | Parallel |
|---|---|---|
| Current | The same through each component | Total current = sum of the currents in the separate branches |
| Potential difference | The supply pd is shared between the components | The pd across each branch is the same |
| Resistance | R_total = R₁ + R₂ | Total is less than the smallest individual resistance |

**Why current is the same in series.** There is only one path. Every coulomb that leaves the cell passes through
each component in turn, so charge cannot pile up anywhere and the rate of flow is equal at every point.

**Why pd is shared in series.** The supply gives each coulomb a fixed amount of energy. In series, the charge
transfers part of that energy in each component, so the pds across the components add up to the supply pd. The
larger resistance takes the larger share, because V = IR and I is the same for both.

**Why pd is the same in parallel.** Each branch is connected directly across the same two points, so each branch
has the full pd across it.

**Why current splits in parallel.** At a junction the charge divides between paths; none is lost, so the branch
currents add up to the current leaving the supply. The branch with the smaller resistance carries the larger
current.

## Explaining the change in total resistance

These explanations are qualitative: examiners want the idea, not a formula.

- **Adding a resistor in series**: the charge must now pass through another resistor as well, so it is harder for
  current to flow. For the same supply pd the current falls, so the total resistance has **increased**.
- **Adding a resistor in parallel**: the charge has an **extra path** to flow through. With the same pd across each
  branch, the new branch adds its own current, so the total current from the supply rises. A larger current for
  the same pd means the total resistance has **decreased**, to below that of the smallest resistor.

Although you never calculate parallel resistance with a formula, you can still find it from measurements: divide
the supply pd by the total current. If 6.0 V drives a total of 1.5 A into a parallel network, the network behaves
like 6.0 ÷ 1.5 = 4.0 Ω.

## Method for series calculations

1. Add the resistances: R_total = R₁ + R₂ (+ R₃ ...). This is the **equivalent resistance**.
2. Find the current: I = V_supply ÷ R_total. It is the same everywhere.
3. Find each pd: V = I × R for each component.
4. Check that the pds add up to the supply pd.

**Worked example 1 (three resistors).** A 9.0 V supply is connected to 5.0 Ω, 10 Ω and 15 Ω resistors in
series. Find the current and the pd across each.

```
R_total = 5.0 + 10 + 15 = 30 Ω
I = 9.0 ÷ 30 = 0.30 A
V across 5.0 Ω = 0.30 × 5.0 = 1.5 V
V across 10 Ω  = 0.30 × 10  = 3.0 V
V across 15 Ω  = 0.30 × 15  = 4.5 V
Check: 1.5 + 3.0 + 4.5 = 9.0 V
```

The pds are in the same ratio as the resistances, 1 : 2 : 3.

**Worked example 2 (finding an unknown).** A lamp and a 20 Ω resistor are in series with a 12 V supply. The
voltmeter across the resistor reads 8.0 V. Find the resistance of the lamp.

```
I = 8.0 ÷ 20 = 0.40 A          (same current through the lamp)
V_lamp = 12 − 8.0 = 4.0 V
R_lamp = 4.0 ÷ 0.40 = 10 Ω
```

## Method for parallel branches

Treat each branch as its own simple circuit with the full supply pd across it, then add the branch currents.

**Worked example 3.** A 6.0 V battery supplies two parallel branches: a 12 Ω resistor, and a 20 Ω resistor. Find
each branch current, the total current and the equivalent resistance of the network.

```
I₁ = 6.0 ÷ 12 = 0.50 A
I₂ = 6.0 ÷ 20 = 0.30 A
I_total = 0.50 + 0.30 = 0.80 A
Equivalent resistance = 6.0 ÷ 0.80 = 7.5 Ω  (less than 12 Ω, the smallest)
```

**Worked example 4 (mixed circuit).** An 8.0 Ω resistor is in series with a parallel pair of lamps. The supply is
12 V and the ammeter next to the supply reads 1.0 A. Find the pd across the lamps, and the current in one lamp if
the two lamps are identical.

```
V across 8.0 Ω = 1.0 × 8.0 = 8.0 V
V across the parallel pair = 12 − 8.0 = 4.0 V   (same across each lamp)
Identical lamps share the current equally: 1.0 ÷ 2 = 0.50 A each
```

## Series circuits for measurement and testing

A sensor (thermistor or LDR) in series with a fixed resistor forms a circuit whose output pd changes with
conditions. Because the current is common, each component's share of the supply pd is proportional to its
resistance. Which component the voltmeter is across decides whether the reading rises or falls.

**Worked example 5 (voltmeter across the fixed resistor).** A thermistor is in series with a 2.0 kΩ resistor
across 6.0 V. The thermistor is 4.0 kΩ when cold and 1.0 kΩ when warm. Find the reading of a voltmeter across the
fixed resistor in each case.

```
Cold: R_total = 4000 + 2000 = 6000 Ω;  I = 6.0 ÷ 6000 = 0.0010 A
      V_fixed = 0.0010 × 2000 = 2.0 V
Warm: R_total = 1000 + 2000 = 3000 Ω;  I = 6.0 ÷ 3000 = 0.0020 A
      V_fixed = 0.0020 × 2000 = 4.0 V
```

As the room warms, the thermistor's resistance falls, it takes a smaller share of the pd, and the fixed
resistor's share rises. A circuit that must react to warming takes its output across the fixed resistor; one that
must react to cooling takes it across the thermistor.

## Common mistakes

- Saying current "is shared" in series, or "is the same" in parallel. It is the other way round.
- Adding resistances in parallel as if they were in series.
- Giving a parallel network a total resistance larger than one of its branches.
- Using the supply pd for one component in a series circuit instead of that component's own pd.
- Explaining parallel resistance with "more resistors means less resistance", which repeats the question. Give
  the extra path and the larger current for the same pd.

## Exam technique

- **Calculate**: write the rule you are using (for example "pd is shared, so V = 12 − 8.0") before the numbers.
- **Explain** a change in resistance: link the extra path (or extra resistor) to the change in current at constant
  pd, then state the change in resistance.
- **Describe** the difference between series and parallel: give a matching pair of statements, such as "in series
  the current is the same everywhere; in parallel it divides between branches".
- Multi-step questions often carry an error forward, so set out each step even if an early value may be wrong.

## Official syllabus

AQA GCSE Physics (8463) specification, for teaching from September 2016 onwards, for exams in 2018 onwards
(Version 1.1, 30 September 2019), published by AQA. This guide covers 4.2.2 Series and parallel circuits.
