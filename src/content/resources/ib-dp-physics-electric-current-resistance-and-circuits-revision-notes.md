---
title: "IB DP Physics: Electric current, resistance and circuits (DP Physics) -- Revision Notes"
seoTitle: "IB DP Physics B.5 Current and Circuits Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["ib"]
topic: "Electric current, resistance and circuits"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 282
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-b"
    subtopic: "ib-dp-physics-b-5"
description: "Condensed IB DP Physics B.5 revision notes: definitions, formulas, method steps, a self-test with answers and the usual lost marks, for SL and HL."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense sub-topic B.5, Current and circuits, from the IB *Physics guide* (first assessment 2025), for SL and HL. The guide lists no additional higher level content here. For full explanations and worked examples read the [study guide](/resources/ib-dp-physics-electric-current-resistance-and-circuits/), and test yourself with the [practice questions](/resources/ib-dp-physics-electric-current-resistance-and-circuits-practice/). Not sure where to start? Try the [free 10-minute diagnostics](/diagnostics/).

Related pages: the [course hub](/boards/ib/ib-dp/physics/), the [printable checklist](/checklists/ib/ib-dp/physics/) and [work, energy, power and efficiency](/resources/ib-dp-physics-work-energy-power-and-efficiency/).

## Definitions to state precisely

- **emf (ε):** the energy transferred to each coulomb of charge by the cell. Unit: volt.
- **Current (I):** the rate of flow of charge, I = Δq/Δt. Unit: ampere (C s⁻¹).
- **Potential difference (V):** work done per unit charge when a positive charge is moved from one point to another along the route of the current, V = W/q. 1 V = 1 J C⁻¹.
- **Resistance (R):** R = V/I. Unit: ohm.
- **Resistivity (ρ):** a property of the material, ρ = RA/L. Unit: Ω m.
- **Ohm's law:** at constant temperature, current is directly proportional to p.d.

## Formulas

| Quantity | Relationship | Notes |
|---|---|---|
| Charge | q = IΔt | t in seconds |
| Energy | W = Vq = VIt | Joules |
| Resistance of a wire | R = ρL/A | A = πd²/4 for a round wire |
| Power | P = IV = I²R = V²/R | Pick the form that fits the data |
| Series | Rs = R₁ + R₂ + … | Same current |
| Parallel | 1/Rp = 1/R₁ + 1/R₂ + … | Same p.d. |
| Real cell | ε = I(R + r) | V = ε − Ir |

## Origin of resistance and conduction

1. Conductors have many mobile charge carriers; insulators have very few.
2. In a metal the p.d. drives electrons through a lattice of positive ions.
3. Electrons collide with vibrating ions and transfer energy to the lattice. That is the origin of resistance, and of the heating effect.
4. Higher temperature means larger vibrations, more collisions, higher resistance in a metal.
5. A metal at constant temperature is ohmic. A filament lamp, thermistor and LDR are non-ohmic.

## Method boxes

**Series-parallel network**

1. Collapse each parallel group into one equivalent resistor.
2. Add the series resistances to get the total.
3. Find the supply current from I = V/R.
4. Work back out: p.d. = current × resistance across each part.
5. Split the p.d. across a parallel group into branch currents.
6. Check that branch currents sum to the supply current and p.d.s sum to the supply p.d.

**Internal resistance from two readings**

1. Write ε = I₁(R₁ + r) and ε = I₂(R₂ + r).
2. Set them equal and solve for r.
3. Substitute back to find ε.
4. Or from a graph of terminal p.d. against current: intercept = ε, gradient = −r.

**Potential divider**

1. Output across a component = supply p.d. × its resistance ÷ total resistance.
2. If a thermistor or LDR changes, its share changes in the same direction as its resistance.

## Worked reminders

- **Charge and energy.** 2.4 A for 5.0 minutes gives q = 2.4 × 300 = 720 C. At 3.0 V the energy is 3.0 × 720 = 2.2 × 10³ J.
- **Resistivity.** A wire of resistance 8.0 Ω has area 2.0 × 10⁻⁷ m² and length 1.5 m. ρ = RA/L = (8.0 × 2.0 × 10⁻⁷) ÷ 1.5 = 1.1 × 10⁻⁶ Ω m.
- **Power.** 0.48 A through 5.0 Ω: P = I²R = 0.48² × 5.0 = 1.15 W, so 1.2 W to 2 significant figures.
- **Lost volts.** A 1.5 V cell with r = 0.60 Ω supplying 0.50 A has Ir = 0.30 V lost, so the terminal p.d. is 1.2 V.

## I–V graphs at a glance

| Component | Graph of I against V | Why |
|---|---|---|
| Metal wire, constant temperature | Straight line through the origin | R constant, so ohmic |
| Filament lamp | Line bends towards the V axis as V rises | Filament heats, lattice vibrates more, R rises |
| Thermistor (common type) | Line bends towards the I axis as current heats it | Heating frees more carriers, R falls |
| LDR | Gradient depends on light level; steeper in brighter light | More carriers freed by light, R falls |

Always say what R does as V rises, and give the reason, not only the shape.

## Variable resistors and meters

- **Potentiometer:** a resistor with a sliding contact across a supply. Moving the slider changes the fraction of the supply p.d. at the output, from zero to the full value.
- **Thermistor or LDR in a divider:** whichever component's resistance rises takes a larger share of the supply p.d.
- **Ammeter:** connect in series; ideal resistance is zero.
- **Voltmeter:** connect in parallel; ideal resistance is infinite.
- **Non-ideal meter:** the guide says its resistance is constant. Treat it as an extra resistor in the circuit and recalculate.

## Chemical and solar cells

- Both are sources of emf: they supply energy to charge carriers.
- A chemical cell converts stored chemical energy. Its internal resistance and the reactants used up are why the terminal p.d. drops under load and over time.
- A solar cell converts the energy of absorbed light. Its output depends on the light intensity falling on it.
- When asked to compare sources, give a pair: one advantage and one disadvantage, tied to the context in the question.

## Must-know distinctions

| Pair | Difference |
|---|---|
| emf and terminal p.d. | emf is the energy per coulomb the cell supplies; terminal p.d. is what is left after Ir is lost inside the cell |
| Resistance and resistivity | Resistance depends on size and shape; resistivity depends only on the material (and temperature) |
| Ohmic and non-ohmic | Ohmic: straight line through the origin. Non-ohmic: R changes with V or I |
| Ideal and non-ideal meters | Ideal ammeter: zero resistance. Ideal voltmeter: infinite resistance |
| Thermistor and LDR | Thermistor responds to temperature; LDR responds to light intensity |
| Chemical and solar cell | Chemical: stored reactants supply the energy. Solar: absorbed light supplies it |

## Energy sources: advantages and disadvantages

| Source | Advantage | Disadvantage |
|---|---|---|
| Chemical cell | Portable, steady p.d. | Small energy store; p.d. falls as it runs down; disposal |
| Solar cell | No fuel, no emissions in use | Output varies with light; large area for high power |
| Fossil fuel station | Reliable, high power on demand | Carbon dioxide emissions; finite reserves |
| Wind turbine | No fuel, low emissions in use | Depends on wind; needs space |

## Quick self-test

1. A resistor of 5.0 Ω has a p.d. of 2.4 V across it. Find the current.
2. Show that the unit of resistivity is the ohm metre.
3. A 12 Ω and a 4.0 Ω resistor are in parallel. Find the total resistance.
4. A cell of emf 9.0 V and internal resistance 1.5 Ω drives a current of 0.50 A. Find the terminal p.d.
5. A wire has resistance 6.0 Ω. A second wire of the same material and diameter is three times as long. Find its resistance.
6. A 20 Ω resistor dissipates 5.0 W. Find the current.
7. Explain why the resistance of a metal rises when it is heated.
8. In a divider, a 2.0 kΩ resistor is in series with an LDR of 6.0 kΩ across 8.0 V. Find the p.d. across the LDR.
9. What does an ideal voltmeter's resistance equal, and why does that matter?
10. Give one disadvantage of solar cells as an energy source.

### Answers

1. I = V/R = 2.4 ÷ 5.0 = 0.48 A.
2. ρ = RA/L, so the unit is Ω × m² ÷ m = Ω m.
3. 1/Rp = 1/12 + 1/4 = 4/12, so Rp = 3.0 Ω.
4. V = ε − Ir = 9.0 − 0.50 × 1.5 = 8.25 V.
5. R is proportional to L at fixed A, so R = 3 × 6.0 = 18 Ω.
6. I = √(P/R) = √(5.0 ÷ 20) = 0.50 A.
7. Lattice ions vibrate with larger amplitude, so electrons collide with them more often and move less freely.
8. Share of LDR = 8.0 × 6.0 ÷ 8.0 = 6.0 V.
9. Infinite, so it draws no current from the circuit and does not change the p.d. being measured.
10. Output depends on light intensity, so it is unreliable at night or in cloud (or: low power per unit area).

## Where marks are usually lost

- Writing a bare formula and answer with no substitution shown.
- Leaving the time in minutes in q = IΔt.
- Converting a diameter to an area without halving it first.
- Forgetting to convert mm² to m² (a factor of 10⁶) or kΩ to Ω.
- Quoting "resistance is V/I" for the gradient of a curve.
- Using the emf as the p.d. across the external resistor when internal resistance is given.
- Explaining the heating effect without naming the lattice ions and collisions.
- Giving only an advantage when a question asks you to compare sources.

## Official syllabus

Source: *Physics guide*, first assessment 2025, International Baccalaureate Organization (Diploma Programme), sub-topic B.5 Current and circuits.
