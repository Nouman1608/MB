---
title: "Cambridge A Level Physics (9702): Potential difference and power"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Electricity"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 9.2
syllabusTopics:
  - qualification: "a-level"
    topic: "as-electricity"
    subtopic: "as-potential-difference-and-power"
description: "A focused guide to 9.2 Potential difference and power in Cambridge AS Physics 9702: defining p.d., V = W/Q, and choosing between P = VI, I²R and V²/R."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **9.2 Potential difference and power** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (AS Level). The broader [Electricity study guide](/resources/as-physics-electricity/) lists the definitions and the three power equations; this page goes further: what the definition of potential difference means in energy terms, how the power equations are derived from it, how to choose the right one, and why the same pair of resistors behaves oppositely in series and in parallel. For quick recall use the [Potential difference and power revision notes](/resources/cambridge-a-level-physics-9702-as-potential-difference-and-power-revision-notes/), and for exam-style questions the [Potential difference and power practice questions](/resources/cambridge-a-level-physics-9702-as-potential-difference-and-power-practice/).

## What 9.2 asks you to do

Candidates should be able to:

- **define** the potential difference across a component as the energy transferred per unit charge
- recall and use **V = W/Q**
- recall and use **P = VI**, **P = I²R** and **P = V²/R**

## Defining potential difference

The **potential difference (p.d.)** across a component is the **energy transferred per unit charge** as charge passes through the component. In a resistor, the energy is transferred from electrical energy to thermal energy (internal energy) of the resistor; in a lamp, to thermal energy and light; in a motor, partly to kinetic energy.

```
V = W / Q
V = potential difference (V),  W = energy transferred (J),  Q = charge (C)
```

So **one volt is one joule per coulomb** (1 V = 1 J C⁻¹). A p.d. of 6.0 V across a lamp means that every coulomb passing through the lamp transfers 6.0 J of energy to it.

**Base units of the volt.** Since 1 J = 1 kg m² s⁻² and 1 C = 1 A s:

```
1 V = 1 J C⁻¹ = 1 kg m² s⁻² / (A s) = 1 kg m² s⁻³ A⁻¹
```

Rearranging V = W/Q gives the energy transferred, W = QV. For a single charged particle moving through a p.d., the same equation gives the energy it gains or loses. An electron (charge magnitude 1.60 × 10⁻¹⁹ C) accelerated through 2.0 kV gains 1.60 × 10⁻¹⁹ × 2000 = 3.2 × 10⁻¹⁶ J of kinetic energy.

Combining with Q = It from [Electric current](/resources/cambridge-a-level-physics-9702-as-electric-current/):

```
W = QV = VIt
```

This is the energy transferred by a component in time t when the current through it is I and the p.d. across it is V.

## Deriving the three power equations

Power is the rate of energy transfer, P = W/t. Substituting W = VIt:

```
P = VIt / t = VI
```

Then using V = IR (the definition of resistance from 9.3):

```
P = VI = (IR)I = I²R
P = VI = V(V/R) = V²/R
```

All three give the same answer for the same component; they are not three different powers. The unit is the watt, 1 W = 1 J s⁻¹ = 1 V A.

## Choosing the right equation

Pick the equation that uses the quantities you know, or the quantity that is the **same** for the components you are comparing.

| You know | Use |
|---|---|
| V and I | P = VI |
| I and R | P = I²R |
| V and R | P = V²/R |

**Components in series share the same current.** Use P = I²R: the component with the **larger** resistance dissipates **more** power.

**Components in parallel share the same p.d.** Use P = V²/R: the component with the **smaller** resistance dissipates **more** power.

This reversal surprises many students, and it is tested often.

## Worked example 1: a kettle

A kettle is rated 2.4 kW, 230 V. Calculate (a) the current, (b) the resistance of its element, (c) the energy transferred and the charge that flows in 3.0 minutes, and (d) its power on a 210 V supply, assuming its resistance is unchanged.

```
(a) I = P / V = 2400 / 230 = 10.4 A
(b) R = V² / P = 230² / 2400 = 22.0 Ω
(c) W = Pt = 2400 × 180 = 4.32 × 10⁵ J
    Q = W / V = 4.32 × 10⁵ / 230 = 1.88 × 10³ C   (check: It = 10.4 × 180 ≈ 1.88 × 10³ C)
(d) P = V² / R = 210² / 22.0 = 2.0 × 10³ W
```

*Annotation.* In (d), using P = VI with the old current of 10.4 A would be wrong, because the current also falls when the voltage falls. With R fixed, P ∝ V², so a drop to 210/230 = 0.913 of the voltage gives 0.913² = 0.834 of the power. Always ask which quantity stays constant.

## Worked example 2: series versus parallel

Resistors of 12 Ω and 4.0 Ω are connected (i) in series and (ii) in parallel to an 8.0 V supply of negligible internal resistance. Find the power dissipated in each resistor in each arrangement.

```
(i) series: total R = 16 Ω, I = 8.0 / 16 = 0.50 A (same in both)
    12 Ω: P = I²R = 0.50² × 12 = 3.0 W
    4.0 Ω: P = I²R = 0.50² × 4.0 = 1.0 W

(ii) parallel: p.d. across each = 8.0 V
    12 Ω: P = V²/R = 64 / 12 = 5.3 W
    4.0 Ω: P = V²/R = 64 / 4.0 = 16 W
```

In series, the 12 Ω resistor dissipates more; in parallel, the 4.0 Ω resistor does. The total power is also much larger in parallel (21 W against 4.0 W), because the combined resistance is smaller, so the supply delivers a larger current.

## Power ratings and maximum values

A component's **power rating** is the maximum power it can dissipate safely. For a resistor of known resistance, the rating sets a maximum current and maximum p.d.:

```
I_max = √(P / R)        V_max = √(PR)
```

A 100 Ω resistor rated 0.25 W can take at most √(0.25 / 100) = 0.050 A, or a p.d. of √(0.25 × 100) = 5.0 V.

**Power wasted in connecting leads.** Leads and cables have small resistances. Because the same current passes through the cable as through the appliance, the power wasted in the cable is I²R_cable. A cable of total resistance 0.15 Ω carrying 8.0 A wastes 8.0² × 0.15 = 9.6 W and has a p.d. of 1.2 V across it, which is why high-current appliances need thick cables.

## When P = I²R is not the whole story

P = VI always gives the total rate of energy transfer to a component. For a resistor, all of it becomes thermal energy, so P = VI = I²R = V²/R. For a **motor**, some of the energy becomes kinetic or gravitational potential energy, so the total input power is VI, while I²R gives only the part dissipated as heating in the coil's resistance. Use VI for the input power of anything that is not purely resistive.

## Common mistakes

- **Defining p.d. as "the energy per electron"** or "the force that pushes current". The definition is energy transferred **per unit charge**.
- **Assuming the current stays the same** when the supply voltage changes. For a fixed resistance, the current changes too, and P ∝ V².
- **Using P = I²R across a series pair with different currents**, or P = V²/R with the supply voltage for one resistor in a series circuit, where the p.d. across each resistor is only part of the supply.
- **Forgetting to convert kW to W or minutes to s** before using W = Pt.
- **Applying P = I²R to a motor** to find its input power.

## Exam technique for the command words

- **Define** (p.d.): "energy transferred per unit charge". Add "from electrical to other forms" if asked to explain the definition.
- **Show that** (the power equations): start from P = W/t and W = QV, then substitute Q = It and V = IR, line by line.
- **Calculate**: decide first which of V, I or R is known or shared, then choose the equation; check by a second equation if time allows.
- **Explain** (which component dissipates more power): name the shared quantity (current in series, p.d. in parallel), then state the equation and the conclusion.
- **Suggest** (why a real answer differs): resistance may change with temperature, as in a filament lamp.

## Related resources

- [Electricity study guide](/resources/as-physics-electricity/) — the whole of Topic 9
- [Potential difference and power revision notes](/resources/cambridge-a-level-physics-9702-as-potential-difference-and-power-revision-notes/)
- [Potential difference and power practice questions](/resources/cambridge-a-level-physics-9702-as-potential-difference-and-power-practice/)
- [Resistance and resistivity](/resources/cambridge-a-level-physics-9702-as-resistance-and-resistivity/) — subtopic 9.3

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
