---
title: "OxfordAQA A-Level Physics (9630): Basics of electricity"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.4 – Electricity"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "AS"
order: 4.1
syllabusTopics:
  - qualification: "a-level"
    topic: "electricity-oxfordaqa-alevel"
    subtopic: "basics-of-electricity-oxfordaqa"
description: "Study guide to OxfordAQA 9630 section 3.4.1: current as rate of flow of charge, potential difference as work per unit charge, resistance and graph skills."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.4.1, Basics of electricity, the first part of Section 3.4 Electricity. It is shared International AS and A-level content. Sections 3.4.1 to 3.4.3 are taught together in the [current, p.d., resistance, I-V characteristics and resistivity study guide](/resources/oxfordaqa-a-level-physics-current-p-d-resistance-i-v-characteristics-and/). After this page, condense it with the [basics of electricity revision notes](/resources/oxfordaqa-a-level-physics-9630-basics-of-electricity-oxfordaqa-revision-notes/) and test yourself with the [basics of electricity practice questions](/resources/oxfordaqa-a-level-physics-9630-basics-of-electricity-oxfordaqa-practice/).

Take e = 1.60 × 10⁻¹⁹ C throughout.

## What the specification asks for

Section 3.4.1 is short, but every later electricity topic is built on it:

| Statement | Equation | What you must be able to do |
|---|---|---|
| Electric current as the rate of flow of charge | I = ΔQ/Δt | Find current, charge or time; link charge to numbers of electrons |
| Potential difference as work done per unit charge | V = W/Q | Find energy transferred, charge or pd |
| Resistance defined as R = V/I | R = V/I | Find resistance at any operating point |

## Current: rate of flow of charge

A current is a flow of charged particles. In metals the charge carriers are free (delocalised) electrons; in an electrolyte they are positive and negative ions. Whatever the carriers, the current is the charge passing a point per unit time:

I = ΔQ/Δt

The ampere is an SI base unit. The coulomb is defined from it: 1 C is the charge passing a point when a current of 1 A flows for 1 s, so 1 C = 1 A s.

**Conventional current** is shown from the positive terminal to the negative terminal round the external circuit. Electrons in a metal drift the other way. Equations do not depend on this choice, but a question may ask you to state the direction of electron flow.

**Charge is quantised.** Any charge carried by electrons is a whole number of electron charges: ΔQ = Ne. So the number of electrons passing a point is N = ΔQ/e = IΔt/e.

### Worked example 1: charging a phone

A phone charger supplies a steady 1.8 A for 1.5 hours. Find the charge delivered and the number of electrons that pass through the charging cable.

Δt = 1.5 × 3600 = 5400 s.

ΔQ = IΔt = 1.8 × 5400 = 9.72 × 10³ C.

N = ΔQ/e = 9.72 × 10³ / 1.60 × 10⁻¹⁹ = **6.1 × 10²² electrons**.

Hours and minutes must become seconds before you substitute; mA becomes A.

## Graphs of current and charge

Because I = ΔQ/Δt, two graph skills follow directly:

- On a graph of **charge against time**, the gradient is the current. A straight line means a constant current; a curve that flattens means the current is falling.
- On a graph of **current against time**, the charge that has flowed is the area under the line, because each small strip has area IΔt = ΔQ.

### Worked example 2: a changing current

The current in a component rises steadily from 0 to 0.60 A over 4.0 s, then stays at 0.60 A for a further 6.0 s. Find the total charge and the average current over the 10 s.

Triangle: ½ × 0.60 × 4.0 = 1.2 C. Rectangle: 0.60 × 6.0 = 3.6 C.

Total charge = **4.8 C**. Average current = 4.8 / 10 = **0.48 A**.

The average is not halfway between 0 and 0.60 A, because the current spends longer at its maximum.

### Worked example 3: reading a gradient

The charge that has passed through a resistor rises uniformly from 0 to 15 mC in 25 ms. Find the current.

I = ΔQ/Δt = 15 × 10⁻³ / 25 × 10⁻³ = **0.60 A**. The prefixes cancel here, but only because both are milli.

## Potential difference: work done per unit charge

The potential difference between two points is the work done (energy transferred) per unit charge moving between them:

V = W/Q, so W = QV.

The volt is one joule per coulomb. A pd of 6 V across a lamp means 6 J is transferred from electrical energy to heating and light for each coulomb passing through it. Combining with Q = It gives W = VIt, the form used in section 3.4.4.

For a single electron, W = eV. A useful consequence: an electron moved through 1 V gains or loses 1.60 × 10⁻¹⁹ J, which is the electron volt used in section 3.5.9.

### Worked example 4: an electron beam

An electron gun produces 3.0 × 10¹⁵ electrons per second, each accelerated through a pd of 2.0 kV. Find the beam current, the energy given to each electron, and the energy transferred per second.

I = Ne/t = 3.0 × 10¹⁵ × 1.60 × 10⁻¹⁹ = **4.8 × 10⁻⁴ A**.

Energy per electron = eV = 1.60 × 10⁻¹⁹ × 2.0 × 10³ = **3.2 × 10⁻¹⁶ J**.

Energy per second = 3.0 × 10¹⁵ × 3.2 × 10⁻¹⁶ = **0.96 J s⁻¹** (0.96 W). This equals VI = 2000 × 4.8 × 10⁻⁴, as it should.

## Resistance

Resistance is defined as the ratio of the pd across a component to the current through it:

R = V/I

The ohm is one volt per ampere. The definition applies at every point on any component's characteristic, whether or not the component obeys Ohm's law (section 3.4.2). For a component whose resistance changes, R = V/I gives the resistance at that particular pd and current; it is not the gradient of the I-V graph.

### Worked example 5: a heater

A heater transfers 34.5 kJ of energy while 150 C of charge flows through it in 30 s. Find the pd across it, the current and its resistance.

V = W/Q = 34.5 × 10³ / 150 = **230 V**.

I = Q/t = 150 / 30 = **5.0 A**.

R = V/I = 230 / 5.0 = **46 Ω**.

## Units in base units

Section 3.1.1 covers derived SI units, so you may be asked to express these units in base units. The chain from section 3.4.1 is:

| Unit | Definition | Base units |
|---|---|---|
| Coulomb | A s | A s |
| Volt | J C⁻¹ = J A⁻¹ s⁻¹ | kg m² s⁻³ A⁻¹ |
| Ohm | V A⁻¹ | kg m² s⁻³ A⁻² |

The joule is kg m² s⁻², so dividing by A s gives the volt in base units.

## Measuring current and pd

- An **ammeter** goes in series, so the same charge flows through it as through the component. An ideal ammeter has zero resistance.
- A **voltmeter** goes in parallel, across the component, so it compares the energy per coulomb on either side. An ideal voltmeter has infinite resistance and takes no current.

Unless a question says otherwise, treat both meters as ideal.

## Common mistakes

- Leaving time in minutes or hours.
- Confusing charge (C) with current (A), or writing current as "the flow of charge" without "rate".
- Defining pd as "the energy of the charges" rather than work done per unit charge.
- Taking resistance as the gradient of a curved I-V graph.
- Forgetting the 10⁻³ in mC, mA or ms when only one of the quantities has a prefix.
- Dividing by e when finding a charge, rather than when finding a number of electrons.

## Exam technique

- **Define** current: "the rate of flow of charge", optionally with I = ΔQ/Δt and the symbols named.
- **Define** pd: "the work done per unit charge" (or energy transferred per unit charge) between two points.
- **Define** resistance: "the ratio of pd across a component to the current through it".
- **Calculate**: write the equation, substitute with units converted, give the answer with a unit.
- **Show that**: keep an extra significant figure and state the comparison.
- **Explain** a graph: name what the gradient or the area represents and why.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.4.1 Basics of electricity, published by OxfordAQA.
