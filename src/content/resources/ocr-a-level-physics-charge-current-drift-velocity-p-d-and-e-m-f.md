---
title: "OCR A Level Physics A: Charge, current, drift velocity, p.d. and e.m.f. (H556)"
seoTitle: "OCR A Level Physics Charge, Drift Velocity, EMF Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Charge, current, drift velocity, p.d. and e.m.f."
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 48
syllabusTopics:
  - qualification: "a-level"
    topic: "electrons-waves-and-photons"
    subtopic: "charge-and-current-ocr-alevel"
  - qualification: "a-level"
    topic: "electrons-waves-and-photons"
    subtopic: "energy-power-and-resistance"
description: "Study guide to charge, current, Kirchhoff's first law, drift velocity, circuit symbols, p.d. and e.m.f. for OCR A Level Physics A (H556)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
This guide covers sections 4.1.1, 4.1.2, 4.2.1 and 4.2.2 of the OCR Advanced GCE in Physics A specification (H556), Version 3.0 (March 2026), for first assessment in 2017. H556 is the full A level. Resistance, resistivity and electrical power (the rest of 4.2) have their own pages and are not repeated here.

See the [OCR A Level Physics hub](/boards/ocr/a-level/physics/) and the [printable checklist](/checklists/ocr/a-level/physics/). Pair this page with the [revision notes](/resources/ocr-a-level-physics-charge-current-drift-velocity-p-d-and-e-m-f-revision-notes/) and the [practice questions](/resources/ocr-a-level-physics-charge-current-drift-velocity-p-d-and-e-m-f-practice/). Check where you stand with the [free diagnostics](/diagnostics/). Unit conversions and significant figures are covered in [Foundations of Physics](/resources/ocr-a-level-physics-foundations-of-physics/).

Values used in the worked examples: e = 1.6 × 10⁻¹⁹ C, electron mass 9.11 × 10⁻³¹ kg and proton mass 1.67 × 10⁻²⁷ kg. In a question, use the values it supplies.

## What you must be able to do

| Statement | Content |
|---|---|
| 4.1.1(a)-(b) | Current as rate of flow of charge, I = ΔQ/Δt; the coulomb |
| 4.1.1(c)-(d) | Elementary charge e; charge is quantised |
| 4.1.1(e)-(f) | Electrons in metals, ions in electrolytes; conventional current and electron flow |
| 4.1.1(g) | Kirchhoff's first law and conservation of charge |
| 4.1.2(a)-(c) | Mean drift velocity; I = Anev; conductors, semiconductors and insulators in terms of n |
| 4.2.1(a)-(b) | Circuit symbols and circuit diagrams |
| 4.2.2(a)-(e) | p.d. and the volt; e.m.f.; e.m.f. against p.d.; W = VQ and W = EQ; eV = ½mv² |

## Charge and current (4.1.1)

Electric current is the rate of flow of charge. For a steady current:

I = ΔQ / Δt

I is in amperes (A), ΔQ in coulombs (C) and Δt in seconds (s). The coulomb is the charge delivered by a steady 1 A in 1 s, so 1 C = 1 A s. Convert minutes to seconds before substituting.

**Elementary charge.** The smallest free charge you meet is e = 1.6 × 10⁻¹⁹ C. An electron has charge −e and a proton has charge +e. A neutral atom has equal numbers of each.

**Quantisation.** The net charge on any particle or object is a whole-number multiple of e: Q = ne, where n is an integer (positive for a deficit of electrons, negative for an excess). A charge of 2.4 × 10⁻¹⁹ C would not be allowed, because it is 1.5e.

### Worked example 1: charge and electron count

A torch bulb passes 90 C in 2.5 minutes. Find the current, then the number of electrons passing a point each second.

```
Δt = 2.5 × 60 = 150 s
I = ΔQ / Δt = 90 / 150 = 0.60 A
electrons per second = I / e = 0.60 / (1.6 × 10⁻¹⁹) = 3.75 × 10¹⁸ ≈ 3.8 × 10¹⁸ s⁻¹
```

### Worked example 2: quantisation

A plastic rod carries a net charge of −9.6 × 10⁻¹⁹ C. Number of excess electrons: 9.6 × 10⁻¹⁹ / 1.6 × 10⁻¹⁹ = 6. A charge of +6.4 × 10⁻¹⁹ C means 4 electrons are missing.

### Charge carriers and the direction of current

In a metal the carriers are delocalised (free) electrons moving through a lattice of fixed positive ions. In an electrolyte (a solution or molten compound containing ions) the carriers are ions: positive ions move towards the negative electrode and negative ions move towards the positive electrode. Both motions add to the current, so the total current in an electrolyte is the sum of both contributions.

**Conventional current** is taken to run out of the positive terminal of a source, through the external circuit and back into the negative terminal. **Electron flow** in a metal is the opposite way, because electrons are negative and are pushed towards the positive terminal. The two descriptions are equivalent. Use conventional current for arrows on diagrams unless a question asks for electron flow.

### Kirchhoff's first law

At a junction, total current in equals total current out. This follows from conservation of charge: in a steady current nothing accumulates at the junction, so whatever charge arrives each second must leave.

**Worked example 3.** Currents of 4.2 A and 1.5 A enter a junction. One current of 3.1 A leaves, along with a second, I.

```
Σ I in = Σ I out
4.2 + 1.5 = 3.1 + I
I = 5.7 − 3.1 = 2.6 A
```

## Mean drift velocity (4.1.2)

Charge carriers in a wire move randomly and quickly, but an electric field adds a slow net movement along the wire. That net movement is the **mean drift velocity** v. Typical drift velocities in metals are a fraction of a millimetre per second, yet a lamp lights almost at once, because the field is set up through the whole circuit at close to the speed of light and every carrier starts to drift together.

### Deriving I = Anev

Take a conductor of cross-sectional area A, with n charge carriers per unit volume (the **number density**, in m⁻³), each of charge e, drifting at mean speed v.

```
In time t, carriers move a distance vt.
Volume of conductor passed = A v t
Number of carriers in that volume = n A v t
Charge passing = n A v t e
I = charge / time = n A v e
```

So **I = Anev**. For ions of charge ze the same working gives I = Anzev, where ze is the magnitude of each ion's charge.

### Worked example 4: drift speed in a cable

A copper cable has a cross-sectional area of 2.5 × 10⁻⁶ m² and carries 13 A. For copper, n = 8.5 × 10²⁸ m⁻³ (given).

```
v = I / (A n e)
v = 13 / (2.5 × 10⁻⁶ × 8.5 × 10²⁸ × 1.6 × 10⁻¹⁹)
v = 13 / (3.4 × 10⁴) = 3.8 × 10⁻⁴ m s⁻¹
```

At that speed an electron needs 2.0 / 3.8 × 10⁻⁴ ≈ 5.2 × 10³ s, about 87 minutes, to travel 2.0 m.

### Using proportion

At constant I and n, v ∝ 1/A. Because A = πd²/4, halving the diameter reduces A to a quarter, so the drift velocity becomes four times larger. Where two wires of different thickness are in series, the thinner one has the larger drift velocity.

### Conductors, semiconductors and insulators

Compare the materials by n, using I = Anev.

| Material type | Number density n | Consequence |
|---|---|---|
| Conductor (metal) | Very large, of the order 10²⁸ to 10²⁹ m⁻³ | Large current for a very small drift velocity |
| Semiconductor | Many orders of magnitude smaller than a metal | Same current needs a far higher drift velocity; n rises when the material is warmed or lit |
| Insulator | Extremely small (almost no free carriers) | Negligible current even with a large applied p.d. |

For a given current and area, the smaller n is, the larger v must be. The rise of n with temperature in a semiconductor is why a negative temperature coefficient thermistor conducts better when warm.

## Circuit symbols and diagrams (4.2.1)

The specification points to the ASE publication Signs, Symbols and Systematics for the symbols. Learn to recognise and draw the standard set. Describing common ones:

| Component | How it is drawn |
|---|---|
| Cell | One long thin line (positive) and one short thick line (negative) |
| Battery | Two or more cells in series, drawn as repeated long and short lines |
| Switch | A gap in the wire with a hinged contact |
| Fixed resistor | A rectangle in the wire |
| Variable resistor | A rectangle with an arrow through it |
| Filament lamp | A circle containing a cross |
| Diode | A triangle pointing along conventional current, with a bar at its tip |
| LED | A diode symbol with two arrows pointing away from it |
| Ammeter | A circle with the letter A inside |
| Voltmeter | A circle with the letter V inside |
| Thermistor, LDR | A rectangle with a feature showing the dependence (a temperature line or light arrows) |
| Fuse | A rectangle with a line through its length |

**Diagram rules.** Draw straight lines with a ruler, use closed loops, and mark junctions with a dot. Put an ammeter **in series** with the component and a voltmeter **in parallel** across it. Label each component.

## E.m.f. and p.d. (4.2.2)

**Potential difference (p.d.)** between two points is the energy transferred per unit charge when charge moves from one point to the other, from electrical energy to other forms (thermal, light, kinetic). Equation:

V = W / Q

The **volt** is the unit: 1 V = 1 J C⁻¹, one joule per coulomb. In SI base units 1 V = 1 kg m² s⁻³ A⁻¹, which follows from J = kg m² s⁻² and C = A s.

**Electromotive force (e.m.f.)**, symbol E, of a source such as a cell or power supply is the energy transferred **to** the charge per unit charge, from chemical (or other) energy to electrical energy:

E = W / Q

The symbol E for e.m.f. should not be confused with E for energy, electric field strength or Young modulus.

| | e.m.f. | p.d. |
|---|---|---|
| Energy change | Other form to electrical | Electrical to other forms |
| Where | In the source | Across a component |
| Rearranged equation | W = EQ | W = VQ |

Both are measured in volts. A source with e.m.f. 9.0 V gives 9.0 J to every coulomb that passes through it. Some of that energy can be transferred as thermal energy inside the source itself, so the energy per coulomb delivered to the outside circuit can be less.

### Worked example 5: W = VQ and W = EQ

(a) 25 C passes through a resistor with a p.d. of 6.0 V across it. W = VQ = 6.0 × 25 = 150 J transferred to thermal energy.

(b) A cell of e.m.f. 1.5 V drives 40 C round a circuit. W = EQ = 1.5 × 40 = 60 J of chemical energy becomes electrical energy.

### Charged particles accelerated through a p.d.: eV = ½mv²

An electron released from rest between two plates with a p.d. V across them gains kinetic energy equal to the electrical energy transferred, eV (charge × p.d.):

eV = ½mv²   so   v = √(2eV / m)

The same method works for any particle: replace e with the particle's charge. The equation assumes the final speed is much less than the speed of light.

### Worked example 6: electron gun

Electrons start from rest and are accelerated through 750 V. Find their speed.

```
v = √(2 × 1.6 × 10⁻¹⁹ × 750 / 9.11 × 10⁻³¹)
v = √(2.64 × 10¹⁴) = 1.6 × 10⁷ m s⁻¹
```

Reversing it: for electrons to reach 1.0 × 10⁷ m s⁻¹ you need V = mv² / 2e = 9.11 × 10⁻³¹ × (1.0 × 10⁷)² / (2 × 1.6 × 10⁻¹⁹) = 2.8 × 10² V (285 V before rounding).

## Common errors

- Leaving time in minutes in I = ΔQ/Δt.
- Writing the drift velocity formula as I = Anev but using the diameter instead of the area. Calculate A = πd²/4 first.
- Calling a drift velocity "fast" because a lamp lights instantly. The signal is quick; the carriers are slow.
- Saying e.m.f. is "a force". It is an energy per unit charge.
- Using eV = ½mv² with the proton mass for an electron.
- Drawing a voltmeter in series.

## Next steps

Try the [practice questions](/resources/ocr-a-level-physics-charge-current-drift-velocity-p-d-and-e-m-f-practice/) and condense with the [revision notes](/resources/ocr-a-level-physics-charge-current-drift-velocity-p-d-and-e-m-f-revision-notes/).

## Official syllabus

OCR Advanced GCE in Physics A (H556), Version 3.0 (March 2026), for first assessment in 2017, published by OCR. Sections 4.1.1, 4.1.2, 4.2.1 and 4.2.2.
