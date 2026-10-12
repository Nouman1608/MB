---
title: "OxfordAQA International GCSE Physics: Series and parallel circuits and heating (9203)"
seoTitle: "OxfordAQA IGCSE Physics Series and Parallel Circuits"
resourceType: "study-guides"
subject: "physics"
level: ["igcse"]
topic: "Series and parallel circuits and heating effect of current"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9203"]
syllabusSeries: "For exams May/June 2018 onwards"
order: 88
syllabusTopics:
  - qualification: "igcse"
    topic: "electricity-and-magnetism-oxfordaqa-igcse"
    subtopic: "electrical-circuits-oxfordaqa-igcse"
description: "Study guide to series and parallel circuits, cells in series and the heating effect of current for OxfordAQA International GCSE Physics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
This study guide follows the OxfordAQA International GCSE Physics (9203) specification, for exams May/June 2018 onwards, section 3.5.1 (electrical circuits), statements p to t: cells in series, series and parallel circuits, mixed circuits, and the heating effect of current. Charge, current and potential difference, circuit symbols, and resistance and I-V graphs are covered in other Marlbridge pages; this one teaches only how components behave when they are joined together, and why current heats a conductor.

Use the [course hub](/boards/oxfordaqa/igcse/physics/) for the full topic list and the [printable checklist](/checklists/oxfordaqa/igcse/physics/) to tick off each outcome. Once you have read this guide, test yourself with the [revision notes](/resources/oxfordaqa-igcse-physics-series-and-parallel-circuits-and-heating-effect-of-revision-notes/) and the [practice questions](/resources/oxfordaqa-igcse-physics-series-and-parallel-circuits-and-heating-effect-of-practice/). The [10-minute diagnostics](/diagnostics/) show which topics need most work. For energy efficiency in general, see the existing [energy study guide](/resources/igcse-oxfordaqa-physics-energy/).

## What this unit covers

| Specification | You must be able to | Where |
|---|---|---|
| 3.5.1 p | State that the combined voltage of cells in series is the sum of their voltages | Section 1 |
| 3.5.1 q | Describe series and parallel joining, and circuits with both | Sections 2 and 5 |
| 3.5.1 r | Apply the series rules for resistance, current and potential difference | Section 3 |
| 3.5.1 s | Apply the parallel rules for resistance, current and potential difference | Section 4 |
| 3.5.1 t | Explain resistive heating, and compare filament bulbs with CFLs | Sections 6 and 7 |

The equation you need throughout is potential difference = current x resistance, V = IR, with V in volts (V), I in amperes (A) and R in ohms (Ω). Every calculation below is solved with it. Where the specification gives no formula, such as for the combined resistance of a parallel pair, this guide uses V = IR on the whole circuit instead.

## 1. Cells in series (3.5.1 p)

A battery is cells joined end to end, positive terminal to negative terminal. The combined voltage of several sources in series is their sum.

- Three 1.5 V cells in series: 1.5 + 1.5 + 1.5 = **4.5 V**.
- To make 6.0 V from 1.5 V cells you need 6.0 / 1.5 = **4 cells**.
- To make 7.5 V you need 7.5 / 1.5 = **5 cells**.

A bigger voltage drives a bigger current through the same resistance, because V = IR gives I = V/R. A torch with more cells in series is therefore brighter. Check that the cells all point the same way: the sum rule is for cells that push charge in the same direction round the loop.

## 2. Two ways of joining components (3.5.1 q)

**In series**, components are joined one after another in a single loop, so there is only one path for the charge.

**In parallel**, components are joined on separate branches between the same two points, so charge has more than one path.

Many real circuits contain both: a part in series with a parallel block. Always decide, for each part of a circuit, whether you are looking at one path or several. A quick test is to follow the current from the positive terminal. If it meets a junction and divides, the components after the junction are in parallel. If there is no junction between two components, they are in series.

An ammeter goes in series, because it must have the current through the component pass through it. A voltmeter goes in parallel across the component, because it measures the potential difference between two points.

## 3. Series rules (3.5.1 r)

| Quantity | Rule for components in series |
|---|---|
| Combined resistance | The sum of the resistances: R_total = R1 + R2 + ... |
| Current | The same in every component |
| Potential difference | The supply potential difference is divided up between the components |

Because the resistances add, the total is always larger than the biggest single resistance. Adding another component in series raises the resistance and lowers the current.

The shared potential difference means the pd across each component adds up to the supply pd. The larger resistance takes the larger share, because the same current passes through each and V = IR.

**Worked example 1.** A 10 V supply is connected to a 15 Ω resistor and a 35 Ω resistor in series. Work out the current, and the pd across each resistor.

- Total resistance = 15 + 35 = 50 Ω.
- Current, from I = V/R = 10 / 50 = **0.20 A**. This same current is in both resistors.
- pd across the 15 Ω resistor = 0.20 x 15 = **3.0 V**.
- pd across the 35 Ω resistor = 0.20 x 35 = **7.0 V**.
- Check: 3.0 + 7.0 = 10 V, the supply pd.

**Series weakness.** If one component fails and breaks the loop, the current stops everywhere. This is why a series string of lamps all go out together.

## 4. Parallel rules (3.5.1 s)

| Quantity | Rule for components in parallel |
|---|---|
| Combined resistance | Less than the resistance of any single branch |
| Current | The supply current splits between the branches and rejoins afterwards |
| Potential difference | The same across every branch |

The branch currents add up to the current drawn from the supply. A branch with a smaller resistance carries a larger share of the current, because the pd across it is the same and I = V/R.

To see why the combined resistance falls, think about the whole circuit. Each extra branch gives charge another route, so more current flows from the same supply. The combined resistance is the supply pd divided by the supply current, R = V/I, and a bigger current for the same pd means a smaller resistance.

**Worked example 2.** A 15 V supply is connected across a 50 Ω resistor and a 75 Ω resistor in parallel. Work out each branch current, the current from the supply, and the combined resistance.

- pd across each branch = 15 V.
- Branch 1: I = 15 / 50 = **0.30 A**.
- Branch 2: I = 15 / 75 = **0.20 A**.
- Supply current = 0.30 + 0.20 = **0.50 A**.
- Combined resistance = V/I = 15 / 0.50 = **30 Ω**.
- This is less than 50 Ω, the smaller of the two, as the rule predicts.

**Adding a branch.** Now connect a third resistor of 150 Ω across the same supply. Its current is 15 / 150 = 0.10 A. The other branches are unchanged at 0.30 A and 0.20 A, because each still has 15 V across it. The supply current rises to 0.30 + 0.20 + 0.10 = 0.60 A and the combined resistance falls to 15 / 0.60 = 25 Ω. This is why plugging in more appliances to a mains supply draws more current from it, and why the other appliances keep working normally.

**Equal branches.** Two equal resistors in parallel share the supply current equally, so each carries half and the pair has half the resistance of one. Two 60 Ω resistors in parallel behave as 30 Ω.

**Parallel strength.** If one branch breaks, the other branches still have the full supply pd across them and carry on working.

## 5. Mixed circuits (3.5.1 q)

A mixed circuit has a series part and a parallel block. Treat the parallel block as one component in series with the rest. Work in this order:

1. Find the total resistance or the supply current, whichever the question gives you.
2. Use the series rules to find the pd across the series resistor, then subtract from the supply pd to find the pd across the parallel block.
3. That pd is the same across every branch, so use I = V/R on each branch.
4. Check that the branch currents add to the supply current.

**Worked example 3.** A 20 V supply is connected to a 28 Ω resistor in series with a parallel block of a 20 Ω resistor and a 30 Ω resistor. An ammeter in the supply lead reads 0.50 A. Find the pd across the block, the current in each branch and the resistance of the block.

- The supply current passes through the 28 Ω resistor: pd = 0.50 x 28 = 14 V.
- pd across the block = 20 - 14 = **6.0 V**.
- 20 Ω branch: 6.0 / 20 = **0.30 A**. 30 Ω branch: 6.0 / 30 = **0.20 A**.
- Check: 0.30 + 0.20 = 0.50 A, which matches the ammeter.
- Resistance of the block = 6.0 / 0.50 = **12 Ω**.
- Total resistance = 28 + 12 = 40 Ω, which agrees with 20 / 0.50 = 40 Ω.

The block (12 Ω) is smaller than either branch (20 Ω and 30 Ω), as the parallel rule says.

## 6. The heating effect of current (3.5.1 t)

When charge flows through a resistor, the resistor gets hot. The charges moving through the wire are electrons. As they drift along they collide with the stationary atoms (positive ions) of the wire. Each collision transfers some energy from the moving charge to the atoms, which vibrate more. More vibration means a higher temperature, so the wire becomes hot and transfers thermal energy to its surroundings.

Four points to use in explanations:

- The energy comes from the supply, which does work to push charge through the component.
- The charge is not used up. The same current leaves a resistor as enters it.
- A heater element is made of wire with a high resistance, so a large share of the energy supplied is transferred as heat in the element.
- The connecting wires have low resistance, so little energy is transferred in them and they stay cool by comparison.

In a series circuit the same charge passes through each resistor, so the resistor with the larger pd transfers more energy, because the energy per unit charge is the pd. In Worked example 1, the 35 Ω resistor (7.0 V) transfers more energy than the 15 Ω resistor (3.0 V).

## 7. Wasted energy, filament bulbs and CFLs (3.5.1 t)

In a filament lamp the filament is heated until it glows. Most of the electrical energy goes to heating, and only a small fraction is transferred as light. A lot of energy is wasted. Compact fluorescent lamps (CFLs), sold as power saving lamps, waste less energy as heat for the same light.

Efficiency compares useful output with total input:

**efficiency = useful energy transferred by the device / total energy supplied to the device**

You may give it as a decimal or as a percentage. Multiply by 100 for a percentage.

**Worked example 4.** Each second, a filament lamp is supplied with 60 J and transfers 3.0 J as light. A CFL giving the same light is supplied with 12 J each second. Compare them.

- Filament: 3.0 / 60 = 0.05, so **5.0%** efficient. Energy wasted each second = 60 - 3.0 = **57 J**.
- CFL: 3.0 / 12 = 0.25, so **25%** efficient. Energy wasted each second = 12 - 3.0 = **9.0 J**.
- Energy saved by using the CFL for one hour (3600 s) = (60 - 12) x 3600 = 172 800 J, so **1.73 x 10^5 J**.

The same amount of light costs far less energy. When you buy a new appliance you have a choice: look for the one that transfers energy more efficiently, because the less energy wasted, the less the user has to supply. This matters both for the user's bills and for the total amount of energy that has to be generated.

## Common errors

- Saying the current is "used up" as it goes round a series circuit. It is the energy that is transferred; the current is the same everywhere in a series loop.
- Believing a parallel branch gets "its share" of the supply pd. Every branch gets the whole supply pd.
- Adding branch resistances in a parallel circuit to find the combined resistance.
- Expecting the combined resistance of a parallel pair to be larger than its smallest branch.
- Forgetting that a series part of a mixed circuit carries the full supply current.
- Writing that heating happens because electrons "rub" the wire. Name the collisions with stationary atoms.
- Calling a CFL "100% efficient" because it feels cooler. It still wastes some energy.

## Official syllabus

OxfordAQA International GCSE Physics (9203) specification, for exams May/June 2018 onwards, published by OxfordAQA. Section 3.5.1 (electrical circuits), statements p to t.
