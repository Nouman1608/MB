---
title: "Cambridge A Level Physics (9702): Potential difference and power -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge AS Physics 9702 9.2: p.d. as energy per unit charge, V = W/Q, three power equations, series and parallel, and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Subtopic 9.2 of Cambridge International AS & A Level Physics 9702 (2025–2027) asks you to define potential difference, use V = W/Q, and use P = VI, P = I²R and P = V²/R. These notes are for fast recall; the [Potential difference and power study guide](/resources/cambridge-a-level-physics-9702-as-potential-difference-and-power/) has the derivations and annotated examples, and the [Potential difference and power practice questions](/resources/cambridge-a-level-physics-9702-as-potential-difference-and-power-practice/) let you apply them.

## Definition and units

- **Potential difference** across a component = **energy transferred per unit charge** passing through it.
- V = W/Q, so W = QV.
- 1 V = 1 J C⁻¹ = 1 kg m² s⁻³ A⁻¹ in base units.
- With Q = It: **W = VIt**.
- A charge q moving through a p.d. V gains or loses energy qV. An electron accelerated through 5.0 kV gains 1.60 × 10⁻¹⁹ × 5000 = 8.0 × 10⁻¹⁶ J.

## The power equations

```
P = W/t = VI
P = I²R      (substitute V = IR)
P = V²/R     (substitute I = V/R)
1 W = 1 J s⁻¹ = 1 V A
```

| Known quantities | Equation |
|---|---|
| V, I | P = VI |
| I, R | P = I²R |
| V, R | P = V²/R |
| P, t | W = Pt |

## Series or parallel: which resistor gets more power?

| Arrangement | Shared quantity | Equation to compare | More power in |
|---|---|---|---|
| Series | Current I | P = I²R | Larger resistance |
| Parallel | p.d. V | P = V²/R | Smaller resistance |

Example: 20 Ω and 30 Ω in series on 10 V share I = 0.20 A, giving 0.80 W and 1.2 W. In parallel on 10 V they give 5.0 W and 3.3 W.

## Changing the supply voltage

- If R is constant, P ∝ V². Halving V quarters P.
- Current also changes (I ∝ V), so never reuse the old current.
- Filament lamps do not have constant R: at lower voltage the filament is cooler and its resistance smaller, so the power falls by less than the V² rule predicts.

## Ratings and limits

```
I_max = √(P_rated / R)       V_max = √(P_rated × R)
```

- Leads and cables: same current as the appliance, so cable loss = I²R_cable; the p.d. across the cable is IR_cable.

## Motors and other non-resistive components

- **Input power** = VI always.
- I²R gives only the heating in the coil's resistance.
- Useful output (for example, rate of gain of gravitational potential energy) = input power − losses.
- Efficiency = useful output ÷ total input.

## Condensed worked example

A 2.0 kW heater runs from 250 V for 5.0 minutes.

```
I = P / V = 2000 / 250 = 8.0 A
R = V / I = 250 / 8.0 = 31 Ω       (or V² / P = 62 500 / 2000 = 31.25 Ω)
W = Pt = 2000 × 300 = 6.0 × 10⁵ J
Q = It = 8.0 × 300 = 2400 C         (check: W / V = 6.0 × 10⁵ / 250 = 2400 C)
```

Two independent routes to the same charge are a quick way to catch an arithmetic slip under exam conditions.

## Key terms

| Term | Meaning |
|---|---|
| Potential difference | Energy transferred per unit charge through a component |
| Volt | One joule per coulomb |
| Power | Rate of energy transfer |
| Watt | One joule per second |
| Power rating | Maximum power a component can safely dissipate |
| Internal energy (thermal energy) | Where the energy goes in a resistor |

## Exam traps

- Defining p.d. as "energy per electron" or "a force".
- Reusing the original current after the voltage changes.
- Putting the supply voltage into V²/R for one resistor of a series pair.
- Writing P = I²R for the total input power of a motor.
- Forgetting that kW must be converted to W and minutes to seconds.
- Assuming a filament lamp's power falls exactly with V².
- Rounding intermediate values too early (keep three or more significant figures until the end).

## Self-test

1. Define potential difference.
2. Express the volt in SI base units.
3. 18 J of energy is transferred when 3.0 C passes through a lamp. Find the p.d.
4. Show that P = I²R, starting from P = VI.
5. A heater is rated 1.2 kW, 230 V. Find its resistance.
6. The heater in question 5 is used on 207 V. Find its power, assuming constant resistance.
7. Which dissipates more power in series: a 10 Ω or a 47 Ω resistor? Why?
8. Which dissipates more power in parallel: a 10 Ω or a 47 Ω resistor? Why?
9. Find the energy gained by an electron accelerated through 250 V.
10. A motor takes 3.0 A from a 12 V supply. State its input power.
11. Find the maximum p.d. across a 50 Ω resistor rated 2.0 W.
12. Why does the power of a filament lamp on half its rated voltage exceed a quarter of its rated power?

**Answers:** 1. Energy transferred per unit charge passing through a component. 2. kg m² s⁻³ A⁻¹. 3. V = 18 ÷ 3.0 = 6.0 V. 4. V = IR, so P = (IR)I = I²R. 5. R = 230² ÷ 1200 = 44 Ω. 6. P = 207² ÷ 44.1 = 972 W, about 0.97 kW. 7. The 47 Ω resistor: the current is the same, and P = I²R increases with R. 8. The 10 Ω resistor: the p.d. is the same, and P = V²/R is larger for smaller R. 9. W = 1.60 × 10⁻¹⁹ × 250 = 4.0 × 10⁻¹⁷ J. 10. P = VI = 36 W. 11. V_max = √(2.0 × 50) = 10 V. 12. At lower voltage the filament is cooler, so its resistance is smaller than at its rated voltage, and P = V²/R is larger than if R had stayed the same.

## Related resources

- [Electricity revision notes](/resources/as-physics-electricity-revision-notes/) — the whole of Topic 9
- [Electric current revision notes](/resources/cambridge-a-level-physics-9702-as-electric-current-revision-notes/) — subtopic 9.1
- [Potential difference and power practice questions](/resources/cambridge-a-level-physics-9702-as-potential-difference-and-power-practice/)
